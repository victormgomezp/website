webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_js_dist_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_js_dist_collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_js_dist_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_tooltip__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_js_dist_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_all_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_all_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_marketing_events_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_marketing_events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_marketing_events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_sticky_toggle_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_smart_filters_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_cakeCharts__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_responsive_video__ = __webpack_require__(136);
__webpack_require__(128);












console.log(WPAS_APP);
WPAS_APP.loadVideo = __WEBPACK_IMPORTED_MODULE_9__common_responsive_video__["a" /* default */];
/**
 * HOME
**/
if(WPAS_APP.view.slug === 'home' || WPAS_APP.view.slug === 'inicio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_9__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/home-dark.mp4');
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

if(['page-the-program','single-full-stack','single-web-development'].indexOf(WPAS_APP.view.template)!=-1 || WPAS_APP.view.slug === 'venezuela'){
  
  var maxStickPosition = $('#pricing').offset().top - 20;
  __WEBPACK_IMPORTED_MODULE_6__common_sticky_toggle_js__["a" /* MakeSticky */].init('[data-toggle="sticky-onscroll"]', maxStickPosition);
  
  
  var TheProgram = __webpack_require__(137).default;
  TheProgram.init();
  
}




/**
 * PRICING
**/

if(WPAS_APP.view.slug === 'pricing' || WPAS_APP.view.slug === 'precio'){
  
  Object(__WEBPACK_IMPORTED_MODULE_9__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/pricing.mp4');
  
  var Slider = __webpack_require__(8);
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
  
  __webpack_require__(138);

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
  __webpack_require__(140);
}

/**
 * PARTNERS
**/

if(WPAS_APP.view.slug === 'partners' || WPAS_APP.view.slug === 'socios'){
  
  jQuery('[data-toggle="tooltip"]').tooltip();
  Object(__WEBPACK_IMPORTED_MODULE_9__common_responsive_video__["a" /* default */])('/wp-content/themes/the-fastest/assets/video/office.mp4',{overlay: 'black'});
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(1)))

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(7)["default"], __webpack_require__(2)))

/***/ }),

/***/ 131:
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

/***/ 132:
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
/* WEBPACK VAR INJECTION */(function($) {/* unused harmony export PieChart */

var PieChart = (function(){
    
    var thepublic = {};

    thepublic.createPie = function(dataElement, pieElement) {
      var listData = [];
      $(dataElement+" span").each(function() {
        listData.push(Number($(this).html()));
      });
      var listTotal = 0;
      for(var i=0; i<listData.length; i++) {
        listTotal += listData[i];
      }
      var offset = 0;
      var color = [
        "cornflowerblue", 
        "olivedrab", 
        "orange", 
        "tomato", 
        "crimson", 
        "purple", 
        "turquoise", 
        "forestgreen", 
        "navy", 
        "gray"
      ];
      for(var i=0; i<listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);
        $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
        offset += size;
      }
    }

    function sliceSize(dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360;
    }
    
    function addSlice(sliceSize, pieElement, offset, sliceID, color) {
      $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
      var offset = offset - 1;
      var sizeRotation = -179 + sliceSize;
      $("."+sliceID).css({
        "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
      });
      $("."+sliceID+" span").css({
        "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
        "background-color": color
      });
    }
    
    function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
      var sliceID = "s"+dataCount+"-"+sliceCount;
      var maxSize = 179;
      if(sliceSize<=maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
      } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
      }
    }
    
    return thepublic;
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 136:
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

/***/ 137:
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

/***/ 138:
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
  
  var Sketch = __webpack_require__(139);
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

/***/ 139:
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

/***/ 140:
/***/ (function(module, exports) {

var LocationView = (function(){
    var scope = {};
    
    
    return scope;
})();

LocationView.activate();

/***/ })

},[125]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL3N0eWxlcy9pbmRleC5zY3NzPzdiYzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL3BhZ2VzL2FsbC5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL21hcmtldGluZy1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9zdGlja3ktdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc21hcnQtZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvbGliL2Nha2VDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcmljaW5nLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvc2tldGNoLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1m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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsU0FBUztBQUNWLG1DOzs7Ozs7OztBQ3RxQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHlCQUF5Qjs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsNkJBQTZCOztBQUVyRDs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsdUJBQXVCOztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxxQ0FBcUM7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQiw0QkFBNEI7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyxHOzs7Ozs7O0FDdG5CRDtBQUNBOzs7QUFHQTtBQUNBLENBQUM7O0FBRUQsd0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuLi9zdHlsZXMvaW5kZXguc2NzcycpO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L3V0aWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCc7XG5pbXBvcnQgJy4vcGFnZXMvYWxsLmpzJztcbmltcG9ydCAnLi9jb21tb24vbWFya2V0aW5nLWV2ZW50cy5qcyc7XG5pbXBvcnQge01ha2VTdGlja3l9IGZyb20gJy4vY29tbW9uL3N0aWNreS10b2dnbGUuanMnO1xuaW1wb3J0IHtTbWFydEZpbHRlcnN9IGZyb20gJy4vY29tbW9uL3NtYXJ0LWZpbHRlcnMuanMnO1xuaW1wb3J0IHtQaWVDaGFydH0gZnJvbSBcIi4vbGliL2Nha2VDaGFydHNcIjtcbmltcG9ydCBsb2FkVmlkZW8gZnJvbSBcIi4vY29tbW9uL3Jlc3BvbnNpdmUtdmlkZW9cIjtcblxuY29uc29sZS5sb2coV1BBU19BUFApO1xuV1BBU19BUFAubG9hZFZpZGVvID0gbG9hZFZpZGVvO1xuLyoqXG4gKiBIT01FXG4qKi9cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2hvbWUnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2luaWNpbycpe1xuICBcbiAgbG9hZFZpZGVvKCcvd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3QvYXNzZXRzL3ZpZGVvL2hvbWUtZGFyay5tcDQnKTtcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAkKCcudmFsdWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICBcdHZhciB0ZXh0ID0gJCh0aGlzKS50ZXh0KCk7XG4gIFx0JCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3dpZHRoJywgdGV4dCk7XG4gIH0pO1xuICAkKCcuYmxvY2snKS50b29sdGlwKCk7XG59XG5cbi8qKlxuICogVEhFIFBST0dSQU1cbioqL1xuXG5pZihbJ3BhZ2UtdGhlLXByb2dyYW0nLCdzaW5nbGUtZnVsbC1zdGFjaycsJ3NpbmdsZS13ZWItZGV2ZWxvcG1lbnQnXS5pbmRleE9mKFdQQVNfQVBQLnZpZXcudGVtcGxhdGUpIT0tMSB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICd2ZW5lenVlbGEnKXtcbiAgXG4gIHZhciBtYXhTdGlja1Bvc2l0aW9uID0gJCgnI3ByaWNpbmcnKS5vZmZzZXQoKS50b3AgLSAyMDtcbiAgTWFrZVN0aWNreS5pbml0KCdbZGF0YS10b2dnbGU9XCJzdGlja3ktb25zY3JvbGxcIl0nLCBtYXhTdGlja1Bvc2l0aW9uKTtcbiAgXG4gIFxuICB2YXIgVGhlUHJvZ3JhbSA9IHJlcXVpcmUoJy4vcGFnZXMvcHJvZ3JhbS5qcycpLmRlZmF1bHQ7XG4gIFRoZVByb2dyYW0uaW5pdCgpO1xuICBcbn1cblxuXG5cblxuLyoqXG4gKiBQUklDSU5HXG4qKi9cblxuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAncHJpY2luZycgfHwgV1BBU19BUFAudmlldy5zbHVnID09PSAncHJlY2lvJyl7XG4gIFxuICBsb2FkVmlkZW8oJy93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9hc3NldHMvdmlkZW8vcHJpY2luZy5tcDQnKTtcbiAgXG4gIHZhciBTbGlkZXIgPSByZXF1aXJlKFwiYm9vdHN0cmFwLXNsaWRlclwiKTtcbiAgdmFyIG15U2xpZGVyID0gbmV3IFNsaWRlcignI3ByaWNpbmctc2xpZGVyJyk7XG4gIC8vdmFyIHNsaWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2luZy1zbGlkZXInKTtcbiAgbXlTbGlkZXIub24oJ3NsaWRlU3RvcCcsIGZ1bmN0aW9uKG5ld1ZhbHVlKXtcbiAgICBcbiAgICB2YXIgbWVzc2FnZSA9IG51bGw7XG4gICAgc3dpdGNoKG5ld1ZhbHVlKVxuICAgIHtcbiAgICAgIGNhc2UgMDogXG4gICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHByaWNlOiAnJDEwMDAgZGVwb3NpdCArICQ4NTMgLyBtb250aCcsXG4gICAgICAgICAgICBkZXRhaWxzOiAnVGhhbmtzIHRvIG91ciBwYXJ0bmVyc2hpcCB3aXRoIFF1b3RhbmRhIHdlIGhhdmUgbWFuYWdlZCB0byBjcmVhdGUgdGhlIG1vc3QgZmxleGlibGUgcGxhY2VtZW50IHBsYW4gaW4gdG93bicsXG4gICAgICAgICAgICBsb2dvOiAnL2Fzc2V0cy9pbWcvcXVvdGFuZGEucG5nJyxcbiAgICAgICAgICAgIGFwcGx5VGV4dDogJ0FwcGx5IG5vdycsXG4gICAgICAgICAgICBhcHBseVVSTDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgcHJpY2U6ICckMTAwMCBkZXBvc2l0ICsgJDQ0NSAvIG1vbnRoJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdUaGFua3MgdG8gb3VyIHBhcnRuZXJzaGlwIHdpdGggUXVvdGFuZGEgd2UgaGF2ZSBtYW5hZ2VkIHRvIGNyZWF0ZSB0aGUgbW9zdCBmbGV4aWJsZSBwbGFjZW1lbnQgcGxhbiBpbiB0b3duJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9xdW90YW5kYS5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgbm93JyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiBcbiAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgcHJpY2U6ICckMTAwMCBkZXBvc2l0ICsgJDI0MCAvIG1vbnRoJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdUaGFua3MgdG8gb3VyIHBhcnRuZXJzaGlwIHdpdGggUXVvdGFuZGEgd2UgaGF2ZSBtYW5hZ2VkIHRvIGNyZWF0ZSB0aGUgbW9zdCBmbGV4aWJsZSBwbGFjZW1lbnQgcGxhbiBpbiB0b3duJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9xdW90YW5kYS5wbmcnLFxuICAgICAgICAgICAgYXBwbHlUZXh0OiAnQXBwbHkgbm93JyxcbiAgICAgICAgICAgIGFwcGx5VVJMOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiBcbiAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgcHJpY2U6ICckMTk4IC8gbW9udGggKE5vIGRlcG9zaXQpJyxcbiAgICAgICAgICAgIGRldGFpbHM6ICdBcHBseSB0byBTa2lsbHNmdW5kIGFuZCBnZXQgMzYgbW9udGggZmluYW5jaW5nLCBwYXkgPHN0cm9uZz5vbmx5ICQxOTggcGVyIG1vbnRoPC9zdHJvbmc+IGFuZCB3aXRoIG5vIGRlcG9zaXQgdG8gc3RhcnQuJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9za2lsbHNmdW5kLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSB0byBmaW5hbmNpbmcnLFxuICAgICAgICAgICAgYXBwbHlVUkw6ICdodHRwOi8vNGdlZWtzYWNhZGVteS5za2lsbHMuZnVuZCdcbiAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgNDogXG4gICAgICAgICAgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHByaWNlOiAnJDEzNSAvIG1vbnRoIChObyBkZXBvc2l0KScsXG4gICAgICAgICAgICBkZXRhaWxzOiAnQXBwbHkgdG8gU2tpbGxzZnVuZCBhbmQgZ2V0IDYwIG1vbnRoIGZpbmFuY2luZywgcGF5IDxzdHJvbmc+b25seSAkMTM1IGV2ZXJ5IG1vbnRoPC9zdHJvbmc+IGFuZCB3aXRoIG5vIGRlcG9zaXQgdG8gc3RhcnQuJyxcbiAgICAgICAgICAgIGxvZ286ICcvYXNzZXRzL2ltZy9za2lsbHNmdW5kLnBuZycsXG4gICAgICAgICAgICBhcHBseVRleHQ6ICdBcHBseSB0byBmaW5hbmNpbmcnLFxuICAgICAgICAgICAgYXBwbHlVUkw6ICdodHRwOi8vNGdlZWtzYWNhZGVteS5za2lsbHMuZnVuZCdcbiAgICAgICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYobWVzc2FnZSl7XG4gICAgICBpZih0eXBlb2YobWVzc2FnZS5wcmljZSkgPT0gJ3N0cmluZycpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZS1sYWJlbCcpLmlubmVySFRNTCA9IG1lc3NhZ2UucHJpY2U7XG4gICAgICBpZih0eXBlb2YobWVzc2FnZS5kZXRhaWxzKSA9PSAnc3RyaW5nJykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFuY2luZy1kZXRhaWxzJykuaW5uZXJIVE1MID0gbWVzc2FnZS5kZXRhaWxzO1xuICAgICAgaWYodHlwZW9mKG1lc3NhZ2UubG9nbykgPT0gJ3N0cmluZycpe1xuICAgICAgICB2YXIgbG9nb0VsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbmNpbmctbG9nbycpO1xuICAgICAgICB2YXIgdGVtcGxhdGVVUkwgPSBsb2dvRWxtLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZXVybCcpO1xuICAgICAgICBsb2dvRWxtLnNyYyA9IHRlbXBsYXRlVVJMICsgbWVzc2FnZS5sb2dvO1xuICAgICAgfVxuICAgICAgXG4gICAgICB2YXIgYXBwbHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYW5jaW5nLWJ0bicpO1xuICAgICAgYXBwbHlCdG4uaW5uZXJIVE1MID0gbWVzc2FnZS5hcHBseVRleHQ7XG4gICAgICBpZihtZXNzYWdlLmFwcGx5VVJMKXtcbiAgICAgICAgYXBwbHlCdG4uaHJlZiA9IG1lc3NhZ2UuYXBwbHlVUkw7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFyIGRlZmF1bHRVUkwgPSBhcHBseUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBwbHlsaW5rJyk7XG4gICAgICAgIGFwcGx5QnRuLmhyZWYgPSBkZWZhdWx0VVJMO1xuICAgICAgfVxuICAgIH1cblx0XHRcblx0XHR2YXIgcGF5bWVudFBsYW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBheW1lbnQtcGxhbicpO1xuXHRcdC8vcGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy15ZWxsb3dcIik7XG5cdFx0cGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJnbG93XCIpO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0ICAvL3BheW1lbnRQbGFuQ2FyZC5jbGFzc0xpc3QuYWRkKFwiYmcteWVsbG93XCIpO1xuXHRcdFx0cGF5bWVudFBsYW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJnbG93XCIpO1xuXHRcdH0sIDIwMCk7XG4gICAgXG4gIH0pO1xuICBcbiAgcmVxdWlyZSgnLi9wYWdlcy9wcmljaW5nLmpzJyk7XG5cbn1cblxuLyoqXG4gKiBDQUxFTkRBUlxuKiovXG5cbmlmKFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ2NhbGVuZGFyJyB8fCBXUEFTX0FQUC52aWV3LnNsdWcgPT09ICdjYWxlbmRhcmlvJyl7XG4gIFxuICBTbWFydEZpbHRlcnMuaW5pdCh7XG4gICAgbG9hZGluZ0FuaW1hdGlvbjogJy5jb3Vyc2VzIC5sb2FkaW5nLWFuaW1hdGlvbicsXG4gICAgcmVzdWx0c0NvbnRhaW5lcjogJy5jb3Vyc2VzIC5saXN0LWdyb3VwJyxcbiAgICBmaWx0ZXJEcm9wZG93bjogJy5kcm9wZG93bi1tZW51IGEnLFxuICAgIGZpbHRlcnM6IFtcbiAgICAgIHsgYnV0dG9uOiAnI2xvY2F0aW9uU2VsZWN0b3InLCB1cmxLZXk6ICdsJywgb3B0aW9uczogJy5sb2NhdGlvbi1vcHRpb24nIH0sXG4gICAgICB7IGJ1dHRvbjogJyNsYW5nU2VsZWN0b3InLCB1cmxLZXk6ICdsYW5nJywgb3B0aW9uczogJy5sYW5nLW9wdGlvbid9LFxuICAgICAgeyBidXR0b246ICcjdHlwZVNlbGVjdG9yJywgdXJsS2V5OiAndHlwZScsIG9wdGlvbnM6ICcudHlwZS1vcHRpb24nfVxuICAgIF1cbiAgfSk7XG4gIFxuICBNYWtlU3RpY2t5LmluaXQoJ1tkYXRhLXRvZ2dsZT1cInN0aWNreS1vbnNjcm9sbFwiXScsIDQwMDApO1xuICAgIFxufVxuXG4vKipcbiAqIExPQ0FUSU9OXG4qKi9cblxuaWYoWydzaW5nbGUtbG9jYXRpb24nXS5pbmRleE9mKFdQQVNfQVBQLnZpZXcudGVtcGxhdGUpICE9IC0xKXtcbiAgcmVxdWlyZSgnLi9wYWdlcy9sb2NhdGlvbi5qcycpO1xufVxuXG4vKipcbiAqIFBBUlRORVJTXG4qKi9cblxuaWYoV1BBU19BUFAudmlldy5zbHVnID09PSAncGFydG5lcnMnIHx8IFdQQVNfQVBQLnZpZXcuc2x1ZyA9PT0gJ3NvY2lvcycpe1xuICBcbiAgalF1ZXJ5KCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICBsb2FkVmlkZW8oJy93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9hc3NldHMvdmlkZW8vb2ZmaWNlLm1wNCcse292ZXJsYXk6ICdibGFjayd9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvc3R5bGVzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uICgkKSB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICovXG4gIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gIH1cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWJldGEnO1xuICB2YXIgREFUQV9LRVkgPSAnYnMudG9vbHRpcCc7XG4gIHZhciBFVkVOVF9LRVkgPSAnLicgKyBEQVRBX0tFWTtcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuICB2YXIgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIENMQVNTX1BSRUZJWCArICdcXFxcUysnLCAnZycpO1xuXG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gICAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nKScsXG4gICAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJyhzdHJpbmd8YXJyYXkpJ1xuICB9O1xuXG4gIHZhciBBdHRhY2htZW50TWFwID0ge1xuICAgIEFVVE86ICdhdXRvJyxcbiAgICBUT1A6ICd0b3AnLFxuICAgIFJJR0hUOiAncmlnaHQnLFxuICAgIEJPVFRPTTogJ2JvdHRvbScsXG4gICAgTEVGVDogJ2xlZnQnXG4gIH07XG5cbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgKyAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsXG4gICAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVsYXk6IDAsXG4gICAgaHRtbDogZmFsc2UsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnQ6ICdmbGlwJ1xuICB9O1xuXG4gIHZhciBIb3ZlclN0YXRlID0ge1xuICAgIFNIT1c6ICdzaG93JyxcbiAgICBPVVQ6ICdvdXQnXG4gIH07XG5cbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6ICdoaWRlJyArIEVWRU5UX0tFWSxcbiAgICBISURERU46ICdoaWRkZW4nICsgRVZFTlRfS0VZLFxuICAgIFNIT1c6ICdzaG93JyArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogJ3Nob3duJyArIEVWRU5UX0tFWSxcbiAgICBJTlNFUlRFRDogJ2luc2VydGVkJyArIEVWRU5UX0tFWSxcbiAgICBDTElDSzogJ2NsaWNrJyArIEVWRU5UX0tFWSxcbiAgICBGT0NVU0lOOiAnZm9jdXNpbicgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNPVVQ6ICdmb2N1c291dCcgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VFTlRFUjogJ21vdXNlZW50ZXInICsgRVZFTlRfS0VZLFxuICAgIE1PVVNFTEVBVkU6ICdtb3VzZWxlYXZlJyArIEVWRU5UX0tFWVxuICB9O1xuXG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgRkFERTogJ2ZhZGUnLFxuICAgIFNIT1c6ICdzaG93J1xuICB9O1xuXG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBUT09MVElQOiAnLnRvb2x0aXAnLFxuICAgIFRPT0xUSVBfSU5ORVI6ICcudG9vbHRpcC1pbm5lcicsXG4gICAgQVJST1c6ICcuYXJyb3cnXG4gIH07XG5cbiAgdmFyIFRyaWdnZXIgPSB7XG4gICAgSE9WRVI6ICdob3ZlcicsXG4gICAgRk9DVVM6ICdmb2N1cycsXG4gICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgTUFOVUFMOiAnbWFudWFsJ1xuXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvb2x0aXAoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICAgIC8vIHByaXZhdGVcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG5cbiAgICAgIC8vIHByb3RlY3RlZFxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLnRpcCA9IG51bGw7XG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcblxuICAgIC8vIHB1YmxpY1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZCA9IGZ1bmN0aW9uIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5jdXJyZW50VGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKTtcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2s7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmICgkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuXG4gICAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKTtcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKTtcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICQodGhpcy50aXApLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcblxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpO1xuICAgICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICAgIHZhciBpc0luVGhlRG9tID0gJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgICAgdmFyIHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKTtcblxuICAgICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKTtcblxuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KTtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgICAgJCh0aXApLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKCEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdGhpcy50aXApKSB7XG4gICAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKTtcblxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB7XG4gICAgICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgIG9mZnNldDogdGhpcy5jb25maWcub2Zmc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmxpcDoge1xuICAgICAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgICBlbGVtZW50OiBTZWxlY3Rvci5BUlJPV1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkKCdib2R5JykuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5fZml4VHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcHJldkhvdmVyU3RhdGUgPSBfdGhpcy5faG92ZXJTdGF0ZTtcbiAgICAgICAgICBfdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgICAkKF90aGlzLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pO1xuXG4gICAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgJCh0aGlzLnRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUb29sdGlwLl9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKTtcbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLl9jbGVhblRpcENsYXNzKCk7XG4gICAgICAgIF90aGlzMi5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuICAgICAgICAkKF90aGlzMi5lbGVtZW50KS50cmlnZ2VyKF90aGlzMi5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pO1xuICAgICAgICBpZiAoX3RoaXMyLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpczIuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKTtcblxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkNMSUNLXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkZPQ1VTXSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlO1xuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcblxuICAgICAgICAkKHRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcHJvdGVjdGVkXG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLmFkZEF0dGFjaG1lbnRDbGFzcyA9IGZ1bmN0aW9uIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhDTEFTU19QUkVGSVggKyAnLScgKyBhdHRhY2htZW50KTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0VGlwRWxlbWVudCA9IGZ1bmN0aW9uIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVE9PTFRJUF9JTk5FUiksIHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFICsgJyAnICsgQ2xhc3NOYW1lLlNIT1cpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5zZXRFbGVtZW50Q29udGVudCA9IGZ1bmN0aW9uIHNldEVsZW1lbnRDb250ZW50KCRlbGVtZW50LCBjb250ZW50KSB7XG4gICAgICB2YXIgaHRtbCA9IHRoaXMuY29uZmlnLmh0bWw7XG4gICAgICBpZiAoKHR5cGVvZiBjb250ZW50ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjb250ZW50KSkgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50W2h0bWwgPyAnaHRtbCcgOiAndGV4dCddKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5nZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICAgICAgdmFyIHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpO1xuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9O1xuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX3NldExpc3RlbmVycyA9IGZ1bmN0aW9uIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpO1xuXG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCBfdGhpczMuY29uZmlnLnNlbGVjdG9yLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMudG9nZ2xlKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIHZhciBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDogX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU47XG4gICAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/IF90aGlzMy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDogX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUO1xuXG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXMzLmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChfdGhpczMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9maXhUaXRsZSA9IGZ1bmN0aW9uIF9maXhUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZVR5cGUgPSBfdHlwZW9mKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKSk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCB0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9lbnRlciA9IGZ1bmN0aW9uIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPVztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG5cbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1c7XG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgICAgY29udGV4dC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fbGVhdmUgPSBmdW5jdGlvbiBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIHZhciBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWTtcblxuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5faXNXaXRoQWN0aXZlVHJpZ2dlciA9IGZ1bmN0aW9uIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgZm9yICh2YXIgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsICQodGhpcy5lbGVtZW50KS5kYXRhKCksIGNvbmZpZyk7XG5cbiAgICAgIGlmIChjb25maWcuZGVsYXkgJiYgdHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy50aXRsZSAmJiB0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5jb250ZW50ICYmIHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgVG9vbHRpcC5wcm90b3R5cGUuX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB2YXIgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKTtcbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBUb29sdGlwLnByb3RvdHlwZS5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKSB7XG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKCk7XG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KGRhdGEucGxhY2VtZW50KSk7XG4gICAgfTtcblxuICAgIFRvb2x0aXAucHJvdG90eXBlLl9maXhUcmFuc2l0aW9uID0gZnVuY3Rpb24gX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICB2YXIgaW5pdENvbmZpZ0FuaW1hdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGlvbjtcbiAgICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICQodGlwKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB0aGlzLmNvbmZpZy5hbmltYXRpb24gPSBpbml0Q29uZmlnQW5pbWF0aW9uO1xuICAgIH07XG5cbiAgICAvLyBzdGF0aWNcblxuICAgIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuICAgICAgICB2YXIgX2NvbmZpZyA9ICh0eXBlb2YgY29uZmlnID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjb25maWcpKSA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtZXRob2QgbmFtZWQgXCInICsgY29uZmlnICsgJ1wiJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAgICBrZXk6ICdWRVJTSU9OJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdEZWZhdWx0JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdOQU1FJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdEQVRBX0tFWScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERBVEFfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0V2ZW50JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRXZlbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnRVZFTlRfS0VZJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ0RlZmF1bHRUeXBlJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdFR5cGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvb2x0aXA7XG4gIH0oKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXA7XG59KGpRdWVyeSk7IC8qIGdsb2JhbCBQb3BwZXIgKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvb2x0aXAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcC5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vdmFyIG5ld3NsZXR0ZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsLW5ld3NsZXR0ZXIgZm9ybScpO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxuICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICBpZihmcm9tVG9wPjEwMCkgJCgnLmZvb3Rlci1iYXInKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgZWxzZSAkKCcuZm9vdGVyLWJhcicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbn0pO1xuXG5cbiQoJy5uZXdzbGV0dGVyLXNpZ251cCcpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICBcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICBcbiAgIHZhciBmb3JtTmV3c2xldHRlciA9ICQodGhpcyk7XG4gICB2YXIgZW1haWxGaWVsZCA9IGZvcm1OZXdzbGV0dGVyLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZW1haWwgPSBlbWFpbEZpZWxkLnZhbCgpO1xuICAgXG4gICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ25ld3NsZXR0ZXJfc2lnbnVwJyxcbiAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb3JtTmV3c2xldHRlci5odG1sKCc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiIHJvbGU9XCJhbGVydFwiPicrcmVzcG9uc2UuZGF0YSsnPC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGZvcm1OZXdzbGV0dGVyLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKHJlc3BvbnNlLm1zZykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24ocDEscDIscDMpe1xuICAgICAgICAgYWxlcnQocDMpO1xuICAgICAgfVxuICAgfSk7XG4gICBcbn0pO1xuXG4kKCcuc3lsbGFidXMtZG93bmxvYWQnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgXG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICB2YXIgZm9ybVN5bGxhYnVzID0gJCh0aGlzKTtcbiAgIHZhciBlbWFpbEZpZWxkID0gZm9ybVN5bGxhYnVzLmZpbmQoJ2lucHV0W3R5cGU9ZW1haWxdJyk7XG4gICB2YXIgZmlyc3ROYW1lRmllbGQgPSBmb3JtU3lsbGFidXMuZmluZCgnaW5wdXRbdHlwZT10ZXh0XScpO1xuICAgdmFyIGVtYWlsID0gZW1haWxGaWVsZC52YWwoKTtcbiAgIHZhciBmaXJzdE5hbWUgPSBmaXJzdE5hbWVGaWVsZC52YWwoKTtcbiAgIFxuICAgaWYoZW1haWwgPT0gJycgfHwgZmlyc3ROYW1lID09JycpXG4gICB7XG4gICAgICBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwoJ1dlIG5lZWQgeW91ciBlbWFpbCBhbmQgZmlyc3QgbmFtZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICB9XG4gICBlbHNle1xuICAgICAgZm9ybVN5bGxhYnVzLmZpbmQoJy5hbGVydC1kYW5nZXInKS5odG1sKCcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBXUEFTX0FQUC5hamF4X3VybCxcbiAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgIGFjdGlvbjogJ2Rvd25sb2FkX3N5bGxhYnVzJyxcbiAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmb3JtU3lsbGFidXMuaHRtbCgnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj4nK3Jlc3BvbnNlLmRhdGErJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgJCgnI3N5bGxhYnVzTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgfSwyMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBmb3JtU3lsbGFidXMuZmluZCgnLmFsZXJ0LWRhbmdlcicpLmh0bWwocmVzcG9uc2UubXNnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBhbGVydChwMyk7XG4gICAgICB9XG4gICB9KTtcbiAgIH0gXG4gICBcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICQuYWpheCh7XG4gICAgICB1cmw6IFdQQVNfQVBQLmFqYXhfdXJsLFxuICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICAgYWN0aW9uOiAnZ2V0X3VwY29taW5nX2V2ZW50J1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgIGlmKHJlc3BvbnNlKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY29kZSA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhKSBwcm9tcHRVcGNvbWluZ0V2ZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihwMSxwMixwMyl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgdGhlIHVwY29taW5nIGV2ZW50OiBcIitwMyk7XG4gICAgICB9XG4gICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBwcm9tcHRVcGNvbWluZ0V2ZW50KGV2ZW50KXtcbiAgIFxuICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvcFN0YXRlJykgIT0gJ3Nob3duJyl7XG4gICAgICBmaWxsVXBjb21pbmdFdmVudChldmVudCk7XG4gICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikuZGVsYXkoMjAwMCkuZmFkZUluKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9wU3RhdGUnLCdzaG93bicpO1xuICAgICAgJCgnI3VwY29taW5nRXZlbnQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgJChcIiN1cGNvbWluZ0V2ZW50XCIpLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBwdXQgeW91ciBkZWZhdWx0IGV2ZW50IGhlcmVcbiAgICAgICAgICAkKFwiI3VwY29taW5nRXZlbnRcIikucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgfVxufVxuXG5mdW5jdGlvbiBmaWxsVXBjb21pbmdFdmVudChldmVudCl7XG4gICB2YXIgbW9kYWwgPSAkKCcjdXBjb21pbmdFdmVudCcpO1xuICAgbW9kYWwuZmluZCgnLmRheScpLmh0bWwoZXZlbnQuZGF5KTtcbiAgIG1vZGFsLmZpbmQoJy5tb250aCcpLmh0bWwoZXZlbnQubW9udGgpO1xuICAgbW9kYWwuZmluZCgnLnllYXInKS5odG1sKGV2ZW50LnllYXIpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuZXZlbnQtdGl0bGUnKS5odG1sKGV2ZW50LnBvc3RfdGl0bGUpO1xuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRldGFpbHMnKS5odG1sKGV2ZW50LmV2ZW50X3N0YXJ0X3RpbWUgKyBcIiBcIiArIGV2ZW50LmV2ZW50X2VuZF90aW1lICsgJyBhdCA8c3BhbiBjbGFzcz1cImltb29uIGljb24tbG9jYXRpb25cIj48L3NwYW4+ICcgKyBldmVudC5hZGRyZXNzKTsvLzM6MzBwbSAtIGF0IFN0YXJ0aHViLCBEb3dudG93biBNaWFtaVxuICAgbW9kYWwuZmluZCgnLmV2ZW50LWRlc2NyaXB0aW9uJykuaHRtbChldmVudC5wb3N0X2NvbnRlbnQpO1xuICAgXG4gICBtb2RhbC5maW5kKCcuYnRuLWRhbmdlcicpLmF0dHIoJ2hyZWYnLGV2ZW50LnRpY2tldF91cmwpO1xuICAgXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gb25QYWdlVmlldyh1cmxDb250YWlucywgY2FsbGJhY2spe1xuICAgIC8vUGFnZSB2aWV3ID0gYXBwbHktdGhhbmsteW91XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YodXJsQ29udGFpbnMpID4gLTEpIHtcbiAgICAgICAgLy9Db2RlIGdvZXMgaGVyZVxuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0gIFxufVxuZnVuY3Rpb24gdHJpZ2dlclRhZ01hbmFnZXJFdmVudChldmVudE5hbWUpe1xuICAgIGlmKHR5cGVvZiBkYXRhTGF5ZXIgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBkYXRhTGF5ZXIucHVzaCh7J2V2ZW50JzogZXZlbnROYW1lfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkOiAnK2V2ZW50TmFtZSk7XG4gICAgfVxuICAgIGVsc2UgY29uc29sZS5sb2coJ0V2ZW50IG5vdCBiZWluZyBzZW50IHRvIFRhZ01hbmFnZXI6ICcrZXZlbnROYW1lKTtcbn1cbmZ1bmN0aW9uIHNhdmVEYXRhVmFyaWFibGUoaW5kZXgsIHZhbHVlKXtcbiAgICBpZih0eXBlb2YgZGF0YUxheWVyICE9ICd1bmRlZmluZWQnKSBkYXRhTGF5ZXIucHVzaCh7aW5kZXg6IHZhbHVlfSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnSW1wb3NpYmxlIHRvIHdyaXRlICcraW5kZXgrJyBvbiBkYXRhTGF5ZXInKTtcbiAgICBcbiAgICBcbiAgICBpZih0eXBlb2YgV1BBU19BUFAgPT0gJ3VuZGVmaW5lZCcpIFdQQVNfQVBQID0ge307XG4gICAgaWYodHlwZW9mIFdQQVNfQVBQLmRhdGFMYXllciA9PSAndW5kZWZpbmVkJykgV1BBU19BUFAuZGF0YUxheWVyID0ge307XG4gICAgV1BBU19BUFAuZGF0YUxheWVyW2luZGV4XSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gYWNfZXZlbnQoZXZlbnRLZXksIGV2ZW50TmFtZSwgdXNlckVtYWlsKXtcblxuICAvLyB3aGF0IHdlIGRvIGhlcmUsIGlzIGxvZyBhIHN1Y2Nlc3NmdWwgZXZlbnQgdG8gdGhlIGNvbnNvbGVcbiAgLy8gb3IgY2F0Y2ggYW55IGVycm9ycyB3ZSBoYXZlXG4gIHZhciB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgXG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjb3JkZWQgaGFsZndheSBzY3JvbGwgZXZlbnRcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8geW91ciBBY3RpdmVDYW1wYWlnbiBpZC4gWW91IGNhbiBnZXQgdGhpcyBmcm9tIHlvdXIgQUMgc2V0dGluZ3MgXG4gIHZhciBhY3RpZCA9IFwiZGIxNWEzMjY0ZmIyYWJmMTk5OTZmYTQ4ODczMDM5NzU3ZDUzNDU0NFwiOyBcblxuICB2YXIgdmlzaXQgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbCAvLyB0aGUgdXNlcidzIGVtYWlsIGFkZHJlc3NcbiAgfTtcblxuICAvLyBnZXQgdGhlIHVybCBvZiB0aGUgcGFnZSBhbmQgc2VuZCBpdCBhcyBldmVudCBkYXRhXG4gIHZhciBldmVudERhdGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAvLyBidWlsZCB0aGUgZXZlbnRTdHJpbmcgYmFzZWQgb24gdGhlIHZhcmlhYmxlcyB5b3UganVzdCBlZGl0ZWQgYWJvdmUg4pidXG4gIHZhciBldmVudFN0cmluZyA9IFwiYWN0aWQ9XCIgKyBhY3RpZCBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZrZXk9XCIgKyBldmVudEtleSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZldmVudD1cIiArIGV2ZW50TmFtZSBcbiAgICAgICAgICAgICAgICAgICAgKyBcIiZ2aXNpdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2aXNpdCkgXG4gICAgICAgICAgICAgICAgICAgICsgXCImZXZlbnRkYXRhXCIgKyBldmVudERhdGE7XG5cbiAgLy8gc2VuZCB0aGUgZXZlbnQgdG8gdGhlIEFjdGl2ZUNhbXBhaWduIEFQSSB3aXRoIG91ciBldmVudCB2YWx1ZXNcbiAgeGh0dHAub3BlbihcIlBPU1RcIiwgXCJodHRwczovL3RyYWNrY21wLm5ldC9ldmVudFwiLCB0cnVlKTtcbiAgeGh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgXG4gIGlmKGV2ZW50S2V5IT0nJyAmJiBldmVudE5hbWUhPScnICYmIHVzZXJFbWFpbCE9JycpIHhodHRwLnNlbmQoZXZlbnRTdHJpbmcpO1xuICBlbHNle1xuICAgICAgaWYoZXZlbnRLZXk9PScnKSBjb25zb2xlLmxvZygnSW52YWxpZCBldmVudEtleScsZXZlbnRLZXkpO1xuICAgICAgaWYoZXZlbnROYW1lPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgZXZlbnROYW1lJyxldmVudE5hbWUpO1xuICAgICAgaWYodXNlckVtYWlsPT0nJykgY29uc29sZS5sb2coJ0ludmFsaWQgdXNlckVtYWlsJyx1c2VyRW1haWwpO1xuICB9XG59XG5cbi8qKlxuICogVGFnbWFuZ2VyIGV2ZW50c1xuICoqL1xuJCgnLnN5bGxhYnVzLWRvd25sb2FkJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXsgXG4gICAgXG4gICAgdmFyIGVtYWlsSW5wdXQgPSAkKGV2ZW50LnRhcmdldCkuZmluZCgnaW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgICBpZihlbWFpbElucHV0Lmxlbmd0aD4wKSBzYXZlRGF0YVZhcmlhYmxlKCd1c2VyRW1haWwnLGVtYWlsSW5wdXRbMF0udmFsdWUpO1xuICAgIFxuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ3N5bGxhYnVzX2Rvd25sb2FkJyk7IFxufSk7XG4kKCcubmV3c2xldHRlci1zaWdudXAnKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBcbiAgICB2YXIgZW1haWxJbnB1dCA9ICQoZXZlbnQudGFyZ2V0KS5maW5kKCdpbnB1dFt0eXBlPWVtYWlsXScpO1xuICAgIGlmKGVtYWlsSW5wdXQubGVuZ3RoPjApIHNhdmVEYXRhVmFyaWFibGUoJ3VzZXJFbWFpbCcsZW1haWxJbnB1dFswXS52YWx1ZSk7XG4gICAgXG4gICAgdHJpZ2dlclRhZ01hbmFnZXJFdmVudCgnbmV3c2xldHRlcl9zaWdudXAnKTsgXG59KTtcbiQoJy5hcHBseS1idG4nKS5jbGljayhmdW5jdGlvbihldmVudCl7IHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2FwcGxpY2F0aW9uX3JlbmRlcmVkJyk7IH0pO1xub25QYWdlVmlldyhcIi9hcHBseS10aGFuay15b3VcIixmdW5jdGlvbigpe1xuICAgIC8vQ29kZSBnb2VzIGhlcmVcbiAgICB0cmlnZ2VyVGFnTWFuYWdlckV2ZW50KCdzdHVkZW50X2FwcGxpY2F0aW9uJyk7IFxufSk7XG4kKCcjZmluYW5jaW5nX2d1aWRlX2Rvd25sb2FkJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpeyBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyaWdnZXJUYWdNYW5hZ2VyRXZlbnQoJ2ZpbmFuY2luZ19ndWlkZV9kb3dubG9hZCcpOyBcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGV2ZW50LnRhcmdldC5ocmVmO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9tYXJrZXRpbmctZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBNYWtlU3RpY2t5ID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIC8vW2RhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCJdXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZWxlY3RvciwgbWF4U3RpY2tQb3NpdGlvbilcbiAgICB7XG4gICAgICAgIC8vIEZpbmQgYWxsIGRhdGEtdG9nZ2xlPVwic3RpY2t5LW9uc2Nyb2xsXCIgZWxlbWVudHNcbiAgICAgICAgJChzZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgc3RpY2t5ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgc3RpY2t5V3JhcHBlciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ3N0aWNreS13cmFwcGVyJyk7IC8vIGluc2VydCBoaWRkZW4gZWxlbWVudCB0byBtYWludGFpbiBhY3R1YWwgdG9wIG9mZnNldCBvbiBwYWdlXG4gICAgICAgICAgc3RpY2t5LmJlZm9yZShzdGlja3lXcmFwcGVyKTtcbiAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNjcm9sbCAmIHJlc2l6ZSBldmVudHNcbiAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5zdGlja3ktb25zY3JvbGwgcmVzaXplLnN0aWNreS1vbnNjcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh0aGlzKSwgbWF4U3RpY2tQb3NpdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gT24gcGFnZSBsb2FkXG4gICAgICAgICAgc3RpY2t5VG9nZ2xlKHN0aWNreSwgc3RpY2t5V3JhcHBlciwgJCh3aW5kb3cpLCBtYXhTdGlja1Bvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzdGlja3lUb2dnbGUoc3RpY2t5LCBzdGlja3lXcmFwcGVyLCBzY3JvbGxFbGVtZW50LCBtYXhTdGlja1Bvc2l0aW9uKSB7XG4gICAgICAgICAgdmFyIHN0aWNreUhlaWdodCA9IHN0aWNreS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgIHZhciBzdGlja3lXaWR0aCA9IHN0aWNreS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHN0aWNreVdyYXBwZXIub2Zmc2V0KCk7XG4gICAgICAgICAgdmFyIHN0aWNreVRvcCA9IG9mZnNldC50b3A7XG4gICAgICAgICAgdmFyIHN0aWNreUxlZnQgPSBvZmZzZXQubGVmdDtcbiAgICBcbiAgICAgICAgICB2YXIgd2luZG93U2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpO1xuICAgICAgICAgIGlmICh3aW5kb3dTY3JvbGxQb3NpdGlvbiA+PSBzdGlja3lUb3Ape1xuICAgICAgICAgICAgaWYod2luZG93U2Nyb2xsUG9zaXRpb24gPCBtYXhTdGlja1Bvc2l0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGlja3lXcmFwcGVyLmhlaWdodChzdGlja3lIZWlnaHQpO1xuICAgICAgICAgICAgICBzdGlja3kuYWRkQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImZvemVuLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmNzcygnd2lkdGgnLHN0aWNreVdpZHRoKydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JyxzdGlja3lMZWZ0KydweCcpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLCcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0aWNreS5yZW1vdmVDbGFzcyhcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICAgICAgc3RpY2t5LmFkZENsYXNzKFwiZm96ZW4tc3RpY2t5XCIpO1xuICAgICAgICAgICAgICBzdGlja3kuY3NzKCd0b3AnLChtYXhTdGlja1Bvc2l0aW9uLTY2NSkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHN0aWNreS5jc3MoJ2xlZnQnLCcxNXB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kucmVtb3ZlQ2xhc3MoXCJmb3plbi1zdGlja3lcIik7XG4gICAgICAgICAgICBzdGlja3kuY3NzKCdsZWZ0JywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5LmNzcygndG9wJywnMCcpO1xuICAgICAgICAgICAgc3RpY2t5V3JhcHBlci5oZWlnaHQoJ2F1dG8nKTtcbiAgICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gcGx1Z2luO1xuICAgIFxufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9jb21tb24vc3RpY2t5LXRvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgU21hcnRGaWx0ZXJzID0gKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIHBsdWdpbiA9IHt9O1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmaWx0ZXJEcm9wZG93bjogJycsXG4gICAgICAgIGxvYWRpbmdBbmltYXRpb246ICcnLFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyOiAnJyxcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbihzZXR0aW5ncyl7XG4gICAgICAgICQuZXh0ZW5kKCBjb25maWcsIHNldHRpbmdzICk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIHRoZSBTbWFydEZpbHRlcnMnKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgICAgICBzZXRGaWx0ZXJzRGVmYXVsdFN0YXRlcyh1cmxWYXJzKTtcbiAgICAgICAgXG4gICAgICAgICQoY29uZmlnLmZpbHRlckRyb3Bkb3duKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7ICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmh0bWwoJCh0aGlzKS5odG1sKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPSAnYWxsJykgdXJsVmFyc1tidXR0b24uZGF0YSgna2V5JyldID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgLy9lbHNlIHVybFZhcnMgPSB1bnNldEFycmF5KHVybFZhcnMsYnV0dG9uLmRhdGEoJ2tleScpKTtcbiAgICAgICAgICAgIGVsc2UgZGVsZXRlIHVybFZhcnNbYnV0dG9uLmRhdGEoJ2tleScpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChjb25maWcubG9hZGluZ0FuaW1hdGlvbikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgICQoY29uZmlnLnJlc3VsdHNDb250YWluZXIpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsvL2hpZGUgdGhlIGRyb3Bkb3duIGFmdGVyIGNsaWNrZWRcbiAgICAgICAgICAgIC8vdmFyIHBhcmVudERyb3Bkb3duID0gYXV4LnBhcmVudCgpO1xuICAgICAgICAgICAgLy9wYXJlbnREcm9wZG93blswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldEJhc2VVUkwoKSArICc/JyArIHNlcmlhbGl6ZSh1cmxWYXJzICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldEZpbHRlcnNEZWZhdWx0U3RhdGVzKHVybFZhcnMpe1xuICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZyBmaWx0ZXIgdmFsdWVzJywgdXJsVmFycyk7XG4gICAgICAgIFxuICAgICAgICBjb25maWcuZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXIudXJsS2V5KTtcbiAgICAgICAgICAgIGlmKGZpbHRlci51cmxLZXkgaW4gdXJsVmFycykgJChmaWx0ZXIuYnV0dG9uKS5odG1sKCQoZmlsdGVyLm9wdGlvbnMrJ1tkYXRhLXZhbHVlPVwiJyt1cmxWYXJzW2ZpbHRlci51cmxLZXldKydcIl0nKS5odG1sKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0QmFzZVVSTCgpe1xuICAgICAgICB2YXIgYmFzZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcGllY2VzID0gYmFzZVVSTC5zcGxpdCgnPycpO1xuICAgICAgICBpZihwaWVjZXMubGVuZ3RoPjEpIGJhc2VVUkwgPSBwaWVjZXNbMF07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xuICAgICAgXG4gICAgICAgIHZhciB2YXJzID0gW10sIGhhc2g7XG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaGFzaGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICB2YXJzLnB1c2goaGFzaFswXSk7XG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZGVsZXRlIHZhcnNbJzAnXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbZ2V0QmFzZVVSTCgpXTtcbiAgICAgICAgZGVsZXRlIHZhcnNbJyddO1xuICBcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgICBmb3IodmFyIHAgaW4gb2JqKVxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgICBcbn0pKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvY29tbW9uL3NtYXJ0LWZpbHRlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydCB2YXIgUGllQ2hhcnQgPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlcHVibGljID0ge307XG5cbiAgICB0aGVwdWJsaWMuY3JlYXRlUGllID0gZnVuY3Rpb24oZGF0YUVsZW1lbnQsIHBpZUVsZW1lbnQpIHtcbiAgICAgIHZhciBsaXN0RGF0YSA9IFtdO1xuICAgICAgJChkYXRhRWxlbWVudCtcIiBzcGFuXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxpc3REYXRhLnB1c2goTnVtYmVyKCQodGhpcykuaHRtbCgpKSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBsaXN0VG90YWwgPSAwO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdFRvdGFsICs9IGxpc3REYXRhW2ldO1xuICAgICAgfVxuICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICB2YXIgY29sb3IgPSBbXG4gICAgICAgIFwiY29ybmZsb3dlcmJsdWVcIiwgXG4gICAgICAgIFwib2xpdmVkcmFiXCIsIFxuICAgICAgICBcIm9yYW5nZVwiLCBcbiAgICAgICAgXCJ0b21hdG9cIiwgXG4gICAgICAgIFwiY3JpbXNvblwiLCBcbiAgICAgICAgXCJwdXJwbGVcIiwgXG4gICAgICAgIFwidHVycXVvaXNlXCIsIFxuICAgICAgICBcImZvcmVzdGdyZWVuXCIsIFxuICAgICAgICBcIm5hdnlcIiwgXG4gICAgICAgIFwiZ3JheVwiXG4gICAgICBdO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bGlzdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNpemUgPSBzbGljZVNpemUobGlzdERhdGFbaV0sIGxpc3RUb3RhbCk7XG4gICAgICAgIGl0ZXJhdGVTbGljZXMoc2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBpLCAwLCBjb2xvcltpXSk7XG4gICAgICAgICQoZGF0YUVsZW1lbnQrXCIgbGk6bnRoLWNoaWxkKFwiKyhpKzEpK1wiKVwiKS5jc3MoXCJib3JkZXItY29sb3JcIiwgY29sb3JbaV0pO1xuICAgICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGljZVNpemUoZGF0YU51bSwgZGF0YVRvdGFsKSB7XG4gICAgICByZXR1cm4gKGRhdGFOdW0gLyBkYXRhVG90YWwpICogMzYwO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRTbGljZShzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpIHtcbiAgICAgICQocGllRWxlbWVudCkuYXBwZW5kKFwiPGRpdiBjbGFzcz0nc2xpY2UgXCIrc2xpY2VJRCtcIic+PHNwYW4+PC9zcGFuPjwvZGl2PlwiKTtcbiAgICAgIHZhciBvZmZzZXQgPSBvZmZzZXQgLSAxO1xuICAgICAgdmFyIHNpemVSb3RhdGlvbiA9IC0xNzkgKyBzbGljZVNpemU7XG4gICAgICAkKFwiLlwiK3NsaWNlSUQpLmNzcyh7XG4gICAgICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKFwiK29mZnNldCtcImRlZykgdHJhbnNsYXRlM2QoMCwwLDApXCJcbiAgICAgIH0pO1xuICAgICAgJChcIi5cIitzbGljZUlEK1wiIHNwYW5cIikuY3NzKHtcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIiAgICAgICA6IFwicm90YXRlKFwiK3NpemVSb3RhdGlvbitcImRlZykgdHJhbnNsYXRlM2QoMCwwLDApXCIsXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBjb2xvclxuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVTbGljZXMoc2xpY2VTaXplLCBwaWVFbGVtZW50LCBvZmZzZXQsIGRhdGFDb3VudCwgc2xpY2VDb3VudCwgY29sb3IpIHtcbiAgICAgIHZhciBzbGljZUlEID0gXCJzXCIrZGF0YUNvdW50K1wiLVwiK3NsaWNlQ291bnQ7XG4gICAgICB2YXIgbWF4U2l6ZSA9IDE3OTtcbiAgICAgIGlmKHNsaWNlU2l6ZTw9bWF4U2l6ZSkge1xuICAgICAgICBhZGRTbGljZShzbGljZVNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCwgc2xpY2VJRCwgY29sb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkU2xpY2UobWF4U2l6ZSwgcGllRWxlbWVudCwgb2Zmc2V0LCBzbGljZUlELCBjb2xvcik7XG4gICAgICAgIGl0ZXJhdGVTbGljZXMoc2xpY2VTaXplLW1heFNpemUsIHBpZUVsZW1lbnQsIG9mZnNldCttYXhTaXplLCBkYXRhQ291bnQsIHNsaWNlQ291bnQrMSwgY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhlcHVibGljO1xufSkoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9saWIvY2FrZUNoYXJ0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsb2FkVmlkZW8gPSBmdW5jdGlvbih2aWRlb1VSTCwgc2V0dGluZ3Mpe1xuICBpZih0eXBlb2Ygc2V0dGluZ3MgPT0gJ3VuZGVmaW5lZCcpIHNldHRpbmdzID0ge307XG4gIHZhciBzID0gZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICBcbiAgdmFyIHZpZGVvVmlld3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmlkZW9WaWV3cG9ydC5pZCA9IFwidmlkZW8tdmlld3BvcnRcIjtcbiAgdmlkZW9WaWV3cG9ydC5jbGFzc0xpc3QuYWRkKCd2aWRlby12aWV3cG9ydCcpO1xuICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHZpZGVvVmlld3BvcnQsIHMpO1xuICBcbiAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgdmlkZW8uc3JjID0gdmlkZW9VUkw7IHZpZGVvLmF1dG9QbGF5ID0gdHJ1ZTsgdmlkZW8ubG9vcCA9IHRydWU7IHZpZGVvLm11dGVkID0gdHJ1ZTsgXG4gIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWJhY2tncm91bmQnKTtcbiAgdmlkZW9WaWV3cG9ydC5hcHBlbmRDaGlsZCh2aWRlbyk7XG4gIFxuICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJyxmdW5jdGlvbigpeyB2aWRlby5wbGF5KCk7IH0pO1xuICB2YXIgdmlkX3dfb3JpZyA9IHBhcnNlSW50KCQod2luZG93KS53aWR0aCgpKTtcbiAgdmFyIHZpZF9oX29yaWcgPSBwYXJzZUludCgkKHZpZGVvKS5oZWlnaHQoKSk7XG4gIHZhciBtaW5fdyA9IDQwMDtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsZnVuY3Rpb24oKXtcbiAgICAgIHZhciBzb3VyY2VWaWRlb1dpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgIHZhciBzb3VyY2VWaWRlb0hlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgICAgLy9pZih2aWRfd19vcmlnIDw9IDAgfHwgdmlkX3dfb3JpZyA9PSBJbmZpbml0eSkgdmlkX3dfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLndpZHRoKCkpO1xuICAgICAgLy9pZih2aWRfaF9vcmlnIDw9IDAgfHwgdmlkX2hfb3JpZyA9PSBJbmZpbml0eSkgdmlkX2hfb3JpZyA9IHBhcnNlSW50KCQodmlkZW8pLmhlaWdodCgpKTtcbiAgICAgIHZhciBhZGRlZFBhZGRpbmcgPSAxMDA7XG4gICAgICB2YXIgdGFyZ2V0X3dpdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgIHZhciB0YXJnZXRfaGVpZ2ggPSAkKCcubWFzdGhlYWQnKS5oZWlnaHQoKSArICQoJ25hdi5uYXZiYXInKS5oZWlnaHQoKSArIHBhcnNlSW50KCQoJy5tYXN0aGVhZCcpLmNzcygnbWFyZ2luLXRvcCcpKSArIHBhcnNlSW50KCQoJ25hdi5uYXZiYXInKS5jc3MoJ21hcmdpbi10b3AnKSkgKyBhZGRlZFBhZGRpbmc7XG4gICAgICAkKHZpZGVvVmlld3BvcnQpLndpZHRoKHRhcmdldF93aXRoKTtcbiAgICAgICQodmlkZW9WaWV3cG9ydCkuaGVpZ2h0KG5ld1ZpZXdIZWlnaHQpO1xuICBcbiAgICAgIHZhciBzY2FsZV9oID0gdGFyZ2V0X3dpdGggLyB2aWRfd19vcmlnO1xuICAgICAgdmFyIHNjYWxlX3YgPSB0YXJnZXRfaGVpZ2ggLyB2aWRfaF9vcmlnO1xuICAgICAgdmFyIHNjYWxlID0gc2NhbGVfaCA+IHNjYWxlX3YgPyBzY2FsZV9oIDogc2NhbGVfdjtcbiAgXG4gICAgICBcbiAgICAgIGlmIChzY2FsZSAqIHZpZF93X29yaWcgPCBtaW5fdykgc2NhbGUgPSBtaW5fdyAvIHZpZF93X29yaWc7XG4gICAgICBcbiAgICAgIHZhciBuZXdWaWV3V2lkdGggPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gICAgICB2YXIgbmV3Vmlld0hlaWdodCA9IHNjYWxlICogdmlkX3dfb3JpZztcbiAgICAgIFxuICAgICAgLy9pZiB0aGUgbmV3IHdpZHRoIGRvZXMgbm90IGNvdmVyIHRoZSBlbnRpcmUgc2NyZWVuIHdpZHRoXG4gICAgICBpZiAobmV3Vmlld1dpZHRoIDwgc291cmNlVmlkZW9XaWR0aCkgc2NhbGUgPSBzb3VyY2VWaWRlb1dpZHRoIC8gdmlkX3dfb3JpZztcbiAgICAgIGlmIChuZXdWaWV3SGVpZ2h0IDwgc291cmNlVmlkZW9IZWlnaHQgJiYgc2NhbGUgPCAoc291cmNlVmlkZW9IZWlnaHQgLyB2aWRfaF9vcmlnKSkgc2NhbGUgPSBzb3VyY2VWaWRlb0hlaWdodCAvIHZpZF9oX29yaWc7XG4gICAgICBcbiAgICAgIG5ld1ZpZXdXaWR0aCA9IHNjYWxlICogdmlkX3dfb3JpZztcbiAgICAgIG5ld1ZpZXdIZWlnaHQgPSBzY2FsZSAqIHZpZF93X29yaWc7XG4gIFxuICAgICAgJCh2aWRlbykud2lkdGgobmV3Vmlld1dpZHRoKTtcbiAgICAgICQodmlkZW8pLmhlaWdodChuZXdWaWV3SGVpZ2h0KTtcbiAgXG4gICAgICAkKHZpZGVvVmlld3BvcnQpLnNjcm9sbExlZnQoKG5ld1ZpZXdXaWR0aCAtIHRhcmdldF93aXRoKSAvIDIpO1xuICAgICAgJCh2aWRlb1ZpZXdwb3J0KS5zY3JvbGxUb3AoKG5ld1ZpZXdIZWlnaHQgLSB0YXJnZXRfaGVpZ2gpIC8gMik7XG4gIH0pO1xuICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gIFxuICBpZih0eXBlb2Ygc2V0dGluZ3Mub3ZlcmxheSAhPSAndW5kZWZpbmVkJyl7XG4gICAgXG4gICAgdmFyIG92ZXJsYXkgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJhYnNvbHV0ZVwiO1xuICAgIG92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLm92ZXJsYXk7XG4gICAgb3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcbiAgICBvdmVybGF5LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIG92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgb3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIi0xXCI7XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvdmVybGF5LCBzKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbG9hZFZpZGVvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2NvbW1vbi9yZXNwb25zaXZlLXZpZGVvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFRoZVByb2dyYW0gPSAoZnVuY3Rpb24oKXtcbiAgICBcbiAgICB2YXIgdGhlc2NvcGUgPSB7fTtcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcbiAgICB2YXIgdG9wTWVudSA9ICQoXCIucHJvZ3JhbS1tZW51XCIpLFxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpKzE1LFxuICAgICAgICAvLyBBbGwgbGlzdCBpdGVtc1xuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhW2hyZWYqPScjJ11cIiksXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXG4gICAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgIHZhciBpdGVtID0gJCgkKHRoaXMpLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cbiAgICAgICAgfSk7XG4gICAgXG4gICAgdGhlc2NvcGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICAvLyBCaW5kIHRvIHNjcm9sbFxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSt0b3BNZW51SGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cbiAgICAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcbiAgICAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xuICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xuICAgICAgICAgICBtZW51SXRlbXNcbiAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAuZW5kKCkuZmlsdGVyKFwiW2hyZWY9JyNcIitpZCtcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRoZXNjb3BlO1xuICAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlUHJvZ3JhbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3dwLWNvbnRlbnQvdGhlbWVzL3RoZS1mYXN0ZXN0L3NyYy9qcy9wYWdlcy9wcm9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiICAgIGZ1bmN0aW9uIFBhcnRpY2xlKCB4LCB5LCByYWRpdXMgKSB7XG4gICAgXHR0aGlzLmluaXQoIHgsIHksIHJhZGl1cyApO1xuICAgIH1cbiAgICBcbiAgICBQYXJ0aWNsZS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgXHRpbml0OiBmdW5jdGlvbiggeCwgeSwgcmFkaXVzICkge1xuICAgIFxuICAgIFx0XHR0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICBcbiAgICBcdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTA7XG4gICAgXHRcdHRoaXMud2FuZGVyID0gMC4xNTtcbiAgICBcdFx0dGhpcy50aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gICAgXHRcdHRoaXMuZHJhZyA9IDAuOTI7XG4gICAgXHRcdHRoaXMuY29sb3IgPSAnI2ZmZic7XG4gICAgXG4gICAgXHRcdHRoaXMueCA9IHggfHwgMC4wO1xuICAgIFx0XHR0aGlzLnkgPSB5IHx8IDAuMDtcbiAgICBcbiAgICBcdFx0dGhpcy52eCA9IDAuMDtcbiAgICBcdFx0dGhpcy52eSA9IDAuMDtcbiAgICBcdH0sXG4gICAgXG4gICAgXHRtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBcdFx0dGhpcy54ICs9IHRoaXMudng7XG4gICAgXHRcdHRoaXMueSArPSB0aGlzLnZ5O1xuICAgIFxuICAgIFx0XHR0aGlzLnZ4ICo9IHRoaXMuZHJhZztcbiAgICBcdFx0dGhpcy52eSAqPSB0aGlzLmRyYWc7XG4gICAgXG4gICAgXHRcdHRoaXMudGhldGEgKz0gcmFuZG9tKCAtMC41LCAwLjUgKSAqIHRoaXMud2FuZGVyO1xuICAgIFx0XHR0aGlzLnZ4ICs9IHNpbiggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFx0XHR0aGlzLnZ5ICs9IGNvcyggdGhpcy50aGV0YSApICogMC4xO1xuICAgIFxuICAgIFx0XHR0aGlzLnJhZGl1cyAqPSAwLjk2O1xuICAgIFx0XHR0aGlzLmFsaXZlID0gdGhpcy5yYWRpdXMgPiAwLjU7XG4gICAgXHR9LFxuICAgIFxuICAgIFx0ZHJhdzogZnVuY3Rpb24oIGN0eCApIHtcbiAgICBcbiAgICBcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuICAgIFx0XHRjdHguYXJjKCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIFRXT19QSSApO1xuICAgIFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBcdFx0Y3R4LmZpbGwoKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGFydGljbGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIHZhciBNQVhfUEFSVElDTEVTID0gMjgwO1xuICB2YXIgQ09MT1VSUyA9IFsgJyM2OUQyRTcnLCAnI0E3REJEOCcsICcjRTBFNENDJywgJyNGMzg2MzAnLCAnI0ZBNjkwMCcsICcjRkY0RTUwJywgJyNGOUQ0MjMnIF07XG4gIFxuICB2YXIgcGFydGljbGVzID0gW107XG4gIHZhciBwb29sID0gW107XG4gIFxuICB2YXIgU2tldGNoID0gcmVxdWlyZShcIi4uL2xpYi9za2V0Y2hcIik7XG4gIHZhciBjYW52YXNCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjYmctc2tldGNoJyApO1xuICBjYW52YXNCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB2YXIgcHJpY2luZ1NrZXRjaCA9IFNrZXRjaC5jcmVhdGUoe1xuICBcdGNvbnRhaW5lcjogY2FudmFzQmdcbiAgfSk7XG4gIFxuICBwcmljaW5nU2tldGNoLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdC8vIFNldCBvZmYgc29tZSBpbml0aWFsIHBhcnRpY2xlcy5cbiAgXHR2YXIgaSwgeCwgeTtcbiAgXG4gIFx0Zm9yICggaSA9IDA7IGkgPCAyMDsgaSsrICkge1xuICBcdFx0eCA9ICggcHJpY2luZ1NrZXRjaC53aWR0aCAqIDAuNSApICsgcmFuZG9tKCAtMTAwLCAxMDAgKTtcbiAgXHRcdHkgPSAoIHByaWNpbmdTa2V0Y2guaGVpZ2h0ICogMC41ICkgKyByYW5kb20oIC0xMDAsIDEwMCApO1xuICBcdFx0cHJpY2luZ1NrZXRjaC5zcGF3biggeCwgeSApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guc3Bhd24gPSBmdW5jdGlvbiggeCwgeSApIHtcbiAgXG4gIFx0aWYgKCBwYXJ0aWNsZXMubGVuZ3RoID49IE1BWF9QQVJUSUNMRVMgKVxuICBcdFx0cG9vbC5wdXNoKCBwYXJ0aWNsZXMuc2hpZnQoKSApO1xuICBcbiAgXHR2YXIgcGFydGljbGUgPSBwb29sLmxlbmd0aCA/IHBvb2wucG9wKCkgOiBuZXcgUGFydGljbGUoKTtcbiAgXHRwYXJ0aWNsZS5pbml0KCB4LCB5LCByYW5kb20oIDUsIDQwICkgKTtcbiAgXG4gIFx0cGFydGljbGUud2FuZGVyID0gcmFuZG9tKCAwLjUsIDIuMCApO1xuICBcdHBhcnRpY2xlLmNvbG9yID0gcmFuZG9tKCBDT0xPVVJTICk7XG4gIFx0cGFydGljbGUuZHJhZyA9IHJhbmRvbSggMC45LCAwLjk5ICk7XG4gIFxuICBcdHZhciB0aGV0YSA9IHJhbmRvbSggVFdPX1BJICk7XG4gIFx0dmFyIGZvcmNlID0gcmFuZG9tKCAyLCA4ICk7XG4gIFxuICBcdHBhcnRpY2xlLnZ4ID0gc2luKCB0aGV0YSApICogZm9yY2U7XG4gIFx0cGFydGljbGUudnkgPSBjb3MoIHRoZXRhICkgKiBmb3JjZTtcbiAgXG4gIFx0cGFydGljbGVzLnB1c2goIHBhcnRpY2xlICk7XG4gIH1cbiAgXG4gIHByaWNpbmdTa2V0Y2gudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBpLCBwYXJ0aWNsZTtcbiAgXG4gIFx0Zm9yICggaSA9IHBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcbiAgXG4gIFx0XHRwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpXTtcbiAgXG4gIFx0XHRpZiAoIHBhcnRpY2xlLmFsaXZlICkgcGFydGljbGUubW92ZSgpO1xuICBcdFx0ZWxzZSBwb29sLnB1c2goIHBhcnRpY2xlcy5zcGxpY2UoIGksIDEgKVswXSApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2guZHJhdyA9IGZ1bmN0aW9uKCkge1xuICBcbiAgXHRwcmljaW5nU2tldGNoLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiAgPSAnbGlnaHRlcic7XG4gIFx0XG4gIFx0Zm9yICggdmFyIGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XG4gIFx0XHRwYXJ0aWNsZXNbaV0uZHJhdyggcHJpY2luZ1NrZXRjaCApO1xuICBcdH1cbiAgfTtcbiAgXG4gIHByaWNpbmdTa2V0Y2gubW91c2Vtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIFxuICBcdHZhciBwYXJ0aWNsZSwgdGhldGEsIGZvcmNlLCB0b3VjaCwgbWF4LCBpLCBqLCBuO1xuICBcbiAgXHRmb3IgKCBpID0gMCwgbiA9IHByaWNpbmdTa2V0Y2gudG91Y2hlcy5sZW5ndGg7IGkgPCBuOyBpKysgKSB7XG4gIFxuICBcdFx0dG91Y2ggPSBwcmljaW5nU2tldGNoLnRvdWNoZXNbaV0sIG1heCA9IHJhbmRvbSggMSwgNCApO1xuICBcdFx0Zm9yICggaiA9IDA7IGogPCBtYXg7IGorKyApIHByaWNpbmdTa2V0Y2guc3Bhd24oIHRvdWNoLngsIHRvdWNoLnkgKTtcbiAgXHR9XG4gIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvcHJpY2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogQ29weXJpZ2h0IChDKSAyMDEzIEp1c3RpbiBXaW5kbGUsIGh0dHA6Ly9zb3Vsd2lyZS5jby51ayAqL1xuXG4oZnVuY3Rpb24gKCByb290LCBmYWN0b3J5ICkge1xuXG4gIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuXG4gICAgLy8gQ29tbW9uSlMgbGlrZVxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290LCByb290LmRvY3VtZW50KTtcblxuICB9IGVsc2UgaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG5cbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFjdG9yeSggcm9vdCwgcm9vdC5kb2N1bWVudCApOyB9KTtcblxuICB9IGVsc2Uge1xuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxcbiAgICByb290LlNrZXRjaCA9IGZhY3RvcnkoIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTtcbiAgfVxuXG59KCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKCB3aW5kb3csIGRvY3VtZW50ICkge1xuXG5cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgQ29uZmlnXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBNQVRIX1BST1BTID0gJ0UgTE4xMCBMTjIgTE9HMkUgTE9HMTBFIFBJIFNRUlQxXzIgU1FSVDIgYWJzIGFjb3MgYXNpbiBhdGFuIGNlaWwgY29zIGV4cCBmbG9vciBsb2cgcm91bmQgc2luIHNxcnQgdGFuIGF0YW4yIHBvdyBtYXggbWluJy5zcGxpdCggJyAnICk7XG4gIHZhciBIQVNfU0tFVENIID0gJ19faGFzU2tldGNoJztcbiAgdmFyIE0gPSBNYXRoO1xuXG4gIHZhciBDQU5WQVMgPSAnY2FudmFzJztcbiAgdmFyIFdFQkdMID0gJ3dlYmdsJztcbiAgdmFyIERPTSA9ICdkb20nO1xuXG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICB2YXIgaW5zdGFuY2VzID0gW107XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuXG4gICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICBhdXRvc3RhcnQ6IHRydWUsXG4gICAgYXV0b2NsZWFyOiB0cnVlLFxuICAgIGF1dG9wYXVzZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IGRvYy5ib2R5LFxuICAgIGludGVydmFsOiAxLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgcmV0aW5hOiBmYWxzZSxcbiAgICB0eXBlOiBDQU5WQVNcbiAgfTtcblxuICB2YXIga2V5TWFwID0ge1xuXG4gICAgIDg6ICdCQUNLU1BBQ0UnLFxuICAgICA5OiAnVEFCJyxcbiAgICAxMzogJ0VOVEVSJyxcbiAgICAxNjogJ1NISUZUJyxcbiAgICAyNzogJ0VTQ0FQRScsXG4gICAgMzI6ICdTUEFDRScsXG4gICAgMzc6ICdMRUZUJyxcbiAgICAzODogJ1VQJyxcbiAgICAzOTogJ1JJR0hUJyxcbiAgICA0MDogJ0RPV04nXG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgVXRpbGl0aWVzXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIGZ1bmN0aW9uIGlzQXJyYXkoIG9iamVjdCApIHtcblxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIG9iamVjdCApID09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmplY3QgKSB7XG5cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOdW1iZXIoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdudW1iZXInO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdHJpbmcoIG9iamVjdCApIHtcblxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09ICdzdHJpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5TmFtZSggY29kZSApIHtcblxuICAgIHJldHVybiBrZXlNYXBbIGNvZGUgXSB8fCBTdHJpbmcuZnJvbUNoYXJDb2RlKCBjb2RlICk7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoIHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUgKSB7XG5cbiAgICBmb3IgKCB2YXIga2V5IGluIHNvdXJjZSApXG5cbiAgICAgIGlmICggb3ZlcndyaXRlIHx8ICEoIGtleSBpbiB0YXJnZXQgKSApXG5cbiAgICAgICAgdGFyZ2V0WyBrZXkgXSA9IHNvdXJjZVsga2V5IF07XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHkoIG1ldGhvZCwgY29udGV4dCApIHtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcblxuICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBhcmd1bWVudHMgKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmUoIHRhcmdldCApIHtcblxuICAgIHZhciBvYmplY3QgPSB7fTtcblxuICAgIGZvciAoIHZhciBrZXkgaW4gdGFyZ2V0ICkge1xuICAgICAgXG4gICAgICBpZiAoIGtleSA9PT0gJ3dlYmtpdE1vdmVtZW50WCcgfHwga2V5ID09PSAnd2Via2l0TW92ZW1lbnRZJyApXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoIGlzRnVuY3Rpb24oIHRhcmdldFsga2V5IF0gKSApXG5cbiAgICAgICAgb2JqZWN0WyBrZXkgXSA9IHByb3h5KCB0YXJnZXRbIGtleSBdLCB0YXJnZXQgKTtcblxuICAgICAgZWxzZVxuXG4gICAgICAgIG9iamVjdFsga2V5IF0gPSB0YXJnZXRbIGtleSBdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBDb25zdHJ1Y3RvclxuXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgKi9cblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RvciggY29udGV4dCApIHtcblxuICAgIHZhciByZXF1ZXN0LCBoYW5kbGVyLCB0YXJnZXQsIHBhcmVudCwgYm91bmRzLCBpbmRleCwgc3VmZml4LCBjbG9jaywgbm9kZSwgY29weSwgdHlwZSwga2V5LCB2YWwsIG1pbiwgbWF4LCB3LCBoO1xuXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHZhciB0b3VjaGVzID0gW107XG4gICAgdmFyIHJlc2l6ZWQgPSBmYWxzZTtcbiAgICB2YXIgc2V0dXAgPSBmYWxzZTtcbiAgICB2YXIgcmF0aW8gPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIHZhciBpc0RpdiA9IGNvbnRleHQudHlwZSA9PSBET007XG4gICAgdmFyIGlzMkQgPSBjb250ZXh0LnR5cGUgPT0gQ0FOVkFTO1xuXG4gICAgdmFyIG1vdXNlID0ge1xuICAgICAgeDogIDAuMCwgeTogIDAuMCxcbiAgICAgIG94OiAwLjAsIG95OiAwLjAsXG4gICAgICBkeDogMC4wLCBkeTogMC4wXG4gICAgfTtcblxuICAgIHZhciBldmVudE1hcCA9IFtcblxuICAgICAgY29udGV4dC5ldmVudFRhcmdldCB8fCBjb250ZXh0LmVsZW1lbnQsXG5cbiAgICAgICAgcG9pbnRlciwgJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgcG9pbnRlciwgJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnLFxuICAgICAgICBwb2ludGVyLCAnbW91c2V1cCcsICd0b3VjaGVuZCcsXG4gICAgICAgIHBvaW50ZXIsICdjbGljaycsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW91dCcsXG4gICAgICAgIHBvaW50ZXIsICdtb3VzZW92ZXInLFxuXG4gICAgICBkb2MsXG5cbiAgICAgICAga2V5cHJlc3MsICdrZXlkb3duJywgJ2tleXVwJyxcblxuICAgICAgd2luLFxuXG4gICAgICAgIGFjdGl2ZSwgJ2ZvY3VzJywgJ2JsdXInLFxuICAgICAgICByZXNpemUsICdyZXNpemUnXG4gICAgXTtcblxuICAgIHZhciBrZXlzID0ge307IGZvciAoIGtleSBpbiBrZXlNYXAgKSBrZXlzWyBrZXlNYXBbIGtleSBdIF0gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoIG1ldGhvZCApIHtcblxuICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBtZXRob2QgKSApXG5cbiAgICAgICAgbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXS5zcGxpY2UuY2FsbCggYXJndW1lbnRzLCAxICkgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kKCBvbiApIHtcblxuICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50TWFwLmxlbmd0aDsgaW5kZXgrKyApIHtcblxuICAgICAgICBub2RlID0gZXZlbnRNYXBbIGluZGV4IF07XG5cbiAgICAgICAgaWYgKCBpc1N0cmluZyggbm9kZSApIClcblxuICAgICAgICAgIHRhcmdldFsgKCBvbiA/ICdhZGQnIDogJ3JlbW92ZScgKSArICdFdmVudExpc3RlbmVyJyBdLmNhbGwoIHRhcmdldCwgbm9kZSwgaGFuZGxlciwgZmFsc2UgKTtcblxuICAgICAgICBlbHNlIGlmICggaXNGdW5jdGlvbiggbm9kZSApIClcblxuICAgICAgICAgIGhhbmRsZXIgPSBub2RlO1xuXG4gICAgICAgIGVsc2UgdGFyZ2V0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cbiAgICAgIGNBRiggcmVxdWVzdCApO1xuICAgICAgcmVxdWVzdCA9IHJBRiggdXBkYXRlICk7XG5cbiAgICAgIGlmICggIXNldHVwICkge1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuc2V0dXAgKTtcbiAgICAgICAgc2V0dXAgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnNldHVwICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggIXJlc2l6ZWQgKSB7XG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQucmVzaXplICk7XG4gICAgICAgIHJlc2l6ZWQgPSBpc0Z1bmN0aW9uKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucnVubmluZyAmJiAhY291bnRlciApIHtcblxuICAgICAgICBjb250ZXh0LmR0ID0gKCBjbG9jayA9ICtuZXcgRGF0ZSgpICkgLSBjb250ZXh0Lm5vdztcbiAgICAgICAgY29udGV4dC5taWxsaXMgKz0gY29udGV4dC5kdDtcbiAgICAgICAgY29udGV4dC5ub3cgPSBjbG9jaztcblxuICAgICAgICB0cmlnZ2VyKCBjb250ZXh0LnVwZGF0ZSApO1xuXG4gICAgICAgIC8vIFByZSBkcmF3XG5cbiAgICAgICAgaWYgKCBpczJEICkge1xuXG4gICAgICAgICAgaWYgKCBjb250ZXh0LnJldGluYSApIHtcblxuICAgICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmF1dG9jbGVhcikge1xuICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKCByYXRpbywgcmF0aW8gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIGNvbnRleHQuYXV0b2NsZWFyIClcblxuICAgICAgICAgICAgY29udGV4dC5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhd1xuXG4gICAgICAgIHRyaWdnZXIoIGNvbnRleHQuZHJhdyApO1xuXG4gICAgICAgIC8vIFBvc3QgZHJhd1xuXG4gICAgICAgIGlmICggaXMyRCAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cblxuICAgICAgY291bnRlciA9ICsrY291bnRlciAlIGNvbnRleHQuaW50ZXJ2YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuXG4gICAgICB0YXJnZXQgPSBpc0RpdiA/IGNvbnRleHQuc3R5bGUgOiBjb250ZXh0LmNhbnZhcztcbiAgICAgIHN1ZmZpeCA9IGlzRGl2ID8gJ3B4JyA6ICcnO1xuXG4gICAgICB3ID0gY29udGV4dC53aWR0aDtcbiAgICAgIGggPSBjb250ZXh0LmhlaWdodDtcblxuICAgICAgaWYgKCBjb250ZXh0LmZ1bGxzY3JlZW4gKSB7XG5cbiAgICAgICAgaCA9IGNvbnRleHQuaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICAgICAgICB3ID0gY29udGV4dC53aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGNvbnRleHQucmV0aW5hICYmIGlzMkQgJiYgcmF0aW8gKSB7XG5cbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICB0YXJnZXQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcblxuICAgICAgICB3ICo9IHJhdGlvO1xuICAgICAgICBoICo9IHJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHRhcmdldC5oZWlnaHQgIT09IGggKVxuXG4gICAgICAgIHRhcmdldC5oZWlnaHQgPSBoICsgc3VmZml4O1xuXG4gICAgICBpZiAoIHRhcmdldC53aWR0aCAhPT0gdyApXG5cbiAgICAgICAgdGFyZ2V0LndpZHRoID0gdyArIHN1ZmZpeDtcblxuICAgICAgaWYgKCBpczJEICYmICFjb250ZXh0LmF1dG9jbGVhciAmJiBjb250ZXh0LnJldGluYSApXG5cbiAgICAgICAgY29udGV4dC5zY2FsZSggcmF0aW8sIHJhdGlvICk7XG5cbiAgICAgIGlmICggc2V0dXAgKSB0cmlnZ2VyKCBjb250ZXh0LnJlc2l6ZSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsaWduKCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBib3VuZHMgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHRvdWNoLnggPSB0b3VjaC5wYWdlWCAtIGJvdW5kcy5sZWZ0IC0gKHdpbi5zY3JvbGxYIHx8IHdpbi5wYWdlWE9mZnNldCk7XG4gICAgICB0b3VjaC55ID0gdG91Y2gucGFnZVkgLSBib3VuZHMudG9wIC0gKHdpbi5zY3JvbGxZIHx8IHdpbi5wYWdlWU9mZnNldCk7XG5cbiAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdWdtZW50KCB0b3VjaCwgdGFyZ2V0ICkge1xuXG4gICAgICBhbGlnbiggdG91Y2gsIGNvbnRleHQuZWxlbWVudCApO1xuXG4gICAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cbiAgICAgIHRhcmdldC5veCA9IHRhcmdldC54IHx8IHRvdWNoLng7XG4gICAgICB0YXJnZXQub3kgPSB0YXJnZXQueSB8fCB0b3VjaC55O1xuXG4gICAgICB0YXJnZXQueCA9IHRvdWNoLng7XG4gICAgICB0YXJnZXQueSA9IHRvdWNoLnk7XG5cbiAgICAgIHRhcmdldC5keCA9IHRhcmdldC54IC0gdGFyZ2V0Lm94O1xuICAgICAgdGFyZ2V0LmR5ID0gdGFyZ2V0LnkgLSB0YXJnZXQub3k7XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VzcyggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvcHkgPSBjbG9uZSggZXZlbnQgKTtcbiAgICAgIGNvcHkub3JpZ2luYWxFdmVudCA9IGV2ZW50O1xuXG4gICAgICBpZiAoIGNvcHkudG91Y2hlcyApIHtcblxuICAgICAgICB0b3VjaGVzLmxlbmd0aCA9IGNvcHkudG91Y2hlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGNvcHkudG91Y2hlcy5sZW5ndGg7IGluZGV4KysgKVxuXG4gICAgICAgICAgdG91Y2hlc1sgaW5kZXggXSA9IGF1Z21lbnQoIGNvcHkudG91Y2hlc1sgaW5kZXggXSwgdG91Y2hlc1sgaW5kZXggXSApO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRvdWNoZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdG91Y2hlc1swXSA9IGF1Z21lbnQoIGNvcHksIG1vdXNlICk7XG4gICAgICB9XG5cbiAgICAgIGV4dGVuZCggbW91c2UsIHRvdWNoZXNbMF0sIHRydWUgKTtcblxuICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9pbnRlciggZXZlbnQgKSB7XG5cbiAgICAgIGV2ZW50ID0gcHJvY2VzcyggZXZlbnQgKTtcblxuICAgICAgbWluID0gKCBtYXggPSBldmVudE1hcC5pbmRleE9mKCB0eXBlID0gZXZlbnQudHlwZSApICkgLSAxO1xuXG4gICAgICBjb250ZXh0LmRyYWdnaW5nID1cblxuICAgICAgICAvZG93bnxzdGFydC8udGVzdCggdHlwZSApID8gdHJ1ZSA6XG5cbiAgICAgICAgL3VwfGVuZC8udGVzdCggdHlwZSApID8gZmFsc2UgOlxuXG4gICAgICAgIGNvbnRleHQuZHJhZ2dpbmc7XG5cbiAgICAgIHdoaWxlKCBtaW4gKVxuXG4gICAgICAgIGlzU3RyaW5nKCBldmVudE1hcFsgbWluIF0gKSA/XG5cbiAgICAgICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudE1hcFsgbWluLS0gXSBdLCBldmVudCApIDpcblxuICAgICAgICBpc1N0cmluZyggZXZlbnRNYXBbIG1heCBdICkgP1xuXG4gICAgICAgICAgdHJpZ2dlciggY29udGV4dFsgZXZlbnRNYXBbIG1heCsrIF0gXSwgZXZlbnQgKSA6XG5cbiAgICAgICAgbWluID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlwcmVzcyggZXZlbnQgKSB7XG5cbiAgICAgIGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICB2YWwgPSBldmVudC50eXBlID09ICdrZXl1cCc7XG4gICAgICBrZXlzWyBrZXkgXSA9IGtleXNbIGtleU5hbWUoIGtleSApIF0gPSAhdmFsO1xuXG4gICAgICB0cmlnZ2VyKCBjb250ZXh0WyBldmVudC50eXBlIF0sIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZlKCBldmVudCApIHtcblxuICAgICAgaWYgKCBjb250ZXh0LmF1dG9wYXVzZSApXG5cbiAgICAgICAgKCBldmVudC50eXBlID09ICdibHVyJyA/IHN0b3AgOiBzdGFydCApKCk7XG5cbiAgICAgIHRyaWdnZXIoIGNvbnRleHRbIGV2ZW50LnR5cGUgXSwgZXZlbnQgKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgQVBJXG5cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgICAgY29udGV4dC5ub3cgPSArbmV3IERhdGUoKTtcbiAgICAgIGNvbnRleHQucnVubmluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcblxuICAgICAgY29udGV4dC5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuXG4gICAgICAoIGNvbnRleHQucnVubmluZyA/IHN0b3AgOiBzdGFydCApKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG5cbiAgICAgIGlmICggaXMyRCApXG5cbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNvbnRleHQud2lkdGggKiByYXRpbywgY29udGV4dC5oZWlnaHQgKiByYXRpbyApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbiAgICAgIHBhcmVudCA9IGNvbnRleHQuZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaW5kZXggPSBpbnN0YW5jZXMuaW5kZXhPZiggY29udGV4dCApO1xuXG4gICAgICBpZiAoIHBhcmVudCApIHBhcmVudC5yZW1vdmVDaGlsZCggY29udGV4dC5lbGVtZW50ICk7XG4gICAgICBpZiAoIH5pbmRleCApIGluc3RhbmNlcy5zcGxpY2UoIGluZGV4LCAxICk7XG5cbiAgICAgIGJpbmQoIGZhbHNlICk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKCBjb250ZXh0LCB7XG5cbiAgICAgIHRvdWNoZXM6IHRvdWNoZXMsXG4gICAgICBtb3VzZTogbW91c2UsXG4gICAgICBrZXlzOiBrZXlzLFxuXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBydW5uaW5nOiBmYWxzZSxcbiAgICAgIG1pbGxpczogMCxcbiAgICAgIG5vdzogTmFOLFxuICAgICAgZHQ6IE5hTixcblxuICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgc3RvcDogc3RvcFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2VzLnB1c2goIGNvbnRleHQgKTtcblxuICAgIHJldHVybiAoIGNvbnRleHQuYXV0b3N0YXJ0ICYmIHN0YXJ0KCksIGJpbmQoIHRydWUgKSwgcmVzaXplKCksIHVwZGF0ZSgpLCBjb250ZXh0ICk7XG4gIH1cblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBHbG9iYWwgQVBJXG5cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAqL1xuXG4gIHZhciBlbGVtZW50LCBjb250ZXh0LCBTa2V0Y2ggPSB7XG5cbiAgICBDQU5WQVM6IENBTlZBUyxcbiAgICBXRUJfR0w6IFdFQkdMLFxuICAgIFdFQkdMOiBXRUJHTCxcbiAgICBET006IERPTSxcblxuICAgIGluc3RhbmNlczogaW5zdGFuY2VzLFxuXG4gICAgaW5zdGFsbDogZnVuY3Rpb24oIGNvbnRleHQgKSB7XG5cbiAgICAgIGlmICggIWNvbnRleHRbIEhBU19TS0VUQ0ggXSApIHtcblxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBNQVRIX1BST1BTLmxlbmd0aDsgaSsrIClcblxuICAgICAgICAgIGNvbnRleHRbIE1BVEhfUFJPUFNbaV0gXSA9IE1bIE1BVEhfUFJPUFNbaV0gXTtcblxuICAgICAgICBleHRlbmQoIGNvbnRleHQsIHtcblxuICAgICAgICAgIFRXT19QSTogTS5QSSAqIDIsXG4gICAgICAgICAgSEFMRl9QSTogTS5QSSAvIDIsXG4gICAgICAgICAgUVVBUlRFUl9QSTogTS5QSSAvIDQsXG5cbiAgICAgICAgICByYW5kb206IGZ1bmN0aW9uKCBtaW4sIG1heCApIHtcblxuICAgICAgICAgICAgaWYgKCBpc0FycmF5KCBtaW4gKSApXG5cbiAgICAgICAgICAgICAgcmV0dXJuIG1pblsgfn4oIE0ucmFuZG9tKCkgKiBtaW4ubGVuZ3RoICkgXTtcblxuICAgICAgICAgICAgaWYgKCAhaXNOdW1iZXIoIG1heCApIClcblxuICAgICAgICAgICAgICBtYXggPSBtaW4gfHwgMSwgbWluID0gMDtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIE0ucmFuZG9tKCkgKiAoIG1heCAtIG1pbiApO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBsZXJwOiBmdW5jdGlvbiggbWluLCBtYXgsIGFtb3VudCApIHtcblxuICAgICAgICAgICAgcmV0dXJuIG1pbiArIGFtb3VudCAqICggbWF4IC0gbWluICk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1hcDogZnVuY3Rpb24oIG51bSwgbWluQSwgbWF4QSwgbWluQiwgbWF4QiApIHtcblxuICAgICAgICAgICAgcmV0dXJuICggbnVtIC0gbWluQSApIC8gKCBtYXhBIC0gbWluQSApICogKCBtYXhCIC0gbWluQiApICsgbWluQjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRleHRbIEhBU19TS0VUQ0ggXSA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cbiAgICAgIG9wdGlvbnMgPSBleHRlbmQoIG9wdGlvbnMgfHwge30sIGRlZmF1bHRzICk7XG5cbiAgICAgIGlmICggb3B0aW9ucy5nbG9iYWxzICkgU2tldGNoLmluc3RhbGwoIHNlbGYgKTtcblxuICAgICAgZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2MuY3JlYXRlRWxlbWVudCggb3B0aW9ucy50eXBlID09PSBET00gPyAnZGl2JyA6ICdjYW52YXMnICk7XG5cbiAgICAgIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHN3aXRjaCggb3B0aW9ucy50eXBlICkge1xuXG4gICAgICAgICAgY2FzZSBDQU5WQVM6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICcyZCcsIG9wdGlvbnMgKTtcblxuICAgICAgICAgIGNhc2UgV0VCR0w6XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldENvbnRleHQoICd3ZWJnbCcsIG9wdGlvbnMgKSB8fCBlbGVtZW50LmdldENvbnRleHQoICdleHBlcmltZW50YWwtd2ViZ2wnLCBvcHRpb25zICk7XG5cbiAgICAgICAgICBjYXNlIERPTTpcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2FudmFzID0gZWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICB9KSgpO1xuXG4gICAgICAoIG9wdGlvbnMuY29udGFpbmVyIHx8IGRvYy5ib2R5ICkuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuICAgICAgcmV0dXJuIFNrZXRjaC5hdWdtZW50KCBjb250ZXh0LCBvcHRpb25zICk7XG4gICAgfSxcblxuICAgIGF1Z21lbnQ6IGZ1bmN0aW9uKCBjb250ZXh0LCBvcHRpb25zICkge1xuXG4gICAgICBvcHRpb25zID0gZXh0ZW5kKCBvcHRpb25zIHx8IHt9LCBkZWZhdWx0cyApO1xuXG4gICAgICBvcHRpb25zLmVsZW1lbnQgPSBjb250ZXh0LmNhbnZhcyB8fCBjb250ZXh0O1xuICAgICAgb3B0aW9ucy5lbGVtZW50LmNsYXNzTmFtZSArPSAnIHNrZXRjaCc7XG5cbiAgICAgIGV4dGVuZCggY29udGV4dCwgb3B0aW9ucywgdHJ1ZSApO1xuXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IoIGNvbnRleHQgKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgU2hpbXNcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgdmFyIHZlbmRvcnMgPSBbICdtcycsICdtb3onLCAnd2Via2l0JywgJ28nIF07XG4gIHZhciBzY29wZSA9IHNlbGY7XG4gIHZhciB0aGVuID0gMDtcblxuICB2YXIgYSA9ICdBbmltYXRpb25GcmFtZSc7XG4gIHZhciBiID0gJ3JlcXVlc3QnICsgYTtcbiAgdmFyIGMgPSAnY2FuY2VsJyArIGE7XG5cbiAgdmFyIHJBRiA9IHNjb3BlWyBiIF07XG4gIHZhciBjQUYgPSBzY29wZVsgYyBdO1xuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyQUY7IGkrKyApIHtcblxuICAgIHJBRiA9IHNjb3BlWyB2ZW5kb3JzWyBpIF0gKyAnUmVxdWVzdCcgKyBhIF07XG4gICAgY0FGID0gc2NvcGVbIHZlbmRvcnNbIGkgXSArICdDYW5jZWwnICsgYSBdO1xuICB9XG5cbiAgc2NvcGVbIGIgXSA9IHJBRiA9IHJBRiB8fCBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cbiAgICB2YXIgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIGR0ID0gTS5tYXgoIDAsIDE2IC0gKCBub3cgLSB0aGVuICkgKTtcbiAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgIGNhbGxiYWNrKCBub3cgKyBkdCApO1xuICAgIH0sIGR0ICk7XG5cbiAgICB0aGVuID0gbm93ICsgZHQ7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIHNjb3BlWyBjIF0gPSBjQUYgPSBjQUYgfHwgZnVuY3Rpb24oIGlkICkge1xuICAgIGNsZWFyVGltZW91dCggaWQgKTtcbiAgfTtcblxuICAvKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBPdXRwdXRcblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICovXG5cbiAgcmV0dXJuIFNrZXRjaDtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3AtY29udGVudC90aGVtZXMvdGhlLWZhc3Rlc3Qvc3JjL2pzL2xpYi9za2V0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTG9jYXRpb25WaWV3ID0gKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNjb3BlID0ge307XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIHNjb3BlO1xufSkoKTtcblxuTG9jYXRpb25WaWV3LmFjdGl2YXRlKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93cC1jb250ZW50L3RoZW1lcy90aGUtZmFzdGVzdC9zcmMvanMvcGFnZXMvbG9jYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9