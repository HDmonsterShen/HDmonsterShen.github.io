import{_ as l,r as o,o as r,c as p,a,w as e,b as c,d as n,e as s}from"./app-9066e6d7.js";const d={},u=c(`<h1 id="前端框架" tabindex="-1"><a class="header-anchor" href="#前端框架" aria-hidden="true">#</a> 前端框架</h1><h2 id="electron" tabindex="-1"><a class="header-anchor" href="#electron" aria-hidden="true">#</a> electron</h2><p>Electron 是一个开源的框架，用于构建跨平台桌面应用程序，使用 HTML、CSS 和 JavaScript 技术。它允许开发者使用 Web 前端技术来构建桌面应用程序，这些应用程序可以运行在 Windows、macOS 和 Linux 等操作系统上。</p><p>以下是一些关于 Electron 的重要信息：</p><ol><li><strong>Web 技术：</strong> Electron 允许开发者使用熟悉的 Web 技术，如 HTML、CSS 和 JavaScript，来构建桌面应用程序。您可以使用前端框架（如 Vue.js、React 或 Angular）来开发应用界面。</li><li><strong>Chromium 和 Node.js：</strong> Electron 使用 Chromium（开源浏览器引擎）来呈现应用界面，并使用 Node.js 提供底层系统访问功能。这使得应用可以在浏览器环境和操作系统环境之间无缝切换。</li><li><strong>主进程和渲染进程：</strong> Electron 应用程序分为主进程和多个渲染进程。主进程是一个特殊的 Node.js 进程，负责管理应用的生命周期、访问底层系统资源和与渲染进程通信。渲染进程是 Web 页面，每个页面都有自己的渲染进程。</li><li><strong>Native API 访问：</strong> Electron 提供了一组原生 API，允许您的应用访问底层操作系统功能，如文件系统、窗口管理、菜单、对话框等。</li><li><strong>打包和分发：</strong> 您可以将 Electron 应用程序打包成可执行文件，以供用户下载和安装。Electron 支持将应用程序打包成适用于多个操作系统的二进制文件。</li><li><strong>社区和生态系统：</strong> Electron 有一个活跃的社区和丰富的插件和工具生态系统，可以帮助开发者更方便地构建和管理应用程序。</li></ol><p>如果您想要构建一个将 Vue.js 与 Flask 结合并打包为桌面应用程序的项目，可以考虑使用 Electron。您可以使用 Vue.js 构建前端界面，使用 Flask 提供后端 API，然后使用 Electron 将其打包为桌面应用程序。这种方式可以允许您使用 Web 技术来构建功能丰富的桌面应用程序。</p><h3 id="node-js-相关代码" tabindex="-1"><a class="header-anchor" href="#node-js-相关代码" aria-hidden="true">#</a> Node js 相关代码</h3><h4 id="写入文件" tabindex="-1"><a class="header-anchor" href="#写入文件" aria-hidden="true">#</a> 写入文件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;example.txt&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;abseff&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发技巧" tabindex="-1"><a class="header-anchor" href="#开发技巧" aria-hidden="true">#</a> 开发技巧</h3><h4 id="项目热重启" tabindex="-1"><a class="header-anchor" href="#项目热重启" aria-hidden="true">#</a> 项目热重启</h4>`,11),m=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` nodemon
`),n("span",{class:"token comment"},"# 根目录下配置 nodemon.json"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string"},'"watch"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"main.js"'),n("span",{class:"token punctuation"},"]"),s(`, // 监视的文件，可以根据需要添加其他文件
  `),n("span",{class:"token string"},'"exec"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"electron-forge start"'),s(` // 当文件发生变化时要执行的命令
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"# 修改package.json"),s(`
`),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"start"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"npx nodemon"'),s(`,
`),n("span",{class:"token punctuation"},"}"),s(`,
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` nodemon
`),n("span",{class:"token comment"},"# 修改package.json"),s(`
`),n("span",{class:"token string"},'"scripts"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"start"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"nodemon --exec electron ."'),s(`,
`),n("span",{class:"token punctuation"},"}"),s(`,
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=c(`<h4 id="webpreferences配置" tabindex="-1"><a class="header-anchor" href="#webpreferences配置" aria-hidden="true">#</a> webPreferences配置</h4><div class="custom-container danger"><p class="custom-container-title">渲染进程调用node js</p><p>该方法可能会导致安全问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">contextIsolation</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="开发问题" tabindex="-1"><a class="header-anchor" href="#开发问题" aria-hidden="true">#</a> 开发问题</h3><div class="custom-container tip"><p class="custom-container-title">electron: --openssl-legacy-provider is not allowed in NODE_OPTIONS</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>unset <span class="token constant">NODE_OPTIONS</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">RequestError: socket hang up</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code># 网络问题
<span class="token keyword">export</span> <span class="token constant">ELECTRON_MIRROR</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org<span class="token operator">/</span>mirrors<span class="token operator">/</span>electron<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container warning"><p class="custom-container-title">关闭控制台安全警告</p><p>使用该方法可能会忽略一些未知的安全问题</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 暂时关闭安全警告</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">[</span><span class="token string">&#39;ELECTRON_DISABLE_SECURITY_WARNINGS&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`,6);function b(h,g){const t=o("CodeGroupItem"),i=o("CodeGroup");return r(),p("div",null,[u,a(i,null,{default:e(()=>[a(t,{title:"electron-forge"},{default:e(()=>[m]),_:1}),a(t,{title:"electron"},{default:e(()=>[k]),_:1})]),_:1}),v])}const _=l(d,[["render",b],["__file","前端框架.html.vue"]]);export{_ as default};
