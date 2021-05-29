(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/popconfirm.md?vue&type=template&id=1d92727f

var popconfirmvue_type_template_id_1d92727f_hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "popconfirm-qi-pao-que-ren-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#popconfirm-qi-pao-que-ren-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Popconfirm 气泡确认框")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "点击元素，弹出气泡确认框。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("在 Popconfirm 中，只有 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性可用，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性不会被展示。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<ru-popconfirm\n  title=\"这是一段内容确定删除吗？\"\n>\n<template #reference>\n  <ru-button>删除</ru-button>\n  </template>\n</ru-popconfirm>\n</template>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可以在 Popconfirm 中自定义内容。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n<ru-popconfirm\n  confirmButtonText='好的'\n  cancelButtonText='不用了'\n  icon=\"information\"\n  iconColor=\"red\"\n  title=\"这是一段内容确定删除吗？\"\n>\n<template #reference>\n  <ru-button>删除</ru-button>\n  </template>\n</ru-popconfirm>\n</template>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>—</td><td>—</td></tr><tr><td>confirmButtonText</td><td>确认按钮文字</td><td>String</td><td>—</td><td>—</td></tr><tr><td>cancelButtonText</td><td>取消按钮文字</td><td>String</td><td>—</td><td>—</td></tr><tr><td>confirmButtonType</td><td>确认按钮类型</td><td>String</td><td>—</td><td>Primary</td></tr><tr><td>cancelButtonType</td><td>取消按钮类型</td><td>String</td><td>—</td><td>Text</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>-</td></tr><tr><td>icon-type</td><td>图标类型</td><td>string</td><td>仅支持多样式图标</td><td>line / fill</td></tr><tr><td>spin</td><td>旋转图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>iconColor</td><td>Icon 颜色</td><td>String</td><td>—</td><td>#f90</td></tr><tr><td>hideIcon</td><td>是否隐藏 Icon</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>reference</td><td>触发 Popconfirm 显示的 HTML 元素</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>confirm</td><td>点击确认按钮时触发</td><td>—</td></tr><tr><td>cancel</td><td>点击取消按钮时触发</td><td>—</td></tr></tbody></table>", 6);

function popconfirmvue_type_template_id_1d92727f_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", popconfirmvue_type_template_id_1d92727f_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, _hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/popconfirm.md?vue&type=template&id=1d92727f

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/popconfirm.md?vue&type=script&lang=ts


/* harmony default export */ var popconfirmvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_popconfirm = _resolveComponent("ru-popconfirm");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_popconfirm, {
          title: "这是一段内容确定删除吗？"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_ru_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("删除");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_popconfirm = _resolveComponent("ru-popconfirm");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_popconfirm, {
          confirmButtonText: "好的",
          cancelButtonText: "不用了",
          icon: "information",
          iconColor: "red",
          title: "这是一段内容确定删除吗？"
        }, {
          reference: _withCtx(function () {
            return [_createVNode(_component_ru_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
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
// CONCATENATED MODULE: ./website/docs/popconfirm.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/popconfirm.md



popconfirmvue_type_script_lang_ts.render = popconfirmvue_type_template_id_1d92727f_render

/* harmony default export */ var popconfirm = __webpack_exports__["default"] = (popconfirmvue_type_script_lang_ts);

/***/ })

}]);