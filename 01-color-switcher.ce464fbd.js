!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(a){timerId=setInterval((function(){d.style="background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(d){clearInterval(timerId),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.ce464fbd.js.map
