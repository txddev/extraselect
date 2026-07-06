import { unref as w, getCurrentScope as ct, onScopeDispose as dt, getCurrentInstance as ft, onMounted as ge, nextTick as ue, computed as T, ref as O, shallowRef as vt, watch as D, watchEffect as K, watchPostEffect as pt, useAttrs as Ve, toRef as Z, onUnmounted as Fe, openBlock as S, createElementBlock as k, Fragment as j, createCommentVNode as F, renderList as re, withModifiers as W, createTextVNode as Ee, toDisplayString as $, createElementVNode as _, mergeProps as ce, createBlock as ve, Teleport as pe, withDirectives as de, normalizeClass as ze, normalizeStyle as Pe, isRef as $e, vModelText as ht, normalizeProps as Me, guardReactiveProps as Be, vShow as je, vModelDynamic as yt, createApp as qe } from "vue";
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
  return typeof t == "function" ? t() : w(t);
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
  const e = O(), a = () => e.value = Boolean(t());
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
  const d = St(() => n && "ResizeObserver" in n), i = () => {
    o && (o.disconnect(), o = void 0);
  }, r = D(() => ie(t), (f) => {
    i(), d.value && n && f && (o = new ResizeObserver(l), o.observe(f, s));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), r();
  };
  return bt(c), {
    isSupported: d,
    stop: c
  };
}
function Ct(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: a = He, box: n = "content-box" } = e, s = T(() => {
    var i, r;
    return (r = (i = ie(t)) == null ? void 0 : i.namespaceURI) == null ? void 0 : r.includes("svg");
  }), o = O(l.width), d = O(l.height);
  return Et(t, ([i]) => {
    const r = n === "border-box" ? i.borderBoxSize : n === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    if (a && s.value) {
      const c = ie(t);
      if (c) {
        const f = a.getComputedStyle(c);
        o.value = parseFloat(f.width), d.value = parseFloat(f.height);
      }
    } else if (r) {
      const c = Array.isArray(r) ? r : [r];
      o.value = c.reduce((f, { inlineSize: m }) => f + m, 0), d.value = c.reduce((f, { blockSize: m }) => f + m, 0);
    } else
      o.value = i.contentRect.width, d.value = i.contentRect.height;
  }, e), D(() => ie(t), (i) => {
    o.value = i ? l.width : 0, d.value = i ? l.height : 0;
  }), {
    width: o,
    height: d
  };
}
var Le;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Le || (Le = {}));
var Nt = Object.defineProperty, Te = Object.getOwnPropertySymbols, Lt = Object.prototype.hasOwnProperty, Tt = Object.prototype.propertyIsEnumerable, Ae = (t, l, e) => l in t ? Nt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, At = (t, l) => {
  for (var e in l || (l = {}))
    Lt.call(l, e) && Ae(t, e, l[e]);
  if (Te)
    for (var e of Te(l))
      Tt.call(l, e) && Ae(t, e, l[e]);
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
At({
  linear: wt
}, It);
function We(t, l) {
  const { containerStyle: e, wrapperProps: a, scrollTo: n, calculateRange: s, currentList: o, containerRef: d } = "itemHeight" in l ? zt(l, t) : Ft(l, t);
  return {
    list: o,
    scrollTo: n,
    containerProps: {
      ref: d,
      onScroll: () => {
        s();
      },
      style: e
    },
    wrapperProps: a
  };
}
function De(t) {
  const l = O(null), e = Ct(l), a = O([]), n = vt(t);
  return { state: O({ start: 0, end: 10 }), source: n, currentList: a, size: e, containerRef: l };
}
function Re(t, l, e) {
  return (a) => {
    if (typeof e == "number")
      return Math.ceil(a / e);
    const { start: n = 0 } = t.value;
    let s = 0, o = 0;
    for (let d = n; d < l.value.length; d++) {
      const i = e(d);
      if (s += i, o = d, s > a)
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
function Qe(t, l, e, a, { containerRef: n, state: s, currentList: o, source: d }) {
  return () => {
    const i = n.value;
    if (i) {
      const r = e(t === "vertical" ? i.scrollTop : i.scrollLeft), c = a(t === "vertical" ? i.clientHeight : i.clientWidth), f = r - l, m = r + c + l;
      s.value = {
        start: f < 0 ? 0 : f,
        end: m > d.value.length ? d.value.length : m
      }, o.value = d.value.slice(s.value.start, s.value.end).map((u, h) => ({
        data: u,
        index: h + s.value.start
      }));
    }
  };
}
function Ge(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, s, o) => n + t(o), 0);
}
function Je(t, l, e) {
  D([t.width, t.height, l], () => {
    e();
  });
}
function Xe(t, l) {
  return T(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, a, n) => e + t(n), 0));
}
const Vt = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Ye(t, l, e, a) {
  return (n) => {
    a.value && (a.value[Vt[t]] = e(n), l());
  };
}
function Ft(t, l) {
  const e = De(l), { state: a, source: n, currentList: s, size: o, containerRef: d } = e, i = { overflowX: "auto" }, { itemWidth: r, overscan: c = 5 } = t, f = Re(a, n, r), m = Ue(n, r), u = Qe("horizontal", c, m, f, e), h = Ge(r, n), g = T(() => h(a.value.start)), b = Xe(r, n);
  Je(o, l, u);
  const y = Ye("horizontal", u, h, d), A = T(() => ({
    style: {
      height: "100%",
      width: `${b.value - g.value}px`,
      marginLeft: `${g.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: y,
    calculateRange: u,
    wrapperProps: A,
    containerStyle: i,
    currentList: s,
    containerRef: d
  };
}
function zt(t, l) {
  const e = De(l), { state: a, source: n, currentList: s, size: o, containerRef: d } = e, i = { overflowY: "auto" }, { itemHeight: r, overscan: c = 5 } = t, f = Re(a, n, r), m = Ue(n, r), u = Qe("vertical", c, m, f, e), h = Ge(r, n), g = T(() => h(a.value.start)), b = Xe(r, n);
  Je(o, l, u);
  const y = Ye("vertical", u, h, d), A = T(() => ({
    style: {
      width: "100%",
      height: `${b.value - g.value}px`,
      marginTop: `${g.value}px`
    }
  }));
  return {
    calculateRange: u,
    scrollTo: y,
    containerStyle: i,
    wrapperProps: A,
    currentList: s,
    containerRef: d
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
      const d = t.map.get(n);
      if (d)
        d.value = s, d.data = o;
      else {
        let i = { value: s, key: n, data: o };
        t.value.push(i), t.map.set(i.key, i);
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
  const s = O(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      s.value.clear();
      for (let r of e.value)
        s.value.set(r, r);
    }
  });
  const o = O([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let r of o.value)
        o.map.set(r.key, r);
  }, K(() => {
    l.value && (o.value = l.value.map((r) => ({ ...r, key: H(r.key) })), o.rebuildMap());
  }), t) {
    if (s.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((c) => H(c.value)).filter((c) => c != null))
        s.value.set(r, r);
      o.value = Array.apply(null, t.options).reduce((r, c) => (r.push({
        value: c.text,
        key: H(c.value),
        data: Object.keys(c.dataset).reduce((f, m) => (f[m] = Pt(c.dataset[m]), f), {})
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
  const d = [];
  return s.value.forEach((r, c) => {
    d.push([c, r]);
  }), { options: o, selectedOptions: s, onReset: () => {
    s.value.clear();
    for (let [r, c] of d)
      s.value.set(r, c);
  } };
};
O({});
function Bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const me = (t = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), et(O(e), "defaults");
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
    var d;
    let o = (d = l.value[n]) != null ? d : window.ExtraSelectLocalization.defaults.get(n);
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
}, lt = (t, l, e, a, n, s, o = "limited", d = {}) => {
  const i = O(0), r = O(!1), c = T(() => r.value || i.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const f = {};
      K((m) => {
        var h;
        const u = (h = JSON.stringify(s.value)) != null ? h : "default";
        if (f[u] == null && (f[u] = []), a.value.length >= n) {
          let g = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              g = !f[u].includes(a.value);
              break;
            case "complete":
              g = f[u].reduce((b, y) => b && !a.value.startsWith(y), !0);
              break;
          }
          if (g) {
            r.value = !0;
            const b = setTimeout(() => {
              f[u].push(a.value), i.value += 1, d.body = { ...d.body, ...s.value }, Ie(l, a.value, d).then((y) => {
                t.actions.addRange(y), t.actions.sort(), i.value -= 1, r.value = !1;
              });
            }, 500);
            m(() => {
              clearTimeout(b);
            });
          }
        }
      });
    } else
      Ie(l, null, d).then((f) => {
        t.actions.addRange(f), t.actions.sort();
      });
  return { searchingFlag: c };
}, nt = (t, l, e, a = [], n = [], s = "exact") => {
  const o = O(""), d = O([]), i = O({}), r = { ...a.reduce((f, m) => (f[m] = !1, f), {}), ...n.reduce((f, m) => (f[m] = !0, f), {}) };
  for (let f in r) {
    let m = r[f], u = document.getElementById(f);
    i.value[f] = u == null ? void 0 : u.value, u && u.addEventListener("change", (h) => {
      i.value[f] = h.target.value, m && ue(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            d.value.find((b) => b.key == g) || e(g, !1);
        else
          d.value.find((g) => g.key == o.value) || e(o.value, !1);
      });
    });
  }
  const c = function(f, m) {
    let u = f.value;
    if (Object.keys(i.value).length > 0 && (u = u.filter((h) => {
      var g, b;
      for (let y in i.value)
        if ((r[y] ? !0 : ((g = i.value[y]) != null ? g : "").length > 0) && ((b = h.data) == null ? void 0 : b.hasOwnProperty(y))) {
          if (Array.isArray(h.data[y])) {
            if (!h.data[y].includes(i.value[y]))
              return !1;
          } else if (h.data[y] != i.value[y])
            return !1;
        }
      return !0;
    })), m.length > 0)
      switch (s) {
        case "loose":
          const h = m.toLowerCase().split(" ").filter((g) => g.length > 0);
          u = u.filter((g) => {
            const b = g.value.toLowerCase();
            return h.every((y) => b.includes(y));
          });
          break;
        default:
          u = u.filter((g) => g.value.toLowerCase().includes(m.toLowerCase()));
          break;
      }
    return u;
  };
  return K(() => {
    d.value = c(t, o.value);
  }), { filterText: o, filteredOptions: d, filterValues: i };
}, at = (t, l, e, a, n, s, o) => {
  const d = getComputedStyle(document.querySelector("body")).font, r = document.createElement("canvas").getContext("2d");
  r.font = d;
  const c = function(u) {
    return r.measureText(u != null ? u : "").width;
  }, f = T(() => {
    var h, g;
    const u = (h = se(a.value).width) != null ? h : 100;
    if (o === "inherit")
      return u;
    if (o == null || o === "dynamic") {
      const b = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(u, Math.max(...t.value.map((y) => c(y.value))) + 20 + b * 3);
    }
    return o;
  }), m = O({
    position: "absolute",
    "min-width": "max-content"
  });
  return pt(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var u = se(a.value), h = se(null);
    if (s.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(s.value).position))
      var h = se(s.value);
    let g = -h.left + u.left;
    const b = window.document.documentElement.clientWidth;
    g + f.value > b && (g = b - f.value), m.value = {
      position: "absolute",
      "min-width": "max-content",
      width: f.value.toString() + "px",
      top: (-h.top + u.top + u.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: m, getTextWidth: c };
}, qt = ["name"], Ht = {
  key: 1,
  class: "extra-select selection"
}, Wt = ["onClick"], Dt = ["innerHTML"], Rt = ["value", "disabled"], Ut = {
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
  setup(t, { emit: l }) {
    var we, be, Oe, Se, ke, xe;
    const e = t, a = T(() => {
      var v, p;
      return (p = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? p : e.multiple;
    });
    let n = Ve();
    const { options: s, selectedOptions: o, onReset: d } = Ke(e.originalNode, Z(e, "options"), Z(e, "modelValue"), e.initialValue, (Oe = (be = (we = e.originalNode) == null ? void 0 : we.id) != null ? be : n.id) != null ? Oe : null), { t: i } = tt(e.originalNode, Z(e, "localization")), r = (Se = e.originalNode) == null ? void 0 : Se.classList, c = Object.values((xe = (ke = e.originalNode) == null ? void 0 : ke.style) != null ? xe : {});
    Ze(e.originalNode);
    const f = l, m = (v, p = null) => {
      if (a.value) {
        let L = p;
        switch (L == null && (L = !o.value.has(v)), L) {
          case !0:
            o.value.set(v, v);
            break;
          case !1:
            o.value.delete(v);
            break;
        }
      } else
        o.value.clear(), p !== !1 && o.value.set(v, v), M.value = !1;
      U(Array.from(o.value.keys()));
    }, { filterText: u, filteredOptions: h, filterValues: g } = nt(s, o, m, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: b } = lt(
      s,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), y = O(null), A = O(null), q = O(null), M = O(!1);
    function J(v) {
      e.disabled || (M.value = v);
    }
    D(u, () => {
      A.value.querySelector(".scroller").scrollTop = 0;
    });
    const B = O(null), R = function(v) {
      const p = G(v.target);
      p.push(v.target), !p.includes(y.value) && !p.includes(A.value) ? M.value = !1 : (v.stopImmediatePropagation(), v.preventDefault());
    };
    ge(() => {
      if (e.dropdownContainer) {
        let v = !1;
        B.value = G(y.value).find((p) => !!(p instanceof Element && (p.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(p).position))));
      }
      if (B.value == null && (B.value = document.querySelector("body")), e.originalNode) {
        for (let p of r)
          p != "extraselect" && y.value.classList.add(p);
        for (let p of c)
          y.value.style[p] = e.originalNode.style[p];
        let v = G(y.value, "form").pop();
        v instanceof HTMLElement && v.matches("form") && v.addEventListener("reset", () => setTimeout(d)), e.originalNode.toggleValue = m, e.originalNode.setValues = (p) => {
          o.value.clear();
          for (let L of p)
            m(L);
        };
      }
      window.document.addEventListener("mousedown", R), window.document.addEventListener("focusin", R);
    }), Fe(() => {
      window.document.removeEventListener("mousedown", R), window.document.removeEventListener("focusin", R);
    });
    const { dropdownStyle: fe, getTextWidth: te } = at(s, o, M, y, A, B, e.maxWidth), U = (v) => {
      ue(
        () => {
          var p;
          return (p = e.originalNode) == null ? void 0 : p.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), f("update:modelValue", v);
    }, le = (v) => {
      X(v, !1), u.value = "";
    }, X = (v, p = null) => {
      p == null && (p = !Q.value), p ? (o.value.clear(), s.value.forEach((L) => o.value.set(L.key, L.key))) : o.value.clear(), U(Array.from(o.value.keys()));
    }, ne = () => {
      C.value ? h.value.forEach((v) => {
        o.value.has(v.key) && o.value.delete(v.key);
      }) : h.value.forEach((v) => {
        o.value.has(v.key) || o.value.set(v.key, v.key);
      }), U(Array.from(o.value.keys()));
    };
    D(M, (v, p) => {
      v != p && (v ? e.search && ue(() => {
        q.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const Q = T(() => o.value.size == s.value.length), C = T(() => h.value.reduce((v, p) => v && o.value.has(p.key), !0)), x = T(() => o.value.size == 0), N = T(() => {
      var v, p, L, Y, E;
      if (s.value.length < 0)
        return "";
      if (a.value) {
        if (x.value)
          return i("No selection");
        if (!e.searchableUrl && Q.value)
          return i("All selected");
        const V = y.value ? getComputedStyle(y.value) : null, ae = ((v = y.value) == null ? void 0 : v.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let oe = i(":n selected - ", { n: o.value.size }), _e = !0;
        for (let ut of o.value)
          if (_e ? _e = !1 : oe += ", ", oe += (L = (p = s.map.get(ut[0])) == null ? void 0 : p.value) != null ? L : b.value ? i("Loading...") : i("Value not found"), ae < te(oe))
            return o.value.size + i(" selected");
        return oe;
      } else
        for (let V of o.value)
          return (E = (Y = s.map.get(V[0])) == null ? void 0 : Y.value) != null ? E : b.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: I, containerProps: rt, wrapperProps: it } = We(
      h,
      {
        itemHeight: 32
      }
    );
    return (v, p) => {
      var L, Y;
      return S(), k(j, null, [
        a.value && w(o).size == 0 ? (S(), k("input", {
          key: 0,
          type: "hidden",
          name: (Y = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : Y.replace("[]", ""),
          value: ""
        }, null, 8, qt)) : F("", !0),
        e.showSelected ? (S(), k("div", Ht, [
          (S(!0), k(j, null, re(w(o), (E) => {
            var V;
            return S(), k("div", {
              key: E,
              onClick: W((ae) => m(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              Ee($((V = w(s).find((ae) => ae.key == E[0])) == null ? void 0 : V.value) + " ", 1),
              _("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Dt)
            ], 8, Wt);
          }), 128))
        ])) : F("", !0),
        _("input", ce({
          onFocus: p[0] || (p[0] = (E) => J(!0)),
          onClick: p[1] || (p[1] = W((E) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: y,
          value: N.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs, { disabled: t.disabled }), null, 16, Rt),
        B.value ? (S(), ve(pe, {
          key: 2,
          to: B.value
        }, [
          de(_("div", {
            class: ze(["extra-select dropdown", { searching: w(b) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: Pe(w(fe))
          }, [
            e.search ? (S(), k("div", Ut, [
              de(_("input", {
                ref_key: "searchNode",
                ref: q,
                class: "extra-select-search",
                "onUpdate:modelValue": p[2] || (p[2] = (E) => $e(u) ? u.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: w(i)("Search...")
              }, null, 8, Qt), [
                [ht, w(u)]
              ])
            ])) : F("", !0),
            w(u).length >= e.minChars ? (S(), k(j, { key: 1 }, [
              a.value ? (S(), k("div", Gt, [
                w(u).length == 0 ? (S(), k("div", {
                  key: 0,
                  onClick: W(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Jt, [
                    _("input", {
                      checked: Q.value,
                      type: "checkbox"
                    }, null, 8, Xt),
                    _("b", null, $(w(i)("Select all")), 1)
                  ])
                ])) : F("", !0),
                w(h).length > 0 && w(u).length > 0 ? (S(), k("div", {
                  key: 1,
                  onClick: W(ne, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Yt, [
                    _("input", {
                      checked: C.value,
                      type: "checkbox"
                    }, null, 8, Zt),
                    _("b", null, $(w(i)("Select Filtered")), 1)
                  ])
                ])) : F("", !0),
                _("div", {
                  class: "clear",
                  onClick: W(le, ["stop", "prevent"])
                }, $(w(i)("Clear")), 1)
              ])) : F("", !0),
              w(h).length == 0 ? (S(), k("div", Kt, $(w(i)("No matches found")), 1)) : F("", !0)
            ], 64)) : (S(), k("div", el, $(w(i)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", ce(w(rt), { class: "scroller" }), [
              _("div", Me(Be(w(it))), [
                (S(!0), k(j, null, re(w(I), (E) => (S(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: W((V) => m(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", ll, [
                    a.value ? (S(), k("input", {
                      key: 0,
                      checked: w(o).has(E.data.key),
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
        e.originalNode ? (S(), ve(pe, {
          key: 3,
          to: e.originalNode
        }, [
          (S(!0), k(j, null, re(w(o), (E) => (S(), k("option", {
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
  setup(t, { emit: l }) {
    var te, U, le, X, ne, Q;
    const e = t;
    let a = Ve();
    const { options: n } = Ke(e.originalNode, Z(e, "options"), O([]), null, (le = (U = (te = e.originalNode) == null ? void 0 : te.id) != null ? U : a.id) != null ? le : null), { t: s } = tt(e.originalNode, Z(e, "localization")), o = (X = e.originalNode) == null ? void 0 : X.classList, d = Object.values((Q = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? Q : {});
    Ze(e.originalNode);
    const i = l, r = (C, x = null) => {
      x === !1 ? c.value = "" : c.value = n.map.get(C).value, b.value = !1;
    }, { filterText: c, filteredOptions: f, filterValues: m } = nt(n, null, r, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: u } = lt(
      n,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), h = O(null), g = O(null), b = O(!1), y = O(null);
    function A(C) {
      e.disabled || (b.value = C);
    }
    D(c, () => {
      g.value.querySelector(".scroller").scrollTop = 0;
    });
    const q = function(C) {
      const x = G(C.target);
      x.push(C.target), !x.includes(h.value) && !x.includes(g.value) && (b.value = !1);
    };
    ge(() => {
      if (e.dropdownContainer) {
        let N = !1;
        y.value = G(h.value).find((I) => !!(I instanceof Element && (I.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(I).position))));
      }
      if (y.value == null && (y.value = document.querySelector("body")), e.originalNode) {
        for (let I of o)
          I != "extrasuggest" && h.value.classList.add(I);
        for (let I of d)
          h.value.style[I] = e.originalNode.style[I];
        c.value = e.originalNode.value;
        let N = G(h.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      K(() => {
        e.modelValue != null && (c.value = e.modelValue);
      });
      const C = c.value, x = () => {
        c.value = C;
      };
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), Fe(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: M } = at(n, O([]), b, h, g, y, e.maxWidth), J = (C = !1) => {
      var x;
      e.originalNode && (C ? c.value = e.originalNode.value : (e.originalNode.value = c.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), i("update:modelValue", c.value);
    };
    D(() => b.value, (C) => {
      C === !1 && J();
    });
    const { list: B, containerProps: R, wrapperProps: fe } = We(
      f,
      {
        itemHeight: 32
      }
    );
    return (C, x) => (S(), k(j, null, [
      de(_("input", ce({
        onFocus: x[0] || (x[0] = (N) => A(!0)),
        onClick: x[1] || (x[1] = (N) => A(!0)),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": x[2] || (x[2] = (N) => $e(c) ? c.value = N : null),
        class: "extra-select extra-select-input"
      }, C.$attrs, { disabled: t.disabled }), null, 16, rl), [
        [yt, w(c)]
      ]),
      y.value ? (S(), ve(pe, {
        key: 0,
        to: y.value
      }, [
        de(_("div", {
          class: ze(["extra-select dropdown", { searching: w(u) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Pe(w(M))
        }, [
          w(c).length >= e.minChars ? (S(), k(j, { key: 0 }, [
            w(f).length == 0 ? (S(), k("div", il, $(w(s)("No matches found")), 1)) : F("", !0)
          ], 64)) : (S(), k("div", ul, $(w(s)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", ce(w(R), { class: "scroller" }), [
            _("div", Me(Be(w(fe))), [
              (S(!0), k(j, null, re(w(B), (N) => (S(), k("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: W((I) => r(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                _("div", dl, $(N.data.value), 1)
              ], 8, cl))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [je, b.value]
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
