"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},6975:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>t});var n=a(641);const l={},e=(0,a(6262).A)(l,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,s[0]||(s[0]=[(0,n.Fv)('<p>本章内容都是在<code>微服务架构体系</code>中进行验证。</p><h2 id="一、下载-skywalking-agent-java" tabindex="-1"><a class="header-anchor" href="#一、下载-skywalking-agent-java"><span>一、下载 Skywalking Agent Java</span></a></h2><p><code>skywalking-java-agent-9.3.0</code> <a href="https://www.apache.org/dyn/closer.cgi/skywalking/java-agent/9.3.0/apache-skywalking-java-agent-9.3.0.tgz" target="_blank" rel="noopener noreferrer">下载地址</a></p><p>解压后的目录：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">+--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> agent</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> activations</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-toolkit-log4j-1.x-activation.jar</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-toolkit-log4j-2.x-activation.jar</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-toolkit-logback-1.x-activation.jar</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">         ...</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         agent.config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> plugins</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-dubbo-plugin.jar</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-feign-default-http-9.x.jar</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-httpClient-4.x-plugin.jar</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">         .....</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> optional-plugins</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-gson-2.x-plugin.jar</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">         .....</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bootstrap-plugins</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         jdk-http-plugin.jar</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">         .....</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> expired-plugins</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">         # Expired plugins are moved to this folder. No guarantee of working and maintenance.</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">         apm-impala-2.6.x-plugin.jar</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">         .....</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    +--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    skywalking-agent.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、设置java-agent" tabindex="-1"><a class="header-anchor" href="#二、设置java-agent"><span>二、设置Java Agent</span></a></h2><p><strong>条件</strong></p><ul><li><code>agent</code> 适用于 <code>JDK 8 - 21</code></li><li><code>java agent</code> <code>9.3.0</code></li><li>SkyWalking OAP server <code>10.1.0+</code></li><li>SkyWalking ui <code>10.1.0</code></li></ul><p><strong>期望</strong></p><ul><li>调用链路跟踪</li><li>查看调用 <code>Trace</code> 路径</li><li>查看调用 <code>Trace</code> 日志</li></ul><p><strong>准备</strong></p><ul><li>准备<code>Nginx</code> ，用于代理网关</li><li>准备 <code>gateway</code> 服务</li><li>准备 <code>twork-service</code> 服务</li><li>准备 <code>oss-service</code> 服务</li></ul><p><em>Note：最好是准备3个或以上服务</em></p><h3 id="_2-1-plugins" tabindex="-1"><a class="header-anchor" href="#_2-1-plugins"><span>2.1 plugins</span></a></h3><p>从 <code>optional-plugins</code> 目录下将一下插件复制到 <code>plugins</code> 目录，否则在有些场景（gateway）会有问题，这里需要根据自己的应用版本选择相应版本，我这里的spring boot 版本是：<code>spring boot 2.x</code>。</p><ul><li>apm-mybatis-3.x-plugin-9.3.0.jar</li><li>apm-nacos-client-2.x-plugin-9.3.0.jar</li><li>apm-sentinel-1.x-plugin-9.3.0.jar</li><li>apm-spring-cloud-gateway-3.x-plugin-9.3.0.jar</li><li>apm-spring-webflux-5.x-plugin-9.3.0.jar</li></ul><h3 id="_2-2-应用配置" tabindex="-1"><a class="header-anchor" href="#_2-2-应用配置"><span>2.2 应用配置</span></a></h3><p>在每个需要集成<code>skywalking</code>的应用中配置以下内容：</p><p>Maven，<code>sw.version = 9.3.0</code></p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--skywalking --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.apache.skywalking&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;apm-toolkit-micrometer-registry&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;${sw.version}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.apache.skywalking&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;apm-toolkit-logback-1.x&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;${sw.version}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.apache.skywalking&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;apm-toolkit-trace&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;${sw.version}&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!--skywalking end--&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>logback.xml</code> 中添加</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appender</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;skywalkingConsoleAppender&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ch.qos.logback.core.ConsoleAppender&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">encoder</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ch.qos.logback.core.encoder.LayoutWrappingEncoder&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">layout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.mdc.TraceIdMDCPatternLogbackLayout&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{tid}] [%thread] %-5level %logger{36} -%msg%n&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">encoder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    &lt;!--skywalking log trace--&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appender</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;grpc-log&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.log.GRPCLogClientAppender&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">encoder</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ch.qos.logback.core.encoder.LayoutWrappingEncoder&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">layout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;org.apache.skywalking.apm.toolkit.log.logback.v1.x.mdc.TraceIdMDCPatternLogbackLayout&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%X{tid}] [%thread] %-5level %logger{36} -%msg%n&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Pattern</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">encoder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> level</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;INFO&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appender-ref</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;skywalkingConsoleAppender&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">appender-ref</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;grpc-log&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-配置启动参数" tabindex="-1"><a class="header-anchor" href="#_2-3-配置启动参数"><span>2.3 配置启动参数</span></a></h3><p>在应用（<code>Spring boot</code>）启动的时候，设置<code>jvm</code> 参数: <code>-javaagent: [skywalking agent 的解压目录]</code></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># agent name 服务名</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DSW_AGENT_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cgi-bin</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># skywalking oap 11800 地址</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-DSW_AGENT_COLLECTOR_BACKEND_SERVICES</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:11800</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># skywalking agent 的绝对路径</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-javaagent:D:\\work_space\\code\\local-bin\\apm\\skywalking\\skywalking-agent\\skywalking-agent.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、验证结果" tabindex="-1"><a class="header-anchor" href="#三、验证结果"><span>三、验证结果</span></a></h2><p>启动应用</p><ul><li>启动，<code>Nginx</code>，并代理<code>/cgi-bin/</code> 到网关</li><li>启动 gateway</li><li>启动 twork-service</li><li>启动 oss-service</li></ul><p><code>Postmain</code> 访问：</p><ul><li><code>oss-service/v1/health</code></li><li><code>/twork-service/v1/team/task/page?page=1&amp;pageSize=8</code></li></ul><p>查看 skywalking ui</p><p>访问<code>skywalking ui</code> : <code>http://localhost:8088</code>（这里的8088 是从docker中映射出来的端口，以实际情况为准）</p><figure><img src="/assets/images/sw/topo.png" alt="拓扑图" tabindex="0" loading="lazy"><figcaption>拓扑图</figcaption></figure>',33)]))}]]),t=JSON.parse('{"path":"/micro/springcloud/skywalking-agent.html","title":"Skywalking agent Java","lang":"zh-CN","frontmatter":{"title":"Skywalking agent Java","date":"2024-11-07T00:00:00.000Z","order":4,"category":["微服务","apm"],"tag":["APM","服务治理","链路监控"],"description":"本章内容都是在微服务架构体系中进行验证。 一、下载 Skywalking Agent Java skywalking-java-agent-9.3.0 下载地址 解压后的目录： 二、设置Java Agent 条件 agent 适用于 JDK 8 - 21 java agent 9.3.0 SkyWalking OAP server 10.1.0+ Sk...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/micro/springcloud/skywalking-agent.html"}],["meta",{"property":"og:site_name","content":"路遥"}],["meta",{"property":"og:title","content":"Skywalking agent Java"}],["meta",{"property":"og:description","content":"本章内容都是在微服务架构体系中进行验证。 一、下载 Skywalking Agent Java skywalking-java-agent-9.3.0 下载地址 解压后的目录： 二、设置Java Agent 条件 agent 适用于 JDK 8 - 21 java agent 9.3.0 SkyWalking OAP server 10.1.0+ Sk..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/blog/assets/images/sw/topo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-07T09:44:45.000Z"}],["meta",{"property":"article:tag","content":"APM"}],["meta",{"property":"article:tag","content":"服务治理"}],["meta",{"property":"article:tag","content":"链路监控"}],["meta",{"property":"article:published_time","content":"2024-11-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-07T09:44:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Skywalking agent Java\\",\\"image\\":[\\"https://mister-hope.github.io/blog/assets/images/sw/topo.png\\"],\\"datePublished\\":\\"2024-11-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-07T09:44:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HeRongqin\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、下载 Skywalking Agent Java","slug":"一、下载-skywalking-agent-java","link":"#一、下载-skywalking-agent-java","children":[]},{"level":2,"title":"二、设置Java Agent","slug":"二、设置java-agent","link":"#二、设置java-agent","children":[{"level":3,"title":"2.1 plugins","slug":"_2-1-plugins","link":"#_2-1-plugins","children":[]},{"level":3,"title":"2.2 应用配置","slug":"_2-2-应用配置","link":"#_2-2-应用配置","children":[]},{"level":3,"title":"2.3 配置启动参数","slug":"_2-3-配置启动参数","link":"#_2-3-配置启动参数","children":[]}]},{"level":2,"title":"三、验证结果","slug":"三、验证结果","link":"#三、验证结果","children":[]}],"git":{"createdTime":1730972685000,"updatedTime":1730972685000,"contributors":[{"name":"rongqin.he","email":"2012465448@qq.com","commits":1}]},"readingTime":{"minutes":2.08,"words":623},"filePathRelative":"micro/springcloud/skywalking-agent.md","localizedDate":"2024年11月7日","excerpt":"<p>本章内容都是在<code>微服务架构体系</code>中进行验证。</p>\\n<h2>一、下载 Skywalking Agent Java</h2>\\n<p><code>skywalking-java-agent-9.3.0</code> <a href=\\"https://www.apache.org/dyn/closer.cgi/skywalking/java-agent/9.3.0/apache-skywalking-java-agent-9.3.0.tgz\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载地址</a></p>\\n<p>解压后的目录：</p>","autoDesc":true}')}}]);