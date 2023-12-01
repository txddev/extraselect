import { unref as p, getCurrentScope as Ge, onScopeDispose as Je, getCurrentInstance as Ke, onMounted as ue, nextTick as le, ref as b, shallowRef as Xe, watch as K, computed as B, watchEffect as J, watchPostEffect as Ye, toRef as G, onUnmounted as ke, openBlock as _, createElementBlock as k, Fragment as q, createCommentVNode as z, renderList as te, createTextVNode as he, toDisplayString as $, createElementVNode as E, mergeProps as ne, createBlock as oe, Teleport as se, withDirectives as ae, normalizeClass as Oe, normalizeStyle as Se, isRef as xe, vModelText as Ze, normalizeProps as Ee, guardReactiveProps as Ce, withModifiers as Ne, vShow as Le, vModelDynamic as et, createApp as Ae } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class D {
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
    return D.has(l, e) ? !1 : (D.put(l, e, !0), n());
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
function R(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], n = t.parentNode; n != null && n instanceof HTMLElement && !(l instanceof HTMLElement && n === l) && !(typeof l == "string" && n.matches(l)); ) {
    var o = n;
    e.push(o), n = o.parentNode;
  }
  return n != null && e.push(n), e;
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
  Ke() ? ue(t) : l ? t() : le(t);
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
  const e = b(), n = () => e.value = Boolean(t());
  return n(), ot(n, l), e;
}
const re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ie = "__vueuse_ssr_handlers__";
re[ie] = re[ie] || {};
re[ie];
var ye = Object.getOwnPropertySymbols, it = Object.prototype.hasOwnProperty, ut = Object.prototype.propertyIsEnumerable, ct = (t, l) => {
  var e = {};
  for (var n in t)
    it.call(t, n) && l.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && ye)
    for (var n of ye(t))
      l.indexOf(n) < 0 && ut.call(t, n) && (e[n] = t[n]);
  return e;
};
function dt(t, l, e = {}) {
  const n = e, { window: o = st } = n, a = ct(n, ["window"]);
  let i;
  const s = rt(() => o && "ResizeObserver" in o), v = () => {
    i && (i.disconnect(), i = void 0);
  }, r = K(() => Ie(t), (c) => {
    v(), s.value && o && c && (i = new ResizeObserver(l), i.observe(c, a));
  }, { immediate: !0, flush: "post" }), u = () => {
    v(), r();
  };
  return at(u), {
    isSupported: s,
    stop: u
  };
}
function ft(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: n = "content-box" } = e, o = b(l.width), a = b(l.height);
  return dt(t, ([i]) => {
    const s = n === "border-box" ? i.borderBoxSize : n === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
    s ? (o.value = s.reduce((v, { inlineSize: r }) => v + r, 0), a.value = s.reduce((v, { blockSize: r }) => v + r, 0)) : (o.value = i.contentRect.width, a.value = i.contentRect.height);
  }, e), K(() => Ie(t), (i) => {
    o.value = i ? l.width : 0, a.value = i ? l.height : 0;
  }), {
    width: o,
    height: a
  };
}
var ge;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(ge || (ge = {}));
var vt = Object.defineProperty, we = Object.getOwnPropertySymbols, pt = Object.prototype.hasOwnProperty, ht = Object.prototype.propertyIsEnumerable, be = (t, l, e) => l in t ? vt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, mt = (t, l) => {
  for (var e in l || (l = {}))
    pt.call(l, e) && be(t, e, l[e]);
  if (we)
    for (var e of we(l))
      ht.call(l, e) && be(t, e, l[e]);
  return t;
};
const yt = {
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
}, yt);
function Fe(t, l) {
  const e = b(), n = ft(e), o = b([]), a = Xe(t), i = b({ start: 0, end: 10 }), { itemHeight: s, overscan: v = 5 } = l, r = (w) => {
    if (typeof s == "number")
      return Math.ceil(w / s);
    const { start: O = 0 } = i.value;
    let S = 0, A = 0;
    for (let I = O; I < a.value.length; I++)
      if (S += s(I), S >= w) {
        A = I;
        break;
      }
    return A - O;
  }, u = (w) => {
    if (typeof s == "number")
      return Math.floor(w / s) + 1;
    let O = 0, S = 0;
    for (let A = 0; A < a.value.length; A++)
      if (O += s(A), O >= w) {
        S = A;
        break;
      }
    return S + 1;
  }, c = () => {
    const w = e.value;
    if (w) {
      const O = u(w.scrollTop), S = r(w.clientHeight), A = O - v, I = O + S + v;
      i.value = {
        start: A < 0 ? 0 : A,
        end: I > a.value.length ? a.value.length : I
      }, o.value = a.value.slice(i.value.start, i.value.end).map((j, W) => ({
        data: j,
        index: W + i.value.start
      }));
    }
  };
  K([n.width, n.height, t], () => {
    c();
  });
  const h = B(() => typeof s == "number" ? a.value.length * s : a.value.reduce((w, O, S) => w + s(S), 0)), g = (w) => typeof s == "number" ? w * s : a.value.slice(0, w).reduce((S, A, I) => S + s(I), 0), y = (w) => {
    e.value && (e.value.scrollTop = g(w), c());
  }, m = B(() => g(i.value.start)), L = B(() => ({
    style: {
      width: "100%",
      height: `${h.value - m.value}px`,
      marginTop: `${m.value}px`
    }
  }));
  return {
    list: o,
    scrollTo: y,
    containerProps: {
      ref: e,
      onScroll: () => {
        c();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: L
  };
}
const H = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, gt = (t, l) => {
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
let wt = 1;
const Te = (t) => {
  t && (t.style.display = "none", tt(t));
}, Ve = (t, l, e, n) => {
  var v;
  const o = b(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      o.value.clear();
      for (let r of e.value)
        o.value.set(r, r);
    }
  });
  const a = b([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let r of a.value)
        a.map.set(r.key, r);
  }, J(() => {
    l.value && (a.value = l.value.map((r) => ({ ...r, key: H(r.key) })), a.rebuildMap());
  }), t) {
    if (o.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((u) => H(u.value)).filter((u) => u != null))
        o.value.set(r, r);
      a.value = Array.apply(null, t.options).reduce((r, u) => (r.push({ value: u.text, key: H(u.value), data: Object.assign({}, u.dataset) }), r), []);
    }
    if (t.matches("input")) {
      let r = t.value;
      r != null && r.length > 0 && (a.value = [{ value: r, key: r }]);
    }
    a.rebuildMap();
  }
  if (Array.isArray(n))
    for (let r of n)
      o.value.set(H(r), H(r));
  else
    n != null && o.value.set(H(n), H(n));
  gt(a, (v = t == null ? void 0 : t.id) != null ? v : "extraselect_" + (++wt).toString());
  const i = [];
  return o.value.forEach((r, u) => {
    i.push([u, r]);
  }), { options: a, selectedOptions: o, onReset: () => {
    o.value.clear();
    for (let [r, u] of i)
      o.value.set(r, u);
  } };
};
b({});
function bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const ce = (t = null) => {
  var n, o;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(o = (n = window.ExtraSelectLocalization.defaults) == null ? void 0 : n.defaultArray) != null ? o : {} };
  Object.assign(e, t != null ? t : {}), Pe(b(e), "defaults");
}, Pe = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, ce());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (n) => {
      var o;
      return (o = t.value[n]) != null ? o : null;
    },
    push: (n, o) => {
      t.value[n] = o;
    }
  };
  window.ExtraSelectLocalization[l] = e, t.actions = e;
};
let _t = 0;
const ze = (t, l) => {
  var n;
  return Pe(l, (n = t == null ? void 0 : t.id) != null ? n : "extraselect_" + (++_t).toString()), { propLocalization: l, t: (o, a = {}) => {
    var s;
    let i = (s = l.value[o]) != null ? s : window.ExtraSelectLocalization.defaults.get(o);
    return i == null && (window.ExtraSelectLocalization.defaults.push(o, o), i = o), bt(i, a);
  } };
}, _e = async function(t, l = null, e = {}) {
  var a;
  const n = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(a = e.headers) != null ? a : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, n)).json();
}, Me = (t, l, e, n, o, a, i = "limited", s = {}) => {
  const v = b(0), r = b(!1), u = B(() => r.value || v.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const c = [];
      J((h) => {
        if (n.value.length >= o) {
          let g = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              g = !c.includes(n.value);
              break;
            case "complete":
              g = c.reduce((y, m) => y && !n.value.startsWith(m), !0);
              break;
          }
          if (g) {
            r.value = !0;
            const y = setTimeout(() => {
              c.push(n.value), v.value += 1, s.body = { ...s.body, ...a.value }, _e(l, n.value, s).then((m) => {
                t.actions.addRange(m), t.actions.sort(), v.value -= 1, r.value = !1;
              });
            }, 500);
            h(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      _e(l, null, s).then((c) => {
        t.actions.addRange(c), t.actions.sort();
      });
  return { searchingFlag: u };
}, $e = (t, l, e, n = [], o = []) => {
  const a = b(""), i = b([]), s = b({}), v = { ...n.reduce((u, c) => (u[c] = !1, u), {}), ...o.reduce((u, c) => (u[c] = !0, u), {}) };
  for (let u in v) {
    let c = v[u], h = document.getElementById(u);
    s.value[u] = h == null ? void 0 : h.value, h && h.addEventListener("change", (g) => {
      s.value[u] = g.target.value, c && le(() => {
        if (l != null)
          for (let y of Array.from(l.value.keys()))
            i.value.find((m) => m.key == y) || e(y, !1);
        else
          i.value.find((y) => y.key == a.value) || e(a.value, !1);
      });
    });
  }
  const r = function(u, c) {
    let h = u.value;
    return Object.keys(s.value).length > 0 && (h = h.filter((g) => {
      var y, m;
      for (let L in s.value)
        if ((v[L] ? !0 : ((y = s.value[L]) != null ? y : "").length > 0) && ((m = g.data) == null ? void 0 : m.hasOwnProperty(L)) && g.data[L] != s.value[L])
          return !1;
      return !0;
    })), c.length > 0 && (h = h.filter((g) => g.value.toLowerCase().includes(c.toLowerCase()))), h;
  };
  return J(() => {
    i.value = r(t, a.value);
  }), { filterText: a, filteredOptions: i, filterValues: s };
}, Be = (t, l, e, n, o, a, i) => {
  const s = getComputedStyle(document.querySelector("body")).font, v = function(c) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = s, g.measureText(c).width;
  }, r = B(() => {
    var h, g;
    const c = (h = ee(n.value).width) != null ? h : 100;
    if (i === "inherit")
      return c;
    if (i == null || i === "dynamic") {
      const y = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(c, Math.max(...t.value.map((m) => v(m.value))) + 20 + y * 3);
    }
    return i;
  }), u = b({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ye(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var c = ee(n.value), h = ee(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var h = ee(a.value);
    let g = -h.left + c.left;
    const y = window.document.documentElement.clientWidth;
    g + r.value > y && (g = y - r.value), u.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-h.top + c.top + c.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: u, getTextWidth: v };
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
    const e = t, n = B(() => {
      var f, d;
      return (d = (f = e.originalNode) == null ? void 0 : f.multiple) != null ? d : e.multiple;
    }), { options: o, selectedOptions: a, onReset: i } = Ve(e.originalNode, G(e, "options"), G(e, "modelValue"), e.initialValue), { t: s } = ze(e.originalNode, G(e, "localization")), v = (de = e.originalNode) == null ? void 0 : de.classList, r = Object.values((ve = (fe = e.originalNode) == null ? void 0 : fe.style) != null ? ve : {});
    Te(e.originalNode);
    const u = (f, d = null) => {
      if (n.value) {
        let T = d;
        switch (T == null && (T = !a.value.has(f)), T) {
          case !0:
            a.value.set(f, f);
            break;
          case !1:
            a.value.delete(f);
            break;
        }
      } else
        a.value.clear(), d !== !1 && a.value.set(f, f), w.value = !1;
      j(Array.from(a.value.keys()));
    }, { filterText: c, filteredOptions: h, filterValues: g } = $e(o, a, u, e.filterFields, e.hardFilterFields), { searchingFlag: y } = Me(
      o,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), m = b(null), L = b(null), U = b(null), w = b(!1), O = b(null), S = function(f) {
      const d = R(f.target);
      d.push(f.target), !d.includes(m.value) && !d.includes(L.value) && (w.value = !1);
    };
    ue(() => {
      if (e.dropdownContainer) {
        let f = !1;
        O.value = R(m.value).find((d) => !!(d instanceof Element && (d.matches(e.dropdownContainer) && (f = !0), f && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(d).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), e.originalNode) {
        for (let d of v)
          d != "extraselect" && m.value.classList.add(d);
        for (let d of r)
          m.value.style[d] = e.originalNode.style[d];
        let f = R(m.value, "form").pop();
        f instanceof HTMLElement && f.matches("form") && f.addEventListener("reset", () => setTimeout(i)), e.originalNode.toggleValue = u, e.originalNode.setValues = (d) => {
          a.value.clear();
          for (let T of d)
            u(T);
        };
      }
      window.document.addEventListener("mousedown", S), window.document.addEventListener("focusin", S);
    }), ke(() => {
      window.document.removeEventListener("mousedown", S), window.document.removeEventListener("focusin", S);
    });
    const { dropdownStyle: A, getTextWidth: I } = Be(o, a, w, m, L, O, e.maxWidth), j = (f) => {
      le(
        () => {
          var d;
          return (d = e.originalNode) == null ? void 0 : d.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", f);
    }, W = (f) => {
      F(f, !1), c.value = "";
    }, F = (f, d = null) => {
      d == null && (d = !C.value), d ? (a.value.clear(), o.value.forEach((T) => a.value.set(T.key, T.key))) : a.value.clear(), j(Array.from(a.value.keys()));
    }, x = () => {
      V.value ? h.value.forEach((f) => {
        a.value.has(f.key) && a.value.delete(f.key);
      }) : h.value.forEach((f) => {
        a.value.has(f.key) || a.value.set(f.key, f.key);
      }), j(Array.from(a.value.keys()));
    };
    K(w, (f, d) => {
      f != d && (f ? e.search && le(() => {
        U.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const C = B(() => a.value.size == o.value.length), V = B(() => h.value.reduce((f, d) => f && a.value.has(d.key), !0)), He = B(() => a.value.size == 0), De = B(() => {
      var f, d, T, Q, N;
      if (o.value.length < 0)
        return "";
      if (n.value) {
        if (He.value)
          return s("No selection");
        if (!e.searchableUrl && C.value)
          return s("All selected");
        const P = m.value ? getComputedStyle(m.value) : null, Y = ((f = m.value) == null ? void 0 : f.clientWidth) - parseInt(P == null ? void 0 : P.paddingLeft) - parseInt(P == null ? void 0 : P.paddingRight);
        let Z = s(":n selected - ", { n: a.value.size }), pe = !0;
        for (let Qe of a.value)
          if (pe ? pe = !1 : Z += ", ", Z += (T = (d = o.map.get(Qe[0])) == null ? void 0 : d.value) != null ? T : y.value ? s("Loading...") : s("Value not found"), Y < I(Z))
            return a.value.size + s(" selected");
        return Z;
      } else
        for (let P of a.value)
          return (N = (Q = o.map.get(P[0])) == null ? void 0 : Q.value) != null ? N : y.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: Ue, containerProps: We, wrapperProps: Re } = Fe(
      h,
      {
        itemHeight: 32
      }
    );
    return (f, d) => {
      var T, Q;
      return _(), k(q, null, [
        p(n) && p(a).size == 0 ? (_(), k("input", {
          key: 0,
          type: "hidden",
          name: (Q = (T = e.originalNode) == null ? void 0 : T.name) == null ? void 0 : Q.replace("[]", ""),
          value: ""
        }, null, 8, kt)) : z("", !0),
        e.showSelected ? (_(), k("div", Ot, [
          (_(!0), k(q, null, te(p(a), (N) => {
            var P;
            return _(), k("div", {
              key: N,
              onClick: (Y) => u(N[0]),
              class: "selection-badge"
            }, [
              he($((P = p(o).find((Y) => Y.key == N[0])) == null ? void 0 : P.value) + " ", 1),
              E("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, xt)
            ], 8, St);
          }), 128))
        ])) : z("", !0),
        E("input", ne({
          onFocus: d[0] || (d[0] = (N) => w.value = !0),
          onClick: d[1] || (d[1] = (N) => w.value = !0),
          ref_key: "inputNode",
          ref: m,
          value: p(De),
          class: "extra-select extra-select-input",
          readonly: ""
        }, f.$attrs), null, 16, Et),
        O.value ? (_(), oe(se, {
          key: 2,
          to: O.value
        }, [
          ae(E("div", {
            class: Oe(["extra-select dropdown", { searching: p(y) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: Se(p(A))
          }, [
            e.search ? (_(), k("div", Ct, [
              ae(E("input", {
                ref_key: "searchNode",
                ref: U,
                class: "extra-select-search",
                "onUpdate:modelValue": d[2] || (d[2] = (N) => xe(c) ? c.value = N : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(s)("Search...")
              }, null, 8, Nt), [
                [Ze, p(c)]
              ])
            ])) : z("", !0),
            p(c).length >= e.minChars ? (_(), k(q, { key: 1 }, [
              p(n) ? (_(), k("div", Lt, [
                p(c).length == 0 ? (_(), k("div", {
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
                p(h).length > 0 && p(c).length > 0 ? (_(), k("div", {
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
              E("div", Ee(Ce(p(Re))), [
                (_(!0), k(q, null, te(p(Ue), (N) => (_(), k("button", {
                  key: N.index,
                  class: "dropdown-row",
                  onClick: Ne((P) => u(N.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  E("div", Mt, [
                    p(n) ? (_(), k("input", {
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
}, Dt = { key: 1 }, Ut = ["onClick"], Wt = { class: "row-input" }, Rt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Qt = /* @__PURE__ */ Object.assign(Rt, {
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
    const e = t, { options: n } = Ve(e.originalNode, G(e, "options"), b([])), { t: o } = ze(e.originalNode, G(e, "localization")), a = (I = e.originalNode) == null ? void 0 : I.classList, i = Object.values((W = (j = e.originalNode) == null ? void 0 : j.style) != null ? W : {});
    Te(e.originalNode);
    const s = (F, x = null) => {
      x === !1 ? v.value = "" : v.value = n.map.get(F).value, y.value = !1;
    }, { filterText: v, filteredOptions: r, filterValues: u } = $e(n, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: c } = Me(
      n,
      e.url,
      e.searchableUrl,
      v,
      e.minChars,
      u,
      e.fetchMode,
      e.fetchOptions
    ), h = b(null), g = b(null), y = b(!1), m = b(null), L = function(F) {
      const x = R(F.target);
      x.push(F.target), !x.includes(h.value) && !x.includes(g.value) && (y.value = !1);
    };
    ue(() => {
      if (e.dropdownContainer) {
        let C = !1;
        m.value = R(h.value).find((V) => !!(V instanceof Element && (V.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(V).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let V of a)
          V != "extrasuggest" && h.value.classList.add(V);
        for (let V of i)
          h.value.style[V] = e.originalNode.style[V];
        v.value = e.originalNode.value;
        let C = R(h.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          w(!0);
        });
      }
      J(() => {
        e.modelValue != null && (v.value = e.modelValue);
      });
      const F = v.value, x = () => {
        v.value = F;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ke(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: U } = Be(n, b([]), y, h, g, m, e.maxWidth), w = (F = !1) => {
      var x;
      e.originalNode && (F ? v.value = e.originalNode.value : (e.originalNode.value = v.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), l("update:modelValue", v.value);
    };
    K(() => y.value, (F) => {
      F === !1 && w();
    });
    const { list: O, containerProps: S, wrapperProps: A } = Fe(
      r,
      {
        itemHeight: 32
      }
    );
    return (F, x) => (_(), k(q, null, [
      ae(E("input", ne({
        onFocus: x[0] || (x[0] = (C) => y.value = !0),
        onClick: x[1] || (x[1] = (C) => y.value = !0),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": x[2] || (x[2] = (C) => xe(v) ? v.value = C : null),
        class: "extra-select extra-select-input"
      }, F.$attrs), null, 16), [
        [et, p(v)]
      ]),
      m.value ? (_(), oe(se, {
        key: 0,
        to: m.value
      }, [
        ae(E("div", {
          class: Oe(["extra-select dropdown", { searching: p(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Se(p(U))
        }, [
          p(v).length >= e.minChars ? (_(), k(q, { key: 0 }, [
            p(r).length == 0 ? (_(), k("div", Ht, $(p(o)("No matches found")), 1)) : z("", !0)
          ], 64)) : (_(), k("div", Dt, $(p(o)("Insert at least :n characters", { n: e.minChars })), 1)),
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
          [Le, y.value]
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
      for (let o in t.dataset)
        try {
          l[o] = JSON.parse(t.dataset[o]);
        } catch {
          l[o] = t.dataset[o];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const n = Ae(qt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), D.remove(t, "extra-select");
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
      for (let o in t.dataset)
        try {
          l[o] = JSON.parse(t.dataset[o]);
        } catch {
          l[o] = t.dataset[o];
        }
      l.originalNode = t;
      const e = document.createElement("div");
      t.parentNode.insertBefore(e, t.nextSibling), e.dataset.isVue = !0, e.style.display = "contents";
      const n = Ae(Qt, l);
      n.mount(e), t.addEventListener("remove", function() {
        n.unmount(), e.remove(), t.remove(), D.remove(t, "extra-suggest");
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
