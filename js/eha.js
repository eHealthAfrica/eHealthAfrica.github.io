(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(root,factory){if(typeof define==="function"&&define.amd){define([],factory)}else if(typeof module==="object"&&module.exports){module.exports=factory()}else{root.feature=factory()}})(this,function(undefined){"use strict";var docEl=document.documentElement;var util={create:function(el){return document.createElement(el)},old:!!/(Android\s(1.|2.))|(Silk\/1.)/i.test(navigator.userAgent),pfx:function(){var style=document.createElement("dummy").style;var prefixes=["Webkit","Moz","O","ms"];var memory={};return function(prop){if(typeof memory[prop]==="undefined"){var ucProp=prop.charAt(0).toUpperCase()+prop.substr(1),props=(prop+" "+prefixes.join(ucProp+" ")+ucProp).split(" ");memory[prop]=null;for(var i in props){if(style[props[i]]!==undefined){memory[prop]=props[i];break}}}return memory[prop]}}()};function Feature(){}Feature.prototype={constructor:Feature,css3Dtransform:function(){var test=!util.old&&util.pfx("perspective")!==null;return!!test}(),cssTransform:function(){var test=!util.old&&util.pfx("transformOrigin")!==null;return!!test}(),cssTransition:function(){var test=util.pfx("transition")!==null;return!!test}(),addEventListener:!!window.addEventListener,querySelectorAll:!!document.querySelectorAll,matchMedia:!!window.matchMedia,deviceMotion:"DeviceMotionEvent"in window,deviceOrientation:"DeviceOrientationEvent"in window,contextMenu:"contextMenu"in docEl&&"HTMLMenuItemElement"in window,classList:"classList"in docEl,placeholder:"placeholder"in util.create("input"),localStorage:function(){var test="x";try{localStorage.setItem(test,test);localStorage.removeItem(test);return true}catch(err){return false}}(),historyAPI:window.history&&"pushState"in window.history,serviceWorker:"serviceWorker"in navigator,viewportUnit:function(el){try{el.style.width="1vw";var test=el.style.width!=="";return!!test}catch(err){return false}}(util.create("dummy")),remUnit:function(el){try{el.style.width="1rem";var test=el.style.width!=="";return!!test}catch(err){return false}}(util.create("dummy")),canvas:function(el){return!!(el.getContext&&el.getContext("2d"))}(util.create("canvas")),svg:!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,webGL:function(el){try{return!!(window.WebGLRenderingContext&&(el.getContext("webgl")||el.getContext("experimental-webgl")))}catch(err){return false}}(util.create("canvas")),cors:"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest,touch:!!("ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch),async:"async"in util.create("script"),defer:"defer"in util.create("script"),geolocation:"geolocation"in navigator,srcset:"srcset"in util.create("img"),sizes:"sizes"in util.create("img"),pictureElement:"HTMLPictureElement"in window,testAll:function(){var classes=" js";for(var test in this){if(test!=="testAll"&&test!=="constructor"&&this[test]){classes+=" "+test}}docEl.className+=classes.toLowerCase()}};return new Feature})},{}],2:[function(require,module,exports){var attachFastClick=require("fastclick");var feature=require("./Feature");var $=window.$;$(function(){attachFastClick(document.body);alt2Caption();$("img").each(function(){var $img=$(this);var pathNoExtension=$img.attr("src").replace(/\.[^.]*$/,"");checkFileExists(pathNoExtension+"-320.jpg").fail(function(){console.log("This 404 error is normal; it's just a result of testing for responsive images")}).done(function(){if(feature.srcset){var widths=[320,640,720,1440];var sizes="100vw, (min-width: 800px) 720px, 100vw";var srcset="";for(var i=0;i<widths.length;i++){srcset+=pathNoExtension+"-"+widths[i]+".jpg "+widths[i]+"w";if(i<widths.length-1){srcset+=", "}}$img.attr("srcset",srcset);if(feature.sizes){$img.attr("sizes",sizes)}}else{$img.attr("src",pathNoExtension+"-720.jpg")}})});$(".js-show-nav").click(function(){$("body").toggleClass("nav-visible")});$(".js-contact-link").click(function(e){e.preventDefault();scrollTo($(".js-contact"))})});function alt2Caption(){$("article img").each(function(){if($(this).attr("alt")){var $img=$(this);var $figure=$("<figure></figure>").append($("<caption></caption").text($img.attr("alt"))).insertAfter($img);$img.detach().prependTo($figure)}})}function scrollTo($el){$("html,body").animate({scrollTop:$el.offset().top},300)}function checkFileExists(src){return $.ajax({url:src,type:"HEAD"})}},{"./Feature":1,fastclick:3}],3:[function(require,module,exports){(function(){"use strict";function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;this.tapTimeout=options.tapTimeout||700;if(FastClick.notNeeded(layer)){return}function bind(method,context){return function(){return method.apply(context,arguments)}}var methods=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context)}if(deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0&&!deviceIsWindowsPhone;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;var deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&/OS [6-7]_\d/.test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if(deviceIsIOS&&target.type==="file"||target.disabled){return true}break;case"label":case"iframe":case"video":return true}return/\bneedsclick\b/.test(target.className)};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return!deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"&&targetElement.type!=="month"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if(event.timeStamp-this.lastClickTime<this.tapDelay){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if(event.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}if(event.timeStamp-this.trackingClickStart>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false}targetElement=forElement}}else if(this.needsFocus(targetElement)){if(event.timeStamp-trackingClickStart>100||deviceIsIOS&&window.top!==window&&targetTagName==="input"){this.targetElement=null;return false}this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;var firefoxVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(layer.style.msTouchAction==="none"||layer.style.touchAction==="manipulation"){return true}firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(firefoxVersion>=27){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport&&(metaViewport.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true}}if(layer.style.touchAction==="none"||layer.style.touchAction==="manipulation"){return true}return false};FastClick.attach=function(layer,options){return new FastClick(layer,options)};if(typeof define==="function"&&typeof define.amd==="object"&&define.amd){define(function(){return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}})()},{}]},{},[2]);