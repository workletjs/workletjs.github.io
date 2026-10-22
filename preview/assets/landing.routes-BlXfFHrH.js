import{Br as e,Bt as t,Dn as n,Fn as r,Fr as i,Gr as a,Hr as o,Ht as s,In as c,It as l,Or as u,Un as d,Ur as f,Ut as p,Vr as m,Wt as h,Xn as g,Xt as _,Yn as v,Z as y,Zn as b,bn as x,cn as S,en as C,er as w,et as T,fn as E,ir as D,jn as O,mn as k,nr as A,pn as j,tr as M,vn as N,yi as P,zr as F}from"./_router-chunk-CDOpk8UU.js";import{_ as I,g as L,n as R,ot as z,t as B}from"./ng-doc-ui-kit-services-overlay-DDd4CK00.js";import{d as V,r as ee}from"./rxjs-interop-zVFa1WnK.js";import{l as H}from"./proj-WgbdRJFz.js";import{m as U}from"./mat4-C3ghpRdj.js";import{n as W}from"./webgl-tile-D-hkRoGR.js";import{t as G}from"./osm-9r4NY824.js";import{t as K}from"./view-BEs9reC1.js";var q=(()=>{class e{constructor(){this.overlayService=u(B),this.notify$=new P,this.notify$.pipe(f(()=>this.overlayRef?.close()),f(e=>this.openOverlay(e)),a(()=>z(2e3)),ee()).subscribe(()=>this.overlayRef?.close())}notify(e){this.notify$.next(e)}openOverlay(e){this.overlayRef=this.overlayService.open(e,{overlayContainer:R,panelClass:`ng-doc-notify`,positionStrategy:this.overlayService.globalPositionStrategy().bottom(`10px`).centerHorizontally(),openAnimation:I,closeAnimation:L})}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵprov=C({token:e,factory:e.ɵfac})}}return e})(),J=(e,t)=>t.name;function Y(e,n){if(e&1){let e=k();j(0,`button`,16),N(`click`,function(){let t=o(e).$implicit,n=x();return m(n.selectLocation(t))}),v(1),E()}if(e&2){let e=n.$implicit,r=x();t(`aria-pressed`,r.selectedLocation()===e),l(),b(` `,e.name,` `)}}function X(e,t){e&1&&(j(0,`p`,9),v(1,` Map tiles could not load. Check your connection, then choose a location to try again. `),E())}var Z=class e{locations=[{name:`Alps`,longitudeLatitude:[7.6586,45.9763],zoom:9},{name:`London`,longitudeLatitude:[-.1276,51.5072],zoom:11},{name:`Tokyo`,longitudeLatitude:[139.7671,35.6812],zoom:11}];center=i(H(this.locations[0].longitudeLatitude));zoom=i(this.locations[0].zoom);selectedLocation=T(()=>{let e=this.center(),t=this.zoom();return this.locations.find(n=>{let r=H(n.longitudeLatitude);return e!==void 0&&t!==void 0&&Math.abs(t-n.zoom)<1e-6&&r.every((t,n)=>Math.abs(e[n]-t)<.01)})});tileError=i(!1);centerCode=T(()=>(this.center()??[]).map(e=>Number(e.toFixed(2))).join(`, `));zoomCode=T(()=>Number((this.zoom()??0).toFixed(2)));source=y(G);selectLocation(e){this.tileError()&&this.source()?.getInstance()?.refresh(),this.center.set(H(e.longitudeLatitude)),this.zoom.set(e.zoom),this.tileError.set(!1)}static ɵfac=function(t){return new(t||e)};static ɵcmp=_({type:e,selectors:[[`wol-docs-hero-banner`]],viewQuery:function(e,t){e&1&&D(t.source,G,5),e&2&&O()},decls:61,vars:5,consts:[[1,`map-preview`],[1,`preview-toolbar`],[1,`preview-title`],[`role`,`group`,`aria-label`,`Map location`,1,`location-controls`],[`type`,`button`],[1,`map-stage`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Interactive OpenStreetMap preview`],[3,`wolCenterChange`,`wolZoomChange`,`wolCenter`,`wolZoom`],[3,`wolTileLoadError`],[`role`,`status`,1,`map-error`],[1,`code-dock`],[1,`code-caption`],[`role`,`region`,`aria-label`,`Live map Angular template`,`tabindex`,`0`],[1,`code-tag`],[1,`code-attribute`],[1,`code-value`],[`type`,`button`,3,`click`]],template:function(e,t){e&1&&(j(0,`div`,0)(1,`div`,1)(2,`span`,2),v(3,`Live map`),E(),j(4,`div`,3),c(5,Y,2,2,`button`,4,J),E()(),j(7,`div`,5)(8,`wol-map`,6)(9,`wol-view`,7),M(`wolCenterChange`,function(e){return w(t.center,e)||(t.center=e),e})(`wolZoomChange`,function(e){return w(t.zoom,e)||(t.zoom=e),e}),E(),j(10,`wol-tile-layer`)(11,`wol-osm-source`,8),N(`wolTileLoadError`,function(){return t.tileError.set(!0)}),E()()(),h(12,X,2,0,`p`,9),E(),j(13,`div`,10)(14,`div`,11)(15,`span`),v(16,`map.component.html`),E(),j(17,`span`),v(18,`Angular template`),E()(),j(19,`pre`,12)(20,`code`)(21,`span`,13),v(22,`<wol-map`),E(),v(23,` `),j(24,`span`,14),v(25,`tabindex`),E(),v(26,`=`),j(27,`span`,15),v(28,`"0"`),E(),j(29,`span`,13),v(30,`>`),E(),v(31,`
  `),j(32,`span`,13),v(33,`<wol-view`),E(),v(34,`
    `),j(35,`span`,14),v(36,`[wolCenter]`),E(),v(37,`=`),j(38,`span`,15),v(39),E(),v(40,`
    `),j(41,`span`,14),v(42,`[wolZoom]`),E(),v(43,`=`),j(44,`span`,15),v(45),E(),v(46,` `),j(47,`span`,13),v(48,`/>`),E(),v(49,`
  `),j(50,`span`,13),v(51,`<wol-tile-layer>`),E(),v(52,`
    `),j(53,`span`,13),v(54,`<wol-osm-source />`),E(),v(55,`
  `),j(56,`span`,13),v(57,`</wol-tile-layer>`),E(),v(58,`
`),j(59,`span`,13),v(60,`</wol-map>`),E()()()()()),e&2&&(l(5),r(t.locations),l(4),A(`wolCenter`,t.center)(`wolZoom`,t.zoom),l(3),p(t.tileError()?12:-1),l(27),b(`"[`,t.centerCode(),`]"`),l(6),b(`"`,t.zoomCode(),`"`))},dependencies:[U,K,W,G],styles:[`[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  color: var(--%NS%landing-ink, #172b3a);
  font: inherit;
}

.map-preview[_ngcontent-%COMP%] {
  overflow: hidden;
  border: 1px solid var(--%NS%landing-line, #dbe4eb);
  border-radius: 12px;
  background: var(--%NS%landing-paper, #fff);
}

.preview-toolbar[_ngcontent-%COMP%] {
  display: flex;
  min-height: 48px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 16px;
  background: var(--%NS%landing-paper, #fff);
}

.preview-title[_ngcontent-%COMP%] {
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 700;
}

.location-controls[_ngcontent-%COMP%] {
  display: flex;
  gap: 2px;
}

.location-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  min-height: 32px;
  padding: 5px 10px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--%NS%landing-muted, #586774);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  transition:
    color 160ms ease,
    background-color 160ms ease;
}

.location-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: var(--%NS%landing-surface, #f4f7fa);
  color: var(--%NS%landing-ink, #172b3a);
}

.location-controls[_ngcontent-%COMP%]   button[aria-pressed='true'][_ngcontent-%COMP%] {
  background: var(--%NS%landing-surface, #f4f7fa);
  color: var(--%NS%landing-accent, #0c6cbd);
}

.location-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, 
wol-map[_ngcontent-%COMP%]:focus-visible, 
pre[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%landing-accent, #0c6cbd);
  outline-offset: -2px;
}

.map-stage[_ngcontent-%COMP%] {
  position: relative;
  height: 220px;
  background: var(--%NS%landing-surface, #f4f7fa);
}

wol-map[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
}

.map-error[_ngcontent-%COMP%] {
  position: absolute;
  right: 12px;
  bottom: 26px;
  left: 12px;
  margin: 0;
  padding: 10px 12px;
  border-radius: 6px;
  background: var(--%NS%landing-paper, #fff);
  color: var(--%NS%landing-ink, #172b3a);
  font-size: 12px;
  line-height: 1.5;
  pointer-events: none;
}

.code-dock[_ngcontent-%COMP%] {
  background: #172b3a;
  color: #e4eef5;
}

.code-caption[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px 0;
  color: #a8bbc9;
  font-size: 11px;
  line-height: 1.5;
}

pre[_ngcontent-%COMP%] {
  overflow-x: auto;
  margin: 0;
  padding: 10px 18px 16px;
  scrollbar-color: #6b8293 #172b3a;
  scrollbar-width: thin;
  white-space: pre-wrap;
}

code[_ngcontent-%COMP%] {
  font-family: var(--%NS%ng-doc-code-font-family, ui-monospace, monospace);
  font-size: 13px;
  line-height: 1.65;
}

.code-tag[_ngcontent-%COMP%] {
  color: #9bd3f3;
}

.code-attribute[_ngcontent-%COMP%] {
  color: #e4eef5;
}

.code-value[_ngcontent-%COMP%] {
  color: #b8ddbb;
}

[_ngcontent-%COMP%]::selection {
  background: #b8ddbb;
  color: #172b3a;
}

@media (max-width: 640px) {
  .preview-toolbar[_ngcontent-%COMP%] {
    padding-inline: 12px;
  }

  .map-stage[_ngcontent-%COMP%] {
    height: 240px;
  }

  .location-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    min-width: 44px;
    min-height: 44px;
    padding-inline: 9px;
  }

  wol-map[_ngcontent-%COMP%] {
    
    font-size: 32px;
  }

  .code-caption[_ngcontent-%COMP%], 
   pre[_ngcontent-%COMP%] {
    padding-inline: 14px;
  }

  .code-caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .location-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})},Q=(e,t)=>t.name;function $(t,n){t&1&&(e(),S(0,`path`,13))}function te(t,n){t&1&&(e(),S(0,`rect`,46)(1,`path`,47))}function ne(e,t){e&1&&v(0,` Command copied. Your first map is next. `)}function re(e,t){e&1&&v(0,` Copy unavailable. Select and copy the command above. `)}function ie(e,t){if(e&1&&(j(0,`a`,18),S(1,`img`,48),E()),e&2){let e=t.$implicit;n(`href`,e.link,d),l(),n(`src`,e.img)(`alt`,e.name)}}var ae=[{path:``,component:class a{installCommand=`ng add @workletjs/ngx-openlayers`;copyState=i(`idle`);notifyService=u(q);badges=[{name:`npm version`,img:`https://img.shields.io/npm/v/@workletjs/ngx-openlayers.svg?style=flat&label=npm&color=0c6cbd`,link:`https://www.npmjs.com/package/@workletjs/ngx-openlayers`},{name:`GitHub stars`,img:`https://img.shields.io/github/stars/workletjs/workletjs?style=flat&color=0c6cbd`,link:`https://github.com/workletjs/workletjs/stargazers`},{name:`MIT license`,img:`https://img.shields.io/github/license/workletjs/workletjs.svg?style=flat&color=0c6cbd`,link:`https://github.com/workletjs/workletjs/blob/main/LICENSE`}];async copyInstallCommand(){this.copyState.set(`copying`);try{await navigator.clipboard.writeText(this.installCommand),this.copyState.set(`copied`),this.notifyService.notify(`Command copied. Your first map is next.`)}catch{this.copyState.set(`error`),this.notifyService.notify(`Copy unavailable. Select and copy the command above.`)}}static ɵfac=function(e){return new(e||a)};static ɵcmp=_({type:a,selectors:[[`wol-docs-landing`]],decls:150,vars:8,consts:[[`aria-labelledby`,`landing-title`,1,`hero`,`page-width`],[1,`hero-copy`],[`id`,`landing-title`],[1,`hero-description`],[1,`actions`],[`routerLink`,`/guides/get-started/installation`,1,`button`,`button-primary`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`],[`d`,`M5 12h14m-6-6 6 6-6 6`],[`routerLink`,`/guides/get-started/first-map`,1,`button`,`button-secondary`],[1,`install`],[1,`install-command`],[`aria-hidden`,`true`,1,`terminal-prompt`],[`type`,`button`,3,`click`,`disabled`,`title`],[`d`,`m5 12 4 4L19 6`],[1,`install-note`],[`routerLink`,`/guides/reference/compatibility`],[`role`,`status`,`aria-live`,`polite`,`aria-atomic`,`true`,1,`copy-feedback`],[`aria-label`,`Project on npm and GitHub`,1,`package-badges`],[`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[1,`hero-demo`],[1,`demo-caption`],[`aria-labelledby`,`capabilities-title`,1,`capabilities`],[1,`page-width`,`capabilities-layout`],[1,`section-intro`],[`id`,`capabilities-title`],[`routerLink`,`/components`,1,`text-link`],[`aria-hidden`,`true`],[`aria-label`,`Component composition`,1,`composition`],[1,`composition-branch`],[1,`composition-leaf`],[1,`feature-list`],[`routerLink`,`/guides/development/component-usage`,1,`text-link`],[`routerLink`,`/components/layers/webgl-tile`,1,`text-link`],[`routerLink`,`/components/general/view`,1,`text-link`],[`aria-labelledby`,`getting-started-title`,1,`getting-started`,`page-width`],[1,`getting-started-heading`],[`id`,`getting-started-title`],[1,`steps`],[`aria-hidden`,`true`,1,`step-number`],[1,`step-code`],[`routerLink`,`/guides/get-started/installation`,1,`text-link`],[`routerLink`,`/guides/get-started/first-map`,1,`text-link`],[`routerLink`,`/components/general/map`,1,`text-link`],[`aria-labelledby`,`closing-title`,1,`closing`,`page-width`],[`id`,`closing-title`],[`routerLink`,`/guides/get-started/first-map`,1,`button`,`button-primary`],[`x`,`8`,`y`,`8`,`width`,`12`,`height`,`12`,`rx`,`2`],[`d`,`M15 8V4H4v11h4`],[`height`,`20`,3,`src`,`alt`]],template:function(i,a){if(i&1&&(j(0,`section`,0)(1,`div`,1)(2,`h1`,2),v(3,`OpenLayers power.`),S(4,`br`),j(5,`span`),v(6,`Angular simplicity.`),E()(),j(7,`p`,3),v(8,` Build interactive maps with Angular components. Compose layers, connect your data, and let OpenLayers do what it does best. `),E(),j(9,`div`,4)(10,`a`,5),v(11,` Get started `),e(),j(12,`svg`,6),S(13,`path`,7),E()(),F(),j(14,`a`,8),v(15,` Build your first map `),E()(),j(16,`div`,9)(17,`div`,10)(18,`span`,11),v(19,`$`),E(),j(20,`code`),v(21),E(),j(22,`button`,12),N(`click`,function(){return a.copyInstallCommand()}),e(),j(23,`svg`,6),h(24,$,1,0,`path`,13)(25,te,2,0),E()()(),F(),j(26,`p`,14),v(27,` Check `),j(28,`a`,15),v(29,`version compatibility`),E(),v(30,` before installing. `),E(),j(31,`p`,16),h(32,ne,1,0)(33,re,1,0),E()(),j(34,`div`,17),c(35,ie,2,3,`a`,18,Q),E()(),j(37,`div`,19),S(38,`wol-docs-hero-banner`),j(39,`p`,20),v(40,`Choose a location or move the map. The Angular values update below.`),E()()(),j(41,`section`,21)(42,`div`,22)(43,`div`,23)(44,`h2`,24),v(45,`Built the Angular way.`),S(46,`br`),v(47,`OpenLayers underneath.`),E(),j(48,`p`),v(49,` Familiar templates for your map. The flexibility of OpenLayers for everything you build on top. `),E(),j(50,`a`,25),v(51,` Explore the components `),j(52,`span`,26),v(53,`→`),E()(),j(54,`div`,27)(55,`code`),v(56,`wol-map`),E(),j(57,`span`,28)(58,`code`),v(59,`wol-view`),E()(),j(60,`span`,28)(61,`code`),v(62,`wol-tile-layer`),E()(),j(63,`span`,29)(64,`code`),v(65,`wol-osm-source`),E()()()(),j(66,`div`,30)(67,`article`)(68,`h3`),v(69,`Compose, don’t configure.`),E(),j(70,`p`),v(71,` Put views, layers, and sources together in your template. Keep the structure of your map as clear as the rest of your app. `),E(),j(72,`a`,31),v(73,` Component composition `),j(74,`span`,26),v(75,`→`),E()()(),j(76,`article`)(77,`h3`),v(78,`Your data. Your layers.`),E(),j(79,`p`),v(80,` Start with map tiles, add vector features, or work with WebGL layers. Choose the OpenLayers source that fits your data. `),E(),j(81,`a`,32),v(82,` Explore WebGL layers `),j(83,`span`,26),v(84,`→`),E()()(),j(85,`article`)(86,`h3`),v(87,`Stay in control.`),E(),j(88,`p`),v(89,` Bind your view’s center and zoom, handle map events, and access the underlying OpenLayers instance when you need it. `),E(),j(90,`a`,33),v(91,` Meet the view component `),j(92,`span`,26),v(93,`→`),E()()()()()(),j(94,`section`,34)(95,`div`,35)(96,`h2`,36),v(97,`From install to your first map.`),E(),j(98,`p`),v(99,`Start in your Angular app. Build from there.`),E()(),j(100,`ol`,37)(101,`li`)(102,`span`,38),v(103,`1`),E(),j(104,`h3`),v(105,`Add the library`),E(),j(106,`p`),v(107,`Install the package and its peers. Include the OpenLayers stylesheet in your app.`),E(),j(108,`code`,39),v(109,`$ ng add @workletjs/ngx-openlayers`),E(),j(110,`a`,40),v(111,` Installation guide `),j(112,`span`,26),v(113,`→`),E()()(),j(114,`li`)(115,`span`,38),v(116,`2`),E(),j(117,`h3`),v(118,`Compose your map`),E(),j(119,`p`),v(120,`Import the components, compose your map, and give its container a height.`),E(),j(121,`code`,39),v(122,`wol-map { height: 400px; }`),E(),j(123,`a`,41),v(124,` First map walkthrough `),j(125,`span`,26),v(126,`→`),E()()(),j(127,`li`)(128,`span`,38),v(129,`3`),E(),j(130,`h3`),v(131,`Make it yours`),E(),j(132,`p`),v(133,`Bind your view, add controls, and explore the component API.`),E(),j(134,`code`,39),v(135,`[(wolZoom)]="zoom"`),E(),j(136,`a`,42),v(137,` Map component API `),j(138,`span`,26),v(139,`→`),E()()()()(),j(140,`section`,43)(141,`div`)(142,`h2`,44),v(143,`Your next map starts here.`),E(),j(144,`p`),v(145,`Follow the guide. Put your first map on the page.`),E()(),j(146,`a`,45),v(147,` Build your first map `),e(),j(148,`svg`,6),S(149,`path`,7),E()()()),i&2){let e;l(21),g(a.installCommand),l(),s(`is-copied`,a.copyState()===`copied`),n(`disabled`,a.copyState()===`copying`)(`title`,a.copyState()===`copied`?`Copied!`:`Copy install command`),t(`aria-label`,a.copyState()===`copied`?`Install command copied`:`Copy install command`),l(2),p(a.copyState()===`copied`?24:25),l(8),p((e=a.copyState())===`copied`?32:e===`error`?33:-1),l(3),r(a.badges)}},dependencies:[V,Z],styles:[`[_nghost-%COMP%] {
  --%NS%landing-ink: var(--%NS%ng-doc-heading-color, #172b3a);
  --%NS%landing-muted: var(--%NS%ng-doc-text, #586774);
  --%NS%landing-accent: var(--%NS%ng-doc-primary, #0c6cbd);
  --%NS%landing-success: var(--%NS%ng-doc-success, #15803d);
  --%NS%landing-line: var(--%NS%ng-doc-border-color, #dbe4eb);
  --%NS%landing-surface: var(--%NS%ng-doc-base-1, #f4f7fa);
  --%NS%landing-paper: var(--%NS%ng-doc-base-0, #fff);
  --%NS%landing-code-font: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  display: block;
  color: var(--%NS%landing-ink);
  background: var(--%NS%landing-paper);
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  line-height: 1.65;
}

*[_ngcontent-%COMP%] {
  box-sizing: border-box;
}

[_ngcontent-%COMP%]::selection {
  background: color-mix(in srgb, var(--%NS%landing-accent) 22%, transparent);
}

[_ngcontent-%COMP%]:is(a, button):focus-visible {
  outline: 3px solid var(--%NS%landing-accent);
  outline-offset: 5px;
}

svg[_ngcontent-%COMP%] {
  width: 19px;
  height: 19px;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.page-width[_ngcontent-%COMP%] {
  width: min(1200px, 100% - 80px);
  margin-inline: auto;
}

h1[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%] {
  margin: 0;
}

h1[_ngcontent-%COMP%], 
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%] {
  color: var(--%NS%landing-ink);
  font-family: inherit;
  text-wrap: balance;
}

h1[_ngcontent-%COMP%] {
  font-size: clamp(40px, 4.35vw, 62px);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.035em;
}
h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%landing-accent);
}

h2[_ngcontent-%COMP%] {
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 800;
  line-height: 1.22;
  letter-spacing: -0.025em;
}

h3[_ngcontent-%COMP%] {
  font-size: 21px;
  font-weight: 800;
  line-height: 1.35;
  letter-spacing: -0.015em;
}

p[_ngcontent-%COMP%] {
  color: var(--%NS%landing-muted);
  text-wrap: pretty;
}

a[_ngcontent-%COMP%] {
  color: var(--%NS%landing-accent);
  text-underline-offset: 4px;
}

code[_ngcontent-%COMP%] {
  font-family: var(--%NS%landing-code-font);
}

.hero[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  align-items: center;
  gap: 58px;
  padding-block: 96px 88px;
}

.hero-description[_ngcontent-%COMP%] {
  max-width: 440px;
  margin-top: 24px;
  font-size: 18px;
  line-height: 1.7;
}

.actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.button[_ngcontent-%COMP%] {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 19px;
  border: 1px solid transparent;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  transition: background-color 180ms ease-out, border-color 180ms ease-out;
}

.button-primary[_ngcontent-%COMP%] {
  color: var(--%NS%ng-doc-primary-text, #fff);
  background: var(--%NS%landing-accent);
}
.button-primary[_ngcontent-%COMP%]:hover {
  background: color-mix(in srgb, var(--%NS%landing-accent) 85%, var(--%NS%landing-ink));
}

.button-secondary[_ngcontent-%COMP%] {
  color: var(--%NS%landing-ink);
  border-color: var(--%NS%landing-line);
}
.button-secondary[_ngcontent-%COMP%]:hover {
  background: var(--%NS%landing-surface);
  border-color: var(--%NS%landing-muted);
}

.install[_ngcontent-%COMP%] {
  max-width: 450px;
  margin-top: 26px;
}

.install-command[_ngcontent-%COMP%] {
  display: flex;
  min-height: 58px;
  align-items: center;
  gap: 12px;
  padding: 10px 10px 10px 16px;
  border: 1px solid var(--%NS%landing-line);
  border-radius: 7px;
  background: var(--%NS%landing-surface);
}
.install-command[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {
  min-width: 0;
  font-size: 12px;
  line-height: 1.8;
  overflow-wrap: anywhere;
}
.install-command[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  display: grid;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  place-items: center;
  margin-left: auto;
  padding: 0;
  border: 0;
  border-radius: 4px;
  color: var(--%NS%landing-muted);
  background: transparent;
  cursor: pointer;
}
.install-command[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  color: var(--%NS%landing-accent);
  background: var(--%NS%landing-paper);
}
.install-command[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {
  opacity: 0.55;
  cursor: wait;
}
.install-command[_ngcontent-%COMP%]   button.is-copied[_ngcontent-%COMP%] {
  color: var(--%NS%landing-success);
  background: color-mix(in srgb, var(--%NS%landing-success) 12%, transparent);
}
.install-command[_ngcontent-%COMP%]   button.is-copied[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  stroke-width: 2.4;
}

.terminal-prompt[_ngcontent-%COMP%] {
  color: var(--%NS%landing-muted);
  font-family: var(--%NS%landing-code-font);
  font-size: 13px;
  user-select: none;
}

.install-note[_ngcontent-%COMP%] {
  min-height: 20px;
  margin-top: 8px;
  font-size: 12px;
}

.copy-feedback[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  padding: 0;
  border: 0;
  clip-path: inset(50%);
  white-space: nowrap;
}

.package-badges[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 23px;
}
.package-badges[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
.package-badges[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
}
.package-badges[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  min-height: 24px;
  padding-block: 2px;
}

.hero-demo[_ngcontent-%COMP%] {
  min-width: 0;
}

.demo-caption[_ngcontent-%COMP%] {
  margin-top: 14px;
  font-size: 12px;
  text-align: center;
}

.capabilities[_ngcontent-%COMP%] {
  padding-block: 80px;
  border-block: 1px solid var(--%NS%landing-line);
  background: var(--%NS%landing-surface);
}

.capabilities-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  gap: 100px;
}

.section-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  max-width: 390px;
  margin-block: 20px;
}

.text-link[_ngcontent-%COMP%] {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}
.text-link[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}

.composition[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 36px;
  color: var(--%NS%landing-muted);
  font-size: 13px;
}
.composition[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {
  color: var(--%NS%landing-accent);
}

.composition-branch[_ngcontent-%COMP%], 
.composition-leaf[_ngcontent-%COMP%] {
  position: relative;
  margin-left: 8px;
  padding-left: 25px;
}
.composition-branch[_ngcontent-%COMP%]::before, 
.composition-leaf[_ngcontent-%COMP%]::before {
  position: absolute;
  top: -10px;
  left: 0;
  width: 16px;
  height: 23px;
  border-bottom: 1px solid var(--%NS%landing-line);
  border-left: 1px solid var(--%NS%landing-line);
  content: "";
}

.composition-leaf[_ngcontent-%COMP%] {
  margin-left: 41px;
}

.feature-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {
  padding-block: 26px;
  border-bottom: 1px solid var(--%NS%landing-line);
}
.feature-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:first-child {
  padding-top: 0;
}
.feature-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.feature-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-block: 10px 9px;
  font-size: 15px;
}

.getting-started[_ngcontent-%COMP%] {
  padding-block: 82px 88px;
}

.getting-started-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-top: 14px;
}

.steps[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 42px;
  margin: 44px 0 0;
  padding: 0;
  list-style: none;
}
.steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  min-width: 0;
}
.steps[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 17px;
}
.steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  min-height: 78px;
  margin-top: 12px;
  font-size: 15px;
}

.step-number[_ngcontent-%COMP%] {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--%NS%landing-line);
  border-radius: 50%;
  color: var(--%NS%landing-accent);
  font-size: 13px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.step-code[_ngcontent-%COMP%] {
  display: block;
  margin-block: 16px 12px;
  padding-block: 12px;
  border-block: 1px solid var(--%NS%landing-line);
  font-size: 12px;
  overflow-wrap: anywhere;
}

.closing[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 72px;
  padding: 38px 42px;
  border-radius: 12px;
  background: var(--%NS%landing-surface);
}
.closing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 30px;
}
.closing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-top: 8px;
  font-size: 15px;
}
.closing[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {
  flex-shrink: 0;
}

@media (max-width: 1100px) {
  .hero[_ngcontent-%COMP%] {
    gap: 32px;
    padding-top: 72px;
  }
  .capabilities-layout[_ngcontent-%COMP%] {
    gap: 60px;
  }
}
@media (max-width: 800px) {
  .page-width[_ngcontent-%COMP%] {
    width: calc(100% - 48px);
  }
  .hero[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding-block: 54px 50px;
  }
  h1[_ngcontent-%COMP%] {
    font-size: clamp(36px, 6.5vw, 54px);
  }
  .hero-description[_ngcontent-%COMP%] {
    max-width: 540px;
  }
  .install[_ngcontent-%COMP%] {
    max-width: 510px;
  }
  .install-command[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 44px;
    height: 44px;
  }
  .capabilities[_ngcontent-%COMP%] {
    padding-block: 52px;
  }
  .capabilities-layout[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
  .composition[_ngcontent-%COMP%] {
    display: none;
  }
  .section-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
    max-width: 540px;
  }
  .steps[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    margin-top: 32px;
  }
  .steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    min-height: 0;
  }
  .getting-started[_ngcontent-%COMP%] {
    padding-block: 52px;
  }
  .closing[_ngcontent-%COMP%] {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
    padding: 28px;
  }
}
@media (max-width: 380px) {
  h1[_ngcontent-%COMP%] {
    font-size: clamp(30px, 8.5vw, 32px);
  }
  .hero[_ngcontent-%COMP%] {
    gap: 28px;
    padding-top: 36px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .button[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}}];export{ae as default};