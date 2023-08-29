# Python配置手册

[[toc]]

## pip

### 包管理

```bash
# 升级包
pip install --upgrade package
# 卸载包
pip uninstall package
```

### 依赖管理

```bash
# 从依赖文件安装
pip install -r requirements.txt
# 生成依赖文件
pip freeze > requirements.txt
```

### 系统环境配置

#### Mac环境配置

```bash
# 创建pip文件夹
mkdir ~/.pip
# 创建pip.conf文件
touch pip.conf
# 编辑pup.conf文件
vim pip.conf

[global]
index-url=http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host=mirrors.aliyun.com
```

#### Win环境配置

```bash
cd C:\Users\Administrator
mkdir pip
cd pip
create pip.ini
editor pip.ini
>>>
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
>>>
```

#### Ubuntu环境配置

```bash
cd ~/.pip
如果不存在.pip则创建目录
mkdir ~/.pip
cd ~/.pip
 
 
touch pip.conf
sudo gedit ~/.pip/pip.conf
 
 
在pip.conf中写入如下内容：即可 
 
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/ 
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

## (pyenv)快速切换版本

你可以使用 `pyenv` 工具来管理 Python 版本。以下是一些常用的 `pyenv` 命令：

1. 安装 `pyenv`：根据你的操作系统，参考 `pyenv` 的官方文档进行安装。
2. 列出可用的 Python 版本：运行命令 `pyenv versions` 可以列出所有已安装和可用的 Python 版本。
3. 安装指定的 Python 版本：使用命令 `pyenv install <version>` 安装指定版本的 Python。例如，`pyenv install 3.9.5` 安装 Python 3.9.5 版本。
4. 设置全局 Python 版本：使用命令 `pyenv global <version>` 将指定版本的 Python 设置为全局默认版本。例如，`pyenv global 3.9.5` 将 Python 3.9.5 设置为全局默认版本。
5. 设置本地 Python 版本：使用命令 `pyenv local <version>` 在当前目录下设置指定版本的 Python。例如，`pyenv local 3.9.5` 将 Python 3.9.5 设置为当前目录的默认版本。
6. 使用指定的 Python 版本：使用命令 `pyenv shell <version>` 在当前 shell 会话中使用指定版本的 Python。例如，`pyenv shell 3.9.5` 使用 Python 3.9.5。

通过这些命令，你可以方便地切换和管理不同的 Python 版本。注意，切换版本后可能需要重新启动终端或加载新的 shell 配置才能生效。更详细的信息和用法可以参考 `pyenv` 的官方文档。



## 虚拟环境配置

### Virtualenv

```bash
pip install virtualenv
mkdir ENV
virtualenv vart
cd vart/Scripts
activate
deactivate
```

### Vent

```python
# 创建虚拟环境
python -m venv 安装路径
# 激活虚拟环境 运行active文件
source activate 虚拟环境名字
# 关闭虚拟环境
deactivate
```

## 可执行文件配置

### 命令提示符运行

```bash
# py文件中加入
>>> .py文件
# !/usr/bin/env python
>>>
chmod a+x hello.py
```

## 命令行语句

### whl支持版本

[(166条消息) module ‘pip‘ has no attribute ‘pep425tags‘的解决方案_a99h的博客-CSDN博客_pep425tags](https://blog.csdn.net/weixin_44035267/article/details/108257148)

```bash
python -m pip debug --verbose
```

