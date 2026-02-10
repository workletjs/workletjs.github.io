import{a as kt}from"./chunk-Y6P56AKI.js";import{a as Mt,b as Dt}from"./chunk-N7KW4EVQ.js";import{a as ee,c as Lt}from"./chunk-CYXX4LAF.js";import{p as Tt}from"./chunk-U4P6TNSL.js";import{A as fe,a as Pe,b as wt,c as se,d as ae,e as yt,f as _,g as vt,k as le,l as ce,m as Re,n as k,p as ue,r as _t,s as bt,t as Ce,u as g,v as St,w as Et,x as Pt,y as de,z as he}from"./chunk-WZXR3TCE.js";import{a as xt,b as Ee}from"./chunk-BWB3QUPT.js";import{a as Rt,b as Ct,c as Ft}from"./chunk-3AYHB67P.js";import{Ab as ie,Bb as y,Cb as Q,Db as I,Eb as Z,Fb as j,K as re,Ka as dt,M as $,Mb as gt,Nb as mt,O as N,Q as at,R as lt,S as O,Ta as ht,V as ct,W as ut,X as Y,Y as Se,a as rt,i as it,nc as z,s as X,u as st,v as D,vb as ft,wb as pt,xc as B,z as T}from"./chunk-MT2Y2FGN.js";import{D as ot,F as nt,v as tt,z as be}from"./chunk-L76X3E7P.js";import{B as Xe,F as ne,H as Ye,J as Qe,O as et,c as Ke,j as qe,o as Je}from"./chunk-WEL5MCWD.js";import{Aa as C,Ba as He,P as Ge,S as v,Sb as p,Tb as d,Wb as m,_ as E,ca as Ue,fa as P,kb as F,lb as M,ra as R}from"./chunk-DTKK3HU7.js";import{a as S,b as ze,j as We}from"./chunk-TWZW5B45.js";var eo=["*"],W=class i{wolClassName=d();wolOpacity=m();wolVisible=m();wolExtent=m();wolZIndex=m();wolMinResolution=m();wolMaxResolution=m();wolMinZoom=m();wolMaxZoom=m();wolRenderOrder=d();wolRenderBuffer=d();wolSource=m();wolMap=d();wolDeclutter=d();wolStyle=d();wolBackground=d();wolUpdateWhileAnimating=d();wolUpdateWhileInteracting=d();wolProperties=d();wolChange=p();wolError=p();wolPostRender=p();wolPreRender=p();wolPropertyChange=p();wolSourceReady=p();instance;constructor(){let e=v(E),o=B("VectorLayer"),t={};R(()=>{let n=new Dt({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),renderOrder:this.wolRenderOrder(),renderBuffer:this.wolRenderBuffer(),source:this.wolSource(),map:this.wolMap(),declutter:this.wolDeclutter(),style:this.wolStyle(),background:this.wolBackground(),updateWhileAnimating:this.wolUpdateWhileAnimating(),updateWhileInteracting:this.wolUpdateWhileInteracting(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex()??0)),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{D(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolDeclutter":this.instance.setDeclutter(t.currentValue);break;case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolMap":this.instance.setMap(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue);break;case"wolStyle":this.instance.setStyle(t.currentValue);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["wol-vector-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolRenderOrder:[1,"wolRenderOrder"],wolRenderBuffer:[1,"wolRenderBuffer"],wolSource:[1,"wolSource"],wolMap:[1,"wolMap"],wolDeclutter:[1,"wolDeclutter"],wolStyle:[1,"wolStyle"],wolBackground:[1,"wolBackground"],wolUpdateWhileAnimating:[1,"wolUpdateWhileAnimating"],wolUpdateWhileInteracting:[1,"wolUpdateWhileInteracting"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolVectorLayer"],features:[P],ngContentSelectors:eo,decls:1,vars:0,template:function(o,t){o&1&&(F(),M(0))},encapsulation:2,changeDetection:0})};function At(){return{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"#3399CC","stroke-width":1.25,"circle-radius":5,"circle-fill-color":"rgba(255,255,255,0.4)","circle-stroke-width":1.25,"circle-stroke-color":"#3399CC"}}var Fe=.985;var U=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform mat4 u_projectionMatrix;
uniform mat4 u_screenToWorldMatrix;
uniform vec2 u_viewportSizePx;
uniform float u_pixelRatio;
uniform float u_globalAlpha;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform float u_rotation;
uniform vec4 u_renderExtent;
uniform vec2 u_patternOrigin;
uniform float u_depth;
uniform mediump int u_hitDetection;

const float PI = 3.141592653589793238;
const float TWO_PI = 2.0 * PI;
float currentLineMetric = 0.; // an actual value will be used in the stroke shaders

${St}
`,H=At(),K=class{constructor(){this.uniforms_=[],this.attributes_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${le(H["circle-radius"])} + ${le(H["circle-stroke-width"]*.5)})`,this.symbolRotationExpression_="0.0",this.symbolOffsetExpression_="vec2(0.0)",this.symbolColorExpression_=ce(H["circle-fill-color"]),this.texCoordExpression_="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression_="false",this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=le(H["stroke-width"]),this.strokeColorExpression_=ce(H["stroke-color"]),this.strokeOffsetExpression_="0.",this.strokeCapExpression_=k("round"),this.strokeJoinExpression_=k("round"),this.strokeMiterLimitExpression_="10.",this.strokeDistanceFieldExpression_="-1000.",this.strokePatternLengthExpression_=null,this.hasFill_=!1,this.fillColorExpression_=ce(H["fill-color"]),this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e,o){return this.uniforms_.push({name:e,type:o}),this}addAttribute(e,o,t,n){return this.attributes_.push({name:e,type:o,varyingName:e.replace(/^a_/,"v_"),varyingType:n??o,varyingExpression:t??e}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.discardExpression_=e,this}getFragmentDiscardExpression(){return this.discardExpression_}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}getStrokeColorExpression(){return this.strokeColorExpression_}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setStrokePatternLengthExpression(e){return this.strokePatternLengthExpression_=e,this}getStrokePatternLengthExpression(){return this.strokePatternLengthExpression_}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}getFillColorExpression(){return this.fillColorExpression_}addVertexShaderFunction(e){return this.vertexShaderFunctions_.includes(e)?this:(this.vertexShaderFunctions_.push(e),this)}addFragmentShaderFunction(e){return this.fragmentShaderFunctions_.includes(e)?this:(this.fragmentShaderFunctions_.push(e),this)}getSymbolVertexShader(){return this.hasSymbol_?`${U}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_position;
attribute vec2 a_localPosition;
attribute vec2 a_hitColor;

varying vec2 v_texCoord;
varying vec2 v_quadCoord;
varying vec4 v_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;

${this.attributes_.map(e=>`attribute ${e.type} ${e.name};
varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
vec2 pxToScreen(vec2 coordPx) {
  vec2 scaled = coordPx / u_viewportSizePx / 0.5;
  return scaled;
}

vec2 screenToPx(vec2 coordScreen) {
  return (coordScreen * 0.5 + 0.5) * u_viewportSizePx;
}

void main(void) {
  v_quadSizePx = ${this.symbolSizeExpression_};
  vec2 halfSizePx = v_quadSizePx * 0.5;
  vec2 centerOffsetPx = ${this.symbolOffsetExpression_};
  vec2 offsetPx = centerOffsetPx + a_localPosition * halfSizePx * vec2(1., -1.);
  float angle = ${this.symbolRotationExpression_}${this.symbolRotateWithView_?" + u_rotation":""};
  float c = cos(-angle);
  float s = sin(-angle);
  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);
  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);
  gl_Position = center + vec4(pxToScreen(offsetPx), u_depth, 0.);
  vec4 texCoord = ${this.texCoordExpression_};
  float u = mix(texCoord.s, texCoord.p, a_localPosition.x * 0.5 + 0.5);
  float v = mix(texCoord.t, texCoord.q, a_localPosition.y * 0.5 + 0.5);
  v_texCoord = vec2(u, v);
  v_hitColor = unpackColor(a_hitColor);
  v_angle = angle;
  c = cos(-v_angle);
  s = sin(-v_angle);
  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y);
  v_centerPx = screenToPx(center.xy) + centerOffsetPx;
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${U}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
varying vec2 v_texCoord;
varying vec4 v_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.attributes_.map(e=>`varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

void main(void) {
${this.attributes_.map(e=>`  ${e.varyingType} ${e.name} = ${e.varyingName}; // assign to original attribute name`).join(`
`)}
  if (${this.discardExpression_}) { discard; }
  vec2 coordsPx = gl_FragCoord.xy / u_pixelRatio - v_centerPx; // relative to center
  float c = cos(v_angle);
  float s = sin(v_angle);
  coordsPx = vec2(c * coordsPx.x - s * coordsPx.y, s * coordsPx.x + c * coordsPx.y);
  gl_FragColor = ${this.symbolColorExpression_};
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.05) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${U}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_segmentStart;
attribute vec2 a_segmentEnd;
attribute vec2 a_localPosition;
attribute float a_measureStart;
attribute float a_measureEnd;
attribute float a_angleTangentSum;
attribute float a_distanceLow;
attribute float a_distanceHigh;
attribute vec2 a_joinAngles;
attribute vec2 a_hitColor;

varying vec2 v_segmentStartPx;
varying vec2 v_segmentEndPx;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_hitColor;
varying float v_distancePx;
varying float v_measureStart;
varying float v_measureEnd;

${this.attributes_.map(e=>`attribute ${e.type} ${e.name};
varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

vec4 pxToScreen(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return vec4(screenPos, u_depth, 1.0);
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

vec2 getJoinOffsetDirection(vec2 normalPx, float joinAngle) {
  float halfAngle = joinAngle / 2.0;
  float c = cos(halfAngle);
  float s = sin(halfAngle);
  vec2 angleBisectorNormal = vec2(s * normalPx.x + c * normalPx.y, -c * normalPx.x + s * normalPx.y);
  float length = 1.0 / s;
  return angleBisectorNormal * length;
}

vec2 getOffsetPoint(vec2 point, vec2 normal, float joinAngle, float offsetPx) {
  // if on a cap or the join angle is too high, offset the line along the segment normal
  if (cos(joinAngle) > 0.998 || isCap(joinAngle)) {
    return point - normal * offsetPx;
  }
  // offset is applied along the inverted normal (positive offset goes "right" relative to line direction)
  return point - getJoinOffsetDirection(normal, joinAngle) * offsetPx;
}

void main(void) {
  v_angleStart = a_joinAngles.x;
  v_angleEnd = a_joinAngles.y;
  float startEndRatio = a_localPosition.x * 0.5 + 0.5;
  currentLineMetric = mix(a_measureStart, a_measureEnd, startEndRatio);
  // we're reading the fractional part while keeping the sign (so -4.12 gives -0.12, 3.45 gives 0.45)

  float lineWidth = ${this.strokeWidthExpression_};
  float lineOffsetPx = ${this.strokeOffsetExpression_};

  // compute segment start/end in px with offset
  vec2 segmentStartPx = worldToPx(a_segmentStart);
  vec2 segmentEndPx = worldToPx(a_segmentEnd);
  vec2 tangentPx = normalize(segmentEndPx - segmentStartPx);
  vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);
  segmentStartPx = getOffsetPoint(segmentStartPx, normalPx, v_angleStart, lineOffsetPx),
  segmentEndPx = getOffsetPoint(segmentEndPx, normalPx, v_angleEnd, lineOffsetPx);

  // compute current vertex position
  float normalDir = -1. * a_localPosition.y;
  float tangentDir = -1. * a_localPosition.x;
  float angle = mix(v_angleStart, v_angleEnd, startEndRatio);
  vec2 joinDirection;
  vec2 positionPx = mix(segmentStartPx, segmentEndPx, startEndRatio);
  // if angle is too high, do not make a proper join
  if (cos(angle) > ${Fe} || isCap(angle)) {
    joinDirection = normalPx * normalDir - tangentPx * tangentDir;
  } else {
    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);
  }
  positionPx = positionPx + joinDirection * (lineWidth * 0.5 + 1.); // adding 1 pixel for antialiasing
  gl_Position = pxToScreen(positionPx);

  v_segmentStartPx = segmentStartPx;
  v_segmentEndPx = segmentEndPx;
  v_width = lineWidth;
  v_hitColor = unpackColor(a_hitColor);

  v_distancePx = a_distanceLow / u_resolution - (lineOffsetPx * a_angleTangentSum);
  float distanceHighPx = a_distanceHigh / u_resolution;
  ${this.strokePatternLengthExpression_!==null?`v_distancePx = mod(v_distancePx, ${this.strokePatternLengthExpression_});
  distanceHighPx = mod(distanceHighPx, ${this.strokePatternLengthExpression_});
  `:""}v_distancePx += distanceHighPx;

  v_measureStart = a_measureStart;
  v_measureEnd = a_measureEnd;
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${U}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
varying vec2 v_segmentStartPx;
varying vec2 v_segmentEndPx;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_hitColor;
varying float v_distancePx;
varying float v_measureStart;
varying float v_measureEnd;
${this.attributes_.map(e=>`varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

float segmentDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  vec2 tangent = normalize(end - start);
  vec2 normal = vec2(-tangent.y, tangent.x);
  vec2 startToPoint = point - start;
  return abs(dot(startToPoint, normal)) - width * 0.5;
}

float buttCapDistanceField(vec2 point, vec2 start, vec2 end) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  return dot(startToPoint, -tangent);
}

float squareCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return buttCapDistanceField(point, start, end) - width * 0.5;
}

float roundCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  float onSegment = max(0., 1000. * dot(point - start, end - start)); // this is very high when inside the segment
  return length(point - start) - width * 0.5 - onSegment;
}

float roundJoinDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return roundCapDistanceField(point, start, end, width);
}

float bevelJoinField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  float c = cos(joinAngle * 0.5);
  float s = sin(joinAngle * 0.5);
  float direction = -sign(sin(joinAngle));
  vec2 bisector = vec2(c * tangent.x - s * tangent.y, s * tangent.x + c * tangent.y);
  float radius = width * 0.5 * s;
  return dot(startToPoint, bisector * direction) - radius;
}

float miterJoinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  if (cos(joinAngle) > ${Fe}) { // avoid risking a division by zero
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  float miterLength = 1. / sin(joinAngle * 0.5);
  float miterLimit = ${this.strokeMiterLimitExpression_};
  if (miterLength > miterLimit) {
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  return -1000.;
}

float capDistanceField(vec2 point, vec2 start, vec2 end, float width, float capType) {
   if (capType == ${k("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${k("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${k("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${k("miter")}) {
    return miterJoinDistanceField(point, start, end, width, joinAngle);
  }
  return roundJoinDistanceField(point, start, end, width);
}

float computeSegmentPointDistance(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float capType, float joinType) {
  if (isCap(joinAngle)) {
    return capDistanceField(point, start, end, width, capType);
  }
  return joinDistanceField(point, start, end, width, joinAngle, joinType);
}

float distanceFromSegment(vec2 point, vec2 start, vec2 end) {
  vec2 tangent = end - start;
  vec2 startToPoint = point - start;
  // inspire by capsule fn in https://iquilezles.org/articles/distfunctions/
  float h = clamp(dot(startToPoint, tangent) / dot(tangent, tangent), 0.0, 1.0);
  return length(startToPoint - tangent * h);
}

void main(void) {
${this.attributes_.map(e=>`  ${e.varyingType} ${e.name} = ${e.varyingName}; // assign to original attribute name`).join(`
`)}

  vec2 currentPointPx = gl_FragCoord.xy / u_pixelRatio;
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(currentPointPx);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      worldPos[0] < u_renderExtent[0] ||
      worldPos[1] < u_renderExtent[1] ||
      worldPos[0] > u_renderExtent[2] ||
      worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif

  float segmentLengthPx = length(v_segmentEndPx - v_segmentStartPx);
  segmentLengthPx = max(segmentLengthPx, 1.17549429e-38); // avoid divide by zero
  vec2 segmentTangent = (v_segmentEndPx - v_segmentStartPx) / segmentLengthPx;
  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);
  vec2 startToPointPx = currentPointPx - v_segmentStartPx;
  float lengthToPointPx = max(0., min(dot(segmentTangent, startToPointPx), segmentLengthPx));
  float currentLengthPx = lengthToPointPx + v_distancePx;
  float currentRadiusPx = distanceFromSegment(currentPointPx, v_segmentStartPx, v_segmentEndPx);
  float currentRadiusRatio = dot(segmentNormal, startToPointPx) * 2. / v_width;
  currentLineMetric = mix(v_measureStart, v_measureEnd, lengthToPointPx / segmentLengthPx);

  if (${this.discardExpression_}) { discard; }

  float capType = ${this.strokeCapExpression_};
  float joinType = ${this.strokeJoinExpression_};
  float segmentStartDistance = computeSegmentPointDistance(currentPointPx, v_segmentStartPx, v_segmentEndPx, v_width, v_angleStart, capType, joinType);
  float segmentEndDistance = computeSegmentPointDistance(currentPointPx, v_segmentEndPx, v_segmentStartPx, v_width, v_angleEnd, capType, joinType);
  float distanceField = max(
    segmentDistanceField(currentPointPx, v_segmentStartPx, v_segmentEndPx, v_width),
    max(segmentStartDistance, segmentEndDistance)
  );
  distanceField = max(distanceField, ${this.strokeDistanceFieldExpression_});

  vec4 color = ${this.strokeColorExpression_};
  color.a *= smoothstep(0.5, -0.5, distanceField);
  gl_FragColor = color;
  gl_FragColor.a *= u_globalAlpha;
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}getFillVertexShader(){return this.hasFill_?`${U}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_position;
attribute vec2 a_hitColor;

varying vec4 v_hitColor;

${this.attributes_.map(e=>`attribute ${e.type} ${e.name};
varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);
  v_hitColor = unpackColor(a_hitColor);
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
}`:null}getFillFragmentShader(){return this.hasFill_?`${U}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
varying vec4 v_hitColor;
${this.attributes_.map(e=>`varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}
vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

void main(void) {
${this.attributes_.map(e=>`  ${e.varyingType} ${e.name} = ${e.varyingName}; // assign to original attribute name`).join(`
`)}
  vec2 pxPos = gl_FragCoord.xy / u_pixelRatio;
  vec2 pxOrigin = worldToPx(u_patternOrigin);
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(pxPos);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      worldPos[0] < u_renderExtent[0] ||
      worldPos[1] < u_renderExtent[1] ||
      worldPos[0] > u_renderExtent[2] ||
      worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif
  if (${this.discardExpression_}) { discard; }
  gl_FragColor = ${this.fillColorExpression_};
  gl_FragColor.a *= u_globalAlpha;
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}};var Me=class i{constructor(){this.globalCounter_=0,this.refToFeature_=new Map,this.uidToRef_=new Map,this.freeGlobalRef_=[],this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e,o){for(let t=0;t<e.length;t++)this.addFeature(e[t],o)}addFeature(e,o){let t=e.getGeometry();t&&(o&&(t=t.clone(),t.applyTransform(o)),this.addGeometry_(t,e))}clearFeatureEntryInPointBatch_(e){let o=T(e),t=this.pointBatch.entries[o];if(t)return this.pointBatch.geometriesCount-=t.flatCoordss.length,delete this.pointBatch.entries[o],t}clearFeatureEntryInLineStringBatch_(e){let o=T(e),t=this.lineStringBatch.entries[o];if(t)return this.lineStringBatch.verticesCount-=t.verticesCount,this.lineStringBatch.geometriesCount-=t.flatCoordss.length,delete this.lineStringBatch.entries[o],t}clearFeatureEntryInPolygonBatch_(e){let o=T(e),t=this.polygonBatch.entries[o];if(t)return this.polygonBatch.verticesCount-=t.verticesCount,this.polygonBatch.ringsCount-=t.ringsCount,this.polygonBatch.geometriesCount-=t.flatCoordss.length,delete this.polygonBatch.entries[o],t}addGeometry_(e,o){let t=e.getType();switch(t){case"GeometryCollection":{let n=e.getGeometriesArray();for(let r of n)this.addGeometry_(r,o);break}case"MultiPolygon":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),n.getEndss(),o,T(o),n.getStride());break}case"MultiLineString":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),n.getEnds(),o,T(o),n.getStride());break}case"MultiPoint":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),null,o,T(o),n.getStride());break}case"Polygon":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),n.getEnds(),o,T(o),n.getStride());break}case"Point":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),null,o,T(o),n.getStride());break}case"LineString":case"LinearRing":{let n=e,r=n.getStride();this.addCoordinates_(t,n.getFlatCoordinates(),null,o,T(o),r,n.getLayout?.());break}default:}}addCoordinates_(e,o,t,n,r,s,a){let l;switch(e){case"MultiPolygon":{let c=t;for(let u=0,h=c.length;u<h;u++){let f=c[u],w=u>0?c[u-1]:null,x=w?w[w.length-1]:0,b=f[f.length-1];f=x>0?f.map(J=>J-x):f,this.addCoordinates_("Polygon",o.slice(x,b),f,n,r,s,a)}break}case"MultiLineString":{let c=t;for(let u=0,h=c.length;u<h;u++){let f=u>0?c[u-1]:0;this.addCoordinates_("LineString",o.slice(f,c[u]),null,n,r,s,a)}break}case"MultiPoint":for(let c=0,u=o.length;c<u;c+=s)this.addCoordinates_("Point",o.slice(c,c+2),null,n,r,null,null);break;case"Polygon":{let c=t;if(n instanceof Tt){let f=dt(o,c);if(f.length>1){this.addCoordinates_("MultiPolygon",o,f,n,r,s,a);return}}this.polygonBatch.entries[r]||(this.polygonBatch.entries[r]=this.addRefToEntry_(r,{feature:n,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]})),l=o.length/s;let u=t.length,h=t.map((f,w,x)=>w>0?(f-x[w-1])/s:f/s);this.polygonBatch.verticesCount+=l,this.polygonBatch.ringsCount+=u,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[r].flatCoordss.push(to(o,s)),this.polygonBatch.entries[r].ringsVerticesCounts.push(h),this.polygonBatch.entries[r].verticesCount+=l,this.polygonBatch.entries[r].ringsCount+=u;for(let f=0,w=c.length;f<w;f++){let x=f>0?c[f-1]:0;this.addCoordinates_("LinearRing",o.slice(x,c[f]),null,n,r,s,a)}break}case"Point":this.pointBatch.entries[r]||(this.pointBatch.entries[r]=this.addRefToEntry_(r,{feature:n,flatCoordss:[]})),this.pointBatch.geometriesCount++,this.pointBatch.entries[r].flatCoordss.push(o);break;case"LineString":case"LinearRing":this.lineStringBatch.entries[r]||(this.lineStringBatch.entries[r]=this.addRefToEntry_(r,{feature:n,flatCoordss:[],verticesCount:0})),l=o.length/s,this.lineStringBatch.verticesCount+=l,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[r].flatCoordss.push(oo(o,s,a)),this.lineStringBatch.entries[r].verticesCount+=l;break;default:}}addRefToEntry_(e,o){let t=this.uidToRef_.get(e),n=t||this.freeGlobalRef_.pop()||++this.globalCounter_;return o.ref=n,t||(this.refToFeature_.set(n,o.feature),this.uidToRef_.set(e,n)),o}removeRef_(e,o){if(!e)throw new Error("This feature has no ref: "+o);this.refToFeature_.delete(e),this.uidToRef_.delete(o),this.freeGlobalRef_.push(e)}changeFeature(e,o){if(!this.uidToRef_.get(T(e)))return;this.removeFeature(e);let t=e.getGeometry();t&&(o&&(t=t.clone(),t.applyTransform(o)),this.addGeometry_(t,e))}removeFeature(e){let o=this.clearFeatureEntryInPointBatch_(e);o=this.clearFeatureEntryInPolygonBatch_(e)||o,o=this.clearFeatureEntryInLineStringBatch_(e)||o,o&&this.removeRef_(o.ref,T(o.feature))}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0,this.globalCounter_=0,this.freeGlobalRef_=[],this.refToFeature_.clear(),this.uidToRef_.clear()}getFeatureFromRef(e){return this.refToFeature_.get(e)}isEmpty(){return this.globalCounter_===0}filter(e){let o=new i;o.globalCounter_=this.globalCounter_,o.uidToRef_=this.uidToRef_,o.refToFeature_=this.refToFeature_;let t=!0;for(let n of this.refToFeature_.values())e(n)&&(o.addFeature(n),t=!1);return t?new i:o}};function to(i,e){return e===2?i:i.filter((o,t)=>t%e<2)}function oo(i,e,o){return e===3&&o==="XYM"?i:e===4?i.filter((t,n)=>n%e!==2):e===3?i.map((t,n)=>n%e!==2?t:0):new Array(i.length*1.5).fill(0).map((t,n)=>n%3===2?0:i[Math.round(n/1.5)])}var Nt=Me;function Vt(){let i='function t(t,n,x=2){const o=n&&n.length,i=o?n[0]*x:t.length;let f=e(t,0,i,x,!0);const l=[];if(!f||f.next===f.prev)return l;let c,y,h;if(o&&(f=function(t,n,r,x){const o=[];for(let r=0,i=n.length;r<i;r++){const f=e(t,n[r]*x,r<i-1?n[r+1]*x:t.length,x,!1);f===f.next&&(f.steiner=!0),o.push(a(f))}o.sort(u);for(let t=0;t<o.length;t++)r=s(o[t],r);return r}(t,n,f,x)),t.length>80*x){c=t[0],y=t[1];let e=c,n=y;for(let r=x;r<i;r+=x){const x=t[r],o=t[r+1];x<c&&(c=x),o<y&&(y=o),x>e&&(e=x),o>n&&(n=o)}h=Math.max(e-c,n-y),h=0!==h?32767/h:0}return r(f,l,x,c,y,h,0),l}function e(t,e,n,r,x){let o;if(x===function(t,e,n,r){let x=0;for(let o=e,i=n-r;o<n;o+=r)x+=(t[i]-t[o])*(t[o+1]+t[i+1]),i=o;return x}(t,e,n,r)>0)for(let x=e;x<n;x+=r)o=d(x/r|0,t[x],t[x+1],o);else for(let x=n-r;x>=e;x-=r)o=d(x/r|0,t[x],t[x+1],o);return o&&b(o,o.next)&&(w(o),o=o.next),o}function n(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!b(r,r.next)&&0!==v(r.prev,r,r.next))r=r.next;else{if(w(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function r(t,e,u,s,l,a,y){if(!t)return;!y&&a&&function(t,e,n,r){let x=t;do{0===x.z&&(x.z=c(x.x,x.y,e,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==t);x.prevZ.nextZ=null,x.prevZ=null,function(t){let e,n=1;do{let r,x=t;t=null;let o=null;for(e=0;x;){e++;let i=x,f=0;for(let t=0;t<n&&(f++,i=i.nextZ,i);t++);let u=n;for(;f>0||u>0&&i;)0!==f&&(0===u||!i||x.z<=i.z)?(r=x,x=x.nextZ,f--):(r=i,i=i.nextZ,u--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;x=i}o.nextZ=null,n*=2}while(e>1)}(x)}(t,s,l,a);let h=t;for(;t.prev!==t.next;){const c=t.prev,p=t.next;if(a?o(t,s,l,a):x(t))e.push(c.i,t.i,p.i),w(t),t=p.next,h=p.next;else if((t=p)===h){y?1===y?r(t=i(n(t),e),e,u,s,l,a,2):2===y&&f(t,e,u,s,l,a):r(n(t),e,u,s,l,a,1);break}}}function x(t){const e=t.prev,n=t,r=t.next;if(v(e,n,r)>=0)return!1;const x=e.x,o=n.x,i=r.x,f=e.y,u=n.y,s=r.y,l=Math.min(x,o,i),c=Math.min(f,u,s),a=Math.max(x,o,i),y=Math.max(f,u,s);let p=r.next;for(;p!==e;){if(p.x>=l&&p.x<=a&&p.y>=c&&p.y<=y&&h(x,f,o,u,i,s,p.x,p.y)&&v(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function o(t,e,n,r){const x=t.prev,o=t,i=t.next;if(v(x,o,i)>=0)return!1;const f=x.x,u=o.x,s=i.x,l=x.y,a=o.y,y=i.y,p=Math.min(f,u,s),b=Math.min(l,a,y),M=Math.max(f,u,s),m=Math.max(l,a,y),A=c(p,b,e,n,r),g=c(M,m,e,n,r);let Z=t.prevZ,d=t.nextZ;for(;Z&&Z.z>=A&&d&&d.z<=g;){if(Z.x>=p&&Z.x<=M&&Z.y>=b&&Z.y<=m&&Z!==x&&Z!==i&&h(f,l,u,a,s,y,Z.x,Z.y)&&v(Z.prev,Z,Z.next)>=0)return!1;if(Z=Z.prevZ,d.x>=p&&d.x<=M&&d.y>=b&&d.y<=m&&d!==x&&d!==i&&h(f,l,u,a,s,y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;Z&&Z.z>=A;){if(Z.x>=p&&Z.x<=M&&Z.y>=b&&Z.y<=m&&Z!==x&&Z!==i&&h(f,l,u,a,s,y,Z.x,Z.y)&&v(Z.prev,Z,Z.next)>=0)return!1;Z=Z.prevZ}for(;d&&d.z<=g;){if(d.x>=p&&d.x<=M&&d.y>=b&&d.y<=m&&d!==x&&d!==i&&h(f,l,u,a,s,y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function i(t,e){let r=t;do{const n=r.prev,x=r.next.next;!b(n,x)&&M(n,r,r.next,x)&&g(n,x)&&g(x,n)&&(e.push(n.i,r.i,x.i),w(r),w(r.next),r=t=x),r=r.next}while(r!==t);return n(r)}function f(t,e,x,o,i,f){let u=t;do{let t=u.next.next;for(;t!==u.prev;){if(u.i!==t.i&&p(u,t)){let s=Z(u,t);return u=n(u,u.next),s=n(s,s.next),r(u,e,x,o,i,f,0),void r(s,e,x,o,i,f,0)}t=t.next}u=u.next}while(u!==t)}function u(t,e){let n=t.x-e.x;if(0===n&&(n=t.y-e.y,0===n)){n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x)}return n}function s(t,e){const r=function(t,e){let n=e;const r=t.x,x=t.y;let o,i=-1/0;if(b(t,n))return n;do{if(b(t,n.next))return n.next;if(x<=n.y&&x>=n.next.y&&n.next.y!==n.y){const t=n.x+(x-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i&&(i=t,o=n.x<n.next.x?n:n.next,t===r))return o}n=n.next}while(n!==e);if(!o)return null;const f=o,u=o.x,s=o.y;let c=1/0;n=o;do{if(r>=n.x&&n.x>=u&&r!==n.x&&y(x<s?r:i,x,u,s,x<s?i:r,x,n.x,n.y)){const e=Math.abs(x-n.y)/(r-n.x);g(n,t)&&(e<c||e===c&&(n.x>o.x||n.x===o.x&&l(o,n)))&&(o=n,c=e)}n=n.next}while(n!==f);return o}(t,e);if(!r)return e;const x=Z(r,t);return n(x,x.next),n(r,r.next)}function l(t,e){return v(t.prev,t,e.prev)<0&&v(e.next,t,t.next)<0}function c(t,e,n,r,x){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function y(t,e,n,r,x,o,i,f){return(x-i)*(e-f)>=(t-i)*(o-f)&&(t-i)*(r-f)>=(n-i)*(e-f)&&(n-i)*(o-f)>=(x-i)*(r-f)}function h(t,e,n,r,x,o,i,f){return!(t===i&&e===f)&&y(t,e,n,r,x,o,i,f)}function p(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&M(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(g(t,e)&&g(e,t)&&function(t,e){let n=t,r=!1;const x=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&x<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(v(t.prev,t,e.prev)||v(t,e.prev,e))||b(t,e)&&v(t.prev,t,t.next)>0&&v(e.prev,e,e.next)>0)}function v(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function b(t,e){return t.x===e.x&&t.y===e.y}function M(t,e,n,r){const x=A(v(t,e,n)),o=A(v(t,e,r)),i=A(v(n,r,t)),f=A(v(n,r,e));return x!==o&&i!==f||(!(0!==x||!m(t,n,e))||(!(0!==o||!m(t,r,e))||(!(0!==i||!m(n,t,r))||!(0!==f||!m(n,e,r)))))}function m(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function A(t){return t>0?1:t<0?-1:0}function g(t,e){return v(t.prev,t,t.next)<0?v(t,e,t.next)>=0&&v(t,t.prev,e)>=0:v(t,e,t.prev)<0||v(t,t.next,e)<0}function Z(t,e){const n=F(t.i,t.x,t.y),r=F(e.i,e.x,e.y),x=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=x,x.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function d(t,e,n,r){const x=F(t,e,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function w(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function F(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function I(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const x=e[0],o=e[1],i=e[2],f=e[3],u=e[4],s=e[5];return t[0]=f/n,t[1]=-o/n,t[2]=-i/n,t[3]=x/n,t[4]=(i*s-f*u)/n,t[5]=-(x*s-o*u)/n,t}new Array(6);const z=[],B={vertexAttributesPosition:0,instanceAttributesPosition:0,indicesPosition:0};function P(t,e,n,r,x){const o=t[e++],i=t[e++],f=z;f.length=r;for(let n=0;n<f.length;n++)f[n]=t[e+n];let u=x?x.instanceAttributesPosition:0;return n[u++]=o,n[u++]=i,f.length&&(n.set(f,u),u+=f.length),B.instanceAttributesPosition=u,B}function N(t,e,n,r,x,o,i,f,u,s){const l=[t[e],t[e+1]],c=[t[n],t[n+1]],a=t[e+2],y=t[n+2],h=E(f,[...l]),p=E(f,[...c]);function v(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),x=[(e[0]-t[0])/r,(e[1]-t[1])/r],o=[-x[1],x[0]],i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),f=[(n[0]-t[0])/i,(n[1]-t[1])/i];let u=0===r||0===i?0:Math.acos((s=f[0]*x[0]+f[1]*x[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;u=Math.max(u,1e-5);return f[0]*o[0]+f[1]*o[1]>0?u:2*Math.PI-u}let b=-1,M=-1,m=s;const A=null!==x;if(null!==r){b=v(h,p,E(f,[...[t[r],t[r+1]]])),Math.cos(b)<=.985&&(m+=Math.tan((b-Math.PI)/2))}if(A){M=v(p,h,E(f,[...[t[x],t[x+1]]])),Math.cos(M)<=.985&&(m+=Math.tan((Math.PI-M)/2))}const g=Math.pow(2,24),Z=u%g,d=Math.floor(u/g)*g;return o.push(l[0],l[1],a,c[0],c[1],y,b,M,Z,d,s),o.push(...i),{length:u+Math.sqrt((p[0]-h[0])*(p[0]-h[0])+(p[1]-h[1])*(p[1]-h[1])),angle:m}}function R(e,n,r,x,o){const i=2+o;let f=n;const u=e.slice(f,f+o);f+=o;const s=e[f++];let l=0;const c=new Array(s-1);for(let t=0;t<s;t++)l+=e[f++],t<s-1&&(c[t]=l);const a=e.slice(f,f+2*l),y=t(a,c,2);for(let t=0;t<y.length;t++)x.push(y[t]+r.length/i);for(let t=0;t<a.length;t+=2)r.push(a[t],a[t+1],...u);return f+2*l}const S="GENERATE_POLYGON_BUFFERS",T="GENERATE_POINT_BUFFERS",_="GENERATE_LINE_STRING_BUFFERS",O=self;O.onmessage=t=>{const e=t.data;switch(e.type){case T:{const t=2,n=2,r=e.customAttributesSize,x=n+r,o=new Float32Array(e.renderInstructions),i=o.length/x*(t+r),f=Uint32Array.from([0,1,3,1,2,3]),u=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),s=new Float32Array(i);let l;for(let t=0;t<o.length;t+=x)l=P(o,t,s,r,l);const c=Object.assign({indicesBuffer:f.buffer,vertexAttributesBuffer:u.buffer,instanceAttributesBuffer:s.buffer,renderInstructions:o.buffer},e);O.postMessage(c,[u.buffer,s.buffer,f.buffer,o.buffer]);break}case _:{const t=[],n=e.customAttributesSize,r=3,x=new Float32Array(e.renderInstructions);let o=0;const i=[1,0,0,1,0,0];let f,u;for(I(i,e.renderInstructionsTransform);o<x.length;){u=Array.from(x.slice(o,o+n)),o+=n,f=x[o++];const e=o,s=o+(f-1)*r,l=x[e]===x[s]&&x[e+1]===x[s+1];let c=0,a=0;for(let n=0;n<f-1;n++){let y=null;n>0?y=o+(n-1)*r:l&&(y=s-r);let h=null;n<f-2?h=o+(n+2)*r:l&&(h=e+r);const p=N(x,o+n*r,o+(n+1)*r,y,h,t,u,i,c,a);c=p.length,a=p.angle}o+=f*r}const s=Uint32Array.from([0,1,3,1,2,3]),l=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),c=Float32Array.from(t),a=Object.assign({indicesBuffer:s.buffer,vertexAttributesBuffer:l.buffer,instanceAttributesBuffer:c.buffer,renderInstructions:x.buffer},e);O.postMessage(a,[l.buffer,c.buffer,s.buffer,x.buffer]);break}case S:{const t=[],n=[],r=e.customAttributesSize,x=new Float32Array(e.renderInstructions);let o=0;for(;o<x.length;)o=R(x,o,t,n,r);const i=Uint32Array.from(n),f=Float32Array.from(t),u=Float32Array.from([]),s=Object.assign({indicesBuffer:i.buffer,vertexAttributesBuffer:f.buffer,instanceAttributesBuffer:u.buffer,renderInstructions:x.buffer},e);O.postMessage(s,[f.buffer,u.buffer,i.buffer,x.buffer]);break}}};';return new Worker(typeof Blob>"u"?"data:application/javascript;base64,"+Buffer.from(i,"binary").toString("base64"):URL.createObjectURL(new Blob([i],{type:"application/javascript"})))}var pe={GENERATE_POLYGON_BUFFERS:"GENERATE_POLYGON_BUFFERS",GENERATE_POINT_BUFFERS:"GENERATE_POINT_BUFFERS",GENERATE_LINE_STRING_BUFFERS:"GENERATE_LINE_STRING_BUFFERS"};function Ot(i,e){e=e||[];let o=256,t=o-1,n=Math.floor(i/o/o/o)/t,r=Math.floor(i/o/o)%o/t,s=Math.floor(i/o)%o/t,a=i%o/t;return e[0]=n*256*255+r*255,e[1]=s*256*255+a*255,e}function It(i){let e=0,o=256,t=o-1;return e+=Math.round(i[0]*o*o*o*t),e+=Math.round(i[1]*o*o*t),e+=Math.round(i[2]*o*t),e+=Math.round(i[3]*t),e}function De(i,e,o,t){let n=0;for(let r in e){let s=e[r],a=s.callback.call(o,o.feature),l=a?.[0]??a;l===Ce&&console.warn('The "has" operator might return false positives.'),l===void 0?l=Ce:l===null&&(l=0),i[t+n++]=l,!(!s.size||s.size===1)&&(i[t+n++]=a[1],!(s.size<3)&&(i[t+n++]=a[2],!(s.size<4)&&(i[t+n++]=a[3])))}return n}function oe(i){return Object.keys(i).reduce((e,o)=>e+(i[o].size||1),0)}function Bt(i,e,o,t){let n=(2+oe(o))*i.geometriesCount;(!e||e.length!==n)&&(e=new Float32Array(n));let r=[],s=0;for(let a in i.entries){let l=i.entries[a];for(let c=0,u=l.flatCoordss.length;c<u;c++)r[0]=l.flatCoordss[c][0],r[1]=l.flatCoordss[c][1],O(t,r),e[s++]=r[0],e[s++]=r[1],s+=De(e,o,l,s)}return e}function $t(i,e,o,t){let n=3*i.verticesCount+(1+oe(o))*i.geometriesCount;(!e||e.length!==n)&&(e=new Float32Array(n));let r=[],s=0;for(let a in i.entries){let l=i.entries[a];for(let c=0,u=l.flatCoordss.length;c<u;c++){r.length=l.flatCoordss[c].length,Se(l.flatCoordss[c],0,r.length,3,t,r,3),s+=De(e,o,l,s),e[s++]=r.length/3;for(let h=0,f=r.length;h<f;h+=3)e[s++]=r[h],e[s++]=r[h+1],e[s++]=r[h+2]}}return e}function Zt(i,e,o,t){let n=2*i.verticesCount+(1+oe(o))*i.geometriesCount+i.ringsCount;(!e||e.length!==n)&&(e=new Float32Array(n));let r=[],s=0;for(let a in i.entries){let l=i.entries[a];for(let c=0,u=l.flatCoordss.length;c<u;c++){r.length=l.flatCoordss[c].length,Se(l.flatCoordss[c],0,r.length,2,t,r),s+=De(e,o,l,s),e[s++]=l.ringsVerticesCounts[c].length;for(let h=0,f=l.ringsVerticesCounts[c].length;h<f;h++)e[s++]=l.ringsVerticesCounts[c][h];for(let h=0,f=r.length;h<f;h+=2)e[s++]=r[h],e[s++]=r[h+1]}}return e}function ge(i){return(JSON.stringify(i).split("").reduce((o,t)=>(o<<5)-o+t.charCodeAt(0),0)>>>0).toString()}function Te(i,e,o,t){if(`${t}radius`in i&&t!=="icon-"){let n=g(o,i[`${t}radius`],y);if(`${t}radius2`in i){let r=g(o,i[`${t}radius2`],y);n=`max(${n}, ${r})`}`${t}stroke-width`in i&&(n=`(${n} + ${g(o,i[`${t}stroke-width`],y)} * 0.5)`),e.setSymbolSizeExpression(`vec2(${n} * 2. + 0.5)`)}if(`${t}scale`in i){let n=g(o,i[`${t}scale`],j);e.setSymbolSizeExpression(`${e.getSymbolSizeExpression()} * ${n}`)}`${t}displacement`in i&&e.setSymbolOffsetExpression(g(o,i[`${t}displacement`],Z)),`${t}rotation`in i&&e.setSymbolRotationExpression(g(o,i[`${t}rotation`],y)),`${t}rotate-with-view`in i&&e.setSymbolRotateWithView(!!i[`${t}rotate-with-view`])}function jt(i,e,o,t,n){let r="vec4(0.)";if(e!==null&&(r=e),o!==null&&t!==null){let l=`smoothstep(-${t} + 0.63, -${t} - 0.58, ${i})`;r=`mix(${o}, ${r}, ${l})`}let s=`(1.0 - smoothstep(-0.63, 0.58, ${i}))`,a=`${r} * vec4(1.0, 1.0, 1.0, ${s})`;return n!==null&&(a=`${a} * vec4(1.0, 1.0, 1.0, ${n})`),a}function Le(i,e,o,t,n){let r=new Image;r.crossOrigin=i[`${t}cross-origin`]===void 0?"anonymous":i[`${t}cross-origin`],re(typeof i[`${t}src`]=="string",`WebGL layers do not support expressions for the ${t}src style property`),r.src=i[`${t}src`],o[`u_texture${n}_size`]=()=>r.complete?[r.width,r.height]:[0,0],e.addUniform(`u_texture${n}_size`,"vec2");let s=`u_texture${n}_size`;return o[`u_texture${n}`]=r,e.addUniform(`u_texture${n}`,"sampler2D"),s}function ke(i,e,o,t,n){let r=g(o,i[`${e}offset`],j);if(`${e}offset-origin`in i)switch(i[`${e}offset-origin`]){case"top-right":r=`vec2(${t}.x, 0.) + ${n} * vec2(-1., 0.) + ${r} * vec2(-1., 1.)`;break;case"bottom-left":r=`vec2(0., ${t}.y) + ${n} * vec2(0., -1.) + ${r} * vec2(1., -1.)`;break;case"bottom-right":r=`${t} - ${n} - ${r}`;break;default:}return r}function no(i,e,o,t){t.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,Te(i,e,t,"circle-");let n=null;"circle-opacity"in i&&(n=g(t,i["circle-opacity"],y));let r="coordsPx";"circle-scale"in i&&(r=`coordsPx / ${g(t,i["circle-scale"],j)}`);let s=null;"circle-fill-color"in i&&(s=g(t,i["circle-fill-color"],I));let a=null;"circle-stroke-color"in i&&(a=g(t,i["circle-stroke-color"],I));let l=g(t,i["circle-radius"],y),c=null;"circle-stroke-width"in i&&(c=g(t,i["circle-stroke-width"],y),l=`(${l} + ${c} * 0.5)`);let u=`circleDistanceField(${r}, ${l})`,h=jt(u,s,a,c,n);e.setSymbolColorExpression(h)}function ro(i,e,o,t){t.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,t.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round(beta / alpha) * alpha; // angle in sector
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  vec2 tipToPoint = inSector + vec2(-radius, 0.);
  vec2 edgeNormal = vec2(radius2 * sin(alpha * 0.5), -radius2 * cos(alpha * 0.5) + radius);
  return dot(normalize(edgeNormal), tipToPoint);
}`,t.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float radiusIn = radius * cos(PI / numPoints);
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round((beta - alpha * 0.5) / alpha) * alpha + alpha * 0.5; // angle in sector from mid
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  return inSector.x - radiusIn;
}`,Te(i,e,t,"shape-");let n=null;"shape-opacity"in i&&(n=g(t,i["shape-opacity"],y));let r="coordsPx";"shape-scale"in i&&(r=`coordsPx / ${g(t,i["shape-scale"],j)}`);let s=null;"shape-fill-color"in i&&(s=g(t,i["shape-fill-color"],I));let a=null;"shape-stroke-color"in i&&(a=g(t,i["shape-stroke-color"],I));let l=null;"shape-stroke-width"in i&&(l=g(t,i["shape-stroke-width"],y));let c=g(t,i["shape-points"],y),u="0.";"shape-angle"in i&&(u=g(t,i["shape-angle"],y));let h,f=g(t,i["shape-radius"],y);if(l!==null&&(f=`${f} + ${l} * 0.5`),"shape-radius2"in i){let x=g(t,i["shape-radius2"],y);l!==null&&(x=`${x} + ${l} * 0.5`),h=`starDistanceField(${r}, ${c}, ${f}, ${x}, ${u})`}else h=`regularDistanceField(${r}, ${c}, ${f}, ${u})`;let w=jt(h,s,a,l,n);e.setSymbolColorExpression(w)}function io(i,e,o,t){let n="vec4(1.0)";"icon-color"in i&&(n=g(t,i["icon-color"],I)),"icon-opacity"in i&&(n=`${n} * vec4(1.0, 1.0, 1.0, ${g(t,i["icon-opacity"],y)})`);let r=ge(i["icon-src"]),s=Le(i,e,o,"icon-",r);if(e.setSymbolColorExpression(`${n} * texture2D(u_texture${r}, v_texCoord)`).setSymbolSizeExpression(s),"icon-width"in i&&"icon-height"in i&&e.setSymbolSizeExpression(`vec2(${g(t,i["icon-width"],y)}, ${g(t,i["icon-height"],y)})`),"icon-offset"in i&&"icon-size"in i){let a=g(t,i["icon-size"],Z),l=e.getSymbolSizeExpression();e.setSymbolSizeExpression(a);let c=ke(i,"icon-",t,"v_quadSizePx",a);e.setTextureCoordinateExpression(`(vec4((${c}).xyxy) + vec4(0., 0., ${a})) / (${l}).xyxy`)}if(Te(i,e,t,"icon-"),"icon-anchor"in i){let a=g(t,i["icon-anchor"],Z),l="1.0";"icon-scale"in i&&(l=g(t,i["icon-scale"],j));let c;i["icon-anchor-x-units"]==="pixels"&&i["icon-anchor-y-units"]==="pixels"?c=`${a} * ${l}`:i["icon-anchor-x-units"]==="pixels"?c=`${a} * vec2(vec2(${l}).x, v_quadSizePx.y)`:i["icon-anchor-y-units"]==="pixels"?c=`${a} * vec2(v_quadSizePx.x, vec2(${l}).x)`:c=`${a} * v_quadSizePx`;let u=`v_quadSizePx * vec2(0.5, -0.5) + ${c} * vec2(-1., 1.)`;if("icon-anchor-origin"in i)switch(i["icon-anchor-origin"]){case"top-right":u=`v_quadSizePx * -0.5 + ${c}`;break;case"bottom-left":u=`v_quadSizePx * 0.5 - ${c}`;break;case"bottom-right":u=`v_quadSizePx * vec2(-0.5, 0.5) + ${c} * vec2(1., -1.)`;break;default:}e.setSymbolOffsetExpression(`${e.getSymbolOffsetExpression()} + ${u}`)}}function so(i,e,o,t){if("stroke-color"in i&&e.setStrokeColorExpression(g(t,i["stroke-color"],I)),"stroke-pattern-src"in i){let n=ge(i["stroke-pattern-src"]),r=Le(i,e,o,"stroke-pattern-",n),s=r,a="vec2(0.)";"stroke-pattern-offset"in i&&"stroke-pattern-size"in i&&(s=g(t,i["stroke-pattern-size"],Z),a=ke(i,"stroke-pattern-",t,r,s));let l="0.";"stroke-pattern-spacing"in i&&(l=g(t,i["stroke-pattern-spacing"],y));let c="0.";"stroke-pattern-start-offset"in i&&(c=g(t,i["stroke-pattern-start-offset"],y)),t.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float startOffsetPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
  float currentLengthScaled = (currentLengthPx - startOffsetPx) * sampleSize.y / lineWidth;
  float spacingScaled = spacingPx * sampleSize.y / lineWidth;
  float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));
  float isInsideOfPattern = step(uCoordPx, sampleSize.x);
  float vCoordPx = (-currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;
  // make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  uCoordPx = clamp(uCoordPx, 0.5, sampleSize.x - 0.5);
  vCoordPx = clamp(vCoordPx, 0.5, sampleSize.y - 0.5);
  vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;
  return texture2D(texture, texCoord) * vec4(1.0, 1.0, 1.0, isInsideOfPattern);
}`;let u=`u_texture${n}`,h="1.";"stroke-color"in i&&(h=e.getStrokeColorExpression()),e.setStrokeColorExpression(`${h} * sampleStrokePattern(${u}, ${r}, ${a}, ${s}, ${l}, ${c}, currentLengthPx, currentRadiusRatio, v_width)`),t.functions.computeStrokePatternLength=`float computeStrokePatternLength(vec2 sampleSize, float spacingPx, float lineWidth) {
  float patternLengthPx = sampleSize.x / sampleSize.y * lineWidth;
  return patternLengthPx + spacingPx;
}`,e.setStrokePatternLengthExpression(`computeStrokePatternLength(${s}, ${l}, v_width)`)}if("stroke-width"in i&&e.setStrokeWidthExpression(g(t,i["stroke-width"],y)),"stroke-offset"in i&&e.setStrokeOffsetExpression(g(t,i["stroke-offset"],y)),"stroke-line-cap"in i&&e.setStrokeCapExpression(g(t,i["stroke-line-cap"],Q)),"stroke-line-join"in i&&e.setStrokeJoinExpression(g(t,i["stroke-line-join"],Q)),"stroke-miter-limit"in i&&e.setStrokeMiterLimitExpression(g(t,i["stroke-miter-limit"],y)),"stroke-line-dash"in i){t.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType, float lineWidth) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${k("square")}) {
    distanceSegment -= lineWidth * 0.5;
  } else if (capType == ${k("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - lineWidth * 0.5);
  }
  return distanceSegment;
}`;let n=i["stroke-line-dash"].map(x=>g(t,x,y));n.length%2===1&&(n=[...n,...n]);let r="0.";"stroke-line-dash-offset"in i&&(r=g(t,i["stroke-line-dash-offset"],y));let a=`dashDistanceField_${ge(i["stroke-line-dash"])}`,l=n.map((x,b)=>`float dashLength${b}`).join(", "),c=n.map((x,b)=>`dashLength${b}`).join(" + "),u="0.",h=`getSingleDashDistance(distance, radius, ${u}, dashLength0, totalDashLength, capType, lineWidth)`;for(let x=2;x<n.length;x+=2)u=`${u} + dashLength${x-2} + dashLength${x-1}`,h=`min(${h}, getSingleDashDistance(distance, radius, ${u}, dashLength${x}, totalDashLength, capType, lineWidth))`;t.functions[a]=`float ${a}(float distance, float radius, float capType, float lineWidth, ${l}) {
  float totalDashLength = ${c};
  return ${h};
}`;let f=n.map((x,b)=>`${x}`).join(", ");e.setStrokeDistanceFieldExpression(`${a}(currentLengthPx + ${r}, currentRadiusPx, capType, v_width, ${f})`);let w=n.join(" + ");e.getStrokePatternLengthExpression()&&(t.functions.combinePatternLengths=`float combinePatternLengths(float patternLength1, float patternLength2) {
  return patternLength1 * patternLength2;
}`,w=`combinePatternLengths(${e.getStrokePatternLengthExpression()}, ${w})`),e.setStrokePatternLengthExpression(w)}}function ao(i,e,o,t){if("fill-color"in i&&e.setFillColorExpression(g(t,i["fill-color"],I)),"fill-pattern-src"in i){let n=ge(i["fill-pattern-src"]),r=Le(i,e,o,"fill-pattern-",n),s=r,a="vec2(0.)";"fill-pattern-offset"in i&&"fill-pattern-size"in i&&(s=g(t,i["fill-pattern-size"],Z),a=ke(i,"fill-pattern-",t,r,s)),t.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {
  float scaleRatio = pow(2., mod(u_zoom + 0.5, 1.) - 0.5);
  vec2 pxRelativePos = pxPosition - pxOrigin;
  // rotate the relative position from origin by the current view rotation
  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));
  // sample position is computed according to the sample offset & size
  vec2 samplePos = mod(pxRelativePos / scaleRatio, sampleSize);
  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));
  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright
  return texture2D(texture, (samplePos + textureOffset) / textureSize);
}`;let l=`u_texture${n}`,c="1.";"fill-color"in i&&(c=e.getFillColorExpression()),e.setFillColorExpression(`${c} * sampleFillPattern(${l}, ${r}, ${a}, ${s}, pxOrigin, pxPos)`)}}function Ae(i,e,o){let t=ue(),n=new K,r={};if("icon-src"in i?io(i,n,r,t):"shape-points"in i?ro(i,n,r,t):"circle-radius"in i&&no(i,n,r,t),so(i,n,r,t),ao(i,n,r,t),o){let l=g(t,o,ie);n.setFragmentDiscardExpression(`!${l}`)}let s={};function a(l,c,u,h){if(!t[l])return;let f=Pt(u),w=Et(u);n.addAttribute(`a_${c}`,f),s[c]={size:w,callback:h}}return a("geometryType",bt,Q,l=>Re(gt(l.getGeometry()))),a("featureId",_t,Q|y,l=>{let c=l.getId()??null;return typeof c=="string"?Re(c):c}),de(n,t),{builder:n,attributes:S(S({},s),fe(t)),uniforms:S(S({},r),he(t,e))}}var lo=[],Ne;function co(){return Ne||(Ne=Vt()),Ne}var uo=0,L={POSITION:"a_position",LOCAL_POSITION:"a_localPosition",SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",MEASURE_START:"a_measureStart",MEASURE_END:"a_measureEnd",ANGLE_TANGENT_SUM:"a_angleTangentSum",JOIN_ANGLES:"a_joinAngles",DISTANCE_LOW:"a_distanceLow",DISTANCE_HIGH:"a_distanceHigh"},Ve=class{constructor(e,o,t,n){this.helper_,this.hitDetectionEnabled_=!!n,this.styleShaders=ho(e,o),this.customAttributes_={},this.uniforms_={},this.hitDetectionEnabled_&&(this.customAttributes_.hitColor={callback(){return Ot(this.ref,lo)},size:2});for(let r of this.styleShaders){for(let s in r.attributes)s in this.customAttributes_||(this.customAttributes_[s]=r.attributes[s]);for(let s in r.uniforms)s in this.uniforms_||(this.uniforms_[s]=r.uniforms[s])}this.renderPasses_=this.styleShaders.map(r=>{let s={},a=Object.entries(this.customAttributes_).map(([l,c])=>({name:l in r.attributes||l==="hitColor"?`a_${l}`:null,size:c.size||1,type:_.FLOAT}));return r.builder.getFillVertexShader()&&(s.fillRenderPass={vertexShader:r.builder.getFillVertexShader(),fragmentShader:r.builder.getFillFragmentShader(),attributesDesc:[{name:L.POSITION,size:2,type:_.FLOAT},...a],instancedAttributesDesc:[],instancePrimitiveVertexCount:3}),r.builder.getStrokeVertexShader()&&(s.strokeRenderPass={vertexShader:r.builder.getStrokeVertexShader(),fragmentShader:r.builder.getStrokeFragmentShader(),attributesDesc:[{name:L.LOCAL_POSITION,size:2,type:_.FLOAT}],instancedAttributesDesc:[{name:L.SEGMENT_START,size:2,type:_.FLOAT},{name:L.MEASURE_START,size:1,type:_.FLOAT},{name:L.SEGMENT_END,size:2,type:_.FLOAT},{name:L.MEASURE_END,size:1,type:_.FLOAT},{name:L.JOIN_ANGLES,size:2,type:_.FLOAT},{name:L.DISTANCE_LOW,size:1,type:_.FLOAT},{name:L.DISTANCE_HIGH,size:1,type:_.FLOAT},{name:L.ANGLE_TANGENT_SUM,size:1,type:_.FLOAT},...a],instancePrimitiveVertexCount:6}),r.builder.getSymbolVertexShader()&&(s.symbolRenderPass={vertexShader:r.builder.getSymbolVertexShader(),fragmentShader:r.builder.getSymbolFragmentShader(),attributesDesc:[{name:L.LOCAL_POSITION,size:2,type:_.FLOAT}],instancedAttributesDesc:[{name:L.POSITION,size:2,type:_.FLOAT},...a],instancePrimitiveVertexCount:6}),s}),this.hasFill_=this.renderPasses_.some(r=>r.fillRenderPass),this.hasStroke_=this.renderPasses_.some(r=>r.strokeRenderPass),this.hasSymbol_=this.renderPasses_.some(r=>r.symbolRenderPass),this.setHelper(t)}generateBuffers(e,o){return We(this,null,function*(){if(e.isEmpty())return null;let t=this.generateRenderInstructions_(e,o),[n,r,s]=yield Promise.all([this.generateBuffersForType_(t.polygonInstructions,"Polygon",o),this.generateBuffersForType_(t.lineStringInstructions,"LineString",o),this.generateBuffersForType_(t.pointInstructions,"Point",o)]),a=Y(N(),o);return{polygonBuffers:n,lineStringBuffers:r,pointBuffers:s,invertVerticesTransform:a}})}generateRenderInstructions_(e,o){let t=this.hasFill_?Zt(e.polygonBatch,new Float32Array(0),this.customAttributes_,o):null,n=this.hasStroke_?$t(e.lineStringBatch,new Float32Array(0),this.customAttributes_,o):null,r=this.hasSymbol_?Bt(e.pointBatch,new Float32Array(0),this.customAttributes_,o):null;return{polygonInstructions:t,lineStringInstructions:n,pointInstructions:r}}generateBuffersForType_(e,o,t){if(e===null)return null;let n=uo++,r;switch(o){case"Polygon":r=pe.GENERATE_POLYGON_BUFFERS;break;case"LineString":r=pe.GENERATE_LINE_STRING_BUFFERS;break;case"Point":r=pe.GENERATE_POINT_BUFFERS;break;default:}let s={id:n,type:r,renderInstructions:e.buffer,renderInstructionsTransform:t,customAttributesSize:oe(this.customAttributes_)},a=co();return a.postMessage(s,[e.buffer]),e=null,new Promise(l=>{let c=u=>{let h=u.data;if(h.id!==n||(a.removeEventListener("message",c),!this.helper_.getGL()))return;let f=new ae(wt,se).fromArrayBuffer(h.indicesBuffer),w=new ae(Pe,se).fromArrayBuffer(h.vertexAttributesBuffer),x=new ae(Pe,se).fromArrayBuffer(h.instanceAttributesBuffer);this.helper_.flushBufferData(f),this.helper_.flushBufferData(w),this.helper_.flushBufferData(x),l([f,w,x])};a.addEventListener("message",c)})}render(e,o,t){for(let n of this.renderPasses_)n.fillRenderPass&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],e.polygonBuffers[2],n.fillRenderPass,o,t),n.strokeRenderPass&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],e.lineStringBuffers[2],n.strokeRenderPass,o,t),n.symbolRenderPass&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],e.pointBuffers[2],n.symbolRenderPass,o,t)}renderInternal_(e,o,t,n,r,s){let a=e.getSize();if(a===0)return;let l=n.instancedAttributesDesc.length;if(this.helper_.useProgram(n.program,r),this.helper_.bindBuffer(o),this.helper_.bindBuffer(e),this.helper_.enableAttributes(n.attributesDesc),this.helper_.bindBuffer(t),this.helper_.enableAttributesInstanced(n.instancedAttributesDesc),s(),l){let c=n.instancedAttributesDesc.reduce((h,f)=>h+(f.size||1),0),u=t.getSize()/c;this.helper_.drawElementsInstanced(0,a,u)}else this.helper_.drawElements(0,a)}setHelper(e,o=null){this.helper_=e;for(let t of this.renderPasses_)t.fillRenderPass&&(t.fillRenderPass.program=this.helper_.getProgram(t.fillRenderPass.fragmentShader,t.fillRenderPass.vertexShader)),t.strokeRenderPass&&(t.strokeRenderPass.program=this.helper_.getProgram(t.strokeRenderPass.fragmentShader,t.strokeRenderPass.vertexShader)),t.symbolRenderPass&&(t.symbolRenderPass.program=this.helper_.getProgram(t.symbolRenderPass.fragmentShader,t.symbolRenderPass.vertexShader));this.helper_.addUniforms(this.uniforms_),o&&(o.polygonBuffers&&(this.helper_.flushBufferData(o.polygonBuffers[0]),this.helper_.flushBufferData(o.polygonBuffers[1]),this.helper_.flushBufferData(o.polygonBuffers[2])),o.lineStringBuffers&&(this.helper_.flushBufferData(o.lineStringBuffers[0]),this.helper_.flushBufferData(o.lineStringBuffers[1]),this.helper_.flushBufferData(o.lineStringBuffers[2])),o.pointBuffers&&(this.helper_.flushBufferData(o.pointBuffers[0]),this.helper_.flushBufferData(o.pointBuffers[1]),this.helper_.flushBufferData(o.pointBuffers[2])))}},zt=Ve;function ho(i,e){let o=Array.isArray(i)?i:[i];if("style"in o[0]){let t=[],n=o,r=[];for(let s of n){let a=Array.isArray(s.style)?s.style:[s.style],l=s.filter;s.else&&r.length&&(l=["all",...r.map(u=>["!",u])],s.filter&&l.push(s.filter),l.length<3&&(l=l[1])),s.filter&&r.push(s.filter);let c=a.map(u=>Ae(u,e,l));t.push(...c)}return t}return"builder"in o[0]?o:o.map(t=>Ae(t,e,null))}var A=new Uint8Array(4),Oe=class{constructor(e,o){this.helper_=e;let t=e.getGL();this.texture_=t.createTexture(),this.framebuffer_=t.createFramebuffer(),this.depthbuffer_=t.createRenderbuffer(),this.size_=o||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}setSize(e){it(e,this.size_)||(this.size_[0]=e[0],this.size_[1]=e[1],this.updateSize_())}getSize(){return this.size_}clearCachedData(){this.dataCacheDirty_=!0}readAll(){if(this.dataCacheDirty_){let e=this.size_,o=this.helper_.getGL();o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer_),o.readPixels(0,0,e[0],e[1],o.RGBA,o.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_}readPixel(e,o){if(e<0||o<0||e>this.size_[0]||o>=this.size_[1])return A[0]=0,A[1]=0,A[2]=0,A[3]=0,A;this.readAll();let t=Math.floor(e)+(this.size_[1]-Math.floor(o)-1)*this.size_[0];return A[0]=this.data_[t*4],A[1]=this.data_[t*4+1],A[2]=this.data_[t*4+2],A[3]=this.data_[t*4+3],A}getTexture(){return this.texture_}getFramebuffer(){return this.framebuffer_}getDepthbuffer(){return this.depthbuffer_}updateSize_(){let e=this.size_,o=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer_),o.viewport(0,0,e[0],e[1]),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,this.texture_,0),o.bindRenderbuffer(o.RENDERBUFFER,this.depthbuffer_),o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_COMPONENT16,e[0],e[1]),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,this.depthbuffer_),this.data_=new Uint8Array(e[0]*e[1]*4)}},Wt=Oe;function Gt(i,e){let o=i.viewState.projection,n=e.getSource().getWrapX()&&o.canWrapX(),r=o.getExtent(),s=i.extent,a=n?ne(r):null,l=n?Math.ceil((s[2]-r[2])/a)+1:1;return[n?Math.floor((s[0]-r[0])/a):0,l,a]}var q=ze(S({},yt),{RENDER_EXTENT:"u_renderExtent",PATTERN_ORIGIN:"u_patternOrigin",GLOBAL_ALPHA:"u_globalAlpha"}),Ie=class extends vt{constructor(e,o){let t={[q.RENDER_EXTENT]:[0,0,0,0],[q.PATTERN_ORIGIN]:[0,0],[q.GLOBAL_ALPHA]:1};super(e,{uniforms:t,postProcesses:o.postProcesses}),this.hitDetectionEnabled_=!o.disableHitDetection,this.hitRenderTarget_,this.sourceRevision_=-1,this.previousExtent_=qe(),this.currentTransform_=N(),this.tmpCoords_=[0,0],this.tmpTransform_=N(),this.tmpMat4_=xt(),this.currentFrameStateTransform_=N(),this.styleVariables_={},this.style_=[],this.styleRenderer_=null,this.buffers_=null,this.applyOptions_(o),this.batch_=new Nt,this.initialFeaturesAdded_=!1,this.sourceListenKeys_=null}addInitialFeatures_(e){let o=this.getLayer().getSource(),t=be(),n;t&&(n=tt(t,e.viewState.projection)),this.batch_.addFeatures(o.getFeatures(),n),this.sourceListenKeys_=[X(o,ee.ADDFEATURE,this.handleSourceFeatureAdded_.bind(this,n)),X(o,ee.CHANGEFEATURE,this.handleSourceFeatureChanged_.bind(this,n),this),X(o,ee.REMOVEFEATURE,this.handleSourceFeatureDelete_,this),X(o,ee.CLEAR,this.handleSourceFeatureClear_,this)]}applyOptions_(e){this.styleVariables_=e.variables,this.style_=e.style}createRenderers_(){this.buffers_=null,this.styleRenderer_=new zt(this.style_,this.styleVariables_,this.helper,this.hitDetectionEnabled_)}reset(e){this.applyOptions_(e),this.helper&&this.createRenderers_(),super.reset(e)}afterHelperCreated(){this.styleRenderer_?this.styleRenderer_.setHelper(this.helper,this.buffers_):this.createRenderers_(),this.hitDetectionEnabled_&&(this.hitRenderTarget_=new Wt(this.helper))}handleSourceFeatureAdded_(e,o){let t=o.feature;this.batch_.addFeature(t,e)}handleSourceFeatureChanged_(e,o){let t=o.feature;this.batch_.changeFeature(t,e)}handleSourceFeatureDelete_(e){let o=e.feature;this.batch_.removeFeature(o)}handleSourceFeatureClear_(){this.batch_.clear()}applyUniforms_(e){lt(this.tmpTransform_,this.currentFrameStateTransform_),at(this.tmpTransform_,e),this.helper.setUniformMatrixValue(q.PROJECTION_MATRIX,Ee(this.tmpMat4_,this.tmpTransform_)),Y(this.tmpTransform_,this.tmpTransform_),this.helper.setUniformMatrixValue(q.SCREEN_TO_WORLD_MATRIX,Ee(this.tmpMat4_,this.tmpTransform_)),this.tmpCoords_[0]=0,this.tmpCoords_[1]=0,Y(this.tmpTransform_,e),O(this.tmpTransform_,this.tmpCoords_),this.helper.setUniformFloatVec2(q.PATTERN_ORIGIN,this.tmpCoords_)}renderFrame(e){let o=this.helper.getGL();this.preRender(o,e);let[t,n,r]=Gt(e,this.getLayer());this.helper.prepareDraw(e),this.renderWorlds(e,!1,t,n,r),this.helper.finalizeDraw(e,this.dispatchPreComposeEvent,this.dispatchPostComposeEvent);let s=this.helper.getCanvas();return this.hitDetectionEnabled_&&(this.renderWorlds(e,!0,t,n,r),this.hitRenderTarget_.clearCachedData()),this.postRender(o,e),s}prepareFrameInternal(e){this.initialFeaturesAdded_||(this.addInitialFeatures_(e),this.initialFeaturesAdded_=!0);let o=this.getLayer(),t=o.getSource(),n=e.viewState,r=!e.viewHints[$.ANIMATING]&&!e.viewHints[$.INTERACTING],s=!Je(this.previousExtent_,e.extent),a=this.sourceRevision_<t.getRevision();if(a&&(this.sourceRevision_=t.getRevision()),r&&(s||a)){let l=n.projection,c=n.resolution,u=o instanceof z?o.getRenderBuffer():0,h=Ke(e.extent,u*c),f=be();f?t.loadFeatures(ot(h,f),nt(c,l),f):t.loadFeatures(h,c,l),this.ready=!1;let w=this.helper.makeProjectionTransform(e,N());this.styleRenderer_.generateBuffers(this.batch_,w).then(x=>{this.buffers_&&this.disposeBuffers(this.buffers_),this.buffers_=x,this.ready=!0,this.getLayer().changed()}),this.previousExtent_=e.extent.slice()}return!0}renderWorlds(e,o,t,n,r){let s=t;o&&(this.hitRenderTarget_.setSize([Math.floor(e.size[0]/2),Math.floor(e.size[1]/2)]),this.helper.prepareDrawToRenderTarget(e,this.hitRenderTarget_,!0));do this.helper.makeProjectionTransform(e,this.currentFrameStateTransform_),ct(this.currentFrameStateTransform_,s*r,0),this.buffers_&&this.styleRenderer_.render(this.buffers_,e,()=>{this.applyUniforms_(this.buffers_.invertVerticesTransform),this.helper.applyHitDetectionUniform(o)});while(++s<n)}forEachFeatureAtCoordinate(e,o,t,n,r){if(re(this.hitDetectionEnabled_,"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has been disabled using the `disableHitDetection: true` option."),!this.styleRenderer_||!this.hitDetectionEnabled_)return;let s=O(o.coordinateToPixelTransform,e.slice()),a=this.hitRenderTarget_.readPixel(s[0]/2,s[1]/2),l=[a[0]/255,a[1]/255,a[2]/255,a[3]/255],c=It(l),u=this.batch_.getFeatureFromRef(c);if(u)return n(u,this.getLayer(),null)}disposeBuffers(e){let o=t=>{for(let n of t)n&&this.helper.deleteBuffer(n)};e.pointBuffers&&o(e.pointBuffers),e.lineStringBuffers&&o(e.lineStringBuffers),e.polygonBuffers&&o(e.polygonBuffers)}disposeInternal(){this.buffers_&&this.disposeBuffers(this.buffers_),this.sourceListenKeys_&&(this.sourceListenKeys_.forEach(function(e){st(e)}),this.sourceListenKeys_=null),super.disposeInternal()}renderDeclutter(){}},me=Ie;var V={BLUR:"blur",GRADIENT:"gradient",RADIUS:"radius"},fo=["#00f","#0ff","#0f0","#ff0","#f00"],Be=class extends z{constructor(e){e=e||{};let o=Object.assign({},e);delete o.gradient,delete o.radius,delete o.blur,delete o.weight,super(o),this.filter_=e.filter??!0,this.styleVariables_=e.variables||{},this.gradient_=null,this.addChangeListener(V.GRADIENT,this.handleGradientChanged_),this.setGradient(e.gradient?e.gradient:fo),this.setBlur(e.blur!==void 0?e.blur:15),this.setRadius(e.radius!==void 0?e.radius:8);let t=e.weight?e.weight:"weight";this.weight_=t,this.setRenderOrder(null)}getBlur(){return this.get(V.BLUR)}getGradient(){return this.get(V.GRADIENT)}getRadius(){return this.get(V.RADIUS)}handleGradientChanged_(){this.gradient_=po(this.getGradient())}setBlur(e){let o=this.get(V.BLUR);if(this.set(V.BLUR,e),typeof e=="number"&&typeof o=="number"){this.changed();return}this.clearRenderer()}setGradient(e){this.set(V.GRADIENT,e)}setRadius(e){let o=this.get(V.RADIUS);if(this.set(V.RADIUS,e),typeof e=="number"&&typeof o=="number"){this.changed();return}this.clearRenderer()}setFilter(e){this.filter_=e,this.changed(),this.clearRenderer()}setWeight(e){this.weight_=e,this.changed(),this.clearRenderer()}createRenderer(){let e=new K,o=ue(),t=g(o,this.filter_,ie),n=g(o,this.getRadius(),y),r=g(o,this.getBlur(),y),s={};typeof this.getBlur()=="number"&&(r="a_blur",s.a_blur=()=>this.getBlur(),e.addUniform("a_blur","float")),typeof this.getRadius()=="number"&&(n="a_radius",s.a_radius=()=>this.getRadius(),e.addUniform("a_radius","float"));let a={},l=null;if(typeof this.weight_=="string"||typeof this.weight_=="function"){let h=typeof this.weight_=="string"?f=>f.get(this.weight_):this.weight_;a.prop_weight={size:1,callback:f=>{let w=h(f);return w!==void 0?et(w,0,1):1}},l="a_prop_weight",e.addAttribute("a_prop_weight","float")}else{let h=["clamp",this.weight_,0,1];l=g(o,h,y)}e.addFragmentShaderFunction(`float getBlurSlope() {
  float blur = max(1., ${r});
  float radius = ${n};
  return radius / blur;
}`).setSymbolSizeExpression(`vec2(${n} + ${r}) * 2.`).setSymbolColorExpression(`vec4(smoothstep(0., 1., (1. - length(coordsPx * 2. / v_quadSizePx)) * getBlurSlope()) * ${l})`).setStrokeColorExpression(`vec4(smoothstep(0., 1., (1. - length(currentRadiusPx * 2. / v_width)) * getBlurSlope()) * ${l})`).setStrokeWidthExpression(`(${n} + ${r}) * 2.`).setFillColorExpression(`vec4(${l})`).setFragmentDiscardExpression(`!${t}`),de(e,o);let c=fe(o),u=he(o,this.styleVariables_);return new me(this,{className:this.getClassName(),variables:this.styleVariables_,style:{builder:e,attributes:S(S({},c),a),uniforms:S(S({},u),s)},disableHitDetection:!1,postProcesses:[{fragmentShader:`
            precision mediump float;

            uniform sampler2D u_image;
            uniform sampler2D u_gradientTexture;
            uniform float u_opacity;

            varying vec2 v_texCoord;

            void main() {
              vec4 color = texture2D(u_image, v_texCoord);
              gl_FragColor.a = color.a * u_opacity;
              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;
              gl_FragColor.rgb *= gl_FragColor.a;
            }`,uniforms:{u_gradientTexture:()=>this.gradient_,u_opacity:()=>this.getOpacity()}}]})}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}renderDeclutter(){}};function po(i){let t=ht(1,256),n=t.createLinearGradient(0,0,1,256),r=1/(i.length-1);for(let s=0,a=i.length;s<a;++s)n.addColorStop(s*r,i[s]);return t.fillStyle=n,t.fillRect(0,0,1,256),t.canvas}var Ut=Be;var go=["*"],xe=class i{wolClassName=d();wolOpacity=m();wolVisible=m();wolExtent=m();wolZIndex=m();wolMinResolution=m();wolMaxResolution=m();wolMinZoom=m();wolMaxZoom=m();wolGradient=m();wolRadius=m();wolBlur=m();wolWeight=d();wolFilter=d();wolVariables=d();wolSource=m();wolProperties=d();wolChange=p();wolError=p();wolPostRender=p();wolPreRender=p();wolPropertyChange=p();wolSourceReady=p();instance;constructor(){let e=v(E),o=B("Heatmap"),t={};R(()=>{let n=new Ut({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),gradient:this.wolGradient(),radius:this.wolRadius(),blur:this.wolBlur(),weight:this.wolWeight(),filter:this.wolFilter(),variables:this.wolVariables(),source:this.wolSource(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:blur"]=n.on("change:blur",()=>this.wolBlur.set(n.getBlur())),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:gradient"]=n.on("change:gradient",()=>this.wolGradient.set(n.getGradient())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:radius"]=n.on("change:radius",()=>this.wolRadius.set(n.getRadius())),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex())),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{D(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolBlur":this.instance.setBlur(t.currentValue);break;case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolFilter":this.instance.setFilter(t.currentValue);break;case"wolGradient":this.instance.setGradient(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue??{});break;case"wolRadius":this.instance.setRadius(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue??null);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolWeight":this.instance.setWeight(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break;case"wolVariables":this.instance.updateStyleVariables(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["wol-heatmap-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolGradient:[1,"wolGradient"],wolRadius:[1,"wolRadius"],wolBlur:[1,"wolBlur"],wolWeight:[1,"wolWeight"],wolFilter:[1,"wolFilter"],wolVariables:[1,"wolVariables"],wolSource:[1,"wolSource"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolGradient:"wolGradientChange",wolRadius:"wolRadiusChange",wolBlur:"wolBlurChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolHeatmapLayer"],features:[P],ngContentSelectors:go,decls:1,vars:0,template:function(o,t){o&1&&(F(),M(0))},encapsulation:2,changeDetection:0})};var $e=class extends Ct{constructor(e){super(e),this.vectorRenderer_=new Mt(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=N(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);let o=O(this.coordinateToVectorPixelTransform_,O(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(o)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){let o=e.pixelRatio,t=e.viewState,n=t.resolution,r=e.viewHints,s=this.vectorRenderer_,a=e.extent;this.layerImageRatio_!==1&&(a=a.slice(0),Qe(a,this.layerImageRatio_));let l=ne(a)/n,c=Xe(a)/n;if(!r[$.ANIMATING]&&!r[$.INTERACTING]&&!Ye(a)){s.useContainer(null,null);let u=s.context,h=e.layerStatesArray[e.layerIndex],f=Object.assign({},h,{opacity:1}),w=Object.assign({},e,{extent:a,size:[l,c],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[f],layerIndex:0,declutter:null}),x=this.getLayer().getDeclutter();x&&(w.declutter={[x]:new pt(9)});let b=new Rt(a,n,o,u.canvas,function(J){s.prepareFrame(w)&&s.replayGroupChanged&&(s.clipping=!1,s.renderFrame(w,null),s.renderDeclutter(w),s.renderDeferred(w),J())});b.addEventListener(rt.CHANGE,()=>{if(b.getState()!==mt.LOADED)return;this.image=b;let J=b.getPixelRatio(),_e=Ft(b.getResolution())*o/J;this.renderedResolution=_e,this.coordinateToVectorPixelTransform_=ut(this.coordinateToVectorPixelTransform_,l/2,c/2,1/_e,-1/_e,0,-t.center[0],-t.center[1])}),b.load()}return this.image&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!this.getLayer().getSource()?.loading&&!!this.image}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,o,t,n,r){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,o,t,n,r):super.forEachFeatureAtCoordinate(e,o,t,n,r)}},Ht=$e;var Ze=class extends z{constructor(e){e=e||{};let o=Object.assign({},e);delete o.imageRatio,super(o),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new Ht(this)}},Kt=Ze;var mo=["*"],we=class i{wolClassName=d();wolOpacity=m();wolVisible=m();wolExtent=m();wolZIndex=m();wolMinResolution=m();wolMaxResolution=m();wolMinZoom=m();wolMaxZoom=m();wolRenderOrder=d();wolRenderBuffer=d();wolSource=m();wolMap=d();wolDeclutter=d();wolStyle=d();wolBackground=d();wolImageRatio=d();wolProperties=d();wolChange=p();wolError=p();wolPostRender=p();wolPreRender=p();wolPropertyChange=p();wolSourceReady=p();instance;constructor(){let e=v(E),o=B("VectorImageLayer"),t={};R(()=>{let n=new Kt({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),renderOrder:this.wolRenderOrder(),renderBuffer:this.wolRenderBuffer(),source:this.wolSource(),map:this.wolMap(),declutter:this.wolDeclutter(),style:this.wolStyle(),background:this.wolBackground(),imageRatio:this.wolImageRatio(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex()??0)),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{D(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolDeclutter":this.instance.setDeclutter(t.currentValue);break;case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolMap":this.instance.setMap(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue);break;case"wolStyle":this.instance.setStyle(t.currentValue);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["wol-vector-image-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolRenderOrder:[1,"wolRenderOrder"],wolRenderBuffer:[1,"wolRenderBuffer"],wolSource:[1,"wolSource"],wolMap:[1,"wolMap"],wolDeclutter:[1,"wolDeclutter"],wolStyle:[1,"wolStyle"],wolBackground:[1,"wolBackground"],wolImageRatio:[1,"wolImageRatio"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolVectorImageLayer"],features:[P],ngContentSelectors:mo,decls:1,vars:0,template:function(o,t){o&1&&(F(),M(0))},encapsulation:2,changeDetection:0})};var je=class extends ft{constructor(e){let o=Object.assign({},e);super(o),this.styleVariables_=e.variables||{},this.style_=e.style,this.hitDetectionDisabled_=!!e.disableHitDetection}createRenderer(){return new me(this,{style:this.style_,variables:this.styleVariables_,disableHitDetection:this.hitDetectionDisabled_})}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}setStyle(e){this.style_=e,this.clearRenderer(),this.changed()}},qt=je;var xo=["*"],ye=class i{wolClassName=d();wolOpacity=m();wolVisible=m();wolExtent=m();wolZIndex=m();wolMinResolution=m();wolMaxResolution=m();wolMinZoom=m();wolMaxZoom=m();wolSource=m();wolStyle=d.required();wolVariables=d();wolBackground=d();wolDisableHitDetection=d();wolProperties=d();wolChange=p();wolError=p();wolPostRender=p();wolPreRender=p();wolPropertyChange=p();wolSourceReady=p();instance;constructor(){let e=v(E),o=B("WebGLVectorLayer"),t={};R(()=>{let n=new qt({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),source:this.wolSource(),style:this.wolStyle(),variables:this.wolVariables(),background:this.wolBackground(),disableHitDetection:this.wolDisableHitDetection(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex()??0)),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{D(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance.dispose(),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue);break;case"wolStyle":this.instance.setStyle(t.currentValue);break;case"wolVariables":this.instance.updateStyleVariables(t.currentValue);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["wol-webgl-vector-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolSource:[1,"wolSource"],wolStyle:[1,"wolStyle"],wolVariables:[1,"wolVariables"],wolBackground:[1,"wolBackground"],wolDisableHitDetection:[1,"wolDisableHitDetection"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolWebGLVectorLayer"],features:[P],ngContentSelectors:xo,decls:1,vars:0,template:function(o,t){o&1&&(F(),M(0))},encapsulation:2,changeDetection:0})};function Jt(i){let o=v(W,{host:!0,optional:!0});if(o)return{setSource:t=>(o.getInstance()?.setSource(t),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};throw new Error(`No ClusterSource host found. Please wrap the ${i} component in a VectorLayer component.`)}var wo=["*"],ve=class i{wolAttributions=d();wolDistance=d();wolMinDistance=d();wolGeometryFunction=d();wolCreateCluster=d();wolSource=d();wolWrapX=d();wolProperties=d();wolAddFeature=p();wolChange=p();wolChangeFeature=p();wolClear=p();wolError=p();wolFeaturesLoadEnd=p();wolFeaturesLoadError=p();wolFeaturesLoadStart=p();wolPropertyChange=p();wolRemoveFeature=p();instance;constructor(){let e=v(E),o=Jt("Cluster"),t={},n;R(()=>{let r=new kt({attributions:this.wolAttributions(),distance:this.wolDistance(),minDistance:this.wolMinDistance(),geometryFunction:this.wolGeometryFunction(),createCluster:this.wolCreateCluster(),source:this.wolSource(),wrapX:this.wolWrapX()});this.wolProperties()&&r.setProperties(this.wolProperties()??{},!0),t.addfeature=r.on("addfeature",s=>{this.wolAddFeature.emit(s)}),t.change=r.on("change",s=>{this.wolChange.emit(s)}),t.changefeature=r.on("changefeature",s=>{this.wolChangeFeature.emit(s)}),t.clear=r.on("clear",s=>{this.wolClear.emit(s)}),t.error=r.on("error",s=>{this.wolError.emit(s)}),t.featuresloadend=r.on("featuresloadend",s=>{this.wolFeaturesLoadEnd.emit(s)}),t.featuresloaderror=r.on("featuresloaderror",s=>{this.wolFeaturesLoadError.emit(s)}),t.featuresloadstart=r.on("featuresloadstart",s=>{this.wolFeaturesLoadStart.emit(s)}),t.propertychange=r.on("propertychange",s=>{this.wolPropertyChange.emit(s)}),t.removefeature=r.on("removefeature",s=>{this.wolRemoveFeature.emit(s)}),Promise.resolve().then(()=>{n=o.setSource(r)}),this.instance=r}),e.onDestroy(()=>{D(Object.values(t)),n&&n(),this.instance?.setSource(null),this.instance=void 0})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolAttributions":this.instance.setAttributions(t.currentValue);break;case"wolDistance":this.instance.setDistance(t.currentValue);break;case"wolMinDistance":this.instance.setMinDistance(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue??{});break;case"wolSource":this.instance.setSource(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["wol-cluster-source"]],inputs:{wolAttributions:[1,"wolAttributions"],wolDistance:[1,"wolDistance"],wolMinDistance:[1,"wolMinDistance"],wolGeometryFunction:[1,"wolGeometryFunction"],wolCreateCluster:[1,"wolCreateCluster"],wolSource:[1,"wolSource"],wolWrapX:[1,"wolWrapX"],wolProperties:[1,"wolProperties"]},outputs:{wolAddFeature:"wolAddFeature",wolChange:"wolChange",wolChangeFeature:"wolChangeFeature",wolClear:"wolClear",wolError:"wolError",wolFeaturesLoadEnd:"wolFeaturesLoadEnd",wolFeaturesLoadError:"wolFeaturesLoadError",wolFeaturesLoadStart:"wolFeaturesLoadStart",wolPropertyChange:"wolPropertyChange",wolRemoveFeature:"wolRemoveFeature"},exportAs:["wolClusterSource"],features:[P],ngContentSelectors:wo,decls:1,vars:0,template:function(o,t){o&1&&(F(),M(0))},encapsulation:2,changeDetection:0})};function Xt(i){let e={host:!0,optional:!0},o=v(xe,e),t=v(we,e),n=v(W,e),r=v(ye,e),s=v(ve,e);if(s)return{setSource:a=>(s.getInstance()?.setSource(a),()=>{s.getInstance()?.setSource(null)}),getInstance:()=>s.getInstance()};if(o)return{setSource:a=>(o.getInstance()?.setSource(a),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};if(t)return{setSource:a=>(t.getInstance()?.setSource(a),()=>{t.getInstance()?.setSource(null)}),getInstance:()=>t.getInstance()};if(n)return{setSource:a=>(n.getInstance()?.setSource(a),()=>{n.getInstance()?.setSource(null)}),getInstance:()=>n.getInstance()};if(r)return{setSource:a=>(r.getInstance()?.setSource(a),()=>{r.getInstance()?.setSource(null)}),getInstance:()=>r.getInstance()};throw new Error(`No VectorSource host found. Please wrap the ${i} component in a HeatmapLayer, VectorImageLayer, VectorLayer or WebGLVectorLayer component.`)}var yo=["*"],Yt=class i{wolAttributions=d();wolFeatures=d();wolFormat=d();wolLoader=d();wolOverlaps=d();wolStrategy=d();wolUrl=d();wolUseSpatialIndex=d();wolWrapX=d();wolProperties=d();wolAddFeature=p();wolChange=p();wolChangeFeature=p();wolClear=p();wolError=p();wolFeaturesLoadEnd=p();wolFeaturesLoadError=p();wolFeaturesLoadStart=p();wolPropertyChange=p();wolRemoveFeature=p();vectorSourceInstance=Ue(void 0);constructor(){let e=v(E),o=Xt("VectorSource"),t={},n;R(()=>{let r=new Lt({attributions:this.wolAttributions(),features:this.wolFeatures(),format:this.wolFormat(),loader:this.wolLoader(),overlaps:this.wolOverlaps(),strategy:this.wolStrategy(),url:this.wolUrl(),useSpatialIndex:this.wolUseSpatialIndex(),wrapX:this.wolWrapX()});this.wolProperties()&&r.setProperties(this.wolProperties()??{},!0),t.addfeature=r.on("addfeature",s=>{this.wolAddFeature.emit(s)}),t.change=r.on("change",s=>{this.wolChange.emit(s)}),t.changefeature=r.on("changefeature",s=>{this.wolChangeFeature.emit(s)}),t.clear=r.on("clear",s=>{this.wolClear.emit(s)}),t.error=r.on("error",s=>{this.wolError.emit(s)}),t.featuresloadend=r.on("featuresloadend",s=>{this.wolFeaturesLoadEnd.emit(s)}),t.featuresloaderror=r.on("featuresloaderror",s=>{this.wolFeaturesLoadError.emit(s)}),t.featuresloadstart=r.on("featuresloadstart",s=>{this.wolFeaturesLoadStart.emit(s)}),t.propertychange=r.on("propertychange",s=>{this.wolPropertyChange.emit(s)}),t.removefeature=r.on("removefeature",s=>{this.wolRemoveFeature.emit(s)}),Promise.resolve().then(()=>{n=o.setSource(r)}),this.vectorSourceInstance.set(r)}),e.onDestroy(()=>{D(Object.values(t)),n&&n(),this.vectorSourceInstance.set(void 0)})}ngOnChanges(e){let o=this.vectorSourceInstance();if(o)for(let[t,n]of Object.entries(e))switch(t){case"wolAttributions":o.setAttributions(n.currentValue);break;case"wolLoader":o.setLoader(n.currentValue);break;case"wolProperties":o.setProperties(n.currentValue??{});break;case"wolUrl":o.setUrl(n.currentValue);break}}getInstance(){return this.vectorSourceInstance()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=C({type:i,selectors:[["wol-vector-source"]],inputs:{wolAttributions:[1,"wolAttributions"],wolFeatures:[1,"wolFeatures"],wolFormat:[1,"wolFormat"],wolLoader:[1,"wolLoader"],wolOverlaps:[1,"wolOverlaps"],wolStrategy:[1,"wolStrategy"],wolUrl:[1,"wolUrl"],wolUseSpatialIndex:[1,"wolUseSpatialIndex"],wolWrapX:[1,"wolWrapX"],wolProperties:[1,"wolProperties"]},outputs:{wolAddFeature:"wolAddFeature",wolChange:"wolChange",wolChangeFeature:"wolChangeFeature",wolClear:"wolClear",wolError:"wolError",wolFeaturesLoadEnd:"wolFeaturesLoadEnd",wolFeaturesLoadError:"wolFeaturesLoadError",wolFeaturesLoadStart:"wolFeaturesLoadStart",wolPropertyChange:"wolPropertyChange",wolRemoveFeature:"wolRemoveFeature"},exportAs:["wolVectorSource"],features:[P],ngContentSelectors:yo,decls:1,vars:0,template:function(o,t){o&1&&(F(),M(0))},encapsulation:2,changeDetection:0})};var Qt=class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=He({type:i});static \u0275inj=Ge({})};export{W as a,xe as b,we as c,ye as d,ve as e,Yt as f,Qt as g};
