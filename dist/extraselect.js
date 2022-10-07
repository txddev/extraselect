import { ref as _, watchEffect as M, computed as O, watchPostEffect as ae, onMounted as ne, onUnmounted as se, watch as oe, nextTick as ue, openBlock as p, createElementBlock as g, Fragment as N, renderList as F, unref as d, createTextVNode as j, toDisplayString as T, createElementVNode as w, createCommentVNode as x, createBlock as H, Teleport as U, withDirectives as $, normalizeClass as re, normalizeStyle as ie, isRef as ce, vModelText as de, mergeProps as ve, normalizeProps as fe, guardReactiveProps as pe, withModifiers as he, vShow as me } from "vue";
import { useVirtualList as ye } from "@vueuse/core";
import { empty as ge, offset as A, getParents as D } from "@txd/utils";
const ke = (a, v) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const t = {
    defaultArray: a.value,
    get: () => a.value,
    push: (s, o, e = null) => {
      const f = a.map.get(s);
      if (f)
        f.value = o, f.data = e;
      else {
        let h = { value: o, key: s, data: e };
        a.value.push(h), a.map.set(h.key, h);
      }
    },
    addRange: (s) => {
      for (let o of s)
        a.actions.push(o.key, o.value, o.data);
    },
    remove: (s) => {
      a.value.splice(a.value.findIndex((o) => o.key == s), 1);
    },
    clear: () => {
      a.value = [];
    },
    sort: (s = null) => {
      s == null && (s = (o, e) => o.value.localeCompare(e.value)), a.value = a.value.sort(s);
    },
    setDefault: function(s) {
      this.defaultArray = s;
    },
    restoreDefault: function() {
      a.value = this.defaultArray;
    },
    filter: function(s) {
    }
  };
  window.ExtraSelectOptions[v] = t, a.actions = t;
};
let we = 1;
const _e = (a) => {
  a && (a.style.display = "none", ge(a));
}, Ce = (a, v, t, s) => {
  var f, h;
  const o = _(/* @__PURE__ */ new Map());
  M(() => {
    o.value.clear();
    for (let u of t)
      o.value.set(u, u);
  });
  const e = _([]);
  if (e.map = /* @__PURE__ */ new Map(), e.rebuildMap = () => {
    if (e.map.clear(), e.value)
      for (let u of e.value)
        e.map.set(u.key, u);
  }, M(() => {
    v && (e.value = v, e.rebuildMap());
  }), a) {
    o.value.clear();
    for (let u of Array.apply(null, a.selectedOptions).map((i) => i.value).filter((i) => i))
      o.value.set(u, u);
    e.value = Array.apply(null, a.options).reduce((u, i) => (u.push({ value: i.text, key: i.value, data: i.dataset }), u), []), e.rebuildMap();
  }
  return ke(e, (h = (f = a == null ? void 0 : a.id) != null ? f : s) != null ? h : "extraselect_" + (++we).toString()), { options: e, selectedOptions: o };
}, J = async function(a, v = null, t = {}) {
  var e;
  const s = {
    method: "POST",
    credentials: "include",
    ...t,
    headers: { "Content-Type": "application/json", ...(e = t.headers) != null ? e : {} },
    body: JSON.stringify({ search: v, ...t.body })
  };
  return await (await fetch(a, s)).json();
}, xe = (a, v, t, s, o, e = "limited", f = {}) => {
  const h = _(0), u = _(!1), i = O(() => u.value || h.value > 0);
  if (v != null && v.length > 0)
    if (t) {
      const C = [];
      M((r) => {
        if (s.value.length >= o) {
          let k = !0;
          switch (e) {
            case "always":
              break;
            default:
            case "limited":
              k = !C.includes(s.value);
              break;
            case "complete":
              k = C.reduce((m, y) => m && !s.value.startsWith(y), !0);
              break;
          }
          if (k) {
            u.value = !0;
            const m = setTimeout(() => {
              C.push(s.value), h.value += 1, J(v, s.value, f).then((y) => {
                a.actions.addRange(y), a.actions.sort(), h.value -= 1, u.value = !1;
              });
            }, 500);
            r(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      J(v, null, f).then((C) => {
        a.actions.addRange(C), a.actions.sort();
      });
  return { searchingFlag: i };
}, Se = (a, v) => {
  const t = _(""), s = _([]), o = function(e, f) {
    return console.log(e.value), e.value.filter((u) => f.length > 0 ? u.value.toLowerCase().includes(f.toLowerCase()) : !0);
  };
  return M(() => {
    t.value.length >= v ? s.value = o(a, t.value) : s.value = [];
  }), { filterText: t, filteredOptions: s };
}, be = (a, v, t, s, o, e, f) => {
  const h = getComputedStyle(document.querySelector("body")).font, u = function(r) {
    const m = document.createElement("canvas").getContext("2d");
    return m.font = h, m.measureText(r).width;
  }, i = O(() => {
    var k, m;
    const r = (k = A(s.value).width) != null ? k : 100;
    if (f === "inherit")
      return r;
    if (f == null || f === "dynamic") {
      const y = (m = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? m : 16;
      return Math.max(r, Math.max(...a.value.map((S) => u(S.value))) + 20 + y * 3);
    }
    return f;
  }), C = _({
    position: "absolute",
    "min-width": "max-content"
  });
  return ae(() => {
    t.value < 0 && console.log("is open"), v.value.size < 0 && console.log("empty selection");
    var r = A(s.value), k = A(null);
    if (e.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(e.value).position))
      var k = A(e.value);
    let m = -k.left + r.left;
    const y = window.document.documentElement.clientWidth;
    m + i.value > y && (m = y - i.value), C.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-k.top + r.top + r.height).toString() + "px",
      left: m.toString() + "px"
    };
  }), { dropdownStyle: C, getTextWidth: u };
}, Oe = {
  key: 0,
  class: "extra-select selection"
}, Ee = ["onClick"], Ne = ["innerHTML"], Le = ["value"], Ae = {
  key: 0,
  class: "input-searching"
}, Me = {
  key: 0,
  class: "allselect-clear"
}, Ve = { class: "row-input" }, Fe = ["checked"], Te = /* @__PURE__ */ w("b", null, "Select all", -1), ze = { class: "row-input" }, qe = ["checked"], Be = /* @__PURE__ */ w("b", null, "Select Filtered", -1), Pe = {
  key: 1,
  class: "no-matches"
}, Ie = { key: 2 }, We = ["onClick"], je = { class: "row-input" }, He = ["checked"], Ue = ["value"], Ke = {
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
    minChars: { type: Number, default: 0 },
    showSelected: { type: Boolean, default: !1 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: v }) {
    var P, I, W;
    const t = a, s = O(() => {
      var l, n;
      return (n = (l = t.originalNode) == null ? void 0 : l.multiple) != null ? n : t.multiple;
    }), { options: o, selectedOptions: e } = Ce(t.originalNode, t.options, t.modelValue), f = (P = t.originalNode) == null ? void 0 : P.classList, h = Object.values((W = (I = t.originalNode) == null ? void 0 : I.style) != null ? W : {});
    _e(t.originalNode);
    const { filterText: u, filteredOptions: i } = Se(o, t.minChars), { searchingFlag: C } = xe(
      o,
      t.url,
      t.searchableUrl,
      u,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), r = _(null), k = _(null), m = _(null), y = _(!1), S = _(null), L = function(l) {
      const n = D(l.target);
      n.push(l.target), !n.includes(r.value) && !n.includes(k.value) && (y.value = !1);
    };
    ne(() => {
      if (t.dropdownContainer) {
        let l = !1;
        S.value = D(r.value).find((n) => !!(n instanceof Element && (n.matches(t.dropdownContainer) && (l = !0), l && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n).position))));
      }
      if (S.value == null && (S.value = document.querySelector("body")), t.originalNode) {
        for (let l of f)
          l != "extraselect" && r.value.classList.add(l);
        for (let l of h)
          r.value.style[l] = t.originalNode.style[l];
        h.includes("background-color") || (r.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), se(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: K, getTextWidth: X } = be(o, e, y, r, k, S, t.maxWidth), z = (l) => {
      s.value ? e.value.has(l) ? e.value.delete(l) : e.value.set(l, l) : (e.value.clear(), e.value.set(l, l), y.value = !1), v("update:modelValue", Array.from(e.value.keys()));
    }, G = (l) => {
      q(l, !1), u.value = "";
    }, q = (l, n = null) => {
      n == null && (n = !V.value), n ? (e.value.clear(), o.value.forEach((c) => e.value.set(c.key, c.key))) : e.value.clear(), v("update:modelValue", Array.from(e.value.keys()));
    }, Q = () => {
      B.value ? i.value.forEach((l) => {
        e.value.has(l.key) && e.value.delete(l.key);
      }) : i.value.forEach((l) => {
        e.value.has(l.key) || e.value.set(l.key, l.key);
      }), v("update:modelValue", Array.from(e.value.keys()));
    };
    oe(y, (l, n) => {
      l != n && (l ? t.search && ue(() => {
        m.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const V = O(() => e.value.size == o.value.length), B = O(() => i.value.reduce((l, n) => l && e.value.has(n.key), !0)), Y = O(() => e.value.size == 0), Z = O(() => {
      var l;
      if (s.value) {
        if (V.value)
          return "All selected";
        if (Y.value)
          return "No selection";
        const n = r.value ? getComputedStyle(r.value) : null, c = ((l = r.value) == null ? void 0 : l.clientWidth) - parseInt(n == null ? void 0 : n.paddingLeft) - parseInt(n == null ? void 0 : n.paddingRight);
        let b = e.value.size + " selected - ", E = !0;
        for (let le of e.value)
          if (E ? E = !1 : b += ", ", b += o.map.get(le[0]).value, c < X(b))
            return e.value.size + " selected";
        return b;
      } else
        for (let n of e.value)
          return console.log(n, n[0], o.map.get(n[0]), o.map), o.map.get(n[0]).value;
      return "No selection";
    }), { list: R, containerProps: ee, wrapperProps: te } = ye(
      i,
      {
        itemHeight: 32
      }
    );
    return (l, n) => (p(), g(N, null, [
      t.showSelected ? (p(), g("div", Oe, [
        (p(!0), g(N, null, F(d(e), (c) => {
          var b;
          return p(), g("div", {
            key: c,
            onClick: (E) => z(c[0]),
            class: "selection-badge"
          }, [
            j(T((b = d(o).find((E) => E.key == c[0])) == null ? void 0 : b.value) + " ", 1),
            w("div", {
              class: "selection-remove",
              innerHTML: t.removeIcon
            }, null, 8, Ne)
          ], 8, Ee);
        }), 128))
      ])) : x("", !0),
      w("input", {
        onFocus: n[0] || (n[0] = (c) => y.value = !0),
        onClick: n[1] || (n[1] = (c) => y.value = !0),
        ref_key: "inputNode",
        ref: r,
        value: d(Z),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, Le),
      S.value ? (p(), H(U, {
        key: 1,
        to: S.value
      }, [
        $(w("div", {
          class: re(["extra-select dropdown", { searching: d(C) > 0 }]),
          ref_key: "dropdownNode",
          ref: k,
          style: ie(d(K))
        }, [
          t.search ? (p(), g("div", Ae, [
            $(w("input", {
              ref_key: "searchNode",
              ref: m,
              class: "extra-select-search",
              "onUpdate:modelValue": n[2] || (n[2] = (c) => ce(u) ? u.value = c : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [de, d(u)]
            ])
          ])) : x("", !0),
          d(u).length >= t.minChars ? (p(), g(N, { key: 1 }, [
            d(s) ? (p(), g("div", Me, [
              d(u).length == 0 ? (p(), g("div", {
                key: 0,
                onClick: q,
                class: "all-select"
              }, [
                w("div", Ve, [
                  w("input", {
                    checked: d(V),
                    type: "checkbox"
                  }, null, 8, Fe),
                  Te
                ])
              ])) : x("", !0),
              d(i).length > 0 && d(u).length > 0 ? (p(), g("div", {
                key: 1,
                onClick: Q,
                class: "all-select"
              }, [
                w("div", ze, [
                  w("input", {
                    checked: d(B),
                    type: "checkbox"
                  }, null, 8, qe),
                  Be
                ])
              ])) : x("", !0),
              w("div", {
                class: "clear",
                onClick: G
              }, "Clear")
            ])) : x("", !0),
            d(i).length == 0 ? (p(), g("div", Pe, "No matches found")) : x("", !0)
          ], 64)) : (p(), g("div", Ie, "Insert at least " + T(t.minChars) + " characters", 1)),
          w("div", ve(d(ee), { class: "scroller" }), [
            w("div", fe(pe(d(te))), [
              (p(!0), g(N, null, F(d(R), (c) => (p(), g("button", {
                key: c.index,
                class: "dropdown-row",
                onClick: he((b) => z(c.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                w("div", je, [
                  d(s) ? (p(), g("input", {
                    key: 0,
                    checked: d(e).has(c.data.key),
                    type: "checkbox"
                  }, null, 8, He)) : x("", !0),
                  j(" " + T(c.data.value), 1)
                ])
              ], 8, We))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [me, y.value]
        ])
      ], 8, ["to"])) : x("", !0),
      t.originalNode ? (p(), H(U, {
        key: 2,
        to: t.originalNode
      }, [
        (p(!0), g(N, null, F(d(e), (c) => (p(), g("option", {
          key: c[0],
          selected: "selected",
          value: c[0]
        }, null, 8, Ue))), 128))
      ], 8, ["to"])) : x("", !0)
    ], 64));
  }
};
export {
  Ke as default
};
