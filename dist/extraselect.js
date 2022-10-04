import { unref as p, getCurrentScope as he, onScopeDispose as ye, getCurrentInstance as ge, onMounted as se, nextTick as re, ref as w, shallowRef as me, watch as $, computed as P, watchEffect as j, watchPostEffect as we, onUnmounted as _e, openBlock as m, createElementBlock as b, Fragment as B, renderList as W, createTextVNode as K, toDisplayString as Q, createElementVNode as C, createCommentVNode as N, createBlock as X, Teleport as Y, withDirectives as J, normalizeClass as be, normalizeStyle as Oe, isRef as ke, vModelText as xe, mergeProps as Ce, normalizeProps as Se, guardReactiveProps as Ee, withModifiers as Ie, vShow as Pe } from "vue";
var Z;
const M = typeof window < "u";
M && ((Z = window == null ? void 0 : window.navigator) == null ? void 0 : Z.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ne(e) {
  return typeof e == "function" ? e() : p(e);
}
function Te(e) {
  return e;
}
function Le(e) {
  return he() ? (ye(e), !0) : !1;
}
function ze(e, l = !0) {
  ge() ? se(e) : l ? e() : re(e);
}
function ue(e) {
  var l;
  const t = Ne(e);
  return (l = t == null ? void 0 : t.$el) != null ? l : t;
}
const Ae = M ? window : void 0;
M && window.document;
M && window.navigator;
M && window.location;
function Be(e, l = !1) {
  const t = w(), o = () => t.value = Boolean(e());
  return o(), ze(o, l), t;
}
const q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, H = "__vueuse_ssr_handlers__";
q[H] = q[H] || {};
q[H];
var ee = Object.getOwnPropertySymbols, Me = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable, Fe = (e, l) => {
  var t = {};
  for (var o in e)
    Me.call(e, o) && l.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && ee)
    for (var o of ee(e))
      l.indexOf(o) < 0 && Ve.call(e, o) && (t[o] = e[o]);
  return t;
};
function je(e, l, t = {}) {
  const o = t, { window: a = Ae } = o, n = Fe(o, ["window"]);
  let r;
  const i = Be(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = $(() => ue(e), (d) => {
    u(), i.value && a && d && (r = new ResizeObserver(l), r.observe(d, n));
  }, { immediate: !0, flush: "post" }), O = () => {
    u(), c();
  };
  return Le(O), {
    isSupported: i,
    stop: O
  };
}
function $e(e, l = { width: 0, height: 0 }, t = {}) {
  const { box: o = "content-box" } = t, a = w(l.width), n = w(l.height);
  return je(e, ([r]) => {
    const i = o === "border-box" ? r.borderBoxSize : o === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
    i ? (a.value = i.reduce((u, { inlineSize: c }) => u + c, 0), n.value = i.reduce((u, { blockSize: c }) => u + c, 0)) : (a.value = r.contentRect.width, n.value = r.contentRect.height);
  }, t), $(() => ue(e), (r) => {
    a.value = r ? l.width : 0, n.value = r ? l.height : 0;
  }), {
    width: a,
    height: n
  };
}
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var We = Object.defineProperty, ne = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, qe = Object.prototype.propertyIsEnumerable, le = (e, l, t) => l in e ? We(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t, He = (e, l) => {
  for (var t in l || (l = {}))
    Qe.call(l, t) && le(e, t, l[t]);
  if (ne)
    for (var t of ne(l))
      qe.call(l, t) && le(e, t, l[t]);
  return e;
};
const Re = {
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
He({
  linear: Te
}, Re);
function Ue(e, l) {
  const t = w(), o = $e(t), a = w([]), n = me(e), r = w({ start: 0, end: 10 }), { itemHeight: i, overscan: u = 5 } = l, c = (g) => {
    if (typeof i == "number")
      return Math.ceil(g / i);
    const { start: S = 0 } = r.value;
    let k = 0, x = 0;
    for (let E = S; E < n.value.length; E++)
      if (k += i(E), k >= g) {
        x = E;
        break;
      }
    return x - S;
  }, O = (g) => {
    if (typeof i == "number")
      return Math.floor(g / i) + 1;
    let S = 0, k = 0;
    for (let x = 0; x < n.value.length; x++)
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
        end: E > n.value.length ? n.value.length : E
      }, a.value = n.value.slice(r.value.start, r.value.end).map((L, V) => ({
        data: L,
        index: V + r.value.start
      }));
    }
  };
  $([o.width, o.height, e], () => {
    d();
  });
  const _ = P(() => typeof i == "number" ? n.value.length * i : n.value.reduce((g, S, k) => g + i(k), 0)), h = (g) => typeof i == "number" ? g * i : n.value.slice(0, g).reduce((k, x, E) => k + i(E), 0), y = (g) => {
    t.value && (t.value.scrollTop = h(g), d());
  }, I = P(() => h(r.value.start)), T = P(() => ({
    style: {
      width: "100%",
      height: `${_.value - I.value}px`,
      marginTop: `${I.value}px`
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
    wrapperProps: T
  };
}
const F = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let l = e.getBoundingClientRect();
  return {
    top: l.top + window.scrollY,
    left: l.left + window.scrollX,
    width: l.width,
    height: l.height
  };
}, oe = function(e, l) {
  l === void 0 && (l = document);
  for (var t = [], o = e.parentNode; o !== l; ) {
    var a = o;
    t.push(a), o = a.parentNode;
  }
  return t.push(l), t;
}, De = function(e) {
  var l = Array.prototype.slice.call(e.childNodes);
  l.forEach(function(t) {
    e.removeChild(t);
  });
}, Ge = (e, l) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const t = {
    defaultArray: e.value,
    get: () => e.value,
    push: (o, a, n = null) => {
      const r = e.map.get(o);
      if (r)
        r.value = a, r.data = n;
      else {
        let i = { value: a, key: o, data: n };
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
      o == null && (o = (a, n) => a.value.localeCompare(n.value)), e.value = e.value.sort(o);
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
  window.ExtraSelectOptions[l] = t, e.actions = t;
};
let Ke = 1;
const Xe = (e) => {
  e && (e.style.display = "none", De(e));
}, Ye = (e, l, t, o) => {
  var r, i;
  const a = w(/* @__PURE__ */ new Map());
  j(() => {
    a.value.clear();
    for (let u of t)
      a.value.set(u, u);
  });
  const n = w([]);
  if (n.map = /* @__PURE__ */ new Map(), n.rebuildMap = () => {
    if (n.map.clear(), n.value)
      for (let u of n.value)
        n.map.set(u.key, u);
  }, n.rebuildMap(), j(() => {
    n.value = l;
  }), e) {
    a.value.clear();
    for (let u of Array.apply(null, e.selectedOptions).map((c) => c.value).filter((c) => c))
      a.value.set(u, u);
    n.value = Array.apply(null, e.options).reduce((u, c) => (u.push({ value: c.text, key: c.value, data: c.dataset }), u), []), n.rebuildMap();
  }
  return Ge(n, (i = (r = e == null ? void 0 : e.id) != null ? r : o) != null ? i : "extraselect_" + (++Ke).toString()), { options: n, selectedOptions: a };
}, ae = async function(e, l = null, t = {}) {
  var n;
  const o = {
    method: "POST",
    credentials: "include",
    ...t,
    headers: { "Content-Type": "application/json", ...(n = t.headers) != null ? n : {} },
    body: JSON.stringify({ search: l, ...t.body })
  };
  return await (await fetch(e, o)).json();
}, Je = (e, l, t, o, a, n = "limited", r = {}) => {
  const i = w(0), u = w(!1), c = P(() => u.value || i.value > 0);
  if (l != null && l.length > 0)
    if (t) {
      const O = [];
      j((d) => {
        if (o.value.length >= a) {
          let _ = !0;
          switch (n) {
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
              O.push(o.value), i.value += 1, ae(l, o.value, r).then((y) => {
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
      ae(l, null, r).then((O) => {
        e.actions.addRange(O), e.actions.sort();
      });
  return { searchingFlag: c };
}, Ze = (e, l) => {
  const t = w(""), o = w([]), a = function(n, r) {
    return n.value.filter((u) => r.length > 0 ? u.value.toLowerCase().includes(r.toLowerCase()) : !0);
  };
  return j(() => {
    t.value.length >= l ? o.value = a(e, t.value) : o.value = [];
  }), { filterText: t, filteredOptions: o };
}, et = (e, l, t, o, a, n, r) => {
  const i = getComputedStyle(document.querySelector("body")).font, u = function(d) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = i, h.measureText(d).width;
  }, c = P(() => {
    var _, h;
    const d = (_ = F(o.value).width) != null ? _ : 100;
    if (r === "inherit")
      return d;
    if (r == null || r === "dynamic") {
      const y = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(d, Math.max(...e.value.map((I) => u(I.value))) + 20 + y * 3);
    }
    return r;
  }), O = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return we(() => {
    t.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var d = F(o.value), _ = F(null);
    if (n.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(n.value).position))
      var _ = F(n.value);
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
}, tt = {
  key: 0,
  class: "extra-select selection"
}, nt = ["onClick"], lt = ["innerHTML"], ot = ["value"], at = {
  key: 0,
  class: "input-searching"
}, st = {
  key: 0,
  class: "allselect-clear"
}, rt = { class: "row-input" }, ut = ["checked"], it = /* @__PURE__ */ C("b", null, "Select all", -1), ct = { class: "row-input" }, dt = ["checked"], ft = /* @__PURE__ */ C("b", null, "Select Filtered", -1), vt = {
  key: 1,
  class: "no-matches"
}, pt = { key: 2 }, ht = ["onClick"], yt = { class: "row-input" }, gt = ["checked"], mt = ["value"], _t = {
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
  setup(e, { emit: l }) {
    var U, D, G;
    const t = e, o = P(() => {
      var s, f;
      return (f = (s = t.originalNode) == null ? void 0 : s.multiple) != null ? f : t.multiple;
    }), { options: a, selectedOptions: n } = Ye(t.originalNode, t.options, t.modelValue), r = (U = t.originalNode) == null ? void 0 : U.classList, i = Object.values((G = (D = t.originalNode) == null ? void 0 : D.style) != null ? G : {});
    Xe(t.originalNode);
    const { filterText: u, filteredOptions: c } = Ze(a, t.minChars), { searchingFlag: O } = Je(
      a,
      t.url,
      t.searchableUrl,
      u,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), d = w(null), _ = w(null), h = w(null), y = w(!1), I = w(null), T = function(s) {
      const f = oe(s.target);
      f.push(s.target), !f.includes(d.value) && !f.includes(_.value) && (y.value = !1);
    };
    se(() => {
      if (t.dropdownContainer) {
        let s = !1;
        I.value = oe(d.value).find((f) => !!(f instanceof Element && (f.matches(t.dropdownContainer) && (s = !0), s && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(f).position))));
      }
      if (I.value == null && (I.value = document.querySelector("body")), t.originalNode) {
        for (let s of r)
          s != "extraselect" && d.value.classList.add(s);
        for (let s of i)
          d.value.style[s] = t.originalNode.style[s];
        i.includes("background-color") || (d.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), _e(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: R, getTextWidth: g } = et(a, n, y, d, _, I, t.maxWidth), S = (s) => {
      o.value ? n.value.has(s) ? n.value.delete(s) : n.value.set(s, s) : (n.value.clear(), n.value.set(s, s), y.value = !1), l("update:modelValue", Array.from(n.value.keys()));
    }, k = (s) => {
      x(s, !1), u.value = "";
    }, x = (s, f = null) => {
      f == null && (f = !L.value), f ? (n.value.clear(), a.value.forEach((v) => n.value.set(v.key, v.key))) : n.value.clear(), l("update:modelValue", Array.from(n.value.keys()));
    }, E = () => {
      V.value ? c.value.forEach((s) => {
        n.value.has(s.key) && n.value.delete(s.key);
      }) : c.value.forEach((s) => {
        n.value.has(s.key) || n.value.set(s.key, s.key);
      }), l("update:modelValue", Array.from(n.value.keys()));
    };
    $(y, (s, f) => {
      s != f && (s ? t.search && re(() => {
        h.value.focus({ focusVisible: !0 });
      }) : u.value = "");
    });
    const L = P(() => n.value.size == a.value.length), V = P(() => c.value.reduce((s, f) => s && n.value.has(f.key), !0)), ie = P(() => n.value.size == 0), ce = P(() => {
      var A;
      if (L.value)
        return "All selected";
      if (ie.value)
        return "No selection";
      const s = d.value ? getComputedStyle(d.value) : null, f = ((A = d.value) == null ? void 0 : A.clientWidth) - parseInt(s == null ? void 0 : s.paddingLeft) - parseInt(s == null ? void 0 : s.paddingRight);
      let v = n.value.size + " selected - ", z = !0;
      for (let pe of n.value)
        if (z ? z = !1 : v += ", ", v += a.map.get(pe[0]).value, f < g(v))
          return n.value.size + " selected";
      return v;
    }), { list: de, containerProps: fe, wrapperProps: ve } = Ue(
      c,
      {
        itemHeight: 32
      }
    );
    return (s, f) => (m(), b(B, null, [
      t.showSelected ? (m(), b("div", tt, [
        (m(!0), b(B, null, W(p(n), (v) => {
          var z;
          return m(), b("div", {
            key: v,
            onClick: (A) => S(v[0]),
            class: "selection-badge"
          }, [
            K(Q((z = p(a).find((A) => A.key == v[0])) == null ? void 0 : z.value) + " ", 1),
            C("div", {
              class: "selection-remove",
              innerHTML: t.removeIcon
            }, null, 8, lt)
          ], 8, nt);
        }), 128))
      ])) : N("", !0),
      C("input", {
        onFocus: f[0] || (f[0] = (v) => y.value = !0),
        onClick: f[1] || (f[1] = (v) => y.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: p(ce),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, ot),
      I.value ? (m(), X(Y, {
        key: 1,
        to: I.value
      }, [
        J(C("div", {
          class: be(["extra-select dropdown", { searching: p(O) > 0 }]),
          ref_key: "dropdownNode",
          ref: _,
          style: Oe(p(R))
        }, [
          t.search ? (m(), b("div", at, [
            J(C("input", {
              ref_key: "searchNode",
              ref: h,
              class: "extra-select-search",
              "onUpdate:modelValue": f[2] || (f[2] = (v) => ke(u) ? u.value = v : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [xe, p(u)]
            ])
          ])) : N("", !0),
          p(u).length >= t.minChars ? (m(), b(B, { key: 1 }, [
            p(o) ? (m(), b("div", st, [
              p(u).length == 0 ? (m(), b("div", {
                key: 0,
                onClick: x,
                class: "all-select"
              }, [
                C("div", rt, [
                  C("input", {
                    checked: p(L),
                    type: "checkbox"
                  }, null, 8, ut),
                  it
                ])
              ])) : N("", !0),
              p(c).length > 0 && p(u).length > 0 ? (m(), b("div", {
                key: 1,
                onClick: E,
                class: "all-select"
              }, [
                C("div", ct, [
                  C("input", {
                    checked: p(V),
                    type: "checkbox"
                  }, null, 8, dt),
                  ft
                ])
              ])) : N("", !0),
              C("div", {
                class: "clear",
                onClick: k
              }, "Clear")
            ])) : N("", !0),
            p(c).length == 0 ? (m(), b("div", vt, "No matches found")) : N("", !0)
          ], 64)) : (m(), b("div", pt, "Insert at least " + Q(t.minChars) + " characters", 1)),
          C("div", Ce(p(fe), { class: "scroller" }), [
            C("div", Se(Ee(p(ve))), [
              (m(!0), b(B, null, W(p(de), (v) => (m(), b("button", {
                key: v.index,
                class: "dropdown-row",
                onClick: Ie((z) => S(v.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", yt, [
                  p(o) ? (m(), b("input", {
                    key: 0,
                    checked: p(n).has(v.data.key),
                    type: "checkbox"
                  }, null, 8, gt)) : N("", !0),
                  K(" " + Q(v.data.value), 1)
                ])
              ], 8, ht))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Pe, y.value]
        ])
      ], 8, ["to"])) : N("", !0),
      t.originalNode ? (m(), X(Y, {
        key: 2,
        to: t.originalNode
      }, [
        (m(!0), b(B, null, W(p(n), (v) => (m(), b("option", {
          key: v[0],
          selected: "selected",
          value: v[0]
        }, null, 8, mt))), 128))
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
};
export {
  _t as default
};
