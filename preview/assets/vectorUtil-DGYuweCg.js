import{Br as e,Jn as t,Qn as n,Tt as r,Xn as i,Yn as a,Zn as o,cr as s,dn as c,fr as l,gr as u,ir as d,lr as f,mr as p,nr as m,or as h,pr as g,qn as _,ur as v}from"./view-D1-0mMgi.js";import{A as ee,D as y,E as b,M as te,N as x,O as S,T as C,a as ne,c as re,d as ie,f as w,g as T,h as E,i as ae,k as D,l as oe,m as se,n as ce,o as le,p as O,r as k,s as ue,t as de}from"./compileUtil-PY-PqIfi.js";import{t as fe}from"./Feature-C2WMUFGN.js";function pe(){return{"fill-color":`rgba(255,255,255,0.4)`,"stroke-color":`#3399CC`,"stroke-width":1.25,"circle-radius":5,"circle-fill-color":`rgba(255,255,255,0.4)`,"circle-stroke-width":1.25,"circle-stroke-color":`#3399CC`}}var A=.985;function j(e){return e-M(e)}function M(e){return Math.fround(e)}var N=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float u_one;
uniform mat4 u_projectionMatrix;
uniform mat4 u_invertProjectionMatrix;
uniform vec2 u_viewportSizePx;
uniform float u_pixelRatio;
uniform float u_globalAlpha;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform float u_rotation;
uniform vec4 u_renderExtent;
uniform float u_depth;
uniform mediump int u_hitDetection;

// these 64-bits floats are split into high/low
uniform vec2 u_df_patternOriginX;
uniform vec2 u_df_patternOriginY;
uniform vec2 u_df_patternScaleRatio;

const float PI = 3.141592653589793238;
const float TWO_PI = 2.0 * PI;
float currentLineMetric = 0.; // an actual value will be used in the stroke shaders

vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_invertProjectionMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}
${de}

vec2 df_from(float value) {
  return vec2(value, 0.);
}

float df_float(vec2 df) {
  return df.x;
}

vec2 df_add(vec2 dfa, vec2 dfb) {
  vec2 dfc;
  float t1, t2, e;
  
  t1 = dfa.x * u_one + dfb.x * u_one;
  e = t1 * u_one - dfa.x * u_one;
  t2 = ((dfb.x - e) + (dfa.x - (t1 - e))) * u_one + dfa.y + dfb.y * u_one;
  
  dfc.x = t1 * u_one + t2 * u_one;
  dfc.y = t2 - (dfc.x - t1) * u_one;
  return dfc;
}

vec2 df_sub(vec2 dfa, vec2 dfb) {
  vec2 dfc;
  float e, t1, t2;
  
  t1 = dfa.x - dfb.x;
  e = t1 - dfa.x;
  t2 = ((-dfb.x - e) + (dfa.x - (t1 - e))) + dfa.y - dfb.y;
  
  dfc.x = t1 + t2;
  dfc.y = t2 - (dfc.x - t1);
  return dfc;
}

vec2 df_mul(vec2 dfa, vec2 dfb) {
  vec2 dfc;
  float c11, c21, c2, e, t1, t2;
  float a1, a2, b1, b2, cona, conb, split = 4097.;

  cona = dfa.x * split * u_one;
  conb = dfb.x * split * u_one;
  a1 = cona * u_one - (cona - dfa.x);
  b1 = conb * u_one - (conb - dfb.x);
  a2 = dfa.x * u_one - a1;
  b2 = dfb.x * u_one - b1 * u_one;

  c11 = dfa.x * u_one * dfb.x * u_one;
  c21 = a2 * b2 * u_one + (a2 * b1 + (a1 * b2 + (a1 * b1 - c11))) * u_one;

  c2 = dfa.x * dfb.y * u_one + dfa.y * dfb.x * u_one;

  t1 = c11 + c2 * u_one;
  e = t1 - c11 * u_one;
  t2 = dfa.y * dfb.y * u_one + ((c2 - e) + (c11 - (t1 - e))) + c21 * u_one;

  dfc.x = t1 * u_one + t2 * u_one;
  dfc.y = t2 - (dfc.x - t1) * u_one;

  return dfc;
}

vec2 df_div(vec2 dfa, vec2 dfb) {
  vec2 dfc;
  float c11, c21, c2, e, t1, t2, t11, t12, t21, t22;
  float a1, a2, b1, b2, cona, conb, split = 4097.;
  float s1, s2;
  
  s1 = dfa.x / dfb.x * u_one;
  cona = s1 * split * u_one;
  conb = dfb.x * split * u_one;
  a1 = cona - (cona - s1) * u_one;
  b1 = conb - (conb - dfb.x) * u_one;
  a2 = s1 - a1 * u_one;
  b2 = dfb.x - b1 * u_one;
  
  c11 = s1 * dfb.x * u_one;
  c21 = (((a1 * b1 - c11) + a1 * b2) + a2 * b1) + a2 * b2 * u_one;
  
  c2 = s1 * dfb.y * u_one;
  
  t1 = c11 + c2 * u_one;
  e  = t1 - c11 * u_one;
  t2 = ((c2 - e) + (c11 - (t1 - e))) + c21 * u_one;
  
  t12 = t1 + t2 * u_one;
  t22 = t2 - (t12 - t1) * u_one;
  
  t11 = dfa.x - t12 * u_one;
  e   = t11 - dfa.x * u_one;
  t21 = ((-t12 - e) + (dfa.x - (t11 - e))) + dfa.y - t22 * u_one;
  
  s2 = (t11 + t21) / dfb.x * u_one;
  
  dfc.x = s1 + s2 * u_one;
  dfc.y = s2 - (dfc.x - s1) * u_one;
  
  return dfc;
}

float df_mod(vec2 df, vec2 m) {
  vec2 q = df_div(df, m) * u_one;
  float qf = floor(q.x);
  float frac = q.x - qf + q.y * u_one;
  if (frac < 0.0) qf -= 1.0;
  if (frac >= 1.0) qf += 1.0;
  vec2 prod = df_mul(df_from(qf), m);
  vec2 rem = df_add(df_from(df.x), df_from(-prod.x)) * u_one;
  rem.y += df.y - prod.y;
  return rem.x + rem.y * u_one;
}

`,P=pe(),F=class{constructor(){this.uniforms_=[],this.attributes_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${E(P[`circle-radius`])} + ${E(P[`circle-stroke-width`]*.5)})`,this.symbolRotationExpression_=`0.0`,this.symbolOffsetExpression_=`vec2(0.0)`,this.symbolColorExpression_=w(P[`circle-fill-color`]),this.texCoordExpression_=`vec4(0.0, 0.0, 1.0, 1.0)`,this.fragmentDiscardExpression_=null,this.shapeDiscardExpression_=null,this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=E(P[`stroke-width`]),this.strokeColorExpression_=w(P[`stroke-color`]),this.strokeOffsetExpression_=`0.`,this.strokeCapExpression_=T(`round`),this.strokeJoinExpression_=T(`round`),this.strokeMiterLimitExpression_=`10.`,this.strokeDistanceFieldExpression_=`-1000.`,this.strokePatternLengthExpression_=null,this.hasFill_=!1,this.fillColorExpression_=w(P[`fill-color`]),this.fillPatternSizeExpression_=null,this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e,t){return this.uniforms_.push({name:e,type:t}),this}addAttribute(e,t,n,r){return this.attributes_.push({name:e,type:t,varyingName:e.replace(/^a_/,`v_`),varyingType:r??t,varyingExpression:n??e}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.fragmentDiscardExpression_=e,this}getFragmentDiscardExpression(){return this.fragmentDiscardExpression_}setShapeDiscardExpression(e){return this.shapeDiscardExpression_=e,this}getShapeDiscardExpression(){return this.shapeDiscardExpression_}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}getStrokeColorExpression(){return this.strokeColorExpression_}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setStrokePatternLengthExpression(e){return this.strokePatternLengthExpression_=e,this}getStrokePatternLengthExpression(){return this.strokePatternLengthExpression_}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}getFillColorExpression(){return this.fillColorExpression_}setFillPatternSizeExpression(e){return this.fillPatternSizeExpression_=e,this}getFillPatternSizeExpression(){return this.fillPatternSizeExpression_}addVertexShaderFunction(e){return this.vertexShaderFunctions_.includes(e)||this.vertexShaderFunctions_.push(e),this}addFragmentShaderFunction(e){return this.fragmentShaderFunctions_.includes(e)||this.fragmentShaderFunctions_.push(e),this}getSymbolVertexShader(){return this.hasSymbol_?`${N}
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
  float angle = ${this.symbolRotationExpression_}${this.symbolRotateWithView_?` + u_rotation`:``};
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
${this.shapeDiscardExpression_?`  if (${this.shapeDiscardExpression_}) { gl_Position = vec4(2.0, 2.0, 0.0, 0.0); }`:``}
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${N}
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
${this.fragmentDiscardExpression_?`  if (${this.fragmentDiscardExpression_}) { discard; }`:``}
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
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${N}
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
  if (cos(angle) > ${A} || isCap(angle)) {
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
  ${this.strokePatternLengthExpression_===null?``:`v_distancePx = mod(v_distancePx, ${this.strokePatternLengthExpression_});
  distanceHighPx = mod(distanceHighPx, ${this.strokePatternLengthExpression_});
  `}v_distancePx += distanceHighPx;

  v_measureStart = a_measureStart;
  v_measureEnd = a_measureEnd;
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
${this.shapeDiscardExpression_?`  if (${this.shapeDiscardExpression_}) { gl_Position = vec4(2.0, 2.0, 0.0, 0.0); }`:``}
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${N}
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
  if (cos(joinAngle) > ${A}) { // avoid risking a division by zero
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
   if (capType == ${T(`butt`)}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${T(`square`)}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${T(`bevel`)}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${T(`miter`)}) {
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

${this.fragmentDiscardExpression_?`  if (${this.fragmentDiscardExpression_}) { discard; }`:``}

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
}`:null}getFillVertexShader(){return this.hasFill_?`${N}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
attribute vec2 a_position;
attribute vec2 a_hitColor;

varying vec4 v_hitColor;
varying vec2 v_patternOriginPx;
varying vec2 v_patternSizePx;

${this.attributes_.map(e=>`attribute ${e.type} ${e.name};
varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.vertexShaderFunctions_.join(`
`)}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);
  v_hitColor = unpackColor(a_hitColor);
${this.fillPatternSizeExpression_===null?`  v_patternOriginPx = vec2(0.);`:`
  // this computes the pattern offset in screenspace using double-float arithmetics
  v_patternSizePx = ${this.fillPatternSizeExpression_};
  vec2 patternSizeScaledX = df_mul(df_from(v_patternSizePx.x), u_df_patternScaleRatio);
  vec2 patternSizeScaledY = df_mul(df_from(v_patternSizePx.y), u_df_patternScaleRatio);
  v_patternOriginPx = vec2(
    df_mod(u_df_patternOriginX, patternSizeScaledX),
    df_mod(u_df_patternOriginY, patternSizeScaledY)
  );

  // reapply rotation to the pattern origin
  v_patternOriginPx -= u_viewportSizePx / 2.; // translate to viewport center
  v_patternOriginPx = vec2(
    cos(-u_rotation) * v_patternOriginPx.x - sin(-u_rotation) * v_patternOriginPx.y,
    sin(-u_rotation) * v_patternOriginPx.x + cos(-u_rotation) * v_patternOriginPx.y
  );
  v_patternOriginPx += u_viewportSizePx / 2.; // translate back
`}
${this.attributes_.map(e=>`  ${e.varyingName} = ${e.varyingExpression};`).join(`
`)}
${this.shapeDiscardExpression_?`  if (${this.shapeDiscardExpression_}) { gl_Position = vec4(2.0, 2.0, 0.0, 0.0); }`:``}
}`:null}getFillFragmentShader(){return this.hasFill_?`${N}
${this.uniforms_.map(e=>`uniform ${e.type} ${e.name};`).join(`
`)}
varying vec4 v_hitColor;
varying vec2 v_patternOriginPx;
varying vec2 v_patternSizePx;
${this.attributes_.map(e=>`varying ${e.varyingType} ${e.varyingName};`).join(`
`)}
${this.fragmentShaderFunctions_.join(`
`)}

void main(void) {
${this.attributes_.map(e=>`  ${e.varyingType} ${e.name} = ${e.varyingName}; // assign to original attribute name`).join(`
`)}
  vec2 pxPos = gl_FragCoord.xy / u_pixelRatio;
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
${this.fragmentDiscardExpression_?`  if (${this.fragmentDiscardExpression_}) { discard; }`:``}
  gl_FragColor = ${this.fillColorExpression_};
  gl_FragColor.a *= u_globalAlpha;
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_hitColor;
  }
}`:null}},me=class e{constructor(){this.globalCounter_=0,this.refToFeature_=new Map,this.uidToRef_=new Map,this.freeGlobalRef_=[],this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e,t){for(let n=0;n<e.length;n++)this.addFeature(e[n],t)}addFeature(e,t){let n=e.getGeometry();n&&(t&&(n=n.clone(),n.applyTransform(t)),this.addGeometry_(n,e))}clearFeatureEntryInPointBatch_(e){let t=_(e),n=this.pointBatch.entries[t];if(n)return this.pointBatch.geometriesCount-=n.flatCoordss.length,delete this.pointBatch.entries[t],n}clearFeatureEntryInLineStringBatch_(e){let t=_(e),n=this.lineStringBatch.entries[t];if(n)return this.lineStringBatch.verticesCount-=n.verticesCount,this.lineStringBatch.geometriesCount-=n.flatCoordss.length,delete this.lineStringBatch.entries[t],n}clearFeatureEntryInPolygonBatch_(e){let t=_(e),n=this.polygonBatch.entries[t];if(n)return this.polygonBatch.verticesCount-=n.verticesCount,this.polygonBatch.ringsCount-=n.ringsCount,this.polygonBatch.geometriesCount-=n.flatCoordss.length,delete this.polygonBatch.entries[t],n}addGeometry_(e,t){let n=e.getType();switch(n){case`GeometryCollection`:{let n=e.getGeometriesArray();for(let e of n)this.addGeometry_(e,t);break}case`MultiPolygon`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),r.getEndss(),t,_(t),r.getStride());break}case`MultiLineString`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),r.getEnds(),t,_(t),r.getStride());break}case`MultiPoint`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),null,t,_(t),r.getStride());break}case`Polygon`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),r.getEnds(),t,_(t),r.getStride());break}case`Point`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),null,t,_(t),r.getStride());break}case`LineString`:case`LinearRing`:{let r=e,i=r.getStride();this.addCoordinates_(n,r.getFlatCoordinates(),null,t,_(t),i,r.getLayout?.());break}}}addCoordinates_(e,t,n,i,a,o,s){let c;switch(e){case`MultiPolygon`:{let e=n;for(let n=0,r=e.length;n<r;n++){let r=e[n],c=n>0?e[n-1]:null,l=c?c[c.length-1]:0,u=r[r.length-1];r=l>0?r.map(e=>e-l):r,this.addCoordinates_(`Polygon`,t.slice(l,u),r,i,a,o,s)}break}case`MultiLineString`:{let e=n;for(let n=0,r=e.length;n<r;n++){let r=n>0?e[n-1]:0;this.addCoordinates_(`LineString`,t.slice(r,e[n]),null,i,a,o,s)}break}case`MultiPoint`:for(let e=0,n=t.length;e<n;e+=o)this.addCoordinates_(`Point`,t.slice(e,e+2),null,i,a,null,null);break;case`Polygon`:{let e=n;if(i instanceof fe){let n=r(t,e);if(n.length>1){this.addCoordinates_(`MultiPolygon`,t,n,i,a,o,s);return}}this.polygonBatch.entries[a]||(this.polygonBatch.entries[a]=this.addRefToEntry_(a,{feature:i,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]})),c=t.length/o;let l=n.length,u=n.map((e,t,n)=>t>0?(e-n[t-1])/o:e/o);this.polygonBatch.verticesCount+=c,this.polygonBatch.ringsCount+=l,this.polygonBatch.geometriesCount++,this.polygonBatch.entries[a].flatCoordss.push(he(t,o)),this.polygonBatch.entries[a].ringsVerticesCounts.push(u),this.polygonBatch.entries[a].verticesCount+=c,this.polygonBatch.entries[a].ringsCount+=l;for(let n=0,r=e.length;n<r;n++){let r=n>0?e[n-1]:0;this.addCoordinates_(`LinearRing`,t.slice(r,e[n]),null,i,a,o,s)}break}case`Point`:this.pointBatch.entries[a]||(this.pointBatch.entries[a]=this.addRefToEntry_(a,{feature:i,flatCoordss:[]})),this.pointBatch.geometriesCount++,this.pointBatch.entries[a].flatCoordss.push(t);break;case`LineString`:case`LinearRing`:this.lineStringBatch.entries[a]||(this.lineStringBatch.entries[a]=this.addRefToEntry_(a,{feature:i,flatCoordss:[],verticesCount:0})),c=t.length/o,this.lineStringBatch.verticesCount+=c,this.lineStringBatch.geometriesCount++,this.lineStringBatch.entries[a].flatCoordss.push(ge(t,o,s)),this.lineStringBatch.entries[a].verticesCount+=c}}addRefToEntry_(e,t){let n=this.uidToRef_.get(e),r=n||this.freeGlobalRef_.pop()||++this.globalCounter_;return t.ref=r,n||(this.refToFeature_.set(r,t.feature),this.uidToRef_.set(e,r)),t}removeRef_(e,t){if(!e)throw Error(`This feature has no ref: `+t);this.refToFeature_.delete(e),this.uidToRef_.delete(t),this.freeGlobalRef_.push(e)}changeFeature(e,t){if(!this.uidToRef_.get(_(e)))return;this.removeFeature(e);let n=e.getGeometry();n&&(t&&(n=n.clone(),n.applyTransform(t)),this.addGeometry_(n,e))}removeFeature(e){let t=this.clearFeatureEntryInPointBatch_(e);t=this.clearFeatureEntryInPolygonBatch_(e)||t,t=this.clearFeatureEntryInLineStringBatch_(e)||t,t&&this.removeRef_(t.ref,_(t.feature))}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0,this.globalCounter_=0,this.freeGlobalRef_=[],this.refToFeature_.clear(),this.uidToRef_.clear()}getFeatureFromRef(e){return this.refToFeature_.get(e)}isEmpty(){return this.globalCounter_===0}filter(t){let n=new e;n.globalCounter_=this.globalCounter_,n.uidToRef_=this.uidToRef_,n.refToFeature_=this.refToFeature_;let r=!0;for(let e of this.refToFeature_.values())t(e)&&(n.addFeature(e),r=!1);return r?new e:n}};function he(e,t){return t===2?e:e.filter((e,n)=>n%t<2)}function ge(e,t,n){return t===3&&n===`XYM`?e:t===4?e.filter((e,n)=>n%t!==2):t===3?e.map((e,n)=>n%t===2?0:e):Array(e.length*1.5).fill(0).map((t,n)=>n%3==2?0:e[Math.round(n/1.5)])}function _e(){let e=`function t(t,n,x=2){const o=n&&n.length,i=o?n[0]*x:t.length;let f=e(t,0,i,x,!0);const l=[];if(!f||f.next===f.prev)return l;let c,y,h;if(o&&(f=function(t,n,r,x){const o=[];for(let r=0,i=n.length;r<i;r++){const f=e(t,n[r]*x,r<i-1?n[r+1]*x:t.length,x,!1);f===f.next&&(f.steiner=!0),o.push(a(f))}o.sort(u);for(let t=0;t<o.length;t++)r=s(o[t],r);return r}(t,n,f,x)),t.length>80*x){c=t[0],y=t[1];let e=c,n=y;for(let r=x;r<i;r+=x){const x=t[r],o=t[r+1];x<c&&(c=x),o<y&&(y=o),x>e&&(e=x),o>n&&(n=o)}h=Math.max(e-c,n-y),h=0!==h?32767/h:0}return r(f,l,x,c,y,h,0),l}function e(t,e,n,r,x){let o;if(x===function(t,e,n,r){let x=0;for(let o=e,i=n-r;o<n;o+=r)x+=(t[i]-t[o])*(t[o+1]+t[i+1]),i=o;return x}(t,e,n,r)>0)for(let x=e;x<n;x+=r)o=d(x/r|0,t[x],t[x+1],o);else for(let x=n-r;x>=e;x-=r)o=d(x/r|0,t[x],t[x+1],o);return o&&b(o,o.next)&&(w(o),o=o.next),o}function n(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!b(r,r.next)&&0!==v(r.prev,r,r.next))r=r.next;else{if(w(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function r(t,e,u,s,l,a,y){if(!t)return;!y&&a&&function(t,e,n,r){let x=t;do{0===x.z&&(x.z=c(x.x,x.y,e,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==t);x.prevZ.nextZ=null,x.prevZ=null,function(t){let e,n=1;do{let r,x=t;t=null;let o=null;for(e=0;x;){e++;let i=x,f=0;for(let t=0;t<n&&(f++,i=i.nextZ,i);t++);let u=n;for(;f>0||u>0&&i;)0!==f&&(0===u||!i||x.z<=i.z)?(r=x,x=x.nextZ,f--):(r=i,i=i.nextZ,u--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;x=i}o.nextZ=null,n*=2}while(e>1)}(x)}(t,s,l,a);let h=t;for(;t.prev!==t.next;){const c=t.prev,p=t.next;if(a?o(t,s,l,a):x(t))e.push(c.i,t.i,p.i),w(t),t=p.next,h=p.next;else if((t=p)===h){y?1===y?r(t=i(n(t),e),e,u,s,l,a,2):2===y&&f(t,e,u,s,l,a):r(n(t),e,u,s,l,a,1);break}}}function x(t){const e=t.prev,n=t,r=t.next;if(v(e,n,r)>=0)return!1;const x=e.x,o=n.x,i=r.x,f=e.y,u=n.y,s=r.y,l=Math.min(x,o,i),c=Math.min(f,u,s),a=Math.max(x,o,i),y=Math.max(f,u,s);let p=r.next;for(;p!==e;){if(p.x>=l&&p.x<=a&&p.y>=c&&p.y<=y&&h(x,f,o,u,i,s,p.x,p.y)&&v(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function o(t,e,n,r){const x=t.prev,o=t,i=t.next;if(v(x,o,i)>=0)return!1;const f=x.x,u=o.x,s=i.x,l=x.y,a=o.y,y=i.y,p=Math.min(f,u,s),b=Math.min(l,a,y),M=Math.max(f,u,s),m=Math.max(l,a,y),A=c(p,b,e,n,r),g=c(M,m,e,n,r);let Z=t.prevZ,d=t.nextZ;for(;Z&&Z.z>=A&&d&&d.z<=g;){if(Z.x>=p&&Z.x<=M&&Z.y>=b&&Z.y<=m&&Z!==x&&Z!==i&&h(f,l,u,a,s,y,Z.x,Z.y)&&v(Z.prev,Z,Z.next)>=0)return!1;if(Z=Z.prevZ,d.x>=p&&d.x<=M&&d.y>=b&&d.y<=m&&d!==x&&d!==i&&h(f,l,u,a,s,y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;Z&&Z.z>=A;){if(Z.x>=p&&Z.x<=M&&Z.y>=b&&Z.y<=m&&Z!==x&&Z!==i&&h(f,l,u,a,s,y,Z.x,Z.y)&&v(Z.prev,Z,Z.next)>=0)return!1;Z=Z.prevZ}for(;d&&d.z<=g;){if(d.x>=p&&d.x<=M&&d.y>=b&&d.y<=m&&d!==x&&d!==i&&h(f,l,u,a,s,y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function i(t,e){let r=t;do{const n=r.prev,x=r.next.next;!b(n,x)&&M(n,r,r.next,x)&&g(n,x)&&g(x,n)&&(e.push(n.i,r.i,x.i),w(r),w(r.next),r=t=x),r=r.next}while(r!==t);return n(r)}function f(t,e,x,o,i,f){let u=t;do{let t=u.next.next;for(;t!==u.prev;){if(u.i!==t.i&&p(u,t)){let s=Z(u,t);return u=n(u,u.next),s=n(s,s.next),r(u,e,x,o,i,f,0),void r(s,e,x,o,i,f,0)}t=t.next}u=u.next}while(u!==t)}function u(t,e){let n=t.x-e.x;if(0===n&&(n=t.y-e.y,0===n)){n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x)}return n}function s(t,e){const r=function(t,e){let n=e;const r=t.x,x=t.y;let o,i=-1/0;if(b(t,n))return n;do{if(b(t,n.next))return n.next;if(x<=n.y&&x>=n.next.y&&n.next.y!==n.y){const t=n.x+(x-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i&&(i=t,o=n.x<n.next.x?n:n.next,t===r))return o}n=n.next}while(n!==e);if(!o)return null;const f=o,u=o.x,s=o.y;let c=1/0;n=o;do{if(r>=n.x&&n.x>=u&&r!==n.x&&y(x<s?r:i,x,u,s,x<s?i:r,x,n.x,n.y)){const e=Math.abs(x-n.y)/(r-n.x);g(n,t)&&(e<c||e===c&&(n.x>o.x||n.x===o.x&&l(o,n)))&&(o=n,c=e)}n=n.next}while(n!==f);return o}(t,e);if(!r)return e;const x=Z(r,t);return n(x,x.next),n(r,r.next)}function l(t,e){return v(t.prev,t,e.prev)<0&&v(e.next,t,t.next)<0}function c(t,e,n,r,x){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function y(t,e,n,r,x,o,i,f){return(x-i)*(e-f)>=(t-i)*(o-f)&&(t-i)*(r-f)>=(n-i)*(e-f)&&(n-i)*(o-f)>=(x-i)*(r-f)}function h(t,e,n,r,x,o,i,f){return!(t===i&&e===f)&&y(t,e,n,r,x,o,i,f)}function p(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&M(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(g(t,e)&&g(e,t)&&function(t,e){let n=t,r=!1;const x=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&x<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(v(t.prev,t,e.prev)||v(t,e.prev,e))||b(t,e)&&v(t.prev,t,t.next)>0&&v(e.prev,e,e.next)>0)}function v(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function b(t,e){return t.x===e.x&&t.y===e.y}function M(t,e,n,r){const x=A(v(t,e,n)),o=A(v(t,e,r)),i=A(v(n,r,t)),f=A(v(n,r,e));return x!==o&&i!==f||(!(0!==x||!m(t,n,e))||(!(0!==o||!m(t,r,e))||(!(0!==i||!m(n,t,r))||!(0!==f||!m(n,e,r)))))}function m(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function A(t){return t>0?1:t<0?-1:0}function g(t,e){return v(t.prev,t,t.next)<0?v(t,e,t.next)>=0&&v(t,t.prev,e)>=0:v(t,e,t.prev)<0||v(t,t.next,e)<0}function Z(t,e){const n=F(t.i,t.x,t.y),r=F(e.i,e.x,e.y),x=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=x,x.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function d(t,e,n,r){const x=F(t,e,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function w(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function F(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),x=[(e[0]-t[0])/r,(e[1]-t[1])/r],o=[-x[1],x[0]],i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),f=[(n[0]-t[0])/i,(n[1]-t[1])/i];let u=0===r||0===i?0:Math.acos((s=f[0]*x[0]+f[1]*x[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;u=Math.max(u,1e-5);return f[0]*o[0]+f[1]*o[1]>0?u:2*Math.PI-u}function I(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function z(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const x=e[0],o=e[1],i=e[2],f=e[3],u=e[4],s=e[5];return t[0]=f/n,t[1]=-o/n,t[2]=-i/n,t[3]=x/n,t[4]=(i*s-f*u)/n,t[5]=-(x*s-o*u)/n,t}new Array(6);const B=[],P={vertexAttributesPosition:0,instanceAttributesPosition:0,indicesPosition:0};function N(t,e,n,r,x){const o=t[e++],i=t[e++],f=B;f.length=r;for(let n=0;n<f.length;n++)f[n]=t[e+n];let u=x?x.instanceAttributesPosition:0;return n[u++]=o,n[u++]=i,f.length&&(n.set(f,u),u+=f.length),P.instanceAttributesPosition=u,P}function R(t,e,n,r,x,o,i,f,u,s){const l=[t[e],t[e+1]],c=[t[n],t[n+1]],a=t[e+2],y=t[n+2],h=I(f,[...l]),p=I(f,[...c]);let v=-1,b=-1,M=s;const m=null!==x;if(null!==r){v=E(h,p,I(f,[...[t[r],t[r+1]]])),Math.cos(v)<=.985&&(M+=Math.tan((v-Math.PI)/2))}if(m){b=E(p,h,I(f,[...[t[x],t[x+1]]])),Math.cos(b)<=.985&&(M+=Math.tan((Math.PI-b)/2))}const A=Math.pow(2,24),g=u%A,Z=Math.floor(u/A)*A;return o.push(l[0],l[1],a,c[0],c[1],y,v,b,g,Z,s),o.push(...i),{length:u+Math.sqrt((p[0]-h[0])*(p[0]-h[0])+(p[1]-h[1])*(p[1]-h[1])),angle:M}}function S(e,n,r,x,o){const i=2+o;let f=n;const u=e.slice(f,f+o);f+=o;const s=e[f++];let l=0;const c=new Array(s-1);for(let t=0;t<s;t++)l+=e[f++],t<s-1&&(c[t]=l);const a=e.slice(f,f+2*l),y=t(a,c,2);for(let t=0;t<y.length;t++)x.push(y[t]+r.length/i);for(let t=0;t<a.length;t+=2)r.push(a[t],a[t+1],...u);return f+2*l}const T="GENERATE_POLYGON_BUFFERS",_="GENERATE_POINT_BUFFERS",O="GENERATE_LINE_STRING_BUFFERS",U=self;U.onmessage=t=>{const e=t.data;switch(e.type){case _:{const t=2,n=2,r=e.customAttributesSize,x=n+r,o=new Float32Array(e.renderInstructions),i=o.length/x*(t+r),f=Uint32Array.from([0,1,3,1,2,3]),u=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),s=new Float32Array(i);let l;for(let t=0;t<o.length;t+=x)l=N(o,t,s,r,l);const c=Object.assign({indicesBuffer:f.buffer,vertexAttributesBuffer:u.buffer,instanceAttributesBuffer:s.buffer,renderInstructions:o.buffer},e);U.postMessage(c,[u.buffer,s.buffer,f.buffer,o.buffer]);break}case O:{const t=[],n=e.customAttributesSize,r=3,x=new Float32Array(e.renderInstructions);let o=0;const i=[1,0,0,1,0,0];let f,u;for(z(i,e.renderInstructionsTransform);o<x.length;){u=Array.from(x.slice(o,o+n)),o+=n,f=x[o++];const e=o,s=o+(f-1)*r,l=x[e]===x[s]&&x[e+1]===x[s+1];let c=0,a=0;for(let n=0;n<f-1;n++){let y=null;n>0?y=o+(n-1)*r:l&&(y=s-r);let h=null;n<f-2?h=o+(n+2)*r:l&&(h=e+r);const p=R(x,o+n*r,o+(n+1)*r,y,h,t,u,i,c,a);c=p.length,a=p.angle}o+=f*r}const s=Uint32Array.from([0,1,3,1,2,3]),l=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),c=Float32Array.from(t),a=Object.assign({indicesBuffer:s.buffer,vertexAttributesBuffer:l.buffer,instanceAttributesBuffer:c.buffer,renderInstructions:x.buffer},e);U.postMessage(a,[l.buffer,c.buffer,s.buffer,x.buffer]);break}case T:{const t=[],n=[],r=e.customAttributesSize,x=new Float32Array(e.renderInstructions);let o=0;for(;o<x.length;)o=S(x,o,t,n,r);const i=Uint32Array.from(n),f=Float32Array.from(t),u=Float32Array.from([]),s=Object.assign({indicesBuffer:i.buffer,vertexAttributesBuffer:f.buffer,instanceAttributesBuffer:u.buffer,renderInstructions:x.buffer},e);U.postMessage(s,[f.buffer,u.buffer,i.buffer,x.buffer]);break}}};`;return new Worker(typeof Blob>`u`?`data:application/javascript;base64,`+Buffer.from(e,`binary`).toString(`base64`):URL.createObjectURL(new Blob([e],{type:`application/javascript`})))}var I={GENERATE_POLYGON_BUFFERS:`GENERATE_POLYGON_BUFFERS`,GENERATE_POINT_BUFFERS:`GENERATE_POINT_BUFFERS`,GENERATE_LINE_STRING_BUFFERS:`GENERATE_LINE_STRING_BUFFERS`};function ve(e,t){t||=[];let n=Math.floor(e/256/256/256)/255,r=Math.floor(e/256/256)%256/255,i=Math.floor(e/256)%256/255,a=e%256/255;return t[0]=n*256*255+r*255,t[1]=i*256*255+a*255,t}function ye(e){let t=0;return t+=Math.round(e[0]*256*256*256*255),t+=Math.round(e[1]*256*256*255),t+=Math.round(e[2]*256*255),t+=Math.round(e[3]*255),t}function L(e,t,n,r){let i=0;for(let a in t){let o=t[a],s=o.callback.call(n,n.feature),c=s?.[0]??s;c===-9999999&&console.warn(`The "has" operator might return false positives.`),c===void 0?c=ie:c===null&&(c=0),e[r+i++]=c,o.size&&o.size!==1&&(e[r+i++]=s[1],!(o.size<3)&&(e[r+i++]=s[2],!(o.size<4)&&(e[r+i++]=s[3])))}return i}function R(e){return Object.keys(e).reduce((t,n)=>t+(e[n].size||1),0)}function be(e,n,r,i){let a=(2+R(r))*e.geometriesCount;(!n||n.length!==a)&&(n=new Float32Array(a));let o=[],s=0;for(let a in e.entries){let c=e.entries[a];for(let e=0,a=c.flatCoordss.length;e<a;e++)o[0]=c.flatCoordss[e][0],o[1]=c.flatCoordss[e][1],t(i,o),n[s++]=o[0],n[s++]=o[1],s+=L(n,r,c,s)}return n}function xe(e,t,n,r){let i=3*e.verticesCount+(1+R(n))*e.geometriesCount;(!t||t.length!==i)&&(t=new Float32Array(i));let a=[],o=0;for(let i in e.entries){let s=e.entries[i];for(let e=0,i=s.flatCoordss.length;e<i;e++){a.length=s.flatCoordss[e].length,c(s.flatCoordss[e],0,a.length,3,r,a,3),o+=L(t,n,s,o),t[o++]=a.length/3;for(let e=0,n=a.length;e<n;e+=3)t[o++]=a[e],t[o++]=a[e+1],t[o++]=a[e+2]}}return t}function Se(e,t,n,r){let i=2*e.verticesCount+(1+R(n))*e.geometriesCount+e.ringsCount;(!t||t.length!==i)&&(t=new Float32Array(i));let a=[],o=0;for(let i in e.entries){let s=e.entries[i];for(let e=0,i=s.flatCoordss.length;e<i;e++){a.length=s.flatCoordss[e].length,c(s.flatCoordss[e],0,a.length,2,r,a),o+=L(t,n,s,o),t[o++]=s.ringsVerticesCounts[e].length;for(let n=0,r=s.ringsVerticesCounts[e].length;n<r;n++)t[o++]=s.ringsVerticesCounts[e][n];for(let e=0,n=a.length;e<n;e+=2)t[o++]=a[e],t[o++]=a[e+1]}}return t}function z(e){return(JSON.stringify(e).split(``).reduce((e,t)=>(e<<5)-e+t.charCodeAt(0),0)>>>0).toString()}function B(e,t,n,r){if(`${r}radius`in e&&r!==`icon-`){let i=k(n,e[`${r}radius`],v);if(`${r}radius2`in e){let t=k(n,e[`${r}radius2`],v);i=`max(${i}, ${t})`}`${r}stroke-width`in e&&(i=`(${i} + ${k(n,e[`${r}stroke-width`],v)} * 0.5)`),t.setSymbolSizeExpression(`vec2(${i} * 2. + 0.5)`)}if(`${r}scale`in e){let i=k(n,e[`${r}scale`],l);t.setSymbolSizeExpression(`${t.getSymbolSizeExpression()} * ${i}`)}`${r}displacement`in e&&t.setSymbolOffsetExpression(k(n,e[`${r}displacement`],f)),`${r}rotation`in e&&t.setSymbolRotationExpression(k(n,e[`${r}rotation`],v)),`${r}rotate-with-view`in e&&t.setSymbolRotateWithView(!!e[`${r}rotate-with-view`])}function V(e,t,n,r,i){let a=`vec4(0.)`;if(t!==null&&(a=t),n!==null&&r!==null){let t=`smoothstep(-${r} + 0.63, -${r} - 0.58, ${e})`;a=`mix(${n}, ${a}, ${t})`}let o=`(1.0 - smoothstep(-0.63, 0.58, ${e}))`,s=`${a} * vec4(1.0, 1.0, 1.0, ${o})`;return i!==null&&(s=`${s} * vec4(1.0, 1.0, 1.0, ${i})`),s}function H(e,t,n,r,i){let a=new Image;a.crossOrigin=e[`${r}cross-origin`]===void 0?`anonymous`:e[`${r}cross-origin`],d(typeof e[`${r}src`]==`string`,`WebGL layers do not support expressions for the ${r}src style property`),a.src=e[`${r}src`],n[`u_texture${i}_size`]=()=>a.complete?[a.width,a.height]:[0,0],t.addUniform(`u_texture${i}_size`,`vec2`);let o=`u_texture${i}_size`;return n[`u_texture${i}`]=a,t.addUniform(`u_texture${i}`,`sampler2D`),o}function U(e,t,n,r,i){let a=k(n,e[`${t}offset`],l);if(`${t}offset-origin`in e)switch(e[`${t}offset-origin`]){case`top-right`:a=`vec2(${r}.x, 0.) + ${i} * vec2(-1., 0.) + ${a} * vec2(-1., 1.)`;break;case`bottom-left`:a=`vec2(0., ${r}.y) + ${i} * vec2(0., -1.) + ${a} * vec2(1., -1.)`;break;case`bottom-right`:a=`${r} - ${i} - ${a}`}return a}function Ce(e,t,n,r){r.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,B(e,t,r,`circle-`);let i=null;`circle-opacity`in e&&(i=k(r,e[`circle-opacity`],v));let a=`coordsPx`;`circle-scale`in e&&(a=`coordsPx / ${k(r,e[`circle-scale`],l)}`);let o=null;`circle-fill-color`in e&&(o=k(r,e[`circle-fill-color`],s));let c=null;`circle-stroke-color`in e&&(c=k(r,e[`circle-stroke-color`],s));let u=k(r,e[`circle-radius`],v),d=null;`circle-stroke-width`in e&&(d=k(r,e[`circle-stroke-width`],v),u=`(${u} + ${d} * 0.5)`);let f=V(`circleDistanceField(${a}, ${u})`,o,c,d,i);t.setSymbolColorExpression(f)}function we(e,t,n,r){r.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,r.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
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
}`,r.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
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
}`,B(e,t,r,`shape-`);let i=null;`shape-opacity`in e&&(i=k(r,e[`shape-opacity`],v));let a=`coordsPx`;`shape-scale`in e&&(a=`coordsPx / ${k(r,e[`shape-scale`],l)}`);let o=null;`shape-fill-color`in e&&(o=k(r,e[`shape-fill-color`],s));let c=null;`shape-stroke-color`in e&&(c=k(r,e[`shape-stroke-color`],s));let u=null;`shape-stroke-width`in e&&(u=k(r,e[`shape-stroke-width`],v));let d=k(r,e[`shape-points`],v),f=`0.`;`shape-angle`in e&&(f=k(r,e[`shape-angle`],v));let p,m=k(r,e[`shape-radius`],v);if(u!==null&&(m=`${m} + ${u} * 0.5`),`shape-radius2`in e){let t=k(r,e[`shape-radius2`],v);u!==null&&(t=`${t} + ${u} * 0.5`),p=`starDistanceField(${a}, ${d}, ${m}, ${t}, ${f})`}else p=`regularDistanceField(${a}, ${d}, ${m}, ${f})`;let h=V(p,o,c,u,i);t.setSymbolColorExpression(h)}function Te(e,t,n,r){let i=`vec4(1.0)`;`icon-color`in e&&(i=k(r,e[`icon-color`],s)),`icon-opacity`in e&&(i=`${i} * vec4(1.0, 1.0, 1.0, ${k(r,e[`icon-opacity`],v)})`);let a=z(e[`icon-src`]),o=H(e,t,n,`icon-`,a);if(t.setSymbolColorExpression(`${i} * texture2D(u_texture${a}, v_texCoord)`).setSymbolSizeExpression(o),`icon-width`in e&&`icon-height`in e&&t.setSymbolSizeExpression(`vec2(${k(r,e[`icon-width`],v)}, ${k(r,e[`icon-height`],v)})`),`icon-offset`in e&&`icon-size`in e){let n=k(r,e[`icon-size`],f),i=t.getSymbolSizeExpression();t.setSymbolSizeExpression(n);let a=U(e,`icon-`,r,`v_quadSizePx`,n);t.setTextureCoordinateExpression(`(vec4((${a}).xyxy) + vec4(0., 0., ${n})) / (${i}).xyxy`)}if(B(e,t,r,`icon-`),`icon-anchor`in e){let n=k(r,e[`icon-anchor`],f),i=`1.0`;`icon-scale`in e&&(i=k(r,e[`icon-scale`],l));let a;a=e[`icon-anchor-x-units`]===`pixels`&&e[`icon-anchor-y-units`]===`pixels`?`${n} * ${i}`:e[`icon-anchor-x-units`]===`pixels`?`${n} * vec2(vec2(${i}).x, v_quadSizePx.y)`:e[`icon-anchor-y-units`]===`pixels`?`${n} * vec2(v_quadSizePx.x, vec2(${i}).x)`:`${n} * v_quadSizePx`;let o=`v_quadSizePx * vec2(0.5, -0.5) + ${a} * vec2(-1., 1.)`;if(`icon-anchor-origin`in e)switch(e[`icon-anchor-origin`]){case`top-right`:o=`v_quadSizePx * -0.5 + ${a}`;break;case`bottom-left`:o=`v_quadSizePx * 0.5 - ${a}`;break;case`bottom-right`:o=`v_quadSizePx * vec2(-0.5, 0.5) + ${a} * vec2(1., -1.)`}t.setSymbolOffsetExpression(`${t.getSymbolOffsetExpression()} + ${o}`)}}function Ee(e,t,n,r){if(`stroke-color`in e&&t.setStrokeColorExpression(k(r,e[`stroke-color`],s)),`stroke-pattern-src`in e){let i=z(e[`stroke-pattern-src`]),a=H(e,t,n,`stroke-pattern-`,i),o=a,s=`vec2(0.)`;`stroke-pattern-offset`in e&&`stroke-pattern-size`in e&&(o=k(r,e[`stroke-pattern-size`],f),s=U(e,`stroke-pattern-`,r,a,o));let c=`0.`;`stroke-pattern-spacing`in e&&(c=k(r,e[`stroke-pattern-spacing`],v));let l=`0.`;`stroke-pattern-start-offset`in e&&(l=k(r,e[`stroke-pattern-start-offset`],v)),r.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float startOffsetPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
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
}`;let u=`u_texture${i}`,d=`1.`;`stroke-color`in e&&(d=t.getStrokeColorExpression()),t.setStrokeColorExpression(`${d} * sampleStrokePattern(${u}, ${a}, ${s}, ${o}, ${c}, ${l}, currentLengthPx, currentRadiusRatio, v_width)`),r.functions.computeStrokePatternLength=`float computeStrokePatternLength(vec2 sampleSize, float spacingPx, float lineWidth) {
  float patternLengthPx = sampleSize.x / sampleSize.y * lineWidth;
  return patternLengthPx + spacingPx;
}`,t.setStrokePatternLengthExpression(`computeStrokePatternLength(${o}, ${c}, v_width)`)}if(`stroke-width`in e&&t.setStrokeWidthExpression(k(r,e[`stroke-width`],v)),`stroke-offset`in e&&t.setStrokeOffsetExpression(k(r,e[`stroke-offset`],v)),`stroke-line-cap`in e&&t.setStrokeCapExpression(k(r,e[`stroke-line-cap`],g)),`stroke-line-join`in e&&t.setStrokeJoinExpression(k(r,e[`stroke-line-join`],g)),`stroke-miter-limit`in e&&t.setStrokeMiterLimitExpression(k(r,e[`stroke-miter-limit`],v)),`stroke-line-dash`in e){r.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType, float lineWidth) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${T(`square`)}) {
    distanceSegment -= lineWidth * 0.5;
  } else if (capType == ${T(`round`)}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - lineWidth * 0.5);
  }
  return distanceSegment;
}`;let n=e[`stroke-line-dash`].map(e=>k(r,e,v));n.length%2==1&&(n=[...n,...n]);let i=`0.`;`stroke-line-dash-offset`in e&&(i=k(r,e[`stroke-line-dash-offset`],v));let a=`dashDistanceField_${z(e[`stroke-line-dash`])}`,o=n.map((e,t)=>`float dashLength${t}`).join(`, `),s=n.map((e,t)=>`dashLength${t}`).join(` + `),c=`0.`,l=`getSingleDashDistance(distance, radius, ${c}, dashLength0, totalDashLength, capType, lineWidth)`;for(let e=2;e<n.length;e+=2)c=`${c} + dashLength${e-2} + dashLength${e-1}`,l=`min(${l}, getSingleDashDistance(distance, radius, ${c}, dashLength${e}, totalDashLength, capType, lineWidth))`;r.functions[a]=`float ${a}(float distance, float radius, float capType, float lineWidth, ${o}) {
  float totalDashLength = ${s};
  return ${l};
}`;let u=n.map((e,t)=>`${e}`).join(`, `);t.setStrokeDistanceFieldExpression(`${a}(currentLengthPx + ${i}, currentRadiusPx, capType, v_width, ${u})`);let d=n.join(` + `);t.getStrokePatternLengthExpression()&&(r.functions.combinePatternLengths=`float combinePatternLengths(float patternLength1, float patternLength2) {
  return patternLength1 * patternLength2;
}`,d=`combinePatternLengths(${t.getStrokePatternLengthExpression()}, ${d})`),t.setStrokePatternLengthExpression(d)}}function De(e,t,n,r){if(`fill-color`in e&&t.setFillColorExpression(k(r,e[`fill-color`],s)),`fill-pattern-src`in e){let i=z(e[`fill-pattern-src`]),a=H(e,t,n,`fill-pattern-`,i);t.setFillPatternSizeExpression(a);let o=`vec2(0.)`;if(`fill-pattern-offset`in e&&`fill-pattern-size`in e){let n=k(r,e[`fill-pattern-size`],f);t.setFillPatternSizeExpression(n),o=U(e,`fill-pattern-`,r,a,`v_patternSizePx`)}r.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 patternOriginPx, vec2 pxPosition, float sampleScaleRatio) {
  vec2 pxRelativePos = pxPosition - patternOriginPx;

  // rotate the relative position from origin by the current view rotation
  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));
  // sample position is computed according to the sample offset & size
  vec2 samplePos = mod(pxRelativePos / sampleScaleRatio, sampleSize);
  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));
  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright
  return texture2D(texture, (samplePos + textureOffset) / textureSize);
}`;let s=`u_texture${i}`,c=`1.`;`fill-color`in e&&(c=t.getFillColorExpression()),t.setFillColorExpression(`${c} * sampleFillPattern(${s}, ${a}, ${o}, v_patternSizePx, v_patternOriginPx, pxPos, df_float(u_df_patternScaleRatio))`)}}function W(e,t,n){let r=se(),i=new F,a={};if(`icon-src`in e?Te(e,i,a,r):`shape-points`in e?we(e,i,a,r):`circle-radius`in e&&Ce(e,i,a,r),Ee(e,i,a,r),De(e,i,a,r),n){let e=u(),t=k(r,n,h,e);e.mCoordinate?i.setFragmentDiscardExpression(`!${t}`):i.setShapeDiscardExpression(`!${t}`)}let o={};function s(e,t,n,a){if(!r[e])return;let s=ue(n),c=le(n);i.addAttribute(`a_${t}`,s),o[t]={size:c,callback:a}}return s(`geometryType`,oe,g,e=>O(p(e.getGeometry()))),s(`featureId`,re,g|v,e=>{let t=e.getId()??null;return typeof t==`string`?O(t):t}),ce(i,r),{builder:i,attributes:{...o,...ae(r)},uniforms:{...a,...ne(r,t)}}}var Oe=[],G;function ke(){return G||=_e(),G}var Ae=0,K={POSITION:`a_position`,LOCAL_POSITION:`a_localPosition`,SEGMENT_START:`a_segmentStart`,SEGMENT_END:`a_segmentEnd`,MEASURE_START:`a_measureStart`,MEASURE_END:`a_measureEnd`,ANGLE_TANGENT_SUM:`a_angleTangentSum`,JOIN_ANGLES:`a_joinAngles`,DISTANCE_LOW:`a_distanceLow`,DISTANCE_HIGH:`a_distanceHigh`},je=class{constructor(e,t,n,r){this.helper_,this.hitDetectionEnabled_=!!r,this.styleShaders=q(e,t),this.customAttributes_={},this.uniforms_={},this.hitDetectionEnabled_&&(this.customAttributes_.hitColor={callback(){return ve(this.ref,Oe)},size:2});for(let e of this.styleShaders){for(let t in e.attributes)t in this.customAttributes_||(this.customAttributes_[t]=e.attributes[t]);for(let t in e.uniforms)t in this.uniforms_||(this.uniforms_[t]=e.uniforms[t])}this.renderPasses_=this.styleShaders.map(e=>{let t={},n=Object.entries(this.customAttributes_).map(([t,n])=>({name:t in e.attributes||t===`hitColor`?`a_${t}`:null,size:n.size||1,type:C.FLOAT}));return e.builder.getFillVertexShader()&&(t.fillRenderPass={vertexShader:e.builder.getFillVertexShader(),fragmentShader:e.builder.getFillFragmentShader(),attributesDesc:[{name:K.POSITION,size:2,type:C.FLOAT},...n],instancedAttributesDesc:[],instancePrimitiveVertexCount:3}),e.builder.getStrokeVertexShader()&&(t.strokeRenderPass={vertexShader:e.builder.getStrokeVertexShader(),fragmentShader:e.builder.getStrokeFragmentShader(),attributesDesc:[{name:K.LOCAL_POSITION,size:2,type:C.FLOAT}],instancedAttributesDesc:[{name:K.SEGMENT_START,size:2,type:C.FLOAT},{name:K.MEASURE_START,size:1,type:C.FLOAT},{name:K.SEGMENT_END,size:2,type:C.FLOAT},{name:K.MEASURE_END,size:1,type:C.FLOAT},{name:K.JOIN_ANGLES,size:2,type:C.FLOAT},{name:K.DISTANCE_LOW,size:1,type:C.FLOAT},{name:K.DISTANCE_HIGH,size:1,type:C.FLOAT},{name:K.ANGLE_TANGENT_SUM,size:1,type:C.FLOAT},...n],instancePrimitiveVertexCount:6}),e.builder.getSymbolVertexShader()&&(t.symbolRenderPass={vertexShader:e.builder.getSymbolVertexShader(),fragmentShader:e.builder.getSymbolFragmentShader(),attributesDesc:[{name:K.LOCAL_POSITION,size:2,type:C.FLOAT}],instancedAttributesDesc:[{name:K.POSITION,size:2,type:C.FLOAT},...n],instancePrimitiveVertexCount:6}),t}),this.hasFill_=this.renderPasses_.some(e=>e.fillRenderPass),this.hasStroke_=this.renderPasses_.some(e=>e.strokeRenderPass),this.hasSymbol_=this.renderPasses_.some(e=>e.symbolRenderPass),this.setHelper(n)}async generateBuffers(e,t){if(e.isEmpty())return null;let n=this.generateRenderInstructions_(e,t),[r,a,s]=await Promise.all([this.generateBuffersForType_(n.polygonInstructions,`Polygon`,t),this.generateBuffersForType_(n.lineStringInstructions,`LineString`,t),this.generateBuffersForType_(n.pointInstructions,`Point`,t)]);return{polygonBuffers:r,lineStringBuffers:a,pointBuffers:s,invertVerticesTransform:o(i(),t)}}generateRenderInstructions_(e,t){return{polygonInstructions:this.hasFill_?Se(e.polygonBatch,new Float32Array,this.customAttributes_,t):null,lineStringInstructions:this.hasStroke_?xe(e.lineStringBatch,new Float32Array,this.customAttributes_,t):null,pointInstructions:this.hasSymbol_?be(e.pointBatch,new Float32Array,this.customAttributes_,t):null}}generateBuffersForType_(e,t,n){if(e===null)return null;let r=Ae++,i;switch(t){case`Polygon`:i=I.GENERATE_POLYGON_BUFFERS;break;case`LineString`:i=I.GENERATE_LINE_STRING_BUFFERS;break;case`Point`:i=I.GENERATE_POINT_BUFFERS}let a={id:r,type:i,renderInstructions:e.buffer,renderInstructionsTransform:n,customAttributesSize:R(this.customAttributes_)},o=ke();return o.postMessage(a,[e.buffer]),e=null,new Promise(e=>{let t=n=>{let i=n.data;if(i.id!==r||(o.removeEventListener(`message`,t),!this.helper_.getGL()))return;let a=new y(ee,D).fromArrayBuffer(i.indicesBuffer),s=new y(S,D).fromArrayBuffer(i.vertexAttributesBuffer),c=new y(S,D).fromArrayBuffer(i.instanceAttributesBuffer);this.helper_.flushBufferData(a),this.helper_.flushBufferData(s),this.helper_.flushBufferData(c),e([a,s,c])};o.addEventListener(`message`,t)})}render(e,t,n){for(let r of this.renderPasses_)r.fillRenderPass&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],e.polygonBuffers[2],r.fillRenderPass,t,n),r.strokeRenderPass&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],e.lineStringBuffers[2],r.strokeRenderPass,t,n),r.symbolRenderPass&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],e.pointBuffers[2],r.symbolRenderPass,t,n)}renderInternal_(e,t,n,r,i,a){let o=e.getSize();if(o===0)return;let s=r.instancedAttributesDesc.length;if(this.helper_.useProgram(r.program,i),this.helper_.bindBuffer(t),this.helper_.bindBuffer(e),this.helper_.enableAttributes(r.attributesDesc),this.helper_.bindBuffer(n),this.helper_.enableAttributesInstanced(r.instancedAttributesDesc),a(),s){let e=r.instancedAttributesDesc.reduce((e,t)=>e+(t.size||1),0),t=n.getSize()/e;this.helper_.drawElementsInstanced(0,o,t)}else this.helper_.drawElements(0,o)}setHelper(e,t=null){this.helper_=e;for(let e of this.renderPasses_)e.fillRenderPass&&(e.fillRenderPass.program=this.helper_.getProgram(e.fillRenderPass.fragmentShader,e.fillRenderPass.vertexShader)),e.strokeRenderPass&&(e.strokeRenderPass.program=this.helper_.getProgram(e.strokeRenderPass.fragmentShader,e.strokeRenderPass.vertexShader)),e.symbolRenderPass&&(e.symbolRenderPass.program=this.helper_.getProgram(e.symbolRenderPass.fragmentShader,e.symbolRenderPass.vertexShader));this.helper_.addUniforms(this.uniforms_),t&&(t.polygonBuffers&&(this.helper_.flushBufferData(t.polygonBuffers[0]),this.helper_.flushBufferData(t.polygonBuffers[1]),this.helper_.flushBufferData(t.polygonBuffers[2])),t.lineStringBuffers&&(this.helper_.flushBufferData(t.lineStringBuffers[0]),this.helper_.flushBufferData(t.lineStringBuffers[1]),this.helper_.flushBufferData(t.lineStringBuffers[2])),t.pointBuffers&&(this.helper_.flushBufferData(t.pointBuffers[0]),this.helper_.flushBufferData(t.pointBuffers[1]),this.helper_.flushBufferData(t.pointBuffers[2])))}};function q(e,t){let n=Array.isArray(e)?e:[e];if(`style`in n[0]){let e=[],r=n,i=[];for(let n of r){let r=Array.isArray(n.style)?n.style:[n.style],a=n.filter;n.else&&i.length&&(a=[`all`,...i.map(e=>[`!`,e])],n.filter&&a.push(n.filter),a.length<3&&(a=a[1])),n.filter&&i.push(n.filter);let o=r.map(e=>W(e,t,a));e.push(...o)}return e}return`builder`in n[0]?n:n.map(e=>W(e,t,null))}var J=new Uint8Array(4),Me=class{constructor(e,t){this.helper_=e;let n=e.getGL();this.texture_=n.createTexture(),this.framebuffer_=n.createFramebuffer(),this.depthbuffer_=n.createRenderbuffer(),this.size_=t||[1,1],this.data_=new Uint8Array,this.dataCacheDirty_=!0,this.updateSize_()}setSize(t){e(t,this.size_)||(this.size_[0]=t[0],this.size_[1]=t[1],this.updateSize_())}getSize(){return this.size_}clearCachedData(){this.dataCacheDirty_=!0}readAll(){if(this.dataCacheDirty_){let e=this.size_,t=this.helper_.getGL();t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.readPixels(0,0,e[0],e[1],t.RGBA,t.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_}readPixel(e,t){if(e<0||t<0||e>this.size_[0]||t>=this.size_[1])return J[0]=0,J[1]=0,J[2]=0,J[3]=0,J;this.readAll();let n=Math.floor(e)+(this.size_[1]-Math.floor(t)-1)*this.size_[0];return J[0]=this.data_[n*4],J[1]=this.data_[n*4+1],J[2]=this.data_[n*4+2],J[3]=this.data_[n*4+3],J}getTexture(){return this.texture_}getFramebuffer(){return this.framebuffer_}getDepthbuffer(){return this.depthbuffer_}updateSize_(){let e=this.size_,t=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.viewport(0,0,e[0],e[1]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture_,0),t.bindRenderbuffer(t.RENDERBUFFER,this.depthbuffer_),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e[0],e[1]),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthbuffer_),this.data_=new Uint8Array(e[0]*e[1]*4)}},Y={PATTERN_ORIGIN_X_DOUBLE:`u_df_patternOriginX`,PATTERN_ORIGIN_Y_DOUBLE:`u_df_patternOriginY`,PATTERN_SCALE_RATIO_DOUBLE:`u_df_patternScaleRatio`,ONE:`u_one`},X=[0,0],Z=[0,0],Q=i(),$=te();function Ne(e,r,i,s){m(Q,r),n(Q,i),e.setUniformMatrixValue(b.PROJECTION_MATRIX,x($,Q)),o(Q,Q),e.setUniformMatrixValue(b.INVERT_PROJECTION_MATRIX,x($,Q)),X[0]=0,X[1]=0;let c=s.size,l=s.viewState.resolution,u=s.viewState.center;a(Q,c[0]/2,c[1]/2,1/l,1/l,0,-u[0],-u[1]),t(Q,X),Z[0]=M(X[0]),Z[1]=j(X[0]),e.setUniformFloatVec2(Y.PATTERN_ORIGIN_X_DOUBLE,Z),Z[0]=M(X[1]),Z[1]=j(X[1]),e.setUniformFloatVec2(Y.PATTERN_ORIGIN_Y_DOUBLE,Z);let d=2**((s.viewState.zoom+.5)%1-.5);X[0]=M(d),X[1]=j(d),e.setUniformFloatVec2(Y.PATTERN_SCALE_RATIO_DOUBLE,X)}export{q as a,F as c,je as i,Ne as n,ye as o,Me as r,me as s,Y as t};