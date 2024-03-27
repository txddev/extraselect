import { unref as p, getCurrentScope as Je, onScopeDispose as Ke, getCurrentInstance as Xe, onMounted as ce, nextTick as ne, ref as w, shallowRef as Ye, watch as W, computed as B, watchEffect as K, watchPostEffect as Ze, toRef as J, onUnmounted as _e, openBlock as b, createElementBlock as S, Fragment as H, createCommentVNode as z, renderList as le, createTextVNode as me, toDisplayString as $, createElementVNode as x, mergeProps as ae, createBlock as se, Teleport as re, withDirectives as oe, normalizeClass as ke, normalizeStyle as xe, isRef as Ee, vModelText as et, normalizeProps as Ce, guardReactiveProps as Ne, withModifiers as Le, vShow as Ae, vModelDynamic as tt, createApp as Ie } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class Q {
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
    return Q.has(l, e) ? !1 : (Q.put(l, e, !0), o());
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
function R(t, l) {
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
function Te(t) {
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
  }, i = W(() => Te(t), (c) => {
    u(), s.value && n && c && (r = new ResizeObserver(l), r.observe(c, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), i();
  };
  return ot(f), {
    isSupported: s,
    stop: f
  };
}
function vt(t, l = { width: 0, height: 0 }, e = {}) {
  const { box: o = "content-box" } = e, n = w(l.width), a = w(l.height);
  return ft(t, ([r]) => {
    const s = o === "border-box" ? r.borderBoxSize : o === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (n.value = s.reduce((u, { inlineSize: i }) => u + i, 0), a.value = s.reduce((u, { blockSize: i }) => u + i, 0)) : (n.value = r.contentRect.width, a.value = r.contentRect.height);
  }, e), W(() => Te(t), (r) => {
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
function Fe(t, l) {
  const e = w(), o = vt(e), n = w([]), a = Ye(t), r = w({ start: 0, end: 10 }), { itemHeight: s, overscan: u = 5 } = l, i = (O) => {
    if (typeof s == "number")
      return Math.ceil(O / s);
    const { start: A = 0 } = r.value;
    let _ = 0, E = 0;
    for (let T = A; T < a.value.length; T++)
      if (_ += s(T), _ >= O) {
        E = T;
        break;
      }
    return E - A;
  }, f = (O) => {
    if (typeof s == "number")
      return Math.floor(O / s) + 1;
    let A = 0, _ = 0;
    for (let E = 0; E < a.value.length; E++)
      if (A += s(E), A >= O) {
        _ = E;
        break;
      }
    return _ + 1;
  }, c = () => {
    const O = e.value;
    if (O) {
      const A = f(O.scrollTop), _ = i(O.clientHeight), E = A - u, T = A + _ + u;
      r.value = {
        start: E < 0 ? 0 : E,
        end: T > a.value.length ? a.value.length : T
      }, n.value = a.value.slice(r.value.start, r.value.end).map((D, q) => ({
        data: D,
        index: q + r.value.start
      }));
    }
  };
  W([o.width, o.height, t], () => {
    c();
  });
  const h = B(() => typeof s == "number" ? a.value.length * s : a.value.reduce((O, A, _) => O + s(_), 0)), y = (O) => typeof s == "number" ? O * s : a.value.slice(0, O).reduce((_, E, T) => _ + s(T), 0), g = (O) => {
    e.value && (e.value.scrollTop = y(O), c());
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
        c();
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
  K(() => {
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
  }, K(() => {
    l.value && (a.value = l.value.map((i) => ({ ...i, key: U(i.key) })), a.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let i of Array.apply(null, t.selectedOptions).map((f) => U(f.value)).filter((f) => f != null))
        n.value.set(i, i);
      a.value = Array.apply(null, t.options).reduce((i, f) => (i.push({ value: f.text, key: U(f.value), data: Object.assign({}, f.dataset) }), i), []);
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
  return n.value.forEach((i, f) => {
    r.push([f, i]);
  }), { options: a, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [i, f] of r)
      n.value.set(i, f);
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
let St = 0;
const Me = (t, l) => {
  var o;
  return ze(l, (o = t == null ? void 0 : t.id) != null ? o : "extraselect_" + (++St).toString()), { propLocalization: l, t: (n, a = {}) => {
    var s;
    let r = (s = l.value[n]) != null ? s : window.ExtraSelectLocalization.defaults.get(n);
    return r == null && (window.ExtraSelectLocalization.defaults.push(n, n), r = n), Ot(r, a);
  } };
}, Se = async function(t, l = null, e = {}) {
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
  const u = w(0), i = w(!1), f = B(() => i.value || u.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const c = [];
      K((h) => {
        if (o.value.length >= n) {
          let y = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              y = !c.includes(o.value);
              break;
            case "complete":
              y = c.reduce((g, m) => g && !o.value.startsWith(m), !0);
              break;
          }
          if (y) {
            i.value = !0;
            const g = setTimeout(() => {
              c.push(o.value), u.value += 1, s.body = { ...s.body, ...a.value }, Se(l, o.value, s).then((m) => {
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
      Se(l, null, s).then((c) => {
        t.actions.addRange(c), t.actions.sort();
      });
  return { searchingFlag: f };
}, Be = (t, l, e, o = [], n = []) => {
  const a = w(""), r = w([]), s = w({}), u = { ...o.reduce((f, c) => (f[c] = !1, f), {}), ...n.reduce((f, c) => (f[c] = !0, f), {}) };
  for (let f in u) {
    let c = u[f], h = document.getElementById(f);
    s.value[f] = h == null ? void 0 : h.value, h && h.addEventListener("change", (y) => {
      s.value[f] = y.target.value, c && ne(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            r.value.find((m) => m.key == g) || e(g, !1);
        else
          r.value.find((g) => g.key == a.value) || e(a.value, !1);
      });
    });
  }
  const i = function(f, c) {
    let h = f.value;
    return Object.keys(s.value).length > 0 && (h = h.filter((y) => {
      var g, m;
      for (let I in s.value)
        if ((u[I] ? !0 : ((g = s.value[I]) != null ? g : "").length > 0) && ((m = y.data) == null ? void 0 : m.hasOwnProperty(I)) && y.data[I] != s.value[I])
          return !1;
      return !0;
    })), c.length > 0 && (h = h.filter((y) => y.value.toLowerCase().includes(c.toLowerCase()))), h;
  };
  return K(() => {
    r.value = i(t, a.value);
  }), { filterText: a, filteredOptions: r, filterValues: s };
}, je = (t, l, e, o, n, a, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, u = function(c) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = s, y.measureText(c).width;
  }, i = B(() => {
    var h, y;
    const c = (h = te(o.value).width) != null ? h : 100;
    if (r === "inherit")
      return c;
    if (r == null || r === "dynamic") {
      const g = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(c, Math.max(...t.value.map((m) => u(m.value))) + 20 + g * 3);
    }
    return r;
  }), f = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ze(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var c = te(o.value), h = te(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var h = te(a.value);
    let y = -h.left + c.left;
    const g = window.document.documentElement.clientWidth;
    y + i.value > g && (y = g - i.value), f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-h.top + c.top + c.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: f, getTextWidth: u };
}, _t = ["name"], kt = {
  key: 1,
  class: "extra-select selection"
}, xt = ["onClick"], Et = ["innerHTML"], Ct = ["value", "disabled"], Nt = {
  key: 0,
  class: "input-searching"
}, Lt = ["placeholder"], At = {
  key: 0,
  class: "allselect-clear"
}, It = { class: "row-input" }, Tt = ["checked"], Ft = { class: "row-input" }, Vt = ["checked"], Pt = {
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
      var d, v;
      return (v = (d = e.originalNode) == null ? void 0 : d.multiple) != null ? v : e.multiple;
    }), { options: n, selectedOptions: a, onReset: r } = Pe(e.originalNode, J(e, "options"), J(e, "modelValue"), e.initialValue), { t: s } = Me(e.originalNode, J(e, "localization")), u = (fe = e.originalNode) == null ? void 0 : fe.classList, i = Object.values((pe = (ve = e.originalNode) == null ? void 0 : ve.style) != null ? pe : {});
    Ve(e.originalNode);
    const f = (d, v = null) => {
      if (o.value) {
        let F = v;
        switch (F == null && (F = !a.value.has(d)), F) {
          case !0:
            a.value.set(d, d);
            break;
          case !1:
            a.value.delete(d);
            break;
        }
      } else
        a.value.clear(), v !== !1 && a.value.set(d, d), O.value = !1;
      q(Array.from(a.value.keys()));
    }, { filterText: c, filteredOptions: h, filterValues: y } = Be(n, a, f, e.filterFields, e.hardFilterFields), { searchingFlag: g } = $e(
      n,
      e.url,
      e.searchableUrl,
      c,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), m = w(null), I = w(null), j = w(null), O = w(!1);
    function A(d) {
      e.disabled || (O.value = d);
    }
    W(c, () => {
      I.value.querySelector(".scroller").scrollTop = 0;
    });
    const _ = w(null), E = function(d) {
      const v = R(d.target);
      v.push(d.target), !v.includes(m.value) && !v.includes(I.value) && (O.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let d = !1;
        _.value = R(m.value).find((v) => !!(v instanceof Element && (v.matches(e.dropdownContainer) && (d = !0), d && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(v).position))));
      }
      if (_.value == null && (_.value = document.querySelector("body")), e.originalNode) {
        for (let v of u)
          v != "extraselect" && m.value.classList.add(v);
        for (let v of i)
          m.value.style[v] = e.originalNode.style[v];
        let d = R(m.value, "form").pop();
        d instanceof HTMLElement && d.matches("form") && d.addEventListener("reset", () => setTimeout(r)), e.originalNode.toggleValue = f, e.originalNode.setValues = (v) => {
          a.value.clear();
          for (let F of v)
            f(F);
        };
      }
      window.document.addEventListener("mousedown", E), window.document.addEventListener("focusin", E);
    }), _e(() => {
      window.document.removeEventListener("mousedown", E), window.document.removeEventListener("focusin", E);
    });
    const { dropdownStyle: T, getTextWidth: D } = je(n, a, O, m, I, _, e.maxWidth), q = (d) => {
      ne(
        () => {
          var v;
          return (v = e.originalNode) == null ? void 0 : v.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", d);
    }, Y = (d) => {
      L(d, !1), c.value = "";
    }, L = (d, v = null) => {
      v == null && (v = !C.value), v ? (a.value.clear(), n.value.forEach((F) => a.value.set(F.key, F.key))) : a.value.clear(), q(Array.from(a.value.keys()));
    }, k = () => {
      V.value ? h.value.forEach((d) => {
        a.value.has(d.key) && a.value.delete(d.key);
      }) : h.value.forEach((d) => {
        a.value.has(d.key) || a.value.set(d.key, d.key);
      }), q(Array.from(a.value.keys()));
    };
    W(O, (d, v) => {
      d != v && (d ? e.search && ne(() => {
        j.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const C = B(() => a.value.size == n.value.length), V = B(() => h.value.reduce((d, v) => d && a.value.has(v.key), !0)), De = B(() => a.value.size == 0), Ue = B(() => {
      var d, v, F, G, N;
      if (n.value.length < 0)
        return "";
      if (o.value) {
        if (De.value)
          return s("No selection");
        if (!e.searchableUrl && C.value)
          return s("All selected");
        const P = m.value ? getComputedStyle(m.value) : null, Z = ((d = m.value) == null ? void 0 : d.clientWidth) - parseInt(P == null ? void 0 : P.paddingLeft) - parseInt(P == null ? void 0 : P.paddingRight);
        let ee = s(":n selected - ", { n: a.value.size }), he = !0;
        for (let Ge of a.value)
          if (he ? he = !1 : ee += ", ", ee += (F = (v = n.map.get(Ge[0])) == null ? void 0 : v.value) != null ? F : g.value ? s("Loading...") : s("Value not found"), Z < D(ee))
            return a.value.size + s(" selected");
        return ee;
      } else
        for (let P of a.value)
          return (N = (G = n.map.get(P[0])) == null ? void 0 : G.value) != null ? N : g.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: We, containerProps: Qe, wrapperProps: Re } = Fe(
      h,
      {
        itemHeight: 32
      }
    );
    return (d, v) => {
      var F, G;
      return b(), S(H, null, [
        p(o) && p(a).size == 0 ? (b(), S("input", {
          key: 0,
          type: "hidden",
          name: (G = (F = e.originalNode) == null ? void 0 : F.name) == null ? void 0 : G.replace("[]", ""),
          value: ""
        }, null, 8, _t)) : z("", !0),
        e.showSelected ? (b(), S("div", kt, [
          (b(!0), S(H, null, le(p(a), (N) => {
            var P;
            return b(), S("div", {
              key: N,
              onClick: (Z) => f(N[0]),
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
        }, d.$attrs, { disabled: t.disabled }), null, 16, Ct),
        _.value ? (b(), se(re, {
          key: 2,
          to: _.value
        }, [
          oe(x("div", {
            class: ke(["extra-select dropdown", { searching: p(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: I,
            style: xe(p(T))
          }, [
            e.search ? (b(), S("div", Nt, [
              oe(x("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": v[2] || (v[2] = (N) => Ee(c) ? c.value = N : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(s)("Search...")
              }, null, 8, Lt), [
                [et, p(c)]
              ])
            ])) : z("", !0),
            p(c).length >= e.minChars ? (b(), S(H, { key: 1 }, [
              p(o) ? (b(), S("div", At, [
                p(c).length == 0 ? (b(), S("div", {
                  key: 0,
                  onClick: L,
                  class: "all-select"
                }, [
                  x("div", It, [
                    x("input", {
                      checked: p(C),
                      type: "checkbox"
                    }, null, 8, Tt),
                    x("b", null, $(p(s)("Select all")), 1)
                  ])
                ])) : z("", !0),
                p(h).length > 0 && p(c).length > 0 ? (b(), S("div", {
                  key: 1,
                  onClick: k,
                  class: "all-select"
                }, [
                  x("div", Ft, [
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
              p(h).length == 0 ? (b(), S("div", Pt, $(p(s)("No matches found")), 1)) : z("", !0)
            ], 64)) : (b(), S("div", zt, $(p(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            x("div", ae(p(Qe), { class: "scroller" }), [
              x("div", Ce(Ne(p(Re))), [
                (b(!0), S(H, null, le(p(We), (N) => (b(), S("button", {
                  key: N.index,
                  class: "dropdown-row",
                  onClick: Le((P) => f(N.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  x("div", $t, [
                    p(o) ? (b(), S("input", {
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
          (b(!0), S(H, null, le(p(a), (N) => (b(), S("option", {
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
    const e = t, { options: o } = Pe(e.originalNode, J(e, "options"), w([])), { t: n } = Me(e.originalNode, J(e, "localization")), a = (D = e.originalNode) == null ? void 0 : D.classList, r = Object.values((Y = (q = e.originalNode) == null ? void 0 : q.style) != null ? Y : {});
    Ve(e.originalNode);
    const s = (L, k = null) => {
      k === !1 ? u.value = "" : u.value = o.map.get(L).value, g.value = !1;
    }, { filterText: u, filteredOptions: i, filterValues: f } = Be(o, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: c } = $e(
      o,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      f,
      e.fetchMode,
      e.fetchOptions
    ), h = w(null), y = w(null), g = w(!1), m = w(null);
    function I(L) {
      e.disabled || (g.value = L);
    }
    W(u, () => {
      y.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = function(L) {
      const k = R(L.target);
      k.push(L.target), !k.includes(h.value) && !k.includes(y.value) && (g.value = !1);
    };
    ce(() => {
      if (e.dropdownContainer) {
        let C = !1;
        m.value = R(h.value).find((V) => !!(V instanceof Element && (V.matches(e.dropdownContainer) && (C = !0), C && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(V).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let V of a)
          V != "extrasuggest" && h.value.classList.add(V);
        for (let V of r)
          h.value.style[V] = e.originalNode.style[V];
        u.value = e.originalNode.value;
        let C = R(h.value, "form").pop();
        C instanceof HTMLElement && C.matches("form") && C.addEventListener("reset", () => setTimeout(k)), e.originalNode.addEventListener("change", () => {
          A(!0);
        });
      }
      K(() => {
        e.modelValue != null && (u.value = e.modelValue);
      });
      const L = u.value, k = () => {
        u.value = L;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), _e(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: O } = je(o, w([]), g, h, y, m, e.maxWidth), A = (L = !1) => {
      var k;
      e.originalNode && (L ? u.value = e.originalNode.value : (e.originalNode.value = u.value, (k = e.originalNode) == null || k.dispatchEvent(new Event("change", { bubbles: !0 })))), l("update:modelValue", u.value);
    };
    W(() => g.value, (L) => {
      L === !1 && A();
    });
    const { list: _, containerProps: E, wrapperProps: T } = Fe(
      i,
      {
        itemHeight: 32
      }
    );
    return (L, k) => (b(), S(H, null, [
      oe(x("input", ae({
        onFocus: k[0] || (k[0] = (C) => I(!0)),
        onClick: k[1] || (k[1] = (C) => I(!0)),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": k[2] || (k[2] = (C) => Ee(u) ? u.value = C : null),
        class: "extra-select extra-select-input"
      }, L.$attrs, { disabled: t.disabled }), null, 16, Dt), [
        [tt, p(u)]
      ]),
      m.value ? (b(), se(re, {
        key: 0,
        to: m.value
      }, [
        oe(x("div", {
          class: ke(["extra-select dropdown", { searching: p(c) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: xe(p(O))
        }, [
          p(u).length >= e.minChars ? (b(), S(H, { key: 0 }, [
            p(i).length == 0 ? (b(), S("div", Ut, $(p(n)("No matches found")), 1)) : z("", !0)
          ], 64)) : (b(), S("div", Wt, $(p(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          x("div", ae(p(E), { class: "scroller" }), [
            x("div", Ce(Ne(p(T))), [
              (b(!0), S(H, null, le(p(_), (C) => (b(), S("button", {
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
    Q.lock(t, "extra-select", () => {
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
        o.unmount(), e.remove(), t.remove(), Q.remove(t, "extra-select");
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
    Q.lock(t, "extra-suggest", () => {
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
        o.unmount(), e.remove(), t.remove(), Q.remove(t, "extra-suggest");
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
