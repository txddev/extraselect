import { ref as C, watchEffect as I, computed as F, watchPostEffect as Le, toRef as Q, onMounted as se, onUnmounted as re, watch as ue, nextTick as ae, openBlock as p, createElementBlock as y, Fragment as M, renderList as D, unref as d, createTextVNode as ne, toDisplayString as B, createElementVNode as b, createCommentVNode as E, mergeProps as J, createBlock as R, Teleport as Y, withDirectives as K, normalizeClass as ie, normalizeStyle as ce, isRef as de, vModelText as Ae, normalizeProps as fe, guardReactiveProps as ve, withModifiers as pe, vShow as he, vModelDynamic as Ve } from "vue";
import { useVirtualList as me } from "@vueuse/core";
import { empty as Me, offset as W, getParents as j } from "@txd/utils";
const Fe = (s, w) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: s.value,
    get: () => s.value,
    push: (a, l, t = null) => {
      const i = s.map.get(a);
      if (i)
        i.value = l, i.data = t;
      else {
        let v = { value: l, key: a, data: t };
        s.value.push(v), s.map.set(v.key, v);
      }
    },
    addRange: (a) => {
      for (let l of a)
        s.actions.push(l.key, l.value, l.data);
    },
    remove: (a) => {
      s.value.splice(s.value.findIndex((l) => l.key == a), 1);
    },
    clear: () => {
      s.value = [];
    },
    sort: (a = null) => {
      a == null && (a = (l, t) => l.value.localeCompare(t.value)), s.value = s.value.sort(a);
    },
    setDefault: function(a) {
      this.defaultArray = a;
    },
    restoreDefault: function() {
      s.value = this.defaultArray;
    },
    filter: function(a) {
    }
  };
  window.ExtraSelectOptions[w] = e, s.actions = e;
};
let Te = 1;
const ye = (s) => {
  s && (s.style.display = "none", Me(s));
}, ge = (s, w, e, a) => {
  var m;
  const l = C(/* @__PURE__ */ new Map());
  I(() => {
    if (Array.isArray(e.value)) {
      l.value.clear();
      for (let n of e.value)
        l.value.set(n, n);
    }
  });
  const t = C([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, I(() => {
    w.value && (t.value = w.value, t.rebuildMap());
  }), s) {
    l.value.clear();
    for (let n of Array.apply(null, s.selectedOptions).map((u) => u.value).filter((u) => u))
      l.value.set(n, n);
    t.value = Array.apply(null, s.options).reduce((n, u) => (n.push({ value: u.text, key: u.value, data: u.dataset }), n), []), t.rebuildMap();
  }
  if (Array.isArray(a))
    for (let n of a)
      l.value.set(n, n);
  else
    a != null && l.value.set(a, a);
  Fe(t, (m = s == null ? void 0 : s.id) != null ? m : "extraselect_" + (++Te).toString());
  const i = [];
  return l.value.forEach((n, u) => {
    i.push([u, n]);
  }), { options: t, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [n, u] of i)
      l.value.set(n, u);
  } };
}, oe = async function(s, w = null, e = {}) {
  var t;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: w, ...e.body })
  };
  return await (await fetch(s, a)).json();
}, we = (s, w, e, a, l, t, i = "limited", v = {}) => {
  const m = C(0), n = C(!1), u = F(() => n.value || m.value > 0);
  if (w != null && w.length > 0)
    if (e) {
      const h = [];
      I((f) => {
        if (a.value.length >= l) {
          let c = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              c = !h.includes(a.value);
              break;
            case "complete":
              c = h.reduce((x, N) => x && !a.value.startsWith(N), !0);
              break;
          }
          if (c) {
            n.value = !0;
            const x = setTimeout(() => {
              h.push(a.value), m.value += 1, v.body = { ...v.body, ...t.value }, oe(w, a.value, v).then((N) => {
                s.actions.addRange(N), s.actions.sort(), m.value -= 1, n.value = !1;
              });
            }, 500);
            f(() => {
              clearTimeout(x);
            });
          }
        }
      });
    } else
      oe(w, null, v).then((h) => {
        s.actions.addRange(h), s.actions.sort();
      });
  return { searchingFlag: u };
}, ke = (s, w) => {
  const e = C(""), a = C([]), l = C({});
  for (let i of w) {
    let v = document.getElementById(i);
    l.value[i] = v == null ? void 0 : v.value, v && v.addEventListener("change", (m) => {
      l.value[i] = m.target.value;
    });
  }
  const t = function(i, v) {
    let m = i.value;
    return Object.keys(l.value).length > 0 && (m = m.filter((n) => {
      var u, h;
      for (let f in l.value)
        if (((u = l.value[f]) != null ? u : "").length > 0 && (!((h = n.data) != null && h.hasOwnProperty(f)) || n.data[f] != l.value[f]))
          return !1;
      return !0;
    })), v.length > 0 && (m = m.filter((n) => n.value.toLowerCase().includes(v.toLowerCase()))), m;
  };
  return I(() => {
    a.value = t(s, e.value);
  }), { filterText: e, filteredOptions: a, filterValues: l };
}, be = (s, w, e, a, l, t, i) => {
  const v = getComputedStyle(document.querySelector("body")).font, m = function(h) {
    const c = document.createElement("canvas").getContext("2d");
    return c.font = v, c.measureText(h).width;
  }, n = F(() => {
    var f, c;
    const h = (f = W(a.value).width) != null ? f : 100;
    if (i === "inherit")
      return h;
    if (i == null || i === "dynamic") {
      const x = (c = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? c : 16;
      return Math.max(h, Math.max(...s.value.map((N) => m(N.value))) + 20 + x * 3);
    }
    return i;
  }), u = C({
    position: "absolute",
    "min-width": "max-content"
  });
  return Le(() => {
    e.value < 0 && console.log("is open"), w.value.size < 0 && console.log("empty selection");
    var h = W(a.value), f = W(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var f = W(t.value);
    let c = -f.left + h.left;
    const x = window.document.documentElement.clientWidth;
    c + n.value > x && (c = x - n.value), u.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (-f.top + h.top + h.height).toString() + "px",
      left: c.toString() + "px"
    };
  }), { dropdownStyle: u, getTextWidth: m };
}, $e = {
  key: 0,
  class: "extra-select selection"
}, qe = ["onClick"], je = ["innerHTML"], Pe = ["value"], ze = {
  key: 0,
  class: "input-searching"
}, Be = {
  key: 0,
  class: "allselect-clear"
}, Ie = { class: "row-input" }, He = ["checked"], Ue = /* @__PURE__ */ b("b", null, "Select all", -1), We = { class: "row-input" }, De = ["checked"], Je = /* @__PURE__ */ b("b", null, "Select Filtered", -1), Ke = {
  key: 1,
  class: "no-matches"
}, Xe = { key: 2 }, Ge = ["onClick"], Qe = { class: "row-input" }, Re = ["checked"], Ye = ["value"], Ze = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, et = /* @__PURE__ */ Object.assign(Ze, {
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
    var Z, ee, te;
    const e = s, a = F(() => {
      var o, r;
      return (r = (o = e.originalNode) == null ? void 0 : o.multiple) != null ? r : e.multiple;
    }), { options: l, selectedOptions: t, onReset: i } = ge(e.originalNode, Q(e, "options"), Q(e, "modelValue"), e.initialValue), v = (Z = e.originalNode) == null ? void 0 : Z.classList, m = Object.values((te = (ee = e.originalNode) == null ? void 0 : ee.style) != null ? te : {});
    ye(e.originalNode);
    const { filterText: n, filteredOptions: u, filterValues: h } = ke(l, e.filterFields), { searchingFlag: f } = we(
      l,
      e.url,
      e.searchableUrl,
      n,
      e.minChars,
      h,
      e.fetchMode,
      e.fetchOptions
    ), c = C(null), x = C(null), N = C(null), O = C(!1), A = C(null), T = function(o) {
      const r = j(o.target);
      r.push(o.target), !r.includes(c.value) && !r.includes(x.value) && (O.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let o = !1;
        A.value = j(c.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (o = !0), o && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if (A.value == null && (A.value = document.querySelector("body")), e.originalNode) {
        for (let r of v)
          r != "extraselect" && c.value.classList.add(r);
        for (let r of m)
          c.value.style[r] = e.originalNode.style[r];
        m.includes("background-color") || (c.value.style.backgroundColor = "white");
        let o = j(c.value, "form").pop();
        o instanceof HTMLElement && o.matches("form") && o.addEventListener("reset", () => setTimeout(i));
      }
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), re(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: X, getTextWidth: G } = be(l, t, O, c, x, A, e.maxWidth), $ = (o) => {
      ae(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), w("update:modelValue", o);
    }, P = (o) => {
      a.value ? t.value.has(o) ? t.value.delete(o) : t.value.set(o, o) : (t.value.clear(), t.value.set(o, o), O.value = !1), $(Array.from(t.value.keys()));
    }, H = (o) => {
      k(o, !1), n.value = "";
    }, k = (o, r = null) => {
      r == null && (r = !S.value), r ? (t.value.clear(), l.value.forEach((g) => t.value.set(g.key, g.key))) : t.value.clear(), $(Array.from(t.value.keys()));
    }, _ = () => {
      L.value ? u.value.forEach((o) => {
        t.value.has(o.key) && t.value.delete(o.key);
      }) : u.value.forEach((o) => {
        t.value.has(o.key) || t.value.set(o.key, o.key);
      }), $(Array.from(t.value.keys()));
    };
    ue(O, (o, r) => {
      o != r && (o ? e.search && ae(() => {
        N.value.focus({ focusVisible: !0 });
      }) : n.value = "");
    });
    const S = F(() => t.value.size == l.value.length), L = F(() => u.value.reduce((o, r) => o && t.value.has(r.key), !0)), Ce = F(() => t.value.size == 0), _e = F(() => {
      var o, r, g, q, z;
      if (l.value.length < 0)
        return "";
      if (a.value) {
        if (Ce.value)
          return "No selection";
        if (!e.searchableUrl && S.value)
          return "All selected";
        const V = c.value ? getComputedStyle(c.value) : null, Ne = ((o = c.value) == null ? void 0 : o.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let U = t.value.size + " selected - ", le = !0;
        for (let Oe of t.value)
          if (le ? le = !1 : U += ", ", U += (g = (r = l.map.get(Oe[0])) == null ? void 0 : r.value) != null ? g : f.value ? "Loading..." : "Value not found", Ne < G(U))
            return t.value.size + " selected";
        return U;
      } else
        for (let V of t.value)
          return (z = (q = l.map.get(V[0])) == null ? void 0 : q.value) != null ? z : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: xe, containerProps: Se, wrapperProps: Ee } = me(
      u,
      {
        itemHeight: 32
      }
    );
    return (o, r) => (p(), y(M, null, [
      e.showSelected ? (p(), y("div", $e, [
        (p(!0), y(M, null, D(d(t), (g) => {
          var q;
          return p(), y("div", {
            key: g,
            onClick: (z) => P(g[0]),
            class: "selection-badge"
          }, [
            ne(B((q = d(l).find((z) => z.key == g[0])) == null ? void 0 : q.value) + " ", 1),
            b("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, je)
          ], 8, qe);
        }), 128))
      ])) : E("", !0),
      b("input", J({
        onFocus: r[0] || (r[0] = (g) => O.value = !0),
        onClick: r[1] || (r[1] = (g) => O.value = !0),
        ref_key: "inputNode",
        ref: c,
        value: d(_e),
        class: "extra-select extra-select-input",
        readonly: ""
      }, o.$attrs), null, 16, Pe),
      A.value ? (p(), R(Y, {
        key: 1,
        to: A.value
      }, [
        K(b("div", {
          class: ie(["extra-select dropdown", { searching: d(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: x,
          style: ce(d(X))
        }, [
          e.search ? (p(), y("div", ze, [
            K(b("input", {
              ref_key: "searchNode",
              ref: N,
              class: "extra-select-search",
              "onUpdate:modelValue": r[2] || (r[2] = (g) => de(n) ? n.value = g : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ae, d(n)]
            ])
          ])) : E("", !0),
          d(n).length >= e.minChars ? (p(), y(M, { key: 1 }, [
            d(a) ? (p(), y("div", Be, [
              d(n).length == 0 ? (p(), y("div", {
                key: 0,
                onClick: k,
                class: "all-select"
              }, [
                b("div", Ie, [
                  b("input", {
                    checked: d(S),
                    type: "checkbox"
                  }, null, 8, He),
                  Ue
                ])
              ])) : E("", !0),
              d(u).length > 0 && d(n).length > 0 ? (p(), y("div", {
                key: 1,
                onClick: _,
                class: "all-select"
              }, [
                b("div", We, [
                  b("input", {
                    checked: d(L),
                    type: "checkbox"
                  }, null, 8, De),
                  Je
                ])
              ])) : E("", !0),
              b("div", {
                class: "clear",
                onClick: H
              }, "Clear")
            ])) : E("", !0),
            d(u).length == 0 ? (p(), y("div", Ke, "No matches found")) : E("", !0)
          ], 64)) : (p(), y("div", Xe, "Insert at least " + B(e.minChars) + " characters", 1)),
          b("div", J(d(Se), { class: "scroller" }), [
            b("div", fe(ve(d(Ee))), [
              (p(!0), y(M, null, D(d(xe), (g) => (p(), y("button", {
                key: g.index,
                class: "dropdown-row",
                onClick: pe((q) => P(g.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                b("div", Qe, [
                  d(a) ? (p(), y("input", {
                    key: 0,
                    checked: d(t).has(g.data.key),
                    type: "checkbox"
                  }, null, 8, Re)) : E("", !0),
                  ne(" " + B(g.data.value), 1)
                ])
              ], 8, Ge))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, O.value]
        ])
      ], 8, ["to"])) : E("", !0),
      e.originalNode ? (p(), R(Y, {
        key: 2,
        to: e.originalNode
      }, [
        (p(!0), y(M, null, D(d(t), (g) => (p(), y("option", {
          key: g[0],
          selected: "selected",
          value: g[0]
        }, null, 8, Ye))), 128))
      ], 8, ["to"])) : E("", !0)
    ], 64));
  }
}), tt = {
  key: 0,
  class: "no-matches"
}, lt = { key: 1 }, at = ["onClick"], nt = { class: "row-input" }, ot = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, st = /* @__PURE__ */ Object.assign(ot, {
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
    var $, P, H;
    const e = s, { options: a } = ge(null, Q(e, "options"), C([])), l = ($ = e.originalNode) == null ? void 0 : $.classList, t = Object.values((H = (P = e.originalNode) == null ? void 0 : P.style) != null ? H : {});
    ye(e.originalNode);
    const { filterText: i, filteredOptions: v, filterValues: m } = ke(a, e.filterFields), { searchingFlag: n } = we(
      a,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), u = C(null), h = C(null), f = C(!1), c = C(null), x = function(k) {
      const _ = j(k.target);
      _.push(k.target), !_.includes(u.value) && !_.includes(h.value) && (f.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let k = !1;
        c.value = j(u.value).find((_) => !!(_ instanceof Element && (_.matches(e.dropdownContainer) && (k = !0), k && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(_).position))));
      }
      if (c.value == null && (c.value = document.querySelector("body")), e.originalNode) {
        for (let L of l)
          L != "extrasuggest" && u.value.classList.add(L);
        for (let L of t)
          u.value.style[L] = e.originalNode.style[L];
        t.includes("background-color") || (u.value.style.backgroundColor = "white"), i.value = e.originalNode.value, I(() => {
          e.modelValue != null && (i.value = e.modelValue);
        });
        const k = i.value, _ = () => {
          i.value = k;
        };
        let S = j(u.value, "form").pop();
        S instanceof HTMLElement && S.matches("form") && S.addEventListener("reset", () => setTimeout(_));
      }
      window.document.addEventListener("mousedown", x), window.document.addEventListener("focusin", x);
    }), re(() => {
      window.document.removeEventListener("mousedown", x), window.document.removeEventListener("focusin", x);
    });
    const { dropdownStyle: N } = be(a, C([]), f, u, h, c, e.maxWidth), O = (k) => {
      i.value = a.map.get(k).value, f.value = !1;
    }, A = () => {
      var k;
      e.originalNode && (e.originalNode.value = i.value, (k = e.originalNode) == null || k.dispatchEvent(new Event("change", { bubbles: !0 }))), w("update:modelValue", i.value);
    };
    ue(() => f.value, (k) => {
      k === !1 && A();
    });
    const { list: T, containerProps: X, wrapperProps: G } = me(
      v,
      {
        itemHeight: 32
      }
    );
    return (k, _) => (p(), y(M, null, [
      K(b("input", J({
        onFocus: _[0] || (_[0] = (S) => f.value = !0),
        onClick: _[1] || (_[1] = (S) => f.value = !0),
        ref_key: "inputNode",
        ref: u,
        "onUpdate:modelValue": _[2] || (_[2] = (S) => de(i) ? i.value = S : null),
        class: "extra-select extra-select-input"
      }, k.$attrs), null, 16), [
        [Ve, d(i)]
      ]),
      c.value ? (p(), R(Y, {
        key: 0,
        to: c.value
      }, [
        K(b("div", {
          class: ie(["extra-select dropdown", { searching: d(n) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: ce(d(N))
        }, [
          d(i).length >= e.minChars ? (p(), y(M, { key: 0 }, [
            d(v).length == 0 ? (p(), y("div", tt, "No matches found")) : E("", !0)
          ], 64)) : (p(), y("div", lt, "Insert at least " + B(e.minChars) + " characters", 1)),
          b("div", J(d(X), { class: "scroller" }), [
            b("div", fe(ve(d(G))), [
              (p(!0), y(M, null, D(d(T), (S) => (p(), y("button", {
                key: S.index,
                class: "dropdown-row",
                onClick: pe((L) => O(S.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                b("div", nt, B(S.data.value), 1)
              ], 8, at))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, f.value]
        ])
      ], 8, ["to"])) : E("", !0)
    ], 64));
  }
}), ct = et, dt = st;
export {
  ct as ExtraSelect,
  dt as ExtraSuggest,
  ct as default
};
