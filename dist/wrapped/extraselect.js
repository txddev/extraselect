import { unref as p, getCurrentScope as me, onScopeDispose as we, getCurrentInstance as _e, onMounted as ue, nextTick as ie, ref as w, shallowRef as be, watch as q, computed as P, watchEffect as $, watchPostEffect as Oe, onUnmounted as ke, openBlock as m, createElementBlock as b, Fragment as B, renderList as Q, createTextVNode as X, toDisplayString as H, createElementVNode as C, createCommentVNode as T, createBlock as Y, Teleport as Z, withDirectives as ee, normalizeClass as xe, normalizeStyle as Ce, isRef as Se, vModelText as Ee, mergeProps as Ne, normalizeProps as Ie, guardReactiveProps as Pe, withModifiers as Te, vShow as Le, createApp as Ae } from "vue";
const I = /* @__PURE__ */ new WeakMap();
class V {
  static put(n, t, o) {
    I.has(n) || I.set(n, /* @__PURE__ */ new Map()), I.get(n).set(t, o);
  }
  static get(n, t) {
    return I.get(n).get(t);
  }
  static has(n, t) {
    return I.has(n) && I.get(n).has(t);
  }
  static remove(n, t) {
    var o = I.get(n).delete(t);
    return !I.get(n).size === 0 && I.delete(n), o;
  }
  static lock(n, t, o) {
    return V.has(n, t) ? !1 : (V.put(n, t, !0), o());
  }
}
window.__Store = I;
var te;
const F = typeof window < "u";
F && ((te = window == null ? void 0 : window.navigator) == null ? void 0 : te.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Me(e) {
  return typeof e == "function" ? e() : p(e);
}
function ze(e) {
  return e;
}
function Be(e) {
  return me() ? (we(e), !0) : !1;
}
function Ve(e, n = !0) {
  _e() ? ue(e) : n ? e() : ie(e);
}
function ce(e) {
  var n;
  const t = Me(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Fe = F ? window : void 0;
F && window.document;
F && window.navigator;
F && window.location;
function je(e, n = !1) {
  const t = w(), o = () => t.value = Boolean(e());
  return o(), Ve(o, n), t;
}
const R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, U = "__vueuse_ssr_handlers__";
R[U] = R[U] || {};
R[U];
var ne = Object.getOwnPropertySymbols, We = Object.prototype.hasOwnProperty, $e = Object.prototype.propertyIsEnumerable, qe = (e, n) => {
  var t = {};
  for (var o in e)
    We.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && ne)
    for (var o of ne(e))
      n.indexOf(o) < 0 && $e.call(e, o) && (t[o] = e[o]);
  return t;
};
function Qe(e, n, t = {}) {
  const o = t, { window: a = Fe } = o, l = qe(o, ["window"]);
  let r;
  const i = je(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = q(() => ce(e), (d) => {
    u(), i.value && a && d && (r = new ResizeObserver(n), r.observe(d, l));
  }, { immediate: !0, flush: "post" }), O = () => {
    u(), c();
  };
  return Be(O), {
    isSupported: i,
    stop: O
  };
}
function He(e, n = { width: 0, height: 0 }, t = {}) {
  const { box: o = "content-box" } = t, a = w(n.width), l = w(n.height);
  return Qe(e, ([r]) => {
    const i = o === "border-box" ? r.borderBoxSize : o === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    i ? (a.value = i.reduce((u, { inlineSize: c }) => u + c, 0), l.value = i.reduce((u, { blockSize: c }) => u + c, 0)) : (a.value = r.contentRect.width, l.value = r.contentRect.height);
  }, t), q(() => ce(e), (r) => {
    a.value = r ? n.width : 0, l.value = r ? n.height : 0;
  }), {
    width: a,
    height: l
  };
}
var le;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(le || (le = {}));
var Re = Object.defineProperty, oe = Object.getOwnPropertySymbols, Ue = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, ae = (e, n, t) => n in e ? Re(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ge = (e, n) => {
  for (var t in n || (n = {}))
    Ue.call(n, t) && ae(e, t, n[t]);
  if (oe)
    for (var t of oe(n))
      De.call(n, t) && ae(e, t, n[t]);
  return e;
};
const Je = {
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
Ge({
  linear: ze
}, Je);
function Ke(e, n) {
  const t = w(), o = He(t), a = w([]), l = be(e), r = w({ start: 0, end: 10 }), { itemHeight: i, overscan: u = 5 } = n, c = (g) => {
    if (typeof i == "number")
      return Math.ceil(g / i);
    const { start: S = 0 } = r.value;
    let k = 0, x = 0;
    for (let E = S; E < l.value.length; E++)
      if (k += i(E), k >= g) {
        x = E;
        break;
      }
    return x - S;
  }, O = (g) => {
    if (typeof i == "number")
      return Math.floor(g / i) + 1;
    let S = 0, k = 0;
    for (let x = 0; x < l.value.length; x++)
      if (S += i(x), S >= g) {
        k = x;
        break;
      }
    return k + 1;
  }, d = () => {
    const g = t.value;
    if (g) {
      const S = O(g.scrollTop), k = c(g.clientHeight), x = S - u, E = S + k + u;
      r.value = {
        start: x < 0 ? 0 : x,
        end: E > l.value.length ? l.value.length : E
      }, a.value = l.value.slice(r.value.start, r.value.end).map((A, j) => ({
        data: A,
        index: j + r.value.start
      }));
    }
  };
  q([o.width, o.height, e], () => {
    d();
  });
  const _ = P(() => typeof i == "number" ? l.value.length * i : l.value.reduce((g, S, k) => g + i(k), 0)), h = (g) => typeof i == "number" ? g * i : l.value.slice(0, g).reduce((k, x, E) => k + i(E), 0), y = (g) => {
    t.value && (t.value.scrollTop = h(g), d());
  }, N = P(() => h(r.value.start)), L = P(() => ({
    style: {
      width: "100%",
      height: `${_.value - N.value}px`,
      marginTop: `${N.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: y,
    containerProps: {
      ref: t,
      onScroll: () => {
        d();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: L
  };
}
const W = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let n = e.getBoundingClientRect();
  return {
    top: n.top + window.scrollY,
    left: n.left + window.scrollX,
    width: n.width,
    height: n.height
  };
}, se = function(e, n) {
  n === void 0 && (n = document);
  for (var t = [], o = e.parentNode; o !== n; ) {
    var a = o;
    t.push(a), o = a.parentNode;
  }
  return t.push(n), t;
}, Xe = function(e) {
  var n = Array.prototype.slice.call(e.childNodes);
  n.forEach(function(t) {
    e.removeChild(t);
  });
}, Ye = (e, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const t = {
    defaultArray: e.value,
    get: () => e.value,
    push: (o, a, l = null) => {
      const r = e.map.get(o);
      if (r)
        r.value = a, r.data = l;
      else {
        let i = { value: a, key: o, data: l };
        e.value.push(i), e.map.set(i.key, i);
      }
    },
    addRange: (o) => {
      for (let a of o)
        e.actions.push(a.key, a.value, a.data);
    },
    remove: (o) => {
      e.value.splice(e.value.findIndex((a) => a.key == o), 1);
    },
    clear: () => {
      e.value = [];
    },
    sort: (o = null) => {
      o == null && (o = (a, l) => a.value.localeCompare(l.value)), e.value = e.value.sort(o);
    },
    setDefault: function(o) {
      this.defaultArray = o;
    },
    restoreDefault: function() {
      e.value = this.defaultArray;
    },
    filter: function(o) {
    }
  };
  window.ExtraSelectOptions[n] = t, e.actions = t;
};
let Ze = 1;
const et = (e) => {
  e && (e.style.display = "none", Xe(e));
}, tt = (e, n, t, o) => {
  var r, i;
  const a = w(/* @__PURE__ */ new Map());
  $(() => {
    a.value.clear();
    for (let u of t)
      a.value.set(u, u);
  });
  const l = w([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let u of l.value)
        l.map.set(u.key, u);
  }, l.rebuildMap(), $(() => {
    l.value = n;
  }), e) {
    a.value.clear();
    for (let u of Array.apply(null, e.selectedOptions).map((c) => c.value).filter((c) => c))
      a.value.set(u, u);
    l.value = Array.apply(null, e.options).reduce((u, c) => (u.push({ value: c.text, key: c.value, data: c.dataset }), u), []), l.rebuildMap();
  }
  return Ye(l, (i = (r = e == null ? void 0 : e.id) != null ? r : o) != null ? i : "extraselect_" + (++Ze).toString()), { options: l, selectedOptions: a };
}, re = async function(e, n = null, t = {}) {
  var l;
  const o = {
    method: "POST",
    credentials: "include",
    ...t,
    headers: { "Content-Type": "application/json", ...(l = t.headers) != null ? l : {} },
    body: JSON.stringify({ search: n, ...t.body })
  };
  return await (await fetch(e, o)).json();
}, nt = (e, n, t, o, a, l = "limited", r = {}) => {
  const i = w(0), u = w(!1), c = P(() => u.value || i.value > 0);
  if (n != null && n.length > 0)
    if (t) {
      const O = [];
      $((d) => {
        if (o.value.length >= a) {
          let _ = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              _ = !O.includes(o.value);
              break;
            case "complete":
              _ = O.reduce((h, y) => h && !o.value.startsWith(y), !0);
              break;
          }
          if (_) {
            u.value = !0;
            const h = setTimeout(() => {
              O.push(o.value), i.value += 1, re(n, o.value, r).then((y) => {
                e.actions.addRange(y), e.actions.sort(), i.value -= 1, u.value = !1;
              });
            }, 500);
            d(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      re(n, null, r).then((O) => {
        e.actions.addRange(O), e.actions.sort();
      });
  return { searchingFlag: c };
}, lt = (e, n) => {
  const t = w(""), o = w([]), a = function(l, r) {
    return l.value.filter((u) => r.length > 0 ? u.value.toLowerCase().includes(r.toLowerCase()) : !0);
  };
  return $(() => {
    t.value.length >= n ? o.value = a(e, t.value) : o.value = [];
  }), { filterText: t, filteredOptions: o };
}, ot = (e, n, t, o, a, l, r) => {
  const i = getComputedStyle(document.querySelector("body")).font, u = function(d) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = i, h.measureText(d).width;
  }, c = P(() => {
    var _, h;
    const d = (_ = W(o.value).width) != null ? _ : 100;
    if (r === "inherit")
      return d;
    if (r == null || r === "dynamic") {
      const y = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(d, Math.max(...e.value.map((N) => u(N.value))) + 20 + y * 3);
    }
    return r;
  }), O = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Oe(() => {
    t.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var d = W(o.value), _ = W(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var _ = W(l.value);
    let h = -_.left + d.left;
    const y = window.document.documentElement.clientWidth;
    h + c.value > y && (h = y - c.value), O.value = {
      position: "absolute",
      "min-width": "max-content",
      width: c.value.toString() + "px",
      top: (-_.top + d.top + d.height).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: O, getTextWidth: u };
}, at = {
  key: 0,
  class: "extra-select selection"
}, st = ["onClick"], rt = ["innerHTML"], ut = ["value"], it = {
  key: 0,
  class: "input-searching"
}, ct = {
  key: 0,
  class: "allselect-clear"
}, dt = { class: "row-input" }, ft = ["checked"], vt = /* @__PURE__ */ C("b", null, "Select all", -1), pt = { class: "row-input" }, ht = ["checked"], yt = /* @__PURE__ */ C("b", null, "Select Filtered", -1), gt = {
  key: 1,
  class: "no-matches"
}, mt = { key: 2 }, wt = ["onClick"], _t = { class: "row-input" }, bt = ["checked"], Ot = ["value"], kt = {
  __name: "ExtraSelect",
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    modelValue: { type: Array, required: !1, default: [] },
    url: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    search: { type: Boolean, default: !0 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    showSelected: { type: Boolean, default: !1 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    var G, J, K;
    const t = e, o = P(() => {
      var s, f;
      return (f = (s = t.originalNode) == null ? void 0 : s.multiple) != null ? f : t.multiple;
    }), { options: a, selectedOptions: l } = tt(t.originalNode, t.options, t.modelValue), r = (G = t.originalNode) == null ? void 0 : G.classList, i = Object.values((K = (J = t.originalNode) == null ? void 0 : J.style) != null ? K : {});
    et(t.originalNode);
    const { filterText: u, filteredOptions: c } = lt(a, t.minChars), { searchingFlag: O } = nt(
      a,
      t.url,
      t.searchableUrl,
      u,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), d = w(null), _ = w(null), h = w(null), y = w(!1), N = w(null), L = function(s) {
      const f = se(s.target);
      f.push(s.target), !f.includes(d.value) && !f.includes(_.value) && (y.value = !1);
    };
    ue(() => {
      if (t.dropdownContainer) {
        let s = !1;
        N.value = se(d.value).find((f) => !!(f instanceof Element && (f.matches(t.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), t.originalNode) {
        for (let s of r)
          s != "extraselect" && d.value.classList.add(s);
        for (let s of i)
          d.value.style[s] = t.originalNode.style[s];
        i.includes("background-color") || (d.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), ke(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: D, getTextWidth: g } = ot(a, l, y, d, _, N, t.maxWidth), S = (s) => {
      o.value ? l.value.has(s) ? l.value.delete(s) : l.value.set(s, s) : (l.value.clear(), l.value.set(s, s), y.value = !1), n("update:modelValue", Array.from(l.value.keys()));
    }, k = (s) => {
      x(s, !1), u.value = "";
    }, x = (s, f = null) => {
      f == null && (f = !A.value), f ? (l.value.clear(), a.value.forEach((v) => l.value.set(v.key, v.key))) : l.value.clear(), n("update:modelValue", Array.from(l.value.keys()));
    }, E = () => {
      j.value ? c.value.forEach((s) => {
        l.value.has(s.key) && l.value.delete(s.key);
      }) : c.value.forEach((s) => {
        l.value.has(s.key) || l.value.set(s.key, s.key);
      }), n("update:modelValue", Array.from(l.value.keys()));
    };
    q(y, (s, f) => {
      s != f && (s ? t.search && ie(() => {
        h.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const A = P(() => l.value.size == a.value.length), j = P(() => c.value.reduce((s, f) => s && l.value.has(f.key), !0)), fe = P(() => l.value.size == 0), ve = P(() => {
      var z;
      if (A.value)
        return "All selected";
      if (fe.value)
        return "No selection";
      const s = d.value ? getComputedStyle(d.value) : null, f = ((z = d.value) == null ? void 0 : z.clientWidth) - parseInt(s == null ? void 0 : s.paddingLeft) - parseInt(s == null ? void 0 : s.paddingRight);
      let v = l.value.size + " selected - ", M = !0;
      for (let ge of l.value)
        if (M ? M = !1 : v += ", ", v += a.map.get(ge[0]).value, f < g(v))
          return l.value.size + " selected";
      return v;
    }), { list: pe, containerProps: he, wrapperProps: ye } = Ke(
      c,
      {
        itemHeight: 32
      }
    );
    return (s, f) => (m(), b(B, null, [
      t.showSelected ? (m(), b("div", at, [
        (m(!0), b(B, null, Q(p(l), (v) => {
          var M;
          return m(), b("div", {
            key: v,
            onClick: (z) => S(v[0]),
            class: "selection-badge"
          }, [
            X(H((M = p(a).find((z) => z.key == v[0])) == null ? void 0 : M.value) + " ", 1),
            C("div", {
              class: "selection-remove",
              innerHTML: t.removeIcon
            }, null, 8, rt)
          ], 8, st);
        }), 128))
      ])) : T("", !0),
      C("input", {
        onFocus: f[0] || (f[0] = (v) => y.value = !0),
        onClick: f[1] || (f[1] = (v) => y.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: p(ve),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, ut),
      N.value ? (m(), Y(Z, {
        key: 1,
        to: N.value
      }, [
        ee(C("div", {
          class: xe(["extra-select dropdown", { searching: p(O) > 0 }]),
          ref_key: "dropdownNode",
          ref: _,
          style: Ce(p(D))
        }, [
          t.search ? (m(), b("div", it, [
            ee(C("input", {
              ref_key: "searchNode",
              ref: h,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (v) => Se(u) ? u.value = v : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ee, p(u)]
            ])
          ])) : T("", !0),
          p(u).length >= t.minChars ? (m(), b(B, { key: 1 }, [
            p(o) ? (m(), b("div", ct, [
              p(u).length == 0 ? (m(), b("div", {
                key: 0,
                onClick: x,
                class: "all-select"
              }, [
                C("div", dt, [
                  C("input", {
                    checked: p(A),
                    type: "checkbox"
                  }, null, 8, ft),
                  vt
                ])
              ])) : T("", !0),
              p(c).length > 0 && p(u).length > 0 ? (m(), b("div", {
                key: 1,
                onClick: E,
                class: "all-select"
              }, [
                C("div", pt, [
                  C("input", {
                    checked: p(j),
                    type: "checkbox"
                  }, null, 8, ht),
                  yt
                ])
              ])) : T("", !0),
              C("div", {
                class: "clear",
                onClick: k
              }, "Clear")
            ])) : T("", !0),
            p(c).length == 0 ? (m(), b("div", gt, "No matches found")) : T("", !0)
          ], 64)) : (m(), b("div", mt, "Insert at least " + H(t.minChars) + " characters", 1)),
          C("div", Ne(p(he), { class: "scroller" }), [
            C("div", Ie(Pe(p(ye))), [
              (m(!0), b(B, null, Q(p(pe), (v) => (m(), b("button", {
                key: v.index,
                class: "dropdown-row",
                onClick: Te((M) => S(v.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", _t, [
                  p(o) ? (m(), b("input", {
                    key: 0,
                    checked: p(l).has(v.data.key),
                    type: "checkbox"
                  }, null, 8, bt)) : T("", !0),
                  X(" " + H(v.data.value), 1)
                ])
              ], 8, wt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, y.value]
        ])
      ], 8, ["to"])) : T("", !0),
      t.originalNode ? (m(), Y(Z, {
        key: 2,
        to: t.originalNode
      }, [
        (m(!0), b(B, null, Q(p(l), (v) => (m(), b("option", {
          key: v[0],
          selected: "selected",
          value: v[0]
        }, null, 8, Ot))), 128))
      ], 8, ["to"])) : T("", !0)
    ], 64));
  }
}, de = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      de.bindNew(e);
    });
  },
  bindNew(e) {
    V.lock(e, "extra-select", () => {
      const n = {};
      for (let a in e.dataset)
        try {
          n[a] = JSON.parse(e.dataset[a]);
        } catch {
          n[a] = e.dataset[a];
        }
      n.originalNode = e;
      const t = document.createElement("div");
      e.parentNode.insertBefore(t, e.nextSibling), t.dataset.isVue = !0, t.style.display = "contents";
      const o = Ae(kt, n);
      o.mount(t), e.addEventListener("remove", function() {
        o.unmount(), t.remove(), e.remove(), V.remove(e, "extra-select");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  de.init();
});
export {
  de as default
};
