import{o as s,e as C,s as D,$ as u,f,h as w,i as k,j as h}from"./index.221d7934.js";function P(n){const[t,i]=s({title:"",status:"",sort:"",time:"",content:"",tag:"",videos:""}),[d,p]=s(0),[r,v]=s(0),c=C(null);D(()=>{window.md=new window.TinyMDE(document.querySelector("textarea")),n.id>0&&w(n.id).then(e=>{i(e.result)})},[]);function a(e,l){console.log(e,l),i({...t,[e]:l})}function B(e){t.tag.indexOf(e)>-1?i({...t,tag:t.tag.replace(` ${e}`,"")}):i({...t,tag:t.tag+" "+e})}function E(){n.id>0?k(t).then(e=>{alert("\u66F4\u65B0\u6210\u529F\u5566\uFF01")}).catch(e=>{alert("\u767B\u9646\u4FE1\u606F\u8FC7\u671F\u4E86")}):(console.log(t),h(t).then(e=>{alert("\u6295\u7A3F\u6210\u529F\u5566\uFF01")}).catch(e=>{alert("\u767B\u9646\u4FE1\u606F\u8FC7\u671F\u4E86")}))}async function g(e){let l=c.current.files[0];const F=(await f({fname:l.name,rname:t.title||"\u672A\u547D\u540D"})).msg;console.log(F),new DogeUploader({file:l,token:F,next(o){v(Math.floor(o.percent)),console.log(Math.floor(o.percent))},error(o){alert("\u4E0A\u4F20\u51FA\u9519( "+o.code+" )\uFF1A"+o.message)},complete(o){p(o.vid),console.log("\u4E0A\u4F20\u5B8C\u6210\uFF0C\u89C6\u9891 vid\uFF1A"+o.vid)}}).upload()}function A(){c.current.click()}const m=["\u63A8\u8350","\u8F6C\u8F7D","\u6F2B\u753B\u6539","\u5C0F\u8BF4\u6539","\u803D\u7F8E","\u4E59\u5973","\u767E\u5408","\u540E\u5BAB","\u70ED\u8840","\u6218\u6597","\u8FD0\u52A8","\u5947\u5E7B","\u795E\u9B54","\u641E\u7B11","\u5192\u9669","\u6821\u56ED","\u6050\u6016","\u7A7F\u8D8A","\u63A8\u7406","\u79D1\u5E7B","\u65E5\u5E38","\u53E4\u98CE","\u604B\u7231","r15","\u6CE1\u9762\u756A","\u6CBB\u6108","\u9B3C\u755C","AMV/MAD","\u97F3\u4E50\xB7PV","\u6E38\u620F\xB7GMV","VOCALOID","\u5F71\u89C6","\u7279\u6444","\u771F\u4EBA\u5267","\u539F\u795E","\u7EDD\u533A\u96F6","\u661F\u7A79\u94C1\u9053","\u5176\u5B83"];return u("div",{className:"upload"},u("h1",null,"\u6295\u7A3F"),u("div",{className:"title"},u("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",value:t.title,onInput:e=>a("title",e.target.value)})),u("section",null,u("i",{class:"te te-bold",onclick:()=>window.md.bold()}),u("i",{class:"te te-italic",onclick:()=>window.md.italic()}),u("i",{class:"te te-quote",onclick:()=>window.md.quote()}),u("i",{class:"te te-image",onclick:()=>window.md.image()}),u("i",{class:"te te-link",onclick:()=>window.md.link()}),u("i",{class:"te te-code",onclick:()=>window.md.blockCode()})),u("textarea",{spellcheck:"false",placeholder:"\u8BF7\u8F93\u5165\u7B80\u4ECB\uFF0C\u652F\u6301 markdown \u8BED\u6CD5",value:t.content,onInput:e=>a("content",e.target.value)}),u("input",{type:"file",ref:c,accept:"video/*",onInput:g,style:{display:"none"}}),u("div",{class:"upload-video"},u("i",{class:"icon-font icon-video",onClick:A}),"\u2190\u70B9\u51FB\u6309\u94AE\u4E0A\u4F20\u89C6\u9891 ",u("span",{class:"video-pre"},r,"%"),d!==0&&u("input",{type:"text",value:d+"@dogecloud",class:"video-vid",onInput:e=>e.stopPropagation()})),u("textarea",{spellcheck:"false",placeholder:`\u8BF7\u8F93\u5165\u6807\u9898+$+\u76F4\u94FE\uFF0C\u5982\uFF1A\u7B2C\u4E00\u8BDD$https://clicli.cc/001.mp4
\u591A\u4E2A\u5206P\u7528\u56DE\u8F66\u9694\u5F00`,value:t.videos,class:"videos",onInput:e=>a("videos",e.target.value)}),u("div",{className:"tags"},u("ul",null,m.map((e,l)=>u("li",{onClick:()=>B(e),key:l.toString(),className:t.tag.indexOf(e)>-1?"active":""},e)))),u("div",{className:"options"},u("select",{value:t.status,onInput:e=>a("status",e.target.value)},u("option",{value:"wait"},"\u5F85\u5BA1\u6838"),u("option",{value:"remove"},"\u5F85\u5220\u9664"),u("option",{value:"under"},"\u5DF2\u4E0B\u67B6"),u("option",{value:"public"},"\u53D1\u5E03")),u("select",{value:t.sort,onInput:e=>a("sort",e.target.value)},u("option",{value:"\u539F\u521B"},"\u539F\u521B"),u("option",{value:"\u65B0\u756A"},"\u65B0\u756A"),u("option",{value:"\u5B8C\u7ED3"},"\u5B8C\u7ED3"),u("option",{value:"\u5267\u573A\u7248"},"\u5267\u573A\u7248"),u("option",{value:"\u5F71\u89C6"},"\u5F71\u89C6")),n.id>0&&u("input",{type:"text",value:t.time,onInput:e=>a("time",e.target.value)})),u("div",{className:"submit",onClick:E},u("button",null,"\u53D1\u5E03")))}export{P as default};