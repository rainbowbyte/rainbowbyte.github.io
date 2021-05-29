(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/image.md?vue&type=template&id=c99b6b6e

var imagevue_type_template_id_c99b6b6e_hoisted_1 = {
  class: "content element-doc"
};

var imagevue_type_template_id_c99b6b6e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "image-tu-pian"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#image-tu-pian"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Image 图片")], -1);

var imagevue_type_template_id_c99b6b6e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等", -1);

var imagevue_type_template_id_c99b6b6e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var imagevue_type_template_id_c99b6b6e_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("确定图片如何适应到容器框，同原生 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
}, "object-fit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("。")])], -1);

var imagevue_type_template_id_c99b6b6e_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image\">\n  <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n    <span class=\"demonstration\">{{ fit }}</span>\n    <ru-image\n      style=\"width: 100px; height: 100px\"\n      :src=\"url\"\n      :fit=\"fit\"></ru-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zhan-wei-nei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zhan-wei-nei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 占位内容")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot = placeholder"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可自定义占位内容")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__placeholder\">\n  <div class=\"block\">\n    <span class=\"demonstration\">默认</span>\n    <ru-image :src=\"src\"></ru-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">自定义</span>\n    <ru-image :src=\"src\">\n      <template #placeholder>\n        <div class=\"image-slot\">\n          加载中<span class=\"dot\">...</span>\n        </div>\n      </template>\n    </ru-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        src: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "jia-zai-shi-bai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#jia-zai-shi-bai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 加载失败")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot = error"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可自定义加载失败内容")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__error\">\n  <div class=\"block\">\n    <span class=\"demonstration\">默认</span>\n    <ru-image></ru-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">自定义</span>\n    <ru-image>\n      <template #error>\n        <div class=\"image-slot\">\n          <i class=\"ri-image-2-line\"></i>\n        </div>\n      </template>\n    </ru-image>\n  </div>\n</div>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "lan-jia-zai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#lan-jia-zai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 懒加载")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("开启懒加载功能，当图片滚动到可视范围内才会加载。可通过"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scroll-container"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("来设置滚动容器，若未定义，则为最近一个"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "overflow"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("值为"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "auto"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("或"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scroll"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("的父元素。")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__lazy\">\n  <ru-image v-for=\"url in urls\" :key=\"url\" :src=\"url\" lazy></ru-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        urls: [\n          'https://asset.rainbowbyte.com/images/2021050916205386156336brigq.png',\n          'https://asset.rainbowbyte.com/images/202105091620538614333bqwpXq.jpg',\n          'https://asset.rainbowbyte.com/images/202105091620538613422vTX1Pw.jpg',\n          'https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg',\n          'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png',\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "da-tu-yu-lan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#da-tu-yu-lan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 大图预览")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("可通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "previewSrcList"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 开启预览大图的功能。")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__preview\">\n  <ru-image\n    style=\"width: 100px; height: 100px\"\n    :src=\"url\"\n    :preview-src-list=\"srcList\">\n  </ru-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        url: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png',\n        srcList: [\n          'https://asset.rainbowbyte.com/images/202105091620538616323FVC5nq.jpg',\n          'https://asset.rainbowbyte.com/images/2021050916205386156336brigq.png'\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"image-attributes\"><a class=\"header-anchor\" href=\"#image-attributes\">¶</a> Image Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>alt</td><td>原生 alt</td><td>string</td><td>-</td><td>-</td></tr><tr><td>fit</td><td>确定图片如何适应容器框，同原生 <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit\">object-fit</a></td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>-</td></tr><tr><td>hide-on-click-modal</td><td>当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>lazy</td><td>是否开启懒加载</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>preview-src-list</td><td>开启图片预览功能</td><td>Array</td><td>—</td><td>-</td></tr><tr><td>referrer-policy</td><td>原生 referrerPolicy</td><td>string</td><td>-</td><td>-</td></tr><tr><td>src</td><td>图片源，同原生</td><td>string</td><td>—</td><td>-</td></tr><tr><td>scroll-container</td><td>开启懒加载后，监听 scroll 事件的容器</td><td>string / HTMLElement</td><td>—</td><td>最近一个 overflow 值为 auto 或 scroll 的父元素</td></tr><tr><td>z-index</td><td>设置图片预览的 z-index</td><td>Number</td><td>—</td><td>2000</td></tr></tbody></table><h3 id=\"image-events\"><a class=\"header-anchor\" href=\"#image-events\">¶</a> Image Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>load</td><td>图片加载成功触发</td><td>(e: Event)</td></tr><tr><td>error</td><td>图片加载失败触发</td><td>(e: Error)</td></tr></tbody></table><h3 id=\"image-slots\"><a class=\"header-anchor\" href=\"#image-slots\">¶</a> Image Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>placeholder</td><td>图片未加载的占位内容</td></tr><tr><td>error</td><td>加载失败的内容</td></tr></tbody></table><h3 id=\"imageviewer-attributes\"><a class=\"header-anchor\" href=\"#imageviewer-attributes\">¶</a> ImageViewer Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url-list</td><td>用于预览的图片链接列表</td><td>Array&lt;string&gt;</td><td>-</td><td>[]</td></tr><tr><td>z-index</td><td>预览时遮罩层的 z-index</td><td>number / string</td><td>int / string&lt;int&gt;</td><td>2000</td></tr><tr><td>initial-index</td><td>预览的首张图片的位置, 小于等于数组长度</td><td>number</td><td>int</td><td>0</td></tr><tr><td>infinite</td><td>是否可以无限循环预览</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>hide-on-click-modal</td><td>是否可以通过点击遮罩层关闭预览</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table><h3 id=\"imageviewer-events\"><a class=\"header-anchor\" href=\"#imageviewer-events\">¶</a> ImageViewer Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发</td><td>无</td></tr><tr><td>switch</td><td>当图片切换时触发</td><td>(val: number) 切换目标的下标</td></tr></tbody></table>", 10);

function imagevue_type_template_id_c99b6b6e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", imagevue_type_template_id_c99b6b6e_hoisted_1, [imagevue_type_template_id_c99b6b6e_hoisted_2, imagevue_type_template_id_c99b6b6e_hoisted_3, imagevue_type_template_id_c99b6b6e_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [imagevue_type_template_id_c99b6b6e_hoisted_6];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [imagevue_type_template_id_c99b6b6e_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
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
// CONCATENATED MODULE: ./website/docs/image.md?vue&type=template&id=c99b6b6e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/image.md?vue&type=script&lang=ts


/* harmony default export */ var imagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */];
      var _hoisted_1 = {
        class: "demo-image"
      };
      var _hoisted_2 = {
        class: "demonstration"
      };

      function render(_ctx, _cache) {
        var _component_ru_image = _resolveComponent("ru-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.fits, function (fit) {
          return _openBlock(), _createBlock("div", {
            class: "block",
            key: fit
          }, [_createVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_ru_image, {
            style: {
              "width": "100px",
              "height": "100px"
            },
            src: _ctx.url,
            fit: fit
          }, null, 8, ["src", "fit"])]);
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
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__placeholder"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "默认", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "自定义", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createTextVNode(" 加载中"), /*#__PURE__*/_createVNode("span", {
        class: "dot"
      }, "...")], -1);

      function render(_ctx, _cache) {
        var _component_ru_image = _resolveComponent("ru-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_ru_image, {
          src: _ctx.src
        }, null, 8, ["src"])]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_ru_image, {
          src: _ctx.src
        }, {
          placeholder: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["src"])])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            src: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__error"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "默认", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "自定义", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createVNode("i", {
        class: "ri-image-2-line"
      })], -1);

      function render(_ctx, _cache) {
        var _component_ru_image = _resolveComponent("ru-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_ru_image)]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_ru_image, null, {
          error: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        class: "demo-image__lazy"
      };

      function render(_ctx, _cache) {
        var _component_ru_image = _resolveComponent("ru-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.urls, function (url) {
          return _openBlock(), _createBlock(_component_ru_image, {
            key: url,
            src: url,
            lazy: ""
          }, null, 8, ["src"]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            urls: ['https://asset.rainbowbyte.com/images/2021050916205386156336brigq.png', 'https://asset.rainbowbyte.com/images/202105091620538614333bqwpXq.jpg', 'https://asset.rainbowbyte.com/images/202105091620538613422vTX1Pw.jpg', 'https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg', 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__preview"
      };

      function render(_ctx, _cache) {
        var _component_ru_image = _resolveComponent("ru-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_ru_image, {
          style: {
            "width": "100px",
            "height": "100px"
          },
          src: _ctx.url,
          "preview-src-list": _ctx.srcList
        }, null, 8, ["src", "preview-src-list"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            url: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png',
            srcList: ['https://asset.rainbowbyte.com/images/202105091620538616323FVC5nq.jpg', 'https://asset.rainbowbyte.com/images/2021050916205386156336brigq.png']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/image.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/image.md



imagevue_type_script_lang_ts.render = imagevue_type_template_id_c99b6b6e_render

/* harmony default export */ var docs_image = __webpack_exports__["default"] = (imagevue_type_script_lang_ts);

/***/ })

}]);