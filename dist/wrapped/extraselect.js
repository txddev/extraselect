(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { pushScopeId as ge, popScopeId as be, nextTick as se, openBlock as y, createBlock as N, withScopeId as we, markRaw as _e, shallowReactive as Se, resolveComponent as ke, resolveDirective as xe, withDirectives as G, renderSlot as X, createCommentVNode as E, createVNode as Q, Fragment as R, renderList as Z, ref as C, watchEffect as H, computed as M, watchPostEffect as ze, onMounted as Oe, onUnmounted as $e, createElementBlock as x, unref as w, createTextVNode as le, toDisplayString as J, createElementVNode as O, Teleport as oe, normalizeClass as Ie, normalizeStyle as Ce, isRef as Ve, vModelText as Te, withCtx as Ee, vShow as Ae, createApp as Ne } from "vue";
const A = /* @__PURE__ */ new WeakMap();
class B {
  static put(t, i, s) {
    A.has(t) || A.set(t, /* @__PURE__ */ new Map()), A.get(t).set(i, s);
  }
  static get(t, i) {
    return A.get(t).get(i);
  }
  static has(t, i) {
    return A.has(t) && A.get(t).has(i);
  }
  static remove(t, i) {
    var s = A.get(t).delete(i);
    return !A.get(t).size === 0 && A.delete(t), s;
  }
  static lock(t, i, s) {
    return B.has(t, i) ? !1 : (B.put(t, i, !0), s());
  }
}
window.__Store = A;
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
let q;
function ee() {
  ee.init || (ee.init = !0, q = Le() !== -1);
}
var K = {
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
    ee(), se(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", q && this.$el.appendChild(e), e.data = "about:blank", q || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!q && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Me = /* @__PURE__ */ we("data-v-b329ee4c");
ge("data-v-b329ee4c");
const Fe = {
  class: "resize-observer",
  tabindex: "-1"
};
be();
const Pe = /* @__PURE__ */ Me((e, t, i, s, n, r) => (y(), N("div", Fe)));
K.render = Pe;
K.__scopeId = "data-v-b329ee4c";
K.__file = "src/components/ResizeObserver.vue";
function U(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(t) {
    return typeof t;
  } : U = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, U(e);
}
function je(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ae(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function Re(e, t, i) {
  return t && ae(e.prototype, t), i && ae(e, i), e;
}
function ue(e) {
  return He(e) || Be(e) || De(e) || qe();
}
function He(e) {
  if (Array.isArray(e))
    return te(e);
}
function Be(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function De(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return te(e, t);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
      return Array.from(e);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
      return te(e, t);
  }
}
function te(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, s = new Array(t); i < t; i++)
    s[i] = e[i];
  return s;
}
function qe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ue(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function We(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, n, r, o = function(l) {
    for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), p = 1; p < d; p++)
      m[p - 1] = arguments[p];
    if (r = m, !(s && l === n)) {
      var h = i.leading;
      typeof h == "function" && (h = h(l, n)), (!s || l !== n) && h && e.apply(void 0, [l].concat(ue(r))), n = l, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [l].concat(ue(r))), s = 0;
      }, t);
    }
  };
  return o._clear = function() {
    clearTimeout(s), s = null;
  }, o;
}
function he(e, t) {
  if (e === t)
    return !0;
  if (U(e) === "object") {
    for (var i in e)
      if (!he(e[i], t[i]))
        return !1;
    return !0;
  }
  return !1;
}
var Ke = /* @__PURE__ */ function() {
  function e(t, i, s) {
    je(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(i, s);
  }
  return Re(e, [{
    key: "createObserver",
    value: function(i, s) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Ue(i), this.callback = function(a, l) {
          n.options.callback(a, l), a && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var r = this.options.throttleOptions || {}, o = r.leading;
          this.callback = We(this.callback, this.options.throttle, {
            leading: function(l) {
              return o === "both" || o === "visible" && l || o === "hidden" && !l;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(a) {
          var l = a[0];
          if (a.length > 1) {
            var d = a.find(function(p) {
              return p.isIntersecting;
            });
            d && (l = d);
          }
          if (n.callback) {
            var m = l.isIntersecting && l.intersectionRatio >= n.threshold;
            if (m === n.oldResult)
              return;
            n.oldResult = m, n.callback(m, l);
          }
        }, this.options.intersection), se(function() {
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
function ve(e, t, i) {
  var s = t.value;
  if (!!s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Ke(e, s, i);
      e._vue_visibilityState = n;
    }
}
function Xe(e, t, i) {
  var s = t.value, n = t.oldValue;
  if (!he(s, n)) {
    var r = e._vue_visibilityState;
    if (!s) {
      pe(e);
      return;
    }
    r ? r.createObserver(s, i) : ve(e, {
      value: s
    }, i);
  }
}
function pe(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Je = {
  beforeMount: ve,
  updated: Xe,
  unmounted: pe
}, Ye = {
  itemsLimit: 1e3
}, Ge = /(auto|scroll)/;
function me(e, t) {
  return e.parentNode === null ? t : me(e.parentNode, t.concat([e]));
}
var Y = function(t, i) {
  return getComputedStyle(t, null).getPropertyValue(i);
}, Qe = function(t) {
  return Y(t, "overflow") + Y(t, "overflow-y") + Y(t, "overflow-x");
}, Ze = function(t) {
  return Ge.test(Qe(t));
};
function et(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = me(e.parentNode, []), i = 0; i < t.length; i += 1)
      if (Ze(t[i]))
        return t[i];
    return document.scrollingElement || document.documentElement;
  }
}
function W(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? W = function(t) {
    return typeof t;
  } : W = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, W(e);
}
var tt = {
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
function it() {
  return this.items.length && W(this.items[0]) !== "object";
}
var ie = !1;
if (typeof window < "u") {
  ie = !1;
  try {
    var st = Object.defineProperty({}, "passive", {
      get: function() {
        ie = !0;
      }
    });
    window.addEventListener("test", null, st);
  } catch {
  }
}
let nt = 0;
var ne = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: K
  },
  directives: {
    ObserveVisibility: Je
  },
  props: {
    ...tt,
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
    simpleArray: it
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
      const r = _e({
        id: nt++,
        index: t,
        used: !0,
        key: s,
        type: n
      }), o = Se({
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
      const i = this.itemSize, s = this.$_computedMinItemSize, n = this.typeField, r = this.simpleArray ? null : this.keyField, o = this.items, a = o.length, l = this.sizes, d = this.$_views, m = this.$_unusedViews, p = this.pool;
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
          let z, F = 0, P = a - 1, k = ~~(a / 2), c;
          do
            c = k, z = l[k].accumulator, z < f.start ? F = k : k < a - 1 && l[k + 1].accumulator > f.start && (P = k), k = ~~((F + P) / 2);
          while (k !== c);
          for (k < 0 && (k = 0), h = k, S = l[a - 1].accumulator, v = k; v < a && l[v].accumulator < f.end; v++)
            ;
          v === -1 ? v = o.length - 1 : (v++, v > a && (v = a));
        } else
          h = ~~(f.start / i), v = Math.ceil(f.end / i), h < 0 && (h = 0), v > a && (v = a), S = a * i;
      }
      v - h > Ye.itemsLimit && this.itemsLimitError(), this.totalSize = S;
      let u;
      const $ = h <= this.$_endIndex && v >= this.$_startIndex;
      if (this.$_continuous !== $) {
        if ($) {
          d.clear(), m.clear();
          for (let f = 0, _ = p.length; f < _; f++)
            u = p[f], this.unuseView(u);
        }
        this.$_continuous = $;
      } else if ($)
        for (let f = 0, _ = p.length; f < _; f++)
          u = p[f], u.nr.used && (e && (u.nr.index = o.findIndex(
            (z) => r ? z[r] === u.item[r] : z === u.item
          )), (u.nr.index === -1 || u.nr.index < h || u.nr.index >= v) && this.unuseView(u));
      const D = $ ? null : /* @__PURE__ */ new Map();
      let I, V, T, L;
      for (let f = h; f < v; f++) {
        I = o[f];
        const _ = r ? I[r] : I;
        if (_ == null)
          throw new Error(`Key is ${_} on item (keyField is '${r}')`);
        if (u = d.get(_), !i && !l[f].size) {
          u && this.unuseView(u);
          continue;
        }
        u ? (u.nr.used = !0, u.item = I) : (V = I[n], T = m.get(V), $ ? T && T.length ? (u = T.pop(), u.item = I, u.nr.used = !0, u.nr.index = f, u.nr.key = _, u.nr.type = V) : u = this.addView(p, f, I, _, V) : (L = D.get(V) || 0, (!T || L >= T.length) && (u = this.addView(p, f, I, _, V), this.unuseView(u, !0), T = m.get(V)), u = T[L], u.item = I, u.nr.used = !0, u.nr.index = f, u.nr.key = _, u.nr.type = V, D.set(V, L + 1), L++), d.set(_, u)), i === null ? u.position = l[f - 1].accumulator : u.position = f * i;
      }
      return this.$_startIndex = h, this.$_endIndex = v, this.emitUpdate && this.$emit("update", h, v), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: $
      };
    },
    getListenerTarget() {
      let e = et(this.$el);
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, ie ? {
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
const rt = {
  key: 0,
  class: "vue-recycle-scroller__slot"
}, lt = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function ot(e, t, i, s, n, r) {
  const o = ke("ResizeObserver"), a = xe("observe-visibility");
  return G((y(), N("div", {
    class: ["vue-recycle-scroller", {
      ready: n.ready,
      "page-mode": i.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...l) => r.handleScroll && r.handleScroll(...l))
  }, [
    e.$slots.before ? (y(), N("div", rt, [
      X(e.$slots, "before")
    ])) : E("v-if", !0),
    Q("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (y(!0), N(R, null, Z(n.pool, (l) => (y(), N("div", {
        key: l.nr.id,
        style: n.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${l.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: n.hoverKey === l.nr.key }],
        onMouseenter: (d) => n.hoverKey = l.nr.key,
        onMouseleave: t[1] || (t[1] = (d) => n.hoverKey = null)
      }, [
        X(e.$slots, "default", {
          item: l.item,
          index: l.nr.index,
          active: l.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (y(), N("div", lt, [
      X(e.$slots, "after")
    ])) : E("v-if", !0),
    Q(o, { onNotify: r.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [a, r.handleVisibilityChange]
  ]);
}
ne.render = ot;
ne.__file = "src/components/RecycleScroller.vue";
const ce = function(e) {
  if (e == null)
    return { top: 0, left: 0 };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}, de = function(e, t) {
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
  H(() => {
    n.value = i;
  });
  const r = C([]);
  return H(() => {
    r.value = t;
  }), e && (n.value = Array.apply(null, e.selectedOptions).map((l) => l.value).filter((l) => l), r.value = Array.apply(null, e.options).reduce((l, d) => (l.push({ value: d.text, key: d.value, data: d.dataset }), l), [])), ut(r, (a = (o = e == null ? void 0 : e.id) != null ? o : s) != null ? a : "extraselect_" + (++ct).toString()), { options: r, selectedOptions: n };
}, fe = async function(e, t = null, i = {}) {
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
  const a = C(0), l = C(!1), d = M(() => l.value || a.value > 0);
  if (t != null && t.length > 0)
    if (i) {
      const m = [];
      H((p) => {
        if (s.value.length >= n) {
          let h = !0;
          switch (r) {
            case "always":
              break;
            default:
            case "limited":
              h = !m.includes(s.value);
              break;
            case "complete":
              h = m.reduce((v, S) => v && !s.value.startsWith(S), !0);
              break;
          }
          if (h) {
            l.value = !0;
            const v = setTimeout(() => {
              m.push(s.value), a.value += 1, fe(t, s.value, o).then((S) => {
                e.actions.addRange(S), e.actions.sort(), a.value -= 1, l.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(v);
            });
          }
        }
      });
    } else
      fe(t, null, o).then((m) => {
        e.actions.addRange(m), e.actions.sort();
      });
  return { searchingFlag: d };
}, vt = (e, t) => {
  const i = C(""), s = C([]), n = function(r, o) {
    return r.value.filter((l) => o.length > 0 ? l.value.toLowerCase().includes(o.toLowerCase()) : !0);
  };
  return H(() => {
    i.value.length >= t ? s.value = n(e, i.value) : s.value = [];
  }), { filterText: i, filteredOptions: s };
}, pt = (e, t, i, s, n, r) => {
  const o = function(d, m) {
    const h = document.createElement("canvas").getContext("2d");
    return h.font = m, h.measureText(d).width;
  }, a = M(() => {
    var m;
    const d = (m = ce(s.value).width) != null ? m : 100;
    if (r === "inherit")
      return d;
    if (r == null || r === "dynamic") {
      const p = getComputedStyle(document.querySelector("body")).font;
      return Math.max(d, Math.max(...e.value.map((h) => o(h.value, p))) + 15);
    }
    return r;
  }), l = C({
    position: "absolute",
    "min-width": "max-content"
  });
  return ze(() => {
    i.value < 0 && console.log("is open"), t.value.length < 0 && console.log("empty selection");
    var d = ce(s.value);
    console.log(d), l.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (d.top + d.height).toString() + "px",
      left: d.left.toString() + "px"
    };
  }), { dropdownStyle: l };
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
}, Ct = { key: 2 }, Vt = ["onClick"], Tt = { class: "row-input" }, Et = ["checked"], At = ["value"], Nt = {
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
    dropdownContainer: { type: String, default: "body" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var F, P, k;
    const i = e, s = M(() => {
      var c, g;
      return (g = (c = i.originalNode) == null ? void 0 : c.multiple) != null ? g : i.multiple;
    }), { options: n, selectedOptions: r } = ft(i.originalNode, i.options, i.modelValue), o = (F = i.originalNode) == null ? void 0 : F.classList, a = Object.values((k = (P = i.originalNode) == null ? void 0 : P.style) != null ? k : {});
    dt(i.originalNode);
    const { filterText: l, filteredOptions: d } = vt(n, i.minChars), { searchingFlag: m } = ht(
      n,
      i.url,
      i.searchableUrl,
      l,
      i.minChars,
      i.fetchMode,
      i.fetchOptions
    ), p = C(null), h = C(null), v = C(null), S = C(!1), u = C(null), $ = function(c) {
      const g = de(c.target);
      g.push(c.target), !g.includes(p.value) && !g.includes(h.value) && (S.value = !1);
    };
    Oe(() => {
      if (u.value = de(p.value).find((c) => c.matches(i.dropdownContainer)), u.value == null && (u.value = document.querySelector("body")), i.originalNode) {
        for (let c of o)
          c != "extraselect" && p.value.classList.add(c);
        for (let c of a)
          p.value.style[c] = i.originalNode.style[c];
        a.includes("background-color") || (p.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", $), window.document.addEventListener("focusin", $);
    }), $e(() => {
      window.document.removeEventListener("mousedown", $), window.document.removeEventListener("focusin", $);
    });
    const { dropdownStyle: D } = pt(n, r, S, p, h, i.maxWidth), I = (c) => {
      s.value ? r.value.includes(c) ? r.value.splice(r.value.indexOf(c), 1) : r.value.push(c) : (r.value = [c], S.value = !1), t("update:modelValue", r.value);
    }, V = (c) => {
      T(c, !1), l.value = "";
    }, T = (c, g = null) => {
      g == null && (g = !f.value), g ? r.value = n.value.map((b) => b.key) : r.value = [], t("update:modelValue", r.value);
    }, L = () => {
      _.value ? d.value.forEach((c) => {
        r.value.includes(c.key) && r.value.splice(r.value.indexOf(c.key), 1);
      }) : d.value.forEach((c) => {
        r.value.includes(c.key) || r.value.push(c.key);
      }), t("update:modelValue", r.value);
    };
    H(() => {
      S.value ? i.search && se(() => {
        v.value.focus({ focusVisible: !0 });
      }) : l.value = "";
    });
    const f = M(() => r.value.length == n.value.length), _ = M(() => d.value.reduce((c, g) => c && r.value.includes(g.key), !0));
    M(() => r.value.length == 0);
    const z = M(() => {
      const c = r.value.map((g) => {
        var b;
        return (b = n.value.find((j) => j.key == g)) == null ? void 0 : b.value;
      }).join(", ");
      return c.length > 0 ? c : "--";
    });
    return (c, g) => (y(), x(R, null, [
      i.showSelected ? (y(), x("div", mt, [
        (y(!0), x(R, null, Z(w(r), (b) => {
          var j;
          return y(), x("div", {
            key: b,
            onClick: (re) => I(b),
            class: "selection-badge"
          }, [
            le(J((j = w(n).find((re) => re.key == b)) == null ? void 0 : j.value) + " ", 1),
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
        ref: p,
        value: w(z),
        class: "extra-select extra-select-input",
        readonly: ""
      }, null, 40, bt),
      u.value ? (y(), N(oe, {
        key: 1,
        to: u.value
      }, [
        G(O("div", {
          class: Ie(["extra-select dropdown", { searching: w(m) > 0 }]),
          ref_key: "dropdownNode",
          ref: h,
          style: Ce(w(D))
        }, [
          i.search ? (y(), x("div", wt, [
            G(O("input", {
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
              [Te, w(l)]
            ])
          ])) : E("", !0),
          w(l).length >= i.minChars ? (y(), x(R, { key: 1 }, [
            w(s) ? (y(), x("div", _t, [
              w(l).length == 0 ? (y(), x("div", {
                key: 0,
                onClick: T,
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
              w(d).length > 0 && w(l).length > 0 ? (y(), x("div", {
                key: 1,
                onClick: L,
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
                onClick: V
              }, "Clear")
            ])) : E("", !0),
            w(d).length == 0 ? (y(), x("div", It, "No matches found")) : E("", !0)
          ], 64)) : (y(), x("div", Ct, "Insert at least " + J(i.minChars) + " characters", 1)),
          Q(w(ne), {
            items: w(d),
            "item-size": 32,
            "key-field": "key",
            class: "scroller"
          }, {
            default: Ee(({ item: b }) => [
              O("div", {
                class: "dropdown-row",
                onClick: (j) => I(b.key),
                style: { height: "32px" }
              }, [
                O("div", Tt, [
                  w(s) ? (y(), x("input", {
                    key: 0,
                    checked: w(r).includes(b.key),
                    type: "checkbox"
                  }, null, 8, Et)) : E("", !0),
                  le(" " + J(b.value), 1)
                ])
              ], 8, Vt)
            ]),
            _: 1
          }, 8, ["items"])
        ], 6), [
          [Ae, S.value]
        ])
      ], 8, ["to"])) : E("", !0),
      i.originalNode ? (y(), N(oe, {
        key: 2,
        to: i.originalNode
      }, [
        (y(!0), x(R, null, Z(w(r), (b) => (y(), x("option", {
          key: b,
          selected: "selected",
          value: b
        }, null, 8, At))), 128))
      ], 8, ["to"])) : E("", !0)
    ], 64));
  }
}, ye = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      ye.bindNew(e);
    });
  },
  bindNew(e) {
    B.lock(e, "extra-select", () => {
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
      const s = Ne(Nt, t);
      s.mount(i), e.addEventListener("remove", function() {
        s.unmount(), i.remove(), e.remove(), B.remove(e, "extra-select");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  ye.init();
});
export {
  ye as default
};
