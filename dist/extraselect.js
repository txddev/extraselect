import { ref as x, watchEffect as M, computed as V, watchPostEffect as Se, onMounted as te, onUnmounted as le, watch as be, nextTick as Ne, openBlock as f, createElementBlock as h, Fragment as L, renderList as I, unref as c, createTextVNode as R, toDisplayString as z, createElementVNode as w, createCommentVNode as b, createBlock as J, Teleport as K, withDirectives as W, normalizeClass as ne, normalizeStyle as oe, isRef as ae, vModelText as se, mergeProps as re, normalizeProps as ue, guardReactiveProps as ie, withModifiers as ce, vShow as de } from "vue";
import { useVirtualList as fe } from "@vueuse/core";
import { empty as Oe, offset as j, getParents as U } from "@txd/utils";
const Ee = (o, v) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: o.value,
    get: () => o.value,
    push: (l, a, t = null) => {
      const r = o.map.get(l);
      if (r)
        r.value = a, r.data = t;
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
  window.ExtraSelectOptions[v] = e, o.actions = e;
};
let Le = 1;
const ve = (o) => {
  o && (o.style.display = "none", Oe(o));
}, pe = (o, v, e, l) => {
  var r;
  const a = x(/* @__PURE__ */ new Map());
  M(() => {
    a.value.clear();
    for (let s of e)
      a.value.set(s, s);
  });
  const t = x([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let s of t.value)
        t.map.set(s.key, s);
  }, M(() => {
    v && (t.value = v, t.rebuildMap());
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
  return Ee(t, (r = o == null ? void 0 : o.id) != null ? r : "extraselect_" + (++Le).toString()), { options: t, selectedOptions: a };
}, ee = async function(o, v = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: v, ...e.body })
  };
  return await (await fetch(o, l)).json();
}, he = (o, v, e, l, a, t = "limited", r = {}) => {
  const s = x(0), d = x(!1), g = V(() => d.value || s.value > 0);
  if (v != null && v.length > 0)
    if (e) {
      const _ = [];
      M((u) => {
        if (l.value.length >= a) {
          let p = !0;
          switch (t) {
            case "always":
              break;
            default:
            case "limited":
              p = !_.includes(l.value);
              break;
            case "complete":
              p = _.reduce((y, k) => y && !l.value.startsWith(k), !0);
              break;
          }
          if (p) {
            d.value = !0;
            const y = setTimeout(() => {
              _.push(l.value), s.value += 1, ee(v, l.value, r).then((k) => {
                o.actions.addRange(k), o.actions.sort(), s.value -= 1, d.value = !1;
              });
            }, 500);
            u(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      ee(v, null, r).then((_) => {
        o.actions.addRange(_), o.actions.sort();
      });
  return { searchingFlag: g };
}, ye = (o) => {
  const v = x(""), e = x([]), l = function(a, t) {
    return a.value.filter((s) => t.length > 0 ? s.value.toLowerCase().includes(t.toLowerCase()) : !0);
  };
  return M(() => {
    e.value = l(o, v.value);
  }), { filterText: v, filteredOptions: e };
}, me = (o, v, e, l, a, t, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, d = function(u) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = s, y.measureText(u).width;
  }, g = V(() => {
    var p, y;
    const u = (p = j(l.value).width) != null ? p : 100;
    if (r === "inherit")
      return u;
    if (r == null || r === "dynamic") {
      const k = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(u, Math.max(...o.value.map((N) => d(N.value))) + 20 + k * 3);
    }
    return r;
  }), _ = x({
    position: "absolute",
    "min-width": "max-content"
  });
  return Se(() => {
    e.value < 0 && console.log("is open"), v.value.size < 0 && console.log("empty selection");
    var u = j(l.value), p = j(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var p = j(t.value);
    let y = -p.left + u.left;
    const k = window.document.documentElement.clientWidth;
    y + g.value > k && (y = k - g.value), _.value = {
      position: "absolute",
      "min-width": "max-content",
      width: g.value.toString() + "px",
      top: (-p.top + u.top + u.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: _, getTextWidth: d };
}, Ve = {
  key: 0,
  class: "extra-select selection"
}, Ae = ["onClick"], Fe = ["innerHTML"], Me = ["value"], qe = {
  key: 0,
  class: "input-searching"
}, Te = {
  key: 0,
  class: "allselect-clear"
}, $e = { class: "row-input" }, ze = ["checked"], Pe = /* @__PURE__ */ w("b", null, "Select all", -1), Be = { class: "row-input" }, je = ["checked"], Ie = /* @__PURE__ */ w("b", null, "Select Filtered", -1), We = {
  key: 1,
  class: "no-matches"
}, Ue = { key: 2 }, He = ["onClick"], De = { class: "row-input" }, Je = ["checked"], Ke = ["value"], Xe = {
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
  setup(o, { emit: v }) {
    var G, Q, Y;
    const e = o, l = V(() => {
      var n, i;
      return (i = (n = e.originalNode) == null ? void 0 : n.multiple) != null ? i : e.multiple;
    }), { options: a, selectedOptions: t } = pe(e.originalNode, e.options, e.modelValue, e.initialValue), r = (G = e.originalNode) == null ? void 0 : G.classList, s = Object.values((Y = (Q = e.originalNode) == null ? void 0 : Q.style) != null ? Y : {});
    ve(e.originalNode);
    const { filterText: d, filteredOptions: g } = ye(a, e.minChars), { searchingFlag: _ } = he(
      a,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), u = x(null), p = x(null), y = x(null), k = x(!1), N = x(null), A = function(n) {
      const i = U(n.target);
      i.push(n.target), !i.includes(u.value) && !i.includes(p.value) && (k.value = !1);
    };
    te(() => {
      if (e.dropdownContainer) {
        let n = !1;
        N.value = U(u.value).find((i) => !!(i instanceof Element && (i.matches(e.dropdownContainer) && (n = !0), n && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(i).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), e.originalNode) {
        for (let n of r)
          n != "extraselect" && u.value.classList.add(n);
        for (let n of s)
          u.value.style[n] = e.originalNode.style[n];
        s.includes("background-color") || (u.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", A), window.document.addEventListener("focusin", A);
    }), le(() => {
      window.document.removeEventListener("mousedown", A), window.document.removeEventListener("focusin", A);
    });
    const { dropdownStyle: H, getTextWidth: D } = me(a, t, k, u, p, N, e.maxWidth), q = (n) => {
      l.value ? t.value.has(n) ? t.value.delete(n) : t.value.set(n, n) : (t.value.clear(), t.value.set(n, n), k.value = !1), v("update:modelValue", Array.from(t.value.keys()));
    }, P = (n) => {
      T(n, !1), d.value = "";
    }, T = (n, i = null) => {
      i == null && (i = !C.value), i ? (t.value.clear(), a.value.forEach((m) => t.value.set(m.key, m.key))) : t.value.clear(), v("update:modelValue", Array.from(t.value.keys()));
    }, S = () => {
      O.value ? g.value.forEach((n) => {
        t.value.has(n.key) && t.value.delete(n.key);
      }) : g.value.forEach((n) => {
        t.value.has(n.key) || t.value.set(n.key, n.key);
      }), v("update:modelValue", Array.from(t.value.keys()));
    };
    be(k, (n, i) => {
      n != i && (n ? e.search && Ne(() => {
        y.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const C = V(() => t.value.size == a.value.length), O = V(() => g.value.reduce((n, i) => n && t.value.has(i.key), !0)), X = V(() => t.value.size == 0), ge = V(() => {
      var n, i, m, F, $;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (C.value)
          return "All selected";
        if (X.value)
          return "No selection";
        const E = u.value ? getComputedStyle(u.value) : null, xe = ((n = u.value) == null ? void 0 : n.clientWidth) - parseInt(E == null ? void 0 : E.paddingLeft) - parseInt(E == null ? void 0 : E.paddingRight);
        let B = t.value.size + " selected - ", Z = !0;
        for (let _e of t.value)
          if (Z ? Z = !1 : B += ", ", B += (m = (i = a.map.get(_e[0])) == null ? void 0 : i.value) != null ? m : _.value ? "Loading..." : "Value not found", xe < D(B))
            return t.value.size + " selected";
        return B;
      } else
        for (let E of t.value)
          return ($ = (F = a.map.get(E[0])) == null ? void 0 : F.value) != null ? $ : _.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: we, containerProps: ke, wrapperProps: Ce } = fe(
      g,
      {
        itemHeight: 32
      }
    );
    return (n, i) => (f(), h(L, null, [
      e.showSelected ? (f(), h("div", Ve, [
        (f(!0), h(L, null, I(c(t), (m) => {
          var F;
          return f(), h("div", {
            key: m,
            onClick: ($) => q(m[0]),
            class: "selection-badge"
          }, [
            R(z((F = c(a).find(($) => $.key == m[0])) == null ? void 0 : F.value) + " ", 1),
            w("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, Fe)
          ], 8, Ae);
        }), 128))
      ])) : b("", !0),
      w("input", {
        onFocus: i[0] || (i[0] = (m) => k.value = !0),
        onClick: i[1] || (i[1] = (m) => k.value = !0),
        ref_key: "inputNode",
        ref: u,
        value: c(ge),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, Me),
      N.value ? (f(), J(K, {
        key: 1,
        to: N.value
      }, [
        W(w("div", {
          class: ne(["extra-select dropdown", { searching: c(_) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: oe(c(H))
        }, [
          e.search ? (f(), h("div", qe, [
            W(w("input", {
              ref_key: "searchNode",
              ref: y,
              class: "extra-select-search",
              "onUpdate:modelValue": i[2] || (i[2] = (m) => ae(d) ? d.value = m : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [se, c(d)]
            ])
          ])) : b("", !0),
          c(d).length >= e.minChars ? (f(), h(L, { key: 1 }, [
            c(l) ? (f(), h("div", Te, [
              c(d).length == 0 ? (f(), h("div", {
                key: 0,
                onClick: T,
                class: "all-select"
              }, [
                w("div", $e, [
                  w("input", {
                    checked: c(C),
                    type: "checkbox"
                  }, null, 8, ze),
                  Pe
                ])
              ])) : b("", !0),
              c(g).length > 0 && c(d).length > 0 ? (f(), h("div", {
                key: 1,
                onClick: S,
                class: "all-select"
              }, [
                w("div", Be, [
                  w("input", {
                    checked: c(O),
                    type: "checkbox"
                  }, null, 8, je),
                  Ie
                ])
              ])) : b("", !0),
              w("div", {
                class: "clear",
                onClick: P
              }, "Clear")
            ])) : b("", !0),
            c(g).length == 0 ? (f(), h("div", We, "No matches found")) : b("", !0)
          ], 64)) : (f(), h("div", Ue, "Insert at least " + z(e.minChars) + " characters", 1)),
          w("div", re(c(ke), { class: "scroller" }), [
            w("div", ue(ie(c(Ce))), [
              (f(!0), h(L, null, I(c(we), (m) => (f(), h("button", {
                key: m.index,
                class: "dropdown-row",
                onClick: ce((F) => q(m.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                w("div", De, [
                  c(l) ? (f(), h("input", {
                    key: 0,
                    checked: c(t).has(m.data.key),
                    type: "checkbox"
                  }, null, 8, Je)) : b("", !0),
                  R(" " + z(m.data.value), 1)
                ])
              ], 8, He))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [de, k.value]
        ])
      ], 8, ["to"])) : b("", !0),
      e.originalNode ? (f(), J(K, {
        key: 2,
        to: e.originalNode
      }, [
        (f(!0), h(L, null, I(c(t), (m) => (f(), h("option", {
          key: m[0],
          selected: "selected",
          value: m[0]
        }, null, 8, Ke))), 128))
      ], 8, ["to"])) : b("", !0)
    ], 64));
  }
}, Ge = {
  key: 0,
  class: "no-matches"
}, Qe = { key: 1 }, Ye = ["onClick"], Ze = { class: "row-input" }, Re = {
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
  setup(o, { emit: v }) {
    var q, P, T;
    const e = o, { options: l } = pe(null, e.options, []), a = (q = e.originalNode) == null ? void 0 : q.classList, t = Object.values((T = (P = e.originalNode) == null ? void 0 : P.style) != null ? T : {});
    ve(e.originalNode);
    const { filterText: r, filteredOptions: s } = ye(l, e.minChars), { searchingFlag: d } = he(
      l,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), g = x(null), _ = x(null), u = x(!1), p = x(null), y = function(S) {
      const C = U(S.target);
      C.push(S.target), !C.includes(g.value) && !C.includes(_.value) && (u.value = !1);
    };
    te(() => {
      if (e.dropdownContainer) {
        let S = !1;
        p.value = U(g.value).find((C) => !!(C instanceof Element && (C.matches(e.dropdownContainer) && (S = !0), S && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(C).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let S of a)
          S != "extraselect" && g.value.classList.add(S);
        for (let S of t)
          g.value.style[S] = e.originalNode.style[S];
        t.includes("background-color") || (g.value.style.backgroundColor = "white"), r.value = e.originalNode.value, M(() => {
          e.modelValue != null && (r.value = e.modelValue);
        }), M(() => {
          e.originalNode.value = r.value;
        });
      }
      window.document.addEventListener("mousedown", y), window.document.addEventListener("focusin", y);
    }), le(() => {
      window.document.removeEventListener("mousedown", y), window.document.removeEventListener("focusin", y);
    });
    const { dropdownStyle: k } = me(l, x([]), u, g, _, p, e.maxWidth), N = (S) => {
      r.value = l.map.get(S).value, u.value = !1, v("update:modelValue", r.value);
    }, { list: A, containerProps: H, wrapperProps: D } = fe(
      s,
      {
        itemHeight: 32
      }
    );
    return (S, C) => (f(), h(L, null, [
      W(w("input", {
        onFocus: C[0] || (C[0] = (O) => u.value = !0),
        onClick: C[1] || (C[1] = (O) => u.value = !0),
        ref_key: "inputNode",
        ref: g,
        "onUpdate:modelValue": C[2] || (C[2] = (O) => ae(r) ? r.value = O : null),
        class: "extra-select extra-select-input"
      }, null, 544), [
        [se, c(r)]
      ]),
      p.value ? (f(), J(K, {
        key: 0,
        to: p.value
      }, [
        W(w("div", {
          class: ne(["extra-select dropdown", { searching: c(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: _,
          style: oe(c(k))
        }, [
          c(r).length >= e.minChars ? (f(), h(L, { key: 0 }, [
            c(s).length == 0 ? (f(), h("div", Ge, "No matches found")) : b("", !0)
          ], 64)) : (f(), h("div", Qe, "Insert at least " + z(e.minChars) + " characters", 1)),
          w("div", re(c(H), { class: "scroller" }), [
            w("div", ue(ie(c(D))), [
              (f(!0), h(L, null, I(c(A), (O) => (f(), h("button", {
                key: O.index,
                class: "dropdown-row",
                onClick: ce((X) => N(O.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                w("div", Ze, z(O.data.value), 1)
              ], 8, Ye))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [de, u.value]
        ])
      ], 8, ["to"])) : b("", !0)
    ], 64));
  }
}, nt = Xe, ot = Re;
export {
  nt as ExtraSelect,
  ot as ExtraSuggest,
  nt as default
};
