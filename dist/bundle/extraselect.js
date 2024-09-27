const Ue = /* @__PURE__ */ new WeakMap();
class De {
  static put(t, n, s) {
    Ue.has(t) || Ue.set(t, /* @__PURE__ */ new Map()), Ue.get(t).set(n, s);
  }
  static get(t, n) {
    return Ue.get(t).get(n);
  }
  static has(t, n) {
    return Ue.has(t) && Ue.get(t).has(n);
  }
  static remove(t, n) {
    var s = Ue.get(t).delete(n);
    return Ue.get(t).size !== 0 && Ue.delete(t), s;
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
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Ue);
function dn(e) {
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
function At(e, t) {
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
function _s(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Y = {}, Mt = [], Ke = () => {
}, ii = () => !1, Vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bs = (e) => e.startsWith("onUpdate:"), ge = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, oi = Object.prototype.hasOwnProperty, W = (e, t) => oi.call(e, t), I = Array.isArray, Ft = (e) => ln(e) === "[object Map]", Dt = (e) => ln(e) === "[object Set]", qs = (e) => ln(e) === "[object Date]", N = (e) => typeof e == "function", le = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Mr = (e) => (Q(e) || N(e)) && N(e.then) && N(e.catch), Fr = Object.prototype.toString, ln = (e) => Fr.call(e), ci = (e) => ln(e).slice(8, -1), Ir = (e) => ln(e) === "[object Object]", xs = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ _s(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ui = /-(\w)/g, yt = Dn(
  (e) => e.replace(ui, (t, n) => n ? n.toUpperCase() : "")
), ai = /\B([A-Z])/g, xt = Dn(
  (e) => e.replace(ai, "-$1").toLowerCase()
), Pr = Dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gn = Dn(
  (e) => e ? `on${Pr(e)}` : ""
), ot = (e, t) => !Object.is(e, t), wn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Lr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, On = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Gs;
const Rr = () => Gs || (Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? pi(s) : kt(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else if (le(e) || Q(e))
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
  if (le(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ht(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Nr(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = Ht(t)), n && (e.style = kt(n)), e;
}
const gi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mi = /* @__PURE__ */ _s(gi);
function Vr(e) {
  return !!e || e === "";
}
function vi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = _t(e[s], t[s]);
  return n;
}
function _t(e, t) {
  if (e === t) return !0;
  let n = qs(e), s = qs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = qe(e), s = qe(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? vi(e, t) : !1;
  if (n = Q(e), s = Q(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const i in e) {
      const o = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (o && !c || !o && c || !_t(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ss(e, t) {
  return e.findIndex((n) => _t(n, t));
}
const Dr = (e) => !!(e && e.__v_isRef === !0), Ve = (e) => le(e) ? e : e == null ? "" : I(e) || Q(e) && (e.toString === Fr || !N(e.toString)) ? Dr(e) ? Ve(e.value) : JSON.stringify(e, kr, 2) : String(e), kr = (e, t) => Dr(t) ? kr(e, t.value) : Ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], l) => (n[Jn(s, l) + " =>"] = r, n),
    {}
  )
} : Dt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jn(n))
} : qe(t) ? Jn(t) : Q(t) && !I(t) && !Ir(t) ? String(t) : t, Jn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xe;
class yi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = xe, !t && xe && (this.index = (xe.scopes || (xe.scopes = [])).push(
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
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    xe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    xe = this.parent;
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
function Hr() {
  return xe;
}
function _i(e, t = !1) {
  xe && xe.cleanups.push(e);
}
let Z;
const Yn = /* @__PURE__ */ new WeakSet();
class $r {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xe && xe.active && xe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yn.has(this) && (Yn.delete(this), this.trigger()));
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
    const t = Z, n = ke;
    Z = this, ke = !0;
    try {
      return this.fn();
    } finally {
      Wr(this), Z = t, ke = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ts(t);
      this.deps = this.depsTail = void 0, Js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ls(this) && this.run();
  }
  get dirty() {
    return ls(this);
  }
}
let jr = 0, Tt;
function Ur(e) {
  e.flags |= 8, e.next = Tt, Tt = e;
}
function Es() {
  jr++;
}
function Cs() {
  if (--jr > 0)
    return;
  let e;
  for (; Tt; ) {
    let t = Tt, n;
    for (; t; )
      t.flags &= -9, t = t.next;
    for (t = Tt, Tt = void 0; t; ) {
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
    s.version === -1 ? (s === n && (n = r), Ts(s), bi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function ls(e) {
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
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ls(e)) {
    e.flags &= -3;
    return;
  }
  const n = Z, s = ke;
  Z = e, ke = !0;
  try {
    Br(e);
    const r = e.fn(e._value);
    (t.version === 0 || ot(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Z = n, ke = s, Wr(e), e.flags &= -3;
  }
}
function Ts(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Ts(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function bi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ke = !0;
const zr = [];
function ut() {
  zr.push(ke), ke = !1;
}
function at() {
  const e = zr.pop();
  ke = e === void 0 ? !0 : e;
}
function Js(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = n;
    }
  }
}
let Zt = 0;
class wi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Os {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!Z || !ke || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new wi(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, qr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    Es();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Cs();
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
const An = /* @__PURE__ */ new WeakMap(), vt = Symbol(
  ""
), is = Symbol(
  ""
), Qt = Symbol(
  ""
);
function be(e, t, n) {
  if (ke && Z) {
    let s = An.get(e);
    s || An.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Os()), r.target = e, r.map = s, r.key = n), r.track();
  }
}
function tt(e, t, n, s, r, l) {
  const i = An.get(e);
  if (!i) {
    Zt++;
    return;
  }
  const o = (c) => {
    c && c.trigger();
  };
  if (Es(), t === "clear")
    i.forEach(o);
  else {
    const c = I(e), a = c && xs(n);
    if (c && n === "length") {
      const f = Number(s);
      i.forEach((h, p) => {
        (p === "length" || p === Qt || !qe(p) && p >= f) && o(h);
      });
    } else
      switch (n !== void 0 && o(i.get(n)), a && o(i.get(Qt)), t) {
        case "add":
          c ? a && o(i.get("length")) : (o(i.get(vt)), Ft(e) && o(i.get(is)));
          break;
        case "delete":
          c || (o(i.get(vt)), Ft(e) && o(i.get(is)));
          break;
        case "set":
          Ft(e) && o(i.get(vt));
          break;
      }
  }
  Cs();
}
function xi(e, t) {
  const n = An.get(e);
  return n && n.get(t);
}
function Et(e) {
  const t = U(e);
  return t === e ? t : (be(t, "iterate", Qt), Le(e) ? t : t.map(ve));
}
function kn(e) {
  return be(e = U(e), "iterate", Qt), e;
}
const Si = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, ve);
  },
  concat(...e) {
    return Et(this).concat(
      ...e.map((t) => I(t) ? Et(t) : t)
    );
  },
  entries() {
    return Xn(this, "entries", (e) => (e[1] = ve(e[1]), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(this, "filter", e, t, (n) => n.map(ve), arguments);
  },
  find(e, t) {
    return Xe(this, "find", e, t, ve, arguments);
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(this, "findLast", e, t, ve, arguments);
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zn(this, "includes", e);
  },
  indexOf(...e) {
    return Zn(this, "indexOf", e);
  },
  join(e) {
    return Et(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Zn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
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
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return Et(this).toReversed();
  },
  toSorted(e) {
    return Et(this).toSorted(e);
  },
  toSpliced(...e) {
    return Et(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", ve);
  }
};
function Xn(e, t, n) {
  const s = kn(e), r = s[t]();
  return s !== e && !Le(e) && (r._next = r.next, r.next = () => {
    const l = r._next();
    return l.value && (l.value = n(l.value)), l;
  }), r;
}
const Ei = Array.prototype;
function Xe(e, t, n, s, r, l) {
  const i = kn(e), o = i !== e && !Le(e), c = i[t];
  if (c !== Ei[t]) {
    const h = c.apply(e, l);
    return o ? ve(h) : h;
  }
  let a = n;
  i !== e && (o ? a = function(h, p) {
    return n.call(this, ve(h), p, e);
  } : n.length > 2 && (a = function(h, p) {
    return n.call(this, h, p, e);
  }));
  const f = c.call(i, a, s);
  return o && r ? r(f) : f;
}
function Ys(e, t, n, s) {
  const r = kn(e);
  let l = n;
  return r !== e && (Le(e) ? n.length > 3 && (l = function(i, o, c) {
    return n.call(this, i, o, c, e);
  }) : l = function(i, o, c) {
    return n.call(this, i, ve(o), c, e);
  }), r[t](l, ...s);
}
function Zn(e, t, n) {
  const s = U(e);
  be(s, "iterate", Qt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Ps(n[0]) ? (n[0] = U(n[0]), s[t](...n)) : r;
}
function Ut(e, t, n = []) {
  ut(), Es();
  const s = U(e)[t].apply(e, n);
  return Cs(), at(), s;
}
const Ci = /* @__PURE__ */ _s("__proto__,__v_isRef,__isVue"), Gr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
);
function Ti(e) {
  qe(e) || (e = String(e));
  const t = U(this);
  return be(t, "has", e), t.hasOwnProperty(e);
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
      return s === (r ? l ? Hi : Qr : l ? Zr : Xr).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
    return (qe(n) ? Gr.has(n) : Ci(n)) || (r || be(t, "get", n), l) ? o : fe(o) ? i && xs(n) ? o : o.value : Q(o) ? r ? el(o) : Fs(o) : o;
  }
}
class Yr extends Jr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let l = t[n];
    if (!this._isShallow) {
      const c = bt(l);
      if (!Le(s) && !bt(s) && (l = U(l), s = U(s)), !I(t) && fe(l) && !fe(s))
        return c ? !1 : (l.value = s, !0);
    }
    const i = I(t) && xs(n) ? Number(n) < t.length : W(t, n), o = Reflect.set(
      t,
      n,
      s,
      fe(t) ? t : r
    );
    return t === U(r) && (i ? ot(s, l) && tt(t, "set", n, s) : tt(t, "add", n, s)), o;
  }
  deleteProperty(t, n) {
    const s = W(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && tt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!qe(n) || !Gr.has(n)) && be(t, "has", n), s;
  }
  ownKeys(t) {
    return be(
      t,
      "iterate",
      I(t) ? "length" : vt
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
const As = (e) => e, Hn = (e) => Reflect.getPrototypeOf(e);
function hn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = U(e), l = U(t);
  n || (ot(t, l) && be(r, "get", t), be(r, "get", l));
  const { has: i } = Hn(r), o = s ? As : n ? Ls : ve;
  if (i.call(r, t))
    return o(e.get(t));
  if (i.call(r, l))
    return o(e.get(l));
  e !== r && e.get(t);
}
function pn(e, t = !1) {
  const n = this.__v_raw, s = U(n), r = U(e);
  return t || (ot(e, r) && be(s, "has", e), be(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function gn(e, t = !1) {
  return e = e.__v_raw, !t && be(U(e), "iterate", vt), Reflect.get(e, "size", e);
}
function Xs(e, t = !1) {
  !t && !Le(e) && !bt(e) && (e = U(e));
  const n = U(this);
  return Hn(n).has.call(n, e) || (n.add(e), tt(n, "add", e, e)), this;
}
function Zs(e, t, n = !1) {
  !n && !Le(t) && !bt(t) && (t = U(t));
  const s = U(this), { has: r, get: l } = Hn(s);
  let i = r.call(s, e);
  i || (e = U(e), i = r.call(s, e));
  const o = l.call(s, e);
  return s.set(e, t), i ? ot(t, o) && tt(s, "set", e, t) : tt(s, "add", e, t), this;
}
function Qs(e) {
  const t = U(this), { has: n, get: s } = Hn(t);
  let r = n.call(t, e);
  r || (e = U(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && tt(t, "delete", e, void 0), l;
}
function er() {
  const e = U(this), t = e.size !== 0, n = e.clear();
  return t && tt(e, "clear", void 0, void 0), n;
}
function mn(e, t) {
  return function(s, r) {
    const l = this, i = l.__v_raw, o = U(i), c = t ? As : e ? Ls : ve;
    return !e && be(o, "iterate", vt), i.forEach((a, f) => s.call(r, c(a), c(f), l));
  };
}
function vn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = U(r), i = Ft(l), o = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, a = r[e](...s), f = n ? As : t ? Ls : ve;
    return !t && be(
      l,
      "iterate",
      c ? is : vt
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
function rt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ii() {
  const e = {
    get(l) {
      return hn(this, l);
    },
    get size() {
      return gn(this);
    },
    has: pn,
    add: Xs,
    set: Zs,
    delete: Qs,
    clear: er,
    forEach: mn(!1, !1)
  }, t = {
    get(l) {
      return hn(this, l, !1, !0);
    },
    get size() {
      return gn(this);
    },
    has: pn,
    add(l) {
      return Xs.call(this, l, !0);
    },
    set(l, i) {
      return Zs.call(this, l, i, !0);
    },
    delete: Qs,
    clear: er,
    forEach: mn(!1, !0)
  }, n = {
    get(l) {
      return hn(this, l, !0);
    },
    get size() {
      return gn(this, !0);
    },
    has(l) {
      return pn.call(this, l, !0);
    },
    add: rt("add"),
    set: rt("set"),
    delete: rt("delete"),
    clear: rt("clear"),
    forEach: mn(!0, !1)
  }, s = {
    get(l) {
      return hn(this, l, !0, !0);
    },
    get size() {
      return gn(this, !0);
    },
    has(l) {
      return pn.call(this, l, !0);
    },
    add: rt("add"),
    set: rt("set"),
    delete: rt("delete"),
    clear: rt("clear"),
    forEach: mn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    e[l] = vn(l, !1, !1), n[l] = vn(l, !0, !1), t[l] = vn(l, !1, !0), s[l] = vn(
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
  Li,
  Ri,
  Ni
] = /* @__PURE__ */ Ii();
function Ms(e, t) {
  const n = t ? e ? Ni : Ri : e ? Li : Pi;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    W(n, r) && r in s ? n : s,
    r,
    l
  );
}
const Vi = {
  get: /* @__PURE__ */ Ms(!1, !1)
}, Di = {
  get: /* @__PURE__ */ Ms(!1, !0)
}, ki = {
  get: /* @__PURE__ */ Ms(!0, !1)
};
const Xr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ new WeakMap();
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
function Fs(e) {
  return bt(e) ? e : Is(
    e,
    !1,
    Ai,
    Vi,
    Xr
  );
}
function Ui(e) {
  return Is(
    e,
    !1,
    Fi,
    Di,
    Zr
  );
}
function el(e) {
  return Is(
    e,
    !0,
    Mi,
    ki,
    Qr
  );
}
function Is(e, t, n, s, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function It(e) {
  return bt(e) ? It(e.__v_raw) : !!(e && e.__v_isReactive);
}
function bt(e) {
  return !!(e && e.__v_isReadonly);
}
function Le(e) {
  return !!(e && e.__v_isShallow);
}
function Ps(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Bi(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Lr(e, "__v_skip", !0), e;
}
const ve = (e) => Q(e) ? Fs(e) : e, Ls = (e) => Q(e) ? el(e) : e;
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
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
    this.dep = new Os(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : U(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Le(t) || bt(t);
    t = s ? t : U(t), ot(t, n) && (this._rawValue = t, this._value = s ? t : ve(t), this.dep.trigger());
  }
}
function H(e) {
  return fe(e) ? e.value : e;
}
const zi = {
  get: (e, t, n) => t === "__v_raw" ? e : H(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function nl(e) {
  return It(e) ? e : new Proxy(e, zi);
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
    return xi(U(this._object), this._key);
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
  return fe(e) ? e : N(e) ? new Gi(e) : Q(e) && arguments.length > 1 ? Ji(e, t, n) : G(e);
}
function Ji(e, t, n) {
  const s = e[t];
  return fe(s) ? s : new qi(e, t, n);
}
class Yi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Os(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
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
  return N(e) ? s = e : (s = e.get, r = e.set), new Yi(s, r, n);
}
const yn = {}, Mn = /* @__PURE__ */ new WeakMap();
let gt;
function Zi(e, t = !1, n = gt) {
  if (n) {
    let s = Mn.get(n);
    s || Mn.set(n, s = []), s.push(e);
  }
}
function Qi(e, t, n = Y) {
  const { immediate: s, deep: r, once: l, scheduler: i, augmentJob: o, call: c } = n, a = (M) => r ? M : Le(M) || r === !1 || r === 0 ? Qe(M, 1) : Qe(M);
  let f, h, p, m, w = !1, E = !1;
  if (fe(e) ? (h = () => e.value, w = Le(e)) : It(e) ? (h = () => a(e), w = !0) : I(e) ? (E = !0, w = e.some((M) => It(M) || Le(M)), h = () => e.map((M) => {
    if (fe(M))
      return M.value;
    if (It(M))
      return a(M);
    if (N(M))
      return c ? c(M, 2) : M();
  })) : N(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (p) {
      ut();
      try {
        p();
      } finally {
        at();
      }
    }
    const M = gt;
    gt = f;
    try {
      return c ? c(e, 3, [m]) : e(m);
    } finally {
      gt = M;
    }
  } : h = Ke, t && r) {
    const M = h, j = r === !0 ? 1 / 0 : r;
    h = () => Qe(M(), j);
  }
  const V = Hr(), R = () => {
    f.stop(), V && ws(V.effects, f);
  };
  if (l && t) {
    const M = t;
    t = (...j) => {
      M(...j), R();
    };
  }
  let D = E ? new Array(e.length).fill(yn) : yn;
  const $ = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const j = f.run();
        if (r || w || (E ? j.some((te, ue) => ot(te, D[ue])) : ot(j, D))) {
          p && p();
          const te = gt;
          gt = f;
          try {
            const ue = [
              j,
              // pass undefined as the old value when it's changed for the first time
              D === yn ? void 0 : E && D[0] === yn ? [] : D,
              m
            ];
            c ? c(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), D = j;
          } finally {
            gt = te;
          }
        }
      } else
        f.run();
  };
  return o && o($), f = new $r(h), f.scheduler = i ? () => i($, !1) : $, m = (M) => Zi(M, !1, f), p = f.onStop = () => {
    const M = Mn.get(f);
    if (M) {
      if (c)
        c(M, 4);
      else
        for (const j of M) j();
      Mn.delete(f);
    }
  }, t ? s ? $(!0) : D = f.run() : i ? i($.bind(null, !0), !0) : f.run(), R.pause = f.pause.bind(f), R.resume = f.resume.bind(f), R.stop = R, R;
}
function Qe(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, fe(e))
    Qe(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      Qe(e[s], t, n);
  else if (Dt(e) || Ft(e))
    e.forEach((s) => {
      Qe(s, t, n);
    });
  else if (Ir(e)) {
    for (const s in e)
      Qe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Qe(e[s], t, n);
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
    $n(r, t, n);
  }
}
function Ge(e, t, n, s) {
  if (N(e)) {
    const r = on(e, t, n, s);
    return r && Mr(r) && r.catch((l) => {
      $n(l, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let l = 0; l < e.length; l++)
      r.push(Ge(e[l], t, n, s));
    return r;
  }
}
function $n(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Y;
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
      ut(), on(l, null, 10, [
        e,
        c,
        a
      ]), at();
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
let en = !1, os = !1;
const Se = [];
let Be = 0;
const Pt = [];
let lt = null, Ct = 0;
const sl = /* @__PURE__ */ Promise.resolve();
let Rs = null;
function Rt(e) {
  const t = Rs || sl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function to(e) {
  let t = en ? Be + 1 : 0, n = Se.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Se[s], l = tn(r);
    l < e || l === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ns(e) {
  if (!(e.flags & 1)) {
    const t = tn(e), n = Se[Se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= tn(n) ? Se.push(e) : Se.splice(to(t), 0, e), e.flags |= 1, rl();
  }
}
function rl() {
  !en && !os && (os = !0, Rs = sl.then(il));
}
function no(e) {
  I(e) ? Pt.push(...e) : lt && e.id === -1 ? lt.splice(Ct + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), rl();
}
function tr(e, t, n = en ? Be + 1 : 0) {
  for (; n < Se.length; n++) {
    const s = Se[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Se.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ll(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => tn(n) - tn(s)
    );
    if (Pt.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, Ct = 0; Ct < lt.length; Ct++) {
      const n = lt[Ct];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    lt = null, Ct = 0;
  }
}
const tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function il(e) {
  os = !1, en = !0;
  try {
    for (Be = 0; Be < Se.length; Be++) {
      const t = Se[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < Se.length; Be++) {
      const t = Se[Be];
      t && (t.flags &= -2);
    }
    Be = 0, Se.length = 0, ll(), en = !1, Rs = null, (Se.length || Pt.length) && il();
  }
}
let Fe = null, ol = null;
function Fn(e) {
  const t = Fe;
  return Fe = e, ol = e && e.type.__scopeId || null, t;
}
function so(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && fr(-1);
    const l = Fn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Fn(l), s._d && fr(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function In(e, t) {
  if (Fe === null)
    return e;
  const n = qn(Fe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [l, i, o, c = Y] = t[r];
    l && (N(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Qe(i), s.push({
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
function dt(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    l && (o.oldValue = l[i].value);
    let c = o.dir[s];
    c && (ut(), Ge(c, n, 8, [
      e.el,
      o,
      e,
      t
    ]), at());
  }
}
const cl = Symbol("_vte"), ro = (e) => e.__isTeleport, Gt = (e) => e && (e.disabled || e.disabled === ""), lo = (e) => e && (e.defer || e.defer === ""), nr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, sr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cs = (e, t) => {
  const n = e && e.to;
  return le(n) ? t ? t(n) : null : n;
}, io = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, l, i, o, c, a) {
    const {
      mc: f,
      pc: h,
      pbc: p,
      o: { insert: m, querySelector: w, createText: E, createComment: V }
    } = a, R = Gt(t.props);
    let { shapeFlag: D, children: $, dynamicChildren: M } = t;
    if (e == null) {
      const j = t.el = E(""), te = t.anchor = E("");
      m(j, n, s), m(te, n, s);
      const ue = (ne, B) => {
        D & 16 && (r && r.isCE && (r.ce._teleportTarget = ne), f(
          $,
          ne,
          B,
          r,
          l,
          i,
          o,
          c
        ));
      }, ie = () => {
        const ne = t.target = cs(t.props, w), B = ul(ne, t, E, m);
        ne && (i !== "svg" && nr(ne) ? i = "svg" : i !== "mathml" && sr(ne) && (i = "mathml"), R || (ue(ne, B), xn(t)));
      };
      R && (ue(n, te), xn(t)), lo(t.props) ? Ee(ie, l) : ie();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const j = t.anchor = e.anchor, te = t.target = e.target, ue = t.targetAnchor = e.targetAnchor, ie = Gt(e.props), ne = ie ? n : te, B = ie ? j : ue;
      if (i === "svg" || nr(te) ? i = "svg" : (i === "mathml" || sr(te)) && (i = "mathml"), M ? (p(
        e.dynamicChildren,
        M,
        ne,
        r,
        l,
        i,
        o
      ), Hs(e, t, !0)) : c || h(
        e,
        t,
        ne,
        B,
        r,
        l,
        i,
        o,
        !1
      ), R)
        ie ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : _n(
          t,
          n,
          j,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const K = t.target = cs(
          t.props,
          w
        );
        K && _n(
          t,
          K,
          null,
          a,
          0
        );
      } else ie && _n(
        t,
        te,
        ue,
        a,
        1
      );
      xn(t);
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
        const E = o[w];
        s(
          E,
          t,
          n,
          m,
          !!E.dynamicChildren
        );
      }
    }
  },
  move: _n,
  hydrate: oo
};
function _n(e, t, n, { o: { insert: s }, m: r }, l = 2) {
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
  const p = t.target = cs(
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
    xn(t);
  }
  return t.anchor && i(t.anchor);
}
const us = io;
function xn(e) {
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
function Vs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function co(e, t) {
  return N(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ge({ name: e.name }, t, { setup: e })
  ) : e;
}
function al(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function as(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (w, E) => as(
        w,
        t && (I(t) ? t[E] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Jt(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? qn(s.component) : s.el, i = r ? null : l, { i: o, r: c } = e, a = t && t.r, f = o.refs === Y ? o.refs = {} : o.refs, h = o.setupState, p = U(h), m = h === Y ? () => !1 : (w) => W(p, w);
  if (a != null && a !== c && (le(a) ? (f[a] = null, m(a) && (h[a] = null)) : fe(a) && (a.value = null)), N(c))
    on(c, o, 12, [i, f]);
  else {
    const w = le(c), E = fe(c);
    if (w || E) {
      const V = () => {
        if (e.f) {
          const R = w ? m(c) ? h[c] : f[c] : c.value;
          r ? I(R) && ws(R, l) : I(R) ? R.includes(l) || R.push(l) : w ? (f[c] = [l], m(c) && (h[c] = f[c])) : (c.value = [l], e.k && (f[e.k] = c.value));
        } else w ? (f[c] = i, m(c) && (h[c] = i)) : E && (c.value = i, e.k && (f[e.k] = i));
      };
      i ? (V.id = -1, Ee(V, n)) : V();
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
function dl(e, t, n = ye) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (jn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      fl(r.parent.vnode) && fo(s, t, n, r), r = r.parent;
  }
}
function fo(e, t, n, s) {
  const r = jn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Un(() => {
    ws(s[t], r);
  }, n);
}
function jn(e, t, n = ye, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...i) => {
      ut();
      const o = un(n), c = Ge(t, n, e, i);
      return o(), at(), c;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const st = (e) => (t, n = ye) => {
  (!zn || e === "sp") && jn(e, (...s) => t(...s), n);
}, ho = st("bm"), cn = st("m"), po = st(
  "bu"
), go = st("u"), mo = st(
  "bum"
), Un = st("um"), vo = st(
  "sp"
), yo = st("rtg"), _o = st("rtc");
function bo(e, t = ye) {
  jn("ec", e, t);
}
const wo = Symbol.for("v-ndc");
function Sn(e, t, n, s) {
  let r;
  const l = n, i = I(e);
  if (i || le(e)) {
    const o = i && It(e);
    let c = !1;
    o && (c = !Le(e), e = kn(e)), r = new Array(e.length);
    for (let a = 0, f = e.length; a < f; a++)
      r[a] = t(
        c ? ve(e[a]) : e[a],
        a,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, l);
  } else if (Q(e))
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
const fs = (e) => e ? Pl(e) ? qn(e) : fs(e.parent) : null, Yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fs(e.parent),
    $root: (e) => fs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ds(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ns(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Wo.bind(e)
  })
), Qn = (e, t) => e !== Y && !e.__isScriptSetup && W(e, t), xo = {
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
        if (Qn(s, t))
          return i[t] = 1, s[t];
        if (r !== Y && W(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && W(a, t)
        )
          return i[t] = 3, l[t];
        if (n !== Y && W(n, t))
          return i[t] = 4, n[t];
        ds && (i[t] = 0);
      }
    }
    const f = Yt[t];
    let h, p;
    if (f)
      return t === "$attrs" && be(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (h = o.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== Y && W(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, W(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return Qn(r, t) ? (r[t] = n, !0) : s !== Y && W(s, t) ? (s[t] = n, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l }
  }, i) {
    let o;
    return !!n[i] || e !== Y && W(e, i) || Qn(t, i) || (o = l[0]) && W(o, i) || W(s, i) || W(Yt, i) || W(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rr(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ds = !0;
function So(e) {
  const t = Ds(e), n = e.proxy, s = e.ctx;
  ds = !1, t.beforeCreate && lr(t.beforeCreate, e, "bc");
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
    activated: E,
    deactivated: V,
    beforeDestroy: R,
    beforeUnmount: D,
    destroyed: $,
    unmounted: M,
    render: j,
    renderTracked: te,
    renderTriggered: ue,
    errorCaptured: ie,
    serverPrefetch: ne,
    // public API
    expose: B,
    inheritAttrs: K,
    // assets
    components: oe,
    directives: de,
    filters: St
  } = t;
  if (a && Eo(a, s, null), i)
    for (const ee in i) {
      const q = i[ee];
      N(q) && (s[ee] = q.bind(n));
    }
  if (r) {
    const ee = r.call(n, n);
    Q(ee) && (e.data = Fs(ee));
  }
  if (ds = !0, l)
    for (const ee in l) {
      const q = l[ee], Je = N(q) ? q.bind(n, n) : N(q.get) ? q.get.bind(n, n) : Ke, ft = !N(q) && N(q.set) ? q.set.bind(n) : Ke, He = _e({
        get: Je,
        set: ft
      });
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (O) => He.value = O
      });
    }
  if (o)
    for (const ee in o)
      hl(o[ee], s, n, ee);
  if (c) {
    const ee = N(c) ? c.call(n) : c;
    Reflect.ownKeys(ee).forEach((q) => {
      Fo(q, ee[q]);
    });
  }
  f && lr(f, e, "c");
  function he(ee, q) {
    I(q) ? q.forEach((Je) => ee(Je.bind(n))) : q && ee(q.bind(n));
  }
  if (he(ho, h), he(cn, p), he(po, m), he(go, w), he(uo, E), he(ao, V), he(bo, ie), he(_o, te), he(yo, ue), he(mo, D), he(Un, M), he(vo, ne), I(B))
    if (B.length) {
      const ee = e.exposed || (e.exposed = {});
      B.forEach((q) => {
        Object.defineProperty(ee, q, {
          get: () => n[q],
          set: (Je) => n[q] = Je
        });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === Ke && (e.render = j), K != null && (e.inheritAttrs = K), oe && (e.components = oe), de && (e.directives = de), ne && al(e);
}
function Eo(e, t, n = Ke) {
  I(e) && (e = hs(e));
  for (const s in e) {
    const r = e[s];
    let l;
    Q(r) ? "default" in r ? l = En(
      r.from || s,
      r.default,
      !0
    ) : l = En(r.from || s) : l = En(r), fe(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[s] = l;
  }
}
function lr(e, t, n) {
  Ge(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function hl(e, t, n, s) {
  let r = s.includes(".") ? Cl(n, s) : () => n[s];
  if (le(e)) {
    const l = t[e];
    N(l) && ze(r, l);
  } else if (N(e))
    ze(r, e.bind(n));
  else if (Q(e))
    if (I(e))
      e.forEach((l) => hl(l, t, n, s));
    else {
      const l = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(l) && ze(r, l, e);
    }
}
function Ds(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: l,
    config: { optionMergeStrategies: i }
  } = e.appContext, o = l.get(t);
  let c;
  return o ? c = o : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => Pn(c, a, i, !0)
  ), Pn(c, t, i)), Q(t) && l.set(t, c), c;
}
function Pn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && Pn(e, l, n, !0), r && r.forEach(
    (i) => Pn(e, i, n, !0)
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
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
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
    return ge(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function To(e, t) {
  return Kt(hs(e), hs(t));
}
function hs(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kt(e, t) {
  return e ? ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function or(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ge(
    /* @__PURE__ */ Object.create(null),
    rr(e),
    rr(t ?? {})
  ) : t;
}
function Oo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ge(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
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
    N(s) || (s = ge({}, s)), r != null && !Q(r) && (r = null);
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
        return i.has(f) || (f && N(f.install) ? (i.add(f), f.install(a, ...h)) : N(f) && (i.add(f), f(a, ...h))), a;
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
          const m = a._ceVNode || nt(s, r);
          return m.appContext = l, p === !0 ? p = "svg" : p === !1 && (p = void 0), h && t ? t(m, f) : e(m, f, p), c = !0, a._container = f, f.__vue_app__ = a, qn(m.component);
        }
      },
      onUnmount(f) {
        o.push(f);
      },
      unmount() {
        c && (Ge(
          o,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(f, h) {
        return l.provides[f] = h, a;
      },
      runWithContext(f) {
        const h = Lt;
        Lt = a;
        try {
          return f();
        } finally {
          Lt = h;
        }
      }
    };
    return a;
  };
}
let Lt = null;
function Fo(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), n[e] = t;
  }
}
function En(e, t, n = !1) {
  const s = ye || Fe;
  if (s || Lt) {
    const r = Lt ? Lt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(s && s.proxy) : t;
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
  } = e, o = U(r), [c] = e.propsOptions;
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
        if (Wn(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (c)
          if (W(l, p))
            m !== l[p] && (l[p] = m, a = !0);
          else {
            const w = yt(p);
            r[w] = ps(
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
      !W(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = xt(h)) === h || !W(t, f))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[h] = ps(
        c,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (l !== o)
      for (const h in l)
        (!t || !W(t, h)) && (delete l[h], a = !0);
  }
  a && tt(e.attrs, "set", "");
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
      r && W(r, f = yt(c)) ? !l || !l.includes(f) ? n[f] = a : (o || (o = {}))[f] = a : Wn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, i = !0);
    }
  if (l) {
    const c = U(n), a = o || Y;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      n[h] = ps(
        r,
        c,
        h,
        a[h],
        e,
        !W(a, h)
      );
    }
  }
  return i;
}
function ps(e, t, n, s, r, l) {
  const i = e[n];
  if (i != null) {
    const o = W(i, "default");
    if (o && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && N(c)) {
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
    ] && (s === "" || s === xt(n)) && (s = !0));
  }
  return s;
}
const Lo = /* @__PURE__ */ new WeakMap();
function _l(e, t, n = !1) {
  const s = n ? Lo : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, i = {}, o = [];
  let c = !1;
  if (!N(e)) {
    const f = (h) => {
      c = !0;
      const [p, m] = _l(h, t, !0);
      ge(i, p), m && o.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!l && !c)
    return Q(e) && s.set(e, Mt), Mt;
  if (I(l))
    for (let f = 0; f < l.length; f++) {
      const h = yt(l[f]);
      cr(h) && (i[h] = Y);
    }
  else if (l)
    for (const f in l) {
      const h = yt(f);
      if (cr(h)) {
        const p = l[f], m = i[h] = I(p) || N(p) ? { type: p } : ge({}, p), w = m.type;
        let E = !1, V = !0;
        if (I(w))
          for (let R = 0; R < w.length; ++R) {
            const D = w[R], $ = N(D) && D.name;
            if ($ === "Boolean") {
              E = !0;
              break;
            } else $ === "String" && (V = !1);
          }
        else
          E = N(w) && w.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = E, m[
          1
          /* shouldCastTrue */
        ] = V, (E || W(m, "default")) && o.push(h);
      }
    }
  const a = [i, o];
  return Q(e) && s.set(e, a), a;
}
function cr(e) {
  return e[0] !== "$" && !zt(e);
}
const bl = (e) => e[0] === "_" || e === "$stable", ks = (e) => I(e) ? e.map(We) : [We(e)], Ro = (e, t, n) => {
  if (t._n)
    return t;
  const s = so((...r) => ks(t(...r)), n);
  return s._c = !1, s;
}, wl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (bl(r)) continue;
    const l = e[r];
    if (N(l))
      t[r] = Ro(r, l, s);
    else if (l != null) {
      const i = ks(l);
      t[r] = () => i;
    }
  }
}, xl = (e, t) => {
  const n = ks(t);
  e.slots.default = () => n;
}, Sl = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, No = (e, t, n) => {
  const s = e.slots = ml();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Sl(s, t, n), n && Lr(s, "_", r, !0)) : wl(t, s);
  } else t && xl(e, t);
}, Vo = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, i = Y;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? l = !1 : Sl(r, t, n) : (l = !t.$stable, wl(t, r)), i = t;
  } else t && (xl(e, t), i = { default: 1 });
  if (l)
    for (const o in r)
      !bl(o) && i[o] == null && delete r[o];
}, Ee = Xo;
function Do(e) {
  return ko(e);
}
function ko(e, t) {
  const n = Rr();
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
    setScopeId: m = Ke,
    insertStaticContent: w
  } = e, E = (u, d, g, _ = null, v = null, y = null, C = void 0, S = null, x = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Bt(u, d) && (_ = Te(u), O(u, v, y, !0), u = null), d.patchFlag === -2 && (x = !1, d.dynamicChildren = null);
    const { type: b, ref: F, shapeFlag: T } = d;
    switch (b) {
      case Kn:
        V(u, d, g, _);
        break;
      case wt:
        R(u, d, g, _);
        break;
      case ns:
        u == null && D(d, g, _, C);
        break;
      case pe:
        oe(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          S,
          x
        );
        break;
      default:
        T & 1 ? j(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          S,
          x
        ) : T & 6 ? de(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          S,
          x
        ) : (T & 64 || T & 128) && b.process(
          u,
          d,
          g,
          _,
          v,
          y,
          C,
          S,
          x,
          $t
        );
    }
    F != null && v && as(F, u && u.ref, y, d || u, !d);
  }, V = (u, d, g, _) => {
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
  }, D = (u, d, g, _) => {
    [u.el, u.anchor] = w(
      u.children,
      d,
      g,
      _,
      u.el,
      u.anchor
    );
  }, $ = ({ el: u, anchor: d }, g, _) => {
    let v;
    for (; u && u !== d; )
      v = p(u), s(u, g, _), u = v;
    s(d, g, _);
  }, M = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, j = (u, d, g, _, v, y, C, S, x) => {
    d.type === "svg" ? C = "svg" : d.type === "math" && (C = "mathml"), u == null ? te(
      d,
      g,
      _,
      v,
      y,
      C,
      S,
      x
    ) : ne(
      u,
      d,
      v,
      y,
      C,
      S,
      x
    );
  }, te = (u, d, g, _, v, y, C, S) => {
    let x, b;
    const { props: F, shapeFlag: T, transition: A, dirs: P } = u;
    if (x = u.el = i(
      u.type,
      y,
      F && F.is,
      F
    ), T & 8 ? f(x, u.children) : T & 16 && ie(
      u.children,
      x,
      null,
      _,
      v,
      es(u, y),
      C,
      S
    ), P && dt(u, null, _, "created"), ue(x, u, u.scopeId, C, _), F) {
      for (const X in F)
        X !== "value" && !zt(X) && l(x, X, null, F[X], y, _);
      "value" in F && l(x, "value", null, F.value, y), (b = F.onVnodeBeforeMount) && je(b, _, u);
    }
    P && dt(u, null, _, "beforeMount");
    const k = Ho(v, A);
    k && A.beforeEnter(x), s(x, d, g), ((b = F && F.onVnodeMounted) || k || P) && Ee(() => {
      b && je(b, _, u), k && A.enter(x), P && dt(u, null, _, "mounted");
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
  }, ie = (u, d, g, _, v, y, C, S, x = 0) => {
    for (let b = x; b < u.length; b++) {
      const F = u[b] = S ? it(u[b]) : We(u[b]);
      E(
        null,
        F,
        d,
        g,
        _,
        v,
        y,
        C,
        S
      );
    }
  }, ne = (u, d, g, _, v, y, C) => {
    const S = d.el = u.el;
    let { patchFlag: x, dynamicChildren: b, dirs: F } = d;
    x |= u.patchFlag & 16;
    const T = u.props || Y, A = d.props || Y;
    let P;
    if (g && ht(g, !1), (P = A.onVnodeBeforeUpdate) && je(P, g, d, u), F && dt(d, u, g, "beforeUpdate"), g && ht(g, !0), (T.innerHTML && A.innerHTML == null || T.textContent && A.textContent == null) && f(S, ""), b ? B(
      u.dynamicChildren,
      b,
      S,
      g,
      _,
      es(d, v),
      y
    ) : C || q(
      u,
      d,
      S,
      null,
      g,
      _,
      es(d, v),
      y,
      !1
    ), x > 0) {
      if (x & 16)
        K(S, T, A, g, v);
      else if (x & 2 && T.class !== A.class && l(S, "class", null, A.class, v), x & 4 && l(S, "style", T.style, A.style, v), x & 8) {
        const k = d.dynamicProps;
        for (let X = 0; X < k.length; X++) {
          const z = k[X], Oe = T[z], me = A[z];
          (me !== Oe || z === "value") && l(S, z, Oe, me, v, g);
        }
      }
      x & 1 && u.children !== d.children && f(S, d.children);
    } else !C && b == null && K(S, T, A, g, v);
    ((P = A.onVnodeUpdated) || F) && Ee(() => {
      P && je(P, g, d, u), F && dt(d, u, g, "updated");
    }, _);
  }, B = (u, d, g, _, v, y, C) => {
    for (let S = 0; S < d.length; S++) {
      const x = u[S], b = d[S], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? h(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      E(
        x,
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
      if (d !== Y)
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
        const C = g[y], S = d[y];
        C !== S && y !== "value" && l(u, y, S, C, v, _);
      }
      "value" in g && l(u, "value", d.value, g.value, v);
    }
  }, oe = (u, d, g, _, v, y, C, S, x) => {
    const b = d.el = u ? u.el : o(""), F = d.anchor = u ? u.anchor : o("");
    let { patchFlag: T, dynamicChildren: A, slotScopeIds: P } = d;
    P && (S = S ? S.concat(P) : P), u == null ? (s(b, g, _), s(F, g, _), ie(
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
      S,
      x
    )) : T > 0 && T & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (B(
      u.dynamicChildren,
      A,
      g,
      v,
      y,
      C,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || v && d === v.subTree) && Hs(
      u,
      d,
      !0
      /* shallow */
    )) : q(
      u,
      d,
      g,
      F,
      v,
      y,
      C,
      S,
      x
    );
  }, de = (u, d, g, _, v, y, C, S, x) => {
    d.slotScopeIds = S, u == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      g,
      _,
      C,
      x
    ) : St(
      d,
      g,
      _,
      v,
      y,
      C,
      x
    ) : an(u, d, x);
  }, St = (u, d, g, _, v, y, C) => {
    const S = u.component = nc(
      u,
      _,
      v
    );
    if (fl(u) && (S.ctx.renderer = $t), sc(S, !1, C), S.asyncDep) {
      if (v && v.registerDep(S, he, C), !u.el) {
        const x = S.subTree = nt(wt);
        R(null, x, d, g);
      }
    } else
      he(
        S,
        u,
        d,
        g,
        v,
        y,
        C
      );
  }, an = (u, d, g) => {
    const _ = d.component = u.component;
    if (Jo(u, d, g))
      if (_.asyncDep && !_.asyncResolved) {
        ee(_, d, g);
        return;
      } else
        _.next = d, _.update();
    else
      d.el = u.el, _.vnode = d;
  }, he = (u, d, g, _, v, y, C) => {
    const S = () => {
      if (u.isMounted) {
        let { next: T, bu: A, u: P, parent: k, vnode: X } = u;
        {
          const Ae = El(u);
          if (Ae) {
            T && (T.el = X.el, ee(u, T, C)), Ae.asyncDep.then(() => {
              u.isUnmounted || S();
            });
            return;
          }
        }
        let z = T, Oe;
        ht(u, !1), T ? (T.el = X.el, ee(u, T, C)) : T = X, A && wn(A), (Oe = T.props && T.props.onVnodeBeforeUpdate) && je(Oe, k, T, X), ht(u, !0);
        const me = ts(u), Ne = u.subTree;
        u.subTree = me, E(
          Ne,
          me,
          // parent may have changed if it's in a teleport
          h(Ne.el),
          // anchor may have changed if it's in a fragment
          Te(Ne),
          u,
          v,
          y
        ), T.el = me.el, z === null && Yo(u, me.el), P && Ee(P, v), (Oe = T.props && T.props.onVnodeUpdated) && Ee(
          () => je(Oe, k, T, X),
          v
        );
      } else {
        let T;
        const { el: A, props: P } = d, { bm: k, m: X, parent: z, root: Oe, type: me } = u, Ne = Jt(d);
        if (ht(u, !1), k && wn(k), !Ne && (T = P && P.onVnodeBeforeMount) && je(T, z, d), ht(u, !0), A && Ws) {
          const Ae = () => {
            u.subTree = ts(u), Ws(
              A,
              u.subTree,
              u,
              v,
              null
            );
          };
          Ne && me.__asyncHydrate ? me.__asyncHydrate(
            A,
            u,
            Ae
          ) : Ae();
        } else {
          Oe.ce && Oe.ce._injectChildStyle(me);
          const Ae = u.subTree = ts(u);
          E(
            null,
            Ae,
            g,
            _,
            u,
            v,
            y
          ), d.el = Ae.el;
        }
        if (X && Ee(X, v), !Ne && (T = P && P.onVnodeMounted)) {
          const Ae = d;
          Ee(
            () => je(T, z, Ae),
            v
          );
        }
        (d.shapeFlag & 256 || z && Jt(z.vnode) && z.vnode.shapeFlag & 256) && u.a && Ee(u.a, v), u.isMounted = !0, d = g = _ = null;
      }
    };
    u.scope.on();
    const x = u.effect = new $r(S);
    u.scope.off();
    const b = u.update = x.run.bind(x), F = u.job = x.runIfDirty.bind(x);
    F.i = u, F.id = u.uid, x.scheduler = () => Ns(F), ht(u, !0), b();
  }, ee = (u, d, g) => {
    d.component = u;
    const _ = u.vnode.props;
    u.vnode = d, u.next = null, Po(u, d.props, _, g), Vo(u, d.children, g), ut(), tr(u), at();
  }, q = (u, d, g, _, v, y, C, S, x = !1) => {
    const b = u && u.children, F = u ? u.shapeFlag : 0, T = d.children, { patchFlag: A, shapeFlag: P } = d;
    if (A > 0) {
      if (A & 128) {
        ft(
          b,
          T,
          g,
          _,
          v,
          y,
          C,
          S,
          x
        );
        return;
      } else if (A & 256) {
        Je(
          b,
          T,
          g,
          _,
          v,
          y,
          C,
          S,
          x
        );
        return;
      }
    }
    P & 8 ? (F & 16 && se(b, v, y), T !== b && f(g, T)) : F & 16 ? P & 16 ? ft(
      b,
      T,
      g,
      _,
      v,
      y,
      C,
      S,
      x
    ) : se(b, v, y, !0) : (F & 8 && f(g, ""), P & 16 && ie(
      T,
      g,
      _,
      v,
      y,
      C,
      S,
      x
    ));
  }, Je = (u, d, g, _, v, y, C, S, x) => {
    u = u || Mt, d = d || Mt;
    const b = u.length, F = d.length, T = Math.min(b, F);
    let A;
    for (A = 0; A < T; A++) {
      const P = d[A] = x ? it(d[A]) : We(d[A]);
      E(
        u[A],
        P,
        g,
        null,
        v,
        y,
        C,
        S,
        x
      );
    }
    b > F ? se(
      u,
      v,
      y,
      !0,
      !1,
      T
    ) : ie(
      d,
      g,
      _,
      v,
      y,
      C,
      S,
      x,
      T
    );
  }, ft = (u, d, g, _, v, y, C, S, x) => {
    let b = 0;
    const F = d.length;
    let T = u.length - 1, A = F - 1;
    for (; b <= T && b <= A; ) {
      const P = u[b], k = d[b] = x ? it(d[b]) : We(d[b]);
      if (Bt(P, k))
        E(
          P,
          k,
          g,
          null,
          v,
          y,
          C,
          S,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= T && b <= A; ) {
      const P = u[T], k = d[A] = x ? it(d[A]) : We(d[A]);
      if (Bt(P, k))
        E(
          P,
          k,
          g,
          null,
          v,
          y,
          C,
          S,
          x
        );
      else
        break;
      T--, A--;
    }
    if (b > T) {
      if (b <= A) {
        const P = A + 1, k = P < F ? d[P].el : _;
        for (; b <= A; )
          E(
            null,
            d[b] = x ? it(d[b]) : We(d[b]),
            g,
            k,
            v,
            y,
            C,
            S,
            x
          ), b++;
      }
    } else if (b > A)
      for (; b <= T; )
        O(u[b], v, y, !0), b++;
    else {
      const P = b, k = b, X = /* @__PURE__ */ new Map();
      for (b = k; b <= A; b++) {
        const Me = d[b] = x ? it(d[b]) : We(d[b]);
        Me.key != null && X.set(Me.key, b);
      }
      let z, Oe = 0;
      const me = A - k + 1;
      let Ne = !1, Ae = 0;
      const jt = new Array(me);
      for (b = 0; b < me; b++) jt[b] = 0;
      for (b = P; b <= T; b++) {
        const Me = u[b];
        if (Oe >= me) {
          O(Me, v, y, !0);
          continue;
        }
        let $e;
        if (Me.key != null)
          $e = X.get(Me.key);
        else
          for (z = k; z <= A; z++)
            if (jt[z - k] === 0 && Bt(Me, d[z])) {
              $e = z;
              break;
            }
        $e === void 0 ? O(Me, v, y, !0) : (jt[$e - k] = b + 1, $e >= Ae ? Ae = $e : Ne = !0, E(
          Me,
          d[$e],
          g,
          null,
          v,
          y,
          C,
          S,
          x
        ), Oe++);
      }
      const Ks = Ne ? $o(jt) : Mt;
      for (z = Ks.length - 1, b = me - 1; b >= 0; b--) {
        const Me = k + b, $e = d[Me], zs = Me + 1 < F ? d[Me + 1].el : _;
        jt[b] === 0 ? E(
          null,
          $e,
          g,
          zs,
          v,
          y,
          C,
          S,
          x
        ) : Ne && (z < 0 || b !== Ks[z] ? He($e, g, zs, 2) : z--);
      }
    }
  }, He = (u, d, g, _, v = null) => {
    const { el: y, type: C, transition: S, children: x, shapeFlag: b } = u;
    if (b & 6) {
      He(u.component.subTree, d, g, _);
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
    if (C === pe) {
      s(y, d, g);
      for (let T = 0; T < x.length; T++)
        He(x[T], d, g, _);
      s(u.anchor, d, g);
      return;
    }
    if (C === ns) {
      $(u, d, g);
      return;
    }
    if (_ !== 2 && b & 1 && S)
      if (_ === 0)
        S.beforeEnter(y), s(y, d, g), Ee(() => S.enter(y), v);
      else {
        const { leave: T, delayLeave: A, afterLeave: P } = S, k = () => s(y, d, g), X = () => {
          T(y, () => {
            k(), P && P();
          });
        };
        A ? A(y, k, X) : X();
      }
    else
      s(y, d, g);
  }, O = (u, d, g, _ = !1, v = !1) => {
    const {
      type: y,
      props: C,
      ref: S,
      children: x,
      dynamicChildren: b,
      shapeFlag: F,
      patchFlag: T,
      dirs: A,
      cacheIndex: P
    } = u;
    if (T === -2 && (v = !1), S != null && as(S, null, g, u, !0), P != null && (d.renderCache[P] = void 0), F & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const k = F & 1 && A, X = !Jt(u);
    let z;
    if (X && (z = C && C.onVnodeBeforeUnmount) && je(z, d, u), F & 6)
      Ce(u.component, g, _);
    else {
      if (F & 128) {
        u.suspense.unmount(g, _);
        return;
      }
      k && dt(u, null, d, "beforeUnmount"), F & 64 ? u.type.remove(
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
      (y !== pe || T > 0 && T & 64) ? se(
        b,
        d,
        g,
        !1,
        !0
      ) : (y === pe && T & 384 || !v && F & 16) && se(x, d, g), _ && L(u);
    }
    (X && (z = C && C.onVnodeUnmounted) || k) && Ee(() => {
      z && je(z, d, u), k && dt(u, null, d, "unmounted");
    }, g);
  }, L = (u) => {
    const { type: d, el: g, anchor: _, transition: v } = u;
    if (d === pe) {
      ae(g, _);
      return;
    }
    if (d === ns) {
      M(u);
      return;
    }
    const y = () => {
      r(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: C, delayLeave: S } = v, x = () => C(g, y);
      S ? S(u.el, y, x) : x();
    } else
      y();
  }, ae = (u, d) => {
    let g;
    for (; u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, Ce = (u, d, g) => {
    const { bum: _, scope: v, job: y, subTree: C, um: S, m: x, a: b } = u;
    ur(x), ur(b), _ && wn(_), v.stop(), y && (y.flags |= 8, O(C, u, d, g)), S && Ee(S, d), Ee(() => {
      u.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, se = (u, d, g, _ = !1, v = !1, y = 0) => {
    for (let C = y; C < u.length; C++)
      O(u[C], d, g, _, v);
  }, Te = (u) => {
    if (u.shapeFlag & 6)
      return Te(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), g = d && d[cl];
    return g ? p(g) : d;
  };
  let Ye = !1;
  const fn = (u, d, g) => {
    u == null ? d._vnode && O(d._vnode, null, null, !0) : E(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, Ye || (Ye = !0, tr(), ll(), Ye = !1);
  }, $t = {
    p: E,
    um: O,
    m: He,
    r: L,
    mt: St,
    mc: ie,
    pc: q,
    pbc: B,
    n: Te,
    o: e
  };
  let Bs, Ws;
  return {
    render: fn,
    hydrate: Bs,
    createApp: Mo(fn, Bs)
  };
}
function es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ho(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hs(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let l = 0; l < s.length; l++) {
      const i = s[l];
      let o = r[l];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[l] = it(r[l]), o.el = i.el), !n && o.patchFlag !== -2 && Hs(i, o)), o.type === Kn && (o.el = i.el);
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
const jo = Symbol.for("v-scx"), Uo = () => En(jo);
function nn(e, t) {
  return Bn(e, null, t);
}
function Bo(e, t) {
  return Bn(
    e,
    null,
    { flush: "post" }
  );
}
function ze(e, t, n) {
  return Bn(e, t, n);
}
function Bn(e, t, n = Y) {
  const { immediate: s, deep: r, flush: l, once: i } = n, o = ge({}, n);
  let c;
  if (zn)
    if (l === "sync") {
      const p = Uo();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!t || s)
      o.once = !0;
    else {
      const p = () => {
      };
      return p.stop = Ke, p.resume = Ke, p.pause = Ke, p;
    }
  const a = ye;
  o.call = (p, m, w) => Ge(p, a, m, w);
  let f = !1;
  l === "post" ? o.scheduler = (p) => {
    Ee(p, a && a.suspense);
  } : l !== "sync" && (f = !0, o.scheduler = (p, m) => {
    m ? p() : Ns(p);
  }), o.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, a && (p.id = a.uid, p.i = a));
  };
  const h = Qi(e, t, o);
  return c && c.push(h), h;
}
function Wo(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? Cl(s, e) : () => s[e] : e.bind(s, s);
  let l;
  N(t) ? l = t : (l = t.handler, n = t);
  const i = un(this), o = Bn(r, l.bind(s), n);
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
const Ko = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${yt(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function zo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Y;
  let r = n;
  const l = t.startsWith("update:"), i = l && Ko(s, t.slice(7));
  i && (i.trim && (r = n.map((f) => le(f) ? f.trim() : f)), i.number && (r = n.map(On)));
  let o, c = s[o = Gn(t)] || // also try camelCase event handler (#2249)
  s[o = Gn(yt(t))];
  !c && l && (c = s[o = Gn(xt(t))]), c && Ge(
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
    e.emitted[o] = !0, Ge(
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
  if (!N(e)) {
    const c = (a) => {
      const f = Tl(a, t, !0);
      f && (o = !0, ge(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !o ? (Q(e) && s.set(e, null), null) : (I(l) ? l.forEach((c) => i[c] = null) : ge(i, l), Q(e) && s.set(e, i), i);
}
function Wn(e, t) {
  return !e || !Vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, xt(t)) || W(e, t));
}
function ts(e) {
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
    inheritAttrs: E
  } = e, V = Fn(e);
  let R, D;
  try {
    if (n.shapeFlag & 4) {
      const M = r || s, j = M;
      R = We(
        a.call(
          j,
          M,
          f,
          h,
          m,
          p,
          w
        )
      ), D = o;
    } else {
      const M = t;
      R = We(
        M.length > 1 ? M(
          h,
          { attrs: o, slots: i, emit: c }
        ) : M(
          h,
          null
        )
      ), D = t.props ? o : qo(o);
    }
  } catch (M) {
    Xt.length = 0, $n(M, e, 1), R = nt(wt);
  }
  let $ = R;
  if (D && E !== !1) {
    const M = Object.keys(D), { shapeFlag: j } = $;
    M.length && j & 7 && (l && M.some(bs) && (D = Go(
      D,
      l
    )), $ = Nt($, D, !1, !0));
  }
  return n.dirs && ($ = Nt($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && Vs($, n.transition), R = $, Fn(V), R;
}
const qo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Go = (e, t) => {
  const n = {};
  for (const s in e)
    (!bs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
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
        if (i[p] !== s[p] && !Wn(a, p))
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
    if (t[l] !== e[l] && !Wn(n, l))
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
const pe = Symbol.for("v-fgt"), Kn = Symbol.for("v-txt"), wt = Symbol.for("v-cmt"), ns = Symbol.for("v-stc"), Xt = [];
let Ie = null;
function J(e = !1) {
  Xt.push(Ie = e ? null : []);
}
function Zo() {
  Xt.pop(), Ie = Xt[Xt.length - 1] || null;
}
let sn = 1;
function fr(e) {
  sn += e, e < 0 && Ie && (Ie.hasOnce = !0);
}
function Al(e) {
  return e.dynamicChildren = sn > 0 ? Ie || Mt : null, Zo(), sn > 0 && Ie && Ie.push(e), e;
}
function re(e, t, n, s, r, l) {
  return Al(
    ce(
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
function Ln(e, t, n, s, r) {
  return Al(
    nt(
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
const Fl = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || fe(e) || N(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function ce(e, t = null, n = null, s = 0, r = null, l = e === pe ? 0 : 1, i = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fl(t),
    ref: t && Cn(t),
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
    ctx: Fe
  };
  return o ? (js(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= le(n) ? 8 : 16), sn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ie.push(c), c;
}
const nt = Qo;
function Qo(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === wo) && (e = wt), Ml(e)) {
    const o = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && js(o, n), sn > 0 && !l && Ie && (o.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = o : Ie.push(o)), o.patchFlag = -2, o;
  }
  if (oc(e) && (e = e.__vccOpts), t) {
    t = $s(t);
    let { class: o, style: c } = t;
    o && !le(o) && (t.class = Ht(o)), Q(c) && (Ps(c) && !I(c) && (c = ge({}, c)), t.style = kt(c));
  }
  const i = le(e) ? 1 : Ol(e) ? 128 : ro(e) ? 64 : Q(e) ? 4 : N(e) ? 2 : 0;
  return ce(
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
function $s(e) {
  return e ? Ps(e) || vl(e) ? ge({}, e) : e : null;
}
function Nt(e, t, n = !1, s = !1) {
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
      n && l ? I(l) ? l.concat(Cn(t)) : [l, Cn(t)] : Cn(t)
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
    patchFlag: t && e.type !== pe ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Vs(
    f,
    c.clone(f)
  ), f;
}
function gs(e = " ", t = 0) {
  return nt(Kn, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (J(), Ln(wt, null, e)) : nt(wt, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? nt(wt) : I(e) ? nt(
    pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ml(e) ? it(e) : nt(Kn, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function js(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), js(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !vl(t) ? t._ctx = Fe : r === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else N(t) ? (t = { default: t, _ctx: Fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [gs(t)]) : n = 8);
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
        t.style = kt([t.style, s.style]);
      else if (Vn(r)) {
        const l = t[r], i = s[r];
        i && l !== i && !(I(l) && l.includes(i)) && (t[r] = l ? [].concat(l, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ge(e, t, 7, [
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
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
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
let ye = null;
const Il = () => ye || Fe;
let Rn, ms;
{
  const e = Rr(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (l) => {
      r.length > 1 ? r.forEach((i) => i(l)) : r[0](l);
    };
  };
  Rn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ye = n
  ), ms = t(
    "__VUE_SSR_SETTERS__",
    (n) => zn = n
  );
}
const un = (e) => {
  const t = ye;
  return Rn(e), e.scope.on(), () => {
    e.scope.off(), Rn(t);
  };
}, dr = () => {
  ye && ye.scope.off(), Rn(null);
};
function Pl(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function sc(e, t = !1, n = !1) {
  t && ms(t);
  const { props: s, children: r } = e.vnode, l = Pl(e);
  Io(e, s, l, t), No(e, r, n);
  const i = l ? rc(e, t) : void 0;
  return t && ms(!1), i;
}
function rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xo);
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? ic(e) : null, l = un(e);
    ut();
    const i = on(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (at(), l(), Mr(i)) {
      if (Jt(e) || al(e), i.then(dr, dr), t)
        return i.then((o) => {
          hr(e, o, t);
        }).catch((o) => {
          $n(o, e, 0);
        });
      e.asyncDep = i;
    } else
      hr(e, i, t);
  } else
    Ll(e, t);
}
function hr(e, t, n) {
  N(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = nl(t)), Ll(e, n);
}
let pr;
function Ll(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && pr && !s.render) {
      const r = s.template || Ds(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: i } = e.appContext.config, { delimiters: o, compilerOptions: c } = s, a = ge(
          ge(
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
    e.render = s.render || Ke;
  }
  {
    const r = un(e);
    ut();
    try {
      So(e);
    } finally {
      at(), r();
    }
  }
}
const lc = {
  get(e, t) {
    return be(e, "get", ""), e[t];
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
function qn(e) {
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
  return N(e) && "__vccOpts" in e;
}
const _e = (e, t) => Xi(e, t, zn), cc = "3.5.9";
/**
* @vue/runtime-dom v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vs;
const gr = typeof window < "u" && window.trustedTypes;
if (gr)
  try {
    vs = /* @__PURE__ */ gr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Rl = vs ? (e) => vs.createHTML(e) : (e) => e, uc = "http://www.w3.org/2000/svg", ac = "http://www.w3.org/1998/Math/MathML", Ze = typeof document < "u" ? document : null, mr = Ze && /* @__PURE__ */ Ze.createElement("template"), fc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Ze.createElementNS(uc, e) : t === "mathml" ? Ze.createElementNS(ac, e) : n ? Ze.createElement(e, { is: n }) : Ze.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
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
      mr.innerHTML = Rl(
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
const Nn = Symbol("_vod"), Nl = Symbol("_vsh"), Vl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Nn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Wt(e, t);
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
  e.style.display = t ? e[Nn] : "none", e[Nl] = !t;
}
const pc = Symbol(""), gc = /(^|;)\s*display\s*:/;
function mc(e, t, n) {
  const s = e.style, r = le(n);
  let l = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const o = i.slice(0, i.indexOf(":")).trim();
          n[o] == null && Tn(s, o, "");
        }
      else
        for (const i in t)
          n[i] == null && Tn(s, i, "");
    for (const i in n)
      i === "display" && (l = !0), Tn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[pc];
      i && (n += ";" + i), s.cssText = n, l = gc.test(n);
    }
  } else t && e.removeAttribute("style");
  Nn in e && (e[Nn] = l ? s.display : "", e[Nl] && (s.display = "none"));
}
const vr = /\s*!important$/;
function Tn(e, t, n) {
  if (I(n))
    n.forEach((s) => Tn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = vc(e, t);
    vr.test(n) ? e.setProperty(
      xt(s),
      n.replace(vr, ""),
      "important"
    ) : e[s] = n;
  }
}
const yr = ["Webkit", "Moz", "ms"], ss = {};
function vc(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let s = yt(t);
  if (s !== "filter" && s in e)
    return ss[t] = s;
  s = Pr(s);
  for (let r = 0; r < yr.length; r++) {
    const l = yr[r] + s;
    if (l in e)
      return ss[t] = l;
  }
  return t;
}
const _r = "http://www.w3.org/1999/xlink";
function br(e, t, n, s, r, l = mi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_r, t.slice(6, t.length)) : e.setAttributeNS(_r, t, n) : n == null || l && !Vr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : qe(n) ? String(n) : n
  );
}
function yc(e, t, n, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Rl(n) : n);
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
function et(e, t, n, s) {
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
      et(e, o, a, c);
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
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let rs = 0;
const xc = /* @__PURE__ */ Promise.resolve(), Sc = () => rs || (xc.then(() => rs = 0), rs = Date.now());
function Ec(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ge(
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
  t === "class" ? hc(e, s, i) : t === "style" ? mc(e, n, s) : Vn(t) ? bs(t) || bc(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Oc(e, t, s, i)) ? (yc(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && br(e, t, s, i, l, t !== "value")) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), br(e, t, s, i));
};
function Oc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Sr(t) && N(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Sr(t) && le(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !le(n)));
}
const ct = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => wn(t, n) : t;
};
function Ac(e) {
  e.target.composing = !0;
}
function Er(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Re = Symbol("_assign"), ys = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Re] = ct(r);
    const l = s || r.props && r.props.type === "number";
    et(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let o = e.value;
      n && (o = o.trim()), l && (o = On(o)), e[Re](o);
    }), n && et(e, "change", () => {
      e.value = e.value.trim();
    }), t || (et(e, "compositionstart", Ac), et(e, "compositionend", Er), et(e, "change", Er));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: l } }, i) {
    if (e[Re] = ct(i), e.composing) return;
    const o = (l || e.type === "number") && !/^0\d/.test(e.value) ? On(e.value) : e.value, c = t ?? "";
    o !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, Mc = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Re] = ct(n), et(e, "change", () => {
      const s = e._modelValue, r = Vt(e), l = e.checked, i = e[Re];
      if (I(s)) {
        const o = Ss(s, r), c = o !== -1;
        if (l && !c)
          i(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(o, 1), i(a);
        }
      } else if (Dt(s)) {
        const o = new Set(s);
        l ? o.add(r) : o.delete(r), i(o);
      } else
        i(Dl(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Cr,
  beforeUpdate(e, t, n) {
    e[Re] = ct(n), Cr(e, t, n);
  }
};
function Cr(e, { value: t }, n) {
  e._modelValue = t;
  let s;
  I(t) ? s = Ss(t, n.props.value) > -1 : Dt(t) ? s = t.has(n.props.value) : s = _t(t, Dl(e, !0)), e.checked !== s && (e.checked = s);
}
const Fc = {
  created(e, { value: t }, n) {
    e.checked = _t(t, n.props.value), e[Re] = ct(n), et(e, "change", () => {
      e[Re](Vt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Re] = ct(s), t !== n && (e.checked = _t(t, s.props.value));
  }
}, Ic = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Dt(t);
    et(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? On(Vt(i)) : Vt(i)
      );
      e[Re](
        e.multiple ? r ? new Set(l) : l : l[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[Re] = ct(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Tr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Re] = ct(n);
  },
  updated(e, { value: t }) {
    e._assigning || Tr(e, t);
  }
};
function Tr(e, t) {
  const n = e.multiple, s = I(t);
  if (!(n && !s && !Dt(t))) {
    for (let r = 0, l = e.options.length; r < l; r++) {
      const i = e.options[r], o = Vt(i);
      if (n)
        if (s) {
          const c = typeof o;
          c === "string" || c === "number" ? i.selected = t.some((a) => String(a) === String(o)) : i.selected = Ss(t, o) > -1;
        } else
          i.selected = t.has(o);
      else if (_t(Vt(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Vt(e) {
  return "_value" in e ? e._value : e.value;
}
function Dl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Pc = {
  created(e, t, n) {
    bn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    bn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    bn(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    bn(e, t, n, s, "updated");
  }
};
function Lc(e, t) {
  switch (e) {
    case "SELECT":
      return Ic;
    case "TEXTAREA":
      return ys;
    default:
      switch (t) {
        case "checkbox":
          return Mc;
        case "radio":
          return Fc;
        default:
          return ys;
      }
  }
}
function bn(e, t, n, s, r) {
  const i = Lc(
    e.tagName,
    n.props && n.props.type
  )[r];
  i && i(e, t, n, s);
}
const Rc = ["ctrl", "shift", "alt", "meta"], Nc = {
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
  exact: (e, t) => Rc.some((n) => e[`${n}Key`] && !t.includes(n))
}, mt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...l) => {
    for (let i = 0; i < t.length; i++) {
      const o = Nc[t[i]];
      if (o && o(r, t)) return;
    }
    return e(r, ...l);
  });
}, Vc = /* @__PURE__ */ ge({ patchProp: Tc }, fc);
let Or;
function Dc() {
  return Or || (Or = Do(Vc));
}
const kl = (...e) => {
  const t = Dc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Hc(s);
    if (!r) return;
    const l = t._component;
    !N(l) && !l.render && !l.template && (l.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, kc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function kc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hc(e) {
  return le(e) ? document.querySelector(e) : e;
}
function $c(e) {
  return Hr() ? (_i(e), !0) : !1;
}
function Hl(e) {
  return typeof e == "function" ? e() : H(e);
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
function Ot(e) {
  var t;
  const n = Hl(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Wc() {
  const e = G(!1), t = Il();
  return t && cn(() => {
    e.value = !0;
  }, t), e;
}
function Kc(e) {
  const t = Wc();
  return _e(() => (t.value, !!e()));
}
function zc(e, t, n = {}) {
  const { window: s = $l, ...r } = n;
  let l;
  const i = Kc(() => s && "ResizeObserver" in s), o = () => {
    l && (l.disconnect(), l = void 0);
  }, c = _e(() => {
    const h = Hl(e);
    return Array.isArray(h) ? h.map((p) => Ot(p)) : [Ot(h)];
  }), a = ze(
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
  const { window: s = $l, box: r = "content-box" } = n, l = _e(() => {
    var h, p;
    return (p = (h = Ot(e)) == null ? void 0 : h.namespaceURI) == null ? void 0 : p.includes("svg");
  }), i = G(t.width), o = G(t.height), { stop: c } = zc(
    e,
    ([h]) => {
      const p = r === "border-box" ? h.borderBoxSize : r === "content-box" ? h.contentBoxSize : h.devicePixelContentBoxSize;
      if (s && l.value) {
        const m = Ot(e);
        if (m) {
          const w = m.getBoundingClientRect();
          i.value = w.width, o.value = w.height;
        }
      } else if (p) {
        const m = Array.isArray(p) ? p : [p];
        i.value = m.reduce((w, { inlineSize: E }) => w + E, 0), o.value = m.reduce((w, { blockSize: E }) => w + E, 0);
      } else
        i.value = h.contentRect.width, o.value = h.contentRect.height;
    },
    n
  );
  Bc(() => {
    const h = Ot(e);
    h && (i.value = "offsetWidth" in h ? h.offsetWidth : t.width, o.value = "offsetHeight" in h ? h.offsetHeight : t.height);
  });
  const a = ze(
    () => Ot(e),
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
  const t = G(null), n = qc(t), s = G([]), r = Wi(e);
  return { state: G({ start: 0, end: 10 }), source: r, currentList: s, size: n, containerRef: t };
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
  ze([e.width, e.height, t, n], () => {
    s();
  });
}
function Gl(e, t) {
  return _e(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, s, r) => n + e(r), 0));
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
  const n = Ul(t), { state: s, source: r, currentList: l, size: i, containerRef: o } = n, c = { overflowX: "auto" }, { itemWidth: a, overscan: f = 5 } = e, h = Bl(s, r, a), p = Wl(r, a), m = Kl("horizontal", f, p, h, n), w = zl(a, r), E = _e(() => w(s.value.start)), V = Gl(a, r);
  ql(i, t, o, m);
  const R = Jl("horizontal", m, w, o), D = _e(() => ({
    style: {
      height: "100%",
      width: `${V.value - E.value}px`,
      marginLeft: `${E.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: R,
    calculateRange: m,
    wrapperProps: D,
    containerStyle: c,
    currentList: l,
    containerRef: o
  };
}
function Yc(e, t) {
  const n = Ul(t), { state: s, source: r, currentList: l, size: i, containerRef: o } = n, c = { overflowY: "auto" }, { itemHeight: a, overscan: f = 5 } = e, h = Bl(s, r, a), p = Wl(r, a), m = Kl("vertical", f, p, h, n), w = zl(a, r), E = _e(() => w(s.value.start)), V = Gl(a, r);
  ql(i, t, o, m);
  const R = Jl("vertical", m, w, o), D = _e(() => ({
    style: {
      width: "100%",
      height: `${V.value - E.value}px`,
      marginTop: `${E.value}px`
    }
  }));
  return {
    calculateRange: m,
    scrollTo: R,
    containerStyle: c,
    wrapperProps: D,
    currentList: l,
    containerRef: o
  };
}
const pt = (e) => {
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
  const r = G(/* @__PURE__ */ new Map());
  nn(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = G([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, nn(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: pt(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((f) => pt(f.value)).filter((f) => f != null))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, f) => (a.push({
        value: f.text,
        key: pt(f.value),
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
      r.value.set(pt(a), pt(a));
  else s != null && r.value.set(pt(s), pt(s));
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
G({});
function eu(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Us = (e = null) => {
  var s;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...((s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) ?? {} };
  Object.assign(n, e ?? {}), Zl(G(n), "defaults");
}, Zl = (e, t) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Us());
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
  const c = G(0), a = G(!1), f = _e(() => a.value || c.value > 0);
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
              m = h.reduce((w, E) => w && !s.value.startsWith(E), !0);
              break;
          }
          if (m) {
            a.value = !0;
            const w = setTimeout(() => {
              h.push(s.value), c.value += 1, o.body = { ...o.body, ...l.value }, Ar(t, s.value, o).then((E) => {
                e.actions.addRange(E), e.actions.sort(), c.value -= 1, a.value = !1;
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
  const l = G(""), i = G([]), o = G({}), c = { ...s.reduce((f, h) => (f[h] = !1, f), {}), ...r.reduce((f, h) => (f[h] = !0, f), {}) };
  for (let f in c) {
    let h = c[f], p = document.getElementById(f);
    o.value[f] = p == null ? void 0 : p.value, p && p.addEventListener("change", (m) => {
      o.value[f] = m.target.value, h && Rt(() => {
        if (t != null)
          for (let w of Array.from(t.value.keys()))
            i.value.find((E) => E.key == w) || n(w, !1);
        else i.value.find((w) => w.key == l.value) || n(l.value, !1);
      });
    });
  }
  const a = function(f, h) {
    let p = f.value;
    return Object.keys(o.value).length > 0 && (p = p.filter((m) => {
      var w;
      for (let E in o.value)
        if ((c[E] ? !0 : (o.value[E] ?? "").length > 0) && ((w = m.data) != null && w.hasOwnProperty(E))) {
          if (Array.isArray(m.data[E])) {
            if (!m.data[E].includes(o.value[E]))
              return !1;
          } else if (m.data[E] != o.value[E])
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
  }, a = _e(() => {
    const h = dn(s.value).width ?? 100;
    if (i === "inherit")
      return h;
    if (i == null || i === "dynamic") {
      const p = parseInt(getComputedStyle(document.querySelector("html"))["font-size"]) ?? 16;
      return Math.max(h, Math.max(...e.value.map((m) => c(m.value))) + 20 + p * 3);
    }
    return i;
  }), f = G({
    position: "absolute",
    "min-width": "max-content"
  });
  return Bo(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = dn(s.value), p = dn(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var p = dn(l.value);
    let m = -p.left + h.left;
    const w = window.document.documentElement.clientWidth;
    m + a.value > w && (m = w - a.value), f.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + h.top + h.height).toString() + "px",
      left: m.toString() + "px"
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
    originalNode: {},
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
    var ft, He;
    const n = e, s = _e(() => {
      var O;
      return ((O = n.originalNode) == null ? void 0 : O.multiple) ?? n.multiple;
    }), { options: r, selectedOptions: l, onReset: i } = Xl(n.originalNode, qt(n, "options"), qt(n, "modelValue"), n.initialValue), { t: o } = Ql(n.originalNode, qt(n, "localization")), c = (ft = n.originalNode) == null ? void 0 : ft.classList, a = Object.values(((He = n.originalNode) == null ? void 0 : He.style) ?? {});
    Yl(n.originalNode);
    const f = t, h = (O, L = null) => {
      if (s.value) {
        let ae = L;
        switch (ae == null && (ae = !l.value.has(O)), ae) {
          case !0:
            l.value.set(O, O);
            break;
          case !1:
            l.value.delete(O);
            break;
        }
      } else
        l.value.clear(), L !== !1 && l.value.set(O, O), $.value = !1;
      ne(Array.from(l.value.keys()));
    }, { filterText: p, filteredOptions: m, filterValues: w } = ti(r, l, h, n.filterFields, n.hardFilterFields), { searchingFlag: E } = ei(
      r,
      n.url,
      n.searchableUrl,
      p,
      n.minChars,
      w,
      n.fetchMode,
      n.fetchOptions
    ), V = G(null), R = G(), D = G(null), $ = G(!1);
    function M(O) {
      n.disabled || ($.value = O);
    }
    ze(p, () => {
      var L;
      let O = (L = R.value) == null ? void 0 : L.querySelector(".scroller");
      O && (O.scrollTop = 0);
    });
    const j = G(null), te = function(O) {
      const L = At(O.target);
      L.push(O.target), !L.includes(V.value) && !L.includes(R.value) ? $.value = !1 : (O.stopImmediatePropagation(), O.preventDefault());
    };
    cn(() => {
      if (n.dropdownContainer != null) {
        const O = n.dropdownContainer;
        let L = !1;
        j.value = At(V.value).find((ae) => !!(ae instanceof Element && (ae.matches(O) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(ae).position))));
      }
      if (j.value == null && (j.value = document.querySelector("body")), n.originalNode) {
        for (let L of c)
          L != "extraselect" && V.value.classList.add(L);
        for (let L of a)
          V.value.style[L] = n.originalNode.style[L];
        let O = At(V.value, "form").pop();
        O instanceof HTMLElement && O.matches("form") && O.addEventListener("reset", () => setTimeout(i)), n.originalNode.toggleValue = h, n.originalNode.setValues = (L) => {
          l.value.clear();
          for (let ae of L)
            h(ae);
        };
      }
      window.document.addEventListener("mousedown", te), window.document.addEventListener("focusin", te);
    }), Un(() => {
      window.document.removeEventListener("mousedown", te), window.document.removeEventListener("focusin", te);
    });
    const { dropdownStyle: ue, getTextWidth: ie } = ni(r, l, $, V, R, j, n.maxWidth), ne = (O) => {
      Rt(
        () => {
          var L;
          return (L = n.originalNode) == null ? void 0 : L.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), f("update:modelValue", O);
    }, B = (O) => {
      K(O, !1), p.value = "";
    }, K = (O, L = null) => {
      L == null && (L = !de.value), L ? (l.value.clear(), r.value.forEach((ae) => l.value.set(ae.key, ae.key))) : l.value.clear(), ne(Array.from(l.value.keys()));
    }, oe = () => {
      St.value ? m.value.forEach((O) => {
        l.value.has(O.key) && l.value.delete(O.key);
      }) : m.value.forEach((O) => {
        l.value.has(O.key) || l.value.set(O.key, O.key);
      }), ne(Array.from(l.value.keys()));
    };
    ze($, (O, L) => {
      O != L && (O ? n.search && Rt(() => {
        D.value.focus({ focusVisible: !0 });
      }) : p.value = "");
    });
    const de = _e(() => l.value.size == r.value.length), St = _e(() => m.value.reduce((O, L) => O && l.value.has(L.key), !0)), an = _e(() => l.value.size == 0), he = _e(() => {
      var O, L, ae;
      if (r.value.length < 0) return "";
      if (s.value) {
        if (an.value) return o("No selection");
        if (!n.searchableUrl && de.value) return o("All selected");
        const Ce = V.value ? getComputedStyle(V.value) : null, se = ((O = V.value) == null ? void 0 : O.clientWidth) - parseInt(Ce == null ? void 0 : Ce.paddingLeft) - parseInt(Ce == null ? void 0 : Ce.paddingRight);
        let Te = o(":n selected - ", { n: l.value.size }), Ye = !0;
        for (let fn of l.value)
          if (Ye ? Ye = !1 : Te += ", ", Te += ((L = r.map.get(fn[0])) == null ? void 0 : L.value) ?? (E.value ? o("Loading...") : o("Value not found")), se < ie(Te))
            return l.value.size + o(" selected");
        return Te;
      } else
        for (let Ce of l.value)
          return ((ae = r.map.get(Ce[0])) == null ? void 0 : ae.value) ?? (E.value ? o("Loading...") : o("Value not found"));
      return o("No selection");
    }), { list: ee, containerProps: q, wrapperProps: Je } = jl(
      m,
      {
        itemHeight: 32
      }
    );
    return (O, L) => {
      var ae, Ce;
      return J(), re(pe, null, [
        s.value && H(l).size == 0 ? (J(), re("input", {
          key: 0,
          type: "hidden",
          name: (Ce = (ae = n.originalNode) == null ? void 0 : ae.name) == null ? void 0 : Ce.replace("[]", ""),
          value: ""
        }, null, 8, nu)) : Pe("", !0),
        n.showSelected ? (J(), re("div", su, [
          (J(!0), re(pe, null, Sn(H(l), (se) => {
            var Te;
            return J(), re("div", {
              key: se,
              onClick: mt((Ye) => h(se[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              gs(Ve((Te = H(r).find((Ye) => Ye.key == se[0])) == null ? void 0 : Te.value) + " ", 1),
              ce("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, lu)
            ], 8, ru);
          }), 128))
        ])) : Pe("", !0),
        ce("input", rn({
          onFocus: L[0] || (L[0] = (se) => M(!0)),
          onClick: L[1] || (L[1] = mt((se) => M(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: V,
          value: he.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, O.$attrs, { disabled: O.disabled }), null, 16, iu),
        j.value ? (J(), Ln(us, {
          key: 2,
          to: j.value
        }, [
          In(ce("div", {
            class: Ht(["extra-select dropdown", { searching: H(E) > 0 }]),
            ref_key: "dropdownNode",
            ref: R,
            style: kt(H(ue))
          }, [
            n.search ? (J(), re("div", ou, [
              In(ce("input", {
                ref_key: "searchNode",
                ref: D,
                class: "extra-select-search",
                "onUpdate:modelValue": L[2] || (L[2] = (se) => fe(p) ? p.value = se : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: H(o)("Search...")
              }, null, 8, cu), [
                [ys, H(p)]
              ])
            ])) : Pe("", !0),
            H(p).length >= n.minChars ? (J(), re(pe, { key: 1 }, [
              s.value ? (J(), re("div", uu, [
                H(p).length == 0 ? (J(), re("div", {
                  key: 0,
                  onClick: mt(K, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  ce("div", au, [
                    ce("input", {
                      checked: de.value,
                      type: "checkbox"
                    }, null, 8, fu),
                    ce("b", null, Ve(H(o)("Select all")), 1)
                  ])
                ])) : Pe("", !0),
                H(m).length > 0 && H(p).length > 0 ? (J(), re("div", {
                  key: 1,
                  onClick: mt(oe, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  ce("div", du, [
                    ce("input", {
                      checked: St.value,
                      type: "checkbox"
                    }, null, 8, hu),
                    ce("b", null, Ve(H(o)("Select Filtered")), 1)
                  ])
                ])) : Pe("", !0),
                ce("div", {
                  class: "clear",
                  onClick: mt(B, ["stop", "prevent"])
                }, Ve(H(o)("Clear")), 1)
              ])) : Pe("", !0),
              H(m).length == 0 ? (J(), re("div", pu, Ve(H(o)("No matches found")), 1)) : Pe("", !0)
            ], 64)) : (J(), re("div", gu, Ve(H(o)("Insert at least :n characters", { n: n.minChars })), 1)),
            ce("div", rn(H(q), { class: "scroller" }), [
              ce("div", Nr($s(H(Je))), [
                (J(!0), re(pe, null, Sn(H(ee), (se) => (J(), re("button", {
                  key: se.index,
                  class: "dropdown-row",
                  onClick: mt((Te) => h(se.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  ce("div", vu, [
                    s.value ? (J(), re("input", {
                      key: 0,
                      checked: H(l).has(se.data.key),
                      type: "checkbox"
                    }, null, 8, yu)) : Pe("", !0),
                    gs(" " + Ve(se.data.value), 1)
                  ])
                ], 8, mu))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Vl, $.value]
          ])
        ], 8, ["to"])) : Pe("", !0),
        n.originalNode ? (J(), Ln(us, {
          key: 3,
          to: n.originalNode
        }, [
          (J(!0), re(pe, null, Sn(H(l), (se) => (J(), re("option", {
            key: se[0],
            selected: "selected",
            value: se[0]
          }, null, 8, _u))), 128))
        ], 8, ["to"])) : Pe("", !0)
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
    var ie, ne;
    const n = e, { options: s } = Xl(n.originalNode, qt(n, "options"), G([])), { t: r } = Ql(n.originalNode, qt(n, "localization")), l = (ie = n.originalNode) == null ? void 0 : ie.classList, i = Object.values(((ne = n.originalNode) == null ? void 0 : ne.style) ?? {});
    Yl(n.originalNode);
    const o = t, c = (B, K = null) => {
      K === !1 ? a.value = "" : a.value = s.map.get(B).value, E.value = !1;
    }, { filterText: a, filteredOptions: f, filterValues: h } = ti(s, null, c, n.filterFields, n.hardFilterFields), { searchingFlag: p } = ei(
      s,
      n.url,
      n.searchableUrl,
      a,
      n.minChars,
      h,
      n.fetchMode,
      n.fetchOptions
    ), m = G(null), w = G(null), E = G(!1), V = G(null);
    function R(B) {
      n.disabled || (E.value = B);
    }
    ze(a, () => {
      w.value.querySelector(".scroller").scrollTop = 0;
    });
    const D = function(B) {
      const K = At(B.target);
      K.push(B.target), !K.includes(m.value) && !K.includes(w.value) && (E.value = !1);
    };
    cn(() => {
      if (n.dropdownContainer) {
        let oe = !1;
        V.value = At(m.value).find((de) => !!(de instanceof Element && (de.matches(n.dropdownContainer) && (oe = !0), oe && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(de).position))));
      }
      if (V.value == null && (V.value = document.querySelector("body")), n.originalNode) {
        for (let de of l)
          de != "extrasuggest" && m.value.classList.add(de);
        for (let de of i)
          m.value.style[de] = n.originalNode.style[de];
        a.value = n.originalNode.value;
        let oe = At(m.value, "form").pop();
        oe instanceof HTMLElement && oe.matches("form") && oe.addEventListener("reset", () => setTimeout(K)), n.originalNode.addEventListener("change", () => {
          M(!0);
        });
      }
      nn(() => {
        n.modelValue != null && (a.value = n.modelValue);
      });
      const B = a.value, K = () => {
        a.value = B;
      };
      window.document.addEventListener("mousedown", D), window.document.addEventListener("focusin", D);
    }), Un(() => {
      window.document.removeEventListener("mousedown", D), window.document.removeEventListener("focusin", D);
    });
    const { dropdownStyle: $ } = ni(s, G([]), E, m, w, V, n.maxWidth), M = (B = !1) => {
      var K;
      n.originalNode && (B ? a.value = n.originalNode.value : (n.originalNode.value = a.value, (K = n.originalNode) == null || K.dispatchEvent(new Event("change", { bubbles: !0 })))), o("update:modelValue", a.value);
    };
    ze(() => E.value, (B) => {
      B === !1 && M();
    });
    const { list: j, containerProps: te, wrapperProps: ue } = jl(
      f,
      {
        itemHeight: 32
      }
    );
    return (B, K) => (J(), re(pe, null, [
      In(ce("input", rn({
        onFocus: K[0] || (K[0] = (oe) => R(!0)),
        onClick: K[1] || (K[1] = (oe) => R(!0)),
        ref_key: "inputNode",
        ref: m,
        "onUpdate:modelValue": K[2] || (K[2] = (oe) => fe(a) ? a.value = oe : null),
        class: "extra-select extra-select-input"
      }, B.$attrs, { disabled: e.disabled }), null, 16, wu), [
        [Pc, H(a)]
      ]),
      V.value ? (J(), Ln(us, {
        key: 0,
        to: V.value
      }, [
        In(ce("div", {
          class: Ht(["extra-select dropdown", { searching: H(p) > 0 }]),
          ref_key: "dropdownNode",
          ref: w,
          style: kt(H($))
        }, [
          H(a).length >= n.minChars ? (J(), re(pe, { key: 0 }, [
            H(f).length == 0 ? (J(), re("div", xu, Ve(H(r)("No matches found")), 1)) : Pe("", !0)
          ], 64)) : (J(), re("div", Su, Ve(H(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          ce("div", rn(H(te), { class: "scroller" }), [
            ce("div", Nr($s(H(ue))), [
              (J(!0), re(pe, null, Sn(H(j), (oe) => (J(), re("button", {
                key: oe.index,
                class: "dropdown-row",
                onClick: mt((de) => c(oe.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ce("div", Cu, Ve(oe.data.value), 1)
              ], 8, Eu))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Vl, E.value]
        ])
      ], 8, ["to"])) : Pe("", !0)
    ], 64));
  }
}), Au = Us, si = {
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
      const s = kl(bu, t);
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
      const s = kl(Ou, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), De.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  si.init(), ri.init(), Us();
});
export {
  si as ExtraSelect,
  ri as ExtraSuggest,
  Au as loadExtraSelectDefaultLocalization
};
