(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { pushScopeId as ye, popScopeId as ge, nextTick as ne, openBlock as y, createBlock as L, withScopeId as be, markRaw as we, shallowReactive as _e, resolveComponent as Se, resolveDirective as ke, withDirectives as Q, renderSlot as J, createCommentVNode as E, createVNode as Z, Fragment as H, renderList as ee, ref as C, watchEffect as B, computed as M, watchPostEffect as xe, onMounted as ze, onUnmounted as Oe, createElementBlock as x, unref as w, createTextVNode as oe, toDisplayString as Y, createElementVNode as O, Teleport as ae, normalizeClass as $e, normalizeStyle as Ie, isRef as Ve, vModelText as Ce, withCtx as Te, vShow as Ee, createApp as Ae } from "vue";
const T = /* @__PURE__ */ new WeakMap();
class D {
  static put(t, i, s) {
    T.has(t) || T.set(t, /* @__PURE__ */ new Map()), T.get(t).set(i, s);
  }
  static get(t, i) {
    return T.get(t).get(i);
  }
  static has(t, i) {
    return T.has(t) && T.get(t).has(i);
  }
  static remove(t, i) {
    var s = T.get(t).delete(i);
    return !T.get(t).size === 0 && T.delete(t), s;
  }
  static lock(t, i, s) {
    return D.has(t, i) ? !1 : (D.put(t, i, !0), s());
  }
}
window.__Store = T;
function Le() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var s = e.indexOf("rv:");
    return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let U;
function te() {
  te.init || (te.init = !0, U = Le() !== -1);
}
var X = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    te(), ne(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", U && this.$el.appendChild(e), e.data = "about:blank", U || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!U && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ne = /* @__PURE__ */ be("data-v-b329ee4c");
ye("data-v-b329ee4c");
const Me = {
  class: "resize-observer",
  tabindex: "-1"
};
ge();
const Fe = /* @__PURE__ */ Ne((e, t, i, s, n, r) => (y(), L("div", Me)));
X.render = Fe;
X.__scopeId = "data-v-b329ee4c";
X.__file = "src/components/ResizeObserver.vue";
function W(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? W = function(t) {
    return typeof t;
  } : W = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, W(e);
}
function Pe(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ue(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function je(e, t, i) {
  return t && ue(e.prototype, t), i && ue(e, i), e;
}
function ce(e) {
  return Re(e) || He(e) || Be(e) || De();
}
function Re(e) {
  if (Array.isArray(e))
    return ie(e);
}
function He(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Be(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ie(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return ie(e, t);
  }
}
function ie(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, s = new Array(t); i < t; i++)
    s[i] = e[i];
  return s;
}
function De() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qe(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Ue(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, n, r, o = function(l) {
    for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), m = 1; m < c; m++)
      p[m - 1] = arguments[m];
    if (r = p, !(s && l === n)) {
      var h = i.leading;
      typeof h == "function" && (h = h(l, n)), (!s || l !== n) && h && e.apply(void 0, [l].concat(ce(r))), n = l, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [l].concat(ce(r))), s = 0;
      }, t);
    }
  };
  return o._clear = function() {
    clearTimeout(s), s = null;
  }, o;
}
function fe(e, t) {
  if (e === t)
    return !0;
  if (W(e) === "object") {
    for (var i in e)
      if (!fe(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var We = /* @__PURE__ */ function() {
  function e(t, i, s) {
    Pe(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, s);
  }
  return je(e, [{
    key: "createObserver",
    value: function(i, s) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = qe(i), this.callback = function(a, l) {
          n.options.callback(a, l), a && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var r = this.options.throttleOptions || {}, o = r.leading;
          this.callback = Ue(this.callback, this.options.throttle, {
            leading: function(l) {
              return o === "both" || o === "visible" && l || o === "hidden" && !l;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var l = a[0];
          if (a.length > 1) {
            var c = a.find(function(m) {
              return m.isIntersecting;
            });
            c && (l = c);
          }
          if (n.callback) {
            var p = l.isIntersecting && l.intersectionRatio >= n.threshold;
            if (p === n.oldResult)
              return;
            n.oldResult = p, n.callback(p, l);
          }
        }, this.options.intersection), ne(function() {
          n.observer && n.observer.observe(n.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
}();
function he(e, t, i) {
  var s = t.value;
  if (!!s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new We(e, s, i);
      e._vue_visibilityState = n;
    }
}
function Ke(e, t, i) {
  var s = t.value, n = t.oldValue;
  if (!fe(s, n)) {
    var r = e._vue_visibilityState;
    if (!s) {
      pe(e);
      return;
    }
    r ? r.createObserver(s, i) : he(e, {
      value: s
    }, i);
  }
}
function pe(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Xe = {
  beforeMount: he,
  updated: Ke,
  unmounted: pe
}, Je = {
  itemsLimit: 1e3
}, Ye = /(auto|scroll)/;
function ve(e, t) {
  return e.parentNode === null ? t : ve(e.parentNode, t.concat([e]));
}
var G = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Ge = function(t) {
  return G(t, "overflow") + G(t, "overflow-y") + G(t, "overflow-x");
}, Qe = function(t) {
  return Ye.test(Ge(t));
};
function Ze(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = ve(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Qe(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function K(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? K = function(t) {
    return typeof t;
  } : K = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, K(e);
}
var et = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
  }
};
function tt() {
  return this.items.length && K(this.items[0]) !== "object";
}
var se = !1;
if (typeof window < "u") {
  se = !1;
  try {
    var it = Object.defineProperty({}, "passive", {
      get: function() {
        se = !0;
      }
    });
    window.addEventListener("test", null, it);
  } catch {
  }
}
let st = 0;
var re = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: X
  },
  directives: {
    ObserveVisibility: Xe
  },
  props: {
    ...et,
    itemSize: {
      type: Number,
      default: null
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, i = this.sizeField, s = this.minItemSize;
        let n = 1e4, r = 0, o;
        for (let a = 0, l = t.length; a < l; a++)
          o = t[a][i] || s, o < n && (n = o), r += o, e[a] = { accumulator: r, size: o };
        return this.$_computedMinItemSize = n, e;
      }
      return [];
    },
    simpleArray: tt
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1));
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, i, s, n) {
      const r = we({
        id: st++,
        index: t,
        used: !0,
        key: s,
        type: n
      }), o = _e({
        item: i,
        position: 0,
        nr: r
      });
      return e.push(o), o;
    },
    unuseView(e, t = !1) {
      const i = this.$_unusedViews, s = e.nr.type;
      let n = i.get(s);
      n || (n = [], i.set(s, n)), n.push(e), t || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(() => {
        this.$_scrollDirty = !1;
        const { continuous: t } = this.updateVisibleItems(!1, !0);
        t || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, 100));
      }));
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const i = this.itemSize, s = this.$_computedMinItemSize, n = this.typeField, r = this.simpleArray ? null : this.keyField, o = this.items, a = o.length, l = this.sizes, c = this.$_views, p = this.$_unusedViews, m = this.pool;
      let h, v, S;
      if (!a)
        h = v = S = 0;
      else if (this.$_prerender)
        h = 0, v = this.prerender, S = null;
      else {
        const f = this.getScroll();
        if (t) {
          let z = f.start - this.$_lastUpdateScrollPosition;
          if (z < 0 && (z = -z), i === null && z < s || z < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = f.start;
        const _ = this.buffer;
        if (f.start -= _, f.end += _, i === null) {
          let z, F = 0, P = a - 1, k = ~~(a / 2), d;
          do
            d = k, z = l[k].accumulator, z < f.start ? F = k : k < a - 1 && l[k + 1].accumulator > f.start && (P = k), k = ~~((F + P) / 2);
          while (k !== d);
          for (k < 0 && (k = 0), h = k, S = l[a - 1].accumulator, v = k; v < a && l[v].accumulator < f.end; v++)
            ;
          v === -1 ? v = o.length - 1 : (v++, v > a && (v = a));
        } else
          h = ~~(f.start / i), v = Math.ceil(f.end / i), h < 0 && (h = 0), v > a && (v = a), S = a * i;
      }
      v - h > Je.itemsLimit && this.itemsLimitError(), this.totalSize = S;
      let u;
      const A = h <= this.$_endIndex && v >= this.$_startIndex;
      if (this.$_continuous !== A) {
        if (A) {
          c.clear(), p.clear();
          for (let f = 0, _ = m.length; f < _; f++)
            u = m[f], this.unuseView(u);
        }
        this.$_continuous = A;
      } else if (A)
        for (let f = 0, _ = m.length; f < _; f++)
          u = m[f], u.nr.used && (e && (u.nr.index = o.findIndex(
            (z) => r ? z[r] === u.item[r] : z === u.item
          )), (u.nr.index === -1 || u.nr.index < h || u.nr.index >= v) && this.unuseView(u));
      const q = A ? null : /* @__PURE__ */ new Map();
      let $, I, V, N;
      for (let f = h; f < v; f++) {
        $ = o[f];
        const _ = r ? $[r] : $;
        if (_ == null)
          throw new Error(`Key is ${_} on item (keyField is '${r}')`);
        if (u = c.get(_), !i && !l[f].size) {
          u && this.unuseView(u);
          continue;
        }
        u ? (u.nr.used = !0, u.item = $) : (I = $[n], V = p.get(I), A ? V && V.length ? (u = V.pop(), u.item = $, u.nr.used = !0, u.nr.index = f, u.nr.key = _, u.nr.type = I) : u = this.addView(m, f, $, _, I) : (N = q.get(I) || 0, (!V || N >= V.length) && (u = this.addView(m, f, $, _, I), this.unuseView(u, !0), V = p.get(I)), u = V[N], u.item = $, u.nr.used = !0, u.nr.index = f, u.nr.key = _, u.nr.type = I, q.set(I, N + 1), N++), c.set(_, u)), i === null ? u.position = l[f - 1].accumulator : u.position = f * i;
      }
      return this.$_startIndex = h, this.$_endIndex = v, this.emitUpdate && this.$emit("update", h, v), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: A
      };
    },
    getListenerTarget() {
      let e = Ze(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, i = t === "vertical";
      let s;
      if (this.pageMode) {
        const n = e.getBoundingClientRect(), r = i ? n.height : n.width;
        let o = -(i ? n.top : n.left), a = i ? window.innerHeight : window.innerWidth;
        o < 0 && (a += o, o = 0), o + a > r && (a = r - o), s = {
          start: o,
          end: o + a
        };
      } else
        i ? s = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : s = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return s;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, se ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      !this.listenerTarget || (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = e * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      this.direction === "vertical" ? this.$el.scrollTop = e : this.$el.scrollLeft = e;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.index - t.index);
    }
  }
};
const nt = {
  key: 0,
  class: "vue-recycle-scroller__slot"
}, rt = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function lt(e, t, i, s, n, r) {
  const o = Se("ResizeObserver"), a = ke("observe-visibility");
  return Q((y(), L("div", {
    class: ["vue-recycle-scroller", {
      ready: n.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...l) => r.handleScroll && r.handleScroll(...l))
  }, [
    e.$slots.before ? (y(), L("div", nt, [
      J(e.$slots, "before")
    ])) : E("v-if", !0),
    Z("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (y(!0), L(H, null, ee(n.pool, (l) => (y(), L("div", {
        key: l.nr.id,
        style: n.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${l.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: n.hoverKey === l.nr.key }],
        onMouseenter: (c) => n.hoverKey = l.nr.key,
        onMouseleave: t[1] || (t[1] = (c) => n.hoverKey = null)
      }, [
        J(e.$slots, "default", {
          item: l.item,
          index: l.nr.index,
          active: l.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (y(), L("div", rt, [
      J(e.$slots, "after")
    ])) : E("v-if", !0),
    Z(o, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
re.render = lt;
re.__file = "src/components/RecycleScroller.vue";
const R = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}, ot = function(e, t) {
  t === void 0 && (t = document);
  for (var i = [], s = e.parentNode; s !== t; ) {
    var n = s;
    i.push(n), s = n.parentNode;
  }
  return i.push(t), i;
}, at = function(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(i) {
    e.removeChild(i);
  });
}, ut = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const i = {
    defaultArray: e.value,
    get: () => e.value,
    push: (s, n, r = null) => {
      const o = e.value.find((a) => a.key == s);
      o ? (o.value = n, o.data = r) : e.value.push({ value: n, key: s, data: r });
    },
    addRange: (s) => {
      for (let n of s)
        e.actions.push(n.key, n.value, n.data);
    },
    remove: (s) => {
      e.value.splice(e.value.findIndex((n) => n.key == s), 1);
    },
    clear: () => {
      e.value = [];
    },
    sort: (s = null) => {
      s == null && (s = (n, r) => n.value.localeCompare(r.value)), e.value = e.value.sort(s);
    },
    setDefault: function(s) {
      this.defaultArray = s;
    },
    restoreDefault: function() {
      e.value = this.defaultArray;
    },
    filter: function(s) {
    }
  };
  window.ExtraSelectOptions[t] = i, e.actions = i;
};
let ct = 1;
const dt = (e) => {
  e && (e.style.display = "none", at(e));
}, ft = (e, t, i, s) => {
  var o, a;
  const n = C([]);
  B(() => {
    n.value = i;
  });
  const r = C([]);
  return B(() => {
    r.value = t;
  }), e && (n.value = Array.apply(null, e.selectedOptions).map((l) => l.value).filter((l) => l), r.value = Array.apply(null, e.options).reduce((l, c) => (l.push({ value: c.text, key: c.value, data: c.dataset }), l), [])), ut(r, (a = (o = e == null ? void 0 : e.id) != null ? o : s) != null ? a : "extraselect_" + (++ct).toString()), { options: r, selectedOptions: n };
}, de = async function(e, t = null, i = {}) {
  var r;
  const s = {
    method: "POST",
    credentials: "include",
    ...i,
    headers: { "Content-Type": "application/json", ...(r = i.headers) != null ? r : {} },
    body: JSON.stringify({ search: t, ...i.body })
  };
  return await (await fetch(e, s)).json();
}, ht = (e, t, i, s, n, r = "limited", o = {}) => {
  const a = C(0), l = C(!1), c = M(() => l.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const p = [];
      B((m) => {
        if (s.value.length >= n) {
          let h = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              h = !p.includes(s.value);
              break;
            case "complete":
              h = p.reduce((v, S) => v && !s.value.startsWith(S), !0);
              break;
          }
          if (h) {
            l.value = !0;
            const v = setTimeout(() => {
              p.push(s.value), a.value += 1, de(t, s.value, o).then((S) => {
                e.actions.addRange(S), e.actions.sort(), a.value -= 1, l.value = !1;
              });
            }, 500);
            m(() => {
              clearTimeout(v);
            });
          }
        }
      });
    } else
      de(t, null, o).then((p) => {
        e.actions.addRange(p), e.actions.sort();
      });
  return { searchingFlag: c };
}, pt = (e, t) => {
  const i = C(""), s = C([]), n = function(r, o) {
    return r.value.filter((l) => o.length > 0 ? l.value.toLowerCase().includes(o.toLowerCase()) : !0);
  };
  return B(() => {
    i.value.length >= t ? s.value = n(e, i.value) : s.value = [];
  }), { filterText: i, filteredOptions: s };
}, vt = (e, t, i, s, n) => {
  const r = function(c, p) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = p, h.measureText(c).width;
  }, o = function() {
    var c = R(i.value), p = R(document.querySelector("body"));
    s.value.style.top = -p.top + c.top;
  }, a = M(() => {
    var p;
    const c = (p = R(i.value).width) != null ? p : 100;
    if (n === "inherit")
      return c;
    if (n == null || n === "dynamic") {
      const m = getComputedStyle(document.querySelector("body")).font;
      return Math.max(c, Math.max(...e.value.map((h) => r(h.value, m))) + 15);
    }
    return n;
  }), l = C({
    position: "absolute",
    "min-width": "max-content"
  });
  return xe(() => {
    t.value.length < 0 && console.log("empty selection");
    var c = R(i.value), p = R(document.querySelector("body"));
    l.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + c.top + c.height).toString() + "px",
      left: (-p.left + c.left).toString() + "px"
    };
  }), { dropdownStyle: l, placeDropdown: o };
}, mt = {
  key: 0,
  class: "extra-select selection"
}, yt = ["onClick"], gt = ["innerHTML"], bt = ["value"], wt = {
  key: 0,
  class: "input-searching"
}, _t = {
  key: 0,
  class: "allselect-clear"
}, St = { class: "row-input" }, kt = ["checked"], xt = /* @__PURE__ */ O("b", null, "Select all", -1), zt = { class: "row-input" }, Ot = ["checked"], $t = /* @__PURE__ */ O("b", null, "Select Filtered", -1), It = {
  key: 1,
  class: "no-matches"
}, Vt = { key: 2 }, Ct = ["onClick"], Tt = { class: "row-input" }, Et = ["checked"], At = ["value"], Lt = {
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
    removeIcon: { type: String, default: "X" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var F, P, k;
    const i = e, s = M(() => {
      var d, g;
      return (g = (d = i.originalNode) == null ? void 0 : d.multiple) != null ? g : i.multiple;
    }), { options: n, selectedOptions: r } = ft(i.originalNode, i.options, i.modelValue), o = (F = i.originalNode) == null ? void 0 : F.classList, a = Object.values((k = (P = i.originalNode) == null ? void 0 : P.style) != null ? k : {});
    dt(i.originalNode);
    const { filterText: l, filteredOptions: c } = pt(n, i.minChars), { searchingFlag: p } = ht(
      n,
      i.url,
      i.searchableUrl,
      l,
      i.minChars,
      i.fetchMode,
      i.fetchOptions
    ), m = C(null), h = C(null), v = C(null), S = C(!1), u = function(d) {
      const g = ot(d.target);
      g.push(d.target), !g.includes(m.value) && !g.includes(h.value) && (S.value = !1);
    };
    ze(() => {
      if (i.originalNode) {
        for (let d of o)
          d != "extraselect" && m.value.classList.add(d);
        for (let d of a)
          m.value.style[d] = i.originalNode.style[d];
        a.includes("background-color") || (m.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", u), window.document.addEventListener("focusin", u);
    }), Oe(() => {
      window.document.removeEventListener("mousedown", u), window.document.removeEventListener("focusin", u);
    });
    const { dropdownStyle: A, placeDropdown: q } = vt(n, r, m, h, i.maxWidth), $ = (d) => {
      s.value ? r.value.includes(d) ? r.value.splice(r.value.indexOf(d), 1) : r.value.push(d) : (r.value = [d], S.value = !1), t("update:modelValue", r.value);
    }, I = (d) => {
      V(d, !1), l.value = "";
    }, V = (d, g = null) => {
      g == null && (g = !f.value), g ? r.value = n.value.map((b) => b.key) : r.value = [], t("update:modelValue", r.value);
    }, N = () => {
      _.value ? c.value.forEach((d) => {
        r.value.includes(d.key) && r.value.splice(r.value.indexOf(d.key), 1);
      }) : c.value.forEach((d) => {
        r.value.includes(d.key) || r.value.push(d.key);
      }), t("update:modelValue", r.value);
    };
    B(() => {
      S.value ? (q(), i.search && ne(() => {
        v.value.focus({ focusVisible: !0 });
      })) : l.value = "";
    });
    const f = M(() => r.value.length == n.value.length), _ = M(() => c.value.reduce((d, g) => d && r.value.includes(g.key), !0));
    M(() => r.value.length == 0);
    const z = M(() => {
      const d = r.value.map((g) => {
        var b;
        return (b = n.value.find((j) => j.key == g)) == null ? void 0 : b.value;
      }).join(", ");
      return d.length > 0 ? d : "--";
    });
    return (d, g) => (y(), x(H, null, [
      i.showSelected ? (y(), x("div", mt, [
        (y(!0), x(H, null, ee(w(r), (b) => {
          var j;
          return y(), x("div", {
            key: b,
            onClick: (le) => $(b),
            class: "selection-badge"
          }, [
            oe(Y((j = w(n).find((le) => le.key == b)) == null ? void 0 : j.value) + " ", 1),
            O("div", {
              class: "selection-remove",
              innerHTML: i.removeIcon
            }, null, 8, gt)
          ], 8, yt);
        }), 128))
      ])) : E("", !0),
      O("input", {
        onFocus: g[0] || (g[0] = (b) => S.value = !0),
        onClick: g[1] || (g[1] = (b) => S.value = !0),
        ref_key: "inputNode",
        ref: m,
        value: w(z),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, bt),
      (y(), L(ae, { to: "body" }, [
        Q(O("div", {
          class: $e(["extra-select dropdown", { searching: w(p) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: Ie(w(A))
        }, [
          i.search ? (y(), x("div", wt, [
            Q(O("input", {
              ref_key: "searchNode",
              ref: v,
              class: "extra-select-search",
              "onUpdate:modelValue": g[2] || (g[2] = (b) => Ve(l) ? l.value = b : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ce, w(l)]
            ])
          ])) : E("", !0),
          w(l).length >= i.minChars ? (y(), x(H, { key: 1 }, [
            w(s) ? (y(), x("div", _t, [
              w(l).length == 0 ? (y(), x("div", {
                key: 0,
                onClick: V,
                class: "all-select"
              }, [
                O("div", St, [
                  O("input", {
                    checked: w(f),
                    type: "checkbox"
                  }, null, 8, kt),
                  xt
                ])
              ])) : E("", !0),
              w(c).length > 0 && w(l).length > 0 ? (y(), x("div", {
                key: 1,
                onClick: N,
                class: "all-select"
              }, [
                O("div", zt, [
                  O("input", {
                    checked: w(_),
                    type: "checkbox"
                  }, null, 8, Ot),
                  $t
                ])
              ])) : E("", !0),
              O("div", {
                class: "clear",
                onClick: I
              }, "Clear")
            ])) : E("", !0),
            w(c).length == 0 ? (y(), x("div", It, "No matches found")) : E("", !0)
          ], 64)) : (y(), x("div", Vt, "Insert at least " + Y(i.minChars) + " characters", 1)),
          Z(w(re), {
            items: w(c),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: Te(({ item: b }) => [
              O("div", {
                class: "dropdown-row",
                onClick: (j) => $(b.key),
                style: { height: "32px" }
              }, [
                O("div", Tt, [
                  w(s) ? (y(), x("input", {
                    key: 0,
                    checked: w(r).includes(b.key),
                    type: "checkbox"
                  }, null, 8, Et)) : E("", !0),
                  oe(" " + Y(b.value), 1)
                ])
              ], 8, Ct)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ee, S.value]
        ])
      ])),
      i.originalNode ? (y(), L(ae, {
        key: 1,
        to: i.originalNode
      }, [
        (y(!0), x(H, null, ee(w(r), (b) => (y(), x("option", {
          key: b,
          selected: "selected",
          value: b
        }, null, 8, At))), 128))
      ], 8, ["to"])) : E("", !0)
    ], 64));
  }
}, me = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      me.bindNew(e);
    });
  },
  bindNew(e) {
    D.lock(e, "extra-select", () => {
      const t = {};
      for (let n in e.dataset)
        try {
          t[n] = JSON.parse(e.dataset[n]);
        } catch {
          t[n] = e.dataset[n];
        }
      t.originalNode = e;
      const i = document.createElement("div");
      e.parentNode.insertBefore(i, e.nextSibling), i.dataset.isVue = !0;
      const s = Ae(Lt, t);
      s.mount(i), e.addEventListener("remove", function() {
        s.unmount(), i.remove(), e.remove(), D.remove(e, "extra-select");
      });
    });
  }
};
me.init();
export {
  me as default
};
