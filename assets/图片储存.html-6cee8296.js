import{_ as l,r as t,o,c,a as s,b as a,d as i,e as n}from"./app-f6817a80.js";const p={},r=s("h1",{id:"图片储存",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片储存","aria-hidden":"true"},"#"),a(" 图片储存")],-1),d=s("h2",{id:"fastdfs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fastdfs","aria-hidden":"true"},"#"),a(" FastDFS")],-1),u={href:"https://github.com/happyfish100/fastdfs",target:"_blank",rel:"noopener noreferrer"},v=n('<p>冗余备份、负载均衡(指向不同服务器或端口)、线性扩容。</p><p>注重高可用、高性能指标</p><p><img src="https://typoras.oss-cn-hangzhou.aliyuncs.com/typora_images/20200223220757647.png" alt="img"></p><p>服务端两个角色:</p><p>Tracker:管理集群，tracker 也可以实现集群。每个 tracker 节点地位平等。收集 Storage 集群的状态。</p><p>Storage:实际保存文件</p><p>Storage 分为多个组，每个组之间保存的文件是不同的。每 个组内部可以有多个成员，组成员内部保存的内容是一样的，组成员的地位是一致的，没有 主从的概念。</p><h3 id="数据库安装" tabindex="-1"><a class="header-anchor" href="#数据库安装" aria-hidden="true">#</a> 数据库安装</h3><h4 id="centos安装" tabindex="-1"><a class="header-anchor" href="#centos安装" aria-hidden="true">#</a> Centos安装</h4>',9),m=n(`<li><p>安装FastDFS依赖包</p><ol><li>将<code>libfastcommon-master</code>文件拷贝到系统中</li><li><code>cd libfastcommon-master</code></li><li><code>./make.sh</code>：编译</li><li><code>sudo ./make.sh install</code></li></ol></li><li><p>安装FastDFS</p><ol><li>解压缩<code>fastdfs-5.10.tar.gz</code></li><li>进入到压缩文件</li><li><code>./make.sh</code></li><li><code>sudo ./make.sh install</code></li></ol></li><li><p>配置追踪服务器tracker</p><ol><li><p><code>sudo cp /etc/fdfs/tracker.conf.sample /etc/fdfs/tracker.conf</code></p></li><li><p><code>sudo cp /etc/fdfs/storage.conf.sample /etc/fdfs/storage.conf</code></p></li><li><p>创建<code>fdfs/tracker</code>并拷贝路径</p></li><li><p><code>vim tracker.conf</code></p><ol><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">base_path</span><span class="token operator">=</span>/home/huidouer/fdfs/tracker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li><li><p>创建<code>fdfs/storage</code>并拷贝路径</p></li><li><p><code>vim storage.conf</code></p><ol><li><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>bash_path=/home/huidouer/fdfs/storage
tracker_server=本机ip:22122
store_path0=/home/huidouer/fdfs/storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol></li><li><p>启动tracker和storage</p><ol><li><code>cd /etc/fdfs</code></li><li><code>sudo fdfs_trackerd ./tracker.conf</code></li><li><code>sudo fdfs_storaged ./storage.conf</code></li></ol></li><li><p>配置client.conf</p><ol><li><p><code>sudp cp client.conf.sample client.conf</code></p></li><li><p><code>vim client.conf</code></p><ol><li><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>base_path=/home/huidouer/fdfs/tracker
tracker_server=本机ip:22122
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol></li>`,5),f=s("p",null,"安装fastdfs-nginx-module",-1),b=n(`<li><p>将fastdfs-nginx-module文件和nginx文件拷贝</p></li><li><p>进入搭配nginx目录中</p></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx/ --add-module<span class="token operator">=</span>/home/huidouer/Desktop/fastDFS/fastdfs-nginx-module_v1.16/fastdfs-nginx-module/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装依赖库</p><ol><li><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>sudo apt-get update
sudo apt-get install libpcre3 libpcre3-dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li>`,4),k=s("p",null,"修改配置文件",-1),g=n(`<li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> obj
<span class="token function">vim</span> Makefile
CFLAGS <span class="token operator">=</span>  <span class="token parameter variable">-pipe</span>  <span class="token parameter variable">-O</span> <span class="token parameter variable">-W</span> <span class="token parameter variable">-Wall</span> -Wpointer-arith -Wno-unused  <span class="token parameter variable">-g</span>  <span class="token parameter variable">-D_F</span>     <span class="token assign-left variable">ILE_OFFSET_BITS</span><span class="token operator">=</span><span class="token number">64</span> <span class="token parameter variable">-DFDFS_OUTPUT_CHUNK_SIZE</span><span class="token operator">=</span><span class="token string">&#39;256*1024&#39;</span> <span class="token parameter variable">-DFDFS_MOD_CONF_FI</span>     <span class="token assign-left variable">LENAME</span><span class="token operator">=</span><span class="token string">&#39;&quot;/etc/fdfs/mod_fastdfs.conf&quot;&#39;</span>

删除-Werror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h={href:"https://www.cnblogs.com/wanghaiqi24/p/10031989.html",target:"_blank",rel:"noopener noreferrer"},_=n(`<li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>fatal error: fdfs_define.h: No such <span class="token function">file</span> or directory
<span class="token number">1</span> 配置，并加载fastdfs-nginx-module模块：

  ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx  --add-module<span class="token operator">=</span>/usr/local/src/fastdfs-nginx-module-1.20/src/

<span class="token number">2</span>  编译安装：

<span class="token function">make</span>  （此处会发生报错）

<span class="token function">make</span> <span class="token function">install</span>

解决方案：

修改fastdfs-nginx-module-1.20/src/config文件，在从1处重新配置

<span class="token assign-left variable">ngx_module_incs</span><span class="token operator">=</span><span class="token string">&quot;/usr/include/fastdfs /usr/include/fastcommon/&quot;</span>

<span class="token assign-left variable">CORE_INCS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$CORE_INCS</span> /usr/include/fastdfs /usr/include/fastcommon/&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li>`,2),x=n(`<li><p>拷贝文件</p><ol><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> fastdfs-nginx-module_v1.16/
<span class="token builtin class-name">cd</span> src
<span class="token function">sudo</span> <span class="token function">cp</span> mod_fastdfs.conf /etc/fdfs
<span class="token builtin class-name">cd</span> /etc/fdfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>编辑文件</p><ol><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> mod_fastdfs.conf
<span class="token assign-left variable">connect_timeout</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">bash_path</span><span class="token operator">=</span>/home/huidouer/fast/fdfs/tracker
<span class="token assign-left variable">tracker_server</span><span class="token operator">=</span>ip
<span class="token assign-left variable">url_have_goup_name</span><span class="token operator">=</span>true
<span class="token assign-left variable">store_path0</span><span class="token operator">=</span>/home/huidouer/fast/fdfs/storage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>拷贝文件</p><ol><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> fastdfs-5.10/conf
<span class="token function">sudo</span> <span class="token function">cp</span> http.conf /etc/fdfs/http.conf
<span class="token function">sudo</span> <span class="token function">cp</span> mime.types /etc/fdfs/mime.types
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/fdfs/http.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>编辑文件</p><ol><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx
<span class="token function">vim</span> conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen <span class="token number">8888</span><span class="token punctuation">;</span>
        server_name localhost<span class="token punctuation">;</span>
        location ~/group<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>/ <span class="token punctuation">{</span>
            ngx_fastdfs_module<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
         location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
         root html<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>      
       <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p><code>sudo ./nginx</code>启动nginx</p></li>`,5),S=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装libfastcommon-maste</span>
<span class="token function">wget</span> https://github.com/happyfish100/libfastcommon.git
<span class="token function">unzip</span> libfastcommon-master.zip
<span class="token builtin class-name">cd</span> libfastcommon-master
./make.sh
./make.sh <span class="token function">install</span>
<span class="token comment"># 安装fastDFS</span>
<span class="token function">wget</span> https://github.com/happyfish100/fastdfs.git
<span class="token function">unzip</span> fastdfs-master.zip
<span class="token builtin class-name">cd</span> fastdfs-master
./make.sh
./make.sh <span class="token function">install</span>
<span class="token comment"># 创建目录</span>
<span class="token builtin class-name">cd</span> /home/huidouer/Documents
<span class="token function">mkdir</span> /fdfs/tracker
<span class="token function">mkdir</span> /fdfs/storage
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token assign-left variable">tracker_path</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/tracker
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token assign-left variable">storage_path</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/storage
<span class="token comment"># 配置跟踪服务器tracker</span>
<span class="token builtin class-name">cd</span> /etc/fdfs
<span class="token function">vim</span> /tracker.conf
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token assign-left variable">base_path</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/tracker
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token function">vim</span> /storage.conf
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token assign-left variable">base_path</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/storage
<span class="token assign-left variable">tracker_server</span><span class="token operator">=</span>virtual machhine ip:22122
<span class="token assign-left variable">store_path0</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/storage
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token comment"># 配置客户端</span>
<span class="token function">vim</span> /etc/fdfs/client.conf
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token assign-left variable">base_path</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/tracker
<span class="token assign-left variable">tracker_server</span><span class="token operator">=</span>virtual machhine ip:22122
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token comment"># 启动tracker和storage</span>
fdfs_trackerd /etc/fdfs/tracker.conf
fdfs_storaged /etc/fdfs/storage.conf
<span class="token comment"># 上传测试</span>
fdfs_upload_file /etc/fdfs/client.conf /home/huidouer/Desktop/banner01.jpg
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">return</span> store credentials<span class="token punctuation">(</span>存储凭证<span class="token punctuation">)</span>
group1/M00/00/00/wKgIiGJWXVSACBfkAAAmv11TetM961.jpg
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token comment"># 关闭服务</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> fdfs
<span class="token function">kill</span> <span class="token parameter variable">-9</span> uid

<span class="token comment"># 安装nginx服务</span>
<span class="token function">wget</span> https://github.com/happyfish100/fastdfs.git
<span class="token function">wget</span> http://nginx.org/download/nginx-1.20.2.tar.gz
<span class="token function">unzip</span> fastdfs-nginx-module.zip
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.20.2.tar.gz
<span class="token comment"># 安装依赖</span>
<span class="token function">apt-get</span> <span class="token function">install</span> libpcre3 libpcre3-dev
<span class="token function">apt-get</span> <span class="token function">install</span> ruby
<span class="token function">apt-get</span> <span class="token function">install</span> zlib1g
<span class="token function">apt-get</span> <span class="token function">install</span> zlib1g.dev

<span class="token builtin class-name">cd</span> fastdfs-nginx-module-master/src <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token assign-left variable">path</span><span class="token operator">=</span>/home/huidouer/Downloads/package/fastDFS/fastdfs-nginx-module-master/src
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/nginx-1.20.2
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx/ --add-module<span class="token operator">=</span>/home/huidouer/Downloads/package/fastDFS/fastdfs-nginx-module-master/src
<span class="token function">make</span> <span class="token function">install</span>
<span class="token function">cp</span> <span class="token punctuation">..</span>/fastdfs-nginx-module-master/src/mod_fastdfs.conf /etc/fdfs/
<span class="token function">vim</span> /etc/fdfs/mod_fastdfs.conf
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token assign-left variable">connect_timeout</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">base_path</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/tracker
<span class="token assign-left variable">tracker_server</span><span class="token operator">=</span>virtual machhine ip:22122
<span class="token assign-left variable">store_path0</span><span class="token operator">=</span>/home/huidouer/Documents/fdfs/storage
<span class="token assign-left variable">url_have_group_name</span><span class="token operator">=</span>true
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>

<span class="token comment"># 拷贝文件</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/fastdfs-master
<span class="token function">cp</span> conf/http.conf /etc/fdfs/http.conf
<span class="token function">cp</span> conf/mime.types /etc/fdfs/mime.types
<span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
server <span class="token punctuation">{</span>
        listen       <span class="token number">8888</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        location ~/group<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>/ <span class="token punctuation">{</span>
                 ngx_fastdfs_module<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
                 root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> /usr/local/nginx/sbin
./nginx
<span class="token comment"># 访问图片地址</span>
<span class="token number">192.168</span>.8.136:8888/group1/M00/00/00/wKgIiGJWXVSACBfkAAAmv11TetM961.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h3><ol><li><code>sudo fdfs_upload_file /etc/fdfs/client.conf file.jpg</code>：测试上传文件</li></ol>`,3);function D(F,A){const e=t("ExternalLinkIcon");return o(),c("div",null,[r,d,s("p",null,[s("a",u,[a("github"),i(e)])]),v,s("ol",null,[m,s("li",null,[f,s("ol",null,[b,s("li",null,[k,s("ol",null,[g,s("li",null,[s("p",null,[s("a",h,[a("报错解决"),i(e)])])]),_])]),x])])]),S])}const w=l(p,[["render",D],["__file","图片储存.html.vue"]]);export{w as default};
