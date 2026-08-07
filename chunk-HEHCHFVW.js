import{a as R}from"./chunk-7BYZ334O.js";import{A as K,J as v,a as f,d as U,h as B,i as D,n as N,o as E,w as H}from"./chunk-SCEJUCDL.js";import{f as M}from"./chunk-YYF75TW2.js";import{A as q}from"./chunk-YU4G6AKW.js";import{F as L,aa as F,ba as P,h as _,i as V}from"./chunk-A4CNEVCF.js";import{j as $}from"./chunk-CEWFFWI2.js";var W={},Q=function(t){let s=Object.keys(t);for(let y of s)W[y]=t[y]},X=function(t,s,y,i,n,b){return $(this,null,function*(){let w=i.select(`[id="${y}"]`),a=Object.keys(t);for(let c of a){let l=t[c],g="default";l.classes.length>0&&(g=l.classes.join(" ")),g=g+" flowchart-label";let h=E(l.styles),e=l.text!==void 0?l.text:l.id,o;if(f.info("vertex",l,l.labelType),l.labelType==="markdown")f.info("vertex",l,l.labelType);else if(U(v().flowchart.htmlLabels))o=M(w,{label:e}).node(),o.parentNode.removeChild(o);else{let k=n.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("style",h.labelStyle.replace("color:","fill:"));let C=e.split(D.lineBreakRegex);for(let A of C){let S=n.createElementNS("http://www.w3.org/2000/svg","tspan");S.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),S.setAttribute("dy","1em"),S.setAttribute("x","1"),S.textContent=A,k.appendChild(S)}o=k}let d=0,r="";switch(l.type){case"round":d=5,r="rect";break;case"square":r="rect";break;case"diamond":r="question";break;case"hexagon":r="hexagon";break;case"odd":r="rect_left_inv_arrow";break;case"lean_right":r="lean_right";break;case"lean_left":r="lean_left";break;case"trapezoid":r="trapezoid";break;case"inv_trapezoid":r="inv_trapezoid";break;case"odd_right":r="rect_left_inv_arrow";break;case"circle":r="circle";break;case"ellipse":r="ellipse";break;case"stadium":r="stadium";break;case"subroutine":r="subroutine";break;case"cylinder":r="cylinder";break;case"group":r="rect";break;case"doublecircle":r="doublecircle";break;default:r="rect"}let T=yield B(e,v());s.setNode(l.id,{labelStyle:h.labelStyle,shape:r,labelText:T,labelType:l.labelType,rx:d,ry:d,class:g,style:h.style,id:l.id,link:l.link,linkTarget:l.linkTarget,tooltip:b.db.getTooltip(l.id)||"",domId:b.db.lookUpDomId(l.id),haveCallback:l.haveCallback,width:l.type==="group"?500:void 0,dir:l.dir,type:l.type,props:l.props,padding:v().flowchart.padding}),f.info("setNode",{labelStyle:h.labelStyle,labelType:l.labelType,shape:r,labelText:T,rx:d,ry:d,class:g,style:h.style,id:l.id,domId:b.db.lookUpDomId(l.id),width:l.type==="group"?500:void 0,type:l.type,dir:l.dir,props:l.props,padding:v().flowchart.padding})}})},J=function(t,s,y){return $(this,null,function*(){f.info("abc78 edges = ",t);let i=0,n={},b,w;if(t.defaultStyle!==void 0){let a=E(t.defaultStyle);b=a.style,w=a.labelStyle}for(let a of t){i++;let c="L-"+a.start+"-"+a.end;n[c]===void 0?(n[c]=0,f.info("abc78 new entry",c,n[c])):(n[c]++,f.info("abc78 new entry",c,n[c]));let l=c+"-"+n[c];f.info("abc78 new link id to be used is",c,l,n[c]);let g="LS-"+a.start,h="LE-"+a.end,e={style:"",labelStyle:""};switch(e.minlen=a.length||1,a.type==="arrow_open"?e.arrowhead="none":e.arrowhead="normal",e.arrowTypeStart="arrow_open",e.arrowTypeEnd="arrow_open",a.type){case"double_arrow_cross":e.arrowTypeStart="arrow_cross";case"arrow_cross":e.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":e.arrowTypeStart="arrow_point";case"arrow_point":e.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":e.arrowTypeStart="arrow_circle";case"arrow_circle":e.arrowTypeEnd="arrow_circle";break}let o="",d="";switch(a.stroke){case"normal":o="fill:none;",b!==void 0&&(o=b),w!==void 0&&(d=w),e.thickness="normal",e.pattern="solid";break;case"dotted":e.thickness="normal",e.pattern="dotted",e.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":e.thickness="thick",e.pattern="solid",e.style="stroke-width: 3.5px;fill:none;";break;case"invisible":e.thickness="invisible",e.pattern="solid",e.style="stroke-width: 0;fill:none;";break}if(a.style!==void 0){let r=E(a.style);o=r.style,d=r.labelStyle}e.style=e.style+=o,e.labelStyle=e.labelStyle+=d,a.interpolate!==void 0?e.curve=N(a.interpolate,L):t.defaultInterpolate!==void 0?e.curve=N(t.defaultInterpolate,L):e.curve=N(W.curve,L),a.text===void 0?a.style!==void 0&&(e.arrowheadStyle="fill: #333"):(e.arrowheadStyle="fill: #333",e.labelpos="c"),e.labelType=a.labelType,e.label=yield B(a.text.replace(D.lineBreakRegex,`
`),v()),a.style===void 0&&(e.style=e.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),e.labelStyle=e.labelStyle.replace("color:","fill:"),e.id=l,e.classes="flowchart-link "+g+" "+h,s.setEdge(a.start,a.end,e,i)}})},Y=function(t,s){return s.db.getClasses()},Z=function(t,s,y,i){return $(this,null,function*(){f.info("Drawing flowchart");let n=i.db.getDirection();n===void 0&&(n="TD");let{securityLevel:b,flowchart:w}=v(),a=w.nodeSpacing||50,c=w.rankSpacing||50,l;b==="sandbox"&&(l=_("#i"+s));let g=b==="sandbox"?_(l.nodes()[0].contentDocument.body):_("body"),h=b==="sandbox"?l.nodes()[0].contentDocument:document,e=new q({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:a,ranksep:c,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),o,d=i.db.getSubGraphs();f.info("Subgraphs - ",d);for(let p=d.length-1;p>=0;p--)o=d[p],f.info("Subgraph - ",o),i.db.addVertex(o.id,{text:o.title,type:o.labelType},"group",void 0,o.classes,o.dir);let r=i.db.getVertices(),T=i.db.getEdges();f.info("Edges",T);let k=0;for(k=d.length-1;k>=0;k--){o=d[k],V("cluster").append("text");for(let p=0;p<o.nodes.length;p++)f.info("Setting up subgraphs",o.nodes[p],o.id),e.setParent(o.nodes[p],o.id)}yield X(r,e,s,g,h,i),yield J(T,e);let C=g.select(`[id="${s}"]`),A=g.select("#"+s+" g");if(yield R(A,e,["point","circle","cross"],"flowchart",s),H.insertTitle(C,"flowchartTitleText",w.titleTopMargin,i.db.getDiagramTitle()),K(e,C,w.diagramPadding,w.useMaxWidth),i.db.indexNodes("subGraph"+k),!w.htmlLabels){let p=h.querySelectorAll('[id="'+s+'"] .edgeLabel .label');for(let x of p){let m=x.getBBox(),u=h.createElementNS("http://www.w3.org/2000/svg","rect");u.setAttribute("rx",0),u.setAttribute("ry",0),u.setAttribute("width",m.width),u.setAttribute("height",m.height),x.insertBefore(u,x.firstChild)}}Object.keys(r).forEach(function(p){let x=r[p];if(x.link){let m=_("#"+s+' [id="'+p+'"]');if(m){let u=h.createElementNS("http://www.w3.org/2000/svg","a");u.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),u.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),u.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),b==="sandbox"?u.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&u.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);let I=m.insert(function(){return u},":first-child"),z=m.select(".label-container");z&&I.append(function(){return z.node()});let G=m.select(".label");G&&I.append(function(){return G.node()})}}})})},se={setConf:Q,addVertices:X,addEdges:J,getClasses:Y,draw:Z},j=(t,s)=>{let y=P,i=y(t,"r"),n=y(t,"g"),b=y(t,"b");return F(i,n,b,s)},O=t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor||t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }

  .label text,span,p {
    fill: ${t.nodeTextColor||t.textColor};
    color: ${t.nodeTextColor||t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${j(t.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,ne=O;export{se as a,ne as b};
