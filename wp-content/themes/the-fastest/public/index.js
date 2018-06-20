webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_tooltip__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_all_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_marketing_events_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_marketing_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_marketing_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_sticky_toggle_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_smart_filters_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_responsive_video__ = __webpack_require__(135);
__webpack_require__(130);











console.log(WPAS_APP);
WPAS_APP.loadVideo = __WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */];
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
  jQuery('[data-toggle="tooltip"]').tooltip();
  $('.value').each(function() {
  	var text = $(this).text();
  	$(this).parent().css('width', text);
  });
  $('.block').tooltip();
}

/**
 * THE PROGRAM
**/

if(['page-the-program','single-full-stack','single-web-development','single-coding-intro'].indexOf(WPAS_APP.view.template)!=-1 || WPAS_APP.view.slug === 'venezuela'){
  
  var maxStickPosition = $('#pricing').offset().top - 20;
  __WEBPACK_IMPORTED_MODULE_6__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', maxStickPosition);
  
  
  var TheProgram = __webpack_require__(136).default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var Slider = __webpack_require__(10);
  var mySlider = new Slider('#pricing-slider');
  //var sliderElement = document.querySelector('#pricing-slider');
  mySlider.on('slideStop', function(newValue){
    
    var message = null;
    switch(newValue)
    {
      case 0: 
          message = {
            price: '$1000 deposit + $853 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 1:
          message = {
            price: '$1000 deposit + $445 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 2: 
          message = {
            price: '$1000 deposit + $240 / month',
            details: 'Thanks to our partnership with Quotanda we have managed to create the most flexible placement plan in town',
            logo: '/assets/img/quotanda.png',
            applyText: 'Apply now',
            applyURL: false
          }
      break;
      case 3: 
          message = {
            price: '$198 / month (No deposit)',
            details: 'Apply to Skillsfund and get 36 month financing, pay <strong>only $198 per month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
          }
      break;
      case 4: 
          message = {
            price: '$135 / month (No deposit)',
            details: 'Apply to Skillsfund and get 60 month financing, pay <strong>only $135 every month</strong> and with no deposit to start.',
            logo: '/assets/img/skillsfund.png',
            applyText: 'Apply to financing',
            applyURL: 'http://4geeksacademy.skills.fund'
          }
      break;
    }
    if(message){
      if(typeof(message.price) == 'string') document.querySelector('#price-label').innerHTML = message.price;
      if(typeof(message.details) == 'string') document.querySelector('#financing-details').innerHTML = message.details;
      if(typeof(message.logo) == 'string'){
        var logoElm = document.querySelector('#financing-logo');
        var templateURL = logoElm.getAttribute('data-templateurl');
        logoElm.src = templateURL + message.logo;
      }
      
      var applyBtn = document.querySelector('#financing-btn');
      applyBtn.innerHTML = message.applyText;
      if(message.applyURL){
        applyBtn.href = message.applyURL;
      }else{
        var defaultURL = applyBtn.getAttribute('data-applylink');
        applyBtn.href = defaultURL;
      }
    }
		
		var paymentPlanCard = document.querySelector('.payment-plan');
		//paymentPlanCard.classList.remove("bg-yellow");
		paymentPlanCard.classList.add("glow");
		window.setTimeout(function(){
		  //paymentPlanCard.classList.add("bg-yellow");
			paymentPlanCard.classList.remove("glow");
		}, 200);
    
  });
  
  __webpack_require__(137);

}

/**
 * CALENDAR
**/

if(WPAS_APP.view.slug === 'calendar' || WPAS_APP.view.slug === 'calendario'){
  
  __WEBPACK_IMPORTED_MODULE_7__common_smart_filters_js__["a" /* SmartFilters */].init({
    loadingAnimation: '.courses .loading-animation',
    resultsContainer: '.courses .list-group',
    filterDropdown: '.dropdown-menu a',
    filters: [
      { button: '#locationSelector', urlKey: 'l', options: '.location-option' },
      { button: '#langSelector', urlKey: 'lang', options: '.lang-option'},
      { button: '#typeSelector', urlKey: 'type', options: '.type-option'}
    ]
  });
  
  __WEBPACK_IMPORTED_MODULE_6__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', 4000);
    
}

/**
 * LOCATION
**/

if(['single-location'].indexOf(WPAS_APP.view.template) != -1){
  __webpack_require__(139);
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  jQuery('[data-toggle="tooltip"]').tooltip();
  Object(__WEBPACK_IMPORTED_MODULE_8__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(1)))

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../assets/img/laptop-bg.png' in '/home/ubuntu/workspace/wp-content/themes/the-fastest/src/styles'\n    at factoryCallback (/home/ubuntu/workspace/node_modules/webpack/lib/Compilation.js:269:40)\n    at factory (/home/ubuntu/workspace/node_modules/webpack/lib/NormalModuleFactory.js:235:20)\n    at resolver (/home/ubuntu/workspace/node_modules/webpack/lib/NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (/home/ubuntu/workspace/node_modules/webpack/lib/NormalModuleFactory.js:127:20)\n    at /home/ubuntu/workspace/node_modules/async/dist/async.js:3861:9\n    at /home/ubuntu/workspace/node_modules/async/dist/async.js:421:16\n    at iteratorCallback (/home/ubuntu/workspace/node_modules/async/dist/async.js:996:13)\n    at /home/ubuntu/workspace/node_modules/async/dist/async.js:906:16\n    at /home/ubuntu/workspace/node_modules/async/dist/async.js:3858:13\n    at resolvers.normal.resolve (/home/ubuntu/workspace/node_modules/webpack/lib/NormalModuleFactory.js:119:22)\n    at onError (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:65:10)\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/home/ubuntu/workspace/node_modules/tapable/lib/Tapable.js:252:11)\n    at /home/ubuntu/workspace/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/home/ubuntu/workspace/node_modules/tapable/lib/Tapable.js:252:11)\n    at innerCallback (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:144:11)\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/home/ubuntu/workspace/node_modules/tapable/lib/Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/Resolver.js:168:10)\n    at loggingCallbackWrapper (/home/ubuntu/workspace/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/home/ubuntu/workspace/node_modules/tapable/lib/Tapable.js:252:11)");

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, Popper, Util) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)'
  };

  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose() {
      clearTimeout(this._timeout);

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    };

    Tooltip.prototype.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });

        $(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }
          var prevHoverState = _this._hoverState;
          _this._hoverState = null;

          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();
        _this2.element.removeAttribute('aria-describedby');
        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    Tooltip.prototype.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

          $(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        $(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (config.title && typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (config.content && typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    Tooltip.prototype._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return;
      }
      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}(jQuery); /* global Popper */
//# sourceMappingURL=tooltip.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(9)["default"], __webpack_require__(2)))

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeSticky; });
var MakeSticky = (function(){
    
    var plugin = {};
    //[data-toggle="sticky-onscroll"]
    plugin.init = function(selector, maxStickPosition)
    {
        // Find all data-toggle="sticky-onscroll" elements
        $(selector).each(function() {
          var sticky = $(this);
          var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
          sticky.before(stickyWrapper);
          sticky.addClass('sticky');
          
          // Scroll & resize events
          $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this), maxStickPosition);
          });
          
          // On page load
          stickyToggle(sticky, stickyWrapper, $(window), maxStickPosition);
        });
        
    }
    
    function stickyToggle(sticky, stickyWrapper, scrollElement, maxStickPosition) {
          var stickyHeight = sticky.outerHeight();
          var stickyWidth = sticky.outerWidth();
          var offset = stickyWrapper.offset();
          var stickyTop = offset.top;
          var stickyLeft = offset.left;
    
          var windowScrollPosition = scrollElement.scrollTop();
          if (windowScrollPosition >= stickyTop){
            if(windowScrollPosition < maxStickPosition)
            {
              stickyWrapper.height(stickyHeight);
              sticky.addClass("is-sticky");
              sticky.removeClass("fozen-sticky");
              sticky.css('width',stickyWidth+'px');
              sticky.css('left',stickyLeft+'px');
              sticky.css('top','0');
            }
            else
            {
              sticky.removeClass("is-sticky");
              stickyWrapper.height('auto');
              sticky.addClass("fozen-sticky");
              sticky.css('top',(maxStickPosition-665)+'px');
              sticky.css('left','15px');
            }
          }
          else{
            sticky.removeClass("is-sticky");
            sticky.removeClass("fozen-sticky");
            sticky.css('left','0');
            sticky.css('top','0');
            stickyWrapper.height('auto');
          }
    };
    
    return plugin;
    
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartFilters; });
var SmartFilters = (function(){
    
    var plugin = {};
    var config = {
        filters: [],
        filterDropdown: '',
        loadingAnimation: '',
        resultsContainer: '',
    }
    
    
    plugin.init = function(settings){
        $.extend( config, settings );
        
        console.log('Initializing the SmartFilters');
        
        var urlVars = getUrlVars();
        setFiltersDefaultStates(urlVars);
        
        $(config.filterDropdown).on('click', function(event){  
            
            var button = $(this).parent().parent().children('button');
            button.html($(this).html());
            
            var value = $(this).data('value');
            if(value != 'all') urlVars[button.data('key')] = $(this).data('value');
            //else urlVars = unsetArray(urlVars,button.data('key'));
            else delete urlVars[button.data('key')];
            
            $(config.loadingAnimation).css('display','block');
            $(config.resultsContainer).css('display','none');
            $(this).parent().removeClass('show');//hide the dropdown after clicked
            //var parentDropdown = aux.parent();
            //parentDropdown[0].classList.remove('show');
            window.location.href = getBaseURL() + '?' + serialize(urlVars );
            
            event.preventDefault();
            return false;
          });
    }
    
    function setFiltersDefaultStates(urlVars){
        console.log('Setting filter values', urlVars);
        
        config.filters.forEach(function(filter){
            console.log(filter.urlKey);
            if(filter.urlKey in urlVars) $(filter.button).html($(filter.options+'[data-value="'+urlVars[filter.urlKey]+'"]').html());
        });
    }
    
    function getBaseURL(){
        var baseURL = window.location.href;
        var pieces = baseURL.split('?');
        if(pieces.length>1) baseURL = pieces[0];
        
        return baseURL;
    }
    
    function getUrlVars(){
      
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        
        delete vars['0'];
        delete vars[getBaseURL()];
        delete vars[''];
  
        return vars;
    
    }
    
    function serialize(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    
    return plugin;
    
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {var loadVideo = function(videoURL, settings){
  if(typeof settings == 'undefined') settings = {};
  var s = document.body.firstChild;
  
  var videoViewport = document.createElement('div');
  videoViewport.id = "video-viewport";
  videoViewport.classList.add('video-viewport');
  s.parentNode.insertBefore(videoViewport, s);
  
  var video = document.createElement('video');
  video.src = videoURL; video.autoPlay = true; video.loop = true; video.muted = true; 
  video.classList.add('video-background');
  videoViewport.appendChild(video);
  
  video.addEventListener('loadeddata',function(){ video.play(); });
  var vid_w_orig = parseInt($(window).width());
  var vid_h_orig = parseInt($(video).height());
  var min_w = 400;
  window.addEventListener('resize',function(){
      var sourceVideoWidth = video.videoWidth;
      var sourceVideoHeight = video.videoHeight;
      //if(vid_w_orig <= 0 || vid_w_orig == Infinity) vid_w_orig = parseInt($(video).width());
      //if(vid_h_orig <= 0 || vid_h_orig == Infinity) vid_h_orig = parseInt($(video).height());
      var addedPadding = 100;
      var target_with = $(window).width();
      var target_heigh = $('.masthead').height() + $('nav.navbar').height() + parseInt($('.masthead').css('margin-top')) + parseInt($('nav.navbar').css('margin-top')) + addedPadding;
      $(videoViewport).width(target_with);
      $(videoViewport).height(newViewHeight);
  
      var scale_h = target_with / vid_w_orig;
      var scale_v = target_heigh / vid_h_orig;
      var scale = scale_h > scale_v ? scale_h : scale_v;
  
      
      if (scale * vid_w_orig < min_w) scale = min_w / vid_w_orig;
      
      var newViewWidth = scale * vid_w_orig;
      var newViewHeight = scale * vid_w_orig;
      
      //if the new width does not cover the entire screen width
      if (newViewWidth < sourceVideoWidth) scale = sourceVideoWidth / vid_w_orig;
      if (newViewHeight < sourceVideoHeight && scale < (sourceVideoHeight / vid_h_orig)) scale = sourceVideoHeight / vid_h_orig;
      
      newViewWidth = scale * vid_w_orig;
      newViewHeight = scale * vid_w_orig;
  
      $(video).width(newViewWidth);
      $(video).height(newViewHeight);
  
      $(videoViewport).scrollLeft((newViewWidth - target_with) / 2);
      $(videoViewport).scrollTop((newViewHeight - target_heigh) / 2);
  });
  $(window).trigger('resize');
  
  if(typeof settings.overlay != 'undefined'){
    
    var overlay  = document.createElement('div');
    overlay.style.display = "absolute";
    overlay.style.background = settings.overlay;
    overlay.style.opacity = "0.4";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.position = "absolute";
    overlay.style.zIndex = "-1";
    s.parentNode.insertBefore(overlay, s);
  }
}
/* harmony default export */ __webpack_exports__["a"] = (loadVideo);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {var TheProgram = (function(){
    
    var thescope = {};
    // Cache selectors
    var topMenu = $(".program-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a[href*='#']"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });
    
    thescope.init = function(){
        
        // Bind to scroll
        $(window).scroll(function(){
           // Get container scroll position
           var fromTop = $(this).scrollTop()+topMenuHeight;
        
           // Get id of current scroll item
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
           // Get the id of the current element
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
        });
    }
    
    return thescope;
    
})();

/* harmony default export */ __webpack_exports__["default"] = (TheProgram);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

    function Particle( x, y, radius ) {
    	this.init( x, y, radius );
    }
    
    Particle.prototype = {
    
    	init: function( x, y, radius ) {
    
    		this.alive = true;
    
    		this.radius = radius || 10;
    		this.wander = 0.15;
    		this.theta = random( TWO_PI );
    		this.drag = 0.92;
    		this.color = '#fff';
    
    		this.x = x || 0.0;
    		this.y = y || 0.0;
    
    		this.vx = 0.0;
    		this.vy = 0.0;
    	},
    
    	move: function() {
    
    		this.x += this.vx;
    		this.y += this.vy;
    
    		this.vx *= this.drag;
    		this.vy *= this.drag;
    
    		this.theta += random( -0.5, 0.5 ) * this.wander;
    		this.vx += sin( this.theta ) * 0.1;
    		this.vy += cos( this.theta ) * 0.1;
    
    		this.radius *= 0.96;
    		this.alive = this.radius > 0.5;
    	},
    
    	draw: function( ctx ) {
    
    		ctx.beginPath();
    		ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
    		ctx.fillStyle = this.color;
    		ctx.fill();
    	}
    };

  // ----------------------------------------
  // Particles
  // ----------------------------------------
  
  var MAX_PARTICLES = 280;
  var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
  
  var particles = [];
  var pool = [];
  
  var Sketch = __webpack_require__(138);
  var canvasBg = document.querySelector( '#bg-sketch' );
  canvasBg.style.display = "block";
  var pricingSketch = Sketch.create({
  	container: canvasBg
  });
  
  pricingSketch.setup = function() {
  
  	// Set off some initial particles.
  	var i, x, y;
  
  	for ( i = 0; i < 20; i++ ) {
  		x = ( pricingSketch.width * 0.5 ) + random( -100, 100 );
  		y = ( pricingSketch.height * 0.5 ) + random( -100, 100 );
  		pricingSketch.spawn( x, y );
  	}
  };
  
  pricingSketch.spawn = function( x, y ) {
  
  	if ( particles.length >= MAX_PARTICLES )
  		pool.push( particles.shift() );
  
  	var particle = pool.length ? pool.pop() : new Particle();
  	particle.init( x, y, random( 5, 40 ) );
  
  	particle.wander = random( 0.5, 2.0 );
  	particle.color = random( COLOURS );
  	particle.drag = random( 0.9, 0.99 );
  
  	var theta = random( TWO_PI );
  	var force = random( 2, 8 );
  
  	particle.vx = sin( theta ) * force;
  	particle.vy = cos( theta ) * force;
  
  	particles.push( particle );
  }
  
  pricingSketch.update = function() {
  
  	var i, particle;
  
  	for ( i = particles.length - 1; i >= 0; i-- ) {
  
  		particle = particles[i];
  
  		if ( particle.alive ) particle.move();
  		else pool.push( particles.splice( i, 1 )[0] );
  	}
  };
  
  pricingSketch.draw = function() {
  
  	pricingSketch.globalCompositeOperation  = 'lighter';
  	
  	for ( var i = particles.length - 1; i >= 0; i-- ) {
  		particles[i].draw( pricingSketch );
  	}
  };
  
  pricingSketch.mousemove = function() {
  
  	var particle, theta, force, touch, max, i, j, n;
  
  	for ( i = 0, n = pricingSketch.touches.length; i < n; i++ ) {
  
  		touch = pricingSketch.touches[i], max = random( 1, 4 );
  		for ( j = 0; j < max; j++ ) pricingSketch.spawn( touch.x, touch.y );
  	}
  };

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {


/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */

(function ( root, factory ) {

  if ( true ) {

    // CommonJS like
    module.exports = factory(root, root.document);

  } else if ( typeof define === 'function' && define.amd ) {

    // AMD
    define( function() { return factory( root, root.document ); });

  } else {

    // Browser global
    root.Sketch = factory( root, root.document );
  }

}( typeof window !== "undefined" ? window : this, function ( window, document ) {


  "use strict";

  /*
  ----------------------------------------------------------------------

    Config

  ----------------------------------------------------------------------
  */

  var MATH_PROPS = 'E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min'.split( ' ' );
  var HAS_SKETCH = '__hasSketch';
  var M = Math;

  var CANVAS = 'canvas';
  var WEBGL = 'webgl';
  var DOM = 'dom';

  var doc = document;
  var win = window;

  var instances = [];

  var defaults = {

    fullscreen: true,
    autostart: true,
    autoclear: true,
    autopause: true,
    container: doc.body,
    interval: 1,
    globals: true,
    retina: false,
    type: CANVAS
  };

  var keyMap = {

     8: 'BACKSPACE',
     9: 'TAB',
    13: 'ENTER',
    16: 'SHIFT',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN'
  };

  /*
  ----------------------------------------------------------------------

    Utilities

  ----------------------------------------------------------------------
  */

  function isArray( object ) {

    return Object.prototype.toString.call( object ) == '[object Array]';
  }

  function isFunction( object ) {

    return typeof object == 'function';
  }

  function isNumber( object ) {

    return typeof object == 'number';
  }

  function isString( object ) {

    return typeof object == 'string';
  }

  function keyName( code ) {

    return keyMap[ code ] || String.fromCharCode( code );
  }

  function extend( target, source, overwrite ) {

    for ( var key in source )

      if ( overwrite || !( key in target ) )

        target[ key ] = source[ key ];

    return target;
  }

  function proxy( method, context ) {

    return function() {

      method.apply( context, arguments );
    };
  }

  function clone( target ) {

    var object = {};

    for ( var key in target ) {
      
      if ( key === 'webkitMovementX' || key === 'webkitMovementY' )
        continue;

      if ( isFunction( target[ key ] ) )

        object[ key ] = proxy( target[ key ], target );

      else

        object[ key ] = target[ key ];
    }

    return object;
  }

  /*
  ----------------------------------------------------------------------

    Constructor

  ----------------------------------------------------------------------
  */

  function constructor( context ) {

    var request, handler, target, parent, bounds, index, suffix, clock, node, copy, type, key, val, min, max, w, h;

    var counter = 0;
    var touches = [];
    var resized = false;
    var setup = false;
    var ratio = win.devicePixelRatio || 1;
    var isDiv = context.type == DOM;
    var is2D = context.type == CANVAS;

    var mouse = {
      x:  0.0, y:  0.0,
      ox: 0.0, oy: 0.0,
      dx: 0.0, dy: 0.0
    };

    var eventMap = [

      context.eventTarget || context.element,

        pointer, 'mousedown', 'touchstart',
        pointer, 'mousemove', 'touchmove',
        pointer, 'mouseup', 'touchend',
        pointer, 'click',
        pointer, 'mouseout',
        pointer, 'mouseover',

      doc,

        keypress, 'keydown', 'keyup',

      win,

        active, 'focus', 'blur',
        resize, 'resize'
    ];

    var keys = {}; for ( key in keyMap ) keys[ keyMap[ key ] ] = false;

    function trigger( method ) {

      if ( isFunction( method ) )

        method.apply( context, [].splice.call( arguments, 1 ) );
    }

    function bind( on ) {

      for ( index = 0; index < eventMap.length; index++ ) {

        node = eventMap[ index ];

        if ( isString( node ) )

          target[ ( on ? 'add' : 'remove' ) + 'EventListener' ].call( target, node, handler, false );

        else if ( isFunction( node ) )

          handler = node;

        else target = node;
      }
    }

    function update() {

      cAF( request );
      request = rAF( update );

      if ( !setup ) {

        trigger( context.setup );
        setup = isFunction( context.setup );
      }

      if ( !resized ) {
        trigger( context.resize );
        resized = isFunction( context.resize );
      }

      if ( context.running && !counter ) {

        context.dt = ( clock = +new Date() ) - context.now;
        context.millis += context.dt;
        context.now = clock;

        trigger( context.update );

        // Pre draw

        if ( is2D ) {

          if ( context.retina ) {

            context.save();
            
            if (context.autoclear) {
              context.scale( ratio, ratio );
            }
          }

          if ( context.autoclear )

            context.clear();
        }

        // Draw

        trigger( context.draw );

        // Post draw

        if ( is2D && context.retina )

          context.restore();
      }

      counter = ++counter % context.interval;
    }

    function resize() {

      target = isDiv ? context.style : context.canvas;
      suffix = isDiv ? 'px' : '';

      w = context.width;
      h = context.height;

      if ( context.fullscreen ) {

        h = context.height = win.innerHeight;
        w = context.width = win.innerWidth;
      }

      if ( context.retina && is2D && ratio ) {

        target.style.height = h + 'px';
        target.style.width = w + 'px';

        w *= ratio;
        h *= ratio;
      }

      if ( target.height !== h )

        target.height = h + suffix;

      if ( target.width !== w )

        target.width = w + suffix;

      if ( is2D && !context.autoclear && context.retina )

        context.scale( ratio, ratio );

      if ( setup ) trigger( context.resize );
    }

    function align( touch, target ) {

      bounds = target.getBoundingClientRect();

      touch.x = touch.pageX - bounds.left - (win.scrollX || win.pageXOffset);
      touch.y = touch.pageY - bounds.top - (win.scrollY || win.pageYOffset);

      return touch;
    }

    function augment( touch, target ) {

      align( touch, context.element );

      target = target || {};

      target.ox = target.x || touch.x;
      target.oy = target.y || touch.y;

      target.x = touch.x;
      target.y = touch.y;

      target.dx = target.x - target.ox;
      target.dy = target.y - target.oy;

      return target;
    }

    function process( event ) {

      event.preventDefault();

      copy = clone( event );
      copy.originalEvent = event;

      if ( copy.touches ) {

        touches.length = copy.touches.length;

        for ( index = 0; index < copy.touches.length; index++ )

          touches[ index ] = augment( copy.touches[ index ], touches[ index ] );

      } else {

        touches.length = 0;
        touches[0] = augment( copy, mouse );
      }

      extend( mouse, touches[0], true );

      return copy;
    }

    function pointer( event ) {

      event = process( event );

      min = ( max = eventMap.indexOf( type = event.type ) ) - 1;

      context.dragging =

        /down|start/.test( type ) ? true :

        /up|end/.test( type ) ? false :

        context.dragging;

      while( min )

        isString( eventMap[ min ] ) ?

          trigger( context[ eventMap[ min-- ] ], event ) :

        isString( eventMap[ max ] ) ?

          trigger( context[ eventMap[ max++ ] ], event ) :

        min = 0;
    }

    function keypress( event ) {

      key = event.keyCode;
      val = event.type == 'keyup';
      keys[ key ] = keys[ keyName( key ) ] = !val;

      trigger( context[ event.type ], event );
    }

    function active( event ) {

      if ( context.autopause )

        ( event.type == 'blur' ? stop : start )();

      trigger( context[ event.type ], event );
    }

    // Public API

    function start() {

      context.now = +new Date();
      context.running = true;
    }

    function stop() {

      context.running = false;
    }

    function toggle() {

      ( context.running ? stop : start )();
    }

    function clear() {

      if ( is2D )

        context.clearRect( 0, 0, context.width * ratio, context.height * ratio );
    }

    function destroy() {

      parent = context.element.parentNode;
      index = instances.indexOf( context );

      if ( parent ) parent.removeChild( context.element );
      if ( ~index ) instances.splice( index, 1 );

      bind( false );
      stop();
    }

    extend( context, {

      touches: touches,
      mouse: mouse,
      keys: keys,

      dragging: false,
      running: false,
      millis: 0,
      now: NaN,
      dt: NaN,

      destroy: destroy,
      toggle: toggle,
      clear: clear,
      start: start,
      stop: stop
    });

    instances.push( context );

    return ( context.autostart && start(), bind( true ), resize(), update(), context );
  }

  /*
  ----------------------------------------------------------------------

    Global API

  ----------------------------------------------------------------------
  */

  var element, context, Sketch = {

    CANVAS: CANVAS,
    WEB_GL: WEBGL,
    WEBGL: WEBGL,
    DOM: DOM,

    instances: instances,

    install: function( context ) {

      if ( !context[ HAS_SKETCH ] ) {

        for ( var i = 0; i < MATH_PROPS.length; i++ )

          context[ MATH_PROPS[i] ] = M[ MATH_PROPS[i] ];

        extend( context, {

          TWO_PI: M.PI * 2,
          HALF_PI: M.PI / 2,
          QUARTER_PI: M.PI / 4,

          random: function( min, max ) {

            if ( isArray( min ) )

              return min[ ~~( M.random() * min.length ) ];

            if ( !isNumber( max ) )

              max = min || 1, min = 0;

            return min + M.random() * ( max - min );
          },

          lerp: function( min, max, amount ) {

            return min + amount * ( max - min );
          },

          map: function( num, minA, maxA, minB, maxB ) {

            return ( num - minA ) / ( maxA - minA ) * ( maxB - minB ) + minB;
          }
        });

        context[ HAS_SKETCH ] = true;
      }
    },

    create: function( options ) {

      options = extend( options || {}, defaults );

      if ( options.globals ) Sketch.install( self );

      element = options.element = options.element || doc.createElement( options.type === DOM ? 'div' : 'canvas' );

      context = options.context = options.context || (function() {

        switch( options.type ) {

          case CANVAS:

            return element.getContext( '2d', options );

          case WEBGL:

            return element.getContext( 'webgl', options ) || element.getContext( 'experimental-webgl', options );

          case DOM:

            return element.canvas = element;
        }

      })();

      ( options.container || doc.body ).appendChild( element );

      return Sketch.augment( context, options );
    },

    augment: function( context, options ) {

      options = extend( options || {}, defaults );

      options.element = context.canvas || context;
      options.element.className += ' sketch';

      extend( context, options, true );

      return constructor( context );
    }
  };

  /*
  ----------------------------------------------------------------------

    Shims

  ----------------------------------------------------------------------
  */

  var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
  var scope = self;
  var then = 0;

  var a = 'AnimationFrame';
  var b = 'request' + a;
  var c = 'cancel' + a;

  var rAF = scope[ b ];
  var cAF = scope[ c ];

  for ( var i = 0; i < vendors.length && !rAF; i++ ) {

    rAF = scope[ vendors[ i ] + 'Request' + a ];
    cAF = scope[ vendors[ i ] + 'Cancel' + a ];
  }

  scope[ b ] = rAF = rAF || function( callback ) {

    var now = +new Date();
    var dt = M.max( 0, 16 - ( now - then ) );
    var id = setTimeout( function() {
      callback( now + dt );
    }, dt );

    then = now + dt;
    return id;
  };

  scope[ c ] = cAF = cAF || function( id ) {
    clearTimeout( id );
  };

  /*
  ----------------------------------------------------------------------

    Output

  ----------------------------------------------------------------------
  */

  return Sketch;

}));

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

var LocationView = (function(){
    var scope = {};
    
    
    return scope;
})();

LocationView.activate();

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//var newsletterForm = document.querySelector('.email-newsletter form');

$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop();

   if(fromTop>100) $('.footer-bar').css('display','block');
   else $('.footer-bar').css('display','none');
});


$('.newsletter-signup').submit(function(event){
   
   event.preventDefault();
   
   var formNewsletter = $(this);
   var emailField = formNewsletter.find('input[type=email]');
   var email = emailField.val();
   
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'newsletter_signup',
         email: email
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               formNewsletter.html('<div class="alert alert-info" role="alert">'+response.data+'</div>');
            }
            else formNewsletter.find('.alert-danger').html(response.msg).css('display','block');
         }
      },
      error: function(p1,p2,p3){
         alert(p3);
      }
   });
   
});

$('.syllabus-download').submit(function(event){
   
   event.preventDefault();
   
   var formSyllabus = $(this);
   var emailField = formSyllabus.find('input[type=email]');
   var firstNameField = formSyllabus.find('input[type=text]');
   var email = emailField.val();
   var firstName = firstNameField.val();
   
   if(email == '' || firstName =='')
   {
      formSyllabus.find('.alert-danger').html('We need your email and first name').css('display','block');
   }
   else{
      formSyllabus.find('.alert-danger').html('').css('display','none');
      $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'download_syllabus',
         email: email,
         first_name: firstName
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               formSyllabus.html('<div class="alert alert-info" role="alert">'+response.data+'</div>');
               setTimeout(function(){
                  $('#syllabusModal').modal('hide');
               },2000)
            }
            else formSyllabus.find('.alert-danger').html(response.msg).css('display','block');
         }
      },
      error: function(p1,p2,p3){
         alert(p3);
      }
   });
   } 
   
});

$(document).ready(function() {
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'get_upcoming_event'
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               if(response.data) promptUpcomingEvent(response.data);
            }
         }
      },
      error: function(p1,p2,p3){
         console.log("Error getting the upcoming event: "+p3);
      }
   });
});

function promptUpcomingEvent(event){
   
   if(localStorage.getItem('popState') != 'shown'){
      fillUpcomingEvent(event);
      $("#upcomingEvent").delay(2000).fadeIn();
      localStorage.setItem('popState','shown');
      $('#upcomingEvent').modal('show');
      $("#upcomingEvent").on("hidden.bs.modal", function () {
          // put your default event here
          $("#upcomingEvent").remove();
      });

   }
}

function fillUpcomingEvent(event){
   var modal = $('#upcomingEvent');
   modal.find('.day').html(event.day);
   modal.find('.month').html(event.month);
   modal.find('.year').html(event.year);
   
   modal.find('.event-title').html(event.post_title);
   modal.find('.event-details').html(event.event_start_time + " " + event.event_end_time + ' at <span class="imoon icon-location"></span> ' + event.address);//3:30pm - at Starthub, Downtown Miami
   modal.find('.event-description').html(event.post_content);
   
   modal.find('.btn-danger').attr('href',event.ticket_url);
   
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function onPageView(urlContains, callback){
    //Page view = apply-thank-you
    if (document.location.pathname.indexOf(urlContains) > -1) {
        //Code goes here
        callback();
    }  
}
function triggerTagManagerEvent(eventName){
    if(typeof dataLayer != 'undefined'){
        dataLayer.push({'event': eventName});
        console.log('Event successfully triggered: '+eventName);
    }
    else console.log('Event not being sent to TagManager: '+eventName);
}
function saveDataVariable(index, value){
    if(typeof dataLayer != 'undefined') dataLayer.push({index: value});
    else console.log('Imposible to write '+index+' on dataLayer');
    
    
    if(typeof WPAS_APP == 'undefined') WPAS_APP = {};
    if(typeof WPAS_APP.dataLayer == 'undefined') WPAS_APP.dataLayer = {};
    WPAS_APP.dataLayer[index] = value;
}
function ac_event(eventKey, eventName, userEmail){

  // what we do here, is log a successful event to the console
  // or catch any errors we have
  var xhttp = new XMLHttpRequest();  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Recorded halfway scroll event");
      console.log(this.responseText);
    } else {
      console.log(this.responseText);
    }
  };

  // your ActiveCampaign id. You can get this from your AC settings 
  var actid = "db15a3264fb2abf19996fa48873039757d534544"; 

  var visit = {
    email: userEmail // the user's email address
  };

  // get the url of the page and send it as event data
  var eventData = window.location.href;

  // build the eventString based on the variables you just edited above ☝
  var eventString = "actid=" + actid 
                    + "&key=" + eventKey 
                    + "&event=" + eventName 
                    + "&visit=" + encodeURIComponent(visit) 
                    + "&eventdata" + eventData;

  // send the event to the ActiveCampaign API with our event values
  xhttp.open("POST", "https://trackcmp.net/event", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  if(eventKey!='' && eventName!='' && userEmail!='') xhttp.send(eventString);
  else{
      if(eventKey=='') console.log('Invalid eventKey',eventKey);
      if(eventName=='') console.log('Invalid eventName',eventName);
      if(userEmail=='') console.log('Invalid userEmail',userEmail);
  }
}

/**
 * Tagmanger events
 **/
$('.syllabus-download').submit(function(event){ 
    
    var emailInput = $(event.target).find('input[type=email]');
    if(emailInput.length>0) saveDataVariable('userEmail',emailInput[0].value);
    
    triggerTagManagerEvent('syllabus_download'); 
});
$('.newsletter-signup').submit(function(event){ 
    
    var emailInput = $(event.target).find('input[type=email]');
    if(emailInput.length>0) saveDataVariable('userEmail',emailInput[0].value);
    
    triggerTagManagerEvent('newsletter_signup'); 
});
$('.apply-btn').click(function(event){ triggerTagManagerEvent('application_rendered'); });
onPageView("/apply-thank-you",function(){
    //Code goes here
    triggerTagManagerEvent('student_application'); 
});
$('#financing_guide_download').click(function(event){ 
    event.preventDefault();
    triggerTagManagerEvent('financing_guide_download'); 
    window.location.href = event.target.href;
    return false;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[127]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9za2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUI7QUFDRTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0UsT0FBTyxrRUFBa0U7QUFDekUsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhJQUFzRSxpQkFBaUI7QUFDdkYsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbExBLGdLQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFNBQVM7QUFDVixtQzs7Ozs7Ozs7OztBQ3RxQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLEk7Ozs7Ozs7Ozs7QUM5REQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMsSTs7Ozs7Ozs7O0FDeEZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix1QkFBdUIsbUJBQW1CLG9CO0FBQ2pFO0FBQ0E7O0FBRUEsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRTs7Ozs7Ozs7OztBQ25FQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6QyxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLENBQUM7O0FBRUQsMkU7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0NBQWtDLFFBQVE7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpREFBaUQsT0FBTzs7QUFFeEQ7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBLEk7Ozs7Ozs7O0FDaElBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBLHdCQUF3Qix1Q0FBdUMsRUFBRTs7QUFFakUsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHlCQUF5Qjs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsNkJBQTZCOztBQUVyRDs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsdUJBQXVCOztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQ0FBcUM7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQiw0QkFBNEI7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxHOzs7Ozs7O0FDdG5CRDtBQUNBOzs7QUFHQTtBQUNBLENBQUM7O0FBRUQsd0I7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkpBQTZKO0FBQzdKOztBQUVBOztBQUVBLEM7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQzs7QUFFQTtBQUNBOztBQUVBLGdEO0FBQ0EsQ0FBQztBQUNELCtDOztBQUVBO0FBQ0E7O0FBRUEsZ0Q7QUFDQSxDQUFDO0FBQ0Qsc0NBQXNDLGdEQUFnRCxFQUFFO0FBQ3hGO0FBQ0E7QUFDQSxrRDtBQUNBLENBQUM7QUFDRCxxRDtBQUNBO0FBQ0EsdUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi4vc3R5bGVzL2luZGV4LnNjc3MnKTtcblxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnO1xuaW1wb3J0ICcuL3BhZ2VzL2FsbC5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL21hcmtldGluZy1ldmVudHMuanMnO1xuaW1wb3J0IHtNYWtlU3RpY2t5fSBmcm9tICcuL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzJztcbmltcG9ydCB7U21hcnRGaWx0ZXJzfSBmcm9tICcuL2NvbW1vbi9zbWFydC1maWx0ZXJzLmpzJztcbmltcG9ydCBsb2FkVmlkZW8gZnJvbSBcIi4vY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW9cIjtcblxuY29uc29sZS5sb2coV1BBU19BUFApO1xuV1BBU19BUFAubG9hZFZpZGVvID0gbG9hZFZpZGVvO1xuLyoqXG4gKiBIT01FXG4qKi9cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2hvbWUnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2luaWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL2hvbWUtZGFyay5tcDQnKTtcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAkKCcudmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICBcdHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gIFx0JCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3dpZHRoJywgdGV4dCk7XG4gIH0pO1xuICAkKCcuYmxvY2snKS50b29sdGlwKCk7XG59XG5cbi8qKlxuICogVEhFIFBST0dSQU1cbioqL1xuXG5pZihbJ3BhZ2UtdGhlLXByb2dyYW0nLCdzaW5nbGUtZnVsbC1zdGFjaycsJ3NpbmdsZS13ZWItZGV2ZWxvcG1lbnQnLCdzaW5nbGUtY29kaW5nLWludHJvJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSE9LTEgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAndmVuZXp1ZWxhJyl7XG4gIFxuICB2YXIgbWF4U3RpY2tQb3NpdGlvbiA9ICQoJyNwcmljaW5nJykub2Zmc2V0KCkudG9wIC0gMjA7XG4gIE1ha2VTdGlja3kuaW5pdCgnW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdJywgbWF4U3RpY2tQb3NpdGlvbik7XG4gIFxuICBcbiAgdmFyIFRoZVByb2dyYW0gPSByZXF1aXJlKCcuL3BhZ2VzL3Byb2dyYW0uanMnKS5kZWZhdWx0O1xuICBUaGVQcm9ncmFtLmluaXQoKTtcbiAgXG59XG5cblxuXG5cbi8qKlxuICogUFJJQ0lOR1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByaWNpbmcnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ByZWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL3ByaWNpbmcubXA0Jyk7XG4gIFxuICB2YXIgU2xpZGVyID0gcmVxdWlyZShcImJvb3RzdHJhcC1zbGlkZXJcIik7XG4gIHZhciBteVNsaWRlciA9IG5ldyBTbGlkZXIoJyNwcmljaW5nLXNsaWRlcicpO1xuICAvL3ZhciBzbGlkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNpbmctc2xpZGVyJyk7XG4gIG15U2xpZGVyLm9uKCdzbGlkZVN0b3AnLCBmdW5jdGlvbihuZXdWYWx1ZSl7XG4gICAgXG4gICAgdmFyIG1lc3NhZ2UgPSBudWxsO1xuICAgIHN3aXRjaChuZXdWYWx1ZSlcbiAgICB7XG4gICAgICBjYXNlIDA6IFxuICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBwcmljZTogJyQxMDAwIGRlcG9zaXQgKyAkODUzIC8gbW9udGgnLFxuICAgICAgICAgICAgZGV0YWlsczogJ1RoYW5rcyB0byBvdXIgcGFydG5lcnNoaXAgd2l0aCBRdW90YW5kYSB3ZSBoYXZlIG1hbmFnZWQgdG8gY3JlYXRlIHRoZSBtb3N0IGZsZXhpYmxlIHBsYWNlbWVudCBwbGFuIGluIHRvd24nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3F1b3RhbmRhLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSBub3cnLFxuICAgICAgICAgICAgYXBwbHlVUkw6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHByaWNlOiAnJDEwMDAgZGVwb3NpdCArICQ0NDUgLyBtb250aCcsXG4gICAgICAgICAgICBkZXRhaWxzOiAnVGhhbmtzIHRvIG91ciBwYXJ0bmVyc2hpcCB3aXRoIFF1b3RhbmRhIHdlIGhhdmUgbWFuYWdlZCB0byBjcmVhdGUgdGhlIG1vc3QgZmxleGlibGUgcGxhY2VtZW50IHBsYW4gaW4gdG93bicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvcXVvdGFuZGEucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IG5vdycsXG4gICAgICAgICAgICBhcHBseVVSTDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogXG4gICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHByaWNlOiAnJDEwMDAgZGVwb3NpdCArICQyNDAgLyBtb250aCcsXG4gICAgICAgICAgICBkZXRhaWxzOiAnVGhhbmtzIHRvIG91ciBwYXJ0bmVyc2hpcCB3aXRoIFF1b3RhbmRhIHdlIGhhdmUgbWFuYWdlZCB0byBjcmVhdGUgdGhlIG1vc3QgZmxleGlibGUgcGxhY2VtZW50IHBsYW4gaW4gdG93bicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvcXVvdGFuZGEucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IG5vdycsXG4gICAgICAgICAgICBhcHBseVVSTDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogXG4gICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHByaWNlOiAnJDE5OCAvIG1vbnRoIChObyBkZXBvc2l0KScsXG4gICAgICAgICAgICBkZXRhaWxzOiAnQXBwbHkgdG8gU2tpbGxzZnVuZCBhbmQgZ2V0IDM2IG1vbnRoIGZpbmFuY2luZywgcGF5IDxzdHJvbmc+b25seSAkMTk4IHBlciBtb250aDwvc3Ryb25nPiBhbmQgd2l0aCBubyBkZXBvc2l0IHRvIHN0YXJ0LicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvc2tpbGxzZnVuZC5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgdG8gZmluYW5jaW5nJyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiAnaHR0cDovLzRnZWVrc2FjYWRlbXkuc2tpbGxzLmZ1bmQnXG4gICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IFxuICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBwcmljZTogJyQxMzUgLyBtb250aCAoTm8gZGVwb3NpdCknLFxuICAgICAgICAgICAgZGV0YWlsczogJ0FwcGx5IHRvIFNraWxsc2Z1bmQgYW5kIGdldCA2MCBtb250aCBmaW5hbmNpbmcsIHBheSA8c3Ryb25nPm9ubHkgJDEzNSBldmVyeSBtb250aDwvc3Ryb25nPiBhbmQgd2l0aCBubyBkZXBvc2l0IHRvIHN0YXJ0LicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvc2tpbGxzZnVuZC5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgdG8gZmluYW5jaW5nJyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiAnaHR0cDovLzRnZWVrc2FjYWRlbXkuc2tpbGxzLmZ1bmQnXG4gICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKG1lc3NhZ2Upe1xuICAgICAgaWYodHlwZW9mKG1lc3NhZ2UucHJpY2UpID09ICdzdHJpbmcnKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtbGFiZWwnKS5pbm5lckhUTUwgPSBtZXNzYWdlLnByaWNlO1xuICAgICAgaWYodHlwZW9mKG1lc3NhZ2UuZGV0YWlscykgPT0gJ3N0cmluZycpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbmNpbmctZGV0YWlscycpLmlubmVySFRNTCA9IG1lc3NhZ2UuZGV0YWlscztcbiAgICAgIGlmKHR5cGVvZihtZXNzYWdlLmxvZ28pID09ICdzdHJpbmcnKXtcbiAgICAgICAgdmFyIGxvZ29FbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYW5jaW5nLWxvZ28nKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlVVJMID0gbG9nb0VsbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGV1cmwnKTtcbiAgICAgICAgbG9nb0VsbS5zcmMgPSB0ZW1wbGF0ZVVSTCArIG1lc3NhZ2UubG9nbztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdmFyIGFwcGx5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFuY2luZy1idG4nKTtcbiAgICAgIGFwcGx5QnRuLmlubmVySFRNTCA9IG1lc3NhZ2UuYXBwbHlUZXh0O1xuICAgICAgaWYobWVzc2FnZS5hcHBseVVSTCl7XG4gICAgICAgIGFwcGx5QnRuLmhyZWYgPSBtZXNzYWdlLmFwcGx5VVJMO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhciBkZWZhdWx0VVJMID0gYXBwbHlCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFwcGx5bGluaycpO1xuICAgICAgICBhcHBseUJ0bi5ocmVmID0gZGVmYXVsdFVSTDtcbiAgICAgIH1cbiAgICB9XG5cdFx0XG5cdFx0dmFyIHBheW1lbnRQbGFuQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXltZW50LXBsYW4nKTtcblx0XHQvL3BheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYmcteWVsbG93XCIpO1xuXHRcdHBheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2xvd1wiKTtcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdCAgLy9wYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LmFkZChcImJnLXllbGxvd1wiKTtcblx0XHRcdHBheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZ2xvd1wiKTtcblx0XHR9LCAyMDApO1xuICAgIFxuICB9KTtcbiAgXG4gIHJlcXVpcmUoJy4vcGFnZXMvcHJpY2luZy5qcycpO1xuXG59XG5cbi8qKlxuICogQ0FMRU5EQVJcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcicgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXJpbycpe1xuICBcbiAgU21hcnRGaWx0ZXJzLmluaXQoe1xuICAgIGxvYWRpbmdBbmltYXRpb246ICcuY291cnNlcyAubG9hZGluZy1hbmltYXRpb24nLFxuICAgIHJlc3VsdHNDb250YWluZXI6ICcuY291cnNlcyAubGlzdC1ncm91cCcsXG4gICAgZmlsdGVyRHJvcGRvd246ICcuZHJvcGRvd24tbWVudSBhJyxcbiAgICBmaWx0ZXJzOiBbXG4gICAgICB7IGJ1dHRvbjogJyNsb2NhdGlvblNlbGVjdG9yJywgdXJsS2V5OiAnbCcsIG9wdGlvbnM6ICcubG9jYXRpb24tb3B0aW9uJyB9LFxuICAgICAgeyBidXR0b246ICcjbGFuZ1NlbGVjdG9yJywgdXJsS2V5OiAnbGFuZycsIG9wdGlvbnM6ICcubGFuZy1vcHRpb24nfSxcbiAgICAgIHsgYnV0dG9uOiAnI3R5cGVTZWxlY3RvcicsIHVybEtleTogJ3R5cGUnLCBvcHRpb25zOiAnLnR5cGUtb3B0aW9uJ31cbiAgICBdXG4gIH0pO1xuICBcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCA0MDAwKTtcbiAgICBcbn1cblxuLyoqXG4gKiBMT0NBVElPTlxuKiovXG5cbmlmKFsnc2luZ2xlLWxvY2F0aW9uJ10uaW5kZXhPZihXUEFTX0FQUC52aWV3LnRlbXBsYXRlKSAhPSAtMSl7XG4gIHJlcXVpcmUoJy4vcGFnZXMvbG9jYXRpb24uanMnKTtcbn1cblxuLyoqXG4gKiBQQVJUTkVSU1xuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3BhcnRuZXJzJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdzb2Npb3MnKXtcbiAgXG4gIGpRdWVyeSgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL29mZmljZS5tcDQnLHtvdmVybGF5OiAnYmxhY2snfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uICgkKSB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICovXG4gIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWJldGEnO1xuICB2YXIgREFUQV9LRVkgPSAnYnMudG9vbHRpcCc7XG4gIHZhciBFVkVOVF9LRVkgPSAnLicgKyBEQVRBX0tFWTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuICB2YXIgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIENMQVNTX1BSRUZJWCArICdcXFxcUysnLCAnZycpO1xuXG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gICAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nKScsXG4gICAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJyhzdHJpbmd8YXJyYXkpJ1xuICB9O1xuXG4gIHZhciBBdHRhY2htZW50TWFwID0ge1xuICAgIEFVVE86ICdhdXRvJyxcbiAgICBUT1A6ICd0b3AnLFxuICAgIFJJR0hUOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogJ2xlZnQnXG4gIH07XG5cbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJ1xuICB9O1xuXG4gIHZhciBIb3ZlclN0YXRlID0ge1xuICAgIFNIT1c6ICdzaG93JyxcbiAgICBPVVQ6ICdvdXQnXG4gIH07XG5cbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6ICdoaWRlJyArIEVWRU5UX0tFWSxcbiAgICBISURERU46ICdoaWRkZW4nICsgRVZFTlRfS0VZLFxuICAgIFNIT1c6ICdzaG93JyArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogJ3Nob3duJyArIEVWRU5UX0tFWSxcbiAgICBJTlNFUlRFRDogJ2luc2VydGVkJyArIEVWRU5UX0tFWSxcbiAgICBDTElDSzogJ2NsaWNrJyArIEVWRU5UX0tFWSxcbiAgICBGT0NVU0lOOiAnZm9jdXNpbicgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNPVVQ6ICdmb2N1c291dCcgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VFTlRFUjogJ21vdXNlZW50ZXInICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFTEVBVkU6ICdtb3VzZWxlYXZlJyArIEVWRU5UX0tFWVxuICB9O1xuXG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuXG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBUT09MVElQOiAnLnRvb2x0aXAnLFxuICAgIFRPT0xUSVBfSU5ORVI6ICcudG9vbHRpcC1pbm5lcicsXG4gICAgQVJST1c6ICcuYXJyb3cnXG4gIH07XG5cbiAgdmFyIFRyaWdnZXIgPSB7XG4gICAgSE9WRVI6ICdob3ZlcicsXG4gICAgRk9DVVM6ICdmb2N1cycsXG4gICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgTUFOVUFMOiAnbWFudWFsJ1xuXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvb2x0aXAoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICAgIC8vIHByaXZhdGVcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG5cbiAgICAgIC8vIHByb3RlY3RlZFxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcblxuICAgIC8vIHB1YmxpY1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmICgkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuXG4gICAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKTtcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICQodGhpcy50aXApLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcblxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpO1xuICAgICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICAgIHZhciBpc0luVGhlRG9tID0gJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgICAgdmFyIHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKTtcblxuICAgICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKTtcblxuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgICAgJCh0aXApLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKCEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKTtcblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB7XG4gICAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgIG9mZnNldDogdGhpcy5jb25maWcub2Zmc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgICBlbGVtZW50OiBTZWxlY3Rvci5BUlJPV1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkKCdib2R5JykuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5fZml4VHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSBfdGhpcy5faG92ZXJTdGF0ZTtcbiAgICAgICAgICBfdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgICAkKF90aGlzLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pO1xuXG4gICAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgJCh0aGlzLnRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUb29sdGlwLl9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKTtcbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLl9jbGVhblRpcENsYXNzKCk7XG4gICAgICAgIF90aGlzMi5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuICAgICAgICAkKF90aGlzMi5lbGVtZW50KS50cmlnZ2VyKF90aGlzMi5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pO1xuICAgICAgICBpZiAoX3RoaXMyLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpczIuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKTtcblxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkNMSUNLXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkZPQ1VTXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcblxuICAgICAgICAkKHRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcHJvdGVjdGVkXG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmFkZEF0dGFjaG1lbnRDbGFzcyA9IGZ1bmN0aW9uIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhDTEFTU19QUkVGSVggKyAnLScgKyBhdHRhY2htZW50KTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVE9PTFRJUF9JTk5FUiksIHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFICsgJyAnICsgQ2xhc3NOYW1lLlNIT1cpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5zZXRFbGVtZW50Q29udGVudCA9IGZ1bmN0aW9uIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgICB2YXIgaHRtbCA9IHRoaXMuY29uZmlnLmh0bWw7XG4gICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjb250ZW50KSkgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50W2h0bWwgPyAnaHRtbCcgOiAndGV4dCddKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgdmFyIHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9O1xuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX3NldExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpO1xuXG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIHZhciBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDogX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU47XG4gICAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDogX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUO1xuXG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXMzLmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChfdGhpczMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9maXhUaXRsZSA9IGZ1bmN0aW9uIF9maXhUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZVR5cGUgPSBfdHlwZW9mKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKSk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9lbnRlciA9IGZ1bmN0aW9uIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPVztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG5cbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fbGVhdmUgPSBmdW5jdGlvbiBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcblxuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5faXNXaXRoQWN0aXZlVHJpZ2dlciA9IGZ1bmN0aW9uIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgZm9yICh2YXIgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsICQodGhpcy5lbGVtZW50KS5kYXRhKCksIGNvbmZpZyk7XG5cbiAgICAgIGlmIChjb25maWcuZGVsYXkgJiYgdHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy50aXRsZSAmJiB0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5jb250ZW50ICYmIHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB2YXIgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKTtcbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKSB7XG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKCk7XG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KGRhdGEucGxhY2VtZW50KSk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9maXhUcmFuc2l0aW9uID0gZnVuY3Rpb24gX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvbjtcbiAgICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uO1xuICAgIH07XG5cbiAgICAvLyBzdGF0aWNcblxuICAgIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuICAgICAgICB2YXIgX2NvbmZpZyA9ICh0eXBlb2YgY29uZmlnID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjb25maWcpKSA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZXRob2QgbmFtZWQgXCInICsgY29uZmlnICsgJ1wiJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAgICBrZXk6ICdWRVJTSU9OJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdEZWZhdWx0JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdOQU1FJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdEQVRBX0tFWScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0V2ZW50JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRXZlbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnRVZFTlRfS0VZJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0RlZmF1bHRUeXBlJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvb2x0aXA7XG4gIH0oKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXA7XG59KGpRdWVyeSk7IC8qIGdsb2JhbCBQb3BwZXIgKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvb2x0aXAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgTWFrZVN0aWNreSA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgIHZhciBwbHVnaW4gPSB7fTtcbiAgICAvL1tkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiXVxuICAgIHBsdWdpbi5pbml0ID0gZnVuY3Rpb24oc2VsZWN0b3IsIG1heFN0aWNrUG9zaXRpb24pXG4gICAge1xuICAgICAgICAvLyBGaW5kIGFsbCBkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiIGVsZW1lbnRzXG4gICAgICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHN0aWNreSA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIHN0aWNreVdyYXBwZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdzdGlja3ktd3JhcHBlcicpOyAvLyBpbnNlcnQgaGlkZGVuIGVsZW1lbnQgdG8gbWFpbnRhaW4gYWN0dWFsIHRvcCBvZmZzZXQgb24gcGFnZVxuICAgICAgICAgIHN0aWNreS5iZWZvcmUoc3RpY2t5V3JhcHBlcik7XG4gICAgICAgICAgc3RpY2t5LmFkZENsYXNzKCdzdGlja3knKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBTY3JvbGwgJiByZXNpemUgZXZlbnRzXG4gICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwuc3RpY2t5LW9uc2Nyb2xsIHJlc2l6ZS5zdGlja3ktb25zY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQodGhpcyksIG1heFN0aWNrUG9zaXRpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIE9uIHBhZ2UgbG9hZFxuICAgICAgICAgIHN0aWNreVRvZ2dsZShzdGlja3ksIHN0aWNreVdyYXBwZXIsICQod2luZG93KSwgbWF4U3RpY2tQb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgc2Nyb2xsRWxlbWVudCwgbWF4U3RpY2tQb3NpdGlvbikge1xuICAgICAgICAgIHZhciBzdGlja3lIZWlnaHQgPSBzdGlja3kub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICB2YXIgc3RpY2t5V2lkdGggPSBzdGlja3kub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBvZmZzZXQgPSBzdGlja3lXcmFwcGVyLm9mZnNldCgpO1xuICAgICAgICAgIHZhciBzdGlja3lUb3AgPSBvZmZzZXQudG9wO1xuICAgICAgICAgIHZhciBzdGlja3lMZWZ0ID0gb2Zmc2V0LmxlZnQ7XG4gICAgXG4gICAgICAgICAgdmFyIHdpbmRvd1Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKTtcbiAgICAgICAgICBpZiAod2luZG93U2Nyb2xsUG9zaXRpb24gPj0gc3RpY2t5VG9wKXtcbiAgICAgICAgICAgIGlmKHdpbmRvd1Njcm9sbFBvc2l0aW9uIDwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoc3RpY2t5SGVpZ2h0KTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ3dpZHRoJyxzdGlja3lXaWR0aCsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsc3RpY2t5TGVmdCsncHgnKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreVdyYXBwZXIuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgICAgIHN0aWNreS5hZGRDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywobWF4U3RpY2tQb3NpdGlvbi02NjUpKydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMTVweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgc3RpY2t5LnJlbW92ZUNsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygnbGVmdCcsJzAnKTtcbiAgICAgICAgICAgIHN0aWNreS5jc3MoJ3RvcCcsJzAnKTtcbiAgICAgICAgICAgIHN0aWNreVdyYXBwZXIuaGVpZ2h0KCdhdXRvJyk7XG4gICAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3N0aWNreS10b2dnbGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIFNtYXJ0RmlsdGVycyA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgIHZhciBwbHVnaW4gPSB7fTtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBmaWx0ZXJzOiBbXSxcbiAgICAgICAgZmlsdGVyRHJvcGRvd246ICcnLFxuICAgICAgICBsb2FkaW5nQW5pbWF0aW9uOiAnJyxcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lcjogJycsXG4gICAgfVxuICAgIFxuICAgIFxuICAgIHBsdWdpbi5pbml0ID0gZnVuY3Rpb24oc2V0dGluZ3Mpe1xuICAgICAgICAkLmV4dGVuZCggY29uZmlnLCBzZXR0aW5ncyApO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZyB0aGUgU21hcnRGaWx0ZXJzJyk7XG4gICAgICAgIFxuICAgICAgICB2YXIgdXJsVmFycyA9IGdldFVybFZhcnMoKTtcbiAgICAgICAgc2V0RmlsdGVyc0RlZmF1bHRTdGF0ZXModXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICAkKGNvbmZpZy5maWx0ZXJEcm9wZG93bikub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpeyAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5odG1sKCQodGhpcykuaHRtbCgpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYodmFsdWUgIT0gJ2FsbCcpIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcbiAgICAgICAgICAgIC8vZWxzZSB1cmxWYXJzID0gdW5zZXRBcnJheSh1cmxWYXJzLGJ1dHRvbi5kYXRhKCdrZXknKSk7XG4gICAgICAgICAgICBlbHNlIGRlbGV0ZSB1cmxWYXJzW2J1dHRvbi5kYXRhKCdrZXknKV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoY29uZmlnLmxvYWRpbmdBbmltYXRpb24pLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAkKGNvbmZpZy5yZXN1bHRzQ29udGFpbmVyKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdzaG93Jyk7Ly9oaWRlIHRoZSBkcm9wZG93biBhZnRlciBjbGlja2VkXG4gICAgICAgICAgICAvL3ZhciBwYXJlbnREcm9wZG93biA9IGF1eC5wYXJlbnQoKTtcbiAgICAgICAgICAgIC8vcGFyZW50RHJvcGRvd25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBnZXRCYXNlVVJMKCkgKyAnPycgKyBzZXJpYWxpemUodXJsVmFycyApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgZmlsdGVyIHZhbHVlcycsIHVybFZhcnMpO1xuICAgICAgICBcbiAgICAgICAgY29uZmlnLmZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihmaWx0ZXIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyLnVybEtleSk7XG4gICAgICAgICAgICBpZihmaWx0ZXIudXJsS2V5IGluIHVybFZhcnMpICQoZmlsdGVyLmJ1dHRvbikuaHRtbCgkKGZpbHRlci5vcHRpb25zKydbZGF0YS12YWx1ZT1cIicrdXJsVmFyc1tmaWx0ZXIudXJsS2V5XSsnXCJdJykuaHRtbCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldEJhc2VVUkwoKXtcbiAgICAgICAgdmFyIGJhc2VVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHBpZWNlcyA9IGJhc2VVUkwuc3BsaXQoJz8nKTtcbiAgICAgICAgaWYocGllY2VzLmxlbmd0aD4xKSBiYXNlVVJMID0gcGllY2VzWzBdO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJhc2VVUkw7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGdldFVybFZhcnMoKXtcbiAgICAgIFxuICAgICAgICB2YXIgdmFycyA9IFtdLCBoYXNoO1xuICAgICAgICB2YXIgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignPycpICsgMSkuc3BsaXQoJyYnKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGhhc2hlcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgdmFycy5wdXNoKGhhc2hbMF0pO1xuICAgICAgICAgICAgdmFyc1toYXNoWzBdXSA9IGhhc2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZSB2YXJzWycwJ107XG4gICAgICAgIGRlbGV0ZSB2YXJzW2dldEJhc2VVUkwoKV07XG4gICAgICAgIGRlbGV0ZSB2YXJzWycnXTtcbiAgXG4gICAgICAgIHJldHVybiB2YXJzO1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gICAgICAgIHZhciBzdHIgPSBbXTtcbiAgICAgICAgZm9yKHZhciBwIGluIG9iailcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtwXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBwbHVnaW47XG4gICAgXG59KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zbWFydC1maWx0ZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxvYWRWaWRlbyA9IGZ1bmN0aW9uKHZpZGVvVVJMLCBzZXR0aW5ncyl7XG4gIGlmKHR5cGVvZiBzZXR0aW5ncyA9PSAndW5kZWZpbmVkJykgc2V0dGluZ3MgPSB7fTtcbiAgdmFyIHMgPSBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gIFxuICB2YXIgdmlkZW9WaWV3cG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb1ZpZXdwb3J0LmlkID0gXCJ2aWRlby12aWV3cG9ydFwiO1xuICB2aWRlb1ZpZXdwb3J0LmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLXZpZXdwb3J0Jyk7XG4gIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodmlkZW9WaWV3cG9ydCwgcyk7XG4gIFxuICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlby5zcmMgPSB2aWRlb1VSTDsgdmlkZW8uYXV0b1BsYXkgPSB0cnVlOyB2aWRlby5sb29wID0gdHJ1ZTsgdmlkZW8ubXV0ZWQgPSB0cnVlOyBcbiAgdmlkZW8uY2xhc3NMaXN0LmFkZCgndmlkZW8tYmFja2dyb3VuZCcpO1xuICB2aWRlb1ZpZXdwb3J0LmFwcGVuZENoaWxkKHZpZGVvKTtcbiAgXG4gIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLGZ1bmN0aW9uKCl7IHZpZGVvLnBsYXkoKTsgfSk7XG4gIHZhciB2aWRfd19vcmlnID0gcGFyc2VJbnQoJCh3aW5kb3cpLndpZHRoKCkpO1xuICB2YXIgdmlkX2hfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLmhlaWdodCgpKTtcbiAgdmFyIG1pbl93ID0gNDAwO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxmdW5jdGlvbigpe1xuICAgICAgdmFyIHNvdXJjZVZpZGVvV2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgICAgdmFyIHNvdXJjZVZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gICAgICAvL2lmKHZpZF93X29yaWcgPD0gMCB8fCB2aWRfd19vcmlnID09IEluZmluaXR5KSB2aWRfd19vcmlnID0gcGFyc2VJbnQoJCh2aWRlbykud2lkdGgoKSk7XG4gICAgICAvL2lmKHZpZF9oX29yaWcgPD0gMCB8fCB2aWRfaF9vcmlnID09IEluZmluaXR5KSB2aWRfaF9vcmlnID0gcGFyc2VJbnQoJCh2aWRlbykuaGVpZ2h0KCkpO1xuICAgICAgdmFyIGFkZGVkUGFkZGluZyA9IDEwMDtcbiAgICAgIHZhciB0YXJnZXRfd2l0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgdmFyIHRhcmdldF9oZWlnaCA9ICQoJy5tYXN0aGVhZCcpLmhlaWdodCgpICsgJCgnbmF2Lm5hdmJhcicpLmhlaWdodCgpICsgcGFyc2VJbnQoJCgnLm1hc3RoZWFkJykuY3NzKCdtYXJnaW4tdG9wJykpICsgcGFyc2VJbnQoJCgnbmF2Lm5hdmJhcicpLmNzcygnbWFyZ2luLXRvcCcpKSArIGFkZGVkUGFkZGluZztcbiAgICAgICQodmlkZW9WaWV3cG9ydCkud2lkdGgodGFyZ2V0X3dpdGgpO1xuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5oZWlnaHQobmV3Vmlld0hlaWdodCk7XG4gIFxuICAgICAgdmFyIHNjYWxlX2ggPSB0YXJnZXRfd2l0aCAvIHZpZF93X29yaWc7XG4gICAgICB2YXIgc2NhbGVfdiA9IHRhcmdldF9oZWlnaCAvIHZpZF9oX29yaWc7XG4gICAgICB2YXIgc2NhbGUgPSBzY2FsZV9oID4gc2NhbGVfdiA/IHNjYWxlX2ggOiBzY2FsZV92O1xuICBcbiAgICAgIFxuICAgICAgaWYgKHNjYWxlICogdmlkX3dfb3JpZyA8IG1pbl93KSBzY2FsZSA9IG1pbl93IC8gdmlkX3dfb3JpZztcbiAgICAgIFxuICAgICAgdmFyIG5ld1ZpZXdXaWR0aCA9IHNjYWxlICogdmlkX3dfb3JpZztcbiAgICAgIHZhciBuZXdWaWV3SGVpZ2h0ID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICAgICAgXG4gICAgICAvL2lmIHRoZSBuZXcgd2lkdGggZG9lcyBub3QgY292ZXIgdGhlIGVudGlyZSBzY3JlZW4gd2lkdGhcbiAgICAgIGlmIChuZXdWaWV3V2lkdGggPCBzb3VyY2VWaWRlb1dpZHRoKSBzY2FsZSA9IHNvdXJjZVZpZGVvV2lkdGggLyB2aWRfd19vcmlnO1xuICAgICAgaWYgKG5ld1ZpZXdIZWlnaHQgPCBzb3VyY2VWaWRlb0hlaWdodCAmJiBzY2FsZSA8IChzb3VyY2VWaWRlb0hlaWdodCAvIHZpZF9oX29yaWcpKSBzY2FsZSA9IHNvdXJjZVZpZGVvSGVpZ2h0IC8gdmlkX2hfb3JpZztcbiAgICAgIFxuICAgICAgbmV3Vmlld1dpZHRoID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICAgICAgbmV3Vmlld0hlaWdodCA9IHNjYWxlICogdmlkX3dfb3JpZztcbiAgXG4gICAgICAkKHZpZGVvKS53aWR0aChuZXdWaWV3V2lkdGgpO1xuICAgICAgJCh2aWRlbykuaGVpZ2h0KG5ld1ZpZXdIZWlnaHQpO1xuICBcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuc2Nyb2xsTGVmdCgobmV3Vmlld1dpZHRoIC0gdGFyZ2V0X3dpdGgpIC8gMik7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLnNjcm9sbFRvcCgobmV3Vmlld0hlaWdodCAtIHRhcmdldF9oZWlnaCkgLyAyKTtcbiAgfSk7XG4gICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgXG4gIGlmKHR5cGVvZiBzZXR0aW5ncy5vdmVybGF5ICE9ICd1bmRlZmluZWQnKXtcbiAgICBcbiAgICB2YXIgb3ZlcmxheSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImFic29sdXRlXCI7XG4gICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3Mub3ZlcmxheTtcbiAgICBvdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBcIjAuNFwiO1xuICAgIG92ZXJsYXkuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgb3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBvdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG92ZXJsYXksIHMpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkVmlkZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVGhlUHJvZ3JhbSA9IChmdW5jdGlvbigpe1xuICAgIFxuICAgIHZhciB0aGVzY29wZSA9IHt9O1xuICAgIC8vIENhY2hlIHNlbGVjdG9yc1xuICAgIHZhciB0b3BNZW51ID0gJChcIi5wcm9ncmFtLW1lbnVcIiksXG4gICAgICAgIHRvcE1lbnVIZWlnaHQgPSB0b3BNZW51Lm91dGVySGVpZ2h0KCkrMTUsXG4gICAgICAgIC8vIEFsbCBsaXN0IGl0ZW1zXG4gICAgICAgIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFbaHJlZio9JyMnXVwiKSxcbiAgICAgICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xuICAgICAgICAgIGlmIChpdGVtLmxlbmd0aCkgeyByZXR1cm4gaXRlbTsgfVxuICAgICAgICB9KTtcbiAgICBcbiAgICB0aGVzY29wZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIC8vIEJpbmQgdG8gc2Nyb2xsXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpK3RvcE1lbnVIZWlnaHQ7XG4gICAgICAgIFxuICAgICAgICAgICAvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxuICAgICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcbiAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoLTFdO1xuICAgICAgICAgICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XG4gICAgICAgICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXG4gICAgICAgICAgIG1lbnVJdGVtc1xuICAgICAgICAgICAgIC5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKVxuICAgICAgICAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiK2lkK1wiJ11cIikucGFyZW50KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhlc2NvcGU7XG4gICAgXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUaGVQcm9ncmFtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIgICAgZnVuY3Rpb24gUGFydGljbGUoIHgsIHksIHJhZGl1cyApIHtcbiAgICBcdHRoaXMuaW5pdCggeCwgeSwgcmFkaXVzICk7XG4gICAgfVxuICAgIFxuICAgIFBhcnRpY2xlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICBcdGluaXQ6IGZ1bmN0aW9uKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDtcbiAgICBcdFx0dGhpcy53YW5kZXIgPSAwLjE1O1xuICAgIFx0XHR0aGlzLnRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgICBcdFx0dGhpcy5kcmFnID0gMC45MjtcbiAgICBcdFx0dGhpcy5jb2xvciA9ICcjZmZmJztcbiAgICBcbiAgICBcdFx0dGhpcy54ID0geCB8fCAwLjA7XG4gICAgXHRcdHRoaXMueSA9IHkgfHwgMC4wO1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ID0gMC4wO1xuICAgIFx0XHR0aGlzLnZ5ID0gMC4wO1xuICAgIFx0fSxcbiAgICBcbiAgICBcdG1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIFx0XHR0aGlzLnggKz0gdGhpcy52eDtcbiAgICBcdFx0dGhpcy55ICs9IHRoaXMudnk7XG4gICAgXG4gICAgXHRcdHRoaXMudnggKj0gdGhpcy5kcmFnO1xuICAgIFx0XHR0aGlzLnZ5ICo9IHRoaXMuZHJhZztcbiAgICBcbiAgICBcdFx0dGhpcy50aGV0YSArPSByYW5kb20oIC0wLjUsIDAuNSApICogdGhpcy53YW5kZXI7XG4gICAgXHRcdHRoaXMudnggKz0gc2luKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXHRcdHRoaXMudnkgKz0gY29zKCB0aGlzLnRoZXRhICkgKiAwLjE7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzICo9IDAuOTY7XG4gICAgXHRcdHRoaXMuYWxpdmUgPSB0aGlzLnJhZGl1cyA+IDAuNTtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRkcmF3OiBmdW5jdGlvbiggY3R4ICkge1xuICAgIFxuICAgIFx0XHRjdHguYmVnaW5QYXRoKCk7XG4gICAgXHRcdGN0eC5hcmMoIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgVFdPX1BJICk7XG4gICAgXHRcdGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIFx0XHRjdHguZmlsbCgpO1xuICAgIFx0fVxuICAgIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQYXJ0aWNsZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgdmFyIE1BWF9QQVJUSUNMRVMgPSAyODA7XG4gIHZhciBDT0xPVVJTID0gWyAnIzY5RDJFNycsICcjQTdEQkQ4JywgJyNFMEU0Q0MnLCAnI0YzODYzMCcsICcjRkE2OTAwJywgJyNGRjRFNTAnLCAnI0Y5RDQyMycgXTtcbiAgXG4gIHZhciBwYXJ0aWNsZXMgPSBbXTtcbiAgdmFyIHBvb2wgPSBbXTtcbiAgXG4gIHZhciBTa2V0Y2ggPSByZXF1aXJlKFwiLi4vbGliL3NrZXRjaFwiKTtcbiAgdmFyIGNhbnZhc0JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNiZy1za2V0Y2gnICk7XG4gIGNhbnZhc0JnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHZhciBwcmljaW5nU2tldGNoID0gU2tldGNoLmNyZWF0ZSh7XG4gIFx0Y29udGFpbmVyOiBjYW52YXNCZ1xuICB9KTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0Ly8gU2V0IG9mZiBzb21lIGluaXRpYWwgcGFydGljbGVzLlxuICBcdHZhciBpLCB4LCB5O1xuICBcbiAgXHRmb3IgKCBpID0gMDsgaSA8IDIwOyBpKysgKSB7XG4gIFx0XHR4ID0gKCBwcmljaW5nU2tldGNoLndpZHRoICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0eSA9ICggcHJpY2luZ1NrZXRjaC5oZWlnaHQgKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHRwcmljaW5nU2tldGNoLnNwYXduKCB4LCB5ICk7XG4gIFx0fVxuICB9O1xuICBcbiAgcHJpY2luZ1NrZXRjaC5zcGF3biA9IGZ1bmN0aW9uKCB4LCB5ICkge1xuICBcbiAgXHRpZiAoIHBhcnRpY2xlcy5sZW5ndGggPj0gTUFYX1BBUlRJQ0xFUyApXG4gIFx0XHRwb29sLnB1c2goIHBhcnRpY2xlcy5zaGlmdCgpICk7XG4gIFxuICBcdHZhciBwYXJ0aWNsZSA9IHBvb2wubGVuZ3RoID8gcG9vbC5wb3AoKSA6IG5ldyBQYXJ0aWNsZSgpO1xuICBcdHBhcnRpY2xlLmluaXQoIHgsIHksIHJhbmRvbSggNSwgNDAgKSApO1xuICBcbiAgXHRwYXJ0aWNsZS53YW5kZXIgPSByYW5kb20oIDAuNSwgMi4wICk7XG4gIFx0cGFydGljbGUuY29sb3IgPSByYW5kb20oIENPTE9VUlMgKTtcbiAgXHRwYXJ0aWNsZS5kcmFnID0gcmFuZG9tKCAwLjksIDAuOTkgKTtcbiAgXG4gIFx0dmFyIHRoZXRhID0gcmFuZG9tKCBUV09fUEkgKTtcbiAgXHR2YXIgZm9yY2UgPSByYW5kb20oIDIsIDggKTtcbiAgXG4gIFx0cGFydGljbGUudnggPSBzaW4oIHRoZXRhICkgKiBmb3JjZTtcbiAgXHRwYXJ0aWNsZS52eSA9IGNvcyggdGhldGEgKSAqIGZvcmNlO1xuICBcbiAgXHRwYXJ0aWNsZXMucHVzaCggcGFydGljbGUgKTtcbiAgfVxuICBcbiAgcHJpY2luZ1NrZXRjaC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0dmFyIGksIHBhcnRpY2xlO1xuICBcbiAgXHRmb3IgKCBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcbiAgXHRcdHBhcnRpY2xlID0gcGFydGljbGVzW2ldO1xuICBcbiAgXHRcdGlmICggcGFydGljbGUuYWxpdmUgKSBwYXJ0aWNsZS5tb3ZlKCk7XG4gIFx0XHRlbHNlIHBvb2wucHVzaCggcGFydGljbGVzLnNwbGljZSggaSwgMSApWzBdICk7XG4gIFx0fVxuICB9O1xuICBcbiAgcHJpY2luZ1NrZXRjaC5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHByaWNpbmdTa2V0Y2guZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uICA9ICdsaWdodGVyJztcbiAgXHRcbiAgXHRmb3IgKCB2YXIgaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXHRcdHBhcnRpY2xlc1tpXS5kcmF3KCBwcmljaW5nU2tldGNoICk7XG4gIFx0fVxuICB9O1xuICBcbiAgcHJpY2luZ1NrZXRjaC5tb3VzZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlLCB0aGV0YSwgZm9yY2UsIHRvdWNoLCBtYXgsIGksIGosIG47XG4gIFxuICBcdGZvciAoIGkgPSAwLCBuID0gcHJpY2luZ1NrZXRjaC50b3VjaGVzLmxlbmd0aDsgaSA8IG47IGkrKyApIHtcbiAgXG4gIFx0XHR0b3VjaCA9IHByaWNpbmdTa2V0Y2gudG91Y2hlc1tpXSwgbWF4ID0gcmFuZG9tKCAxLCA0ICk7XG4gIFx0XHRmb3IgKCBqID0gMDsgaiA8IG1heDsgaisrICkgcHJpY2luZ1NrZXRjaC5zcGF3biggdG91Y2gueCwgdG91Y2gueSApO1xuICBcdH1cbiAgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcmljaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBDb3B5cmlnaHQgKEMpIDIwMTMgSnVzdGluIFdpbmRsZSwgaHR0cDovL3NvdWx3aXJlLmNvLnVrICovXG5cbihmdW5jdGlvbiAoIHJvb3QsIGZhY3RvcnkgKSB7XG5cbiAgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAvLyBDb21tb25KUyBsaWtlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJvb3QsIHJvb3QuZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblxuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZnVuY3Rpb24oKSB7IHJldHVybiBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7IH0pO1xuXG4gIH0gZWxzZSB7XG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbFxuICAgIHJvb3QuU2tldGNoID0gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiAoIHdpbmRvdywgZG9jdW1lbnQgKSB7XG5cblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25maWdcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIE1BVEhfUFJPUFMgPSAnRSBMTjEwIExOMiBMT0cyRSBMT0cxMEUgUEkgU1FSVDFfMiBTUVJUMiBhYnMgYWNvcyBhc2luIGF0YW4gY2VpbCBjb3MgZXhwIGZsb29yIGxvZyByb3VuZCBzaW4gc3FydCB0YW4gYXRhbjIgcG93IG1heCBtaW4nLnNwbGl0KCAnICcgKTtcbiAgdmFyIEhBU19TS0VUQ0ggPSAnX19oYXNTa2V0Y2gnO1xuICB2YXIgTSA9IE1hdGg7XG5cbiAgdmFyIENBTlZBUyA9ICdjYW52YXMnO1xuICB2YXIgV0VCR0wgPSAnd2ViZ2wnO1xuICB2YXIgRE9NID0gJ2RvbSc7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIHZhciBpbnN0YW5jZXMgPSBbXTtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgIGF1dG9zdGFydDogdHJ1ZSxcbiAgICBhdXRvY2xlYXI6IHRydWUsXG4gICAgYXV0b3BhdXNlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogZG9jLmJvZHksXG4gICAgaW50ZXJ2YWw6IDEsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICByZXRpbmE6IGZhbHNlLFxuICAgIHR5cGU6IENBTlZBU1xuICB9O1xuXG4gIHZhciBrZXlNYXAgPSB7XG5cbiAgICAgODogJ0JBQ0tTUEFDRScsXG4gICAgIDk6ICdUQUInLFxuICAgIDEzOiAnRU5URVInLFxuICAgIDE2OiAnU0hJRlQnLFxuICAgIDI3OiAnRVNDQVBFJyxcbiAgICAzMjogJ1NQQUNFJyxcbiAgICAzNzogJ0xFRlQnLFxuICAgIDM4OiAnVVAnLFxuICAgIDM5OiAnUklHSFQnLFxuICAgIDQwOiAnRE9XTidcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBVdGlsaXRpZXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gaXNBcnJheSggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggb2JqZWN0ICkgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc051bWJlciggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ251bWJlcic7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N0cmluZyggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ3N0cmluZyc7XG4gIH1cblxuICBmdW5jdGlvbiBrZXlOYW1lKCBjb2RlICkge1xuXG4gICAgcmV0dXJuIGtleU1hcFsgY29kZSBdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoIGNvZGUgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZCggdGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSApIHtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gc291cmNlIClcblxuICAgICAgaWYgKCBvdmVyd3JpdGUgfHwgISgga2V5IGluIHRhcmdldCApIClcblxuICAgICAgICB0YXJnZXRbIGtleSBdID0gc291cmNlWyBrZXkgXTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eSggbWV0aG9kLCBjb250ZXh0ICkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXG4gICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIGFyZ3VtZW50cyApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZSggdGFyZ2V0ICkge1xuXG4gICAgdmFyIG9iamVjdCA9IHt9O1xuXG4gICAgZm9yICggdmFyIGtleSBpbiB0YXJnZXQgKSB7XG4gICAgICBcbiAgICAgIGlmICgga2V5ID09PSAnd2Via2l0TW92ZW1lbnRYJyB8fCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFknIClcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggdGFyZ2V0WyBrZXkgXSApIClcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gcHJveHkoIHRhcmdldFsga2V5IF0sIHRhcmdldCApO1xuXG4gICAgICBlbHNlXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHRhcmdldFsga2V5IF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbnN0cnVjdG9yXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCBjb250ZXh0ICkge1xuXG4gICAgdmFyIHJlcXVlc3QsIGhhbmRsZXIsIHRhcmdldCwgcGFyZW50LCBib3VuZHMsIGluZGV4LCBzdWZmaXgsIGNsb2NrLCBub2RlLCBjb3B5LCB0eXBlLCBrZXksIHZhbCwgbWluLCBtYXgsIHcsIGg7XG5cbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHRvdWNoZXMgPSBbXTtcbiAgICB2YXIgcmVzaXplZCA9IGZhbHNlO1xuICAgIHZhciBzZXR1cCA9IGZhbHNlO1xuICAgIHZhciByYXRpbyA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgdmFyIGlzRGl2ID0gY29udGV4dC50eXBlID09IERPTTtcbiAgICB2YXIgaXMyRCA9IGNvbnRleHQudHlwZSA9PSBDQU5WQVM7XG5cbiAgICB2YXIgbW91c2UgPSB7XG4gICAgICB4OiAgMC4wLCB5OiAgMC4wLFxuICAgICAgb3g6IDAuMCwgb3k6IDAuMCxcbiAgICAgIGR4OiAwLjAsIGR5OiAwLjBcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50TWFwID0gW1xuXG4gICAgICBjb250ZXh0LmV2ZW50VGFyZ2V0IHx8IGNvbnRleHQuZWxlbWVudCxcblxuICAgICAgICBwb2ludGVyLCAnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2Vtb3ZlJywgJ3RvdWNobW92ZScsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZXVwJywgJ3RvdWNoZW5kJyxcbiAgICAgICAgcG9pbnRlciwgJ2NsaWNrJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3V0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlb3ZlcicsXG5cbiAgICAgIGRvYyxcblxuICAgICAgICBrZXlwcmVzcywgJ2tleWRvd24nLCAna2V5dXAnLFxuXG4gICAgICB3aW4sXG5cbiAgICAgICAgYWN0aXZlLCAnZm9jdXMnLCAnYmx1cicsXG4gICAgICAgIHJlc2l6ZSwgJ3Jlc2l6ZSdcbiAgICBdO1xuXG4gICAgdmFyIGtleXMgPSB7fTsgZm9yICgga2V5IGluIGtleU1hcCApIGtleXNbIGtleU1hcFsga2V5IF0gXSA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciggbWV0aG9kICkge1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIG1ldGhvZCApIClcblxuICAgICAgICBtZXRob2QuYXBwbHkoIGNvbnRleHQsIFtdLnNwbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmQoIG9uICkge1xuXG4gICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRNYXAubGVuZ3RoOyBpbmRleCsrICkge1xuXG4gICAgICAgIG5vZGUgPSBldmVudE1hcFsgaW5kZXggXTtcblxuICAgICAgICBpZiAoIGlzU3RyaW5nKCBub2RlICkgKVxuXG4gICAgICAgICAgdGFyZ2V0WyAoIG9uID8gJ2FkZCcgOiAncmVtb3ZlJyApICsgJ0V2ZW50TGlzdGVuZXInIF0uY2FsbCggdGFyZ2V0LCBub2RlLCBoYW5kbGVyLCBmYWxzZSApO1xuXG4gICAgICAgIGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBub2RlICkgKVxuXG4gICAgICAgICAgaGFuZGxlciA9IG5vZGU7XG5cbiAgICAgICAgZWxzZSB0YXJnZXQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuICAgICAgY0FGKCByZXF1ZXN0ICk7XG4gICAgICByZXF1ZXN0ID0gckFGKCB1cGRhdGUgKTtcblxuICAgICAgaWYgKCAhc2V0dXAgKSB7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5zZXR1cCApO1xuICAgICAgICBzZXR1cCA9IGlzRnVuY3Rpb24oIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCAhcmVzaXplZCApIHtcbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICAgICAgcmVzaXplZCA9IGlzRnVuY3Rpb24oIGNvbnRleHQucmVzaXplICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5ydW5uaW5nICYmICFjb3VudGVyICkge1xuXG4gICAgICAgIGNvbnRleHQuZHQgPSAoIGNsb2NrID0gK25ldyBEYXRlKCkgKSAtIGNvbnRleHQubm93O1xuICAgICAgICBjb250ZXh0Lm1pbGxpcyArPSBjb250ZXh0LmR0O1xuICAgICAgICBjb250ZXh0Lm5vdyA9IGNsb2NrO1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQudXBkYXRlICk7XG5cbiAgICAgICAgLy8gUHJlIGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgKSB7XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQucmV0aW5hICkge1xuXG4gICAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbnRleHQuYXV0b2NsZWFyKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICggY29udGV4dC5hdXRvY2xlYXIgKVxuXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC5kcmF3ICk7XG5cbiAgICAgICAgLy8gUG9zdCBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuXG4gICAgICBjb3VudGVyID0gKytjb3VudGVyICUgY29udGV4dC5pbnRlcnZhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG5cbiAgICAgIHRhcmdldCA9IGlzRGl2ID8gY29udGV4dC5zdHlsZSA6IGNvbnRleHQuY2FudmFzO1xuICAgICAgc3VmZml4ID0gaXNEaXYgPyAncHgnIDogJyc7XG5cbiAgICAgIHcgPSBjb250ZXh0LndpZHRoO1xuICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0O1xuXG4gICAgICBpZiAoIGNvbnRleHQuZnVsbHNjcmVlbiApIHtcblxuICAgICAgICBoID0gY29udGV4dC5oZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICAgIHcgPSBjb250ZXh0LndpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICggY29udGV4dC5yZXRpbmEgJiYgaXMyRCAmJiByYXRpbyApIHtcblxuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgICAgIHRhcmdldC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuXG4gICAgICAgIHcgKj0gcmF0aW87XG4gICAgICAgIGggKj0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICggdGFyZ2V0LmhlaWdodCAhPT0gaCApXG5cbiAgICAgICAgdGFyZ2V0LmhlaWdodCA9IGggKyBzdWZmaXg7XG5cbiAgICAgIGlmICggdGFyZ2V0LndpZHRoICE9PSB3IClcblxuICAgICAgICB0YXJnZXQud2lkdGggPSB3ICsgc3VmZml4O1xuXG4gICAgICBpZiAoIGlzMkQgJiYgIWNvbnRleHQuYXV0b2NsZWFyICYmIGNvbnRleHQucmV0aW5hIClcblxuICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcblxuICAgICAgaWYgKCBzZXR1cCApIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxpZ24oIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdG91Y2gueCA9IHRvdWNoLnBhZ2VYIC0gYm91bmRzLmxlZnQgLSAod2luLnNjcm9sbFggfHwgd2luLnBhZ2VYT2Zmc2V0KTtcbiAgICAgIHRvdWNoLnkgPSB0b3VjaC5wYWdlWSAtIGJvdW5kcy50b3AgLSAod2luLnNjcm9sbFkgfHwgd2luLnBhZ2VZT2Zmc2V0KTtcblxuICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1Z21lbnQoIHRvdWNoLCB0YXJnZXQgKSB7XG5cbiAgICAgIGFsaWduKCB0b3VjaCwgY29udGV4dC5lbGVtZW50ICk7XG5cbiAgICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICAgICAgdGFyZ2V0Lm94ID0gdGFyZ2V0LnggfHwgdG91Y2gueDtcbiAgICAgIHRhcmdldC5veSA9IHRhcmdldC55IHx8IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC54ID0gdG91Y2gueDtcbiAgICAgIHRhcmdldC55ID0gdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LmR4ID0gdGFyZ2V0LnggLSB0YXJnZXQub3g7XG4gICAgICB0YXJnZXQuZHkgPSB0YXJnZXQueSAtIHRhcmdldC5veTtcblxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCBldmVudCApIHtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29weSA9IGNsb25lKCBldmVudCApO1xuICAgICAgY29weS5vcmlnaW5hbEV2ZW50ID0gZXZlbnQ7XG5cbiAgICAgIGlmICggY29weS50b3VjaGVzICkge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gY29weS50b3VjaGVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgY29weS50b3VjaGVzLmxlbmd0aDsgaW5kZXgrKyApXG5cbiAgICAgICAgICB0b3VjaGVzWyBpbmRleCBdID0gYXVnbWVudCggY29weS50b3VjaGVzWyBpbmRleCBdLCB0b3VjaGVzWyBpbmRleCBdICk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSAwO1xuICAgICAgICB0b3VjaGVzWzBdID0gYXVnbWVudCggY29weSwgbW91c2UgKTtcbiAgICAgIH1cblxuICAgICAgZXh0ZW5kKCBtb3VzZSwgdG91Y2hlc1swXSwgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2ludGVyKCBldmVudCApIHtcblxuICAgICAgZXZlbnQgPSBwcm9jZXNzKCBldmVudCApO1xuXG4gICAgICBtaW4gPSAoIG1heCA9IGV2ZW50TWFwLmluZGV4T2YoIHR5cGUgPSBldmVudC50eXBlICkgKSAtIDE7XG5cbiAgICAgIGNvbnRleHQuZHJhZ2dpbmcgPVxuXG4gICAgICAgIC9kb3dufHN0YXJ0Ly50ZXN0KCB0eXBlICkgPyB0cnVlIDpcblxuICAgICAgICAvdXB8ZW5kLy50ZXN0KCB0eXBlICkgPyBmYWxzZSA6XG5cbiAgICAgICAgY29udGV4dC5kcmFnZ2luZztcblxuICAgICAgd2hpbGUoIG1pbiApXG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtaW4gXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtaW4tLSBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWF4IF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWF4KysgXSBdLCBldmVudCApIDpcblxuICAgICAgICBtaW4gPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXByZXNzKCBldmVudCApIHtcblxuICAgICAga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICAgIHZhbCA9IGV2ZW50LnR5cGUgPT0gJ2tleXVwJztcbiAgICAgIGtleXNbIGtleSBdID0ga2V5c1sga2V5TmFtZSgga2V5ICkgXSA9ICF2YWw7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmUoIGV2ZW50ICkge1xuXG4gICAgICBpZiAoIGNvbnRleHQuYXV0b3BhdXNlIClcblxuICAgICAgICAoIGV2ZW50LnR5cGUgPT0gJ2JsdXInID8gc3RvcCA6IHN0YXJ0ICkoKTtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBBUElcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgICBjb250ZXh0Lm5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgICAgY29udGV4dC5ydW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuXG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cbiAgICAgICggY29udGV4dC5ydW5uaW5nID8gc3RvcCA6IHN0YXJ0ICkoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcblxuICAgICAgaWYgKCBpczJEIClcblxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY29udGV4dC53aWR0aCAqIHJhdGlvLCBjb250ZXh0LmhlaWdodCAqIHJhdGlvICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcblxuICAgICAgcGFyZW50ID0gY29udGV4dC5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpbmRleCA9IGluc3RhbmNlcy5pbmRleE9mKCBjb250ZXh0ICk7XG5cbiAgICAgIGlmICggcGFyZW50ICkgcGFyZW50LnJlbW92ZUNoaWxkKCBjb250ZXh0LmVsZW1lbnQgKTtcbiAgICAgIGlmICggfmluZGV4ICkgaW5zdGFuY2VzLnNwbGljZSggaW5kZXgsIDEgKTtcblxuICAgICAgYmluZCggZmFsc2UgKTtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG5cbiAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgdG91Y2hlczogdG91Y2hlcyxcbiAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgIGtleXM6IGtleXMsXG5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgbWlsbGlzOiAwLFxuICAgICAgbm93OiBOYU4sXG4gICAgICBkdDogTmFOLFxuXG4gICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBjbGVhcjogY2xlYXIsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBzdG9wOiBzdG9wXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZXMucHVzaCggY29udGV4dCApO1xuXG4gICAgcmV0dXJuICggY29udGV4dC5hdXRvc3RhcnQgJiYgc3RhcnQoKSwgYmluZCggdHJ1ZSApLCByZXNpemUoKSwgdXBkYXRlKCksIGNvbnRleHQgKTtcbiAgfVxuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIEdsb2JhbCBBUElcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIGVsZW1lbnQsIGNvbnRleHQsIFNrZXRjaCA9IHtcblxuICAgIENBTlZBUzogQ0FOVkFTLFxuICAgIFdFQl9HTDogV0VCR0wsXG4gICAgV0VCR0w6IFdFQkdMLFxuICAgIERPTTogRE9NLFxuXG4gICAgaW5zdGFuY2VzOiBpbnN0YW5jZXMsXG5cbiAgICBpbnN0YWxsOiBmdW5jdGlvbiggY29udGV4dCApIHtcblxuICAgICAgaWYgKCAhY29udGV4dFsgSEFTX1NLRVRDSCBdICkge1xuXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IE1BVEhfUFJPUFMubGVuZ3RoOyBpKysgKVxuXG4gICAgICAgICAgY29udGV4dFsgTUFUSF9QUk9QU1tpXSBdID0gTVsgTUFUSF9QUk9QU1tpXSBdO1xuXG4gICAgICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICAgICAgVFdPX1BJOiBNLlBJICogMixcbiAgICAgICAgICBIQUxGX1BJOiBNLlBJIC8gMixcbiAgICAgICAgICBRVUFSVEVSX1BJOiBNLlBJIC8gNCxcblxuICAgICAgICAgIHJhbmRvbTogZnVuY3Rpb24oIG1pbiwgbWF4ICkge1xuXG4gICAgICAgICAgICBpZiAoIGlzQXJyYXkoIG1pbiApIClcblxuICAgICAgICAgICAgICByZXR1cm4gbWluWyB+figgTS5yYW5kb20oKSAqIG1pbi5sZW5ndGggKSBdO1xuXG4gICAgICAgICAgICBpZiAoICFpc051bWJlciggbWF4ICkgKVxuXG4gICAgICAgICAgICAgIG1heCA9IG1pbiB8fCAxLCBtaW4gPSAwO1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgTS5yYW5kb20oKSAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGxlcnA6IGZ1bmN0aW9uKCBtaW4sIG1heCwgYW1vdW50ICkge1xuXG4gICAgICAgICAgICByZXR1cm4gbWluICsgYW1vdW50ICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbWFwOiBmdW5jdGlvbiggbnVtLCBtaW5BLCBtYXhBLCBtaW5CLCBtYXhCICkge1xuXG4gICAgICAgICAgICByZXR1cm4gKCBudW0gLSBtaW5BICkgLyAoIG1heEEgLSBtaW5BICkgKiAoIG1heEIgLSBtaW5CICkgKyBtaW5CO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGV4dFsgSEFTX1NLRVRDSCBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgaWYgKCBvcHRpb25zLmdsb2JhbHMgKSBTa2V0Y2guaW5zdGFsbCggc2VsZiApO1xuXG4gICAgICBlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvYy5jcmVhdGVFbGVtZW50KCBvcHRpb25zLnR5cGUgPT09IERPTSA/ICdkaXYnIDogJ2NhbnZhcycgKTtcblxuICAgICAgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc3dpdGNoKCBvcHRpb25zLnR5cGUgKSB7XG5cbiAgICAgICAgICBjYXNlIENBTlZBUzpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJzJkJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBXRUJHTDpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0Q29udGV4dCggJ3dlYmdsJywgb3B0aW9ucyApIHx8IGVsZW1lbnQuZ2V0Q29udGV4dCggJ2V4cGVyaW1lbnRhbC13ZWJnbCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgRE9NOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jYW52YXMgPSBlbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgIH0pKCk7XG5cbiAgICAgICggb3B0aW9ucy5jb250YWluZXIgfHwgZG9jLmJvZHkgKS5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG4gICAgICByZXR1cm4gU2tldGNoLmF1Z21lbnQoIGNvbnRleHQsIG9wdGlvbnMgKTtcbiAgICB9LFxuXG4gICAgYXVnbWVudDogZnVuY3Rpb24oIGNvbnRleHQsIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIG9wdGlvbnMuZWxlbWVudCA9IGNvbnRleHQuY2FudmFzIHx8IGNvbnRleHQ7XG4gICAgICBvcHRpb25zLmVsZW1lbnQuY2xhc3NOYW1lICs9ICcgc2tldGNoJztcblxuICAgICAgZXh0ZW5kKCBjb250ZXh0LCBvcHRpb25zLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RvciggY29udGV4dCApO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBTaGltc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgdmVuZG9ycyA9IFsgJ21zJywgJ21veicsICd3ZWJraXQnLCAnbycgXTtcbiAgdmFyIHNjb3BlID0gc2VsZjtcbiAgdmFyIHRoZW4gPSAwO1xuXG4gIHZhciBhID0gJ0FuaW1hdGlvbkZyYW1lJztcbiAgdmFyIGIgPSAncmVxdWVzdCcgKyBhO1xuICB2YXIgYyA9ICdjYW5jZWwnICsgYTtcblxuICB2YXIgckFGID0gc2NvcGVbIGIgXTtcbiAgdmFyIGNBRiA9IHNjb3BlWyBjIF07XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXJBRjsgaSsrICkge1xuXG4gICAgckFGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdSZXF1ZXN0JyArIGEgXTtcbiAgICBjQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ0NhbmNlbCcgKyBhIF07XG4gIH1cblxuICBzY29wZVsgYiBdID0gckFGID0gckFGIHx8IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblxuICAgIHZhciBub3cgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgZHQgPSBNLm1heCggMCwgMTYgLSAoIG5vdyAtIHRoZW4gKSApO1xuICAgIHZhciBpZCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgY2FsbGJhY2soIG5vdyArIGR0ICk7XG4gICAgfSwgZHQgKTtcblxuICAgIHRoZW4gPSBub3cgKyBkdDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgc2NvcGVbIGMgXSA9IGNBRiA9IGNBRiB8fCBmdW5jdGlvbiggaWQgKSB7XG4gICAgY2xlYXJUaW1lb3V0KCBpZCApO1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIE91dHB1dFxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICByZXR1cm4gU2tldGNoO1xuXG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL3NrZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMb2NhdGlvblZpZXcgPSAoZnVuY3Rpb24oKXtcbiAgICB2YXIgc2NvcGUgPSB7fTtcbiAgICBcbiAgICBcbiAgICByZXR1cm4gc2NvcGU7XG59KSgpO1xuXG5Mb2NhdGlvblZpZXcuYWN0aXZhdGUoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9sb2NhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vdmFyIG5ld3NsZXR0ZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLW5ld3NsZXR0ZXIgZm9ybScpO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICBpZihmcm9tVG9wPjEwMCkgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgZWxzZSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbn0pO1xuXG5cbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtTmV3c2xldHRlciA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1OZXdzbGV0dGVyLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ25ld3NsZXR0ZXJfc2lnbnVwJyxcbiAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb3JtTmV3c2xldHRlci5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1OZXdzbGV0dGVyLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQocDMpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbn0pO1xuXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybVN5bGxhYnVzID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZmlyc3ROYW1lRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT10ZXh0XScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIHZhciBmaXJzdE5hbWUgPSBmaXJzdE5hbWVGaWVsZC52YWwoKTtcbiAgIFxuICAgaWYoZW1haWwgPT0gJycgfHwgZmlyc3ROYW1lID09JycpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1dlIG5lZWQgeW91ciBlbWFpbCBhbmQgZmlyc3QgbmFtZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNle1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2Rvd25sb2FkX3N5bGxhYnVzJyxcbiAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgfSwyMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvcFN0YXRlJykgIT0gJ3Nob3duJyl7XG4gICAgICBmaWxsVXBjb21pbmdFdmVudChldmVudCk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikuZGVsYXkoMjAwMCkuZmFkZUluKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgJCgnI3VwY29taW5nRXZlbnQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBwdXQgeW91ciBkZWZhdWx0IGV2ZW50IGhlcmVcbiAgICAgICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsVXBjb21pbmdFdmVudChldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjdXBjb21pbmdFdmVudCcpO1xuICAgbW9kYWwuZmluZCgnLmRheScpLmh0bWwoZXZlbnQuZGF5KTtcbiAgIG1vZGFsLmZpbmQoJy5tb250aCcpLmh0bWwoZXZlbnQubW9udGgpO1xuICAgbW9kYWwuZmluZCgnLnllYXInKS5odG1sKGV2ZW50LnllYXIpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtdGl0bGUnKS5odG1sKGV2ZW50LnBvc3RfdGl0bGUpO1xuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRldGFpbHMnKS5odG1sKGV2ZW50LmV2ZW50X3N0YXJ0X3RpbWUgKyBcIiBcIiArIGV2ZW50LmV2ZW50X2VuZF90aW1lICsgJyBhdCA8c3BhbiBjbGFzcz1cImltb29uIGljb24tbG9jYXRpb25cIj48L3NwYW4+ICcgKyBldmVudC5hZGRyZXNzKTsvLzM6MzBwbSAtIGF0IFN0YXJ0aHViLCBEb3dudG93biBNaWFtaVxuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRlc2NyaXB0aW9uJykuaHRtbChldmVudC5wb3N0X2NvbnRlbnQpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnRpY2tldF91cmwpO1xuICAgXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gb25QYWdlVmlldyh1cmxDb250YWlucywgY2FsbGJhY2spe1xuICAgIC8vUGFnZSB2aWV3ID0gYXBwbHktdGhhbmsteW91XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YodXJsQ29udGFpbnMpID4gLTEpIHtcbiAgICAgICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0gIFxufVxuZnVuY3Rpb24gdHJpZ2dlclRhZ01hbmFnZXJFdmVudChldmVudE5hbWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogZXZlbnROYW1lfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOiAnK2V2ZW50TmFtZSk7XG4gICAgfVxuICAgIGVsc2UgY29uc29sZS5sb2coJ0V2ZW50IG5vdCBiZWluZyBzZW50IHRvIFRhZ01hbmFnZXI6ICcrZXZlbnROYW1lKTtcbn1cbmZ1bmN0aW9uIHNhdmVEYXRhVmFyaWFibGUoaW5kZXgsIHZhbHVlKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKSBkYXRhTGF5ZXIucHVzaCh7aW5kZXg6IHZhbHVlfSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnSW1wb3NpYmxlIHRvIHdyaXRlICcraW5kZXgrJyBvbiBkYXRhTGF5ZXInKTtcbiAgICBcbiAgICBcbiAgICBpZih0eXBlb2YgV1BBU19BUFAgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQID0ge307XG4gICAgaWYodHlwZW9mIFdQQVNfQVBQLmRhdGFMYXllciA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAuZGF0YUxheWVyID0ge307XG4gICAgV1BBU19BUFAuZGF0YUxheWVyW2luZGV4XSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gYWNfZXZlbnQoZXZlbnRLZXksIGV2ZW50TmFtZSwgdXNlckVtYWlsKXtcblxuICAvLyB3aGF0IHdlIGRvIGhlcmUsIGlzIGxvZyBhIHN1Y2Nlc3NmdWwgZXZlbnQgdG8gdGhlIGNvbnNvbGVcbiAgLy8gb3IgY2F0Y2ggYW55IGVycm9ycyB3ZSBoYXZlXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgXG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkZWQgaGFsZndheSBzY3JvbGwgZXZlbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8geW91ciBBY3RpdmVDYW1wYWlnbiBpZC4gWW91IGNhbiBnZXQgdGhpcyBmcm9tIHlvdXIgQUMgc2V0dGluZ3MgXG4gIHZhciBhY3RpZCA9IFwiZGIxNWEzMjY0ZmIyYWJmMTk5OTZmYTQ4ODczMDM5NzU3ZDUzNDU0NFwiOyBcblxuICB2YXIgdmlzaXQgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbCAvLyB0aGUgdXNlcidzIGVtYWlsIGFkZHJlc3NcbiAgfTtcblxuICAvLyBnZXQgdGhlIHVybCBvZiB0aGUgcGFnZSBhbmQgc2VuZCBpdCBhcyBldmVudCBkYXRhXG4gIHZhciBldmVudERhdGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAvLyBidWlsZCB0aGUgZXZlbnRTdHJpbmcgYmFzZWQgb24gdGhlIHZhcmlhYmxlcyB5b3UganVzdCBlZGl0ZWQgYWJvdmUg4pidXG4gIHZhciBldmVudFN0cmluZyA9IFwiYWN0aWQ9XCIgKyBhY3RpZCBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZrZXk9XCIgKyBldmVudEtleSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudD1cIiArIGV2ZW50TmFtZSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZ2aXNpdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2aXNpdCkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnRkYXRhXCIgKyBldmVudERhdGE7XG5cbiAgLy8gc2VuZCB0aGUgZXZlbnQgdG8gdGhlIEFjdGl2ZUNhbXBhaWduIEFQSSB3aXRoIG91ciBldmVudCB2YWx1ZXNcbiAgeGh0dHAub3BlbihcIlBPU1RcIiwgXCJodHRwczovL3RyYWNrY21wLm5ldC9ldmVudFwiLCB0cnVlKTtcbiAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgXG4gIGlmKGV2ZW50S2V5IT0nJyAmJiBldmVudE5hbWUhPScnICYmIHVzZXJFbWFpbCE9JycpIHhodHRwLnNlbmQoZXZlbnRTdHJpbmcpO1xuICBlbHNle1xuICAgICAgaWYoZXZlbnRLZXk9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudEtleScsZXZlbnRLZXkpO1xuICAgICAgaWYoZXZlbnROYW1lPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnROYW1lJyxldmVudE5hbWUpO1xuICAgICAgaWYodXNlckVtYWlsPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgdXNlckVtYWlsJyx1c2VyRW1haWwpO1xuICB9XG59XG5cbi8qKlxuICogVGFnbWFuZ2VyIGV2ZW50c1xuICoqL1xuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N5bGxhYnVzX2Rvd25sb2FkJyk7IFxufSk7XG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnbmV3c2xldHRlcl9zaWdudXAnKTsgXG59KTtcbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7IHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2FwcGxpY2F0aW9uX3JlbmRlcmVkJyk7IH0pO1xub25QYWdlVmlldyhcIi9hcHBseS10aGFuay15b3VcIixmdW5jdGlvbigpe1xuICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzdHVkZW50X2FwcGxpY2F0aW9uJyk7IFxufSk7XG4kKCcjZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpOyBcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGV2ZW50LnRhcmdldC5ocmVmO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==