function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{yaSn:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_alert",(function(){return u}));var r=i("imtE"),o=(i("AfW+"),i("aiEM"),i("1ym9")),a=(i("EV1M"),i("7TZ+")),n=i("Dl6n"),l=i("YtD4"),s=function(e){var t=Object(o.a)(),i=Object(o.a)(),r=Object(o.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),r.addElement(e.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(1.1)"},{offset:1,opacity:"1",transform:"scale(1)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([i,r])},c=function(e){var t=Object(o.a)(),i=Object(o.a)(),r=Object(o.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([i,r])},d=function(e){var t=Object(o.a)(),i=Object(o.a)(),r=Object(o.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),r.addElement(e.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(0.9)"},{offset:1,opacity:"1",transform:"scale(1)"}]),t.addElement(e).easing("ease-in-out").duration(150).addAnimation([i,r])},p=function(e){var t=Object(o.a)(),i=Object(o.a)(),r=Object(o.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".alert-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease-in-out").duration(150).addAnimation([i,r])},u=function(){function e(t){var i=this;_classCallCheck(this,e),Object(r.k)(this,t),this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.mode=Object(r.d)(this),this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){i.dismiss(void 0,a.a)},this.dispatchCancelHandler=function(e){var t=e.detail.role;if(Object(a.j)(t)){var r=i.processedButtons.find((function(e){return"cancel"===e.role}));i.callButtonHandler(r)}},Object(a.e)(this.el),this.didPresent=Object(r.e)(this,"ionAlertDidPresent",7),this.willPresent=Object(r.e)(this,"ionAlertWillPresent",7),this.willDismiss=Object(r.e)(this,"ionAlertWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionAlertDidDismiss",7)}return _createClass(e,[{key:"buttonsChanged",value:function(){this.processedButtons=this.buttons.map((function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e}))}},{key:"inputsChanged",value:function(){var e=this,t=this.inputs,i=new Set(t.map((function(e){return e.type})));i.has("checkbox")&&i.has("radio")&&console.warn("Alert cannot mix input types: ".concat(Array.from(i.values()).join("/"),". Please see alert docs for more info.")),this.inputType=i.values().next().value,this.processedInputs=t.map((function(t,i){return{type:t.type||"text",name:t.name||"".concat(i),placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||"alert-input-".concat(e.overlayIndex,"-").concat(i),handler:t.handler,min:t.min,max:t.max}}))}},{key:"componentWillLoad",value:function(){this.inputsChanged(),this.buttonsChanged()}},{key:"present",value:function(){return Object(a.f)(this,"alertEnter",s,d)}},{key:"dismiss",value:function(e,t){return Object(a.g)(this,e,t,"alertLeave",c,p)}},{key:"onDidDismiss",value:function(){return Object(a.h)(this.el,"ionAlertDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(a.h)(this.el,"ionAlertWillDismiss")}},{key:"rbClick",value:function(e){var t=!0,i=!1,r=void 0;try{for(var o,n=this.processedInputs[Symbol.iterator]();!(t=(o=n.next()).done);t=!0){var l=o.value;l.checked=l===e}}catch(s){i=!0,r=s}finally{try{t||null==n.return||n.return()}finally{if(i)throw r}}this.activeId=e.id,Object(a.n)(e.handler,e),this.el.forceUpdate()}},{key:"cbClick",value:function(e){e.checked=!e.checked,Object(a.n)(e.handler,e),this.el.forceUpdate()}},{key:"buttonClick",value:function(e){var t=e.role,i=this.getValues();if(Object(a.j)(t))return this.dismiss({values:i},t);var r=this.callButtonHandler(e,i);return!1!==r?this.dismiss(Object.assign({values:i},r),e.role):Promise.resolve(!1)}},{key:"callButtonHandler",value:function(e,t){if(e&&e.handler){var i=Object(a.n)(e.handler,t);if(!1===i)return!1;if("object"==typeof i)return i}return{}}},{key:"getValues",value:function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find((function(e){return!!e.checked}));return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter((function(e){return e.checked})).map((function(e){return e.value}));var t={};return this.processedInputs.forEach((function(e){t[e.name]=e.value||""})),t}}},{key:"renderAlertInputs",value:function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}}},{key:"renderCheckbox",value:function(e){var t=this,i=this.processedInputs,o=Object(r.d)(this);return 0===i.length?null:Object(r.i)("div",{class:"alert-checkbox-group","aria-labelledby":e},i.map((function(e){return Object(r.i)("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":"".concat(e.checked),id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:{"alert-tappable":!0,"alert-checkbox":!0,"alert-checkbox-button":!0,"ion-focusable":!0,"alert-checkbox-button-disabled":e.disabled||!1}},Object(r.i)("div",{class:"alert-button-inner"},Object(r.i)("div",{class:"alert-checkbox-icon"},Object(r.i)("div",{class:"alert-checkbox-inner"})),Object(r.i)("div",{class:"alert-checkbox-label"},e.label)),"md"===o&&Object(r.i)("ion-ripple-effect",null))})))}},{key:"renderRadio",value:function(e){var t=this,i=this.processedInputs;return 0===i.length?null:Object(r.i)("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},i.map((function(e){return Object(r.i)("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":"".concat(e.checked),disabled:e.disabled,id:e.id,tabIndex:0,class:{"alert-radio-button":!0,"alert-tappable":!0,"alert-radio":!0,"ion-focusable":!0,"alert-radio-button-disabled":e.disabled||!1},role:"radio"},Object(r.i)("div",{class:"alert-button-inner"},Object(r.i)("div",{class:"alert-radio-icon"},Object(r.i)("div",{class:"alert-radio-inner"})),Object(r.i)("div",{class:"alert-radio-label"},e.label)))})))}},{key:"renderInput",value:function(e){var t=this.processedInputs;return 0===t.length?null:Object(r.i)("div",{class:"alert-input-group","aria-labelledby":e},t.map((function(e){return"textarea"===e.type?Object(r.i)("div",{class:"alert-input-wrapper"},Object(r.i)("textarea",{placeholder:e.placeholder,value:e.value,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:{"alert-input":!0,"alert-input-disabled":e.disabled||!1}})):Object(r.i)("div",{class:"alert-input-wrapper"},Object(r.i)("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:{"alert-input":!0,"alert-input-disabled":e.disabled||!1}}))})))}},{key:"renderAlertButtons",value:function(){var e=this,t=this.processedButtons,i=Object(r.d)(this),o={"alert-button-group":!0,"alert-button-group-vertical":t.length>2};return Object(r.i)("div",{class:o},t.map((function(t){return Object(r.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},Object(r.i)("span",{class:"alert-button-inner"},t.text),"md"===i&&Object(r.i)("ion-ripple-effect",null))})))}},{key:"render",value:function(){var e,t,i=this.overlayIndex,o=this.header,a=this.subHeader,s=Object(r.d)(this),c="alert-".concat(i,"-hdr"),d="alert-".concat(i,"-sub-hdr"),p="alert-".concat(i,"-msg");return void 0!==o?t=c:void 0!==a&&(t=d),Object(r.i)(r.a,{role:"dialog","aria-modal":"true",style:{zIndex:"".concat(2e4+i)},class:Object.assign(Object.assign({},Object(n.b)(this.cssClass)),(e={},_defineProperty(e,s,!0),_defineProperty(e,"alert-translucent",this.translucent),e)),onIonAlertWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss}),Object(r.i)("div",{class:"alert-wrapper"},Object(r.i)("div",{class:"alert-head"},o&&Object(r.i)("h2",{id:c,class:"alert-title"},o),a&&Object(r.i)("h2",{id:d,class:"alert-sub-title"},a)),Object(r.i)("div",{id:p,class:"alert-message",innerHTML:Object(l.a)(this.message)}),this.renderAlertInputs(t),this.renderAlertButtons()))}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"watchers",get:function(){return{buttons:["buttonsChanged"],inputs:["inputsChanged"]}}},{key:"style",get:function(){return".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios, .alert-input-disabled.sc-ion-alert-ios, .alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity,0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"}}]),e}(),b=function(e){return Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0},Object(n.b)(e.cssClass))}}}]);