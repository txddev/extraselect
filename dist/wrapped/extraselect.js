(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:flex}.vue-recycle-scroller__slot{flex:auto 0 0}.vue-recycle-scroller__item-wrapper{flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.extra-select.selection{display:flex;flex-wrap:wrap}.extra-select.selection>.selection-badge{background-color:#d3d3d3;gap:.3rem;font-size:.9rem;display:flex;margin:.5rem .2rem;padding:.1rem .5rem;border-radius:1.5rem;cursor:pointer}.extra-select.selection>.selection-badge:hover>.selection-remove{color:#333;text-shadow:1px 0 0 #333,0 -1px 0 #333,0 1px 0 #333,-1px 0 0 #333}.extra-select.dropdown{border:1px solid rgb(180,180,180);box-shadow:0 0 8px #00000013;background-color:#fff;padding-top:.5rem;padding-left:0}.extra-select.dropdown.searching{background-color:#f8f8f8}.extra-select.dropdown .extra-select-search{margin:.4rem;width:calc(100% - 1rem)}.extra-select .allselect-clear{display:flex;width:100%;justify-content:flex-end;align-items:center;border-bottom:1px solid #ced4da}.extra-select .allselect-clear .all-select{flex-grow:1;margin-right:.5rem;cursor:pointer}.extra-select .allselect-clear .all-select:hover{background-color:#eff0f0}.extra-select .allselect-clear .clear{color:#11c3c3;font-weight:700;padding:0 1rem 0 .5rem;cursor:pointer}.extra-select .allselect-clear .clear:hover{color:#0d9494;background-color:transparent!important}.extra-select .allselect-clear .row-input input{margin-right:.45rem}.extra-select .scroller{max-height:250px}.extra-select .no-matches{font-style:italic;padding-left:.5rem}.extra-select .row-input{pointer-events:none;user-select:none;white-space:nowrap;overflow-x:hidden;width:100%;text-overflow:ellipsis}.extra-select .row-input>input[type=checkbox]{pointer-events:none}.extra-select .dropdown-row{overflow-x:hidden;width:100%;display:flex;justify-content:start;align-items:center;padding:0 1rem}.extra-select .vue-recycle-scroller__item-view.hover{background-color:#eff0f0;cursor:pointer}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { pushScopeId as he, popScopeId as pe, nextTick as ee, openBlock as b, createBlock as M, withScopeId as ve, markRaw as me, shallowReactive as ye, resolveComponent as be, resolveDirective as ge, withDirectives as X, renderSlot as U, createCommentVNode as C, createVNode as J, Fragment as F, renderList as Y, ref as I, watchEffect as P, computed as L, watchPostEffect as we, onMounted as _e, onUnmounted as Se, createElementBlock as S, unref as w, createTextVNode as ne, toDisplayString as W, createElementVNode as k, Teleport as se, normalizeClass as ke, normalizeStyle as xe, isRef as ze, vModelText as Oe, withCtx as $e, vShow as Ie, createApp as Ve } from "vue";
const T = /* @__PURE__ */ new WeakMap();
class R {
  static put(t, i, n) {
    T.has(t) || T.set(t, /* @__PURE__ */ new Map()), T.get(t).set(i, n);
  }
  static get(t, i) {
    return T.get(t).get(i);
  }
  static has(t, i) {
    return T.has(t) && T.get(t).has(i);
  }
  static remove(t, i) {
    var n = T.get(t).delete(i);
    return !T.get(t).size === 0 && T.delete(t), n;
  }
  static lock(t, i, n) {
    return R.has(t, i) ? !1 : (R.put(t, i, !0), n());
  }
}
window.__Store = T;
function Te() {
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
let H;
function G() {
  G.init || (G.init = !0, H = Te() !== -1);
}
var q = {
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
    G(), ee(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", H && this.$el.appendChild(e), e.data = "about:blank", H || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!H && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ce = /* @__PURE__ */ ve("data-v-b329ee4c");
he("data-v-b329ee4c");
const Ee = {
  class: "resize-observer",
  tabindex: "-1"
};
pe();
const Ae = /* @__PURE__ */ Ce((e, t, i, n, s, r) => (b(), M("div", Ee)));
q.render = Ae;
q.__scopeId = "data-v-b329ee4c";
q.__file = "src/components/ResizeObserver.vue";
function B(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(t) {
    return typeof t;
  } : B = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, B(e);
}
function Me(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function re(e, t) {
  for (var i = 0; i < t.length; i++) {
    var n = t[i];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Le(e, t, i) {
  return t && re(e.prototype, t), i && re(e, i), e;
}
function le(e) {
  return Ne(e) || Fe(e) || Pe(e) || Re();
}
function Ne(e) {
  if (Array.isArray(e))
    return Q(e);
}
function Fe(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Pe(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Q(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return Q(e, t);
  }
}
function Q(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = new Array(t); i < t; i++)
    n[i] = e[i];
  return n;
}
function Re() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function je(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function He(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, s, r, l = function(o) {
    for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
      p[g - 1] = arguments[g];
    if (r = p, !(n && o === s)) {
      var f = i.leading;
      typeof f == "function" && (f = f(o, s)), (!n || o !== s) && f && e.apply(void 0, [o].concat(le(r))), s = o, clearTimeout(n), n = setTimeout(function() {
        e.apply(void 0, [o].concat(le(r))), n = 0;
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
  if (B(e) === "object") {
    for (var i in e)
      if (!ae(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var Be = /* @__PURE__ */ function() {
  function e(t, i, n) {
    Me(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, n);
  }
  return Le(e, [{
    key: "createObserver",
    value: function(i, n) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = je(i), this.callback = function(a, o) {
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
            var d = a.find(function(g) {
              return g.isIntersecting;
            });
            d && (o = d);
          }
          if (s.callback) {
            var p = o.isIntersecting && o.intersectionRatio >= s.threshold;
            if (p === s.oldResult)
              return;
            s.oldResult = p, s.callback(p, o);
          }
        }, this.options.intersection), ee(function() {
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
      var s = new Be(e, n, i);
      e._vue_visibilityState = s;
    }
}
function De(e, t, i) {
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
var qe = {
  beforeMount: ue,
  updated: De,
  unmounted: ce
}, Ue = {
  itemsLimit: 1e3
}, We = /(auto|scroll)/;
function de(e, t) {
  return e.parentNode === null ? t : de(e.parentNode, t.concat([e]));
}
var K = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Ke = function(t) {
  return K(t, "overflow") + K(t, "overflow-y") + K(t, "overflow-x");
}, Xe = function(t) {
  return We.test(Ke(t));
};
function Je(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = de(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Xe(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function D(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? D = function(t) {
    return typeof t;
  } : D = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, D(e);
}
var Ye = {
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
function Ge() {
  return this.items.length && D(this.items[0]) !== "object";
}
var Z = !1;
if (typeof window < "u") {
  Z = !1;
  try {
    var Qe = Object.defineProperty({}, "passive", {
      get: function() {
        Z = !0;
      }
    });
    window.addEventListener("test", null, Qe);
  } catch {
  }
}
let Ze = 0;
var te = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: q
  },
  directives: {
    ObserveVisibility: qe
  },
  props: {
    ...Ye,
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
    simpleArray: Ge
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
        id: Ze++,
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
      const i = this.itemSize, n = this.$_computedMinItemSize, s = this.typeField, r = this.simpleArray ? null : this.keyField, l = this.items, a = l.length, o = this.sizes, d = this.$_views, p = this.$_unusedViews, g = this.pool;
      let f, m, z;
      if (!a)
        f = m = z = 0;
      else if (this.$_prerender)
        f = 0, m = this.prerender, z = null;
      else {
        const v = this.getScroll();
        if (t) {
          let h = v.start - this.$_lastUpdateScrollPosition;
          if (h < 0 && (h = -h), i === null && h < n || h < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = v.start;
        const u = this.buffer;
        if (v.start -= u, v.end += u, i === null) {
          let h, y = 0, A = a - 1, _ = ~~(a / 2), ie;
          do
            ie = _, h = o[_].accumulator, h < v.start ? y = _ : _ < a - 1 && o[_ + 1].accumulator > v.start && (A = _), _ = ~~((y + A) / 2);
          while (_ !== ie);
          for (_ < 0 && (_ = 0), f = _, z = o[a - 1].accumulator, m = _; m < a && o[m].accumulator < v.end; m++)
            ;
          m === -1 ? m = l.length - 1 : (m++, m > a && (m = a));
        } else
          f = ~~(v.start / i), m = Math.ceil(v.end / i), f < 0 && (f = 0), m > a && (m = a), z = a * i;
      }
      m - f > Ue.itemsLimit && this.itemsLimitError(), this.totalSize = z;
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
      const j = V ? null : /* @__PURE__ */ new Map();
      let x, O, $, E;
      for (let v = f; v < m; v++) {
        x = l[v];
        const u = r ? x[r] : x;
        if (u == null)
          throw new Error(`Key is ${u} on item (keyField is '${r}')`);
        if (c = d.get(u), !i && !o[v].size) {
          c && this.unuseView(c);
          continue;
        }
        c ? (c.nr.used = !0, c.item = x) : (O = x[s], $ = p.get(O), V ? $ && $.length ? (c = $.pop(), c.item = x, c.nr.used = !0, c.nr.index = v, c.nr.key = u, c.nr.type = O) : c = this.addView(g, v, x, u, O) : (E = j.get(O) || 0, (!$ || E >= $.length) && (c = this.addView(g, v, x, u, O), this.unuseView(c, !0), $ = p.get(O)), c = $[E], c.item = x, c.nr.used = !0, c.nr.index = v, c.nr.key = u, c.nr.type = O, j.set(O, E + 1), E++), d.set(u, c)), i === null ? c.position = o[v - 1].accumulator : c.position = v * i;
      }
      return this.$_startIndex = f, this.$_endIndex = m, this.emitUpdate && this.$emit("update", f, m), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: V
      };
    },
    getListenerTarget() {
      let e = Je(this.$el);
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Z ? {
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
const et = {
  key: 0,
  class: "vue-recycle-scroller__slot"
}, tt = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function it(e, t, i, n, s, r) {
  const l = be("ResizeObserver"), a = ge("observe-visibility");
  return X((b(), M("div", {
    class: ["vue-recycle-scroller", {
      ready: s.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...o) => r.handleScroll && r.handleScroll(...o))
  }, [
    e.$slots.before ? (b(), M("div", et, [
      U(e.$slots, "before")
    ])) : C("v-if", !0),
    J("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (b(!0), M(F, null, Y(s.pool, (o) => (b(), M("div", {
        key: o.nr.id,
        style: s.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${o.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: s.hoverKey === o.nr.key }],
        onMouseenter: (d) => s.hoverKey = o.nr.key,
        onMouseleave: t[1] || (t[1] = (d) => s.hoverKey = null)
      }, [
        U(e.$slots, "default", {
          item: o.item,
          index: o.nr.index,
          active: o.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (b(), M("div", tt, [
      U(e.$slots, "after")
    ])) : C("v-if", !0),
    J(l, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
te.render = it;
te.__file = "src/components/RecycleScroller.vue";
const N = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}, nt = function(e, t) {
  t === void 0 && (t = document);
  for (var i = [], n = e.parentNode; n !== t; ) {
    var s = n;
    i.push(s), n = s.parentNode;
  }
  return i.push(t), i;
}, st = function(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(i) {
    e.removeChild(i);
  });
}, rt = (e, t) => {
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
let lt = 1;
const ot = (e) => {
  e && (e.hidden = !0, st(e));
}, at = (e, t, i, n) => {
  var l, a;
  const s = I([]);
  P(() => {
    s.value = i;
  });
  const r = I([]);
  return P(() => {
    r.value = t;
  }), e && (s.value = Array.apply(null, e.selectedOptions).map((o) => o.value).filter((o) => o), r.value = Array.apply(null, e.options).reduce((o, d) => (o.push({ value: d.text, key: d.value, data: d.dataset }), o), [])), rt(r, (a = (l = e == null ? void 0 : e.id) != null ? l : n) != null ? a : "extraselect_" + (++lt).toString()), { options: r, selectedOptions: s };
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
  const a = I(0), o = I(!1), d = L(() => o.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const p = [];
      P((g) => {
        if (n.value.length >= s) {
          let f = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              f = !p.includes(n.value);
              break;
            case "complete":
              f = p.reduce((m, z) => m && !n.value.startsWith(z), !0);
              break;
          }
          if (f) {
            o.value = !0;
            const m = setTimeout(() => {
              p.push(n.value), a.value += 1, oe(t, n.value, l).then((z) => {
                e.actions.addRange(z), e.actions.sort(), a.value -= 1, o.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      oe(t, null, l).then((p) => {
        e.actions.addRange(p), e.actions.sort();
      });
  return { searchingFlag: d };
}, ct = (e, t) => {
  const i = I(""), n = I([]), s = function(r, l) {
    return r.value.filter((o) => l.length > 0 ? o.value.toLowerCase().includes(l.toLowerCase()) : !0);
  };
  return P(() => {
    i.value.length >= t ? n.value = s(e, i.value) : n.value = [];
  }), { filterText: i, filteredOptions: n };
}, dt = (e, t, i, n, s) => {
  const r = function(d, p) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = p, f.measureText(d).width;
  }, l = function() {
    var d = N(i.value), p = N(document.querySelector("body"));
    n.value.style.top = -p.top + d.top;
  }, a = L(() => {
    var p;
    const d = (p = N(i.value).width) != null ? p : 100;
    if (s === "inherit")
      return d;
    if (s == null || s === "dynamic") {
      const g = getComputedStyle(document.querySelector("body")).font;
      return Math.max(d, Math.max(...e.value.map((f) => r(f.value, g))) + 15);
    }
    return s;
  }), o = I({
    position: "absolute",
    "min-width": "max-content"
  });
  return we(() => {
    t.value.length < 0 && console.log("empty selection");
    var d = N(i.value), p = N(document.querySelector("body"));
    o.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + d.top + d.height).toString() + "px",
      left: (-p.left + d.left).toString() + "px"
    };
  }), { dropdownStyle: o, placeDropdown: l };
}, ft = {
  key: 0,
  class: "extra-select selection"
}, ht = ["onClick"], pt = ["innerHTML"], vt = ["value"], mt = {
  key: 0,
  class: "input-searching"
}, yt = {
  key: 0,
  class: "allselect-clear"
}, bt = { class: "row-input" }, gt = ["checked"], wt = /* @__PURE__ */ k("b", null, "Select all", -1), _t = { class: "row-input" }, St = ["checked"], kt = /* @__PURE__ */ k("b", null, "Select Filtered", -1), xt = {
  key: 1,
  class: "no-matches"
}, zt = { key: 2 }, Ot = ["onClick"], $t = { class: "row-input" }, It = ["checked"], Vt = ["value"], Tt = {
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
    const i = e, n = L(() => {
      var u, h;
      return (h = (u = i.originalNode) == null ? void 0 : u.multiple) != null ? h : i.multiple;
    }), { options: s, selectedOptions: r } = at(i.originalNode, i.options, i.modelValue);
    ot(i.originalNode);
    const { filterText: l, filteredOptions: a } = ct(s, i.minChars), { searchingFlag: o } = ut(
      s,
      i.url,
      i.searchableUrl,
      l,
      i.minChars,
      i.fetchMode,
      i.fetchOptions
    ), d = I(null), p = I(null), g = I(null), f = I(!1), m = function(u) {
      const h = nt(u.target);
      h.push(u.target), !h.includes(d.value) && !h.includes(p.value) && (f.value = !1);
    };
    _e(() => {
      window.document.addEventListener("mousedown", m), window.document.addEventListener("focusin", m);
    }), Se(() => {
      window.document.removeEventListener("mousedown", m), window.document.removeEventListener("focusin", m);
    });
    const { dropdownStyle: z, placeDropdown: c } = dt(s, r, d, p, i.maxWidth), V = (u) => {
      n.value ? r.value.includes(u) ? r.value.splice(r.value.indexOf(u), 1) : r.value.push(u) : (r.value = [u], f.value = !1), t("update:modelValue", r.value);
    }, j = (u) => {
      x(u, !1), l.value = "";
    }, x = (u, h = null) => {
      h == null && (h = !$.value), h ? r.value = s.value.map((y) => y.key) : r.value = [], t("update:modelValue", r.value);
    }, O = () => {
      E.value ? a.value.forEach((u) => {
        r.value.includes(u.key) && r.value.splice(r.value.indexOf(u.key), 1);
      }) : a.value.forEach((u) => {
        r.value.includes(u.key) || r.value.push(u.key);
      }), t("update:modelValue", r.value);
    };
    P(() => {
      f.value ? (c(), i.search && ee(() => {
        g.value.focus({ focusVisible: !0 });
      })) : l.value = "";
    });
    const $ = L(() => r.value.length == s.value.length), E = L(() => a.value.reduce((u, h) => u && r.value.includes(h.key), !0));
    L(() => r.value.length == 0);
    const v = L(() => {
      const u = r.value.map((h) => {
        var y;
        return (y = s.value.find((A) => A.key == h)) == null ? void 0 : y.value;
      }).join(", ");
      return u.length > 0 ? u : "--";
    });
    return (u, h) => (b(), S(F, null, [
      i.showSelected ? (b(), S("div", ft, [
        (b(!0), S(F, null, Y(w(r), (y) => {
          var A;
          return b(), S("div", {
            key: y,
            onClick: (_) => V(y),
            class: "selection-badge"
          }, [
            ne(W((A = w(s).find((_) => _.key == y)) == null ? void 0 : A.value) + " ", 1),
            k("div", {
              class: "selection-remove",
              innerHTML: i.removeIcon
            }, null, 8, pt)
          ], 8, ht);
        }), 128))
      ])) : C("", !0),
      k("input", {
        onFocus: h[0] || (h[0] = (y) => f.value = !0),
        onClick: h[1] || (h[1] = (y) => f.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: w(v),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, vt),
      (b(), M(se, { to: "body" }, [
        X(k("div", {
          class: ke(["extra-select dropdown", { searching: w(o) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: xe(w(z))
        }, [
          i.search ? (b(), S("div", mt, [
            X(k("input", {
              ref_key: "searchNode",
              ref: g,
              class: "extra-select-search",
              "onUpdate:modelValue": h[2] || (h[2] = (y) => ze(l) ? l.value = y : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Oe, w(l)]
            ])
          ])) : C("", !0),
          w(l).length >= i.minChars ? (b(), S(F, { key: 1 }, [
            w(n) ? (b(), S("div", yt, [
              w(l).length == 0 ? (b(), S("div", {
                key: 0,
                onClick: x,
                class: "all-select"
              }, [
                k("div", bt, [
                  k("input", {
                    checked: w($),
                    type: "checkbox"
                  }, null, 8, gt),
                  wt
                ])
              ])) : C("", !0),
              w(a).length > 0 && w(l).length > 0 ? (b(), S("div", {
                key: 1,
                onClick: O,
                class: "all-select"
              }, [
                k("div", _t, [
                  k("input", {
                    checked: w(E),
                    type: "checkbox"
                  }, null, 8, St),
                  kt
                ])
              ])) : C("", !0),
              k("div", {
                class: "clear",
                onClick: j
              }, "Clear")
            ])) : C("", !0),
            w(a).length == 0 ? (b(), S("div", xt, "No matches found")) : C("", !0)
          ], 64)) : (b(), S("div", zt, "Insert at least " + W(i.minChars) + " characters", 1)),
          J(w(te), {
            items: w(a),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: $e(({ item: y }) => [
              k("div", {
                class: "dropdown-row",
                onClick: (A) => V(y.key),
                style: { height: "32px" }
              }, [
                k("div", $t, [
                  w(n) ? (b(), S("input", {
                    key: 0,
                    checked: w(r).includes(y.key),
                    type: "checkbox"
                  }, null, 8, It)) : C("", !0),
                  ne(" " + W(y.value), 1)
                ])
              ], 8, Ot)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ie, f.value]
        ])
      ])),
      i.originalNode ? (b(), M(se, {
        key: 1,
        to: i.originalNode
      }, [
        (b(!0), S(F, null, Y(w(r), (y) => (b(), S("option", {
          key: y,
          selected: "selected",
          value: y
        }, null, 8, Vt))), 128))
      ], 8, ["to"])) : C("", !0)
    ], 64));
  }
}, fe = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      fe.bindNew(e);
    });
  },
  bindNew(e) {
    R.lock(e, "extra-select", () => {
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
      const n = Ve(Tt, t);
      n.mount(i), e.addEventListener("remove", function() {
        n.unmount(), i.remove(), e.remove(), R.remove(e, "extra-select");
      });
    });
  }
};
fe.init();
export {
  fe as default
};
