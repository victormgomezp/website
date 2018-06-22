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

// removed by extract-text-webpack-plugin

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
   $.ajax({
      url: WPAS_APP.ajax_url,
      dataType: 'JSON',
      method: 'POST',
      data: {
         action: 'get_upcoming_event',
         type: 'intro_to_coding'
      },
      success: function(response){
         if(response)
         {
            if(response.code == 200)
            {
               if(response.data) fillUpcomingIntroToCoding(response.data);
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

function fillUpcomingIntroToCoding(event){
   var modal = $('#freeCodingIntroModal');
   modal.find('.date').html(event.day+' '+event.month+' '+event.year);
   modal.find('.location').html(event.address);
   modal.find('.btn-danger').attr('href',event.url);
   
}
function fillUpcomingEvent(event){
   var modal = $('#upcomingEvent');
   modal.find('.day').html(event.day);
   modal.find('.month').html(event.month);
   modal.find('.year').html(event.year);
   
   modal.find('.event-title').html(event.name);
   modal.find('.event-details').html('<span class="imoon icon-location"></span>' + event.address);//3:30pm - at Starthub, Downtown Miami
   
   
   var maxLength = 350; // maximum number of characters to extract
   var trimmedString = event.description.substr(0, maxLength);//trim the string to the maximum length
   trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(".")));//re-trim if we are in the middle of a word
   modal.find('.event-description').html(trimmedString+'.');
   
   modal.find('.btn-danger').attr('href',event.url);
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9za2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUI7QUFDRTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0UsT0FBTyxrRUFBa0U7QUFDekUsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhJQUFzRSxpQkFBaUI7QUFDdkYsQzs7Ozs7Ozs7QUNsTEEseUM7Ozs7Ozs7QUNBQSxnS0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxTQUFTO0FBQ1YsbUM7Ozs7Ozs7Ozs7QUN0cUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxJOzs7Ozs7Ozs7O0FDOUREOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FB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QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQix5QkFBeUI7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLDZCQUE2Qjs7QUFFckQ7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHVCQUF1Qjs7QUFFL0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztB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eWxlcy9pbmRleC5zY3NzJyk7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdXRpbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC90b29sdGlwJztcbmltcG9ydCAnLi9wYWdlcy9hbGwuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzJztcbmltcG9ydCB7TWFrZVN0aWNreX0gZnJvbSAnLi9jb21tb24vc3RpY2t5LXRvZ2dsZS5qcyc7XG5pbXBvcnQge1NtYXJ0RmlsdGVyc30gZnJvbSAnLi9jb21tb24vc21hcnQtZmlsdGVycy5qcyc7XG5pbXBvcnQgbG9hZFZpZGVvIGZyb20gXCIuL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvXCI7XG5cbmNvbnNvbGUubG9nKFdQQVNfQVBQKTtcbldQQVNfQVBQLmxvYWRWaWRlbyA9IGxvYWRWaWRlbztcbi8qKlxuICogSE9NRVxuKiovXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdob21lJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdpbmljaW8nKXtcbiAgXG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9ob21lLWRhcmsubXA0Jyk7XG4gIGpRdWVyeSgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbiAgJCgnLnZhbHVlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgXHR2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpO1xuICBcdCQodGhpcykucGFyZW50KCkuY3NzKCd3aWR0aCcsIHRleHQpO1xuICB9KTtcbiAgJCgnLmJsb2NrJykudG9vbHRpcCgpO1xufVxuXG4vKipcbiAqIFRIRSBQUk9HUkFNXG4qKi9cblxuaWYoWydwYWdlLXRoZS1wcm9ncmFtJywnc2luZ2xlLWZ1bGwtc3RhY2snLCdzaW5nbGUtd2ViLWRldmVsb3BtZW50Jywnc2luZ2xlLWNvZGluZy1pbnRybyddLmluZGV4T2YoV1BBU19BUFAudmlldy50ZW1wbGF0ZSkhPS0xIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3ZlbmV6dWVsYScpe1xuICBcbiAgdmFyIG1heFN0aWNrUG9zaXRpb24gPSAkKCcjcHJpY2luZycpLm9mZnNldCgpLnRvcCAtIDIwO1xuICBNYWtlU3RpY2t5LmluaXQoJ1tkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiXScsIG1heFN0aWNrUG9zaXRpb24pO1xuICBcbiAgXG4gIHZhciBUaGVQcm9ncmFtID0gcmVxdWlyZSgnLi9wYWdlcy9wcm9ncmFtLmpzJykuZGVmYXVsdDtcbiAgVGhlUHJvZ3JhbS5pbml0KCk7XG4gIFxufVxuXG5cblxuXG4vKipcbiAqIFBSSUNJTkdcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcmljaW5nJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwcmVjaW8nKXtcbiAgXG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9wcmljaW5nLm1wNCcpO1xuICBcbiAgdmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xuICB2YXIgbXlTbGlkZXIgPSBuZXcgU2xpZGVyKCcjcHJpY2luZy1zbGlkZXInKTtcbiAgLy92YXIgc2xpZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljaW5nLXNsaWRlcicpO1xuICBteVNsaWRlci5vbignc2xpZGVTdG9wJywgZnVuY3Rpb24obmV3VmFsdWUpe1xuICAgIFxuICAgIHZhciBtZXNzYWdlID0gbnVsbDtcbiAgICBzd2l0Y2gobmV3VmFsdWUpXG4gICAge1xuICAgICAgY2FzZSAwOiBcbiAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgcHJpY2U6ICckMTAwMCBkZXBvc2l0ICsgJDg1MyAvIG1vbnRoJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdUaGFua3MgdG8gb3VyIHBhcnRuZXJzaGlwIHdpdGggUXVvdGFuZGEgd2UgaGF2ZSBtYW5hZ2VkIHRvIGNyZWF0ZSB0aGUgbW9zdCBmbGV4aWJsZSBwbGFjZW1lbnQgcGxhbiBpbiB0b3duJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9xdW90YW5kYS5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgbm93JyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBwcmljZTogJyQxMDAwIGRlcG9zaXQgKyAkNDQ1IC8gbW9udGgnLFxuICAgICAgICAgICAgZGV0YWlsczogJ1RoYW5rcyB0byBvdXIgcGFydG5lcnNoaXAgd2l0aCBRdW90YW5kYSB3ZSBoYXZlIG1hbmFnZWQgdG8gY3JlYXRlIHRoZSBtb3N0IGZsZXhpYmxlIHBsYWNlbWVudCBwbGFuIGluIHRvd24nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3F1b3RhbmRhLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSBub3cnLFxuICAgICAgICAgICAgYXBwbHlVUkw6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IFxuICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBwcmljZTogJyQxMDAwIGRlcG9zaXQgKyAkMjQwIC8gbW9udGgnLFxuICAgICAgICAgICAgZGV0YWlsczogJ1RoYW5rcyB0byBvdXIgcGFydG5lcnNoaXAgd2l0aCBRdW90YW5kYSB3ZSBoYXZlIG1hbmFnZWQgdG8gY3JlYXRlIHRoZSBtb3N0IGZsZXhpYmxlIHBsYWNlbWVudCBwbGFuIGluIHRvd24nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3F1b3RhbmRhLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSBub3cnLFxuICAgICAgICAgICAgYXBwbHlVUkw6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IFxuICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBwcmljZTogJyQxOTggLyBtb250aCAoTm8gZGVwb3NpdCknLFxuICAgICAgICAgICAgZGV0YWlsczogJ0FwcGx5IHRvIFNraWxsc2Z1bmQgYW5kIGdldCAzNiBtb250aCBmaW5hbmNpbmcsIHBheSA8c3Ryb25nPm9ubHkgJDE5OCBwZXIgbW9udGg8L3N0cm9uZz4gYW5kIHdpdGggbm8gZGVwb3NpdCB0byBzdGFydC4nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3NraWxsc2Z1bmQucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IHRvIGZpbmFuY2luZycsXG4gICAgICAgICAgICBhcHBseVVSTDogJ2h0dHA6Ly80Z2Vla3NhY2FkZW15LnNraWxscy5mdW5kJ1xuICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OiBcbiAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgcHJpY2U6ICckMTM1IC8gbW9udGggKE5vIGRlcG9zaXQpJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdBcHBseSB0byBTa2lsbHNmdW5kIGFuZCBnZXQgNjAgbW9udGggZmluYW5jaW5nLCBwYXkgPHN0cm9uZz5vbmx5ICQxMzUgZXZlcnkgbW9udGg8L3N0cm9uZz4gYW5kIHdpdGggbm8gZGVwb3NpdCB0byBzdGFydC4nLFxuICAgICAgICAgICAgbG9nbzogJy9hc3NldHMvaW1nL3NraWxsc2Z1bmQucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IHRvIGZpbmFuY2luZycsXG4gICAgICAgICAgICBhcHBseVVSTDogJ2h0dHA6Ly80Z2Vla3NhY2FkZW15LnNraWxscy5mdW5kJ1xuICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihtZXNzYWdlKXtcbiAgICAgIGlmKHR5cGVvZihtZXNzYWdlLnByaWNlKSA9PSAnc3RyaW5nJykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLWxhYmVsJykuaW5uZXJIVE1MID0gbWVzc2FnZS5wcmljZTtcbiAgICAgIGlmKHR5cGVvZihtZXNzYWdlLmRldGFpbHMpID09ICdzdHJpbmcnKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYW5jaW5nLWRldGFpbHMnKS5pbm5lckhUTUwgPSBtZXNzYWdlLmRldGFpbHM7XG4gICAgICBpZih0eXBlb2YobWVzc2FnZS5sb2dvKSA9PSAnc3RyaW5nJyl7XG4gICAgICAgIHZhciBsb2dvRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFuY2luZy1sb2dvJyk7XG4gICAgICAgIHZhciB0ZW1wbGF0ZVVSTCA9IGxvZ29FbG0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRldXJsJyk7XG4gICAgICAgIGxvZ29FbG0uc3JjID0gdGVtcGxhdGVVUkwgKyBtZXNzYWdlLmxvZ287XG4gICAgICB9XG4gICAgICBcbiAgICAgIHZhciBhcHBseUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbmNpbmctYnRuJyk7XG4gICAgICBhcHBseUJ0bi5pbm5lckhUTUwgPSBtZXNzYWdlLmFwcGx5VGV4dDtcbiAgICAgIGlmKG1lc3NhZ2UuYXBwbHlVUkwpe1xuICAgICAgICBhcHBseUJ0bi5ocmVmID0gbWVzc2FnZS5hcHBseVVSTDtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgZGVmYXVsdFVSTCA9IGFwcGx5QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hcHBseWxpbmsnKTtcbiAgICAgICAgYXBwbHlCdG4uaHJlZiA9IGRlZmF1bHRVUkw7XG4gICAgICB9XG4gICAgfVxuXHRcdFxuXHRcdHZhciBwYXltZW50UGxhbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF5bWVudC1wbGFuJyk7XG5cdFx0Ly9wYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImJnLXllbGxvd1wiKTtcblx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LmFkZChcImdsb3dcIik7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgIC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJiZy15ZWxsb3dcIik7XG5cdFx0XHRwYXltZW50UGxhbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImdsb3dcIik7XG5cdFx0fSwgMjAwKTtcbiAgICBcbiAgfSk7XG4gIFxuICByZXF1aXJlKCcuL3BhZ2VzL3ByaWNpbmcuanMnKTtcblxufVxuXG4vKipcbiAqIENBTEVOREFSXG4qKi9cblxuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAnY2FsZW5kYXInIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2NhbGVuZGFyaW8nKXtcbiAgXG4gIFNtYXJ0RmlsdGVycy5pbml0KHtcbiAgICBsb2FkaW5nQW5pbWF0aW9uOiAnLmNvdXJzZXMgLmxvYWRpbmctYW5pbWF0aW9uJyxcbiAgICByZXN1bHRzQ29udGFpbmVyOiAnLmNvdXJzZXMgLmxpc3QtZ3JvdXAnLFxuICAgIGZpbHRlckRyb3Bkb3duOiAnLmRyb3Bkb3duLW1lbnUgYScsXG4gICAgZmlsdGVyczogW1xuICAgICAgeyBidXR0b246ICcjbG9jYXRpb25TZWxlY3RvcicsIHVybEtleTogJ2wnLCBvcHRpb25zOiAnLmxvY2F0aW9uLW9wdGlvbicgfSxcbiAgICAgIHsgYnV0dG9uOiAnI2xhbmdTZWxlY3RvcicsIHVybEtleTogJ2xhbmcnLCBvcHRpb25zOiAnLmxhbmctb3B0aW9uJ30sXG4gICAgICB7IGJ1dHRvbjogJyN0eXBlU2VsZWN0b3InLCB1cmxLZXk6ICd0eXBlJywgb3B0aW9uczogJy50eXBlLW9wdGlvbid9XG4gICAgXVxuICB9KTtcbiAgXG4gIE1ha2VTdGlja3kuaW5pdCgnW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdJywgNDAwMCk7XG4gICAgXG59XG5cbi8qKlxuICogTE9DQVRJT05cbioqL1xuXG5pZihbJ3NpbmdsZS1sb2NhdGlvbiddLmluZGV4T2YoV1BBU19BUFAudmlldy50ZW1wbGF0ZSkgIT0gLTEpe1xuICByZXF1aXJlKCcuL3BhZ2VzL2xvY2F0aW9uLmpzJyk7XG59XG5cbi8qKlxuICogUEFSVE5FUlNcbioqL1xuXG5pZihXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdwYXJ0bmVycycgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAnc29jaW9zJyl7XG4gIFxuICBqUXVlcnkoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gIGxvYWRWaWRlbygnL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L2Fzc2V0cy92aWRlby9vZmZpY2UubXA0Jyx7b3ZlcmxheTogJ2JsYWNrJ30pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9zdHlsZXMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYmV0YSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gKCQpIHtcblxuICAvKipcbiAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgKi9cbiAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXAgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICB2YXIgTkFNRSA9ICd0b29sdGlwJztcbiAgdmFyIFZFUlNJT04gPSAnNC4wLjAtYmV0YSc7XG4gIHZhciBEQVRBX0tFWSA9ICdicy50b29sdGlwJztcbiAgdmFyIEVWRU5UX0tFWSA9ICcuJyArIERBVEFfS0VZO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgdmFyIFRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTA7XG4gIHZhciBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCc7XG4gIHZhciBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgQ0xBU1NfUFJFRklYICsgJ1xcXFxTKycsICdnJyk7XG5cbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICAgIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICAgIHRyaWdnZXI6ICdzdHJpbmcnLFxuICAgIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgICBodG1sOiAnYm9vbGVhbicsXG4gICAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gICAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmcpJyxcbiAgICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICAgIGZhbGxiYWNrUGxhY2VtZW50OiAnKHN0cmluZ3xhcnJheSknXG4gIH07XG5cbiAgdmFyIEF0dGFjaG1lbnRNYXAgPSB7XG4gICAgQVVUTzogJ2F1dG8nLFxuICAgIFRPUDogJ3RvcCcsXG4gICAgUklHSFQ6ICdyaWdodCcsXG4gICAgQk9UVE9NOiAnYm90dG9tJyxcbiAgICBMRUZUOiAnbGVmdCdcbiAgfTtcblxuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZWxheTogMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBvZmZzZXQ6IDAsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJ2ZsaXAnXG4gIH07XG5cbiAgdmFyIEhvdmVyU3RhdGUgPSB7XG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIE9VVDogJ291dCdcbiAgfTtcblxuICB2YXIgRXZlbnQgPSB7XG4gICAgSElERTogJ2hpZGUnICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogJ2hpZGRlbicgKyBFVkVOVF9LRVksXG4gICAgU0hPVzogJ3Nob3cnICsgRVZFTlRfS0VZLFxuICAgIFNIT1dOOiAnc2hvd24nICsgRVZFTlRfS0VZLFxuICAgIElOU0VSVEVEOiAnaW5zZXJ0ZWQnICsgRVZFTlRfS0VZLFxuICAgIENMSUNLOiAnY2xpY2snICsgRVZFTlRfS0VZLFxuICAgIEZPQ1VTSU46ICdmb2N1c2luJyArIEVWRU5UX0tFWSxcbiAgICBGT0NVU09VVDogJ2ZvY3Vzb3V0JyArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUVOVEVSOiAnbW91c2VlbnRlcicgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VMRUFWRTogJ21vdXNlbGVhdmUnICsgRVZFTlRfS0VZXG4gIH07XG5cbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG5cbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIFRPT0xUSVA6ICcudG9vbHRpcCcsXG4gICAgVE9PTFRJUF9JTk5FUjogJy50b29sdGlwLWlubmVyJyxcbiAgICBBUlJPVzogJy5hcnJvdydcbiAgfTtcblxuICB2YXIgVHJpZ2dlciA9IHtcbiAgICBIT1ZFUjogJ2hvdmVyJyxcbiAgICBGT0NVUzogJ2ZvY3VzJyxcbiAgICBDTElDSzogJ2NsaWNrJyxcbiAgICBNQU5VQUw6ICdtYW51YWwnXG5cbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcbiAgdmFyIFRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9vbHRpcChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb29sdGlwKTtcblxuICAgICAgLy8gcHJpdmF0ZVxuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSAwO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcblxuICAgICAgLy8gcHJvdGVjdGVkXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgLy8gcHVibGljXG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGVFbmFibGVkID0gZnVuY3Rpb24gdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljaztcblxuICAgICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSk7XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS5vZmYodGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9mZignaGlkZS5icy5tb2RhbCcpO1xuXG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IG51bGw7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGw7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuXG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy50aXAgPSBudWxsO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICgkKHRoaXMuZWxlbWVudCkuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVyk7XG4gICAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgICAgdmFyIGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy5lbGVtZW50KTtcblxuICAgICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgICB2YXIgdGlwSWQgPSBVdGlsLmdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpO1xuXG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuXG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQ7XG5cbiAgICAgICAgdmFyIGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudCk7XG4gICAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpO1xuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6ICQodGhpcy5jb25maWcuY29udGFpbmVyKTtcblxuICAgICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKTtcblxuICAgICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpO1xuXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIodGhpcy5lbGVtZW50LCB0aXAsIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IFNlbGVjdG9yLkFSUk9XXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIF90aGlzLl9maXhUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IF90aGlzLl9ob3ZlclN0YXRlO1xuICAgICAgICAgIF90aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcblxuICAgICAgICAgICQoX3RoaXMuZWxlbWVudCkudHJpZ2dlcihfdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTik7XG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgICBfdGhpcy5fbGVhdmUobnVsbCwgX3RoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgICAgICAkKHRoaXMudGlwKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuX1RSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uIGhpZGUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpO1xuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczIuX2hvdmVyU3RhdGUgIT09IEhvdmVyU3RhdGUuU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuX2NsZWFuVGlwQ2xhc3MoKTtcbiAgICAgICAgX3RoaXMyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICAgICQoX3RoaXMyLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMyLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTik7XG4gICAgICAgIGlmIChfdGhpczIuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzMi5fcG9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudCk7XG5cbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICAvLyBpZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJCgnYm9keScpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuSE9WRVJdID0gZmFsc2U7XG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuXG4gICAgICAgICQodGlwKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBwcm90ZWN0ZWRcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmlzV2l0aENvbnRlbnQgPSBmdW5jdGlvbiBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuYWRkQXR0YWNobWVudENsYXNzID0gZnVuY3Rpb24gYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKENMQVNTX1BSRUZJWCArICctJyArIGF0dGFjaG1lbnQpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5nZXRUaXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5UT09MVElQX0lOTkVSKSwgdGhpcy5nZXRUaXRsZSgpKTtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUgKyAnICcgKyBDbGFzc05hbWUuU0hPVyk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLnNldEVsZW1lbnRDb250ZW50ID0gZnVuY3Rpb24gc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICAgIHZhciBodG1sID0gdGhpcy5jb25maWcuaHRtbDtcbiAgICAgIGlmICgodHlwZW9mIGNvbnRlbnQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNvbnRlbnQpKSA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgICBpZiAoaHRtbCkge1xuICAgICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnRbaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10oY29udGVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJyk7XG5cbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudCkgOiB0aGlzLmNvbmZpZy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH07XG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZ2V0QXR0YWNobWVudCA9IGZ1bmN0aW9uIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fc2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gX3NldExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJyk7XG5cbiAgICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkKF90aGlzMy5lbGVtZW50KS5vbihfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgICAgdmFyIGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOiBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTjtcbiAgICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOiBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVQ7XG5cbiAgICAgICAgICAkKF90aGlzMy5lbGVtZW50KS5vbihldmVudEluLCBfdGhpczMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX2VudGVyKGV2ZW50KTtcbiAgICAgICAgICB9KS5vbihldmVudE91dCwgX3RoaXMzLmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9sZWF2ZShldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKF90aGlzMy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZml4VGl0bGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2ZpeFRpdGxlID0gZnVuY3Rpb24gX2ZpeFRpdGxlKCkge1xuICAgICAgdmFyIHRpdGxlVHlwZSA9IF90eXBlb2YodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpKTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8IHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScsIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJycpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2VudGVyID0gZnVuY3Rpb24gX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG5cbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPVztcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgICBjb250ZXh0LnNob3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgICBjb250ZXh0LnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuc2hvdyk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9sZWF2ZSA9IGZ1bmN0aW9uIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpO1xuXG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5PVVQ7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICBjb250ZXh0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9pc1dpdGhBY3RpdmVUcmlnZ2VyID0gZnVuY3Rpb24gX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICBmb3IgKHZhciB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCwgJCh0aGlzLmVsZW1lbnQpLmRhdGEoKSwgY29uZmlnKTtcblxuICAgICAgaWYgKGNvbmZpZy5kZWxheSAmJiB0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnRpdGxlICYmIHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmNvbnRlbnQgJiYgdHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9nZXREZWxlZ2F0ZUNvbmZpZyA9IGZ1bmN0aW9uIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fY2xlYW5UaXBDbGFzcyA9IGZ1bmN0aW9uIF9jbGVhblRpcENsYXNzKCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTtcbiAgICAgIHZhciB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpO1xuICAgICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpIHtcbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKTtcbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQoZGF0YS5wbGFjZW1lbnQpKTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2ZpeFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfZml4VHJhbnNpdGlvbigpIHtcbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uO1xuICAgICAgaWYgKHRpcC5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb247XG4gICAgfTtcblxuICAgIC8vIHN0YXRpY1xuXG4gICAgVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG4gICAgICAgIHZhciBfY29uZmlnID0gKHR5cGVvZiBjb25maWcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNvbmZpZykpID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1ldGhvZCBuYW1lZCBcIicgKyBjb25maWcgKyAnXCInKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG9vbHRpcCwgbnVsbCwgW3tcbiAgICAgIGtleTogJ1ZFUlNJT04nLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0RlZmF1bHQnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ05BTUUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBOQU1FO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0RBVEFfS0VZJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnRXZlbnQnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFdmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdFVkVOVF9LRVknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBFVkVOVF9LRVk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnRGVmYXVsdFR5cGUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9vbHRpcDtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcDtcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gVG9vbHRpcDtcbn0oalF1ZXJ5KTsgLyogZ2xvYmFsIFBvcHBlciAqL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9vbHRpcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvZGlzdC90b29sdGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBNYWtlU3RpY2t5ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIC8vW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgYWxsIGRhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCIgZWxlbWVudHNcbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc3RpY2t5ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgc3RpY2t5V3JhcHBlciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3N0aWNreS13cmFwcGVyJyk7IC8vIGluc2VydCBoaWRkZW4gZWxlbWVudCB0byBtYWludGFpbiBhY3R1YWwgdG9wIG9mZnNldCBvbiBwYWdlXG4gICAgICAgICAgc3RpY2t5LmJlZm9yZShzdGlja3lXcmFwcGVyKTtcbiAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNjcm9sbCAmIHJlc2l6ZSBldmVudHNcbiAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5zdGlja3ktb25zY3JvbGwgcmVzaXplLnN0aWNreS1vbnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh0aGlzKSwgbWF4U3RpY2tQb3NpdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gT24gcGFnZSBsb2FkXG4gICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh3aW5kb3cpLCBtYXhTdGlja1Bvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50LCBtYXhTdGlja1Bvc2l0aW9uKSB7XG4gICAgICAgICAgdmFyIHN0aWNreUhlaWdodCA9IHN0aWNreS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgIHZhciBzdGlja3lXaWR0aCA9IHN0aWNreS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHN0aWNreVdyYXBwZXIub2Zmc2V0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgdmFyIHN0aWNreUxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICBcbiAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpO1xuICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGxQb3NpdGlvbiA+PSBzdGlja3lUb3Ape1xuICAgICAgICAgICAgaWYod2luZG93U2Nyb2xsUG9zaXRpb24gPCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodChzdGlja3lIZWlnaHQpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnd2lkdGgnLHN0aWNreVdpZHRoKydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JyxzdGlja3lMZWZ0KydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLChtYXhTdGlja1Bvc2l0aW9uLTY2NSkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc3RpY2t5LXRvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU21hcnRGaWx0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmaWx0ZXJEcm9wZG93bjogJycsXG4gICAgICAgIGxvYWRpbmdBbmltYXRpb246ICcnLFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyOiAnJyxcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XG4gICAgICAgICQuZXh0ZW5kKCBjb25maWcsIHNldHRpbmdzICk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHRoZSBTbWFydEZpbHRlcnMnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgICAgICBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgICQoY29uZmlnLmZpbHRlckRyb3Bkb3duKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb25maWcubG9hZGluZ0FuaW1hdGlvbikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICQoY29uZmlnLnJlc3VsdHNDb250YWluZXIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsvL2hpZGUgdGhlIGRyb3Bkb3duIGFmdGVyIGNsaWNrZWRcbiAgICAgICAgICAgIC8vdmFyIHBhcmVudERyb3Bkb3duID0gYXV4LnBhcmVudCgpO1xuICAgICAgICAgICAgLy9wYXJlbnREcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldEJhc2VVUkwoKSArICc/JyArIHNlcmlhbGl6ZSh1cmxWYXJzICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpe1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBmaWx0ZXIgdmFsdWVzJywgdXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXIudXJsS2V5KTtcbiAgICAgICAgICAgIGlmKGZpbHRlci51cmxLZXkgaW4gdXJsVmFycykgJChmaWx0ZXIuYnV0dG9uKS5odG1sKCQoZmlsdGVyLm9wdGlvbnMrJ1tkYXRhLXZhbHVlPVwiJyt1cmxWYXJzW2ZpbHRlci51cmxLZXldKydcIl0nKS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0QmFzZVVSTCgpe1xuICAgICAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICAgICAgICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICAgICAgXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHZhcnNbJzAnXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbZ2V0QmFzZVVSTCgpXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbJyddO1xuICBcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3NtYXJ0LWZpbHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbG9hZFZpZGVvID0gZnVuY3Rpb24odmlkZW9VUkwsIHNldHRpbmdzKXtcbiAgaWYodHlwZW9mIHNldHRpbmdzID09ICd1bmRlZmluZWQnKSBzZXR0aW5ncyA9IHt9O1xuICB2YXIgcyA9IGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgXG4gIHZhciB2aWRlb1ZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvVmlld3BvcnQuaWQgPSBcInZpZGVvLXZpZXdwb3J0XCI7XG4gIHZpZGVvVmlld3BvcnQuY2xhc3NMaXN0LmFkZCgndmlkZW8tdmlld3BvcnQnKTtcbiAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh2aWRlb1ZpZXdwb3J0LCBzKTtcbiAgXG4gIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gIHZpZGVvLnNyYyA9IHZpZGVvVVJMOyB2aWRlby5hdXRvUGxheSA9IHRydWU7IHZpZGVvLmxvb3AgPSB0cnVlOyB2aWRlby5tdXRlZCA9IHRydWU7IFxuICB2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby1iYWNrZ3JvdW5kJyk7XG4gIHZpZGVvVmlld3BvcnQuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICBcbiAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsZnVuY3Rpb24oKXsgdmlkZW8ucGxheSgpOyB9KTtcbiAgdmFyIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHdpbmRvdykud2lkdGgoKSk7XG4gIHZhciB2aWRfaF9vcmlnID0gcGFyc2VJbnQoJCh2aWRlbykuaGVpZ2h0KCkpO1xuICB2YXIgbWluX3cgPSA0MDA7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc291cmNlVmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICB2YXIgc291cmNlVmlkZW9IZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICAgIC8vaWYodmlkX3dfb3JpZyA8PSAwIHx8IHZpZF93X29yaWcgPT0gSW5maW5pdHkpIHZpZF93X29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS53aWR0aCgpKTtcbiAgICAgIC8vaWYodmlkX2hfb3JpZyA8PSAwIHx8IHZpZF9oX29yaWcgPT0gSW5maW5pdHkpIHZpZF9oX29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS5oZWlnaHQoKSk7XG4gICAgICB2YXIgYWRkZWRQYWRkaW5nID0gMTAwO1xuICAgICAgdmFyIHRhcmdldF93aXRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICB2YXIgdGFyZ2V0X2hlaWdoID0gJCgnLm1hc3RoZWFkJykuaGVpZ2h0KCkgKyAkKCduYXYubmF2YmFyJykuaGVpZ2h0KCkgKyBwYXJzZUludCgkKCcubWFzdGhlYWQnKS5jc3MoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUludCgkKCduYXYubmF2YmFyJykuY3NzKCdtYXJnaW4tdG9wJykpICsgYWRkZWRQYWRkaW5nO1xuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS53aWR0aCh0YXJnZXRfd2l0aCk7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLmhlaWdodChuZXdWaWV3SGVpZ2h0KTtcbiAgXG4gICAgICB2YXIgc2NhbGVfaCA9IHRhcmdldF93aXRoIC8gdmlkX3dfb3JpZztcbiAgICAgIHZhciBzY2FsZV92ID0gdGFyZ2V0X2hlaWdoIC8gdmlkX2hfb3JpZztcbiAgICAgIHZhciBzY2FsZSA9IHNjYWxlX2ggPiBzY2FsZV92ID8gc2NhbGVfaCA6IHNjYWxlX3Y7XG4gIFxuICAgICAgXG4gICAgICBpZiAoc2NhbGUgKiB2aWRfd19vcmlnIDwgbWluX3cpIHNjYWxlID0gbWluX3cgLyB2aWRfd19vcmlnO1xuICAgICAgXG4gICAgICB2YXIgbmV3Vmlld1dpZHRoID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICAgICAgdmFyIG5ld1ZpZXdIZWlnaHQgPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBcbiAgICAgIC8vaWYgdGhlIG5ldyB3aWR0aCBkb2VzIG5vdCBjb3ZlciB0aGUgZW50aXJlIHNjcmVlbiB3aWR0aFxuICAgICAgaWYgKG5ld1ZpZXdXaWR0aCA8IHNvdXJjZVZpZGVvV2lkdGgpIHNjYWxlID0gc291cmNlVmlkZW9XaWR0aCAvIHZpZF93X29yaWc7XG4gICAgICBpZiAobmV3Vmlld0hlaWdodCA8IHNvdXJjZVZpZGVvSGVpZ2h0ICYmIHNjYWxlIDwgKHNvdXJjZVZpZGVvSGVpZ2h0IC8gdmlkX2hfb3JpZykpIHNjYWxlID0gc291cmNlVmlkZW9IZWlnaHQgLyB2aWRfaF9vcmlnO1xuICAgICAgXG4gICAgICBuZXdWaWV3V2lkdGggPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICBuZXdWaWV3SGVpZ2h0ID0gc2NhbGUgKiB2aWRfd19vcmlnO1xuICBcbiAgICAgICQodmlkZW8pLndpZHRoKG5ld1ZpZXdXaWR0aCk7XG4gICAgICAkKHZpZGVvKS5oZWlnaHQobmV3Vmlld0hlaWdodCk7XG4gIFxuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5zY3JvbGxMZWZ0KChuZXdWaWV3V2lkdGggLSB0YXJnZXRfd2l0aCkgLyAyKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuc2Nyb2xsVG9wKChuZXdWaWV3SGVpZ2h0IC0gdGFyZ2V0X2hlaWdoKSAvIDIpO1xuICB9KTtcbiAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICBcbiAgaWYodHlwZW9mIHNldHRpbmdzLm92ZXJsYXkgIT0gJ3VuZGVmaW5lZCcpe1xuICAgIFxuICAgIHZhciBvdmVybGF5ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYWJzb2x1dGVcIjtcbiAgICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5vdmVybGF5O1xuICAgIG92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IFwiMC40XCI7XG4gICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICBvdmVybGF5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBvdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIG92ZXJsYXkuc3R5bGUuekluZGV4ID0gXCItMVwiO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUob3ZlcmxheSwgcyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRWaWRlbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vcmVzcG9uc2l2ZS12aWRlby5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBUaGVQcm9ncmFtID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHRoZXNjb3BlID0ge307XG4gICAgLy8gQ2FjaGUgc2VsZWN0b3JzXG4gICAgdmFyIHRvcE1lbnUgPSAkKFwiLnByb2dyYW0tbWVudVwiKSxcbiAgICAgICAgdG9wTWVudUhlaWdodCA9IHRvcE1lbnUub3V0ZXJIZWlnaHQoKSsxNSxcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcbiAgICAgICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiYVtocmVmKj0nIyddXCIpLFxuICAgICAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xuICAgICAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XG4gICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHRoZXNjb3BlLmluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgLy8gQmluZCB0byBzY3JvbGxcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICAgICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICAgICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkrdG9wTWVudUhlaWdodDtcbiAgICAgICAgXG4gICAgICAgICAgIC8vIEdldCBpZCBvZiBjdXJyZW50IHNjcm9sbCBpdGVtXG4gICAgICAgICAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBpZiAoJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wKVxuICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgY3VyID0gY3VyW2N1ci5sZW5ndGgtMV07XG4gICAgICAgICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcbiAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcbiAgICAgICAgICAgbWVudUl0ZW1zXG4gICAgICAgICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgLmVuZCgpLmZpbHRlcihcIltocmVmPScjXCIraWQrXCInXVwiKS5wYXJlbnQoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0aGVzY29wZTtcbiAgICBcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZVByb2dyYW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJvZ3JhbS5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIiAgICBmdW5jdGlvbiBQYXJ0aWNsZSggeCwgeSwgcmFkaXVzICkge1xuICAgIFx0dGhpcy5pbml0KCB4LCB5LCByYWRpdXMgKTtcbiAgICB9XG4gICAgXG4gICAgUGFydGljbGUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIFx0aW5pdDogZnVuY3Rpb24oIHgsIHksIHJhZGl1cyApIHtcbiAgICBcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgXG4gICAgXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwO1xuICAgIFx0XHR0aGlzLndhbmRlciA9IDAuMTU7XG4gICAgXHRcdHRoaXMudGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICAgIFx0XHR0aGlzLmRyYWcgPSAwLjkyO1xuICAgIFx0XHR0aGlzLmNvbG9yID0gJyNmZmYnO1xuICAgIFxuICAgIFx0XHR0aGlzLnggPSB4IHx8IDAuMDtcbiAgICBcdFx0dGhpcy55ID0geSB8fCAwLjA7XG4gICAgXG4gICAgXHRcdHRoaXMudnggPSAwLjA7XG4gICAgXHRcdHRoaXMudnkgPSAwLjA7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0bW92ZTogZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgXHRcdHRoaXMueCArPSB0aGlzLnZ4O1xuICAgIFx0XHR0aGlzLnkgKz0gdGhpcy52eTtcbiAgICBcbiAgICBcdFx0dGhpcy52eCAqPSB0aGlzLmRyYWc7XG4gICAgXHRcdHRoaXMudnkgKj0gdGhpcy5kcmFnO1xuICAgIFxuICAgIFx0XHR0aGlzLnRoZXRhICs9IHJhbmRvbSggLTAuNSwgMC41ICkgKiB0aGlzLndhbmRlcjtcbiAgICBcdFx0dGhpcy52eCArPSBzaW4oIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcdFx0dGhpcy52eSArPSBjb3MoIHRoaXMudGhldGEgKSAqIDAuMTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgKj0gMC45NjtcbiAgICBcdFx0dGhpcy5hbGl2ZSA9IHRoaXMucmFkaXVzID4gMC41O1xuICAgIFx0fSxcbiAgICBcbiAgICBcdGRyYXc6IGZ1bmN0aW9uKCBjdHggKSB7XG4gICAgXG4gICAgXHRcdGN0eC5iZWdpblBhdGgoKTtcbiAgICBcdFx0Y3R4LmFyYyggdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBUV09fUEkgKTtcbiAgICBcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgXHRcdGN0eC5maWxsKCk7XG4gICAgXHR9XG4gICAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBhcnRpY2xlc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICB2YXIgTUFYX1BBUlRJQ0xFUyA9IDI4MDtcbiAgdmFyIENPTE9VUlMgPSBbICcjNjlEMkU3JywgJyNBN0RCRDgnLCAnI0UwRTRDQycsICcjRjM4NjMwJywgJyNGQTY5MDAnLCAnI0ZGNEU1MCcsICcjRjlENDIzJyBdO1xuICBcbiAgdmFyIHBhcnRpY2xlcyA9IFtdO1xuICB2YXIgcG9vbCA9IFtdO1xuICBcbiAgdmFyIFNrZXRjaCA9IHJlcXVpcmUoXCIuLi9saWIvc2tldGNoXCIpO1xuICB2YXIgY2FudmFzQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI2JnLXNrZXRjaCcgKTtcbiAgY2FudmFzQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdmFyIHByaWNpbmdTa2V0Y2ggPSBTa2V0Y2guY3JlYXRlKHtcbiAgXHRjb250YWluZXI6IGNhbnZhc0JnXG4gIH0pO1xuICBcbiAgcHJpY2luZ1NrZXRjaC5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHQvLyBTZXQgb2ZmIHNvbWUgaW5pdGlhbCBwYXJ0aWNsZXMuXG4gIFx0dmFyIGksIHgsIHk7XG4gIFxuICBcdGZvciAoIGkgPSAwOyBpIDwgMjA7IGkrKyApIHtcbiAgXHRcdHggPSAoIHByaWNpbmdTa2V0Y2gud2lkdGggKiAwLjUgKSArIHJhbmRvbSggLTEwMCwgMTAwICk7XG4gIFx0XHR5ID0gKCBwcmljaW5nU2tldGNoLmhlaWdodCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHByaWNpbmdTa2V0Y2guc3Bhd24oIHgsIHkgKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLnNwYXduID0gZnVuY3Rpb24oIHgsIHkgKSB7XG4gIFxuICBcdGlmICggcGFydGljbGVzLmxlbmd0aCA+PSBNQVhfUEFSVElDTEVTIClcbiAgXHRcdHBvb2wucHVzaCggcGFydGljbGVzLnNoaWZ0KCkgKTtcbiAgXG4gIFx0dmFyIHBhcnRpY2xlID0gcG9vbC5sZW5ndGggPyBwb29sLnBvcCgpIDogbmV3IFBhcnRpY2xlKCk7XG4gIFx0cGFydGljbGUuaW5pdCggeCwgeSwgcmFuZG9tKCA1LCA0MCApICk7XG4gIFxuICBcdHBhcnRpY2xlLndhbmRlciA9IHJhbmRvbSggMC41LCAyLjAgKTtcbiAgXHRwYXJ0aWNsZS5jb2xvciA9IHJhbmRvbSggQ09MT1VSUyApO1xuICBcdHBhcnRpY2xlLmRyYWcgPSByYW5kb20oIDAuOSwgMC45OSApO1xuICBcbiAgXHR2YXIgdGhldGEgPSByYW5kb20oIFRXT19QSSApO1xuICBcdHZhciBmb3JjZSA9IHJhbmRvbSggMiwgOCApO1xuICBcbiAgXHRwYXJ0aWNsZS52eCA9IHNpbiggdGhldGEgKSAqIGZvcmNlO1xuICBcdHBhcnRpY2xlLnZ5ID0gY29zKCB0aGV0YSApICogZm9yY2U7XG4gIFxuICBcdHBhcnRpY2xlcy5wdXNoKCBwYXJ0aWNsZSApO1xuICB9XG4gIFxuICBwcmljaW5nU2tldGNoLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgaSwgcGFydGljbGU7XG4gIFxuICBcdGZvciAoIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFxuICBcdFx0cGFydGljbGUgPSBwYXJ0aWNsZXNbaV07XG4gIFxuICBcdFx0aWYgKCBwYXJ0aWNsZS5hbGl2ZSApIHBhcnRpY2xlLm1vdmUoKTtcbiAgXHRcdGVsc2UgcG9vbC5wdXNoKCBwYXJ0aWNsZXMuc3BsaWNlKCBpLCAxIClbMF0gKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgXG4gIFx0cHJpY2luZ1NrZXRjaC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gID0gJ2xpZ2h0ZXInO1xuICBcdFxuICBcdGZvciAoIHZhciBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xuICBcdFx0cGFydGljbGVzW2ldLmRyYXcoIHByaWNpbmdTa2V0Y2ggKTtcbiAgXHR9XG4gIH07XG4gIFxuICBwcmljaW5nU2tldGNoLm1vdXNlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHR2YXIgcGFydGljbGUsIHRoZXRhLCBmb3JjZSwgdG91Y2gsIG1heCwgaSwgaiwgbjtcbiAgXG4gIFx0Zm9yICggaSA9IDAsIG4gPSBwcmljaW5nU2tldGNoLnRvdWNoZXMubGVuZ3RoOyBpIDwgbjsgaSsrICkge1xuICBcbiAgXHRcdHRvdWNoID0gcHJpY2luZ1NrZXRjaC50b3VjaGVzW2ldLCBtYXggPSByYW5kb20oIDEsIDQgKTtcbiAgXHRcdGZvciAoIGogPSAwOyBqIDwgbWF4OyBqKysgKSBwcmljaW5nU2tldGNoLnNwYXduKCB0b3VjaC54LCB0b3VjaC55ICk7XG4gIFx0fVxuICB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL3ByaWNpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIENvcHlyaWdodCAoQykgMjAxMyBKdXN0aW4gV2luZGxlLCBodHRwOi8vc291bHdpcmUuY28udWsgKi9cblxuKGZ1bmN0aW9uICggcm9vdCwgZmFjdG9yeSApIHtcblxuICBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcblxuICAgIC8vIENvbW1vbkpTIGxpa2VcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkocm9vdCwgcm9vdC5kb2N1bWVudCk7XG5cbiAgfSBlbHNlIGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuXG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTsgfSk7XG5cbiAgfSBlbHNlIHtcblxuICAgIC8vIEJyb3dzZXIgZ2xvYmFsXG4gICAgcm9vdC5Ta2V0Y2ggPSBmYWN0b3J5KCByb290LCByb290LmRvY3VtZW50ICk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uICggd2luZG93LCBkb2N1bWVudCApIHtcblxuXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIENvbmZpZ1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgTUFUSF9QUk9QUyA9ICdFIExOMTAgTE4yIExPRzJFIExPRzEwRSBQSSBTUVJUMV8yIFNRUlQyIGFicyBhY29zIGFzaW4gYXRhbiBjZWlsIGNvcyBleHAgZmxvb3IgbG9nIHJvdW5kIHNpbiBzcXJ0IHRhbiBhdGFuMiBwb3cgbWF4IG1pbicuc3BsaXQoICcgJyApO1xuICB2YXIgSEFTX1NLRVRDSCA9ICdfX2hhc1NrZXRjaCc7XG4gIHZhciBNID0gTWF0aDtcblxuICB2YXIgQ0FOVkFTID0gJ2NhbnZhcyc7XG4gIHZhciBXRUJHTCA9ICd3ZWJnbCc7XG4gIHZhciBET00gPSAnZG9tJztcblxuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gIHZhciBkZWZhdWx0cyA9IHtcblxuICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgYXV0b3N0YXJ0OiB0cnVlLFxuICAgIGF1dG9jbGVhcjogdHJ1ZSxcbiAgICBhdXRvcGF1c2U6IHRydWUsXG4gICAgY29udGFpbmVyOiBkb2MuYm9keSxcbiAgICBpbnRlcnZhbDogMSxcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIHJldGluYTogZmFsc2UsXG4gICAgdHlwZTogQ0FOVkFTXG4gIH07XG5cbiAgdmFyIGtleU1hcCA9IHtcblxuICAgICA4OiAnQkFDS1NQQUNFJyxcbiAgICAgOTogJ1RBQicsXG4gICAgMTM6ICdFTlRFUicsXG4gICAgMTY6ICdTSElGVCcsXG4gICAgMjc6ICdFU0NBUEUnLFxuICAgIDMyOiAnU1BBQ0UnLFxuICAgIDM3OiAnTEVGVCcsXG4gICAgMzg6ICdVUCcsXG4gICAgMzk6ICdSSUdIVCcsXG4gICAgNDA6ICdET1dOJ1xuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFV0aWxpdGllc1xuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBpc0FycmF5KCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBvYmplY3QgKSA9PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqZWN0ICkge1xuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTnVtYmVyKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnbnVtYmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnc3RyaW5nJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleU5hbWUoIGNvZGUgKSB7XG5cbiAgICByZXR1cm4ga2V5TWFwWyBjb2RlIF0gfHwgU3RyaW5nLmZyb21DaGFyQ29kZSggY29kZSApO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKCB0YXJnZXQsIHNvdXJjZSwgb3ZlcndyaXRlICkge1xuXG4gICAgZm9yICggdmFyIGtleSBpbiBzb3VyY2UgKVxuXG4gICAgICBpZiAoIG92ZXJ3cml0ZSB8fCAhKCBrZXkgaW4gdGFyZ2V0ICkgKVxuXG4gICAgICAgIHRhcmdldFsga2V5IF0gPSBzb3VyY2VbIGtleSBdO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5KCBtZXRob2QsIGNvbnRleHQgKSB7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG5cbiAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgYXJndW1lbnRzICk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKCB0YXJnZXQgKSB7XG5cbiAgICB2YXIgb2JqZWN0ID0ge307XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHRhcmdldCApIHtcbiAgICAgIFxuICAgICAgaWYgKCBrZXkgPT09ICd3ZWJraXRNb3ZlbWVudFgnIHx8IGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WScgKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCB0YXJnZXRbIGtleSBdICkgKVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSBwcm94eSggdGFyZ2V0WyBrZXkgXSwgdGFyZ2V0ICk7XG5cbiAgICAgIGVsc2VcblxuICAgICAgICBvYmplY3RbIGtleSBdID0gdGFyZ2V0WyBrZXkgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uc3RydWN0b3JcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoIGNvbnRleHQgKSB7XG5cbiAgICB2YXIgcmVxdWVzdCwgaGFuZGxlciwgdGFyZ2V0LCBwYXJlbnQsIGJvdW5kcywgaW5kZXgsIHN1ZmZpeCwgY2xvY2ssIG5vZGUsIGNvcHksIHR5cGUsIGtleSwgdmFsLCBtaW4sIG1heCwgdywgaDtcblxuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgdG91Y2hlcyA9IFtdO1xuICAgIHZhciByZXNpemVkID0gZmFsc2U7XG4gICAgdmFyIHNldHVwID0gZmFsc2U7XG4gICAgdmFyIHJhdGlvID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICB2YXIgaXNEaXYgPSBjb250ZXh0LnR5cGUgPT0gRE9NO1xuICAgIHZhciBpczJEID0gY29udGV4dC50eXBlID09IENBTlZBUztcblxuICAgIHZhciBtb3VzZSA9IHtcbiAgICAgIHg6ICAwLjAsIHk6ICAwLjAsXG4gICAgICBveDogMC4wLCBveTogMC4wLFxuICAgICAgZHg6IDAuMCwgZHk6IDAuMFxuICAgIH07XG5cbiAgICB2YXIgZXZlbnRNYXAgPSBbXG5cbiAgICAgIGNvbnRleHQuZXZlbnRUYXJnZXQgfHwgY29udGV4dC5lbGVtZW50LFxuXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZWRvd24nLCAndG91Y2hzdGFydCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW1vdmUnLCAndG91Y2htb3ZlJyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNldXAnLCAndG91Y2hlbmQnLFxuICAgICAgICBwb2ludGVyLCAnY2xpY2snLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdXQnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2VvdmVyJyxcblxuICAgICAgZG9jLFxuXG4gICAgICAgIGtleXByZXNzLCAna2V5ZG93bicsICdrZXl1cCcsXG5cbiAgICAgIHdpbixcblxuICAgICAgICBhY3RpdmUsICdmb2N1cycsICdibHVyJyxcbiAgICAgICAgcmVzaXplLCAncmVzaXplJ1xuICAgIF07XG5cbiAgICB2YXIga2V5cyA9IHt9OyBmb3IgKCBrZXkgaW4ga2V5TWFwICkga2V5c1sga2V5TWFwWyBrZXkgXSBdID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyKCBtZXRob2QgKSB7XG5cbiAgICAgIGlmICggaXNGdW5jdGlvbiggbWV0aG9kICkgKVxuXG4gICAgICAgIG1ldGhvZC5hcHBseSggY29udGV4dCwgW10uc3BsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZCggb24gKSB7XG5cbiAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBldmVudE1hcC5sZW5ndGg7IGluZGV4KysgKSB7XG5cbiAgICAgICAgbm9kZSA9IGV2ZW50TWFwWyBpbmRleCBdO1xuXG4gICAgICAgIGlmICggaXNTdHJpbmcoIG5vZGUgKSApXG5cbiAgICAgICAgICB0YXJnZXRbICggb24gPyAnYWRkJyA6ICdyZW1vdmUnICkgKyAnRXZlbnRMaXN0ZW5lcicgXS5jYWxsKCB0YXJnZXQsIG5vZGUsIGhhbmRsZXIsIGZhbHNlICk7XG5cbiAgICAgICAgZWxzZSBpZiAoIGlzRnVuY3Rpb24oIG5vZGUgKSApXG5cbiAgICAgICAgICBoYW5kbGVyID0gbm9kZTtcblxuICAgICAgICBlbHNlIHRhcmdldCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgICBjQUYoIHJlcXVlc3QgKTtcbiAgICAgIHJlcXVlc3QgPSByQUYoIHVwZGF0ZSApO1xuXG4gICAgICBpZiAoICFzZXR1cCApIHtcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnNldHVwICk7XG4gICAgICAgIHNldHVwID0gaXNGdW5jdGlvbiggY29udGV4dC5zZXR1cCApO1xuICAgICAgfVxuXG4gICAgICBpZiAoICFyZXNpemVkICkge1xuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgICByZXNpemVkID0gaXNGdW5jdGlvbiggY29udGV4dC5yZXNpemUgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJ1bm5pbmcgJiYgIWNvdW50ZXIgKSB7XG5cbiAgICAgICAgY29udGV4dC5kdCA9ICggY2xvY2sgPSArbmV3IERhdGUoKSApIC0gY29udGV4dC5ub3c7XG4gICAgICAgIGNvbnRleHQubWlsbGlzICs9IGNvbnRleHQuZHQ7XG4gICAgICAgIGNvbnRleHQubm93ID0gY2xvY2s7XG5cbiAgICAgICAgdHJpZ2dlciggY29udGV4dC51cGRhdGUgKTtcblxuICAgICAgICAvLyBQcmUgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCApIHtcblxuICAgICAgICAgIGlmICggY29udGV4dC5yZXRpbmEgKSB7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY29udGV4dC5hdXRvY2xlYXIpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LmF1dG9jbGVhciApXG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERyYXdcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LmRyYXcgKTtcblxuICAgICAgICAvLyBQb3N0IGRyYXdcblxuICAgICAgICBpZiAoIGlzMkQgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ZXIgPSArK2NvdW50ZXIgJSBjb250ZXh0LmludGVydmFsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcblxuICAgICAgdGFyZ2V0ID0gaXNEaXYgPyBjb250ZXh0LnN0eWxlIDogY29udGV4dC5jYW52YXM7XG4gICAgICBzdWZmaXggPSBpc0RpdiA/ICdweCcgOiAnJztcblxuICAgICAgdyA9IGNvbnRleHQud2lkdGg7XG4gICAgICBoID0gY29udGV4dC5oZWlnaHQ7XG5cbiAgICAgIGlmICggY29udGV4dC5mdWxsc2NyZWVuICkge1xuXG4gICAgICAgIGggPSBjb250ZXh0LmhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICAgICAgdyA9IGNvbnRleHQud2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBjb250ZXh0LnJldGluYSAmJiBpczJEICYmIHJhdGlvICkge1xuXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID0gdyArICdweCc7XG5cbiAgICAgICAgdyAqPSByYXRpbztcbiAgICAgICAgaCAqPSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKCB0YXJnZXQuaGVpZ2h0ICE9PSBoIClcblxuICAgICAgICB0YXJnZXQuaGVpZ2h0ID0gaCArIHN1ZmZpeDtcblxuICAgICAgaWYgKCB0YXJnZXQud2lkdGggIT09IHcgKVxuXG4gICAgICAgIHRhcmdldC53aWR0aCA9IHcgKyBzdWZmaXg7XG5cbiAgICAgIGlmICggaXMyRCAmJiAhY29udGV4dC5hdXRvY2xlYXIgJiYgY29udGV4dC5yZXRpbmEgKVxuXG4gICAgICAgIGNvbnRleHQuc2NhbGUoIHJhdGlvLCByYXRpbyApO1xuXG4gICAgICBpZiAoIHNldHVwICkgdHJpZ2dlciggY29udGV4dC5yZXNpemUgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGlnbiggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYm91bmRzID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICB0b3VjaC54ID0gdG91Y2gucGFnZVggLSBib3VuZHMubGVmdCAtICh3aW4uc2Nyb2xsWCB8fCB3aW4ucGFnZVhPZmZzZXQpO1xuICAgICAgdG91Y2gueSA9IHRvdWNoLnBhZ2VZIC0gYm91bmRzLnRvcCAtICh3aW4uc2Nyb2xsWSB8fCB3aW4ucGFnZVlPZmZzZXQpO1xuXG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXVnbWVudCggdG91Y2gsIHRhcmdldCApIHtcblxuICAgICAgYWxpZ24oIHRvdWNoLCBjb250ZXh0LmVsZW1lbnQgKTtcblxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuXG4gICAgICB0YXJnZXQub3ggPSB0YXJnZXQueCB8fCB0b3VjaC54O1xuICAgICAgdGFyZ2V0Lm95ID0gdGFyZ2V0LnkgfHwgdG91Y2gueTtcblxuICAgICAgdGFyZ2V0LnggPSB0b3VjaC54O1xuICAgICAgdGFyZ2V0LnkgPSB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQuZHggPSB0YXJnZXQueCAtIHRhcmdldC5veDtcbiAgICAgIHRhcmdldC5keSA9IHRhcmdldC55IC0gdGFyZ2V0Lm95O1xuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoIGV2ZW50ICkge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb3B5ID0gY2xvbmUoIGV2ZW50ICk7XG4gICAgICBjb3B5Lm9yaWdpbmFsRXZlbnQgPSBldmVudDtcblxuICAgICAgaWYgKCBjb3B5LnRvdWNoZXMgKSB7XG5cbiAgICAgICAgdG91Y2hlcy5sZW5ndGggPSBjb3B5LnRvdWNoZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBjb3B5LnRvdWNoZXMubGVuZ3RoOyBpbmRleCsrIClcblxuICAgICAgICAgIHRvdWNoZXNbIGluZGV4IF0gPSBhdWdtZW50KCBjb3B5LnRvdWNoZXNbIGluZGV4IF0sIHRvdWNoZXNbIGluZGV4IF0gKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRvdWNoZXNbMF0gPSBhdWdtZW50KCBjb3B5LCBtb3VzZSApO1xuICAgICAgfVxuXG4gICAgICBleHRlbmQoIG1vdXNlLCB0b3VjaGVzWzBdLCB0cnVlICk7XG5cbiAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvaW50ZXIoIGV2ZW50ICkge1xuXG4gICAgICBldmVudCA9IHByb2Nlc3MoIGV2ZW50ICk7XG5cbiAgICAgIG1pbiA9ICggbWF4ID0gZXZlbnRNYXAuaW5kZXhPZiggdHlwZSA9IGV2ZW50LnR5cGUgKSApIC0gMTtcblxuICAgICAgY29udGV4dC5kcmFnZ2luZyA9XG5cbiAgICAgICAgL2Rvd258c3RhcnQvLnRlc3QoIHR5cGUgKSA/IHRydWUgOlxuXG4gICAgICAgIC91cHxlbmQvLnRlc3QoIHR5cGUgKSA/IGZhbHNlIDpcblxuICAgICAgICBjb250ZXh0LmRyYWdnaW5nO1xuXG4gICAgICB3aGlsZSggbWluIClcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1pbiBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1pbi0tIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgaXNTdHJpbmcoIGV2ZW50TWFwWyBtYXggXSApID9cblxuICAgICAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50TWFwWyBtYXgrKyBdIF0sIGV2ZW50ICkgOlxuXG4gICAgICAgIG1pbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5cHJlc3MoIGV2ZW50ICkge1xuXG4gICAgICBrZXkgPSBldmVudC5rZXlDb2RlO1xuICAgICAgdmFsID0gZXZlbnQudHlwZSA9PSAna2V5dXAnO1xuICAgICAga2V5c1sga2V5IF0gPSBrZXlzWyBrZXlOYW1lKCBrZXkgKSBdID0gIXZhbDtcblxuICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnQudHlwZSBdLCBldmVudCApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2ZSggZXZlbnQgKSB7XG5cbiAgICAgIGlmICggY29udGV4dC5hdXRvcGF1c2UgKVxuXG4gICAgICAgICggZXZlbnQudHlwZSA9PSAnYmx1cicgPyBzdG9wIDogc3RhcnQgKSgpO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIEFQSVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICAgIGNvbnRleHQubm93ID0gK25ldyBEYXRlKCk7XG4gICAgICBjb250ZXh0LnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG5cbiAgICAgIGNvbnRleHQucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblxuICAgICAgKCBjb250ZXh0LnJ1bm5pbmcgPyBzdG9wIDogc3RhcnQgKSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuXG4gICAgICBpZiAoIGlzMkQgKVxuXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjb250ZXh0LndpZHRoICogcmF0aW8sIGNvbnRleHQuaGVpZ2h0ICogcmF0aW8gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuXG4gICAgICBwYXJlbnQgPSBjb250ZXh0LmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGluZGV4ID0gaW5zdGFuY2VzLmluZGV4T2YoIGNvbnRleHQgKTtcblxuICAgICAgaWYgKCBwYXJlbnQgKSBwYXJlbnQucmVtb3ZlQ2hpbGQoIGNvbnRleHQuZWxlbWVudCApO1xuICAgICAgaWYgKCB+aW5kZXggKSBpbnN0YW5jZXMuc3BsaWNlKCBpbmRleCwgMSApO1xuXG4gICAgICBiaW5kKCBmYWxzZSApO1xuICAgICAgc3RvcCgpO1xuICAgIH1cblxuICAgIGV4dGVuZCggY29udGV4dCwge1xuXG4gICAgICB0b3VjaGVzOiB0b3VjaGVzLFxuICAgICAgbW91c2U6IG1vdXNlLFxuICAgICAga2V5czoga2V5cyxcblxuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICBtaWxsaXM6IDAsXG4gICAgICBub3c6IE5hTixcbiAgICAgIGR0OiBOYU4sXG5cbiAgICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgICAgIGNsZWFyOiBjbGVhcixcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIHN0b3A6IHN0b3BcbiAgICB9KTtcblxuICAgIGluc3RhbmNlcy5wdXNoKCBjb250ZXh0ICk7XG5cbiAgICByZXR1cm4gKCBjb250ZXh0LmF1dG9zdGFydCAmJiBzdGFydCgpLCBiaW5kKCB0cnVlICksIHJlc2l6ZSgpLCB1cGRhdGUoKSwgY29udGV4dCApO1xuICB9XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgR2xvYmFsIEFQSVxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICB2YXIgZWxlbWVudCwgY29udGV4dCwgU2tldGNoID0ge1xuXG4gICAgQ0FOVkFTOiBDQU5WQVMsXG4gICAgV0VCX0dMOiBXRUJHTCxcbiAgICBXRUJHTDogV0VCR0wsXG4gICAgRE9NOiBET00sXG5cbiAgICBpbnN0YW5jZXM6IGluc3RhbmNlcyxcblxuICAgIGluc3RhbGw6IGZ1bmN0aW9uKCBjb250ZXh0ICkge1xuXG4gICAgICBpZiAoICFjb250ZXh0WyBIQVNfU0tFVENIIF0gKSB7XG5cbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgTUFUSF9QUk9QUy5sZW5ndGg7IGkrKyApXG5cbiAgICAgICAgICBjb250ZXh0WyBNQVRIX1BST1BTW2ldIF0gPSBNWyBNQVRIX1BST1BTW2ldIF07XG5cbiAgICAgICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgICAgICBUV09fUEk6IE0uUEkgKiAyLFxuICAgICAgICAgIEhBTEZfUEk6IE0uUEkgLyAyLFxuICAgICAgICAgIFFVQVJURVJfUEk6IE0uUEkgLyA0LFxuXG4gICAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiggbWluLCBtYXggKSB7XG5cbiAgICAgICAgICAgIGlmICggaXNBcnJheSggbWluICkgKVxuXG4gICAgICAgICAgICAgIHJldHVybiBtaW5bIH5+KCBNLnJhbmRvbSgpICogbWluLmxlbmd0aCApIF07XG5cbiAgICAgICAgICAgIGlmICggIWlzTnVtYmVyKCBtYXggKSApXG5cbiAgICAgICAgICAgICAgbWF4ID0gbWluIHx8IDEsIG1pbiA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBNLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbGVycDogZnVuY3Rpb24oIG1pbiwgbWF4LCBhbW91bnQgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBtaW4gKyBhbW91bnQgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtYXA6IGZ1bmN0aW9uKCBudW0sIG1pbkEsIG1heEEsIG1pbkIsIG1heEIgKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoIG51bSAtIG1pbkEgKSAvICggbWF4QSAtIG1pbkEgKSAqICggbWF4QiAtIG1pbkIgKSArIG1pbkI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0WyBIQVNfU0tFVENIIF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBpZiAoIG9wdGlvbnMuZ2xvYmFscyApIFNrZXRjaC5pbnN0YWxsKCBzZWxmICk7XG5cbiAgICAgIGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQgfHwgZG9jLmNyZWF0ZUVsZW1lbnQoIG9wdGlvbnMudHlwZSA9PT0gRE9NID8gJ2RpdicgOiAnY2FudmFzJyApO1xuXG4gICAgICBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IChmdW5jdGlvbigpIHtcblxuICAgICAgICBzd2l0Y2goIG9wdGlvbnMudHlwZSApIHtcblxuICAgICAgICAgIGNhc2UgQ0FOVkFTOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnMmQnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIFdFQkdMOlxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRDb250ZXh0KCAnd2ViZ2wnLCBvcHRpb25zICkgfHwgZWxlbWVudC5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJywgb3B0aW9ucyApO1xuXG4gICAgICAgICAgY2FzZSBET006XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNhbnZhcyA9IGVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgfSkoKTtcblxuICAgICAgKCBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2MuYm9keSApLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cbiAgICAgIHJldHVybiBTa2V0Y2guYXVnbWVudCggY29udGV4dCwgb3B0aW9ucyApO1xuICAgIH0sXG5cbiAgICBhdWdtZW50OiBmdW5jdGlvbiggY29udGV4dCwgb3B0aW9ucyApIHtcblxuICAgICAgb3B0aW9ucyA9IGV4dGVuZCggb3B0aW9ucyB8fCB7fSwgZGVmYXVsdHMgKTtcblxuICAgICAgb3B0aW9ucy5lbGVtZW50ID0gY29udGV4dC5jYW52YXMgfHwgY29udGV4dDtcbiAgICAgIG9wdGlvbnMuZWxlbWVudC5jbGFzc05hbWUgKz0gJyBza2V0Y2gnO1xuXG4gICAgICBleHRlbmQoIGNvbnRleHQsIG9wdGlvbnMsIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yKCBjb250ZXh0ICk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFNoaW1zXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciB2ZW5kb3JzID0gWyAnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJyBdO1xuICB2YXIgc2NvcGUgPSBzZWxmO1xuICB2YXIgdGhlbiA9IDA7XG5cbiAgdmFyIGEgPSAnQW5pbWF0aW9uRnJhbWUnO1xuICB2YXIgYiA9ICdyZXF1ZXN0JyArIGE7XG4gIHZhciBjID0gJ2NhbmNlbCcgKyBhO1xuXG4gIHZhciByQUYgPSBzY29wZVsgYiBdO1xuICB2YXIgY0FGID0gc2NvcGVbIGMgXTtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhckFGOyBpKysgKSB7XG5cbiAgICByQUYgPSBzY29wZVsgdmVuZG9yc1sgaSBdICsgJ1JlcXVlc3QnICsgYSBdO1xuICAgIGNBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnQ2FuY2VsJyArIGEgXTtcbiAgfVxuXG4gIHNjb3BlWyBiIF0gPSByQUYgPSByQUYgfHwgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXG4gICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBkdCA9IE0ubWF4KCAwLCAxNiAtICggbm93IC0gdGhlbiApICk7XG4gICAgdmFyIGlkID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayggbm93ICsgZHQgKTtcbiAgICB9LCBkdCApO1xuXG4gICAgdGhlbiA9IG5vdyArIGR0O1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBzY29wZVsgYyBdID0gY0FGID0gY0FGIHx8IGZ1bmN0aW9uKCBpZCApIHtcbiAgICBjbGVhclRpbWVvdXQoIGlkICk7XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgT3V0cHV0XG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHJldHVybiBTa2V0Y2g7XG5cbn0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExvY2F0aW9uVmlldyA9IChmdW5jdGlvbigpe1xuICAgIHZhciBzY29wZSA9IHt9O1xuICAgIFxuICAgIFxuICAgIHJldHVybiBzY29wZTtcbn0pKCk7XG5cbkxvY2F0aW9uVmlldy5hY3RpdmF0ZSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2xvY2F0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy92YXIgbmV3c2xldHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWwtbmV3c2xldHRlciBmb3JtJyk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgIGlmKGZyb21Ub3A+MTAwKSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICBlbHNlICQoJy5mb290ZXItYmFyJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xufSk7XG5cblxuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgIFxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgdmFyIGZvcm1OZXdzbGV0dGVyID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybU5ld3NsZXR0ZXIuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBlbWFpbCA9IGVtYWlsRmllbGQudmFsKCk7XG4gICBcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnbmV3c2xldHRlcl9zaWdudXAnLFxuICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1OZXdzbGV0dGVyLmh0bWwoJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgcm9sZT1cImFsZXJ0XCI+JytyZXNwb25zZS5kYXRhKyc8L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgZm9ybU5ld3NsZXR0ZXIuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIFxufSk7XG5cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtU3lsbGFidXMgPSAkKHRoaXMpO1xuICAgdmFyIGVtYWlsRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgIHZhciBmaXJzdE5hbWVGaWVsZCA9IGZvcm1TeWxsYWJ1cy5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgdmFyIGZpcnN0TmFtZSA9IGZpcnN0TmFtZUZpZWxkLnZhbCgpO1xuICAgXG4gICBpZihlbWFpbCA9PSAnJyB8fCBmaXJzdE5hbWUgPT0nJylcbiAgIHtcbiAgICAgIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbCgnV2UgbmVlZCB5b3VyIGVtYWlsIGFuZCBmaXJzdCBuYW1lJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJycpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZG93bmxvYWRfc3lsbGFidXMnLFxuICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGZvcm1TeWxsYWJ1cy5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAkKCcjc3lsbGFidXNNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICB9LDIwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1TeWxsYWJ1cy5maW5kKCcuYWxlcnQtZGFuZ2VyJykuaHRtbChyZXNwb25zZS5tc2cpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGFsZXJ0KHAzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgfSBcbiAgIFxufSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdnZXRfdXBjb21pbmdfZXZlbnQnXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgaWYocmVzcG9uc2UpXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb2RlID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpIHByb21wdFVwY29taW5nRXZlbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHAxLHAyLHAzKXtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZ2V0dGluZyB0aGUgdXBjb21pbmcgZXZlbnQ6IFwiK3AzKTtcbiAgICAgIH1cbiAgIH0pO1xuICAgJC5hamF4KHtcbiAgICAgIHVybDogV1BBU19BUFAuYWpheF91cmwsXG4gICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICBhY3Rpb246ICdnZXRfdXBjb21pbmdfZXZlbnQnLFxuICAgICAgICAgdHlwZTogJ2ludHJvX3RvX2NvZGluZydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICBpZihyZXNwb25zZSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvZGUgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSkgZmlsbFVwY29taW5nSW50cm9Ub0NvZGluZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHRoZSB1cGNvbWluZyBldmVudDogXCIrcDMpO1xuICAgICAgfVxuICAgfSk7XG59KTtcblxuZnVuY3Rpb24gcHJvbXB0VXBjb21pbmdFdmVudChldmVudCl7XG4gICBcbiAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3BTdGF0ZScpICE9ICdzaG93bicpe1xuICAgICAgZmlsbFVwY29taW5nRXZlbnQoZXZlbnQpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLmRlbGF5KDIwMDApLmZhZGVJbigpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BvcFN0YXRlJywnc2hvd24nKTtcbiAgICAgICQoJyN1cGNvbWluZ0V2ZW50JykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICQoXCIjdXBjb21pbmdFdmVudFwiKS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcHV0IHlvdXIgZGVmYXVsdCBldmVudCBoZXJlXG4gICAgICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLnJlbW92ZSgpO1xuICAgICAgfSk7XG5cbiAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFVwY29taW5nSW50cm9Ub0NvZGluZyhldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjZnJlZUNvZGluZ0ludHJvTW9kYWwnKTtcbiAgIG1vZGFsLmZpbmQoJy5kYXRlJykuaHRtbChldmVudC5kYXkrJyAnK2V2ZW50Lm1vbnRoKycgJytldmVudC55ZWFyKTtcbiAgIG1vZGFsLmZpbmQoJy5sb2NhdGlvbicpLmh0bWwoZXZlbnQuYWRkcmVzcyk7XG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnVybCk7XG4gICBcbn1cbmZ1bmN0aW9uIGZpbGxVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIHZhciBtb2RhbCA9ICQoJyN1cGNvbWluZ0V2ZW50Jyk7XG4gICBtb2RhbC5maW5kKCcuZGF5JykuaHRtbChldmVudC5kYXkpO1xuICAgbW9kYWwuZmluZCgnLm1vbnRoJykuaHRtbChldmVudC5tb250aCk7XG4gICBtb2RhbC5maW5kKCcueWVhcicpLmh0bWwoZXZlbnQueWVhcik7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5ldmVudC10aXRsZScpLmh0bWwoZXZlbnQubmFtZSk7XG4gICBtb2RhbC5maW5kKCcuZXZlbnQtZGV0YWlscycpLmh0bWwoJzxzcGFuIGNsYXNzPVwiaW1vb24gaWNvbi1sb2NhdGlvblwiPjwvc3Bhbj4nICsgZXZlbnQuYWRkcmVzcyk7Ly8zOjMwcG0gLSBhdCBTdGFydGh1YiwgRG93bnRvd24gTWlhbWlcbiAgIFxuICAgXG4gICB2YXIgbWF4TGVuZ3RoID0gMzUwOyAvLyBtYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIGV4dHJhY3RcbiAgIHZhciB0cmltbWVkU3RyaW5nID0gZXZlbnQuZGVzY3JpcHRpb24uc3Vic3RyKDAsIG1heExlbmd0aCk7Ly90cmltIHRoZSBzdHJpbmcgdG8gdGhlIG1heGltdW0gbGVuZ3RoXG4gICB0cmltbWVkU3RyaW5nID0gdHJpbW1lZFN0cmluZy5zdWJzdHIoMCwgTWF0aC5taW4odHJpbW1lZFN0cmluZy5sZW5ndGgsIHRyaW1tZWRTdHJpbmcubGFzdEluZGV4T2YoXCIuXCIpKSk7Ly9yZS10cmltIGlmIHdlIGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd29yZFxuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRlc2NyaXB0aW9uJykuaHRtbCh0cmltbWVkU3RyaW5nKycuJyk7XG4gICBcbiAgIG1vZGFsLmZpbmQoJy5idG4tZGFuZ2VyJykuYXR0cignaHJlZicsZXZlbnQudXJsKTtcbiAgIFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIG9uUGFnZVZpZXcodXJsQ29udGFpbnMsIGNhbGxiYWNrKXtcbiAgICAvL1BhZ2UgdmlldyA9IGFwcGx5LXRoYW5rLXlvdVxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKHVybENvbnRhaW5zKSA+IC0xKSB7XG4gICAgICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9ICBcbn1cbmZ1bmN0aW9uIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoZXZlbnROYW1lKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgZGF0YUxheWVyLnB1c2goeydldmVudCc6IGV2ZW50TmFtZX0pO1xuICAgICAgICBjb25zb2xlLmxvZygnRXZlbnQgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDogJytldmVudE5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGNvbnNvbGUubG9nKCdFdmVudCBub3QgYmVpbmcgc2VudCB0byBUYWdNYW5hZ2VyOiAnK2V2ZW50TmFtZSk7XG59XG5mdW5jdGlvbiBzYXZlRGF0YVZhcmlhYmxlKGluZGV4LCB2YWx1ZSl7XG4gICAgaWYodHlwZW9mIGRhdGFMYXllciAhPSAndW5kZWZpbmVkJykgZGF0YUxheWVyLnB1c2goe2luZGV4OiB2YWx1ZX0pO1xuICAgIGVsc2UgY29uc29sZS5sb2coJ0ltcG9zaWJsZSB0byB3cml0ZSAnK2luZGV4Kycgb24gZGF0YUxheWVyJyk7XG4gICAgXG4gICAgXG4gICAgaWYodHlwZW9mIFdQQVNfQVBQID09ICd1bmRlZmluZWQnKSBXUEFTX0FQUCA9IHt9O1xuICAgIGlmKHR5cGVvZiBXUEFTX0FQUC5kYXRhTGF5ZXIgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQLmRhdGFMYXllciA9IHt9O1xuICAgIFdQQVNfQVBQLmRhdGFMYXllcltpbmRleF0gPSB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGFjX2V2ZW50KGV2ZW50S2V5LCBldmVudE5hbWUsIHVzZXJFbWFpbCl7XG5cbiAgLy8gd2hhdCB3ZSBkbyBoZXJlLCBpcyBsb2cgYSBzdWNjZXNzZnVsIGV2ZW50IHRvIHRoZSBjb25zb2xlXG4gIC8vIG9yIGNhdGNoIGFueSBlcnJvcnMgd2UgaGF2ZVxuICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgIFxuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY29yZGVkIGhhbGZ3YXkgc2Nyb2xsIGV2ZW50XCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHlvdXIgQWN0aXZlQ2FtcGFpZ24gaWQuIFlvdSBjYW4gZ2V0IHRoaXMgZnJvbSB5b3VyIEFDIHNldHRpbmdzIFxuICB2YXIgYWN0aWQgPSBcImRiMTVhMzI2NGZiMmFiZjE5OTk2ZmE0ODg3MzAzOTc1N2Q1MzQ1NDRcIjsgXG5cbiAgdmFyIHZpc2l0ID0ge1xuICAgIGVtYWlsOiB1c2VyRW1haWwgLy8gdGhlIHVzZXIncyBlbWFpbCBhZGRyZXNzXG4gIH07XG5cbiAgLy8gZ2V0IHRoZSB1cmwgb2YgdGhlIHBhZ2UgYW5kIHNlbmQgaXQgYXMgZXZlbnQgZGF0YVxuICB2YXIgZXZlbnREYXRhID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgLy8gYnVpbGQgdGhlIGV2ZW50U3RyaW5nIGJhc2VkIG9uIHRoZSB2YXJpYWJsZXMgeW91IGp1c3QgZWRpdGVkIGFib3ZlIOKYnVxuICB2YXIgZXZlbnRTdHJpbmcgPSBcImFjdGlkPVwiICsgYWN0aWQgXG4gICAgICAgICAgICAgICAgICAgICsgXCIma2V5PVwiICsgZXZlbnRLZXkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnQ9XCIgKyBldmVudE5hbWUgXG4gICAgICAgICAgICAgICAgICAgICsgXCImdmlzaXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmlzaXQpIFxuICAgICAgICAgICAgICAgICAgICArIFwiJmV2ZW50ZGF0YVwiICsgZXZlbnREYXRhO1xuXG4gIC8vIHNlbmQgdGhlIGV2ZW50IHRvIHRoZSBBY3RpdmVDYW1wYWlnbiBBUEkgd2l0aCBvdXIgZXZlbnQgdmFsdWVzXG4gIHhodHRwLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly90cmFja2NtcC5uZXQvZXZlbnRcIiwgdHJ1ZSk7XG4gIHhodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gIFxuICBpZihldmVudEtleSE9JycgJiYgZXZlbnROYW1lIT0nJyAmJiB1c2VyRW1haWwhPScnKSB4aHR0cC5zZW5kKGV2ZW50U3RyaW5nKTtcbiAgZWxzZXtcbiAgICAgIGlmKGV2ZW50S2V5PT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnRLZXknLGV2ZW50S2V5KTtcbiAgICAgIGlmKGV2ZW50TmFtZT09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIGV2ZW50TmFtZScsZXZlbnROYW1lKTtcbiAgICAgIGlmKHVzZXJFbWFpbD09JycpIGNvbnNvbGUubG9nKCdJbnZhbGlkIHVzZXJFbWFpbCcsdXNlckVtYWlsKTtcbiAgfVxufVxuXG4vKipcbiAqIFRhZ21hbmdlciBldmVudHNcbiAqKi9cbiQoJy5zeWxsYWJ1cy1kb3dubG9hZCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7IFxuICAgIFxuICAgIHZhciBlbWFpbElucHV0ID0gJChldmVudC50YXJnZXQpLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICAgaWYoZW1haWxJbnB1dC5sZW5ndGg+MCkgc2F2ZURhdGFWYXJpYWJsZSgndXNlckVtYWlsJyxlbWFpbElucHV0WzBdLnZhbHVlKTtcbiAgICBcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzeWxsYWJ1c19kb3dubG9hZCcpOyBcbn0pO1xuJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ25ld3NsZXR0ZXJfc2lnbnVwJyk7IFxufSk7XG4kKCcuYXBwbHktYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdhcHBsaWNhdGlvbl9yZW5kZXJlZCcpOyB9KTtcbm9uUGFnZVZpZXcoXCIvYXBwbHktdGhhbmsteW91XCIsZnVuY3Rpb24oKXtcbiAgICAvL0NvZGUgZ29lcyBoZXJlXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnc3R1ZGVudF9hcHBsaWNhdGlvbicpOyBcbn0pO1xuJCgnI2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdmaW5hbmNpbmdfZ3VpZGVfZG93bmxvYWQnKTsgXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=