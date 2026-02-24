import { ref as x, watchEffect as Y, computed as P, nextTick as ue, watchPostEffect as Be, useAttrs as ke, toRef as Q, watch as ne, onMounted as be, onUnmounted as Se, openBlock as w, createElementBlock as b, Fragment as q, unref as h, createCommentVNode as V, renderList as ae, withModifiers as B, createTextVNode as ge, toDisplayString as T, createElementVNode as _, mergeProps as se, createBlock as ie, Teleport as ce, withDirectives as oe, normalizeClass as xe, normalizeStyle as Ce, isRef as _e, vModelText as Pe, normalizeProps as Ee, guardReactiveProps as Ne, vShow as Le, vModelDynamic as He } from "vue";
import { useVirtualList as Oe } from "@vueuse/core";
import { empty as We, offset as le, getParents as D } from "@txd/utils";
const I = (t) => {
  let i = parseInt(t);
  return i == t ? i : t;
}, Ue = (t) => {
  try {
    var i = JSON.parse(t);
    if (i && typeof i == "object")
      return i;
  } catch {
  }
  return t;
}, De = (t, i, e) => {
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
        let d = { value: n, key: a, data: l };
        t.value.push(d), t.map.set(d.key, d);
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
let Je = 1;
const Ae = (t) => {
  t && (t.style.display = "none", We(t));
}, Fe = (t, i, e, c, a = null) => {
  const n = x(/* @__PURE__ */ new Map());
  Y(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let o of e.value)
        n.value.set(o, o);
    }
  });
  const l = x([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let o of l.value)
        l.map.set(o.key, o);
  }, Y(() => {
    i.value && (l.value = i.value.map((o) => ({ ...o, key: I(o.key) })), l.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let o of Array.apply(null, t.selectedOptions).map((f) => I(f.value)).filter((f) => f != null))
        n.value.set(o, o);
      l.value = Array.apply(null, t.options).reduce((o, f) => (o.push({
        value: f.text,
        key: I(f.value),
        data: Object.keys(f.dataset).reduce((v, m) => (v[m] = Ue(f.dataset[m]), v), {})
      }), o), []);
    }
    if (t.matches("input")) {
      let o = t.value;
      o != null && o.length > 0 && (l.value = [{ value: o, key: o }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(c))
    for (let o of c)
      n.value.set(I(o), I(o));
  else
    c != null && n.value.set(I(c), I(c));
  (a == null || a === "" || a == 0) && (a = "extraselect_" + (++Je).toString()), De(l, n, a);
  const k = [];
  return n.value.forEach((o, f) => {
    k.push([f, o]);
  }), { options: l, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [o, f] of k)
      n.value.set(o, f);
  } };
};
x({});
function Xe(t, i = {}) {
  for (let e in i)
    t = t.replace(`:${e}`, i[e]);
  return t;
}
const Ge = (t = null) => {
  var c, a;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(a = (c = window.ExtraSelectLocalization.defaults) == null ? void 0 : c.defaultArray) != null ? a : {} };
  Object.assign(e, t != null ? t : {}), Ve(x(e), "defaults");
}, Ve = (t, i) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Ge());
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
let Qe = 0;
const Te = (t, i) => {
  var c;
  return Ve(i, (c = t == null ? void 0 : t.id) != null ? c : "extraselect_" + (++Qe).toString()), { propLocalization: i, t: (a, n = {}) => {
    var k;
    let l = (k = i.value[a]) != null ? k : window.ExtraSelectLocalization.defaults.get(a);
    return l == null && (window.ExtraSelectLocalization.defaults.push(a, a), l = a), Xe(l, n);
  } };
}, we = async function(t, i = null, e = {}) {
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
  const d = x(0), o = x(!1), f = P(() => o.value || d.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const v = {};
      Y((m) => {
        var y;
        const r = (y = JSON.stringify(n.value)) != null ? y : "default";
        if (v[r] == null && (v[r] = []), c.value.length >= a) {
          let g = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              g = !v[r].includes(c.value);
              break;
            case "complete":
              g = v[r].reduce((S, p) => S && !c.value.startsWith(p), !0);
              break;
          }
          if (g) {
            o.value = !0;
            const S = setTimeout(() => {
              v[r].push(c.value), d.value += 1, k.body = { ...k.body, ...n.value }, we(i, c.value, k).then((p) => {
                t.actions.addRange(p), t.actions.sort(), d.value -= 1, o.value = !1;
              });
            }, 500);
            m(() => {
              clearTimeout(S);
            });
          }
        }
      });
    } else
      we(i, null, k).then((v) => {
        t.actions.addRange(v), t.actions.sort();
      });
  return { searchingFlag: f };
}, Me = (t, i, e, c = [], a = [], n = "exact") => {
  const l = x(""), k = x([]), d = x({}), o = { ...c.reduce((v, m) => (v[m] = !1, v), {}), ...a.reduce((v, m) => (v[m] = !0, v), {}) };
  for (let v in o) {
    let m = o[v], r = document.getElementById(v);
    d.value[v] = r == null ? void 0 : r.value, r && r.addEventListener("change", (y) => {
      d.value[v] = y.target.value, m && ue(() => {
        if (i != null)
          for (let g of Array.from(i.value.keys()))
            k.value.find((S) => S.key == g) || e(g, !1);
        else
          k.value.find((g) => g.key == l.value) || e(l.value, !1);
      });
    });
  }
  const f = function(v, m) {
    let r = v.value;
    if (Object.keys(d.value).length > 0 && (r = r.filter((y) => {
      var g, S;
      for (let p in d.value)
        if ((o[p] ? !0 : ((g = d.value[p]) != null ? g : "").length > 0) && ((S = y.data) == null ? void 0 : S.hasOwnProperty(p))) {
          if (Array.isArray(y.data[p])) {
            if (!y.data[p].includes(d.value[p]))
              return !1;
          } else if (y.data[p] != d.value[p])
            return !1;
        }
      return !0;
    })), m.length > 0)
      switch (n) {
        case "loose":
          const y = m.toLowerCase().split(" ").filter((g) => g.length > 0);
          r = r.filter((g) => {
            const S = g.value.toLowerCase();
            return y.every((p) => S.includes(p));
          });
          break;
        default:
          r = r.filter((g) => g.value.toLowerCase().includes(m.toLowerCase()));
          break;
      }
    return r;
  };
  return Y(() => {
    k.value = f(t, l.value);
  }), { filterText: l, filteredOptions: k, filterValues: d };
}, $e = (t, i, e, c, a, n, l) => {
  const k = getComputedStyle(document.querySelector("body")).font, d = function(v) {
    const r = document.createElement("canvas").getContext("2d");
    return r.font = k, r.measureText(v).width;
  }, o = P(() => {
    var m, r;
    const v = (m = le(c.value).width) != null ? m : 100;
    if (l === "inherit")
      return v;
    if (l == null || l === "dynamic") {
      const y = (r = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? r : 16;
      return Math.max(v, Math.max(...t.value.map((g) => d(g.value))) + 20 + y * 3);
    }
    return l;
  }), f = x({
    position: "absolute",
    "min-width": "max-content"
  });
  return Be(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var v = le(c.value), m = le(null);
    if (n.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n.value).position))
      var m = le(n.value);
    let r = -m.left + v.left;
    const y = window.document.documentElement.clientWidth;
    r + o.value > y && (r = y - o.value), f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: o.value.toString() + "px",
      top: (-m.top + v.top + v.height).toString() + "px",
      left: r.toString() + "px"
    };
  }), { dropdownStyle: f, getTextWidth: d };
}, Ye = ["name"], Ze = {
  key: 1,
  class: "extra-select selection"
}, Ke = ["onClick"], Re = ["innerHTML"], et = ["value", "disabled"], tt = {
  key: 0,
  class: "input-searching"
}, lt = ["placeholder"], at = {
  key: 0,
  class: "allselect-clear"
}, nt = { class: "row-input" }, st = ["checked"], ot = { class: "row-input" }, rt = ["checked"], ut = {
  key: 1,
  class: "no-matches"
}, it = { key: 2 }, ct = ["onClick"], dt = { class: "row-input" }, ft = ["checked"], vt = ["value"], pt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, ht = Object.assign(pt, {
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
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    var de, fe, ve, pe, he, ye;
    const e = t, c = P(() => {
      var s, u;
      return (u = (s = e.originalNode) == null ? void 0 : s.multiple) != null ? u : e.multiple;
    });
    let a = ke();
    const { options: n, selectedOptions: l, onReset: k } = Fe(e.originalNode, Q(e, "options"), Q(e, "modelValue"), e.initialValue, (ve = (fe = (de = e.originalNode) == null ? void 0 : de.id) != null ? fe : a.id) != null ? ve : null), { t: d } = Te(e.originalNode, Q(e, "localization")), o = (pe = e.originalNode) == null ? void 0 : pe.classList, f = Object.values((ye = (he = e.originalNode) == null ? void 0 : he.style) != null ? ye : {});
    Ae(e.originalNode);
    const v = i, m = (s, u = null) => {
      if (c.value) {
        let O = u;
        switch (O == null && (O = !l.value.has(s)), O) {
          case !0:
            l.value.set(s, s);
            break;
          case !1:
            l.value.delete(s);
            break;
        }
      } else
        l.value.clear(), u !== !1 && l.value.set(s, s), M.value = !1;
      W(Array.from(l.value.keys()));
    }, { filterText: r, filteredOptions: y, filterValues: g } = Me(n, l, m, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: S } = ze(
      n,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), p = x(null), z = x(null), j = x(null), M = x(!1);
    function J(s) {
      e.disabled || (M.value = s);
    }
    ne(r, () => {
      z.value.querySelector(".scroller").scrollTop = 0;
    });
    const $ = x(null), H = function(s) {
      const u = D(s.target);
      u.push(s.target), !u.includes(p.value) && !u.includes(z.value) ? M.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    be(() => {
      if (e.dropdownContainer) {
        let s = !1;
        $.value = D(p.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if ($.value == null && ($.value = document.querySelector("body")), e.originalNode) {
        for (let u of o)
          u != "extraselect" && p.value.classList.add(u);
        for (let u of f)
          p.value.style[u] = e.originalNode.style[u];
        let s = D(p.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(k)), e.originalNode.toggleValue = m, e.originalNode.setValues = (u) => {
          l.value.clear();
          for (let O of u)
            m(O);
        };
      }
      window.document.addEventListener("mousedown", H), window.document.addEventListener("focusin", H);
    }), Se(() => {
      window.document.removeEventListener("mousedown", H), window.document.removeEventListener("focusin", H);
    });
    const { dropdownStyle: re, getTextWidth: Z } = $e(n, l, M, p, z, $, e.maxWidth), W = (s) => {
      ue(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), v("update:modelValue", s);
    }, K = (s) => {
      X(s, !1), r.value = "";
    }, X = (s, u = null) => {
      u == null && (u = !U.value), u ? (l.value.clear(), n.value.forEach((O) => l.value.set(O.key, O.key))) : l.value.clear(), W(Array.from(l.value.keys()));
    }, R = () => {
      N.value ? y.value.forEach((s) => {
        l.value.has(s.key) && l.value.delete(s.key);
      }) : y.value.forEach((s) => {
        l.value.has(s.key) || l.value.set(s.key, s.key);
      }), W(Array.from(l.value.keys()));
    };
    ne(M, (s, u) => {
      s != u && (s ? e.search && ue(() => {
        j.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const U = P(() => l.value.size == n.value.length), N = P(() => y.value.reduce((s, u) => s && l.value.has(u.key), !0)), C = P(() => l.value.size == 0), L = P(() => {
      var s, u, O, G, E;
      if (n.value.length < 0)
        return "";
      if (c.value) {
        if (C.value)
          return d("No selection");
        if (!e.searchableUrl && U.value)
          return d("All selected");
        const F = p.value ? getComputedStyle(p.value) : null, ee = ((s = p.value) == null ? void 0 : s.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let te = d(":n selected - ", { n: l.value.size }), me = !0;
        for (let Ie of l.value)
          if (me ? me = !1 : te += ", ", te += (O = (u = n.map.get(Ie[0])) == null ? void 0 : u.value) != null ? O : S.value ? d("Loading...") : d("Value not found"), ee < Z(te))
            return l.value.size + d(" selected");
        return te;
      } else
        for (let F of l.value)
          return (E = (G = n.map.get(F[0])) == null ? void 0 : G.value) != null ? E : S.value ? d("Loading...") : d("Value not found");
      return d("No selection");
    }), { list: A, containerProps: qe, wrapperProps: je } = Oe(
      y,
      {
        itemHeight: 32
      }
    );
    return (s, u) => {
      var O, G;
      return w(), b(q, null, [
        c.value && h(l).size == 0 ? (w(), b("input", {
          key: 0,
          type: "hidden",
          name: (G = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, Ye)) : V("", !0),
        e.showSelected ? (w(), b("div", Ze, [
          (w(!0), b(q, null, ae(h(l), (E) => {
            var F;
            return w(), b("div", {
              key: E,
              onClick: B((ee) => m(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ge(T((F = h(n).find((ee) => ee.key == E[0])) == null ? void 0 : F.value) + " ", 1),
              _("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Re)
            ], 8, Ke);
          }), 128))
        ])) : V("", !0),
        _("input", se({
          onFocus: u[0] || (u[0] = (E) => J(!0)),
          onClick: u[1] || (u[1] = B((E) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: p,
          value: L.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: t.disabled }), null, 16, et),
        $.value ? (w(), ie(ce, {
          key: 2,
          to: $.value
        }, [
          oe(_("div", {
            class: xe(["extra-select dropdown", { searching: h(S) > 0 }]),
            ref_key: "dropdownNode",
            ref: z,
            style: Ce(h(re))
          }, [
            e.search ? (w(), b("div", tt, [
              oe(_("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (E) => _e(r) ? r.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: h(d)("Search...")
              }, null, 8, lt), [
                [Pe, h(r)]
              ])
            ])) : V("", !0),
            h(r).length >= e.minChars ? (w(), b(q, { key: 1 }, [
              c.value ? (w(), b("div", at, [
                h(r).length == 0 ? (w(), b("div", {
                  key: 0,
                  onClick: B(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", nt, [
                    _("input", {
                      checked: U.value,
                      type: "checkbox"
                    }, null, 8, st),
                    _("b", null, T(h(d)("Select all")), 1)
                  ])
                ])) : V("", !0),
                h(y).length > 0 && h(r).length > 0 ? (w(), b("div", {
                  key: 1,
                  onClick: B(R, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", ot, [
                    _("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, rt),
                    _("b", null, T(h(d)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                _("div", {
                  class: "clear",
                  onClick: B(K, ["stop", "prevent"])
                }, T(h(d)("Clear")), 1)
              ])) : V("", !0),
              h(y).length == 0 ? (w(), b("div", ut, T(h(d)("No matches found")), 1)) : V("", !0)
            ], 64)) : (w(), b("div", it, T(h(d)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", se(h(qe), { class: "scroller" }), [
              _("div", Ee(Ne(h(je))), [
                (w(!0), b(q, null, ae(h(A), (E) => (w(), b("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: B((F) => m(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", dt, [
                    c.value ? (w(), b("input", {
                      key: 0,
                      checked: h(l).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, ft)) : V("", !0),
                    ge(" " + T(E.data.value), 1)
                  ])
                ], 8, ct))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Le, M.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (w(), ie(ce, {
          key: 3,
          to: e.originalNode
        }, [
          (w(!0), b(q, null, ae(h(l), (E) => (w(), b("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, vt))), 128))
        ], 8, ["to"])) : V("", !0)
      ], 64);
    };
  }
}), yt = ["disabled"], mt = {
  key: 0,
  class: "no-matches"
}, gt = { key: 1 }, wt = ["onClick"], kt = { class: "row-input" }, bt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, St = Object.assign(bt, {
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
    let c = ke();
    const { options: a } = Fe(e.originalNode, Q(e, "options"), x([]), null, (K = (W = (Z = e.originalNode) == null ? void 0 : Z.id) != null ? W : c.id) != null ? K : null), { t: n } = Te(e.originalNode, Q(e, "localization")), l = (X = e.originalNode) == null ? void 0 : X.classList, k = Object.values((U = (R = e.originalNode) == null ? void 0 : R.style) != null ? U : {});
    Ae(e.originalNode);
    const d = i, o = (N, C = null) => {
      C === !1 ? f.value = "" : f.value = a.map.get(N).value, S.value = !1;
    }, { filterText: f, filteredOptions: v, filterValues: m } = Me(a, null, o, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: r } = ze(
      a,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), y = x(null), g = x(null), S = x(!1), p = x(null);
    function z(N) {
      e.disabled || (S.value = N);
    }
    ne(f, () => {
      g.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = function(N) {
      const C = D(N.target);
      C.push(N.target), !C.includes(y.value) && !C.includes(g.value) && (S.value = !1);
    };
    be(() => {
      if (e.dropdownContainer) {
        let L = !1;
        p.value = D(y.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let A of l)
          A != "extrasuggest" && y.value.classList.add(A);
        for (let A of k)
          y.value.style[A] = e.originalNode.style[A];
        f.value = e.originalNode.value;
        let L = D(y.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(C)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      Y(() => {
        e.modelValue != null && (f.value = e.modelValue);
      });
      const N = f.value, C = () => {
        f.value = N;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), Se(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: M } = $e(a, x([]), S, y, g, p, e.maxWidth), J = (N = !1) => {
      var C;
      e.originalNode && (N ? f.value = e.originalNode.value : (e.originalNode.value = f.value, (C = e.originalNode) == null || C.dispatchEvent(new Event("change", { bubbles: !0 })))), d("update:modelValue", f.value);
    };
    ne(() => S.value, (N) => {
      N === !1 && J();
    });
    const { list: $, containerProps: H, wrapperProps: re } = Oe(
      v,
      {
        itemHeight: 32
      }
    );
    return (N, C) => (w(), b(q, null, [
      oe(_("input", se({
        onFocus: C[0] || (C[0] = (L) => z(!0)),
        onClick: C[1] || (C[1] = (L) => z(!0)),
        ref_key: "inputNode",
        ref: y,
        "onUpdate:modelValue": C[2] || (C[2] = (L) => _e(f) ? f.value = L : null),
        class: "extra-select extra-select-input"
      }, N.$attrs, { disabled: t.disabled }), null, 16, yt), [
        [He, h(f)]
      ]),
      p.value ? (w(), ie(ce, {
        key: 0,
        to: p.value
      }, [
        oe(_("div", {
          class: xe(["extra-select dropdown", { searching: h(r) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Ce(h(M))
        }, [
          h(f).length >= e.minChars ? (w(), b(q, { key: 0 }, [
            h(v).length == 0 ? (w(), b("div", mt, T(h(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (w(), b("div", gt, T(h(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", se(h(H), { class: "scroller" }), [
            _("div", Ee(Ne(h(re))), [
              (w(!0), b(q, null, ae(h($), (L) => (w(), b("button", {
                key: L.index,
                class: "dropdown-row",
                onClick: B((A) => o(L.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", kt, T(L.data.value), 1)
              ], 8, wt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, S.value]
        ])
      ], 8, ["to"])) : V("", !0)
    ], 64));
  }
}), Et = ht, Nt = St;
export {
  Et as ExtraSelect,
  Nt as ExtraSuggest,
  Et as default
};
