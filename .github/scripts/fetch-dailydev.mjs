// Tải RSS feed công khai của daily.dev và lưu thành JSON cho Jekyll.
// Chạy trong GitHub Actions (Node 20+, có sẵn fetch & DOMParser thay thế bằng regex đơn giản).
// Không dùng thư viện ngoài để workflow gọn và không cần cài đặt.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const RSS_URL = process.env.DAILYDEV_RSS_URL || '';
const OUT = 'docs/_data/dailydev.json';
const MAX_ITEMS = 12;

function emptyOut(reason) {
  const data = { updatedAt: new Date().toISOString(), configured: false, reason, items: [] };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log('Ghi file rỗng:', reason);
}

// Trích nội dung giữa 2 thẻ, hỗ trợ cả CDATA.
function pick(block, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(re);
  if (!m) return '';
  let v = m[1].trim();
  const cdata = v.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  if (cdata) v = cdata[1].trim();
  return v;
}

// Lấy href của thẻ <link href="..."/> (Atom) nếu có.
function pickLinkHref(block) {
  const m = block.match(/<link[^>]*href=["']([^"']+)["'][^>]*>/i);
  return m ? m[1] : '';
}

function stripHtml(s) {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstImage(block) {
  // media:content / media:thumbnail / enclosure / img trong description
  let m =
    block.match(/<media:(?:content|thumbnail)[^>]*url=["']([^"']+)["']/i) ||
    block.match(/<enclosure[^>]*url=["']([^"']+)["']/i) ||
    block.match(/<img[^>]*src=["']([^"']+)["']/i);
  return m ? m[1] : '';
}

export function parse(xml) {
  // Hỗ trợ cả RSS (<item>) lẫn Atom (<entry>)
  const isAtom = /<feed[\s>]/i.test(xml) && /<entry[\s>]/i.test(xml);
  const tag = isAtom ? 'entry' : 'item';
  const re = new RegExp(`<${tag}[\\s>][\\s\\S]*?<\\/${tag}>`, 'gi');
  const blocks = xml.match(re) || [];
  const items = [];

  for (const block of blocks) {
    const title = stripHtml(pick(block, 'title'));
    let link = pick(block, 'link');
    if (!link) link = pickLinkHref(block);
    const rawDesc =
      pick(block, 'description') ||
      pick(block, 'summary') ||
      pick(block, 'content') ||
      pick(block, 'content:encoded');
    const summary = stripHtml(rawDesc).slice(0, 180);
    const date =
      pick(block, 'pubDate') ||
      pick(block, 'updated') ||
      pick(block, 'published') ||
      pick(block, 'dc:date');
    const image = firstImage(block);

    if (title && link) {
      items.push({
        title,
        link,
        summary,
        date: date || '',
        image: image || ''
      });
    }
    if (items.length >= MAX_ITEMS) break;
  }
  return items;
}

async function main() {
  if (!RSS_URL) {
    emptyOut('Chưa cấu hình biến DAILYDEV_RSS_URL trong repo.');
    return;
  }
  try {
    const res = await fetch(RSS_URL, {
      headers: { 'User-Agent': 'QuocDang-site-bot/1.0', Accept: 'application/rss+xml, application/xml, text/xml, */*' }
    });
    if (!res.ok) {
      emptyOut(`RSS trả về HTTP ${res.status}`);
      return;
    }
    const xml = await res.text();
    const items = parse(xml);
    const data = {
      updatedAt: new Date().toISOString(),
      configured: true,
      count: items.length,
      items
    };
    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, JSON.stringify(data, null, 2));
    console.log(`Đã lưu ${items.length} bài vào ${OUT}`);
  } catch (err) {
    emptyOut('Lỗi khi tải RSS: ' + (err && err.message ? err.message : String(err)));
  }
}

// Chỉ chạy khi gọi trực tiếp (node fetch-dailydev.mjs), không chạy khi import để test.
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('fetch-dailydev.mjs')) {
  main();
}
