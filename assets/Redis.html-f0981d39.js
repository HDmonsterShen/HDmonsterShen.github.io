import{_ as t,r as c,o as d,c as r,a as n,d as e,w as i,b as s,e as o}from"./app-f6817a80.js";const p={},m=n("h1",{id:"redis数据库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redis数据库","aria-hidden":"true"},"#"),s(" Redis数据库")],-1),u={class:"table-of-contents"},v={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"网站资源",-1),k={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.runoob.com/redis/redis-intro.html",target:"_blank",rel:"noopener noreferrer"},f=o(`<h2 id="数据库安装" tabindex="-1"><a class="header-anchor" href="#数据库安装" aria-hidden="true">#</a> 数据库安装</h2><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># download</span>
<span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.6.tar.gz
<span class="token comment"># tar</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.6.tar.gz <span class="token parameter variable">-C</span> /usr/local
<span class="token comment"># enter redis directory</span>
<span class="token builtin class-name">cd</span> /usr/local/redis-6.2.6
<span class="token comment"># installation dependent environment</span>
<span class="token function">apt</span> insatll gcc
<span class="token function">apt</span> <span class="token function">install</span> tcl
<span class="token comment"># installation and compilation</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">make</span>
<span class="token function">make</span>
<span class="token comment"># test</span>
<span class="token function">make</span> <span class="token builtin class-name">test</span>
<span class="token comment"># if pass the test</span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># move conf file</span>
<span class="token function">cp</span> /usr/local/redis/redis.conf /etc/redis/
<span class="token builtin class-name">cd</span> /etc/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改redis.conf文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># edit config file</span>
<span class="token function">vim</span> redis.conf
<span class="token comment"># /bind 如果需要远程访问，可将此行注释，或绑定一个真实ip</span>
<span class="token builtin class-name">bind</span>
<span class="token comment"># port</span>
port <span class="token number">6379</span>
<span class="token comment"># 设置守护进程</span>
daemonize <span class="token function">yes</span>
<span class="token comment"># 数据文件</span>
dbfilename dump.rdb
<span class="token comment"># 数据文件保存地址 可能需要建立路径</span>
<span class="token function">dir</span> /var/lib/redis
<span class="token comment"># 日志文件 可能需要建立路径</span>
logfile /var/log/redis/redis-server.log
<span class="token comment"># 数据库</span>
database <span class="token number">16</span>
<span class="token comment"># 设置访问密码</span>
requirepass
<span class="token comment"># 关闭保护模式</span>
protected-mode no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以配置的方式启动和关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ender redis.conf direcory</span>
<span class="token builtin class-name">cd</span> /etc/redis
redis-server redis.conf

<span class="token comment"># restart</span>
<span class="token function">ps</span> <span class="token parameter variable">-aux</span> <span class="token operator">|</span> <span class="token function">grep</span> redis
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid
redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以服务的方式启动和关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> redis start
<span class="token function">service</span> redis stop
<span class="token function">service</span> redis restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><p>进入redis客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> <span class="token parameter variable">-p</span>
redis-cli <span class="token parameter variable">-h</span> <span class="token number">10.66</span>.56.13 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> <span class="token number">12345678</span>
<span class="token comment"># test</span>
<span class="token function">ping</span>
<span class="token comment"># 中文乱码解决</span>
redis-cli  <span class="token parameter variable">--raw</span> <span class="token parameter variable">-a</span> <span class="token number">12345678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(g,x){const a=c("router-link"),l=c("ExternalLinkIcon");return d(),r("div",null,[m,n("nav",u,[n("ul",null,[n("li",null,[e(a,{to:"#数据库安装"},{default:i(()=>[s("数据库安装")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#ubuntu"},{default:i(()=>[s("Ubuntu")]),_:1})])])]),n("li",null,[e(a,{to:"#基本操作"},{default:i(()=>[s("基本操作")]),_:1})])])]),n("div",v,[b,n("p",null,[n("a",k,[s("Redis"),e(l)])]),n("p",null,[n("a",h,[s("Redis 简介 | 菜鸟教程 (runoob.com)"),e(l)])])]),f])}const R=t(p,[["render",_],["__file","Redis.html.vue"]]);export{R as default};
