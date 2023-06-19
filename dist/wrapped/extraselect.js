import { unref as g, getCurrentScope as nt, onScopeDispose as at, getCurrentInstance as ot, onMounted as ce, nextTick as le, computed as N, ref as w, shallowRef as st, watch as Q, watchEffect as U, watchPostEffect as rt, toRef as D, onUnmounted as xe, openBlock as b, createElementBlock as _, Fragment as M, createCommentVNode as I, renderList as ee, createTextVNode as ye, toDisplayString as V, createElementVNode as O, mergeProps as ne, createBlock as se, Teleport as re, withDirectives as ae, normalizeClass as Oe, normalizeStyle as Se, isRef as Ee, vModelText as ut, normalizeProps as Ce, guardReactiveProps as Le, withModifiers as Ne, vShow as Ae, vModelDynamic as it, createApp as Te } from "vue";
const F = /* @__PURE__ */ new WeakMap();
class j {
  static put(l, e, n) {
    F.has(l) || F.set(l, /* @__PURE__ */ new Map()), F.get(l).set(e, n);
  }
  static get(l, e) {
    return F.get(l).get(e);
  }
  static has(l, e) {
    return F.has(l) && F.get(l).has(e);
  }
  static remove(l, e) {
    var n = F.get(l).delete(e);
    return F.get(l).size !== 0 && F.delete(l), n;
  }
  static lock(l, e, n) {
    return j.has(l, e) ? !1 : (j.put(l, e, !0), n());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = F);
function Z(t) {
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
function H(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], n = t.parentNode; n != null && n instanceof HTMLElement && !(l instanceof HTMLElement && n === l) && !(typeof l == "string" && n.matches(l)); ) {
    var a = n;
    e.push(a), n = a.parentNode;
  }
  return n != null && e.push(n), e;
}
function ct(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var me;
const G = typeof window < "u";
G && ((me = window == null ? void 0 : window.navigator) == null ? void 0 : me.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function dt(t) {
  return typeof t == "function" ? t() : g(t);
}
function ft(t) {
  return t;
}
function vt(t) {
  return nt() ? (at(t), !0) : !1;
}
function pt(t, l = !0) {
  ot() ? ce(t) : l ? t() : le(t);
}
function te(t) {
  var l;
  const e = dt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const Ie = G ? window : void 0;
G && window.document;
G && window.navigator;
G && window.location;
function ht(t, l = !1) {
  const e = w(), n = () => e.value = Boolean(t());
  return n(), pt(n, l), e;
}
const ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ie = "__vueuse_ssr_handlers__";
ue[ie] = ue[ie] || {};
ue[ie];
var ge = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, mt = Object.prototype.propertyIsEnumerable, gt = (t, l) => {
  var e = {};
  for (var n in t)
    yt.call(t, n) && l.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && ge)
    for (var n of ge(t))
      l.indexOf(n) < 0 && mt.call(t, n) && (e[n] = t[n]);
  return e;
};
function wt(t, l, e = {}) {
  const n = e, { window: a = Ie } = n, o = gt(n, ["window"]);
  let i;
  const s = ht(() => a && "ResizeObserver" in a), u = () => {
    i && (i.disconnect(), i = void 0);
  }, r = Q(() => te(t), (c) => {
    u(), s.value && a && c && (i = new ResizeObserver(l), i.observe(c, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), r();
  };
  return vt(d), {
    isSupported: s,
    stop: d
  };
}
function bt(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: n = Ie, box: a = "content-box" } = e, o = N(() => {
    var u, r;
    return (r = (u = te(t)) == null ? void 0 : u.namespaceURI) == null ? void 0 : r.includes("svg");
  }), i = w(l.width), s = w(l.height);
  return wt(t, ([u]) => {
    const r = a === "border-box" ? u.borderBoxSize : a === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
    if (n && o.value) {
      const d = te(t);
      if (d) {
        const c = n.getComputedStyle(d);
        i.value = parseFloat(c.width), s.value = parseFloat(c.height);
      }
    } else if (r) {
      const d = Array.isArray(r) ? r : [r];
      i.value = d.reduce((c, { inlineSize: f }) => c + f, 0), s.value = d.reduce((c, { blockSize: f }) => c + f, 0);
    } else
      i.value = u.contentRect.width, s.value = u.contentRect.height;
  }, e), Q(() => te(t), (u) => {
    i.value = u ? l.width : 0, s.value = u ? l.height : 0;
  }), {
    width: i,
    height: s
  };
}
var we;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(we || (we = {}));
var _t = Object.defineProperty, be = Object.getOwnPropertySymbols, kt = Object.prototype.hasOwnProperty, xt = Object.prototype.propertyIsEnumerable, _e = (t, l, e) => l in t ? _t(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, Ot = (t, l) => {
  for (var e in l || (l = {}))
    kt.call(l, e) && _e(t, e, l[e]);
  if (be)
    for (var e of be(l))
      xt.call(l, e) && _e(t, e, l[e]);
  return t;
};
const St = {
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
Ot({
  linear: ft
}, St);
function Fe(t, l) {
  const { containerStyle: e, wrapperProps: n, scrollTo: a, calculateRange: o, currentList: i, containerRef: s } = "itemHeight" in l ? Lt(l, t) : Ct(l, t);
  return {
    list: i,
    scrollTo: a,
    containerProps: {
      ref: s,
      onScroll: () => {
        o();
      },
      style: e
    },
    wrapperProps: n
  };
}
function Ve(t) {
  const l = w(null), e = bt(l), n = w([]), a = st(t);
  return { state: w({ start: 0, end: 10 }), source: a, currentList: n, size: e, containerRef: l };
}
function ze(t, l, e) {
  return (n) => {
    if (typeof e == "number")
      return Math.ceil(n / e);
    const { start: a = 0 } = t.value;
    let o = 0, i = 0;
    for (let s = a; s < l.value.length; s++) {
      const u = e(s);
      if (o += u, i = s, o > n)
        break;
    }
    return i - a;
  };
}
function Pe(t, l) {
  return (e) => {
    if (typeof l == "number")
      return Math.floor(e / l) + 1;
    let n = 0, a = 0;
    for (let o = 0; o < t.value.length; o++) {
      const i = l(o);
      if (n += i, n >= e) {
        a = o;
        break;
      }
    }
    return a + 1;
  };
}
function $e(t, l, e, n, { containerRef: a, state: o, currentList: i, source: s }) {
  return () => {
    const u = a.value;
    if (u) {
      const r = e(t === "vertical" ? u.scrollTop : u.scrollLeft), d = n(t === "vertical" ? u.clientHeight : u.clientWidth), c = r - l, f = r + d + l;
      o.value = {
        start: c < 0 ? 0 : c,
        end: f > s.value.length ? s.value.length : f
      }, i.value = s.value.slice(o.value.start, o.value.end).map((h, y) => ({
        data: h,
        index: y + o.value.start
      }));
    }
  };
}
function Me(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((a, o, i) => a + t(i), 0);
}
function Be(t, l, e) {
  Q([t.width, t.height, l], () => {
    e();
  });
}
function je(t, l) {
  return N(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, n, a) => e + t(a), 0));
}
const Et = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Re(t, l, e, n) {
  return (a) => {
    n.value && (n.value[Et[t]] = e(a), l());
  };
}
function Ct(t, l) {
  const e = Ve(l), { state: n, source: a, currentList: o, size: i, containerRef: s } = e, u = { overflowX: "auto" }, { itemWidth: r, overscan: d = 5 } = t, c = ze(n, a, r), f = Pe(a, r), h = $e("horizontal", d, f, c, e), y = Me(r, a), m = N(() => y(n.value.start)), S = je(r, a);
  Be(i, l, h);
  const z = Re("horizontal", h, y, s), L = N(() => ({
    style: {
      height: "100%",
      width: `${S.value - m.value}px`,
      marginLeft: `${m.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: z,
    calculateRange: h,
    wrapperProps: L,
    containerStyle: u,
    currentList: o,
    containerRef: s
  };
}
function Lt(t, l) {
  const e = Ve(l), { state: n, source: a, currentList: o, size: i, containerRef: s } = e, u = { overflowY: "auto" }, { itemHeight: r, overscan: d = 5 } = t, c = ze(n, a, r), f = Pe(a, r), h = $e("vertical", d, f, c, e), y = Me(r, a), m = N(() => y(n.value.start)), S = je(r, a);
  Be(i, l, h);
  const z = Re("vertical", h, y, s), L = N(() => ({
    style: {
      width: "100%",
      height: `${S.value - m.value}px`,
      marginTop: `${m.value}px`
    }
  }));
  return {
    calculateRange: h,
    scrollTo: z,
    containerStyle: u,
    wrapperProps: L,
    currentList: o,
    containerRef: s
  };
}
const B = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, Nt = (t, l) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, a, o = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const i = t.map.get(n);
      if (i)
        i.value = a, i.data = o;
      else {
        let s = { value: a, key: n, data: o };
        t.value.push(s), t.map.set(s.key, s);
      }
    },
    addRange: (n) => {
      for (let a of n)
        t.actions.push(a.key, a.value, a.data);
    },
    remove: (n) => {
      t.value.splice(t.value.findIndex((a) => a.key == n), 1);
    },
    clear: () => {
      t.value = [];
    },
    sort: (n = null) => {
      n == null && (n = (a, o) => a.value.localeCompare(o.value)), t.value = t.value.sort(n);
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
let At = 1;
const qe = (t) => {
  t && (t.style.display = "none", ct(t));
}, He = (t, l, e, n) => {
  var u;
  const a = w(/* @__PURE__ */ new Map());
  U(() => {
    if (Array.isArray(e.value)) {
      a.value.clear();
      for (let r of e.value)
        a.value.set(r, r);
    }
  });
  const o = w([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let r of o.value)
        o.map.set(r.key, r);
  }, U(() => {
    l.value && (o.value = l.value.map((r) => ({ ...r, key: B(r.key) })), o.rebuildMap());
  }), t) {
    if (a.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((d) => B(d.value)).filter((d) => d))
        a.value.set(r, r);
      o.value = Array.apply(null, t.options).reduce((r, d) => (r.push({ value: d.text, key: B(d.value), data: Object.assign({}, d.dataset) }), r), []);
    }
    if (t.matches("input")) {
      let r = t.value;
      r != null && r.length > 0 && (o.value = [{ value: r, key: r }]);
    }
    o.rebuildMap();
  }
  if (Array.isArray(n))
    for (let r of n)
      a.value.set(B(r), B(r));
  else
    n != null && a.value.set(B(n), B(n));
  Nt(o, (u = t == null ? void 0 : t.id) != null ? u : "extraselect_" + (++At).toString());
  const i = [];
  return a.value.forEach((r, d) => {
    i.push([d, r]);
  }), { options: o, selectedOptions: a, onReset: () => {
    a.value.clear();
    for (let [r, d] of i)
      a.value.set(r, d);
  } };
};
w({});
function Tt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const de = (t = null) => {
  var n, a;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(a = (n = window.ExtraSelectLocalization.defaults) == null ? void 0 : n.defaultArray) != null ? a : {} };
  Object.assign(e, t != null ? t : {}), We(w(e), "defaults");
}, We = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, de());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (n) => {
      var a;
      return (a = t.value[n]) != null ? a : null;
    },
    push: (n, a) => {
      t.value[n] = a;
    }
  };
  window.ExtraSelectLocalization[l] = e, t.actions = e;
};
let It = 0;
const De = (t, l) => {
  var n;
  return We(l, (n = t == null ? void 0 : t.id) != null ? n : "extraselect_" + (++It).toString()), { propLocalization: l, t: (a, o = {}) => {
    var s;
    let i = (s = l.value[a]) != null ? s : window.ExtraSelectLocalization.defaults.get(a);
    return i == null && (window.ExtraSelectLocalization.defaults.push(a, a), i = a), Tt(i, o);
  } };
}, ke = async function(t, l = null, e = {}) {
  var o;
  const n = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, n)).json();
}, Ue = (t, l, e, n, a, o, i = "limited", s = {}) => {
  const u = w(0), r = w(!1), d = N(() => r.value || u.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const c = [];
      U((f) => {
        if (n.value.length >= a) {
          let h = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              h = !c.includes(n.value);
              break;
            case "complete":
              h = c.reduce((y, m) => y && !n.value.startsWith(m), !0);
              break;
          }
          if (h) {
            r.value = !0;
            const y = setTimeout(() => {
              c.push(n.value), u.value += 1, s.body = { ...s.body, ...o.value }, ke(l, n.value, s).then((m) => {
                t.actions.addRange(m), t.actions.sort(), u.value -= 1, r.value = !1;
              });
            }, 500);
            f(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      ke(l, null, s).then((c) => {
        t.actions.addRange(c), t.actions.sort();
      });
  return { searchingFlag: d };
}, Qe = (t, l, e, n = [], a = []) => {
  const o = w(""), i = w([]), s = w({}), u = { ...n.reduce((d, c) => (d[c] = !1, d), {}), ...a.reduce((d, c) => (d[c] = !0, d), {}) };
  for (let d in u) {
    let c = u[d], f = document.getElementById(d);
    s.value[d] = f == null ? void 0 : f.value, f && f.addEventListener("change", (h) => {
      s.value[d] = h.target.value, c && le(() => {
        if (l != null)
          for (let y of Array.from(l.value.keys()))
            i.value.find((m) => m.key == y) || e(y, !1);
        else
          i.value.find((y) => y.key == o.value) || e(o.value, !1);
      });
    });
  }
  const r = function(d, c) {
    let f = d.value;
    return Object.keys(s.value).length > 0 && (f = f.filter((h) => {
      var y, m;
      for (let S in s.value)
        if ((u[S] ? !0 : ((y = s.value[S]) != null ? y : "").length > 0) && ((m = h.data) == null ? void 0 : m.hasOwnProperty(S)) && h.data[S] != s.value[S])
          return !1;
      return !0;
    })), c.length > 0 && (f = f.filter((h) => h.value.toLowerCase().includes(c.toLowerCase()))), f;
  };
  return U(() => {
    i.value = r(t, o.value);
  }), { filterText: o, filteredOptions: i, filterValues: s };
}, Ge = (t, l, e, n, a, o, i) => {
  const s = getComputedStyle(document.querySelector("body")).font, u = function(c) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = s, h.measureText(c).width;
  }, r = N(() => {
    var f, h;
    const c = (f = Z(n.value).width) != null ? f : 100;
    if (i === "inherit")
      return c;
    if (i == null || i === "dynamic") {
      const y = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(c, Math.max(...t.value.map((m) => u(m.value))) + 20 + y * 3);
    }
    return i;
  }), d = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return rt(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var c = Z(n.value), f = Z(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var f = Z(o.value);
    let h = -f.left + c.left;
    const y = window.document.documentElement.clientWidth;
    h + r.value > y && (h = y - r.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-f.top + c.top + c.height).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: u };
}, Ft = ["name"], Vt = {
  key: 1,
  class: "extra-select selection"
}, zt = ["onClick"], Pt = ["innerHTML"], $t = ["value"], Mt = {
  key: 0,
  class: "input-searching"
}, Bt = ["placeholder"], jt = {
  key: 0,
  class: "allselect-clear"
}, Rt = { class: "row-input" }, qt = ["checked"], Ht = { class: "row-input" }, Wt = ["checked"], Dt = {
  key: 1,
  class: "no-matches"
}, Ut = { key: 2 }, Qt = ["onClick"], Gt = { class: "row-input" }, Jt = ["checked"], Kt = ["value"], Xt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Yt = Object.assign(Xt, {
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    var fe, ve, pe;
    const e = t, n = N(() => {
      var v, p;
      return (p = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? p : e.multiple;
    }), { options: a, selectedOptions: o, onReset: i } = He(e.originalNode, D(e, "options"), D(e, "modelValue"), e.initialValue), { t: s } = De(e.originalNode, D(e, "localization")), u = (fe = e.originalNode) == null ? void 0 : fe.classList, r = Object.values((pe = (ve = e.originalNode) == null ? void 0 : ve.style) != null ? pe : {});
    qe(e.originalNode);
    const d = (v, p = null) => {
      if (n.value) {
        let A = p;
        switch (A == null && (A = !o.value.has(v)), A) {
          case !0:
            o.value.set(v, v);
            break;
          case !1:
            o.value.delete(v);
            break;
        }
      } else
        o.value.clear(), p !== !1 && o.value.set(v, v), L.value = !1;
      q(Array.from(o.value.keys()));
    }, { filterText: c, filteredOptions: f, filterValues: h } = Qe(a, o, d, e.filterFields, e.hardFilterFields), { searchingFlag: y } = Ue(
      a,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      h,
      e.fetchMode,
      e.fetchOptions
    ), m = w(null), S = w(null), z = w(null), L = w(!1), $ = w(null), R = function(v) {
      const p = H(v.target);
      p.push(v.target), !p.includes(m.value) && !p.includes(S.value) && (L.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let v = !1;
        $.value = H(m.value).find((p) => !!(p instanceof Element && (p.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(p).position))));
      }
      if ($.value == null && ($.value = document.querySelector("body")), e.originalNode) {
        for (let p of u)
          p != "extraselect" && m.value.classList.add(p);
        for (let p of r)
          m.value.style[p] = e.originalNode.style[p];
        r.includes("background-color") || (m.value.style.backgroundColor = "white");
        let v = H(m.value, "form").pop();
        v instanceof HTMLElement && v.matches("form") && v.addEventListener("reset", () => setTimeout(i));
      }
      window.document.addEventListener("mousedown", R), window.document.addEventListener("focusin", R);
    }), xe(() => {
      window.document.removeEventListener("mousedown", R), window.document.removeEventListener("focusin", R);
    });
    const { dropdownStyle: oe, getTextWidth: J } = Ge(a, o, L, m, S, $, e.maxWidth), q = (v) => {
      le(
        () => {
          var p;
          return (p = e.originalNode) == null ? void 0 : p.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", v);
    }, K = (v) => {
      x(v, !1), c.value = "";
    }, x = (v, p = null) => {
      p == null && (p = !C.value), p ? (o.value.clear(), a.value.forEach((A) => o.value.set(A.key, A.key))) : o.value.clear(), q(Array.from(o.value.keys()));
    }, k = () => {
      P.value ? f.value.forEach((v) => {
        o.value.has(v.key) && o.value.delete(v.key);
      }) : f.value.forEach((v) => {
        o.value.has(v.key) || o.value.set(v.key, v.key);
      }), q(Array.from(o.value.keys()));
    };
    Q(L, (v, p) => {
      v != p && (v ? e.search && le(() => {
        z.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const C = N(() => o.value.size == a.value.length), P = N(() => f.value.reduce((v, p) => v && o.value.has(p.key), !0)), Xe = N(() => o.value.size == 0), Ye = N(() => {
      var v, p, A, W, E;
      if (a.value.length < 0)
        return "";
      if (n.value) {
        if (Xe.value)
          return s("No selection");
        if (!e.searchableUrl && C.value)
          return $$t("All selected");
        const T = m.value ? getComputedStyle(m.value) : null, X = ((v = m.value) == null ? void 0 : v.clientWidth) - parseInt(T == null ? void 0 : T.paddingLeft) - parseInt(T == null ? void 0 : T.paddingRight);
        let Y = s(":n selected - ", { n: o.value.size }), he = !0;
        for (let lt of o.value)
          if (he ? he = !1 : Y += ", ", Y += (A = (p = a.map.get(lt[0])) == null ? void 0 : p.value) != null ? A : y.value ? s("Loading...") : s("Value not found"), X < J(Y))
            return o.value.size + s(" selected");
        return Y;
      } else
        for (let T of o.value)
          return (E = (W = a.map.get(T[0])) == null ? void 0 : W.value) != null ? E : y.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: Ze, containerProps: et, wrapperProps: tt } = Fe(
      f,
      {
        itemHeight: 32
      }
    );
    return (v, p) => {
      var A, W;
      return b(), _(M, null, [
        n.value && g(o).size == 0 ? (b(), _("input", {
          key: 0,
          type: "hidden",
          name: (W = (A = e.originalNode) == null ? void 0 : A.name) == null ? void 0 : W.replace("[]", ""),
          value: ""
        }, null, 8, Ft)) : I("", !0),
        e.showSelected ? (b(), _("div", Vt, [
          (b(!0), _(M, null, ee(g(o), (E) => {
            var T;
            return b(), _("div", {
              key: E,
              onClick: (X) => d(E[0]),
              class: "selection-badge"
            }, [
              ye(V((T = g(a).find((X) => X.key == E[0])) == null ? void 0 : T.value) + " ", 1),
              O("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Pt)
            ], 8, zt);
          }), 128))
        ])) : I("", !0),
        O("input", ne({
          onFocus: p[0] || (p[0] = (E) => L.value = !0),
          onClick: p[1] || (p[1] = (E) => L.value = !0),
          ref_key: "inputNode",
          ref: m,
          value: Ye.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs), null, 16, $t),
        $.value ? (b(), se(re, {
          key: 2,
          to: $.value
        }, [
          ae(O("div", {
            class: Oe(["extra-select dropdown", { searching: g(y) > 0 }]),
            ref_key: "dropdownNode",
            ref: S,
            style: Se(g(oe))
          }, [
            e.search ? (b(), _("div", Mt, [
              ae(O("input", {
                ref_key: "searchNode",
                ref: z,
                class: "extra-select-search",
                "onUpdate:modelValue": p[2] || (p[2] = (E) => Ee(c) ? c.value = E : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: g(s)("Search...")
              }, null, 8, Bt), [
                [ut, g(c)]
              ])
            ])) : I("", !0),
            g(c).length >= e.minChars ? (b(), _(M, { key: 1 }, [
              n.value ? (b(), _("div", jt, [
                g(c).length == 0 ? (b(), _("div", {
                  key: 0,
                  onClick: x,
                  class: "all-select"
                }, [
                  O("div", Rt, [
                    O("input", {
                      checked: C.value,
                      type: "checkbox"
                    }, null, 8, qt),
                    O("b", null, V(g(s)("Select all")), 1)
                  ])
                ])) : I("", !0),
                g(f).length > 0 && g(c).length > 0 ? (b(), _("div", {
                  key: 1,
                  onClick: k,
                  class: "all-select"
                }, [
                  O("div", Ht, [
                    O("input", {
                      checked: P.value,
                      type: "checkbox"
                    }, null, 8, Wt),
                    O("b", null, V(g(s)("Select Filtered")), 1)
                  ])
                ])) : I("", !0),
                O("div", {
                  class: "clear",
                  onClick: K
                }, V(g(s)("Clear")), 1)
              ])) : I("", !0),
              g(f).length == 0 ? (b(), _("div", Dt, V(g(s)("No matches found")), 1)) : I("", !0)
            ], 64)) : (b(), _("div", Ut, V(g(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            O("div", ne(g(et), { class: "scroller" }), [
              O("div", Ce(Le(g(tt))), [
                (b(!0), _(M, null, ee(g(Ze), (E) => (b(), _("button", {
                  key: E.index,
                  class: "dropdown-row",
                  onClick: Ne((T) => d(E.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  O("div", Gt, [
                    n.value ? (b(), _("input", {
                      key: 0,
                      checked: g(o).has(E.data.key),
                      type: "checkbox"
                    }, null, 8, Jt)) : I("", !0),
                    ye(" " + V(E.data.value), 1)
                  ])
                ], 8, Qt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Ae, L.value]
          ])
        ], 8, ["to"])) : I("", !0),
        e.originalNode ? (b(), se(re, {
          key: 3,
          to: e.originalNode
        }, [
          (b(!0), _(M, null, ee(g(o), (E) => (b(), _("option", {
            key: E[0],
            selected: "selected",
            value: E[0]
          }, null, 8, Kt))), 128))
        ], 8, ["to"])) : I("", !0)
      ], 64);
    };
  }
}), Zt = {
  key: 0,
  class: "no-matches"
}, el = { key: 1 }, tl = ["onClick"], ll = { class: "row-input" }, nl = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, al = Object.assign(nl, {
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    var J, q, K;
    const e = t, { options: n } = He(e.originalNode, D(e, "options"), w([])), { t: a } = De(e.originalNode, D(e, "localization")), o = (J = e.originalNode) == null ? void 0 : J.classList, i = Object.values((K = (q = e.originalNode) == null ? void 0 : q.style) != null ? K : {});
    qe(e.originalNode);
    const s = (x, k = null) => {
      k === !1 ? u.value = "" : u.value = n.map.get(x).value, y.value = !1;
    }, { filterText: u, filteredOptions: r, filterValues: d } = Qe(n, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: c } = Ue(
      n,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      d,
      e.fetchMode,
      e.fetchOptions
    ), f = w(null), h = w(null), y = w(!1), m = w(null), S = function(x) {
      const k = H(x.target);
      k.push(x.target), !k.includes(f.value) && !k.includes(h.value) && (y.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let x = !1;
        m.value = H(f.value).find((k) => !!(k instanceof Element && (k.matches(e.dropdownContainer) && (x = !0), x && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(k).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let P of o)
          P != "extrasuggest" && f.value.classList.add(P);
        for (let P of i)
          f.value.style[P] = e.originalNode.style[P];
        i.includes("background-color") || (f.value.style.backgroundColor = "white"), u.value = e.originalNode.value, U(() => {
          e.modelValue != null && (u.value = e.modelValue);
        });
        const x = u.value, k = () => {
          u.value = x;
        };
        let C = H(f.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(k));
      }
      window.document.addEventListener("mousedown", S), window.document.addEventListener("focusin", S);
    }), xe(() => {
      window.document.removeEventListener("mousedown", S), window.document.removeEventListener("focusin", S);
    });
    const { dropdownStyle: z } = Ge(n, w([]), y, f, h, m, e.maxWidth), L = () => {
      var x;
      e.originalNode && (e.originalNode.value = u.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 }))), l("update:modelValue", u.value);
    };
    Q(() => y.value, (x) => {
      x === !1 && L();
    });
    const { list: $, containerProps: R, wrapperProps: oe } = Fe(
      r,
      {
        itemHeight: 32
      }
    );
    return (x, k) => (b(), _(M, null, [
      ae(O("input", ne({
        onFocus: k[0] || (k[0] = (C) => y.value = !0),
        onClick: k[1] || (k[1] = (C) => y.value = !0),
        ref_key: "inputNode",
        ref: f,
        "onUpdate:modelValue": k[2] || (k[2] = (C) => Ee(u) ? u.value = C : null),
        class: "extra-select extra-select-input"
      }, x.$attrs), null, 16), [
        [it, g(u)]
      ]),
      m.value ? (b(), se(re, {
        key: 0,
        to: m.value
      }, [
        ae(O("div", {
          class: Oe(["extra-select dropdown", { searching: g(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: Se(g(z))
        }, [
          g(u).length >= e.minChars ? (b(), _(M, { key: 0 }, [
            g(r).length == 0 ? (b(), _("div", Zt, V(g(a)("No matches found")), 1)) : I("", !0)
          ], 64)) : (b(), _("div", el, V(g(a)("Insert at least :n characters", { n: e.minChars })), 1)),
          O("div", ne(g(R), { class: "scroller" }), [
            O("div", Ce(Le(g(oe))), [
              (b(!0), _(M, null, ee(g($), (C) => (b(), _("button", {
                key: C.index,
                class: "dropdown-row",
                onClick: Ne((P) => s(C.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", ll, V(C.data.value), 1)
              ], 8, tl))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ae, y.value]
        ])
      ], 8, ["to"])) : I("", !0)
    ], 64));
  }
}), sl = de, Je = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Je.bindNew(t);
    });
  },
  bindNew(t) {
    j.lock(t, "extra-select", () => {
      const l = {};
      for (let a in t.dataset)
        try {
          l[a] = JSON.parse(t.dataset[a]);
        } catch {
          l[a] = t.dataset[a];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const n = Te(Yt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), j.remove(t, "extra-select");
      });
    });
  }
}, Ke = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Ke.bindNew(t);
    });
  },
  bindNew(t) {
    j.lock(t, "extra-suggest", () => {
      const l = {};
      for (let a in t.dataset)
        try {
          l[a] = JSON.parse(t.dataset[a]);
        } catch {
          l[a] = t.dataset[a];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const n = Te(al, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), j.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Je.init(), Ke.init(), de();
});
export {
  Je as ExtraSelect,
  Ke as ExtraSuggest,
  sl as loadExtraSelectDefaultLocalization
};
