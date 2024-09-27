import { onMounted as oe, nextTick as le, getCurrentScope as Xe, onScopeDispose as Ye, unref as y, getCurrentInstance as he, computed as O, ref as w, shallowRef as Qe, watch as R, watchEffect as Q, watchPostEffect as Ze, defineComponent as et, toRef as Y, onUnmounted as me, openBlock as b, createElementBlock as k, Fragment as P, createCommentVNode as V, renderList as te, withModifiers as q, createTextVNode as ve, toDisplayString as B, createElementVNode as C, mergeProps as ne, createBlock as re, Teleport as ue, withDirectives as ae, normalizeClass as ge, normalizeStyle as ye, isRef as we, vModelText as tt, normalizeProps as be, guardReactiveProps as ke, vShow as xe, vModelDynamic as lt, createApp as Se } from "vue";
const $ = /* @__PURE__ */ new WeakMap();
class M {
  static put(l, e, o) {
    $.has(l) || $.set(l, /* @__PURE__ */ new Map()), $.get(l).set(e, o);
  }
  static get(l, e) {
    return $.get(l).get(e);
  }
  static has(l, e) {
    return $.has(l) && $.get(l).has(e);
  }
  static remove(l, e) {
    var o = $.get(l).delete(e);
    return $.get(l).size !== 0 && $.delete(l), o;
  }
  static lock(l, e, o) {
    if (!M.has(l, e)) {
      M.put(l, e, !0);
      const n = o();
      return n !== void 0 && M.put(l, e, n), n;
    }
    return !1;
  }
  static async lockAsync(l, e, o) {
    if (!M.has(l, e)) {
      M.put(l, e, !0);
      const n = await o();
      return n !== void 0 && M.put(l, e, n), n;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = $);
function ee(t) {
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
function J(t, l) {
  l === void 0 && (l = window.document);
  for (var e = [], o = t.parentNode; o != null && o instanceof HTMLElement && !(l instanceof HTMLElement && o === l) && !(typeof l == "string" && o.matches(l)); ) {
    var n = o;
    e.push(n), o = n.parentNode;
  }
  return o != null && e.push(o), e;
}
function nt(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
function at(t) {
  return Xe() ? (Ye(t), !0) : !1;
}
function Ce(t) {
  return typeof t == "function" ? t() : y(t);
}
const ot = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function st(t) {
  return he();
}
function rt(t, l = !0, e) {
  st() ? oe(t, e) : l ? t() : le(t);
}
const Ee = ot ? window : void 0;
function G(t) {
  var l;
  const e = Ce(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
function ut() {
  const t = w(!1), l = he();
  return l && oe(() => {
    t.value = !0;
  }, l), t;
}
function it(t) {
  const l = ut();
  return O(() => (l.value, !!t()));
}
function ct(t, l, e = {}) {
  const { window: o = Ee, ...n } = e;
  let a;
  const d = it(() => o && "ResizeObserver" in o), r = () => {
    a && (a.disconnect(), a = void 0);
  }, h = O(() => {
    const u = Ce(t);
    return Array.isArray(u) ? u.map((i) => G(i)) : [G(u)];
  }), s = R(
    h,
    (u) => {
      if (r(), d.value && o) {
        a = new ResizeObserver(l);
        for (const i of u)
          i && a.observe(i, n);
      }
    },
    { immediate: !0, flush: "post" }
  ), v = () => {
    r(), s();
  };
  return at(v), {
    isSupported: d,
    stop: v
  };
}
function dt(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: o = Ee, box: n = "content-box" } = e, a = O(() => {
    var u, i;
    return (i = (u = G(t)) == null ? void 0 : u.namespaceURI) == null ? void 0 : i.includes("svg");
  }), d = w(l.width), r = w(l.height), { stop: h } = ct(
    t,
    ([u]) => {
      const i = n === "border-box" ? u.borderBoxSize : n === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (o && a.value) {
        const c = G(t);
        if (c) {
          const m = c.getBoundingClientRect();
          d.value = m.width, r.value = m.height;
        }
      } else if (i) {
        const c = Array.isArray(i) ? i : [i];
        d.value = c.reduce((m, { inlineSize: g }) => m + g, 0), r.value = c.reduce((m, { blockSize: g }) => m + g, 0);
      } else
        d.value = u.contentRect.width, r.value = u.contentRect.height;
    },
    e
  );
  rt(() => {
    const u = G(t);
    u && (d.value = "offsetWidth" in u ? u.offsetWidth : l.width, r.value = "offsetHeight" in u ? u.offsetHeight : l.height);
  });
  const s = R(
    () => G(t),
    (u) => {
      d.value = u ? l.width : 0, r.value = u ? l.height : 0;
    }
  );
  function v() {
    h(), s();
  }
  return {
    width: d,
    height: r,
    stop: v
  };
}
function Le(t, l) {
  const { containerStyle: e, wrapperProps: o, scrollTo: n, calculateRange: a, currentList: d, containerRef: r } = "itemHeight" in l ? pt(l, t) : vt(l, t);
  return {
    list: d,
    scrollTo: n,
    containerProps: {
      ref: r,
      onScroll: () => {
        a();
      },
      style: e
    },
    wrapperProps: o
  };
}
function _e(t) {
  const l = w(null), e = dt(l), o = w([]), n = Qe(t);
  return { state: w({ start: 0, end: 10 }), source: n, currentList: o, size: e, containerRef: l };
}
function Ne(t, l, e) {
  return (o) => {
    if (typeof e == "number")
      return Math.ceil(o / e);
    const { start: n = 0 } = t.value;
    let a = 0, d = 0;
    for (let r = n; r < l.value.length; r++) {
      const h = e(r);
      if (a += h, d = r, a > o)
        break;
    }
    return d - n;
  };
}
function Oe(t, l) {
  return (e) => {
    if (typeof l == "number")
      return Math.floor(e / l) + 1;
    let o = 0, n = 0;
    for (let a = 0; a < t.value.length; a++) {
      const d = l(a);
      if (o += d, o >= e) {
        n = a;
        break;
      }
    }
    return n + 1;
  };
}
function Ae(t, l, e, o, { containerRef: n, state: a, currentList: d, source: r }) {
  return () => {
    const h = n.value;
    if (h) {
      const s = e(t === "vertical" ? h.scrollTop : h.scrollLeft), v = o(t === "vertical" ? h.clientHeight : h.clientWidth), u = s - l, i = s + v + l;
      a.value = {
        start: u < 0 ? 0 : u,
        end: i > r.value.length ? r.value.length : i
      }, d.value = r.value.slice(a.value.start, a.value.end).map((c, m) => ({
        data: c,
        index: m + a.value.start
      }));
    }
  };
}
function Ve(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, a, d) => n + t(d), 0);
}
function Te(t, l, e, o) {
  R([t.width, t.height, l, e], () => {
    o();
  });
}
function Fe(t, l) {
  return O(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, o, n) => e + t(n), 0));
}
const ft = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function ze(t, l, e, o) {
  return (n) => {
    o.value && (o.value[ft[t]] = e(n), l());
  };
}
function vt(t, l) {
  const e = _e(l), { state: o, source: n, currentList: a, size: d, containerRef: r } = e, h = { overflowX: "auto" }, { itemWidth: s, overscan: v = 5 } = t, u = Ne(o, n, s), i = Oe(n, s), c = Ae("horizontal", v, i, u, e), m = Ve(s, n), g = O(() => m(o.value.start)), x = Fe(s, n);
  Te(d, l, r, c);
  const T = ze("horizontal", c, m, r), F = O(() => ({
    style: {
      height: "100%",
      width: `${x.value - g.value}px`,
      marginLeft: `${g.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: T,
    calculateRange: c,
    wrapperProps: F,
    containerStyle: h,
    currentList: a,
    containerRef: r
  };
}
function pt(t, l) {
  const e = _e(l), { state: o, source: n, currentList: a, size: d, containerRef: r } = e, h = { overflowY: "auto" }, { itemHeight: s, overscan: v = 5 } = t, u = Ne(o, n, s), i = Oe(n, s), c = Ae("vertical", v, i, u, e), m = Ve(s, n), g = O(() => m(o.value.start)), x = Fe(s, n);
  Te(d, l, r, c);
  const T = ze("vertical", c, m, r), F = O(() => ({
    style: {
      width: "100%",
      height: `${x.value - g.value}px`,
      marginTop: `${g.value}px`
    }
  }));
  return {
    calculateRange: c,
    scrollTo: T,
    containerStyle: h,
    wrapperProps: F,
    currentList: a,
    containerRef: r
  };
}
const I = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, ht = (t) => {
  try {
    var l = JSON.parse(t);
    if (l && typeof l == "object")
      return l;
  } catch {
  }
  return t;
}, mt = (t, l, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, a, d = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const r = t.map.get(n);
      if (r)
        r.value = a, r.data = d;
      else {
        let h = { value: a, key: n, data: d };
        t.value.push(h), t.map.set(h.key, h);
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
      n == null && (n = (a, d) => a.value.localeCompare(d.value)), t.value = t.value.sort(n);
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
let gt = 1;
const Me = (t) => {
  t && (t.style.display = "none", nt(t));
}, $e = (t, l, e, o) => {
  const n = w(/* @__PURE__ */ new Map());
  Q(() => {
    if (Array.isArray(e.value)) {
      n.value.clear();
      for (let s of e.value)
        n.value.set(s, s);
    }
  });
  const a = w([]);
  if (a.map = /* @__PURE__ */ new Map(), a.rebuildMap = () => {
    if (a.map.clear(), a.value)
      for (let s of a.value)
        a.map.set(s.key, s);
  }, Q(() => {
    l.value && (a.value = l.value.map((s) => ({ ...s, key: I(s.key) })), a.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let s of Array.apply(null, t.selectedOptions).map((v) => I(v.value)).filter((v) => v != null))
        n.value.set(s, s);
      a.value = Array.apply(null, t.options).reduce((s, v) => (s.push({
        value: v.text,
        key: I(v.value),
        data: Object.keys(v.dataset).reduce((u, i) => (u[i] = ht(v.dataset[i]), u), {})
      }), s), []);
    }
    if (t.matches("input")) {
      let s = t.value;
      s != null && s.length > 0 && (a.value = [{ value: s, key: s }]);
    }
    a.rebuildMap();
  }
  if (Array.isArray(o))
    for (let s of o)
      n.value.set(I(s), I(s));
  else o != null && n.value.set(I(o), I(o));
  let d = t == null ? void 0 : t.id;
  (d == null || d === "" || d == 0) && (d = "extraselect_" + (++gt).toString()), mt(a, n, d);
  const r = [];
  return n.value.forEach((s, v) => {
    r.push([v, s]);
  }), { options: a, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [s, v] of r)
      n.value.set(s, v);
  } };
};
w({});
function yt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const ie = (t = null) => {
  var o;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...((o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) ?? {} };
  Object.assign(e, t ?? {}), Be(w(e), "defaults");
}, Be = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, ie());
  const e = {
    defaultArray: t.value,
    list: () => t.value,
    get: (o) => t.value[o] ?? null,
    push: (o, n) => {
      t.value[o] = n;
    }
  };
  window.ExtraSelectLocalization[l] = e, t.actions = e;
};
let wt = 0;
const We = (t, l) => (Be(l, (t == null ? void 0 : t.id) ?? "extraselect_" + (++wt).toString()), { propLocalization: l, t: (o, n = {}) => {
  let a = l.value[o] ?? window.ExtraSelectLocalization.defaults.get(o);
  return a == null && (window.ExtraSelectLocalization.defaults.push(o, o), a = o), yt(a, n);
} }), pe = async function(t, l = null, e = {}) {
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...e.headers ?? {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, o)).json();
}, De = (t, l, e, o, n, a, d = "limited", r = {}) => {
  const h = w(0), s = w(!1), v = O(() => s.value || h.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const u = [];
      Q((i) => {
        if (o.value.length >= n) {
          let c = !0;
          switch (d) {
            case "always":
              break;
            default:
            case "limited":
              c = !u.includes(o.value);
              break;
            case "complete":
              c = u.reduce((m, g) => m && !o.value.startsWith(g), !0);
              break;
          }
          if (c) {
            s.value = !0;
            const m = setTimeout(() => {
              u.push(o.value), h.value += 1, r.body = { ...r.body, ...a.value }, pe(l, o.value, r).then((g) => {
                t.actions.addRange(g), t.actions.sort(), h.value -= 1, s.value = !1;
              });
            }, 500);
            i(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      pe(l, null, r).then((u) => {
        t.actions.addRange(u), t.actions.sort();
      });
  return { searchingFlag: v };
}, He = (t, l, e, o = [], n = []) => {
  const a = w(""), d = w([]), r = w({}), h = { ...o.reduce((v, u) => (v[u] = !1, v), {}), ...n.reduce((v, u) => (v[u] = !0, v), {}) };
  for (let v in h) {
    let u = h[v], i = document.getElementById(v);
    r.value[v] = i == null ? void 0 : i.value, i && i.addEventListener("change", (c) => {
      r.value[v] = c.target.value, u && le(() => {
        if (l != null)
          for (let m of Array.from(l.value.keys()))
            d.value.find((g) => g.key == m) || e(m, !1);
        else d.value.find((m) => m.key == a.value) || e(a.value, !1);
      });
    });
  }
  const s = function(v, u) {
    let i = v.value;
    return Object.keys(r.value).length > 0 && (i = i.filter((c) => {
      var m;
      for (let g in r.value)
        if ((h[g] ? !0 : (r.value[g] ?? "").length > 0) && ((m = c.data) != null && m.hasOwnProperty(g))) {
          if (Array.isArray(c.data[g])) {
            if (!c.data[g].includes(r.value[g]))
              return !1;
          } else if (c.data[g] != r.value[g])
            return !1;
        }
      return !0;
    })), u.length > 0 && (i = i.filter((c) => c.value.toLowerCase().includes(u.toLowerCase()))), i;
  };
  return Q(() => {
    d.value = s(t, a.value);
  }), { filterText: a, filteredOptions: d, filterValues: r };
}, Pe = (t, l, e, o, n, a, d) => {
  const r = getComputedStyle(document.querySelector("body")).font, h = function(u) {
    const c = document.createElement("canvas").getContext("2d");
    return c.font = r, c.measureText(u).width;
  }, s = O(() => {
    const u = ee(o.value).width ?? 100;
    if (d === "inherit")
      return u;
    if (d == null || d === "dynamic") {
      const i = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
      return Math.max(u, Math.max(...t.value.map((c) => h(c.value))) + 20 + i * 3);
    }
    return d;
  }), v = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ze(() => {
    e.value < 0 && console.log("is open"), l.value.size < 0 && console.log("empty selection");
    var u = ee(o.value), i = ee(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var i = ee(a.value);
    let c = -i.left + u.left;
    const m = window.document.documentElement.clientWidth;
    c + s.value > m && (c = m - s.value), v.value = {
      position: "absolute",
      "min-width": "max-content",
      width: s.value.toString() + "px",
      top: (-i.top + u.top + u.height).toString() + "px",
      left: c.toString() + "px"
    };
  }), { dropdownStyle: v, getTextWidth: h };
}, bt = ["name"], kt = {
  key: 1,
  class: "extra-select selection"
}, xt = ["onClick"], St = ["innerHTML"], Ct = ["value", "disabled"], Et = {
  key: 0,
  class: "input-searching"
}, Lt = ["placeholder"], _t = {
  key: 0,
  class: "allselect-clear"
}, Nt = { class: "row-input" }, Ot = ["checked"], At = { class: "row-input" }, Vt = ["checked"], Tt = {
  key: 1,
  class: "no-matches"
}, Ft = { key: 2 }, zt = ["onClick"], Mt = { class: "row-input" }, $t = ["checked"], Bt = ["value"], Wt = /* @__PURE__ */ et({
  name: "ExtraSelect",
  inheritAttrs: !1,
  __name: "ExtraSelect",
  props: {
    modelValue: { default: () => [] },
    originalNode: {},
    multiple: { type: Boolean },
    options: { default: () => [] },
    localization: { default: () => ({}) },
    url: {},
    maxWidth: { default: "dynamic" },
    minChars: { default: 0 },
    search: { type: Boolean },
    searchableUrl: { type: Boolean },
    initialValue: {},
    showSelected: { type: Boolean },
    fetchMode: { default: "limited" },
    fetchOptions: { default: () => ({}) },
    filterFields: { default: () => [] },
    hardFilterFields: { default: () => [] },
    removeIcon: { default: "X" },
    dropdownContainer: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: l }) {
    var de, fe;
    const e = t, o = O(() => {
      var f;
      return ((f = e.originalNode) == null ? void 0 : f.multiple) ?? e.multiple;
    }), { options: n, selectedOptions: a, onReset: d } = $e(e.originalNode, Y(e, "options"), Y(e, "modelValue"), e.initialValue), { t: r } = We(e.originalNode, Y(e, "localization")), h = (de = e.originalNode) == null ? void 0 : de.classList, s = Object.values(((fe = e.originalNode) == null ? void 0 : fe.style) ?? {});
    Me(e.originalNode);
    const v = l, u = (f, p = null) => {
      if (o.value) {
        let E = p;
        switch (E == null && (E = !a.value.has(f)), E) {
          case !0:
            a.value.set(f, f);
            break;
          case !1:
            a.value.delete(f);
            break;
        }
      } else
        a.value.clear(), p !== !1 && a.value.set(f, f), W.value = !1;
      U(Array.from(a.value.keys()));
    }, { filterText: i, filteredOptions: c, filterValues: m } = He(n, a, u, e.filterFields, e.hardFilterFields), { searchingFlag: g } = De(
      n,
      e.url,
      e.searchableUrl,
      i,
      e.minChars,
      m,
      e.fetchMode,
      e.fetchOptions
    ), x = w(null), T = w(), F = w(null), W = w(!1);
    function K(f) {
      e.disabled || (W.value = f);
    }
    R(i, () => {
      var p;
      let f = (p = T.value) == null ? void 0 : p.querySelector(".scroller");
      f && (f.scrollTop = 0);
    });
    const D = w(null), j = function(f) {
      const p = J(f.target);
      p.push(f.target), !p.includes(x.value) && !p.includes(T.value) ? W.value = !1 : (f.stopImmediatePropagation(), f.preventDefault());
    };
    oe(() => {
      if (e.dropdownContainer != null) {
        const f = e.dropdownContainer;
        let p = !1;
        D.value = J(x.value).find((E) => !!(E instanceof Element && (E.matches(f) && (p = !0), p && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(E).position))));
      }
      if (D.value == null && (D.value = document.querySelector("body")), e.originalNode) {
        for (let p of h)
          p != "extraselect" && x.value.classList.add(p);
        for (let p of s)
          x.value.style[p] = e.originalNode.style[p];
        let f = J(x.value, "form").pop();
        f instanceof HTMLElement && f.matches("form") && f.addEventListener("reset", () => setTimeout(d)), e.originalNode.toggleValue = u, e.originalNode.setValues = (p) => {
          a.value.clear();
          for (let E of p)
            u(E);
        };
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), me(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: se, getTextWidth: Z } = Pe(n, a, W, x, T, D, e.maxWidth), U = (f) => {
      le(
        () => {
          var p;
          return (p = e.originalNode) == null ? void 0 : p.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), v("update:modelValue", f);
    }, _ = (f) => {
      S(f, !1), i.value = "";
    }, S = (f, p = null) => {
      p == null && (p = !A.value), p ? (a.value.clear(), n.value.forEach((E) => a.value.set(E.key, E.key))) : a.value.clear(), U(Array.from(a.value.keys()));
    }, N = () => {
      ce.value ? c.value.forEach((f) => {
        a.value.has(f.key) && a.value.delete(f.key);
      }) : c.value.forEach((f) => {
        a.value.has(f.key) || a.value.set(f.key, f.key);
      }), U(Array.from(a.value.keys()));
    };
    R(W, (f, p) => {
      f != p && (f ? e.search && le(() => {
        F.value.focus({ focusVisible: !0 });
      }) : i.value = "");
    });
    const A = O(() => a.value.size == n.value.length), ce = O(() => c.value.reduce((f, p) => f && a.value.has(p.key), !0)), Re = O(() => a.value.size == 0), je = O(() => {
      var f, p, E;
      if (n.value.length < 0) return "";
      if (o.value) {
        if (Re.value) return r("No selection");
        if (!e.searchableUrl && A.value) return r("All selected");
        const z = x.value ? getComputedStyle(x.value) : null, L = ((f = x.value) == null ? void 0 : f.clientWidth) - parseInt(z == null ? void 0 : z.paddingLeft) - parseInt(z == null ? void 0 : z.paddingRight);
        let H = r(":n selected - ", { n: a.value.size }), X = !0;
        for (let Ke of a.value)
          if (X ? X = !1 : H += ", ", H += ((p = n.map.get(Ke[0])) == null ? void 0 : p.value) ?? (g.value ? r("Loading...") : r("Value not found")), L < Z(H))
            return a.value.size + r(" selected");
        return H;
      } else
        for (let z of a.value)
          return ((E = n.map.get(z[0])) == null ? void 0 : E.value) ?? (g.value ? r("Loading...") : r("Value not found"));
      return r("No selection");
    }), { list: Ue, containerProps: Ge, wrapperProps: Je } = Le(
      c,
      {
        itemHeight: 32
      }
    );
    return (f, p) => {
      var E, z;
      return b(), k(P, null, [
        o.value && y(a).size == 0 ? (b(), k("input", {
          key: 0,
          type: "hidden",
          name: (z = (E = e.originalNode) == null ? void 0 : E.name) == null ? void 0 : z.replace("[]", ""),
          value: ""
        }, null, 8, bt)) : V("", !0),
        e.showSelected ? (b(), k("div", kt, [
          (b(!0), k(P, null, te(y(a), (L) => {
            var H;
            return b(), k("div", {
              key: L,
              onClick: q((X) => u(L[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ve(B((H = y(n).find((X) => X.key == L[0])) == null ? void 0 : H.value) + " ", 1),
              C("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, St)
            ], 8, xt);
          }), 128))
        ])) : V("", !0),
        C("input", ne({
          onFocus: p[0] || (p[0] = (L) => K(!0)),
          onClick: p[1] || (p[1] = q((L) => K(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: x,
          value: je.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, f.$attrs, { disabled: f.disabled }), null, 16, Ct),
        D.value ? (b(), re(ue, {
          key: 2,
          to: D.value
        }, [
          ae(C("div", {
            class: ge(["extra-select dropdown", { searching: y(g) > 0 }]),
            ref_key: "dropdownNode",
            ref: T,
            style: ye(y(se))
          }, [
            e.search ? (b(), k("div", Et, [
              ae(C("input", {
                ref_key: "searchNode",
                ref: F,
                class: "extra-select-search",
                "onUpdate:modelValue": p[2] || (p[2] = (L) => we(i) ? i.value = L : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: y(r)("Search...")
              }, null, 8, Lt), [
                [tt, y(i)]
              ])
            ])) : V("", !0),
            y(i).length >= e.minChars ? (b(), k(P, { key: 1 }, [
              o.value ? (b(), k("div", _t, [
                y(i).length == 0 ? (b(), k("div", {
                  key: 0,
                  onClick: q(S, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", Nt, [
                    C("input", {
                      checked: A.value,
                      type: "checkbox"
                    }, null, 8, Ot),
                    C("b", null, B(y(r)("Select all")), 1)
                  ])
                ])) : V("", !0),
                y(c).length > 0 && y(i).length > 0 ? (b(), k("div", {
                  key: 1,
                  onClick: q(N, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  C("div", At, [
                    C("input", {
                      checked: ce.value,
                      type: "checkbox"
                    }, null, 8, Vt),
                    C("b", null, B(y(r)("Select Filtered")), 1)
                  ])
                ])) : V("", !0),
                C("div", {
                  class: "clear",
                  onClick: q(_, ["stop", "prevent"])
                }, B(y(r)("Clear")), 1)
              ])) : V("", !0),
              y(c).length == 0 ? (b(), k("div", Tt, B(y(r)("No matches found")), 1)) : V("", !0)
            ], 64)) : (b(), k("div", Ft, B(y(r)("Insert at least :n characters", { n: e.minChars })), 1)),
            C("div", ne(y(Ge), { class: "scroller" }), [
              C("div", be(ke(y(Je))), [
                (b(!0), k(P, null, te(y(Ue), (L) => (b(), k("button", {
                  key: L.index,
                  class: "dropdown-row",
                  onClick: q((H) => u(L.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  C("div", Mt, [
                    o.value ? (b(), k("input", {
                      key: 0,
                      checked: y(a).has(L.data.key),
                      type: "checkbox"
                    }, null, 8, $t)) : V("", !0),
                    ve(" " + B(L.data.value), 1)
                  ])
                ], 8, zt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [xe, W.value]
          ])
        ], 8, ["to"])) : V("", !0),
        e.originalNode ? (b(), re(ue, {
          key: 3,
          to: e.originalNode
        }, [
          (b(!0), k(P, null, te(y(a), (L) => (b(), k("option", {
            key: L[0],
            selected: "selected",
            value: L[0]
          }, null, 8, Bt))), 128))
        ], 8, ["to"])) : V("", !0)
      ], 64);
    };
  }
}), Dt = ["disabled"], Ht = {
  key: 0,
  class: "no-matches"
}, Pt = { key: 1 }, It = ["onClick"], qt = { class: "row-input" }, Rt = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, jt = /* @__PURE__ */ Object.assign(Rt, {
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
    var Z, U;
    const e = t, { options: o } = $e(e.originalNode, Y(e, "options"), w([])), { t: n } = We(e.originalNode, Y(e, "localization")), a = (Z = e.originalNode) == null ? void 0 : Z.classList, d = Object.values(((U = e.originalNode) == null ? void 0 : U.style) ?? {});
    Me(e.originalNode);
    const r = l, h = (_, S = null) => {
      S === !1 ? s.value = "" : s.value = o.map.get(_).value, g.value = !1;
    }, { filterText: s, filteredOptions: v, filterValues: u } = He(o, null, h, e.filterFields, e.hardFilterFields), { searchingFlag: i } = De(
      o,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      u,
      e.fetchMode,
      e.fetchOptions
    ), c = w(null), m = w(null), g = w(!1), x = w(null);
    function T(_) {
      e.disabled || (g.value = _);
    }
    R(s, () => {
      m.value.querySelector(".scroller").scrollTop = 0;
    });
    const F = function(_) {
      const S = J(_.target);
      S.push(_.target), !S.includes(c.value) && !S.includes(m.value) && (g.value = !1);
    };
    oe(() => {
      if (e.dropdownContainer) {
        let N = !1;
        x.value = J(c.value).find((A) => !!(A instanceof Element && (A.matches(e.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(A).position))));
      }
      if (x.value == null && (x.value = document.querySelector("body")), e.originalNode) {
        for (let A of a)
          A != "extrasuggest" && c.value.classList.add(A);
        for (let A of d)
          c.value.style[A] = e.originalNode.style[A];
        s.value = e.originalNode.value;
        let N = J(c.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          K(!0);
        });
      }
      Q(() => {
        e.modelValue != null && (s.value = e.modelValue);
      });
      const _ = s.value, S = () => {
        s.value = _;
      };
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), me(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: W } = Pe(o, w([]), g, c, m, x, e.maxWidth), K = (_ = !1) => {
      var S;
      e.originalNode && (_ ? s.value = e.originalNode.value : (e.originalNode.value = s.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), r("update:modelValue", s.value);
    };
    R(() => g.value, (_) => {
      _ === !1 && K();
    });
    const { list: D, containerProps: j, wrapperProps: se } = Le(
      v,
      {
        itemHeight: 32
      }
    );
    return (_, S) => (b(), k(P, null, [
      ae(C("input", ne({
        onFocus: S[0] || (S[0] = (N) => T(!0)),
        onClick: S[1] || (S[1] = (N) => T(!0)),
        ref_key: "inputNode",
        ref: c,
        "onUpdate:modelValue": S[2] || (S[2] = (N) => we(s) ? s.value = N : null),
        class: "extra-select extra-select-input"
      }, _.$attrs, { disabled: t.disabled }), null, 16, Dt), [
        [lt, y(s)]
      ]),
      x.value ? (b(), re(ue, {
        key: 0,
        to: x.value
      }, [
        ae(C("div", {
          class: ge(["extra-select dropdown", { searching: y(i) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: ye(y(W))
        }, [
          y(s).length >= e.minChars ? (b(), k(P, { key: 0 }, [
            y(v).length == 0 ? (b(), k("div", Ht, B(y(n)("No matches found")), 1)) : V("", !0)
          ], 64)) : (b(), k("div", Pt, B(y(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          C("div", ne(y(j), { class: "scroller" }), [
            C("div", be(ke(y(se))), [
              (b(!0), k(P, null, te(y(D), (N) => (b(), k("button", {
                key: N.index,
                class: "dropdown-row",
                onClick: q((A) => h(N.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                C("div", qt, B(N.data.value), 1)
              ], 8, It))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, g.value]
        ])
      ], 8, ["to"])) : V("", !0)
    ], 64));
  }
}), Gt = ie, Ie = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Ie.bindNew(t);
    });
  },
  bindNew(t) {
    M.lock(t, "extra-select", () => {
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
      const o = Se(Wt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), M.remove(t, "extra-select");
      });
    });
  }
}, qe = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      qe.bindNew(t);
    });
  },
  bindNew(t) {
    M.lock(t, "extra-suggest", () => {
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
      const o = Se(jt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), M.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Ie.init(), qe.init(), ie();
});
export {
  Ie as ExtraSelect,
  qe as ExtraSuggest,
  Gt as loadExtraSelectDefaultLocalization
};
