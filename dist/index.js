module.exports=function(e){var t=e.ele,n=e.minHeight,i=e.maxHeight,o={},l=0;return t.addEventListener("keydown",r),o.forceTest=r,o.reset=function(){t.style.height=n+"px"},o;function r(){requestAnimationFrame(function(){var e=!1;o.onTypedNewLine&&0!=t.scrollTop&&(e=!0),t.style.height="10px",t.style.marginBottom=l-10+"px";var r=t.scrollHeight;n&&r<n&&(r=n),i&&r>i&&(r=i),t.style.height=r+"px",t.style.marginBottom="",l=r,e&&o.onTypedNewLine(),o.callBack&&o.callBack()})}};
//# sourceMappingURL=index.js.map
