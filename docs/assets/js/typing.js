(function () {
  'use strict';

  // ---------- Nguồn từ ----------
  var WORDS = {
    vi: ('toi ban hoc tap lam viec moi ngay nha cua xe may tinh dien thoai ' +
      'con nguoi tho gian am thuc du lich sach vo but muc ban ghe cua so ' +
      'troi mua nang gio mat troi dong song canh dong con duong thanh pho ' +
      'niem vui noi buon tinh yeu gia dinh ban be dong nghiep uoc mo tuong lai ' +
      'co gang kien tri thanh cong that bai bai hoc kinh nghiem thoi gian khong gian').split(' '),
    en: ('the quick brown fox jumps over a lazy dog time people work year day ' +
      'water music light house book hand world life code learn type speed focus ' +
      'simple happy green river mountain office coffee morning night dream future ' +
      'always never maybe together alone strong gentle bright silent window travel ' +
      'program keyboard screen design build create solve problem question answer').split(' '),
    code: ('const let var function return if else for while class new this import ' +
      'export default async await try catch throw null true false => === !== ++ -- ' +
      '{} [] () ; : . , && || map filter reduce push pop length typeof instanceof ' +
      'console.log() String Number Array Object Promise setTimeout useState').split(' ')
  };

  // ---------- State ----------
  var state = {
    lang: 'vi',
    duration: 30,
    text: '',
    typed: '',
    started: false,
    finished: false,
    startTime: 0,
    timerId: null,
    remaining: 30,
    correct: 0,
    incorrect: 0
  };

  // ---------- DOM ----------
  var $ = function (id) { return document.getElementById(id); };
  var box = $('typingBox'), textEl = $('typingText'), input = $('typingInput');
  var langSeg = $('langSeg'), timeSeg = $('timeSeg'), restartBtn = $('restartBtn');
  var statTime = $('statTime'), statWpm = $('statWpm'), statAcc = $('statAcc'), statChars = $('statChars');
  var overlay = $('resultOverlay');

  if (!box) return; // không ở trang gõ

  // ---------- Sinh văn bản ----------
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function generateText() {
    var pool = WORDS[state.lang] || WORDS.vi;
    var out = [];
    // 60 từ ngẫu nhiên là quá đủ cho mọi khung thời gian
    for (var i = 0; i < 60; i++) {
      out.push(shuffle(pool)[0]);
    }
    return out.join(' ') + ' ';
  }

  function renderText() {
    var html = '';
    for (var i = 0; i < state.text.length; i++) {
      var ch = state.text[i];
      var display = ch === ' ' ? '&nbsp;' : escapeHtml(ch);
      html += '<span class="char" data-i="' + i + '">' + display + '</span>';
    }
    textEl.innerHTML = html;
    markCurrent();
  }

  function escapeHtml(c) {
    return c.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ---------- Highlight ----------
  function markCurrent() {
    var chars = textEl.children;
    for (var i = 0; i < chars.length; i++) chars[i].classList.remove('current');
    if (state.typed.length < chars.length) {
      chars[state.typed.length].classList.add('current');
    }
    highlightKeyboard();
  }

  function paint() {
    var chars = textEl.children;
    for (var i = 0; i < state.typed.length && i < chars.length; i++) {
      if (state.typed[i] === state.text[i]) {
        chars[i].className = 'char correct';
      } else {
        chars[i].className = 'char incorrect';
      }
    }
    // reset các ký tự chưa gõ (trường hợp xoá lùi)
    for (var j = state.typed.length; j < chars.length; j++) {
      chars[j].className = 'char';
    }
    markCurrent();
  }

  // ---------- Bộ đếm & chỉ số ----------
  function start() {
    if (state.started) return;
    state.started = true;
    state.startTime = Date.now();
    box.classList.add('started');
    state.timerId = setInterval(tick, 200);
  }

  function tick() {
    var elapsed = (Date.now() - state.startTime) / 1000;
    state.remaining = Math.max(0, state.duration - elapsed);
    statTime.textContent = Math.ceil(state.remaining);
    updateStats(elapsed);
    if (state.remaining <= 0) finish();
  }

  function updateStats(elapsed) {
    var e = elapsed || ((Date.now() - state.startTime) / 1000);
    var total = state.correct + state.incorrect;
    var acc = total === 0 ? 100 : Math.round((state.correct / total) * 100);
    var minutes = e / 60;
    // WPM chuẩn: mỗi 5 ký tự đúng = 1 từ
    var wpm = minutes > 0 ? Math.round((state.correct / 5) / minutes) : 0;
    statWpm.textContent = wpm;
    statAcc.textContent = acc + '%';
    statChars.textContent = state.correct;
    return { wpm: wpm, acc: acc };
  }

  // ---------- Nhập liệu ----------
  function onInput(e) {
    if (state.finished) return;
    var value = input.value;
    if (!state.started && value.length > 0) start();

    // nếu cần, nối thêm văn bản để không bao giờ hết
    if (value.length > state.text.length - 20) {
      state.text += generateText();
      renderText();
    }

    state.typed = value;

    // đếm đúng/sai (đếm lại từ đầu để chính xác khi xoá lùi)
    var correct = 0, incorrect = 0;
    for (var i = 0; i < value.length; i++) {
      if (value[i] === state.text[i]) correct++; else incorrect++;
    }
    state.correct = correct;
    state.incorrect = incorrect;

    paint();
    if (state.started) updateStats();
  }

  // ---------- Kết thúc ----------
  function finish() {
    state.finished = true;
    clearInterval(state.timerId);
    input.blur();
    var r = updateStats();
    $('rWpm').textContent = r.wpm;
    $('rAcc').textContent = r.acc + '%';
    $('rChars').textContent = state.correct;
    $('rErr').textContent = state.incorrect;
    $('resultNote').textContent = noteFor(r.wpm, r.acc);
    overlay.hidden = false;
  }

  function noteFor(wpm, acc) {
    if (wpm === 0) return 'Hãy thử gõ gì đó nhé!';
    if (wpm >= 70 && acc >= 95) return 'Xuất sắc! Tốc độ chuyên nghiệp 🔥';
    if (wpm >= 50) return 'Rất tốt! Bạn gõ nhanh hơn phần lớn mọi người 👏';
    if (wpm >= 30) return 'Khá ổn! Luyện thêm chút nữa là nhanh thôi 💪';
    return 'Khởi đầu tốt! Cứ luyện mỗi ngày sẽ tiến bộ nhanh 🌱';
  }

  // ---------- Reset ----------
  function reset() {
    clearInterval(state.timerId);
    state.typed = '';
    state.started = false;
    state.finished = false;
    state.correct = 0;
    state.incorrect = 0;
    state.remaining = state.duration;
    state.text = generateText();
    input.value = '';
    input.disabled = false;
    box.classList.remove('started');
    overlay.hidden = true;
    statTime.textContent = state.duration;
    statWpm.textContent = '0';
    statAcc.textContent = '100%';
    statChars.textContent = '0';
    renderText();
  }

  // ---------- Bàn phím ảo ----------
  var KB_ROWS = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    [' ']
  ];
  var HOME_KEYS = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
  var keyMap = {};

  function buildKeyboard() {
    var kb = $('keyboard');
    if (!kb) return;
    kb.innerHTML = '';
    KB_ROWS.forEach(function (row) {
      var rowEl = document.createElement('div');
      rowEl.className = 'kb-row';
      row.forEach(function (k) {
        var key = document.createElement('div');
        key.className = 'key';
        if (k === ' ') { key.classList.add('space'); key.textContent = 'space'; }
        else { key.textContent = k; }
        if (HOME_KEYS.indexOf(k) !== -1) key.classList.add('home-key');
        keyMap[k] = key;
        rowEl.appendChild(key);
      });
      kb.appendChild(rowEl);
    });
  }

  function highlightKeyboard() {
    Object.keys(keyMap).forEach(function (k) { keyMap[k].classList.remove('next'); });
    var next = state.text[state.typed.length];
    if (next) {
      var low = next === ' ' ? ' ' : next.toLowerCase();
      if (keyMap[low]) keyMap[low].classList.add('next');
    }
  }

  function flashKey(key) {
    var low = key === ' ' ? ' ' : key.toLowerCase();
    var el = keyMap[low];
    if (!el) return;
    el.classList.add('active');
    setTimeout(function () { el.classList.remove('active'); }, 100);
  }

  // ---------- Sự kiện ----------
  box.addEventListener('click', function () { input.focus(); });
  input.addEventListener('focus', function () { box.classList.add('focused'); });
  input.addEventListener('blur', function () { box.classList.remove('focused'); });
  input.addEventListener('input', onInput);
  input.addEventListener('keydown', function (e) {
    if (e.key && e.key.length === 1) flashKey(e.key);
    else if (e.key === ' ') flashKey(' ');
  });

  function selectInGroup(group, btn) {
    group.querySelectorAll('button').forEach(function (x) {
      var on = x === btn;
      x.classList.toggle('active', on);
      x.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  langSeg.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    selectInGroup(langSeg, b);
    state.lang = b.dataset.lang;
    reset();
  });

  timeSeg.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    selectInGroup(timeSeg, b);
    state.duration = parseInt(b.dataset.time, 10);
    reset();
  });

  restartBtn.addEventListener('click', reset);
  $('resultRestart').addEventListener('click', function () { reset(); input.focus(); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { reset(); }
  });

  // ---------- Khởi tạo ----------
  buildKeyboard();
  reset();
})();
