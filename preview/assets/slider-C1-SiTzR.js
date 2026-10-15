import{An as e,Bt as t,Cn as n,Er as r,Fr as i,G as a,Ht as o,I as s,In as c,Jn as l,Jt as u,L as d,M as f,Nn as p,Nr as m,Nt as h,Pn as g,Pt as _,Q as v,Rt as ee,Tn as y,Tr as b,Ut as te,Vt as x,Wn as ne,Xt as re,Yt as S,_n as C,dn as w,ft as T,gi as ie,gn as ae,gr as E,jt as oe,mr as D,on as O,qn as se,st as k,tr as A,un as j,ur as M,vn as N,wn as ce,zt as P}from"./_router-chunk-99l_7QRp.js";import{Q as le,Z as F,nt as ue,ot as I,wt as L}from"./ng-doc-app-providers-type-control-zk7t4dsU.js";import{a as R,n as z,r as B,s as V,t as H}from"./_structural-styles-chunk-iT6StsGb.js";import{t as U}from"./_ripple-module-chunk-D6NFMjc8.js";var W=(function(e){return e[e.START=1]=`START`,e[e.END=2]=`END`,e})(W||{}),G=(function(e){return e[e.ACTIVE=0]=`ACTIVE`,e[e.INACTIVE=1]=`INACTIVE`,e})(G||{}),K=new D(`_MatSlider`),q=new D(`_MatSliderThumb`),J=new D(`_MatSliderRangeThumb`),Y=new D(`_MatSliderVisualThumb`),X=(()=>{class t{_cdr=r(f);_ngZone=r(E);_slider=r(K);_renderer=r(T);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=r(k).nativeElement;_platform=r(I);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,t=this._renderer;this._listenerCleanups=[t.listen(e,`pointermove`,this._onPointerMove),t.listen(e,`pointerdown`,this._onDragStart),t.listen(e,`pointerup`,this._onDragEnd),t.listen(e,`pointerleave`,this._onMouseLeave),t.listen(e,`focus`,this._onFocus),t.listen(e,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),n=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=n,n?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===R.FADING_IN||e?.state===R.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===W.START?W.END:W.START)._showValueIndicator(),!this._slider._globalRippleOptions?.disabled||t))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===W.START?W.END:W.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(e){return new(e||t)};static ɵcmp=(function(){let n=[`knob`],r=[`valueIndicatorContainer`];function i(e,t){if(e&1&&(w(0,`div`,2,1)(2,`div`,5)(3,`span`,6),se(4),j()()()),e&2){let e=N();_(4),l(e.valueIndicatorText)}}return u({type:t,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&A(B,5)(n,5)(r,5),t&2){let t;e(t=C())&&(i._ripple=t.first),e(t=C())&&(i._knob=t.first),e(t=C())&&(i._valueIndicatorContainer=t.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[h([{provide:Y,useExisting:t}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(e,t){e&1&&(o(0,i,5,1,`div`,2),O(1,`div`,3,0)(3,`div`,4)),e&2&&(x(t.discrete?0:-1),_(3),y(`matRippleDisabled`,!0))},dependencies:[B],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})})()}return t})(),Z=(()=>{class i{_ngZone=r(E);_cdr=r(f);_elementRef=r(k);_dir=r(le,{optional:!0});_globalRippleOptions=r(z,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(W.END),n=this._getInput(W.START);t&&(t.disabled=this._disabled),n&&(n.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(W.END),n=this._getInput(W.START),r=t.value,i=n.value;n.min=e.new,t.min=Math.max(e.new,n.value),n.max=Math.min(t.max,t.value),n._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,n):this._onTranslateXChangeBySideEffect(n,t),r!==t.value&&this._onValueChange(t),i!==n.value&&this._onValueChange(n)}_updateMinNonRange(e){let t=this._getInput(W.END);if(t){let n=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),n!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(W.END),n=this._getInput(W.START),r=t.value,i=n.value;t.max=e.new,n.max=Math.min(e.new,t.value),t.min=n.value,t._updateWidthInactive(),n._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(n,t):this._onTranslateXChangeBySideEffect(t,n),r!==t.value&&this._onValueChange(t),i!==n.value&&this._onValueChange(n)}_updateMaxNonRange(e){let t=this._getInput(W.END);if(t){let n=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),n!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(W.END),t=this._getInput(W.START),n=e.value,r=t.value,i=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<i?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),n!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(W.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=V();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=v(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=r(I);constructor(){r(ue).load(H);let e=this._isRtl();s(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(W.END),t=this._getInput(W.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let n=this._getThumb(W.END);this._rippleRadius=n._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(W.END),t=this._getInput(W.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(W.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver<`u`&&ResizeObserver&&this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(W.START)._isActive||this._getThumb(W.END)._isActive}_getValue(e=W.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(W.START)?._skipUIUpdate||this._getInput(W.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(W.END),t=this._getInput(W.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(W.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(W.START),t=this._getInput(W.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),n=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),n._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){this._isRange&&!this._skipUpdate()&&this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===W.END?W.END:W.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===W.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let n=this._getThumb(e.thumbPosition);t.length<3?n._hostElement.classList.add(`mdc-slider__thumb--short-value`):n._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(W.END),t=this._getInput(W.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,t=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*t}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let n=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${n})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${n})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),n=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?n++:r++,this._tickMarks=Array(n).fill(G.ACTIVE).concat(Array(r).fill(G.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),n=this._getValue(W.START),r=Math.max(Math.round((n-this.min)/e),0),i=Math.max(Math.round((t-n)/e)+1,0),a=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(G.INACTIVE).concat(Array(i).fill(G.ACTIVE),Array(a).fill(G.INACTIVE))}_getInput(e){if(e===W.END&&this._input)return this._input;if(this._inputs?.length)return e===W.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===W.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let n=t.width/2,r=t.x+n,i=t.y+n,a=e.clientX-r,o=e.clientY-i;return a**2+o**2<n**2}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){let r=[`trackActive`],s=[`*`];function l(e,t){if(e&1&&O(0,`div`),e&2){let e=t.$implicit,n=t.$index,r=N(3);P(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),ne(`transform`,r._calcTickMarkTransform(n))}}function f(e,t){if(e&1&&g(0,l,1,4,`div`,8,c),e&2){let e=N(2);p(e._tickMarks)}}function m(e,t){if(e&1&&(w(0,`div`,6,1),o(2,f,2,0),j()),e&2){let e=N();_(2),x(e._cachedWidth?2:-1)}}function v(e,t){if(e&1&&O(0,`mat-slider-visual-thumb`,7),e&2){let e=N();y(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}return u({type:i,selectors:[[`mat-slider`]],contentQueries:function(t,n,r){if(t&1&&te(r,q,5)(r,J,4),t&2){let t;e(t=C())&&(n._input=t.first),e(t=C())&&(n._inputs=t)}},viewQuery:function(t,n){if(t&1&&A(r,5)(Y,5),t&2){let t;e(t=C())&&(n._trackActive=t.first),e(t=C())&&(n._thumbs=t)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(e,n){e&2&&(P(`mat-`+(n.color||`primary`)),t(`mdc-slider--range`,n._isRange)(`mdc-slider--disabled`,n.disabled)(`mdc-slider--discrete`,n.discrete)(`mdc-slider--tick-marks`,n.showTickMarks)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,d],discrete:[2,`discrete`,`discrete`,d],showTickMarks:[2,`showTickMarks`,`showTickMarks`,d],min:[2,`min`,`min`,a],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,d],max:[2,`max`,`max`,a],step:[2,`step`,`step`,a],displayWith:`displayWith`},exportAs:[`matSlider`],features:[h([{provide:K,useExisting:i}])],ngContentSelectors:s,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(e,t){e&1&&(ce(),n(0),w(1,`div`,2),O(2,`div`,3),w(3,`div`,4),O(4,`div`,5,0),j(),o(6,m,3,1,`div`,6),j(),o(7,v,1,3,`mat-slider-visual-thumb`,7),O(8,`mat-slider-visual-thumb`,7)),e&2&&(_(6),x(t.showTickMarks?6:-1),_(),x(t._isRange?7:-1),_(),y(`discrete`,t.discrete)(`thumbPosition`,2)(`valueIndicatorText`,t.endValueIndicatorText))},dependencies:[X],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})(),de={provide:L,useExisting:b(()=>Q),multi:!0},fe={provide:L,useExisting:b(()=>$),multi:!0},Q=(()=>{class e{_ngZone=r(E);_elementRef=r(k);_cdr=r(f);_slider=r(K);_platform=r(I);_listenerCleanups;get value(){return a(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;this._hasSetInitialValue?this._isActive||this._setValue(t):this._initialValue=t}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new M;dragStart=new M;dragEnd=new M;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=W.END;get min(){return a(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return a(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return a(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return d(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?+!!this._slider._isRtl():(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:+!!this._slider._isRtl()}_hostElement=this._elementRef.nativeElement;_valuetext=m(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new ie;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=r(T);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions()}else this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,n=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,i=Math.floor((this._slider.max-this._slider.min)/r),a=this._slider._isRtl()?1-t/n:t/n,o=Math.round(a*i)/i*(this._slider.max-this._slider.min)+this._slider.min,s=Math.round(o/r)*r;s===this.value?(this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})):(this.value=s,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation}))}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,n=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,n),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||e)};static ɵdir=S({type:e,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(e,t){e&1&&ae(`change`,function(){return t._onChange()})(`input`,function(){return t._onInput()})(`blur`,function(){return t._onBlur()})(`focus`,function(){return t._onFocus()}),e&2&&ee(`aria-valuetext`,t._valuetext())},inputs:{value:[2,`value`,`value`,a]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[h([de,{provide:q,useExisting:e}])]})}return e})(),$=(()=>{class e extends Q{_cdr=r(f);getSibling(){return this._sibling||=this._slider._getInput(this._isEndThumb?W.START:W.END),this._sibling}_sibling;getMinPos(){let e=this.getSibling();return!this._isLeftThumb&&e?e.translateX:this._tickMarkOffset}getMaxPos(){let e=this.getSibling();return this._isLeftThumb&&e?e.translateX:this._slider._cachedWidth-this._tickMarkOffset}_setIsLeftThumb(){this._isLeftThumb=this._isEndThumb&&this._slider._isRtl()||!this._isEndThumb&&!this._slider._isRtl()}_isLeftThumb=!1;_isEndThumb=!1;constructor(){super(),this._isEndThumb=this._hostElement.hasAttribute(`matSliderEndThumb`),this._setIsLeftThumb(),this.thumbPosition=this._isEndThumb?W.END:W.START}_getDefaultValue(){return this._isEndThumb&&this._slider._isRange?this.max:this.min}_onInput(){super._onInput(),this._updateSibling(),this._isActive||this._updateWidthInactive()}_onNgControlValueChange(){super._onNgControlValueChange(),this.getSibling()?._updateMinMax()}_onPointerDown(e){this.disabled||e.button!==0||(this._sibling&&(this._sibling._updateWidthActive(),this._sibling._hostElement.classList.add(`mat-mdc-slider-input-no-pointer-events`)),super._onPointerDown(e))}_onPointerUp(){super._onPointerUp(),this._sibling&&setTimeout(()=>{this._sibling._updateWidthInactive(),this._sibling._hostElement.classList.remove(`mat-mdc-slider-input-no-pointer-events`)})}_onPointerMove(e){super._onPointerMove(e),!this._slider.step&&this._isActive&&this._updateSibling()}_fixValue(e){super._fixValue(e),this._sibling?._updateMinMax()}_clamp(e){return Math.max(Math.min(e,this.getMaxPos()),this.getMinPos())}_updateMinMax(){let e=this.getSibling();e&&(this._isEndThumb?(this.min=Math.max(this._slider.min,e.value),this.max=this._slider.max):(this.min=this._slider.min,this.max=Math.min(this._slider.max,e.value)))}_updateWidthActive(){let e=this._slider._rippleRadius*2-this._slider._inputPadding*2,t=(this._slider._cachedWidth+this._slider._inputPadding-e-this._tickMarkOffset*2)*(this._slider.min<this._slider.max?(this.max-this.min)/(this._slider.max-this._slider.min):1)+e;this._hostElement.style.width=`${t}px`,this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`}_updateWidthInactive(){let e=this.getSibling();if(!e)return;let t=this._slider._cachedWidth-this._tickMarkOffset*2,n=this._isEndThumb?this.value-(this.value-e.value)/2:this.value+(e.value-this.value)/2,r=this._isEndThumb?(this.max-n)/(this._slider.max-this._slider.min):(n-this.min)/(this._slider.max-this._slider.min),i=this._slider.min<this._slider.max?r:1,a=this._slider._rippleRadius;i===1?a=48:i===0&&(a=0);let o=t*i+a;this._hostElement.style.width=`${o}px`,this._hostElement.style.padding=`0px`,this._isLeftThumb?(this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`,this._hostElement.style.right=`auto`):(this._hostElement.style.left=`auto`,this._hostElement.style.right=`-${this._slider._rippleRadius-this._tickMarkOffset}px`)}_updateStaticStyles(){this._hostElement.classList.toggle(`mat-slider__right-input`,!this._isLeftThumb)}_updateSibling(){let e=this.getSibling();e&&(e._updateMinMax(),this._isActive?e._updateWidthActive():e._updateWidthInactive())}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e,this._updateWidthInactive(),this._updateSibling())}_setValue(e){super._setValue(e),this._updateWidthInactive(),this._updateSibling()}static ɵfac=function(t){return new(t||e)};static ɵdir=S({type:e,selectors:[[`input`,`matSliderStartThumb`,``],[`input`,`matSliderEndThumb`,``]],exportAs:[`matSliderRangeThumb`],features:[h([fe,{provide:J,useExisting:e}]),oe]})}return e})(),pe=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵmod=re({type:e,imports:[U,Z,Q,$,X],exports:[Z,Q,$,F]});static ɵinj=i({imports:[U,F]})}return e})();export{pe as n,Q as r,Z as t};