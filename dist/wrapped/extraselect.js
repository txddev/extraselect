import { unref as p, getCurrentScope as We, onScopeDispose as De, getCurrentInstance as Ue, onMounted as ae, nextTick as Z, ref as y, shallowRef as Re, watch as R, computed as M, watchEffect as U, watchPostEffect as He, toRef as ee, onUnmounted as me, openBlock as g, createElementBlock as b, Fragment as F, renderList as J, createTextVNode as de, toDisplayString as D, createElementVNode as O, createCommentVNode as A, mergeProps as K, createBlock as te, Teleport as ne, withDirectives as X, normalizeClass as we, normalizeStyle as be, isRef as _e, vModelText as Qe, normalizeProps as ke, guardReactiveProps as Oe, withModifiers as Se, vShow as xe, vModelDynamic as Ge, createApp as Ce } from "vue";
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
function Je(t) {
  var n = Array.prototype.slice.call(t.childNodes);
  n.forEach(function(e) {
    t.removeChild(e);
  });
}
var fe;
const H = typeof window < "u";
H && ((fe = window == null ? void 0 : window.navigator) == null ? void 0 : fe.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ke(t) {
  return typeof t == "function" ? t() : p(t);
}
function Xe(t) {
  return t;
}
function Ye(t) {
  return We() ? (De(t), !0) : !1;
}
function Ze(t, n = !0) {
  Ue() ? ae(t) : n ? t() : Z(t);
}
function Ee(t) {
  var n;
  const e = Ke(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const et = H ? window : void 0;
H && window.document;
H && window.navigator;
H && window.location;
function tt(t, n = !1) {
  const e = y(), l = () => e.value = Boolean(t());
  return l(), Ze(l, n), e;
}
const le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, oe = "__vueuse_ssr_handlers__";
le[oe] = le[oe] || {};
le[oe];
var ve = Object.getOwnPropertySymbols, nt = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, ot = (t, n) => {
  var e = {};
  for (var l in t)
    nt.call(t, l) && n.indexOf(l) < 0 && (e[l] = t[l]);
  if (t != null && ve)
    for (var l of ve(t))
      n.indexOf(l) < 0 && lt.call(t, l) && (e[l] = t[l]);
  return e;
};
function at(t, n, e = {}) {
  const l = e, { window: a = et } = l, o = ot(l, ["window"]);
  let r;
  const s = tt(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, v = R(() => Ee(t), (d) => {
    u(), s.value && a && d && (r = new ResizeObserver(n), r.observe(d, o));
  }, { immediate: !0, flush: "post" }), w = () => {
    u(), v();
  };
  return Ye(w), {
    isSupported: s,
    stop: w
  };
}
function st(t, n = { width: 0, height: 0 }, e = {}) {
  const { box: l = "content-box" } = e, a = y(n.width), o = y(n.height);
  return at(t, ([r]) => {
    const s = l === "border-box" ? r.borderBoxSize : l === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (a.value = s.reduce((u, { inlineSize: v }) => u + v, 0), o.value = s.reduce((u, { blockSize: v }) => u + v, 0)) : (a.value = r.contentRect.width, o.value = r.contentRect.height);
  }, e), R(() => Ee(t), (r) => {
    a.value = r ? n.width : 0, o.value = r ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var pe;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(pe || (pe = {}));
var rt = Object.defineProperty, he = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, it = Object.prototype.propertyIsEnumerable, ge = (t, n, e) => n in t ? rt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, ct = (t, n) => {
  for (var e in n || (n = {}))
    ut.call(n, e) && ge(t, e, n[e]);
  if (he)
    for (var e of he(n))
      it.call(n, e) && ge(t, e, n[e]);
  return t;
};
const dt = {
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
ct({
  linear: Xe
}, dt);
function Ne(t, n) {
  const e = y(), l = st(e), a = y([]), o = Re(t), r = y({ start: 0, end: 10 }), { itemHeight: s, overscan: u = 5 } = n, v = (k) => {
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
      }, a.value = o.value.slice(r.value.start, r.value.end).map((B, m) => ({
        data: B,
        index: m + r.value.start
      }));
    }
  };
  R([l.width, l.height, t], () => {
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
const ft = (t, n) => {
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
let vt = 1;
const Le = (t) => {
  t && (t.style.display = "none", Je(t));
}, Ie = (t, n, e, l) => {
  var r;
  const a = y(/* @__PURE__ */ new Map());
  U(() => {
    if (Array.isArray(e.value)) {
      a.value.clear();
      for (let s of e.value)
        a.value.set(s, s);
    }
  });
  const o = y([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, U(() => {
    n.value && (o.value = n.value, o.rebuildMap());
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
  return ft(o, (r = t == null ? void 0 : t.id) != null ? r : "extraselect_" + (++vt).toString()), { options: o, selectedOptions: a };
}, ye = async function(t, n = null, e = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...e.body })
  };
  return await (await fetch(t, l)).json();
}, Ae = (t, n, e, l, a, o, r = "limited", s = {}) => {
  const u = y(0), v = y(!1), w = M(() => v.value || u.value > 0);
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
              d.push(l.value), u.value += 1, s.body = { ...s.body, ...o.value }, ye(n, l.value, s).then((x) => {
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
      ye(n, null, s).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: w };
}, Pe = (t, n) => {
  const e = y(""), l = y([]), a = y({});
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
}, Te = (t, n, e, l, a, o, r) => {
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
  }), w = y({
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
}, pt = {
  key: 0,
  class: "extra-select selection"
}, ht = ["onClick"], gt = ["innerHTML"], yt = ["value"], mt = {
  key: 0,
  class: "input-searching"
}, wt = {
  key: 0,
  class: "allselect-clear"
}, bt = { class: "row-input" }, _t = ["checked"], kt = /* @__PURE__ */ O("b", null, "Select all", -1), Ot = { class: "row-input" }, St = ["checked"], xt = /* @__PURE__ */ O("b", null, "Select Filtered", -1), Ct = {
  key: 1,
  class: "no-matches"
}, Et = { key: 2 }, Nt = ["onClick"], Lt = { class: "row-input" }, It = ["checked"], At = ["value"], Pt = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Tt = /* @__PURE__ */ Object.assign(Pt, {
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
    const e = t, l = M(() => {
      var i, f;
      return (f = (i = e.originalNode) == null ? void 0 : i.multiple) != null ? f : e.multiple;
    }), { options: a, selectedOptions: o } = Ie(e.originalNode, ee(e, "options"), ee(e, "modelValue"), e.initialValue), r = (re = e.originalNode) == null ? void 0 : re.classList, s = Object.values((ie = (ue = e.originalNode) == null ? void 0 : ue.style) != null ? ie : {});
    Le(e.originalNode);
    const { filterText: u, filteredOptions: v, filterValues: w } = Pe(a, e.filterFields), { searchingFlag: d } = Ae(
      a,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      w,
      e.fetchMode,
      e.fetchOptions
    ), c = y(null), h = y(null), S = y(null), x = y(!1), P = y(null), j = function(i) {
      const f = Y(i.target);
      f.push(i.target), !f.includes(c.value) && !f.includes(h.value) && (x.value = !1);
    };
    ae(() => {
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
    }), me(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: k, getTextWidth: I } = Te(a, o, x, c, h, P, e.maxWidth), C = (i) => {
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
    }, m = () => {
      T.value ? v.value.forEach((i) => {
        o.value.has(i.key) && o.value.delete(i.key);
      }) : v.value.forEach((i) => {
        o.value.has(i.key) || o.value.set(i.key, i.key);
      }), C(Array.from(o.value.keys()));
    };
    R(x, (i, f) => {
      i != f && (i ? e.search && Z(() => {
        S.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const E = M(() => o.value.size == a.value.length), T = M(() => v.value.reduce((i, f) => i && o.value.has(f.key), !0)), se = M(() => o.value.size == 0), Be = M(() => {
      var i, f, _, q, W;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (E.value)
          return "All selected";
        if (se.value)
          return "No selection";
        const $ = c.value ? getComputedStyle(c.value) : null, ze = ((i = c.value) == null ? void 0 : i.clientWidth) - parseInt($ == null ? void 0 : $.paddingLeft) - parseInt($ == null ? void 0 : $.paddingRight);
        let Q = o.value.size + " selected - ", ce = !0;
        for (let qe of o.value)
          if (ce ? ce = !1 : Q += ", ", Q += (_ = (f = a.map.get(qe[0])) == null ? void 0 : f.value) != null ? _ : d.value ? "Loading..." : "Value not found", ze < I(Q))
            return o.value.size + " selected";
        return Q;
      } else
        for (let $ of o.value)
          return (W = (q = a.map.get($[0])) == null ? void 0 : q.value) != null ? W : d.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: $e, containerProps: Fe, wrapperProps: je } = Ne(
      v,
      {
        itemHeight: 32
      }
    );
    return (i, f) => (g(), b(F, null, [
      e.showSelected ? (g(), b("div", pt, [
        (g(!0), b(F, null, J(p(o), (_) => {
          var q;
          return g(), b("div", {
            key: _,
            onClick: (W) => N(_[0]),
            class: "selection-badge"
          }, [
            de(D((q = p(a).find((W) => W.key == _[0])) == null ? void 0 : q.value) + " ", 1),
            O("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, gt)
          ], 8, ht);
        }), 128))
      ])) : A("", !0),
      O("input", K({
        onFocus: f[0] || (f[0] = (_) => x.value = !0),
        onClick: f[1] || (f[1] = (_) => x.value = !0),
        ref_key: "inputNode",
        ref: c,
        value: p(Be),
        class: "extra-select extra-select-input",
        readonly: ""
      }, i.$attrs), null, 16, yt),
      P.value ? (g(), te(ne, {
        key: 1,
        to: P.value
      }, [
        X(O("div", {
          class: we(["extra-select dropdown", { searching: p(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: be(p(k))
        }, [
          e.search ? (g(), b("div", mt, [
            X(O("input", {
              ref_key: "searchNode",
              ref: S,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (_) => _e(u) ? u.value = _ : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Qe, p(u)]
            ])
          ])) : A("", !0),
          p(u).length >= e.minChars ? (g(), b(F, { key: 1 }, [
            p(l) ? (g(), b("div", wt, [
              p(u).length == 0 ? (g(), b("div", {
                key: 0,
                onClick: B,
                class: "all-select"
              }, [
                O("div", bt, [
                  O("input", {
                    checked: p(E),
                    type: "checkbox"
                  }, null, 8, _t),
                  kt
                ])
              ])) : A("", !0),
              p(v).length > 0 && p(u).length > 0 ? (g(), b("div", {
                key: 1,
                onClick: m,
                class: "all-select"
              }, [
                O("div", Ot, [
                  O("input", {
                    checked: p(T),
                    type: "checkbox"
                  }, null, 8, St),
                  xt
                ])
              ])) : A("", !0),
              O("div", {
                class: "clear",
                onClick: L
              }, "Clear")
            ])) : A("", !0),
            p(v).length == 0 ? (g(), b("div", Ct, "No matches found")) : A("", !0)
          ], 64)) : (g(), b("div", Et, "Insert at least " + D(e.minChars) + " characters", 1)),
          O("div", K(p(Fe), { class: "scroller" }), [
            O("div", ke(Oe(p(je))), [
              (g(!0), b(F, null, J(p($e), (_) => (g(), b("button", {
                key: _.index,
                class: "dropdown-row",
                onClick: Se((q) => N(_.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", Lt, [
                  p(l) ? (g(), b("input", {
                    key: 0,
                    checked: p(o).has(_.data.key),
                    type: "checkbox"
                  }, null, 8, It)) : A("", !0),
                  de(" " + D(_.data.value), 1)
                ])
              ], 8, Nt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, x.value]
        ])
      ], 8, ["to"])) : A("", !0),
      e.originalNode ? (g(), te(ne, {
        key: 2,
        to: e.originalNode
      }, [
        (g(!0), b(F, null, J(p(o), (_) => (g(), b("option", {
          key: _[0],
          selected: "selected",
          value: _[0]
        }, null, 8, At))), 128))
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), Vt = {
  key: 0,
  class: "no-matches"
}, Mt = { key: 1 }, Bt = ["onClick"], $t = { class: "row-input" }, Ft = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, jt = /* @__PURE__ */ Object.assign(Ft, {
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
    const e = t, { options: l } = Ie(null, ee(e, "options"), y([])), a = (N = e.originalNode) == null ? void 0 : N.classList, o = Object.values((B = (L = e.originalNode) == null ? void 0 : L.style) != null ? B : {});
    Le(e.originalNode);
    const { filterText: r, filteredOptions: s, filterValues: u } = Pe(l, e.filterFields), { searchingFlag: v } = Ae(
      l,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      u,
      e.fetchMode,
      e.fetchOptions
    ), w = y(null), d = y(null), c = y(!1), h = y(null), S = function(m) {
      const E = Y(m.target);
      E.push(m.target), !E.includes(w.value) && !E.includes(d.value) && (c.value = !1);
    };
    ae(() => {
      if (e.dropdownContainer) {
        let m = !1;
        h.value = Y(w.value).find((E) => !!(E instanceof Element && (E.matches(e.dropdownContainer) && (m = !0), m && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(E).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let m of a)
          m != "extrasuggest" && w.value.classList.add(m);
        for (let m of o)
          w.value.style[m] = e.originalNode.style[m];
        o.includes("background-color") || (w.value.style.backgroundColor = "white"), r.value = e.originalNode.value, U(() => {
          e.modelValue != null && (r.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", S), window.document.addEventListener("focusin", S);
    }), me(() => {
      window.document.removeEventListener("mousedown", S), window.document.removeEventListener("focusin", S);
    });
    const { dropdownStyle: x } = Te(l, y([]), c, w, d, h, e.maxWidth), P = (m) => {
      r.value = l.map.get(m).value, c.value = !1;
    }, j = () => {
      var m;
      e.originalNode && (e.originalNode.value = r.value, (m = e.originalNode) == null || m.dispatchEvent(new Event("change", { bubbles: !0 }))), n("update:modelValue", r.value);
    };
    R(() => c.value, (m) => {
      m === !1 && j();
    });
    const { list: k, containerProps: I, wrapperProps: C } = Ne(
      s,
      {
        itemHeight: 32
      }
    );
    return (m, E) => (g(), b(F, null, [
      X(O("input", K({
        onFocus: E[0] || (E[0] = (T) => c.value = !0),
        onClick: E[1] || (E[1] = (T) => c.value = !0),
        ref_key: "inputNode",
        ref: w,
        "onUpdate:modelValue": E[2] || (E[2] = (T) => _e(r) ? r.value = T : null),
        class: "extra-select extra-select-input"
      }, m.$attrs), null, 16), [
        [Ge, p(r)]
      ]),
      h.value ? (g(), te(ne, {
        key: 0,
        to: h.value
      }, [
        X(O("div", {
          class: we(["extra-select dropdown", { searching: p(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: d,
          style: be(p(x))
        }, [
          p(r).length >= e.minChars ? (g(), b(F, { key: 0 }, [
            p(s).length == 0 ? (g(), b("div", Vt, "No matches found")) : A("", !0)
          ], 64)) : (g(), b("div", Mt, "Insert at least " + D(e.minChars) + " characters", 1)),
          O("div", K(p(I), { class: "scroller" }), [
            O("div", ke(Oe(p(C))), [
              (g(!0), b(F, null, J(p(k), (T) => (g(), b("button", {
                key: T.index,
                class: "dropdown-row",
                onClick: Se((se) => P(T.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", $t, D(T.data.value), 1)
              ], 8, Bt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, c.value]
        ])
      ], 8, ["to"])) : A("", !0)
    ], 64));
  }
}), Ve = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Ve.bindNew(t);
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
      const l = Ce(Tt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
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
      const l = Ce(jt, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Ve.init(), Me.init();
});
export {
  Ve as ExtraSelect,
  Me as ExtraSuggest
};
