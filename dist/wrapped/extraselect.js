import { unref as p, getCurrentScope as qe, onScopeDispose as We, getCurrentInstance as De, onMounted as oe, nextTick as Z, ref as m, shallowRef as Ue, watch as H, computed as M, watchEffect as U, watchPostEffect as He, onUnmounted as ye, openBlock as g, createElementBlock as b, Fragment as F, renderList as J, createTextVNode as ce, toDisplayString as D, createElementVNode as O, createCommentVNode as A, mergeProps as K, createBlock as ee, Teleport as te, withDirectives as X, normalizeClass as me, normalizeStyle as we, isRef as be, vModelText as Re, normalizeProps as _e, guardReactiveProps as ke, withModifiers as Oe, vShow as Se, vModelDynamic as Qe, createApp as xe } from "vue";
const V = /* @__PURE__ */ new WeakMap();
class z {
  static put(n, e, l) {
    V.has(n) || V.set(n, /* @__PURE__ */ new Map()), V.get(n).set(e, l);
  }
  static get(n, e) {
    return V.get(n).get(e);
  }
  static has(n, e) {
    return V.has(n) && V.get(n).has(e);
  }
  static remove(n, e) {
    var l = V.get(n).delete(e);
    return V.get(n).size !== 0 && V.delete(n), l;
  }
  static lock(n, e, l) {
    return z.has(n, e) ? !1 : (z.put(n, e, !0), l());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = V);
function G(t) {
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
function Y(t, n) {
  n === void 0 && (n = window.document);
  for (var e = [], l = t.parentNode; l != null && l !== n; ) {
    var a = l;
    e.push(a), l = a.parentNode;
  }
  return e.push(n), e;
}
function Ge(t) {
  var n = Array.prototype.slice.call(t.childNodes);
  n.forEach(function(e) {
    t.removeChild(e);
  });
}
var de;
const R = typeof window < "u";
R && ((de = window == null ? void 0 : window.navigator) == null ? void 0 : de.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Je(t) {
  return typeof t == "function" ? t() : p(t);
}
function Ke(t) {
  return t;
}
function Xe(t) {
  return qe() ? (We(t), !0) : !1;
}
function Ye(t, n = !0) {
  De() ? oe(t) : n ? t() : Z(t);
}
function Ce(t) {
  var n;
  const e = Je(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const Ze = R ? window : void 0;
R && window.document;
R && window.navigator;
R && window.location;
function et(t, n = !1) {
  const e = m(), l = () => e.value = Boolean(t());
  return l(), Ye(l, n), e;
}
const ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, le = "__vueuse_ssr_handlers__";
ne[le] = ne[le] || {};
ne[le];
var fe = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, nt = Object.prototype.propertyIsEnumerable, lt = (t, n) => {
  var e = {};
  for (var l in t)
    tt.call(t, l) && n.indexOf(l) < 0 && (e[l] = t[l]);
  if (t != null && fe)
    for (var l of fe(t))
      n.indexOf(l) < 0 && nt.call(t, l) && (e[l] = t[l]);
  return e;
};
function ot(t, n, e = {}) {
  const l = e, { window: a = Ze } = l, o = lt(l, ["window"]);
  let r;
  const s = et(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, v = H(() => Ce(t), (d) => {
    u(), s.value && a && d && (r = new ResizeObserver(n), r.observe(d, o));
  }, { immediate: !0, flush: "post" }), w = () => {
    u(), v();
  };
  return Xe(w), {
    isSupported: s,
    stop: w
  };
}
function at(t, n = { width: 0, height: 0 }, e = {}) {
  const { box: l = "content-box" } = e, a = m(n.width), o = m(n.height);
  return ot(t, ([r]) => {
    const s = l === "border-box" ? r.borderBoxSize : l === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (a.value = s.reduce((u, { inlineSize: v }) => u + v, 0), o.value = s.reduce((u, { blockSize: v }) => u + v, 0)) : (a.value = r.contentRect.width, o.value = r.contentRect.height);
  }, e), H(() => Ce(t), (r) => {
    a.value = r ? n.width : 0, o.value = r ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var ve;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(ve || (ve = {}));
var st = Object.defineProperty, pe = Object.getOwnPropertySymbols, rt = Object.prototype.hasOwnProperty, ut = Object.prototype.propertyIsEnumerable, he = (t, n, e) => n in t ? st(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, it = (t, n) => {
  for (var e in n || (n = {}))
    rt.call(n, e) && he(t, e, n[e]);
  if (pe)
    for (var e of pe(n))
      ut.call(n, e) && he(t, e, n[e]);
  return t;
};
const ct = {
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
it({
  linear: Ke
}, ct);
function Ee(t, n) {
  const e = m(), l = at(e), a = m([]), o = Ue(t), r = m({ start: 0, end: 10 }), { itemHeight: s, overscan: u = 5 } = n, v = (k) => {
    if (typeof s == "number")
      return Math.ceil(k / s);
    const { start: I = 0 } = r.value;
    let C = 0, N = 0;
    for (let L = I; L < o.value.length; L++)
      if (C += s(L), C >= k) {
        N = L;
        break;
      }
    return N - I;
  }, w = (k) => {
    if (typeof s == "number")
      return Math.floor(k / s) + 1;
    let I = 0, C = 0;
    for (let N = 0; N < o.value.length; N++)
      if (I += s(N), I >= k) {
        C = N;
        break;
      }
    return C + 1;
  }, d = () => {
    const k = e.value;
    if (k) {
      const I = w(k.scrollTop), C = v(k.clientHeight), N = I - u, L = I + C + u;
      r.value = {
        start: N < 0 ? 0 : N,
        end: L > o.value.length ? o.value.length : L
      }, a.value = o.value.slice(r.value.start, r.value.end).map((B, y) => ({
        data: B,
        index: y + r.value.start
      }));
    }
  };
  H([l.width, l.height, t], () => {
    d();
  });
  const c = M(() => typeof s == "number" ? o.value.length * s : o.value.reduce((k, I, C) => k + s(C), 0)), h = (k) => typeof s == "number" ? k * s : o.value.slice(0, k).reduce((C, N, L) => C + s(L), 0), S = (k) => {
    e.value && (e.value.scrollTop = h(k), d());
  }, x = M(() => h(r.value.start)), P = M(() => ({
    style: {
      width: "100%",
      height: `${c.value - x.value}px`,
      marginTop: `${x.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: S,
    containerProps: {
      ref: e,
      onScroll: () => {
        d();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: P
  };
}
const dt = (t, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const e = {
    defaultArray: t.value,
    get: () => t.value,
    push: (l, a, o = null) => {
      const r = t.map.get(l);
      if (r)
        r.value = a, r.data = o;
      else {
        let s = { value: a, key: l, data: o };
        t.value.push(s), t.map.set(s.key, s);
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
let ft = 1;
const Ne = (t) => {
  t && (t.style.display = "none", Ge(t));
}, Le = (t, n, e, l) => {
  var r;
  const a = m(/* @__PURE__ */ new Map());
  U(() => {
    a.value.clear();
    for (let s of e)
      a.value.set(s, s);
  });
  const o = m([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, U(() => {
    n && (o.value = n, o.rebuildMap());
  }), t) {
    a.value.clear();
    for (let s of Array.apply(null, t.selectedOptions).map((u) => u.value).filter((u) => u))
      a.value.set(s, s);
    o.value = Array.apply(null, t.options).reduce((s, u) => (s.push({ value: u.text, key: u.value, data: u.dataset }), s), []), o.rebuildMap();
  }
  if (Array.isArray(l))
    for (let s of l)
      a.value.set(s, s);
  else
    l != null && a.value.set(l, l);
  return dt(o, (r = t == null ? void 0 : t.id) != null ? r : "extraselect_" + (++ft).toString()), { options: o, selectedOptions: a };
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
}, Ie = (t, n, e, l, a, o, r = "limited", s = {}) => {
  const u = m(0), v = m(!1), w = M(() => v.value || u.value > 0);
  if (n != null && n.length > 0)
    if (e) {
      const d = [];
      U((c) => {
        if (l.value.length >= a) {
          let h = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              h = !d.includes(l.value);
              break;
            case "complete":
              h = d.reduce((S, x) => S && !l.value.startsWith(x), !0);
              break;
          }
          if (h) {
            v.value = !0;
            const S = setTimeout(() => {
              d.push(l.value), u.value += 1, s.body = { ...s.body, ...o.value }, ge(n, l.value, s).then((x) => {
                t.actions.addRange(x), t.actions.sort(), u.value -= 1, v.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(S);
            });
          }
        }
      });
    } else
      ge(n, null, s).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: w };
}, Ae = (t, n) => {
  const e = m(""), l = m([]), a = m({});
  for (let r of n) {
    let s = document.getElementById(r);
    a.value[r] = s == null ? void 0 : s.value, s && s.addEventListener("change", (u) => {
      a.value[r] = u.target.value;
    });
  }
  const o = function(r, s) {
    let u = r.value;
    return Object.keys(a.value).length > 0 && (u = u.filter((v) => {
      var w, d;
      for (let c in a.value)
        if (((w = a.value[c]) != null ? w : "").length > 0 && (!((d = v.data) != null && d.hasOwnProperty(c)) || v.data[c] != a.value[c]))
          return !1;
      return !0;
    })), s.length > 0 && (u = u.filter((v) => v.value.toLowerCase().includes(s.toLowerCase()))), u;
  };
  return U(() => {
    l.value = o(t, e.value);
  }), { filterText: e, filteredOptions: l, filterValues: a };
}, Pe = (t, n, e, l, a, o, r) => {
  const s = getComputedStyle(document.querySelector("body")).font, u = function(d) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = s, h.measureText(d).width;
  }, v = M(() => {
    var c, h;
    const d = (c = G(l.value).width) != null ? c : 100;
    if (r === "inherit")
      return d;
    if (r == null || r === "dynamic") {
      const S = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(d, Math.max(...t.value.map((x) => u(x.value))) + 20 + S * 3);
    }
    return r;
  }), w = m({
    position: "absolute",
    "min-width": "max-content"
  });
  return He(() => {
    e.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var d = G(l.value), c = G(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var c = G(o.value);
    let h = -c.left + d.left;
    const S = window.document.documentElement.clientWidth;
    h + v.value > S && (h = S - v.value), w.value = {
      position: "absolute",
      "min-width": "max-content",
      width: v.value.toString() + "px",
      top: (-c.top + d.top + d.height).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: w, getTextWidth: u };
}, vt = {
  key: 0,
  class: "extra-select selection"
}, pt = ["onClick"], ht = ["innerHTML"], gt = ["value"], yt = {
  key: 0,
  class: "input-searching"
}, mt = {
  key: 0,
  class: "allselect-clear"
}, wt = { class: "row-input" }, bt = ["checked"], _t = /* @__PURE__ */ O("b", null, "Select all", -1), kt = { class: "row-input" }, Ot = ["checked"], St = /* @__PURE__ */ O("b", null, "Select Filtered", -1), xt = {
  key: 1,
  class: "no-matches"
}, Ct = { key: 2 }, Et = ["onClick"], Nt = { class: "row-input" }, Lt = ["checked"], It = ["value"], At = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Pt = /* @__PURE__ */ Object.assign(At, {
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
    var se, re, ue;
    const e = t, l = M(() => {
      var i, f;
      return (f = (i = e.originalNode) == null ? void 0 : i.multiple) != null ? f : e.multiple;
    }), { options: a, selectedOptions: o } = Le(e.originalNode, e.options, e.modelValue, e.initialValue), r = (se = e.originalNode) == null ? void 0 : se.classList, s = Object.values((ue = (re = e.originalNode) == null ? void 0 : re.style) != null ? ue : {});
    Ne(e.originalNode);
    const { filterText: u, filteredOptions: v, filterValues: w } = Ae(a, e.filterFields), { searchingFlag: d } = Ie(
      a,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      w,
      e.fetchMode,
      e.fetchOptions
    ), c = m(null), h = m(null), S = m(null), x = m(!1), P = m(null), j = function(i) {
      const f = Y(i.target);
      f.push(i.target), !f.includes(c.value) && !f.includes(h.value) && (x.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let i = !1;
        P.value = Y(c.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (i = !0), i && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (P.value == null && (P.value = document.querySelector("body")), e.originalNode) {
        for (let i of r)
          i != "extraselect" && c.value.classList.add(i);
        for (let i of s)
          c.value.style[i] = e.originalNode.style[i];
        s.includes("background-color") || (c.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), ye(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: k, getTextWidth: I } = Pe(a, o, x, c, h, P, e.maxWidth), C = (i) => {
      Z(
        () => {
          var f;
          return (f = e.originalNode) == null ? void 0 : f.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), n("update:modelValue", i);
    }, N = (i) => {
      l.value ? o.value.has(i) ? o.value.delete(i) : o.value.set(i, i) : (o.value.clear(), o.value.set(i, i), x.value = !1), C(Array.from(o.value.keys()));
    }, L = (i) => {
      B(i, !1), u.value = "";
    }, B = (i, f = null) => {
      f == null && (f = !E.value), f ? (o.value.clear(), a.value.forEach((_) => o.value.set(_.key, _.key))) : o.value.clear(), C(Array.from(o.value.keys()));
    }, y = () => {
      T.value ? v.value.forEach((i) => {
        o.value.has(i.key) && o.value.delete(i.key);
      }) : v.value.forEach((i) => {
        o.value.has(i.key) || o.value.set(i.key, i.key);
      }), C(Array.from(o.value.keys()));
    };
    H(x, (i, f) => {
      i != f && (i ? e.search && Z(() => {
        S.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const E = M(() => o.value.size == a.value.length), T = M(() => v.value.reduce((i, f) => i && o.value.has(f.key), !0)), ae = M(() => o.value.size == 0), Me = M(() => {
      var i, f, _, q, W;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (E.value)
          return "All selected";
        if (ae.value)
          return "No selection";
        const $ = c.value ? getComputedStyle(c.value) : null, je = ((i = c.value) == null ? void 0 : i.clientWidth) - parseInt($ == null ? void 0 : $.paddingLeft) - parseInt($ == null ? void 0 : $.paddingRight);
        let Q = o.value.size + " selected - ", ie = !0;
        for (let ze of o.value)
          if (ie ? ie = !1 : Q += ", ", Q += (_ = (f = a.map.get(ze[0])) == null ? void 0 : f.value) != null ? _ : d.value ? "Loading..." : "Value not found", je < I(Q))
            return o.value.size + " selected";
        return Q;
      } else
        for (let $ of o.value)
          return (W = (q = a.map.get($[0])) == null ? void 0 : q.value) != null ? W : d.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Be, containerProps: $e, wrapperProps: Fe } = Ee(
      v,
      {
        itemHeight: 32
      }
    );
    return (i, f) => (g(), b(F, null, [
      e.showSelected ? (g(), b("div", vt, [
        (g(!0), b(F, null, J(p(o), (_) => {
          var q;
          return g(), b("div", {
            key: _,
            onClick: (W) => N(_[0]),
            class: "selection-badge"
          }, [
            ce(D((q = p(a).find((W) => W.key == _[0])) == null ? void 0 : q.value) + " ", 1),
            O("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, ht)
          ], 8, pt);
        }), 128))
      ])) : A("", !0),
      O("input", K({
        onFocus: f[0] || (f[0] = (_) => x.value = !0),
        onClick: f[1] || (f[1] = (_) => x.value = !0),
        ref_key: "inputNode",
        ref: c,
        value: p(Me),
        class: "extra-select extra-select-input",
        readonly: ""
      }, i.$attrs), null, 16, gt),
      P.value ? (g(), ee(te, {
        key: 1,
        to: P.value
      }, [
        X(O("div", {
          class: me(["extra-select dropdown", { searching: p(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: we(p(k))
        }, [
          e.search ? (g(), b("div", yt, [
            X(O("input", {
              ref_key: "searchNode",
              ref: S,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (_) => be(u) ? u.value = _ : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Re, p(u)]
            ])
          ])) : A("", !0),
          p(u).length >= e.minChars ? (g(), b(F, { key: 1 }, [
            p(l) ? (g(), b("div", mt, [
              p(u).length == 0 ? (g(), b("div", {
                key: 0,
                onClick: B,
                class: "all-select"
              }, [
                O("div", wt, [
                  O("input", {
                    checked: p(E),
                    type: "checkbox"
                  }, null, 8, bt),
                  _t
                ])
              ])) : A("", !0),
              p(v).length > 0 && p(u).length > 0 ? (g(), b("div", {
                key: 1,
                onClick: y,
                class: "all-select"
              }, [
                O("div", kt, [
                  O("input", {
                    checked: p(T),
                    type: "checkbox"
                  }, null, 8, Ot),
                  St
                ])
              ])) : A("", !0),
              O("div", {
                class: "clear",
                onClick: L
              }, "Clear")
            ])) : A("", !0),
            p(v).length == 0 ? (g(), b("div", xt, "No matches found")) : A("", !0)
          ], 64)) : (g(), b("div", Ct, "Insert at least " + D(e.minChars) + " characters", 1)),
          O("div", K(p($e), { class: "scroller" }), [
            O("div", _e(ke(p(Fe))), [
              (g(!0), b(F, null, J(p(Be), (_) => (g(), b("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: Oe((q) => N(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", Nt, [
                  p(l) ? (g(), b("input", {
                    key: 0,
                    checked: p(o).has(_.data.key),
                    type: "checkbox"
                  }, null, 8, Lt)) : A("", !0),
                  ce(" " + D(_.data.value), 1)
                ])
              ], 8, Et))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Se, x.value]
        ])
      ], 8, ["to"])) : A("", !0),
      e.originalNode ? (g(), ee(te, {
        key: 2,
        to: e.originalNode
      }, [
        (g(!0), b(F, null, J(p(o), (_) => (g(), b("option", {
          key: _[0],
          selected: "selected",
          value: _[0]
        }, null, 8, It))), 128))
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), Tt = {
  key: 0,
  class: "no-matches"
}, Vt = { key: 1 }, Mt = ["onClick"], Bt = { class: "row-input" }, $t = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Ft = /* @__PURE__ */ Object.assign($t, {
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
    var N, L, B;
    const e = t, { options: l } = Le(null, e.options, []), a = (N = e.originalNode) == null ? void 0 : N.classList, o = Object.values((B = (L = e.originalNode) == null ? void 0 : L.style) != null ? B : {});
    Ne(e.originalNode);
    const { filterText: r, filteredOptions: s, filterValues: u } = Ae(l, e.filterFields), { searchingFlag: v } = Ie(
      l,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      u,
      e.fetchMode,
      e.fetchOptions
    ), w = m(null), d = m(null), c = m(!1), h = m(null), S = function(y) {
      const E = Y(y.target);
      E.push(y.target), !E.includes(w.value) && !E.includes(d.value) && (c.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let y = !1;
        h.value = Y(w.value).find((E) => !!(E instanceof Element && (E.matches(e.dropdownContainer) && (y = !0), y && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(E).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let y of a)
          y != "extrasuggest" && w.value.classList.add(y);
        for (let y of o)
          w.value.style[y] = e.originalNode.style[y];
        o.includes("background-color") || (w.value.style.backgroundColor = "white"), r.value = e.originalNode.value, U(() => {
          e.modelValue != null && (r.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", S), window.document.addEventListener("focusin", S);
    }), ye(() => {
      window.document.removeEventListener("mousedown", S), window.document.removeEventListener("focusin", S);
    });
    const { dropdownStyle: x } = Pe(l, m([]), c, w, d, h, e.maxWidth), P = (y) => {
      r.value = l.map.get(y).value, c.value = !1;
    }, j = () => {
      var y;
      e.originalNode && (e.originalNode.value = r.value, (y = e.originalNode) == null || y.dispatchEvent(new Event("change", { bubbles: !0 }))), n("update:modelValue", r.value);
    };
    H(() => c.value, (y) => {
      y === !1 && j();
    });
    const { list: k, containerProps: I, wrapperProps: C } = Ee(
      s,
      {
        itemHeight: 32
      }
    );
    return (y, E) => (g(), b(F, null, [
      X(O("input", K({
        onFocus: E[0] || (E[0] = (T) => c.value = !0),
        onClick: E[1] || (E[1] = (T) => c.value = !0),
        ref_key: "inputNode",
        ref: w,
        "onUpdate:modelValue": E[2] || (E[2] = (T) => be(r) ? r.value = T : null),
        class: "extra-select extra-select-input"
      }, y.$attrs), null, 16), [
        [Qe, p(r)]
      ]),
      h.value ? (g(), ee(te, {
        key: 0,
        to: h.value
      }, [
        X(O("div", {
          class: me(["extra-select dropdown", { searching: p(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: d,
          style: we(p(x))
        }, [
          p(r).length >= e.minChars ? (g(), b(F, { key: 0 }, [
            p(s).length == 0 ? (g(), b("div", Tt, "No matches found")) : A("", !0)
          ], 64)) : (g(), b("div", Vt, "Insert at least " + D(e.minChars) + " characters", 1)),
          O("div", K(p(I), { class: "scroller" }), [
            O("div", _e(ke(p(C))), [
              (g(!0), b(F, null, J(p(k), (T) => (g(), b("button", {
                key: T.index,
                class: "dropdown-row",
                onClick: Oe((ae) => P(T.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", Bt, D(T.data.value), 1)
              ], 8, Mt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Se, c.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), Te = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Te.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-select", () => {
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
      const l = xe(Pt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
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
    z.lock(t, "extra-suggest", () => {
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
      const l = xe(Ft, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Te.init(), Ve.init();
});
export {
  Te as ExtraSelect,
  Ve as ExtraSuggest
};
