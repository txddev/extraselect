import { unref as p, getCurrentScope as fe, onScopeDispose as ve, getCurrentInstance as pe, onMounted as se, nextTick as re, ref as m, shallowRef as he, watch as $, computed as I, watchEffect as F, watchPostEffect as ge, onUnmounted as ye, openBlock as y, createElementBlock as w, Fragment as V, renderList as M, createTextVNode as K, toDisplayString as Q, createElementVNode as b, createCommentVNode as N, createBlock as X, Teleport as Y, withDirectives as J, normalizeClass as me, normalizeStyle as we, isRef as _e, vModelText as Oe, mergeProps as be, normalizeProps as ke, guardReactiveProps as xe, withModifiers as Ce, vShow as Se } from "vue";
var Z;
const j = typeof window < "u";
j && ((Z = window == null ? void 0 : window.navigator) == null ? void 0 : Z.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ee(e) {
  return typeof e == "function" ? e() : p(e);
}
function Ie(e) {
  return e;
}
function Pe(e) {
  return fe() ? (ve(e), !0) : !1;
}
function Ne(e, n = !0) {
  pe() ? se(e) : n ? e() : re(e);
}
function ue(e) {
  var n;
  const t = Ee(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Te = j ? window : void 0;
j && window.document;
j && window.navigator;
j && window.location;
function Be(e, n = !1) {
  const t = m(), l = () => t.value = Boolean(e());
  return l(), Ne(l, n), t;
}
const H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, q = "__vueuse_ssr_handlers__";
H[q] = H[q] || {};
H[q];
var ee = Object.getOwnPropertySymbols, Le = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable, je = (e, n) => {
  var t = {};
  for (var l in e)
    Le.call(e, l) && n.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && ee)
    for (var l of ee(e))
      n.indexOf(l) < 0 && Ve.call(e, l) && (t[l] = e[l]);
  return t;
};
function Ae(e, n, t = {}) {
  const l = t, { window: a = Te } = l, o = je(l, ["window"]);
  let s;
  const u = Be(() => a && "ResizeObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, f = $(() => ue(e), (d) => {
    i(), u.value && a && d && (s = new ResizeObserver(n), s.observe(d, o));
  }, { immediate: !0, flush: "post" }), v = () => {
    i(), f();
  };
  return Pe(v), {
    isSupported: u,
    stop: v
  };
}
function Fe(e, n = { width: 0, height: 0 }, t = {}) {
  const { box: l = "content-box" } = t, a = m(n.width), o = m(n.height);
  return Ae(e, ([s]) => {
    const u = l === "border-box" ? s.borderBoxSize : l === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    u ? (a.value = u.reduce((i, { inlineSize: f }) => i + f, 0), o.value = u.reduce((i, { blockSize: f }) => i + f, 0)) : (a.value = s.contentRect.width, o.value = s.contentRect.height);
  }, t), $(() => ue(e), (s) => {
    a.value = s ? n.width : 0, o.value = s ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var te;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(te || (te = {}));
var $e = Object.defineProperty, ne = Object.getOwnPropertySymbols, ze = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, le = (e, n, t) => n in e ? $e(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Qe = (e, n) => {
  for (var t in n || (n = {}))
    ze.call(n, t) && le(e, t, n[t]);
  if (ne)
    for (var t of ne(n))
      Me.call(n, t) && le(e, t, n[t]);
  return e;
};
const He = {
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
Qe({
  linear: Ie
}, He);
function qe(e, n) {
  const t = m(), l = Fe(t), a = m([]), o = he(e), s = m({ start: 0, end: 10 }), { itemHeight: u, overscan: i = 5 } = n, f = (g) => {
    if (typeof u == "number")
      return Math.ceil(g / u);
    const { start: E = 0 } = s.value;
    let _ = 0, x = 0;
    for (let C = E; C < o.value.length; C++)
      if (_ += u(C), _ >= g) {
        x = C;
        break;
      }
    return x - E;
  }, v = (g) => {
    if (typeof u == "number")
      return Math.floor(g / u) + 1;
    let E = 0, _ = 0;
    for (let x = 0; x < o.value.length; x++)
      if (E += u(x), E >= g) {
        _ = x;
        break;
      }
    return _ + 1;
  }, d = () => {
    const g = t.value;
    if (g) {
      const E = v(g.scrollTop), _ = f(g.clientHeight), x = E - i, C = E + _ + i;
      s.value = {
        start: x < 0 ? 0 : x,
        end: C > o.value.length ? o.value.length : C
      }, a.value = o.value.slice(s.value.start, s.value.end).map((B, z) => ({
        data: B,
        index: z + s.value.start
      }));
    }
  };
  $([l.width, l.height, e], () => {
    d();
  });
  const S = I(() => typeof u == "number" ? o.value.length * u : o.value.reduce((g, E, _) => g + u(_), 0)), O = (g) => typeof u == "number" ? g * u : o.value.slice(0, g).reduce((_, x, C) => _ + u(C), 0), k = (g) => {
    t.value && (t.value.scrollTop = O(g), d());
  }, P = I(() => O(s.value.start)), T = I(() => ({
    style: {
      width: "100%",
      height: `${S.value - P.value}px`,
      marginTop: `${P.value}px`
    }
  }));
  return {
    list: a,
    scrollTo: k,
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
const A = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let n = e.getBoundingClientRect();
  return {
    top: n.top + window.scrollY,
    left: n.left + window.scrollX,
    width: n.width,
    height: n.height
  };
}, oe = function(e, n) {
  n === void 0 && (n = document);
  for (var t = [], l = e.parentNode; l !== n; ) {
    var a = l;
    t.push(a), l = a.parentNode;
  }
  return t.push(n), t;
}, Ue = function(e) {
  var n = Array.prototype.slice.call(e.childNodes);
  n.forEach(function(t) {
    e.removeChild(t);
  });
}, Re = (e, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const t = {
    defaultArray: e.value,
    get: () => e.value,
    push: (l, a, o = null) => {
      const s = e.value.find((u) => u.key == l);
      s ? (s.value = a, s.data = o) : e.value.push({ value: a, key: l, data: o });
    },
    addRange: (l) => {
      for (let a of l)
        e.actions.push(a.key, a.value, a.data);
    },
    remove: (l) => {
      e.value.splice(e.value.findIndex((a) => a.key == l), 1);
    },
    clear: () => {
      e.value = [];
    },
    sort: (l = null) => {
      l == null && (l = (a, o) => a.value.localeCompare(o.value)), e.value = e.value.sort(l);
    },
    setDefault: function(l) {
      this.defaultArray = l;
    },
    restoreDefault: function() {
      e.value = this.defaultArray;
    },
    filter: function(l) {
    }
  };
  window.ExtraSelectOptions[n] = t, e.actions = t;
};
let We = 1;
const De = (e) => {
  e && (e.style.display = "none", Ue(e));
}, Ge = (e, n, t, l) => {
  var s, u;
  const a = m([]);
  F(() => {
    a.value = t;
  });
  const o = m([]);
  return F(() => {
    o.value = n;
  }), e && (a.value = Array.apply(null, e.selectedOptions).map((i) => i.value).filter((i) => i), o.value = Array.apply(null, e.options).reduce((i, f) => (i.push({ value: f.text, key: f.value, data: f.dataset }), i), [])), Re(o, (u = (s = e == null ? void 0 : e.id) != null ? s : l) != null ? u : "extraselect_" + (++We).toString()), { options: o, selectedOptions: a };
}, ae = async function(e, n = null, t = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...t,
    headers: { "Content-Type": "application/json", ...(o = t.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...t.body })
  };
  return await (await fetch(e, l)).json();
}, Ke = (e, n, t, l, a, o = "limited", s = {}) => {
  const u = m(0), i = m(!1), f = I(() => i.value || u.value > 0);
  if (n != null && n.length > 0)
    if (t) {
      const v = [];
      F((d) => {
        if (l.value.length >= a) {
          let S = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              S = !v.includes(l.value);
              break;
            case "complete":
              S = v.reduce((O, k) => O && !l.value.startsWith(k), !0);
              break;
          }
          if (S) {
            i.value = !0;
            const O = setTimeout(() => {
              v.push(l.value), u.value += 1, ae(n, l.value, s).then((k) => {
                e.actions.addRange(k), e.actions.sort(), u.value -= 1, i.value = !1;
              });
            }, 500);
            d(() => {
              clearTimeout(O);
            });
          }
        }
      });
    } else
      ae(n, null, s).then((v) => {
        e.actions.addRange(v), e.actions.sort();
      });
  return { searchingFlag: f };
}, Xe = (e, n) => {
  const t = m(""), l = m([]), a = function(o, s) {
    return o.value.filter((i) => s.length > 0 ? i.value.toLowerCase().includes(s.toLowerCase()) : !0);
  };
  return F(() => {
    t.value.length >= n ? l.value = a(e, t.value) : l.value = [];
  }), { filterText: t, filteredOptions: l };
}, Ye = (e, n, t, l, a, o, s) => {
  const u = function(v, d) {
    const O = document.createElement("canvas").getContext("2d");
    return O.font = d, O.measureText(v).width;
  }, i = I(() => {
    var d;
    const v = (d = A(l.value).width) != null ? d : 100;
    if (s === "inherit")
      return v;
    if (s == null || s === "dynamic") {
      const S = getComputedStyle(document.querySelector("body")).font;
      return Math.max(v, Math.max(...e.value.map((O) => u(O.value, S))) + 15);
    }
    return s;
  }), f = m({
    position: "absolute",
    "min-width": "max-content"
  });
  return ge(() => {
    t.value < 0 && console.log("is open"), n.value.length < 0 && console.log("empty selection");
    var v = A(l.value), d = A(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var d = A(o.value);
    f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-d.top + v.top + v.height).toString() + "px",
      left: (-d.left + v.left).toString() + "px"
    };
  }), { dropdownStyle: f };
}, Je = {
  key: 0,
  class: "extra-select selection"
}, Ze = ["onClick"], et = ["innerHTML"], tt = ["value"], nt = {
  key: 0,
  class: "input-searching"
}, lt = {
  key: 0,
  class: "allselect-clear"
}, ot = { class: "row-input" }, at = ["checked"], st = /* @__PURE__ */ b("b", null, "Select all", -1), rt = { class: "row-input" }, ut = ["checked"], it = /* @__PURE__ */ b("b", null, "Select Filtered", -1), ct = {
  key: 1,
  class: "no-matches"
}, dt = { key: 2 }, ft = ["onClick"], vt = { class: "row-input" }, pt = ["checked"], ht = ["value"], yt = {
  __name: "ExtraSelect",
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    modelValue: { type: Array, required: !1 },
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
    var R, W, D;
    const t = e, l = I(() => {
      var r, c;
      return (c = (r = t.originalNode) == null ? void 0 : r.multiple) != null ? c : t.multiple;
    }), { options: a, selectedOptions: o } = Ge(t.originalNode, t.options, t.modelValue), s = (R = t.originalNode) == null ? void 0 : R.classList, u = Object.values((D = (W = t.originalNode) == null ? void 0 : W.style) != null ? D : {});
    De(t.originalNode);
    const { filterText: i, filteredOptions: f } = Xe(a, t.minChars), { searchingFlag: v } = Ke(
      a,
      t.url,
      t.searchableUrl,
      i,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), d = m(null), S = m(null), O = m(null), k = m(!1), P = m(null), T = function(r) {
      const c = oe(r.target);
      c.push(r.target), !c.includes(d.value) && !c.includes(S.value) && (k.value = !1);
    };
    se(() => {
      if (t.dropdownContainer) {
        let r = !1;
        P.value = oe(d.value).find((c) => !!(c instanceof Element && (c.matches(t.dropdownContainer) && (r = !0), r && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(c).position))));
      }
      if (P.value == null && (P.value = document.querySelector("body")), t.originalNode) {
        for (let r of s)
          r != "extraselect" && d.value.classList.add(r);
        for (let r of u)
          d.value.style[r] = t.originalNode.style[r];
        u.includes("background-color") || (d.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), ye(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: U } = Ye(a, o, k, d, S, P, t.maxWidth), g = (r) => {
      console.log("toggling", r), l.value ? o.value.includes(r) ? o.value.splice(o.value.indexOf(r), 1) : o.value.push(r) : (o.value = [r], k.value = !1), n("update:modelValue", o.value);
    }, E = (r) => {
      _(r, !1), i.value = "";
    }, _ = (r, c = null) => {
      c == null && (c = !C.value), c ? o.value = a.value.map((h) => h.key) : o.value = [], n("update:modelValue", o.value);
    }, x = () => {
      B.value ? f.value.forEach((r) => {
        o.value.includes(r.key) && o.value.splice(o.value.indexOf(r.key), 1);
      }) : f.value.forEach((r) => {
        o.value.includes(r.key) || o.value.push(r.key);
      }), n("update:modelValue", o.value);
    };
    $(k, (r, c) => {
      r != c && (r ? t.search && re(() => {
        O.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const C = I(() => o.value.length == a.value.length), B = I(() => f.value.reduce((r, c) => r && o.value.includes(c.key), !0));
    I(() => o.value.length == 0);
    const z = I(() => {
      const r = o.value.map((c) => {
        var h;
        return (h = a.value.find((L) => L.key == c)) == null ? void 0 : h.value;
      }).join(", ");
      return r.length > 0 ? r : "--";
    }), { list: ie, containerProps: ce, wrapperProps: de } = qe(
      f,
      {
        itemHeight: 32
      }
    );
    return (r, c) => (y(), w(V, null, [
      t.showSelected ? (y(), w("div", Je, [
        (y(!0), w(V, null, M(p(o), (h) => {
          var L;
          return y(), w("div", {
            key: h,
            onClick: (G) => g(h),
            class: "selection-badge"
          }, [
            K(Q((L = p(a).find((G) => G.key == h)) == null ? void 0 : L.value) + " ", 1),
            b("div", {
              class: "selection-remove",
              innerHTML: t.removeIcon
            }, null, 8, et)
          ], 8, Ze);
        }), 128))
      ])) : N("", !0),
      b("input", {
        onFocus: c[0] || (c[0] = (h) => k.value = !0),
        onClick: c[1] || (c[1] = (h) => k.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: p(z),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, tt),
      P.value ? (y(), X(Y, {
        key: 1,
        to: P.value
      }, [
        J(b("div", {
          class: me(["extra-select dropdown", { searching: p(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: S,
          style: we(p(U))
        }, [
          t.search ? (y(), w("div", nt, [
            J(b("input", {
              ref_key: "searchNode",
              ref: O,
              class: "extra-select-search",
              "onUpdate:modelValue": c[2] || (c[2] = (h) => _e(i) ? i.value = h : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Oe, p(i)]
            ])
          ])) : N("", !0),
          p(i).length >= t.minChars ? (y(), w(V, { key: 1 }, [
            p(l) ? (y(), w("div", lt, [
              p(i).length == 0 ? (y(), w("div", {
                key: 0,
                onClick: _,
                class: "all-select"
              }, [
                b("div", ot, [
                  b("input", {
                    checked: p(C),
                    type: "checkbox"
                  }, null, 8, at),
                  st
                ])
              ])) : N("", !0),
              p(f).length > 0 && p(i).length > 0 ? (y(), w("div", {
                key: 1,
                onClick: x,
                class: "all-select"
              }, [
                b("div", rt, [
                  b("input", {
                    checked: p(B),
                    type: "checkbox"
                  }, null, 8, ut),
                  it
                ])
              ])) : N("", !0),
              b("div", {
                class: "clear",
                onClick: E
              }, "Clear")
            ])) : N("", !0),
            p(f).length == 0 ? (y(), w("div", ct, "No matches found")) : N("", !0)
          ], 64)) : (y(), w("div", dt, "Insert at least " + Q(t.minChars) + " characters", 1)),
          b("div", be(p(ce), { class: "scroller" }), [
            b("div", ke(xe(p(de))), [
              (y(!0), w(V, null, M(p(ie), (h) => (y(), w("button", {
                key: h.index,
                class: "dropdown-row",
                onClick: Ce((L) => g(h.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                b("div", vt, [
                  p(l) ? (y(), w("input", {
                    key: 0,
                    checked: p(o).includes(h.data.key),
                    type: "checkbox"
                  }, null, 8, pt)) : N("", !0),
                  K(" " + Q(h.data.value), 1)
                ])
              ], 8, ft))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Se, k.value]
        ])
      ], 8, ["to"])) : N("", !0),
      t.originalNode ? (y(), X(Y, {
        key: 2,
        to: t.originalNode
      }, [
        (y(!0), w(V, null, M(p(o), (h) => (y(), w("option", {
          key: h,
          selected: "selected",
          value: h
        }, null, 8, ht))), 128))
      ], 8, ["to"])) : N("", !0)
    ], 64));
  }
};
export {
  yt as default
};
