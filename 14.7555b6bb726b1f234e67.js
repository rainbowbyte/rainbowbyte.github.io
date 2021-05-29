(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/card.md?vue&type=template&id=59ae8063

var cardvue_type_template_id_59ae8063_hoisted_1 = {
  class: "content element-doc"
};

var cardvue_type_template_id_59ae8063_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "card-qia-pian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#card-qia-pian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Card 卡片")], -1);

var cardvue_type_template_id_59ae8063_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "将信息聚合在卡片容器中展示。", -1);

var cardvue_type_template_id_59ae8063_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var cardvue_type_template_id_59ae8063_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "包含标题，内容和操作。", -1);

var cardvue_type_template_id_59ae8063_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Card 组件包括"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("和"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("部分，"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "header"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("部分需要有显式具名 slot 分发，同时也是可选的。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-card class=\"box-card\">\n  <template #header>\n    <div class=\"card-header\">\n      <span>卡片名称</span>\n      <ru-button class=\"button\" type=\"text\">操作按钮</ru-button>\n    </div>\n  </template>\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'列表内容 ' + o }}\n  </div>\n</ru-card>\n\n<style>\n  .card-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n  }\n    \n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jian-dan-qia-pian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jian-dan-qia-pian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 简单卡片")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "卡片可以只有内容区域。", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-card class=\"box-card\">\n  <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n    {{'列表内容 ' + o }}\n  </div>\n</ru-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dai-tu-pian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dai-tu-pian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 带图片")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可配置定义更丰富的内容展示。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("配置"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body-style"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性来自定义"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "body"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("部分的"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "style"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("，我们还使用了布局组件。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-row>\n  <ru-col :span=\"8\" v-for=\"(o, index) in 2\" :key=\"o\" :offset=\"index > 0 ? 2 : 0\">\n    <ru-card :body-style=\"{ padding: '0px' }\">\n      <img src=\"https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg\" class=\"image\">\n      <div style=\"padding: 14px;\">\n        <span>好吃的汉堡</span>\n        <div class=\"bottom\">\n          <time class=\"time\">{{ currentDate }}</time>\n          <ru-button type=\"text\" class=\"button\">操作按钮</ru-button>\n        </div>\n      </div>\n    </ru-card>\n  </ru-col>\n</ru-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n  \n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .button {\n    padding: 0;\n    min-height: auto;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n</style>\n\n<script>\nexport default {\n  data() {\n    return {\n      currentDate: new Date()\n    };\n  }\n}\n</script>\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "qia-pian-yin-ying"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#qia-pian-yin-ying"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 卡片阴影")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可对阴影的显示进行配置。", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "shadow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性设置卡片阴影出现的时机："), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "always"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hover"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("或"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "never"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-row :gutter=\"12\">\n  <ru-col :span=\"8\">\n    <ru-card shadow=\"always\">\n      总是显示\n    </ru-card>\n  </ru-col>\n  <ru-col :span=\"8\">\n    <ru-card shadow=\"hover\">\n      鼠标悬浮时显示\n    </ru-card>\n  </ru-col>\n  <ru-col :span=\"8\">\n    <ru-card shadow=\"never\">\n      从不显示\n    </ru-card>\n  </ru-col>\n</ru-row>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>header</td><td>设置 header，也可以通过 <code>slot#header</code> 传入 DOM</td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>设置 body 的样式</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>设置阴影显示时机</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>", 2);

function cardvue_type_template_id_59ae8063_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", cardvue_type_template_id_59ae8063_hoisted_1, [cardvue_type_template_id_59ae8063_hoisted_2, cardvue_type_template_id_59ae8063_hoisted_3, cardvue_type_template_id_59ae8063_hoisted_4, cardvue_type_template_id_59ae8063_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [cardvue_type_template_id_59ae8063_hoisted_6];
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
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/card.md?vue&type=template&id=59ae8063

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/card.md?vue&type=script&lang=ts


/* harmony default export */ var cardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */];
      var _hoisted_1 = {
        class: "card-header"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "卡片名称", -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_card = _resolveComponent("ru-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_card, {
          class: "box-card"
        }, {
          header: _withCtx(function () {
            return [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_ru_button, {
              class: "button",
              type: "text"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })])];
          }),
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('列表内容 ' + o), 1);
            }), 64))];
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
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */];

      function render(_ctx, _cache) {
        var _component_ru_card = _resolveComponent("ru-card");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_card, {
          class: "box-card"
        }, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (o) {
              return _createVNode("div", {
                key: o,
                class: "text item"
              }, _toDisplayString('列表内容 ' + o), 1);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("img", {
        src: "https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg",
        class: "image"
      }, null, -1);

      var _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", null, "好吃的汉堡", -1);

      var _hoisted_4 = {
        class: "bottom"
      };
      var _hoisted_5 = {
        class: "time"
      };

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_card = _resolveComponent("ru-card");

        var _component_ru_col = _resolveComponent("ru-col");

        var _component_ru_row = _resolveComponent("ru-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_row, null, {
          default: _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(2, function (o, index) {
              return _createVNode(_component_ru_col, {
                span: 8,
                key: o,
                offset: index > 0 ? 2 : 0
              }, {
                default: _withCtx(function () {
                  return [_createVNode(_component_ru_card, {
                    "body-style": {
                      padding: '0px'
                    }
                  }, {
                    default: _withCtx(function () {
                      return [_hoisted_1, _createVNode("div", _hoisted_2, [_hoisted_3, _createVNode("div", _hoisted_4, [_createVNode("time", _hoisted_5, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_ru_button, {
                        type: "text",
                        class: "button"
                      }, {
                        default: _withCtx(function () {
                          return [_hoisted_6];
                        }),
                        _: 1
                      })])])];
                    }),
                    _: 1
                  })];
                }),
                _: 2
              }, 1032, ["offset"]);
            }), 64))];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            currentDate: new Date()
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" 总是显示 ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 鼠标悬浮时显示 ");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode(" 从不显示 ");

      function render(_ctx, _cache) {
        var _component_ru_card = _resolveComponent("ru-card");

        var _component_ru_col = _resolveComponent("ru-col");

        var _component_ru_row = _resolveComponent("ru-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_row, {
          gutter: 12
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_card, {
                  shadow: "always"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_card, {
                  shadow: "hover"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              span: 8
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_card, {
                  shadow: "never"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                })];
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
// CONCATENATED MODULE: ./website/docs/card.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/card.md



cardvue_type_script_lang_ts.render = cardvue_type_template_id_59ae8063_render

/* harmony default export */ var card = __webpack_exports__["default"] = (cardvue_type_script_lang_ts);

/***/ })

}]);