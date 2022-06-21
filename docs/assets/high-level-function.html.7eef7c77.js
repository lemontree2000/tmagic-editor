import{_ as o,r as c,o as r,c as i,a as e,b as t,e as s,d as n}from"./app.45c0737b.js";const p={},l=s('<h1 id="\u9AD8\u7EA7\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u51FD\u6570" aria-hidden="true">#</a> \u9AD8\u7EA7\u51FD\u6570</h1><p>tmagic-editor\u7684\u4E00\u4E2A\u9AD8\u7EA7\u7279\u6027\uFF0C\u5C31\u662F\u652F\u6301\u5F00\u53D1\u8005\u5728\u4E0D\u4FEE\u6539\u7EC4\u4EF6\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u9879\u76EE\u9875\u9762\u8FDB\u884C\u7279\u5B9A\u7684\u4FEE\u6539\uFF0C\u65B9\u5F0F\u5373\u652F\u6301\u5F00\u53D1\u8005\u5728\u7EBF\u7F16\u7801\uFF0C\u8BA9\u8FD9\u4EFD\u4EE3\u7801\u7279\u5B9A\u65F6\u673A\u6267\u884C\u3002</p><img src="https://image.video.qpic.cn/oa_88b7d-37_1895524853_1636348113209218"><h2 id="tmagic-core" tabindex="-1"><a class="header-anchor" href="#tmagic-core" aria-hidden="true">#</a> @tmagic/core</h2><p>\u6211\u4EEC\u5728 @tmagic/core \u8FD9\u4E2A\u5305\u4E2D\uFF0C\u5B9E\u73B0\u4E86tmagic-editor\u7EC4\u4EF6\u8282\u70B9\u7684 Node \u7C7B\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5728tmagic-editor\u7684\u8FD0\u884C\u73AF\u5883\u88AB\u6E32\u67D3\u524D\uFF0C\u90FD\u4F1A\u5BF9\u5E94\u521D\u59CB\u5316\u4E00\u4E2A Node \u7C7B\u5B9E\u4F8B\u3002\u800C\u8FD9\u4E9B Node \u5B9E\u4F8B\u4E0A\u5305\u542B\u4E86\u4E00\u4E9B\u57FA\u7840\u529F\u80FD\uFF0C\u5305\u62EC\u89E6\u53D1\u6307\u5B9A\u94A9\u5B50\u51FD\u6570\u3002\u8FD9\u662F\u4E00\u4E2A\u6846\u67B6\u65E0\u5173\u7684\u6838\u5FC3\u5E93\uFF0C\u6240\u4EE5\u652F\u6301\u5728\u5404\u4E2A\u8BED\u8A00\u6846\u67B6\u4E2D\u4F7F\u7528\u3002\u4F46\u662F\u5177\u4F53\u89E6\u53D1\u65F6\u673A\u9700\u8981\u7531\u5404\u4E2A\u6846\u67B6\u7684\u6E32\u67D3\u5668\u5B9E\u73B0\u3002</p><p>\u5728 react \u548C vue \u4E24\u79CD\u6846\u67B6\u4E0B\u7684\u6267\u884C\u65F6\u673A\uFF0C\u53EF\u4EE5\u53C2\u8003\u6211\u4EEC\u7684 runtime \u5B9E\u73B0:</p>',6),d={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui-react/src/useApp.ts",target:"_blank",rel:"noopener noreferrer"},u=n("react runtime \u6267\u884C\u94A9\u5B50\u65F6\u673A"),h={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui/src/useApp.ts",target:"_blank",rel:"noopener noreferrer"},_=n("vue runtime \u6267\u884C\u94A9\u5B50\u65F6\u673A"),m=s('<h2 id="\u51FD\u6570\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7F16\u5199" aria-hidden="true">#</a> \u51FD\u6570\u7F16\u5199</h2><p>\u5728\u7F16\u8F91\u4E2D\uFF0C\u5373\u5199\u5165\u4E00\u4E2A\u6267\u884C\u51FD\u6570\uFF0Ctmagic-editor\u4F1A\u5728\u5BF9\u5E94\u7EC4\u4EF6\u7684\u6307\u5B9A\u58F0\u660E\u5468\u671F\u4E2D\u6267\u884C\u8BE5\u51FD\u6570\u3002\u540C\u65F6<strong>\u4F20\u5165\u5F53\u524D\u7EC4\u4EF6\u7684 Node \u5B9E\u4F8B\u5BF9\u8C61</strong>\uFF0C\u4F5C\u4E3A\u6267\u884C\u53C2\u6570\u3002</p><p>\u4F20\u5165\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u6839\u636E\u5404\u8BED\u8A00\u6846\u67B6\u5B9E\u73B0\u7684 ui \u63D0\u4F9B\u7684\u7279\u6027\u80FD\u529B\uFF0C\u6765\u652F\u6301\u4E1A\u52A1\u7EC4\u4EF6\u7684\u80FD\u529B\u5B9E\u73B0\u3002\u8FD9\u4E2A\u529F\u80FD\u63D0\u4F9B\u7ED9\u5F00\u53D1\u8005\u81EA\u7531\u5B9E\u73B0\u9ED1\u79D1\u6280\u7684\u673A\u4F1A\u3002</p><img src="https://image.video.qpic.cn/oa_2a552e-0_934618672_1636348294258073"><h3 id="\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u53C2\u6570</h3>',5),g=n("\u5728 Magic-Core \u4E2D\uFF0C\u6211\u4EEC\u5BF9\u6267\u884C\u94A9\u5B50\u51FD\u6570\u4F20\u5165\u4E86\u5BF9\u5E94\u7684 "),k={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/core/src/Node.ts",target:"_blank",rel:"noopener noreferrer"},b=n("Node"),v=n(" \u5B9E\u4F8B\u5BF9\u8C61\u3002\u5728 react \u548C vue \u4E2D\u4F1A\u7A0D\u6709\u5DEE\u5F02\u3002\u5DEE\u5F02\u5728\u4E8E "),f={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/core/src/Node.ts",target:"_blank",rel:"noopener noreferrer"},N=n("Node"),x=n(" \u5B9E\u4F8B\u7684 instance \u5C5E\u6027\u3002"),T={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/core/src/Node.ts",target:"_blank",rel:"noopener noreferrer"},y=n("Node \u5B9E\u4F8B\u63CF\u8FF0"),A=s(`<h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> instance</h3><p>Magic-Core \u4F1A\u5728\u76D1\u542C\u5230\u5BF9\u5E94\u4E8B\u4EF6\u65F6\uFF0C\u5C06 payload \u8D4B\u503C\u7ED9 Node \u5B9E\u4F8B\u7684 instace \u5C5E\u6027\u3002</p><p>\u5176\u4E2D instance \u5C5E\u6027\u7684\u503C\uFF0C\u5373\u6211\u4EEC\u5728\u4E0A\u9762\u63CF\u8FF0\u7684\uFF0C\u5404\u4E2A\u6846\u67B6\u7684\u94A9\u5B50\u6267\u884C\u65F6\u673A\u65F6\u53D1\u9001\u7684 payload \u6570\u636E\uFF0C\u5404\u4E2A\u6846\u67B6\u53D1\u9001\u7684 instance \u6570\u636E\u4F9D\u636E\u6846\u67B6\u800C\u5B9A\u3002instance \u4E0A\u4F1A\u6302\u8F7D\u4E00\u4E2A $el \u5BF9\u8C61\uFF0C\u662F\u5404\u4E2A\u6846\u67B6 runtime \u5B9E\u73B0\u540E\uFF0C\u5728\u7EC4\u4EF6 mounted \u65F6\u5019\u4F1A\u5F97\u5230\u7684 dom \u5F15\u7528\u5B9E\u4F8B\u3002</p><p>\u5728\u793A\u4F8B\u4E2D\u53EF\u4EE5\u627E\u5230\u5BF9\u5E94\u7684\u89E6\u53D1\u4E8B\u4EF6\u548C\u76D1\u542C\u4E8B\u4EF6\u7684\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// runtime \u4E2D\u53D1\u9001\u6570\u636E</span>
app<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>

<span class="token comment">// class Node </span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;created&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">instance</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),V={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/core/src/Node.ts",target:"_blank",rel:"noopener noreferrer"},j=n("Node \u7C7B\u76D1\u542C\u58F0\u660E\u5468\u671F"),B={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui-react/src/useApp.ts",target:"_blank",rel:"noopener noreferrer"},C=n("react runtime \u6267\u884C\u94A9\u5B50\u65F6\u673A"),E={href:"https://github.com/Tencent/tmagic-editor/blob/master/packages/ui/src/useApp.ts",target:"_blank",rel:"noopener noreferrer"},L=n("vue runtime \u6267\u884C\u94A9\u5B50\u65F6\u673A");function q(w,I){const a=c("ExternalLinkIcon");return r(),i("div",null,[l,e("ul",null,[e("li",null,[e("a",d,[u,t(a)])]),e("li",null,[e("a",h,[_,t(a)])])]),m,e("p",null,[g,e("a",k,[b,t(a)]),v,e("a",f,[N,t(a)]),x]),e("ul",null,[e("li",null,[e("a",T,[y,t(a)])])]),A,e("ul",null,[e("li",null,[e("a",V,[j,t(a)])]),e("li",null,[e("a",B,[C,t(a)])]),e("li",null,[e("a",E,[L,t(a)])])])])}var F=o(p,[["render",q],["__file","high-level-function.html.vue"]]);export{F as default};
