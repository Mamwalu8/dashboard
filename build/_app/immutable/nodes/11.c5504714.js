import{s as M,f as i,a as C,g as v,h as T,A as f,c as g,d as x,j as r,k as S,i as $,x as t,I as b,y as j,J as z}from"../chunks/scheduler.b578678c.js";import{S as A,i as J}from"../chunks/index.a478effe.js";import{g as k}from"../chunks/navigation.9385b9e6.js";function P(u){let e,l,a,W="🍀 Chain Weavers",y,s,c,q="Dashboard",I,n,B="Weaving",L,o,H="Comparison",D,p,V='<h1 class="svelte-16ll5pc">Weaving</h1> <div class="container svelte-16ll5pc"><section class="total svelte-16ll5pc"><h3 class="svelte-16ll5pc">종합 신뢰도</h3></section> <section class="content svelte-16ll5pc"><div class="change svelte-16ll5pc"><h3 class="svelte-16ll5pc">신뢰도 및 세부요인 변화 추이</h3></div> <section class="detail svelte-16ll5pc"><div class="compare1 svelte-16ll5pc"><h3 class="svelte-16ll5pc">평균대비 세부 요인 비교</h3></div> <div class="compare2 svelte-16ll5pc"><h3 class="svelte-16ll5pc">시기별 신뢰도 및 세부요인 비율</h3></div></section></section></div>',E,w;return{c(){e=i("div"),l=i("div"),a=i("h2"),a.textContent=W,y=C(),s=i("ul"),c=i("li"),c.textContent=q,I=C(),n=i("li"),n.textContent=B,L=C(),o=i("li"),o.textContent=H,D=C(),p=i("div"),p.innerHTML=V,this.h()},l(_){e=v(_,"DIV",{class:!0});var d=T(e);l=v(d,"DIV",{class:!0});var m=T(l);a=v(m,"H2",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-aylx7m"&&(a.textContent=W),y=g(m),s=v(m,"UL",{class:!0});var h=T(s);c=v(h,"LI",{class:!0,"data-svelte-h":!0}),f(c)!=="svelte-1e4whmt"&&(c.textContent=q),I=g(h),n=v(h,"LI",{class:!0,style:!0,"data-svelte-h":!0}),f(n)!=="svelte-1oipsue"&&(n.textContent=B),L=g(h),o=v(h,"LI",{class:!0,"data-svelte-h":!0}),f(o)!=="svelte-8bc4z"&&(o.textContent=H),h.forEach(x),m.forEach(x),D=g(d),p=v(d,"DIV",{class:!0,"data-svelte-h":!0}),f(p)!=="svelte-1094qqc"&&(p.innerHTML=V),d.forEach(x),this.h()},h(){r(a,"class","svelte-16ll5pc"),r(c,"class","navBtn svelte-16ll5pc"),r(n,"class","navBtn svelte-16ll5pc"),S(n,"color","#7DEE73"),r(o,"class","navBtn svelte-16ll5pc"),r(s,"class","navList svelte-16ll5pc"),r(l,"class","nav svelte-16ll5pc"),r(p,"class","body svelte-16ll5pc"),r(e,"class","root svelte-16ll5pc")},m(_,d){$(_,e,d),t(e,l),t(l,a),t(l,y),t(l,s),t(s,c),t(s,I),t(s,n),t(s,L),t(s,o),t(e,D),t(e,p),E||(w=[b(c,"click",u[0]),b(n,"click",u[1]),b(o,"click",u[2])],E=!0)},p:j,i:j,o:j,d(_){_&&x(e),E=!1,z(w)}}}function U(u){function e(){k("/project/dashboard")}function l(){k("/project/weaving")}function a(){k("/project/comparison")}return[e,l,a]}class N extends A{constructor(e){super(),J(this,e,U,P,M,{})}}export{N as component};
