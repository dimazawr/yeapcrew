import { mergeProps, useSSRContext, defineComponent, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { RouterLink } from "vue-router";
import { a as _export_sfc } from "../main.mjs";
import { useHead } from "@unhead/vue";
import "pinia";
import "@unhead/vue/client";
import "unhead/plugins";
import "@sanity/client";
import "@vueuse/core";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "8.4543228mm",
    height: "7.1321554mm",
    viewBox: "0 0 8.4543227 7.1321554",
    version: "1.1",
    id: "svg1",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:svg": "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="layer1" transform="translate(-92.696858,-96.797592)"><path id="path61" style="${ssrRenderStyle({ "opacity": "1", "stroke": "#000000", "stroke-width": "0.0346832", "stroke-linecap": "round" })}" d="m 93.243367,96.814934 v 0.218074 h 7.360793 v -0.218074 z m -0.270785,0.259415 v 0.22841 h 0.229444 v -0.22841 z m 7.673438,0 v 0.22841 h 0.22944 v -0.22841 z M 92.7142,97.3441 v 6.04098 h 0.217041 V 97.3441 Z m 8.20157,0 v 6.04098 h 0.21807 V 97.3441 Z m -6.881237,0.526583 v 0.222209 h 5.777946 v -0.222209 z m -0.267167,0.259933 v 4.463294 h 0.227376 v -4.463294 z m 6.086963,0.0026 v 4.461234 h 0.226351 V 98.1332 Z m -2.67425,0.243912 v 5.17e-4 h -0.12247 -0.1323 -0.13229 -0.13229 -0.13229 -0.13229 v 0.132292 0.132291 h 0.13229 0.13229 0.13229 0.13229 0.1323 0.12247 v 10e-4 h 0.27078 v -0.266134 z m -0.01292,0.02274 0.0026,5.17e-4 h -0.0031 z m -0.22066,0.223242 h 10e-4 l -0.0041,0.0021 z m -0.81597,0.02015 v 0.132292 0.132291 0.132292 0.132292 0.132291 0.132292 h 0.13229 0.13229 v -0.132292 -0.129191 h 0.13023 0.13229 0.13229 0.13229 0.13229 0.1323 V 99.043221 98.91093 h -0.1323 -0.13229 -0.13229 -0.13229 -0.13229 -0.13023 v -0.0031 -0.132291 -0.132292 h -0.13229 z m 1.32292,0.0015 v 0.262516 h 0.26251 V 98.64476 Z m -1.30018,0.0186 v 0.0026 l -5.2e-4,-5.17e-4 z m 0.22272,0.222208 0.0021,0.0036 -0.0021,-0.0026 z m 1.34152,0.02429 v 0.132292 0.132292 0.132291 0.132292 0.132292 0.132291 h 0.13229 0.1323 V 99.571355 99.439063 99.306771 99.17448 99.042188 98.909896 h -0.1323 z m 0.02274,0.02015 v 0.0026 l -5.2e-4,-5.17e-4 z m -0.57619,0.0031 0.0026,5.16e-4 h -0.0031 z m 0.79892,0.219108 0.0021,0.0036 -0.0021,-0.0026 z m -1.01958,0.0041 h 0.001 l -0.0041,0.0021 z m 0.26458,0.03721 v 0.230994 h 0.22376 V 99.1936 Z m -5.1e-4,0.266134 v 0.222208 h 0.22427 V 99.45966 Z m -0.28319,0.243396 v 0.262516 h 0.26252 V 99.70313 Z m 0.52917,0 v 0.262516 h 0.26251 V 99.70313 Z m -0.79375,0.263549 v 0.263035 h 0.262 v -0.263035 z m 0.52916,0 v 0.263035 h 0.262 v -0.263035 z m -0.79375,0.264585 v 0.13178 0.13229 0.13177 0.1323 0.13177 0.13229 h 0.13074 0.13075 v -0.13229 -0.13177 -0.1323 -0.13177 -0.13229 -0.13178 h -0.13075 z m 0.52762,0.002 v 0.13229 0.13229 0.13229 0.1323 0.13229 0.13229 h 0.13126 0.13177 v -0.13229 -0.13229 -0.1323 -0.13229 -0.13229 -0.13229 h -0.13177 z m -0.50488,0.0181 v 0.003 l -5.2e-4,-5.2e-4 z m 0.5271,0.002 v 0.003 l -5.2e-4,-5.2e-4 z m -0.30747,0.21963 0.0021,0.004 -0.0021,-0.003 z m 0.52916,0.003 0.0021,0.004 -0.0021,-0.003 z m -0.50694,0.54932 v 0.26304 h 0.262 v -0.26304 z m 0,0.52917 v 0.26303 h 0.262 v -0.26303 z m -0.2651,0.26613 v 0.26252 h 0.262 v -0.26252 z m 0.52916,0 v 0.26252 h 0.262 v -0.26252 z m -0.26406,0.26304 v 0.26303 h 0.262 v -0.26303 z m -2.623616,0.54932 v 0.22376 h 5.777426 v -0.22376 z m -1.063501,0.79065 v 0.22841 h 0.229444 v -0.22841 z m 7.672918,0 v 0.22841 h 0.22944 v -0.22841 z m -7.402133,0.27078 v 0.21808 h 7.361823 v -0.21808 z"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/ErrorIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "404"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "standard-dialog scale-down" }, _attrs))} data-v-6dc6cae6><h1 class="dialog-text" data-v-6dc6cae6>404 - Not Found `);
      _push(ssrRenderComponent(ErrorIcon, null, null, _parent));
      _push(`</h1><p class="dialog-text" data-v-6dc6cae6>The page you are looking for does not exist.</p>`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go to Home Page`);
          } else {
            return [
              createTextVNode("Go to Home Page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6dc6cae6"]]);
export {
  NotFound as default
};
