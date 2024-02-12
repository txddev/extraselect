import { ref as S, watchEffect as W, computed as T, nextTick as ee, watchPostEffect as ze, toRef as U, onMounted as ie, onUnmounted as ce, watch as de, openBlock as w, createElementBlock as k, Fragment as $, unref as i, createCommentVNode as A, renderList as Q, createTextVNode as re, toDisplayString as z, createElementVNode as b, mergeProps as Y, createBlock as te, Teleport as le, withDirectives as Z, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as Me, normalizeProps as he, guardReactiveProps as me, withModifiers as ye, vShow as ge, vModelDynamic as $e } from "vue";
import { useVirtualList as we } from "@vueuse/core";
import { empty as qe, offset as G, getParents as P } from "@txd/utils";
const q = (a) => {
  let d = parseInt(a);
  return d == a ? d : a;
}, Te = (a, d, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const n = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, t, y = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const o = a.map.get(l);
      if (o)
        o.value = t, o.data = y;
      else {
        let p = { value: t, key: l, data: y };
        a.value.push(p), a.map.set(p.key, p);
      }
    },
    addRange: (l) => {
      for (let t of l)
        a.actions.push(t.key, t.value, t.data);
    },
    remove: (l) => {
      a.value.splice(a.value.findIndex((t) => t.key == l), 1);
    },
    clear: () => {
      a.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (t, y) => t.value.localeCompare(y.value)), a.value = a.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      a.value = this.defaultArray;
    },
    filter: function(l) {
    },
    selection: {
      get() {
        return d.value;
      },
      clear() {
        d.value.clear();
      },
      add(l) {
        d.value.set(l, l);
      },
      remove(l) {
        d.value.delete(l);
      }
    }
  };
  window.ExtraSelectOptions[e] = n, a.actions = n;
};
let je = 1;
const ke = (a) => {
  a && (a.style.display = "none", qe(a));
}, Se = (a, d, e, n) => {
  var p;
  const l = S(/* @__PURE__ */ new Map());
  W(() => {
    if (Array.isArray(e.value)) {
      l.value.clear();
      for (let r of e.value)
        l.value.set(r, r);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let r of t.value)
        t.map.set(r.key, r);
  }, W(() => {
    d.value && (t.value = d.value.map((r) => ({ ...r, key: q(r.key) })), t.rebuildMap());
  }), a) {
    if (l.value.clear(), a.matches("select")) {
      for (let r of Array.apply(null, a.selectedOptions).map((c) => q(c.value)).filter((c) => c != null))
        l.value.set(r, r);
      t.value = Array.apply(null, a.options).reduce((r, c) => (r.push({ value: c.text, key: q(c.value), data: Object.assign({}, c.dataset) }), r), []);
    }
    if (a.matches("input")) {
      let r = a.value;
      r != null && r.length > 0 && (t.value = [{ value: r, key: r }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(n))
    for (let r of n)
      l.value.set(q(r), q(r));
  else
    n != null && l.value.set(q(n), q(n));
  Te(t, l, (p = a == null ? void 0 : a.id) != null ? p : "extraselect_" + (++je).toString());
  const y = [];
  return l.value.forEach((r, c) => {
    y.push([c, r]);
  }), { options: t, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [r, c] of y)
      l.value.set(r, c);
  } };
};
S({});
function Ie(a, d = {}) {
  for (let e in d)
    a = a.replace(`:${e}`, d[e]);
  return a;
}
const Pe = (a = null) => {
  var n, l;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(l = (n = window.ExtraSelectLocalization.defaults) == null ? void 0 : n.defaultArray) != null ? l : {} };
  Object.assign(e, a != null ? a : {}), xe(S(e), "defaults");
}, xe = (a, d) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Pe());
  const e = {
    defaultArray: a.value,
    list: () => a.value,
    get: (n) => {
      var l;
      return (l = a.value[n]) != null ? l : null;
    },
    push: (n, l) => {
      a.value[n] = l;
    }
  };
  window.ExtraSelectLocalization[d] = e, a.actions = e;
};
let Be = 0;
const be = (a, d) => {
  var n;
  return xe(d, (n = a == null ? void 0 : a.id) != null ? n : "extraselect_" + (++Be).toString()), { propLocalization: d, t: (l, t = {}) => {
    var o;
    let y = (o = d.value[l]) != null ? o : window.ExtraSelectLocalization.defaults.get(l);
    return y == null && (window.ExtraSelectLocalization.defaults.push(l, l), y = l), Ie(y, t);
  } };
}, ue = async function(a, d = null, e = {}) {
  var t;
  const n = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: d, ...e.body })
  };
  return await (await fetch(a, n)).json();
}, _e = (a, d, e, n, l, t, y = "limited", o = {}) => {
  const p = S(0), r = S(!1), c = T(() => r.value || p.value > 0);
  if (d != null && d.length > 0)
    if (e) {
      const v = [];
      W((f) => {
        if (n.value.length >= l) {
          let g = !0;
          switch (y) {
            case "always":
              break;
            default:
            case "limited":
              g = !v.includes(n.value);
              break;
            case "complete":
              g = v.reduce((h, m) => h && !n.value.startsWith(m), !0);
              break;
          }
          if (g) {
            r.value = !0;
            const h = setTimeout(() => {
              v.push(n.value), p.value += 1, o.body = { ...o.body, ...t.value }, ue(d, n.value, o).then((m) => {
                a.actions.addRange(m), a.actions.sort(), p.value -= 1, r.value = !1;
              });
            }, 500);
            f(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      ue(d, null, o).then((v) => {
        a.actions.addRange(v), a.actions.sort();
      });
  return { searchingFlag: c };
}, Ce = (a, d, e, n = [], l = []) => {
  const t = S(""), y = S([]), o = S({}), p = { ...n.reduce((c, v) => (c[v] = !1, c), {}), ...l.reduce((c, v) => (c[v] = !0, c), {}) };
  for (let c in p) {
    let v = p[c], f = document.getElementById(c);
    o.value[c] = f == null ? void 0 : f.value, f && f.addEventListener("change", (g) => {
      o.value[c] = g.target.value, v && ee(() => {
        if (d != null)
          for (let h of Array.from(d.value.keys()))
            y.value.find((m) => m.key == h) || e(h, !1);
        else
          y.value.find((h) => h.key == t.value) || e(t.value, !1);
      });
    });
  }
  const r = function(c, v) {
    let f = c.value;
    return Object.keys(o.value).length > 0 && (f = f.filter((g) => {
      var h, m;
      for (let L in o.value)
        if ((p[L] ? !0 : ((h = o.value[L]) != null ? h : "").length > 0) && ((m = g.data) == null ? void 0 : m.hasOwnProperty(L)) && g.data[L] != o.value[L])
          return !1;
      return !0;
    })), v.length > 0 && (f = f.filter((g) => g.value.toLowerCase().includes(v.toLowerCase()))), f;
  };
  return W(() => {
    y.value = r(a, t.value);
  }), { filterText: t, filteredOptions: y, filterValues: o };
}, Ee = (a, d, e, n, l, t, y) => {
  const o = getComputedStyle(document.querySelector("body")).font, p = function(v) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = o, g.measureText(v).width;
  }, r = T(() => {
    var f, g;
    const v = (f = G(n.value).width) != null ? f : 100;
    if (y === "inherit")
      return v;
    if (y == null || y === "dynamic") {
      const h = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(v, Math.max(...a.value.map((m) => p(m.value))) + 20 + h * 3);
    }
    return y;
  }), c = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return ze(() => {
    e.value < 0 && console.log("is open"), d.value.size < 0 && console.log("empty selection");
    var v = G(n.value), f = G(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var f = G(t.value);
    let g = -f.left + v.left;
    const h = window.document.documentElement.clientWidth;
    g + r.value > h && (g = h - r.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-f.top + v.top + v.height).toString() + "px",
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
  setup(a, { emit: d }) {
    var ae, ne, se;
    const e = a, n = T(() => {
      var u, s;
      return (s = (u = e.originalNode) == null ? void 0 : u.multiple) != null ? s : e.multiple;
    }), { options: l, selectedOptions: t, onReset: y } = Se(e.originalNode, U(e, "options"), U(e, "modelValue"), e.initialValue), { t: o } = be(e.originalNode, U(e, "localization")), p = (ae = e.originalNode) == null ? void 0 : ae.classList, r = Object.values((se = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? se : {});
    ke(e.originalNode);
    const c = (u, s = null) => {
      if (n.value) {
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
    }, { filterText: v, filteredOptions: f, filterValues: g } = Ce(l, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: h } = _e(
      l,
      e.url,
      e.searchableUrl,
      v,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), m = S(null), L = S(null), B = S(null), V = S(!1), M = S(null), j = function(u) {
      const s = P(u.target);
      s.push(u.target), !s.includes(m.value) && !s.includes(L.value) && (V.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let u = !1;
        M.value = P(m.value).find((s) => !!(s instanceof Element && (s.matches(e.dropdownContainer) && (u = !0), u && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(s).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let s of p)
          s != "extraselect" && m.value.classList.add(s);
        for (let s of r)
          m.value.style[s] = e.originalNode.style[s];
        let u = P(m.value, "form").pop();
        u instanceof HTMLElement && u.matches("form") && u.addEventListener("reset", () => setTimeout(y)), e.originalNode.toggleValue = c, e.originalNode.setValues = (s) => {
          t.value.clear();
          for (let N of s)
            c(N);
        };
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ce(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: R, getTextWidth: D } = Ee(l, t, V, m, L, M, e.maxWidth), I = (u) => {
      ee(
        () => {
          var s;
          return (s = e.originalNode) == null ? void 0 : s.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", u);
    }, J = (u) => {
      E(u, !1), v.value = "";
    }, E = (u, s = null) => {
      s == null && (s = !_.value), s ? (t.value.clear(), l.value.forEach((N) => t.value.set(N.key, N.key))) : t.value.clear(), I(Array.from(t.value.keys()));
    }, x = () => {
      O.value ? f.value.forEach((u) => {
        t.value.has(u.key) && t.value.delete(u.key);
      }) : f.value.forEach((u) => {
        t.value.has(u.key) || t.value.set(u.key, u.key);
      }), I(Array.from(t.value.keys()));
    };
    de(V, (u, s) => {
      u != s && (u ? e.search && ee(() => {
        B.value.focus({ focusVisible: !0 });
      }) : v.value = "");
    });
    const _ = T(() => t.value.size == l.value.length), O = T(() => f.value.reduce((u, s) => u && t.value.has(s.key), !0)), Le = T(() => t.value.size == 0), Ne = T(() => {
      var u, s, N, H, C;
      if (l.value.length < 0)
        return "";
      if (n.value) {
        if (Le.value)
          return o("No selection");
        if (!e.searchableUrl && _.value)
          return o("All selected");
        const F = m.value ? getComputedStyle(m.value) : null, K = ((u = m.value) == null ? void 0 : u.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let X = o(":n selected - ", { n: t.value.size }), oe = !0;
        for (let Ve of t.value)
          if (oe ? oe = !1 : X += ", ", X += (N = (s = l.map.get(Ve[0])) == null ? void 0 : s.value) != null ? N : h.value ? o("Loading...") : o("Value not found"), K < D(X))
            return t.value.size + o(" selected");
        return X;
      } else
        for (let F of t.value)
          return (C = (H = l.map.get(F[0])) == null ? void 0 : H.value) != null ? C : h.value ? o("Loading...") : o("Value not found");
      return o("No selection");
    }), { list: Oe, containerProps: Fe, wrapperProps: Ae } = we(
      f,
      {
        itemHeight: 32
      }
    );
    return (u, s) => {
      var N, H;
      return w(), k($, null, [
        i(n) && i(t).size == 0 ? (w(), k("input", {
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
              re(z((F = i(l).find((K) => K.key == C[0])) == null ? void 0 : F.value) + " ", 1),
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
          ref: m,
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
                "onUpdate:modelValue": s[2] || (s[2] = (C) => pe(v) ? v.value = C : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: i(o)("Search...")
              }, null, 8, Xe), [
                [Me, i(v)]
              ])
            ])) : A("", !0),
            i(v).length >= e.minChars ? (w(), k($, { key: 1 }, [
              i(n) ? (w(), k("div", Ge, [
                i(v).length == 0 ? (w(), k("div", {
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
                i(f).length > 0 && i(v).length > 0 ? (w(), k("div", {
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
              i(f).length == 0 ? (w(), k("div", et, z(i(o)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", tt, z(i(o)("Insert at least :n characters", { n: e.minChars })), 1)),
            b("div", Y(i(Fe), { class: "scroller" }), [
              b("div", he(me(i(Ae))), [
                (w(!0), k($, null, Q(i(Oe), (C) => (w(), k("button", {
                  key: C.index,
                  class: "dropdown-row",
                  onClick: ye((F) => c(C.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  b("div", at, [
                    i(n) ? (w(), k("input", {
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
  setup(a, { emit: d }) {
    var D, I, J;
    const e = a, { options: n } = Se(e.originalNode, U(e, "options"), S([])), { t: l } = be(e.originalNode, U(e, "localization")), t = (D = e.originalNode) == null ? void 0 : D.classList, y = Object.values((J = (I = e.originalNode) == null ? void 0 : I.style) != null ? J : {});
    ke(e.originalNode);
    const o = (E, x = null) => {
      x === !1 ? p.value = "" : p.value = n.map.get(E).value, h.value = !1;
    }, { filterText: p, filteredOptions: r, filterValues: c } = Ce(n, null, o, e.filterFields, e.hardFilterFields), { searchingFlag: v } = _e(
      n,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), f = S(null), g = S(null), h = S(!1), m = S(null), L = function(E) {
      const x = P(E.target);
      x.push(E.target), !x.includes(f.value) && !x.includes(g.value) && (h.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        m.value = P(f.value).find((O) => !!(O instanceof Element && (O.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(O).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let O of t)
          O != "extrasuggest" && f.value.classList.add(O);
        for (let O of y)
          f.value.style[O] = e.originalNode.style[O];
        p.value = e.originalNode.value;
        let _ = P(f.value, "form").pop();
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
    const { dropdownStyle: B } = Ee(n, S([]), h, f, g, m, e.maxWidth), V = (E = !1) => {
      var x;
      e.originalNode && (E ? p.value = e.originalNode.value : (e.originalNode.value = p.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), d("update:modelValue", p.value);
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
        ref: f,
        "onUpdate:modelValue": x[2] || (x[2] = (_) => pe(p) ? p.value = _ : null),
        class: "extra-select extra-select-input"
      }, E.$attrs), null, 16), [
        [$e, i(p)]
      ]),
      m.value ? (w(), te(le, {
        key: 0,
        to: m.value
      }, [
        Z(b("div", {
          class: fe(["extra-select dropdown", { searching: i(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ve(i(B))
        }, [
          i(p).length >= e.minChars ? (w(), k($, { key: 0 }, [
            i(r).length == 0 ? (w(), k("div", ut, z(i(l)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", it, z(i(l)("Insert at least :n characters", { n: e.minChars })), 1)),
          b("div", Y(i(j), { class: "scroller" }), [
            b("div", he(me(i(R))), [
              (w(!0), k($, null, Q(i(M), (_) => (w(), k("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: ye((O) => o(_.data.key), ["stop", "prevent"]),
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
}), yt = rt, gt = vt;
export {
  yt as ExtraSelect,
  gt as ExtraSuggest,
  yt as default
};
