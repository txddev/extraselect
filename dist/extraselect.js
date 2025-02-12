import { ref as k, watchEffect as Y, computed as P, nextTick as ue, watchPostEffect as Be, useAttrs as ke, toRef as Q, watch as ne, onMounted as be, onUnmounted as Se, openBlock as g, createElementBlock as w, Fragment as q, unref as p, createCommentVNode as V, renderList as ae, withModifiers as B, createTextVNode as ge, toDisplayString as z, createElementVNode as x, mergeProps as se, createBlock as ie, Teleport as de, withDirectives as oe, normalizeClass as xe, normalizeStyle as Ce, isRef as _e, vModelText as Pe, normalizeProps as Ee, guardReactiveProps as Ne, vShow as Le, vModelDynamic as He } from "vue";
import { useVirtualList as Oe } from "@vueuse/core";
import { empty as Ue, offset as le, getParents as D } from "@txd/utils";
const I = (t) => {
  let i = parseInt(t);
  return i == t ? i : t;
}, We = (t) => {
  try {
    var i = JSON.parse(t);
    if (i && typeof i == "object")
      return i;
  } catch {
  }
  return t;
}, De = (t, i, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const d = {
    defaultArray: t.value,
    get: () => t.value,
    push: (a, n, l = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const y = t.map.get(a);
      if (y)
        y.value = n, y.data = l;
      else {
        let f = { value: n, key: a, data: l };
        t.value.push(f), t.map.set(f.key, f);
      }
    },
    addRange: (a) => {
      for (let n of a)
        t.actions.push(n.key, n.value, n.data);
    },
    remove: (a) => {
      t.value.splice(t.value.findIndex((n) => n.key == a), 1);
    },
    clear: () => {
      t.value = [];
    },
    sort: (a = null) => {
      a == null && (a = (n, l) => n.value.localeCompare(l.value)), t.value = t.value.sort(a);
    },
    setDefault: function(a) {
      this.defaultArray = a;
    },
    restoreDefault: function() {
      t.value = this.defaultArray;
    },
    filter: function(a) {
    },
    selection: {
      get() {
        return i.value;
      },
      clear() {
        i.value.clear();
      },
      add(a) {
        i.value.set(a, a);
      },
      remove(a) {
        i.value.delete(a);
      }
    }
  };
  window.ExtraSelectOptions[e] = d, t.actions = d;
};
let Je = 1;
const Ae = (t) => {
  t && (t.style.display = "none", Ue(t));
}, Fe = (t, i, e, d, a = null) => {
  const n = k(/* @__PURE__ */ new Map());
  Y(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let u of e.value)
        n.value.set(u, u);
    }
  });
  const l = k([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let u of l.value)
        l.map.set(u.key, u);
  }, Y(() => {
    i.value && (l.value = i.value.map((u) => ({ ...u, key: I(u.key) })), l.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let u of Array.apply(null, t.selectedOptions).map((s) => I(s.value)).filter((s) => s != null))
        n.value.set(u, u);
      l.value = Array.apply(null, t.options).reduce((u, s) => (u.push({
        value: s.text,
        key: I(s.value),
        data: Object.keys(s.dataset).reduce((h, v) => (h[v] = We(s.dataset[v]), h), {})
      }), u), []);
    }
    if (t.matches("input")) {
      let u = t.value;
      u != null && u.length > 0 && (l.value = [{ value: u, key: u }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(d))
    for (let u of d)
      n.value.set(I(u), I(u));
  else
    d != null && n.value.set(I(d), I(d));
  (a == null || a === "" || a == 0) && (a = "extraselect_" + (++Je).toString()), De(l, n, a);
  const y = [];
  return n.value.forEach((u, s) => {
    y.push([s, u]);
  }), { options: l, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [u, s] of y)
      n.value.set(u, s);
  } };
};
k({});
function Xe(t, i = {}) {
  for (let e in i)
    t = t.replace(`:${e}`, i[e]);
  return t;
}
const Ge = (t = null) => {
  var d, a;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(a = (d = window.ExtraSelectLocalization.defaults) == null ? void 0 : d.defaultArray) != null ? a : {} };
  Object.assign(e, t != null ? t : {}), Ve(k(e), "defaults");
}, Ve = (t, i) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Ge());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (d) => {
      var a;
      return (a = t.value[d]) != null ? a : null;
    },
    push: (d, a) => {
      t.value[d] = a;
    }
  };
  window.ExtraSelectLocalization[i] = e, t.actions = e;
};
let Qe = 0;
const ze = (t, i) => {
  var d;
  return Ve(i, (d = t == null ? void 0 : t.id) != null ? d : "extraselect_" + (++Qe).toString()), { propLocalization: i, t: (a, n = {}) => {
    var y;
    let l = (y = i.value[a]) != null ? y : window.ExtraSelectLocalization.defaults.get(a);
    return l == null && (window.ExtraSelectLocalization.defaults.push(a, a), l = a), Xe(l, n);
  } };
}, we = async function(t, i = null, e = {}) {
  var n;
  const d = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(n = e.headers) != null ? n : {} },
    body: JSON.stringify({ search: i, ...e.body })
  };
  return await (await fetch(t, d)).json();
}, $e = (t, i, e, d, a, n, l = "limited", y = {}) => {
  const f = k(0), u = k(!1), s = P(() => u.value || f.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const h = [];
      Y((v) => {
        if (d.value.length >= a) {
          let c = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              c = !h.includes(d.value);
              break;
            case "complete":
              c = h.reduce((m, E) => m && !d.value.startsWith(E), !0);
              break;
          }
          if (c) {
            u.value = !0;
            const m = setTimeout(() => {
              h.push(d.value), f.value += 1, y.body = { ...y.body, ...n.value }, we(i, d.value, y).then((E) => {
                t.actions.addRange(E), t.actions.sort(), f.value -= 1, u.value = !1;
              });
            }, 500);
            v(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      we(i, null, y).then((h) => {
        t.actions.addRange(h), t.actions.sort();
      });
  return { searchingFlag: s };
}, Me = (t, i, e, d = [], a = []) => {
  const n = k(""), l = k([]), y = k({}), f = { ...d.reduce((s, h) => (s[h] = !1, s), {}), ...a.reduce((s, h) => (s[h] = !0, s), {}) };
  for (let s in f) {
    let h = f[s], v = document.getElementById(s);
    y.value[s] = v == null ? void 0 : v.value, v && v.addEventListener("change", (c) => {
      y.value[s] = c.target.value, h && ue(() => {
        if (i != null)
          for (let m of Array.from(i.value.keys()))
            l.value.find((E) => E.key == m) || e(m, !1);
        else
          l.value.find((m) => m.key == n.value) || e(n.value, !1);
      });
    });
  }
  const u = function(s, h) {
    let v = s.value;
    return Object.keys(y.value).length > 0 && (v = v.filter((c) => {
      var m, E;
      for (let b in y.value)
        if ((f[b] ? !0 : ((m = y.value[b]) != null ? m : "").length > 0) && ((E = c.data) == null ? void 0 : E.hasOwnProperty(b))) {
          if (Array.isArray(c.data[b])) {
            if (!c.data[b].includes(y.value[b]))
              return !1;
          } else if (c.data[b] != y.value[b])
            return !1;
        }
      return !0;
    })), h.length > 0 && (v = v.filter((c) => c.value.toLowerCase().includes(h.toLowerCase()))), v;
  };
  return Y(() => {
    l.value = u(t, n.value);
  }), { filterText: n, filteredOptions: l, filterValues: y };
}, qe = (t, i, e, d, a, n, l) => {
  const y = getComputedStyle(document.querySelector("body")).font, f = function(h) {
    const c = document.createElement("canvas").getContext("2d");
    return c.font = y, c.measureText(h).width;
  }, u = P(() => {
    var v, c;
    const h = (v = le(d.value).width) != null ? v : 100;
    if (l === "inherit")
      return h;
    if (l == null || l === "dynamic") {
      const m = (c = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? c : 16;
      return Math.max(h, Math.max(...t.value.map((E) => f(E.value))) + 20 + m * 3);
    }
    return l;
  }), s = k({
    position: "absolute",
    "min-width": "max-content"
  });
  return Be(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var h = le(d.value), v = le(null);
    if (n.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n.value).position))
      var v = le(n.value);
    let c = -v.left + h.left;
    const m = window.document.documentElement.clientWidth;
    c + u.value > m && (c = m - u.value), s.value = {
      position: "absolute",
      "min-width": "max-content",
      width: u.value.toString() + "px",
      top: (-v.top + h.top + h.height).toString() + "px",
      left: c.toString() + "px"
    };
  }), { dropdownStyle: s, getTextWidth: f };
}, Ye = ["name"], Ze = {
  key: 1,
  class: "extra-select selection"
}, Ke = ["onClick"], Re = ["innerHTML"], et = ["value", "disabled"], tt = {
  key: 0,
  class: "input-searching"
}, lt = ["placeholder"], at = {
  key: 0,
  class: "allselect-clear"
}, nt = { class: "row-input" }, st = ["checked"], ot = { class: "row-input" }, rt = ["checked"], ut = {
  key: 1,
  class: "no-matches"
}, it = { key: 2 }, dt = ["onClick"], ct = { class: "row-input" }, ft = ["checked"], vt = ["value"], pt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, ht = Object.assign(pt, {
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
  setup(t, { emit: i }) {
    var ce, fe, ve, pe, he, me;
    const e = t, d = P(() => {
      var o, r;
      return (r = (o = e.originalNode) == null ? void 0 : o.multiple) != null ? r : e.multiple;
    });
    let a = ke();
    const { options: n, selectedOptions: l, onReset: y } = Fe(e.originalNode, Q(e, "options"), Q(e, "modelValue"), e.initialValue, (ve = (fe = (ce = e.originalNode) == null ? void 0 : ce.id) != null ? fe : a.id) != null ? ve : null), { t: f } = ze(e.originalNode, Q(e, "localization")), u = (pe = e.originalNode) == null ? void 0 : pe.classList, s = Object.values((me = (he = e.originalNode) == null ? void 0 : he.style) != null ? me : {});
    Ae(e.originalNode);
    const h = i, v = (o, r = null) => {
      if (d.value) {
        let O = r;
        switch (O == null && (O = !l.value.has(o)), O) {
          case !0:
            l.value.set(o, o);
            break;
          case !1:
            l.value.delete(o);
            break;
        }
      } else
        l.value.clear(), r !== !1 && l.value.set(o, o), $.value = !1;
      U(Array.from(l.value.keys()));
    }, { filterText: c, filteredOptions: m, filterValues: E } = Me(n, l, v, e.filterFields, e.hardFilterFields), { searchingFlag: b } = $e(
      n,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      E,
      e.fetchMode,
      e.fetchOptions
    ), C = k(null), T = k(null), j = k(null), $ = k(!1);
    function J(o) {
      e.disabled || ($.value = o);
    }
    ne(c, () => {
      T.value.querySelector(".scroller").scrollTop = 0;
    });
    const M = k(null), H = function(o) {
      const r = D(o.target);
      r.push(o.target), !r.includes(C.value) && !r.includes(T.value) ? $.value = !1 : (o.stopImmediatePropagation(), o.preventDefault());
    };
    be(() => {
      if (e.dropdownContainer) {
        let o = !1;
        M.value = D(C.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (o = !0), o && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let r of u)
          r != "extraselect" && C.value.classList.add(r);
        for (let r of s)
          C.value.style[r] = e.originalNode.style[r];
        let o = D(C.value, "form").pop();
        o instanceof HTMLElement && o.matches("form") && o.addEventListener("reset", () => setTimeout(y)), e.originalNode.toggleValue = v, e.originalNode.setValues = (r) => {
          l.value.clear();
          for (let O of r)
            v(O);
        };
      }
      window.document.addEventListener("mousedown", H), window.document.addEventListener("focusin", H);
    }), Se(() => {
      window.document.removeEventListener("mousedown", H), window.document.removeEventListener("focusin", H);
    });
    const { dropdownStyle: re, getTextWidth: Z } = qe(n, l, $, C, T, M, e.maxWidth), U = (o) => {
      ue(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), h("update:modelValue", o);
    }, K = (o) => {
      X(o, !1), c.value = "";
    }, X = (o, r = null) => {
      r == null && (r = !W.value), r ? (l.value.clear(), n.value.forEach((O) => l.value.set(O.key, O.key))) : l.value.clear(), U(Array.from(l.value.keys()));
    }, R = () => {
      N.value ? m.value.forEach((o) => {
        l.value.has(o.key) && l.value.delete(o.key);
      }) : m.value.forEach((o) => {
        l.value.has(o.key) || l.value.set(o.key, o.key);
      }), U(Array.from(l.value.keys()));
    };
    ne($, (o, r) => {
      o != r && (o ? e.search && ue(() => {
        j.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const W = P(() => l.value.size == n.value.length), N = P(() => m.value.reduce((o, r) => o && l.value.has(r.key), !0)), S = P(() => l.value.size == 0), L = P(() => {
      var o, r, O, G, _;
      if (n.value.length < 0)
        return "";
      if (d.value) {
        if (S.value)
          return f("No selection");
        if (!e.searchableUrl && W.value)
          return f("All selected");
        const F = C.value ? getComputedStyle(C.value) : null, ee = ((o = C.value) == null ? void 0 : o.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let te = f(":n selected - ", { n: l.value.size }), ye = !0;
        for (let Ie of l.value)
          if (ye ? ye = !1 : te += ", ", te += (O = (r = n.map.get(Ie[0])) == null ? void 0 : r.value) != null ? O : b.value ? f("Loading...") : f("Value not found"), ee < Z(te))
            return l.value.size + f(" selected");
        return te;
      } else
        for (let F of l.value)
          return (_ = (G = n.map.get(F[0])) == null ? void 0 : G.value) != null ? _ : b.value ? f("Loading...") : f("Value not found");
      return f("No selection");
    }), { list: A, containerProps: Te, wrapperProps: je } = Oe(
      m,
      {
        itemHeight: 32
      }
    );
    return (o, r) => {
      var O, G;
      return g(), w(q, null, [
        d.value && p(l).size == 0 ? (g(), w("input", {
          key: 0,
          type: "hidden",
          name: (G = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, Ye)) : V("", !0),
        e.showSelected ? (g(), w("div", Ze, [
          (g(!0), w(q, null, ae(p(l), (_) => {
            var F;
            return g(), w("div", {
              key: _,
              onClick: B((ee) => v(_[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ge(z((F = p(n).find((ee) => ee.key == _[0])) == null ? void 0 : F.value) + " ", 1),
              x("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Re)
            ], 8, Ke);
          }), 128))
        ])) : V("", !0),
        x("input", se({
          onFocus: r[0] || (r[0] = (_) => J(!0)),
          onClick: r[1] || (r[1] = B((_) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: C,
          value: L.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, o.$attrs, { disabled: t.disabled }), null, 16, et),
        M.value ? (g(), ie(de, {
          key: 2,
          to: M.value
        }, [
          oe(x("div", {
            class: xe(["extra-select dropdown", { searching: p(b) > 0 }]),
            ref_key: "dropdownNode",
            ref: T,
            style: Ce(p(re))
          }, [
            e.search ? (g(), w("div", tt, [
              oe(x("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": r[2] || (r[2] = (_) => _e(c) ? c.value = _ : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(f)("Search...")
              }, null, 8, lt), [
                [Pe, p(c)]
              ])
            ])) : V("", !0),
            p(c).length >= e.minChars ? (g(), w(q, { key: 1 }, [
              d.value ? (g(), w("div", at, [
                p(c).length == 0 ? (g(), w("div", {
                  key: 0,
                  onClick: B(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  x("div", nt, [
                    x("input", {
                      checked: W.value,
                      type: "checkbox"
                    }, null, 8, st),
                    x("b", null, z(p(f)("Select all")), 1)
                  ])
                ])) : V("", !0),
                p(m).length > 0 && p(c).length > 0 ? (g(), w("div", {
                  key: 1,
                  onClick: B(R, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  x("div", ot, [
                    x("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, rt),
                    x("b", null, z(p(f)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                x("div", {
                  class: "clear",
                  onClick: B(K, ["stop", "prevent"])
                }, z(p(f)("Clear")), 1)
              ])) : V("", !0),
              p(m).length == 0 ? (g(), w("div", ut, z(p(f)("No matches found")), 1)) : V("", !0)
            ], 64)) : (g(), w("div", it, z(p(f)("Insert at least :n characters", { n: e.minChars })), 1)),
            x("div", se(p(Te), { class: "scroller" }), [
              x("div", Ee(Ne(p(je))), [
                (g(!0), w(q, null, ae(p(A), (_) => (g(), w("button", {
                  key: _.index,
                  class: "dropdown-row",
                  onClick: B((F) => v(_.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", ct, [
                    d.value ? (g(), w("input", {
                      key: 0,
                      checked: p(l).has(_.data.key),
                      type: "checkbox"
                    }, null, 8, ft)) : V("", !0),
                    ge(" " + z(_.data.value), 1)
                  ])
                ], 8, dt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Le, $.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (g(), ie(de, {
          key: 3,
          to: e.originalNode
        }, [
          (g(!0), w(q, null, ae(p(l), (_) => (g(), w("option", {
            key: _[0],
            selected: "selected",
            value: _[0]
          }, null, 8, vt))), 128))
        ], 8, ["to"])) : V("", !0)
      ], 64);
    };
  }
}), mt = ["disabled"], yt = {
  key: 0,
  class: "no-matches"
}, gt = { key: 1 }, wt = ["onClick"], kt = { class: "row-input" }, bt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, St = Object.assign(bt, {
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
  setup(t, { emit: i }) {
    var Z, U, K, X, R, W;
    const e = t;
    let d = ke();
    const { options: a } = Fe(e.originalNode, Q(e, "options"), k([]), null, (K = (U = (Z = e.originalNode) == null ? void 0 : Z.id) != null ? U : d.id) != null ? K : null), { t: n } = ze(e.originalNode, Q(e, "localization")), l = (X = e.originalNode) == null ? void 0 : X.classList, y = Object.values((W = (R = e.originalNode) == null ? void 0 : R.style) != null ? W : {});
    Ae(e.originalNode);
    const f = i, u = (N, S = null) => {
      S === !1 ? s.value = "" : s.value = a.map.get(N).value, b.value = !1;
    }, { filterText: s, filteredOptions: h, filterValues: v } = Me(a, null, u, e.filterFields, e.hardFilterFields), { searchingFlag: c } = $e(
      a,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      v,
      e.fetchMode,
      e.fetchOptions
    ), m = k(null), E = k(null), b = k(!1), C = k(null);
    function T(N) {
      e.disabled || (b.value = N);
    }
    ne(s, () => {
      E.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = function(N) {
      const S = D(N.target);
      S.push(N.target), !S.includes(m.value) && !S.includes(E.value) && (b.value = !1);
    };
    be(() => {
      if (e.dropdownContainer) {
        let L = !1;
        C.value = D(m.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (C.value == null && (C.value = document.querySelector("body")), e.originalNode) {
        for (let A of l)
          A != "extrasuggest" && m.value.classList.add(A);
        for (let A of y)
          m.value.style[A] = e.originalNode.style[A];
        s.value = e.originalNode.value;
        let L = D(m.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      Y(() => {
        e.modelValue != null && (s.value = e.modelValue);
      });
      const N = s.value, S = () => {
        s.value = N;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), Se(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: $ } = qe(a, k([]), b, m, E, C, e.maxWidth), J = (N = !1) => {
      var S;
      e.originalNode && (N ? s.value = e.originalNode.value : (e.originalNode.value = s.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), f("update:modelValue", s.value);
    };
    ne(() => b.value, (N) => {
      N === !1 && J();
    });
    const { list: M, containerProps: H, wrapperProps: re } = Oe(
      h,
      {
        itemHeight: 32
      }
    );
    return (N, S) => (g(), w(q, null, [
      oe(x("input", se({
        onFocus: S[0] || (S[0] = (L) => T(!0)),
        onClick: S[1] || (S[1] = (L) => T(!0)),
        ref_key: "inputNode",
        ref: m,
        "onUpdate:modelValue": S[2] || (S[2] = (L) => _e(s) ? s.value = L : null),
        class: "extra-select extra-select-input"
      }, N.$attrs, { disabled: t.disabled }), null, 16, mt), [
        [He, p(s)]
      ]),
      C.value ? (g(), ie(de, {
        key: 0,
        to: C.value
      }, [
        oe(x("div", {
          class: xe(["extra-select dropdown", { searching: p(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: E,
          style: Ce(p($))
        }, [
          p(s).length >= e.minChars ? (g(), w(q, { key: 0 }, [
            p(h).length == 0 ? (g(), w("div", yt, z(p(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (g(), w("div", gt, z(p(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          x("div", se(p(H), { class: "scroller" }), [
            x("div", Ee(Ne(p(re))), [
              (g(!0), w(q, null, ae(p(M), (L) => (g(), w("button", {
                key: L.index,
                class: "dropdown-row",
                onClick: B((A) => u(L.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", kt, z(L.data.value), 1)
              ], 8, wt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, b.value]
        ])
      ], 8, ["to"])) : V("", !0)
    ], 64));
  }
}), Et = ht, Nt = St;
export {
  Et as ExtraSelect,
  Nt as ExtraSuggest,
  Et as default
};
