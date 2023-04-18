import { unref as h, getCurrentScope as Ge, onScopeDispose as Je, getCurrentInstance as Ke, onMounted as ie, nextTick as le, ref as w, shallowRef as Xe, watch as K, computed as $, watchEffect as J, watchPostEffect as Ye, toRef as G, onUnmounted as _e, openBlock as k, createElementBlock as _, Fragment as q, createCommentVNode as z, renderList as te, createTextVNode as he, toDisplayString as V, createElementVNode as C, mergeProps as ne, createBlock as oe, Teleport as se, withDirectives as ae, normalizeClass as Oe, normalizeStyle as Se, isRef as xe, vModelText as Ze, normalizeProps as Ee, guardReactiveProps as Ce, withModifiers as Ne, vShow as Le, vModelDynamic as et, createApp as Ae } from "vue";
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
  return typeof t == "function" ? t() : h(t);
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
  const e = w(), n = () => e.value = Boolean(t());
  return n(), ot(n, l), e;
}
const re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ue = "__vueuse_ssr_handlers__";
re[ue] = re[ue] || {};
re[ue];
var ye = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, it = Object.prototype.propertyIsEnumerable, ct = (t, l) => {
  var e = {};
  for (var n in t)
    ut.call(t, n) && l.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && ye)
    for (var n of ye(t))
      l.indexOf(n) < 0 && it.call(t, n) && (e[n] = t[n]);
  return e;
};
function dt(t, l, e = {}) {
  const n = e, { window: o = st } = n, a = ct(n, ["window"]);
  let u;
  const s = rt(() => o && "ResizeObserver" in o), v = () => {
    u && (u.disconnect(), u = void 0);
  }, r = K(() => Ie(t), (i) => {
    v(), s.value && o && i && (u = new ResizeObserver(l), u.observe(i, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    v(), r();
  };
  return at(d), {
    isSupported: s,
    stop: d
  };
}
function ft(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: n = "content-box" } = e, o = w(l.width), a = w(l.height);
  return dt(t, ([u]) => {
    const s = n === "border-box" ? u.borderBoxSize : n === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
    s ? (o.value = s.reduce((v, { inlineSize: r }) => v + r, 0), a.value = s.reduce((v, { blockSize: r }) => v + r, 0)) : (o.value = u.contentRect.width, a.value = u.contentRect.height);
  }, e), K(() => Ie(t), (u) => {
    o.value = u ? l.width : 0, a.value = u ? l.height : 0;
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
  const e = w(), n = ft(e), o = w([]), a = Xe(t), u = w({ start: 0, end: 10 }), { itemHeight: s, overscan: v = 5 } = l, r = (b) => {
    if (typeof s == "number")
      return Math.ceil(b / s);
    const { start: S = 0 } = u.value;
    let x = 0, A = 0;
    for (let I = S; I < a.value.length; I++)
      if (x += s(I), x >= b) {
        A = I;
        break;
      }
    return A - S;
  }, d = (b) => {
    if (typeof s == "number")
      return Math.floor(b / s) + 1;
    let S = 0, x = 0;
    for (let A = 0; A < a.value.length; A++)
      if (S += s(A), S >= b) {
        x = A;
        break;
      }
    return x + 1;
  }, i = () => {
    const b = e.value;
    if (b) {
      const S = d(b.scrollTop), x = r(b.clientHeight), A = S - v, I = S + x + v;
      u.value = {
        start: A < 0 ? 0 : A,
        end: I > a.value.length ? a.value.length : I
      }, o.value = a.value.slice(u.value.start, u.value.end).map((B, W) => ({
        data: B,
        index: W + u.value.start
      }));
    }
  };
  K([n.width, n.height, t], () => {
    i();
  });
  const p = $(() => typeof s == "number" ? a.value.length * s : a.value.reduce((b, S, x) => b + s(x), 0)), g = (b) => typeof s == "number" ? b * s : a.value.slice(0, b).reduce((x, A, I) => x + s(I), 0), y = (b) => {
    e.value && (e.value.scrollTop = g(b), i());
  }, m = $(() => g(u.value.start)), L = $(() => ({
    style: {
      width: "100%",
      height: `${p.value - m.value}px`,
      marginTop: `${m.value}px`
    }
  }));
  return {
    list: o,
    scrollTo: y,
    containerProps: {
      ref: e,
      onScroll: () => {
        i();
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
      const u = t.map.get(n);
      if (u)
        u.value = o, u.data = a;
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
}, Pe = (t, l, e, n) => {
  var v;
  const o = w(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      o.value.clear();
      for (let r of e.value)
        o.value.set(r, r);
    }
  });
  const a = w([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let r of a.value)
        a.map.set(r.key, r);
  }, J(() => {
    l.value && (a.value = l.value.map((r) => ({ ...r, key: H(r.key) })), a.rebuildMap());
  }), t) {
    if (o.value.clear(), t.matches("select")) {
      for (let r of Array.apply(null, t.selectedOptions).map((d) => H(d.value)).filter((d) => d))
        o.value.set(r, r);
      a.value = Array.apply(null, t.options).reduce((r, d) => (r.push({ value: d.text, key: H(d.value), data: Object.assign({}, d.dataset) }), r), []);
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
  const u = [];
  return o.value.forEach((r, d) => {
    u.push([d, r]);
  }), { options: a, selectedOptions: o, onReset: () => {
    o.value.clear();
    for (let [r, d] of u)
      o.value.set(r, d);
  } };
};
w({});
function bt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const ce = (t = null) => {
  var n, o;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(o = (n = window.ExtraSelectLocalization.defaults) == null ? void 0 : n.defaultArray) != null ? o : {} };
  Object.assign(e, t != null ? t : {}), ze(w(e), "defaults");
}, ze = (t, l) => {
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
}, Me = (t, l) => {
  var n;
  return ze(l, (n = t == null ? void 0 : t.id) != null ? n : "extraselect_" + (++count).toString()), { propLocalization: l, t: (o, a = {}) => {
    var s;
    let u = (s = l.value[o]) != null ? s : window.ExtraSelectLocalization.defaults.get(o);
    return u == null && (window.ExtraSelectLocalization.defaults.push(o, o), u = o), bt(u, a);
  } };
}, ke = async function(t, l = null, e = {}) {
  var a;
  const n = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(a = e.headers) != null ? a : {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, n)).json();
}, Ve = (t, l, e, n, o, a, u = "limited", s = {}) => {
  const v = w(0), r = w(!1), d = $(() => r.value || v.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const i = [];
      J((p) => {
        if (n.value.length >= o) {
          let g = !0;
          switch (u) {
            case "always":
              break;
            default:
            case "limited":
              g = !i.includes(n.value);
              break;
            case "complete":
              g = i.reduce((y, m) => y && !n.value.startsWith(m), !0);
              break;
          }
          if (g) {
            r.value = !0;
            const y = setTimeout(() => {
              i.push(n.value), v.value += 1, s.body = { ...s.body, ...a.value }, ke(l, n.value, s).then((m) => {
                t.actions.addRange(m), t.actions.sort(), v.value -= 1, r.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(y);
            });
          }
        }
      });
    } else
      ke(l, null, s).then((i) => {
        t.actions.addRange(i), t.actions.sort();
      });
  return { searchingFlag: d };
}, $e = (t, l, e, n = [], o = []) => {
  const a = w(""), u = w([]), s = w({}), v = { ...n.reduce((d, i) => (d[i] = !1, d), {}), ...o.reduce((d, i) => (d[i] = !0, d), {}) };
  for (let d in v) {
    let i = v[d], p = document.getElementById(d);
    s.value[d] = p == null ? void 0 : p.value, p && p.addEventListener("change", (g) => {
      s.value[d] = g.target.value, i && le(() => {
        if (l != null)
          for (let y of Array.from(l.value.keys()))
            u.value.find((m) => m.key == y) || e(y, !1);
        else
          u.value.find((y) => y.key == a.value) || e(a.value, !1);
      });
    });
  }
  const r = function(d, i) {
    let p = d.value;
    return Object.keys(s.value).length > 0 && (p = p.filter((g) => {
      var y, m;
      for (let L in s.value)
        if ((v[L] ? !0 : ((y = s.value[L]) != null ? y : "").length > 0) && ((m = g.data) == null ? void 0 : m.hasOwnProperty(L)) && g.data[L] != s.value[L])
          return !1;
      return !0;
    })), i.length > 0 && (p = p.filter((g) => g.value.toLowerCase().includes(i.toLowerCase()))), p;
  };
  return J(() => {
    u.value = r(t, a.value);
  }), { filterText: a, filteredOptions: u, filterValues: s };
}, Be = (t, l, e, n, o, a, u) => {
  const s = getComputedStyle(document.querySelector("body")).font, v = function(i) {
    const g = document.createElement("canvas").getContext("2d");
    return g.font = s, g.measureText(i).width;
  }, r = $(() => {
    var p, g;
    const i = (p = ee(n.value).width) != null ? p : 100;
    if (u === "inherit")
      return i;
    if (u == null || u === "dynamic") {
      const y = (g = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? g : 16;
      return Math.max(i, Math.max(...t.value.map((m) => v(m.value))) + 20 + y * 3);
    }
    return u;
  }), d = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ye(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var i = ee(n.value), p = ee(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var p = ee(a.value);
    let g = -p.left + i.left;
    const y = window.document.documentElement.clientWidth;
    g + r.value > y && (g = y - r.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: r.value.toString() + "px",
      top: (-p.top + i.top + i.height).toString() + "px",
      left: g.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: v };
}, kt = ["name"], _t = {
  key: 1,
  class: "extra-select selection"
}, Ot = ["onClick"], St = ["innerHTML"], xt = ["value"], Et = {
  key: 0,
  class: "input-searching"
}, Ct = ["placeholder"], Nt = {
  key: 0,
  class: "allselect-clear"
}, Lt = { class: "row-input" }, At = ["checked"], It = { class: "row-input" }, Ft = ["checked"], Tt = {
  key: 1,
  class: "no-matches"
}, Pt = { key: 2 }, zt = ["onClick"], Mt = { class: "row-input" }, Vt = ["checked"], $t = ["value"], Bt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, jt = /* @__PURE__ */ Object.assign(Bt, {
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
    const e = t, n = $(() => {
      var c, f;
      return (f = (c = e.originalNode) == null ? void 0 : c.multiple) != null ? f : e.multiple;
    }), { options: o, selectedOptions: a, onReset: u } = Pe(e.originalNode, G(e, "options"), G(e, "modelValue"), e.initialValue), { t: s } = Me(e.originalNode, G(e, "localization")), v = (de = e.originalNode) == null ? void 0 : de.classList, r = Object.values((ve = (fe = e.originalNode) == null ? void 0 : fe.style) != null ? ve : {});
    Te(e.originalNode);
    const d = (c, f = null) => {
      if (n.value) {
        let T = f;
        switch (T == null && (T = !a.value.has(c)), T) {
          case !0:
            a.value.set(c, c);
            break;
          case !1:
            a.value.delete(c);
            break;
        }
      } else
        a.value.clear(), f !== !1 && a.value.set(c, c), b.value = !1;
      B(Array.from(a.value.keys()));
    }, { filterText: i, filteredOptions: p, filterValues: g } = $e(o, a, d, e.filterFields, e.hardFilterFields), { searchingFlag: y } = Ve(
      o,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      g,
      e.fetchMode,
      e.fetchOptions
    ), m = w(null), L = w(null), U = w(null), b = w(!1), S = w(null), x = function(c) {
      const f = R(c.target);
      f.push(c.target), !f.includes(m.value) && !f.includes(L.value) && (b.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let c = !1;
        S.value = R(m.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (c = !0), c && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (S.value == null && (S.value = document.querySelector("body")), e.originalNode) {
        for (let f of v)
          f != "extraselect" && m.value.classList.add(f);
        for (let f of r)
          m.value.style[f] = e.originalNode.style[f];
        r.includes("background-color") || (m.value.style.backgroundColor = "white");
        let c = R(m.value, "form").pop();
        c instanceof HTMLElement && c.matches("form") && c.addEventListener("reset", () => setTimeout(u));
      }
      window.document.addEventListener("mousedown", x), window.document.addEventListener("focusin", x);
    }), _e(() => {
      window.document.removeEventListener("mousedown", x), window.document.removeEventListener("focusin", x);
    });
    const { dropdownStyle: A, getTextWidth: I } = Be(o, a, b, m, L, S, e.maxWidth), B = (c) => {
      le(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", c);
    }, W = (c) => {
      E(c, !1), i.value = "";
    }, E = (c, f = null) => {
      f == null && (f = !F.value), f ? (a.value.clear(), o.value.forEach((T) => a.value.set(T.key, T.key))) : a.value.clear(), B(Array.from(a.value.keys()));
    }, O = () => {
      j.value ? p.value.forEach((c) => {
        a.value.has(c.key) && a.value.delete(c.key);
      }) : p.value.forEach((c) => {
        a.value.has(c.key) || a.value.set(c.key, c.key);
      }), B(Array.from(a.value.keys()));
    };
    K(b, (c, f) => {
      c != f && (c ? e.search && le(() => {
        U.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const F = $(() => a.value.size == o.value.length), j = $(() => p.value.reduce((c, f) => c && a.value.has(f.key), !0)), He = $(() => a.value.size == 0), De = $(() => {
      var c, f, T, Q, N;
      if (o.value.length < 0)
        return "";
      if (n.value) {
        if (He.value)
          return s("No selection");
        if (!e.searchableUrl && F.value)
          return $$t("All selected");
        const P = m.value ? getComputedStyle(m.value) : null, Y = ((c = m.value) == null ? void 0 : c.clientWidth) - parseInt(P == null ? void 0 : P.paddingLeft) - parseInt(P == null ? void 0 : P.paddingRight);
        let Z = s(":n selected - ", { n: a.value.size }), pe = !0;
        for (let Qe of a.value)
          if (pe ? pe = !1 : Z += ", ", Z += (T = (f = o.map.get(Qe[0])) == null ? void 0 : f.value) != null ? T : y.value ? s("Loading...") : s("Value not found"), Y < I(Z))
            return a.value.size + s(" selected");
        return Z;
      } else
        for (let P of a.value)
          return (N = (Q = o.map.get(P[0])) == null ? void 0 : Q.value) != null ? N : y.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: Ue, containerProps: We, wrapperProps: Re } = Fe(
      p,
      {
        itemHeight: 32
      }
    );
    return (c, f) => {
      var T, Q;
      return k(), _(q, null, [
        h(n) && h(a).size == 0 ? (k(), _("input", {
          key: 0,
          type: "hidden",
          name: (Q = (T = e.originalNode) == null ? void 0 : T.name) == null ? void 0 : Q.replace("[]", ""),
          value: ""
        }, null, 8, kt)) : z("", !0),
        e.showSelected ? (k(), _("div", _t, [
          (k(!0), _(q, null, te(h(a), (N) => {
            var P;
            return k(), _("div", {
              key: N,
              onClick: (Y) => d(N[0]),
              class: "selection-badge"
            }, [
              he(V((P = h(o).find((Y) => Y.key == N[0])) == null ? void 0 : P.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, St)
            ], 8, Ot);
          }), 128))
        ])) : z("", !0),
        C("input", ne({
          onFocus: f[0] || (f[0] = (N) => b.value = !0),
          onClick: f[1] || (f[1] = (N) => b.value = !0),
          ref_key: "inputNode",
          ref: m,
          value: h(De),
          class: "extra-select extra-select-input",
          readonly: ""
        }, c.$attrs), null, 16, xt),
        S.value ? (k(), oe(se, {
          key: 2,
          to: S.value
        }, [
          ae(C("div", {
            class: Oe(["extra-select dropdown", { searching: h(y) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: Se(h(A))
          }, [
            e.search ? (k(), _("div", Et, [
              ae(C("input", {
                ref_key: "searchNode",
                ref: U,
                class: "extra-select-search",
                "onUpdate:modelValue": f[2] || (f[2] = (N) => xe(i) ? i.value = N : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: h(s)("Search...")
              }, null, 8, Ct), [
                [Ze, h(i)]
              ])
            ])) : z("", !0),
            h(i).length >= e.minChars ? (k(), _(q, { key: 1 }, [
              h(n) ? (k(), _("div", Nt, [
                h(i).length == 0 ? (k(), _("div", {
                  key: 0,
                  onClick: E,
                  class: "all-select"
                }, [
                  C("div", Lt, [
                    C("input", {
                      checked: h(F),
                      type: "checkbox"
                    }, null, 8, At),
                    C("b", null, V(h(s)("Select all")), 1)
                  ])
                ])) : z("", !0),
                h(p).length > 0 && h(i).length > 0 ? (k(), _("div", {
                  key: 1,
                  onClick: O,
                  class: "all-select"
                }, [
                  C("div", It, [
                    C("input", {
                      checked: h(j),
                      type: "checkbox"
                    }, null, 8, Ft),
                    C("b", null, V(h(s)("Select Filtered")), 1)
                  ])
                ])) : z("", !0),
                C("div", {
                  class: "clear",
                  onClick: W
                }, V(h(s)("Clear")), 1)
              ])) : z("", !0),
              h(p).length == 0 ? (k(), _("div", Tt, V(h(s)("No matches found")), 1)) : z("", !0)
            ], 64)) : (k(), _("div", Pt, V(h(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", ne(h(We), { class: "scroller" }), [
              C("div", Ee(Ce(h(Re))), [
                (k(!0), _(q, null, te(h(Ue), (N) => (k(), _("button", {
                  key: N.index,
                  class: "dropdown-row",
                  onClick: Ne((P) => d(N.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", Mt, [
                    h(n) ? (k(), _("input", {
                      key: 0,
                      checked: h(a).has(N.data.key),
                      type: "checkbox"
                    }, null, 8, Vt)) : z("", !0),
                    he(" " + V(N.data.value), 1)
                  ])
                ], 8, zt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Le, b.value]
          ])
        ], 8, ["to"])) : z("", !0),
        e.originalNode ? (k(), oe(se, {
          key: 3,
          to: e.originalNode
        }, [
          (k(!0), _(q, null, te(h(a), (N) => (k(), _("option", {
            key: N[0],
            selected: "selected",
            value: N[0]
          }, null, 8, $t))), 128))
        ], 8, ["to"])) : z("", !0)
      ], 64);
    };
  }
}), qt = {
  key: 0,
  class: "no-matches"
}, Ht = { key: 1 }, Dt = ["onClick"], Ut = { class: "row-input" }, Wt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Rt = /* @__PURE__ */ Object.assign(Wt, {
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
    var I, B, W;
    const e = t, { options: n } = Pe(e.originalNode, G(e, "options"), w([])), { t: o } = Me(e.originalNode, G(e, "localization")), a = (I = e.originalNode) == null ? void 0 : I.classList, u = Object.values((W = (B = e.originalNode) == null ? void 0 : B.style) != null ? W : {});
    Te(e.originalNode);
    const s = (E, O = null) => {
      O === !1 ? v.value = "" : v.value = n.map.get(E).value, y.value = !1;
    }, { filterText: v, filteredOptions: r, filterValues: d } = $e(n, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: i } = Ve(
      n,
      e.url,
      e.searchableUrl,
      v,
      e.minChars,
      d,
      e.fetchMode,
      e.fetchOptions
    ), p = w(null), g = w(null), y = w(!1), m = w(null), L = function(E) {
      const O = R(E.target);
      O.push(E.target), !O.includes(p.value) && !O.includes(g.value) && (y.value = !1);
    };
    ie(() => {
      if (e.dropdownContainer) {
        let E = !1;
        m.value = R(p.value).find((O) => !!(O instanceof Element && (O.matches(e.dropdownContainer) && (E = !0), E && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(O).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let j of a)
          j != "extrasuggest" && p.value.classList.add(j);
        for (let j of u)
          p.value.style[j] = e.originalNode.style[j];
        u.includes("background-color") || (p.value.style.backgroundColor = "white"), v.value = e.originalNode.value, J(() => {
          e.modelValue != null && (v.value = e.modelValue);
        });
        const E = v.value, O = () => {
          v.value = E;
        };
        let F = R(p.value, "form").pop();
        F instanceof HTMLElement && F.matches("form") && F.addEventListener("reset", () => setTimeout(O));
      }
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), _e(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: U } = Be(n, w([]), y, p, g, m, e.maxWidth), b = () => {
      var E;
      e.originalNode && (e.originalNode.value = v.value, (E = e.originalNode) == null || E.dispatchEvent(new Event("change", { bubbles: !0 }))), l("update:modelValue", v.value);
    };
    K(() => y.value, (E) => {
      E === !1 && b();
    });
    const { list: S, containerProps: x, wrapperProps: A } = Fe(
      r,
      {
        itemHeight: 32
      }
    );
    return (E, O) => (k(), _(q, null, [
      ae(C("input", ne({
        onFocus: O[0] || (O[0] = (F) => y.value = !0),
        onClick: O[1] || (O[1] = (F) => y.value = !0),
        ref_key: "inputNode",
        ref: p,
        "onUpdate:modelValue": O[2] || (O[2] = (F) => xe(v) ? v.value = F : null),
        class: "extra-select extra-select-input"
      }, E.$attrs), null, 16), [
        [et, h(v)]
      ]),
      m.value ? (k(), oe(se, {
        key: 0,
        to: m.value
      }, [
        ae(C("div", {
          class: Oe(["extra-select dropdown", { searching: h(i) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Se(h(U))
        }, [
          h(v).length >= e.minChars ? (k(), _(q, { key: 0 }, [
            h(r).length == 0 ? (k(), _("div", qt, V(h(o)("No matches found")), 1)) : z("", !0)
          ], 64)) : (k(), _("div", Ht, V(h(o)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", ne(h(x), { class: "scroller" }), [
            C("div", Ee(Ce(h(A))), [
              (k(!0), _(q, null, te(h(S), (F) => (k(), _("button", {
                key: F.index,
                class: "dropdown-row",
                onClick: Ne((j) => s(F.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", Ut, V(F.data.value), 1)
              ], 8, Dt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, y.value]
        ])
      ], 8, ["to"])) : z("", !0)
    ], 64));
  }
}), Gt = ce, je = {
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
      const n = Ae(jt, l);
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
      const n = Ae(Rt, l);
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
  Gt as loadExtraSelectDefaultLocalization
};
