import { unref as d, getCurrentScope as qe, onScopeDispose as je, getCurrentInstance as De, onMounted as ee, nextTick as ve, ref as y, shallowRef as We, watch as J, computed as A, watchEffect as F, watchPostEffect as Ue, onUnmounted as pe, openBlock as h, createElementBlock as w, Fragment as M, renderList as R, createTextVNode as se, toDisplayString as j, createElementVNode as S, createCommentVNode as P, createBlock as K, Teleport as X, withDirectives as Q, normalizeClass as he, normalizeStyle as ge, isRef as me, vModelText as ye, mergeProps as we, normalizeProps as be, guardReactiveProps as _e, withModifiers as ke, vShow as Oe, createApp as xe } from "vue";
const T = /* @__PURE__ */ new WeakMap();
class $ {
  static put(n, e, l) {
    T.has(n) || T.set(n, /* @__PURE__ */ new Map()), T.get(n).set(e, l);
  }
  static get(n, e) {
    return T.get(n).get(e);
  }
  static has(n, e) {
    return T.has(n) && T.get(n).has(e);
  }
  static remove(n, e) {
    var l = T.get(n).delete(e);
    return T.get(n).size !== 0 && T.delete(n), l;
  }
  static lock(n, e, l) {
    return $.has(n, e) ? !1 : ($.put(n, e, !0), l());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = T);
function H(t) {
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
function G(t, n) {
  n === void 0 && (n = window.document);
  for (var e = [], l = t.parentNode; l != null && l !== n; ) {
    var a = l;
    e.push(a), l = a.parentNode;
  }
  return e.push(n), e;
}
function He(t) {
  var n = Array.prototype.slice.call(t.childNodes);
  n.forEach(function(e) {
    t.removeChild(e);
  });
}
var re;
const D = typeof window < "u";
D && ((re = window == null ? void 0 : window.navigator) == null ? void 0 : re.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Re(t) {
  return typeof t == "function" ? t() : d(t);
}
function Qe(t) {
  return t;
}
function Ge(t) {
  return qe() ? (je(t), !0) : !1;
}
function Je(t, n = !0) {
  De() ? ee(t) : n ? t() : ve(t);
}
function Se(t) {
  var n;
  const e = Re(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const Ke = D ? window : void 0;
D && window.document;
D && window.navigator;
D && window.location;
function Xe(t, n = !1) {
  const e = y(), l = () => e.value = Boolean(t());
  return l(), Je(l, n), e;
}
const Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Z = "__vueuse_ssr_handlers__";
Y[Z] = Y[Z] || {};
Y[Z];
var ue = Object.getOwnPropertySymbols, Ye = Object.prototype.hasOwnProperty, Ze = Object.prototype.propertyIsEnumerable, et = (t, n) => {
  var e = {};
  for (var l in t)
    Ye.call(t, l) && n.indexOf(l) < 0 && (e[l] = t[l]);
  if (t != null && ue)
    for (var l of ue(t))
      n.indexOf(l) < 0 && Ze.call(t, l) && (e[l] = t[l]);
  return e;
};
function tt(t, n, e = {}) {
  const l = e, { window: a = Ke } = l, o = et(l, ["window"]);
  let r;
  const s = Xe(() => a && "ResizeObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, f = J(() => Se(t), (c) => {
    i(), s.value && a && c && (r = new ResizeObserver(n), r.observe(c, o));
  }, { immediate: !0, flush: "post" }), b = () => {
    i(), f();
  };
  return Ge(b), {
    isSupported: s,
    stop: b
  };
}
function nt(t, n = { width: 0, height: 0 }, e = {}) {
  const { box: l = "content-box" } = e, a = y(n.width), o = y(n.height);
  return tt(t, ([r]) => {
    const s = l === "border-box" ? r.borderBoxSize : l === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (a.value = s.reduce((i, { inlineSize: f }) => i + f, 0), o.value = s.reduce((i, { blockSize: f }) => i + f, 0)) : (a.value = r.contentRect.width, o.value = r.contentRect.height);
  }, e), J(() => Se(t), (r) => {
    a.value = r ? n.width : 0, o.value = r ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var ie;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(ie || (ie = {}));
var lt = Object.defineProperty, ce = Object.getOwnPropertySymbols, ot = Object.prototype.hasOwnProperty, at = Object.prototype.propertyIsEnumerable, de = (t, n, e) => n in t ? lt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, st = (t, n) => {
  for (var e in n || (n = {}))
    ot.call(n, e) && de(t, e, n[e]);
  if (ce)
    for (var e of ce(n))
      at.call(n, e) && de(t, e, n[e]);
  return t;
};
const rt = {
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
st({
  linear: Qe
}, rt);
function Ce(t, n) {
  const e = y(), l = nt(e), a = y([]), o = We(t), r = y({ start: 0, end: 10 }), { itemHeight: s, overscan: i = 5 } = n, f = (x) => {
    if (typeof s == "number")
      return Math.ceil(x / s);
    const { start: E = 0 } = r.value;
    let C = 0, N = 0;
    for (let p = E; p < o.value.length; p++)
      if (C += s(p), C >= x) {
        N = p;
        break;
      }
    return N - E;
  }, b = (x) => {
    if (typeof s == "number")
      return Math.floor(x / s) + 1;
    let E = 0, C = 0;
    for (let N = 0; N < o.value.length; N++)
      if (E += s(N), E >= x) {
        C = N;
        break;
      }
    return C + 1;
  }, c = () => {
    const x = e.value;
    if (x) {
      const E = b(x.scrollTop), C = f(x.clientHeight), N = E - i, p = E + C + i;
      r.value = {
        start: N < 0 ? 0 : N,
        end: p > o.value.length ? o.value.length : p
      }, a.value = o.value.slice(r.value.start, r.value.end).map((_, I) => ({
        data: _,
        index: I + r.value.start
      }));
    }
  };
  J([l.width, l.height, t], () => {
    c();
  });
  const g = A(() => typeof s == "number" ? o.value.length * s : o.value.reduce((x, E, C) => x + s(C), 0)), m = (x) => typeof s == "number" ? x * s : o.value.slice(0, x).reduce((C, N, p) => C + s(p), 0), O = (x) => {
    e.value && (e.value.scrollTop = m(x), c());
  }, L = A(() => m(r.value.start)), V = A(() => ({
    style: {
      width: "100%",
      height: `${g.value - L.value}px`,
      marginTop: `${L.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: O,
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
const ut = (t, n) => {
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
let it = 1;
const Ne = (t) => {
  t && (t.style.display = "none", He(t));
}, Ee = (t, n, e, l) => {
  var r;
  const a = y(/* @__PURE__ */ new Map());
  F(() => {
    a.value.clear();
    for (let s of e)
      a.value.set(s, s);
  });
  const o = y([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, F(() => {
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
  return ut(o, (r = t == null ? void 0 : t.id) != null ? r : "extraselect_" + (++it).toString()), { options: o, selectedOptions: a };
}, fe = async function(t, n = null, e = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...e.body })
  };
  return await (await fetch(t, l)).json();
}, Le = (t, n, e, l, a, o = "limited", r = {}) => {
  const s = y(0), i = y(!1), f = A(() => i.value || s.value > 0);
  if (n != null && n.length > 0)
    if (e) {
      const b = [];
      F((c) => {
        if (l.value.length >= a) {
          let g = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              g = !b.includes(l.value);
              break;
            case "complete":
              g = b.reduce((m, O) => m && !l.value.startsWith(O), !0);
              break;
          }
          if (g) {
            i.value = !0;
            const m = setTimeout(() => {
              b.push(l.value), s.value += 1, fe(n, l.value, r).then((O) => {
                t.actions.addRange(O), t.actions.sort(), s.value -= 1, i.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      fe(n, null, r).then((b) => {
        t.actions.addRange(b), t.actions.sort();
      });
  return { searchingFlag: f };
}, Ie = (t) => {
  const n = y(""), e = y([]), l = function(a, o) {
    return a.value.filter((s) => o.length > 0 ? s.value.toLowerCase().includes(o.toLowerCase()) : !0);
  };
  return F(() => {
    e.value = l(t, n.value);
  }), { filterText: n, filteredOptions: e };
}, Pe = (t, n, e, l, a, o, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, i = function(c) {
    const m = document.createElement("canvas").getContext("2d");
    return m.font = s, m.measureText(c).width;
  }, f = A(() => {
    var g, m;
    const c = (g = H(l.value).width) != null ? g : 100;
    if (r === "inherit")
      return c;
    if (r == null || r === "dynamic") {
      const O = (m = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? m : 16;
      return Math.max(c, Math.max(...t.value.map((L) => i(L.value))) + 20 + O * 3);
    }
    return r;
  }), b = y({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ue(() => {
    e.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var c = H(l.value), g = H(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var g = H(o.value);
    let m = -g.left + c.left;
    const O = window.document.documentElement.clientWidth;
    m + f.value > O && (m = O - f.value), b.value = {
      position: "absolute",
      "min-width": "max-content",
      width: f.value.toString() + "px",
      top: (-g.top + c.top + c.height).toString() + "px",
      left: m.toString() + "px"
    };
  }), { dropdownStyle: b, getTextWidth: i };
}, ct = {
  key: 0,
  class: "extra-select selection"
}, dt = ["onClick"], ft = ["innerHTML"], vt = ["value"], pt = {
  key: 0,
  class: "input-searching"
}, ht = {
  key: 0,
  class: "allselect-clear"
}, gt = { class: "row-input" }, mt = ["checked"], yt = /* @__PURE__ */ S("b", null, "Select all", -1), wt = { class: "row-input" }, bt = ["checked"], _t = /* @__PURE__ */ S("b", null, "Select Filtered", -1), kt = {
  key: 1,
  class: "no-matches"
}, Ot = { key: 2 }, xt = ["onClick"], St = { class: "row-input" }, Ct = ["checked"], Nt = ["value"], Et = {
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
    var ne, le, oe;
    const e = t, l = A(() => {
      var u, v;
      return (v = (u = e.originalNode) == null ? void 0 : u.multiple) != null ? v : e.multiple;
    }), { options: a, selectedOptions: o } = Ee(e.originalNode, e.options, e.modelValue, e.initialValue), r = (ne = e.originalNode) == null ? void 0 : ne.classList, s = Object.values((oe = (le = e.originalNode) == null ? void 0 : le.style) != null ? oe : {});
    Ne(e.originalNode);
    const { filterText: i, filteredOptions: f } = Ie(a, e.minChars), { searchingFlag: b } = Le(
      a,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), c = y(null), g = y(null), m = y(null), O = y(!1), L = y(null), V = function(u) {
      const v = G(u.target);
      v.push(u.target), !v.includes(c.value) && !v.includes(g.value) && (O.value = !1);
    };
    ee(() => {
      if (e.dropdownContainer) {
        let u = !1;
        L.value = G(c.value).find((v) => !!(v instanceof Element && (v.matches(e.dropdownContainer) && (u = !0), u && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(v).position))));
      }
      if (L.value == null && (L.value = document.querySelector("body")), e.originalNode) {
        for (let u of r)
          u != "extraselect" && c.value.classList.add(u);
        for (let u of s)
          c.value.style[u] = e.originalNode.style[u];
        s.includes("background-color") || (c.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", V), window.document.addEventListener("focusin", V);
    }), pe(() => {
      window.document.removeEventListener("mousedown", V), window.document.removeEventListener("focusin", V);
    });
    const { dropdownStyle: W, getTextWidth: x } = Pe(a, o, O, c, g, L, e.maxWidth), E = (u) => {
      l.value ? o.value.has(u) ? o.value.delete(u) : o.value.set(u, u) : (o.value.clear(), o.value.set(u, u), O.value = !1), n("update:modelValue", Array.from(o.value.keys()));
    }, C = (u) => {
      N(u, !1), i.value = "";
    }, N = (u, v = null) => {
      v == null && (v = !_.value), v ? (o.value.clear(), a.value.forEach((k) => o.value.set(k.key, k.key))) : o.value.clear(), n("update:modelValue", Array.from(o.value.keys()));
    }, p = () => {
      I.value ? f.value.forEach((u) => {
        o.value.has(u.key) && o.value.delete(u.key);
      }) : f.value.forEach((u) => {
        o.value.has(u.key) || o.value.set(u.key, u.key);
      }), n("update:modelValue", Array.from(o.value.keys()));
    };
    J(O, (u, v) => {
      u != v && (u ? e.search && ve(() => {
        m.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const _ = A(() => o.value.size == a.value.length), I = A(() => f.value.reduce((u, v) => u && o.value.has(v.key), !0)), te = A(() => o.value.size == 0), Ve = A(() => {
      var u, v, k, z, q;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (_.value)
          return "All selected";
        if (te.value)
          return "No selection";
        const B = c.value ? getComputedStyle(c.value) : null, ze = ((u = c.value) == null ? void 0 : u.clientWidth) - parseInt(B == null ? void 0 : B.paddingLeft) - parseInt(B == null ? void 0 : B.paddingRight);
        let U = o.value.size + " selected - ", ae = !0;
        for (let Fe of o.value)
          if (ae ? ae = !1 : U += ", ", U += (k = (v = a.map.get(Fe[0])) == null ? void 0 : v.value) != null ? k : b.value ? "Loading..." : "Value not found", ze < x(U))
            return o.value.size + " selected";
        return U;
      } else
        for (let B of o.value)
          return (q = (z = a.map.get(B[0])) == null ? void 0 : z.value) != null ? q : b.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Be, containerProps: Me, wrapperProps: $e } = Ce(
      f,
      {
        itemHeight: 32
      }
    );
    return (u, v) => (h(), w(M, null, [
      e.showSelected ? (h(), w("div", ct, [
        (h(!0), w(M, null, R(d(o), (k) => {
          var z;
          return h(), w("div", {
            key: k,
            onClick: (q) => E(k[0]),
            class: "selection-badge"
          }, [
            se(j((z = d(a).find((q) => q.key == k[0])) == null ? void 0 : z.value) + " ", 1),
            S("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, ft)
          ], 8, dt);
        }), 128))
      ])) : P("", !0),
      S("input", {
        onFocus: v[0] || (v[0] = (k) => O.value = !0),
        onClick: v[1] || (v[1] = (k) => O.value = !0),
        ref_key: "inputNode",
        ref: c,
        value: d(Ve),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, vt),
      L.value ? (h(), K(X, {
        key: 1,
        to: L.value
      }, [
        Q(S("div", {
          class: he(["extra-select dropdown", { searching: d(b) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: ge(d(W))
        }, [
          e.search ? (h(), w("div", pt, [
            Q(S("input", {
              ref_key: "searchNode",
              ref: m,
              class: "extra-select-search",
              "onUpdate:modelValue": v[2] || (v[2] = (k) => me(i) ? i.value = k : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [ye, d(i)]
            ])
          ])) : P("", !0),
          d(i).length >= e.minChars ? (h(), w(M, { key: 1 }, [
            d(l) ? (h(), w("div", ht, [
              d(i).length == 0 ? (h(), w("div", {
                key: 0,
                onClick: N,
                class: "all-select"
              }, [
                S("div", gt, [
                  S("input", {
                    checked: d(_),
                    type: "checkbox"
                  }, null, 8, mt),
                  yt
                ])
              ])) : P("", !0),
              d(f).length > 0 && d(i).length > 0 ? (h(), w("div", {
                key: 1,
                onClick: p,
                class: "all-select"
              }, [
                S("div", wt, [
                  S("input", {
                    checked: d(I),
                    type: "checkbox"
                  }, null, 8, bt),
                  _t
                ])
              ])) : P("", !0),
              S("div", {
                class: "clear",
                onClick: C
              }, "Clear")
            ])) : P("", !0),
            d(f).length == 0 ? (h(), w("div", kt, "No matches found")) : P("", !0)
          ], 64)) : (h(), w("div", Ot, "Insert at least " + j(e.minChars) + " characters", 1)),
          S("div", we(d(Me), { class: "scroller" }), [
            S("div", be(_e(d($e))), [
              (h(!0), w(M, null, R(d(Be), (k) => (h(), w("button", {
                key: k.index,
                class: "dropdown-row",
                onClick: ke((z) => E(k.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", St, [
                  d(l) ? (h(), w("input", {
                    key: 0,
                    checked: d(o).has(k.data.key),
                    type: "checkbox"
                  }, null, 8, Ct)) : P("", !0),
                  se(" " + j(k.data.value), 1)
                ])
              ], 8, xt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Oe, O.value]
        ])
      ], 8, ["to"])) : P("", !0),
      e.originalNode ? (h(), K(X, {
        key: 2,
        to: e.originalNode
      }, [
        (h(!0), w(M, null, R(d(o), (k) => (h(), w("option", {
          key: k[0],
          selected: "selected",
          value: k[0]
        }, null, 8, Nt))), 128))
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}, Lt = {
  key: 0,
  class: "no-matches"
}, It = { key: 1 }, Pt = ["onClick"], Tt = { class: "row-input" }, At = {
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
    var E, C, N;
    const e = t, { options: l } = Ee(null, e.options, []), a = (E = e.originalNode) == null ? void 0 : E.classList, o = Object.values((N = (C = e.originalNode) == null ? void 0 : C.style) != null ? N : {});
    Ne(e.originalNode);
    const { filterText: r, filteredOptions: s } = Ie(l, e.minChars), { searchingFlag: i } = Le(
      l,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      e.fetchMode,
      e.fetchOptions
    ), f = y(null), b = y(null), c = y(!1), g = y(null), m = function(p) {
      const _ = G(p.target);
      _.push(p.target), !_.includes(f.value) && !_.includes(b.value) && (c.value = !1);
    };
    ee(() => {
      if (e.dropdownContainer) {
        let p = !1;
        g.value = G(f.value).find((_) => !!(_ instanceof Element && (_.matches(e.dropdownContainer) && (p = !0), p && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(_).position))));
      }
      if (g.value == null && (g.value = document.querySelector("body")), e.originalNode) {
        for (let p of a)
          p != "extraselect" && f.value.classList.add(p);
        for (let p of o)
          f.value.style[p] = e.originalNode.style[p];
        o.includes("background-color") || (f.value.style.backgroundColor = "white"), r.value = e.originalNode.value, F(() => {
          e.modelValue != null && (r.value = e.modelValue);
        }), F(() => {
          e.originalNode.value = r.value;
        });
      }
      window.document.addEventListener("mousedown", m), window.document.addEventListener("focusin", m);
    }), pe(() => {
      window.document.removeEventListener("mousedown", m), window.document.removeEventListener("focusin", m);
    });
    const { dropdownStyle: O } = Pe(l, y([]), c, f, b, g, e.maxWidth), L = (p) => {
      r.value = l.map.get(p).value, c.value = !1, n("update:modelValue", r.value);
    }, { list: V, containerProps: W, wrapperProps: x } = Ce(
      s,
      {
        itemHeight: 32
      }
    );
    return (p, _) => (h(), w(M, null, [
      Q(S("input", {
        onFocus: _[0] || (_[0] = (I) => c.value = !0),
        onClick: _[1] || (_[1] = (I) => c.value = !0),
        ref_key: "inputNode",
        ref: f,
        "onUpdate:modelValue": _[2] || (_[2] = (I) => me(r) ? r.value = I : null),
        class: "extra-select extra-select-input"
      }, null, 544), [
        [ye, d(r)]
      ]),
      g.value ? (h(), K(X, {
        key: 0,
        to: g.value
      }, [
        Q(S("div", {
          class: he(["extra-select dropdown", { searching: d(i) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: ge(d(O))
        }, [
          d(r).length >= e.minChars ? (h(), w(M, { key: 0 }, [
            d(s).length == 0 ? (h(), w("div", Lt, "No matches found")) : P("", !0)
          ], 64)) : (h(), w("div", It, "Insert at least " + j(e.minChars) + " characters", 1)),
          S("div", we(d(W), { class: "scroller" }), [
            S("div", be(_e(d(x))), [
              (h(!0), w(M, null, R(d(V), (I) => (h(), w("button", {
                key: I.index,
                class: "dropdown-row",
                onClick: ke((te) => L(I.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", Tt, j(I.data.value), 1)
              ], 8, Pt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Oe, c.value]
        ])
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}, Te = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Te.bindNew(t);
    });
  },
  bindNew(t) {
    $.lock(t, "extra-select", () => {
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
      const l = xe(Et, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), $.remove(t, "extra-select");
      });
    });
  }
}, Ae = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Ae.bindNew(t);
    });
  },
  bindNew(t) {
    $.lock(t, "extra-suggest", () => {
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
      const l = xe(At, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), $.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Te.init(), Ae.init();
});
export {
  Te as ExtraSelect,
  Ae as ExtraSuggest,
  Te as default
};
