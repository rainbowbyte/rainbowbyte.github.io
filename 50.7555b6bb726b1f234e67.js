(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/qrcode.md?vue&type=template&id=3f4a900f

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "qrcode-er-wei-ma"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qrcode-er-wei-ma"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" QRCode 二维码")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "指定字符串生成二维码", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-sheng-cheng-er-wei-ma"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-sheng-cheng-er-wei-ma"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义生成二维码")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "更改参数可查看效果", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", {
  class: "label"
}, "二维码内容：", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", {
  class: "label"
}, "背景色：", -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", {
  class: "label"
}, "前景色：", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", {
  class: "label"
}, "二维码大小：", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", {
  class: "label"
}, "边距：", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", {
  class: "label"
}, "纠错等级：", -1);

var _hoisted_12 = {
  class: "qrcode-preview"
};

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><strong>value</strong></td><td><strong>二维码内容</strong></td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>size</td><td>二维码大小</td><td>number</td><td>—</td><td>100</td></tr><tr><td>level</td><td>纠错等级</td><td>string</td><td>L / M / Q /H</td><td>L</td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td>颜色代码</td><td>#FFF</td></tr><tr><td>foreground</td><td>二维码颜色</td><td>string</td><td>颜色代码</td><td>#000</td></tr><tr><td>margin</td><td>二维码边距</td><td>number</td><td>—</td><td>1</td></tr><tr><td>renderAs</td><td>渲染类型</td><td>string</td><td>canvas/svg</td><td>&#39;canvas&#39;</td></tr></tbody></table>", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ru_input = Object(vue_esm_browser["O" /* resolveComponent */])("ru-input");

  var _component_ru_col = Object(vue_esm_browser["O" /* resolveComponent */])("ru-col");

  var _component_ru_color_picker = Object(vue_esm_browser["O" /* resolveComponent */])("ru-color-picker");

  var _component_ru_input_number = Object(vue_esm_browser["O" /* resolveComponent */])("ru-input-number");

  var _component_ru_radio_button = Object(vue_esm_browser["O" /* resolveComponent */])("ru-radio-button");

  var _component_ru_radio_group = Object(vue_esm_browser["O" /* resolveComponent */])("ru-radio-group");

  var _component_ru_row = Object(vue_esm_browser["O" /* resolveComponent */])("ru-row");

  var _component_ru_qrcode = Object(vue_esm_browser["O" /* resolveComponent */])("ru-qrcode");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_ru_row, {
    class: "qrcode-demo"
  }, {
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_ru_col, {
        span: 6
      }, {
        default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
          return [_hoisted_6, Object(vue_esm_browser["o" /* createVNode */])(_component_ru_input, {
            placeholder: "请在此输入二维码的内容",
            modelValue: $data.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.value = $event;
            })
          }, null, 8, ["modelValue"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_col, {
        span: 2,
        offset: 1
      }, {
        default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
          return [_hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_ru_color_picker, {
            modelValue: $data.background,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.background = $event;
            })
          }, null, 8, ["modelValue"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_col, {
        span: 2
      }, {
        default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
          return [_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_ru_color_picker, {
            modelValue: $data.foreground,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.foreground = $event;
            })
          }, null, 8, ["modelValue"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_col, {
        span: 4
      }, {
        default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
          return [_hoisted_9, Object(vue_esm_browser["o" /* createVNode */])(_component_ru_input_number, {
            placeholder: "100",
            modelValue: $data.size,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.size = $event;
            })
          }, null, 8, ["modelValue"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_col, {
        span: 4
      }, {
        default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
          return [_hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_ru_input_number, {
            placeholder: "1",
            modelValue: $data.margin,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $data.margin = $event;
            })
          }, null, 8, ["modelValue"])];
        }),
        _: 1
      }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_col, {
        span: 5
      }, {
        default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
          return [_hoisted_11, Object(vue_esm_browser["o" /* createVNode */])("div", null, [Object(vue_esm_browser["o" /* createVNode */])(_component_ru_radio_group, {
            modelValue: $data.level,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $data.level = $event;
            })
          }, {
            default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
              return [Object(vue_esm_browser["o" /* createVNode */])(_component_ru_radio_button, {
                label: "L"
              }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_radio_button, {
                label: "M"
              }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_radio_button, {
                label: "Q"
              }), Object(vue_esm_browser["o" /* createVNode */])(_component_ru_radio_button, {
                label: "H"
              })];
            }),
            _: 1
          }, 8, ["modelValue"])])];
        }),
        _: 1
      })];
    }),
    _: 1
  }), Object(vue_esm_browser["o" /* createVNode */])("div", _hoisted_12, [Object(vue_esm_browser["o" /* createVNode */])(_component_ru_qrcode, {
    value: $data.value,
    background: $data.background,
    foreground: $data.foreground,
    size: $data.size,
    margin: $data.margin,
    level: $data.level
  }, null, 8, ["value", "background", "foreground", "size", "margin", "level"])]), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/qrcode.md?vue&type=template&id=3f4a900f

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/qrcode.md?vue&type=script&lang=js
/* harmony default export */ var qrcodevue_type_script_lang_js = ({
  data: function data() {
    return {
      value: 'https://rainbowbyte.com',
      background: '#FFF',
      foreground: '#000',
      size: 300,
      level: 'L',
      margin: 1
    };
  },
  watch: {
    level: function level(temp) {
      console.log(temp);
    }
  }
});
// CONCATENATED MODULE: ./website/docs/qrcode.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/qrcode.md



qrcodevue_type_script_lang_js.render = render

/* harmony default export */ var qrcode = __webpack_exports__["default"] = (qrcodevue_type_script_lang_js);

/***/ })

}]);