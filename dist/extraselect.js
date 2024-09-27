import { ref as k, watchEffect as X, computed as j, nextTick as le, watchPostEffect as Ve, defineComponent as ze, toRef as K, watch as Z, onMounted as ce, onUnmounted as de, openBlock as m, createElementBlock as g, Fragment as T, unref as p, createCommentVNode as F, renderList as Y, withModifiers as P, createTextVNode as ue, toDisplayString as V, createElementVNode as x, mergeProps as R, createBlock as ae, Teleport as ne, withDirectives as ee, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as Me, normalizeProps as he, guardReactiveProps as me, vShow as ye, vModelDynamic as $e } from "vue";
import { useVirtualList as ge } from "@vueuse/core";
import { empty as Te, offset as Q, getParents as W } from "@txd/utils";
const B = (l) => {
  let u = parseInt(l);
  return u == l ? u : l;
}, Ie = (l) => {
  try {
    var u = JSON.parse(l);
    if (u && typeof u == "object")
      return u;
  } catch {
  }
  return l;
}, qe = (l, u, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: l.value,
    get: () => l.value,
    push: (a, t, h = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const i = l.map.get(a);
      if (i)
        i.value = t, i.data = h;
      else {
        let b = { value: t, key: a, data: h };
        l.value.push(b), l.map.set(b.key, b);
      }
    },
    addRange: (a) => {
      for (let t of a)
        l.actions.push(t.key, t.value, t.data);
    },
    remove: (a) => {
      l.value.splice(l.value.findIndex((t) => t.key == a), 1);
    },
    clear: () => {
      l.value = [];
    },
    sort: (a = null) => {
      a == null && (a = (t, h) => t.value.localeCompare(h.value)), l.value = l.value.sort(a);
    },
    setDefault: function(a) {
      this.defaultArray = a;
    },
    restoreDefault: function() {
      l.value = this.defaultArray;
    },
    filter: function(a) {
    },
    selection: {
      get() {
        return u.value;
      },
      clear() {
        u.value.clear();
      },
      add(a) {
        u.value.set(a, a);
      },
      remove(a) {
        u.value.delete(a);
      }
    }
  };
  window.ExtraSelectOptions[e] = o, l.actions = o;
};
let Be = 1;
const we = (l) => {
  l && (l.style.display = "none", Te(l));
}, ke = (l, u, e, o) => {
  const a = k(/* @__PURE__ */ new Map());
  X(() => {
    if (Array.isArray(e.value)) {
      a.value.clear();
      for (let n of e.value)
        a.value.set(n, n);
    }
  });
  const t = k([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, X(() => {
    u.value && (t.value = u.value.map((n) => ({ ...n, key: B(n.key) })), t.rebuildMap());
  }), l) {
    if (a.value.clear(), l.matches("select")) {
      for (let n of Array.apply(null, l.selectedOptions).map((f) => B(f.value)).filter((f) => f != null))
        a.value.set(n, n);
      t.value = Array.apply(null, l.options).reduce((n, f) => (n.push({
        value: f.text,
        key: B(f.value),
        data: Object.keys(f.dataset).reduce((v, c) => (v[c] = Ie(f.dataset[c]), v), {})
      }), n), []);
    }
    if (l.matches("input")) {
      let n = l.value;
      n != null && n.length > 0 && (t.value = [{ value: n, key: n }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(o))
    for (let n of o)
      a.value.set(B(n), B(n));
  else o != null && a.value.set(B(o), B(o));
  let h = l == null ? void 0 : l.id;
  (h == null || h === "" || h == 0) && (h = "extraselect_" + (++Be).toString()), qe(t, a, h);
  const i = [];
  return a.value.forEach((n, f) => {
    i.push([f, n]);
  }), { options: t, selectedOptions: a, onReset: () => {
    a.value.clear();
    for (let [n, f] of i)
      a.value.set(n, f);
  } };
};
k({});
function Pe(l, u = {}) {
  for (let e in u)
    l = l.replace(`:${e}`, u[e]);
  return l;
}
const je = (l = null) => {
  var o;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...((o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) ?? {} };
  Object.assign(e, l ?? {}), be(k(e), "defaults");
}, be = (l, u) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, je());
  const e = {
    defaultArray: l.value,
    list: () => l.value,
    get: (o) => l.value[o] ?? null,
    push: (o, a) => {
      l.value[o] = a;
    }
  };
  window.ExtraSelectLocalization[u] = e, l.actions = e;
};
let He = 0;
const Se = (l, u) => (be(u, (l == null ? void 0 : l.id) ?? "extraselect_" + (++He).toString()), { propLocalization: u, t: (o, a = {}) => {
  let t = u.value[o] ?? window.ExtraSelectLocalization.defaults.get(o);
  return t == null && (window.ExtraSelectLocalization.defaults.push(o, o), t = o), Pe(t, a);
} }), ie = async function(l, u = null, e = {}) {
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...e.headers ?? {} },
    body: JSON.stringify({ search: u, ...e.body })
  };
  return await (await fetch(l, o)).json();
}, xe = (l, u, e, o, a, t, h = "limited", i = {}) => {
  const b = k(0), n = k(!1), f = j(() => n.value || b.value > 0);
  if (u != null && u.length > 0)
    if (e) {
      const v = [];
      X((c) => {
        if (o.value.length >= a) {
          let d = !0;
          switch (h) {
            case "always":
              break;
            default:
            case "limited":
              d = !v.includes(o.value);
              break;
            case "complete":
              d = v.reduce((w, y) => w && !o.value.startsWith(y), !0);
              break;
          }
          if (d) {
            n.value = !0;
            const w = setTimeout(() => {
              v.push(o.value), b.value += 1, i.body = { ...i.body, ...t.value }, ie(u, o.value, i).then((y) => {
                l.actions.addRange(y), l.actions.sort(), b.value -= 1, n.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(w);
            });
          }
        }
      });
    } else
      ie(u, null, i).then((v) => {
        l.actions.addRange(v), l.actions.sort();
      });
  return { searchingFlag: f };
}, Ce = (l, u, e, o = [], a = []) => {
  const t = k(""), h = k([]), i = k({}), b = { ...o.reduce((f, v) => (f[v] = !1, f), {}), ...a.reduce((f, v) => (f[v] = !0, f), {}) };
  for (let f in b) {
    let v = b[f], c = document.getElementById(f);
    i.value[f] = c == null ? void 0 : c.value, c && c.addEventListener("change", (d) => {
      i.value[f] = d.target.value, v && le(() => {
        if (u != null)
          for (let w of Array.from(u.value.keys()))
            h.value.find((y) => y.key == w) || e(w, !1);
        else h.value.find((w) => w.key == t.value) || e(t.value, !1);
      });
    });
  }
  const n = function(f, v) {
    let c = f.value;
    return Object.keys(i.value).length > 0 && (c = c.filter((d) => {
      var w;
      for (let y in i.value)
        if ((b[y] ? !0 : (i.value[y] ?? "").length > 0) && ((w = d.data) != null && w.hasOwnProperty(y))) {
          if (Array.isArray(d.data[y])) {
            if (!d.data[y].includes(i.value[y]))
              return !1;
          } else if (d.data[y] != i.value[y])
            return !1;
        }
      return !0;
    })), v.length > 0 && (c = c.filter((d) => d.value.toLowerCase().includes(v.toLowerCase()))), c;
  };
  return X(() => {
    h.value = n(l, t.value);
  }), { filterText: t, filteredOptions: h, filterValues: i };
}, _e = (l, u, e, o, a, t, h) => {
  const i = getComputedStyle(document.querySelector("body")).font, b = function(v) {
    const d = document.createElement("canvas").getContext("2d");
    return d.font = i, d.measureText(v).width;
  }, n = j(() => {
    const v = Q(o.value).width ?? 100;
    if (h === "inherit")
      return v;
    if (h == null || h === "dynamic") {
      const c = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
      return Math.max(v, Math.max(...l.value.map((d) => b(d.value))) + 20 + c * 3);
    }
    return h;
  }), f = k({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ve(() => {
    e.value < 0 && console.log("is open"), u.value.size < 0 && console.log("empty selection");
    var v = Q(o.value), c = Q(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var c = Q(t.value);
    let d = -c.left + v.left;
    const w = window.document.documentElement.clientWidth;
    d + n.value > w && (d = w - n.value), f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (-c.top + v.top + v.height).toString() + "px",
      left: d.toString() + "px"
    };
  }), { dropdownStyle: f, getTextWidth: b };
}, Ue = ["name"], We = {
  key: 1,
  class: "extra-select selection"
}, De = ["onClick"], Je = ["innerHTML"], Ke = ["value", "disabled"], Xe = {
  key: 0,
  class: "input-searching"
}, Ge = ["placeholder"], Qe = {
  key: 0,
  class: "allselect-clear"
}, Ye = { class: "row-input" }, Ze = ["checked"], Re = { class: "row-input" }, et = ["checked"], tt = {
  key: 1,
  class: "no-matches"
}, lt = { key: 2 }, at = ["onClick"], nt = { class: "row-input" }, st = ["checked"], ot = ["value"], rt = /* @__PURE__ */ ze({
  name: "ExtraSelect",
  inheritAttrs: !1,
  __name: "ExtraSelect",
  props: {
    modelValue: { default: () => [] },
    originalNode: {},
    multiple: { type: Boolean },
    options: { default: () => [] },
    localization: { default: () => ({}) },
    url: {},
    maxWidth: { default: "dynamic" },
    minChars: { default: 0 },
    search: { type: Boolean },
    searchableUrl: { type: Boolean },
    initialValue: {},
    showSelected: { type: Boolean },
    fetchMode: { default: "limited" },
    fetchOptions: { default: () => ({}) },
    filterFields: { default: () => [] },
    hardFilterFields: { default: () => [] },
    removeIcon: { default: "X" },
    dropdownContainer: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: u }) {
    var oe, re;
    const e = l, o = j(() => {
      var s;
      return ((s = e.originalNode) == null ? void 0 : s.multiple) ?? e.multiple;
    }), { options: a, selectedOptions: t, onReset: h } = ke(e.originalNode, K(e, "options"), K(e, "modelValue"), e.initialValue), { t: i } = Se(e.originalNode, K(e, "localization")), b = (oe = e.originalNode) == null ? void 0 : oe.classList, n = Object.values(((re = e.originalNode) == null ? void 0 : re.style) ?? {});
    we(e.originalNode);
    const f = u, v = (s, r = null) => {
      if (o.value) {
        let _ = r;
        switch (_ == null && (_ = !t.value.has(s)), _) {
          case !0:
            t.value.set(s, s);
            break;
          case !1:
            t.value.delete(s);
            break;
        }
      } else
        t.value.clear(), r !== !1 && t.value.set(s, s), z.value = !1;
      U(Array.from(t.value.keys()));
    }, { filterText: c, filteredOptions: d, filterValues: w } = Ce(a, t, v, e.filterFields, e.hardFilterFields), { searchingFlag: y } = xe(
      a,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      w,
      e.fetchMode,
      e.fetchOptions
    ), C = k(null), I = k(), q = k(null), z = k(!1);
    function D(s) {
      e.disabled || (z.value = s);
    }
    Z(c, () => {
      var r;
      let s = (r = I.value) == null ? void 0 : r.querySelector(".scroller");
      s && (s.scrollTop = 0);
    });
    const M = k(null), H = function(s) {
      const r = W(s.target);
      r.push(s.target), !r.includes(C.value) && !r.includes(I.value) ? z.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    ce(() => {
      if (e.dropdownContainer != null) {
        const s = e.dropdownContainer;
        let r = !1;
        M.value = W(C.value).find((_) => !!(_ instanceof Element && (_.matches(s) && (r = !0), r && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(_).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let r of b)
          r != "extraselect" && C.value.classList.add(r);
        for (let r of n)
          C.value.style[r] = e.originalNode.style[r];
        let s = W(C.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(h)), e.originalNode.toggleValue = v, e.originalNode.setValues = (r) => {
          t.value.clear();
          for (let _ of r)
            v(_);
        };
      }
      window.document.addEventListener("mousedown", H), window.document.addEventListener("focusin", H);
    }), de(() => {
      window.document.removeEventListener("mousedown", H), window.document.removeEventListener("focusin", H);
    });
    const { dropdownStyle: te, getTextWidth: G } = _e(a, t, z, C, I, M, e.maxWidth), U = (s) => {
      le(
        () => {
          var r;
          return (r = e.originalNode) == null ? void 0 : r.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), f("update:modelValue", s);
    }, L = (s) => {
      S(s, !1), c.value = "";
    }, S = (s, r = null) => {
      r == null && (r = !O.value), r ? (t.value.clear(), a.value.forEach((_) => t.value.set(_.key, _.key))) : t.value.clear(), U(Array.from(t.value.keys()));
    }, N = () => {
      se.value ? d.value.forEach((s) => {
        t.value.has(s.key) && t.value.delete(s.key);
      }) : d.value.forEach((s) => {
        t.value.has(s.key) || t.value.set(s.key, s.key);
      }), U(Array.from(t.value.keys()));
    };
    Z(z, (s, r) => {
      s != r && (s ? e.search && le(() => {
        q.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const O = j(() => t.value.size == a.value.length), se = j(() => d.value.reduce((s, r) => s && t.value.has(r.key), !0)), Ee = j(() => t.value.size == 0), Le = j(() => {
      var s, r, _;
      if (a.value.length < 0) return "";
      if (o.value) {
        if (Ee.value) return i("No selection");
        if (!e.searchableUrl && O.value) return i("All selected");
        const A = C.value ? getComputedStyle(C.value) : null, E = ((s = C.value) == null ? void 0 : s.clientWidth) - parseInt(A == null ? void 0 : A.paddingLeft) - parseInt(A == null ? void 0 : A.paddingRight);
        let $ = i(":n selected - ", { n: t.value.size }), J = !0;
        for (let Ae of t.value)
          if (J ? J = !1 : $ += ", ", $ += ((r = a.map.get(Ae[0])) == null ? void 0 : r.value) ?? (y.value ? i("Loading...") : i("Value not found")), E < G($))
            return t.value.size + i(" selected");
        return $;
      } else
        for (let A of t.value)
          return ((_ = a.map.get(A[0])) == null ? void 0 : _.value) ?? (y.value ? i("Loading...") : i("Value not found"));
      return i("No selection");
    }), { list: Ne, containerProps: Oe, wrapperProps: Fe } = ge(
      d,
      {
        itemHeight: 32
      }
    );
    return (s, r) => {
      var _, A;
      return m(), g(T, null, [
        o.value && p(t).size == 0 ? (m(), g("input", {
          key: 0,
          type: "hidden",
          name: (A = (_ = e.originalNode) == null ? void 0 : _.name) == null ? void 0 : A.replace("[]", ""),
          value: ""
        }, null, 8, Ue)) : F("", !0),
        e.showSelected ? (m(), g("div", We, [
          (m(!0), g(T, null, Y(p(t), (E) => {
            var $;
            return m(), g("div", {
              key: E,
              onClick: P((J) => v(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ue(V(($ = p(a).find((J) => J.key == E[0])) == null ? void 0 : $.value) + " ", 1),
              x("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Je)
            ], 8, De);
          }), 128))
        ])) : F("", !0),
        x("input", R({
          onFocus: r[0] || (r[0] = (E) => D(!0)),
          onClick: r[1] || (r[1] = P((E) => D(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: C,
          value: Le.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: s.disabled }), null, 16, Ke),
        M.value ? (m(), ae(ne, {
          key: 2,
          to: M.value
        }, [
          ee(x("div", {
            class: fe(["extra-select dropdown", { searching: p(y) > 0 }]),
            ref_key: "dropdownNode",
            ref: I,
            style: ve(p(te))
          }, [
            e.search ? (m(), g("div", Xe, [
              ee(x("input", {
                ref_key: "searchNode",
                ref: q,
                class: "extra-select-search",
                "onUpdate:modelValue": r[2] || (r[2] = (E) => pe(c) ? c.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(i)("Search...")
              }, null, 8, Ge), [
                [Me, p(c)]
              ])
            ])) : F("", !0),
            p(c).length >= e.minChars ? (m(), g(T, { key: 1 }, [
              o.value ? (m(), g("div", Qe, [
                p(c).length == 0 ? (m(), g("div", {
                  key: 0,
                  onClick: P(S, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  x("div", Ye, [
                    x("input", {
                      checked: O.value,
                      type: "checkbox"
                    }, null, 8, Ze),
                    x("b", null, V(p(i)("Select all")), 1)
                  ])
                ])) : F("", !0),
                p(d).length > 0 && p(c).length > 0 ? (m(), g("div", {
                  key: 1,
                  onClick: P(N, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  x("div", Re, [
                    x("input", {
                      checked: se.value,
                      type: "checkbox"
                    }, null, 8, et),
                    x("b", null, V(p(i)("Select Filtered")), 1)
                  ])
                ])) : F("", !0),
                x("div", {
                  class: "clear",
                  onClick: P(L, ["stop", "prevent"])
                }, V(p(i)("Clear")), 1)
              ])) : F("", !0),
              p(d).length == 0 ? (m(), g("div", tt, V(p(i)("No matches found")), 1)) : F("", !0)
            ], 64)) : (m(), g("div", lt, V(p(i)("Insert at least :n characters", { n: e.minChars })), 1)),
            x("div", R(p(Oe), { class: "scroller" }), [
              x("div", he(me(p(Fe))), [
                (m(!0), g(T, null, Y(p(Ne), (E) => (m(), g("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: P(($) => v(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", nt, [
                    o.value ? (m(), g("input", {
                      key: 0,
                      checked: p(t).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, st)) : F("", !0),
                    ue(" " + V(E.data.value), 1)
                  ])
                ], 8, at))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [ye, z.value]
          ])
        ], 8, ["to"])) : F("", !0),
        e.originalNode ? (m(), ae(ne, {
          key: 3,
          to: e.originalNode
        }, [
          (m(!0), g(T, null, Y(p(t), (E) => (m(), g("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, ot))), 128))
        ], 8, ["to"])) : F("", !0)
      ], 64);
    };
  }
}), ut = ["disabled"], it = {
  key: 0,
  class: "no-matches"
}, ct = { key: 1 }, dt = ["onClick"], ft = { class: "row-input" }, vt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, pt = /* @__PURE__ */ Object.assign(vt, {
  props: {
    originalNode: { type: Object, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
    modelValue: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    url: { type: String, required: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: u }) {
    var G, U;
    const e = l, { options: o } = ke(e.originalNode, K(e, "options"), k([])), { t: a } = Se(e.originalNode, K(e, "localization")), t = (G = e.originalNode) == null ? void 0 : G.classList, h = Object.values(((U = e.originalNode) == null ? void 0 : U.style) ?? {});
    we(e.originalNode);
    const i = u, b = (L, S = null) => {
      S === !1 ? n.value = "" : n.value = o.map.get(L).value, y.value = !1;
    }, { filterText: n, filteredOptions: f, filterValues: v } = Ce(o, null, b, e.filterFields, e.hardFilterFields), { searchingFlag: c } = xe(
      o,
      e.url,
      e.searchableUrl,
      n,
      e.minChars,
      v,
      e.fetchMode,
      e.fetchOptions
    ), d = k(null), w = k(null), y = k(!1), C = k(null);
    function I(L) {
      e.disabled || (y.value = L);
    }
    Z(n, () => {
      w.value.querySelector(".scroller").scrollTop = 0;
    });
    const q = function(L) {
      const S = W(L.target);
      S.push(L.target), !S.includes(d.value) && !S.includes(w.value) && (y.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let N = !1;
        C.value = W(d.value).find((O) => !!(O instanceof Element && (O.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(O).position))));
      }
      if (C.value == null && (C.value = document.querySelector("body")), e.originalNode) {
        for (let O of t)
          O != "extrasuggest" && d.value.classList.add(O);
        for (let O of h)
          d.value.style[O] = e.originalNode.style[O];
        n.value = e.originalNode.value;
        let N = W(d.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          D(!0);
        });
      }
      X(() => {
        e.modelValue != null && (n.value = e.modelValue);
      });
      const L = n.value, S = () => {
        n.value = L;
      };
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), de(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: z } = _e(o, k([]), y, d, w, C, e.maxWidth), D = (L = !1) => {
      var S;
      e.originalNode && (L ? n.value = e.originalNode.value : (e.originalNode.value = n.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), i("update:modelValue", n.value);
    };
    Z(() => y.value, (L) => {
      L === !1 && D();
    });
    const { list: M, containerProps: H, wrapperProps: te } = ge(
      f,
      {
        itemHeight: 32
      }
    );
    return (L, S) => (m(), g(T, null, [
      ee(x("input", R({
        onFocus: S[0] || (S[0] = (N) => I(!0)),
        onClick: S[1] || (S[1] = (N) => I(!0)),
        ref_key: "inputNode",
        ref: d,
        "onUpdate:modelValue": S[2] || (S[2] = (N) => pe(n) ? n.value = N : null),
        class: "extra-select extra-select-input"
      }, L.$attrs, { disabled: l.disabled }), null, 16, ut), [
        [$e, p(n)]
      ]),
      C.value ? (m(), ae(ne, {
        key: 0,
        to: C.value
      }, [
        ee(x("div", {
          class: fe(["extra-select dropdown", { searching: p(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: w,
          style: ve(p(z))
        }, [
          p(n).length >= e.minChars ? (m(), g(T, { key: 0 }, [
            p(f).length == 0 ? (m(), g("div", it, V(p(a)("No matches found")), 1)) : F("", !0)
          ], 64)) : (m(), g("div", ct, V(p(a)("Insert at least :n characters", { n: e.minChars })), 1)),
          x("div", R(p(H), { class: "scroller" }), [
            x("div", he(me(p(te))), [
              (m(!0), g(T, null, Y(p(M), (N) => (m(), g("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: P((O) => b(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", ft, V(N.data.value), 1)
              ], 8, dt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ye, y.value]
        ])
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), gt = rt, wt = pt;
export {
  gt as ExtraSelect,
  wt as ExtraSuggest,
  gt as default
};
