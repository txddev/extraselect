import { ref as b, watchEffect as D, computed as j, nextTick as le, watchPostEffect as $e, toRef as W, watch as Z, onMounted as de, onUnmounted as fe, openBlock as w, createElementBlock as k, Fragment as q, unref as i, createCommentVNode as A, renderList as Y, createTextVNode as ie, toDisplayString as V, createElementVNode as x, mergeProps as R, createBlock as ae, Teleport as ne, withDirectives as ee, normalizeClass as ve, normalizeStyle as pe, isRef as he, vModelText as Me, normalizeProps as ye, guardReactiveProps as me, withModifiers as ge, vShow as we, vModelDynamic as qe } from "vue";
import { useVirtualList as ke } from "@vueuse/core";
import { empty as Te, offset as Q, getParents as P } from "@txd/utils";
const T = (a) => {
  let d = parseInt(a);
  return d == a ? d : a;
}, je = (a, d, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const s = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, t, y = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const r = a.map.get(l);
      if (r)
        r.value = t, r.data = y;
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
  window.ExtraSelectOptions[e] = s, a.actions = s;
};
let Ie = 1;
const be = (a) => {
  a && (a.style.display = "none", Te(a));
}, Se = (a, d, e, s) => {
  var p;
  const l = b(/* @__PURE__ */ new Map());
  D(() => {
    if (Array.isArray(e.value)) {
      l.value.clear();
      for (let u of e.value)
        l.value.set(u, u);
    }
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let u of t.value)
        t.map.set(u.key, u);
  }, D(() => {
    d.value && (t.value = d.value.map((u) => ({ ...u, key: T(u.key) })), t.rebuildMap());
  }), a) {
    if (l.value.clear(), a.matches("select")) {
      for (let u of Array.apply(null, a.selectedOptions).map((c) => T(c.value)).filter((c) => c != null))
        l.value.set(u, u);
      t.value = Array.apply(null, a.options).reduce((u, c) => (u.push({ value: c.text, key: T(c.value), data: Object.assign({}, c.dataset) }), u), []);
    }
    if (a.matches("input")) {
      let u = a.value;
      u != null && u.length > 0 && (t.value = [{ value: u, key: u }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(s))
    for (let u of s)
      l.value.set(T(u), T(u));
  else
    s != null && l.value.set(T(s), T(s));
  je(t, l, (p = a == null ? void 0 : a.id) != null ? p : "extraselect_" + (++Ie).toString());
  const y = [];
  return l.value.forEach((u, c) => {
    y.push([c, u]);
  }), { options: t, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [u, c] of y)
      l.value.set(u, c);
  } };
};
b({});
function Be(a, d = {}) {
  for (let e in d)
    a = a.replace(`:${e}`, d[e]);
  return a;
}
const Pe = (a = null) => {
  var s, l;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(l = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? l : {} };
  Object.assign(e, a != null ? a : {}), xe(b(e), "defaults");
}, xe = (a, d) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Pe());
  const e = {
    defaultArray: a.value,
    list: () => a.value,
    get: (s) => {
      var l;
      return (l = a.value[s]) != null ? l : null;
    },
    push: (s, l) => {
      a.value[s] = l;
    }
  };
  window.ExtraSelectLocalization[d] = e, a.actions = e;
};
let He = 0;
const Ce = (a, d) => {
  var s;
  return xe(d, (s = a == null ? void 0 : a.id) != null ? s : "extraselect_" + (++He).toString()), { propLocalization: d, t: (l, t = {}) => {
    var r;
    let y = (r = d.value[l]) != null ? r : window.ExtraSelectLocalization.defaults.get(l);
    return y == null && (window.ExtraSelectLocalization.defaults.push(l, l), y = l), Be(y, t);
  } };
}, ce = async function(a, d = null, e = {}) {
  var t;
  const s = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: d, ...e.body })
  };
  return await (await fetch(a, s)).json();
}, _e = (a, d, e, s, l, t, y = "limited", r = {}) => {
  const p = b(0), u = b(!1), c = j(() => u.value || p.value > 0);
  if (d != null && d.length > 0)
    if (e) {
      const f = [];
      D((v) => {
        if (s.value.length >= l) {
          let m = !0;
          switch (y) {
            case "always":
              break;
            default:
            case "limited":
              m = !f.includes(s.value);
              break;
            case "complete":
              m = f.reduce((g, h) => g && !s.value.startsWith(h), !0);
              break;
          }
          if (m) {
            u.value = !0;
            const g = setTimeout(() => {
              f.push(s.value), p.value += 1, r.body = { ...r.body, ...t.value }, ce(d, s.value, r).then((h) => {
                a.actions.addRange(h), a.actions.sort(), p.value -= 1, u.value = !1;
              });
            }, 500);
            v(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      ce(d, null, r).then((f) => {
        a.actions.addRange(f), a.actions.sort();
      });
  return { searchingFlag: c };
}, Ee = (a, d, e, s = [], l = []) => {
  const t = b(""), y = b([]), r = b({}), p = { ...s.reduce((c, f) => (c[f] = !1, c), {}), ...l.reduce((c, f) => (c[f] = !0, c), {}) };
  for (let c in p) {
    let f = p[c], v = document.getElementById(c);
    r.value[c] = v == null ? void 0 : v.value, v && v.addEventListener("change", (m) => {
      r.value[c] = m.target.value, f && le(() => {
        if (d != null)
          for (let g of Array.from(d.value.keys()))
            y.value.find((h) => h.key == g) || e(g, !1);
        else
          y.value.find((g) => g.key == t.value) || e(t.value, !1);
      });
    });
  }
  const u = function(c, f) {
    let v = c.value;
    return Object.keys(r.value).length > 0 && (v = v.filter((m) => {
      var g, h;
      for (let O in r.value)
        if ((p[O] ? !0 : ((g = r.value[O]) != null ? g : "").length > 0) && ((h = m.data) == null ? void 0 : h.hasOwnProperty(O)) && m.data[O] != r.value[O])
          return !1;
      return !0;
    })), f.length > 0 && (v = v.filter((m) => m.value.toLowerCase().includes(f.toLowerCase()))), v;
  };
  return D(() => {
    y.value = u(a, t.value);
  }), { filterText: t, filteredOptions: y, filterValues: r };
}, Le = (a, d, e, s, l, t, y) => {
  const r = getComputedStyle(document.querySelector("body")).font, p = function(f) {
    const m = document.createElement("canvas").getContext("2d");
    return m.font = r, m.measureText(f).width;
  }, u = j(() => {
    var v, m;
    const f = (v = Q(s.value).width) != null ? v : 100;
    if (y === "inherit")
      return f;
    if (y == null || y === "dynamic") {
      const g = (m = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? m : 16;
      return Math.max(f, Math.max(...a.value.map((h) => p(h.value))) + 20 + g * 3);
    }
    return y;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return $e(() => {
    e.value < 0 && console.log("is open"), d.value.size < 0 && console.log("empty selection");
    var f = Q(s.value), v = Q(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var v = Q(t.value);
    let m = -v.left + f.left;
    const g = window.document.documentElement.clientWidth;
    m + u.value > g && (m = g - u.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: u.value.toString() + "px",
      top: (-v.top + f.top + f.height).toString() + "px",
      left: m.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: p };
}, Ue = ["name"], We = {
  key: 1,
  class: "extra-select selection"
}, De = ["onClick"], Je = ["innerHTML"], Ke = ["value", "disabled"], Xe = {
  key: 0,
  class: "input-searching"
}, Ge = ["placeholder"], Qe = {
  key: 0,
  class: "allselect-clear"
}, Ye = { class: "row-input" }, Ze = ["checked"], Re = { class: "row-input" }, et = ["checked"], tt = {
  key: 1,
  class: "no-matches"
}, lt = { key: 2 }, at = ["onClick"], nt = { class: "row-input" }, st = ["checked"], ot = ["value"], rt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, ut = /* @__PURE__ */ Object.assign(rt, {
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
    dropdownContainer: { type: String, default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: d }) {
    var se, oe, re;
    const e = a, s = j(() => {
      var n, o;
      return (o = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? o : e.multiple;
    }), { options: l, selectedOptions: t, onReset: y } = Se(e.originalNode, W(e, "options"), W(e, "modelValue"), e.initialValue), { t: r } = Ce(e.originalNode, W(e, "localization")), p = (se = e.originalNode) == null ? void 0 : se.classList, u = Object.values((re = (oe = e.originalNode) == null ? void 0 : oe.style) != null ? re : {});
    be(e.originalNode);
    const c = (n, o = null) => {
      if (s.value) {
        let L = o;
        switch (L == null && (L = !t.value.has(n)), L) {
          case !0:
            t.value.set(n, n);
            break;
          case !1:
            t.value.delete(n);
            break;
        }
      } else
        t.value.clear(), o !== !1 && t.value.set(n, n), $.value = !1;
      B(Array.from(t.value.keys()));
    }, { filterText: f, filteredOptions: v, filterValues: m } = Ee(l, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: g } = _e(
      l,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), h = b(null), O = b(null), z = b(null), $ = b(!1);
    function H(n) {
      e.disabled || ($.value = n);
    }
    Z(f, () => {
      O.value.querySelector(".scroller").scrollTop = 0;
    });
    const M = b(null), I = function(n) {
      const o = P(n.target);
      o.push(n.target), !o.includes(h.value) && !o.includes(O.value) && ($.value = !1);
    };
    de(() => {
      if (e.dropdownContainer) {
        let n = !1;
        M.value = P(h.value).find((o) => !!(o instanceof Element && (o.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let o of p)
          o != "extraselect" && h.value.classList.add(o);
        for (let o of u)
          h.value.style[o] = e.originalNode.style[o];
        let n = P(h.value, "form").pop();
        n instanceof HTMLElement && n.matches("form") && n.addEventListener("reset", () => setTimeout(y)), e.originalNode.toggleValue = c, e.originalNode.setValues = (o) => {
          t.value.clear();
          for (let L of o)
            c(L);
        };
      }
      window.document.addEventListener("mousedown", I), window.document.addEventListener("focusin", I);
    }), fe(() => {
      window.document.removeEventListener("mousedown", I), window.document.removeEventListener("focusin", I);
    });
    const { dropdownStyle: te, getTextWidth: J } = Le(l, t, $, h, O, M, e.maxWidth), B = (n) => {
      le(
        () => {
          var o;
          return (o = e.originalNode) == null ? void 0 : o.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", n);
    }, K = (n) => {
      E(n, !1), f.value = "";
    }, E = (n, o = null) => {
      o == null && (o = !C.value), o ? (t.value.clear(), l.value.forEach((L) => t.value.set(L.key, L.key))) : t.value.clear(), B(Array.from(t.value.keys()));
    }, S = () => {
      N.value ? v.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : v.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), B(Array.from(t.value.keys()));
    };
    Z($, (n, o) => {
      n != o && (n ? e.search && le(() => {
        z.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const C = j(() => t.value.size == l.value.length), N = j(() => v.value.reduce((n, o) => n && t.value.has(o.key), !0)), Oe = j(() => t.value.size == 0), Ne = j(() => {
      var n, o, L, U, _;
      if (l.value.length < 0)
        return "";
      if (s.value) {
        if (Oe.value)
          return r("No selection");
        if (!e.searchableUrl && C.value)
          return r("All selected");
        const F = h.value ? getComputedStyle(h.value) : null, X = ((n = h.value) == null ? void 0 : n.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let G = r(":n selected - ", { n: t.value.size }), ue = !0;
        for (let ze of t.value)
          if (ue ? ue = !1 : G += ", ", G += (L = (o = l.map.get(ze[0])) == null ? void 0 : o.value) != null ? L : g.value ? r("Loading...") : r("Value not found"), X < J(G))
            return t.value.size + r(" selected");
        return G;
      } else
        for (let F of t.value)
          return (_ = (U = l.map.get(F[0])) == null ? void 0 : U.value) != null ? _ : g.value ? r("Loading...") : r("Value not found");
      return r("No selection");
    }), { list: Fe, containerProps: Ae, wrapperProps: Ve } = ke(
      v,
      {
        itemHeight: 32
      }
    );
    return (n, o) => {
      var L, U;
      return w(), k(q, null, [
        i(s) && i(t).size == 0 ? (w(), k("input", {
          key: 0,
          type: "hidden",
          name: (U = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : U.replace("[]", ""),
          value: ""
        }, null, 8, Ue)) : A("", !0),
        e.showSelected ? (w(), k("div", We, [
          (w(!0), k(q, null, Y(i(t), (_) => {
            var F;
            return w(), k("div", {
              key: _,
              onClick: (X) => c(_[0]),
              class: "selection-badge"
            }, [
              ie(V((F = i(l).find((X) => X.key == _[0])) == null ? void 0 : F.value) + " ", 1),
              x("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Je)
            ], 8, De);
          }), 128))
        ])) : A("", !0),
        x("input", R({
          onFocus: o[0] || (o[0] = (_) => H(!0)),
          onClick: o[1] || (o[1] = (_) => H(!0)),
          ref_key: "inputNode",
          ref: h,
          value: i(Ne),
          class: "extra-select extra-select-input",
          readonly: ""
        }, n.$attrs, { disabled: a.disabled }), null, 16, Ke),
        M.value ? (w(), ae(ne, {
          key: 2,
          to: M.value
        }, [
          ee(x("div", {
            class: ve(["extra-select dropdown", { searching: i(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: O,
            style: pe(i(te))
          }, [
            e.search ? (w(), k("div", Xe, [
              ee(x("input", {
                ref_key: "searchNode",
                ref: z,
                class: "extra-select-search",
                "onUpdate:modelValue": o[2] || (o[2] = (_) => he(f) ? f.value = _ : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: i(r)("Search...")
              }, null, 8, Ge), [
                [Me, i(f)]
              ])
            ])) : A("", !0),
            i(f).length >= e.minChars ? (w(), k(q, { key: 1 }, [
              i(s) ? (w(), k("div", Qe, [
                i(f).length == 0 ? (w(), k("div", {
                  key: 0,
                  onClick: E,
                  class: "all-select"
                }, [
                  x("div", Ye, [
                    x("input", {
                      checked: i(C),
                      type: "checkbox"
                    }, null, 8, Ze),
                    x("b", null, V(i(r)("Select all")), 1)
                  ])
                ])) : A("", !0),
                i(v).length > 0 && i(f).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: S,
                  class: "all-select"
                }, [
                  x("div", Re, [
                    x("input", {
                      checked: i(N),
                      type: "checkbox"
                    }, null, 8, et),
                    x("b", null, V(i(r)("Select Filtered")), 1)
                  ])
                ])) : A("", !0),
                x("div", {
                  class: "clear",
                  onClick: K
                }, V(i(r)("Clear")), 1)
              ])) : A("", !0),
              i(v).length == 0 ? (w(), k("div", tt, V(i(r)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", lt, V(i(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            x("div", R(i(Ae), { class: "scroller" }), [
              x("div", ye(me(i(Ve))), [
                (w(!0), k(q, null, Y(i(Fe), (_) => (w(), k("button", {
                  key: _.index,
                  class: "dropdown-row",
                  onClick: ge((F) => c(_.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", nt, [
                    i(s) ? (w(), k("input", {
                      key: 0,
                      checked: i(t).has(_.data.key),
                      type: "checkbox"
                    }, null, 8, st)) : A("", !0),
                    ie(" " + V(_.data.value), 1)
                  ])
                ], 8, at))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [we, $.value]
          ])
        ], 8, ["to"])) : A("", !0),
        e.originalNode ? (w(), ae(ne, {
          key: 3,
          to: e.originalNode
        }, [
          (w(!0), k(q, null, Y(i(t), (_) => (w(), k("option", {
            key: _[0],
            selected: "selected",
            value: _[0]
          }, null, 8, ot))), 128))
        ], 8, ["to"])) : A("", !0)
      ], 64);
    };
  }
}), it = ["disabled"], ct = {
  key: 0,
  class: "no-matches"
}, dt = { key: 1 }, ft = ["onClick"], vt = { class: "row-input" }, pt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, ht = /* @__PURE__ */ Object.assign(pt, {
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
    dropdownContainer: { type: String, default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: d }) {
    var J, B, K;
    const e = a, { options: s } = Se(e.originalNode, W(e, "options"), b([])), { t: l } = Ce(e.originalNode, W(e, "localization")), t = (J = e.originalNode) == null ? void 0 : J.classList, y = Object.values((K = (B = e.originalNode) == null ? void 0 : B.style) != null ? K : {});
    be(e.originalNode);
    const r = (E, S = null) => {
      S === !1 ? p.value = "" : p.value = s.map.get(E).value, g.value = !1;
    }, { filterText: p, filteredOptions: u, filterValues: c } = Ee(s, null, r, e.filterFields, e.hardFilterFields), { searchingFlag: f } = _e(
      s,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), v = b(null), m = b(null), g = b(!1), h = b(null);
    function O(E) {
      e.disabled || (g.value = E);
    }
    Z(p, () => {
      m.value.querySelector(".scroller").scrollTop = 0;
    });
    const z = function(E) {
      const S = P(E.target);
      S.push(E.target), !S.includes(v.value) && !S.includes(m.value) && (g.value = !1);
    };
    de(() => {
      if (e.dropdownContainer) {
        let C = !1;
        h.value = P(v.value).find((N) => !!(N instanceof Element && (N.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let N of t)
          N != "extrasuggest" && v.value.classList.add(N);
        for (let N of y)
          v.value.style[N] = e.originalNode.style[N];
        p.value = e.originalNode.value;
        let C = P(v.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          H(!0);
        });
      }
      D(() => {
        e.modelValue != null && (p.value = e.modelValue);
      });
      const E = p.value, S = () => {
        p.value = E;
      };
      window.document.addEventListener("mousedown", z), window.document.addEventListener("focusin", z);
    }), fe(() => {
      window.document.removeEventListener("mousedown", z), window.document.removeEventListener("focusin", z);
    });
    const { dropdownStyle: $ } = Le(s, b([]), g, v, m, h, e.maxWidth), H = (E = !1) => {
      var S;
      e.originalNode && (E ? p.value = e.originalNode.value : (e.originalNode.value = p.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), d("update:modelValue", p.value);
    };
    Z(() => g.value, (E) => {
      E === !1 && H();
    });
    const { list: M, containerProps: I, wrapperProps: te } = ke(
      u,
      {
        itemHeight: 32
      }
    );
    return (E, S) => (w(), k(q, null, [
      ee(x("input", R({
        onFocus: S[0] || (S[0] = (C) => O(!0)),
        onClick: S[1] || (S[1] = (C) => O(!0)),
        ref_key: "inputNode",
        ref: v,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => he(p) ? p.value = C : null),
        class: "extra-select extra-select-input"
      }, E.$attrs, { disabled: a.disabled }), null, 16, it), [
        [qe, i(p)]
      ]),
      h.value ? (w(), ae(ne, {
        key: 0,
        to: h.value
      }, [
        ee(x("div", {
          class: ve(["extra-select dropdown", { searching: i(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: pe(i($))
        }, [
          i(p).length >= e.minChars ? (w(), k(q, { key: 0 }, [
            i(u).length == 0 ? (w(), k("div", ct, V(i(l)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", dt, V(i(l)("Insert at least :n characters", { n: e.minChars })), 1)),
          x("div", R(i(I), { class: "scroller" }), [
            x("div", ye(me(i(te))), [
              (w(!0), k(q, null, Y(i(M), (C) => (w(), k("button", {
                key: C.index,
                class: "dropdown-row",
                onClick: ge((N) => r(C.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", vt, V(C.data.value), 1)
              ], 8, ft))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [we, g.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), wt = ut, kt = ht;
export {
  wt as ExtraSelect,
  kt as ExtraSuggest,
  wt as default
};
