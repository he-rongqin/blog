"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[966],{6262:(e,n)=>{n.A=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},9466:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>t,data:()=>o});var a=s(641);const i={},t=(0,s(6262).A)(i,[["render",function(e,n){const s=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[1]||(n[1]=(0,a.Lk)("h2",{id:"nacos-安装",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#nacos-安装"},[(0,a.Lk)("span",null,"Nacos 安装")])],-1)),(0,a.Lk)("p",null,[(0,a.bF)(s,{to:"/micro/springcloud/nacos-install.html"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Nacos 部署")]))),_:1})]),n[2]||(n[2]=(0,a.Fv)('<p>情况说明：</p><ul><li>开启了nacos鉴权</li><li>使用mysql存储</li><li>端口：<code>8848</code></li></ul><h2 id="nginx-代理nacos" tabindex="-1"><a class="header-anchor" href="#nginx-代理nacos"><span>Nginx 代理Nacos</span></a></h2><p>代理配置</p><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server {</span></span>\n<span class="line"><span> listen 9090;</span></span>\n<span class="line"><span> server_name 127.0.0.1;</span></span>\n<span class="line"><span> location / {</span></span>\n<span class="line"><span>    proxy_set_header Host $host;#保留代理之前的host，重要，否则访问登录会报403</span></span>\n<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;#保留代理之前的真实客户端ip，重要，否则访问登录会报403</span></span>\n<span class="line"><span>    proxy_pass http://localhost:8848/;</span></span>\n<span class="line"><span> }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点配置</p><ul><li><code>proxy_set_header Host $host</code>，保留代理之前的host，重要，否则访问登录会报<code>403</code></li><li><code>proxy_set_header X-Real-IP $remote_addr</code>，保留代理之前的真实客户端ip，重要，否则访问登录会报<code>403</code></li></ul><p>配置完成后，刷新<code>nginx</code>配置:<code>nginx -s reload</code>，浏览器访问：<code>http://localhost:9090/nacos/</code> 就能访问到nacos控制台。</p><figure><img src="/blog/assets/images/nc/nc-ng.png" alt="9090访问" tabindex="0" loading="lazy"><figcaption>9090访问</figcaption></figure>',9))])}]]),o=JSON.parse('{"path":"/micro/springcloud/nacos-ng.html","title":"Ngnix 代理Nacos","lang":"zh-CN","frontmatter":{"title":"Ngnix 代理Nacos","date":"2024-11-11T00:00:00.000Z","order":4,"editLink":false,"category":["微服务教程"],"tag":["Nacos","Nacos / nginx"],"description":"Nacos 安装 情况说明： 开启了nacos鉴权 使用mysql存储 端口：8848 Nginx 代理Nacos 代理配置 重点配置 proxy_set_header Host $host，保留代理之前的host，重要，否则访问登录会报403 proxy_set_header X-Real-IP $remote_addr，保留代理之前的真实客户端ip...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/micro/springcloud/nacos-ng.html"}],["meta",{"property":"og:site_name","content":"路遥"}],["meta",{"property":"og:title","content":"Ngnix 代理Nacos"}],["meta",{"property":"og:description","content":"Nacos 安装 情况说明： 开启了nacos鉴权 使用mysql存储 端口：8848 Nginx 代理Nacos 代理配置 重点配置 proxy_set_header Host $host，保留代理之前的host，重要，否则访问登录会报403 proxy_set_header X-Real-IP $remote_addr，保留代理之前的真实客户端ip..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/blog/assets/images/nc/nc-ng.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T15:13:36.000Z"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"Nacos / nginx"}],["meta",{"property":"article:published_time","content":"2024-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T15:13:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ngnix 代理Nacos\\",\\"image\\":[\\"https://mister-hope.github.io/blog/blog/assets/images/nc/nc-ng.png\\"],\\"datePublished\\":\\"2024-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-11T15:13:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeRongqin\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Nacos 安装","slug":"nacos-安装","link":"#nacos-安装","children":[]},{"level":2,"title":"Nginx 代理Nacos","slug":"nginx-代理nacos","link":"#nginx-代理nacos","children":[]}],"git":{"createdTime":1731338016000,"updatedTime":1731338016000,"contributors":[{"name":"rongqin.he","email":"rongqin.he@mail.zerosky.cn","commits":1}]},"readingTime":{"minutes":0.7,"words":211},"filePathRelative":"micro/springcloud/nacos-ng.md","localizedDate":"2024年11月11日","excerpt":"<h2>Nacos 安装</h2>\\n<p><a href=\\"/blog/micro/springcloud/nacos-install.html\\" target=\\"_blank\\">Nacos 部署</a></p>\\n<p>情况说明：</p>\\n<ul>\\n<li>开启了nacos鉴权</li>\\n<li>使用mysql存储</li>\\n<li>端口：<code>8848</code></li>\\n</ul>\\n<h2>Nginx 代理Nacos</h2>\\n<p>代理配置</p>\\n<div class=\\"language-conf line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"conf\\" data-title=\\"conf\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>server {</span></span>\\n<span class=\\"line\\"><span> listen 9090;</span></span>\\n<span class=\\"line\\"><span> server_name 127.0.0.1;</span></span>\\n<span class=\\"line\\"><span> location / {</span></span>\\n<span class=\\"line\\"><span>    proxy_set_header Host $host;#保留代理之前的host，重要，否则访问登录会报403</span></span>\\n<span class=\\"line\\"><span>    proxy_set_header X-Real-IP $remote_addr;#保留代理之前的真实客户端ip，重要，否则访问登录会报403</span></span>\\n<span class=\\"line\\"><span>    proxy_pass http://localhost:8848/;</span></span>\\n<span class=\\"line\\"><span> }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);