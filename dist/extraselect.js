import { ref as b, watchEffect as K, computed as j, nextTick as ae, watchPostEffect as $e, toRef as D, watch as R, onMounted as fe, onUnmounted as ve, openBlock as w, createElementBlock as k, Fragment as T, unref as u, createCommentVNode as A, renderList as Z, withModifiers as q, createTextVNode as ce, toDisplayString as V, createElementVNode as _, mergeProps as ee, createBlock as ne, Teleport as se, withDirectives as te, normalizeClass as pe, normalizeStyle as he, isRef as ye, vModelText as Me, normalizeProps as me, guardReactiveProps as ge, vShow as we, vModelDynamic as qe } from "vue";
import { useVirtualList as ke } from "@vueuse/core";
import { empty as Te, offset as Y, getParents as H } from "@txd/utils";
const I = (a) => {
  let d = parseInt(a);
  return d == a ? d : a;
}, Ie = (a, d, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, t, h = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const s = a.map.get(l);
      if (s)
        s.value = t, s.data = h;
      else {
        let p = { value: t, key: l, data: h };
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
      l == null && (l = (t, h) => t.value.localeCompare(h.value)), a.value = a.value.sort(l);
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
  window.ExtraSelectOptions[e] = o, a.actions = o;
};
let je = 1;
const be = (a) => {
  a && (a.style.display = "none", Te(a));
}, Se = (a, d, e, o) => {
  const l = b(/* @__PURE__ */ new Map());
  K(() => {
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
  }, K(() => {
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
  if (Array.isArray(o))
    for (let i of o)
      l.value.set(I(i), I(i));
  else
    o != null && l.value.set(I(o), I(o));
  let h = a == null ? void 0 : a.id;
  (h == null || h === "" || h == 0) && (h = "extraselect_" + (++je).toString()), Ie(t, l, h);
  const s = [];
  return l.value.forEach((i, c) => {
    s.push([c, i]);
  }), { options: t, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [i, c] of s)
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
  var o, l;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(l = (o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) != null ? l : {} };
  Object.assign(e, a != null ? a : {}), xe(b(e), "defaults");
}, xe = (a, d) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Be());
  const e = {
    defaultArray: a.value,
    list: () => a.value,
    get: (o) => {
      var l;
      return (l = a.value[o]) != null ? l : null;
    },
    push: (o, l) => {
      a.value[o] = l;
    }
  };
  window.ExtraSelectLocalization[d] = e, a.actions = e;
};
let He = 0;
const _e = (a, d) => {
  var o;
  return xe(d, (o = a == null ? void 0 : a.id) != null ? o : "extraselect_" + (++He).toString()), { propLocalization: d, t: (l, t = {}) => {
    var s;
    let h = (s = d.value[l]) != null ? s : window.ExtraSelectLocalization.defaults.get(l);
    return h == null && (window.ExtraSelectLocalization.defaults.push(l, l), h = l), Pe(h, t);
  } };
}, de = async function(a, d = null, e = {}) {
  var t;
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: d, ...e.body })
  };
  return await (await fetch(a, o)).json();
}, Ce = (a, d, e, o, l, t, h = "limited", s = {}) => {
  const p = b(0), i = b(!1), c = j(() => i.value || p.value > 0);
  if (d != null && d.length > 0)
    if (e) {
      const f = [];
      K((v) => {
        if (o.value.length >= l) {
          let m = !0;
          switch (h) {
            case "always":
              break;
            default:
            case "limited":
              m = !f.includes(o.value);
              break;
            case "complete":
              m = f.reduce((g, y) => g && !o.value.startsWith(y), !0);
              break;
          }
          if (m) {
            i.value = !0;
            const g = setTimeout(() => {
              f.push(o.value), p.value += 1, s.body = { ...s.body, ...t.value }, de(d, o.value, s).then((y) => {
                a.actions.addRange(y), a.actions.sort(), p.value -= 1, i.value = !1;
              });
            }, 500);
            v(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      de(d, null, s).then((f) => {
        a.actions.addRange(f), a.actions.sort();
      });
  return { searchingFlag: c };
}, Ee = (a, d, e, o = [], l = []) => {
  const t = b(""), h = b([]), s = b({}), p = { ...o.reduce((c, f) => (c[f] = !1, c), {}), ...l.reduce((c, f) => (c[f] = !0, c), {}) };
  for (let c in p) {
    let f = p[c], v = document.getElementById(c);
    s.value[c] = v == null ? void 0 : v.value, v && v.addEventListener("change", (m) => {
      s.value[c] = m.target.value, f && ae(() => {
        if (d != null)
          for (let g of Array.from(d.value.keys()))
            h.value.find((y) => y.key == g) || e(g, !1);
        else
          h.value.find((g) => g.key == t.value) || e(t.value, !1);
      });
    });
  }
  const i = function(c, f) {
    let v = c.value;
    return Object.keys(s.value).length > 0 && (v = v.filter((m) => {
      var g, y;
      for (let O in s.value)
        if ((p[O] ? !0 : ((g = s.value[O]) != null ? g : "").length > 0) && ((y = m.data) == null ? void 0 : y.hasOwnProperty(O)) && m.data[O] != s.value[O])
          return !1;
      return !0;
    })), f.length > 0 && (v = v.filter((m) => m.value.toLowerCase().includes(f.toLowerCase()))), v;
  };
  return K(() => {
    h.value = i(a, t.value);
  }), { filterText: t, filteredOptions: h, filterValues: s };
}, Le = (a, d, e, o, l, t, h) => {
  const s = getComputedStyle(document.querySelector("body")).font, p = function(f) {
    const m = document.createElement("canvas").getContext("2d");
    return m.font = s, m.measureText(f).width;
  }, i = j(() => {
    var v, m;
    const f = (v = Y(o.value).width) != null ? v : 100;
    if (h === "inherit")
      return f;
    if (h == null || h === "dynamic") {
      const g = (m = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? m : 16;
      return Math.max(f, Math.max(...a.value.map((y) => p(y.value))) + 20 + g * 3);
    }
    return h;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return $e(() => {
    e.value < 0 && console.log("is open"), d.value.size < 0 && console.log("empty selection");
    var f = Y(o.value), v = Y(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var v = Y(t.value);
    let m = -v.left + f.left;
    const g = window.document.documentElement.clientWidth;
    m + i.value > g && (m = g - i.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-v.top + f.top + f.height).toString() + "px",
      left: m.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: p };
}, Ue = ["name"], We = {
  key: 1,
  class: "extra-select selection"
}, De = ["onClick"], Ke = ["innerHTML"], Je = ["value", "disabled"], Xe = {
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
    const e = a, o = j(() => {
      var n, r;
      return (r = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? r : e.multiple;
    }), { options: l, selectedOptions: t, onReset: h } = Se(e.originalNode, D(e, "options"), D(e, "modelValue"), e.initialValue), { t: s } = _e(e.originalNode, D(e, "localization")), p = (oe = e.originalNode) == null ? void 0 : oe.classList, i = Object.values((ie = (re = e.originalNode) == null ? void 0 : re.style) != null ? ie : {});
    be(e.originalNode);
    const c = (n, r = null) => {
      if (o.value) {
        let L = r;
        switch (L == null && (L = !t.value.has(n)), L) {
          case !0:
            t.value.set(n, n);
            break;
          case !1:
            t.value.delete(n);
            break;
        }
      } else
        t.value.clear(), r !== !1 && t.value.set(n, n), $.value = !1;
      B(Array.from(t.value.keys()));
    }, { filterText: f, filteredOptions: v, filterValues: m } = Ee(l, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: g } = Ce(
      l,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), y = b(null), O = b(null), z = b(null), $ = b(!1);
    function U(n) {
      e.disabled || ($.value = n);
    }
    R(f, () => {
      O.value.querySelector(".scroller").scrollTop = 0;
    });
    const M = b(null), P = function(n) {
      const r = H(n.target);
      r.push(n.target), !r.includes(y.value) && !r.includes(O.value) ? $.value = !1 : (n.stopImmediatePropagation(), n.preventDefault());
    };
    fe(() => {
      if (e.dropdownContainer) {
        let n = !1;
        M.value = H(y.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let r of p)
          r != "extraselect" && y.value.classList.add(r);
        for (let r of i)
          y.value.style[r] = e.originalNode.style[r];
        let n = H(y.value, "form").pop();
        n instanceof HTMLElement && n.matches("form") && n.addEventListener("reset", () => setTimeout(h)), e.originalNode.toggleValue = c, e.originalNode.setValues = (r) => {
          t.value.clear();
          for (let L of r)
            c(L);
        };
      }
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), ve(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { dropdownStyle: le, getTextWidth: J } = Le(l, t, $, y, O, M, e.maxWidth), B = (n) => {
      ae(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", n);
    }, X = (n) => {
      S(n, !1), f.value = "";
    }, S = (n, r = null) => {
      r == null && (r = !C.value), r ? (t.value.clear(), l.value.forEach((L) => t.value.set(L.key, L.key))) : t.value.clear(), B(Array.from(t.value.keys()));
    }, x = () => {
      N.value ? v.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : v.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), B(Array.from(t.value.keys()));
    };
    R($, (n, r) => {
      n != r && (n ? e.search && ae(() => {
        z.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const C = j(() => t.value.size == l.value.length), N = j(() => v.value.reduce((n, r) => n && t.value.has(r.key), !0)), Oe = j(() => t.value.size == 0), Ne = j(() => {
      var n, r, L, W, E;
      if (l.value.length < 0)
        return "";
      if (o.value) {
        if (Oe.value)
          return s("No selection");
        if (!e.searchableUrl && C.value)
          return s("All selected");
        const F = y.value ? getComputedStyle(y.value) : null, G = ((n = y.value) == null ? void 0 : n.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let Q = s(":n selected - ", { n: t.value.size }), ue = !0;
        for (let ze of t.value)
          if (ue ? ue = !1 : Q += ", ", Q += (L = (r = l.map.get(ze[0])) == null ? void 0 : r.value) != null ? L : g.value ? s("Loading...") : s("Value not found"), G < J(Q))
            return t.value.size + s(" selected");
        return Q;
      } else
        for (let F of t.value)
          return (E = (W = l.map.get(F[0])) == null ? void 0 : W.value) != null ? E : g.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: Fe, containerProps: Ae, wrapperProps: Ve } = ke(
      v,
      {
        itemHeight: 32
      }
    );
    return (n, r) => {
      var L, W;
      return w(), k(T, null, [
        u(o) && u(t).size == 0 ? (w(), k("input", {
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
              }, null, 8, Ke)
            ], 8, De);
          }), 128))
        ])) : A("", !0),
        _("input", ee({
          onFocus: r[0] || (r[0] = (E) => U(!0)),
          onClick: r[1] || (r[1] = q((E) => U(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: y,
          value: u(Ne),
          class: "extra-select extra-select-input",
          readonly: ""
        }, n.$attrs, { disabled: a.disabled }), null, 16, Je),
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
                "onUpdate:modelValue": r[2] || (r[2] = (E) => ye(f) ? f.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: u(s)("Search...")
              }, null, 8, Ge), [
                [Me, u(f)]
              ])
            ])) : A("", !0),
            u(f).length >= e.minChars ? (w(), k(T, { key: 1 }, [
              u(o) ? (w(), k("div", Qe, [
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
                    _("b", null, V(u(s)("Select all")), 1)
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
                    _("b", null, V(u(s)("Select Filtered")), 1)
                  ])
                ], 8, et)) : A("", !0),
                _("div", {
                  class: "clear",
                  onClick: q(X, ["stop", "prevent"])
                }, V(u(s)("Clear")), 9, at)
              ])) : A("", !0),
              u(v).length == 0 ? (w(), k("div", nt, V(u(s)("No matches found")), 1)) : A("", !0)
            ], 64)) : (w(), k("div", st, V(u(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", ee(u(Ae), { class: "scroller" }), [
              _("div", me(ge(u(Ve))), [
                (w(!0), k(T, null, Z(u(Fe), (E) => (w(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: q((F) => c(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", rt, [
                    u(o) ? (w(), k("input", {
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
}, pt = { key: 1 }, ht = ["onClick"], yt = { class: "row-input" }, mt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, gt = /* @__PURE__ */ Object.assign(mt, {
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
    var J, B, X;
    const e = a, { options: o } = Se(e.originalNode, D(e, "options"), b([])), { t: l } = _e(e.originalNode, D(e, "localization")), t = (J = e.originalNode) == null ? void 0 : J.classList, h = Object.values((X = (B = e.originalNode) == null ? void 0 : B.style) != null ? X : {});
    be(e.originalNode);
    const s = (S, x = null) => {
      x === !1 ? p.value = "" : p.value = o.map.get(S).value, g.value = !1;
    }, { filterText: p, filteredOptions: i, filterValues: c } = Ee(o, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: f } = Ce(
      o,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), v = b(null), m = b(null), g = b(!1), y = b(null);
    function O(S) {
      e.disabled || (g.value = S);
    }
    R(p, () => {
      m.value.querySelector(".scroller").scrollTop = 0;
    });
    const z = function(S) {
      const x = H(S.target);
      x.push(S.target), !x.includes(v.value) && !x.includes(m.value) ? g.value = !1 : (S.stopImmediatePropagation(), S.preventDefault());
    };
    fe(() => {
      if (e.dropdownContainer) {
        let C = !1;
        y.value = H(v.value).find((N) => !!(N instanceof Element && (N.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (y.value == null && (y.value = document.querySelector("body")), e.originalNode) {
        for (let N of t)
          N != "extrasuggest" && v.value.classList.add(N);
        for (let N of h)
          v.value.style[N] = e.originalNode.style[N];
        p.value = e.originalNode.value;
        let C = H(v.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          U(!0);
        });
      }
      K(() => {
        e.modelValue != null && (p.value = e.modelValue);
      });
      const S = p.value, x = () => {
        p.value = S;
      };
      window.document.addEventListener("mousedown", z), window.document.addEventListener("focusin", z);
    }), ve(() => {
      window.document.removeEventListener("mousedown", z), window.document.removeEventListener("focusin", z);
    });
    const { dropdownStyle: $ } = Le(o, b([]), g, v, m, y, e.maxWidth), U = (S = !1) => {
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
        "onUpdate:modelValue": x[2] || (x[2] = (C) => ye(p) ? p.value = C : null),
        class: "extra-select extra-select-input"
      }, S.$attrs, { disabled: a.disabled }), null, 16, ft), [
        [qe, u(p)]
      ]),
      y.value ? (w(), ne(se, {
        key: 0,
        to: y.value
      }, [
        te(_("div", {
          class: pe(["extra-select dropdown", { searching: u(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: he(u($))
        }, [
          u(p).length >= e.minChars ? (w(), k(T, { key: 0 }, [
            u(i).length == 0 ? (w(), k("div", vt, V(u(l)("No matches found")), 1)) : A("", !0)
          ], 64)) : (w(), k("div", pt, V(u(l)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", ee(u(P), { class: "scroller" }), [
            _("div", me(ge(u(le))), [
              (w(!0), k(T, null, Z(u(M), (C) => (w(), k("button", {
                key: C.index,
                class: "dropdown-row",
                onClick: q((N) => s(C.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", yt, V(C.data.value), 1)
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
