import { ref as b, watchEffect as K, computed as B, nextTick as ne, watchPostEffect as Me, toRef as J, watch as ee, onMounted as ve, onUnmounted as pe, openBlock as m, createElementBlock as w, Fragment as q, unref as p, createCommentVNode as A, renderList as R, withModifiers as I, createTextVNode as de, toDisplayString as V, createElementVNode as C, mergeProps as te, createBlock as se, Teleport as oe, withDirectives as le, normalizeClass as he, normalizeStyle as ye, isRef as me, vModelText as qe, normalizeProps as ge, guardReactiveProps as we, vShow as ke, vModelDynamic as Te } from "vue";
import { useVirtualList as be } from "@vueuse/core";
import { empty as je, offset as Z, getParents as U } from "@txd/utils";
const j = (l) => {
  let i = parseInt(l);
  return i == l ? i : l;
}, Ie = (l) => {
  try {
    var i = JSON.parse(l);
    if (i && typeof i == "object")
      return i;
  } catch {
  }
  return l;
}, Be = (l, i, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const r = {
    defaultArray: l.value,
    get: () => l.value,
    push: (a, t, h = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const o = l.map.get(a);
      if (o)
        o.value = t, o.data = h;
      else {
        let S = { value: t, key: a, data: h };
        l.value.push(S), l.map.set(S.key, S);
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
  window.ExtraSelectOptions[e] = r, l.actions = r;
};
let Pe = 1;
const Se = (l) => {
  l && (l.style.display = "none", je(l));
}, xe = (l, i, e, r) => {
  const a = b(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      a.value.clear();
      for (let n of e.value)
        a.value.set(n, n);
    }
  });
  const t = b([]);
  if (t.map = /* @__PURE__ */ new Map(), t.rebuildMap = () => {
    if (t.map.clear(), t.value)
      for (let n of t.value)
        t.map.set(n.key, n);
  }, K(() => {
    i.value && (t.value = i.value.map((n) => ({ ...n, key: j(n.key) })), t.rebuildMap());
  }), l) {
    if (a.value.clear(), l.matches("select")) {
      for (let n of Array.apply(null, l.selectedOptions).map((f) => j(f.value)).filter((f) => f != null))
        a.value.set(n, n);
      t.value = Array.apply(null, l.options).reduce((n, f) => (n.push({
        value: f.text,
        key: j(f.value),
        data: Object.keys(f.dataset).reduce((v, c) => (v[c] = Ie(f.dataset[c]), v), {})
      }), n), []);
    }
    if (l.matches("input")) {
      let n = l.value;
      n != null && n.length > 0 && (t.value = [{ value: n, key: n }]);
    }
    t.rebuildMap();
  }
  if (Array.isArray(r))
    for (let n of r)
      a.value.set(j(n), j(n));
  else
    r != null && a.value.set(j(r), j(r));
  let h = l == null ? void 0 : l.id;
  (h == null || h === "" || h == 0) && (h = "extraselect_" + (++Pe).toString()), Be(t, a, h);
  const o = [];
  return a.value.forEach((n, f) => {
    o.push([f, n]);
  }), { options: t, selectedOptions: a, onReset: () => {
    a.value.clear();
    for (let [n, f] of o)
      a.value.set(n, f);
  } };
};
b({});
function He(l, i = {}) {
  for (let e in i)
    l = l.replace(`:${e}`, i[e]);
  return l;
}
const Ue = (l = null) => {
  var r, a;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(a = (r = window.ExtraSelectLocalization.defaults) == null ? void 0 : r.defaultArray) != null ? a : {} };
  Object.assign(e, l != null ? l : {}), Ce(b(e), "defaults");
}, Ce = (l, i) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Ue());
  const e = {
    defaultArray: l.value,
    list: () => l.value,
    get: (r) => {
      var a;
      return (a = l.value[r]) != null ? a : null;
    },
    push: (r, a) => {
      l.value[r] = a;
    }
  };
  window.ExtraSelectLocalization[i] = e, l.actions = e;
};
let We = 0;
const _e = (l, i) => {
  var r;
  return Ce(i, (r = l == null ? void 0 : l.id) != null ? r : "extraselect_" + (++We).toString()), { propLocalization: i, t: (a, t = {}) => {
    var o;
    let h = (o = i.value[a]) != null ? o : window.ExtraSelectLocalization.defaults.get(a);
    return h == null && (window.ExtraSelectLocalization.defaults.push(a, a), h = a), He(h, t);
  } };
}, fe = async function(l, i = null, e = {}) {
  var t;
  const r = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(t = e.headers) != null ? t : {} },
    body: JSON.stringify({ search: i, ...e.body })
  };
  return await (await fetch(l, r)).json();
}, Ee = (l, i, e, r, a, t, h = "limited", o = {}) => {
  const S = b(0), n = b(!1), f = B(() => n.value || S.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const v = [];
      K((c) => {
        if (r.value.length >= a) {
          let d = !0;
          switch (h) {
            case "always":
              break;
            default:
            case "limited":
              d = !v.includes(r.value);
              break;
            case "complete":
              d = v.reduce((g, k) => g && !r.value.startsWith(k), !0);
              break;
          }
          if (d) {
            n.value = !0;
            const g = setTimeout(() => {
              v.push(r.value), S.value += 1, o.body = { ...o.body, ...t.value }, fe(i, r.value, o).then((k) => {
                l.actions.addRange(k), l.actions.sort(), S.value -= 1, n.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      fe(i, null, o).then((v) => {
        l.actions.addRange(v), l.actions.sort();
      });
  return { searchingFlag: f };
}, Le = (l, i, e, r = [], a = []) => {
  const t = b(""), h = b([]), o = b({}), S = { ...r.reduce((f, v) => (f[v] = !1, f), {}), ...a.reduce((f, v) => (f[v] = !0, f), {}) };
  for (let f in S) {
    let v = S[f], c = document.getElementById(f);
    o.value[f] = c == null ? void 0 : c.value, c && c.addEventListener("change", (d) => {
      o.value[f] = d.target.value, v && ne(() => {
        if (i != null)
          for (let g of Array.from(i.value.keys()))
            h.value.find((k) => k.key == g) || e(g, !1);
        else
          h.value.find((g) => g.key == t.value) || e(t.value, !1);
      });
    });
  }
  const n = function(f, v) {
    let c = f.value;
    return Object.keys(o.value).length > 0 && (c = c.filter((d) => {
      var g, k;
      for (let y in o.value)
        if ((S[y] ? !0 : ((g = o.value[y]) != null ? g : "").length > 0) && ((k = d.data) == null ? void 0 : k.hasOwnProperty(y))) {
          if (Array.isArray(d.data[y])) {
            if (!d.data[y].includes(o.value[y]))
              return !1;
          } else if (d.data[y] != o.value[y])
            return !1;
        }
      return !0;
    })), v.length > 0 && (c = c.filter((d) => d.value.toLowerCase().includes(v.toLowerCase()))), c;
  };
  return K(() => {
    h.value = n(l, t.value);
  }), { filterText: t, filteredOptions: h, filterValues: o };
}, Oe = (l, i, e, r, a, t, h) => {
  const o = getComputedStyle(document.querySelector("body")).font, S = function(v) {
    const d = document.createElement("canvas").getContext("2d");
    return d.font = o, d.measureText(v).width;
  }, n = B(() => {
    var c, d;
    const v = (c = Z(r.value).width) != null ? c : 100;
    if (h === "inherit")
      return v;
    if (h == null || h === "dynamic") {
      const g = (d = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? d : 16;
      return Math.max(v, Math.max(...l.value.map((k) => S(k.value))) + 20 + g * 3);
    }
    return h;
  }), f = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Me(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var v = Z(r.value), c = Z(null);
    if (t.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(t.value).position))
      var c = Z(t.value);
    let d = -c.left + v.left;
    const g = window.document.documentElement.clientWidth;
    d + n.value > g && (d = g - n.value), f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: n.value.toString() + "px",
      top: (-c.top + v.top + v.height).toString() + "px",
      left: d.toString() + "px"
    };
  }), { dropdownStyle: f, getTextWidth: S };
}, De = ["name"], Je = {
  key: 1,
  class: "extra-select selection"
}, Ke = ["onClick"], Xe = ["innerHTML"], Ge = ["value", "disabled"], Qe = {
  key: 0,
  class: "input-searching"
}, Ye = ["placeholder"], Ze = {
  key: 0,
  class: "allselect-clear"
}, Re = { class: "row-input" }, et = ["checked"], tt = { class: "row-input" }, lt = ["checked"], at = {
  key: 1,
  class: "no-matches"
}, nt = { key: 2 }, st = ["onClick"], ot = { class: "row-input" }, rt = ["checked"], ut = ["value"], it = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, ct = Object.assign(it, {
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
  setup(l, { emit: i }) {
    var re, ue, ie;
    const e = l, r = B(() => {
      var s, u;
      return (u = (s = e.originalNode) == null ? void 0 : s.multiple) != null ? u : e.multiple;
    }), { options: a, selectedOptions: t, onReset: h } = xe(e.originalNode, J(e, "options"), J(e, "modelValue"), e.initialValue), { t: o } = _e(e.originalNode, J(e, "localization")), S = (re = e.originalNode) == null ? void 0 : re.classList, n = Object.values((ie = (ue = e.originalNode) == null ? void 0 : ue.style) != null ? ie : {});
    Se(e.originalNode);
    const f = i, v = (s, u = null) => {
      if (r.value) {
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
    }, { filterText: c, filteredOptions: d, filterValues: g } = Le(a, t, v, e.filterFields, e.hardFilterFields), { searchingFlag: k } = Ee(
      a,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), y = b(null), z = b(null), T = b(null), $ = b(!1);
    function W(s) {
      e.disabled || ($.value = s);
    }
    ee(c, () => {
      z.value.querySelector(".scroller").scrollTop = 0;
    });
    const M = b(null), P = function(s) {
      const u = U(s.target);
      u.push(s.target), !u.includes(y.value) && !u.includes(z.value) ? $.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    ve(() => {
      if (e.dropdownContainer) {
        let s = !1;
        M.value = U(y.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), e.originalNode) {
        for (let u of S)
          u != "extraselect" && y.value.classList.add(u);
        for (let u of n)
          y.value.style[u] = e.originalNode.style[u];
        let s = U(y.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(h)), e.originalNode.toggleValue = v, e.originalNode.setValues = (u) => {
          t.value.clear();
          for (let O of u)
            v(O);
        };
      }
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), pe(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { dropdownStyle: ae, getTextWidth: X } = Oe(a, t, $, y, z, M, e.maxWidth), H = (s) => {
      ne(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), f("update:modelValue", s);
    }, G = (s) => {
      L(s, !1), c.value = "";
    }, L = (s, u = null) => {
      u == null && (u = !_.value), u ? (t.value.clear(), a.value.forEach((O) => t.value.set(O.key, O.key))) : t.value.clear(), H(Array.from(t.value.keys()));
    }, x = () => {
      N.value ? d.value.forEach((s) => {
        t.value.has(s.key) && t.value.delete(s.key);
      }) : d.value.forEach((s) => {
        t.value.has(s.key) || t.value.set(s.key, s.key);
      }), H(Array.from(t.value.keys()));
    };
    ee($, (s, u) => {
      s != u && (s ? e.search && ne(() => {
        T.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const _ = B(() => t.value.size == a.value.length), N = B(() => d.value.reduce((s, u) => s && t.value.has(u.key), !0)), Ne = B(() => t.value.size == 0), Fe = B(() => {
      var s, u, O, D, E;
      if (a.value.length < 0)
        return "";
      if (r.value) {
        if (Ne.value)
          return o("No selection");
        if (!e.searchableUrl && _.value)
          return o("All selected");
        const F = y.value ? getComputedStyle(y.value) : null, Q = ((s = y.value) == null ? void 0 : s.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let Y = o(":n selected - ", { n: t.value.size }), ce = !0;
        for (let $e of t.value)
          if (ce ? ce = !1 : Y += ", ", Y += (O = (u = a.map.get($e[0])) == null ? void 0 : u.value) != null ? O : k.value ? o("Loading...") : o("Value not found"), Q < X(Y))
            return t.value.size + o(" selected");
        return Y;
      } else
        for (let F of t.value)
          return (E = (D = a.map.get(F[0])) == null ? void 0 : D.value) != null ? E : k.value ? o("Loading...") : o("Value not found");
      return o("No selection");
    }), { list: Ae, containerProps: Ve, wrapperProps: ze } = be(
      d,
      {
        itemHeight: 32
      }
    );
    return (s, u) => {
      var O, D;
      return m(), w(q, null, [
        r.value && p(t).size == 0 ? (m(), w("input", {
          key: 0,
          type: "hidden",
          name: (D = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : D.replace("[]", ""),
          value: ""
        }, null, 8, De)) : A("", !0),
        e.showSelected ? (m(), w("div", Je, [
          (m(!0), w(q, null, R(p(t), (E) => {
            var F;
            return m(), w("div", {
              key: E,
              onClick: I((Q) => v(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              de(V((F = p(a).find((Q) => Q.key == E[0])) == null ? void 0 : F.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Xe)
            ], 8, Ke);
          }), 128))
        ])) : A("", !0),
        C("input", te({
          onFocus: u[0] || (u[0] = (E) => W(!0)),
          onClick: u[1] || (u[1] = I((E) => W(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: y,
          value: Fe.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: l.disabled }), null, 16, Ge),
        M.value ? (m(), se(oe, {
          key: 2,
          to: M.value
        }, [
          le(C("div", {
            class: he(["extra-select dropdown", { searching: p(k) > 0 }]),
            ref_key: "dropdownNode",
            ref: z,
            style: ye(p(ae))
          }, [
            e.search ? (m(), w("div", Qe, [
              le(C("input", {
                ref_key: "searchNode",
                ref: T,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (E) => me(c) ? c.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(o)("Search...")
              }, null, 8, Ye), [
                [qe, p(c)]
              ])
            ])) : A("", !0),
            p(c).length >= e.minChars ? (m(), w(q, { key: 1 }, [
              r.value ? (m(), w("div", Ze, [
                p(c).length == 0 ? (m(), w("div", {
                  key: 0,
                  onClick: I(L, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", Re, [
                    C("input", {
                      checked: _.value,
                      type: "checkbox"
                    }, null, 8, et),
                    C("b", null, V(p(o)("Select all")), 1)
                  ])
                ])) : A("", !0),
                p(d).length > 0 && p(c).length > 0 ? (m(), w("div", {
                  key: 1,
                  onClick: I(x, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", tt, [
                    C("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, lt),
                    C("b", null, V(p(o)("Select Filtered")), 1)
                  ])
                ])) : A("", !0),
                C("div", {
                  class: "clear",
                  onClick: I(G, ["stop", "prevent"])
                }, V(p(o)("Clear")), 1)
              ])) : A("", !0),
              p(d).length == 0 ? (m(), w("div", at, V(p(o)("No matches found")), 1)) : A("", !0)
            ], 64)) : (m(), w("div", nt, V(p(o)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", te(p(Ve), { class: "scroller" }), [
              C("div", ge(we(p(ze))), [
                (m(!0), w(q, null, R(p(Ae), (E) => (m(), w("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: I((F) => v(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", ot, [
                    r.value ? (m(), w("input", {
                      key: 0,
                      checked: p(t).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, rt)) : A("", !0),
                    de(" " + V(E.data.value), 1)
                  ])
                ], 8, st))), 128))
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
          (m(!0), w(q, null, R(p(t), (E) => (m(), w("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, ut))), 128))
        ], 8, ["to"])) : A("", !0)
      ], 64);
    };
  }
}), dt = ["disabled"], ft = {
  key: 0,
  class: "no-matches"
}, vt = { key: 1 }, pt = ["onClick"], ht = { class: "row-input" }, yt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, mt = Object.assign(yt, {
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
    var X, H, G;
    const e = l, { options: r } = xe(e.originalNode, J(e, "options"), b([])), { t: a } = _e(e.originalNode, J(e, "localization")), t = (X = e.originalNode) == null ? void 0 : X.classList, h = Object.values((G = (H = e.originalNode) == null ? void 0 : H.style) != null ? G : {});
    Se(e.originalNode);
    const o = i, S = (L, x = null) => {
      x === !1 ? n.value = "" : n.value = r.map.get(L).value, k.value = !1;
    }, { filterText: n, filteredOptions: f, filterValues: v } = Le(r, null, S, e.filterFields, e.hardFilterFields), { searchingFlag: c } = Ee(
      r,
      e.url,
      e.searchableUrl,
      n,
      e.minChars,
      v,
      e.fetchMode,
      e.fetchOptions
    ), d = b(null), g = b(null), k = b(!1), y = b(null);
    function z(L) {
      e.disabled || (k.value = L);
    }
    ee(n, () => {
      g.value.querySelector(".scroller").scrollTop = 0;
    });
    const T = function(L) {
      const x = U(L.target);
      x.push(L.target), !x.includes(d.value) && !x.includes(g.value) && (k.value = !1);
    };
    ve(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        y.value = U(d.value).find((N) => !!(N instanceof Element && (N.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (y.value == null && (y.value = document.querySelector("body")), e.originalNode) {
        for (let N of t)
          N != "extrasuggest" && d.value.classList.add(N);
        for (let N of h)
          d.value.style[N] = e.originalNode.style[N];
        n.value = e.originalNode.value;
        let _ = U(d.value, "form").pop();
        _ instanceof HTMLElement && _.matches("form") && _.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          W(!0);
        });
      }
      K(() => {
        e.modelValue != null && (n.value = e.modelValue);
      });
      const L = n.value, x = () => {
        n.value = L;
      };
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), pe(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: $ } = Oe(r, b([]), k, d, g, y, e.maxWidth), W = (L = !1) => {
      var x;
      e.originalNode && (L ? n.value = e.originalNode.value : (e.originalNode.value = n.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), o("update:modelValue", n.value);
    };
    ee(() => k.value, (L) => {
      L === !1 && W();
    });
    const { list: M, containerProps: P, wrapperProps: ae } = be(
      f,
      {
        itemHeight: 32
      }
    );
    return (L, x) => (m(), w(q, null, [
      le(C("input", te({
        onFocus: x[0] || (x[0] = (_) => z(!0)),
        onClick: x[1] || (x[1] = (_) => z(!0)),
        ref_key: "inputNode",
        ref: d,
        "onUpdate:modelValue": x[2] || (x[2] = (_) => me(n) ? n.value = _ : null),
        class: "extra-select extra-select-input"
      }, L.$attrs, { disabled: l.disabled }), null, 16, dt), [
        [Te, p(n)]
      ]),
      y.value ? (m(), se(oe, {
        key: 0,
        to: y.value
      }, [
        le(C("div", {
          class: he(["extra-select dropdown", { searching: p(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ye(p($))
        }, [
          p(n).length >= e.minChars ? (m(), w(q, { key: 0 }, [
            p(f).length == 0 ? (m(), w("div", ft, V(p(a)("No matches found")), 1)) : A("", !0)
          ], 64)) : (m(), w("div", vt, V(p(a)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", te(p(P), { class: "scroller" }), [
            C("div", ge(we(p(ae))), [
              (m(!0), w(q, null, R(p(M), (_) => (m(), w("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: I((N) => S(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", ht, V(_.data.value), 1)
              ], 8, pt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [ke, k.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), bt = ct, St = mt;
export {
  bt as ExtraSelect,
  St as ExtraSuggest,
  bt as default
};
