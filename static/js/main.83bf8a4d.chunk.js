(this["webpackJsonpyoutube-search"]=this["webpackJsonpyoutube-search"]||[]).push([[1],{110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),u=(n(90),n(46)),s=n(57),i=n(13),l=n(59),f=n(16),p=n(9),E={searcText:"\u9b3c\u6ec5",totalCount:0,result:[],loading:!1,error:!1,favoriteIds:[],favoriteItemList:[],favoritePage:!0};var h=Object(i.c)({YoutubeSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.a.YOUTUBE_SEARCH:return Object(f.a)({},e,{loading:!0,searcText:t.payload.searcText});case p.a.YOUTUBE_SUCCESS_RESULT:return Object(f.a)({},e,{loading:!1,error:!1,result:t.result,totalCount:t.totalCount,prevPageToken:t.prevPageToken,nextPageToken:t.nextPageToken});case p.a.FAVORITE_LIST:return Object(f.a)({},e,{favoriteIds:t.favoriteIds});case p.a.FAVORITE_ITEM_LIST:return console.log({action:t}),Object(f.a)({},e,{favoriteItemList:t.favoriteItemList});case p.a.YOUTUBE_ERROR_RESULT:return Object(f.a)({},e,{loading:!1,error:!1,result:[]});default:return e}}}),T=n(7),O=n.n(T),b=n(11),d=n(31),v=n(29),m=O.a.mark(y),S=O.a.mark(_),U="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=".concat(12,"&type=video&key=").concat(v.a),R="https://www.googleapis.com/youtube/v3/videos?part=contentDetails&maxResults=".concat(12,"&key=").concat(v.a),g=function(){var e=Object(d.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U,"&q=").concat(encodeURIComponent(t)).concat(n)).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R,"&id=").concat(encodeURIComponent(t))).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function y(e){var t,n,a,r,c,o,u;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.searcText,a=t.pageToken,s.prev=2,s.next=5,Object(b.b)(g,n,a?"&pageToken=".concat(a):"");case 5:return r=s.sent,c="",r.items.forEach((function(e){c+=e.id.videoId+","})),c.substring(0,c.length-1),s.next=11,Object(b.b)(I,c);case 11:if(o=s.sent,u={},o.items.forEach((function(e){var t=e.contentDetails.duration;u[e.id]=t})),r.items.forEach((function(e,t){r.items[t].duration=u[e.id.videoId]})),!r.items){s.next=20;break}return s.next=18,Object(b.c)(p.a.youtubeSearchSuccess(r.items,r.pageInfo.totalResults,r.nextPageToken,r.prevPageToken));case 18:s.next=22;break;case 20:return s.next=22,Object(b.c)(p.a.youtubeSearchSuccess());case 22:s.next=28;break;case 24:return s.prev=24,s.t0=s.catch(2),s.next=28,Object(b.c)(p.a.youtubeSearchSuccess());case 28:case"end":return s.stop()}}),m,null,[[2,24]])}function _(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.d)(p.a.YOUTUBE_SEARCH,y)]);case 2:case"end":return e.stop()}}),S)}var x=O.a.mark(k);function k(e){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([_()]);case 2:case"end":return e.stop()}}),x)}var j,w=Object(l.a)(),C=[w],L=Object(i.e)(h,(j=C,i.a.apply(void 0,Object(s.a)(j))));w.run(k);var Y=n(45),A=n(15),B=n(51),F=n(52),P=n(58),V=n(53),H=n(60),M=function(e){function t(e){var n;return Object(B.a)(this,t),(n=Object(P.a)(this,Object(V.a)(t).call(this,e))).state={hasError:!1},n}return Object(H.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("p",null,"Loading failed! Please reload."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),z=n(114),D=[{path:"/YoutubeSearch/",component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,371))}))},{path:"/YoutubeSearch/favoriteList",component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,370))}))}];function q(){return r.a.createElement(M,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(z.a,null)},r.a.createElement(Y.a,null,r.a.createElement(A.c,null,D.map((function(e,t){return r.a.createElement(A.a,{exact:e.exact,key:t,path:e.path},r.a.createElement(e.component,null))}))))))}n(109),n(110);var G=function(){return r.a.createElement(u.a,{store:L},r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){"use strict";t.a="AIzaSyD5OVzgELEoAd5GlUnq5TaQ9ZwRiffGF4M"},85:function(e,t,n){e.exports=n(111)},9:function(e,t,n){"use strict";var a={YOUTUBE_SEARCH:"YOUTUBE_SEARCH",YOUTUBE_SUCCESS_RESULT:"YOUTUBE_SUCCESS_RESULT",YOUTUBE_ERROR_RESULT:"YOUTUBE_ERROR_RESULT",FAVORITE_LIST:"FAVORITE_LIST",FAVORITE_ITEM_LIST:"FAVORITE_ITEM_LIST",youtubeSearch:function(e){return{type:a.YOUTUBE_SEARCH,payload:{searcText:e}}},onPageChange:function(e,t){return{type:a.YOUTUBE_SEARCH,payload:{searcText:e,pageToken:t}}},youtubeSearchSuccess:function(e,t,n,r){return{type:a.YOUTUBE_SUCCESS_RESULT,result:e,totalCount:t,nextPageToken:n,prevPageToken:r}},onChangeFavorite:function(e){return{type:a.FAVORITE_LIST,favoriteIds:e}},onChangeFavoriteItemList:function(e){return{type:a.FAVORITE_ITEM_LIST,favoriteItemList:e}},youtubeSearchError:function(){return{type:a.YOUTUBE_ERROR_RESULT}}};t.a=a},90:function(e,t,n){}},[[85,2,3]]]);
//# sourceMappingURL=main.83bf8a4d.chunk.js.map