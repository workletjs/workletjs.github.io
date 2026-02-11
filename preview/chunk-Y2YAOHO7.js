import{a as K}from"./chunk-WA6EE36Y.js";import{a as B,b as q}from"./chunk-FM3M7QEU.js";import{b as Y}from"./chunk-Y32APIM2.js";import{a as G}from"./chunk-VA2WCKD7.js";import{a as C,c as b,e as N,f as D,i as s,j as P,k as W,n as j,p as H,q as z,v as k}from"./chunk-32UR65R6.js";import{Eb as X,ub as V,v,wc as Z}from"./chunk-H4U5SDNF.js";import{Aa as x,Ba as U,P as $,S as w,Sb as d,Tb as l,Wb as m,_,ca as F,fa as E,kb as y,lb as R,ra as S}from"./chunk-DTKK3HU7.js";import{a as A,b as L}from"./chunk-TWZW5B45.js";var i={TEXTURE:"u_texture",VELOCITY_TEXTURE:"u_velocityTexture",POSITION_TEXTURE:"u_positionTexture",PARTICLE_COUNT_SQRT:"u_particleCountSqrt",MAX_SPEED:"u_maxSpeed",GAIN:"u_gain",OFFSET:"u_offset",IS_FLOAT:"u_isFloat",RANDOM_SEED:"u_randomSeed",SPEED_FACTOR:"u_speedFactor",DROP_RATE:"u_dropRate",DROP_RATE_BUMP:"u_dropRateBump",OPACITY:"u_opacity",ROTATION:D.ROTATION,VIEWPORT_SIZE_PX:D.VIEWPORT_SIZE_PX},T={POSITION:"a_position",INDEX:"a_index"},p={POSITION:"v_position"},M=class extends W{constructor(r,e){super(r,{vertexShader:e.tileVertexShader,fragmentShader:e.tileFragmentShader,cacheSize:e.cacheSize,postProcesses:[{}],uniforms:{[i.MAX_SPEED]:e.maxSpeed}}),this.particleColorFragmentShader_=e.particleColorFragmentShader,this.velocityTexture_=null,this.particleCountSqrt_=e.particles?Math.ceil(Math.sqrt(e.particles)):256,this.particleIndexBuffer_,this.quadBuffer_,this.particlePositionProgram_,this.particlePositionVertexShader_=e.particlePositionVertexShader,this.particlePositionFragmentShader_=e.particlePositionFragmentShader,this.previousPositionTexture_,this.nextPositionTexture_,this.particleColorProgram_,this.particleColorVertexShader_=e.particleColorVertexShader,this.particleColorFragmentShader_=e.particleColorFragmentShader,this.textureProgram_,this.textureVertexShader_=e.textureVertexShader,this.textureFragmentShader_=e.textureFragmentShader,this.previousTrailsTexture_,this.nextTrailsTexture_,this.fadeOpacity_=.996,this.maxSpeed_=e.maxSpeed,this.speedFactor_=e.speedFactor||.001,this.dropRate_=.003,this.dropRateBump_=.01,this.tempVec2_=[0,0],this.renderedWidth_=0,this.renderedHeight_=0}afterHelperCreated(){super.afterHelperCreated();let r=this.helper,e=r.getGL();this.framebuffer_=e.createFramebuffer();let t=this.particleCountSqrt_*this.particleCountSqrt_,o=new Float32Array(t);for(let h=0;h<t;++h)o[h]=h;let n=new N(C,b);n.setArray(o),r.flushBufferData(n),this.particleIndexBuffer_=n;let a=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),f=new N(C,b);f.setArray(a),r.flushBufferData(f),this.quadBuffer_=f;let u=new Uint8Array(t*4);for(let h=0;h<u.length;++h)u[h]=Math.floor(Math.random()*256);this.previousPositionTexture_=r.createTexture([this.particleCountSqrt_,this.particleCountSqrt_],u,null,!0),this.nextPositionTexture_=r.createTexture([this.particleCountSqrt_,this.particleCountSqrt_],u,null,!0),this.particlePositionProgram_=r.getProgram(this.particlePositionFragmentShader_,this.particlePositionVertexShader_),this.particleColorProgram_=r.getProgram(this.particleColorFragmentShader_,this.particleColorVertexShader_),this.textureProgram_=r.getProgram(this.textureFragmentShader_,this.textureVertexShader_)}createSizeDependentTextures_(){let r=this.helper,e=r.getGL(),t=r.getCanvas(),o=t.width,n=t.height,a=new Uint8Array(o*n*4);this.nextTrailsTexture_&&e.deleteTexture(this.nextTrailsTexture_),this.nextTrailsTexture_=r.createTexture([o,n],a,null,!0),this.previousTrailsTexture_&&e.deleteTexture(this.previousTrailsTexture_),this.previousTrailsTexture_=r.createTexture([o,n],a,null,!0)}beforeFinalize(r){let e=this.helper,t=e.getGL(),o=e.getCanvas(),n=o.width,a=o.height;(this.renderedWidth_!=n||this.renderedHeight_!=a)&&this.createSizeDependentTextures_();let f=[n,a];this.velocityTexture_=e.createTexture(f,null,this.velocityTexture_),t.copyTexImage2D(t.TEXTURE_2D,0,t.RGBA,0,0,n,a,0),this.drawParticleTrails_(r),this.updateParticlePositions_(r),r.animate=!0,this.renderedWidth_=n,this.renderedHeight_=a}drawParticleTrails_(r){let e=this.helper,t=e.getGL();e.bindFrameBuffer(this.framebuffer_,this.nextTrailsTexture_),this.drawTexture_(this.previousTrailsTexture_,this.fadeOpacity_),this.drawParticleColor_(r),e.bindInitialFrameBuffer(),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),this.drawTexture_(this.nextTrailsTexture_,1),t.disable(t.BLEND);let o=this.nextTrailsTexture_;this.nextTrailsTexture_=this.previousTrailsTexture_,this.previousTrailsTexture_=o}drawTexture_(r,e){let t=this.helper,o=t.getGL();t.useProgram(this.textureProgram_),t.bindTexture(r,0,i.TEXTURE),t.bindAttribute(this.quadBuffer_,T.POSITION,2),this.helper.setUniformFloatValue(i.OPACITY,e),o.drawArrays(o.TRIANGLES,0,6)}drawParticleColor_(r){let e=this.helper,t=e.getGL();e.useProgram(this.particleColorProgram_);let o=this.particleCountSqrt_*this.particleCountSqrt_;e.bindAttribute(this.particleIndexBuffer_,T.INDEX,1),e.bindTexture(this.previousPositionTexture_,0,i.POSITION_TEXTURE),e.bindTexture(this.velocityTexture_,1,i.VELOCITY_TEXTURE),this.helper.setUniformFloatValue(i.PARTICLE_COUNT_SQRT,this.particleCountSqrt_);let n=this.tempVec2_;n[0]=Math.cos(-r.viewState.rotation),n[1]=Math.sin(-r.viewState.rotation),this.helper.setUniformFloatVec2(i.ROTATION,n),this.helper.setUniformFloatValue(i.MAX_SPEED,this.maxSpeed_),t.drawArrays(t.POINTS,0,o)}updateParticlePositions_(r){let e=this.helper,t=e.getGL();e.useProgram(this.particlePositionProgram_),t.viewport(0,0,this.particleCountSqrt_,this.particleCountSqrt_),e.bindFrameBuffer(this.framebuffer_,this.nextPositionTexture_),e.bindTexture(this.previousPositionTexture_,0,i.POSITION_TEXTURE),e.bindTexture(this.velocityTexture_,1,i.VELOCITY_TEXTURE),e.bindAttribute(this.quadBuffer_,T.POSITION,2),e.setUniformFloatValue(i.RANDOM_SEED,Math.random()),e.setUniformFloatValue(i.SPEED_FACTOR,this.speedFactor_),e.setUniformFloatValue(i.DROP_RATE,this.dropRate_),e.setUniformFloatValue(i.DROP_RATE_BUMP,this.dropRateBump_);let o=this.tempVec2_;o[0]=Math.cos(-r.viewState.rotation),o[1]=Math.sin(-r.viewState.rotation),this.helper.setUniformFloatVec2(i.ROTATION,o);let n=r.size;this.helper.setUniformFloatVec2(i.VIEWPORT_SIZE_PX,[n[0],n[1]]),t.drawArrays(t.TRIANGLES,0,6);let a=this.nextPositionTexture_;this.nextPositionTexture_=this.previousPositionTexture_,this.previousPositionTexture_=a}},Q=M;var ae=`
  attribute vec2 ${P.TEXTURE_COORD};
  uniform mat4 ${s.TILE_TRANSFORM};
  uniform float ${s.TEXTURE_PIXEL_WIDTH};
  uniform float ${s.TEXTURE_PIXEL_HEIGHT};
  uniform float ${s.TEXTURE_RESOLUTION};
  uniform float ${s.TEXTURE_ORIGIN_X};
  uniform float ${s.TEXTURE_ORIGIN_Y};
  uniform float ${s.DEPTH};

  varying vec2 v_textureCoord;
  varying vec2 v_mapCoord;

  void main() {
    v_textureCoord = ${P.TEXTURE_COORD};
    v_mapCoord = vec2(
      ${s.TEXTURE_ORIGIN_X} + ${s.TEXTURE_RESOLUTION} * ${s.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
      ${s.TEXTURE_ORIGIN_Y} - ${s.TEXTURE_RESOLUTION} * ${s.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
    );
    gl_Position = ${s.TILE_TRANSFORM} * vec4(${P.TEXTURE_COORD}, ${s.DEPTH}, 1.0);
  }
`,le=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform vec4 ${s.RENDER_EXTENT};
  uniform float ${i.MAX_SPEED};
  uniform sampler2D ${s.TILE_TEXTURE_ARRAY}[1];

  varying vec2 v_textureCoord;
  varying vec2 v_mapCoord;

  void main() {
    if (
      v_mapCoord[0] < ${s.RENDER_EXTENT}[0] ||
      v_mapCoord[1] < ${s.RENDER_EXTENT}[1] ||
      v_mapCoord[0] > ${s.RENDER_EXTENT}[2] ||
      v_mapCoord[1] > ${s.RENDER_EXTENT}[3]
    ) {
      discard;
    }

    vec4 velocity = texture2D(${s.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);
    gl_FragColor = vec4((velocity.xy + ${i.MAX_SPEED}) / (2.0 * ${i.MAX_SPEED}), 0, 1);
  }
`,J=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  attribute vec2 ${T.POSITION};

  varying vec2 ${p.POSITION};

  void main() {
    ${p.POSITION} = ${T.POSITION};
    gl_Position = vec4(1.0 - 2.0 * ${T.POSITION}, 0, 1);
  }
`,se=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform sampler2D ${i.TEXTURE};
  uniform float ${i.OPACITY};

  varying vec2 ${p.POSITION};

  void main() {
    vec4 color = texture2D(${i.TEXTURE}, 1.0 - ${p.POSITION});
    gl_FragColor = vec4(floor(255.0 * color * ${i.OPACITY}) / 255.0);
  }
`,ce=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform sampler2D ${i.POSITION_TEXTURE};
  uniform sampler2D ${i.VELOCITY_TEXTURE};
  uniform float ${i.RANDOM_SEED};
  uniform float ${i.SPEED_FACTOR};
  uniform float ${i.DROP_RATE};
  uniform float ${i.DROP_RATE_BUMP};
  uniform vec2 ${i.ROTATION};
  uniform vec2 ${i.VIEWPORT_SIZE_PX};

  varying vec2 ${p.POSITION};

  // pseudo-random generator
  const vec3 randConstants = vec3(12.9898, 78.233, 4375.85453);

  float rand(const vec2 co) {
    float t = dot(randConstants.xy, co);
    return fract(sin(t) * (randConstants.z + t));
  }

  void main() {
    vec4 positionColor = texture2D(${i.POSITION_TEXTURE}, ${p.POSITION});

    // decode particle position from pixel RGBA
    vec2 particlePosition = vec2(
      positionColor.r / 255.0 + positionColor.b,
      positionColor.g / 255.0 + positionColor.a
    );

    vec4 velocityColor = texture2D(${i.VELOCITY_TEXTURE}, particlePosition);
    if (velocityColor.a == 0.0) {
      discard;
    }

    float vx = 2.0 * velocityColor.r - 1.0;
    float vy = 2.0 * velocityColor.g - 1.0;

    // normalized veloicty (magnitude 0 - 1)
    vec2 velocity = vec2(
      vx * ${i.ROTATION}.x - vy * ${i.ROTATION}.y,
      vx * ${i.ROTATION}.y + vy * ${i.ROTATION}.x
    );

    // account for aspect ratio (square particle position texture, non-square map)
    float aspectRatio = ${i.VIEWPORT_SIZE_PX}.x / ${i.VIEWPORT_SIZE_PX}.y;
    vec2 offset = vec2(velocity.x / aspectRatio, velocity.y) * ${i.SPEED_FACTOR};

    // update particle position, wrapping around the edge
    particlePosition = fract(1.0 + particlePosition + offset);

    // a random seed to use for the particle drop
    vec2 seed = (particlePosition + ${p.POSITION}) * ${i.RANDOM_SEED};

    // drop rate is a chance a particle will restart at random position, to avoid degeneration
    float dropRate = ${i.DROP_RATE} + length(velocity) * ${i.DROP_RATE_BUMP};
    float drop = step(1.0 - dropRate, rand(seed));

    vec2 randomPosition = vec2(rand(seed + 1.3), rand(seed + 2.1));
    particlePosition = mix(particlePosition, randomPosition, drop);

    // encode the new particle position back into RGBA
    gl_FragColor = vec4(
      fract(particlePosition * 255.0),
      floor(particlePosition * 255.0) / 255.0
    );
  }
`,ue=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  attribute float ${T.INDEX};

  uniform sampler2D ${i.POSITION_TEXTURE};
  uniform float ${i.PARTICLE_COUNT_SQRT};

  varying vec2 ${p.POSITION};

  void main() {
    vec4 color = texture2D(
      ${i.POSITION_TEXTURE},
      vec2(
        fract(${T.INDEX} / ${i.PARTICLE_COUNT_SQRT}),
        floor(${T.INDEX} / ${i.PARTICLE_COUNT_SQRT}) / ${i.PARTICLE_COUNT_SQRT}
      )
    );

    ${p.POSITION} = vec2(
      color.r / 255.0 + color.b,
      color.g / 255.0 + color.a
    );

    gl_PointSize = 1.0;
    gl_Position = vec4(
      2.0 * ${p.POSITION}.x - 1.0,
      2.0 * ${p.POSITION}.y - 1.0,
      0,
      1
    );
  }
`;function de(c){let r=z(),e=[];if(c.color!==void 0){let u=k(r,c.color,X);e.push(`color = ${u};`)}let t=Object.keys(r.variables);if(t.length>1&&!c.variables)throw new Error(`Missing variables in style (expected ${r.variables})`);let o={};for(let u of t){if(!(u in c.variables))throw new Error(`Missing '${u}' in style variables`);let h=H(u);o[h]=function(){let g=c.variables[u];return typeof g=="string"&&(g=j(g)),g!==void 0?g:-9999999}}let n=Object.keys(o).map(function(u){return`uniform float ${u};`}),a=Object.keys(r.functions).map(function(u){return r.functions[u]}),f=`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    uniform sampler2D ${i.VELOCITY_TEXTURE};
    uniform float ${i.MAX_SPEED};
    uniform vec2 ${i.ROTATION};

    ${n.join(`
`)}

    varying vec2 ${p.POSITION};
    
    ${a.join(`
`)}

    void main() {
      vec4 velocityColor = texture2D(${i.VELOCITY_TEXTURE}, ${p.POSITION});

      float vx = mix(-${i.MAX_SPEED}, ${i.MAX_SPEED}, velocityColor.r);
      float vy = mix(-${i.MAX_SPEED}, ${i.MAX_SPEED}, velocityColor.g);

      vec2 velocity = vec2(
        vx * ${i.ROTATION}.x - vy * ${i.ROTATION}.y,
        vx * ${i.ROTATION}.y + vy * ${i.ROTATION}.x
      );

      float a_prop_speed = length(velocity);

      vec4 color;

      ${e.join(`
`)}

      if (color.a == 0.0) {
        discard;
      }

      gl_FragColor = color;
    }
  `;return{tileVertexShader:ae,tileFragmentShader:le,particleColorVertexShader:ue,particleColorFragmentShader:f,particlePositionVertexShader:J,particlePositionFragmentShader:ce,textureVertexShader:J,textureFragmentShader:se}}var ee=[],I=class extends G{constructor(r){let e=Object.assign({},r);if(delete e.maxSpeed,delete e.speedFactor,delete e.particles,super(e),this.style_=r.style||{},!(r.maxSpeed>0))throw new Error("maxSpeed is required");this.maxSpeed_=r.maxSpeed,this.speedFactor_=r.speedFactor,this.particles_=r.particles,this.styleVariables_=this.style_.variables||{},this.addChangeListener(V.SOURCE,this.handleSourceUpdate_)}handleSourceUpdate_(){this.hasRenderer()&&this.getRenderer().clearCache()}updateStyleVariables(r){Object.assign(this.styleVariables_,r),this.changed()}getSources(r,e){let t=this.getSource();return ee[0]=t,ee}createRenderer(){let r=de(this.style_);return new Q(this,L(A({},r),{cacheSize:this.getCacheSize(),maxSpeed:this.maxSpeed_,speedFactor:this.speedFactor_,particles:this.particles_}))}};I.prototype.dispose;var oe=I;var me=["*"],O=class c{wolMaxSpeed=l.required();wolSpeedFactor=l();wolParticles=l();wolStyle=l();wolClassName=l();wolOpacity=m();wolVisible=m();wolExtent=m();wolZIndex=m();wolMinResolution=m();wolMaxResolution=m();wolMinZoom=m();wolMaxZoom=m();wolPreload=m();wolSource=m();wolUseInterimTilesOnError=m();wolCacheSize=l();wolProperties=l();wolChange=d();wolError=d();wolPostRender=d();wolPreRender=d();wolPropertyChange=d();wolSourceReady=d();instance=F(null);constructor(){let r=w(_),e=Z("FlowLayer"),t={};S(()=>{let o=new oe({maxSpeed:this.wolMaxSpeed(),speedFactor:this.wolSpeedFactor(),particles:this.wolParticles(),style:this.wolStyle(),className:this.wolClassName(),opacity:this.wolOpacity(),visible:this.wolVisible(),extent:this.wolExtent(),zIndex:this.wolZIndex(),minResolution:this.wolMinResolution(),maxResolution:this.wolMaxResolution(),minZoom:this.wolMinZoom(),maxZoom:this.wolMaxZoom(),preload:this.wolPreload(),source:this.wolSource()??void 0,useInterimTilesOnError:this.wolUseInterimTilesOnError(),cacheSize:this.wolCacheSize()});this.wolProperties()&&o.setProperties(this.wolProperties()??{},!0),t.change=o.on("change",n=>this.wolChange.emit(n)),t["change:extent"]=o.on("change:extent",()=>this.wolExtent.set(o.getExtent())),t["change:maxResolution"]=o.on("change:maxResolution",()=>this.wolMaxResolution.set(o.getMaxResolution())),t["change:maxZoom"]=o.on("change:maxZoom",()=>this.wolMaxZoom.set(o.getMaxZoom())),t["change:minResolution"]=o.on("change:minResolution",()=>this.wolMinResolution.set(o.getMinResolution())),t["change:minZoom"]=o.on("change:minZoom",()=>this.wolMinZoom.set(o.getMinZoom())),t["change:opacity"]=o.on("change:opacity",()=>this.wolOpacity.set(o.getOpacity())),t["change:preload"]=o.on("change:preload",()=>this.wolPreload.set(o.getPreload())),t["change:source"]=o.on("change:source",()=>this.wolSource.set(o.getSource())),t["change:useInterimTilesOnError"]=o.on("change:useInterimTilesOnError",()=>this.wolUseInterimTilesOnError.set(o.getUseInterimTilesOnError())),t["change:visible"]=o.on("change:visible",()=>this.wolVisible.set(o.getVisible())),t["change:zIndex"]=o.on("change:zIndex",()=>this.wolZIndex.set(o.getZIndex())),t.error=o.on("error",n=>this.wolError.emit(n)),t.postrender=o.on("postrender",n=>this.wolPostRender.emit(n)),t.prerender=o.on("prerender",n=>this.wolPreRender.emit(n)),t.propertychange=o.on("propertychange",n=>this.wolPropertyChange.emit(n)),t.sourceready=o.on("sourceready",n=>this.wolSourceReady.emit(n)),Promise.resolve().then(()=>{e.addLayer(o)}),this.instance.set(o)}),r.onDestroy(()=>{v(Object.values(t));let o=this.instance();o&&(e.removeLayer(o),o.dispose(),this.instance.set(null))})}ngOnChanges(r){let e=this.instance();if(e)for(let[t,o]of Object.entries(r))switch(t){case"wolExtent":e.setExtent(o.currentValue);break;case"wolMaxResolution":e.setMaxResolution(o.currentValue);break;case"wolMaxZoom":e.setMaxZoom(o.currentValue);break;case"wolMinResolution":e.setMinResolution(o.currentValue);break;case"wolMinZoom":e.setMinZoom(o.currentValue);break;case"wolOpacity":e.setOpacity(o.currentValue);break;case"wolPreload":e.setPreload(o.currentValue);break;case"wolSource":e.setSource(o.currentValue??null);break;case"wolUseInterimTilesOnError":e.setUseInterimTilesOnError(o.currentValue);break;case"wolVisible":e.setVisible(o.currentValue);break;case"wolZIndex":e.setZIndex(o.currentValue);break;case"wolProperties":e.setProperties(o.currentValue??{});break;case"wolStyle":e.updateStyleVariables(o.currentValue);break}}getInstance(){return this.instance()??void 0}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=x({type:c,selectors:[["wol-flow-layer"]],inputs:{wolMaxSpeed:[1,"wolMaxSpeed"],wolSpeedFactor:[1,"wolSpeedFactor"],wolParticles:[1,"wolParticles"],wolStyle:[1,"wolStyle"],wolClassName:[1,"wolClassName"],wolOpacity:[1,"wolOpacity"],wolVisible:[1,"wolVisible"],wolExtent:[1,"wolExtent"],wolZIndex:[1,"wolZIndex"],wolMinResolution:[1,"wolMinResolution"],wolMaxResolution:[1,"wolMaxResolution"],wolMinZoom:[1,"wolMinZoom"],wolMaxZoom:[1,"wolMaxZoom"],wolPreload:[1,"wolPreload"],wolSource:[1,"wolSource"],wolUseInterimTilesOnError:[1,"wolUseInterimTilesOnError"],wolCacheSize:[1,"wolCacheSize"],wolProperties:[1,"wolProperties"]},outputs:{wolOpacity:"wolOpacityChange",wolVisible:"wolVisibleChange",wolExtent:"wolExtentChange",wolZIndex:"wolZIndexChange",wolMinResolution:"wolMinResolutionChange",wolMaxResolution:"wolMaxResolutionChange",wolMinZoom:"wolMinZoomChange",wolMaxZoom:"wolMaxZoomChange",wolPreload:"wolPreloadChange",wolSource:"wolSourceChange",wolUseInterimTilesOnError:"wolUseInterimTilesOnErrorChange",wolChange:"wolChange",wolError:"wolError",wolPostRender:"wolPostRender",wolPreRender:"wolPreRender",wolPropertyChange:"wolPropertyChange",wolSourceReady:"wolSourceReady"},exportAs:["wolFlowLayer"],features:[E],ngContentSelectors:me,decls:1,vars:0,template:function(e,t){e&1&&(y(),R(0))},encapsulation:2,changeDetection:0})};function re(c){let r={host:!0,optional:!0},e=w(Y,r),t=w(q,r),o=w(B,r),n=w(O,r);if(e)return{setSource:a=>(e.addSource(a),()=>{e.removeSource(a)}),getInstance:()=>e.getInstance()};if(t)return{setSource:a=>(t.getInstance()?.setSource(a),()=>{t.getInstance()?.setSource(null)}),getInstance:()=>t.getInstance()};if(o)return{setSource:a=>(o.getInstance()?.setSource(a),()=>{o.getInstance()?.setSource(null)}),getInstance:()=>o.getInstance()};if(n)return{setSource:a=>(n.getInstance()?.setSource(a),()=>{n.getInstance()?.setSource(null)}),getInstance:()=>n.getInstance()};throw new Error(`No TileSource host found. Please wrap the ${c} component in a RasterSource, WebGLTileLayer, FlowLayer or TileLayer component.`)}var he=["*"],ie=class c{wolLoader=l();wolAttributions=l();wolAttributionsCollapsible=l();wolMaxZoom=l();wolMinZoom=l();wolTileSize=l();wolGutter=l();wolMaxResolution=l();wolProjection=l();wolTileGrid=l();wolState=l();wolWrapX=l();wolTransition=l();wolBandCount=l();wolInterpolate=l();wolCrop=l();wolKey=l();wolZDirection=l();wolProperties=l();wolChange=d();wolError=d();wolPropertychange=d();wolTileLoadEnd=d();wolTileLoadError=d();wolTileLoadStart=d();instance;constructor(){let r=w(_),e=re("DataTileSource"),t={},o;S(()=>{let n=new K({loader:this.wolLoader(),attributions:this.wolAttributions(),attributionsCollapsible:this.wolAttributionsCollapsible(),maxZoom:this.wolMaxZoom(),minZoom:this.wolMinZoom(),tileSize:this.wolTileSize(),gutter:this.wolGutter(),maxResolution:this.wolMaxResolution(),projection:this.wolProjection(),tileGrid:this.wolTileGrid(),state:this.wolState(),wrapX:this.wolWrapX(),transition:this.wolTransition(),bandCount:this.wolBandCount(),interpolate:this.wolInterpolate(),crossOrigin:this.wolCrop(),key:this.wolKey(),zDirection:this.wolZDirection()});this.wolProperties()||n.setProperties(this.wolProperties()??{},!0),t.change=n.on("change",a=>this.wolChange.emit(a)),t.error=n.on("error",a=>this.wolError.emit(a)),t.propertychange=n.on("propertychange",a=>this.wolPropertychange.emit(a)),t.tileloadend=n.on("tileloadend",a=>this.wolTileLoadEnd.emit(a)),t.tileloaderror=n.on("tileloaderror",a=>this.wolTileLoadError.emit(a)),t.tileloadstart=n.on("tileloadstart",a=>this.wolTileLoadStart.emit(a)),Promise.resolve().then(()=>{o=e.setSource(n)}),this.instance=n}),r.onDestroy(()=>{o&&o(),v(Object.values(t)),this.instance=void 0})}ngOnChanges(r){if(!this.instance)return;let e=this.wolProjection(),t=this.wolTileGrid();for(let[o,n]of Object.entries(r))switch(o){case"wolAttributions":this.instance.setAttributions(n.currentValue);break;case"wolProperties":this.instance.setProperties(n.currentValue??{});break;case"wolProjection":case"wolTileGrid":e&&t&&this.instance.setTileGridForProjection(e,t);break}}getInstance(){return this.instance}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=x({type:c,selectors:[["wol-data-tile-source"]],inputs:{wolLoader:[1,"wolLoader"],wolAttributions:[1,"wolAttributions"],wolAttributionsCollapsible:[1,"wolAttributionsCollapsible"],wolMaxZoom:[1,"wolMaxZoom"],wolMinZoom:[1,"wolMinZoom"],wolTileSize:[1,"wolTileSize"],wolGutter:[1,"wolGutter"],wolMaxResolution:[1,"wolMaxResolution"],wolProjection:[1,"wolProjection"],wolTileGrid:[1,"wolTileGrid"],wolState:[1,"wolState"],wolWrapX:[1,"wolWrapX"],wolTransition:[1,"wolTransition"],wolBandCount:[1,"wolBandCount"],wolInterpolate:[1,"wolInterpolate"],wolCrop:[1,"wolCrop"],wolKey:[1,"wolKey"],wolZDirection:[1,"wolZDirection"],wolProperties:[1,"wolProperties"]},outputs:{wolChange:"wolChange",wolError:"wolError",wolPropertychange:"wolPropertychange",wolTileLoadEnd:"wolTileLoadEnd",wolTileLoadError:"wolTileLoadError",wolTileLoadStart:"wolTileLoadStart"},features:[E],ngContentSelectors:he,decls:1,vars:0,template:function(e,t){e&1&&(y(),R(0))},encapsulation:2,changeDetection:0})};var ne=class c{static \u0275fac=function(e){return new(e||c)};static \u0275mod=U({type:c});static \u0275inj=$({})};export{O as a,ie as b,ne as c};
