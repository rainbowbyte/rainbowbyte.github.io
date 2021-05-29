(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=template&id=7eb0fada&scoped=true


var _withId = /*#__PURE__*/Object(vue_esm_browser["gb" /* withScopeId */])("data-v-7eb0fada");

Object(vue_esm_browser["I" /* pushScopeId */])("data-v-7eb0fada");

var _hoisted_1 = {
  class: "page-container page-component"
};
var _hoisted_2 = {
  class: "page-component__content"
};
var _hoisted_3 = {
  class: "content-wrap"
};

Object(vue_esm_browser["G" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SideNav = Object(vue_esm_browser["O" /* resolveComponent */])("SideNav");

  var _component_ru_scrollbar = Object(vue_esm_browser["O" /* resolveComponent */])("ru-scrollbar");

  var _component_router_view = Object(vue_esm_browser["O" /* resolveComponent */])("router-view");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_ru_scrollbar, {
    ref: "componentScrollBar",
    class: "page-component__scroll"
  }, {
    default: _withId(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_1, [Object(vue_esm_browser["o" /* createVNode */])(_component_ru_scrollbar, {
        class: "page-component__nav"
      }, {
        default: _withId(function () {
          return [Object(vue_esm_browser["o" /* createVNode */])(_component_SideNav, {
            navs: $data.navs
          }, null, 8, ["navs"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_2, [Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_3, [Object(vue_esm_browser["o" /* createVNode */])(_component_router_view, {
        class: "content"
      })])])])];
    }),
    _: 1
  }, 512);
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=template&id=7eb0fada&scoped=true

// CONCATENATED MODULE: ./node_modules/throttle-debounce/esm/index.js
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}


//# sourceMappingURL=index.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/components/SideNav.vue?vue&type=template&id=10a99dbe&scoped=true


var SideNavvue_type_template_id_10a99dbe_scoped_true_withId = /*#__PURE__*/Object(vue_esm_browser["gb" /* withScopeId */])("data-v-10a99dbe");

Object(vue_esm_browser["I" /* pushScopeId */])("data-v-10a99dbe");

var SideNavvue_type_template_id_10a99dbe_scoped_true_hoisted_1 = {
  class: "side-nav"
};
var SideNavvue_type_template_id_10a99dbe_scoped_true_hoisted_2 = {
  class: "nav"
};
var SideNavvue_type_template_id_10a99dbe_scoped_true_hoisted_3 = {
  key: 0,
  class: "heading"
};
var _hoisted_4 = {
  class: "title"
};
var _hoisted_5 = {
  class: "subtitle"
};

Object(vue_esm_browser["G" /* popScopeId */])();

var SideNavvue_type_template_id_10a99dbe_scoped_true_render = /*#__PURE__*/SideNavvue_type_template_id_10a99dbe_scoped_true_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = Object(vue_esm_browser["O" /* resolveComponent */])("router-link");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("div", SideNavvue_type_template_id_10a99dbe_scoped_true_hoisted_1, [Object(vue_esm_browser["o" /* createVNode */])("ul", SideNavvue_type_template_id_10a99dbe_scoped_true_hoisted_2, [(Object(vue_esm_browser["F" /* openBlock */])(true), Object(vue_esm_browser["j" /* createBlock */])(vue_esm_browser["b" /* Fragment */], null, Object(vue_esm_browser["M" /* renderList */])(_ctx.navs, function (item) {
    return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(vue_esm_browser["b" /* Fragment */], null, [item.type === 'heading' ? (Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("p", SideNavvue_type_template_id_10a99dbe_scoped_true_hoisted_3, Object(vue_esm_browser["S" /* toDisplayString */])(item.title), 1)) : item.type === 'link' ? (Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])(_component_router_link, {
      key: 1,
      to: item.url,
      "active-class": "active"
    }, {
      default: SideNavvue_type_template_id_10a99dbe_scoped_true_withId(function () {
        return [Object(vue_esm_browser["o" /* createVNode */])("li", {
          class: item.type === 'link' ? 'nav-item' : ''
        }, [Object(vue_esm_browser["o" /* createVNode */])("p", null, [Object(vue_esm_browser["o" /* createVNode */])("span", _hoisted_4, Object(vue_esm_browser["S" /* toDisplayString */])(item.title), 1), Object(vue_esm_browser["o" /* createVNode */])("span", _hoisted_5, Object(vue_esm_browser["S" /* toDisplayString */])(item.subtitle), 1)])], 2)];
      }),
      _: 2
    }, 1032, ["to"])) : Object(vue_esm_browser["k" /* createCommentVNode */])("", true)], 64);
  }), 256))])]);
});
// CONCATENATED MODULE: ./website/components/SideNav.vue?vue&type=template&id=10a99dbe&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/components/SideNav.vue?vue&type=script&lang=ts

/* harmony default export */ var SideNavvue_type_script_lang_ts = (Object(vue_esm_browser["p" /* defineComponent */])({
  name: "SideNav",
  props: {
    navs: {
      type: Array
    }
  }
}));
// CONCATENATED MODULE: ./website/components/SideNav.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(15);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./node_modules/vue-loader/dist??ref--11-0!./website/components/SideNav.vue?vue&type=style&index=0&id=10a99dbe&lang=scss&scoped=true
var SideNavvue_type_style_index_0_id_10a99dbe_lang_scss_scoped_true = __webpack_require__(391);
var SideNavvue_type_style_index_0_id_10a99dbe_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(SideNavvue_type_style_index_0_id_10a99dbe_lang_scss_scoped_true);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./node_modules/vue-loader/dist??ref--11-0!./website/components/SideNav.vue?vue&type=style&index=0&id=10a99dbe&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(SideNavvue_type_style_index_0_id_10a99dbe_lang_scss_scoped_true_default.a, options);



/* harmony default export */ var components_SideNavvue_type_style_index_0_id_10a99dbe_lang_scss_scoped_true = (SideNavvue_type_style_index_0_id_10a99dbe_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./website/components/SideNav.vue?vue&type=style&index=0&id=10a99dbe&lang=scss&scoped=true

// CONCATENATED MODULE: ./website/components/SideNav.vue





SideNavvue_type_script_lang_ts.render = SideNavvue_type_template_id_10a99dbe_scoped_true_render
SideNavvue_type_script_lang_ts.__scopeId = "data-v-10a99dbe"

/* harmony default export */ var SideNav = (SideNavvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=script&lang=js
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import bus from '../bus'
// import navsData from '../nav.config.json'


/* harmony default export */ var componentvue_type_script_lang_js = ({
  data: function data() {
    return {
      navs: [{
        title: '快速入门',
        subtitle: '',
        type: 'heading',
        url: ''
      }, {
        title: '安装',
        subtitle: 'Installation',
        type: 'link',
        url: '/components/installation'
      }, {
        title: '字体',
        subtitle: 'Typography',
        type: 'link',
        url: '/components/typography'
      }, {
        title: '颜色',
        subtitle: 'Color',
        type: 'link',
        url: '/components/color'
      }, {
        title: '国际化',
        subtitle: 'I18N',
        type: 'link',
        url: '/components/i18n'
      }, {
        title: '内置动画',
        subtitle: 'Transition',
        type: 'link',
        url: '/components/transition'
      }, {
        title: '常用组件',
        subtitle: '',
        type: 'heading',
        url: ''
      }, {
        title: '图标',
        subtitle: 'Icon',
        type: 'link',
        url: '/components/icon'
      }, {
        title: '固钉',
        subtitle: 'Affix',
        type: 'link',
        url: '/components/affix'
      }, {
        title: '提示框',
        subtitle: 'Alert',
        type: 'link',
        url: '/components/alert'
      }, {
        title: '头像',
        subtitle: 'Avatar',
        type: 'link',
        url: '/components/avatar'
      }, {
        title: '标记',
        subtitle: 'Badge',
        type: 'link',
        url: '/components/badge'
      }, {
        title: '回到顶部',
        subtitle: 'Backtop',
        type: 'link',
        url: '/components/backtop'
      }, {
        title: '面包屑导航',
        subtitle: 'breadcrumb',
        type: 'link',
        url: '/components/breadcrumb'
      }, {
        title: '按钮',
        subtitle: 'Button',
        type: 'link',
        url: '/components/button'
      }, {
        title: '日历',
        subtitle: 'Calendar',
        type: 'link',
        url: '/components/calendar'
      }, {
        title: '走马灯',
        subtitle: 'Carousel',
        type: 'link',
        url: '/components/carousel'
      }, {
        title: '折叠面板',
        subtitle: 'Collapse',
        type: 'link',
        url: '/components/collapse'
      }, {
        title: '对话框',
        subtitle: 'Dialog',
        type: 'link',
        url: '/components/dialog'
      }, {
        title: '抽屉',
        subtitle: 'Drawer',
        type: 'link',
        url: '/components/drawer'
      }, //----------
      {
        title: '图片',
        subtitle: 'Image',
        type: 'link',
        url: '/components/image'
      }, {
        title: '文字链接',
        subtitle: 'Link',
        type: 'link',
        url: '/components/link'
      }, {
        title: '加载',
        subtitle: 'Loading',
        type: 'link',
        url: '/components/loading'
      }, {
        title: '菜单',
        subtitle: 'Menu',
        type: 'link',
        url: '/components/menu'
      }, {
        title: '消息提示',
        subtitle: 'Message',
        type: 'link',
        url: '/components/message'
      }, {
        title: '弹框',
        subtitle: 'MessageBox',
        type: 'link',
        url: '/components/message-box'
      }, {
        title: '通知',
        subtitle: 'Notification',
        type: 'link',
        url: '/components/notification'
      }, {
        title: '气泡确认框',
        subtitle: 'Popconfirm',
        type: 'link',
        url: '/components/popconfirm'
      }, {
        title: '弹出框',
        subtitle: 'Popover',
        type: 'link',
        url: '/components/popover'
      }, {
        title: '进度条',
        subtitle: 'Progress',
        type: 'link',
        url: '/components/progress'
      }, {
        title: '分页',
        subtitle: 'Pagination',
        type: 'link',
        url: '/components/pagination'
      }, //-----------
      {
        title: '评分',
        subtitle: 'Rate',
        type: 'link',
        url: '/components/rate'
      }, {
        title: '步骤条',
        subtitle: 'Steps',
        type: 'link',
        url: '/components/steps'
      }, {
        title: '表格',
        subtitle: 'Table',
        type: 'link',
        url: '/components/table'
      }, {
        title: '标签页',
        subtitle: 'Tabs',
        type: 'link',
        url: '/components/tabs'
      }, {
        title: '标签',
        subtitle: 'Tag',
        type: 'link',
        url: '/components/tag'
      }, {
        title: '时间线',
        subtitle: 'Timeline',
        type: 'link',
        url: '/components/timeline'
      }, {
        title: '文字提示',
        subtitle: 'Tooltip',
        type: 'link',
        url: '/components/tooltip'
      }, {
        title: '穿梭框',
        subtitle: 'Transfer',
        type: 'link',
        url: '/components/transfer'
      }, {
        title: '树形控件',
        subtitle: 'Tree',
        type: 'link',
        url: '/components/tree'
      }, {
        title: '上传',
        subtitle: 'Upload',
        type: 'link',
        url: '/components/upload'
      }, //-----------------
      {
        title: '布局组件',
        subtitle: '',
        type: 'heading',
        url: ''
      }, {
        title: '布局',
        subtitle: 'Layout',
        type: 'link',
        url: '/components/layout'
      }, {
        title: '无限滚动',
        subtitle: 'InfiniteScroll',
        type: 'link',
        url: '/components/infiniteScroll'
      }, {
        title: '边框',
        subtitle: 'Border',
        type: 'link',
        url: '/components/border'
      }, {
        title: '卡片',
        subtitle: 'Card',
        type: 'link',
        url: '/components/card'
      }, {
        title: '布局容器',
        subtitle: 'Container',
        type: 'link',
        url: '/components/container'
      }, {
        title: '描述列表',
        subtitle: 'Descriptions',
        type: 'link',
        url: '/components/descriptions'
      }, {
        title: '分割线',
        subtitle: 'Divider',
        type: 'link',
        url: '/components/divider'
      }, {
        title: '空状态',
        subtitle: 'Empty',
        type: 'link',
        url: '/components/empty'
      }, {
        title: '页头',
        subtitle: 'PageHeader',
        type: 'link',
        url: '/components/page-header'
      }, {
        title: '结果',
        subtitle: 'Result',
        type: 'link',
        url: '/components/result'
      }, {
        title: '滚动条',
        subtitle: 'Scrollbar',
        type: 'link',
        url: '/components/scrollbar'
      }, {
        title: '骨架屏',
        subtitle: 'Skeleton',
        type: 'link',
        url: '/components/skeleton'
      }, {
        title: '间距',
        subtitle: 'Space',
        type: 'link',
        url: '/components/space'
      }, //-----------------
      {
        title: '表单组件',
        subtitle: '',
        type: 'heading',
        url: ''
      }, {
        title: '表单',
        subtitle: 'Form',
        type: 'link',
        url: '/components/form'
      }, {
        title: '输入框',
        subtitle: 'Input',
        type: 'link',
        url: '/components/input'
      }, {
        title: '计数器',
        subtitle: 'InputNumber',
        type: 'link',
        url: '/components/input-number'
      }, {
        title: '级联选择器',
        subtitle: 'Cascader',
        type: 'link',
        url: '/components/cascader'
      }, {
        title: '多选框',
        subtitle: 'Checkbox',
        type: 'link',
        url: '/components/checkbox'
      }, {
        title: '日期选择器',
        subtitle: 'DatePicker',
        type: 'link',
        url: '/components/date-picker'
      }, {
        title: '日期时间选择器',
        subtitle: 'DateTimePicker',
        type: 'link',
        url: '/components/datetime-picker'
      }, {
        title: '下拉菜单',
        subtitle: 'Dropdown',
        type: 'link',
        url: '/components/dropdown'
      }, {
        title: '单选框',
        subtitle: 'Radio',
        type: 'link',
        url: '/components/radio'
      }, {
        title: '选择器',
        subtitle: 'Select',
        type: 'link',
        url: '/components/select'
      }, {
        title: '颜色选择器',
        subtitle: 'ColorPicker',
        type: 'link',
        url: '/components/color-picker'
      }, {
        title: '滑块',
        subtitle: 'Slider',
        type: 'link',
        url: '/components/slider'
      }, {
        title: '开关',
        subtitle: 'Switch',
        type: 'link',
        url: '/components/switch'
      }, {
        title: '时间选择器',
        subtitle: 'TimePicker',
        type: 'link',
        url: '/components/time-picker'
      }, {
        title: '时间选择器',
        subtitle: 'TimeSelect',
        type: 'link',
        url: '/components/time-select'
      }, //-----------------
      {
        title: '扩展组件',
        subtitle: '',
        type: 'heading',
        url: ''
      }, {
        title: '二维码',
        subtitle: 'QRCode',
        type: 'link',
        url: '/components/qrcode'
      }],
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null,
      componentScrollBoxElement: null
    };
  },
  components: {
    SideNav: SideNav
  },
  watch: {
    '$route.path': function $routePath() {
      var _this = this;

      // 触发伪滚动条更新
      this.componentScrollBox.scrollTop = 0;
      this.$nextTick(function () {
        _this.componentScrollBar.update();
      });
    }
  },
  mounted: function mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    this.componentScrollBox = this.componentScrollBar.$el.querySelector('.ru-scrollbar__wrap');
    this.throttledScrollHandler = throttle(300, this.handleScroll);
    this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
    document.body.classList.add('is-component');
    this.addContentObserver();
  },
  unmounted: function unmounted() {
    document.body.classList.remove('is-component');
  },
  beforeUnmount: function beforeUnmount() {
    this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
    this.observer.disconnect();
  },
  methods: {
    addContentObserver: function addContentObserver() {
      var _this2 = this;

      this.observer = new MutationObserver(function (mutationsList, observer) {
        for (var _iterator = _createForOfIteratorHelperLoose(mutationsList), _step; !(_step = _iterator()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            _this2.renderAnchorHref();

            _this2.goAnchor();
          }
        }
      });
      this.observer.observe(document.querySelector('.content-wrap'), {
        childList: true
      });
    },
    renderAnchorHref: function renderAnchorHref() {
      if (/changelog/g.test(location.href)) return;
      var anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
      var basePath = location.href.split('#').splice(0, 2).join('#');
      [].slice.call(anchors).forEach(function (a) {
        var href = a.getAttribute('href');

        if (href.indexOf('#') === 0) {
          a.href = basePath + href;
        }
      });
    },
    goAnchor: function goAnchor() {
      var _this3 = this;

      if (location.href.match(/#/g).length > 1) {
        var anchor = location.href.match(/#[^#]+$/g);
        if (!anchor) return;
        var elm = document.querySelector(anchor[0]);
        if (!elm) return;
        setTimeout(function () {
          _this3.componentScrollBox.scrollTop = elm.offsetTop;
        }, 50);
      }
    },
    handleScroll: function handleScroll() {
      var scrollTop = this.componentScrollBox.scrollTop;

      if (this.showHeader !== this.scrollTop > scrollTop) {
        this.showHeader = this.scrollTop > scrollTop;
      }

      if (scrollTop === 0) {
        this.showHeader = true;
      }

      if (!this.navFaded) {// bus.$emit('fade-nav')
      }

      this.scrollTop = scrollTop;
    }
  }
});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=style&index=0&id=7eb0fada&lang=scss&scoped=true
var componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true = __webpack_require__(392);
var componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./node_modules/vue-loader/dist??ref--11-0!./website/pages/component.vue?vue&type=style&index=0&id=7eb0fada&lang=scss&scoped=true

            

var componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_options = {};

componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_options.insert = "head";
componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_options.singleton = false;

var componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_update = injectStylesIntoStyleTag_default()(componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_default.a, componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_options);



/* harmony default export */ var pages_componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true = (componentvue_type_style_index_0_id_7eb0fada_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./website/pages/component.vue?vue&type=style&index=0&id=7eb0fada&lang=scss&scoped=true

// CONCATENATED MODULE: ./website/pages/component.vue





componentvue_type_script_lang_js.render = render
componentvue_type_script_lang_js.__scopeId = "data-v-7eb0fada"

/* harmony default export */ var component = __webpack_exports__["default"] = (componentvue_type_script_lang_js);

/***/ })

}]);