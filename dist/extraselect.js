(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:flex}.vue-recycle-scroller__slot{flex:auto 0 0}.vue-recycle-scroller__item-wrapper{flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.extra-select.selection{display:flex;flex-wrap:wrap}.extra-select.selection>.selection-badge{background-color:#d3d3d3;gap:.3rem;font-size:.9rem;display:flex;margin:.5rem .2rem;padding:.1rem .5rem;border-radius:1.5rem;cursor:pointer}.extra-select.selection>.selection-badge:hover>.selection-remove{color:#333;text-shadow:1px 0 0 #333,0 -1px 0 #333,0 1px 0 #333,-1px 0 0 #333}.extra-select.dropdown{border:1px solid rgb(180,180,180);box-shadow:0 0 8px #00000013;background-color:#fff;padding-top:.5rem;padding-left:0}.extra-select.dropdown.searching{background-color:#f8f8f8}.extra-select.dropdown .extra-select-search{margin:.4rem;width:calc(100% - 1rem)}.extra-select .allselect-clear{display:flex;width:100%;justify-content:flex-end;align-items:center;border-bottom:1px solid #ced4da}.extra-select .allselect-clear .all-select{flex-grow:1;margin-right:.5rem;cursor:pointer}.extra-select .allselect-clear .all-select:hover{background-color:#eff0f0}.extra-select .allselect-clear .clear{color:#11c3c3;font-weight:700;padding:0 1rem 0 .5rem;cursor:pointer}.extra-select .allselect-clear .clear:hover{color:#0d9494;background-color:transparent!important}.extra-select .allselect-clear .row-input input{margin-right:.45rem}.extra-select .scroller{max-height:250px}.extra-select .no-matches{font-style:italic;padding-left:.5rem}.extra-select .row-input{pointer-events:none;user-select:none;white-space:nowrap;overflow-x:hidden;width:100%;text-overflow:ellipsis}.extra-select .row-input>input[type=checkbox]{pointer-events:none}.extra-select .dropdown-row{overflow-x:hidden;width:100%;display:flex;justify-content:start;align-items:center;padding:0 1rem}.extra-select .vue-recycle-scroller__item-view.hover{background-color:#eff0f0;cursor:pointer}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { pushScopeId as ce, popScopeId as de, nextTick as Q, openBlock as b, createBlock as A, withScopeId as fe, markRaw as he, shallowReactive as pe, resolveComponent as ve, resolveDirective as me, withDirectives as W, renderSlot as D, createCommentVNode as T, createVNode as K, Fragment as N, renderList as X, ref as I, watchEffect as F, computed as M, watchPostEffect as ye, onMounted as be, onUnmounted as ge, createElementBlock as S, unref as w, createTextVNode as te, toDisplayString as q, createElementVNode as k, Teleport as ie, normalizeClass as we, normalizeStyle as _e, isRef as Se, vModelText as ke, withCtx as ze, vShow as Oe } from "vue";
function $e() {
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
let R;
function Y() {
  Y.init || (Y.init = !0, R = $e() !== -1);
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
    Y(), Q(() => {
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
const xe = /* @__PURE__ */ fe("data-v-b329ee4c");
ce("data-v-b329ee4c");
const Ie = {
  class: "resize-observer",
  tabindex: "-1"
};
de();
const Ve = /* @__PURE__ */ xe((e, t, i, s, n, r) => (b(), A("div", Ie)));
B.render = Ve;
B.__scopeId = "data-v-b329ee4c";
B.__file = "src/components/ResizeObserver.vue";
function j(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? j = function(t) {
    return typeof t;
  } : j = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, j(e);
}
function Te(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ne(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function Ce(e, t, i) {
  return t && ne(e.prototype, t), i && ne(e, i), e;
}
function se(e) {
  return Ee(e) || Ae(e) || Me(e) || Le();
}
function Ee(e) {
  if (Array.isArray(e))
    return G(e);
}
function Ae(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Me(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return G(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return G(e, t);
  }
}
function G(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, s = new Array(t); i < t; i++)
    s[i] = e[i];
  return s;
}
function Le() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ne(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Fe(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, n, r, l = function(o) {
    for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
      p[g - 1] = arguments[g];
    if (r = p, !(s && o === n)) {
      var f = i.leading;
      typeof f == "function" && (f = f(o, n)), (!s || o !== n) && f && e.apply(void 0, [o].concat(se(r))), n = o, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [o].concat(se(r))), s = 0;
      }, t);
    }
  };
  return l._clear = function() {
    clearTimeout(s), s = null;
  }, l;
}
function le(e, t) {
  if (e === t)
    return !0;
  if (j(e) === "object") {
    for (var i in e)
      if (!le(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var Pe = /* @__PURE__ */ function() {
  function e(t, i, s) {
    Te(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, s);
  }
  return Ce(e, [{
    key: "createObserver",
    value: function(i, s) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Ne(i), this.callback = function(a, o) {
          n.options.callback(a, o), a && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var r = this.options.throttleOptions || {}, l = r.leading;
          this.callback = Fe(this.callback, this.options.throttle, {
            leading: function(o) {
              return l === "both" || l === "visible" && o || l === "hidden" && !o;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var o = a[0];
          if (a.length > 1) {
            var d = a.find(function(g) {
              return g.isIntersecting;
            });
            d && (o = d);
          }
          if (n.callback) {
            var p = o.isIntersecting && o.intersectionRatio >= n.threshold;
            if (p === n.oldResult)
              return;
            n.oldResult = p, n.callback(p, o);
          }
        }, this.options.intersection), Q(function() {
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
function oe(e, t, i) {
  var s = t.value;
  if (!!s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Pe(e, s, i);
      e._vue_visibilityState = n;
    }
}
function Re(e, t, i) {
  var s = t.value, n = t.oldValue;
  if (!le(s, n)) {
    var r = e._vue_visibilityState;
    if (!s) {
      ae(e);
      return;
    }
    r ? r.createObserver(s, i) : oe(e, {
      value: s
    }, i);
  }
}
function ae(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var je = {
  beforeMount: oe,
  updated: Re,
  unmounted: ae
}, He = {
  itemsLimit: 1e3
}, Be = /(auto|scroll)/;
function ue(e, t) {
  return e.parentNode === null ? t : ue(e.parentNode, t.concat([e]));
}
var U = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, De = function(t) {
  return U(t, "overflow") + U(t, "overflow-y") + U(t, "overflow-x");
}, qe = function(t) {
  return Be.test(De(t));
};
function Ue(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = ue(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (qe(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function H(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? H = function(t) {
    return typeof t;
  } : H = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, H(e);
}
var We = {
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
function Ke() {
  return this.items.length && H(this.items[0]) !== "object";
}
var J = !1;
if (typeof window < "u") {
  J = !1;
  try {
    var Xe = Object.defineProperty({}, "passive", {
      get: function() {
        J = !0;
      }
    });
    window.addEventListener("test", null, Xe);
  } catch {
  }
}
let Ye = 0;
var Z = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: B
  },
  directives: {
    ObserveVisibility: je
  },
  props: {
    ...We,
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
        let n = 1e4, r = 0, l;
        for (let a = 0, o = t.length; a < o; a++)
          l = t[a][i] || s, l < n && (n = l), r += l, e[a] = { accumulator: r, size: l };
        return this.$_computedMinItemSize = n, e;
      }
      return [];
    },
    simpleArray: Ke
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
      const r = he({
        id: Ye++,
        index: t,
        used: !0,
        key: s,
        type: n
      }), l = pe({
        item: i,
        position: 0,
        nr: r
      });
      return e.push(l), l;
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
      const i = this.itemSize, s = this.$_computedMinItemSize, n = this.typeField, r = this.simpleArray ? null : this.keyField, l = this.items, a = l.length, o = this.sizes, d = this.$_views, p = this.$_unusedViews, g = this.pool;
      let f, m, O;
      if (!a)
        f = m = O = 0;
      else if (this.$_prerender)
        f = 0, m = this.prerender, O = null;
      else {
        const v = this.getScroll();
        if (t) {
          let h = v.start - this.$_lastUpdateScrollPosition;
          if (h < 0 && (h = -h), i === null && h < s || h < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = v.start;
        const u = this.buffer;
        if (v.start -= u, v.end += u, i === null) {
          let h, y = 0, E = a - 1, _ = ~~(a / 2), ee;
          do
            ee = _, h = o[_].accumulator, h < v.start ? y = _ : _ < a - 1 && o[_ + 1].accumulator > v.start && (E = _), _ = ~~((y + E) / 2);
          while (_ !== ee);
          for (_ < 0 && (_ = 0), f = _, O = o[a - 1].accumulator, m = _; m < a && o[m].accumulator < v.end; m++)
            ;
          m === -1 ? m = l.length - 1 : (m++, m > a && (m = a));
        } else
          f = ~~(v.start / i), m = Math.ceil(v.end / i), f < 0 && (f = 0), m > a && (m = a), O = a * i;
      }
      m - f > He.itemsLimit && this.itemsLimitError(), this.totalSize = O;
      let c;
      const V = f <= this.$_endIndex && m >= this.$_startIndex;
      if (this.$_continuous !== V) {
        if (V) {
          d.clear(), p.clear();
          for (let v = 0, u = g.length; v < u; v++)
            c = g[v], this.unuseView(c);
        }
        this.$_continuous = V;
      } else if (V)
        for (let v = 0, u = g.length; v < u; v++)
          c = g[v], c.nr.used && (e && (c.nr.index = l.findIndex(
            (h) => r ? h[r] === c.item[r] : h === c.item
          )), (c.nr.index === -1 || c.nr.index < f || c.nr.index >= m) && this.unuseView(c));
      const P = V ? null : /* @__PURE__ */ new Map();
      let z, $, x, C;
      for (let v = f; v < m; v++) {
        z = l[v];
        const u = r ? z[r] : z;
        if (u == null)
          throw new Error(`Key is ${u} on item (keyField is '${r}')`);
        if (c = d.get(u), !i && !o[v].size) {
          c && this.unuseView(c);
          continue;
        }
        c ? (c.nr.used = !0, c.item = z) : ($ = z[n], x = p.get($), V ? x && x.length ? (c = x.pop(), c.item = z, c.nr.used = !0, c.nr.index = v, c.nr.key = u, c.nr.type = $) : c = this.addView(g, v, z, u, $) : (C = P.get($) || 0, (!x || C >= x.length) && (c = this.addView(g, v, z, u, $), this.unuseView(c, !0), x = p.get($)), c = x[C], c.item = z, c.nr.used = !0, c.nr.index = v, c.nr.key = u, c.nr.type = $, P.set($, C + 1), C++), d.set(u, c)), i === null ? c.position = o[v - 1].accumulator : c.position = v * i;
      }
      return this.$_startIndex = f, this.$_endIndex = m, this.emitUpdate && this.$emit("update", f, m), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: V
      };
    },
    getListenerTarget() {
      let e = Ue(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, i = t === "vertical";
      let s;
      if (this.pageMode) {
        const n = e.getBoundingClientRect(), r = i ? n.height : n.width;
        let l = -(i ? n.top : n.left), a = i ? window.innerHeight : window.innerWidth;
        l < 0 && (a += l, l = 0), l + a > r && (a = r - l), s = {
          start: l,
          end: l + a
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, J ? {
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
const Ge = {
  key: 0,
  class: "vue-recycle-scroller__slot"
}, Je = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function Qe(e, t, i, s, n, r) {
  const l = ve("ResizeObserver"), a = me("observe-visibility");
  return W((b(), A("div", {
    class: ["vue-recycle-scroller", {
      ready: n.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...o) => r.handleScroll && r.handleScroll(...o))
  }, [
    e.$slots.before ? (b(), A("div", Ge, [
      D(e.$slots, "before")
    ])) : T("v-if", !0),
    K("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (b(!0), A(N, null, X(n.pool, (o) => (b(), A("div", {
        key: o.nr.id,
        style: n.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${o.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: n.hoverKey === o.nr.key }],
        onMouseenter: (d) => n.hoverKey = o.nr.key,
        onMouseleave: t[1] || (t[1] = (d) => n.hoverKey = null)
      }, [
        D(e.$slots, "default", {
          item: o.item,
          index: o.nr.index,
          active: o.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (b(), A("div", Je, [
      D(e.$slots, "after")
    ])) : T("v-if", !0),
    K(l, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
Z.render = Qe;
Z.__file = "src/components/RecycleScroller.vue";
const L = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}, Ze = function(e, t) {
  t === void 0 && (t = document);
  for (var i = [], s = e.parentNode; s !== t; ) {
    var n = s;
    i.push(n), s = n.parentNode;
  }
  return i.push(t), i;
}, et = function(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(i) {
    e.removeChild(i);
  });
}, tt = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const i = {
    defaultArray: e.value,
    get: () => e.value,
    push: (s, n, r = null) => {
      const l = e.value.find((a) => a.key == s);
      l ? (l.value = n, l.data = r) : e.value.push({ value: n, key: s, data: r });
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
let it = 1;
const nt = (e) => {
  e && (e.hidden = !0, et(e));
}, st = (e, t, i, s) => {
  var l, a;
  const n = I([]);
  F(() => {
    n.value = i;
  });
  const r = I([]);
  return F(() => {
    r.value = t;
  }), e && (n.value = Array.apply(null, e.selectedOptions).map((o) => o.value).filter((o) => o), r.value = Array.apply(null, e.options).reduce((o, d) => (o.push({ value: d.text, key: d.value, data: d.dataset }), o), [])), tt(r, (a = (l = e == null ? void 0 : e.id) != null ? l : s) != null ? a : "extraselect_" + (++it).toString()), { options: r, selectedOptions: n };
}, re = async function(e, t = null, i = {}) {
  var r;
  const s = {
    method: "POST",
    credentials: "include",
    ...i,
    headers: { "Content-Type": "application/json", ...(r = i.headers) != null ? r : {} },
    body: JSON.stringify({ search: t, ...i.body })
  };
  return await (await fetch(e, s)).json();
}, rt = (e, t, i, s, n, r = "limited", l = {}) => {
  const a = I(0), o = I(!1), d = M(() => o.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const p = [];
      F((g) => {
        if (s.value.length >= n) {
          let f = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              f = !p.includes(s.value);
              break;
            case "complete":
              f = p.reduce((m, O) => m && !s.value.startsWith(O), !0);
              break;
          }
          if (f) {
            o.value = !0;
            const m = setTimeout(() => {
              p.push(s.value), a.value += 1, re(t, s.value, l).then((O) => {
                e.actions.addRange(O), e.actions.sort(), a.value -= 1, o.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      re(t, null, l).then((p) => {
        e.actions.addRange(p), e.actions.sort();
      });
  return { searchingFlag: d };
}, lt = (e, t) => {
  const i = I(""), s = I([]), n = function(r, l) {
    return r.value.filter((o) => l.length > 0 ? o.value.toLowerCase().includes(l.toLowerCase()) : !0);
  };
  return F(() => {
    i.value.length >= t ? s.value = n(e, i.value) : s.value = [];
  }), { filterText: i, filteredOptions: s };
}, ot = (e, t, i, s, n) => {
  const r = function(d, p) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = p, f.measureText(d).width;
  }, l = function() {
    var d = L(i.value), p = L(document.querySelector("body"));
    s.value.style.top = -p.top + d.top;
  }, a = M(() => {
    var p;
    const d = (p = L(i.value).width) != null ? p : 100;
    if (n === "inherit")
      return d;
    if (n == null || n === "dynamic") {
      const g = getComputedStyle(document.querySelector("body")).font;
      return Math.max(d, Math.max(...e.value.map((f) => r(f.value, g))) + 15);
    }
    return n;
  }), o = I({
    position: "absolute",
    "min-width": "max-content"
  });
  return ye(() => {
    t.value.length < 0 && console.log("empty selection");
    var d = L(i.value), p = L(document.querySelector("body"));
    o.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + d.top + d.height).toString() + "px",
      left: (-p.left + d.left).toString() + "px"
    };
  }), { dropdownStyle: o, placeDropdown: l };
}, at = {
  key: 0,
  class: "extra-select selection"
}, ut = ["onClick"], ct = ["innerHTML"], dt = ["value"], ft = {
  key: 0,
  class: "input-searching"
}, ht = {
  key: 0,
  class: "allselect-clear"
}, pt = { class: "row-input" }, vt = ["checked"], mt = /* @__PURE__ */ k("b", null, "Select all", -1), yt = { class: "row-input" }, bt = ["checked"], gt = /* @__PURE__ */ k("b", null, "Select Filtered", -1), wt = {
  key: 1,
  class: "no-matches"
}, _t = { key: 2 }, St = ["onClick"], kt = { class: "row-input" }, zt = ["checked"], Ot = ["value"], xt = {
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
    const i = e, s = M(() => {
      var u, h;
      return (h = (u = i.originalNode) == null ? void 0 : u.multiple) != null ? h : i.multiple;
    }), { options: n, selectedOptions: r } = st(i.originalNode, i.options, i.modelValue);
    nt(i.originalNode);
    const { filterText: l, filteredOptions: a } = lt(n, i.minChars), { searchingFlag: o } = rt(
      n,
      i.url,
      i.searchableUrl,
      l,
      i.minChars,
      i.fetchMode,
      i.fetchOptions
    ), d = I(null), p = I(null), g = I(null), f = I(!1), m = function(u) {
      const h = Ze(u.target);
      h.push(u.target), !h.includes(d.value) && !h.includes(p.value) && (f.value = !1);
    };
    be(() => {
      window.document.addEventListener("mousedown", m), window.document.addEventListener("focusin", m);
    }), ge(() => {
      window.document.removeEventListener("mousedown", m), window.document.removeEventListener("focusin", m);
    });
    const { dropdownStyle: O, placeDropdown: c } = ot(n, r, d, p, i.maxWidth), V = (u) => {
      s.value ? r.value.includes(u) ? r.value.splice(r.value.indexOf(u), 1) : r.value.push(u) : (r.value = [u], f.value = !1), t("update:modelValue", r.value);
    }, P = (u) => {
      z(u, !1), l.value = "";
    }, z = (u, h = null) => {
      h == null && (h = !x.value), h ? r.value = n.value.map((y) => y.key) : r.value = [], t("update:modelValue", r.value);
    }, $ = () => {
      C.value ? a.value.forEach((u) => {
        r.value.includes(u.key) && r.value.splice(r.value.indexOf(u.key), 1);
      }) : a.value.forEach((u) => {
        r.value.includes(u.key) || r.value.push(u.key);
      }), t("update:modelValue", r.value);
    };
    F(() => {
      f.value ? (c(), i.search && Q(() => {
        g.value.focus({ focusVisible: !0 });
      })) : l.value = "";
    });
    const x = M(() => r.value.length == n.value.length), C = M(() => a.value.reduce((u, h) => u && r.value.includes(h.key), !0));
    M(() => r.value.length == 0);
    const v = M(() => {
      const u = r.value.map((h) => {
        var y;
        return (y = n.value.find((E) => E.key == h)) == null ? void 0 : y.value;
      }).join(", ");
      return u.length > 0 ? u : "--";
    });
    return (u, h) => (b(), S(N, null, [
      i.showSelected ? (b(), S("div", at, [
        (b(!0), S(N, null, X(w(r), (y) => {
          var E;
          return b(), S("div", {
            key: y,
            onClick: (_) => V(y),
            class: "selection-badge"
          }, [
            te(q((E = w(n).find((_) => _.key == y)) == null ? void 0 : E.value) + " ", 1),
            k("div", {
              class: "selection-remove",
              innerHTML: i.removeIcon
            }, null, 8, ct)
          ], 8, ut);
        }), 128))
      ])) : T("", !0),
      k("input", {
        onFocus: h[0] || (h[0] = (y) => f.value = !0),
        onClick: h[1] || (h[1] = (y) => f.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: w(v),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, dt),
      (b(), A(ie, { to: "body" }, [
        W(k("div", {
          class: we(["extra-select dropdown", { searching: w(o) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: _e(w(O))
        }, [
          i.search ? (b(), S("div", ft, [
            W(k("input", {
              ref_key: "searchNode",
              ref: g,
              class: "extra-select-search",
              "onUpdate:modelValue": h[2] || (h[2] = (y) => Se(l) ? l.value = y : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [ke, w(l)]
            ])
          ])) : T("", !0),
          w(l).length >= i.minChars ? (b(), S(N, { key: 1 }, [
            w(s) ? (b(), S("div", ht, [
              w(l).length == 0 ? (b(), S("div", {
                key: 0,
                onClick: z,
                class: "all-select"
              }, [
                k("div", pt, [
                  k("input", {
                    checked: w(x),
                    type: "checkbox"
                  }, null, 8, vt),
                  mt
                ])
              ])) : T("", !0),
              w(a).length > 0 && w(l).length > 0 ? (b(), S("div", {
                key: 1,
                onClick: $,
                class: "all-select"
              }, [
                k("div", yt, [
                  k("input", {
                    checked: w(C),
                    type: "checkbox"
                  }, null, 8, bt),
                  gt
                ])
              ])) : T("", !0),
              k("div", {
                class: "clear",
                onClick: P
              }, "Clear")
            ])) : T("", !0),
            w(a).length == 0 ? (b(), S("div", wt, "No matches found")) : T("", !0)
          ], 64)) : (b(), S("div", _t, "Insert at least " + q(i.minChars) + " characters", 1)),
          K(w(Z), {
            items: w(a),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: ze(({ item: y }) => [
              k("div", {
                class: "dropdown-row",
                onClick: (E) => V(y.key),
                style: { height: "32px" }
              }, [
                k("div", kt, [
                  w(s) ? (b(), S("input", {
                    key: 0,
                    checked: w(r).includes(y.key),
                    type: "checkbox"
                  }, null, 8, zt)) : T("", !0),
                  te(" " + q(y.value), 1)
                ])
              ], 8, St)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Oe, f.value]
        ])
      ])),
      i.originalNode ? (b(), A(ie, {
        key: 1,
        to: i.originalNode
      }, [
        (b(!0), S(N, null, X(w(r), (y) => (b(), S("option", {
          key: y,
          selected: "selected",
          value: y
        }, null, 8, Ot))), 128))
      ], 8, ["to"])) : T("", !0)
    ], 64));
  }
};
export {
  xt as default
};
