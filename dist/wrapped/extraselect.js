import { unref as y, getCurrentScope as ot, onScopeDispose as st, getCurrentInstance as rt, onMounted as ve, nextTick as oe, computed as A, ref as b, shallowRef as ut, watch as D, watchEffect as K, watchPostEffect as it, toRef as J, onUnmounted as Ee, openBlock as O, createElementBlock as k, Fragment as j, createCommentVNode as V, renderList as ne, withModifiers as H, createTextVNode as we, toDisplayString as $, createElementVNode as S, mergeProps as se, createBlock as ie, Teleport as ce, withDirectives as re, normalizeClass as Ce, normalizeStyle as Le, isRef as Ne, vModelText as ct, normalizeProps as Ae, guardReactiveProps as Te, vShow as Ie, vModelDynamic as dt, createApp as Ve } from "vue";
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
function le(t) {
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
function U(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], a = t.parentNode; a != null && a instanceof HTMLElement && !(l instanceof HTMLElement && a === l) && !(typeof l == "string" && a.matches(l)); ) {
    var n = a;
    e.push(n), a = n.parentNode;
  }
  return a != null && e.push(a), e;
}
function ft(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var be;
const X = typeof window < "u";
X && ((be = window == null ? void 0 : window.navigator) == null ? void 0 : be.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function vt(t) {
  return typeof t == "function" ? t() : y(t);
}
function pt(t) {
  return t;
}
function ht(t) {
  return ot() ? (st(t), !0) : !1;
}
function yt(t, l = !0) {
  rt() ? ve(t) : l ? t() : oe(t);
}
function ae(t) {
  var l;
  const e = vt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const Fe = X ? window : void 0;
X && window.document;
X && window.navigator;
X && window.location;
function mt(t, l = !1) {
  const e = b(), a = () => e.value = Boolean(t());
  return a(), yt(a, l), e;
}
const de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fe = "__vueuse_ssr_handlers__";
de[fe] = de[fe] || {};
de[fe];
var Oe = Object.getOwnPropertySymbols, gt = Object.prototype.hasOwnProperty, wt = Object.prototype.propertyIsEnumerable, bt = (t, l) => {
  var e = {};
  for (var a in t)
    gt.call(t, a) && l.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && Oe)
    for (var a of Oe(t))
      l.indexOf(a) < 0 && wt.call(t, a) && (e[a] = t[a]);
  return e;
};
function Ot(t, l, e = {}) {
  const a = e, { window: n = Fe } = a, o = bt(a, ["window"]);
  let u;
  const r = mt(() => n && "ResizeObserver" in n), f = () => {
    u && (u.disconnect(), u = void 0);
  }, s = D(() => ae(t), (i) => {
    f(), r.value && n && i && (u = new ResizeObserver(l), u.observe(i, o));
  }, { immediate: !0, flush: "post" }), c = () => {
    f(), s();
  };
  return ht(c), {
    isSupported: r,
    stop: c
  };
}
function kt(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: a = Fe, box: n = "content-box" } = e, o = A(() => {
    var f, s;
    return (s = (f = ae(t)) == null ? void 0 : f.namespaceURI) == null ? void 0 : s.includes("svg");
  }), u = b(l.width), r = b(l.height);
  return Ot(t, ([f]) => {
    const s = n === "border-box" ? f.borderBoxSize : n === "content-box" ? f.contentBoxSize : f.devicePixelContentBoxSize;
    if (a && o.value) {
      const c = ae(t);
      if (c) {
        const i = a.getComputedStyle(c);
        u.value = parseFloat(i.width), r.value = parseFloat(i.height);
      }
    } else if (s) {
      const c = Array.isArray(s) ? s : [s];
      u.value = c.reduce((i, { inlineSize: d }) => i + d, 0), r.value = c.reduce((i, { blockSize: d }) => i + d, 0);
    } else
      u.value = f.contentRect.width, r.value = f.contentRect.height;
  }, e), D(() => ae(t), (f) => {
    u.value = f ? l.width : 0, r.value = f ? l.height : 0;
  }), {
    width: u,
    height: r
  };
}
var ke;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(ke || (ke = {}));
var xt = Object.defineProperty, xe = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, _t = Object.prototype.propertyIsEnumerable, Se = (t, l, e) => l in t ? xt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, Et = (t, l) => {
  for (var e in l || (l = {}))
    St.call(l, e) && Se(t, e, l[e]);
  if (xe)
    for (var e of xe(l))
      _t.call(l, e) && Se(t, e, l[e]);
  return t;
};
const Ct = {
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
Et({
  linear: pt
}, Ct);
function ze(t, l) {
  const { containerStyle: e, wrapperProps: a, scrollTo: n, calculateRange: o, currentList: u, containerRef: r } = "itemHeight" in l ? At(l, t) : Nt(l, t);
  return {
    list: u,
    scrollTo: n,
    containerProps: {
      ref: r,
      onScroll: () => {
        o();
      },
      style: e
    },
    wrapperProps: a
  };
}
function Pe(t) {
  const l = b(null), e = kt(l), a = b([]), n = ut(t);
  return { state: b({ start: 0, end: 10 }), source: n, currentList: a, size: e, containerRef: l };
}
function $e(t, l, e) {
  return (a) => {
    if (typeof e == "number")
      return Math.ceil(a / e);
    const { start: n = 0 } = t.value;
    let o = 0, u = 0;
    for (let r = n; r < l.value.length; r++) {
      const f = e(r);
      if (o += f, u = r, o > a)
        break;
    }
    return u - n;
  };
}
function Me(t, l) {
  return (e) => {
    if (typeof l == "number")
      return Math.floor(e / l) + 1;
    let a = 0, n = 0;
    for (let o = 0; o < t.value.length; o++) {
      const u = l(o);
      if (a += u, a >= e) {
        n = o;
        break;
      }
    }
    return n + 1;
  };
}
function Be(t, l, e, a, { containerRef: n, state: o, currentList: u, source: r }) {
  return () => {
    const f = n.value;
    if (f) {
      const s = e(t === "vertical" ? f.scrollTop : f.scrollLeft), c = a(t === "vertical" ? f.clientHeight : f.clientWidth), i = s - l, d = s + c + l;
      o.value = {
        start: i < 0 ? 0 : i,
        end: d > r.value.length ? r.value.length : d
      }, u.value = r.value.slice(o.value.start, o.value.end).map((v, m) => ({
        data: v,
        index: m + o.value.start
      }));
    }
  };
}
function je(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, o, u) => n + t(u), 0);
}
function qe(t, l, e) {
  D([t.width, t.height, l], () => {
    e();
  });
}
function He(t, l) {
  return A(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, a, n) => e + t(n), 0));
}
const Lt = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function De(t, l, e, a) {
  return (n) => {
    a.value && (a.value[Lt[t]] = e(n), l());
  };
}
function Nt(t, l) {
  const e = Pe(l), { state: a, source: n, currentList: o, size: u, containerRef: r } = e, f = { overflowX: "auto" }, { itemWidth: s, overscan: c = 5 } = t, i = $e(a, n, s), d = Me(n, s), v = Be("horizontal", c, d, i, e), m = je(s, n), w = A(() => m(a.value.start)), g = He(s, n);
  qe(u, l, v);
  const T = De("horizontal", v, m, r), F = A(() => ({
    style: {
      height: "100%",
      width: `${g.value - w.value}px`,
      marginLeft: `${w.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: T,
    calculateRange: v,
    wrapperProps: F,
    containerStyle: f,
    currentList: o,
    containerRef: r
  };
}
function At(t, l) {
  const e = Pe(l), { state: a, source: n, currentList: o, size: u, containerRef: r } = e, f = { overflowY: "auto" }, { itemHeight: s, overscan: c = 5 } = t, i = $e(a, n, s), d = Me(n, s), v = Be("vertical", c, d, i, e), m = je(s, n), w = A(() => m(a.value.start)), g = He(s, n);
  qe(u, l, v);
  const T = De("vertical", v, m, r), F = A(() => ({
    style: {
      width: "100%",
      height: `${g.value - w.value}px`,
      marginTop: `${w.value}px`
    }
  }));
  return {
    calculateRange: v,
    scrollTo: T,
    containerStyle: f,
    wrapperProps: F,
    currentList: o,
    containerRef: r
  };
}
const q = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, Tt = (t) => {
  try {
    var l = JSON.parse(t);
    if (l && typeof l == "object")
      return l;
  } catch {
  }
  return t;
}, It = (t, l, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const a = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, o, u = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const r = t.map.get(n);
      if (r)
        r.value = o, r.data = u;
      else {
        let f = { value: o, key: n, data: u };
        t.value.push(f), t.map.set(f.key, f);
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
      n == null && (n = (o, u) => o.value.localeCompare(u.value)), t.value = t.value.sort(n);
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
let Vt = 1;
const We = (t) => {
  t && (t.style.display = "none", ft(t));
}, Re = (t, l, e, a) => {
  const n = b(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let s of e.value)
        n.value.set(s, s);
    }
  });
  const o = b([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, K(() => {
    l.value && (o.value = l.value.map((s) => ({ ...s, key: q(s.key) })), o.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let s of Array.apply(null, t.selectedOptions).map((c) => q(c.value)).filter((c) => c != null))
        n.value.set(s, s);
      o.value = Array.apply(null, t.options).reduce((s, c) => (s.push({
        value: c.text,
        key: q(c.value),
        data: Object.keys(c.dataset).reduce((i, d) => (i[d] = Tt(c.dataset[d]), i), {})
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
      n.value.set(q(s), q(s));
  else
    a != null && n.value.set(q(a), q(a));
  let u = t == null ? void 0 : t.id;
  (u == null || u === "" || u == 0) && (u = "extraselect_" + (++Vt).toString()), It(o, n, u);
  const r = [];
  return n.value.forEach((s, c) => {
    r.push([c, s]);
  }), { options: o, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [s, c] of r)
      n.value.set(s, c);
  } };
};
b({});
function Ft(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const pe = (t = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), Ue(b(e), "defaults");
}, Ue = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, pe());
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
let zt = 0;
const Qe = (t, l) => {
  var a;
  return Ue(l, (a = t == null ? void 0 : t.id) != null ? a : "extraselect_" + (++zt).toString()), { propLocalization: l, t: (n, o = {}) => {
    var r;
    let u = (r = l.value[n]) != null ? r : window.ExtraSelectLocalization.defaults.get(n);
    return u == null && (window.ExtraSelectLocalization.defaults.push(n, n), u = n), Ft(u, o);
  } };
}, _e = async function(t, l = null, e = {}) {
  var o;
  const a = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, a)).json();
}, Ge = (t, l, e, a, n, o, u = "limited", r = {}) => {
  const f = b(0), s = b(!1), c = A(() => s.value || f.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const i = [];
      K((d) => {
        if (a.value.length >= n) {
          let v = !0;
          switch (u) {
            case "always":
              break;
            default:
            case "limited":
              v = !i.includes(a.value);
              break;
            case "complete":
              v = i.reduce((m, w) => m && !a.value.startsWith(w), !0);
              break;
          }
          if (v) {
            s.value = !0;
            const m = setTimeout(() => {
              i.push(a.value), f.value += 1, r.body = { ...r.body, ...o.value }, _e(l, a.value, r).then((w) => {
                t.actions.addRange(w), t.actions.sort(), f.value -= 1, s.value = !1;
              });
            }, 500);
            d(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      _e(l, null, r).then((i) => {
        t.actions.addRange(i), t.actions.sort();
      });
  return { searchingFlag: c };
}, Je = (t, l, e, a = [], n = []) => {
  const o = b(""), u = b([]), r = b({}), f = { ...a.reduce((c, i) => (c[i] = !1, c), {}), ...n.reduce((c, i) => (c[i] = !0, c), {}) };
  for (let c in f) {
    let i = f[c], d = document.getElementById(c);
    r.value[c] = d == null ? void 0 : d.value, d && d.addEventListener("change", (v) => {
      r.value[c] = v.target.value, i && oe(() => {
        if (l != null)
          for (let m of Array.from(l.value.keys()))
            u.value.find((w) => w.key == m) || e(m, !1);
        else
          u.value.find((m) => m.key == o.value) || e(o.value, !1);
      });
    });
  }
  const s = function(c, i) {
    let d = c.value;
    return Object.keys(r.value).length > 0 && (d = d.filter((v) => {
      var m, w;
      for (let g in r.value)
        if ((f[g] ? !0 : ((m = r.value[g]) != null ? m : "").length > 0) && ((w = v.data) == null ? void 0 : w.hasOwnProperty(g))) {
          if (Array.isArray(v.data[g])) {
            if (!v.data[g].includes(r.value[g]))
              return !1;
          } else if (v.data[g] != r.value[g])
            return !1;
        }
      return !0;
    })), i.length > 0 && (d = d.filter((v) => v.value.toLowerCase().includes(i.toLowerCase()))), d;
  };
  return K(() => {
    u.value = s(t, o.value);
  }), { filterText: o, filteredOptions: u, filterValues: r };
}, Ke = (t, l, e, a, n, o, u) => {
  const r = getComputedStyle(document.querySelector("body")).font, f = function(i) {
    const v = document.createElement("canvas").getContext("2d");
    return v.font = r, v.measureText(i).width;
  }, s = A(() => {
    var d, v;
    const i = (d = le(a.value).width) != null ? d : 100;
    if (u === "inherit")
      return i;
    if (u == null || u === "dynamic") {
      const m = (v = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? v : 16;
      return Math.max(i, Math.max(...t.value.map((w) => f(w.value))) + 20 + m * 3);
    }
    return u;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return it(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var i = le(a.value), d = le(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var d = le(o.value);
    let v = -d.left + i.left;
    const m = window.document.documentElement.clientWidth;
    v + s.value > m && (v = m - s.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: s.value.toString() + "px",
      top: (-d.top + i.top + i.height).toString() + "px",
      left: v.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: f };
}, Pt = ["name"], $t = {
  key: 1,
  class: "extra-select selection"
}, Mt = ["onClick"], Bt = ["innerHTML"], jt = ["value", "disabled"], qt = {
  key: 0,
  class: "input-searching"
}, Ht = ["placeholder"], Dt = {
  key: 0,
  class: "allselect-clear"
}, Wt = { class: "row-input" }, Rt = ["checked"], Ut = { class: "row-input" }, Qt = ["checked"], Gt = {
  key: 1,
  class: "no-matches"
}, Jt = { key: 2 }, Kt = ["onClick"], Xt = { class: "row-input" }, Yt = ["checked"], Zt = ["value"], el = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, tl = Object.assign(el, {
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
    var he, ye, me;
    const e = t, a = A(() => {
      var p, h;
      return (h = (p = e.originalNode) == null ? void 0 : p.multiple) != null ? h : e.multiple;
    }), { options: n, selectedOptions: o, onReset: u } = Re(e.originalNode, J(e, "options"), J(e, "modelValue"), e.initialValue), { t: r } = Qe(e.originalNode, J(e, "localization")), f = (he = e.originalNode) == null ? void 0 : he.classList, s = Object.values((me = (ye = e.originalNode) == null ? void 0 : ye.style) != null ? me : {});
    We(e.originalNode);
    const c = l, i = (p, h = null) => {
      if (a.value) {
        let L = h;
        switch (L == null && (L = !o.value.has(p)), L) {
          case !0:
            o.value.set(p, p);
            break;
          case !1:
            o.value.delete(p);
            break;
        }
      } else
        o.value.clear(), h !== !1 && o.value.set(p, p), M.value = !1;
      R(Array.from(o.value.keys()));
    }, { filterText: d, filteredOptions: v, filterValues: m } = Je(n, o, i, e.filterFields, e.hardFilterFields), { searchingFlag: w } = Ge(
      n,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), g = b(null), T = b(null), F = b(null), M = b(!1);
    function Q(p) {
      e.disabled || (M.value = p);
    }
    D(d, () => {
      T.value.querySelector(".scroller").scrollTop = 0;
    });
    const B = b(null), W = function(p) {
      const h = U(p.target);
      h.push(p.target), !h.includes(g.value) && !h.includes(T.value) ? M.value = !1 : (p.stopImmediatePropagation(), p.preventDefault());
    };
    ve(() => {
      if (e.dropdownContainer) {
        let p = !1;
        B.value = U(g.value).find((h) => !!(h instanceof Element && (h.matches(e.dropdownContainer) && (p = !0), p && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(h).position))));
      }
      if (B.value == null && (B.value = document.querySelector("body")), e.originalNode) {
        for (let h of f)
          h != "extraselect" && g.value.classList.add(h);
        for (let h of s)
          g.value.style[h] = e.originalNode.style[h];
        let p = U(g.value, "form").pop();
        p instanceof HTMLElement && p.matches("form") && p.addEventListener("reset", () => setTimeout(u)), e.originalNode.toggleValue = i, e.originalNode.setValues = (h) => {
          o.value.clear();
          for (let L of h)
            i(L);
        };
      }
      window.document.addEventListener("mousedown", W), window.document.addEventListener("focusin", W);
    }), Ee(() => {
      window.document.removeEventListener("mousedown", W), window.document.removeEventListener("focusin", W);
    });
    const { dropdownStyle: ue, getTextWidth: Y } = Ke(n, o, M, g, T, B, e.maxWidth), R = (p) => {
      oe(
        () => {
          var h;
          return (h = e.originalNode) == null ? void 0 : h.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), c("update:modelValue", p);
    }, Z = (p) => {
      C(p, !1), d.value = "";
    }, C = (p, h = null) => {
      h == null && (h = !_.value), h ? (o.value.clear(), n.value.forEach((L) => o.value.set(L.key, L.key))) : o.value.clear(), R(Array.from(o.value.keys()));
    }, x = () => {
      N.value ? v.value.forEach((p) => {
        o.value.has(p.key) && o.value.delete(p.key);
      }) : v.value.forEach((p) => {
        o.value.has(p.key) || o.value.set(p.key, p.key);
      }), R(Array.from(o.value.keys()));
    };
    D(M, (p, h) => {
      p != h && (p ? e.search && oe(() => {
        F.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const _ = A(() => o.value.size == n.value.length), N = A(() => v.value.reduce((p, h) => p && o.value.has(h.key), !0)), Ze = A(() => o.value.size == 0), et = A(() => {
      var p, h, L, G, E;
      if (n.value.length < 0)
        return "";
      if (a.value) {
        if (Ze.value)
          return r("No selection");
        if (!e.searchableUrl && _.value)
          return r("All selected");
        const I = g.value ? getComputedStyle(g.value) : null, ee = ((p = g.value) == null ? void 0 : p.clientWidth) - parseInt(I == null ? void 0 : I.paddingLeft) - parseInt(I == null ? void 0 : I.paddingRight);
        let te = r(":n selected - ", { n: o.value.size }), ge = !0;
        for (let at of o.value)
          if (ge ? ge = !1 : te += ", ", te += (L = (h = n.map.get(at[0])) == null ? void 0 : h.value) != null ? L : w.value ? r("Loading...") : r("Value not found"), ee < Y(te))
            return o.value.size + r(" selected");
        return te;
      } else
        for (let I of o.value)
          return (E = (G = n.map.get(I[0])) == null ? void 0 : G.value) != null ? E : w.value ? r("Loading...") : r("Value not found");
      return r("No selection");
    }), { list: tt, containerProps: lt, wrapperProps: nt } = ze(
      v,
      {
        itemHeight: 32
      }
    );
    return (p, h) => {
      var L, G;
      return O(), k(j, null, [
        a.value && y(o).size == 0 ? (O(), k("input", {
          key: 0,
          type: "hidden",
          name: (G = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, Pt)) : V("", !0),
        e.showSelected ? (O(), k("div", $t, [
          (O(!0), k(j, null, ne(y(o), (E) => {
            var I;
            return O(), k("div", {
              key: E,
              onClick: H((ee) => i(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              we($((I = y(n).find((ee) => ee.key == E[0])) == null ? void 0 : I.value) + " ", 1),
              S("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Bt)
            ], 8, Mt);
          }), 128))
        ])) : V("", !0),
        S("input", se({
          onFocus: h[0] || (h[0] = (E) => Q(!0)),
          onClick: h[1] || (h[1] = H((E) => Q(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: g,
          value: et.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, p.$attrs, { disabled: t.disabled }), null, 16, jt),
        B.value ? (O(), ie(ce, {
          key: 2,
          to: B.value
        }, [
          re(S("div", {
            class: Ce(["extra-select dropdown", { searching: y(w) > 0 }]),
            ref_key: "dropdownNode",
            ref: T,
            style: Le(y(ue))
          }, [
            e.search ? (O(), k("div", qt, [
              re(S("input", {
                ref_key: "searchNode",
                ref: F,
                class: "extra-select-search",
                "onUpdate:modelValue": h[2] || (h[2] = (E) => Ne(d) ? d.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: y(r)("Search...")
              }, null, 8, Ht), [
                [ct, y(d)]
              ])
            ])) : V("", !0),
            y(d).length >= e.minChars ? (O(), k(j, { key: 1 }, [
              a.value ? (O(), k("div", Dt, [
                y(d).length == 0 ? (O(), k("div", {
                  key: 0,
                  onClick: H(C, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  S("div", Wt, [
                    S("input", {
                      checked: _.value,
                      type: "checkbox"
                    }, null, 8, Rt),
                    S("b", null, $(y(r)("Select all")), 1)
                  ])
                ])) : V("", !0),
                y(v).length > 0 && y(d).length > 0 ? (O(), k("div", {
                  key: 1,
                  onClick: H(x, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  S("div", Ut, [
                    S("input", {
                      checked: N.value,
                      type: "checkbox"
                    }, null, 8, Qt),
                    S("b", null, $(y(r)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                S("div", {
                  class: "clear",
                  onClick: H(Z, ["stop", "prevent"])
                }, $(y(r)("Clear")), 1)
              ])) : V("", !0),
              y(v).length == 0 ? (O(), k("div", Gt, $(y(r)("No matches found")), 1)) : V("", !0)
            ], 64)) : (O(), k("div", Jt, $(y(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            S("div", se(y(lt), { class: "scroller" }), [
              S("div", Ae(Te(y(nt))), [
                (O(!0), k(j, null, ne(y(tt), (E) => (O(), k("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: H((I) => i(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  S("div", Xt, [
                    a.value ? (O(), k("input", {
                      key: 0,
                      checked: y(o).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, Yt)) : V("", !0),
                    we(" " + $(E.data.value), 1)
                  ])
                ], 8, Kt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Ie, M.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (O(), ie(ce, {
          key: 3,
          to: e.originalNode
        }, [
          (O(!0), k(j, null, ne(y(o), (E) => (O(), k("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, Zt))), 128))
        ], 8, ["to"])) : V("", !0)
      ], 64);
    };
  }
}), ll = ["disabled"], nl = {
  key: 0,
  class: "no-matches"
}, al = { key: 1 }, ol = ["onClick"], sl = { class: "row-input" }, rl = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, ul = Object.assign(rl, {
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
    var Y, R, Z;
    const e = t, { options: a } = Re(e.originalNode, J(e, "options"), b([])), { t: n } = Qe(e.originalNode, J(e, "localization")), o = (Y = e.originalNode) == null ? void 0 : Y.classList, u = Object.values((Z = (R = e.originalNode) == null ? void 0 : R.style) != null ? Z : {});
    We(e.originalNode);
    const r = l, f = (C, x = null) => {
      x === !1 ? s.value = "" : s.value = a.map.get(C).value, w.value = !1;
    }, { filterText: s, filteredOptions: c, filterValues: i } = Je(a, null, f, e.filterFields, e.hardFilterFields), { searchingFlag: d } = Ge(
      a,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      i,
      e.fetchMode,
      e.fetchOptions
    ), v = b(null), m = b(null), w = b(!1), g = b(null);
    function T(C) {
      e.disabled || (w.value = C);
    }
    D(s, () => {
      m.value.querySelector(".scroller").scrollTop = 0;
    });
    const F = function(C) {
      const x = U(C.target);
      x.push(C.target), !x.includes(v.value) && !x.includes(m.value) && (w.value = !1);
    };
    ve(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        g.value = U(v.value).find((N) => !!(N instanceof Element && (N.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (g.value == null && (g.value = document.querySelector("body")), e.originalNode) {
        for (let N of o)
          N != "extrasuggest" && v.value.classList.add(N);
        for (let N of u)
          v.value.style[N] = e.originalNode.style[N];
        s.value = e.originalNode.value;
        let _ = U(v.value, "form").pop();
        _ instanceof HTMLElement && _.matches("form") && _.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          Q(!0);
        });
      }
      K(() => {
        e.modelValue != null && (s.value = e.modelValue);
      });
      const C = s.value, x = () => {
        s.value = C;
      };
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), Ee(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: M } = Ke(a, b([]), w, v, m, g, e.maxWidth), Q = (C = !1) => {
      var x;
      e.originalNode && (C ? s.value = e.originalNode.value : (e.originalNode.value = s.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), r("update:modelValue", s.value);
    };
    D(() => w.value, (C) => {
      C === !1 && Q();
    });
    const { list: B, containerProps: W, wrapperProps: ue } = ze(
      c,
      {
        itemHeight: 32
      }
    );
    return (C, x) => (O(), k(j, null, [
      re(S("input", se({
        onFocus: x[0] || (x[0] = (_) => T(!0)),
        onClick: x[1] || (x[1] = (_) => T(!0)),
        ref_key: "inputNode",
        ref: v,
        "onUpdate:modelValue": x[2] || (x[2] = (_) => Ne(s) ? s.value = _ : null),
        class: "extra-select extra-select-input"
      }, C.$attrs, { disabled: t.disabled }), null, 16, ll), [
        [dt, y(s)]
      ]),
      g.value ? (O(), ie(ce, {
        key: 0,
        to: g.value
      }, [
        re(S("div", {
          class: Ce(["extra-select dropdown", { searching: y(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: Le(y(M))
        }, [
          y(s).length >= e.minChars ? (O(), k(j, { key: 0 }, [
            y(c).length == 0 ? (O(), k("div", nl, $(y(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (O(), k("div", al, $(y(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          S("div", se(y(W), { class: "scroller" }), [
            S("div", Ae(Te(y(ue))), [
              (O(!0), k(j, null, ne(y(B), (_) => (O(), k("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: H((N) => f(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", sl, $(_.data.value), 1)
              ], 8, ol))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ie, w.value]
        ])
      ], 8, ["to"])) : V("", !0)
    ], 64));
  }
}), cl = pe, Xe = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Xe.bindNew(t);
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
      const a = Ve(tl, l);
      a.mount(e), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
      });
    });
  }
}, Ye = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Ye.bindNew(t);
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
      const a = Ve(ul, l);
      a.mount(e), t.addEventListener("remove", function() {
        a.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Xe.init(), Ye.init(), pe();
});
export {
  Xe as ExtraSelect,
  Ye as ExtraSuggest,
  cl as loadExtraSelectDefaultLocalization
};
