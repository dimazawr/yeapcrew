import { defineComponent, useTemplateRef, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { useBreakpoints, breakpointsTailwind, useDraggable } from "@vueuse/core";
import { useRoute } from "vue-router";
import { a as _export_sfc } from "../main.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DialogComponent",
  __ssrInlineRender: true,
  props: {
    showModal: { type: Boolean },
    title: {},
    type: {},
    actionOnClose: { type: Function },
    isDraggableDisabled: { type: Boolean }
  },
  setup(__props) {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isDesktop = breakpoints.greater("lg");
    const dialogRef = useTemplateRef("dialog");
    const route = useRoute();
    const siblingOffset = route.fullPath.split("/").length;
    const offsetY = siblingOffset * 40;
    const { style } = useDraggable(dialogRef, {
      initialValue: { x: innerWidth / (4.2 + siblingOffset), y: offsetY },
      preventDefault: true,
      disabled: Boolean(__props.isDraggableDisabled)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        class: "window",
        ref: "dialog",
        id: _ctx.title,
        open: _ctx.showModal,
        style: [unref(isDesktop) && unref(style), { "position": "fixed" }]
      }, _attrs))} data-v-186bbf44><div class="title-bar" data-v-186bbf44><button aria-label="Close" class="close" data-v-186bbf44></button><h2 class="title" data-v-186bbf44>${ssrInterpolate(_ctx.title)}</h2></div><div class="window-pane" data-v-186bbf44>`);
      if (_ctx.type === "folder") {
        _push(`<article class="grid" data-v-186bbf44>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</article>`);
      } else if (_ctx.type === "player") {
        _push(`<div class="container" data-v-186bbf44>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</div></dialog>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DialogComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DialogComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-186bbf44"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "8.4666653mm",
    height: "11.28871mm",
    viewBox: "0 0 8.4666653 11.28871",
    version: "1.1",
    id: "svg1",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:svg": "http://www.w3.org/2000/svg"
  }, _attrs))}><defs id="defs1"></defs><g id="layer1" transform="translate(-93.663445,-112.71932)"><path id="path42" d="m 93.663445,112.71932 v 5.6441 5.64461 h 4.233337 4.233328 v -4.48138 -4.33617 -0.14469 -0.20929 h -0.20257 l -5.2e-4,-5.2e-4 -0.13901,5.2e-4 v -0.35243 h -0.35398 v 0.35346 l -1.41439,0.004 -10e-4,-1.4211 h 0.35347 v -0.35398 h -0.35347 v -0.19844 -0.1478 h -0.143138 l -5.2e-4,-5.1e-4 h -3.10575 z m 0.35295,0.35191 h 2.822047 2.82257 v 1.05834 1.05833 h 1.058328 1.05679 v 0.003 h 0.002 v 4.23075 4.23334 h -3.880898 -3.880387 v -5.29167 z m 6.355165,0.34934 v 0.3545 h 0.35398 v -0.3545 z m 0.3545,0.35243 v 0.35398 h 0.35398 V 113.773 Z m 0.3545,0.35553 v 0.35399 h 0.35399 v -0.35399 z"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/FileIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FileIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconBtn",
  __ssrInlineRender: true,
  props: {
    onClick: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/IconBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  DialogComponent as D,
  FileIcon as F,
  _sfc_main as _
};
