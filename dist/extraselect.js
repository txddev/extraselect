import { ref as x, watchEffect as Y, computed as P, nextTick as ue, watchPostEffect as Be, useAttrs as ke, toRef as Q, watch as ne, onMounted as be, onUnmounted as Se, openBlock as w, createElementBlock as S, Fragment as q, unref as y, createCommentVNode as V, renderList as ae, withModifiers as B, createTextVNode as ge, toDisplayString as T, createElementVNode as _, mergeProps as se, createBlock as ie, Teleport as ce, withDirectives as oe, normalizeClass as xe, normalizeStyle as Ce, isRef as _e, vModelText as Pe, normalizeProps as Ee, guardReactiveProps as Ne, vShow as Le, vModelDynamic as He } from "vue";
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
let Je = 1;
const Ae = (t) => {
  t && (t.style.display = "none", We(t));
}, Fe = (t, i, e, c, a = null) => {
  const n = x(/* @__PURE__ */ new Map());
  Y(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let r of e.value)
        n.value.set(r, r);
    }
  });
  const l = x([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let r of l.value)
        l.map.set(r.key, r);
  }, Y(() => {
    i.value && (l.value = i.value.map((r) => ({ ...r, key: I(r.key) })), l.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((d) => I(d.value)).filter((d) => d != null))
        n.value.set(r, r);
      l.value = Array.apply(null, t.options).reduce((r, d) => (r.push({
        value: d.text,
        key: I(d.value),
        data: Object.keys(d.dataset).reduce((h, b) => (h[b] = Ue(d.dataset[b]), h), {})
      }), r), []);
    }
    if (t.matches("input")) {
      let r = t.value;
      r != null && r.length > 0 && (l.value = [{ value: r, key: r }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(c))
    for (let r of c)
      n.value.set(I(r), I(r));
  else
    c != null && n.value.set(I(c), I(c));
  (a == null || a === "" || a == 0) && (a = "extraselect_" + (++Je).toString()), De(l, n, a);
  const k = [];
  return n.value.forEach((r, d) => {
    k.push([d, r]);
  }), { options: l, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [r, d] of k)
      n.value.set(r, d);
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
  const f = x(0), r = x(!1), d = P(() => r.value || f.value > 0);
  if (i != null && i.length > 0)
    if (e) {
      const h = {};
      Y((b) => {
        var p;
        const o = (p = JSON.stringify(n.value)) != null ? p : "default";
        if (h[o] == null && (h[o] = []), c.value.length >= a) {
          let m = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              m = !h[o].includes(c.value);
              break;
            case "complete":
              m = h[o].reduce((g, v) => g && !c.value.startsWith(v), !0);
              break;
          }
          if (m) {
            r.value = !0;
            const g = setTimeout(() => {
              h[o].push(c.value), f.value += 1, k.body = { ...k.body, ...n.value }, we(i, c.value, k).then((v) => {
                t.actions.addRange(v), t.actions.sort(), f.value -= 1, r.value = !1;
              });
            }, 500);
            b(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      we(i, null, k).then((h) => {
        t.actions.addRange(h), t.actions.sort();
      });
  return { searchingFlag: d };
}, Me = (t, i, e, c = [], a = [], n = "exact") => {
  const l = x(""), k = x([]), f = x({}), r = { ...c.reduce((h, b) => (h[b] = !1, h), {}), ...a.reduce((h, b) => (h[b] = !0, h), {}) };
  for (let h in r) {
    let b = r[h], o = document.getElementById(h);
    f.value[h] = o == null ? void 0 : o.value, o && o.addEventListener("change", (p) => {
      f.value[h] = p.target.value, b && ue(() => {
        if (i != null)
          for (let m of Array.from(i.value.keys()))
            k.value.find((g) => g.key == m) || e(m, !1);
        else
          k.value.find((m) => m.key == l.value) || e(l.value, !1);
      });
    });
  }
  const d = function(h, b) {
    let o = h.value;
    if (Object.keys(f.value).length > 0 && (o = o.filter((p) => {
      var m, g;
      for (let v in f.value)
        if ((r[v] ? !0 : ((m = f.value[v]) != null ? m : "").length > 0) && ((g = p.data) == null ? void 0 : g.hasOwnProperty(v))) {
          if (Array.isArray(p.data[v])) {
            if (!p.data[v].includes(f.value[v]))
              return !1;
          } else if (p.data[v] != f.value[v])
            return !1;
        }
      return !0;
    })), b.length > 0)
      switch (n) {
        case "loose":
          const p = b.toLowerCase().split(" ").filter((m) => m.length > 0);
          o = o.filter((m) => {
            const g = m.value.toLowerCase();
            return p.every((v) => g.includes(v));
          });
          break;
        default:
          o = o.filter((m) => m.value.toLowerCase().includes(b.toLowerCase()));
          break;
      }
    return o;
  };
  return Y(() => {
    k.value = d(t, l.value);
  }), { filterText: l, filteredOptions: k, filterValues: f };
}, $e = (t, i, e, c, a, n, l) => {
  const k = getComputedStyle(document.querySelector("body")).font, r = document.createElement("canvas").getContext("2d");
  r.font = k;
  const d = function(o) {
    return r.measureText(o != null ? o : "").width;
  }, h = P(() => {
    var p, m;
    const o = (p = le(c.value).width) != null ? p : 100;
    if (l === "inherit")
      return o;
    if (l == null || l === "dynamic") {
      const g = (m = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? m : 16;
      return Math.max(o, Math.max(...t.value.map((v) => d(v.value))) + 20 + g * 3);
    }
    return l;
  }), b = x({
    position: "absolute",
    "min-width": "max-content"
  });
  return Be(() => {
    e.value < 0 && console.log("is open"), i.value.size < 0 && console.log("empty selection");
    var o = le(c.value), p = le(null);
    if (n.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n.value).position))
      var p = le(n.value);
    let m = -p.left + o.left;
    const g = window.document.documentElement.clientWidth;
    m + h.value > g && (m = g - h.value), b.value = {
      position: "absolute",
      "min-width": "max-content",
      width: h.value.toString() + "px",
      top: (-p.top + o.top + o.height).toString() + "px",
      left: m.toString() + "px"
    };
  }), { dropdownStyle: b, getTextWidth: d };
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
    const { options: n, selectedOptions: l, onReset: k } = Fe(e.originalNode, Q(e, "options"), Q(e, "modelValue"), e.initialValue, (ve = (fe = (de = e.originalNode) == null ? void 0 : de.id) != null ? fe : a.id) != null ? ve : null), { t: f } = Te(e.originalNode, Q(e, "localization")), r = (pe = e.originalNode) == null ? void 0 : pe.classList, d = Object.values((ye = (he = e.originalNode) == null ? void 0 : he.style) != null ? ye : {});
    Ae(e.originalNode);
    const h = i, b = (s, u = null) => {
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
    }, { filterText: o, filteredOptions: p, filterValues: m } = Me(n, l, b, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: g } = ze(
      n,
      e.url,
      e.searchableUrl,
      o,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), v = x(null), z = x(null), j = x(null), M = x(!1);
    function J(s) {
      e.disabled || (M.value = s);
    }
    ne(o, () => {
      z.value.querySelector(".scroller").scrollTop = 0;
    });
    const $ = x(null), H = function(s) {
      const u = D(s.target);
      u.push(s.target), !u.includes(v.value) && !u.includes(z.value) ? M.value = !1 : (s.stopImmediatePropagation(), s.preventDefault());
    };
    be(() => {
      if (e.dropdownContainer) {
        let s = !1;
        $.value = D(v.value).find((u) => !!(u instanceof Element && (u.matches(e.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(u).position))));
      }
      if ($.value == null && ($.value = document.querySelector("body")), e.originalNode) {
        for (let u of r)
          u != "extraselect" && v.value.classList.add(u);
        for (let u of d)
          v.value.style[u] = e.originalNode.style[u];
        let s = D(v.value, "form").pop();
        s instanceof HTMLElement && s.matches("form") && s.addEventListener("reset", () => setTimeout(k)), e.originalNode.toggleValue = b, e.originalNode.setValues = (u) => {
          l.value.clear();
          for (let O of u)
            b(O);
        };
      }
      window.document.addEventListener("mousedown", H), window.document.addEventListener("focusin", H);
    }), Se(() => {
      window.document.removeEventListener("mousedown", H), window.document.removeEventListener("focusin", H);
    });
    const { dropdownStyle: re, getTextWidth: Z } = $e(n, l, M, v, z, $, e.maxWidth), W = (s) => {
      ue(
        () => {
          var u;
          return (u = e.originalNode) == null ? void 0 : u.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), h("update:modelValue", s);
    }, K = (s) => {
      X(s, !1), o.value = "";
    }, X = (s, u = null) => {
      u == null && (u = !U.value), u ? (l.value.clear(), n.value.forEach((O) => l.value.set(O.key, O.key))) : l.value.clear(), W(Array.from(l.value.keys()));
    }, R = () => {
      N.value ? p.value.forEach((s) => {
        l.value.has(s.key) && l.value.delete(s.key);
      }) : p.value.forEach((s) => {
        l.value.has(s.key) || l.value.set(s.key, s.key);
      }), W(Array.from(l.value.keys()));
    };
    ne(M, (s, u) => {
      s != u && (s ? e.search && ue(() => {
        j.value.focus({ focusVisible: !0 });
      }) : o.value = "");
    });
    const U = P(() => l.value.size == n.value.length), N = P(() => p.value.reduce((s, u) => s && l.value.has(u.key), !0)), C = P(() => l.value.size == 0), L = P(() => {
      var s, u, O, G, E;
      if (n.value.length < 0)
        return "";
      if (c.value) {
        if (C.value)
          return f("No selection");
        if (!e.searchableUrl && U.value)
          return f("All selected");
        const F = v.value ? getComputedStyle(v.value) : null, ee = ((s = v.value) == null ? void 0 : s.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let te = f(":n selected - ", { n: l.value.size }), me = !0;
        for (let Ie of l.value)
          if (me ? me = !1 : te += ", ", te += (O = (u = n.map.get(Ie[0])) == null ? void 0 : u.value) != null ? O : g.value ? f("Loading...") : f("Value not found"), ee < Z(te))
            return l.value.size + f(" selected");
        return te;
      } else
        for (let F of l.value)
          return (E = (G = n.map.get(F[0])) == null ? void 0 : G.value) != null ? E : g.value ? f("Loading...") : f("Value not found");
      return f("No selection");
    }), { list: A, containerProps: qe, wrapperProps: je } = Oe(
      p,
      {
        itemHeight: 32
      }
    );
    return (s, u) => {
      var O, G;
      return w(), S(q, null, [
        c.value && y(l).size == 0 ? (w(), S("input", {
          key: 0,
          type: "hidden",
          name: (G = (O = e.originalNode) == null ? void 0 : O.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, Ye)) : V("", !0),
        e.showSelected ? (w(), S("div", Ze, [
          (w(!0), S(q, null, ae(y(l), (E) => {
            var F;
            return w(), S("div", {
              key: E,
              onClick: B((ee) => b(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ge(T((F = y(n).find((ee) => ee.key == E[0])) == null ? void 0 : F.value) + " ", 1),
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
          ref: v,
          value: L.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, s.$attrs, { disabled: t.disabled }), null, 16, et),
        $.value ? (w(), ie(ce, {
          key: 2,
          to: $.value
        }, [
          oe(_("div", {
            class: xe(["extra-select dropdown", { searching: y(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: z,
            style: Ce(y(re))
          }, [
            e.search ? (w(), S("div", tt, [
              oe(_("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": u[2] || (u[2] = (E) => _e(o) ? o.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: y(f)("Search...")
              }, null, 8, lt), [
                [Pe, y(o)]
              ])
            ])) : V("", !0),
            y(o).length >= e.minChars ? (w(), S(q, { key: 1 }, [
              c.value ? (w(), S("div", at, [
                y(o).length == 0 ? (w(), S("div", {
                  key: 0,
                  onClick: B(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", nt, [
                    _("input", {
                      checked: U.value,
                      type: "checkbox"
                    }, null, 8, st),
                    _("b", null, T(y(f)("Select all")), 1)
                  ])
                ])) : V("", !0),
                y(p).length > 0 && y(o).length > 0 ? (w(), S("div", {
                  key: 1,
                  onClick: B(R, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", ot, [
                    _("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, rt),
                    _("b", null, T(y(f)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                _("div", {
                  class: "clear",
                  onClick: B(K, ["stop", "prevent"])
                }, T(y(f)("Clear")), 1)
              ])) : V("", !0),
              y(p).length == 0 ? (w(), S("div", ut, T(y(f)("No matches found")), 1)) : V("", !0)
            ], 64)) : (w(), S("div", it, T(y(f)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", se(y(qe), { class: "scroller" }), [
              _("div", Ee(Ne(y(je))), [
                (w(!0), S(q, null, ae(y(A), (E) => (w(), S("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: B((F) => b(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", dt, [
                    c.value ? (w(), S("input", {
                      key: 0,
                      checked: y(l).has(E.data.key),
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
          (w(!0), S(q, null, ae(y(l), (E) => (w(), S("option", {
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
    const f = i, r = (N, C = null) => {
      C === !1 ? d.value = "" : d.value = a.map.get(N).value, g.value = !1;
    }, { filterText: d, filteredOptions: h, filterValues: b } = Me(a, null, r, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: o } = ze(
      a,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      b,
      e.fetchMode,
      e.fetchOptions
    ), p = x(null), m = x(null), g = x(!1), v = x(null);
    function z(N) {
      e.disabled || (g.value = N);
    }
    ne(d, () => {
      m.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = function(N) {
      const C = D(N.target);
      C.push(N.target), !C.includes(p.value) && !C.includes(m.value) && (g.value = !1);
    };
    be(() => {
      if (e.dropdownContainer) {
        let L = !1;
        v.value = D(p.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (v.value == null && (v.value = document.querySelector("body")), e.originalNode) {
        for (let A of l)
          A != "extrasuggest" && p.value.classList.add(A);
        for (let A of k)
          p.value.style[A] = e.originalNode.style[A];
        d.value = e.originalNode.value;
        let L = D(p.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(C)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      Y(() => {
        e.modelValue != null && (d.value = e.modelValue);
      });
      const N = d.value, C = () => {
        d.value = N;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), Se(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: M } = $e(a, x([]), g, p, m, v, e.maxWidth), J = (N = !1) => {
      var C;
      e.originalNode && (N ? d.value = e.originalNode.value : (e.originalNode.value = d.value, (C = e.originalNode) == null || C.dispatchEvent(new Event("change", { bubbles: !0 })))), f("update:modelValue", d.value);
    };
    ne(() => g.value, (N) => {
      N === !1 && J();
    });
    const { list: $, containerProps: H, wrapperProps: re } = Oe(
      h,
      {
        itemHeight: 32
      }
    );
    return (N, C) => (w(), S(q, null, [
      oe(_("input", se({
        onFocus: C[0] || (C[0] = (L) => z(!0)),
        onClick: C[1] || (C[1] = (L) => z(!0)),
        ref_key: "inputNode",
        ref: p,
        "onUpdate:modelValue": C[2] || (C[2] = (L) => _e(d) ? d.value = L : null),
        class: "extra-select extra-select-input"
      }, N.$attrs, { disabled: t.disabled }), null, 16, yt), [
        [He, y(d)]
      ]),
      v.value ? (w(), ie(ce, {
        key: 0,
        to: v.value
      }, [
        oe(_("div", {
          class: xe(["extra-select dropdown", { searching: y(o) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: Ce(y(M))
        }, [
          y(d).length >= e.minChars ? (w(), S(q, { key: 0 }, [
            y(h).length == 0 ? (w(), S("div", mt, T(y(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (w(), S("div", gt, T(y(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", se(y(H), { class: "scroller" }), [
            _("div", Ee(Ne(y(re))), [
              (w(!0), S(q, null, ae(y($), (L) => (w(), S("button", {
                key: L.index,
                class: "dropdown-row",
                onClick: B((A) => r(L.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", kt, T(L.data.value), 1)
              ], 8, wt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, g.value]
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
