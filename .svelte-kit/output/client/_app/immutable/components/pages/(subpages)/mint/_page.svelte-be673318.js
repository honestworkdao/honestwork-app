import{S as J,i as O,s as W,k as f,a as w,e as C,J as j,l as _,h as o,c as q,n as d,C as i,b as g,B as S,D as M,E as z,q as V,m,r as H,H as K,p as L,F as B,G as Q}from"../../../../chunks/index-a0c4f7b2.js";import{g as R}from"../../../../chunks/navigation-c29f99fe.js";import{n as U,e as X,u as Y,C as Z,t as $,f as ee}from"../../../../chunks/Network-d178deb8.js";function F(l){let s;function a(t,r){return t[0]==0?se:te}let n=a(l),e=n(l);return{c(){e.c(),s=C()},l(t){e.l(t),s=C()},m(t,r){e.m(t,r),g(t,s,r)},p(t,r){n===(n=a(t))&&e?e.p(t,r):(e.d(1),e=n(t),e&&(e.c(),e.m(s.parentNode,s)))},d(t){e.d(t),t&&o(s)}}}function te(l){let s,a;return{c(){s=f("p"),a=V("thanks for minting")},l(n){s=_(n,"P",{});var e=m(s);a=H(e,"thanks for minting"),e.forEach(o)},m(n,e){g(n,s,e),i(s,a)},p:S,d(n){n&&o(s)}}}function se(l){let s,a,n,e,t,r,p,c,h,E,I,u,v,D,P,N;return{c(){s=f("section"),a=f("div"),n=f("div"),e=f("img"),r=w(),p=f("div"),c=w(),h=f("p"),E=V("gm fren"),I=w(),u=f("div"),v=f("p"),D=V("mint your nft"),this.h()},l(b){s=_(b,"SECTION",{class:!0});var k=m(s);a=_(k,"DIV",{class:!0});var G=m(a);n=_(G,"DIV",{class:!0});var y=m(n);e=_(y,"IMG",{src:!0,alt:!0}),r=q(y),p=_(y,"DIV",{style:!0}),m(p).forEach(o),c=q(y),h=_(y,"P",{});var T=m(h);E=H(T,"gm fren"),T.forEach(o),y.forEach(o),G.forEach(o),I=q(k),u=_(k,"DIV",{class:!0});var x=m(u);v=_(x,"P",{class:!0});var A=m(v);D=H(A,"mint your nft"),A.forEach(o),x.forEach(o),k.forEach(o),this.h()},h(){K(e.src,t="icons/heart.svg")||d(e,"src",t),d(e,"alt","Heart"),L(p,"width","8px"),d(n,"class","gm-inner svelte-1yqn907"),d(a,"class","gm svelte-1yqn907"),d(v,"class","yellow link"),d(u,"class","gm svelte-1yqn907"),d(s,"class","svelte-1yqn907")},m(b,k){g(b,s,k),i(s,a),i(a,n),i(n,e),i(n,r),i(n,p),i(n,c),i(n,h),i(h,E),i(s,I),i(s,u),i(u,v),i(v,D),P||(N=[B(u,"click",l[2]),B(u,"keydown",l[3])],P=!0)},p:S,d(b){b&&o(s),P=!1,Q(N)}}}function ne(l){let s,a,n,e=l[1]&&F(l);return{c(){s=f("meta"),a=w(),e&&e.c(),n=C(),this.h()},l(t){const r=j("svelte-9gbldk",document.head);s=_(r,"META",{name:!0,content:!0}),r.forEach(o),a=q(t),e&&e.l(t),n=C(),this.h()},h(){document.title="Mint",d(s,"name","description"),d(s,"content","HonestWork Minting Page")},m(t,r){i(document.head,s),g(t,a,r),e&&e.m(t,r),g(t,n,r)},p(t,[r]){t[1]?e?e.p(t,r):(e=F(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:S,o:S,d(t){o(s),t&&o(a),e&&e.d(t),t&&o(n)}}}function ae(l,s,a){let n,e,t;M(l,U,c=>a(4,n=c)),M(l,X,c=>a(0,e=c)),M(l,Y,c=>a(1,t=c));const r=async()=>{if(e==0)try{(await(await new Z($,ee,n).mint()).wait()).status==1&&R("/create_account")}catch(c){console.log(c)}};function p(c){z.call(this,l,c)}return[e,t,r,p]}class ce extends J{constructor(s){super(),O(this,s,ae,ne,W,{})}}export{ce as default};
