(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),c=n.n(r),s=(n(96),n(24)),l=n(25),i=n(30),u=n(26),p=n(31),d=n(190),m=n(189),h=n(1),f=n.n(h),g=n(20),b=n(188),E=n(81),j=n.n(E),w=n(82),v=n.n(w),O=n(43),y=n.n(O),k=n(48),R=n.n(k),A=n(10),T=n(47),N=function(){return function(e){e({type:"API_REACT"})}},P=function(){return function(e){e({type:"API_ANGULAR"})}},C=function(){return function(e){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"API_GETUSER",json:t,data:!0})})}},S=function(){return function(e){fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}).then(function(t){e({type:"API_GETTODOS",json:t,data:!1})})}},B=(n(101),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).setFaceBook=function(){n.setState({isReact:!0})},n.setGoogle=function(){n.setState({isReact:!1})},n.setDatabase=function(){n.setState({showPeople:!0})},n.state={isReact:!0,showPeople:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=(e.isReact,this.state.isReact);return this.state.showPeople?o.a.createElement(b.a,{to:"/People"}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},n?o.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}):o.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,o.a.createElement(R.a,{className:t.facebookButton,onClick:this.setFaceBook}," Show React "),o.a.createElement(R.a,{className:t.googleButton,onClick:this.setGoogle}," Show Google "),o.a.createElement(R.a,{className:t.googleButton,onClick:this.setDatabase}," Show Database ")),n?o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"):o.a.createElement("a",{className:"App-link",href:"https://angular.org",target:"_blank",rel:"noopener noreferrer"},"Learn Angular")))}}]),t}(a.Component));B.PropTypes={classes:f.a.object.isRequired};var U=y()(Object(g.withStyles)({loading:{height:"100%",width:"100%",display:"grid",position:"fixed",alignItems:"center",justifyContent:"center"},root:{},facebookButton:{color:"green",gridColumn:2},googleButton:{color:"red",gridColumn:3}}),Object(T.b)(function(e){return{isReact:e.pageReducer.isReact}},function(e){return Object(A.b)({setFaceBook:N,setGoogle:P},e)}))(B),G=n(85),_=n(59),I=n.n(_),x=n(61),L=n.n(x),W=n(11),D=n.n(W),q=n(60),F=n.n(q),J=n(62),M=n.n(J),X=n(41),z=n(46),Q=n.n(z),Y=(new G.a("https://jsonplaceholder.typicode.com"),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getUsers=function(){n.props.getUsers()},n.getTodos=function(){n.props.getTodos()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.json,a=e.data;return console.log(n),o.a.createElement("div",{className:"People"},o.a.createElement("header",{className:"People-header"},o.a.createElement("p",null,o.a.createElement(Q.a,{className:t.userButton,onClick:this.getUsers}," Show Users "),o.a.createElement(Q.a,{className:t.todoButton,onClick:this.getTodos}," Show Todos ")),o.a.createElement("a",{className:"People-link",href:"https://www.leapagency.com/about/our-experts",target:"_blank",rel:"noopener noreferrer"}),a?o.a.createElement(I.a,{className:t.table},o.a.createElement(F.a,null,o.a.createElement(D.a,null,"Name"),o.a.createElement(D.a,null,"Email"),o.a.createElement(D.a,{numeric:!0},"ZipCode")),o.a.createElement(L.a,null,n.map(function(e){return o.a.createElement(M.a,{key:e.id},o.a.createElement(D.a,{component:"th",scope:"row"},e.name),o.a.createElement(D.a,null,e.email),o.a.createElement(D.a,{numeric:!0},e.address.zipcode))}))):o.a.createElement(I.a,{className:t.table},o.a.createElement(F.a,null,o.a.createElement(D.a,null,"Title"),o.a.createElement(D.a,null,"Completed")),o.a.createElement(L.a,null,n.map(function(e){return o.a.createElement(M.a,{key:e.id},o.a.createElement(D.a,null,e.title),o.a.createElement(D.a,null,e.completed,"?X:Y"))})))))}}]),t}(a.Component));Y.PropTypes={classes:f.a.object.isRequired};var Z=y()(Object(g.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},userButton:{color:"green",gridColumn:2},todoButton:{color:"red",gridColumn:3}}}),Object(X.a)(function(e){return{json:e.pageReducer.json,data:e.pageReducer.data}},function(e){return Object(A.b)({getUsers:C,getTodos:S},e)}))(Y),$=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(m.a,{exact:!0,path:"/",component:U}),o.a.createElement(m.a,{exact:!0,path:"/People",component:Z})))}}]),t}(a.Component);$.PropTypes={styles:f.a.object.isRequired};var H=Object(g.withStyles)({root:{}})($),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ee=n(29),te=n(86),ne=n(87),ae=n.n(ne),oe=n(35),re={isReact:!0,json:[],data:!0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"API_REACT":return Object(oe.a)({},e,{isReact:!0});case"API_ANGULAR":return Object(oe.a)({},e,{isReact:!1});case"API_GETUSER":return Object(oe.a)({},e,{json:t.json,data:!0});case"API_GETTODOS":return Object(oe.a)({},e,{json:t.json,data:!1});default:return e}},se=Object(A.c)({router:ee.c,pageReducer:ce}),le=n(88),ie=ae()(),ue=[te.a,Object(ee.b)(ie),Object(le.createLogger)()],pe=A.d.apply(void 0,[A.a.apply(void 0,ue)].concat([])),de=Object(A.e)(se,{},pe),me=Object(g.createMuiTheme)();c.a.render(o.a.createElement(T.a,{store:de},o.a.createElement(g.MuiThemeProvider,{theme:me},o.a.createElement(ee.a,{history:ie},o.a.createElement("div",null,o.a.createElement(H,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reacttest",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/reacttest","/service-worker.js");K?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):V(t,e)})}}()},81:function(e,t,n){e.exports=n.p+"static/media/React.ee7cd8ed.svg"},82:function(e,t,n){e.exports=n.p+"static/media/Google.686f8efa.svg"},91:function(e,t,n){e.exports=n(187)},96:function(e,t,n){}},[[91,2,1]]]);
//# sourceMappingURL=main.bce2807e.chunk.js.map