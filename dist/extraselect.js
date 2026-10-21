import { ref as x, watchEffect as Y, computed as j, nextTick as ue, watchPostEffect as Pe, useAttrs as be, toRef as Q, watch as ne, onMounted as Se, onUnmounted as xe, openBlock as g, createElementBlock as S, Fragment as z, unref as y, createCommentVNode as V, renderList as ae, withModifiers as P, createTextVNode as we, toDisplayString as T, createElementVNode as E, mergeProps as se, createBlock as ie, Teleport as ce, withDirectives as oe, normalizeClass as de, normalizeStyle as Ce, isRef as _e, vModelText as He, normalizeProps as Ee, guardReactiveProps as Ne, vShow as Le, vModelDynamic as We } from "vue";
import { useVirtualList as Oe } from "@vueuse/core";
import { empty as Ue, offset as le, getParents as D } from "@txd/utils";
const B = (t) => {
  let i = parseInt(t);
  return i == t ? i : t;
}, De = (t) => {
  try {
    var i = JSON.parse(t);
    if (i && typeof i == "object")
      return i;
  } catch {
  }
  return t;
}, Je = (t, i, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const c = {
    defaultArray: t.value,
    get: () => t.value,
    push: (a, n, l = null) => {
      parseInt(a) == a && (a = parseInt(a));
      const k = t.map.get(a);
      if (k)
        k.value = n, k.data = l;
      else {
        let f = { value: n, key: a, data: l };
        t.value.push(f), t.map.set(f.key, f);
      }
    },
    addRange: (a) => {
      for (let n of a)
        t.actions.push(n.key, n.value, n.data);
    },
    remove: (a) => {
      t.value.splice(t.value.findIndex((n) => n.key == a), 1);
    },
    clear: () => {
      t.value = [], t.rebuildMap();
    },
    sort: (a = null) => {
      a == null && (a = (n, l) => n.value.localeCompare(l.value)), t.value = t.value.sort(a);
    },
    setDefault: function(a) {
      this.defaultArray = a;
    },
    restoreDefault: function() {
      t.value = this.defaultArray;
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
  window.ExtraSelectOptions[e] = c, t.actions = c;
};
let Xe = 1;
const Ae = (t) => {
  t && (t.style.display = "none", Ue(t));
}, Fe = (t, i, e, c, a = null) => {
  const n = x(/* @__PURE__ */ new Map());
  Y(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let u of e.value)
        n.value.set(u, u);
    }
  });
  const l = x([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let u of l.value)
        l.map.set(u.key, u);
  }, Y(() => {
    i.value && (l.value = i.value.map((u) => ({ ...u, key: B(u.key) })), l.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let u of Array.apply(null, t.selectedOptions).map((d) => B(d.value)).filter((d) => d != null))
        n.value.set(u, u);
      l.value = Array.apply(null, t.options).reduce((u, d) => (u.push({
        value: d.text,
        key: B(d.value),
        data: Object.keys(d.dataset).reduce((h, b) => (h[b] = De(d.dataset[b]), h), {})
      }), u), []);
    }
    if (t.matches("input")) {
      let u = t.value;
      u != null && u.length > 0 && (l.value = [{ value: u, key: u }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(c))
    for (let u of c)
      n.value.set(B(u), B(u));
  else
    c != null && n.value.set(B(c), B(c));
  (a == null || a === "" || a == 0) && (a = "extraselect_" + (++Xe).toString()), Je(l, n, a);
  const k = [];
  return n.value.forEach((u, d) => {
    k.push([d, u]);
  }), { options: l, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [u, d] of k)
      n.value.set(u, d);
  } };
};
x({});
function Ge(t, i = {}) {
  for (let e in i)
    t = t.replace(`:${e}`, i[e]);
  return t;
}
const Qe = (t = null) => {
  var c, a;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(a = (c = window.ExtraSelectLocalization.defaults) == null ? void 0 : c.defaultArray) != null ? a : {} };
  Object.assign(e, t != null ? t : {}), Ve(x(e), "defaults");
}, Ve = (t, i) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Qe());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (c) => {
      var a;
      return (a = t.value[c]) != null ? a : null;
    },
    push: (c, a) => {
      t.value[c] = a;
    }
  };
  window.ExtraSelectLocalization[i] = e, t.actions = e;
};
let Ye = 0;
const Te = (t, i) => {
  var c;
  return Ve(i, (c = t == null ? void 0 : t.id) != null ? c : "extraselect_" + (++Ye).toString()), { propLocalization: i, t: (a, n = {}) => {
    var k;
    let l = (k = i.value[a]) != null ? k : window.ExtraSelectLocalization.defaults.get(a);
    return l == null && (window.ExtraSelectLocalization.defaults.push(a, a), l = a), Ge(l, n);
  } };
}, ke = async function(t, i = null, e = {}) {
  var n;
  const c = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(n = e.headers) != null ? n : {} },
    body: JSON.stringify({ search: i, ...e.body })
  };
  return await (await fetch(t, c)).json();
}, ze = (t, i, e, c, a, n, l = "limited", k = {}) => {
  const f = x(0), u = x(!1), d = j(() => u.value || f.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const h = {};
      Y((b) => {
        var v;
        const r = (v = JSON.stringify(n.value)) != null ? v : "default";
        if (h[r] == null && (h[r] = []), c.value.length >= a) {
          let m = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              m = !h[r].includes(c.value);
              break;
            case "complete":
              m = h[r].reduce((w, p) => w && !c.value.startsWith(p), !0);
              break;
          }
          if (m) {
            u.value = !0;
            const w = setTimeout(() => {
              h[r].push(c.value), f.value += 1, k.body = { ...k.body, ...n.value }, ke(i, c.value, k).then((p) => {
                t.actions.addRange(p), t.actions.sort(), f.value -= 1, u.value = !1;
              });
            }, 500);
            b(() => {
              clearTimeout(w);
            });
          }
        }
      });
    } else
      ke(i, null, k).then((h) => {
        t.actions.addRange(h), t.actions.sort();
      });
  return { searchingFlag: d };
}, Me = (t, i, e, c = [], a = [], n = "exact") => {
  const l = x(""), k = x([]), f = x({}), u = { ...c.reduce((h, b) => (h[b] = !1, h), {}), ...a.reduce((h, b) => (h[b] = !0, h), {}) };
  for (let h in u) {
    let b = u[h], r = document.getElementById(h);
    f.value[h] = r == null ? void 0 : r.value, r && r.addEventListener("change", (v) => {
      f.value[h] = v.target.value, b && ue(() => {
        if (i != null)
          for (let m of Array.from(i.value.keys()))
            k.value.find((w) => w.key == m) || e(m, !1);
        else
          k.value.find((m) => m.key == l.value) || e(l.value, !1);
      });
    });
  }
  const d = function(h, b) {
    let r = h.value;
    if (Object.keys(f.value).length > 0 && (r = r.filter((v) => {
      var m, w;
      for (let p in f.value)
        if ((u[p] ? !0 : ((m = f.value[p]) != null ? m : "").length > 0) && ((w = v.data) == null ? void 0 : w.hasOwnProperty(p))) {
          if (Array.isArray(v.data[p])) {
            if (!v.data[p].includes(f.value[p]))
              return !1;
          } else if (v.data[p] != f.value[p])
            return !1;
        }
      return !0;
    })), b.length > 0)
      switch (n) {
        case "loose":
          const v = b.toLowerCase().split(" ").filter((m) => m.length > 0);
          r = r.filter((m) => {
            const w = m.value.toLowerCase();
            return v.every((p) => w.includes(p));
          });
          break;
        default:
          r = r.filter((m) => m.value.toLowerCase().includes(b.toLowerCase()));
          break;
      }
    return r;
  };
  return Y(() => {
    k.value = d(t, l.value);
  }), { filterText: l, filteredOptions: k, filterValues: f };
}, $e = (t, i, e, c, a, n, l) => {
  const k = getComputedStyle(document.querySelector("body")).font, u = document.createElement("canvas").getContext("2d");
  u.font = k;
  const d = function(r) {
    return u.measureText(r != null ? r : "").width;
  }, h = j(() => {
    var v, m;
    const r = (v = le(c.value).width) != null ? v : 100;
    if (l === "inherit")
      return r;
    if (l == null || l === "dynamic") {
      const w = (m = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? m : 16;
      return Math.max(r, Math.max(...t.value.map((p) => d(p.value))) + 20 + w * 3);
    }
    return l;
  }), b = x({
    position: "absolute",
    "min-width": "max-content"
  });
  return Pe(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var r = le(c.value), v = le(null);
    if (n.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n.value).position))
      var v = le(n.value);
    let m = -v.left + r.left;
    const w = window.document.documentElement.clientWidth;
    m + h.value > w && (m = w - h.value), b.value = {
      position: "absolute",
      "min-width": "max-content",
      width: h.value.toString() + "px",
      top: (-v.top + r.top + r.height).toString() + "px",
      left: m.toString() + "px"
    };
  }), { dropdownStyle: b, getTextWidth: d };
}, Ze = ["name"], Ke = {
  key: 1,
  class: "extra-select selection"
}, Re = ["onClick"], et = ["innerHTML"], tt = ["value", "disabled"], lt = {
  key: 0,
  class: "input-searching"
}, at = ["placeholder"], nt = {
  key: 0,
  class: "allselect-clear"
}, st = { class: "row-input" }, ot = ["checked"], rt = { class: "row-input" }, ut = ["checked"], it = {
  key: 1,
  class: "no-matches"
}, ct = { key: 2 }, dt = {
  key: 0,
  class: "border-bottom"
}, ft = ["onClick"], vt = ["checked"], pt = ["value"], ht = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, yt = Object.assign(ht, {
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
    modelValue: { type: Array, required: !1, default: [] },
    url: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    search: { type: Boolean, default: !1 },
    matchType: { type: String, default: "exact" },
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
    disabled: { type: Boolean, default: !1 },
    selectedOnTop: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    var fe, ve, pe, he, ye, me;
    const e = t, c = j(() => {
      var s, o;
      return (o = (s = e.originalNode) == null ? void 0 : s.multiple) != null ? o : e.multiple;
    });
    let a = be();
    const { options: n, selectedOptions: l, onReset: k } = Fe(e.originalNode, Q(e, "options"), Q(e, "modelValue"), e.initialValue, (pe = (ve = (fe = e.originalNode) == null ? void 0 : fe.id) != null ? ve : a.id) != null ? pe : null), { t: f } = Te(e.originalNode, Q(e, "localization")), u = (he = e.originalNode) == null ? void 0 : he.classList, d = Object.values((me = (ye = e.originalNode) == null ? void 0 : ye.style) != null ? me : {});
    Ae(e.originalNode);
    const h = i, b = (s, o = null) => {
      if (c.value) {
        let O = o;
        switch (O == null && (O = !l.value.has(s)), O) {
          case !0:
            l.value.set(s, s);
            break;
          case !1:
            l.value.delete(s);
            break;
        }
      } else
        l.value.clear(), o !== !1 && l.value.set(s, s), $.value = !1;
      W(Array.from(l.value.keys()));
    }, { filterText: r, filteredOptions: v, filterValues: m } = Me(n, l, b, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: w } = ze(
      n,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), p = x(null), M = x(null), I = x(null), $ = x(!1);
    function J(s) {
      e.disabled || ($.value = s);
    }
    ne(r, () => {
      M.value.querySelector(".scroller").scrollTop = 0;
    });
    const q = x(null), H = function(s) {
      const o = D(s.target);
      o.push(s.target), !o.includes(p.value) && !o.includes(M.value) ? $.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    Se(() => {
      if (e.dropdownContainer) {
        let s = !1;
        q.value = D(p.value).find((o) => !!(o instanceof Element && (o.matches(e.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o).position))));
      }
      if (q.value == null && (q.value = document.querySelector("body")), e.originalNode) {
        for (let o of u)
          o != "extraselect" && p.value.classList.add(o);
        for (let o of d)
          p.value.style[o] = e.originalNode.style[o];
        let s = D(p.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(k)), e.originalNode.toggleValue = b, e.originalNode.setValues = (o) => {
          l.value.clear();
          for (let O of o)
            b(O);
        };
      }
      window.document.addEventListener("mousedown", H), window.document.addEventListener("focusin", H);
    }), xe(() => {
      window.document.removeEventListener("mousedown", H), window.document.removeEventListener("focusin", H);
    });
    const { dropdownStyle: re, getTextWidth: Z } = $e(n, l, $, p, M, q, e.maxWidth), W = (s) => {
      ue(
        () => {
          var o;
          return (o = e.originalNode) == null ? void 0 : o.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), h("update:modelValue", s);
    }, K = (s) => {
      X(s, !1), r.value = "";
    }, X = (s, o = null) => {
      o == null && (o = !U.value), o ? (l.value.clear(), n.value.forEach((O) => l.value.set(O.key, O.key))) : l.value.clear(), W(Array.from(l.value.keys()));
    }, R = () => {
      N.value ? v.value.forEach((s) => {
        l.value.has(s.key) && l.value.delete(s.key);
      }) : v.value.forEach((s) => {
        l.value.has(s.key) || l.value.set(s.key, s.key);
      }), W(Array.from(l.value.keys()));
    };
    ne($, (s, o) => {
      s != o && (s ? e.search && ue(() => {
        I.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const U = j(() => l.value.size == n.value.length), N = j(() => v.value.reduce((s, o) => s && l.value.has(o.key), !0)), _ = j(() => l.value.size == 0), L = j(() => {
      var s, o, O, G, C;
      if (n.value.length < 0)
        return "";
      if (c.value) {
        if (_.value)
          return f("No selection");
        if (!e.searchableUrl && U.value)
          return f("All selected");
        const F = p.value ? getComputedStyle(p.value) : null, ee = ((s = p.value) == null ? void 0 : s.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let te = f(":n selected - ", { n: l.value.size }), ge = !0;
        for (let Be of l.value)
          if (ge ? ge = !1 : te += ", ", te += (O = (o = n.map.get(Be[0])) == null ? void 0 : o.value) != null ? O : w.value ? f("Loading...") : f("Value not found"), ee < Z(te))
            return l.value.size + f(" selected");
        return te;
      } else
        for (let F of l.value)
          return (C = (G = n.map.get(F[0])) == null ? void 0 : G.value) != null ? C : w.value ? f("Loading...") : f("Value not found");
      return f("No selection");
    }), A = j(() => e.selectedOnTop && c.value ? [...[...l.value.keys()].map((s) => {
      let o = v.value.find((O) => O.key === s);
      return o != null ? { ...o, selected: !0 } : null;
    }).filter((s) => s != null), { key: "separator", value: "separator", separator: !0 }, ...v.value] : v.value), { list: qe, containerProps: je, wrapperProps: Ie } = Oe(
      A,
      {
        itemHeight: 32
      }
    );
    return (s, o) => {
      var O, G;
      return g(), S(z, null, [
        c.value && y(l).size == 0 ? (g(), S("input", {
          key: 0,
          type: "hidden",
          name: (G = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, Ze)) : V("", !0),
        e.showSelected ? (g(), S("div", Ke, [
          (g(!0), S(z, null, ae(y(l), (C) => {
            var F;
            return g(), S("div", {
              key: C,
              onClick: P((ee) => b(C[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              we(T((F = y(n).find((ee) => ee.key == C[0])) == null ? void 0 : F.value) + " ", 1),
              E("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, et)
            ], 8, Re);
          }), 128))
        ])) : V("", !0),
        E("input", se({
          onFocus: o[0] || (o[0] = (C) => J(!0)),
          onClick: o[1] || (o[1] = P((C) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: p,
          value: L.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: t.disabled }), null, 16, tt),
        q.value ? (g(), ie(ce, {
          key: 2,
          to: q.value
        }, [
          oe(E("div", {
            class: de(["extra-select dropdown", { searching: y(w) > 0 }]),
            ref_key: "dropdownNode",
            ref: M,
            style: Ce(y(re))
          }, [
            e.search ? (g(), S("div", lt, [
              oe(E("input", {
                ref_key: "searchNode",
                ref: I,
                class: "extra-select-search",
                "onUpdate:modelValue": o[2] || (o[2] = (C) => _e(r) ? r.value = C : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: y(f)("Search...")
              }, null, 8, at), [
                [He, y(r)]
              ])
            ])) : V("", !0),
            y(r).length >= e.minChars ? (g(), S(z, { key: 1 }, [
              c.value ? (g(), S("div", nt, [
                y(r).length == 0 ? (g(), S("div", {
                  key: 0,
                  onClick: P(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", st, [
                    E("input", {
                      checked: U.value,
                      type: "checkbox"
                    }, null, 8, ot),
                    E("b", null, T(y(f)("Select all")), 1)
                  ])
                ])) : V("", !0),
                y(v).length > 0 && y(r).length > 0 ? (g(), S("div", {
                  key: 1,
                  onClick: P(R, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", rt, [
                    E("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, ut),
                    E("b", null, T(y(f)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                E("div", {
                  class: "clear",
                  onClick: P(K, ["stop", "prevent"])
                }, T(y(f)("Clear")), 1)
              ])) : V("", !0),
              y(v).length == 0 ? (g(), S("div", it, T(y(f)("No matches found")), 1)) : V("", !0)
            ], 64)) : (g(), S("div", ct, T(y(f)("Insert at least :n characters", { n: e.minChars })), 1)),
            E("div", se(y(je), { class: "scroller" }), [
              E("div", Ee(Ne(y(Ie))), [
                (g(!0), S(z, null, ae(y(qe), (C) => (g(), S(z, {
                  key: C.index
                }, [
                  C.data.separator ? (g(), S("div", dt)) : (g(), S("button", {
                    key: 1,
                    class: "dropdown-row",
                    onClick: P((F) => b(C.data.key), ["stop", "prevent"]),
                    style: { height: "32px" }
                  }, [
                    E("div", {
                      class: de(["row-input", { "fw-bold": C.data.selected }])
                    }, [
                      c.value ? (g(), S("input", {
                        key: 0,
                        checked: y(l).has(C.data.key),
                        type: "checkbox"
                      }, null, 8, vt)) : V("", !0),
                      we(" " + T(C.data.value), 1)
                    ], 2)
                  ], 8, ft))
                ], 64))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Le, $.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (g(), ie(ce, {
          key: 3,
          to: e.originalNode
        }, [
          (g(!0), S(z, null, ae(y(l), (C) => (g(), S("option", {
            key: C[0],
            selected: "selected",
            value: C[0]
          }, null, 8, pt))), 128))
        ], 8, ["to"])) : V("", !0)
      ], 64);
    };
  }
}), mt = ["disabled"], gt = {
  key: 0,
  class: "no-matches"
}, wt = { key: 1 }, kt = ["onClick"], bt = { class: "row-input" }, St = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, xt = Object.assign(St, {
  props: {
    originalNode: { type: Object, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
    modelValue: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    url: { type: String, required: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    matchType: { type: String, default: "exact" },
    minChars: { type: Number, default: 0 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    var Z, W, K, X, R, U;
    const e = t;
    let c = be();
    const { options: a } = Fe(e.originalNode, Q(e, "options"), x([]), null, (K = (W = (Z = e.originalNode) == null ? void 0 : Z.id) != null ? W : c.id) != null ? K : null), { t: n } = Te(e.originalNode, Q(e, "localization")), l = (X = e.originalNode) == null ? void 0 : X.classList, k = Object.values((U = (R = e.originalNode) == null ? void 0 : R.style) != null ? U : {});
    Ae(e.originalNode);
    const f = i, u = (N, _ = null) => {
      _ === !1 ? d.value = "" : d.value = a.map.get(N).value, w.value = !1;
    }, { filterText: d, filteredOptions: h, filterValues: b } = Me(a, null, u, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: r } = ze(
      a,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      b,
      e.fetchMode,
      e.fetchOptions
    ), v = x(null), m = x(null), w = x(!1), p = x(null);
    function M(N) {
      e.disabled || (w.value = N);
    }
    ne(d, () => {
      m.value.querySelector(".scroller").scrollTop = 0;
    });
    const I = function(N) {
      const _ = D(N.target);
      _.push(N.target), !_.includes(v.value) && !_.includes(m.value) && (w.value = !1);
    };
    Se(() => {
      if (e.dropdownContainer) {
        let L = !1;
        p.value = D(v.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let A of l)
          A != "extrasuggest" && v.value.classList.add(A);
        for (let A of k)
          v.value.style[A] = e.originalNode.style[A];
        d.value = e.originalNode.value;
        let L = D(v.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(_)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      Y(() => {
        e.modelValue != null && (d.value = e.modelValue);
      });
      const N = d.value, _ = () => {
        d.value = N;
      };
      window.document.addEventListener("mousedown", I), window.document.addEventListener("focusin", I);
    }), xe(() => {
      window.document.removeEventListener("mousedown", I), window.document.removeEventListener("focusin", I);
    });
    const { dropdownStyle: $ } = $e(a, x([]), w, v, m, p, e.maxWidth), J = (N = !1) => {
      var _;
      e.originalNode && (N ? d.value = e.originalNode.value : (e.originalNode.value = d.value, (_ = e.originalNode) == null || _.dispatchEvent(new Event("change", { bubbles: !0 })))), f("update:modelValue", d.value);
    };
    ne(() => w.value, (N) => {
      N === !1 && J();
    });
    const { list: q, containerProps: H, wrapperProps: re } = Oe(
      h,
      {
        itemHeight: 32
      }
    );
    return (N, _) => (g(), S(z, null, [
      oe(E("input", se({
        onFocus: _[0] || (_[0] = (L) => M(!0)),
        onClick: _[1] || (_[1] = (L) => M(!0)),
        ref_key: "inputNode",
        ref: v,
        "onUpdate:modelValue": _[2] || (_[2] = (L) => _e(d) ? d.value = L : null),
        class: "extra-select extra-select-input"
      }, N.$attrs, { disabled: t.disabled }), null, 16, mt), [
        [We, y(d)]
      ]),
      p.value ? (g(), ie(ce, {
        key: 0,
        to: p.value
      }, [
        oe(E("div", {
          class: de(["extra-select dropdown", { searching: y(r) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: Ce(y($))
        }, [
          y(d).length >= e.minChars ? (g(), S(z, { key: 0 }, [
            y(h).length == 0 ? (g(), S("div", gt, T(y(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (g(), S("div", wt, T(y(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          E("div", se(y(H), { class: "scroller" }), [
            E("div", Ee(Ne(y(re))), [
              (g(!0), S(z, null, ae(y(q), (L) => (g(), S("button", {
                key: L.index,
                class: "dropdown-row",
                onClick: P((A) => u(L.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                E("div", bt, T(L.data.value), 1)
              ], 8, kt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, w.value]
        ])
      ], 8, ["to"])) : V("", !0)
    ], 64));
  }
}), Nt = yt, Lt = xt;
export {
  Nt as ExtraSelect,
  Lt as ExtraSuggest,
  Nt as default
};
