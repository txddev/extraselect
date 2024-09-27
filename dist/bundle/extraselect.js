const Be = /* @__PURE__ */ new WeakMap();
class De {
  static put(t, n, s) {
    Be.has(t) || Be.set(t, /* @__PURE__ */ new Map()), Be.get(t).set(n, s);
  }
  static get(t, n) {
    return Be.get(t).get(n);
  }
  static has(t, n) {
    return Be.has(t) && Be.get(t).has(n);
  }
  static remove(t, n) {
    var s = Be.get(t).delete(n);
    return Be.get(t).size !== 0 && Be.delete(t), s;
  }
  static lock(t, n, s) {
    if (!De.has(t, n)) {
      De.put(t, n, !0);
      const r = s();
      return r !== void 0 && De.put(t, n, r), r;
    }
    return !1;
  }
  static async lockAsync(t, n, s) {
    if (!De.has(t, n)) {
      De.put(t, n, !0);
      const r = await s();
      return r !== void 0 && De.put(t, n, r), r;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Be);
function an(e) {
  if (e == null)
    return { top: 0, left: 0, width: null, height: null };
  let t = e.getBoundingClientRect();
  return {
    top: t.top + window.scrollY,
    left: t.left + window.scrollX,
    width: t.width,
    height: t.height
  };
}
function Ot(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s instanceof HTMLElement && !(t instanceof HTMLElement && s === t) && !(typeof t == "string" && s.matches(t)); ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return s != null && n.push(s), n;
}
function li(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(n) {
    e.removeChild(n);
  });
}
/**
* @vue/shared v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ys(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = {}, At = [], ze = () => {
}, ii = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _s = (e) => e.startsWith("onUpdate:"), me = Object.assign, bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, oi = Object.prototype.hasOwnProperty, z = (e, t) => oi.call(e, t), I = Array.isArray, Mt = (e) => ln(e) === "[object Map]", Vt = (e) => ln(e) === "[object Set]", qs = (e) => ln(e) === "[object Date]", V = (e) => typeof e == "function", se = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Mr = (e) => (ee(e) || V(e)) && V(e.then) && V(e.catch), Fr = Object.prototype.toString, ln = (e) => Fr.call(e), ci = (e) => ln(e).slice(8, -1), Ir = (e) => ln(e) === "[object Object]", ws = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ ys(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ui = /-(\w)/g, mt = Nn(
  (e) => e.replace(ui, (t, n) => n ? n.toUpperCase() : "")
), ai = /\B([A-Z])/g, bt = Nn(
  (e) => e.replace(ai, "-$1").toLowerCase()
), Pr = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), qn = Nn(
  (e) => e ? `on${Pr(e)}` : ""
), it = (e, t) => !Object.is(e, t), _n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Rr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Cn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Gs;
const Lr = () => Gs || (Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = se(s) ? pi(s) : Dt(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else if (se(e) || ee(e))
    return e;
}
const fi = /;(?![^(]*\))/g, di = /:([^]+)/, hi = /\/\*[^]*?\*\//g;
function pi(e) {
  const t = {};
  return e.replace(hi, "").split(fi).forEach((n) => {
    if (n) {
      const s = n.split(di);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ht(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ht(e[n]);
      s && (t += s + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Nr(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !se(t) && (e.class = Ht(t)), n && (e.style = Dt(n)), e;
}
const gi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mi = /* @__PURE__ */ ys(gi);
function Vr(e) {
  return !!e || e === "";
}
function vi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = vt(e[s], t[s]);
  return n;
}
function vt(e, t) {
  if (e === t) return !0;
  let n = qs(e), s = qs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ge(e), s = Ge(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? vi(e, t) : !1;
  if (n = ee(e), s = ee(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const i in e) {
      const o = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (o && !c || !o && c || !vt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function xs(e, t) {
  return e.findIndex((n) => vt(n, t));
}
const Dr = (e) => !!(e && e.__v_isRef === !0), Ve = (e) => se(e) ? e : e == null ? "" : I(e) || ee(e) && (e.toString === Fr || !V(e.toString)) ? Dr(e) ? Ve(e.value) : JSON.stringify(e, Hr, 2) : String(e), Hr = (e, t) => Dr(t) ? Hr(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], l) => (n[Gn(s, l) + " =>"] = r, n),
    {}
  )
} : Vt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gn(n))
} : Ge(t) ? Gn(t) : ee(t) && !I(t) && !Ir(t) ? String(t) : t, Gn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ge(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Se;
class yi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Se;
      try {
        return Se = this, t();
      } finally {
        Se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Se = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Se = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function kr() {
  return Se;
}
function _i(e, t = !1) {
  Se && Se.cleanups.push(e);
}
let Q;
const Jn = /* @__PURE__ */ new WeakSet();
class $r {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && Se.active && Se.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ur(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Js(this), Br(this);
    const t = Q, n = He;
    Q = this, He = !0;
    try {
      return this.fn();
    } finally {
      Wr(this), Q = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cs(t);
      this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    rs(this) && this.run();
  }
  get dirty() {
    return rs(this);
  }
}
let jr = 0, Ct;
function Ur(e) {
  e.flags |= 8, e.next = Ct, Ct = e;
}
function Ss() {
  jr++;
}
function Es() {
  if (--jr > 0)
    return;
  let e;
  for (; Ct; ) {
    let t = Ct, n;
    for (; t; )
      t.flags &= -9, t = t.next;
    for (t = Ct, Ct = void 0; t; ) {
      if (t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      n = t.next, t.next = void 0, t = n;
    }
  }
  if (e) throw e;
}
function Br(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Cs(s), bi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function rs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Kr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Kr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt))
    return;
  e.globalVersion = Zt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !rs(e)) {
    e.flags &= -3;
    return;
  }
  const n = Q, s = He;
  Q = e, He = !0;
  try {
    Br(e);
    const r = e.fn(e._value);
    (t.version === 0 || it(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Q = n, He = s, Wr(e), e.flags &= -3;
  }
}
function Cs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Cs(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function bi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const zr = [];
function ct() {
  zr.push(He), He = !1;
}
function ut() {
  const e = zr.pop();
  He = e === void 0 ? !0 : e;
}
function Js(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let Zt = 0;
class wi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ts {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Q || !He || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new wi(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, qr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    Ss();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Es();
    }
  }
}
function qr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        qr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Tn = /* @__PURE__ */ new WeakMap(), gt = Symbol(
  ""
), ls = Symbol(
  ""
), Qt = Symbol(
  ""
);
function we(e, t, n) {
  if (He && Q) {
    let s = Tn.get(e);
    s || Tn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ts()), r.target = e, r.map = s, r.key = n), r.track();
  }
}
function et(e, t, n, s, r, l) {
  const i = Tn.get(e);
  if (!i) {
    Zt++;
    return;
  }
  const o = (c) => {
    c && c.trigger();
  };
  if (Ss(), t === "clear")
    i.forEach(o);
  else {
    const c = I(e), a = c && ws(n);
    if (c && n === "length") {
      const f = Number(s);
      i.forEach((h, p) => {
        (p === "length" || p === Qt || !Ge(p) && p >= f) && o(h);
      });
    } else
      switch (n !== void 0 && o(i.get(n)), a && o(i.get(Qt)), t) {
        case "add":
          c ? a && o(i.get("length")) : (o(i.get(gt)), Mt(e) && o(i.get(ls)));
          break;
        case "delete":
          c || (o(i.get(gt)), Mt(e) && o(i.get(ls)));
          break;
        case "set":
          Mt(e) && o(i.get(gt));
          break;
      }
  }
  Es();
}
function xi(e, t) {
  const n = Tn.get(e);
  return n && n.get(t);
}
function St(e) {
  const t = B(e);
  return t === e ? t : (we(t, "iterate", Qt), Pe(e) ? t : t.map(ye));
}
function Vn(e) {
  return we(e = B(e), "iterate", Qt), e;
}
const Si = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, ye);
  },
  concat(...e) {
    return St(this).concat(
      ...e.map((t) => I(t) ? St(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = ye(e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(this, "filter", e, t, (n) => n.map(ye), arguments);
  },
  find(e, t) {
    return Ye(this, "find", e, t, ye, arguments);
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(this, "findLast", e, t, ye, arguments);
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xn(this, "includes", e);
  },
  indexOf(...e) {
    return Xn(this, "indexOf", e);
  },
  join(e) {
    return St(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Xn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ut(this, "pop");
  },
  push(...e) {
    return Ut(this, "push", e);
  },
  reduce(e, ...t) {
    return Ys(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ys(this, "reduceRight", e, t);
  },
  shift() {
    return Ut(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return St(this).toReversed();
  },
  toSorted(e) {
    return St(this).toSorted(e);
  },
  toSpliced(...e) {
    return St(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", ye);
  }
};
function Yn(e, t, n) {
  const s = Vn(e), r = s[t]();
  return s !== e && !Pe(e) && (r._next = r.next, r.next = () => {
    const l = r._next();
    return l.value && (l.value = n(l.value)), l;
  }), r;
}
const Ei = Array.prototype;
function Ye(e, t, n, s, r, l) {
  const i = Vn(e), o = i !== e && !Pe(e), c = i[t];
  if (c !== Ei[t]) {
    const h = c.apply(e, l);
    return o ? ye(h) : h;
  }
  let a = n;
  i !== e && (o ? a = function(h, p) {
    return n.call(this, ye(h), p, e);
  } : n.length > 2 && (a = function(h, p) {
    return n.call(this, h, p, e);
  }));
  const f = c.call(i, a, s);
  return o && r ? r(f) : f;
}
function Ys(e, t, n, s) {
  const r = Vn(e);
  let l = n;
  return r !== e && (Pe(e) ? n.length > 3 && (l = function(i, o, c) {
    return n.call(this, i, o, c, e);
  }) : l = function(i, o, c) {
    return n.call(this, i, ye(o), c, e);
  }), r[t](l, ...s);
}
function Xn(e, t, n) {
  const s = B(e);
  we(s, "iterate", Qt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Is(n[0]) ? (n[0] = B(n[0]), s[t](...n)) : r;
}
function Ut(e, t, n = []) {
  ct(), Ss();
  const s = B(e)[t].apply(e, n);
  return Es(), ut(), s;
}
const Ci = /* @__PURE__ */ ys("__proto__,__v_isRef,__isVue"), Gr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
);
function Ti(e) {
  Ge(e) || (e = String(e));
  const t = B(this);
  return we(t, "has", e), t.hasOwnProperty(e);
}
class Jr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return s === (r ? l ? ki : Qr : l ? Zr : Xr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = I(t);
    if (!r) {
      let c;
      if (i && (c = Si[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ti;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      fe(t) ? t : s
    );
    return (Ge(n) ? Gr.has(n) : Ci(n)) || (r || we(t, "get", n), l) ? o : fe(o) ? i && ws(n) ? o : o.value : ee(o) ? r ? el(o) : Ms(o) : o;
  }
}
class Yr extends Jr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let l = t[n];
    if (!this._isShallow) {
      const c = yt(l);
      if (!Pe(s) && !yt(s) && (l = B(l), s = B(s)), !I(t) && fe(l) && !fe(s))
        return c ? !1 : (l.value = s, !0);
    }
    const i = I(t) && ws(n) ? Number(n) < t.length : z(t, n), o = Reflect.set(
      t,
      n,
      s,
      fe(t) ? t : r
    );
    return t === B(r) && (i ? it(s, l) && et(t, "set", n, s) : et(t, "add", n, s)), o;
  }
  deleteProperty(t, n) {
    const s = z(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && et(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ge(n) || !Gr.has(n)) && we(t, "has", n), s;
  }
  ownKeys(t) {
    return we(
      t,
      "iterate",
      I(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class Oi extends Jr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ai = /* @__PURE__ */ new Yr(), Mi = /* @__PURE__ */ new Oi(), Fi = /* @__PURE__ */ new Yr(!0);
const Os = (e) => e, Dn = (e) => Reflect.getPrototypeOf(e);
function fn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = B(e), l = B(t);
  n || (it(t, l) && we(r, "get", t), we(r, "get", l));
  const { has: i } = Dn(r), o = s ? Os : n ? Ps : ye;
  if (i.call(r, t))
    return o(e.get(t));
  if (i.call(r, l))
    return o(e.get(l));
  e !== r && e.get(t);
}
function dn(e, t = !1) {
  const n = this.__v_raw, s = B(n), r = B(e);
  return t || (it(e, r) && we(s, "has", e), we(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function hn(e, t = !1) {
  return e = e.__v_raw, !t && we(B(e), "iterate", gt), Reflect.get(e, "size", e);
}
function Xs(e, t = !1) {
  !t && !Pe(e) && !yt(e) && (e = B(e));
  const n = B(this);
  return Dn(n).has.call(n, e) || (n.add(e), et(n, "add", e, e)), this;
}
function Zs(e, t, n = !1) {
  !n && !Pe(t) && !yt(t) && (t = B(t));
  const s = B(this), { has: r, get: l } = Dn(s);
  let i = r.call(s, e);
  i || (e = B(e), i = r.call(s, e));
  const o = l.call(s, e);
  return s.set(e, t), i ? it(t, o) && et(s, "set", e, t) : et(s, "add", e, t), this;
}
function Qs(e) {
  const t = B(this), { has: n, get: s } = Dn(t);
  let r = n.call(t, e);
  r || (e = B(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && et(t, "delete", e, void 0), l;
}
function er() {
  const e = B(this), t = e.size !== 0, n = e.clear();
  return t && et(e, "clear", void 0, void 0), n;
}
function pn(e, t) {
  return function(s, r) {
    const l = this, i = l.__v_raw, o = B(i), c = t ? Os : e ? Ps : ye;
    return !e && we(o, "iterate", gt), i.forEach((a, f) => s.call(r, c(a), c(f), l));
  };
}
function gn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = B(r), i = Mt(l), o = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, a = r[e](...s), f = n ? Os : t ? Ps : ye;
    return !t && we(
      l,
      "iterate",
      c ? ls : gt
    ), {
      // iterator protocol
      next() {
        const { value: h, done: p } = a.next();
        return p ? { value: h, done: p } : {
          value: o ? [f(h[0]), f(h[1])] : f(h),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function st(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ii() {
  const e = {
    get(l) {
      return fn(this, l);
    },
    get size() {
      return hn(this);
    },
    has: dn,
    add: Xs,
    set: Zs,
    delete: Qs,
    clear: er,
    forEach: pn(!1, !1)
  }, t = {
    get(l) {
      return fn(this, l, !1, !0);
    },
    get size() {
      return hn(this);
    },
    has: dn,
    add(l) {
      return Xs.call(this, l, !0);
    },
    set(l, i) {
      return Zs.call(this, l, i, !0);
    },
    delete: Qs,
    clear: er,
    forEach: pn(!1, !0)
  }, n = {
    get(l) {
      return fn(this, l, !0);
    },
    get size() {
      return hn(this, !0);
    },
    has(l) {
      return dn.call(this, l, !0);
    },
    add: st("add"),
    set: st("set"),
    delete: st("delete"),
    clear: st("clear"),
    forEach: pn(!0, !1)
  }, s = {
    get(l) {
      return fn(this, l, !0, !0);
    },
    get size() {
      return hn(this, !0);
    },
    has(l) {
      return dn.call(this, l, !0);
    },
    add: st("add"),
    set: st("set"),
    delete: st("delete"),
    clear: st("clear"),
    forEach: pn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    e[l] = gn(l, !1, !1), n[l] = gn(l, !0, !1), t[l] = gn(l, !1, !0), s[l] = gn(
      l,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  Pi,
  Ri,
  Li,
  Ni
] = /* @__PURE__ */ Ii();
function As(e, t) {
  const n = t ? e ? Ni : Li : e ? Ri : Pi;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    z(n, r) && r in s ? n : s,
    r,
    l
  );
}
const Vi = {
  get: /* @__PURE__ */ As(!1, !1)
}, Di = {
  get: /* @__PURE__ */ As(!1, !0)
}, Hi = {
  get: /* @__PURE__ */ As(!0, !1)
};
const Xr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap();
function $i(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ji(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $i(ci(e));
}
function Ms(e) {
  return yt(e) ? e : Fs(
    e,
    !1,
    Ai,
    Vi,
    Xr
  );
}
function Ui(e) {
  return Fs(
    e,
    !1,
    Fi,
    Di,
    Zr
  );
}
function el(e) {
  return Fs(
    e,
    !0,
    Mi,
    Hi,
    Qr
  );
}
function Fs(e, t, n, s, r) {
  if (!ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const i = ji(e);
  if (i === 0)
    return e;
  const o = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, o), o;
}
function Ft(e) {
  return yt(e) ? Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yt(e) {
  return !!(e && e.__v_isReadonly);
}
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
function Is(e) {
  return e ? !!e.__v_raw : !1;
}
function B(e) {
  const t = e && e.__v_raw;
  return t ? B(t) : e;
}
function Bi(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && Rr(e, "__v_skip", !0), e;
}
const ye = (e) => ee(e) ? Ms(e) : e, Ps = (e) => ee(e) ? el(e) : e;
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function J(e) {
  return tl(e, !1);
}
function Wi(e) {
  return tl(e, !0);
}
function tl(e, t) {
  return fe(e) ? e : new Ki(e, t);
}
class Ki {
  constructor(t, n) {
    this.dep = new Ts(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : B(t), this._value = n ? t : ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Pe(t) || yt(t);
    t = s ? t : B(t), it(t, n) && (this._rawValue = t, this._value = s ? t : ye(t), this.dep.trigger());
  }
}
function $(e) {
  return fe(e) ? e.value : e;
}
const zi = {
  get: (e, t, n) => t === "__v_raw" ? e : $(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function nl(e) {
  return Ft(e) ? e : new Proxy(e, zi);
}
class qi {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return xi(B(this._object), this._key);
  }
}
class Gi {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function qt(e, t, n) {
  return fe(e) ? e : V(e) ? new Gi(e) : ee(e) && arguments.length > 1 ? Ji(e, t, n) : J(e);
}
function Ji(e, t, n) {
  const s = e[t];
  return fe(s) ? s : new qi(e, t, n);
}
class Yi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ts(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return Ur(this), !0;
  }
  get value() {
    const t = this.dep.track();
    return Kr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Xi(e, t, n = !1) {
  let s, r;
  return V(e) ? s = e : (s = e.get, r = e.set), new Yi(s, r, n);
}
const mn = {}, On = /* @__PURE__ */ new WeakMap();
let ht;
function Zi(e, t = !1, n = ht) {
  if (n) {
    let s = On.get(n);
    s || On.set(n, s = []), s.push(e);
  }
}
function Qi(e, t, n = X) {
  const { immediate: s, deep: r, once: l, scheduler: i, augmentJob: o, call: c } = n, a = (O) => r ? O : Pe(O) || r === !1 || r === 0 ? Ze(O, 1) : Ze(O);
  let f, h, p, m, w = !1, x = !1;
  if (fe(e) ? (h = () => e.value, w = Pe(e)) : Ft(e) ? (h = () => a(e), w = !0) : I(e) ? (x = !0, w = e.some((O) => Ft(O) || Pe(O)), h = () => e.map((O) => {
    if (fe(O))
      return O.value;
    if (Ft(O))
      return a(O);
    if (V(O))
      return c ? c(O, 2) : O();
  })) : V(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (p) {
      ct();
      try {
        p();
      } finally {
        ut();
      }
    }
    const O = ht;
    ht = f;
    try {
      return c ? c(e, 3, [m]) : e(m);
    } finally {
      ht = O;
    }
  } : h = ze, t && r) {
    const O = h, U = r === !0 ? 1 / 0 : r;
    h = () => Ze(O(), U);
  }
  const D = kr(), R = () => {
    f.stop(), D && bs(D.effects, f);
  };
  if (l && t) {
    const O = t;
    t = (...U) => {
      O(...U), R();
    };
  }
  let N = x ? new Array(e.length).fill(mn) : mn;
  const j = (O) => {
    if (!(!(f.flags & 1) || !f.dirty && !O))
      if (t) {
        const U = f.run();
        if (r || w || (x ? U.some((ce, ue) => it(ce, N[ue])) : it(U, N))) {
          p && p();
          const ce = ht;
          ht = f;
          try {
            const ue = [
              U,
              // pass undefined as the old value when it's changed for the first time
              N === mn ? void 0 : x && N[0] === mn ? [] : N,
              m
            ];
            c ? c(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), N = U;
          } finally {
            ht = ce;
          }
        }
      } else
        f.run();
  };
  return o && o(j), f = new $r(h), f.scheduler = i ? () => i(j, !1) : j, m = (O) => Zi(O, !1, f), p = f.onStop = () => {
    const O = On.get(f);
    if (O) {
      if (c)
        c(O, 4);
      else
        for (const U of O) U();
      On.delete(f);
    }
  }, t ? s ? j(!0) : N = f.run() : i ? i(j.bind(null, !0), !0) : f.run(), R.pause = f.pause.bind(f), R.resume = f.resume.bind(f), R.stop = R, R;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, fe(e))
    Ze(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      Ze(e[s], t, n);
  else if (Vt(e) || Mt(e))
    e.forEach((s) => {
      Ze(s, t, n);
    });
  else if (Ir(e)) {
    for (const s in e)
      Ze(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ze(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function on(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Hn(r, t, n);
  }
}
function Je(e, t, n, s) {
  if (V(e)) {
    const r = on(e, t, n, s);
    return r && Mr(r) && r.catch((l) => {
      Hn(l, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let l = 0; l < e.length; l++)
      r.push(Je(e[l], t, n, s));
    return r;
  }
}
function Hn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: i } = t && t.appContext.config || X;
  if (t) {
    let o = t.parent;
    const c = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, c, a) === !1)
            return;
      }
      o = o.parent;
    }
    if (l) {
      ct(), on(l, null, 10, [
        e,
        c,
        a
      ]), ut();
      return;
    }
  }
  eo(e, n, r, s, i);
}
function eo(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
let en = !1, is = !1;
const Ee = [];
let We = 0;
const It = [];
let rt = null, Et = 0;
const sl = /* @__PURE__ */ Promise.resolve();
let Rs = null;
function Rt(e) {
  const t = Rs || sl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function to(e) {
  let t = en ? We + 1 : 0, n = Ee.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ee[s], l = tn(r);
    l < e || l === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ls(e) {
  if (!(e.flags & 1)) {
    const t = tn(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= tn(n) ? Ee.push(e) : Ee.splice(to(t), 0, e), e.flags |= 1, rl();
  }
}
function rl() {
  !en && !is && (is = !0, Rs = sl.then(il));
}
function no(e) {
  I(e) ? It.push(...e) : rt && e.id === -1 ? rt.splice(Et + 1, 0, e) : e.flags & 1 || (It.push(e), e.flags |= 1), rl();
}
function tr(e, t, n = en ? We + 1 : 0) {
  for (; n < Ee.length; n++) {
    const s = Ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ll(e) {
  if (It.length) {
    const t = [...new Set(It)].sort(
      (n, s) => tn(n) - tn(s)
    );
    if (It.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, Et = 0; Et < rt.length; Et++) {
      const n = rt[Et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    rt = null, Et = 0;
  }
}
const tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function il(e) {
  is = !1, en = !0;
  try {
    for (We = 0; We < Ee.length; We++) {
      const t = Ee[We];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; We < Ee.length; We++) {
      const t = Ee[We];
      t && (t.flags &= -2);
    }
    We = 0, Ee.length = 0, ll(), en = !1, Rs = null, (Ee.length || It.length) && il();
  }
}
let Me = null, ol = null;
function An(e) {
  const t = Me;
  return Me = e, ol = e && e.type.__scopeId || null, t;
}
function so(e, t = Me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && fr(-1);
    const l = An(t);
    let i;
    try {
      i = e(...r);
    } finally {
      An(l), s._d && fr(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Mn(e, t) {
  if (Me === null)
    return e;
  const n = Kn(Me), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [l, i, o, c = X] = t[r];
    l && (V(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Ze(i), s.push({
      dir: l,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: o,
      modifiers: c
    }));
  }
  return e;
}
function at(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    l && (o.oldValue = l[i].value);
    let c = o.dir[s];
    c && (ct(), Je(c, n, 8, [
      e.el,
      o,
      e,
      t
    ]), ut());
  }
}
const cl = Symbol("_vte"), ro = (e) => e.__isTeleport, Gt = (e) => e && (e.disabled || e.disabled === ""), lo = (e) => e && (e.defer || e.defer === ""), nr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, sr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, os = (e, t) => {
  const n = e && e.to;
  return se(n) ? t ? t(n) : null : n;
}, io = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, l, i, o, c, a) {
    const {
      mc: f,
      pc: h,
      pbc: p,
      o: { insert: m, querySelector: w, createText: x, createComment: D }
    } = a, R = Gt(t.props);
    let { shapeFlag: N, children: j, dynamicChildren: O } = t;
    if (e == null) {
      const U = t.el = x(""), ce = t.anchor = x("");
      m(U, n, s), m(ce, n, s);
      const ue = (le, W) => {
        N & 16 && (r && r.isCE && (r.ce._teleportTarget = le), f(
          j,
          le,
          W,
          r,
          l,
          i,
          o,
          c
        ));
      }, re = () => {
        const le = t.target = os(t.props, w), W = ul(le, t, x, m);
        le && (i !== "svg" && nr(le) ? i = "svg" : i !== "mathml" && sr(le) && (i = "mathml"), R || (ue(le, W), bn(t)));
      };
      R && (ue(n, ce), bn(t)), lo(t.props) ? Ce(re, l) : re();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const U = t.anchor = e.anchor, ce = t.target = e.target, ue = t.targetAnchor = e.targetAnchor, re = Gt(e.props), le = re ? n : ce, W = re ? U : ue;
      if (i === "svg" || nr(ce) ? i = "svg" : (i === "mathml" || sr(ce)) && (i = "mathml"), O ? (p(
        e.dynamicChildren,
        O,
        le,
        r,
        l,
        i,
        o
      ), Hs(e, t, !0)) : c || h(
        e,
        t,
        le,
        W,
        r,
        l,
        i,
        o,
        !1
      ), R)
        re ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : vn(
          t,
          n,
          U,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const K = t.target = os(
          t.props,
          w
        );
        K && vn(
          t,
          K,
          null,
          a,
          0
        );
      } else re && vn(
        t,
        ce,
        ue,
        a,
        1
      );
      bn(t);
    }
  },
  remove(e, t, n, { um: s, o: { remove: r } }, l) {
    const {
      shapeFlag: i,
      children: o,
      anchor: c,
      targetStart: a,
      targetAnchor: f,
      target: h,
      props: p
    } = e;
    if (h && (r(a), r(f)), l && r(c), i & 16) {
      const m = l || !Gt(p);
      for (let w = 0; w < o.length; w++) {
        const x = o[w];
        s(
          x,
          t,
          n,
          m,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: vn,
  hydrate: oo
};
function vn(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: o, shapeFlag: c, children: a, props: f } = e, h = l === 2;
  if (h && s(i, t, n), (!h || Gt(f)) && c & 16)
    for (let p = 0; p < a.length; p++)
      r(
        a[p],
        t,
        n,
        2
      );
  h && s(o, t, n);
}
function oo(e, t, n, s, r, l, {
  o: { nextSibling: i, parentNode: o, querySelector: c, insert: a, createText: f }
}, h) {
  const p = t.target = os(
    t.props,
    c
  );
  if (p) {
    const m = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (Gt(t.props))
        t.anchor = h(
          i(e),
          t,
          o(e),
          n,
          s,
          r,
          l
        ), t.targetStart = m, t.targetAnchor = m && i(m);
      else {
        t.anchor = i(e);
        let w = m;
        for (; w; ) {
          if (w && w.nodeType === 8) {
            if (w.data === "teleport start anchor")
              t.targetStart = w;
            else if (w.data === "teleport anchor") {
              t.targetAnchor = w, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          w = i(w);
        }
        t.targetAnchor || ul(p, t, f, a), h(
          m && i(m),
          t,
          p,
          n,
          s,
          r,
          l
        );
      }
    bn(t);
  }
  return t.anchor && i(t.anchor);
}
const cs = io;
function bn(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.targetStart;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
function ul(e, t, n, s) {
  const r = t.targetStart = n(""), l = t.targetAnchor = n("");
  return r[cl] = l, e && (s(r, e), s(l, e)), l;
}
function Ns(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ns(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function co(e, t) {
  return V(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    me({ name: e.name }, t, { setup: e })
  ) : e;
}
function al(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function us(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (w, x) => us(
        w,
        t && (I(t) ? t[x] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Jt(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Kn(s.component) : s.el, i = r ? null : l, { i: o, r: c } = e, a = t && t.r, f = o.refs === X ? o.refs = {} : o.refs, h = o.setupState, p = B(h), m = h === X ? () => !1 : (w) => z(p, w);
  if (a != null && a !== c && (se(a) ? (f[a] = null, m(a) && (h[a] = null)) : fe(a) && (a.value = null)), V(c))
    on(c, o, 12, [i, f]);
  else {
    const w = se(c), x = fe(c);
    if (w || x) {
      const D = () => {
        if (e.f) {
          const R = w ? m(c) ? h[c] : f[c] : c.value;
          r ? I(R) && bs(R, l) : I(R) ? R.includes(l) || R.push(l) : w ? (f[c] = [l], m(c) && (h[c] = f[c])) : (c.value = [l], e.k && (f[e.k] = c.value));
        } else w ? (f[c] = i, m(c) && (h[c] = i)) : x && (c.value = i, e.k && (f[e.k] = i));
      };
      i ? (D.id = -1, Ce(D, n)) : D();
    }
  }
}
const Jt = (e) => !!e.type.__asyncLoader, fl = (e) => e.type.__isKeepAlive;
function uo(e, t) {
  dl(e, "a", t);
}
function ao(e, t) {
  dl(e, "da", t);
}
function dl(e, t, n = _e) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (kn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      fl(r.parent.vnode) && fo(s, t, n, r), r = r.parent;
  }
}
function fo(e, t, n, s) {
  const r = kn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  $n(() => {
    bs(s[t], r);
  }, n);
}
function kn(e, t, n = _e, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...i) => {
      ct();
      const o = un(n), c = Je(t, n, e, i);
      return o(), ut(), c;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const nt = (e) => (t, n = _e) => {
  (!Wn || e === "sp") && kn(e, (...s) => t(...s), n);
}, ho = nt("bm"), cn = nt("m"), po = nt(
  "bu"
), go = nt("u"), mo = nt(
  "bum"
), $n = nt("um"), vo = nt(
  "sp"
), yo = nt("rtg"), _o = nt("rtc");
function bo(e, t = _e) {
  kn("ec", e, t);
}
const wo = Symbol.for("v-ndc");
function wn(e, t, n, s) {
  let r;
  const l = n, i = I(e);
  if (i || se(e)) {
    const o = i && Ft(e);
    let c = !1;
    o && (c = !Pe(e), e = Vn(e)), r = new Array(e.length);
    for (let a = 0, f = e.length; a < f; a++)
      r[a] = t(
        c ? ye(e[a]) : e[a],
        a,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, l);
  } else if (ee(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, c) => t(o, c, void 0, l)
      );
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let c = 0, a = o.length; c < a; c++) {
        const f = o[c];
        r[c] = t(e[f], f, c, l);
      }
    }
  else
    r = [];
  return r;
}
const as = (e) => e ? Pl(e) ? Kn(e) : as(e.parent) : null, Yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => as(e.parent),
    $root: (e) => as(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ls(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Wo.bind(e)
  })
), Zn = (e, t) => e !== X && !e.__isScriptSetup && z(e, t), xo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: l, accessCache: i, type: o, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (Zn(s, t))
          return i[t] = 1, s[t];
        if (r !== X && z(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && z(a, t)
        )
          return i[t] = 3, l[t];
        if (n !== X && z(n, t))
          return i[t] = 4, n[t];
        fs && (i[t] = 0);
      }
    }
    const f = Yt[t];
    let h, p;
    if (f)
      return t === "$attrs" && we(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (h = o.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== X && z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, z(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return Zn(r, t) ? (r[t] = n, !0) : s !== X && z(s, t) ? (s[t] = n, !0) : z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l }
  }, i) {
    let o;
    return !!n[i] || e !== X && z(e, i) || Zn(t, i) || (o = l[0]) && z(o, i) || z(s, i) || z(Yt, i) || z(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rr(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let fs = !0;
function So(e) {
  const t = Vs(e), n = e.proxy, s = e.ctx;
  fs = !1, t.beforeCreate && lr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: l,
    methods: i,
    watch: o,
    provide: c,
    inject: a,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: w,
    activated: x,
    deactivated: D,
    beforeDestroy: R,
    beforeUnmount: N,
    destroyed: j,
    unmounted: O,
    render: U,
    renderTracked: ce,
    renderTriggered: ue,
    errorCaptured: re,
    serverPrefetch: le,
    // public API
    expose: W,
    inheritAttrs: K,
    // assets
    components: ie,
    directives: he,
    filters: kt
  } = t;
  if (a && Eo(a, s, null), i)
    for (const te in i) {
      const G = i[te];
      V(G) && (s[te] = G.bind(n));
    }
  if (r) {
    const te = r.call(n, n);
    ee(te) && (e.data = Ms(te));
  }
  if (fs = !0, l)
    for (const te in l) {
      const G = l[te], ke = V(G) ? G.bind(n, n) : V(G.get) ? G.get.bind(n, n) : ze, M = !V(G) && V(G.set) ? G.set.bind(n) : ze, L = be({
        get: ke,
        set: M
      });
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => L.value,
        set: (H) => L.value = H
      });
    }
  if (o)
    for (const te in o)
      hl(o[te], s, n, te);
  if (c) {
    const te = V(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach((G) => {
      Fo(G, te[G]);
    });
  }
  f && lr(f, e, "c");
  function pe(te, G) {
    I(G) ? G.forEach((ke) => te(ke.bind(n))) : G && te(G.bind(n));
  }
  if (pe(ho, h), pe(cn, p), pe(po, m), pe(go, w), pe(uo, x), pe(ao, D), pe(bo, re), pe(_o, ce), pe(yo, ue), pe(mo, N), pe($n, O), pe(vo, le), I(W))
    if (W.length) {
      const te = e.exposed || (e.exposed = {});
      W.forEach((G) => {
        Object.defineProperty(te, G, {
          get: () => n[G],
          set: (ke) => n[G] = ke
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === ze && (e.render = U), K != null && (e.inheritAttrs = K), ie && (e.components = ie), he && (e.directives = he), le && al(e);
}
function Eo(e, t, n = ze) {
  I(e) && (e = ds(e));
  for (const s in e) {
    const r = e[s];
    let l;
    ee(r) ? "default" in r ? l = xn(
      r.from || s,
      r.default,
      !0
    ) : l = xn(r.from || s) : l = xn(r), fe(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[s] = l;
  }
}
function lr(e, t, n) {
  Je(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function hl(e, t, n, s) {
  let r = s.includes(".") ? Cl(n, s) : () => n[s];
  if (se(e)) {
    const l = t[e];
    V(l) && qe(r, l);
  } else if (V(e))
    qe(r, e.bind(n));
  else if (ee(e))
    if (I(e))
      e.forEach((l) => hl(l, t, n, s));
    else {
      const l = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(l) && qe(r, l, e);
    }
}
function Vs(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: l,
    config: { optionMergeStrategies: i }
  } = e.appContext, o = l.get(t);
  let c;
  return o ? c = o : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => Fn(c, a, i, !0)
  ), Fn(c, t, i)), ee(t) && l.set(t, c), c;
}
function Fn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && Fn(e, l, n, !0), r && r.forEach(
    (i) => Fn(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const o = Co[i] || n && n[i];
      e[i] = o ? o(e[i], t[i]) : t[i];
    }
  return e;
}
const Co = {
  data: ir,
  props: or,
  emits: or,
  // objects
  methods: Kt,
  computed: Kt,
  // lifecycle
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  // assets
  components: Kt,
  directives: Kt,
  // watch
  watch: Oo,
  // provide / inject
  provide: ir,
  inject: To
};
function ir(e, t) {
  return t ? e ? function() {
    return me(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function To(e, t) {
  return Kt(ds(e), ds(t));
}
function ds(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kt(e, t) {
  return e ? me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function or(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : me(
    /* @__PURE__ */ Object.create(null),
    rr(e),
    rr(t ?? {})
  ) : t;
}
function Oo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = xe(e[s], t[s]);
  return n;
}
function pl() {
  return {
    app: null,
    config: {
      isNativeTag: ii,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ao = 0;
function Mo(e, t) {
  return function(s, r = null) {
    V(s) || (s = me({}, s)), r != null && !ee(r) && (r = null);
    const l = pl(), i = /* @__PURE__ */ new WeakSet(), o = [];
    let c = !1;
    const a = l.app = {
      _uid: Ao++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: cc,
      get config() {
        return l.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return i.has(f) || (f && V(f.install) ? (i.add(f), f.install(a, ...h)) : V(f) && (i.add(f), f(a, ...h))), a;
      },
      mixin(f) {
        return l.mixins.includes(f) || l.mixins.push(f), a;
      },
      component(f, h) {
        return h ? (l.components[f] = h, a) : l.components[f];
      },
      directive(f, h) {
        return h ? (l.directives[f] = h, a) : l.directives[f];
      },
      mount(f, h, p) {
        if (!c) {
          const m = a._ceVNode || tt(s, r);
          return m.appContext = l, p === !0 ? p = "svg" : p === !1 && (p = void 0), h && t ? t(m, f) : e(m, f, p), c = !0, a._container = f, f.__vue_app__ = a, Kn(m.component);
        }
      },
      onUnmount(f) {
        o.push(f);
      },
      unmount() {
        c && (Je(
          o,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(f, h) {
        return l.provides[f] = h, a;
      },
      runWithContext(f) {
        const h = Pt;
        Pt = a;
        try {
          return f();
        } finally {
          Pt = h;
        }
      }
    };
    return a;
  };
}
let Pt = null;
function Fo(e, t) {
  if (_e) {
    let n = _e.provides;
    const s = _e.parent && _e.parent.provides;
    s === n && (n = _e.provides = Object.create(s)), n[e] = t;
  }
}
function xn(e, t, n = !1) {
  const s = _e || Me;
  if (s || Pt) {
    const r = Pt ? Pt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(s && s.proxy) : t;
  }
}
const gl = {}, ml = () => Object.create(gl), vl = (e) => Object.getPrototypeOf(e) === gl;
function Io(e, t, n, s = !1) {
  const r = {}, l = ml();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), yl(e, t, r, l);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : Ui(r) : e.type.props ? e.props = r : e.props = l, e.attrs = l;
}
function Po(e, t, n, s) {
  const {
    props: r,
    attrs: l,
    vnode: { patchFlag: i }
  } = e, o = B(r), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let p = f[h];
        if (Un(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (c)
          if (z(l, p))
            m !== l[p] && (l[p] = m, a = !0);
          else {
            const w = mt(p);
            r[w] = hs(
              c,
              o,
              w,
              m,
              e,
              !1
            );
          }
        else
          m !== l[p] && (l[p] = m, a = !0);
      }
    }
  } else {
    yl(e, t, r, l) && (a = !0);
    let f;
    for (const h in o)
      (!t || // for camelCase
      !z(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = bt(h)) === h || !z(t, f))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[h] = hs(
        c,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (l !== o)
      for (const h in l)
        (!t || !z(t, h)) && (delete l[h], a = !0);
  }
  a && et(e.attrs, "set", "");
}
function yl(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let i = !1, o;
  if (t)
    for (let c in t) {
      if (zt(c))
        continue;
      const a = t[c];
      let f;
      r && z(r, f = mt(c)) ? !l || !l.includes(f) ? n[f] = a : (o || (o = {}))[f] = a : Un(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, i = !0);
    }
  if (l) {
    const c = B(n), a = o || X;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      n[h] = hs(
        r,
        c,
        h,
        a[h],
        e,
        !z(a, h)
      );
    }
  }
  return i;
}
function hs(e, t, n, s, r, l) {
  const i = e[n];
  if (i != null) {
    const o = z(i, "default");
    if (o && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && V(c)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const f = un(r);
          s = a[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (l && !o ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === bt(n)) && (s = !0));
  }
  return s;
}
const Ro = /* @__PURE__ */ new WeakMap();
function _l(e, t, n = !1) {
  const s = n ? Ro : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, i = {}, o = [];
  let c = !1;
  if (!V(e)) {
    const f = (h) => {
      c = !0;
      const [p, m] = _l(h, t, !0);
      me(i, p), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!l && !c)
    return ee(e) && s.set(e, At), At;
  if (I(l))
    for (let f = 0; f < l.length; f++) {
      const h = mt(l[f]);
      cr(h) && (i[h] = X);
    }
  else if (l)
    for (const f in l) {
      const h = mt(f);
      if (cr(h)) {
        const p = l[f], m = i[h] = I(p) || V(p) ? { type: p } : me({}, p), w = m.type;
        let x = !1, D = !0;
        if (I(w))
          for (let R = 0; R < w.length; ++R) {
            const N = w[R], j = V(N) && N.name;
            if (j === "Boolean") {
              x = !0;
              break;
            } else j === "String" && (D = !1);
          }
        else
          x = V(w) && w.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = x, m[
          1
          /* shouldCastTrue */
        ] = D, (x || z(m, "default")) && o.push(h);
      }
    }
  const a = [i, o];
  return ee(e) && s.set(e, a), a;
}
function cr(e) {
  return e[0] !== "$" && !zt(e);
}
const bl = (e) => e[0] === "_" || e === "$stable", Ds = (e) => I(e) ? e.map(Ke) : [Ke(e)], Lo = (e, t, n) => {
  if (t._n)
    return t;
  const s = so((...r) => Ds(t(...r)), n);
  return s._c = !1, s;
}, wl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (bl(r)) continue;
    const l = e[r];
    if (V(l))
      t[r] = Lo(r, l, s);
    else if (l != null) {
      const i = Ds(l);
      t[r] = () => i;
    }
  }
}, xl = (e, t) => {
  const n = Ds(t);
  e.slots.default = () => n;
}, Sl = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, No = (e, t, n) => {
  const s = e.slots = ml();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Sl(s, t, n), n && Rr(s, "_", r, !0)) : wl(t, s);
  } else t && xl(e, t);
}, Vo = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, i = X;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? l = !1 : Sl(r, t, n) : (l = !t.$stable, wl(t, r)), i = t;
  } else t && (xl(e, t), i = { default: 1 });
  if (l)
    for (const o in r)
      !bl(o) && i[o] == null && delete r[o];
}, Ce = Xo;
function Do(e) {
  return Ho(e);
}
function Ho(e, t) {
  const n = Lr();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: l,
    createElement: i,
    createText: o,
    createComment: c,
    setText: a,
    setElementText: f,
    parentNode: h,
    nextSibling: p,
    setScopeId: m = ze,
    insertStaticContent: w
  } = e, x = (u, d, g, _ = null, v = null, y = null, C = void 0, E = null, S = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Bt(u, d) && (_ = xt(u), H(u, v, y, !0), u = null), d.patchFlag === -2 && (S = !1, d.dynamicChildren = null);
    const { type: b, ref: F, shapeFlag: T } = d;
    switch (b) {
      case Bn:
        D(u, d, g, _);
        break;
      case _t:
        R(u, d, g, _);
        break;
      case ts:
        u == null && N(d, g, _, C);
        break;
      case ge:
        ie(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          E,
          S
        );
        break;
      default:
        T & 1 ? U(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          E,
          S
        ) : T & 6 ? he(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          E,
          S
        ) : (T & 64 || T & 128) && b.process(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          E,
          S,
          $t
        );
    }
    F != null && v && us(F, u && u.ref, y, d || u, !d);
  }, D = (u, d, g, _) => {
    if (u == null)
      s(
        d.el = o(d.children),
        g,
        _
      );
    else {
      const v = d.el = u.el;
      d.children !== u.children && a(v, d.children);
    }
  }, R = (u, d, g, _) => {
    u == null ? s(
      d.el = c(d.children || ""),
      g,
      _
    ) : d.el = u.el;
  }, N = (u, d, g, _) => {
    [u.el, u.anchor] = w(
      u.children,
      d,
      g,
      _,
      u.el,
      u.anchor
    );
  }, j = ({ el: u, anchor: d }, g, _) => {
    let v;
    for (; u && u !== d; )
      v = p(u), s(u, g, _), u = v;
    s(d, g, _);
  }, O = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, U = (u, d, g, _, v, y, C, E, S) => {
    d.type === "svg" ? C = "svg" : d.type === "math" && (C = "mathml"), u == null ? ce(
      d,
      g,
      _,
      v,
      y,
      C,
      E,
      S
    ) : le(
      u,
      d,
      v,
      y,
      C,
      E,
      S
    );
  }, ce = (u, d, g, _, v, y, C, E) => {
    let S, b;
    const { props: F, shapeFlag: T, transition: A, dirs: P } = u;
    if (S = u.el = i(
      u.type,
      y,
      F && F.is,
      F
    ), T & 8 ? f(S, u.children) : T & 16 && re(
      u.children,
      S,
      null,
      _,
      v,
      Qn(u, y),
      C,
      E
    ), P && at(u, null, _, "created"), ue(S, u, u.scopeId, C, _), F) {
      for (const Z in F)
        Z !== "value" && !zt(Z) && l(S, Z, null, F[Z], y, _);
      "value" in F && l(S, "value", null, F.value, y), (b = F.onVnodeBeforeMount) && Ue(b, _, u);
    }
    P && at(u, null, _, "beforeMount");
    const k = ko(v, A);
    k && A.beforeEnter(S), s(S, d, g), ((b = F && F.onVnodeMounted) || k || P) && Ce(() => {
      b && Ue(b, _, u), k && A.enter(S), P && at(u, null, _, "mounted");
    }, v);
  }, ue = (u, d, g, _, v) => {
    if (g && m(u, g), _)
      for (let y = 0; y < _.length; y++)
        m(u, _[y]);
    if (v) {
      let y = v.subTree;
      if (d === y || Ol(y.type) && (y.ssContent === d || y.ssFallback === d)) {
        const C = v.vnode;
        ue(
          u,
          C,
          C.scopeId,
          C.slotScopeIds,
          v.parent
        );
      }
    }
  }, re = (u, d, g, _, v, y, C, E, S = 0) => {
    for (let b = S; b < u.length; b++) {
      const F = u[b] = E ? lt(u[b]) : Ke(u[b]);
      x(
        null,
        F,
        d,
        g,
        _,
        v,
        y,
        C,
        E
      );
    }
  }, le = (u, d, g, _, v, y, C) => {
    const E = d.el = u.el;
    let { patchFlag: S, dynamicChildren: b, dirs: F } = d;
    S |= u.patchFlag & 16;
    const T = u.props || X, A = d.props || X;
    let P;
    if (g && ft(g, !1), (P = A.onVnodeBeforeUpdate) && Ue(P, g, d, u), F && at(d, u, g, "beforeUpdate"), g && ft(g, !0), (T.innerHTML && A.innerHTML == null || T.textContent && A.textContent == null) && f(E, ""), b ? W(
      u.dynamicChildren,
      b,
      E,
      g,
      _,
      Qn(d, v),
      y
    ) : C || G(
      u,
      d,
      E,
      null,
      g,
      _,
      Qn(d, v),
      y,
      !1
    ), S > 0) {
      if (S & 16)
        K(E, T, A, g, v);
      else if (S & 2 && T.class !== A.class && l(E, "class", null, A.class, v), S & 4 && l(E, "style", T.style, A.style, v), S & 8) {
        const k = d.dynamicProps;
        for (let Z = 0; Z < k.length; Z++) {
          const q = k[Z], Te = T[q], ve = A[q];
          (ve !== Te || q === "value") && l(E, q, Te, ve, v, g);
        }
      }
      S & 1 && u.children !== d.children && f(E, d.children);
    } else !C && b == null && K(E, T, A, g, v);
    ((P = A.onVnodeUpdated) || F) && Ce(() => {
      P && Ue(P, g, d, u), F && at(d, u, g, "updated");
    }, _);
  }, W = (u, d, g, _, v, y, C) => {
    for (let E = 0; E < d.length; E++) {
      const S = u[E], b = d[E], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(S, b) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 70) ? h(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      x(
        S,
        b,
        F,
        null,
        _,
        v,
        y,
        C,
        !0
      );
    }
  }, K = (u, d, g, _, v) => {
    if (d !== g) {
      if (d !== X)
        for (const y in d)
          !zt(y) && !(y in g) && l(
            u,
            y,
            d[y],
            null,
            v,
            _
          );
      for (const y in g) {
        if (zt(y)) continue;
        const C = g[y], E = d[y];
        C !== E && y !== "value" && l(u, y, E, C, v, _);
      }
      "value" in g && l(u, "value", d.value, g.value, v);
    }
  }, ie = (u, d, g, _, v, y, C, E, S) => {
    const b = d.el = u ? u.el : o(""), F = d.anchor = u ? u.anchor : o("");
    let { patchFlag: T, dynamicChildren: A, slotScopeIds: P } = d;
    P && (E = E ? E.concat(P) : P), u == null ? (s(b, g, _), s(F, g, _), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      F,
      v,
      y,
      C,
      E,
      S
    )) : T > 0 && T & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (W(
      u.dynamicChildren,
      A,
      g,
      v,
      y,
      C,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || v && d === v.subTree) && Hs(
      u,
      d,
      !0
      /* shallow */
    )) : G(
      u,
      d,
      g,
      F,
      v,
      y,
      C,
      E,
      S
    );
  }, he = (u, d, g, _, v, y, C, E, S) => {
    d.slotScopeIds = E, u == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      g,
      _,
      C,
      S
    ) : kt(
      d,
      g,
      _,
      v,
      y,
      C,
      S
    ) : wt(u, d, S);
  }, kt = (u, d, g, _, v, y, C) => {
    const E = u.component = nc(
      u,
      _,
      v
    );
    if (fl(u) && (E.ctx.renderer = $t), sc(E, !1, C), E.asyncDep) {
      if (v && v.registerDep(E, pe, C), !u.el) {
        const S = E.subTree = tt(_t);
        R(null, S, d, g);
      }
    } else
      pe(
        E,
        u,
        d,
        g,
        v,
        y,
        C
      );
  }, wt = (u, d, g) => {
    const _ = d.component = u.component;
    if (Jo(u, d, g))
      if (_.asyncDep && !_.asyncResolved) {
        te(_, d, g);
        return;
      } else
        _.next = d, _.update();
    else
      d.el = u.el, _.vnode = d;
  }, pe = (u, d, g, _, v, y, C) => {
    const E = () => {
      if (u.isMounted) {
        let { next: T, bu: A, u: P, parent: k, vnode: Z } = u;
        {
          const Oe = El(u);
          if (Oe) {
            T && (T.el = Z.el, te(u, T, C)), Oe.asyncDep.then(() => {
              u.isUnmounted || E();
            });
            return;
          }
        }
        let q = T, Te;
        ft(u, !1), T ? (T.el = Z.el, te(u, T, C)) : T = Z, A && _n(A), (Te = T.props && T.props.onVnodeBeforeUpdate) && Ue(Te, k, T, Z), ft(u, !0);
        const ve = es(u), Ne = u.subTree;
        u.subTree = ve, x(
          Ne,
          ve,
          // parent may have changed if it's in a teleport
          h(Ne.el),
          // anchor may have changed if it's in a fragment
          xt(Ne),
          u,
          v,
          y
        ), T.el = ve.el, q === null && Yo(u, ve.el), P && Ce(P, v), (Te = T.props && T.props.onVnodeUpdated) && Ce(
          () => Ue(Te, k, T, Z),
          v
        );
      } else {
        let T;
        const { el: A, props: P } = d, { bm: k, m: Z, parent: q, root: Te, type: ve } = u, Ne = Jt(d);
        if (ft(u, !1), k && _n(k), !Ne && (T = P && P.onVnodeBeforeMount) && Ue(T, q, d), ft(u, !0), A && Ws) {
          const Oe = () => {
            u.subTree = es(u), Ws(
              A,
              u.subTree,
              u,
              v,
              null
            );
          };
          Ne && ve.__asyncHydrate ? ve.__asyncHydrate(
            A,
            u,
            Oe
          ) : Oe();
        } else {
          Te.ce && Te.ce._injectChildStyle(ve);
          const Oe = u.subTree = es(u);
          x(
            null,
            Oe,
            g,
            _,
            u,
            v,
            y
          ), d.el = Oe.el;
        }
        if (Z && Ce(Z, v), !Ne && (T = P && P.onVnodeMounted)) {
          const Oe = d;
          Ce(
            () => Ue(T, q, Oe),
            v
          );
        }
        (d.shapeFlag & 256 || q && Jt(q.vnode) && q.vnode.shapeFlag & 256) && u.a && Ce(u.a, v), u.isMounted = !0, d = g = _ = null;
      }
    };
    u.scope.on();
    const S = u.effect = new $r(E);
    u.scope.off();
    const b = u.update = S.run.bind(S), F = u.job = S.runIfDirty.bind(S);
    F.i = u, F.id = u.uid, S.scheduler = () => Ls(F), ft(u, !0), b();
  }, te = (u, d, g) => {
    d.component = u;
    const _ = u.vnode.props;
    u.vnode = d, u.next = null, Po(u, d.props, _, g), Vo(u, d.children, g), ct(), tr(u), ut();
  }, G = (u, d, g, _, v, y, C, E, S = !1) => {
    const b = u && u.children, F = u ? u.shapeFlag : 0, T = d.children, { patchFlag: A, shapeFlag: P } = d;
    if (A > 0) {
      if (A & 128) {
        M(
          b,
          T,
          g,
          _,
          v,
          y,
          C,
          E,
          S
        );
        return;
      } else if (A & 256) {
        ke(
          b,
          T,
          g,
          _,
          v,
          y,
          C,
          E,
          S
        );
        return;
      }
    }
    P & 8 ? (F & 16 && Le(b, v, y), T !== b && f(g, T)) : F & 16 ? P & 16 ? M(
      b,
      T,
      g,
      _,
      v,
      y,
      C,
      E,
      S
    ) : Le(b, v, y, !0) : (F & 8 && f(g, ""), P & 16 && re(
      T,
      g,
      _,
      v,
      y,
      C,
      E,
      S
    ));
  }, ke = (u, d, g, _, v, y, C, E, S) => {
    u = u || At, d = d || At;
    const b = u.length, F = d.length, T = Math.min(b, F);
    let A;
    for (A = 0; A < T; A++) {
      const P = d[A] = S ? lt(d[A]) : Ke(d[A]);
      x(
        u[A],
        P,
        g,
        null,
        v,
        y,
        C,
        E,
        S
      );
    }
    b > F ? Le(
      u,
      v,
      y,
      !0,
      !1,
      T
    ) : re(
      d,
      g,
      _,
      v,
      y,
      C,
      E,
      S,
      T
    );
  }, M = (u, d, g, _, v, y, C, E, S) => {
    let b = 0;
    const F = d.length;
    let T = u.length - 1, A = F - 1;
    for (; b <= T && b <= A; ) {
      const P = u[b], k = d[b] = S ? lt(d[b]) : Ke(d[b]);
      if (Bt(P, k))
        x(
          P,
          k,
          g,
          null,
          v,
          y,
          C,
          E,
          S
        );
      else
        break;
      b++;
    }
    for (; b <= T && b <= A; ) {
      const P = u[T], k = d[A] = S ? lt(d[A]) : Ke(d[A]);
      if (Bt(P, k))
        x(
          P,
          k,
          g,
          null,
          v,
          y,
          C,
          E,
          S
        );
      else
        break;
      T--, A--;
    }
    if (b > T) {
      if (b <= A) {
        const P = A + 1, k = P < F ? d[P].el : _;
        for (; b <= A; )
          x(
            null,
            d[b] = S ? lt(d[b]) : Ke(d[b]),
            g,
            k,
            v,
            y,
            C,
            E,
            S
          ), b++;
      }
    } else if (b > A)
      for (; b <= T; )
        H(u[b], v, y, !0), b++;
    else {
      const P = b, k = b, Z = /* @__PURE__ */ new Map();
      for (b = k; b <= A; b++) {
        const Ae = d[b] = S ? lt(d[b]) : Ke(d[b]);
        Ae.key != null && Z.set(Ae.key, b);
      }
      let q, Te = 0;
      const ve = A - k + 1;
      let Ne = !1, Oe = 0;
      const jt = new Array(ve);
      for (b = 0; b < ve; b++) jt[b] = 0;
      for (b = P; b <= T; b++) {
        const Ae = u[b];
        if (Te >= ve) {
          H(Ae, v, y, !0);
          continue;
        }
        let je;
        if (Ae.key != null)
          je = Z.get(Ae.key);
        else
          for (q = k; q <= A; q++)
            if (jt[q - k] === 0 && Bt(Ae, d[q])) {
              je = q;
              break;
            }
        je === void 0 ? H(Ae, v, y, !0) : (jt[je - k] = b + 1, je >= Oe ? Oe = je : Ne = !0, x(
          Ae,
          d[je],
          g,
          null,
          v,
          y,
          C,
          E,
          S
        ), Te++);
      }
      const Ks = Ne ? $o(jt) : At;
      for (q = Ks.length - 1, b = ve - 1; b >= 0; b--) {
        const Ae = k + b, je = d[Ae], zs = Ae + 1 < F ? d[Ae + 1].el : _;
        jt[b] === 0 ? x(
          null,
          je,
          g,
          zs,
          v,
          y,
          C,
          E,
          S
        ) : Ne && (q < 0 || b !== Ks[q] ? L(je, g, zs, 2) : q--);
      }
    }
  }, L = (u, d, g, _, v = null) => {
    const { el: y, type: C, transition: E, children: S, shapeFlag: b } = u;
    if (b & 6) {
      L(u.component.subTree, d, g, _);
      return;
    }
    if (b & 128) {
      u.suspense.move(d, g, _);
      return;
    }
    if (b & 64) {
      C.move(u, d, g, $t);
      return;
    }
    if (C === ge) {
      s(y, d, g);
      for (let T = 0; T < S.length; T++)
        L(S[T], d, g, _);
      s(u.anchor, d, g);
      return;
    }
    if (C === ts) {
      j(u, d, g);
      return;
    }
    if (_ !== 2 && b & 1 && E)
      if (_ === 0)
        E.beforeEnter(y), s(y, d, g), Ce(() => E.enter(y), v);
      else {
        const { leave: T, delayLeave: A, afterLeave: P } = E, k = () => s(y, d, g), Z = () => {
          T(y, () => {
            k(), P && P();
          });
        };
        A ? A(y, k, Z) : Z();
      }
    else
      s(y, d, g);
  }, H = (u, d, g, _ = !1, v = !1) => {
    const {
      type: y,
      props: C,
      ref: E,
      children: S,
      dynamicChildren: b,
      shapeFlag: F,
      patchFlag: T,
      dirs: A,
      cacheIndex: P
    } = u;
    if (T === -2 && (v = !1), E != null && us(E, null, g, u, !0), P != null && (d.renderCache[P] = void 0), F & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const k = F & 1 && A, Z = !Jt(u);
    let q;
    if (Z && (q = C && C.onVnodeBeforeUnmount) && Ue(q, d, u), F & 6)
      $e(u.component, g, _);
    else {
      if (F & 128) {
        u.suspense.unmount(g, _);
        return;
      }
      k && at(u, null, d, "beforeUnmount"), F & 64 ? u.type.remove(
        u,
        d,
        g,
        $t,
        _
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== ge || T > 0 && T & 64) ? Le(
        b,
        d,
        g,
        !1,
        !0
      ) : (y === ge && T & 384 || !v && F & 16) && Le(S, d, g), _ && ae(u);
    }
    (Z && (q = C && C.onVnodeUnmounted) || k) && Ce(() => {
      q && Ue(q, d, u), k && at(u, null, d, "unmounted");
    }, g);
  }, ae = (u) => {
    const { type: d, el: g, anchor: _, transition: v } = u;
    if (d === ge) {
      de(g, _);
      return;
    }
    if (d === ts) {
      O(u);
      return;
    }
    const y = () => {
      r(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: C, delayLeave: E } = v, S = () => C(g, y);
      E ? E(u.el, y, S) : S();
    } else
      y();
  }, de = (u, d) => {
    let g;
    for (; u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, $e = (u, d, g) => {
    const { bum: _, scope: v, job: y, subTree: C, um: E, m: S, a: b } = u;
    ur(S), ur(b), _ && _n(_), v.stop(), y && (y.flags |= 8, H(C, u, d, g)), E && Ce(E, d), Ce(() => {
      u.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, Le = (u, d, g, _ = !1, v = !1, y = 0) => {
    for (let C = y; C < u.length; C++)
      H(u[C], d, g, _, v);
  }, xt = (u) => {
    if (u.shapeFlag & 6)
      return xt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), g = d && d[cl];
    return g ? p(g) : d;
  };
  let zn = !1;
  const Us = (u, d, g) => {
    u == null ? d._vnode && H(d._vnode, null, null, !0) : x(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, zn || (zn = !0, tr(), ll(), zn = !1);
  }, $t = {
    p: x,
    um: H,
    m: L,
    r: ae,
    mt: kt,
    mc: re,
    pc: G,
    pbc: W,
    n: xt,
    o: e
  };
  let Bs, Ws;
  return {
    render: Us,
    hydrate: Bs,
    createApp: Mo(Us, Bs)
  };
}
function Qn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ft({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ko(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hs(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let l = 0; l < s.length; l++) {
      const i = s[l];
      let o = r[l];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[l] = lt(r[l]), o.el = i.el), !n && o.patchFlag !== -2 && Hs(i, o)), o.type === Bn && (o.el = i.el);
    }
}
function $o(e) {
  const t = e.slice(), n = [0];
  let s, r, l, i, o;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (l = 0, i = n.length - 1; l < i; )
        o = l + i >> 1, e[n[o]] < a ? l = o + 1 : i = o;
      a < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), n[l] = s);
    }
  }
  for (l = n.length, i = n[l - 1]; l-- > 0; )
    n[l] = i, i = t[i];
  return n;
}
function El(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : El(t);
}
function ur(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const jo = Symbol.for("v-scx"), Uo = () => xn(jo);
function nn(e, t) {
  return jn(e, null, t);
}
function Bo(e, t) {
  return jn(
    e,
    null,
    { flush: "post" }
  );
}
function qe(e, t, n) {
  return jn(e, t, n);
}
function jn(e, t, n = X) {
  const { immediate: s, deep: r, flush: l, once: i } = n, o = me({}, n);
  let c;
  if (Wn)
    if (l === "sync") {
      const p = Uo();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!t || s)
      o.once = !0;
    else {
      const p = () => {
      };
      return p.stop = ze, p.resume = ze, p.pause = ze, p;
    }
  const a = _e;
  o.call = (p, m, w) => Je(p, a, m, w);
  let f = !1;
  l === "post" ? o.scheduler = (p) => {
    Ce(p, a && a.suspense);
  } : l !== "sync" && (f = !0, o.scheduler = (p, m) => {
    m ? p() : Ls(p);
  }), o.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, a && (p.id = a.uid, p.i = a));
  };
  const h = Qi(e, t, o);
  return c && c.push(h), h;
}
function Wo(e, t, n) {
  const s = this.proxy, r = se(e) ? e.includes(".") ? Cl(s, e) : () => s[e] : e.bind(s, s);
  let l;
  V(t) ? l = t : (l = t.handler, n = t);
  const i = un(this), o = jn(r, l.bind(s), n);
  return i(), o;
}
function Cl(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ko = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${mt(t)}Modifiers`] || e[`${bt(t)}Modifiers`];
function zo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  let r = n;
  const l = t.startsWith("update:"), i = l && Ko(s, t.slice(7));
  i && (i.trim && (r = n.map((f) => se(f) ? f.trim() : f)), i.number && (r = n.map(Cn)));
  let o, c = s[o = qn(t)] || // also try camelCase event handler (#2249)
  s[o = qn(mt(t))];
  !c && l && (c = s[o = qn(bt(t))]), c && Je(
    c,
    e,
    6,
    r
  );
  const a = s[o + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Je(
      a,
      e,
      6,
      r
    );
  }
}
function Tl(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let i = {}, o = !1;
  if (!V(e)) {
    const c = (a) => {
      const f = Tl(a, t, !0);
      f && (o = !0, me(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !o ? (ee(e) && s.set(e, null), null) : (I(l) ? l.forEach((c) => i[c] = null) : me(i, l), ee(e) && s.set(e, i), i);
}
function Un(e, t) {
  return !e || !Ln(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, bt(t)) || z(e, t));
}
function es(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [l],
    slots: i,
    attrs: o,
    emit: c,
    render: a,
    renderCache: f,
    props: h,
    data: p,
    setupState: m,
    ctx: w,
    inheritAttrs: x
  } = e, D = An(e);
  let R, N;
  try {
    if (n.shapeFlag & 4) {
      const O = r || s, U = O;
      R = Ke(
        a.call(
          U,
          O,
          f,
          h,
          m,
          p,
          w
        )
      ), N = o;
    } else {
      const O = t;
      R = Ke(
        O.length > 1 ? O(
          h,
          { attrs: o, slots: i, emit: c }
        ) : O(
          h,
          null
        )
      ), N = t.props ? o : qo(o);
    }
  } catch (O) {
    Xt.length = 0, Hn(O, e, 1), R = tt(_t);
  }
  let j = R;
  if (N && x !== !1) {
    const O = Object.keys(N), { shapeFlag: U } = j;
    O.length && U & 7 && (l && O.some(_s) && (N = Go(
      N,
      l
    )), j = Lt(j, N, !1, !0));
  }
  return n.dirs && (j = Lt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && Ns(j, n.transition), R = j, An(D), R;
}
const qo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ln(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Go = (e, t) => {
  const n = {};
  for (const s in e)
    (!_s(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Jo(e, t, n) {
  const { props: s, children: r, component: l } = e, { props: i, children: o, patchFlag: c } = t, a = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? ar(s, i, a) : !!i;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const p = f[h];
        if (i[p] !== s[p] && !Un(a, p))
          return !0;
      }
    }
  } else
    return (r || o) && (!o || !o.$stable) ? !0 : s === i ? !1 : s ? i ? ar(s, i, a) : !0 : !!i;
  return !1;
}
function ar(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    if (t[l] !== e[l] && !Un(n, l))
      return !0;
  }
  return !1;
}
function Yo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ol = (e) => e.__isSuspense;
function Xo(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : no(e);
}
const ge = Symbol.for("v-fgt"), Bn = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), ts = Symbol.for("v-stc"), Xt = [];
let Fe = null;
function Y(e = !1) {
  Xt.push(Fe = e ? null : []);
}
function Zo() {
  Xt.pop(), Fe = Xt[Xt.length - 1] || null;
}
let sn = 1;
function fr(e) {
  sn += e, e < 0 && Fe && (Fe.hasOnce = !0);
}
function Al(e) {
  return e.dynamicChildren = sn > 0 ? Fe || At : null, Zo(), sn > 0 && Fe && Fe.push(e), e;
}
function ne(e, t, n, s, r, l) {
  return Al(
    oe(
      e,
      t,
      n,
      s,
      r,
      l,
      !0
    )
  );
}
function In(e, t, n, s, r) {
  return Al(
    tt(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ml(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fl = ({ key: e }) => e ?? null, Sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || fe(e) || V(e) ? { i: Me, r: e, k: t, f: !!n } : e : null);
function oe(e, t = null, n = null, s = 0, r = null, l = e === ge ? 0 : 1, i = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fl(t),
    ref: t && Sn(t),
    scopeId: ol,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Me
  };
  return o ? ($s(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), sn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Fe.push(c), c;
}
const tt = Qo;
function Qo(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === wo) && (e = _t), Ml(e)) {
    const o = Lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $s(o, n), sn > 0 && !l && Fe && (o.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = o : Fe.push(o)), o.patchFlag = -2, o;
  }
  if (oc(e) && (e = e.__vccOpts), t) {
    t = ks(t);
    let { class: o, style: c } = t;
    o && !se(o) && (t.class = Ht(o)), ee(c) && (Is(c) && !I(c) && (c = me({}, c)), t.style = Dt(c));
  }
  const i = se(e) ? 1 : Ol(e) ? 128 : ro(e) ? 64 : ee(e) ? 4 : V(e) ? 2 : 0;
  return oe(
    e,
    t,
    n,
    s,
    r,
    i,
    l,
    !0
  );
}
function ks(e) {
  return e ? Is(e) || vl(e) ? me({}, e) : e : null;
}
function Lt(e, t, n = !1, s = !1) {
  const { props: r, ref: l, patchFlag: i, children: o, transition: c } = e, a = t ? rn(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Fl(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? I(l) ? l.concat(Sn(t)) : [l, Sn(t)] : Sn(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Lt(e.ssContent),
    ssFallback: e.ssFallback && Lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Ns(
    f,
    c.clone(f)
  ), f;
}
function ps(e = " ", t = 0) {
  return tt(Bn, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (Y(), In(_t, null, e)) : tt(_t, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? tt(_t) : I(e) ? tt(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ml(e) ? lt(e) : tt(Bn, null, String(e));
}
function lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Lt(e);
}
function $s(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $s(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !vl(t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else V(t) ? (t = { default: t, _ctx: Me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ps(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function rn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ht([t.class, s.class]));
      else if (r === "style")
        t.style = Dt([t.style, s.style]);
      else if (Ln(r)) {
        const l = t[r], i = s[r];
        i && l !== i && !(I(l) && l.includes(i)) && (t[r] = l ? [].concat(l, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ue(e, t, n, s = null) {
  Je(e, t, 7, [
    n,
    s
  ]);
}
const ec = pl();
let tc = 0;
function nc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || ec, l = {
    uid: tc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new yi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _l(s, r),
    emitsOptions: Tl(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = zo.bind(null, l), e.ce && e.ce(l), l;
}
let _e = null;
const Il = () => _e || Me;
let Pn, gs;
{
  const e = Lr(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (l) => {
      r.length > 1 ? r.forEach((i) => i(l)) : r[0](l);
    };
  };
  Pn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), gs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wn = n
  );
}
const un = (e) => {
  const t = _e;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, dr = () => {
  _e && _e.scope.off(), Pn(null);
};
function Pl(e) {
  return e.vnode.shapeFlag & 4;
}
let Wn = !1;
function sc(e, t = !1, n = !1) {
  t && gs(t);
  const { props: s, children: r } = e.vnode, l = Pl(e);
  Io(e, s, l, t), No(e, r, n);
  const i = l ? rc(e, t) : void 0;
  return t && gs(!1), i;
}
function rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xo);
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? ic(e) : null, l = un(e);
    ct();
    const i = on(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (ut(), l(), Mr(i)) {
      if (Jt(e) || al(e), i.then(dr, dr), t)
        return i.then((o) => {
          hr(e, o, t);
        }).catch((o) => {
          Hn(o, e, 0);
        });
      e.asyncDep = i;
    } else
      hr(e, i, t);
  } else
    Rl(e, t);
}
function hr(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) && (e.setupState = nl(t)), Rl(e, n);
}
let pr;
function Rl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && pr && !s.render) {
      const r = s.template || Vs(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: i } = e.appContext.config, { delimiters: o, compilerOptions: c } = s, a = me(
          me(
            {
              isCustomElement: l,
              delimiters: o
            },
            i
          ),
          c
        );
        s.render = pr(r, a);
      }
    }
    e.render = s.render || ze;
  }
  {
    const r = un(e);
    ct();
    try {
      So(e);
    } finally {
      ut(), r();
    }
  }
}
const lc = {
  get(e, t) {
    return we(e, "get", ""), e[t];
  }
};
function ic(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nl(Bi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Yt)
        return Yt[n](e);
    },
    has(t, n) {
      return n in t || n in Yt;
    }
  })) : e.proxy;
}
function oc(e) {
  return V(e) && "__vccOpts" in e;
}
const be = (e, t) => Xi(e, t, Wn), cc = "3.5.9";
/**
* @vue/runtime-dom v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ms;
const gr = typeof window < "u" && window.trustedTypes;
if (gr)
  try {
    ms = /* @__PURE__ */ gr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ll = ms ? (e) => ms.createHTML(e) : (e) => e, uc = "http://www.w3.org/2000/svg", ac = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, mr = Xe && /* @__PURE__ */ Xe.createElement("template"), fc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Xe.createElementNS(uc, e) : t === "mathml" ? Xe.createElementNS(ac, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, l) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === l || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === l || !(r = r.nextSibling)); )
        ;
    else {
      mr.innerHTML = Ll(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = mr.content;
      if (s === "svg" || s === "mathml") {
        const c = o.firstChild;
        for (; c.firstChild; )
          o.appendChild(c.firstChild);
        o.removeChild(c);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, dc = Symbol("_vtc");
function hc(e, t, n) {
  const s = e[dc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Rn = Symbol("_vod"), Nl = Symbol("_vsh"), Vl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Rn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Wt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Wt(e, !0), s.enter(e)) : s.leave(e, () => {
      Wt(e, !1);
    }) : Wt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Wt(e, t);
  }
};
function Wt(e, t) {
  e.style.display = t ? e[Rn] : "none", e[Nl] = !t;
}
const pc = Symbol(""), gc = /(^|;)\s*display\s*:/;
function mc(e, t, n) {
  const s = e.style, r = se(n);
  let l = !1;
  if (n && !r) {
    if (t)
      if (se(t))
        for (const i of t.split(";")) {
          const o = i.slice(0, i.indexOf(":")).trim();
          n[o] == null && En(s, o, "");
        }
      else
        for (const i in t)
          n[i] == null && En(s, i, "");
    for (const i in n)
      i === "display" && (l = !0), En(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[pc];
      i && (n += ";" + i), s.cssText = n, l = gc.test(n);
    }
  } else t && e.removeAttribute("style");
  Rn in e && (e[Rn] = l ? s.display : "", e[Nl] && (s.display = "none"));
}
const vr = /\s*!important$/;
function En(e, t, n) {
  if (I(n))
    n.forEach((s) => En(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = vc(e, t);
    vr.test(n) ? e.setProperty(
      bt(s),
      n.replace(vr, ""),
      "important"
    ) : e[s] = n;
  }
}
const yr = ["Webkit", "Moz", "ms"], ns = {};
function vc(e, t) {
  const n = ns[t];
  if (n)
    return n;
  let s = mt(t);
  if (s !== "filter" && s in e)
    return ns[t] = s;
  s = Pr(s);
  for (let r = 0; r < yr.length; r++) {
    const l = yr[r] + s;
    if (l in e)
      return ns[t] = l;
  }
  return t;
}
const _r = "http://www.w3.org/1999/xlink";
function br(e, t, n, s, r, l = mi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_r, t.slice(6, t.length)) : e.setAttributeNS(_r, t, n) : n == null || l && !Vr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Ge(n) ? String(n) : n
  );
}
function yc(e, t, n, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ll(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const i = r === "OPTION" ? e.getAttribute("value") || "" : e.value, o = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (i !== o || !("_value" in e)) && (e.value = o), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean" ? n = Vr(n) : n == null && i === "string" ? (n = "", l = !0) : i === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function Qe(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function _c(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const wr = Symbol("_vei");
function bc(e, t, n, s, r = null) {
  const l = e[wr] || (e[wr] = {}), i = l[t];
  if (s && i)
    i.value = s;
  else {
    const [o, c] = wc(t);
    if (s) {
      const a = l[t] = Ec(
        s,
        r
      );
      Qe(e, o, a, c);
    } else i && (_c(e, o, i, c), l[t] = void 0);
  }
}
const xr = /(?:Once|Passive|Capture)$/;
function wc(e) {
  let t;
  if (xr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(xr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : bt(e.slice(2)), t];
}
let ss = 0;
const xc = /* @__PURE__ */ Promise.resolve(), Sc = () => ss || (xc.then(() => ss = 0), ss = Date.now());
function Ec(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Je(
      Cc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Sc(), n;
}
function Cc(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tc = (e, t, n, s, r, l) => {
  const i = r === "svg";
  t === "class" ? hc(e, s, i) : t === "style" ? mc(e, n, s) : Ln(t) ? _s(t) || bc(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Oc(e, t, s, i)) ? (yc(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && br(e, t, s, i, l, t !== "value")) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), br(e, t, s, i));
};
function Oc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Sr(t) && V(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Sr(t) && se(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !se(n)));
}
const ot = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => _n(t, n) : t;
};
function Ac(e) {
  e.target.composing = !0;
}
function Er(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Re = Symbol("_assign"), vs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Re] = ot(r);
    const l = s || r.props && r.props.type === "number";
    Qe(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let o = e.value;
      n && (o = o.trim()), l && (o = Cn(o)), e[Re](o);
    }), n && Qe(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Qe(e, "compositionstart", Ac), Qe(e, "compositionend", Er), Qe(e, "change", Er));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: l } }, i) {
    if (e[Re] = ot(i), e.composing) return;
    const o = (l || e.type === "number") && !/^0\d/.test(e.value) ? Cn(e.value) : e.value, c = t ?? "";
    o !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, Mc = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Re] = ot(n), Qe(e, "change", () => {
      const s = e._modelValue, r = Nt(e), l = e.checked, i = e[Re];
      if (I(s)) {
        const o = xs(s, r), c = o !== -1;
        if (l && !c)
          i(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(o, 1), i(a);
        }
      } else if (Vt(s)) {
        const o = new Set(s);
        l ? o.add(r) : o.delete(r), i(o);
      } else
        i(Dl(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Cr,
  beforeUpdate(e, t, n) {
    e[Re] = ot(n), Cr(e, t, n);
  }
};
function Cr(e, { value: t }, n) {
  e._modelValue = t;
  let s;
  I(t) ? s = xs(t, n.props.value) > -1 : Vt(t) ? s = t.has(n.props.value) : s = vt(t, Dl(e, !0)), e.checked !== s && (e.checked = s);
}
const Fc = {
  created(e, { value: t }, n) {
    e.checked = vt(t, n.props.value), e[Re] = ot(n), Qe(e, "change", () => {
      e[Re](Nt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Re] = ot(s), t !== n && (e.checked = vt(t, s.props.value));
  }
}, Ic = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Vt(t);
    Qe(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Cn(Nt(i)) : Nt(i)
      );
      e[Re](
        e.multiple ? r ? new Set(l) : l : l[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[Re] = ot(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Tr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Re] = ot(n);
  },
  updated(e, { value: t }) {
    e._assigning || Tr(e, t);
  }
};
function Tr(e, t) {
  const n = e.multiple, s = I(t);
  if (!(n && !s && !Vt(t))) {
    for (let r = 0, l = e.options.length; r < l; r++) {
      const i = e.options[r], o = Nt(i);
      if (n)
        if (s) {
          const c = typeof o;
          c === "string" || c === "number" ? i.selected = t.some((a) => String(a) === String(o)) : i.selected = xs(t, o) > -1;
        } else
          i.selected = t.has(o);
      else if (vt(Nt(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Nt(e) {
  return "_value" in e ? e._value : e.value;
}
function Dl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Pc = {
  created(e, t, n) {
    yn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    yn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    yn(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    yn(e, t, n, s, "updated");
  }
};
function Rc(e, t) {
  switch (e) {
    case "SELECT":
      return Ic;
    case "TEXTAREA":
      return vs;
    default:
      switch (t) {
        case "checkbox":
          return Mc;
        case "radio":
          return Fc;
        default:
          return vs;
      }
  }
}
function yn(e, t, n, s, r) {
  const i = Rc(
    e.tagName,
    n.props && n.props.type
  )[r];
  i && i(e, t, n, s);
}
const Lc = ["ctrl", "shift", "alt", "meta"], Nc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Lc.some((n) => e[`${n}Key`] && !t.includes(n))
}, pt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...l) => {
    for (let i = 0; i < t.length; i++) {
      const o = Nc[t[i]];
      if (o && o(r, t)) return;
    }
    return e(r, ...l);
  });
}, Vc = /* @__PURE__ */ me({ patchProp: Tc }, fc);
let Or;
function Dc() {
  return Or || (Or = Do(Vc));
}
const Hl = (...e) => {
  const t = Dc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = kc(s);
    if (!r) return;
    const l = t._component;
    !V(l) && !l.render && !l.template && (l.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Hc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Hc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function kc(e) {
  return se(e) ? document.querySelector(e) : e;
}
function $c(e) {
  return kr() ? (_i(e), !0) : !1;
}
function kl(e) {
  return typeof e == "function" ? e() : $(e);
}
const jc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Uc(e) {
  return Il();
}
function Bc(e, t = !0, n) {
  Uc() ? cn(e, n) : t ? e() : Rt(e);
}
const $l = jc ? window : void 0;
function Tt(e) {
  var t;
  const n = kl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Wc() {
  const e = J(!1), t = Il();
  return t && cn(() => {
    e.value = !0;
  }, t), e;
}
function Kc(e) {
  const t = Wc();
  return be(() => (t.value, !!e()));
}
function zc(e, t, n = {}) {
  const { window: s = $l, ...r } = n;
  let l;
  const i = Kc(() => s && "ResizeObserver" in s), o = () => {
    l && (l.disconnect(), l = void 0);
  }, c = be(() => {
    const h = kl(e);
    return Array.isArray(h) ? h.map((p) => Tt(p)) : [Tt(h)];
  }), a = qe(
    c,
    (h) => {
      if (o(), i.value && s) {
        l = new ResizeObserver(t);
        for (const p of h)
          p && l.observe(p, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    o(), a();
  };
  return $c(f), {
    isSupported: i,
    stop: f
  };
}
function qc(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = $l, box: r = "content-box" } = n, l = be(() => {
    var h, p;
    return (p = (h = Tt(e)) == null ? void 0 : h.namespaceURI) == null ? void 0 : p.includes("svg");
  }), i = J(t.width), o = J(t.height), { stop: c } = zc(
    e,
    ([h]) => {
      const p = r === "border-box" ? h.borderBoxSize : r === "content-box" ? h.contentBoxSize : h.devicePixelContentBoxSize;
      if (s && l.value) {
        const m = Tt(e);
        if (m) {
          const w = m.getBoundingClientRect();
          i.value = w.width, o.value = w.height;
        }
      } else if (p) {
        const m = Array.isArray(p) ? p : [p];
        i.value = m.reduce((w, { inlineSize: x }) => w + x, 0), o.value = m.reduce((w, { blockSize: x }) => w + x, 0);
      } else
        i.value = h.contentRect.width, o.value = h.contentRect.height;
    },
    n
  );
  Bc(() => {
    const h = Tt(e);
    h && (i.value = "offsetWidth" in h ? h.offsetWidth : t.width, o.value = "offsetHeight" in h ? h.offsetHeight : t.height);
  });
  const a = qe(
    () => Tt(e),
    (h) => {
      i.value = h ? t.width : 0, o.value = h ? t.height : 0;
    }
  );
  function f() {
    c(), a();
  }
  return {
    width: i,
    height: o,
    stop: f
  };
}
function jl(e, t) {
  const { containerStyle: n, wrapperProps: s, scrollTo: r, calculateRange: l, currentList: i, containerRef: o } = "itemHeight" in t ? Yc(t, e) : Jc(t, e);
  return {
    list: i,
    scrollTo: r,
    containerProps: {
      ref: o,
      onScroll: () => {
        l();
      },
      style: n
    },
    wrapperProps: s
  };
}
function Ul(e) {
  const t = J(null), n = qc(t), s = J([]), r = Wi(e);
  return { state: J({ start: 0, end: 10 }), source: r, currentList: s, size: n, containerRef: t };
}
function Bl(e, t, n) {
  return (s) => {
    if (typeof n == "number")
      return Math.ceil(s / n);
    const { start: r = 0 } = e.value;
    let l = 0, i = 0;
    for (let o = r; o < t.value.length; o++) {
      const c = n(o);
      if (l += c, i = o, l > s)
        break;
    }
    return i - r;
  };
}
function Wl(e, t) {
  return (n) => {
    if (typeof t == "number")
      return Math.floor(n / t) + 1;
    let s = 0, r = 0;
    for (let l = 0; l < e.value.length; l++) {
      const i = t(l);
      if (s += i, s >= n) {
        r = l;
        break;
      }
    }
    return r + 1;
  };
}
function Kl(e, t, n, s, { containerRef: r, state: l, currentList: i, source: o }) {
  return () => {
    const c = r.value;
    if (c) {
      const a = n(e === "vertical" ? c.scrollTop : c.scrollLeft), f = s(e === "vertical" ? c.clientHeight : c.clientWidth), h = a - t, p = a + f + t;
      l.value = {
        start: h < 0 ? 0 : h,
        end: p > o.value.length ? o.value.length : p
      }, i.value = o.value.slice(l.value.start, l.value.end).map((m, w) => ({
        data: m,
        index: w + l.value.start
      }));
    }
  };
}
function zl(e, t) {
  return (n) => typeof e == "number" ? n * e : t.value.slice(0, n).reduce((r, l, i) => r + e(i), 0);
}
function ql(e, t, n, s) {
  qe([e.width, e.height, t, n], () => {
    s();
  });
}
function Gl(e, t) {
  return be(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, s, r) => n + e(r), 0));
}
const Gc = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Jl(e, t, n, s) {
  return (r) => {
    s.value && (s.value[Gc[e]] = n(r), t());
  };
}
function Jc(e, t) {
  const n = Ul(t), { state: s, source: r, currentList: l, size: i, containerRef: o } = n, c = { overflowX: "auto" }, { itemWidth: a, overscan: f = 5 } = e, h = Bl(s, r, a), p = Wl(r, a), m = Kl("horizontal", f, p, h, n), w = zl(a, r), x = be(() => w(s.value.start)), D = Gl(a, r);
  ql(i, t, o, m);
  const R = Jl("horizontal", m, w, o), N = be(() => ({
    style: {
      height: "100%",
      width: `${D.value - x.value}px`,
      marginLeft: `${x.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: R,
    calculateRange: m,
    wrapperProps: N,
    containerStyle: c,
    currentList: l,
    containerRef: o
  };
}
function Yc(e, t) {
  const n = Ul(t), { state: s, source: r, currentList: l, size: i, containerRef: o } = n, c = { overflowY: "auto" }, { itemHeight: a, overscan: f = 5 } = e, h = Bl(s, r, a), p = Wl(r, a), m = Kl("vertical", f, p, h, n), w = zl(a, r), x = be(() => w(s.value.start)), D = Gl(a, r);
  ql(i, t, o, m);
  const R = Jl("vertical", m, w, o), N = be(() => ({
    style: {
      width: "100%",
      height: `${D.value - x.value}px`,
      marginTop: `${x.value}px`
    }
  }));
  return {
    calculateRange: m,
    scrollTo: R,
    containerStyle: c,
    wrapperProps: N,
    currentList: l,
    containerRef: o
  };
}
const dt = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, Xc = (e) => {
  try {
    var t = JSON.parse(e);
    if (t && typeof t == "object")
      return t;
  } catch {
  }
  return e;
}, Zc = (e, t, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const s = {
    defaultArray: e.value,
    get: () => e.value,
    push: (r, l, i = null) => {
      parseInt(r) == r && (r = parseInt(r));
      const o = e.map.get(r);
      if (o)
        o.value = l, o.data = i;
      else {
        let c = { value: l, key: r, data: i };
        e.value.push(c), e.map.set(c.key, c);
      }
    },
    addRange: (r) => {
      for (let l of r)
        e.actions.push(l.key, l.value, l.data);
    },
    remove: (r) => {
      e.value.splice(e.value.findIndex((l) => l.key == r), 1);
    },
    clear: () => {
      e.value = [];
    },
    sort: (r = null) => {
      r == null && (r = (l, i) => l.value.localeCompare(i.value)), e.value = e.value.sort(r);
    },
    setDefault: function(r) {
      this.defaultArray = r;
    },
    restoreDefault: function() {
      e.value = this.defaultArray;
    },
    filter: function(r) {
    },
    selection: {
      get() {
        return t.value;
      },
      clear() {
        t.value.clear();
      },
      add(r) {
        t.value.set(r, r);
      },
      remove(r) {
        t.value.delete(r);
      }
    }
  };
  window.ExtraSelectOptions[n] = s, e.actions = s;
};
let Qc = 1;
const Yl = (e) => {
  e && (e.style.display = "none", li(e));
}, Xl = (e, t, n, s) => {
  const r = J(/* @__PURE__ */ new Map());
  nn(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = J([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, nn(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: dt(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((f) => dt(f.value)).filter((f) => f != null))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, f) => (a.push({
        value: f.text,
        key: dt(f.value),
        data: Object.keys(f.dataset).reduce((h, p) => (h[p] = Xc(f.dataset[p]), h), {})
      }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (l.value = [{ value: a, key: a }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(dt(a), dt(a));
  else s != null && r.value.set(dt(s), dt(s));
  let i = e == null ? void 0 : e.id;
  (i == null || i === "" || i == 0) && (i = "extraselect_" + (++Qc).toString()), Zc(l, r, i);
  const o = [];
  return r.value.forEach((a, f) => {
    o.push([f, a]);
  }), { options: l, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, f] of o)
      r.value.set(a, f);
  } };
};
J({});
function eu(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const js = (e = null) => {
  var s;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...((s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) ?? {} };
  Object.assign(n, e ?? {}), Zl(J(n), "defaults");
}, Zl = (e, t) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, js());
  const n = {
    defaultArray: e.value,
    list: () => e.value,
    get: (s) => e.value[s] ?? null,
    push: (s, r) => {
      e.value[s] = r;
    }
  };
  window.ExtraSelectLocalization[t] = n, e.actions = n;
};
let tu = 0;
const Ql = (e, t) => (Zl(t, (e == null ? void 0 : e.id) ?? "extraselect_" + (++tu).toString()), { propLocalization: t, t: (s, r = {}) => {
  let l = t.value[s] ?? window.ExtraSelectLocalization.defaults.get(s);
  return l == null && (window.ExtraSelectLocalization.defaults.push(s, s), l = s), eu(l, r);
} }), Ar = async function(e, t = null, n = {}) {
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...n.headers ?? {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, ei = (e, t, n, s, r, l, i = "limited", o = {}) => {
  const c = J(0), a = J(!1), f = be(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      nn((p) => {
        if (s.value.length >= r) {
          let m = !0;
          switch (i) {
            case "always":
              break;
            default:
            case "limited":
              m = !h.includes(s.value);
              break;
            case "complete":
              m = h.reduce((w, x) => w && !s.value.startsWith(x), !0);
              break;
          }
          if (m) {
            a.value = !0;
            const w = setTimeout(() => {
              h.push(s.value), c.value += 1, o.body = { ...o.body, ...l.value }, Ar(t, s.value, o).then((x) => {
                e.actions.addRange(x), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(w);
            });
          }
        }
      });
    } else
      Ar(t, null, o).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: f };
}, ti = (e, t, n, s = [], r = []) => {
  const l = J(""), i = J([]), o = J({}), c = { ...s.reduce((f, h) => (f[h] = !1, f), {}), ...r.reduce((f, h) => (f[h] = !0, f), {}) };
  for (let f in c) {
    let h = c[f], p = document.getElementById(f);
    o.value[f] = p == null ? void 0 : p.value, p && p.addEventListener("change", (m) => {
      o.value[f] = m.target.value, h && Rt(() => {
        if (t != null)
          for (let w of Array.from(t.value.keys()))
            i.value.find((x) => x.key == w) || n(w, !1);
        else i.value.find((w) => w.key == l.value) || n(l.value, !1);
      });
    });
  }
  const a = function(f, h) {
    let p = f.value;
    return Object.keys(o.value).length > 0 && (p = p.filter((m) => {
      var w;
      for (let x in o.value)
        if ((c[x] ? !0 : (o.value[x] ?? "").length > 0) && ((w = m.data) != null && w.hasOwnProperty(x))) {
          if (Array.isArray(m.data[x])) {
            if (!m.data[x].includes(o.value[x]))
              return !1;
          } else if (m.data[x] != o.value[x])
            return !1;
        }
      return !0;
    })), h.length > 0 && (p = p.filter((m) => m.value.toLowerCase().includes(h.toLowerCase()))), p;
  };
  return nn(() => {
    i.value = a(e, l.value);
  }), { filterText: l, filteredOptions: i, filterValues: o };
}, ni = (e, t, n, s, r, l, i) => {
  const o = getComputedStyle(document.querySelector("body")).font, c = function(h) {
    const m = document.createElement("canvas").getContext("2d");
    return m.font = o, m.measureText(h).width;
  }, a = be(() => {
    const h = an(s.value).width ?? 100;
    if (i === "inherit")
      return h;
    if (i == null || i === "dynamic") {
      const p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
      return Math.max(h, Math.max(...e.value.map((m) => c(m.value))) + 20 + p * 3);
    }
    return i;
  }), f = J({
    position: "absolute",
    "min-width": "max-content"
  });
  return Bo(() => {
    var h = an(s.value);
    const p = s.value.getBoundingClientRect();
    var m = an(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var m = an(l.value);
    let w = -m.left + h.left;
    const x = window.document.documentElement.clientWidth;
    p.left + a.value > x && (w = x - a.value);
    const D = window.document.documentElement.clientHeight;
    let R = -m.top + h.top + h.height, N = 250;
    if (p.top + p.height + N > D) {
      let j = h.top - N;
      j > 0 && (R = j);
    }
    f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (R - m.top).toString() + "px",
      left: w.toString() + "px"
    };
  }), { dropdownStyle: f, getTextWidth: c };
}, nu = ["name"], su = {
  key: 1,
  class: "extra-select selection"
}, ru = ["onClick"], lu = ["innerHTML"], iu = ["value", "disabled"], ou = {
  key: 0,
  class: "input-searching"
}, cu = ["placeholder"], uu = {
  key: 0,
  class: "allselect-clear"
}, au = { class: "row-input" }, fu = ["checked"], du = { class: "row-input" }, hu = ["checked"], pu = {
  key: 1,
  class: "no-matches"
}, gu = { key: 2 }, mu = ["onClick"], vu = { class: "row-input" }, yu = ["checked"], _u = ["value"], bu = /* @__PURE__ */ co({
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
  setup(e, { emit: t }) {
    var ke;
    const n = e, s = be(() => {
      var M;
      return ((M = n.originalNode) == null ? void 0 : M.multiple) ?? n.multiple;
    }), { options: r, selectedOptions: l, onReset: i } = Xl(n.originalNode, qt(n, "options"), qt(n, "modelValue"), n.initialValue), { t: o } = Ql(n.originalNode, qt(n, "localization")), c = Object.values(((ke = n.originalNode) == null ? void 0 : ke.style) ?? {});
    Yl(n.originalNode);
    const a = t, f = (M, L = null) => {
      if (s.value) {
        let H = L;
        switch (H == null && (H = !l.value.has(M)), H) {
          case !0:
            l.value.set(M, M);
            break;
          case !1:
            l.value.delete(M);
            break;
        }
      } else
        l.value.clear(), L !== !1 && l.value.set(M, M), N.value = !1;
      K(Array.from(l.value.keys()));
    }, { filterText: h, filteredOptions: p, filterValues: m } = ti(r, l, f, n.filterFields, n.hardFilterFields), { searchingFlag: w } = ei(
      r,
      n.url,
      n.searchableUrl,
      h,
      n.minChars,
      m,
      n.fetchMode,
      n.fetchOptions
    ), x = J(), D = J(), R = J(null), N = J(!1);
    function j(M) {
      n.disabled || (N.value = M);
    }
    qe(h, () => {
      var L;
      let M = (L = D.value) == null ? void 0 : L.querySelector(".scroller");
      M && (M.scrollTop = 0);
    });
    const O = J(null), U = function(M) {
      const L = Ot(M.target);
      L.push(M.target), !L.includes(x.value) && !L.includes(D.value) ? N.value = !1 : (M.stopImmediatePropagation(), M.preventDefault());
    };
    cn(() => {
      var M;
      if (n.dropdownContainer != null) {
        const L = n.dropdownContainer;
        let H = !1;
        O.value = Ot(x.value).find((ae) => !!(ae instanceof Element && (ae.matches(L) && (H = !0), H && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(ae).position))));
      }
      if (O.value == null && (O.value = document.querySelector("body")), n.originalNode) {
        for (let H of n.originalNode.classList)
          H != "extraselect" && ((M = x.value) == null || M.classList.add(H));
        for (let H of c)
          x.value && (x.value.style[H] = n.originalNode.style[H]);
        let L = Ot(x.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(i)), Object.assign(n.originalNode, {
          toggleValue: f,
          setValues: (H) => {
            l.value.clear();
            for (let ae of H)
              f(ae);
          }
        });
      }
      window.document.addEventListener("mousedown", U), window.document.addEventListener("focusin", U);
    }), $n(() => {
      window.document.removeEventListener("mousedown", U), window.document.removeEventListener("focusin", U);
    });
    const { list: ce, containerProps: ue, wrapperProps: re } = jl(
      p,
      {
        itemHeight: 32
      }
    ), { dropdownStyle: le, getTextWidth: W } = ni(r, l, N, x, D, O, n.maxWidth), K = (M) => {
      Rt(
        () => {
          var L;
          return (L = n.originalNode) == null ? void 0 : L.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), a("update:modelValue", M);
    }, ie = (M) => {
      he(M, !1), h.value = "";
    }, he = (M, L = null) => {
      L == null && (L = !wt.value), L ? (l.value.clear(), r.value.forEach((H) => l.value.set(H.key, H.key))) : l.value.clear(), K(Array.from(l.value.keys()));
    }, kt = () => {
      pe.value ? p.value.forEach((M) => {
        l.value.has(M.key) && l.value.delete(M.key);
      }) : p.value.forEach((M) => {
        l.value.has(M.key) || l.value.set(M.key, M.key);
      }), K(Array.from(l.value.keys()));
    };
    qe(N, (M, L) => {
      M != L && (M ? n.search && Rt(() => {
        R.value.focus({ focusVisible: !0 });
      }) : h.value = "");
    });
    const wt = be(() => l.value.size == r.value.length), pe = be(() => p.value.reduce((M, L) => M && l.value.has(L.key), !0)), te = be(() => l.value.size == 0), G = be(() => {
      var M, L, H;
      if (r.value.length < 0) return "";
      if (s.value) {
        if (te.value) return o("No selection");
        if (!n.searchableUrl && wt.value) return o("All selected");
        const ae = x.value ? getComputedStyle(x.value) : null, de = ((M = x.value) == null ? void 0 : M.clientWidth) - parseInt(ae == null ? void 0 : ae.paddingLeft) - parseInt(ae == null ? void 0 : ae.paddingRight);
        let $e = o(":n selected - ", { n: l.value.size }), Le = !0;
        for (let xt of l.value)
          if (Le ? Le = !1 : $e += ", ", $e += ((L = r.map.get(xt[0])) == null ? void 0 : L.value) ?? (w.value ? o("Loading...") : o("Value not found")), de < W($e))
            return l.value.size + o(" selected");
        return $e;
      } else
        for (let ae of l.value)
          return ((H = r.map.get(ae[0])) == null ? void 0 : H.value) ?? (w.value ? o("Loading...") : o("Value not found"));
      return o("No selection");
    });
    return (M, L) => {
      var H, ae;
      return Y(), ne(ge, null, [
        s.value && $(l).size == 0 ? (Y(), ne("input", {
          key: 0,
          type: "hidden",
          name: (ae = (H = n.originalNode) == null ? void 0 : H.name) == null ? void 0 : ae.replace("[]", ""),
          value: ""
        }, null, 8, nu)) : Ie("", !0),
        n.showSelected ? (Y(), ne("div", su, [
          (Y(!0), ne(ge, null, wn($(l), (de) => {
            var $e;
            return Y(), ne("div", {
              key: de,
              onClick: pt((Le) => f(de[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ps(Ve(($e = $(r).find((Le) => Le.key == de[0])) == null ? void 0 : $e.value) + " ", 1),
              oe("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, lu)
            ], 8, ru);
          }), 128))
        ])) : Ie("", !0),
        oe("input", rn({
          onFocus: L[0] || (L[0] = (de) => j(!0)),
          onClick: L[1] || (L[1] = pt((de) => j(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: x,
          value: G.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, M.$attrs, { disabled: M.disabled }), null, 16, iu),
        O.value ? (Y(), In(cs, {
          key: 2,
          to: O.value
        }, [
          Mn(oe("div", {
            class: Ht(["extra-select dropdown", { searching: $(w) > 0 }]),
            ref_key: "dropdownNode",
            ref: D,
            style: Dt($(le))
          }, [
            n.search ? (Y(), ne("div", ou, [
              Mn(oe("input", {
                ref_key: "searchNode",
                ref: R,
                class: "extra-select-search",
                "onUpdate:modelValue": L[2] || (L[2] = (de) => fe(h) ? h.value = de : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: $(o)("Search...")
              }, null, 8, cu), [
                [vs, $(h)]
              ])
            ])) : Ie("", !0),
            $(h).length >= n.minChars ? (Y(), ne(ge, { key: 1 }, [
              s.value ? (Y(), ne("div", uu, [
                $(h).length == 0 ? (Y(), ne("div", {
                  key: 0,
                  onClick: pt(he, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  oe("div", au, [
                    oe("input", {
                      checked: wt.value,
                      type: "checkbox"
                    }, null, 8, fu),
                    oe("b", null, Ve($(o)("Select all")), 1)
                  ])
                ])) : Ie("", !0),
                $(p).length > 0 && $(h).length > 0 ? (Y(), ne("div", {
                  key: 1,
                  onClick: pt(kt, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  oe("div", du, [
                    oe("input", {
                      checked: pe.value,
                      type: "checkbox"
                    }, null, 8, hu),
                    oe("b", null, Ve($(o)("Select Filtered")), 1)
                  ])
                ])) : Ie("", !0),
                oe("div", {
                  class: "clear",
                  onClick: pt(ie, ["stop", "prevent"])
                }, Ve($(o)("Clear")), 1)
              ])) : Ie("", !0),
              $(p).length == 0 ? (Y(), ne("div", pu, Ve($(o)("No matches found")), 1)) : Ie("", !0)
            ], 64)) : (Y(), ne("div", gu, Ve($(o)("Insert at least :n characters", { n: n.minChars })), 1)),
            oe("div", rn($(ue), { class: "scroller" }), [
              oe("div", Nr(ks($(re))), [
                (Y(!0), ne(ge, null, wn($(ce), (de) => (Y(), ne("button", {
                  key: de.index,
                  class: "dropdown-row",
                  onClick: pt(($e) => f(de.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  oe("div", vu, [
                    s.value ? (Y(), ne("input", {
                      key: 0,
                      checked: $(l).has(de.data.key),
                      type: "checkbox"
                    }, null, 8, yu)) : Ie("", !0),
                    ps(" " + Ve(de.data.value), 1)
                  ])
                ], 8, mu))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Vl, N.value]
          ])
        ], 8, ["to"])) : Ie("", !0),
        n.originalNode ? (Y(), In(cs, {
          key: 3,
          to: n.originalNode
        }, [
          (Y(!0), ne(ge, null, wn($(l), (de) => (Y(), ne("option", {
            key: de[0],
            selected: "selected",
            value: de[0]
          }, null, 8, _u))), 128))
        ], 8, ["to"])) : Ie("", !0)
      ], 64);
    };
  }
}), wu = ["disabled"], xu = {
  key: 0,
  class: "no-matches"
}, Su = { key: 1 }, Eu = ["onClick"], Cu = { class: "row-input" }, Tu = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Ou = /* @__PURE__ */ Object.assign(Tu, {
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
  setup(e, { emit: t }) {
    var re, le;
    const n = e, { options: s } = Xl(n.originalNode, qt(n, "options"), J([])), { t: r } = Ql(n.originalNode, qt(n, "localization")), l = (re = n.originalNode) == null ? void 0 : re.classList, i = Object.values(((le = n.originalNode) == null ? void 0 : le.style) ?? {});
    Yl(n.originalNode);
    const o = t, c = (W, K = null) => {
      K === !1 ? a.value = "" : a.value = s.map.get(W).value, x.value = !1;
    }, { filterText: a, filteredOptions: f, filterValues: h } = ti(s, null, c, n.filterFields, n.hardFilterFields), { searchingFlag: p } = ei(
      s,
      n.url,
      n.searchableUrl,
      a,
      n.minChars,
      h,
      n.fetchMode,
      n.fetchOptions
    ), m = J(null), w = J(null), x = J(!1), D = J(null);
    function R(W) {
      n.disabled || (x.value = W);
    }
    qe(a, () => {
      w.value.querySelector(".scroller").scrollTop = 0;
    });
    const N = function(W) {
      const K = Ot(W.target);
      K.push(W.target), !K.includes(m.value) && !K.includes(w.value) && (x.value = !1);
    };
    cn(() => {
      if (n.dropdownContainer) {
        let ie = !1;
        D.value = Ot(m.value).find((he) => !!(he instanceof Element && (he.matches(n.dropdownContainer) && (ie = !0), ie && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(he).position))));
      }
      if (D.value == null && (D.value = document.querySelector("body")), n.originalNode) {
        for (let he of l)
          he != "extrasuggest" && m.value.classList.add(he);
        for (let he of i)
          m.value.style[he] = n.originalNode.style[he];
        a.value = n.originalNode.value;
        let ie = Ot(m.value, "form").pop();
        ie instanceof HTMLElement && ie.matches("form") && ie.addEventListener("reset", () => setTimeout(K)), n.originalNode.addEventListener("change", () => {
          O(!0);
        });
      }
      nn(() => {
        n.modelValue != null && (a.value = n.modelValue);
      });
      const W = a.value, K = () => {
        a.value = W;
      };
      window.document.addEventListener("mousedown", N), window.document.addEventListener("focusin", N);
    }), $n(() => {
      window.document.removeEventListener("mousedown", N), window.document.removeEventListener("focusin", N);
    });
    const { dropdownStyle: j } = ni(s, J([]), x, m, w, D, n.maxWidth), O = (W = !1) => {
      var K;
      n.originalNode && (W ? a.value = n.originalNode.value : (n.originalNode.value = a.value, (K = n.originalNode) == null || K.dispatchEvent(new Event("change", { bubbles: !0 })))), o("update:modelValue", a.value);
    };
    qe(() => x.value, (W) => {
      W === !1 && O();
    });
    const { list: U, containerProps: ce, wrapperProps: ue } = jl(
      f,
      {
        itemHeight: 32
      }
    );
    return (W, K) => (Y(), ne(ge, null, [
      Mn(oe("input", rn({
        onFocus: K[0] || (K[0] = (ie) => R(!0)),
        onClick: K[1] || (K[1] = (ie) => R(!0)),
        ref_key: "inputNode",
        ref: m,
        "onUpdate:modelValue": K[2] || (K[2] = (ie) => fe(a) ? a.value = ie : null),
        class: "extra-select extra-select-input"
      }, W.$attrs, { disabled: e.disabled }), null, 16, wu), [
        [Pc, $(a)]
      ]),
      D.value ? (Y(), In(cs, {
        key: 0,
        to: D.value
      }, [
        Mn(oe("div", {
          class: Ht(["extra-select dropdown", { searching: $(p) > 0 }]),
          ref_key: "dropdownNode",
          ref: w,
          style: Dt($(j))
        }, [
          $(a).length >= n.minChars ? (Y(), ne(ge, { key: 0 }, [
            $(f).length == 0 ? (Y(), ne("div", xu, Ve($(r)("No matches found")), 1)) : Ie("", !0)
          ], 64)) : (Y(), ne("div", Su, Ve($(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          oe("div", rn($(ce), { class: "scroller" }), [
            oe("div", Nr(ks($(ue))), [
              (Y(!0), ne(ge, null, wn($(U), (ie) => (Y(), ne("button", {
                key: ie.index,
                class: "dropdown-row",
                onClick: pt((he) => c(ie.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                oe("div", Cu, Ve(ie.data.value), 1)
              ], 8, Eu))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Vl, x.value]
        ])
      ], 8, ["to"])) : Ie("", !0)
    ], 64));
  }
}), Au = js, si = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      si.bindNew(e);
    });
  },
  bindNew(e) {
    De.lock(e, "extra-select", () => {
      const t = {};
      for (let r in e.dataset)
        try {
          t[r] = JSON.parse(e.dataset[r]);
        } catch {
          t[r] = e.dataset[r];
        }
      t.disabled = e.disabled, t.originalNode = e;
      const n = document.createElement("div");
      e.parentNode.insertBefore(n, e.nextSibling), n.dataset.isVue = !0, n.style.display = "contents";
      const s = Hl(bu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), De.remove(e, "extra-select");
      });
    });
  }
}, ri = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      ri.bindNew(e);
    });
  },
  bindNew(e) {
    De.lock(e, "extra-suggest", () => {
      const t = {};
      for (let r in e.dataset)
        try {
          t[r] = JSON.parse(e.dataset[r]);
        } catch {
          t[r] = e.dataset[r];
        }
      t.disabled = e.disabled, t.originalNode = e;
      const n = document.createElement("div");
      e.parentNode.insertBefore(n, e.nextSibling), n.dataset.isVue = !0, n.style.display = "contents";
      const s = Hl(Ou, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), De.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  si.init(), ri.init(), js();
});
export {
  si as ExtraSelect,
  ri as ExtraSuggest,
  Au as loadExtraSelectDefaultLocalization
};
