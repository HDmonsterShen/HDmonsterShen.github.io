# Python库

[[toc]]

## 库索引

## 标准库

### sys

Python 的 `sys` 模块提供了对 Python 解释器强有力的访问，它包含了一些与 Python 解释器强烈相关的函数和变量。以下是一些 `sys` 模块的主要功能：

1. **命令行参数**: 通过 `sys.argv`，你可以获取到命令行参数的列表。这个列表的第一个元素是你的脚本名，后面的元素是命令行参数。
2. **退出程序**: `sys.exit(arg)` 函数可以使你的脚本退出，并且向调用它的程序返回 `arg`。如果你不提供 `arg`，则默认返回0。
3. **标准流**: `sys.stdin`、`sys.stdout` 和 `sys.stderr` 变量对应于你的程序的标准输入、标准输出和标准错误流。
4. **Python 路径**: `sys.path` 是一个 Python 搜索模块的路径列表。当你导入一个模块时，Python 会在 `sys.path` 列表中的目录中搜索这个模块。
5. **Python 版本信息**: `sys.version_info` 可以获取到当前 Python 解释器的版本信息。
6. **异常信息**: `sys.exc_info()` 函数返回一个包含当前异常信息的三元组。如果当前没有异常，则返回三个 None。
7. **调用栈帧**: `sys._getframe()` 返回调用者的栈帧。
8. **操作系统信息**: `sys.platform` 可以获取到当前操作系统的信息。

这只是 `sys` 模块功能的一部分，有很多其他的函数和变量可以提供对 Python 解释器的访问和控制。为了获取完整的功能列表，你可以查看 [Python 官方文档](https://docs.python.org/3/library/sys.html) 中关于 `sys` 模块的部分。

#### 基本使用

```python
# 导入模块
import sys
sys.path.append("C:/python")
# 自动创建完整路径
sys.path.expanduser("~/python")
# 每次导入模块则重载模块
import importlib
hello = importlib.reload(hello)
```

基本方法

```python
# 查看模块包含的方法
print(dir(copy))
[n for n in dir(copy) if not n.startswith('_')]
## 或
copy.__all__

# 查看模块帮助
print(help(copy.copy))
print(range.__doc__)

# 查看模块路径
print(copy.__file__)
```



#### 操作外部程序

```python
import os
os.system()
os.execv()
os.popen()

# windows下使用
os.startfile("path")
```

### typing(类型注解)

以下是一些`typing`库的示例：

1. 定义函数参数和返回类型

```python
pythonCopy code
from typing import List, Dict, Any

def process_data(data: List[Dict[str, Any]]) -> Dict[str, int]:
    # function logic here
    return result
```

2. 类型别名（Type Aliases）

```python
pythonCopy code
from typing import List, Dict, Tuple

UserId = int
UserDict = Dict[str, Union[str, int]]
Address = Tuple[str, str, str, str, int]
```

3. 泛型（Generics）

```python
pythonCopy code
from typing import TypeVar, Generic

T = TypeVar('T')

class Stack(Generic[T]):
    def __init__(self) -> None:
        self.items: List[T] = []

    def push(self, item: T) -> None:
        self.items.append(item)

    def pop(self) -> T:
        return self.items.pop()

    def is_empty(self) -> bool:
        return len(self.items) == 0
```

4. 可选类型(Optional)

```python
pythonCopy code
from typing import Optional

def greeting(name: Optional[str]) -> str:
    if name:
        return f"Hello, {name}"
    else:
        return "Hello, Stranger"
```

5. 类型组合

```python
pythonCopy code
from typing import List, Tuple, Union

def process_data(data: Union[List[Tuple[str, int]], Tuple[str, int]]) -> Tuple[str, int]:
    # function logic here
    return result
```

这些是`typing`库的一些常见用例，它可以帮助开发人员在代码中指定更明确的类型，提高代码可读性和可维护性。

### collections:star:

Python 的 `collections` 模块实现了特殊的容器数据类型，提供了 Python 的通用内置容器，`dict`，`list`，`set`，和 `tuple` 的替代选择。

一些主要的 `collections` 模块包括：

1. **namedtuple()**: 生成可以使用名字来访问元素的元组的子类。这些元组类似于 C 的结构体或者是 Pascal 的记录。
2. **deque**: 双端队列，可以从队列的任何一端添加或删除元素。这比有类似功能的列表要快。
3. **Counter**: 字典的子类，提供了可哈希对象的计数功能。它是一个集合，元素像字典键(key)一样存储，它们的计数存储为值。计数可以是任何整数值，包括0和负数。
4. **OrderedDict**: 字典的子类，保持键插入的顺序。删除和重新设置一个键将它移到末尾。
5. **defaultdict**: 字典的子类，提供了一个工厂函数用于提供缺失的值。
6. **ChainMap**: 类似字典的类，用于创建多个映射的单一视图。

每种数据类型都有其自己的优势和特定的用途。这些类型在大多数的日常编程任务中都能派上用场，并且他们的使用可以使你的代码更具可读性和自我解释性。

你可以在 Python 官方文档中找到更多关于 `collections` 模块的详细信息：https://docs.python.org/3/library/collections.html

**1. 使用 `Counter` 统计元素的数量：**

```
pythonCopy code
from collections import Counter

lst = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple', 'banana', 'banana']
count = Counter(lst)

print(count)
# 输出: Counter({'apple': 3, 'banana': 3, 'orange': 2})
```

**2. 使用 `defaultdict` 来避免查找字典时键不存在的问题：**

```
pythonCopy code
from collections import defaultdict

d = defaultdict(int)
print(d['key'])  # 输出: 0，尽管 'key' 并没有在字典中

d['key'] = 5
print(d['key'])  # 输出: 5
```

**3. 使用 `namedtuple` 创建一个自定义的元组对象：**

```
pythonCopy code
from collections import namedtuple

# 创建一个命名元组类型 'Person' 有 'name' 和 'age' 两个字段
Person = namedtuple('Person', ['name', 'age'])

bob = Person(name='Bob', age=30)

print(bob.name)  # 输出: Bob
print(bob.age)  # 输出: 30
```

**4. 使用 `deque` 创建一个双端队列：**

```
pythonCopy code
from collections import deque

d = deque()

# 添加到队列右边
d.append('a')
d.append('b')

print(d)  # 输出: deque(['a', 'b'])

# 从队列左边添加
d.appendleft('c')

print(d)  # 输出: deque(['c', 'a', 'b'])
```

**5. 使用 `OrderedDict` 保留字典键值插入的顺序：**

```
pythonCopy code
from collections import OrderedDict

d = OrderedDict()

d['a'] = 1
d['b'] = 2
d['c'] = 3
d['d'] = 4

for key, value in d.items():
    print(key, value)
# 输出: 
# a 1
# b 2
# c 3
# d 4
```

这些例子展示了 `collections` 模块的主要用途，实际上它可以完成更多的任务，依赖于特定的需求和场景。

**创建轻便类**

Python 的 `collections` 模块主要是用来创建容器数据类型，如字典、元组、列表、队列等，而不是用来直接创建类。不过，你可以使用 `collections` 模块中的 `namedtuple` 函数来创建一个带有命名字段的元组子类，这种元组子类在某些情况下可以作为轻量级的类使用。

以下是如何使用 `namedtuple` 来创建一个类的示例：

```
pythonCopy code
from collections import namedtuple

# 创建一个命名元组类型 'Person' 有 'name' 和 'age' 两个字段
Person = namedtuple('Person', ['name', 'age'])

# 现在你可以创建一个 'Person' 实例
bob = Person(name='Bob', age=30)

# 你可以像访问类的属性一样访问元素
print(bob.name)  # 输出: Bob
print(bob.age)  # 输出: 30
```

请注意，`namedtuple` 创建的类是不可变的，就像元组一样，一旦创建，你就不能更改它的值。如果你需要一个可以更改值的类，你可能需要自己创建一个常规的类。

### Io

#### Io.StringIO类

```python
import io
import sys

# 导入该功能后 任何输出到sys.stdout的字符串都会被储存到io.StringIO()中
sysStdout = io.StringIO()

print('An error message', file=sys.stdout)
sys.stdout.write('Another error message\n')
 
# 获取储存的字符串
output = sysStdout.getvalue()
print(output)

# 恢复原始输出
sys.stdout = sys.__stdout__

```



## 工具库

| 库       | 描述                           | 函数 |
| -------- | ------------------------------ | ---- |
| 日志工具 | loguru                         |      |
| os       | 访问操作系统服务，操作外部程序 |      |

### 日志工具

#### loguru

:globe_with_meridians:[文档](https://loguru.readthedocs.io/en/stable/#readme)

> 错误追踪

```python
@logger.catch
def my_func():
    return 1 / 0


if __name__ == '__main__':
    logger.add(sys.stderr, format="{time:YYYY-MM-DD HH:mm:ss} <yellow>{level}</yellow> {message}", filter="my_model",
               level="INFO")
    logger.add("file_{time}.log", format="{time} {level} {message}")
    logger.info("info测试")
    logger.critical("critical测试")
    logger.debug("debug测试1")
    my_func()  # <-这里会追踪错误栈
```



### 代码工具

#### pyarmor(代码混淆)

[官网](https://pyarmor.dashingsoft.com/)

[中文文档](https://pyarmor.readthedocs.io/zh/latest)

PyArmor是一个用于保护Python代码的工具，它可以对Python脚本进行加密、混淆和授权管理，从而提供对源代码的保护和安全性。

主要特点和功能：

1. **代码加密和混淆**：PyArmor可以对Python脚本进行加密和混淆，使其难以被逆向工程或篡改。它使用了多种混淆技术，包括名称混淆、控制流转换和常量替换，从而增加了代码的复杂性和可读性。
2. **授权管理**：PyArmor提供了灵活的授权管理功能，可以帮助开发人员对其Python应用程序进行许可证控制和限制。你可以生成加密的许可证文件，并在运行时验证许可证以确保只有授权用户可以运行你的应用程序。
3. **支持多种平台**：PyArmor可以在Windows、Linux和macOS等多种操作系统上运行，并且可以保护各种Python版本的代码。
4. **简单易用**：PyArmor具有简单易用的命令行界面，你只需运行几个命令即可完成代码的加密和混淆。它还提供了详细的文档和示例，帮助你快速上手。
5. **完整性保护**：PyArmor还提供了一些其他的保护措施，如防止代码被篡改和重打包等。

需要注意的是，PyArmor主要用于保护Python代码的知识产权和防止逆向工程，但并不能完全防止破解。对于更高级的安全需求，可能需要结合其他保护措施和技术来增强代码的安全性。

你可以通过PyArmor的官方网站获取更多关于该工具的信息、文档和示例：https://pyarmor.readthedocs.io/

#### watchdog(代码变化)

`watchdog` 是一个用于监视文件系统变化的 Python 库。它提供了一组 API 和工具，用于监控目录、文件的创建、修改、删除等操作，并触发相应的事件回调。

使用 `watchdog` 库，你可以编写脚本来监视指定目录下文件的变化，例如实时监测文件的修改、自动化处理文件变动等。这在开发、测试和文件同步等场景下非常有用。

`watchdog` 提供了简单易用的 API，支持跨平台，并且具有高效的文件监控能力。

你可以使用 `pip` 包管理器来安装 `watchdog`：

```bash
pip install watchdog
```

然后在 Python 脚本中引入 `watchdog` 模块，并使用其中的类和方法来实现文件监控的功能。

更多关于 `watchdog` 的详细信息和使用示例，你可以参考官方文档：[Watchdog Documentation]

#### PyLint(代码检查工具)

识别python程序中潜在的问题

#### Prospector(静态代码检查工具)

## 格式化输出

### pprint

```python
import sys,pprint
pprint.pprint(sys.path)
```



## GUI库

### PyQt5

[Github](https://github.com/PyQt5)

[文档](https://riverbankcomputing.com/news)

```bash
pip install PyQt6-tools
```

学习网站

[白月黑羽 (byhy.net)](https://www.byhy.net/)

PySide

```BASH
pip install PySide6
```



### Tkinter

[tkinter —— Tcl/Tk 的 Python 接口 — Python 3.11.2 文档](https://docs.python.org/zh-cn/3/library/tkinter.html)

### Streamlit

Streamlit 是一个用于快速构建数据应用程序和交互式界面的 Python 库。它提供了简单易用的 API，使开发者能够快速创建交互式的数据应用。

以下是一个简单的示例，展示了如何使用 Streamlit 创建一个基本的 Web 应用：

```python
pythonCopy code
import streamlit as st

# 添加标题
st.title('Hello Streamlit')

# 添加文本
st.write('这是一个基本的 Streamlit 应用')

# 添加交互部件
name = st.text_input('请输入您的名字')
button = st.button('提交')

# 处理交互事件
if button:
    st.write('您好，' + name + '！')
```

您可以通过运行上述代码来启动 Streamlit 应用。在终端中使用以下命令：

```bash
arduinoCopy code
streamlit run your_app.py
```

上述示例中，我们使用 `st.title` 和 `st.write` 添加了标题和文本内容。然后，我们使用 `st.text_input` 创建了一个文本输入框，并使用 `st.button` 创建了一个提交按钮。当用户点击提交按钮时，我们使用 `st.write` 显示一条问候消息。

除了这些基本的部件，Streamlit 还提供了丰富的部件和功能，如图表绘制、数据可视化、布局控制等，使您能够创建更复杂和交互性更强的应用程序。

您可以通过查阅 Streamlit 官方文档（https://streamlit.io/）来了解更多关于 Streamlit 的详细信息和使用方法。

## 数据处理

### base64(二进制处理)

```python

```

### 数据持久化:pickle

::: tip 提示

pickle模块是Python专用的持久化模块，可以持久化包括自定义类在内的各种数据，比较适合Python本身复杂数据的存贮。

:::

```python
import pickle
# 保存为文件
pickle.dump(df_fold,open('df_fold.pkl','wb'))
# 读取
s = pickle.load(open('df_fold.pkl','rb'))
```

### 数据转换:JSON

数据转换

```python
import json
d = {'key','value'}
ds = [
    {'key1','value',},
    {'key2','value',}
]

# python -> js
d_json = json.dumps(d)
ds_json = json.dumps(ds)
# js->python
json.loads(d_json)
json.loads(ds_json)
```

写入json文件

```python
numbers = [1,2,3]
# 写入
with open("text.json","w") as f_obj:
  json.dump(numbers,f_obj)
# 读取
with open("text.json") as f_obj:
  numbers = json.load(f_obj)
print(numbers)
>>> [1,2,3]
```

### 队列:queue

::: tip 提示

队列

:::

```python
import queue
from queue import Queue

if __name__ == '__main__':
    message_queue = Queue(maxsize=2)
    message_queue.put("hello world")
    message_queue.put("hello world")
    print("start put 3")
    try:
        message_queue.put("hello world",timeout=3)
        # 无需等待，直接抛出异常
        message_queue.put_nowait("hello world")
    except queue.Full as e:
        pass
    # 因为最大长度限制，数据会阻塞在这里
    print("end")
```



```python
from queue import Queue

if __name__ == '__main__':
    message_queue = Queue(maxsize=2)
    message_queue.put("hello world1")
    message_queue.put("hello world2")
    message = message_queue.get()
    print(message)
    message = message_queue.get()
    print(message)
```

### URL处理:urllib

编码解码

```python
import urllib.parse as ip

keyword = "汉字"
d = {
    "k":keyword
}
ret = up.urlencode(d)
print(ret)
```

url拼接

```python
from urllib import parse

base_url = "https://emuchong.com/"
parse.urljoin(base_url,"/test")
```

### 二分查找:bisect

二分查找库

### 正则表达式:re

查找文本

```python
pattern = 'this'
text = 'Does this text match the pattern?'
match = re.search(pattern,text)
# 开始和结束的索引
s = match.start()
e = match.end()
print(match.re.pattern,match.string,s,e,text[s:e])
print(match.re.pattern)
print(match.string)
print(s,e)
print(text[s:e])
```

编译表达式

::: tip 提示

编译的正则表达式具有更高的效率

:::

```python
pattern = 'this'
text = 'Does this text match the pattern?'
regex = re.compile(pattern)
match = regex.search(text)
print(match.start(),match.end())
```

### 搜索比较类库:difflib

::: tip 提示

能够确定两个序列的相似程度，还让你能够从很多序列中找出与指 定序列最为相似的序列。例如，可使用difflib来创建简单的搜索程序

:::



### World处理：python-docx

```bash
pip install python-docx
```

### 迭代器(itertools)

`itertools` 是 Python 标准库中的一个模块，提供了一组用于创建和操作迭代器（iterators）的工具函数。这些函数可以用于生成各种迭代对象，如循环、排列、组合等。`itertools` 提供了高效且内存友好的迭代器实现，适用于处理大数据集或生成无限序列。以下是一些常用的 `itertools` 函数和示例：

**1. `itertools.count(start=0, step=1)`：** 生成一个无限递增的迭代器。

```python
pythonCopy code
import itertools

for num in itertools.count(start=1, step=2):
    print(num)  # 无限输出奇数
```

**2. `itertools.cycle(iterable)`：** 生成一个无限循环的迭代器，反复遍历传入的可迭代对象。

```python
pythonCopy code
import itertools

colors = itertools.cycle(["red", "green", "blue"])
for _ in range(5):
    print(next(colors))
```

**3. `itertools.repeat(elem, times=None)`：** 生成一个重复元素的迭代器，可以指定重复次数。

```python
pythonCopy code
import itertools

repeated = itertools.repeat(5, times=3)
for num in repeated:
    print(num)  # 重复输出 5 三次
```

**4. `itertools.chain(\*iterables)`：** 将多个可迭代对象连接成一个单一的迭代器。

```python
pythonCopy code
import itertools

nums = [1, 2, 3]
letters = ["a", "b", "c"]
combined = itertools.chain(nums, letters)
for item in combined:
    print(item)
```

**5. `itertools.combinations(iterable, r)` 和 `itertools.permutations(iterable, r=None)`：** 生成组合和排列的迭代器，分别返回所有可能的组合和排列。

```python
pythonCopy code
import itertools

colors = ["red", "green", "blue"]
comb = itertools.combinations(colors, 2)  # 两两组合
perm = itertools.permutations(colors, 2)  # 两两排列
```

这些示例只是 `itertools` 提供的功能中的一小部分。你可以根据需要探索更多的函数，以及如何将它们结合使用来满足不同的迭代需求。这个模块非常有用，特别是在处理迭代、排列组合等问题时。

## 图片处理

### pillow

::: tip 提示

该库可以进行网页截图

:::

安装

```bash
pip install pillow
```

网页元素截图

```python
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
# 截图的库
from io import BytesIO
from PIL import Image
# 移动鼠标
url = "https://fanqier.cn/register"
s = Service("C:\Program Files\Google\Chrome\Application\chromedriver.exe")
chrome_options = Options()
br = webdriver.Chrome(service=s, options=chrome_options)

def crop_image(image_file_name):
    # 截取验证码图片
    # 定位某个元素在浏览器中的位置
    time.sleep(5)
    img = br.find_element(by=By.XPATH, value='//img[@class="big"]')
    location = img.location
    size = img.size
    top, buttom, left, right = location["y"], location["y"] + size["height"], location["x"], location["x"] + size[
        "width"]
    print("验证码位置", left, top, right, buttom)
    # TODO:截图时注意屏幕缩放必须为100%
    # 开始对验证码进行截图
    screenshot = br.get_screenshot_as_png()
    screenshot = Image.open(BytesIO(screenshot))
    captcha = screenshot.crop((int(left), int(top), int(right), int(buttom)))
    captcha.save(image_file_name)
    return captcha
```

### tar文件处理(tarfile)

pass

## 数据库工具

### mysql-connector-python

使用 `mysql-connector-python` 库连接 MySQL 数据库的步骤如下：

1. 安装库：首先，确保已安装 `mysql-connector-python` 库。可以使用以下命令通过 pip 进行安装：

```python
pip install mysql-connector-python
```

1. 导入库并连接：在 Python 代码中导入 `mysql.connector` 模块，并使用 `connect()` 函数连接到 MySQL 数据库。提供正确的主机名（hostname）、用户名（user）、密码（password）和数据库名（database）。

```python
import mysql.connector

# 连接数据库
cnx = mysql.connector.connect(
    host="hostname",
    user="username",
    password="password",
    database="database_name"
)

# 执行数据库操作...
```

将 `"hostname"`、`"username"`、`"password"` 和 `"database_name"` 替换为实际的数据库连接信息。

1. 执行数据库操作：一旦成功连接到数据库，您可以使用 `cnx` 对象执行各种数据库操作，例如执行 SQL 查询、插入、更新和删除等。

使用 `pymysql` 库连接 MySQL 数据库的步骤如下：

1. 安装库：确保已安装 `pymysql` 库。可以使用以下命令通过 pip 进行安装：

```bash
pip install pymysql
```

1. 导入库并连接：在 Python 代码中导入 `pymysql` 模块，并使用 `connect()` 函数连接到 MySQL 数据库。提供正确的主机名（host）、用户名（user）、密码（password）和数据库名（db）。

```python
pythonCopy code
import pymysql

# 连接数据库
cnx = pymysql.connect(
    host="hostname",
    user="username",
    password="password",
    db="database_name"
)

# 执行数据库操作...
```

将 `"hostname"`、`"username"`、`"password"` 和 `"database_name"` 替换为实际的数据库连接信息。

1. 执行数据库操作：一旦成功连接到数据库，您可以使用 `cnx` 对象执行各种数据库操作，例如执行 SQL 查询、插入、更新和删除等。

通过以上步骤，您可以在 Python 中连接到 MySQL 数据库，并执行相应的数据库操作。根据您选择的库，选择合适的方法进行连接和操作。

### pymysql

安装

```bash
pip install pymysql
```

基本配置

```python
import pymysql.cursors

connection = pymysql.connect(host="",user="",password="",db="",cursorclass=pymysql.cursors.DictCursor)

if __name__ == '__main__':
    # 访问数据库
    with connection.cursor() as cursor:
        sql = "select id from tablae where deleted = 0 and autoseq = %s"
        cursor.execute(sql,project_id)
        # 获取所有数据
        result = cursor.fetchall()
```

简单查询

```python
sql = 'select * from table where porject = %s'
cursor.execute(sql,1)
sql = 'select * from table where porject = %s and id = %s'
cursor.executemany(sql, [(project_id, project_id, project_id)])
sql = 'select * from table where porject = %(project)s and id = %(id)s'
cursor.executemany(sql, {'id':id,'project':project:project_id})
```

### sqlalchemy

数据库orm

::: tip 网站资源

[github](https://github.com/sqlalchemy/sqlalchemy)

[doc](https://docs.sqlalchemy.org/en/14/)

:::

安装

```bash
pip install sqlalchemy
```

创建连接

1. sqlite

   ```python
   # sqlite
   # 导入数据库
   from sqlalchemy import create_engine
   # 创建连接
   engine = create_engine('sqlite:///foo.db')
   ```

2. mysql

   ```python
   # 创建数据库连接，并返回一个数据库对象
   def engine_database(username='root', password='123456', host='localhost', port='3306', database='car_info'):
       link = 'mysql+pymysql://{username}:{password}@{host}:{port}/{database}'.format(
           username=username,
           password=password,
           host=host,
           port=port,
           database=database)
       return create_engine(link)
   ```

   

### peewee

数据库ORM

::: tip 网站资源

[文档](http://docs.peewee-orm.com/en/latest/)

[github](https://github.com/coleifer/peewee)

:::

安装

```BASH
pip install peewee
```

## 命令行工具

### os.system

执行cmd命令

```python
# addPoint返回的是数字，0代表成功执行
addPoint = os.system('cd %s && git add .'%path)
```

获取命令行参数

```python
import sys

# 返回列表

if __name__ == '__main__':
    print(str(sys.argv))
    
>>>python .\main.py 1 2 2
>>>['.\\main.py', '1', '2', '2']
```

### optparse

python2中可用，python3中弃用



### argparse

::: tip 提示

Unix命令行工具

:::

### xonsh

[GitHub - xonsh/xonsh: Python-powered, cross-platform, Unix-gazing shell](https://github.com/xonsh/xonsh)



## 并发

### 多线程:threading

基本使用

```python
import time
from threading import Thread

def hello(arg):
    print("hello",arg)

t1 = Thread(target=hello,args=("world1",))
t2 = Thread(target=hello,args=("world2",))
t1.start
t2.start
# 程序会因为主线程的停止提前结束
```

join：阻塞主线程，等待子线程完成

```python
thraads = []
t = Thread(target=git_pull,args=(path,success))
threads.append(t)
t.start()
for t in threads:
    t.join()
```

setDaemon：主线程退出后子线程必然退出

```python
import time
from threading import Thread

def hello(arg):
    print("hello",arg)

t1 = Thread(target=hello,args=("world1",))
t2 = Thread(target=hello,args=("world2",))
# 设置守护线程
t1.setDaemon(True)
t1.start
t2.setDaemon(True)
t2.start
time.sleep(1 )
print("hello world")
```

继承Thread类

```Python
import time
from threading import Thread

class SleepThread(Thread):
    def __init__(self):
        self.sleep_time=sleep_time
        super().__init__()
    # 重载run方法
    def run(self):
        print("hello world from SleepThread")
        time.sleep(self.sleep_time)

if __name__ == "__main__":
    t1 = SleepThread(2)
    t2 = SleepThread(3)
    t1.start()
    t2.start()
```

线程同步

```python
from threading import Thread
from threading import Lock,Rlock,Condition,Semaphore

total = 0
total_lock = Lock()

def add():
    total_lock.acquire()
    global total
    for i in range(1000000):
        total +=1
    total_lock.release()

def desc():
    total_lock.acquire()
    global total
    for i in range(1000000):
        total -=1
    total_lock.release()
    
if __name__ == '__main__':
    add_thread = Thread(target=add)
    desc_thread = Thread(target=desc)
    
    add_thread.start()
    desc_thread.start()
    
    add_thread.join()
    desc_thread.join()
    print(total)
```

获取返回值

```python
class MyThread(Thread):

    def __init__(self, func, args=()):
        Thread.__init__(self)
        self.func = func
        self.args = args

    def run(self):
        self.result = self.func(*self.args)

    def get_result(self):
        try:
            return self.result
        except AttributeError as e:
            return None
t = MyThread(func=git.argv, args=(argv,))
threads.append(t)
for t in threads:
	t.start()
```

### 多进程:multiprocessing

多进程

### 调度其他程序:subprocess

pass

## 配置文件

### ini

::: tip 网站资源

[configparser --- 配置文件解析器 — Python 3.10.2 文档](https://docs.python.org/zh-cn/3/library/configparser.html)

:::

基本使用

```python
import configparser
cf = configparser.ConfigParser()
cf.read("git2.ini",encoding='utf-8')
# 获取所有配置项
print(cf.sections())
# 获取特定配置项
print(cf.options('git_ssh'))
# 获取键值对
for i in cf.items('git_ssh'):
    print(i)

# 获取特定值
val = cf.get('git_ssh','test')
print(val)
# val = cf.getint('git_ssh','tool')

# 设置
cf.set('git_ssh','test','tttt')
cf.add_section("newsection")
cf.set('newsection','new_key','new_value')

with open("git2.ini", "w+",encoding='utf-8') as f:
    cf.write(f)

# 判断是否存在
if cf.has_section("key"):
    pass
if cf.has_option("key"):
    pass
```

### yaml

> 安装

在Python中，你可以使用`PyYAML`库来读取和解析YAML配置文件。`PyYAML`是一个流行的Python库，用于处理YAML格式的数据。

首先，确保你已经安装了`PyYAML`库。你可以使用以下命令来安装它：

```bash
pip install pyyaml
```

> 基本使用

当你使用`PyYAML`库来读取和修改YAML配置文件时，以下是一些常见的用法示例：

**读取YAML配置文件：**

```python
pythonCopy code
import yaml

# 读取YAML文件
with open('config.yaml', 'r') as file:
    config = yaml.safe_load(file)

# 打印整个配置
print(config)

# 访问特定键的值
value = config['key']

# 访问嵌套键的值
nested_value = config['nested']['key']
```

**修改YAML配置文件：**

```python
pythonCopy code
import yaml

# 读取YAML文件
with open('config.yaml', 'r') as file:
    config = yaml.safe_load(file)

# 修改配置值
config['key'] = 'new value'

# 添加新的键值对
config['new_key'] = 'new value'

# 写入修改后的配置到文件
with open('config.yaml', 'w') as file:
    yaml.dump(config, file)
```

在上述示例中，我们使用`yaml.safe_load()`函数读取YAML配置文件，并将其解析为Python字典或列表。然后，我们可以使用字典的索引来访问特定键的值，并进行修改或添加新的键值对。最后，我们使用`yaml.dump()`函数将修改后的配置写回到文件中。

请确保在读取和写入YAML文件时使用正确的语法和格式。

## 文件下载

### wget

安装

```bash
pip install wget
```

基本用法

```python
import wget
def download(url,path):
    try:
        wget.download(url,out=path)
        print()
    except Exception as err:
        print(err)
```



## 数学相关

### 复数:cmath

::: tip 提示

提供复数的处理

:::

## Web库

### aiohttp

[github](https://github.com/aio-libs/aiohttp)

异步web服务库

```python
pip install aiohttp
# 字符检测库
pip3 install aiohttp
# DNS解析加速
pip3 install cchardet aiodns
```

## 爬虫模块

### webbrowser

```python
import webbrowser

webbrowser.open("http://www.baidu.com")
```

### UserAgent库:fake-useragent

user-agent库

````python
pip install fake-usetagent
````

```PYTHON
from fake_useragent import UserAgent

ua = UserAgent()
if __name__ == '__main__':
    print(ua.random)
```

## 文件处理库

### pathlib

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

 ### tempfile(临时文件库)

Python 的 `tempfile` 库提供了用于创建临时文件和目录的功能。它是标准库中的一部分，不需要额外安装。

`tempfile` 库的主要作用是在程序运行时创建临时文件或目录，并确保它们在不再使用时被正确地删除，以避免临时文件和目录的积聚和浪费磁盘空间。它通常在需要暂时存储数据或进行临时计算时使用。

下面是 `tempfile` 库的一些常用函数和方法：

1. `tempfile.NamedTemporaryFile`: 创建一个具有唯一文件名的临时文件，可以写入和读取数据。文件关闭后会自动删除。

```python
pythonCopy code
import tempfile

with tempfile.NamedTemporaryFile() as temp_file:
    temp_file.write(b'Hello, world!')
    temp_file.seek(0)
    print(temp_file.read())
# 临时文件会在这里自动删除
```

1. `tempfile.TemporaryFile`: 创建一个匿名的临时文件，可用于写入和读取数据。文件关闭后会自动删除。

```python
pythonCopy code
import tempfile

with tempfile.TemporaryFile() as temp_file:
    temp_file.write(b'Hello, world!')
    temp_file.seek(0)
    print(temp_file.read())
# 匿名临时文件会在这里自动删除
```

1. `tempfile.mkstemp`: 创建一个具有唯一文件名的临时文件，返回该文件的文件描述符和文件路径。

```python
pythonCopy code
import tempfile

fd, file_path = tempfile.mkstemp()
with open(fd, 'w') as temp_file:
    temp_file.write('Hello, world!')
    temp_file.seek(0)
    print(temp_file.read())
# 临时文件会在这里自动删除
```

1. `tempfile.mkdtemp`: 创建一个具有唯一目录名的临时目录，返回该目录的路径。

```python
pythonCopy code
import tempfile

temp_dir = tempfile.mkdtemp()
print(temp_dir)
# 临时目录会在这里自动删除
```

1. `tempfile.gettempdir`: 获取系统的默认临时目录路径。

```python
pythonCopy code
import tempfile

temp_dir = tempfile.gettempdir()
print(temp_dir)
```

这些函数和方法可以帮助你在 Python 程序中方便地处理临时文件和目录，确保在使用完毕后正确地进行清理。

### shutil

Python 的 `shutil`（shell utility）库是一个文件和目录操作的标准库。它提供了许多用于复制、移动、删除文件和目录等操作的函数，使得文件和目录操作更加简单和方便。

## 可视化

### pygal

`pygal` 是一个用于生成交互式矢量图表的 Python 库。它提供了多种类型的图表，包括线图、柱状图、饼图、雷达图、地图等，并且支持定制化样式和交互式功能。`pygal` 的输出是矢量图形，可以轻松地嵌入到网页中或保存为图片文件。

## 时间与日期

- calendar
- datetime
- time

## 数据类型库

### frozenszet(不可变集合数据)

在 Python 中，`frozenset` 是一种不可变的集合数据类型。与普通的集合 `set` 相比，`frozenset` 不能被修改，即一旦创建，就无法添加、删除或修改其元素。由于其不可变性，`frozenset` 可以用作字典的键或其他需要不可变对象的场景。以下是关于 `frozenset` 的一些基本信息和使用示例：

**创建 `frozenset`：** 你可以使用 `frozenset()` 函数来创建一个不可变的集合。

```python
pythonCopy code
my_frozenset = frozenset([1, 2, 3, 4])
```

**访问 `frozenset`：** 由于 `frozenset` 是不可变的，你可以像普通的集合一样使用它来进行成员检查。

```python
pythonCopy code
if 2 in my_frozenset:
    print("2 is in the frozenset")
```

**不可变性：** 由于 `frozenset` 不可变，不能执行添加、删除等操作。任何尝试修改 `frozenset` 的操作都会引发错误。

```python
pythonCopy code
# 下面的代码会引发 AttributeError
my_frozenset.add(5)
```

**用作字典键：** 由于 `frozenset` 是不可变的，可以用作字典的键。

```python
pythonCopy code
my_dict = {my_frozenset: "value"}
```

**集合运算：** `frozenset` 支持集合运算，例如交集、并集、差集等。

```python
pythonCopy code
set1 = frozenset([1, 2, 3])
set2 = frozenset([3, 4, 5])

intersection = set1 & set2  # 交集
union = set1 | set2  # 并集
difference = set1 - set2  # 差集
```

总之，`frozenset` 是一个不可变的集合数据类型，适用于需要不可变性的场景。它可以用作字典的键、集合运算等，但由于其不可变性，无法进行修改操作。
