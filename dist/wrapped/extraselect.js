import { unref as p, getCurrentScope as We, onScopeDispose as Ue, getCurrentInstance as De, onMounted as ne, nextTick as he, ref as y, shallowRef as He, watch as H, computed as M, watchEffect as D, watchPostEffect as Re, onUnmounted as ge, openBlock as g, createElementBlock as b, Fragment as $, renderList as J, createTextVNode as ue, toDisplayString as U, createElementVNode as O, createCommentVNode as P, createBlock as Y, Teleport as Z, withDirectives as K, normalizeClass as ye, normalizeStyle as me, isRef as we, vModelText as be, mergeProps as ke, normalizeProps as _e, guardReactiveProps as Oe, withModifiers as xe, vShow as Se, createApp as Ce } from "vue";
const V = /* @__PURE__ */ new WeakMap();
class j {
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
    return j.has(n, e) ? !1 : (j.put(n, e, !0), l());
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
function X(t, n) {
  n === void 0 && (n = window.document);
  for (var e = [], l = t.parentNode; l != null && l !== n; ) {
    var a = l;
    e.push(a), l = a.parentNode;
  }
  return e.push(n), e;
}
function Qe(t) {
  var n = Array.prototype.slice.call(t.childNodes);
  n.forEach(function(e) {
    t.removeChild(e);
  });
}
var ie;
const R = typeof window < "u";
R && ((ie = window == null ? void 0 : window.navigator) == null ? void 0 : ie.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ge(t) {
  return typeof t == "function" ? t() : p(t);
}
function Je(t) {
  return t;
}
function Ke(t) {
  return We() ? (Ue(t), !0) : !1;
}
function Xe(t, n = !0) {
  De() ? ne(t) : n ? t() : he(t);
}
function Ee(t) {
  var n;
  const e = Ge(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
const Ye = R ? window : void 0;
R && window.document;
R && window.navigator;
R && window.location;
function Ze(t, n = !1) {
  const e = y(), l = () => e.value = Boolean(t());
  return l(), Xe(l, n), e;
}
const ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, te = "__vueuse_ssr_handlers__";
ee[te] = ee[te] || {};
ee[te];
var ce = Object.getOwnPropertySymbols, et = Object.prototype.hasOwnProperty, tt = Object.prototype.propertyIsEnumerable, nt = (t, n) => {
  var e = {};
  for (var l in t)
    et.call(t, l) && n.indexOf(l) < 0 && (e[l] = t[l]);
  if (t != null && ce)
    for (var l of ce(t))
      n.indexOf(l) < 0 && tt.call(t, l) && (e[l] = t[l]);
  return e;
};
function lt(t, n, e = {}) {
  const l = e, { window: a = Ye } = l, o = nt(l, ["window"]);
  let r;
  const s = Ze(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, v = H(() => Ee(t), (d) => {
    u(), s.value && a && d && (r = new ResizeObserver(n), r.observe(d, o));
  }, { immediate: !0, flush: "post" }), w = () => {
    u(), v();
  };
  return Ke(w), {
    isSupported: s,
    stop: w
  };
}
function ot(t, n = { width: 0, height: 0 }, e = {}) {
  const { box: l = "content-box" } = e, a = y(n.width), o = y(n.height);
  return lt(t, ([r]) => {
    const s = l === "border-box" ? r.borderBoxSize : l === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    s ? (a.value = s.reduce((u, { inlineSize: v }) => u + v, 0), o.value = s.reduce((u, { blockSize: v }) => u + v, 0)) : (a.value = r.contentRect.width, o.value = r.contentRect.height);
  }, e), H(() => Ee(t), (r) => {
    a.value = r ? n.width : 0, o.value = r ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var de;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(de || (de = {}));
var at = Object.defineProperty, fe = Object.getOwnPropertySymbols, st = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable, ve = (t, n, e) => n in t ? at(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, ut = (t, n) => {
  for (var e in n || (n = {}))
    st.call(n, e) && ve(t, e, n[e]);
  if (fe)
    for (var e of fe(n))
      rt.call(n, e) && ve(t, e, n[e]);
  return t;
};
const it = {
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
ut({
  linear: Je
}, it);
function Ne(t, n) {
  const e = y(), l = ot(e), a = y([]), o = He(t), r = y({ start: 0, end: 10 }), { itemHeight: s, overscan: u = 5 } = n, v = (_) => {
    if (typeof s == "number")
      return Math.ceil(_ / s);
    const { start: I = 0 } = r.value;
    let C = 0, N = 0;
    for (let L = I; L < o.value.length; L++)
      if (C += s(L), C >= _) {
        N = L;
        break;
      }
    return N - I;
  }, w = (_) => {
    if (typeof s == "number")
      return Math.floor(_ / s) + 1;
    let I = 0, C = 0;
    for (let N = 0; N < o.value.length; N++)
      if (I += s(N), I >= _) {
        C = N;
        break;
      }
    return C + 1;
  }, d = () => {
    const _ = e.value;
    if (_) {
      const I = w(_.scrollTop), C = v(_.clientHeight), N = I - u, L = I + C + u;
      r.value = {
        start: N < 0 ? 0 : N,
        end: L > o.value.length ? o.value.length : L
      }, a.value = o.value.slice(r.value.start, r.value.end).map((B, m) => ({
        data: B,
        index: m + r.value.start
      }));
    }
  };
  H([l.width, l.height, t], () => {
    d();
  });
  const c = M(() => typeof s == "number" ? o.value.length * s : o.value.reduce((_, I, C) => _ + s(C), 0)), h = (_) => typeof s == "number" ? _ * s : o.value.slice(0, _).reduce((C, N, L) => C + s(L), 0), x = (_) => {
    e.value && (e.value.scrollTop = h(_), d());
  }, S = M(() => h(r.value.start)), A = M(() => ({
    style: {
      width: "100%",
      height: `${c.value - S.value}px`,
      marginTop: `${S.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: x,
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
const ct = (t, n) => {
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
let dt = 1;
const Le = (t) => {
  t && (t.style.display = "none", Qe(t));
}, Ie = (t, n, e, l) => {
  var r;
  const a = y(/* @__PURE__ */ new Map());
  D(() => {
    a.value.clear();
    for (let s of e)
      a.value.set(s, s);
  });
  const o = y([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let s of o.value)
        o.map.set(s.key, s);
  }, D(() => {
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
  return ct(o, (r = t == null ? void 0 : t.id) != null ? r : "extraselect_" + (++dt).toString()), { options: o, selectedOptions: a };
}, pe = async function(t, n = null, e = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...(o = e.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...e.body })
  };
  return await (await fetch(t, l)).json();
}, Pe = (t, n, e, l, a, o, r = "limited", s = {}) => {
  const u = y(0), v = y(!1), w = M(() => v.value || u.value > 0);
  if (n != null && n.length > 0)
    if (e) {
      const d = [];
      D((c) => {
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
              h = d.reduce((x, S) => x && !l.value.startsWith(S), !0);
              break;
          }
          if (h) {
            v.value = !0;
            const x = setTimeout(() => {
              d.push(l.value), u.value += 1, s.body = { ...s.body, ...o.value }, pe(n, l.value, s).then((S) => {
                t.actions.addRange(S), t.actions.sort(), u.value -= 1, v.value = !1;
              });
            }, 500);
            c(() => {
              clearTimeout(x);
            });
          }
        }
      });
    } else
      pe(n, null, s).then((d) => {
        t.actions.addRange(d), t.actions.sort();
      });
  return { searchingFlag: w };
}, Ae = (t, n) => {
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
  return D(() => {
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
      const x = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(d, Math.max(...t.value.map((S) => u(S.value))) + 20 + x * 3);
    }
    return r;
  }), w = y({
    position: "absolute",
    "min-width": "max-content"
  });
  return Re(() => {
    e.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var d = G(l.value), c = G(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var c = G(o.value);
    let h = -c.left + d.left;
    const x = window.document.documentElement.clientWidth;
    h + v.value > x && (h = x - v.value), w.value = {
      position: "absolute",
      "min-width": "max-content",
      width: v.value.toString() + "px",
      top: (-c.top + d.top + d.height).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: w, getTextWidth: u };
}, ft = {
  key: 0,
  class: "extra-select selection"
}, vt = ["onClick"], pt = ["innerHTML"], ht = ["value"], gt = {
  key: 0,
  class: "input-searching"
}, yt = {
  key: 0,
  class: "allselect-clear"
}, mt = { class: "row-input" }, wt = ["checked"], bt = /* @__PURE__ */ O("b", null, "Select all", -1), kt = { class: "row-input" }, _t = ["checked"], Ot = /* @__PURE__ */ O("b", null, "Select Filtered", -1), xt = {
  key: 1,
  class: "no-matches"
}, St = { key: 2 }, Ct = ["onClick"], Et = { class: "row-input" }, Nt = ["checked"], Lt = ["value"], It = {
  __name: "ExtraSelect",
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
    var oe, ae, se;
    const e = t, l = M(() => {
      var i, f;
      return (f = (i = e.originalNode) == null ? void 0 : i.multiple) != null ? f : e.multiple;
    }), { options: a, selectedOptions: o } = Ie(e.originalNode, e.options, e.modelValue, e.initialValue), r = (oe = e.originalNode) == null ? void 0 : oe.classList, s = Object.values((se = (ae = e.originalNode) == null ? void 0 : ae.style) != null ? se : {});
    Le(e.originalNode);
    const { filterText: u, filteredOptions: v, filterValues: w } = Ae(a, e.filterFields), { searchingFlag: d } = Pe(
      a,
      e.url,
      e.searchableUrl,
      u,
      e.minChars,
      w,
      e.fetchMode,
      e.fetchOptions
    ), c = y(null), h = y(null), x = y(null), S = y(!1), A = y(null), z = function(i) {
      const f = X(i.target);
      f.push(i.target), !f.includes(c.value) && !f.includes(h.value) && (S.value = !1);
    };
    ne(() => {
      if (e.dropdownContainer) {
        let i = !1;
        A.value = X(c.value).find((f) => !!(f instanceof Element && (f.matches(e.dropdownContainer) && (i = !0), i && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (A.value == null && (A.value = document.querySelector("body")), e.originalNode) {
        for (let i of r)
          i != "extraselect" && c.value.classList.add(i);
        for (let i of s)
          c.value.style[i] = e.originalNode.style[i];
        s.includes("background-color") || (c.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", z), window.document.addEventListener("focusin", z);
    }), ge(() => {
      window.document.removeEventListener("mousedown", z), window.document.removeEventListener("focusin", z);
    });
    const { dropdownStyle: _, getTextWidth: I } = Te(a, o, S, c, h, A, e.maxWidth), C = (i) => {
      var f;
      (f = e.originalNode) == null || f.dispatchEvent(new Event("change", { bubbles: !0 })), n("update:modelValue", i);
    }, N = (i) => {
      l.value ? o.value.has(i) ? o.value.delete(i) : o.value.set(i, i) : (o.value.clear(), o.value.set(i, i), S.value = !1), C(Array.from(o.value.keys()));
    }, L = (i) => {
      B(i, !1), u.value = "";
    }, B = (i, f = null) => {
      f == null && (f = !E.value), f ? (o.value.clear(), a.value.forEach((k) => o.value.set(k.key, k.key))) : o.value.clear(), C(Array.from(o.value.keys()));
    }, m = () => {
      T.value ? v.value.forEach((i) => {
        o.value.has(i.key) && o.value.delete(i.key);
      }) : v.value.forEach((i) => {
        o.value.has(i.key) || o.value.set(i.key, i.key);
      }), C(Array.from(o.value.keys()));
    };
    H(S, (i, f) => {
      i != f && (i ? e.search && he(() => {
        x.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const E = M(() => o.value.size == a.value.length), T = M(() => v.value.reduce((i, f) => i && o.value.has(f.key), !0)), le = M(() => o.value.size == 0), Be = M(() => {
      var i, f, k, q, W;
      if (a.value.length < 0)
        return "";
      if (l.value) {
        if (E.value)
          return "All selected";
        if (le.value)
          return "No selection";
        const F = c.value ? getComputedStyle(c.value) : null, je = ((i = c.value) == null ? void 0 : i.clientWidth) - parseInt(F == null ? void 0 : F.paddingLeft) - parseInt(F == null ? void 0 : F.paddingRight);
        let Q = o.value.size + " selected - ", re = !0;
        for (let qe of o.value)
          if (re ? re = !1 : Q += ", ", Q += (k = (f = a.map.get(qe[0])) == null ? void 0 : f.value) != null ? k : d.value ? "Loading..." : "Value not found", je < I(Q))
            return o.value.size + " selected";
        return Q;
      } else
        for (let F of o.value)
          return (W = (q = a.map.get(F[0])) == null ? void 0 : q.value) != null ? W : d.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Fe, containerProps: $e, wrapperProps: ze } = Ne(
      v,
      {
        itemHeight: 32
      }
    );
    return (i, f) => (g(), b($, null, [
      e.showSelected ? (g(), b("div", ft, [
        (g(!0), b($, null, J(p(o), (k) => {
          var q;
          return g(), b("div", {
            key: k,
            onClick: (W) => N(k[0]),
            class: "selection-badge"
          }, [
            ue(U((q = p(a).find((W) => W.key == k[0])) == null ? void 0 : q.value) + " ", 1),
            O("div", {
              class: "selection-remove",
              innerHTML: e.removeIcon
            }, null, 8, pt)
          ], 8, vt);
        }), 128))
      ])) : P("", !0),
      O("input", {
        onFocus: f[0] || (f[0] = (k) => S.value = !0),
        onClick: f[1] || (f[1] = (k) => S.value = !0),
        ref_key: "inputNode",
        ref: c,
        value: p(Be),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, ht),
      A.value ? (g(), Y(Z, {
        key: 1,
        to: A.value
      }, [
        K(O("div", {
          class: ye(["extra-select dropdown", { searching: p(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: me(p(_))
        }, [
          e.search ? (g(), b("div", gt, [
            K(O("input", {
              ref_key: "searchNode",
              ref: x,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (k) => we(u) ? u.value = k : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [be, p(u)]
            ])
          ])) : P("", !0),
          p(u).length >= e.minChars ? (g(), b($, { key: 1 }, [
            p(l) ? (g(), b("div", yt, [
              p(u).length == 0 ? (g(), b("div", {
                key: 0,
                onClick: B,
                class: "all-select"
              }, [
                O("div", mt, [
                  O("input", {
                    checked: p(E),
                    type: "checkbox"
                  }, null, 8, wt),
                  bt
                ])
              ])) : P("", !0),
              p(v).length > 0 && p(u).length > 0 ? (g(), b("div", {
                key: 1,
                onClick: m,
                class: "all-select"
              }, [
                O("div", kt, [
                  O("input", {
                    checked: p(T),
                    type: "checkbox"
                  }, null, 8, _t),
                  Ot
                ])
              ])) : P("", !0),
              O("div", {
                class: "clear",
                onClick: L
              }, "Clear")
            ])) : P("", !0),
            p(v).length == 0 ? (g(), b("div", xt, "No matches found")) : P("", !0)
          ], 64)) : (g(), b("div", St, "Insert at least " + U(e.minChars) + " characters", 1)),
          O("div", ke(p($e), { class: "scroller" }), [
            O("div", _e(Oe(p(ze))), [
              (g(!0), b($, null, J(p(Fe), (k) => (g(), b("button", {
                key: k.index,
                class: "dropdown-row",
                onClick: xe((q) => N(k.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", Et, [
                  p(l) ? (g(), b("input", {
                    key: 0,
                    checked: p(o).has(k.data.key),
                    type: "checkbox"
                  }, null, 8, Nt)) : P("", !0),
                  ue(" " + U(k.data.value), 1)
                ])
              ], 8, Ct))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Se, S.value]
        ])
      ], 8, ["to"])) : P("", !0),
      e.originalNode ? (g(), Y(Z, {
        key: 2,
        to: e.originalNode
      }, [
        (g(!0), b($, null, J(p(o), (k) => (g(), b("option", {
          key: k[0],
          selected: "selected",
          value: k[0]
        }, null, 8, Lt))), 128))
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}, Pt = {
  key: 0,
  class: "no-matches"
}, At = { key: 1 }, Tt = ["onClick"], Vt = { class: "row-input" }, Mt = {
  __name: "ExtraSuggest",
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
    const e = t, { options: l } = Ie(null, e.options, []), a = (N = e.originalNode) == null ? void 0 : N.classList, o = Object.values((B = (L = e.originalNode) == null ? void 0 : L.style) != null ? B : {});
    Le(e.originalNode);
    const { filterText: r, filteredOptions: s, filterValues: u } = Ae(l, e.filterFields), { searchingFlag: v } = Pe(
      l,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      u,
      e.fetchMode,
      e.fetchOptions
    ), w = y(null), d = y(null), c = y(!1), h = y(null), x = function(m) {
      const E = X(m.target);
      E.push(m.target), !E.includes(w.value) && !E.includes(d.value) && (c.value = !1);
    };
    ne(() => {
      if (e.dropdownContainer) {
        let m = !1;
        h.value = X(w.value).find((E) => !!(E instanceof Element && (E.matches(e.dropdownContainer) && (m = !0), m && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(E).position))));
      }
      if (h.value == null && (h.value = document.querySelector("body")), e.originalNode) {
        for (let m of a)
          m != "extrasuggest" && w.value.classList.add(m);
        for (let m of o)
          w.value.style[m] = e.originalNode.style[m];
        o.includes("background-color") || (w.value.style.backgroundColor = "white"), r.value = e.originalNode.value, D(() => {
          e.modelValue != null && (r.value = e.modelValue);
        });
      }
      window.document.addEventListener("mousedown", x), window.document.addEventListener("focusin", x);
    }), ge(() => {
      window.document.removeEventListener("mousedown", x), window.document.removeEventListener("focusin", x);
    });
    const { dropdownStyle: S } = Te(l, y([]), c, w, d, h, e.maxWidth), A = (m) => {
      r.value = l.map.get(m).value, c.value = !1;
    }, z = () => {
      var m;
      e.originalNode && (e.originalNode.value = r.value, (m = e.originalNode) == null || m.dispatchEvent(new Event("change", { bubbles: !0 }))), n("update:modelValue", r.value);
    };
    H(() => c.value, (m) => {
      m === !1 && z();
    });
    const { list: _, containerProps: I, wrapperProps: C } = Ne(
      s,
      {
        itemHeight: 32
      }
    );
    return (m, E) => (g(), b($, null, [
      K(O("input", {
        onFocus: E[0] || (E[0] = (T) => c.value = !0),
        onClick: E[1] || (E[1] = (T) => c.value = !0),
        ref_key: "inputNode",
        ref: w,
        "onUpdate:modelValue": E[2] || (E[2] = (T) => we(r) ? r.value = T : null),
        class: "extra-select extra-select-input"
      }, null, 544), [
        [be, p(r)]
      ]),
      h.value ? (g(), Y(Z, {
        key: 0,
        to: h.value
      }, [
        K(O("div", {
          class: ye(["extra-select dropdown", { searching: p(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: d,
          style: me(p(S))
        }, [
          p(r).length >= e.minChars ? (g(), b($, { key: 0 }, [
            p(s).length == 0 ? (g(), b("div", Pt, "No matches found")) : P("", !0)
          ], 64)) : (g(), b("div", At, "Insert at least " + U(e.minChars) + " characters", 1)),
          O("div", ke(p(I), { class: "scroller" }), [
            O("div", _e(Oe(p(C))), [
              (g(!0), b($, null, J(p(_), (T) => (g(), b("button", {
                key: T.index,
                class: "dropdown-row",
                onClick: xe((le) => A(T.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                O("div", Vt, U(T.data.value), 1)
              ], 8, Tt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Se, c.value]
        ])
      ], 8, ["to"])) : P("", !0)
    ], 64));
  }
}, Ve = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Ve.bindNew(t);
    });
  },
  bindNew(t) {
    j.lock(t, "extra-select", () => {
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
      const l = Ce(It, n);
      l.mount(e), t.addEventListener("remove", function() {
        l.unmount(), e.remove(), t.remove(), j.remove(t, "extra-select");
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
    j.lock(t, "extra-suggest", () => {
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
        l.unmount(), e.remove(), t.remove(), j.remove(t, "extra-suggest");
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
