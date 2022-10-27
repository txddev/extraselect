import { ref as b, watchEffect as B, computed as A, watchPostEffect as Oe, onMounted as ae, onUnmounted as oe, watch as se, nextTick as te, openBlock as v, createElementBlock as h, Fragment as V, renderList as U, unref as d, createTextVNode as le, toDisplayString as z, createElementVNode as k, createCommentVNode as N, createBlock as X, Teleport as G, withDirectives as H, normalizeClass as re, normalizeStyle as ue, isRef as ie, vModelText as ce, mergeProps as de, normalizeProps as fe, guardReactiveProps as ve, withModifiers as pe, vShow as he } from "vue";
import { useVirtualList as ye } from "@vueuse/core";
import { empty as Le, offset as W, getParents as D } from "@txd/utils";
const Ve = (s, w) => {
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
let Ae = 1;
const me = (s) => {
  s && (s.style.display = "none", Le(s));
}, ge = (s, w, e, l) => {
  var i;
  const n = b(/* @__PURE__ */ new Map());
  B(() => {
    n.value.clear();
    for (let o of e)
      n.value.set(o, o);
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let o of t.value)
        t.map.set(o.key, o);
  }, B(() => {
    w && (t.value = w, t.rebuildMap());
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
  return Ve(t, (i = s == null ? void 0 : s.id) != null ? i : "extraselect_" + (++Ae).toString()), { options: t, selectedOptions: n };
}, ne = async function(s, w = null, e = {}) {
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
  const r = b(0), y = b(!1), x = A(() => y.value || r.value > 0);
  if (w != null && w.length > 0)
    if (e) {
      const f = [];
      B((u) => {
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
              p = f.reduce((_, S) => _ && !l.value.startsWith(S), !0);
              break;
          }
          if (p) {
            y.value = !0;
            const _ = setTimeout(() => {
              f.push(l.value), r.value += 1, o.body = { ...o.body, ...t.value }, ne(w, l.value, o).then((S) => {
                s.actions.addRange(S), s.actions.sort(), r.value -= 1, y.value = !1;
              });
            }, 500);
            u(() => {
              clearTimeout(_);
            });
          }
        }
      });
    } else
      ne(w, null, o).then((f) => {
        s.actions.addRange(f), s.actions.sort();
      });
  return { searchingFlag: x };
}, ke = (s, w) => {
  const e = b(""), l = b([]), n = b({});
  for (let i of w) {
    let o = document.getElementById(i);
    n.value[i] = o == null ? void 0 : o.value, o && o.addEventListener("change", (r) => {
      n.value[i] = r.target.value;
    });
  }
  const t = function(i, o) {
    let r = i.value;
    return Object.keys(n.value).length > 0 && (r = r.filter((y) => {
      var x, f;
      for (let u in n.value)
        if (((x = n.value[u]) != null ? x : "").length > 0 && (!((f = y.data) != null && f.hasOwnProperty(u)) || y.data[u] != n.value[u]))
          return !1;
      return !0;
    })), o.length > 0 && (r = r.filter((y) => y.value.toLowerCase().includes(o.toLowerCase()))), r;
  };
  return B(() => {
    l.value = t(s, e.value);
  }), { filterText: e, filteredOptions: l, filterValues: n };
}, Ce = (s, w, e, l, n, t, i) => {
  const o = getComputedStyle(document.querySelector("body")).font, r = function(f) {
    const p = document.createElement("canvas").getContext("2d");
    return p.font = o, p.measureText(f).width;
  }, y = A(() => {
    var u, p;
    const f = (u = W(l.value).width) != null ? u : 100;
    if (i === "inherit")
      return f;
    if (i == null || i === "dynamic") {
      const _ = (p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? p : 16;
      return Math.max(f, Math.max(...s.value.map((S) => r(S.value))) + 20 + _ * 3);
    }
    return i;
  }), x = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Oe(() => {
    e.value < 0 && console.log("is open"), w.value.size < 0 && console.log("empty selection");
    var f = W(l.value), u = W(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var u = W(t.value);
    let p = -u.left + f.left;
    const _ = window.document.documentElement.clientWidth;
    p + y.value > _ && (p = _ - y.value), x.value = {
      position: "absolute",
      "min-width": "max-content",
      width: y.value.toString() + "px",
      top: (-u.top + f.top + f.height).toString() + "px",
      left: p.toString() + "px"
    };
  }), { dropdownStyle: x, getTextWidth: r };
}, Fe = {
  key: 0,
  class: "extra-select selection"
}, Me = ["onClick"], qe = ["innerHTML"], Te = ["value"], $e = {
  key: 0,
  class: "input-searching"
}, Pe = {
  key: 0,
  class: "allselect-clear"
}, ze = { class: "row-input" }, Be = ["checked"], je = /* @__PURE__ */ k("b", null, "Select all", -1), Ie = { class: "row-input" }, We = ["checked"], Ue = /* @__PURE__ */ k("b", null, "Select Filtered", -1), He = {
  key: 1,
  class: "no-matches"
}, De = { key: 2 }, Je = ["onClick"], Ke = { class: "row-input" }, Xe = ["checked"], Ge = ["value"], Qe = {
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
    filterFields: { type: Array, default: [] },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: w }) {
    var Y, Z, R;
    const e = s, l = A(() => {
      var a, c;
      return (c = (a = e.originalNode) == null ? void 0 : a.multiple) != null ? c : e.multiple;
    }), { options: n, selectedOptions: t } = ge(e.originalNode, e.options, e.modelValue, e.initialValue), i = (Y = e.originalNode) == null ? void 0 : Y.classList, o = Object.values((R = (Z = e.originalNode) == null ? void 0 : Z.style) != null ? R : {});
    me(e.originalNode);
    const { filterText: r, filteredOptions: y, filterValues: x } = ke(n, e.filterFields), { searchingFlag: f } = we(
      n,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      x,
      e.fetchMode,
      e.fetchOptions
    ), u = b(null), p = b(null), _ = b(null), S = b(!1), O = b(null), F = function(a) {
      const c = D(a.target);
      c.push(a.target), !c.includes(u.value) && !c.includes(p.value) && (S.value = !1);
    };
    ae(() => {
      if (e.dropdownContainer) {
        let a = !1;
        O.value = D(u.value).find((c) => !!(c instanceof Element && (c.matches(e.dropdownContainer) && (a = !0), a && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(c).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), e.originalNode) {
        for (let a of i)
          a != "extraselect" && u.value.classList.add(a);
        for (let a of o)
          u.value.style[a] = e.originalNode.style[a];
        o.includes("background-color") || (u.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), oe(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: J, getTextWidth: K } = Ce(n, t, S, u, p, O, e.maxWidth), q = (a) => {
      te(
        () => {
          var c;
          return (c = e.originalNode) == null ? void 0 : c.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), w("update:modelValue", a);
    }, T = (a) => {
      l.value ? t.value.has(a) ? t.value.delete(a) : t.value.set(a, a) : (t.value.clear(), t.value.set(a, a), S.value = !1), q(Array.from(t.value.keys()));
    }, j = (a) => {
      $(a, !1), r.value = "";
    }, $ = (a, c = null) => {
      c == null && (c = !C.value), c ? (t.value.clear(), n.value.forEach((g) => t.value.set(g.key, g.key))) : t.value.clear(), q(Array.from(t.value.keys()));
    }, m = () => {
      E.value ? y.value.forEach((a) => {
        t.value.has(a.key) && t.value.delete(a.key);
      }) : y.value.forEach((a) => {
        t.value.has(a.key) || t.value.set(a.key, a.key);
      }), q(Array.from(t.value.keys()));
    };
    se(S, (a, c) => {
      a != c && (a ? e.search && te(() => {
        _.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const C = A(() => t.value.size == n.value.length), E = A(() => y.value.reduce((a, c) => a && t.value.has(c.key), !0)), Q = A(() => t.value.size == 0), be = A(() => {
      var a, c, g, M, P;
      if (n.value.length < 0)
        return "";
      if (l.value) {
        if (C.value)
          return "All selected";
        if (Q.value)
          return "No selection";
        const L = u.value ? getComputedStyle(u.value) : null, Ne = ((a = u.value) == null ? void 0 : a.clientWidth) - parseInt(L == null ? void 0 : L.paddingLeft) - parseInt(L == null ? void 0 : L.paddingRight);
        let I = t.value.size + " selected - ", ee = !0;
        for (let Ee of t.value)
          if (ee ? ee = !1 : I += ", ", I += (g = (c = n.map.get(Ee[0])) == null ? void 0 : c.value) != null ? g : f.value ? "Loading..." : "Value not found", Ne < K(I))
            return t.value.size + " selected";
        return I;
      } else
        for (let L of t.value)
          return (P = (M = n.map.get(L[0])) == null ? void 0 : M.value) != null ? P : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: xe, containerProps: _e, wrapperProps: Se } = ye(
      y,
      {
        itemHeight: 32
      }
    );
    return (a, c) => (v(), h(V, null, [
      e.showSelected ? (v(), h("div", Fe, [
        (v(!0), h(V, null, U(d(t), (g) => {
          var M;
          return v(), h("div", {
            key: g,
            onClick: (P) => T(g[0]),
            class: "selection-badge"
          }, [
            le(z((M = d(n).find((P) => P.key == g[0])) == null ? void 0 : M.value) + " ", 1),
            k("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, qe)
          ], 8, Me);
        }), 128))
      ])) : N("", !0),
      k("input", {
        onFocus: c[0] || (c[0] = (g) => S.value = !0),
        onClick: c[1] || (c[1] = (g) => S.value = !0),
        ref_key: "inputNode",
        ref: u,
        value: d(be),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, Te),
      O.value ? (v(), X(G, {
        key: 1,
        to: O.value
      }, [
        H(k("div", {
          class: re(["extra-select dropdown", { searching: d(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: ue(d(J))
        }, [
          e.search ? (v(), h("div", $e, [
            H(k("input", {
              ref_key: "searchNode",
              ref: _,
              class: "extra-select-search",
              "onUpdate:modelValue": c[2] || (c[2] = (g) => ie(r) ? r.value = g : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [ce, d(r)]
            ])
          ])) : N("", !0),
          d(r).length >= e.minChars ? (v(), h(V, { key: 1 }, [
            d(l) ? (v(), h("div", Pe, [
              d(r).length == 0 ? (v(), h("div", {
                key: 0,
                onClick: $,
                class: "all-select"
              }, [
                k("div", ze, [
                  k("input", {
                    checked: d(C),
                    type: "checkbox"
                  }, null, 8, Be),
                  je
                ])
              ])) : N("", !0),
              d(y).length > 0 && d(r).length > 0 ? (v(), h("div", {
                key: 1,
                onClick: m,
                class: "all-select"
              }, [
                k("div", Ie, [
                  k("input", {
                    checked: d(E),
                    type: "checkbox"
                  }, null, 8, We),
                  Ue
                ])
              ])) : N("", !0),
              k("div", {
                class: "clear",
                onClick: j
              }, "Clear")
            ])) : N("", !0),
            d(y).length == 0 ? (v(), h("div", He, "No matches found")) : N("", !0)
          ], 64)) : (v(), h("div", De, "Insert at least " + z(e.minChars) + " characters", 1)),
          k("div", de(d(_e), { class: "scroller" }), [
            k("div", fe(ve(d(Se))), [
              (v(!0), h(V, null, U(d(xe), (g) => (v(), h("button", {
                key: g.index,
                class: "dropdown-row",
                onClick: pe((M) => T(g.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", Ke, [
                  d(l) ? (v(), h("input", {
                    key: 0,
                    checked: d(t).has(g.data.key),
                    type: "checkbox"
                  }, null, 8, Xe)) : N("", !0),
                  le(" " + z(g.data.value), 1)
                ])
              ], 8, Je))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, S.value]
        ])
      ], 8, ["to"])) : N("", !0),
      e.originalNode ? (v(), X(G, {
        key: 2,
        to: e.originalNode
      }, [
        (v(!0), h(V, null, U(d(t), (g) => (v(), h("option", {
          key: g[0],
          selected: "selected",
          value: g[0]
        }, null, 8, Ge))), 128))
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}, Ye = {
  key: 0,
  class: "no-matches"
}, Ze = { key: 1 }, Re = ["onClick"], et = { class: "row-input" }, tt = {
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
    filterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: w }) {
    var T, j, $;
    const e = s, { options: l } = ge(null, e.options, []), n = (T = e.originalNode) == null ? void 0 : T.classList, t = Object.values(($ = (j = e.originalNode) == null ? void 0 : j.style) != null ? $ : {});
    me(e.originalNode);
    const { filterText: i, filteredOptions: o, filterValues: r } = ke(l, e.filterFields), { searchingFlag: y } = we(
      l,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      r,
      e.fetchMode,
      e.fetchOptions
    ), x = b(null), f = b(null), u = b(!1), p = b(null), _ = function(m) {
      const C = D(m.target);
      C.push(m.target), !C.includes(x.value) && !C.includes(f.value) && (u.value = !1);
    };
    ae(() => {
      if (e.dropdownContainer) {
        let m = !1;
        p.value = D(x.value).find((C) => !!(C instanceof Element && (C.matches(e.dropdownContainer) && (m = !0), m && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(C).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let m of n)
          m != "extrasuggest" && x.value.classList.add(m);
        for (let m of t)
          x.value.style[m] = e.originalNode.style[m];
        t.includes("background-color") || (x.value.style.backgroundColor = "white"), i.value = e.originalNode.value, B(() => {
          e.modelValue != null && (i.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", _), window.document.addEventListener("focusin", _);
    }), oe(() => {
      window.document.removeEventListener("mousedown", _), window.document.removeEventListener("focusin", _);
    });
    const { dropdownStyle: S } = Ce(l, b([]), u, x, f, p, e.maxWidth), O = (m) => {
      i.value = l.map.get(m).value, u.value = !1;
    }, F = () => {
      var m;
      e.originalNode && (e.originalNode.value = i.value, (m = e.originalNode) == null || m.dispatchEvent(new Event("change", { bubbles: !0 }))), w("update:modelValue", i.value);
    };
    se(() => u.value, (m) => {
      m === !1 && F();
    });
    const { list: J, containerProps: K, wrapperProps: q } = ye(
      o,
      {
        itemHeight: 32
      }
    );
    return (m, C) => (v(), h(V, null, [
      H(k("input", {
        onFocus: C[0] || (C[0] = (E) => u.value = !0),
        onClick: C[1] || (C[1] = (E) => u.value = !0),
        ref_key: "inputNode",
        ref: x,
        "onUpdate:modelValue": C[2] || (C[2] = (E) => ie(i) ? i.value = E : null),
        class: "extra-select extra-select-input"
      }, null, 544), [
        [ce, d(i)]
      ]),
      p.value ? (v(), X(G, {
        key: 0,
        to: p.value
      }, [
        H(k("div", {
          class: re(["extra-select dropdown", { searching: d(y) > 0 }]),
          ref_key: "dropdownNode",
          ref: f,
          style: ue(d(S))
        }, [
          d(i).length >= e.minChars ? (v(), h(V, { key: 0 }, [
            d(o).length == 0 ? (v(), h("div", Ye, "No matches found")) : N("", !0)
          ], 64)) : (v(), h("div", Ze, "Insert at least " + z(e.minChars) + " characters", 1)),
          k("div", de(d(K), { class: "scroller" }), [
            k("div", fe(ve(d(q))), [
              (v(!0), h(V, null, U(d(J), (E) => (v(), h("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: pe((Q) => O(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                k("div", et, z(E.data.value), 1)
              ], 8, Re))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [he, u.value]
        ])
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
}, ot = Qe, st = tt;
export {
  ot as ExtraSelect,
  st as ExtraSuggest,
  ot as default
};
