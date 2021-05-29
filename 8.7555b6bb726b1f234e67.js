(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/backtop.md?vue&type=template&id=623b4193

var backtopvue_type_template_id_623b4193_hoisted_1 = {
  class: "content element-doc"
};

var backtopvue_type_template_id_623b4193_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "backtop-hui-dao-ding-bu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#backtop-hui-dao-ding-bu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Backtop 回到顶部")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "返回页面顶部的操作按钮", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "滑动页面即可看到右下方的按钮。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  滑动页面即可看到右下方的按钮。\n  <ru-backtop target=\".page-component__scroll .ru-scrollbar__wrap\"></ru-backtop>\n</template>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-xian-shi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-xian-shi-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义显示内容")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n    滑动页面即可看到右下方的按钮。\n    <ru-backtop target=\".page-component__scroll .ru-scrollbar__wrap\" :bottom=\"100\">\n        <div\n                style=\"{\n        height: 100%;\n        width: 100%;\n        background-color: #a2a2a2;\n        box-shadow: 0 0 6px rgba(0,0,0, .12);\n        text-align: center;\n        line-height: 40px;\n        color: white;\n      }\"\n        >\n            UP\n        </div>\n    </ru-backtop>\n</template>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>触发滚动的对象</td><td>string</td><td></td><td></td></tr><tr><td>visibility-height</td><td>滚动高度达到此参数值才出现</td><td>number</td><td></td><td>200</td></tr><tr><td>right</td><td>控制其显示位置, 距离页面右边距</td><td>number</td><td></td><td>40</td></tr><tr><td>bottom</td><td>控制其显示位置, 距离页面底部距离</td><td>number</td><td></td><td>40</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮触发的事件</td><td>点击事件</td></tr></tbody></table>", 4);

function backtopvue_type_template_id_623b4193_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", backtopvue_type_template_id_623b4193_hoisted_1, [backtopvue_type_template_id_623b4193_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/backtop.md?vue&type=template&id=623b4193

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/backtop.md?vue&type=script&lang=ts


/* harmony default export */ var backtopvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 滑动页面即可看到右下方的按钮。 ");

      function render(_ctx, _cache) {
        var _component_ru_backtop = _resolveComponent("ru-backtop");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode(_component_ru_backtop, {
          target: ".page-component__scroll .ru-scrollbar__wrap"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 滑动页面即可看到右下方的按钮。 ");

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        style: {
          "{\n        height": "100%",
          "width": "100%",
          "background-color": "#a2a2a2",
          "box-shadow": "0 0 6px rgba(0,0,0, .12)",
          "text-align": "center",
          "line-height": "40px",
          "color": "white"
        }
      }, " UP ", -1);

      function render(_ctx, _cache) {
        var _component_ru_backtop = _resolveComponent("ru-backtop");

        return _openBlock(), _createBlock("div", null, [_hoisted_1, _createVNode(_component_ru_backtop, {
          target: ".page-component__scroll .ru-scrollbar__wrap",
          bottom: 100
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/backtop.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/backtop.md



backtopvue_type_script_lang_ts.render = backtopvue_type_template_id_623b4193_render

/* harmony default export */ var backtop = __webpack_exports__["default"] = (backtopvue_type_script_lang_ts);

/***/ })

}]);