import{_ as l,r as d,o as t,c,a as n,b as a,d as i,e}from"./app-f6817a80.js";const r={},o=e('<h1 id="python配置手册" tabindex="-1"><a class="header-anchor" href="#python配置手册" aria-hidden="true">#</a> Python配置手册</h1><h2 id="python版本管理" tabindex="-1"><a class="header-anchor" href="#python版本管理" aria-hidden="true">#</a> Python版本管理</h2><p>你可以使用 <code>pyenv</code> 工具来管理 Python 版本。以下是一些常用的 <code>pyenv</code> 命令：</p><ol><li>安装 <code>pyenv</code>：根据你的操作系统，参考 <code>pyenv</code> 的官方文档进行安装。</li><li>列出可用的 Python 版本：运行命令 <code>pyenv versions</code> 可以列出所有已安装和可用的 Python 版本。</li><li>安装指定的 Python 版本：使用命令 <code>pyenv install &lt;version&gt;</code> 安装指定版本的 Python。例如，<code>pyenv install 3.9.5</code> 安装 Python 3.9.5 版本。</li><li>设置全局 Python 版本：使用命令 <code>pyenv global &lt;version&gt;</code> 将指定版本的 Python 设置为全局默认版本。例如，<code>pyenv global 3.9.5</code> 将 Python 3.9.5 设置为全局默认版本。</li><li>设置本地 Python 版本：使用命令 <code>pyenv local &lt;version&gt;</code> 在当前目录下设置指定版本的 Python。例如，<code>pyenv local 3.9.5</code> 将 Python 3.9.5 设置为当前目录的默认版本。</li><li>使用指定的 Python 版本：使用命令 <code>pyenv shell &lt;version&gt;</code> 在当前 shell 会话中使用指定版本的 Python。例如，<code>pyenv shell 3.9.5</code> 使用 Python 3.9.5。</li></ol><p>通过这些命令，你可以方便地切换和管理不同的 Python 版本。注意，切换版本后可能需要重新启动终端或加载新的 shell 配置才能生效。更详细的信息和用法可以参考 <code>pyenv</code> 的官方文档。</p>',5),p={href:"https://github.com/pyenv/pyenv",target:"_blank",rel:"noopener noreferrer"},u=e(`<h2 id="pip" tabindex="-1"><a class="header-anchor" href="#pip" aria-hidden="true">#</a> pip</h2><h3 id="包管理" tabindex="-1"><a class="header-anchor" href="#包管理" aria-hidden="true">#</a> 包管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 升级包</span>
pip <span class="token function">install</span> <span class="token parameter variable">--upgrade</span> package
<span class="token comment"># 卸载包</span>
pip uninstall package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖管理" tabindex="-1"><a class="header-anchor" href="#依赖管理" aria-hidden="true">#</a> 依赖管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从依赖文件安装</span>
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
<span class="token comment"># 生成依赖文件</span>
pip freeze <span class="token operator">&gt;</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="系统环境配置" tabindex="-1"><a class="header-anchor" href="#系统环境配置" aria-hidden="true">#</a> 系统环境配置</h3><h4 id="mac环境配置" tabindex="-1"><a class="header-anchor" href="#mac环境配置" aria-hidden="true">#</a> Mac环境配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建pip文件夹</span>
<span class="token function">mkdir</span> ~/.pip
<span class="token comment"># 创建pip.conf文件</span>
<span class="token function">touch</span> pip.conf
<span class="token comment"># 编辑pup.conf文件</span>
<span class="token function">vim</span> pip.conf

<span class="token punctuation">[</span>global<span class="token punctuation">]</span>
index-url<span class="token operator">=</span>http://mirrors.aliyun.com/pypi/simple/
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
trusted-host<span class="token operator">=</span>mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="win环境配置" tabindex="-1"><a class="header-anchor" href="#win环境配置" aria-hidden="true">#</a> Win环境配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Administrator
<span class="token function">mkdir</span> pip
<span class="token builtin class-name">cd</span> pip
create pip.ini
editor pip.ini
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token punctuation">[</span>global<span class="token punctuation">]</span>
<span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">6000</span>
index-url <span class="token operator">=</span> https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host <span class="token operator">=</span> pypi.tuna.tsinghua.edu.cn
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ubuntu环境配置" tabindex="-1"><a class="header-anchor" href="#ubuntu环境配置" aria-hidden="true">#</a> Ubuntu环境配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.pip
如果不存在.pip则创建目录
<span class="token function">mkdir</span> ~/.pip
<span class="token builtin class-name">cd</span> ~/.pip
 
 
<span class="token function">touch</span> pip.conf
<span class="token function">sudo</span> gedit ~/.pip/pip.conf
 
 
在pip.conf中写入如下内容：即可 
 
<span class="token punctuation">[</span>global<span class="token punctuation">]</span>
index-url <span class="token operator">=</span> https://pypi.tuna.tsinghua.edu.cn/simple/ 
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
trusted-host <span class="token operator">=</span> pypi.tuna.tsinghua.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟环境配置" tabindex="-1"><a class="header-anchor" href="#虚拟环境配置" aria-hidden="true">#</a> 虚拟环境配置</h2><h3 id="virtualenv" tabindex="-1"><a class="header-anchor" href="#virtualenv" aria-hidden="true">#</a> Virtualenv</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> virtualenv
<span class="token function">mkdir</span> ENV
virtualenv vart
<span class="token builtin class-name">cd</span> vart/Scripts
activate
deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vent" tabindex="-1"><a class="header-anchor" href="#vent" aria-hidden="true">#</a> Vent</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建虚拟环境</span>
python <span class="token operator">-</span>m venv 安装路径
<span class="token comment"># 激活虚拟环境 运行active文件</span>
source activate 虚拟环境名字
<span class="token comment"># 关闭虚拟环境</span>
deactivate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可执行文件配置" tabindex="-1"><a class="header-anchor" href="#可执行文件配置" aria-hidden="true">#</a> 可执行文件配置</h2><h3 id="命令提示符运行" tabindex="-1"><a class="header-anchor" href="#命令提示符运行" aria-hidden="true">#</a> 命令提示符运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># py文件中加入</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> .py文件
<span class="token comment"># !/usr/bin/env python</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token function">chmod</span> a+x hello.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置问题" tabindex="-1"><a class="header-anchor" href="#配置问题" aria-hidden="true">#</a> 配置问题</h2><h3 id="whl支持版本" tabindex="-1"><a class="header-anchor" href="#whl支持版本" aria-hidden="true">#</a> whl支持版本</h3>`,22),v={href:"https://blog.csdn.net/weixin_44035267/article/details/108257148",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> pip debug <span class="token parameter variable">--verbose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1);function m(b,k){const s=d("ExternalLinkIcon");return t(),c("div",null,[o,n("p",null,[a("🌐"),n("a",p,[a("Github"),i(s)])]),u,n("p",null,[n("a",v,[a("module ‘pip‘ has no attribute ‘pep425tags‘的解决方案"),i(s)])]),h])}const y=l(r,[["render",m],["__file","Python配置手册.html.vue"]]);export{y as default};
