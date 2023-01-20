import { ref as x, watchEffect as H, computed as q, nextTick as Y, watchPostEffect as Le, toRef as Z, onMounted as ue, onUnmounted as ie, watch as ce, openBlock as h, createElementBlock as g, Fragment as T, unref as v, createCommentVNode as F, renderList as X, createTextVNode as oe, toDisplayString as B, createElementVNode as _, mergeProps as G, createBlock as ee, Teleport as te, withDirectives as Q, normalizeClass as de, normalizeStyle as fe, isRef as ve, vModelText as Ae, normalizeProps as pe, guardReactiveProps as he, withModifiers as ye, vShow as me, vModelDynamic as Ve } from "vue";
import { useVirtualList as ge } from "@vueuse/core";
import { empty as Me, offset as K, getParents as z } from "@txd/utils";
const $ = (a) => {
  let y = parseInt(a);
  return y == a ? y : a;
}, Te = (a, y) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, u, t = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const m = a.map.get(l);
      if (m)
        m.value = u, m.data = t;
      else {
        let c = { value: u, key: l, data: t };
        a.value.push(c), a.map.set(c.key, c);
      }
    },
    addRange: (l) => {
      for (let u of l)
        a.actions.push(u.key, u.value, u.data);
    },
    remove: (l) => {
      a.value.splice(a.value.findIndex((u) => u.key == l), 1);
    },
    clear: () => {
      a.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (u, t) => u.value.localeCompare(t.value)), a.value = a.value.sort(l);
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
  window.ExtraSelectOptions[y] = e, a.actions = e;
};
let $e = 1;
const ke = (a) => {
  a && (a.style.display = "none", Me(a));
}, we = (a, y, e, l) => {
  var w;
  const u = x(/* @__PURE__ */ new Map());
  H(() => {
    if (Array.isArray(e.value)) {
      u.value.clear();
      for (let n of e.value)
        u.value.set(n, n);
    }
  });
  const t = x([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, H(() => {
    y.value && (t.value = y.value.map((n) => ({ ...n, key: $(n.key) })), t.rebuildMap());
  }), a) {
    if (u.value.clear(), a.matches("select")) {
      for (let n of Array.apply(null, a.selectedOptions).map((s) => $(s.value)).filter((s) => s))
        u.value.set(n, n);
      t.value = Array.apply(null, a.options).reduce((n, s) => (n.push({ value: s.text, key: $(s.value), data: Object.assign({}, s.dataset) }), n), []);
    }
    if (a.matches("input")) {
      let n = a.value;
      n != null && n.length > 0 && (t.value = [{ value: n, key: n }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(l))
    for (let n of l)
      u.value.set($(n), $(n));
  else
    l != null && u.value.set($(l), $(l));
  Te(t, (w = a == null ? void 0 : a.id) != null ? w : "extraselect_" + (++$e).toString());
  const m = [];
  return u.value.forEach((n, s) => {
    m.push([s, n]);
  }), { options: t, selectedOptions: u, onReset: () => {
    u.value.clear();
    for (let [n, s] of m)
      u.value.set(n, s);
  } };
}, re = async function(a, y = null, e = {}) {
  var t;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: y, ...e.body })
  };
  return await (await fetch(a, l)).json();
}, be = (a, y, e, l, u, t, m = "limited", c = {}) => {
  const w = x(0), n = x(!1), s = q(() => n.value || w.value > 0);
  if (y != null && y.length > 0)
    if (e) {
      const i = [];
      H((p) => {
        if (l.value.length >= u) {
          let f = !0;
          switch (m) {
            case "always":
              break;
            default:
            case "limited":
              f = !i.includes(l.value);
              break;
            case "complete":
              f = i.reduce((d, b) => d && !l.value.startsWith(b), !0);
              break;
          }
          if (f) {
            n.value = !0;
            const d = setTimeout(() => {
              i.push(l.value), w.value += 1, c.body = { ...c.body, ...t.value }, re(y, l.value, c).then((b) => {
                a.actions.addRange(b), a.actions.sort(), w.value -= 1, n.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(d);
            });
          }
        }
      });
    } else
      re(y, null, c).then((i) => {
        a.actions.addRange(i), a.actions.sort();
      });
  return { searchingFlag: s };
}, Ce = (a, y, e, l = [], u = []) => {
  const t = x(""), m = x([]), c = x({}), w = { ...l.reduce((s, i) => (s[i] = !1, s), {}), ...u.reduce((s, i) => (s[i] = !0, s), {}) };
  for (let s in w) {
    let i = w[s], p = document.getElementById(s);
    c.value[s] = p == null ? void 0 : p.value, p && p.addEventListener("change", (f) => {
      c.value[s] = f.target.value, i && Y(() => {
        if (y != null)
          for (let d of Array.from(y.value.keys()))
            m.value.find((b) => b.key == d) || e(d, !1);
        else
          m.value.find((d) => d.key == t.value) || e(t.value, !1);
      });
    });
  }
  const n = function(s, i) {
    let p = s.value;
    return Object.keys(c.value).length > 0 && (p = p.filter((f) => {
      var d, b;
      for (let L in c.value)
        if ((w[L] ? !0 : ((d = c.value[L]) != null ? d : "").length > 0) && ((b = f.data) == null ? void 0 : b.hasOwnProperty(L)) && f.data[L] != c.value[L])
          return !1;
      return !0;
    })), i.length > 0 && (p = p.filter((f) => f.value.toLowerCase().includes(i.toLowerCase()))), p;
  };
  return H(() => {
    m.value = n(a, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: c };
}, _e = (a, y, e, l, u, t, m) => {
  const c = getComputedStyle(document.querySelector("body")).font, w = function(i) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = c, f.measureText(i).width;
  }, n = q(() => {
    var p, f;
    const i = (p = K(l.value).width) != null ? p : 100;
    if (m === "inherit")
      return i;
    if (m == null || m === "dynamic") {
      const d = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(i, Math.max(...a.value.map((b) => w(b.value))) + 20 + d * 3);
    }
    return m;
  }), s = x({
    position: "absolute",
    "min-width": "max-content"
  });
  return Le(() => {
    e.value < 0 && console.log("is open"), y.value.size < 0 && console.log("empty selection");
    var i = K(l.value), p = K(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var p = K(t.value);
    let f = -p.left + i.left;
    const d = window.document.documentElement.clientWidth;
    f + n.value > d && (f = d - n.value), s.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (-p.top + i.top + i.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: s, getTextWidth: w };
}, qe = ["name"], Ie = {
  key: 1,
  class: "extra-select selection"
}, je = ["onClick"], ze = ["innerHTML"], Pe = ["value"], Be = {
  key: 0,
  class: "input-searching"
}, He = {
  key: 0,
  class: "allselect-clear"
}, Ue = { class: "row-input" }, We = ["checked"], De = /* @__PURE__ */ _("b", null, "Select all", -1), Je = { class: "row-input" }, Ke = ["checked"], Xe = /* @__PURE__ */ _("b", null, "Select Filtered", -1), Ge = {
  key: 1,
  class: "no-matches"
}, Qe = { key: 2 }, Re = ["onClick"], Ye = { class: "row-input" }, Ze = ["checked"], et = ["value"], tt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, lt = /* @__PURE__ */ Object.assign(tt, {
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
  setup(a, { emit: y }) {
    var le, ae, ne;
    const e = a, l = q(() => {
      var o, r;
      return (r = (o = e.originalNode) == null ? void 0 : o.multiple) != null ? r : e.multiple;
    }), { options: u, selectedOptions: t, onReset: m } = we(e.originalNode, Z(e, "options"), Z(e, "modelValue"), e.initialValue), c = (le = e.originalNode) == null ? void 0 : le.classList, w = Object.values((ne = (ae = e.originalNode) == null ? void 0 : ae.style) != null ? ne : {});
    ke(e.originalNode);
    const n = (o, r = null) => {
      if (l.value) {
        let N = r;
        switch (N == null && (N = !t.value.has(o)), N) {
          case !0:
            t.value.set(o, o);
            break;
          case !1:
            t.value.delete(o);
            break;
        }
      } else
        t.value.clear(), r !== !1 && t.value.set(o, o), A.value = !1;
      j(Array.from(t.value.keys()));
    }, { filterText: s, filteredOptions: i, filterValues: p } = Ce(u, t, n, e.filterFields, e.hardFilterFields), { searchingFlag: f } = be(
      u,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), d = x(null), b = x(null), L = x(null), A = x(!1), M = x(null), I = function(o) {
      const r = z(o.target);
      r.push(o.target), !r.includes(d.value) && !r.includes(b.value) && (A.value = !1);
    };
    ue(() => {
      if (e.dropdownContainer) {
        let o = !1;
        M.value = z(d.value).find((r) => !!(r instanceof Element && (r.matches(e.dropdownContainer) && (o = !0), o && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let r of c)
          r != "extraselect" && d.value.classList.add(r);
        for (let r of w)
          d.value.style[r] = e.originalNode.style[r];
        w.includes("background-color") || (d.value.style.backgroundColor = "white");
        let o = z(d.value, "form").pop();
        o instanceof HTMLElement && o.matches("form") && o.addEventListener("reset", () => setTimeout(m));
      }
      window.document.addEventListener("mousedown", I), window.document.addEventListener("focusin", I);
    }), ie(() => {
      window.document.removeEventListener("mousedown", I), window.document.removeEventListener("focusin", I);
    });
    const { dropdownStyle: R, getTextWidth: U } = _e(u, t, A, d, b, M, e.maxWidth), j = (o) => {
      Y(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), y("update:modelValue", o);
    }, W = (o) => {
      C(o, !1), s.value = "";
    }, C = (o, r = null) => {
      r == null && (r = !E.value), r ? (t.value.clear(), u.value.forEach((N) => t.value.set(N.key, N.key))) : t.value.clear(), j(Array.from(t.value.keys()));
    }, k = () => {
      V.value ? i.value.forEach((o) => {
        t.value.has(o.key) && t.value.delete(o.key);
      }) : i.value.forEach((o) => {
        t.value.has(o.key) || t.value.set(o.key, o.key);
      }), j(Array.from(t.value.keys()));
    };
    ce(A, (o, r) => {
      o != r && (o ? e.search && Y(() => {
        L.value.focus({ focusVisible: !0 });
      }) : s.value = "");
    });
    const E = q(() => t.value.size == u.value.length), V = q(() => i.value.reduce((o, r) => o && t.value.has(r.key), !0)), xe = q(() => t.value.size == 0), Se = q(() => {
      var o, r, N, P, S;
      if (u.value.length < 0)
        return "";
      if (l.value) {
        if (xe.value)
          return "No selection";
        if (!e.searchableUrl && E.value)
          return "All selected";
        const O = d.value ? getComputedStyle(d.value) : null, D = ((o = d.value) == null ? void 0 : o.clientWidth) - parseInt(O == null ? void 0 : O.paddingLeft) - parseInt(O == null ? void 0 : O.paddingRight);
        let J = t.value.size + " selected - ", se = !0;
        for (let Fe of t.value)
          if (se ? se = !1 : J += ", ", J += (N = (r = u.map.get(Fe[0])) == null ? void 0 : r.value) != null ? N : f.value ? "Loading..." : "Value not found", D < U(J))
            return t.value.size + " selected";
        return J;
      } else
        for (let O of t.value)
          return (S = (P = u.map.get(O[0])) == null ? void 0 : P.value) != null ? S : f.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Ee, containerProps: Ne, wrapperProps: Oe } = ge(
      i,
      {
        itemHeight: 32
      }
    );
    return (o, r) => {
      var N, P;
      return h(), g(T, null, [
        v(l) && v(t).size == 0 ? (h(), g("input", {
          key: 0,
          type: "hidden",
          name: (P = (N = e.originalNode) == null ? void 0 : N.name) == null ? void 0 : P.replace("[]", ""),
          value: ""
        }, null, 8, qe)) : F("", !0),
        e.showSelected ? (h(), g("div", Ie, [
          (h(!0), g(T, null, X(v(t), (S) => {
            var O;
            return h(), g("div", {
              key: S,
              onClick: (D) => n(S[0]),
              class: "selection-badge"
            }, [
              oe(B((O = v(u).find((D) => D.key == S[0])) == null ? void 0 : O.value) + " ", 1),
              _("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, ze)
            ], 8, je);
          }), 128))
        ])) : F("", !0),
        _("input", G({
          onFocus: r[0] || (r[0] = (S) => A.value = !0),
          onClick: r[1] || (r[1] = (S) => A.value = !0),
          ref_key: "inputNode",
          ref: d,
          value: v(Se),
          class: "extra-select extra-select-input",
          readonly: ""
        }, o.$attrs), null, 16, Pe),
        M.value ? (h(), ee(te, {
          key: 2,
          to: M.value
        }, [
          Q(_("div", {
            class: de(["extra-select dropdown", { searching: v(f) > 0 }]),
            ref_key: "dropdownNode",
            ref: b,
            style: fe(v(R))
          }, [
            e.search ? (h(), g("div", Be, [
              Q(_("input", {
                ref_key: "searchNode",
                ref: L,
                class: "extra-select-search",
                "onUpdate:modelValue": r[2] || (r[2] = (S) => ve(s) ? s.value = S : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: "Cerca..."
              }, null, 512), [
                [Ae, v(s)]
              ])
            ])) : F("", !0),
            v(s).length >= e.minChars ? (h(), g(T, { key: 1 }, [
              v(l) ? (h(), g("div", He, [
                v(s).length == 0 ? (h(), g("div", {
                  key: 0,
                  onClick: C,
                  class: "all-select"
                }, [
                  _("div", Ue, [
                    _("input", {
                      checked: v(E),
                      type: "checkbox"
                    }, null, 8, We),
                    De
                  ])
                ])) : F("", !0),
                v(i).length > 0 && v(s).length > 0 ? (h(), g("div", {
                  key: 1,
                  onClick: k,
                  class: "all-select"
                }, [
                  _("div", Je, [
                    _("input", {
                      checked: v(V),
                      type: "checkbox"
                    }, null, 8, Ke),
                    Xe
                  ])
                ])) : F("", !0),
                _("div", {
                  class: "clear",
                  onClick: W
                }, "Clear")
              ])) : F("", !0),
              v(i).length == 0 ? (h(), g("div", Ge, "No matches found")) : F("", !0)
            ], 64)) : (h(), g("div", Qe, "Insert at least " + B(e.minChars) + " characters", 1)),
            _("div", G(v(Ne), { class: "scroller" }), [
              _("div", pe(he(v(Oe))), [
                (h(!0), g(T, null, X(v(Ee), (S) => (h(), g("button", {
                  key: S.index,
                  class: "dropdown-row",
                  onClick: ye((O) => n(S.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", Ye, [
                    v(l) ? (h(), g("input", {
                      key: 0,
                      checked: v(t).has(S.data.key),
                      type: "checkbox"
                    }, null, 8, Ze)) : F("", !0),
                    oe(" " + B(S.data.value), 1)
                  ])
                ], 8, Re))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [me, A.value]
          ])
        ], 8, ["to"])) : F("", !0),
        e.originalNode ? (h(), ee(te, {
          key: 3,
          to: e.originalNode
        }, [
          (h(!0), g(T, null, X(v(t), (S) => (h(), g("option", {
            key: S[0],
            selected: "selected",
            value: S[0]
          }, null, 8, et))), 128))
        ], 8, ["to"])) : F("", !0)
      ], 64);
    };
  }
}), at = {
  key: 0,
  class: "no-matches"
}, nt = { key: 1 }, st = ["onClick"], ot = { class: "row-input" }, rt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, ut = /* @__PURE__ */ Object.assign(rt, {
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
  setup(a, { emit: y }) {
    var U, j, W;
    const e = a, { options: l } = we(e.originalNode, Z(e, "options"), x([])), u = (U = e.originalNode) == null ? void 0 : U.classList, t = Object.values((W = (j = e.originalNode) == null ? void 0 : j.style) != null ? W : {});
    ke(e.originalNode);
    const m = (C, k = null) => {
      k === !1 ? c.value = "" : c.value = l.map.get(C).value, f.value = !1;
    }, { filterText: c, filteredOptions: w, filterValues: n } = Ce(l, null, m, e.filterFields, e.hardFilterFields), { searchingFlag: s } = be(
      l,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      n,
      e.fetchMode,
      e.fetchOptions
    ), i = x(null), p = x(null), f = x(!1), d = x(null), b = function(C) {
      const k = z(C.target);
      k.push(C.target), !k.includes(i.value) && !k.includes(p.value) && (f.value = !1);
    };
    ue(() => {
      if (e.dropdownContainer) {
        let C = !1;
        d.value = z(i.value).find((k) => !!(k instanceof Element && (k.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(k).position))));
      }
      if (d.value == null && (d.value = document.querySelector("body")), e.originalNode) {
        for (let V of u)
          V != "extrasuggest" && i.value.classList.add(V);
        for (let V of t)
          i.value.style[V] = e.originalNode.style[V];
        t.includes("background-color") || (i.value.style.backgroundColor = "white"), c.value = e.originalNode.value, H(() => {
          e.modelValue != null && (c.value = e.modelValue);
        });
        const C = c.value, k = () => {
          c.value = C;
        };
        let E = z(i.value, "form").pop();
        E instanceof HTMLElement && E.matches("form") && E.addEventListener("reset", () => setTimeout(k));
      }
      window.document.addEventListener("mousedown", b), window.document.addEventListener("focusin", b);
    }), ie(() => {
      window.document.removeEventListener("mousedown", b), window.document.removeEventListener("focusin", b);
    });
    const { dropdownStyle: L } = _e(l, x([]), f, i, p, d, e.maxWidth), A = () => {
      var C;
      e.originalNode && (e.originalNode.value = c.value, (C = e.originalNode) == null || C.dispatchEvent(new Event("change", { bubbles: !0 }))), y("update:modelValue", c.value);
    };
    ce(() => f.value, (C) => {
      C === !1 && A();
    });
    const { list: M, containerProps: I, wrapperProps: R } = ge(
      w,
      {
        itemHeight: 32
      }
    );
    return (C, k) => (h(), g(T, null, [
      Q(_("input", G({
        onFocus: k[0] || (k[0] = (E) => f.value = !0),
        onClick: k[1] || (k[1] = (E) => f.value = !0),
        ref_key: "inputNode",
        ref: i,
        "onUpdate:modelValue": k[2] || (k[2] = (E) => ve(c) ? c.value = E : null),
        class: "extra-select extra-select-input"
      }, C.$attrs), null, 16), [
        [Ve, v(c)]
      ]),
      d.value ? (h(), ee(te, {
        key: 0,
        to: d.value
      }, [
        Q(_("div", {
          class: de(["extra-select dropdown", { searching: v(s) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: fe(v(L))
        }, [
          v(c).length >= e.minChars ? (h(), g(T, { key: 0 }, [
            v(w).length == 0 ? (h(), g("div", at, "No matches found")) : F("", !0)
          ], 64)) : (h(), g("div", nt, "Insert at least " + B(e.minChars) + " characters", 1)),
          _("div", G(v(I), { class: "scroller" }), [
            _("div", pe(he(v(R))), [
              (h(!0), g(T, null, X(v(M), (E) => (h(), g("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: ye((V) => m(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", ot, B(E.data.value), 1)
              ], 8, st))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [me, f.value]
        ])
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), ft = lt, vt = ut;
export {
  ft as ExtraSelect,
  vt as ExtraSuggest,
  ft as default
};
