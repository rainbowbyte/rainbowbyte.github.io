(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/progress.md?vue&type=template&id=64160eaa

var progressvue_type_template_id_64160eaa_hoisted_1 = {
  class: "content element-doc"
};

var progressvue_type_template_id_64160eaa_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "progress-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#progress-jin-du-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Progress 进度条")], -1);

var progressvue_type_template_id_64160eaa_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用于展示操作进度，告知用户当前状态和预期。", -1);

var progressvue_type_template_id_64160eaa_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "xian-xing-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xian-xing-jin-du-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 线形进度条")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Progress 组件设置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "percentage"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性即可，表示进度条对应的百分比，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("strong", null, "必填"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，必须在 0-100。通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "format"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来指定进度条文字内容。")])], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-progress :percentage=\"50\"></ru-progress>\n<ru-progress :percentage=\"100\" :format=\"format\"></ru-progress>\n<ru-progress :percentage=\"100\" status=\"success\"></ru-progress>\n<ru-progress :percentage=\"100\" status=\"warning\"></ru-progress>\n<ru-progress :percentage=\"50\" status=\"exception\"></ru-progress>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage === 100 ? '满' : `${percentage}%`;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bai-fen-bi-nei-xian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bai-fen-bi-nei-xian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 百分比内显")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "百分比不占用额外控件，适用于文件上传等场景。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Progress 组件可通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "stroke-width"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性更改进度条的高度，并可通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "text-inside"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来将进度条描述置于进度条内部。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-progress :text-inside=\"true\" :stroke-width=\"26\" :percentage=\"70\"></ru-progress>\n<ru-progress :text-inside=\"true\" :stroke-width=\"24\" :percentage=\"100\" status=\"success\"></ru-progress>\n<ru-progress :text-inside=\"true\" :stroke-width=\"22\" :percentage=\"80\" status=\"warning\"></ru-progress>\n<ru-progress :text-inside=\"true\" :stroke-width=\"20\" :percentage=\"50\" status=\"exception\"></ru-progress>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-yan-se"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-yan-se"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义颜色")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可以通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 设置进度条的颜色，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "color"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 可以接受颜色字符串，函数和数组。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-progress :percentage=\"percentage\" :color=\"customColor\"></ru-progress>\n\n<ru-progress :percentage=\"percentage\" :color=\"customColorMethod\"></ru-progress>\n\n<ru-progress :percentage=\"percentage\" :color=\"customColors\"></ru-progress>\n<div>\n  <ru-button-group>\n    <ru-button icon=\"subtract\" @click=\"decrease\"></ru-button>\n    <ru-button icon=\"add\" @click=\"increase\"></ru-button>\n  </ru-button-group>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 20,\n        customColor: '#409eff',\n        customColors: [\n          {color: '#f56c6c', percentage: 20},\n          {color: '#e6a23c', percentage: 40},\n          {color: '#5cb87a', percentage: 60},\n          {color: '#1989fa', percentage: 80},\n          {color: '#6f7ad3', percentage: 100}\n        ]\n      };\n    },\n    methods: {\n      customColorMethod(percentage) {\n        if (percentage < 30) {\n          return '#909399';\n        } else if (percentage < 70) {\n          return '#e6a23c';\n        } else {\n          return '#67c23a';\n        }\n      },\n      increase() {\n        this.percentage += 10;\n        if (this.percentage > 100) {\n          this.percentage = 100;\n        }\n      },\n      decrease() {\n        this.percentage -= 10;\n        if (this.percentage < 0) {\n          this.percentage = 0;\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "huan-xing-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#huan-xing-jin-du-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 环形进度条")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Progress 组件可通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来指定使用环形进度条，在环形进度条中，还可以通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "width"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来设置其大小。")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-progress type=\"circle\" :percentage=\"0\"></ru-progress>\n<ru-progress type=\"circle\" :percentage=\"25\"></ru-progress>\n<ru-progress type=\"circle\" :percentage=\"100\" status=\"success\"></ru-progress>\n<ru-progress type=\"circle\" :percentage=\"70\" status=\"warning\"></ru-progress>\n<ru-progress type=\"circle\" :percentage=\"50\" status=\"exception\"></ru-progress>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "yi-biao-pan-xing-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#yi-biao-pan-xing-jin-du-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 仪表盘形进度条")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "type"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来指定使用仪表盘形进度条。")])], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<ru-progress type=\"dashboard\" :percentage=\"percentage\" :color=\"colors\"></ru-progress>\n<div>\n  <ru-button-group>\n    <ru-button icon=\"subtract\" @click=\"decrease\"></ru-button>\n    <ru-button icon=\"add\" @click=\"increase\"></ru-button>\n  </ru-button-group>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10,\n        colors: [\n          {color: '#f56c6c', percentage: 20},\n          {color: '#e6a23c', percentage: 40},\n          {color: '#5cb87a', percentage: 60},\n          {color: '#1989fa', percentage: 80},\n          {color: '#6f7ad3', percentage: 100}\n        ]\n      };\n    },\n    methods: {\n      increase() {\n        this.percentage += 10;\n        if (this.percentage > 100) {\n          this.percentage = 100;\n        }\n      },\n      decrease() {\n        this.percentage -= 10;\n        if (this.percentage < 0) {\n          this.percentage = 0;\n        }\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义内容")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "通过默认插槽添加自定义内容。")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-progress :percentage=\"50\">\n  <ru-button type=\"text\">自定义内容</ru-button>\n</ru-progress>\n<ru-progress :text-inside=\"true\" :stroke-width=\"20\" :percentage=\"50\" status=\"exception\">\n  <span>自定义内容</span>\n</ru-progress>\n<ru-progress type=\"circle\" :percentage=\"100\" status=\"success\">\n  <ru-button type=\"success\" icon=\"check\" circle></ru-button>\n</ru-progress>\n<ru-progress type=\"dashboard\" :percentage=\"80\">\n  <template #default=\"{ percentage }\">\n    <span class=\"percentage-value\">{{ percentage }}%</span>\n    <span class=\"percentage-label\">当前进度</span>\n  </template>\n</ru-progress>\n")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dong-hua-jin-du-tiao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-hua-jin-du-tiao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 动画进度条")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Progress 组件设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "indeterminate"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性控制进度条运动。通过设置 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "duration"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性可以控制运动速度。")])], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-progress :percentage=\"50\" :indeterminate=\"true\"></ru-progress>\n<ru-progress :percentage=\"100\" :format=\"format\" :indeterminate=\"true\"></ru-progress>\n<ru-progress :percentage=\"100\" status=\"success\" :indeterminate=\"true\" :duration=\"5\"></ru-progress>\n<ru-progress :percentage=\"100\" status=\"warning\" :indeterminate=\"true\" :duration=\"1\"></ru-progress>\n<ru-progress :percentage=\"50\" status=\"exception\" :indeterminate=\"true\"></ru-progress>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage === 100 ? '满' : `${percentage}%`;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><strong>percentage</strong></td><td><strong>百分比（必填）</strong></td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>type</td><td>进度条类型</td><td>string</td><td>line/circle/dashboard</td><td>line</td></tr><tr><td>stroke-width</td><td>进度条的宽度，单位 px</td><td>number</td><td>—</td><td>6</td></tr><tr><td>text-inside</td><td>进度条显示文字内置在进度条内（只在 type=line 时可用）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status</td><td>进度条当前状态</td><td>string</td><td>success/exception/warning</td><td>—</td></tr><tr><td>indeterminate</td><td>是否为动画进度条</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>duration</td><td>控制动画进度条速度</td><td>number</td><td>-</td><td>3</td></tr><tr><td>color</td><td>进度条背景色（会覆盖 status 状态颜色）</td><td>string/function/array</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>width</td><td>环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）</td><td>number</td><td></td><td>126</td></tr><tr><td>show-text</td><td>是否显示进度条文字内容</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>stroke-linecap</td><td>circle/dashboard 类型路径两端的形状</td><td>string</td><td>butt/round/square</td><td>round</td></tr><tr><td>format</td><td>指定进度条文字内容</td><td>function(percentage)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容，参数为 { percentage }</td></tr></tbody></table>", 4);

function progressvue_type_template_id_64160eaa_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", progressvue_type_template_id_64160eaa_hoisted_1, [progressvue_type_template_id_64160eaa_hoisted_2, progressvue_type_template_id_64160eaa_hoisted_3, progressvue_type_template_id_64160eaa_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_22];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_25];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/progress.md?vue&type=template&id=64160eaa

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/progress.md?vue&type=script&lang=ts


/* harmony default export */ var progressvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_progress = _resolveComponent("ru-progress");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          percentage: 50
        }), _createVNode(_component_ru_progress, {
          percentage: 100,
          format: _ctx.format
        }, null, 8, ["format"]), _createVNode(_component_ru_progress, {
          percentage: 100,
          status: "success"
        }), _createVNode(_component_ru_progress, {
          percentage: 100,
          status: "warning"
        }), _createVNode(_component_ru_progress, {
          percentage: 50,
          status: "exception"
        })]);
      }

      var democomponentExport = {
        methods: {
          format: function format(percentage) {
            return percentage === 100 ? '满' : percentage + "%";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_progress = _resolveComponent("ru-progress");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          "text-inside": true,
          "stroke-width": 26,
          percentage: 70
        }), _createVNode(_component_ru_progress, {
          "text-inside": true,
          "stroke-width": 24,
          percentage: 100,
          status: "success"
        }), _createVNode(_component_ru_progress, {
          "text-inside": true,
          "stroke-width": 22,
          percentage: 80,
          status: "warning"
        }), _createVNode(_component_ru_progress, {
          "text-inside": true,
          "stroke-width": 20,
          percentage: 50,
          status: "exception"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_progress = _resolveComponent("ru-progress");

        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_button_group = _resolveComponent("ru-button-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          percentage: _ctx.percentage,
          color: _ctx.customColor
        }, null, 8, ["percentage", "color"]), _createVNode(_component_ru_progress, {
          percentage: _ctx.percentage,
          color: _ctx.customColorMethod
        }, null, 8, ["percentage", "color"]), _createVNode(_component_ru_progress, {
          percentage: _ctx.percentage,
          color: _ctx.customColors
        }, null, 8, ["percentage", "color"]), _createVNode("div", null, [_createVNode(_component_ru_button_group, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              icon: "subtract",
              onClick: _ctx.decrease
            }, null, 8, ["onClick"]), _createVNode(_component_ru_button, {
              icon: "add",
              onClick: _ctx.increase
            }, null, 8, ["onClick"])];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            percentage: 20,
            customColor: '#409eff',
            customColors: [{
              color: '#f56c6c',
              percentage: 20
            }, {
              color: '#e6a23c',
              percentage: 40
            }, {
              color: '#5cb87a',
              percentage: 60
            }, {
              color: '#1989fa',
              percentage: 80
            }, {
              color: '#6f7ad3',
              percentage: 100
            }]
          };
        },
        methods: {
          customColorMethod: function customColorMethod(percentage) {
            if (percentage < 30) {
              return '#909399';
            } else if (percentage < 70) {
              return '#e6a23c';
            } else {
              return '#67c23a';
            }
          },
          increase: function increase() {
            this.percentage += 10;

            if (this.percentage > 100) {
              this.percentage = 100;
            }
          },
          decrease: function decrease() {
            this.percentage -= 10;

            if (this.percentage < 0) {
              this.percentage = 0;
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_progress = _resolveComponent("ru-progress");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          type: "circle",
          percentage: 0
        }), _createVNode(_component_ru_progress, {
          type: "circle",
          percentage: 25
        }), _createVNode(_component_ru_progress, {
          type: "circle",
          percentage: 100,
          status: "success"
        }), _createVNode(_component_ru_progress, {
          type: "circle",
          percentage: 70,
          status: "warning"
        }), _createVNode(_component_ru_progress, {
          type: "circle",
          percentage: 50,
          status: "exception"
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_progress = _resolveComponent("ru-progress");

        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_button_group = _resolveComponent("ru-button-group");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          type: "dashboard",
          percentage: _ctx.percentage,
          color: _ctx.colors
        }, null, 8, ["percentage", "color"]), _createVNode("div", null, [_createVNode(_component_ru_button_group, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              icon: "subtract",
              onClick: _ctx.decrease
            }, null, 8, ["onClick"]), _createVNode(_component_ru_button, {
              icon: "add",
              onClick: _ctx.increase
            }, null, 8, ["onClick"])];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            percentage: 10,
            colors: [{
              color: '#f56c6c',
              percentage: 20
            }, {
              color: '#e6a23c',
              percentage: 40
            }, {
              color: '#5cb87a',
              percentage: 60
            }, {
              color: '#1989fa',
              percentage: 80
            }, {
              color: '#6f7ad3',
              percentage: 100
            }]
          };
        },
        methods: {
          increase: function increase() {
            this.percentage += 10;

            if (this.percentage > 100) {
              this.percentage = 100;
            }
          },
          decrease: function decrease() {
            this.percentage -= 10;

            if (this.percentage < 0) {
              this.percentage = 0;
            }
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("自定义内容");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "自定义内容", -1);

      var _hoisted_3 = {
        class: "percentage-value"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "percentage-label"
      }, "当前进度", -1);

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_progress = _resolveComponent("ru-progress");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          percentage: 50
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              type: "text"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_ru_progress, {
          "text-inside": true,
          "stroke-width": 20,
          percentage: 50,
          status: "exception"
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_ru_progress, {
          type: "circle",
          percentage: 100,
          status: "success"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              type: "success",
              icon: "check",
              circle: ""
            })];
          }),
          _: 1
        }), _createVNode(_component_ru_progress, {
          type: "dashboard",
          percentage: 80
        }, {
          default: _withCtx(function (_ref) {
            var percentage = _ref.percentage;
            return [_createVNode("span", _hoisted_3, _toDisplayString(percentage) + "%", 1), _hoisted_4];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_progress = _resolveComponent("ru-progress");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_progress, {
          percentage: 50,
          indeterminate: true
        }), _createVNode(_component_ru_progress, {
          percentage: 100,
          format: _ctx.format,
          indeterminate: true
        }, null, 8, ["format"]), _createVNode(_component_ru_progress, {
          percentage: 100,
          status: "success",
          indeterminate: true,
          duration: 5
        }), _createVNode(_component_ru_progress, {
          percentage: 100,
          status: "warning",
          indeterminate: true,
          duration: 1
        }), _createVNode(_component_ru_progress, {
          percentage: 50,
          status: "exception",
          indeterminate: true
        })]);
      }

      var democomponentExport = {
        methods: {
          format: function format(percentage) {
            return percentage === 100 ? '满' : percentage + "%";
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/progress.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/progress.md



progressvue_type_script_lang_ts.render = progressvue_type_template_id_64160eaa_render

/* harmony default export */ var progress = __webpack_exports__["default"] = (progressvue_type_script_lang_ts);

/***/ })

}]);