import { unref as h, getCurrentScope as Ue, onScopeDispose as We, getCurrentInstance as De, onMounted as re, nextTick as Z, ref as b, shallowRef as Qe, watch as G, computed as $, watchEffect as Q, watchPostEffect as Ge, toRef as le, onUnmounted as we, openBlock as g, createElementBlock as k, Fragment as z, createCommentVNode as P, renderList as Y, createTextVNode as fe, toDisplayString as D, createElementVNode as x, mergeProps as ee, createBlock as ne, Teleport as ae, withDirectives as te, normalizeClass as be, normalizeStyle as ke, isRef as _e, vModelText as Je, normalizeProps as Oe, guardReactiveProps as Se, withModifiers as xe, vShow as Ce, vModelDynamic as Ke, createApp as Ee } from "vue";
const B = /* @__PURE__ */ new WeakMap();
class R {
  static put(l, e, n) {
    B.has(l) || B.set(l, /* @__PURE__ */ new Map()), B.get(l).set(e, n);
  }
  static get(l, e) {
    return B.get(l).get(e);
  }
  static has(l, e) {
    return B.has(l) && B.get(l).has(e);
  }
  static remove(l, e) {
    var n = B.get(l).delete(e);
    return B.get(l).size !== 0 && B.delete(l), n;
  }
  static lock(l, e, n) {
    return R.has(l, e) ? !1 : (R.put(l, e, !0), n());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = B);
function X(t) {
  if (t == null)
    return { top: 0, left: 0, width: null, height: null };
  let l = t.getBoundingClientRect();
  return {
    top: l.top + window.scrollY,
    left: l.left + window.scrollX,
    width: l.width,
    height: l.height
  };
}
function W(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], n = t.parentNode; n != null && n instanceof HTMLElement && !(l instanceof HTMLElement && n === l) && !(typeof l == "string" && n.matches(l)); ) {
    var o = n;
    e.push(o), n = o.parentNode;
  }
  return n != null && e.push(n), e;
}
function Xe(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var ve;
const J = typeof window < "u";
J && ((ve = window == null ? void 0 : window.navigator) == null ? void 0 : ve.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ye(t) {
  return typeof t == "function" ? t() : h(t);
}
function Ze(t) {
  return t;
}
function et(t) {
  return Ue() ? (We(t), !0) : !1;
}
function tt(t, l = !0) {
  De() ? re(t) : l ? t() : Z(t);
}
function Ne(t) {
  var l;
  const e = Ye(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const lt = J ? window : void 0;
J && window.document;
J && window.navigator;
J && window.location;
function nt(t, l = !1) {
  const e = b(), n = () => e.value = Boolean(t());
  return n(), tt(n, l), e;
}
const oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, se = "__vueuse_ssr_handlers__";
oe[se] = oe[se] || {};
oe[se];
var pe = Object.getOwnPropertySymbols, at = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, st = (t, l) => {
  var e = {};
  for (var n in t)
    at.call(t, n) && l.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && pe)
    for (var n of pe(t))
      l.indexOf(n) < 0 && ot.call(t, n) && (e[n] = t[n]);
  return e;
};
function rt(t, l, e = {}) {
  const n = e, { window: o = lt } = n, a = st(n, ["window"]);
  let c;
  const s = nt(() => o && "ResizeObserver" in o), y = () => {
    c && (c.disconnect(), c = void 0);
  }, r = G(() => Ne(t), (i) => {
    y(), s.value && o && i && (c = new ResizeObserver(l), c.observe(i, a));
  }, { immediate: !0, flush: "post" }), u = () => {
    y(), r();
  };
  return et(u), {
    isSupported: s,
    stop: u
  };
}
function ut(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: n = "content-box" } = e, o = b(l.width), a = b(l.height);
  return rt(t, ([c]) => {
    const s = n === "border-box" ? c.borderBoxSize : n === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
    s ? (o.value = s.reduce((y, { inlineSize: r }) => y + r, 0), a.value = s.reduce((y, { blockSize: r }) => y + r, 0)) : (o.value = c.contentRect.width, a.value = c.contentRect.height);
  }, e), G(() => Ne(t), (c) => {
    o.value = c ? l.width : 0, a.value = c ? l.height : 0;
  }), {
    width: o,
    height: a
  };
}
var he;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(he || (he = {}));
var it = Object.defineProperty, ye = Object.getOwnPropertySymbols, ct = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable, me = (t, l, e) => l in t ? it(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, ft = (t, l) => {
  for (var e in l || (l = {}))
    ct.call(l, e) && me(t, e, l[e]);
  if (ye)
    for (var e of ye(l))
      dt.call(l, e) && me(t, e, l[e]);
  return t;
};
const vt = {
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
ft({
  linear: Ze
}, vt);
function Le(t, l) {
  const e = b(), n = ut(e), o = b([]), a = Qe(t), c = b({ start: 0, end: 10 }), { itemHeight: s, overscan: y = 5 } = l, r = (w) => {
    if (typeof s == "number")
      return Math.ceil(w / s);
    const { start: E = 0 } = c.value;
    let L = 0, I = 0;
    for (let N = E; N < a.value.length; N++)
      if (L += s(N), L >= w) {
        I = N;
        break;
      }
    return I - E;
  }, u = (w) => {
    if (typeof s == "number")
      return Math.floor(w / s) + 1;
    let E = 0, L = 0;
    for (let I = 0; I < a.value.length; I++)
      if (E += s(I), E >= w) {
        L = I;
        break;
      }
    return L + 1;
  }, i = () => {
    const w = e.value;
    if (w) {
      const E = u(w.scrollTop), L = r(w.clientHeight), I = E - y, N = E + L + y;
      c.value = {
        start: I < 0 ? 0 : I,
        end: N > a.value.length ? a.value.length : N
      }, o.value = a.value.slice(c.value.start, c.value.end).map((q, O) => ({
        data: q,
        index: O + c.value.start
      }));
    }
  };
  G([n.width, n.height, t], () => {
    i();
  });
  const m = $(() => typeof s == "number" ? a.value.length * s : a.value.reduce((w, E, L) => w + s(L), 0)), p = (w) => typeof s == "number" ? w * s : a.value.slice(0, w).reduce((L, I, N) => L + s(N), 0), v = (w) => {
    e.value && (e.value.scrollTop = p(w), i());
  }, _ = $(() => p(c.value.start)), F = $(() => ({
    style: {
      width: "100%",
      height: `${m.value - _.value}px`,
      marginTop: `${_.value}px`
    }
  }));
  return {
    list: o,
    scrollTo: v,
    containerProps: {
      ref: e,
      onScroll: () => {
        i();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: F
  };
}
const H = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, pt = (t, l) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, o, a = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const c = t.map.get(n);
      if (c)
        c.value = o, c.data = a;
      else {
        let s = { value: o, key: n, data: a };
        t.value.push(s), t.map.set(s.key, s);
      }
    },
    addRange: (n) => {
      for (let o of n)
        t.actions.push(o.key, o.value, o.data);
    },
    remove: (n) => {
      t.value.splice(t.value.findIndex((o) => o.key == n), 1);
    },
    clear: () => {
      t.value = [];
    },
    sort: (n = null) => {
      n == null && (n = (o, a) => o.value.localeCompare(a.value)), t.value = t.value.sort(n);
    },
    setDefault: function(n) {
      this.defaultArray = n;
    },
    restoreDefault: function() {
      t.value = this.defaultArray;
    },
    filter: function(n) {
    }
  };
  window.ExtraSelectOptions[l] = e, t.actions = e;
};
let ht = 1;
const Ie = (t) => {
  t && (t.style.display = "none", Xe(t));
}, Ae = (t, l, e, n) => {
  var y;
  const o = b(/* @__PURE__ */ new Map());
  Q(() => {
    if (Array.isArray(e.value)) {
      o.value.clear();
      for (let r of e.value)
        o.value.set(r, r);
    }
  });
  const a = b([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let r of a.value)
        a.map.set(r.key, r);
  }, Q(() => {
    l.value && (a.value = l.value.map((r) => ({ ...r, key: H(r.key) })), a.rebuildMap());
  }), t) {
    if (o.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((u) => H(u.value)).filter((u) => u))
        o.value.set(r, r);
      a.value = Array.apply(null, t.options).reduce((r, u) => (r.push({ value: u.text, key: H(u.value), data: Object.assign({}, u.dataset) }), r), []);
    }
    if (t.matches("input")) {
      let r = t.value;
      r != null && r.length > 0 && (a.value = [{ value: r, key: r }]);
    }
    a.rebuildMap();
  }
  if (Array.isArray(n))
    for (let r of n)
      o.value.set(H(r), H(r));
  else
    n != null && o.value.set(H(n), H(n));
  pt(a, (y = t == null ? void 0 : t.id) != null ? y : "extraselect_" + (++ht).toString());
  const c = [];
  return o.value.forEach((r, u) => {
    c.push([u, r]);
  }), { options: a, selectedOptions: o, onReset: () => {
    o.value.clear();
    for (let [r, u] of c)
      o.value.set(r, u);
  } };
}, ge = async function(t, l = null, e = {}) {
  var a;
  const n = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(a = e.headers) != null ? a : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, n)).json();
}, Fe = (t, l, e, n, o, a, c = "limited", s = {}) => {
  const y = b(0), r = b(!1), u = $(() => r.value || y.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const i = [];
      Q((m) => {
        if (n.value.length >= o) {
          let p = !0;
          switch (c) {
            case "always":
              break;
            default:
            case "limited":
              p = !i.includes(n.value);
              break;
            case "complete":
              p = i.reduce((v, _) => v && !n.value.startsWith(_), !0);
              break;
          }
          if (p) {
            r.value = !0;
            const v = setTimeout(() => {
              i.push(n.value), y.value += 1, s.body = { ...s.body, ...a.value }, ge(l, n.value, s).then((_) => {
                t.actions.addRange(_), t.actions.sort(), y.value -= 1, r.value = !1;
              });
            }, 500);
            m(() => {
              clearTimeout(v);
            });
          }
        }
      });
    } else
      ge(l, null, s).then((i) => {
        t.actions.addRange(i), t.actions.sort();
      });
  return { searchingFlag: u };
}, Te = (t, l, e, n = [], o = []) => {
  const a = b(""), c = b([]), s = b({}), y = { ...n.reduce((u, i) => (u[i] = !1, u), {}), ...o.reduce((u, i) => (u[i] = !0, u), {}) };
  for (let u in y) {
    let i = y[u], m = document.getElementById(u);
    s.value[u] = m == null ? void 0 : m.value, m && m.addEventListener("change", (p) => {
      s.value[u] = p.target.value, i && Z(() => {
        if (l != null)
          for (let v of Array.from(l.value.keys()))
            c.value.find((_) => _.key == v) || e(v, !1);
        else
          c.value.find((v) => v.key == a.value) || e(a.value, !1);
      });
    });
  }
  const r = function(u, i) {
    let m = u.value;
    return Object.keys(s.value).length > 0 && (m = m.filter((p) => {
      var v, _;
      for (let F in s.value)
        if ((y[F] ? !0 : ((v = s.value[F]) != null ? v : "").length > 0) && ((_ = p.data) == null ? void 0 : _.hasOwnProperty(F)) && p.data[F] != s.value[F])
          return !1;
      return !0;
    })), i.length > 0 && (m = m.filter((p) => p.value.toLowerCase().includes(i.toLowerCase()))), m;
  };
  return Q(() => {
    c.value = r(t, a.value);
  }), { filterText: a, filteredOptions: c, filterValues: s };
}, Pe = (t, l, e, n, o, a, c) => {
  const s = getComputedStyle(document.querySelector("body")).font, y = function(i) {
    const p = document.createElement("canvas").getContext("2d");
    return p.font = s, p.measureText(i).width;
  }, r = $(() => {
    var m, p;
    const i = (m = X(n.value).width) != null ? m : 100;
    if (c === "inherit")
      return i;
    if (c == null || c === "dynamic") {
      const v = (p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? p : 16;
      return Math.max(i, Math.max(...t.value.map((_) => y(_.value))) + 20 + v * 3);
    }
    return c;
  }), u = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ge(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var i = X(n.value), m = X(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var m = X(a.value);
    let p = -m.left + i.left;
    const v = window.document.documentElement.clientWidth;
    p + r.value > v && (p = v - r.value), u.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-m.top + i.top + i.height).toString() + "px",
      left: p.toString() + "px"
    };
  }), { dropdownStyle: u, getTextWidth: y };
}, yt = ["name"], mt = {
  key: 1,
  class: "extra-select selection"
}, gt = ["onClick"], wt = ["innerHTML"], bt = ["value"], kt = {
  key: 0,
  class: "input-searching"
}, _t = {
  key: 0,
  class: "allselect-clear"
}, Ot = { class: "row-input" }, St = ["checked"], xt = /* @__PURE__ */ x("b", null, "Select all", -1), Ct = { class: "row-input" }, Et = ["checked"], Nt = /* @__PURE__ */ x("b", null, "Select Filtered", -1), Lt = {
  key: 1,
  class: "no-matches"
}, It = { key: 2 }, At = ["onClick"], Ft = { class: "row-input" }, Tt = ["checked"], Pt = ["value"], Mt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Vt = /* @__PURE__ */ Object.assign(Mt, {
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
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    var ue, ie, ce;
    const e = t, n = $(() => {
      var d, f;
      return (f = (d = e.originalNode) == null ? void 0 : d.multiple) != null ? f : e.multiple;
    }), { options: o, selectedOptions: a, onReset: c } = Ae(e.originalNode, le(e, "options"), le(e, "modelValue"), e.initialValue), s = (ue = e.originalNode) == null ? void 0 : ue.classList, y = Object.values((ce = (ie = e.originalNode) == null ? void 0 : ie.style) != null ? ce : {});
    Ie(e.originalNode);
    const r = (d, f = null) => {
      if (n.value) {
        let T = f;
        switch (T == null && (T = !a.value.has(d)), T) {
          case !0:
            a.value.set(d, d);
            break;
          case !1:
            a.value.delete(d);
            break;
        }
      } else
        a.value.clear(), f !== !1 && a.value.set(d, d), M.value = !1;
      N(Array.from(a.value.keys()));
    }, { filterText: u, filteredOptions: i, filterValues: m } = Te(o, a, r, e.filterFields, e.hardFilterFields), { searchingFlag: p } = Fe(
      o,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), v = b(null), _ = b(null), F = b(null), M = b(!1), w = b(null), E = function(d) {
      const f = W(d.target);
      f.push(d.target), !f.includes(v.value) && !f.includes(_.value) && (M.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let d = !1;
        w.value = W(v.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (d = !0), d && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (w.value == null && (w.value = document.querySelector("body")), e.originalNode) {
        for (let f of s)
          f != "extraselect" && v.value.classList.add(f);
        for (let f of y)
          v.value.style[f] = e.originalNode.style[f];
        y.includes("background-color") || (v.value.style.backgroundColor = "white");
        let d = W(v.value, "form").pop();
        d instanceof HTMLElement && d.matches("form") && d.addEventListener("reset", () => setTimeout(c));
      }
      window.document.addEventListener("mousedown", E), window.document.addEventListener("focusin", E);
    }), we(() => {
      window.document.removeEventListener("mousedown", E), window.document.removeEventListener("focusin", E);
    });
    const { dropdownStyle: L, getTextWidth: I } = Pe(o, a, M, v, _, w, e.maxWidth), N = (d) => {
      Z(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", d);
    }, q = (d) => {
      O(d, !1), u.value = "";
    }, O = (d, f = null) => {
      f == null && (f = !A.value), f ? (a.value.clear(), o.value.forEach((T) => a.value.set(T.key, T.key))) : a.value.clear(), N(Array.from(a.value.keys()));
    }, S = () => {
      j.value ? i.value.forEach((d) => {
        a.value.has(d.key) && a.value.delete(d.key);
      }) : i.value.forEach((d) => {
        a.value.has(d.key) || a.value.set(d.key, d.key);
      }), N(Array.from(a.value.keys()));
    };
    G(M, (d, f) => {
      d != f && (d ? e.search && Z(() => {
        F.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const A = $(() => a.value.size == o.value.length), j = $(() => i.value.reduce((d, f) => d && a.value.has(f.key), !0)), Be = $(() => a.value.size == 0), $e = $(() => {
      var d, f, T, C, U;
      if (o.value.length < 0)
        return "";
      if (n.value) {
        if (Be.value)
          return "No selection";
        if (!e.searchableUrl && A.value)
          return "All selected";
        const V = v.value ? getComputedStyle(v.value) : null, He = ((d = v.value) == null ? void 0 : d.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let K = a.value.size + " selected - ", de = !0;
        for (let Re of a.value)
          if (de ? de = !1 : K += ", ", K += (T = (f = o.map.get(Re[0])) == null ? void 0 : f.value) != null ? T : p.value ? "Loading..." : "Value not found", He < I(K))
            return a.value.size + " selected";
        return K;
      } else
        for (let V of a.value)
          return (U = (C = o.map.get(V[0])) == null ? void 0 : C.value) != null ? U : p.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: je, containerProps: ze, wrapperProps: qe } = Le(
      i,
      {
        itemHeight: 32
      }
    );
    return (d, f) => {
      var T;
      return g(), k(z, null, [
        h(n) && h(a).size == 0 ? (g(), k("input", {
          key: 0,
          type: "hidden",
          name: (T = e.originalNode) == null ? void 0 : T.replace("[]", ""),
          value: ""
        }, null, 8, yt)) : P("", !0),
        e.showSelected ? (g(), k("div", mt, [
          (g(!0), k(z, null, Y(h(a), (C) => {
            var U;
            return g(), k("div", {
              key: C,
              onClick: (V) => r(C[0]),
              class: "selection-badge"
            }, [
              fe(D((U = h(o).find((V) => V.key == C[0])) == null ? void 0 : U.value) + " ", 1),
              x("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, wt)
            ], 8, gt);
          }), 128))
        ])) : P("", !0),
        x("input", ee({
          onFocus: f[0] || (f[0] = (C) => M.value = !0),
          onClick: f[1] || (f[1] = (C) => M.value = !0),
          ref_key: "inputNode",
          ref: v,
          value: h($e),
          class: "extra-select extra-select-input",
          readonly: ""
        }, d.$attrs), null, 16, bt),
        w.value ? (g(), ne(ae, {
          key: 2,
          to: w.value
        }, [
          te(x("div", {
            class: be(["extra-select dropdown", { searching: h(p) > 0 }]),
            ref_key: "dropdownNode",
            ref: _,
            style: ke(h(L))
          }, [
            e.search ? (g(), k("div", kt, [
              te(x("input", {
                ref_key: "searchNode",
                ref: F,
                class: "extra-select-search",
                "onUpdate:modelValue": f[2] || (f[2] = (C) => _e(u) ? u.value = C : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: "Cerca..."
              }, null, 512), [
                [Je, h(u)]
              ])
            ])) : P("", !0),
            h(u).length >= e.minChars ? (g(), k(z, { key: 1 }, [
              h(n) ? (g(), k("div", _t, [
                h(u).length == 0 ? (g(), k("div", {
                  key: 0,
                  onClick: O,
                  class: "all-select"
                }, [
                  x("div", Ot, [
                    x("input", {
                      checked: h(A),
                      type: "checkbox"
                    }, null, 8, St),
                    xt
                  ])
                ])) : P("", !0),
                h(i).length > 0 && h(u).length > 0 ? (g(), k("div", {
                  key: 1,
                  onClick: S,
                  class: "all-select"
                }, [
                  x("div", Ct, [
                    x("input", {
                      checked: h(j),
                      type: "checkbox"
                    }, null, 8, Et),
                    Nt
                  ])
                ])) : P("", !0),
                x("div", {
                  class: "clear",
                  onClick: q
                }, "Clear")
              ])) : P("", !0),
              h(i).length == 0 ? (g(), k("div", Lt, "No matches found")) : P("", !0)
            ], 64)) : (g(), k("div", It, "Insert at least " + D(e.minChars) + " characters", 1)),
            x("div", ee(h(ze), { class: "scroller" }), [
              x("div", Oe(Se(h(qe))), [
                (g(!0), k(z, null, Y(h(je), (C) => (g(), k("button", {
                  key: C.index,
                  class: "dropdown-row",
                  onClick: xe((U) => r(C.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", Ft, [
                    h(n) ? (g(), k("input", {
                      key: 0,
                      checked: h(a).has(C.data.key),
                      type: "checkbox"
                    }, null, 8, Tt)) : P("", !0),
                    fe(" " + D(C.data.value), 1)
                  ])
                ], 8, At))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Ce, M.value]
          ])
        ], 8, ["to"])) : P("", !0),
        e.originalNode ? (g(), ne(ae, {
          key: 3,
          to: e.originalNode
        }, [
          (g(!0), k(z, null, Y(h(a), (C) => (g(), k("option", {
            key: C[0],
            selected: "selected",
            value: C[0]
          }, null, 8, Pt))), 128))
        ], 8, ["to"])) : P("", !0)
      ], 64);
    };
  }
}), Bt = {
  key: 0,
  class: "no-matches"
}, $t = { key: 1 }, jt = ["onClick"], zt = { class: "row-input" }, qt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Ht = /* @__PURE__ */ Object.assign(qt, {
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
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    var I, N, q;
    const e = t, { options: n } = Ae(e.originalNode, le(e, "options"), b([])), o = (I = e.originalNode) == null ? void 0 : I.classList, a = Object.values((q = (N = e.originalNode) == null ? void 0 : N.style) != null ? q : {});
    Ie(e.originalNode);
    const c = (O, S = null) => {
      S === !1 ? s.value = "" : s.value = n.map.get(O).value, p.value = !1;
    }, { filterText: s, filteredOptions: y, filterValues: r } = Te(n, null, c, e.filterFields, e.hardFilterFields), { searchingFlag: u } = Fe(
      n,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      r,
      e.fetchMode,
      e.fetchOptions
    ), i = b(null), m = b(null), p = b(!1), v = b(null), _ = function(O) {
      const S = W(O.target);
      S.push(O.target), !S.includes(i.value) && !S.includes(m.value) && (p.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let O = !1;
        v.value = W(i.value).find((S) => !!(S instanceof Element && (S.matches(e.dropdownContainer) && (O = !0), O && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(S).position))));
      }
      if (v.value == null && (v.value = document.querySelector("body")), e.originalNode) {
        for (let j of o)
          j != "extrasuggest" && i.value.classList.add(j);
        for (let j of a)
          i.value.style[j] = e.originalNode.style[j];
        a.includes("background-color") || (i.value.style.backgroundColor = "white"), s.value = e.originalNode.value, Q(() => {
          e.modelValue != null && (s.value = e.modelValue);
        });
        const O = s.value, S = () => {
          s.value = O;
        };
        let A = W(i.value, "form").pop();
        A instanceof HTMLElement && A.matches("form") && A.addEventListener("reset", () => setTimeout(S));
      }
      window.document.addEventListener("mousedown", _), window.document.addEventListener("focusin", _);
    }), we(() => {
      window.document.removeEventListener("mousedown", _), window.document.removeEventListener("focusin", _);
    });
    const { dropdownStyle: F } = Pe(n, b([]), p, i, m, v, e.maxWidth), M = () => {
      var O;
      e.originalNode && (e.originalNode.value = s.value, (O = e.originalNode) == null || O.dispatchEvent(new Event("change", { bubbles: !0 }))), l("update:modelValue", s.value);
    };
    G(() => p.value, (O) => {
      O === !1 && M();
    });
    const { list: w, containerProps: E, wrapperProps: L } = Le(
      y,
      {
        itemHeight: 32
      }
    );
    return (O, S) => (g(), k(z, null, [
      te(x("input", ee({
        onFocus: S[0] || (S[0] = (A) => p.value = !0),
        onClick: S[1] || (S[1] = (A) => p.value = !0),
        ref_key: "inputNode",
        ref: i,
        "onUpdate:modelValue": S[2] || (S[2] = (A) => _e(s) ? s.value = A : null),
        class: "extra-select extra-select-input"
      }, O.$attrs), null, 16), [
        [Ke, h(s)]
      ]),
      v.value ? (g(), ne(ae, {
        key: 0,
        to: v.value
      }, [
        te(x("div", {
          class: be(["extra-select dropdown", { searching: h(u) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: ke(h(F))
        }, [
          h(s).length >= e.minChars ? (g(), k(z, { key: 0 }, [
            h(y).length == 0 ? (g(), k("div", Bt, "No matches found")) : P("", !0)
          ], 64)) : (g(), k("div", $t, "Insert at least " + D(e.minChars) + " characters", 1)),
          x("div", ee(h(E), { class: "scroller" }), [
            x("div", Oe(Se(h(L))), [
              (g(!0), k(z, null, Y(h(w), (A) => (g(), k("button", {
                key: A.index,
                class: "dropdown-row",
                onClick: xe((j) => c(A.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", zt, D(A.data.value), 1)
              ], 8, jt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ce, p.value]
        ])
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}), Me = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Me.bindNew(t);
    });
  },
  bindNew(t) {
    R.lock(t, "extra-select", () => {
      const l = {};
      for (let o in t.dataset)
        try {
          l[o] = JSON.parse(t.dataset[o]);
        } catch {
          l[o] = t.dataset[o];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const n = Ee(Vt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), R.remove(t, "extra-select");
      });
    });
  }
}, Ve = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Ve.bindNew(t);
    });
  },
  bindNew(t) {
    R.lock(t, "extra-suggest", () => {
      const l = {};
      for (let o in t.dataset)
        try {
          l[o] = JSON.parse(t.dataset[o]);
        } catch {
          l[o] = t.dataset[o];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const n = Ee(Ht, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), R.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Me.init(), Ve.init();
});
export {
  Me as ExtraSelect,
  Ve as ExtraSuggest
};
