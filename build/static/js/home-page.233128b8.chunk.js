(this["webpackJsonpcreate-app"]=this["webpackJsonpcreate-app"]||[]).push([[5],{32:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return p}));var r=n(30),a=n.n(r),c=n(31),s=n(35),u=n.n(s);u.a.defaults.baseURL="https://swapi.dev/api/";var i=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("films/");case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("films/".concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("planets/".concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("starships/".concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},65:function(t,e,n){t.exports={title:"home_title__30Pip"}},66:function(t,e,n){t.exports={form:"searchFilms_form__2q0ft",input:"searchFilms_input__2MATT",button:"searchFilms_button__3LO9c"}},76:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var r=n(30),a=n.n(r),c=n(31),s=n(33),u=n(34),i=n(37),o=n(36),l=n(0),p=n.n(l),f=n(32),m=n(8),h=n(65),v=n.n(h),b=function(t){var e=t.films;return p.a.createElement(p.a.Fragment,null,p.a.createElement("h2",{className:v.a.title},"Star Wars films"),p.a.createElement("ul",null,e.map((function(t){var e=t.url.slice(27,28);return p.a.createElement("li",{key:e},p.a.createElement(m.b,{to:{pathname:"/films/".concat(e),state:{from:"/"}}},t.title))}))))},d=n(66),g=n.n(d),w=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(t=e.call.apply(e,[this].concat(u))).state={films:[],message:null,search:""},t.getFilmsList=Object(c.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.b)();case 3:n=e.sent,r=n.data.results.sort(t.sortByField("title")),t.setState({films:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({message:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),t.handleChange=function(e){t.setState({search:e.target.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getFilmsList()}},{key:"sortByField",value:function(t){return function(e,n){return e[t]>n[t]?1:-1}}},{key:"render",value:function(){var t=this.state,e=t.films,n=t.search,r=function(t,e){return e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))}(n,e);return p.a.createElement(p.a.Fragment,null,p.a.createElement("form",{onSubmit:this.handleSubmit,className:g.a.form},p.a.createElement("input",{className:g.a.input,type:"text",placeholder:"Search films",value:n,onChange:this.handleChange})),p.a.createElement(b,{films:r}))}}]),n}(l.Component)}}]);
//# sourceMappingURL=home-page.233128b8.chunk.js.map