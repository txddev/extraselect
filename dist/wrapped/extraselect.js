import { unref as g, getCurrentScope as Re, onScopeDispose as Ue, getCurrentInstance as We, onMounted as se, nextTick as Y, ref as k, shallowRef as De, watch as Q, computed as V, watchEffect as D, watchPostEffect as Qe, toRef as te, onUnmounted as me, openBlock as b, createElementBlock as O, Fragment as j, renderList as X, createTextVNode as de, toDisplayString as W, createElementVNode as C, createCommentVNode as P, mergeProps as Z, createBlock as le, Teleport as ne, withDirectives as ee, normalizeClass as we, normalizeStyle as be, isRef as ke, vModelText as Ge, normalizeProps as _e, guardReactiveProps as Oe, withModifiers as Se, vShow as xe, vModelDynamic as Je, createApp as Ce } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class q {
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
    return q.has(l, e) ? !1 : (q.put(l, e, !0), n());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = M);
function K(t) {
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
function R(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], n = t.parentNode; n != null && n instanceof HTMLElement && !(l instanceof HTMLElement && n === l) && !(typeof l == "string" && n.matches(l)); ) {
    var o = n;
    e.push(o), n = o.parentNode;
  }
  return n != null && e.push(n), e;
}
function Ke(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var fe;
const G = typeof window < "u";
G && ((fe = window == null ? void 0 : window.navigator) == null ? void 0 : fe.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xe(t) {
  return typeof t == "function" ? t() : g(t);
}
function Ye(t) {
  return t;
}
function Ze(t) {
  return Re() ? (Ue(t), !0) : !1;
}
function et(t, l = !0) {
  We() ? se(t) : l ? t() : Y(t);
}
function Ee(t) {
  var l;
  const e = Xe(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const tt = G ? window : void 0;
G && window.document;
G && window.navigator;
G && window.location;
function lt(t, l = !1) {
  const e = k(), n = () => e.value = Boolean(t());
  return n(), et(n, l), e;
}
const ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, oe = "__vueuse_ssr_handlers__";
ae[oe] = ae[oe] || {};
ae[oe];
var ve = Object.getOwnPropertySymbols, nt = Object.prototype.hasOwnProperty, at = Object.prototype.propertyIsEnumerable, ot = (t, l) => {
  var e = {};
  for (var n in t)
    nt.call(t, n) && l.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && ve)
    for (var n of ve(t))
      l.indexOf(n) < 0 && at.call(t, n) && (e[n] = t[n]);
  return e;
};
function st(t, l, e = {}) {
  const n = e, { window: o = tt } = n, a = ot(n, ["window"]);
  let i;
  const s = lt(() => o && "ResizeObserver" in o), h = () => {
    i && (i.disconnect(), i = void 0);
  }, c = Q(() => Ee(t), (u) => {
    h(), s.value && o && u && (i = new ResizeObserver(l), i.observe(u, a));
  }, { immediate: !0, flush: "post" }), r = () => {
    h(), c();
  };
  return Ze(r), {
    isSupported: s,
    stop: r
  };
}
function rt(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: n = "content-box" } = e, o = k(l.width), a = k(l.height);
  return st(t, ([i]) => {
    const s = n === "border-box" ? i.borderBoxSize : n === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    s ? (o.value = s.reduce((h, { inlineSize: c }) => h + c, 0), a.value = s.reduce((h, { blockSize: c }) => h + c, 0)) : (o.value = i.contentRect.width, a.value = i.contentRect.height);
  }, e), Q(() => Ee(t), (i) => {
    o.value = i ? l.width : 0, a.value = i ? l.height : 0;
  }), {
    width: o,
    height: a
  };
}
var pe;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(pe || (pe = {}));
var ut = Object.defineProperty, he = Object.getOwnPropertySymbols, it = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, ye = (t, l, e) => l in t ? ut(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, dt = (t, l) => {
  for (var e in l || (l = {}))
    it.call(l, e) && ye(t, e, l[e]);
  if (he)
    for (var e of he(l))
      ct.call(l, e) && ye(t, e, l[e]);
  return t;
};
const ft = {
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
dt({
  linear: Ye
}, ft);
function Ne(t, l) {
  const e = k(), n = rt(e), o = k([]), a = De(t), i = k({ start: 0, end: 10 }), { itemHeight: s, overscan: h = 5 } = l, c = (m) => {
    if (typeof s == "number")
      return Math.ceil(m / s);
    const { start: E = 0 } = i.value;
    let L = 0, A = 0;
    for (let N = E; N < a.value.length; N++)
      if (L += s(N), L >= m) {
        A = N;
        break;
      }
    return A - E;
  }, r = (m) => {
    if (typeof s == "number")
      return Math.floor(m / s) + 1;
    let E = 0, L = 0;
    for (let A = 0; A < a.value.length; A++)
      if (E += s(A), E >= m) {
        L = A;
        break;
      }
    return L + 1;
  }, u = () => {
    const m = e.value;
    if (m) {
      const E = r(m.scrollTop), L = c(m.clientHeight), A = E - h, N = E + L + h;
      i.value = {
        start: A < 0 ? 0 : A,
        end: N > a.value.length ? a.value.length : N
      }, o.value = a.value.slice(i.value.start, i.value.end).map((z, S) => ({
        data: z,
        index: S + i.value.start
      }));
    }
  };
  Q([n.width, n.height, t], () => {
    u();
  });
  const y = V(() => typeof s == "number" ? a.value.length * s : a.value.reduce((m, E, L) => m + s(L), 0)), v = (m) => typeof s == "number" ? m * s : a.value.slice(0, m).reduce((L, A, N) => L + s(N), 0), p = (m) => {
    e.value && (e.value.scrollTop = v(m), u());
  }, _ = V(() => v(i.value.start)), T = V(() => ({
    style: {
      width: "100%",
      height: `${y.value - _.value}px`,
      marginTop: `${_.value}px`
    }
  }));
  return {
    list: o,
    scrollTo: p,
    containerProps: {
      ref: e,
      onScroll: () => {
        u();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: T
  };
}
const vt = (t, l) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, o, a = null) => {
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
let pt = 1;
const Le = (t) => {
  t && (t.style.display = "none", Ke(t));
}, Ae = (t, l, e, n) => {
  var h;
  const o = k(/* @__PURE__ */ new Map());
  D(() => {
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
  }, D(() => {
    l.value && (a.value = l.value, a.rebuildMap());
  }), t) {
    o.value.clear();
    for (let c of Array.apply(null, t.selectedOptions).map((r) => r.value).filter((r) => r))
      o.value.set(c, c);
    a.value = Array.apply(null, t.options).reduce((c, r) => (c.push({ value: r.text, key: r.value, data: Object.assign({}, r.dataset) }), c), []), a.rebuildMap();
  }
  if (Array.isArray(n))
    for (let c of n)
      o.value.set(c, c);
  else
    n != null && o.value.set(n, n);
  vt(a, (h = t == null ? void 0 : t.id) != null ? h : "extraselect_" + (++pt).toString());
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
}, Ie = (t, l, e, n, o, a, i = "limited", s = {}) => {
  const h = k(0), c = k(!1), r = V(() => c.value || h.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const u = [];
      D((y) => {
        if (n.value.length >= o) {
          let v = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              v = !u.includes(n.value);
              break;
            case "complete":
              v = u.reduce((p, _) => p && !n.value.startsWith(_), !0);
              break;
          }
          if (v) {
            c.value = !0;
            const p = setTimeout(() => {
              u.push(n.value), h.value += 1, s.body = { ...s.body, ...a.value }, ge(l, n.value, s).then((_) => {
                t.actions.addRange(_), t.actions.sort(), h.value -= 1, c.value = !1;
              });
            }, 500);
            y(() => {
              clearTimeout(p);
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
    s.value[r] = y == null ? void 0 : y.value, y && y.addEventListener("change", (v) => {
      s.value[r] = v.target.value, u && Y(() => {
        console.log(Array.from(l.value.keys()));
        for (let p of Array.from(l.value.keys()))
          i.value.find((_) => _.key == p) || (console.log("toggling"), e(p, !1));
      });
    });
  }
  const c = function(r, u) {
    let y = r.value;
    return Object.keys(s.value).length > 0 && (y = y.filter((v) => {
      var p, _;
      for (let T in s.value) {
        const F = h[T] ? !0 : ((p = s.value[T]) != null ? p : "").length > 0;
        if (console.log(h, T, s.value[T], F), F && ((_ = v.data) == null ? void 0 : _.hasOwnProperty(T)) && v.data[T] != s.value[T])
          return !1;
      }
      return !0;
    })), u.length > 0 && (y = y.filter((v) => v.value.toLowerCase().includes(u.toLowerCase()))), y;
  };
  return D(() => {
    i.value = c(t, a.value);
  }), { filterText: a, filteredOptions: i, filterValues: s };
}, Fe = (t, l, e, n, o, a, i) => {
  const s = getComputedStyle(document.querySelector("body")).font, h = function(u) {
    const v = document.createElement("canvas").getContext("2d");
    return v.font = s, v.measureText(u).width;
  }, c = V(() => {
    var y, v;
    const u = (y = K(n.value).width) != null ? y : 100;
    if (i === "inherit")
      return u;
    if (i == null || i === "dynamic") {
      const p = (v = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? v : 16;
      return Math.max(u, Math.max(...t.value.map((_) => h(_.value))) + 20 + p * 3);
    }
    return i;
  }), r = k({
    position: "absolute",
    "min-width": "max-content"
  });
  return Qe(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var u = K(n.value), y = K(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var y = K(a.value);
    let v = -y.left + u.left;
    const p = window.document.documentElement.clientWidth;
    v + c.value > p && (v = p - c.value), r.value = {
      position: "absolute",
      "min-width": "max-content",
      width: c.value.toString() + "px",
      top: (-y.top + u.top + u.height).toString() + "px",
      left: v.toString() + "px"
    };
  }), { dropdownStyle: r, getTextWidth: h };
}, ht = {
  key: 0,
  class: "extra-select selection"
}, yt = ["onClick"], gt = ["innerHTML"], mt = ["value"], wt = {
  key: 0,
  class: "input-searching"
}, bt = {
  key: 0,
  class: "allselect-clear"
}, kt = { class: "row-input" }, _t = ["checked"], Ot = /* @__PURE__ */ C("b", null, "Select all", -1), St = { class: "row-input" }, xt = ["checked"], Ct = /* @__PURE__ */ C("b", null, "Select Filtered", -1), Et = {
  key: 1,
  class: "no-matches"
}, Nt = { key: 2 }, Lt = ["onClick"], At = { class: "row-input" }, It = ["checked"], Tt = ["value"], Ft = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Pt = /* @__PURE__ */ Object.assign(Ft, {
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
    var re, ue, ie;
    const e = t, n = V(() => {
      var d, f;
      return (f = (d = e.originalNode) == null ? void 0 : d.multiple) != null ? f : e.multiple;
    }), { options: o, selectedOptions: a, onReset: i } = Ae(e.originalNode, te(e, "options"), te(e, "modelValue"), e.initialValue), s = (re = e.originalNode) == null ? void 0 : re.classList, h = Object.values((ie = (ue = e.originalNode) == null ? void 0 : ue.style) != null ? ie : {});
    Le(e.originalNode);
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
        a.value.clear(), f !== !1 && a.value.set(d, d), F.value = !1;
      N(Array.from(a.value.keys()));
    }, { filterText: r, filteredOptions: u, filterValues: y } = Te(o, a, c, e.filterFields, e.hardFilterFields), { searchingFlag: v } = Ie(
      o,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), p = k(null), _ = k(null), T = k(null), F = k(!1), m = k(null), E = function(d) {
      const f = R(d.target);
      f.push(d.target), !f.includes(p.value) && !f.includes(_.value) && (F.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let d = !1;
        m.value = R(p.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (d = !0), d && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let f of s)
          f != "extraselect" && p.value.classList.add(f);
        for (let f of h)
          p.value.style[f] = e.originalNode.style[f];
        h.includes("background-color") || (p.value.style.backgroundColor = "white");
        let d = R(p.value, "form").pop();
        d instanceof HTMLElement && d.matches("form") && d.addEventListener("reset", () => setTimeout(i));
      }
      window.document.addEventListener("mousedown", E), window.document.addEventListener("focusin", E);
    }), me(() => {
      window.document.removeEventListener("mousedown", E), window.document.removeEventListener("focusin", E);
    });
    const { dropdownStyle: L, getTextWidth: A } = Fe(o, a, F, p, _, m, e.maxWidth), N = (d) => {
      Y(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", d);
    }, z = (d) => {
      S(d, !1), r.value = "";
    }, S = (d, f = null) => {
      f == null && (f = !I.value), f ? (a.value.clear(), o.value.forEach((w) => a.value.set(w.key, w.key))) : a.value.clear(), N(Array.from(a.value.keys()));
    }, x = () => {
      B.value ? u.value.forEach((d) => {
        a.value.has(d.key) && a.value.delete(d.key);
      }) : u.value.forEach((d) => {
        a.value.has(d.key) || a.value.set(d.key, d.key);
      }), N(Array.from(a.value.keys()));
    };
    Q(F, (d, f) => {
      d != f && (d ? e.search && Y(() => {
        T.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const I = V(() => a.value.size == o.value.length), B = V(() => u.value.reduce((d, f) => d && a.value.has(f.key), !0)), Ve = V(() => a.value.size == 0), Be = V(() => {
      var d, f, w, H, U;
      if (o.value.length < 0)
        return "";
      if (n.value) {
        if (Ve.value)
          return "No selection";
        if (!e.searchableUrl && I.value)
          return "All selected";
        const $ = p.value ? getComputedStyle(p.value) : null, qe = ((d = p.value) == null ? void 0 : d.clientWidth) - parseInt($ == null ? void 0 : $.paddingLeft) - parseInt($ == null ? void 0 : $.paddingRight);
        let J = a.value.size + " selected - ", ce = !0;
        for (let He of a.value)
          if (ce ? ce = !1 : J += ", ", J += (w = (f = o.map.get(He[0])) == null ? void 0 : f.value) != null ? w : v.value ? "Loading..." : "Value not found", qe < A(J))
            return a.value.size + " selected";
        return J;
      } else
        for (let $ of a.value)
          return (U = (H = o.map.get($[0])) == null ? void 0 : H.value) != null ? U : v.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: $e, containerProps: je, wrapperProps: ze } = Ne(
      u,
      {
        itemHeight: 32
      }
    );
    return (d, f) => (b(), O(j, null, [
      e.showSelected ? (b(), O("div", ht, [
        (b(!0), O(j, null, X(g(a), (w) => {
          var H;
          return b(), O("div", {
            key: w,
            onClick: (U) => c(w[0]),
            class: "selection-badge"
          }, [
            de(W((H = g(o).find((U) => U.key == w[0])) == null ? void 0 : H.value) + " ", 1),
            C("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, gt)
          ], 8, yt);
        }), 128))
      ])) : P("", !0),
      C("input", Z({
        onFocus: f[0] || (f[0] = (w) => F.value = !0),
        onClick: f[1] || (f[1] = (w) => F.value = !0),
        ref_key: "inputNode",
        ref: p,
        value: g(Be),
        class: "extra-select extra-select-input",
        readonly: ""
      }, d.$attrs), null, 16, mt),
      m.value ? (b(), le(ne, {
        key: 1,
        to: m.value
      }, [
        ee(C("div", {
          class: we(["extra-select dropdown", { searching: g(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: _,
          style: be(g(L))
        }, [
          e.search ? (b(), O("div", wt, [
            ee(C("input", {
              ref_key: "searchNode",
              ref: T,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (w) => ke(r) ? r.value = w : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ge, g(r)]
            ])
          ])) : P("", !0),
          g(r).length >= e.minChars ? (b(), O(j, { key: 1 }, [
            g(n) ? (b(), O("div", bt, [
              g(r).length == 0 ? (b(), O("div", {
                key: 0,
                onClick: S,
                class: "all-select"
              }, [
                C("div", kt, [
                  C("input", {
                    checked: g(I),
                    type: "checkbox"
                  }, null, 8, _t),
                  Ot
                ])
              ])) : P("", !0),
              g(u).length > 0 && g(r).length > 0 ? (b(), O("div", {
                key: 1,
                onClick: x,
                class: "all-select"
              }, [
                C("div", St, [
                  C("input", {
                    checked: g(B),
                    type: "checkbox"
                  }, null, 8, xt),
                  Ct
                ])
              ])) : P("", !0),
              C("div", {
                class: "clear",
                onClick: z
              }, "Clear")
            ])) : P("", !0),
            g(u).length == 0 ? (b(), O("div", Et, "No matches found")) : P("", !0)
          ], 64)) : (b(), O("div", Nt, "Insert at least " + W(e.minChars) + " characters", 1)),
          C("div", Z(g(je), { class: "scroller" }), [
            C("div", _e(Oe(g(ze))), [
              (b(!0), O(j, null, X(g($e), (w) => (b(), O("button", {
                key: w.index,
                class: "dropdown-row",
                onClick: Se((H) => c(w.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", At, [
                  g(n) ? (b(), O("input", {
                    key: 0,
                    checked: g(a).has(w.data.key),
                    type: "checkbox"
                  }, null, 8, It)) : P("", !0),
                  de(" " + W(w.data.value), 1)
                ])
              ], 8, Lt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, F.value]
        ])
      ], 8, ["to"])) : P("", !0),
      e.originalNode ? (b(), le(ne, {
        key: 2,
        to: e.originalNode
      }, [
        (b(!0), O(j, null, X(g(a), (w) => (b(), O("option", {
          key: w[0],
          selected: "selected",
          value: w[0]
        }, null, 8, Tt))), 128))
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}), Mt = {
  key: 0,
  class: "no-matches"
}, Vt = { key: 1 }, Bt = ["onClick"], $t = { class: "row-input" }, jt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, zt = /* @__PURE__ */ Object.assign(jt, {
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
    var A, N, z;
    const e = t, { options: n } = Ae(null, te(e, "options"), k([])), o = (A = e.originalNode) == null ? void 0 : A.classList, a = Object.values((z = (N = e.originalNode) == null ? void 0 : N.style) != null ? z : {});
    Le(e.originalNode);
    const i = (S, x = null) => {
      x === !1 ? s.value = "" : s.value = n.map.get(S).value, v.value = !1;
    }, { filterText: s, filteredOptions: h, filterValues: c } = Te(n, selectedOptions, i, e.filterFields, e.hardFilterFields), { searchingFlag: r } = Ie(
      n,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), u = k(null), y = k(null), v = k(!1), p = k(null), _ = function(S) {
      const x = R(S.target);
      x.push(S.target), !x.includes(u.value) && !x.includes(y.value) && (v.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let S = !1;
        p.value = R(u.value).find((x) => !!(x instanceof Element && (x.matches(e.dropdownContainer) && (S = !0), S && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(x).position))));
      }
      if (p.value == null && (p.value = document.querySelector("body")), e.originalNode) {
        for (let B of o)
          B != "extrasuggest" && u.value.classList.add(B);
        for (let B of a)
          u.value.style[B] = e.originalNode.style[B];
        a.includes("background-color") || (u.value.style.backgroundColor = "white"), s.value = e.originalNode.value, D(() => {
          e.modelValue != null && (s.value = e.modelValue);
        });
        const S = s.value, x = () => {
          s.value = S;
        };
        let I = R(u.value, "form").pop();
        I instanceof HTMLElement && I.matches("form") && I.addEventListener("reset", () => setTimeout(x));
      }
      window.document.addEventListener("mousedown", _), window.document.addEventListener("focusin", _);
    }), me(() => {
      window.document.removeEventListener("mousedown", _), window.document.removeEventListener("focusin", _);
    });
    const { dropdownStyle: T } = Fe(n, k([]), v, u, y, p, e.maxWidth), F = () => {
      var S;
      e.originalNode && (e.originalNode.value = s.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 }))), l("update:modelValue", s.value);
    };
    Q(() => v.value, (S) => {
      S === !1 && F();
    });
    const { list: m, containerProps: E, wrapperProps: L } = Ne(
      h,
      {
        itemHeight: 32
      }
    );
    return (S, x) => (b(), O(j, null, [
      ee(C("input", Z({
        onFocus: x[0] || (x[0] = (I) => v.value = !0),
        onClick: x[1] || (x[1] = (I) => v.value = !0),
        ref_key: "inputNode",
        ref: u,
        "onUpdate:modelValue": x[2] || (x[2] = (I) => ke(s) ? s.value = I : null),
        class: "extra-select extra-select-input"
      }, S.$attrs), null, 16), [
        [Je, g(s)]
      ]),
      p.value ? (b(), le(ne, {
        key: 0,
        to: p.value
      }, [
        ee(C("div", {
          class: we(["extra-select dropdown", { searching: g(r) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: be(g(T))
        }, [
          g(s).length >= e.minChars ? (b(), O(j, { key: 0 }, [
            g(h).length == 0 ? (b(), O("div", Mt, "No matches found")) : P("", !0)
          ], 64)) : (b(), O("div", Vt, "Insert at least " + W(e.minChars) + " characters", 1)),
          C("div", Z(g(E), { class: "scroller" }), [
            C("div", _e(Oe(g(L))), [
              (b(!0), O(j, null, X(g(m), (I) => (b(), O("button", {
                key: I.index,
                class: "dropdown-row",
                onClick: Se((B) => i(I.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", $t, W(I.data.value), 1)
              ], 8, Bt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, v.value]
        ])
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}), Pe = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Pe.bindNew(t);
    });
  },
  bindNew(t) {
    q.lock(t, "extra-select", () => {
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
      const n = Ce(Pt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), q.remove(t, "extra-select");
      });
    });
  }
}, Me = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Me.bindNew(t);
    });
  },
  bindNew(t) {
    q.lock(t, "extra-suggest", () => {
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
      const n = Ce(zt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), q.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Pe.init(), Me.init();
});
export {
  Pe as ExtraSelect,
  Me as ExtraSuggest
};
