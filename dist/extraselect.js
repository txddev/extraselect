import { ref as b, watchEffect as W, computed as T, nextTick as ee, watchPostEffect as $e, toRef as U, onMounted as ie, onUnmounted as ce, watch as de, openBlock as w, createElementBlock as k, Fragment as M, unref as v, createCommentVNode as F, renderList as Q, createTextVNode as re, toDisplayString as A, createElementVNode as C, mergeProps as Y, createBlock as te, Teleport as le, withDirectives as Z, normalizeClass as fe, normalizeStyle as ve, isRef as pe, vModelText as ze, normalizeProps as he, guardReactiveProps as ye, withModifiers as me, vShow as ge, vModelDynamic as Me } from "vue";
import { useVirtualList as we } from "@vueuse/core";
import { empty as qe, offset as G, getParents as P } from "@txd/utils";
const q = (l) => {
  let f = parseInt(l);
  return f == l ? f : l;
}, Te = (l, f) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: l.value,
    get: () => l.value,
    push: (a, n, t = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const m = l.map.get(a);
      if (m)
        m.value = n, m.data = t;
      else {
        let r = { value: n, key: a, data: t };
        l.value.push(r), l.map.set(r.key, r);
      }
    },
    addRange: (a) => {
      for (let n of a)
        l.actions.push(n.key, n.value, n.data);
    },
    remove: (a) => {
      l.value.splice(l.value.findIndex((n) => n.key == a), 1);
    },
    clear: () => {
      l.value = [];
    },
    sort: (a = null) => {
      a == null && (a = (n, t) => n.value.localeCompare(t.value)), l.value = l.value.sort(a);
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
  window.ExtraSelectOptions[f] = e, l.actions = e;
};
let je = 1;
const ke = (l) => {
  l && (l.style.display = "none", qe(l));
}, be = (l, f, e, a) => {
  var p;
  const n = b(/* @__PURE__ */ new Map());
  W(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let s of e.value)
        n.value.set(s, s);
    }
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let s of t.value)
        t.map.set(s.key, s);
  }, W(() => {
    f.value && (t.value = f.value.map((s) => ({ ...s, key: q(s.key) })), t.rebuildMap());
  }), l) {
    if (n.value.clear(), l.matches("select")) {
      for (let s of Array.apply(null, l.selectedOptions).map((c) => q(c.value)).filter((c) => c))
        n.value.set(s, s);
      t.value = Array.apply(null, l.options).reduce((s, c) => (s.push({ value: c.text, key: q(c.value), data: Object.assign({}, c.dataset) }), s), []);
    }
    if (l.matches("input")) {
      let s = l.value;
      s != null && s.length > 0 && (t.value = [{ value: s, key: s }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(a))
    for (let s of a)
      n.value.set(q(s), q(s));
  else
    a != null && n.value.set(q(a), q(a));
  Te(t, (p = l == null ? void 0 : l.id) != null ? p : "extraselect_" + (++je).toString());
  const m = [];
  return n.value.forEach((s, c) => {
    m.push([c, s]);
  }), { options: t, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [s, c] of m)
      n.value.set(s, c);
  } };
};
b({});
function Ie(l, f = {}) {
  for (let e in f)
    l = l.replace(`:${e}`, f[e]);
  return l;
}
const Pe = (l = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, l != null ? l : {}), Se(b(e), "defaults");
}, Se = (l, f) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Pe());
  const e = {
    defaultArray: l.value,
    list: () => l.value,
    get: (a) => {
      var n;
      return (n = l.value[a]) != null ? n : null;
    },
    push: (a, n) => {
      l.value[a] = n;
    }
  };
  window.ExtraSelectLocalization[f] = e, l.actions = e;
};
let Be = 0;
const xe = (l, f) => {
  var a;
  return Se(f, (a = l == null ? void 0 : l.id) != null ? a : "extraselect_" + (++Be).toString()), { propLocalization: f, t: (n, t = {}) => {
    var r;
    let m = (r = f.value[n]) != null ? r : window.ExtraSelectLocalization.defaults.get(n);
    return m == null && (window.ExtraSelectLocalization.defaults.push(n, n), m = n), Ie(m, t);
  } };
}, ue = async function(l, f = null, e = {}) {
  var t;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: f, ...e.body })
  };
  return await (await fetch(l, a)).json();
}, Ce = (l, f, e, a, n, t, m = "limited", r = {}) => {
  const p = b(0), s = b(!1), c = T(() => s.value || p.value > 0);
  if (f != null && f.length > 0)
    if (e) {
      const d = [];
      W((i) => {
        if (a.value.length >= n) {
          let g = !0;
          switch (m) {
            case "always":
              break;
            default:
            case "limited":
              g = !d.includes(a.value);
              break;
            case "complete":
              g = d.reduce((y, h) => y && !a.value.startsWith(h), !0);
              break;
          }
          if (g) {
            s.value = !0;
            const y = setTimeout(() => {
              d.push(a.value), p.value += 1, r.body = { ...r.body, ...t.value }, ue(f, a.value, r).then((h) => {
                l.actions.addRange(h), l.actions.sort(), p.value -= 1, s.value = !1;
              });
            }, 500);
            i(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      ue(f, null, r).then((d) => {
        l.actions.addRange(d), l.actions.sort();
      });
  return { searchingFlag: c };
}, _e = (l, f, e, a = [], n = []) => {
  const t = b(""), m = b([]), r = b({}), p = { ...a.reduce((c, d) => (c[d] = !1, c), {}), ...n.reduce((c, d) => (c[d] = !0, c), {}) };
  for (let c in p) {
    let d = p[c], i = document.getElementById(c);
    r.value[c] = i == null ? void 0 : i.value, i && i.addEventListener("change", (g) => {
      r.value[c] = g.target.value, d && ee(() => {
        if (f != null)
          for (let y of Array.from(f.value.keys()))
            m.value.find((h) => h.key == y) || e(y, !1);
        else
          m.value.find((y) => y.key == t.value) || e(t.value, !1);
      });
    });
  }
  const s = function(c, d) {
    let i = c.value;
    return Object.keys(r.value).length > 0 && (i = i.filter((g) => {
      var y, h;
      for (let L in r.value)
        if ((p[L] ? !0 : ((y = r.value[L]) != null ? y : "").length > 0) && ((h = g.data) == null ? void 0 : h.hasOwnProperty(L)) && g.data[L] != r.value[L])
          return !1;
      return !0;
    })), d.length > 0 && (i = i.filter((g) => g.value.toLowerCase().includes(d.toLowerCase()))), i;
  };
  return W(() => {
    m.value = s(l, t.value);
  }), { filterText: t, filteredOptions: m, filterValues: r };
}, Ee = (l, f, e, a, n, t, m) => {
  const r = getComputedStyle(document.querySelector("body")).font, p = function(d) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = r, g.measureText(d).width;
  }, s = T(() => {
    var i, g;
    const d = (i = G(a.value).width) != null ? i : 100;
    if (m === "inherit")
      return d;
    if (m == null || m === "dynamic") {
      const y = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(d, Math.max(...l.value.map((h) => p(h.value))) + 20 + y * 3);
    }
    return m;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return $e(() => {
    e.value < 0 && console.log("is open"), f.value.size < 0 && console.log("empty selection");
    var d = G(a.value), i = G(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var i = G(t.value);
    let g = -i.left + d.left;
    const y = window.document.documentElement.clientWidth;
    g + s.value > y && (g = y - s.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: s.value.toString() + "px",
      top: (-i.top + d.top + d.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: p };
}, He = ["name"], Ue = {
  key: 1,
  class: "extra-select selection"
}, We = ["onClick"], De = ["innerHTML"], Je = ["value"], Ke = {
  key: 0,
  class: "input-searching"
}, Xe = ["placeholder"], Ge = {
  key: 0,
  class: "allselect-clear"
}, Qe = { class: "row-input" }, Ye = ["checked"], Ze = { class: "row-input" }, Re = ["checked"], et = {
  key: 1,
  class: "no-matches"
}, tt = { key: 2 }, lt = ["onClick"], at = { class: "row-input" }, nt = ["checked"], st = ["value"], ot = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, rt = Object.assign(ot, {
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
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
  setup(l, { emit: f }) {
    var ae, ne, se;
    const e = l, a = T(() => {
      var o, u;
      return (u = (o = e.originalNode) == null ? void 0 : o.multiple) != null ? u : e.multiple;
    }), { options: n, selectedOptions: t, onReset: m } = be(e.originalNode, U(e, "options"), U(e, "modelValue"), e.initialValue), { t: r } = xe(e.originalNode, U(e, "localization")), p = (ae = e.originalNode) == null ? void 0 : ae.classList, s = Object.values((se = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? se : {});
    ke(e.originalNode);
    const c = (o, u = null) => {
      if (a.value) {
        let O = u;
        switch (O == null && (O = !t.value.has(o)), O) {
          case !0:
            t.value.set(o, o);
            break;
          case !1:
            t.value.delete(o);
            break;
        }
      } else
        t.value.clear(), u !== !1 && t.value.set(o, o), V.value = !1;
      I(Array.from(t.value.keys()));
    }, { filterText: d, filteredOptions: i, filterValues: g } = _e(n, t, c, e.filterFields, e.hardFilterFields), { searchingFlag: y } = Ce(
      n,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), h = b(null), L = b(null), B = b(null), V = b(!1), z = b(null), j = function(o) {
      const u = P(o.target);
      u.push(o.target), !u.includes(h.value) && !u.includes(L.value) && (V.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let o = !1;
        z.value = P(h.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (o = !0), o && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if (z.value == null && (z.value = document.querySelector("body")), e.originalNode) {
        for (let u of p)
          u != "extraselect" && h.value.classList.add(u);
        for (let u of s)
          h.value.style[u] = e.originalNode.style[u];
        s.includes("background-color") || (h.value.style.backgroundColor = "white");
        let o = P(h.value, "form").pop();
        o instanceof HTMLElement && o.matches("form") && o.addEventListener("reset", () => setTimeout(m));
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ce(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: R, getTextWidth: D } = Ee(n, t, V, h, L, z, e.maxWidth), I = (o) => {
      ee(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), f("update:modelValue", o);
    }, J = (o) => {
      x(o, !1), d.value = "";
    }, x = (o, u = null) => {
      u == null && (u = !E.value), u ? (t.value.clear(), n.value.forEach((O) => t.value.set(O.key, O.key))) : t.value.clear(), I(Array.from(t.value.keys()));
    }, S = () => {
      $.value ? i.value.forEach((o) => {
        t.value.has(o.key) && t.value.delete(o.key);
      }) : i.value.forEach((o) => {
        t.value.has(o.key) || t.value.set(o.key, o.key);
      }), I(Array.from(t.value.keys()));
    };
    de(V, (o, u) => {
      o != u && (o ? e.search && ee(() => {
        B.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const E = T(() => t.value.size == n.value.length), $ = T(() => i.value.reduce((o, u) => o && t.value.has(u.key), !0)), Le = T(() => t.value.size == 0), Oe = T(() => {
      var o, u, O, H, _;
      if (n.value.length < 0)
        return "";
      if (a.value) {
        if (Le.value)
          return r("No selection");
        if (!e.searchableUrl && E.value)
          return $$t("All selected");
        const N = h.value ? getComputedStyle(h.value) : null, K = ((o = h.value) == null ? void 0 : o.clientWidth) - parseInt(N == null ? void 0 : N.paddingLeft) - parseInt(N == null ? void 0 : N.paddingRight);
        let X = r(":n selected - ", { n: t.value.size }), oe = !0;
        for (let Ve of t.value)
          if (oe ? oe = !1 : X += ", ", X += (O = (u = n.map.get(Ve[0])) == null ? void 0 : u.value) != null ? O : y.value ? r("Loading...") : r("Value not found"), K < D(X))
            return t.value.size + r(" selected");
        return X;
      } else
        for (let N of t.value)
          return (_ = (H = n.map.get(N[0])) == null ? void 0 : H.value) != null ? _ : y.value ? r("Loading...") : r("Value not found");
      return r("No selection");
    }), { list: Ne, containerProps: Fe, wrapperProps: Ae } = we(
      i,
      {
        itemHeight: 32
      }
    );
    return (o, u) => {
      var O, H;
      return w(), k(M, null, [
        a.value && v(t).size == 0 ? (w(), k("input", {
          key: 0,
          type: "hidden",
          name: (H = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : H.replace("[]", ""),
          value: ""
        }, null, 8, He)) : F("", !0),
        e.showSelected ? (w(), k("div", Ue, [
          (w(!0), k(M, null, Q(v(t), (_) => {
            var N;
            return w(), k("div", {
              key: _,
              onClick: (K) => c(_[0]),
              class: "selection-badge"
            }, [
              re(A((N = v(n).find((K) => K.key == _[0])) == null ? void 0 : N.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, De)
            ], 8, We);
          }), 128))
        ])) : F("", !0),
        C("input", Y({
          onFocus: u[0] || (u[0] = (_) => V.value = !0),
          onClick: u[1] || (u[1] = (_) => V.value = !0),
          ref_key: "inputNode",
          ref: h,
          value: Oe.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, o.$attrs), null, 16, Je),
        z.value ? (w(), te(le, {
          key: 2,
          to: z.value
        }, [
          Z(C("div", {
            class: fe(["extra-select dropdown", { searching: v(y) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: ve(v(R))
          }, [
            e.search ? (w(), k("div", Ke, [
              Z(C("input", {
                ref_key: "searchNode",
                ref: B,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (_) => pe(d) ? d.value = _ : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: v(r)("Search...")
              }, null, 8, Xe), [
                [ze, v(d)]
              ])
            ])) : F("", !0),
            v(d).length >= e.minChars ? (w(), k(M, { key: 1 }, [
              a.value ? (w(), k("div", Ge, [
                v(d).length == 0 ? (w(), k("div", {
                  key: 0,
                  onClick: x,
                  class: "all-select"
                }, [
                  C("div", Qe, [
                    C("input", {
                      checked: E.value,
                      type: "checkbox"
                    }, null, 8, Ye),
                    C("b", null, A(v(r)("Select all")), 1)
                  ])
                ])) : F("", !0),
                v(i).length > 0 && v(d).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: S,
                  class: "all-select"
                }, [
                  C("div", Ze, [
                    C("input", {
                      checked: $.value,
                      type: "checkbox"
                    }, null, 8, Re),
                    C("b", null, A(v(r)("Select Filtered")), 1)
                  ])
                ])) : F("", !0),
                C("div", {
                  class: "clear",
                  onClick: J
                }, A(v(r)("Clear")), 1)
              ])) : F("", !0),
              v(i).length == 0 ? (w(), k("div", et, A(v(r)("No matches found")), 1)) : F("", !0)
            ], 64)) : (w(), k("div", tt, A(v(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", Y(v(Fe), { class: "scroller" }), [
              C("div", he(ye(v(Ae))), [
                (w(!0), k(M, null, Q(v(Ne), (_) => (w(), k("button", {
                  key: _.index,
                  class: "dropdown-row",
                  onClick: me((N) => c(_.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", at, [
                    a.value ? (w(), k("input", {
                      key: 0,
                      checked: v(t).has(_.data.key),
                      type: "checkbox"
                    }, null, 8, nt)) : F("", !0),
                    re(" " + A(_.data.value), 1)
                  ])
                ], 8, lt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [ge, V.value]
          ])
        ], 8, ["to"])) : F("", !0),
        e.originalNode ? (w(), te(le, {
          key: 3,
          to: e.originalNode
        }, [
          (w(!0), k(M, null, Q(v(t), (_) => (w(), k("option", {
            key: _[0],
            selected: "selected",
            value: _[0]
          }, null, 8, st))), 128))
        ], 8, ["to"])) : F("", !0)
      ], 64);
    };
  }
}), ut = {
  key: 0,
  class: "no-matches"
}, it = { key: 1 }, ct = ["onClick"], dt = { class: "row-input" }, ft = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, vt = Object.assign(ft, {
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: f }) {
    var D, I, J;
    const e = l, { options: a } = be(e.originalNode, U(e, "options"), b([])), { t: n } = xe(e.originalNode, U(e, "localization")), t = (D = e.originalNode) == null ? void 0 : D.classList, m = Object.values((J = (I = e.originalNode) == null ? void 0 : I.style) != null ? J : {});
    ke(e.originalNode);
    const r = (x, S = null) => {
      S === !1 ? p.value = "" : p.value = a.map.get(x).value, y.value = !1;
    }, { filterText: p, filteredOptions: s, filterValues: c } = _e(a, null, r, e.filterFields, e.hardFilterFields), { searchingFlag: d } = Ce(
      a,
      e.url,
      e.searchableUrl,
      p,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), i = b(null), g = b(null), y = b(!1), h = b(null), L = function(x) {
      const S = P(x.target);
      S.push(x.target), !S.includes(i.value) && !S.includes(g.value) && (y.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let x = !1;
        h.value = P(i.value).find((S) => !!(S instanceof Element && (S.matches(e.dropdownContainer) && (x = !0), x && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(S).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let $ of t)
          $ != "extrasuggest" && i.value.classList.add($);
        for (let $ of m)
          i.value.style[$] = e.originalNode.style[$];
        m.includes("background-color") || (i.value.style.backgroundColor = "white"), p.value = e.originalNode.value, W(() => {
          e.modelValue != null && (p.value = e.modelValue);
        });
        const x = p.value, S = () => {
          p.value = x;
        };
        let E = P(i.value, "form").pop();
        E instanceof HTMLElement && E.matches("form") && E.addEventListener("reset", () => setTimeout(S));
      }
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ce(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: B } = Ee(a, b([]), y, i, g, h, e.maxWidth), V = () => {
      var x;
      e.originalNode && (e.originalNode.value = p.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 }))), f("update:modelValue", p.value);
    };
    de(() => y.value, (x) => {
      x === !1 && V();
    });
    const { list: z, containerProps: j, wrapperProps: R } = we(
      s,
      {
        itemHeight: 32
      }
    );
    return (x, S) => (w(), k(M, null, [
      Z(C("input", Y({
        onFocus: S[0] || (S[0] = (E) => y.value = !0),
        onClick: S[1] || (S[1] = (E) => y.value = !0),
        ref_key: "inputNode",
        ref: i,
        "onUpdate:modelValue": S[2] || (S[2] = (E) => pe(p) ? p.value = E : null),
        class: "extra-select extra-select-input"
      }, x.$attrs), null, 16), [
        [Me, v(p)]
      ]),
      h.value ? (w(), te(le, {
        key: 0,
        to: h.value
      }, [
        Z(C("div", {
          class: fe(["extra-select dropdown", { searching: v(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ve(v(B))
        }, [
          v(p).length >= e.minChars ? (w(), k(M, { key: 0 }, [
            v(s).length == 0 ? (w(), k("div", ut, A(v(n)("No matches found")), 1)) : F("", !0)
          ], 64)) : (w(), k("div", it, A(v(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", Y(v(j), { class: "scroller" }), [
            C("div", he(ye(v(R))), [
              (w(!0), k(M, null, Q(v(z), (E) => (w(), k("button", {
                key: E.index,
                class: "dropdown-row",
                onClick: me(($) => r(E.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", dt, A(E.data.value), 1)
              ], 8, ct))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ge, y.value]
        ])
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), mt = rt, gt = vt;
export {
  mt as ExtraSelect,
  gt as ExtraSuggest,
  mt as default
};
