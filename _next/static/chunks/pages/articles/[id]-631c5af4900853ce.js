(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{5572:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return E},default:function(){return Article}});var t=n(7294),a=n(2962),i=n(9313),l=n(637),c=n(5079),s=n(6167),o=n(5688),u=n(1042);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function CodeRenderer(e){let{inline:r,className:n,children:a,...i}=e,[c,s]=(0,t.useState)(""),[o,u]=(0,t.useState)(null),[d,g]=(0,t.useState)(null);return(0,t.useEffect)(()=>s(String(a).replace(/\n$/,"")),[a]),(0,t.useEffect)(()=>u(/language-(\w+)/.exec(n||"")),[n]),(0,t.useEffect)(()=>g(null!==o?o[1]:null),[o]),r||null===d?t.createElement("code",_extends({className:n},i),a):t.createElement("div",{className:"hljs"},t.createElement("code",{dangerouslySetInnerHTML:{__html:l.Z.highlight(c,{language:d}).value}}))}l.Z.registerLanguage("swift",c.Z),l.Z.registerLanguage("bash",s.Z),l.Z.registerLanguage("yaml",o.Z),l.Z.registerLanguage("xml",u.Z);var d=n(5675),g=n.n(d),p=n(9116),_=n.n(p);function ImageRenderer(e){return t.createElement(g(),{src:"/images/"+e.src,alt:"Image",width:500,height:500,className:_().imageBlock})}var h=n(4669),m=n.n(h);function ParagraphRenderer_extends(){return(ParagraphRenderer_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function ParagraphRenderer(e){return t.createElement("p",ParagraphRenderer_extends({},e,{className:m().paragraphBlock}))}var f=n(9207),b=n.n(f);function TableRenderer_extends(){return(TableRenderer_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function TableRenderer(e){return t.createElement("table",TableRenderer_extends({},e,{className:b().tableBlock}))}var w=n(2490),k=n(8034),v=n.n(k),E=!0;function Article(e){let{article:r}=e;return t.createElement(t.Fragment,null,t.createElement(a.PB,{title:r.title,description:r.description,canonical:"https://www.linkandreas.de/articles/"+r.id,openGraph:{url:"https://www.linkandreas.de/articles/"+r.id,title:r.title,description:r.description,images:[{url:`https://www.linkandreas.de/images/previews/${r.id}.jpeg`,width:1200,height:630,alt:"Link Preview Image"}],siteName:"Andreas Link"},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}}),t.createElement("div",{className:v().articleContainer},null!=r?t.createElement(i.D,{components:{code:CodeRenderer,img:ImageRenderer,p:ParagraphRenderer,table:TableRenderer},remarkPlugins:[w.Z]},r.markdown):t.createElement("h1",null,"Article not found.")))}},6473:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/[id]",function(){return n(5572)}])},9116:function(e){e.exports={imageBlock:"ImageRenderer_imageBlock___5diy"}},4669:function(e){e.exports={paragraphBlock:"ParagraphRenderer_paragraphBlock__YVI1O"}},9207:function(e){e.exports={tableBlock:"TableRenderer_tableBlock__g214N"}},8034:function(e){e.exports={articleContainer:"_id__articleContainer__MKOgu"}}},function(e){e.O(0,[675,252,774,888,179],function(){return e(e.s=6473)}),_N_E=e.O()}]);