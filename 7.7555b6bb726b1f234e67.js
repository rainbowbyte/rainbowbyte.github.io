(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/avatar.md?vue&type=template&id=261c2564

var avatarvue_type_template_id_261c2564_hoisted_1 = {
  class: "content element-doc"
};

var avatarvue_type_template_id_261c2564_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "avatar-tou-xiang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#avatar-tou-xiang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Avatar 头像")], -1);

var avatarvue_type_template_id_261c2564_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "用图标、图片或者字符的形式展示用户或事物信息。", -1);

var avatarvue_type_template_id_261c2564_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本用法")], -1);

var avatarvue_type_template_id_261c2564_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "shape"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 设置头像的形状和大小。")], -1);

var avatarvue_type_template_id_261c2564_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n<template>\n    <ru-row class=\"demo-avatar demo-basic\">\n        <ru-col :span=\"12\">\n            <div class=\"label\">circle</div>\n            <div class=\"demo-basic--circle\">\n                <div class=\"block\">\n                    <ru-avatar :size=\"50\" icon=\"group\"></ru-avatar>\n                </div>\n                <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n                    <ru-avatar :size=\"size\" icon=\"group\"></ru-avatar>\n                </div>\n            </div>\n        </ru-col>\n        <ru-col :span=\"12\">\n            <div class=\"label\">square</div>\n            <div class=\"demo-basic--circle\">\n                <div class=\"block\">\n                    <ru-avatar shape=\"square\" :size=\"50\" icon=\"group\"></ru-avatar>\n                </div>\n                <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n                    <ru-avatar shape=\"square\" :size=\"size\" icon=\"group\"></ru-avatar>\n                </div>\n            </div>\n        </ru-col>\n    </ru-row>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                sizeList: [\"large\", \"medium\", \"small\"]\n            }\n        }\n    }\n</script>\n\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zhan-shi-lei-xing"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhan-shi-lei-xing"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 展示类型")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "支持三种类型：图标、图片和字符", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <div>\n      <ru-avatar icon=\"emotion\"></ru-avatar>\n    </div>\n    <div>\n      <ru-avatar src=\"https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png\"></ru-avatar>\n    </div>\n    <div>\n      <ru-avatar> 用户 </ru-avatar>\n    </div>\n  </div>\n</template>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tu-pian-jia-zai-shi-bai-de-fallback-xing-wei"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-pian-jia-zai-shi-bai-de-fallback-xing-wei"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 图片加载失败的 fallback 行为")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "当展示类型为图片的时候，图片加载失败的 fallback 行为", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <ru-avatar :size=\"60\" src=\"https://empty\" @error=\"errorHandler\">\n        <ru-icon name=\"bold\" type=\"fill\" size=\"32px\" />\n    </ru-avatar>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      errorHandler() {\n        return true\n      }\n    }\n  }\n</script>\n\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tu-pian-ru-he-gua-ying-rong-qi-kuang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tu-pian-ru-he-gua-ying-rong-qi-kuang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 图片如何适应容器框")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("当展示类型为图片的时候，使用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性定义图片如何适应容器框，同原生 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
}, "object-fit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-fit\">\n    <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n        <span class=\"title\">{{ fit }}</span>\n        <ru-avatar shape=\"square\" :size=\"100\" :fit=\"fit\" :src=\"url\"></ru-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png'\n      }\n    }\n  }\n</script>\n\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>设置头像的图标类型，参考 Icon 组件</td><td>string</td><td></td><td></td></tr><tr><td>icon-type</td><td>图标显示类型</td><td>string</td><td>line / fill</td><td>line</td></tr><tr><td>size</td><td>设置头像的大小</td><td>number/string</td><td>number / large / medium / small</td><td>large</td></tr><tr><td>shape</td><td>设置头像的形状</td><td>string</td><td>circle / square</td><td>circle</td></tr><tr><td>src</td><td>图片头像的资源地址</td><td>string</td><td></td><td></td></tr><tr><td>srcSet</td><td>以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像</td><td>string</td><td></td><td></td></tr><tr><td>alt</td><td>描述图像的替换文本</td><td>string</td><td></td><td></td></tr><tr><td>fit</td><td>当展示类型为图片的时候，设置图片如何适应容器框</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>error</td><td>图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为</td><td>(e: Event)</td></tr></tbody></table><h3 id=\"slot\"><a class=\"header-anchor\" href=\"#slot\">¶</a> Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义头像展示内容</td></tr></tbody></table>", 6);

function avatarvue_type_template_id_261c2564_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", avatarvue_type_template_id_261c2564_hoisted_1, [avatarvue_type_template_id_261c2564_hoisted_2, avatarvue_type_template_id_261c2564_hoisted_3, avatarvue_type_template_id_261c2564_hoisted_4, avatarvue_type_template_id_261c2564_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [avatarvue_type_template_id_261c2564_hoisted_6];
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
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/avatar.md?vue&type=template&id=261c2564

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/avatar.md?vue&type=script&lang=ts


/* harmony default export */ var avatarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _withCtx = vue_esm_browser["cb" /* withCtx */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "label"
      }, "circle", -1);

      var _hoisted_2 = {
        class: "demo-basic--circle"
      };
      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("div", {
        class: "label"
      }, "square", -1);

      var _hoisted_5 = {
        class: "demo-basic--circle"
      };
      var _hoisted_6 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        var _component_ru_avatar = _resolveComponent("ru-avatar");

        var _component_ru_col = _resolveComponent("ru-col");

        var _component_ru_row = _resolveComponent("ru-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_row, {
          class: "demo-avatar demo-basic"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_1, _createVNode("div", _hoisted_2, [_createVNode("div", _hoisted_3, [_createVNode(_component_ru_avatar, {
                  size: 50,
                  icon: "group"
                })]), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.sizeList, function (size) {
                  return _openBlock(), _createBlock("div", {
                    class: "block",
                    key: size
                  }, [_createVNode(_component_ru_avatar, {
                    size: size,
                    icon: "group"
                  }, null, 8, ["size"])]);
                }), 128))])];
              }),
              _: 1
            }), _createVNode(_component_ru_col, {
              span: 12
            }, {
              default: _withCtx(function () {
                return [_hoisted_4, _createVNode("div", _hoisted_5, [_createVNode("div", _hoisted_6, [_createVNode(_component_ru_avatar, {
                  shape: "square",
                  size: 50,
                  icon: "group"
                })]), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.sizeList, function (size) {
                  return _openBlock(), _createBlock("div", {
                    class: "block",
                    key: size
                  }, [_createVNode(_component_ru_avatar, {
                    shape: "square",
                    size: size,
                    icon: "group"
                  }, null, 8, ["size"])]);
                }), 128))])];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            sizeList: ["large", "medium", "small"]
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-type"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode(" 用户 ");

      function render(_ctx, _cache) {
        var _component_ru_avatar = _resolveComponent("ru-avatar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", null, [_createVNode(_component_ru_avatar, {
          icon: "emotion"
        })]), _createVNode("div", null, [_createVNode(_component_ru_avatar, {
          src: "https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png"
        })]), _createVNode("div", null, [_createVNode(_component_ru_avatar, null, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        })])])]);
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
      var _hoisted_1 = {
        class: "demo-type"
      };

      function render(_ctx, _cache) {
        var _component_ru_icon = _resolveComponent("ru-icon");

        var _component_ru_avatar = _resolveComponent("ru-avatar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_ru_avatar, {
          size: 60,
          src: "https://empty",
          onError: _ctx.errorHandler
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_icon, {
              name: "bold",
              type: "fill",
              size: "32px"
            })];
          }),
          _: 1
        }, 8, ["onError"])])]);
      }

      var democomponentExport = {
        methods: {
          errorHandler: function errorHandler() {
            return true;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */];
      var _hoisted_1 = {
        class: "demo-fit"
      };
      var _hoisted_2 = {
        class: "title"
      };

      function render(_ctx, _cache) {
        var _component_ru_avatar = _resolveComponent("ru-avatar");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.fits, function (fit) {
          return _openBlock(), _createBlock("div", {
            class: "block",
            key: fit
          }, [_createVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_ru_avatar, {
            shape: "square",
            size: 100,
            fit: fit,
            src: _ctx.url
          }, null, 8, ["fit", "src"])]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/avatar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/avatar.md



avatarvue_type_script_lang_ts.render = avatarvue_type_template_id_261c2564_render

/* harmony default export */ var avatar = __webpack_exports__["default"] = (avatarvue_type_script_lang_ts);

/***/ })

}]);