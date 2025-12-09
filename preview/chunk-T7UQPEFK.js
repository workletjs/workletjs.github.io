import{a as me,b as fo,c as po}from"./chunk-O3KTUNGW.js";import{g as oo,h as no,i as ro,j as io,k as so,l as ao,m as ne,n as lo,o as co}from"./chunk-7BSN2A6W.js";import{c as uo,d as Qe,e as ho,f as et}from"./chunk-3ZX67TCU.js";import{a as zt,b as Ut,c as Xe,d as qe,e as Ht,f as A,g as Kt,k as De,l as Te,m as Je,n as j,p as Le,r as Xt,s as qt,t as Ye,u as m,v as Jt,w as Yt,x as ke,y as Ne,z as Ve}from"./chunk-KOEDKYEJ.js";import{a as Gt,b as Ke}from"./chunk-3QYH437L.js";import{a as Qt,b as eo,c as to}from"./chunk-W543TGUM.js";import{$a as ge,Da as Vt,G as Se,I as B,K as z,Ka as Fe,La as It,M as Tt,Mb as X,N as Lt,O as H,R as kt,S as Nt,T as pe,Ta as Ue,U as ze,Ua as At,Ub as q,Va as Ot,Za as ee,_a as v,a as Ft,ab as K,bb as te,cb as oe,fb as Bt,i as Re,ib as Me,jb as $t,kb as Zt,lb as jt,pc as He,qc as Wt,r as de,t as Mt,u as I,y as P}from"./chunk-FDJJDQFY.js";import{D as fe,E as Dt,F as Pe,v as Ce,z as Q}from"./chunk-AKEHF7AE.js";import{B as Ee,F as Z,G as bt,H as Et,J as Rt,M as St,O as Ct,c as be,g as ue,j as he,ja as Pt,o as _t}from"./chunk-O23OEJHM.js";import{Aa as vt,Ja as k,P as yt,S as R,Tb as g,Ub as f,Xb as x,_ as D,ea as T,jb as N,kb as V,za as L}from"./chunk-JM5XIBFZ.js";import{a as F,b as xt,j as wt}from"./chunk-TWZW5B45.js";function go(){return{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"#3399CC","stroke-width":1.25,"circle-radius":5,"circle-fill-color":"rgba(255,255,255,0.4)","circle-stroke-width":1.25,"circle-stroke-color":"#3399CC"}}var tt=.985;var re=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
`,ie=go(),se=class{constructor(){this.uniforms_=[],this.attributes_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${De(ie["circle-radius"])} + ${De(ie["circle-stroke-width"]*.5)})`,this.symbolRotationExpression_="0.0",this.symbolOffsetExpression_="vec2(0.0)",this.symbolColorExpression_=Te(ie["circle-fill-color"]),this.texCoordExpression_="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression_="false",this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=De(ie["stroke-width"]),this.strokeColorExpression_=Te(ie["stroke-color"]),this.strokeOffsetExpression_="0.",this.strokeCapExpression_=j("round"),this.strokeJoinExpression_=j("round"),this.strokeMiterLimitExpression_="10.",this.strokeDistanceFieldExpression_="-1000.",this.hasFill_=!1,this.fillColorExpression_=Te(ie["fill-color"]),this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e,o){return this.uniforms_.push({name:e,type:o}),this}addAttribute(e,o,t,n){return this.attributes_.push({name:e,type:o,varyingName:e.replace(/^a_/,"v_"),varyingType:n??o,varyingExpression:t??e}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.discardExpression_=e,this}getFragmentDiscardExpression(){return this.discardExpression_}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}getStrokeColorExpression(){return this.strokeColorExpression_}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}getFillColorExpression(){return this.fillColorExpression_}addVertexShaderFunction(e){return this.vertexShaderFunctions_.includes(e)?this:(this.vertexShaderFunctions_.push(e),this)}addFragmentShaderFunction(e){return this.fragmentShaderFunctions_.includes(e)?this:(this.fragmentShaderFunctions_.push(e),this)}getSymbolVertexShader(){return this.hasSymbol_?`${re}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_position;
attribute float a_index;
attribute vec4 a_hitColor;

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
  vec2 offsetPx = centerOffsetPx;
  if (a_index == 0.0) {
    offsetPx -= halfSizePx;
  } else if (a_index == 1.0) {
    offsetPx += halfSizePx * vec2(1., -1.);
  } else if (a_index == 2.0) {
    offsetPx += halfSizePx;
  } else {
    offsetPx += halfSizePx * vec2(-1., 1.);
  }
  float angle = ${this.symbolRotationExpression_}${this.symbolRotateWithView_?" + u_rotation":""};
  float c = cos(-angle);
  float s = sin(-angle);
  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);
  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);
  gl_Position = center + vec4(pxToScreen(offsetPx), u_depth, 0.);
  vec4 texCoord = ${this.texCoordExpression_};
  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;
  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;
  v_texCoord = vec2(u, v);
  v_hitColor = a_hitColor;
  v_angle = angle;
  c = cos(-v_angle);
  s = sin(-v_angle);
  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y);
  v_centerPx = screenToPx(center.xy) + centerOffsetPx;
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${re}
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
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${re}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_segmentStart;
attribute vec2 a_segmentEnd;
attribute float a_measureStart;
attribute float a_measureEnd;
attribute float a_parameters;
attribute float a_distance;
attribute vec2 a_joinAngles;
attribute vec4 a_hitColor;

varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_hitColor;
varying float v_distanceOffsetPx;
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
  float vertexNumber = floor(abs(a_parameters) / 10000. + 0.5);
  currentLineMetric = vertexNumber < 1.5 ? a_measureStart : a_measureEnd;
  // we're reading the fractional part while keeping the sign (so -4.12 gives -0.12, 3.45 gives 0.45)
  float angleTangentSum = fract(abs(a_parameters) / 10000.) * 10000. * sign(a_parameters);

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
  float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;
  float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;
  float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;
  vec2 joinDirection;
  vec2 positionPx = vertexNumber < 1.5 ? segmentStartPx : segmentEndPx;
  // if angle is too high, do not make a proper join
  if (cos(angle) > ${tt} || isCap(angle)) {
    joinDirection = normalPx * normalDir - tangentPx * tangentDir;
  } else {
    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);
  }
  positionPx = positionPx + joinDirection * (lineWidth * 0.5 + 1.); // adding 1 pixel for antialiasing
  gl_Position = pxToScreen(positionPx);

  v_segmentStart = segmentStartPx;
  v_segmentEnd = segmentEndPx;
  v_width = lineWidth;
  v_hitColor = a_hitColor;
  v_distanceOffsetPx = a_distance / u_resolution - (lineOffsetPx * angleTangentSum);
  v_measureStart = a_measureStart;
  v_measureEnd = a_measureEnd;
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${re}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_hitColor;
varying float v_distanceOffsetPx;
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
  if (cos(joinAngle) > ${tt}) { // avoid risking a division by zero
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
   if (capType == ${j("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${j("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${j("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${j("miter")}) {
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

  vec2 currentPoint = gl_FragCoord.xy / u_pixelRatio;
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(currentPoint);
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

  float segmentLength = length(v_segmentEnd - v_segmentStart);
  vec2 segmentTangent = (v_segmentEnd - v_segmentStart) / segmentLength;
  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);
  vec2 startToPoint = currentPoint - v_segmentStart;
  float lengthToPoint = max(0., min(dot(segmentTangent, startToPoint), segmentLength));
  float currentLengthPx = lengthToPoint + v_distanceOffsetPx;
  float currentRadiusPx = distanceFromSegment(currentPoint, v_segmentStart, v_segmentEnd);
  float currentRadiusRatio = dot(segmentNormal, startToPoint) * 2. / v_width;
  currentLineMetric = mix(
    v_measureStart,
    v_measureEnd,
    lengthToPoint / max(segmentLength, 1.17549429e-38)
  );

  if (${this.discardExpression_}) { discard; }

  float capType = ${this.strokeCapExpression_};
  float joinType = ${this.strokeJoinExpression_};
  float segmentStartDistance = computeSegmentPointDistance(currentPoint, v_segmentStart, v_segmentEnd, v_width, v_angleStart, capType, joinType);
  float segmentEndDistance = computeSegmentPointDistance(currentPoint, v_segmentEnd, v_segmentStart, v_width, v_angleEnd, capType, joinType);
  float distanceField = max(
    segmentDistanceField(currentPoint, v_segmentStart, v_segmentEnd, v_width),
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
}`:null}getFillVertexShader(){return this.hasFill_?`${re}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_position;
attribute vec4 a_hitColor;

varying vec4 v_hitColor;

${this.attributes_.map(e=>`attribute ${e.type} ${e.name};
varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);
  v_hitColor = a_hitColor;
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
}`:null}getFillFragmentShader(){return this.hasFill_?`${re}
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
}`:null}};var ot=class i{constructor(){this.globalCounter_=0,this.refToFeature_=new Map,this.uidToRef_=new Map,this.freeGlobalRef_=[],this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e,o){for(let t=0;t<e.length;t++)this.addFeature(e[t],o)}addFeature(e,o){let t=e.getGeometry();t&&(o&&(t=t.clone(),t.applyTransform(o)),this.addGeometry_(t,e))}clearFeatureEntryInPointBatch_(e){let o=P(e),t=this.pointBatch.entries[o];if(t)return this.pointBatch.geometriesCount-=t.flatCoordss.length,delete this.pointBatch.entries[o],t}clearFeatureEntryInLineStringBatch_(e){let o=P(e),t=this.lineStringBatch.entries[o];if(t)return this.lineStringBatch.verticesCount-=t.verticesCount,this.lineStringBatch.geometriesCount-=t.flatCoordss.length,delete this.lineStringBatch.entries[o],t}clearFeatureEntryInPolygonBatch_(e){let o=P(e),t=this.polygonBatch.entries[o];if(t)return this.polygonBatch.verticesCount-=t.verticesCount,this.polygonBatch.ringsCount-=t.ringsCount,this.polygonBatch.geometriesCount-=t.flatCoordss.length,delete this.polygonBatch.entries[o],t}addGeometry_(e,o){let t=e.getType();switch(t){case"GeometryCollection":{let n=e.getGeometriesArray();for(let r of n)this.addGeometry_(r,o);break}case"MultiPolygon":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),n.getEndss(),o,P(o),n.getStride());break}case"MultiLineString":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),n.getEnds(),o,P(o),n.getStride());break}case"MultiPoint":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),null,o,P(o),n.getStride());break}case"Polygon":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),n.getEnds(),o,P(o),n.getStride());break}case"Point":{let n=e;this.addCoordinates_(t,n.getFlatCoordinates(),null,o,P(o),n.getStride());break}case"LineString":case"LinearRing":{let n=e,r=n.getStride();this.addCoordinates_(t,n.getFlatCoordinates(),null,o,P(o),r,n.getLayout?.());break}default:}}addCoordinates_(e,o,t,n,r,s,a){let c;switch(e){case"MultiPolygon":{let l=t;for(let u=0,h=l.length;u<h;u++){let d=l[u],p=u>0?l[u-1]:null,w=p?p[p.length-1]:0,_=d[d.length-1];d=w>0?d.map(y=>y-w):d,this.addCoordinates_("Polygon",o.slice(w,_),d,n,r,s,a)}break}case"MultiLineString":{let l=t;for(let u=0,h=l.length;u<h;u++){let d=u>0?l[u-1]:0;this.addCoordinates_("LineString",o.slice(d,l[u]),null,n,r,s,a)}break}case"MultiPoint":for(let l=0,u=o.length;l<u;l+=s)this.addCoordinates_("Point",o.slice(l,l+2),null,n,r,null,null);break;case"Polygon":{let l=t;if(n instanceof oo){let d=Vt(o,l);if(d.length>1){this.addCoordinates_("MultiPolygon",o,d,n,r,s,a);return}}this.polygonBatch.entries[r]||(this.polygonBatch.entries[r]=this.addRefToEntry_(r,{feature:n,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]})),c=o.length/s;let u=t.length,h=t.map((d,p,w)=>p>0?(d-w[p-1])/s:d/s);this.polygonBatch.verticesCount+=c,this.polygonBatch.ringsCount+=u,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[r].flatCoordss.push(Go(o,s)),this.polygonBatch.entries[r].ringsVerticesCounts.push(h),this.polygonBatch.entries[r].verticesCount+=c,this.polygonBatch.entries[r].ringsCount+=u;for(let d=0,p=l.length;d<p;d++){let w=d>0?l[d-1]:0;this.addCoordinates_("LinearRing",o.slice(w,l[d]),null,n,r,s,a)}break}case"Point":this.pointBatch.entries[r]||(this.pointBatch.entries[r]=this.addRefToEntry_(r,{feature:n,flatCoordss:[]})),this.pointBatch.geometriesCount++,this.pointBatch.entries[r].flatCoordss.push(o);break;case"LineString":case"LinearRing":this.lineStringBatch.entries[r]||(this.lineStringBatch.entries[r]=this.addRefToEntry_(r,{feature:n,flatCoordss:[],verticesCount:0})),c=o.length/s,this.lineStringBatch.verticesCount+=c,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[r].flatCoordss.push(zo(o,s,a)),this.lineStringBatch.entries[r].verticesCount+=c;break;default:}}addRefToEntry_(e,o){let t=this.uidToRef_.get(e),n=t||this.freeGlobalRef_.pop()||++this.globalCounter_;return o.ref=n,t||(this.refToFeature_.set(n,o.feature),this.uidToRef_.set(e,n)),o}removeRef_(e,o){if(!e)throw new Error("This feature has no ref: "+o);this.refToFeature_.delete(e),this.uidToRef_.delete(o),this.freeGlobalRef_.push(e)}changeFeature(e,o){if(!this.uidToRef_.get(P(e)))return;this.removeFeature(e);let t=e.getGeometry();t&&(o&&(t=t.clone(),t.applyTransform(o)),this.addGeometry_(t,e))}removeFeature(e){let o=this.clearFeatureEntryInPointBatch_(e);o=this.clearFeatureEntryInPolygonBatch_(e)||o,o=this.clearFeatureEntryInLineStringBatch_(e)||o,o&&this.removeRef_(o.ref,P(o.feature))}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0,this.globalCounter_=0,this.freeGlobalRef_=[],this.refToFeature_.clear(),this.uidToRef_.clear()}getFeatureFromRef(e){return this.refToFeature_.get(e)}isEmpty(){return this.globalCounter_===0}filter(e){let o=new i;o.globalCounter_=this.globalCounter_,o.uidToRef_=this.uidToRef_,o.refToFeature_=this.refToFeature_;let t=!0;for(let n of this.refToFeature_.values())e(n)&&(o.addFeature(n),t=!1);return t?new i:o}};function Go(i,e){return e===2?i:i.filter((o,t)=>t%e<2)}function zo(i,e,o){return e===3&&o==="XYM"?i:e===4?i.filter((t,n)=>n%e!==2):e===3?i.map((t,n)=>n%e!==2?t:0):new Array(i.length*1.5).fill(0).map((t,n)=>n%3===2?0:i[Math.round(n/1.5)])}var mo=ot;function xo(){let i='function t(t,n,x=2){const o=n&&n.length,i=o?n[0]*x:t.length;let u=e(t,0,i,x,!0);const l=[];if(!u||u.next===u.prev)return l;let c,h,y;if(o&&(u=function(t,n,r,x){const o=[];for(let r=0,i=n.length;r<i;r++){const u=e(t,n[r]*x,r<i-1?n[r+1]*x:t.length,x,!1);u===u.next&&(u.steiner=!0),o.push(a(u))}o.sort(f);for(let t=0;t<o.length;t++)r=s(o[t],r);return r}(t,n,u,x)),t.length>80*x){c=1/0,h=1/0;let e=-1/0,n=-1/0;for(let r=x;r<i;r+=x){const x=t[r],o=t[r+1];x<c&&(c=x),o<h&&(h=o),x>e&&(e=x),o>n&&(n=o)}y=Math.max(e-c,n-h),y=0!==y?32767/y:0}return r(u,l,x,c,h,y,0),l}function e(t,e,n,r,x){let o;if(x===function(t,e,n,r){let x=0;for(let o=e,i=n-r;o<n;o+=r)x+=(t[i]-t[o])*(t[o+1]+t[i+1]),i=o;return x}(t,e,n,r)>0)for(let x=e;x<n;x+=r)o=w(x/r|0,t[x],t[x+1],o);else for(let x=n-r;x>=e;x-=r)o=w(x/r|0,t[x],t[x+1],o);return o&&g(o,o.next)&&(A(o),o=o.next),o}function n(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!g(r,r.next)&&0!==v(r.prev,r,r.next))r=r.next;else{if(A(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function r(t,e,f,s,l,a,h){if(!t)return;!h&&a&&function(t,e,n,r){let x=t;do{0===x.z&&(x.z=c(x.x,x.y,e,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==t);x.prevZ.nextZ=null,x.prevZ=null,function(t){let e,n=1;do{let r,x=t;t=null;let o=null;for(e=0;x;){e++;let i=x,u=0;for(let t=0;t<n&&(u++,i=i.nextZ,i);t++);let f=n;for(;u>0||f>0&&i;)0!==u&&(0===f||!i||x.z<=i.z)?(r=x,x=x.nextZ,u--):(r=i,i=i.nextZ,f--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;x=i}o.nextZ=null,n*=2}while(e>1)}(x)}(t,s,l,a);let y=t;for(;t.prev!==t.next;){const c=t.prev,p=t.next;if(a?o(t,s,l,a):x(t))e.push(c.i,t.i,p.i),A(t),t=p.next,y=p.next;else if((t=p)===y){h?1===h?r(t=i(n(t),e),e,f,s,l,a,2):2===h&&u(t,e,f,s,l,a):r(n(t),e,f,s,l,a,1);break}}}function x(t){const e=t.prev,n=t,r=t.next;if(v(e,n,r)>=0)return!1;const x=e.x,o=n.x,i=r.x,u=e.y,f=n.y,s=r.y,l=Math.min(x,o,i),c=Math.min(u,f,s),a=Math.max(x,o,i),h=Math.max(u,f,s);let p=r.next;for(;p!==e;){if(p.x>=l&&p.x<=a&&p.y>=c&&p.y<=h&&y(x,u,o,f,i,s,p.x,p.y)&&v(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function o(t,e,n,r){const x=t.prev,o=t,i=t.next;if(v(x,o,i)>=0)return!1;const u=x.x,f=o.x,s=i.x,l=x.y,a=o.y,h=i.y,p=Math.min(u,f,s),g=Math.min(l,a,h),b=Math.max(u,f,s),M=Math.max(l,a,h),m=c(p,g,e,n,r),Z=c(b,M,e,n,r);let d=t.prevZ,w=t.nextZ;for(;d&&d.z>=m&&w&&w.z<=Z;){if(d.x>=p&&d.x<=b&&d.y>=g&&d.y<=M&&d!==x&&d!==i&&y(u,l,f,a,s,h,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,w.x>=p&&w.x<=b&&w.y>=g&&w.y<=M&&w!==x&&w!==i&&y(u,l,f,a,s,h,w.x,w.y)&&v(w.prev,w,w.next)>=0)return!1;w=w.nextZ}for(;d&&d.z>=m;){if(d.x>=p&&d.x<=b&&d.y>=g&&d.y<=M&&d!==x&&d!==i&&y(u,l,f,a,s,h,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;w&&w.z<=Z;){if(w.x>=p&&w.x<=b&&w.y>=g&&w.y<=M&&w!==x&&w!==i&&y(u,l,f,a,s,h,w.x,w.y)&&v(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function i(t,e){let r=t;do{const n=r.prev,x=r.next.next;!g(n,x)&&b(n,r,r.next,x)&&Z(n,x)&&Z(x,n)&&(e.push(n.i,r.i,x.i),A(r),A(r.next),r=t=x),r=r.next}while(r!==t);return n(r)}function u(t,e,x,o,i,u){let f=t;do{let t=f.next.next;for(;t!==f.prev;){if(f.i!==t.i&&p(f,t)){let s=d(f,t);return f=n(f,f.next),s=n(s,s.next),r(f,e,x,o,i,u,0),void r(s,e,x,o,i,u,0)}t=t.next}f=f.next}while(f!==t)}function f(t,e){let n=t.x-e.x;if(0===n&&(n=t.y-e.y,0===n)){n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x)}return n}function s(t,e){const r=function(t,e){let n=e;const r=t.x,x=t.y;let o,i=-1/0;if(g(t,n))return n;do{if(g(t,n.next))return n.next;if(x<=n.y&&x>=n.next.y&&n.next.y!==n.y){const t=n.x+(x-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i&&(i=t,o=n.x<n.next.x?n:n.next,t===r))return o}n=n.next}while(n!==e);if(!o)return null;const u=o,f=o.x,s=o.y;let c=1/0;n=o;do{if(r>=n.x&&n.x>=f&&r!==n.x&&h(x<s?r:i,x,f,s,x<s?i:r,x,n.x,n.y)){const e=Math.abs(x-n.y)/(r-n.x);Z(n,t)&&(e<c||e===c&&(n.x>o.x||n.x===o.x&&l(o,n)))&&(o=n,c=e)}n=n.next}while(n!==u);return o}(t,e);if(!r)return e;const x=d(r,t);return n(x,x.next),n(r,r.next)}function l(t,e){return v(t.prev,t,e.prev)<0&&v(e.next,t,t.next)<0}function c(t,e,n,r,x){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function h(t,e,n,r,x,o,i,u){return(x-i)*(e-u)>=(t-i)*(o-u)&&(t-i)*(r-u)>=(n-i)*(e-u)&&(n-i)*(o-u)>=(x-i)*(r-u)}function y(t,e,n,r,x,o,i,u){return!(t===i&&e===u)&&h(t,e,n,r,x,o,i,u)}function p(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&b(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(Z(t,e)&&Z(e,t)&&function(t,e){let n=t,r=!1;const x=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&x<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(v(t.prev,t,e.prev)||v(t,e.prev,e))||g(t,e)&&v(t.prev,t,t.next)>0&&v(e.prev,e,e.next)>0)}function v(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function g(t,e){return t.x===e.x&&t.y===e.y}function b(t,e,n,r){const x=m(v(t,e,n)),o=m(v(t,e,r)),i=m(v(n,r,t)),u=m(v(n,r,e));return x!==o&&i!==u||(!(0!==x||!M(t,n,e))||(!(0!==o||!M(t,r,e))||(!(0!==i||!M(n,t,r))||!(0!==u||!M(n,e,r)))))}function M(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function m(t){return t>0?1:t<0?-1:0}function Z(t,e){return v(t.prev,t,t.next)<0?v(t,e,t.next)>=0&&v(t,t.prev,e)>=0:v(t,e,t.prev)<0||v(t,t.next,e)<0}function d(t,e){const n=E(t.i,t.x,t.y),r=E(e.i,e.x,e.y),x=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=x,x.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function w(t,e,n,r){const x=E(t,e,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function A(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function E(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function z(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const x=e[0],o=e[1],i=e[2],u=e[3],f=e[4],s=e[5];return t[0]=u/n,t[1]=-o/n,t[2]=-i/n,t[3]=x/n,t[4]=(i*s-u*f)/n,t[5]=-(x*s-o*f)/n,t}new Array(6);const F=[],P={vertexPosition:0,indexPosition:0};function B(t,e,n,r,x){t[e+0]=n,t[e+1]=r,t[e+2]=x}function N(t,e,n,r,x,o){const i=3+x,u=t[e+0],f=t[e+1],s=F;s.length=x;for(let n=0;n<s.length;n++)s[n]=t[e+2+n];let l=o?o.vertexPosition:0,c=o?o.indexPosition:0;const a=l/i;return B(n,l,u,f,0),s.length&&n.set(s,l+3),l+=i,B(n,l,u,f,1),s.length&&n.set(s,l+3),l+=i,B(n,l,u,f,2),s.length&&n.set(s,l+3),l+=i,B(n,l,u,f,3),s.length&&n.set(s,l+3),l+=i,r[c++]=a,r[c++]=a+1,r[c++]=a+3,r[c++]=a+1,r[c++]=a+2,r[c++]=a+3,P.vertexPosition=l,P.indexPosition=c,P}function R(t,e,n,r,x,o,i,u,f,s,l){const c=10+u.length,a=o.length/c,h=[t[e+0],t[e+1]],y=[t[n],t[n+1]],p=t[e+2],v=t[n+2],g=I(f,[...h]),b=I(f,[...y]);function M(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),x=[(e[0]-t[0])/r,(e[1]-t[1])/r],o=[-x[1],x[0]],i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),u=[(n[0]-t[0])/i,(n[1]-t[1])/i],f=0===r||0===i?0:Math.acos((s=u[0]*x[0]+u[1]*x[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;return u[0]*o[0]+u[1]*o[1]>0?f:2*Math.PI-f}let m=-1,Z=-1,d=l;const w=null!==x;if(null!==r){m=M(g,b,I(f,[...[t[r],t[r+1]]])),Math.cos(m)<=.985&&(d+=Math.tan((m-Math.PI)/2))}if(w){Z=M(b,g,I(f,[...[t[x],t[x+1]]])),Math.cos(Z)<=.985&&(d+=Math.tan((Math.PI-Z)/2))}function A(t,e){return 0===e?1e4*t:Math.sign(e)*(1e4*t+Math.abs(e))}return o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(0,l)),o.push(...u),o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(1,l)),o.push(...u),o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(2,l)),o.push(...u),o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(3,l)),o.push(...u),i.push(a,a+1,a+2,a+1,a+3,a+2),{length:s+Math.sqrt((b[0]-g[0])*(b[0]-g[0])+(b[1]-g[1])*(b[1]-g[1])),angle:d}}function S(e,n,r,x,o){const i=2+o;let u=n;const f=e.slice(u,u+o);u+=o;const s=e[u++];let l=0;const c=new Array(s-1);for(let t=0;t<s;t++)l+=e[u++],t<s-1&&(c[t]=l);const a=e.slice(u,u+2*l),h=t(a,c,2);for(let t=0;t<h.length;t++)x.push(h[t]+r.length/i);for(let t=0;t<a.length;t+=2)r.push(a[t],a[t+1],...f);return u+2*l}const T="GENERATE_POLYGON_BUFFERS",_="GENERATE_POINT_BUFFERS",O="GENERATE_LINE_STRING_BUFFERS",U=self;U.onmessage=t=>{const e=t.data;switch(e.type){case _:{const t=3,n=2,r=e.customAttributesSize,x=n+r,o=new Float32Array(e.renderInstructions),i=o.length/x,u=4*i*(r+t),f=new Uint32Array(6*i),s=new Float32Array(u);let l;for(let t=0;t<o.length;t+=x)l=N(o,t,s,f,r,l);const c=Object.assign({vertexBuffer:s.buffer,indexBuffer:f.buffer,renderInstructions:o.buffer},e);U.postMessage(c,[s.buffer,f.buffer,o.buffer]);break}case O:{const t=[],n=[],r=e.customAttributesSize,x=3,o=new Float32Array(e.renderInstructions);let i=0;const u=[1,0,0,1,0,0];let f,s;for(z(u,e.renderInstructionsTransform);i<o.length;){s=Array.from(o.slice(i,i+r)),i+=r,f=o[i++];const e=i,l=i+(f-1)*x,c=o[e]===o[l]&&o[e+1]===o[l+1];let a=0,h=0;for(let r=0;r<f-1;r++){let y=null;r>0?y=i+(r-1)*x:c&&(y=l-x);let p=null;r<f-2?p=i+(r+2)*x:c&&(p=e+x);const v=R(o,i+r*x,i+(r+1)*x,y,p,t,n,s,u,a,h);a=v.length,h=v.angle}i+=f*x}const l=Uint32Array.from(n),c=Float32Array.from(t),a=Object.assign({vertexBuffer:c.buffer,indexBuffer:l.buffer,renderInstructions:o.buffer},e);U.postMessage(a,[c.buffer,l.buffer,o.buffer]);break}case T:{const t=[],n=[],r=e.customAttributesSize,x=new Float32Array(e.renderInstructions);let o=0;for(;o<x.length;)o=S(x,o,t,n,r);const i=Uint32Array.from(n),u=Float32Array.from(t),f=Object.assign({vertexBuffer:u.buffer,indexBuffer:i.buffer,renderInstructions:x.buffer},e);U.postMessage(f,[u.buffer,i.buffer,x.buffer]);break}}};';return new Worker(typeof Blob>"u"?"data:application/javascript;base64,"+Buffer.from(i,"binary").toString("base64"):URL.createObjectURL(new Blob([i],{type:"application/javascript"})))}var Ie={GENERATE_POLYGON_BUFFERS:"GENERATE_POLYGON_BUFFERS",GENERATE_POINT_BUFFERS:"GENERATE_POINT_BUFFERS",GENERATE_LINE_STRING_BUFFERS:"GENERATE_LINE_STRING_BUFFERS"};function wo(i,e){e=e||[];let o=256,t=o-1;return e[0]=Math.floor(i/o/o/o)/t,e[1]=Math.floor(i/o/o)%o/t,e[2]=Math.floor(i/o)%o/t,e[3]=i%o/t,e}function yo(i){let e=0,o=256,t=o-1;return e+=Math.round(i[0]*o*o*o*t),e+=Math.round(i[1]*o*o*t),e+=Math.round(i[2]*o*t),e+=Math.round(i[3]*t),e}function nt(i,e,o,t){let n=0;for(let r in e){let s=e[r],a=s.callback.call(o,o.feature),c=a?.[0]??a;c===Ye&&console.warn('The "has" operator might return false positives.'),c===void 0?c=Ye:c===null&&(c=0),i[t+n++]=c,!(!s.size||s.size===1)&&(i[t+n++]=a[1],!(s.size<3)&&(i[t+n++]=a[2],!(s.size<4)&&(i[t+n++]=a[3])))}return n}function xe(i){return Object.keys(i).reduce((e,o)=>e+(i[o].size||1),0)}function vo(i,e,o,t){let n=(2+xe(o))*i.geometriesCount;(!e||e.length!==n)&&(e=new Float32Array(n));let r=[],s=0;for(let a in i.entries){let c=i.entries[a];for(let l=0,u=c.flatCoordss.length;l<u;l++)r[0]=c.flatCoordss[l][0],r[1]=c.flatCoordss[l][1],H(t,r),e[s++]=r[0],e[s++]=r[1],s+=nt(e,o,c,s)}return e}function _o(i,e,o,t){let n=3*i.verticesCount+(1+xe(o))*i.geometriesCount;(!e||e.length!==n)&&(e=new Float32Array(n));let r=[],s=0;for(let a in i.entries){let c=i.entries[a];for(let l=0,u=c.flatCoordss.length;l<u;l++){r.length=c.flatCoordss[l].length,ze(c.flatCoordss[l],0,r.length,3,t,r,3),s+=nt(e,o,c,s),e[s++]=r.length/3;for(let h=0,d=r.length;h<d;h+=3)e[s++]=r[h],e[s++]=r[h+1],e[s++]=r[h+2]}}return e}function bo(i,e,o,t){let n=2*i.verticesCount+(1+xe(o))*i.geometriesCount+i.ringsCount;(!e||e.length!==n)&&(e=new Float32Array(n));let r=[],s=0;for(let a in i.entries){let c=i.entries[a];for(let l=0,u=c.flatCoordss.length;l<u;l++){r.length=c.flatCoordss[l].length,ze(c.flatCoordss[l],0,r.length,2,t,r),s+=nt(e,o,c,s),e[s++]=c.ringsVerticesCounts[l].length;for(let h=0,d=c.ringsVerticesCounts[l].length;h<d;h++)e[s++]=c.ringsVerticesCounts[l][h];for(let h=0,d=r.length;h<d;h+=2)e[s++]=r[h],e[s++]=r[h+1]}}return e}function Ae(i){return(JSON.stringify(i).split("").reduce((o,t)=>(o<<5)-o+t.charCodeAt(0),0)>>>0).toString()}function rt(i,e,o,t){if(`${t}radius`in i&&t!=="icon-"){let n=m(o,i[`${t}radius`],v);if(`${t}radius2`in i){let r=m(o,i[`${t}radius2`],v);n=`max(${n}, ${r})`}`${t}stroke-width`in i&&(n=`(${n} + ${m(o,i[`${t}stroke-width`],v)} * 0.5)`),e.setSymbolSizeExpression(`vec2(${n} * 2. + 0.5)`)}if(`${t}scale`in i){let n=m(o,i[`${t}scale`],oe);e.setSymbolSizeExpression(`${e.getSymbolSizeExpression()} * ${n}`)}`${t}displacement`in i&&e.setSymbolOffsetExpression(m(o,i[`${t}displacement`],te)),`${t}rotation`in i&&e.setSymbolRotationExpression(m(o,i[`${t}rotation`],v)),`${t}rotate-with-view`in i&&e.setSymbolRotateWithView(!!i[`${t}rotate-with-view`])}function Eo(i,e,o,t,n){let r="vec4(0.)";if(e!==null&&(r=e),o!==null&&t!==null){let c=`smoothstep(-${t} + 0.63, -${t} - 0.58, ${i})`;r=`mix(${o}, ${r}, ${c})`}let s=`(1.0 - smoothstep(-0.63, 0.58, ${i}))`,a=`${r} * vec4(1.0, 1.0, 1.0, ${s})`;return n!==null&&(a=`${a} * vec4(1.0, 1.0, 1.0, ${n})`),a}function it(i,e,o,t,n){let r=new Image;r.crossOrigin=i[`${t}cross-origin`]===void 0?"anonymous":i[`${t}cross-origin`],Se(typeof i[`${t}src`]=="string",`WebGL layers do not support expressions for the ${t}src style property`),r.src=i[`${t}src`],o[`u_texture${n}_size`]=()=>r.complete?[r.width,r.height]:[0,0],e.addUniform(`u_texture${n}_size`,"vec2");let s=`u_texture${n}_size`;return o[`u_texture${n}`]=r,e.addUniform(`u_texture${n}`,"sampler2D"),s}function st(i,e,o,t,n){let r=m(o,i[`${e}offset`],oe);if(`${e}offset-origin`in i)switch(i[`${e}offset-origin`]){case"top-right":r=`vec2(${t}.x, 0.) + ${n} * vec2(-1., 0.) + ${r} * vec2(-1., 1.)`;break;case"bottom-left":r=`vec2(0., ${t}.y) + ${n} * vec2(0., -1.) + ${r} * vec2(1., -1.)`;break;case"bottom-right":r=`${t} - ${n} - ${r}`;break;default:}return r}function Uo(i,e,o,t){t.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,rt(i,e,t,"circle-");let n=null;"circle-opacity"in i&&(n=m(t,i["circle-opacity"],v));let r="coordsPx";"circle-scale"in i&&(r=`coordsPx / ${m(t,i["circle-scale"],oe)}`);let s=null;"circle-fill-color"in i&&(s=m(t,i["circle-fill-color"],K));let a=null;"circle-stroke-color"in i&&(a=m(t,i["circle-stroke-color"],K));let c=m(t,i["circle-radius"],v),l=null;"circle-stroke-width"in i&&(l=m(t,i["circle-stroke-width"],v),c=`(${c} + ${l} * 0.5)`);let u=`circleDistanceField(${r}, ${c})`,h=Eo(u,s,a,l,n);e.setSymbolColorExpression(h)}function Ho(i,e,o,t){t.functions.round=`float round(float v) {
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
}`,rt(i,e,t,"shape-");let n=null;"shape-opacity"in i&&(n=m(t,i["shape-opacity"],v));let r="coordsPx";"shape-scale"in i&&(r=`coordsPx / ${m(t,i["shape-scale"],oe)}`);let s=null;"shape-fill-color"in i&&(s=m(t,i["shape-fill-color"],K));let a=null;"shape-stroke-color"in i&&(a=m(t,i["shape-stroke-color"],K));let c=null;"shape-stroke-width"in i&&(c=m(t,i["shape-stroke-width"],v));let l=m(t,i["shape-points"],v),u="0.";"shape-angle"in i&&(u=m(t,i["shape-angle"],v));let h,d=m(t,i["shape-radius"],v);if(c!==null&&(d=`${d} + ${c} * 0.5`),"shape-radius2"in i){let w=m(t,i["shape-radius2"],v);c!==null&&(w=`${w} + ${c} * 0.5`),h=`starDistanceField(${r}, ${l}, ${d}, ${w}, ${u})`}else h=`regularDistanceField(${r}, ${l}, ${d}, ${u})`;let p=Eo(h,s,a,c,n);e.setSymbolColorExpression(p)}function Ko(i,e,o,t){let n="vec4(1.0)";"icon-color"in i&&(n=m(t,i["icon-color"],K)),"icon-opacity"in i&&(n=`${n} * vec4(1.0, 1.0, 1.0, ${m(t,i["icon-opacity"],v)})`);let r=Ae(i["icon-src"]),s=it(i,e,o,"icon-",r);if(e.setSymbolColorExpression(`${n} * texture2D(u_texture${r}, v_texCoord)`).setSymbolSizeExpression(s),"icon-width"in i&&"icon-height"in i&&e.setSymbolSizeExpression(`vec2(${m(t,i["icon-width"],v)}, ${m(t,i["icon-height"],v)})`),"icon-offset"in i&&"icon-size"in i){let a=m(t,i["icon-size"],te),c=e.getSymbolSizeExpression();e.setSymbolSizeExpression(a);let l=st(i,"icon-",t,"v_quadSizePx",a);e.setTextureCoordinateExpression(`(vec4((${l}).xyxy) + vec4(0., 0., ${a})) / (${c}).xyxy`)}if(rt(i,e,t,"icon-"),"icon-anchor"in i){let a=m(t,i["icon-anchor"],te),c="1.0";"icon-scale"in i&&(c=m(t,i["icon-scale"],oe));let l;i["icon-anchor-x-units"]==="pixels"&&i["icon-anchor-y-units"]==="pixels"?l=`${a} * ${c}`:i["icon-anchor-x-units"]==="pixels"?l=`${a} * vec2(vec2(${c}).x, v_quadSizePx.y)`:i["icon-anchor-y-units"]==="pixels"?l=`${a} * vec2(v_quadSizePx.x, vec2(${c}).x)`:l=`${a} * v_quadSizePx`;let u=`v_quadSizePx * vec2(0.5, -0.5) + ${l} * vec2(-1., 1.)`;if("icon-anchor-origin"in i)switch(i["icon-anchor-origin"]){case"top-right":u=`v_quadSizePx * -0.5 + ${l}`;break;case"bottom-left":u=`v_quadSizePx * 0.5 - ${l}`;break;case"bottom-right":u=`v_quadSizePx * vec2(-0.5, 0.5) + ${l} * vec2(1., -1.)`;break;default:}e.setSymbolOffsetExpression(`${e.getSymbolOffsetExpression()} + ${u}`)}}function Xo(i,e,o,t){if("stroke-color"in i&&e.setStrokeColorExpression(m(t,i["stroke-color"],K)),"stroke-pattern-src"in i){let n=Ae(i["stroke-pattern-src"]),r=it(i,e,o,"stroke-pattern-",n),s=r,a="vec2(0.)";"stroke-pattern-offset"in i&&"stroke-pattern-size"in i&&(s=m(t,i["stroke-pattern-size"],te),a=st(i,"stroke-pattern-",t,r,s));let c="0.";"stroke-pattern-spacing"in i&&(c=m(t,i["stroke-pattern-spacing"],v)),t.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
  float currentLengthScaled = currentLengthPx * sampleSize.y / lineWidth;
  float spacingScaled = spacingPx * sampleSize.y / lineWidth;
  float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));
  // make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  uCoordPx = clamp(uCoordPx, 0.5, sampleSize.x - 0.5);
  float vCoordPx = (-currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;
  vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;
  return texture2D(texture, texCoord);
}`;let l=`u_texture${n}`,u="1.";"stroke-color"in i&&(u=e.getStrokeColorExpression()),e.setStrokeColorExpression(`${u} * sampleStrokePattern(${l}, ${r}, ${a}, ${s}, ${c}, currentLengthPx, currentRadiusRatio, v_width)`)}if("stroke-width"in i&&e.setStrokeWidthExpression(m(t,i["stroke-width"],v)),"stroke-offset"in i&&e.setStrokeOffsetExpression(m(t,i["stroke-offset"],v)),"stroke-line-cap"in i&&e.setStrokeCapExpression(m(t,i["stroke-line-cap"],ge)),"stroke-line-join"in i&&e.setStrokeJoinExpression(m(t,i["stroke-line-join"],ge)),"stroke-miter-limit"in i&&e.setStrokeMiterLimitExpression(m(t,i["stroke-miter-limit"],v)),"stroke-line-dash"in i){t.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType, float lineWidth) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${j("square")}) {
    distanceSegment -= lineWidth * 0.5;
  } else if (capType == ${j("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - lineWidth * 0.5);
  }
  return distanceSegment;
}`;let n=i["stroke-line-dash"].map(p=>m(t,p,v));n.length%2===1&&(n=[...n,...n]);let r="0.";"stroke-line-dash-offset"in i&&(r=m(t,i["stroke-line-dash-offset"],v));let a=`dashDistanceField_${Ae(i["stroke-line-dash"])}`,c=n.map((p,w)=>`float dashLength${w}`).join(", "),l=n.map((p,w)=>`dashLength${w}`).join(" + "),u="0.",h=`getSingleDashDistance(distance, radius, ${u}, dashLength0, totalDashLength, capType, lineWidth)`;for(let p=2;p<n.length;p+=2)u=`${u} + dashLength${p-2} + dashLength${p-1}`,h=`min(${h}, getSingleDashDistance(distance, radius, ${u}, dashLength${p}, totalDashLength, capType, lineWidth))`;t.functions[a]=`float ${a}(float distance, float radius, float capType, float lineWidth, ${c}) {
  float totalDashLength = ${l};
  return ${h};
}`;let d=n.map((p,w)=>`${p}`).join(", ");e.setStrokeDistanceFieldExpression(`${a}(currentLengthPx + ${r}, currentRadiusPx, capType, v_width, ${d})`)}}function qo(i,e,o,t){if("fill-color"in i&&e.setFillColorExpression(m(t,i["fill-color"],K)),"fill-pattern-src"in i){let n=Ae(i["fill-pattern-src"]),r=it(i,e,o,"fill-pattern-",n),s=r,a="vec2(0.)";"fill-pattern-offset"in i&&"fill-pattern-size"in i&&(s=m(t,i["fill-pattern-size"],te),a=st(i,"fill-pattern-",t,r,s)),t.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {
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
}`;let c=`u_texture${n}`,l="1.";"fill-color"in i&&(l=e.getFillColorExpression()),e.setFillColorExpression(`${l} * sampleFillPattern(${c}, ${r}, ${a}, ${s}, pxOrigin, pxPos)`)}}function Ro(i,e,o){let t=Le(),n=new se,r={};if("icon-src"in i?Ko(i,n,r,t):"shape-points"in i?Ho(i,n,r,t):"circle-radius"in i&&Uo(i,n,r,t),Xo(i,n,r,t),qo(i,n,r,t),o){let c=m(t,o,ee);n.setFragmentDiscardExpression(`!${c}`)}let s={};function a(c,l,u,h){if(!t[c])return;let d=Yt(u),p=Jt(u);n.addAttribute(`a_${l}`,d),s[l]={size:p,callback:h}}return a("geometryType",qt,ge,c=>Je(Me(c.getGeometry()))),a("featureId",Xt,ge|v,c=>{let l=c.getId()??null;return typeof l=="string"?Je(l):l}),ke(n,t),{builder:n,attributes:F(F({},s),Ve(t)),uniforms:F(F({},r),Ne(t,e))}}function So(i){let e=Array.isArray(i)?i:[i];if("style"in e[0]){let o=[],t=e,n=[];for(let r of t){let s=Array.isArray(r.style)?r.style:[r.style],a=r.filter;r.else&&n.length&&(a=["all",...n.map(l=>["!",l])],r.filter&&a.push(r.filter),a.length<3&&(a=a[1])),r.filter&&n.push(r.filter);let c=s.map(l=>F({style:l},a&&{filter:a}));o.push(...c)}return o}return"builder"in e[0]?e:e.map(o=>({style:o}))}var Jo=[],at;function Yo(){return at||(at=xo()),at}var Qo=0,W={POSITION:"a_position",INDEX:"a_index",SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",MEASURE_START:"a_measureStart",MEASURE_END:"a_measureEnd",PARAMETERS:"a_parameters",JOIN_ANGLES:"a_joinAngles",DISTANCE:"a_distance"},lt=class{constructor(e,o,t,n,r){this.helper_,this.hitDetectionEnabled_=!!n;let s=e;if(!("builder"in e)){let u=e,h=Ro(u.style,o,u.filter);s={builder:h.builder,attributes:h.attributes,uniforms:h.uniforms}}this.fillProgram_,this.strokeProgram_,this.symbolProgram_,this.hasFill_=!!s.builder.getFillVertexShader(),this.hasFill_&&(this.fillVertexShader_=s.builder.getFillVertexShader(),this.fillFragmentShader_=s.builder.getFillFragmentShader()),this.hasStroke_=!!s.builder.getStrokeVertexShader(),this.hasStroke_&&(this.strokeVertexShader_=s.builder.getStrokeVertexShader(),this.strokeFragmentShader_=s.builder.getStrokeFragmentShader()),this.hasSymbol_=!!s.builder.getSymbolVertexShader(),this.hasSymbol_&&(this.symbolVertexShader_=s.builder.getSymbolVertexShader(),this.symbolFragmentShader_=s.builder.getSymbolFragmentShader()),this.featureFilter_=null,r&&(this.featureFilter_=this.computeFeatureFilter(r));let c=this.hitDetectionEnabled_?{hitColor:{callback(){return wo(this.ref,Jo)},size:4}}:{};this.customAttributes_=Object.assign({},c,s.attributes),this.uniforms_=s.uniforms;let l=Object.entries(this.customAttributes_).map(([u,h])=>({name:`a_${u}`,size:h.size||1,type:A.FLOAT}));this.polygonAttributesDesc_=[{name:W.POSITION,size:2,type:A.FLOAT},...l],this.lineStringAttributesDesc_=[{name:W.SEGMENT_START,size:2,type:A.FLOAT},{name:W.MEASURE_START,size:1,type:A.FLOAT},{name:W.SEGMENT_END,size:2,type:A.FLOAT},{name:W.MEASURE_END,size:1,type:A.FLOAT},{name:W.JOIN_ANGLES,size:2,type:A.FLOAT},{name:W.DISTANCE,size:1,type:A.FLOAT},{name:W.PARAMETERS,size:1,type:A.FLOAT},...l],this.pointAttributesDesc_=[{name:W.POSITION,size:2,type:A.FLOAT},{name:W.INDEX,size:1,type:A.FLOAT},...l],this.setHelper(t)}computeFeatureFilter(e){let o=Bt(),t;try{t=Zt(e,ee,o)}catch{return null}if(o.mapState||o.variables.size>0)return null;let n=$t();return r=>{if(n.properties=r.getPropertiesInternal(),o.featureId){let s=r.getId();s!==void 0?n.featureId=s:n.featureId=null}return n.geometryType=Me(r.getGeometry()),t(n)}}generateBuffers(e,o){return wt(this,null,function*(){let t=e;if(this.featureFilter_&&(t=t.filter(this.featureFilter_),t.isEmpty()))return null;let n=this.generateRenderInstructions_(t,o),[r,s,a]=yield Promise.all([this.generateBuffersForType_(n.polygonInstructions,"Polygon",o),this.generateBuffersForType_(n.lineStringInstructions,"LineString",o),this.generateBuffersForType_(n.pointInstructions,"Point",o)]),c=pe(z(),o);return{polygonBuffers:r,lineStringBuffers:s,pointBuffers:a,invertVerticesTransform:c}})}generateRenderInstructions_(e,o){let t=this.hasFill_?bo(e.polygonBatch,new Float32Array(0),this.customAttributes_,o):null,n=this.hasStroke_?_o(e.lineStringBatch,new Float32Array(0),this.customAttributes_,o):null,r=this.hasSymbol_?vo(e.pointBatch,new Float32Array(0),this.customAttributes_,o):null;return{polygonInstructions:t,lineStringInstructions:n,pointInstructions:r}}generateBuffersForType_(e,o,t){if(e===null)return null;let n=Qo++,r;switch(o){case"Polygon":r=Ie.GENERATE_POLYGON_BUFFERS;break;case"LineString":r=Ie.GENERATE_LINE_STRING_BUFFERS;break;case"Point":r=Ie.GENERATE_POINT_BUFFERS;break;default:}let s={id:n,type:r,renderInstructions:e.buffer,renderInstructionsTransform:t,customAttributesSize:xe(this.customAttributes_)},a=Yo();return a.postMessage(s,[e.buffer]),e=null,new Promise(c=>{let l=u=>{let h=u.data;if(h.id!==n||(a.removeEventListener("message",l),!this.helper_.getGL()))return;let d=new qe(zt,Xe).fromArrayBuffer(h.vertexBuffer),p=new qe(Ut,Xe).fromArrayBuffer(h.indexBuffer);this.helper_.flushBufferData(d),this.helper_.flushBufferData(p),c([p,d])};a.addEventListener("message",l)})}render(e,o,t){this.hasFill_&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],this.fillProgram_,this.polygonAttributesDesc_,o,t),this.hasStroke_&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],this.strokeProgram_,this.lineStringAttributesDesc_,o,t),this.hasSymbol_&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],this.symbolProgram_,this.pointAttributesDesc_,o,t)}renderInternal_(e,o,t,n,r,s){let a=e.getSize();a!==0&&(this.helper_.useProgram(t,r),this.helper_.bindBuffer(o),this.helper_.bindBuffer(e),this.helper_.enableAttributes(n),s(),this.helper_.drawElements(0,a))}setHelper(e,o=null){this.helper_=e,this.hasFill_&&(this.fillProgram_=this.helper_.getProgram(this.fillFragmentShader_,this.fillVertexShader_)),this.hasStroke_&&(this.strokeProgram_=this.helper_.getProgram(this.strokeFragmentShader_,this.strokeVertexShader_)),this.hasSymbol_&&(this.symbolProgram_=this.helper_.getProgram(this.symbolFragmentShader_,this.symbolVertexShader_)),this.helper_.addUniforms(this.uniforms_),o&&(o.polygonBuffers&&(this.helper_.flushBufferData(o.polygonBuffers[0]),this.helper_.flushBufferData(o.polygonBuffers[1])),o.lineStringBuffers&&(this.helper_.flushBufferData(o.lineStringBuffers[0]),this.helper_.flushBufferData(o.lineStringBuffers[1])),o.pointBuffers&&(this.helper_.flushBufferData(o.pointBuffers[0]),this.helper_.flushBufferData(o.pointBuffers[1])))}},Co=lt;var G=new Uint8Array(4),ct=class{constructor(e,o){this.helper_=e;let t=e.getGL();this.texture_=t.createTexture(),this.framebuffer_=t.createFramebuffer(),this.depthbuffer_=t.createRenderbuffer(),this.size_=o||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}setSize(e){Re(e,this.size_)||(this.size_[0]=e[0],this.size_[1]=e[1],this.updateSize_())}getSize(){return this.size_}clearCachedData(){this.dataCacheDirty_=!0}readAll(){if(this.dataCacheDirty_){let e=this.size_,o=this.helper_.getGL();o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer_),o.readPixels(0,0,e[0],e[1],o.RGBA,o.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_}readPixel(e,o){if(e<0||o<0||e>this.size_[0]||o>=this.size_[1])return G[0]=0,G[1]=0,G[2]=0,G[3]=0,G;this.readAll();let t=Math.floor(e)+(this.size_[1]-Math.floor(o)-1)*this.size_[0];return G[0]=this.data_[t*4],G[1]=this.data_[t*4+1],G[2]=this.data_[t*4+2],G[3]=this.data_[t*4+3],G}getTexture(){return this.texture_}getFramebuffer(){return this.framebuffer_}getDepthbuffer(){return this.depthbuffer_}updateSize_(){let e=this.size_,o=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer_),o.viewport(0,0,e[0],e[1]),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,this.texture_,0),o.bindRenderbuffer(o.RENDERBUFFER,this.depthbuffer_),o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_COMPONENT16,e[0],e[1]),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,this.depthbuffer_),this.data_=new Uint8Array(e[0]*e[1]*4)}},Po=ct;function Fo(i,e){let o=i.viewState.projection,n=e.getSource().getWrapX()&&o.canWrapX(),r=o.getExtent(),s=i.extent,a=n?Z(r):null,c=n?Math.ceil((s[2]-r[2])/a)+1:1;return[n?Math.floor((s[0]-r[0])/a):0,c,a]}var ae=xt(F({},Ht),{RENDER_EXTENT:"u_renderExtent",PATTERN_ORIGIN:"u_patternOrigin",GLOBAL_ALPHA:"u_globalAlpha"}),ut=class extends Kt{constructor(e,o){let t={[ae.RENDER_EXTENT]:[0,0,0,0],[ae.PATTERN_ORIGIN]:[0,0],[ae.GLOBAL_ALPHA]:1};super(e,{uniforms:t,postProcesses:o.postProcesses}),this.hitDetectionEnabled_=!o.disableHitDetection,this.hitRenderTarget_,this.sourceRevision_=-1,this.previousExtent_=he(),this.currentTransform_=z(),this.tmpCoords_=[0,0],this.tmpTransform_=z(),this.tmpMat4_=Gt(),this.currentFrameStateTransform_=z(),this.styleVariables_={},this.styles_=[],this.styleRenderers_=[],this.buffers_=[],this.applyOptions_(o),this.batch_=new mo,this.initialFeaturesAdded_=!1,this.sourceListenKeys_=null}addInitialFeatures_(e){let o=this.getLayer().getSource(),t=Q(),n;t&&(n=Ce(t,e.viewState.projection)),this.batch_.addFeatures(o.getFeatures(),n),this.sourceListenKeys_=[de(o,me.ADDFEATURE,this.handleSourceFeatureAdded_.bind(this,n)),de(o,me.CHANGEFEATURE,this.handleSourceFeatureChanged_.bind(this,n),this),de(o,me.REMOVEFEATURE,this.handleSourceFeatureDelete_,this),de(o,me.CLEAR,this.handleSourceFeatureClear_,this)]}applyOptions_(e){this.styleVariables_=e.variables,this.styles_=So(e.style)}createRenderers_(){this.buffers_=[],this.styleRenderers_=this.styles_.map(e=>new Co(e,this.styleVariables_,this.helper,this.hitDetectionEnabled_,"filter"in e?e.filter:null))}reset(e){this.applyOptions_(e),this.helper&&this.createRenderers_(),super.reset(e)}afterHelperCreated(){this.styleRenderers_.length?this.styleRenderers_.forEach((e,o)=>e.setHelper(this.helper,this.buffers_[o])):this.createRenderers_(),this.hitDetectionEnabled_&&(this.hitRenderTarget_=new Po(this.helper))}handleSourceFeatureAdded_(e,o){let t=o.feature;this.batch_.addFeature(t,e)}handleSourceFeatureChanged_(e,o){let t=o.feature;this.batch_.changeFeature(t,e)}handleSourceFeatureDelete_(e){let o=e.feature;this.batch_.removeFeature(o)}handleSourceFeatureClear_(){this.batch_.clear()}applyUniforms_(e){Lt(this.tmpTransform_,this.currentFrameStateTransform_),Tt(this.tmpTransform_,e),this.helper.setUniformMatrixValue(ae.PROJECTION_MATRIX,Ke(this.tmpMat4_,this.tmpTransform_)),pe(this.tmpTransform_,this.tmpTransform_),this.helper.setUniformMatrixValue(ae.SCREEN_TO_WORLD_MATRIX,Ke(this.tmpMat4_,this.tmpTransform_)),this.tmpCoords_[0]=0,this.tmpCoords_[1]=0,pe(this.tmpTransform_,e),H(this.tmpTransform_,this.tmpCoords_),this.helper.setUniformFloatVec2(ae.PATTERN_ORIGIN,this.tmpCoords_)}renderFrame(e){let o=this.helper.getGL();this.preRender(o,e);let[t,n,r]=Fo(e,this.getLayer());this.helper.prepareDraw(e),this.renderWorlds(e,!1,t,n,r),this.helper.finalizeDraw(e,this.dispatchPreComposeEvent,this.dispatchPostComposeEvent);let s=this.helper.getCanvas();return this.hitDetectionEnabled_&&(this.renderWorlds(e,!0,t,n,r),this.hitRenderTarget_.clearCachedData()),this.postRender(o,e),s}prepareFrameInternal(e){this.initialFeaturesAdded_||(this.addInitialFeatures_(e),this.initialFeaturesAdded_=!0);let o=this.getLayer(),t=o.getSource(),n=e.viewState,r=!e.viewHints[B.ANIMATING]&&!e.viewHints[B.INTERACTING],s=!_t(this.previousExtent_,e.extent),a=this.sourceRevision_<t.getRevision();if(a&&(this.sourceRevision_=t.getRevision()),r&&(s||a)){let c=n.projection,l=n.resolution,u=o instanceof X?o.getRenderBuffer():0,h=be(e.extent,u*l),d=Q();d?t.loadFeatures(fe(h,d),Pe(l,c),d):t.loadFeatures(h,l,c),this.ready=!1;let p=this.helper.makeProjectionTransform(e,z()),w=this.styleRenderers_.map((_,y)=>_.generateBuffers(this.batch_,p).then(b=>{this.buffers_[y]&&this.disposeBuffers(this.buffers_[y]),this.buffers_[y]=b}));Promise.all(w).then(()=>{this.ready=!0,this.getLayer().changed()}),this.previousExtent_=e.extent.slice()}return!0}renderWorlds(e,o,t,n,r){let s=t;o&&(this.hitRenderTarget_.setSize([Math.floor(e.size[0]/2),Math.floor(e.size[1]/2)]),this.helper.prepareDrawToRenderTarget(e,this.hitRenderTarget_,!0));do{this.helper.makeProjectionTransform(e,this.currentFrameStateTransform_),kt(this.currentFrameStateTransform_,s*r,0);for(let a=0,c=this.styleRenderers_.length;a<c;a++){let l=this.styleRenderers_[a],u=this.buffers_[a];u&&l.render(u,e,()=>{this.applyUniforms_(u.invertVerticesTransform),this.helper.applyHitDetectionUniform(o)})}}while(++s<n)}forEachFeatureAtCoordinate(e,o,t,n,r){if(Se(this.hitDetectionEnabled_,"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has been disabled using the `disableHitDetection: true` option."),!this.styleRenderers_.length||!this.hitDetectionEnabled_)return;let s=H(o.coordinateToPixelTransform,e.slice()),a=this.hitRenderTarget_.readPixel(s[0]/2,s[1]/2),c=[a[0]/255,a[1]/255,a[2]/255,a[3]/255],l=yo(c),u=this.batch_.getFeatureFromRef(l);if(u)return n(u,this.getLayer(),null)}disposeBuffers(e){let o=t=>{for(let n of t)n&&this.helper.deleteBuffer(n)};e.pointBuffers&&o(e.pointBuffers),e.lineStringBuffers&&o(e.lineStringBuffers),e.polygonBuffers&&o(e.polygonBuffers)}disposeInternal(){this.buffers_.forEach(e=>{e&&this.disposeBuffers(e)}),this.sourceListenKeys_&&(this.sourceListenKeys_.forEach(function(e){Mt(e)}),this.sourceListenKeys_=null),super.disposeInternal()}renderDeclutter(){}},Oe=ut;var U={BLUR:"blur",GRADIENT:"gradient",RADIUS:"radius"},en=["#00f","#0ff","#0f0","#ff0","#f00"],ht=class extends X{constructor(e){e=e||{};let o=Object.assign({},e);delete o.gradient,delete o.radius,delete o.blur,delete o.weight,super(o),this.filter_=e.filter??!0,this.styleVariables_=e.variables||{},this.gradient_=null,this.addChangeListener(U.GRADIENT,this.handleGradientChanged_),this.setGradient(e.gradient?e.gradient:en),this.setBlur(e.blur!==void 0?e.blur:15),this.setRadius(e.radius!==void 0?e.radius:8);let t=e.weight?e.weight:"weight";this.weight_=t,this.setRenderOrder(null)}getBlur(){return this.get(U.BLUR)}getGradient(){return this.get(U.GRADIENT)}getRadius(){return this.get(U.RADIUS)}handleGradientChanged_(){this.gradient_=tn(this.getGradient())}setBlur(e){let o=this.get(U.BLUR);if(this.set(U.BLUR,e),typeof e=="number"&&typeof o=="number"){this.changed();return}this.clearRenderer()}setGradient(e){this.set(U.GRADIENT,e)}setRadius(e){let o=this.get(U.RADIUS);if(this.set(U.RADIUS,e),typeof e=="number"&&typeof o=="number"){this.changed();return}this.clearRenderer()}setFilter(e){this.filter_=e,this.changed(),this.clearRenderer()}setWeight(e){this.weight_=e,this.changed(),this.clearRenderer()}createRenderer(){let e=new se,o=Le(),t=m(o,this.filter_,ee),n=m(o,this.getRadius(),v),r=m(o,this.getBlur(),v),s={};typeof this.getBlur()=="number"&&(r="a_blur",s.a_blur=()=>this.getBlur(),e.addUniform("a_blur","float")),typeof this.getRadius()=="number"&&(n="a_radius",s.a_radius=()=>this.getRadius(),e.addUniform("a_radius","float"));let a={},c=null;if(typeof this.weight_=="string"||typeof this.weight_=="function"){let h=typeof this.weight_=="string"?d=>d.get(this.weight_):this.weight_;a.prop_weight={size:1,callback:d=>{let p=h(d);return p!==void 0?Ct(p,0,1):1}},c="a_prop_weight",e.addAttribute("a_prop_weight","float")}else{let h=["clamp",this.weight_,0,1];c=m(o,h,v)}e.addFragmentShaderFunction(`float getBlurSlope() {
  float blur = max(1., ${r});
  float radius = ${n};
  return radius / blur;
}`).setSymbolSizeExpression(`vec2(${n} + ${r}) * 2.`).setSymbolColorExpression(`vec4(smoothstep(0., 1., (1. - length(coordsPx * 2. / v_quadSizePx)) * getBlurSlope()) * ${c})`).setStrokeColorExpression(`vec4(smoothstep(0., 1., (1. - length(currentRadiusPx * 2. / v_width)) * getBlurSlope()) * ${c})`).setStrokeWidthExpression(`(${n} + ${r}) * 2.`).setFillColorExpression(`vec4(${c})`).setFragmentDiscardExpression(`!${t}`),ke(e,o);let l=Ve(o),u=Ne(o,this.styleVariables_);return new Oe(this,{className:this.getClassName(),variables:this.styleVariables_,style:{builder:e,attributes:F(F({},l),a),uniforms:F(F({},u),s)},disableHitDetection:!1,postProcesses:[{fragmentShader:`
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
            }`,uniforms:{u_gradientTexture:()=>this.gradient_,u_opacity:()=>this.getOpacity()}}]})}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}renderDeclutter(){}};function tn(i){let t=Fe(1,256),n=t.createLinearGradient(0,0,1,256),r=1/(i.length-1);for(let s=0,a=i.length;s<a;++s)n.addColorStop(s*r,i[s]);return t.fillStyle=n,t.fillRect(0,0,1,256),t.canvas}var Mo=ht;var on=["*"],Be=class i{wolClassName=f();wolOpacity=x();wolVisible=x();wolExtent=x();wolZIndex=x();wolMinResolution=x();wolMaxResolution=x();wolMinZoom=x();wolMaxZoom=x();wolGradient=x();wolRadius=x();wolBlur=x();wolWeight=f();wolFilter=f();wolVariables=f();wolSource=x();wolProperties=f();wolChange=g();wolError=g();wolPostRender=g();wolPreRender=g();wolPropertyChange=g();wolSourceReady=g();instance;constructor(){let e=R(D),o=q("Heatmap"),t={};k(()=>{let n=new Mo({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),gradient:this.wolGradient(),radius:this.wolRadius(),blur:this.wolBlur(),weight:this.wolWeight(),filter:this.wolFilter(),variables:this.wolVariables(),source:this.wolSource(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:blur"]=n.on("change:blur",()=>this.wolBlur.set(n.getBlur())),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:gradient"]=n.on("change:gradient",()=>this.wolGradient.set(n.getGradient())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:radius"]=n.on("change:radius",()=>this.wolRadius.set(n.getRadius())),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex())),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{I(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolBlur":this.instance.setBlur(t.currentValue);break;case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolFilter":this.instance.setFilter(t.currentValue);break;case"wolGradient":this.instance.setGradient(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue??{});break;case"wolRadius":this.instance.setRadius(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue??null);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolWeight":this.instance.setWeight(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break;case"wolVariables":this.instance.updateStyleVariables(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=L({type:i,selectors:[["wol-heatmap-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolGradient:[1,"wolGradient"],wolRadius:[1,"wolRadius"],wolBlur:[1,"wolBlur"],wolWeight:[1,"wolWeight"],wolFilter:[1,"wolFilter"],wolVariables:[1,"wolVariables"],wolSource:[1,"wolSource"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolGradient:"wolGradientChange",wolRadius:"wolRadiusChange",wolBlur:"wolBlurChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolHeatmapLayer"],features:[T],ngContentSelectors:on,decls:1,vars:0,template:function(o,t){o&1&&(N(),V(0))},encapsulation:2,changeDetection:0})};var dt=class extends Wt{constructor(e){super(e),this.boundHandleStyleImageChange_=this.handleStyleImageChange_.bind(this),this.animatingOrInteracting_,this.hitDetectionImageData_=null,this.clipped_=!1,this.renderedFeatures_=null,this.renderedRevision_=-1,this.renderedResolution_=NaN,this.renderedExtent_=he(),this.wrappedRenderedExtent_=he(),this.renderedRotation_,this.renderedCenter_=null,this.renderedProjection_=null,this.renderedPixelRatio_=1,this.renderedRenderOrder_=null,this.renderedFrameDeclutter_,this.replayGroup_=null,this.replayGroupChanged=!0,this.clipping=!0,this.targetContext_=null,this.opacity_=1}renderWorlds(e,o,t){let n=o.extent,r=o.viewState,s=r.center,a=r.resolution,c=r.projection,l=r.rotation,u=c.getExtent(),h=this.getLayer().getSource(),d=this.getLayer().getDeclutter(),p=o.pixelRatio,w=o.viewHints,_=!(w[B.ANIMATING]||w[B.INTERACTING]),y=this.context,b=Math.round(Z(n)/a*p),O=Math.round(Ee(n)/a*p),C=h.getWrapX()&&c.canWrapX(),M=C?Z(u):null,ye=C?Math.ceil((n[2]-u[2])/M)+1:1,J=C?Math.floor((n[0]-u[0])/M):0;do{let Y=this.getRenderTransform(s,a,0,p,b,O,J*M);o.declutter&&(Y=Y.slice(0)),e.execute(y,[y.canvas.width,y.canvas.height],Y,l,_,t===void 0?ro:t?io:so,t?d&&o.declutter[d]:void 0)}while(++J<ye)}setDrawContext_(){this.opacity_!==1&&(this.targetContext_=this.context,this.context=Fe(this.context.canvas.width,this.context.canvas.height,He))}resetDrawContext_(){if(this.opacity_!==1&&this.targetContext_){let e=this.targetContext_.globalAlpha;this.targetContext_.globalAlpha=this.opacity_,this.targetContext_.drawImage(this.context.canvas,0,0),this.targetContext_.globalAlpha=e,It(this.context),He.push(this.context.canvas),this.context=this.targetContext_,this.targetContext_=null}}renderDeclutter(e){!this.replayGroup_||!this.getLayer().getDeclutter()||this.renderWorlds(this.replayGroup_,e,!0)}renderDeferredInternal(e){this.replayGroup_&&(this.replayGroup_.renderDeferred(),this.clipped_&&this.context.restore(),this.resetDrawContext_())}renderFrame(e,o){let t=e.layerStatesArray[e.layerIndex];this.opacity_=t.opacity;let n=e.viewState;this.prepareContainer(e,o);let r=this.context,s=this.replayGroup_,a=s&&!s.isEmpty();if(!a&&!(this.getLayer().hasListener(Ue.PRERENDER)||this.getLayer().hasListener(Ue.POSTRENDER)))return this.container;this.setDrawContext_(),this.preRender(r,e);let c=n.projection;if(this.clipped_=!1,a&&t.extent&&this.clipping){let l=Dt(t.extent,c);a=bt(l,e.extent),this.clipped_=a&&!ue(l,e.extent),this.clipped_&&this.clipUnrotated(r,e,l)}return a&&this.renderWorlds(s,e,this.getLayer().getDeclutter()?!1:void 0),!e.declutter&&this.clipped_&&r.restore(),this.postRender(r,e),this.renderedRotation_!==n.rotation&&(this.renderedRotation_=n.rotation,this.hitDetectionImageData_=null),e.declutter||this.resetDrawContext_(),this.container}getFeatures(e){return new Promise(o=>{if(this.frameState&&!this.hitDetectionImageData_&&!this.animatingOrInteracting_){let t=this.frameState.size.slice(),n=this.renderedCenter_,r=this.renderedResolution_,s=this.renderedRotation_,a=this.renderedProjection_,c=this.wrappedRenderedExtent_,l=this.getLayer(),u=[],h=t[0]*ne,d=t[1]*ne;u.push(this.getRenderTransform(n,r,s,ne,h,d,0).slice());let p=l.getSource(),w=a.getExtent();if(p.getWrapX()&&a.canWrapX()&&!ue(w,c)){let y=c[0],b=Z(w),O=0,C;for(;y<w[0];)--O,C=b*O,u.push(this.getRenderTransform(n,r,s,ne,h,d,C).slice()),y+=b;for(O=0,y=c[2];y>w[2];)++O,C=b*O,u.push(this.getRenderTransform(n,r,s,ne,h,d,C).slice()),y-=b}let _=Q();this.hitDetectionImageData_=lo(t,u,this.renderedFeatures_,l.getStyleFunction(),c,r,s,Qe(r,this.renderedPixelRatio_),_?a:null)}o(co(e,this.renderedFeatures_,this.hitDetectionImageData_))})}forEachFeatureAtCoordinate(e,o,t,n,r){if(!this.replayGroup_)return;let s=o.viewState.resolution,a=o.viewState.rotation,c=this.getLayer(),l={},u=function(d,p,w){let _=P(d),y=l[_];if(y){if(y!==!0&&w<y.distanceSq){if(w===0)return l[_]=!0,r.splice(r.lastIndexOf(y),1),n(d,c,p);y.geometry=p,y.distanceSq=w}}else{if(w===0)return l[_]=!0,n(d,c,p);r.push(l[_]={feature:d,layer:c,geometry:p,distanceSq:w,callback:n})}},h=this.getLayer().getDeclutter();return this.replayGroup_.forEachFeatureAtCoordinate(e,s,a,t,u,h?o.declutter?.[h]?.all().map(d=>d.value):null)}handleFontsChanged(){let e=this.getLayer();e.getVisible()&&this.replayGroup_&&e.changed()}handleStyleImageChange_(e){this.renderIfReadyAndVisible()}prepareFrame(e){let o=this.getLayer(),t=o.getSource();if(!t)return!1;let n=e.viewHints[B.ANIMATING],r=e.viewHints[B.INTERACTING],s=o.getUpdateWhileAnimating(),a=o.getUpdateWhileInteracting();if(this.ready&&!s&&n||!a&&r)return this.animatingOrInteracting_=!0,!0;this.animatingOrInteracting_=!1;let c=e.extent,l=e.viewState,u=l.projection,h=l.resolution,d=e.pixelRatio,p=o.getRevision(),w=o.getRenderBuffer(),_=o.getRenderOrder();_===void 0&&(_=uo);let y=l.center.slice(),b=be(c,w*h),O=b.slice(),C=[b.slice()],M=u.getExtent();if(t.getWrapX()&&u.canWrapX()&&!ue(M,e.extent)){let E=Z(M),$=Math.max(Z(b)/2,E);b[0]=M[0]-$,b[2]=M[2]+$,Pt(y,u);let S=St(C[0],u);S[0]<M[0]&&S[2]<M[2]?C.push([S[0]+E,S[1],S[2]+E,S[3]]):S[0]>M[0]&&S[2]>M[2]&&C.push([S[0]-E,S[1],S[2]-E,S[3]])}if(this.ready&&this.renderedResolution_==h&&this.renderedRevision_==p&&this.renderedRenderOrder_==_&&this.renderedFrameDeclutter_===!!e.declutter&&ue(this.wrappedRenderedExtent_,b))return Re(this.renderedExtent_,O)||(this.hitDetectionImageData_=null,this.renderedExtent_=O),this.renderedCenter_=y,this.replayGroupChanged=!1,!0;this.replayGroup_=null;let ye=new no(ho(h,d),b,h,d),J=Q(),Y;if(J){for(let E=0,$=C.length;E<$;++E){let S=C[E],_e=fe(S,u);t.loadFeatures(_e,Pe(h,u),J)}Y=Ce(J,u)}else for(let E=0,$=C.length;E<$;++E)t.loadFeatures(C[E],h,u);let Oo=Qe(h,d),Ge=!0,Bo=(E,$)=>{let S,_e=E.getStyleFunction()||o.getStyleFunction();if(_e&&(S=_e(E,h)),S){let Wo=this.renderFeature(E,Oo,S,ye,Y,this.getLayer().getDeclutter(),$);Ge=Ge&&!Wo}},$o=fe(b,u),ve=t.getFeaturesInExtent($o);_&&ve.sort(_);for(let E=0,$=ve.length;E<$;++E)Bo(ve[E],E);this.renderedFeatures_=ve,this.ready=Ge;let Zo=ye.finish(),jo=new ao(b,h,d,t.getOverlaps(),Zo,o.getRenderBuffer(),!!e.declutter);return this.renderedResolution_=h,this.renderedRevision_=p,this.renderedRenderOrder_=_,this.renderedFrameDeclutter_=!!e.declutter,this.renderedExtent_=O,this.wrappedRenderedExtent_=b,this.renderedCenter_=y,this.renderedProjection_=u,this.renderedPixelRatio_=d,this.replayGroup_=jo,this.hitDetectionImageData_=null,this.replayGroupChanged=!0,!0}renderFeature(e,o,t,n,r,s,a){if(!t)return!1;let c=!1;if(Array.isArray(t))for(let l=0,u=t.length;l<u;++l)c=et(n,e,t[l],o,this.boundHandleStyleImageChange_,r,s,a)||c;else c=et(n,e,t,o,this.boundHandleStyleImageChange_,r,s,a);return c}},$e=dt;var ft=class extends X{constructor(e){super(e)}createRenderer(){return new $e(this)}},Do=ft;var nn=["*"],ce=class i{wolClassName=f();wolOpacity=x();wolVisible=x();wolExtent=x();wolZIndex=x();wolMinResolution=x();wolMaxResolution=x();wolMinZoom=x();wolMaxZoom=x();wolRenderOrder=f();wolRenderBuffer=f();wolSource=x();wolMap=f();wolDeclutter=f();wolStyle=f();wolBackground=f();wolUpdateWhileAnimating=f();wolUpdateWhileInteracting=f();wolProperties=f();wolChange=g();wolError=g();wolPostRender=g();wolPreRender=g();wolPropertyChange=g();wolSourceReady=g();instance;constructor(){let e=R(D),o=q("VectorLayer"),t={};k(()=>{let n=new Do({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),renderOrder:this.wolRenderOrder(),renderBuffer:this.wolRenderBuffer(),source:this.wolSource(),map:this.wolMap(),declutter:this.wolDeclutter(),style:this.wolStyle(),background:this.wolBackground(),updateWhileAnimating:this.wolUpdateWhileAnimating(),updateWhileInteracting:this.wolUpdateWhileInteracting(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex()??0)),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{I(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolDeclutter":this.instance.setDeclutter(t.currentValue);break;case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolMap":this.instance.setMap(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue);break;case"wolStyle":this.instance.setStyle(t.currentValue);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=L({type:i,selectors:[["wol-vector-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolRenderOrder:[1,"wolRenderOrder"],wolRenderBuffer:[1,"wolRenderBuffer"],wolSource:[1,"wolSource"],wolMap:[1,"wolMap"],wolDeclutter:[1,"wolDeclutter"],wolStyle:[1,"wolStyle"],wolBackground:[1,"wolBackground"],wolUpdateWhileAnimating:[1,"wolUpdateWhileAnimating"],wolUpdateWhileInteracting:[1,"wolUpdateWhileInteracting"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolVectorLayer"],features:[T],ngContentSelectors:nn,decls:1,vars:0,template:function(o,t){o&1&&(N(),V(0))},encapsulation:2,changeDetection:0})};var pt=class extends eo{constructor(e){super(e),this.vectorRenderer_=new $e(e),this.layerImageRatio_=e.getImageRatio(),this.coordinateToVectorPixelTransform_=z(),this.renderedPixelToCoordinateTransform_=null}disposeInternal(){this.vectorRenderer_.dispose(),super.disposeInternal()}getFeatures(e){if(!this.vectorRenderer_)return Promise.resolve([]);let o=H(this.coordinateToVectorPixelTransform_,H(this.renderedPixelToCoordinateTransform_,e.slice()));return this.vectorRenderer_.getFeatures(o)}handleFontsChanged(){this.vectorRenderer_.handleFontsChanged()}prepareFrame(e){let o=e.pixelRatio,t=e.viewState,n=t.resolution,r=e.viewHints,s=this.vectorRenderer_,a=e.extent;this.layerImageRatio_!==1&&(a=a.slice(0),Rt(a,this.layerImageRatio_));let c=Z(a)/n,l=Ee(a)/n;if(!r[B.ANIMATING]&&!r[B.INTERACTING]&&!Et(a)){s.useContainer(null,null);let u=s.context,h=e.layerStatesArray[e.layerIndex],d=Object.assign({},h,{opacity:1}),p=Object.assign({},e,{extent:a,size:[c,l],viewState:Object.assign({},e.viewState,{rotation:0}),layerStatesArray:[d],layerIndex:0,declutter:null}),w=this.getLayer().getDeclutter();w&&(p.declutter={[w]:new Ot(9)});let _=new Qt(a,n,o,u.canvas,function(y){s.prepareFrame(p)&&s.replayGroupChanged&&(s.clipping=!1,s.renderFrame(p,null),s.renderDeclutter(p),s.renderDeferred(p),y())});_.addEventListener(Ft.CHANGE,()=>{if(_.getState()!==jt.LOADED)return;this.image=_;let y=_.getPixelRatio(),b=to(_.getResolution())*o/y;this.renderedResolution=b,this.coordinateToVectorPixelTransform_=Nt(this.coordinateToVectorPixelTransform_,c/2,l/2,1/b,-1/b,0,-t.center[0],-t.center[1])}),_.load()}return this.image&&(this.renderedPixelToCoordinateTransform_=e.pixelToCoordinateTransform.slice()),!this.getLayer().getSource()?.loading&&!!this.image}preRender(){}postRender(){}renderDeclutter(){}forEachFeatureAtCoordinate(e,o,t,n,r){return this.vectorRenderer_?this.vectorRenderer_.forEachFeatureAtCoordinate(e,o,t,n,r):super.forEachFeatureAtCoordinate(e,o,t,n,r)}},To=pt;var gt=class extends X{constructor(e){e=e||{};let o=Object.assign({},e);delete o.imageRatio,super(o),this.imageRatio_=e.imageRatio!==void 0?e.imageRatio:1}getImageRatio(){return this.imageRatio_}createRenderer(){return new To(this)}},Lo=gt;var rn=["*"],Ze=class i{wolClassName=f();wolOpacity=x();wolVisible=x();wolExtent=x();wolZIndex=x();wolMinResolution=x();wolMaxResolution=x();wolMinZoom=x();wolMaxZoom=x();wolRenderOrder=f();wolRenderBuffer=f();wolSource=x();wolMap=f();wolDeclutter=f();wolStyle=f();wolBackground=f();wolImageRatio=f();wolProperties=f();wolChange=g();wolError=g();wolPostRender=g();wolPreRender=g();wolPropertyChange=g();wolSourceReady=g();instance;constructor(){let e=R(D),o=q("VectorImageLayer"),t={};k(()=>{let n=new Lo({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),renderOrder:this.wolRenderOrder(),renderBuffer:this.wolRenderBuffer(),source:this.wolSource(),map:this.wolMap(),declutter:this.wolDeclutter(),style:this.wolStyle(),background:this.wolBackground(),imageRatio:this.wolImageRatio(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex()??0)),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{I(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolDeclutter":this.instance.setDeclutter(t.currentValue);break;case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolMap":this.instance.setMap(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue);break;case"wolStyle":this.instance.setStyle(t.currentValue);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=L({type:i,selectors:[["wol-vector-image-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolRenderOrder:[1,"wolRenderOrder"],wolRenderBuffer:[1,"wolRenderBuffer"],wolSource:[1,"wolSource"],wolMap:[1,"wolMap"],wolDeclutter:[1,"wolDeclutter"],wolStyle:[1,"wolStyle"],wolBackground:[1,"wolBackground"],wolImageRatio:[1,"wolImageRatio"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolVectorImageLayer"],features:[T],ngContentSelectors:rn,decls:1,vars:0,template:function(o,t){o&1&&(N(),V(0))},encapsulation:2,changeDetection:0})};var mt=class extends At{constructor(e){let o=Object.assign({},e);super(o),this.styleVariables_=e.variables||{},this.style_=e.style,this.hitDetectionDisabled_=!!e.disableHitDetection}createRenderer(){return new Oe(this,{style:this.style_,variables:this.styleVariables_,disableHitDetection:this.hitDetectionDisabled_})}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}setStyle(e){this.style_=e,this.clearRenderer(),this.changed()}},ko=mt;var sn=["*"],je=class i{wolClassName=f();wolOpacity=x();wolVisible=x();wolExtent=x();wolZIndex=x();wolMinResolution=x();wolMaxResolution=x();wolMinZoom=x();wolMaxZoom=x();wolSource=x();wolStyle=f.required();wolVariables=f();wolBackground=f();wolDisableHitDetection=f();wolProperties=f();wolChange=g();wolError=g();wolPostRender=g();wolPreRender=g();wolPropertyChange=g();wolSourceReady=g();instance;constructor(){let e=R(D),o=q("WebGLVectorLayer"),t={};k(()=>{let n=new ko({className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),source:this.wolSource(),style:this.wolStyle(),variables:this.wolVariables(),background:this.wolBackground(),disableHitDetection:this.wolDisableHitDetection(),properties:this.wolProperties()});t.change=n.on("change",r=>this.wolChange.emit(r)),t["change:extent"]=n.on("change:extent",()=>this.wolExtent.set(n.getExtent())),t["change:maxResolution"]=n.on("change:maxResolution",()=>this.wolMaxResolution.set(n.getMaxResolution())),t["change:minResolution"]=n.on("change:minResolution",()=>this.wolMinResolution.set(n.getMinResolution())),t["change:maxZoom"]=n.on("change:maxZoom",()=>this.wolMaxZoom.set(n.getMaxZoom())),t["change:minZoom"]=n.on("change:minZoom",()=>this.wolMinZoom.set(n.getMinZoom())),t["change:opacity"]=n.on("change:opacity",()=>this.wolOpacity.set(n.getOpacity())),t["change:source"]=n.on("change:source",()=>this.wolSource.set(n.getSource()??void 0)),t["change:visible"]=n.on("change:visible",()=>this.wolVisible.set(n.getVisible())),t["change:zIndex"]=n.on("change:zIndex",()=>this.wolZIndex.set(n.getZIndex()??0)),t.error=n.on("error",r=>this.wolError.emit(r)),t.postrender=n.on("postrender",r=>this.wolPostRender.emit(r)),t.prerender=n.on("prerender",r=>this.wolPreRender.emit(r)),t.propertychange=n.on("propertychange",r=>this.wolPropertyChange.emit(r)),t.sourceready=n.on("sourceready",r=>this.wolSourceReady.emit(r)),Promise.resolve().then(()=>{o.addLayer(n)}),this.instance=n}),e.onDestroy(()=>{I(Object.values(t)),this.instance&&(o.removeLayer(this.instance),this.instance.dispose(),this.instance=void 0)})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolExtent":this.instance.setExtent(t.currentValue);break;case"wolMaxResolution":this.instance.setMaxResolution(t.currentValue);break;case"wolMinResolution":this.instance.setMinResolution(t.currentValue);break;case"wolMaxZoom":this.instance.setMaxZoom(t.currentValue);break;case"wolMinZoom":this.instance.setMinZoom(t.currentValue);break;case"wolOpacity":this.instance.setOpacity(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue);break;case"wolSource":this.instance.setSource(t.currentValue);break;case"wolStyle":this.instance.setStyle(t.currentValue);break;case"wolVariables":this.instance.updateStyleVariables(t.currentValue);break;case"wolVisible":this.instance.setVisible(t.currentValue);break;case"wolZIndex":this.instance.setZIndex(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=L({type:i,selectors:[["wol-webgl-vector-layer"]],inputs:{wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolSource:[1,"wolSource"],wolStyle:[1,"wolStyle"],wolVariables:[1,"wolVariables"],wolBackground:[1,"wolBackground"],wolDisableHitDetection:[1,"wolDisableHitDetection"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolSource:"wolSourceChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolWebGLVectorLayer"],features:[T],ngContentSelectors:sn,decls:1,vars:0,template:function(o,t){o&1&&(N(),V(0))},encapsulation:2,changeDetection:0})};function No(i){let o=R(ce,{host:!0,optional:!0});if(o)return{setSource:t=>(o.getInstance()?.setSource(t),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};throw new Error(`No ClusterSource host found. Please wrap the ${i} component in a VectorLayer component.`)}var an=["*"],We=class i{wolAttributions=f();wolDistance=f();wolMinDistance=f();wolGeometryFunction=f();wolCreateCluster=f();wolSource=f();wolWrapX=f();wolProperties=f();wolAddFeature=g();wolChange=g();wolChangeFeature=g();wolClear=g();wolError=g();wolFeaturesLoadEnd=g();wolFeaturesLoadError=g();wolFeaturesLoadStart=g();wolPropertyChange=g();wolRemoveFeature=g();instance;constructor(){let e=R(D),o=No("Cluster"),t={},n;k(()=>{let r=new po({attributions:this.wolAttributions(),distance:this.wolDistance(),minDistance:this.wolMinDistance(),geometryFunction:this.wolGeometryFunction(),createCluster:this.wolCreateCluster(),source:this.wolSource(),wrapX:this.wolWrapX()});this.wolProperties()&&r.setProperties(this.wolProperties()??{},!0),t.addfeature=r.on("addfeature",s=>{this.wolAddFeature.emit(s)}),t.change=r.on("change",s=>{this.wolChange.emit(s)}),t.changefeature=r.on("changefeature",s=>{this.wolChangeFeature.emit(s)}),t.clear=r.on("clear",s=>{this.wolClear.emit(s)}),t.error=r.on("error",s=>{this.wolError.emit(s)}),t.featuresloadend=r.on("featuresloadend",s=>{this.wolFeaturesLoadEnd.emit(s)}),t.featuresloaderror=r.on("featuresloaderror",s=>{this.wolFeaturesLoadError.emit(s)}),t.featuresloadstart=r.on("featuresloadstart",s=>{this.wolFeaturesLoadStart.emit(s)}),t.propertychange=r.on("propertychange",s=>{this.wolPropertyChange.emit(s)}),t.removefeature=r.on("removefeature",s=>{this.wolRemoveFeature.emit(s)}),Promise.resolve().then(()=>{n=o.setSource(r)}),this.instance=r}),e.onDestroy(()=>{I(Object.values(t)),n&&n(),this.instance?.setSource(null),this.instance=void 0})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolAttributions":this.instance.setAttributions(t.currentValue);break;case"wolDistance":this.instance.setDistance(t.currentValue);break;case"wolMinDistance":this.instance.setMinDistance(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue??{});break;case"wolSource":this.instance.setSource(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=L({type:i,selectors:[["wol-cluster-source"]],inputs:{wolAttributions:[1,"wolAttributions"],wolDistance:[1,"wolDistance"],wolMinDistance:[1,"wolMinDistance"],wolGeometryFunction:[1,"wolGeometryFunction"],wolCreateCluster:[1,"wolCreateCluster"],wolSource:[1,"wolSource"],wolWrapX:[1,"wolWrapX"],wolProperties:[1,"wolProperties"]},outputs:{wolAddFeature:"wolAddFeature",wolChange:"wolChange",wolChangeFeature:"wolChangeFeature",wolClear:"wolClear",wolError:"wolError",wolFeaturesLoadEnd:"wolFeaturesLoadEnd",wolFeaturesLoadError:"wolFeaturesLoadError",wolFeaturesLoadStart:"wolFeaturesLoadStart",wolPropertyChange:"wolPropertyChange",wolRemoveFeature:"wolRemoveFeature"},exportAs:["wolClusterSource"],features:[T],ngContentSelectors:an,decls:1,vars:0,template:function(o,t){o&1&&(N(),V(0))},encapsulation:2,changeDetection:0})};function Vo(i){let e={host:!0,optional:!0},o=R(Be,e),t=R(Ze,e),n=R(ce,e),r=R(je,e),s=R(We,e);if(s)return{setSource:a=>(s.getInstance()?.setSource(a),()=>{s.getInstance()?.setSource(null)}),getInstance:()=>s.getInstance()};if(o)return{setSource:a=>(o.getInstance()?.setSource(a),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};if(t)return{setSource:a=>(t.getInstance()?.setSource(a),()=>{t.getInstance()?.setSource(null)}),getInstance:()=>t.getInstance()};if(n)return{setSource:a=>(n.getInstance()?.setSource(a),()=>{n.getInstance()?.setSource(null)}),getInstance:()=>n.getInstance()};if(r)return{setSource:a=>(r.getInstance()?.setSource(a),()=>{r.getInstance()?.setSource(null)}),getInstance:()=>r.getInstance()};throw new Error(`No VectorSource host found. Please wrap the ${i} component in a HeatmapLayer, VectorImageLayer, VectorLayer or WebGLVectorLayer component.`)}var ln=["*"],Io=class i{wolAttributions=f();wolFeatures=f();wolFormat=f();wolLoader=f();wolOverlaps=f();wolStrategy=f();wolUrl=f();wolUseSpatialIndex=f();wolWrapX=f();wolProperties=f();wolAddFeature=g();wolChange=g();wolChangeFeature=g();wolClear=g();wolError=g();wolFeaturesLoadEnd=g();wolFeaturesLoadError=g();wolFeaturesLoadStart=g();wolPropertyChange=g();wolRemoveFeature=g();instance;constructor(){let e=R(D),o=Vo("VectorSource"),t={},n;k(()=>{let r=new fo({attributions:this.wolAttributions(),features:this.wolFeatures(),format:this.wolFormat(),loader:this.wolLoader(),overlaps:this.wolOverlaps(),strategy:this.wolStrategy(),url:this.wolUrl(),useSpatialIndex:this.wolUseSpatialIndex(),wrapX:this.wolWrapX()});this.wolProperties()&&r.setProperties(this.wolProperties()??{},!0),t.addfeature=r.on("addfeature",s=>{this.wolAddFeature.emit(s)}),t.change=r.on("change",s=>{this.wolChange.emit(s)}),t.changefeature=r.on("changefeature",s=>{this.wolChangeFeature.emit(s)}),t.clear=r.on("clear",s=>{this.wolClear.emit(s)}),t.error=r.on("error",s=>{this.wolError.emit(s)}),t.featuresloadend=r.on("featuresloadend",s=>{this.wolFeaturesLoadEnd.emit(s)}),t.featuresloaderror=r.on("featuresloaderror",s=>{this.wolFeaturesLoadError.emit(s)}),t.featuresloadstart=r.on("featuresloadstart",s=>{this.wolFeaturesLoadStart.emit(s)}),t.propertychange=r.on("propertychange",s=>{this.wolPropertyChange.emit(s)}),t.removefeature=r.on("removefeature",s=>{this.wolRemoveFeature.emit(s)}),Promise.resolve().then(()=>{n=o.setSource(r)}),this.instance=r}),e.onDestroy(()=>{I(Object.values(t)),n&&n(),this.instance=void 0})}ngOnChanges(e){if(this.instance)for(let[o,t]of Object.entries(e))switch(o){case"wolAttributions":this.instance.setAttributions(t.currentValue);break;case"wolLoader":this.instance.setLoader(t.currentValue);break;case"wolProperties":this.instance.setProperties(t.currentValue??{});break;case"wolUrl":this.instance.setUrl(t.currentValue);break}}getInstance(){return this.instance}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=L({type:i,selectors:[["wol-vector-source"]],inputs:{wolAttributions:[1,"wolAttributions"],wolFeatures:[1,"wolFeatures"],wolFormat:[1,"wolFormat"],wolLoader:[1,"wolLoader"],wolOverlaps:[1,"wolOverlaps"],wolStrategy:[1,"wolStrategy"],wolUrl:[1,"wolUrl"],wolUseSpatialIndex:[1,"wolUseSpatialIndex"],wolWrapX:[1,"wolWrapX"],wolProperties:[1,"wolProperties"]},outputs:{wolAddFeature:"wolAddFeature",wolChange:"wolChange",wolChangeFeature:"wolChangeFeature",wolClear:"wolClear",wolError:"wolError",wolFeaturesLoadEnd:"wolFeaturesLoadEnd",wolFeaturesLoadError:"wolFeaturesLoadError",wolFeaturesLoadStart:"wolFeaturesLoadStart",wolPropertyChange:"wolPropertyChange",wolRemoveFeature:"wolRemoveFeature"},exportAs:["wolVectorSource"],features:[T],ngContentSelectors:ln,decls:1,vars:0,template:function(o,t){o&1&&(N(),V(0))},encapsulation:2,changeDetection:0})};var Ao=class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=vt({type:i});static \u0275inj=yt({})};export{Be as a,Do as b,ce as c,Ze as d,je as e,We as f,Io as g,Ao as h};
