import { pushScopeId as fe, popScopeId as he, nextTick as Q, openBlock as y, createBlock as C, withScopeId as pe, markRaw as ve, shallowReactive as me, resolveComponent as ye, resolveDirective as be, withDirectives as W, renderSlot as D, createCommentVNode as T, createVNode as K, Fragment as M, renderList as J, ref as x, watchEffect as L, computed as A, watchPostEffect as ge, onMounted as we, onUnmounted as _e, createElementBlock as _, unref as g, toDisplayString as q, createElementVNode as S, Teleport as ne, normalizeClass as Se, normalizeStyle as ke, isRef as ze, vModelText as Oe, withCtx as $e, createTextVNode as xe, vShow as Ie, createApp as Ve } from "vue";
const E = /* @__PURE__ */ new WeakMap();
class F {
  static put(t, i, n) {
    E.has(t) || E.set(t, /* @__PURE__ */ new Map()), E.get(t).set(i, n);
  }
  static get(t, i) {
    return E.get(t).get(i);
  }
  static has(t, i) {
    return E.has(t) && E.get(t).has(i);
  }
  static remove(t, i) {
    var n = E.get(t).delete(i);
    return !E.get(t).size === 0 && E.delete(t), n;
  }
  static lock(t, i, n) {
    return F.has(t, i) ? !1 : (F.put(t, i, !0), n());
  }
}
window.__Store = E;
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
function X() {
  X.init || (X.init = !0, R = Ee() !== -1);
}
var H = {
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
    X(), Q(() => {
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
const Te = /* @__PURE__ */ pe("data-v-b329ee4c");
fe("data-v-b329ee4c");
const Ce = {
  class: "resize-observer",
  tabindex: "-1"
};
he();
const Ae = /* @__PURE__ */ Te((e, t, i, n, s, r) => (y(), C("div", Ce)));
H.render = Ae;
H.__scopeId = "data-v-b329ee4c";
H.__file = "src/components/ResizeObserver.vue";
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
function Ne(e, t, i) {
  return t && se(e.prototype, t), i && se(e, i), e;
}
function re(e) {
  return Le(e) || Fe(e) || Pe(e) || Re();
}
function Le(e) {
  if (Array.isArray(e))
    return Y(e);
}
function Fe(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Pe(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Y(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return Y(e, t);
  }
}
function Y(e, t) {
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
function Be(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, s, r, l = function(o) {
    for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), b = 1; b < f; b++)
      v[b - 1] = arguments[b];
    if (r = v, !(n && o === s)) {
      var h = i.leading;
      typeof h == "function" && (h = h(o, s)), (!n || o !== s) && h && e.apply(void 0, [o].concat(re(r))), s = o, clearTimeout(n), n = setTimeout(function() {
        e.apply(void 0, [o].concat(re(r))), n = 0;
      }, t);
    }
  };
  return l._clear = function() {
    clearTimeout(n), n = null;
  }, l;
}
function oe(e, t) {
  if (e === t)
    return !0;
  if (j(e) === "object") {
    for (var i in e)
      if (!oe(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var He = /* @__PURE__ */ function() {
  function e(t, i, n) {
    Me(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, n);
  }
  return Ne(e, [{
    key: "createObserver",
    value: function(i, n) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = je(i), this.callback = function(a, o) {
          s.options.callback(a, o), a && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var r = this.options.throttleOptions || {}, l = r.leading;
          this.callback = Be(this.callback, this.options.throttle, {
            leading: function(o) {
              return l === "both" || l === "visible" && o || l === "hidden" && !o;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var o = a[0];
          if (a.length > 1) {
            var f = a.find(function(b) {
              return b.isIntersecting;
            });
            f && (o = f);
          }
          if (s.callback) {
            var v = o.isIntersecting && o.intersectionRatio >= s.threshold;
            if (v === s.oldResult)
              return;
            s.oldResult = v, s.callback(v, o);
          }
        }, this.options.intersection), Q(function() {
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
function ae(e, t, i) {
  var n = t.value;
  if (!!n)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new He(e, n, i);
      e._vue_visibilityState = s;
    }
}
function De(e, t, i) {
  var n = t.value, s = t.oldValue;
  if (!oe(n, s)) {
    var r = e._vue_visibilityState;
    if (!n) {
      ue(e);
      return;
    }
    r ? r.createObserver(n, i) : ae(e, {
      value: n
    }, i);
  }
}
function ue(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var qe = {
  beforeMount: ae,
  updated: De,
  unmounted: ue
}, Ue = {
  itemsLimit: 1e3
}, We = /(auto|scroll)/;
function ce(e, t) {
  return e.parentNode === null ? t : ce(e.parentNode, t.concat([e]));
}
var U = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Ke = function(t) {
  return U(t, "overflow") + U(t, "overflow-y") + U(t, "overflow-x");
}, Je = function(t) {
  return We.test(Ke(t));
};
function Xe(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = ce(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Je(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function B(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? B = function(t) {
    return typeof t;
  } : B = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, B(e);
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
  return this.items.length && B(this.items[0]) !== "object";
}
var G = !1;
if (typeof window < "u") {
  G = !1;
  try {
    var Qe = Object.defineProperty({}, "passive", {
      get: function() {
        G = !0;
      }
    });
    window.addEventListener("test", null, Qe);
  } catch {
  }
}
let Ze = 0;
var Z = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: H
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
      const r = ve({
        id: Ze++,
        index: t,
        used: !0,
        key: n,
        type: s
      }), l = me({
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
      const i = this.itemSize, n = this.$_computedMinItemSize, s = this.typeField, r = this.simpleArray ? null : this.keyField, l = this.items, a = l.length, o = this.sizes, f = this.$_views, v = this.$_unusedViews, b = this.pool;
      let h, m, $;
      if (!a)
        h = m = $ = 0;
      else if (this.$_prerender)
        h = 0, m = this.prerender, $ = null;
      else {
        const u = this.getScroll();
        if (t) {
          let w = u.start - this.$_lastUpdateScrollPosition;
          if (w < 0 && (w = -w), i === null && w < n || w < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = u.start;
        const c = this.buffer;
        if (u.start -= c, u.end += c, i === null) {
          let w, ee = 0, te = a - 1, O = ~~(a / 2), ie;
          do
            ie = O, w = o[O].accumulator, w < u.start ? ee = O : O < a - 1 && o[O + 1].accumulator > u.start && (te = O), O = ~~((ee + te) / 2);
          while (O !== ie);
          for (O < 0 && (O = 0), h = O, $ = o[a - 1].accumulator, m = O; m < a && o[m].accumulator < u.end; m++)
            ;
          m === -1 ? m = l.length - 1 : (m++, m > a && (m = a));
        } else
          h = ~~(u.start / i), m = Math.ceil(u.end / i), h < 0 && (h = 0), m > a && (m = a), $ = a * i;
      }
      m - h > Ue.itemsLimit && this.itemsLimitError(), this.totalSize = $;
      let d;
      const I = h <= this.$_endIndex && m >= this.$_startIndex;
      if (this.$_continuous !== I) {
        if (I) {
          f.clear(), v.clear();
          for (let u = 0, c = b.length; u < c; u++)
            d = b[u], this.unuseView(d);
        }
        this.$_continuous = I;
      } else if (I)
        for (let u = 0, c = b.length; u < c; u++)
          d = b[u], d.nr.used && (e && (d.nr.index = l.findIndex(
            (w) => r ? w[r] === d.item[r] : w === d.item
          )), (d.nr.index === -1 || d.nr.index < h || d.nr.index >= m) && this.unuseView(d));
      const P = I ? null : /* @__PURE__ */ new Map();
      let k, z, V, p;
      for (let u = h; u < m; u++) {
        k = l[u];
        const c = r ? k[r] : k;
        if (c == null)
          throw new Error(`Key is ${c} on item (keyField is '${r}')`);
        if (d = f.get(c), !i && !o[u].size) {
          d && this.unuseView(d);
          continue;
        }
        d ? (d.nr.used = !0, d.item = k) : (z = k[s], V = v.get(z), I ? V && V.length ? (d = V.pop(), d.item = k, d.nr.used = !0, d.nr.index = u, d.nr.key = c, d.nr.type = z) : d = this.addView(b, u, k, c, z) : (p = P.get(z) || 0, (!V || p >= V.length) && (d = this.addView(b, u, k, c, z), this.unuseView(d, !0), V = v.get(z)), d = V[p], d.item = k, d.nr.used = !0, d.nr.index = u, d.nr.key = c, d.nr.type = z, P.set(z, p + 1), p++), f.set(c, d)), i === null ? d.position = o[u - 1].accumulator : d.position = u * i;
      }
      return this.$_startIndex = h, this.$_endIndex = m, this.emitUpdate && this.$emit("update", h, m), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: I
      };
    },
    getListenerTarget() {
      let e = Xe(this.$el);
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, G ? {
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
  const l = ye("ResizeObserver"), a = be("observe-visibility");
  return W((y(), C("div", {
    class: ["vue-recycle-scroller", {
      ready: s.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...o) => r.handleScroll && r.handleScroll(...o))
  }, [
    e.$slots.before ? (y(), C("div", et, [
      D(e.$slots, "before")
    ])) : T("v-if", !0),
    K("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (y(!0), C(M, null, J(s.pool, (o) => (y(), C("div", {
        key: o.nr.id,
        style: s.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${o.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: s.hoverKey === o.nr.key }],
        onMouseenter: (f) => s.hoverKey = o.nr.key,
        onMouseleave: t[1] || (t[1] = (f) => s.hoverKey = null)
      }, [
        D(e.$slots, "default", {
          item: o.item,
          index: o.nr.index,
          active: o.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (y(), C("div", tt, [
      D(e.$slots, "after")
    ])) : T("v-if", !0),
    K(l, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
Z.render = it;
Z.__file = "src/components/RecycleScroller.vue";
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
  const s = x([]);
  L(() => {
    s.value = i;
  });
  const r = x([]);
  return L(() => {
    r.value = t;
  }), e && (s.value = Array.apply(null, e.selectedOptions).map((o) => o.value).filter((o) => o), r.value = Array.apply(null, e.options).reduce((o, f) => (o.push({ value: f.text, key: f.value, data: f.dataset }), o), [])), rt(r, (a = (l = e == null ? void 0 : e.id) != null ? l : n) != null ? a : "extraselect_" + (++lt).toString()), { options: r, selectedOptions: s };
}, le = async function(e, t = null, i = {}) {
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
  const a = x(0), o = x(!1), f = A(() => o.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const v = [];
      L((b) => {
        if (n.value.length >= s) {
          let h = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              h = !v.includes(n.value);
              break;
            case "complete":
              h = v.reduce((m, $) => m && !n.value.startsWith($), !0);
              break;
          }
          if (h) {
            o.value = !0;
            const m = setTimeout(() => {
              v.push(n.value), a.value += 1, le(t, n.value, l).then(($) => {
                e.actions.addRange($), e.actions.sort(), a.value -= 1, o.value = !1;
              });
            }, 500);
            b(() => {
              clearTimeout(m);
            });
          }
        }
      });
    } else
      le(t, null, l).then((v) => {
        e.actions.addRange(v), e.actions.sort();
      });
  return { searchingFlag: f };
}, ct = (e, t) => {
  const i = x(""), n = x([]), s = function(r, l) {
    return r.value.filter((o) => l.length > 0 ? o.value.toLowerCase().includes(l.toLowerCase()) : !0);
  };
  return L(() => {
    i.value.length >= t ? n.value = s(e, i.value) : n.value = [];
  }), { filterText: i, filteredOptions: n };
}, dt = (e, t, i, n, s) => {
  const r = function(f, v) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = v, h.measureText(f).width;
  }, l = function() {
    var f = N(i.value), v = N(document.querySelector("body"));
    n.value.style.top = -v.top + f.top;
  }, a = A(() => {
    var v;
    const f = (v = N(i.value).width) != null ? v : 100;
    if (s === "inherit")
      return f;
    if (s == null || s === "dynamic") {
      const b = getComputedStyle(document.querySelector("body")).font;
      return Math.max(f, Math.max(...e.value.map((h) => r(h.value, b))) + 15);
    }
    return s;
  }), o = x({
    position: "absolute",
    "min-width": "max-content"
  });
  return ge(() => {
    t.value.length < 0 && console.log("empty selection");
    var f = N(i.value), v = N(document.querySelector("body"));
    o.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-v.top + f.top + f.height).toString() + "px",
      left: (-v.left + f.left).toString() + "px"
    };
  }), { dropdownStyle: o, placeDropdown: l };
}, ft = { key: 0 }, ht = /* @__PURE__ */ S("h2", null, "selezione:", -1), pt = ["value"], vt = {
  key: 0,
  class: "input-searching"
}, mt = { class: "row-input" }, yt = ["checked"], bt = /* @__PURE__ */ S("b", null, "Select all", -1), gt = { class: "row-input" }, wt = ["checked"], _t = /* @__PURE__ */ S("b", null, "Select Filtered", -1), St = { key: 1 }, kt = { key: 2 }, zt = ["onClick"], Ot = { class: "row-input" }, $t = ["checked"], xt = ["value"], It = {
  __name: "ExtraSelect",
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    modelValue: { type: Array, required: !1 },
    url: { type: String, required: !1 },
    keepOpen: { type: Boolean, default: !1 },
    maxWidth: { type: String, default: "dynamic" },
    search: { type: Boolean, default: !0 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    showSelected: { type: Boolean, default: !1 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = e, n = A(() => {
      var p;
      return ((p = i.originalNode) == null ? void 0 : p.multiple) || i.multiple;
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
    ), f = x(null), v = x(null), b = x(null), h = x(!1);
    if (!i.keepOpen) {
      const p = function(u) {
        const c = nt(u.target);
        c.push(u.target), !c.includes(f.value) && !c.includes(v.value) && (h.value = !1);
      };
      we(() => {
        window.document.addEventListener("mousedown", p), window.document.addEventListener("focusin", p);
      }), _e(() => {
        window.document.removeEventListener("mousedown", p), window.document.removeEventListener("focusin", p);
      });
    }
    const { dropdownStyle: m, placeDropdown: $ } = dt(s, r, f, v, i.maxWidth), d = (p) => {
      n ? r.value.includes(p) ? r.value.splice(r.value.indexOf(p), 1) : r.value.push(p) : (r.value = [p], h.value = !1), t("update:modelValue", r.value);
    }, I = (p, u = null) => {
      u == null && (u = !k.value), u ? r.value = s.value.map((c) => c.key) : r.value = [], t("update:modelValue", r.value);
    }, P = () => {
      z.value ? a.value.forEach((p) => {
        r.value.includes(p.key) && r.value.splice(r.value.indexOf(p.key), 1);
      }) : a.value.forEach((p) => {
        r.value.includes(p.key) || r.value.push(p.key);
      }), t("update:modelValue", r.value);
    };
    L(() => {
      h.value ? ($(), i.search && Q(() => {
        b.value.focus({ focusVisible: !0 });
      })) : l.value = "";
    });
    const k = A(() => r.value.length == s.value.length), z = A(() => a.value.reduce((p, u) => p && r.value.includes(u.key), !0));
    A(() => r.value.length == 0);
    const V = A(() => {
      const p = r.value.map((u) => {
        var c;
        return (c = s.value.find((w) => w.key == u)) == null ? void 0 : c.value;
      }).join(", ");
      return p.length > 0 ? p : "--";
    });
    return (p, u) => (y(), _(M, null, [
      i.showSelected ? (y(), _("div", ft, [
        ht,
        (y(!0), _(M, null, J(g(r), (c) => (y(), _("div", { key: c }, q(c), 1))), 128))
      ])) : T("", !0),
      S("input", {
        onFocus: u[0] || (u[0] = (c) => h.value = !0),
        onClick: u[1] || (u[1] = (c) => h.value = !0),
        ref_key: "inputNode",
        ref: f,
        value: g(V),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, pt),
      (y(), C(ne, { to: "body" }, [
        W(S("div", {
          class: Se(["extra-select dropdown", { searching: g(o) > 0 }]),
          ref_key: "dropdownNode",
          ref: v,
          style: ke(g(m))
        }, [
          i.search ? (y(), _("div", vt, [
            W(S("input", {
              ref_key: "searchNode",
              ref: b,
              class: "extra-select-search",
              "onUpdate:modelValue": u[2] || (u[2] = (c) => ze(l) ? l.value = c : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Oe, g(l)]
            ])
          ])) : T("", !0),
          g(l).length >= i.minChars ? (y(), _(M, { key: 1 }, [
            g(n) ? (y(), _(M, { key: 0 }, [
              g(l).length == 0 ? (y(), _("div", {
                key: 0,
                onClick: I
              }, [
                S("div", mt, [
                  S("input", {
                    checked: g(k),
                    type: "checkbox"
                  }, null, 8, yt),
                  bt
                ])
              ])) : T("", !0),
              S("div", {
                onClick: u[3] || (u[3] = (c) => I(p.$e, !1))
              }, "Clear"),
              g(a).length > 0 && g(l).length > 0 ? (y(), _("div", {
                key: 1,
                onClick: P
              }, [
                S("div", gt, [
                  S("input", {
                    checked: g(z),
                    type: "checkbox"
                  }, null, 8, wt),
                  _t
                ])
              ])) : T("", !0)
            ], 64)) : T("", !0),
            g(a).length == 0 ? (y(), _("div", St, "No matches found")) : T("", !0)
          ], 64)) : (y(), _("div", kt, "Insert at least " + q(i.minChars) + " characters", 1)),
          K(g(Z), {
            items: g(a),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: $e(({ item: c }) => [
              S("div", {
                class: "dropdown-row",
                onClick: (w) => d(c.key),
                style: { height: "32px" }
              }, [
                S("div", Ot, [
                  g(n) ? (y(), _("input", {
                    key: 0,
                    checked: g(r).includes(c.key),
                    type: "checkbox"
                  }, null, 8, $t)) : T("", !0),
                  xe(" " + q(c.value), 1)
                ])
              ], 8, zt)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ie, h.value]
        ])
      ])),
      i.originalNode ? (y(), C(ne, {
        key: 1,
        to: i.originalNode
      }, [
        (y(!0), _(M, null, J(g(r), (c) => (y(), _("option", {
          key: c,
          selected: "selected",
          value: c
        }, null, 8, xt))), 128))
      ], 8, ["to"])) : T("", !0)
    ], 64));
  }
};
const de = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      de.bindNew(e);
    });
  },
  bindNew(e) {
    F.lock(e, "extra-select", () => {
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
      const n = Ve(It, t);
      n.mount(i), e.addEventListener("remove", function() {
        n.unmount(), i.remove(), e.remove(), F.remove(e, "extra-select");
      });
    });
  }
};
de.init();
export {
  de as default
};
