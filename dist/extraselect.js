import { ref as S, watchEffect as H, computed as T, nextTick as Q, watchPostEffect as Fe, toRef as R, onMounted as oe, onUnmounted as re, watch as ue, openBlock as y, createElementBlock as g, Fragment as M, renderList as J, unref as v, createTextVNode as ne, toDisplayString as B, createElementVNode as x, createCommentVNode as F, mergeProps as K, createBlock as Y, Teleport as Z, withDirectives as X, normalizeClass as ie, normalizeStyle as ce, isRef as de, vModelText as Le, normalizeProps as fe, guardReactiveProps as ve, withModifiers as pe, vShow as he, vModelDynamic as Ae } from "vue";
import { useVirtualList as ye } from "@vueuse/core";
import { empty as Ve, offset as D, getParents as P } from "@txd/utils";
const Me = (o, k) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: o.value,
    get: () => o.value,
    push: (l, r, t = null) => {
      const m = o.map.get(l);
      if (m)
        m.value = r, m.data = t;
      else {
        let i = { value: r, key: l, data: t };
        o.value.push(i), o.map.set(i.key, i);
      }
    },
    addRange: (l) => {
      for (let r of l)
        o.actions.push(r.key, r.value, r.data);
    },
    remove: (l) => {
      o.value.splice(o.value.findIndex((r) => r.key == l), 1);
    },
    clear: () => {
      o.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (r, t) => r.value.localeCompare(t.value)), o.value = o.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      o.value = this.defaultArray;
    },
    filter: function(l) {
    }
  };
  window.ExtraSelectOptions[k] = e, o.actions = e;
};
let Te = 1;
const me = (o) => {
  o && (o.style.display = "none", Ve(o));
}, ge = (o, k, e, l) => {
  var w;
  const r = S(/* @__PURE__ */ new Map());
  H(() => {
    if (Array.isArray(e.value)) {
      r.value.clear();
      for (let c of e.value)
        r.value.set(c, c);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let c of t.value)
        t.map.set(c.key, c);
  }, H(() => {
    k.value && (t.value = k.value, t.rebuildMap());
  }), o) {
    r.value.clear();
    for (let c of Array.apply(null, o.selectedOptions).map((a) => a.value).filter((a) => a))
      r.value.set(c, c);
    t.value = Array.apply(null, o.options).reduce((c, a) => (c.push({ value: a.text, key: a.value, data: Object.assign({}, a.dataset) }), c), []), t.rebuildMap();
  }
  if (Array.isArray(l))
    for (let c of l)
      r.value.set(c, c);
  else
    l != null && r.value.set(l, l);
  Me(t, (w = o == null ? void 0 : o.id) != null ? w : "extraselect_" + (++Te).toString());
  const m = [];
  return r.value.forEach((c, a) => {
    m.push([a, c]);
  }), { options: t, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [c, a] of m)
      r.value.set(c, a);
  } };
}, se = async function(o, k = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: k, ...e.body })
  };
  return await (await fetch(o, l)).json();
}, ke = (o, k, e, l, r, t, m = "limited", i = {}) => {
  const w = S(0), c = S(!1), a = T(() => c.value || w.value > 0);
  if (k != null && k.length > 0)
    if (e) {
      const u = [];
      H((p) => {
        if (l.value.length >= r) {
          let f = !0;
          switch (m) {
            case "always":
              break;
            default:
            case "limited":
              f = !u.includes(l.value);
              break;
            case "complete":
              f = u.reduce((d, C) => d && !l.value.startsWith(C), !0);
              break;
          }
          if (f) {
            c.value = !0;
            const d = setTimeout(() => {
              u.push(l.value), w.value += 1, i.body = { ...i.body, ...t.value }, se(k, l.value, i).then((C) => {
                o.actions.addRange(C), o.actions.sort(), w.value -= 1, c.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(d);
            });
          }
        }
      });
    } else
      se(k, null, i).then((u) => {
        o.actions.addRange(u), o.actions.sort();
      });
  return { searchingFlag: a };
}, we = (o, k, e, l = [], r = []) => {
  const t = S(""), m = S([]), i = S({}), w = { ...l.reduce((a, u) => (a[u] = !1, a), {}), ...r.reduce((a, u) => (a[u] = !0, a), {}) };
  for (let a in w) {
    let u = w[a], p = document.getElementById(a);
    i.value[a] = p == null ? void 0 : p.value, p && p.addEventListener("change", (f) => {
      i.value[a] = f.target.value, u && Q(() => {
        console.log(Array.from(k.value.keys()));
        for (let d of Array.from(k.value.keys()))
          m.value.find((C) => C.key == d) || (console.log("toggling"), e(d, !1));
      });
    });
  }
  const c = function(a, u) {
    let p = a.value;
    return Object.keys(i.value).length > 0 && (p = p.filter((f) => {
      var d, C;
      for (let N in i.value) {
        const O = w[N] ? !0 : ((d = i.value[N]) != null ? d : "").length > 0;
        if (console.log(w, N, i.value[N], O), O && ((C = f.data) == null ? void 0 : C.hasOwnProperty(N)) && f.data[N] != i.value[N])
          return !1;
      }
      return !0;
    })), u.length > 0 && (p = p.filter((f) => f.value.toLowerCase().includes(u.toLowerCase()))), p;
  };
  return H(() => {
    m.value = c(o, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: i };
}, be = (o, k, e, l, r, t, m) => {
  const i = getComputedStyle(document.querySelector("body")).font, w = function(u) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = i, f.measureText(u).width;
  }, c = T(() => {
    var p, f;
    const u = (p = D(l.value).width) != null ? p : 100;
    if (m === "inherit")
      return u;
    if (m == null || m === "dynamic") {
      const d = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(u, Math.max(...o.value.map((C) => w(C.value))) + 20 + d * 3);
    }
    return m;
  }), a = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return Fe(() => {
    e.value < 0 && console.log("is open"), k.value.size < 0 && console.log("empty selection");
    var u = D(l.value), p = D(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var p = D(t.value);
    let f = -p.left + u.left;
    const d = window.document.documentElement.clientWidth;
    f + c.value > d && (f = d - c.value), a.value = {
      position: "absolute",
      "min-width": "max-content",
      width: c.value.toString() + "px",
      top: (-p.top + u.top + u.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: a, getTextWidth: w };
}, $e = {
  key: 0,
  class: "extra-select selection"
}, qe = ["onClick"], je = ["innerHTML"], Pe = ["value"], ze = {
  key: 0,
  class: "input-searching"
}, Be = {
  key: 0,
  class: "allselect-clear"
}, He = { class: "row-input" }, Ie = ["checked"], Ue = /* @__PURE__ */ x("b", null, "Select all", -1), We = { class: "row-input" }, De = ["checked"], Je = /* @__PURE__ */ x("b", null, "Select Filtered", -1), Ke = {
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
    hardFilterFields: { type: Array, default: [] },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: k }) {
    var ee, te, le;
    const e = o, l = T(() => {
      var n, s;
      return (s = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? s : e.multiple;
    }), { options: r, selectedOptions: t, onReset: m } = ge(e.originalNode, R(e, "options"), R(e, "modelValue"), e.initialValue), i = (ee = e.originalNode) == null ? void 0 : ee.classList, w = Object.values((le = (te = e.originalNode) == null ? void 0 : te.style) != null ? le : {});
    me(e.originalNode);
    const c = (n, s = null) => {
      if (l.value) {
        let h = s;
        switch (h == null && (h = !t.value.has(n)), h) {
          case !0:
            t.value.set(n, n);
            break;
          case !1:
            t.value.delete(n);
            break;
        }
      } else
        t.value.clear(), s !== !1 && t.value.set(n, n), O.value = !1;
      q(Array.from(t.value.keys()));
    }, { filterText: a, filteredOptions: u, filterValues: p } = we(r, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: f } = ke(
      r,
      e.url,
      e.searchableUrl,
      a,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), d = S(null), C = S(null), N = S(null), O = S(!1), A = S(null), $ = function(n) {
      const s = P(n.target);
      s.push(n.target), !s.includes(d.value) && !s.includes(C.value) && (O.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let n = !1;
        A.value = P(d.value).find((s) => !!(s instanceof Element && (s.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(s).position))));
      }
      if (A.value == null && (A.value = document.querySelector("body")), e.originalNode) {
        for (let s of i)
          s != "extraselect" && d.value.classList.add(s);
        for (let s of w)
          d.value.style[s] = e.originalNode.style[s];
        w.includes("background-color") || (d.value.style.backgroundColor = "white");
        let n = P(d.value, "form").pop();
        n instanceof HTMLElement && n.matches("form") && n.addEventListener("reset", () => setTimeout(m));
      }
      window.document.addEventListener("mousedown", $), window.document.addEventListener("focusin", $);
    }), re(() => {
      window.document.removeEventListener("mousedown", $), window.document.removeEventListener("focusin", $);
    });
    const { dropdownStyle: G, getTextWidth: I } = be(r, t, O, d, C, A, e.maxWidth), q = (n) => {
      Q(
        () => {
          var s;
          return (s = e.originalNode) == null ? void 0 : s.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), k("update:modelValue", n);
    }, U = (n) => {
      _(n, !1), a.value = "";
    }, _ = (n, s = null) => {
      s == null && (s = !E.value), s ? (t.value.clear(), r.value.forEach((h) => t.value.set(h.key, h.key))) : t.value.clear(), q(Array.from(t.value.keys()));
    }, b = () => {
      L.value ? u.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : u.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), q(Array.from(t.value.keys()));
    };
    ue(O, (n, s) => {
      n != s && (n ? e.search && Q(() => {
        N.value.focus({ focusVisible: !0 });
      }) : a.value = "");
    });
    const E = T(() => t.value.size == r.value.length), L = T(() => u.value.reduce((n, s) => n && t.value.has(s.key), !0)), Ce = T(() => t.value.size == 0), _e = T(() => {
      var n, s, h, j, z;
      if (r.value.length < 0)
        return "";
      if (l.value) {
        if (Ce.value)
          return "No selection";
        if (!e.searchableUrl && E.value)
          return "All selected";
        const V = d.value ? getComputedStyle(d.value) : null, Ne = ((n = d.value) == null ? void 0 : n.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let W = t.value.size + " selected - ", ae = !0;
        for (let Oe of t.value)
          if (ae ? ae = !1 : W += ", ", W += (h = (s = r.map.get(Oe[0])) == null ? void 0 : s.value) != null ? h : f.value ? "Loading..." : "Value not found", Ne < I(W))
            return t.value.size + " selected";
        return W;
      } else
        for (let V of t.value)
          return (z = (j = r.map.get(V[0])) == null ? void 0 : j.value) != null ? z : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: xe, containerProps: Se, wrapperProps: Ee } = ye(
      u,
      {
        itemHeight: 32
      }
    );
    return (n, s) => (y(), g(M, null, [
      e.showSelected ? (y(), g("div", $e, [
        (y(!0), g(M, null, J(v(t), (h) => {
          var j;
          return y(), g("div", {
            key: h,
            onClick: (z) => c(h[0]),
            class: "selection-badge"
          }, [
            ne(B((j = v(r).find((z) => z.key == h[0])) == null ? void 0 : j.value) + " ", 1),
            x("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, je)
          ], 8, qe);
        }), 128))
      ])) : F("", !0),
      x("input", K({
        onFocus: s[0] || (s[0] = (h) => O.value = !0),
        onClick: s[1] || (s[1] = (h) => O.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: v(_e),
        class: "extra-select extra-select-input",
        readonly: ""
      }, n.$attrs), null, 16, Pe),
      A.value ? (y(), Y(Z, {
        key: 1,
        to: A.value
      }, [
        X(x("div", {
          class: ie(["extra-select dropdown", { searching: v(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: C,
          style: ce(v(G))
        }, [
          e.search ? (y(), g("div", ze, [
            X(x("input", {
              ref_key: "searchNode",
              ref: N,
              class: "extra-select-search",
              "onUpdate:modelValue": s[2] || (s[2] = (h) => de(a) ? a.value = h : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Le, v(a)]
            ])
          ])) : F("", !0),
          v(a).length >= e.minChars ? (y(), g(M, { key: 1 }, [
            v(l) ? (y(), g("div", Be, [
              v(a).length == 0 ? (y(), g("div", {
                key: 0,
                onClick: _,
                class: "all-select"
              }, [
                x("div", He, [
                  x("input", {
                    checked: v(E),
                    type: "checkbox"
                  }, null, 8, Ie),
                  Ue
                ])
              ])) : F("", !0),
              v(u).length > 0 && v(a).length > 0 ? (y(), g("div", {
                key: 1,
                onClick: b,
                class: "all-select"
              }, [
                x("div", We, [
                  x("input", {
                    checked: v(L),
                    type: "checkbox"
                  }, null, 8, De),
                  Je
                ])
              ])) : F("", !0),
              x("div", {
                class: "clear",
                onClick: U
              }, "Clear")
            ])) : F("", !0),
            v(u).length == 0 ? (y(), g("div", Ke, "No matches found")) : F("", !0)
          ], 64)) : (y(), g("div", Xe, "Insert at least " + B(e.minChars) + " characters", 1)),
          x("div", K(v(Se), { class: "scroller" }), [
            x("div", fe(ve(v(Ee))), [
              (y(!0), g(M, null, J(v(xe), (h) => (y(), g("button", {
                key: h.index,
                class: "dropdown-row",
                onClick: pe((j) => c(h.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", Qe, [
                  v(l) ? (y(), g("input", {
                    key: 0,
                    checked: v(t).has(h.data.key),
                    type: "checkbox"
                  }, null, 8, Re)) : F("", !0),
                  ne(" " + B(h.data.value), 1)
                ])
              ], 8, Ge))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, O.value]
        ])
      ], 8, ["to"])) : F("", !0),
      e.originalNode ? (y(), Y(Z, {
        key: 2,
        to: e.originalNode
      }, [
        (y(!0), g(M, null, J(v(t), (h) => (y(), g("option", {
          key: h[0],
          selected: "selected",
          value: h[0]
        }, null, 8, Ye))), 128))
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), tt = {
  key: 0,
  class: "no-matches"
}, lt = { key: 1 }, at = ["onClick"], nt = { class: "row-input" }, st = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, ot = /* @__PURE__ */ Object.assign(st, {
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
    hardFilterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: k }) {
    var I, q, U;
    const e = o, { options: l } = ge(null, R(e, "options"), S([])), r = (I = e.originalNode) == null ? void 0 : I.classList, t = Object.values((U = (q = e.originalNode) == null ? void 0 : q.style) != null ? U : {});
    me(e.originalNode);
    const m = (_, b = null) => {
      b === !1 ? i.value = "" : i.value = l.map.get(_).value, f.value = !1;
    }, { filterText: i, filteredOptions: w, filterValues: c } = we(l, selectedOptions, m, e.filterFields, e.hardFilterFields), { searchingFlag: a } = ke(
      l,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), u = S(null), p = S(null), f = S(!1), d = S(null), C = function(_) {
      const b = P(_.target);
      b.push(_.target), !b.includes(u.value) && !b.includes(p.value) && (f.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        d.value = P(u.value).find((b) => !!(b instanceof Element && (b.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(b).position))));
      }
      if (d.value == null && (d.value = document.querySelector("body")), e.originalNode) {
        for (let L of r)
          L != "extrasuggest" && u.value.classList.add(L);
        for (let L of t)
          u.value.style[L] = e.originalNode.style[L];
        t.includes("background-color") || (u.value.style.backgroundColor = "white"), i.value = e.originalNode.value, H(() => {
          e.modelValue != null && (i.value = e.modelValue);
        });
        const _ = i.value, b = () => {
          i.value = _;
        };
        let E = P(u.value, "form").pop();
        E instanceof HTMLElement && E.matches("form") && E.addEventListener("reset", () => setTimeout(b));
      }
      window.document.addEventListener("mousedown", C), window.document.addEventListener("focusin", C);
    }), re(() => {
      window.document.removeEventListener("mousedown", C), window.document.removeEventListener("focusin", C);
    });
    const { dropdownStyle: N } = be(l, S([]), f, u, p, d, e.maxWidth), O = () => {
      var _;
      e.originalNode && (e.originalNode.value = i.value, (_ = e.originalNode) == null || _.dispatchEvent(new Event("change", { bubbles: !0 }))), k("update:modelValue", i.value);
    };
    ue(() => f.value, (_) => {
      _ === !1 && O();
    });
    const { list: A, containerProps: $, wrapperProps: G } = ye(
      w,
      {
        itemHeight: 32
      }
    );
    return (_, b) => (y(), g(M, null, [
      X(x("input", K({
        onFocus: b[0] || (b[0] = (E) => f.value = !0),
        onClick: b[1] || (b[1] = (E) => f.value = !0),
        ref_key: "inputNode",
        ref: u,
        "onUpdate:modelValue": b[2] || (b[2] = (E) => de(i) ? i.value = E : null),
        class: "extra-select extra-select-input"
      }, _.$attrs), null, 16), [
        [Ae, v(i)]
      ]),
      d.value ? (y(), Y(Z, {
        key: 0,
        to: d.value
      }, [
        X(x("div", {
          class: ie(["extra-select dropdown", { searching: v(a) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: ce(v(N))
        }, [
          v(i).length >= e.minChars ? (y(), g(M, { key: 0 }, [
            v(w).length == 0 ? (y(), g("div", tt, "No matches found")) : F("", !0)
          ], 64)) : (y(), g("div", lt, "Insert at least " + B(e.minChars) + " characters", 1)),
          x("div", K(v($), { class: "scroller" }), [
            x("div", fe(ve(v(G))), [
              (y(!0), g(M, null, J(v(A), (E) => (y(), g("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: pe((L) => m(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", nt, B(E.data.value), 1)
              ], 8, at))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, f.value]
        ])
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), ct = et, dt = ot;
export {
  ct as ExtraSelect,
  dt as ExtraSuggest,
  ct as default
};
