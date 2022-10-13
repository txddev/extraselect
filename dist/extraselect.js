import { ref as _, watchEffect as P, computed as V, watchPostEffect as Ne, onMounted as le, onUnmounted as ne, watch as oe, nextTick as Ee, openBlock as v, createElementBlock as p, Fragment as L, renderList as W, unref as c, createTextVNode as ee, toDisplayString as z, createElementVNode as k, createCommentVNode as b, createBlock as K, Teleport as X, withDirectives as U, normalizeClass as ae, normalizeStyle as se, isRef as re, vModelText as ue, mergeProps as ie, normalizeProps as ce, guardReactiveProps as de, withModifiers as ve, vShow as fe } from "vue";
import { useVirtualList as pe } from "@vueuse/core";
import { empty as Oe, offset as I, getParents as H } from "@txd/utils";
const Le = (o, g) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: o.value,
    get: () => o.value,
    push: (l, a, t = null) => {
      const i = o.map.get(l);
      if (i)
        i.value = a, i.data = t;
      else {
        let s = { value: a, key: l, data: t };
        o.value.push(s), o.map.set(s.key, s);
      }
    },
    addRange: (l) => {
      for (let a of l)
        o.actions.push(a.key, a.value, a.data);
    },
    remove: (l) => {
      o.value.splice(o.value.findIndex((a) => a.key == l), 1);
    },
    clear: () => {
      o.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (a, t) => a.value.localeCompare(t.value)), o.value = o.value.sort(l);
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
  window.ExtraSelectOptions[g] = e, o.actions = e;
};
let Ve = 1;
const he = (o) => {
  o && (o.style.display = "none", Oe(o));
}, me = (o, g, e, l) => {
  var i;
  const a = _(/* @__PURE__ */ new Map());
  P(() => {
    a.value.clear();
    for (let s of e)
      a.value.set(s, s);
  });
  const t = _([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let s of t.value)
        t.map.set(s.key, s);
  }, P(() => {
    g && (t.value = g, t.rebuildMap());
  }), o) {
    a.value.clear();
    for (let s of Array.apply(null, o.selectedOptions).map((d) => d.value).filter((d) => d))
      a.value.set(s, s);
    t.value = Array.apply(null, o.options).reduce((s, d) => (s.push({ value: d.text, key: d.value, data: d.dataset }), s), []), t.rebuildMap();
  }
  if (Array.isArray(l))
    for (let s of l)
      a.value.set(s, s);
  else
    l != null && a.value.set(l, l);
  return Le(t, (i = o == null ? void 0 : o.id) != null ? i : "extraselect_" + (++Ve).toString()), { options: t, selectedOptions: a };
}, te = async function(o, g = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: g, ...e.body })
  };
  return await (await fetch(o, l)).json();
}, ye = (o, g, e, l, a, t = "limited", i = {}) => {
  const s = _(0), d = _(!1), w = V(() => d.value || s.value > 0);
  if (g != null && g.length > 0)
    if (e) {
      const S = [];
      P((u) => {
        if (l.value.length >= a) {
          let f = !0;
          switch (t) {
            case "always":
              break;
            default:
            case "limited":
              f = !S.includes(l.value);
              break;
            case "complete":
              f = S.reduce((h, C) => h && !l.value.startsWith(C), !0);
              break;
          }
          if (f) {
            d.value = !0;
            const h = setTimeout(() => {
              S.push(l.value), s.value += 1, te(g, l.value, i).then((C) => {
                o.actions.addRange(C), o.actions.sort(), s.value -= 1, d.value = !1;
              });
            }, 500);
            u(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      te(g, null, i).then((S) => {
        o.actions.addRange(S), o.actions.sort();
      });
  return { searchingFlag: w };
}, ge = (o) => {
  const g = _(""), e = _([]), l = function(a, t) {
    return a.value.filter((s) => t.length > 0 ? s.value.toLowerCase().includes(t.toLowerCase()) : !0);
  };
  return P(() => {
    e.value = l(o, g.value);
  }), { filterText: g, filteredOptions: e };
}, we = (o, g, e, l, a, t, i) => {
  const s = getComputedStyle(document.querySelector("body")).font, d = function(u) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = s, h.measureText(u).width;
  }, w = V(() => {
    var f, h;
    const u = (f = I(l.value).width) != null ? f : 100;
    if (i === "inherit")
      return u;
    if (i == null || i === "dynamic") {
      const C = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(u, Math.max(...o.value.map((N) => d(N.value))) + 20 + C * 3);
    }
    return i;
  }), S = _({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ne(() => {
    e.value < 0 && console.log("is open"), g.value.size < 0 && console.log("empty selection");
    var u = I(l.value), f = I(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var f = I(t.value);
    let h = -f.left + u.left;
    const C = window.document.documentElement.clientWidth;
    h + w.value > C && (h = C - w.value), S.value = {
      position: "absolute",
      "min-width": "max-content",
      width: w.value.toString() + "px",
      top: (-f.top + u.top + u.height).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: S, getTextWidth: d };
}, Ae = {
  key: 0,
  class: "extra-select selection"
}, Me = ["onClick"], Fe = ["innerHTML"], qe = ["value"], Te = {
  key: 0,
  class: "input-searching"
}, $e = {
  key: 0,
  class: "allselect-clear"
}, ze = { class: "row-input" }, Pe = ["checked"], Be = /* @__PURE__ */ k("b", null, "Select all", -1), je = { class: "row-input" }, Ie = ["checked"], We = /* @__PURE__ */ k("b", null, "Select Filtered", -1), Ue = {
  key: 1,
  class: "no-matches"
}, He = { key: 2 }, De = ["onClick"], Je = { class: "row-input" }, Ke = ["checked"], Xe = ["value"], Ge = {
  __name: "ExtraSelect",
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
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: g }) {
    var Q, Y, Z;
    const e = o, l = V(() => {
      var n, r;
      return (r = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? r : e.multiple;
    }), { options: a, selectedOptions: t } = me(e.originalNode, e.options, e.modelValue, e.initialValue), i = (Q = e.originalNode) == null ? void 0 : Q.classList, s = Object.values((Z = (Y = e.originalNode) == null ? void 0 : Y.style) != null ? Z : {});
    he(e.originalNode);
    const { filterText: d, filteredOptions: w } = ge(a, e.minChars), { searchingFlag: S } = ye(
      a,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), u = _(null), f = _(null), h = _(null), C = _(!1), N = _(null), A = function(n) {
      const r = H(n.target);
      r.push(n.target), !r.includes(u.value) && !r.includes(f.value) && (C.value = !1);
    };
    le(() => {
      if (e.dropdownContainer) {
        let n = !1;
        N.value = H(u.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), e.originalNode) {
        for (let n of i)
          n != "extraselect" && u.value.classList.add(n);
        for (let n of s)
          u.value.style[n] = e.originalNode.style[n];
        s.includes("background-color") || (u.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", A), window.document.addEventListener("focusin", A);
    }), ne(() => {
      window.document.removeEventListener("mousedown", A), window.document.removeEventListener("focusin", A);
    });
    const { dropdownStyle: D, getTextWidth: J } = we(a, t, C, u, f, N, e.maxWidth), F = (n) => {
      var r;
      (r = e.originalNode) == null || r.dispatchEvent(new Event("change", { bubbles: !0 })), g("update:modelValue", n);
    }, q = (n) => {
      l.value ? t.value.has(n) ? t.value.delete(n) : t.value.set(n, n) : (t.value.clear(), t.value.set(n, n), C.value = !1), F(Array.from(t.value.keys()));
    }, B = (n) => {
      T(n, !1), d.value = "";
    }, T = (n, r = null) => {
      r == null && (r = !x.value), r ? (t.value.clear(), a.value.forEach((y) => t.value.set(y.key, y.key))) : t.value.clear(), F(Array.from(t.value.keys()));
    }, m = () => {
      E.value ? w.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : w.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), F(Array.from(t.value.keys()));
    };
    oe(C, (n, r) => {
      n != r && (n ? e.search && Ee(() => {
        h.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const x = V(() => t.value.size == a.value.length), E = V(() => w.value.reduce((n, r) => n && t.value.has(r.key), !0)), G = V(() => t.value.size == 0), ke = V(() => {
      var n, r, y, M, $;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (x.value)
          return "All selected";
        if (G.value)
          return "No selection";
        const O = u.value ? getComputedStyle(u.value) : null, Se = ((n = u.value) == null ? void 0 : n.clientWidth) - parseInt(O == null ? void 0 : O.paddingLeft) - parseInt(O == null ? void 0 : O.paddingRight);
        let j = t.value.size + " selected - ", R = !0;
        for (let be of t.value)
          if (R ? R = !1 : j += ", ", j += (y = (r = a.map.get(be[0])) == null ? void 0 : r.value) != null ? y : S.value ? "Loading..." : "Value not found", Se < J(j))
            return t.value.size + " selected";
        return j;
      } else
        for (let O of t.value)
          return ($ = (M = a.map.get(O[0])) == null ? void 0 : M.value) != null ? $ : S.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Ce, containerProps: xe, wrapperProps: _e } = pe(
      w,
      {
        itemHeight: 32
      }
    );
    return (n, r) => (v(), p(L, null, [
      e.showSelected ? (v(), p("div", Ae, [
        (v(!0), p(L, null, W(c(t), (y) => {
          var M;
          return v(), p("div", {
            key: y,
            onClick: ($) => q(y[0]),
            class: "selection-badge"
          }, [
            ee(z((M = c(a).find(($) => $.key == y[0])) == null ? void 0 : M.value) + " ", 1),
            k("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, Fe)
          ], 8, Me);
        }), 128))
      ])) : b("", !0),
      k("input", {
        onFocus: r[0] || (r[0] = (y) => C.value = !0),
        onClick: r[1] || (r[1] = (y) => C.value = !0),
        ref_key: "inputNode",
        ref: u,
        value: c(ke),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, qe),
      N.value ? (v(), K(X, {
        key: 1,
        to: N.value
      }, [
        U(k("div", {
          class: ae(["extra-select dropdown", { searching: c(S) > 0 }]),
          ref_key: "dropdownNode",
          ref: f,
          style: se(c(D))
        }, [
          e.search ? (v(), p("div", Te, [
            U(k("input", {
              ref_key: "searchNode",
              ref: h,
              class: "extra-select-search",
              "onUpdate:modelValue": r[2] || (r[2] = (y) => re(d) ? d.value = y : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [ue, c(d)]
            ])
          ])) : b("", !0),
          c(d).length >= e.minChars ? (v(), p(L, { key: 1 }, [
            c(l) ? (v(), p("div", $e, [
              c(d).length == 0 ? (v(), p("div", {
                key: 0,
                onClick: T,
                class: "all-select"
              }, [
                k("div", ze, [
                  k("input", {
                    checked: c(x),
                    type: "checkbox"
                  }, null, 8, Pe),
                  Be
                ])
              ])) : b("", !0),
              c(w).length > 0 && c(d).length > 0 ? (v(), p("div", {
                key: 1,
                onClick: m,
                class: "all-select"
              }, [
                k("div", je, [
                  k("input", {
                    checked: c(E),
                    type: "checkbox"
                  }, null, 8, Ie),
                  We
                ])
              ])) : b("", !0),
              k("div", {
                class: "clear",
                onClick: B
              }, "Clear")
            ])) : b("", !0),
            c(w).length == 0 ? (v(), p("div", Ue, "No matches found")) : b("", !0)
          ], 64)) : (v(), p("div", He, "Insert at least " + z(e.minChars) + " characters", 1)),
          k("div", ie(c(xe), { class: "scroller" }), [
            k("div", ce(de(c(_e))), [
              (v(!0), p(L, null, W(c(Ce), (y) => (v(), p("button", {
                key: y.index,
                class: "dropdown-row",
                onClick: ve((M) => q(y.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", Je, [
                  c(l) ? (v(), p("input", {
                    key: 0,
                    checked: c(t).has(y.data.key),
                    type: "checkbox"
                  }, null, 8, Ke)) : b("", !0),
                  ee(" " + z(y.data.value), 1)
                ])
              ], 8, De))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [fe, C.value]
        ])
      ], 8, ["to"])) : b("", !0),
      e.originalNode ? (v(), K(X, {
        key: 2,
        to: e.originalNode
      }, [
        (v(!0), p(L, null, W(c(t), (y) => (v(), p("option", {
          key: y[0],
          selected: "selected",
          value: y[0]
        }, null, 8, Xe))), 128))
      ], 8, ["to"])) : b("", !0)
    ], 64));
  }
}, Qe = {
  key: 0,
  class: "no-matches"
}, Ye = { key: 1 }, Ze = ["onClick"], Re = { class: "row-input" }, et = {
  __name: "ExtraSuggest",
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: g }) {
    var q, B, T;
    const e = o, { options: l } = me(null, e.options, []), a = (q = e.originalNode) == null ? void 0 : q.classList, t = Object.values((T = (B = e.originalNode) == null ? void 0 : B.style) != null ? T : {});
    he(e.originalNode);
    const { filterText: i, filteredOptions: s } = ge(l, e.minChars), { searchingFlag: d } = ye(
      l,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), w = _(null), S = _(null), u = _(!1), f = _(null), h = function(m) {
      const x = H(m.target);
      x.push(m.target), !x.includes(w.value) && !x.includes(S.value) && (u.value = !1);
    };
    le(() => {
      if (e.dropdownContainer) {
        let m = !1;
        f.value = H(w.value).find((x) => !!(x instanceof Element && (x.matches(e.dropdownContainer) && (m = !0), m && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(x).position))));
      }
      if (f.value == null && (f.value = document.querySelector("body")), e.originalNode) {
        for (let m of a)
          m != "extrasuggest" && w.value.classList.add(m);
        for (let m of t)
          w.value.style[m] = e.originalNode.style[m];
        t.includes("background-color") || (w.value.style.backgroundColor = "white"), i.value = e.originalNode.value, P(() => {
          e.modelValue != null && (i.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", h), window.document.addEventListener("focusin", h);
    }), ne(() => {
      window.document.removeEventListener("mousedown", h), window.document.removeEventListener("focusin", h);
    });
    const { dropdownStyle: C } = we(l, _([]), u, w, S, f, e.maxWidth), N = (m) => {
      i.value = l.map.get(m).value, u.value = !1;
    }, A = () => {
      var m;
      e.originalNode && (e.originalNode.value = i.value, (m = e.originalNode) == null || m.dispatchEvent(new Event("change", { bubbles: !0 }))), g("update:modelValue", i.value);
    };
    oe(() => u.value, (m) => {
      m === !1 && A();
    });
    const { list: D, containerProps: J, wrapperProps: F } = pe(
      s,
      {
        itemHeight: 32
      }
    );
    return (m, x) => (v(), p(L, null, [
      U(k("input", {
        onFocus: x[0] || (x[0] = (E) => u.value = !0),
        onClick: x[1] || (x[1] = (E) => u.value = !0),
        ref_key: "inputNode",
        ref: w,
        "onUpdate:modelValue": x[2] || (x[2] = (E) => re(i) ? i.value = E : null),
        class: "extra-select extra-select-input"
      }, null, 544), [
        [ue, c(i)]
      ]),
      f.value ? (v(), K(X, {
        key: 0,
        to: f.value
      }, [
        U(k("div", {
          class: ae(["extra-select dropdown", { searching: c(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: S,
          style: se(c(C))
        }, [
          c(i).length >= e.minChars ? (v(), p(L, { key: 0 }, [
            c(s).length == 0 ? (v(), p("div", Qe, "No matches found")) : b("", !0)
          ], 64)) : (v(), p("div", Ye, "Insert at least " + z(e.minChars) + " characters", 1)),
          k("div", ie(c(J), { class: "scroller" }), [
            k("div", ce(de(c(F))), [
              (v(!0), p(L, null, W(c(D), (E) => (v(), p("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: ve((G) => N(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", Re, z(E.data.value), 1)
              ], 8, Ze))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [fe, u.value]
        ])
      ], 8, ["to"])) : b("", !0)
    ], 64));
  }
}, ot = Ge, at = et;
export {
  ot as ExtraSelect,
  at as ExtraSuggest,
  ot as default
};
