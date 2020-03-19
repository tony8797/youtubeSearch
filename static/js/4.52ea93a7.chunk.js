(this["webpackJsonpyoutube-search"]=this["webpackJsonpyoutube-search"]||[]).push([[4],{330:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(45),l=t(333),o=t(334),c=t(114),d=t(115),s=t(117);function u(){var n=Object(c.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  background-color: ",";\n  padding: 5px 0;\n  min-height: 50px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  \n  .headerSearch {\n    width: 500px;\n    position: relative;\n    left: 50%;\n    transform: translate(-50%, 0);\n\n    @media only screen and (max-width: 767px) {\n      width: 300px;\n    }\n  }\n"]);return u=function(){return n},n}var p=d.a.h1(u(),Object(s.palette)("secondary",0)),h=function(n){return i.a.createElement(p,null,n.children)};function m(){var n=Object(c.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return m=function(){return n},n}function f(){var n=Object(c.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return f=function(){return n},n}var x=d.a.h3(f(),Object(s.palette)("text",0)),g=d.a.p(m(),Object(s.palette)("text",3)),b=function(n){return i.a.createElement("div",null,n.title?i.a.createElement(x,null," ",n.title," "):"",n.subtitle?i.a.createElement(g,null," ",n.subtitle," "):"")};function w(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n  background-color: #ffffff;\n  /* border: 1px solid ","; */\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n  \n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return w=function(){return n},n}var v=d.a.div(w(),Object(s.palette)("border",0)),y=function(n){return i.a.createElement(v,{style:n.style},i.a.createElement(b,{title:n.title,subtitle:n.subtitle}),n.children)};function E(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    /* padding: 50px 20px; */\n  }\n\n  @media (max-width: 580px) {\n    /* padding: 15px; */\n  }\n"]);return E=function(){return n},n}var j=d.a.div(E()),k=function(n){return i.a.createElement(j,n,n.children)},O=t(331),S=t(332),z=function(n){var e=n.text,t=void 0===e?"":e;return i.a.createElement("div",{className:"helperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},i.a.createElement("h3",null,t))},N=t(112),P=t(328),R=t(249),T=t.n(R);function C(){var n=Object(c.a)(["\n  margin-top: 30px;\n  \n  .totalResultFind {\n    font-size: 18px;\n    font-weight: 700;\n    color: ",";\n    line-height: 1.3;\n    padding-bottom: 15px;\n    border-bottom: 1px solid ",";\n  }\n\n  .youtubeSearchPagination {\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 25px 0 10px;\n\n    button {\n      margin: 0 10px;\n    }\n  }\n"]);return C=function(){return n},n}function Y(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  flex-wrap:wrap;\n\n  .singleVideoResult {\n    padding: 20px 0;\n    display: flex;\n    flex-direction: column;\n    width: calc(100% / 4 - 10px);\n    cursor: pointer;\n\n    @media only screen and (min-width: 768px) and (max-width: 1199px) {\n      width: calc(100% / 3 - 10px);\n    }\n    @media only screen and (max-width: 767px) {\n      width: calc(100% / 2 - 10px);\n    }\n\n    &:last-of-type {\n      border-bottom: 0;\n    }\n\n    .videoThumb {\n      width: 100%;\n      max-height: 360px;\n      min-height: 90px;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      overflow: hidden;\n      padding:5px;\n      position: relative;\n\n      @media only screen and (max-width: 420px) {\n        width: 200px;\n        height: 200px;\n      }\n      \n      figcaption {\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: 4px;\n        width: calc(100% - 10px);\n        height: calc(100% - 10px);\n        margin: 5px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-color: rgba(0, 0, 0, 0.8);\n        opacity: 0;\n        visibility: hidden;\n        transition: all 0.1s ease;\n        text-align: center;\n\n        ul {\n          margin: 0;\n          padding: 0;\n          display: flex;\n          align-items: center;\n          li {\n            display: inline-flex;\n            align-items: center;\n            margin: 0 20px;\n            color: #ffffff;\n            font-size: 16px;\n            font-weight: 400;\n            svg {\n              width: auto;\n              height: 18px;\n              margin-left: 10px;\n            }\n            &:first-child {\n              margin-left: 0;\n            }\n            &:last-child {\n              margin-right: 0;\n            }\n          }\n        };\n        #videoHoverDescription {\n            color: white;\n            flex-direction: column;\n            div {\n                flex: 1;\n                margin: 5px;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                color: white;\n            }\n        }\n      }\n\n      &:hover {\n        figcaption {\n          opacity: 1;\n          visibility: visible;\n        }\n      }\n      \n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .videoDescription {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin: 0 0 0 5px;\n        cursor: pointer;\n\n        h3.videoName {\n            width: 90%;\n            flex-shrink: 0;\n            margin: 0;\n\n            @media only screen and (max-width: 767px) {\n                width: 100%;\n            }\n\n            @media only screen and (min-width: 768px) and (max-width: 1199px) {\n                flex-shrink: 1;\n            }\n\n            a {\n                font-size: 14px;\n                font-weight: 400;\n                color: ",";\n                line-height: 1;\n                word-break: break-word;\n                overflow: hidden;\n                width: calc(100% - 10px);\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                display: inline-block;\n                text-decoration: none;\n                ",";\n\n                &:hover {\n                    color: ",";\n                }\n            }\n        }\n\n        p {\n            font-size: 14px;\n            font-weight: 400;\n            color: ",";\n            line-height: 1.3;\n            margin-bottom: 0;\n            margin-top: 10px;\n            display: block;\n            word-break: break-word;\n        }\n    }\n  }\n"]);return Y=function(){return n},n}var D=d.a.div(Y(),Object(s.palette)("text",0),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3;return"\n      -webkit-transition: all ".concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      -moz-transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      -ms-transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      -o-transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n    ")}(""),Object(s.palette)("primary",0),Object(s.palette)("text",3)),F=d.a.div(C(),Object(s.palette)("text",0),Object(s.palette)("border",2));var H=function(n){var e=n.YoutubeSearch,t=n.onPageChange,a=e.searcText,r=e.result,l=e.loading,o=e.error,c=e.nextPageToken,d=e.prevPageToken,s=e.totalCount;return a?l?i.a.createElement(N.a,{style:{width:"100%"}}):o||!s?i.a.createElement(z,{text:"THERE ARE SOME ERRORS"}):0===r.length?i.a.createElement(z,{text:"No Result Found"}):i.a.createElement(F,{className:"isoYoutubeSearchResult"},i.a.createElement("p",{className:"totalResultFind"},i.a.createElement("span",null,"".concat(s)," videos found")),function(n){return i.a.createElement(D,{className:"youtubeResultList"},n.map((function(n){var e=n.snippet,t=e.publishedAt,a=e.title,r=e.channelTitle,l=e.thumbnails,o=n.id.videoId,c=T()(t).format("YYYY/MM/DD");return i.a.createElement("div",{key:o,className:"singleVideoResult",onClick:function(e){e.preventDefault(),e.stopPropagation(),window.open("https://www.youtube.com/watch?v=".concat(n.id.videoId),"_blank")}},i.a.createElement("div",{className:"videoThumb"},i.a.createElement("img",{alt:"#",src:l.high.url}),i.a.createElement("figcaption",null,i.a.createElement("div",{id:"videoHoverDescription"},i.a.createElement("div",null,a),i.a.createElement("div",null,i.a.createElement("b",null,"".concat(r))),i.a.createElement("div",null,c)))),i.a.createElement("div",{className:"videoDescription"},i.a.createElement("h3",{className:"videoName"},i.a.createElement("a",{href:"# "},"".concat(a," ")))))})))}(r),i.a.createElement("div",{className:"youtubeSearchPagination"},d?i.a.createElement(P.a,{onClick:function(){return t(a,d)}},"Previous"):"",c?i.a.createElement(P.a,{onClick:function(){return t(a,c)}},"Next"):"")):null},I={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px",width:"100%"},gutter:16},A=t(12);function M(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  \n  h3 {\n    font-size: 18px;\n    font-weight: 500;\n    color: ",";\n    margin: 0;\n  }\n"]);return M=function(){return n},n}var V=d.a.div(M(),Object(s.palette)("text",2)),J=function(n){var e=n.width,t=void 0===e?"100%":e,a=n.height,r=void 0===a?"40vh":a;return i.a.createElement(V,{style:{width:t,height:r}},i.a.createElement("h3",null,"Please Enter Your API Key in the `src/settings/index.js`"))},B=t(42);t.d(e,"default",(function(){return q}));var K=A.a.youtubeSearch,L=A.a.onPageChange,_=O.a.Search;function q(){var n=Object(r.c)((function(n){return n.YoutubeSearch})),e=Object(r.b)(),t=i.a.useCallback((function(n){n&&n.length>0?e(K(n)):Object(S.a)("error","Please type something")}),[e]),a=i.a.useCallback((function(n,t){e(L(n,t))}),[e]);i.a.useEffect((function(){t(n.searcText)}),[t,n.searcText]);var c=I.rowStyle,d=I.colStyle,s=I.gutter;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null,i.a.createElement(_,{placeholder:"Search on Youtube",defaultValue:n.searcText,onSearch:t,className:"headerSearch"})),i.a.createElement(k,null,i.a.createElement(l.a,{style:c,gutter:s,justify:"start"},i.a.createElement(o.a,{md:24,sm:24,xs:24,style:d},B.a?i.a.createElement(y,{style:{minHeight:220}},i.a.createElement(H,{YoutubeSearch:n,onPageChange:a})):i.a.createElement(J,null)))))}}}]);
//# sourceMappingURL=4.52ea93a7.chunk.js.map