import { onMounted as ae, nextTick as te, getCurrentScope as Je, onScopeDispose as Ke, unref as y, getCurrentInstance as he, computed as V, ref as w, shallowRef as Xe, watch as q, watchEffect as X, watchPostEffect as Ye, defineComponent as Qe, toRef as K, onUnmounted as me, openBlock as b, createElementBlock as x, Fragment as D, createCommentVNode as M, renderList as ee, withModifiers as R, createTextVNode as ve, toDisplayString as $, createElementVNode as E, mergeProps as le, createBlock as ue, Teleport as ie, withDirectives as ne, normalizeClass as ge, normalizeStyle as ye, isRef as we, vModelText as Ze, normalizeProps as be, guardReactiveProps as ke, vShow as xe, vModelDynamic as et, createApp as Se } from "vue";
const B = /* @__PURE__ */ new WeakMap();
class z {
  static put(l, e, o) {
    B.has(l) || B.set(l, /* @__PURE__ */ new Map()), B.get(l).set(e, o);
  }
  static get(l, e) {
    return B.get(l).get(e);
  }
  static has(l, e) {
    return B.has(l) && B.get(l).has(e);
  }
  static remove(l, e) {
    var o = B.get(l).delete(e);
    return B.get(l).size !== 0 && B.delete(l), o;
  }
  static lock(l, e, o) {
    if (!z.has(l, e)) {
      z.put(l, e, !0);
      const n = o();
      return n !== void 0 && z.put(l, e, n), n;
    }
    return !1;
  }
  static async lockAsync(l, e, o) {
    if (!z.has(l, e)) {
      z.put(l, e, !0);
      const n = await o();
      return n !== void 0 && z.put(l, e, n), n;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = B);
function Z(t) {
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
function tt(t) {
  var l = Array.prototype.slice.call(t.childNodes);
  l.forEach(function(e) {
    t.removeChild(e);
  });
}
function lt(t) {
  return Je() ? (Ke(t), !0) : !1;
}
function Ee(t) {
  return typeof t == "function" ? t() : y(t);
}
const nt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function at(t) {
  return he();
}
function ot(t, l = !0, e) {
  at() ? ae(t, e) : l ? t() : te(t);
}
const Ce = nt ? window : void 0;
function U(t) {
  var l;
  const e = Ee(t);
  return (l = e == null ? void 0 : e.$el) != null ? l : e;
}
function st() {
  const t = w(!1), l = he();
  return l && ae(() => {
    t.value = !0;
  }, l), t;
}
function rt(t) {
  const l = st();
  return V(() => (l.value, !!t()));
}
function ut(t, l, e = {}) {
  const { window: o = Ce, ...n } = e;
  let a;
  const c = rt(() => o && "ResizeObserver" in o), u = () => {
    a && (a.disconnect(), a = void 0);
  }, m = V(() => {
    const r = Ee(t);
    return Array.isArray(r) ? r.map((i) => U(i)) : [U(r)];
  }), s = q(
    m,
    (r) => {
      if (u(), c.value && o) {
        a = new ResizeObserver(l);
        for (const i of r)
          i && a.observe(i, n);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), s();
  };
  return lt(d), {
    isSupported: c,
    stop: d
  };
}
function it(t, l = { width: 0, height: 0 }, e = {}) {
  const { window: o = Ce, box: n = "content-box" } = e, a = V(() => {
    var r, i;
    return (i = (r = U(t)) == null ? void 0 : r.namespaceURI) == null ? void 0 : i.includes("svg");
  }), c = w(l.width), u = w(l.height), { stop: m } = ut(
    t,
    ([r]) => {
      const i = n === "border-box" ? r.borderBoxSize : n === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
      if (o && a.value) {
        const f = U(t);
        if (f) {
          const h = f.getBoundingClientRect();
          c.value = h.width, u.value = h.height;
        }
      } else if (i) {
        const f = Array.isArray(i) ? i : [i];
        c.value = f.reduce((h, { inlineSize: v }) => h + v, 0), u.value = f.reduce((h, { blockSize: v }) => h + v, 0);
      } else
        c.value = r.contentRect.width, u.value = r.contentRect.height;
    },
    e
  );
  ot(() => {
    const r = U(t);
    r && (c.value = "offsetWidth" in r ? r.offsetWidth : l.width, u.value = "offsetHeight" in r ? r.offsetHeight : l.height);
  });
  const s = q(
    () => U(t),
    (r) => {
      c.value = r ? l.width : 0, u.value = r ? l.height : 0;
    }
  );
  function d() {
    m(), s();
  }
  return {
    width: c,
    height: u,
    stop: d
  };
}
function Le(t, l) {
  const { containerStyle: e, wrapperProps: o, scrollTo: n, calculateRange: a, currentList: c, containerRef: u } = "itemHeight" in l ? ft(l, t) : dt(l, t);
  return {
    list: c,
    scrollTo: n,
    containerProps: {
      ref: u,
      onScroll: () => {
        a();
      },
      style: e
    },
    wrapperProps: o
  };
}
function _e(t) {
  const l = w(null), e = it(l), o = w([]), n = Xe(t);
  return { state: w({ start: 0, end: 10 }), source: n, currentList: o, size: e, containerRef: l };
}
function Oe(t, l, e) {
  return (o) => {
    if (typeof e == "number")
      return Math.ceil(o / e);
    const { start: n = 0 } = t.value;
    let a = 0, c = 0;
    for (let u = n; u < l.value.length; u++) {
      const m = e(u);
      if (a += m, c = u, a > o)
        break;
    }
    return c - n;
  };
}
function Ne(t, l) {
  return (e) => {
    if (typeof l == "number")
      return Math.floor(e / l) + 1;
    let o = 0, n = 0;
    for (let a = 0; a < t.value.length; a++) {
      const c = l(a);
      if (o += c, o >= e) {
        n = a;
        break;
      }
    }
    return n + 1;
  };
}
function Ae(t, l, e, o, { containerRef: n, state: a, currentList: c, source: u }) {
  return () => {
    const m = n.value;
    if (m) {
      const s = e(t === "vertical" ? m.scrollTop : m.scrollLeft), d = o(t === "vertical" ? m.clientHeight : m.clientWidth), r = s - l, i = s + d + l;
      a.value = {
        start: r < 0 ? 0 : r,
        end: i > u.value.length ? u.value.length : i
      }, c.value = u.value.slice(a.value.start, a.value.end).map((f, h) => ({
        data: f,
        index: h + a.value.start
      }));
    }
  };
}
function Ve(t, l) {
  return (e) => typeof t == "number" ? e * t : l.value.slice(0, e).reduce((n, a, c) => n + t(c), 0);
}
function Te(t, l, e, o) {
  q([t.width, t.height, l, e], () => {
    o();
  });
}
function Fe(t, l) {
  return V(() => typeof t == "number" ? l.value.length * t : l.value.reduce((e, o, n) => e + t(n), 0));
}
const ct = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Me(t, l, e, o) {
  return (n) => {
    o.value && (o.value[ct[t]] = e(n), l());
  };
}
function dt(t, l) {
  const e = _e(l), { state: o, source: n, currentList: a, size: c, containerRef: u } = e, m = { overflowX: "auto" }, { itemWidth: s, overscan: d = 5 } = t, r = Oe(o, n, s), i = Ne(n, s), f = Ae("horizontal", d, i, r, e), h = Ve(s, n), v = V(() => h(o.value.start)), C = Fe(s, n);
  Te(c, l, u, f);
  const F = Me("horizontal", f, h, u), L = V(() => ({
    style: {
      height: "100%",
      width: `${C.value - v.value}px`,
      marginLeft: `${v.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: F,
    calculateRange: f,
    wrapperProps: L,
    containerStyle: m,
    currentList: a,
    containerRef: u
  };
}
function ft(t, l) {
  const e = _e(l), { state: o, source: n, currentList: a, size: c, containerRef: u } = e, m = { overflowY: "auto" }, { itemHeight: s, overscan: d = 5 } = t, r = Oe(o, n, s), i = Ne(n, s), f = Ae("vertical", d, i, r, e), h = Ve(s, n), v = V(() => h(o.value.start)), C = Fe(s, n);
  Te(c, l, u, f);
  const F = Me("vertical", f, h, u), L = V(() => ({
    style: {
      width: "100%",
      height: `${C.value - v.value}px`,
      marginTop: `${v.value}px`
    }
  }));
  return {
    calculateRange: f,
    scrollTo: F,
    containerStyle: m,
    wrapperProps: L,
    currentList: a,
    containerRef: u
  };
}
const I = (t) => {
  let l = parseInt(t);
  return l == t ? l : t;
}, vt = (t) => {
  try {
    var l = JSON.parse(t);
    if (l && typeof l == "object")
      return l;
  } catch {
  }
  return t;
}, pt = (t, l, e) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const o = {
    defaultArray: t.value,
    get: () => t.value,
    push: (n, a, c = null) => {
      parseInt(n) == n && (n = parseInt(n));
      const u = t.map.get(n);
      if (u)
        u.value = a, u.data = c;
      else {
        let m = { value: a, key: n, data: c };
        t.value.push(m), t.map.set(m.key, m);
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
      n == null && (n = (a, c) => a.value.localeCompare(c.value)), t.value = t.value.sort(n);
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
let ht = 1;
const ze = (t) => {
  t && (t.style.display = "none", tt(t));
}, Be = (t, l, e, o) => {
  const n = w(/* @__PURE__ */ new Map());
  X(() => {
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
  }, X(() => {
    l.value && (a.value = l.value.map((s) => ({ ...s, key: I(s.key) })), a.rebuildMap());
  }), t) {
    if (n.value.clear(), t.matches("select")) {
      for (let s of Array.apply(null, t.selectedOptions).map((d) => I(d.value)).filter((d) => d != null))
        n.value.set(s, s);
      a.value = Array.apply(null, t.options).reduce((s, d) => (s.push({
        value: d.text,
        key: I(d.value),
        data: Object.keys(d.dataset).reduce((r, i) => (r[i] = vt(d.dataset[i]), r), {})
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
  let c = t == null ? void 0 : t.id;
  (c == null || c === "" || c == 0) && (c = "extraselect_" + (++ht).toString()), pt(a, n, c);
  const u = [];
  return n.value.forEach((s, d) => {
    u.push([d, s]);
  }), { options: a, selectedOptions: n, onReset: () => {
    n.value.clear();
    for (let [s, d] of u)
      n.value.set(s, d);
  } };
};
w({});
function mt(t, l = {}) {
  for (let e in l)
    t = t.replace(`:${e}`, l[e]);
  return t;
}
const ce = (t = null) => {
  var o;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let e = { ...((o = window.ExtraSelectLocalization.defaults) == null ? void 0 : o.defaultArray) ?? {} };
  Object.assign(e, t ?? {}), $e(w(e), "defaults");
}, $e = (t, l) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, ce());
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
let gt = 0;
const He = (t, l) => ($e(l, (t == null ? void 0 : t.id) ?? "extraselect_" + (++gt).toString()), { propLocalization: l, t: (o, n = {}) => {
  let a = l.value[o] ?? window.ExtraSelectLocalization.defaults.get(o);
  return a == null && (window.ExtraSelectLocalization.defaults.push(o, o), a = o), mt(a, n);
} }), pe = async function(t, l = null, e = {}) {
  const o = {
    method: "POST",
    credentials: "include",
    ...e,
    headers: { "Content-Type": "application/json", ...e.headers ?? {} },
    body: JSON.stringify({ search: l, ...e.body })
  };
  return await (await fetch(t, o)).json();
}, We = (t, l, e, o, n, a, c = "limited", u = {}) => {
  const m = w(0), s = w(!1), d = V(() => s.value || m.value > 0);
  if (l != null && l.length > 0)
    if (e) {
      const r = [];
      X((i) => {
        if (o.value.length >= n) {
          let f = !0;
          switch (c) {
            case "always":
              break;
            default:
            case "limited":
              f = !r.includes(o.value);
              break;
            case "complete":
              f = r.reduce((h, v) => h && !o.value.startsWith(v), !0);
              break;
          }
          if (f) {
            s.value = !0;
            const h = setTimeout(() => {
              r.push(o.value), m.value += 1, u.body = { ...u.body, ...a.value }, pe(l, o.value, u).then((v) => {
                t.actions.addRange(v), t.actions.sort(), m.value -= 1, s.value = !1;
              });
            }, 500);
            i(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      pe(l, null, u).then((r) => {
        t.actions.addRange(r), t.actions.sort();
      });
  return { searchingFlag: d };
}, De = (t, l, e, o = [], n = []) => {
  const a = w(""), c = w([]), u = w({}), m = { ...o.reduce((d, r) => (d[r] = !1, d), {}), ...n.reduce((d, r) => (d[r] = !0, d), {}) };
  for (let d in m) {
    let r = m[d], i = document.getElementById(d);
    u.value[d] = i == null ? void 0 : i.value, i && i.addEventListener("change", (f) => {
      u.value[d] = f.target.value, r && te(() => {
        if (l != null)
          for (let h of Array.from(l.value.keys()))
            c.value.find((v) => v.key == h) || e(h, !1);
        else c.value.find((h) => h.key == a.value) || e(a.value, !1);
      });
    });
  }
  const s = function(d, r) {
    let i = d.value;
    return Object.keys(u.value).length > 0 && (i = i.filter((f) => {
      var h;
      for (let v in u.value)
        if ((m[v] ? !0 : (u.value[v] ?? "").length > 0) && ((h = f.data) != null && h.hasOwnProperty(v))) {
          if (Array.isArray(f.data[v])) {
            if (!f.data[v].includes(u.value[v]))
              return !1;
          } else if (f.data[v] != u.value[v])
            return !1;
        }
      return !0;
    })), r.length > 0 && (i = i.filter((f) => f.value.toLowerCase().includes(r.toLowerCase()))), i;
  };
  return X(() => {
    c.value = s(t, a.value);
  }), { filterText: a, filteredOptions: c, filterValues: u };
}, Pe = (t, l, e, o, n, a, c) => {
  const u = getComputedStyle(document.querySelector("body")).font, m = function(r) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = u, f.measureText(r).width;
  }, s = V(() => {
    const r = Z(o.value).width ?? 100;
    if (c === "inherit")
      return r;
    if (c == null || c === "dynamic") {
      const i = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
      return Math.max(r, Math.max(...t.value.map((f) => m(f.value))) + 20 + i * 3);
    }
    return c;
  }), d = w({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ye(() => {
    var r = Z(o.value);
    const i = o.value.getBoundingClientRect();
    var f = Z(null);
    if (a.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(a.value).position))
      var f = Z(a.value);
    let h = -f.left + r.left;
    const v = window.document.documentElement.clientWidth;
    i.left + s.value > v && (h = v - s.value);
    const C = window.document.documentElement.clientHeight;
    let F = -f.top + r.top + r.height, L = 250;
    if (i.top + i.height + L > C) {
      let P = r.top - L;
      P > 0 && (F = P);
    }
    d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: s.value.toString() + "px",
      top: (F - f.top).toString() + "px",
      left: h.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: m };
}, yt = ["name"], wt = {
  key: 1,
  class: "extra-select selection"
}, bt = ["onClick"], kt = ["innerHTML"], xt = ["value", "disabled"], St = {
  key: 0,
  class: "input-searching"
}, Et = ["placeholder"], Ct = {
  key: 0,
  class: "allselect-clear"
}, Lt = { class: "row-input" }, _t = ["checked"], Ot = { class: "row-input" }, Nt = ["checked"], At = {
  key: 1,
  class: "no-matches"
}, Vt = { key: 2 }, Tt = ["onClick"], Ft = { class: "row-input" }, Mt = ["checked"], zt = ["value"], Bt = /* @__PURE__ */ Qe({
  name: "ExtraSelect",
  inheritAttrs: !1,
  __name: "ExtraSelect",
  props: {
    modelValue: { default: () => [] },
    originalNode: { default: null },
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
    var fe;
    const e = t, o = V(() => {
      var p;
      return ((p = e.originalNode) == null ? void 0 : p.multiple) ?? e.multiple;
    }), { options: n, selectedOptions: a, onReset: c } = Be(e.originalNode, K(e, "options"), K(e, "modelValue"), e.initialValue), { t: u } = He(e.originalNode, K(e, "localization")), m = Object.values(((fe = e.originalNode) == null ? void 0 : fe.style) ?? {});
    ze(e.originalNode);
    const s = l, d = (p, g = null) => {
      if (o.value) {
        let k = g;
        switch (k == null && (k = !a.value.has(p)), k) {
          case !0:
            a.value.set(p, p);
            break;
          case !1:
            a.value.delete(p);
            break;
        }
      } else
        a.value.clear(), g !== !1 && a.value.set(p, p), L.value = !1;
      S(Array.from(a.value.keys()));
    }, { filterText: r, filteredOptions: i, filterValues: f } = De(n, a, d, e.filterFields, e.hardFilterFields), { searchingFlag: h } = We(
      n,
      e.url,
      e.searchableUrl,
      r,
      e.minChars,
      f,
      e.fetchMode,
      e.fetchOptions
    ), v = w(), C = w(), F = w(null), L = w(!1);
    function P(p) {
      e.disabled || (L.value = p);
    }
    q(r, () => {
      var g;
      let p = (g = C.value) == null ? void 0 : g.querySelector(".scroller");
      p && (p.scrollTop = 0);
    });
    const H = w(null), j = function(p) {
      const g = G(p.target);
      g.push(p.target), !g.includes(v.value) && !g.includes(C.value) ? L.value = !1 : (p.stopImmediatePropagation(), p.preventDefault());
    };
    ae(() => {
      var p;
      if (e.dropdownContainer != null) {
        const g = e.dropdownContainer;
        let k = !1;
        H.value = G(v.value).find((_) => !!(_ instanceof Element && (_.matches(g) && (k = !0), k && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(_).position))));
      }
      if (H.value == null && (H.value = document.querySelector("body")), e.originalNode) {
        for (let k of e.originalNode.classList)
          k != "extraselect" && ((p = v.value) == null || p.classList.add(k));
        for (let k of m)
          v.value && (v.value.style[k] = e.originalNode.style[k]);
        let g = G(v.value, "form").pop();
        g instanceof HTMLElement && g.matches("form") && g.addEventListener("reset", () => setTimeout(c)), Object.assign(e.originalNode, {
          toggleValue: d,
          setValues: (k) => {
            a.value.clear();
            for (let _ of k)
              d(_);
          }
        });
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), me(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { list: oe, containerProps: se, wrapperProps: Y } = Le(
      i,
      {
        itemHeight: 32
      }
    ), { dropdownStyle: Q, getTextWidth: N } = Pe(n, a, L, v, C, H, e.maxWidth), S = (p) => {
      te(
        () => {
          var g;
          return (g = e.originalNode) == null ? void 0 : g.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), s("update:modelValue", p);
    }, A = (p) => {
      T(p, !1), r.value = "";
    }, T = (p, g = null) => {
      g == null && (g = !re.value), g ? (a.value.clear(), n.value.forEach((k) => a.value.set(k.key, k.key))) : a.value.clear(), S(Array.from(a.value.keys()));
    }, qe = () => {
      de.value ? i.value.forEach((p) => {
        a.value.has(p.key) && a.value.delete(p.key);
      }) : i.value.forEach((p) => {
        a.value.has(p.key) || a.value.set(p.key, p.key);
      }), S(Array.from(a.value.keys()));
    };
    q(L, (p, g) => {
      p != g && (p ? e.search && te(() => {
        F.value.focus({ focusVisible: !0 });
      }) : r.value = "");
    });
    const re = V(() => a.value.size == n.value.length), de = V(() => i.value.reduce((p, g) => p && a.value.has(g.key), !0)), je = V(() => a.value.size == 0), Ue = V(() => {
      var p, g, k;
      if (n.value.length < 0) return "";
      if (o.value) {
        if (je.value) return u("No selection");
        if (!e.searchableUrl && re.value) return u("All selected");
        const _ = v.value ? getComputedStyle(v.value) : null, O = ((p = v.value) == null ? void 0 : p.clientWidth) - parseInt(_ == null ? void 0 : _.paddingLeft) - parseInt(_ == null ? void 0 : _.paddingRight);
        let W = u(":n selected - ", { n: a.value.size }), J = !0;
        for (let Ge of a.value)
          if (J ? J = !1 : W += ", ", W += ((g = n.map.get(Ge[0])) == null ? void 0 : g.value) ?? (h.value ? u("Loading...") : u("Value not found")), O < N(W))
            return a.value.size + u(" selected");
        return W;
      } else
        for (let _ of a.value)
          return ((k = n.map.get(_[0])) == null ? void 0 : k.value) ?? (h.value ? u("Loading...") : u("Value not found"));
      return u("No selection");
    });
    return (p, g) => {
      var k, _;
      return b(), x(D, null, [
        o.value && y(a).size == 0 ? (b(), x("input", {
          key: 0,
          type: "hidden",
          name: (_ = (k = e.originalNode) == null ? void 0 : k.name) == null ? void 0 : _.replace("[]", ""),
          value: ""
        }, null, 8, yt)) : M("", !0),
        e.showSelected ? (b(), x("div", wt, [
          (b(!0), x(D, null, ee(y(a), (O) => {
            var W;
            return b(), x("div", {
              key: O,
              onClick: R((J) => d(O[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ve($((W = y(n).find((J) => J.key == O[0])) == null ? void 0 : W.value) + " ", 1),
              E("div", {
                class: "selection-remove",
                innerHTML: e.removeIcon
              }, null, 8, kt)
            ], 8, bt);
          }), 128))
        ])) : M("", !0),
        E("input", le({
          onFocus: g[0] || (g[0] = (O) => P(!0)),
          onClick: g[1] || (g[1] = R((O) => P(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: v,
          value: Ue.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, p.$attrs, { disabled: p.disabled }), null, 16, xt),
        H.value ? (b(), ue(ie, {
          key: 2,
          to: H.value
        }, [
          ne(E("div", {
            class: ge(["extra-select dropdown", { searching: y(h) > 0 }]),
            ref_key: "dropdownNode",
            ref: C,
            style: ye(y(Q))
          }, [
            e.search ? (b(), x("div", St, [
              ne(E("input", {
                ref_key: "searchNode",
                ref: F,
                class: "extra-select-search",
                "onUpdate:modelValue": g[2] || (g[2] = (O) => we(r) ? r.value = O : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: y(u)("Search...")
              }, null, 8, Et), [
                [Ze, y(r)]
              ])
            ])) : M("", !0),
            y(r).length >= e.minChars ? (b(), x(D, { key: 1 }, [
              o.value ? (b(), x("div", Ct, [
                y(r).length == 0 ? (b(), x("div", {
                  key: 0,
                  onClick: R(T, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", Lt, [
                    E("input", {
                      checked: re.value,
                      type: "checkbox"
                    }, null, 8, _t),
                    E("b", null, $(y(u)("Select all")), 1)
                  ])
                ])) : M("", !0),
                y(i).length > 0 && y(r).length > 0 ? (b(), x("div", {
                  key: 1,
                  onClick: R(qe, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  E("div", Ot, [
                    E("input", {
                      checked: de.value,
                      type: "checkbox"
                    }, null, 8, Nt),
                    E("b", null, $(y(u)("Select Filtered")), 1)
                  ])
                ])) : M("", !0),
                E("div", {
                  class: "clear",
                  onClick: R(A, ["stop", "prevent"])
                }, $(y(u)("Clear")), 1)
              ])) : M("", !0),
              y(i).length == 0 ? (b(), x("div", At, $(y(u)("No matches found")), 1)) : M("", !0)
            ], 64)) : (b(), x("div", Vt, $(y(u)("Insert at least :n characters", { n: e.minChars })), 1)),
            E("div", le(y(se), { class: "scroller" }), [
              E("div", be(ke(y(Y))), [
                (b(!0), x(D, null, ee(y(oe), (O) => (b(), x("button", {
                  key: O.index,
                  class: "dropdown-row",
                  onClick: R((W) => d(O.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  E("div", Ft, [
                    o.value ? (b(), x("input", {
                      key: 0,
                      checked: y(a).has(O.data.key),
                      type: "checkbox"
                    }, null, 8, Mt)) : M("", !0),
                    ve(" " + $(O.data.value), 1)
                  ])
                ], 8, Tt))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [xe, L.value]
          ])
        ], 8, ["to"])) : M("", !0),
        e.originalNode ? (b(), ue(ie, {
          key: 3,
          to: e.originalNode
        }, [
          (b(!0), x(D, null, ee(y(a), (O) => (b(), x("option", {
            key: O[0],
            selected: "selected",
            value: O[0]
          }, null, 8, zt))), 128))
        ], 8, ["to"])) : M("", !0)
      ], 64);
    };
  }
}), $t = ["disabled"], Ht = {
  key: 0,
  class: "no-matches"
}, Wt = { key: 1 }, Dt = ["onClick"], Pt = { class: "row-input" }, It = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Rt = /* @__PURE__ */ Object.assign(It, {
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
    var Y, Q;
    const e = t, { options: o } = Be(e.originalNode, K(e, "options"), w([])), { t: n } = He(e.originalNode, K(e, "localization")), a = (Y = e.originalNode) == null ? void 0 : Y.classList, c = Object.values(((Q = e.originalNode) == null ? void 0 : Q.style) ?? {});
    ze(e.originalNode);
    const u = l, m = (N, S = null) => {
      S === !1 ? s.value = "" : s.value = o.map.get(N).value, v.value = !1;
    }, { filterText: s, filteredOptions: d, filterValues: r } = De(o, null, m, e.filterFields, e.hardFilterFields), { searchingFlag: i } = We(
      o,
      e.url,
      e.searchableUrl,
      s,
      e.minChars,
      r,
      e.fetchMode,
      e.fetchOptions
    ), f = w(null), h = w(null), v = w(!1), C = w(null);
    function F(N) {
      e.disabled || (v.value = N);
    }
    q(s, () => {
      h.value.querySelector(".scroller").scrollTop = 0;
    });
    const L = function(N) {
      const S = G(N.target);
      S.push(N.target), !S.includes(f.value) && !S.includes(h.value) && (v.value = !1);
    };
    ae(() => {
      if (e.dropdownContainer) {
        let A = !1;
        C.value = G(f.value).find((T) => !!(T instanceof Element && (T.matches(e.dropdownContainer) && (A = !0), A && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(T).position))));
      }
      if (C.value == null && (C.value = document.querySelector("body")), e.originalNode) {
        for (let T of a)
          T != "extrasuggest" && f.value.classList.add(T);
        for (let T of c)
          f.value.style[T] = e.originalNode.style[T];
        s.value = e.originalNode.value;
        let A = G(f.value, "form").pop();
        A instanceof HTMLElement && A.matches("form") && A.addEventListener("reset", () => setTimeout(S)), e.originalNode.addEventListener("change", () => {
          H(!0);
        });
      }
      X(() => {
        e.modelValue != null && (s.value = e.modelValue);
      });
      const N = s.value, S = () => {
        s.value = N;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), me(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: P } = Pe(o, w([]), v, f, h, C, e.maxWidth), H = (N = !1) => {
      var S;
      e.originalNode && (N ? s.value = e.originalNode.value : (e.originalNode.value = s.value, (S = e.originalNode) == null || S.dispatchEvent(new Event("change", { bubbles: !0 })))), u("update:modelValue", s.value);
    };
    q(() => v.value, (N) => {
      N === !1 && H();
    });
    const { list: j, containerProps: oe, wrapperProps: se } = Le(
      d,
      {
        itemHeight: 32
      }
    );
    return (N, S) => (b(), x(D, null, [
      ne(E("input", le({
        onFocus: S[0] || (S[0] = (A) => F(!0)),
        onClick: S[1] || (S[1] = (A) => F(!0)),
        ref_key: "inputNode",
        ref: f,
        "onUpdate:modelValue": S[2] || (S[2] = (A) => we(s) ? s.value = A : null),
        class: "extra-select extra-select-input"
      }, N.$attrs, { disabled: t.disabled }), null, 16, $t), [
        [et, y(s)]
      ]),
      C.value ? (b(), ue(ie, {
        key: 0,
        to: C.value
      }, [
        ne(E("div", {
          class: ge(["extra-select dropdown", { searching: y(i) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: ye(y(P))
        }, [
          y(s).length >= e.minChars ? (b(), x(D, { key: 0 }, [
            y(d).length == 0 ? (b(), x("div", Ht, $(y(n)("No matches found")), 1)) : M("", !0)
          ], 64)) : (b(), x("div", Wt, $(y(n)("Insert at least :n characters", { n: e.minChars })), 1)),
          E("div", le(y(oe), { class: "scroller" }), [
            E("div", be(ke(y(se))), [
              (b(!0), x(D, null, ee(y(j), (A) => (b(), x("button", {
                key: A.index,
                class: "dropdown-row",
                onClick: R((T) => m(A.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                E("div", Pt, $(A.data.value), 1)
              ], 8, Dt))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [xe, v.value]
        ])
      ], 8, ["to"])) : M("", !0)
    ], 64));
  }
}), jt = ce, Ie = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(t) {
      Ie.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-select", () => {
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
      const o = Se(Bt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), z.remove(t, "extra-select");
      });
    });
  }
}, Re = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(t) {
      Re.bindNew(t);
    });
  },
  bindNew(t) {
    z.lock(t, "extra-suggest", () => {
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
      const o = Se(Rt, l);
      o.mount(e), t.addEventListener("remove", function() {
        o.unmount(), e.remove(), t.remove(), z.remove(t, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Ie.init(), Re.init(), ce();
});
export {
  Ie as ExtraSelect,
  Re as ExtraSuggest,
  jt as loadExtraSelectDefaultLocalization
};
