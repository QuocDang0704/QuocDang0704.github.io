---
layout: post
title:  "Tìm hiểu về Class Diagram"
date:   2021-09-29 13:30:18 +0700
categories: jekyll update
---

**UML Class Diagram Tutorial**

**I. Khái niệm**

- **Class diagram** mô tả kiểu của các đối tượng trong hệ thống và các loại quan hệ khác nhau tồn tại giữa chúng.Đồng thời cũng là 1 kỹ thuật mô hình hóa tồn tại ở tất cả các phương pháp phát triển hướng đối tượng.

- Dùng class diagram giúp các lập trình viên trao đổi và hiểu nhau hơn.

**II. Các tính chất cơ bản của Class Diagram**

+ Tên class

+ Attribute (field, property)

+ Operation(method, function)

**Ví dụ:**

![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.001.png)

Như các bạn đã thấy thì ví dụ trên có tên class là **car,** Attribute là **(id:int, name:String, category:String)** và có Operation là(**run(): void**)

**III. Các quyền truy cập trong class diagram**

- Sử dụng để đặc tả phạm vi truy cập cho các Attribute và Operation của 1 class (Cấp quyền cho các class khác sử dụng Attribute và Operation của class này).
- 4 lựa chọn phạm vi truy cập 
  - Private :Chỉnh mình các đối tượng được tạo từ class này có thể sử dụng.
    - Được ký hiệu trong **class diagram** là** (-)
  - Protected ( # ): Chỉ các đối tượng được tạo từ class này và class kế thừa từ class này có thể sử dụng.
    - Được ký hiệu trong **class diagram** là** (#)
  - Package/Default: Các đối tượng được tạo từ class trong lớp cùng gói có thể sử dụng.
    - Được ký hiệu trong **class diagram** là** ( )
  - Public ( + ): Mọi đối tượng đều có thể sử dụng.
    - Được ký hiệu trong **class diagram** là** (+)

**Ví dụ:**

![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.002.png)

**IV. Các mối quan hệ giữa các Class**

- Các mối quan hệ trong trong class diagram được sử dụng để thể hiện mối qua hệ giữa các Class, giữa class này với Class khác .
- Có 6 loại thể hiện mối quan hệ:
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.003.png)

**Inheritance**  

- Inheritance: 1 class kế thừa từ 1 class khác.
  - 1 Class chỉ kế thừa được duy nhất bởi 1 Class khác
  - Tên của  abstract class  sẽ được viết in nghiêng

**Ví dụ** Class lamborghini và Class mercedes có những thuộc tính của 1 chiếc ô tô nên ta kế thừa Class car
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.004.png)


**Association**

- **Association** thể hiện mối qua hệ giữa 2 class trong UML có liên hệ với nhau nhưng không chỉ rõ mối liên hệ.Nó thể hiện 1 liên kết cấu trúc giữa các lớp ngang hàng

**Ví dụ** Có 1 liên kết nhỏ giữa Class lamborghini và Class mercedes nhưng nó không chỉ rõ mối qua hệ 
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.005.png)


**Cardinality**

- Cardinality được thể hiện dước dạng 
- 1 – 1
- 1 – N
- N - N

![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.006.png)

**Aggregation**

- **Aggregation** là 1 kiểu liên kết đặc biệt nó đại diện cho một mối quan hệ "một phần của"
  - Nếu Class A mất thì đối tượng tạo ra class A là Class B vẫn tồi tại độc lập hay nói cách khác là (Class A là 1 phần của Class B)
- Nếu Class A mất thì đối tượng tạo ra class A là Class B vẫn tồi tại độc lập hay nói cách khác là (Class A là 1 phần của Class B)

**Ví dụ**  Class lamborghini và Class mercedes đểu được sản xuất bởi nhà sản xuất, nếu Class lamborghini và Class mercedes mất đi thì Class product vẫn tồn tại, bởi nó có thể sản xuất xe khác.
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.007.png)

**Composition**

- **Composition** là Một kiểu tập hợp đặc biệt mà các bộ phận bị phá hủy khi toàn bộ bị phá hủy.
- Nếu Class mất thì Class B cũng sẽ mất hay nói cách khác là (Class A là sống và chết  với Class B)

**Ví dụ** Nếu nhà sản xuất oto mất đi, thì các nhân viên trong sản xuất đó sẽ mất đi, vì thế ta nói class staff sống và chết với class product.
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.008.png)

**Dependency**

- Một đối tượng của một lớp có thể sử dụng một đối tượng của lớp khác trong mã của một phương thức. Nếu đối tượng không được lưu trữ trong bất kỳ trường nào, thì đối tượng này được mô hình hóa như một mối quan hệ phụ thuộc
  - Tồn tại giữa hai lớp nếu những thay đổi đối với định nghĩa của một lớp có thể gây ra những thay đổi cho lớp kia (nhưng không phải ngược lại
  - Class A phụ thuộc vào Class B

**Realization**

- **Realization** là mối quan hệ giữa lớp kế hoạch chi tiết và đối tượng chứa thông tin chi tiết về mức độ triển khai tương ứng của nó. Đối tượng này được cho là nhận ra lớp kế hoạch chi tiết. Nói cách khác, bạn có thể hiểu đây là mối quan hệ giữa giao diện và lớp triển khai

**Ví dụ** Giao diện Chủ sở hữu có thể chỉ định các phương pháp mua tài sản và định đoạt tài sản. Các lớp Person và Corporation cần triển khai các phương thức này, có thể theo cách rất khác
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.009.png)

**Multiplicity trong class diagram**

- Sử dụng để thể hiện quan hệ về số lượng giữa các đối tượng được tạo từ các class trong class diagram
  - 0...1: 0 hoặc 1
  - n : Bắt buộc có n
  - 0...\* : 0 hoặc nhiều
  - 1...\* : 1 hoặc nhiều
  - m...n: có tối thiểu là m và tối đa là n

**Class Diagram Example: Order System**
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.010.png)

**Class Diagram Example: GUI**

- Sơ đồ lớp cũng có thể có các ghi chú đính kèm với các lớp hoặc các mối quan hệ.
![](https://raw.githubusercontent.com/QuocDang0704/QuocDang0704.github.io/master/docs/_posts/Class/Aspose.Words.19cf09df-737a-4d9f-b87d-cbf7d845f5c3.011.png)


Nguồn tham khảo: [tại đây](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/)