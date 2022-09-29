(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { pushScopeId as ve, popScopeId as pe, nextTick as ie, openBlock as y, createBlock as A, withScopeId as me, markRaw as ye, shallowReactive as be, resolveComponent as ge, resolveDirective as we, withDirectives as G, renderSlot as K, createCommentVNode as T, createVNode as J, Fragment as R, renderList as Q, ref as C, watchEffect as H, computed as M, watchPostEffect as _e, onMounted as Se, onUnmounted as ke, createElementBlock as z, unref as w, createTextVNode as re, toDisplayString as X, createElementVNode as $, Teleport as le, normalizeClass as ze, normalizeStyle as Oe, isRef as $e, vModelText as xe, withCtx as Ie, vShow as Ve } from "vue";
function Ce() {
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
let D;
function Z() {
  Z.init || (Z.init = !0, D = Ce() !== -1);
}
var W = {
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
    Z(), ie(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", D && this.$el.appendChild(e), e.data = "about:blank", D || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!D && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Te = /* @__PURE__ */ me("data-v-b329ee4c");
ve("data-v-b329ee4c");
const Ee = {
  class: "resize-observer",
  tabindex: "-1"
};
pe();
const Ae = /* @__PURE__ */ Te((e, t, i, s, n, r) => (y(), A("div", Ee)));
W.render = Ae;
W.__scopeId = "data-v-b329ee4c";
W.__file = "src/components/ResizeObserver.vue";
function q(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? q = function(t) {
    return typeof t;
  } : q = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, q(e);
}
function Le(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oe(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function Me(e, t, i) {
  return t && oe(e.prototype, t), i && oe(e, i), e;
}
function ae(e) {
  return Ne(e) || Fe(e) || Pe(e) || je();
}
function Ne(e) {
  if (Array.isArray(e))
    return ee(e);
}
function Fe(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Pe(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ee(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return ee(e, t);
  }
}
function ee(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, s = new Array(t); i < t; i++)
    s[i] = e[i];
  return s;
}
function je() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function He(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, n, r, o = function(l) {
    for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), d = 1; d < p; d++)
      v[d - 1] = arguments[d];
    if (r = v, !(s && l === n)) {
      var m = i.leading;
      typeof m == "function" && (m = m(l, n)), (!s || l !== n) && m && e.apply(void 0, [l].concat(ae(r))), n = l, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [l].concat(ae(r))), s = 0;
      }, t);
    }
  };
  return o._clear = function() {
    clearTimeout(s), s = null;
  }, o;
}
function ce(e, t) {
  if (e === t)
    return !0;
  if (q(e) === "object") {
    for (var i in e)
      if (!ce(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var Be = /* @__PURE__ */ function() {
  function e(t, i, s) {
    Le(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, s);
  }
  return Me(e, [{
    key: "createObserver",
    value: function(i, s) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Re(i), this.callback = function(a, l) {
          n.options.callback(a, l), a && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var r = this.options.throttleOptions || {}, o = r.leading;
          this.callback = He(this.callback, this.options.throttle, {
            leading: function(l) {
              return o === "both" || o === "visible" && l || o === "hidden" && !l;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var l = a[0];
          if (a.length > 1) {
            var p = a.find(function(d) {
              return d.isIntersecting;
            });
            p && (l = p);
          }
          if (n.callback) {
            var v = l.isIntersecting && l.intersectionRatio >= n.threshold;
            if (v === n.oldResult)
              return;
            n.oldResult = v, n.callback(v, l);
          }
        }, this.options.intersection), ie(function() {
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
function de(e, t, i) {
  var s = t.value;
  if (!!s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Be(e, s, i);
      e._vue_visibilityState = n;
    }
}
function De(e, t, i) {
  var s = t.value, n = t.oldValue;
  if (!ce(s, n)) {
    var r = e._vue_visibilityState;
    if (!s) {
      fe(e);
      return;
    }
    r ? r.createObserver(s, i) : de(e, {
      value: s
    }, i);
  }
}
function fe(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var qe = {
  beforeMount: de,
  updated: De,
  unmounted: fe
}, Ue = {
  itemsLimit: 1e3
}, We = /(auto|scroll)/;
function he(e, t) {
  return e.parentNode === null ? t : he(e.parentNode, t.concat([e]));
}
var Y = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Ke = function(t) {
  return Y(t, "overflow") + Y(t, "overflow-y") + Y(t, "overflow-x");
}, Xe = function(t) {
  return We.test(Ke(t));
};
function Ye(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = he(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Xe(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function U(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(t) {
    return typeof t;
  } : U = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, U(e);
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
function Je() {
  return this.items.length && U(this.items[0]) !== "object";
}
var te = !1;
if (typeof window < "u") {
  te = !1;
  try {
    var Qe = Object.defineProperty({}, "passive", {
      get: function() {
        te = !0;
      }
    });
    window.addEventListener("test", null, Qe);
  } catch {
  }
}
let Ze = 0;
var se = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: W
  },
  directives: {
    ObserveVisibility: qe
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
        }, t = this.items, i = this.sizeField, s = this.minItemSize;
        let n = 1e4, r = 0, o;
        for (let a = 0, l = t.length; a < l; a++)
          o = t[a][i] || s, o < n && (n = o), r += o, e[a] = { accumulator: r, size: o };
        return this.$_computedMinItemSize = n, e;
      }
      return [];
    },
    simpleArray: Je
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
      const r = ye({
        id: Ze++,
        index: t,
        used: !0,
        key: s,
        type: n
      }), o = be({
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
      const i = this.itemSize, s = this.$_computedMinItemSize, n = this.typeField, r = this.simpleArray ? null : this.keyField, o = this.items, a = o.length, l = this.sizes, p = this.$_views, v = this.$_unusedViews, d = this.pool;
      let m, f, S;
      if (!a)
        m = f = S = 0;
      else if (this.$_prerender)
        m = 0, f = this.prerender, S = null;
      else {
        const h = this.getScroll();
        if (t) {
          let O = h.start - this.$_lastUpdateScrollPosition;
          if (O < 0 && (O = -O), i === null && O < s || O < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = h.start;
        const _ = this.buffer;
        if (h.start -= _, h.end += _, i === null) {
          let O, N = 0, F = a - 1, k = ~~(a / 2), c;
          do
            c = k, O = l[k].accumulator, O < h.start ? N = k : k < a - 1 && l[k + 1].accumulator > h.start && (F = k), k = ~~((N + F) / 2);
          while (k !== c);
          for (k < 0 && (k = 0), m = k, S = l[a - 1].accumulator, f = k; f < a && l[f].accumulator < h.end; f++)
            ;
          f === -1 ? f = o.length - 1 : (f++, f > a && (f = a));
        } else
          m = ~~(h.start / i), f = Math.ceil(h.end / i), m < 0 && (m = 0), f > a && (f = a), S = a * i;
      }
      f - m > Ue.itemsLimit && this.itemsLimitError(), this.totalSize = S;
      let u;
      const E = m <= this.$_endIndex && f >= this.$_startIndex;
      if (this.$_continuous !== E) {
        if (E) {
          p.clear(), v.clear();
          for (let h = 0, _ = d.length; h < _; h++)
            u = d[h], this.unuseView(u);
        }
        this.$_continuous = E;
      } else if (E)
        for (let h = 0, _ = d.length; h < _; h++)
          u = d[h], u.nr.used && (e && (u.nr.index = o.findIndex(
            (O) => r ? O[r] === u.item[r] : O === u.item
          )), (u.nr.index === -1 || u.nr.index < m || u.nr.index >= f) && this.unuseView(u));
      const B = E ? null : /* @__PURE__ */ new Map();
      let x, I, V, L;
      for (let h = m; h < f; h++) {
        x = o[h];
        const _ = r ? x[r] : x;
        if (_ == null)
          throw new Error(`Key is ${_} on item (keyField is '${r}')`);
        if (u = p.get(_), !i && !l[h].size) {
          u && this.unuseView(u);
          continue;
        }
        u ? (u.nr.used = !0, u.item = x) : (I = x[n], V = v.get(I), E ? V && V.length ? (u = V.pop(), u.item = x, u.nr.used = !0, u.nr.index = h, u.nr.key = _, u.nr.type = I) : u = this.addView(d, h, x, _, I) : (L = B.get(I) || 0, (!V || L >= V.length) && (u = this.addView(d, h, x, _, I), this.unuseView(u, !0), V = v.get(I)), u = V[L], u.item = x, u.nr.used = !0, u.nr.index = h, u.nr.key = _, u.nr.type = I, B.set(I, L + 1), L++), p.set(_, u)), i === null ? u.position = l[h - 1].accumulator : u.position = h * i;
      }
      return this.$_startIndex = m, this.$_endIndex = f, this.emitUpdate && this.$emit("update", m, f), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: E
      };
    },
    getListenerTarget() {
      let e = Ye(this.$el);
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, te ? {
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
function it(e, t, i, s, n, r) {
  const o = ge("ResizeObserver"), a = we("observe-visibility");
  return G((y(), A("div", {
    class: ["vue-recycle-scroller", {
      ready: n.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...l) => r.handleScroll && r.handleScroll(...l))
  }, [
    e.$slots.before ? (y(), A("div", et, [
      K(e.$slots, "before")
    ])) : T("v-if", !0),
    J("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (y(!0), A(R, null, Q(n.pool, (l) => (y(), A("div", {
        key: l.nr.id,
        style: n.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${l.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: n.hoverKey === l.nr.key }],
        onMouseenter: (p) => n.hoverKey = l.nr.key,
        onMouseleave: t[1] || (t[1] = (p) => n.hoverKey = null)
      }, [
        K(e.$slots, "default", {
          item: l.item,
          index: l.nr.index,
          active: l.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (y(), A("div", tt, [
      K(e.$slots, "after")
    ])) : T("v-if", !0),
    J(o, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
se.render = it;
se.__file = "src/components/RecycleScroller.vue";
const j = function(e) {
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
  for (var i = [], s = e.parentNode; s !== t; ) {
    var n = s;
    i.push(n), s = n.parentNode;
  }
  return i.push(t), i;
}, nt = function(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(i) {
    e.removeChild(i);
  });
}, rt = (e, t) => {
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
let lt = 1;
const ot = (e) => {
  e && (e.style.display = "none", nt(e));
}, at = (e, t, i, s) => {
  var o, a;
  const n = C([]);
  H(() => {
    n.value = i;
  });
  const r = C([]);
  return H(() => {
    r.value = t;
  }), e && (n.value = Array.apply(null, e.selectedOptions).map((l) => l.value).filter((l) => l), r.value = Array.apply(null, e.options).reduce((l, p) => (l.push({ value: p.text, key: p.value, data: p.dataset }), l), [])), rt(r, (a = (o = e == null ? void 0 : e.id) != null ? o : s) != null ? a : "extraselect_" + (++lt).toString()), { options: r, selectedOptions: n };
}, ue = async function(e, t = null, i = {}) {
  var r;
  const s = {
    method: "POST",
    credentials: "include",
    ...i,
    headers: { "Content-Type": "application/json", ...(r = i.headers) != null ? r : {} },
    body: JSON.stringify({ search: t, ...i.body })
  };
  return await (await fetch(e, s)).json();
}, ut = (e, t, i, s, n, r = "limited", o = {}) => {
  const a = C(0), l = C(!1), p = M(() => l.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const v = [];
      H((d) => {
        if (s.value.length >= n) {
          let m = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              m = !v.includes(s.value);
              break;
            case "complete":
              m = v.reduce((f, S) => f && !s.value.startsWith(S), !0);
              break;
          }
          if (m) {
            l.value = !0;
            const f = setTimeout(() => {
              v.push(s.value), a.value += 1, ue(t, s.value, o).then((S) => {
                e.actions.addRange(S), e.actions.sort(), a.value -= 1, l.value = !1;
              });
            }, 500);
            d(() => {
              clearTimeout(f);
            });
          }
        }
      });
    } else
      ue(t, null, o).then((v) => {
        e.actions.addRange(v), e.actions.sort();
      });
  return { searchingFlag: p };
}, ct = (e, t) => {
  const i = C(""), s = C([]), n = function(r, o) {
    return r.value.filter((l) => o.length > 0 ? l.value.toLowerCase().includes(o.toLowerCase()) : !0);
  };
  return H(() => {
    i.value.length >= t ? s.value = n(e, i.value) : s.value = [];
  }), { filterText: i, filteredOptions: s };
}, dt = (e, t, i, s, n, r) => {
  const o = function(v, d) {
    const f = document.createElement("canvas").getContext("2d");
    return f.font = d, f.measureText(v).width;
  }, a = function() {
    var v = j(s.value), d = j(document.querySelector("body"));
    n.value.style.top = -d.top + v.top;
  }, l = M(() => {
    var d;
    const v = (d = j(s.value).width) != null ? d : 100;
    if (r === "inherit")
      return v;
    if (r == null || r === "dynamic") {
      const m = getComputedStyle(document.querySelector("body")).font;
      return Math.max(v, Math.max(...e.value.map((f) => o(f.value, m))) + 15);
    }
    return r;
  }), p = C({
    position: "absolute",
    "min-width": "max-content"
  });
  return _e(() => {
    i.value < 0 && console.log("is open"), t.value.length < 0 && console.log("empty selection");
    var v = j(s.value), d = j(document.querySelector("body"));
    p.value = {
      position: "absolute",
      "min-width": "max-content",
      width: l.value.toString() + "px",
      top: (-d.top + v.top + v.height).toString() + "px",
      left: (-d.left + v.left).toString() + "px"
    };
  }), { dropdownStyle: p, placeDropdown: a };
}, ft = {
  key: 0,
  class: "extra-select selection"
}, ht = ["onClick"], vt = ["innerHTML"], pt = ["value"], mt = {
  key: 0,
  class: "input-searching"
}, yt = {
  key: 0,
  class: "allselect-clear"
}, bt = { class: "row-input" }, gt = ["checked"], wt = /* @__PURE__ */ $("b", null, "Select all", -1), _t = { class: "row-input" }, St = ["checked"], kt = /* @__PURE__ */ $("b", null, "Select Filtered", -1), zt = {
  key: 1,
  class: "no-matches"
}, Ot = { key: 2 }, $t = ["onClick"], xt = { class: "row-input" }, It = ["checked"], Vt = ["value"], Tt = {
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
    var N, F, k;
    const i = e, s = M(() => {
      var c, b;
      return (b = (c = i.originalNode) == null ? void 0 : c.multiple) != null ? b : i.multiple;
    }), { options: n, selectedOptions: r } = at(i.originalNode, i.options, i.modelValue), o = (N = i.originalNode) == null ? void 0 : N.classList, a = Object.values((k = (F = i.originalNode) == null ? void 0 : F.style) != null ? k : {});
    ot(i.originalNode);
    const { filterText: l, filteredOptions: p } = ct(n, i.minChars), { searchingFlag: v } = ut(
      n,
      i.url,
      i.searchableUrl,
      l,
      i.minChars,
      i.fetchMode,
      i.fetchOptions
    ), d = C(null), m = C(null), f = C(null), S = C(!1), u = function(c) {
      const b = st(c.target);
      b.push(c.target), !b.includes(d.value) && !b.includes(m.value) && (S.value = !1);
    };
    Se(() => {
      if (i.originalNode) {
        for (let c of o)
          c != "extraselect" && d.value.classList.add(c);
        for (let c of a)
          d.value.style[c] = i.originalNode.style[c];
        a.includes("background-color") || (d.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", u), window.document.addEventListener("focusin", u);
    }), ke(() => {
      window.document.removeEventListener("mousedown", u), window.document.removeEventListener("focusin", u);
    });
    const { dropdownStyle: E, placeDropdown: B } = dt(n, r, S, d, m, i.maxWidth), x = (c) => {
      s.value ? r.value.includes(c) ? r.value.splice(r.value.indexOf(c), 1) : r.value.push(c) : (r.value = [c], S.value = !1), t("update:modelValue", r.value);
    }, I = (c) => {
      V(c, !1), l.value = "";
    }, V = (c, b = null) => {
      b == null && (b = !h.value), b ? r.value = n.value.map((g) => g.key) : r.value = [], t("update:modelValue", r.value);
    }, L = () => {
      _.value ? p.value.forEach((c) => {
        r.value.includes(c.key) && r.value.splice(r.value.indexOf(c.key), 1);
      }) : p.value.forEach((c) => {
        r.value.includes(c.key) || r.value.push(c.key);
      }), t("update:modelValue", r.value);
    };
    H(() => {
      S.value ? (B(), i.search && ie(() => {
        f.value.focus({ focusVisible: !0 });
      })) : l.value = "";
    });
    const h = M(() => r.value.length == n.value.length), _ = M(() => p.value.reduce((c, b) => c && r.value.includes(b.key), !0));
    M(() => r.value.length == 0);
    const O = M(() => {
      const c = r.value.map((b) => {
        var g;
        return (g = n.value.find((P) => P.key == b)) == null ? void 0 : g.value;
      }).join(", ");
      return c.length > 0 ? c : "--";
    });
    return (c, b) => (y(), z(R, null, [
      i.showSelected ? (y(), z("div", ft, [
        (y(!0), z(R, null, Q(w(r), (g) => {
          var P;
          return y(), z("div", {
            key: g,
            onClick: (ne) => x(g),
            class: "selection-badge"
          }, [
            re(X((P = w(n).find((ne) => ne.key == g)) == null ? void 0 : P.value) + " ", 1),
            $("div", {
              class: "selection-remove",
              innerHTML: i.removeIcon
            }, null, 8, vt)
          ], 8, ht);
        }), 128))
      ])) : T("", !0),
      $("input", {
        onFocus: b[0] || (b[0] = (g) => S.value = !0),
        onClick: b[1] || (b[1] = (g) => S.value = !0),
        ref_key: "inputNode",
        ref: d,
        value: w(O),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, pt),
      (y(), A(le, { to: "body" }, [
        G($("div", {
          class: ze(["extra-select dropdown", { searching: w(v) > 0 }]),
          ref_key: "dropdownNode",
          ref: m,
          style: Oe(w(E))
        }, [
          i.search ? (y(), z("div", mt, [
            G($("input", {
              ref_key: "searchNode",
              ref: f,
              class: "extra-select-search",
              "onUpdate:modelValue": b[2] || (b[2] = (g) => $e(l) ? l.value = g : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [xe, w(l)]
            ])
          ])) : T("", !0),
          w(l).length >= i.minChars ? (y(), z(R, { key: 1 }, [
            w(s) ? (y(), z("div", yt, [
              w(l).length == 0 ? (y(), z("div", {
                key: 0,
                onClick: V,
                class: "all-select"
              }, [
                $("div", bt, [
                  $("input", {
                    checked: w(h),
                    type: "checkbox"
                  }, null, 8, gt),
                  wt
                ])
              ])) : T("", !0),
              w(p).length > 0 && w(l).length > 0 ? (y(), z("div", {
                key: 1,
                onClick: L,
                class: "all-select"
              }, [
                $("div", _t, [
                  $("input", {
                    checked: w(_),
                    type: "checkbox"
                  }, null, 8, St),
                  kt
                ])
              ])) : T("", !0),
              $("div", {
                class: "clear",
                onClick: I
              }, "Clear")
            ])) : T("", !0),
            w(p).length == 0 ? (y(), z("div", zt, "No matches found")) : T("", !0)
          ], 64)) : (y(), z("div", Ot, "Insert at least " + X(i.minChars) + " characters", 1)),
          J(w(se), {
            items: w(p),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: Ie(({ item: g }) => [
              $("div", {
                class: "dropdown-row",
                onClick: (P) => x(g.key),
                style: { height: "32px" }
              }, [
                $("div", xt, [
                  w(s) ? (y(), z("input", {
                    key: 0,
                    checked: w(r).includes(g.key),
                    type: "checkbox"
                  }, null, 8, It)) : T("", !0),
                  re(" " + X(g.value), 1)
                ])
              ], 8, $t)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ve, S.value]
        ])
      ])),
      i.originalNode ? (y(), A(le, {
        key: 1,
        to: i.originalNode
      }, [
        (y(!0), z(R, null, Q(w(r), (g) => (y(), z("option", {
          key: g,
          selected: "selected",
          value: g
        }, null, 8, Vt))), 128))
      ], 8, ["to"])) : T("", !0)
    ], 64));
  }
};
export {
  Tt as default
};
