import { ref as S, watchEffect as H, computed as $, nextTick as R, watchPostEffect as Le, toRef as Y, onMounted as re, onUnmounted as ue, watch as ie, openBlock as y, createElementBlock as w, Fragment as M, renderList as K, unref as v, createTextVNode as se, toDisplayString as B, createElementVNode as x, createCommentVNode as N, mergeProps as X, createBlock as Z, Teleport as ee, withDirectives as G, normalizeClass as ce, normalizeStyle as de, isRef as fe, vModelText as Ae, normalizeProps as ve, guardReactiveProps as pe, withModifiers as he, vShow as ye, vModelDynamic as Ve } from "vue";
import { useVirtualList as me } from "@vueuse/core";
import { empty as Me, offset as J, getParents as P } from "@txd/utils";
const T = (a) => {
  let m = parseInt(a);
  return m == a ? m : a;
}, Te = (a, m) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, r, t = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const g = a.map.get(l);
      if (g)
        g.value = r, g.data = t;
      else {
        let c = { value: r, key: l, data: t };
        a.value.push(c), a.map.set(c.key, c);
      }
    },
    addRange: (l) => {
      for (let r of l)
        a.actions.push(r.key, r.value, r.data);
    },
    remove: (l) => {
      a.value.splice(a.value.findIndex((r) => r.key == l), 1);
    },
    clear: () => {
      a.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (r, t) => r.value.localeCompare(t.value)), a.value = a.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      a.value = this.defaultArray;
    },
    filter: function(l) {
    }
  };
  window.ExtraSelectOptions[m] = e, a.actions = e;
};
let $e = 1;
const ge = (a) => {
  a && (a.style.display = "none", Me(a));
}, we = (a, m, e, l) => {
  var b;
  const r = S(/* @__PURE__ */ new Map());
  H(() => {
    if (Array.isArray(e.value)) {
      r.value.clear();
      for (let i of e.value)
        r.value.set(i, i);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let i of t.value)
        t.map.set(i.key, i);
  }, H(() => {
    m.value && (t.value = m.value.map((i) => ({ ...i, key: T(i.key) })), t.rebuildMap());
  }), a) {
    r.value.clear();
    for (let i of Array.apply(null, a.selectedOptions).map((n) => T(n.value)).filter((n) => n))
      r.value.set(i, i);
    t.value = Array.apply(null, a.options).reduce((i, n) => (i.push({ value: n.text, key: T(n.value), data: Object.assign({}, n.dataset) }), i), []), t.rebuildMap();
  }
  if (Array.isArray(l))
    for (let i of l)
      r.value.set(T(i), T(i));
  else
    l != null && r.value.set(T(l), T(l));
  Te(t, (b = a == null ? void 0 : a.id) != null ? b : "extraselect_" + (++$e).toString());
  const g = [];
  return r.value.forEach((i, n) => {
    g.push([n, i]);
  }), { options: t, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [i, n] of g)
      r.value.set(i, n);
  } };
}, oe = async function(a, m = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: m, ...e.body })
  };
  return await (await fetch(a, l)).json();
}, ke = (a, m, e, l, r, t, g = "limited", c = {}) => {
  const b = S(0), i = S(!1), n = $(() => i.value || b.value > 0);
  if (m != null && m.length > 0)
    if (e) {
      const u = [];
      H((p) => {
        if (l.value.length >= r) {
          let f = !0;
          switch (g) {
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
            i.value = !0;
            const d = setTimeout(() => {
              u.push(l.value), b.value += 1, c.body = { ...c.body, ...t.value }, oe(m, l.value, c).then((C) => {
                a.actions.addRange(C), a.actions.sort(), b.value -= 1, i.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(d);
            });
          }
        }
      });
    } else
      oe(m, null, c).then((u) => {
        a.actions.addRange(u), a.actions.sort();
      });
  return { searchingFlag: n };
}, be = (a, m, e, l = [], r = []) => {
  const t = S(""), g = S([]), c = S({}), b = { ...l.reduce((n, u) => (n[u] = !1, n), {}), ...r.reduce((n, u) => (n[u] = !0, n), {}) };
  for (let n in b) {
    let u = b[n], p = document.getElementById(n);
    c.value[n] = p == null ? void 0 : p.value, p && p.addEventListener("change", (f) => {
      c.value[n] = f.target.value, u && R(() => {
        if (m != null)
          for (let d of Array.from(m.value.keys()))
            g.value.find((C) => C.key == d) || e(d, !1);
        else
          g.value.find((d) => d.key == t.value) || e(t.value, !1);
      });
    });
  }
  const i = function(n, u) {
    let p = n.value;
    return Object.keys(c.value).length > 0 && (p = p.filter((f) => {
      var d, C;
      for (let O in c.value)
        if ((b[O] ? !0 : ((d = c.value[O]) != null ? d : "").length > 0) && ((C = f.data) == null ? void 0 : C.hasOwnProperty(O)) && f.data[O] != c.value[O])
          return !1;
      return !0;
    })), u.length > 0 && (p = p.filter((f) => f.value.toLowerCase().includes(u.toLowerCase()))), p;
  };
  return H(() => {
    g.value = i(a, t.value);
  }), { filterText: t, filteredOptions: g, filterValues: c };
}, Ce = (a, m, e, l, r, t, g) => {
  const c = getComputedStyle(document.querySelector("body")).font, b = function(u) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = c, f.measureText(u).width;
  }, i = $(() => {
    var p, f;
    const u = (p = J(l.value).width) != null ? p : 100;
    if (g === "inherit")
      return u;
    if (g == null || g === "dynamic") {
      const d = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(u, Math.max(...a.value.map((C) => b(C.value))) + 20 + d * 3);
    }
    return g;
  }), n = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return Le(() => {
    e.value < 0 && console.log("is open"), m.value.size < 0 && console.log("empty selection");
    var u = J(l.value), p = J(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var p = J(t.value);
    let f = -p.left + u.left;
    const d = window.document.documentElement.clientWidth;
    f + i.value > d && (f = d - i.value), n.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-p.top + u.top + u.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: n, getTextWidth: b };
}, qe = {
  key: 0,
  class: "extra-select selection"
}, Ie = ["onClick"], je = ["innerHTML"], Pe = ["value"], ze = {
  key: 0,
  class: "input-searching"
}, Be = {
  key: 0,
  class: "allselect-clear"
}, He = { class: "row-input" }, Ue = ["checked"], We = /* @__PURE__ */ x("b", null, "Select all", -1), De = { class: "row-input" }, Je = ["checked"], Ke = /* @__PURE__ */ x("b", null, "Select Filtered", -1), Xe = {
  key: 1,
  class: "no-matches"
}, Ge = { key: 2 }, Qe = ["onClick"], Re = { class: "row-input" }, Ye = ["checked"], Ze = ["value"], et = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, tt = /* @__PURE__ */ Object.assign(et, {
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
  setup(a, { emit: m }) {
    var te, le, ae;
    const e = a, l = $(() => {
      var s, o;
      return (o = (s = e.originalNode) == null ? void 0 : s.multiple) != null ? o : e.multiple;
    }), { options: r, selectedOptions: t, onReset: g } = we(e.originalNode, Y(e, "options"), Y(e, "modelValue"), e.initialValue), c = (te = e.originalNode) == null ? void 0 : te.classList, b = Object.values((ae = (le = e.originalNode) == null ? void 0 : le.style) != null ? ae : {});
    ge(e.originalNode);
    const i = (s, o = null) => {
      if (l.value) {
        let h = o;
        switch (h == null && (h = !t.value.has(s)), h) {
          case !0:
            t.value.set(s, s);
            break;
          case !1:
            t.value.delete(s);
            break;
        }
      } else
        t.value.clear(), o !== !1 && t.value.set(s, s), F.value = !1;
      I(Array.from(t.value.keys()));
    }, { filterText: n, filteredOptions: u, filterValues: p } = be(r, t, i, e.filterFields, e.hardFilterFields), { searchingFlag: f } = ke(
      r,
      e.url,
      e.searchableUrl,
      n,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), d = S(null), C = S(null), O = S(null), F = S(!1), A = S(null), q = function(s) {
      const o = P(s.target);
      o.push(s.target), !o.includes(d.value) && !o.includes(C.value) && (F.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let s = !1;
        A.value = P(d.value).find((o) => !!(o instanceof Element && (o.matches(e.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o).position))));
      }
      if (A.value == null && (A.value = document.querySelector("body")), e.originalNode) {
        for (let o of c)
          o != "extraselect" && d.value.classList.add(o);
        for (let o of b)
          d.value.style[o] = e.originalNode.style[o];
        b.includes("background-color") || (d.value.style.backgroundColor = "white");
        let s = P(d.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(g));
      }
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), ue(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: Q, getTextWidth: U } = Ce(r, t, F, d, C, A, e.maxWidth), I = (s) => {
      R(
        () => {
          var o;
          return (o = e.originalNode) == null ? void 0 : o.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), m("update:modelValue", s);
    }, W = (s) => {
      _(s, !1), n.value = "";
    }, _ = (s, o = null) => {
      o == null && (o = !E.value), o ? (t.value.clear(), r.value.forEach((h) => t.value.set(h.key, h.key))) : t.value.clear(), I(Array.from(t.value.keys()));
    }, k = () => {
      L.value ? u.value.forEach((s) => {
        t.value.has(s.key) && t.value.delete(s.key);
      }) : u.value.forEach((s) => {
        t.value.has(s.key) || t.value.set(s.key, s.key);
      }), I(Array.from(t.value.keys()));
    };
    ie(F, (s, o) => {
      s != o && (s ? e.search && R(() => {
        O.value.focus({ focusVisible: !0 });
      }) : n.value = "");
    });
    const E = $(() => t.value.size == r.value.length), L = $(() => u.value.reduce((s, o) => s && t.value.has(o.key), !0)), _e = $(() => t.value.size == 0), xe = $(() => {
      var s, o, h, j, z;
      if (r.value.length < 0)
        return "";
      if (l.value) {
        if (_e.value)
          return "No selection";
        if (!e.searchableUrl && E.value)
          return "All selected";
        const V = d.value ? getComputedStyle(d.value) : null, Oe = ((s = d.value) == null ? void 0 : s.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let D = t.value.size + " selected - ", ne = !0;
        for (let Fe of t.value)
          if (ne ? ne = !1 : D += ", ", D += (h = (o = r.map.get(Fe[0])) == null ? void 0 : o.value) != null ? h : f.value ? "Loading..." : "Value not found", Oe < U(D))
            return t.value.size + " selected";
        return D;
      } else
        for (let V of t.value)
          return (z = (j = r.map.get(V[0])) == null ? void 0 : j.value) != null ? z : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Se, containerProps: Ee, wrapperProps: Ne } = me(
      u,
      {
        itemHeight: 32
      }
    );
    return (s, o) => (y(), w(M, null, [
      e.showSelected ? (y(), w("div", qe, [
        (y(!0), w(M, null, K(v(t), (h) => {
          var j;
          return y(), w("div", {
            key: h,
            onClick: (z) => i(h[0]),
            class: "selection-badge"
          }, [
            se(B((j = v(r).find((z) => z.key == h[0])) == null ? void 0 : j.value) + " ", 1),
            x("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, je)
          ], 8, Ie);
        }), 128))
      ])) : N("", !0),
      x("input", X({
        onFocus: o[0] || (o[0] = (h) => F.value = !0),
        onClick: o[1] || (o[1] = (h) => F.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: v(xe),
        class: "extra-select extra-select-input",
        readonly: ""
      }, s.$attrs), null, 16, Pe),
      A.value ? (y(), Z(ee, {
        key: 1,
        to: A.value
      }, [
        G(x("div", {
          class: ce(["extra-select dropdown", { searching: v(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: C,
          style: de(v(Q))
        }, [
          e.search ? (y(), w("div", ze, [
            G(x("input", {
              ref_key: "searchNode",
              ref: O,
              class: "extra-select-search",
              "onUpdate:modelValue": o[2] || (o[2] = (h) => fe(n) ? n.value = h : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ae, v(n)]
            ])
          ])) : N("", !0),
          v(n).length >= e.minChars ? (y(), w(M, { key: 1 }, [
            v(l) ? (y(), w("div", Be, [
              v(n).length == 0 ? (y(), w("div", {
                key: 0,
                onClick: _,
                class: "all-select"
              }, [
                x("div", He, [
                  x("input", {
                    checked: v(E),
                    type: "checkbox"
                  }, null, 8, Ue),
                  We
                ])
              ])) : N("", !0),
              v(u).length > 0 && v(n).length > 0 ? (y(), w("div", {
                key: 1,
                onClick: k,
                class: "all-select"
              }, [
                x("div", De, [
                  x("input", {
                    checked: v(L),
                    type: "checkbox"
                  }, null, 8, Je),
                  Ke
                ])
              ])) : N("", !0),
              x("div", {
                class: "clear",
                onClick: W
              }, "Clear")
            ])) : N("", !0),
            v(u).length == 0 ? (y(), w("div", Xe, "No matches found")) : N("", !0)
          ], 64)) : (y(), w("div", Ge, "Insert at least " + B(e.minChars) + " characters", 1)),
          x("div", X(v(Ee), { class: "scroller" }), [
            x("div", ve(pe(v(Ne))), [
              (y(!0), w(M, null, K(v(Se), (h) => (y(), w("button", {
                key: h.index,
                class: "dropdown-row",
                onClick: he((j) => i(h.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", Re, [
                  v(l) ? (y(), w("input", {
                    key: 0,
                    checked: v(t).has(h.data.key),
                    type: "checkbox"
                  }, null, 8, Ye)) : N("", !0),
                  se(" " + B(h.data.value), 1)
                ])
              ], 8, Qe))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ye, F.value]
        ])
      ], 8, ["to"])) : N("", !0),
      e.originalNode ? (y(), Z(ee, {
        key: 2,
        to: e.originalNode
      }, [
        (y(!0), w(M, null, K(v(t), (h) => (y(), w("option", {
          key: h[0],
          selected: "selected",
          value: h[0]
        }, null, 8, Ze))), 128))
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}), lt = {
  key: 0,
  class: "no-matches"
}, at = { key: 1 }, nt = ["onClick"], st = { class: "row-input" }, ot = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, rt = /* @__PURE__ */ Object.assign(ot, {
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
  setup(a, { emit: m }) {
    var U, I, W;
    const e = a, { options: l } = we(null, Y(e, "options"), S([])), r = (U = e.originalNode) == null ? void 0 : U.classList, t = Object.values((W = (I = e.originalNode) == null ? void 0 : I.style) != null ? W : {});
    ge(e.originalNode);
    const g = (_, k = null) => {
      k === !1 ? c.value = "" : c.value = l.map.get(_).value, f.value = !1;
    }, { filterText: c, filteredOptions: b, filterValues: i } = be(l, null, g, e.filterFields, e.hardFilterFields), { searchingFlag: n } = ke(
      l,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      i,
      e.fetchMode,
      e.fetchOptions
    ), u = S(null), p = S(null), f = S(!1), d = S(null), C = function(_) {
      const k = P(_.target);
      k.push(_.target), !k.includes(u.value) && !k.includes(p.value) && (f.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        d.value = P(u.value).find((k) => !!(k instanceof Element && (k.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(k).position))));
      }
      if (d.value == null && (d.value = document.querySelector("body")), e.originalNode) {
        for (let L of r)
          L != "extrasuggest" && u.value.classList.add(L);
        for (let L of t)
          u.value.style[L] = e.originalNode.style[L];
        t.includes("background-color") || (u.value.style.backgroundColor = "white"), c.value = e.originalNode.value, H(() => {
          e.modelValue != null && (c.value = e.modelValue);
        });
        const _ = c.value, k = () => {
          c.value = _;
        };
        let E = P(u.value, "form").pop();
        E instanceof HTMLElement && E.matches("form") && E.addEventListener("reset", () => setTimeout(k));
      }
      window.document.addEventListener("mousedown", C), window.document.addEventListener("focusin", C);
    }), ue(() => {
      window.document.removeEventListener("mousedown", C), window.document.removeEventListener("focusin", C);
    });
    const { dropdownStyle: O } = Ce(l, S([]), f, u, p, d, e.maxWidth), F = () => {
      var _;
      e.originalNode && (e.originalNode.value = c.value, (_ = e.originalNode) == null || _.dispatchEvent(new Event("change", { bubbles: !0 }))), m("update:modelValue", c.value);
    };
    ie(() => f.value, (_) => {
      _ === !1 && F();
    });
    const { list: A, containerProps: q, wrapperProps: Q } = me(
      b,
      {
        itemHeight: 32
      }
    );
    return (_, k) => (y(), w(M, null, [
      G(x("input", X({
        onFocus: k[0] || (k[0] = (E) => f.value = !0),
        onClick: k[1] || (k[1] = (E) => f.value = !0),
        ref_key: "inputNode",
        ref: u,
        "onUpdate:modelValue": k[2] || (k[2] = (E) => fe(c) ? c.value = E : null),
        class: "extra-select extra-select-input"
      }, _.$attrs), null, 16), [
        [Ve, v(c)]
      ]),
      d.value ? (y(), Z(ee, {
        key: 0,
        to: d.value
      }, [
        G(x("div", {
          class: ce(["extra-select dropdown", { searching: v(n) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: de(v(O))
        }, [
          v(c).length >= e.minChars ? (y(), w(M, { key: 0 }, [
            v(b).length == 0 ? (y(), w("div", lt, "No matches found")) : N("", !0)
          ], 64)) : (y(), w("div", at, "Insert at least " + B(e.minChars) + " characters", 1)),
          x("div", X(v(q), { class: "scroller" }), [
            x("div", ve(pe(v(Q))), [
              (y(!0), w(M, null, K(v(A), (E) => (y(), w("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: he((L) => g(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", st, B(E.data.value), 1)
              ], 8, nt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ye, f.value]
        ])
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}), dt = tt, ft = rt;
export {
  dt as ExtraSelect,
  ft as ExtraSuggest,
  dt as default
};
