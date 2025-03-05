---
title: Java 基础
editLink: false # 是否显示编辑链接
date: 2025-03-05
order: 1
category:
  - 面试资料
---

## 一、面向对象
### 1.1 面向对象三大特性
#### Q1：封装的意义及实现方式？

**答案**：

- **核心思想**：隐藏对象内部细节，对外暴露安全访问接口
- **实现方式**：
  
```java
  public class Person {
      // 私有化属性
      private String name;
      
      // 提供公共访问方法
      public String getName() { return name; }
      public void setName(String name) { 
          if(name != null) this.name = name;
      }
  }
```

**应用场景：**

- DTO数据传输对象设计

- 模块接口定义

- 敏感数据保护

**Q2：多态的实现原理？**

**答案：**

**技术实现：**

- 方法重写（Override）
- 向上转型（父类引用指向子类对象）
- 动态绑定（运行时确定具体方法）

**JVM实现机制：**

```mermaid
classDiagram
    class Animal {
        +void eat()*
    }
    class Dog {
        +void eat()
    }
    class Cat {
        +void eat()
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

## 二、集合框架

### 2.1 HashMap深度解析

**Q3：HashMap的put方法执行流程？**

**答案：**

```mermaid
graph TD
    A[计算key的hash值] --> B[确定桶位置]
    B --> C{桶是否为空?}
    C -->|是| D[直接插入新节点]
    C -->|否| E[遍历链表/红黑树]
    E --> F{存在相同key?}
    F -->|是| G[替换value值]
    F -->|否| H[尾部插入新节点]
    H --> I{链表长度>8?}
    I -->|是| J[转换为红黑树]
    I -->|否| K[维持链表结构]
```

**Q4：ConcurrentHashMap线程安全实现演进？**

**版本对比：**

