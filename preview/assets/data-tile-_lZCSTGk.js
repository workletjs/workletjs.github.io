import{Cn as e,Er as t,Fr as n,Jt as r,K as i,Mt as a,Nr as o,V as s,W as c,Xt as l,sr as u,wn as d,xt as f}from"./_router-chunk-99l_7QRp.js";import{Fr as p,hr as m,s as h,vn as g}from"./view-VQxaiNPO.js";import{D as _,E as v,O as y,_ as b,b as x,j as S,m as C,p as w,r as T,v as E,y as D}from"./compileUtil-3X3GNJpM.js";import{h as O}from"./TileLayer-DxS6vj8j.js";import{n as k,t as A}from"./tile-BP9OZ9mP.js";import{c as j,t as M}from"./raster-4W5u7sOH.js";var N={TEXTURE:`u_texture`,VELOCITY_TEXTURE:`u_velocityTexture`,POSITION_TEXTURE:`u_positionTexture`,PARTICLE_COUNT_SQRT:`u_particleCountSqrt`,MAX_SPEED:`u_maxSpeed`,GAIN:`u_gain`,OFFSET:`u_offset`,IS_FLOAT:`u_isFloat`,RANDOM_SEED:`u_randomSeed`,SPEED_FACTOR:`u_speedFactor`,DROP_RATE:`u_dropRate`,DROP_RATE_BUMP:`u_dropRateBump`,OPACITY:`u_opacity`,ROTATION:v.ROTATION,VIEWPORT_SIZE_PX:v.VIEWPORT_SIZE_PX},P={POSITION:`a_position`,INDEX:`a_index`},F={POSITION:`v_position`},I=class extends x{constructor(e,t){super(e,{vertexShader:t.tileVertexShader,fragmentShader:t.tileFragmentShader,cacheSize:t.cacheSize,postProcesses:[{}],uniforms:{[N.MAX_SPEED]:t.maxSpeed}}),this.particleColorFragmentShader_=t.particleColorFragmentShader,this.velocityTexture_=null,this.particleCountSqrt_=t.particles?Math.ceil(Math.sqrt(t.particles)):256,this.particleIndexBuffer_,this.quadBuffer_,this.particlePositionProgram_,this.particlePositionVertexShader_=t.particlePositionVertexShader,this.particlePositionFragmentShader_=t.particlePositionFragmentShader,this.previousPositionTexture_,this.nextPositionTexture_,this.particleColorProgram_,this.particleColorVertexShader_=t.particleColorVertexShader,this.particleColorFragmentShader_=t.particleColorFragmentShader,this.textureProgram_,this.textureVertexShader_=t.textureVertexShader,this.textureFragmentShader_=t.textureFragmentShader,this.previousTrailsTexture_,this.nextTrailsTexture_,this.fadeOpacity_=.996,this.maxSpeed_=t.maxSpeed,this.speedFactor_=t.speedFactor||.001,this.dropRate_=.003,this.dropRateBump_=.01,this.tempVec2_=[0,0],this.renderedWidth_=0,this.renderedHeight_=0}afterHelperCreated(){super.afterHelperCreated();let e=this.helper,t=e.getGL();this.framebuffer_=t.createFramebuffer();let n=this.particleCountSqrt_*this.particleCountSqrt_,r=new Float32Array(n);for(let e=0;e<n;++e)r[e]=e;let i=new _(y,S);i.setArray(r),e.flushBufferData(i),this.particleIndexBuffer_=i;let a=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),o=new _(y,S);o.setArray(a),e.flushBufferData(o),this.quadBuffer_=o;let s=new Uint8Array(n*4);for(let e=0;e<s.length;++e)s[e]=Math.floor(Math.random()*256);this.previousPositionTexture_=e.createTexture([this.particleCountSqrt_,this.particleCountSqrt_],s,void 0,!0),this.nextPositionTexture_=e.createTexture([this.particleCountSqrt_,this.particleCountSqrt_],s,void 0,!0),this.particlePositionProgram_=e.getProgram(this.particlePositionFragmentShader_,this.particlePositionVertexShader_),this.particleColorProgram_=e.getProgram(this.particleColorFragmentShader_,this.particleColorVertexShader_),this.textureProgram_=e.getProgram(this.textureFragmentShader_,this.textureVertexShader_)}createSizeDependentTextures_(){let e=this.helper,t=e.getGL(),n=e.getCanvas(),r=n.width,i=n.height,a=new Uint8Array(r*i*4);this.nextTrailsTexture_&&t.deleteTexture(this.nextTrailsTexture_),this.nextTrailsTexture_=e.createTexture([r,i],a,void 0,!0),this.previousTrailsTexture_&&t.deleteTexture(this.previousTrailsTexture_),this.previousTrailsTexture_=e.createTexture([r,i],a,void 0,!0)}beforeFinalize(e){let t=this.helper,n=t.getGL(),r=t.getCanvas(),i=r.width,a=r.height;(this.renderedWidth_!=i||this.renderedHeight_!=a)&&this.createSizeDependentTextures_();let o=[i,a];this.velocityTexture_=t.createTexture(o,null,this.velocityTexture_??void 0),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,0,0,i,a,0),this.drawParticleTrails_(e),this.updateParticlePositions_(e),e.animate=!0,this.renderedWidth_=i,this.renderedHeight_=a}drawParticleTrails_(e){let t=this.helper,n=t.getGL();t.bindFrameBuffer(this.framebuffer_??null,this.nextTrailsTexture_??null),this.drawTexture_(this.previousTrailsTexture_??void 0,this.fadeOpacity_),this.drawParticleColor_(e),t.bindInitialFrameBuffer(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.drawTexture_(this.nextTrailsTexture_??void 0,1),n.disable(n.BLEND);let r=this.nextTrailsTexture_;this.nextTrailsTexture_=this.previousTrailsTexture_,this.previousTrailsTexture_=r}drawTexture_(e,t){if(!e)return;let n=this.helper,r=n.getGL();n.useProgram(this.textureProgram_),n.bindTexture(e,0,N.TEXTURE),n.bindAttribute(this.quadBuffer_,P.POSITION,2),this.helper.setUniformFloatValue(N.OPACITY,t),r.drawArrays(r.TRIANGLES,0,6)}drawParticleColor_(e){let t=this.helper,n=t.getGL();t.useProgram(this.particleColorProgram_);let r=this.particleCountSqrt_*this.particleCountSqrt_;t.bindAttribute(this.particleIndexBuffer_,P.INDEX,1);let i=this.previousPositionTexture_;i&&t.bindTexture(i,0,N.POSITION_TEXTURE);let a=this.velocityTexture_;a&&t.bindTexture(a,1,N.VELOCITY_TEXTURE),this.helper.setUniformFloatValue(N.PARTICLE_COUNT_SQRT,this.particleCountSqrt_);let o=this.tempVec2_;o[0]=Math.cos(-e.viewState.rotation),o[1]=Math.sin(-e.viewState.rotation),this.helper.setUniformFloatVec2(N.ROTATION,o),this.helper.setUniformFloatValue(N.MAX_SPEED,this.maxSpeed_),n.drawArrays(n.POINTS,0,r)}updateParticlePositions_(e){let t=this.helper,n=t.getGL();t.useProgram(this.particlePositionProgram_),n.viewport(0,0,this.particleCountSqrt_,this.particleCountSqrt_),t.bindFrameBuffer(this.framebuffer_??null,this.nextPositionTexture_??null);let r=this.previousPositionTexture_;r&&t.bindTexture(r,0,N.POSITION_TEXTURE);let i=this.velocityTexture_;i&&t.bindTexture(i,1,N.VELOCITY_TEXTURE),t.bindAttribute(this.quadBuffer_,P.POSITION,2),t.setUniformFloatValue(N.RANDOM_SEED,Math.random()),t.setUniformFloatValue(N.SPEED_FACTOR,this.speedFactor_),t.setUniformFloatValue(N.DROP_RATE,this.dropRate_),t.setUniformFloatValue(N.DROP_RATE_BUMP,this.dropRateBump_);let a=this.tempVec2_;a[0]=Math.cos(-e.viewState.rotation),a[1]=Math.sin(-e.viewState.rotation),this.helper.setUniformFloatVec2(N.ROTATION,a);let o=e.size;this.helper.setUniformFloatVec2(N.VIEWPORT_SIZE_PX,[o[0],o[1]]),n.drawArrays(n.TRIANGLES,0,6);let s=this.nextPositionTexture_;this.nextPositionTexture_=this.previousPositionTexture_,this.previousPositionTexture_=s}},L=`
  attribute vec2 ${E.TEXTURE_COORD};
  uniform mat4 ${D.TILE_TRANSFORM};
  uniform float ${D.TEXTURE_PIXEL_WIDTH};
  uniform float ${D.TEXTURE_PIXEL_HEIGHT};
  uniform float ${D.TEXTURE_RESOLUTION};
  uniform float ${D.DEPTH};

  varying vec2 v_textureCoord;
  varying vec2 v_localMapCoord;

  void main() {
    v_textureCoord = ${E.TEXTURE_COORD};
    v_localMapCoord = vec2(
      ${D.TEXTURE_RESOLUTION} * ${D.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
      -1. * ${D.TEXTURE_RESOLUTION} * ${D.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
    );
    gl_Position = ${D.TILE_TRANSFORM} * vec4(${E.TEXTURE_COORD}, ${D.DEPTH}, 1.0);
  }
`,R=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform vec4 ${D.RENDER_EXTENT};
  uniform float ${N.MAX_SPEED};
  uniform sampler2D ${D.TILE_TEXTURE_ARRAY}[1];

  varying vec2 v_textureCoord;
  varying vec2 v_localMapCoord;

  void main() {
    if (
      v_localMapCoord[0] < ${D.RENDER_EXTENT}[0] ||
      v_localMapCoord[1] < ${D.RENDER_EXTENT}[1] ||
      v_localMapCoord[0] > ${D.RENDER_EXTENT}[2] ||
      v_localMapCoord[1] > ${D.RENDER_EXTENT}[3]
    ) {
      discard;
    }

    vec4 velocity = texture2D(${D.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);
    gl_FragColor = vec4((velocity.xy + ${N.MAX_SPEED}) / (2.0 * ${N.MAX_SPEED}), 0, 1);
  }
`,z=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  attribute vec2 ${P.POSITION};

  varying vec2 ${F.POSITION};

  void main() {
    ${F.POSITION} = ${P.POSITION};
    gl_Position = vec4(1.0 - 2.0 * ${P.POSITION}, 0, 1);
  }
`,B=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform sampler2D ${N.TEXTURE};
  uniform float ${N.OPACITY};

  varying vec2 ${F.POSITION};

  void main() {
    vec4 color = texture2D(${N.TEXTURE}, 1.0 - ${F.POSITION});
    gl_FragColor = vec4(floor(255.0 * color * ${N.OPACITY}) / 255.0);
  }
`,V=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform sampler2D ${N.POSITION_TEXTURE};
  uniform sampler2D ${N.VELOCITY_TEXTURE};
  uniform float ${N.RANDOM_SEED};
  uniform float ${N.SPEED_FACTOR};
  uniform float ${N.DROP_RATE};
  uniform float ${N.DROP_RATE_BUMP};
  uniform vec2 ${N.ROTATION};
  uniform vec2 ${N.VIEWPORT_SIZE_PX};

  varying vec2 ${F.POSITION};

  // pseudo-random generator
  const vec3 randConstants = vec3(12.9898, 78.233, 4375.85453);

  float rand(const vec2 co) {
    float t = dot(randConstants.xy, co);
    return fract(sin(t) * (randConstants.z + t));
  }

  void main() {
    vec4 positionColor = texture2D(${N.POSITION_TEXTURE}, ${F.POSITION});

    // decode particle position from pixel RGBA
    vec2 particlePosition = vec2(
      positionColor.r / 255.0 + positionColor.b,
      positionColor.g / 255.0 + positionColor.a
    );

    vec4 velocityColor = texture2D(${N.VELOCITY_TEXTURE}, particlePosition);
    if (velocityColor.a == 0.0) {
      discard;
    }

    float vx = 2.0 * velocityColor.r - 1.0;
    float vy = 2.0 * velocityColor.g - 1.0;

    // normalized veloicty (magnitude 0 - 1)
    vec2 velocity = vec2(
      vx * ${N.ROTATION}.x - vy * ${N.ROTATION}.y,
      vx * ${N.ROTATION}.y + vy * ${N.ROTATION}.x
    );

    // account for aspect ratio (square particle position texture, non-square map)
    float aspectRatio = ${N.VIEWPORT_SIZE_PX}.x / ${N.VIEWPORT_SIZE_PX}.y;
    vec2 offset = vec2(velocity.x / aspectRatio, velocity.y) * ${N.SPEED_FACTOR};

    // update particle position, wrapping around the edge
    particlePosition = fract(1.0 + particlePosition + offset);

    // a random seed to use for the particle drop
    vec2 seed = (particlePosition + ${F.POSITION}) * ${N.RANDOM_SEED};

    // drop rate is a chance a particle will restart at random position, to avoid degeneration
    float dropRate = ${N.DROP_RATE} + length(velocity) * ${N.DROP_RATE_BUMP};
    float drop = step(1.0 - dropRate, rand(seed));

    vec2 randomPosition = vec2(rand(seed + 1.3), rand(seed + 2.1));
    particlePosition = mix(particlePosition, randomPosition, drop);

    // encode the new particle position back into RGBA
    gl_FragColor = vec4(
      fract(particlePosition * 255.0),
      floor(particlePosition * 255.0) / 255.0
    );
  }
`,H=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  attribute float ${P.INDEX};

  uniform sampler2D ${N.POSITION_TEXTURE};
  uniform float ${N.PARTICLE_COUNT_SQRT};

  varying vec2 ${F.POSITION};

  void main() {
    vec4 color = texture2D(
      ${N.POSITION_TEXTURE},
      vec2(
        fract(${P.INDEX} / ${N.PARTICLE_COUNT_SQRT}),
        floor(${P.INDEX} / ${N.PARTICLE_COUNT_SQRT}) / ${N.PARTICLE_COUNT_SQRT}
      )
    );

    ${F.POSITION} = vec2(
      color.r / 255.0 + color.b,
      color.g / 255.0 + color.a
    );

    gl_PointSize = 1.0;
    gl_Position = vec4(
      2.0 * ${F.POSITION}.x - 1.0,
      2.0 * ${F.POSITION}.y - 1.0,
      0,
      1
    );
  }
`;function U(e){let t=C(),n=[];if(e.color!==void 0){let r=T(t,e.color,m);n.push(`color = ${r};`)}if(t.variables.size>1&&!e.variables)throw Error(`Missing variables in style (expected ${Array.from(t.variables.keys())})`);let r={};for(let[n]of t.variables.entries()){let t=e.variables||{};if(!(n in t))throw Error(`Missing '${n}' in style variables`);let i=b(n);r[i]=function(){let e=t[n];return typeof e==`string`&&(e=w(e)),e===void 0?-9999999:e}}let i=Object.keys(r).map(function(e){return`uniform float ${e};`}),a=Object.keys(t.functions).map(function(e){return t.functions[e]});return{tileVertexShader:L,tileFragmentShader:R,particleColorVertexShader:H,particleColorFragmentShader:`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    uniform sampler2D ${N.VELOCITY_TEXTURE};
    uniform float ${N.MAX_SPEED};
    uniform vec2 ${N.ROTATION};

    ${i.join(`
`)}

    varying vec2 ${F.POSITION};
    
    ${a.join(`
`)}

    void main() {
      vec4 velocityColor = texture2D(${N.VELOCITY_TEXTURE}, ${F.POSITION});

      float vx = mix(-${N.MAX_SPEED}, ${N.MAX_SPEED}, velocityColor.r);
      float vy = mix(-${N.MAX_SPEED}, ${N.MAX_SPEED}, velocityColor.g);

      vec2 velocity = vec2(
        vx * ${N.ROTATION}.x - vy * ${N.ROTATION}.y,
        vx * ${N.ROTATION}.y + vy * ${N.ROTATION}.x
      );

      float a_prop_speed = length(velocity);

      vec4 color;

      ${n.join(`
`)}

      if (color.a == 0.0) {
        discard;
      }

      gl_FragColor = color;
    }
  `,particlePositionVertexShader:z,particlePositionFragmentShader:V,textureVertexShader:z,textureFragmentShader:B}}var W=[],G=class extends O{constructor(e){let t=Object.assign({},e);if(delete t.maxSpeed,delete t.speedFactor,delete t.particles,super(t),this.style_=e.style||{},!(e.maxSpeed>0))throw Error(`maxSpeed is required`);this.maxSpeed_=e.maxSpeed,this.speedFactor_=e.speedFactor??.001,this.particles_=e.particles??65536,this.styleVariables_=this.style_.variables||{},this.addChangeListener(g.SOURCE,this.handleSourceUpdate_)}handleSourceUpdate_(){let e=this.getRenderer();e&&e.clearCache()}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}getSources(e,t){let n=this.getSource();return W.length=0,n&&W.push(n),W}createRenderer(){let e=U(this.style_);return new I(this,{...e,cacheSize:this.getCacheSize(),maxSpeed:this.maxSpeed_,speedFactor:this.speedFactor_,particles:this.particles_})}};G.prototype.dispose;var K=[`*`],q=class n{wolMaxSpeed=s.required();wolSpeedFactor=s();wolParticles=s();wolStyle=s();wolClassName=s();wolOpacity=c();wolVisible=c();wolExtent=c();wolZIndex=c();wolMinResolution=c();wolMaxResolution=c();wolMinZoom=c();wolMaxZoom=c();wolPreload=c();wolSource=c();wolUseInterimTilesOnError=c();wolCacheSize=s();wolProperties=s();wolChange=i();wolError=i();wolPostRender=i();wolPreRender=i();wolPropertyChange=i();wolSourceReady=i();instance=o(null);constructor(){let e=t(u),n=h(`FlowLayer`),r={};f(()=>{let e=new G({maxSpeed:this.wolMaxSpeed(),speedFactor:this.wolSpeedFactor(),particles:this.wolParticles(),style:this.wolStyle(),className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),preload:this.wolPreload(),source:this.wolSource()??void 0,useInterimTilesOnError:this.wolUseInterimTilesOnError(),cacheSize:this.wolCacheSize()});this.wolProperties()&&e.setProperties(this.wolProperties()??{},!0),r.change=e.on(`change`,e=>this.wolChange.emit(e)),r[`change:extent`]=e.on(`change:extent`,()=>this.wolExtent.set(e.getExtent())),r[`change:maxResolution`]=e.on(`change:maxResolution`,()=>this.wolMaxResolution.set(e.getMaxResolution())),r[`change:maxZoom`]=e.on(`change:maxZoom`,()=>this.wolMaxZoom.set(e.getMaxZoom())),r[`change:minResolution`]=e.on(`change:minResolution`,()=>this.wolMinResolution.set(e.getMinResolution())),r[`change:minZoom`]=e.on(`change:minZoom`,()=>this.wolMinZoom.set(e.getMinZoom())),r[`change:opacity`]=e.on(`change:opacity`,()=>this.wolOpacity.set(e.getOpacity())),r[`change:preload`]=e.on(`change:preload`,()=>this.wolPreload.set(e.getPreload())),r[`change:source`]=e.on(`change:source`,()=>this.wolSource.set(e.getSource())),r[`change:useInterimTilesOnError`]=e.on(`change:useInterimTilesOnError`,()=>this.wolUseInterimTilesOnError.set(e.getUseInterimTilesOnError())),r[`change:visible`]=e.on(`change:visible`,()=>this.wolVisible.set(e.getVisible())),r[`change:zIndex`]=e.on(`change:zIndex`,()=>this.wolZIndex.set(e.getZIndex())),r.error=e.on(`error`,e=>this.wolError.emit(e)),r.postrender=e.on(`postrender`,e=>this.wolPostRender.emit(e)),r.prerender=e.on(`prerender`,e=>this.wolPreRender.emit(e)),r.propertychange=e.on(`propertychange`,e=>this.wolPropertyChange.emit(e)),r.sourceready=e.on(`sourceready`,e=>this.wolSourceReady.emit(e)),Promise.resolve().then(()=>{n.addLayer(e)}),this.instance.set(e)}),e.onDestroy(()=>{p(Object.values(r));let e=this.instance();e&&(n.removeLayer(e),e.dispose(),this.instance.set(null))})}ngOnChanges(e){let t=this.instance();if(t)for(let[n,r]of Object.entries(e))switch(n){case`wolExtent`:t.setExtent(r.currentValue);break;case`wolMaxResolution`:t.setMaxResolution(r.currentValue);break;case`wolMaxZoom`:t.setMaxZoom(r.currentValue);break;case`wolMinResolution`:t.setMinResolution(r.currentValue);break;case`wolMinZoom`:t.setMinZoom(r.currentValue);break;case`wolOpacity`:t.setOpacity(r.currentValue);break;case`wolPreload`:t.setPreload(r.currentValue);break;case`wolSource`:t.setSource(r.currentValue??null);break;case`wolUseInterimTilesOnError`:t.setUseInterimTilesOnError(r.currentValue);break;case`wolVisible`:t.setVisible(r.currentValue);break;case`wolZIndex`:t.setZIndex(r.currentValue);break;case`wolProperties`:t.setProperties(r.currentValue??{});break;case`wolStyle`:t.updateStyleVariables(r.currentValue)}}getInstance(){return this.instance()??void 0}static ɵfac=function(e){return new(e||n)};static ɵcmp=r({type:n,selectors:[[`wol-flow-layer`]],inputs:{wolMaxSpeed:[1,`wolMaxSpeed`],wolSpeedFactor:[1,`wolSpeedFactor`],wolParticles:[1,`wolParticles`],wolStyle:[1,`wolStyle`],wolClassName:[1,`wolClassName`],wolOpacity:[1,`wolOpacity`],wolVisible:[1,`wolVisible`],wolExtent:[1,`wolExtent`],wolZIndex:[1,`wolZIndex`],wolMinResolution:[1,`wolMinResolution`],wolMaxResolution:[1,`wolMaxResolution`],wolMinZoom:[1,`wolMinZoom`],wolMaxZoom:[1,`wolMaxZoom`],wolPreload:[1,`wolPreload`],wolSource:[1,`wolSource`],wolUseInterimTilesOnError:[1,`wolUseInterimTilesOnError`],wolCacheSize:[1,`wolCacheSize`],wolProperties:[1,`wolProperties`]},outputs:{wolOpacity:`wolOpacityChange`,wolVisible:`wolVisibleChange`,wolExtent:`wolExtentChange`,wolZIndex:`wolZIndexChange`,wolMinResolution:`wolMinResolutionChange`,wolMaxResolution:`wolMaxResolutionChange`,wolMinZoom:`wolMinZoomChange`,wolMaxZoom:`wolMaxZoomChange`,wolPreload:`wolPreloadChange`,wolSource:`wolSourceChange`,wolUseInterimTilesOnError:`wolUseInterimTilesOnErrorChange`,wolChange:`wolChange`,wolError:`wolError`,wolPostRender:`wolPostRender`,wolPreRender:`wolPreRender`,wolPropertyChange:`wolPropertyChange`,wolSourceReady:`wolSourceReady`},exportAs:[`wolFlowLayer`],features:[a],ngContentSelectors:K,decls:1,vars:0,template:function(t,n){t&1&&(d(),e(0))},encapsulation:2})};function J(e){let n={host:!0,optional:!0},r=t(M,n),i=t(k,n),a=t(A,n),o=t(q,n);if(r)return{setSource:e=>(r.addSource(e),()=>{r.removeSource(e)}),getInstance:()=>r.getInstance()};if(i)return{setSource:e=>(i.getInstance()?.setSource(e),()=>{i.getInstance()?.setSource(null)}),getInstance:()=>i.getInstance()};if(a)return{setSource:e=>(a.getInstance()?.setSource(e),()=>{a.getInstance()?.setSource(null)}),getInstance:()=>a.getInstance()};if(o)return{setSource:e=>(o.getInstance()?.setSource(e),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};throw Error(`No TileSource host found. Please wrap the ${e} component in a RasterSource, WebGLTileLayer, FlowLayer or TileLayer component.`)}var Y=[`*`],X=class n{wolLoader=s();wolAttributions=s();wolAttributionsCollapsible=s();wolMaxZoom=s();wolMinZoom=s();wolTileSize=s();wolGutter=s();wolMaxResolution=s();wolProjection=s();wolTileGrid=s();wolState=s();wolWrapX=s();wolTransition=s();wolBandCount=s();wolHasAlpha=s();wolInterpolate=s();wolCrop=s();wolKey=s();wolZDirection=s();wolProperties=s();wolChange=i();wolError=i();wolPropertychange=i();wolTileLoadEnd=i();wolTileLoadError=i();wolTileLoadStart=i();instance;constructor(){let e=t(u),n=J(`DataTileSource`),r={},i;f(()=>{let e=new j({loader:this.wolLoader(),attributions:this.wolAttributions(),attributionsCollapsible:this.wolAttributionsCollapsible(),maxZoom:this.wolMaxZoom(),minZoom:this.wolMinZoom(),tileSize:this.wolTileSize(),gutter:this.wolGutter(),maxResolution:this.wolMaxResolution(),projection:this.wolProjection(),tileGrid:this.wolTileGrid(),state:this.wolState(),wrapX:this.wolWrapX(),transition:this.wolTransition(),bandCount:this.wolBandCount(),hasAlpha:this.wolHasAlpha(),interpolate:this.wolInterpolate(),crossOrigin:this.wolCrop(),key:this.wolKey(),zDirection:this.wolZDirection()});this.wolProperties()||e.setProperties(this.wolProperties()??{},!0),r.change=e.on(`change`,e=>this.wolChange.emit(e)),r.error=e.on(`error`,e=>this.wolError.emit(e)),r.propertychange=e.on(`propertychange`,e=>this.wolPropertychange.emit(e)),r.tileloadend=e.on(`tileloadend`,e=>this.wolTileLoadEnd.emit(e)),r.tileloaderror=e.on(`tileloaderror`,e=>this.wolTileLoadError.emit(e)),r.tileloadstart=e.on(`tileloadstart`,e=>this.wolTileLoadStart.emit(e)),Promise.resolve().then(()=>{i=n.setSource(e)}),this.instance=e}),e.onDestroy(()=>{i&&i(),p(Object.values(r)),this.instance=void 0})}ngOnChanges(e){if(!this.instance)return;let t=this.wolProjection(),n=this.wolTileGrid();for(let[r,i]of Object.entries(e))switch(r){case`wolAttributions`:this.instance.setAttributions(i.currentValue);break;case`wolProperties`:this.instance.setProperties(i.currentValue??{});break;case`wolProjection`:case`wolTileGrid`:t&&n&&this.instance.setTileGridForProjection(t,n)}}getInstance(){return this.instance}static ɵfac=function(e){return new(e||n)};static ɵcmp=r({type:n,selectors:[[`wol-data-tile-source`]],inputs:{wolLoader:[1,`wolLoader`],wolAttributions:[1,`wolAttributions`],wolAttributionsCollapsible:[1,`wolAttributionsCollapsible`],wolMaxZoom:[1,`wolMaxZoom`],wolMinZoom:[1,`wolMinZoom`],wolTileSize:[1,`wolTileSize`],wolGutter:[1,`wolGutter`],wolMaxResolution:[1,`wolMaxResolution`],wolProjection:[1,`wolProjection`],wolTileGrid:[1,`wolTileGrid`],wolState:[1,`wolState`],wolWrapX:[1,`wolWrapX`],wolTransition:[1,`wolTransition`],wolBandCount:[1,`wolBandCount`],wolHasAlpha:[1,`wolHasAlpha`],wolInterpolate:[1,`wolInterpolate`],wolCrop:[1,`wolCrop`],wolKey:[1,`wolKey`],wolZDirection:[1,`wolZDirection`],wolProperties:[1,`wolProperties`]},outputs:{wolChange:`wolChange`,wolError:`wolError`,wolPropertychange:`wolPropertychange`,wolTileLoadEnd:`wolTileLoadEnd`,wolTileLoadError:`wolTileLoadError`,wolTileLoadStart:`wolTileLoadStart`},features:[a],ngContentSelectors:Y,decls:1,vars:0,template:function(t,n){t&1&&(d(),e(0))},encapsulation:2})},Z=class e{static ɵfac=function(t){return new(t||e)};static ɵmod=l({type:e});static ɵinj=n({})};export{X as n,q as r,Z as t};