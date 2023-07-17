import { ref as b, watchEffect as W, computed as T, nextTick as ee, watchPostEffect as ze, toRef as U, onMounted as ie, onUnmounted as ce, watch as de, openBlock as w, createElementBlock as k, Fragment as $, unref as i, createCommentVNode as A, renderList as Q, createTextVNode as re, toDisplayString as V, createElementVNode as S, mergeProps as Y, createBlock as te, Teleport as le, withDirectives as Z, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as Me, normalizeProps as he, guardReactiveProps as ye, withModifiers as me, vShow as ge, vModelDynamic as $e } from "vue";
import { useVirtualList as we } from "@vueuse/core";
import { empty as qe, offset as G, getParents as P } from "@txd/utils";
const q = (l) => {
  let v = parseInt(l);
  return v == l ? v : l;
}, Te = (l, v) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: l.value,
    get: () => l.value,
    push: (a, n, t = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const m = l.map.get(a);
      if (m)
        m.value = n, m.data = t;
      else {
        let o = { value: n, key: a, data: t };
        l.value.push(o), l.map.set(o.key, o);
      }
    },
    addRange: (a) => {
      for (let n of a)
        l.actions.push(n.key, n.value, n.data);
    },
    remove: (a) => {
      l.value.splice(l.value.findIndex((n) => n.key == a), 1);
    },
    clear: () => {
      l.value = [];
    },
    sort: (a = null) => {
      a == null && (a = (n, t) => n.value.localeCompare(t.value)), l.value = l.value.sort(a);
    },
    setDefault: function(a) {
      this.defaultArray = a;
    },
    restoreDefault: function() {
      l.value = this.defaultArray;
    },
    filter: function(a) {
    }
  };
  window.ExtraSelectOptions[v] = e, l.actions = e;
};
let je = 1;
const ke = (l) => {
  l && (l.style.display = "none", qe(l));
}, be = (l, v, e, a) => {
  var p;
  const n = b(/* @__PURE__ */ new Map());
  W(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let s of e.value)
        n.value.set(s, s);
    }
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let s of t.value)
        t.map.set(s.key, s);
  }, W(() => {
    v.value && (t.value = v.value.map((s) => ({ ...s, key: q(s.key) })), t.rebuildMap());
  }), l) {
    if (n.value.clear(), l.matches("select")) {
      for (let s of Array.apply(null, l.selectedOptions).map((d) => q(d.value)).filter((d) => d != null))
        n.value.set(s, s);
      t.value = Array.apply(null, l.options).reduce((s, d) => (s.push({ value: d.text, key: q(d.value), data: Object.assign({}, d.dataset) }), s), []);
    }
    if (l.matches("input")) {
      let s = l.value;
      s != null && s.length > 0 && (t.value = [{ value: s, key: s }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(a))
    for (let s of a)
      n.value.set(q(s), q(s));
  else
    a != null && n.value.set(q(a), q(a));
  Te(t, (p = l == null ? void 0 : l.id) != null ? p : "extraselect_" + (++je).toString());
  const m = [];
  return n.value.forEach((s, d) => {
    m.push([d, s]);
  }), { options: t, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [s, d] of m)
      n.value.set(s, d);
  } };
};
b({});
function Ie(l, v = {}) {
  for (let e in v)
    l = l.replace(`:${e}`, v[e]);
  return l;
}
const Pe = (l = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, l != null ? l : {}), Se(b(e), "defaults");
}, Se = (l, v) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Pe());
  const e = {
    defaultArray: l.value,
    list: () => l.value,
    get: (a) => {
      var n;
      return (n = l.value[a]) != null ? n : null;
    },
    push: (a, n) => {
      l.value[a] = n;
    }
  };
  window.ExtraSelectLocalization[v] = e, l.actions = e;
};
let Be = 0;
const xe = (l, v) => {
  var a;
  return Se(v, (a = l == null ? void 0 : l.id) != null ? a : "extraselect_" + (++Be).toString()), { propLocalization: v, t: (n, t = {}) => {
    var o;
    let m = (o = v.value[n]) != null ? o : window.ExtraSelectLocalization.defaults.get(n);
    return m == null && (window.ExtraSelectLocalization.defaults.push(n, n), m = n), Ie(m, t);
  } };
}, ue = async function(l, v = null, e = {}) {
  var t;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: v, ...e.body })
  };
  return await (await fetch(l, a)).json();
}, Ce = (l, v, e, a, n, t, m = "limited", o = {}) => {
  const p = b(0), s = b(!1), d = T(() => s.value || p.value > 0);
  if (v != null && v.length > 0)
    if (e) {
      const f = [];
      W((c) => {
        if (a.value.length >= n) {
          let g = !0;
          switch (m) {
            case "always":
              break;
            default:
            case "limited":
              g = !f.includes(a.value);
              break;
            case "complete":
              g = f.reduce((y, h) => y && !a.value.startsWith(h), !0);
              break;
          }
          if (g) {
            s.value = !0;
            const y = setTimeout(() => {
              f.push(a.value), p.value += 1, o.body = { ...o.body, ...t.value }, ue(v, a.value, o).then((h) => {
                l.actions.addRange(h), l.actions.sort(), p.value -= 1, s.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      ue(v, null, o).then((f) => {
        l.actions.addRange(f), l.actions.sort();
      });
  return { searchingFlag: d };
}, _e = (l, v, e, a = [], n = []) => {
  const t = b(""), m = b([]), o = b({}), p = { ...a.reduce((d, f) => (d[f] = !1, d), {}), ...n.reduce((d, f) => (d[f] = !0, d), {}) };
  for (let d in p) {
    let f = p[d], c = document.getElementById(d);
    o.value[d] = c == null ? void 0 : c.value, c && c.addEventListener("change", (g) => {
      o.value[d] = g.target.value, f && ee(() => {
        if (v != null)
          for (let y of Array.from(v.value.keys()))
            m.value.find((h) => h.key == y) || e(y, !1);
        else
          m.value.find((y) => y.key == t.value) || e(t.value, !1);
      });
    });
  }
  const s = function(d, f) {
    let c = d.value;
    return Object.keys(o.value).length > 0 && (c = c.filter((g) => {
      var y, h;
      for (let L in o.value)
        if ((p[L] ? !0 : ((y = o.value[L]) != null ? y : "").length > 0) && ((h = g.data) == null ? void 0 : h.hasOwnProperty(L)) && g.data[L] != o.value[L])
          return !1;
      return !0;
    })), f.length > 0 && (c = c.filter((g) => g.value.toLowerCase().includes(f.toLowerCase()))), c;
  };
  return W(() => {
    m.value = s(l, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: o };
}, Ee = (l, v, e, a, n, t, m) => {
  const o = getComputedStyle(document.querySelector("body")).font, p = function(f) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = o, g.measureText(f).width;
  }, s = T(() => {
    var c, g;
    const f = (c = G(a.value).width) != null ? c : 100;
    if (m === "inherit")
      return f;
    if (m == null || m === "dynamic") {
      const y = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(f, Math.max(...l.value.map((h) => p(h.value))) + 20 + y * 3);
    }
    return m;
  }), d = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return ze(() => {
    e.value < 0 && console.log("is open"), v.value.size < 0 && console.log("empty selection");
    var f = G(a.value), c = G(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var c = G(t.value);
    let g = -c.left + f.left;
    const y = window.document.documentElement.clientWidth;
    g + s.value > y && (g = y - s.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: s.value.toString() + "px",
      top: (-c.top + f.top + f.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: p };
}, He = ["name"], Ue = {
  key: 1,
  class: "extra-select selection"
}, We = ["onClick"], De = ["innerHTML"], Je = ["value"], Ke = {
  key: 0,
  class: "input-searching"
}, Xe = ["placeholder"], Ge = {
  key: 0,
  class: "allselect-clear"
}, Qe = { class: "row-input" }, Ye = ["checked"], Ze = { class: "row-input" }, Re = ["checked"], et = {
  key: 1,
  class: "no-matches"
}, tt = { key: 2 }, lt = ["onClick"], at = { class: "row-input" }, nt = ["checked"], st = ["value"], ot = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, rt = /* @__PURE__ */ Object.assign(ot, {
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
    modelValue: { type: Array, required: !1, default: [] },
    url: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    search: { type: Boolean, default: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    initialValue: { default: null },
    minChars: { type: Number, default: 0 },
    showSelected: { type: Boolean, default: !1 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: v }) {
    var ae, ne, se;
    const e = l, a = T(() => {
      var r, u;
      return (u = (r = e.originalNode) == null ? void 0 : r.multiple) != null ? u : e.multiple;
    }), { options: n, selectedOptions: t, onReset: m } = be(e.originalNode, U(e, "options"), U(e, "modelValue"), e.initialValue), { t: o } = xe(e.originalNode, U(e, "localization")), p = (ae = e.originalNode) == null ? void 0 : ae.classList, s = Object.values((se = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? se : {});
    ke(e.originalNode);
    const d = (r, u = null) => {
      if (a.value) {
        let N = u;
        switch (N == null && (N = !t.value.has(r)), N) {
          case !0:
            t.value.set(r, r);
            break;
          case !1:
            t.value.delete(r);
            break;
        }
      } else
        t.value.clear(), u !== !1 && t.value.set(r, r), z.value = !1;
      I(Array.from(t.value.keys()));
    }, { filterText: f, filteredOptions: c, filterValues: g } = _e(n, t, d, e.filterFields, e.hardFilterFields), { searchingFlag: y } = Ce(
      n,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), h = b(null), L = b(null), B = b(null), z = b(!1), M = b(null), j = function(r) {
      const u = P(r.target);
      u.push(r.target), !u.includes(h.value) && !u.includes(L.value) && (z.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let r = !1;
        M.value = P(h.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (r = !0), r && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let u of p)
          u != "extraselect" && h.value.classList.add(u);
        for (let u of s)
          h.value.style[u] = e.originalNode.style[u];
        s.includes("background-color") || (h.value.style.backgroundColor = "white");
        let r = P(h.value, "form").pop();
        r instanceof HTMLElement && r.matches("form") && r.addEventListener("reset", () => setTimeout(m));
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ce(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: R, getTextWidth: D } = Ee(n, t, z, h, L, M, e.maxWidth), I = (r) => {
      ee(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), v("update:modelValue", r);
    }, J = (r) => {
      _(r, !1), f.value = "";
    }, _ = (r, u = null) => {
      u == null && (u = !x.value), u ? (t.value.clear(), n.value.forEach((N) => t.value.set(N.key, N.key))) : t.value.clear(), I(Array.from(t.value.keys()));
    }, E = () => {
      O.value ? c.value.forEach((r) => {
        t.value.has(r.key) && t.value.delete(r.key);
      }) : c.value.forEach((r) => {
        t.value.has(r.key) || t.value.set(r.key, r.key);
      }), I(Array.from(t.value.keys()));
    };
    de(z, (r, u) => {
      r != u && (r ? e.search && ee(() => {
        B.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const x = T(() => t.value.size == n.value.length), O = T(() => c.value.reduce((r, u) => r && t.value.has(u.key), !0)), Le = T(() => t.value.size == 0), Oe = T(() => {
      var r, u, N, H, C;
      if (n.value.length < 0)
        return "";
      if (a.value) {
        if (Le.value)
          return o("No selection");
        if (!e.searchableUrl && x.value)
          return o("All selected");
        const F = h.value ? getComputedStyle(h.value) : null, K = ((r = h.value) == null ? void 0 : r.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let X = o(":n selected - ", { n: t.value.size }), oe = !0;
        for (let Ve of t.value)
          if (oe ? oe = !1 : X += ", ", X += (N = (u = n.map.get(Ve[0])) == null ? void 0 : u.value) != null ? N : y.value ? o("Loading...") : o("Value not found"), K < D(X))
            return t.value.size + o(" selected");
        return X;
      } else
        for (let F of t.value)
          return (C = (H = n.map.get(F[0])) == null ? void 0 : H.value) != null ? C : y.value ? o("Loading...") : o("Value not found");
      return o("No selection");
    }), { list: Ne, containerProps: Fe, wrapperProps: Ae } = we(
      c,
      {
        itemHeight: 32
      }
    );
    return (r, u) => {
      var N, H;
      return w(), k($, null, [
        i(a) && i(t).size == 0 ? (w(), k("input", {
          key: 0,
          type: "hidden",
          name: (H = (N = e.originalNode) == null ? void 0 : N.name) == null ? void 0 : H.replace("[]", ""),
          value: ""
        }, null, 8, He)) : A("", !0),
        e.showSelected ? (w(), k("div", Ue, [
          (w(!0), k($, null, Q(i(t), (C) => {
            var F;
            return w(), k("div", {
              key: C,
              onClick: (K) => d(C[0]),
              class: "selection-badge"
            }, [
              re(V((F = i(n).find((K) => K.key == C[0])) == null ? void 0 : F.value) + " ", 1),
              S("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, De)
            ], 8, We);
          }), 128))
        ])) : A("", !0),
        S("input", Y({
          onFocus: u[0] || (u[0] = (C) => z.value = !0),
          onClick: u[1] || (u[1] = (C) => z.value = !0),
          ref_key: "inputNode",
          ref: h,
          value: i(Oe),
          class: "extra-select extra-select-input",
          readonly: ""
        }, r.$attrs), null, 16, Je),
        M.value ? (w(), te(le, {
          key: 2,
          to: M.value
        }, [
          Z(S("div", {
            class: fe(["extra-select dropdown", { searching: i(y) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: ve(i(R))
          }, [
            e.search ? (w(), k("div", Ke, [
              Z(S("input", {
                ref_key: "searchNode",
                ref: B,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (C) => pe(f) ? f.value = C : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: i(o)("Search...")
              }, null, 8, Xe), [
                [Me, i(f)]
              ])
            ])) : A("", !0),
            i(f).length >= e.minChars ? (w(), k($, { key: 1 }, [
              i(a) ? (w(), k("div", Ge, [
                i(f).length == 0 ? (w(), k("div", {
                  key: 0,
                  onClick: _,
                  class: "all-select"
                }, [
                  S("div", Qe, [
                    S("input", {
                      checked: i(x),
                      type: "checkbox"
                    }, null, 8, Ye),
                    S("b", null, V(i(o)("Select all")), 1)
                  ])
                ])) : A("", !0),
                i(c).length > 0 && i(f).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: E,
                  class: "all-select"
                }, [
                  S("div", Ze, [
                    S("input", {
                      checked: i(O),
                      type: "checkbox"
                    }, null, 8, Re),
                    S("b", null, V(i(o)("Select Filtered")), 1)
                  ])
                ])) : A("", !0),
                S("div", {
                  class: "clear",
                  onClick: J
                }, V(i(o)("Clear")), 1)
              ])) : A("", !0),
              i(c).length == 0 ? (w(), k("div", et, V(i(o)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", tt, V(i(o)("Insert at least :n characters", { n: e.minChars })), 1)),
            S("div", Y(i(Fe), { class: "scroller" }), [
              S("div", he(ye(i(Ae))), [
                (w(!0), k($, null, Q(i(Ne), (C) => (w(), k("button", {
                  key: C.index,
                  class: "dropdown-row",
                  onClick: me((F) => d(C.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  S("div", at, [
                    i(a) ? (w(), k("input", {
                      key: 0,
                      checked: i(t).has(C.data.key),
                      type: "checkbox"
                    }, null, 8, nt)) : A("", !0),
                    re(" " + V(C.data.value), 1)
                  ])
                ], 8, lt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [ge, z.value]
          ])
        ], 8, ["to"])) : A("", !0),
        e.originalNode ? (w(), te(le, {
          key: 3,
          to: e.originalNode
        }, [
          (w(!0), k($, null, Q(i(t), (C) => (w(), k("option", {
            key: C[0],
            selected: "selected",
            value: C[0]
          }, null, 8, st))), 128))
        ], 8, ["to"])) : A("", !0)
      ], 64);
    };
  }
}), ut = {
  key: 0,
  class: "no-matches"
}, it = { key: 1 }, ct = ["onClick"], dt = { class: "row-input" }, ft = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, vt = /* @__PURE__ */ Object.assign(ft, {
  props: {
    originalNode: { type: Object, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
    modelValue: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    url: { type: String, required: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: v }) {
    var D, I, J;
    const e = l, { options: a } = be(e.originalNode, U(e, "options"), b([])), { t: n } = xe(e.originalNode, U(e, "localization")), t = (D = e.originalNode) == null ? void 0 : D.classList, m = Object.values((J = (I = e.originalNode) == null ? void 0 : I.style) != null ? J : {});
    ke(e.originalNode);
    const o = (_, E = null) => {
      E === !1 ? p.value = "" : p.value = a.map.get(_).value, y.value = !1;
    }, { filterText: p, filteredOptions: s, filterValues: d } = _e(a, null, o, e.filterFields, e.hardFilterFields), { searchingFlag: f } = Ce(
      a,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      d,
      e.fetchMode,
      e.fetchOptions
    ), c = b(null), g = b(null), y = b(!1), h = b(null), L = function(_) {
      const E = P(_.target);
      E.push(_.target), !E.includes(c.value) && !E.includes(g.value) && (y.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let x = !1;
        h.value = P(c.value).find((O) => !!(O instanceof Element && (O.matches(e.dropdownContainer) && (x = !0), x && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(O).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let O of t)
          O != "extrasuggest" && c.value.classList.add(O);
        for (let O of m)
          c.value.style[O] = e.originalNode.style[O];
        m.includes("background-color") || (c.value.style.backgroundColor = "white"), p.value = e.originalNode.value;
        let x = P(c.value, "form").pop();
        x instanceof HTMLElement && x.matches("form") && x.addEventListener("reset", () => setTimeout(E));
      }
      W(() => {
        e.modelValue != null && (p.value = e.modelValue);
      });
      const _ = p.value, E = () => {
        p.value = _;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ce(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: B } = Ee(a, b([]), y, c, g, h, e.maxWidth), z = () => {
      var _;
      e.originalNode && (e.originalNode.value = p.value, (_ = e.originalNode) == null || _.dispatchEvent(new Event("change", { bubbles: !0 }))), v("update:modelValue", p.value);
    };
    de(() => y.value, (_) => {
      _ === !1 && z();
    });
    const { list: M, containerProps: j, wrapperProps: R } = we(
      s,
      {
        itemHeight: 32
      }
    );
    return (_, E) => (w(), k($, null, [
      Z(S("input", Y({
        onFocus: E[0] || (E[0] = (x) => y.value = !0),
        onClick: E[1] || (E[1] = (x) => y.value = !0),
        ref_key: "inputNode",
        ref: c,
        "onUpdate:modelValue": E[2] || (E[2] = (x) => pe(p) ? p.value = x : null),
        class: "extra-select extra-select-input"
      }, _.$attrs), null, 16), [
        [$e, i(p)]
      ]),
      h.value ? (w(), te(le, {
        key: 0,
        to: h.value
      }, [
        Z(S("div", {
          class: fe(["extra-select dropdown", { searching: i(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ve(i(B))
        }, [
          i(p).length >= e.minChars ? (w(), k($, { key: 0 }, [
            i(s).length == 0 ? (w(), k("div", ut, V(i(n)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", it, V(i(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          S("div", Y(i(j), { class: "scroller" }), [
            S("div", he(ye(i(R))), [
              (w(!0), k($, null, Q(i(M), (x) => (w(), k("button", {
                key: x.index,
                class: "dropdown-row",
                onClick: me((O) => o(x.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", dt, V(x.data.value), 1)
              ], 8, ct))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ge, y.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), mt = rt, gt = vt;
export {
  mt as ExtraSelect,
  gt as ExtraSuggest,
  mt as default
};
