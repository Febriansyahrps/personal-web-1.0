(this["webpackJsonppersonal-web"]=this["webpackJsonppersonal-web"]||[]).push([[0],{36:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(12),a=c.n(s),r=(c(36),c(3)),o=c(4),l=c(6),j=c(5),d=c(7),h=(c(41),c(42),c(30)),b=c(0),u=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("h3",{children:"Febriansyah RPS"})}),Object(b.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(b.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(b.jsx)("ul",{className:this.state.clicked?"nav-links active":"nav-links",children:[{name:"Home",url:"home"},{name:"Skills",url:"skills"},{name:"Contact",url:"contact"}].map((function(e,t){return Object(b.jsx)(h.Link,{activeClass:"active",to:e.url,spy:!0,smooth:!0,offset:-70,duration:1e3,isDynamic:!0,children:Object(b.jsx)("li",{children:e.name})},t)}))})]})}}]),c}(n.Component),p="PROFILE_DATA",m="PROFILE_ARRAY",O="SKILL_DATA",f="SKILL_ARRAY",x="CONTACT_DATA",v="CONTACT_ARRAY",N=c(11),y=c.n(N),k=c(8),g=c.n(k),w=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.props.profileData()}},{key:"render",value:function(){var e=this.props.items.map((function(e){return Object(b.jsx)("div",{className:"logo-link-container",children:Object(b.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:e.icon_classcode})})},e.id)}));return Object(b.jsx)("div",{className:"home",id:"home",children:Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)(g.a,{duration:2e3,children:Object(b.jsxs)("div",{className:"card-profile",children:[Object(b.jsxs)("div",{className:"card-profile-top",children:[Object(b.jsx)("div",{className:"profile-picture-container",children:Object(b.jsx)("img",{className:"profile-picture",src:this.props.item.image,alt:"profile"})}),Object(b.jsxs)("div",{className:"card-profile-text",children:[Object(b.jsx)("div",{className:"profile-name",children:Object(b.jsx)("h2",{children:this.props.item.name})}),Object(b.jsx)("hr",{className:"line-behind-name"}),Object(b.jsx)("div",{className:"download-button-container-small",children:Object(b.jsx)("a",{className:"download-button",href:this.props.item.resume_link,target:"blank",children:"Download Resume"})}),Object(b.jsx)("div",{className:"profile-job",children:Object(b.jsx)("p",{children:this.props.item.job})})]})]}),Object(b.jsx)("div",{className:"card-profile-bottom",children:e})]})}),Object(b.jsxs)("div",{className:"profile-desc",children:[Object(b.jsx)(y.a,{top:!0,duration:2e3,children:Object(b.jsxs)("div",{className:"profile-desc-top",children:[Object(b.jsx)("h1",{children:"Hello"}),Object(b.jsx)("p",{children:"Here is who I am & what I do"})]})}),Object(b.jsx)(g.a,{duration:2e3,children:Object(b.jsx)("div",{className:"download-button-container-big",children:Object(b.jsx)("a",{className:"download-button",href:this.props.item.resume_link,target:"blank",children:"Download Resume"})})}),Object(b.jsx)(y.a,{bottom:!0,duration:2e3,children:Object(b.jsxs)("div",{className:"profile-text",children:[Object(b.jsx)("p",{className:"profile-text1",children:this.props.item.profile_description}),Object(b.jsx)("p",{className:"profile-text2",children:this.props.item.job_description})]})})]})]})})}}]),c}(n.Component),C=Object(d.b)((function(e){return{item:e.profile.item,items:e.profile.items}}),{profileData:function(){return function(e){fetch("https://febriansyahrizqi.github.io/profile.json").then((function(e){return e.json()})).then((function(t){return e({type:p,payload:t})})).then((function(t){return e({type:m,payload:t})}))}}})(w),_=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.props.skillData()}},{key:"render",value:function(){var e=this.props.items.map((function(e){return Object(b.jsx)("div",{className:"card-skills",children:Object(b.jsxs)("div",{className:"card-skill-item",children:[Object(b.jsx)("div",{className:"card-skill-icon",children:Object(b.jsx)("i",{className:e.icon_classcode})}),Object(b.jsxs)("div",{className:"card-skill-description",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{children:e.description})]})]})},e.id)}));return Object(b.jsxs)("div",{id:"skills",className:"skills",children:[Object(b.jsxs)(g.a,{duration:2e3,children:[Object(b.jsx)("h1",{children:this.props.item.title}),Object(b.jsx)("hr",{className:"line-behind-header"})]}),Object(b.jsx)(y.a,{bottom:!0,duration:2e3,children:Object(b.jsx)("div",{className:"body-skills",children:e})})]})}}]),c}(n.Component),A=Object(d.b)((function(e){return{item:e.skill.item,items:e.skill.items}}),{skillData:function(){return function(e){fetch("https://febriansyahrizqi.github.io/skill.json").then((function(e){return e.json()})).then((function(t){return e({type:O,payload:t})})).then((function(t){return e({type:f,payload:t})}))}}})(_),D=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.props.contactData()}},{key:"render",value:function(){var e=this.props.items.map((function(e){return Object(b.jsxs)("div",{className:"contact-item-container",children:[Object(b.jsx)("div",{className:"contact-icon",children:Object(b.jsx)("i",{className:e.icon_classcode})}),Object(b.jsxs)("div",{className:"contact-text",children:[Object(b.jsx)("h4",{children:e.name}),Object(b.jsx)("p",{children:e.description})]})]},e.id)}));return Object(b.jsxs)("div",{className:"contact",id:"contact",children:[Object(b.jsxs)(g.a,{duration:2e3,children:[Object(b.jsx)("h1",{className:"contact-header",children:this.props.item.title}),Object(b.jsx)("hr",{className:"line-behind-header"}),Object(b.jsx)("p",{className:"contact-subheader",children:this.props.item.contact_subheader})]}),Object(b.jsx)(y.a,{bottom:!0,duration:2e3,children:Object(b.jsx)("div",{className:"contact-container",children:e})})]})}}]),c}(n.Component),R=Object(d.b)((function(e){return{item:e.contact.item,items:e.contact.items}}),{contactData:function(){return function(e){fetch("https://febriansyahrizqi.github.io/contact.json").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).then((function(t){return e({type:v,payload:t})}))}}})(D),F=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.items.map((function(e){return Object(b.jsx)("div",{className:"footer-icon",children:Object(b.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("i",{className:e.icon_classcode})})},e.id)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsx)(g.a,{duration:2e3,children:Object(b.jsxs)("div",{className:"footer-copyright",children:[Object(b.jsx)("p",{children:"\xa9 2020 Personal Website"}),Object(b.jsx)("p",{children:this.props.item.name})]})}),Object(b.jsx)(g.a,{duration:2e3,children:Object(b.jsxs)("div",{className:"footer-socmed",children:[Object(b.jsx)("p",{children:"Follow Me"}),Object(b.jsx)("div",{className:"footer-icon-container",children:e})]})})]})})}}]),c}(n.Component),L=Object(d.b)((function(e){return{item:e.profile.item,items:e.profile.items}}))(F),T=c(10),I=c(31),P=c(2),S={item:{},items:[]},M=Object(T.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(P.a)(Object(P.a)({},e),{},{item:t.payload});case m:return Object(P.a)(Object(P.a)({},e),{},{items:t.payload.payload.icon_follow});default:return e}},skill:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(P.a)(Object(P.a)({},e),{},{item:t.payload});case f:return Object(P.a)(Object(P.a)({},e),{},{items:t.payload.payload.skills});default:return e}},contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(P.a)(Object(P.a)({},e),{},{item:t.payload});case v:return Object(P.a)(Object(P.a)({},e),{},{items:t.payload.payload.contacts});default:return e}}}),q=[I.a],z=Object(T.e)(M,{},Object(T.d)(T.a.apply(void 0,q))),E=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)(d.a,{store:z,children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{}),Object(b.jsx)(C,{}),Object(b.jsx)(A,{}),Object(b.jsx)(R,{}),Object(b.jsx)(L,{})]})})}}]),c}(n.Component),H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.Fragment,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),H()}},[[52,1,2]]]);
//# sourceMappingURL=main.7082f2b8.chunk.js.map