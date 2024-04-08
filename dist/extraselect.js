import { ref as b, watchEffect as J, computed as j, nextTick as ae, watchPostEffect as $e, toRef as D, watch as R, onMounted as fe, onUnmounted as ve, openBlock as w, createElementBlock as k, Fragment as T, unref as u, createCommentVNode as A, renderList as Z, withModifiers as q, createTextVNode as ce, toDisplayString as V, createElementVNode as _, mergeProps as ee, createBlock as ne, Teleport as se, withDirectives as te, normalizeClass as pe, normalizeStyle as he, isRef as me, vModelText as Me, normalizeProps as ye, guardReactiveProps as ge, vShow as we, vModelDynamic as qe } from "vue";
import { useVirtualList as ke } from "@vueuse/core";
import { empty as Te, offset as Y, getParents as H } from "@txd/utils";
const I = (a) => {
  let d = parseInt(a);
  return d == a ? d : a;
}, Ie = (a, d, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const s = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, t, m = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const r = a.map.get(l);
      if (r)
        r.value = t, r.data = m;
      else {
        let p = { value: t, key: l, data: m };
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
      l == null && (l = (t, m) => t.value.localeCompare(m.value)), a.value = a.value.sort(l);
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
let je = 1;
const be = (a) => {
  a && (a.style.display = "none", Te(a));
}, Se = (a, d, e, s) => {
  var p;
  const l = b(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      l.value.clear();
      for (let i of e.value)
        l.value.set(i, i);
    }
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let i of t.value)
        t.map.set(i.key, i);
  }, J(() => {
    d.value && (t.value = d.value.map((i) => ({ ...i, key: I(i.key) })), t.rebuildMap());
  }), a) {
    if (l.value.clear(), a.matches("select")) {
      for (let i of Array.apply(null, a.selectedOptions).map((c) => I(c.value)).filter((c) => c != null))
        l.value.set(i, i);
      t.value = Array.apply(null, a.options).reduce((i, c) => (i.push({ value: c.text, key: I(c.value), data: Object.assign({}, c.dataset) }), i), []);
    }
    if (a.matches("input")) {
      let i = a.value;
      i != null && i.length > 0 && (t.value = [{ value: i, key: i }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(s))
    for (let i of s)
      l.value.set(I(i), I(i));
  else
    s != null && l.value.set(I(s), I(s));
  Ie(t, l, (p = a == null ? void 0 : a.id) != null ? p : "extraselect_" + (++je).toString());
  const m = [];
  return l.value.forEach((i, c) => {
    m.push([c, i]);
  }), { options: t, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [i, c] of m)
      l.value.set(i, c);
  } };
};
b({});
function Pe(a, d = {}) {
  for (let e in d)
    a = a.replace(`:${e}`, d[e]);
  return a;
}
const Be = (a = null) => {
  var s, l;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(l = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? l : {} };
  Object.assign(e, a != null ? a : {}), xe(b(e), "defaults");
}, xe = (a, d) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Be());
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
const _e = (a, d) => {
  var s;
  return xe(d, (s = a == null ? void 0 : a.id) != null ? s : "extraselect_" + (++He).toString()), { propLocalization: d, t: (l, t = {}) => {
    var r;
    let m = (r = d.value[l]) != null ? r : window.ExtraSelectLocalization.defaults.get(l);
    return m == null && (window.ExtraSelectLocalization.defaults.push(l, l), m = l), Pe(m, t);
  } };
}, de = async function(a, d = null, e = {}) {
  var t;
  const s = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: d, ...e.body })
  };
  return await (await fetch(a, s)).json();
}, Ce = (a, d, e, s, l, t, m = "limited", r = {}) => {
  const p = b(0), i = b(!1), c = j(() => i.value || p.value > 0);
  if (d != null && d.length > 0)
    if (e) {
      const f = [];
      J((v) => {
        if (s.value.length >= l) {
          let y = !0;
          switch (m) {
            case "always":
              break;
            default:
            case "limited":
              y = !f.includes(s.value);
              break;
            case "complete":
              y = f.reduce((g, h) => g && !s.value.startsWith(h), !0);
              break;
          }
          if (y) {
            i.value = !0;
            const g = setTimeout(() => {
              f.push(s.value), p.value += 1, r.body = { ...r.body, ...t.value }, de(d, s.value, r).then((h) => {
                a.actions.addRange(h), a.actions.sort(), p.value -= 1, i.value = !1;
              });
            }, 500);
            v(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      de(d, null, r).then((f) => {
        a.actions.addRange(f), a.actions.sort();
      });
  return { searchingFlag: c };
}, Ee = (a, d, e, s = [], l = []) => {
  const t = b(""), m = b([]), r = b({}), p = { ...s.reduce((c, f) => (c[f] = !1, c), {}), ...l.reduce((c, f) => (c[f] = !0, c), {}) };
  for (let c in p) {
    let f = p[c], v = document.getElementById(c);
    r.value[c] = v == null ? void 0 : v.value, v && v.addEventListener("change", (y) => {
      r.value[c] = y.target.value, f && ae(() => {
        if (d != null)
          for (let g of Array.from(d.value.keys()))
            m.value.find((h) => h.key == g) || e(g, !1);
        else
          m.value.find((g) => g.key == t.value) || e(t.value, !1);
      });
    });
  }
  const i = function(c, f) {
    let v = c.value;
    return Object.keys(r.value).length > 0 && (v = v.filter((y) => {
      var g, h;
      for (let O in r.value)
        if ((p[O] ? !0 : ((g = r.value[O]) != null ? g : "").length > 0) && ((h = y.data) == null ? void 0 : h.hasOwnProperty(O)) && y.data[O] != r.value[O])
          return !1;
      return !0;
    })), f.length > 0 && (v = v.filter((y) => y.value.toLowerCase().includes(f.toLowerCase()))), v;
  };
  return J(() => {
    m.value = i(a, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: r };
}, Le = (a, d, e, s, l, t, m) => {
  const r = getComputedStyle(document.querySelector("body")).font, p = function(f) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = r, y.measureText(f).width;
  }, i = j(() => {
    var v, y;
    const f = (v = Y(s.value).width) != null ? v : 100;
    if (m === "inherit")
      return f;
    if (m == null || m === "dynamic") {
      const g = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(f, Math.max(...a.value.map((h) => p(h.value))) + 20 + g * 3);
    }
    return m;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return $e(() => {
    e.value < 0 && console.log("is open"), d.value.size < 0 && console.log("empty selection");
    var f = Y(s.value), v = Y(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var v = Y(t.value);
    let y = -v.left + f.left;
    const g = window.document.documentElement.clientWidth;
    y + i.value > g && (y = g - i.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-v.top + f.top + f.height).toString() + "px",
      left: y.toString() + "px"
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
}, Ye = ["onClick"], Ze = { class: "row-input" }, Re = ["checked"], et = ["onClick"], tt = { class: "row-input" }, lt = ["checked"], at = ["onClick"], nt = {
  key: 1,
  class: "no-matches"
}, st = { key: 2 }, ot = ["onClick"], rt = { class: "row-input" }, it = ["checked"], ut = ["value"], ct = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, dt = /* @__PURE__ */ Object.assign(ct, {
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
    var oe, re, ie;
    const e = a, s = j(() => {
      var n, o;
      return (o = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? o : e.multiple;
    }), { options: l, selectedOptions: t, onReset: m } = Se(e.originalNode, D(e, "options"), D(e, "modelValue"), e.initialValue), { t: r } = _e(e.originalNode, D(e, "localization")), p = (oe = e.originalNode) == null ? void 0 : oe.classList, i = Object.values((ie = (re = e.originalNode) == null ? void 0 : re.style) != null ? ie : {});
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
    }, { filterText: f, filteredOptions: v, filterValues: y } = Ee(l, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: g } = Ce(
      l,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), h = b(null), O = b(null), z = b(null), $ = b(!1);
    function U(n) {
      e.disabled || ($.value = n);
    }
    R(f, () => {
      O.value.querySelector(".scroller").scrollTop = 0;
    });
    const M = b(null), P = function(n) {
      const o = H(n.target);
      o.push(n.target), !o.includes(h.value) && !o.includes(O.value) ? $.value = !1 : (n.stopImmediatePropagation(), n.preventDefault());
    };
    fe(() => {
      if (e.dropdownContainer) {
        let n = !1;
        M.value = H(h.value).find((o) => !!(o instanceof Element && (o.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let o of p)
          o != "extraselect" && h.value.classList.add(o);
        for (let o of i)
          h.value.style[o] = e.originalNode.style[o];
        let n = H(h.value, "form").pop();
        n instanceof HTMLElement && n.matches("form") && n.addEventListener("reset", () => setTimeout(m)), e.originalNode.toggleValue = c, e.originalNode.setValues = (o) => {
          t.value.clear();
          for (let L of o)
            c(L);
        };
      }
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), ve(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { dropdownStyle: le, getTextWidth: K } = Le(l, t, $, h, O, M, e.maxWidth), B = (n) => {
      ae(
        () => {
          var o;
          return (o = e.originalNode) == null ? void 0 : o.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", n);
    }, X = (n) => {
      S(n, !1), f.value = "";
    }, S = (n, o = null) => {
      o == null && (o = !C.value), o ? (t.value.clear(), l.value.forEach((L) => t.value.set(L.key, L.key))) : t.value.clear(), B(Array.from(t.value.keys()));
    }, x = () => {
      N.value ? v.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : v.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), B(Array.from(t.value.keys()));
    };
    R($, (n, o) => {
      n != o && (n ? e.search && ae(() => {
        z.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const C = j(() => t.value.size == l.value.length), N = j(() => v.value.reduce((n, o) => n && t.value.has(o.key), !0)), Oe = j(() => t.value.size == 0), Ne = j(() => {
      var n, o, L, W, E;
      if (l.value.length < 0)
        return "";
      if (s.value) {
        if (Oe.value)
          return r("No selection");
        if (!e.searchableUrl && C.value)
          return r("All selected");
        const F = h.value ? getComputedStyle(h.value) : null, G = ((n = h.value) == null ? void 0 : n.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let Q = r(":n selected - ", { n: t.value.size }), ue = !0;
        for (let ze of t.value)
          if (ue ? ue = !1 : Q += ", ", Q += (L = (o = l.map.get(ze[0])) == null ? void 0 : o.value) != null ? L : g.value ? r("Loading...") : r("Value not found"), G < K(Q))
            return t.value.size + r(" selected");
        return Q;
      } else
        for (let F of t.value)
          return (E = (W = l.map.get(F[0])) == null ? void 0 : W.value) != null ? E : g.value ? r("Loading...") : r("Value not found");
      return r("No selection");
    }), { list: Fe, containerProps: Ae, wrapperProps: Ve } = ke(
      v,
      {
        itemHeight: 32
      }
    );
    return (n, o) => {
      var L, W;
      return w(), k(T, null, [
        u(s) && u(t).size == 0 ? (w(), k("input", {
          key: 0,
          type: "hidden",
          name: (W = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : W.replace("[]", ""),
          value: ""
        }, null, 8, Ue)) : A("", !0),
        e.showSelected ? (w(), k("div", We, [
          (w(!0), k(T, null, Z(u(t), (E) => {
            var F;
            return w(), k("div", {
              key: E,
              onClick: q((G) => c(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ce(V((F = u(l).find((G) => G.key == E[0])) == null ? void 0 : F.value) + " ", 1),
              _("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Je)
            ], 8, De);
          }), 128))
        ])) : A("", !0),
        _("input", ee({
          onFocus: o[0] || (o[0] = (E) => U(!0)),
          onClick: o[1] || (o[1] = q((E) => U(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: h,
          value: u(Ne),
          class: "extra-select extra-select-input",
          readonly: ""
        }, n.$attrs, { disabled: a.disabled }), null, 16, Ke),
        M.value ? (w(), ne(se, {
          key: 2,
          to: M.value
        }, [
          te(_("div", {
            class: pe(["extra-select dropdown", { searching: u(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: O,
            style: he(u(le))
          }, [
            e.search ? (w(), k("div", Xe, [
              te(_("input", {
                ref_key: "searchNode",
                ref: z,
                class: "extra-select-search",
                "onUpdate:modelValue": o[2] || (o[2] = (E) => me(f) ? f.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: u(r)("Search...")
              }, null, 8, Ge), [
                [Me, u(f)]
              ])
            ])) : A("", !0),
            u(f).length >= e.minChars ? (w(), k(T, { key: 1 }, [
              u(s) ? (w(), k("div", Qe, [
                u(f).length == 0 ? (w(), k("div", {
                  key: 0,
                  onClick: q(S, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Ze, [
                    _("input", {
                      checked: u(C),
                      type: "checkbox"
                    }, null, 8, Re),
                    _("b", null, V(u(r)("Select all")), 1)
                  ])
                ], 8, Ye)) : A("", !0),
                u(v).length > 0 && u(f).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: q(x, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", tt, [
                    _("input", {
                      checked: u(N),
                      type: "checkbox"
                    }, null, 8, lt),
                    _("b", null, V(u(r)("Select Filtered")), 1)
                  ])
                ], 8, et)) : A("", !0),
                _("div", {
                  class: "clear",
                  onClick: q(X, ["stop", "prevent"])
                }, V(u(r)("Clear")), 9, at)
              ])) : A("", !0),
              u(v).length == 0 ? (w(), k("div", nt, V(u(r)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", st, V(u(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", ee(u(Ae), { class: "scroller" }), [
              _("div", ye(ge(u(Ve))), [
                (w(!0), k(T, null, Z(u(Fe), (E) => (w(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: q((F) => c(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", rt, [
                    u(s) ? (w(), k("input", {
                      key: 0,
                      checked: u(t).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, it)) : A("", !0),
                    ce(" " + V(E.data.value), 1)
                  ])
                ], 8, ot))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [we, $.value]
          ])
        ], 8, ["to"])) : A("", !0),
        e.originalNode ? (w(), ne(se, {
          key: 3,
          to: e.originalNode
        }, [
          (w(!0), k(T, null, Z(u(t), (E) => (w(), k("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, ut))), 128))
        ], 8, ["to"])) : A("", !0)
      ], 64);
    };
  }
}), ft = ["disabled"], vt = {
  key: 0,
  class: "no-matches"
}, pt = { key: 1 }, ht = ["onClick"], mt = { class: "row-input" }, yt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, gt = /* @__PURE__ */ Object.assign(yt, {
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
    var K, B, X;
    const e = a, { options: s } = Se(e.originalNode, D(e, "options"), b([])), { t: l } = _e(e.originalNode, D(e, "localization")), t = (K = e.originalNode) == null ? void 0 : K.classList, m = Object.values((X = (B = e.originalNode) == null ? void 0 : B.style) != null ? X : {});
    be(e.originalNode);
    const r = (S, x = null) => {
      x === !1 ? p.value = "" : p.value = s.map.get(S).value, g.value = !1;
    }, { filterText: p, filteredOptions: i, filterValues: c } = Ee(s, null, r, e.filterFields, e.hardFilterFields), { searchingFlag: f } = Ce(
      s,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), v = b(null), y = b(null), g = b(!1), h = b(null);
    function O(S) {
      e.disabled || (g.value = S);
    }
    R(p, () => {
      y.value.querySelector(".scroller").scrollTop = 0;
    });
    const z = function(S) {
      const x = H(S.target);
      x.push(S.target), !x.includes(v.value) && !x.includes(y.value) ? g.value = !1 : (S.stopImmediatePropagation(), S.preventDefault());
    };
    fe(() => {
      if (e.dropdownContainer) {
        let C = !1;
        h.value = H(v.value).find((N) => !!(N instanceof Element && (N.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let N of t)
          N != "extrasuggest" && v.value.classList.add(N);
        for (let N of m)
          v.value.style[N] = e.originalNode.style[N];
        p.value = e.originalNode.value;
        let C = H(v.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          U(!0);
        });
      }
      J(() => {
        e.modelValue != null && (p.value = e.modelValue);
      });
      const S = p.value, x = () => {
        p.value = S;
      };
      window.document.addEventListener("mousedown", z), window.document.addEventListener("focusin", z);
    }), ve(() => {
      window.document.removeEventListener("mousedown", z), window.document.removeEventListener("focusin", z);
    });
    const { dropdownStyle: $ } = Le(s, b([]), g, v, y, h, e.maxWidth), U = (S = !1) => {
      var x;
      e.originalNode && (S ? p.value = e.originalNode.value : (e.originalNode.value = p.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), d("update:modelValue", p.value);
    };
    R(() => g.value, (S) => {
      S === !1 && U();
    });
    const { list: M, containerProps: P, wrapperProps: le } = ke(
      i,
      {
        itemHeight: 32
      }
    );
    return (S, x) => (w(), k(T, null, [
      te(_("input", ee({
        onFocus: x[0] || (x[0] = (C) => O(!0)),
        onClick: x[1] || (x[1] = q((C) => O(!0), ["stop", "prevent"])),
        ref_key: "inputNode",
        ref: v,
        "onUpdate:modelValue": x[2] || (x[2] = (C) => me(p) ? p.value = C : null),
        class: "extra-select extra-select-input"
      }, S.$attrs, { disabled: a.disabled }), null, 16, ft), [
        [qe, u(p)]
      ]),
      h.value ? (w(), ne(se, {
        key: 0,
        to: h.value
      }, [
        te(_("div", {
          class: pe(["extra-select dropdown", { searching: u(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: he(u($))
        }, [
          u(p).length >= e.minChars ? (w(), k(T, { key: 0 }, [
            u(i).length == 0 ? (w(), k("div", vt, V(u(l)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", pt, V(u(l)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", ee(u(P), { class: "scroller" }), [
            _("div", ye(ge(u(le))), [
              (w(!0), k(T, null, Z(u(M), (C) => (w(), k("button", {
                key: C.index,
                class: "dropdown-row",
                onClick: q((N) => r(C.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", mt, V(C.data.value), 1)
              ], 8, ht))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [we, g.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), St = dt, xt = gt;
export {
  St as ExtraSelect,
  xt as ExtraSuggest,
  St as default
};
