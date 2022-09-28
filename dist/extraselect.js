import { pushScopeId as he, popScopeId as pe, nextTick as G, openBlock as y, createBlock as C, withScopeId as ve, markRaw as me, shallowReactive as ye, resolveComponent as be, resolveDirective as ge, withDirectives as W, renderSlot as H, createCommentVNode as E, createVNode as q, Fragment as A, renderList as K, ref as I, computed as L, watchEffect as Q, watchPostEffect as we, onMounted as _e, onUnmounted as Se, createElementBlock as z, unref as g, toDisplayString as D, createElementVNode as _, Teleport as ne, normalizeClass as ke, normalizeStyle as ze, isRef as $e, vModelText as Oe, withCtx as xe, createTextVNode as Ie, vShow as Ve, createApp as Te } from "vue";
const V = /* @__PURE__ */ new WeakMap();
class P {
  static put(t, i, n) {
    V.has(t) || V.set(t, /* @__PURE__ */ new Map()), V.get(t).set(i, n);
  }
  static get(t, i) {
    return V.get(t).get(i);
  }
  static has(t, i) {
    return V.has(t) && V.get(t).has(i);
  }
  static remove(t, i) {
    var n = V.get(t).delete(i);
    return !V.get(t).size === 0 && V.delete(t), n;
  }
  static lock(t, i, n) {
    return P.has(t, i) ? !1 : (P.put(t, i, !0), n());
  }
}
window.__Store = V;
function Ee() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var i = e.indexOf("Trident/");
  if (i > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let R;
function J() {
  J.init || (J.init = !0, R = Ee() !== -1);
}
var B = {
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
    J(), G(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", R && this.$el.appendChild(e), e.data = "about:blank", R || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!R && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ce = /* @__PURE__ */ ve("data-v-b329ee4c");
he("data-v-b329ee4c");
const Ae = {
  class: "resize-observer",
  tabindex: "-1"
};
pe();
const Ne = /* @__PURE__ */ Ce((e, t, i, n, s, r) => (y(), C("div", Ae)));
B.render = Ne;
B.__scopeId = "data-v-b329ee4c";
B.__file = "src/components/ResizeObserver.vue";
function j(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? j = function(t) {
    return typeof t;
  } : j = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, j(e);
}
function Me(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function se(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Le(e, t, i) {
  return t && se(e.prototype, t), i && se(e, i), e;
}
function re(e) {
  return Pe(e) || Re(e) || je(e) || Fe();
}
function Pe(e) {
  if (Array.isArray(e))
    return X(e);
}
function Re(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function je(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return X(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return X(e, t);
  }
}
function X(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = new Array(t); i < t; i++)
    n[i] = e[i];
  return n;
}
function Fe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Be(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function He(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, s, r, l = function(o) {
    for (var b = arguments.length, f = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
      f[d - 1] = arguments[d];
    if (r = f, !(n && o === s)) {
      var m = i.leading;
      typeof m == "function" && (m = m(o, s)), (!n || o !== s) && m && e.apply(void 0, [o].concat(re(r))), s = o, clearTimeout(n), n = setTimeout(function() {
        e.apply(void 0, [o].concat(re(r))), n = 0;
      }, t);
    }
  };
  return l._clear = function() {
    clearTimeout(n), n = null;
  }, l;
}
function ae(e, t) {
  if (e === t)
    return !0;
  if (j(e) === "object") {
    for (var i in e)
      if (!ae(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var De = /* @__PURE__ */ function() {
  function e(t, i, n) {
    Me(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, n);
  }
  return Le(e, [{
    key: "createObserver",
    value: function(i, n) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Be(i), this.callback = function(a, o) {
          s.options.callback(a, o), a && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var r = this.options.throttleOptions || {}, l = r.leading;
          this.callback = He(this.callback, this.options.throttle, {
            leading: function(o) {
              return l === "both" || l === "visible" && o || l === "hidden" && !o;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var o = a[0];
          if (a.length > 1) {
            var b = a.find(function(d) {
              return d.isIntersecting;
            });
            b && (o = b);
          }
          if (s.callback) {
            var f = o.isIntersecting && o.intersectionRatio >= s.threshold;
            if (f === s.oldResult)
              return;
            s.oldResult = f, s.callback(f, o);
          }
        }, this.options.intersection), G(function() {
          s.observer && s.observer.observe(s.el);
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
function ue(e, t, i) {
  var n = t.value;
  if (!!n)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new De(e, n, i);
      e._vue_visibilityState = s;
    }
}
function Ue(e, t, i) {
  var n = t.value, s = t.oldValue;
  if (!ae(n, s)) {
    var r = e._vue_visibilityState;
    if (!n) {
      ce(e);
      return;
    }
    r ? r.createObserver(n, i) : ue(e, {
      value: n
    }, i);
  }
}
function ce(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var We = {
  beforeMount: ue,
  updated: Ue,
  unmounted: ce
}, qe = {
  itemsLimit: 1e3
}, Ke = /(auto|scroll)/;
function de(e, t) {
  return e.parentNode === null ? t : de(e.parentNode, t.concat([e]));
}
var U = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Je = function(t) {
  return U(t, "overflow") + U(t, "overflow-y") + U(t, "overflow-x");
}, Xe = function(t) {
  return Ke.test(Je(t));
};
function Ye(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = de(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Xe(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function F(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? F = function(t) {
    return typeof t;
  } : F = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, F(e);
}
var Ge = {
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
function Qe() {
  return this.items.length && F(this.items[0]) !== "object";
}
var Y = !1;
if (typeof window < "u") {
  Y = !1;
  try {
    var Ze = Object.defineProperty({}, "passive", {
      get: function() {
        Y = !0;
      }
    });
    window.addEventListener("test", null, Ze);
  } catch {
  }
}
let et = 0;
var Z = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: B
  },
  directives: {
    ObserveVisibility: We
  },
  props: {
    ...Ge,
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
        }, t = this.items, i = this.sizeField, n = this.minItemSize;
        let s = 1e4, r = 0, l;
        for (let a = 0, o = t.length; a < o; a++)
          l = t[a][i] || n, l < s && (s = l), r += l, e[a] = { accumulator: r, size: l };
        return this.$_computedMinItemSize = s, e;
      }
      return [];
    },
    simpleArray: Qe
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
    addView(e, t, i, n, s) {
      const r = me({
        id: et++,
        index: t,
        used: !0,
        key: n,
        type: s
      }), l = ye({
        item: i,
        position: 0,
        nr: r
      });
      return e.push(l), l;
    },
    unuseView(e, t = !1) {
      const i = this.$_unusedViews, n = e.nr.type;
      let s = i.get(n);
      s || (s = [], i.set(n, s)), s.push(e), t || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
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
      const i = this.itemSize, n = this.$_computedMinItemSize, s = this.typeField, r = this.simpleArray ? null : this.keyField, l = this.items, a = l.length, o = this.sizes, b = this.$_views, f = this.$_unusedViews, d = this.pool;
      let m, h, O;
      if (!a)
        m = h = O = 0;
      else if (this.$_prerender)
        m = 0, h = this.prerender, O = null;
      else {
        const v = this.getScroll();
        if (t) {
          let x = v.start - this.$_lastUpdateScrollPosition;
          if (x < 0 && (x = -x), i === null && x < n || x < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = v.start;
        const k = this.buffer;
        if (v.start -= k, v.end += k, i === null) {
          let x, ee = 0, te = a - 1, $ = ~~(a / 2), ie;
          do
            ie = $, x = o[$].accumulator, x < v.start ? ee = $ : $ < a - 1 && o[$ + 1].accumulator > v.start && (te = $), $ = ~~((ee + te) / 2);
          while ($ !== ie);
          for ($ < 0 && ($ = 0), m = $, O = o[a - 1].accumulator, h = $; h < a && o[h].accumulator < v.end; h++)
            ;
          h === -1 ? h = l.length - 1 : (h++, h > a && (h = a));
        } else
          m = ~~(v.start / i), h = Math.ceil(v.end / i), m < 0 && (m = 0), h > a && (h = a), O = a * i;
      }
      h - m > qe.itemsLimit && this.itemsLimitError(), this.totalSize = O;
      let u;
      const T = m <= this.$_endIndex && h >= this.$_startIndex;
      if (this.$_continuous !== T) {
        if (T) {
          b.clear(), f.clear();
          for (let v = 0, k = d.length; v < k; v++)
            u = d[v], this.unuseView(u);
        }
        this.$_continuous = T;
      } else if (T)
        for (let v = 0, k = d.length; v < k; v++)
          u = d[v], u.nr.used && (e && (u.nr.index = l.findIndex(
            (x) => r ? x[r] === u.item[r] : x === u.item
          )), (u.nr.index === -1 || u.nr.index < m || u.nr.index >= h) && this.unuseView(u));
      const w = T ? null : /* @__PURE__ */ new Map();
      let p, c, S, N;
      for (let v = m; v < h; v++) {
        p = l[v];
        const k = r ? p[r] : p;
        if (k == null)
          throw new Error(`Key is ${k} on item (keyField is '${r}')`);
        if (u = b.get(k), !i && !o[v].size) {
          u && this.unuseView(u);
          continue;
        }
        u ? (u.nr.used = !0, u.item = p) : (c = p[s], S = f.get(c), T ? S && S.length ? (u = S.pop(), u.item = p, u.nr.used = !0, u.nr.index = v, u.nr.key = k, u.nr.type = c) : u = this.addView(d, v, p, k, c) : (N = w.get(c) || 0, (!S || N >= S.length) && (u = this.addView(d, v, p, k, c), this.unuseView(u, !0), S = f.get(c)), u = S[N], u.item = p, u.nr.used = !0, u.nr.index = v, u.nr.key = k, u.nr.type = c, w.set(c, N + 1), N++), b.set(k, u)), i === null ? u.position = o[v - 1].accumulator : u.position = v * i;
      }
      return this.$_startIndex = m, this.$_endIndex = h, this.emitUpdate && this.$emit("update", m, h), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: T
      };
    },
    getListenerTarget() {
      let e = Ye(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, i = t === "vertical";
      let n;
      if (this.pageMode) {
        const s = e.getBoundingClientRect(), r = i ? s.height : s.width;
        let l = -(i ? s.top : s.left), a = i ? window.innerHeight : window.innerWidth;
        l < 0 && (a += l, l = 0), l + a > r && (a = r - l), n = {
          start: l,
          end: l + a
        };
      } else
        i ? n = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : n = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return n;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Y ? {
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
const tt = {
  key: 0,
  class: "vue-recycle-scroller__slot"
}, it = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function nt(e, t, i, n, s, r) {
  const l = be("ResizeObserver"), a = ge("observe-visibility");
  return W((y(), C("div", {
    class: ["vue-recycle-scroller", {
      ready: s.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...o) => r.handleScroll && r.handleScroll(...o))
  }, [
    e.$slots.before ? (y(), C("div", tt, [
      H(e.$slots, "before")
    ])) : E("v-if", !0),
    q("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (y(!0), C(A, null, K(s.pool, (o) => (y(), C("div", {
        key: o.nr.id,
        style: s.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${o.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: s.hoverKey === o.nr.key }],
        onMouseenter: (b) => s.hoverKey = o.nr.key,
        onMouseleave: t[1] || (t[1] = (b) => s.hoverKey = null)
      }, [
        H(e.$slots, "default", {
          item: o.item,
          index: o.nr.index,
          active: o.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (y(), C("div", it, [
      H(e.$slots, "after")
    ])) : E("v-if", !0),
    q(l, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
Z.render = nt;
Z.__file = "src/components/RecycleScroller.vue";
const M = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}, st = function(e, t) {
  t === void 0 && (t = document);
  for (var i = [], n = e.parentNode; n !== t; ) {
    var s = n;
    i.push(s), n = s.parentNode;
  }
  return i.push(t), i;
}, rt = function(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(i) {
    e.removeChild(i);
  });
}, lt = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const i = {
    defaultArray: e.value,
    get: () => e.value,
    push: (n, s, r = null) => {
      const l = e.value.find((a) => a.key == n);
      l ? (l.value = s, l.data = r) : e.value.push({ value: s, key: n, data: r });
    },
    addRange: (n) => {
      for (let s of n)
        e.actions.push(s.key, s.value, s.data);
    },
    remove: (n) => {
      e.value.splice(e.value.findIndex((s) => s.key == n), 1);
    },
    clear: () => {
      e.value = [];
    },
    sort: (n = null) => {
      n == null && (n = (s, r) => s.value.localeCompare(r.value)), e.value = e.value.sort(n);
    },
    setDefault: function(n) {
      this.defaultArray = n;
    },
    restoreDefault: function() {
      e.value = this.defaultArray;
    },
    filter: function(n) {
    }
  };
  window.ExtraSelectOptions[t] = i, e.actions = i;
};
let le = 1;
const ot = (e) => {
  e.hidden = !0, rt(e);
}, at = (e) => {
  const t = Array.apply(null, e.selectedOptions).map((s) => s.value), i = I(t.filter((s) => s)), n = I(Array.apply(null, e.options).reduce((s, r) => (s.push({ value: r.text, key: r.value, data: r.dataset }), s), []));
  return (e.id == null || e.id.length == 0) && (e.id = "extraselect_" + le.toString(), le++), lt(n, e.id), { options: n, selectedOptions: i };
}, oe = async function(e, t = null, i = {}) {
  var r;
  const n = {
    method: "POST",
    credentials: "include",
    ...i,
    headers: { "Content-Type": "application/json", ...(r = i.headers) != null ? r : {} },
    body: JSON.stringify({ search: t, ...i.body })
  };
  return await (await fetch(e, n)).json();
}, ut = (e, t, i, n, s, r = "limited", l = {}) => {
  const a = I(0), o = I(!1), b = L(() => o.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const f = [];
      Q((d) => {
        if (n.value.length >= s) {
          let m = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              m = !f.includes(n.value);
              break;
            case "complete":
              m = f.reduce((h, O) => h && !n.value.startsWith(O), !0);
              break;
          }
          if (m) {
            o.value = !0;
            const h = setTimeout(() => {
              f.push(n.value), a.value += 1, oe(t, n.value, l).then((O) => {
                e.actions.addRange(O), e.actions.sort(), a.value -= 1, o.value = !1;
              });
            }, 500);
            d(() => {
              clearTimeout(h);
            });
          }
        }
      });
    } else
      oe(t, null, l).then((f) => {
        e.actions.addRange(f), e.actions.sort();
      });
  return { searchingFlag: b };
}, ct = (e, t) => {
  const i = I(""), n = I([]), s = function(r, l) {
    return r.value.filter((o) => l.length > 0 ? o.value.toLowerCase().includes(l.toLowerCase()) : !0);
  };
  return Q(() => {
    i.value.length >= t ? n.value = s(e, i.value) : n.value = [];
  }), { filterText: i, filteredOptions: n };
}, dt = (e, t, i, n, s, r) => {
  const l = function(f, d) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = d || getComputedStyle(i).font, h.measureText(f).width;
  }, a = function() {
    var f = M(n.value), d = M(document.querySelector("body"));
    s.value.style.top = -d.top + f.top;
  }, o = L(() => {
    var d;
    const f = (d = M(n.value).width) != null ? d : 100;
    return r === "inherit" ? f : r == null || r === "dynamic" ? Math.max(f, Math.max(...e.value.map((m) => l(m.value))) + 15) : r;
  }), b = I({
    position: "absolute",
    "min-width": "max-content"
  });
  return we(() => {
    t.value.length < 0 && console.log("empty selection");
    var f = M(n.value), d = M(document.querySelector("body"));
    b.value = {
      position: "absolute",
      "min-width": "max-content",
      width: o.value.toString() + "px",
      top: (-d.top + f.top + f.height).toString() + "px",
      left: (-d.left + f.left).toString() + "px"
    };
  }), { dropdownStyle: b, placeDropdown: a };
}, ft = { key: 0 }, ht = /* @__PURE__ */ _("h2", null, "selezione:", -1), pt = ["value"], vt = { key: 0 }, mt = ["checked"], yt = /* @__PURE__ */ _("b", null, "Select all", -1), bt = /* @__PURE__ */ _("label", null, [
  /* @__PURE__ */ _("input", { type: "checkbox" }),
  /* @__PURE__ */ _("b", null, "Select Filtered")
], -1), gt = [
  bt
], wt = /* @__PURE__ */ _("label", null, [
  /* @__PURE__ */ _("input", { type: "checkbox" }),
  /* @__PURE__ */ _("b", null, "Select None")
], -1), _t = [
  wt
], St = { key: 1 }, kt = { key: 2 }, zt = ["onClick"], $t = { class: "" }, Ot = ["checked"], xt = ["value"], It = {
  __name: "ExtraSelect",
  props: {
    originalNode: { type: Object, required: !0 },
    url: String,
    keepOpen: { type: Boolean, default: !1 },
    maxWidth: { type: String, default: "dynamic" },
    search: { type: Boolean, default: !0 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    showSelected: { type: Boolean, default: !1 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} }
  },
  setup(e) {
    const t = e, i = t.originalNode.multiple, { options: n, selectedOptions: s } = at(t.originalNode);
    ot(t.originalNode);
    const { filterText: r, filteredOptions: l } = ct(n, t.minChars), { searchingFlag: a } = ut(
      n,
      t.url,
      t.searchableUrl,
      r,
      t.minChars,
      t.fetchMode,
      t.fetchOptions
    ), o = I(null), b = I(null), f = I(null), d = I(!1);
    if (!t.keepOpen) {
      const w = function(p) {
        const c = st(p.target);
        c.push(p.target), !c.includes(o.value) && !c.includes(b.value) && (d.value = !1);
      };
      _e(() => {
        window.document.addEventListener("mousedown", w), window.document.addEventListener("focusin", w);
      }), Se(() => {
        window.document.removeEventListener("mousedown", w), window.document.removeEventListener("focusin", w);
      });
    }
    const { dropdownStyle: m, placeDropdown: h } = dt(n, s, t.originalNode, o, b, t.maxWidth), O = (w, p) => {
      i ? s.value.includes(w) ? s.value.splice(s.value.indexOf(w), 1) : s.value.push(w) : (s.value = [w], d.value = !1);
    };
    Q(() => {
      d.value ? (h(), t.search && G(() => {
        f.value.focus({ focusVisible: !0 });
      })) : r.value = "";
    });
    const u = L(() => s.value.length == n.value.length);
    L(() => s.value.length == 0);
    const T = L(() => {
      const w = s.value.map((p) => {
        var c;
        return (c = n.value.find((S) => S.key == p)) == null ? void 0 : c.value;
      }).join(", ");
      return w.length > 0 ? w : "--";
    });
    return (w, p) => (y(), z(A, null, [
      t.showSelected ? (y(), z("div", ft, [
        ht,
        (y(!0), z(A, null, K(g(s), (c) => (y(), z("div", { key: c }, D(c), 1))), 128))
      ])) : E("", !0),
      _("input", {
        onFocus: p[0] || (p[0] = (c) => d.value = !0),
        onClick: p[1] || (p[1] = (c) => d.value = !0),
        ref_key: "inputNode",
        ref: o,
        value: g(T),
        class: "extra-select extra-select-input form-select",
        readonly: ""
      }, null, 40, pt),
      (y(), C(ne, { to: "body" }, [
        W(_("div", {
          class: ke(["extra-select dropdown", { searching: g(a) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: ze(g(m))
        }, [
          t.search ? (y(), z("div", vt, [
            W(_("input", {
              ref_key: "searchNode",
              ref: f,
              class: "extra-select-search form-control",
              "onUpdate:modelValue": p[2] || (p[2] = (c) => $e(r) ? r.value = c : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Oe, g(r)]
            ])
          ])) : E("", !0),
          g(r).length >= t.minChars ? (y(), z(A, { key: 1 }, [
            g(i) ? (y(), z(A, { key: 0 }, [
              g(r).length == 0 ? (y(), z("div", {
                key: 0,
                onClick: p[3] || (p[3] = (c) => s.value = g(n).map((S) => S.key))
              }, [
                _("label", null, [
                  _("input", {
                    checked: g(u),
                    type: "checkbox"
                  }, null, 8, mt),
                  yt
                ])
              ])) : E("", !0),
              g(l).length > 0 && g(r).length > 0 ? (y(), z("div", {
                key: 1,
                onClick: p[4] || (p[4] = (c) => s.value = g(l).map((S) => S.key))
              }, gt)) : E("", !0),
              _("div", {
                onClick: p[5] || (p[5] = (c) => s.value = [])
              }, _t)
            ], 64)) : E("", !0),
            g(l).length == 0 ? (y(), z("div", St, "No matches found")) : E("", !0)
          ], 64)) : (y(), z("div", kt, "Insert at least " + D(t.minChars) + " characters", 1)),
          q(g(Z), {
            items: g(l),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: xe(({ item: c }) => [
              _("div", {
                class: "dropdown-row",
                onClick: (S) => O(c.key),
                style: { height: "32px" }
              }, [
                _("label", $t, [
                  g(i) ? (y(), z("input", {
                    key: 0,
                    checked: g(s).includes(c.key),
                    type: "checkbox"
                  }, null, 8, Ot)) : E("", !0),
                  Ie(" " + D(c.value), 1)
                ])
              ], 8, zt)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ve, d.value]
        ])
      ])),
      (y(), C(ne, {
        to: t.originalNode
      }, [
        (y(!0), z(A, null, K(g(s), (c) => (y(), z("option", {
          key: c,
          selected: "selected",
          value: c
        }, null, 8, xt))), 128))
      ], 8, ["to"]))
    ], 64));
  }
};
const fe = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      fe.bindNew(e);
    });
  },
  bindNew(e) {
    P.lock(e, "extra-select", () => {
      const t = {};
      for (let s in e.dataset)
        try {
          t[s] = JSON.parse(e.dataset[s]);
        } catch {
          t[s] = e.dataset[s];
        }
      t.originalNode = e;
      const i = document.createElement("div");
      e.parentNode.insertBefore(i, e.nextSibling), i.dataset.isVue = !0;
      const n = Te(It, t);
      n.mount(i), e.addEventListener("remove", function() {
        n.unmount(), i.remove(), e.remove(), P.remove(e, "extra-select");
      });
    });
  }
};
fe.init();
export {
  fe as default
};
