(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{STjf:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_ripple_effect",(function(){return e}));var a=i("imtE");i("AfW+");const e=class{constructor(t){Object(a.k)(this,t),this.type="bounded"}async addRipple(t,n){return new Promise(i=>{Object(a.g)(()=>{const e=this.el.getBoundingClientRect(),c=e.width,l=e.height,m=Math.sqrt(c*c+l*l),f=Math.max(l,c),d=this.unbounded?f:m+r,u=Math.floor(f*s),p=d/u;let b=t-e.left,w=n-e.top;this.unbounded&&(b=.5*c,w=.5*l);const h=b-.5*u,k=w-.5*u,y=.5*c-b,g=.5*l-w;Object(a.l)(()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=k+"px",n.left=h+"px",n.width=n.height=u+"px",n.setProperty("--final-scale",`${p}`),n.setProperty("--translate-end",`${y}px, ${g}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>{i(()=>{o(t)})},325)})})})}get unbounded(){return"unbounded"===this.type}render(){const t=Object(a.d)(this);return Object(a.i)(a.a,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return Object(a.f)(this)}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"}},o=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},r=10,s=.5}}]);