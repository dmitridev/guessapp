(this.webpackJsonpguess_game=this.webpackJsonpguess_game||[]).push([[0],{112:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),s=n.n(c),o=(n(112),n(103)),i=n(35),u=n.n(i),l=n(51),h=n(92),p=n(93),j=n(106),d=n(104),f=n(194),g=n(102),b=n(195),m=n(193),v=n(192),x=(n(113),n(21)),O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={game:{},name:"",isLoaded:!1},a}return Object(p.a)(n,[{key:"setGame",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/game/add-player/".concat(this.state.name),{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:return t=e.sent,e.t0=this,e.next=7,t.json();case 7:e.t1=e.sent,e.t2={game:e.t1},e.t0.setState.call(e.t0,e.t2),this.setState({isLoaded:!0}),e.next=16;break;case 13:e.prev=13,e.t3=e.catch(0),console.error(e.t3);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"getGame",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/game",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:return t=e.sent,e.t0=this,e.next=7,t.json();case 7:e.t1=e.sent,e.t2={game:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=15;break;case 12:e.prev=12,e.t3=e.catch(0),console.error(e.t3);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"RestartGame",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/game/stop",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:window.location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.isLoaded){console.log(this.state.game);var t=this.state.game.relation||{};console.log(t);var n=[];return Object.entries(t).forEach((function(e){var t=Object(o.a)(e,2),a=t[0],r=t[1];n.push(Object(x.jsxs)(m.b.Item,{style:{textAlign:"center"},children:[Object(x.jsx)("strong",{children:a}),":",r]}))})),Object(x.jsxs)(f.a,{style:{margin:"0 auto",height:"100vh"},actions:[Object(x.jsx)(g.a,{onClick:function(){return e.RestartGame()},children:"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(x.jsx)(g.a,{onClick:function(){return e.getGame()},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u043e\u0432"})],children:[Object(x.jsx)(v.a,{orientation:"center",children:"\u0422\u043e \u0447\u0442\u043e \u0437\u0430\u0433\u0430\u0434\u0430\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0433\u0440\u043e\u043a\u0438"}),Object(x.jsx)(m.b,{children:n})]})}return Object(x.jsx)(f.a,{style:{height:"100vh"},actions:[Object(x.jsx)(g.a,{style:{background:"red",color:"white"},children:"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(x.jsx)(g.a,{onClick:Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setGame();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"\u0417\u0430\u0439\u0442\u0438 \u0432 \u0438\u0433\u0440\u0443"})],children:Object(x.jsx)(b.a,{onChange:function(t){return e.setState({name:t.target.value})},style:{width:"100%",marginBottom:10},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"})})}}]),n}(r.a.Component),k=O,w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),w()}},[[188,1,2]]]);
//# sourceMappingURL=main.c5a0776b.chunk.js.map