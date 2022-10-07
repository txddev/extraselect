import { unref as v, getCurrentScope as ye, onScopeDispose as we, getCurrentInstance as _e, onMounted as ue, nextTick as ie, ref as w, shallowRef as be, watch as $, computed as P, watchEffect as W, watchPostEffect as Oe, onUnmounted as ke, openBlock as y, createElementBlock as b, Fragment as z, renderList as R, createTextVNode as X, toDisplayString as q, createElementVNode as x, createCommentVNode as T, createBlock as Y, Teleport as Z, withDirectives as ee, normalizeClass as Se, normalizeStyle as xe, isRef as Ce, vModelText as Ee, mergeProps as Ne, normalizeProps as Ie, guardReactiveProps as Pe, withModifiers as Te, vShow as Le, createApp as Ae } from "vue";
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
    return I.get(n).size !== 0 && I.delete(n), o;
  }
  static lock(n, t, o) {
    return V.has(n, t) ? !1 : (V.put(n, t, !0), o());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = I);
function j(e) {
  if (e == null)
    return { top: 0, left: 0, width: null, height: null };
  let n = e.getBoundingClientRect();
  return {
    top: n.top + window.scrollY,
    left: n.left + window.scrollX,
    width: n.width,
    height: n.height
  };
}
function te(e, n) {
  n === void 0 && (n = window.document);
  for (var t = [], o = e.parentNode; o != null && o !== n; ) {
    var a = o;
    t.push(a), o = a.parentNode;
  }
  return t.push(n), t;
}
function Be(e) {
  var n = Array.prototype.slice.call(e.childNodes);
  n.forEach(function(t) {
    e.removeChild(t);
  });
}
var ne;
const F = typeof window < "u";
F && ((ne = window == null ? void 0 : window.navigator) == null ? void 0 : ne.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Me(e) {
  return typeof e == "function" ? e() : v(e);
}
function ze(e) {
  return e;
}
function Ve(e) {
  return ye() ? (we(e), !0) : !1;
}
function Fe(e, n = !0) {
  _e() ? ue(e) : n ? e() : ie(e);
}
function ce(e) {
  var n;
  const t = Me(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const De = F ? window : void 0;
F && window.document;
F && window.navigator;
F && window.location;
function je(e, n = !1) {
  const t = w(), o = () => t.value = Boolean(e());
  return o(), Fe(o, n), t;
}
const Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, U = "__vueuse_ssr_handlers__";
Q[U] = Q[U] || {};
Q[U];
var le = Object.getOwnPropertySymbols, We = Object.prototype.hasOwnProperty, $e = Object.prototype.propertyIsEnumerable, Re = (e, n) => {
  var t = {};
  for (var o in e)
    We.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && le)
    for (var o of le(e))
      n.indexOf(o) < 0 && $e.call(e, o) && (t[o] = e[o]);
  return t;
};
function qe(e, n, t = {}) {
  const o = t, { window: a = De } = o, l = Re(o, ["window"]);
  let s;
  const c = je(() => a && "ResizeObserver" in a), r = () => {
    s && (s.disconnect(), s = void 0);
  }, d = $(() => ce(e), (f) => {
    r(), c.value && a && f && (s = new ResizeObserver(n), s.observe(f, l));
  }, { immediate: !0, flush: "post" }), O = () => {
    r(), d();
  };
  return Ve(O), {
    isSupported: c,
    stop: O
  };
}
function Qe(e, n = { width: 0, height: 0 }, t = {}) {
  const { box: o = "content-box" } = t, a = w(n.width), l = w(n.height);
  return qe(e, ([s]) => {
    const c = o === "border-box" ? s.borderBoxSize : o === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    c ? (a.value = c.reduce((r, { inlineSize: d }) => r + d, 0), l.value = c.reduce((r, { blockSize: d }) => r + d, 0)) : (a.value = s.contentRect.width, l.value = s.contentRect.height);
  }, t), $(() => ce(e), (s) => {
    a.value = s ? n.width : 0, l.value = s ? n.height : 0;
  }), {
    width: a,
    height: l
  };
}
var oe;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(oe || (oe = {}));
var Ue = Object.defineProperty, ae = Object.getOwnPropertySymbols, He = Object.prototype.hasOwnProperty, Ge = Object.prototype.propertyIsEnumerable, se = (e, n, t) => n in e ? Ue(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Je = (e, n) => {
  for (var t in n || (n = {}))
    He.call(n, t) && se(e, t, n[t]);
  if (ae)
    for (var t of ae(n))
      Ge.call(n, t) && se(e, t, n[t]);
  return e;
};
const Ke = {
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
Je({
  linear: ze
}, Ke);
function Xe(e, n) {
  const t = w(), o = Qe(t), a = w([]), l = be(e), s = w({ start: 0, end: 10 }), { itemHeight: c, overscan: r = 5 } = n, d = (m) => {
    if (typeof c == "number")
      return Math.ceil(m / c);
    const { start: C = 0 } = s.value;
    let k = 0, S = 0;
    for (let E = C; E < l.value.length; E++)
      if (k += c(E), k >= m) {
        S = E;
        break;
      }
    return S - C;
  }, O = (m) => {
    if (typeof c == "number")
      return Math.floor(m / c) + 1;
    let C = 0, k = 0;
    for (let S = 0; S < l.value.length; S++)
      if (C += c(S), C >= m) {
        k = S;
        break;
      }
    return k + 1;
  }, f = () => {
    const m = t.value;
    if (m) {
      const C = O(m.scrollTop), k = d(m.clientHeight), S = C - r, E = C + k + r;
      s.value = {
        start: S < 0 ? 0 : S,
        end: E > l.value.length ? l.value.length : E
      }, a.value = l.value.slice(s.value.start, s.value.end).map((B, D) => ({
        data: B,
        index: D + s.value.start
      }));
    }
  };
  $([o.width, o.height, e], () => {
    f();
  });
  const _ = P(() => typeof c == "number" ? l.value.length * c : l.value.reduce((m, C, k) => m + c(k), 0)), h = (m) => typeof c == "number" ? m * c : l.value.slice(0, m).reduce((k, S, E) => k + c(E), 0), g = (m) => {
    t.value && (t.value.scrollTop = h(m), f());
  }, N = P(() => h(s.value.start)), A = P(() => ({
    style: {
      width: "100%",
      height: `${_.value - N.value}px`,
      marginTop: `${N.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: g,
    containerProps: {
      ref: t,
      onScroll: () => {
        f();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: A
  };
}
const Ye = (e, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const t = {
    defaultArray: e.value,
    get: () => e.value,
    push: (o, a, l = null) => {
      const s = e.map.get(o);
      if (s)
        s.value = a, s.data = l;
      else {
        let c = { value: a, key: o, data: l };
        e.value.push(c), e.map.set(c.key, c);
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
  e && (e.style.display = "none", Be(e));
}, tt = (e, n, t, o) => {
  var s, c;
  const a = w(/* @__PURE__ */ new Map());
  W(() => {
    a.value.clear();
    for (let r of t)
      a.value.set(r, r);
  });
  const l = w([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let r of l.value)
        l.map.set(r.key, r);
  }, W(() => {
    n && (l.value = n, l.rebuildMap());
  }), e) {
    a.value.clear();
    for (let r of Array.apply(null, e.selectedOptions).map((d) => d.value).filter((d) => d))
      a.value.set(r, r);
    l.value = Array.apply(null, e.options).reduce((r, d) => (r.push({ value: d.text, key: d.value, data: d.dataset }), r), []), l.rebuildMap();
  }
  return Ye(l, (c = (s = e == null ? void 0 : e.id) != null ? s : o) != null ? c : "extraselect_" + (++Ze).toString()), { options: l, selectedOptions: a };
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
}, nt = (e, n, t, o, a, l = "limited", s = {}) => {
  const c = w(0), r = w(!1), d = P(() => r.value || c.value > 0);
  if (n != null && n.length > 0)
    if (t) {
      const O = [];
      W((f) => {
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
              _ = O.reduce((h, g) => h && !o.value.startsWith(g), !0);
              break;
          }
          if (_) {
            r.value = !0;
            const h = setTimeout(() => {
              O.push(o.value), c.value += 1, re(n, o.value, s).then((g) => {
                e.actions.addRange(g), e.actions.sort(), c.value -= 1, r.value = !1;
              });
            }, 500);
            f(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      re(n, null, s).then((O) => {
        e.actions.addRange(O), e.actions.sort();
      });
  return { searchingFlag: d };
}, lt = (e, n) => {
  const t = w(""), o = w([]), a = function(l, s) {
    return console.log(l.value), l.value.filter((r) => s.length > 0 ? r.value.toLowerCase().includes(s.toLowerCase()) : !0);
  };
  return W(() => {
    t.value.length >= n ? o.value = a(e, t.value) : o.value = [];
  }), { filterText: t, filteredOptions: o };
}, ot = (e, n, t, o, a, l, s) => {
  const c = getComputedStyle(document.querySelector("body")).font, r = function(f) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = c, h.measureText(f).width;
  }, d = P(() => {
    var _, h;
    const f = (_ = j(o.value).width) != null ? _ : 100;
    if (s === "inherit")
      return f;
    if (s == null || s === "dynamic") {
      const g = (h = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? h : 16;
      return Math.max(f, Math.max(...e.value.map((N) => r(N.value))) + 20 + g * 3);
    }
    return s;
  }), O = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Oe(() => {
    t.value < 0 && console.log("is open"), n.value.size < 0 && console.log("empty selection");
    var f = j(o.value), _ = j(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var _ = j(l.value);
    let h = -_.left + f.left;
    const g = window.document.documentElement.clientWidth;
    h + d.value > g && (h = g - d.value), O.value = {
      position: "absolute",
      "min-width": "max-content",
      width: d.value.toString() + "px",
      top: (-_.top + f.top + f.height).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: O, getTextWidth: r };
}, at = {
  key: 0,
  class: "extra-select selection"
}, st = ["onClick"], rt = ["innerHTML"], ut = ["value"], it = {
  key: 0,
  class: "input-searching"
}, ct = {
  key: 0,
  class: "allselect-clear"
}, dt = { class: "row-input" }, ft = ["checked"], vt = /* @__PURE__ */ x("b", null, "Select all", -1), pt = { class: "row-input" }, ht = ["checked"], gt = /* @__PURE__ */ x("b", null, "Select Filtered", -1), mt = {
  key: 1,
  class: "no-matches"
}, yt = { key: 2 }, wt = ["onClick"], _t = { class: "row-input" }, bt = ["checked"], Ot = ["value"], kt = {
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
      var u, i;
      return (i = (u = t.originalNode) == null ? void 0 : u.multiple) != null ? i : t.multiple;
    }), { options: a, selectedOptions: l } = tt(t.originalNode, t.options, t.modelValue), s = (G = t.originalNode) == null ? void 0 : G.classList, c = Object.values((K = (J = t.originalNode) == null ? void 0 : J.style) != null ? K : {});
    et(t.originalNode);
    const { filterText: r, filteredOptions: d } = lt(a, t.minChars), { searchingFlag: O } = nt(
      a,
      t.url,
      t.searchableUrl,
      r,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), f = w(null), _ = w(null), h = w(null), g = w(!1), N = w(null), A = function(u) {
      const i = te(u.target);
      i.push(u.target), !i.includes(f.value) && !i.includes(_.value) && (g.value = !1);
    };
    ue(() => {
      if (t.dropdownContainer) {
        let u = !1;
        N.value = te(f.value).find((i) => !!(i instanceof Element && (i.matches(t.dropdownContainer) && (u = !0), u && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(i).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), t.originalNode) {
        for (let u of s)
          u != "extraselect" && f.value.classList.add(u);
        for (let u of c)
          f.value.style[u] = t.originalNode.style[u];
        c.includes("background-color") || (f.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", A), window.document.addEventListener("focusin", A);
    }), ke(() => {
      window.document.removeEventListener("mousedown", A), window.document.removeEventListener("focusin", A);
    });
    const { dropdownStyle: H, getTextWidth: m } = ot(a, l, g, f, _, N, t.maxWidth), C = (u) => {
      o.value ? l.value.has(u) ? l.value.delete(u) : l.value.set(u, u) : (l.value.clear(), l.value.set(u, u), g.value = !1), n("update:modelValue", Array.from(l.value.keys()));
    }, k = (u) => {
      S(u, !1), r.value = "";
    }, S = (u, i = null) => {
      i == null && (i = !B.value), i ? (l.value.clear(), a.value.forEach((p) => l.value.set(p.key, p.key))) : l.value.clear(), n("update:modelValue", Array.from(l.value.keys()));
    }, E = () => {
      D.value ? d.value.forEach((u) => {
        l.value.has(u.key) && l.value.delete(u.key);
      }) : d.value.forEach((u) => {
        l.value.has(u.key) || l.value.set(u.key, u.key);
      }), n("update:modelValue", Array.from(l.value.keys()));
    };
    $(g, (u, i) => {
      u != i && (u ? t.search && ie(() => {
        h.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const B = P(() => l.value.size == a.value.length), D = P(() => d.value.reduce((u, i) => u && l.value.has(i.key), !0)), fe = P(() => l.value.size == 0), ve = P(() => {
      var u;
      if (o.value) {
        if (B.value)
          return "All selected";
        if (fe.value)
          return "No selection";
        const i = f.value ? getComputedStyle(f.value) : null, p = ((u = f.value) == null ? void 0 : u.clientWidth) - parseInt(i == null ? void 0 : i.paddingLeft) - parseInt(i == null ? void 0 : i.paddingRight);
        let L = l.value.size + " selected - ", M = !0;
        for (let me of l.value)
          if (M ? M = !1 : L += ", ", L += a.map.get(me[0]).value, p < m(L))
            return l.value.size + " selected";
        return L;
      } else
        for (let i of l.value)
          return console.log(i, i[0], a.map.get(i[0]), a.map), a.map.get(i[0]).value;
      return "No selection";
    }), { list: pe, containerProps: he, wrapperProps: ge } = Xe(
      d,
      {
        itemHeight: 32
      }
    );
    return (u, i) => (y(), b(z, null, [
      t.showSelected ? (y(), b("div", at, [
        (y(!0), b(z, null, R(v(l), (p) => {
          var L;
          return y(), b("div", {
            key: p,
            onClick: (M) => C(p[0]),
            class: "selection-badge"
          }, [
            X(q((L = v(a).find((M) => M.key == p[0])) == null ? void 0 : L.value) + " ", 1),
            x("div", {
              class: "selection-remove",
              innerHTML: t.removeIcon
            }, null, 8, rt)
          ], 8, st);
        }), 128))
      ])) : T("", !0),
      x("input", {
        onFocus: i[0] || (i[0] = (p) => g.value = !0),
        onClick: i[1] || (i[1] = (p) => g.value = !0),
        ref_key: "inputNode",
        ref: f,
        value: v(ve),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, ut),
      N.value ? (y(), Y(Z, {
        key: 1,
        to: N.value
      }, [
        ee(x("div", {
          class: Se(["extra-select dropdown", { searching: v(O) > 0 }]),
          ref_key: "dropdownNode",
          ref: _,
          style: xe(v(H))
        }, [
          t.search ? (y(), b("div", it, [
            ee(x("input", {
              ref_key: "searchNode",
              ref: h,
              class: "extra-select-search",
              "onUpdate:modelValue": i[2] || (i[2] = (p) => Ce(r) ? r.value = p : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ee, v(r)]
            ])
          ])) : T("", !0),
          v(r).length >= t.minChars ? (y(), b(z, { key: 1 }, [
            v(o) ? (y(), b("div", ct, [
              v(r).length == 0 ? (y(), b("div", {
                key: 0,
                onClick: S,
                class: "all-select"
              }, [
                x("div", dt, [
                  x("input", {
                    checked: v(B),
                    type: "checkbox"
                  }, null, 8, ft),
                  vt
                ])
              ])) : T("", !0),
              v(d).length > 0 && v(r).length > 0 ? (y(), b("div", {
                key: 1,
                onClick: E,
                class: "all-select"
              }, [
                x("div", pt, [
                  x("input", {
                    checked: v(D),
                    type: "checkbox"
                  }, null, 8, ht),
                  gt
                ])
              ])) : T("", !0),
              x("div", {
                class: "clear",
                onClick: k
              }, "Clear")
            ])) : T("", !0),
            v(d).length == 0 ? (y(), b("div", mt, "No matches found")) : T("", !0)
          ], 64)) : (y(), b("div", yt, "Insert at least " + q(t.minChars) + " characters", 1)),
          x("div", Ne(v(he), { class: "scroller" }), [
            x("div", Ie(Pe(v(ge))), [
              (y(!0), b(z, null, R(v(pe), (p) => (y(), b("button", {
                key: p.index,
                class: "dropdown-row",
                onClick: Te((L) => C(p.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                x("div", _t, [
                  v(o) ? (y(), b("input", {
                    key: 0,
                    checked: v(l).has(p.data.key),
                    type: "checkbox"
                  }, null, 8, bt)) : T("", !0),
                  X(" " + q(p.data.value), 1)
                ])
              ], 8, wt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Le, g.value]
        ])
      ], 8, ["to"])) : T("", !0),
      t.originalNode ? (y(), Y(Z, {
        key: 2,
        to: t.originalNode
      }, [
        (y(!0), b(z, null, R(v(l), (p) => (y(), b("option", {
          key: p[0],
          selected: "selected",
          value: p[0]
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
