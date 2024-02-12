import { unref as p, getCurrentScope as Ge, onScopeDispose as Je, getCurrentInstance as Ke, onMounted as ie, nextTick as le, ref as b, shallowRef as Xe, watch as K, computed as B, watchEffect as J, watchPostEffect as Ye, toRef as G, onUnmounted as ke, openBlock as _, createElementBlock as k, Fragment as q, createCommentVNode as z, renderList as te, createTextVNode as he, toDisplayString as $, createElementVNode as E, mergeProps as ne, createBlock as oe, Teleport as se, withDirectives as ae, normalizeClass as Oe, normalizeStyle as Se, isRef as xe, vModelText as Ze, normalizeProps as Ee, guardReactiveProps as Ce, withModifiers as Ne, vShow as Le, vModelDynamic as et, createApp as Ae } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class D {
  static put(l, e, o) {
    M.has(l) || M.set(l, /* @__PURE__ */ new Map()), M.get(l).set(e, o);
  }
  static get(l, e) {
    return M.get(l).get(e);
  }
  static has(l, e) {
    return M.has(l) && M.get(l).has(e);
  }
  static remove(l, e) {
    var o = M.get(l).delete(e);
    return M.get(l).size !== 0 && M.delete(l), o;
  }
  static lock(l, e, o) {
    return D.has(l, e) ? !1 : (D.put(l, e, !0), o());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = M);
function ee(t) {
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
function Q(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], o = t.parentNode; o != null && o instanceof HTMLElement && !(l instanceof HTMLElement && o === l) && !(typeof l == "string" && o.matches(l)); ) {
    var n = o;
    e.push(n), o = n.parentNode;
  }
  return o != null && e.push(o), e;
}
function tt(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var me;
const X = typeof window < "u";
X && ((me = window == null ? void 0 : window.navigator) == null ? void 0 : me.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function lt(t) {
  return typeof t == "function" ? t() : p(t);
}
function nt(t) {
  return t;
}
function at(t) {
  return Ge() ? (Je(t), !0) : !1;
}
function ot(t, l = !0) {
  Ke() ? ie(t) : l ? t() : le(t);
}
function Ie(t) {
  var l;
  const e = lt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const st = X ? window : void 0;
X && window.document;
X && window.navigator;
X && window.location;
function rt(t, l = !1) {
  const e = b(), o = () => e.value = Boolean(t());
  return o(), ot(o, l), e;
}
const re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ue = "__vueuse_ssr_handlers__";
re[ue] = re[ue] || {};
re[ue];
var ge = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, it = Object.prototype.propertyIsEnumerable, ct = (t, l) => {
  var e = {};
  for (var o in t)
    ut.call(t, o) && l.indexOf(o) < 0 && (e[o] = t[o]);
  if (t != null && ge)
    for (var o of ge(t))
      l.indexOf(o) < 0 && it.call(t, o) && (e[o] = t[o]);
  return e;
};
function dt(t, l, e = {}) {
  const o = e, { window: n = st } = o, a = ct(o, ["window"]);
  let r;
  const s = rt(() => n && "ResizeObserver" in n), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = K(() => Ie(t), (d) => {
    i(), s.value && n && d && (r = new ResizeObserver(l), r.observe(d, a));
  }, { immediate: !0, flush: "post" }), c = () => {
    i(), u();
  };
  return at(c), {
    isSupported: s,
    stop: c
  };
}
function ft(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: o = "content-box" } = e, n = b(l.width), a = b(l.height);
  return dt(t, ([r]) => {
    const s = o === "border-box" ? r.borderBoxSize : o === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (n.value = s.reduce((i, { inlineSize: u }) => i + u, 0), a.value = s.reduce((i, { blockSize: u }) => i + u, 0)) : (n.value = r.contentRect.width, a.value = r.contentRect.height);
  }, e), K(() => Ie(t), (r) => {
    n.value = r ? l.width : 0, a.value = r ? l.height : 0;
  }), {
    width: n,
    height: a
  };
}
var ye;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(ye || (ye = {}));
var vt = Object.defineProperty, we = Object.getOwnPropertySymbols, pt = Object.prototype.hasOwnProperty, ht = Object.prototype.propertyIsEnumerable, be = (t, l, e) => l in t ? vt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, mt = (t, l) => {
  for (var e in l || (l = {}))
    pt.call(l, e) && be(t, e, l[e]);
  if (we)
    for (var e of we(l))
      ht.call(l, e) && be(t, e, l[e]);
  return t;
};
const gt = {
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
mt({
  linear: nt
}, gt);
function Fe(t, l) {
  const e = b(), o = ft(e), n = b([]), a = Xe(t), r = b({ start: 0, end: 10 }), { itemHeight: s, overscan: i = 5 } = l, u = (w) => {
    if (typeof s == "number")
      return Math.ceil(w / s);
    const { start: O = 0 } = r.value;
    let S = 0, A = 0;
    for (let I = O; I < a.value.length; I++)
      if (S += s(I), S >= w) {
        A = I;
        break;
      }
    return A - O;
  }, c = (w) => {
    if (typeof s == "number")
      return Math.floor(w / s) + 1;
    let O = 0, S = 0;
    for (let A = 0; A < a.value.length; A++)
      if (O += s(A), O >= w) {
        S = A;
        break;
      }
    return S + 1;
  }, d = () => {
    const w = e.value;
    if (w) {
      const O = c(w.scrollTop), S = u(w.clientHeight), A = O - i, I = O + S + i;
      r.value = {
        start: A < 0 ? 0 : A,
        end: I > a.value.length ? a.value.length : I
      }, n.value = a.value.slice(r.value.start, r.value.end).map((j, W) => ({
        data: j,
        index: W + r.value.start
      }));
    }
  };
  K([o.width, o.height, t], () => {
    d();
  });
  const h = B(() => typeof s == "number" ? a.value.length * s : a.value.reduce((w, O, S) => w + s(S), 0)), y = (w) => typeof s == "number" ? w * s : a.value.slice(0, w).reduce((S, A, I) => S + s(I), 0), g = (w) => {
    e.value && (e.value.scrollTop = y(w), d());
  }, m = B(() => y(r.value.start)), L = B(() => ({
    style: {
      width: "100%",
      height: `${h.value - m.value}px`,
      marginTop: `${m.value}px`
    }
  }));
  return {
    list: n,
    scrollTo: g,
    containerProps: {
      ref: e,
      onScroll: () => {
        d();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: L
  };
}
const H = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, yt = (t, l, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, a, r = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const s = t.map.get(n);
      if (s)
        s.value = a, s.data = r;
      else {
        let i = { value: a, key: n, data: r };
        t.value.push(i), t.map.set(i.key, i);
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
      n == null && (n = (a, r) => a.value.localeCompare(r.value)), t.value = t.value.sort(n);
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
  window.ExtraSelectOptions[e] = o, t.actions = o;
};
let wt = 1;
const Te = (t) => {
  t && (t.style.display = "none", tt(t));
}, Ve = (t, l, e, o) => {
  var i;
  const n = b(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let u of e.value)
        n.value.set(u, u);
    }
  });
  const a = b([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let u of a.value)
        a.map.set(u.key, u);
  }, J(() => {
    l.value && (a.value = l.value.map((u) => ({ ...u, key: H(u.key) })), a.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let u of Array.apply(null, t.selectedOptions).map((c) => H(c.value)).filter((c) => c != null))
        n.value.set(u, u);
      a.value = Array.apply(null, t.options).reduce((u, c) => (u.push({ value: c.text, key: H(c.value), data: Object.assign({}, c.dataset) }), u), []);
    }
    if (t.matches("input")) {
      let u = t.value;
      u != null && u.length > 0 && (a.value = [{ value: u, key: u }]);
    }
    a.rebuildMap();
  }
  if (Array.isArray(o))
    for (let u of o)
      n.value.set(H(u), H(u));
  else
    o != null && n.value.set(H(o), H(o));
  yt(a, n, (i = t == null ? void 0 : t.id) != null ? i : "extraselect_" + (++wt).toString());
  const r = [];
  return n.value.forEach((u, c) => {
    r.push([c, u]);
  }), { options: a, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [u, c] of r)
      n.value.set(u, c);
  } };
};
b({});
function bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const ce = (t = null) => {
  var o, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), Pe(b(e), "defaults");
}, Pe = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, ce());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (o) => {
      var n;
      return (n = t.value[o]) != null ? n : null;
    },
    push: (o, n) => {
      t.value[o] = n;
    }
  };
  window.ExtraSelectLocalization[l] = e, t.actions = e;
};
let _t = 0;
const ze = (t, l) => {
  var o;
  return Pe(l, (o = t == null ? void 0 : t.id) != null ? o : "extraselect_" + (++_t).toString()), { propLocalization: l, t: (n, a = {}) => {
    var s;
    let r = (s = l.value[n]) != null ? s : window.ExtraSelectLocalization.defaults.get(n);
    return r == null && (window.ExtraSelectLocalization.defaults.push(n, n), r = n), bt(r, a);
  } };
}, _e = async function(t, l = null, e = {}) {
  var a;
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(a = e.headers) != null ? a : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, o)).json();
}, Me = (t, l, e, o, n, a, r = "limited", s = {}) => {
  const i = b(0), u = b(!1), c = B(() => u.value || i.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const d = [];
      J((h) => {
        if (o.value.length >= n) {
          let y = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              y = !d.includes(o.value);
              break;
            case "complete":
              y = d.reduce((g, m) => g && !o.value.startsWith(m), !0);
              break;
          }
          if (y) {
            u.value = !0;
            const g = setTimeout(() => {
              d.push(o.value), i.value += 1, s.body = { ...s.body, ...a.value }, _e(l, o.value, s).then((m) => {
                t.actions.addRange(m), t.actions.sort(), i.value -= 1, u.value = !1;
              });
            }, 500);
            h(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      _e(l, null, s).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: c };
}, $e = (t, l, e, o = [], n = []) => {
  const a = b(""), r = b([]), s = b({}), i = { ...o.reduce((c, d) => (c[d] = !1, c), {}), ...n.reduce((c, d) => (c[d] = !0, c), {}) };
  for (let c in i) {
    let d = i[c], h = document.getElementById(c);
    s.value[c] = h == null ? void 0 : h.value, h && h.addEventListener("change", (y) => {
      s.value[c] = y.target.value, d && le(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            r.value.find((m) => m.key == g) || e(g, !1);
        else
          r.value.find((g) => g.key == a.value) || e(a.value, !1);
      });
    });
  }
  const u = function(c, d) {
    let h = c.value;
    return Object.keys(s.value).length > 0 && (h = h.filter((y) => {
      var g, m;
      for (let L in s.value)
        if ((i[L] ? !0 : ((g = s.value[L]) != null ? g : "").length > 0) && ((m = y.data) == null ? void 0 : m.hasOwnProperty(L)) && y.data[L] != s.value[L])
          return !1;
      return !0;
    })), d.length > 0 && (h = h.filter((y) => y.value.toLowerCase().includes(d.toLowerCase()))), h;
  };
  return J(() => {
    r.value = u(t, a.value);
  }), { filterText: a, filteredOptions: r, filterValues: s };
}, Be = (t, l, e, o, n, a, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, i = function(d) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = s, y.measureText(d).width;
  }, u = B(() => {
    var h, y;
    const d = (h = ee(o.value).width) != null ? h : 100;
    if (r === "inherit")
      return d;
    if (r == null || r === "dynamic") {
      const g = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(d, Math.max(...t.value.map((m) => i(m.value))) + 20 + g * 3);
    }
    return r;
  }), c = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ye(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var d = ee(o.value), h = ee(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var h = ee(a.value);
    let y = -h.left + d.left;
    const g = window.document.documentElement.clientWidth;
    y + u.value > g && (y = g - u.value), c.value = {
      position: "absolute",
      "min-width": "max-content",
      width: u.value.toString() + "px",
      top: (-h.top + d.top + d.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: c, getTextWidth: i };
}, kt = ["name"], Ot = {
  key: 1,
  class: "extra-select selection"
}, St = ["onClick"], xt = ["innerHTML"], Et = ["value"], Ct = {
  key: 0,
  class: "input-searching"
}, Nt = ["placeholder"], Lt = {
  key: 0,
  class: "allselect-clear"
}, At = { class: "row-input" }, It = ["checked"], Ft = { class: "row-input" }, Tt = ["checked"], Vt = {
  key: 1,
  class: "no-matches"
}, Pt = { key: 2 }, zt = ["onClick"], Mt = { class: "row-input" }, $t = ["checked"], Bt = ["value"], jt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, qt = /* @__PURE__ */ Object.assign(jt, {
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
    var de, fe, ve;
    const e = t, o = B(() => {
      var v, f;
      return (f = (v = e.originalNode) == null ? void 0 : v.multiple) != null ? f : e.multiple;
    }), { options: n, selectedOptions: a, onReset: r } = Ve(e.originalNode, G(e, "options"), G(e, "modelValue"), e.initialValue), { t: s } = ze(e.originalNode, G(e, "localization")), i = (de = e.originalNode) == null ? void 0 : de.classList, u = Object.values((ve = (fe = e.originalNode) == null ? void 0 : fe.style) != null ? ve : {});
    Te(e.originalNode);
    const c = (v, f = null) => {
      if (o.value) {
        let T = f;
        switch (T == null && (T = !a.value.has(v)), T) {
          case !0:
            a.value.set(v, v);
            break;
          case !1:
            a.value.delete(v);
            break;
        }
      } else
        a.value.clear(), f !== !1 && a.value.set(v, v), w.value = !1;
      j(Array.from(a.value.keys()));
    }, { filterText: d, filteredOptions: h, filterValues: y } = $e(n, a, c, e.filterFields, e.hardFilterFields), { searchingFlag: g } = Me(
      n,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), m = b(null), L = b(null), U = b(null), w = b(!1), O = b(null), S = function(v) {
      const f = Q(v.target);
      f.push(v.target), !f.includes(m.value) && !f.includes(L.value) && (w.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let v = !1;
        O.value = Q(m.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (v = !0), v && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), e.originalNode) {
        for (let f of i)
          f != "extraselect" && m.value.classList.add(f);
        for (let f of u)
          m.value.style[f] = e.originalNode.style[f];
        let v = Q(m.value, "form").pop();
        v instanceof HTMLElement && v.matches("form") && v.addEventListener("reset", () => setTimeout(r)), e.originalNode.toggleValue = c, e.originalNode.setValues = (f) => {
          a.value.clear();
          for (let T of f)
            c(T);
        };
      }
      window.document.addEventListener("mousedown", S), window.document.addEventListener("focusin", S);
    }), ke(() => {
      window.document.removeEventListener("mousedown", S), window.document.removeEventListener("focusin", S);
    });
    const { dropdownStyle: A, getTextWidth: I } = Be(n, a, w, m, L, O, e.maxWidth), j = (v) => {
      le(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", v);
    }, W = (v) => {
      F(v, !1), d.value = "";
    }, F = (v, f = null) => {
      f == null && (f = !C.value), f ? (a.value.clear(), n.value.forEach((T) => a.value.set(T.key, T.key))) : a.value.clear(), j(Array.from(a.value.keys()));
    }, x = () => {
      V.value ? h.value.forEach((v) => {
        a.value.has(v.key) && a.value.delete(v.key);
      }) : h.value.forEach((v) => {
        a.value.has(v.key) || a.value.set(v.key, v.key);
      }), j(Array.from(a.value.keys()));
    };
    K(w, (v, f) => {
      v != f && (v ? e.search && le(() => {
        U.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const C = B(() => a.value.size == n.value.length), V = B(() => h.value.reduce((v, f) => v && a.value.has(f.key), !0)), He = B(() => a.value.size == 0), De = B(() => {
      var v, f, T, R, N;
      if (n.value.length < 0)
        return "";
      if (o.value) {
        if (He.value)
          return s("No selection");
        if (!e.searchableUrl && C.value)
          return s("All selected");
        const P = m.value ? getComputedStyle(m.value) : null, Y = ((v = m.value) == null ? void 0 : v.clientWidth) - parseInt(P == null ? void 0 : P.paddingLeft) - parseInt(P == null ? void 0 : P.paddingRight);
        let Z = s(":n selected - ", { n: a.value.size }), pe = !0;
        for (let Re of a.value)
          if (pe ? pe = !1 : Z += ", ", Z += (T = (f = n.map.get(Re[0])) == null ? void 0 : f.value) != null ? T : g.value ? s("Loading...") : s("Value not found"), Y < I(Z))
            return a.value.size + s(" selected");
        return Z;
      } else
        for (let P of a.value)
          return (N = (R = n.map.get(P[0])) == null ? void 0 : R.value) != null ? N : g.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: Ue, containerProps: We, wrapperProps: Qe } = Fe(
      h,
      {
        itemHeight: 32
      }
    );
    return (v, f) => {
      var T, R;
      return _(), k(q, null, [
        p(o) && p(a).size == 0 ? (_(), k("input", {
          key: 0,
          type: "hidden",
          name: (R = (T = e.originalNode) == null ? void 0 : T.name) == null ? void 0 : R.replace("[]", ""),
          value: ""
        }, null, 8, kt)) : z("", !0),
        e.showSelected ? (_(), k("div", Ot, [
          (_(!0), k(q, null, te(p(a), (N) => {
            var P;
            return _(), k("div", {
              key: N,
              onClick: (Y) => c(N[0]),
              class: "selection-badge"
            }, [
              he($((P = p(n).find((Y) => Y.key == N[0])) == null ? void 0 : P.value) + " ", 1),
              E("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, xt)
            ], 8, St);
          }), 128))
        ])) : z("", !0),
        E("input", ne({
          onFocus: f[0] || (f[0] = (N) => w.value = !0),
          onClick: f[1] || (f[1] = (N) => w.value = !0),
          ref_key: "inputNode",
          ref: m,
          value: p(De),
          class: "extra-select extra-select-input",
          readonly: ""
        }, v.$attrs), null, 16, Et),
        O.value ? (_(), oe(se, {
          key: 2,
          to: O.value
        }, [
          ae(E("div", {
            class: Oe(["extra-select dropdown", { searching: p(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: Se(p(A))
          }, [
            e.search ? (_(), k("div", Ct, [
              ae(E("input", {
                ref_key: "searchNode",
                ref: U,
                class: "extra-select-search",
                "onUpdate:modelValue": f[2] || (f[2] = (N) => xe(d) ? d.value = N : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(s)("Search...")
              }, null, 8, Nt), [
                [Ze, p(d)]
              ])
            ])) : z("", !0),
            p(d).length >= e.minChars ? (_(), k(q, { key: 1 }, [
              p(o) ? (_(), k("div", Lt, [
                p(d).length == 0 ? (_(), k("div", {
                  key: 0,
                  onClick: F,
                  class: "all-select"
                }, [
                  E("div", At, [
                    E("input", {
                      checked: p(C),
                      type: "checkbox"
                    }, null, 8, It),
                    E("b", null, $(p(s)("Select all")), 1)
                  ])
                ])) : z("", !0),
                p(h).length > 0 && p(d).length > 0 ? (_(), k("div", {
                  key: 1,
                  onClick: x,
                  class: "all-select"
                }, [
                  E("div", Ft, [
                    E("input", {
                      checked: p(V),
                      type: "checkbox"
                    }, null, 8, Tt),
                    E("b", null, $(p(s)("Select Filtered")), 1)
                  ])
                ])) : z("", !0),
                E("div", {
                  class: "clear",
                  onClick: W
                }, $(p(s)("Clear")), 1)
              ])) : z("", !0),
              p(h).length == 0 ? (_(), k("div", Vt, $(p(s)("No matches found")), 1)) : z("", !0)
            ], 64)) : (_(), k("div", Pt, $(p(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            E("div", ne(p(We), { class: "scroller" }), [
              E("div", Ee(Ce(p(Qe))), [
                (_(!0), k(q, null, te(p(Ue), (N) => (_(), k("button", {
                  key: N.index,
                  class: "dropdown-row",
                  onClick: Ne((P) => c(N.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  E("div", Mt, [
                    p(o) ? (_(), k("input", {
                      key: 0,
                      checked: p(a).has(N.data.key),
                      type: "checkbox"
                    }, null, 8, $t)) : z("", !0),
                    he(" " + $(N.data.value), 1)
                  ])
                ], 8, zt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Le, w.value]
          ])
        ], 8, ["to"])) : z("", !0),
        e.originalNode ? (_(), oe(se, {
          key: 3,
          to: e.originalNode
        }, [
          (_(!0), k(q, null, te(p(a), (N) => (_(), k("option", {
            key: N[0],
            selected: "selected",
            value: N[0]
          }, null, 8, Bt))), 128))
        ], 8, ["to"])) : z("", !0)
      ], 64);
    };
  }
}), Ht = {
  key: 0,
  class: "no-matches"
}, Dt = { key: 1 }, Ut = ["onClick"], Wt = { class: "row-input" }, Qt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Rt = /* @__PURE__ */ Object.assign(Qt, {
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
    var I, j, W;
    const e = t, { options: o } = Ve(e.originalNode, G(e, "options"), b([])), { t: n } = ze(e.originalNode, G(e, "localization")), a = (I = e.originalNode) == null ? void 0 : I.classList, r = Object.values((W = (j = e.originalNode) == null ? void 0 : j.style) != null ? W : {});
    Te(e.originalNode);
    const s = (F, x = null) => {
      x === !1 ? i.value = "" : i.value = o.map.get(F).value, g.value = !1;
    }, { filterText: i, filteredOptions: u, filterValues: c } = $e(o, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: d } = Me(
      o,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      c,
      e.fetchMode,
      e.fetchOptions
    ), h = b(null), y = b(null), g = b(!1), m = b(null), L = function(F) {
      const x = Q(F.target);
      x.push(F.target), !x.includes(h.value) && !x.includes(y.value) && (g.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let C = !1;
        m.value = Q(h.value).find((V) => !!(V instanceof Element && (V.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(V).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let V of a)
          V != "extrasuggest" && h.value.classList.add(V);
        for (let V of r)
          h.value.style[V] = e.originalNode.style[V];
        i.value = e.originalNode.value;
        let C = Q(h.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          w(!0);
        });
      }
      J(() => {
        e.modelValue != null && (i.value = e.modelValue);
      });
      const F = i.value, x = () => {
        i.value = F;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ke(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: U } = Be(o, b([]), g, h, y, m, e.maxWidth), w = (F = !1) => {
      var x;
      e.originalNode && (F ? i.value = e.originalNode.value : (e.originalNode.value = i.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), l("update:modelValue", i.value);
    };
    K(() => g.value, (F) => {
      F === !1 && w();
    });
    const { list: O, containerProps: S, wrapperProps: A } = Fe(
      u,
      {
        itemHeight: 32
      }
    );
    return (F, x) => (_(), k(q, null, [
      ae(E("input", ne({
        onFocus: x[0] || (x[0] = (C) => g.value = !0),
        onClick: x[1] || (x[1] = (C) => g.value = !0),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": x[2] || (x[2] = (C) => xe(i) ? i.value = C : null),
        class: "extra-select extra-select-input"
      }, F.$attrs), null, 16), [
        [et, p(i)]
      ]),
      m.value ? (_(), oe(se, {
        key: 0,
        to: m.value
      }, [
        ae(E("div", {
          class: Oe(["extra-select dropdown", { searching: p(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: Se(p(U))
        }, [
          p(i).length >= e.minChars ? (_(), k(q, { key: 0 }, [
            p(u).length == 0 ? (_(), k("div", Ht, $(p(n)("No matches found")), 1)) : z("", !0)
          ], 64)) : (_(), k("div", Dt, $(p(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          E("div", ne(p(S), { class: "scroller" }), [
            E("div", Ee(Ce(p(A))), [
              (_(!0), k(q, null, te(p(O), (C) => (_(), k("button", {
                key: C.index,
                class: "dropdown-row",
                onClick: Ne((V) => s(C.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                E("div", Wt, $(C.data.value), 1)
              ], 8, Ut))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, g.value]
        ])
      ], 8, ["to"])) : z("", !0)
    ], 64));
  }
}), Jt = ce, je = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      je.bindNew(t);
    });
  },
  bindNew(t) {
    D.lock(t, "extra-select", () => {
      const l = {};
      for (let n in t.dataset)
        try {
          l[n] = JSON.parse(t.dataset[n]);
        } catch {
          l[n] = t.dataset[n];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const o = Ae(qt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), D.remove(t, "extra-select");
      });
    });
  }
}, qe = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      qe.bindNew(t);
    });
  },
  bindNew(t) {
    D.lock(t, "extra-suggest", () => {
      const l = {};
      for (let n in t.dataset)
        try {
          l[n] = JSON.parse(t.dataset[n]);
        } catch {
          l[n] = t.dataset[n];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const o = Ae(Rt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), D.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  je.init(), qe.init(), ce();
});
export {
  je as ExtraSelect,
  qe as ExtraSuggest,
  Jt as loadExtraSelectDefaultLocalization
};
