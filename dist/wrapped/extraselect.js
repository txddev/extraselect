import { unref as m, getCurrentScope as ct, onScopeDispose as dt, getCurrentInstance as ft, onMounted as ge, nextTick as ue, computed as T, ref as b, shallowRef as vt, watch as D, watchEffect as K, watchPostEffect as pt, useAttrs as Ve, toRef as Z, onUnmounted as Fe, openBlock as O, createElementBlock as S, Fragment as j, createCommentVNode as F, renderList as re, withModifiers as W, createTextVNode as Ee, toDisplayString as $, createElementVNode as _, mergeProps as ce, createBlock as ve, Teleport as pe, withDirectives as de, normalizeClass as ze, normalizeStyle as Pe, isRef as $e, vModelText as ht, normalizeProps as Me, guardReactiveProps as Be, vShow as je, vModelDynamic as yt, createApp as qe } from "vue";
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
  return typeof t == "function" ? t() : m(t);
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
function xt(t, l = !1) {
  const e = b(), a = () => e.value = Boolean(t());
  return a(), Ot(a, l), e;
}
const he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = "__vueuse_ssr_handlers__";
he[ye] = he[ye] || {};
he[ye];
var Ne = Object.getOwnPropertySymbols, St = Object.prototype.hasOwnProperty, kt = Object.prototype.propertyIsEnumerable, _t = (t, l) => {
  var e = {};
  for (var a in t)
    St.call(t, a) && l.indexOf(a) < 0 && (e[a] = t[a]);
  if (t != null && Ne)
    for (var a of Ne(t))
      l.indexOf(a) < 0 && kt.call(t, a) && (e[a] = t[a]);
  return e;
};
function Et(t, l, e = {}) {
  const a = e, { window: n = He } = a, s = _t(a, ["window"]);
  let o;
  const f = xt(() => n && "ResizeObserver" in n), i = () => {
    o && (o.disconnect(), o = void 0);
  }, r = D(() => ie(t), (u) => {
    i(), f.value && n && u && (o = new ResizeObserver(l), o.observe(u, s));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), r();
  };
  return bt(c), {
    isSupported: f,
    stop: c
  };
}
function Ct(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: a = He, box: n = "content-box" } = e, s = T(() => {
    var i, r;
    return (r = (i = ie(t)) == null ? void 0 : i.namespaceURI) == null ? void 0 : r.includes("svg");
  }), o = b(l.width), f = b(l.height);
  return Et(t, ([i]) => {
    const r = n === "border-box" ? i.borderBoxSize : n === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    if (a && s.value) {
      const c = ie(t);
      if (c) {
        const u = a.getComputedStyle(c);
        o.value = parseFloat(u.width), f.value = parseFloat(u.height);
      }
    } else if (r) {
      const c = Array.isArray(r) ? r : [r];
      o.value = c.reduce((u, { inlineSize: h }) => u + h, 0), f.value = c.reduce((u, { blockSize: h }) => u + h, 0);
    } else
      o.value = i.contentRect.width, f.value = i.contentRect.height;
  }, e), D(() => ie(t), (i) => {
    o.value = i ? l.width : 0, f.value = i ? l.height : 0;
  }), {
    width: o,
    height: f
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
  const { containerStyle: e, wrapperProps: a, scrollTo: n, calculateRange: s, currentList: o, containerRef: f } = "itemHeight" in l ? zt(l, t) : Ft(l, t);
  return {
    list: o,
    scrollTo: n,
    containerProps: {
      ref: f,
      onScroll: () => {
        s();
      },
      style: e
    },
    wrapperProps: a
  };
}
function De(t) {
  const l = b(null), e = Ct(l), a = b([]), n = vt(t);
  return { state: b({ start: 0, end: 10 }), source: n, currentList: a, size: e, containerRef: l };
}
function Re(t, l, e) {
  return (a) => {
    if (typeof e == "number")
      return Math.ceil(a / e);
    const { start: n = 0 } = t.value;
    let s = 0, o = 0;
    for (let f = n; f < l.value.length; f++) {
      const i = e(f);
      if (s += i, o = f, s > a)
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
function Qe(t, l, e, a, { containerRef: n, state: s, currentList: o, source: f }) {
  return () => {
    const i = n.value;
    if (i) {
      const r = e(t === "vertical" ? i.scrollTop : i.scrollLeft), c = a(t === "vertical" ? i.clientHeight : i.clientWidth), u = r - l, h = r + c + l;
      s.value = {
        start: u < 0 ? 0 : u,
        end: h > f.value.length ? f.value.length : h
      }, o.value = f.value.slice(s.value.start, s.value.end).map((d, y) => ({
        data: d,
        index: y + s.value.start
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
  const e = De(l), { state: a, source: n, currentList: s, size: o, containerRef: f } = e, i = { overflowX: "auto" }, { itemWidth: r, overscan: c = 5 } = t, u = Re(a, n, r), h = Ue(n, r), d = Qe("horizontal", c, h, u, e), y = Ge(r, n), w = T(() => y(a.value.start)), x = Xe(r, n);
  Je(o, l, d);
  const g = Ye("horizontal", d, y, f), A = T(() => ({
    style: {
      height: "100%",
      width: `${x.value - w.value}px`,
      marginLeft: `${w.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: g,
    calculateRange: d,
    wrapperProps: A,
    containerStyle: i,
    currentList: s,
    containerRef: f
  };
}
function zt(t, l) {
  const e = De(l), { state: a, source: n, currentList: s, size: o, containerRef: f } = e, i = { overflowY: "auto" }, { itemHeight: r, overscan: c = 5 } = t, u = Re(a, n, r), h = Ue(n, r), d = Qe("vertical", c, h, u, e), y = Ge(r, n), w = T(() => y(a.value.start)), x = Xe(r, n);
  Je(o, l, d);
  const g = Ye("vertical", d, y, f), A = T(() => ({
    style: {
      width: "100%",
      height: `${x.value - w.value}px`,
      marginTop: `${w.value}px`
    }
  }));
  return {
    calculateRange: d,
    scrollTo: g,
    containerStyle: i,
    wrapperProps: A,
    currentList: s,
    containerRef: f
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
      const f = t.map.get(n);
      if (f)
        f.value = s, f.data = o;
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
  const s = b(/* @__PURE__ */ new Map());
  K(() => {
    if (Array.isArray(e.value)) {
      s.value.clear();
      for (let r of e.value)
        s.value.set(r, r);
    }
  });
  const o = b([]);
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
        data: Object.keys(c.dataset).reduce((u, h) => (u[h] = Pt(c.dataset[h]), u), {})
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
  const f = [];
  return s.value.forEach((r, c) => {
    f.push([c, r]);
  }), { options: o, selectedOptions: s, onReset: () => {
    s.value.clear();
    for (let [r, c] of f)
      s.value.set(r, c);
  } };
};
b({});
function Bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const me = (t = null) => {
  var a, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (a = window.ExtraSelectLocalization.defaults) == null ? void 0 : a.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), et(b(e), "defaults");
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
    var f;
    let o = (f = l.value[n]) != null ? f : window.ExtraSelectLocalization.defaults.get(n);
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
}, lt = (t, l, e, a, n, s, o = "limited", f = {}) => {
  const i = b(0), r = b(!1), c = T(() => r.value || i.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const u = {};
      K((h) => {
        var y;
        const d = (y = JSON.stringify(s.value)) != null ? y : "default";
        if (u[d] == null && (u[d] = []), a.value.length >= n) {
          let w = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              w = !u[d].includes(a.value);
              break;
            case "complete":
              w = u[d].reduce((x, g) => x && !a.value.startsWith(g), !0);
              break;
          }
          if (w) {
            r.value = !0;
            const x = setTimeout(() => {
              u[d].push(a.value), i.value += 1, f.body = { ...f.body, ...s.value }, Ie(l, a.value, f).then((g) => {
                t.actions.addRange(g), t.actions.sort(), i.value -= 1, r.value = !1;
              });
            }, 500);
            h(() => {
              clearTimeout(x);
            });
          }
        }
      });
    } else
      Ie(l, null, f).then((u) => {
        t.actions.addRange(u), t.actions.sort();
      });
  return { searchingFlag: c };
}, nt = (t, l, e, a = [], n = [], s = "exact") => {
  const o = b(""), f = b([]), i = b({}), r = { ...a.reduce((u, h) => (u[h] = !1, u), {}), ...n.reduce((u, h) => (u[h] = !0, u), {}) };
  for (let u in r) {
    let h = r[u], d = document.getElementById(u);
    i.value[u] = d == null ? void 0 : d.value, d && d.addEventListener("change", (y) => {
      i.value[u] = y.target.value, h && ue(() => {
        if (l != null)
          for (let w of Array.from(l.value.keys()))
            f.value.find((x) => x.key == w) || e(w, !1);
        else
          f.value.find((w) => w.key == o.value) || e(o.value, !1);
      });
    });
  }
  const c = function(u, h) {
    let d = u.value;
    if (Object.keys(i.value).length > 0 && (d = d.filter((y) => {
      var w, x;
      for (let g in i.value)
        if ((r[g] ? !0 : ((w = i.value[g]) != null ? w : "").length > 0) && ((x = y.data) == null ? void 0 : x.hasOwnProperty(g))) {
          if (Array.isArray(y.data[g])) {
            if (!y.data[g].includes(i.value[g]))
              return !1;
          } else if (y.data[g] != i.value[g])
            return !1;
        }
      return !0;
    })), h.length > 0)
      switch (s) {
        case "loose":
          const y = h.toLowerCase().split(" ").filter((w) => w.length > 0);
          d = d.filter((w) => {
            const x = w.value.toLowerCase();
            return y.every((g) => x.includes(g));
          });
          break;
        default:
          d = d.filter((w) => w.value.toLowerCase().includes(h.toLowerCase()));
          break;
      }
    return d;
  };
  return K(() => {
    f.value = c(t, o.value);
  }), { filterText: o, filteredOptions: f, filterValues: i };
}, at = (t, l, e, a, n, s, o) => {
  const f = getComputedStyle(document.querySelector("body")).font, i = function(u) {
    const d = document.createElement("canvas").getContext("2d");
    return d.font = f, d.measureText(u).width;
  }, r = T(() => {
    var h, d;
    const u = (h = se(a.value).width) != null ? h : 100;
    if (o === "inherit")
      return u;
    if (o == null || o === "dynamic") {
      const y = (d = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? d : 16;
      return Math.max(u, Math.max(...t.value.map((w) => i(w.value))) + 20 + y * 3);
    }
    return o;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return pt(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var u = se(a.value), h = se(null);
    if (s.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(s.value).position))
      var h = se(s.value);
    let d = -h.left + u.left;
    const y = window.document.documentElement.clientWidth;
    d + r.value > y && (d = y - r.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-h.top + u.top + u.height).toString() + "px",
      left: d.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: i };
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
    var we, be, Oe, xe, Se, ke;
    const e = t, a = T(() => {
      var v, p;
      return (p = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? p : e.multiple;
    });
    let n = Ve();
    const { options: s, selectedOptions: o, onReset: f } = Ke(e.originalNode, Z(e, "options"), Z(e, "modelValue"), e.initialValue, (Oe = (be = (we = e.originalNode) == null ? void 0 : we.id) != null ? be : n.id) != null ? Oe : null), { t: i } = tt(e.originalNode, Z(e, "localization")), r = (xe = e.originalNode) == null ? void 0 : xe.classList, c = Object.values((ke = (Se = e.originalNode) == null ? void 0 : Se.style) != null ? ke : {});
    Ze(e.originalNode);
    const u = l, h = (v, p = null) => {
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
    }, { filterText: d, filteredOptions: y, filterValues: w } = nt(s, o, h, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: x } = lt(
      s,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      w,
      e.fetchMode,
      e.fetchOptions
    ), g = b(null), A = b(null), q = b(null), M = b(!1);
    function J(v) {
      e.disabled || (M.value = v);
    }
    D(d, () => {
      A.value.querySelector(".scroller").scrollTop = 0;
    });
    const B = b(null), R = function(v) {
      const p = G(v.target);
      p.push(v.target), !p.includes(g.value) && !p.includes(A.value) ? M.value = !1 : (v.stopImmediatePropagation(), v.preventDefault());
    };
    ge(() => {
      if (e.dropdownContainer) {
        let v = !1;
        B.value = G(g.value).find((p) => !!(p instanceof Element && (p.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(p).position))));
      }
      if (B.value == null && (B.value = document.querySelector("body")), e.originalNode) {
        for (let p of r)
          p != "extraselect" && g.value.classList.add(p);
        for (let p of c)
          g.value.style[p] = e.originalNode.style[p];
        let v = G(g.value, "form").pop();
        v instanceof HTMLElement && v.matches("form") && v.addEventListener("reset", () => setTimeout(f)), e.originalNode.toggleValue = h, e.originalNode.setValues = (p) => {
          o.value.clear();
          for (let L of p)
            h(L);
        };
      }
      window.document.addEventListener("mousedown", R), window.document.addEventListener("focusin", R);
    }), Fe(() => {
      window.document.removeEventListener("mousedown", R), window.document.removeEventListener("focusin", R);
    });
    const { dropdownStyle: fe, getTextWidth: te } = at(s, o, M, g, A, B, e.maxWidth), U = (v) => {
      ue(
        () => {
          var p;
          return (p = e.originalNode) == null ? void 0 : p.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), u("update:modelValue", v);
    }, le = (v) => {
      X(v, !1), d.value = "";
    }, X = (v, p = null) => {
      p == null && (p = !Q.value), p ? (o.value.clear(), s.value.forEach((L) => o.value.set(L.key, L.key))) : o.value.clear(), U(Array.from(o.value.keys()));
    }, ne = () => {
      C.value ? y.value.forEach((v) => {
        o.value.has(v.key) && o.value.delete(v.key);
      }) : y.value.forEach((v) => {
        o.value.has(v.key) || o.value.set(v.key, v.key);
      }), U(Array.from(o.value.keys()));
    };
    D(M, (v, p) => {
      v != p && (v ? e.search && ue(() => {
        q.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const Q = T(() => o.value.size == s.value.length), C = T(() => y.value.reduce((v, p) => v && o.value.has(p.key), !0)), k = T(() => o.value.size == 0), N = T(() => {
      var v, p, L, Y, E;
      if (s.value.length < 0)
        return "";
      if (a.value) {
        if (k.value)
          return i("No selection");
        if (!e.searchableUrl && Q.value)
          return i("All selected");
        const V = g.value ? getComputedStyle(g.value) : null, ae = ((v = g.value) == null ? void 0 : v.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let oe = i(":n selected - ", { n: o.value.size }), _e = !0;
        for (let ut of o.value)
          if (_e ? _e = !1 : oe += ", ", oe += (L = (p = s.map.get(ut[0])) == null ? void 0 : p.value) != null ? L : x.value ? i("Loading...") : i("Value not found"), ae < te(oe))
            return o.value.size + i(" selected");
        return oe;
      } else
        for (let V of o.value)
          return (E = (Y = s.map.get(V[0])) == null ? void 0 : Y.value) != null ? E : x.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: I, containerProps: rt, wrapperProps: it } = We(
      y,
      {
        itemHeight: 32
      }
    );
    return (v, p) => {
      var L, Y;
      return O(), S(j, null, [
        a.value && m(o).size == 0 ? (O(), S("input", {
          key: 0,
          type: "hidden",
          name: (Y = (L = e.originalNode) == null ? void 0 : L.name) == null ? void 0 : Y.replace("[]", ""),
          value: ""
        }, null, 8, qt)) : F("", !0),
        e.showSelected ? (O(), S("div", Ht, [
          (O(!0), S(j, null, re(m(o), (E) => {
            var V;
            return O(), S("div", {
              key: E,
              onClick: W((ae) => h(E[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              Ee($((V = m(s).find((ae) => ae.key == E[0])) == null ? void 0 : V.value) + " ", 1),
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
          ref: g,
          value: N.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs, { disabled: t.disabled }), null, 16, Rt),
        B.value ? (O(), ve(pe, {
          key: 2,
          to: B.value
        }, [
          de(_("div", {
            class: ze(["extra-select dropdown", { searching: m(x) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: Pe(m(fe))
          }, [
            e.search ? (O(), S("div", Ut, [
              de(_("input", {
                ref_key: "searchNode",
                ref: q,
                class: "extra-select-search",
                "onUpdate:modelValue": p[2] || (p[2] = (E) => $e(d) ? d.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: m(i)("Search...")
              }, null, 8, Qt), [
                [ht, m(d)]
              ])
            ])) : F("", !0),
            m(d).length >= e.minChars ? (O(), S(j, { key: 1 }, [
              a.value ? (O(), S("div", Gt, [
                m(d).length == 0 ? (O(), S("div", {
                  key: 0,
                  onClick: W(X, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Jt, [
                    _("input", {
                      checked: Q.value,
                      type: "checkbox"
                    }, null, 8, Xt),
                    _("b", null, $(m(i)("Select all")), 1)
                  ])
                ])) : F("", !0),
                m(y).length > 0 && m(d).length > 0 ? (O(), S("div", {
                  key: 1,
                  onClick: W(ne, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  _("div", Yt, [
                    _("input", {
                      checked: C.value,
                      type: "checkbox"
                    }, null, 8, Zt),
                    _("b", null, $(m(i)("Select Filtered")), 1)
                  ])
                ])) : F("", !0),
                _("div", {
                  class: "clear",
                  onClick: W(le, ["stop", "prevent"])
                }, $(m(i)("Clear")), 1)
              ])) : F("", !0),
              m(y).length == 0 ? (O(), S("div", Kt, $(m(i)("No matches found")), 1)) : F("", !0)
            ], 64)) : (O(), S("div", el, $(m(i)("Insert at least :n characters", { n: e.minChars })), 1)),
            _("div", ce(m(rt), { class: "scroller" }), [
              _("div", Me(Be(m(it))), [
                (O(!0), S(j, null, re(m(I), (E) => (O(), S("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: W((V) => h(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  _("div", ll, [
                    a.value ? (O(), S("input", {
                      key: 0,
                      checked: m(o).has(E.data.key),
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
          (O(!0), S(j, null, re(m(o), (E) => (O(), S("option", {
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
    const { options: n } = Ke(e.originalNode, Z(e, "options"), b([]), null, (le = (U = (te = e.originalNode) == null ? void 0 : te.id) != null ? U : a.id) != null ? le : null), { t: s } = tt(e.originalNode, Z(e, "localization")), o = (X = e.originalNode) == null ? void 0 : X.classList, f = Object.values((Q = (ne = e.originalNode) == null ? void 0 : ne.style) != null ? Q : {});
    Ze(e.originalNode);
    const i = l, r = (C, k = null) => {
      k === !1 ? c.value = "" : c.value = n.map.get(C).value, x.value = !1;
    }, { filterText: c, filteredOptions: u, filterValues: h } = nt(n, null, r, e.filterFields, e.hardFilterFields, e.matchType), { searchingFlag: d } = lt(
      n,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      h,
      e.fetchMode,
      e.fetchOptions
    ), y = b(null), w = b(null), x = b(!1), g = b(null);
    function A(C) {
      e.disabled || (x.value = C);
    }
    D(c, () => {
      w.value.querySelector(".scroller").scrollTop = 0;
    });
    const q = function(C) {
      const k = G(C.target);
      k.push(C.target), !k.includes(y.value) && !k.includes(w.value) && (x.value = !1);
    };
    ge(() => {
      if (e.dropdownContainer) {
        let N = !1;
        g.value = G(y.value).find((I) => !!(I instanceof Element && (I.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(I).position))));
      }
      if (g.value == null && (g.value = document.querySelector("body")), e.originalNode) {
        for (let I of o)
          I != "extrasuggest" && y.value.classList.add(I);
        for (let I of f)
          y.value.style[I] = e.originalNode.style[I];
        c.value = e.originalNode.value;
        let N = G(y.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(k)), e.originalNode.addEventListener("change", () => {
          J(!0);
        });
      }
      K(() => {
        e.modelValue != null && (c.value = e.modelValue);
      });
      const C = c.value, k = () => {
        c.value = C;
      };
      window.document.addEventListener("mousedown", q), window.document.addEventListener("focusin", q);
    }), Fe(() => {
      window.document.removeEventListener("mousedown", q), window.document.removeEventListener("focusin", q);
    });
    const { dropdownStyle: M } = at(n, b([]), x, y, w, g, e.maxWidth), J = (C = !1) => {
      var k;
      e.originalNode && (C ? c.value = e.originalNode.value : (e.originalNode.value = c.value, (k = e.originalNode) == null || k.dispatchEvent(new Event("change", { bubbles: !0 })))), i("update:modelValue", c.value);
    };
    D(() => x.value, (C) => {
      C === !1 && J();
    });
    const { list: B, containerProps: R, wrapperProps: fe } = We(
      u,
      {
        itemHeight: 32
      }
    );
    return (C, k) => (O(), S(j, null, [
      de(_("input", ce({
        onFocus: k[0] || (k[0] = (N) => A(!0)),
        onClick: k[1] || (k[1] = (N) => A(!0)),
        ref_key: "inputNode",
        ref: y,
        "onUpdate:modelValue": k[2] || (k[2] = (N) => $e(c) ? c.value = N : null),
        class: "extra-select extra-select-input"
      }, C.$attrs, { disabled: t.disabled }), null, 16, rl), [
        [yt, m(c)]
      ]),
      g.value ? (O(), ve(pe, {
        key: 0,
        to: g.value
      }, [
        de(_("div", {
          class: ze(["extra-select dropdown", { searching: m(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: w,
          style: Pe(m(M))
        }, [
          m(c).length >= e.minChars ? (O(), S(j, { key: 0 }, [
            m(u).length == 0 ? (O(), S("div", il, $(m(s)("No matches found")), 1)) : F("", !0)
          ], 64)) : (O(), S("div", ul, $(m(s)("Insert at least :n characters", { n: e.minChars })), 1)),
          _("div", ce(m(R), { class: "scroller" }), [
            _("div", Me(Be(m(fe))), [
              (O(!0), S(j, null, re(m(B), (N) => (O(), S("button", {
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
          [je, x.value]
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
