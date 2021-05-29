(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/descriptions.md?vue&type=template&id=34e5b8c4

var descriptionsvue_type_template_id_34e5b8c4_hoisted_1 = {
  class: "content element-doc"
};

var descriptionsvue_type_template_id_34e5b8c4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "descriptions-miao-shu-lie-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#descriptions-miao-shu-lie-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Descriptions 描述列表")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "列表形式展示多个字段。", -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-descriptions title=\"用户信息\">\n    <ru-descriptions-item label=\"用户名\">kooriookami</ru-descriptions-item>\n    <ru-descriptions-item label=\"手机号\">18100000000</ru-descriptions-item>\n    <ru-descriptions-item label=\"居住地\">苏州市</ru-descriptions-item>\n    <ru-descriptions-item label=\"备注\">\n      <ru-tag size=\"small\">学校</ru-tag>\n    </ru-descriptions-item>\n    <ru-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</ru-descriptions-item>\n</ru-descriptions>\n")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bu-tong-chi-cun"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bu-tong-chi-cun"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 不同尺寸")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ru-radio-group v-model=\"size\">\n    <ru-radio label=\"\">默认</ru-radio>\n    <ru-radio label=\"medium\">中等</ru-radio>\n    <ru-radio label=\"small\">小型</ru-radio>\n    <ru-radio label=\"mini\">超小</ru-radio>\n  </ru-radio-group>\n\n  <ru-descriptions class=\"margin-top\" title=\"带边框列表\" :column=\"3\" :size=\"size\" border>\n    <template #extra>\n      <ru-button type=\"primary\" size=\"small\">操作</ru-button>\n    </template>\n    <ru-descriptions-item>\n      <template #label>\n        <i class=\"ru-icon-user\"></i>\n        用户名\n      </template>\n      kooriookami\n    </ru-descriptions-item>\n    <ru-descriptions-item>\n      <template #label>\n        <i class=\"ru-icon-mobile-phone\"></i>\n        手机号\n      </template>\n      18100000000\n    </ru-descriptions-item>\n    <ru-descriptions-item>\n      <template #label>\n        <i class=\"ru-icon-location-outline\"></i>\n        居住地\n      </template>\n      苏州市\n    </ru-descriptions-item>\n    <ru-descriptions-item>\n      <template #label>\n        <i class=\"ru-icon-tickets\"></i>\n        备注\n      </template>\n      <ru-tag size=\"small\">学校</ru-tag>\n    </ru-descriptions-item>\n    <ru-descriptions-item>\n      <template #label>\n        <i class=\"ru-icon-office-building\"></i>\n        联系地址\n      </template>\n      江苏省苏州市吴中区吴中大道 1188 号\n    </ru-descriptions-item>\n  </ru-descriptions>\n\n  <ru-descriptions class=\"margin-top\" title=\"无边框列表\" :column=\"3\" :size=\"size\">\n    <template #extra>\n      <ru-button type=\"primary\" size=\"small\">操作</ru-button>\n    </template>\n    <ru-descriptions-item label=\"用户名\">kooriookami</ru-descriptions-item>\n    <ru-descriptions-item label=\"手机号\">18100000000</ru-descriptions-item>\n    <ru-descriptions-item label=\"居住地\">苏州市</ru-descriptions-item>\n    <ru-descriptions-item label=\"备注\">\n      <ru-tag size=\"small\">学校</ru-tag>\n    </ru-descriptions-item>\n    <ru-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</ru-descriptions-item>\n  </ru-descriptions>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        size: ''\n      };\n    }\n  }\n</script>\n")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "chui-zhi-lie-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chui-zhi-lie-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 垂直列表")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-descriptions title=\"垂直带边框列表\" direction=\"vertical\" :column=\"4\" border>\n  <ru-descriptions-item label=\"用户名\">kooriookami</ru-descriptions-item>\n  <ru-descriptions-item label=\"手机号\">18100000000</ru-descriptions-item>\n  <ru-descriptions-item label=\"居住地\" :span=\"2\">苏州市</ru-descriptions-item>\n  <ru-descriptions-item label=\"备注\">\n    <ru-tag size=\"small\">学校</ru-tag>\n  </ru-descriptions-item>\n  <ru-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</ru-descriptions-item>\n</ru-descriptions>\n\n<ru-descriptions class=\"margin-top\" title=\"垂直无边框列表\" :column=\"4\" direction=\"vertical\">\n  <ru-descriptions-item label=\"用户名\">kooriookami</ru-descriptions-item>\n  <ru-descriptions-item label=\"手机号\">18100000000</ru-descriptions-item>\n  <ru-descriptions-item label=\"居住地\" :span=\"2\">苏州市</ru-descriptions-item>\n  <ru-descriptions-item label=\"备注\">\n    <ru-tag size=\"small\">学校</ru-tag>\n  </ru-descriptions-item>\n  <ru-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</ru-descriptions-item>\n</ru-descriptions>\n")], -1);

var descriptionsvue_type_template_id_34e5b8c4_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"descriptions-attributes\"><a class=\"header-anchor\" href=\"#descriptions-attributes\">¶</a> Descriptions Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>border</td><td>是否带有边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>column</td><td>一行 <code>Descriptions Item</code> 的数量</td><td>number</td><td>—</td><td>3</td></tr><tr><td>direction</td><td>排列的方向</td><td>string</td><td>vertical / horizontal</td><td>horizontal</td></tr><tr><td>size</td><td>列表的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>title</td><td>标题文本，显示在左上方</td><td>string</td><td>—</td><td>—</td></tr><tr><td>extra</td><td>操作区文本，显示在右上方</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"descriptions-slots\"><a class=\"header-anchor\" href=\"#descriptions-slots\">¶</a> Descriptions Slots</h3><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>自定义标题，显示在左上方</td></tr><tr><td>extra</td><td>自定义操作区，显示在右上方</td></tr></tbody></table><h3 id=\"descriptions-item-attributes\"><a class=\"header-anchor\" href=\"#descriptions-item-attributes\">¶</a> Descriptions Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>span</td><td>列的数量</td><td>number</td><td>—</td><td>1</td></tr></tbody></table><h3 id=\"descriptions-item-slots\"><a class=\"header-anchor\" href=\"#descriptions-item-slots\">¶</a> Descriptions Item Slots</h3><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>自定义标签文本</td></tr></tbody></table>", 8);

function descriptionsvue_type_template_id_34e5b8c4_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", descriptionsvue_type_template_id_34e5b8c4_hoisted_1, [descriptionsvue_type_template_id_34e5b8c4_hoisted_2, descriptionsvue_type_template_id_34e5b8c4_hoisted_3, descriptionsvue_type_template_id_34e5b8c4_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_34e5b8c4_hoisted_5];
    }),
    _: 1
  }), descriptionsvue_type_template_id_34e5b8c4_hoisted_6, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_34e5b8c4_hoisted_7];
    }),
    _: 1
  }), descriptionsvue_type_template_id_34e5b8c4_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [descriptionsvue_type_template_id_34e5b8c4_hoisted_9];
    }),
    _: 1
  }), descriptionsvue_type_template_id_34e5b8c4_hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/descriptions.md?vue&type=template&id=34e5b8c4

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/descriptions.md?vue&type=script&lang=ts


/* harmony default export */ var descriptionsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_ru_descriptions_item = _resolveComponent("ru-descriptions-item");

        var _component_ru_tag = _resolveComponent("ru-tag");

        var _component_ru_descriptions = _resolveComponent("ru-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_descriptions, {
          title: "用户信息"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "居住地"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("默认");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("中等");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("小型");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("超小");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("操作");

      var _hoisted_6 = /*#__PURE__*/_createVNode("i", {
        class: "ru-icon-user"
      }, null, -1);

      var _hoisted_7 = /*#__PURE__*/_createTextVNode(" 用户名 ");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode(" kooriookami ");

      var _hoisted_9 = /*#__PURE__*/_createVNode("i", {
        class: "ru-icon-mobile-phone"
      }, null, -1);

      var _hoisted_10 = /*#__PURE__*/_createTextVNode(" 手机号 ");

      var _hoisted_11 = /*#__PURE__*/_createTextVNode(" 18100000000 ");

      var _hoisted_12 = /*#__PURE__*/_createVNode("i", {
        class: "ru-icon-location-outline"
      }, null, -1);

      var _hoisted_13 = /*#__PURE__*/_createTextVNode(" 居住地 ");

      var _hoisted_14 = /*#__PURE__*/_createTextVNode(" 苏州市 ");

      var _hoisted_15 = /*#__PURE__*/_createVNode("i", {
        class: "ru-icon-tickets"
      }, null, -1);

      var _hoisted_16 = /*#__PURE__*/_createTextVNode(" 备注 ");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_18 = /*#__PURE__*/_createVNode("i", {
        class: "ru-icon-office-building"
      }, null, -1);

      var _hoisted_19 = /*#__PURE__*/_createTextVNode(" 联系地址 ");

      var _hoisted_20 = /*#__PURE__*/_createTextVNode(" 江苏省苏州市吴中区吴中大道 1188 号 ");

      var _hoisted_21 = /*#__PURE__*/_createTextVNode("操作");

      var _hoisted_22 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_23 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_24 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_25 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_26 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_ru_radio = _resolveComponent("ru-radio");

        var _component_ru_radio_group = _resolveComponent("ru-radio-group");

        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_descriptions_item = _resolveComponent("ru-descriptions-item");

        var _component_ru_tag = _resolveComponent("ru-tag");

        var _component_ru_descriptions = _resolveComponent("ru-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_radio_group, {
          modelValue: _ctx.size,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.size = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_radio, {
              label: ""
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_ru_radio, {
              label: "medium"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_ru_radio, {
              label: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_ru_radio, {
              label: "mini"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_ru_descriptions, {
          class: "margin-top",
          title: "带边框列表",
          column: 3,
          size: _ctx.size,
          border: ""
        }, {
          extra: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              type: "primary",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_ru_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_6, _hoisted_7];
              }),
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_9, _hoisted_10];
              }),
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_12, _hoisted_13];
              }),
              default: _withCtx(function () {
                return [_hoisted_14];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_15, _hoisted_16];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_ru_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_17];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, null, {
              label: _withCtx(function () {
                return [_hoisted_18, _hoisted_19];
              }),
              default: _withCtx(function () {
                return [_hoisted_20];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["size"]), _createVNode(_component_ru_descriptions, {
          class: "margin-top",
          title: "无边框列表",
          column: 3,
          size: _ctx.size
        }, {
          extra: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              type: "primary",
              size: "small"
            }, {
              default: _withCtx(function () {
                return [_hoisted_21];
              }),
              _: 1
            })];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_ru_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_22];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_23];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "居住地"
            }, {
              default: _withCtx(function () {
                return [_hoisted_24];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_25];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_26];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["size"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            size: ''
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("kooriookami");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("18100000000");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("苏州市");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("学校");

      var _hoisted_10 = /*#__PURE__*/_createTextVNode("江苏省苏州市吴中区吴中大道 1188 号");

      function render(_ctx, _cache) {
        var _component_ru_descriptions_item = _resolveComponent("ru-descriptions-item");

        var _component_ru_tag = _resolveComponent("ru-tag");

        var _component_ru_descriptions = _resolveComponent("ru-descriptions");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_descriptions, {
          title: "垂直带边框列表",
          direction: "vertical",
          column: 4,
          border: ""
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "居住地",
              span: 2
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_ru_descriptions, {
          class: "margin-top",
          title: "垂直无边框列表",
          column: 4,
          direction: "vertical"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_descriptions_item, {
              label: "用户名"
            }, {
              default: _withCtx(function () {
                return [_hoisted_6];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "手机号"
            }, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "居住地",
              span: 2
            }, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "备注"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_tag, {
                  size: "small"
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_9];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_descriptions_item, {
              label: "联系地址"
            }, {
              default: _withCtx(function () {
                return [_hoisted_10];
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
// CONCATENATED MODULE: ./website/docs/descriptions.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/descriptions.md



descriptionsvue_type_script_lang_ts.render = descriptionsvue_type_template_id_34e5b8c4_render

/* harmony default export */ var descriptions = __webpack_exports__["default"] = (descriptionsvue_type_script_lang_ts);

/***/ })

}]);