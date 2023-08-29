# Python框架

[[toc]]



## 网络框架

### Flask

> :scroll:简介 

Flask 是一个基于 Python 的轻量级 Web 应用框架，它提供了简洁而灵活的工具和库，用于构建 Web 应用程序。Flask 的设计理念是简单而易扩展，它鼓励开发者使用自己喜欢的工具和库来构建 Web 应用。

> :globe_with_meridians: 网站

1. [文档](https://flask.net.cn/)
2. [Flask扩展](https://flask.palletsprojects.com/en/2.3.x/)

#### Flask扩展

::: details Flask-SocketIO

[文档](https://flask-socketio.readthedocs.io/en/latest/)

Flask-SocketIO 使 Flask 应用程序能够访问客户端和服务器之间的低延迟双向通信。 客户端应用程序可以使用 Javascript、Python、C、Java 和 Swift 中的任何 SocketIO 客户端库或任何其他兼容客户端来建立与服务器的永久连接。

:::

### Django

> :scroll:简介 



> :globe_with_meridians: 网站

1. [文档](https://flask.net.cn/)

#### 部署

::: details Gunicorn部署

1. 环境安装

```bash
pip install gunicorn
```

2. 配置`gunicorn.py`文件

```bash
# 项目根目录下创建文件
vim gunicorn.py
>>> gunicorn.py
bind = "0.0.0.0:8000"
# workers是工作线程数，一般设置成：服务器CPU个数 + 1
workers = 1
#./代表当前目录
errorlog = './logs/gunicorn.error.log'
accesslog = './logs/gunicorn.access.log'
>>>
# 创建log文件
mkdir log
```

3. 配置`setting.py`文件

```python
STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'static1')
STATICFILES_DIRS = [
os.path.join(BASE_DIR,'static')
]
```

4. 启动与停止

```bash
# 启动
gunicorn data_cloud_processing.wsgi -c gunicorn.py
# 停止
pstree -ap|grep gunicorn
kill -9 id
```

:::

### Tornado

> :scroll:简介 

异步web框架

> :globe_with_meridians: 网站

1. [文档](https://flask.net.cn/)
