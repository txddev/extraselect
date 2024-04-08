import { unref as p, getCurrentScope as Je, onScopeDispose as Ke, getCurrentInstance as Xe, onMounted as de, nextTick as ae, ref as w, shallowRef as Ye, watch as Q, computed as B, watchEffect as X, watchPostEffect as Ze, toRef as K, onUnmounted as Se, openBlock as b, createElementBlock as k, Fragment as H, createCommentVNode as z, renderList as ne, withModifiers as D, createTextVNode as ye, toDisplayString as $, createElementVNode as E, mergeProps as oe, createBlock as re, Teleport as ie, withDirectives as se, normalizeClass as xe, normalizeStyle as Ee, isRef as Ce, vModelText as et, normalizeProps as Ne, guardReactiveProps as Le, vShow as Ie, vModelDynamic as tt, createApp as Ae } from "vue";
const M = /* @__PURE__ */ new WeakMap();
class R {
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
    return R.has(l, e) ? !1 : (R.put(l, e, !0), o());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = M);
function le(t) {
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
var ge;
const Y = typeof window < "u";
Y && ((ge = window == null ? void 0 : window.navigator) == null ? void 0 : ge.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
  Xe() ? de(t) : l ? t() : ae(t);
}
function Te(t) {
  var l;
  const e = nt(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
const rt = Y ? window : void 0;
Y && window.document;
Y && window.navigator;
Y && window.location;
function it(t, l = !1) {
  const e = w(), o = () => e.value = Boolean(t());
  return o(), st(o, l), e;
}
const ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ce = "__vueuse_ssr_handlers__";
ue[ce] = ue[ce] || {};
ue[ce];
var we = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, ct = Object.prototype.propertyIsEnumerable, dt = (t, l) => {
  var e = {};
  for (var o in t)
    ut.call(t, o) && l.indexOf(o) < 0 && (e[o] = t[o]);
  if (t != null && we)
    for (var o of we(t))
      l.indexOf(o) < 0 && ct.call(t, o) && (e[o] = t[o]);
  return e;
};
function ft(t, l, e = {}) {
  const o = e, { window: n = rt } = o, a = dt(o, ["window"]);
  let r;
  const s = it(() => n && "ResizeObserver" in n), u = () => {
    r && (r.disconnect(), r = void 0);
  }, i = Q(() => Te(t), (d) => {
    u(), s.value && n && d && (r = new ResizeObserver(l), r.observe(d, a));
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
  }, e), Q(() => Te(t), (r) => {
    n.value = r ? l.width : 0, a.value = r ? l.height : 0;
  }), {
    width: n,
    height: a
  };
}
var be;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(be || (be = {}));
var pt = Object.defineProperty, _e = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, mt = Object.prototype.propertyIsEnumerable, ke = (t, l, e) => l in t ? pt(t, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[l] = e, yt = (t, l) => {
  for (var e in l || (l = {}))
    ht.call(l, e) && ke(t, e, l[e]);
  if (_e)
    for (var e of _e(l))
      mt.call(l, e) && ke(t, e, l[e]);
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
  const e = w(), o = vt(e), n = w([]), a = Ye(t), r = w({ start: 0, end: 10 }), { itemHeight: s, overscan: u = 5 } = l, i = (_) => {
    if (typeof s == "number")
      return Math.ceil(_ / s);
    const { start: I = 0 } = r.value;
    let O = 0, C = 0;
    for (let T = I; T < a.value.length; T++)
      if (O += s(T), O >= _) {
        C = T;
        break;
      }
    return C - I;
  }, f = (_) => {
    if (typeof s == "number")
      return Math.floor(_ / s) + 1;
    let I = 0, O = 0;
    for (let C = 0; C < a.value.length; C++)
      if (I += s(C), I >= _) {
        O = C;
        break;
      }
    return O + 1;
  }, d = () => {
    const _ = e.value;
    if (_) {
      const I = f(_.scrollTop), O = i(_.clientHeight), C = I - u, T = I + O + u;
      r.value = {
        start: C < 0 ? 0 : C,
        end: T > a.value.length ? a.value.length : T
      }, n.value = a.value.slice(r.value.start, r.value.end).map((U, q) => ({
        data: U,
        index: q + r.value.start
      }));
    }
  };
  Q([o.width, o.height, t], () => {
    d();
  });
  const h = B(() => typeof s == "number" ? a.value.length * s : a.value.reduce((_, I, O) => _ + s(O), 0)), y = (_) => typeof s == "number" ? _ * s : a.value.slice(0, _).reduce((O, C, T) => O + s(T), 0), g = (_) => {
    e.value && (e.value.scrollTop = y(_), d());
  }, m = B(() => y(r.value.start)), A = B(() => ({
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
    wrapperProps: A
  };
}
const W = (t) => {
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
const Pe = (t) => {
  t && (t.style.display = "none", lt(t));
}, Ve = (t, l, e, o) => {
  var u;
  const n = w(/* @__PURE__ */ new Map());
  X(() => {
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
  }, X(() => {
    l.value && (a.value = l.value.map((i) => ({ ...i, key: W(i.key) })), a.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let i of Array.apply(null, t.selectedOptions).map((f) => W(f.value)).filter((f) => f != null))
        n.value.set(i, i);
      a.value = Array.apply(null, t.options).reduce((i, f) => (i.push({ value: f.text, key: W(f.value), data: Object.assign({}, f.dataset) }), i), []);
    }
    if (t.matches("input")) {
      let i = t.value;
      i != null && i.length > 0 && (a.value = [{ value: i, key: i }]);
    }
    a.rebuildMap();
  }
  if (Array.isArray(o))
    for (let i of o)
      n.value.set(W(i), W(i));
  else
    o != null && n.value.set(W(o), W(o));
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
function _t(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const fe = (t = null) => {
  var o, n;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...(n = (o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) != null ? n : {} };
  Object.assign(e, t != null ? t : {}), ze(w(e), "defaults");
}, ze = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, fe());
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
let kt = 0;
const Me = (t, l) => {
  var o;
  return ze(l, (o = t == null ? void 0 : t.id) != null ? o : "extraselect_" + (++kt).toString()), { propLocalization: l, t: (n, a = {}) => {
    var s;
    let r = (s = l.value[n]) != null ? s : window.ExtraSelectLocalization.defaults.get(n);
    return r == null && (window.ExtraSelectLocalization.defaults.push(n, n), r = n), _t(r, a);
  } };
}, Oe = async function(t, l = null, e = {}) {
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
      const d = [];
      X((h) => {
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
            i.value = !0;
            const g = setTimeout(() => {
              d.push(o.value), u.value += 1, s.body = { ...s.body, ...a.value }, Oe(l, o.value, s).then((m) => {
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
      Oe(l, null, s).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: f };
}, Be = (t, l, e, o = [], n = []) => {
  const a = w(""), r = w([]), s = w({}), u = { ...o.reduce((f, d) => (f[d] = !1, f), {}), ...n.reduce((f, d) => (f[d] = !0, f), {}) };
  for (let f in u) {
    let d = u[f], h = document.getElementById(f);
    s.value[f] = h == null ? void 0 : h.value, h && h.addEventListener("change", (y) => {
      s.value[f] = y.target.value, d && ae(() => {
        if (l != null)
          for (let g of Array.from(l.value.keys()))
            r.value.find((m) => m.key == g) || e(g, !1);
        else
          r.value.find((g) => g.key == a.value) || e(a.value, !1);
      });
    });
  }
  const i = function(f, d) {
    let h = f.value;
    return Object.keys(s.value).length > 0 && (h = h.filter((y) => {
      var g, m;
      for (let A in s.value)
        if ((u[A] ? !0 : ((g = s.value[A]) != null ? g : "").length > 0) && ((m = y.data) == null ? void 0 : m.hasOwnProperty(A)) && y.data[A] != s.value[A])
          return !1;
      return !0;
    })), d.length > 0 && (h = h.filter((y) => y.value.toLowerCase().includes(d.toLowerCase()))), h;
  };
  return X(() => {
    r.value = i(t, a.value);
  }), { filterText: a, filteredOptions: r, filterValues: s };
}, je = (t, l, e, o, n, a, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, u = function(d) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = s, y.measureText(d).width;
  }, i = B(() => {
    var h, y;
    const d = (h = le(o.value).width) != null ? h : 100;
    if (r === "inherit")
      return d;
    if (r == null || r === "dynamic") {
      const g = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(d, Math.max(...t.value.map((m) => u(m.value))) + 20 + g * 3);
    }
    return r;
  }), f = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ze(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var d = le(o.value), h = le(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var h = le(a.value);
    let y = -h.left + d.left;
    const g = window.document.documentElement.clientWidth;
    y + i.value > g && (y = g - i.value), f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-h.top + d.top + d.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: f, getTextWidth: u };
}, Ot = ["name"], St = {
  key: 1,
  class: "extra-select selection"
}, xt = ["onClick"], Et = ["innerHTML"], Ct = ["value", "disabled"], Nt = {
  key: 0,
  class: "input-searching"
}, Lt = ["placeholder"], It = {
  key: 0,
  class: "allselect-clear"
}, At = ["onClick"], Tt = { class: "row-input" }, Ft = ["checked"], Pt = ["onClick"], Vt = { class: "row-input" }, zt = ["checked"], Mt = ["onClick"], $t = {
  key: 1,
  class: "no-matches"
}, Bt = { key: 2 }, jt = ["onClick"], qt = { class: "row-input" }, Dt = ["checked"], Ht = ["value"], Ut = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Wt = /* @__PURE__ */ Object.assign(Ut, {
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
    var ve, pe, he;
    const e = t, o = B(() => {
      var c, v;
      return (v = (c = e.originalNode) == null ? void 0 : c.multiple) != null ? v : e.multiple;
    }), { options: n, selectedOptions: a, onReset: r } = Ve(e.originalNode, K(e, "options"), K(e, "modelValue"), e.initialValue), { t: s } = Me(e.originalNode, K(e, "localization")), u = (ve = e.originalNode) == null ? void 0 : ve.classList, i = Object.values((he = (pe = e.originalNode) == null ? void 0 : pe.style) != null ? he : {});
    Pe(e.originalNode);
    const f = (c, v = null) => {
      if (o.value) {
        let F = v;
        switch (F == null && (F = !a.value.has(c)), F) {
          case !0:
            a.value.set(c, c);
            break;
          case !1:
            a.value.delete(c);
            break;
        }
      } else
        a.value.clear(), v !== !1 && a.value.set(c, c), _.value = !1;
      q(Array.from(a.value.keys()));
    }, { filterText: d, filteredOptions: h, filterValues: y } = Be(n, a, f, e.filterFields, e.hardFilterFields), { searchingFlag: g } = $e(
      n,
      e.url,
      e.searchableUrl,
      d,
      e.minChars,
      y,
      e.fetchMode,
      e.fetchOptions
    ), m = w(null), A = w(null), j = w(null), _ = w(!1);
    function I(c) {
      e.disabled || (_.value = c);
    }
    Q(d, () => {
      A.value.querySelector(".scroller").scrollTop = 0;
    });
    const O = w(null), C = function(c) {
      const v = G(c.target);
      v.push(c.target), !v.includes(m.value) && !v.includes(A.value) ? _.value = !1 : (c.stopImmediatePropagation(), c.preventDefault());
    };
    de(() => {
      if (e.dropdownContainer) {
        let c = !1;
        O.value = G(m.value).find((v) => !!(v instanceof Element && (v.matches(e.dropdownContainer) && (c = !0), c && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(v).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), e.originalNode) {
        for (let v of u)
          v != "extraselect" && m.value.classList.add(v);
        for (let v of i)
          m.value.style[v] = e.originalNode.style[v];
        let c = G(m.value, "form").pop();
        c instanceof HTMLElement && c.matches("form") && c.addEventListener("reset", () => setTimeout(r)), e.originalNode.toggleValue = f, e.originalNode.setValues = (v) => {
          a.value.clear();
          for (let F of v)
            f(F);
        };
      }
      window.document.addEventListener("mousedown", C), window.document.addEventListener("focusin", C);
    }), Se(() => {
      window.document.removeEventListener("mousedown", C), window.document.removeEventListener("focusin", C);
    });
    const { dropdownStyle: T, getTextWidth: U } = je(n, a, _, m, A, O, e.maxWidth), q = (c) => {
      ae(
        () => {
          var v;
          return (v = e.originalNode) == null ? void 0 : v.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), l("update:modelValue", c);
    }, Z = (c) => {
      S(c, !1), d.value = "";
    }, S = (c, v = null) => {
      v == null && (v = !N.value), v ? (a.value.clear(), n.value.forEach((F) => a.value.set(F.key, F.key))) : a.value.clear(), q(Array.from(a.value.keys()));
    }, x = () => {
      P.value ? h.value.forEach((c) => {
        a.value.has(c.key) && a.value.delete(c.key);
      }) : h.value.forEach((c) => {
        a.value.has(c.key) || a.value.set(c.key, c.key);
      }), q(Array.from(a.value.keys()));
    };
    Q(_, (c, v) => {
      c != v && (c ? e.search && ae(() => {
        j.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const N = B(() => a.value.size == n.value.length), P = B(() => h.value.reduce((c, v) => c && a.value.has(v.key), !0)), He = B(() => a.value.size == 0), Ue = B(() => {
      var c, v, F, J, L;
      if (n.value.length < 0)
        return "";
      if (o.value) {
        if (He.value)
          return s("No selection");
        if (!e.searchableUrl && N.value)
          return s("All selected");
        const V = m.value ? getComputedStyle(m.value) : null, ee = ((c = m.value) == null ? void 0 : c.clientWidth) - parseInt(V == null ? void 0 : V.paddingLeft) - parseInt(V == null ? void 0 : V.paddingRight);
        let te = s(":n selected - ", { n: a.value.size }), me = !0;
        for (let Ge of a.value)
          if (me ? me = !1 : te += ", ", te += (F = (v = n.map.get(Ge[0])) == null ? void 0 : v.value) != null ? F : g.value ? s("Loading...") : s("Value not found"), ee < U(te))
            return a.value.size + s(" selected");
        return te;
      } else
        for (let V of a.value)
          return (L = (J = n.map.get(V[0])) == null ? void 0 : J.value) != null ? L : g.value ? s("Loading...") : s("Value not found");
      return s("No selection");
    }), { list: We, containerProps: Qe, wrapperProps: Re } = Fe(
      h,
      {
        itemHeight: 32
      }
    );
    return (c, v) => {
      var F, J;
      return b(), k(H, null, [
        p(o) && p(a).size == 0 ? (b(), k("input", {
          key: 0,
          type: "hidden",
          name: (J = (F = e.originalNode) == null ? void 0 : F.name) == null ? void 0 : J.replace("[]", ""),
          value: ""
        }, null, 8, Ot)) : z("", !0),
        e.showSelected ? (b(), k("div", St, [
          (b(!0), k(H, null, ne(p(a), (L) => {
            var V;
            return b(), k("div", {
              key: L,
              onClick: D((ee) => f(L[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ye($((V = p(n).find((ee) => ee.key == L[0])) == null ? void 0 : V.value) + " ", 1),
              E("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, Et)
            ], 8, xt);
          }), 128))
        ])) : z("", !0),
        E("input", oe({
          onFocus: v[0] || (v[0] = (L) => I(!0)),
          onClick: v[1] || (v[1] = D((L) => I(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: m,
          value: p(Ue),
          class: "extra-select extra-select-input",
          readonly: ""
        }, c.$attrs, { disabled: t.disabled }), null, 16, Ct),
        O.value ? (b(), re(ie, {
          key: 2,
          to: O.value
        }, [
          se(E("div", {
            class: xe(["extra-select dropdown", { searching: p(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: Ee(p(T))
          }, [
            e.search ? (b(), k("div", Nt, [
              se(E("input", {
                ref_key: "searchNode",
                ref: j,
                class: "extra-select-search",
                "onUpdate:modelValue": v[2] || (v[2] = (L) => Ce(d) ? d.value = L : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: p(s)("Search...")
              }, null, 8, Lt), [
                [et, p(d)]
              ])
            ])) : z("", !0),
            p(d).length >= e.minChars ? (b(), k(H, { key: 1 }, [
              p(o) ? (b(), k("div", It, [
                p(d).length == 0 ? (b(), k("div", {
                  key: 0,
                  onClick: D(S, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", Tt, [
                    E("input", {
                      checked: p(N),
                      type: "checkbox"
                    }, null, 8, Ft),
                    E("b", null, $(p(s)("Select all")), 1)
                  ])
                ], 8, At)) : z("", !0),
                p(h).length > 0 && p(d).length > 0 ? (b(), k("div", {
                  key: 1,
                  onClick: D(x, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", Vt, [
                    E("input", {
                      checked: p(P),
                      type: "checkbox"
                    }, null, 8, zt),
                    E("b", null, $(p(s)("Select Filtered")), 1)
                  ])
                ], 8, Pt)) : z("", !0),
                E("div", {
                  class: "clear",
                  onClick: D(Z, ["stop", "prevent"])
                }, $(p(s)("Clear")), 9, Mt)
              ])) : z("", !0),
              p(h).length == 0 ? (b(), k("div", $t, $(p(s)("No matches found")), 1)) : z("", !0)
            ], 64)) : (b(), k("div", Bt, $(p(s)("Insert at least :n characters", { n: e.minChars })), 1)),
            E("div", oe(p(Qe), { class: "scroller" }), [
              E("div", Ne(Le(p(Re))), [
                (b(!0), k(H, null, ne(p(We), (L) => (b(), k("button", {
                  key: L.index,
                  class: "dropdown-row",
                  onClick: D((V) => f(L.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  E("div", qt, [
                    p(o) ? (b(), k("input", {
                      key: 0,
                      checked: p(a).has(L.data.key),
                      type: "checkbox"
                    }, null, 8, Dt)) : z("", !0),
                    ye(" " + $(L.data.value), 1)
                  ])
                ], 8, jt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Ie, _.value]
          ])
        ], 8, ["to"])) : z("", !0),
        e.originalNode ? (b(), re(ie, {
          key: 3,
          to: e.originalNode
        }, [
          (b(!0), k(H, null, ne(p(a), (L) => (b(), k("option", {
            key: L[0],
            selected: "selected",
            value: L[0]
          }, null, 8, Ht))), 128))
        ], 8, ["to"])) : z("", !0)
      ], 64);
    };
  }
}), Qt = ["disabled"], Rt = {
  key: 0,
  class: "no-matches"
}, Gt = { key: 1 }, Jt = ["onClick"], Kt = { class: "row-input" }, Xt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Yt = /* @__PURE__ */ Object.assign(Xt, {
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
    var U, q, Z;
    const e = t, { options: o } = Ve(e.originalNode, K(e, "options"), w([])), { t: n } = Me(e.originalNode, K(e, "localization")), a = (U = e.originalNode) == null ? void 0 : U.classList, r = Object.values((Z = (q = e.originalNode) == null ? void 0 : q.style) != null ? Z : {});
    Pe(e.originalNode);
    const s = (S, x = null) => {
      x === !1 ? u.value = "" : u.value = o.map.get(S).value, g.value = !1;
    }, { filterText: u, filteredOptions: i, filterValues: f } = Be(o, null, s, e.filterFields, e.hardFilterFields), { searchingFlag: d } = $e(
      o,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      f,
      e.fetchMode,
      e.fetchOptions
    ), h = w(null), y = w(null), g = w(!1), m = w(null);
    function A(S) {
      e.disabled || (g.value = S);
    }
    Q(u, () => {
      y.value.querySelector(".scroller").scrollTop = 0;
    });
    const j = function(S) {
      const x = G(S.target);
      x.push(S.target), !x.includes(h.value) && !x.includes(y.value) ? g.value = !1 : (S.stopImmediatePropagation(), S.preventDefault());
    };
    de(() => {
      if (e.dropdownContainer) {
        let N = !1;
        m.value = G(h.value).find((P) => !!(P instanceof Element && (P.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(P).position))));
      }
      if (m.value == null && (m.value = document.querySelector("body")), e.originalNode) {
        for (let P of a)
          P != "extrasuggest" && h.value.classList.add(P);
        for (let P of r)
          h.value.style[P] = e.originalNode.style[P];
        u.value = e.originalNode.value;
        let N = G(h.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(x)), e.originalNode.addEventListener("change", () => {
          I(!0);
        });
      }
      X(() => {
        e.modelValue != null && (u.value = e.modelValue);
      });
      const S = u.value, x = () => {
        u.value = S;
      };
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), Se(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: _ } = je(o, w([]), g, h, y, m, e.maxWidth), I = (S = !1) => {
      var x;
      e.originalNode && (S ? u.value = e.originalNode.value : (e.originalNode.value = u.value, (x = e.originalNode) == null || x.dispatchEvent(new Event("change", { bubbles: !0 })))), l("update:modelValue", u.value);
    };
    Q(() => g.value, (S) => {
      S === !1 && I();
    });
    const { list: O, containerProps: C, wrapperProps: T } = Fe(
      i,
      {
        itemHeight: 32
      }
    );
    return (S, x) => (b(), k(H, null, [
      se(E("input", oe({
        onFocus: x[0] || (x[0] = (N) => A(!0)),
        onClick: x[1] || (x[1] = D((N) => A(!0), ["stop", "prevent"])),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": x[2] || (x[2] = (N) => Ce(u) ? u.value = N : null),
        class: "extra-select extra-select-input"
      }, S.$attrs, { disabled: t.disabled }), null, 16, Qt), [
        [tt, p(u)]
      ]),
      m.value ? (b(), re(ie, {
        key: 0,
        to: m.value
      }, [
        se(E("div", {
          class: xe(["extra-select dropdown", { searching: p(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: Ee(p(_))
        }, [
          p(u).length >= e.minChars ? (b(), k(H, { key: 0 }, [
            p(i).length == 0 ? (b(), k("div", Rt, $(p(n)("No matches found")), 1)) : z("", !0)
          ], 64)) : (b(), k("div", Gt, $(p(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          E("div", oe(p(C), { class: "scroller" }), [
            E("div", Ne(Le(p(T))), [
              (b(!0), k(H, null, ne(p(O), (N) => (b(), k("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: D((P) => s(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                E("div", Kt, $(N.data.value), 1)
              ], 8, Jt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ie, g.value]
        ])
      ], 8, ["to"])) : z("", !0)
    ], 64));
  }
}), el = fe, qe = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      qe.bindNew(t);
    });
  },
  bindNew(t) {
    R.lock(t, "extra-select", () => {
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
      const o = Ae(Wt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), R.remove(t, "extra-select");
      });
    });
  }
}, De = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      De.bindNew(t);
    });
  },
  bindNew(t) {
    R.lock(t, "extra-suggest", () => {
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
      const o = Ae(Yt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), R.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  qe.init(), De.init(), fe();
});
export {
  qe as ExtraSelect,
  De as ExtraSuggest,
  el as loadExtraSelectDefaultLocalization
};
