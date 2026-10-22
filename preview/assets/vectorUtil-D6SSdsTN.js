import{t as e}from"./preload-helper-BOiOZ_xk.js";import"./proj-WgbdRJFz.js";import{B as t,G as n,H as r,J as i,K as a,Kt as o,Mn as s,Or as c,Qr as l,R as u,V as d,W as f,a as p,ar as m,dr as h,i as g,ir as ee,n as _,o as te,or as ne,pr as re,qr as v,ri as ie,rr as ae,s as oe,sr as se,t as y}from"./mat4-C3ghpRdj.js";import{A as ce,D as b,E as le,O as ue,T as x,a as de,c as fe,d as pe,f as S,g as C,h as w,i as me,k as T,l as he,m as ge,n as _e,o as ve,p as E,r as ye,s as be,t as xe}from"./compileUtil-1fOwEwj9.js";import{t as D}from"./Feature-ZhPXl-Lv.js";function Se(){return{"fill-color":`rgba(255,255,255,0.4)`,"stroke-color":`#3399CC`,"stroke-width":1.25,"circle-radius":5,"circle-fill-color":`rgba(255,255,255,0.4)`,"circle-stroke-width":1.25,"circle-stroke-color":`#3399CC`}}var O=.985;function k(e){return e-A(e)}function A(e){return Math.fround(e)}var j=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
${xe}

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

`,M=Se(),N=class{constructor(){this.uniforms_=[],this.attributes_=[],this.hasSymbol_=!1,this.symbolSizeExpression_=`vec2(${w(M[`circle-radius`])} + ${w(M[`circle-stroke-width`]*.5)})`,this.symbolRotationExpression_=`0.0`,this.symbolOffsetExpression_=`vec2(0.0)`,this.symbolColorExpression_=S(M[`circle-fill-color`]),this.texCoordExpression_=`vec4(0.0, 0.0, 1.0, 1.0)`,this.fragmentDiscardExpression_=null,this.shapeDiscardExpression_=null,this.symbolRotateWithView_=!1,this.hasStroke_=!1,this.strokeWidthExpression_=w(M[`stroke-width`]),this.strokeColorExpression_=S(M[`stroke-color`]),this.strokeOffsetExpression_=`0.`,this.strokeCapExpression_=C(`round`),this.strokeJoinExpression_=C(`round`),this.strokeMiterLimitExpression_=`10.`,this.strokeDistanceFieldExpression_=`-1000.`,this.strokePatternLengthExpression_=null,this.hasFill_=!1,this.fillColorExpression_=S(M[`fill-color`]),this.fillPatternSizeExpression_=null,this.vertexShaderFunctions_=[],this.fragmentShaderFunctions_=[]}addUniform(e,t){return this.uniforms_.push({name:e,type:t}),this}addAttribute(e,t,n,r){return this.attributes_.push({name:e,type:t,varyingName:e.replace(/^a_/,`v_`),varyingType:r??t,varyingExpression:n??e}),this}setSymbolSizeExpression(e){return this.hasSymbol_=!0,this.symbolSizeExpression_=e,this}getSymbolSizeExpression(){return this.symbolSizeExpression_}setSymbolRotationExpression(e){return this.symbolRotationExpression_=e,this}setSymbolOffsetExpression(e){return this.symbolOffsetExpression_=e,this}getSymbolOffsetExpression(){return this.symbolOffsetExpression_}setSymbolColorExpression(e){return this.hasSymbol_=!0,this.symbolColorExpression_=e,this}getSymbolColorExpression(){return this.symbolColorExpression_}setTextureCoordinateExpression(e){return this.texCoordExpression_=e,this}setFragmentDiscardExpression(e){return this.fragmentDiscardExpression_=e,this}getFragmentDiscardExpression(){return this.fragmentDiscardExpression_}setShapeDiscardExpression(e){return this.shapeDiscardExpression_=e,this}getShapeDiscardExpression(){return this.shapeDiscardExpression_}setSymbolRotateWithView(e){return this.symbolRotateWithView_=e,this}setStrokeWidthExpression(e){return this.hasStroke_=!0,this.strokeWidthExpression_=e,this}setStrokeColorExpression(e){return this.hasStroke_=!0,this.strokeColorExpression_=e,this}getStrokeColorExpression(){return this.strokeColorExpression_}setStrokeOffsetExpression(e){return this.strokeOffsetExpression_=e,this}setStrokeCapExpression(e){return this.strokeCapExpression_=e,this}setStrokeJoinExpression(e){return this.strokeJoinExpression_=e,this}setStrokeMiterLimitExpression(e){return this.strokeMiterLimitExpression_=e,this}setStrokeDistanceFieldExpression(e){return this.strokeDistanceFieldExpression_=e,this}setStrokePatternLengthExpression(e){return this.strokePatternLengthExpression_=e,this}getStrokePatternLengthExpression(){return this.strokePatternLengthExpression_}setFillColorExpression(e){return this.hasFill_=!0,this.fillColorExpression_=e,this}getFillColorExpression(){return this.fillColorExpression_}setFillPatternSizeExpression(e){return this.fillPatternSizeExpression_=e,this}getFillPatternSizeExpression(){return this.fillPatternSizeExpression_}addVertexShaderFunction(e){return this.vertexShaderFunctions_.includes(e)||this.vertexShaderFunctions_.push(e),this}addFragmentShaderFunction(e){return this.fragmentShaderFunctions_.includes(e)||this.fragmentShaderFunctions_.push(e),this}getSymbolVertexShader(){return this.hasSymbol_?`${j}
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
}`:null}getSymbolFragmentShader(){return this.hasSymbol_?`${j}
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
}`:null}getStrokeVertexShader(){return this.hasStroke_?`${j}
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
  if (cos(angle) > ${O} || isCap(angle)) {
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
}`:null}getStrokeFragmentShader(){return this.hasStroke_?`${j}
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
  if (cos(joinAngle) > ${O}) { // avoid risking a division by zero
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
   if (capType == ${C(`butt`)}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${C(`square`)}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${C(`bevel`)}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${C(`miter`)}) {
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
}`:null}getFillVertexShader(){return this.hasFill_?`${j}
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
}`:null}getFillFragmentShader(){return this.hasFill_?`${j}
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
}`:null}},Ce=class e{constructor(){this.globalCounter_=0,this.refToFeature_=new Map,this.uidToRef_=new Map,this.freeGlobalRef_=[],this.polygonBatch={entries:{},geometriesCount:0,verticesCount:0,ringsCount:0},this.pointBatch={entries:{},geometriesCount:0},this.lineStringBatch={entries:{},geometriesCount:0,verticesCount:0}}addFeatures(e,t){for(let n=0;n<e.length;n++)this.addFeature(e[n],t)}addFeature(e,t){let n=e.getGeometry();n&&(t&&(n=n.clone(),n.applyTransform(t)),this.addGeometry_(n,e))}clearFeatureEntryInPointBatch_(e){let t=v(e),n=this.pointBatch.entries[t];if(n)return this.pointBatch.geometriesCount-=n.flatCoordss.length,delete this.pointBatch.entries[t],n}clearFeatureEntryInLineStringBatch_(e){let t=v(e),n=this.lineStringBatch.entries[t];if(n)return this.lineStringBatch.verticesCount-=n.verticesCount??0,this.lineStringBatch.geometriesCount-=n.flatCoordss.length,delete this.lineStringBatch.entries[t],n}clearFeatureEntryInPolygonBatch_(e){let t=v(e),n=this.polygonBatch.entries[t];if(n)return this.polygonBatch.verticesCount-=n.verticesCount??0,this.polygonBatch.ringsCount-=n.ringsCount??0,this.polygonBatch.geometriesCount-=n.flatCoordss.length,delete this.polygonBatch.entries[t],n}addGeometry_(e,t){let n=e.getType();switch(n){case`GeometryCollection`:{let n=e.getGeometriesArray();for(let e of n)this.addGeometry_(e,t);break}case`MultiPolygon`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),r.getEndss(),t,v(t),r.getStride());break}case`MultiLineString`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),r.getEnds(),t,v(t),r.getStride());break}case`MultiPoint`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),null,t,v(t),r.getStride());break}case`Polygon`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),r.getEnds(),t,v(t),r.getStride());break}case`Point`:{let r=e;this.addCoordinates_(n,r.getFlatCoordinates(),null,t,v(t),r.getStride());break}case`LineString`:case`LinearRing`:{let r=e,i=r.getStride();this.addCoordinates_(n,r.getFlatCoordinates(),null,t,v(t),i,r.getLayout?.());break}}}addCoordinates_(e,t,n,r,i,a,s){let c;switch(e){case`MultiPolygon`:{let e=n;for(let n=0,o=e.length;n<o;n++){let o=e[n],c=n>0?e[n-1]:null,l=c?c[c.length-1]:0,u=o[o.length-1];o=l>0?o.map(e=>e-l):o,this.addCoordinates_(`Polygon`,t.slice(l,u),o,r,i,a,s)}break}case`MultiLineString`:{let e=n;for(let n=0,o=e.length;n<o;n++){let o=n>0?e[n-1]:0;this.addCoordinates_(`LineString`,t.slice(o,e[n]),null,r,i,a,s)}break}case`MultiPoint`:{let e=a??2;for(let n=0,a=t.length;n<a;n+=e)this.addCoordinates_(`Point`,t.slice(n,n+2),null,r,i,2,void 0);break}case`Polygon`:{if(!n)break;let e=n,l=a??2;if(r instanceof D){let n=o(t,e);if(n.length>1){this.addCoordinates_(`MultiPolygon`,t,n,r,i,a,s);return}}this.polygonBatch.entries[i]||(this.polygonBatch.entries[i]=this.addRefToEntry_(i,{feature:r,flatCoordss:[],verticesCount:0,ringsCount:0,ringsVerticesCounts:[]})),c=t.length/l;let u=e.length,d=e.map((e,t,n)=>t>0?(e-n[t-1])/l:e/l);this.polygonBatch.verticesCount+=c,this.polygonBatch.ringsCount+=u,this.polygonBatch.geometriesCount++;let f=this.polygonBatch.entries[i];if(!f||!f.ringsVerticesCounts)break;f.flatCoordss.push(we(t,l)),f.ringsVerticesCounts.push(d),f.verticesCount=(f.verticesCount??0)+c,f.ringsCount=(f.ringsCount??0)+u;for(let n=0,a=e.length;n<a;n++){let a=n>0?e[n-1]:0;this.addCoordinates_(`LinearRing`,t.slice(a,e[n]),null,r,i,l,s??void 0)}break}case`Point`:this.pointBatch.entries[i]||(this.pointBatch.entries[i]=this.addRefToEntry_(i,{feature:r,flatCoordss:[]})),this.pointBatch.geometriesCount++,this.pointBatch.entries[i].flatCoordss.push(t);break;case`LineString`:case`LinearRing`:{let e=a??2;this.lineStringBatch.entries[i]||(this.lineStringBatch.entries[i]=this.addRefToEntry_(i,{feature:r,flatCoordss:[],verticesCount:0})),c=t.length/e,this.lineStringBatch.verticesCount+=c,this.lineStringBatch.geometriesCount++;let n=this.lineStringBatch.entries[i];if(!n)break;n.flatCoordss.push(Te(t,e,s??``)),n.verticesCount=(n.verticesCount??0)+c;break}}}addRefToEntry_(e,t){let n=this.uidToRef_.get(e),r=n||this.freeGlobalRef_.pop()||++this.globalCounter_;return t.ref=r,n||(this.refToFeature_.set(r,t.feature),this.uidToRef_.set(e,r)),t}removeRef_(e,t){if(!e)throw Error(`This feature has no ref: `+t);this.refToFeature_.delete(e),this.uidToRef_.delete(t),this.freeGlobalRef_.push(e)}changeFeature(e,t){if(!this.uidToRef_.get(v(e)))return;this.removeFeature(e);let n=e.getGeometry();n&&(t&&(n=n.clone(),n.applyTransform(t)),this.addGeometry_(n,e))}removeFeature(e){let t=this.clearFeatureEntryInPointBatch_(e);t=this.clearFeatureEntryInPolygonBatch_(e)||t,t=this.clearFeatureEntryInLineStringBatch_(e)||t,t&&t.ref!==void 0&&this.removeRef_(t.ref,v(t.feature))}clear(){this.polygonBatch.entries={},this.polygonBatch.geometriesCount=0,this.polygonBatch.verticesCount=0,this.polygonBatch.ringsCount=0,this.lineStringBatch.entries={},this.lineStringBatch.geometriesCount=0,this.lineStringBatch.verticesCount=0,this.pointBatch.entries={},this.pointBatch.geometriesCount=0,this.globalCounter_=0,this.freeGlobalRef_=[],this.refToFeature_.clear(),this.uidToRef_.clear()}getFeatureFromRef(e){return this.refToFeature_.get(e)}isEmpty(){return this.globalCounter_===0}filter(t){let n=new e;n.globalCounter_=this.globalCounter_,n.uidToRef_=this.uidToRef_,n.refToFeature_=this.refToFeature_;let r=!0;for(let e of this.refToFeature_.values())t(e)&&(n.addFeature(e),r=!1);return r?new e:n}};function we(e,t){return t===2?e:e.filter((e,n)=>n%t<2)}function Te(e,t,n){return t===3&&n===`XYM`?e:t===4?e.filter((e,n)=>n%t!==2):t===3?e.map((e,n)=>n%t===2?0:e):Array(e.length*1.5).fill(0).map((t,n)=>n%3==2?0:e[Math.round(n/1.5)])}var Ee=new TextEncoder,P=1e5,De=class{constructor(){this.array_=new Uint8Array(P),this.actualSize_=0,this.labelPositionMap_=new Map}push(e){if(e===``)return[0,0];if(this.labelPositionMap_.has(e))return this.labelPositionMap_.get(e);let t=Ee.encode(e);if(this.actualSize_+t.length>this.array_.length){let e=new Uint8Array(this.array_.length+P);e.set(this.array_),this.array_=e}let n=this.actualSize_;this.array_.set(t,n),this.actualSize_+=t.length;let r=[n,t.length];return this.labelPositionMap_.set(e,r),r}getArray(){return this.array_}};function Oe(){let e=`const t=new Set;let e=!1;function n(e,n,i=2){const f=n&&n.length,u=f?n[0]*i:e.length;t.size&&t.clear();let s=r(e,0,u,i,!0);const v=[];if(!s||s.next===s.prev)return v;let b=0,A=0,m=0;if(f&&(s=function(e,n,x,i){const f=[];for(let o=0,x=n.length;o<x;o++){const u=r(e,n[o]*i,o<x-1?n[o+1]*i:e.length,i,!1);u===u.next&&t.add(u),f.push(B(u))}f.sort(c),function(t,e){const n=Math.ceil((t+2*e)/y)+e+2;h.length<4*n&&(h=new Float64Array(4*n));p=0}(e.length/i,n.length),M(x,x),l=!0;for(let t=0;t<f.length;t++)x=a(f[t],x);return l=!1,o(x)}(e,n,s,i)),e.length>80*i){b=e[0],A=e[1];let t=b,n=A;for(let r=i;r<u;r+=i){const o=e[r],x=e[r+1];o<b&&(b=o),x<A&&(A=x),o>t&&(t=o),x>n&&(n=x)}m=Math.max(t-b,n-A),m=0!==m?32767/m:0}return x(s,v,b,A,m),v}function r(t,e,n,r,o){let x=null;if(o===function(t,e,n,r){let o=0;for(let x=e,i=n-r;x<n;x+=r)o+=(t[i]-t[x])*(t[x+1]+t[i+1]),i=x;return o}(t,e,n,r)>0)for(let o=e;o<n;o+=r)x=G(o/r|0,t[o],t[o+1],x);else for(let o=n-r;o>=e;o-=r)x=G(o/r|0,t[o],t[o+1],x);return x&&N(x,x.next)&&(k(x),x=x.next),x}function o(n,r=n){const o=r===n;let x,i=n;do{x=!1,i===i.next||0!==t.size&&t.has(i)||!N(i,i.next)&&0!==S(i.prev,i,i.next)?(o||i!==r)&&(i=i.next,x=!o):((o||i===r)&&(r=i.prev),e=!0,k(i),i=i.prev,x=!0)}while(x||i!==r);return r}function x(t,n,r,x,l){l&&function(t,e,n,r){let o=t,x=0;do{o.z=I(o.x,o.y,e,n,r),w[x++]=o,o=o.next}while(o!==t);!function(t){if(t<=32){for(let e=1;e<t;e++){const t=w[e],n=t.z;let r=e-1;for(;r>=0&&w[r].z>n;)w[r+1]=w[r],r--;w[r+1]=t}return}F.length<t&&(F=new Uint32Array(t),Z=new Uint32Array(t),d=new Array(t));for(let e=0;e<t;e++)F[e]=w[e].z;E(t,w,F,d,Z,0),E(t,d,Z,w,F,8),E(t,w,F,d,Z,16),E(t,d,Z,w,F,24)}(x);let i=null;for(let t=0;t<x;t++){const e=w[t];e.prevZ=i,i&&(i.nextZ=e),i=e}i.nextZ=null,w.fill(null,0,x),d.fill(null,0,x)}(t,r,x,l);let c=t,a=!1;for(;t.prev!==t.next;){const y=t.prev,h=t.next;if(S(y,t,h)<0&&(l?f(t,r,x,l):i(t)))n.push(y.i,t.i,h.i),k(t),t=h,c=h;else if((t=h)===c){if(e=!1,t=o(t),e){c=t;continue}if(!a){c=t=u(t,n),a=!0;continue}s(t,n,r,x,l);break}}}function i(t){const e=t.prev,n=t,r=t.next,o=e.x,x=n.x,i=r.x,f=e.y,u=n.y,s=r.y,l=Math.min(o,x,i),c=Math.min(f,u,s),a=Math.max(o,x,i),y=Math.max(f,u,s);let h=r.next;for(;h!==e;){if(h.x>=l&&h.x<=a&&h.y>=c&&h.y<=y&&(o!==h.x||f!==h.y)&&U(o,f,x,u,i,s,h.x,h.y)&&S(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function f(t,e,n,r){const o=t.prev,x=t,i=t.next,f=o.x,u=x.x,s=i.x,l=o.y,c=x.y,a=i.y,y=Math.min(f,u,s),h=Math.min(l,c,a),p=Math.max(f,u,s),v=Math.max(l,c,a),b=I(y,h,e,n,r),M=I(p,v,e,n,r);let A=t.prevZ;for(;A&&A.z>=b;){if(A.x>=y&&A.x<=p&&A.y>=h&&A.y<=v&&A!==i&&(f!==A.x||l!==A.y)&&U(f,l,u,c,s,a,A.x,A.y)&&S(A.prev,A,A.next)>=0)return!1;A=A.prevZ}let m=t.nextZ;for(;m&&m.z<=M;){if(m.x>=y&&m.x<=p&&m.y>=h&&m.y<=v&&m!==i&&(f!==m.x||l!==m.y)&&U(f,l,u,c,s,a,m.x,m.y)&&S(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function u(t,e){let n=t,r=!1;do{const o=n.prev,x=n.next.next;R(o,n,n.next,x,!1)&&_(o,x)&&_(x,o)&&(e.push(o.i,n.i,x.i),k(n),k(n.next),n=t=x,r=!0),n=n.next}while(n!==t);return r?o(n):n}function s(t,e,n,r,i){let f=t;do{let t=f.next.next;for(;t!==f.prev;){if(f.i!==t.i&&P(f,t)){let u=O(f,t);return f=o(f,f.next),u=o(u,u.next),x(f,e,n,r,i),void x(u,e,n,r,i)}t=t.next}f=f.next}while(f!==t)}let l=!1;function c(t,e){return t.x-e.x||t.y-e.y||(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x)}function a(t,e){const n=function(t,e){let n=e;const r=t.x,o=t.y;let x,i=-1/0;if(N(t,n))return n;for(let e=0,f=0;e<p;e++,f+=4){if(o<h[f+1]||o>h[f+3]||h[f]>r||h[f+2]<=i)continue;const u=A(e);n=m(e);do{if(n.prev.next===n){if(N(t,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const t=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i&&(i=t,x=n.x<n.next.x?n:n.next,t===r))return x}}n=n.next}while(n!==u)}if(!x)return null;const f=x.x,u=x.y,s=Math.min(o,u),l=Math.max(o,u);let c=1/0;for(let e=0,a=0;e<p;e++,a+=4){if(h[a+2]<f||h[a]>r||h[a+3]<s||h[a+1]>l)continue;const y=A(e);n=m(e);do{if(n.prev.next===n&&r>=n.x&&n.x>=f&&r!==n.x&&U(o<u?r:i,o,f,u,o<u?i:r,o,n.x,n.y)){const e=Math.abs(o-n.y)/(r-n.x);(_(n,t)||n.y===o&&n.next.y===o&&n.next.x>r)&&(e<c||e===c&&(n.x>x.x||n.x===x.x&&g(x,n)))&&(x=n,c=e)}n=n.next}while(n!==y)}return x}(t,e);if(!n)return e;const r=O(n,t);return M(n,r.next.next),o(r,r.next),o(n,n.next)}const y=16;let h=new Float64Array(0),p=0;const v=[],b=[];function M(t,e){let n=t;do{const t=p++;v[t]=n;let r=n.x,o=n.y,x=n.x,i=n.y,f=0;do{const e=n.next;n.z=t,e.x<r&&(r=e.x),e.x>x&&(x=e.x),e.y<o&&(o=e.y),e.y>i&&(i=e.y),n=e}while(++f<y&&n!==e);b[t]=n;const u=4*t;h[u]=r,h[u+1]=o,h[u+2]=x,h[u+3]=i}while(n!==e)}function A(t){let e=b[t];for(;e.prev.next!==e;)e=e.next;return b[t]=e,e}function m(t){let e=v[t];for(;e.prev.next!==e;)e=e.next;return v[t]=e,e}function g(t,e){return S(t.prev,t,e.prev)<0&&S(e.next,t,t.next)<0}const w=[];let d=[],F=new Uint32Array(0),Z=new Uint32Array(0);const z=new Uint32Array(256);function E(t,e,n,r,o,x){z.fill(0);for(let e=0;e<t;e++)z[n[e]>>>x&255]++;let i=0;for(let t=0;t<256;t++){const e=z[t];z[t]=i,i+=e}for(let i=0;i<t;i++){const t=n[i],f=z[t>>>x&255]++;r[f]=e[i],o[f]=t}}function I(t,e,n,r,o){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function B(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function U(t,e,n,r,o,x,i,f){return(o-i)*(e-f)>=(t-i)*(x-f)&&(t-i)*(r-f)>=(n-i)*(e-f)&&(n-i)*(x-f)>=(o-i)*(r-f)}function P(t,e){const n=N(t,e)&&S(t.prev,t,t.next)>0&&S(e.prev,e,e.next)>0;return t.next.i!==e.i&&(n||_(t,e)&&_(e,t)&&(0!==S(t.prev,t,e.prev)||0!==S(t,e.prev,e)))&&!function(t,e){const n=Math.min(t.x,e.x),r=Math.max(t.x,e.x),o=Math.min(t.y,e.y),x=Math.max(t.y,e.y);let i=t;do{const f=i.next;if(i.x>r&&f.x>r||i.x<n&&f.x<n||i.y>x&&f.y>x||i.y<o&&f.y<o)i=f;else{if(i.i!==t.i&&f.i!==t.i&&i.i!==e.i&&f.i!==e.i&&R(i,f,t,e))return!0;i=f}}while(i!==t);return!1}(t,e)&&(n||function(t,e){let n=t,r=!1;const o=(t.x+e.x)/2,x=(t.y+e.y)/2;do{const t=n.next;n.y>x!=t.y>x&&o<(t.x-n.x)*(x-n.y)/(t.y-n.y)+n.x&&(r=!r),n=t}while(n!==t);return r}(t,e))}function S(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function N(t,e){return t.x===e.x&&t.y===e.y}function R(t,e,n,r,o=!0){const x=S(t,e,n),i=S(t,e,r),f=S(n,r,t),u=S(n,r,e);return(x>0&&i<0||x<0&&i>0)&&(f>0&&u<0||f<0&&u>0)||!!o&&(!(0!==x||!T(t,n,e))||(!(0!==i||!T(t,r,e))||(!(0!==f||!T(n,t,r))||!(0!==u||!T(n,e,r)))))}function T(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function _(t,e){return S(t.prev,t,t.next)<0?S(t,e,t.next)>=0&&S(t,t.prev,e)>=0:S(t,e,t.prev)<0||S(t,t.next,e)<0}function O(t,e){const n=j(t.i,t.x,t.y),r=j(e.i,e.x,e.y),o=t.next,x=e.prev;return t.next=e,e.prev=t,n.next=o,o.prev=n,r.next=n,n.prev=r,x.next=r,r.prev=x,r}function G(t,e,n,r){const o=j(t,e,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function k(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ),l&&function(t,e){const n=4*t.z;e.x<h[n]&&(h[n]=e.x),e.y<h[n+1]&&(h[n+1]=e.y),e.x>h[n+2]&&(h[n+2]=e.x),e.y>h[n+3]&&(h[n+3]=e.y)}(t.prev,t.next)}function j(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function q(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),o=[(e[0]-t[0])/r,(e[1]-t[1])/r],x=[-o[1],o[0]],i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),f=[(n[0]-t[0])/i,(n[1]-t[1])/i];let u=0===r||0===i?0:Math.acos((s=f[0]*o[0]+f[1]*o[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;u=Math.max(u,1e-5);return f[0]*x[0]+f[1]*x[1]>0?u:2*Math.PI-u}const L=[1,0,0,1,0,0];function Y(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function C(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const o=e[0],x=e[1],i=e[2],f=e[3],u=e[4],s=e[5];return t[0]=f/n,t[1]=-x/n,t[2]=-i/n,t[3]=o/n,t[4]=(i*s-f*u)/n,t[5]=-(o*s-x*u)/n,t}new Array(6);const D=[],H={vertexAttributesPosition:0,instanceAttributesPosition:0,indicesPosition:0};function J(t,e,n,r,o){const x=t[e++],i=t[e++],f=D;f.length=r;for(let n=0;n<f.length;n++)f[n]=t[e+n];let u=o?o.instanceAttributesPosition:0;return n[u++]=x,n[u++]=i,f.length&&(n.set(f,u),u+=f.length),H.instanceAttributesPosition=u,H}function K(t,e,n,r,o,x,i,f,u,s){const l=[t[e],t[e+1]],c=[t[n],t[n+1]],a=t[e+2],y=t[n+2],h=Y(f,[...l]),p=Y(f,[...c]);let v=-1,b=-1,M=s;const A=null!==o;if(null!==r){v=q(h,p,Y(f,[...[t[r],t[r+1]]])),Math.cos(v)<=.985&&(M+=Math.tan((v-Math.PI)/2))}if(A){b=q(p,h,Y(f,[...[t[o],t[o+1]]])),Math.cos(b)<=.985&&(M+=Math.tan((Math.PI-b)/2))}const m=Math.pow(2,24),g=u%m,w=Math.floor(u/m)*m;return x.push(l[0],l[1],a,c[0],c[1],y,v,b,g,w,s),x.push(...i),{length:u+Math.sqrt((p[0]-h[0])*(p[0]-h[0])+(p[1]-h[1])*(p[1]-h[1])),angle:M}}function Q(t,e,r,o,x){const i=2+x;let f=e;const u=t.slice(f,f+x);f+=x;const s=t[f++];let l=0;const c=new Array(s-1);for(let e=0;e<s;e++)l+=t[f++],e<s-1&&(c[e]=l);const a=t.slice(f,f+2*l),y=n(a,c,2);for(let t=0;t<y.length;t++)o.push(y[t]+r.length/i);for(let t=0;t<a.length;t+=2)r.push(a[t],a[t+1],...u);return f+2*l}const V="GENERATE_POLYGON_BUFFERS",W="GENERATE_POINT_BUFFERS",X="GENERATE_LINE_STRING_BUFFERS",$=self;$.onmessage=t=>{const e=t.data;switch(e.type){case W:{const t=2,n=2,r=e.customAttributesSize,o=n+r,x=new Float32Array(e.renderInstructions),i=x.length/o*(t+r),f=Uint32Array.from([0,1,3,1,2,3]),u=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),s=new Float32Array(i);let l;for(let t=0;t<x.length;t+=o)l=J(x,t,s,r,l);const c=Object.assign({indicesBuffer:f.buffer,vertexAttributesBuffer:u.buffer,instanceAttributesBuffer:s.buffer,renderInstructions:x.buffer},e);$.postMessage(c,[u.buffer,s.buffer,f.buffer,x.buffer]);break}case X:{const t=[],n=e.customAttributesSize,r=3,o=new Float32Array(e.renderInstructions);let x=0;const i=e.renderInstructionsTransform,f=L.slice(0);let u,s;for(C(f,i);x<o.length;){s=Array.from(o.slice(x,x+n)),x+=n,u=o[x++];const e=x,i=x+(u-1)*r,l=o[e]===o[i]&&o[e+1]===o[i+1];let c=0,a=0;for(let n=0;n<u-1;n++){let y=null;n>0?y=x+(n-1)*r:l&&(y=i-r);let h=null;n<u-2?h=x+(n+2)*r:l&&(h=e+r);const p=K(o,x+n*r,x+(n+1)*r,y,h,t,s,f,c,a);c=p.length,a=p.angle}x+=u*r}const l=Uint32Array.from([0,1,3,1,2,3]),c=Float32Array.from([-1,-1,1,-1,1,1,-1,1]),a=Float32Array.from(t),y=Object.assign({indicesBuffer:l.buffer,vertexAttributesBuffer:c.buffer,instanceAttributesBuffer:a.buffer,renderInstructions:o.buffer},e);$.postMessage(y,[c.buffer,a.buffer,l.buffer,o.buffer]);break}case V:{const t=[],n=[],r=e.customAttributesSize,o=new Float32Array(e.renderInstructions);let x=0;for(;x<o.length;)x=Q(o,x,t,n,r);const i=Uint32Array.from(n),f=Float32Array.from(t),u=Float32Array.from([]),s=Object.assign({indicesBuffer:i.buffer,vertexAttributesBuffer:f.buffer,instanceAttributesBuffer:u.buffer,renderInstructions:o.buffer},e);$.postMessage(s,[f.buffer,u.buffer,i.buffer,o.buffer]);break}}};`;return new Worker(typeof Blob>`u`?`data:application/javascript;base64,`+Buffer.from(e,`binary`).toString(`base64`):URL.createObjectURL(new Blob([e],{type:`application/javascript`})))}var F={GENERATE_POLYGON_BUFFERS:`GENERATE_POLYGON_BUFFERS`,GENERATE_POINT_BUFFERS:`GENERATE_POINT_BUFFERS`,GENERATE_LINE_STRING_BUFFERS:`GENERATE_LINE_STRING_BUFFERS`},I={BUILD_INSTRUCTIONS:`BUILD_INSTRUCTIONS`,DISPOSE_INSTRUCTIONS:`DISPOSE_INSTRUCTIONS`,RENDER:`RENDER`};function ke(e,t){t||=[];let n=Math.floor(e/256/256/256)/255,r=Math.floor(e/256/256)%256/255,i=Math.floor(e/256)%256/255,a=e%256/255;return t[0]=n*256*255+r*255,t[1]=i*256*255+a*255,t}function Ae(e){let t=0;return t+=Math.round(e[0]*256*256*256*255),t+=Math.round(e[1]*256*256*255),t+=Math.round(e[2]*256*255),t+=Math.round(e[3]*255),t}function L(e,t,n,r,i){let a=0;for(let o in n){let s=n[o],c=s.callback.call(r,r.feature);if(typeof c==`string`){let[n,r]=t.push(c);e[i+a++]=E(c),e[i+a++]=n,e[i+a++]=r;continue}let l=Array.isArray(c)?c:void 0,u=l?l[0]:c;u===-9999999&&console.warn(`The "has" operator might return false positives.`),u===void 0?u=pe:u===null&&(u=0),e[i+a++]=u,s.size&&s.size!==1&&(e[i+a++]=l?.[1]??-9999999,!(s.size<3)&&(e[i+a++]=l?.[2]??-9999999,!(s.size<4)&&(e[i+a++]=l?.[3]??-9999999)))}return a}function R(e){return Object.keys(e).reduce((t,n)=>t+(e[n].size||1),0)}function je(e,t,n,r,i){let a=(2+R(r))*e.geometriesCount;(!t||t.length!==a)&&(t=new Float32Array(a));let o=[],s=0;for(let a in e.entries){let c=e.entries[a];for(let e=0,a=c.flatCoordss.length;e<a;e++)o[0]=c.flatCoordss[e][0],o[1]=c.flatCoordss[e][1],ae(i,o),t[s++]=o[0],t[s++]=o[1],s+=L(t,n,r,c,s)}return t}function Me(e,t,n,r,i){let a=3*e.verticesCount+(1+R(r))*e.geometriesCount;(!t||t.length!==a)&&(t=new Float32Array(a));let o=[],c=0;for(let a in e.entries){let l=e.entries[a];for(let e=0,a=l.flatCoordss.length;e<a;e++){o.length=l.flatCoordss[e].length,s(l.flatCoordss[e],0,o.length,3,i,o,3),c+=L(t,n,r,l,c),t[c++]=o.length/3;for(let e=0,n=o.length;e<n;e+=3)t[c++]=o[e],t[c++]=o[e+1],t[c++]=o[e+2]}}return t}function Ne(e,t,n,r,i){let a=2*e.verticesCount+(1+R(r))*e.geometriesCount+e.ringsCount;(!t||t.length!==a)&&(t=new Float32Array(a));let o=[],c=0;for(let a in e.entries){let l=e.entries[a];for(let e=0,a=l.flatCoordss.length;e<a;e++){let a=l.ringsVerticesCounts?.[e];if(a){o.length=l.flatCoordss[e].length,s(l.flatCoordss[e],0,o.length,2,i,o),c+=L(t,n,r,l,c),t[c++]=a.length;for(let e=0,n=a.length;e<n;e++)t[c++]=a[e];for(let e=0,n=o.length;e<n;e+=2)t[c++]=o[e],t[c++]=o[e+1]}}}return t}function Pe(e){let t=e.viewState;return{viewState:{...t,projection:t.projection.getCode()},viewHints:e.viewHints,pixelRatio:e.pixelRatio,size:e.size,extent:e.extent,coordinateToPixelTransform:e.coordinateToPixelTransform,pixelToCoordinateTransform:e.pixelToCoordinateTransform,layerStatesArray:e.layerStatesArray.map(e=>({zIndex:e.zIndex,visible:e.visible,extent:e.extent,maxResolution:e.maxResolution,minResolution:e.minResolution,managed:e.managed,opacity:e.opacity})),time:e.time,layerIndex:e.layerIndex}}function z(e,t){return e[t]}function B(e,t,n,r){return ye(e,t,n,r)}function V(e){return(JSON.stringify(e).split(``).reduce((e,t)=>(e<<5)-e+t.charCodeAt(0),0)>>>0).toString()}function H(e,t,n,i){if(`${i}radius`in e&&i!==`icon-`){let a=B(n,e[`${i}radius`],r);if(`${i}radius2`in e){let t=B(n,z(e,`${i}radius2`),r);a=`max(${a}, ${t})`}`${i}stroke-width`in e&&(a=`(${a} + ${B(n,e[`${i}stroke-width`],r)} * 0.5)`),t.setSymbolSizeExpression(`vec2(${a} * 2. + 0.5)`)}if(`${i}scale`in e){let r=B(n,e[`${i}scale`],f);t.setSymbolSizeExpression(`${t.getSymbolSizeExpression()} * ${r}`)}`${i}displacement`in e&&t.setSymbolOffsetExpression(B(n,e[`${i}displacement`],d)),`${i}rotation`in e&&t.setSymbolRotationExpression(B(n,e[`${i}rotation`],r)),`${i}rotate-with-view`in e&&t.setSymbolRotateWithView(!!e[`${i}rotate-with-view`])}function Fe(e,t,n,r,i){let a=`vec4(0.)`;if(t!==null&&(a=t),n!==null&&r!==null){let t=`smoothstep(-${r} + 0.63, -${r} - 0.58, ${e})`;a=`mix(${n}, ${a}, ${t})`}let o=`(1.0 - smoothstep(-0.63, 0.58, ${e}))`,s=`${a} * vec4(1.0, 1.0, 1.0, ${o})`;return i!==null&&(s=`${s} * vec4(1.0, 1.0, 1.0, ${i})`),s}function U(e,t,n,r,i){let a=new Image;a.crossOrigin=z(e,`${r}cross-origin`)===void 0?`anonymous`:z(e,`${r}cross-origin`),re(typeof z(e,`${r}src`)==`string`,`WebGL layers do not support expressions for the ${r}src style property`),a.src=z(e,`${r}src`),n[`u_texture${i}_size`]=()=>a.complete?[a.width,a.height]:[0,0],t.addUniform(`u_texture${i}_size`,`vec2`);let o=`u_texture${i}_size`;return n[`u_texture${i}`]=a,t.addUniform(`u_texture${i}`,`sampler2D`),o}function W(e,t,n,r,i){let a=B(n,e[`${t}offset`],f);if(`${t}offset-origin`in e)switch(e[`${t}offset-origin`]){case`top-right`:a=`vec2(${r}.x, 0.) + ${i} * vec2(-1., 0.) + ${a} * vec2(-1., 1.)`;break;case`bottom-left`:a=`vec2(0., ${r}.y) + ${i} * vec2(0., -1.) + ${a} * vec2(1., -1.)`;break;case`bottom-right`:a=`${r} - ${i} - ${a}`}return a}function Ie(e,n,i,a){a.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,H(e,n,a,`circle-`);let o=null;`circle-opacity`in e&&(o=B(a,e[`circle-opacity`],r));let s=`coordsPx`;`circle-scale`in e&&(s=`coordsPx / ${B(a,e[`circle-scale`],f)}`);let c=null;`circle-fill-color`in e&&(c=B(a,e[`circle-fill-color`],t));let l=null;`circle-stroke-color`in e&&(l=B(a,e[`circle-stroke-color`],t));let u=B(a,e[`circle-radius`],r),d=null;`circle-stroke-width`in e&&(d=B(a,e[`circle-stroke-width`],r),u=`(${u} + ${d} * 0.5)`);let p=Fe(`circleDistanceField(${s}, ${u})`,c,l,d,o);n.setSymbolColorExpression(p)}function Le(e,n,i,a){a.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,a.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
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
}`,a.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
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
}`,H(e,n,a,`shape-`);let o=null;`shape-opacity`in e&&(o=B(a,e[`shape-opacity`],r));let s=`coordsPx`;`shape-scale`in e&&(s=`coordsPx / ${B(a,e[`shape-scale`],f)}`);let c=null;`shape-fill-color`in e&&(c=B(a,e[`shape-fill-color`],t));let l=null;`shape-stroke-color`in e&&(l=B(a,e[`shape-stroke-color`],t));let u=null;`shape-stroke-width`in e&&(u=B(a,e[`shape-stroke-width`],r));let d=B(a,e[`shape-points`],r),p=`0.`;`shape-angle`in e&&(p=B(a,e[`shape-angle`],r));let m,h=B(a,e[`shape-radius`],r);if(u!==null&&(h=`${h} + ${u} * 0.5`),`shape-radius2`in e){let t=B(a,e[`shape-radius2`],r);u!==null&&(t=`${t} + ${u} * 0.5`),m=`starDistanceField(${s}, ${d}, ${h}, ${t}, ${p})`}else m=`regularDistanceField(${s}, ${d}, ${h}, ${p})`;let g=Fe(m,c,l,u,o);n.setSymbolColorExpression(g)}function Re(e,n,i,a){let o=`vec4(1.0)`;`icon-color`in e&&(o=B(a,e[`icon-color`],t)),`icon-opacity`in e&&(o=`${o} * vec4(1.0, 1.0, 1.0, ${B(a,e[`icon-opacity`],r)})`);let s=V(e[`icon-src`]),c=U(e,n,i,`icon-`,s);if(n.setSymbolColorExpression(`${o} * texture2D(u_texture${s}, v_texCoord)`).setSymbolSizeExpression(c),`icon-width`in e&&`icon-height`in e&&n.setSymbolSizeExpression(`vec2(${B(a,e[`icon-width`],r)}, ${B(a,e[`icon-height`],r)})`),`icon-offset`in e&&`icon-size`in e){let t=B(a,e[`icon-size`],d),r=n.getSymbolSizeExpression();n.setSymbolSizeExpression(t);let i=W(e,`icon-`,a,`v_quadSizePx`,t);n.setTextureCoordinateExpression(`(vec4((${i}).xyxy) + vec4(0., 0., ${t})) / (${r}).xyxy`)}if(H(e,n,a,`icon-`),`icon-anchor`in e){let t=B(a,e[`icon-anchor`],d),r=`1.0`;`icon-scale`in e&&(r=B(a,e[`icon-scale`],f));let i;i=e[`icon-anchor-x-units`]===`pixels`&&e[`icon-anchor-y-units`]===`pixels`?`${t} * ${r}`:e[`icon-anchor-x-units`]===`pixels`?`${t} * vec2(vec2(${r}).x, v_quadSizePx.y)`:e[`icon-anchor-y-units`]===`pixels`?`${t} * vec2(v_quadSizePx.x, vec2(${r}).x)`:`${t} * v_quadSizePx`;let o=`v_quadSizePx * vec2(0.5, -0.5) + ${i} * vec2(-1., 1.)`;if(`icon-anchor-origin`in e)switch(e[`icon-anchor-origin`]){case`top-right`:o=`v_quadSizePx * -0.5 + ${i}`;break;case`bottom-left`:o=`v_quadSizePx * 0.5 - ${i}`;break;case`bottom-right`:o=`v_quadSizePx * vec2(-0.5, 0.5) + ${i} * vec2(1., -1.)`}n.setSymbolOffsetExpression(`${n.getSymbolOffsetExpression()} + ${o}`)}}function ze(e,i,a,o){if(`stroke-color`in e&&i.setStrokeColorExpression(B(o,e[`stroke-color`],t)),`stroke-pattern-src`in e){let t=V(e[`stroke-pattern-src`]),n=U(e,i,a,`stroke-pattern-`,t),s=n,c=`vec2(0.)`;`stroke-pattern-offset`in e&&`stroke-pattern-size`in e&&(s=B(o,e[`stroke-pattern-size`],d),c=W(e,`stroke-pattern-`,o,n,s));let l=`0.`;`stroke-pattern-spacing`in e&&(l=B(o,e[`stroke-pattern-spacing`],r));let u=`0.`;`stroke-pattern-start-offset`in e&&(u=B(o,e[`stroke-pattern-start-offset`],r)),o.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float startOffsetPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
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
}`;let f=`u_texture${t}`,p=`1.`;`stroke-color`in e&&(p=i.getStrokeColorExpression()),i.setStrokeColorExpression(`${p} * sampleStrokePattern(${f}, ${n}, ${c}, ${s}, ${l}, ${u}, currentLengthPx, currentRadiusRatio, v_width)`),o.functions.computeStrokePatternLength=`float computeStrokePatternLength(vec2 sampleSize, float spacingPx, float lineWidth) {
  float patternLengthPx = sampleSize.x / sampleSize.y * lineWidth;
  return patternLengthPx + spacingPx;
}`,i.setStrokePatternLengthExpression(`computeStrokePatternLength(${s}, ${l}, v_width)`)}if(`stroke-width`in e&&i.setStrokeWidthExpression(B(o,e[`stroke-width`],r)),`stroke-offset`in e&&i.setStrokeOffsetExpression(B(o,e[`stroke-offset`],r)),`stroke-line-cap`in e&&i.setStrokeCapExpression(B(o,e[`stroke-line-cap`],n)),`stroke-line-join`in e&&i.setStrokeJoinExpression(B(o,e[`stroke-line-join`],n)),`stroke-miter-limit`in e&&i.setStrokeMiterLimitExpression(B(o,e[`stroke-miter-limit`],r)),`stroke-line-dash`in e){o.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType, float lineWidth) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${C(`square`)}) {
    distanceSegment -= lineWidth * 0.5;
  } else if (capType == ${C(`round`)}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - lineWidth * 0.5);
  }
  return distanceSegment;
}`;let t=e[`stroke-line-dash`].map(e=>B(o,e,r));t.length%2==1&&(t=[...t,...t]);let n=`0.`;`stroke-line-dash-offset`in e&&(n=B(o,e[`stroke-line-dash-offset`],r));let a=`dashDistanceField_${V(e[`stroke-line-dash`])}`,s=t.map((e,t)=>`float dashLength${t}`).join(`, `),c=t.map((e,t)=>`dashLength${t}`).join(` + `),l=`0.`,u=`getSingleDashDistance(distance, radius, ${l}, dashLength0, totalDashLength, capType, lineWidth)`;for(let e=2;e<t.length;e+=2)l=`${l} + dashLength${e-2} + dashLength${e-1}`,u=`min(${u}, getSingleDashDistance(distance, radius, ${l}, dashLength${e}, totalDashLength, capType, lineWidth))`;o.functions[a]=`float ${a}(float distance, float radius, float capType, float lineWidth, ${s}) {
  float totalDashLength = ${c};
  return ${u};
}`;let d=t.map((e,t)=>`${e}`).join(`, `);i.setStrokeDistanceFieldExpression(`${a}(currentLengthPx + ${n}, currentRadiusPx, capType, v_width, ${d})`);let f=t.join(` + `);i.getStrokePatternLengthExpression()&&(o.functions.combinePatternLengths=`float combinePatternLengths(float patternLength1, float patternLength2) {
  return patternLength1 * patternLength2;
}`,f=`combinePatternLengths(${i.getStrokePatternLengthExpression()}, ${f})`),i.setStrokePatternLengthExpression(f)}}function Be(e,n,r,i){if(`fill-color`in e&&n.setFillColorExpression(B(i,e[`fill-color`],t)),`fill-pattern-src`in e){let t=V(e[`fill-pattern-src`]),a=U(e,n,r,`fill-pattern-`,t);n.setFillPatternSizeExpression(a);let o=`vec2(0.)`;if(`fill-pattern-offset`in e&&`fill-pattern-size`in e){let t=B(i,e[`fill-pattern-size`],d);n.setFillPatternSizeExpression(t),o=W(e,`fill-pattern-`,i,a,`v_patternSizePx`)}i.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 patternOriginPx, vec2 pxPosition, float sampleScaleRatio) {
  vec2 pxRelativePos = pxPosition - patternOriginPx;

  // rotate the relative position from origin by the current view rotation
  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));
  // sample position is computed according to the sample offset & size
  vec2 samplePos = mod(pxRelativePos / sampleScaleRatio, sampleSize);
  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));
  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright
  return texture2D(texture, (samplePos + textureOffset) / textureSize);
}`;let s=`u_texture${t}`,c=`1.`;`fill-color`in e&&(c=n.getFillColorExpression()),n.setFillColorExpression(`${c} * sampleFillPattern(${s}, ${a}, ${o}, v_patternSizePx, v_patternOriginPx, pxPos, df_float(u_df_patternScaleRatio))`)}}function Ve(e,i,a,o){function s(e,t,n){try{B(e,t,n)}catch{}}`text-value`in e&&s(o,e[`text-value`],n),`text-font`in e&&s(o,e[`text-font`],n),`text-max-angle`in e&&s(o,e[`text-max-angle`],r),`text-offset-x`in e&&s(o,e[`text-offset-x`],r),`text-offset-y`in e&&s(o,e[`text-offset-y`],r),`text-overflow`in e&&s(o,e[`text-overflow`],u),`text-placement`in e&&s(o,e[`text-placement`],n),`text-repeat`in e&&s(o,e[`text-repeat`],r),`text-scale`in e&&s(o,e[`text-scale`],f),`text-rotate-with-view`in e&&s(o,e[`text-rotate-with-view`],u),`text-rotation`in e&&s(o,e[`text-rotation`],r),`text-align`in e&&s(o,e[`text-align`],n),`text-justify`in e&&s(o,e[`text-justify`],n),`text-baseline`in e&&s(o,e[`text-baseline`],n),`text-padding`in e&&s(o,e[`text-padding`],d),`text-fill-color`in e&&s(o,e[`text-fill-color`],t),`text-stroke-color`in e&&s(o,e[`text-stroke-color`],t),`text-stroke-line-cap`in e&&s(o,e[`text-stroke-line-cap`],n),`text-stroke-line-join`in e&&s(o,e[`text-stroke-line-join`],n),`text-stroke-line-dash`in e&&s(o,e[`text-stroke-line-dash`],d),`text-stroke-line-dash-offset`in e&&s(o,e[`text-stroke-line-dash-offset`],r),`text-stroke-miter-limit`in e&&s(o,e[`text-stroke-miter-limit`],r),`text-stroke-width`in e&&s(o,e[`text-stroke-width`],r),`text-background-fill-color`in e&&s(o,e[`text-background-fill-color`],t),`text-background-stroke-color`in e&&s(o,e[`text-background-stroke-color`],t),`text-background-stroke-line-cap`in e&&s(o,e[`text-background-stroke-line-cap`],n),`text-background-stroke-line-join`in e&&s(o,e[`text-background-stroke-line-join`],n),`text-background-stroke-line-dash`in e&&s(o,e[`text-background-stroke-line-dash`],d),`text-background-stroke-line-dash-offset`in e&&s(o,e[`text-background-stroke-line-dash-offset`],r),`text-background-stroke-miter-limit`in e&&s(o,e[`text-background-stroke-miter-limit`],r),`text-background-stroke-width`in e&&s(o,e[`text-background-stroke-width`],r),`z-index`in e&&s(o,e[`z-index`],r)}function He(e,t,o){let s=ge(t),c=new N,l={};if(`icon-src`in e?Re(e,c,l,s):`shape-points`in e?Le(e,c,l,s):`circle-radius`in e&&Ie(e,c,l,s),ze(e,c,l,s),Be(e,c,l,s),Ve(e,c,l,s),o){let e=i(t),n=B(s,o,u,e);e.mCoordinate?c.setFragmentDiscardExpression(`!${n}`):c.setShapeDiscardExpression(`!${n}`)}let d={};function f(e,t,n,r){if(!s[e])return;let i=be(n),a=ve(n);c.addAttribute(`a_${t}`,i),d[t]={size:a,callback:r}}return f(`geometryType`,he,n,e=>{let t=e.getGeometry();return t?E(a(t)):0}),f(`featureId`,fe,n|r,e=>{let t=e.getId()??null;return typeof t==`string`?E(t):t}),_e(c,s),{builder:c,attributes:{...d,...me(s)},uniforms:{...l,...de(s,t)}}}var G={TEXT_OVERLAY_TEXTURE:`u_textOverlay`,TEXT_OVERLAY_MATRIX:`u_textOverlayMatrix`};function Ue(e){let t=!1;function n(e){for(let n in e)if(n===`text-value`){t=!0;return}}if(Array.isArray(e)){for(let r=0,i=e.length;r<i;r++){let i=e[r];if(`style`in i&&Array.isArray(i.style))for(let e=0,t=i.style.length;e<t;e++)n(i.style[e]);else`style`in i?n(i.style):n(i);if(t)return t}return t}return n(e),t}function We(e,t){let n=y();return{fragmentShader:`
      precision mediump float;
    
      uniform sampler2D u_image;
      uniform sampler2D ${G.TEXT_OVERLAY_TEXTURE};
      uniform mat4 ${G.TEXT_OVERLAY_MATRIX};
      
      varying vec2 v_texCoord;
    
      void main() {
        vec4 color = texture2D(u_image, v_texCoord);
    
        vec2 coords = v_texCoord * 2. - vec2(1.);
        coords = (${G.TEXT_OVERLAY_MATRIX} * vec4(coords.xy, 0., 1.)).xy;
        coords = coords * 0.5 + vec2(0.5);
        float outOfBounds = clamp(step(1., coords.x) + step(1., coords.y) + step(0., -coords.x) + step(0., -coords.y), 0., 1.);
    
        vec4 textColor = texture2D(${G.TEXT_OVERLAY_TEXTURE}, vec2(coords.x, 1. - coords.y));
        textColor.a *= 1. - outOfBounds; // if we're sampling out of the text overlay, make alpha 0 to avoid drawing anything

        gl_FragColor = textColor.a * textColor + (1. - textColor.a) * color;
      }`,uniforms:{[G.TEXT_OVERLAY_TEXTURE]:e,[G.TEXT_OVERLAY_MATRIX]:r=>{let i=e(),a=t();if(!i||!a)return n;let o=a.viewState,s=r.viewState,c=s.center,l=s.resolution,u=s.rotation,d=r.size,f=o.center,m=o.resolution,h=o.rotation,ee=i.width,_=i.height;return g(n),te(n,1/m/(ee/2),1/m/(_/2),1,n),p(n,h,n),oe(n,c[0]-f[0],c[1]-f[1],0,n),p(n,-u,n),te(n,l*d[0]/2,l*d[1]/2,1,n),n}}}}new D(`Point`,[0,0],[],2,{},`dummy`),new TextDecoder;var Ge=[],Ke;function qe(){return Ke||=Oe(),Ke}var Je=0;function K(e,t,n){let r=Je++;return n?e.postMessage({...t,id:r},n):e.postMessage({...t,id:r}),new Promise(t=>{let n=i=>{let a=i.data;a.id===r&&(e.removeEventListener(`message`,n),t(a))};e.addEventListener(`message`,n)})}var q={POSITION:`a_position`,LOCAL_POSITION:`a_localPosition`,SEGMENT_START:`a_segmentStart`,SEGMENT_END:`a_segmentEnd`,MEASURE_START:`a_measureStart`,MEASURE_END:`a_measureEnd`,ANGLE_TANGENT_SUM:`a_angleTangentSum`,JOIN_ANGLES:`a_joinAngles`,DISTANCE_LOW:`a_distanceLow`,DISTANCE_HIGH:`a_distanceHigh`},Ye=class extends ie{constructor(t,n,r,i){super(),this.helper_,this.hitDetectionEnabled_=!!i,this.flatStyle=J(t),this.styleShaders=Xe(t,n),this.customAttributes_={},this.uniforms_={},this.hitDetectionEnabled_&&(this.customAttributes_.hitColor={callback(){return ke(this.ref??0,Ge)},size:2});for(let e of this.styleShaders){for(let t in e.attributes)t in this.customAttributes_||(this.customAttributes_[t]=e.attributes[t]);for(let t in e.uniforms)t in this.uniforms_||(this.uniforms_[t]=e.uniforms[t])}this.renderPasses_=this.styleShaders.map(e=>{let t={},n=Object.entries(this.customAttributes_).map(([t,n])=>({name:t in e.attributes||t===`hitColor`?`a_${t}`:null,size:n.size||1,type:x.FLOAT}));return e.builder.getFillVertexShader()&&(t.fillRenderPass={vertexShader:e.builder.getFillVertexShader(),fragmentShader:e.builder.getFillFragmentShader(),attributesDesc:[{name:q.POSITION,size:2,type:x.FLOAT},...n],instancedAttributesDesc:[],instancePrimitiveVertexCount:3}),e.builder.getStrokeVertexShader()&&(t.strokeRenderPass={vertexShader:e.builder.getStrokeVertexShader(),fragmentShader:e.builder.getStrokeFragmentShader(),attributesDesc:[{name:q.LOCAL_POSITION,size:2,type:x.FLOAT}],instancedAttributesDesc:[{name:q.SEGMENT_START,size:2,type:x.FLOAT},{name:q.MEASURE_START,size:1,type:x.FLOAT},{name:q.SEGMENT_END,size:2,type:x.FLOAT},{name:q.MEASURE_END,size:1,type:x.FLOAT},{name:q.JOIN_ANGLES,size:2,type:x.FLOAT},{name:q.DISTANCE_LOW,size:1,type:x.FLOAT},{name:q.DISTANCE_HIGH,size:1,type:x.FLOAT},{name:q.ANGLE_TANGENT_SUM,size:1,type:x.FLOAT},...n],instancePrimitiveVertexCount:6}),e.builder.getSymbolVertexShader()&&(t.symbolRenderPass={vertexShader:e.builder.getSymbolVertexShader(),fragmentShader:e.builder.getSymbolFragmentShader(),attributesDesc:[{name:q.LOCAL_POSITION,size:2,type:x.FLOAT}],instancedAttributesDesc:[{name:q.POSITION,size:2,type:x.FLOAT},...n],instancePrimitiveVertexCount:6}),t}),this.hasFill_=this.renderPasses_.some(e=>e.fillRenderPass),this.hasStroke_=this.renderPasses_.some(e=>e.strokeRenderPass),this.hasSymbol_=this.renderPasses_.some(e=>e.symbolRenderPass),this.hasText_=this.flatStyle&&Ue(this.flatStyle),this.hasText_&&(this.textOverlayCanvas_=c().canvas,this.textOverlayContext_=this.textOverlayCanvas_.getContext(`2d`),this.textOverlayRenderFrameState_=null,this.textOverlayWorker_=e(async()=>{let{create:e}=await import(`./textOverlay-DKMe4o--.js`);return{create:e}},[]).then(({create:e})=>e()),this.textOverlayRenderList_=new Set),this.setHelper(r)}async generateBuffers(e,t,n){let r=ne(m(),t);if(e.isEmpty())return{polygonBuffers:null,lineStringBuffers:null,pointBuffers:null,invertVerticesTransform:r,textInstructionsKey:null};let i=new De,a=this.generateRenderInstructions_(e,i,t),[o,s,c,l]=await Promise.all([this.hasText_?this.generateTextInstructions_(a,i,t,n):null,this.hasFill_?this.generateBuffersForType_(a.polygonInstructions,`Polygon`,t):null,this.hasStroke_?this.generateBuffersForType_(a.lineStringInstructions,`LineString`,t):null,this.hasSymbol_?this.generateBuffersForType_(a.pointInstructions,`Point`,t):null]);return{polygonBuffers:s??null,lineStringBuffers:c??null,pointBuffers:l??null,invertVerticesTransform:r,textInstructionsKey:o}}generateRenderInstructions_(e,t,n){return{polygonInstructions:this.hasFill_||this.hasText_?Ne(e.polygonBatch,new Float32Array,t,this.customAttributes_,n):null,lineStringInstructions:this.hasStroke_||this.hasText_?Me(e.lineStringBatch,new Float32Array,t,this.customAttributes_,n):null,pointInstructions:this.hasSymbol_||this.hasText_?je(e.pointBatch,new Float32Array,t,this.customAttributes_,n):null}}generateBuffersForType_(e,t,n){if(e===null)return null;let r;switch(t){case`Polygon`:r=F.GENERATE_POLYGON_BUFFERS;break;case`LineString`:r=F.GENERATE_LINE_STRING_BUFFERS;break;case`Point`:r=F.GENERATE_POINT_BUFFERS;break;default:return null}let i={type:r,renderInstructions:e.buffer,renderInstructionsTransform:n,customAttributesSize:R(this.customAttributes_)};return K(qe(),i,[e.buffer]).then(e=>{if(!this.helper_.getGL())return;let t=e;if(!t.indicesBuffer||!t.vertexAttributesBuffer||!t.instanceAttributesBuffer)return;let n=new b(ce,T).fromArrayBuffer(t.indicesBuffer),r=new b(ue,T).fromArrayBuffer(t.vertexAttributesBuffer),i=new b(ue,T).fromArrayBuffer(t.instanceAttributesBuffer);return this.helper_.flushBufferData(n),this.helper_.flushBufferData(r),this.helper_.flushBufferData(i),[n,r,i]})}generateTextInstructions_(e,t,n,r){let i=[t.getArray().buffer],a=null,o=null,s=null;e.polygonInstructions&&(a=new Float32Array(e.polygonInstructions).buffer,i.push(a)),e.lineStringInstructions&&(o=new Float32Array(e.lineStringInstructions).buffer,i.push(o)),e.pointInstructions&&(s=new Float32Array(e.pointInstructions).buffer,i.push(s));let c=Object.keys(this.customAttributes_).reduce((e,t)=>({...e,[t]:this.customAttributes_[t].size||1}),{}),l={type:I.BUILD_INSTRUCTIONS,polygonRenderInstructions:a??void 0,lineStringRenderInstructions:o??void 0,pointRenderInstructions:s??void 0,labelsArray:t.getArray(),style:this.flatStyle??void 0,customAttributesSizes:c,renderInstructionsTransform:n,resolution:r};return this.textOverlayWorker_.then(e=>K(e,l,i)).then(e=>e.instructionsSetKey??null)}render(e,t,n){for(let r of this.renderPasses_)r.fillRenderPass&&e.polygonBuffers&&this.renderInternal_(e.polygonBuffers[0],e.polygonBuffers[1],e.polygonBuffers[2],r.fillRenderPass,t,n),r.strokeRenderPass&&e.lineStringBuffers&&this.renderInternal_(e.lineStringBuffers[0],e.lineStringBuffers[1],e.lineStringBuffers[2],r.strokeRenderPass,t,n),r.symbolRenderPass&&e.pointBuffers&&this.renderInternal_(e.pointBuffers[0],e.pointBuffers[1],e.pointBuffers[2],r.symbolRenderPass,t,n);e.textInstructionsKey&&this.renderText_(e)}renderInternal_(e,t,n,r,i,a){let o=e.getSize();if(o===0)return;let s=r.instancedAttributesDesc.length,c=r.program;if(c){if(this.helper_.useProgram(c,i),this.helper_.bindBuffer(t),this.helper_.bindBuffer(e),this.helper_.enableAttributes(r.attributesDesc),this.helper_.bindBuffer(n),this.helper_.enableAttributesInstanced(r.instancedAttributesDesc),a(),s){let e=r.instancedAttributesDesc.reduce((e,t)=>e+(t.size||1),0),t=n.getSize()/e;this.helper_.drawElementsInstanced(0,o,t)}else this.helper_.drawElements(0,o)}}renderText_(e){let t=e.textInstructionsKey;t&&this.textOverlayRenderList_.add(t)}finalizeTextRender(e){if(!this.hasText_)return Promise.resolve();let t=this.textOverlayCanvas_,n=this.textOverlayContext_,r={type:I.RENDER,frameState:Pe(e),batchesToRender:this.textOverlayRenderList_};return this.textOverlayWorker_.then(e=>K(e,r)).then(e=>{let r=e;if(r.imageData){this.textOverlayRenderFrameState_=r.frameState===void 0?null:r.frameState;let e=r.imageData;e.width!==t.width||e.height!==t.height?(t.width=e.width,t.height=e.height):n.clearRect(0,0,t.width,t.height),n.drawImage(e,0,0),e.close()}this.textOverlayRenderList_.clear()})}setHelper(e,t=null){this.helper_=e;for(let e of this.renderPasses_)e.fillRenderPass&&(e.fillRenderPass.program=this.helper_.getProgram(e.fillRenderPass.fragmentShader,e.fillRenderPass.vertexShader)),e.strokeRenderPass&&(e.strokeRenderPass.program=this.helper_.getProgram(e.strokeRenderPass.fragmentShader,e.strokeRenderPass.vertexShader)),e.symbolRenderPass&&(e.symbolRenderPass.program=this.helper_.getProgram(e.symbolRenderPass.fragmentShader,e.symbolRenderPass.vertexShader));this.helper_.addUniforms(this.uniforms_),t&&(t.polygonBuffers&&(this.helper_.flushBufferData(t.polygonBuffers[0]),this.helper_.flushBufferData(t.polygonBuffers[1]),this.helper_.flushBufferData(t.polygonBuffers[2])),t.lineStringBuffers&&(this.helper_.flushBufferData(t.lineStringBuffers[0]),this.helper_.flushBufferData(t.lineStringBuffers[1]),this.helper_.flushBufferData(t.lineStringBuffers[2])),t.pointBuffers&&(this.helper_.flushBufferData(t.pointBuffers[0]),this.helper_.flushBufferData(t.pointBuffers[1]),this.helper_.flushBufferData(t.pointBuffers[2])))}getTextOverlayCanvas(){return this.textOverlayCanvas_}getTextOverlayFrameState(){return this.textOverlayRenderFrameState_}disposeTextInstructions(e){this.textOverlayWorker_?.then(t=>t.postMessage({type:I.DISPOSE_INSTRUCTIONS,instructionsSetKey:e}))}disposeInternal(){this.textOverlayWorker_?.then(e=>e.terminate()),super.disposeInternal()}};function J(e){if(Array.isArray(e))return e.some(e=>`builder`in e&&!(`sourceRule`in e))?null:e.some(e=>`builder`in e)?e.flatMap(e=>{let t=e.sourceRule;return t?[t]:[]}):e;if(`builder`in e){if(!(`sourceRule`in e))return null;let t=e.sourceRule;return t?[t]:null}return e}function Xe(e,t){let n=Array.isArray(e)?e:[e];if(`style`in n[0]){let e=[],r=n,i=[];for(let n of r){let r=Array.isArray(n.style)?n.style:[n.style],a=n.filter;n.else&&i.length&&(a=[`all`,...i.map(e=>[`!`,e])],n.filter&&a.push(n.filter),a.length<3&&(a=a[1])),n.filter&&i.push(n.filter);let o=r.map(e=>({...He(e,t,a),sourceRule:n}));e.push(...o)}return e}return`builder`in n[0]?n:n.map(e=>({...He(e,t,void 0),sourceRule:{style:e}}))}var Y=new Uint8Array(4),Ze=class{constructor(e,t){this.helper_=e;let n=e.getGL();this.texture_=n.createTexture(),this.framebuffer_=n.createFramebuffer(),this.depthbuffer_=n.createRenderbuffer(),this.size_=t||[1,1],this.data_=new Uint8Array,this.dataCacheDirty_=!0,this.updateSize_()}setSize(e){l(e,this.size_)||(this.size_[0]=e[0],this.size_[1]=e[1],this.updateSize_())}getSize(){return this.size_}clearCachedData(){this.dataCacheDirty_=!0}readAll(){if(this.dataCacheDirty_){let e=this.size_,t=this.helper_.getGL();t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.readPixels(0,0,e[0],e[1],t.RGBA,t.UNSIGNED_BYTE,this.data_),this.dataCacheDirty_=!1}return this.data_}readPixel(e,t){if(e<0||t<0||e>this.size_[0]||t>=this.size_[1])return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=0,Y;this.readAll();let n=Math.floor(e)+(this.size_[1]-Math.floor(t)-1)*this.size_[0];return Y[0]=this.data_[n*4],Y[1]=this.data_[n*4+1],Y[2]=this.data_[n*4+2],Y[3]=this.data_[n*4+3],Y}getTexture(){return this.texture_}getFramebuffer(){return this.framebuffer_}getDepthbuffer(){return this.depthbuffer_}updateSize_(){let e=this.size_,t=this.helper_.getGL();this.texture_=this.helper_.createTexture(e,null,this.texture_),t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer_),t.viewport(0,0,e[0],e[1]),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture_,0),t.bindRenderbuffer(t.RENDERBUFFER,this.depthbuffer_),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,e[0],e[1]),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depthbuffer_),this.data_=new Uint8Array(e[0]*e[1]*4)}},X={PATTERN_ORIGIN_X_DOUBLE:`u_df_patternOriginX`,PATTERN_ORIGIN_Y_DOUBLE:`u_df_patternOriginY`,PATTERN_SCALE_RATIO_DOUBLE:`u_df_patternScaleRatio`,ONE:`u_one`},Z=[0,0],Q=[0,0],$=m(),Qe=y();function $e(e,t,n,r){h($,t),se($,n),e.setUniformMatrixValue(le.PROJECTION_MATRIX,_(Qe,$)),ne($,$),e.setUniformMatrixValue(le.INVERT_PROJECTION_MATRIX,_(Qe,$)),Z[0]=0,Z[1]=0;let i=r.size,a=r.viewState.resolution,o=r.viewState.center;ee($,i[0]/2,i[1]/2,1/a,1/a,0,-o[0],-o[1]),ae($,Z),Q[0]=A(Z[0]),Q[1]=k(Z[0]),e.setUniformFloatVec2(X.PATTERN_ORIGIN_X_DOUBLE,Q),Q[0]=A(Z[1]),Q[1]=k(Z[1]),e.setUniformFloatVec2(X.PATTERN_ORIGIN_Y_DOUBLE,Q);let s=2**((r.viewState.zoom+.5)%1-.5);Z[0]=A(s),Z[1]=k(s),e.setUniformFloatVec2(X.PATTERN_SCALE_RATIO_DOUBLE,Z)}export{Xe as a,We as c,Ce as d,N as f,Ye as i,Ue as l,$e as n,J as o,Ze as r,G as s,X as t,Ae as u};