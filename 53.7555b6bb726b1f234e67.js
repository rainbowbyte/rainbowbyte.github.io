(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/result.md?vue&type=template&id=5dfc6702

var resultvue_type_template_id_5dfc6702_hoisted_1 = {
  class: "content element-doc"
};

var resultvue_type_template_id_5dfc6702_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "result-jie-guo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#result-jie-guo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Result 结果")], -1);

var resultvue_type_template_id_5dfc6702_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用于对用户的操作结果或者异常状态做反馈。", -1);

var resultvue_type_template_id_5dfc6702_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-row>\n  <ru-col :sm=\"12\" :lg=\"6\">\n    <ru-result type=\"success\" title=\"成功提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n  <ru-col :sm=\"12\" :lg=\"6\">\n  <ru-result type=\"warning\" title=\"警告提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n  <ru-col :sm=\"12\" :lg=\"6\">\n    <ru-result type=\"error\" title=\"错误提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n  <ru-col :sm=\"12\" :lg=\"6\">\n    <ru-result type=\"info\" title=\"信息提示\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n</ru-row>\n")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-tu-biao"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-tu-biao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义图标")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-row>\n  <ru-col :sm=\"12\" :lg=\"6\">\n    <ru-result icon=\"bold\" title=\"测试图标\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n  <ru-col :sm=\"12\" :lg=\"6\">\n  <ru-result icon=\"hotel\" icon-color=\"#ef5285\" type=\"fill\" title=\"测试图标\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n  <ru-col :sm=\"12\" :lg=\"6\">\n    <ru-result icon=\"pencil-ruler-2\" icon-color=\"#4FB0C6\" icon-type=\"fill\" title=\"测试图标\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n  <ru-col :sm=\"12\" :lg=\"6\">\n    <ru-result icon=\"loader-4\" icon-color=\"#8CD790\" spin title=\"测试图标\" subTitle=\"请根据提示进行操作\">\n      <template #extra>\n        <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n      </template>\n    </ru-result>\n  </ru-col>\n</ru-row>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义内容")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-result title=\"404\" subTitle=\"抱歉，请求错误\">\n  <template #icon>\n    <ru-image src=\"https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png\"></ru-image>\n  </template>\n  <template #extra>\n    <ru-button type=\"primary\" size=\"medium\">返回</ru-button>\n  </template>\n</ru-result>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"result-attributes\"><a class=\"header-anchor\" href=\"#result-attributes\">¶</a> Result Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>sub-title</td><td>二级标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>success / warning / info / error</td><td>info</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>-</td></tr><tr><td>icon-type</td><td>图标类型</td><td>string</td><td>仅支持多样式图标</td><td>line / fill</td></tr><tr><td>spin</td><td>旋转图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon-color</td><td>Icon 颜色</td><td>String</td><td>—</td><td>#f90</td></tr></tbody></table><h3 id=\"result-slots\"><a class=\"header-anchor\" href=\"#result-slots\">¶</a> Result Slots</h3><table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>sub-title</td><td>自定义二级标题</td></tr><tr><td>extra</td><td>自定义底部额外区域</td></tr></tbody></table>", 4);

function resultvue_type_template_id_5dfc6702_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", resultvue_type_template_id_5dfc6702_hoisted_1, [resultvue_type_template_id_5dfc6702_hoisted_2, resultvue_type_template_id_5dfc6702_hoisted_3, resultvue_type_template_id_5dfc6702_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/result.md?vue&type=template&id=5dfc6702

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/result.md?vue&type=script&lang=ts


/* harmony default export */ var resultvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("返回");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("返回");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("返回");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("返回");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_result = _resolveComponent("ru-result");

        var _component_ru_col = _resolveComponent("ru-col");

        var _component_ru_row = _resolveComponent("ru-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  type: "success",
                  title: "成功提示",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  type: "warning",
                  title: "警告提示",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  type: "error",
                  title: "错误提示",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
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
            }), _createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  type: "info",
                  title: "信息提示",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    })];
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
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("返回");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("返回");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("返回");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("返回");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_result = _resolveComponent("ru-result");

        var _component_ru_col = _resolveComponent("ru-col");

        var _component_ru_row = _resolveComponent("ru-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_row, null, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  icon: "bold",
                  title: "测试图标",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  icon: "hotel",
                  "icon-color": "#ef5285",
                  type: "fill",
                  title: "测试图标",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  icon: "pencil-ruler-2",
                  "icon-color": "#4FB0C6",
                  "icon-type": "fill",
                  title: "测试图标",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
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
            }), _createVNode(_component_ru_col, {
              sm: 12,
              lg: 6
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_ru_result, {
                  icon: "loader-4",
                  "icon-color": "#8CD790",
                  spin: "",
                  title: "测试图标",
                  subTitle: "请根据提示进行操作"
                }, {
                  extra: _withCtx(function () {
                    return [_createVNode(_component_ru_button, {
                      type: "primary",
                      size: "medium"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_4];
                      }),
                      _: 1
                    })];
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
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("返回");

      function render(_ctx, _cache) {
        var _component_ru_image = _resolveComponent("ru-image");

        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_result = _resolveComponent("ru-result");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_result, {
          title: "404",
          subTitle: "抱歉，请求错误"
        }, {
          icon: _withCtx(function () {
            return [_createVNode(_component_ru_image, {
              src: "https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png"
            })];
          }),
          extra: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              type: "primary",
              size: "medium"
            }, {
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
// CONCATENATED MODULE: ./website/docs/result.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/result.md



resultvue_type_script_lang_ts.render = resultvue_type_template_id_5dfc6702_render

/* harmony default export */ var result = __webpack_exports__["default"] = (resultvue_type_script_lang_ts);

/***/ })

}]);