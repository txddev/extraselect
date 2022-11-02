import { ref as b, watchEffect as z, computed as A, watchPostEffect as Ee, onMounted as oe, onUnmounted as se, watch as re, nextTick as le, openBlock as v, createElementBlock as y, Fragment as V, renderList as U, unref as d, createTextVNode as ne, toDisplayString as P, createElementVNode as k, createCommentVNode as N, mergeProps as H, createBlock as G, Teleport as Q, withDirectives as D, normalizeClass as ue, normalizeStyle as ie, isRef as ce, vModelText as Oe, normalizeProps as de, guardReactiveProps as fe, withModifiers as ve, vShow as pe, vModelDynamic as Le } from "vue";
import { useVirtualList as he } from "@vueuse/core";
import { empty as Ve, offset as W, getParents as J } from "@txd/utils";
const Ae = (s, w) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: s.value,
    get: () => s.value,
    push: (l, a, t = null) => {
      const i = s.map.get(l);
      if (i)
        i.value = a, i.data = t;
      else {
        let o = { value: a, key: l, data: t };
        s.value.push(o), s.map.set(o.key, o);
      }
    },
    addRange: (l) => {
      for (let a of l)
        s.actions.push(a.key, a.value, a.data);
    },
    remove: (l) => {
      s.value.splice(s.value.findIndex((a) => a.key == l), 1);
    },
    clear: () => {
      s.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (a, t) => a.value.localeCompare(t.value)), s.value = s.value.sort(l);
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
let Fe = 1;
const ye = (s) => {
  s && (s.style.display = "none", Ve(s));
}, me = (s, w, e, l) => {
  var i;
  const a = b(/* @__PURE__ */ new Map());
  z(() => {
    a.value.clear();
    for (let o of e)
      a.value.set(o, o);
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let o of t.value)
        t.map.set(o.key, o);
  }, z(() => {
    w && (t.value = w, t.rebuildMap());
  }), s) {
    a.value.clear();
    for (let o of Array.apply(null, s.selectedOptions).map((r) => r.value).filter((r) => r))
      a.value.set(o, o);
    t.value = Array.apply(null, s.options).reduce((o, r) => (o.push({ value: r.text, key: r.value, data: r.dataset }), o), []), t.rebuildMap();
  }
  if (Array.isArray(l))
    for (let o of l)
      a.value.set(o, o);
  else
    l != null && a.value.set(l, l);
  return Ae(t, (i = s == null ? void 0 : s.id) != null ? i : "extraselect_" + (++Fe).toString()), { options: t, selectedOptions: a };
}, ae = async function(s, w = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: w, ...e.body })
  };
  return await (await fetch(s, l)).json();
}, ge = (s, w, e, l, a, t, i = "limited", o = {}) => {
  const r = b(0), m = b(!1), _ = A(() => m.value || r.value > 0);
  if (w != null && w.length > 0)
    if (e) {
      const f = [];
      z((u) => {
        if (l.value.length >= a) {
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
              f.push(l.value), r.value += 1, o.body = { ...o.body, ...t.value }, ae(w, l.value, o).then((S) => {
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
      ae(w, null, o).then((f) => {
        s.actions.addRange(f), s.actions.sort();
      });
  return { searchingFlag: _ };
}, we = (s, w) => {
  const e = b(""), l = b([]), a = b({});
  for (let i of w) {
    let o = document.getElementById(i);
    a.value[i] = o == null ? void 0 : o.value, o && o.addEventListener("change", (r) => {
      a.value[i] = r.target.value;
    });
  }
  const t = function(i, o) {
    let r = i.value;
    return Object.keys(a.value).length > 0 && (r = r.filter((m) => {
      var _, f;
      for (let u in a.value)
        if (((_ = a.value[u]) != null ? _ : "").length > 0 && (!((f = m.data) != null && f.hasOwnProperty(u)) || m.data[u] != a.value[u]))
          return !1;
      return !0;
    })), o.length > 0 && (r = r.filter((m) => m.value.toLowerCase().includes(o.toLowerCase()))), r;
  };
  return z(() => {
    l.value = t(s, e.value);
  }), { filterText: e, filteredOptions: l, filterValues: a };
}, ke = (s, w, e, l, a, t, i) => {
  const o = getComputedStyle(document.querySelector("body")).font, r = function(f) {
    const p = document.createElement("canvas").getContext("2d");
    return p.font = o, p.measureText(f).width;
  }, m = A(() => {
    var u, p;
    const f = (u = W(l.value).width) != null ? u : 100;
    if (i === "inherit")
      return f;
    if (i == null || i === "dynamic") {
      const x = (p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? p : 16;
      return Math.max(f, Math.max(...s.value.map((S) => r(S.value))) + 20 + x * 3);
    }
    return i;
  }), _ = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ee(() => {
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
}, Me = {
  key: 0,
  class: "extra-select selection"
}, $e = ["onClick"], qe = ["innerHTML"], Te = ["value"], je = {
  key: 0,
  class: "input-searching"
}, Pe = {
  key: 0,
  class: "allselect-clear"
}, ze = { class: "row-input" }, Be = ["checked"], Ie = /* @__PURE__ */ k("b", null, "Select all", -1), We = { class: "row-input" }, Ue = ["checked"], He = /* @__PURE__ */ k("b", null, "Select Filtered", -1), De = {
  key: 1,
  class: "no-matches"
}, Je = { key: 2 }, Ke = ["onClick"], Xe = { class: "row-input" }, Ge = ["checked"], Qe = ["value"], Ye = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Ze = /* @__PURE__ */ Object.assign(Ye, {
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
    var Z, R, ee;
    const e = s, l = A(() => {
      var n, c;
      return (c = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? c : e.multiple;
    }), { options: a, selectedOptions: t } = me(e.originalNode, e.options, e.modelValue, e.initialValue), i = (Z = e.originalNode) == null ? void 0 : Z.classList, o = Object.values((ee = (R = e.originalNode) == null ? void 0 : R.style) != null ? ee : {});
    ye(e.originalNode);
    const { filterText: r, filteredOptions: m, filterValues: _ } = we(a, e.filterFields), { searchingFlag: f } = ge(
      a,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      _,
      e.fetchMode,
      e.fetchOptions
    ), u = b(null), p = b(null), x = b(null), S = b(!1), O = b(null), F = function(n) {
      const c = J(n.target);
      c.push(n.target), !c.includes(u.value) && !c.includes(p.value) && (S.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let n = !1;
        O.value = J(u.value).find((c) => !!(c instanceof Element && (c.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(c).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), e.originalNode) {
        for (let n of i)
          n != "extraselect" && u.value.classList.add(n);
        for (let n of o)
          u.value.style[n] = e.originalNode.style[n];
        o.includes("background-color") || (u.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), se(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: K, getTextWidth: X } = ke(a, t, S, u, p, O, e.maxWidth), $ = (n) => {
      le(
        () => {
          var c;
          return (c = e.originalNode) == null ? void 0 : c.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), w("update:modelValue", n);
    }, q = (n) => {
      l.value ? t.value.has(n) ? t.value.delete(n) : t.value.set(n, n) : (t.value.clear(), t.value.set(n, n), S.value = !1), $(Array.from(t.value.keys()));
    }, B = (n) => {
      T(n, !1), r.value = "";
    }, T = (n, c = null) => {
      c == null && (c = !C.value), c ? (t.value.clear(), a.value.forEach((g) => t.value.set(g.key, g.key))) : t.value.clear(), $(Array.from(t.value.keys()));
    }, h = () => {
      E.value ? m.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : m.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), $(Array.from(t.value.keys()));
    };
    re(S, (n, c) => {
      n != c && (n ? e.search && le(() => {
        x.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const C = A(() => t.value.size == a.value.length), E = A(() => m.value.reduce((n, c) => n && t.value.has(c.key), !0)), Y = A(() => t.value.size == 0), Ce = A(() => {
      var n, c, g, M, j;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (C.value)
          return "All selected";
        if (Y.value)
          return "No selection";
        const L = u.value ? getComputedStyle(u.value) : null, Se = ((n = u.value) == null ? void 0 : n.clientWidth) - parseInt(L == null ? void 0 : L.paddingLeft) - parseInt(L == null ? void 0 : L.paddingRight);
        let I = t.value.size + " selected - ", te = !0;
        for (let Ne of t.value)
          if (te ? te = !1 : I += ", ", I += (g = (c = a.map.get(Ne[0])) == null ? void 0 : c.value) != null ? g : f.value ? "Loading..." : "Value not found", Se < X(I))
            return t.value.size + " selected";
        return I;
      } else
        for (let L of t.value)
          return (j = (M = a.map.get(L[0])) == null ? void 0 : M.value) != null ? j : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: be, containerProps: _e, wrapperProps: xe } = he(
      m,
      {
        itemHeight: 32
      }
    );
    return (n, c) => (v(), y(V, null, [
      e.showSelected ? (v(), y("div", Me, [
        (v(!0), y(V, null, U(d(t), (g) => {
          var M;
          return v(), y("div", {
            key: g,
            onClick: (j) => q(g[0]),
            class: "selection-badge"
          }, [
            ne(P((M = d(a).find((j) => j.key == g[0])) == null ? void 0 : M.value) + " ", 1),
            k("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, qe)
          ], 8, $e);
        }), 128))
      ])) : N("", !0),
      k("input", H({
        onFocus: c[0] || (c[0] = (g) => S.value = !0),
        onClick: c[1] || (c[1] = (g) => S.value = !0),
        ref_key: "inputNode",
        ref: u,
        value: d(Ce),
        class: "extra-select extra-select-input",
        readonly: ""
      }, n.$attrs), null, 16, Te),
      O.value ? (v(), G(Q, {
        key: 1,
        to: O.value
      }, [
        D(k("div", {
          class: ue(["extra-select dropdown", { searching: d(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: ie(d(K))
        }, [
          e.search ? (v(), y("div", je, [
            D(k("input", {
              ref_key: "searchNode",
              ref: x,
              class: "extra-select-search",
              "onUpdate:modelValue": c[2] || (c[2] = (g) => ce(r) ? r.value = g : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Oe, d(r)]
            ])
          ])) : N("", !0),
          d(r).length >= e.minChars ? (v(), y(V, { key: 1 }, [
            d(l) ? (v(), y("div", Pe, [
              d(r).length == 0 ? (v(), y("div", {
                key: 0,
                onClick: T,
                class: "all-select"
              }, [
                k("div", ze, [
                  k("input", {
                    checked: d(C),
                    type: "checkbox"
                  }, null, 8, Be),
                  Ie
                ])
              ])) : N("", !0),
              d(m).length > 0 && d(r).length > 0 ? (v(), y("div", {
                key: 1,
                onClick: h,
                class: "all-select"
              }, [
                k("div", We, [
                  k("input", {
                    checked: d(E),
                    type: "checkbox"
                  }, null, 8, Ue),
                  He
                ])
              ])) : N("", !0),
              k("div", {
                class: "clear",
                onClick: B
              }, "Clear")
            ])) : N("", !0),
            d(m).length == 0 ? (v(), y("div", De, "No matches found")) : N("", !0)
          ], 64)) : (v(), y("div", Je, "Insert at least " + P(e.minChars) + " characters", 1)),
          k("div", H(d(_e), { class: "scroller" }), [
            k("div", de(fe(d(xe))), [
              (v(!0), y(V, null, U(d(be), (g) => (v(), y("button", {
                key: g.index,
                class: "dropdown-row",
                onClick: ve((M) => q(g.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", Xe, [
                  d(l) ? (v(), y("input", {
                    key: 0,
                    checked: d(t).has(g.data.key),
                    type: "checkbox"
                  }, null, 8, Ge)) : N("", !0),
                  ne(" " + P(g.data.value), 1)
                ])
              ], 8, Ke))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [pe, S.value]
        ])
      ], 8, ["to"])) : N("", !0),
      e.originalNode ? (v(), G(Q, {
        key: 2,
        to: e.originalNode
      }, [
        (v(!0), y(V, null, U(d(t), (g) => (v(), y("option", {
          key: g[0],
          selected: "selected",
          value: g[0]
        }, null, 8, Qe))), 128))
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}), Re = {
  key: 0,
  class: "no-matches"
}, et = { key: 1 }, tt = ["onClick"], lt = { class: "row-input" }, nt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, at = /* @__PURE__ */ Object.assign(nt, {
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
    const e = s, { options: l } = me(null, e.options, []), a = (q = e.originalNode) == null ? void 0 : q.classList, t = Object.values((T = (B = e.originalNode) == null ? void 0 : B.style) != null ? T : {});
    ye(e.originalNode);
    const { filterText: i, filteredOptions: o, filterValues: r } = we(l, e.filterFields), { searchingFlag: m } = ge(
      l,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      r,
      e.fetchMode,
      e.fetchOptions
    ), _ = b(null), f = b(null), u = b(!1), p = b(null), x = function(h) {
      const C = J(h.target);
      C.push(h.target), !C.includes(_.value) && !C.includes(f.value) && (u.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let h = !1;
        p.value = J(_.value).find((C) => !!(C instanceof Element && (C.matches(e.dropdownContainer) && (h = !0), h && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(C).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let h of a)
          h != "extrasuggest" && _.value.classList.add(h);
        for (let h of t)
          _.value.style[h] = e.originalNode.style[h];
        t.includes("background-color") || (_.value.style.backgroundColor = "white"), i.value = e.originalNode.value, z(() => {
          e.modelValue != null && (i.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", x), window.document.addEventListener("focusin", x);
    }), se(() => {
      window.document.removeEventListener("mousedown", x), window.document.removeEventListener("focusin", x);
    });
    const { dropdownStyle: S } = ke(l, b([]), u, _, f, p, e.maxWidth), O = (h) => {
      i.value = l.map.get(h).value, u.value = !1;
    }, F = () => {
      var h;
      e.originalNode && (e.originalNode.value = i.value, (h = e.originalNode) == null || h.dispatchEvent(new Event("change", { bubbles: !0 }))), w("update:modelValue", i.value);
    };
    re(() => u.value, (h) => {
      h === !1 && F();
    });
    const { list: K, containerProps: X, wrapperProps: $ } = he(
      o,
      {
        itemHeight: 32
      }
    );
    return (h, C) => (v(), y(V, null, [
      D(k("input", H({
        onFocus: C[0] || (C[0] = (E) => u.value = !0),
        onClick: C[1] || (C[1] = (E) => u.value = !0),
        ref_key: "inputNode",
        ref: _,
        "onUpdate:modelValue": C[2] || (C[2] = (E) => ce(i) ? i.value = E : null),
        class: "extra-select extra-select-input"
      }, h.$attrs), null, 16), [
        [Le, d(i)]
      ]),
      p.value ? (v(), G(Q, {
        key: 0,
        to: p.value
      }, [
        D(k("div", {
          class: ue(["extra-select dropdown", { searching: d(m) > 0 }]),
          ref_key: "dropdownNode",
          ref: f,
          style: ie(d(S))
        }, [
          d(i).length >= e.minChars ? (v(), y(V, { key: 0 }, [
            d(o).length == 0 ? (v(), y("div", Re, "No matches found")) : N("", !0)
          ], 64)) : (v(), y("div", et, "Insert at least " + P(e.minChars) + " characters", 1)),
          k("div", H(d(X), { class: "scroller" }), [
            k("div", de(fe(d($))), [
              (v(!0), y(V, null, U(d(K), (E) => (v(), y("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: ve((Y) => O(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", lt, P(E.data.value), 1)
              ], 8, tt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [pe, u.value]
        ])
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}), ut = Ze, it = at;
export {
  ut as ExtraSelect,
  it as ExtraSuggest,
  ut as default
};
