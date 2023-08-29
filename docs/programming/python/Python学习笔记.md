#    Python

## 数据类型

### Integral类型

> 整数

```python
# 十进制
>>> 1432144
# 二进制
>>> 0b1100101010101010110
# 八进制
>>> 0o9768273
# 十六进制
>>> 0xDECADE
```

- 布尔型

### 浮点类型

- 浮点数
- 复数

>  十进制数字（decimal模块可以提供固定的十进制数字，精度可以自己指定）

decimal模块可以提供固定十进制数，精度可以自己指定

```python
import decimal
a = decimal.Decimal(9876)
b = decimal.Decimal("54321.123456")
print(a+b)
>>>
Deciaml('64197.123456')
```

### 序列类型(组合数据类型)

> 容器序列

可以存放不同类型的项，其中包括嵌套容器。list、tuple、collections.deque

> 扁平序列：

可以存放一种简单类型的项。str、bytes、array.array

根据性质分为：可变序列、不可变序列

#### 元祖

在 Python 中，元组（Tuple）是一种有序的、不可变的数据结构，可以用来存储多个项目。元组与列表相似，但元组中的元素不能被修改、添加或删除。元组通常用圆括号 `()` 来表示，其中的元素可以是不同的数据类型，如整数、字符串、浮点数等。以下是关于元组的一些基本信息和操作：

**创建元组：** 你可以使用圆括号来创建一个元组，并在其中放置元素，用逗号分隔。元素的类型可以是任意的。

```python
pythonCopy code
my_tuple = (1, 2, 3, "apple", 4.56)
```

**访问元组元素：** 可以使用索引来访问元组中的元素。元组的索引从 0 开始。

```python
pythonCopy code
print(my_tuple[0])  # 输出: 1
print(my_tuple[3])  # 输出: apple
```

**元组切片：** 和列表一样，你可以使用切片来访问元组的子集。

```python
pythonCopy code
subset_tuple = my_tuple[1:4]  # 包含索引 1 到 3 的元素
```

**元组的不可变性：** 元组一旦创建，其元素就不能被修改、添加或删除。这与列表不同，列表是可变的数据结构。

```python
pythonCopy code
# 下面的代码会引发 TypeError
my_tuple[0] = 10
```

**元组的解包：** 你可以将元组的元素解包到多个变量中，这在一些情况下很有用。

```python
pythonCopy code
a, b, c, d, e = my_tuple
```

**元组的长度和成员检查：** 可以使用 `len()` 函数获取元组的长度，使用 `in` 关键字检查元素是否在元组中。

```python
pythonCopy code
length = len(my_tuple)  # 元组的长度
is_present = "apple" in my_tuple  # 检查 "apple" 是否在元组中
```

**元组的方法：** 由于元组是不可变的，它的方法相对较少。但仍然有一些方法，如 `count()` 和 `index()`。

```python
pythonCopy code
count_apple = my_tuple.count("apple")  # 统计 "apple" 在元组中出现的次数
index_3 = my_tuple.index(3)  # 获取元素 3 的索引位置
```

总之，元组是一种有用的数据结构，特别适用于需要不可变性和有序性的场景，如用作字典的键，或者存储不会变化的数据。

#### 具名元祖

具名元组是通过`collections`模块中的`namedtuple`函数来创建的。它接受两个参数：元组的名称和元素的字段名列表。通过指定名称和字段名列表，我们可以创建一个具名元组类，然后可以使用该类来创建具名元组对象。

具名元组的字段名可以用来访问元组中的值，这样可以使代码更易读、更具可维护性。与普通的元组相比，具名元组的优势在于它可以像对象一样访问字段，而不是使用索引。此外，具名元组还继承了元组的不可变性和紧凑性。

以下是一个创建和使用具名元组的示例：

```python
from collections import namedtuple

# 创建具名元组类
Person = namedtuple('Person', ['name', 'age', 'gender'])

# 创建具名元组对象
person1 = Person('Alice', 25, 'Female')
person2 = Person('Bob', 30, 'Male')

# 访问具名元组的字段
print(person1.name)   # 输出: Alice
print(person2.age)    # 输出: 30
print(person1.gender) # 输出: Female
```

通过使用具名元组，我们可以在不引入新的类的情况下，方便地表示和操作具有结构化数据的对象，提高代码的可读性和可维护性。

#### 集合类型:star:

- 集合

- 固定集合

在Python中，集合（Set）是一种无序、不重复元素的数据结构。集合用于存储一组不重复的元素，它的作用主要是：

1. 去除重复元素：集合中不允许存在重复的元素，因此可以用集合来去除列表、元组等可迭代对象中的重复元素，得到唯一的元素集合。
2. 数学集合运算：集合支持交集、并集、差集等数学运算，可以方便地进行数据处理和分析。
3. 快速查找：集合内部使用哈希表实现，可以在O(1)的时间复杂度内进行元素查找，适用于大规模数据的查找。

常用的集合方法包括：

1. `set()`: 创建一个空集合。
2. `set(iterable)`: 创建一个包含`iterable`中元素的集合。
3. `len(s)`: 返回集合`s`中元素的个数。
4. `x in s`: 判断元素`x`是否在集合`s`中，返回`True`或`False`。
5. `s.add(x)`: 向集合`s`中添加元素`x`，如果`x`已经存在，则不进行操作。
6. `s.remove(x)`: 从集合`s`中移除元素`x`，如果`x`不存在，会抛出`KeyError`异常。
7. `s.discard(x)`: 从集合`s`中移除元素`x`，如果`x`不存在，不会抛出异常。
8. `s.clear()`: 清空集合`s`，使其变为空集合。
9. `s.union(t)`, `s | t`: 返回`s`和`t`的并集。
10. `s.intersection(t)`, `s & t`: 返回`s`和`t`的交集。
11. `s.difference(t)`, `s - t`: 返回`s`和`t`的差集。
12. `s.symmetric_difference(t)`, `s ^ t`: 返回`s`和`t`的对称差集（即在`s`或`t`中，但不同时在二者中的元素）。
13. `s.issubset(t)`, `s <= t`: 判断`s`是否为`t`的子集，返回`True`或`False`。
14. `s.issuperset(t)`, `s >= t`: 判断`s`是否为`t`的超集，返回`True`或`False`。

以下是一些使用集合的示例：

```python
# 创建集合
s = set([1, 2, 3, 3, 4, 5])
print(s)  # Output: {1, 2, 3, 4, 5}

# 去除重复元素
lst = [1, 2, 2, 3, 3, 4, 4, 5]
unique_set = set(lst)
print(unique_set)  # Output: {1, 2, 3, 4, 5}

# 集合运算
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))  # Output: {1, 2, 3, 4, 5}
print(set1.intersection(set2))  # Output: {3}
print(set1.difference(set2))  # Output: {1, 2}
```

总之，集合在Python中是一种非常有用的数据结构，可以快速高效地处理不重复的元素集合。

#### 映射类型(字典)

- 字典
- 默认字典
- 有序字典

## 异常

### 引发异常

```python
# 引发异常
raise Exception
raise exception(args)
raise exception(args) from original_exception
```

### 自定义异常类

```python
class SomeCustomException(Exception):pass
```

> 自定义异常跳出循环

```python
found = False
table = []
for row, record in enumerate(table):
    for column, field in enumerate(record):
        for index, item in enumerate(field):
            if item === target:
                found = True
                break
        if found:
            break
    if found:
        break
if found:
    print("found at ({0},{1},{2}".format(row, column, index))
else:
    print('not found')

>>> 以下是通过异常跳出循环

class FoundException(Exception): pass


try:
    for row, record in enumerate(table):
        for column, field in enumerate(record):
            for index, item in enumerate(field):
                if item == target:
                    raise FoundException()
except FoundException:
    print("found at ({0},{1},{2}".format(row, column, index))

```



### 捕获异常

```python
if __name__ == '__main__':
    muffed = False
    try:
        print(1 / 0)
    except ZeroDivisionError:
        if muffed:
            print("err")
        else:
            raise ValueError from None

```

```python
if __name__ == '__main__':
    muffed = False
    try:
        print(1 / 0)
    except (ZeroDivisionError,ValueError,NameError):
        if muffed:
            print("err")
        else:
            raise ValueError from None

```

### 捕获对象

```python
if __name__ == '__main__':
    muffed = False
    try:
        print(1 / 0)
    except (ZeroDivisionError,ValueError,NameError) as e:
        if muffed:
            print(e)
        else:
            raise ValueError from None

```

### else

```python
if __name__ == '__main__':
    muffed = False
    while True:
        try:
            print(1 / 0)
        except (ZeroDivisionError, ValueError, NameError) as e:
            if muffed:
                print(e)
            else:
                raise ValueError from None
        else:
            # 只有不出现异常才会退出
            break

```

### finally

```python
if __name__ == '__main__':
    muffed = False
    while True:
        try:
            print(1 / 0)
        except (ZeroDivisionError, ValueError, NameError) as e:
            if muffed:
                print(e)
            else:
                raise ValueError from None
        else:
            # 只有不出现异常才会退出
            break
        finally:
            print('Cleaning up...')
            del muffed

```

### 异常应用

检查字典中是否有值

```python
def describe_person(person):
    print('Description of',person['name'])
    print('Age',person['age'])
    try:
        print('Occupation:',person['occupation'])
        # 如果键不存在则引发keyerror异常
    except KeyError:pass
```

检查是否有特定属性

```python
try:
    obj.write
except AttributeError:
    print('The object is not writeable')
else:
    print('The obect is writeable')
```

### 发出警告

```python
from warnings import warn
warn("test")
print("hello world")
```

```python
from warnings import filterwarnings
from warnings import warn
# 过滤警告
filterwarnings("ignore")
# 引发警告
warn("something is very wrong")

```

## 基础知识

### 函数基础

#### 任意数量实参

```python
def test(*data):
  for i in data:
    print(i)
test(1,2,3)
>>> 1
>>> 2
>>> 3
```

#### 任意数量关键字实参

```python
def test(first,last,**user_info):
  profile = {}
  profile['first_name'] = first
  profile['last_name'] = last
  for k,v in user_info.items():
    profile[k]=v
  return profile

user_profile = test('wang','gang',location="beijing",field='physis')
```

#### 强制关键字参数

```python
def safe_division_c(number,divisor,*,ignore_oveflow=False,ignore_zero_division=False):
  pass
```



#### 参数拆分

```python
params=(1,2)
add(*params)
>>> 3
params={"name":"Hello","range":"World"}
prs(**params)
>>> Hello World
```

#### 作用域嵌套

```python
def mult(factor):
    def multe(number):
        return number*factor
    return multe
double = mult(2)
print(double(5))
>>> 10
```

#### 递归

阶乘

```python
# 循环实现
def factorial(n):
  result=n
  for i in range(1,n):
    result *=i
  return result
# 递归实现
def factorial(n):
    if n==1:
        return 1
    else:
        return n*factorial(n-1)

print(factorial(4))
```

求冥

```python
# 循环实现
def power(x,n):
  result=1
  for i in range(n):
    result *=x
  return result
# 递归实现
def power(x,n):
  if n==0:
    return 1
  else:
    return x*power(x,n-1)
```

#### 函数式编程

字典

```python
list(map(str,range(10)))
>>> ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

过滤

```python
def func(x):
  return x.isalnum()
seq=["foo","x41","?!","***"]
list(filter(func,sqe))
>>> ['foo','x41']
# 列表推导式替代
[x for x in sqe if x.isalnum]
>>> ['foo','x41']

```

#### 序列模式匹配

在 Python 3.10 中引入了 `match` 语句，它是一种序列模式匹配的机制，用于更清晰和简洁地处理多种条件分支情况。`match` 语句在处理类似于 `switch` 语句的情况时非常有用，可以让代码更易读、易维护。

以下是 Python 3.10 中使用 `match` 语句的基本语法：

```python
pythonCopy code
match value:
    case pattern1:
        # 执行与 pattern1 匹配时的操作
    case pattern2:
        # 执行与 pattern2 匹配时的操作
    case pattern3:
        # 执行与 pattern3 匹配时的操作
    ...
    case _:
        # 当没有任何模式匹配时的默认操作
```

这里的 `value` 是要匹配的值，每个 `case` 子句中的 `pattern` 表示一种匹配模式，当 `value` 匹配到某个模式时，就会执行相应的操作。最后一个 `case` 子句中的 `_` 表示默认情况，即当没有任何模式匹配时执行的操作。

值得注意的是，Python 的 `match` 语句可以处理不同的数据类型，包括整数、字符串、列表、元组等。在实际使用中，你可以根据实际需求来编写不同的匹配模式和操作。

以下是一个简单的示例，展示了如何在 Python 3.10 中使用 `match` 语句：

```python
pythonCopy code
def process_data(data):
    match data:
        case 0:
            print("数据为零")
        case 1:
            print("数据为一")
        case int(n) if n > 1:
            print("数据为大于一的整数")
        case str(s):
            print(f"数据为字符串：{s}")
        case _:
            print("无法识别的数据")

data_list = [0, 1, 5, "hello", 3.14]
for data in data_list:
    process_data(data)
```

总之，Python 3.10 中的 `match` 语句为处理多条件分支提供了更具表达力和可读性的方式，可以让你更好地组织和管理代码。

> 序列匹配

```python
def handle_command(message):
    match message:
        case ['BEEPER', int(test), times]:
            # 当test不是int类型的时候无法进行匹配
            print(test, times)
        case [test, times]:
            print(test, times)
        case [name, _, _, (lat, lon)]:
            print(name, lat, lon)
        case _:
            #
            raise ImportWarning


if __name__ == '__main__':
    handle_command(['BEEPER', '1', '2'])
    handle_command(['1', '2'])

```



### 函数方法

#### 函数判断

```python
import math
x=1
y=math.sqrt
callable(x)
>>> False
callable(y)
>>> True
```

#### 函数文档

```python
def add(a,b):
    'return a+b'
    return a+b
# 打印文档
print(add.__doc__)
>>> 'return a+b'
# 查看文档
help(add)
>>> 
"""
Help on function add in module __main__:
		add(a, b)
			return a+b
"""
```

### 类

```python
class Car:
  """模拟汽车"""
  
  def __init__(self,make,model,year):
    """初始化描述汽车的属性"""
```

#### 私有属性

```python
class Secretive:
	def __inaccessible(self):
		print("Bet you can't see me ...")
	def accessible(self):
		print("The secret message is:") self.__inaccessible()
```

#### 超类

```python
class Filter:
    def __init__(self):
        self.blocked = []

    def filter(self, sequence):
        return [x for x in sequence if x not in self.blocked]


class SPAMFilter(Filter):
    def __init__(self):
        super().__init__()
        self.blocked = ['SPAM']


s = SPAMFilter()
s.__init__()
print(s.filter(['SPAM', "SPAM", '1', '2']))
>>> ['1','2']
```

#### 方法

```python
# 确定是否是子类
issubclass(SPAMFilter,Filter)
>>> True
# 查找基类
SPAMFilter.__bases__
# 确定是否是类的实例
isinstance(s,SPAMFilter)
>>> True
# 查找属于哪个类
s.__class__
# 检查方法是否存在
hasattr(tc,'talk')
>>> True
# 检查方法是否存在，如果不存在则使用默认值
getattr(tc,'talk',None)
```



### 并发编程

#### 多线程(threading)

在 Python 中，你可以使用 `threading` 模块来实现多线程编程。多线程允许你在一个程序中并行执行多个任务，从而提高程序的性能和响应性。以下是一个简单的多线程示例：

```python
pythonCopy code
import threading
import time

def print_numbers():
    for i in range(1, 6):
        print("Number:", i)
        time.sleep(1)

def print_letters():
    for letter in 'abcde':
        print("Letter:", letter)
        time.sleep(1)

# 创建线程对象
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_letters)

# 启动线程
thread1.start()
thread2.start()

# 等待线程完成
thread1.join()
thread2.join()

print("Threads finished.")
```

在这个示例中，我们创建了两个线程，一个用于打印数字，另一个用于打印字母。通过调用 `start()` 方法，线程开始执行，而 `join()` 方法等待线程执行完成。这样，数字和字母将会交替地被打印。

需要注意的是，多线程可能涉及到共享资源的并发访问问题，需要特别注意避免竞态条件等问题。Python 还提供了 `threading.Lock` 类来帮助你管理线程间的共享资源。

另外，如果你的程序需要更高级的并发控制，还可以考虑使用 Python 的 `concurrent.futures` 模块中的 `ThreadPoolExecutor` 或 `ProcessPoolExecutor` 类，它们提供了更高级别的接口来管理线程池或进程池，从而更方便地进行并发编程。

##### h5测试

#### 线程池

```python
# 抓取twitter timeline

timeline = {
    "author":"bobby",
    "tage":["teacher","python"],
    "images":["a.com","b.com"],
    "timeline":{},
    "create_time":""
}

# 数据表
# timeline tags images retweet

# 每个timeline的插入分成了多个线程的插入
```

 ```python
import time
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, wait, ALL_COMPLETED, as_completed


# 导入线程池和进程池

def sleep_task(sleep_time, name):
    print("sleep %s s" % sleep_time)
    time.sleep(sleep_time)
    print("end")


executor = ThreadPoolExecutor(max_workers=2)
task1 = executor.submit(sleep_task, 2, "bobby")
task2 = executor.submit(sleep_task, 3, "bobby")
task3 = executor.submit(sleep_task, 3, "bobby")
# 取消任务，注意：运行中的程序是无法取消的
task1.cancel()
task2.cancel()
task3.cancel()
# 查看任务是否完成
print(task1.done())
# 当某个线程完成后通知
all_task = [task1, task2, task3]
for task in as_completed(all_task):
    print(task)
    # 获取返回值
    print(task.result())
# 等待线程完成
# wait([task1,task2,task3],return_when=ALL_COMPLETED)
print("main end")
# TODO:8-10

 ```

## 高级知识

### 魔法方法（难点）

#### 协议

在Python中，协议通常指的是规范行为的规则，有点类似于第7章提及的接口。协议指定 应实现哪些方法以及这些方法应做什么。在Python中，多态仅仅基于对象的行为(而不 基于祖先，如属于哪个类或其超类等)，因此这个概念很重要:其他的语言可能要求对象 属于特定的类或实现了特定的接口，而Python通常只要求对象遵循特定的协议。因此， 要成为序列，只需遵循序列协议即可

#### 基本的序列和映射协议

创建一个无穷序列

```python
def check_index(key):
    """
    指定的键是否可接受的索引？

    键必须是非负整数，才是可接受的，如果不是整数，将引发TypeError异常。如果是负数，将引发IndexError异常
    :param key:
    :return:
    """
    if not isinstance(key, int): raise TypeError
    if key < 0: raise IndexError


class ArithmeticSequence:

    def __init__(self, start=0, step=1):
        """
        初始化算术序列
        :param start: 序列第一个值
        :param step: 两个相邻值的差
        :param change:一个字典，包含用户修改的值
        """
        self.start = start
        self.step = step
        self.change = {}

    def __getitem__(self, key):
        """
        get a value from list
        :param key:
        :return:
        """
        check_index(key)

        try:
            return self.change[key]
        except KeyError:
            return self.start + key * self.step

    def __setitem__(self, key, value):
        """
        修改算术序列中的元素
        :param key:
        :param value:
        :return:
        """

        check_index(key)
        self.change[key] = value

s = ArithmeticSequence(1,2)
s[4]=2
print(s[4])
s[4]=6
print(s[4])
print(s.change)
```

#### 从list、dict和str派生

带访问计数器的列表

```python
"""
每当访问列表元素时，counter值加1
"""


class CounterList(list):
    def __init__(self, *args):
        super().__init__(*args)
        self.counter = 0

    def __getitem__(self, index):
        self.counter += 1
        return super(CounterList, self).__getitem__(index)


cl = CounterList(range(10))
print(cl)
cl.reverse()
print(cl.counter)
del cl[3:6]
print(cl.counter)
print(cl[4] + cl[2])
print(cl.counter)

```

### 特性

#### property

在Python中，`property`是一种特殊的装饰器，用于将类的方法转换为属性。它允许我们在访问类的属性时执行自定义的获取、设置和删除逻辑，而不是直接访问属性本身。

通过使用`property`装饰器，我们可以定义一个方法，并将其标记为属性。这个方法分为三个部分：getter（获取器）、setter（设置器）和deleter（删除器）。每个部分都对应着属性的不同操作。

下面是一个使用`property`装饰器定义属性的示例：

```python
class MyClass:
    def __init__(self):
        self._my_property = None

    @property
    def my_property(self):
        return self._my_property

    @my_property.setter
    def my_property(self, value):
      	assert value>0,"radius must be nonzero and non-negative"
        self._my_property = value

    @my_property.deleter
    def my_property(self):
        del self._my_property
```

在上面的例子中，我们定义了一个名为`my_property`的属性，并使用`@property`装饰器将方法`my_property`标记为getter。然后，我们使用`@my_property.setter`装饰器定义了一个名为`my_property`的setter方法。最后，我们使用`@my_property.deleter`装饰器定义了一个名为`my_property`的deleter方法。

现在，我们可以通过直接访问属性来获取、设置和删除`my_property`。例如：

```python
obj = MyClass()
obj.my_property = 10  # 调用setter方法，设置属性值为10
print(obj.my_property)  # 调用getter方法，输出属性值
del obj.my_property  # 调用deleter方法，删除属性
```

使用`property`装饰器可以让我们以属性的形式访问和操作数据，而不需要直接访问方法。这样，我们可以在属性的获取、设置和删除时执行自定义逻辑，例如数据验证、计算或日志记录等。

#### __getattr__、__setattr__

```python
__getattribute__(self, name):在属性被访问时自动调用(只适用于新式类)。 
__getattr__(self, name):在属性被访问而对象没有这样的属性时自动调用。 
__setattr__(self, name, value):试图给属性赋值时自动调用。 
__delattr__(self, name):试图删除属性时自动调用。
```



### 迭代器:star:

#### 斐波那契数列

```python
class Fibs:
    def __init__(self):
        self.a = 0
        self.b = 1

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b
        return self.a

    def __iter__(self):
        return self


fibs = Fibs()
for f in fibs:
    if f > 1000:
        print(f)
        break

```

#### 创建序列

```python
class TestIterator:
    value = 0

    def __next__(self):
        self.value += 1
        if self.value > 10: raise StopIteration
        return self.value

    def __iter__(self):
        return self


ti = TestIterator()
print(list(ti))
>>> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 生成器:star:

[PEP342](www.python.org/dev/peps/pep-0342/)

#### 创建生成器

```python
nested = [[1, 2], [3, 4], [5]]


def flatten(nested):
    for sublist in nested:
        for element in sublist:
            yield element


for num in flatten(nested):
    print(num)
>>> 1
>>> 2
>>> 3
>>> 4
>>> 5
print(list(flatten(nested)))
>>> [1,2,3,4,5]

```

#### 生成器表达式

```python
g=((i+2)**2 for i in range(2,27))
print(next(g))
>>> 16
print(next(g))
>>> 25
```

#### 递归式生成器

当需要不定数量的循环时可以使用递归

```python
# 这里需要检查对象是否为字符串
def flatten(nested):
    try:
      # 不迭代字符串
      	try: nested +''
      except TypeError:pass
        for sublist in nested:
            for element in flatten(sublist):
                yield element
    except TypeError:
        yield nested


print(list(flatten([[[1], 2], 3, 4, [5, [6, 7]], 8])))
>>> [1,2,3,4,5,6,7,8]
#如果表达式nested + ''引发了TypeError异常，就忽略这种异常;如果没有引发 TypeError异常，内部try语句中的else子句将引发TypeError异常，这样将在外部的excpet子句中 原封不动地生成类似于字符串的对象'
list(flatten(['foo', ['bar', ['baz']]]))
>>> ['foo', 'bar', 'baz']
```

#### 八皇后问题（重点）



### 测试

#### 断言

```python
assertEqual(a,b) >>> test a==b
assertNotEqual(a,b) >>> test a!=b
assertTrue(x) >>> test x=True
assertFalse(x) >>> test x=False
assertIn(item,list) >>> test item in list
assertNotIn(item,list) >>> test item not in list
```



#### 单个函数测试

```python
name_function.py
# 功能函数
def get_formatted_name(first,last,middle=''):
  """Generate a neatly formatted full name"""
  if middle:
    full_name = first + '' + middle + '' + last
  else:
    full_name = first + '' + last
  return full_name.title()
# 测试
test_name_function.py
# 包
import unittest
from name_function import get_formatted_name

class NamesTestCase(unittest.TextCase):
  """测试name_function.py"""
  def test_fist_last_name(self):
    """能否正确的处理Janis Joplin这样的函数吗？"""
    formatted_name = get_formatted_name("janis","joplin")
    self.assertEqual(formatted_name,"Janis Joplin")
  def test_first_last_middle_name(self):
    """能够正确的处理像Wolfgang Amadeus Mozart这样的姓名吗？"""
    formatted_name = get_formatted_name('wolfgang','mozart','amadeus')
    self.assertEqual(formatted_name,'Wolfgang Amadeus Mozart')
unittest.main()
```

#### 测试类

```python
survey.py
class AnoymousSurvey():
  """收集匿名调查问卷的答案"""
  def __init__(self,question):
    """储存一个问题，并为储存答案做准备"""
    self.question = question
    self.response = []
  def show_question(self):
    """显示调查文件"""
    print(self.question)
  def store_response(self,new_response):
    """储存单份调查问卷答案"""
    self.respinse.append(new_response)
  def show_results(self):
    """显示收集到的所有答卷"""
    print("Survey results:")
    for response in self.response:
      print('-' + response)
      
language_survey.py
"""使用survey.py"""
from survey import AnonymousSurvey

# 定义一个问题
question = "What language did you first learn to speak?"
my_survey = AnonymousSurvey(question)
# 显示问题并储存答案
my_survey.show_question()
print("Enter 'q' at any time to quit.\n")
while True:
  response = input("Language:")
  if response == 'q':
    break
  my_survey.store_response(response)

# 显示调查结果
print("Thank you to everyone who participated in the survey")
my_survey.show_results()

test_survey.py
import unittest
from survey import AnonymousSurvey

class TestAnonymousSurvey(unittest.TestCase):
  """针对AnonymousSurey类的测试"""
  def setUp(self):
    """创建一个调查对象和一组答案，供使用的测试方法使用"""
    question = "What language did you first learn to speak?"
    self.my_survey = AnonymousSurvey(question)
    self.responses = ['English','Spanish','Mandarin']
  def test_store_single_response(self):
    """测试单个答案会被妥善地储存"""
    self.my_survey.store_response(self.responses[0])
    self.assertIn(self.responses[0],self.my_survey.response)
  def test_store_three_response(self):
    """测试三个答案会被妥善地储存"""
    for response in self.response:
      self.my_survey.store_response(response)
    for response in self.response:
      self.assertIn(response,self.my_survey.responses)
      
unittest.main()
```

### 网络

#### 简单服务器

```python
# 启动一个简单服务器
python -m http.server 3000
```

#### Socket

```python
import socket

# 创建socket对象，指定传输协议
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('127.0.0.1', 8000))
s.send("hello socket".encode())
```

socket编程

![image-20220414232508997](https://typoras.oss-cn-hangzhou.aliyuncs.com/typora_images/image-20220414232508997.png)

socket服务端

```python
# socker server
import socket
import threading

server = socket.socket()
server.bind(("0.0.0.0",8000))
server.listen()

def handle_sock(sock,addr):
    while True:
        temp_data = sock.recv(1024)
        print(temp_data.decode("utf8"))
        input_date = input()
        sock.send(input_date.encode("utf8"))

# 获取客户端连接并启动线程去处理
while True:
    # 阻塞等待连接
    sock,addr = server.accept()
    # 启动一个线程去处理新的用户连接
    client_thread = threading.Thread(target=handle_sock,args=(sock,addr))
    client_thread.start()
```

client客户端

```python
# socket客户端
import socket
client = socket.socket()
client.connect(("192.168.0.105",8000))

# client.send(b"bobby")
# server_data = client.recv(1024)
# print("server response:{}".format(server_data.decode("utf8")))
while True:
    input_data = input()
    client.send(input_data.encode("utf8"))
    server_data = client.recv(1024)
    print("server response:{}".format(server_data.decode("utf8")))
# client.close()
```

### 执行字符串

```python
exec("print('Hello World')")
>>> hello world
# 提供作用域（推荐）
from math import sqrt
scope={}
exec('sqrt=1',scope)
print(sqrt(4))
print(scope['sqrt'])
>>> 2.0
>>> 1
```

```python
scope={}
scope['x']=2
scope['y']=3
print(eval('x*y',scope))
```

### 打包

[打包指南](packaging.python.org)

## Python面向对象

### 继承

> 继承list

继承list后`ContactList`的行为就会像一个list，增加搜索功能

```python
class ContactList(list):
    def search(self, name):
        """
        return all contacts that contain the search value in their name
        :param name:
        :return:
        """
        matching_contacts = []
        for contact in self:
            if name in contact.name:
                matching_contacts.append(contact)
        return matching_contacts
```

> 继承dict

查找到最长的key

```python
class LongNameDict(dict):
    def longest_key(self):
        longest = None
        for key in self:
            if not longest or len(key) > len(longest):
                longest = key
        return longest
```

> 多重继承

```python
class Contact:
    all_contacts = []

    def __init__(self, name='', email='', **kwargs):
        super().__init__(**kwargs)
        self.name = name
        self.email = email
        self.all_contacts.append(self)


class AddressHolder:
    def __init__(self, street='', city='', state='', code='', **kwargs):
        super().__init__(**kwargs)
        self.street = street
        self.city = city
        self.state = state
        self.code = code


class Friend(Contact, AddressHolder):
    def __init__(self, phone='', **kwargs):
        super().__init__(**kwargs)
        self.phone = phone

friend = Friend(phone='123',name='测试',city='北京')
print(friend.name)

```

### 多态

```Python
class AudioFile:
    def __init__(self, filename):
        if not filename.endswith(self.ext):
            raise Exception("Invalid file format")
        self.filename = filename


class MP3File(AudioFile):
    ext = "mp3"

    def play(self):
        print("playing {} as mp3".format(self.filename))


class WavFile(AudioFile):
    ext = "wav"

    def play(self):
        print("playing {} as wav".format(self.filename))


class OggFile(AudioFile):
    ext = "ogg"

    def play(self):
        print("playing {} as ogg".format(self.filename))


ogg = OggFile("myfile.ogg")
ogg.play() # >>> playing myfile.ogg as ogg


```

### 抽象基类

> 基本抽象基类

```python
from collections.abc import Container


class OddContainer:
    def __contains__(self, item):
        if not isinstance(item, int) or not item % 2:
            return False
        return True


odd_container = OddContainer()
print(isinstance(odd_container, Container))  # >>> True
print(1 in odd_container)  # >>> True
print(2 in odd_container)  # >>> False

```

> 创建抽象基类



## 流畅的Python

### Python风格纸牌

该示例展示了 `__getitem__`和`__len__`两个特殊方法

```python
import collections

Card = collections.namedtuple('Card', ['rank', 'suit'])


class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits for rank in self.ranks]

    def __len__(self):
        return len(self._cards)

    def __getitem__(self, item):
        return self._cards[item]


beer_card = Card('7', 'diamonds')
print(beer_card)
# >>> by print(beer_card)
Card(rank='7', suit='diamonds')
```



### 准则

#### 第23条：简单的接口应该接受函数，而不是类的实例:star:

```python
names = ['Socrates', 'Archimedes', 'Plato', 'Aristotle']
    names.sort(key=lambda x: len(x))
    print(names)
```

> defaultdict示例

```python
from collections import defaultdict


def log_missing():
  """
        当 defaultdict中没有待查询的键时用该函数创建新值
        :return:
        """
  print("Key added")
  return 0 


current = {'green': 12, 'blue': 3}
increments = [
  ('red', 5),
  ('blue', 17),
  ('orange', 9)
]
# 正常实现
# for k,v in increments:
#     if k not in current.keys():
#         current[k] = v
#     else:
#         current[k] += v
# print(current)

# defaultdict实现
# 构建一个新的字典对象
result = defaultdict(log_missing, current)
print(dict(result))
for key, amount in increments:
  result[key] += amount
  print(dict(result))
```

> defaultdict+类示例
>
> 

```python
from collections import defaultdict

current = {'green': 12, 'blue': 3}
increments = [
    ('red', 5),
    ('blue', 17),
    ('orange', 9)
]


class BetterCountMissing(object):
    def __init__(self):
        self.added = 0

    def __call__(self, *args, **kwargs):
        self.added += 1
        return 0


counter = BetterCountMissing()
result = defaultdict(counter, current)
for key, amount in increments:
    result[key] += amount
assert counter.added == 2

```

#### 第24条：以@classmethod形式的多态去通用地构建对象:star:

> 无多态形式的实现

```python
# 以下功能是为了实现一套MapReduce流程
import os
import tempfile


# 公共基类表示输入的数据，其中的read方法必须由子类实现
class InputData(object):
    def read(self):
        raise NotImplementedError


# InoutData类的具体子类，从磁盘文件中读取数据
class PathInputData(InputData):
    def __init__(self, path):
        super().__init__()
        self.path = path

    def read(self):
        return open(self.path).read()


# 以下是为了定义MapReduce工作线程的抽象接口，使用标准的方式来处理输入的数据
class Worker(object):
    def __init__(self, input_data):
        self.input_data = input_data
        self.result = None

    def map(self):
        raise NotImplementedError

    def reduce(self, other):
        raise NotImplementedError


# 以下类是为了实现我们需要的MapReduce功能，该功能是为了实现一个简单的换行符计数器
class LineCountWorker(Worker):
    def map(self):
        data = self.input_data.read()
        self.result = data.count("\n")

    def reduce(self, other):
        self.result += other.result


# 以下是使用方法，列出某个目录的内容，并为该目录下的每个文件创建一个PathInputData实例
def generate_inputs(data_dir):
    for name in os.listdir(data_dir):
        yield PathInputData(os.path.join(data_dir, name))


# 使用 generate_inputs方法所返回的InputData实例来创建LineCountWorker实例
def create_workers(input_list):
    workers = []
    for input_data in input_list:
        workers.append(LineCountWorker(input_data))
    return workers


# 执行任务，将MapReduce流程中的map步骤派发到多个线程之中，接下来反复调用reduce方法，将map步骤
# 的结果合并成一个最终值

from threading import Thread


def execute(workers):
    threads = [Thread(target=w.map) for w in workers]
    for thread in threads: thread.start()
    for thread in threads: thread.join()

    first, rest = workers[0], workers[1:]
    for worker in rest:
        first.reduce(worker)
    return first.result


# 拼装上述代码，以便执行MapReduce流程的每个步骤
def mapreduce(data_dir):
    inputs = generate_inputs(data_dir)
    workers = create_workers(inputs)
    return execute(workers)


from tempfile import TemporaryDirectory


def write_text_files(tmpdir):
    pass


with TemporaryDirectory() as tmpdir:
    write_text_files(tmpdir)
    result = mapreduce(tmpdir)

print('There are', result, 'lines')

```

> 多态的形式实现

```python
# 以下功能是为了实现一套MapReduce流程
import os
import tempfile


# 公共基类表示输入的数据，其中的read方法必须由子类实现
# 添加generate_inputs类方法，，根据通用的接口动态的创建新的InputData实例
class InputData(object):
    def read(self):
        raise NotImplementedError

    @classmethod
    def generate_inputs(cls, config):
        raise NotImplementedError


# InoutData类的具体子类，从磁盘文件中读取数据
class PathInputData(InputData):
    def __init__(self, path):
        super().__init__()
        self.path = path

    def read(self):
        return open(self.path).read()

    @classmethod
    def generate_inputs(cls, config):
        data_dir = config['data_dir']
        for name in os.listdir(data_dir):
            yield cls(os.path.join(data_dir, name))


# 以下是为了定义MapReduce工作线程的抽象接口，使用标准的方式来处理输入的数据
class Worker(object):
    def __init__(self, input_data):
        self.input_data = input_data
        self.result = None

    def map(self):
        raise NotImplementedError

    def reduce(self, other):
        raise NotImplementedError

    @classmethod
    def create_workers(cls, input_class, config):
        workers = []
        for inout_data in input_class.generate_inputs(config):
            workers.append(cls(inout_data))
        return workers


# 以下类是为了实现我们需要的MapReduce功能，该功能是为了实现一个简单的换行符计数器
class LineCountWorker(Worker):
    def map(self):
        data = self.input_data.read()
        self.result = data.count("\n")

    def reduce(self, other):
        self.result += other.result


# 以下是使用方法，列出某个目录的内容，并为该目录下的每个文件创建一个PathInputData实例
def generate_inputs(data_dir):
    for name in os.listdir(data_dir):
        yield PathInputData(os.path.join(data_dir, name))


# 使用 generate_inputs方法所返回的InputData实例来创建LineCountWorker实例
def create_workers(input_list):
    workers = []
    for input_data in input_list:
        workers.append(LineCountWorker(input_data))
    return workers


# 执行任务，将MapReduce流程中的map步骤派发到多个线程之中，接下来反复调用reduce方法，将map步骤
# 的结果合并成一个最终值

from threading import Thread


def execute(workers):
    threads = [Thread(target=w.map) for w in workers]
    for thread in threads: thread.start()
    for thread in threads: thread.join()

    first, rest = workers[0], workers[1:]
    for worker in rest:
        first.reduce(worker)
    return first.result


# 拼装上述代码，以便执行MapReduce流程的每个步骤
def mapreduce(worker_class, input_class, config):
    workers = worker_class.create_workers(input_class, config)
    return execute(workers)


from tempfile import TemporaryDirectory


def write_text_files(tmpdir):
    pass


with TemporaryDirectory() as tmpdir:
    write_text_files(tmpdir)
    config = {'data_dir': tmpdir}
    result = mapreduce(LineCountWorker, PathInputData, config)

print('There are', result, 'lines')

```



### PEP8

:globe_with_meridians:[网址](https://peps.python.org/pep-0008/)

PEP 8是Python的官方样式指南，以下是其中的一些主要原则：

1. **缩进**：使用4个空格作为每层缩进的宽度，不要使用制表符（Tab）。
2. **最大行宽**：每行代码的长度不应超过79个字符。这使得代码在较小的显示器上也能方便地查看，并可以在同一屏幕上并排打开多个文件。
3. **空行**：在顶层函数和类定义之间用两个空行隔开，类的方法定义之间用一个空行隔开。
4. **导入**：每个导入语句应该在一行上独立出来，导入应该总是位于文件顶部，紧接着任何模块注释和文档字符串，并在模块全局变量和常量之前。
5. **空格**：在二元运算符两侧放置一个空格，比如赋值（=），比较（==, <, >, !=, <>, <=, >=, in, not in, is, is not），布尔（and, or, not）。
6. **命名规范**：
   - 类名应采用驼峰命名法，首字母大写，私有类可以以一个下划线开头；
   - 函数名、变量名和属性名应该都是小写，可以使用下划线进行单词之间的分隔；
   - 常量通常定义在模块级别，写成所有字母都大写，单词之间用下划线分隔的形式；
   - 保护实例属性用一个下划线开头；
   - 私有实例属性用两个下划线开头。
7. **注释**：应当使用完整的句子。如果注释是一个短语或句子，其首个单词应当大写，除非它是以小写字母开始的标识符（永远不改变标识符的大小写）。

以上只是其中的一部分原则，PEP 8包含了更多详细的编码约定。如果需要深入了解，可以查阅PEP 8全文。

要注意的是，虽然这些原则是推荐的最佳实践，但在某些情况下，为了可读性或其他原因，可能需要适当地违反这些规则。如PEP 8文档所述：“这份指南是关于一致性的。一致性对于项目，和理想情况下对于全局都是重要的。但时刻记住，这些只是指南，不是法律。不要为了遵守这份指南，而打破向后兼容性，或者将个人的审美强加给别人。”

### 生成器表达式

> :scroll:简介

生成器表达式是一种用于创建生成器的简洁语法。它类似于列表推导式，但使用圆括号而不是方括号。生成器表达式可以按需生成值，而不是一次性生成所有值。

生成器表达式的作用是在迭代过程中生成值，而不是一次性生成所有值。它适用于处理大量数据或需要按需生成值的情况，可以有效地节省内存空间和计算资源。

使用生成器表达式可以轻松地创建一个迭代器，通过迭代器逐个获取生成的值，而不需要一次性生成所有值并存储在内存中。这对于处理大型数据集或需要逐个处理数据的场景非常有用。此外，生成器表达式还可以与其他迭代器和生成器相关的功能和语法结构（如`for`循环、`yield`语句等）一起使用，提供更灵活和高效的数据处理方式。

> 处理大量数据时使用生成器表达式

```python
it = (len(x) for x in open('/tmp/myfile.txt'))
print(next(it))
print(next(it))
```

```python
roots=((x,x**0.5) for x in it)
print(next(roots))
>>>
(15,3.8782378892)
```

> 改写直接返回列表的函数

```python
def index_words(text):
    """
    将单词首字母添加到列表
    :param text:
    :return:
    """
    result = []
    if text:
        result.append(0)
    for index, letter in enumerate(text):
        if letter == ' ':
            result.append(index + 1)
    return result


def index_words_iter(text):
    if text:
        yield 0
    for index, letter in enumerate(text):
        if letter == ' ':
            yield index + 1
```



### 迭代

#### enumerate

使用 `emumerate`取代 `range`

`enumerate` 是 Python 内置函数，用于在迭代过程中同时获取元素的索引和值。它返回一个枚举对象，其中每个元素是一个包含索引和对应值的元组。

`enumerate` 函数的语法如下：

```python
enumerate(iterable, start=0)
```

- `iterable`：表示要进行枚举的可迭代对象，例如列表、元组、字符串等。
- `start`（可选）：表示索引的起始值，默认为 0。

使用 `enumerate` 函数可以更方便地遍历序列并获取元素的索引和值。下面是一个示例：

```python
fruits = ['apple', 'banana', 'orange']

for index, fruit in enumerate(fruits):
    print(index, fruit)
```

输出：

```
0 apple
1 banana
2 orange
```

在循环中，`enumerate` 函数将每个元素的索引和值组成一个元组，然后可以通过解构赋值的方式将索引赋值给 `index` 变量，将值赋值给 `fruit` 变量。

除了在循环中使用 `enumerate`，还可以将其结果转换为列表或字典等数据结构，根据需要进行进一步的处理和操作。例如：

```python
fruits = ['apple', 'banana', 'orange']

# 转换为字典
fruit_dict = dict(enumerate(fruits))
print(fruit_dict)
```

输出：

```python
{0: 'apple', 1: 'banana', 2: 'orange'}
```

这样就可以通过索引快速访问对应的值。

#### zip

使用zip同时迭代两个迭代器，python2中应该使用`itertools`内置模块的`izip`函数。

如果两个迭代器长度不同：

- python3中可以使用`itertools`中的`zip_longest`
- python2中可以使用`izip_longest`

```python
for name,count in zip(names,letters):
  if count>max_letters:
    longest_name = name
    max_letters = count
```

### 异常

#### try/finally

需要将异常向上传播，并在异常发生时执行清理工作。例如可靠的关闭文件句柄

```python
handle = open('/tem/randmo_data.txt')
try:
  data = handl.read()
finally:
  handle.close()
```

#### else

try/except/else结构可以清晰地描述出哪些异常会由自己的代码来处理，哪些异常会传播到上一级。

```python
def load_json_key(data,key):
  try:
    result_dict = json.loads(data)
  except ValueError as e:
    raise KeyError from e
  else:
    return result_dict[key]
```

#### try/except/else/finally

```python
def divide_json(path):
  handle = open(path,"r+")
  try:
    data = handle.read()
    op = json.loads(data)
    value = (op['numerator'],op['denominator'])
  except ZeroDivisionError as e:
    return UNDEFINED
  else:
    op['result'] = value
    result = json.dumps(op)
    handle.seet(0)
    handle.write(result)
    return value
  finally:
    handle.close()
```

### 迭代器:star:

```python
# 普通实现
def normalize(numbers):
    total = sum(numbers)
    result = []
    for value in numbers:
        percent = 100 * value / total
        result.append(percent)
    return result


def read_visits(data_path):
    with open(data_path) as f:
        for line in f:
            yield int(line)


def normalize_copy(numbers):
    numbers = list(numbers)
    total = sum(numbers)
    result = []
    for value in numbers:
        percent = 100 * value / total
        result.append(percent)
    return result


def normalize_func(get_iter):
    total = sum(get_iter())
    result = []
    for value in get_iter():
        percent = 100 * value / total
        result.append(percent)
    return result


# 最终的处理
def normalize_defensive(numbers):
    # 检测输入值是否为迭代器本身，如果是则返回错误
    if iter(numbers) is iter(numbers):
        raise TypeError('Must supply a container')
    total = sum(numbers)
    result = []
    for value in numbers:
        percent = 100 * value / total
        result.append(percent)
    return result


# 迭代器协议
class ReadVisits(object):
    def __init__(self, path):
        self.path = path

    def __iter__(self):
        with open(self.path) as f:
            for line in f:
                yield int(line)


if __name__ == '__main__':
    visits = [15, 35, 80]
    percentages = normalize(visits)
    print(percentages)

    # 这里不会产生结果
    # 因为迭代器只能产生一轮结果
    it = read_visits('visit.txt')
    percentages = normalize(it)
    print(percentages)

    # 这里复制迭代器，如果数据过多可能会导致程序奔溃
    it = read_visits('visit.txt')
    percentages = normalize_copy(it)
    print(percentages)

    # 这里需要lambda表达式
    percentages = normalize_func(lambda: read_visits('visit.txt'))
    print(percentages)

    # 使用迭代器协议
    visits = ReadVisits('visit.txt')
    percentages = normalize(visits)
    print(percentages)

    # 最终解决方法
    visits = [15, 35, 80]
    normalize_defensive(visits)  # No error
    visits = ReadVisits('visit.txt')
    normalize_defensive(visits)  # No error

    it = iter(visits)
    normalize_defensive(it)  # TypeError

```



### 闭包

> 获取闭包内的数据

:warning: 建议只在简单的程序中使用

```python
def sort_priority(numbers, group):
    """
    对传入的数组进行排序，并且包含在 group 中的数据要排在前面
    :param numbers: 需要排序的数组
    :param group: 
    :return:
    """
    found = False

    def helper(x):
        nonlocal found
        if x in group:
            found = True
            return (0, x)
        return (1, x)

    numbers.sort(key=helper)
    return found
```

### 函数参数

使用None和文档字符串来描述具有动态默认值的参数

```python
def log(message, when=datetime.now()):
    print('%s,%s' % (when, message))
>>>
log("1")
log("2")
>>>
2023-06-30 18:51:28.868699,1
2023-06-30 18:51:28.868699,2

# 正确的使用方法
def log(message, when=None):
    if when is None:
        when = datetime.now()
    print('%s,%s' % (when, message))
```

### Mix-in组件(多重继承):star:

在Python中，Mixin组件是一种通过多重继承方式来扩展类功能的技术。Mixin是一个包含一组方法和属性的类，它旨在被其他类通过继承来复用这些方法和属性，而不是作为独立的类进行实例化。

Mixin组件的特点是它们通常只关注单一功能或行为，并且可以与其他类进行组合使用，以提供额外的功能。通过将Mixin类与其他类进行多重继承，目标类可以继承Mixin类的方法和属性，从而扩展自身的功能，同时仍然保持类的层次结构清晰。

使用Mixin组件的好处是可以实现代码的重用和模块化，而无需使用复杂的继承层次结构或修改现有类的代码。通过将不同的Mixin组件组合在一起，可以灵活地定制类的功能，以满足特定的需求。

在Python中，Mixin组件通常命名为以Mixin结尾的类，并且不包含`__init__`方法，因为Mixin类不应该被实例化。Mixin类的方法和属性被设计为与其他类共同工作，以提供特定的功能。

例如，假设我们有一个基础类`BaseClass`，现在想要为它添加一些序列化和日志记录的功能。我们可以创建两个Mixin组件类，分别为`SerializationMixin`和`LoggingMixin`，它们分别提供序列化和日志记录的方法。然后，我们可以通过多重继承来扩展`BaseClass`并混入这些功能，如下所示：

```python
class SerializationMixin:
    def serialize(self):
        # 实现序列化逻辑
        pass

class LoggingMixin:
    def log(self, message):
        # 实现日志记录逻辑
        pass

class BaseClass(SerializationMixin, LoggingMixin):
    def __init__(self):
        # 初始化逻辑
        pass

    def perform_action(self):
        # 执行操作
        self.log("Performing action")
        self.serialize()
```

在上面的示例中，`BaseClass`通过多重继承从`SerializationMixin`和`LoggingMixin`中继承了`serialize`方法和`log`方法，从而获得了序列化和日志记录的功能。通过Mixin组件，我们可以在不修改`BaseClass`代码的情况下，灵活地添加和组合功能。

需要注意的是，使用Mixin组件时要小心避免混入过多的功能，以免导致类的层次结构复杂化和代码的可读性降低。正确选择和组织Mixin组件，可以帮助我们实现代码的可重用性和灵活性。

> 将内存中的python对象转换为字典形式，以便将其序列化

```python
# 将内存中的python对象转换为字典形式，以便将其序列化

class ToDictMixin(object):
    def to_dict(self):
        return self._traverse_dict(self.__dict__)

    def _traverse_dict(self, instance_dict):
        output = {}
        for key, value in instance_dict.items():
            output[key] = self._traverse(key, value)
        return output

    def _traverse(self, key, value):
        if isinstance(value, ToDictMixin):
            return value.to_dict()
        elif isinstance(value, dict):
            return self._traverse_dict(value)
        elif isinstance(value, list):
            return [self._traverse(key, i) for i in value]
        elif hasattr(value, '__dict__'):
            return self._traverse_dict(value.__dict__)
        else:
            return value


# 以下是演示类
class BinaryTree(ToDictMixin):
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


tree = BinaryTree(10, left=BinaryTree(7, right=BinaryTree(9)), right=BinaryTree(13, left=BinaryTree(11)))
print(tree.to_dict())
>>>
{'value': 10, 'left': {'value': 7, 'left': None, 'right': {'value': 9, 'left': None, 'right': None}}, 'right': {'value': 13, 'left': {'value': 11, 'left': None, 'right': None}, 'right': None}}
```

### 修饰器

#### @property

## Python数据模型

[特殊方法手册](https://docs.python.org/3/reference/datamodel.html)

### Python风格卡牌

```python
import collections

if __name__ == '__main__':
    Card = collections.namedtuple('Card', ['rank', 'suit'])


    class FrenchDeck:
        ranks = [str(n) for n in range(2, 11)] + list('JQKA')
        suits = 'spades diamonds clubs hearts'.split()

        def __init__(self):
            self._cards = [Card(rank, suit) for suit in self.suits for rank in self.ranks]

        def __len__(self):
            """
            可以计算python内数据模型的长度
            :return:
            """
            return len(self._cards)

        def __getitem__(self, position):
            """
            能够对python数据模型进行迭代操作
            例如 迭代，切片等
            :param position:
            :return:
            """
            return self._cards[position]


    deck = FrenchDeck()
    suit_values = dict(spades=3, hearts=2, diamonds=1, clubs=0)


    def spades_high(card: Card):
        """
        排序
        :param card:
        :return:
        """
        rank_value = FrenchDeck.ranks.index(card.rank)
        return rank_value * len(suit_values) + suit_values[card.suit]


    for card in sorted(deck, key=spades_high):
        print(card)

```

### 模拟数值类型

```python
from math import hypot


class Vector:

    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def __repr__(self):
        return 'Vector(%r,%r)' % (self.x, self.y)

    def __abs__(self):
        return hypot(self.x, self.y)

    def __bool__(self):
        return bool(abs(self))

    def __add__(self, other):
        x = self.x + other.x
        y = self.y + other.y
        return Vector(x, y)


v = Vector(3, 4)
v1 = Vector(3,4)
print(v)
print(abs(v))
print(v+v1)
```


$$
增长率= \frac{(421.68+31.65)-(419.75+19.1)}{(419.75+19.1)}\times100\%=0.08\%
$$

$$
得分=6+4\times \frac{0.08\%}{0.1\%}=9.2(分)
$$

