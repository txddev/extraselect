import { unref as p, getCurrentScope as Je, onScopeDispose as Ke, getCurrentInstance as Xe, onMounted as ce, nextTick as ne, ref as w, shallowRef as Ye, watch as K, computed as B, watchEffect as J, watchPostEffect as Ze, toRef as G, onUnmounted as ke, openBlock as b, createElementBlock as _, Fragment as H, createCommentVNode as z, renderList as le, createTextVNode as me, toDisplayString as $, createElementVNode as x, mergeProps as ae, createBlock as se, Teleport as re, withDirectives as oe, normalizeClass as Se, normalizeStyle as xe, isRef as Ee, vModelText as et, normalizeProps as Ce, guardReactiveProps as Ne, withModifiers as Le, vShow as Ae, vModelDynamic as tt, createApp as Ie } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class W {
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
    return W.has(l, e) ? !1 : (W.put(l, e, !0), o());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = M);
function te(t) {
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
function lt(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
var ye;
const X = typeof window < "u";
X && ((ye = window == null ? void 0 : window.navigator) == null ? void 0 : ye.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function nt(t) {
  return typeof t == "function" ? t() : p(t);
}
function at(t) {
  return t;
}
function ot(t) {
  return Je() ? (Ke(t), !0) : !1;
}
function st(t, l = !0) {
  Xe() ? ce(t) : l ? t() : ne(t);
}
function Fe(t) {
  var l;
  const e = nt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const rt = X ? window : void 0;
X && window.document;
X && window.navigator;
X && window.location;
function it(t, l = !1) {
  const e = w(), o = () => e.value = Boolean(t());
  return o(), st(o, l), e;
}
const ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ue = "__vueuse_ssr_handlers__";
ie[ue] = ie[ue] || {};
ie[ue];
var ge = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, dt = (t, l) => {
  var e = {};
  for (var o in t)
    ut.call(t, o) && l.indexOf(o) < 0 && (e[o] = t[o]);
  if (t != null && ge)
    for (var o of ge(t))
      l.indexOf(o) < 0 && ct.call(t, o) && (e[o] = t[o]);
  return e;
};
function ft(t, l, e = {}) {
  const o = e, { window: n = rt } = o, a = dt(o, ["window"]);
  let r;
  const s = it(() => n && "ResizeObserver" in n), u = () => {
    r && (r.disconnect(), r = void 0);
  }, i = K(() => Fe(t), (f) => {
    u(), s.value && n && f && (r = new ResizeObserver(l), r.observe(f, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), i();
  };
  return ot(d), {
    isSupported: s,
    stop: d
  };
}
function vt(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: o = "content-box" } = e, n = w(l.width), a = w(l.height);
  return ft(t, ([r]) => {
    const s = o === "border-box" ? r.borderBoxSize : o === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (n.value = s.reduce((u, { inlineSize: i }) => u + i, 0), a.value = s.reduce((u, { blockSize: i }) => u + i, 0)) : (n.value = r.contentRect.width, a.value = r.contentRect.height);
  }, e), K(() => Fe(t), (r) => {
    n.value = r ? l.width : 0, a.value = r ? l.height : 0;
  }), {
    width: n,
    height: a
  };
}
var we;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(we || (we = {}));
var pt = Object.defineProperty, be = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, mt = Object.prototype.propertyIsEnumerable, Oe = (t, l, e) => l in t ? pt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, yt = (t, l) => {
  for (var e in l || (l = {}))
    ht.call(l, e) && Oe(t, e, l[e]);
  if (be)
    for (var e of be(l))
      mt.call(l, e) && Oe(t, e, l[e]);
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
yt({
  linear: at
}, gt);
function Te(t, l) {
  const e = w(), o = vt(e), n = w([]), a = Ye(t), r = w({ start: 0, end: 10 }), { itemHeight: s, overscan: u = 5 } = l, i = (O) => {
    if (typeof s == "number")
      return Math.ceil(O / s);
    const { start: A = 0 } = r.value;
    let k = 0, E = 0;
    for (let F = A; F < a.value.length; F++)
      if (k += s(F), k >= O) {
        E = F;
        break;
      }
    return E - A;
  }, d = (O) => {
    if (typeof s == "number")
      return Math.floor(O / s) + 1;
    let A = 0, k = 0;
    for (let E = 0; E < a.value.length; E++)
      if (A += s(E), A >= O) {
        k = E;
        break;
      }
    return k + 1;
  }, f = () => {
    const O = e.value;
    if (O) {
      const A = d(O.scrollTop), k = i(O.clientHeight), E = A - u, F = A + k + u;
      r.value = {
        start: E < 0 ? 0 : E,
        end: F > a.value.length ? a.value.length : F
      }, n.value = a.value.slice(r.value.start, r.value.end).map((D, q) => ({
        data: D,
        index: q + r.value.start
      }));
    }
  };
  K([o.width, o.height, t], () => {
    f();
  });
  const h = B(() => typeof s == "number" ? a.value.length * s : a.value.reduce((O, A, k) => O + s(k), 0)), y = (O) => typeof s == "number" ? O * s : a.value.slice(0, O).reduce((k, E, F) => k + s(F), 0), g = (O) => {
    e.value && (e.value.scrollTop = y(O), f());
  }, m = B(() => y(r.value.start)), I = B(() => ({
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
        f();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: I
  };
}
const U = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, wt = (t, l, e) => {
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
        let u = { value: a, key: n, data: r };
        t.value.push(u), t.map.set(u.key, u);
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
let bt = 1;
const Ve = (t) => {
  t && (t.style.display = "none", lt(t));
}, Pe = (t, l, e, o) => {
  var u;
  const n = w(/* @__PURE__ */ new Map());
  J(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let i of e.value)
        n.value.set(i, i);
    }
  });
  const a = w([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let i of a.value)
        a.map.set(i.key, i);
  }, J(() => {
    l.value && (a.value = l.value.map((i) => ({ ...i, key: U(i.key) })), a.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let i of Array.apply(null, t.selectedOptions).map((d) => U(d.value)).filter((d) => d != null))
        n.value.set(i, i);
      a.value = Array.apply(null, t.options).reduce((i, d) => (i.push({ value: d.text, key: U(d.value), data: Object.assign({}, d.dataset) }), i), []);
    }
    if (t.matches("input")) {
      let i = t.value;
      i != null && i.length > 0 && (a.value = [{ value: i, key: i }]);
    }
    a.rebuildMap();
  }
  if (Array.isArray(o))
    for (let i of o)
      n.value.set(U(i), U(i));
  else
    o != null && n.value.set(U(o), U(o));
  wt(a, n, (u = t == null ? void 0 : t.id) != null ? u : "extraselect_" + (++bt).toString());
  const r = [];
  return n.value.forEach((i, d) => {
    r.push([d, i]);
  }), { options: a, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [i, d] of r)
      n.value.set(i, d);
  } };
};
w({});
function Ot(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const de = (t = null) => {
  var o, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), ze(w(e), "defaults");
}, ze = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, de());
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
const Me = (t, l) => {
  var o;
  return ze(l, (o = t == null ? void 0 : t.id) != null ? o : "extraselect_" + (++_t).toString()), { propLocalization: l, t: (n, a = {}) => {
    var s;
    let r = (s = l.value[n]) != null ? s : window.ExtraSelectLocalization.defaults.get(n);
    return r == null && (window.ExtraSelectLocalization.defaults.push(n, n), r = n), Ot(r, a);
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
}, $e = (t, l, e, o, n, a, r = "limited", s = {}) => {
  const u = w(0), i = w(!1), d = B(() => i.value || u.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const f = [];
      J((h) => {
        if (o.value.length >= n) {
          let y = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              y = !f.includes(o.value);
              break;
            case "complete":
              y = f.reduce((g, m) => g && !o.value.startsWith(m), !0);
              break;
          }
          if (y) {
            i.value = !0;
            const g = setTimeout(() => {
              f.push(o.value), u.value += 1, s.body = { ...s.body, ...a.value }, _e(l, o.value, s).then((m) => {
                t.actions.addRange(m), t.actions.sort(), u.value -= 1, i.value = !1;
              });
            }, 500);
            h(() => {
              clearTimeout(g);
            });
          }
        }
      });
    } else
      _e(l, null, s).then((f) => {
        t.actions.addRange(f), t.actions.sort();
      });
  return { searchingFlag: d };
}, Be = (t, l, e, o = [], n = []) => {
  const a = w(""), r = w([]), s = w({}), u = { ...o.reduce((d, f) => (d[f] = !1, d), {}), ...n.reduce((d, f) => (d[f] = !0, d), {}) };
  for (let d in u) {
    let f = u[d], h = document.getElementById(d);
    s.value[d] = h == null ? void 0 : h.value, h && h.addEventListener("change", (y) => {
      s.value[d] = y.target.value, f && ne(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            r.value.find((m) => m.key == g) || e(g, !1);
        else
          r.value.find((g) => g.key == a.value) || e(a.value, !1);
      });
    });
  }
  const i = function(d, f) {
    let h = d.value;
    return Object.keys(s.value).length > 0 && (h = h.filter((y) => {
      var g, m;
      for (let I in s.value)
        if ((u[I] ? !0 : ((g = s.value[I]) != null ? g : "").length > 0) && ((m = y.data) == null ? void 0 : m.hasOwnProperty(I)) && y.data[I] != s.value[I])
          return !1;
      return !0;
    })), f.length > 0 && (h = h.filter((y) => y.value.toLowerCase().includes(f.toLowerCase()))), h;
  };
  return J(() => {
    r.value = i(t, a.value);
  }), { filterText: a, filteredOptions: r, filterValues: s };
}, je = (t, l, e, o, n, a, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, u = function(f) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = s, y.measureText(f).width;
  }, i = B(() => {
    var h, y;
    const f = (h = te(o.value).width) != null ? h : 100;
    if (r === "inherit")
      return f;
    if (r == null || r === "dynamic") {
      const g = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(f, Math.max(...t.value.map((m) => u(m.value))) + 20 + g * 3);
    }
    return r;
  }), d = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ze(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var f = te(o.value), h = te(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var h = te(a.value);
    let y = -h.left + f.left;
    const g = window.document.documentElement.clientWidth;
    y + i.value > g && (y = g - i.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-h.top + f.top + f.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: u };
}, kt = ["name"], St = {
  key: 1,
  class: "extra-select selection"
}, xt = ["onClick"], Et = ["innerHTML"], Ct = ["value", "disabled"], Nt = {
  key: 0,
  class: "input-searching"
}, Lt = ["placeholder"], At = {
  key: 0,
  class: "allselect-clear"
}, It = { class: "row-input" }, Ft = ["checked"], Tt = { class: "row-input" }, Vt = ["checked"], Pt = {
  key: 1,
  class: "no-matches"
}, zt = { key: 2 }, Mt = ["onClick"], $t = { class: "row-input" }, Bt = ["checked"], jt = ["value"], qt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Ht = /* @__PURE__ */ Object.assign(qt, {
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
    var fe, ve, pe;
    const e = t, o = B(() => {
      var c, v;
      return (v = (c = e.originalNode) == null ? void 0 : c.multiple) != null ? v : e.multiple;
    }), { options: n, selectedOptions: a, onReset: r } = Pe(e.originalNode, G(e, "options"), G(e, "modelValue"), e.initialValue), { t: s } = Me(e.originalNode, G(e, "localization")), u = (fe = e.originalNode) == null ? void 0 : fe.classList, i = Object.values((pe = (ve = e.originalNode) == null ? void 0 : ve.style) != null ? pe : {});
    Ve(e.originalNode);
    const d = (c, v = null) => {
      if (o.value) {
        let T = v;
        switch (T == null && (T = !a.value.has(c)), T) {
          case !0:
            a.value.set(c, c);
            break;
          case !1:
            a.value.delete(c);
            break;
        }
      } else
        a.value.clear(), v !== !1 && a.value.set(c, c), O.value = !1;
      q(Array.from(a.value.keys()));
    }, { filterText: f, filteredOptions: h, filterValues: y } = Be(n, a, d, e.filterFields, e.hardFilterFields), { searchingFlag: g } = $e(
      n,
      e.url,
      e.searchableUrl,
      f,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), m = w(null), I = w(null), j = w(null), O = w(!1);
    function A(c) {
      e.disabled || (O.value = c);
    }
    const k = w(null), E = function(c) {
      const v = Q(c.target);
      v.push(c.target), !v.includes(m.value) && !v.includes(I.value) && (O.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let c = !1;
        k.value = Q(m.value).find((v) => !!(v instanceof Element && (v.matches(e.dropdownContainer) && (c = !0), c && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(v).position))));
      }
      if (k.value == null && (k.value = document.querySelector("body")), e.originalNode) {
        for (let v of u)
          v != "extraselect" && m.value.classList.add(v);
        for (let v of i)
          m.value.style[v] = e.originalNode.style[v];
        let c = Q(m.value, "form").pop();
        c instanceof HTMLElement && c.matches("form") && c.addEventListener("reset", () => setTimeout(r)), e.originalNode.toggleValue = d, e.originalNode.setValues = (v) => {
          a.value.clear();
          for (let T of v)
            d(T);
        };
      }
      window.document.addEventListener("mousedown", E), window.document.addEventListener("focusin", E);
    }), ke(() => {
      window.document.removeEventListener("mousedown", E), window.document.removeEventListener("focusin", E);
    });
    const { dropdownStyle: F, getTextWidth: D } = je(n, a, O, m, I, k, e.maxWidth), q = (c) => {
      ne(
        () => {
          var v;
          return (v = e.originalNode) == null ? void 0 : v.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", c);
    }, Y = (c) => {
      L(c, !1), f.value = "";
    }, L = (c, v = null) => {
      v == null && (v = !C.value), v ? (a.value.clear(), n.value.forEach((T) => a.value.set(T.key, T.key))) : a.value.clear(), q(Array.from(a.value.keys()));
    }, S = () => {
      V.value ? h.value.forEach((c) => {
        a.value.has(c.key) && a.value.delete(c.key);
      }) : h.value.forEach((c) => {
        a.value.has(c.key) || a.value.set(c.key, c.key);
      }), q(Array.from(a.value.keys()));
    };
    K(O, (c, v) => {
      c != v && (c ? e.search && ne(() => {
        j.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const C = B(() => a.value.size == n.value.length), V = B(() => h.value.reduce((c, v) => c && a.value.has(v.key), !0)), De = B(() => a.value.size == 0), Ue = B(() => {
      var c, v, T, R, N;
      if (n.value.length < 0)
        return "";
      if (o.value) {
        if (De.value)
          return s("No selection");
        if (!e.searchableUrl && C.value)
          return s("All selected");
        const P = m.value ? getComputedStyle(m.value) : null, Z = ((c = m.value) == null ? void 0 : c.clientWidth) - parseInt(P == null ? void 0 : P.paddingLeft) - parseInt(P == null ? void 0 : P.paddingRight);
        let ee = s(":n selected - ", { n: a.value.size }), he = !0;
        for (let Ge of a.value)
          if (he ? he = !1 : ee += ", ", ee += (T = (v = n.map.get(Ge[0])) == null ? void 0 : v.value) != null ? T : g.value ? s("Loading...") : s("Value not found"), Z < D(ee))
            return a.value.size + s(" selected");
        return ee;
      } else
        for (let P of a.value)
          return (N = (R = n.map.get(P[0])) == null ? void 0 : R.value) != null ? N : g.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: We, containerProps: Qe, wrapperProps: Re } = Te(
      h,
      {
        itemHeight: 32
      }
    );
    return (c, v) => {
      var T, R;
      return b(), _(H, null, [
        p(o) && p(a).size == 0 ? (b(), _("input", {
          key: 0,
          type: "hidden",
          name: (R = (T = e.originalNode) == null ? void 0 : T.name) == null ? void 0 : R.replace("[]", ""),
          value: ""
        }, null, 8, kt)) : z("", !0),
        e.showSelected ? (b(), _("div", St, [
          (b(!0), _(H, null, le(p(a), (N) => {
            var P;
            return b(), _("div", {
              key: N,
              onClick: (Z) => d(N[0]),
              class: "selection-badge"
            }, [
              me($((P = p(n).find((Z) => Z.key == N[0])) == null ? void 0 : P.value) + " ", 1),
              x("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Et)
            ], 8, xt);
          }), 128))
        ])) : z("", !0),
        x("input", ae({
          onFocus: v[0] || (v[0] = (N) => A(!0)),
          onClick: v[1] || (v[1] = (N) => A(!0)),
          ref_key: "inputNode",
          ref: m,
          value: p(Ue),
          class: "extra-select extra-select-input",
          readonly: ""
        }, c.$attrs, { disabled: t.disabled }), null, 16, Ct),
        k.value ? (b(), se(re, {
          key: 2,
          to: k.value
        }, [
          oe(x("div", {
            class: Se(["extra-select dropdown", { searching: p(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: I,
            style: xe(p(F))
          }, [
            e.search ? (b(), _("div", Nt, [
              oe(x("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": v[2] || (v[2] = (N) => Ee(f) ? f.value = N : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(s)("Search...")
              }, null, 8, Lt), [
                [et, p(f)]
              ])
            ])) : z("", !0),
            p(f).length >= e.minChars ? (b(), _(H, { key: 1 }, [
              p(o) ? (b(), _("div", At, [
                p(f).length == 0 ? (b(), _("div", {
                  key: 0,
                  onClick: L,
                  class: "all-select"
                }, [
                  x("div", It, [
                    x("input", {
                      checked: p(C),
                      type: "checkbox"
                    }, null, 8, Ft),
                    x("b", null, $(p(s)("Select all")), 1)
                  ])
                ])) : z("", !0),
                p(h).length > 0 && p(f).length > 0 ? (b(), _("div", {
                  key: 1,
                  onClick: S,
                  class: "all-select"
                }, [
                  x("div", Tt, [
                    x("input", {
                      checked: p(V),
                      type: "checkbox"
                    }, null, 8, Vt),
                    x("b", null, $(p(s)("Select Filtered")), 1)
                  ])
                ])) : z("", !0),
                x("div", {
                  class: "clear",
                  onClick: Y
                }, $(p(s)("Clear")), 1)
              ])) : z("", !0),
              p(h).length == 0 ? (b(), _("div", Pt, $(p(s)("No matches found")), 1)) : z("", !0)
            ], 64)) : (b(), _("div", zt, $(p(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            x("div", ae(p(Qe), { class: "scroller" }), [
              x("div", Ce(Ne(p(Re))), [
                (b(!0), _(H, null, le(p(We), (N) => (b(), _("button", {
                  key: N.index,
                  class: "dropdown-row",
                  onClick: Le((P) => d(N.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", $t, [
                    p(o) ? (b(), _("input", {
                      key: 0,
                      checked: p(a).has(N.data.key),
                      type: "checkbox"
                    }, null, 8, Bt)) : z("", !0),
                    me(" " + $(N.data.value), 1)
                  ])
                ], 8, Mt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Ae, O.value]
          ])
        ], 8, ["to"])) : z("", !0),
        e.originalNode ? (b(), se(re, {
          key: 3,
          to: e.originalNode
        }, [
          (b(!0), _(H, null, le(p(a), (N) => (b(), _("option", {
            key: N[0],
            selected: "selected",
            value: N[0]
          }, null, 8, jt))), 128))
        ], 8, ["to"])) : z("", !0)
      ], 64);
    };
  }
}), Dt = ["disabled"], Ut = {
  key: 0,
  class: "no-matches"
}, Wt = { key: 1 }, Qt = ["onClick"], Rt = { class: "row-input" }, Gt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Jt = /* @__PURE__ */ Object.assign(Gt, {
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
    var D, q, Y;
    const e = t, { options: o } = Pe(e.originalNode, G(e, "options"), w([])), { t: n } = Me(e.originalNode, G(e, "localization")), a = (D = e.originalNode) == null ? void 0 : D.classList, r = Object.values((Y = (q = e.originalNode) == null ? void 0 : q.style) != null ? Y : {});
    Ve(e.originalNode);
    const s = (L, S = null) => {
      S === !1 ? u.value = "" : u.value = o.map.get(L).value, g.value = !1;
    }, { filterText: u, filteredOptions: i, filterValues: d } = Be(o, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: f } = $e(
      o,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      d,
      e.fetchMode,
      e.fetchOptions
    ), h = w(null), y = w(null), g = w(!1), m = w(null);
    function I(L) {
      e.disabled || (g.value = L);
    }
    const j = function(L) {
      const S = Q(L.target);
      S.push(L.target), !S.includes(h.value) && !S.includes(y.value) && (g.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let C = !1;
        m.value = Q(h.value).find((V) => !!(V instanceof Element && (V.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(V).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let V of a)
          V != "extrasuggest" && h.value.classList.add(V);
        for (let V of r)
          h.value.style[V] = e.originalNode.style[V];
        u.value = e.originalNode.value;
        let C = Q(h.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          A(!0);
        });
      }
      J(() => {
        e.modelValue != null && (u.value = e.modelValue);
      });
      const L = u.value, S = () => {
        u.value = L;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ke(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: O } = je(o, w([]), g, h, y, m, e.maxWidth), A = (L = !1) => {
      var S;
      e.originalNode && (L ? u.value = e.originalNode.value : (e.originalNode.value = u.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), l("update:modelValue", u.value);
    };
    K(() => g.value, (L) => {
      L === !1 && A();
    });
    const { list: k, containerProps: E, wrapperProps: F } = Te(
      i,
      {
        itemHeight: 32
      }
    );
    return (L, S) => (b(), _(H, null, [
      oe(x("input", ae({
        onFocus: S[0] || (S[0] = (C) => I(!0)),
        onClick: S[1] || (S[1] = (C) => I(!0)),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => Ee(u) ? u.value = C : null),
        class: "extra-select extra-select-input"
      }, L.$attrs, { disabled: t.disabled }), null, 16, Dt), [
        [tt, p(u)]
      ]),
      m.value ? (b(), se(re, {
        key: 0,
        to: m.value
      }, [
        oe(x("div", {
          class: Se(["extra-select dropdown", { searching: p(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: xe(p(O))
        }, [
          p(u).length >= e.minChars ? (b(), _(H, { key: 0 }, [
            p(i).length == 0 ? (b(), _("div", Ut, $(p(n)("No matches found")), 1)) : z("", !0)
          ], 64)) : (b(), _("div", Wt, $(p(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          x("div", ae(p(E), { class: "scroller" }), [
            x("div", Ce(Ne(p(F))), [
              (b(!0), _(H, null, le(p(k), (C) => (b(), _("button", {
                key: C.index,
                class: "dropdown-row",
                onClick: Le((V) => s(C.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", Rt, $(C.data.value), 1)
              ], 8, Qt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ae, g.value]
        ])
      ], 8, ["to"])) : z("", !0)
    ], 64));
  }
}), Xt = de, qe = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      qe.bindNew(t);
    });
  },
  bindNew(t) {
    W.lock(t, "extra-select", () => {
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
      const o = Ie(Ht, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), W.remove(t, "extra-select");
      });
    });
  }
}, He = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      He.bindNew(t);
    });
  },
  bindNew(t) {
    W.lock(t, "extra-suggest", () => {
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
      const o = Ie(Jt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), W.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  qe.init(), He.init(), de();
});
export {
  qe as ExtraSelect,
  He as ExtraSuggest,
  Xt as loadExtraSelectDefaultLocalization
};
