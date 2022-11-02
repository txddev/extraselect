import { ref as C, watchEffect as z, computed as V, watchPostEffect as Oe, toRef as G, onMounted as se, onUnmounted as re, watch as ue, nextTick as ae, openBlock as v, createElementBlock as y, Fragment as A, renderList as U, unref as d, createTextVNode as ne, toDisplayString as P, createElementVNode as k, createCommentVNode as N, mergeProps as H, createBlock as Q, Teleport as Y, withDirectives as D, normalizeClass as ie, normalizeStyle as ce, isRef as de, vModelText as Le, normalizeProps as fe, guardReactiveProps as ve, withModifiers as pe, vShow as he, vModelDynamic as Ae } from "vue";
import { useVirtualList as ye } from "@vueuse/core";
import { empty as Ve, offset as W, getParents as J } from "@txd/utils";
const Fe = (s, w) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: s.value,
    get: () => s.value,
    push: (l, n, t = null) => {
      const i = s.map.get(l);
      if (i)
        i.value = n, i.data = t;
      else {
        let o = { value: n, key: l, data: t };
        s.value.push(o), s.map.set(o.key, o);
      }
    },
    addRange: (l) => {
      for (let n of l)
        s.actions.push(n.key, n.value, n.data);
    },
    remove: (l) => {
      s.value.splice(s.value.findIndex((n) => n.key == l), 1);
    },
    clear: () => {
      s.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (n, t) => n.value.localeCompare(t.value)), s.value = s.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      s.value = this.defaultArray;
    },
    filter: function(l) {
    }
  };
  window.ExtraSelectOptions[w] = e, s.actions = e;
};
let Me = 1;
const me = (s) => {
  s && (s.style.display = "none", Ve(s));
}, ge = (s, w, e, l) => {
  var i;
  const n = C(/* @__PURE__ */ new Map());
  z(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let o of e.value)
        n.value.set(o, o);
    }
  });
  const t = C([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let o of t.value)
        t.map.set(o.key, o);
  }, z(() => {
    w.value && (t.value = w.value, t.rebuildMap());
  }), s) {
    n.value.clear();
    for (let o of Array.apply(null, s.selectedOptions).map((r) => r.value).filter((r) => r))
      n.value.set(o, o);
    t.value = Array.apply(null, s.options).reduce((o, r) => (o.push({ value: r.text, key: r.value, data: r.dataset }), o), []), t.rebuildMap();
  }
  if (Array.isArray(l))
    for (let o of l)
      n.value.set(o, o);
  else
    l != null && n.value.set(l, l);
  return Fe(t, (i = s == null ? void 0 : s.id) != null ? i : "extraselect_" + (++Me).toString()), { options: t, selectedOptions: n };
}, oe = async function(s, w = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: w, ...e.body })
  };
  return await (await fetch(s, l)).json();
}, we = (s, w, e, l, n, t, i = "limited", o = {}) => {
  const r = C(0), m = C(!1), _ = V(() => m.value || r.value > 0);
  if (w != null && w.length > 0)
    if (e) {
      const f = [];
      z((u) => {
        if (l.value.length >= n) {
          let p = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              p = !f.includes(l.value);
              break;
            case "complete":
              p = f.reduce((x, S) => x && !l.value.startsWith(S), !0);
              break;
          }
          if (p) {
            m.value = !0;
            const x = setTimeout(() => {
              f.push(l.value), r.value += 1, o.body = { ...o.body, ...t.value }, oe(w, l.value, o).then((S) => {
                s.actions.addRange(S), s.actions.sort(), r.value -= 1, m.value = !1;
              });
            }, 500);
            u(() => {
              clearTimeout(x);
            });
          }
        }
      });
    } else
      oe(w, null, o).then((f) => {
        s.actions.addRange(f), s.actions.sort();
      });
  return { searchingFlag: _ };
}, ke = (s, w) => {
  const e = C(""), l = C([]), n = C({});
  for (let i of w) {
    let o = document.getElementById(i);
    n.value[i] = o == null ? void 0 : o.value, o && o.addEventListener("change", (r) => {
      n.value[i] = r.target.value;
    });
  }
  const t = function(i, o) {
    let r = i.value;
    return Object.keys(n.value).length > 0 && (r = r.filter((m) => {
      var _, f;
      for (let u in n.value)
        if (((_ = n.value[u]) != null ? _ : "").length > 0 && (!((f = m.data) != null && f.hasOwnProperty(u)) || m.data[u] != n.value[u]))
          return !1;
      return !0;
    })), o.length > 0 && (r = r.filter((m) => m.value.toLowerCase().includes(o.toLowerCase()))), r;
  };
  return z(() => {
    l.value = t(s, e.value);
  }), { filterText: e, filteredOptions: l, filterValues: n };
}, Ce = (s, w, e, l, n, t, i) => {
  const o = getComputedStyle(document.querySelector("body")).font, r = function(f) {
    const p = document.createElement("canvas").getContext("2d");
    return p.font = o, p.measureText(f).width;
  }, m = V(() => {
    var u, p;
    const f = (u = W(l.value).width) != null ? u : 100;
    if (i === "inherit")
      return f;
    if (i == null || i === "dynamic") {
      const x = (p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? p : 16;
      return Math.max(f, Math.max(...s.value.map((S) => r(S.value))) + 20 + x * 3);
    }
    return i;
  }), _ = C({
    position: "absolute",
    "min-width": "max-content"
  });
  return Oe(() => {
    e.value < 0 && console.log("is open"), w.value.size < 0 && console.log("empty selection");
    var f = W(l.value), u = W(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var u = W(t.value);
    let p = -u.left + f.left;
    const x = window.document.documentElement.clientWidth;
    p + m.value > x && (p = x - m.value), _.value = {
      position: "absolute",
      "min-width": "max-content",
      width: m.value.toString() + "px",
      top: (-u.top + f.top + f.height).toString() + "px",
      left: p.toString() + "px"
    };
  }), { dropdownStyle: _, getTextWidth: r };
}, $e = {
  key: 0,
  class: "extra-select selection"
}, qe = ["onClick"], Te = ["innerHTML"], je = ["value"], Pe = {
  key: 0,
  class: "input-searching"
}, ze = {
  key: 0,
  class: "allselect-clear"
}, Be = { class: "row-input" }, Ie = ["checked"], We = /* @__PURE__ */ k("b", null, "Select all", -1), Ue = { class: "row-input" }, He = ["checked"], De = /* @__PURE__ */ k("b", null, "Select Filtered", -1), Je = {
  key: 1,
  class: "no-matches"
}, Ke = { key: 2 }, Xe = ["onClick"], Ge = { class: "row-input" }, Qe = ["checked"], Ye = ["value"], Ze = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Re = /* @__PURE__ */ Object.assign(Ze, {
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
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
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: w }) {
    var R, ee, te;
    const e = s, l = V(() => {
      var a, c;
      return (c = (a = e.originalNode) == null ? void 0 : a.multiple) != null ? c : e.multiple;
    }), { options: n, selectedOptions: t } = ge(e.originalNode, G(e, "options"), G(e, "modelValue"), e.initialValue), i = (R = e.originalNode) == null ? void 0 : R.classList, o = Object.values((te = (ee = e.originalNode) == null ? void 0 : ee.style) != null ? te : {});
    me(e.originalNode);
    const { filterText: r, filteredOptions: m, filterValues: _ } = ke(n, e.filterFields), { searchingFlag: f } = we(
      n,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      _,
      e.fetchMode,
      e.fetchOptions
    ), u = C(null), p = C(null), x = C(null), S = C(!1), O = C(null), F = function(a) {
      const c = J(a.target);
      c.push(a.target), !c.includes(u.value) && !c.includes(p.value) && (S.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let a = !1;
        O.value = J(u.value).find((c) => !!(c instanceof Element && (c.matches(e.dropdownContainer) && (a = !0), a && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(c).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), e.originalNode) {
        for (let a of i)
          a != "extraselect" && u.value.classList.add(a);
        for (let a of o)
          u.value.style[a] = e.originalNode.style[a];
        o.includes("background-color") || (u.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), re(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: K, getTextWidth: X } = Ce(n, t, S, u, p, O, e.maxWidth), $ = (a) => {
      ae(
        () => {
          var c;
          return (c = e.originalNode) == null ? void 0 : c.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), w("update:modelValue", a);
    }, q = (a) => {
      l.value ? t.value.has(a) ? t.value.delete(a) : t.value.set(a, a) : (t.value.clear(), t.value.set(a, a), S.value = !1), $(Array.from(t.value.keys()));
    }, B = (a) => {
      T(a, !1), r.value = "";
    }, T = (a, c = null) => {
      c == null && (c = !b.value), c ? (t.value.clear(), n.value.forEach((g) => t.value.set(g.key, g.key))) : t.value.clear(), $(Array.from(t.value.keys()));
    }, h = () => {
      E.value ? m.value.forEach((a) => {
        t.value.has(a.key) && t.value.delete(a.key);
      }) : m.value.forEach((a) => {
        t.value.has(a.key) || t.value.set(a.key, a.key);
      }), $(Array.from(t.value.keys()));
    };
    ue(S, (a, c) => {
      a != c && (a ? e.search && ae(() => {
        x.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const b = V(() => t.value.size == n.value.length), E = V(() => m.value.reduce((a, c) => a && t.value.has(c.key), !0)), Z = V(() => t.value.size == 0), be = V(() => {
      var a, c, g, M, j;
      if (n.value.length < 0)
        return "";
      if (l.value) {
        if (b.value)
          return "All selected";
        if (Z.value)
          return "No selection";
        const L = u.value ? getComputedStyle(u.value) : null, Ne = ((a = u.value) == null ? void 0 : a.clientWidth) - parseInt(L == null ? void 0 : L.paddingLeft) - parseInt(L == null ? void 0 : L.paddingRight);
        let I = t.value.size + " selected - ", le = !0;
        for (let Ee of t.value)
          if (le ? le = !1 : I += ", ", I += (g = (c = n.map.get(Ee[0])) == null ? void 0 : c.value) != null ? g : f.value ? "Loading..." : "Value not found", Ne < X(I))
            return t.value.size + " selected";
        return I;
      } else
        for (let L of t.value)
          return (j = (M = n.map.get(L[0])) == null ? void 0 : M.value) != null ? j : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: _e, containerProps: xe, wrapperProps: Se } = ye(
      m,
      {
        itemHeight: 32
      }
    );
    return (a, c) => (v(), y(A, null, [
      e.showSelected ? (v(), y("div", $e, [
        (v(!0), y(A, null, U(d(t), (g) => {
          var M;
          return v(), y("div", {
            key: g,
            onClick: (j) => q(g[0]),
            class: "selection-badge"
          }, [
            ne(P((M = d(n).find((j) => j.key == g[0])) == null ? void 0 : M.value) + " ", 1),
            k("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, Te)
          ], 8, qe);
        }), 128))
      ])) : N("", !0),
      k("input", H({
        onFocus: c[0] || (c[0] = (g) => S.value = !0),
        onClick: c[1] || (c[1] = (g) => S.value = !0),
        ref_key: "inputNode",
        ref: u,
        value: d(be),
        class: "extra-select extra-select-input",
        readonly: ""
      }, a.$attrs), null, 16, je),
      O.value ? (v(), Q(Y, {
        key: 1,
        to: O.value
      }, [
        D(k("div", {
          class: ie(["extra-select dropdown", { searching: d(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: ce(d(K))
        }, [
          e.search ? (v(), y("div", Pe, [
            D(k("input", {
              ref_key: "searchNode",
              ref: x,
              class: "extra-select-search",
              "onUpdate:modelValue": c[2] || (c[2] = (g) => de(r) ? r.value = g : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Le, d(r)]
            ])
          ])) : N("", !0),
          d(r).length >= e.minChars ? (v(), y(A, { key: 1 }, [
            d(l) ? (v(), y("div", ze, [
              d(r).length == 0 ? (v(), y("div", {
                key: 0,
                onClick: T,
                class: "all-select"
              }, [
                k("div", Be, [
                  k("input", {
                    checked: d(b),
                    type: "checkbox"
                  }, null, 8, Ie),
                  We
                ])
              ])) : N("", !0),
              d(m).length > 0 && d(r).length > 0 ? (v(), y("div", {
                key: 1,
                onClick: h,
                class: "all-select"
              }, [
                k("div", Ue, [
                  k("input", {
                    checked: d(E),
                    type: "checkbox"
                  }, null, 8, He),
                  De
                ])
              ])) : N("", !0),
              k("div", {
                class: "clear",
                onClick: B
              }, "Clear")
            ])) : N("", !0),
            d(m).length == 0 ? (v(), y("div", Je, "No matches found")) : N("", !0)
          ], 64)) : (v(), y("div", Ke, "Insert at least " + P(e.minChars) + " characters", 1)),
          k("div", H(d(xe), { class: "scroller" }), [
            k("div", fe(ve(d(Se))), [
              (v(!0), y(A, null, U(d(_e), (g) => (v(), y("button", {
                key: g.index,
                class: "dropdown-row",
                onClick: pe((M) => q(g.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", Ge, [
                  d(l) ? (v(), y("input", {
                    key: 0,
                    checked: d(t).has(g.data.key),
                    type: "checkbox"
                  }, null, 8, Qe)) : N("", !0),
                  ne(" " + P(g.data.value), 1)
                ])
              ], 8, Xe))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, S.value]
        ])
      ], 8, ["to"])) : N("", !0),
      e.originalNode ? (v(), Q(Y, {
        key: 2,
        to: e.originalNode
      }, [
        (v(!0), y(A, null, U(d(t), (g) => (v(), y("option", {
          key: g[0],
          selected: "selected",
          value: g[0]
        }, null, 8, Ye))), 128))
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}), et = {
  key: 0,
  class: "no-matches"
}, tt = { key: 1 }, lt = ["onClick"], at = { class: "row-input" }, nt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, ot = /* @__PURE__ */ Object.assign(nt, {
  props: {
    originalNode: { type: Object, required: !1 },
    options: { type: Array, required: !1 },
    modelValue: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    url: { type: String, required: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: w }) {
    var q, B, T;
    const e = s, { options: l } = ge(null, G(e, "options"), C([])), n = (q = e.originalNode) == null ? void 0 : q.classList, t = Object.values((T = (B = e.originalNode) == null ? void 0 : B.style) != null ? T : {});
    me(e.originalNode);
    const { filterText: i, filteredOptions: o, filterValues: r } = ke(l, e.filterFields), { searchingFlag: m } = we(
      l,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      r,
      e.fetchMode,
      e.fetchOptions
    ), _ = C(null), f = C(null), u = C(!1), p = C(null), x = function(h) {
      const b = J(h.target);
      b.push(h.target), !b.includes(_.value) && !b.includes(f.value) && (u.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let h = !1;
        p.value = J(_.value).find((b) => !!(b instanceof Element && (b.matches(e.dropdownContainer) && (h = !0), h && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(b).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let h of n)
          h != "extrasuggest" && _.value.classList.add(h);
        for (let h of t)
          _.value.style[h] = e.originalNode.style[h];
        t.includes("background-color") || (_.value.style.backgroundColor = "white"), i.value = e.originalNode.value, z(() => {
          e.modelValue != null && (i.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", x), window.document.addEventListener("focusin", x);
    }), re(() => {
      window.document.removeEventListener("mousedown", x), window.document.removeEventListener("focusin", x);
    });
    const { dropdownStyle: S } = Ce(l, C([]), u, _, f, p, e.maxWidth), O = (h) => {
      i.value = l.map.get(h).value, u.value = !1;
    }, F = () => {
      var h;
      e.originalNode && (e.originalNode.value = i.value, (h = e.originalNode) == null || h.dispatchEvent(new Event("change", { bubbles: !0 }))), w("update:modelValue", i.value);
    };
    ue(() => u.value, (h) => {
      h === !1 && F();
    });
    const { list: K, containerProps: X, wrapperProps: $ } = ye(
      o,
      {
        itemHeight: 32
      }
    );
    return (h, b) => (v(), y(A, null, [
      D(k("input", H({
        onFocus: b[0] || (b[0] = (E) => u.value = !0),
        onClick: b[1] || (b[1] = (E) => u.value = !0),
        ref_key: "inputNode",
        ref: _,
        "onUpdate:modelValue": b[2] || (b[2] = (E) => de(i) ? i.value = E : null),
        class: "extra-select extra-select-input"
      }, h.$attrs), null, 16), [
        [Ae, d(i)]
      ]),
      p.value ? (v(), Q(Y, {
        key: 0,
        to: p.value
      }, [
        D(k("div", {
          class: ie(["extra-select dropdown", { searching: d(m) > 0 }]),
          ref_key: "dropdownNode",
          ref: f,
          style: ce(d(S))
        }, [
          d(i).length >= e.minChars ? (v(), y(A, { key: 0 }, [
            d(o).length == 0 ? (v(), y("div", et, "No matches found")) : N("", !0)
          ], 64)) : (v(), y("div", tt, "Insert at least " + P(e.minChars) + " characters", 1)),
          k("div", H(d(X), { class: "scroller" }), [
            k("div", fe(ve(d($))), [
              (v(!0), y(A, null, U(d(K), (E) => (v(), y("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: pe((Z) => O(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", at, P(E.data.value), 1)
              ], 8, lt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, u.value]
        ])
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}), it = Re, ct = ot;
export {
  it as ExtraSelect,
  ct as ExtraSuggest,
  it as default
};
