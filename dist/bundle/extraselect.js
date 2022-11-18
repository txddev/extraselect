const Be = /* @__PURE__ */ new WeakMap();
class at {
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
    return at.has(t, n) ? !1 : (at.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Be);
function Zt(e) {
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
function mt(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s instanceof HTMLElement && !(t instanceof HTMLElement && s === t) && !(typeof t == "string" && s.matches(t)); ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return s != null && n.push(s), n;
}
function El(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(n) {
    e.removeChild(n);
  });
}
function is(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Ol = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tl = /* @__PURE__ */ is(Ol);
function mr(e) {
  return !!e || e === "";
}
function Ot(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ce(s) ? Il(s) : Ot(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else {
    if (ce(e))
      return e;
    if (re(e))
      return e;
  }
}
const Al = /;(?![^(]*\))/g, kl = /:(.+)/;
function Il(e) {
  const t = {};
  return e.split(Al).forEach((n) => {
    if (n) {
      const s = n.split(kl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Tt(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const s = Tt(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function vr(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ce(t) && (e.class = Tt(t)), n && (e.style = Ot(n)), e;
}
function Fl(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = dt(e[s], t[s]);
  return n;
}
function dt(e, t) {
  if (e === t)
    return !0;
  let n = Ms(e), s = Ms(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Bt(e), s = Bt(t), n || s)
    return e === t;
  if (n = S(e), s = S(t), n || s)
    return n && s ? Fl(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const o in e) {
      const i = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (i && !u || !i && u || !dt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function cs(e, t) {
  return e.findIndex((n) => dt(n, t));
}
const Lt = (e) => ce(e) ? e : e == null ? "" : S(e) || re(e) && (e.toString === br || !$(e.toString)) ? JSON.stringify(e, yr, 2) : String(e), yr = (e, t) => t && t.__v_isRef ? yr(e, t.value) : yt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : At(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : re(t) && !S(t) && !wr(t) ? String(t) : t, G = {}, vt = [], Se = () => {
}, Ml = () => !1, Nl = /^on[^a-z]/, bn = (e) => Nl.test(e), us = (e) => e.startsWith("onUpdate:"), pe = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sl = Object.prototype.hasOwnProperty, K = (e, t) => Sl.call(e, t), S = Array.isArray, yt = (e) => Jt(e) === "[object Map]", At = (e) => Jt(e) === "[object Set]", Ms = (e) => Jt(e) === "[object Date]", $ = (e) => typeof e == "function", ce = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", _r = (e) => re(e) && $(e.then) && $(e.catch), br = Object.prototype.toString, Jt = (e) => br.call(e), Pl = (e) => Jt(e).slice(8, -1), wr = (e) => Jt(e) === "[object Object]", as = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, on = /* @__PURE__ */ is(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ll = /-(\w)/g, wt = wn((e) => e.replace(Ll, (t, n) => n ? n.toUpperCase() : "")), Rl = /\B([A-Z])/g, kt = wn((e) => e.replace(Rl, "-$1").toLowerCase()), xr = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pn = wn((e) => e ? `on${xr(e)}` : ""), Ht = (e, t) => !Object.is(e, t), cn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, dn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, hn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ns;
const jl = () => Ns || (Ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let we;
class Bl {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && we && (this.parent = we, this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Hl(e, t = we) {
  t && t.active && t.effects.push(e);
}
function Ul() {
  return we;
}
function $l(e) {
  we && we.cleanups.push(e);
}
const ds = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Cr = (e) => (e.w & Ze) > 0, Er = (e) => (e.n & Ze) > 0, Dl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ze;
}, Kl = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Cr(r) && !Er(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ze, r.n &= ~Ze;
    }
    t.length = n;
  }
}, Un = /* @__PURE__ */ new WeakMap();
let Pt = 0, Ze = 1;
const $n = 30;
let Ie;
const ut = Symbol(""), Dn = Symbol("");
class hs {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Hl(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ie, n = Qe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ie, Ie = this, Qe = !0, Ze = 1 << ++Pt, Pt <= $n ? Dl(this) : Ss(this), this.fn();
    } finally {
      Pt <= $n && Kl(this), Ze = 1 << --Pt, Ie = this.parent, Qe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ie === this ? this.deferStop = !0 : this.active && (Ss(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ss(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Qe = !0;
const Or = [];
function It() {
  Or.push(Qe), Qe = !1;
}
function Ft() {
  const e = Or.pop();
  Qe = e === void 0 ? !0 : e;
}
function xe(e, t, n) {
  if (Qe && Ie) {
    let s = Un.get(e);
    s || Un.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = ds()), Tr(r);
  }
}
function Tr(e, t) {
  let n = !1;
  Pt <= $n ? Er(e) || (e.n |= Ze, n = !Cr(e)) : n = !e.has(Ie), n && (e.add(Ie), Ie.deps.push(e));
}
function Ve(e, t, n, s, r, l) {
  const o = Un.get(e);
  if (!o)
    return;
  let i = [];
  if (t === "clear")
    i = [...o.values()];
  else if (n === "length" && S(e))
    o.forEach((u, a) => {
      (a === "length" || a >= s) && i.push(u);
    });
  else
    switch (n !== void 0 && i.push(o.get(n)), t) {
      case "add":
        S(e) ? as(n) && i.push(o.get("length")) : (i.push(o.get(ut)), yt(e) && i.push(o.get(Dn)));
        break;
      case "delete":
        S(e) || (i.push(o.get(ut)), yt(e) && i.push(o.get(Dn)));
        break;
      case "set":
        yt(e) && i.push(o.get(ut));
        break;
    }
  if (i.length === 1)
    i[0] && Kn(i[0]);
  else {
    const u = [];
    for (const a of i)
      a && u.push(...a);
    Kn(ds(u));
  }
}
function Kn(e, t) {
  const n = S(e) ? e : [...e];
  for (const s of n)
    s.computed && Ps(s);
  for (const s of n)
    s.computed || Ps(s);
}
function Ps(e, t) {
  (e !== Ie || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Vl = /* @__PURE__ */ is("__proto__,__v_isRef,__isVue"), Ar = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
), Wl = /* @__PURE__ */ ps(), ql = /* @__PURE__ */ ps(!1, !0), zl = /* @__PURE__ */ ps(!0), Ls = /* @__PURE__ */ Jl();
function Jl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = z(this);
      for (let l = 0, o = this.length; l < o; l++)
        xe(s, "get", l + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(z)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      It();
      const s = z(this)[t].apply(this, n);
      return Ft(), s;
    };
  }), e;
}
function ps(e = !1, t = !1) {
  return function(s, r, l) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && l === (e ? t ? fo : Nr : t ? Mr : Fr).get(s))
      return s;
    const o = S(s);
    if (!e && o && K(Ls, r))
      return Reflect.get(Ls, r, l);
    const i = Reflect.get(s, r, l);
    return (Bt(r) ? Ar.has(r) : Vl(r)) || (e || xe(s, "get", r), t) ? i : ue(i) ? o && as(r) ? i : i.value : re(i) ? e ? Sr(i) : vs(i) : i;
  };
}
const Ql = /* @__PURE__ */ kr(), Yl = /* @__PURE__ */ kr(!0);
function kr(e = !1) {
  return function(n, s, r, l) {
    let o = n[s];
    if (xt(o) && ue(o) && !ue(r))
      return !1;
    if (!e && (!pn(r) && !xt(r) && (o = z(o), r = z(r)), !S(n) && ue(o) && !ue(r)))
      return o.value = r, !0;
    const i = S(n) && as(s) ? Number(s) < n.length : K(n, s), u = Reflect.set(n, s, r, l);
    return n === z(l) && (i ? Ht(r, o) && Ve(n, "set", s, r) : Ve(n, "add", s, r)), u;
  };
}
function Xl(e, t) {
  const n = K(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ve(e, "delete", t, void 0), s;
}
function Zl(e, t) {
  const n = Reflect.has(e, t);
  return (!Bt(t) || !Ar.has(t)) && xe(e, "has", t), n;
}
function Gl(e) {
  return xe(e, "iterate", S(e) ? "length" : ut), Reflect.ownKeys(e);
}
const Ir = {
  get: Wl,
  set: Ql,
  deleteProperty: Xl,
  has: Zl,
  ownKeys: Gl
}, eo = {
  get: zl,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, to = /* @__PURE__ */ pe({}, Ir, {
  get: ql,
  set: Yl
}), gs = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function Gt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = z(e), l = z(t);
  n || (t !== l && xe(r, "get", t), xe(r, "get", l));
  const { has: o } = xn(r), i = s ? gs : n ? _s : Ut;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function en(e, t = !1) {
  const n = this.__v_raw, s = z(n), r = z(e);
  return t || (e !== r && xe(s, "has", e), xe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function tn(e, t = !1) {
  return e = e.__v_raw, !t && xe(z(e), "iterate", ut), Reflect.get(e, "size", e);
}
function Rs(e) {
  e = z(e);
  const t = z(this);
  return xn(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this;
}
function js(e, t) {
  t = z(t);
  const n = z(this), { has: s, get: r } = xn(n);
  let l = s.call(n, e);
  l || (e = z(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? Ht(t, o) && Ve(n, "set", e, t) : Ve(n, "add", e, t), this;
}
function Bs(e) {
  const t = z(this), { has: n, get: s } = xn(t);
  let r = n.call(t, e);
  r || (e = z(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && Ve(t, "delete", e, void 0), l;
}
function Hs() {
  const e = z(this), t = e.size !== 0, n = e.clear();
  return t && Ve(e, "clear", void 0, void 0), n;
}
function nn(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = z(o), u = t ? gs : e ? _s : Ut;
    return !e && xe(i, "iterate", ut), o.forEach((a, d) => s.call(r, u(a), u(d), l));
  };
}
function sn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = z(r), o = yt(l), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, a = r[e](...s), d = n ? gs : t ? _s : Ut;
    return !t && xe(l, "iterate", u ? Dn : ut), {
      next() {
        const { value: h, done: g } = a.next();
        return g ? { value: h, done: g } : {
          value: i ? [d(h[0]), d(h[1])] : d(h),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ze(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function no() {
  const e = {
    get(l) {
      return Gt(this, l);
    },
    get size() {
      return tn(this);
    },
    has: en,
    add: Rs,
    set: js,
    delete: Bs,
    clear: Hs,
    forEach: nn(!1, !1)
  }, t = {
    get(l) {
      return Gt(this, l, !1, !0);
    },
    get size() {
      return tn(this);
    },
    has: en,
    add: Rs,
    set: js,
    delete: Bs,
    clear: Hs,
    forEach: nn(!1, !0)
  }, n = {
    get(l) {
      return Gt(this, l, !0);
    },
    get size() {
      return tn(this, !0);
    },
    has(l) {
      return en.call(this, l, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: nn(!0, !1)
  }, s = {
    get(l) {
      return Gt(this, l, !0, !0);
    },
    get size() {
      return tn(this, !0);
    },
    has(l) {
      return en.call(this, l, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: nn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = sn(l, !1, !1), n[l] = sn(l, !0, !1), t[l] = sn(l, !1, !0), s[l] = sn(l, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [so, ro, lo, oo] = /* @__PURE__ */ no();
function ms(e, t) {
  const n = t ? e ? oo : lo : e ? ro : so;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(K(n, r) && r in s ? n : s, r, l);
}
const io = {
  get: /* @__PURE__ */ ms(!1, !1)
}, co = {
  get: /* @__PURE__ */ ms(!1, !0)
}, uo = {
  get: /* @__PURE__ */ ms(!0, !1)
}, Fr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap();
function ao(e) {
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
function ho(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ao(Pl(e));
}
function vs(e) {
  return xt(e) ? e : ys(e, !1, Ir, io, Fr);
}
function po(e) {
  return ys(e, !1, to, co, Mr);
}
function Sr(e) {
  return ys(e, !0, eo, uo, Nr);
}
function ys(e, t, n, s, r) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = ho(e);
  if (o === 0)
    return e;
  const i = new Proxy(e, o === 2 ? s : n);
  return r.set(e, i), i;
}
function _t(e) {
  return xt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
function pn(e) {
  return !!(e && e.__v_isShallow);
}
function Pr(e) {
  return _t(e) || xt(e);
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Lr(e) {
  return dn(e, "__v_skip", !0), e;
}
const Ut = (e) => re(e) ? vs(e) : e, _s = (e) => re(e) ? Sr(e) : e;
function Rr(e) {
  Qe && Ie && (e = z(e), Tr(e.dep || (e.dep = ds())));
}
function jr(e, t) {
  e = z(e), e.dep && Kn(e.dep);
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function se(e) {
  return Br(e, !1);
}
function go(e) {
  return Br(e, !0);
}
function Br(e, t) {
  return ue(e) ? e : new mo(e, t);
}
class mo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : z(t), this._value = n ? t : Ut(t);
  }
  get value() {
    return Rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || pn(t) || xt(t);
    t = n ? t : z(t), Ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ut(t), jr(this));
  }
}
function J(e) {
  return ue(e) ? e.value : e;
}
const vo = {
  get: (e, t, n) => J(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Hr(e) {
  return _t(e) ? e : new Proxy(e, vo);
}
class yo {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Vn(e, t, n) {
  const s = e[t];
  return ue(s) ? s : new yo(e, t, n);
}
var Ur;
class _o {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ur] = !1, this._dirty = !0, this.effect = new hs(t, () => {
      this._dirty || (this._dirty = !0, jr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = z(this);
    return Rr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ur = "__v_isReadonly";
function bo(e, t, n = !1) {
  let s, r;
  const l = $(e);
  return l ? (s = e, r = Se) : (s = e.get, r = e.set), new _o(s, r, l || !r, n);
}
function Ye(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (l) {
    Cn(l, t, n);
  }
  return r;
}
function Oe(e, t, n, s) {
  if ($(e)) {
    const l = Ye(e, t, n, s);
    return l && _r(l) && l.catch((o) => {
      Cn(o, t, n);
    }), l;
  }
  const r = [];
  for (let l = 0; l < e.length; l++)
    r.push(Oe(e[l], t, n, s));
  return r;
}
function Cn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const o = t.proxy, i = n;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, o, i) === !1)
            return;
      }
      l = l.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ye(u, null, 10, [e, o, i]);
      return;
    }
  }
  wo(e, n, r, s);
}
function wo(e, t, n, s = !0) {
  console.error(e);
}
let $t = !1, Wn = !1;
const he = [];
let Ue = 0;
const bt = [];
let $e = null, lt = 0;
const $r = /* @__PURE__ */ Promise.resolve();
let bs = null;
function Dt(e) {
  const t = bs || $r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xo(e) {
  let t = Ue + 1, n = he.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Kt(he[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function ws(e) {
  (!he.length || !he.includes(e, $t && e.allowRecurse ? Ue + 1 : Ue)) && (e.id == null ? he.push(e) : he.splice(xo(e.id), 0, e), Dr());
}
function Dr() {
  !$t && !Wn && (Wn = !0, bs = $r.then(Vr));
}
function Co(e) {
  const t = he.indexOf(e);
  t > Ue && he.splice(t, 1);
}
function Eo(e) {
  S(e) ? bt.push(...e) : (!$e || !$e.includes(e, e.allowRecurse ? lt + 1 : lt)) && bt.push(e), Dr();
}
function Us(e, t = $t ? Ue + 1 : 0) {
  for (; t < he.length; t++) {
    const n = he[t];
    n && n.pre && (he.splice(t, 1), t--, n());
  }
}
function Kr(e) {
  if (bt.length) {
    const t = [...new Set(bt)];
    if (bt.length = 0, $e) {
      $e.push(...t);
      return;
    }
    for ($e = t, $e.sort((n, s) => Kt(n) - Kt(s)), lt = 0; lt < $e.length; lt++)
      $e[lt]();
    $e = null, lt = 0;
  }
}
const Kt = (e) => e.id == null ? 1 / 0 : e.id, Oo = (e, t) => {
  const n = Kt(e) - Kt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Vr(e) {
  Wn = !1, $t = !0, he.sort(Oo);
  const t = Se;
  try {
    for (Ue = 0; Ue < he.length; Ue++) {
      const n = he[Ue];
      n && n.active !== !1 && Ye(n, null, 14);
    }
  } finally {
    Ue = 0, he.length = 0, Kr(), $t = !1, bs = null, (he.length || bt.length) && Vr();
  }
}
function To(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || G;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: h, trim: g } = s[d] || G;
    g && (r = n.map((_) => _.trim())), h && (r = n.map(hn));
  }
  let i, u = s[i = Pn(t)] || s[i = Pn(wt(t))];
  !u && l && (u = s[i = Pn(kt(t))]), u && Oe(u, e, 6, r);
  const a = s[i + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Oe(a, e, 6, r);
  }
}
function Wr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let o = {}, i = !1;
  if (!$(e)) {
    const u = (a) => {
      const d = Wr(a, t, !0);
      d && (i = !0, pe(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !l && !i ? (re(e) && s.set(e, null), null) : (S(l) ? l.forEach((u) => o[u] = null) : pe(o, l), re(e) && s.set(e, o), o);
}
function En(e, t) {
  return !e || !bn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, kt(t)) || K(e, t));
}
let Me = null, qr = null;
function gn(e) {
  const t = Me;
  return Me = e, qr = e && e.type.__scopeId || null, t;
}
function Ao(e, t = Me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Xs(-1);
    const l = gn(t), o = e(...r);
    return gn(l), s._d && Xs(1), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ln(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: l, propsOptions: [o], slots: i, attrs: u, emit: a, render: d, renderCache: h, data: g, setupState: _, ctx: C, inheritAttrs: A } = e;
  let k, M;
  const j = gn(e);
  try {
    if (n.shapeFlag & 4) {
      const B = r || s;
      k = He(d.call(B, B, h, l, _, g, C)), M = u;
    } else {
      const B = t;
      k = He(B.length > 1 ? B(l, { attrs: u, slots: i, emit: a }) : B(l, null)), M = t.props ? u : ko(u);
    }
  } catch (B) {
    jt.length = 0, Cn(B, e, 1), k = Ke(Pe);
  }
  let U = k;
  if (M && A !== !1) {
    const B = Object.keys(M), { shapeFlag: D } = U;
    B.length && D & 7 && (o && B.some(us) && (M = Io(M, o)), U = Ge(U, M));
  }
  return n.dirs && (U = Ge(U), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (U.transition = n.transition), k = U, gn(j), k;
}
const ko = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || bn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Io = (e, t) => {
  const n = {};
  for (const s in e)
    (!us(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Fo(e, t, n) {
  const { props: s, children: r, component: l } = e, { props: o, children: i, patchFlag: u } = t, a = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? $s(s, o, a) : !!o;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const g = d[h];
        if (o[g] !== s[g] && !En(a, g))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? $s(s, o, a) : !0 : !!o;
  return !1;
}
function $s(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    if (t[l] !== e[l] && !En(n, l))
      return !0;
  }
  return !1;
}
function Mo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const No = (e) => e.__isSuspense;
function So(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : Eo(e);
}
function Po(e, t) {
  if (ae) {
    let n = ae.provides;
    const s = ae.parent && ae.parent.provides;
    s === n && (n = ae.provides = Object.create(s)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const s = ae || Me;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(s.proxy) : t;
  }
}
function Vt(e, t) {
  return On(e, null, t);
}
function Lo(e, t) {
  return On(e, null, { flush: "post" });
}
const Ds = {};
function Xe(e, t, n) {
  return On(e, t, n);
}
function On(e, t, { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = G) {
  const i = ae;
  let u, a = !1, d = !1;
  if (ue(e) ? (u = () => e.value, a = pn(e)) : _t(e) ? (u = () => e, s = !0) : S(e) ? (d = !0, a = e.some((M) => _t(M) || pn(M)), u = () => e.map((M) => {
    if (ue(M))
      return M.value;
    if (_t(M))
      return ct(M);
    if ($(M))
      return Ye(M, i, 2);
  })) : $(e) ? t ? u = () => Ye(e, i, 2) : u = () => {
    if (!(i && i.isUnmounted))
      return h && h(), Oe(e, i, 3, [g]);
  } : u = Se, t && s) {
    const M = u;
    u = () => ct(M());
  }
  let h, g = (M) => {
    h = k.onStop = () => {
      Ye(M, i, 4);
    };
  };
  if (zt)
    return g = Se, t ? n && Oe(t, i, 3, [
      u(),
      d ? [] : void 0,
      g
    ]) : u(), Se;
  let _ = d ? [] : Ds;
  const C = () => {
    if (!!k.active)
      if (t) {
        const M = k.run();
        (s || a || (d ? M.some((j, U) => Ht(j, _[U])) : Ht(M, _))) && (h && h(), Oe(t, i, 3, [
          M,
          _ === Ds ? void 0 : _,
          g
        ]), _ = M);
      } else
        k.run();
  };
  C.allowRecurse = !!t;
  let A;
  r === "sync" ? A = C : r === "post" ? A = () => ye(C, i && i.suspense) : (C.pre = !0, i && (C.id = i.uid), A = () => ws(C));
  const k = new hs(u, A);
  return t ? n ? C() : _ = k.run() : r === "post" ? ye(k.run.bind(k), i && i.suspense) : k.run(), () => {
    k.stop(), i && i.scope && fs(i.scope.effects, k);
  };
}
function Ro(e, t, n) {
  const s = this.proxy, r = ce(e) ? e.includes(".") ? zr(s, e) : () => s[e] : e.bind(s, s);
  let l;
  $(t) ? l = t : (l = t.handler, n = t);
  const o = ae;
  Ct(this);
  const i = On(r, l.bind(s), n);
  return o ? Ct(o) : ft(), i;
}
function zr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ct(e, t) {
  if (!re(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ue(e))
    ct(e.value, t);
  else if (S(e))
    for (let n = 0; n < e.length; n++)
      ct(e[n], t);
  else if (At(e) || yt(e))
    e.forEach((n) => {
      ct(n, t);
    });
  else if (wr(e))
    for (const n in e)
      ct(e[n], t);
  return e;
}
function jo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qt(() => {
    e.isMounted = !0;
  }), Xr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ee = [Function, Array], Bo = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ee,
    onEnter: Ee,
    onAfterEnter: Ee,
    onEnterCancelled: Ee,
    onBeforeLeave: Ee,
    onLeave: Ee,
    onAfterLeave: Ee,
    onLeaveCancelled: Ee,
    onBeforeAppear: Ee,
    onAppear: Ee,
    onAfterAppear: Ee,
    onAppearCancelled: Ee
  },
  setup(e, { slots: t }) {
    const n = il(), s = jo();
    let r;
    return () => {
      const l = t.default && Qr(t.default(), !0);
      if (!l || !l.length)
        return;
      let o = l[0];
      if (l.length > 1) {
        for (const A of l)
          if (A.type !== Pe) {
            o = A;
            break;
          }
      }
      const i = z(e), { mode: u } = i;
      if (s.isLeaving)
        return jn(o);
      const a = Ks(o);
      if (!a)
        return jn(o);
      const d = qn(a, i, s, n);
      zn(a, d);
      const h = n.subTree, g = h && Ks(h);
      let _ = !1;
      const { getTransitionKey: C } = a.type;
      if (C) {
        const A = C();
        r === void 0 ? r = A : A !== r && (r = A, _ = !0);
      }
      if (g && g.type !== Pe && (!ot(a, g) || _)) {
        const A = qn(g, i, s, n);
        if (zn(g, A), u === "out-in")
          return s.isLeaving = !0, A.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, jn(o);
        u === "in-out" && a.type !== Pe && (A.delayLeave = (k, M, j) => {
          const U = Jr(s, g);
          U[String(g.key)] = g, k._leaveCb = () => {
            M(), k._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = j;
        });
      }
      return o;
    };
  }
}, Ho = Bo;
function Jr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function qn(e, t, n, s) {
  const { appear: r, mode: l, persisted: o = !1, onBeforeEnter: i, onEnter: u, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: h, onLeave: g, onAfterLeave: _, onLeaveCancelled: C, onBeforeAppear: A, onAppear: k, onAfterAppear: M, onAppearCancelled: j } = t, U = String(e.key), B = Jr(n, e), D = (O, N) => {
    O && Oe(O, s, 9, N);
  }, q = (O, N) => {
    const H = N[1];
    D(O, N), S(O) ? O.every((Q) => Q.length <= 1) && H() : O.length <= 1 && H();
  }, le = {
    mode: l,
    persisted: o,
    beforeEnter(O) {
      let N = i;
      if (!n.isMounted)
        if (r)
          N = A || i;
        else
          return;
      O._leaveCb && O._leaveCb(!0);
      const H = B[U];
      H && ot(e, H) && H.el._leaveCb && H.el._leaveCb(), D(N, [O]);
    },
    enter(O) {
      let N = u, H = a, Q = d;
      if (!n.isMounted)
        if (r)
          N = k || u, H = M || a, Q = j || d;
        else
          return;
      let _e = !1;
      const Te = O._enterCb = (ht) => {
        _e || (_e = !0, ht ? D(Q, [O]) : D(H, [O]), le.delayedLeave && le.delayedLeave(), O._enterCb = void 0);
      };
      N ? q(N, [O, Te]) : Te();
    },
    leave(O, N) {
      const H = String(e.key);
      if (O._enterCb && O._enterCb(!0), n.isUnmounting)
        return N();
      D(h, [O]);
      let Q = !1;
      const _e = O._leaveCb = (Te) => {
        Q || (Q = !0, N(), Te ? D(C, [O]) : D(_, [O]), O._leaveCb = void 0, B[H] === e && delete B[H]);
      };
      B[H] = e, g ? q(g, [O, _e]) : _e();
    },
    clone(O) {
      return qn(O, t, n, s);
    }
  };
  return le;
}
function jn(e) {
  if (Tn(e))
    return e = Ge(e), e.children = null, e;
}
function Ks(e) {
  return Tn(e) ? e.children ? e.children[0] : void 0 : e;
}
function zn(e, t) {
  e.shapeFlag & 6 && e.component ? zn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qr(e, t = !1, n) {
  let s = [], r = 0;
  for (let l = 0; l < e.length; l++) {
    let o = e[l];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
    o.type === fe ? (o.patchFlag & 128 && r++, s = s.concat(Qr(o.children, t, i))) : (t || o.type !== Pe) && s.push(i != null ? Ge(o, { key: i }) : o);
  }
  if (r > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
const un = (e) => !!e.type.__asyncLoader, Tn = (e) => e.type.__isKeepAlive;
function Uo(e, t) {
  Yr(e, "a", t);
}
function $o(e, t) {
  Yr(e, "da", t);
}
function Yr(e, t, n = ae) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (An(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Tn(r.parent.vnode) && Do(s, t, n, r), r = r.parent;
  }
}
function Do(e, t, n, s) {
  const r = An(t, e, s, !0);
  kn(() => {
    fs(s[t], r);
  }, n);
}
function An(e, t, n = ae, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      It(), Ct(n);
      const i = Oe(t, n, e, o);
      return ft(), Ft(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const We = (e) => (t, n = ae) => (!zt || e === "sp") && An(e, t, n), Ko = We("bm"), Qt = We("m"), Vo = We("bu"), Wo = We("u"), Xr = We("bum"), kn = We("um"), qo = We("sp"), zo = We("rtg"), Jo = We("rtc");
function Qo(e, t = ae) {
  An("ec", e, t);
}
function mn(e, t) {
  const n = Me;
  if (n === null)
    return e;
  const s = Fn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, u, a = G] = t[l];
    $(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ct(i), r.push({
      dir: o,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: u,
      modifiers: a
    });
  }
  return e;
}
function nt(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    l && (i.oldValue = l[o].value);
    let u = i.dir[s];
    u && (It(), Oe(u, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Ft());
  }
}
const Yo = Symbol();
function fn(e, t, n, s) {
  let r;
  const l = n && n[s];
  if (S(e) || ce(e)) {
    r = new Array(e.length);
    for (let o = 0, i = e.length; o < i; o++)
      r[o] = t(e[o], o, void 0, l && l[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, l && l[o]);
  } else if (re(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, i) => t(o, i, void 0, l && l[i]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let i = 0, u = o.length; i < u; i++) {
        const a = o[i];
        r[i] = t(e[a], a, i, l && l[i]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
const Jn = (e) => e ? cl(e) ? Fn(e) || e.proxy : Jn(e.parent) : null, vn = /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Jn(e.parent),
  $root: (e) => Jn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => xs(e),
  $forceUpdate: (e) => e.f || (e.f = () => ws(e.update)),
  $nextTick: (e) => e.n || (e.n = Dt.bind(e.proxy)),
  $watch: (e) => Ro.bind(e)
}), Xo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: l, accessCache: o, type: i, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
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
        if (s !== G && K(s, t))
          return o[t] = 1, s[t];
        if (r !== G && K(r, t))
          return o[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && K(a, t))
          return o[t] = 3, l[t];
        if (n !== G && K(n, t))
          return o[t] = 4, n[t];
        Qn && (o[t] = 0);
      }
    }
    const d = vn[t];
    let h, g;
    if (d)
      return t === "$attrs" && xe(e, "get", t), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== G && K(n, t))
      return o[t] = 4, n[t];
    if (g = u.config.globalProperties, K(g, t))
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return r !== G && K(r, t) ? (r[t] = n, !0) : s !== G && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l } }, o) {
    let i;
    return !!n[o] || e !== G && K(e, o) || t !== G && K(t, o) || (i = l[0]) && K(i, o) || K(s, o) || K(vn, o) || K(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Qn = !0;
function Zo(e) {
  const t = xs(e), n = e.proxy, s = e.ctx;
  Qn = !1, t.beforeCreate && Vs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: l,
    methods: o,
    watch: i,
    provide: u,
    inject: a,
    created: d,
    beforeMount: h,
    mounted: g,
    beforeUpdate: _,
    updated: C,
    activated: A,
    deactivated: k,
    beforeDestroy: M,
    beforeUnmount: j,
    destroyed: U,
    unmounted: B,
    render: D,
    renderTracked: q,
    renderTriggered: le,
    errorCaptured: O,
    serverPrefetch: N,
    expose: H,
    inheritAttrs: Q,
    components: _e,
    directives: Te,
    filters: ht
  } = t;
  if (a && Go(a, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const te in o) {
      const Y = o[te];
      $(Y) && (s[te] = Y.bind(n));
    }
  if (r) {
    const te = r.call(n, n);
    re(te) && (e.data = vs(te));
  }
  if (Qn = !0, l)
    for (const te in l) {
      const Y = l[te], Ce = $(Y) ? Y.bind(n, n) : $(Y.get) ? Y.get.bind(n, n) : Se, L = !$(Y) && $(Y.set) ? Y.set.bind(n) : Se, P = Fe({
        get: Ce,
        set: L
      });
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => P.value,
        set: (W) => P.value = W
      });
    }
  if (i)
    for (const te in i)
      Zr(i[te], s, n, te);
  if (u) {
    const te = $(u) ? u.call(n) : u;
    Reflect.ownKeys(te).forEach((Y) => {
      Po(Y, te[Y]);
    });
  }
  d && Vs(d, e, "c");
  function de(te, Y) {
    S(Y) ? Y.forEach((Ce) => te(Ce.bind(n))) : Y && te(Y.bind(n));
  }
  if (de(Ko, h), de(Qt, g), de(Vo, _), de(Wo, C), de(Uo, A), de($o, k), de(Qo, O), de(Jo, q), de(zo, le), de(Xr, j), de(kn, B), de(qo, N), S(H))
    if (H.length) {
      const te = e.exposed || (e.exposed = {});
      H.forEach((Y) => {
        Object.defineProperty(te, Y, {
          get: () => n[Y],
          set: (Ce) => n[Y] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  D && e.render === Se && (e.render = D), Q != null && (e.inheritAttrs = Q), _e && (e.components = _e), Te && (e.directives = Te);
}
function Go(e, t, n = Se, s = !1) {
  S(e) && (e = Yn(e));
  for (const r in e) {
    const l = e[r];
    let o;
    re(l) ? "default" in l ? o = Rn(l.from || r, l.default, !0) : o = Rn(l.from || r) : o = Rn(l), ue(o) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Vs(e, t, n) {
  Oe(S(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zr(e, t, n, s) {
  const r = s.includes(".") ? zr(n, s) : () => n[s];
  if (ce(e)) {
    const l = t[e];
    $(l) && Xe(r, l);
  } else if ($(e))
    Xe(r, e.bind(n));
  else if (re(e))
    if (S(e))
      e.forEach((l) => Zr(l, t, n, s));
    else {
      const l = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(l) && Xe(r, l, e);
    }
}
function xs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: l, config: { optionMergeStrategies: o } } = e.appContext, i = l.get(t);
  let u;
  return i ? u = i : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => yn(u, a, o, !0)), yn(u, t, o)), re(t) && l.set(t, u), u;
}
function yn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && yn(e, l, n, !0), r && r.forEach((o) => yn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = ei[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const ei = {
  data: Ws,
  props: rt,
  emits: rt,
  methods: rt,
  computed: rt,
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  components: rt,
  directives: rt,
  watch: ni,
  provide: Ws,
  inject: ti
};
function Ws(e, t) {
  return t ? e ? function() {
    return pe($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function ti(e, t) {
  return rt(Yn(e), Yn(t));
}
function Yn(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rt(e, t) {
  return e ? pe(pe(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ni(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = pe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = me(e[s], t[s]);
  return n;
}
function si(e, t, n, s = !1) {
  const r = {}, l = {};
  dn(l, In, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Gr(e, t, r, l);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : po(r) : e.type.props ? e.props = r : e.props = l, e.attrs = l;
}
function ri(e, t, n, s) {
  const { props: r, attrs: l, vnode: { patchFlag: o } } = e, i = z(r), [u] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let g = d[h];
        if (En(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (u)
          if (K(l, g))
            _ !== l[g] && (l[g] = _, a = !0);
          else {
            const C = wt(g);
            r[C] = Xn(u, i, C, _, e, !1);
          }
        else
          _ !== l[g] && (l[g] = _, a = !0);
      }
    }
  } else {
    Gr(e, t, r, l) && (a = !0);
    let d;
    for (const h in i)
      (!t || !K(t, h) && ((d = kt(h)) === h || !K(t, d))) && (u ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = Xn(u, i, h, void 0, e, !0)) : delete r[h]);
    if (l !== i)
      for (const h in l)
        (!t || !K(t, h) && !0) && (delete l[h], a = !0);
  }
  a && Ve(e, "set", "$attrs");
}
function Gr(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let u in t) {
      if (on(u))
        continue;
      const a = t[u];
      let d;
      r && K(r, d = wt(u)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : En(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, o = !0);
    }
  if (l) {
    const u = z(n), a = i || G;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
      n[h] = Xn(r, u, h, a[h], e, !K(a, h));
    }
  }
  return o;
}
function Xn(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = K(o, "default");
    if (i && s === void 0) {
      const u = o.default;
      if (o.type !== Function && $(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (Ct(r), s = a[n] = u.call(null, t), ft());
      } else
        s = u;
    }
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === kt(n)) && (s = !0));
  }
  return s;
}
function el(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let u = !1;
  if (!$(e)) {
    const d = (h) => {
      u = !0;
      const [g, _] = el(h, t, !0);
      pe(o, g), _ && i.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !u)
    return re(e) && s.set(e, vt), vt;
  if (S(l))
    for (let d = 0; d < l.length; d++) {
      const h = wt(l[d]);
      qs(h) && (o[h] = G);
    }
  else if (l)
    for (const d in l) {
      const h = wt(d);
      if (qs(h)) {
        const g = l[d], _ = o[h] = S(g) || $(g) ? { type: g } : g;
        if (_) {
          const C = Qs(Boolean, _.type), A = Qs(String, _.type);
          _[0] = C > -1, _[1] = A < 0 || C < A, (C > -1 || K(_, "default")) && i.push(h);
        }
      }
    }
  const a = [o, i];
  return re(e) && s.set(e, a), a;
}
function qs(e) {
  return e[0] !== "$";
}
function zs(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Js(e, t) {
  return zs(e) === zs(t);
}
function Qs(e, t) {
  return S(t) ? t.findIndex((n) => Js(n, e)) : $(t) && Js(t, e) ? 0 : -1;
}
const tl = (e) => e[0] === "_" || e === "$stable", Cs = (e) => S(e) ? e.map(He) : [He(e)], li = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ao((...r) => Cs(t(...r)), n);
  return s._c = !1, s;
}, nl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (tl(r))
      continue;
    const l = e[r];
    if ($(l))
      t[r] = li(r, l, s);
    else if (l != null) {
      const o = Cs(l);
      t[r] = () => o;
    }
  }
}, sl = (e, t) => {
  const n = Cs(t);
  e.slots.default = () => n;
}, oi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = z(t), dn(t, "_", n)) : nl(t, e.slots = {});
  } else
    e.slots = {}, t && sl(e, t);
  dn(e.slots, In, 1);
}, ii = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = G;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (pe(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, nl(t, r)), o = t;
  } else
    t && (sl(e, t), o = { default: 1 });
  if (l)
    for (const i in r)
      !tl(i) && !(i in o) && delete r[i];
};
function rl() {
  return {
    app: null,
    config: {
      isNativeTag: Ml,
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
let ci = 0;
function ui(e, t) {
  return function(s, r = null) {
    $(s) || (s = Object.assign({}, s)), r != null && !re(r) && (r = null);
    const l = rl(), o = /* @__PURE__ */ new Set();
    let i = !1;
    const u = l.app = {
      _uid: ci++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: Ai,
      get config() {
        return l.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && $(a.install) ? (o.add(a), a.install(u, ...d)) : $(a) && (o.add(a), a(u, ...d))), u;
      },
      mixin(a) {
        return l.mixins.includes(a) || l.mixins.push(a), u;
      },
      component(a, d) {
        return d ? (l.components[a] = d, u) : l.components[a];
      },
      directive(a, d) {
        return d ? (l.directives[a] = d, u) : l.directives[a];
      },
      mount(a, d, h) {
        if (!i) {
          const g = Ke(s, r);
          return g.appContext = l, d && t ? t(g, a) : e(g, a, h), i = !0, u._container = a, a.__vue_app__ = u, Fn(g.component) || g.component.proxy;
        }
      },
      unmount() {
        i && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, d) {
        return l.provides[a] = d, u;
      }
    };
    return u;
  };
}
function Zn(e, t, n, s, r = !1) {
  if (S(e)) {
    e.forEach((g, _) => Zn(g, t && (S(t) ? t[_] : t), n, s, r));
    return;
  }
  if (un(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Fn(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: u } = e, a = t && t.r, d = i.refs === G ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== u && (ce(a) ? (d[a] = null, K(h, a) && (h[a] = null)) : ue(a) && (a.value = null)), $(u))
    Ye(u, i, 12, [o, d]);
  else {
    const g = ce(u), _ = ue(u);
    if (g || _) {
      const C = () => {
        if (e.f) {
          const A = g ? d[u] : u.value;
          r ? S(A) && fs(A, l) : S(A) ? A.includes(l) || A.push(l) : g ? (d[u] = [l], K(h, u) && (h[u] = d[u])) : (u.value = [l], e.k && (d[e.k] = u.value));
        } else
          g ? (d[u] = o, K(h, u) && (h[u] = o)) : _ && (u.value = o, e.k && (d[e.k] = o));
      };
      o ? (C.id = -1, ye(C, n)) : C();
    }
  }
}
const ye = So;
function fi(e) {
  return ai(e);
}
function ai(e, t) {
  const n = jl();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: l, createElement: o, createText: i, createComment: u, setText: a, setElementText: d, parentNode: h, nextSibling: g, setScopeId: _ = Se, cloneNode: C, insertStaticContent: A } = e, k = (c, f, p, v = null, m = null, w = null, E = !1, b = null, x = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !ot(c, f) && (v = tt(c), ge(c, m, w, !0), c = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: I, shapeFlag: T } = f;
    switch (y) {
      case Os:
        M(c, f, p, v);
        break;
      case Pe:
        j(c, f, p, v);
        break;
      case Bn:
        c == null && U(f, p, v, E);
        break;
      case fe:
        Te(c, f, p, v, m, w, E, b, x);
        break;
      default:
        T & 1 ? q(c, f, p, v, m, w, E, b, x) : T & 6 ? ht(c, f, p, v, m, w, E, b, x) : (T & 64 || T & 128) && y.process(c, f, p, v, m, w, E, b, x, pt);
    }
    I != null && m && Zn(I, c && c.ref, w, f || c, !f);
  }, M = (c, f, p, v) => {
    if (c == null)
      s(f.el = i(f.children), p, v);
    else {
      const m = f.el = c.el;
      f.children !== c.children && a(m, f.children);
    }
  }, j = (c, f, p, v) => {
    c == null ? s(f.el = u(f.children || ""), p, v) : f.el = c.el;
  }, U = (c, f, p, v) => {
    [c.el, c.anchor] = A(c.children, f, p, v, c.el, c.anchor);
  }, B = ({ el: c, anchor: f }, p, v) => {
    let m;
    for (; c && c !== f; )
      m = g(c), s(c, p, v), c = m;
    s(f, p, v);
  }, D = ({ el: c, anchor: f }) => {
    let p;
    for (; c && c !== f; )
      p = g(c), r(c), c = p;
    r(f);
  }, q = (c, f, p, v, m, w, E, b, x) => {
    E = E || f.type === "svg", c == null ? le(f, p, v, m, w, E, b, x) : H(c, f, m, w, E, b, x);
  }, le = (c, f, p, v, m, w, E, b) => {
    let x, y;
    const { type: I, props: T, shapeFlag: F, transition: R, patchFlag: V, dirs: X } = c;
    if (c.el && C !== void 0 && V === -1)
      x = c.el = C(c.el);
    else {
      if (x = c.el = o(c.type, w, T && T.is, T), F & 8 ? d(x, c.children) : F & 16 && N(c.children, x, null, v, m, w && I !== "foreignObject", E, b), X && nt(c, null, v, "created"), T) {
        for (const ne in T)
          ne !== "value" && !on(ne) && l(x, ne, null, T[ne], w, c.children, v, m, ve);
        "value" in T && l(x, "value", null, T.value), (y = T.onVnodeBeforeMount) && je(y, v, c);
      }
      O(x, c, c.scopeId, E, v);
    }
    X && nt(c, null, v, "beforeMount");
    const Z = (!m || m && !m.pendingBranch) && R && !R.persisted;
    Z && R.beforeEnter(x), s(x, f, p), ((y = T && T.onVnodeMounted) || Z || X) && ye(() => {
      y && je(y, v, c), Z && R.enter(x), X && nt(c, null, v, "mounted");
    }, m);
  }, O = (c, f, p, v, m) => {
    if (p && _(c, p), v)
      for (let w = 0; w < v.length; w++)
        _(c, v[w]);
    if (m) {
      let w = m.subTree;
      if (f === w) {
        const E = m.vnode;
        O(c, E, E.scopeId, E.slotScopeIds, m.parent);
      }
    }
  }, N = (c, f, p, v, m, w, E, b, x = 0) => {
    for (let y = x; y < c.length; y++) {
      const I = c[y] = b ? Je(c[y]) : He(c[y]);
      k(null, I, f, p, v, m, w, E, b);
    }
  }, H = (c, f, p, v, m, w, E) => {
    const b = f.el = c.el;
    let { patchFlag: x, dynamicChildren: y, dirs: I } = f;
    x |= c.patchFlag & 16;
    const T = c.props || G, F = f.props || G;
    let R;
    p && st(p, !1), (R = F.onVnodeBeforeUpdate) && je(R, p, f, c), I && nt(f, c, p, "beforeUpdate"), p && st(p, !0);
    const V = m && f.type !== "foreignObject";
    if (y ? Q(c.dynamicChildren, y, b, p, v, V, w) : E || Ce(c, f, b, null, p, v, V, w, !1), x > 0) {
      if (x & 16)
        _e(b, f, T, F, p, v, m);
      else if (x & 2 && T.class !== F.class && l(b, "class", null, F.class, m), x & 4 && l(b, "style", T.style, F.style, m), x & 8) {
        const X = f.dynamicProps;
        for (let Z = 0; Z < X.length; Z++) {
          const ne = X[Z], Ae = T[ne], gt = F[ne];
          (gt !== Ae || ne === "value") && l(b, ne, Ae, gt, m, c.children, p, v, ve);
        }
      }
      x & 1 && c.children !== f.children && d(b, f.children);
    } else
      !E && y == null && _e(b, f, T, F, p, v, m);
    ((R = F.onVnodeUpdated) || I) && ye(() => {
      R && je(R, p, f, c), I && nt(f, c, p, "updated");
    }, v);
  }, Q = (c, f, p, v, m, w, E) => {
    for (let b = 0; b < f.length; b++) {
      const x = c[b], y = f[b], I = x.el && (x.type === fe || !ot(x, y) || x.shapeFlag & 70) ? h(x.el) : p;
      k(x, y, I, null, v, m, w, E, !0);
    }
  }, _e = (c, f, p, v, m, w, E) => {
    if (p !== v) {
      for (const b in v) {
        if (on(b))
          continue;
        const x = v[b], y = p[b];
        x !== y && b !== "value" && l(c, b, y, x, E, f.children, m, w, ve);
      }
      if (p !== G)
        for (const b in p)
          !on(b) && !(b in v) && l(c, b, p[b], null, E, f.children, m, w, ve);
      "value" in v && l(c, "value", p.value, v.value);
    }
  }, Te = (c, f, p, v, m, w, E, b, x) => {
    const y = f.el = c ? c.el : i(""), I = f.anchor = c ? c.anchor : i("");
    let { patchFlag: T, dynamicChildren: F, slotScopeIds: R } = f;
    R && (b = b ? b.concat(R) : R), c == null ? (s(y, p, v), s(I, p, v), N(f.children, p, I, m, w, E, b, x)) : T > 0 && T & 64 && F && c.dynamicChildren ? (Q(c.dynamicChildren, F, p, m, w, E, b), (f.key != null || m && f === m.subTree) && Es(c, f, !0)) : Ce(c, f, p, I, m, w, E, b, x);
  }, ht = (c, f, p, v, m, w, E, b, x) => {
    f.slotScopeIds = b, c == null ? f.shapeFlag & 512 ? m.ctx.activate(f, p, v, E, x) : Mt(f, p, v, m, w, E, x) : de(c, f, x);
  }, Mt = (c, f, p, v, m, w, E) => {
    const b = c.component = wi(c, v, m);
    if (Tn(c) && (b.ctx.renderer = pt), xi(b), b.asyncDep) {
      if (m && m.registerDep(b, te), !c.el) {
        const x = b.subTree = Ke(Pe);
        j(null, x, f, p);
      }
      return;
    }
    te(b, c, f, p, m, w, E);
  }, de = (c, f, p) => {
    const v = f.component = c.component;
    if (Fo(c, f, p))
      if (v.asyncDep && !v.asyncResolved) {
        Y(v, f, p);
        return;
      } else
        v.next = f, Co(v.update), v.update();
    else
      f.el = c.el, v.vnode = f;
  }, te = (c, f, p, v, m, w, E) => {
    const b = () => {
      if (c.isMounted) {
        let { next: I, bu: T, u: F, parent: R, vnode: V } = c, X = I, Z;
        st(c, !1), I ? (I.el = V.el, Y(c, I, E)) : I = V, T && cn(T), (Z = I.props && I.props.onVnodeBeforeUpdate) && je(Z, R, I, V), st(c, !0);
        const ne = Ln(c), Ae = c.subTree;
        c.subTree = ne, k(
          Ae,
          ne,
          h(Ae.el),
          tt(Ae),
          c,
          m,
          w
        ), I.el = ne.el, X === null && Mo(c, ne.el), F && ye(F, m), (Z = I.props && I.props.onVnodeUpdated) && ye(() => je(Z, R, I, V), m);
      } else {
        let I;
        const { el: T, props: F } = f, { bm: R, m: V, parent: X } = c, Z = un(f);
        if (st(c, !1), R && cn(R), !Z && (I = F && F.onVnodeBeforeMount) && je(I, X, f), st(c, !0), T && Sn) {
          const ne = () => {
            c.subTree = Ln(c), Sn(T, c.subTree, c, m, null);
          };
          Z ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && ne()
          ) : ne();
        } else {
          const ne = c.subTree = Ln(c);
          k(null, ne, p, v, c, m, w), f.el = ne.el;
        }
        if (V && ye(V, m), !Z && (I = F && F.onVnodeMounted)) {
          const ne = f;
          ye(() => je(I, X, ne), m);
        }
        (f.shapeFlag & 256 || X && un(X.vnode) && X.vnode.shapeFlag & 256) && c.a && ye(c.a, m), c.isMounted = !0, f = p = v = null;
      }
    }, x = c.effect = new hs(
      b,
      () => ws(y),
      c.scope
    ), y = c.update = () => x.run();
    y.id = c.uid, st(c, !0), y();
  }, Y = (c, f, p) => {
    f.component = c;
    const v = c.vnode.props;
    c.vnode = f, c.next = null, ri(c, f.props, v, p), ii(c, f.children, p), It(), Us(), Ft();
  }, Ce = (c, f, p, v, m, w, E, b, x = !1) => {
    const y = c && c.children, I = c ? c.shapeFlag : 0, T = f.children, { patchFlag: F, shapeFlag: R } = f;
    if (F > 0) {
      if (F & 128) {
        P(y, T, p, v, m, w, E, b, x);
        return;
      } else if (F & 256) {
        L(y, T, p, v, m, w, E, b, x);
        return;
      }
    }
    R & 8 ? (I & 16 && ve(y, m, w), T !== y && d(p, T)) : I & 16 ? R & 16 ? P(y, T, p, v, m, w, E, b, x) : ve(y, m, w, !0) : (I & 8 && d(p, ""), R & 16 && N(T, p, v, m, w, E, b, x));
  }, L = (c, f, p, v, m, w, E, b, x) => {
    c = c || vt, f = f || vt;
    const y = c.length, I = f.length, T = Math.min(y, I);
    let F;
    for (F = 0; F < T; F++) {
      const R = f[F] = x ? Je(f[F]) : He(f[F]);
      k(c[F], R, p, null, m, w, E, b, x);
    }
    y > I ? ve(c, m, w, !0, !1, T) : N(f, p, v, m, w, E, b, x, T);
  }, P = (c, f, p, v, m, w, E, b, x) => {
    let y = 0;
    const I = f.length;
    let T = c.length - 1, F = I - 1;
    for (; y <= T && y <= F; ) {
      const R = c[y], V = f[y] = x ? Je(f[y]) : He(f[y]);
      if (ot(R, V))
        k(R, V, p, null, m, w, E, b, x);
      else
        break;
      y++;
    }
    for (; y <= T && y <= F; ) {
      const R = c[T], V = f[F] = x ? Je(f[F]) : He(f[F]);
      if (ot(R, V))
        k(R, V, p, null, m, w, E, b, x);
      else
        break;
      T--, F--;
    }
    if (y > T) {
      if (y <= F) {
        const R = F + 1, V = R < I ? f[R].el : v;
        for (; y <= F; )
          k(null, f[y] = x ? Je(f[y]) : He(f[y]), p, V, m, w, E, b, x), y++;
      }
    } else if (y > F)
      for (; y <= T; )
        ge(c[y], m, w, !0), y++;
    else {
      const R = y, V = y, X = /* @__PURE__ */ new Map();
      for (y = V; y <= F; y++) {
        const be = f[y] = x ? Je(f[y]) : He(f[y]);
        be.key != null && X.set(be.key, y);
      }
      let Z, ne = 0;
      const Ae = F - V + 1;
      let gt = !1, ks = 0;
      const Nt = new Array(Ae);
      for (y = 0; y < Ae; y++)
        Nt[y] = 0;
      for (y = R; y <= T; y++) {
        const be = c[y];
        if (ne >= Ae) {
          ge(be, m, w, !0);
          continue;
        }
        let Re;
        if (be.key != null)
          Re = X.get(be.key);
        else
          for (Z = V; Z <= F; Z++)
            if (Nt[Z - V] === 0 && ot(be, f[Z])) {
              Re = Z;
              break;
            }
        Re === void 0 ? ge(be, m, w, !0) : (Nt[Re - V] = y + 1, Re >= ks ? ks = Re : gt = !0, k(be, f[Re], p, null, m, w, E, b, x), ne++);
      }
      const Is = gt ? di(Nt) : vt;
      for (Z = Is.length - 1, y = Ae - 1; y >= 0; y--) {
        const be = V + y, Re = f[be], Fs = be + 1 < I ? f[be + 1].el : v;
        Nt[y] === 0 ? k(null, Re, p, Fs, m, w, E, b, x) : gt && (Z < 0 || y !== Is[Z] ? W(Re, p, Fs, 2) : Z--);
      }
    }
  }, W = (c, f, p, v, m = null) => {
    const { el: w, type: E, transition: b, children: x, shapeFlag: y } = c;
    if (y & 6) {
      W(c.component.subTree, f, p, v);
      return;
    }
    if (y & 128) {
      c.suspense.move(f, p, v);
      return;
    }
    if (y & 64) {
      E.move(c, f, p, pt);
      return;
    }
    if (E === fe) {
      s(w, f, p);
      for (let T = 0; T < x.length; T++)
        W(x[T], f, p, v);
      s(c.anchor, f, p);
      return;
    }
    if (E === Bn) {
      B(c, f, p);
      return;
    }
    if (v !== 2 && y & 1 && b)
      if (v === 0)
        b.beforeEnter(w), s(w, f, p), ye(() => b.enter(w), m);
      else {
        const { leave: T, delayLeave: F, afterLeave: R } = b, V = () => s(w, f, p), X = () => {
          T(w, () => {
            V(), R && R();
          });
        };
        F ? F(w, V, X) : X();
      }
    else
      s(w, f, p);
  }, ge = (c, f, p, v = !1, m = !1) => {
    const { type: w, props: E, ref: b, children: x, dynamicChildren: y, shapeFlag: I, patchFlag: T, dirs: F } = c;
    if (b != null && Zn(b, null, p, c, !0), I & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const R = I & 1 && F, V = !un(c);
    let X;
    if (V && (X = E && E.onVnodeBeforeUnmount) && je(X, f, c), I & 6)
      Mn(c.component, p, v);
    else {
      if (I & 128) {
        c.suspense.unmount(p, v);
        return;
      }
      R && nt(c, null, f, "beforeUnmount"), I & 64 ? c.type.remove(c, f, p, m, pt, v) : y && (w !== fe || T > 0 && T & 64) ? ve(y, f, p, !1, !0) : (w === fe && T & 384 || !m && I & 16) && ve(x, f, p), v && qe(c);
    }
    (V && (X = E && E.onVnodeUnmounted) || R) && ye(() => {
      X && je(X, f, c), R && nt(c, null, f, "unmounted");
    }, p);
  }, qe = (c) => {
    const { type: f, el: p, anchor: v, transition: m } = c;
    if (f === fe) {
      Le(p, v);
      return;
    }
    if (f === Bn) {
      D(c);
      return;
    }
    const w = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: E, delayLeave: b } = m, x = () => E(p, w);
      b ? b(c.el, w, x) : x();
    } else
      w();
  }, Le = (c, f) => {
    let p;
    for (; c !== f; )
      p = g(c), r(c), c = p;
    r(f);
  }, Mn = (c, f, p) => {
    const { bum: v, scope: m, update: w, subTree: E, um: b } = c;
    v && cn(v), m.stop(), w && (w.active = !1, ge(E, c, f, p)), b && ye(b, f), ye(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ve = (c, f, p, v = !1, m = !1, w = 0) => {
    for (let E = w; E < c.length; E++)
      ge(c[E], f, p, v, m);
  }, tt = (c) => c.shapeFlag & 6 ? tt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : g(c.anchor || c.el), Xt = (c, f, p) => {
    c == null ? f._vnode && ge(f._vnode, null, null, !0) : k(f._vnode || null, c, f, null, null, null, p), Us(), Kr(), f._vnode = c;
  }, pt = {
    p: k,
    um: ge,
    m: W,
    r: qe,
    mt: Mt,
    mc: N,
    pc: Ce,
    pbc: Q,
    n: tt,
    o: e
  };
  let Nn, Sn;
  return t && ([Nn, Sn] = t(pt)), {
    render: Xt,
    hydrate: Nn,
    createApp: ui(Xt, Nn)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Es(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (S(s) && S(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = Je(r[l]), i.el = o.el), n || Es(o, i));
    }
}
function di(e) {
  const t = e.slice(), n = [0];
  let s, r, l, o, i;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (l = 0, o = n.length - 1; l < o; )
        i = l + o >> 1, e[n[i]] < a ? l = i + 1 : o = i;
      a < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), n[l] = s);
    }
  }
  for (l = n.length, o = n[l - 1]; l-- > 0; )
    n[l] = o, o = t[o];
  return n;
}
const hi = (e) => e.__isTeleport, Rt = (e) => e && (e.disabled || e.disabled === ""), Ys = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gn = (e, t) => {
  const n = e && e.to;
  return ce(n) ? t ? t(n) : null : n;
}, pi = {
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, u, a) {
    const { mc: d, pc: h, pbc: g, o: { insert: _, querySelector: C, createText: A, createComment: k } } = a, M = Rt(t.props);
    let { shapeFlag: j, children: U, dynamicChildren: B } = t;
    if (e == null) {
      const D = t.el = A(""), q = t.anchor = A("");
      _(D, n, s), _(q, n, s);
      const le = t.target = Gn(t.props, C), O = t.targetAnchor = A("");
      le && (_(O, le), o = o || Ys(le));
      const N = (H, Q) => {
        j & 16 && d(U, H, Q, r, l, o, i, u);
      };
      M ? N(n, q) : le && N(le, O);
    } else {
      t.el = e.el;
      const D = t.anchor = e.anchor, q = t.target = e.target, le = t.targetAnchor = e.targetAnchor, O = Rt(e.props), N = O ? n : q, H = O ? D : le;
      if (o = o || Ys(q), B ? (g(e.dynamicChildren, B, N, r, l, o, i), Es(e, t, !0)) : u || h(e, t, N, H, r, l, o, i, !1), M)
        O || rn(t, n, D, a, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Q = t.target = Gn(t.props, C);
        Q && rn(t, Q, null, a, 0);
      } else
        O && rn(t, q, le, a, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: u, anchor: a, targetAnchor: d, target: h, props: g } = e;
    if (h && l(d), (o || !Rt(g)) && (l(a), i & 16))
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        r(C, t, n, !0, !!C.dynamicChildren);
      }
  },
  move: rn,
  hydrate: gi
};
function rn(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: a, props: d } = e, h = l === 2;
  if (h && s(o, t, n), (!h || Rt(d)) && u & 16)
    for (let g = 0; g < a.length; g++)
      r(a[g], t, n, 2);
  h && s(i, t, n);
}
function gi(e, t, n, s, r, l, { o: { nextSibling: o, parentNode: i, querySelector: u } }, a) {
  const d = t.target = Gn(t.props, u);
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Rt(t.props))
        t.anchor = a(o(e), t, i(e), n, s, r, l), t.targetAnchor = h;
      else {
        t.anchor = o(e);
        let g = h;
        for (; g; )
          if (g = o(g), g && g.nodeType === 8 && g.data === "teleport anchor") {
            t.targetAnchor = g, d._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        a(h, t, d, n, s, r, l);
      }
  }
  return t.anchor && o(t.anchor);
}
const es = pi, fe = Symbol(void 0), Os = Symbol(void 0), Pe = Symbol(void 0), Bn = Symbol(void 0), jt = [];
let Ne = null;
function ee(e = !1) {
  jt.push(Ne = e ? null : []);
}
function mi() {
  jt.pop(), Ne = jt[jt.length - 1] || null;
}
let Wt = 1;
function Xs(e) {
  Wt += e;
}
function ll(e) {
  return e.dynamicChildren = Wt > 0 ? Ne || vt : null, mi(), Wt > 0 && Ne && Ne.push(e), e;
}
function oe(e, t, n, s, r, l) {
  return ll(ie(e, t, n, s, r, l, !0));
}
function _n(e, t, n, s, r) {
  return ll(Ke(e, t, n, s, r, !0));
}
function vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key;
}
const In = "__vInternal", ol = ({ key: e }) => e != null ? e : null, an = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ce(e) || ue(e) || $(e) ? { i: Me, r: e, k: t, f: !!n } : e : null;
function ie(e, t = null, n = null, s = 0, r = null, l = e === fe ? 0 : 1, o = !1, i = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ol(t),
    ref: t && an(t),
    scopeId: qr,
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
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return i ? (As(u, n), l & 128 && e.normalize(u)) : n && (u.shapeFlag |= ce(n) ? 8 : 16), Wt > 0 && !o && Ne && (u.patchFlag > 0 || l & 6) && u.patchFlag !== 32 && Ne.push(u), u;
}
const Ke = yi;
function yi(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === Yo) && (e = Pe), vi(e)) {
    const i = Ge(e, t, !0);
    return n && As(i, n), Wt > 0 && !l && Ne && (i.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = i : Ne.push(i)), i.patchFlag |= -2, i;
  }
  if (Ti(e) && (e = e.__vccOpts), t) {
    t = Ts(t);
    let { class: i, style: u } = t;
    i && !ce(i) && (t.class = Tt(i)), re(u) && (Pr(u) && !S(u) && (u = pe({}, u)), t.style = Ot(u));
  }
  const o = ce(e) ? 1 : No(e) ? 128 : hi(e) ? 64 : re(e) ? 4 : $(e) ? 2 : 0;
  return ie(e, t, n, s, r, o, l, !0);
}
function Ts(e) {
  return e ? Pr(e) || In in e ? pe({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: l, children: o } = e, i = t ? qt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && ol(i),
    ref: t && t.ref ? n && r ? S(r) ? r.concat(an(t)) : [r, an(t)] : an(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== fe ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ts(e = " ", t = 0) {
  return Ke(Os, null, e, t);
}
function ke(e = "", t = !1) {
  return t ? (ee(), _n(Pe, null, e)) : Ke(Pe, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? Ke(Pe) : S(e) ? Ke(
    fe,
    null,
    e.slice()
  ) : typeof e == "object" ? Je(e) : Ke(Os, null, String(e));
}
function Je(e) {
  return e.el === null || e.memo ? e : Ge(e);
}
function As(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), As(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(In in t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: Me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ts(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function qt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Tt([t.class, s.class]));
      else if (r === "style")
        t.style = Ot([t.style, s.style]);
      else if (bn(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(S(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Oe(e, t, 7, [
    n,
    s
  ]);
}
const _i = rl();
let bi = 0;
function wi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || _i, l = {
    uid: bi++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Bl(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: el(s, r),
    emitsOptions: Wr(s, r),
    emit: null,
    emitted: null,
    propsDefaults: G,
    inheritAttrs: s.inheritAttrs,
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = To.bind(null, l), e.ce && e.ce(l), l;
}
let ae = null;
const il = () => ae || Me, Ct = (e) => {
  ae = e, e.scope.on();
}, ft = () => {
  ae && ae.scope.off(), ae = null;
};
function cl(e) {
  return e.vnode.shapeFlag & 4;
}
let zt = !1;
function xi(e, t = !1) {
  zt = t;
  const { props: n, children: s } = e.vnode, r = cl(e);
  si(e, n, r, t), oi(e, s);
  const l = r ? Ci(e, t) : void 0;
  return zt = !1, l;
}
function Ci(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Lr(new Proxy(e.ctx, Xo));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Oi(e) : null;
    Ct(e), It();
    const l = Ye(s, e, 0, [e.props, r]);
    if (Ft(), ft(), _r(l)) {
      if (l.then(ft, ft), t)
        return l.then((o) => {
          Zs(e, o, t);
        }).catch((o) => {
          Cn(o, e, 0);
        });
      e.asyncDep = l;
    } else
      Zs(e, l, t);
  } else
    ul(e, t);
}
function Zs(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Hr(t)), ul(e, n);
}
let Gs;
function ul(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Gs && !s.render) {
      const r = s.template || xs(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: u } = s, a = pe(pe({
          isCustomElement: l,
          delimiters: i
        }, o), u);
        s.render = Gs(r, a);
      }
    }
    e.render = s.render || Se;
  }
  Ct(e), It(), Zo(e), Ft(), ft();
}
function Ei(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return xe(e, "get", "$attrs"), t[n];
    }
  });
}
function Oi(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Ei(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Fn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Hr(Lr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in vn)
          return vn[n](e);
      }
    }));
}
function Ti(e) {
  return $(e) && "__vccOpts" in e;
}
const Fe = (e, t) => bo(e, t, zt), Ai = "3.2.39", ki = "http://www.w3.org/2000/svg", it = typeof document < "u" ? document : null, er = it && /* @__PURE__ */ it.createElement("template"), Ii = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? it.createElementNS(ki, e) : it.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  cloneNode(e) {
    const t = e.cloneNode(!0);
    return "_value" in e && (t._value = e._value), t;
  },
  insertStaticContent(e, t, n, s, r, l) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === l || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === l || !(r = r.nextSibling)); )
        ;
    else {
      er.innerHTML = s ? `<svg>${e}</svg>` : e;
      const i = er.content;
      if (s) {
        const u = i.firstChild;
        for (; u.firstChild; )
          i.appendChild(u.firstChild);
        i.removeChild(u);
      }
      t.insertBefore(i, n);
    }
    return [
      o ? o.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Fi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Mi(e, t, n) {
  const s = e.style, r = ce(n);
  if (n && !r) {
    for (const l in n)
      ns(s, l, n[l]);
    if (t && !ce(t))
      for (const l in t)
        n[l] == null && ns(s, l, "");
  } else {
    const l = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = l);
  }
}
const tr = /\s*!important$/;
function ns(e, t, n) {
  if (S(n))
    n.forEach((s) => ns(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ni(e, t);
    tr.test(n) ? e.setProperty(kt(s), n.replace(tr, ""), "important") : e[s] = n;
  }
}
const nr = ["Webkit", "Moz", "ms"], Hn = {};
function Ni(e, t) {
  const n = Hn[t];
  if (n)
    return n;
  let s = wt(t);
  if (s !== "filter" && s in e)
    return Hn[t] = s;
  s = xr(s);
  for (let r = 0; r < nr.length; r++) {
    const l = nr[r] + s;
    if (l in e)
      return Hn[t] = l;
  }
  return t;
}
const sr = "http://www.w3.org/1999/xlink";
function Si(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(sr, t.slice(6, t.length)) : e.setAttributeNS(sr, t, n);
  else {
    const l = Tl(t);
    n == null || l && !mr(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : n);
  }
}
function Pi(e, t, n, s, r, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, l), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const u = n == null ? "" : n;
    (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = mr(n) : n == null && u === "string" ? (n = "", i = !0) : u === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(t);
}
const [fl, Li] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let ss = 0;
const Ri = /* @__PURE__ */ Promise.resolve(), ji = () => {
  ss = 0;
}, Bi = () => ss || (Ri.then(ji), ss = fl());
function De(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Hi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ui(e, t, n, s, r = null) {
  const l = e._vei || (e._vei = {}), o = l[t];
  if (s && o)
    o.value = s;
  else {
    const [i, u] = $i(t);
    if (s) {
      const a = l[t] = Di(s, r);
      De(e, i, a, u);
    } else
      o && (Hi(e, i, o, u), l[t] = void 0);
  }
}
const rr = /(?:Once|Passive|Capture)$/;
function $i(e) {
  let t;
  if (rr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(rr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : kt(e.slice(2)), t];
}
function Di(e, t) {
  const n = (s) => {
    const r = s.timeStamp || fl();
    (Li || r >= n.attached - 1) && Oe(Ki(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Bi(), n;
}
function Ki(e, t) {
  if (S(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const lr = /^on[a-z]/, Vi = (e, t, n, s, r = !1, l, o, i, u) => {
  t === "class" ? Fi(e, s, r) : t === "style" ? Mi(e, n, s) : bn(t) ? us(t) || Ui(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wi(e, t, s, r)) ? Pi(e, t, s, l, o, i, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Si(e, t, s, r));
};
function Wi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && lr.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || lr.test(t) && ce(n) ? !1 : t in e;
}
const qi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Ho.props;
const et = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return S(t) ? (n) => cn(t, n) : t;
};
function zi(e) {
  e.target.composing = !0;
}
function or(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = et(r);
    const l = s || r.props && r.props.type === "number";
    De(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = hn(i)), e._assign(i);
    }), n && De(e, "change", () => {
      e.value = e.value.trim();
    }), t || (De(e, "compositionstart", zi), De(e, "compositionend", or), De(e, "change", or));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e._assign = et(l), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && hn(e.value) === t))
      return;
    const o = t == null ? "" : t;
    e.value !== o && (e.value = o);
  }
}, Ji = {
  deep: !0,
  created(e, t, n) {
    e._assign = et(n), De(e, "change", () => {
      const s = e._modelValue, r = Et(e), l = e.checked, o = e._assign;
      if (S(s)) {
        const i = cs(s, r), u = i !== -1;
        if (l && !u)
          o(s.concat(r));
        else if (!l && u) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (At(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(al(e, l));
    });
  },
  mounted: ir,
  beforeUpdate(e, t, n) {
    e._assign = et(n), ir(e, t, n);
  }
};
function ir(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, S(t) ? e.checked = cs(t, s.props.value) > -1 : At(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = dt(t, al(e, !0)));
}
const Qi = {
  created(e, { value: t }, n) {
    e.checked = dt(t, n.props.value), e._assign = et(n), De(e, "change", () => {
      e._assign(Et(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = et(s), t !== n && (e.checked = dt(t, s.props.value));
  }
}, Yi = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = At(t);
    De(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? hn(Et(o)) : Et(o));
      e._assign(e.multiple ? r ? new Set(l) : l : l[0]);
    }), e._assign = et(s);
  },
  mounted(e, { value: t }) {
    cr(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = et(n);
  },
  updated(e, { value: t }) {
    cr(e, t);
  }
};
function cr(e, t) {
  const n = e.multiple;
  if (!(n && !S(t) && !At(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const l = e.options[s], o = Et(l);
      if (n)
        S(t) ? l.selected = cs(t, o) > -1 : l.selected = t.has(o);
      else if (dt(Et(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Et(e) {
  return "_value" in e ? e._value : e.value;
}
function al(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Xi = {
  created(e, t, n) {
    ln(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    ln(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    ln(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    ln(e, t, n, s, "updated");
  }
};
function Zi(e, t) {
  switch (e) {
    case "SELECT":
      return Yi;
    case "TEXTAREA":
      return rs;
    default:
      switch (t) {
        case "checkbox":
          return Ji;
        case "radio":
          return Qi;
        default:
          return rs;
      }
  }
}
function ln(e, t, n, s, r) {
  const o = Zi(e.tagName, n.props && n.props.type)[r];
  o && o(e, t, n, s);
}
const Gi = ["ctrl", "shift", "alt", "meta"], ec = {
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
  exact: (e, t) => Gi.some((n) => e[`${n}Key`] && !t.includes(n))
}, dl = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const l = ec[t[r]];
    if (l && l(n, t))
      return;
  }
  return e(n, ...s);
}, hl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : St(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), St(e, !0), s.enter(e)) : s.leave(e, () => {
      St(e, !1);
    }) : St(e, t));
  },
  beforeUnmount(e, { value: t }) {
    St(e, t);
  }
};
function St(e, t) {
  e.style.display = t ? e._vod : "none";
}
const tc = /* @__PURE__ */ pe({ patchProp: Vi }, Ii);
let ur;
function nc() {
  return ur || (ur = fi(tc));
}
const pl = (...e) => {
  const t = nc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = sc(s);
    if (!r)
      return;
    const l = t._component;
    !$(l) && !l.render && !l.template && (l.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function sc(e) {
  return ce(e) ? document.querySelector(e) : e;
}
var fr;
const Yt = typeof window < "u";
Yt && ((fr = window == null ? void 0 : window.navigator) == null ? void 0 : fr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rc(e) {
  return typeof e == "function" ? e() : J(e);
}
function lc(e) {
  return e;
}
function oc(e) {
  return Ul() ? ($l(e), !0) : !1;
}
function ic(e, t = !0) {
  il() ? Qt(e) : t ? e() : Dt(e);
}
function gl(e) {
  var t;
  const n = rc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const cc = Yt ? window : void 0;
Yt && window.document;
Yt && window.navigator;
Yt && window.location;
function uc(e, t = !1) {
  const n = se(), s = () => n.value = Boolean(e());
  return s(), ic(s, t), n;
}
const ls = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, os = "__vueuse_ssr_handlers__";
ls[os] = ls[os] || {};
ls[os];
var ar = Object.getOwnPropertySymbols, fc = Object.prototype.hasOwnProperty, ac = Object.prototype.propertyIsEnumerable, dc = (e, t) => {
  var n = {};
  for (var s in e)
    fc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ar)
    for (var s of ar(e))
      t.indexOf(s) < 0 && ac.call(e, s) && (n[s] = e[s]);
  return n;
};
function hc(e, t, n = {}) {
  const s = n, { window: r = cc } = s, l = dc(s, ["window"]);
  let o;
  const i = uc(() => r && "ResizeObserver" in r), u = () => {
    o && (o.disconnect(), o = void 0);
  }, a = Xe(() => gl(e), (h) => {
    u(), i.value && r && h && (o = new ResizeObserver(t), o.observe(h, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), a();
  };
  return oc(d), {
    isSupported: i,
    stop: d
  };
}
function pc(e, t = { width: 0, height: 0 }, n = {}) {
  const { box: s = "content-box" } = n, r = se(t.width), l = se(t.height);
  return hc(e, ([o]) => {
    const i = s === "border-box" ? o.borderBoxSize : s === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
    i ? (r.value = i.reduce((u, { inlineSize: a }) => u + a, 0), l.value = i.reduce((u, { blockSize: a }) => u + a, 0)) : (r.value = o.contentRect.width, l.value = o.contentRect.height);
  }, n), Xe(() => gl(e), (o) => {
    r.value = o ? t.width : 0, l.value = o ? t.height : 0;
  }), {
    width: r,
    height: l
  };
}
var dr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(dr || (dr = {}));
var gc = Object.defineProperty, hr = Object.getOwnPropertySymbols, mc = Object.prototype.hasOwnProperty, vc = Object.prototype.propertyIsEnumerable, pr = (e, t, n) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yc = (e, t) => {
  for (var n in t || (t = {}))
    mc.call(t, n) && pr(e, n, t[n]);
  if (hr)
    for (var n of hr(t))
      vc.call(t, n) && pr(e, n, t[n]);
  return e;
};
const _c = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
yc({
  linear: lc
}, _c);
function ml(e, t) {
  const n = se(), s = pc(n), r = se([]), l = go(e), o = se({ start: 0, end: 10 }), { itemHeight: i, overscan: u = 5 } = t, a = (j) => {
    if (typeof i == "number")
      return Math.ceil(j / i);
    const { start: U = 0 } = o.value;
    let B = 0, D = 0;
    for (let q = U; q < l.value.length; q++)
      if (B += i(q), B >= j) {
        D = q;
        break;
      }
    return D - U;
  }, d = (j) => {
    if (typeof i == "number")
      return Math.floor(j / i) + 1;
    let U = 0, B = 0;
    for (let D = 0; D < l.value.length; D++)
      if (U += i(D), U >= j) {
        B = D;
        break;
      }
    return B + 1;
  }, h = () => {
    const j = n.value;
    if (j) {
      const U = d(j.scrollTop), B = a(j.clientHeight), D = U - u, q = U + B + u;
      o.value = {
        start: D < 0 ? 0 : D,
        end: q > l.value.length ? l.value.length : q
      }, r.value = l.value.slice(o.value.start, o.value.end).map((le, O) => ({
        data: le,
        index: O + o.value.start
      }));
    }
  };
  Xe([s.width, s.height, e], () => {
    h();
  });
  const g = Fe(() => typeof i == "number" ? l.value.length * i : l.value.reduce((j, U, B) => j + i(B), 0)), _ = (j) => typeof i == "number" ? j * i : l.value.slice(0, j).reduce((B, D, q) => B + i(q), 0), C = (j) => {
    n.value && (n.value.scrollTop = _(j), h());
  }, A = Fe(() => _(o.value.start)), k = Fe(() => ({
    style: {
      width: "100%",
      height: `${g.value - A.value}px`,
      marginTop: `${A.value}px`
    }
  }));
  return {
    list: r,
    scrollTo: C,
    containerProps: {
      ref: n,
      onScroll: () => {
        h();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: k
  };
}
const bc = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const n = {
    defaultArray: e.value,
    get: () => e.value,
    push: (s, r, l = null) => {
      const o = e.map.get(s);
      if (o)
        o.value = r, o.data = l;
      else {
        let i = { value: r, key: s, data: l };
        e.value.push(i), e.map.set(i.key, i);
      }
    },
    addRange: (s) => {
      for (let r of s)
        e.actions.push(r.key, r.value, r.data);
    },
    remove: (s) => {
      e.value.splice(e.value.findIndex((r) => r.key == s), 1);
    },
    clear: () => {
      e.value = [];
    },
    sort: (s = null) => {
      s == null && (s = (r, l) => r.value.localeCompare(l.value)), e.value = e.value.sort(s);
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
  window.ExtraSelectOptions[t] = n, e.actions = n;
};
let wc = 1;
const vl = (e) => {
  e && (e.style.display = "none", El(e));
}, yl = (e, t, n, s) => {
  var u;
  const r = se(/* @__PURE__ */ new Map());
  Vt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = se([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, Vt(() => {
    t.value && (l.value = t.value, l.rebuildMap());
  }), e) {
    r.value.clear();
    for (let a of Array.apply(null, e.selectedOptions).map((d) => d.value).filter((d) => d))
      r.value.set(a, a);
    l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: d.value, data: Object.assign({}, d.dataset) }), a), []), l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(a, a);
  else
    s != null && r.value.set(s, s);
  bc(l, (u = e == null ? void 0 : e.id) != null ? u : "extraselect_" + (++wc).toString());
  const o = [];
  return r.value.forEach((a, d) => {
    o.push([d, a]);
  }), { options: l, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, d] of o)
      r.value.set(a, d);
  } };
}, gr = async function(e, t = null, n = {}) {
  var l;
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...(l = n.headers) != null ? l : {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, _l = (e, t, n, s, r, l, o = "limited", i = {}) => {
  const u = se(0), a = se(!1), d = Fe(() => a.value || u.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      Vt((g) => {
        if (s.value.length >= r) {
          let _ = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              _ = !h.includes(s.value);
              break;
            case "complete":
              _ = h.reduce((C, A) => C && !s.value.startsWith(A), !0);
              break;
          }
          if (_) {
            a.value = !0;
            const C = setTimeout(() => {
              h.push(s.value), u.value += 1, i.body = { ...i.body, ...l.value }, gr(t, s.value, i).then((A) => {
                e.actions.addRange(A), e.actions.sort(), u.value -= 1, a.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(C);
            });
          }
        }
      });
    } else
      gr(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, bl = (e, t, n, s = [], r = []) => {
  const l = se(""), o = se([]), i = se({}), u = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in u) {
    let h = u[d], g = document.getElementById(d);
    i.value[d] = g == null ? void 0 : g.value, g && g.addEventListener("change", (_) => {
      i.value[d] = _.target.value, h && Dt(() => {
        console.log(Array.from(t.value.keys()));
        for (let C of Array.from(t.value.keys()))
          o.value.find((A) => A.key == C) || (console.log("toggling"), n(C, !1));
      });
    });
  }
  const a = function(d, h) {
    let g = d.value;
    return Object.keys(i.value).length > 0 && (g = g.filter((_) => {
      var C, A;
      for (let k in i.value) {
        const M = u[k] ? !0 : ((C = i.value[k]) != null ? C : "").length > 0;
        if (console.log(u, k, i.value[k], M), M && ((A = _.data) == null ? void 0 : A.hasOwnProperty(k)) && _.data[k] != i.value[k])
          return !1;
      }
      return !0;
    })), h.length > 0 && (g = g.filter((_) => _.value.toLowerCase().includes(h.toLowerCase()))), g;
  };
  return Vt(() => {
    o.value = a(e, l.value);
  }), { filterText: l, filteredOptions: o, filterValues: i };
}, wl = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, u = function(h) {
    const _ = document.createElement("canvas").getContext("2d");
    return _.font = i, _.measureText(h).width;
  }, a = Fe(() => {
    var g, _;
    const h = (g = Zt(s.value).width) != null ? g : 100;
    if (o === "inherit")
      return h;
    if (o == null || o === "dynamic") {
      const C = (_ = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? _ : 16;
      return Math.max(h, Math.max(...e.value.map((A) => u(A.value))) + 20 + C * 3);
    }
    return o;
  }), d = se({
    position: "absolute",
    "min-width": "max-content"
  });
  return Lo(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = Zt(s.value), g = Zt(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var g = Zt(l.value);
    let _ = -g.left + h.left;
    const C = window.document.documentElement.clientWidth;
    _ + a.value > C && (_ = C - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-g.top + h.top + h.height).toString() + "px",
      left: _.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: u };
}, xc = {
  key: 0,
  class: "extra-select selection"
}, Cc = ["onClick"], Ec = ["innerHTML"], Oc = ["value"], Tc = {
  key: 0,
  class: "input-searching"
}, Ac = {
  key: 0,
  class: "allselect-clear"
}, kc = { class: "row-input" }, Ic = ["checked"], Fc = /* @__PURE__ */ ie("b", null, "Select all", -1), Mc = { class: "row-input" }, Nc = ["checked"], Sc = /* @__PURE__ */ ie("b", null, "Select Filtered", -1), Pc = {
  key: 1,
  class: "no-matches"
}, Lc = { key: 2 }, Rc = ["onClick"], jc = { class: "row-input" }, Bc = ["checked"], Hc = ["value"], Uc = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, $c = /* @__PURE__ */ Object.assign(Uc, {
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    modelValue: { type: Array, required: !1, default: [] },
    url: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    search: { type: Boolean, default: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    initialValue: { default: null },
    minChars: { type: Number, default: 0 },
    showSelected: { type: Boolean, default: !1 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var te, Y, Ce;
    const n = e, s = Fe(() => {
      var L, P;
      return (P = (L = n.originalNode) == null ? void 0 : L.multiple) != null ? P : n.multiple;
    }), { options: r, selectedOptions: l, onReset: o } = yl(n.originalNode, Vn(n, "options"), Vn(n, "modelValue"), n.initialValue), i = (te = n.originalNode) == null ? void 0 : te.classList, u = Object.values((Ce = (Y = n.originalNode) == null ? void 0 : Y.style) != null ? Ce : {});
    vl(n.originalNode);
    const a = (L, P = null) => {
      if (s.value) {
        let W = P;
        switch (W == null && (W = !l.value.has(L)), W) {
          case !0:
            l.value.set(L, L);
            break;
          case !1:
            l.value.delete(L);
            break;
        }
      } else
        l.value.clear(), P !== !1 && l.value.set(L, L), M.value = !1;
      q(Array.from(l.value.keys()));
    }, { filterText: d, filteredOptions: h, filterValues: g } = bl(r, l, a, n.filterFields, n.hardFilterFields), { searchingFlag: _ } = _l(
      r,
      n.url,
      n.searchableUrl,
      d,
      n.minChars,
      g,
      n.fetchMode,
      n.fetchOptions
    ), C = se(null), A = se(null), k = se(null), M = se(!1), j = se(null), U = function(L) {
      const P = mt(L.target);
      P.push(L.target), !P.includes(C.value) && !P.includes(A.value) && (M.value = !1);
    };
    Qt(() => {
      if (n.dropdownContainer) {
        let L = !1;
        j.value = mt(C.value).find((P) => !!(P instanceof Element && (P.matches(n.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(P).position))));
      }
      if (j.value == null && (j.value = document.querySelector("body")), n.originalNode) {
        for (let P of i)
          P != "extraselect" && C.value.classList.add(P);
        for (let P of u)
          C.value.style[P] = n.originalNode.style[P];
        u.includes("background-color") || (C.value.style.backgroundColor = "white");
        let L = mt(C.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(o));
      }
      window.document.addEventListener("mousedown", U), window.document.addEventListener("focusin", U);
    }), kn(() => {
      window.document.removeEventListener("mousedown", U), window.document.removeEventListener("focusin", U);
    });
    const { dropdownStyle: B, getTextWidth: D } = wl(r, l, M, C, A, j, n.maxWidth), q = (L) => {
      Dt(
        () => {
          var P;
          return (P = n.originalNode) == null ? void 0 : P.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", L);
    }, le = (L) => {
      O(L, !1), d.value = "";
    }, O = (L, P = null) => {
      P == null && (P = !H.value), P ? (l.value.clear(), r.value.forEach((W) => l.value.set(W.key, W.key))) : l.value.clear(), q(Array.from(l.value.keys()));
    }, N = () => {
      Q.value ? h.value.forEach((L) => {
        l.value.has(L.key) && l.value.delete(L.key);
      }) : h.value.forEach((L) => {
        l.value.has(L.key) || l.value.set(L.key, L.key);
      }), q(Array.from(l.value.keys()));
    };
    Xe(M, (L, P) => {
      L != P && (L ? n.search && Dt(() => {
        k.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const H = Fe(() => l.value.size == r.value.length), Q = Fe(() => h.value.reduce((L, P) => L && l.value.has(P.key), !0)), _e = Fe(() => l.value.size == 0), Te = Fe(() => {
      var L, P, W, ge, qe;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (_e.value)
          return "No selection";
        if (!n.searchableUrl && H.value)
          return "All selected";
        const Le = C.value ? getComputedStyle(C.value) : null, Mn = ((L = C.value) == null ? void 0 : L.clientWidth) - parseInt(Le == null ? void 0 : Le.paddingLeft) - parseInt(Le == null ? void 0 : Le.paddingRight);
        let ve = l.value.size + " selected - ", tt = !0;
        for (let Xt of l.value)
          if (tt ? tt = !1 : ve += ", ", ve += (W = (P = r.map.get(Xt[0])) == null ? void 0 : P.value) != null ? W : _.value ? "Loading..." : "Value not found", Mn < D(ve))
            return l.value.size + " selected";
        return ve;
      } else
        for (let Le of l.value)
          return (qe = (ge = r.map.get(Le[0])) == null ? void 0 : ge.value) != null ? qe : _.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: ht, containerProps: Mt, wrapperProps: de } = ml(
      h,
      {
        itemHeight: 32
      }
    );
    return (L, P) => (ee(), oe(fe, null, [
      n.showSelected ? (ee(), oe("div", xc, [
        (ee(!0), oe(fe, null, fn(J(l), (W) => {
          var ge;
          return ee(), oe("div", {
            key: W,
            onClick: (qe) => a(W[0]),
            class: "selection-badge"
          }, [
            ts(Lt((ge = J(r).find((qe) => qe.key == W[0])) == null ? void 0 : ge.value) + " ", 1),
            ie("div", {
              class: "selection-remove",
              innerHTML: n.removeIcon
            }, null, 8, Ec)
          ], 8, Cc);
        }), 128))
      ])) : ke("", !0),
      ie("input", qt({
        onFocus: P[0] || (P[0] = (W) => M.value = !0),
        onClick: P[1] || (P[1] = (W) => M.value = !0),
        ref_key: "inputNode",
        ref: C,
        value: J(Te),
        class: "extra-select extra-select-input",
        readonly: ""
      }, L.$attrs), null, 16, Oc),
      j.value ? (ee(), _n(es, {
        key: 1,
        to: j.value
      }, [
        mn(ie("div", {
          class: Tt(["extra-select dropdown", { searching: J(_) > 0 }]),
          ref_key: "dropdownNode",
          ref: A,
          style: Ot(J(B))
        }, [
          n.search ? (ee(), oe("div", Tc, [
            mn(ie("input", {
              ref_key: "searchNode",
              ref: k,
              class: "extra-select-search",
              "onUpdate:modelValue": P[2] || (P[2] = (W) => ue(d) ? d.value = W : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [rs, J(d)]
            ])
          ])) : ke("", !0),
          J(d).length >= n.minChars ? (ee(), oe(fe, { key: 1 }, [
            J(s) ? (ee(), oe("div", Ac, [
              J(d).length == 0 ? (ee(), oe("div", {
                key: 0,
                onClick: O,
                class: "all-select"
              }, [
                ie("div", kc, [
                  ie("input", {
                    checked: J(H),
                    type: "checkbox"
                  }, null, 8, Ic),
                  Fc
                ])
              ])) : ke("", !0),
              J(h).length > 0 && J(d).length > 0 ? (ee(), oe("div", {
                key: 1,
                onClick: N,
                class: "all-select"
              }, [
                ie("div", Mc, [
                  ie("input", {
                    checked: J(Q),
                    type: "checkbox"
                  }, null, 8, Nc),
                  Sc
                ])
              ])) : ke("", !0),
              ie("div", {
                class: "clear",
                onClick: le
              }, "Clear")
            ])) : ke("", !0),
            J(h).length == 0 ? (ee(), oe("div", Pc, "No matches found")) : ke("", !0)
          ], 64)) : (ee(), oe("div", Lc, "Insert at least " + Lt(n.minChars) + " characters", 1)),
          ie("div", qt(J(Mt), { class: "scroller" }), [
            ie("div", vr(Ts(J(de))), [
              (ee(!0), oe(fe, null, fn(J(ht), (W) => (ee(), oe("button", {
                key: W.index,
                class: "dropdown-row",
                onClick: dl((ge) => a(W.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", jc, [
                  J(s) ? (ee(), oe("input", {
                    key: 0,
                    checked: J(l).has(W.data.key),
                    type: "checkbox"
                  }, null, 8, Bc)) : ke("", !0),
                  ts(" " + Lt(W.data.value), 1)
                ])
              ], 8, Rc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [hl, M.value]
        ])
      ], 8, ["to"])) : ke("", !0),
      n.originalNode ? (ee(), _n(es, {
        key: 2,
        to: n.originalNode
      }, [
        (ee(!0), oe(fe, null, fn(J(l), (W) => (ee(), oe("option", {
          key: W[0],
          selected: "selected",
          value: W[0]
        }, null, 8, Hc))), 128))
      ], 8, ["to"])) : ke("", !0)
    ], 64));
  }
}), Dc = {
  key: 0,
  class: "no-matches"
}, Kc = { key: 1 }, Vc = ["onClick"], Wc = { class: "row-input" }, qc = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, zc = /* @__PURE__ */ Object.assign(qc, {
  props: {
    originalNode: { type: Object, required: !1 },
    options: { type: Array, required: !1 },
    modelValue: { type: String, required: !1 },
    maxWidth: { type: String, default: "dynamic" },
    url: { type: String, required: !1 },
    searchableUrl: { type: Boolean, default: !1 },
    minChars: { type: Number, default: 0 },
    fetchMode: { type: String, default: "limited" },
    fetchOptions: { type: Object, default: {} },
    filterFields: { type: Array, default: [] },
    hardFilterFields: { type: Array, default: [] },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var D, q, le;
    const n = e, { options: s } = yl(null, Vn(n, "options"), se([])), r = (D = n.originalNode) == null ? void 0 : D.classList, l = Object.values((le = (q = n.originalNode) == null ? void 0 : q.style) != null ? le : {});
    vl(n.originalNode);
    const o = (O, N = null) => {
      N === !1 ? i.value = "" : i.value = s.map.get(O).value, _.value = !1;
    }, { filterText: i, filteredOptions: u, filterValues: a } = bl(s, selectedOptions, o, n.filterFields, n.hardFilterFields), { searchingFlag: d } = _l(
      s,
      n.url,
      n.searchableUrl,
      i,
      n.minChars,
      a,
      n.fetchMode,
      n.fetchOptions
    ), h = se(null), g = se(null), _ = se(!1), C = se(null), A = function(O) {
      const N = mt(O.target);
      N.push(O.target), !N.includes(h.value) && !N.includes(g.value) && (_.value = !1);
    };
    Qt(() => {
      if (n.dropdownContainer) {
        let O = !1;
        C.value = mt(h.value).find((N) => !!(N instanceof Element && (N.matches(n.dropdownContainer) && (O = !0), O && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (C.value == null && (C.value = document.querySelector("body")), n.originalNode) {
        for (let Q of r)
          Q != "extrasuggest" && h.value.classList.add(Q);
        for (let Q of l)
          h.value.style[Q] = n.originalNode.style[Q];
        l.includes("background-color") || (h.value.style.backgroundColor = "white"), i.value = n.originalNode.value, Vt(() => {
          n.modelValue != null && (i.value = n.modelValue);
        });
        const O = i.value, N = () => {
          i.value = O;
        };
        let H = mt(h.value, "form").pop();
        H instanceof HTMLElement && H.matches("form") && H.addEventListener("reset", () => setTimeout(N));
      }
      window.document.addEventListener("mousedown", A), window.document.addEventListener("focusin", A);
    }), kn(() => {
      window.document.removeEventListener("mousedown", A), window.document.removeEventListener("focusin", A);
    });
    const { dropdownStyle: k } = wl(s, se([]), _, h, g, C, n.maxWidth), M = () => {
      var O;
      n.originalNode && (n.originalNode.value = i.value, (O = n.originalNode) == null || O.dispatchEvent(new Event("change", { bubbles: !0 }))), t("update:modelValue", i.value);
    };
    Xe(() => _.value, (O) => {
      O === !1 && M();
    });
    const { list: j, containerProps: U, wrapperProps: B } = ml(
      u,
      {
        itemHeight: 32
      }
    );
    return (O, N) => (ee(), oe(fe, null, [
      mn(ie("input", qt({
        onFocus: N[0] || (N[0] = (H) => _.value = !0),
        onClick: N[1] || (N[1] = (H) => _.value = !0),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": N[2] || (N[2] = (H) => ue(i) ? i.value = H : null),
        class: "extra-select extra-select-input"
      }, O.$attrs), null, 16), [
        [Xi, J(i)]
      ]),
      C.value ? (ee(), _n(es, {
        key: 0,
        to: C.value
      }, [
        mn(ie("div", {
          class: Tt(["extra-select dropdown", { searching: J(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Ot(J(k))
        }, [
          J(i).length >= n.minChars ? (ee(), oe(fe, { key: 0 }, [
            J(u).length == 0 ? (ee(), oe("div", Dc, "No matches found")) : ke("", !0)
          ], 64)) : (ee(), oe("div", Kc, "Insert at least " + Lt(n.minChars) + " characters", 1)),
          ie("div", qt(J(U), { class: "scroller" }), [
            ie("div", vr(Ts(J(B))), [
              (ee(!0), oe(fe, null, fn(J(j), (H) => (ee(), oe("button", {
                key: H.index,
                class: "dropdown-row",
                onClick: dl((Q) => o(H.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", Wc, Lt(H.data.value), 1)
              ], 8, Vc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [hl, _.value]
        ])
      ], 8, ["to"])) : ke("", !0)
    ], 64));
  }
}), xl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      xl.bindNew(e);
    });
  },
  bindNew(e) {
    at.lock(e, "extra-select", () => {
      const t = {};
      for (let r in e.dataset)
        try {
          t[r] = JSON.parse(e.dataset[r]);
        } catch {
          t[r] = e.dataset[r];
        }
      t.originalNode = e;
      const n = document.createElement("div");
      e.parentNode.insertBefore(n, e.nextSibling), n.dataset.isVue = !0, n.style.display = "contents";
      const s = pl($c, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), at.remove(e, "extra-select");
      });
    });
  }
}, Cl = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      Cl.bindNew(e);
    });
  },
  bindNew(e) {
    at.lock(e, "extra-suggest", () => {
      const t = {};
      for (let r in e.dataset)
        try {
          t[r] = JSON.parse(e.dataset[r]);
        } catch {
          t[r] = e.dataset[r];
        }
      t.originalNode = e;
      const n = document.createElement("div");
      e.parentNode.insertBefore(n, e.nextSibling), n.dataset.isVue = !0, n.style.display = "contents";
      const s = pl(zc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), at.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  xl.init(), Cl.init();
});
export {
  xl as ExtraSelect,
  Cl as ExtraSuggest
};
