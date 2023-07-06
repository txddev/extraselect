const Be = /* @__PURE__ */ new WeakMap();
class pt {
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
    return pt.has(t, n) ? !1 : (pt.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Be);
function tn(e) {
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
function _t(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s instanceof HTMLElement && !(t instanceof HTMLElement && s === t) && !(typeof t == "string" && s.matches(t)); ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return s != null && n.push(s), n;
}
function Sl(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(n) {
    e.removeChild(n);
  });
}
function cs(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Il = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fl = /* @__PURE__ */ cs(Il);
function yr(e) {
  return !!e || e === "";
}
function St(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ae(s) ? Nl(s) : St(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else {
    if (ae(e))
      return e;
    if (re(e))
      return e;
  }
}
const Ml = /;(?![^(]*\))/g, kl = /:(.+)/;
function Nl(e) {
  const t = {};
  return e.split(Ml).forEach((n) => {
    if (n) {
      const s = n.split(kl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function It(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = It(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function _r(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ae(t) && (e.class = It(t)), n && (e.style = St(n)), e;
}
function Pl(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = gt(e[s], t[s]);
  return n;
}
function gt(e, t) {
  if (e === t)
    return !0;
  let n = Ns(e), s = Ns(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Dt(e), s = Dt(t), n || s)
    return e === t;
  if (n = F(e), s = F(t), n || s)
    return n && s ? Pl(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const o in e) {
      const i = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (i && !c || !i && c || !gt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function us(e, t) {
  return e.findIndex((n) => gt(n, t));
}
const He = (e) => ae(e) ? e : e == null ? "" : F(e) || re(e) && (e.toString === xr || !D(e.toString)) ? JSON.stringify(e, br, 2) : String(e), br = (e, t) => t && t.__v_isRef ? br(e, t.value) : wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Ft(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : re(t) && !F(t) && !Cr(t) ? String(t) : t, G = {}, bt = [], Pe = () => {
}, Ll = () => !1, Rl = /^on[^a-z]/, Cn = (e) => Rl.test(e), as = (e) => e.startsWith("onUpdate:"), me = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jl = Object.prototype.hasOwnProperty, z = (e, t) => jl.call(e, t), F = Array.isArray, wt = (e) => Zt(e) === "[object Map]", Ft = (e) => Zt(e) === "[object Set]", Ns = (e) => Zt(e) === "[object Date]", D = (e) => typeof e == "function", ae = (e) => typeof e == "string", Dt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", wr = (e) => re(e) && D(e.then) && D(e.catch), xr = Object.prototype.toString, Zt = (e) => xr.call(e), Bl = (e) => Zt(e).slice(8, -1), Cr = (e) => Zt(e) === "[object Object]", ds = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, an = /* @__PURE__ */ cs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hl = /-(\w)/g, Et = En((e) => e.replace(Hl, (t, n) => n ? n.toUpperCase() : "")), $l = /\B([A-Z])/g, Mt = En((e) => e.replace($l, "-$1").toLowerCase()), Er = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rn = En((e) => e ? `on${Er(e)}` : ""), Kt = (e, t) => !Object.is(e, t), fn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, gn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, mn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ps;
const Ul = () => Ps || (Ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let xe;
class Dl {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && xe && (this.parent = xe, this.index = (xe.scopes || (xe.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    }
  }
  on() {
    xe = this;
  }
  off() {
    xe = this.parent;
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
function Kl(e, t = xe) {
  t && t.active && t.effects.push(e);
}
function Vl() {
  return xe;
}
function zl(e) {
  xe && xe.cleanups.push(e);
}
const hs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Or = (e) => (e.w & tt) > 0, Tr = (e) => (e.n & tt) > 0, Wl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= tt;
}, ql = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Or(r) && !Tr(r) ? r.delete(e) : t[n++] = r, r.w &= ~tt, r.n &= ~tt;
    }
    t.length = n;
  }
}, Dn = /* @__PURE__ */ new WeakMap();
let Bt = 0, tt = 1;
const Kn = 30;
let Fe;
const dt = Symbol(""), Vn = Symbol("");
class ps {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Kl(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Fe, n = Ze;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Fe, Fe = this, Ze = !0, tt = 1 << ++Bt, Bt <= Kn ? Wl(this) : Ls(this), this.fn();
    } finally {
      Bt <= Kn && ql(this), tt = 1 << --Bt, Fe = this.parent, Ze = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Fe === this ? this.deferStop = !0 : this.active && (Ls(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ls(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ze = !0;
const Ar = [];
function kt() {
  Ar.push(Ze), Ze = !1;
}
function Nt() {
  const e = Ar.pop();
  Ze = e === void 0 ? !0 : e;
}
function Ce(e, t, n) {
  if (Ze && Fe) {
    let s = Dn.get(e);
    s || Dn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = hs()), Sr(r);
  }
}
function Sr(e, t) {
  let n = !1;
  Bt <= Kn ? Tr(e) || (e.n |= tt, n = !Or(e)) : n = !e.has(Fe), n && (e.add(Fe), Fe.deps.push(e));
}
function We(e, t, n, s, r, l) {
  const o = Dn.get(e);
  if (!o)
    return;
  let i = [];
  if (t === "clear")
    i = [...o.values()];
  else if (n === "length" && F(e))
    o.forEach((c, a) => {
      (a === "length" || a >= s) && i.push(c);
    });
  else
    switch (n !== void 0 && i.push(o.get(n)), t) {
      case "add":
        F(e) ? ds(n) && i.push(o.get("length")) : (i.push(o.get(dt)), wt(e) && i.push(o.get(Vn)));
        break;
      case "delete":
        F(e) || (i.push(o.get(dt)), wt(e) && i.push(o.get(Vn)));
        break;
      case "set":
        wt(e) && i.push(o.get(dt));
        break;
    }
  if (i.length === 1)
    i[0] && zn(i[0]);
  else {
    const c = [];
    for (const a of i)
      a && c.push(...a);
    zn(hs(c));
  }
}
function zn(e, t) {
  const n = F(e) ? e : [...e];
  for (const s of n)
    s.computed && Rs(s);
  for (const s of n)
    s.computed || Rs(s);
}
function Rs(e, t) {
  (e !== Fe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Jl = /* @__PURE__ */ cs("__proto__,__v_isRef,__isVue"), Ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Dt)
), Ql = /* @__PURE__ */ gs(), Yl = /* @__PURE__ */ gs(!1, !0), Xl = /* @__PURE__ */ gs(!0), js = /* @__PURE__ */ Zl();
function Zl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = q(this);
      for (let l = 0, o = this.length; l < o; l++)
        Ce(s, "get", l + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(q)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      kt();
      const s = q(this)[t].apply(this, n);
      return Nt(), s;
    };
  }), e;
}
function gs(e = !1, t = !1) {
  return function(s, r, l) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && l === (e ? t ? go : Pr : t ? Nr : kr).get(s))
      return s;
    const o = F(s);
    if (!e && o && z(js, r))
      return Reflect.get(js, r, l);
    const i = Reflect.get(s, r, l);
    return (Dt(r) ? Ir.has(r) : Jl(r)) || (e || Ce(s, "get", r), t) ? i : fe(i) ? o && ds(r) ? i : i.value : re(i) ? e ? Lr(i) : ys(i) : i;
  };
}
const Gl = /* @__PURE__ */ Fr(), eo = /* @__PURE__ */ Fr(!0);
function Fr(e = !1) {
  return function(n, s, r, l) {
    let o = n[s];
    if (Ot(o) && fe(o) && !fe(r))
      return !1;
    if (!e && (!vn(r) && !Ot(r) && (o = q(o), r = q(r)), !F(n) && fe(o) && !fe(r)))
      return o.value = r, !0;
    const i = F(n) && ds(s) ? Number(s) < n.length : z(n, s), c = Reflect.set(n, s, r, l);
    return n === q(l) && (i ? Kt(r, o) && We(n, "set", s, r) : We(n, "add", s, r)), c;
  };
}
function to(e, t) {
  const n = z(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && We(e, "delete", t, void 0), s;
}
function no(e, t) {
  const n = Reflect.has(e, t);
  return (!Dt(t) || !Ir.has(t)) && Ce(e, "has", t), n;
}
function so(e) {
  return Ce(e, "iterate", F(e) ? "length" : dt), Reflect.ownKeys(e);
}
const Mr = {
  get: Ql,
  set: Gl,
  deleteProperty: to,
  has: no,
  ownKeys: so
}, ro = {
  get: Xl,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, lo = /* @__PURE__ */ me({}, Mr, {
  get: Yl,
  set: eo
}), ms = (e) => e, On = (e) => Reflect.getPrototypeOf(e);
function nn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = q(e), l = q(t);
  n || (t !== l && Ce(r, "get", t), Ce(r, "get", l));
  const { has: o } = On(r), i = s ? ms : n ? bs : Vt;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function sn(e, t = !1) {
  const n = this.__v_raw, s = q(n), r = q(e);
  return t || (e !== r && Ce(s, "has", e), Ce(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function rn(e, t = !1) {
  return e = e.__v_raw, !t && Ce(q(e), "iterate", dt), Reflect.get(e, "size", e);
}
function Bs(e) {
  e = q(e);
  const t = q(this);
  return On(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this;
}
function Hs(e, t) {
  t = q(t);
  const n = q(this), { has: s, get: r } = On(n);
  let l = s.call(n, e);
  l || (e = q(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? Kt(t, o) && We(n, "set", e, t) : We(n, "add", e, t), this;
}
function $s(e) {
  const t = q(this), { has: n, get: s } = On(t);
  let r = n.call(t, e);
  r || (e = q(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && We(t, "delete", e, void 0), l;
}
function Us() {
  const e = q(this), t = e.size !== 0, n = e.clear();
  return t && We(e, "clear", void 0, void 0), n;
}
function ln(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = q(o), c = t ? ms : e ? bs : Vt;
    return !e && Ce(i, "iterate", dt), o.forEach((a, d) => s.call(r, c(a), c(d), l));
  };
}
function on(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = q(r), o = wt(l), i = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), d = n ? ms : t ? bs : Vt;
    return !t && Ce(l, "iterate", c ? Vn : dt), {
      next() {
        const { value: h, done: p } = a.next();
        return p ? { value: h, done: p } : {
          value: i ? [d(h[0]), d(h[1])] : d(h),
          done: p
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ye(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function oo() {
  const e = {
    get(l) {
      return nn(this, l);
    },
    get size() {
      return rn(this);
    },
    has: sn,
    add: Bs,
    set: Hs,
    delete: $s,
    clear: Us,
    forEach: ln(!1, !1)
  }, t = {
    get(l) {
      return nn(this, l, !1, !0);
    },
    get size() {
      return rn(this);
    },
    has: sn,
    add: Bs,
    set: Hs,
    delete: $s,
    clear: Us,
    forEach: ln(!1, !0)
  }, n = {
    get(l) {
      return nn(this, l, !0);
    },
    get size() {
      return rn(this, !0);
    },
    has(l) {
      return sn.call(this, l, !0);
    },
    add: Ye("add"),
    set: Ye("set"),
    delete: Ye("delete"),
    clear: Ye("clear"),
    forEach: ln(!0, !1)
  }, s = {
    get(l) {
      return nn(this, l, !0, !0);
    },
    get size() {
      return rn(this, !0);
    },
    has(l) {
      return sn.call(this, l, !0);
    },
    add: Ye("add"),
    set: Ye("set"),
    delete: Ye("delete"),
    clear: Ye("clear"),
    forEach: ln(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = on(l, !1, !1), n[l] = on(l, !0, !1), t[l] = on(l, !1, !0), s[l] = on(l, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [io, co, uo, ao] = /* @__PURE__ */ oo();
function vs(e, t) {
  const n = t ? e ? ao : uo : e ? co : io;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(z(n, r) && r in s ? n : s, r, l);
}
const fo = {
  get: /* @__PURE__ */ vs(!1, !1)
}, ho = {
  get: /* @__PURE__ */ vs(!1, !0)
}, po = {
  get: /* @__PURE__ */ vs(!0, !1)
}, kr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
function mo(e) {
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
function vo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mo(Bl(e));
}
function ys(e) {
  return Ot(e) ? e : _s(e, !1, Mr, fo, kr);
}
function yo(e) {
  return _s(e, !1, lo, ho, Nr);
}
function Lr(e) {
  return _s(e, !0, ro, po, Pr);
}
function _s(e, t, n, s, r) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = vo(e);
  if (o === 0)
    return e;
  const i = new Proxy(e, o === 2 ? s : n);
  return r.set(e, i), i;
}
function xt(e) {
  return Ot(e) ? xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
function vn(e) {
  return !!(e && e.__v_isShallow);
}
function Rr(e) {
  return xt(e) || Ot(e);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function jr(e) {
  return gn(e, "__v_skip", !0), e;
}
const Vt = (e) => re(e) ? ys(e) : e, bs = (e) => re(e) ? Lr(e) : e;
function Br(e) {
  Ze && Fe && (e = q(e), Sr(e.dep || (e.dep = hs())));
}
function Hr(e, t) {
  e = q(e), e.dep && zn(e.dep);
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function ee(e) {
  return $r(e, !1);
}
function _o(e) {
  return $r(e, !0);
}
function $r(e, t) {
  return fe(e) ? e : new bo(e, t);
}
class bo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : q(t), this._value = n ? t : Vt(t);
  }
  get value() {
    return Br(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || vn(t) || Ot(t);
    t = n ? t : q(t), Kt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Vt(t), Hr(this));
  }
}
function U(e) {
  return fe(e) ? e.value : e;
}
const wo = {
  get: (e, t, n) => U(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ur(e) {
  return xt(e) ? e : new Proxy(e, wo);
}
class xo {
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
function Ht(e, t, n) {
  const s = e[t];
  return fe(s) ? s : new xo(e, t, n);
}
var Dr;
class Co {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Dr] = !1, this._dirty = !0, this.effect = new ps(t, () => {
      this._dirty || (this._dirty = !0, Hr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = q(this);
    return Br(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Dr = "__v_isReadonly";
function Eo(e, t, n = !1) {
  let s, r;
  const l = D(e);
  return l ? (s = e, r = Pe) : (s = e.get, r = e.set), new Co(s, r, l || !r, n);
}
function Ge(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (l) {
    Tn(l, t, n);
  }
  return r;
}
function Ae(e, t, n, s) {
  if (D(e)) {
    const l = Ge(e, t, n, s);
    return l && wr(l) && l.catch((o) => {
      Tn(o, t, n);
    }), l;
  }
  const r = [];
  for (let l = 0; l < e.length; l++)
    r.push(Ae(e[l], t, n, s));
  return r;
}
function Tn(e, t, n, s = !0) {
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
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ge(c, null, 10, [e, o, i]);
      return;
    }
  }
  Oo(e, n, r, s);
}
function Oo(e, t, n, s = !0) {
  console.error(e);
}
let zt = !1, Wn = !1;
const ge = [];
let Ue = 0;
const Ct = [];
let Ke = null, ct = 0;
const Kr = /* @__PURE__ */ Promise.resolve();
let ws = null;
function Wt(e) {
  const t = ws || Kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function To(e) {
  let t = Ue + 1, n = ge.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    qt(ge[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function xs(e) {
  (!ge.length || !ge.includes(e, zt && e.allowRecurse ? Ue + 1 : Ue)) && (e.id == null ? ge.push(e) : ge.splice(To(e.id), 0, e), Vr());
}
function Vr() {
  !zt && !Wn && (Wn = !0, ws = Kr.then(Wr));
}
function Ao(e) {
  const t = ge.indexOf(e);
  t > Ue && ge.splice(t, 1);
}
function So(e) {
  F(e) ? Ct.push(...e) : (!Ke || !Ke.includes(e, e.allowRecurse ? ct + 1 : ct)) && Ct.push(e), Vr();
}
function Ds(e, t = zt ? Ue + 1 : 0) {
  for (; t < ge.length; t++) {
    const n = ge[t];
    n && n.pre && (ge.splice(t, 1), t--, n());
  }
}
function zr(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)];
    if (Ct.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, Ke.sort((n, s) => qt(n) - qt(s)), ct = 0; ct < Ke.length; ct++)
      Ke[ct]();
    Ke = null, ct = 0;
  }
}
const qt = (e) => e.id == null ? 1 / 0 : e.id, Io = (e, t) => {
  const n = qt(e) - qt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  Wn = !1, zt = !0, ge.sort(Io);
  const t = Pe;
  try {
    for (Ue = 0; Ue < ge.length; Ue++) {
      const n = ge[Ue];
      n && n.active !== !1 && Ge(n, null, 14);
    }
  } finally {
    Ue = 0, ge.length = 0, zr(), zt = !1, ws = null, (ge.length || Ct.length) && Wr();
  }
}
function Fo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || G;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: h, trim: p } = s[d] || G;
    p && (r = n.map((b) => b.trim())), h && (r = n.map(mn));
  }
  let i, c = s[i = Rn(t)] || s[i = Rn(Et(t))];
  !c && l && (c = s[i = Rn(Mt(t))]), c && Ae(c, e, 6, r);
  const a = s[i + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Ae(a, e, 6, r);
  }
}
function qr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let o = {}, i = !1;
  if (!D(e)) {
    const c = (a) => {
      const d = qr(a, t, !0);
      d && (i = !0, me(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !i ? (re(e) && s.set(e, null), null) : (F(l) ? l.forEach((c) => o[c] = null) : me(o, l), re(e) && s.set(e, o), o);
}
function An(e, t) {
  return !e || !Cn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Mt(t)) || z(e, t));
}
let ke = null, Jr = null;
function yn(e) {
  const t = ke;
  return ke = e, Jr = e && e.type.__scopeId || null, t;
}
function Mo(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Gs(-1);
    const l = yn(t), o = e(...r);
    return yn(l), s._d && Gs(1), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function jn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: l, propsOptions: [o], slots: i, attrs: c, emit: a, render: d, renderCache: h, data: p, setupState: b, ctx: O, inheritAttrs: E } = e;
  let A, R;
  const B = yn(e);
  try {
    if (n.shapeFlag & 4) {
      const j = r || s;
      A = $e(d.call(j, j, h, l, b, p, O)), R = c;
    } else {
      const j = t;
      A = $e(j.length > 1 ? j(l, { attrs: c, slots: i, emit: a }) : j(l, null)), R = t.props ? c : ko(c);
    }
  } catch (j) {
    Ut.length = 0, Tn(j, e, 1), A = ze(Le);
  }
  let H = A;
  if (R && E !== !1) {
    const j = Object.keys(R), { shapeFlag: V } = H;
    j.length && V & 7 && (o && j.some(as) && (R = No(R, o)), H = nt(H, R));
  }
  return n.dirs && (H = nt(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (H.transition = n.transition), A = H, yn(B), A;
}
const ko = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, No = (e, t) => {
  const n = {};
  for (const s in e)
    (!as(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Po(e, t, n) {
  const { props: s, children: r, component: l } = e, { props: o, children: i, patchFlag: c } = t, a = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Ks(s, o, a) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const p = d[h];
        if (o[p] !== s[p] && !An(a, p))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? Ks(s, o, a) : !0 : !!o;
  return !1;
}
function Ks(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    if (t[l] !== e[l] && !An(n, l))
      return !0;
  }
  return !1;
}
function Lo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ro = (e) => e.__isSuspense;
function jo(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : So(e);
}
function Bo(e, t) {
  if (he) {
    let n = he.provides;
    const s = he.parent && he.parent.provides;
    s === n && (n = he.provides = Object.create(s)), n[e] = t;
  }
}
function Bn(e, t, n = !1) {
  const s = he || ke;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s.proxy) : t;
  }
}
function Jt(e, t) {
  return Sn(e, null, t);
}
function Ho(e, t) {
  return Sn(e, null, { flush: "post" });
}
const Vs = {};
function et(e, t, n) {
  return Sn(e, t, n);
}
function Sn(e, t, { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = G) {
  const i = he;
  let c, a = !1, d = !1;
  if (fe(e) ? (c = () => e.value, a = vn(e)) : xt(e) ? (c = () => e, s = !0) : F(e) ? (d = !0, a = e.some((R) => xt(R) || vn(R)), c = () => e.map((R) => {
    if (fe(R))
      return R.value;
    if (xt(R))
      return ft(R);
    if (D(R))
      return Ge(R, i, 2);
  })) : D(e) ? t ? c = () => Ge(e, i, 2) : c = () => {
    if (!(i && i.isUnmounted))
      return h && h(), Ae(e, i, 3, [p]);
  } : c = Pe, t && s) {
    const R = c;
    c = () => ft(R());
  }
  let h, p = (R) => {
    h = A.onStop = () => {
      Ge(R, i, 4);
    };
  };
  if (Xt)
    return p = Pe, t ? n && Ae(t, i, 3, [
      c(),
      d ? [] : void 0,
      p
    ]) : c(), Pe;
  let b = d ? [] : Vs;
  const O = () => {
    if (!!A.active)
      if (t) {
        const R = A.run();
        (s || a || (d ? R.some((B, H) => Kt(B, b[H])) : Kt(R, b))) && (h && h(), Ae(t, i, 3, [
          R,
          b === Vs ? void 0 : b,
          p
        ]), b = R);
      } else
        A.run();
  };
  O.allowRecurse = !!t;
  let E;
  r === "sync" ? E = O : r === "post" ? E = () => be(O, i && i.suspense) : (O.pre = !0, i && (O.id = i.uid), E = () => xs(O));
  const A = new ps(c, E);
  return t ? n ? O() : b = A.run() : r === "post" ? be(A.run.bind(A), i && i.suspense) : A.run(), () => {
    A.stop(), i && i.scope && fs(i.scope.effects, A);
  };
}
function $o(e, t, n) {
  const s = this.proxy, r = ae(e) ? e.includes(".") ? Qr(s, e) : () => s[e] : e.bind(s, s);
  let l;
  D(t) ? l = t : (l = t.handler, n = t);
  const o = he;
  Tt(this);
  const i = Sn(r, l.bind(s), n);
  return o ? Tt(o) : ht(), i;
}
function Qr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ft(e, t) {
  if (!re(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), fe(e))
    ft(e.value, t);
  else if (F(e))
    for (let n = 0; n < e.length; n++)
      ft(e[n], t);
  else if (Ft(e) || wt(e))
    e.forEach((n) => {
      ft(n, t);
    });
  else if (Cr(e))
    for (const n in e)
      ft(e[n], t);
  return e;
}
function Uo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Gt(() => {
    e.isMounted = !0;
  }), Gr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Oe = [Function, Array], Do = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Oe,
    onEnter: Oe,
    onAfterEnter: Oe,
    onEnterCancelled: Oe,
    onBeforeLeave: Oe,
    onLeave: Oe,
    onAfterLeave: Oe,
    onLeaveCancelled: Oe,
    onBeforeAppear: Oe,
    onAppear: Oe,
    onAfterAppear: Oe,
    onAppearCancelled: Oe
  },
  setup(e, { slots: t }) {
    const n = ul(), s = Uo();
    let r;
    return () => {
      const l = t.default && Xr(t.default(), !0);
      if (!l || !l.length)
        return;
      let o = l[0];
      if (l.length > 1) {
        for (const E of l)
          if (E.type !== Le) {
            o = E;
            break;
          }
      }
      const i = q(e), { mode: c } = i;
      if (s.isLeaving)
        return Hn(o);
      const a = zs(o);
      if (!a)
        return Hn(o);
      const d = qn(a, i, s, n);
      Jn(a, d);
      const h = n.subTree, p = h && zs(h);
      let b = !1;
      const { getTransitionKey: O } = a.type;
      if (O) {
        const E = O();
        r === void 0 ? r = E : E !== r && (r = E, b = !0);
      }
      if (p && p.type !== Le && (!ut(a, p) || b)) {
        const E = qn(p, i, s, n);
        if (Jn(p, E), c === "out-in")
          return s.isLeaving = !0, E.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, Hn(o);
        c === "in-out" && a.type !== Le && (E.delayLeave = (A, R, B) => {
          const H = Yr(s, p);
          H[String(p.key)] = p, A._leaveCb = () => {
            R(), A._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = B;
        });
      }
      return o;
    };
  }
}, Ko = Do;
function Yr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function qn(e, t, n, s) {
  const { appear: r, mode: l, persisted: o = !1, onBeforeEnter: i, onEnter: c, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: h, onLeave: p, onAfterLeave: b, onLeaveCancelled: O, onBeforeAppear: E, onAppear: A, onAfterAppear: R, onAppearCancelled: B } = t, H = String(e.key), j = Yr(n, e), V = (M, P) => {
    M && Ae(M, s, 9, P);
  }, J = (M, P) => {
    const $ = P[1];
    V(M, P), F(M) ? M.every((K) => K.length <= 1) && $() : M.length <= 1 && $();
  }, te = {
    mode: l,
    persisted: o,
    beforeEnter(M) {
      let P = i;
      if (!n.isMounted)
        if (r)
          P = E || i;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const $ = j[H];
      $ && ut(e, $) && $.el._leaveCb && $.el._leaveCb(), V(P, [M]);
    },
    enter(M) {
      let P = c, $ = a, K = d;
      if (!n.isMounted)
        if (r)
          P = A || c, $ = R || a, K = B || d;
        else
          return;
      let ne = !1;
      const Se = M._enterCb = (mt) => {
        ne || (ne = !0, mt ? V(K, [M]) : V($, [M]), te.delayedLeave && te.delayedLeave(), M._enterCb = void 0);
      };
      P ? J(P, [M, Se]) : Se();
    },
    leave(M, P) {
      const $ = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return P();
      V(h, [M]);
      let K = !1;
      const ne = M._leaveCb = (Se) => {
        K || (K = !0, P(), Se ? V(O, [M]) : V(b, [M]), M._leaveCb = void 0, j[$] === e && delete j[$]);
      };
      j[$] = e, p ? J(p, [M, ne]) : ne();
    },
    clone(M) {
      return qn(M, t, n, s);
    }
  };
  return te;
}
function Hn(e) {
  if (In(e))
    return e = nt(e), e.children = null, e;
}
function zs(e) {
  return In(e) ? e.children ? e.children[0] : void 0 : e;
}
function Jn(e, t) {
  e.shapeFlag & 6 && e.component ? Jn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xr(e, t = !1, n) {
  let s = [], r = 0;
  for (let l = 0; l < e.length; l++) {
    let o = e[l];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
    o.type === de ? (o.patchFlag & 128 && r++, s = s.concat(Xr(o.children, t, i))) : (t || o.type !== Le) && s.push(i != null ? nt(o, { key: i }) : o);
  }
  if (r > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
const dn = (e) => !!e.type.__asyncLoader, In = (e) => e.type.__isKeepAlive;
function Vo(e, t) {
  Zr(e, "a", t);
}
function zo(e, t) {
  Zr(e, "da", t);
}
function Zr(e, t, n = he) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Fn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      In(r.parent.vnode) && Wo(s, t, n, r), r = r.parent;
  }
}
function Wo(e, t, n, s) {
  const r = Fn(t, e, s, !0);
  Mn(() => {
    fs(s[t], r);
  }, n);
}
function Fn(e, t, n = he, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      kt(), Tt(n);
      const i = Ae(t, n, e, o);
      return ht(), Nt(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const qe = (e) => (t, n = he) => (!Xt || e === "sp") && Fn(e, t, n), qo = qe("bm"), Gt = qe("m"), Jo = qe("bu"), Qo = qe("u"), Gr = qe("bum"), Mn = qe("um"), Yo = qe("sp"), Xo = qe("rtg"), Zo = qe("rtc");
function Go(e, t = he) {
  Fn("ec", e, t);
}
function _n(e, t) {
  const n = ke;
  if (n === null)
    return e;
  const s = Nn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, c, a = G] = t[l];
    D(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ft(i), r.push({
      dir: o,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: a
    });
  }
  return e;
}
function rt(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    l && (i.oldValue = l[o].value);
    let c = i.dir[s];
    c && (kt(), Ae(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Nt());
  }
}
const ei = Symbol();
function hn(e, t, n, s) {
  let r;
  const l = n && n[s];
  if (F(e) || ae(e)) {
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
      for (let i = 0, c = o.length; i < c; i++) {
        const a = o[i];
        r[i] = t(e[a], a, i, l && l[i]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
const Qn = (e) => e ? al(e) ? Nn(e) || e.proxy : Qn(e.parent) : null, bn = /* @__PURE__ */ me(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Qn(e.parent),
  $root: (e) => Qn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Cs(e),
  $forceUpdate: (e) => e.f || (e.f = () => xs(e.update)),
  $nextTick: (e) => e.n || (e.n = Wt.bind(e.proxy)),
  $watch: (e) => $o.bind(e)
}), ti = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: l, accessCache: o, type: i, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const b = o[t];
      if (b !== void 0)
        switch (b) {
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
        if (s !== G && z(s, t))
          return o[t] = 1, s[t];
        if (r !== G && z(r, t))
          return o[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && z(a, t))
          return o[t] = 3, l[t];
        if (n !== G && z(n, t))
          return o[t] = 4, n[t];
        Yn && (o[t] = 0);
      }
    }
    const d = bn[t];
    let h, p;
    if (d)
      return t === "$attrs" && Ce(e, "get", t), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== G && z(n, t))
      return o[t] = 4, n[t];
    if (p = c.config.globalProperties, z(p, t))
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return r !== G && z(r, t) ? (r[t] = n, !0) : s !== G && z(s, t) ? (s[t] = n, !0) : z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l } }, o) {
    let i;
    return !!n[o] || e !== G && z(e, o) || t !== G && z(t, o) || (i = l[0]) && z(i, o) || z(s, o) || z(bn, o) || z(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Yn = !0;
function ni(e) {
  const t = Cs(e), n = e.proxy, s = e.ctx;
  Yn = !1, t.beforeCreate && Ws(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: l,
    methods: o,
    watch: i,
    provide: c,
    inject: a,
    created: d,
    beforeMount: h,
    mounted: p,
    beforeUpdate: b,
    updated: O,
    activated: E,
    deactivated: A,
    beforeDestroy: R,
    beforeUnmount: B,
    destroyed: H,
    unmounted: j,
    render: V,
    renderTracked: J,
    renderTriggered: te,
    errorCaptured: M,
    serverPrefetch: P,
    expose: $,
    inheritAttrs: K,
    components: ne,
    directives: Se,
    filters: mt
  } = t;
  if (a && si(a, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const le in o) {
      const Q = o[le];
      D(Q) && (s[le] = Q.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    re(le) && (e.data = ys(le));
  }
  if (Yn = !0, l)
    for (const le in l) {
      const Q = l[le], Ee = D(Q) ? Q.bind(n, n) : D(Q.get) ? Q.get.bind(n, n) : Pe, vt = !D(Q) && D(Q.set) ? Q.set.bind(n) : Pe, k = Me({
        get: Ee,
        set: vt
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => k.value,
        set: (N) => k.value = N
      });
    }
  if (i)
    for (const le in i)
      el(i[le], s, n, le);
  if (c) {
    const le = D(c) ? c.call(n) : c;
    Reflect.ownKeys(le).forEach((Q) => {
      Bo(Q, le[Q]);
    });
  }
  d && Ws(d, e, "c");
  function pe(le, Q) {
    F(Q) ? Q.forEach((Ee) => le(Ee.bind(n))) : Q && le(Q.bind(n));
  }
  if (pe(qo, h), pe(Gt, p), pe(Jo, b), pe(Qo, O), pe(Vo, E), pe(zo, A), pe(Go, M), pe(Zo, J), pe(Xo, te), pe(Gr, B), pe(Mn, j), pe(Yo, P), F($))
    if ($.length) {
      const le = e.exposed || (e.exposed = {});
      $.forEach((Q) => {
        Object.defineProperty(le, Q, {
          get: () => n[Q],
          set: (Ee) => n[Q] = Ee
        });
      });
    } else
      e.exposed || (e.exposed = {});
  V && e.render === Pe && (e.render = V), K != null && (e.inheritAttrs = K), ne && (e.components = ne), Se && (e.directives = Se);
}
function si(e, t, n = Pe, s = !1) {
  F(e) && (e = Xn(e));
  for (const r in e) {
    const l = e[r];
    let o;
    re(l) ? "default" in l ? o = Bn(l.from || r, l.default, !0) : o = Bn(l.from || r) : o = Bn(l), fe(o) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Ws(e, t, n) {
  Ae(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function el(e, t, n, s) {
  const r = s.includes(".") ? Qr(n, s) : () => n[s];
  if (ae(e)) {
    const l = t[e];
    D(l) && et(r, l);
  } else if (D(e))
    et(r, e.bind(n));
  else if (re(e))
    if (F(e))
      e.forEach((l) => el(l, t, n, s));
    else {
      const l = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(l) && et(r, l, e);
    }
}
function Cs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: l, config: { optionMergeStrategies: o } } = e.appContext, i = l.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach((a) => wn(c, a, o, !0)), wn(c, t, o)), re(t) && l.set(t, c), c;
}
function wn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && wn(e, l, n, !0), r && r.forEach((o) => wn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = ri[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const ri = {
  data: qs,
  props: it,
  emits: it,
  methods: it,
  computed: it,
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  components: it,
  directives: it,
  watch: oi,
  provide: qs,
  inject: li
};
function qs(e, t) {
  return t ? e ? function() {
    return me(D(e) ? e.call(this, this) : e, D(t) ? t.call(this, this) : t);
  } : t : e;
}
function li(e, t) {
  return it(Xn(e), Xn(t));
}
function Xn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function it(e, t) {
  return e ? me(me(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function oi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function ii(e, t, n, s = !1) {
  const r = {}, l = {};
  gn(l, kn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), tl(e, t, r, l);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : yo(r) : e.type.props ? e.props = r : e.props = l, e.attrs = l;
}
function ci(e, t, n, s) {
  const { props: r, attrs: l, vnode: { patchFlag: o } } = e, i = q(r), [c] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let p = d[h];
        if (An(e.emitsOptions, p))
          continue;
        const b = t[p];
        if (c)
          if (z(l, p))
            b !== l[p] && (l[p] = b, a = !0);
          else {
            const O = Et(p);
            r[O] = Zn(c, i, O, b, e, !1);
          }
        else
          b !== l[p] && (l[p] = b, a = !0);
      }
    }
  } else {
    tl(e, t, r, l) && (a = !0);
    let d;
    for (const h in i)
      (!t || !z(t, h) && ((d = Mt(h)) === h || !z(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = Zn(c, i, h, void 0, e, !0)) : delete r[h]);
    if (l !== i)
      for (const h in l)
        (!t || !z(t, h) && !0) && (delete l[h], a = !0);
  }
  a && We(e, "set", "$attrs");
}
function tl(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let c in t) {
      if (an(c))
        continue;
      const a = t[c];
      let d;
      r && z(r, d = Et(c)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : An(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (l) {
    const c = q(n), a = i || G;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
      n[h] = Zn(r, c, h, a[h], e, !z(a, h));
    }
  }
  return o;
}
function Zn(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = z(o, "default");
    if (i && s === void 0) {
      const c = o.default;
      if (o.type !== Function && D(c)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (Tt(r), s = a[n] = c.call(null, t), ht());
      } else
        s = c;
    }
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === Mt(n)) && (s = !0));
  }
  return s;
}
function nl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let c = !1;
  if (!D(e)) {
    const d = (h) => {
      c = !0;
      const [p, b] = nl(h, t, !0);
      me(o, p), b && i.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !c)
    return re(e) && s.set(e, bt), bt;
  if (F(l))
    for (let d = 0; d < l.length; d++) {
      const h = Et(l[d]);
      Js(h) && (o[h] = G);
    }
  else if (l)
    for (const d in l) {
      const h = Et(d);
      if (Js(h)) {
        const p = l[d], b = o[h] = F(p) || D(p) ? { type: p } : p;
        if (b) {
          const O = Xs(Boolean, b.type), E = Xs(String, b.type);
          b[0] = O > -1, b[1] = E < 0 || O < E, (O > -1 || z(b, "default")) && i.push(h);
        }
      }
    }
  const a = [o, i];
  return re(e) && s.set(e, a), a;
}
function Js(e) {
  return e[0] !== "$";
}
function Qs(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Ys(e, t) {
  return Qs(e) === Qs(t);
}
function Xs(e, t) {
  return F(t) ? t.findIndex((n) => Ys(n, e)) : D(t) && Ys(t, e) ? 0 : -1;
}
const sl = (e) => e[0] === "_" || e === "$stable", Es = (e) => F(e) ? e.map($e) : [$e(e)], ui = (e, t, n) => {
  if (t._n)
    return t;
  const s = Mo((...r) => Es(t(...r)), n);
  return s._c = !1, s;
}, rl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (sl(r))
      continue;
    const l = e[r];
    if (D(l))
      t[r] = ui(r, l, s);
    else if (l != null) {
      const o = Es(l);
      t[r] = () => o;
    }
  }
}, ll = (e, t) => {
  const n = Es(t);
  e.slots.default = () => n;
}, ai = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = q(t), gn(t, "_", n)) : rl(t, e.slots = {});
  } else
    e.slots = {}, t && ll(e, t);
  gn(e.slots, kn, 1);
}, fi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = G;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (me(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, rl(t, r)), o = t;
  } else
    t && (ll(e, t), o = { default: 1 });
  if (l)
    for (const i in r)
      !sl(i) && !(i in o) && delete r[i];
};
function ol() {
  return {
    app: null,
    config: {
      isNativeTag: Ll,
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
let di = 0;
function hi(e, t) {
  return function(s, r = null) {
    D(s) || (s = Object.assign({}, s)), r != null && !re(r) && (r = null);
    const l = ol(), o = /* @__PURE__ */ new Set();
    let i = !1;
    const c = l.app = {
      _uid: di++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: Mi,
      get config() {
        return l.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && D(a.install) ? (o.add(a), a.install(c, ...d)) : D(a) && (o.add(a), a(c, ...d))), c;
      },
      mixin(a) {
        return l.mixins.includes(a) || l.mixins.push(a), c;
      },
      component(a, d) {
        return d ? (l.components[a] = d, c) : l.components[a];
      },
      directive(a, d) {
        return d ? (l.directives[a] = d, c) : l.directives[a];
      },
      mount(a, d, h) {
        if (!i) {
          const p = ze(s, r);
          return p.appContext = l, d && t ? t(p, a) : e(p, a, h), i = !0, c._container = a, a.__vue_app__ = c, Nn(p.component) || p.component.proxy;
        }
      },
      unmount() {
        i && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return l.provides[a] = d, c;
      }
    };
    return c;
  };
}
function Gn(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((p, b) => Gn(p, t && (F(t) ? t[b] : t), n, s, r));
    return;
  }
  if (dn(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Nn(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: c } = e, a = t && t.r, d = i.refs === G ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== c && (ae(a) ? (d[a] = null, z(h, a) && (h[a] = null)) : fe(a) && (a.value = null)), D(c))
    Ge(c, i, 12, [o, d]);
  else {
    const p = ae(c), b = fe(c);
    if (p || b) {
      const O = () => {
        if (e.f) {
          const E = p ? d[c] : c.value;
          r ? F(E) && fs(E, l) : F(E) ? E.includes(l) || E.push(l) : p ? (d[c] = [l], z(h, c) && (h[c] = d[c])) : (c.value = [l], e.k && (d[e.k] = c.value));
        } else
          p ? (d[c] = o, z(h, c) && (h[c] = o)) : b && (c.value = o, e.k && (d[e.k] = o));
      };
      o ? (O.id = -1, be(O, n)) : O();
    }
  }
}
const be = jo;
function pi(e) {
  return gi(e);
}
function gi(e, t) {
  const n = Ul();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: l, createElement: o, createText: i, createComment: c, setText: a, setElementText: d, parentNode: h, nextSibling: p, setScopeId: b = Pe, cloneNode: O, insertStaticContent: E } = e, A = (u, f, g, v = null, m = null, w = null, C = !1, _ = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !ut(u, f) && (v = De(u), ie(u, m, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: S, shapeFlag: T } = f;
    switch (y) {
      case Ts:
        R(u, f, g, v);
        break;
      case Le:
        B(u, f, g, v);
        break;
      case $n:
        u == null && H(f, g, v, C);
        break;
      case de:
        Se(u, f, g, v, m, w, C, _, x);
        break;
      default:
        T & 1 ? J(u, f, g, v, m, w, C, _, x) : T & 6 ? mt(u, f, g, v, m, w, C, _, x) : (T & 64 || T & 128) && y.process(u, f, g, v, m, w, C, _, x, Qe);
    }
    S != null && m && Gn(S, u && u.ref, w, f || u, !f);
  }, R = (u, f, g, v) => {
    if (u == null)
      s(f.el = i(f.children), g, v);
    else {
      const m = f.el = u.el;
      f.children !== u.children && a(m, f.children);
    }
  }, B = (u, f, g, v) => {
    u == null ? s(f.el = c(f.children || ""), g, v) : f.el = u.el;
  }, H = (u, f, g, v) => {
    [u.el, u.anchor] = E(u.children, f, g, v, u.el, u.anchor);
  }, j = ({ el: u, anchor: f }, g, v) => {
    let m;
    for (; u && u !== f; )
      m = p(u), s(u, g, v), u = m;
    s(f, g, v);
  }, V = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = p(u), r(u), u = g;
    r(f);
  }, J = (u, f, g, v, m, w, C, _, x) => {
    C = C || f.type === "svg", u == null ? te(f, g, v, m, w, C, _, x) : $(u, f, m, w, C, _, x);
  }, te = (u, f, g, v, m, w, C, _) => {
    let x, y;
    const { type: S, props: T, shapeFlag: I, transition: L, patchFlag: W, dirs: Y } = u;
    if (u.el && O !== void 0 && W === -1)
      x = u.el = O(u.el);
    else {
      if (x = u.el = o(u.type, w, T && T.is, T), I & 8 ? d(x, u.children) : I & 16 && P(u.children, x, null, v, m, w && S !== "foreignObject", C, _), Y && rt(u, null, v, "created"), T) {
        for (const se in T)
          se !== "value" && !an(se) && l(x, se, null, T[se], w, u.children, v, m, _e);
        "value" in T && l(x, "value", null, T.value), (y = T.onVnodeBeforeMount) && je(y, v, u);
      }
      M(x, u, u.scopeId, C, v);
    }
    Y && rt(u, null, v, "beforeMount");
    const X = (!m || m && !m.pendingBranch) && L && !L.persisted;
    X && L.beforeEnter(x), s(x, f, g), ((y = T && T.onVnodeMounted) || X || Y) && be(() => {
      y && je(y, v, u), X && L.enter(x), Y && rt(u, null, v, "mounted");
    }, m);
  }, M = (u, f, g, v, m) => {
    if (g && b(u, g), v)
      for (let w = 0; w < v.length; w++)
        b(u, v[w]);
    if (m) {
      let w = m.subTree;
      if (f === w) {
        const C = m.vnode;
        M(u, C, C.scopeId, C.slotScopeIds, m.parent);
      }
    }
  }, P = (u, f, g, v, m, w, C, _, x = 0) => {
    for (let y = x; y < u.length; y++) {
      const S = u[y] = _ ? Xe(u[y]) : $e(u[y]);
      A(null, S, f, g, v, m, w, C, _);
    }
  }, $ = (u, f, g, v, m, w, C) => {
    const _ = f.el = u.el;
    let { patchFlag: x, dynamicChildren: y, dirs: S } = f;
    x |= u.patchFlag & 16;
    const T = u.props || G, I = f.props || G;
    let L;
    g && lt(g, !1), (L = I.onVnodeBeforeUpdate) && je(L, g, f, u), S && rt(f, u, g, "beforeUpdate"), g && lt(g, !0);
    const W = m && f.type !== "foreignObject";
    if (y ? K(u.dynamicChildren, y, _, g, v, W, w) : C || Ee(u, f, _, null, g, v, W, w, !1), x > 0) {
      if (x & 16)
        ne(_, f, T, I, g, v, m);
      else if (x & 2 && T.class !== I.class && l(_, "class", null, I.class, m), x & 4 && l(_, "style", T.style, I.style, m), x & 8) {
        const Y = f.dynamicProps;
        for (let X = 0; X < Y.length; X++) {
          const se = Y[X], Ie = T[se], yt = I[se];
          (yt !== Ie || se === "value") && l(_, se, Ie, yt, m, u.children, g, v, _e);
        }
      }
      x & 1 && u.children !== f.children && d(_, f.children);
    } else
      !C && y == null && ne(_, f, T, I, g, v, m);
    ((L = I.onVnodeUpdated) || S) && be(() => {
      L && je(L, g, f, u), S && rt(f, u, g, "updated");
    }, v);
  }, K = (u, f, g, v, m, w, C) => {
    for (let _ = 0; _ < f.length; _++) {
      const x = u[_], y = f[_], S = x.el && (x.type === de || !ut(x, y) || x.shapeFlag & 70) ? h(x.el) : g;
      A(x, y, S, null, v, m, w, C, !0);
    }
  }, ne = (u, f, g, v, m, w, C) => {
    if (g !== v) {
      for (const _ in v) {
        if (an(_))
          continue;
        const x = v[_], y = g[_];
        x !== y && _ !== "value" && l(u, _, y, x, C, f.children, m, w, _e);
      }
      if (g !== G)
        for (const _ in g)
          !an(_) && !(_ in v) && l(u, _, g[_], null, C, f.children, m, w, _e);
      "value" in v && l(u, "value", g.value, v.value);
    }
  }, Se = (u, f, g, v, m, w, C, _, x) => {
    const y = f.el = u ? u.el : i(""), S = f.anchor = u ? u.anchor : i("");
    let { patchFlag: T, dynamicChildren: I, slotScopeIds: L } = f;
    L && (_ = _ ? _.concat(L) : L), u == null ? (s(y, g, v), s(S, g, v), P(f.children, g, S, m, w, C, _, x)) : T > 0 && T & 64 && I && u.dynamicChildren ? (K(u.dynamicChildren, I, g, m, w, C, _), (f.key != null || m && f === m.subTree) && Os(u, f, !0)) : Ee(u, f, g, S, m, w, C, _, x);
  }, mt = (u, f, g, v, m, w, C, _, x) => {
    f.slotScopeIds = _, u == null ? f.shapeFlag & 512 ? m.ctx.activate(f, g, v, C, x) : Pt(f, g, v, m, w, C, x) : pe(u, f, x);
  }, Pt = (u, f, g, v, m, w, C) => {
    const _ = u.component = Oi(u, v, m);
    if (In(u) && (_.ctx.renderer = Qe), Ti(_), _.asyncDep) {
      if (m && m.registerDep(_, le), !u.el) {
        const x = _.subTree = ze(Le);
        B(null, x, f, g);
      }
      return;
    }
    le(_, u, f, g, m, w, C);
  }, pe = (u, f, g) => {
    const v = f.component = u.component;
    if (Po(u, f, g))
      if (v.asyncDep && !v.asyncResolved) {
        Q(v, f, g);
        return;
      } else
        v.next = f, Ao(v.update), v.update();
    else
      f.el = u.el, v.vnode = f;
  }, le = (u, f, g, v, m, w, C) => {
    const _ = () => {
      if (u.isMounted) {
        let { next: S, bu: T, u: I, parent: L, vnode: W } = u, Y = S, X;
        lt(u, !1), S ? (S.el = W.el, Q(u, S, C)) : S = W, T && fn(T), (X = S.props && S.props.onVnodeBeforeUpdate) && je(X, L, S, W), lt(u, !0);
        const se = jn(u), Ie = u.subTree;
        u.subTree = se, A(
          Ie,
          se,
          h(Ie.el),
          De(Ie),
          u,
          m,
          w
        ), S.el = se.el, Y === null && Lo(u, se.el), I && be(I, m), (X = S.props && S.props.onVnodeUpdated) && be(() => je(X, L, S, W), m);
      } else {
        let S;
        const { el: T, props: I } = f, { bm: L, m: W, parent: Y } = u, X = dn(f);
        if (lt(u, !1), L && fn(L), !X && (S = I && I.onVnodeBeforeMount) && je(S, Y, f), lt(u, !0), T && Ln) {
          const se = () => {
            u.subTree = jn(u), Ln(T, u.subTree, u, m, null);
          };
          X ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && se()
          ) : se();
        } else {
          const se = u.subTree = jn(u);
          A(null, se, g, v, u, m, w), f.el = se.el;
        }
        if (W && be(W, m), !X && (S = I && I.onVnodeMounted)) {
          const se = f;
          be(() => je(S, Y, se), m);
        }
        (f.shapeFlag & 256 || Y && dn(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && be(u.a, m), u.isMounted = !0, f = g = v = null;
      }
    }, x = u.effect = new ps(
      _,
      () => xs(y),
      u.scope
    ), y = u.update = () => x.run();
    y.id = u.uid, lt(u, !0), y();
  }, Q = (u, f, g) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, ci(u, f.props, v, g), fi(u, f.children, g), kt(), Ds(), Nt();
  }, Ee = (u, f, g, v, m, w, C, _, x = !1) => {
    const y = u && u.children, S = u ? u.shapeFlag : 0, T = f.children, { patchFlag: I, shapeFlag: L } = f;
    if (I > 0) {
      if (I & 128) {
        k(y, T, g, v, m, w, C, _, x);
        return;
      } else if (I & 256) {
        vt(y, T, g, v, m, w, C, _, x);
        return;
      }
    }
    L & 8 ? (S & 16 && _e(y, m, w), T !== y && d(g, T)) : S & 16 ? L & 16 ? k(y, T, g, v, m, w, C, _, x) : _e(y, m, w, !0) : (S & 8 && d(g, ""), L & 16 && P(T, g, v, m, w, C, _, x));
  }, vt = (u, f, g, v, m, w, C, _, x) => {
    u = u || bt, f = f || bt;
    const y = u.length, S = f.length, T = Math.min(y, S);
    let I;
    for (I = 0; I < T; I++) {
      const L = f[I] = x ? Xe(f[I]) : $e(f[I]);
      A(u[I], L, g, null, m, w, C, _, x);
    }
    y > S ? _e(u, m, w, !0, !1, T) : P(f, g, v, m, w, C, _, x, T);
  }, k = (u, f, g, v, m, w, C, _, x) => {
    let y = 0;
    const S = f.length;
    let T = u.length - 1, I = S - 1;
    for (; y <= T && y <= I; ) {
      const L = u[y], W = f[y] = x ? Xe(f[y]) : $e(f[y]);
      if (ut(L, W))
        A(L, W, g, null, m, w, C, _, x);
      else
        break;
      y++;
    }
    for (; y <= T && y <= I; ) {
      const L = u[T], W = f[I] = x ? Xe(f[I]) : $e(f[I]);
      if (ut(L, W))
        A(L, W, g, null, m, w, C, _, x);
      else
        break;
      T--, I--;
    }
    if (y > T) {
      if (y <= I) {
        const L = I + 1, W = L < S ? f[L].el : v;
        for (; y <= I; )
          A(null, f[y] = x ? Xe(f[y]) : $e(f[y]), g, W, m, w, C, _, x), y++;
      }
    } else if (y > I)
      for (; y <= T; )
        ie(u[y], m, w, !0), y++;
    else {
      const L = y, W = y, Y = /* @__PURE__ */ new Map();
      for (y = W; y <= I; y++) {
        const we = f[y] = x ? Xe(f[y]) : $e(f[y]);
        we.key != null && Y.set(we.key, y);
      }
      let X, se = 0;
      const Ie = I - W + 1;
      let yt = !1, Fs = 0;
      const Rt = new Array(Ie);
      for (y = 0; y < Ie; y++)
        Rt[y] = 0;
      for (y = L; y <= T; y++) {
        const we = u[y];
        if (se >= Ie) {
          ie(we, m, w, !0);
          continue;
        }
        let Re;
        if (we.key != null)
          Re = Y.get(we.key);
        else
          for (X = W; X <= I; X++)
            if (Rt[X - W] === 0 && ut(we, f[X])) {
              Re = X;
              break;
            }
        Re === void 0 ? ie(we, m, w, !0) : (Rt[Re - W] = y + 1, Re >= Fs ? Fs = Re : yt = !0, A(we, f[Re], g, null, m, w, C, _, x), se++);
      }
      const Ms = yt ? mi(Rt) : bt;
      for (X = Ms.length - 1, y = Ie - 1; y >= 0; y--) {
        const we = W + y, Re = f[we], ks = we + 1 < S ? f[we + 1].el : v;
        Rt[y] === 0 ? A(null, Re, g, ks, m, w, C, _, x) : yt && (X < 0 || y !== Ms[X] ? N(Re, g, ks, 2) : X--);
      }
    }
  }, N = (u, f, g, v, m = null) => {
    const { el: w, type: C, transition: _, children: x, shapeFlag: y } = u;
    if (y & 6) {
      N(u.component.subTree, f, g, v);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, g, v);
      return;
    }
    if (y & 64) {
      C.move(u, f, g, Qe);
      return;
    }
    if (C === de) {
      s(w, f, g);
      for (let T = 0; T < x.length; T++)
        N(x[T], f, g, v);
      s(u.anchor, f, g);
      return;
    }
    if (C === $n) {
      j(u, f, g);
      return;
    }
    if (v !== 2 && y & 1 && _)
      if (v === 0)
        _.beforeEnter(w), s(w, f, g), be(() => _.enter(w), m);
      else {
        const { leave: T, delayLeave: I, afterLeave: L } = _, W = () => s(w, f, g), Y = () => {
          T(w, () => {
            W(), L && L();
          });
        };
        I ? I(w, W, Y) : Y();
      }
    else
      s(w, f, g);
  }, ie = (u, f, g, v = !1, m = !1) => {
    const { type: w, props: C, ref: _, children: x, dynamicChildren: y, shapeFlag: S, patchFlag: T, dirs: I } = u;
    if (_ != null && Gn(_, null, g, u, !0), S & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const L = S & 1 && I, W = !dn(u);
    let Y;
    if (W && (Y = C && C.onVnodeBeforeUnmount) && je(Y, f, u), S & 6)
      ye(u.component, g, v);
    else {
      if (S & 128) {
        u.suspense.unmount(g, v);
        return;
      }
      L && rt(u, null, f, "beforeUnmount"), S & 64 ? u.type.remove(u, f, g, m, Qe, v) : y && (w !== de || T > 0 && T & 64) ? _e(y, f, g, !1, !0) : (w === de && T & 384 || !m && S & 16) && _e(x, f, g), v && Je(u);
    }
    (W && (Y = C && C.onVnodeUnmounted) || L) && be(() => {
      Y && je(Y, f, u), L && rt(u, null, f, "unmounted");
    }, g);
  }, Je = (u) => {
    const { type: f, el: g, anchor: v, transition: m } = u;
    if (f === de) {
      ue(g, v);
      return;
    }
    if (f === $n) {
      V(u);
      return;
    }
    const w = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const { leave: C, delayLeave: _ } = m, x = () => C(g, w);
      _ ? _(u.el, w, x) : x();
    } else
      w();
  }, ue = (u, f) => {
    let g;
    for (; u !== f; )
      g = p(u), r(u), u = g;
    r(f);
  }, ye = (u, f, g) => {
    const { bum: v, scope: m, update: w, subTree: C, um: _ } = u;
    v && fn(v), m.stop(), w && (w.active = !1, ie(C, u, f, g)), _ && be(_, f), be(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, _e = (u, f, g, v = !1, m = !1, w = 0) => {
    for (let C = w; C < u.length; C++)
      ie(u[C], f, g, v, m);
  }, De = (u) => u.shapeFlag & 6 ? De(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el), Lt = (u, f, g) => {
    u == null ? f._vnode && ie(f._vnode, null, null, !0) : A(f._vnode || null, u, f, null, null, null, g), Ds(), zr(), f._vnode = u;
  }, Qe = {
    p: A,
    um: ie,
    m: N,
    r: Je,
    mt: Pt,
    mc: P,
    pc: Ee,
    pbc: K,
    n: De,
    o: e
  };
  let Pn, Ln;
  return t && ([Pn, Ln] = t(Qe)), {
    render: Lt,
    hydrate: Pn,
    createApp: hi(Lt, Pn)
  };
}
function lt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Os(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (F(s) && F(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = Xe(r[l]), i.el = o.el), n || Os(o, i));
    }
}
function mi(e) {
  const t = e.slice(), n = [0];
  let s, r, l, o, i;
  const c = e.length;
  for (s = 0; s < c; s++) {
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
const vi = (e) => e.__isTeleport, $t = (e) => e && (e.disabled || e.disabled === ""), Zs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, es = (e, t) => {
  const n = e && e.to;
  return ae(n) ? t ? t(n) : null : n;
}, yi = {
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, c, a) {
    const { mc: d, pc: h, pbc: p, o: { insert: b, querySelector: O, createText: E, createComment: A } } = a, R = $t(t.props);
    let { shapeFlag: B, children: H, dynamicChildren: j } = t;
    if (e == null) {
      const V = t.el = E(""), J = t.anchor = E("");
      b(V, n, s), b(J, n, s);
      const te = t.target = es(t.props, O), M = t.targetAnchor = E("");
      te && (b(M, te), o = o || Zs(te));
      const P = ($, K) => {
        B & 16 && d(H, $, K, r, l, o, i, c);
      };
      R ? P(n, J) : te && P(te, M);
    } else {
      t.el = e.el;
      const V = t.anchor = e.anchor, J = t.target = e.target, te = t.targetAnchor = e.targetAnchor, M = $t(e.props), P = M ? n : J, $ = M ? V : te;
      if (o = o || Zs(J), j ? (p(e.dynamicChildren, j, P, r, l, o, i), Os(e, t, !0)) : c || h(e, t, P, $, r, l, o, i, !1), R)
        M || cn(t, n, V, a, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const K = t.target = es(t.props, O);
        K && cn(t, K, null, a, 0);
      } else
        M && cn(t, J, te, a, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: h, props: p } = e;
    if (h && l(d), (o || !$t(p)) && (l(a), i & 16))
      for (let b = 0; b < c.length; b++) {
        const O = c[b];
        r(O, t, n, !0, !!O.dynamicChildren);
      }
  },
  move: cn,
  hydrate: _i
};
function cn(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: c, children: a, props: d } = e, h = l === 2;
  if (h && s(o, t, n), (!h || $t(d)) && c & 16)
    for (let p = 0; p < a.length; p++)
      r(a[p], t, n, 2);
  h && s(i, t, n);
}
function _i(e, t, n, s, r, l, { o: { nextSibling: o, parentNode: i, querySelector: c } }, a) {
  const d = t.target = es(t.props, c);
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if ($t(t.props))
        t.anchor = a(o(e), t, i(e), n, s, r, l), t.targetAnchor = h;
      else {
        t.anchor = o(e);
        let p = h;
        for (; p; )
          if (p = o(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, d._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        a(h, t, d, n, s, r, l);
      }
  }
  return t.anchor && o(t.anchor);
}
const ts = yi, de = Symbol(void 0), Ts = Symbol(void 0), Le = Symbol(void 0), $n = Symbol(void 0), Ut = [];
let Ne = null;
function Z(e = !1) {
  Ut.push(Ne = e ? null : []);
}
function bi() {
  Ut.pop(), Ne = Ut[Ut.length - 1] || null;
}
let Qt = 1;
function Gs(e) {
  Qt += e;
}
function il(e) {
  return e.dynamicChildren = Qt > 0 ? Ne || bt : null, bi(), Qt > 0 && Ne && Ne.push(e), e;
}
function oe(e, t, n, s, r, l) {
  return il(ce(e, t, n, s, r, l, !0));
}
function xn(e, t, n, s, r) {
  return il(ze(e, t, n, s, r, !0));
}
function wi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kn = "__vInternal", cl = ({ key: e }) => e != null ? e : null, pn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ae(e) || fe(e) || D(e) ? { i: ke, r: e, k: t, f: !!n } : e : null;
function ce(e, t = null, n = null, s = 0, r = null, l = e === de ? 0 : 1, o = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && pn(t),
    scopeId: Jr,
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
  return i ? (Ss(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16), Qt > 0 && !o && Ne && (c.patchFlag > 0 || l & 6) && c.patchFlag !== 32 && Ne.push(c), c;
}
const ze = xi;
function xi(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === ei) && (e = Le), wi(e)) {
    const i = nt(e, t, !0);
    return n && Ss(i, n), Qt > 0 && !l && Ne && (i.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = i : Ne.push(i)), i.patchFlag |= -2, i;
  }
  if (Fi(e) && (e = e.__vccOpts), t) {
    t = As(t);
    let { class: i, style: c } = t;
    i && !ae(i) && (t.class = It(i)), re(c) && (Rr(c) && !F(c) && (c = me({}, c)), t.style = St(c));
  }
  const o = ae(e) ? 1 : Ro(e) ? 128 : vi(e) ? 64 : re(e) ? 4 : D(e) ? 2 : 0;
  return ce(e, t, n, s, r, o, l, !0);
}
function As(e) {
  return e ? Rr(e) || kn in e ? me({}, e) : e : null;
}
function nt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: l, children: o } = e, i = t ? Yt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && cl(i),
    ref: t && t.ref ? n && r ? F(r) ? r.concat(pn(t)) : [r, pn(t)] : pn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== de ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ns(e = " ", t = 0) {
  return ze(Ts, null, e, t);
}
function Te(e = "", t = !1) {
  return t ? (Z(), xn(Le, null, e)) : ze(Le, null, e);
}
function $e(e) {
  return e == null || typeof e == "boolean" ? ze(Le) : F(e) ? ze(
    de,
    null,
    e.slice()
  ) : typeof e == "object" ? Xe(e) : ze(Ts, null, String(e));
}
function Xe(e) {
  return e.el === null || e.memo ? e : nt(e);
}
function Ss(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ss(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(kn in t) ? t._ctx = ke : r === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    D(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = It([t.class, s.class]));
      else if (r === "style")
        t.style = St([t.style, s.style]);
      else if (Cn(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(F(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ae(e, t, 7, [
    n,
    s
  ]);
}
const Ci = ol();
let Ei = 0;
function Oi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Ci, l = {
    uid: Ei++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Dl(!0),
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
    propsOptions: nl(s, r),
    emitsOptions: qr(s, r),
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Fo.bind(null, l), e.ce && e.ce(l), l;
}
let he = null;
const ul = () => he || ke, Tt = (e) => {
  he = e, e.scope.on();
}, ht = () => {
  he && he.scope.off(), he = null;
};
function al(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Ti(e, t = !1) {
  Xt = t;
  const { props: n, children: s } = e.vnode, r = al(e);
  ii(e, n, r, t), ai(e, s);
  const l = r ? Ai(e, t) : void 0;
  return Xt = !1, l;
}
function Ai(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = jr(new Proxy(e.ctx, ti));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ii(e) : null;
    Tt(e), kt();
    const l = Ge(s, e, 0, [e.props, r]);
    if (Nt(), ht(), wr(l)) {
      if (l.then(ht, ht), t)
        return l.then((o) => {
          er(e, o, t);
        }).catch((o) => {
          Tn(o, e, 0);
        });
      e.asyncDep = l;
    } else
      er(e, l, t);
  } else
    fl(e, t);
}
function er(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Ur(t)), fl(e, n);
}
let tr;
function fl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && tr && !s.render) {
      const r = s.template || Cs(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = me(me({
          isCustomElement: l,
          delimiters: i
        }, o), c);
        s.render = tr(r, a);
      }
    }
    e.render = s.render || Pe;
  }
  Tt(e), kt(), ni(e), Nt(), ht();
}
function Si(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ce(e, "get", "$attrs"), t[n];
    }
  });
}
function Ii(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Si(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Nn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ur(jr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in bn)
          return bn[n](e);
      }
    }));
}
function Fi(e) {
  return D(e) && "__vccOpts" in e;
}
const Me = (e, t) => Eo(e, t, Xt), Mi = "3.2.39", ki = "http://www.w3.org/2000/svg", at = typeof document < "u" ? document : null, nr = at && /* @__PURE__ */ at.createElement("template"), Ni = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? at.createElementNS(ki, e) : at.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => at.createTextNode(e),
  createComment: (e) => at.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => at.querySelector(e),
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
      nr.innerHTML = s ? `<svg>${e}</svg>` : e;
      const i = nr.content;
      if (s) {
        const c = i.firstChild;
        for (; c.firstChild; )
          i.appendChild(c.firstChild);
        i.removeChild(c);
      }
      t.insertBefore(i, n);
    }
    return [
      o ? o.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Pi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Li(e, t, n) {
  const s = e.style, r = ae(n);
  if (n && !r) {
    for (const l in n)
      ss(s, l, n[l]);
    if (t && !ae(t))
      for (const l in t)
        n[l] == null && ss(s, l, "");
  } else {
    const l = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = l);
  }
}
const sr = /\s*!important$/;
function ss(e, t, n) {
  if (F(n))
    n.forEach((s) => ss(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ri(e, t);
    sr.test(n) ? e.setProperty(Mt(s), n.replace(sr, ""), "important") : e[s] = n;
  }
}
const rr = ["Webkit", "Moz", "ms"], Un = {};
function Ri(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let s = Et(t);
  if (s !== "filter" && s in e)
    return Un[t] = s;
  s = Er(s);
  for (let r = 0; r < rr.length; r++) {
    const l = rr[r] + s;
    if (l in e)
      return Un[t] = l;
  }
  return t;
}
const lr = "http://www.w3.org/1999/xlink";
function ji(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(lr, t.slice(6, t.length)) : e.setAttributeNS(lr, t, n);
  else {
    const l = Fl(t);
    n == null || l && !yr(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : n);
  }
}
function Bi(e, t, n, s, r, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, l), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n == null ? "" : n;
    (e.value !== c || e.tagName === "OPTION") && (e.value = c), n == null && e.removeAttribute(t);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = yr(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(t);
}
const [dl, Hi] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let rs = 0;
const $i = /* @__PURE__ */ Promise.resolve(), Ui = () => {
  rs = 0;
}, Di = () => rs || ($i.then(Ui), rs = dl());
function Ve(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ki(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Vi(e, t, n, s, r = null) {
  const l = e._vei || (e._vei = {}), o = l[t];
  if (s && o)
    o.value = s;
  else {
    const [i, c] = zi(t);
    if (s) {
      const a = l[t] = Wi(s, r);
      Ve(e, i, a, c);
    } else
      o && (Ki(e, i, o, c), l[t] = void 0);
  }
}
const or = /(?:Once|Passive|Capture)$/;
function zi(e) {
  let t;
  if (or.test(e)) {
    t = {};
    let s;
    for (; s = e.match(or); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
function Wi(e, t) {
  const n = (s) => {
    const r = s.timeStamp || dl();
    (Hi || r >= n.attached - 1) && Ae(qi(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Di(), n;
}
function qi(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const ir = /^on[a-z]/, Ji = (e, t, n, s, r = !1, l, o, i, c) => {
  t === "class" ? Pi(e, s, r) : t === "style" ? Li(e, n, s) : Cn(t) ? as(t) || Vi(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qi(e, t, s, r)) ? Bi(e, t, s, l, o, i, c) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ji(e, t, s, r));
};
function Qi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && ir.test(t) && D(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ir.test(t) && ae(n) ? !1 : t in e;
}
const Yi = {
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
Ko.props;
const st = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (n) => fn(t, n) : t;
};
function Xi(e) {
  e.target.composing = !0;
}
function cr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ls = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = st(r);
    const l = s || r.props && r.props.type === "number";
    Ve(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = mn(i)), e._assign(i);
    }), n && Ve(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ve(e, "compositionstart", Xi), Ve(e, "compositionend", cr), Ve(e, "change", cr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e._assign = st(l), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && mn(e.value) === t))
      return;
    const o = t == null ? "" : t;
    e.value !== o && (e.value = o);
  }
}, Zi = {
  deep: !0,
  created(e, t, n) {
    e._assign = st(n), Ve(e, "change", () => {
      const s = e._modelValue, r = At(e), l = e.checked, o = e._assign;
      if (F(s)) {
        const i = us(s, r), c = i !== -1;
        if (l && !c)
          o(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (Ft(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(hl(e, l));
    });
  },
  mounted: ur,
  beforeUpdate(e, t, n) {
    e._assign = st(n), ur(e, t, n);
  }
};
function ur(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, F(t) ? e.checked = us(t, s.props.value) > -1 : Ft(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = gt(t, hl(e, !0)));
}
const Gi = {
  created(e, { value: t }, n) {
    e.checked = gt(t, n.props.value), e._assign = st(n), Ve(e, "change", () => {
      e._assign(At(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = st(s), t !== n && (e.checked = gt(t, s.props.value));
  }
}, ec = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Ft(t);
    Ve(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? mn(At(o)) : At(o));
      e._assign(e.multiple ? r ? new Set(l) : l : l[0]);
    }), e._assign = st(s);
  },
  mounted(e, { value: t }) {
    ar(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = st(n);
  },
  updated(e, { value: t }) {
    ar(e, t);
  }
};
function ar(e, t) {
  const n = e.multiple;
  if (!(n && !F(t) && !Ft(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const l = e.options[s], o = At(l);
      if (n)
        F(t) ? l.selected = us(t, o) > -1 : l.selected = t.has(o);
      else if (gt(At(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function At(e) {
  return "_value" in e ? e._value : e.value;
}
function hl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const tc = {
  created(e, t, n) {
    un(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    un(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    un(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    un(e, t, n, s, "updated");
  }
};
function nc(e, t) {
  switch (e) {
    case "SELECT":
      return ec;
    case "TEXTAREA":
      return ls;
    default:
      switch (t) {
        case "checkbox":
          return Zi;
        case "radio":
          return Gi;
        default:
          return ls;
      }
  }
}
function un(e, t, n, s, r) {
  const o = nc(e.tagName, n.props && n.props.type)[r];
  o && o(e, t, n, s);
}
const sc = ["ctrl", "shift", "alt", "meta"], rc = {
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
  exact: (e, t) => sc.some((n) => e[`${n}Key`] && !t.includes(n))
}, pl = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const l = rc[t[r]];
    if (l && l(n, t))
      return;
  }
  return e(n, ...s);
}, gl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : jt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), jt(e, !0), s.enter(e)) : s.leave(e, () => {
      jt(e, !1);
    }) : jt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    jt(e, t);
  }
};
function jt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const lc = /* @__PURE__ */ me({ patchProp: Ji }, Ni);
let fr;
function oc() {
  return fr || (fr = pi(lc));
}
const ml = (...e) => {
  const t = oc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = ic(s);
    if (!r)
      return;
    const l = t._component;
    !D(l) && !l.render && !l.template && (l.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function ic(e) {
  return ae(e) ? document.querySelector(e) : e;
}
var dr;
const en = typeof window < "u";
en && ((dr = window == null ? void 0 : window.navigator) == null ? void 0 : dr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cc(e) {
  return typeof e == "function" ? e() : U(e);
}
function uc(e) {
  return e;
}
function ac(e) {
  return Vl() ? (zl(e), !0) : !1;
}
function fc(e, t = !0) {
  ul() ? Gt(e) : t ? e() : Wt(e);
}
function vl(e) {
  var t;
  const n = cc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dc = en ? window : void 0;
en && window.document;
en && window.navigator;
en && window.location;
function hc(e, t = !1) {
  const n = ee(), s = () => n.value = Boolean(e());
  return s(), fc(s, t), n;
}
const os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, is = "__vueuse_ssr_handlers__";
os[is] = os[is] || {};
os[is];
var hr = Object.getOwnPropertySymbols, pc = Object.prototype.hasOwnProperty, gc = Object.prototype.propertyIsEnumerable, mc = (e, t) => {
  var n = {};
  for (var s in e)
    pc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && hr)
    for (var s of hr(e))
      t.indexOf(s) < 0 && gc.call(e, s) && (n[s] = e[s]);
  return n;
};
function vc(e, t, n = {}) {
  const s = n, { window: r = dc } = s, l = mc(s, ["window"]);
  let o;
  const i = hc(() => r && "ResizeObserver" in r), c = () => {
    o && (o.disconnect(), o = void 0);
  }, a = et(() => vl(e), (h) => {
    c(), i.value && r && h && (o = new ResizeObserver(t), o.observe(h, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), a();
  };
  return ac(d), {
    isSupported: i,
    stop: d
  };
}
function yc(e, t = { width: 0, height: 0 }, n = {}) {
  const { box: s = "content-box" } = n, r = ee(t.width), l = ee(t.height);
  return vc(e, ([o]) => {
    const i = s === "border-box" ? o.borderBoxSize : s === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
    i ? (r.value = i.reduce((c, { inlineSize: a }) => c + a, 0), l.value = i.reduce((c, { blockSize: a }) => c + a, 0)) : (r.value = o.contentRect.width, l.value = o.contentRect.height);
  }, n), et(() => vl(e), (o) => {
    r.value = o ? t.width : 0, l.value = o ? t.height : 0;
  }), {
    width: r,
    height: l
  };
}
var pr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(pr || (pr = {}));
var _c = Object.defineProperty, gr = Object.getOwnPropertySymbols, bc = Object.prototype.hasOwnProperty, wc = Object.prototype.propertyIsEnumerable, mr = (e, t, n) => t in e ? _c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xc = (e, t) => {
  for (var n in t || (t = {}))
    bc.call(t, n) && mr(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      wc.call(t, n) && mr(e, n, t[n]);
  return e;
};
const Cc = {
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
xc({
  linear: uc
}, Cc);
function yl(e, t) {
  const n = ee(), s = yc(n), r = ee([]), l = _o(e), o = ee({ start: 0, end: 10 }), { itemHeight: i, overscan: c = 5 } = t, a = (B) => {
    if (typeof i == "number")
      return Math.ceil(B / i);
    const { start: H = 0 } = o.value;
    let j = 0, V = 0;
    for (let J = H; J < l.value.length; J++)
      if (j += i(J), j >= B) {
        V = J;
        break;
      }
    return V - H;
  }, d = (B) => {
    if (typeof i == "number")
      return Math.floor(B / i) + 1;
    let H = 0, j = 0;
    for (let V = 0; V < l.value.length; V++)
      if (H += i(V), H >= B) {
        j = V;
        break;
      }
    return j + 1;
  }, h = () => {
    const B = n.value;
    if (B) {
      const H = d(B.scrollTop), j = a(B.clientHeight), V = H - c, J = H + j + c;
      o.value = {
        start: V < 0 ? 0 : V,
        end: J > l.value.length ? l.value.length : J
      }, r.value = l.value.slice(o.value.start, o.value.end).map((te, M) => ({
        data: te,
        index: M + o.value.start
      }));
    }
  };
  et([s.width, s.height, e], () => {
    h();
  });
  const p = Me(() => typeof i == "number" ? l.value.length * i : l.value.reduce((B, H, j) => B + i(j), 0)), b = (B) => typeof i == "number" ? B * i : l.value.slice(0, B).reduce((j, V, J) => j + i(J), 0), O = (B) => {
    n.value && (n.value.scrollTop = b(B), h());
  }, E = Me(() => b(o.value.start)), A = Me(() => ({
    style: {
      width: "100%",
      height: `${p.value - E.value}px`,
      marginTop: `${E.value}px`
    }
  }));
  return {
    list: r,
    scrollTo: O,
    containerProps: {
      ref: n,
      onScroll: () => {
        h();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: A
  };
}
const ot = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, Ec = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const n = {
    defaultArray: e.value,
    get: () => e.value,
    push: (s, r, l = null) => {
      parseInt(s) == s && (s = parseInt(s));
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
let Oc = 1;
const _l = (e) => {
  e && (e.style.display = "none", Sl(e));
}, bl = (e, t, n, s) => {
  var c;
  const r = ee(/* @__PURE__ */ new Map());
  Jt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = ee([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, Jt(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: ot(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => ot(d.value)).filter((d) => d != null))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: ot(d.value), data: Object.assign({}, d.dataset) }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (l.value = [{ value: a, key: a }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(ot(a), ot(a));
  else
    s != null && r.value.set(ot(s), ot(s));
  Ec(l, (c = e == null ? void 0 : e.id) != null ? c : "extraselect_" + (++Oc).toString());
  const o = [];
  return r.value.forEach((a, d) => {
    o.push([d, a]);
  }), { options: l, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, d] of o)
      r.value.set(a, d);
  } };
};
ee({});
function Tc(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Is = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), wl(ee(n), "defaults");
}, wl = (e, t) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Is());
  const n = {
    defaultArray: e.value,
    list: () => e.value,
    get: (s) => {
      var r;
      return (r = e.value[s]) != null ? r : null;
    },
    push: (s, r) => {
      e.value[s] = r;
    }
  };
  window.ExtraSelectLocalization[t] = n, e.actions = n;
};
let Ac = 0;
const xl = (e, t) => {
  var s;
  return wl(t, (s = e == null ? void 0 : e.id) != null ? s : "extraselect_" + (++Ac).toString()), { propLocalization: t, t: (r, l = {}) => {
    var i;
    let o = (i = t.value[r]) != null ? i : window.ExtraSelectLocalization.defaults.get(r);
    return o == null && (window.ExtraSelectLocalization.defaults.push(r, r), o = r), Tc(o, l);
  } };
}, vr = async function(e, t = null, n = {}) {
  var l;
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...(l = n.headers) != null ? l : {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, Cl = (e, t, n, s, r, l, o = "limited", i = {}) => {
  const c = ee(0), a = ee(!1), d = Me(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      Jt((p) => {
        if (s.value.length >= r) {
          let b = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              b = !h.includes(s.value);
              break;
            case "complete":
              b = h.reduce((O, E) => O && !s.value.startsWith(E), !0);
              break;
          }
          if (b) {
            a.value = !0;
            const O = setTimeout(() => {
              h.push(s.value), c.value += 1, i.body = { ...i.body, ...l.value }, vr(t, s.value, i).then((E) => {
                e.actions.addRange(E), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(O);
            });
          }
        }
      });
    } else
      vr(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, El = (e, t, n, s = [], r = []) => {
  const l = ee(""), o = ee([]), i = ee({}), c = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in c) {
    let h = c[d], p = document.getElementById(d);
    i.value[d] = p == null ? void 0 : p.value, p && p.addEventListener("change", (b) => {
      i.value[d] = b.target.value, h && Wt(() => {
        if (t != null)
          for (let O of Array.from(t.value.keys()))
            o.value.find((E) => E.key == O) || n(O, !1);
        else
          o.value.find((O) => O.key == l.value) || n(l.value, !1);
      });
    });
  }
  const a = function(d, h) {
    let p = d.value;
    return Object.keys(i.value).length > 0 && (p = p.filter((b) => {
      var O, E;
      for (let A in i.value)
        if ((c[A] ? !0 : ((O = i.value[A]) != null ? O : "").length > 0) && ((E = b.data) == null ? void 0 : E.hasOwnProperty(A)) && b.data[A] != i.value[A])
          return !1;
      return !0;
    })), h.length > 0 && (p = p.filter((b) => b.value.toLowerCase().includes(h.toLowerCase()))), p;
  };
  return Jt(() => {
    o.value = a(e, l.value);
  }), { filterText: l, filteredOptions: o, filterValues: i };
}, Ol = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(h) {
    const b = document.createElement("canvas").getContext("2d");
    return b.font = i, b.measureText(h).width;
  }, a = Me(() => {
    var p, b;
    const h = (p = tn(s.value).width) != null ? p : 100;
    if (o === "inherit")
      return h;
    if (o == null || o === "dynamic") {
      const O = (b = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? b : 16;
      return Math.max(h, Math.max(...e.value.map((E) => c(E.value))) + 20 + O * 3);
    }
    return o;
  }), d = ee({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ho(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = tn(s.value), p = tn(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var p = tn(l.value);
    let b = -p.left + h.left;
    const O = window.document.documentElement.clientWidth;
    b + a.value > O && (b = O - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + h.top + h.height).toString() + "px",
      left: b.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: c };
}, Sc = ["name"], Ic = {
  key: 1,
  class: "extra-select selection"
}, Fc = ["onClick"], Mc = ["innerHTML"], kc = ["value"], Nc = {
  key: 0,
  class: "input-searching"
}, Pc = ["placeholder"], Lc = {
  key: 0,
  class: "allselect-clear"
}, Rc = { class: "row-input" }, jc = ["checked"], Bc = { class: "row-input" }, Hc = ["checked"], $c = {
  key: 1,
  class: "no-matches"
}, Uc = { key: 2 }, Dc = ["onClick"], Kc = { class: "row-input" }, Vc = ["checked"], zc = ["value"], Wc = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, qc = /* @__PURE__ */ Object.assign(Wc, {
  props: {
    originalNode: { type: Object, required: !1 },
    multiple: { type: Boolean, required: !1 },
    options: { type: Array, required: !1 },
    localization: { type: Object, required: !1, default: {} },
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
    var Q, Ee, vt;
    const n = e, s = Me(() => {
      var k, N;
      return (N = (k = n.originalNode) == null ? void 0 : k.multiple) != null ? N : n.multiple;
    }), { options: r, selectedOptions: l, onReset: o } = bl(n.originalNode, Ht(n, "options"), Ht(n, "modelValue"), n.initialValue), { t: i } = xl(n.originalNode, Ht(n, "localization")), c = (Q = n.originalNode) == null ? void 0 : Q.classList, a = Object.values((vt = (Ee = n.originalNode) == null ? void 0 : Ee.style) != null ? vt : {});
    _l(n.originalNode);
    const d = (k, N = null) => {
      if (s.value) {
        let ie = N;
        switch (ie == null && (ie = !l.value.has(k)), ie) {
          case !0:
            l.value.set(k, k);
            break;
          case !1:
            l.value.delete(k);
            break;
        }
      } else
        l.value.clear(), N !== !1 && l.value.set(k, k), B.value = !1;
      te(Array.from(l.value.keys()));
    }, { filterText: h, filteredOptions: p, filterValues: b } = El(r, l, d, n.filterFields, n.hardFilterFields), { searchingFlag: O } = Cl(
      r,
      n.url,
      n.searchableUrl,
      h,
      n.minChars,
      b,
      n.fetchMode,
      n.fetchOptions
    ), E = ee(null), A = ee(null), R = ee(null), B = ee(!1), H = ee(null), j = function(k) {
      const N = _t(k.target);
      N.push(k.target), !N.includes(E.value) && !N.includes(A.value) && (B.value = !1);
    };
    Gt(() => {
      if (n.dropdownContainer) {
        let k = !1;
        H.value = _t(E.value).find((N) => !!(N instanceof Element && (N.matches(n.dropdownContainer) && (k = !0), k && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (H.value == null && (H.value = document.querySelector("body")), n.originalNode) {
        for (let N of c)
          N != "extraselect" && E.value.classList.add(N);
        for (let N of a)
          E.value.style[N] = n.originalNode.style[N];
        a.includes("background-color") || (E.value.style.backgroundColor = "white");
        let k = _t(E.value, "form").pop();
        k instanceof HTMLElement && k.matches("form") && k.addEventListener("reset", () => setTimeout(o));
      }
      window.document.addEventListener("mousedown", j), window.document.addEventListener("focusin", j);
    }), Mn(() => {
      window.document.removeEventListener("mousedown", j), window.document.removeEventListener("focusin", j);
    });
    const { dropdownStyle: V, getTextWidth: J } = Ol(r, l, B, E, A, H, n.maxWidth), te = (k) => {
      Wt(
        () => {
          var N;
          return (N = n.originalNode) == null ? void 0 : N.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", k);
    }, M = (k) => {
      P(k, !1), h.value = "";
    }, P = (k, N = null) => {
      N == null && (N = !K.value), N ? (l.value.clear(), r.value.forEach((ie) => l.value.set(ie.key, ie.key))) : l.value.clear(), te(Array.from(l.value.keys()));
    }, $ = () => {
      ne.value ? p.value.forEach((k) => {
        l.value.has(k.key) && l.value.delete(k.key);
      }) : p.value.forEach((k) => {
        l.value.has(k.key) || l.value.set(k.key, k.key);
      }), te(Array.from(l.value.keys()));
    };
    et(B, (k, N) => {
      k != N && (k ? n.search && Wt(() => {
        R.value.focus({ focusVisible: !0 });
      }) : h.value = "");
    });
    const K = Me(() => l.value.size == r.value.length), ne = Me(() => p.value.reduce((k, N) => k && l.value.has(N.key), !0)), Se = Me(() => l.value.size == 0), mt = Me(() => {
      var k, N, ie, Je, ue;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (Se.value)
          return i("No selection");
        if (!n.searchableUrl && K.value)
          return $$t("All selected");
        const ye = E.value ? getComputedStyle(E.value) : null, _e = ((k = E.value) == null ? void 0 : k.clientWidth) - parseInt(ye == null ? void 0 : ye.paddingLeft) - parseInt(ye == null ? void 0 : ye.paddingRight);
        let De = i(":n selected - ", { n: l.value.size }), Lt = !0;
        for (let Qe of l.value)
          if (Lt ? Lt = !1 : De += ", ", De += (ie = (N = r.map.get(Qe[0])) == null ? void 0 : N.value) != null ? ie : O.value ? i("Loading...") : i("Value not found"), _e < J(De))
            return l.value.size + i(" selected");
        return De;
      } else
        for (let ye of l.value)
          return (ue = (Je = r.map.get(ye[0])) == null ? void 0 : Je.value) != null ? ue : O.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: Pt, containerProps: pe, wrapperProps: le } = yl(
      p,
      {
        itemHeight: 32
      }
    );
    return (k, N) => {
      var ie, Je;
      return Z(), oe(de, null, [
        U(s) && U(l).size == 0 ? (Z(), oe("input", {
          key: 0,
          type: "hidden",
          name: (Je = (ie = n.originalNode) == null ? void 0 : ie.name) == null ? void 0 : Je.replace("[]", ""),
          value: ""
        }, null, 8, Sc)) : Te("", !0),
        n.showSelected ? (Z(), oe("div", Ic, [
          (Z(!0), oe(de, null, hn(U(l), (ue) => {
            var ye;
            return Z(), oe("div", {
              key: ue,
              onClick: (_e) => d(ue[0]),
              class: "selection-badge"
            }, [
              ns(He((ye = U(r).find((_e) => _e.key == ue[0])) == null ? void 0 : ye.value) + " ", 1),
              ce("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Mc)
            ], 8, Fc);
          }), 128))
        ])) : Te("", !0),
        ce("input", Yt({
          onFocus: N[0] || (N[0] = (ue) => B.value = !0),
          onClick: N[1] || (N[1] = (ue) => B.value = !0),
          ref_key: "inputNode",
          ref: E,
          value: U(mt),
          class: "extra-select extra-select-input",
          readonly: ""
        }, k.$attrs), null, 16, kc),
        H.value ? (Z(), xn(ts, {
          key: 2,
          to: H.value
        }, [
          _n(ce("div", {
            class: It(["extra-select dropdown", { searching: U(O) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: St(U(V))
          }, [
            n.search ? (Z(), oe("div", Nc, [
              _n(ce("input", {
                ref_key: "searchNode",
                ref: R,
                class: "extra-select-search",
                "onUpdate:modelValue": N[2] || (N[2] = (ue) => fe(h) ? h.value = ue : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: U(i)("Search...")
              }, null, 8, Pc), [
                [ls, U(h)]
              ])
            ])) : Te("", !0),
            U(h).length >= n.minChars ? (Z(), oe(de, { key: 1 }, [
              U(s) ? (Z(), oe("div", Lc, [
                U(h).length == 0 ? (Z(), oe("div", {
                  key: 0,
                  onClick: P,
                  class: "all-select"
                }, [
                  ce("div", Rc, [
                    ce("input", {
                      checked: U(K),
                      type: "checkbox"
                    }, null, 8, jc),
                    ce("b", null, He(U(i)("Select all")), 1)
                  ])
                ])) : Te("", !0),
                U(p).length > 0 && U(h).length > 0 ? (Z(), oe("div", {
                  key: 1,
                  onClick: $,
                  class: "all-select"
                }, [
                  ce("div", Bc, [
                    ce("input", {
                      checked: U(ne),
                      type: "checkbox"
                    }, null, 8, Hc),
                    ce("b", null, He(U(i)("Select Filtered")), 1)
                  ])
                ])) : Te("", !0),
                ce("div", {
                  class: "clear",
                  onClick: M
                }, He(U(i)("Clear")), 1)
              ])) : Te("", !0),
              U(p).length == 0 ? (Z(), oe("div", $c, He(U(i)("No matches found")), 1)) : Te("", !0)
            ], 64)) : (Z(), oe("div", Uc, He(U(i)("Insert at least :n characters", { n: n.minChars })), 1)),
            ce("div", Yt(U(pe), { class: "scroller" }), [
              ce("div", _r(As(U(le))), [
                (Z(!0), oe(de, null, hn(U(Pt), (ue) => (Z(), oe("button", {
                  key: ue.index,
                  class: "dropdown-row",
                  onClick: pl((ye) => d(ue.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  ce("div", Kc, [
                    U(s) ? (Z(), oe("input", {
                      key: 0,
                      checked: U(l).has(ue.data.key),
                      type: "checkbox"
                    }, null, 8, Vc)) : Te("", !0),
                    ns(" " + He(ue.data.value), 1)
                  ])
                ], 8, Dc))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [gl, B.value]
          ])
        ], 8, ["to"])) : Te("", !0),
        n.originalNode ? (Z(), xn(ts, {
          key: 3,
          to: n.originalNode
        }, [
          (Z(!0), oe(de, null, hn(U(l), (ue) => (Z(), oe("option", {
            key: ue[0],
            selected: "selected",
            value: ue[0]
          }, null, 8, zc))), 128))
        ], 8, ["to"])) : Te("", !0)
      ], 64);
    };
  }
}), Jc = {
  key: 0,
  class: "no-matches"
}, Qc = { key: 1 }, Yc = ["onClick"], Xc = { class: "row-input" }, Zc = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Gc = /* @__PURE__ */ Object.assign(Zc, {
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var J, te, M;
    const n = e, { options: s } = bl(n.originalNode, Ht(n, "options"), ee([])), { t: r } = xl(n.originalNode, Ht(n, "localization")), l = (J = n.originalNode) == null ? void 0 : J.classList, o = Object.values((M = (te = n.originalNode) == null ? void 0 : te.style) != null ? M : {});
    _l(n.originalNode);
    const i = (P, $ = null) => {
      $ === !1 ? c.value = "" : c.value = s.map.get(P).value, O.value = !1;
    }, { filterText: c, filteredOptions: a, filterValues: d } = El(s, null, i, n.filterFields, n.hardFilterFields), { searchingFlag: h } = Cl(
      s,
      n.url,
      n.searchableUrl,
      c,
      n.minChars,
      d,
      n.fetchMode,
      n.fetchOptions
    ), p = ee(null), b = ee(null), O = ee(!1), E = ee(null), A = function(P) {
      const $ = _t(P.target);
      $.push(P.target), !$.includes(p.value) && !$.includes(b.value) && (O.value = !1);
    };
    Gt(() => {
      if (n.dropdownContainer) {
        let K = !1;
        E.value = _t(p.value).find((ne) => !!(ne instanceof Element && (ne.matches(n.dropdownContainer) && (K = !0), K && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(ne).position))));
      }
      if (E.value == null && (E.value = document.querySelector("body")), n.originalNode) {
        for (let ne of l)
          ne != "extrasuggest" && p.value.classList.add(ne);
        for (let ne of o)
          p.value.style[ne] = n.originalNode.style[ne];
        o.includes("background-color") || (p.value.style.backgroundColor = "white"), c.value = n.originalNode.value;
        let K = _t(p.value, "form").pop();
        K instanceof HTMLElement && K.matches("form") && K.addEventListener("reset", () => setTimeout($));
      }
      Jt(() => {
        n.modelValue != null && (c.value = n.modelValue);
      });
      const P = c.value, $ = () => {
        c.value = P;
      };
      window.document.addEventListener("mousedown", A), window.document.addEventListener("focusin", A);
    }), Mn(() => {
      window.document.removeEventListener("mousedown", A), window.document.removeEventListener("focusin", A);
    });
    const { dropdownStyle: R } = Ol(s, ee([]), O, p, b, E, n.maxWidth), B = () => {
      var P;
      n.originalNode && (n.originalNode.value = c.value, (P = n.originalNode) == null || P.dispatchEvent(new Event("change", { bubbles: !0 }))), t("update:modelValue", c.value);
    };
    et(() => O.value, (P) => {
      P === !1 && B();
    });
    const { list: H, containerProps: j, wrapperProps: V } = yl(
      a,
      {
        itemHeight: 32
      }
    );
    return (P, $) => (Z(), oe(de, null, [
      _n(ce("input", Yt({
        onFocus: $[0] || ($[0] = (K) => O.value = !0),
        onClick: $[1] || ($[1] = (K) => O.value = !0),
        ref_key: "inputNode",
        ref: p,
        "onUpdate:modelValue": $[2] || ($[2] = (K) => fe(c) ? c.value = K : null),
        class: "extra-select extra-select-input"
      }, P.$attrs), null, 16), [
        [tc, U(c)]
      ]),
      E.value ? (Z(), xn(ts, {
        key: 0,
        to: E.value
      }, [
        _n(ce("div", {
          class: It(["extra-select dropdown", { searching: U(h) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: St(U(R))
        }, [
          U(c).length >= n.minChars ? (Z(), oe(de, { key: 0 }, [
            U(a).length == 0 ? (Z(), oe("div", Jc, He(U(r)("No matches found")), 1)) : Te("", !0)
          ], 64)) : (Z(), oe("div", Qc, He(U(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          ce("div", Yt(U(j), { class: "scroller" }), [
            ce("div", _r(As(U(V))), [
              (Z(!0), oe(de, null, hn(U(H), (K) => (Z(), oe("button", {
                key: K.index,
                class: "dropdown-row",
                onClick: pl((ne) => i(K.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ce("div", Xc, He(K.data.value), 1)
              ], 8, Yc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [gl, O.value]
        ])
      ], 8, ["to"])) : Te("", !0)
    ], 64));
  }
}), eu = Is, Tl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Tl.bindNew(e);
    });
  },
  bindNew(e) {
    pt.lock(e, "extra-select", () => {
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
      const s = ml(qc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), pt.remove(e, "extra-select");
      });
    });
  }
}, Al = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      Al.bindNew(e);
    });
  },
  bindNew(e) {
    pt.lock(e, "extra-suggest", () => {
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
      const s = ml(Gc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), pt.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Tl.init(), Al.init(), Is();
});
export {
  Tl as ExtraSelect,
  Al as ExtraSuggest,
  eu as loadExtraSelectDefaultLocalization
};
