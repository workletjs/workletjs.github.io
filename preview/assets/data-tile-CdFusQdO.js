import{Cn as e,Er as t,Jt as n,K as r,Mt as i,Nr as a,V as o,W as s,sr as c,wn as l,xt as u}from"./_router-chunk-99l_7QRp.js";import{Lr as d,_r as f,a as p,bn as m}from"./Layer-DwepbTii.js";import{D as h,E as g,O as _,_ as v,b as y,j as b,m as x,p as S,r as C,v as w,y as T}from"./compileUtil-Cf_xF8yG.js";import{h as E}from"./TileLayer-DZO6TIh5.js";import{n as D,t as O}from"./tile-CgbOyjUp.js";import{c as k,t as A}from"./raster-BNB-1gKW.js";var j={TEXTURE:`u_texture`,VELOCITY_TEXTURE:`u_velocityTexture`,POSITION_TEXTURE:`u_positionTexture`,PARTICLE_COUNT_SQRT:`u_particleCountSqrt`,MAX_SPEED:`u_maxSpeed`,GAIN:`u_gain`,OFFSET:`u_offset`,IS_FLOAT:`u_isFloat`,RANDOM_SEED:`u_randomSeed`,SPEED_FACTOR:`u_speedFactor`,DROP_RATE:`u_dropRate`,DROP_RATE_BUMP:`u_dropRateBump`,OPACITY:`u_opacity`,ROTATION:g.ROTATION,VIEWPORT_SIZE_PX:g.VIEWPORT_SIZE_PX},M={POSITION:`a_position`,INDEX:`a_index`},N={POSITION:`v_position`},P=class extends y{constructor(e,t){super(e,{vertexShader:t.tileVertexShader,fragmentShader:t.tileFragmentShader,cacheSize:t.cacheSize,postProcesses:[{}],uniforms:{[j.MAX_SPEED]:t.maxSpeed}}),this.particleColorFragmentShader_=t.particleColorFragmentShader,this.velocityTexture_=null,this.particleCountSqrt_=t.particles?Math.ceil(Math.sqrt(t.particles)):256,this.particleIndexBuffer_,this.quadBuffer_,this.particlePositionProgram_,this.particlePositionVertexShader_=t.particlePositionVertexShader,this.particlePositionFragmentShader_=t.particlePositionFragmentShader,this.previousPositionTexture_,this.nextPositionTexture_,this.particleColorProgram_,this.particleColorVertexShader_=t.particleColorVertexShader,this.particleColorFragmentShader_=t.particleColorFragmentShader,this.textureProgram_,this.textureVertexShader_=t.textureVertexShader,this.textureFragmentShader_=t.textureFragmentShader,this.previousTrailsTexture_,this.nextTrailsTexture_,this.fadeOpacity_=.996,this.maxSpeed_=t.maxSpeed,this.speedFactor_=t.speedFactor||.001,this.dropRate_=.003,this.dropRateBump_=.01,this.tempVec2_=[0,0],this.renderedWidth_=0,this.renderedHeight_=0}afterHelperCreated(){super.afterHelperCreated();let e=this.helper,t=e.getGL();this.framebuffer_=t.createFramebuffer();let n=this.particleCountSqrt_*this.particleCountSqrt_,r=new Float32Array(n);for(let e=0;e<n;++e)r[e]=e;let i=new h(_,b);i.setArray(r),e.flushBufferData(i),this.particleIndexBuffer_=i;let a=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),o=new h(_,b);o.setArray(a),e.flushBufferData(o),this.quadBuffer_=o;let s=new Uint8Array(n*4);for(let e=0;e<s.length;++e)s[e]=Math.floor(Math.random()*256);this.previousPositionTexture_=e.createTexture([this.particleCountSqrt_,this.particleCountSqrt_],s,void 0,!0),this.nextPositionTexture_=e.createTexture([this.particleCountSqrt_,this.particleCountSqrt_],s,void 0,!0),this.particlePositionProgram_=e.getProgram(this.particlePositionFragmentShader_,this.particlePositionVertexShader_),this.particleColorProgram_=e.getProgram(this.particleColorFragmentShader_,this.particleColorVertexShader_),this.textureProgram_=e.getProgram(this.textureFragmentShader_,this.textureVertexShader_)}createSizeDependentTextures_(){let e=this.helper,t=e.getGL(),n=e.getCanvas(),r=n.width,i=n.height,a=new Uint8Array(r*i*4);this.nextTrailsTexture_&&t.deleteTexture(this.nextTrailsTexture_),this.nextTrailsTexture_=e.createTexture([r,i],a,void 0,!0),this.previousTrailsTexture_&&t.deleteTexture(this.previousTrailsTexture_),this.previousTrailsTexture_=e.createTexture([r,i],a,void 0,!0)}beforeFinalize(e){let t=this.helper,n=t.getGL(),r=t.getCanvas(),i=r.width,a=r.height;(this.renderedWidth_!=i||this.renderedHeight_!=a)&&this.createSizeDependentTextures_();let o=[i,a];this.velocityTexture_=t.createTexture(o,null,this.velocityTexture_??void 0),n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,0,0,i,a,0),this.drawParticleTrails_(e),this.updateParticlePositions_(e),e.animate=!0,this.renderedWidth_=i,this.renderedHeight_=a}drawParticleTrails_(e){let t=this.helper,n=t.getGL();t.bindFrameBuffer(this.framebuffer_??null,this.nextTrailsTexture_??null),this.drawTexture_(this.previousTrailsTexture_??void 0,this.fadeOpacity_),this.drawParticleColor_(e),t.bindInitialFrameBuffer(),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.drawTexture_(this.nextTrailsTexture_??void 0,1),n.disable(n.BLEND);let r=this.nextTrailsTexture_;this.nextTrailsTexture_=this.previousTrailsTexture_,this.previousTrailsTexture_=r}drawTexture_(e,t){if(!e)return;let n=this.helper,r=n.getGL();n.useProgram(this.textureProgram_),n.bindTexture(e,0,j.TEXTURE),n.bindAttribute(this.quadBuffer_,M.POSITION,2),this.helper.setUniformFloatValue(j.OPACITY,t),r.drawArrays(r.TRIANGLES,0,6)}drawParticleColor_(e){let t=this.helper,n=t.getGL();t.useProgram(this.particleColorProgram_);let r=this.particleCountSqrt_*this.particleCountSqrt_;t.bindAttribute(this.particleIndexBuffer_,M.INDEX,1);let i=this.previousPositionTexture_;i&&t.bindTexture(i,0,j.POSITION_TEXTURE);let a=this.velocityTexture_;a&&t.bindTexture(a,1,j.VELOCITY_TEXTURE),this.helper.setUniformFloatValue(j.PARTICLE_COUNT_SQRT,this.particleCountSqrt_);let o=this.tempVec2_;o[0]=Math.cos(-e.viewState.rotation),o[1]=Math.sin(-e.viewState.rotation),this.helper.setUniformFloatVec2(j.ROTATION,o),this.helper.setUniformFloatValue(j.MAX_SPEED,this.maxSpeed_),n.drawArrays(n.POINTS,0,r)}updateParticlePositions_(e){let t=this.helper,n=t.getGL();t.useProgram(this.particlePositionProgram_),n.viewport(0,0,this.particleCountSqrt_,this.particleCountSqrt_),t.bindFrameBuffer(this.framebuffer_??null,this.nextPositionTexture_??null);let r=this.previousPositionTexture_;r&&t.bindTexture(r,0,j.POSITION_TEXTURE);let i=this.velocityTexture_;i&&t.bindTexture(i,1,j.VELOCITY_TEXTURE),t.bindAttribute(this.quadBuffer_,M.POSITION,2),t.setUniformFloatValue(j.RANDOM_SEED,Math.random()),t.setUniformFloatValue(j.SPEED_FACTOR,this.speedFactor_),t.setUniformFloatValue(j.DROP_RATE,this.dropRate_),t.setUniformFloatValue(j.DROP_RATE_BUMP,this.dropRateBump_);let a=this.tempVec2_;a[0]=Math.cos(-e.viewState.rotation),a[1]=Math.sin(-e.viewState.rotation),this.helper.setUniformFloatVec2(j.ROTATION,a);let o=e.size;this.helper.setUniformFloatVec2(j.VIEWPORT_SIZE_PX,[o[0],o[1]]),n.drawArrays(n.TRIANGLES,0,6);let s=this.nextPositionTexture_;this.nextPositionTexture_=this.previousPositionTexture_,this.previousPositionTexture_=s}},F=`
  attribute vec2 ${w.TEXTURE_COORD};
  uniform mat4 ${T.TILE_TRANSFORM};
  uniform float ${T.TEXTURE_PIXEL_WIDTH};
  uniform float ${T.TEXTURE_PIXEL_HEIGHT};
  uniform float ${T.TEXTURE_RESOLUTION};
  uniform float ${T.DEPTH};

  varying vec2 v_textureCoord;
  varying vec2 v_localMapCoord;

  void main() {
    v_textureCoord = ${w.TEXTURE_COORD};
    v_localMapCoord = vec2(
      ${T.TEXTURE_RESOLUTION} * ${T.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
      -1. * ${T.TEXTURE_RESOLUTION} * ${T.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
    );
    gl_Position = ${T.TILE_TRANSFORM} * vec4(${w.TEXTURE_COORD}, ${T.DEPTH}, 1.0);
  }
`,I=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform vec4 ${T.RENDER_EXTENT};
  uniform float ${j.MAX_SPEED};
  uniform sampler2D ${T.TILE_TEXTURE_ARRAY}[1];

  varying vec2 v_textureCoord;
  varying vec2 v_localMapCoord;

  void main() {
    if (
      v_localMapCoord[0] < ${T.RENDER_EXTENT}[0] ||
      v_localMapCoord[1] < ${T.RENDER_EXTENT}[1] ||
      v_localMapCoord[0] > ${T.RENDER_EXTENT}[2] ||
      v_localMapCoord[1] > ${T.RENDER_EXTENT}[3]
    ) {
      discard;
    }

    vec4 velocity = texture2D(${T.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);
    gl_FragColor = vec4((velocity.xy + ${j.MAX_SPEED}) / (2.0 * ${j.MAX_SPEED}), 0, 1);
  }
`,L=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  attribute vec2 ${M.POSITION};

  varying vec2 ${N.POSITION};

  void main() {
    ${N.POSITION} = ${M.POSITION};
    gl_Position = vec4(1.0 - 2.0 * ${M.POSITION}, 0, 1);
  }
`,R=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform sampler2D ${j.TEXTURE};
  uniform float ${j.OPACITY};

  varying vec2 ${N.POSITION};

  void main() {
    vec4 color = texture2D(${j.TEXTURE}, 1.0 - ${N.POSITION});
    gl_FragColor = vec4(floor(255.0 * color * ${j.OPACITY}) / 255.0);
  }
`,z=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform sampler2D ${j.POSITION_TEXTURE};
  uniform sampler2D ${j.VELOCITY_TEXTURE};
  uniform float ${j.RANDOM_SEED};
  uniform float ${j.SPEED_FACTOR};
  uniform float ${j.DROP_RATE};
  uniform float ${j.DROP_RATE_BUMP};
  uniform vec2 ${j.ROTATION};
  uniform vec2 ${j.VIEWPORT_SIZE_PX};

  varying vec2 ${N.POSITION};

  // pseudo-random generator
  const vec3 randConstants = vec3(12.9898, 78.233, 4375.85453);

  float rand(const vec2 co) {
    float t = dot(randConstants.xy, co);
    return fract(sin(t) * (randConstants.z + t));
  }

  void main() {
    vec4 positionColor = texture2D(${j.POSITION_TEXTURE}, ${N.POSITION});

    // decode particle position from pixel RGBA
    vec2 particlePosition = vec2(
      positionColor.r / 255.0 + positionColor.b,
      positionColor.g / 255.0 + positionColor.a
    );

    vec4 velocityColor = texture2D(${j.VELOCITY_TEXTURE}, particlePosition);
    if (velocityColor.a == 0.0) {
      discard;
    }

    float vx = 2.0 * velocityColor.r - 1.0;
    float vy = 2.0 * velocityColor.g - 1.0;

    // normalized veloicty (magnitude 0 - 1)
    vec2 velocity = vec2(
      vx * ${j.ROTATION}.x - vy * ${j.ROTATION}.y,
      vx * ${j.ROTATION}.y + vy * ${j.ROTATION}.x
    );

    // account for aspect ratio (square particle position texture, non-square map)
    float aspectRatio = ${j.VIEWPORT_SIZE_PX}.x / ${j.VIEWPORT_SIZE_PX}.y;
    vec2 offset = vec2(velocity.x / aspectRatio, velocity.y) * ${j.SPEED_FACTOR};

    // update particle position, wrapping around the edge
    particlePosition = fract(1.0 + particlePosition + offset);

    // a random seed to use for the particle drop
    vec2 seed = (particlePosition + ${N.POSITION}) * ${j.RANDOM_SEED};

    // drop rate is a chance a particle will restart at random position, to avoid degeneration
    float dropRate = ${j.DROP_RATE} + length(velocity) * ${j.DROP_RATE_BUMP};
    float drop = step(1.0 - dropRate, rand(seed));

    vec2 randomPosition = vec2(rand(seed + 1.3), rand(seed + 2.1));
    particlePosition = mix(particlePosition, randomPosition, drop);

    // encode the new particle position back into RGBA
    gl_FragColor = vec4(
      fract(particlePosition * 255.0),
      floor(particlePosition * 255.0) / 255.0
    );
  }
`,B=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  attribute float ${M.INDEX};

  uniform sampler2D ${j.POSITION_TEXTURE};
  uniform float ${j.PARTICLE_COUNT_SQRT};

  varying vec2 ${N.POSITION};

  void main() {
    vec4 color = texture2D(
      ${j.POSITION_TEXTURE},
      vec2(
        fract(${M.INDEX} / ${j.PARTICLE_COUNT_SQRT}),
        floor(${M.INDEX} / ${j.PARTICLE_COUNT_SQRT}) / ${j.PARTICLE_COUNT_SQRT}
      )
    );

    ${N.POSITION} = vec2(
      color.r / 255.0 + color.b,
      color.g / 255.0 + color.a
    );

    gl_PointSize = 1.0;
    gl_Position = vec4(
      2.0 * ${N.POSITION}.x - 1.0,
      2.0 * ${N.POSITION}.y - 1.0,
      0,
      1
    );
  }
`;function V(e){let t=x(),n=[];if(e.color!==void 0){let r=C(t,e.color,f);n.push(`color = ${r};`)}if(t.variables.size>1&&!e.variables)throw Error(`Missing variables in style (expected ${Array.from(t.variables.keys())})`);let r={};for(let[n]of t.variables.entries()){let t=e.variables||{};if(!(n in t))throw Error(`Missing '${n}' in style variables`);let i=v(n);r[i]=function(){let e=t[n];return typeof e==`string`&&(e=S(e)),e===void 0?-9999999:e}}let i=Object.keys(r).map(function(e){return`uniform float ${e};`}),a=Object.keys(t.functions).map(function(e){return t.functions[e]});return{tileVertexShader:F,tileFragmentShader:I,particleColorVertexShader:B,particleColorFragmentShader:`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    uniform sampler2D ${j.VELOCITY_TEXTURE};
    uniform float ${j.MAX_SPEED};
    uniform vec2 ${j.ROTATION};

    ${i.join(`
`)}

    varying vec2 ${N.POSITION};
    
    ${a.join(`
`)}

    void main() {
      vec4 velocityColor = texture2D(${j.VELOCITY_TEXTURE}, ${N.POSITION});

      float vx = mix(-${j.MAX_SPEED}, ${j.MAX_SPEED}, velocityColor.r);
      float vy = mix(-${j.MAX_SPEED}, ${j.MAX_SPEED}, velocityColor.g);

      vec2 velocity = vec2(
        vx * ${j.ROTATION}.x - vy * ${j.ROTATION}.y,
        vx * ${j.ROTATION}.y + vy * ${j.ROTATION}.x
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
  `,particlePositionVertexShader:L,particlePositionFragmentShader:z,textureVertexShader:L,textureFragmentShader:R}}var H=[],U=class extends E{constructor(e){let t=Object.assign({},e);if(delete t.maxSpeed,delete t.speedFactor,delete t.particles,super(t),this.style_=e.style||{},!(e.maxSpeed>0))throw Error(`maxSpeed is required`);this.maxSpeed_=e.maxSpeed,this.speedFactor_=e.speedFactor??.001,this.particles_=e.particles??65536,this.styleVariables_=this.style_.variables||{},this.addChangeListener(m.SOURCE,this.handleSourceUpdate_)}handleSourceUpdate_(){let e=this.getRenderer();e&&e.clearCache()}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}getSources(e,t){let n=this.getSource();return H.length=0,n&&H.push(n),H}createRenderer(){let e=V(this.style_);return new P(this,{...e,cacheSize:this.getCacheSize(),maxSpeed:this.maxSpeed_,speedFactor:this.speedFactor_,particles:this.particles_})}};U.prototype.dispose;var W=[`*`],G=class f{wolMaxSpeed=o.required();wolSpeedFactor=o();wolParticles=o();wolStyle=o();wolClassName=o();wolOpacity=s();wolVisible=s();wolExtent=s();wolZIndex=s();wolMinResolution=s();wolMaxResolution=s();wolMinZoom=s();wolMaxZoom=s();wolPreload=s();wolSource=s();wolUseInterimTilesOnError=s();wolCacheSize=o();wolProperties=o();wolChange=r();wolError=r();wolPostRender=r();wolPreRender=r();wolPropertyChange=r();wolSourceReady=r();instance=a(null);constructor(){let e=t(c),n=p(`FlowLayer`),r={};u(()=>{let e=new U({maxSpeed:this.wolMaxSpeed(),speedFactor:this.wolSpeedFactor(),particles:this.wolParticles(),style:this.wolStyle(),className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),preload:this.wolPreload(),source:this.wolSource()??void 0,useInterimTilesOnError:this.wolUseInterimTilesOnError(),cacheSize:this.wolCacheSize()});this.wolProperties()&&e.setProperties(this.wolProperties()??{},!0),r.change=e.on(`change`,e=>this.wolChange.emit(e)),r[`change:extent`]=e.on(`change:extent`,()=>this.wolExtent.set(e.getExtent())),r[`change:maxResolution`]=e.on(`change:maxResolution`,()=>this.wolMaxResolution.set(e.getMaxResolution())),r[`change:maxZoom`]=e.on(`change:maxZoom`,()=>this.wolMaxZoom.set(e.getMaxZoom())),r[`change:minResolution`]=e.on(`change:minResolution`,()=>this.wolMinResolution.set(e.getMinResolution())),r[`change:minZoom`]=e.on(`change:minZoom`,()=>this.wolMinZoom.set(e.getMinZoom())),r[`change:opacity`]=e.on(`change:opacity`,()=>this.wolOpacity.set(e.getOpacity())),r[`change:preload`]=e.on(`change:preload`,()=>this.wolPreload.set(e.getPreload())),r[`change:source`]=e.on(`change:source`,()=>this.wolSource.set(e.getSource())),r[`change:useInterimTilesOnError`]=e.on(`change:useInterimTilesOnError`,()=>this.wolUseInterimTilesOnError.set(e.getUseInterimTilesOnError())),r[`change:visible`]=e.on(`change:visible`,()=>this.wolVisible.set(e.getVisible())),r[`change:zIndex`]=e.on(`change:zIndex`,()=>this.wolZIndex.set(e.getZIndex())),r.error=e.on(`error`,e=>this.wolError.emit(e)),r.postrender=e.on(`postrender`,e=>this.wolPostRender.emit(e)),r.prerender=e.on(`prerender`,e=>this.wolPreRender.emit(e)),r.propertychange=e.on(`propertychange`,e=>this.wolPropertyChange.emit(e)),r.sourceready=e.on(`sourceready`,e=>this.wolSourceReady.emit(e)),Promise.resolve().then(()=>{n.addLayer(e)}),this.instance.set(e)}),e.onDestroy(()=>{d(Object.values(r));let e=this.instance();e&&(n.removeLayer(e),e.dispose(),this.instance.set(null))})}ngOnChanges(e){let t=this.instance();if(t)for(let[n,r]of Object.entries(e))switch(n){case`wolExtent`:t.setExtent(r.currentValue);break;case`wolMaxResolution`:t.setMaxResolution(r.currentValue);break;case`wolMaxZoom`:t.setMaxZoom(r.currentValue);break;case`wolMinResolution`:t.setMinResolution(r.currentValue);break;case`wolMinZoom`:t.setMinZoom(r.currentValue);break;case`wolOpacity`:t.setOpacity(r.currentValue);break;case`wolPreload`:t.setPreload(r.currentValue);break;case`wolSource`:t.setSource(r.currentValue??null);break;case`wolUseInterimTilesOnError`:t.setUseInterimTilesOnError(r.currentValue);break;case`wolVisible`:t.setVisible(r.currentValue);break;case`wolZIndex`:t.setZIndex(r.currentValue);break;case`wolProperties`:t.setProperties(r.currentValue??{});break;case`wolStyle`:t.updateStyleVariables(r.currentValue)}}getInstance(){return this.instance()??void 0}static ɵfac=function(e){return new(e||f)};static ɵcmp=n({type:f,selectors:[[`wol-flow-layer`]],inputs:{wolMaxSpeed:[1,`wolMaxSpeed`],wolSpeedFactor:[1,`wolSpeedFactor`],wolParticles:[1,`wolParticles`],wolStyle:[1,`wolStyle`],wolClassName:[1,`wolClassName`],wolOpacity:[1,`wolOpacity`],wolVisible:[1,`wolVisible`],wolExtent:[1,`wolExtent`],wolZIndex:[1,`wolZIndex`],wolMinResolution:[1,`wolMinResolution`],wolMaxResolution:[1,`wolMaxResolution`],wolMinZoom:[1,`wolMinZoom`],wolMaxZoom:[1,`wolMaxZoom`],wolPreload:[1,`wolPreload`],wolSource:[1,`wolSource`],wolUseInterimTilesOnError:[1,`wolUseInterimTilesOnError`],wolCacheSize:[1,`wolCacheSize`],wolProperties:[1,`wolProperties`]},outputs:{wolOpacity:`wolOpacityChange`,wolVisible:`wolVisibleChange`,wolExtent:`wolExtentChange`,wolZIndex:`wolZIndexChange`,wolMinResolution:`wolMinResolutionChange`,wolMaxResolution:`wolMaxResolutionChange`,wolMinZoom:`wolMinZoomChange`,wolMaxZoom:`wolMaxZoomChange`,wolPreload:`wolPreloadChange`,wolSource:`wolSourceChange`,wolUseInterimTilesOnError:`wolUseInterimTilesOnErrorChange`,wolChange:`wolChange`,wolError:`wolError`,wolPostRender:`wolPostRender`,wolPreRender:`wolPreRender`,wolPropertyChange:`wolPropertyChange`,wolSourceReady:`wolSourceReady`},exportAs:[`wolFlowLayer`],features:[i],ngContentSelectors:W,decls:1,vars:0,template:function(t,n){t&1&&(l(),e(0))},encapsulation:2})};function K(e){let n={host:!0,optional:!0},r=t(A,n),i=t(D,n),a=t(O,n),o=t(G,n);if(r)return{setSource:e=>(r.addSource(e),()=>{r.removeSource(e)}),getInstance:()=>r.getInstance()};if(i)return{setSource:e=>(i.getInstance()?.setSource(e),()=>{i.getInstance()?.setSource(null)}),getInstance:()=>i.getInstance()};if(a)return{setSource:e=>(a.getInstance()?.setSource(e),()=>{a.getInstance()?.setSource(null)}),getInstance:()=>a.getInstance()};if(o)return{setSource:e=>(o.getInstance()?.setSource(e),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};throw Error(`No TileSource host found. Please wrap the ${e} component in a RasterSource, WebGLTileLayer, FlowLayer or TileLayer component.`)}var q=[`*`],J=class a{wolLoader=o();wolAttributions=o();wolAttributionsCollapsible=o();wolMaxZoom=o();wolMinZoom=o();wolTileSize=o();wolGutter=o();wolMaxResolution=o();wolProjection=o();wolTileGrid=o();wolState=o();wolWrapX=o();wolTransition=o();wolBandCount=o();wolHasAlpha=o();wolInterpolate=o();wolCrop=o();wolKey=o();wolZDirection=o();wolProperties=o();wolChange=r();wolError=r();wolPropertychange=r();wolTileLoadEnd=r();wolTileLoadError=r();wolTileLoadStart=r();instance;constructor(){let e=t(c),n=K(`DataTileSource`),r={},i;u(()=>{let e=new k({loader:this.wolLoader(),attributions:this.wolAttributions(),attributionsCollapsible:this.wolAttributionsCollapsible(),maxZoom:this.wolMaxZoom(),minZoom:this.wolMinZoom(),tileSize:this.wolTileSize(),gutter:this.wolGutter(),maxResolution:this.wolMaxResolution(),projection:this.wolProjection(),tileGrid:this.wolTileGrid(),state:this.wolState(),wrapX:this.wolWrapX(),transition:this.wolTransition(),bandCount:this.wolBandCount(),hasAlpha:this.wolHasAlpha(),interpolate:this.wolInterpolate(),crossOrigin:this.wolCrop(),key:this.wolKey(),zDirection:this.wolZDirection()});this.wolProperties()||e.setProperties(this.wolProperties()??{},!0),r.change=e.on(`change`,e=>this.wolChange.emit(e)),r.error=e.on(`error`,e=>this.wolError.emit(e)),r.propertychange=e.on(`propertychange`,e=>this.wolPropertychange.emit(e)),r.tileloadend=e.on(`tileloadend`,e=>this.wolTileLoadEnd.emit(e)),r.tileloaderror=e.on(`tileloaderror`,e=>this.wolTileLoadError.emit(e)),r.tileloadstart=e.on(`tileloadstart`,e=>this.wolTileLoadStart.emit(e)),Promise.resolve().then(()=>{i=n.setSource(e)}),this.instance=e}),e.onDestroy(()=>{i&&i(),d(Object.values(r)),this.instance=void 0})}ngOnChanges(e){if(!this.instance)return;let t=this.wolProjection(),n=this.wolTileGrid();for(let[r,i]of Object.entries(e))switch(r){case`wolAttributions`:this.instance.setAttributions(i.currentValue);break;case`wolProperties`:this.instance.setProperties(i.currentValue??{});break;case`wolProjection`:case`wolTileGrid`:t&&n&&this.instance.setTileGridForProjection(t,n)}}getInstance(){return this.instance}static ɵfac=function(e){return new(e||a)};static ɵcmp=n({type:a,selectors:[[`wol-data-tile-source`]],inputs:{wolLoader:[1,`wolLoader`],wolAttributions:[1,`wolAttributions`],wolAttributionsCollapsible:[1,`wolAttributionsCollapsible`],wolMaxZoom:[1,`wolMaxZoom`],wolMinZoom:[1,`wolMinZoom`],wolTileSize:[1,`wolTileSize`],wolGutter:[1,`wolGutter`],wolMaxResolution:[1,`wolMaxResolution`],wolProjection:[1,`wolProjection`],wolTileGrid:[1,`wolTileGrid`],wolState:[1,`wolState`],wolWrapX:[1,`wolWrapX`],wolTransition:[1,`wolTransition`],wolBandCount:[1,`wolBandCount`],wolHasAlpha:[1,`wolHasAlpha`],wolInterpolate:[1,`wolInterpolate`],wolCrop:[1,`wolCrop`],wolKey:[1,`wolKey`],wolZDirection:[1,`wolZDirection`],wolProperties:[1,`wolProperties`]},outputs:{wolChange:`wolChange`,wolError:`wolError`,wolPropertychange:`wolPropertychange`,wolTileLoadEnd:`wolTileLoadEnd`,wolTileLoadError:`wolTileLoadError`,wolTileLoadStart:`wolTileLoadStart`},features:[i],ngContentSelectors:q,decls:1,vars:0,template:function(t,n){t&1&&(l(),e(0))},encapsulation:2})};export{K as n,G as r,J as t};