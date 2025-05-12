import { ref, defineComponent, mergeProps, useSSRContext, watchEffect, unref, withCtx, createVNode, createTextVNode, toDisplayString, resolveComponent, renderSlot, createApp } from "vue";
import { defineStore, createPinia } from "pinia";
import { createHead } from "@unhead/vue/client";
import { TemplateParamsPlugin } from "unhead/plugins";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { RouterView, createRouter, createWebHistory } from "vue-router";
import { createClient } from "@sanity/client";
import { useMemoize, useAsyncState } from "@vueuse/core";
import { useHead } from "@unhead/vue";
const client = createClient({
  projectId: "4peg1g0m",
  dataset: "dataset",
  useCdn: true,
  // set to `false` to bypass the edge cache
  apiVersion: "2025-03-25"
  // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content, accessing drafts or using draft perspectives
});
const getPersonolizedFolders = useMemoize(async () => {
  try {
    const folders = await client.fetch(
      '*[_type == "personalizedFolder" && title == "Yura Karikh"]{title, slug, _id, _type, description, folders[]->{title, parentFolder, slug, _id, _type, content}}'
    );
    return folders;
  } catch (error) {
    console.error(error);
  }
  return [];
});
const getMainLinks = useMemoize(async () => {
  try {
    const [links] = await client.fetch(
      '*[_type == "mainScreenLinks"]{links[]{title, url, "iconUrl": icon.asset->url}}'
    );
    return links;
  } catch (error) {
    console.error(error);
  }
  return {
    _type: "mainScreenLinks",
    links: []
  };
});
const useDataStore = defineStore("data", () => {
  const data = ref(void 0);
  const linksData = ref({
    _type: "mainScreenLinks",
    links: []
  });
  const setData = (newData) => {
    const [rootFolder] = newData;
    if (rootFolder.folders) {
      rootFolder.folders = rootFolder.folders.filter((subfolder) => Boolean(subfolder.content));
    }
    data.value = rootFolder;
  };
  const setLinks = (newLinks) => {
    linksData.value = newLinks;
  };
  const getContentFolderData = (name) => {
    if (data.value) {
      const contentFolder = data.value.folders.find(
        (folder) => new RegExp(`^${name}$`, "i").test(folder.title)
      );
      return contentFolder ?? null;
    } else {
      return null;
    }
  };
  return { data, linksData, setData, setLinks, getContentFolderData };
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ErrorDialog",
  __ssrInlineRender: true,
  props: {
    actionOnClose: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "standard-dialog scale-down" }, _attrs))} data-v-2218d3db><div class="dialog-text" data-v-2218d3db>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div data-v-2218d3db><button class="btn" data-v-2218d3db>Close</button></div></div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ErrorDialog.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ErrorDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2218d3db"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const { setData } = useDataStore();
    const linksData = ref({
      _type: "mainScreenLinks",
      links: []
    });
    const error = ref(null);
    const { state, isReady, isLoading } = useAsyncState(
      async () => await getPersonolizedFolders(),
      [],
      {
        immediate: true,
        onError(err) {
          error.value = err instanceof Error ? err.message : String(err);
        },
        onSuccess(data) {
          setData(data);
        }
      }
    );
    watchEffect(() => {
      if (isReady.value && !isLoading.value) {
        setData(state.value);
      }
    });
    watchEffect(async function fetchLinks() {
      try {
        const data = await getMainLinks();
        linksData.value = data;
      } catch (err) {
        error.value = err instanceof Error ? err.message : String(err);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><main class="main" data-v-f1c10ce6><section data-v-f1c10ce6>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      if (error.value) {
        _push(ssrRenderComponent(ErrorDialog, {
          showModal: Boolean(error.value),
          actionOnClose: () => error.value = null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="error-message" data-v-f1c10ce6${_scopeId}><strong data-v-f1c10ce6${_scopeId}> Error: </strong> ${ssrInterpolate(error.value)}</p><p class="error-message" data-v-f1c10ce6${_scopeId}>Please check your internet connection or try again later.</p>`);
            } else {
              return [
                createVNode("p", { class: "error-message" }, [
                  createVNode("strong", null, " Error: "),
                  createTextVNode(" " + toDisplayString(error.value), 1)
                ]),
                createVNode("p", { class: "error-message" }, "Please check your internet connection or try again later.")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main><footer data-v-f1c10ce6>`);
      if (linksData.value) {
        _push(`<ul class="links" data-v-f1c10ce6><!--[-->`);
        ssrRenderList(linksData.value.links, (link) => {
          _push(`<li data-v-f1c10ce6><a${ssrRenderAttr("href", link.url)} target="_blank" class="icon-links" data-v-f1c10ce6><img${ssrRenderAttr("src", link.iconUrl)}${ssrRenderAttr("alt", link.title)} width="72" height="72" data-v-f1c10ce6></a></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f1c10ce6"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "56",
    height: "48",
    viewBox: "0 0 56 48",
    version: "1.1",
    id: "folder",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><defs id="defs1"></defs><g id="g4" transform="translate(-8.4325691,-43.794925)"><path style="${ssrRenderStyle({ "fill": "#ffffff", "stroke-width": "3.38059", "stroke-linecap": "round", "stroke-linejoin": "bevel" })}" d="m 41.381037,247.51515 v -55.26039 h 89.187703 89.1877 v 55.26039 55.26039 h -89.1877 -89.187703 z" id="path2" transform="scale(0.26458333)"></path><path style="${ssrRenderStyle({ "fill": "#000000" })}" d="m 150.48778,182.63815 v -16.05139 h 0.88195 0.88194 v -0.88194 -0.88195 h 1.05833 1.05834 v -0.52916 -0.52917 h 0.52916 0.52917 v -0.88194 -0.88195 h 0.88195 0.88194 v -0.88194 -0.88195 h 6.52639 6.52639 v 0.70556 0.70555 h 0.70555 0.70556 v 0.88195 0.88194 h 0.88194 0.88195 v 0.70556 0.70555 h 13.40555 13.40556 v 0.88195 0.88194 h 0.88194 0.88195 v 16.05139 16.05139 h -25.75278 -25.75278 z m 49.74167,-0.70555 v -14.64028 h -23.63611 -23.63611 v 14.64028 14.64027 h 23.63611 23.63611 z m -28.92778,-17.63889 v -0.52917 h -0.88194 -0.88195 v -0.70556 -0.70555 h -5.82083 -5.82083 v 0.70555 0.70556 h -0.88195 -0.88194 v 0.52917 0.52916 h 7.58472 7.58472 z" id="path1" transform="translate(-142.05521,-116.44183)"></path><path style="${ssrRenderStyle({ "fill": "#ffffff", "stroke-width": "0.734915", "stroke-linecap": "round", "stroke-linejoin": "bevel" })}" d="m 53.249188,180.86844 v -1.95564 h 3.35252 3.352519 v -2.68201 -2.68202 h 21.901106 21.901107 l 0.03,2.65408 0.03,2.65408 3.32458,0.0296 3.32458,0.0296 v 1.95397 1.95397 H 81.857356 53.249188 Z" id="path3" transform="scale(0.26458333)"></path></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/FolderIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FolderIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FolderBtnLink",
  __ssrInlineRender: true,
  props: {
    href: {},
    classname: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_component_RouterLink, mergeProps({
        class: _ctx.classname,
        to: _ctx.href
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FolderIcon, null, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(FolderIcon),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/FolderBtnLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeScreen",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Main",
      meta: [
        {
          name: "description",
          content: `
We’re Yeap Crew — a VFX/editorial boutique born from loud ideas, late nights, and melting minds.
We’re not here to play it safe. We’re here to blow the doors off.
Award-winning? Yeap.
Obsessed with our craft? Yeap.
Allergic to boring sh*t? Hell yeap.
We only roll with projects that punch hard, stand out, and say something. If it’s bland, corporate, or chasing trends — not interested. We’re into the bold, the strange, the too-weird kind of work.
We’re a crew of artists, rebels, and punks who believe VFX should hit like a molotov cocktail of pixels. This isn’t a job. It’s a mission.
So if you're ready to go off-script, make some noise, and bring a vision to life that actually feels something —
Yeap.
We're in.`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: "root",
        classname: "folder--main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` !!!OPENME!!! `);
          } else {
            return [
              createTextVNode(" !!!OPENME!!! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeScreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      component: _sfc_main,
      children: [
        {
          path: "root",
          component: () => import("./assets/RootFolder-BYHDvJiT.js"),
          children: [
            {
              path: ":folderName",
              name: "subfolder",
              components: {
                default: () => import("./assets/ContentFolder-Dcf1gC5b.js")
              }
            }
          ]
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("./assets/NotFound-C-tMPcgf.js")
    }
  ]
});
const app = createApp(App);
const head = createHead({
  plugins: [
    TemplateParamsPlugin
  ],
  init: [{ htmlAttrs: {
    lang: "en"
  } }]
});
head.push({
  templateParams: {
    brand: "Yeap Crew"
  },
  titleTemplate: "%s %separator %brand"
});
app.use(head);
app.use(createPinia());
app.use(router);
app.mount("#app");
export {
  _sfc_main$1 as _,
  _export_sfc as a,
  useDataStore as u
};
