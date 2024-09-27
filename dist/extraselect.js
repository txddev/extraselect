import { ref as S, watchEffect as J, computed as H, nextTick as ae, watchPostEffect as Fe, defineComponent as Ae, toRef as D, watch as Y, onMounted as ce, onUnmounted as de, openBlock as y, createElementBlock as k, Fragment as B, unref as h, createCommentVNode as V, renderList as Q, withModifiers as q, createTextVNode as ue, toDisplayString as z, createElementVNode as C, mergeProps as Z, createBlock as ne, Teleport as oe, withDirectives as R, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as Ve, normalizeProps as he, guardReactiveProps as me, vShow as ye, vModelDynamic as ze } from "vue";
import { useVirtualList as ge } from "@vueuse/core";
import { empty as Me, offset as G, getParents as U } from "@txd/utils";
const j = (l) => {
  let i = parseInt(l);
  return i == l ? i : l;
}, Te = (l) => {
  try {
    var i = JSON.parse(l);
    if (i && typeof i == "object")
      return i;
  } catch {
  }
  return l;
}, $e = (l, i, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: l.value,
    get: () => l.value,
    push: (a, t, m = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const r = l.map.get(a);
      if (r)
        r.value = t, r.data = m;
      else {
        let x = { value: t, key: a, data: m };
        l.value.push(x), l.map.set(x.key, x);
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
      a == null && (a = (t, m) => t.value.localeCompare(m.value)), l.value = l.value.sort(a);
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
        return i.value;
      },
      clear() {
        i.value.clear();
      },
      add(a) {
        i.value.set(a, a);
      },
      remove(a) {
        i.value.delete(a);
      }
    }
  };
  window.ExtraSelectOptions[e] = o, l.actions = o;
};
let Be = 1;
const we = (l) => {
  l && (l.style.display = "none", Me(l));
}, ke = (l, i, e, o) => {
  const a = S(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      a.value.clear();
      for (let n of e.value)
        a.value.set(n, n);
    }
  });
  const t = S([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, J(() => {
    i.value && (t.value = i.value.map((n) => ({ ...n, key: j(n.key) })), t.rebuildMap());
  }), l) {
    if (a.value.clear(), l.matches("select")) {
      for (let n of Array.apply(null, l.selectedOptions).map((c) => j(c.value)).filter((c) => c != null))
        a.value.set(n, n);
      t.value = Array.apply(null, l.options).reduce((n, c) => (n.push({
        value: c.text,
        key: j(c.value),
        data: Object.keys(c.dataset).reduce((u, v) => (u[v] = Te(c.dataset[v]), u), {})
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
      a.value.set(j(n), j(n));
  else o != null && a.value.set(j(o), j(o));
  let m = l == null ? void 0 : l.id;
  (m == null || m === "" || m == 0) && (m = "extraselect_" + (++Be).toString()), $e(t, a, m);
  const r = [];
  return a.value.forEach((n, c) => {
    r.push([c, n]);
  }), { options: t, selectedOptions: a, onReset: () => {
    a.value.clear();
    for (let [n, c] of r)
      a.value.set(n, c);
  } };
};
S({});
function Ie(l, i = {}) {
  for (let e in i)
    l = l.replace(`:${e}`, i[e]);
  return l;
}
const je = (l = null) => {
  var o;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...((o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) ?? {} };
  Object.assign(e, l ?? {}), be(S(e), "defaults");
}, be = (l, i) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, je());
  const e = {
    defaultArray: l.value,
    list: () => l.value,
    get: (o) => l.value[o] ?? null,
    push: (o, a) => {
      l.value[o] = a;
    }
  };
  window.ExtraSelectLocalization[i] = e, l.actions = e;
};
let qe = 0;
const Se = (l, i) => (be(i, (l == null ? void 0 : l.id) ?? "extraselect_" + (++qe).toString()), { propLocalization: i, t: (o, a = {}) => {
  let t = i.value[o] ?? window.ExtraSelectLocalization.defaults.get(o);
  return t == null && (window.ExtraSelectLocalization.defaults.push(o, o), t = o), Ie(t, a);
} }), ie = async function(l, i = null, e = {}) {
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...e.headers ?? {} },
    body: JSON.stringify({ search: i, ...e.body })
  };
  return await (await fetch(l, o)).json();
}, xe = (l, i, e, o, a, t, m = "limited", r = {}) => {
  const x = S(0), n = S(!1), c = H(() => n.value || x.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const u = [];
      J((v) => {
        if (o.value.length >= a) {
          let p = !0;
          switch (m) {
            case "always":
              break;
            default:
            case "limited":
              p = !u.includes(o.value);
              break;
            case "complete":
              p = u.reduce((g, d) => g && !o.value.startsWith(d), !0);
              break;
          }
          if (p) {
            n.value = !0;
            const g = setTimeout(() => {
              u.push(o.value), x.value += 1, r.body = { ...r.body, ...t.value }, ie(i, o.value, r).then((d) => {
                l.actions.addRange(d), l.actions.sort(), x.value -= 1, n.value = !1;
              });
            }, 500);
            v(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      ie(i, null, r).then((u) => {
        l.actions.addRange(u), l.actions.sort();
      });
  return { searchingFlag: c };
}, Ce = (l, i, e, o = [], a = []) => {
  const t = S(""), m = S([]), r = S({}), x = { ...o.reduce((c, u) => (c[u] = !1, c), {}), ...a.reduce((c, u) => (c[u] = !0, c), {}) };
  for (let c in x) {
    let u = x[c], v = document.getElementById(c);
    r.value[c] = v == null ? void 0 : v.value, v && v.addEventListener("change", (p) => {
      r.value[c] = p.target.value, u && ae(() => {
        if (i != null)
          for (let g of Array.from(i.value.keys()))
            m.value.find((d) => d.key == g) || e(g, !1);
        else m.value.find((g) => g.key == t.value) || e(t.value, !1);
      });
    });
  }
  const n = function(c, u) {
    let v = c.value;
    return Object.keys(r.value).length > 0 && (v = v.filter((p) => {
      var g;
      for (let d in r.value)
        if ((x[d] ? !0 : (r.value[d] ?? "").length > 0) && ((g = p.data) != null && g.hasOwnProperty(d))) {
          if (Array.isArray(p.data[d])) {
            if (!p.data[d].includes(r.value[d]))
              return !1;
          } else if (p.data[d] != r.value[d])
            return !1;
        }
      return !0;
    })), u.length > 0 && (v = v.filter((p) => p.value.toLowerCase().includes(u.toLowerCase()))), v;
  };
  return J(() => {
    m.value = n(l, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: r };
}, _e = (l, i, e, o, a, t, m) => {
  const r = getComputedStyle(document.querySelector("body")).font, x = function(u) {
    const p = document.createElement("canvas").getContext("2d");
    return p.font = r, p.measureText(u).width;
  }, n = H(() => {
    const u = G(o.value).width ?? 100;
    if (m === "inherit")
      return u;
    if (m == null || m === "dynamic") {
      const v = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
      return Math.max(u, Math.max(...l.value.map((p) => x(p.value))) + 20 + v * 3);
    }
    return m;
  }), c = S({
    position: "absolute",
    "min-width": "max-content"
  });
  return Fe(() => {
    var u = G(o.value);
    const v = o.value.getBoundingClientRect();
    var p = G(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var p = G(t.value);
    let g = -p.left + u.left;
    const d = window.document.documentElement.clientWidth;
    v.left + n.value > d && (g = d - n.value);
    const N = window.document.documentElement.clientHeight;
    let T = -p.top + u.top + u.height, F = 250;
    if (v.top + v.height + F > N) {
      let I = u.top - F;
      I > 0 && (T = I);
    }
    c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (T - p.top).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: x };
}, He = ["name"], Pe = {
  key: 1,
  class: "extra-select selection"
}, Ue = ["onClick"], We = ["innerHTML"], De = ["value", "disabled"], Je = {
  key: 0,
  class: "input-searching"
}, Ke = ["placeholder"], Xe = {
  key: 0,
  class: "allselect-clear"
}, Ge = { class: "row-input" }, Qe = ["checked"], Ye = { class: "row-input" }, Ze = ["checked"], Re = {
  key: 1,
  class: "no-matches"
}, et = { key: 2 }, tt = ["onClick"], lt = { class: "row-input" }, at = ["checked"], nt = ["value"], ot = /* @__PURE__ */ Ae({
  name: "ExtraSelect",
  inheritAttrs: !1,
  __name: "ExtraSelect",
  props: {
    modelValue: { default: () => [] },
    originalNode: { default: null },
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
  setup(l, { emit: i }) {
    var re;
    const e = l, o = H(() => {
      var s;
      return ((s = e.originalNode) == null ? void 0 : s.multiple) ?? e.multiple;
    }), { options: a, selectedOptions: t, onReset: m } = ke(e.originalNode, D(e, "options"), D(e, "modelValue"), e.initialValue), { t: r } = Se(e.originalNode, D(e, "localization")), x = Object.values(((re = e.originalNode) == null ? void 0 : re.style) ?? {});
    we(e.originalNode);
    const n = i, c = (s, f = null) => {
      if (o.value) {
        let w = f;
        switch (w == null && (w = !t.value.has(s)), w) {
          case !0:
            t.value.set(s, s);
            break;
          case !1:
            t.value.delete(s);
            break;
        }
      } else
        t.value.clear(), f !== !1 && t.value.set(s, s), F.value = !1;
      b(Array.from(t.value.keys()));
    }, { filterText: u, filteredOptions: v, filterValues: p } = Ce(a, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: g } = xe(
      a,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), d = S(), N = S(), T = S(null), F = S(!1);
    function I(s) {
      e.disabled || (F.value = s);
    }
    Y(u, () => {
      var f;
      let s = (f = N.value) == null ? void 0 : f.querySelector(".scroller");
      s && (s.scrollTop = 0);
    });
    const M = S(null), P = function(s) {
      const f = U(s.target);
      f.push(s.target), !f.includes(d.value) && !f.includes(N.value) ? F.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    ce(() => {
      var s;
      if (e.dropdownContainer != null) {
        const f = e.dropdownContainer;
        let w = !1;
        M.value = U(d.value).find((_) => !!(_ instanceof Element && (_.matches(f) && (w = !0), w && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(_).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let w of e.originalNode.classList)
          w != "extraselect" && ((s = d.value) == null || s.classList.add(w));
        for (let w of x)
          d.value && (d.value.style[w] = e.originalNode.style[w]);
        let f = U(d.value, "form").pop();
        f instanceof HTMLElement && f.matches("form") && f.addEventListener("reset", () => setTimeout(m)), Object.assign(e.originalNode, {
          toggleValue: c,
          setValues: (w) => {
            t.value.clear();
            for (let _ of w)
              c(_);
          }
        });
      }
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), de(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { list: ee, containerProps: te, wrapperProps: K } = ge(
      v,
      {
        itemHeight: 32
      }
    ), { dropdownStyle: X, getTextWidth: L } = _e(a, t, F, d, N, M, e.maxWidth), b = (s) => {
      ae(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), n("update:modelValue", s);
    }, O = (s) => {
      A(s, !1), u.value = "";
    }, A = (s, f = null) => {
      f == null && (f = !le.value), f ? (t.value.clear(), a.value.forEach((w) => t.value.set(w.key, w.key))) : t.value.clear(), b(Array.from(t.value.keys()));
    }, Ee = () => {
      se.value ? v.value.forEach((s) => {
        t.value.has(s.key) && t.value.delete(s.key);
      }) : v.value.forEach((s) => {
        t.value.has(s.key) || t.value.set(s.key, s.key);
      }), b(Array.from(t.value.keys()));
    };
    Y(F, (s, f) => {
      s != f && (s ? e.search && ae(() => {
        T.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const le = H(() => t.value.size == a.value.length), se = H(() => v.value.reduce((s, f) => s && t.value.has(f.key), !0)), Le = H(() => t.value.size == 0), Oe = H(() => {
      var s, f, w;
      if (a.value.length < 0) return "";
      if (o.value) {
        if (Le.value) return r("No selection");
        if (!e.searchableUrl && le.value) return r("All selected");
        const _ = d.value ? getComputedStyle(d.value) : null, E = ((s = d.value) == null ? void 0 : s.clientWidth) - parseInt(_ == null ? void 0 : _.paddingLeft) - parseInt(_ == null ? void 0 : _.paddingRight);
        let $ = r(":n selected - ", { n: t.value.size }), W = !0;
        for (let Ne of t.value)
          if (W ? W = !1 : $ += ", ", $ += ((f = a.map.get(Ne[0])) == null ? void 0 : f.value) ?? (g.value ? r("Loading...") : r("Value not found")), E < L($))
            return t.value.size + r(" selected");
        return $;
      } else
        for (let _ of t.value)
          return ((w = a.map.get(_[0])) == null ? void 0 : w.value) ?? (g.value ? r("Loading...") : r("Value not found"));
      return r("No selection");
    });
    return (s, f) => {
      var w, _;
      return y(), k(B, null, [
        o.value && h(t).size == 0 ? (y(), k("input", {
          key: 0,
          type: "hidden",
          name: (_ = (w = e.originalNode) == null ? void 0 : w.name) == null ? void 0 : _.replace("[]", ""),
          value: ""
        }, null, 8, He)) : V("", !0),
        e.showSelected ? (y(), k("div", Pe, [
          (y(!0), k(B, null, Q(h(t), (E) => {
            var $;
            return y(), k("div", {
              key: E,
              onClick: q((W) => c(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ue(z(($ = h(a).find((W) => W.key == E[0])) == null ? void 0 : $.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, We)
            ], 8, Ue);
          }), 128))
        ])) : V("", !0),
        C("input", Z({
          onFocus: f[0] || (f[0] = (E) => I(!0)),
          onClick: f[1] || (f[1] = q((E) => I(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: d,
          value: Oe.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: s.disabled }), null, 16, De),
        M.value ? (y(), ne(oe, {
          key: 2,
          to: M.value
        }, [
          R(C("div", {
            class: fe(["extra-select dropdown", { searching: h(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: N,
            style: ve(h(X))
          }, [
            e.search ? (y(), k("div", Je, [
              R(C("input", {
                ref_key: "searchNode",
                ref: T,
                class: "extra-select-search",
                "onUpdate:modelValue": f[2] || (f[2] = (E) => pe(u) ? u.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: h(r)("Search...")
              }, null, 8, Ke), [
                [Ve, h(u)]
              ])
            ])) : V("", !0),
            h(u).length >= e.minChars ? (y(), k(B, { key: 1 }, [
              o.value ? (y(), k("div", Xe, [
                h(u).length == 0 ? (y(), k("div", {
                  key: 0,
                  onClick: q(A, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", Ge, [
                    C("input", {
                      checked: le.value,
                      type: "checkbox"
                    }, null, 8, Qe),
                    C("b", null, z(h(r)("Select all")), 1)
                  ])
                ])) : V("", !0),
                h(v).length > 0 && h(u).length > 0 ? (y(), k("div", {
                  key: 1,
                  onClick: q(Ee, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", Ye, [
                    C("input", {
                      checked: se.value,
                      type: "checkbox"
                    }, null, 8, Ze),
                    C("b", null, z(h(r)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                C("div", {
                  class: "clear",
                  onClick: q(O, ["stop", "prevent"])
                }, z(h(r)("Clear")), 1)
              ])) : V("", !0),
              h(v).length == 0 ? (y(), k("div", Re, z(h(r)("No matches found")), 1)) : V("", !0)
            ], 64)) : (y(), k("div", et, z(h(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", Z(h(te), { class: "scroller" }), [
              C("div", he(me(h(K))), [
                (y(!0), k(B, null, Q(h(ee), (E) => (y(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: q(($) => c(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", lt, [
                    o.value ? (y(), k("input", {
                      key: 0,
                      checked: h(t).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, at)) : V("", !0),
                    ue(" " + z(E.data.value), 1)
                  ])
                ], 8, tt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [ye, F.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (y(), ne(oe, {
          key: 3,
          to: e.originalNode
        }, [
          (y(!0), k(B, null, Q(h(t), (E) => (y(), k("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, nt))), 128))
        ], 8, ["to"])) : V("", !0)
      ], 64);
    };
  }
}), st = ["disabled"], rt = {
  key: 0,
  class: "no-matches"
}, ut = { key: 1 }, it = ["onClick"], ct = { class: "row-input" }, dt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, ft = /* @__PURE__ */ Object.assign(dt, {
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
  setup(l, { emit: i }) {
    var K, X;
    const e = l, { options: o } = ke(e.originalNode, D(e, "options"), S([])), { t: a } = Se(e.originalNode, D(e, "localization")), t = (K = e.originalNode) == null ? void 0 : K.classList, m = Object.values(((X = e.originalNode) == null ? void 0 : X.style) ?? {});
    we(e.originalNode);
    const r = i, x = (L, b = null) => {
      b === !1 ? n.value = "" : n.value = o.map.get(L).value, d.value = !1;
    }, { filterText: n, filteredOptions: c, filterValues: u } = Ce(o, null, x, e.filterFields, e.hardFilterFields), { searchingFlag: v } = xe(
      o,
      e.url,
      e.searchableUrl,
      n,
      e.minChars,
      u,
      e.fetchMode,
      e.fetchOptions
    ), p = S(null), g = S(null), d = S(!1), N = S(null);
    function T(L) {
      e.disabled || (d.value = L);
    }
    Y(n, () => {
      g.value.querySelector(".scroller").scrollTop = 0;
    });
    const F = function(L) {
      const b = U(L.target);
      b.push(L.target), !b.includes(p.value) && !b.includes(g.value) && (d.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let O = !1;
        N.value = U(p.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (O = !0), O && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), e.originalNode) {
        for (let A of t)
          A != "extrasuggest" && p.value.classList.add(A);
        for (let A of m)
          p.value.style[A] = e.originalNode.style[A];
        n.value = e.originalNode.value;
        let O = U(p.value, "form").pop();
        O instanceof HTMLElement && O.matches("form") && O.addEventListener("reset", () => setTimeout(b)), e.originalNode.addEventListener("change", () => {
          M(!0);
        });
      }
      J(() => {
        e.modelValue != null && (n.value = e.modelValue);
      });
      const L = n.value, b = () => {
        n.value = L;
      };
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), de(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: I } = _e(o, S([]), d, p, g, N, e.maxWidth), M = (L = !1) => {
      var b;
      e.originalNode && (L ? n.value = e.originalNode.value : (e.originalNode.value = n.value, (b = e.originalNode) == null || b.dispatchEvent(new Event("change", { bubbles: !0 })))), r("update:modelValue", n.value);
    };
    Y(() => d.value, (L) => {
      L === !1 && M();
    });
    const { list: P, containerProps: ee, wrapperProps: te } = ge(
      c,
      {
        itemHeight: 32
      }
    );
    return (L, b) => (y(), k(B, null, [
      R(C("input", Z({
        onFocus: b[0] || (b[0] = (O) => T(!0)),
        onClick: b[1] || (b[1] = (O) => T(!0)),
        ref_key: "inputNode",
        ref: p,
        "onUpdate:modelValue": b[2] || (b[2] = (O) => pe(n) ? n.value = O : null),
        class: "extra-select extra-select-input"
      }, L.$attrs, { disabled: l.disabled }), null, 16, st), [
        [ze, h(n)]
      ]),
      N.value ? (y(), ne(oe, {
        key: 0,
        to: N.value
      }, [
        R(C("div", {
          class: fe(["extra-select dropdown", { searching: h(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ve(h(I))
        }, [
          h(n).length >= e.minChars ? (y(), k(B, { key: 0 }, [
            h(c).length == 0 ? (y(), k("div", rt, z(h(a)("No matches found")), 1)) : V("", !0)
          ], 64)) : (y(), k("div", ut, z(h(a)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", Z(h(ee), { class: "scroller" }), [
            C("div", he(me(h(te))), [
              (y(!0), k(B, null, Q(h(P), (O) => (y(), k("button", {
                key: O.index,
                class: "dropdown-row",
                onClick: q((A) => x(O.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", ct, z(O.data.value), 1)
              ], 8, it))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ye, d.value]
        ])
      ], 8, ["to"])) : V("", !0)
    ], 64));
  }
}), mt = ot, yt = ft;
export {
  mt as ExtraSelect,
  yt as ExtraSuggest,
  mt as default
};
