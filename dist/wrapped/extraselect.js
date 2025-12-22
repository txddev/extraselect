import { unref as g, getCurrentScope as ct, onScopeDispose as dt, getCurrentInstance as ft, onMounted as ge, nextTick as ue, computed as A, ref as w, shallowRef as vt, watch as W, watchEffect as K, watchPostEffect as pt, useAttrs as Fe, toRef as Z, onUnmounted as Ve, openBlock as O, createElementBlock as k, Fragment as j, createCommentVNode as F, renderList as re, withModifiers as D, createTextVNode as Ee, toDisplayString as $, createElementVNode as _, mergeProps as ce, createBlock as ve, Teleport as pe, withDirectives as de, normalizeClass as ze, normalizeStyle as Pe, isRef as $e, vModelText as ht, normalizeProps as Me, guardReactiveProps as Be, vShow as je, vModelDynamic as yt, createApp as qe } from "vue";
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
function se(t) {
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
function gt(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var Ce;
const ee = typeof window < "u";
ee && ((Ce = window == null ? void 0 : window.navigator) == null ? void 0 : Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function mt(t) {
  return typeof t == "function" ? t() : g(t);
}
function wt(t) {
  return t;
}
function bt(t) {
  return ct() ? (dt(t), !0) : !1;
}
function Ot(t, l = !0) {
  ft() ? ge(t) : l ? t() : ue(t);
}
function ie(t) {
  var l;
  const e = mt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const He = ee ? window : void 0;
ee && window.document;
ee && window.navigator;
ee && window.location;
function St(t, l = !1) {
  const e = w(), a = () => e.value = Boolean(t());
  return a(), Ot(a, l), e;
}
const he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = "__vueuse_ssr_handlers__";
he[ye] = he[ye] || {};
he[ye];
var Ne = Object.getOwnPropertySymbols, kt = Object.prototype.hasOwnProperty, xt = Object.prototype.propertyIsEnumerable, _t = (t, l) => {
  var e = {};
  for (var a in t)
    kt.call(t, a) && l.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && Ne)
    for (var a of Ne(t))
      l.indexOf(a) < 0 && xt.call(t, a) && (e[a] = t[a]);
  return e;
};
function Et(t, l, e = {}) {
  const a = e, { window: n = He } = a, s = _t(a, ["window"]);
  let o;
  const c = St(() => n && "ResizeObserver" in n), u = () => {
    o && (o.disconnect(), o = void 0);
  }, r = W(() => ie(t), (d) => {
    u(), c.value && n && d && (o = new ResizeObserver(l), o.observe(d, s));
  }, { immediate: !0, flush: "post" }), i = () => {
    u(), r();
  };
  return bt(i), {
    isSupported: c,
    stop: i
  };
}
function Ct(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: a = He, box: n = "content-box" } = e, s = A(() => {
    var u, r;
    return (r = (u = ie(t)) == null ? void 0 : u.namespaceURI) == null ? void 0 : r.includes("svg");
  }), o = w(l.width), c = w(l.height);
  return Et(t, ([u]) => {
    const r = n === "border-box" ? u.borderBoxSize : n === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
    if (a && s.value) {
      const i = ie(t);
      if (i) {
        const d = a.getComputedStyle(i);
        o.value = parseFloat(d.width), c.value = parseFloat(d.height);
      }
    } else if (r) {
      const i = Array.isArray(r) ? r : [r];
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
const It = {
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
}, It);
function De(t, l) {
  const { containerStyle: e, wrapperProps: a, scrollTo: n, calculateRange: s, currentList: o, containerRef: c } = "itemHeight" in l ? zt(l, t) : Vt(l, t);
  return {
    list: o,
    scrollTo: n,
    containerProps: {
      ref: c,
      onScroll: () => {
        s();
      },
      style: e
    },
    wrapperProps: a
  };
}
function We(t) {
  const l = w(null), e = Ct(l), a = w([]), n = vt(t);
  return { state: w({ start: 0, end: 10 }), source: n, currentList: a, size: e, containerRef: l };
}
function Re(t, l, e) {
  return (a) => {
    if (typeof e == "number")
      return Math.ceil(a / e);
    const { start: n = 0 } = t.value;
    let s = 0, o = 0;
    for (let c = n; c < l.value.length; c++) {
      const u = e(c);
      if (s += u, o = c, s > a)
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
    for (let s = 0; s < t.value.length; s++) {
      const o = l(s);
      if (a += o, a >= e) {
        n = s;
        break;
      }
    }
    return n + 1;
  };
}
function Qe(t, l, e, a, { containerRef: n, state: s, currentList: o, source: c }) {
  return () => {
    const u = n.value;
    if (u) {
      const r = e(t === "vertical" ? u.scrollTop : u.scrollLeft), i = a(t === "vertical" ? u.clientHeight : u.clientWidth), d = r - l, p = r + i + l;
      s.value = {
        start: d < 0 ? 0 : d,
        end: p > c.value.length ? c.value.length : p
      }, o.value = c.value.slice(s.value.start, s.value.end).map((f, y) => ({
        data: f,
        index: y + s.value.start
      }));
    }
  };
}
function Ge(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, s, o) => n + t(o), 0);
}
function Je(t, l, e) {
  W([t.width, t.height, l], () => {
    e();
  });
}
function Xe(t, l) {
  return A(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, a, n) => e + t(n), 0));
}
const Ft = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Ye(t, l, e, a) {
  return (n) => {
    a.value && (a.value[Ft[t]] = e(n), l());
  };
}
function Vt(t, l) {
  const e = We(l), { state: a, source: n, currentList: s, size: o, containerRef: c } = e, u = { overflowX: "auto" }, { itemWidth: r, overscan: i = 5 } = t, d = Re(a, n, r), p = Ue(n, r), f = Qe("horizontal", i, p, d, e), y = Ge(r, n), S = A(() => y(a.value.start)), m = Xe(r, n);
  Je(o, l, f);
  const b = Ye("horizontal", f, y, c), V = A(() => ({
    style: {
      height: "100%",
      width: `${m.value - S.value}px`,
      marginLeft: `${S.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: b,
    calculateRange: f,
    wrapperProps: V,
    containerStyle: u,
    currentList: s,
    containerRef: c
  };
}
function zt(t, l) {
  const e = We(l), { state: a, source: n, currentList: s, size: o, containerRef: c } = e, u = { overflowY: "auto" }, { itemHeight: r, overscan: i = 5 } = t, d = Re(a, n, r), p = Ue(n, r), f = Qe("vertical", i, p, d, e), y = Ge(r, n), S = A(() => y(a.value.start)), m = Xe(r, n);
  Je(o, l, f);
  const b = Ye("vertical", f, y, c), V = A(() => ({
    style: {
      width: "100%",
      height: `${m.value - S.value}px`,
      marginTop: `${S.value}px`
    }
  }));
  return {
    calculateRange: f,
    scrollTo: b,
    containerStyle: u,
    wrapperProps: V,
    currentList: s,
    containerRef: c
  };
}
const H = (t) => {
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
    push: (n, s, o = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const c = t.map.get(n);
      if (c)
        c.value = s, c.data = o;
      else {
        let u = { value: s, key: n, data: o };
        t.value.push(u), t.map.set(u.key, u);
      }
    },
    addRange: (n) => {
      for (let s of n)
        t.actions.push(s.key, s.value, s.data);
    },
    remove: (n) => {
      t.value.splice(t.value.findIndex((s) => s.key == n), 1);
    },
    clear: () => {
      t.value = [], t.rebuildMap();
    },
    sort: (n = null) => {
      n == null && (n = (s, o) => s.value.localeCompare(o.value)), t.value = t.value.sort(n);
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
  t && (t.style.display = "none", gt(t));
}, Ke = (t, l, e, a, n = null) => {
  const s = w(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      s.value.clear();
      for (let r of e.value)
        s.value.set(r, r);
    }
  });
  const o = w([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let r of o.value)
        o.map.set(r.key, r);
  }, K(() => {
    l.value && (o.value = l.value.map((r) => ({ ...r, key: H(r.key) })), o.rebuildMap());
  }), t) {
    if (s.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((i) => H(i.value)).filter((i) => i != null))
        s.value.set(r, r);
      o.value = Array.apply(null, t.options).reduce((r, i) => (r.push({
        value: i.text,
        key: H(i.value),
        data: Object.keys(i.dataset).reduce((d, p) => (d[p] = Pt(i.dataset[p]), d), {})
      }), r), []);
    }
    if (t.matches("input")) {
      let r = t.value;
      r != null && r.length > 0 && (o.value = [{ value: r, key: r }]);
    }
    o.rebuildMap();
  }
  if (Array.isArray(a))
    for (let r of a)
      s.value.set(H(r), H(r));
  else
    a != null && s.value.set(H(a), H(a));
  (n == null || n === "" || n == 0) && (n = "extraselect_" + (++Mt).toString()), $t(o, s, n);
  const c = [];
  return s.value.forEach((r, i) => {
    c.push([i, r]);
  }), { options: o, selectedOptions: s, onReset: () => {
    s.value.clear();
    for (let [r, i] of c)
      s.value.set(r, i);
  } };
};
w({});
function Bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const me = (t = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), et(w(e), "defaults");
}, et = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, me());
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
  return et(l, (a = t == null ? void 0 : t.id) != null ? a : "extraselect_" + (++jt).toString()), { propLocalization: l, t: (n, s = {}) => {
    var c;
    let o = (c = l.value[n]) != null ? c : window.ExtraSelectLocalization.defaults.get(n);
    return o == null && (window.ExtraSelectLocalization.defaults.push(n, n), o = n), Bt(o, s);
  } };
}, Ie = async function(t, l = null, e = {}) {
  var s;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(s = e.headers) != null ? s : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, a)).json();
}, lt = (t, l, e, a, n, s, o = "limited", c = {}) => {
  const u = w(0), r = w(!1), i = A(() => r.value || u.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const d = {};
      K((p) => {
        var y;
        const f = (y = JSON.stringify(s.value)) != null ? y : "default";
        if (d[f] == null && (d[f] = []), a.value.length >= n) {
          let S = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              S = !d[f].includes(a.value);
              break;
            case "complete":
              S = d[f].reduce((m, b) => m && !a.value.startsWith(b), !0);
              break;
          }
          if (S) {
            r.value = !0;
            const m = setTimeout(() => {
              d[f].push(a.value), u.value += 1, c.body = { ...c.body, ...s.value }, Ie(l, a.value, c).then((b) => {
                t.actions.addRange(b), t.actions.sort(), u.value -= 1, r.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      Ie(l, null, c).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: i };
}, nt = (t, l, e, a = [], n = []) => {
  const s = w(""), o = w([]), c = w({}), u = { ...a.reduce((i, d) => (i[d] = !1, i), {}), ...n.reduce((i, d) => (i[d] = !0, i), {}) };
  for (let i in u) {
    let d = u[i], p = document.getElementById(i);
    c.value[i] = p == null ? void 0 : p.value, p && p.addEventListener("change", (f) => {
      c.value[i] = f.target.value, d && ue(() => {
        if (l != null)
          for (let y of Array.from(l.value.keys()))
            o.value.find((S) => S.key == y) || e(y, !1);
        else
          o.value.find((y) => y.key == s.value) || e(s.value, !1);
      });
    });
  }
  const r = function(i, d) {
    let p = i.value;
    return Object.keys(c.value).length > 0 && (p = p.filter((f) => {
      var y, S;
      for (let m in c.value)
        if ((u[m] ? !0 : ((y = c.value[m]) != null ? y : "").length > 0) && ((S = f.data) == null ? void 0 : S.hasOwnProperty(m))) {
          if (Array.isArray(f.data[m])) {
            if (!f.data[m].includes(c.value[m]))
              return !1;
          } else if (f.data[m] != c.value[m])
            return !1;
        }
      return !0;
    })), d.length > 0 && (p = p.filter((f) => f.value.toLowerCase().includes(d.toLowerCase()))), p;
  };
  return K(() => {
    o.value = r(t, s.value);
  }), { filterText: s, filteredOptions: o, filterValues: c };
}, at = (t, l, e, a, n, s, o) => {
  const c = getComputedStyle(document.querySelector("body")).font, u = function(d) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = c, f.measureText(d).width;
  }, r = A(() => {
    var p, f;
    const d = (p = se(a.value).width) != null ? p : 100;
    if (o === "inherit")
      return d;
    if (o == null || o === "dynamic") {
      const y = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(d, Math.max(...t.value.map((S) => u(S.value))) + 20 + y * 3);
    }
    return o;
  }), i = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return pt(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var d = se(a.value), p = se(null);
    if (s.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(s.value).position))
      var p = se(s.value);
    let f = -p.left + d.left;
    const y = window.document.documentElement.clientWidth;
    f + r.value > y && (f = y - r.value), i.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-p.top + d.top + d.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: i, getTextWidth: u };
}, qt = ["name"], Ht = {
  key: 1,
  class: "extra-select selection"
}, Dt = ["onClick"], Wt = ["innerHTML"], Rt = ["value", "disabled"], Ut = {
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
}, sl = Object.assign(ol, {
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
    var we, be, Oe, Se, ke, xe;
    const e = t, a = A(() => {
      var v, h;
      return (h = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? h : e.multiple;
    });
    let n = Fe();
    const { options: s, selectedOptions: o, onReset: c } = Ke(e.originalNode, Z(e, "options"), Z(e, "modelValue"), e.initialValue, (Oe = (be = (we = e.originalNode) == null ? void 0 : we.id) != null ? be : n.id) != null ? Oe : null), { t: u } = tt(e.originalNode, Z(e, "localization")), r = (Se = e.originalNode) == null ? void 0 : Se.classList, i = Object.values((xe = (ke = e.originalNode) == null ? void 0 : ke.style) != null ? xe : {});
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
    }, { filterText: f, filteredOptions: y, filterValues: S } = nt(s, o, p, e.filterFields, e.hardFilterFields), { searchingFlag: m } = lt(
      s,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      S,
      e.fetchMode,
      e.fetchOptions
    ), b = w(null), V = w(null), q = w(null), M = w(!1);
    function J(v) {
      e.disabled || (M.value = v);
    }
    W(f, () => {
      V.value.querySelector(".scroller").scrollTop = 0;
    });
    const B = w(null), R = function(v) {
      const h = G(v.target);
      h.push(v.target), !h.includes(b.value) && !h.includes(V.value) ? M.value = !1 : (v.stopImmediatePropagation(), v.preventDefault());
    };
    ge(() => {
      if (e.dropdownContainer) {
        let v = !1;
        B.value = G(b.value).find((h) => !!(h instanceof Element && (h.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(h).position))));
      }
      if (B.value == null && (B.value = document.querySelector("body")), e.originalNode) {
        for (let h of r)
          h != "extraselect" && b.value.classList.add(h);
        for (let h of i)
          b.value.style[h] = e.originalNode.style[h];
        let v = G(b.value, "form").pop();
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
    const { dropdownStyle: fe, getTextWidth: te } = at(s, o, M, b, V, B, e.maxWidth), U = (v) => {
      ue(
        () => {
          var h;
          return (h = e.originalNode) == null ? void 0 : h.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", v);
    }, le = (v) => {
      X(v, !1), f.value = "";
    }, X = (v, h = null) => {
      h == null && (h = !Q.value), h ? (o.value.clear(), s.value.forEach((L) => o.value.set(L.key, L.key))) : o.value.clear(), U(Array.from(o.value.keys()));
    }, ne = () => {
      C.value ? y.value.forEach((v) => {
        o.value.has(v.key) && o.value.delete(v.key);
      }) : y.value.forEach((v) => {
        o.value.has(v.key) || o.value.set(v.key, v.key);
      }), U(Array.from(o.value.keys()));
    };
    W(M, (v, h) => {
      v != h && (v ? e.search && ue(() => {
        q.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const Q = A(() => o.value.size == s.value.length), C = A(() => y.value.reduce((v, h) => v && o.value.has(h.key), !0)), x = A(() => o.value.size == 0), N = A(() => {
      var v, h, L, Y, E;
      if (s.value.length < 0)
        return "";
      if (a.value) {
        if (x.value)
          return u("No selection");
        if (!e.searchableUrl && Q.value)
          return u("All selected");
        const I = b.value ? getComputedStyle(b.value) : null, ae = ((v = b.value) == null ? void 0 : v.clientWidth) - parseInt(I == null ? void 0 : I.paddingLeft) - parseInt(I == null ? void 0 : I.paddingRight);
        let oe = u(":n selected - ", { n: o.value.size }), _e = !0;
        for (let ut of o.value)
          if (_e ? _e = !1 : oe += ", ", oe += (L = (h = s.map.get(ut[0])) == null ? void 0 : h.value) != null ? L : m.value ? u("Loading...") : u("Value not found"), ae < te(oe))
            return o.value.size + u(" selected");
        return oe;
      } else
        for (let I of o.value)
          return (E = (Y = s.map.get(I[0])) == null ? void 0 : Y.value) != null ? E : m.value ? u("Loading...") : u("Value not found");
      return u("No selection");
    }), { list: T, containerProps: rt, wrapperProps: it } = De(
      y,
      {
        itemHeight: 32
      }
    );
    return (v, h) => {
      var L, Y;
      return O(), k(j, null, [
        a.value && g(o).size == 0 ? (O(), k("input", {
          key: 0,
          type: "hidden",
          name: (Y = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : Y.replace("[]", ""),
          value: ""
        }, null, 8, qt)) : F("", !0),
        e.showSelected ? (O(), k("div", Ht, [
          (O(!0), k(j, null, re(g(o), (E) => {
            var I;
            return O(), k("div", {
              key: E,
              onClick: D((ae) => p(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              Ee($((I = g(s).find((ae) => ae.key == E[0])) == null ? void 0 : I.value) + " ", 1),
              _("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Wt)
            ], 8, Dt);
          }), 128))
        ])) : F("", !0),
        _("input", ce({
          onFocus: h[0] || (h[0] = (E) => J(!0)),
          onClick: h[1] || (h[1] = D((E) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: b,
          value: N.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs, { disabled: t.disabled }), null, 16, Rt),
        B.value ? (O(), ve(pe, {
          key: 2,
          to: B.value
        }, [
          de(_("div", {
            class: ze(["extra-select dropdown", { searching: g(m) > 0 }]),
            ref_key: "dropdownNode",
            ref: V,
            style: Pe(g(fe))
          }, [
            e.search ? (O(), k("div", Ut, [
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
                placeholder: g(u)("Search...")
              }, null, 8, Qt), [
                [ht, g(f)]
              ])
            ])) : F("", !0),
            g(f).length >= e.minChars ? (O(), k(j, { key: 1 }, [
              a.value ? (O(), k("div", Gt, [
                g(f).length == 0 ? (O(), k("div", {
                  key: 0,
                  onClick: D(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Jt, [
                    _("input", {
                      checked: Q.value,
                      type: "checkbox"
                    }, null, 8, Xt),
                    _("b", null, $(g(u)("Select all")), 1)
                  ])
                ])) : F("", !0),
                g(y).length > 0 && g(f).length > 0 ? (O(), k("div", {
                  key: 1,
                  onClick: D(ne, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Yt, [
                    _("input", {
                      checked: C.value,
                      type: "checkbox"
                    }, null, 8, Zt),
                    _("b", null, $(g(u)("Select Filtered")), 1)
                  ])
                ])) : F("", !0),
                _("div", {
                  class: "clear",
                  onClick: D(le, ["stop", "prevent"])
                }, $(g(u)("Clear")), 1)
              ])) : F("", !0),
              g(y).length == 0 ? (O(), k("div", Kt, $(g(u)("No matches found")), 1)) : F("", !0)
            ], 64)) : (O(), k("div", el, $(g(u)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", ce(g(rt), { class: "scroller" }), [
              _("div", Me(Be(g(it))), [
                (O(!0), k(j, null, re(g(T), (E) => (O(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: D((I) => p(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", ll, [
                    a.value ? (O(), k("input", {
                      key: 0,
                      checked: g(o).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, nl)) : F("", !0),
                    Ee(" " + $(E.data.value), 1)
                  ])
                ], 8, tl))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [je, M.value]
          ])
        ], 8, ["to"])) : F("", !0),
        e.originalNode ? (O(), ve(pe, {
          key: 3,
          to: e.originalNode
        }, [
          (O(!0), k(j, null, re(g(o), (E) => (O(), k("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, al))), 128))
        ], 8, ["to"])) : F("", !0)
      ], 64);
    };
  }
}), rl = ["disabled"], il = {
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
    let a = Fe();
    const { options: n } = Ke(e.originalNode, Z(e, "options"), w([]), null, (le = (U = (te = e.originalNode) == null ? void 0 : te.id) != null ? U : a.id) != null ? le : null), { t: s } = tt(e.originalNode, Z(e, "localization")), o = (X = e.originalNode) == null ? void 0 : X.classList, c = Object.values((Q = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? Q : {});
    Ze(e.originalNode);
    const u = l, r = (C, x = null) => {
      x === !1 ? i.value = "" : i.value = n.map.get(C).value, m.value = !1;
    }, { filterText: i, filteredOptions: d, filterValues: p } = nt(n, null, r, e.filterFields, e.hardFilterFields), { searchingFlag: f } = lt(
      n,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), y = w(null), S = w(null), m = w(!1), b = w(null);
    function V(C) {
      e.disabled || (m.value = C);
    }
    W(i, () => {
      S.value.querySelector(".scroller").scrollTop = 0;
    });
    const q = function(C) {
      const x = G(C.target);
      x.push(C.target), !x.includes(y.value) && !x.includes(S.value) && (m.value = !1);
    };
    ge(() => {
      if (e.dropdownContainer) {
        let N = !1;
        b.value = G(y.value).find((T) => !!(T instanceof Element && (T.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(T).position))));
      }
      if (b.value == null && (b.value = document.querySelector("body")), e.originalNode) {
        for (let T of o)
          T != "extrasuggest" && y.value.classList.add(T);
        for (let T of c)
          y.value.style[T] = e.originalNode.style[T];
        i.value = e.originalNode.value;
        let N = G(y.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      K(() => {
        e.modelValue != null && (i.value = e.modelValue);
      });
      const C = i.value, x = () => {
        i.value = C;
      };
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), Ve(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: M } = at(n, w([]), m, y, S, b, e.maxWidth), J = (C = !1) => {
      var x;
      e.originalNode && (C ? i.value = e.originalNode.value : (e.originalNode.value = i.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), u("update:modelValue", i.value);
    };
    W(() => m.value, (C) => {
      C === !1 && J();
    });
    const { list: B, containerProps: R, wrapperProps: fe } = De(
      d,
      {
        itemHeight: 32
      }
    );
    return (C, x) => (O(), k(j, null, [
      de(_("input", ce({
        onFocus: x[0] || (x[0] = (N) => V(!0)),
        onClick: x[1] || (x[1] = (N) => V(!0)),
        ref_key: "inputNode",
        ref: y,
        "onUpdate:modelValue": x[2] || (x[2] = (N) => $e(i) ? i.value = N : null),
        class: "extra-select extra-select-input"
      }, C.$attrs, { disabled: t.disabled }), null, 16, rl), [
        [yt, g(i)]
      ]),
      b.value ? (O(), ve(pe, {
        key: 0,
        to: b.value
      }, [
        de(_("div", {
          class: ze(["extra-select dropdown", { searching: g(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: S,
          style: Pe(g(M))
        }, [
          g(i).length >= e.minChars ? (O(), k(j, { key: 0 }, [
            g(d).length == 0 ? (O(), k("div", il, $(g(s)("No matches found")), 1)) : F("", !0)
          ], 64)) : (O(), k("div", ul, $(g(s)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", ce(g(R), { class: "scroller" }), [
            _("div", Me(Be(g(fe))), [
              (O(!0), k(j, null, re(g(B), (N) => (O(), k("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: D((T) => r(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", dl, $(N.data.value), 1)
              ], 8, cl))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [je, m.value]
        ])
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), hl = me, ot = {
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
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const a = qe(sl, l);
      a.mount(e), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
      });
    });
  }
}, st = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      st.bindNew(t);
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
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const a = qe(vl, l);
      a.mount(e), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  ot.init(), st.init(), me();
});
export {
  ot as ExtraSelect,
  st as ExtraSuggest,
  hl as loadExtraSelectDefaultLocalization
};
