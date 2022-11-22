import { unref as m, getCurrentScope as Ue, onScopeDispose as We, getCurrentInstance as De, onMounted as re, nextTick as Z, ref as k, shallowRef as Qe, watch as G, computed as V, watchEffect as Q, watchPostEffect as Ge, toRef as le, onUnmounted as we, openBlock as b, createElementBlock as O, Fragment as j, renderList as Y, createTextVNode as fe, toDisplayString as D, createElementVNode as C, createCommentVNode as P, mergeProps as ee, createBlock as ne, Teleport as ae, withDirectives as te, normalizeClass as be, normalizeStyle as ke, isRef as _e, vModelText as Je, normalizeProps as Oe, guardReactiveProps as Se, withModifiers as xe, vShow as Ce, vModelDynamic as Ke, createApp as Ee } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class H {
  static put(l, e, n) {
    M.has(l) || M.set(l, /* @__PURE__ */ new Map()), M.get(l).set(e, n);
  }
  static get(l, e) {
    return M.get(l).get(e);
  }
  static has(l, e) {
    return M.has(l) && M.get(l).has(e);
  }
  static remove(l, e) {
    var n = M.get(l).delete(e);
    return M.get(l).size !== 0 && M.delete(l), n;
  }
  static lock(l, e, n) {
    return H.has(l, e) ? !1 : (H.put(l, e, !0), n());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = M);
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
function U(t, l) {
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
  return typeof t == "function" ? t() : m(t);
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
  const e = k(), n = () => e.value = Boolean(t());
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
  let i;
  const s = nt(() => o && "ResizeObserver" in o), h = () => {
    i && (i.disconnect(), i = void 0);
  }, c = G(() => Ne(t), (u) => {
    h(), s.value && o && u && (i = new ResizeObserver(l), i.observe(u, a));
  }, { immediate: !0, flush: "post" }), r = () => {
    h(), c();
  };
  return et(r), {
    isSupported: s,
    stop: r
  };
}
function ut(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: n = "content-box" } = e, o = k(l.width), a = k(l.height);
  return rt(t, ([i]) => {
    const s = n === "border-box" ? i.borderBoxSize : n === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    s ? (o.value = s.reduce((h, { inlineSize: c }) => h + c, 0), a.value = s.reduce((h, { blockSize: c }) => h + c, 0)) : (o.value = i.contentRect.width, a.value = i.contentRect.height);
  }, e), G(() => Ne(t), (i) => {
    o.value = i ? l.width : 0, a.value = i ? l.height : 0;
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
  const e = k(), n = ut(e), o = k([]), a = Qe(t), i = k({ start: 0, end: 10 }), { itemHeight: s, overscan: h = 5 } = l, c = (g) => {
    if (typeof s == "number")
      return Math.ceil(g / s);
    const { start: E = 0 } = i.value;
    let L = 0, I = 0;
    for (let N = E; N < a.value.length; N++)
      if (L += s(N), L >= g) {
        I = N;
        break;
      }
    return I - E;
  }, r = (g) => {
    if (typeof s == "number")
      return Math.floor(g / s) + 1;
    let E = 0, L = 0;
    for (let I = 0; I < a.value.length; I++)
      if (E += s(I), E >= g) {
        L = I;
        break;
      }
    return L + 1;
  }, u = () => {
    const g = e.value;
    if (g) {
      const E = r(g.scrollTop), L = c(g.clientHeight), I = E - h, N = E + L + h;
      i.value = {
        start: I < 0 ? 0 : I,
        end: N > a.value.length ? a.value.length : N
      }, o.value = a.value.slice(i.value.start, i.value.end).map((z, S) => ({
        data: z,
        index: S + i.value.start
      }));
    }
  };
  G([n.width, n.height, t], () => {
    u();
  });
  const y = V(() => typeof s == "number" ? a.value.length * s : a.value.reduce((g, E, L) => g + s(L), 0)), p = (g) => typeof s == "number" ? g * s : a.value.slice(0, g).reduce((L, I, N) => L + s(N), 0), v = (g) => {
    e.value && (e.value.scrollTop = p(g), u());
  }, _ = V(() => p(i.value.start)), F = V(() => ({
    style: {
      width: "100%",
      height: `${y.value - _.value}px`,
      marginTop: `${_.value}px`
    }
  }));
  return {
    list: o,
    scrollTo: v,
    containerProps: {
      ref: e,
      onScroll: () => {
        u();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: F
  };
}
const q = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, pt = (t, l) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, o, a = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const i = t.map.get(n);
      if (i)
        i.value = o, i.data = a;
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
  var h;
  const o = k(/* @__PURE__ */ new Map());
  Q(() => {
    if (Array.isArray(e.value)) {
      o.value.clear();
      for (let c of e.value)
        o.value.set(c, c);
    }
  });
  const a = k([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let c of a.value)
        a.map.set(c.key, c);
  }, Q(() => {
    l.value && (a.value = l.value.map((c) => ({ ...c, key: q(c.key) })), a.rebuildMap());
  }), t) {
    o.value.clear();
    for (let c of Array.apply(null, t.selectedOptions).map((r) => q(r.value)).filter((r) => r))
      o.value.set(c, c);
    a.value = Array.apply(null, t.options).reduce((c, r) => (c.push({ value: r.text, key: q(r.value), data: Object.assign({}, r.dataset) }), c), []), a.rebuildMap();
  }
  if (Array.isArray(n))
    for (let c of n)
      o.value.set(q(c), q(c));
  else
    n != null && o.value.set(q(n), q(n));
  pt(a, (h = t == null ? void 0 : t.id) != null ? h : "extraselect_" + (++ht).toString());
  const i = [];
  return o.value.forEach((c, r) => {
    i.push([r, c]);
  }), { options: a, selectedOptions: o, onReset: () => {
    o.value.clear();
    for (let [c, r] of i)
      o.value.set(c, r);
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
}, Fe = (t, l, e, n, o, a, i = "limited", s = {}) => {
  const h = k(0), c = k(!1), r = V(() => c.value || h.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const u = [];
      Q((y) => {
        if (n.value.length >= o) {
          let p = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              p = !u.includes(n.value);
              break;
            case "complete":
              p = u.reduce((v, _) => v && !n.value.startsWith(_), !0);
              break;
          }
          if (p) {
            c.value = !0;
            const v = setTimeout(() => {
              u.push(n.value), h.value += 1, s.body = { ...s.body, ...a.value }, ge(l, n.value, s).then((_) => {
                t.actions.addRange(_), t.actions.sort(), h.value -= 1, c.value = !1;
              });
            }, 500);
            y(() => {
              clearTimeout(v);
            });
          }
        }
      });
    } else
      ge(l, null, s).then((u) => {
        t.actions.addRange(u), t.actions.sort();
      });
  return { searchingFlag: r };
}, Te = (t, l, e, n = [], o = []) => {
  const a = k(""), i = k([]), s = k({}), h = { ...n.reduce((r, u) => (r[u] = !1, r), {}), ...o.reduce((r, u) => (r[u] = !0, r), {}) };
  for (let r in h) {
    let u = h[r], y = document.getElementById(r);
    s.value[r] = y == null ? void 0 : y.value, y && y.addEventListener("change", (p) => {
      s.value[r] = p.target.value, u && Z(() => {
        if (l != null)
          for (let v of Array.from(l.value.keys()))
            i.value.find((_) => _.key == v) || e(v, !1);
        else
          i.value.find((v) => v.key == a.value) || e(a.value, !1);
      });
    });
  }
  const c = function(r, u) {
    let y = r.value;
    return Object.keys(s.value).length > 0 && (y = y.filter((p) => {
      var v, _;
      for (let F in s.value)
        if ((h[F] ? !0 : ((v = s.value[F]) != null ? v : "").length > 0) && ((_ = p.data) == null ? void 0 : _.hasOwnProperty(F)) && p.data[F] != s.value[F])
          return !1;
      return !0;
    })), u.length > 0 && (y = y.filter((p) => p.value.toLowerCase().includes(u.toLowerCase()))), y;
  };
  return Q(() => {
    i.value = c(t, a.value);
  }), { filterText: a, filteredOptions: i, filterValues: s };
}, Pe = (t, l, e, n, o, a, i) => {
  const s = getComputedStyle(document.querySelector("body")).font, h = function(u) {
    const p = document.createElement("canvas").getContext("2d");
    return p.font = s, p.measureText(u).width;
  }, c = V(() => {
    var y, p;
    const u = (y = X(n.value).width) != null ? y : 100;
    if (i === "inherit")
      return u;
    if (i == null || i === "dynamic") {
      const v = (p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? p : 16;
      return Math.max(u, Math.max(...t.value.map((_) => h(_.value))) + 20 + v * 3);
    }
    return i;
  }), r = k({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ge(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var u = X(n.value), y = X(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var y = X(a.value);
    let p = -y.left + u.left;
    const v = window.document.documentElement.clientWidth;
    p + c.value > v && (p = v - c.value), r.value = {
      position: "absolute",
      "min-width": "max-content",
      width: c.value.toString() + "px",
      top: (-y.top + u.top + u.height).toString() + "px",
      left: p.toString() + "px"
    };
  }), { dropdownStyle: r, getTextWidth: h };
}, yt = {
  key: 0,
  class: "extra-select selection"
}, mt = ["onClick"], gt = ["innerHTML"], wt = ["value"], bt = {
  key: 0,
  class: "input-searching"
}, kt = {
  key: 0,
  class: "allselect-clear"
}, _t = { class: "row-input" }, Ot = ["checked"], St = /* @__PURE__ */ C("b", null, "Select all", -1), xt = { class: "row-input" }, Ct = ["checked"], Et = /* @__PURE__ */ C("b", null, "Select Filtered", -1), Nt = {
  key: 1,
  class: "no-matches"
}, Lt = { key: 2 }, It = ["onClick"], At = { class: "row-input" }, Ft = ["checked"], Tt = ["value"], Pt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Mt = /* @__PURE__ */ Object.assign(Pt, {
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
    const e = t, n = V(() => {
      var d, f;
      return (f = (d = e.originalNode) == null ? void 0 : d.multiple) != null ? f : e.multiple;
    }), { options: o, selectedOptions: a, onReset: i } = Ae(e.originalNode, le(e, "options"), le(e, "modelValue"), e.initialValue), s = (ue = e.originalNode) == null ? void 0 : ue.classList, h = Object.values((ce = (ie = e.originalNode) == null ? void 0 : ie.style) != null ? ce : {});
    Ie(e.originalNode);
    const c = (d, f = null) => {
      if (n.value) {
        let w = f;
        switch (w == null && (w = !a.value.has(d)), w) {
          case !0:
            a.value.set(d, d);
            break;
          case !1:
            a.value.delete(d);
            break;
        }
      } else
        a.value.clear(), f !== !1 && a.value.set(d, d), T.value = !1;
      N(Array.from(a.value.keys()));
    }, { filterText: r, filteredOptions: u, filterValues: y } = Te(o, a, c, e.filterFields, e.hardFilterFields), { searchingFlag: p } = Fe(
      o,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), v = k(null), _ = k(null), F = k(null), T = k(!1), g = k(null), E = function(d) {
      const f = U(d.target);
      f.push(d.target), !f.includes(v.value) && !f.includes(_.value) && (T.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let d = !1;
        g.value = U(v.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (d = !0), d && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (g.value == null && (g.value = document.querySelector("body")), e.originalNode) {
        for (let f of s)
          f != "extraselect" && v.value.classList.add(f);
        for (let f of h)
          v.value.style[f] = e.originalNode.style[f];
        h.includes("background-color") || (v.value.style.backgroundColor = "white");
        let d = U(v.value, "form").pop();
        d instanceof HTMLElement && d.matches("form") && d.addEventListener("reset", () => setTimeout(i));
      }
      window.document.addEventListener("mousedown", E), window.document.addEventListener("focusin", E);
    }), we(() => {
      window.document.removeEventListener("mousedown", E), window.document.removeEventListener("focusin", E);
    });
    const { dropdownStyle: L, getTextWidth: I } = Pe(o, a, T, v, _, g, e.maxWidth), N = (d) => {
      Z(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", d);
    }, z = (d) => {
      S(d, !1), r.value = "";
    }, S = (d, f = null) => {
      f == null && (f = !A.value), f ? (a.value.clear(), o.value.forEach((w) => a.value.set(w.key, w.key))) : a.value.clear(), N(Array.from(a.value.keys()));
    }, x = () => {
      B.value ? u.value.forEach((d) => {
        a.value.has(d.key) && a.value.delete(d.key);
      }) : u.value.forEach((d) => {
        a.value.has(d.key) || a.value.set(d.key, d.key);
      }), N(Array.from(a.value.keys()));
    };
    G(T, (d, f) => {
      d != f && (d ? e.search && Z(() => {
        F.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const A = V(() => a.value.size == o.value.length), B = V(() => u.value.reduce((d, f) => d && a.value.has(f.key), !0)), Be = V(() => a.value.size == 0), $e = V(() => {
      var d, f, w, R, W;
      if (o.value.length < 0)
        return "";
      if (n.value) {
        if (Be.value)
          return "No selection";
        if (!e.searchableUrl && A.value)
          return "All selected";
        const $ = v.value ? getComputedStyle(v.value) : null, He = ((d = v.value) == null ? void 0 : d.clientWidth) - parseInt($ == null ? void 0 : $.paddingLeft) - parseInt($ == null ? void 0 : $.paddingRight);
        let K = a.value.size + " selected - ", de = !0;
        for (let Re of a.value)
          if (de ? de = !1 : K += ", ", K += (w = (f = o.map.get(Re[0])) == null ? void 0 : f.value) != null ? w : p.value ? "Loading..." : "Value not found", He < I(K))
            return a.value.size + " selected";
        return K;
      } else
        for (let $ of a.value)
          return (W = (R = o.map.get($[0])) == null ? void 0 : R.value) != null ? W : p.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: je, containerProps: ze, wrapperProps: qe } = Le(
      u,
      {
        itemHeight: 32
      }
    );
    return (d, f) => (b(), O(j, null, [
      e.showSelected ? (b(), O("div", yt, [
        (b(!0), O(j, null, Y(m(a), (w) => {
          var R;
          return b(), O("div", {
            key: w,
            onClick: (W) => c(w[0]),
            class: "selection-badge"
          }, [
            fe(D((R = m(o).find((W) => W.key == w[0])) == null ? void 0 : R.value) + " ", 1),
            C("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, gt)
          ], 8, mt);
        }), 128))
      ])) : P("", !0),
      C("input", ee({
        onFocus: f[0] || (f[0] = (w) => T.value = !0),
        onClick: f[1] || (f[1] = (w) => T.value = !0),
        ref_key: "inputNode",
        ref: v,
        value: m($e),
        class: "extra-select extra-select-input",
        readonly: ""
      }, d.$attrs), null, 16, wt),
      g.value ? (b(), ne(ae, {
        key: 1,
        to: g.value
      }, [
        te(C("div", {
          class: be(["extra-select dropdown", { searching: m(p) > 0 }]),
          ref_key: "dropdownNode",
          ref: _,
          style: ke(m(L))
        }, [
          e.search ? (b(), O("div", bt, [
            te(C("input", {
              ref_key: "searchNode",
              ref: F,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (w) => _e(r) ? r.value = w : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Je, m(r)]
            ])
          ])) : P("", !0),
          m(r).length >= e.minChars ? (b(), O(j, { key: 1 }, [
            m(n) ? (b(), O("div", kt, [
              m(r).length == 0 ? (b(), O("div", {
                key: 0,
                onClick: S,
                class: "all-select"
              }, [
                C("div", _t, [
                  C("input", {
                    checked: m(A),
                    type: "checkbox"
                  }, null, 8, Ot),
                  St
                ])
              ])) : P("", !0),
              m(u).length > 0 && m(r).length > 0 ? (b(), O("div", {
                key: 1,
                onClick: x,
                class: "all-select"
              }, [
                C("div", xt, [
                  C("input", {
                    checked: m(B),
                    type: "checkbox"
                  }, null, 8, Ct),
                  Et
                ])
              ])) : P("", !0),
              C("div", {
                class: "clear",
                onClick: z
              }, "Clear")
            ])) : P("", !0),
            m(u).length == 0 ? (b(), O("div", Nt, "No matches found")) : P("", !0)
          ], 64)) : (b(), O("div", Lt, "Insert at least " + D(e.minChars) + " characters", 1)),
          C("div", ee(m(ze), { class: "scroller" }), [
            C("div", Oe(Se(m(qe))), [
              (b(!0), O(j, null, Y(m(je), (w) => (b(), O("button", {
                key: w.index,
                class: "dropdown-row",
                onClick: xe((R) => c(w.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", At, [
                  m(n) ? (b(), O("input", {
                    key: 0,
                    checked: m(a).has(w.data.key),
                    type: "checkbox"
                  }, null, 8, Ft)) : P("", !0),
                  fe(" " + D(w.data.value), 1)
                ])
              ], 8, It))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ce, T.value]
        ])
      ], 8, ["to"])) : P("", !0),
      e.originalNode ? (b(), ne(ae, {
        key: 2,
        to: e.originalNode
      }, [
        (b(!0), O(j, null, Y(m(a), (w) => (b(), O("option", {
          key: w[0],
          selected: "selected",
          value: w[0]
        }, null, 8, Tt))), 128))
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}), Vt = {
  key: 0,
  class: "no-matches"
}, Bt = { key: 1 }, $t = ["onClick"], jt = { class: "row-input" }, zt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, qt = /* @__PURE__ */ Object.assign(zt, {
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
    var I, N, z;
    const e = t, { options: n } = Ae(null, le(e, "options"), k([])), o = (I = e.originalNode) == null ? void 0 : I.classList, a = Object.values((z = (N = e.originalNode) == null ? void 0 : N.style) != null ? z : {});
    Ie(e.originalNode);
    const i = (S, x = null) => {
      x === !1 ? s.value = "" : s.value = n.map.get(S).value, p.value = !1;
    }, { filterText: s, filteredOptions: h, filterValues: c } = Te(n, null, i, e.filterFields, e.hardFilterFields), { searchingFlag: r } = Fe(
      n,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), u = k(null), y = k(null), p = k(!1), v = k(null), _ = function(S) {
      const x = U(S.target);
      x.push(S.target), !x.includes(u.value) && !x.includes(y.value) && (p.value = !1);
    };
    re(() => {
      if (e.dropdownContainer) {
        let S = !1;
        v.value = U(u.value).find((x) => !!(x instanceof Element && (x.matches(e.dropdownContainer) && (S = !0), S && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(x).position))));
      }
      if (v.value == null && (v.value = document.querySelector("body")), e.originalNode) {
        for (let B of o)
          B != "extrasuggest" && u.value.classList.add(B);
        for (let B of a)
          u.value.style[B] = e.originalNode.style[B];
        a.includes("background-color") || (u.value.style.backgroundColor = "white"), s.value = e.originalNode.value, Q(() => {
          e.modelValue != null && (s.value = e.modelValue);
        });
        const S = s.value, x = () => {
          s.value = S;
        };
        let A = U(u.value, "form").pop();
        A instanceof HTMLElement && A.matches("form") && A.addEventListener("reset", () => setTimeout(x));
      }
      window.document.addEventListener("mousedown", _), window.document.addEventListener("focusin", _);
    }), we(() => {
      window.document.removeEventListener("mousedown", _), window.document.removeEventListener("focusin", _);
    });
    const { dropdownStyle: F } = Pe(n, k([]), p, u, y, v, e.maxWidth), T = () => {
      var S;
      e.originalNode && (e.originalNode.value = s.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 }))), l("update:modelValue", s.value);
    };
    G(() => p.value, (S) => {
      S === !1 && T();
    });
    const { list: g, containerProps: E, wrapperProps: L } = Le(
      h,
      {
        itemHeight: 32
      }
    );
    return (S, x) => (b(), O(j, null, [
      te(C("input", ee({
        onFocus: x[0] || (x[0] = (A) => p.value = !0),
        onClick: x[1] || (x[1] = (A) => p.value = !0),
        ref_key: "inputNode",
        ref: u,
        "onUpdate:modelValue": x[2] || (x[2] = (A) => _e(s) ? s.value = A : null),
        class: "extra-select extra-select-input"
      }, S.$attrs), null, 16), [
        [Ke, m(s)]
      ]),
      v.value ? (b(), ne(ae, {
        key: 0,
        to: v.value
      }, [
        te(C("div", {
          class: be(["extra-select dropdown", { searching: m(r) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: ke(m(F))
        }, [
          m(s).length >= e.minChars ? (b(), O(j, { key: 0 }, [
            m(h).length == 0 ? (b(), O("div", Vt, "No matches found")) : P("", !0)
          ], 64)) : (b(), O("div", Bt, "Insert at least " + D(e.minChars) + " characters", 1)),
          C("div", ee(m(E), { class: "scroller" }), [
            C("div", Oe(Se(m(L))), [
              (b(!0), O(j, null, Y(m(g), (A) => (b(), O("button", {
                key: A.index,
                class: "dropdown-row",
                onClick: xe((B) => i(A.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", jt, D(A.data.value), 1)
              ], 8, $t))), 128))
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
    H.lock(t, "extra-select", () => {
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
      const n = Ee(Mt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), H.remove(t, "extra-select");
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
    H.lock(t, "extra-suggest", () => {
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
      const n = Ee(qt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), H.remove(t, "extra-suggest");
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
