import { ref as S, watchEffect as Y, computed as P, nextTick as ue, watchPostEffect as Be, useAttrs as ke, toRef as Q, watch as ne, onMounted as be, onUnmounted as Se, openBlock as g, createElementBlock as k, Fragment as q, unref as h, createCommentVNode as V, renderList as ae, withModifiers as B, createTextVNode as ge, toDisplayString as z, createElementVNode as C, mergeProps as se, createBlock as ie, Teleport as de, withDirectives as oe, normalizeClass as xe, normalizeStyle as Ce, isRef as _e, vModelText as Pe, normalizeProps as Ee, guardReactiveProps as Ne, vShow as Le, vModelDynamic as He } from "vue";
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
      t.value = [], t.rebuildMap();
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
  const n = S(/* @__PURE__ */ new Map());
  Y(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let u of e.value)
        n.value.set(u, u);
    }
  });
  const l = S([]);
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
        data: Object.keys(s.dataset).reduce((v, p) => (v[p] = We(s.dataset[p]), v), {})
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
S({});
function Xe(t, i = {}) {
  for (let e in i)
    t = t.replace(`:${e}`, i[e]);
  return t;
}
const Ge = (t = null) => {
  var d, a;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(a = (d = window.ExtraSelectLocalization.defaults) == null ? void 0 : d.defaultArray) != null ? a : {} };
  Object.assign(e, t != null ? t : {}), Ve(S(e), "defaults");
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
}, Me = (t, i, e, d, a, n, l = "limited", y = {}) => {
  const f = S(0), u = S(!1), s = P(() => u.value || f.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const v = {};
      Y((p) => {
        var m;
        const c = (m = JSON.stringify(n.value)) != null ? m : "default";
        if (v[c] == null && (v[c] = []), d.value.length >= a) {
          let E = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              E = !v[c].includes(d.value);
              break;
            case "complete":
              E = v[c].reduce((w, b) => w && !d.value.startsWith(b), !0);
              break;
          }
          if (E) {
            u.value = !0;
            const w = setTimeout(() => {
              v[c].push(d.value), f.value += 1, y.body = { ...y.body, ...n.value }, we(i, d.value, y).then((b) => {
                t.actions.addRange(b), t.actions.sort(), f.value -= 1, u.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(w);
            });
          }
        }
      });
    } else
      we(i, null, y).then((v) => {
        t.actions.addRange(v), t.actions.sort();
      });
  return { searchingFlag: s };
}, $e = (t, i, e, d = [], a = []) => {
  const n = S(""), l = S([]), y = S({}), f = { ...d.reduce((s, v) => (s[v] = !1, s), {}), ...a.reduce((s, v) => (s[v] = !0, s), {}) };
  for (let s in f) {
    let v = f[s], p = document.getElementById(s);
    y.value[s] = p == null ? void 0 : p.value, p && p.addEventListener("change", (c) => {
      y.value[s] = c.target.value, v && ue(() => {
        if (i != null)
          for (let m of Array.from(i.value.keys()))
            l.value.find((E) => E.key == m) || e(m, !1);
        else
          l.value.find((m) => m.key == n.value) || e(n.value, !1);
      });
    });
  }
  const u = function(s, v) {
    let p = s.value;
    return Object.keys(y.value).length > 0 && (p = p.filter((c) => {
      var m, E;
      for (let w in y.value)
        if ((f[w] ? !0 : ((m = y.value[w]) != null ? m : "").length > 0) && ((E = c.data) == null ? void 0 : E.hasOwnProperty(w))) {
          if (Array.isArray(c.data[w])) {
            if (!c.data[w].includes(y.value[w]))
              return !1;
          } else if (c.data[w] != y.value[w])
            return !1;
        }
      return !0;
    })), v.length > 0 && (p = p.filter((c) => c.value.toLowerCase().includes(v.toLowerCase()))), p;
  };
  return Y(() => {
    l.value = u(t, n.value);
  }), { filterText: n, filteredOptions: l, filterValues: y };
}, qe = (t, i, e, d, a, n, l) => {
  const y = getComputedStyle(document.querySelector("body")).font, f = function(v) {
    const c = document.createElement("canvas").getContext("2d");
    return c.font = y, c.measureText(v).width;
  }, u = P(() => {
    var p, c;
    const v = (p = le(d.value).width) != null ? p : 100;
    if (l === "inherit")
      return v;
    if (l == null || l === "dynamic") {
      const m = (c = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? c : 16;
      return Math.max(v, Math.max(...t.value.map((E) => f(E.value))) + 20 + m * 3);
    }
    return l;
  }), s = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return Be(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var v = le(d.value), p = le(null);
    if (n.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n.value).position))
      var p = le(n.value);
    let c = -p.left + v.left;
    const m = window.document.documentElement.clientWidth;
    c + u.value > m && (c = m - u.value), s.value = {
      position: "absolute",
      "min-width": "max-content",
      width: u.value.toString() + "px",
      top: (-p.top + v.top + v.height).toString() + "px",
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
    const v = i, p = (o, r = null) => {
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
        l.value.clear(), r !== !1 && l.value.set(o, o), M.value = !1;
      U(Array.from(l.value.keys()));
    }, { filterText: c, filteredOptions: m, filterValues: E } = $e(n, l, p, e.filterFields, e.hardFilterFields), { searchingFlag: w } = Me(
      n,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      E,
      e.fetchMode,
      e.fetchOptions
    ), b = S(null), T = S(null), j = S(null), M = S(!1);
    function J(o) {
      e.disabled || (M.value = o);
    }
    ne(c, () => {
      T.value.querySelector(".scroller").scrollTop = 0;
    });
    const $ = S(null), H = function(o) {
      const r = D(o.target);
      r.push(o.target), !r.includes(b.value) && !r.includes(T.value) ? M.value = !1 : (o.stopImmediatePropagation(), o.preventDefault());
    };
    be(() => {
      if (e.dropdownContainer) {
        let o = !1;
        $.value = D(b.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (o = !0), o && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if ($.value == null && ($.value = document.querySelector("body")), e.originalNode) {
        for (let r of u)
          r != "extraselect" && b.value.classList.add(r);
        for (let r of s)
          b.value.style[r] = e.originalNode.style[r];
        let o = D(b.value, "form").pop();
        o instanceof HTMLElement && o.matches("form") && o.addEventListener("reset", () => setTimeout(y)), e.originalNode.toggleValue = p, e.originalNode.setValues = (r) => {
          l.value.clear();
          for (let O of r)
            p(O);
        };
      }
      window.document.addEventListener("mousedown", H), window.document.addEventListener("focusin", H);
    }), Se(() => {
      window.document.removeEventListener("mousedown", H), window.document.removeEventListener("focusin", H);
    });
    const { dropdownStyle: re, getTextWidth: Z } = qe(n, l, M, b, T, $, e.maxWidth), U = (o) => {
      ue(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), v("update:modelValue", o);
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
    ne(M, (o, r) => {
      o != r && (o ? e.search && ue(() => {
        j.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const W = P(() => l.value.size == n.value.length), N = P(() => m.value.reduce((o, r) => o && l.value.has(r.key), !0)), x = P(() => l.value.size == 0), L = P(() => {
      var o, r, O, G, _;
      if (n.value.length < 0)
        return "";
      if (d.value) {
        if (x.value)
          return f("No selection");
        if (!e.searchableUrl && W.value)
          return f("All selected");
        const F = b.value ? getComputedStyle(b.value) : null, ee = ((o = b.value) == null ? void 0 : o.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let te = f(":n selected - ", { n: l.value.size }), ye = !0;
        for (let Ie of l.value)
          if (ye ? ye = !1 : te += ", ", te += (O = (r = n.map.get(Ie[0])) == null ? void 0 : r.value) != null ? O : w.value ? f("Loading...") : f("Value not found"), ee < Z(te))
            return l.value.size + f(" selected");
        return te;
      } else
        for (let F of l.value)
          return (_ = (G = n.map.get(F[0])) == null ? void 0 : G.value) != null ? _ : w.value ? f("Loading...") : f("Value not found");
      return f("No selection");
    }), { list: A, containerProps: Te, wrapperProps: je } = Oe(
      m,
      {
        itemHeight: 32
      }
    );
    return (o, r) => {
      var O, G;
      return g(), k(q, null, [
        d.value && h(l).size == 0 ? (g(), k("input", {
          key: 0,
          type: "hidden",
          name: (G = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, Ye)) : V("", !0),
        e.showSelected ? (g(), k("div", Ze, [
          (g(!0), k(q, null, ae(h(l), (_) => {
            var F;
            return g(), k("div", {
              key: _,
              onClick: B((ee) => p(_[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ge(z((F = h(n).find((ee) => ee.key == _[0])) == null ? void 0 : F.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Re)
            ], 8, Ke);
          }), 128))
        ])) : V("", !0),
        C("input", se({
          onFocus: r[0] || (r[0] = (_) => J(!0)),
          onClick: r[1] || (r[1] = B((_) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: b,
          value: L.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, o.$attrs, { disabled: t.disabled }), null, 16, et),
        $.value ? (g(), ie(de, {
          key: 2,
          to: $.value
        }, [
          oe(C("div", {
            class: xe(["extra-select dropdown", { searching: h(w) > 0 }]),
            ref_key: "dropdownNode",
            ref: T,
            style: Ce(h(re))
          }, [
            e.search ? (g(), k("div", tt, [
              oe(C("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": r[2] || (r[2] = (_) => _e(c) ? c.value = _ : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: h(f)("Search...")
              }, null, 8, lt), [
                [Pe, h(c)]
              ])
            ])) : V("", !0),
            h(c).length >= e.minChars ? (g(), k(q, { key: 1 }, [
              d.value ? (g(), k("div", at, [
                h(c).length == 0 ? (g(), k("div", {
                  key: 0,
                  onClick: B(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", nt, [
                    C("input", {
                      checked: W.value,
                      type: "checkbox"
                    }, null, 8, st),
                    C("b", null, z(h(f)("Select all")), 1)
                  ])
                ])) : V("", !0),
                h(m).length > 0 && h(c).length > 0 ? (g(), k("div", {
                  key: 1,
                  onClick: B(R, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", ot, [
                    C("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, rt),
                    C("b", null, z(h(f)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                C("div", {
                  class: "clear",
                  onClick: B(K, ["stop", "prevent"])
                }, z(h(f)("Clear")), 1)
              ])) : V("", !0),
              h(m).length == 0 ? (g(), k("div", ut, z(h(f)("No matches found")), 1)) : V("", !0)
            ], 64)) : (g(), k("div", it, z(h(f)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", se(h(Te), { class: "scroller" }), [
              C("div", Ee(Ne(h(je))), [
                (g(!0), k(q, null, ae(h(A), (_) => (g(), k("button", {
                  key: _.index,
                  class: "dropdown-row",
                  onClick: B((F) => p(_.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", ct, [
                    d.value ? (g(), k("input", {
                      key: 0,
                      checked: h(l).has(_.data.key),
                      type: "checkbox"
                    }, null, 8, ft)) : V("", !0),
                    ge(" " + z(_.data.value), 1)
                  ])
                ], 8, dt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Le, M.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (g(), ie(de, {
          key: 3,
          to: e.originalNode
        }, [
          (g(!0), k(q, null, ae(h(l), (_) => (g(), k("option", {
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
    const { options: a } = Fe(e.originalNode, Q(e, "options"), S([]), null, (K = (U = (Z = e.originalNode) == null ? void 0 : Z.id) != null ? U : d.id) != null ? K : null), { t: n } = ze(e.originalNode, Q(e, "localization")), l = (X = e.originalNode) == null ? void 0 : X.classList, y = Object.values((W = (R = e.originalNode) == null ? void 0 : R.style) != null ? W : {});
    Ae(e.originalNode);
    const f = i, u = (N, x = null) => {
      x === !1 ? s.value = "" : s.value = a.map.get(N).value, w.value = !1;
    }, { filterText: s, filteredOptions: v, filterValues: p } = $e(a, null, u, e.filterFields, e.hardFilterFields), { searchingFlag: c } = Me(
      a,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), m = S(null), E = S(null), w = S(!1), b = S(null);
    function T(N) {
      e.disabled || (w.value = N);
    }
    ne(s, () => {
      E.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = function(N) {
      const x = D(N.target);
      x.push(N.target), !x.includes(m.value) && !x.includes(E.value) && (w.value = !1);
    };
    be(() => {
      if (e.dropdownContainer) {
        let L = !1;
        b.value = D(m.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (b.value == null && (b.value = document.querySelector("body")), e.originalNode) {
        for (let A of l)
          A != "extrasuggest" && m.value.classList.add(A);
        for (let A of y)
          m.value.style[A] = e.originalNode.style[A];
        s.value = e.originalNode.value;
        let L = D(m.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      Y(() => {
        e.modelValue != null && (s.value = e.modelValue);
      });
      const N = s.value, x = () => {
        s.value = N;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), Se(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: M } = qe(a, S([]), w, m, E, b, e.maxWidth), J = (N = !1) => {
      var x;
      e.originalNode && (N ? s.value = e.originalNode.value : (e.originalNode.value = s.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), f("update:modelValue", s.value);
    };
    ne(() => w.value, (N) => {
      N === !1 && J();
    });
    const { list: $, containerProps: H, wrapperProps: re } = Oe(
      v,
      {
        itemHeight: 32
      }
    );
    return (N, x) => (g(), k(q, null, [
      oe(C("input", se({
        onFocus: x[0] || (x[0] = (L) => T(!0)),
        onClick: x[1] || (x[1] = (L) => T(!0)),
        ref_key: "inputNode",
        ref: m,
        "onUpdate:modelValue": x[2] || (x[2] = (L) => _e(s) ? s.value = L : null),
        class: "extra-select extra-select-input"
      }, N.$attrs, { disabled: t.disabled }), null, 16, mt), [
        [He, h(s)]
      ]),
      b.value ? (g(), ie(de, {
        key: 0,
        to: b.value
      }, [
        oe(C("div", {
          class: xe(["extra-select dropdown", { searching: h(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: E,
          style: Ce(h(M))
        }, [
          h(s).length >= e.minChars ? (g(), k(q, { key: 0 }, [
            h(v).length == 0 ? (g(), k("div", yt, z(h(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (g(), k("div", gt, z(h(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", se(h(H), { class: "scroller" }), [
            C("div", Ee(Ne(h(re))), [
              (g(!0), k(q, null, ae(h($), (L) => (g(), k("button", {
                key: L.index,
                class: "dropdown-row",
                onClick: B((A) => u(L.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", kt, z(L.data.value), 1)
              ], 8, wt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, w.value]
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
