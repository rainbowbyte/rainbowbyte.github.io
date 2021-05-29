(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/skeleton.md?vue&type=template&id=4c72a95d

var skeletonvue_type_template_id_4c72a95d_hoisted_1 = {
  class: "content element-doc"
};

var skeletonvue_type_template_id_4c72a95d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "skeleton-gu-jia-ping"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#skeleton-gu-jia-ping"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Skeleton 骨架屏")], -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。", -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基础用法")], -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "基础的骨架效果。", -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ru-skeleton />\n</template>\n")], -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "geng-duo-can-shu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#geng-duo-can-shu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 更多参数")], -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。", -1);

var skeletonvue_type_template_id_4c72a95d_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-skeleton :rows=\"5\" />\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dong-hua-xiao-guo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dong-hua-xiao-guo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 动画效果")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "显示动画效果。", -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<ru-skeleton :rows=\"5\" animated />\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "zi-ding-yi-yang-shi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#zi-ding-yi-yang-shi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 自定义样式")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "RainbowbyteUI 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ru-skeleton style=\"width: 240px\">\n    <template #template>\n      <ru-skeleton-item variant=\"image\" style=\"width: 240px; height: 240px;\" />\n      <div style=\"padding: 14px;\">\n        <ru-skeleton-item variant=\"p\" style=\"width: 50%\" />\n        <div\n          style=\"display: flex; align-items: center; justify-items: space-between;\"\n        >\n          <ru-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n          <ru-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n        </div>\n      </div>\n    </template>\n  </ru-skeleton>\n</template>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "loading-zhuang-tai"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#loading-zhuang-tai"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Loading 状态")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "loading"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的值来控制是否显示真实的 DOM。然后通过 具名 Slot 来设置当 loading 结束之后需要展示的 UI。")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ru-space direction=\"vertical\" alignment=\"flex-start\">\n    <div>\n      <label style=\"margin-right: 16px;\">切换 Loading</label>\n      <ru-switch v-model=\"loading\" />\n    </div>\n    <ru-skeleton style=\"width: 240px\" :loading=\"loading\" animated>\n      <template #template>\n        <ru-skeleton-item\n          variant=\"image\"\n          style=\"width: 240px; height: 240px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <ru-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <ru-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <ru-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <ru-card :body-style=\"{ padding: '0px', marginBottom: '1px' }\">\n          <img\n            src=\"https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg\"\n            class=\"image\"\n            style=\"width:240px\"\n          />\n          <div style=\"padding: 14px;\">\n            <span>好吃的汉堡</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <ru-button type=\"text\" class=\"button\">操作按钮</ru-button>\n            </div>\n          </div>\n        </ru-card>\n      </template>\n    </ru-skeleton>\n  </ru-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "xuan-ran-duo-tiao-shu-ju"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xuan-ran-duo-tiao-shu-ju"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 渲染多条数据")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 这个属性就能控制渲染多少条假的数据在页面上")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("请注意, 请尽可能的将 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "count"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 的大小保持在最小状态, 即使是假的 UI, DOM 元素多了之后, 照样会引起性能问题, 并且在骨架屏销毁时所消耗的时间也会更长(相对的)。")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ru-space direction=\"vertical\" alignment=\"flex-start\">\n    <ru-button @click=\"setLoading\">点我重新加载</ru-button>\n    <ru-skeleton style=\"width: 240px\" :loading=\"loading\" animated :count=\"3\">\n      <template #template>\n        <ru-skeleton-item\n          variant=\"image\"\n          style=\"width: 400px; height: 267px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <ru-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <ru-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <ru-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <ru-card\n          :body-style=\"{ padding: '0px', marginBottom: '1px' }\"\n          v-for=\"item in lists\"\n          :key=\"item.name\"\n        >\n          <img :src=\"item.imgUrl\" class=\"image multi-content\" />\n          <div style=\"padding: 14px;\">\n            <span>{{ item.name }}</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <ru-button type=\"text\" class=\"button\">操作按钮</ru-button>\n            </div>\n          </div>\n        </ru-card>\n      </template>\n    </ru-skeleton>\n  </ru-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n        lists: [],\n      }\n    },\n    mounted() {\n      this.loading = false\n      this.lists = [\n        {\n          imgUrl:\n            'https://asset.rainbowbyte.com/images/2021050916205386156336brigq.png',\n          name: '海',\n        },\n        {\n          imgUrl:\n            'https://asset.rainbowbyte.com/images/202105091620538614333bqwpXq.jpg',\n          name: '夜晚',\n        },\n        {\n          imgUrl:\n            'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png',\n          name: '小溪',\n        },\n      ]\n    },\n    methods: {\n      setLoading() {\n        this.loading = true\n        setTimeout(() => (this.loading = false), 2000)\n      },\n    },\n  })\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "fang-zhi-xuan-ran-dou-dong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#fang-zhi-xuan-ran-dou-dong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 防止渲染抖动")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "throttle"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性来避免这个问题。")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <ru-space direction=\"vertical\" alignment=\"flex-start\">\n    <div>\n      <label style=\"margin-right: 16px;\">切换 Loading</label>\n      <ru-switch v-model=\"loading\" />\n    </div>\n    <ru-skeleton\n      style=\"width: 240px\"\n      :loading=\"loading\"\n      animated\n      :throttle=\"500\"\n    >\n      <template #template>\n        <ru-skeleton-item\n          variant=\"image\"\n          style=\"width: 240px; height: 240px;\"\n        />\n        <div style=\"padding: 14px;\">\n          <ru-skeleton-item variant=\"h3\" style=\"width: 50%;\" />\n          <div\n            style=\"display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;\"\n          >\n            <ru-skeleton-item variant=\"text\" style=\"margin-right: 16px;\" />\n            <ru-skeleton-item variant=\"text\" style=\"width: 30%;\" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <ru-card :body-style=\"{ padding: '0px', marginBottom: '1px' }\">\n          <img\n            src=\"https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg\"\n            class=\"image\"\n            style=\"width:240px\"\n          />\n          <div style=\"padding: 14px;\">\n            <span>好吃的汉堡</span>\n            <div class=\"bottom card-header\">\n              <span class=\"time\">{{ currentDate }}</span>\n              <ru-button type=\"text\" class=\"button\">操作按钮</ru-button>\n            </div>\n          </div>\n        </ru-card>\n      </template>\n    </ru-skeleton>\n  </ru-space>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n\n  const dayjs = require('dayjs')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: false,\n        currentDate: dayjs().format('YYYY-MM-DD'),\n      }\n    },\n  })\n</script>\n")], -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"skeleton-attributes\"><a class=\"header-anchor\" href=\"#skeleton-attributes\">¶</a> Skeleton Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>animated</td><td>是否使用动画</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>count</td><td>渲染多少个 template, 建议使用尽可能小的数字</td><td>number</td><td>integer</td><td>1</td></tr><tr><td>loading</td><td>是否显示真实的 DOM 结构</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>rows</td><td>骨架屏段落数量</td><td>number</td><td>正整数</td><td>3</td></tr><tr><td>throttle</td><td>延迟占位 DOM 渲染的时间, 单位是毫秒</td><td>number</td><td>正整数</td><td>0</td></tr></tbody></table><h3 id=\"skeleton-item-attributes\"><a class=\"header-anchor\" href=\"#skeleton-item-attributes\">¶</a> Skeleton Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>variant</td><td>当前显示的占位元素的样式</td><td>Enum(string)</td><td>p / text / h1 / h3 / text / caption / button / image / circle / rect</td><td>text</td></tr></tbody></table><h3 id=\"skeleton-slots\"><a class=\"header-anchor\" href=\"#skeleton-slots\">¶</a> Skeleton Slots</h3><table><thead><tr><th>name</th><th>description</th></tr></thead><tbody><tr><td>default</td><td>\b 用来展示真实 UI</td></tr><tr><td>template</td><td>用来展示自定义占位符</td></tr></tbody></table>", 6);

function skeletonvue_type_template_id_4c72a95d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["O" /* resolveComponent */])("element-demo6");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", skeletonvue_type_template_id_4c72a95d_hoisted_1, [skeletonvue_type_template_id_4c72a95d_hoisted_2, skeletonvue_type_template_id_4c72a95d_hoisted_3, skeletonvue_type_template_id_4c72a95d_hoisted_4, skeletonvue_type_template_id_4c72a95d_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [skeletonvue_type_template_id_4c72a95d_hoisted_6];
    }),
    _: 1
  }), skeletonvue_type_template_id_4c72a95d_hoisted_7, skeletonvue_type_template_id_4c72a95d_hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [skeletonvue_type_template_id_4c72a95d_hoisted_9];
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
  }), _hoisted_13, _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_20, _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, _hoisted_25, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["cb" /* withCtx */])(function () {
      return [_hoisted_26];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/skeleton.md?vue&type=template&id=4c72a95d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/skeleton.md?vue&type=script&lang=ts


/* harmony default export */ var skeletonvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_skeleton)]);
      }

      var democomponentExport = {};
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
        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_skeleton, {
          rows: 5
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
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_skeleton, {
          rows: 5,
          animated: ""
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        style: {
          "padding": "14px"
        }
      };
      var _hoisted_2 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between"
        }
      };

      function render(_ctx, _cache) {
        var _component_ru_skeleton_item = _resolveComponent("ru-skeleton-item");

        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_skeleton, {
          style: {
            "width": "240px"
          }
        }, {
          template: _withCtx(function () {
            return [_createVNode(_component_ru_skeleton_item, {
              variant: "image",
              style: {
                "width": "240px",
                "height": "240px"
              }
            }), _createVNode("div", _hoisted_1, [_createVNode(_component_ru_skeleton_item, {
              variant: "p",
              style: {
                "width": "50%"
              }
            }), _createVNode("div", _hoisted_2, [_createVNode(_component_ru_skeleton_item, {
              variant: "text",
              style: {
                "margin-right": "16px"
              }
            }), _createVNode(_component_ru_skeleton_item, {
              variant: "text",
              style: {
                "width": "30%"
              }
            })])])];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("label", {
        style: {
          "margin-right": "16px"
        }
      }, "切换 Loading", -1);

      var _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };
      var _hoisted_3 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between",
          "margin-top": "16px",
          "height": "16px"
        }
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("img", {
        src: "https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg",
        class: "image",
        style: {
          "width": "240px"
        }
      }, null, -1);

      var _hoisted_5 = {
        style: {
          "padding": "14px"
        }
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "好吃的汉堡", -1);

      var _hoisted_7 = {
        class: "bottom card-header"
      };
      var _hoisted_8 = {
        class: "time"
      };

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_ru_switch = _resolveComponent("ru-switch");

        var _component_ru_skeleton_item = _resolveComponent("ru-skeleton-item");

        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_card = _resolveComponent("ru-card");

        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        var _component_ru_space = _resolveComponent("ru-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_space, {
          direction: "vertical",
          alignment: "flex-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", null, [_hoisted_1, _createVNode(_component_ru_switch, {
              modelValue: _ctx.loading,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.loading = $event;
              })
            }, null, 8, ["modelValue"])]), _createVNode(_component_ru_skeleton, {
              style: {
                "width": "240px"
              },
              loading: _ctx.loading,
              animated: ""
            }, {
              template: _withCtx(function () {
                return [_createVNode(_component_ru_skeleton_item, {
                  variant: "image",
                  style: {
                    "width": "240px",
                    "height": "240px"
                  }
                }), _createVNode("div", _hoisted_2, [_createVNode(_component_ru_skeleton_item, {
                  variant: "h3",
                  style: {
                    "width": "50%"
                  }
                }), _createVNode("div", _hoisted_3, [_createVNode(_component_ru_skeleton_item, {
                  variant: "text",
                  style: {
                    "margin-right": "16px"
                  }
                }), _createVNode(_component_ru_skeleton_item, {
                  variant: "text",
                  style: {
                    "width": "30%"
                  }
                })])])];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_ru_card, {
                  "body-style": {
                    padding: '0px',
                    marginBottom: '1px'
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4, _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode("div", _hoisted_7, [_createVNode("span", _hoisted_8, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_ru_button, {
                      type: "text",
                      class: "button"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    })])])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["loading"])];
          }),
          _: 1
        })]);
      }

      var defineComponent = vue_esm_browser["p" /* defineComponent */];

      var dayjs = __webpack_require__(6);

      var democomponentExport = defineComponent({
        data: function data() {
          return {
            loading: true,
            currentDate: dayjs().format('YYYY-MM-DD')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("点我重新加载");

      var _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };
      var _hoisted_3 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between",
          "margin-top": "16px",
          "height": "16px"
        }
      };
      var _hoisted_4 = {
        style: {
          "padding": "14px"
        }
      };
      var _hoisted_5 = {
        class: "bottom card-header"
      };
      var _hoisted_6 = {
        class: "time"
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_skeleton_item = _resolveComponent("ru-skeleton-item");

        var _component_ru_card = _resolveComponent("ru-card");

        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        var _component_ru_space = _resolveComponent("ru-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_space, {
          direction: "vertical",
          alignment: "flex-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_ru_button, {
              onClick: _ctx.setLoading
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_ru_skeleton, {
              style: {
                "width": "240px"
              },
              loading: _ctx.loading,
              animated: "",
              count: 3
            }, {
              template: _withCtx(function () {
                return [_createVNode(_component_ru_skeleton_item, {
                  variant: "image",
                  style: {
                    "width": "400px",
                    "height": "267px"
                  }
                }), _createVNode("div", _hoisted_2, [_createVNode(_component_ru_skeleton_item, {
                  variant: "h3",
                  style: {
                    "width": "50%"
                  }
                }), _createVNode("div", _hoisted_3, [_createVNode(_component_ru_skeleton_item, {
                  variant: "text",
                  style: {
                    "margin-right": "16px"
                  }
                }), _createVNode(_component_ru_skeleton_item, {
                  variant: "text",
                  style: {
                    "width": "30%"
                  }
                })])])];
              }),
              default: _withCtx(function () {
                return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.lists, function (item) {
                  return _openBlock(), _createBlock(_component_ru_card, {
                    "body-style": {
                      padding: '0px',
                      marginBottom: '1px'
                    },
                    key: item.name
                  }, {
                    default: _withCtx(function () {
                      return [_createVNode("img", {
                        src: item.imgUrl,
                        class: "image multi-content"
                      }, null, 8, ["src"]), _createVNode("div", _hoisted_4, [_createVNode("span", null, _toDisplayString(item.name), 1), _createVNode("div", _hoisted_5, [_createVNode("span", _hoisted_6, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_ru_button, {
                        type: "text",
                        class: "button"
                      }, {
                        default: _withCtx(function () {
                          return [_hoisted_7];
                        }),
                        _: 1
                      })])])];
                    }),
                    _: 2
                  }, 1024);
                }), 128))];
              }),
              _: 1
            }, 8, ["loading"])];
          }),
          _: 1
        })]);
      }

      var defineComponent = vue_esm_browser["p" /* defineComponent */];

      var dayjs = __webpack_require__(6);

      var democomponentExport = defineComponent({
        data: function data() {
          return {
            loading: true,
            currentDate: dayjs().format('YYYY-MM-DD'),
            lists: []
          };
        },
        mounted: function mounted() {
          this.loading = false;
          this.lists = [{
            imgUrl: 'https://asset.rainbowbyte.com/images/2021050916205386156336brigq.png',
            name: '海'
          }, {
            imgUrl: 'https://asset.rainbowbyte.com/images/202105091620538614333bqwpXq.jpg',
            name: '夜晚'
          }, {
            imgUrl: 'https://asset.rainbowbyte.com/images/202105061620307069748XzfjjD.png',
            name: '小溪'
          }];
        },
        methods: {
          setLoading: function setLoading() {
            var _this = this;

            this.loading = true;
            setTimeout(function () {
              return _this.loading = false;
            }, 2000);
          }
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["cb" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("label", {
        style: {
          "margin-right": "16px"
        }
      }, "切换 Loading", -1);

      var _hoisted_2 = {
        style: {
          "padding": "14px"
        }
      };
      var _hoisted_3 = {
        style: {
          "display": "flex",
          "align-items": "center",
          "justify-items": "space-between",
          "margin-top": "16px",
          "height": "16px"
        }
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("img", {
        src: "https://asset.rainbowbyte.com/images/202105091620538611629ZmI28s.jpg",
        class: "image",
        style: {
          "width": "240px"
        }
      }, null, -1);

      var _hoisted_5 = {
        style: {
          "padding": "14px"
        }
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "好吃的汉堡", -1);

      var _hoisted_7 = {
        class: "bottom card-header"
      };
      var _hoisted_8 = {
        class: "time"
      };

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("操作按钮");

      function render(_ctx, _cache) {
        var _component_ru_switch = _resolveComponent("ru-switch");

        var _component_ru_skeleton_item = _resolveComponent("ru-skeleton-item");

        var _component_ru_button = _resolveComponent("ru-button");

        var _component_ru_card = _resolveComponent("ru-card");

        var _component_ru_skeleton = _resolveComponent("ru-skeleton");

        var _component_ru_space = _resolveComponent("ru-space");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ru_space, {
          direction: "vertical",
          alignment: "flex-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", null, [_hoisted_1, _createVNode(_component_ru_switch, {
              modelValue: _ctx.loading,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.loading = $event;
              })
            }, null, 8, ["modelValue"])]), _createVNode(_component_ru_skeleton, {
              style: {
                "width": "240px"
              },
              loading: _ctx.loading,
              animated: "",
              throttle: 500
            }, {
              template: _withCtx(function () {
                return [_createVNode(_component_ru_skeleton_item, {
                  variant: "image",
                  style: {
                    "width": "240px",
                    "height": "240px"
                  }
                }), _createVNode("div", _hoisted_2, [_createVNode(_component_ru_skeleton_item, {
                  variant: "h3",
                  style: {
                    "width": "50%"
                  }
                }), _createVNode("div", _hoisted_3, [_createVNode(_component_ru_skeleton_item, {
                  variant: "text",
                  style: {
                    "margin-right": "16px"
                  }
                }), _createVNode(_component_ru_skeleton_item, {
                  variant: "text",
                  style: {
                    "width": "30%"
                  }
                })])])];
              }),
              default: _withCtx(function () {
                return [_createVNode(_component_ru_card, {
                  "body-style": {
                    padding: '0px',
                    marginBottom: '1px'
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4, _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode("div", _hoisted_7, [_createVNode("span", _hoisted_8, _toDisplayString(_ctx.currentDate), 1), _createVNode(_component_ru_button, {
                      type: "text",
                      class: "button"
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_9];
                      }),
                      _: 1
                    })])])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["loading"])];
          }),
          _: 1
        })]);
      }

      var defineComponent = vue_esm_browser["p" /* defineComponent */];

      var dayjs = __webpack_require__(6);

      var democomponentExport = defineComponent({
        data: function data() {
          return {
            loading: false,
            currentDate: dayjs().format('YYYY-MM-DD')
          };
        }
      });
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/skeleton.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/skeleton.md



skeletonvue_type_script_lang_ts.render = skeletonvue_type_template_id_4c72a95d_render

/* harmony default export */ var skeleton = __webpack_exports__["default"] = (skeletonvue_type_script_lang_ts);

/***/ })

}]);