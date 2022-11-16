import { unref as h, getCurrentScope as He, onScopeDispose as Ue, getCurrentInstance as We, onMounted as se, nextTick as ee, ref as y, shallowRef as De, watch as Q, computed as V, watchEffect as D, watchPostEffect as Qe, toRef as te, onUnmounted as ye, openBlock as g, createElementBlock as b, Fragment as j, renderList as X, createTextVNode as de, toDisplayString as W, createElementVNode as S, createCommentVNode as P, mergeProps as Y, createBlock as ne, Teleport as le, withDirectives as Z, normalizeClass as we, normalizeStyle as be, isRef as _e, vModelText as Ge, normalizeProps as ke, guardReactiveProps as Oe, withModifiers as Se, vShow as xe, vModelDynamic as Je, createApp as Ce } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class q {
  static put(n, e, l) {
    M.has(n) || M.set(n, /* @__PURE__ */ new Map()), M.get(n).set(e, l);
  }
  static get(n, e) {
    return M.get(n).get(e);
  }
  static has(n, e) {
    return M.has(n) && M.get(n).has(e);
  }
  static remove(n, e) {
    var l = M.get(n).delete(e);
    return M.get(n).size !== 0 && M.delete(n), l;
  }
  static lock(n, e, l) {
    return q.has(n, e) ? !1 : (q.put(n, e, !0), l());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = M);
function K(t) {
  if (t == null)
    return { top: 0, left: 0, width: null, height: null };
  let n = t.getBoundingClientRect();
  return {
    top: n.top + window.scrollY,
    left: n.left + window.scrollX,
    width: n.width,
    height: n.height
  };
}
function H(t, n) {
  n === void 0 && (n = window.document);
  for (var e = [], l = t.parentNode; l != null && l instanceof HTMLElement && !(n instanceof HTMLElement && l === n) && !(typeof n == "string" && l.matches(n)); ) {
    var a = l;
    e.push(a), l = a.parentNode;
  }
  return l != null && e.push(l), e;
}
function Ke(t) {
  var n = Array.prototype.slice.call(t.childNodes);
  n.forEach(function(e) {
    t.removeChild(e);
  });
}
var fe;
const G = typeof window < "u";
G && ((fe = window == null ? void 0 : window.navigator) == null ? void 0 : fe.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xe(t) {
  return typeof t == "function" ? t() : h(t);
}
function Ye(t) {
  return t;
}
function Ze(t) {
  return He() ? (Ue(t), !0) : !1;
}
function et(t, n = !0) {
  We() ? se(t) : n ? t() : ee(t);
}
function Ee(t) {
  var n;
  const e = Xe(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const tt = G ? window : void 0;
G && window.document;
G && window.navigator;
G && window.location;
function nt(t, n = !1) {
  const e = y(), l = () => e.value = Boolean(t());
  return l(), et(l, n), e;
}
const oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ae = "__vueuse_ssr_handlers__";
oe[ae] = oe[ae] || {};
oe[ae];
var ve = Object.getOwnPropertySymbols, lt = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, at = (t, n) => {
  var e = {};
  for (var l in t)
    lt.call(t, l) && n.indexOf(l) < 0 && (e[l] = t[l]);
  if (t != null && ve)
    for (var l of ve(t))
      n.indexOf(l) < 0 && ot.call(t, l) && (e[l] = t[l]);
  return e;
};
function st(t, n, e = {}) {
  const l = e, { window: a = tt } = l, o = at(l, ["window"]);
  let s;
  const u = nt(() => a && "ResizeObserver" in a), v = () => {
    s && (s.disconnect(), s = void 0);
  }, r = Q(() => Ee(t), (p) => {
    v(), u.value && a && p && (s = new ResizeObserver(n), s.observe(p, o));
  }, { immediate: !0, flush: "post" }), c = () => {
    v(), r();
  };
  return Ze(c), {
    isSupported: u,
    stop: c
  };
}
function rt(t, n = { width: 0, height: 0 }, e = {}) {
  const { box: l = "content-box" } = e, a = y(n.width), o = y(n.height);
  return st(t, ([s]) => {
    const u = l === "border-box" ? s.borderBoxSize : l === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    u ? (a.value = u.reduce((v, { inlineSize: r }) => v + r, 0), o.value = u.reduce((v, { blockSize: r }) => v + r, 0)) : (a.value = s.contentRect.width, o.value = s.contentRect.height);
  }, e), Q(() => Ee(t), (s) => {
    a.value = s ? n.width : 0, o.value = s ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var pe;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(pe || (pe = {}));
var ut = Object.defineProperty, he = Object.getOwnPropertySymbols, it = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, me = (t, n, e) => n in t ? ut(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, dt = (t, n) => {
  for (var e in n || (n = {}))
    it.call(n, e) && me(t, e, n[e]);
  if (he)
    for (var e of he(n))
      ct.call(n, e) && me(t, e, n[e]);
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
function Ne(t, n) {
  const e = y(), l = rt(e), a = y([]), o = De(t), s = y({ start: 0, end: 10 }), { itemHeight: u, overscan: v = 5 } = n, r = (w) => {
    if (typeof u == "number")
      return Math.ceil(w / u);
    const { start: I = 0 } = s.value;
    let E = 0, x = 0;
    for (let N = I; N < o.value.length; N++)
      if (E += u(N), E >= w) {
        x = N;
        break;
      }
    return x - I;
  }, c = (w) => {
    if (typeof u == "number")
      return Math.floor(w / u) + 1;
    let I = 0, E = 0;
    for (let x = 0; x < o.value.length; x++)
      if (I += u(x), I >= w) {
        E = x;
        break;
      }
    return E + 1;
  }, p = () => {
    const w = e.value;
    if (w) {
      const I = c(w.scrollTop), E = r(w.clientHeight), x = I - v, N = I + E + v;
      s.value = {
        start: x < 0 ? 0 : x,
        end: N > o.value.length ? o.value.length : N
      }, a.value = o.value.slice(s.value.start, s.value.end).map((z, _) => ({
        data: z,
        index: _ + s.value.start
      }));
    }
  };
  Q([l.width, l.height, t], () => {
    p();
  });
  const m = V(() => typeof u == "number" ? o.value.length * u : o.value.reduce((w, I, E) => w + u(E), 0)), f = (w) => typeof u == "number" ? w * u : o.value.slice(0, w).reduce((E, x, N) => E + u(N), 0), O = (w) => {
    e.value && (e.value.scrollTop = f(w), p());
  }, T = V(() => f(s.value.start)), A = V(() => ({
    style: {
      width: "100%",
      height: `${m.value - T.value}px`,
      marginTop: `${T.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: O,
    containerProps: {
      ref: e,
      onScroll: () => {
        p();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: A
  };
}
const vt = (t, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (l, a, o = null) => {
      const s = t.map.get(l);
      if (s)
        s.value = a, s.data = o;
      else {
        let u = { value: a, key: l, data: o };
        t.value.push(u), t.map.set(u.key, u);
      }
    },
    addRange: (l) => {
      for (let a of l)
        t.actions.push(a.key, a.value, a.data);
    },
    remove: (l) => {
      t.value.splice(t.value.findIndex((a) => a.key == l), 1);
    },
    clear: () => {
      t.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (a, o) => a.value.localeCompare(o.value)), t.value = t.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      t.value = this.defaultArray;
    },
    filter: function(l) {
    }
  };
  window.ExtraSelectOptions[n] = e, t.actions = e;
};
let pt = 1;
const Le = (t) => {
  t && (t.style.display = "none", Ke(t));
}, Ie = (t, n, e, l) => {
  var v;
  const a = y(/* @__PURE__ */ new Map());
  D(() => {
    if (Array.isArray(e.value)) {
      a.value.clear();
      for (let r of e.value)
        a.value.set(r, r);
    }
  });
  const o = y([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let r of o.value)
        o.map.set(r.key, r);
  }, D(() => {
    n.value && (o.value = n.value, o.rebuildMap());
  }), t) {
    a.value.clear();
    for (let r of Array.apply(null, t.selectedOptions).map((c) => c.value).filter((c) => c))
      a.value.set(r, r);
    o.value = Array.apply(null, t.options).reduce((r, c) => (r.push({ value: c.text, key: c.value, data: c.dataset }), r), []), o.rebuildMap();
  }
  if (Array.isArray(l))
    for (let r of l)
      a.value.set(r, r);
  else
    l != null && a.value.set(l, l);
  vt(o, (v = t == null ? void 0 : t.id) != null ? v : "extraselect_" + (++pt).toString());
  const s = [];
  return a.value.forEach((r, c) => {
    s.push([c, r]);
  }), { options: o, selectedOptions: a, onReset: () => {
    a.value.clear();
    for (let [r, c] of s)
      a.value.set(r, c);
  } };
}, ge = async function(t, n = null, e = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...e.body })
  };
  return await (await fetch(t, l)).json();
}, Te = (t, n, e, l, a, o, s = "limited", u = {}) => {
  const v = y(0), r = y(!1), c = V(() => r.value || v.value > 0);
  if (n != null && n.length > 0)
    if (e) {
      const p = [];
      D((m) => {
        if (l.value.length >= a) {
          let f = !0;
          switch (s) {
            case "always":
              break;
            default:
            case "limited":
              f = !p.includes(l.value);
              break;
            case "complete":
              f = p.reduce((O, T) => O && !l.value.startsWith(T), !0);
              break;
          }
          if (f) {
            r.value = !0;
            const O = setTimeout(() => {
              p.push(l.value), v.value += 1, u.body = { ...u.body, ...o.value }, ge(n, l.value, u).then((T) => {
                t.actions.addRange(T), t.actions.sort(), v.value -= 1, r.value = !1;
              });
            }, 500);
            m(() => {
              clearTimeout(O);
            });
          }
        }
      });
    } else
      ge(n, null, u).then((p) => {
        t.actions.addRange(p), t.actions.sort();
      });
  return { searchingFlag: c };
}, Ae = (t, n) => {
  const e = y(""), l = y([]), a = y({});
  for (let s of n) {
    let u = document.getElementById(s);
    a.value[s] = u == null ? void 0 : u.value, u && u.addEventListener("change", (v) => {
      a.value[s] = v.target.value;
    });
  }
  const o = function(s, u) {
    let v = s.value;
    return Object.keys(a.value).length > 0 && (v = v.filter((r) => {
      var c, p;
      for (let m in a.value)
        if (((c = a.value[m]) != null ? c : "").length > 0 && (!((p = r.data) != null && p.hasOwnProperty(m)) || r.data[m] != a.value[m]))
          return !1;
      return !0;
    })), u.length > 0 && (v = v.filter((r) => r.value.toLowerCase().includes(u.toLowerCase()))), v;
  };
  return D(() => {
    l.value = o(t, e.value);
  }), { filterText: e, filteredOptions: l, filterValues: a };
}, Pe = (t, n, e, l, a, o, s) => {
  const u = getComputedStyle(document.querySelector("body")).font, v = function(p) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = u, f.measureText(p).width;
  }, r = V(() => {
    var m, f;
    const p = (m = K(l.value).width) != null ? m : 100;
    if (s === "inherit")
      return p;
    if (s == null || s === "dynamic") {
      const O = (f = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? f : 16;
      return Math.max(p, Math.max(...t.value.map((T) => v(T.value))) + 20 + O * 3);
    }
    return s;
  }), c = y({
    position: "absolute",
    "min-width": "max-content"
  });
  return Qe(() => {
    e.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var p = K(l.value), m = K(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var m = K(o.value);
    let f = -m.left + p.left;
    const O = window.document.documentElement.clientWidth;
    f + r.value > O && (f = O - r.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-m.top + p.top + p.height).toString() + "px",
      left: f.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: v };
}, ht = {
  key: 0,
  class: "extra-select selection"
}, mt = ["onClick"], gt = ["innerHTML"], yt = ["value"], wt = {
  key: 0,
  class: "input-searching"
}, bt = {
  key: 0,
  class: "allselect-clear"
}, _t = { class: "row-input" }, kt = ["checked"], Ot = /* @__PURE__ */ S("b", null, "Select all", -1), St = { class: "row-input" }, xt = ["checked"], Ct = /* @__PURE__ */ S("b", null, "Select Filtered", -1), Et = {
  key: 1,
  class: "no-matches"
}, Nt = { key: 2 }, Lt = ["onClick"], It = { class: "row-input" }, Tt = ["checked"], At = ["value"], Pt = {
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
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    var re, ue, ie;
    const e = t, l = V(() => {
      var i, d;
      return (d = (i = e.originalNode) == null ? void 0 : i.multiple) != null ? d : e.multiple;
    }), { options: a, selectedOptions: o, onReset: s } = Ie(e.originalNode, te(e, "options"), te(e, "modelValue"), e.initialValue), u = (re = e.originalNode) == null ? void 0 : re.classList, v = Object.values((ie = (ue = e.originalNode) == null ? void 0 : ue.style) != null ? ie : {});
    Le(e.originalNode);
    const { filterText: r, filteredOptions: c, filterValues: p } = Ae(a, e.filterFields), { searchingFlag: m } = Te(
      a,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      p,
      e.fetchMode,
      e.fetchOptions
    ), f = y(null), O = y(null), T = y(null), A = y(!1), B = y(null), w = function(i) {
      const d = H(i.target);
      d.push(i.target), !d.includes(f.value) && !d.includes(O.value) && (A.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let i = !1;
        B.value = H(f.value).find((d) => !!(d instanceof Element && (d.matches(e.dropdownContainer) && (i = !0), i && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(d).position))));
      }
      if (B.value == null && (B.value = document.querySelector("body")), e.originalNode) {
        for (let d of u)
          d != "extraselect" && f.value.classList.add(d);
        for (let d of v)
          f.value.style[d] = e.originalNode.style[d];
        v.includes("background-color") || (f.value.style.backgroundColor = "white");
        let i = H(f.value, "form").pop();
        i instanceof HTMLElement && i.matches("form") && i.addEventListener("reset", () => setTimeout(s));
      }
      window.document.addEventListener("mousedown", w), window.document.addEventListener("focusin", w);
    }), ye(() => {
      window.document.removeEventListener("mousedown", w), window.document.removeEventListener("focusin", w);
    });
    const { dropdownStyle: I, getTextWidth: E } = Pe(a, o, A, f, O, B, e.maxWidth), x = (i) => {
      ee(
        () => {
          var d;
          return (d = e.originalNode) == null ? void 0 : d.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), n("update:modelValue", i);
    }, N = (i) => {
      l.value ? o.value.has(i) ? o.value.delete(i) : o.value.set(i, i) : (o.value.clear(), o.value.set(i, i), A.value = !1), x(Array.from(o.value.keys()));
    }, z = (i) => {
      _(i, !1), r.value = "";
    }, _ = (i, d = null) => {
      d == null && (d = !L.value), d ? (o.value.clear(), a.value.forEach((k) => o.value.set(k.key, k.key))) : o.value.clear(), x(Array.from(o.value.keys()));
    }, C = () => {
      $.value ? c.value.forEach((i) => {
        o.value.has(i.key) && o.value.delete(i.key);
      }) : c.value.forEach((i) => {
        o.value.has(i.key) || o.value.set(i.key, i.key);
      }), x(Array.from(o.value.keys()));
    };
    Q(A, (i, d) => {
      i != d && (i ? e.search && ee(() => {
        T.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const L = V(() => o.value.size == a.value.length), $ = V(() => c.value.reduce((i, d) => i && o.value.has(d.key), !0)), Be = V(() => o.value.size == 0), $e = V(() => {
      var i, d, k, R, U;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (Be.value)
          return "No selection";
        if (!e.searchableUrl && L.value)
          return "All selected";
        const F = f.value ? getComputedStyle(f.value) : null, qe = ((i = f.value) == null ? void 0 : i.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let J = o.value.size + " selected - ", ce = !0;
        for (let Re of o.value)
          if (ce ? ce = !1 : J += ", ", J += (k = (d = a.map.get(Re[0])) == null ? void 0 : d.value) != null ? k : m.value ? "Loading..." : "Value not found", qe < E(J))
            return o.value.size + " selected";
        return J;
      } else
        for (let F of o.value)
          return (U = (R = a.map.get(F[0])) == null ? void 0 : R.value) != null ? U : m.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Fe, containerProps: je, wrapperProps: ze } = Ne(
      c,
      {
        itemHeight: 32
      }
    );
    return (i, d) => (g(), b(j, null, [
      e.showSelected ? (g(), b("div", ht, [
        (g(!0), b(j, null, X(h(o), (k) => {
          var R;
          return g(), b("div", {
            key: k,
            onClick: (U) => N(k[0]),
            class: "selection-badge"
          }, [
            de(W((R = h(a).find((U) => U.key == k[0])) == null ? void 0 : R.value) + " ", 1),
            S("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, gt)
          ], 8, mt);
        }), 128))
      ])) : P("", !0),
      S("input", Y({
        onFocus: d[0] || (d[0] = (k) => A.value = !0),
        onClick: d[1] || (d[1] = (k) => A.value = !0),
        ref_key: "inputNode",
        ref: f,
        value: h($e),
        class: "extra-select extra-select-input",
        readonly: ""
      }, i.$attrs), null, 16, yt),
      B.value ? (g(), ne(le, {
        key: 1,
        to: B.value
      }, [
        Z(S("div", {
          class: we(["extra-select dropdown", { searching: h(m) > 0 }]),
          ref_key: "dropdownNode",
          ref: O,
          style: be(h(I))
        }, [
          e.search ? (g(), b("div", wt, [
            Z(S("input", {
              ref_key: "searchNode",
              ref: T,
              class: "extra-select-search",
              "onUpdate:modelValue": d[2] || (d[2] = (k) => _e(r) ? r.value = k : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ge, h(r)]
            ])
          ])) : P("", !0),
          h(r).length >= e.minChars ? (g(), b(j, { key: 1 }, [
            h(l) ? (g(), b("div", bt, [
              h(r).length == 0 ? (g(), b("div", {
                key: 0,
                onClick: _,
                class: "all-select"
              }, [
                S("div", _t, [
                  S("input", {
                    checked: h(L),
                    type: "checkbox"
                  }, null, 8, kt),
                  Ot
                ])
              ])) : P("", !0),
              h(c).length > 0 && h(r).length > 0 ? (g(), b("div", {
                key: 1,
                onClick: C,
                class: "all-select"
              }, [
                S("div", St, [
                  S("input", {
                    checked: h($),
                    type: "checkbox"
                  }, null, 8, xt),
                  Ct
                ])
              ])) : P("", !0),
              S("div", {
                class: "clear",
                onClick: z
              }, "Clear")
            ])) : P("", !0),
            h(c).length == 0 ? (g(), b("div", Et, "No matches found")) : P("", !0)
          ], 64)) : (g(), b("div", Nt, "Insert at least " + W(e.minChars) + " characters", 1)),
          S("div", Y(h(je), { class: "scroller" }), [
            S("div", ke(Oe(h(ze))), [
              (g(!0), b(j, null, X(h(Fe), (k) => (g(), b("button", {
                key: k.index,
                class: "dropdown-row",
                onClick: Se((R) => N(k.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", It, [
                  h(l) ? (g(), b("input", {
                    key: 0,
                    checked: h(o).has(k.data.key),
                    type: "checkbox"
                  }, null, 8, Tt)) : P("", !0),
                  de(" " + W(k.data.value), 1)
                ])
              ], 8, Lt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, A.value]
        ])
      ], 8, ["to"])) : P("", !0),
      e.originalNode ? (g(), ne(le, {
        key: 2,
        to: e.originalNode
      }, [
        (g(!0), b(j, null, X(h(o), (k) => (g(), b("option", {
          key: k[0],
          selected: "selected",
          value: k[0]
        }, null, 8, At))), 128))
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}), Vt = {
  key: 0,
  class: "no-matches"
}, Bt = { key: 1 }, $t = ["onClick"], Ft = { class: "row-input" }, jt = {
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    var x, N, z;
    const e = t, { options: l } = Ie(null, te(e, "options"), y([])), a = (x = e.originalNode) == null ? void 0 : x.classList, o = Object.values((z = (N = e.originalNode) == null ? void 0 : N.style) != null ? z : {});
    Le(e.originalNode);
    const { filterText: s, filteredOptions: u, filterValues: v } = Ae(l, e.filterFields), { searchingFlag: r } = Te(
      l,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      v,
      e.fetchMode,
      e.fetchOptions
    ), c = y(null), p = y(null), m = y(!1), f = y(null), O = function(_) {
      const C = H(_.target);
      C.push(_.target), !C.includes(c.value) && !C.includes(p.value) && (m.value = !1);
    };
    se(() => {
      if (e.dropdownContainer) {
        let _ = !1;
        f.value = H(c.value).find((C) => !!(C instanceof Element && (C.matches(e.dropdownContainer) && (_ = !0), _ && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(C).position))));
      }
      if (f.value == null && (f.value = document.querySelector("body")), e.originalNode) {
        for (let $ of a)
          $ != "extrasuggest" && c.value.classList.add($);
        for (let $ of o)
          c.value.style[$] = e.originalNode.style[$];
        o.includes("background-color") || (c.value.style.backgroundColor = "white"), s.value = e.originalNode.value, D(() => {
          e.modelValue != null && (s.value = e.modelValue);
        });
        const _ = s.value, C = () => {
          s.value = _;
        };
        let L = H(c.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(C));
      }
      window.document.addEventListener("mousedown", O), window.document.addEventListener("focusin", O);
    }), ye(() => {
      window.document.removeEventListener("mousedown", O), window.document.removeEventListener("focusin", O);
    });
    const { dropdownStyle: T } = Pe(l, y([]), m, c, p, f, e.maxWidth), A = (_) => {
      s.value = l.map.get(_).value, m.value = !1;
    }, B = () => {
      var _;
      e.originalNode && (e.originalNode.value = s.value, (_ = e.originalNode) == null || _.dispatchEvent(new Event("change", { bubbles: !0 }))), n("update:modelValue", s.value);
    };
    Q(() => m.value, (_) => {
      _ === !1 && B();
    });
    const { list: w, containerProps: I, wrapperProps: E } = Ne(
      u,
      {
        itemHeight: 32
      }
    );
    return (_, C) => (g(), b(j, null, [
      Z(S("input", Y({
        onFocus: C[0] || (C[0] = (L) => m.value = !0),
        onClick: C[1] || (C[1] = (L) => m.value = !0),
        ref_key: "inputNode",
        ref: c,
        "onUpdate:modelValue": C[2] || (C[2] = (L) => _e(s) ? s.value = L : null),
        class: "extra-select extra-select-input"
      }, _.$attrs), null, 16), [
        [Je, h(s)]
      ]),
      f.value ? (g(), ne(le, {
        key: 0,
        to: f.value
      }, [
        Z(S("div", {
          class: we(["extra-select dropdown", { searching: h(r) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: be(h(T))
        }, [
          h(s).length >= e.minChars ? (g(), b(j, { key: 0 }, [
            h(u).length == 0 ? (g(), b("div", Vt, "No matches found")) : P("", !0)
          ], 64)) : (g(), b("div", Bt, "Insert at least " + W(e.minChars) + " characters", 1)),
          S("div", Y(h(I), { class: "scroller" }), [
            S("div", ke(Oe(h(E))), [
              (g(!0), b(j, null, X(h(w), (L) => (g(), b("button", {
                key: L.index,
                class: "dropdown-row",
                onClick: Se(($) => A(L.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                S("div", Ft, W(L.data.value), 1)
              ], 8, $t))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, m.value]
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
    q.lock(t, "extra-select", () => {
      const n = {};
      for (let a in t.dataset)
        try {
          n[a] = JSON.parse(t.dataset[a]);
        } catch {
          n[a] = t.dataset[a];
        }
      n.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const l = Ce(Mt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), q.remove(t, "extra-select");
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
    q.lock(t, "extra-suggest", () => {
      const n = {};
      for (let a in t.dataset)
        try {
          n[a] = JSON.parse(t.dataset[a]);
        } catch {
          n[a] = t.dataset[a];
        }
      n.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const l = Ce(zt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), q.remove(t, "extra-suggest");
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
