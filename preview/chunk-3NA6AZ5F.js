import{h as mt}from"./chunk-FWXMKCRU.js";import{B as ct,C as ft,D as Z,E as u,F as ut,G as ht,H as xt,I as pt,J as gt,K as dt,g as N,h as at,j as R,k,m,u as L,v as B,w as j,x as y,z as lt}from"./chunk-DWZJEK5H.js";import{Aa as O,V as tt,W as et,_ as nt,da as rt,dc as ot,ec as g,fc as A,gc as E,hc as F,i as Q,ic as C,mb as it,pc as st,z as v}from"./chunk-IV3CZHWS.js";import{a as T,j as X}from"./chunk-TWZW5B45.js";function vt(){return{"fill-color":"rgba(255,255,255,0.4)","stroke-color":"#3399CC","stroke-width":1.25,"circle-radius":5,"circle-fill-color":"rgba(255,255,255,0.4)","circle-stroke-width":1.25,"circle-stroke-color":"#3399CC"}}var I=.985;var b=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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

${ut}
`,$=vt(),M=class{constructor(){this.uniforms_=[],this.attributes_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${L($["circle-radius"])} + ${L($["circle-stroke-width"]*.5)})`,this.symbolRotationExpression_="0.0",this.symbolOffsetExpression_="vec2(0.0)",this.symbolColorExpression_=B($["circle-fill-color"]),this.texCoordExpression_="vec4(0.0, 0.0, 1.0, 1.0)",this.discardExpression_="false",this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=L($["stroke-width"]),this.strokeColorExpression_=B($["stroke-color"]),this.strokeOffsetExpression_="0.",this.strokeCapExpression_=y("round"),this.strokeJoinExpression_=y("round"),this.strokeMiterLimitExpression_="10.",this.strokeDistanceFieldExpression_="-1000.",this.strokePatternLengthExpression_=null,this.hasFill_=!1,this.fillColorExpression_=B($["fill-color"]),this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(t,n){return this.uniforms_.push({name:t,type:n}),this}addAttribute(t,n,e,i){return this.attributes_.push({name:t,type:n,varyingName:t.replace(/^a_/,"v_"),varyingType:i??n,varyingExpression:e??t}),this}setSymbolSizeExpression(t){return this.hasSymbol_=!0,this.symbolSizeExpression_=t,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(t){return this.symbolRotationExpression_=t,this}setSymbolOffsetExpression(t){return this.symbolOffsetExpression_=t,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(t){return this.hasSymbol_=!0,this.symbolColorExpression_=t,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(t){return this.texCoordExpression_=t,this}setFragmentDiscardExpression(t){return this.discardExpression_=t,this}getFragmentDiscardExpression(){return this.discardExpression_}setSymbolRotateWithView(t){return this.symbolRotateWithView_=t,this}setStrokeWidthExpression(t){return this.hasStroke_=!0,this.strokeWidthExpression_=t,this}setStrokeColorExpression(t){return this.hasStroke_=!0,this.strokeColorExpression_=t,this}getStrokeColorExpression(){return this.strokeColorExpression_}setStrokeOffsetExpression(t){return this.strokeOffsetExpression_=t,this}setStrokeCapExpression(t){return this.strokeCapExpression_=t,this}setStrokeJoinExpression(t){return this.strokeJoinExpression_=t,this}setStrokeMiterLimitExpression(t){return this.strokeMiterLimitExpression_=t,this}setStrokeDistanceFieldExpression(t){return this.strokeDistanceFieldExpression_=t,this}setStrokePatternLengthExpression(t){return this.strokePatternLengthExpression_=t,this}getStrokePatternLengthExpression(){return this.strokePatternLengthExpression_}setFillColorExpression(t){return this.hasFill_=!0,this.fillColorExpression_=t,this}getFillColorExpression(){return this.fillColorExpression_}addVertexShaderFunction(t){return this.vertexShaderFunctions_.includes(t)?this:(this.vertexShaderFunctions_.push(t),this)}addFragmentShaderFunction(t){return this.fragmentShaderFunctions_.includes(t)?this:(this.fragmentShaderFunctions_.push(t),this)}getSymbolVertexShader(){return this.hasSymbol_?`${b}
${this.uniforms_.map(t=>`uniform ${t.type} ${t.name};`).join(`
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

${this.attributes_.map(t=>`attribute ${t.type} ${t.name};
varying ${t.varyingType} ${t.varyingName};`).join(`
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
${this.attributes_.map(t=>`  ${t.varyingName} = ${t.varyingExpression};`).join(`
`)}
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${b}
${this.uniforms_.map(t=>`uniform ${t.type} ${t.name};`).join(`
`)}
varying vec2 v_texCoord;
varying vec4 v_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.attributes_.map(t=>`varying ${t.varyingType} ${t.varyingName};`).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

void main(void) {
${this.attributes_.map(t=>`  ${t.varyingType} ${t.name} = ${t.varyingName}; // assign to original attribute name`).join(`
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
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${b}
${this.uniforms_.map(t=>`uniform ${t.type} ${t.name};`).join(`
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

${this.attributes_.map(t=>`attribute ${t.type} ${t.name};
varying ${t.varyingType} ${t.varyingName};`).join(`
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
  if (cos(angle) > ${I} || isCap(angle)) {
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
${this.attributes_.map(t=>`  ${t.varyingName} = ${t.varyingExpression};`).join(`
`)}
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${b}
${this.uniforms_.map(t=>`uniform ${t.type} ${t.name};`).join(`
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
${this.attributes_.map(t=>`varying ${t.varyingType} ${t.varyingName};`).join(`
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
  if (cos(joinAngle) > ${I}) { // avoid risking a division by zero
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
   if (capType == ${y("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${y("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${y("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${y("miter")}) {
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
${this.attributes_.map(t=>`  ${t.varyingType} ${t.name} = ${t.varyingName}; // assign to original attribute name`).join(`
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
}`:null}getFillVertexShader(){return this.hasFill_?`${b}
${this.uniforms_.map(t=>`uniform ${t.type} ${t.name};`).join(`
`)}
attribute vec2 a_position;
attribute vec2 a_hitColor;

varying vec4 v_hitColor;

${this.attributes_.map(t=>`attribute ${t.type} ${t.name};
varying ${t.varyingType} ${t.varyingName};`).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);
  v_hitColor = unpackColor(a_hitColor);
${this.attributes_.map(t=>`  ${t.varyingName} = ${t.varyingExpression};`).join(`
`)}
}`:null}getFillFragmentShader(){return this.hasFill_?`${b}
${this.uniforms_.map(t=>`uniform ${t.type} ${t.name};`).join(`
`)}
varying vec4 v_hitColor;
${this.attributes_.map(t=>`varying ${t.varyingType} ${t.varyingName};`).join(`
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
${this.attributes_.map(t=>`  ${t.varyingType} ${t.name} = ${t.varyingName}; // assign to original attribute name`).join(`
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
}`:null}};var G=class r{constructor(){this.globalCounter_=0,this.refToFeature_=new Map,this.uidToRef_=new Map,this.freeGlobalRef_=[],this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(t,n){for(let e=0;e<t.length;e++)this.addFeature(t[e],n)}addFeature(t,n){let e=t.getGeometry();e&&(n&&(e=e.clone(),e.applyTransform(n)),this.addGeometry_(e,t))}clearFeatureEntryInPointBatch_(t){let n=v(t),e=this.pointBatch.entries[n];if(e)return this.pointBatch.geometriesCount-=e.flatCoordss.length,delete this.pointBatch.entries[n],e}clearFeatureEntryInLineStringBatch_(t){let n=v(t),e=this.lineStringBatch.entries[n];if(e)return this.lineStringBatch.verticesCount-=e.verticesCount,this.lineStringBatch.geometriesCount-=e.flatCoordss.length,delete this.lineStringBatch.entries[n],e}clearFeatureEntryInPolygonBatch_(t){let n=v(t),e=this.polygonBatch.entries[n];if(e)return this.polygonBatch.verticesCount-=e.verticesCount,this.polygonBatch.ringsCount-=e.ringsCount,this.polygonBatch.geometriesCount-=e.flatCoordss.length,delete this.polygonBatch.entries[n],e}addGeometry_(t,n){let e=t.getType();switch(e){case"GeometryCollection":{let i=t.getGeometriesArray();for(let o of i)this.addGeometry_(o,n);break}case"MultiPolygon":{let i=t;this.addCoordinates_(e,i.getFlatCoordinates(),i.getEndss(),n,v(n),i.getStride());break}case"MultiLineString":{let i=t;this.addCoordinates_(e,i.getFlatCoordinates(),i.getEnds(),n,v(n),i.getStride());break}case"MultiPoint":{let i=t;this.addCoordinates_(e,i.getFlatCoordinates(),null,n,v(n),i.getStride());break}case"Polygon":{let i=t;this.addCoordinates_(e,i.getFlatCoordinates(),i.getEnds(),n,v(n),i.getStride());break}case"Point":{let i=t;this.addCoordinates_(e,i.getFlatCoordinates(),null,n,v(n),i.getStride());break}case"LineString":case"LinearRing":{let i=t,o=i.getStride();this.addCoordinates_(e,i.getFlatCoordinates(),null,n,v(n),o,i.getLayout?.());break}default:}}addCoordinates_(t,n,e,i,o,s,c){let a;switch(t){case"MultiPolygon":{let l=e;for(let f=0,h=l.length;f<h;f++){let x=l[f],d=f>0?l[f-1]:null,p=d?d[d.length-1]:0,S=x[x.length-1];x=p>0?x.map(Ct=>Ct-p):x,this.addCoordinates_("Polygon",n.slice(p,S),x,i,o,s,c)}break}case"MultiLineString":{let l=e;for(let f=0,h=l.length;f<h;f++){let x=f>0?l[f-1]:0;this.addCoordinates_("LineString",n.slice(x,l[f]),null,i,o,s,c)}break}case"MultiPoint":for(let l=0,f=n.length;l<f;l+=s)this.addCoordinates_("Point",n.slice(l,l+2),null,i,o,null,null);break;case"Polygon":{let l=e;if(i instanceof mt){let x=it(n,l);if(x.length>1){this.addCoordinates_("MultiPolygon",n,x,i,o,s,c);return}}this.polygonBatch.entries[o]||(this.polygonBatch.entries[o]=this.addRefToEntry_(o,{feature:i,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]})),a=n.length/s;let f=e.length,h=e.map((x,d,p)=>d>0?(x-p[d-1])/s:x/s);this.polygonBatch.verticesCount+=a,this.polygonBatch.ringsCount+=f,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[o].flatCoordss.push(bt(n,s)),this.polygonBatch.entries[o].ringsVerticesCounts.push(h),this.polygonBatch.entries[o].verticesCount+=a,this.polygonBatch.entries[o].ringsCount+=f;for(let x=0,d=l.length;x<d;x++){let p=x>0?l[x-1]:0;this.addCoordinates_("LinearRing",n.slice(p,l[x]),null,i,o,s,c)}break}case"Point":this.pointBatch.entries[o]||(this.pointBatch.entries[o]=this.addRefToEntry_(o,{feature:i,flatCoordss:[]})),this.pointBatch.geometriesCount++,this.pointBatch.entries[o].flatCoordss.push(n);break;case"LineString":case"LinearRing":this.lineStringBatch.entries[o]||(this.lineStringBatch.entries[o]=this.addRefToEntry_(o,{feature:i,flatCoordss:[],verticesCount:0})),a=n.length/s,this.lineStringBatch.verticesCount+=a,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[o].flatCoordss.push($t(n,s,c)),this.lineStringBatch.entries[o].verticesCount+=a;break;default:}}addRefToEntry_(t,n){let e=this.uidToRef_.get(t),i=e||this.freeGlobalRef_.pop()||++this.globalCounter_;return n.ref=i,e||(this.refToFeature_.set(i,n.feature),this.uidToRef_.set(t,i)),n}removeRef_(t,n){if(!t)throw new Error("This feature has no ref: "+n);this.refToFeature_.delete(t),this.uidToRef_.delete(n),this.freeGlobalRef_.push(t)}changeFeature(t,n){if(!this.uidToRef_.get(v(t)))return;this.removeFeature(t);let e=t.getGeometry();e&&(n&&(e=e.clone(),e.applyTransform(n)),this.addGeometry_(e,t))}removeFeature(t){let n=this.clearFeatureEntryInPointBatch_(t);n=this.clearFeatureEntryInPolygonBatch_(t)||n,n=this.clearFeatureEntryInLineStringBatch_(t)||n,n&&this.removeRef_(n.ref,v(n.feature))}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0,this.globalCounter_=0,this.freeGlobalRef_=[],this.refToFeature_.clear(),this.uidToRef_.clear()}getFeatureFromRef(t){return this.refToFeature_.get(t)}isEmpty(){return this.globalCounter_===0}filter(t){let n=new r;n.globalCounter_=this.globalCounter_,n.uidToRef_=this.uidToRef_,n.refToFeature_=this.refToFeature_;let e=!0;for(let i of this.refToFeature_.values())t(i)&&(n.addFeature(i),e=!1);return e?new r:n}};function bt(r,t){return t===2?r:r.filter((n,e)=>e%t<2)}function $t(r,t,n){return t===3&&n==="XYM"?r:t===4?r.filter((e,i)=>i%t!==2):t===3?r.map((e,i)=>i%t!==2?e:0):new Array(r.length*1.5).fill(0).map((e,i)=>i%3===2?0:r[Math.round(i/1.5)])}var Yt=G;function _t(r,t){t=t||[];let n=256,e=n-1,i=Math.floor(r/n/n/n)/e,o=Math.floor(r/n/n)%n/e,s=Math.floor(r/n)%n/e,c=r%n/e;return t[0]=i*256*255+o*255,t[1]=s*256*255+c*255,t}function Xt(r){let t=0,n=256,e=n-1;return t+=Math.round(r[0]*n*n*n*e),t+=Math.round(r[1]*n*n*e),t+=Math.round(r[2]*n*e),t+=Math.round(r[3]*e),t}function yt(){let r='function t(t,n,x=2){const o=n&&n.length,i=o?n[0]*x:t.length;let f=e(t,0,i,x,!0);const l=[];if(!f||f.next===f.prev)return l;let c,y,h;if(o&&(f=function(t,n,r,x){const o=[];for(let r=0,i=n.length;r<i;r++){const f=e(t,n[r]*x,r<i-1?n[r+1]*x:t.length,x,!1);f===f.next&&(f.steiner=!0),o.push(a(f))}o.sort(u);for(let t=0;t<o.length;t++)r=s(o[t],r);return r}(t,n,f,x)),t.length>80*x){c=t[0],y=t[1];let e=c,n=y;for(let r=x;r<i;r+=x){const x=t[r],o=t[r+1];x<c&&(c=x),o<y&&(y=o),x>e&&(e=x),o>n&&(n=o)}h=Math.max(e-c,n-y),h=0!==h?32767/h:0}return r(f,l,x,c,y,h,0),l}function e(t,e,n,r,x){let o;if(x===function(t,e,n,r){let x=0;for(let o=e,i=n-r;o<n;o+=r)x+=(t[i]-t[o])*(t[o+1]+t[i+1]),i=o;return x}(t,e,n,r)>0)for(let x=e;x<n;x+=r)o=d(x/r|0,t[x],t[x+1],o);else for(let x=n-r;x>=e;x-=r)o=d(x/r|0,t[x],t[x+1],o);return o&&b(o,o.next)&&(w(o),o=o.next),o}function n(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!b(r,r.next)&&0!==v(r.prev,r,r.next))r=r.next;else{if(w(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function r(t,e,u,s,l,a,y){if(!t)return;!y&&a&&function(t,e,n,r){let x=t;do{0===x.z&&(x.z=c(x.x,x.y,e,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==t);x.prevZ.nextZ=null,x.prevZ=null,function(t){let e,n=1;do{let r,x=t;t=null;let o=null;for(e=0;x;){e++;let i=x,f=0;for(let t=0;t<n&&(f++,i=i.nextZ,i);t++);let u=n;for(;f>0||u>0&&i;)0!==f&&(0===u||!i||x.z<=i.z)?(r=x,x=x.nextZ,f--):(r=i,i=i.nextZ,u--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;x=i}o.nextZ=null,n*=2}while(e>1)}(x)}(t,s,l,a);let h=t;for(;t.prev!==t.next;){const c=t.prev,p=t.next;if(a?o(t,s,l,a):x(t))e.push(c.i,t.i,p.i),w(t),t=p.next,h=p.next;else if((t=p)===h){y?1===y?r(t=i(n(t),e),e,u,s,l,a,2):2===y&&f(t,e,u,s,l,a):r(n(t),e,u,s,l,a,1);break}}}function x(t){const e=t.prev,n=t,r=t.next;if(v(e,n,r)>=0)return!1;const x=e.x,o=n.x,i=r.x,f=e.y,u=n.y,s=r.y,l=Math.min(x,o,i),c=Math.min(f,u,s),a=Math.max(x,o,i),y=Math.max(f,u,s);let p=r.next;for(;p!==e;){if(p.x>=l&&p.x<=a&&p.y>=c&&p.y<=y&&h(x,f,o,u,i,s,p.x,p.y)&&v(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function o(t,e,n,r){const x=t.prev,o=t,i=t.next;if(v(x,o,i)>=0)return!1;const f=x.x,u=o.x,s=i.x,l=x.y,a=o.y,y=i.y,p=Math.min(f,u,s),b=Math.min(l,a,y),M=Math.max(f,u,s),m=Math.max(l,a,y),A=c(p,b,e,n,r),g=c(M,m,e,n,r);let Z=t.prevZ,d=t.nextZ;for(;Z&&Z.z>=A&&d&&d.z<=g;){if(Z.x>=p&&Z.x<=M&&Z.y>=b&&Z.y<=m&&Z!==x&&Z!==i&&h(f,l,u,a,s,y,Z.x,Z.y)&&v(Z.prev,Z,Z.next)>=0)return!1;if(Z=Z.prevZ,d.x>=p&&d.x<=M&&d.y>=b&&d.y<=m&&d!==x&&d!==i&&h(f,l,u,a,s,y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;Z&&Z.z>=A;){if(Z.x>=p&&Z.x<=M&&Z.y>=b&&Z.y<=m&&Z!==x&&Z!==i&&h(f,l,u,a,s,y,Z.x,Z.y)&&v(Z.prev,Z,Z.next)>=0)return!1;Z=Z.prevZ}for(;d&&d.z<=g;){if(d.x>=p&&d.x<=M&&d.y>=b&&d.y<=m&&d!==x&&d!==i&&h(f,l,u,a,s,y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function i(t,e){let r=t;do{const n=r.prev,x=r.next.next;!b(n,x)&&M(n,r,r.next,x)&&g(n,x)&&g(x,n)&&(e.push(n.i,r.i,x.i),w(r),w(r.next),r=t=x),r=r.next}while(r!==t);return n(r)}function f(t,e,x,o,i,f){let u=t;do{let t=u.next.next;for(;t!==u.prev;){if(u.i!==t.i&&p(u,t)){let s=Z(u,t);return u=n(u,u.next),s=n(s,s.next),r(u,e,x,o,i,f,0),void r(s,e,x,o,i,f,0)}t=t.next}u=u.next}while(u!==t)}function u(t,e){let n=t.x-e.x;if(0===n&&(n=t.y-e.y,0===n)){n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x)}return n}function s(t,e){const r=function(t,e){let n=e;const r=t.x,x=t.y;let o,i=-1/0;if(b(t,n))return n;do{if(b(t,n.next))return n.next;if(x<=n.y&&x>=n.next.y&&n.next.y!==n.y){const t=n.x+(x-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i&&(i=t,o=n.x<n.next.x?n:n.next,t===r))return o}n=n.next}while(n!==e);if(!o)return null;const f=o,u=o.x,s=o.y;let c=1/0;n=o;do{if(r>=n.x&&n.x>=u&&r!==n.x&&y(x<s?r:i,x,u,s,x<s?i:r,x,n.x,n.y)){const e=Math.abs(x-n.y)/(r-n.x);g(n,t)&&(e<c||e===c&&(n.x>o.x||n.x===o.x&&l(o,n)))&&(o=n,c=e)}n=n.next}while(n!==f);return o}(t,e);if(!r)return e;const x=Z(r,t);return n(x,x.next),n(r,r.next)}function l(t,e){return v(t.prev,t,e.prev)<0&&v(e.next,t,t.next)<0}function c(t,e,n,r,x){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function y(t,e,n,r,x,o,i,f){return(x-i)*(e-f)>=(t-i)*(o-f)&&(t-i)*(r-f)>=(n-i)*(e-f)&&(n-i)*(o-f)>=(x-i)*(r-f)}function h(t,e,n,r,x,o,i,f){return!(t===i&&e===f)&&y(t,e,n,r,x,o,i,f)}function p(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&M(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(g(t,e)&&g(e,t)&&function(t,e){let n=t,r=!1;const x=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&x<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(v(t.prev,t,e.prev)||v(t,e.prev,e))||b(t,e)&&v(t.prev,t,t.next)>0&&v(e.prev,e,e.next)>0)}function v(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function b(t,e){return t.x===e.x&&t.y===e.y}function M(t,e,n,r){const x=A(v(t,e,n)),o=A(v(t,e,r)),i=A(v(n,r,t)),f=A(v(n,r,e));return x!==o&&i!==f||(!(0!==x||!m(t,n,e))||(!(0!==o||!m(t,r,e))||(!(0!==i||!m(n,t,r))||!(0!==f||!m(n,e,r)))))}function m(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function A(t){return t>0?1:t<0?-1:0}function g(t,e){return v(t.prev,t,t.next)<0?v(t,e,t.next)>=0&&v(t,t.prev,e)>=0:v(t,e,t.prev)<0||v(t,t.next,e)<0}function Z(t,e){const n=F(t.i,t.x,t.y),r=F(e.i,e.x,e.y),x=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=x,x.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function d(t,e,n,r){const x=F(t,e,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function w(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function F(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function I(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const x=e[0],o=e[1],i=e[2],f=e[3],u=e[4],s=e[5];return t[0]=f/n,t[1]=-o/n,t[2]=-i/n,t[3]=x/n,t[4]=(i*s-f*u)/n,t[5]=-(x*s-o*u)/n,t}new Array(6);const z=[],B={vertexAttributesPosition:0,instanceAttributesPosition:0,indicesPosition:0};function P(t,e,n,r,x){const o=t[e++],i=t[e++],f=z;f.length=r;for(let n=0;n<f.length;n++)f[n]=t[e+n];let u=x?x.instanceAttributesPosition:0;return n[u++]=o,n[u++]=i,f.length&&(n.set(f,u),u+=f.length),B.instanceAttributesPosition=u,B}function N(t,e,n,r,x,o,i,f,u,s){const l=[t[e],t[e+1]],c=[t[n],t[n+1]],a=t[e+2],y=t[n+2],h=E(f,[...l]),p=E(f,[...c]);function v(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),x=[(e[0]-t[0])/r,(e[1]-t[1])/r],o=[-x[1],x[0]],i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),f=[(n[0]-t[0])/i,(n[1]-t[1])/i];let u=0===r||0===i?0:Math.acos((s=f[0]*x[0]+f[1]*x[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;u=Math.max(u,1e-5);return f[0]*o[0]+f[1]*o[1]>0?u:2*Math.PI-u}let b=-1,M=-1,m=s;const A=null!==x;if(null!==r){b=v(h,p,E(f,[...[t[r],t[r+1]]])),Math.cos(b)<=.985&&(m+=Math.tan((b-Math.PI)/2))}if(A){M=v(p,h,E(f,[...[t[x],t[x+1]]])),Math.cos(M)<=.985&&(m+=Math.tan((Math.PI-M)/2))}const g=Math.pow(2,24),Z=u%g,d=Math.floor(u/g)*g;return o.push(l[0],l[1],a,c[0],c[1],y,b,M,Z,d,s),o.push(...i),{length:u+Math.sqrt((p[0]-h[0])*(p[0]-h[0])+(p[1]-h[1])*(p[1]-h[1])),angle:m}}function R(e,n,r,x,o){const i=2+o;let f=n;const u=e.slice(f,f+o);f+=o;const s=e[f++];let l=0;const c=new Array(s-1);for(let t=0;t<s;t++)l+=e[f++],t<s-1&&(c[t]=l);const a=e.slice(f,f+2*l),y=t(a,c,2);for(let t=0;t<y.length;t++)x.push(y[t]+r.length/i);for(let t=0;t<a.length;t+=2)r.push(a[t],a[t+1],...u);return f+2*l}const S="GENERATE_POLYGON_BUFFERS",T="GENERATE_POINT_BUFFERS",_="GENERATE_LINE_STRING_BUFFERS",O=self;O.onmessage=t=>{const e=t.data;switch(e.type){case T:{const t=2,n=2,r=e.customAttributesSize,x=n+r,o=new Float32Array(e.renderInstructions),i=o.length/x*(t+r),f=Uint32Array.from([0,1,3,1,2,3]),u=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),s=new Float32Array(i);let l;for(let t=0;t<o.length;t+=x)l=P(o,t,s,r,l);const c=Object.assign({indicesBuffer:f.buffer,vertexAttributesBuffer:u.buffer,instanceAttributesBuffer:s.buffer,renderInstructions:o.buffer},e);O.postMessage(c,[u.buffer,s.buffer,f.buffer,o.buffer]);break}case _:{const t=[],n=e.customAttributesSize,r=3,x=new Float32Array(e.renderInstructions);let o=0;const i=[1,0,0,1,0,0];let f,u;for(I(i,e.renderInstructionsTransform);o<x.length;){u=Array.from(x.slice(o,o+n)),o+=n,f=x[o++];const e=o,s=o+(f-1)*r,l=x[e]===x[s]&&x[e+1]===x[s+1];let c=0,a=0;for(let n=0;n<f-1;n++){let y=null;n>0?y=o+(n-1)*r:l&&(y=s-r);let h=null;n<f-2?h=o+(n+2)*r:l&&(h=e+r);const p=N(x,o+n*r,o+(n+1)*r,y,h,t,u,i,c,a);c=p.length,a=p.angle}o+=f*r}const s=Uint32Array.from([0,1,3,1,2,3]),l=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),c=Float32Array.from(t),a=Object.assign({indicesBuffer:s.buffer,vertexAttributesBuffer:l.buffer,instanceAttributesBuffer:c.buffer,renderInstructions:x.buffer},e);O.postMessage(a,[l.buffer,c.buffer,s.buffer,x.buffer]);break}case S:{const t=[],n=[],r=e.customAttributesSize,x=new Float32Array(e.renderInstructions);let o=0;for(;o<x.length;)o=R(x,o,t,n,r);const i=Uint32Array.from(n),f=Float32Array.from(t),u=Float32Array.from([]),s=Object.assign({indicesBuffer:i.buffer,vertexAttributesBuffer:f.buffer,instanceAttributesBuffer:u.buffer,renderInstructions:x.buffer},e);O.postMessage(s,[f.buffer,u.buffer,i.buffer,x.buffer]);break}}};';return new Worker(typeof Blob>"u"?"data:application/javascript;base64,"+Buffer.from(r,"binary").toString("base64"):URL.createObjectURL(new Blob([r],{type:"application/javascript"})))}var D={GENERATE_POLYGON_BUFFERS:"GENERATE_POLYGON_BUFFERS",GENERATE_POINT_BUFFERS:"GENERATE_POINT_BUFFERS",GENERATE_LINE_STRING_BUFFERS:"GENERATE_LINE_STRING_BUFFERS"};function W(r,t,n,e){let i=0;for(let o in t){let s=t[o],c=s.callback.call(n,n.feature),a=c?.[0]??c;a===Z&&console.warn('The "has" operator might return false positives.'),a===void 0?a=Z:a===null&&(a=0),r[e+i++]=a,!(!s.size||s.size===1)&&(r[e+i++]=c[1],!(s.size<3)&&(r[e+i++]=c[2],!(s.size<4)&&(r[e+i++]=c[3])))}return i}function w(r){return Object.keys(r).reduce((t,n)=>t+(r[n].size||1),0)}function Pt(r,t,n,e){let i=(2+w(n))*r.geometriesCount;(!t||t.length!==i)&&(t=new Float32Array(i));let o=[],s=0;for(let c in r.entries){let a=r.entries[c];for(let l=0,f=a.flatCoordss.length;l<f;l++)o[0]=a.flatCoordss[l][0],o[1]=a.flatCoordss[l][1],nt(e,o),t[s++]=o[0],t[s++]=o[1],s+=W(t,n,a,s)}return t}function Et(r,t,n,e){let i=3*r.verticesCount+(1+w(n))*r.geometriesCount;(!t||t.length!==i)&&(t=new Float32Array(i));let o=[],s=0;for(let c in r.entries){let a=r.entries[c];for(let l=0,f=a.flatCoordss.length;l<f;l++){o.length=a.flatCoordss[l].length,O(a.flatCoordss[l],0,o.length,3,e,o,3),s+=W(t,n,a,s),t[s++]=o.length/3;for(let h=0,x=o.length;h<x;h+=3)t[s++]=o[h],t[s++]=o[h+1],t[s++]=o[h+2]}}return t}function St(r,t,n,e){let i=2*r.verticesCount+(1+w(n))*r.geometriesCount+r.ringsCount;(!t||t.length!==i)&&(t=new Float32Array(i));let o=[],s=0;for(let c in r.entries){let a=r.entries[c];for(let l=0,f=a.flatCoordss.length;l<f;l++){o.length=a.flatCoordss[l].length,O(a.flatCoordss[l],0,o.length,2,e,o),s+=W(t,n,a,s),t[s++]=a.ringsVerticesCounts[l].length;for(let h=0,x=a.ringsVerticesCounts[l].length;h<x;h++)t[s++]=a.ringsVerticesCounts[l][h];for(let h=0,x=o.length;h<x;h+=2)t[s++]=o[h],t[s++]=o[h+1]}}return t}function z(r){return(JSON.stringify(r).split("").reduce((n,e)=>(n<<5)-n+e.charCodeAt(0),0)>>>0).toString()}function U(r,t,n,e){if(`${e}radius`in r&&e!=="icon-"){let i=u(n,r[`${e}radius`],g);if(`${e}radius2`in r){let o=u(n,r[`${e}radius2`],g);i=`max(${i}, ${o})`}`${e}stroke-width`in r&&(i=`(${i} + ${u(n,r[`${e}stroke-width`],g)} * 0.5)`),t.setSymbolSizeExpression(`vec2(${i} * 2. + 0.5)`)}if(`${e}scale`in r){let i=u(n,r[`${e}scale`],C);t.setSymbolSizeExpression(`${t.getSymbolSizeExpression()} * ${i}`)}`${e}displacement`in r&&t.setSymbolOffsetExpression(u(n,r[`${e}displacement`],F)),`${e}rotation`in r&&t.setSymbolRotationExpression(u(n,r[`${e}rotation`],g)),`${e}rotate-with-view`in r&&t.setSymbolRotateWithView(!!r[`${e}rotate-with-view`])}function Ft(r,t,n,e,i){let o="vec4(0.)";if(t!==null&&(o=t),n!==null&&e!==null){let a=`smoothstep(-${e} + 0.63, -${e} - 0.58, ${r})`;o=`mix(${n}, ${o}, ${a})`}let s=`(1.0 - smoothstep(-0.63, 0.58, ${r}))`,c=`${o} * vec4(1.0, 1.0, 1.0, ${s})`;return i!==null&&(c=`${c} * vec4(1.0, 1.0, 1.0, ${i})`),c}function H(r,t,n,e,i){let o=new Image;o.crossOrigin=r[`${e}cross-origin`]===void 0?"anonymous":r[`${e}cross-origin`],tt(typeof r[`${e}src`]=="string",`WebGL layers do not support expressions for the ${e}src style property`),o.src=r[`${e}src`],n[`u_texture${i}_size`]=()=>o.complete?[o.width,o.height]:[0,0],t.addUniform(`u_texture${i}_size`,"vec2");let s=`u_texture${i}_size`;return n[`u_texture${i}`]=o,t.addUniform(`u_texture${i}`,"sampler2D"),s}function V(r,t,n,e,i){let o=u(n,r[`${t}offset`],C);if(`${t}offset-origin`in r)switch(r[`${t}offset-origin`]){case"top-right":o=`vec2(${e}.x, 0.) + ${i} * vec2(-1., 0.) + ${o} * vec2(-1., 1.)`;break;case"bottom-left":o=`vec2(0., ${e}.y) + ${i} * vec2(0., -1.) + ${o} * vec2(1., -1.)`;break;case"bottom-right":o=`${e} - ${i} - ${o}`;break;default:}return o}function Tt(r,t,n,e){e.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,U(r,t,e,"circle-");let i=null;"circle-opacity"in r&&(i=u(e,r["circle-opacity"],g));let o="coordsPx";"circle-scale"in r&&(o=`coordsPx / ${u(e,r["circle-scale"],C)}`);let s=null;"circle-fill-color"in r&&(s=u(e,r["circle-fill-color"],E));let c=null;"circle-stroke-color"in r&&(c=u(e,r["circle-stroke-color"],E));let a=u(e,r["circle-radius"],g),l=null;"circle-stroke-width"in r&&(l=u(e,r["circle-stroke-width"],g),a=`(${a} + ${l} * 0.5)`);let f=`circleDistanceField(${o}, ${a})`,h=Ft(f,s,c,l,i);t.setSymbolColorExpression(h)}function At(r,t,n,e){e.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,e.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
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
}`,e.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
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
}`,U(r,t,e,"shape-");let i=null;"shape-opacity"in r&&(i=u(e,r["shape-opacity"],g));let o="coordsPx";"shape-scale"in r&&(o=`coordsPx / ${u(e,r["shape-scale"],C)}`);let s=null;"shape-fill-color"in r&&(s=u(e,r["shape-fill-color"],E));let c=null;"shape-stroke-color"in r&&(c=u(e,r["shape-stroke-color"],E));let a=null;"shape-stroke-width"in r&&(a=u(e,r["shape-stroke-width"],g));let l=u(e,r["shape-points"],g),f="0.";"shape-angle"in r&&(f=u(e,r["shape-angle"],g));let h,x=u(e,r["shape-radius"],g);if(a!==null&&(x=`${x} + ${a} * 0.5`),"shape-radius2"in r){let p=u(e,r["shape-radius2"],g);a!==null&&(p=`${p} + ${a} * 0.5`),h=`starDistanceField(${o}, ${l}, ${x}, ${p}, ${f})`}else h=`regularDistanceField(${o}, ${l}, ${x}, ${f})`;let d=Ft(h,s,c,a,i);t.setSymbolColorExpression(d)}function wt(r,t,n,e){let i="vec4(1.0)";"icon-color"in r&&(i=u(e,r["icon-color"],E)),"icon-opacity"in r&&(i=`${i} * vec4(1.0, 1.0, 1.0, ${u(e,r["icon-opacity"],g)})`);let o=z(r["icon-src"]),s=H(r,t,n,"icon-",o);if(t.setSymbolColorExpression(`${i} * texture2D(u_texture${o}, v_texCoord)`).setSymbolSizeExpression(s),"icon-width"in r&&"icon-height"in r&&t.setSymbolSizeExpression(`vec2(${u(e,r["icon-width"],g)}, ${u(e,r["icon-height"],g)})`),"icon-offset"in r&&"icon-size"in r){let c=u(e,r["icon-size"],F),a=t.getSymbolSizeExpression();t.setSymbolSizeExpression(c);let l=V(r,"icon-",e,"v_quadSizePx",c);t.setTextureCoordinateExpression(`(vec4((${l}).xyxy) + vec4(0., 0., ${c})) / (${a}).xyxy`)}if(U(r,t,e,"icon-"),"icon-anchor"in r){let c=u(e,r["icon-anchor"],F),a="1.0";"icon-scale"in r&&(a=u(e,r["icon-scale"],C));let l;r["icon-anchor-x-units"]==="pixels"&&r["icon-anchor-y-units"]==="pixels"?l=`${c} * ${a}`:r["icon-anchor-x-units"]==="pixels"?l=`${c} * vec2(vec2(${a}).x, v_quadSizePx.y)`:r["icon-anchor-y-units"]==="pixels"?l=`${c} * vec2(v_quadSizePx.x, vec2(${a}).x)`:l=`${c} * v_quadSizePx`;let f=`v_quadSizePx * vec2(0.5, -0.5) + ${l} * vec2(-1., 1.)`;if("icon-anchor-origin"in r)switch(r["icon-anchor-origin"]){case"top-right":f=`v_quadSizePx * -0.5 + ${l}`;break;case"bottom-left":f=`v_quadSizePx * 0.5 - ${l}`;break;case"bottom-right":f=`v_quadSizePx * vec2(-0.5, 0.5) + ${l} * vec2(1., -1.)`;break;default:}t.setSymbolOffsetExpression(`${t.getSymbolOffsetExpression()} + ${f}`)}}function Rt(r,t,n,e){if("stroke-color"in r&&t.setStrokeColorExpression(u(e,r["stroke-color"],E)),"stroke-pattern-src"in r){let i=z(r["stroke-pattern-src"]),o=H(r,t,n,"stroke-pattern-",i),s=o,c="vec2(0.)";"stroke-pattern-offset"in r&&"stroke-pattern-size"in r&&(s=u(e,r["stroke-pattern-size"],F),c=V(r,"stroke-pattern-",e,o,s));let a="0.";"stroke-pattern-spacing"in r&&(a=u(e,r["stroke-pattern-spacing"],g));let l="0.";"stroke-pattern-start-offset"in r&&(l=u(e,r["stroke-pattern-start-offset"],g)),e.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float startOffsetPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
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
}`;let f=`u_texture${i}`,h="1.";"stroke-color"in r&&(h=t.getStrokeColorExpression()),t.setStrokeColorExpression(`${h} * sampleStrokePattern(${f}, ${o}, ${c}, ${s}, ${a}, ${l}, currentLengthPx, currentRadiusRatio, v_width)`),e.functions.computeStrokePatternLength=`float computeStrokePatternLength(vec2 sampleSize, float spacingPx, float lineWidth) {
  float patternLengthPx = sampleSize.x / sampleSize.y * lineWidth;
  return patternLengthPx + spacingPx;
}`,t.setStrokePatternLengthExpression(`computeStrokePatternLength(${s}, ${a}, v_width)`)}if("stroke-width"in r&&t.setStrokeWidthExpression(u(e,r["stroke-width"],g)),"stroke-offset"in r&&t.setStrokeOffsetExpression(u(e,r["stroke-offset"],g)),"stroke-line-cap"in r&&t.setStrokeCapExpression(u(e,r["stroke-line-cap"],A)),"stroke-line-join"in r&&t.setStrokeJoinExpression(u(e,r["stroke-line-join"],A)),"stroke-miter-limit"in r&&t.setStrokeMiterLimitExpression(u(e,r["stroke-miter-limit"],g)),"stroke-line-dash"in r){e.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType, float lineWidth) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${y("square")}) {
    distanceSegment -= lineWidth * 0.5;
  } else if (capType == ${y("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - lineWidth * 0.5);
  }
  return distanceSegment;
}`;let i=r["stroke-line-dash"].map(p=>u(e,p,g));i.length%2===1&&(i=[...i,...i]);let o="0.";"stroke-line-dash-offset"in r&&(o=u(e,r["stroke-line-dash-offset"],g));let c=`dashDistanceField_${z(r["stroke-line-dash"])}`,a=i.map((p,S)=>`float dashLength${S}`).join(", "),l=i.map((p,S)=>`dashLength${S}`).join(" + "),f="0.",h=`getSingleDashDistance(distance, radius, ${f}, dashLength0, totalDashLength, capType, lineWidth)`;for(let p=2;p<i.length;p+=2)f=`${f} + dashLength${p-2} + dashLength${p-1}`,h=`min(${h}, getSingleDashDistance(distance, radius, ${f}, dashLength${p}, totalDashLength, capType, lineWidth))`;e.functions[c]=`float ${c}(float distance, float radius, float capType, float lineWidth, ${a}) {
  float totalDashLength = ${l};
  return ${h};
}`;let x=i.map((p,S)=>`${p}`).join(", ");t.setStrokeDistanceFieldExpression(`${c}(currentLengthPx + ${o}, currentRadiusPx, capType, v_width, ${x})`);let d=i.join(" + ");t.getStrokePatternLengthExpression()&&(e.functions.combinePatternLengths=`float combinePatternLengths(float patternLength1, float patternLength2) {
  return patternLength1 * patternLength2;
}`,d=`combinePatternLengths(${t.getStrokePatternLengthExpression()}, ${d})`),t.setStrokePatternLengthExpression(d)}}function kt(r,t,n,e){if("fill-color"in r&&t.setFillColorExpression(u(e,r["fill-color"],E)),"fill-pattern-src"in r){let i=z(r["fill-pattern-src"]),o=H(r,t,n,"fill-pattern-",i),s=o,c="vec2(0.)";"fill-pattern-offset"in r&&"fill-pattern-size"in r&&(s=u(e,r["fill-pattern-size"],F),c=V(r,"fill-pattern-",e,o,s)),e.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {
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
}`;let a=`u_texture${i}`,l="1.";"fill-color"in r&&(l=t.getFillColorExpression()),t.setFillColorExpression(`${l} * sampleFillPattern(${a}, ${o}, ${c}, ${s}, pxOrigin, pxPos)`)}}function q(r,t,n){let e=lt(),i=new M,o={};if("icon-src"in r?wt(r,i,o,e):"shape-points"in r?At(r,i,o,e):"circle-radius"in r&&Tt(r,i,o,e),Rt(r,i,o,e),kt(r,i,o,e),n){let a=u(e,n,ot);i.setFragmentDiscardExpression(`!${a}`)}let s={};function c(a,l,f,h){if(!e[a])return;let x=xt(f),d=ht(f);i.addAttribute(`a_${l}`,x),s[l]={size:d,callback:h}}return c("geometryType",ft,A,a=>j(st(a.getGeometry()))),c("featureId",ct,A|g,a=>{let l=a.getId()??null;return typeof l=="string"?j(l):l}),pt(i,e),{builder:i,attributes:T(T({},s),dt(e)),uniforms:T(T({},o),gt(e,t))}}var Lt=[],J;function Bt(){return J||(J=yt()),J}var Mt=0,_={POSITION:"a_position",LOCAL_POSITION:"a_localPosition",SEGMENT_START:"a_segmentStart",SEGMENT_END:"a_segmentEnd",MEASURE_START:"a_measureStart",MEASURE_END:"a_measureEnd",ANGLE_TANGENT_SUM:"a_angleTangentSum",JOIN_ANGLES:"a_joinAngles",DISTANCE_LOW:"a_distanceLow",DISTANCE_HIGH:"a_distanceHigh"},Y=class{constructor(t,n,e,i){this.helper_,this.hitDetectionEnabled_=!!i,this.styleShaders=Dt(t,n),this.customAttributes_={},this.uniforms_={},this.hitDetectionEnabled_&&(this.customAttributes_.hitColor={callback(){return _t(this.ref,Lt)},size:2});for(let o of this.styleShaders){for(let s in o.attributes)s in this.customAttributes_||(this.customAttributes_[s]=o.attributes[s]);for(let s in o.uniforms)s in this.uniforms_||(this.uniforms_[s]=o.uniforms[s])}this.renderPasses_=this.styleShaders.map(o=>{let s={},c=Object.entries(this.customAttributes_).map(([a,l])=>({name:a in o.attributes||a==="hitColor"?`a_${a}`:null,size:l.size||1,type:m.FLOAT}));return o.builder.getFillVertexShader()&&(s.fillRenderPass={vertexShader:o.builder.getFillVertexShader(),fragmentShader:o.builder.getFillFragmentShader(),attributesDesc:[{name:_.POSITION,size:2,type:m.FLOAT},...c],instancedAttributesDesc:[],instancePrimitiveVertexCount:3}),o.builder.getStrokeVertexShader()&&(s.strokeRenderPass={vertexShader:o.builder.getStrokeVertexShader(),fragmentShader:o.builder.getStrokeFragmentShader(),attributesDesc:[{name:_.LOCAL_POSITION,size:2,type:m.FLOAT}],instancedAttributesDesc:[{name:_.SEGMENT_START,size:2,type:m.FLOAT},{name:_.MEASURE_START,size:1,type:m.FLOAT},{name:_.SEGMENT_END,size:2,type:m.FLOAT},{name:_.MEASURE_END,size:1,type:m.FLOAT},{name:_.JOIN_ANGLES,size:2,type:m.FLOAT},{name:_.DISTANCE_LOW,size:1,type:m.FLOAT},{name:_.DISTANCE_HIGH,size:1,type:m.FLOAT},{name:_.ANGLE_TANGENT_SUM,size:1,type:m.FLOAT},...c],instancePrimitiveVertexCount:6}),o.builder.getSymbolVertexShader()&&(s.symbolRenderPass={vertexShader:o.builder.getSymbolVertexShader(),fragmentShader:o.builder.getSymbolFragmentShader(),attributesDesc:[{name:_.LOCAL_POSITION,size:2,type:m.FLOAT}],instancedAttributesDesc:[{name:_.POSITION,size:2,type:m.FLOAT},...c],instancePrimitiveVertexCount:6}),s}),this.hasFill_=this.renderPasses_.some(o=>o.fillRenderPass),this.hasStroke_=this.renderPasses_.some(o=>o.strokeRenderPass),this.hasSymbol_=this.renderPasses_.some(o=>o.symbolRenderPass),this.setHelper(e)}generateBuffers(t,n){return X(this,null,function*(){if(t.isEmpty())return null;let e=this.generateRenderInstructions_(t,n),[i,o,s]=yield Promise.all([this.generateBuffersForType_(e.polygonInstructions,"Polygon",n),this.generateBuffersForType_(e.lineStringInstructions,"LineString",n),this.generateBuffersForType_(e.pointInstructions,"Point",n)]),c=rt(et(),n);return{polygonBuffers:i,lineStringBuffers:o,pointBuffers:s,invertVerticesTransform:c}})}generateRenderInstructions_(t,n){let e=this.hasFill_?St(t.polygonBatch,new Float32Array(0),this.customAttributes_,n):null,i=this.hasStroke_?Et(t.lineStringBatch,new Float32Array(0),this.customAttributes_,n):null,o=this.hasSymbol_?Pt(t.pointBatch,new Float32Array(0),this.customAttributes_,n):null;return{polygonInstructions:e,lineStringInstructions:i,pointInstructions:o}}generateBuffersForType_(t,n,e){if(t===null)return null;let i=Mt++,o;switch(n){case"Polygon":o=D.GENERATE_POLYGON_BUFFERS;break;case"LineString":o=D.GENERATE_LINE_STRING_BUFFERS;break;case"Point":o=D.GENERATE_POINT_BUFFERS;break;default:}let s={id:i,type:o,renderInstructions:t.buffer,renderInstructionsTransform:e,customAttributesSize:w(this.customAttributes_)},c=Bt();return c.postMessage(s,[t.buffer]),t=null,new Promise(a=>{let l=f=>{let h=f.data;if(h.id!==i||(c.removeEventListener("message",l),!this.helper_.getGL()))return;let x=new k(at,R).fromArrayBuffer(h.indicesBuffer),d=new k(N,R).fromArrayBuffer(h.vertexAttributesBuffer),p=new k(N,R).fromArrayBuffer(h.instanceAttributesBuffer);this.helper_.flushBufferData(x),this.helper_.flushBufferData(d),this.helper_.flushBufferData(p),a([x,d,p])};c.addEventListener("message",l)})}render(t,n,e){for(let i of this.renderPasses_)i.fillRenderPass&&this.renderInternal_(t.polygonBuffers[0],t.polygonBuffers[1],t.polygonBuffers[2],i.fillRenderPass,n,e),i.strokeRenderPass&&this.renderInternal_(t.lineStringBuffers[0],t.lineStringBuffers[1],t.lineStringBuffers[2],i.strokeRenderPass,n,e),i.symbolRenderPass&&this.renderInternal_(t.pointBuffers[0],t.pointBuffers[1],t.pointBuffers[2],i.symbolRenderPass,n,e)}renderInternal_(t,n,e,i,o,s){let c=t.getSize();if(c===0)return;let a=i.instancedAttributesDesc.length;if(this.helper_.useProgram(i.program,o),this.helper_.bindBuffer(n),this.helper_.bindBuffer(t),this.helper_.enableAttributes(i.attributesDesc),this.helper_.bindBuffer(e),this.helper_.enableAttributesInstanced(i.instancedAttributesDesc),s(),a){let l=i.instancedAttributesDesc.reduce((h,x)=>h+(x.size||1),0),f=e.getSize()/l;this.helper_.drawElementsInstanced(0,c,f)}else this.helper_.drawElements(0,c)}setHelper(t,n=null){this.helper_=t;for(let e of this.renderPasses_)e.fillRenderPass&&(e.fillRenderPass.program=this.helper_.getProgram(e.fillRenderPass.fragmentShader,e.fillRenderPass.vertexShader)),e.strokeRenderPass&&(e.strokeRenderPass.program=this.helper_.getProgram(e.strokeRenderPass.fragmentShader,e.strokeRenderPass.vertexShader)),e.symbolRenderPass&&(e.symbolRenderPass.program=this.helper_.getProgram(e.symbolRenderPass.fragmentShader,e.symbolRenderPass.vertexShader));this.helper_.addUniforms(this.uniforms_),n&&(n.polygonBuffers&&(this.helper_.flushBufferData(n.polygonBuffers[0]),this.helper_.flushBufferData(n.polygonBuffers[1]),this.helper_.flushBufferData(n.polygonBuffers[2])),n.lineStringBuffers&&(this.helper_.flushBufferData(n.lineStringBuffers[0]),this.helper_.flushBufferData(n.lineStringBuffers[1]),this.helper_.flushBufferData(n.lineStringBuffers[2])),n.pointBuffers&&(this.helper_.flushBufferData(n.pointBuffers[0]),this.helper_.flushBufferData(n.pointBuffers[1]),this.helper_.flushBufferData(n.pointBuffers[2])))}},Ee=Y;function Dt(r,t){let n=Array.isArray(r)?r:[r];if("style"in n[0]){let e=[],i=n,o=[];for(let s of i){let c=Array.isArray(s.style)?s.style:[s.style],a=s.filter;s.else&&o.length&&(a=["all",...o.map(f=>["!",f])],s.filter&&a.push(s.filter),a.length<3&&(a=a[1])),s.filter&&o.push(s.filter);let l=c.map(f=>q(f,t,a));e.push(...l)}return e}return"builder"in n[0]?n:n.map(e=>q(e,t,null))}var P=new Uint8Array(4),K=class{constructor(t,n){this.helper_=t;let e=t.getGL();this.texture_=e.createTexture(),this.framebuffer_=e.createFramebuffer(),this.depthbuffer_=e.createRenderbuffer(),this.size_=n||[1,1],this.data_=new Uint8Array(0),this.dataCacheDirty_=!0,this.updateSize_()}setSize(t){Q(t,this.size_)||(this.size_[0]=t[0],this.size_[1]=t[1],this.updateSize_())}getSize(){return this.size_}clearCachedData(){this.dataCacheDirty_=!0}readAll(){if(this.dataCacheDirty_){let t=this.size_,n=this.helper_.getGL();n.bindFramebuffer(n.FRAMEBUFFER,this.framebuffer_),n.readPixels(0,0,t[0],t[1],n.RGBA,n.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_}readPixel(t,n){if(t<0||n<0||t>this.size_[0]||n>=this.size_[1])return P[0]=0,P[1]=0,P[2]=0,P[3]=0,P;this.readAll();let e=Math.floor(t)+(this.size_[1]-Math.floor(n)-1)*this.size_[0];return P[0]=this.data_[e*4],P[1]=this.data_[e*4+1],P[2]=this.data_[e*4+2],P[3]=this.data_[e*4+3],P}getTexture(){return this.texture_}getFramebuffer(){return this.framebuffer_}getDepthbuffer(){return this.depthbuffer_}updateSize_(){let t=this.size_,n=this.helper_.getGL();this.texture_=this.helper_.createTexture(t,null,this.texture_),n.bindFramebuffer(n.FRAMEBUFFER,this.framebuffer_),n.viewport(0,0,t[0],t[1]),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,this.texture_,0),n.bindRenderbuffer(n.RENDERBUFFER,this.depthbuffer_),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,t[0],t[1]),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,this.depthbuffer_),this.data_=new Uint8Array(t[0]*t[1]*4)}},be=K;export{M as a,Yt as b,Xt as c,Ee as d,Dt as e,be as f};
