(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),i=t.n(c),s=t(2),o=t.n(s),l=t(13),m=t(14),u=t(15),p=t(18),v=t(17),d=t(16),g=t.n(d);t(42);var _=function(e){var a=e.title,t=e.poster,r=e.rating,c=e.director,i=e.year,s=e.actor;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:t,alt:a,title:a}),n.a.createElement("div",{className:"movie__data"},n.a.createElement("h3",{className:"movie__title"},a.replace(/<b>/gi,"").replace(/<\/b>/gi,"").replace("&amp;",":")),n.a.createElement("h5",{className:"movie__rating"},r,"/10"),n.a.createElement("h5",{className:"movie__director"},c),n.a.createElement("h5",{className:"movie__year"},i),n.a.createElement("p",{className:"movie__actor"},s)))},h=(t(43),function(e){Object(p.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={isLoading:!0,items:[]},e.getMovie=Object(l.a)(o.a.mark((function a(){var t,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("/v1/search/movie.json",{params:{query:"\ubd84\ub178\uc758",display:20},headers:{"X-Naver-Client-Id":"08Ky4NuudFEd_oCD5npL","X-Naver-Client-Secret":"OMXpusCdtI"}});case 2:t=a.sent,r=t.data.items,console.log(r),e.setState({items:r,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.items;return n.a.createElement("section",{className:"container"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading...")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(_,{key:e.image,title:e.title,poster:e.image,rating:e.userRating,director:e.director,year:e.pubDate,actor:e.actor})}))))}}]),t}(n.a.Component));i.a.render(n.a.createElement(h,null),document.getElementById("hello"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bba15cda.chunk.js.map