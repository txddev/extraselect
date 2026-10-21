import { unref as w, getCurrentScope as dt, onScopeDispose as ft, getCurrentInstance as vt, onMounted as me, nextTick as ie, computed as T, ref as O, shallowRef as pt, watch as D, watchEffect as K, watchPostEffect as ht, useAttrs as Fe, toRef as Z, onUnmounted as ze, openBlock as k, createElementBlock as S, Fragment as M, createCommentVNode as F, renderList as se, withModifiers as W, createTextVNode as Ce, toDisplayString as $, createElementVNode as E, mergeProps as ce, createBlock as ve, Teleport as pe, withDirectives as de, normalizeClass as he, normalizeStyle as Pe, isRef as $e, vModelText as yt, normalizeProps as Me, guardReactiveProps as Be, vShow as je, vModelDynamic as gt, createApp as qe } from "vue";
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
var Ne;
const ee = typeof window < "u";
ee && ((Ne = window == null ? void 0 : window.navigator) == null ? void 0 : Ne.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wt(t) {
  return typeof t == "function" ? t() : w(t);
}
function bt(t) {
  return t;
}
function kt(t) {
  return dt() ? (ft(t), !0) : !1;
}
function Ot(t, l = !0) {
  vt() ? me(t) : l ? t() : ie(t);
}
function ue(t) {
  var l;
  const e = wt(t);
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
const ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__";
ye[ge] = ye[ge] || {};
ye[ge];
var Le = Object.getOwnPropertySymbols, xt = Object.prototype.hasOwnProperty, _t = Object.prototype.propertyIsEnumerable, Et = (t, l) => {
  var e = {};
  for (var a in t)
    xt.call(t, a) && l.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && Le)
    for (var a of Le(t))
      l.indexOf(a) < 0 && _t.call(t, a) && (e[a] = t[a]);
  return e;
};
function Ct(t, l, e = {}) {
  const a = e, { window: n = He } = a, r = Et(a, ["window"]);
  let o;
  const d = St(() => n && "ResizeObserver" in n), u = () => {
    o && (o.disconnect(), o = void 0);
  }, s = D(() => ue(t), (f) => {
    u(), d.value && n && f && (o = new ResizeObserver(l), o.observe(f, r));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return kt(c), {
    isSupported: d,
    stop: c
  };
}
function Nt(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: a = He, box: n = "content-box" } = e, r = T(() => {
    var u, s;
    return (s = (u = ue(t)) == null ? void 0 : u.namespaceURI) == null ? void 0 : s.includes("svg");
  }), o = O(l.width), d = O(l.height);
  return Ct(t, ([u]) => {
    const s = n === "border-box" ? u.borderBoxSize : n === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
    if (a && r.value) {
      const c = ue(t);
      if (c) {
        const f = a.getComputedStyle(c);
        o.value = parseFloat(f.width), d.value = parseFloat(f.height);
      }
    } else if (s) {
      const c = Array.isArray(s) ? s : [s];
      o.value = c.reduce((f, { inlineSize: m }) => f + m, 0), d.value = c.reduce((f, { blockSize: m }) => f + m, 0);
    } else
      o.value = u.contentRect.width, d.value = u.contentRect.height;
  }, e), D(() => ue(t), (u) => {
    o.value = u ? l.width : 0, d.value = u ? l.height : 0;
  }), {
    width: o,
    height: d
  };
}
var Te;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Te || (Te = {}));
var Lt = Object.defineProperty, Ae = Object.getOwnPropertySymbols, Tt = Object.prototype.hasOwnProperty, At = Object.prototype.propertyIsEnumerable, Ie = (t, l, e) => l in t ? Lt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, It = (t, l) => {
  for (var e in l || (l = {}))
    Tt.call(l, e) && Ie(t, e, l[e]);
  if (Ae)
    for (var e of Ae(l))
      At.call(l, e) && Ie(t, e, l[e]);
  return t;
};
const Vt = {
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
It({
  linear: bt
}, Vt);
function We(t, l) {
  const { containerStyle: e, wrapperProps: a, scrollTo: n, calculateRange: r, currentList: o, containerRef: d } = "itemHeight" in l ? Pt(l, t) : zt(l, t);
  return {
    list: o,
    scrollTo: n,
    containerProps: {
      ref: d,
      onScroll: () => {
        r();
      },
      style: e
    },
    wrapperProps: a
  };
}
function De(t) {
  const l = O(null), e = Nt(l), a = O([]), n = pt(t);
  return { state: O({ start: 0, end: 10 }), source: n, currentList: a, size: e, containerRef: l };
}
function Re(t, l, e) {
  return (a) => {
    if (typeof e == "number")
      return Math.ceil(a / e);
    const { start: n = 0 } = t.value;
    let r = 0, o = 0;
    for (let d = n; d < l.value.length; d++) {
      const u = e(d);
      if (r += u, o = d, r > a)
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
function Qe(t, l, e, a, { containerRef: n, state: r, currentList: o, source: d }) {
  return () => {
    const u = n.value;
    if (u) {
      const s = e(t === "vertical" ? u.scrollTop : u.scrollLeft), c = a(t === "vertical" ? u.clientHeight : u.clientWidth), f = s - l, m = s + c + l;
      r.value = {
        start: f < 0 ? 0 : f,
        end: m > d.value.length ? d.value.length : m
      }, o.value = d.value.slice(r.value.start, r.value.end).map((i, h) => ({
        data: i,
        index: h + r.value.start
      }));
    }
  };
}
function Ge(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, r, o) => n + t(o), 0);
}
function Je(t, l, e) {
  D([t.width, t.height, l], () => {
    e();
  });
}
function Xe(t, l) {
  return T(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, a, n) => e + t(n), 0));
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
function zt(t, l) {
  const e = De(l), { state: a, source: n, currentList: r, size: o, containerRef: d } = e, u = { overflowX: "auto" }, { itemWidth: s, overscan: c = 5 } = t, f = Re(a, n, s), m = Ue(n, s), i = Qe("horizontal", c, m, f, e), h = Ge(s, n), g = T(() => h(a.value.start)), b = Xe(s, n);
  Je(o, l, i);
  const y = Ye("horizontal", i, h, d), A = T(() => ({
    style: {
      height: "100%",
      width: `${b.value - g.value}px`,
      marginLeft: `${g.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: y,
    calculateRange: i,
    wrapperProps: A,
    containerStyle: u,
    currentList: r,
    containerRef: d
  };
}
function Pt(t, l) {
  const e = De(l), { state: a, source: n, currentList: r, size: o, containerRef: d } = e, u = { overflowY: "auto" }, { itemHeight: s, overscan: c = 5 } = t, f = Re(a, n, s), m = Ue(n, s), i = Qe("vertical", c, m, f, e), h = Ge(s, n), g = T(() => h(a.value.start)), b = Xe(s, n);
  Je(o, l, i);
  const y = Ye("vertical", i, h, d), A = T(() => ({
    style: {
      width: "100%",
      height: `${b.value - g.value}px`,
      marginTop: `${g.value}px`
    }
  }));
  return {
    calculateRange: i,
    scrollTo: y,
    containerStyle: u,
    wrapperProps: A,
    currentList: r,
    containerRef: d
  };
}
const H = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, $t = (t) => {
  try {
    var l = JSON.parse(t);
    if (l && typeof l == "object")
      return l;
  } catch {
  }
  return t;
}, Mt = (t, l, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const a = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, r, o = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const d = t.map.get(n);
      if (d)
        d.value = r, d.data = o;
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
      t.value = [], t.rebuildMap();
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
let Bt = 1;
const Ze = (t) => {
  t && (t.style.display = "none", mt(t));
}, Ke = (t, l, e, a, n = null) => {
  const r = O(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      r.value.clear();
      for (let s of e.value)
        r.value.set(s, s);
    }
  });
  const o = O([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, K(() => {
    l.value && (o.value = l.value.map((s) => ({ ...s, key: H(s.key) })), o.rebuildMap());
  }), t) {
    if (r.value.clear(), t.matches("select")) {
      for (let s of Array.apply(null, t.selectedOptions).map((c) => H(c.value)).filter((c) => c != null))
        r.value.set(s, s);
      o.value = Array.apply(null, t.options).reduce((s, c) => (s.push({
        value: c.text,
        key: H(c.value),
        data: Object.keys(c.dataset).reduce((f, m) => (f[m] = $t(c.dataset[m]), f), {})
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
      r.value.set(H(s), H(s));
  else
    a != null && r.value.set(H(a), H(a));
  (n == null || n === "" || n == 0) && (n = "extraselect_" + (++Bt).toString()), Mt(o, r, n);
  const d = [];
  return r.value.forEach((s, c) => {
    d.push([c, s]);
  }), { options: o, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [s, c] of d)
      r.value.set(s, c);
  } };
};
O({});
function jt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const we = (t = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), et(O(e), "defaults");
}, et = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, we());
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
let qt = 0;
const tt = (t, l) => {
  var a;
  return et(l, (a = t == null ? void 0 : t.id) != null ? a : "extraselect_" + (++qt).toString()), { propLocalization: l, t: (n, r = {}) => {
    var d;
    let o = (d = l.value[n]) != null ? d : window.ExtraSelectLocalization.defaults.get(n);
    return o == null && (window.ExtraSelectLocalization.defaults.push(n, n), o = n), jt(o, r);
  } };
}, Ve = async function(t, l = null, e = {}) {
  var r;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(r = e.headers) != null ? r : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, a)).json();
}, lt = (t, l, e, a, n, r, o = "limited", d = {}) => {
  const u = O(0), s = O(!1), c = T(() => s.value || u.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const f = {};
      K((m) => {
        var h;
        const i = (h = JSON.stringify(r.value)) != null ? h : "default";
        if (f[i] == null && (f[i] = []), a.value.length >= n) {
          let g = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              g = !f[i].includes(a.value);
              break;
            case "complete":
              g = f[i].reduce((b, y) => b && !a.value.startsWith(y), !0);
              break;
          }
          if (g) {
            s.value = !0;
            const b = setTimeout(() => {
              f[i].push(a.value), u.value += 1, d.body = { ...d.body, ...r.value }, Ve(l, a.value, d).then((y) => {
                t.actions.addRange(y), t.actions.sort(), u.value -= 1, s.value = !1;
              });
            }, 500);
            m(() => {
              clearTimeout(b);
            });
          }
        }
      });
    } else
      Ve(l, null, d).then((f) => {
        t.actions.addRange(f), t.actions.sort();
      });
  return { searchingFlag: c };
}, nt = (t, l, e, a = [], n = [], r = "exact") => {
  const o = O(""), d = O([]), u = O({}), s = { ...a.reduce((f, m) => (f[m] = !1, f), {}), ...n.reduce((f, m) => (f[m] = !0, f), {}) };
  for (let f in s) {
    let m = s[f], i = document.getElementById(f);
    u.value[f] = i == null ? void 0 : i.value, i && i.addEventListener("change", (h) => {
      u.value[f] = h.target.value, m && ie(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            d.value.find((b) => b.key == g) || e(g, !1);
        else
          d.value.find((g) => g.key == o.value) || e(o.value, !1);
      });
    });
  }
  const c = function(f, m) {
    let i = f.value;
    if (Object.keys(u.value).length > 0 && (i = i.filter((h) => {
      var g, b;
      for (let y in u.value)
        if ((s[y] ? !0 : ((g = u.value[y]) != null ? g : "").length > 0) && ((b = h.data) == null ? void 0 : b.hasOwnProperty(y))) {
          if (Array.isArray(h.data[y])) {
            if (!h.data[y].includes(u.value[y]))
              return !1;
          } else if (h.data[y] != u.value[y])
            return !1;
        }
      return !0;
    })), m.length > 0)
      switch (r) {
        case "loose":
          const h = m.toLowerCase().split(" ").filter((g) => g.length > 0);
          i = i.filter((g) => {
            const b = g.value.toLowerCase();
            return h.every((y) => b.includes(y));
          });
          break;
        default:
          i = i.filter((g) => g.value.toLowerCase().includes(m.toLowerCase()));
          break;
      }
    return i;
  };
  return K(() => {
    d.value = c(t, o.value);
  }), { filterText: o, filteredOptions: d, filterValues: u };
}, at = (t, l, e, a, n, r, o) => {
  const d = getComputedStyle(document.querySelector("body")).font, s = document.createElement("canvas").getContext("2d");
  s.font = d;
  const c = function(i) {
    return s.measureText(i != null ? i : "").width;
  }, f = T(() => {
    var h, g;
    const i = (h = re(a.value).width) != null ? h : 100;
    if (o === "inherit")
      return i;
    if (o == null || o === "dynamic") {
      const b = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(i, Math.max(...t.value.map((y) => c(y.value))) + 20 + b * 3);
    }
    return o;
  }), m = O({
    position: "absolute",
    "min-width": "max-content"
  });
  return ht(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var i = re(a.value), h = re(null);
    if (r.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(r.value).position))
      var h = re(r.value);
    let g = -h.left + i.left;
    const b = window.document.documentElement.clientWidth;
    g + f.value > b && (g = b - f.value), m.value = {
      position: "absolute",
      "min-width": "max-content",
      width: f.value.toString() + "px",
      top: (-h.top + i.top + i.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: m, getTextWidth: c };
}, Ht = ["name"], Wt = {
  key: 1,
  class: "extra-select selection"
}, Dt = ["onClick"], Rt = ["innerHTML"], Ut = ["value", "disabled"], Qt = {
  key: 0,
  class: "input-searching"
}, Gt = ["placeholder"], Jt = {
  key: 0,
  class: "allselect-clear"
}, Xt = { class: "row-input" }, Yt = ["checked"], Zt = { class: "row-input" }, Kt = ["checked"], el = {
  key: 1,
  class: "no-matches"
}, tl = { key: 2 }, ll = {
  key: 0,
  class: "border-bottom"
}, nl = ["onClick"], al = ["checked"], ol = ["value"], rl = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, sl = Object.assign(rl, {
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
  setup(t, { emit: l }) {
    var be, ke, Oe, Se, xe, _e;
    const e = t, a = T(() => {
      var v, p;
      return (p = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? p : e.multiple;
    });
    let n = Fe();
    const { options: r, selectedOptions: o, onReset: d } = Ke(e.originalNode, Z(e, "options"), Z(e, "modelValue"), e.initialValue, (Oe = (ke = (be = e.originalNode) == null ? void 0 : be.id) != null ? ke : n.id) != null ? Oe : null), { t: u } = tt(e.originalNode, Z(e, "localization")), s = (Se = e.originalNode) == null ? void 0 : Se.classList, c = Object.values((_e = (xe = e.originalNode) == null ? void 0 : xe.style) != null ? _e : {});
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
        o.value.clear(), p !== !1 && o.value.set(v, v), B.value = !1;
      U(Array.from(o.value.keys()));
    }, { filterText: i, filteredOptions: h, filterValues: g } = nt(r, o, m, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: b } = lt(
      r,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), y = O(null), A = O(null), q = O(null), B = O(!1);
    function J(v) {
      e.disabled || (B.value = v);
    }
    D(i, () => {
      A.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = O(null), R = function(v) {
      const p = G(v.target);
      p.push(v.target), !p.includes(y.value) && !p.includes(A.value) ? B.value = !1 : (v.stopImmediatePropagation(), v.preventDefault());
    };
    me(() => {
      if (e.dropdownContainer) {
        let v = !1;
        j.value = G(y.value).find((p) => !!(p instanceof Element && (p.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(p).position))));
      }
      if (j.value == null && (j.value = document.querySelector("body")), e.originalNode) {
        for (let p of s)
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
    }), ze(() => {
      window.document.removeEventListener("mousedown", R), window.document.removeEventListener("focusin", R);
    });
    const { dropdownStyle: fe, getTextWidth: te } = at(r, o, B, y, A, j, e.maxWidth), U = (v) => {
      ie(
        () => {
          var p;
          return (p = e.originalNode) == null ? void 0 : p.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), f("update:modelValue", v);
    }, le = (v) => {
      X(v, !1), i.value = "";
    }, X = (v, p = null) => {
      p == null && (p = !Q.value), p ? (o.value.clear(), r.value.forEach((L) => o.value.set(L.key, L.key))) : o.value.clear(), U(Array.from(o.value.keys()));
    }, ne = () => {
      C.value ? h.value.forEach((v) => {
        o.value.has(v.key) && o.value.delete(v.key);
      }) : h.value.forEach((v) => {
        o.value.has(v.key) || o.value.set(v.key, v.key);
      }), U(Array.from(o.value.keys()));
    };
    D(B, (v, p) => {
      v != p && (v ? e.search && ie(() => {
        q.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const Q = T(() => o.value.size == r.value.length), C = T(() => h.value.reduce((v, p) => v && o.value.has(p.key), !0)), _ = T(() => o.value.size == 0), N = T(() => {
      var v, p, L, Y, x;
      if (r.value.length < 0)
        return "";
      if (a.value) {
        if (_.value)
          return u("No selection");
        if (!e.searchableUrl && Q.value)
          return u("All selected");
        const V = y.value ? getComputedStyle(y.value) : null, ae = ((v = y.value) == null ? void 0 : v.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let oe = u(":n selected - ", { n: o.value.size }), Ee = !0;
        for (let ct of o.value)
          if (Ee ? Ee = !1 : oe += ", ", oe += (L = (p = r.map.get(ct[0])) == null ? void 0 : p.value) != null ? L : b.value ? u("Loading...") : u("Value not found"), ae < te(oe))
            return o.value.size + u(" selected");
        return oe;
      } else
        for (let V of o.value)
          return (x = (Y = r.map.get(V[0])) == null ? void 0 : Y.value) != null ? x : b.value ? u("Loading...") : u("Value not found");
      return u("No selection");
    }), I = T(() => e.selectedOnTop && a.value ? [...[...o.value.keys()].map((v) => {
      let p = h.value.find((L) => L.key === v);
      return p != null ? { ...p, selected: !0 } : null;
    }).filter((v) => v != null), { key: "separator", value: "separator", separator: !0 }, ...h.value] : h.value), { list: st, containerProps: ut, wrapperProps: it } = We(
      I,
      {
        itemHeight: 32
      }
    );
    return (v, p) => {
      var L, Y;
      return k(), S(M, null, [
        a.value && w(o).size == 0 ? (k(), S("input", {
          key: 0,
          type: "hidden",
          name: (Y = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : Y.replace("[]", ""),
          value: ""
        }, null, 8, Ht)) : F("", !0),
        e.showSelected ? (k(), S("div", Wt, [
          (k(!0), S(M, null, se(w(o), (x) => {
            var V;
            return k(), S("div", {
              key: x,
              onClick: W((ae) => m(x[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              Ce($((V = w(r).find((ae) => ae.key == x[0])) == null ? void 0 : V.value) + " ", 1),
              E("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Rt)
            ], 8, Dt);
          }), 128))
        ])) : F("", !0),
        E("input", ce({
          onFocus: p[0] || (p[0] = (x) => J(!0)),
          onClick: p[1] || (p[1] = W((x) => J(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: y,
          value: N.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs, { disabled: t.disabled }), null, 16, Ut),
        j.value ? (k(), ve(pe, {
          key: 2,
          to: j.value
        }, [
          de(E("div", {
            class: he(["extra-select dropdown", { searching: w(b) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: Pe(w(fe))
          }, [
            e.search ? (k(), S("div", Qt, [
              de(E("input", {
                ref_key: "searchNode",
                ref: q,
                class: "extra-select-search",
                "onUpdate:modelValue": p[2] || (p[2] = (x) => $e(i) ? i.value = x : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: w(u)("Search...")
              }, null, 8, Gt), [
                [yt, w(i)]
              ])
            ])) : F("", !0),
            w(i).length >= e.minChars ? (k(), S(M, { key: 1 }, [
              a.value ? (k(), S("div", Jt, [
                w(i).length == 0 ? (k(), S("div", {
                  key: 0,
                  onClick: W(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", Xt, [
                    E("input", {
                      checked: Q.value,
                      type: "checkbox"
                    }, null, 8, Yt),
                    E("b", null, $(w(u)("Select all")), 1)
                  ])
                ])) : F("", !0),
                w(h).length > 0 && w(i).length > 0 ? (k(), S("div", {
                  key: 1,
                  onClick: W(ne, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", Zt, [
                    E("input", {
                      checked: C.value,
                      type: "checkbox"
                    }, null, 8, Kt),
                    E("b", null, $(w(u)("Select Filtered")), 1)
                  ])
                ])) : F("", !0),
                E("div", {
                  class: "clear",
                  onClick: W(le, ["stop", "prevent"])
                }, $(w(u)("Clear")), 1)
              ])) : F("", !0),
              w(h).length == 0 ? (k(), S("div", el, $(w(u)("No matches found")), 1)) : F("", !0)
            ], 64)) : (k(), S("div", tl, $(w(u)("Insert at least :n characters", { n: e.minChars })), 1)),
            E("div", ce(w(ut), { class: "scroller" }), [
              E("div", Me(Be(w(it))), [
                (k(!0), S(M, null, se(w(st), (x) => (k(), S(M, {
                  key: x.index
                }, [
                  x.data.separator ? (k(), S("div", ll)) : (k(), S("button", {
                    key: 1,
                    class: "dropdown-row",
                    onClick: W((V) => m(x.data.key), ["stop", "prevent"]),
                    style: { height: "32px" }
                  }, [
                    E("div", {
                      class: he(["row-input", { "fw-bold": x.data.selected }])
                    }, [
                      a.value ? (k(), S("input", {
                        key: 0,
                        checked: w(o).has(x.data.key),
                        type: "checkbox"
                      }, null, 8, al)) : F("", !0),
                      Ce(" " + $(x.data.value), 1)
                    ], 2)
                  ], 8, nl))
                ], 64))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [je, B.value]
          ])
        ], 8, ["to"])) : F("", !0),
        e.originalNode ? (k(), ve(pe, {
          key: 3,
          to: e.originalNode
        }, [
          (k(!0), S(M, null, se(w(o), (x) => (k(), S("option", {
            key: x[0],
            selected: "selected",
            value: x[0]
          }, null, 8, ol))), 128))
        ], 8, ["to"])) : F("", !0)
      ], 64);
    };
  }
}), ul = ["disabled"], il = {
  key: 0,
  class: "no-matches"
}, cl = { key: 1 }, dl = ["onClick"], fl = { class: "row-input" }, vl = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, pl = Object.assign(vl, {
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
    let a = Fe();
    const { options: n } = Ke(e.originalNode, Z(e, "options"), O([]), null, (le = (U = (te = e.originalNode) == null ? void 0 : te.id) != null ? U : a.id) != null ? le : null), { t: r } = tt(e.originalNode, Z(e, "localization")), o = (X = e.originalNode) == null ? void 0 : X.classList, d = Object.values((Q = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? Q : {});
    Ze(e.originalNode);
    const u = l, s = (C, _ = null) => {
      _ === !1 ? c.value = "" : c.value = n.map.get(C).value, b.value = !1;
    }, { filterText: c, filteredOptions: f, filterValues: m } = nt(n, null, s, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: i } = lt(
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
      const _ = G(C.target);
      _.push(C.target), !_.includes(h.value) && !_.includes(g.value) && (b.value = !1);
    };
    me(() => {
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
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(_)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      K(() => {
        e.modelValue != null && (c.value = e.modelValue);
      });
      const C = c.value, _ = () => {
        c.value = C;
      };
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), ze(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: B } = at(n, O([]), b, h, g, y, e.maxWidth), J = (C = !1) => {
      var _;
      e.originalNode && (C ? c.value = e.originalNode.value : (e.originalNode.value = c.value, (_ = e.originalNode) == null || _.dispatchEvent(new Event("change", { bubbles: !0 })))), u("update:modelValue", c.value);
    };
    D(() => b.value, (C) => {
      C === !1 && J();
    });
    const { list: j, containerProps: R, wrapperProps: fe } = We(
      f,
      {
        itemHeight: 32
      }
    );
    return (C, _) => (k(), S(M, null, [
      de(E("input", ce({
        onFocus: _[0] || (_[0] = (N) => A(!0)),
        onClick: _[1] || (_[1] = (N) => A(!0)),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": _[2] || (_[2] = (N) => $e(c) ? c.value = N : null),
        class: "extra-select extra-select-input"
      }, C.$attrs, { disabled: t.disabled }), null, 16, ul), [
        [gt, w(c)]
      ]),
      y.value ? (k(), ve(pe, {
        key: 0,
        to: y.value
      }, [
        de(E("div", {
          class: he(["extra-select dropdown", { searching: w(i) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Pe(w(B))
        }, [
          w(c).length >= e.minChars ? (k(), S(M, { key: 0 }, [
            w(f).length == 0 ? (k(), S("div", il, $(w(r)("No matches found")), 1)) : F("", !0)
          ], 64)) : (k(), S("div", cl, $(w(r)("Insert at least :n characters", { n: e.minChars })), 1)),
          E("div", ce(w(R), { class: "scroller" }), [
            E("div", Me(Be(w(fe))), [
              (k(!0), S(M, null, se(w(j), (N) => (k(), S("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: W((I) => s(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                E("div", fl, $(N.data.value), 1)
              ], 8, dl))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [je, b.value]
        ])
      ], 8, ["to"])) : F("", !0)
    ], 64));
  }
}), yl = we, ot = {
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
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const a = qe(pl, l);
      a.mount(e), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  ot.init(), rt.init(), we();
});
export {
  ot as ExtraSelect,
  rt as ExtraSuggest,
  yl as loadExtraSelectDefaultLocalization
};
