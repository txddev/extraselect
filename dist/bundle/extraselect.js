const Re = /* @__PURE__ */ new WeakMap();
class gt {
  static put(t, n, s) {
    Re.has(t) || Re.set(t, /* @__PURE__ */ new Map()), Re.get(t).set(n, s);
  }
  static get(t, n) {
    return Re.get(t).get(n);
  }
  static has(t, n) {
    return Re.has(t) && Re.get(t).has(n);
  }
  static remove(t, n) {
    var s = Re.get(t).delete(n);
    return Re.get(t).size !== 0 && Re.delete(t), s;
  }
  static lock(t, n, s) {
    return gt.has(t, n) ? !1 : (gt.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Re);
function nn(e) {
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
function bt(e, t) {
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
function It(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = fe(s) ? kl(s) : It(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else {
    if (fe(e))
      return e;
    if (se(e))
      return e;
  }
}
const Ml = /;(?![^(]*\))/g, Nl = /:(.+)/;
function kl(e) {
  const t = {};
  return e.split(Ml).forEach((n) => {
    if (n) {
      const s = n.split(Nl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ft(e) {
  let t = "";
  if (fe(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ft(e[n]);
      s && (t += s + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function _r(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !fe(t) && (e.class = Ft(t)), n && (e.style = It(n)), e;
}
function Pl(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = mt(e[s], t[s]);
  return n;
}
function mt(e, t) {
  if (e === t)
    return !0;
  let n = ks(e), s = ks(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Kt(e), s = Kt(t), n || s)
    return e === t;
  if (n = k(e), s = k(t), n || s)
    return n && s ? Pl(e, t) : !1;
  if (n = se(e), s = se(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const o in e) {
      const i = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (i && !c || !i && c || !mt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function us(e, t) {
  return e.findIndex((n) => mt(n, t));
}
const Be = (e) => fe(e) ? e : e == null ? "" : k(e) || se(e) && (e.toString === xr || !U(e.toString)) ? JSON.stringify(e, br, 2) : String(e), br = (e, t) => t && t.__v_isRef ? br(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Mt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : se(t) && !k(t) && !Cr(t) ? String(t) : t, ee = {}, wt = [], ke = () => {
}, Ll = () => !1, jl = /^on[^a-z]/, En = (e) => jl.test(e), as = (e) => e.startsWith("onUpdate:"), ye = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rl = Object.prototype.hasOwnProperty, V = (e, t) => Rl.call(e, t), k = Array.isArray, xt = (e) => Gt(e) === "[object Map]", Mt = (e) => Gt(e) === "[object Set]", ks = (e) => Gt(e) === "[object Date]", U = (e) => typeof e == "function", fe = (e) => typeof e == "string", Kt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", wr = (e) => se(e) && U(e.then) && U(e.catch), xr = Object.prototype.toString, Gt = (e) => xr.call(e), Bl = (e) => Gt(e).slice(8, -1), Cr = (e) => Gt(e) === "[object Object]", ds = (e) => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ cs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hl = /-(\w)/g, Ot = On((e) => e.replace(Hl, (t, n) => n ? n.toUpperCase() : "")), $l = /\B([A-Z])/g, Nt = On((e) => e.replace($l, "-$1").toLowerCase()), Er = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), jn = On((e) => e ? `on${Er(e)}` : ""), Vt = (e, t) => !Object.is(e, t), dn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, mn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, vn = (e) => {
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
}, Or = (e) => (e.w & et) > 0, Tr = (e) => (e.n & et) > 0, Wl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= et;
}, ql = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Or(r) && !Tr(r) ? r.delete(e) : t[n++] = r, r.w &= ~et, r.n &= ~et;
    }
    t.length = n;
  }
}, Dn = /* @__PURE__ */ new WeakMap();
let Ht = 0, et = 1;
const Kn = 30;
let Ie;
const ht = Symbol(""), Vn = Symbol("");
class ps {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Kl(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ie, n = Xe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ie, Ie = this, Xe = !0, et = 1 << ++Ht, Ht <= Kn ? Wl(this) : Ls(this), this.fn();
    } finally {
      Ht <= Kn && ql(this), et = 1 << --Ht, Ie = this.parent, Xe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ie === this ? this.deferStop = !0 : this.active && (Ls(this), this.onStop && this.onStop(), this.active = !1);
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
let Xe = !0;
const Ar = [];
function kt() {
  Ar.push(Xe), Xe = !1;
}
function Pt() {
  const e = Ar.pop();
  Xe = e === void 0 ? !0 : e;
}
function Ce(e, t, n) {
  if (Xe && Ie) {
    let s = Dn.get(e);
    s || Dn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = hs()), Sr(r);
  }
}
function Sr(e, t) {
  let n = !1;
  Ht <= Kn ? Tr(e) || (e.n |= et, n = !Or(e)) : n = !e.has(Ie), n && (e.add(Ie), Ie.deps.push(e));
}
function We(e, t, n, s, r, l) {
  const o = Dn.get(e);
  if (!o)
    return;
  let i = [];
  if (t === "clear")
    i = [...o.values()];
  else if (n === "length" && k(e))
    o.forEach((c, a) => {
      (a === "length" || a >= s) && i.push(c);
    });
  else
    switch (n !== void 0 && i.push(o.get(n)), t) {
      case "add":
        k(e) ? ds(n) && i.push(o.get("length")) : (i.push(o.get(ht)), xt(e) && i.push(o.get(Vn)));
        break;
      case "delete":
        k(e) || (i.push(o.get(ht)), xt(e) && i.push(o.get(Vn)));
        break;
      case "set":
        xt(e) && i.push(o.get(ht));
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
  const n = k(e) ? e : [...e];
  for (const s of n)
    s.computed && js(s);
  for (const s of n)
    s.computed || js(s);
}
function js(e, t) {
  (e !== Ie || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Jl = /* @__PURE__ */ cs("__proto__,__v_isRef,__isVue"), Ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Kt)
), Ql = /* @__PURE__ */ gs(), Yl = /* @__PURE__ */ gs(!1, !0), Xl = /* @__PURE__ */ gs(!0), Rs = /* @__PURE__ */ Zl();
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
      return Pt(), s;
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
    if (r === "__v_raw" && l === (e ? t ? go : Pr : t ? kr : Nr).get(s))
      return s;
    const o = k(s);
    if (!e && o && V(Rs, r))
      return Reflect.get(Rs, r, l);
    const i = Reflect.get(s, r, l);
    return (Kt(r) ? Ir.has(r) : Jl(r)) || (e || Ce(s, "get", r), t) ? i : de(i) ? o && ds(r) ? i : i.value : se(i) ? e ? Lr(i) : ys(i) : i;
  };
}
const Gl = /* @__PURE__ */ Fr(), eo = /* @__PURE__ */ Fr(!0);
function Fr(e = !1) {
  return function(n, s, r, l) {
    let o = n[s];
    if (Tt(o) && de(o) && !de(r))
      return !1;
    if (!e && (!yn(r) && !Tt(r) && (o = q(o), r = q(r)), !k(n) && de(o) && !de(r)))
      return o.value = r, !0;
    const i = k(n) && ds(s) ? Number(s) < n.length : V(n, s), c = Reflect.set(n, s, r, l);
    return n === q(l) && (i ? Vt(r, o) && We(n, "set", s, r) : We(n, "add", s, r)), c;
  };
}
function to(e, t) {
  const n = V(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && We(e, "delete", t, void 0), s;
}
function no(e, t) {
  const n = Reflect.has(e, t);
  return (!Kt(t) || !Ir.has(t)) && Ce(e, "has", t), n;
}
function so(e) {
  return Ce(e, "iterate", k(e) ? "length" : ht), Reflect.ownKeys(e);
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
}, lo = /* @__PURE__ */ ye({}, Mr, {
  get: Yl,
  set: eo
}), ms = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function sn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = q(e), l = q(t);
  n || (t !== l && Ce(r, "get", t), Ce(r, "get", l));
  const { has: o } = Tn(r), i = s ? ms : n ? bs : zt;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function rn(e, t = !1) {
  const n = this.__v_raw, s = q(n), r = q(e);
  return t || (e !== r && Ce(s, "has", e), Ce(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ln(e, t = !1) {
  return e = e.__v_raw, !t && Ce(q(e), "iterate", ht), Reflect.get(e, "size", e);
}
function Bs(e) {
  e = q(e);
  const t = q(this);
  return Tn(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this;
}
function Hs(e, t) {
  t = q(t);
  const n = q(this), { has: s, get: r } = Tn(n);
  let l = s.call(n, e);
  l || (e = q(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? Vt(t, o) && We(n, "set", e, t) : We(n, "add", e, t), this;
}
function $s(e) {
  const t = q(this), { has: n, get: s } = Tn(t);
  let r = n.call(t, e);
  r || (e = q(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && We(t, "delete", e, void 0), l;
}
function Us() {
  const e = q(this), t = e.size !== 0, n = e.clear();
  return t && We(e, "clear", void 0, void 0), n;
}
function on(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = q(o), c = t ? ms : e ? bs : zt;
    return !e && Ce(i, "iterate", ht), o.forEach((a, d) => s.call(r, c(a), c(d), l));
  };
}
function cn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = q(r), o = xt(l), i = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), d = n ? ms : t ? bs : zt;
    return !t && Ce(l, "iterate", c ? Vn : ht), {
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
function Qe(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function oo() {
  const e = {
    get(l) {
      return sn(this, l);
    },
    get size() {
      return ln(this);
    },
    has: rn,
    add: Bs,
    set: Hs,
    delete: $s,
    clear: Us,
    forEach: on(!1, !1)
  }, t = {
    get(l) {
      return sn(this, l, !1, !0);
    },
    get size() {
      return ln(this);
    },
    has: rn,
    add: Bs,
    set: Hs,
    delete: $s,
    clear: Us,
    forEach: on(!1, !0)
  }, n = {
    get(l) {
      return sn(this, l, !0);
    },
    get size() {
      return ln(this, !0);
    },
    has(l) {
      return rn.call(this, l, !0);
    },
    add: Qe("add"),
    set: Qe("set"),
    delete: Qe("delete"),
    clear: Qe("clear"),
    forEach: on(!0, !1)
  }, s = {
    get(l) {
      return sn(this, l, !0, !0);
    },
    get size() {
      return ln(this, !0);
    },
    has(l) {
      return rn.call(this, l, !0);
    },
    add: Qe("add"),
    set: Qe("set"),
    delete: Qe("delete"),
    clear: Qe("clear"),
    forEach: on(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = cn(l, !1, !1), n[l] = cn(l, !0, !1), t[l] = cn(l, !1, !0), s[l] = cn(l, !0, !0);
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
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(V(n, r) && r in s ? n : s, r, l);
}
const fo = {
  get: /* @__PURE__ */ vs(!1, !1)
}, ho = {
  get: /* @__PURE__ */ vs(!1, !0)
}, po = {
  get: /* @__PURE__ */ vs(!0, !1)
}, Nr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
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
  return Tt(e) ? e : _s(e, !1, Mr, fo, Nr);
}
function yo(e) {
  return _s(e, !1, lo, ho, kr);
}
function Lr(e) {
  return _s(e, !0, ro, po, Pr);
}
function _s(e, t, n, s, r) {
  if (!se(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function Ct(e) {
  return Tt(e) ? Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
function yn(e) {
  return !!(e && e.__v_isShallow);
}
function jr(e) {
  return Ct(e) || Tt(e);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function Rr(e) {
  return mn(e, "__v_skip", !0), e;
}
const zt = (e) => se(e) ? ys(e) : e, bs = (e) => se(e) ? Lr(e) : e;
function Br(e) {
  Xe && Ie && (e = q(e), Sr(e.dep || (e.dep = hs())));
}
function Hr(e, t) {
  e = q(e), e.dep && zn(e.dep);
}
function de(e) {
  return !!(e && e.__v_isRef === !0);
}
function te(e) {
  return $r(e, !1);
}
function _o(e) {
  return $r(e, !0);
}
function $r(e, t) {
  return de(e) ? e : new bo(e, t);
}
class bo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : q(t), this._value = n ? t : zt(t);
  }
  get value() {
    return Br(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || yn(t) || Tt(t);
    t = n ? t : q(t), Vt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : zt(t), Hr(this));
  }
}
function H(e) {
  return de(e) ? e.value : e;
}
const wo = {
  get: (e, t, n) => H(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return de(r) && !de(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ur(e) {
  return Ct(e) ? e : new Proxy(e, wo);
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
function $t(e, t, n) {
  const s = e[t];
  return de(s) ? s : new xo(e, t, n);
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
  const l = U(e);
  return l ? (s = e, r = ke) : (s = e.get, r = e.set), new Co(s, r, l || !r, n);
}
function Ze(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (l) {
    An(l, t, n);
  }
  return r;
}
function Ae(e, t, n, s) {
  if (U(e)) {
    const l = Ze(e, t, n, s);
    return l && wr(l) && l.catch((o) => {
      An(o, t, n);
    }), l;
  }
  const r = [];
  for (let l = 0; l < e.length; l++)
    r.push(Ae(e[l], t, n, s));
  return r;
}
function An(e, t, n, s = !0) {
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
      Ze(c, null, 10, [e, o, i]);
      return;
    }
  }
  Oo(e, n, r, s);
}
function Oo(e, t, n, s = !0) {
  console.error(e);
}
let Wt = !1, Wn = !1;
const ve = [];
let $e = 0;
const Et = [];
let Ke = null, ut = 0;
const Kr = /* @__PURE__ */ Promise.resolve();
let ws = null;
function qt(e) {
  const t = ws || Kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function To(e) {
  let t = $e + 1, n = ve.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Jt(ve[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function xs(e) {
  (!ve.length || !ve.includes(e, Wt && e.allowRecurse ? $e + 1 : $e)) && (e.id == null ? ve.push(e) : ve.splice(To(e.id), 0, e), Vr());
}
function Vr() {
  !Wt && !Wn && (Wn = !0, ws = Kr.then(Wr));
}
function Ao(e) {
  const t = ve.indexOf(e);
  t > $e && ve.splice(t, 1);
}
function So(e) {
  k(e) ? Et.push(...e) : (!Ke || !Ke.includes(e, e.allowRecurse ? ut + 1 : ut)) && Et.push(e), Vr();
}
function Ds(e, t = Wt ? $e + 1 : 0) {
  for (; t < ve.length; t++) {
    const n = ve[t];
    n && n.pre && (ve.splice(t, 1), t--, n());
  }
}
function zr(e) {
  if (Et.length) {
    const t = [...new Set(Et)];
    if (Et.length = 0, Ke) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, Ke.sort((n, s) => Jt(n) - Jt(s)), ut = 0; ut < Ke.length; ut++)
      Ke[ut]();
    Ke = null, ut = 0;
  }
}
const Jt = (e) => e.id == null ? 1 / 0 : e.id, Io = (e, t) => {
  const n = Jt(e) - Jt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  Wn = !1, Wt = !0, ve.sort(Io);
  const t = ke;
  try {
    for ($e = 0; $e < ve.length; $e++) {
      const n = ve[$e];
      n && n.active !== !1 && Ze(n, null, 14);
    }
  } finally {
    $e = 0, ve.length = 0, zr(), Wt = !1, ws = null, (ve.length || Et.length) && Wr();
  }
}
function Fo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || ee;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: h, trim: p } = s[d] || ee;
    p && (r = n.map((b) => b.trim())), h && (r = n.map(vn));
  }
  let i, c = s[i = jn(t)] || s[i = jn(Ot(t))];
  !c && l && (c = s[i = jn(Nt(t))]), c && Ae(c, e, 6, r);
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
  if (!U(e)) {
    const c = (a) => {
      const d = qr(a, t, !0);
      d && (i = !0, ye(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !i ? (se(e) && s.set(e, null), null) : (k(l) ? l.forEach((c) => o[c] = null) : ye(o, l), se(e) && s.set(e, o), o);
}
function Sn(e, t) {
  return !e || !En(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), V(e, t[0].toLowerCase() + t.slice(1)) || V(e, Nt(t)) || V(e, t));
}
let Me = null, Jr = null;
function _n(e) {
  const t = Me;
  return Me = e, Jr = e && e.type.__scopeId || null, t;
}
function Mo(e, t = Me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Gs(-1);
    const l = _n(t), o = e(...r);
    return _n(l), s._d && Gs(1), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Rn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: l, propsOptions: [o], slots: i, attrs: c, emit: a, render: d, renderCache: h, data: p, setupState: b, ctx: O, inheritAttrs: E } = e;
  let A, P;
  const B = _n(e);
  try {
    if (n.shapeFlag & 4) {
      const L = r || s;
      A = He(d.call(L, L, h, l, b, p, O)), P = c;
    } else {
      const L = t;
      A = He(L.length > 1 ? L(l, { attrs: c, slots: i, emit: a }) : L(l, null)), P = t.props ? c : No(c);
    }
  } catch (L) {
    Dt.length = 0, An(L, e, 1), A = ze(Pe);
  }
  let D = A;
  if (P && E !== !1) {
    const L = Object.keys(P), { shapeFlag: K } = D;
    L.length && K & 7 && (o && L.some(as) && (P = ko(P, o)), D = tt(D, P));
  }
  return n.dirs && (D = tt(D), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (D.transition = n.transition), A = D, _n(B), A;
}
const No = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || En(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ko = (e, t) => {
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
        if (o[p] !== s[p] && !Sn(a, p))
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
    if (t[l] !== e[l] && !Sn(n, l))
      return !0;
  }
  return !1;
}
function Lo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const jo = (e) => e.__isSuspense;
function Ro(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : So(e);
}
function Bo(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function Bn(e, t, n = !1) {
  const s = ge || Me;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(s.proxy) : t;
  }
}
function Qt(e, t) {
  return In(e, null, t);
}
function Ho(e, t) {
  return In(e, null, { flush: "post" });
}
const Vs = {};
function Ge(e, t, n) {
  return In(e, t, n);
}
function In(e, t, { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = ee) {
  const i = ge;
  let c, a = !1, d = !1;
  if (de(e) ? (c = () => e.value, a = yn(e)) : Ct(e) ? (c = () => e, s = !0) : k(e) ? (d = !0, a = e.some((P) => Ct(P) || yn(P)), c = () => e.map((P) => {
    if (de(P))
      return P.value;
    if (Ct(P))
      return dt(P);
    if (U(P))
      return Ze(P, i, 2);
  })) : U(e) ? t ? c = () => Ze(e, i, 2) : c = () => {
    if (!(i && i.isUnmounted))
      return h && h(), Ae(e, i, 3, [p]);
  } : c = ke, t && s) {
    const P = c;
    c = () => dt(P());
  }
  let h, p = (P) => {
    h = A.onStop = () => {
      Ze(P, i, 4);
    };
  };
  if (Zt)
    return p = ke, t ? n && Ae(t, i, 3, [
      c(),
      d ? [] : void 0,
      p
    ]) : c(), ke;
  let b = d ? [] : Vs;
  const O = () => {
    if (!!A.active)
      if (t) {
        const P = A.run();
        (s || a || (d ? P.some((B, D) => Vt(B, b[D])) : Vt(P, b))) && (h && h(), Ae(t, i, 3, [
          P,
          b === Vs ? void 0 : b,
          p
        ]), b = P);
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
  const s = this.proxy, r = fe(e) ? e.includes(".") ? Qr(s, e) : () => s[e] : e.bind(s, s);
  let l;
  U(t) ? l = t : (l = t.handler, n = t);
  const o = ge;
  At(this);
  const i = In(r, l.bind(s), n);
  return o ? At(o) : pt(), i;
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
function dt(e, t) {
  if (!se(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), de(e))
    dt(e.value, t);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      dt(e[n], t);
  else if (Mt(e) || xt(e))
    e.forEach((n) => {
      dt(n, t);
    });
  else if (Cr(e))
    for (const n in e)
      dt(e[n], t);
  return e;
}
function Uo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return en(() => {
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
          if (E.type !== Pe) {
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
      if (p && p.type !== Pe && (!at(a, p) || b)) {
        const E = qn(p, i, s, n);
        if (Jn(p, E), c === "out-in")
          return s.isLeaving = !0, E.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, Hn(o);
        c === "in-out" && a.type !== Pe && (E.delayLeave = (A, P, B) => {
          const D = Yr(s, p);
          D[String(p.key)] = p, A._leaveCb = () => {
            P(), A._leaveCb = void 0, delete d.delayedLeave;
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
  const { appear: r, mode: l, persisted: o = !1, onBeforeEnter: i, onEnter: c, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: h, onLeave: p, onAfterLeave: b, onLeaveCancelled: O, onBeforeAppear: E, onAppear: A, onAfterAppear: P, onAppearCancelled: B } = t, D = String(e.key), L = Yr(n, e), K = (M, z) => {
    M && Ae(M, s, 9, z);
  }, Q = (M, z) => {
    const R = z[1];
    K(M, z), k(M) ? M.every(($) => $.length <= 1) && R() : M.length <= 1 && R();
  }, re = {
    mode: l,
    persisted: o,
    beforeEnter(M) {
      let z = i;
      if (!n.isMounted)
        if (r)
          z = E || i;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const R = L[D];
      R && at(e, R) && R.el._leaveCb && R.el._leaveCb(), K(z, [M]);
    },
    enter(M) {
      let z = c, R = a, $ = d;
      if (!n.isMounted)
        if (r)
          z = A || c, R = P || a, $ = B || d;
        else
          return;
      let J = !1;
      const oe = M._enterCb = (vt) => {
        J || (J = !0, vt ? K($, [M]) : K(R, [M]), re.delayedLeave && re.delayedLeave(), M._enterCb = void 0);
      };
      z ? Q(z, [M, oe]) : oe();
    },
    leave(M, z) {
      const R = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return z();
      K(h, [M]);
      let $ = !1;
      const J = M._leaveCb = (oe) => {
        $ || ($ = !0, z(), oe ? K(O, [M]) : K(b, [M]), M._leaveCb = void 0, L[R] === e && delete L[R]);
      };
      L[R] = e, p ? Q(p, [M, J]) : J();
    },
    clone(M) {
      return qn(M, t, n, s);
    }
  };
  return re;
}
function Hn(e) {
  if (Fn(e))
    return e = tt(e), e.children = null, e;
}
function zs(e) {
  return Fn(e) ? e.children ? e.children[0] : void 0 : e;
}
function Jn(e, t) {
  e.shapeFlag & 6 && e.component ? Jn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xr(e, t = !1, n) {
  let s = [], r = 0;
  for (let l = 0; l < e.length; l++) {
    let o = e[l];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
    o.type === he ? (o.patchFlag & 128 && r++, s = s.concat(Xr(o.children, t, i))) : (t || o.type !== Pe) && s.push(i != null ? tt(o, { key: i }) : o);
  }
  if (r > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
const hn = (e) => !!e.type.__asyncLoader, Fn = (e) => e.type.__isKeepAlive;
function Vo(e, t) {
  Zr(e, "a", t);
}
function zo(e, t) {
  Zr(e, "da", t);
}
function Zr(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Mn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Fn(r.parent.vnode) && Wo(s, t, n, r), r = r.parent;
  }
}
function Wo(e, t, n, s) {
  const r = Mn(t, e, s, !0);
  Nn(() => {
    fs(s[t], r);
  }, n);
}
function Mn(e, t, n = ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      kt(), At(n);
      const i = Ae(t, n, e, o);
      return pt(), Pt(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const qe = (e) => (t, n = ge) => (!Zt || e === "sp") && Mn(e, t, n), qo = qe("bm"), en = qe("m"), Jo = qe("bu"), Qo = qe("u"), Gr = qe("bum"), Nn = qe("um"), Yo = qe("sp"), Xo = qe("rtg"), Zo = qe("rtc");
function Go(e, t = ge) {
  Mn("ec", e, t);
}
function bn(e, t) {
  const n = Me;
  if (n === null)
    return e;
  const s = Pn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, c, a = ee] = t[l];
    U(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && dt(i), r.push({
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
function lt(e, t, n, s) {
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
    ]), Pt());
  }
}
const ei = Symbol();
function pn(e, t, n, s) {
  let r;
  const l = n && n[s];
  if (k(e) || fe(e)) {
    r = new Array(e.length);
    for (let o = 0, i = e.length; o < i; o++)
      r[o] = t(e[o], o, void 0, l && l[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, l && l[o]);
  } else if (se(e))
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
const Qn = (e) => e ? al(e) ? Pn(e) || e.proxy : Qn(e.parent) : null, wn = /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
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
  $nextTick: (e) => e.n || (e.n = qt.bind(e.proxy)),
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
        if (s !== ee && V(s, t))
          return o[t] = 1, s[t];
        if (r !== ee && V(r, t))
          return o[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && V(a, t))
          return o[t] = 3, l[t];
        if (n !== ee && V(n, t))
          return o[t] = 4, n[t];
        Yn && (o[t] = 0);
      }
    }
    const d = wn[t];
    let h, p;
    if (d)
      return t === "$attrs" && Ce(e, "get", t), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== ee && V(n, t))
      return o[t] = 4, n[t];
    if (p = c.config.globalProperties, V(p, t))
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return r !== ee && V(r, t) ? (r[t] = n, !0) : s !== ee && V(s, t) ? (s[t] = n, !0) : V(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l } }, o) {
    let i;
    return !!n[o] || e !== ee && V(e, o) || t !== ee && V(t, o) || (i = l[0]) && V(i, o) || V(s, o) || V(wn, o) || V(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
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
    beforeDestroy: P,
    beforeUnmount: B,
    destroyed: D,
    unmounted: L,
    render: K,
    renderTracked: Q,
    renderTriggered: re,
    errorCaptured: M,
    serverPrefetch: z,
    expose: R,
    inheritAttrs: $,
    components: J,
    directives: oe,
    filters: vt
  } = t;
  if (a && si(a, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const le in o) {
      const Y = o[le];
      U(Y) && (s[le] = Y.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    se(le) && (e.data = ys(le));
  }
  if (Yn = !0, l)
    for (const le in l) {
      const Y = l[le], Ee = U(Y) ? Y.bind(n, n) : U(Y.get) ? Y.get.bind(n, n) : ke, yt = !U(Y) && U(Y.set) ? Y.set.bind(n) : ke, Je = Fe({
        get: Ee,
        set: yt
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: (N) => Je.value = N
      });
    }
  if (i)
    for (const le in i)
      el(i[le], s, n, le);
  if (c) {
    const le = U(c) ? c.call(n) : c;
    Reflect.ownKeys(le).forEach((Y) => {
      Bo(Y, le[Y]);
    });
  }
  d && Ws(d, e, "c");
  function me(le, Y) {
    k(Y) ? Y.forEach((Ee) => le(Ee.bind(n))) : Y && le(Y.bind(n));
  }
  if (me(qo, h), me(en, p), me(Jo, b), me(Qo, O), me(Vo, E), me(zo, A), me(Go, M), me(Zo, Q), me(Xo, re), me(Gr, B), me(Nn, L), me(Yo, z), k(R))
    if (R.length) {
      const le = e.exposed || (e.exposed = {});
      R.forEach((Y) => {
        Object.defineProperty(le, Y, {
          get: () => n[Y],
          set: (Ee) => n[Y] = Ee
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === ke && (e.render = K), $ != null && (e.inheritAttrs = $), J && (e.components = J), oe && (e.directives = oe);
}
function si(e, t, n = ke, s = !1) {
  k(e) && (e = Xn(e));
  for (const r in e) {
    const l = e[r];
    let o;
    se(l) ? "default" in l ? o = Bn(l.from || r, l.default, !0) : o = Bn(l.from || r) : o = Bn(l), de(o) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Ws(e, t, n) {
  Ae(k(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function el(e, t, n, s) {
  const r = s.includes(".") ? Qr(n, s) : () => n[s];
  if (fe(e)) {
    const l = t[e];
    U(l) && Ge(r, l);
  } else if (U(e))
    Ge(r, e.bind(n));
  else if (se(e))
    if (k(e))
      e.forEach((l) => el(l, t, n, s));
    else {
      const l = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(l) && Ge(r, l, e);
    }
}
function Cs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: l, config: { optionMergeStrategies: o } } = e.appContext, i = l.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach((a) => xn(c, a, o, !0)), xn(c, t, o)), se(t) && l.set(t, c), c;
}
function xn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && xn(e, l, n, !0), r && r.forEach((o) => xn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = ri[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const ri = {
  data: qs,
  props: ct,
  emits: ct,
  methods: ct,
  computed: ct,
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  components: ct,
  directives: ct,
  watch: oi,
  provide: qs,
  inject: li
};
function qs(e, t) {
  return t ? e ? function() {
    return ye(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t);
  } : t : e;
}
function li(e, t) {
  return ct(Xn(e), Xn(t));
}
function Xn(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? ye(ye(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function oi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ye(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = _e(e[s], t[s]);
  return n;
}
function ii(e, t, n, s = !1) {
  const r = {}, l = {};
  mn(l, kn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), tl(e, t, r, l);
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
        if (Sn(e.emitsOptions, p))
          continue;
        const b = t[p];
        if (c)
          if (V(l, p))
            b !== l[p] && (l[p] = b, a = !0);
          else {
            const O = Ot(p);
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
      (!t || !V(t, h) && ((d = Nt(h)) === h || !V(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = Zn(c, i, h, void 0, e, !0)) : delete r[h]);
    if (l !== i)
      for (const h in l)
        (!t || !V(t, h) && !0) && (delete l[h], a = !0);
  }
  a && We(e, "set", "$attrs");
}
function tl(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let c in t) {
      if (fn(c))
        continue;
      const a = t[c];
      let d;
      r && V(r, d = Ot(c)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Sn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (l) {
    const c = q(n), a = i || ee;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
      n[h] = Zn(r, c, h, a[h], e, !V(a, h));
    }
  }
  return o;
}
function Zn(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = V(o, "default");
    if (i && s === void 0) {
      const c = o.default;
      if (o.type !== Function && U(c)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (At(r), s = a[n] = c.call(null, t), pt());
      } else
        s = c;
    }
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === Nt(n)) && (s = !0));
  }
  return s;
}
function nl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let c = !1;
  if (!U(e)) {
    const d = (h) => {
      c = !0;
      const [p, b] = nl(h, t, !0);
      ye(o, p), b && i.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !c)
    return se(e) && s.set(e, wt), wt;
  if (k(l))
    for (let d = 0; d < l.length; d++) {
      const h = Ot(l[d]);
      Js(h) && (o[h] = ee);
    }
  else if (l)
    for (const d in l) {
      const h = Ot(d);
      if (Js(h)) {
        const p = l[d], b = o[h] = k(p) || U(p) ? { type: p } : p;
        if (b) {
          const O = Xs(Boolean, b.type), E = Xs(String, b.type);
          b[0] = O > -1, b[1] = E < 0 || O < E, (O > -1 || V(b, "default")) && i.push(h);
        }
      }
    }
  const a = [o, i];
  return se(e) && s.set(e, a), a;
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
  return k(t) ? t.findIndex((n) => Ys(n, e)) : U(t) && Ys(t, e) ? 0 : -1;
}
const sl = (e) => e[0] === "_" || e === "$stable", Es = (e) => k(e) ? e.map(He) : [He(e)], ui = (e, t, n) => {
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
    if (U(l))
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
    n ? (e.slots = q(t), mn(t, "_", n)) : rl(t, e.slots = {});
  } else
    e.slots = {}, t && ll(e, t);
  mn(e.slots, kn, 1);
}, fi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = ee;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (ye(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, rl(t, r)), o = t;
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
    U(s) || (s = Object.assign({}, s)), r != null && !se(r) && (r = null);
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
        return o.has(a) || (a && U(a.install) ? (o.add(a), a.install(c, ...d)) : U(a) && (o.add(a), a(c, ...d))), c;
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
          return p.appContext = l, d && t ? t(p, a) : e(p, a, h), i = !0, c._container = a, a.__vue_app__ = c, Pn(p.component) || p.component.proxy;
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
  if (k(e)) {
    e.forEach((p, b) => Gn(p, t && (k(t) ? t[b] : t), n, s, r));
    return;
  }
  if (hn(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Pn(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: c } = e, a = t && t.r, d = i.refs === ee ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== c && (fe(a) ? (d[a] = null, V(h, a) && (h[a] = null)) : de(a) && (a.value = null)), U(c))
    Ze(c, i, 12, [o, d]);
  else {
    const p = fe(c), b = de(c);
    if (p || b) {
      const O = () => {
        if (e.f) {
          const E = p ? d[c] : c.value;
          r ? k(E) && fs(E, l) : k(E) ? E.includes(l) || E.push(l) : p ? (d[c] = [l], V(h, c) && (h[c] = d[c])) : (c.value = [l], e.k && (d[e.k] = c.value));
        } else
          p ? (d[c] = o, V(h, c) && (h[c] = o)) : b && (c.value = o, e.k && (d[e.k] = o));
      };
      o ? (O.id = -1, be(O, n)) : O();
    }
  }
}
const be = Ro;
function pi(e) {
  return gi(e);
}
function gi(e, t) {
  const n = Ul();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: l, createElement: o, createText: i, createComment: c, setText: a, setElementText: d, parentNode: h, nextSibling: p, setScopeId: b = ke, cloneNode: O, insertStaticContent: E } = e, A = (u, f, g, v = null, m = null, w = null, C = !1, _ = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !at(u, f) && (v = Ue(u), F(u, m, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: S, shapeFlag: T } = f;
    switch (y) {
      case Ts:
        P(u, f, g, v);
        break;
      case Pe:
        B(u, f, g, v);
        break;
      case $n:
        u == null && D(f, g, v, C);
        break;
      case he:
        oe(u, f, g, v, m, w, C, _, x);
        break;
      default:
        T & 1 ? Q(u, f, g, v, m, w, C, _, x) : T & 6 ? vt(u, f, g, v, m, w, C, _, x) : (T & 64 || T & 128) && y.process(u, f, g, v, m, w, C, _, x, De);
    }
    S != null && m && Gn(S, u && u.ref, w, f || u, !f);
  }, P = (u, f, g, v) => {
    if (u == null)
      s(f.el = i(f.children), g, v);
    else {
      const m = f.el = u.el;
      f.children !== u.children && a(m, f.children);
    }
  }, B = (u, f, g, v) => {
    u == null ? s(f.el = c(f.children || ""), g, v) : f.el = u.el;
  }, D = (u, f, g, v) => {
    [u.el, u.anchor] = E(u.children, f, g, v, u.el, u.anchor);
  }, L = ({ el: u, anchor: f }, g, v) => {
    let m;
    for (; u && u !== f; )
      m = p(u), s(u, g, v), u = m;
    s(f, g, v);
  }, K = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = p(u), r(u), u = g;
    r(f);
  }, Q = (u, f, g, v, m, w, C, _, x) => {
    C = C || f.type === "svg", u == null ? re(f, g, v, m, w, C, _, x) : R(u, f, m, w, C, _, x);
  }, re = (u, f, g, v, m, w, C, _) => {
    let x, y;
    const { type: S, props: T, shapeFlag: I, transition: j, patchFlag: W, dirs: X } = u;
    if (u.el && O !== void 0 && W === -1)
      x = u.el = O(u.el);
    else {
      if (x = u.el = o(u.type, w, T && T.is, T), I & 8 ? d(x, u.children) : I & 16 && z(u.children, x, null, v, m, w && S !== "foreignObject", C, _), X && lt(u, null, v, "created"), T) {
        for (const ne in T)
          ne !== "value" && !fn(ne) && l(x, ne, null, T[ne], w, u.children, v, m, ce);
        "value" in T && l(x, "value", null, T.value), (y = T.onVnodeBeforeMount) && je(y, v, u);
      }
      M(x, u, u.scopeId, C, v);
    }
    X && lt(u, null, v, "beforeMount");
    const Z = (!m || m && !m.pendingBranch) && j && !j.persisted;
    Z && j.beforeEnter(x), s(x, f, g), ((y = T && T.onVnodeMounted) || Z || X) && be(() => {
      y && je(y, v, u), Z && j.enter(x), X && lt(u, null, v, "mounted");
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
  }, z = (u, f, g, v, m, w, C, _, x = 0) => {
    for (let y = x; y < u.length; y++) {
      const S = u[y] = _ ? Ye(u[y]) : He(u[y]);
      A(null, S, f, g, v, m, w, C, _);
    }
  }, R = (u, f, g, v, m, w, C) => {
    const _ = f.el = u.el;
    let { patchFlag: x, dynamicChildren: y, dirs: S } = f;
    x |= u.patchFlag & 16;
    const T = u.props || ee, I = f.props || ee;
    let j;
    g && ot(g, !1), (j = I.onVnodeBeforeUpdate) && je(j, g, f, u), S && lt(f, u, g, "beforeUpdate"), g && ot(g, !0);
    const W = m && f.type !== "foreignObject";
    if (y ? $(u.dynamicChildren, y, _, g, v, W, w) : C || Ee(u, f, _, null, g, v, W, w, !1), x > 0) {
      if (x & 16)
        J(_, f, T, I, g, v, m);
      else if (x & 2 && T.class !== I.class && l(_, "class", null, I.class, m), x & 4 && l(_, "style", T.style, I.style, m), x & 8) {
        const X = f.dynamicProps;
        for (let Z = 0; Z < X.length; Z++) {
          const ne = X[Z], Se = T[ne], _t = I[ne];
          (_t !== Se || ne === "value") && l(_, ne, Se, _t, m, u.children, g, v, ce);
        }
      }
      x & 1 && u.children !== f.children && d(_, f.children);
    } else
      !C && y == null && J(_, f, T, I, g, v, m);
    ((j = I.onVnodeUpdated) || S) && be(() => {
      j && je(j, g, f, u), S && lt(f, u, g, "updated");
    }, v);
  }, $ = (u, f, g, v, m, w, C) => {
    for (let _ = 0; _ < f.length; _++) {
      const x = u[_], y = f[_], S = x.el && (x.type === he || !at(x, y) || x.shapeFlag & 70) ? h(x.el) : g;
      A(x, y, S, null, v, m, w, C, !0);
    }
  }, J = (u, f, g, v, m, w, C) => {
    if (g !== v) {
      for (const _ in v) {
        if (fn(_))
          continue;
        const x = v[_], y = g[_];
        x !== y && _ !== "value" && l(u, _, y, x, C, f.children, m, w, ce);
      }
      if (g !== ee)
        for (const _ in g)
          !fn(_) && !(_ in v) && l(u, _, g[_], null, C, f.children, m, w, ce);
      "value" in v && l(u, "value", g.value, v.value);
    }
  }, oe = (u, f, g, v, m, w, C, _, x) => {
    const y = f.el = u ? u.el : i(""), S = f.anchor = u ? u.anchor : i("");
    let { patchFlag: T, dynamicChildren: I, slotScopeIds: j } = f;
    j && (_ = _ ? _.concat(j) : j), u == null ? (s(y, g, v), s(S, g, v), z(f.children, g, S, m, w, C, _, x)) : T > 0 && T & 64 && I && u.dynamicChildren ? ($(u.dynamicChildren, I, g, m, w, C, _), (f.key != null || m && f === m.subTree) && Os(u, f, !0)) : Ee(u, f, g, S, m, w, C, _, x);
  }, vt = (u, f, g, v, m, w, C, _, x) => {
    f.slotScopeIds = _, u == null ? f.shapeFlag & 512 ? m.ctx.activate(f, g, v, C, x) : Lt(f, g, v, m, w, C, x) : me(u, f, x);
  }, Lt = (u, f, g, v, m, w, C) => {
    const _ = u.component = Oi(u, v, m);
    if (Fn(u) && (_.ctx.renderer = De), Ti(_), _.asyncDep) {
      if (m && m.registerDep(_, le), !u.el) {
        const x = _.subTree = ze(Pe);
        B(null, x, f, g);
      }
      return;
    }
    le(_, u, f, g, m, w, C);
  }, me = (u, f, g) => {
    const v = f.component = u.component;
    if (Po(u, f, g))
      if (v.asyncDep && !v.asyncResolved) {
        Y(v, f, g);
        return;
      } else
        v.next = f, Ao(v.update), v.update();
    else
      f.el = u.el, v.vnode = f;
  }, le = (u, f, g, v, m, w, C) => {
    const _ = () => {
      if (u.isMounted) {
        let { next: S, bu: T, u: I, parent: j, vnode: W } = u, X = S, Z;
        ot(u, !1), S ? (S.el = W.el, Y(u, S, C)) : S = W, T && dn(T), (Z = S.props && S.props.onVnodeBeforeUpdate) && je(Z, j, S, W), ot(u, !0);
        const ne = Rn(u), Se = u.subTree;
        u.subTree = ne, A(
          Se,
          ne,
          h(Se.el),
          Ue(Se),
          u,
          m,
          w
        ), S.el = ne.el, X === null && Lo(u, ne.el), I && be(I, m), (Z = S.props && S.props.onVnodeUpdated) && be(() => je(Z, j, S, W), m);
      } else {
        let S;
        const { el: T, props: I } = f, { bm: j, m: W, parent: X } = u, Z = hn(f);
        if (ot(u, !1), j && dn(j), !Z && (S = I && I.onVnodeBeforeMount) && je(S, X, f), ot(u, !0), T && Ln) {
          const ne = () => {
            u.subTree = Rn(u), Ln(T, u.subTree, u, m, null);
          };
          Z ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && ne()
          ) : ne();
        } else {
          const ne = u.subTree = Rn(u);
          A(null, ne, g, v, u, m, w), f.el = ne.el;
        }
        if (W && be(W, m), !Z && (S = I && I.onVnodeMounted)) {
          const ne = f;
          be(() => je(S, X, ne), m);
        }
        (f.shapeFlag & 256 || X && hn(X.vnode) && X.vnode.shapeFlag & 256) && u.a && be(u.a, m), u.isMounted = !0, f = g = v = null;
      }
    }, x = u.effect = new ps(
      _,
      () => xs(y),
      u.scope
    ), y = u.update = () => x.run();
    y.id = u.uid, ot(u, !0), y();
  }, Y = (u, f, g) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, ci(u, f.props, v, g), fi(u, f.children, g), kt(), Ds(), Pt();
  }, Ee = (u, f, g, v, m, w, C, _, x = !1) => {
    const y = u && u.children, S = u ? u.shapeFlag : 0, T = f.children, { patchFlag: I, shapeFlag: j } = f;
    if (I > 0) {
      if (I & 128) {
        Je(y, T, g, v, m, w, C, _, x);
        return;
      } else if (I & 256) {
        yt(y, T, g, v, m, w, C, _, x);
        return;
      }
    }
    j & 8 ? (S & 16 && ce(y, m, w), T !== y && d(g, T)) : S & 16 ? j & 16 ? Je(y, T, g, v, m, w, C, _, x) : ce(y, m, w, !0) : (S & 8 && d(g, ""), j & 16 && z(T, g, v, m, w, C, _, x));
  }, yt = (u, f, g, v, m, w, C, _, x) => {
    u = u || wt, f = f || wt;
    const y = u.length, S = f.length, T = Math.min(y, S);
    let I;
    for (I = 0; I < T; I++) {
      const j = f[I] = x ? Ye(f[I]) : He(f[I]);
      A(u[I], j, g, null, m, w, C, _, x);
    }
    y > S ? ce(u, m, w, !0, !1, T) : z(f, g, v, m, w, C, _, x, T);
  }, Je = (u, f, g, v, m, w, C, _, x) => {
    let y = 0;
    const S = f.length;
    let T = u.length - 1, I = S - 1;
    for (; y <= T && y <= I; ) {
      const j = u[y], W = f[y] = x ? Ye(f[y]) : He(f[y]);
      if (at(j, W))
        A(j, W, g, null, m, w, C, _, x);
      else
        break;
      y++;
    }
    for (; y <= T && y <= I; ) {
      const j = u[T], W = f[I] = x ? Ye(f[I]) : He(f[I]);
      if (at(j, W))
        A(j, W, g, null, m, w, C, _, x);
      else
        break;
      T--, I--;
    }
    if (y > T) {
      if (y <= I) {
        const j = I + 1, W = j < S ? f[j].el : v;
        for (; y <= I; )
          A(null, f[y] = x ? Ye(f[y]) : He(f[y]), g, W, m, w, C, _, x), y++;
      }
    } else if (y > I)
      for (; y <= T; )
        F(u[y], m, w, !0), y++;
    else {
      const j = y, W = y, X = /* @__PURE__ */ new Map();
      for (y = W; y <= I; y++) {
        const we = f[y] = x ? Ye(f[y]) : He(f[y]);
        we.key != null && X.set(we.key, y);
      }
      let Z, ne = 0;
      const Se = I - W + 1;
      let _t = !1, Fs = 0;
      const Rt = new Array(Se);
      for (y = 0; y < Se; y++)
        Rt[y] = 0;
      for (y = j; y <= T; y++) {
        const we = u[y];
        if (ne >= Se) {
          F(we, m, w, !0);
          continue;
        }
        let Le;
        if (we.key != null)
          Le = X.get(we.key);
        else
          for (Z = W; Z <= I; Z++)
            if (Rt[Z - W] === 0 && at(we, f[Z])) {
              Le = Z;
              break;
            }
        Le === void 0 ? F(we, m, w, !0) : (Rt[Le - W] = y + 1, Le >= Fs ? Fs = Le : _t = !0, A(we, f[Le], g, null, m, w, C, _, x), ne++);
      }
      const Ms = _t ? mi(Rt) : wt;
      for (Z = Ms.length - 1, y = Se - 1; y >= 0; y--) {
        const we = W + y, Le = f[we], Ns = we + 1 < S ? f[we + 1].el : v;
        Rt[y] === 0 ? A(null, Le, g, Ns, m, w, C, _, x) : _t && (Z < 0 || y !== Ms[Z] ? N(Le, g, Ns, 2) : Z--);
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
      C.move(u, f, g, De);
      return;
    }
    if (C === he) {
      s(w, f, g);
      for (let T = 0; T < x.length; T++)
        N(x[T], f, g, v);
      s(u.anchor, f, g);
      return;
    }
    if (C === $n) {
      L(u, f, g);
      return;
    }
    if (v !== 2 && y & 1 && _)
      if (v === 0)
        _.beforeEnter(w), s(w, f, g), be(() => _.enter(w), m);
      else {
        const { leave: T, delayLeave: I, afterLeave: j } = _, W = () => s(w, f, g), X = () => {
          T(w, () => {
            W(), j && j();
          });
        };
        I ? I(w, W, X) : X();
      }
    else
      s(w, f, g);
  }, F = (u, f, g, v = !1, m = !1) => {
    const { type: w, props: C, ref: _, children: x, dynamicChildren: y, shapeFlag: S, patchFlag: T, dirs: I } = u;
    if (_ != null && Gn(_, null, g, u, !0), S & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const j = S & 1 && I, W = !hn(u);
    let X;
    if (W && (X = C && C.onVnodeBeforeUnmount) && je(X, f, u), S & 6)
      ae(u.component, g, v);
    else {
      if (S & 128) {
        u.suspense.unmount(g, v);
        return;
      }
      j && lt(u, null, f, "beforeUnmount"), S & 64 ? u.type.remove(u, f, g, m, De, v) : y && (w !== he || T > 0 && T & 64) ? ce(y, f, g, !1, !0) : (w === he && T & 384 || !m && S & 16) && ce(x, f, g), v && pe(u);
    }
    (W && (X = C && C.onVnodeUnmounted) || j) && be(() => {
      X && je(X, f, u), j && lt(u, null, f, "unmounted");
    }, g);
  }, pe = (u) => {
    const { type: f, el: g, anchor: v, transition: m } = u;
    if (f === he) {
      st(g, v);
      return;
    }
    if (f === $n) {
      K(u);
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
  }, st = (u, f) => {
    let g;
    for (; u !== f; )
      g = p(u), r(u), u = g;
    r(f);
  }, ae = (u, f, g) => {
    const { bum: v, scope: m, update: w, subTree: C, um: _ } = u;
    v && dn(v), m.stop(), w && (w.active = !1, F(C, u, f, g)), _ && be(_, f), be(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ce = (u, f, g, v = !1, m = !1, w = 0) => {
    for (let C = w; C < u.length; C++)
      F(u[C], f, g, v, m);
  }, Ue = (u) => u.shapeFlag & 6 ? Ue(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el), rt = (u, f, g) => {
    u == null ? f._vnode && F(f._vnode, null, null, !0) : A(f._vnode || null, u, f, null, null, null, g), Ds(), zr(), f._vnode = u;
  }, De = {
    p: A,
    um: F,
    m: N,
    r: pe,
    mt: Lt,
    mc: z,
    pc: Ee,
    pbc: $,
    n: Ue,
    o: e
  };
  let jt, Ln;
  return t && ([jt, Ln] = t(De)), {
    render: rt,
    hydrate: jt,
    createApp: hi(rt, jt)
  };
}
function ot({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Os(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (k(s) && k(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = Ye(r[l]), i.el = o.el), n || Os(o, i));
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
const vi = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), Zs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, es = (e, t) => {
  const n = e && e.to;
  return fe(n) ? t ? t(n) : null : n;
}, yi = {
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, c, a) {
    const { mc: d, pc: h, pbc: p, o: { insert: b, querySelector: O, createText: E, createComment: A } } = a, P = Ut(t.props);
    let { shapeFlag: B, children: D, dynamicChildren: L } = t;
    if (e == null) {
      const K = t.el = E(""), Q = t.anchor = E("");
      b(K, n, s), b(Q, n, s);
      const re = t.target = es(t.props, O), M = t.targetAnchor = E("");
      re && (b(M, re), o = o || Zs(re));
      const z = (R, $) => {
        B & 16 && d(D, R, $, r, l, o, i, c);
      };
      P ? z(n, Q) : re && z(re, M);
    } else {
      t.el = e.el;
      const K = t.anchor = e.anchor, Q = t.target = e.target, re = t.targetAnchor = e.targetAnchor, M = Ut(e.props), z = M ? n : Q, R = M ? K : re;
      if (o = o || Zs(Q), L ? (p(e.dynamicChildren, L, z, r, l, o, i), Os(e, t, !0)) : c || h(e, t, z, R, r, l, o, i, !1), P)
        M || un(t, n, K, a, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = t.target = es(t.props, O);
        $ && un(t, $, null, a, 0);
      } else
        M && un(t, Q, re, a, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: h, props: p } = e;
    if (h && l(d), (o || !Ut(p)) && (l(a), i & 16))
      for (let b = 0; b < c.length; b++) {
        const O = c[b];
        r(O, t, n, !0, !!O.dynamicChildren);
      }
  },
  move: un,
  hydrate: _i
};
function un(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: c, children: a, props: d } = e, h = l === 2;
  if (h && s(o, t, n), (!h || Ut(d)) && c & 16)
    for (let p = 0; p < a.length; p++)
      r(a[p], t, n, 2);
  h && s(i, t, n);
}
function _i(e, t, n, s, r, l, { o: { nextSibling: o, parentNode: i, querySelector: c } }, a) {
  const d = t.target = es(t.props, c);
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Ut(t.props))
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
const ts = yi, he = Symbol(void 0), Ts = Symbol(void 0), Pe = Symbol(void 0), $n = Symbol(void 0), Dt = [];
let Ne = null;
function G(e = !1) {
  Dt.push(Ne = e ? null : []);
}
function bi() {
  Dt.pop(), Ne = Dt[Dt.length - 1] || null;
}
let Yt = 1;
function Gs(e) {
  Yt += e;
}
function il(e) {
  return e.dynamicChildren = Yt > 0 ? Ne || wt : null, bi(), Yt > 0 && Ne && Ne.push(e), e;
}
function ie(e, t, n, s, r, l) {
  return il(ue(e, t, n, s, r, l, !0));
}
function Cn(e, t, n, s, r) {
  return il(ze(e, t, n, s, r, !0));
}
function wi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function at(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kn = "__vInternal", cl = ({ key: e }) => e != null ? e : null, gn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? fe(e) || de(e) || U(e) ? { i: Me, r: e, k: t, f: !!n } : e : null;
function ue(e, t = null, n = null, s = 0, r = null, l = e === he ? 0 : 1, o = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cl(t),
    ref: t && gn(t),
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
  return i ? (Ss(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= fe(n) ? 8 : 16), Yt > 0 && !o && Ne && (c.patchFlag > 0 || l & 6) && c.patchFlag !== 32 && Ne.push(c), c;
}
const ze = xi;
function xi(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === ei) && (e = Pe), wi(e)) {
    const i = tt(e, t, !0);
    return n && Ss(i, n), Yt > 0 && !l && Ne && (i.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = i : Ne.push(i)), i.patchFlag |= -2, i;
  }
  if (Fi(e) && (e = e.__vccOpts), t) {
    t = As(t);
    let { class: i, style: c } = t;
    i && !fe(i) && (t.class = Ft(i)), se(c) && (jr(c) && !k(c) && (c = ye({}, c)), t.style = It(c));
  }
  const o = fe(e) ? 1 : jo(e) ? 128 : vi(e) ? 64 : se(e) ? 4 : U(e) ? 2 : 0;
  return ue(e, t, n, s, r, o, l, !0);
}
function As(e) {
  return e ? jr(e) || kn in e ? ye({}, e) : e : null;
}
function tt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: l, children: o } = e, i = t ? Xt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && cl(i),
    ref: t && t.ref ? n && r ? k(r) ? r.concat(gn(t)) : [r, gn(t)] : gn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== he ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ns(e = " ", t = 0) {
  return ze(Ts, null, e, t);
}
function Te(e = "", t = !1) {
  return t ? (G(), Cn(Pe, null, e)) : ze(Pe, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ze(Pe) : k(e) ? ze(
    he,
    null,
    e.slice()
  ) : typeof e == "object" ? Ye(e) : ze(Ts, null, String(e));
}
function Ye(e) {
  return e.el === null || e.memo ? e : tt(e);
}
function Ss(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ss(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(kn in t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    U(t) ? (t = { default: t, _ctx: Me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ft([t.class, s.class]));
      else if (r === "style")
        t.style = It([t.style, s.style]);
      else if (En(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(k(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
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
    propsDefaults: ee,
    inheritAttrs: s.inheritAttrs,
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
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
let ge = null;
const ul = () => ge || Me, At = (e) => {
  ge = e, e.scope.on();
}, pt = () => {
  ge && ge.scope.off(), ge = null;
};
function al(e) {
  return e.vnode.shapeFlag & 4;
}
let Zt = !1;
function Ti(e, t = !1) {
  Zt = t;
  const { props: n, children: s } = e.vnode, r = al(e);
  ii(e, n, r, t), ai(e, s);
  const l = r ? Ai(e, t) : void 0;
  return Zt = !1, l;
}
function Ai(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Rr(new Proxy(e.ctx, ti));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ii(e) : null;
    At(e), kt();
    const l = Ze(s, e, 0, [e.props, r]);
    if (Pt(), pt(), wr(l)) {
      if (l.then(pt, pt), t)
        return l.then((o) => {
          er(e, o, t);
        }).catch((o) => {
          An(o, e, 0);
        });
      e.asyncDep = l;
    } else
      er(e, l, t);
  } else
    fl(e, t);
}
function er(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Ur(t)), fl(e, n);
}
let tr;
function fl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && tr && !s.render) {
      const r = s.template || Cs(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = ye(ye({
          isCustomElement: l,
          delimiters: i
        }, o), c);
        s.render = tr(r, a);
      }
    }
    e.render = s.render || ke;
  }
  At(e), kt(), ni(e), Pt(), pt();
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
function Pn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ur(Rr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in wn)
          return wn[n](e);
      }
    }));
}
function Fi(e) {
  return U(e) && "__vccOpts" in e;
}
const Fe = (e, t) => Eo(e, t, Zt), Mi = "3.2.39", Ni = "http://www.w3.org/2000/svg", ft = typeof document < "u" ? document : null, nr = ft && /* @__PURE__ */ ft.createElement("template"), ki = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ft.createElementNS(Ni, e) : ft.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ft.createTextNode(e),
  createComment: (e) => ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ft.querySelector(e),
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
  const s = e.style, r = fe(n);
  if (n && !r) {
    for (const l in n)
      ss(s, l, n[l]);
    if (t && !fe(t))
      for (const l in t)
        n[l] == null && ss(s, l, "");
  } else {
    const l = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = l);
  }
}
const sr = /\s*!important$/;
function ss(e, t, n) {
  if (k(n))
    n.forEach((s) => ss(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ji(e, t);
    sr.test(n) ? e.setProperty(Nt(s), n.replace(sr, ""), "important") : e[s] = n;
  }
}
const rr = ["Webkit", "Moz", "ms"], Un = {};
function ji(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let s = Ot(t);
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
function Ri(e, t, n, s, r) {
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
  return [e[2] === ":" ? e.slice(3) : Nt(e.slice(2)), t];
}
function Wi(e, t) {
  const n = (s) => {
    const r = s.timeStamp || dl();
    (Hi || r >= n.attached - 1) && Ae(qi(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Di(), n;
}
function qi(e, t) {
  if (k(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const ir = /^on[a-z]/, Ji = (e, t, n, s, r = !1, l, o, i, c) => {
  t === "class" ? Pi(e, s, r) : t === "style" ? Li(e, n, s) : En(t) ? as(t) || Vi(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qi(e, t, s, r)) ? Bi(e, t, s, l, o, i, c) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ri(e, t, s, r));
};
function Qi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && ir.test(t) && U(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ir.test(t) && fe(n) ? !1 : t in e;
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
const nt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (n) => dn(t, n) : t;
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
    e._assign = nt(r);
    const l = s || r.props && r.props.type === "number";
    Ve(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = vn(i)), e._assign(i);
    }), n && Ve(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ve(e, "compositionstart", Xi), Ve(e, "compositionend", cr), Ve(e, "change", cr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e._assign = nt(l), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && vn(e.value) === t))
      return;
    const o = t == null ? "" : t;
    e.value !== o && (e.value = o);
  }
}, Zi = {
  deep: !0,
  created(e, t, n) {
    e._assign = nt(n), Ve(e, "change", () => {
      const s = e._modelValue, r = St(e), l = e.checked, o = e._assign;
      if (k(s)) {
        const i = us(s, r), c = i !== -1;
        if (l && !c)
          o(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (Mt(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(hl(e, l));
    });
  },
  mounted: ur,
  beforeUpdate(e, t, n) {
    e._assign = nt(n), ur(e, t, n);
  }
};
function ur(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, k(t) ? e.checked = us(t, s.props.value) > -1 : Mt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = mt(t, hl(e, !0)));
}
const Gi = {
  created(e, { value: t }, n) {
    e.checked = mt(t, n.props.value), e._assign = nt(n), Ve(e, "change", () => {
      e._assign(St(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = nt(s), t !== n && (e.checked = mt(t, s.props.value));
  }
}, ec = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Mt(t);
    Ve(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? vn(St(o)) : St(o));
      e._assign(e.multiple ? r ? new Set(l) : l : l[0]);
    }), e._assign = nt(s);
  },
  mounted(e, { value: t }) {
    ar(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = nt(n);
  },
  updated(e, { value: t }) {
    ar(e, t);
  }
};
function ar(e, t) {
  const n = e.multiple;
  if (!(n && !k(t) && !Mt(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const l = e.options[s], o = St(l);
      if (n)
        k(t) ? l.selected = us(t, o) > -1 : l.selected = t.has(o);
      else if (mt(St(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function St(e) {
  return "_value" in e ? e._value : e.value;
}
function hl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const tc = {
  created(e, t, n) {
    an(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    an(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    an(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    an(e, t, n, s, "updated");
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
function an(e, t, n, s, r) {
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
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Bt(e, !0), s.enter(e)) : s.leave(e, () => {
      Bt(e, !1);
    }) : Bt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Bt(e, t);
  }
};
function Bt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const lc = /* @__PURE__ */ ye({ patchProp: Ji }, ki);
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
    !U(l) && !l.render && !l.template && (l.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function ic(e) {
  return fe(e) ? document.querySelector(e) : e;
}
var dr;
const tn = typeof window < "u";
tn && ((dr = window == null ? void 0 : window.navigator) == null ? void 0 : dr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cc(e) {
  return typeof e == "function" ? e() : H(e);
}
function uc(e) {
  return e;
}
function ac(e) {
  return Vl() ? (zl(e), !0) : !1;
}
function fc(e, t = !0) {
  ul() ? en(e) : t ? e() : qt(e);
}
function vl(e) {
  var t;
  const n = cc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dc = tn ? window : void 0;
tn && window.document;
tn && window.navigator;
tn && window.location;
function hc(e, t = !1) {
  const n = te(), s = () => n.value = Boolean(e());
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
  }, a = Ge(() => vl(e), (h) => {
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
  const { box: s = "content-box" } = n, r = te(t.width), l = te(t.height);
  return vc(e, ([o]) => {
    const i = s === "border-box" ? o.borderBoxSize : s === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
    i ? (r.value = i.reduce((c, { inlineSize: a }) => c + a, 0), l.value = i.reduce((c, { blockSize: a }) => c + a, 0)) : (r.value = o.contentRect.width, l.value = o.contentRect.height);
  }, n), Ge(() => vl(e), (o) => {
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
  const n = te(), s = yc(n), r = te([]), l = _o(e), o = te({ start: 0, end: 10 }), { itemHeight: i, overscan: c = 5 } = t, a = (B) => {
    if (typeof i == "number")
      return Math.ceil(B / i);
    const { start: D = 0 } = o.value;
    let L = 0, K = 0;
    for (let Q = D; Q < l.value.length; Q++)
      if (L += i(Q), L >= B) {
        K = Q;
        break;
      }
    return K - D;
  }, d = (B) => {
    if (typeof i == "number")
      return Math.floor(B / i) + 1;
    let D = 0, L = 0;
    for (let K = 0; K < l.value.length; K++)
      if (D += i(K), D >= B) {
        L = K;
        break;
      }
    return L + 1;
  }, h = () => {
    const B = n.value;
    if (B) {
      const D = d(B.scrollTop), L = a(B.clientHeight), K = D - c, Q = D + L + c;
      o.value = {
        start: K < 0 ? 0 : K,
        end: Q > l.value.length ? l.value.length : Q
      }, r.value = l.value.slice(o.value.start, o.value.end).map((re, M) => ({
        data: re,
        index: M + o.value.start
      }));
    }
  };
  Ge([s.width, s.height, e], () => {
    h();
  });
  const p = Fe(() => typeof i == "number" ? l.value.length * i : l.value.reduce((B, D, L) => B + i(L), 0)), b = (B) => typeof i == "number" ? B * i : l.value.slice(0, B).reduce((L, K, Q) => L + i(Q), 0), O = (B) => {
    n.value && (n.value.scrollTop = b(B), h());
  }, E = Fe(() => b(o.value.start)), A = Fe(() => ({
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
const it = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, Ec = (e, t, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const s = {
    defaultArray: e.value,
    get: () => e.value,
    push: (r, l, o = null) => {
      parseInt(r) == r && (r = parseInt(r));
      const i = e.map.get(r);
      if (i)
        i.value = l, i.data = o;
      else {
        let c = { value: l, key: r, data: o };
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
      r == null && (r = (l, o) => l.value.localeCompare(o.value)), e.value = e.value.sort(r);
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
let Oc = 1;
const _l = (e) => {
  e && (e.style.display = "none", Sl(e));
}, bl = (e, t, n, s) => {
  var c;
  const r = te(/* @__PURE__ */ new Map());
  Qt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = te([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, Qt(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: it(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => it(d.value)).filter((d) => d != null))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: it(d.value), data: Object.assign({}, d.dataset) }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (l.value = [{ value: a, key: a }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(it(a), it(a));
  else
    s != null && r.value.set(it(s), it(s));
  Ec(l, r, (c = e == null ? void 0 : e.id) != null ? c : "extraselect_" + (++Oc).toString());
  const o = [];
  return r.value.forEach((a, d) => {
    o.push([d, a]);
  }), { options: l, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, d] of o)
      r.value.set(a, d);
  } };
};
te({});
function Tc(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Is = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), wl(te(n), "defaults");
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
  const c = te(0), a = te(!1), d = Fe(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      Qt((p) => {
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
  const l = te(""), o = te([]), i = te({}), c = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in c) {
    let h = c[d], p = document.getElementById(d);
    i.value[d] = p == null ? void 0 : p.value, p && p.addEventListener("change", (b) => {
      i.value[d] = b.target.value, h && qt(() => {
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
  return Qt(() => {
    o.value = a(e, l.value);
  }), { filterText: l, filteredOptions: o, filterValues: i };
}, Ol = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(h) {
    const b = document.createElement("canvas").getContext("2d");
    return b.font = i, b.measureText(h).width;
  }, a = Fe(() => {
    var p, b;
    const h = (p = nn(s.value).width) != null ? p : 100;
    if (o === "inherit")
      return h;
    if (o == null || o === "dynamic") {
      const O = (b = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? b : 16;
      return Math.max(h, Math.max(...e.value.map((E) => c(E.value))) + 20 + O * 3);
    }
    return o;
  }), d = te({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ho(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = nn(s.value), p = nn(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var p = nn(l.value);
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
}, Fc = ["onClick"], Mc = ["innerHTML"], Nc = ["value", "disabled"], kc = {
  key: 0,
  class: "input-searching"
}, Pc = ["placeholder"], Lc = {
  key: 0,
  class: "allselect-clear"
}, jc = { class: "row-input" }, Rc = ["checked"], Bc = { class: "row-input" }, Hc = ["checked"], $c = {
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
    dropdownContainer: { type: String, default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var Ee, yt, Je;
    const n = e, s = Fe(() => {
      var N, F;
      return (F = (N = n.originalNode) == null ? void 0 : N.multiple) != null ? F : n.multiple;
    }), { options: r, selectedOptions: l, onReset: o } = bl(n.originalNode, $t(n, "options"), $t(n, "modelValue"), n.initialValue), { t: i } = xl(n.originalNode, $t(n, "localization")), c = (Ee = n.originalNode) == null ? void 0 : Ee.classList, a = Object.values((Je = (yt = n.originalNode) == null ? void 0 : yt.style) != null ? Je : {});
    _l(n.originalNode);
    const d = (N, F = null) => {
      if (s.value) {
        let pe = F;
        switch (pe == null && (pe = !l.value.has(N)), pe) {
          case !0:
            l.value.set(N, N);
            break;
          case !1:
            l.value.delete(N);
            break;
        }
      } else
        l.value.clear(), F !== !1 && l.value.set(N, N), B.value = !1;
      M(Array.from(l.value.keys()));
    }, { filterText: h, filteredOptions: p, filterValues: b } = El(r, l, d, n.filterFields, n.hardFilterFields), { searchingFlag: O } = Cl(
      r,
      n.url,
      n.searchableUrl,
      h,
      n.minChars,
      b,
      n.fetchMode,
      n.fetchOptions
    ), E = te(null), A = te(null), P = te(null), B = te(!1);
    function D(N) {
      n.disabled || (B.value = N);
    }
    const L = te(null), K = function(N) {
      const F = bt(N.target);
      F.push(N.target), !F.includes(E.value) && !F.includes(A.value) && (B.value = !1);
    };
    en(() => {
      if (n.dropdownContainer) {
        let N = !1;
        L.value = bt(E.value).find((F) => !!(F instanceof Element && (F.matches(n.dropdownContainer) && (N = !0), N && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(F).position))));
      }
      if (L.value == null && (L.value = document.querySelector("body")), n.originalNode) {
        for (let F of c)
          F != "extraselect" && E.value.classList.add(F);
        for (let F of a)
          E.value.style[F] = n.originalNode.style[F];
        let N = bt(E.value, "form").pop();
        N instanceof HTMLElement && N.matches("form") && N.addEventListener("reset", () => setTimeout(o)), n.originalNode.toggleValue = d, n.originalNode.setValues = (F) => {
          l.value.clear();
          for (let pe of F)
            d(pe);
        };
      }
      window.document.addEventListener("mousedown", K), window.document.addEventListener("focusin", K);
    }), Nn(() => {
      window.document.removeEventListener("mousedown", K), window.document.removeEventListener("focusin", K);
    });
    const { dropdownStyle: Q, getTextWidth: re } = Ol(r, l, B, E, A, L, n.maxWidth), M = (N) => {
      qt(
        () => {
          var F;
          return (F = n.originalNode) == null ? void 0 : F.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", N);
    }, z = (N) => {
      R(N, !1), h.value = "";
    }, R = (N, F = null) => {
      F == null && (F = !J.value), F ? (l.value.clear(), r.value.forEach((pe) => l.value.set(pe.key, pe.key))) : l.value.clear(), M(Array.from(l.value.keys()));
    }, $ = () => {
      oe.value ? p.value.forEach((N) => {
        l.value.has(N.key) && l.value.delete(N.key);
      }) : p.value.forEach((N) => {
        l.value.has(N.key) || l.value.set(N.key, N.key);
      }), M(Array.from(l.value.keys()));
    };
    Ge(B, (N, F) => {
      N != F && (N ? n.search && qt(() => {
        P.value.focus({ focusVisible: !0 });
      }) : h.value = "");
    });
    const J = Fe(() => l.value.size == r.value.length), oe = Fe(() => p.value.reduce((N, F) => N && l.value.has(F.key), !0)), vt = Fe(() => l.value.size == 0), Lt = Fe(() => {
      var N, F, pe, st, ae;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (vt.value)
          return i("No selection");
        if (!n.searchableUrl && J.value)
          return i("All selected");
        const ce = E.value ? getComputedStyle(E.value) : null, Ue = ((N = E.value) == null ? void 0 : N.clientWidth) - parseInt(ce == null ? void 0 : ce.paddingLeft) - parseInt(ce == null ? void 0 : ce.paddingRight);
        let rt = i(":n selected - ", { n: l.value.size }), De = !0;
        for (let jt of l.value)
          if (De ? De = !1 : rt += ", ", rt += (pe = (F = r.map.get(jt[0])) == null ? void 0 : F.value) != null ? pe : O.value ? i("Loading...") : i("Value not found"), Ue < re(rt))
            return l.value.size + i(" selected");
        return rt;
      } else
        for (let ce of l.value)
          return (ae = (st = r.map.get(ce[0])) == null ? void 0 : st.value) != null ? ae : O.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: me, containerProps: le, wrapperProps: Y } = yl(
      p,
      {
        itemHeight: 32
      }
    );
    return (N, F) => {
      var pe, st;
      return G(), ie(he, null, [
        H(s) && H(l).size == 0 ? (G(), ie("input", {
          key: 0,
          type: "hidden",
          name: (st = (pe = n.originalNode) == null ? void 0 : pe.name) == null ? void 0 : st.replace("[]", ""),
          value: ""
        }, null, 8, Sc)) : Te("", !0),
        n.showSelected ? (G(), ie("div", Ic, [
          (G(!0), ie(he, null, pn(H(l), (ae) => {
            var ce;
            return G(), ie("div", {
              key: ae,
              onClick: (Ue) => d(ae[0]),
              class: "selection-badge"
            }, [
              ns(Be((ce = H(r).find((Ue) => Ue.key == ae[0])) == null ? void 0 : ce.value) + " ", 1),
              ue("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Mc)
            ], 8, Fc);
          }), 128))
        ])) : Te("", !0),
        ue("input", Xt({
          onFocus: F[0] || (F[0] = (ae) => D(!0)),
          onClick: F[1] || (F[1] = (ae) => D(!0)),
          ref_key: "inputNode",
          ref: E,
          value: H(Lt),
          class: "extra-select extra-select-input",
          readonly: ""
        }, N.$attrs, { disabled: e.disabled }), null, 16, Nc),
        L.value ? (G(), Cn(ts, {
          key: 2,
          to: L.value
        }, [
          bn(ue("div", {
            class: Ft(["extra-select dropdown", { searching: H(O) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: It(H(Q))
          }, [
            n.search ? (G(), ie("div", kc, [
              bn(ue("input", {
                ref_key: "searchNode",
                ref: P,
                class: "extra-select-search",
                "onUpdate:modelValue": F[2] || (F[2] = (ae) => de(h) ? h.value = ae : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: H(i)("Search...")
              }, null, 8, Pc), [
                [ls, H(h)]
              ])
            ])) : Te("", !0),
            H(h).length >= n.minChars ? (G(), ie(he, { key: 1 }, [
              H(s) ? (G(), ie("div", Lc, [
                H(h).length == 0 ? (G(), ie("div", {
                  key: 0,
                  onClick: R,
                  class: "all-select"
                }, [
                  ue("div", jc, [
                    ue("input", {
                      checked: H(J),
                      type: "checkbox"
                    }, null, 8, Rc),
                    ue("b", null, Be(H(i)("Select all")), 1)
                  ])
                ])) : Te("", !0),
                H(p).length > 0 && H(h).length > 0 ? (G(), ie("div", {
                  key: 1,
                  onClick: $,
                  class: "all-select"
                }, [
                  ue("div", Bc, [
                    ue("input", {
                      checked: H(oe),
                      type: "checkbox"
                    }, null, 8, Hc),
                    ue("b", null, Be(H(i)("Select Filtered")), 1)
                  ])
                ])) : Te("", !0),
                ue("div", {
                  class: "clear",
                  onClick: z
                }, Be(H(i)("Clear")), 1)
              ])) : Te("", !0),
              H(p).length == 0 ? (G(), ie("div", $c, Be(H(i)("No matches found")), 1)) : Te("", !0)
            ], 64)) : (G(), ie("div", Uc, Be(H(i)("Insert at least :n characters", { n: n.minChars })), 1)),
            ue("div", Xt(H(le), { class: "scroller" }), [
              ue("div", _r(As(H(Y))), [
                (G(!0), ie(he, null, pn(H(me), (ae) => (G(), ie("button", {
                  key: ae.index,
                  class: "dropdown-row",
                  onClick: pl((ce) => d(ae.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  ue("div", Kc, [
                    H(s) ? (G(), ie("input", {
                      key: 0,
                      checked: H(l).has(ae.data.key),
                      type: "checkbox"
                    }, null, 8, Vc)) : Te("", !0),
                    ns(" " + Be(ae.data.value), 1)
                  ])
                ], 8, Dc))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [gl, B.value]
          ])
        ], 8, ["to"])) : Te("", !0),
        n.originalNode ? (G(), Cn(ts, {
          key: 3,
          to: n.originalNode
        }, [
          (G(!0), ie(he, null, pn(H(l), (ae) => (G(), ie("option", {
            key: ae[0],
            selected: "selected",
            value: ae[0]
          }, null, 8, zc))), 128))
        ], 8, ["to"])) : Te("", !0)
      ], 64);
    };
  }
}), Jc = ["disabled"], Qc = {
  key: 0,
  class: "no-matches"
}, Yc = { key: 1 }, Xc = ["onClick"], Zc = { class: "row-input" }, Gc = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, eu = /* @__PURE__ */ Object.assign(Gc, {
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
    var re, M, z;
    const n = e, { options: s } = bl(n.originalNode, $t(n, "options"), te([])), { t: r } = xl(n.originalNode, $t(n, "localization")), l = (re = n.originalNode) == null ? void 0 : re.classList, o = Object.values((z = (M = n.originalNode) == null ? void 0 : M.style) != null ? z : {});
    _l(n.originalNode);
    const i = (R, $ = null) => {
      $ === !1 ? c.value = "" : c.value = s.map.get(R).value, O.value = !1;
    }, { filterText: c, filteredOptions: a, filterValues: d } = El(s, null, i, n.filterFields, n.hardFilterFields), { searchingFlag: h } = Cl(
      s,
      n.url,
      n.searchableUrl,
      c,
      n.minChars,
      d,
      n.fetchMode,
      n.fetchOptions
    ), p = te(null), b = te(null), O = te(!1), E = te(null);
    function A(R) {
      n.disabled || (O.value = R);
    }
    const P = function(R) {
      const $ = bt(R.target);
      $.push(R.target), !$.includes(p.value) && !$.includes(b.value) && (O.value = !1);
    };
    en(() => {
      if (n.dropdownContainer) {
        let J = !1;
        E.value = bt(p.value).find((oe) => !!(oe instanceof Element && (oe.matches(n.dropdownContainer) && (J = !0), J && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(oe).position))));
      }
      if (E.value == null && (E.value = document.querySelector("body")), n.originalNode) {
        for (let oe of l)
          oe != "extrasuggest" && p.value.classList.add(oe);
        for (let oe of o)
          p.value.style[oe] = n.originalNode.style[oe];
        c.value = n.originalNode.value;
        let J = bt(p.value, "form").pop();
        J instanceof HTMLElement && J.matches("form") && J.addEventListener("reset", () => setTimeout($)), n.originalNode.addEventListener("change", () => {
          D(!0);
        });
      }
      Qt(() => {
        n.modelValue != null && (c.value = n.modelValue);
      });
      const R = c.value, $ = () => {
        c.value = R;
      };
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), Nn(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { dropdownStyle: B } = Ol(s, te([]), O, p, b, E, n.maxWidth), D = (R = !1) => {
      var $;
      n.originalNode && (R ? c.value = n.originalNode.value : (n.originalNode.value = c.value, ($ = n.originalNode) == null || $.dispatchEvent(new Event("change", { bubbles: !0 })))), t("update:modelValue", c.value);
    };
    Ge(() => O.value, (R) => {
      R === !1 && D();
    });
    const { list: L, containerProps: K, wrapperProps: Q } = yl(
      a,
      {
        itemHeight: 32
      }
    );
    return (R, $) => (G(), ie(he, null, [
      bn(ue("input", Xt({
        onFocus: $[0] || ($[0] = (J) => A(!0)),
        onClick: $[1] || ($[1] = (J) => A(!0)),
        ref_key: "inputNode",
        ref: p,
        "onUpdate:modelValue": $[2] || ($[2] = (J) => de(c) ? c.value = J : null),
        class: "extra-select extra-select-input"
      }, R.$attrs, { disabled: e.disabled }), null, 16, Jc), [
        [tc, H(c)]
      ]),
      E.value ? (G(), Cn(ts, {
        key: 0,
        to: E.value
      }, [
        bn(ue("div", {
          class: Ft(["extra-select dropdown", { searching: H(h) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: It(H(B))
        }, [
          H(c).length >= n.minChars ? (G(), ie(he, { key: 0 }, [
            H(a).length == 0 ? (G(), ie("div", Qc, Be(H(r)("No matches found")), 1)) : Te("", !0)
          ], 64)) : (G(), ie("div", Yc, Be(H(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          ue("div", Xt(H(K), { class: "scroller" }), [
            ue("div", _r(As(H(Q))), [
              (G(!0), ie(he, null, pn(H(L), (J) => (G(), ie("button", {
                key: J.index,
                class: "dropdown-row",
                onClick: pl((oe) => i(J.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ue("div", Zc, Be(J.data.value), 1)
              ], 8, Xc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [gl, O.value]
        ])
      ], 8, ["to"])) : Te("", !0)
    ], 64));
  }
}), tu = Is, Tl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Tl.bindNew(e);
    });
  },
  bindNew(e) {
    gt.lock(e, "extra-select", () => {
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
      const s = ml(qc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), gt.remove(e, "extra-select");
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
    gt.lock(e, "extra-suggest", () => {
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
      const s = ml(eu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), gt.remove(e, "extra-suggest");
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
  tu as loadExtraSelectDefaultLocalization
};
