(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,i){},26:function(e,t,i){},28:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},40:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),c=i(16),a=i.n(c),r=(i(25),i.p,i(26),i(7)),l=i(2),o=i(0);var d=function(e){var t=e.selected;return Object(o.jsxs)("div",{className:"NavBar page",children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("div",{className:"homeLogo",children:Object(o.jsx)("h2",{children:"stephanie yaur"})})}),Object(o.jsxs)("div",{className:"navLinkGroup",children:[Object(o.jsx)(r.b,{to:"/projects",children:Object(o.jsx)("div",{className:"allnavlink navlinkbutend ".concat("projects"===t?"selectedClass":null),children:Object(o.jsx)("h2",{children:"projects"})})}),Object(o.jsx)(r.b,{to:"/skills",children:Object(o.jsx)("div",{className:"allnavlink navlinkbutend ".concat("skills"===t?"selectedClass":null),children:Object(o.jsx)("h2",{children:"skills"})})}),Object(o.jsx)(r.b,{to:"/about",children:Object(o.jsx)("div",{className:"allnavlink ".concat("about"===t?"selectedClass":null),children:Object(o.jsx)("h2",{children:"about"})})})]})]})},j=(i(28),i(17)),h=i.n(j),b=i(5);var m=function(){return Object(o.jsxs)(b.Fragment,{children:[Object(o.jsx)(d,{selected:""}),Object(o.jsxs)("div",{className:"home page",children:[Object(o.jsxs)("div",{className:"textLeftAlign",children:[Object(o.jsx)("h1",{id:"hiThere",children:"hi there, I'm"}),Object(o.jsx)("div",{id:"name",children:Object(o.jsx)(h.a,{id:"name",onInit:function(e){e.pauseFor(500).typeString("Stephanie").start()}})})]}),Object(o.jsxs)("div",{className:"section textLeftAlign displayFlex",children:[Object(o.jsx)("div",{className:"floatLeft",children:Object(o.jsx)("h3",{children:"I'm a..."})}),Object(o.jsxs)("div",{className:"floatRight alignItemsLeft",children:[Object(o.jsx)("h3",{className:"margin0",children:"...CS senior at Northwestern University by day and night"}),Object(o.jsx)("h3",{className:"margin0",children:"...frontend software engineer by mind and heart."})]})]}),Object(o.jsxs)("div",{className:"inlineFlex",children:[Object(o.jsx)(r.b,{className:"circle",to:"projects",children:Object(o.jsx)("h2",{children:"Projects"})}),Object(o.jsx)(r.b,{className:"circle",to:"skills",children:Object(o.jsx)("h2",{children:"Skills"})}),Object(o.jsx)(r.b,{className:"circle",to:"about",children:Object(o.jsx)("h2",{children:"About"})})]})]})]})};var p=function(){return Object(o.jsxs)(b.Fragment,{children:[Object(o.jsx)(d,{selected:"about"}),Object(o.jsx)("h1",{children:"About"})]})},x=i(4),u=(i(30),i.p+"static/media/square.d685459a.png"),O=i.p+"static/media/main.3f1e10a2.png",g=i.p+"static/media/square.e6f59b0b.png",f=i.p+"static/media/main.6880a9c4.jpg",v=i.p+"static/media/square.b6151f25.png",N=i.p+"static/media/square.5cfca319.png",w=i.p+"static/media/square.b2f819fa.png",y=i.p+"static/media/square.7fe23c9a.png",k=i.p+"static/media/square.c39d4087.png",I=i.p+"static/media/main.1fd5efc3.png",S=[{name:"Freedom Link",description:"Web app resulting in email request to petition for the early release of a prisoner from the Illinois Department of Corrections.",backgroundImage:u,mainImage:O,position:"Front End Developer",skills:["React","node.js"],url:"freedom-link"},{name:"News Search Engine",description:"Full stack news article search engine",backgroundImage:g,mainImage:f,position:"Full Stack Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"},{name:"Weather App",description:"Weather for Evanston, Illinois",backgroundImage:v,mainImage:f,position:"Full Stack Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"},{name:"American Express",description:"Summer 2021 front end intern projects",backgroundImage:N,mainImage:f,position:"Full Stack Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"},{name:"Siemens Healthineers",description:"Summer 2020 front end intern project",backgroundImage:w,mainImage:f,position:"Full Stack Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"},{name:"Distributed Metronome",description:"Remote synchronization of acapella groups",backgroundImage:i.p+"static/media/square.0690a4ad.png",mainImage:i.p+"static/media/main.5ca2b6cc.png",position:"Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"},{name:"Far From Home",description:"Web app designed to help college students with homesickness",backgroundImage:k,mainImage:I,position:"Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"},{name:"Philips",description:"Summer 2019 UI intern project",backgroundImage:y,mainImage:f,position:"Full Stack Developer",skills:["Java","AWS","React","Github"],url:"news-search-engine"}];i(31);var A=function(e){var t=e.project;return Object(b.useEffect)((function(){console.log(t)})),Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"inlineFlex",children:[Object(o.jsxs)("div",{style:{marginRight:"30px",maxWidth:"50%"},children:[Object(o.jsx)("p",{className:"title",children:t.name}),Object(o.jsx)("p",{className:"description",children:t.description}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Position: "}),Object(o.jsx)("p",{children:t.position}),Object(o.jsx)("b",{children:"Skills: "}),Object(o.jsx)("p",{children:function(e){for(var t="",i=0;i<e.length;i++)t+=0===i?e[i]:","+e[i];return t}(t.skills)}),Object(o.jsx)("br",{}),Object(o.jsx)(r.b,{to:t.url,children:Object(o.jsx)("div",{className:"button primary",children:Object(o.jsx)("p",{children:"read more"})})})]}),Object(o.jsx)("img",{className:"mainImage",src:t.mainImage,alt:"project image"})]})})};var C=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),i=t[0],n=t[1],c=Object(s.useState)(null),a=Object(x.a)(c,2),r=a[0],l=a[1];Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(s.useEffect)((function(){null!=r&&n(!0)}),r);var j=S.map((function(e){return Object(o.jsxs)("div",{className:"projectItem",onClick:function(){return l(e)},children:[Object(o.jsx)("img",{src:e.backgroundImage,className:"backgroundImage",alt:e.name}),Object(o.jsx)("h3",{className:"projectName",children:e.name}),Object(o.jsx)("p",{className:"projectDescription",children:e.description})]})}));return Object(o.jsxs)(b.Fragment,{children:[Object(o.jsx)(d,{selected:"projects"}),Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("h1",{children:"Projects"}),Object(o.jsx)("div",{className:"inlineFlex",children:j}),i?Object(o.jsx)(A,{project:r}):null]})]})},F=i.p+"static/media/iteration1.bb297ccf.png",D=i.p+"static/media/beforebegin.c6be2a9d.png",T=i.p+"static/media/example.1f54ca8a.png",W=i.p+"static/media/step1.b7fe92e3.png",E=i(18),L=i.n(E);i(32);var R=function(){var e=Object(b.useState)(function(){for(var e=0;e<S.length;e++)if("Freedom Link"==S[e].name)return S[e]}()),t=Object(x.a)(e,2),i=t[0],s=(t[1],Object(b.useState)(null)),n=Object(x.a)(s,2),c=n[0],a=n[1];return Object(b.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.useEffect)((function(){i&&i.skills&&a(i.skills.map((function(e){return Object(o.jsx)("div",{className:"button white",children:e})})))}),i),Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{selected:"projects"}),Object(o.jsxs)("div",{className:"projectTop freedomlinktop",children:[Object(o.jsxs)("div",{style:{marginRight:"30px",maxWidth:"50%",textAlign:"left"},children:[Object(o.jsx)("p",{className:"title",children:i.name}),Object(o.jsx)("p",{className:"description",children:i.description}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"textInline",children:[Object(o.jsx)("p",{children:"position: "}),Object(o.jsx)("div",{className:"button white",children:i.position})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"textInline",children:[Object(o.jsx)("p",{children:"skills: "}),c]}),Object(o.jsx)("br",{})]}),Object(o.jsx)("img",{className:"mainImage",src:i.mainImage,alt:"project image"})]}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("h4",{children:"background"}),Object(o.jsx)("p",{children:"Northwestern law professor Sheila Beidl noticed that many clients of hers would petition for the early release of a prisoner - but the process of petitioning is tedious. Sheila Beidl and fellow law professor Daniel Lina approached us to streamline the process."})]}),Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("h4",{children:"customer"}),Object(o.jsx)("p",{children:"Loved ones of prisoners of the Illinois Department of Corrections"})]}),Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("h4",{children:"understanding the petitioning process"}),Object(o.jsx)("p",{children:"First we conducted client interviews and research on the Illinois Department of Corrections to understand the process of petitioning. The process is as follows:"}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"1. Determine  eligibility criteria"}),Object(o.jsx)("p",{children:"To petition, a lawyer needs a just cause for filing. My team and I put together a list of the most commonly used Illinois state laws used for early release. Those laws stated that a prisoner could be eligible due to medical reasons, age, changes in laws and more."}),Object(o.jsx)("b",{children:"2. Determine if prisoner fits eligibility criteria"}),Object(o.jsx)("p",{children:"The Illinois Department of Corrections or IDOC assigns each prisoner a unique IDOC number. This number can be used to search through the IDOC database to display name, age, reason for imprisonment, sentence length, etc. This database is what would be used to examine whether a prisoner might have a medical reason to be released from prison earlier, for example."}),Object(o.jsx)("b",{children:"3. Contact the Illinois Department of Corrections"}),Object(o.jsx)("p",{children:"Before filing the actual petition, a declaration of intent is necessary. An email must be sent to the respective county judge including the eligibility criteria and corresponding laws.  Sheila Beidl provided us with an email template."}),Object(o.jsx)("b",{children:"4. Petition for early release"}),Object(o.jsx)("p",{children:"Lastly, the petition must be filed. If the judge approves the intent to petition, then the actual petition is a much more detailed version. Much of the petition refers to laws, the prisoner\u2019s history, and the prisoner\u2019s past good deeds. Essentially the petition is a long document justifying the prisoner\u2019s \u201cgoodness\u201d and necessary reasons for early release."})]}),Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("h4",{children:"scope of solution"}),Object(o.jsx)("p",{children:"Writing a 20 page petition without having any law training felt out of scope. Streamlining the process until the petition, however, was very much feasible. The four part plan above thus became a three part plan. Instead of writing the petition, instead we would help users write the intent to petition."})]}),Object(o.jsx)("h4",{children:"design process"}),Object(o.jsxs)("div",{className:"textAndImageContainer",children:[Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("p",{children:"Knowing the basic steps to the solution as outlined above (determine eligibility criteria, determine if person fits criteria, write email), first we tackled the research portion. After talks with Sheila and Daniel, we gathered the most commonly used laws and put together the list of eligibility criteria. We chose to create a React web app that sends an email to a county judge. Because this step likely requires references to multiple tabs or windows,  we chose a web app  instead of a mobile app."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"The first single-page iteration of our web app, \u201cFreedom Generator,\u201d aimed to test eligibility based on the criteria we gathered. After typing in an IDOC number (ex: A00367), our backend calls the IDOC API to retrieve that prisoner\u2019s information. Then this information is checked against the eligibility criteria and a corresponding \u201ccheck\u201d or \u201cx\u201d is displayed. Although aesthetically unpleasing, the first iteration was functional."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Next we tackled the email. We decided on a form: since most words in the email can be reused, we just had a \u201cfill-in-the-blank\u201d form for the prisoner\u2019s name, age, etc. The previous step saved the eligibility criteria and populated the form."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"After talking with our clients, we realized that although users might end up with the product they need, they might not understand it. To address this gap, we created a FAQs page and an example email page. First, the FAQs page explains the process we use to create the email and anything else users might be wondering. The example email page is the exact email template used to convert the form into an email \u2014 this way users do not necessarily have to follow the flow of searching an IDOC number and filling out the form before seeing the email. "})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsxs)("div",{style:{display:"inline",textAlign:"center"},children:[Object(o.jsx)("img",{src:F,className:"interface"}),Object(o.jsx)("p",{children:"Iteration 1"})]})})]}),Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("h4",{children:"the solution"}),Object(o.jsx)("p",{children:"In the end, we decided to make Freedom Link a step-by-step guided process. Step 1 is to search an IDOC number to pull up prisoner info. Step 2 is to choose which eligibility criteria to be used. Step 3 is to fill out the form with other information necessary to generate the email. Last but not least, the submission of the form will send the email through a google mail API."})]})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:"0"}),Object(o.jsx)("h1",{children:"Get Started"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:D,className:"interface"})})})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:"1"}),Object(o.jsx)("h1",{children:"Type in IDOC number"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:W,className:"interface"})})})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:"2"}),Object(o.jsx)("h1",{children:"Select all relevant criteria"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:F,className:"interface"})})})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:"3"}),Object(o.jsx)("h1",{children:"Fill out form with prisoner details"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:F,className:"interface"})})})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:"4"}),Object(o.jsx)("h1",{children:"Generate email"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:F,className:"interface"})})})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:"?"}),Object(o.jsx)("h1",{children:"FAQs"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:F,className:"interface"})})})]}),Object(o.jsxs)("div",{className:"contentSection",id:"step1",children:[Object(o.jsxs)("div",{className:"numberAndTitle",children:[Object(o.jsx)("h1",{className:"stepNumber",children:Object(o.jsx)(L.a,{fontSize:"xx-large"})}),Object(o.jsx)("h1",{children:"Sample Email"})]}),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("div",{style:{display:"inline",textAlign:"center"},children:Object(o.jsx)("img",{src:T,className:"interface"})})})]}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"textSection",children:[Object(o.jsx)("h4",{children:"reflection"}),Object(o.jsx)("p",{children:"Especially in 2020 with COVID-19 outbreaks, I was really glad to be working on this product to help those medically at risk to be put on early release. It was also very rewarding to work on this project especially because it was my first project with a client where I was finally working as a frontend developer. This project really helped me grow as a React.js developer and designer and I credit this project as the reason why I decided to become a frontend developer."})]})})]})};var q=function(){return Object(o.jsxs)(b.Fragment,{children:[Object(o.jsx)(d,{selected:"skills"}),Object(o.jsx)("h1",{children:"Skills"})]})};i(40);var G=function(){var e=Object(b.useState)(function(){for(var e=0;e<S.length;e++)if("News Search Engine"==S[e].name)return S[e]}()),t=Object(x.a)(e,2),i=t[0],s=(t[1],Object(b.useState)(null)),n=Object(x.a)(s,2),c=n[0],a=n[1];return Object(b.useEffect)((function(){i&&i.skills&&a(i.skills.map((function(e){return Object(o.jsx)("div",{className:"button white",children:e})})))}),i),Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{selected:"projects"}),Object(o.jsxs)("div",{className:"projectTop",children:[Object(o.jsxs)("div",{style:{marginRight:"30px",maxWidth:"50%",textAlign:"left"},children:[Object(o.jsx)("p",{className:"title",children:i.name}),Object(o.jsx)("p",{className:"description",children:i.description}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"textInline",children:[Object(o.jsx)("p",{children:"position: "}),Object(o.jsx)("div",{className:"button white",children:i.position})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"textInline",children:[Object(o.jsx)("p",{children:"skills: "}),c]}),Object(o.jsx)("br",{})]}),Object(o.jsx)("img",{className:"mainImage",src:i.mainImage,alt:"project image"})]})]})};var B=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{id:"fillerNavBar"}),Object(o.jsx)(r.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(m,{})}),Object(o.jsx)(l.a,{path:"/about",element:Object(o.jsx)(p,{})}),Object(o.jsx)(l.a,{path:"/projects",element:Object(o.jsx)(C,{})}),Object(o.jsx)(l.a,{path:"/projects/freedom-link",element:Object(o.jsx)(R,{})}),Object(o.jsx)(l.a,{path:"/projects/news-search-engine",element:Object(o.jsx)(G,{})}),Object(o.jsx)(l.a,{path:"/skills",element:Object(o.jsx)(q,{})})]})})]})},J=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),s(e),n(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),J()}},[[42,1,2]]]);
//# sourceMappingURL=main.497e7183.chunk.js.map