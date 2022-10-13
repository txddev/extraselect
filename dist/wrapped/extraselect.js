import { unref as f, getCurrentScope as je, onScopeDispose as De, getCurrentInstance as We, onMounted as te, nextTick as pe, ref as y, shallowRef as Ue, watch as W, computed as M, watchEffect as D, watchPostEffect as He, onUnmounted as he, openBlock as p, createElementBlock as w, Fragment as $, renderList as G, createTextVNode as re, toDisplayString as j, createElementVNode as S, createCommentVNode as P, createBlock as X, Teleport as Y, withDirectives as J, normalizeClass as ge, normalizeStyle as me, isRef as ye, vModelText as we, mergeProps as be, normalizeProps as _e, guardReactiveProps as ke, withModifiers as Oe, vShow as xe, createApp as Se } from "vue";
const A = /* @__PURE__ */ new WeakMap();
class z {
  static put(n, e, l) {
    A.has(n) || A.set(n, /* @__PURE__ */ new Map()), A.get(n).set(e, l);
  }
  static get(n, e) {
    return A.get(n).get(e);
  }
  static has(n, e) {
    return A.has(n) && A.get(n).has(e);
  }
  static remove(n, e) {
    var l = A.get(n).delete(e);
    return A.get(n).size !== 0 && A.delete(n), l;
  }
  static lock(n, e, l) {
    return z.has(n, e) ? !1 : (z.put(n, e, !0), l());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = A);
function Q(t) {
  if (t == null)
    return { top: 0, left: 0, width: null, height: null };
  let n = t.getBoundingClientRect();
  return {
    top: n.top + window.scrollY,
    left: n.left + window.scrollX,
    width: n.width,
    height: n.height
  };
}
function K(t, n) {
  n === void 0 && (n = window.document);
  for (var e = [], l = t.parentNode; l != null && l !== n; ) {
    var a = l;
    e.push(a), l = a.parentNode;
  }
  return e.push(n), e;
}
function Re(t) {
  var n = Array.prototype.slice.call(t.childNodes);
  n.forEach(function(e) {
    t.removeChild(e);
  });
}
var ue;
const U = typeof window < "u";
U && ((ue = window == null ? void 0 : window.navigator) == null ? void 0 : ue.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qe(t) {
  return typeof t == "function" ? t() : f(t);
}
function Ge(t) {
  return t;
}
function Je(t) {
  return je() ? (De(t), !0) : !1;
}
function Ke(t, n = !0) {
  We() ? te(t) : n ? t() : pe(t);
}
function Ce(t) {
  var n;
  const e = Qe(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const Xe = U ? window : void 0;
U && window.document;
U && window.navigator;
U && window.location;
function Ye(t, n = !1) {
  const e = y(), l = () => e.value = Boolean(t());
  return l(), Ke(l, n), e;
}
const Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ee = "__vueuse_ssr_handlers__";
Z[ee] = Z[ee] || {};
Z[ee];
var ie = Object.getOwnPropertySymbols, Ze = Object.prototype.hasOwnProperty, et = Object.prototype.propertyIsEnumerable, tt = (t, n) => {
  var e = {};
  for (var l in t)
    Ze.call(t, l) && n.indexOf(l) < 0 && (e[l] = t[l]);
  if (t != null && ie)
    for (var l of ie(t))
      n.indexOf(l) < 0 && et.call(t, l) && (e[l] = t[l]);
  return e;
};
function nt(t, n, e = {}) {
  const l = e, { window: a = Xe } = l, o = tt(l, ["window"]);
  let r;
  const s = Ye(() => a && "ResizeObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, v = W(() => Ce(t), (c) => {
    i(), s.value && a && c && (r = new ResizeObserver(n), r.observe(c, o));
  }, { immediate: !0, flush: "post" }), b = () => {
    i(), v();
  };
  return Je(b), {
    isSupported: s,
    stop: b
  };
}
function lt(t, n = { width: 0, height: 0 }, e = {}) {
  const { box: l = "content-box" } = e, a = y(n.width), o = y(n.height);
  return nt(t, ([r]) => {
    const s = l === "border-box" ? r.borderBoxSize : l === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (a.value = s.reduce((i, { inlineSize: v }) => i + v, 0), o.value = s.reduce((i, { blockSize: v }) => i + v, 0)) : (a.value = r.contentRect.width, o.value = r.contentRect.height);
  }, e), W(() => Ce(t), (r) => {
    a.value = r ? n.width : 0, o.value = r ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var ce;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(ce || (ce = {}));
var ot = Object.defineProperty, de = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, st = Object.prototype.propertyIsEnumerable, fe = (t, n, e) => n in t ? ot(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, rt = (t, n) => {
  for (var e in n || (n = {}))
    at.call(n, e) && fe(t, e, n[e]);
  if (de)
    for (var e of de(n))
      st.call(n, e) && fe(t, e, n[e]);
  return t;
};
const ut = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
rt({
  linear: Ge
}, ut);
function Ee(t, n) {
  const e = y(), l = lt(e), a = y([]), o = Ue(t), r = y({ start: 0, end: 10 }), { itemHeight: s, overscan: i = 5 } = n, v = (O) => {
    if (typeof s == "number")
      return Math.ceil(O / s);
    const { start: E = 0 } = r.value;
    let C = 0, N = 0;
    for (let L = E; L < o.value.length; L++)
      if (C += s(L), C >= O) {
        N = L;
        break;
      }
    return N - E;
  }, b = (O) => {
    if (typeof s == "number")
      return Math.floor(O / s) + 1;
    let E = 0, C = 0;
    for (let N = 0; N < o.value.length; N++)
      if (E += s(N), E >= O) {
        C = N;
        break;
      }
    return C + 1;
  }, c = () => {
    const O = e.value;
    if (O) {
      const E = b(O.scrollTop), C = v(O.clientHeight), N = E - i, L = E + C + i;
      r.value = {
        start: N < 0 ? 0 : N,
        end: L > o.value.length ? o.value.length : L
      }, a.value = o.value.slice(r.value.start, r.value.end).map((m, x) => ({
        data: m,
        index: x + r.value.start
      }));
    }
  };
  W([l.width, l.height, t], () => {
    c();
  });
  const h = M(() => typeof s == "number" ? o.value.length * s : o.value.reduce((O, E, C) => O + s(C), 0)), g = (O) => typeof s == "number" ? O * s : o.value.slice(0, O).reduce((C, N, L) => C + s(L), 0), k = (O) => {
    e.value && (e.value.scrollTop = g(O), c());
  }, I = M(() => g(r.value.start)), V = M(() => ({
    style: {
      width: "100%",
      height: `${h.value - I.value}px`,
      marginTop: `${I.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: k,
    containerProps: {
      ref: e,
      onScroll: () => {
        c();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: V
  };
}
const it = (t, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (l, a, o = null) => {
      const r = t.map.get(l);
      if (r)
        r.value = a, r.data = o;
      else {
        let s = { value: a, key: l, data: o };
        t.value.push(s), t.map.set(s.key, s);
      }
    },
    addRange: (l) => {
      for (let a of l)
        t.actions.push(a.key, a.value, a.data);
    },
    remove: (l) => {
      t.value.splice(t.value.findIndex((a) => a.key == l), 1);
    },
    clear: () => {
      t.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (a, o) => a.value.localeCompare(o.value)), t.value = t.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      t.value = this.defaultArray;
    },
    filter: function(l) {
    }
  };
  window.ExtraSelectOptions[n] = e, t.actions = e;
};
let ct = 1;
const Ne = (t) => {
  t && (t.style.display = "none", Re(t));
}, Le = (t, n, e, l) => {
  var r;
  const a = y(/* @__PURE__ */ new Map());
  D(() => {
    a.value.clear();
    for (let s of e)
      a.value.set(s, s);
  });
  const o = y([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, D(() => {
    n && (o.value = n, o.rebuildMap());
  }), t) {
    a.value.clear();
    for (let s of Array.apply(null, t.selectedOptions).map((i) => i.value).filter((i) => i))
      a.value.set(s, s);
    o.value = Array.apply(null, t.options).reduce((s, i) => (s.push({ value: i.text, key: i.value, data: i.dataset }), s), []), o.rebuildMap();
  }
  if (Array.isArray(l))
    for (let s of l)
      a.value.set(s, s);
  else
    l != null && a.value.set(l, l);
  return it(o, (r = t == null ? void 0 : t.id) != null ? r : "extraselect_" + (++ct).toString()), { options: o, selectedOptions: a };
}, ve = async function(t, n = null, e = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...e.body })
  };
  return await (await fetch(t, l)).json();
}, Ie = (t, n, e, l, a, o = "limited", r = {}) => {
  const s = y(0), i = y(!1), v = M(() => i.value || s.value > 0);
  if (n != null && n.length > 0)
    if (e) {
      const b = [];
      D((c) => {
        if (l.value.length >= a) {
          let h = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              h = !b.includes(l.value);
              break;
            case "complete":
              h = b.reduce((g, k) => g && !l.value.startsWith(k), !0);
              break;
          }
          if (h) {
            i.value = !0;
            const g = setTimeout(() => {
              b.push(l.value), s.value += 1, ve(n, l.value, r).then((k) => {
                t.actions.addRange(k), t.actions.sort(), s.value -= 1, i.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      ve(n, null, r).then((b) => {
        t.actions.addRange(b), t.actions.sort();
      });
  return { searchingFlag: v };
}, Pe = (t) => {
  const n = y(""), e = y([]), l = function(a, o) {
    return a.value.filter((s) => o.length > 0 ? s.value.toLowerCase().includes(o.toLowerCase()) : !0);
  };
  return D(() => {
    e.value = l(t, n.value);
  }), { filterText: n, filteredOptions: e };
}, Te = (t, n, e, l, a, o, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, i = function(c) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = s, g.measureText(c).width;
  }, v = M(() => {
    var h, g;
    const c = (h = Q(l.value).width) != null ? h : 100;
    if (r === "inherit")
      return c;
    if (r == null || r === "dynamic") {
      const k = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(c, Math.max(...t.value.map((I) => i(I.value))) + 20 + k * 3);
    }
    return r;
  }), b = y({
    position: "absolute",
    "min-width": "max-content"
  });
  return He(() => {
    e.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var c = Q(l.value), h = Q(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var h = Q(o.value);
    let g = -h.left + c.left;
    const k = window.document.documentElement.clientWidth;
    g + v.value > k && (g = k - v.value), b.value = {
      position: "absolute",
      "min-width": "max-content",
      width: v.value.toString() + "px",
      top: (-h.top + c.top + c.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: b, getTextWidth: i };
}, dt = {
  key: 0,
  class: "extra-select selection"
}, ft = ["onClick"], vt = ["innerHTML"], pt = ["value"], ht = {
  key: 0,
  class: "input-searching"
}, gt = {
  key: 0,
  class: "allselect-clear"
}, mt = { class: "row-input" }, yt = ["checked"], wt = /* @__PURE__ */ S("b", null, "Select all", -1), bt = { class: "row-input" }, _t = ["checked"], kt = /* @__PURE__ */ S("b", null, "Select Filtered", -1), Ot = {
  key: 1,
  class: "no-matches"
}, xt = { key: 2 }, St = ["onClick"], Ct = { class: "row-input" }, Et = ["checked"], Nt = ["value"], Lt = {
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
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    var le, oe, ae;
    const e = t, l = M(() => {
      var u, d;
      return (d = (u = e.originalNode) == null ? void 0 : u.multiple) != null ? d : e.multiple;
    }), { options: a, selectedOptions: o } = Le(e.originalNode, e.options, e.modelValue, e.initialValue), r = (le = e.originalNode) == null ? void 0 : le.classList, s = Object.values((ae = (oe = e.originalNode) == null ? void 0 : oe.style) != null ? ae : {});
    Ne(e.originalNode);
    const { filterText: i, filteredOptions: v } = Pe(a, e.minChars), { searchingFlag: b } = Ie(
      a,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), c = y(null), h = y(null), g = y(null), k = y(!1), I = y(null), V = function(u) {
      const d = K(u.target);
      d.push(u.target), !d.includes(c.value) && !d.includes(h.value) && (k.value = !1);
    };
    te(() => {
      if (e.dropdownContainer) {
        let u = !1;
        I.value = K(c.value).find((d) => !!(d instanceof Element && (d.matches(e.dropdownContainer) && (u = !0), u && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(d).position))));
      }
      if (I.value == null && (I.value = document.querySelector("body")), e.originalNode) {
        for (let u of r)
          u != "extraselect" && c.value.classList.add(u);
        for (let u of s)
          c.value.style[u] = e.originalNode.style[u];
        s.includes("background-color") || (c.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", V), window.document.addEventListener("focusin", V);
    }), he(() => {
      window.document.removeEventListener("mousedown", V), window.document.removeEventListener("focusin", V);
    });
    const { dropdownStyle: H, getTextWidth: O } = Te(a, o, k, c, h, I, e.maxWidth), E = (u) => {
      var d;
      (d = e.originalNode) == null || d.dispatchEvent(new Event("change", { bubbles: !0 })), n("update:modelValue", u);
    }, C = (u) => {
      l.value ? o.value.has(u) ? o.value.delete(u) : o.value.set(u, u) : (o.value.clear(), o.value.set(u, u), k.value = !1), E(Array.from(o.value.keys()));
    }, N = (u) => {
      L(u, !1), i.value = "";
    }, L = (u, d = null) => {
      d == null && (d = !x.value), d ? (o.value.clear(), a.value.forEach((_) => o.value.set(_.key, _.key))) : o.value.clear(), E(Array.from(o.value.keys()));
    }, m = () => {
      T.value ? v.value.forEach((u) => {
        o.value.has(u.key) && o.value.delete(u.key);
      }) : v.value.forEach((u) => {
        o.value.has(u.key) || o.value.set(u.key, u.key);
      }), E(Array.from(o.value.keys()));
    };
    W(k, (u, d) => {
      u != d && (u ? e.search && pe(() => {
        g.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const x = M(() => o.value.size == a.value.length), T = M(() => v.value.reduce((u, d) => u && o.value.has(d.key), !0)), ne = M(() => o.value.size == 0), Ve = M(() => {
      var u, d, _, F, q;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (x.value)
          return "All selected";
        if (ne.value)
          return "No selection";
        const B = c.value ? getComputedStyle(c.value) : null, Fe = ((u = c.value) == null ? void 0 : u.clientWidth) - parseInt(B == null ? void 0 : B.paddingLeft) - parseInt(B == null ? void 0 : B.paddingRight);
        let R = o.value.size + " selected - ", se = !0;
        for (let qe of o.value)
          if (se ? se = !1 : R += ", ", R += (_ = (d = a.map.get(qe[0])) == null ? void 0 : d.value) != null ? _ : b.value ? "Loading..." : "Value not found", Fe < O(R))
            return o.value.size + " selected";
        return R;
      } else
        for (let B of o.value)
          return (q = (F = a.map.get(B[0])) == null ? void 0 : F.value) != null ? q : b.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Be, containerProps: $e, wrapperProps: ze } = Ee(
      v,
      {
        itemHeight: 32
      }
    );
    return (u, d) => (p(), w($, null, [
      e.showSelected ? (p(), w("div", dt, [
        (p(!0), w($, null, G(f(o), (_) => {
          var F;
          return p(), w("div", {
            key: _,
            onClick: (q) => C(_[0]),
            class: "selection-badge"
          }, [
            re(j((F = f(a).find((q) => q.key == _[0])) == null ? void 0 : F.value) + " ", 1),
            S("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, vt)
          ], 8, ft);
        }), 128))
      ])) : P("", !0),
      S("input", {
        onFocus: d[0] || (d[0] = (_) => k.value = !0),
        onClick: d[1] || (d[1] = (_) => k.value = !0),
        ref_key: "inputNode",
        ref: c,
        value: f(Ve),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, pt),
      I.value ? (p(), X(Y, {
        key: 1,
        to: I.value
      }, [
        J(S("div", {
          class: ge(["extra-select dropdown", { searching: f(b) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: me(f(H))
        }, [
          e.search ? (p(), w("div", ht, [
            J(S("input", {
              ref_key: "searchNode",
              ref: g,
              class: "extra-select-search",
              "onUpdate:modelValue": d[2] || (d[2] = (_) => ye(i) ? i.value = _ : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [we, f(i)]
            ])
          ])) : P("", !0),
          f(i).length >= e.minChars ? (p(), w($, { key: 1 }, [
            f(l) ? (p(), w("div", gt, [
              f(i).length == 0 ? (p(), w("div", {
                key: 0,
                onClick: L,
                class: "all-select"
              }, [
                S("div", mt, [
                  S("input", {
                    checked: f(x),
                    type: "checkbox"
                  }, null, 8, yt),
                  wt
                ])
              ])) : P("", !0),
              f(v).length > 0 && f(i).length > 0 ? (p(), w("div", {
                key: 1,
                onClick: m,
                class: "all-select"
              }, [
                S("div", bt, [
                  S("input", {
                    checked: f(T),
                    type: "checkbox"
                  }, null, 8, _t),
                  kt
                ])
              ])) : P("", !0),
              S("div", {
                class: "clear",
                onClick: N
              }, "Clear")
            ])) : P("", !0),
            f(v).length == 0 ? (p(), w("div", Ot, "No matches found")) : P("", !0)
          ], 64)) : (p(), w("div", xt, "Insert at least " + j(e.minChars) + " characters", 1)),
          S("div", be(f($e), { class: "scroller" }), [
            S("div", _e(ke(f(ze))), [
              (p(!0), w($, null, G(f(Be), (_) => (p(), w("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: Oe((F) => C(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", Ct, [
                  f(l) ? (p(), w("input", {
                    key: 0,
                    checked: f(o).has(_.data.key),
                    type: "checkbox"
                  }, null, 8, Et)) : P("", !0),
                  re(" " + j(_.data.value), 1)
                ])
              ], 8, St))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, k.value]
        ])
      ], 8, ["to"])) : P("", !0),
      e.originalNode ? (p(), X(Y, {
        key: 2,
        to: e.originalNode
      }, [
        (p(!0), w($, null, G(f(o), (_) => (p(), w("option", {
          key: _[0],
          selected: "selected",
          value: _[0]
        }, null, 8, Nt))), 128))
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}, It = {
  key: 0,
  class: "no-matches"
}, Pt = { key: 1 }, Tt = ["onClick"], At = { class: "row-input" }, Mt = {
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    var C, N, L;
    const e = t, { options: l } = Le(null, e.options, []), a = (C = e.originalNode) == null ? void 0 : C.classList, o = Object.values((L = (N = e.originalNode) == null ? void 0 : N.style) != null ? L : {});
    Ne(e.originalNode);
    const { filterText: r, filteredOptions: s } = Pe(l, e.minChars), { searchingFlag: i } = Ie(
      l,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), v = y(null), b = y(null), c = y(!1), h = y(null), g = function(m) {
      const x = K(m.target);
      x.push(m.target), !x.includes(v.value) && !x.includes(b.value) && (c.value = !1);
    };
    te(() => {
      if (e.dropdownContainer) {
        let m = !1;
        h.value = K(v.value).find((x) => !!(x instanceof Element && (x.matches(e.dropdownContainer) && (m = !0), m && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(x).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let m of a)
          m != "extrasuggest" && v.value.classList.add(m);
        for (let m of o)
          v.value.style[m] = e.originalNode.style[m];
        o.includes("background-color") || (v.value.style.backgroundColor = "white"), r.value = e.originalNode.value, D(() => {
          e.modelValue != null && (r.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", g), window.document.addEventListener("focusin", g);
    }), he(() => {
      window.document.removeEventListener("mousedown", g), window.document.removeEventListener("focusin", g);
    });
    const { dropdownStyle: k } = Te(l, y([]), c, v, b, h, e.maxWidth), I = (m) => {
      r.value = l.map.get(m).value, c.value = !1;
    }, V = () => {
      var m;
      e.originalNode && (e.originalNode.value = r.value, (m = e.originalNode) == null || m.dispatchEvent(new Event("change", { bubbles: !0 }))), n("update:modelValue", r.value);
    };
    W(() => c.value, (m) => {
      m === !1 && V();
    });
    const { list: H, containerProps: O, wrapperProps: E } = Ee(
      s,
      {
        itemHeight: 32
      }
    );
    return (m, x) => (p(), w($, null, [
      J(S("input", {
        onFocus: x[0] || (x[0] = (T) => c.value = !0),
        onClick: x[1] || (x[1] = (T) => c.value = !0),
        ref_key: "inputNode",
        ref: v,
        "onUpdate:modelValue": x[2] || (x[2] = (T) => ye(r) ? r.value = T : null),
        class: "extra-select extra-select-input"
      }, null, 544), [
        [we, f(r)]
      ]),
      h.value ? (p(), X(Y, {
        key: 0,
        to: h.value
      }, [
        J(S("div", {
          class: ge(["extra-select dropdown", { searching: f(i) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: me(f(k))
        }, [
          f(r).length >= e.minChars ? (p(), w($, { key: 0 }, [
            f(s).length == 0 ? (p(), w("div", It, "No matches found")) : P("", !0)
          ], 64)) : (p(), w("div", Pt, "Insert at least " + j(e.minChars) + " characters", 1)),
          S("div", be(f(O), { class: "scroller" }), [
            S("div", _e(ke(f(E))), [
              (p(!0), w($, null, G(f(H), (T) => (p(), w("button", {
                key: T.index,
                class: "dropdown-row",
                onClick: Oe((ne) => I(T.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", At, j(T.data.value), 1)
              ], 8, Tt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, c.value]
        ])
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}, Ae = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Ae.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-select", () => {
      const n = {};
      for (let a in t.dataset)
        try {
          n[a] = JSON.parse(t.dataset[a]);
        } catch {
          n[a] = t.dataset[a];
        }
      n.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const l = Se(Lt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
      });
    });
  }
}, Me = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Me.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-suggest", () => {
      const n = {};
      for (let a in t.dataset)
        try {
          n[a] = JSON.parse(t.dataset[a]);
        } catch {
          n[a] = t.dataset[a];
        }
      n.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const l = Se(Mt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Ae.init(), Me.init();
});
export {
  Ae as ExtraSelect,
  Me as ExtraSuggest
};
