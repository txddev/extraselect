import { unref as p, getCurrentScope as he, onScopeDispose as ge, getCurrentInstance as ye, onMounted as ue, nextTick as ie, ref as m, shallowRef as me, watch as $, computed as I, watchEffect as z, watchPostEffect as we, onUnmounted as _e, openBlock as y, createElementBlock as w, Fragment as A, renderList as q, createTextVNode as X, toDisplayString as H, createElementVNode as b, createCommentVNode as T, createBlock as Y, Teleport as Z, withDirectives as ee, normalizeClass as Oe, normalizeStyle as be, isRef as ke, vModelText as xe, mergeProps as Ce, normalizeProps as Se, guardReactiveProps as Ee, withModifiers as Ne, vShow as Ie, createApp as Pe } from "vue";
const N = /* @__PURE__ */ new WeakMap();
class M {
  static put(n, t, l) {
    N.has(n) || N.set(n, /* @__PURE__ */ new Map()), N.get(n).set(t, l);
  }
  static get(n, t) {
    return N.get(n).get(t);
  }
  static has(n, t) {
    return N.has(n) && N.get(n).has(t);
  }
  static remove(n, t) {
    var l = N.get(n).delete(t);
    return !N.get(n).size === 0 && N.delete(n), l;
  }
  static lock(n, t, l) {
    return M.has(n, t) ? !1 : (M.put(n, t, !0), l());
  }
}
window.__Store = N;
var te;
const j = typeof window < "u";
j && ((te = window == null ? void 0 : window.navigator) == null ? void 0 : te.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Te(e) {
  return typeof e == "function" ? e() : p(e);
}
function Le(e) {
  return e;
}
function Be(e) {
  return he() ? (ge(e), !0) : !1;
}
function Ve(e, n = !0) {
  ye() ? ue(e) : n ? e() : ie(e);
}
function ce(e) {
  var n;
  const t = Te(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Ae = j ? window : void 0;
j && window.document;
j && window.navigator;
j && window.location;
function Me(e, n = !1) {
  const t = m(), l = () => t.value = Boolean(e());
  return l(), Ve(l, n), t;
}
const U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__";
U[W] = U[W] || {};
U[W];
var ne = Object.getOwnPropertySymbols, je = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable, ze = (e, n) => {
  var t = {};
  for (var l in e)
    je.call(e, l) && n.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && ne)
    for (var l of ne(e))
      n.indexOf(l) < 0 && Fe.call(e, l) && (t[l] = e[l]);
  return t;
};
function $e(e, n, t = {}) {
  const l = t, { window: a = Ae } = l, o = ze(l, ["window"]);
  let s;
  const u = Me(() => a && "ResizeObserver" in a), i = () => {
    s && (s.disconnect(), s = void 0);
  }, f = $(() => ce(e), (d) => {
    i(), u.value && a && d && (s = new ResizeObserver(n), s.observe(d, o));
  }, { immediate: !0, flush: "post" }), v = () => {
    i(), f();
  };
  return Be(v), {
    isSupported: u,
    stop: v
  };
}
function Qe(e, n = { width: 0, height: 0 }, t = {}) {
  const { box: l = "content-box" } = t, a = m(n.width), o = m(n.height);
  return $e(e, ([s]) => {
    const u = l === "border-box" ? s.borderBoxSize : l === "content-box" ? s.contentBoxSize : s.devicePixelContentBoxSize;
    u ? (a.value = u.reduce((i, { inlineSize: f }) => i + f, 0), o.value = u.reduce((i, { blockSize: f }) => i + f, 0)) : (a.value = s.contentRect.width, o.value = s.contentRect.height);
  }, t), $(() => ce(e), (s) => {
    a.value = s ? n.width : 0, o.value = s ? n.height : 0;
  }), {
    width: a,
    height: o
  };
}
var le;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(le || (le = {}));
var qe = Object.defineProperty, oe = Object.getOwnPropertySymbols, He = Object.prototype.hasOwnProperty, Ue = Object.prototype.propertyIsEnumerable, ae = (e, n, t) => n in e ? qe(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, We = (e, n) => {
  for (var t in n || (n = {}))
    He.call(n, t) && ae(e, t, n[t]);
  if (oe)
    for (var t of oe(n))
      Ue.call(n, t) && ae(e, t, n[t]);
  return e;
};
const De = {
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
We({
  linear: Le
}, De);
function Re(e, n) {
  const t = m(), l = Qe(t), a = m([]), o = me(e), s = m({ start: 0, end: 10 }), { itemHeight: u, overscan: i = 5 } = n, f = (g) => {
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
      }, a.value = o.value.slice(s.value.start, s.value.end).map((B, Q) => ({
        data: B,
        index: Q + s.value.start
      }));
    }
  };
  $([l.width, l.height, e], () => {
    d();
  });
  const S = I(() => typeof u == "number" ? o.value.length * u : o.value.reduce((g, E, _) => g + u(_), 0)), O = (g) => typeof u == "number" ? g * u : o.value.slice(0, g).reduce((_, x, C) => _ + u(C), 0), k = (g) => {
    t.value && (t.value.scrollTop = O(g), d());
  }, P = I(() => O(s.value.start)), L = I(() => ({
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
    wrapperProps: L
  };
}
const F = function(e) {
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
  for (var t = [], l = e.parentNode; l !== n; ) {
    var a = l;
    t.push(a), l = a.parentNode;
  }
  return t.push(n), t;
}, Ge = function(e) {
  var n = Array.prototype.slice.call(e.childNodes);
  n.forEach(function(t) {
    e.removeChild(t);
  });
}, Je = (e, n) => {
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
let Ke = 1;
const Xe = (e) => {
  e && (e.style.display = "none", Ge(e));
}, Ye = (e, n, t, l) => {
  var s, u;
  const a = m([]);
  z(() => {
    a.value = t;
  });
  const o = m([]);
  return z(() => {
    o.value = n;
  }), e && (a.value = Array.apply(null, e.selectedOptions).map((i) => i.value).filter((i) => i), o.value = Array.apply(null, e.options).reduce((i, f) => (i.push({ value: f.text, key: f.value, data: f.dataset }), i), [])), Je(o, (u = (s = e == null ? void 0 : e.id) != null ? s : l) != null ? u : "extraselect_" + (++Ke).toString()), { options: o, selectedOptions: a };
}, re = async function(e, n = null, t = {}) {
  var o;
  const l = {
    method: "POST",
    credentials: "include",
    ...t,
    headers: { "Content-Type": "application/json", ...(o = t.headers) != null ? o : {} },
    body: JSON.stringify({ search: n, ...t.body })
  };
  return await (await fetch(e, l)).json();
}, Ze = (e, n, t, l, a, o = "limited", s = {}) => {
  const u = m(0), i = m(!1), f = I(() => i.value || u.value > 0);
  if (n != null && n.length > 0)
    if (t) {
      const v = [];
      z((d) => {
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
              v.push(l.value), u.value += 1, re(n, l.value, s).then((k) => {
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
      re(n, null, s).then((v) => {
        e.actions.addRange(v), e.actions.sort();
      });
  return { searchingFlag: f };
}, et = (e, n) => {
  const t = m(""), l = m([]), a = function(o, s) {
    return o.value.filter((i) => s.length > 0 ? i.value.toLowerCase().includes(s.toLowerCase()) : !0);
  };
  return z(() => {
    t.value.length >= n ? l.value = a(e, t.value) : l.value = [];
  }), { filterText: t, filteredOptions: l };
}, tt = (e, n, t, l, a, o, s) => {
  const u = function(v, d) {
    const O = document.createElement("canvas").getContext("2d");
    return O.font = d, O.measureText(v).width;
  }, i = I(() => {
    var d;
    const v = (d = F(l.value).width) != null ? d : 100;
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
  return we(() => {
    t.value < 0 && console.log("is open"), n.value.length < 0 && console.log("empty selection");
    var v = F(l.value), d = F(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var d = F(o.value);
    f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: i.value.toString() + "px",
      top: (-d.top + v.top + v.height).toString() + "px",
      left: (-d.left + v.left).toString() + "px"
    };
  }), { dropdownStyle: f };
}, nt = {
  key: 0,
  class: "extra-select selection"
}, lt = ["onClick"], ot = ["innerHTML"], at = ["value"], st = {
  key: 0,
  class: "input-searching"
}, rt = {
  key: 0,
  class: "allselect-clear"
}, ut = { class: "row-input" }, it = ["checked"], ct = /* @__PURE__ */ b("b", null, "Select all", -1), dt = { class: "row-input" }, ft = ["checked"], vt = /* @__PURE__ */ b("b", null, "Select Filtered", -1), pt = {
  key: 1,
  class: "no-matches"
}, ht = { key: 2 }, gt = ["onClick"], yt = { class: "row-input" }, mt = ["checked"], wt = ["value"], _t = {
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
    var R, G, J;
    const t = e, l = I(() => {
      var r, c;
      return (c = (r = t.originalNode) == null ? void 0 : r.multiple) != null ? c : t.multiple;
    }), { options: a, selectedOptions: o } = Ye(t.originalNode, t.options, t.modelValue), s = (R = t.originalNode) == null ? void 0 : R.classList, u = Object.values((J = (G = t.originalNode) == null ? void 0 : G.style) != null ? J : {});
    Xe(t.originalNode);
    const { filterText: i, filteredOptions: f } = et(a, t.minChars), { searchingFlag: v } = Ze(
      a,
      t.url,
      t.searchableUrl,
      i,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), d = m(null), S = m(null), O = m(null), k = m(!1), P = m(null), L = function(r) {
      const c = se(r.target);
      c.push(r.target), !c.includes(d.value) && !c.includes(S.value) && (k.value = !1);
    };
    ue(() => {
      if (t.dropdownContainer) {
        let r = !1;
        P.value = se(d.value).find((c) => !!(c instanceof Element && (c.matches(t.dropdownContainer) && (r = !0), r && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(c).position))));
      }
      if (P.value == null && (P.value = document.querySelector("body")), t.originalNode) {
        for (let r of s)
          r != "extraselect" && d.value.classList.add(r);
        for (let r of u)
          d.value.style[r] = t.originalNode.style[r];
        u.includes("background-color") || (d.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), _e(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: D } = tt(a, o, k, d, S, P, t.maxWidth), g = (r) => {
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
      r != c && (r ? t.search && ie(() => {
        O.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const C = I(() => o.value.length == a.value.length), B = I(() => f.value.reduce((r, c) => r && o.value.includes(c.key), !0));
    I(() => o.value.length == 0);
    const Q = I(() => {
      const r = o.value.map((c) => {
        var h;
        return (h = a.value.find((V) => V.key == c)) == null ? void 0 : h.value;
      }).join(", ");
      return r.length > 0 ? r : "--";
    }), { list: fe, containerProps: ve, wrapperProps: pe } = Re(
      f,
      {
        itemHeight: 32
      }
    );
    return (r, c) => (y(), w(A, null, [
      t.showSelected ? (y(), w("div", nt, [
        (y(!0), w(A, null, q(p(o), (h) => {
          var V;
          return y(), w("div", {
            key: h,
            onClick: (K) => g(h),
            class: "selection-badge"
          }, [
            X(H((V = p(a).find((K) => K.key == h)) == null ? void 0 : V.value) + " ", 1),
            b("div", {
              class: "selection-remove",
              innerHTML: t.removeIcon
            }, null, 8, ot)
          ], 8, lt);
        }), 128))
      ])) : T("", !0),
      b("input", {
        onFocus: c[0] || (c[0] = (h) => k.value = !0),
        onClick: c[1] || (c[1] = (h) => k.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: p(Q),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, at),
      P.value ? (y(), Y(Z, {
        key: 1,
        to: P.value
      }, [
        ee(b("div", {
          class: Oe(["extra-select dropdown", { searching: p(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: S,
          style: be(p(D))
        }, [
          t.search ? (y(), w("div", st, [
            ee(b("input", {
              ref_key: "searchNode",
              ref: O,
              class: "extra-select-search",
              "onUpdate:modelValue": c[2] || (c[2] = (h) => ke(i) ? i.value = h : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [xe, p(i)]
            ])
          ])) : T("", !0),
          p(i).length >= t.minChars ? (y(), w(A, { key: 1 }, [
            p(l) ? (y(), w("div", rt, [
              p(i).length == 0 ? (y(), w("div", {
                key: 0,
                onClick: _,
                class: "all-select"
              }, [
                b("div", ut, [
                  b("input", {
                    checked: p(C),
                    type: "checkbox"
                  }, null, 8, it),
                  ct
                ])
              ])) : T("", !0),
              p(f).length > 0 && p(i).length > 0 ? (y(), w("div", {
                key: 1,
                onClick: x,
                class: "all-select"
              }, [
                b("div", dt, [
                  b("input", {
                    checked: p(B),
                    type: "checkbox"
                  }, null, 8, ft),
                  vt
                ])
              ])) : T("", !0),
              b("div", {
                class: "clear",
                onClick: E
              }, "Clear")
            ])) : T("", !0),
            p(f).length == 0 ? (y(), w("div", pt, "No matches found")) : T("", !0)
          ], 64)) : (y(), w("div", ht, "Insert at least " + H(t.minChars) + " characters", 1)),
          b("div", Ce(p(ve), { class: "scroller" }), [
            b("div", Se(Ee(p(pe))), [
              (y(!0), w(A, null, q(p(fe), (h) => (y(), w("button", {
                key: h.index,
                class: "dropdown-row",
                onClick: Ne((V) => g(h.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                b("div", yt, [
                  p(l) ? (y(), w("input", {
                    key: 0,
                    checked: p(o).includes(h.data.key),
                    type: "checkbox"
                  }, null, 8, mt)) : T("", !0),
                  X(" " + H(h.data.value), 1)
                ])
              ], 8, gt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Ie, k.value]
        ])
      ], 8, ["to"])) : T("", !0),
      t.originalNode ? (y(), Y(Z, {
        key: 2,
        to: t.originalNode
      }, [
        (y(!0), w(A, null, q(p(o), (h) => (y(), w("option", {
          key: h,
          selected: "selected",
          value: h
        }, null, 8, wt))), 128))
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
    M.lock(e, "extra-select", () => {
      const n = {};
      for (let a in e.dataset)
        try {
          n[a] = JSON.parse(e.dataset[a]);
        } catch {
          n[a] = e.dataset[a];
        }
      n.originalNode = e;
      const t = document.createElement("div");
      e.parentNode.insertBefore(t, e.nextSibling), t.dataset.isVue = !0;
      const l = Pe(_t, n);
      l.mount(t), e.addEventListener("remove", function() {
        l.unmount(), t.remove(), e.remove(), M.remove(e, "extra-select");
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
