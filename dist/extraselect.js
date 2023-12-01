import { ref as S, watchEffect as W, computed as T, nextTick as ee, watchPostEffect as ze, toRef as U, onMounted as ie, onUnmounted as ce, watch as de, openBlock as w, createElementBlock as k, Fragment as $, unref as i, createCommentVNode as A, renderList as Q, createTextVNode as re, toDisplayString as z, createElementVNode as b, mergeProps as Y, createBlock as te, Teleport as le, withDirectives as Z, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as Me, normalizeProps as he, guardReactiveProps as ye, withModifiers as me, vShow as ge, vModelDynamic as $e } from "vue";
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
}, Se = (l, v, e, a) => {
  var p;
  const n = S(/* @__PURE__ */ new Map());
  W(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let r of e.value)
        n.value.set(r, r);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let r of t.value)
        t.map.set(r.key, r);
  }, W(() => {
    v.value && (t.value = v.value.map((r) => ({ ...r, key: q(r.key) })), t.rebuildMap());
  }), l) {
    if (n.value.clear(), l.matches("select")) {
      for (let r of Array.apply(null, l.selectedOptions).map((c) => q(c.value)).filter((c) => c != null))
        n.value.set(r, r);
      t.value = Array.apply(null, l.options).reduce((r, c) => (r.push({ value: c.text, key: q(c.value), data: Object.assign({}, c.dataset) }), r), []);
    }
    if (l.matches("input")) {
      let r = l.value;
      r != null && r.length > 0 && (t.value = [{ value: r, key: r }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(a))
    for (let r of a)
      n.value.set(q(r), q(r));
  else
    a != null && n.value.set(q(a), q(a));
  Te(t, (p = l == null ? void 0 : l.id) != null ? p : "extraselect_" + (++je).toString());
  const m = [];
  return n.value.forEach((r, c) => {
    m.push([c, r]);
  }), { options: t, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [r, c] of m)
      n.value.set(r, c);
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
}, _e = (l, v, e, a, n, t, m = "limited", o = {}) => {
  const p = S(0), r = S(!1), c = T(() => r.value || p.value > 0);
  if (v != null && v.length > 0)
    if (e) {
      const f = [];
      W((d) => {
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
            r.value = !0;
            const h = setTimeout(() => {
              f.push(a.value), p.value += 1, o.body = { ...o.body, ...t.value }, ue(v, a.value, o).then((y) => {
                l.actions.addRange(y), l.actions.sort(), p.value -= 1, r.value = !1;
              });
            }, 500);
            d(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      ue(v, null, o).then((f) => {
        l.actions.addRange(f), l.actions.sort();
      });
  return { searchingFlag: c };
}, Ce = (l, v, e, a = [], n = []) => {
  const t = S(""), m = S([]), o = S({}), p = { ...a.reduce((c, f) => (c[f] = !1, c), {}), ...n.reduce((c, f) => (c[f] = !0, c), {}) };
  for (let c in p) {
    let f = p[c], d = document.getElementById(c);
    o.value[c] = d == null ? void 0 : d.value, d && d.addEventListener("change", (g) => {
      o.value[c] = g.target.value, f && ee(() => {
        if (v != null)
          for (let h of Array.from(v.value.keys()))
            m.value.find((y) => y.key == h) || e(h, !1);
        else
          m.value.find((h) => h.key == t.value) || e(t.value, !1);
      });
    });
  }
  const r = function(c, f) {
    let d = c.value;
    return Object.keys(o.value).length > 0 && (d = d.filter((g) => {
      var h, y;
      for (let L in o.value)
        if ((p[L] ? !0 : ((h = o.value[L]) != null ? h : "").length > 0) && ((y = g.data) == null ? void 0 : y.hasOwnProperty(L)) && g.data[L] != o.value[L])
          return !1;
      return !0;
    })), f.length > 0 && (d = d.filter((g) => g.value.toLowerCase().includes(f.toLowerCase()))), d;
  };
  return W(() => {
    m.value = r(l, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: o };
}, Ee = (l, v, e, a, n, t, m) => {
  const o = getComputedStyle(document.querySelector("body")).font, p = function(f) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = o, g.measureText(f).width;
  }, r = T(() => {
    var d, g;
    const f = (d = G(a.value).width) != null ? d : 100;
    if (m === "inherit")
      return f;
    if (m == null || m === "dynamic") {
      const h = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(f, Math.max(...l.value.map((y) => p(y.value))) + 20 + h * 3);
    }
    return m;
  }), c = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return ze(() => {
    e.value < 0 && console.log("is open"), v.value.size < 0 && console.log("empty selection");
    var f = G(a.value), d = G(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var d = G(t.value);
    let g = -d.left + f.left;
    const h = window.document.documentElement.clientWidth;
    g + r.value > h && (g = h - r.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-d.top + f.top + f.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: p };
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
      var u, s;
      return (s = (u = e.originalNode) == null ? void 0 : u.multiple) != null ? s : e.multiple;
    }), { options: n, selectedOptions: t, onReset: m } = Se(e.originalNode, U(e, "options"), U(e, "modelValue"), e.initialValue), { t: o } = be(e.originalNode, U(e, "localization")), p = (ae = e.originalNode) == null ? void 0 : ae.classList, r = Object.values((se = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? se : {});
    ke(e.originalNode);
    const c = (u, s = null) => {
      if (a.value) {
        let N = s;
        switch (N == null && (N = !t.value.has(u)), N) {
          case !0:
            t.value.set(u, u);
            break;
          case !1:
            t.value.delete(u);
            break;
        }
      } else
        t.value.clear(), s !== !1 && t.value.set(u, u), V.value = !1;
      I(Array.from(t.value.keys()));
    }, { filterText: f, filteredOptions: d, filterValues: g } = Ce(n, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: h } = _e(
      n,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), y = S(null), L = S(null), B = S(null), V = S(!1), M = S(null), j = function(u) {
      const s = P(u.target);
      s.push(u.target), !s.includes(y.value) && !s.includes(L.value) && (V.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let u = !1;
        M.value = P(y.value).find((s) => !!(s instanceof Element && (s.matches(e.dropdownContainer) && (u = !0), u && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(s).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let s of p)
          s != "extraselect" && y.value.classList.add(s);
        for (let s of r)
          y.value.style[s] = e.originalNode.style[s];
        let u = P(y.value, "form").pop();
        u instanceof HTMLElement && u.matches("form") && u.addEventListener("reset", () => setTimeout(m)), e.originalNode.toggleValue = c, e.originalNode.setValues = (s) => {
          t.value.clear();
          for (let N of s)
            c(N);
        };
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ce(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: R, getTextWidth: D } = Ee(n, t, V, y, L, M, e.maxWidth), I = (u) => {
      ee(
        () => {
          var s;
          return (s = e.originalNode) == null ? void 0 : s.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), v("update:modelValue", u);
    }, J = (u) => {
      E(u, !1), f.value = "";
    }, E = (u, s = null) => {
      s == null && (s = !_.value), s ? (t.value.clear(), n.value.forEach((N) => t.value.set(N.key, N.key))) : t.value.clear(), I(Array.from(t.value.keys()));
    }, x = () => {
      O.value ? d.value.forEach((u) => {
        t.value.has(u.key) && t.value.delete(u.key);
      }) : d.value.forEach((u) => {
        t.value.has(u.key) || t.value.set(u.key, u.key);
      }), I(Array.from(t.value.keys()));
    };
    de(V, (u, s) => {
      u != s && (u ? e.search && ee(() => {
        B.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const _ = T(() => t.value.size == n.value.length), O = T(() => d.value.reduce((u, s) => u && t.value.has(s.key), !0)), Le = T(() => t.value.size == 0), Ne = T(() => {
      var u, s, N, H, C;
      if (n.value.length < 0)
        return "";
      if (a.value) {
        if (Le.value)
          return o("No selection");
        if (!e.searchableUrl && _.value)
          return o("All selected");
        const F = y.value ? getComputedStyle(y.value) : null, K = ((u = y.value) == null ? void 0 : u.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let X = o(":n selected - ", { n: t.value.size }), oe = !0;
        for (let Ve of t.value)
          if (oe ? oe = !1 : X += ", ", X += (N = (s = n.map.get(Ve[0])) == null ? void 0 : s.value) != null ? N : h.value ? o("Loading...") : o("Value not found"), K < D(X))
            return t.value.size + o(" selected");
        return X;
      } else
        for (let F of t.value)
          return (C = (H = n.map.get(F[0])) == null ? void 0 : H.value) != null ? C : h.value ? o("Loading...") : o("Value not found");
      return o("No selection");
    }), { list: Oe, containerProps: Fe, wrapperProps: Ae } = we(
      d,
      {
        itemHeight: 32
      }
    );
    return (u, s) => {
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
              onClick: (K) => c(C[0]),
              class: "selection-badge"
            }, [
              re(z((F = i(n).find((K) => K.key == C[0])) == null ? void 0 : F.value) + " ", 1),
              b("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, De)
            ], 8, We);
          }), 128))
        ])) : A("", !0),
        b("input", Y({
          onFocus: s[0] || (s[0] = (C) => V.value = !0),
          onClick: s[1] || (s[1] = (C) => V.value = !0),
          ref_key: "inputNode",
          ref: y,
          value: i(Ne),
          class: "extra-select extra-select-input",
          readonly: ""
        }, u.$attrs), null, 16, Je),
        M.value ? (w(), te(le, {
          key: 2,
          to: M.value
        }, [
          Z(b("div", {
            class: fe(["extra-select dropdown", { searching: i(h) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: ve(i(R))
          }, [
            e.search ? (w(), k("div", Ke, [
              Z(b("input", {
                ref_key: "searchNode",
                ref: B,
                class: "extra-select-search",
                "onUpdate:modelValue": s[2] || (s[2] = (C) => pe(f) ? f.value = C : null),
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
                  onClick: E,
                  class: "all-select"
                }, [
                  b("div", Qe, [
                    b("input", {
                      checked: i(_),
                      type: "checkbox"
                    }, null, 8, Ye),
                    b("b", null, z(i(o)("Select all")), 1)
                  ])
                ])) : A("", !0),
                i(d).length > 0 && i(f).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: x,
                  class: "all-select"
                }, [
                  b("div", Ze, [
                    b("input", {
                      checked: i(O),
                      type: "checkbox"
                    }, null, 8, Re),
                    b("b", null, z(i(o)("Select Filtered")), 1)
                  ])
                ])) : A("", !0),
                b("div", {
                  class: "clear",
                  onClick: J
                }, z(i(o)("Clear")), 1)
              ])) : A("", !0),
              i(d).length == 0 ? (w(), k("div", et, z(i(o)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", tt, z(i(o)("Insert at least :n characters", { n: e.minChars })), 1)),
            b("div", Y(i(Fe), { class: "scroller" }), [
              b("div", he(ye(i(Ae))), [
                (w(!0), k($, null, Q(i(Oe), (C) => (w(), k("button", {
                  key: C.index,
                  class: "dropdown-row",
                  onClick: me((F) => c(C.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  b("div", at, [
                    i(a) ? (w(), k("input", {
                      key: 0,
                      checked: i(t).has(C.data.key),
                      type: "checkbox"
                    }, null, 8, nt)) : A("", !0),
                    re(" " + z(C.data.value), 1)
                  ])
                ], 8, lt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [ge, V.value]
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
    const e = l, { options: a } = Se(e.originalNode, U(e, "options"), S([])), { t: n } = be(e.originalNode, U(e, "localization")), t = (D = e.originalNode) == null ? void 0 : D.classList, m = Object.values((J = (I = e.originalNode) == null ? void 0 : I.style) != null ? J : {});
    ke(e.originalNode);
    const o = (E, x = null) => {
      x === !1 ? p.value = "" : p.value = a.map.get(E).value, h.value = !1;
    }, { filterText: p, filteredOptions: r, filterValues: c } = Ce(a, null, o, e.filterFields, e.hardFilterFields), { searchingFlag: f } = _e(
      a,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), d = S(null), g = S(null), h = S(!1), y = S(null), L = function(E) {
      const x = P(E.target);
      x.push(E.target), !x.includes(d.value) && !x.includes(g.value) && (h.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        y.value = P(d.value).find((O) => !!(O instanceof Element && (O.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(O).position))));
      }
      if (y.value == null && (y.value = document.querySelector("body")), e.originalNode) {
        for (let O of t)
          O != "extrasuggest" && d.value.classList.add(O);
        for (let O of m)
          d.value.style[O] = e.originalNode.style[O];
        p.value = e.originalNode.value;
        let _ = P(d.value, "form").pop();
        _ instanceof HTMLElement && _.matches("form") && _.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          V(!0);
        });
      }
      W(() => {
        e.modelValue != null && (p.value = e.modelValue);
      });
      const E = p.value, x = () => {
        p.value = E;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ce(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: B } = Ee(a, S([]), h, d, g, y, e.maxWidth), V = (E = !1) => {
      var x;
      e.originalNode && (E ? p.value = e.originalNode.value : (e.originalNode.value = p.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), v("update:modelValue", p.value);
    };
    de(() => h.value, (E) => {
      E === !1 && V();
    });
    const { list: M, containerProps: j, wrapperProps: R } = we(
      r,
      {
        itemHeight: 32
      }
    );
    return (E, x) => (w(), k($, null, [
      Z(b("input", Y({
        onFocus: x[0] || (x[0] = (_) => h.value = !0),
        onClick: x[1] || (x[1] = (_) => h.value = !0),
        ref_key: "inputNode",
        ref: d,
        "onUpdate:modelValue": x[2] || (x[2] = (_) => pe(p) ? p.value = _ : null),
        class: "extra-select extra-select-input"
      }, E.$attrs), null, 16), [
        [$e, i(p)]
      ]),
      y.value ? (w(), te(le, {
        key: 0,
        to: y.value
      }, [
        Z(b("div", {
          class: fe(["extra-select dropdown", { searching: i(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ve(i(B))
        }, [
          i(p).length >= e.minChars ? (w(), k($, { key: 0 }, [
            i(r).length == 0 ? (w(), k("div", ut, z(i(n)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", it, z(i(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          b("div", Y(i(j), { class: "scroller" }), [
            b("div", he(ye(i(R))), [
              (w(!0), k($, null, Q(i(M), (_) => (w(), k("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: me((O) => o(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                b("div", dt, z(_.data.value), 1)
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
