webpackJsonp([0],[function(e,o){},function(e,o){},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(0),c=(t.n(n),t(3)),r=(t.n(c),t(1)),s=(t.n(r),t(4)),l=(t.n(s),t(5));t.n(l);console.log("in index.js");var a=document.querySelector(".auth-button"),u=document.querySelector(".auth"),i=document.querySelector(".container");document.querySelector(".auth-form");window.onclick=function(e){var o=e.target;console.log(o),o==i&&(u.classList.remove("rotated"),a.style.opacity="1",a.style.cursor="pointer")},a.addEventListener("click",function(e){u.classList.add("rotated"),a.style.opacity="0",a.style.cursor="default"});!function(){let e=document.images,o=e.length,t=0,n=document.querySelector(".preloader"),c=document.querySelector(".preloader__percents");console.log("HI!!");for(let s=0;s<o;s++){var r=new Image;r.onload=(t++,c.innerHTML=(100/o*t<<0)+"%",void(t>=o&&setTimeout(function(){n.classList.contains("done")||n.classList.add("done")},1e3))),r.src=e[s].src}console.log(o),console.log(t)}()},function(e,o){},function(e,o,t){e.exports=t.p+"images/water.jpg"},function(e,o,t){e.exports=t.p+"images/water-maps.jpg"}],[2]);
