import { ref as b, watchEffect as J, computed as B, nextTick as ne, watchPostEffect as Me, toRef as K, watch as ee, onMounted as ve, onUnmounted as pe, openBlock as m, createElementBlock as w, Fragment as q, unref as v, createCommentVNode as A, renderList as R, withModifiers as I, createTextVNode as de, toDisplayString as V, createElementVNode as C, mergeProps as te, createBlock as se, Teleport as oe, withDirectives as le, normalizeClass as he, normalizeStyle as me, isRef as ye, vModelText as qe, normalizeProps as ge, guardReactiveProps as we, vShow as ke, vModelDynamic as Te } from "vue";
import { useVirtualList as be } from "@vueuse/core";
import { empty as je, offset as Z, getParents as U } from "@txd/utils";
const j = (a) => {
  let i = parseInt(a);
  return i == a ? i : a;
}, Ie = (a, i, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: a.value,
    get: () => a.value,
    push: (l, t, h = null) => {
      parseInt(l) == l && (l = parseInt(l));
      const r = a.map.get(l);
      if (r)
        r.value = t, r.data = h;
      else {
        let S = { value: t, key: l, data: h };
        a.value.push(S), a.map.set(S.key, S);
      }
    },
    addRange: (l) => {
      for (let t of l)
        a.actions.push(t.key, t.value, t.data);
    },
    remove: (l) => {
      a.value.splice(a.value.findIndex((t) => t.key == l), 1);
    },
    clear: () => {
      a.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (t, h) => t.value.localeCompare(h.value)), a.value = a.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      a.value = this.defaultArray;
    },
    filter: function(l) {
    },
    selection: {
      get() {
        return i.value;
      },
      clear() {
        i.value.clear();
      },
      add(l) {
        i.value.set(l, l);
      },
      remove(l) {
        i.value.delete(l);
      }
    }
  };
  window.ExtraSelectOptions[e] = o, a.actions = o;
};
let Be = 1;
const Se = (a) => {
  a && (a.style.display = "none", je(a));
}, xe = (a, i, e, o) => {
  const l = b(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      l.value.clear();
      for (let n of e.value)
        l.value.set(n, n);
    }
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, J(() => {
    i.value && (t.value = i.value.map((n) => ({ ...n, key: j(n.key) })), t.rebuildMap());
  }), a) {
    if (l.value.clear(), a.matches("select")) {
      for (let n of Array.apply(null, a.selectedOptions).map((d) => j(d.value)).filter((d) => d != null))
        l.value.set(n, n);
      t.value = Array.apply(null, a.options).reduce((n, d) => (n.push({ value: d.text, key: j(d.value), data: Object.assign({}, d.dataset) }), n), []);
    }
    if (a.matches("input")) {
      let n = a.value;
      n != null && n.length > 0 && (t.value = [{ value: n, key: n }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(o))
    for (let n of o)
      l.value.set(j(n), j(n));
  else
    o != null && l.value.set(j(o), j(o));
  let h = a == null ? void 0 : a.id;
  (h == null || h === "" || h == 0) && (h = "extraselect_" + (++Be).toString()), Ie(t, l, h);
  const r = [];
  return l.value.forEach((n, d) => {
    r.push([d, n]);
  }), { options: t, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [n, d] of r)
      l.value.set(n, d);
  } };
};
b({});
function Pe(a, i = {}) {
  for (let e in i)
    a = a.replace(`:${e}`, i[e]);
  return a;
}
const He = (a = null) => {
  var o, l;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(l = (o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) != null ? l : {} };
  Object.assign(e, a != null ? a : {}), Ce(b(e), "defaults");
}, Ce = (a, i) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, He());
  const e = {
    defaultArray: a.value,
    list: () => a.value,
    get: (o) => {
      var l;
      return (l = a.value[o]) != null ? l : null;
    },
    push: (o, l) => {
      a.value[o] = l;
    }
  };
  window.ExtraSelectLocalization[i] = e, a.actions = e;
};
let Ue = 0;
const _e = (a, i) => {
  var o;
  return Ce(i, (o = a == null ? void 0 : a.id) != null ? o : "extraselect_" + (++Ue).toString()), { propLocalization: i, t: (l, t = {}) => {
    var r;
    let h = (r = i.value[l]) != null ? r : window.ExtraSelectLocalization.defaults.get(l);
    return h == null && (window.ExtraSelectLocalization.defaults.push(l, l), h = l), Pe(h, t);
  } };
}, fe = async function(a, i = null, e = {}) {
  var t;
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: i, ...e.body })
  };
  return await (await fetch(a, o)).json();
}, Ee = (a, i, e, o, l, t, h = "limited", r = {}) => {
  const S = b(0), n = b(!1), d = B(() => n.value || S.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const p = [];
      J((f) => {
        if (o.value.length >= l) {
          let c = !0;
          switch (h) {
            case "always":
              break;
            default:
            case "limited":
              c = !p.includes(o.value);
              break;
            case "complete":
              c = p.reduce((y, k) => y && !o.value.startsWith(k), !0);
              break;
          }
          if (c) {
            n.value = !0;
            const y = setTimeout(() => {
              p.push(o.value), S.value += 1, r.body = { ...r.body, ...t.value }, fe(i, o.value, r).then((k) => {
                a.actions.addRange(k), a.actions.sort(), S.value -= 1, n.value = !1;
              });
            }, 500);
            f(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      fe(i, null, r).then((p) => {
        a.actions.addRange(p), a.actions.sort();
      });
  return { searchingFlag: d };
}, Le = (a, i, e, o = [], l = []) => {
  const t = b(""), h = b([]), r = b({}), S = { ...o.reduce((d, p) => (d[p] = !1, d), {}), ...l.reduce((d, p) => (d[p] = !0, d), {}) };
  for (let d in S) {
    let p = S[d], f = document.getElementById(d);
    r.value[d] = f == null ? void 0 : f.value, f && f.addEventListener("change", (c) => {
      r.value[d] = c.target.value, p && ne(() => {
        if (i != null)
          for (let y of Array.from(i.value.keys()))
            h.value.find((k) => k.key == y) || e(y, !1);
        else
          h.value.find((y) => y.key == t.value) || e(t.value, !1);
      });
    });
  }
  const n = function(d, p) {
    let f = d.value;
    return Object.keys(r.value).length > 0 && (f = f.filter((c) => {
      var y, k;
      for (let g in r.value)
        if ((S[g] ? !0 : ((y = r.value[g]) != null ? y : "").length > 0) && ((k = c.data) == null ? void 0 : k.hasOwnProperty(g)) && c.data[g] != r.value[g])
          return !1;
      return !0;
    })), p.length > 0 && (f = f.filter((c) => c.value.toLowerCase().includes(p.toLowerCase()))), f;
  };
  return J(() => {
    h.value = n(a, t.value);
  }), { filterText: t, filteredOptions: h, filterValues: r };
}, Oe = (a, i, e, o, l, t, h) => {
  const r = getComputedStyle(document.querySelector("body")).font, S = function(p) {
    const c = document.createElement("canvas").getContext("2d");
    return c.font = r, c.measureText(p).width;
  }, n = B(() => {
    var f, c;
    const p = (f = Z(o.value).width) != null ? f : 100;
    if (h === "inherit")
      return p;
    if (h == null || h === "dynamic") {
      const y = (c = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? c : 16;
      return Math.max(p, Math.max(...a.value.map((k) => S(k.value))) + 20 + y * 3);
    }
    return h;
  }), d = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Me(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var p = Z(o.value), f = Z(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var f = Z(t.value);
    let c = -f.left + p.left;
    const y = window.document.documentElement.clientWidth;
    c + n.value > y && (c = y - n.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (-f.top + p.top + p.height).toString() + "px",
      left: c.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: S };
}, We = ["name"], De = {
  key: 1,
  class: "extra-select selection"
}, Ke = ["onClick"], Je = ["innerHTML"], Xe = ["value", "disabled"], Ge = {
  key: 0,
  class: "input-searching"
}, Qe = ["placeholder"], Ye = {
  key: 0,
  class: "allselect-clear"
}, Ze = { class: "row-input" }, Re = ["checked"], et = { class: "row-input" }, tt = ["checked"], lt = {
  key: 1,
  class: "no-matches"
}, at = { key: 2 }, nt = ["onClick"], st = { class: "row-input" }, ot = ["checked"], rt = ["value"], ut = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, it = Object.assign(ut, {
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
    dropdownContainer: { type: String, default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: i }) {
    var re, ue, ie;
    const e = a, o = B(() => {
      var s, u;
      return (u = (s = e.originalNode) == null ? void 0 : s.multiple) != null ? u : e.multiple;
    }), { options: l, selectedOptions: t, onReset: h } = xe(e.originalNode, K(e, "options"), K(e, "modelValue"), e.initialValue), { t: r } = _e(e.originalNode, K(e, "localization")), S = (re = e.originalNode) == null ? void 0 : re.classList, n = Object.values((ie = (ue = e.originalNode) == null ? void 0 : ue.style) != null ? ie : {});
    Se(e.originalNode);
    const d = i, p = (s, u = null) => {
      if (o.value) {
        let O = u;
        switch (O == null && (O = !t.value.has(s)), O) {
          case !0:
            t.value.set(s, s);
            break;
          case !1:
            t.value.delete(s);
            break;
        }
      } else
        t.value.clear(), u !== !1 && t.value.set(s, s), $.value = !1;
      H(Array.from(t.value.keys()));
    }, { filterText: f, filteredOptions: c, filterValues: y } = Le(l, t, p, e.filterFields, e.hardFilterFields), { searchingFlag: k } = Ee(
      l,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), g = b(null), z = b(null), T = b(null), $ = b(!1);
    function W(s) {
      e.disabled || ($.value = s);
    }
    ee(f, () => {
      z.value.querySelector(".scroller").scrollTop = 0;
    });
    const M = b(null), P = function(s) {
      const u = U(s.target);
      u.push(s.target), !u.includes(g.value) && !u.includes(z.value) ? $.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    ve(() => {
      if (e.dropdownContainer) {
        let s = !1;
        M.value = U(g.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let u of S)
          u != "extraselect" && g.value.classList.add(u);
        for (let u of n)
          g.value.style[u] = e.originalNode.style[u];
        let s = U(g.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(h)), e.originalNode.toggleValue = p, e.originalNode.setValues = (u) => {
          t.value.clear();
          for (let O of u)
            p(O);
        };
      }
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), pe(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { dropdownStyle: ae, getTextWidth: X } = Oe(l, t, $, g, z, M, e.maxWidth), H = (s) => {
      ne(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", s);
    }, G = (s) => {
      L(s, !1), f.value = "";
    }, L = (s, u = null) => {
      u == null && (u = !_.value), u ? (t.value.clear(), l.value.forEach((O) => t.value.set(O.key, O.key))) : t.value.clear(), H(Array.from(t.value.keys()));
    }, x = () => {
      N.value ? c.value.forEach((s) => {
        t.value.has(s.key) && t.value.delete(s.key);
      }) : c.value.forEach((s) => {
        t.value.has(s.key) || t.value.set(s.key, s.key);
      }), H(Array.from(t.value.keys()));
    };
    ee($, (s, u) => {
      s != u && (s ? e.search && ne(() => {
        T.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const _ = B(() => t.value.size == l.value.length), N = B(() => c.value.reduce((s, u) => s && t.value.has(u.key), !0)), Ne = B(() => t.value.size == 0), Fe = B(() => {
      var s, u, O, D, E;
      if (l.value.length < 0)
        return "";
      if (o.value) {
        if (Ne.value)
          return r("No selection");
        if (!e.searchableUrl && _.value)
          return r("All selected");
        const F = g.value ? getComputedStyle(g.value) : null, Q = ((s = g.value) == null ? void 0 : s.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let Y = r(":n selected - ", { n: t.value.size }), ce = !0;
        for (let $e of t.value)
          if (ce ? ce = !1 : Y += ", ", Y += (O = (u = l.map.get($e[0])) == null ? void 0 : u.value) != null ? O : k.value ? r("Loading...") : r("Value not found"), Q < X(Y))
            return t.value.size + r(" selected");
        return Y;
      } else
        for (let F of t.value)
          return (E = (D = l.map.get(F[0])) == null ? void 0 : D.value) != null ? E : k.value ? r("Loading...") : r("Value not found");
      return r("No selection");
    }), { list: Ae, containerProps: Ve, wrapperProps: ze } = be(
      c,
      {
        itemHeight: 32
      }
    );
    return (s, u) => {
      var O, D;
      return m(), w(q, null, [
        o.value && v(t).size == 0 ? (m(), w("input", {
          key: 0,
          type: "hidden",
          name: (D = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : D.replace("[]", ""),
          value: ""
        }, null, 8, We)) : A("", !0),
        e.showSelected ? (m(), w("div", De, [
          (m(!0), w(q, null, R(v(t), (E) => {
            var F;
            return m(), w("div", {
              key: E,
              onClick: I((Q) => p(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              de(V((F = v(l).find((Q) => Q.key == E[0])) == null ? void 0 : F.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Je)
            ], 8, Ke);
          }), 128))
        ])) : A("", !0),
        C("input", te({
          onFocus: u[0] || (u[0] = (E) => W(!0)),
          onClick: u[1] || (u[1] = I((E) => W(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: g,
          value: Fe.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: a.disabled }), null, 16, Xe),
        M.value ? (m(), se(oe, {
          key: 2,
          to: M.value
        }, [
          le(C("div", {
            class: he(["extra-select dropdown", { searching: v(k) > 0 }]),
            ref_key: "dropdownNode",
            ref: z,
            style: me(v(ae))
          }, [
            e.search ? (m(), w("div", Ge, [
              le(C("input", {
                ref_key: "searchNode",
                ref: T,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (E) => ye(f) ? f.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: v(r)("Search...")
              }, null, 8, Qe), [
                [qe, v(f)]
              ])
            ])) : A("", !0),
            v(f).length >= e.minChars ? (m(), w(q, { key: 1 }, [
              o.value ? (m(), w("div", Ye, [
                v(f).length == 0 ? (m(), w("div", {
                  key: 0,
                  onClick: I(L, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", Ze, [
                    C("input", {
                      checked: _.value,
                      type: "checkbox"
                    }, null, 8, Re),
                    C("b", null, V(v(r)("Select all")), 1)
                  ])
                ])) : A("", !0),
                v(c).length > 0 && v(f).length > 0 ? (m(), w("div", {
                  key: 1,
                  onClick: I(x, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", et, [
                    C("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, tt),
                    C("b", null, V(v(r)("Select Filtered")), 1)
                  ])
                ])) : A("", !0),
                C("div", {
                  class: "clear",
                  onClick: I(G, ["stop", "prevent"])
                }, V(v(r)("Clear")), 1)
              ])) : A("", !0),
              v(c).length == 0 ? (m(), w("div", lt, V(v(r)("No matches found")), 1)) : A("", !0)
            ], 64)) : (m(), w("div", at, V(v(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", te(v(Ve), { class: "scroller" }), [
              C("div", ge(we(v(ze))), [
                (m(!0), w(q, null, R(v(Ae), (E) => (m(), w("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: I((F) => p(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", st, [
                    o.value ? (m(), w("input", {
                      key: 0,
                      checked: v(t).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, ot)) : A("", !0),
                    de(" " + V(E.data.value), 1)
                  ])
                ], 8, nt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [ke, $.value]
          ])
        ], 8, ["to"])) : A("", !0),
        e.originalNode ? (m(), se(oe, {
          key: 3,
          to: e.originalNode
        }, [
          (m(!0), w(q, null, R(v(t), (E) => (m(), w("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, rt))), 128))
        ], 8, ["to"])) : A("", !0)
      ], 64);
    };
  }
}), ct = ["disabled"], dt = {
  key: 0,
  class: "no-matches"
}, ft = { key: 1 }, vt = ["onClick"], pt = { class: "row-input" }, ht = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, mt = Object.assign(ht, {
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
  setup(a, { emit: i }) {
    var X, H, G;
    const e = a, { options: o } = xe(e.originalNode, K(e, "options"), b([])), { t: l } = _e(e.originalNode, K(e, "localization")), t = (X = e.originalNode) == null ? void 0 : X.classList, h = Object.values((G = (H = e.originalNode) == null ? void 0 : H.style) != null ? G : {});
    Se(e.originalNode);
    const r = i, S = (L, x = null) => {
      x === !1 ? n.value = "" : n.value = o.map.get(L).value, k.value = !1;
    }, { filterText: n, filteredOptions: d, filterValues: p } = Le(o, null, S, e.filterFields, e.hardFilterFields), { searchingFlag: f } = Ee(
      o,
      e.url,
      e.searchableUrl,
      n,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), c = b(null), y = b(null), k = b(!1), g = b(null);
    function z(L) {
      e.disabled || (k.value = L);
    }
    ee(n, () => {
      y.value.querySelector(".scroller").scrollTop = 0;
    });
    const T = function(L) {
      const x = U(L.target);
      x.push(L.target), !x.includes(c.value) && !x.includes(y.value) && (k.value = !1);
    };
    ve(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        g.value = U(c.value).find((N) => !!(N instanceof Element && (N.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (g.value == null && (g.value = document.querySelector("body")), e.originalNode) {
        for (let N of t)
          N != "extrasuggest" && c.value.classList.add(N);
        for (let N of h)
          c.value.style[N] = e.originalNode.style[N];
        n.value = e.originalNode.value;
        let _ = U(c.value, "form").pop();
        _ instanceof HTMLElement && _.matches("form") && _.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          W(!0);
        });
      }
      J(() => {
        e.modelValue != null && (n.value = e.modelValue);
      });
      const L = n.value, x = () => {
        n.value = L;
      };
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), pe(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: $ } = Oe(o, b([]), k, c, y, g, e.maxWidth), W = (L = !1) => {
      var x;
      e.originalNode && (L ? n.value = e.originalNode.value : (e.originalNode.value = n.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), r("update:modelValue", n.value);
    };
    ee(() => k.value, (L) => {
      L === !1 && W();
    });
    const { list: M, containerProps: P, wrapperProps: ae } = be(
      d,
      {
        itemHeight: 32
      }
    );
    return (L, x) => (m(), w(q, null, [
      le(C("input", te({
        onFocus: x[0] || (x[0] = (_) => z(!0)),
        onClick: x[1] || (x[1] = (_) => z(!0)),
        ref_key: "inputNode",
        ref: c,
        "onUpdate:modelValue": x[2] || (x[2] = (_) => ye(n) ? n.value = _ : null),
        class: "extra-select extra-select-input"
      }, L.$attrs, { disabled: a.disabled }), null, 16, ct), [
        [Te, v(n)]
      ]),
      g.value ? (m(), se(oe, {
        key: 0,
        to: g.value
      }, [
        le(C("div", {
          class: he(["extra-select dropdown", { searching: v(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: me(v($))
        }, [
          v(n).length >= e.minChars ? (m(), w(q, { key: 0 }, [
            v(d).length == 0 ? (m(), w("div", dt, V(v(l)("No matches found")), 1)) : A("", !0)
          ], 64)) : (m(), w("div", ft, V(v(l)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", te(v(P), { class: "scroller" }), [
            C("div", ge(we(v(ae))), [
              (m(!0), w(q, null, R(v(M), (_) => (m(), w("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: I((N) => S(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", pt, V(_.data.value), 1)
              ], 8, vt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ke, k.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), kt = it, bt = mt;
export {
  kt as ExtraSelect,
  bt as ExtraSuggest,
  kt as default
};
