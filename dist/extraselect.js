(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { pushScopeId as pe, popScopeId as me, nextTick as te, openBlock as y, createBlock as A, withScopeId as ye, markRaw as ge, shallowReactive as be, resolveComponent as we, resolveDirective as _e, withDirectives as Y, renderSlot as W, createCommentVNode as E, createVNode as G, Fragment as j, renderList as J, ref as C, watchEffect as R, computed as M, watchPostEffect as Se, onMounted as ke, onUnmounted as ze, createElementBlock as z, unref as w, createTextVNode as se, toDisplayString as K, createElementVNode as O, Teleport as le, normalizeClass as $e, normalizeStyle as Oe, isRef as xe, vModelText as Ie, withCtx as Ce, vShow as Ve } from "vue";
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
let B;
function Q() {
  Q.init || (Q.init = !0, B = Te() !== -1);
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
    Q(), te(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", B && this.$el.appendChild(e), e.data = "about:blank", B || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!B && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ee = /* @__PURE__ */ ye("data-v-b329ee4c");
pe("data-v-b329ee4c");
const Ae = {
  class: "resize-observer",
  tabindex: "-1"
};
me();
const Le = /* @__PURE__ */ Ee((e, t, i, n, s, l) => (y(), A("div", Ae)));
q.render = Le;
q.__scopeId = "data-v-b329ee4c";
q.__file = "src/components/ResizeObserver.vue";
function D(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? D = function(t) {
    return typeof t;
  } : D = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, D(e);
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
function Ne(e, t, i) {
  return t && re(e.prototype, t), i && re(e, i), e;
}
function oe(e) {
  return Fe(e) || Pe(e) || je(e) || Re();
}
function Fe(e) {
  if (Array.isArray(e))
    return Z(e);
}
function Pe(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function je(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Z(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return Z(e, t);
  }
}
function Z(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = new Array(t); i < t; i++)
    n[i] = e[i];
  return n;
}
function Re() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Be(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, s, l, o = function(r) {
    for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
      m[p - 1] = arguments[p];
    if (l = m, !(n && r === s)) {
      var h = i.leading;
      typeof h == "function" && (h = h(r, s)), (!n || r !== s) && h && e.apply(void 0, [r].concat(oe(l))), s = r, clearTimeout(n), n = setTimeout(function() {
        e.apply(void 0, [r].concat(oe(l))), n = 0;
      }, t);
    }
  };
  return o._clear = function() {
    clearTimeout(n), n = null;
  }, o;
}
function de(e, t) {
  if (e === t)
    return !0;
  if (D(e) === "object") {
    for (var i in e)
      if (!de(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var De = /* @__PURE__ */ function() {
  function e(t, i, n) {
    Me(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, n);
  }
  return Ne(e, [{
    key: "createObserver",
    value: function(i, n) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = He(i), this.callback = function(a, r) {
          s.options.callback(a, r), a && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var l = this.options.throttleOptions || {}, o = l.leading;
          this.callback = Be(this.callback, this.options.throttle, {
            leading: function(r) {
              return o === "both" || o === "visible" && r || o === "hidden" && !r;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var r = a[0];
          if (a.length > 1) {
            var d = a.find(function(p) {
              return p.isIntersecting;
            });
            d && (r = d);
          }
          if (s.callback) {
            var m = r.isIntersecting && r.intersectionRatio >= s.threshold;
            if (m === s.oldResult)
              return;
            s.oldResult = m, s.callback(m, r);
          }
        }, this.options.intersection), te(function() {
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
function fe(e, t, i) {
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
  if (!de(n, s)) {
    var l = e._vue_visibilityState;
    if (!n) {
      he(e);
      return;
    }
    l ? l.createObserver(n, i) : fe(e, {
      value: n
    }, i);
  }
}
function he(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var qe = {
  beforeMount: fe,
  updated: Ue,
  unmounted: he
}, We = {
  itemsLimit: 1e3
}, Ke = /(auto|scroll)/;
function ve(e, t) {
  return e.parentNode === null ? t : ve(e.parentNode, t.concat([e]));
}
var X = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Xe = function(t) {
  return X(t, "overflow") + X(t, "overflow-y") + X(t, "overflow-x");
}, Ye = function(t) {
  return Ke.test(Xe(t));
};
function Ge(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = ve(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Ye(t[i]))
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
var Je = {
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
  return this.items.length && U(this.items[0]) !== "object";
}
var ee = !1;
if (typeof window < "u") {
  ee = !1;
  try {
    var Ze = Object.defineProperty({}, "passive", {
      get: function() {
        ee = !0;
      }
    });
    window.addEventListener("test", null, Ze);
  } catch {
  }
}
let et = 0;
var ie = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: q
  },
  directives: {
    ObserveVisibility: qe
  },
  props: {
    ...Je,
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
        let s = 1e4, l = 0, o;
        for (let a = 0, r = t.length; a < r; a++)
          o = t[a][i] || n, o < s && (s = o), l += o, e[a] = { accumulator: l, size: o };
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
      const l = ge({
        id: et++,
        index: t,
        used: !0,
        key: n,
        type: s
      }), o = be({
        item: i,
        position: 0,
        nr: l
      });
      return e.push(o), o;
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
      const i = this.itemSize, n = this.$_computedMinItemSize, s = this.typeField, l = this.simpleArray ? null : this.keyField, o = this.items, a = o.length, r = this.sizes, d = this.$_views, m = this.$_unusedViews, p = this.pool;
      let h, v, S;
      if (!a)
        h = v = S = 0;
      else if (this.$_prerender)
        h = 0, v = this.prerender, S = null;
      else {
        const f = this.getScroll();
        if (t) {
          let $ = f.start - this.$_lastUpdateScrollPosition;
          if ($ < 0 && ($ = -$), i === null && $ < n || $ < i)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = f.start;
        const _ = this.buffer;
        if (f.start -= _, f.end += _, i === null) {
          let $, N = 0, F = a - 1, k = ~~(a / 2), c;
          do
            c = k, $ = r[k].accumulator, $ < f.start ? N = k : k < a - 1 && r[k + 1].accumulator > f.start && (F = k), k = ~~((N + F) / 2);
          while (k !== c);
          for (k < 0 && (k = 0), h = k, S = r[a - 1].accumulator, v = k; v < a && r[v].accumulator < f.end; v++)
            ;
          v === -1 ? v = o.length - 1 : (v++, v > a && (v = a));
        } else
          h = ~~(f.start / i), v = Math.ceil(f.end / i), h < 0 && (h = 0), v > a && (v = a), S = a * i;
      }
      v - h > We.itemsLimit && this.itemsLimitError(), this.totalSize = S;
      let u;
      const x = h <= this.$_endIndex && v >= this.$_startIndex;
      if (this.$_continuous !== x) {
        if (x) {
          d.clear(), m.clear();
          for (let f = 0, _ = p.length; f < _; f++)
            u = p[f], this.unuseView(u);
        }
        this.$_continuous = x;
      } else if (x)
        for (let f = 0, _ = p.length; f < _; f++)
          u = p[f], u.nr.used && (e && (u.nr.index = o.findIndex(
            ($) => l ? $[l] === u.item[l] : $ === u.item
          )), (u.nr.index === -1 || u.nr.index < h || u.nr.index >= v) && this.unuseView(u));
      const H = x ? null : /* @__PURE__ */ new Map();
      let I, V, T, L;
      for (let f = h; f < v; f++) {
        I = o[f];
        const _ = l ? I[l] : I;
        if (_ == null)
          throw new Error(`Key is ${_} on item (keyField is '${l}')`);
        if (u = d.get(_), !i && !r[f].size) {
          u && this.unuseView(u);
          continue;
        }
        u ? (u.nr.used = !0, u.item = I) : (V = I[s], T = m.get(V), x ? T && T.length ? (u = T.pop(), u.item = I, u.nr.used = !0, u.nr.index = f, u.nr.key = _, u.nr.type = V) : u = this.addView(p, f, I, _, V) : (L = H.get(V) || 0, (!T || L >= T.length) && (u = this.addView(p, f, I, _, V), this.unuseView(u, !0), T = m.get(V)), u = T[L], u.item = I, u.nr.used = !0, u.nr.index = f, u.nr.key = _, u.nr.type = V, H.set(V, L + 1), L++), d.set(_, u)), i === null ? u.position = r[f - 1].accumulator : u.position = f * i;
      }
      return this.$_startIndex = h, this.$_endIndex = v, this.emitUpdate && this.$emit("update", h, v), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: x
      };
    },
    getListenerTarget() {
      let e = Ge(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, i = t === "vertical";
      let n;
      if (this.pageMode) {
        const s = e.getBoundingClientRect(), l = i ? s.height : s.width;
        let o = -(i ? s.top : s.left), a = i ? window.innerHeight : window.innerWidth;
        o < 0 && (a += o, o = 0), o + a > l && (a = l - o), n = {
          start: o,
          end: o + a
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, ee ? {
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
function nt(e, t, i, n, s, l) {
  const o = we("ResizeObserver"), a = _e("observe-visibility");
  return Y((y(), A("div", {
    class: ["vue-recycle-scroller", {
      ready: s.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...r) => l.handleScroll && l.handleScroll(...r))
  }, [
    e.$slots.before ? (y(), A("div", tt, [
      W(e.$slots, "before")
    ])) : E("v-if", !0),
    G("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (y(!0), A(j, null, J(s.pool, (r) => (y(), A("div", {
        key: r.nr.id,
        style: s.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${r.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: s.hoverKey === r.nr.key }],
        onMouseenter: (d) => s.hoverKey = r.nr.key,
        onMouseleave: t[1] || (t[1] = (d) => s.hoverKey = null)
      }, [
        W(e.$slots, "default", {
          item: r.item,
          index: r.nr.index,
          active: r.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (y(), A("div", it, [
      W(e.$slots, "after")
    ])) : E("v-if", !0),
    G(o, { onNotify: l.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, l.handleVisibilityChange]
  ]);
}
ie.render = nt;
ie.__file = "src/components/RecycleScroller.vue";
const ae = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}, ue = function(e, t) {
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
}, lt = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const i = {
    defaultArray: e.value,
    get: () => e.value,
    push: (n, s, l = null) => {
      const o = e.value.find((a) => a.key == n);
      o ? (o.value = s, o.data = l) : e.value.push({ value: s, key: n, data: l });
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
      n == null && (n = (s, l) => s.value.localeCompare(l.value)), e.value = e.value.sort(n);
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
let rt = 1;
const ot = (e) => {
  e && (e.style.display = "none", st(e));
}, at = (e, t, i, n) => {
  var o, a;
  const s = C([]);
  R(() => {
    s.value = i;
  });
  const l = C([]);
  return R(() => {
    l.value = t;
  }), e && (s.value = Array.apply(null, e.selectedOptions).map((r) => r.value).filter((r) => r), l.value = Array.apply(null, e.options).reduce((r, d) => (r.push({ value: d.text, key: d.value, data: d.dataset }), r), [])), lt(l, (a = (o = e == null ? void 0 : e.id) != null ? o : n) != null ? a : "extraselect_" + (++rt).toString()), { options: l, selectedOptions: s };
}, ce = async function(e, t = null, i = {}) {
  var l;
  const n = {
    method: "POST",
    credentials: "include",
    ...i,
    headers: { "Content-Type": "application/json", ...(l = i.headers) != null ? l : {} },
    body: JSON.stringify({ search: t, ...i.body })
  };
  return await (await fetch(e, n)).json();
}, ut = (e, t, i, n, s, l = "limited", o = {}) => {
  const a = C(0), r = C(!1), d = M(() => r.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const m = [];
      R((p) => {
        if (n.value.length >= s) {
          let h = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              h = !m.includes(n.value);
              break;
            case "complete":
              h = m.reduce((v, S) => v && !n.value.startsWith(S), !0);
              break;
          }
          if (h) {
            r.value = !0;
            const v = setTimeout(() => {
              m.push(n.value), a.value += 1, ce(t, n.value, o).then((S) => {
                e.actions.addRange(S), e.actions.sort(), a.value -= 1, r.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(v);
            });
          }
        }
      });
    } else
      ce(t, null, o).then((m) => {
        e.actions.addRange(m), e.actions.sort();
      });
  return { searchingFlag: d };
}, ct = (e, t) => {
  const i = C(""), n = C([]), s = function(l, o) {
    return l.value.filter((r) => o.length > 0 ? r.value.toLowerCase().includes(o.toLowerCase()) : !0);
  };
  return R(() => {
    i.value.length >= t ? n.value = s(e, i.value) : n.value = [];
  }), { filterText: i, filteredOptions: n };
}, dt = (e, t, i, n, s, l) => {
  const o = function(d, m) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = m, h.measureText(d).width;
  }, a = M(() => {
    var m;
    const d = (m = ae(n.value).width) != null ? m : 100;
    if (l === "inherit")
      return d;
    if (l == null || l === "dynamic") {
      const p = getComputedStyle(document.querySelector("body")).font;
      return Math.max(d, Math.max(...e.value.map((h) => o(h.value, p))) + 15);
    }
    return l;
  }), r = C({
    position: "absolute",
    "min-width": "max-content"
  });
  return Se(() => {
    i.value < 0 && console.log("is open"), t.value.length < 0 && console.log("empty selection");
    var d = ae(n.value);
    console.log(d), r.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (d.top + d.height).toString() + "px",
      left: d.left.toString() + "px"
    };
  }), { dropdownStyle: r };
}, ft = {
  key: 0,
  class: "extra-select selection"
}, ht = ["onClick"], vt = ["innerHTML"], pt = ["value"], mt = {
  key: 0,
  class: "input-searching"
}, yt = {
  key: 0,
  class: "allselect-clear"
}, gt = { class: "row-input" }, bt = ["checked"], wt = /* @__PURE__ */ O("b", null, "Select all", -1), _t = { class: "row-input" }, St = ["checked"], kt = /* @__PURE__ */ O("b", null, "Select Filtered", -1), zt = {
  key: 1,
  class: "no-matches"
}, $t = { key: 2 }, Ot = ["onClick"], xt = { class: "row-input" }, It = ["checked"], Ct = ["value"], Tt = {
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
  setup(e, { emit: t }) {
    var N, F, k;
    const i = e, n = M(() => {
      var c, g;
      return (g = (c = i.originalNode) == null ? void 0 : c.multiple) != null ? g : i.multiple;
    }), { options: s, selectedOptions: l } = at(i.originalNode, i.options, i.modelValue), o = (N = i.originalNode) == null ? void 0 : N.classList, a = Object.values((k = (F = i.originalNode) == null ? void 0 : F.style) != null ? k : {});
    ot(i.originalNode);
    const { filterText: r, filteredOptions: d } = ct(s, i.minChars), { searchingFlag: m } = ut(
      s,
      i.url,
      i.searchableUrl,
      r,
      i.minChars,
      i.fetchMode,
      i.fetchOptions
    ), p = C(null), h = C(null), v = C(null), S = C(!1), u = C(null), x = function(c) {
      const g = ue(c.target);
      g.push(c.target), !g.includes(p.value) && !g.includes(h.value) && (S.value = !1);
    };
    ke(() => {
      if (i.dropdownContainer && (u.value = ue(p.value).find((c) => c instanceof Element && c.matches(i.dropdownContainer))), u.value == null && (u.value = document.querySelector("body")), i.originalNode) {
        for (let c of o)
          c != "extraselect" && p.value.classList.add(c);
        for (let c of a)
          p.value.style[c] = i.originalNode.style[c];
        a.includes("background-color") || (p.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", x), window.document.addEventListener("focusin", x);
    }), ze(() => {
      window.document.removeEventListener("mousedown", x), window.document.removeEventListener("focusin", x);
    });
    const { dropdownStyle: H } = dt(s, l, S, p, h, i.maxWidth), I = (c) => {
      n.value ? l.value.includes(c) ? l.value.splice(l.value.indexOf(c), 1) : l.value.push(c) : (l.value = [c], S.value = !1), t("update:modelValue", l.value);
    }, V = (c) => {
      T(c, !1), r.value = "";
    }, T = (c, g = null) => {
      g == null && (g = !f.value), g ? l.value = s.value.map((b) => b.key) : l.value = [], t("update:modelValue", l.value);
    }, L = () => {
      _.value ? d.value.forEach((c) => {
        l.value.includes(c.key) && l.value.splice(l.value.indexOf(c.key), 1);
      }) : d.value.forEach((c) => {
        l.value.includes(c.key) || l.value.push(c.key);
      }), t("update:modelValue", l.value);
    };
    R(() => {
      S.value ? i.search && te(() => {
        v.value.focus({ focusVisible: !0 });
      }) : r.value = "";
    });
    const f = M(() => l.value.length == s.value.length), _ = M(() => d.value.reduce((c, g) => c && l.value.includes(g.key), !0));
    M(() => l.value.length == 0);
    const $ = M(() => {
      const c = l.value.map((g) => {
        var b;
        return (b = s.value.find((P) => P.key == g)) == null ? void 0 : b.value;
      }).join(", ");
      return c.length > 0 ? c : "--";
    });
    return (c, g) => (y(), z(j, null, [
      i.showSelected ? (y(), z("div", ft, [
        (y(!0), z(j, null, J(w(l), (b) => {
          var P;
          return y(), z("div", {
            key: b,
            onClick: (ne) => I(b),
            class: "selection-badge"
          }, [
            se(K((P = w(s).find((ne) => ne.key == b)) == null ? void 0 : P.value) + " ", 1),
            O("div", {
              class: "selection-remove",
              innerHTML: i.removeIcon
            }, null, 8, vt)
          ], 8, ht);
        }), 128))
      ])) : E("", !0),
      O("input", {
        onFocus: g[0] || (g[0] = (b) => S.value = !0),
        onClick: g[1] || (g[1] = (b) => S.value = !0),
        ref_key: "inputNode",
        ref: p,
        value: w($),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, pt),
      u.value ? (y(), A(le, {
        key: 1,
        to: u.value
      }, [
        Y(O("div", {
          class: $e(["extra-select dropdown", { searching: w(m) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: Oe(w(H))
        }, [
          i.search ? (y(), z("div", mt, [
            Y(O("input", {
              ref_key: "searchNode",
              ref: v,
              class: "extra-select-search",
              "onUpdate:modelValue": g[2] || (g[2] = (b) => xe(r) ? r.value = b : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [Ie, w(r)]
            ])
          ])) : E("", !0),
          w(r).length >= i.minChars ? (y(), z(j, { key: 1 }, [
            w(n) ? (y(), z("div", yt, [
              w(r).length == 0 ? (y(), z("div", {
                key: 0,
                onClick: T,
                class: "all-select"
              }, [
                O("div", gt, [
                  O("input", {
                    checked: w(f),
                    type: "checkbox"
                  }, null, 8, bt),
                  wt
                ])
              ])) : E("", !0),
              w(d).length > 0 && w(r).length > 0 ? (y(), z("div", {
                key: 1,
                onClick: L,
                class: "all-select"
              }, [
                O("div", _t, [
                  O("input", {
                    checked: w(_),
                    type: "checkbox"
                  }, null, 8, St),
                  kt
                ])
              ])) : E("", !0),
              O("div", {
                class: "clear",
                onClick: V
              }, "Clear")
            ])) : E("", !0),
            w(d).length == 0 ? (y(), z("div", zt, "No matches found")) : E("", !0)
          ], 64)) : (y(), z("div", $t, "Insert at least " + K(i.minChars) + " characters", 1)),
          G(w(ie), {
            items: w(d),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: Ce(({ item: b }) => [
              O("div", {
                class: "dropdown-row",
                onClick: (P) => I(b.key),
                style: { height: "32px" }
              }, [
                O("div", xt, [
                  w(n) ? (y(), z("input", {
                    key: 0,
                    checked: w(l).includes(b.key),
                    type: "checkbox"
                  }, null, 8, It)) : E("", !0),
                  se(" " + K(b.value), 1)
                ])
              ], 8, Ot)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ve, S.value]
        ])
      ], 8, ["to"])) : E("", !0),
      i.originalNode ? (y(), A(le, {
        key: 2,
        to: i.originalNode
      }, [
        (y(!0), z(j, null, J(w(l), (b) => (y(), z("option", {
          key: b,
          selected: "selected",
          value: b
        }, null, 8, Ct))), 128))
      ], 8, ["to"])) : E("", !0)
    ], 64));
  }
};
export {
  Tt as default
};
