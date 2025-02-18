import { unref as m, getCurrentScope as ct, onScopeDispose as dt, getCurrentInstance as ft, onMounted as me, nextTick as ue, computed as A, ref as y, shallowRef as vt, watch as W, watchEffect as K, watchPostEffect as pt, useAttrs as Ie, toRef as Z, onUnmounted as Ve, openBlock as w, createElementBlock as k, Fragment as j, createCommentVNode as I, renderList as se, withModifiers as H, createTextVNode as Ee, toDisplayString as $, createElementVNode as _, mergeProps as ce, createBlock as ve, Teleport as pe, withDirectives as de, normalizeClass as ze, normalizeStyle as Pe, isRef as $e, vModelText as ht, normalizeProps as Me, guardReactiveProps as Be, vShow as je, vModelDynamic as gt, createApp as qe } from "vue";
const P = /* @__PURE__ */ new WeakMap();
class z {
  static put(l, e, a) {
    P.has(l) || P.set(l, /* @__PURE__ */ new Map()), P.get(l).set(e, a);
  }
  static get(l, e) {
    return P.get(l).get(e);
  }
  static has(l, e) {
    return P.has(l) && P.get(l).has(e);
  }
  static remove(l, e) {
    var a = P.get(l).delete(e);
    return P.get(l).size !== 0 && P.delete(l), a;
  }
  static lock(l, e, a) {
    if (!z.has(l, e)) {
      z.put(l, e, !0);
      const n = a();
      return n !== void 0 && z.put(l, e, n), n;
    }
    return !1;
  }
  static async lockAsync(l, e, a) {
    if (!z.has(l, e)) {
      z.put(l, e, !0);
      const n = await a();
      return n !== void 0 && z.put(l, e, n), n;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = P);
function re(t) {
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
function G(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], a = t.parentNode; a != null && a instanceof HTMLElement && !(l instanceof HTMLElement && a === l) && !(typeof l == "string" && a.matches(l)); ) {
    var n = a;
    e.push(n), a = n.parentNode;
  }
  return a != null && e.push(a), e;
}
function mt(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var Ce;
const ee = typeof window < "u";
ee && ((Ce = window == null ? void 0 : window.navigator) == null ? void 0 : Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function yt(t) {
  return typeof t == "function" ? t() : m(t);
}
function wt(t) {
  return t;
}
function bt(t) {
  return ct() ? (dt(t), !0) : !1;
}
function Ot(t, l = !0) {
  ft() ? me(t) : l ? t() : ue(t);
}
function ie(t) {
  var l;
  const e = yt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const De = ee ? window : void 0;
ee && window.document;
ee && window.navigator;
ee && window.location;
function kt(t, l = !1) {
  const e = y(), a = () => e.value = Boolean(t());
  return a(), Ot(a, l), e;
}
const he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__";
he[ge] = he[ge] || {};
he[ge];
var Ne = Object.getOwnPropertySymbols, xt = Object.prototype.hasOwnProperty, St = Object.prototype.propertyIsEnumerable, _t = (t, l) => {
  var e = {};
  for (var a in t)
    xt.call(t, a) && l.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && Ne)
    for (var a of Ne(t))
      l.indexOf(a) < 0 && St.call(t, a) && (e[a] = t[a]);
  return e;
};
function Et(t, l, e = {}) {
  const a = e, { window: n = De } = a, r = _t(a, ["window"]);
  let o;
  const c = kt(() => n && "ResizeObserver" in n), u = () => {
    o && (o.disconnect(), o = void 0);
  }, s = W(() => ie(t), (d) => {
    u(), c.value && n && d && (o = new ResizeObserver(l), o.observe(d, r));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), s();
  };
  return bt(i), {
    isSupported: c,
    stop: i
  };
}
function Ct(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: a = De, box: n = "content-box" } = e, r = A(() => {
    var u, s;
    return (s = (u = ie(t)) == null ? void 0 : u.namespaceURI) == null ? void 0 : s.includes("svg");
  }), o = y(l.width), c = y(l.height);
  return Et(t, ([u]) => {
    const s = n === "border-box" ? u.borderBoxSize : n === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
    if (a && r.value) {
      const i = ie(t);
      if (i) {
        const d = a.getComputedStyle(i);
        o.value = parseFloat(d.width), c.value = parseFloat(d.height);
      }
    } else if (s) {
      const i = Array.isArray(s) ? s : [s];
      o.value = i.reduce((d, { inlineSize: p }) => d + p, 0), c.value = i.reduce((d, { blockSize: p }) => d + p, 0);
    } else
      o.value = u.contentRect.width, c.value = u.contentRect.height;
  }, e), W(() => ie(t), (u) => {
    o.value = u ? l.width : 0, c.value = u ? l.height : 0;
  }), {
    width: o,
    height: c
  };
}
var Le;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Le || (Le = {}));
var Nt = Object.defineProperty, Ae = Object.getOwnPropertySymbols, Lt = Object.prototype.hasOwnProperty, At = Object.prototype.propertyIsEnumerable, Te = (t, l, e) => l in t ? Nt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, Tt = (t, l) => {
  for (var e in l || (l = {}))
    Lt.call(l, e) && Te(t, e, l[e]);
  if (Ae)
    for (var e of Ae(l))
      At.call(l, e) && Te(t, e, l[e]);
  return t;
};
const Ft = {
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
Tt({
  linear: wt
}, Ft);
function He(t, l) {
  const { containerStyle: e, wrapperProps: a, scrollTo: n, calculateRange: r, currentList: o, containerRef: c } = "itemHeight" in l ? zt(l, t) : Vt(l, t);
  return {
    list: o,
    scrollTo: n,
    containerProps: {
      ref: c,
      onScroll: () => {
        r();
      },
      style: e
    },
    wrapperProps: a
  };
}
function We(t) {
  const l = y(null), e = Ct(l), a = y([]), n = vt(t);
  return { state: y({ start: 0, end: 10 }), source: n, currentList: a, size: e, containerRef: l };
}
function Re(t, l, e) {
  return (a) => {
    if (typeof e == "number")
      return Math.ceil(a / e);
    const { start: n = 0 } = t.value;
    let r = 0, o = 0;
    for (let c = n; c < l.value.length; c++) {
      const u = e(c);
      if (r += u, o = c, r > a)
        break;
    }
    return o - n;
  };
}
function Ue(t, l) {
  return (e) => {
    if (typeof l == "number")
      return Math.floor(e / l) + 1;
    let a = 0, n = 0;
    for (let r = 0; r < t.value.length; r++) {
      const o = l(r);
      if (a += o, a >= e) {
        n = r;
        break;
      }
    }
    return n + 1;
  };
}
function Qe(t, l, e, a, { containerRef: n, state: r, currentList: o, source: c }) {
  return () => {
    const u = n.value;
    if (u) {
      const s = e(t === "vertical" ? u.scrollTop : u.scrollLeft), i = a(t === "vertical" ? u.clientHeight : u.clientWidth), d = s - l, p = s + i + l;
      r.value = {
        start: d < 0 ? 0 : d,
        end: p > c.value.length ? c.value.length : p
      }, o.value = c.value.slice(r.value.start, r.value.end).map((f, g) => ({
        data: f,
        index: g + r.value.start
      }));
    }
  };
}
function Ge(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, r, o) => n + t(o), 0);
}
function Je(t, l, e) {
  W([t.width, t.height, l], () => {
    e();
  });
}
function Xe(t, l) {
  return A(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, a, n) => e + t(n), 0));
}
const It = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Ye(t, l, e, a) {
  return (n) => {
    a.value && (a.value[It[t]] = e(n), l());
  };
}
function Vt(t, l) {
  const e = We(l), { state: a, source: n, currentList: r, size: o, containerRef: c } = e, u = { overflowX: "auto" }, { itemWidth: s, overscan: i = 5 } = t, d = Re(a, n, s), p = Ue(n, s), f = Qe("horizontal", i, p, d, e), g = Ge(s, n), b = A(() => g(a.value.start)), O = Xe(s, n);
  Je(o, l, f);
  const x = Ye("horizontal", f, g, c), V = A(() => ({
    style: {
      height: "100%",
      width: `${O.value - b.value}px`,
      marginLeft: `${b.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: x,
    calculateRange: f,
    wrapperProps: V,
    containerStyle: u,
    currentList: r,
    containerRef: c
  };
}
function zt(t, l) {
  const e = We(l), { state: a, source: n, currentList: r, size: o, containerRef: c } = e, u = { overflowY: "auto" }, { itemHeight: s, overscan: i = 5 } = t, d = Re(a, n, s), p = Ue(n, s), f = Qe("vertical", i, p, d, e), g = Ge(s, n), b = A(() => g(a.value.start)), O = Xe(s, n);
  Je(o, l, f);
  const x = Ye("vertical", f, g, c), V = A(() => ({
    style: {
      width: "100%",
      height: `${O.value - b.value}px`,
      marginTop: `${b.value}px`
    }
  }));
  return {
    calculateRange: f,
    scrollTo: x,
    containerStyle: u,
    wrapperProps: V,
    currentList: r,
    containerRef: c
  };
}
const D = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, Pt = (t) => {
  try {
    var l = JSON.parse(t);
    if (l && typeof l == "object")
      return l;
  } catch {
  }
  return t;
}, $t = (t, l, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const a = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, r, o = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const c = t.map.get(n);
      if (c)
        c.value = r, c.data = o;
      else {
        let u = { value: r, key: n, data: o };
        t.value.push(u), t.map.set(u.key, u);
      }
    },
    addRange: (n) => {
      for (let r of n)
        t.actions.push(r.key, r.value, r.data);
    },
    remove: (n) => {
      t.value.splice(t.value.findIndex((r) => r.key == n), 1);
    },
    clear: () => {
      t.value = [];
    },
    sort: (n = null) => {
      n == null && (n = (r, o) => r.value.localeCompare(o.value)), t.value = t.value.sort(n);
    },
    setDefault: function(n) {
      this.defaultArray = n;
    },
    restoreDefault: function() {
      t.value = this.defaultArray;
    },
    filter: function(n) {
    },
    selection: {
      get() {
        return l.value;
      },
      clear() {
        l.value.clear();
      },
      add(n) {
        l.value.set(n, n);
      },
      remove(n) {
        l.value.delete(n);
      }
    }
  };
  window.ExtraSelectOptions[e] = a, t.actions = a;
};
let Mt = 1;
const Ze = (t) => {
  t && (t.style.display = "none", mt(t));
}, Ke = (t, l, e, a, n = null) => {
  const r = y(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      r.value.clear();
      for (let s of e.value)
        r.value.set(s, s);
    }
  });
  const o = y([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, K(() => {
    l.value && (o.value = l.value.map((s) => ({ ...s, key: D(s.key) })), o.rebuildMap());
  }), t) {
    if (r.value.clear(), t.matches("select")) {
      for (let s of Array.apply(null, t.selectedOptions).map((i) => D(i.value)).filter((i) => i != null))
        r.value.set(s, s);
      o.value = Array.apply(null, t.options).reduce((s, i) => (s.push({
        value: i.text,
        key: D(i.value),
        data: Object.keys(i.dataset).reduce((d, p) => (d[p] = Pt(i.dataset[p]), d), {})
      }), s), []);
    }
    if (t.matches("input")) {
      let s = t.value;
      s != null && s.length > 0 && (o.value = [{ value: s, key: s }]);
    }
    o.rebuildMap();
  }
  if (Array.isArray(a))
    for (let s of a)
      r.value.set(D(s), D(s));
  else
    a != null && r.value.set(D(a), D(a));
  (n == null || n === "" || n == 0) && (n = "extraselect_" + (++Mt).toString()), $t(o, r, n);
  const c = [];
  return r.value.forEach((s, i) => {
    c.push([i, s]);
  }), { options: o, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [s, i] of c)
      r.value.set(s, i);
  } };
};
y({});
function Bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const ye = (t = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), et(y(e), "defaults");
}, et = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, ye());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (a) => {
      var n;
      return (n = t.value[a]) != null ? n : null;
    },
    push: (a, n) => {
      t.value[a] = n;
    }
  };
  window.ExtraSelectLocalization[l] = e, t.actions = e;
};
let jt = 0;
const tt = (t, l) => {
  var a;
  return et(l, (a = t == null ? void 0 : t.id) != null ? a : "extraselect_" + (++jt).toString()), { propLocalization: l, t: (n, r = {}) => {
    var c;
    let o = (c = l.value[n]) != null ? c : window.ExtraSelectLocalization.defaults.get(n);
    return o == null && (window.ExtraSelectLocalization.defaults.push(n, n), o = n), Bt(o, r);
  } };
}, Fe = async function(t, l = null, e = {}) {
  var r;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(r = e.headers) != null ? r : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, a)).json();
}, lt = (t, l, e, a, n, r, o = "limited", c = {}) => {
  const u = y(0), s = y(!1), i = A(() => s.value || u.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const d = [];
      K((p) => {
        if (a.value.length >= n) {
          let f = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              f = !d.includes(a.value);
              break;
            case "complete":
              f = d.reduce((g, b) => g && !a.value.startsWith(b), !0);
              break;
          }
          if (f) {
            s.value = !0;
            const g = setTimeout(() => {
              d.push(a.value), u.value += 1, c.body = { ...c.body, ...r.value }, Fe(l, a.value, c).then((b) => {
                t.actions.addRange(b), t.actions.sort(), u.value -= 1, s.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      Fe(l, null, c).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: i };
}, nt = (t, l, e, a = [], n = []) => {
  const r = y(""), o = y([]), c = y({}), u = { ...a.reduce((i, d) => (i[d] = !1, i), {}), ...n.reduce((i, d) => (i[d] = !0, i), {}) };
  for (let i in u) {
    let d = u[i], p = document.getElementById(i);
    c.value[i] = p == null ? void 0 : p.value, p && p.addEventListener("change", (f) => {
      c.value[i] = f.target.value, d && ue(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            o.value.find((b) => b.key == g) || e(g, !1);
        else
          o.value.find((g) => g.key == r.value) || e(r.value, !1);
      });
    });
  }
  const s = function(i, d) {
    let p = i.value;
    return Object.keys(c.value).length > 0 && (p = p.filter((f) => {
      var g, b;
      for (let O in c.value)
        if ((u[O] ? !0 : ((g = c.value[O]) != null ? g : "").length > 0) && ((b = f.data) == null ? void 0 : b.hasOwnProperty(O))) {
          if (Array.isArray(f.data[O])) {
            if (!f.data[O].includes(c.value[O]))
              return !1;
          } else if (f.data[O] != c.value[O])
            return !1;
        }
      return !0;
    })), d.length > 0 && (p = p.filter((f) => f.value.toLowerCase().includes(d.toLowerCase()))), p;
  };
  return K(() => {
    o.value = s(t, r.value);
  }), { filterText: r, filteredOptions: o, filterValues: c };
}, at = (t, l, e, a, n, r, o) => {
  const c = getComputedStyle(document.querySelector("body")).font, u = function(d) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = c, f.measureText(d).width;
  }, s = A(() => {
    var p, f;
    const d = (p = re(a.value).width) != null ? p : 100;
    if (o === "inherit")
      return d;
    if (o == null || o === "dynamic") {
      const g = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(d, Math.max(...t.value.map((b) => u(b.value))) + 20 + g * 3);
    }
    return o;
  }), i = y({
    position: "absolute",
    "min-width": "max-content"
  });
  return pt(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var d = re(a.value), p = re(null);
    if (r.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r.value).position))
      var p = re(r.value);
    let f = -p.left + d.left;
    const g = window.document.documentElement.clientWidth;
    f + s.value > g && (f = g - s.value), i.value = {
      position: "absolute",
      "min-width": "max-content",
      width: s.value.toString() + "px",
      top: (-p.top + d.top + d.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: i, getTextWidth: u };
}, qt = ["name"], Dt = {
  key: 1,
  class: "extra-select selection"
}, Ht = ["onClick"], Wt = ["innerHTML"], Rt = ["value", "disabled"], Ut = {
  key: 0,
  class: "input-searching"
}, Qt = ["placeholder"], Gt = {
  key: 0,
  class: "allselect-clear"
}, Jt = { class: "row-input" }, Xt = ["checked"], Yt = { class: "row-input" }, Zt = ["checked"], Kt = {
  key: 1,
  class: "no-matches"
}, el = { key: 2 }, tl = ["onClick"], ll = { class: "row-input" }, nl = ["checked"], al = ["value"], ol = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, rl = Object.assign(ol, {
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
  setup(t, { emit: l }) {
    var we, be, Oe, ke, xe, Se;
    const e = t, a = A(() => {
      var v, h;
      return (h = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? h : e.multiple;
    });
    let n = Ie();
    const { options: r, selectedOptions: o, onReset: c } = Ke(e.originalNode, Z(e, "options"), Z(e, "modelValue"), e.initialValue, (Oe = (be = (we = e.originalNode) == null ? void 0 : we.id) != null ? be : n.id) != null ? Oe : null), { t: u } = tt(e.originalNode, Z(e, "localization")), s = (ke = e.originalNode) == null ? void 0 : ke.classList, i = Object.values((Se = (xe = e.originalNode) == null ? void 0 : xe.style) != null ? Se : {});
    Ze(e.originalNode);
    const d = l, p = (v, h = null) => {
      if (a.value) {
        let L = h;
        switch (L == null && (L = !o.value.has(v)), L) {
          case !0:
            o.value.set(v, v);
            break;
          case !1:
            o.value.delete(v);
            break;
        }
      } else
        o.value.clear(), h !== !1 && o.value.set(v, v), M.value = !1;
      U(Array.from(o.value.keys()));
    }, { filterText: f, filteredOptions: g, filterValues: b } = nt(r, o, p, e.filterFields, e.hardFilterFields), { searchingFlag: O } = lt(
      r,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      b,
      e.fetchMode,
      e.fetchOptions
    ), x = y(null), V = y(null), q = y(null), M = y(!1);
    function J(v) {
      e.disabled || (M.value = v);
    }
    W(f, () => {
      V.value.querySelector(".scroller").scrollTop = 0;
    });
    const B = y(null), R = function(v) {
      const h = G(v.target);
      h.push(v.target), !h.includes(x.value) && !h.includes(V.value) ? M.value = !1 : (v.stopImmediatePropagation(), v.preventDefault());
    };
    me(() => {
      if (e.dropdownContainer) {
        let v = !1;
        B.value = G(x.value).find((h) => !!(h instanceof Element && (h.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(h).position))));
      }
      if (B.value == null && (B.value = document.querySelector("body")), e.originalNode) {
        for (let h of s)
          h != "extraselect" && x.value.classList.add(h);
        for (let h of i)
          x.value.style[h] = e.originalNode.style[h];
        let v = G(x.value, "form").pop();
        v instanceof HTMLElement && v.matches("form") && v.addEventListener("reset", () => setTimeout(c)), e.originalNode.toggleValue = p, e.originalNode.setValues = (h) => {
          o.value.clear();
          for (let L of h)
            p(L);
        };
      }
      window.document.addEventListener("mousedown", R), window.document.addEventListener("focusin", R);
    }), Ve(() => {
      window.document.removeEventListener("mousedown", R), window.document.removeEventListener("focusin", R);
    });
    const { dropdownStyle: fe, getTextWidth: te } = at(r, o, M, x, V, B, e.maxWidth), U = (v) => {
      ue(
        () => {
          var h;
          return (h = e.originalNode) == null ? void 0 : h.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", v);
    }, le = (v) => {
      X(v, !1), f.value = "";
    }, X = (v, h = null) => {
      h == null && (h = !Q.value), h ? (o.value.clear(), r.value.forEach((L) => o.value.set(L.key, L.key))) : o.value.clear(), U(Array.from(o.value.keys()));
    }, ne = () => {
      C.value ? g.value.forEach((v) => {
        o.value.has(v.key) && o.value.delete(v.key);
      }) : g.value.forEach((v) => {
        o.value.has(v.key) || o.value.set(v.key, v.key);
      }), U(Array.from(o.value.keys()));
    };
    W(M, (v, h) => {
      v != h && (v ? e.search && ue(() => {
        q.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const Q = A(() => o.value.size == r.value.length), C = A(() => g.value.reduce((v, h) => v && o.value.has(h.key), !0)), S = A(() => o.value.size == 0), N = A(() => {
      var v, h, L, Y, E;
      if (r.value.length < 0)
        return "";
      if (a.value) {
        if (S.value)
          return u("No selection");
        if (!e.searchableUrl && Q.value)
          return u("All selected");
        const F = x.value ? getComputedStyle(x.value) : null, ae = ((v = x.value) == null ? void 0 : v.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let oe = u(":n selected - ", { n: o.value.size }), _e = !0;
        for (let ut of o.value)
          if (_e ? _e = !1 : oe += ", ", oe += (L = (h = r.map.get(ut[0])) == null ? void 0 : h.value) != null ? L : O.value ? u("Loading...") : u("Value not found"), ae < te(oe))
            return o.value.size + u(" selected");
        return oe;
      } else
        for (let F of o.value)
          return (E = (Y = r.map.get(F[0])) == null ? void 0 : Y.value) != null ? E : O.value ? u("Loading...") : u("Value not found");
      return u("No selection");
    }), { list: T, containerProps: st, wrapperProps: it } = He(
      g,
      {
        itemHeight: 32
      }
    );
    return (v, h) => {
      var L, Y;
      return w(), k(j, null, [
        a.value && m(o).size == 0 ? (w(), k("input", {
          key: 0,
          type: "hidden",
          name: (Y = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : Y.replace("[]", ""),
          value: ""
        }, null, 8, qt)) : I("", !0),
        e.showSelected ? (w(), k("div", Dt, [
          (w(!0), k(j, null, se(m(o), (E) => {
            var F;
            return w(), k("div", {
              key: E,
              onClick: H((ae) => p(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              Ee($((F = m(r).find((ae) => ae.key == E[0])) == null ? void 0 : F.value) + " ", 1),
              _("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Wt)
            ], 8, Ht);
          }), 128))
        ])) : I("", !0),
        _("input", ce({
          onFocus: h[0] || (h[0] = (E) => J(!0)),
          onClick: h[1] || (h[1] = H((E) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: x,
          value: N.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs, { disabled: t.disabled }), null, 16, Rt),
        B.value ? (w(), ve(pe, {
          key: 2,
          to: B.value
        }, [
          de(_("div", {
            class: ze(["extra-select dropdown", { searching: m(O) > 0 }]),
            ref_key: "dropdownNode",
            ref: V,
            style: Pe(m(fe))
          }, [
            e.search ? (w(), k("div", Ut, [
              de(_("input", {
                ref_key: "searchNode",
                ref: q,
                class: "extra-select-search",
                "onUpdate:modelValue": h[2] || (h[2] = (E) => $e(f) ? f.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: m(u)("Search...")
              }, null, 8, Qt), [
                [ht, m(f)]
              ])
            ])) : I("", !0),
            m(f).length >= e.minChars ? (w(), k(j, { key: 1 }, [
              a.value ? (w(), k("div", Gt, [
                m(f).length == 0 ? (w(), k("div", {
                  key: 0,
                  onClick: H(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Jt, [
                    _("input", {
                      checked: Q.value,
                      type: "checkbox"
                    }, null, 8, Xt),
                    _("b", null, $(m(u)("Select all")), 1)
                  ])
                ])) : I("", !0),
                m(g).length > 0 && m(f).length > 0 ? (w(), k("div", {
                  key: 1,
                  onClick: H(ne, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Yt, [
                    _("input", {
                      checked: C.value,
                      type: "checkbox"
                    }, null, 8, Zt),
                    _("b", null, $(m(u)("Select Filtered")), 1)
                  ])
                ])) : I("", !0),
                _("div", {
                  class: "clear",
                  onClick: H(le, ["stop", "prevent"])
                }, $(m(u)("Clear")), 1)
              ])) : I("", !0),
              m(g).length == 0 ? (w(), k("div", Kt, $(m(u)("No matches found")), 1)) : I("", !0)
            ], 64)) : (w(), k("div", el, $(m(u)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", ce(m(st), { class: "scroller" }), [
              _("div", Me(Be(m(it))), [
                (w(!0), k(j, null, se(m(T), (E) => (w(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: H((F) => p(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", ll, [
                    a.value ? (w(), k("input", {
                      key: 0,
                      checked: m(o).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, nl)) : I("", !0),
                    Ee(" " + $(E.data.value), 1)
                  ])
                ], 8, tl))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [je, M.value]
          ])
        ], 8, ["to"])) : I("", !0),
        e.originalNode ? (w(), ve(pe, {
          key: 3,
          to: e.originalNode
        }, [
          (w(!0), k(j, null, se(m(o), (E) => (w(), k("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, al))), 128))
        ], 8, ["to"])) : I("", !0)
      ], 64);
    };
  }
}), sl = ["disabled"], il = {
  key: 0,
  class: "no-matches"
}, ul = { key: 1 }, cl = ["onClick"], dl = { class: "row-input" }, fl = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, vl = Object.assign(fl, {
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
  setup(t, { emit: l }) {
    var te, U, le, X, ne, Q;
    const e = t;
    let a = Ie();
    const { options: n } = Ke(e.originalNode, Z(e, "options"), y([]), null, (le = (U = (te = e.originalNode) == null ? void 0 : te.id) != null ? U : a.id) != null ? le : null), { t: r } = tt(e.originalNode, Z(e, "localization")), o = (X = e.originalNode) == null ? void 0 : X.classList, c = Object.values((Q = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? Q : {});
    Ze(e.originalNode);
    const u = l, s = (C, S = null) => {
      S === !1 ? i.value = "" : i.value = n.map.get(C).value, O.value = !1;
    }, { filterText: i, filteredOptions: d, filterValues: p } = nt(n, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: f } = lt(
      n,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), g = y(null), b = y(null), O = y(!1), x = y(null);
    function V(C) {
      e.disabled || (O.value = C);
    }
    W(i, () => {
      b.value.querySelector(".scroller").scrollTop = 0;
    });
    const q = function(C) {
      const S = G(C.target);
      S.push(C.target), !S.includes(g.value) && !S.includes(b.value) && (O.value = !1);
    };
    me(() => {
      if (e.dropdownContainer) {
        let N = !1;
        x.value = G(g.value).find((T) => !!(T instanceof Element && (T.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(T).position))));
      }
      if (x.value == null && (x.value = document.querySelector("body")), e.originalNode) {
        for (let T of o)
          T != "extrasuggest" && g.value.classList.add(T);
        for (let T of c)
          g.value.style[T] = e.originalNode.style[T];
        i.value = e.originalNode.value;
        let N = G(g.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      K(() => {
        e.modelValue != null && (i.value = e.modelValue);
      });
      const C = i.value, S = () => {
        i.value = C;
      };
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), Ve(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: M } = at(n, y([]), O, g, b, x, e.maxWidth), J = (C = !1) => {
      var S;
      e.originalNode && (C ? i.value = e.originalNode.value : (e.originalNode.value = i.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), u("update:modelValue", i.value);
    };
    W(() => O.value, (C) => {
      C === !1 && J();
    });
    const { list: B, containerProps: R, wrapperProps: fe } = He(
      d,
      {
        itemHeight: 32
      }
    );
    return (C, S) => (w(), k(j, null, [
      de(_("input", ce({
        onFocus: S[0] || (S[0] = (N) => V(!0)),
        onClick: S[1] || (S[1] = (N) => V(!0)),
        ref_key: "inputNode",
        ref: g,
        "onUpdate:modelValue": S[2] || (S[2] = (N) => $e(i) ? i.value = N : null),
        class: "extra-select extra-select-input"
      }, C.$attrs, { disabled: t.disabled }), null, 16, sl), [
        [gt, m(i)]
      ]),
      x.value ? (w(), ve(pe, {
        key: 0,
        to: x.value
      }, [
        de(_("div", {
          class: ze(["extra-select dropdown", { searching: m(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: Pe(m(M))
        }, [
          m(i).length >= e.minChars ? (w(), k(j, { key: 0 }, [
            m(d).length == 0 ? (w(), k("div", il, $(m(r)("No matches found")), 1)) : I("", !0)
          ], 64)) : (w(), k("div", ul, $(m(r)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", ce(m(R), { class: "scroller" }), [
            _("div", Me(Be(m(fe))), [
              (w(!0), k(j, null, se(m(B), (N) => (w(), k("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: H((T) => s(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", dl, $(N.data.value), 1)
              ], 8, cl))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [je, O.value]
        ])
      ], 8, ["to"])) : I("", !0)
    ], 64));
  }
}), hl = ye, ot = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      ot.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-select", () => {
      const l = {};
      for (let n in t.dataset)
        try {
          l[n] = JSON.parse(t.dataset[n]);
        } catch {
          l[n] = t.dataset[n];
        }
      l.disabled = t.disabled, l.originalNode = t;
      const e = document.createDocumentFragment(), a = qe(rl, l);
      a.mount(e), t.parentNode.insertBefore(e, t.nextSibling), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
      });
    });
  }
}, rt = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      rt.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-suggest", () => {
      const l = {};
      for (let n in t.dataset)
        try {
          l[n] = JSON.parse(t.dataset[n]);
        } catch {
          l[n] = t.dataset[n];
        }
      l.disabled = t.disabled, l.originalNode = t;
      const e = document.createDocumentFragment(), a = qe(vl, l);
      a.mount(e), t.parentNode.insertBefore(e, t.nextSibling), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  ot.init(), rt.init(), ye();
});
export {
  ot as ExtraSelect,
  rt as ExtraSuggest,
  hl as loadExtraSelectDefaultLocalization
};
