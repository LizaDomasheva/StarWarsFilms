(this["webpackJsonpcreate-app"]=this["webpackJsonpcreate-app"]||[]).push([[4],{32:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return l}));var r=n(30),a=n.n(r),c=n(31),s=n(35),u=n.n(s);u.a.defaults.baseURL="https://swapi.dev/api/";var o=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("films/");case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("films/".concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("planets/".concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("starships/".concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},72:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(30),a=n.n(r),c=n(31),s=n(33),u=n(34),o=n(37),i=n(36),p=n(0),l=n.n(p),f=n(32),h=function(t){return t.match.params.id},v=Object(p.lazy)((function(){return n.e(3).then(n.bind(null,71))})),m=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return(t=e.call.apply(e,[this].concat(u))).state={film:null,massage:null,search:"",from:"",planet:null},t.getFilmDetail=Object(c.a)(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=Number(h(t.props)),e.next=4,Object(f.a)(n);case 4:r=e.sent,t.setState({film:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({message:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),t.handleGoBack=function(){t.state.search?t.props.history.push({pathname:t.state.from,search:"query=".concat(t.state.search),state:{search:t.state.search}}):t.props.history.push("/")},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.location.state&&this.setState({search:this.props.location.state.search,from:this.props.location.state.from}),this.getFilmDetail()}},{key:"render",value:function(){var t=this.state.film,e=Number(h(this.props));return t&&l.a.createElement(p.Suspense,{fallback:l.a.createElement("h1",null,"Loading...")},l.a.createElement(v,Object.assign({},t,{id:e,onGoBack:this.handleGoBack})))}}]),n}(p.Component)}}]);
//# sourceMappingURL=filmDetails-page.7f0c54dc.chunk.js.map