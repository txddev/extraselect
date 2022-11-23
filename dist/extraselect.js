import { ref as S, watchEffect as H, computed as $, nextTick as R, watchPostEffect as Le, toRef as Y, onMounted as re, onUnmounted as ue, watch as ie, openBlock as y, createElementBlock as w, Fragment as M, renderList as K, unref as v, createTextVNode as se, toDisplayString as B, createElementVNode as x, createCommentVNode as N, mergeProps as X, createBlock as Z, Teleport as ee, withDirectives as G, normalizeClass as ce, normalizeStyle as de, isRef as fe, vModelText as Ae, normalizeProps as ve, guardReactiveProps as pe, withModifiers as he, vShow as ye, vModelDynamic as Ve } from "vue";
import { useVirtualList as me } from "@vueuse/core";
import { empty as Me, offset as J, getParents as P } from "@txd/utils";
const T = (l) => {
  let m = parseInt(l);
  return m == l ? m : l;
}, Te = (l, m) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: l.value,
    get: () => l.value,
    push: (a, u, t = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const g = l.map.get(a);
      if (g)
        g.value = u, g.data = t;
      else {
        let c = { value: u, key: a, data: t };
        l.value.push(c), l.map.set(c.key, c);
      }
    },
    addRange: (a) => {
      for (let u of a)
        l.actions.push(u.key, u.value, u.data);
    },
    remove: (a) => {
      l.value.splice(l.value.findIndex((u) => u.key == a), 1);
    },
    clear: () => {
      l.value = [];
    },
    sort: (a = null) => {
      a == null && (a = (u, t) => u.value.localeCompare(t.value)), l.value = l.value.sort(a);
    },
    setDefault: function(a) {
      this.defaultArray = a;
    },
    restoreDefault: function() {
      l.value = this.defaultArray;
    },
    filter: function(a) {
    }
  };
  window.ExtraSelectOptions[m] = e, l.actions = e;
};
let $e = 1;
const ge = (l) => {
  l && (l.style.display = "none", Me(l));
}, we = (l, m, e, a) => {
  var b;
  const u = S(/* @__PURE__ */ new Map());
  H(() => {
    if (Array.isArray(e.value)) {
      u.value.clear();
      for (let n of e.value)
        u.value.set(n, n);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, H(() => {
    m.value && (t.value = m.value.map((n) => ({ ...n, key: T(n.key) })), t.rebuildMap());
  }), l) {
    if (u.value.clear(), l.matches("select")) {
      for (let n of Array.apply(null, l.selectedOptions).map((s) => T(s.value)).filter((s) => s))
        u.value.set(n, n);
      t.value = Array.apply(null, l.options).reduce((n, s) => (n.push({ value: s.text, key: T(s.value), data: Object.assign({}, s.dataset) }), n), []);
    }
    if (l.matches("input")) {
      let n = l.value;
      n != null && n.length > 0 && (t.value = [{ value: n, key: n }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(a))
    for (let n of a)
      u.value.set(T(n), T(n));
  else
    a != null && u.value.set(T(a), T(a));
  Te(t, (b = l == null ? void 0 : l.id) != null ? b : "extraselect_" + (++$e).toString());
  const g = [];
  return u.value.forEach((n, s) => {
    g.push([s, n]);
  }), { options: t, selectedOptions: u, onReset: () => {
    u.value.clear();
    for (let [n, s] of g)
      u.value.set(n, s);
  } };
}, oe = async function(l, m = null, e = {}) {
  var t;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: m, ...e.body })
  };
  return await (await fetch(l, a)).json();
}, ke = (l, m, e, a, u, t, g = "limited", c = {}) => {
  const b = S(0), n = S(!1), s = $(() => n.value || b.value > 0);
  if (m != null && m.length > 0)
    if (e) {
      const i = [];
      H((p) => {
        if (a.value.length >= u) {
          let f = !0;
          switch (g) {
            case "always":
              break;
            default:
            case "limited":
              f = !i.includes(a.value);
              break;
            case "complete":
              f = i.reduce((d, C) => d && !a.value.startsWith(C), !0);
              break;
          }
          if (f) {
            n.value = !0;
            const d = setTimeout(() => {
              i.push(a.value), b.value += 1, c.body = { ...c.body, ...t.value }, oe(m, a.value, c).then((C) => {
                l.actions.addRange(C), l.actions.sort(), b.value -= 1, n.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(d);
            });
          }
        }
      });
    } else
      oe(m, null, c).then((i) => {
        l.actions.addRange(i), l.actions.sort();
      });
  return { searchingFlag: s };
}, be = (l, m, e, a = [], u = []) => {
  const t = S(""), g = S([]), c = S({}), b = { ...a.reduce((s, i) => (s[i] = !1, s), {}), ...u.reduce((s, i) => (s[i] = !0, s), {}) };
  for (let s in b) {
    let i = b[s], p = document.getElementById(s);
    c.value[s] = p == null ? void 0 : p.value, p && p.addEventListener("change", (f) => {
      c.value[s] = f.target.value, i && R(() => {
        if (m != null)
          for (let d of Array.from(m.value.keys()))
            g.value.find((C) => C.key == d) || e(d, !1);
        else
          g.value.find((d) => d.key == t.value) || e(t.value, !1);
      });
    });
  }
  const n = function(s, i) {
    let p = s.value;
    return Object.keys(c.value).length > 0 && (p = p.filter((f) => {
      var d, C;
      for (let O in c.value)
        if ((b[O] ? !0 : ((d = c.value[O]) != null ? d : "").length > 0) && ((C = f.data) == null ? void 0 : C.hasOwnProperty(O)) && f.data[O] != c.value[O])
          return !1;
      return !0;
    })), i.length > 0 && (p = p.filter((f) => f.value.toLowerCase().includes(i.toLowerCase()))), p;
  };
  return H(() => {
    g.value = n(l, t.value);
  }), { filterText: t, filteredOptions: g, filterValues: c };
}, Ce = (l, m, e, a, u, t, g) => {
  const c = getComputedStyle(document.querySelector("body")).font, b = function(i) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = c, f.measureText(i).width;
  }, n = $(() => {
    var p, f;
    const i = (p = J(a.value).width) != null ? p : 100;
    if (g === "inherit")
      return i;
    if (g == null || g === "dynamic") {
      const d = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(i, Math.max(...l.value.map((C) => b(C.value))) + 20 + d * 3);
    }
    return g;
  }), s = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return Le(() => {
    e.value < 0 && console.log("is open"), m.value.size < 0 && console.log("empty selection");
    var i = J(a.value), p = J(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var p = J(t.value);
    let f = -p.left + i.left;
    const d = window.document.documentElement.clientWidth;
    f + n.value > d && (f = d - n.value), s.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (-p.top + i.top + i.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: s, getTextWidth: b };
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
  setup(l, { emit: m }) {
    var te, le, ae;
    const e = l, a = $(() => {
      var o, r;
      return (r = (o = e.originalNode) == null ? void 0 : o.multiple) != null ? r : e.multiple;
    }), { options: u, selectedOptions: t, onReset: g } = we(e.originalNode, Y(e, "options"), Y(e, "modelValue"), e.initialValue), c = (te = e.originalNode) == null ? void 0 : te.classList, b = Object.values((ae = (le = e.originalNode) == null ? void 0 : le.style) != null ? ae : {});
    ge(e.originalNode);
    const n = (o, r = null) => {
      if (a.value) {
        let h = r;
        switch (h == null && (h = !t.value.has(o)), h) {
          case !0:
            t.value.set(o, o);
            break;
          case !1:
            t.value.delete(o);
            break;
        }
      } else
        t.value.clear(), r !== !1 && t.value.set(o, o), F.value = !1;
      I(Array.from(t.value.keys()));
    }, { filterText: s, filteredOptions: i, filterValues: p } = be(u, t, n, e.filterFields, e.hardFilterFields), { searchingFlag: f } = ke(
      u,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), d = S(null), C = S(null), O = S(null), F = S(!1), A = S(null), q = function(o) {
      const r = P(o.target);
      r.push(o.target), !r.includes(d.value) && !r.includes(C.value) && (F.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let o = !1;
        A.value = P(d.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (o = !0), o && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if (A.value == null && (A.value = document.querySelector("body")), e.originalNode) {
        for (let r of c)
          r != "extraselect" && d.value.classList.add(r);
        for (let r of b)
          d.value.style[r] = e.originalNode.style[r];
        b.includes("background-color") || (d.value.style.backgroundColor = "white");
        let o = P(d.value, "form").pop();
        o instanceof HTMLElement && o.matches("form") && o.addEventListener("reset", () => setTimeout(g));
      }
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), ue(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: Q, getTextWidth: U } = Ce(u, t, F, d, C, A, e.maxWidth), I = (o) => {
      R(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), m("update:modelValue", o);
    }, W = (o) => {
      _(o, !1), s.value = "";
    }, _ = (o, r = null) => {
      r == null && (r = !E.value), r ? (t.value.clear(), u.value.forEach((h) => t.value.set(h.key, h.key))) : t.value.clear(), I(Array.from(t.value.keys()));
    }, k = () => {
      L.value ? i.value.forEach((o) => {
        t.value.has(o.key) && t.value.delete(o.key);
      }) : i.value.forEach((o) => {
        t.value.has(o.key) || t.value.set(o.key, o.key);
      }), I(Array.from(t.value.keys()));
    };
    ie(F, (o, r) => {
      o != r && (o ? e.search && R(() => {
        O.value.focus({ focusVisible: !0 });
      }) : s.value = "");
    });
    const E = $(() => t.value.size == u.value.length), L = $(() => i.value.reduce((o, r) => o && t.value.has(r.key), !0)), _e = $(() => t.value.size == 0), xe = $(() => {
      var o, r, h, j, z;
      if (u.value.length < 0)
        return "";
      if (a.value) {
        if (_e.value)
          return "No selection";
        if (!e.searchableUrl && E.value)
          return "All selected";
        const V = d.value ? getComputedStyle(d.value) : null, Oe = ((o = d.value) == null ? void 0 : o.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let D = t.value.size + " selected - ", ne = !0;
        for (let Fe of t.value)
          if (ne ? ne = !1 : D += ", ", D += (h = (r = u.map.get(Fe[0])) == null ? void 0 : r.value) != null ? h : f.value ? "Loading..." : "Value not found", Oe < U(D))
            return t.value.size + " selected";
        return D;
      } else
        for (let V of t.value)
          return (z = (j = u.map.get(V[0])) == null ? void 0 : j.value) != null ? z : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Se, containerProps: Ee, wrapperProps: Ne } = me(
      i,
      {
        itemHeight: 32
      }
    );
    return (o, r) => (y(), w(M, null, [
      e.showSelected ? (y(), w("div", qe, [
        (y(!0), w(M, null, K(v(t), (h) => {
          var j;
          return y(), w("div", {
            key: h,
            onClick: (z) => n(h[0]),
            class: "selection-badge"
          }, [
            se(B((j = v(u).find((z) => z.key == h[0])) == null ? void 0 : j.value) + " ", 1),
            x("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, je)
          ], 8, Ie);
        }), 128))
      ])) : N("", !0),
      x("input", X({
        onFocus: r[0] || (r[0] = (h) => F.value = !0),
        onClick: r[1] || (r[1] = (h) => F.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: v(xe),
        class: "extra-select extra-select-input",
        readonly: ""
      }, o.$attrs), null, 16, Pe),
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
              "onUpdate:modelValue": r[2] || (r[2] = (h) => fe(s) ? s.value = h : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ae, v(s)]
            ])
          ])) : N("", !0),
          v(s).length >= e.minChars ? (y(), w(M, { key: 1 }, [
            v(a) ? (y(), w("div", Be, [
              v(s).length == 0 ? (y(), w("div", {
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
              v(i).length > 0 && v(s).length > 0 ? (y(), w("div", {
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
            v(i).length == 0 ? (y(), w("div", Xe, "No matches found")) : N("", !0)
          ], 64)) : (y(), w("div", Ge, "Insert at least " + B(e.minChars) + " characters", 1)),
          x("div", X(v(Ee), { class: "scroller" }), [
            x("div", ve(pe(v(Ne))), [
              (y(!0), w(M, null, K(v(Se), (h) => (y(), w("button", {
                key: h.index,
                class: "dropdown-row",
                onClick: he((j) => n(h.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", Re, [
                  v(a) ? (y(), w("input", {
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
  setup(l, { emit: m }) {
    var U, I, W;
    const e = l, { options: a } = we(e.originalNode, Y(e, "options"), S([])), u = (U = e.originalNode) == null ? void 0 : U.classList, t = Object.values((W = (I = e.originalNode) == null ? void 0 : I.style) != null ? W : {});
    ge(e.originalNode);
    const g = (_, k = null) => {
      k === !1 ? c.value = "" : c.value = a.map.get(_).value, f.value = !1;
    }, { filterText: c, filteredOptions: b, filterValues: n } = be(a, null, g, e.filterFields, e.hardFilterFields), { searchingFlag: s } = ke(
      a,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      n,
      e.fetchMode,
      e.fetchOptions
    ), i = S(null), p = S(null), f = S(!1), d = S(null), C = function(_) {
      const k = P(_.target);
      k.push(_.target), !k.includes(i.value) && !k.includes(p.value) && (f.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        d.value = P(i.value).find((k) => !!(k instanceof Element && (k.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(k).position))));
      }
      if (d.value == null && (d.value = document.querySelector("body")), e.originalNode) {
        for (let L of u)
          L != "extrasuggest" && i.value.classList.add(L);
        for (let L of t)
          i.value.style[L] = e.originalNode.style[L];
        t.includes("background-color") || (i.value.style.backgroundColor = "white"), c.value = e.originalNode.value, H(() => {
          e.modelValue != null && (c.value = e.modelValue);
        });
        const _ = c.value, k = () => {
          c.value = _;
        };
        let E = P(i.value, "form").pop();
        E instanceof HTMLElement && E.matches("form") && E.addEventListener("reset", () => setTimeout(k));
      }
      window.document.addEventListener("mousedown", C), window.document.addEventListener("focusin", C);
    }), ue(() => {
      window.document.removeEventListener("mousedown", C), window.document.removeEventListener("focusin", C);
    });
    const { dropdownStyle: O } = Ce(a, S([]), f, i, p, d, e.maxWidth), F = () => {
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
        ref: i,
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
          class: ce(["extra-select dropdown", { searching: v(s) > 0 }]),
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
