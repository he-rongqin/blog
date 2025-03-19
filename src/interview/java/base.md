---
title: Java 基础
editLink: false # 是否显示编辑链接
date: 2025-03-05
order: 1
category:
  - 面试资料
---

### **一、Java 基础核心**

#### **1. 数据类型与变量**
- **基本数据类型**  
  - 8 种类型：`byte` (1)、`short` (2)、`int` (4)、`long` (8)、`float` (4)、`double` (8)、`char` (2)、`boolean` (~1 bit)  
  - **示例**：  
    ```java
    int num = 10;         // 默认十进制
    int hexNum = 0xFF;    // 十六进制
    double d = 3.14d;     // 明确指定double类型
    ```

- **包装类型与自动装箱/拆箱**  
  - **原理**：编译器自动转换基本类型与包装类（如 `int ↔ Integer`）。  
  - **陷阱**：`Integer.valueOf(-128~127)` 使用缓存，直接比较可能出错。  
    ```java
    Integer a = 127, b = 127;
    System.out.println(a == b); // true（缓存范围内）
    Integer c = 128, d = 128;
    System.out.println(c == d); // false（new对象）
    ```

---

#### **2. 面向对象编程（OOP）**

- **类与对象**  
  - **构造方法**：默认无参构造，若自定义带参构造，需显式定义无参构造。  
    ```java
    public class Person {
        private String name;
        public Person() {}  // 显式定义无参构造
        public Person(String name) { this.name = name; }
    }
    ```

- **继承与多态**  
  - **重写（Override）**：子类方法签名与父类一致，实现不同行为。  
    ```java
    class Animal { void sound() { System.out.println("Animal sound"); } }
    class Dog extends Animal {
        @Override
        void sound() { System.out.println("Bark!"); } // 方法重写
    }
    ```

- **抽象类与接口**  
  - **接口默认方法（Java 8+）**：  
    ```java
    interface Vehicle {
        default void start() { System.out.println("Engine started"); }
    }
    class Car implements Vehicle {} // 可直接使用默认方法
    ```

---

#### **3. 字符串与不可变性**
- **String 不可变原理**  
  - **源码**：`String` 内部使用 `final char[] value` 存储数据，任何修改都会生成新对象。  
  - **示例**：  
    ```java
    String s1 = "hello";
    String s2 = s1.concat(" world"); // 新对象，s1不变
    System.out.println(s1); // "hello"
    ```

- **StringBuilder vs StringBuffer**  
  - **线程安全**：`StringBuffer` 方法使用 `synchronized` 修饰。  
    ```java
    StringBuilder sb = new StringBuilder();
    sb.append("a").append("b"); // 非线程安全，但性能更高
    ```

---

### **二、集合框架（Collections Framework）**

#### **1. List 接口**
- **ArrayList 扩容机制**  
  - **源码**：`int newCapacity = oldCapacity + (oldCapacity >> 1);`（1.5 倍扩容）  
  - **示例**：  
    ```java
    List<Integer> list = new ArrayList<>(3);
    list.add(1); list.add(2); list.add(3); 
    list.add(4); // 触发扩容，容量变为 4 + 4/2 = 6
    ```

- **LinkedList 链表结构**  
  - **源码**：双向链表节点 `Node<E> { E item; Node<E> next; Node<E> prev; }`  
  - **示例**：  
    ```java
    LinkedList<Integer> linkedList = new LinkedList<>();
    linkedList.addFirst(1);  // 头部插入
    linkedList.addLast(2);   // 尾部插入
    ```

---

#### **2. Map 接口**
- **HashMap 工作原理**  
  - **哈希冲突解决**：链地址法（链表 → 红黑树，当链表长度 ≥8 且数组长度 ≥64）。  
  - **代码模拟哈希冲突**：  
    ```java
    HashMap<String, Integer> map = new HashMap<>();
    // 假设两个不同的 key 哈希值相同
    map.put("a", 1);
    map.put("b", 2); // 存入同一桶的链表
    ```

- **ConcurrentHashMap 线程安全实现（JDK8）**  
  - **源码关键点**：使用 `CAS` + `synchronized` 锁头节点，而非分段锁。  
    ```java
    // JDK8 的 putVal 方法片段（简化）
    if ((f = tabAt(tab, i = (n - 1) & hash)) == null) {
        if (casTabAt(tab, i, null, new Node<K,V>(hash, key, value)))
            break;
    } else {
        synchronized (f) { // 锁住头节点
            // 处理链表或红黑树
        }
    }
    ```

---

### **三、异常处理**

#### **1. 异常分类**
- **Checked vs Unchecked**  
  - **Checked Exception**：必须处理（如 `IOException`），否则编译错误。  
  - **Unchecked Exception**：`RuntimeException` 及其子类，无需显式处理。  

- **try-with-resources（Java 7+）**  
  - **原理**：资源类需实现 `AutoCloseable` 接口，自动调用 `close()`。  
    ```java
    try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
        String line = br.readLine();
    } // 自动关闭资源
    ```

---

### **四、JVM 核心原理**

#### **1. 内存区域划分**
- **堆（Heap）**：对象实例存储区（GC 主战场）。  
- **方法区（Method Area）**：类信息、常量池（JDK8 后为元空间，使用本地内存）。  
- **虚拟机栈（Stack）**：方法调用栈帧（局部变量表、操作数栈等）。  

#### **2. 垃圾回收（GC）**
- **可达性分析算法**：通过 `GC Roots`（如静态变量、活动线程）判断对象是否存活。  
- **GC 算法**：  
  - **标记-清除**：产生内存碎片。  
  - **复制算法**：适用于新生代（Eden、Survivor 区）。  
  - **标记-整理**：适用于老年代。  

#### **3. 类加载机制**
- **双亲委派模型**：  
  ```java
  ClassLoader 层级：Bootstrap → Extension → Application → Custom
  ```
- **破坏双亲委派的场景**：如 Tomcat 为每个 Web 应用提供独立的类加载器。

---

### **五、并发编程**

#### **1. 线程基础**
- **创建线程的三种方式**：  
  ```java
  // 1. 继承 Thread
  class MyThread extends Thread { public void run() { /* ... */ } }
  
  // 2. 实现 Runnable
  new Thread(() -> System.out.println("Runnable")).start();
  
  // 3. 实现 Callable（带返回值）
  FutureTask<Integer> task = new FutureTask<>(() -> 42);
  new Thread(task).start();
  System.out.println(task.get()); // 获取返回值
  ```

#### **2. 线程同步**
- **synchronized 原理**：  
  - **对象头 Mark Word**：记录锁状态（无锁、偏向锁、轻量级锁、重量级锁）。  
  - **锁升级过程**：偏向锁 → 轻量级锁（自旋） → 重量级锁（阻塞）。  

- **ReentrantLock 与 AQS**  
  - **源码**：基于 `AbstractQueuedSynchronizer` 实现，内部维护 `CLH 队列`。  
  - **公平锁 vs 非公平锁**：  
    ```java
    ReentrantLock fairLock = new ReentrantLock(true); // 公平锁
    ```

#### **3. 并发工具类**
- **CountDownLatch**：  
  ```java
  CountDownLatch latch = new CountDownLatch(3);
  // 三个线程完成后主线程继续
  new Thread(() -> { /* ... */ latch.countDown(); }).start();
  latch.await(); // 等待计数归零
  ```

- **ConcurrentHashMap 的 size() 方法**：  
  - **原理**：通过分段计数（`baseCount` + `CounterCell[]`）减少竞争。  

---

### **六、Java 8 新特性**

#### **1. Lambda 表达式**
- **语法**：`(parameters) -> expression`  
  ```java
  List<String> list = Arrays.asList("a", "b", "c");
  list.forEach(s -> System.out.println(s)); // Lambda 简化迭代
  ```

#### **2. Stream API**
- **操作类型**：  
  - **中间操作**：`filter`, `map`, `sorted`（延迟执行）。  
  - **终止操作**：`collect`, `forEach`（触发执行）。  

- **示例**：  
  ```java
  List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
  List<Integer> squares = numbers.stream()
                                 .filter(n -> n % 2 == 0)
                                 .map(n -> n * n)
                                 .collect(Collectors.toList()); // [4, 16]
  ```

#### **3. Optional 类**
- **避免 NPE**：  
  ```java
  Optional<String> opt = Optional.ofNullable(getName());
  String name = opt.orElse("default"); // 避免 null
  ```

---

### **七、Java 17 新特性**

#### **1. 密封类（Sealed Classes）**
- **限制类的继承**：明确允许哪些类可以继承。  
  ```java
  public abstract sealed class Shape permits Circle, Square { /* ... */ }
  public final class Circle extends Shape { /* ... */ } // 必须为 final 或 sealed
  ```

#### **2. 模式匹配增强**
- **instanceof 模式匹配**：  
  ```java
  if (obj instanceof String s) { // 直接使用变量 s
      System.out.println(s.length());
  }
  ```

#### **3. 新的 API**
- **新的 HttpClient**：支持 HTTP/2 和 WebSocket。  

  ```java
  HttpClient client = HttpClient.newHttpClient();
  HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create("https://example.com"))
          .build();
  HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
  ```
