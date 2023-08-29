# Python数据处理

[[toc]]

## 概念

### MapReduce

MapReduce是一种用于处理大规模数据集的编程模型和算法。它将数据处理过程分为两个阶段：Map（映射）和Reduce（归约）。

Map阶段：

1. 输入数据被分割成若干个大小相等的数据块。
2. 每个数据块由多个Map任务并行处理。
3. 每个Map任务对输入数据块中的每个元素应用一个用户自定义的Map函数，生成键-值对。
4. Map函数的输出键-值对被暂存到一个中间数据结构中。

Reduce阶段：

1. 所有Map任务的输出键-值对被根据键进行分组，形成多个键-值对的列表。
2. 每个Reduce任务对每个键及其对应的值列表应用一个用户自定义的Reduce函数，生成最终的结果键-值对。
3. Reduce任务的输出结果被存储到持久化存储介质中，供后续处理或查询使用。

整个MapReduce流程的基本步骤如下：

1. 输入数据的切割和分发。
2. 并行执行Map任务，对每个输入数据块应用Map函数，生成键-值对。
3. 对Map函数的输出进行中间结果的合并和排序。
4. 并行执行Reduce任务，对每个键及其对应的值列表应用Reduce函数，生成最终结果。
5. 将Reduce任务的输出结果存储到持久化存储介质中。

通过将数据切分、并行化处理和结果合并等步骤结合在一起，MapReduce提供了一种高效处理大规模数据集的方法，并在分布式计算环境中具有可扩展性和容错性。它被广泛应用于大数据处理、数据分析和机器学习等领域。

> Python示例

```python
from collections import defaultdict

# 输入数据
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Map函数
def mapper(value):
    # 以键-值对形式输出
    return value % 2, value

# Reduce函数
def reducer(key, values):
    # 对值进行累加求和
    return sum(values)

# 执行MapReduce
def map_reduce(data):
    # 初始化结果字典
    result = defaultdict(list)

    # Map阶段
    for value in data:
        key, mapped_value = mapper(value)
        result[key].append(mapped_value)

    # Reduce阶段
    final_result = {}
    for key, values in result.items():
        final_result[key] = reducer(key, values)

    return final_result

# 调用MapReduce函数
output = map_reduce(data)
print(output)

```

上述代码中，输入数据`data`是一个包含整数的列表。`mapper`函数将每个输入值映射为键-值对，键是奇偶性，值是输入值本身。`reducer`函数对具有相同键的值列表进行求和操作。`map_reduce`函数首先执行Map阶段，将数据映射为键-值对并按键进行分组。然后执行Reduce阶段，对每个键及其对应的值列表应用Reduce函数，生成最终结果。最后，输出结果将以字典形式打印出来。

请注意，上述示例是一个简化的MapReduce流程，用于说明基本概念。在实际应用中，需要考虑更多的细节，如数据切割、分布式环境下的并行执行和结果合并等。

## 字符串处理

### 基本处理

#### 大小写

```python
import string

name = 'hello world'
# 首字母大写
name.title() >>> 'Hello World'
# 全部大写
name.upper() >>> 'HELLO WORLD'
# 全部小写
name.lower() >>> 'hello world'
# capwords使用split将参数分解为单词
# 可选参数seq=None时,将空格字符替换为单个空格，并删除开头和结尾的空格,否则将使用sep拆分和合并单词
sentence = 'Python is one of the best programming languages.'
string.capwords(sentence) >>> 'Python Is One Of The Best Programming Languages.'
string.capwords(sentence,sep='g') >>> 'Python is one of the best progRamming langUagEs.'
```

#### 空白处理

```python
name=" hello world "
# 删除右边空白
name.rstrip() >>> " hello world"
# 删除左边空白
name.lstrip() >>> "hello world "
# 删除全部空白
name.strip() >>> "hello world"
```

#### 替换

```python
message = "I like python"
message.replace("python","go") >>> 'I like go'


# 单字符串替换
table = str.maketrans('cs','kz')
print('this is an incredible test'.translate(table))
>>> thiz iz an inkredible tezt
```

### 格式处理

#### 宽度和精度

```python
"Pi day is {pi:10.2f}".format(pi=pi)
>>> '     3.14'
```

#### 符号对齐和填充

```python
# 居中
"hello".center(39)
>>> '   hello.  '
"hello".center(39,"*")
>>> '***hello***'

# 用0填充
print('{:010.2f}'.format(3.14)) >>> 0000003.14
# 左对齐，居中和右对齐
print('{0:<10.2f}\n{0:^10.2f}\n{0:>10.2f}'.format(3.14,3.14,3.14))
>>> 3.14
>>>    3.14 
>>>       3.14
# 填充字符
print('{:@^20}'.format("Hello")) >>> @@@@@@@Hello@@@@@@@@
# 添加正负号
print('{0:-.2}\n{1:-.2}'.format(3.14,-3.14))
>>> 3.1
>>> -3.1
print('{0:+.2}\n{1:+.2}'.format(3.14,-3.14))
>>> +3.1
>>> -3.1
print('{0: .2}\n{1: .2}'.format(3.14,-3.14))
>>> 3.1
>>> -3.1
# 进制前缀
print('{:b}'.format(22)) >>> 10110
print('{:#b}'.format(22)) >>> 0b10110
```

#### 格式规约

在Python中，格式规约使用在字符串的`format`方法中，用于将数据插入到指定位置并按照特定的格式显示。下面列举了常用的格式规约：

1. `{}`: 无格式规约，直接将参数插入到字符串中，默认使用左对齐。
2. `{:<width}`: 左对齐，字段宽度为`width`。
3. `{:>width}`: 右对齐，字段宽度为`width`。
4. `{:^width}`: 居中对齐，字段宽度为`width`。
5. `{:.precisionf}`: 将浮点数显示为小数点后精度为`precision`的浮点数。
6. `{:.widthf}`: 浮点数显示为字段宽度为`width`的浮点数，不指定精度时，默认保留小数点后6位。
7. `{:.widthe}`: 浮点数以指数形式显示，字段宽度为`width`。
8. `{:.widthg}`: 浮点数根据值的大小自动选择以小数点或指数形式显示，字段宽度为`width`。
9. `{:#x}`: 整数显示为十六进制，并以小写字母表示。
10. `{:#X}`: 整数显示为十六进制，并以大写字母表示。
11. `{:#o}`: 整数显示为八进制。
12. `{:#b}`: 整数显示为二进制。
13. `{:widthd}`: 整数显示为字段宽度为`width`的十进制数。
14. `{:widthb}`: 整数显示为字段宽度为`width`的二进制数。
15. `{:widtho}`: 整数显示为字段宽度为`width`的八进制数。
16. `{:widthx}`: 整数显示为字段宽度为`width`的十六进制数（小写字母表示）。
17. `{:widthX}`: 整数显示为字段宽度为`width`的十六进制数（大写字母表示）。

### 可变字符串

```python
x = bytearray(b'Hello')
x[1] = ord(b'u')
print(x)
>>> bytearray(b'Hullo')
```

## 字符处理

### 字母顺序值

```python
print(chr(1)) >>> A
print(ord('A')) >>> 65
```

### 查找

```python
# 查找某一字符索引
str.find()
```

### 基本转换

```python
# 二进制
print("The number is {num:b}".format(num=42)) >>> The number is 101010
# Unicode码点
print("The number is {num:c}".format(num=1)) >>> The number is A
# 十进制
print("The number is {num:d}".format(num=1)) >>> The number is 1
# 科学计数法
print("The number is {num:e}".format(num=190000)) >>> The number is 1.900000e+05
print("The number is {num:E}".format(num=190000)) >>> The number is 1.900000E+05
# 定点数
print("The number is {num:.4f}".format(num=239.23)) >>> The number is 239.2300
print("The number is {num:.4F}".format(num=239.23)) >>> The number is 239.2300
# 自动定点数或科学计数
print("The number is {num:g}".format(num=239.23)) >>> The number is 239.23
print("The number is {num:G}".format(num=239.23)) >>> The number is 239.23
# 八进制
print("The number is {num:o}".format(num=309)) >>> The number is 465
# 字符串
print("The number is {num:s}".format(num='123')) >>> The number is 123
# 十六进制
print("The number is {num:x}".format(num=232)) >>> The number is e8
print("The number is {num:X}".format(num=232)) >>> The number is E8
# 百分比
print("The number is {num:%}".format(num=0.8)) >>> The number is 80.000000%
# 千位分隔符
print("{:.5}".format(1000)) >>> # 1,000
```

### 常量

```python
# 0-9
print(string.digits)
>>> 0123456789
# ascll字母
print(string.ascii_letters)
>>> abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
```



## 模版

### **string**模版

```python
import string

values = {'var': 'foo'}
t = string.Template(
  	"""
    Variable        : $var
    Escape          : $$
    Variable in text: ${var}iable
    """
)
print('TEMPLATE:', t.substitute(values))
# 该函数可以安全的提供参数
print('TEMPLATE',t.safe_substitute(values)) 
>>> print输出
"""
TEMPLATE: 
    Variable        : foo
    Escape          : $
    Variable in text: fooiable
"""
```

### **%**模版

```python
s = """
    Variable        : %(var)s
    Escape          : %%
    Variable in text: %(var)siable
    """
print('INTERPOLATION:', s % values)
>>> print输出
"""
INTERPOLATION: 
    Variable        : foo
    Escape          : %
    Variable in text: fooiable
"""
```

### **format**模版

```python
s = """
        Variable        : {var}
        Escape          : {{}}
        Variable in text: {var}iable
        """

print('FORMAT:',s.format(**values))
>>> print输出
"""
FORMAT: 
        Variable        : foo
        Escape          : {}
        Variable in text: fooiable
"""
```

### 列表模版

```python
# 使用列表
fullname = ["Alfred","Smoketoomuch"]
"Mr{name[1]}".format(name=fullname)
>>> Mr Smoketoomuch
```

### 字典模版

```python
phonebook = {'Beth':'9102','Alice':'2341'}
print("Cecil`s phone number is {Beth}.".format_map(phonebook))
>>> Cecil`s phone number is 9102.
```

### 方法属性模版

```python
import math
tmpl = "The {mod.__name__} module defines the value {mod.pi} for π"
tmpl.format(mod=math)
>>> 'the math module defines the value 3.1415926 for π'
```



## 文本处理

### 读取文本

#### 全部读取

```python
with open("test.txt") as file:
  contents = file.read()
  print(contents)
```

#### 逐行读取

```python
# 逐行读取，一次性打印
with open('text.txt') as file_object:
  for line in file_object:
    print(line.rstrip())

# 逐行读取，按行打印
with open('text'.txt) as file_object:
  lines = file_object.readlines()
for line in lines:
  print(line)
```

### 写入文本

#### 写入空文件

```python
with open(filename,"w") as file_object:
  file_object.write("I love programming")
```

#### 写入多行

```python
with open(filename,"w") as file_object:
  file_object.write("I love programming\n")
  file_object.write("I love programming\n")
```

#### 追加写入

```python
with open(filename,"a") as file_object:
  file_object.write("I love programming")
  
# 在文件开头追加写入
with open("go1.md","r+",encoding="utf-8") as f:
        # 读取旧数据
        old = f.read()
        # 移动指针到开头
        f.seek(0,0)
        # 写入新数据
        f.write("11")
        # 写入旧数据
        f.write(old)
```

### 格式处理:textwrap

```python
import textwrap
sample_text = '''
    The textwrap module can be used to format text for output in
    situations where pretty-printing is desired .It offers
    programmatic functionality similar to the paragraph wrapping
    or filling features found in many text editors
    '''
print(sample_text)
# 指定缩进宽度
print(textwrap.fill(sample_text,width=50))
# 去除缩进
dedented_text = textwrap.dedent(sample_text)
print(dedented_text)
# 添加前缀文本
dedented_text = textwrap.dedent(sample_text)
wrapped = textwrap.fill(dedented_text,width=50)
wrapped += '\n\nSecond paragraph after a blank line.'
final = textwrap.indent(wrapped,'> ')
print(final)
# 条件添加前缀 为包含偶数个字符的行添加前缀
def should_indent(line):
  print('Indent {!r}?'.format(line))
  return len(line.strip()) % 2 == 0
dedented_text = textwrap.dedent(sample_text)
wrapped = textwrap.fill(dedented_text,width=50)
final = textwrap.indext(wrapped,'EVEN',predicate=should_indent)
print(final)

# 悬挂缩进
dedented_text = textwrap.dedent(sample_text).strip()
print(textwrap.fill(dedented_text,initial_indent="*",subsequent_indent=' '*4,width=50))
>>> 
*The textwrap module can be used to format text
    for output in situations where pretty-printing
    is desired .It offers programmatic
    functionality similar to the paragraph
    wrapping or filling features found in many
    text editors
# 截断
dedented_text = textwrap.dedent(sample_text)
original = textwrap.fill(dedented_text,width=50)
shortened = textwrap.shorten(original,12)
shortened_wrapped = textwrap.fill(shortened,width=50)
print(shortened_wrapped)
```



## 列表

### 基本操作

#### 列表复制

```python
lis = [1,2,3]
lis_copy = lis[:]
```

#### 添加元素

```python
lis = [1,2,3]
# 在结尾插入值
lis.append(4) >>> [1,2,3,4]
# 在指定位置插入值
lis.insert(0,4) >>> [4,1,2,3]
# 追加列表
a = [1,2,3]
b = [4,5,6]
a.extend(b) >>> [1,2,3,4,5,6]
```

#### 删除元素

```python
lis = [1,2,3,"hello world"]
# 直接删除指定index元素
del lis[1] >>> [1,3]
# 弹出结尾元素
s = lis.pop() >>> s = 'hello world' lis=[1,2,3]
# 弹出指定位置元素
s = lis.pop(1) >>> s = 2 lis=[1,3,'hello world']
# 只删除第一个指定元素，多次删除需要循环
s = lis.remove("hello world") >>> s="hello world" lis=[1,2,3]
```

#### 排序

```python
lis = [2,1,3]
# 永久排序
lis.sort() >>> [1,2,3]
# 永久排序 反转
lis.sort(reverse=True) >>> [3,2,1]
# 临时排序
lis.sorted() >>> [1,2,3]
# 反转列表
lis.reverse() >>> [3,2,1]
```

#### 创建列表

```python
# 创建空列表
list = [None]*10
```

#### 查找

```python
# 获取指定元素下标
list.index(element)
# 查找最大值最小值及其索引
data = [1,2,3] data.index(min(data))
```

#### 迭代

1. 普通遍历

   ```python
   lis = 'hello world'
   # 直接遍历
   for i in lis:
       print(i)
   # 序号遍历
   for i in range(len(lis)):
       print(i,lis[i])
   # 获取索引和值遍历
   for k,v in enumerate(lis):
       print(k,v)
   ```

2. 并行迭代

   ```python
   name = ["anne", "beth", "george", "damon"]
   ages = [12, 45, 32, 102]
   for name, age in zip(name, ages):
       print(name, "is", age, "years old")
   >>> anne is 12 years old
   >>> beth is 45 years old
   >>> george is 32 years old
   >>> damon is 102 years old
   ```

3. 迭代索引

   ```python
   strings = ['a','a','c','b','d']
   
   for index,string in enumerate(strings):
       print(index,string)
   >>> 0 a
   >>> 1 a
   >>> 2 c
   >>> 3 b
   >>> 4 d
   ```

   



### 列表方法

#### 基本方法

```python
lis = [1,2,3]
# 最小值
min(lis) >>> 1
# 最大值
max(lis) >>> 3
# 求和
sum(lis) >>> 6
# 计算指定元素出现次数
[1,2,3,4,1].count(1)
# 清空列表
list.clear()
# 列表转字符串
''.join(list)
```

#### 列表推导

```python
lis = [value*2 for value in range(3)] >>> lis=[2,4,6]
# 简单推导
lis1 = [x*x for x in range(10)] >>> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
lis2 = [x*x for x in range(10) if x%2==0] >>> [0, 4, 16, 36, 64]
lis3 = [(x,y) for x in range(3) for y in range(3) if x<2 if y<2] >>> [(0, 0), (0, 1), (1, 0), (1, 1)]
```

> 关于作用域问题

```python
# := 海象运算符可以让last在列表推导式作用域范围外使用
codes = [last := ord(c) for c in 'abc']
print(codes) # [97, 98, 99]
print(last) # >>> 99
```



#### 列表拆分

::: tip 提示

以下方法能够等分一个列表

:::

```python
# 列表等分
def list_of_groups(list_info,per_list_len):
    list_of_group = zip(*(iter(list_info),)*per_list_len)
    end_list = [list(i) for i in list_of_group]
    count = len(list_info)%per_list_len
    end_list.append(list_info[-count:]) if count!=0 else end_list
    return end_list
```





## 字典

### 基本操作

```python
# 清空字段
dict.clear()
# 浅复制
newdict = dict.copy()
# 深复制
newdict = copy.deepcopy(dict)
```

#### 删除元素

```python
# 获取指定键值对，并将键值删除
d = {'x':1,'y':2}
print(d.pop('x'),d)
>>> 1 {'y':2}
# 随机弹出
d = {'x':1,'y':2}
print(d.popitem())
```

#### 添加元素

```python
# 如果不存在则添加
d = {'x': 1, 'y': 2}
d.setdefault("s")
print(d)
>>> {'x': 1, 'y': 2, 's': None}
```

#### 更新元素

```python
d = {'x': 1, 'y': 2}
a = {'x':10}
d.update(a)
print(d)
>>> {'x': 10, 'y': 2}
```

#### 创建字典

```python
# dict函数创建
items = [('name','Gumby'),('age',42)]
d = dict(items)
print(d)
>>> {'name': 'Gumby', 'age': 42}
# 创建新字典，并包含指定字段
{}.fromkeys(['name','age'])
>>> {'age':None,'name':None}
dict.fromkeys(['name','age'],'(unknown)')
>>> {'age':'(unknown)','name':'(unknow)'}
```



### 字典方法

#### 字典遍历

```python
dic = {"name":"zhangsan","age":12}
# 遍历key和值
for k,v in dic.item():
  print(k,v)
# 遍历key
for k in dic.keys():
  print(k)
# 遍历值
for v in dic.value():
  print(v)
# 顺序遍历
for i in sorted(dic.keys()):
  print(i.title())
```

#### 字典解析

```python
list(map(str,range(10)))
>>> ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

#### 字段去重

```python
dicts = {
  "a":"1",
	"b":"2",
	"c":"1"
}

# 这里只会打印独一无二的值
for i in set(dicts.values()):
  print(i)
 
```



### 特殊字典

#### 有序字典

```python
from collections import OrdereDict
test = OrderedDict()

test["a"] = 1
test["b"] = 2
test["c"] = 3

for k,v in test.items():
  print(k,v)
>>> a 1
>>> b 2
>>> c 3
```

## 路径

### 目录处理

> 获取根目录

```python
print (os.environ['HOME']) >>> C:\Users\xxx
print (os.path.expandvars('$HOME')) >>> C:\Users\xxx
print (os.path.expanduser('~')) >>> C:\Users\xxx
```

> 获取当前目录

```python
import  os
print os.getcwd() #获取当前工作目录路径
print os.path.abspath('.') #获取当前工作目录路径
print os.path.abspath('test.txt') #获取当前目录文件下的工作目录路径
print os.path.abspath('..') #获取当前工作的父目录 ！注意是父目录路径
print os.path.abspath(os.curdir) #获取当前工作目录路径
```

> 路径文件名分解

你可以使用Python的`os.path.split()`函数来将文件路径分解为目录和文件名。这样可以将文件和文件夹分开。

以下是一个示例：

```python
pythonCopy code
import os

file_path = "/Users/wangyifan/Desktop/WorkSpace/项目/个人/NFT_LiuXi/代码/fingerprint_browser_automation_tool_v1/src/data1/db/db.so"

directory, filename = os.path.split(file_path)

print("Directory:", directory)
print("Filename:", filename)
```

在这个示例中，`os.path.split()` 函数会将文件路径分解为目录和文件名，分别存储在 `directory` 和 `filename` 变量中。这样你就可以得到文件和文件夹分开的结果。

### 路径处理

> 创建路径

```python
# 创建目录
os.mkdir(path)
# 创建多层目录
os.makedirs(path)
```

> 多层目录

如果你想在 Python 中级联创建文件夹，可以使用 `os.makedirs()` 函数。这个函数可以递归地创建多层文件夹，确保路径上的所有文件夹都被创建。

以下是一个使用 `os.makedirs()` 创建文件夹的示例：

```python
pythonCopy code
import os

# 创建多层文件夹
folder_path = "parent_folder/child_folder/subfolder"
os.makedirs(folder_path, exist_ok=True)
```

在上面的示例中，`os.makedirs()` 函数会将 `folder_path` 中的多层文件夹递归地创建出来。参数 `exist_ok=True` 表示如果文件夹已经存在，不会引发错误。

如果你需要根据不同的路径创建文件夹，可以使用 `os.path.join()` 来级联创建路径，然后再使用 `os.makedirs()` 创建文件夹。

```python
pythonCopy code
import os

# 通过级联创建路径并创建文件夹
folder_name = "parent_folder"
subfolder_name = "child_folder"
folder_path = os.path.join(folder_name, subfolder_name)

os.makedirs(folder_path, exist_ok=True)
```

这将在当前工作目录下创建 `parent_folder/child_folder` 结构的文件夹。

> 路径拼接

```python
# 获取路径分割符
os.seq
```



## 文件

### 路径处理

> 获取文件路径

```python
import os
for root,dirs,files in os.walk(file_dir):
    print(root)# 当前目录路径
    print(dirs)# 当前路径下的所有子目录
    print(files)# 当前路径下的所有非目录文件
```

> 获取文件和文件列表

你可以使用Python的`os`模块来获取指定目录下的文件和文件夹列表，然后筛选出你需要的log文件。以下是一个示例代码：

```python
pythonCopy code
import os

def get_log_files(directory):
    log_files = []
    
    # 遍历目录下的所有文件和文件夹
    for item in os.listdir(directory):
        item_path = os.path.join(directory, item)
        
        # 判断是否为文件并且以 ".log" 结尾
        if os.path.isfile(item_path) and item.lower().endswith(".log"):
            log_files.append(item_path)
    
    return log_files

# 指定目录
directory_path = "/path/to/your/directory"
log_files = get_log_files(directory_path)

# 打印获取到的log文件列表
for log_file in log_files:
    print(log_file)
```

将 `"/path/to/your/directory"` 替换为你实际的目录路径。这段代码会遍历指定目录下的所有文件和文件夹，然后筛选出以 ".log" 结尾的文件，并将这些文件的路径存储在 `log_files` 列表中。最后，打印出获取到的log文件列表。

> 文件目录判定

```python
# 判断文件是否存在
os.path.exists()
# 判断是否是文件
os.path.isfile()
```

### 文件处理库

#### pathlib

```python
from pathlib import Path

my_file = Path("/path/to/file")
if my_file.is_file():
    # 指定的文件存在
if my_file.is_dir():
    # 指定的目录存在
if my_file.exists():
    # 指定的文件或目录存在
```

## 数据转换

### JSON

```python
# 序列化
import json
numbers = [2,3,4,5]
filename = "numbers.json"
with open(filename,'w') as f:
  json.dump(numers,f)
# 反序列化
with open(filename) as f:
  numbers = json.load(f)
```

### 整数转换函数

```python
# 转二进制
bin(i)
# 转十六进制
hex(i)
# 转八进制
oct(i)
```

## 数据验证

### 验证URL格式

你可以使用 Python 的标准库 `urllib.parse` 来验证一个 URL 是否格式正确。具体来说，你可以使用 `urlsplit` 函数来分割 URL，如果 URL 格式正确，就能成功分割。以下是一个简单的示例：

```python
pythonCopy code
from urllib.parse import urlsplit

def is_valid_url(url):
    try:
        result = urlsplit(url)
        return all([result.scheme, result.netloc])  # 判断 scheme 和 netloc 是否都存在
    except Exception as e:
        return False

# 测试
url1 = "https://www.example.com"
url2 = "not_a_valid_url"

print(is_valid_url(url1))  # 输出：True
print(is_valid_url(url2))  # 输出：False
```

注意：这个方法只是验证 URL 的格式是否正确，但不能保证 URL 是真实可访问的。

## 数据方法

### 随机数

#### 随机整数

在 Python 中，你可以使用 `random` 模块的 `randint()` 函数来获取指定范围内的随机整数。`randint()` 函数需要两个参数，一个是随机数的下界，另一个是上界。它将返回这个范围内的一个随机整数，包括上界和下界。

以下是一个例子，生成一个 1 到 10（包括 1 和 10）之间的随机整数：

```python
pythonCopy code
import random

random_number = random.randint(1, 10)

print(random_number)
```

每次你运行这段代码，`random_number` 都会被赋予一个 1 到 10 之间的随机整数。

## 时间

### 生成时间

#### 生成16位时间戳

```python
def get_time_stamp16():
    # 生成16时间戳  eg:1540281250399895  -ln
    datetime_now = datetime.datetime.now()
    print(datetime_now)

    # 10位，时间点相当于从UNIX TIME的纪元时间开始的当年时间编号
    date_stamp = str(int(time.mktime(datetime_now.timetuple())))

    # 6位，微秒
    data_microsecond = str("%06d"%datetime_now.microsecond)

    print(date_stamp,data_microsecond)
    date_stamp = date_stamp+data_microsecond
    return int(date_stamp)
```

### 时间格式转换

#### 16位时间戳转日期

```python
def stampToTime(stamp):
    datatime = time.strftime("%Y-%m-%d %H:%M:%S",time.localtime(float(str(stamp)[0:10])))
    datatime = datatime+'.'+str(stamp)[10:]
    return datatime
```

#### 字符串转13位时间戳

```python
# 字符串时间转13位时间戳
def reserve_time(time_str):
    datetime_obj = datetime.strptime(time_str,"%Y-%m-%d")
    datetime_stamp = str(int(time.mktime(datetime_obj.timetuple())))
    datetime_microsecond = str("%06d"%datetime_obj.microsecond)[0:3]
    date_stamp = datetime_stamp+datetime_microsecond
    return int(date_stamp)
```

#### 字符串转时间

```python
# 字符串转时间
times = "2022-01-01 11:11:11"
times = datetime.datetime.strptime(times,"%Y-%m-%d %H:%M:%S")
```

### 时间计算

#### 差值

在 Python 中，你可以使用 `datetime` 模块来比较时间和当前时间的差值。以下是一些示例：

```python
pythonCopy code
from datetime import datetime

# 获取当前时间
current_time = datetime.now()

# 比较时间差值
time_difference = current_time - your_time

# 获取差值的总秒数
total_seconds = time_difference.total_seconds()

# 获取差值的天数
days = time_difference.days

# 获取差值的小时数
hours = time_difference.seconds // 3600

# 获取差值的分钟数
minutes = (time_difference.seconds // 60) % 60

# 获取差值的秒数
seconds = time_difference.seconds % 60
```

在上述示例中，你需要将 `your_time` 替换为你要比较的时间（可以是 `datetime` 对象或具有相同格式的字符串）。然后，通过计算 `current_time - your_time` 获取时间差值。

你可以使用 `total_seconds()` 方法获取时间差值的总秒数，或使用 `.days` 属性获取时间差值的天数。此外，你还可以通过计算秒数除以 3600（小时）、60（分钟）和取模操作来获取具体的小时、分钟和秒数。

需要注意的是，上述示例中的差值是相对于当前时间的差值。如果你需要比较两个具体时间点之间的差值，你可以将其中一个时间点替换为另一个时间点，并按照相同的方法进行比较。

#### 加减日期

要获取当前日期，并将其加一天，你可以使用 `datetime` 模块来实现。以下是一个示例：

```python
pythonCopy code
from datetime import datetime, timedelta

current_date = datetime.now()
next_day = current_date + timedelta(days=1)

print(next_day)
```

在上述示例中，我们首先使用 `datetime.now()` 获取当前的日期和时间，然后使用 `.date()` 方法提取出当前的日期部分。

接下来，我们使用 `timedelta(days=1)` 创建一个时间增量对象，表示一天的时间间隔。将这个时间增量对象与当前日期相加，即可得到当前日期加一天的结果。

最后，我们将计算得到的结果打印出来。你可以根据需要进一步处理或使用该日期。

需要注意的是，计算后的结果是一个 `datetime.date` 对象，表示日期部分，时间部分为 00:00:00。如果你需要包含时间部分，可以使用 `datetime` 对象并根据需要进行设置

## 图像

::: tip 网站资源

[3. 用Python进行图像处理 — Python基础与应用 文档 (osgeo.cn)](https://www.osgeo.cn/python-tutorial/imgs.html)

:::

### 查看图片

使用函数 `cv2.imread()` 读入图像。

- `cv2.IMREAD_COLOR` ：读入一副彩色图像。图像的透明度会被忽略，这是默认参数。
- `cv2.IMREAD_GRAYSCALE` ：以灰度模式读入图像
- `cv2.IMREAD_UNCHANGED` ：读入一幅图像，并且包括图像的 alpha 通道（RGBA）

```python
>>> import cv2
>>> from matplotlib import pyplot as plt
>>> img = cv2.imread( './img/img2.png')
```

同样使用matplotlit库进行查看

```python
>>> from matplotlib import pyplot as plt
>>> plt.imshow(img)
>>> plt.show()
```

![_images/imgs-opencv_4_0.png](https://typoras.oss-cn-hangzhou.aliyuncs.com/typora_images/imgs-opencv_4_0.png)

可以看出，图像的颜色显示不正常。

这是因为matplotlib使用的颜色模式是我们现在流行的RGB模式，而opencv使用的是BGR模式，即RGB的倒序模式，与我们通常的RGB是反向的。因此在使用matplotlib显示之前需要做一下图像颜色的转换。

```python
>>> img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
```

### 创建图片

#### 创建白底图片

```python
# 创建白底图片
image = Image.new('RGB',(1000,1000),(255,255,255))
image.save("sdsd.png")
plt.imshow(image)
plt.show()
```

### 图像压缩

#### 保真压缩

::: tip 提示

保真压缩能够在保证图像质量的情况下对图片进行压缩

:::

```python
from io import BytesIO
def pic_compress(pic_path, out_path, target_size=199, quality=90, step=5, pic_type='.jpg'):
    # 读取图片bytes
    with open(pic_path, 'rb') as f:
        pic_byte = f.read()

    img_np = np.frombuffer(pic_byte, np.uint8)
    img_cv = cv2.imdecode(img_np, cv2.IMREAD_ANYCOLOR)

    current_size = len(pic_byte) / 1024
    print("图片压缩前的大小为(KB)：", current_size)
    while current_size > target_size:
        pic_byte = cv2.imencode(pic_type, img_cv, [int(cv2.IMWRITE_JPEG_QUALITY), quality])[1]
        if quality - step < 0:
            break
        quality -= step
        current_size = len(pic_byte) / 1024

    # 保存图片
    with open(out_path, 'wb') as f:
        f.write(BytesIO(pic_byte).getvalue())

    return len(pic_byte) / 1024
pic_size = pic_compress('digi/%s'%file,'zip_digi/%s'%file,target_size=100)
```

### 图像方法

#### 添加贴图

```python
def write_paste_image(img_path,img_path1,path):
    """
    给原图片加白底，并左上角放置贴图
    :param img_path: 原图路径
    :param img_path1: 贴图路径
    :return:
    """
    # 先创建白底图片，尺寸比原图大100像素
    img = Image.open(img_path)
    img1 = Image.open(img_path1)
    size = img.size
    write_size = 100
    background = Image.new('RGB',(size[0]+write_size,size[1]+write_size),(255,255,255))
    position = (int((size[0]+write_size)/2-(size[0]/2)),int((size[1]+write_size)/2-(size[1]/2)))
    background.paste(img,position)
    background.paste(img1,(0,0))
    background.save(path+img_path1.split('/')[1])
```



## 库:Pandas

### Excel

#### 文件读取

读取文件并忽略第一行

```python
excel = pd.read_excel('file.xlsx',sheet_name='Sheet1',skiprows=[0])
```

#### Excel方法

获取数据表起始行，忽略空行

```python
def get_start_row(path):
    excel = xlrd.open_workbook(path)
    sheet_list = {}
    for i in excel.sheet_names():
        sheet = excel.sheet_by_name(i)
        start_row = 0
        for j in range(sheet.nrows):
            datas = sheet.row_values(rowx=j,start_colx=0,end_colx=None)
            if datas.count('')<len(datas):
                break
            if datas.count('')==len(datas):
                start_row+=1
        sheet_list[i] = start_row
    return sheet_list
```

### 表头处理

#### 表头替换

直接替换

```python
data.columns = ["a","b","c"]
```

某一行作为表头

```python
new_title = df.values.tolist()[0]
df.columns = title
df.drop([0],inplace=True)
```

### 列处理

#### 重置索引

```python
df.reset_index(drop=True, inplace=True)
```

#### 新增列

在某一位置插入一列

```python
# loc 表示插入到第三列的位置
data.insert(loc=2,column='new_time',value='')
```

#### 删除列

直接删除

```python
del data['time']
```

#### 列去重

```python
# 所有列去重
df.drop_duplicates(keep='first', inplace=True)
# 某一列去重
df.drop_duplicates(subset=['comment'], keep='first', inplace=True)
```

#### 列位置处理

```python
# 两列位置互换
df.loc[:, ['name', 'score']] = df.loc[:,['score','name']].to_numpy()
```

### 行处理

#### 删除Nan

可以使用 `dropna()` 方法来去除数据为 `nan` 的行。这个方法可以通过设置不同的参数来实现不同的去除方式。以下是一些常见的用法：

1. 删除含有 `nan` 的行：

```
pythonCopy code
df.dropna()
```

1. 删除所有值都为 `nan` 的行：

```
pythonCopy code
df.dropna(how='all')
```

1. 删除某些列中含有 `nan` 的行：

```
pythonCopy code
df.dropna(subset=['col1', 'col2'])
```

其中，`col1` 和 `col2` 是需要判断的列名。

还可以使用 `thresh` 参数来指定行中最少要有多少个非 `nan` 值才能保留该行。例如，下面的代码将只保留每行中至少有 2 个非 `nan` 值的行：

```
pythonCopy code
df.dropna(thresh=2)
```

#### 追加数据

```python
df = pd.DataFrame(columns=['ID','Amount'])
for k,v in all_issue.items():
    df = pd.concat([df,pd.DataFrame([[k,v]],columns=['ID','Amount'])])
df
```

### 通用方法

#### 遍历

```python
for row,row_val in excel.iterrows():
  for col in excel.columns:
    print(row,col)
```

#### 排序

按照索引排序

```python
import pandas as pd

# 创建示例数据
data = {'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35]}
df = pd.DataFrame(data, index=[2, 1, 0])

# 打乱索引顺序
df = df.sample(frac=1)

# 按照索引重新排序
df = df.sort_index()

print(df)
>>>
      name  age
0  Charlie   35
1      Bob   30
2    Alice   25
```

#### 检查数据重复

```python
# 该命令会检索出同一行完全重复的index
df.duplicated()
# 该命令检查某字段是否重复的index,keep=False会取出所有重复数据
df.duplicated(subset=['level3'],keep=False)
# 取出数据
df[df.duplicated(subset=['level3'],keep=False)]
```

#### 删除数据

```python
# 根据条件删除一行数据
df = df[(df.x != 0) | (df.y != 0)]
```

#### 修改数据

```python
# 修改x行y列的数据为test
df.iloc[x,y] = 'test'
# 遍历修改数据
for i,k in df.iterrows():
  df.loc[i,'列名'] = '修改值'
```



### 筛选数据

#### 条件筛选

```python
# 查找物理成绩大于60，且生物成绩大于80的行。（注意要带括号
df = df[(df["物理"] > 60) & (df["生物"] > 80)]
```

#### 范围筛选

```python
# 筛选指定时间段内的数据
def slice_data(data,on,off):
    """
    对指定时间内的数据进行切片，并返回数据对象
    :param data: 数据对象
    :param on: 切片起点
    :param off: 切片终点
    :return: 切片数据对象
    """
    on = datetime.datetime.strptime(on,'%Y-%m-%d %H:%M:%S')
    off = datetime.datetime.strptime(off,'%Y-%m-%d %H:%M:%S')
    data = data[(data['split时间']>=on)&(data['split时间']<=off)]
    return data
```

### 数据去重

pandas 对数据去重，并保留日期是最新的那行数据

```python
# 假设原始数据已经读入到了 DataFrame 对象 df 中，并且日期列名为 date
# 将日期列转换为 pandas 的日期类型
df['date'] = pd.to_datetime(df['date'])

# 按照日期从新到旧排序
df = df.sort_values(by='date', ascending=False)

# 去除重复数据，并保留日期是最新的那行数据
df = df.drop_duplicates(subset=['column1', 'column2', 'date'], keep='first')
```

### 导出

#### excel

在 Pandas 中，可以使用 `to_excel` 函数将 DataFrame 数据导出到 Excel 文件。以下是一个示例：

```python
import pandas as pd

# 创建示例数据
data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 35],
        'City': ['New York', 'London', 'Paris']}
df = pd.DataFrame(data)

# 导出到 Excel 文件
df.to_excel('data.xlsx', index=False)
```

在上述示例中，我们创建了一个包含姓名、年龄和城市的 DataFrame，并使用 `to_excel` 函数将其导出到名为 `data.xlsx` 的 Excel 文件。通过设置 `index=False`，可以防止导出时生成额外的索引列。

导出后的 Excel 文件将保存在当前工作目录中。如果希望指定保存路径，可以提供完整的文件路径，例如 `df.to_excel('/path/to/data.xlsx', index=False)`。

## 库:lxrd

::: tip 网站资源

[xlrd — xlrd 2.0.1 documentation](https://xlrd.readthedocs.io/en/latest/)

:::

### 基本方法

获取所有sheet

```python
excel = xlrd.open_workbook(path)
excel.sheet_names()
```

获取sheet数据最大行、最大列

```python
excel = xlrd.open_workbook(path)
excel.sheet_names()
sheet = excel.sheet_by_index(0)
sheet.nrows # 获取最大行
sheet.ncols # 获取最大列
```

