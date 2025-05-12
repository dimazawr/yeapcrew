import { defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { D as DialogComponent, _ as _sfc_main$2, F as FileIcon } from "./IconBtn-Cc7J6jxb.js";
import { u as useDataStore, _ as _sfc_main$1 } from "../main.mjs";
import { storeToRefs } from "pinia";
import { useRouter, RouterView } from "vue-router";
import { PortableText } from "@portabletext/vue";
import { useHead } from "@unhead/vue";
import "@vueuse/core";
import "@unhead/vue/client";
import "unhead/plugins";
import "@sanity/client";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RootFolder",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(true);
    const showDescription = ref(false);
    const store = useDataStore();
    const { data: rootFolder } = storeToRefs(store);
    const router = useRouter();
    const handleOpenDescription = () => {
      showDescription.value = true;
    };
    const handleCloseDescription = () => {
      showDescription.value = false;
    };
    useHead({
      title: "!!!OPENME!!!"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(DialogComponent, {
        showModal: showModal.value,
        title: "!!!OPENME!!!",
        actionOnClose: () => unref(router).back(),
        type: "folder"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = unref(rootFolder)) == null ? void 0 : _a.folders, (folder) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: folder == null ? void 0 : folder.title,
                href: { name: "subfolder", params: { folderName: folder.title.toLowerCase() } }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(folder.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(folder.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if ((_b = unref(rootFolder)) == null ? void 0 : _b.description) {
              _push2(ssrRenderComponent(_sfc_main$2, { onClick: handleOpenDescription }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(FileIcon, null, null, _parent3, _scopeId2));
                    _push3(` README.txt `);
                  } else {
                    return [
                      createVNode(FileIcon),
                      createTextVNode(" README.txt ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_c = unref(rootFolder)) == null ? void 0 : _c.folders, (folder) => {
                return openBlock(), createBlock(_sfc_main$1, {
                  key: folder == null ? void 0 : folder.title,
                  href: { name: "subfolder", params: { folderName: folder.title.toLowerCase() } }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(folder.title), 1)
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128)),
              ((_d = unref(rootFolder)) == null ? void 0 : _d.description) ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                onClick: handleOpenDescription
              }, {
                default: withCtx(() => [
                  createVNode(FileIcon),
                  createTextVNode(" README.txt ")
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(ssrRenderComponent(DialogComponent, {
        showModal: showDescription.value,
        title: "README",
        actionOnClose: handleCloseDescription,
        type: "description"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if ((_a = unref(rootFolder)) == null ? void 0 : _a.description) {
              _push2(ssrRenderComponent(unref(PortableText), {
                value: (_b = unref(rootFolder)) == null ? void 0 : _b.description
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_c = unref(rootFolder)) == null ? void 0 : _c.description) ? (openBlock(), createBlock(unref(PortableText), {
                key: 0,
                value: (_d = unref(rootFolder)) == null ? void 0 : _d.description
              }, null, 8, ["value"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/RootFolder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
