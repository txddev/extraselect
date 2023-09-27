import { ref as S, watchEffect as W, computed as T, nextTick as ee, watchPostEffect as ze, toRef as U, onMounted as ie, onUnmounted as ce, watch as de, openBlock as w, createElementBlock as k, Fragment as $, unref as i, createCommentVNode as A, renderList as Q, createTextVNode as re, toDisplayString as V, createElementVNode as x, mergeProps as Y, createBlock as te, Teleport as le, withDirectives as Z, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as Me, normalizeProps as he, guardReactiveProps as ye, withModifiers as me, vShow as ge, vModelDynamic as $e } from "vue";
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
        let s = { value: n, key: a, data: t };
        l.value.push(s), l.map.set(s.key, s);
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
}, Se = (l, v, e, a) => {
  var p;
  const n = S(/* @__PURE__ */ new Map());
  W(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let o of e.value)
        n.value.set(o, o);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let o of t.value)
        t.map.set(o.key, o);
  }, W(() => {
    v.value && (t.value = v.value.map((o) => ({ ...o, key: q(o.key) })), t.rebuildMap());
  }), l) {
    if (n.value.clear(), l.matches("select")) {
      for (let o of Array.apply(null, l.selectedOptions).map((d) => q(d.value)).filter((d) => d != null))
        n.value.set(o, o);
      t.value = Array.apply(null, l.options).reduce((o, d) => (o.push({ value: d.text, key: q(d.value), data: Object.assign({}, d.dataset) }), o), []);
    }
    if (l.matches("input")) {
      let o = l.value;
      o != null && o.length > 0 && (t.value = [{ value: o, key: o }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(a))
    for (let o of a)
      n.value.set(q(o), q(o));
  else
    a != null && n.value.set(q(a), q(a));
  Te(t, (p = l == null ? void 0 : l.id) != null ? p : "extraselect_" + (++je).toString());
  const m = [];
  return n.value.forEach((o, d) => {
    m.push([d, o]);
  }), { options: t, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [o, d] of m)
      n.value.set(o, d);
  } };
};
S({});
function Ie(l, v = {}) {
  for (let e in v)
    l = l.replace(`:${e}`, v[e]);
  return l;
}
const Pe = (l = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, l != null ? l : {}), xe(S(e), "defaults");
}, xe = (l, v) => {
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
const be = (l, v) => {
  var a;
  return xe(v, (a = l == null ? void 0 : l.id) != null ? a : "extraselect_" + (++Be).toString()), { propLocalization: v, t: (n, t = {}) => {
    var s;
    let m = (s = v.value[n]) != null ? s : window.ExtraSelectLocalization.defaults.get(n);
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
}, _e = (l, v, e, a, n, t, m = "limited", s = {}) => {
  const p = S(0), o = S(!1), d = T(() => o.value || p.value > 0);
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
              g = f.reduce((h, y) => h && !a.value.startsWith(y), !0);
              break;
          }
          if (g) {
            o.value = !0;
            const h = setTimeout(() => {
              f.push(a.value), p.value += 1, s.body = { ...s.body, ...t.value }, ue(v, a.value, s).then((y) => {
                l.actions.addRange(y), l.actions.sort(), p.value -= 1, o.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      ue(v, null, s).then((f) => {
        l.actions.addRange(f), l.actions.sort();
      });
  return { searchingFlag: d };
}, Ce = (l, v, e, a = [], n = []) => {
  const t = S(""), m = S([]), s = S({}), p = { ...a.reduce((d, f) => (d[f] = !1, d), {}), ...n.reduce((d, f) => (d[f] = !0, d), {}) };
  for (let d in p) {
    let f = p[d], c = document.getElementById(d);
    s.value[d] = c == null ? void 0 : c.value, c && c.addEventListener("change", (g) => {
      s.value[d] = g.target.value, f && ee(() => {
        if (v != null)
          for (let h of Array.from(v.value.keys()))
            m.value.find((y) => y.key == h) || e(h, !1);
        else
          m.value.find((h) => h.key == t.value) || e(t.value, !1);
      });
    });
  }
  const o = function(d, f) {
    let c = d.value;
    return Object.keys(s.value).length > 0 && (c = c.filter((g) => {
      var h, y;
      for (let L in s.value)
        if ((p[L] ? !0 : ((h = s.value[L]) != null ? h : "").length > 0) && ((y = g.data) == null ? void 0 : y.hasOwnProperty(L)) && g.data[L] != s.value[L])
          return !1;
      return !0;
    })), f.length > 0 && (c = c.filter((g) => g.value.toLowerCase().includes(f.toLowerCase()))), c;
  };
  return W(() => {
    m.value = o(l, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: s };
}, Ee = (l, v, e, a, n, t, m) => {
  const s = getComputedStyle(document.querySelector("body")).font, p = function(f) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = s, g.measureText(f).width;
  }, o = T(() => {
    var c, g;
    const f = (c = G(a.value).width) != null ? c : 100;
    if (m === "inherit")
      return f;
    if (m == null || m === "dynamic") {
      const h = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(f, Math.max(...l.value.map((y) => p(y.value))) + 20 + h * 3);
    }
    return m;
  }), d = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return ze(() => {
    e.value < 0 && console.log("is open"), v.value.size < 0 && console.log("empty selection");
    var f = G(a.value), c = G(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var c = G(t.value);
    let g = -c.left + f.left;
    const h = window.document.documentElement.clientWidth;
    g + o.value > h && (g = h - o.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: o.value.toString() + "px",
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
    }), { options: n, selectedOptions: t, onReset: m } = Se(e.originalNode, U(e, "options"), U(e, "modelValue"), e.initialValue), { t: s } = be(e.originalNode, U(e, "localization")), p = (ae = e.originalNode) == null ? void 0 : ae.classList, o = Object.values((se = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? se : {});
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
    }, { filterText: f, filteredOptions: c, filterValues: g } = Ce(n, t, d, e.filterFields, e.hardFilterFields), { searchingFlag: h } = _e(
      n,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), y = S(null), L = S(null), B = S(null), z = S(!1), M = S(null), j = function(r) {
      const u = P(r.target);
      u.push(r.target), !u.includes(y.value) && !u.includes(L.value) && (z.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let r = !1;
        M.value = P(y.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (r = !0), r && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let u of p)
          u != "extraselect" && y.value.classList.add(u);
        for (let u of o)
          y.value.style[u] = e.originalNode.style[u];
        let r = P(y.value, "form").pop();
        r instanceof HTMLElement && r.matches("form") && r.addEventListener("reset", () => setTimeout(m));
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ce(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: R, getTextWidth: D } = Ee(n, t, z, y, L, M, e.maxWidth), I = (r) => {
      ee(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), v("update:modelValue", r);
    }, J = (r) => {
      C(r, !1), f.value = "";
    }, C = (r, u = null) => {
      u == null && (u = !b.value), u ? (t.value.clear(), n.value.forEach((N) => t.value.set(N.key, N.key))) : t.value.clear(), I(Array.from(t.value.keys()));
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
    const b = T(() => t.value.size == n.value.length), O = T(() => c.value.reduce((r, u) => r && t.value.has(u.key), !0)), Le = T(() => t.value.size == 0), Oe = T(() => {
      var r, u, N, H, _;
      if (n.value.length < 0)
        return "";
      if (a.value) {
        if (Le.value)
          return s("No selection");
        if (!e.searchableUrl && b.value)
          return s("All selected");
        const F = y.value ? getComputedStyle(y.value) : null, K = ((r = y.value) == null ? void 0 : r.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let X = s(":n selected - ", { n: t.value.size }), oe = !0;
        for (let Ve of t.value)
          if (oe ? oe = !1 : X += ", ", X += (N = (u = n.map.get(Ve[0])) == null ? void 0 : u.value) != null ? N : h.value ? s("Loading...") : s("Value not found"), K < D(X))
            return t.value.size + s(" selected");
        return X;
      } else
        for (let F of t.value)
          return (_ = (H = n.map.get(F[0])) == null ? void 0 : H.value) != null ? _ : h.value ? s("Loading...") : s("Value not found");
      return s("No selection");
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
          (w(!0), k($, null, Q(i(t), (_) => {
            var F;
            return w(), k("div", {
              key: _,
              onClick: (K) => d(_[0]),
              class: "selection-badge"
            }, [
              re(V((F = i(n).find((K) => K.key == _[0])) == null ? void 0 : F.value) + " ", 1),
              x("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, De)
            ], 8, We);
          }), 128))
        ])) : A("", !0),
        x("input", Y({
          onFocus: u[0] || (u[0] = (_) => z.value = !0),
          onClick: u[1] || (u[1] = (_) => z.value = !0),
          ref_key: "inputNode",
          ref: y,
          value: i(Oe),
          class: "extra-select extra-select-input",
          readonly: ""
        }, r.$attrs), null, 16, Je),
        M.value ? (w(), te(le, {
          key: 2,
          to: M.value
        }, [
          Z(x("div", {
            class: fe(["extra-select dropdown", { searching: i(h) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: ve(i(R))
          }, [
            e.search ? (w(), k("div", Ke, [
              Z(x("input", {
                ref_key: "searchNode",
                ref: B,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (_) => pe(f) ? f.value = _ : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: i(s)("Search...")
              }, null, 8, Xe), [
                [Me, i(f)]
              ])
            ])) : A("", !0),
            i(f).length >= e.minChars ? (w(), k($, { key: 1 }, [
              i(a) ? (w(), k("div", Ge, [
                i(f).length == 0 ? (w(), k("div", {
                  key: 0,
                  onClick: C,
                  class: "all-select"
                }, [
                  x("div", Qe, [
                    x("input", {
                      checked: i(b),
                      type: "checkbox"
                    }, null, 8, Ye),
                    x("b", null, V(i(s)("Select all")), 1)
                  ])
                ])) : A("", !0),
                i(c).length > 0 && i(f).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: E,
                  class: "all-select"
                }, [
                  x("div", Ze, [
                    x("input", {
                      checked: i(O),
                      type: "checkbox"
                    }, null, 8, Re),
                    x("b", null, V(i(s)("Select Filtered")), 1)
                  ])
                ])) : A("", !0),
                x("div", {
                  class: "clear",
                  onClick: J
                }, V(i(s)("Clear")), 1)
              ])) : A("", !0),
              i(c).length == 0 ? (w(), k("div", et, V(i(s)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", tt, V(i(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            x("div", Y(i(Fe), { class: "scroller" }), [
              x("div", he(ye(i(Ae))), [
                (w(!0), k($, null, Q(i(Ne), (_) => (w(), k("button", {
                  key: _.index,
                  class: "dropdown-row",
                  onClick: me((F) => d(_.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", at, [
                    i(a) ? (w(), k("input", {
                      key: 0,
                      checked: i(t).has(_.data.key),
                      type: "checkbox"
                    }, null, 8, nt)) : A("", !0),
                    re(" " + V(_.data.value), 1)
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
          (w(!0), k($, null, Q(i(t), (_) => (w(), k("option", {
            key: _[0],
            selected: "selected",
            value: _[0]
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
    const e = l, { options: a } = Se(e.originalNode, U(e, "options"), S([])), { t: n } = be(e.originalNode, U(e, "localization")), t = (D = e.originalNode) == null ? void 0 : D.classList, m = Object.values((J = (I = e.originalNode) == null ? void 0 : I.style) != null ? J : {});
    ke(e.originalNode);
    const s = (C, E = null) => {
      E === !1 ? p.value = "" : p.value = a.map.get(C).value, h.value = !1;
    }, { filterText: p, filteredOptions: o, filterValues: d } = Ce(a, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: f } = _e(
      a,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      d,
      e.fetchMode,
      e.fetchOptions
    ), c = S(null), g = S(null), h = S(!1), y = S(null), L = function(C) {
      const E = P(C.target);
      E.push(C.target), !E.includes(c.value) && !E.includes(g.value) && (h.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let b = !1;
        y.value = P(c.value).find((O) => !!(O instanceof Element && (O.matches(e.dropdownContainer) && (b = !0), b && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(O).position))));
      }
      if (y.value == null && (y.value = document.querySelector("body")), e.originalNode) {
        for (let O of t)
          O != "extrasuggest" && c.value.classList.add(O);
        for (let O of m)
          c.value.style[O] = e.originalNode.style[O];
        p.value = e.originalNode.value;
        let b = P(c.value, "form").pop();
        b instanceof HTMLElement && b.matches("form") && b.addEventListener("reset", () => setTimeout(E));
      }
      W(() => {
        e.modelValue != null && (p.value = e.modelValue);
      });
      const C = p.value, E = () => {
        p.value = C;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ce(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: B } = Ee(a, S([]), h, c, g, y, e.maxWidth), z = () => {
      var C;
      e.originalNode && (e.originalNode.value = p.value, (C = e.originalNode) == null || C.dispatchEvent(new Event("change", { bubbles: !0 }))), v("update:modelValue", p.value);
    };
    de(() => h.value, (C) => {
      C === !1 && z();
    });
    const { list: M, containerProps: j, wrapperProps: R } = we(
      o,
      {
        itemHeight: 32
      }
    );
    return (C, E) => (w(), k($, null, [
      Z(x("input", Y({
        onFocus: E[0] || (E[0] = (b) => h.value = !0),
        onClick: E[1] || (E[1] = (b) => h.value = !0),
        ref_key: "inputNode",
        ref: c,
        "onUpdate:modelValue": E[2] || (E[2] = (b) => pe(p) ? p.value = b : null),
        class: "extra-select extra-select-input"
      }, C.$attrs), null, 16), [
        [$e, i(p)]
      ]),
      y.value ? (w(), te(le, {
        key: 0,
        to: y.value
      }, [
        Z(x("div", {
          class: fe(["extra-select dropdown", { searching: i(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ve(i(B))
        }, [
          i(p).length >= e.minChars ? (w(), k($, { key: 0 }, [
            i(o).length == 0 ? (w(), k("div", ut, V(i(n)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", it, V(i(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          x("div", Y(i(j), { class: "scroller" }), [
            x("div", he(ye(i(R))), [
              (w(!0), k($, null, Q(i(M), (b) => (w(), k("button", {
                key: b.index,
                class: "dropdown-row",
                onClick: me((O) => s(b.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", dt, V(b.data.value), 1)
              ], 8, ct))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ge, h.value]
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
