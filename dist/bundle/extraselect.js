const Re = /* @__PURE__ */ new WeakMap();
class mt {
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
    return mt.has(t, n) ? !1 : (mt.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Re);
function sn(e) {
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
function wt(e, t) {
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
function us(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Il = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fl = /* @__PURE__ */ us(Il);
function _r(e) {
  return !!e || e === "";
}
function Ft(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = fe(s) ? kl(s) : Ft(s);
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
function Mt(e) {
  let t = "";
  if (fe(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const s = Mt(e[n]);
      s && (t += s + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function br(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !fe(t) && (e.class = Mt(t)), n && (e.style = Ft(n)), e;
}
function Pl(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = vt(e[s], t[s]);
  return n;
}
function vt(e, t) {
  if (e === t)
    return !0;
  let n = Ps(e), s = Ps(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Vt(e), s = Vt(t), n || s)
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
      if (i && !c || !i && c || !vt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function as(e, t) {
  return e.findIndex((n) => vt(n, t));
}
const Be = (e) => fe(e) ? e : e == null ? "" : k(e) || se(e) && (e.toString === Cr || !U(e.toString)) ? JSON.stringify(e, wr, 2) : String(e), wr = (e, t) => t && t.__v_isRef ? wr(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Nt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : se(t) && !k(t) && !Er(t) ? String(t) : t, ee = {}, xt = [], ke = () => {
}, Ll = () => !1, jl = /^on[^a-z]/, On = (e) => jl.test(e), fs = (e) => e.startsWith("onUpdate:"), ye = Object.assign, ds = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rl = Object.prototype.hasOwnProperty, V = (e, t) => Rl.call(e, t), k = Array.isArray, Ct = (e) => en(e) === "[object Map]", Nt = (e) => en(e) === "[object Set]", Ps = (e) => en(e) === "[object Date]", U = (e) => typeof e == "function", fe = (e) => typeof e == "string", Vt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", xr = (e) => se(e) && U(e.then) && U(e.catch), Cr = Object.prototype.toString, en = (e) => Cr.call(e), Bl = (e) => en(e).slice(8, -1), Er = (e) => en(e) === "[object Object]", ps = (e) => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dn = /* @__PURE__ */ us(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hl = /-(\w)/g, Tt = Tn((e) => e.replace(Hl, (t, n) => n ? n.toUpperCase() : "")), $l = /\B([A-Z])/g, kt = Tn((e) => e.replace($l, "-$1").toLowerCase()), Or = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rn = Tn((e) => e ? `on${Or(e)}` : ""), zt = (e, t) => !Object.is(e, t), pn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, vn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ls;
const Ul = () => Ls || (Ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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
}, Tr = (e) => (e.w & tt) > 0, Ar = (e) => (e.n & tt) > 0, Wl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= tt;
}, ql = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Tr(r) && !Ar(r) ? r.delete(e) : t[n++] = r, r.w &= ~tt, r.n &= ~tt;
    }
    t.length = n;
  }
}, Kn = /* @__PURE__ */ new WeakMap();
let $t = 0, tt = 1;
const Vn = 30;
let Ie;
const ht = Symbol(""), zn = Symbol("");
class gs {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Kl(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ie, n = Ge;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ie, Ie = this, Ge = !0, tt = 1 << ++$t, $t <= Vn ? Wl(this) : js(this), this.fn();
    } finally {
      $t <= Vn && ql(this), tt = 1 << --$t, Ie = this.parent, Ge = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ie === this ? this.deferStop = !0 : this.active && (js(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function js(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ge = !0;
const Sr = [];
function Pt() {
  Sr.push(Ge), Ge = !1;
}
function Lt() {
  const e = Sr.pop();
  Ge = e === void 0 ? !0 : e;
}
function Ce(e, t, n) {
  if (Ge && Ie) {
    let s = Kn.get(e);
    s || Kn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = hs()), Ir(r);
  }
}
function Ir(e, t) {
  let n = !1;
  $t <= Vn ? Ar(e) || (e.n |= tt, n = !Tr(e)) : n = !e.has(Ie), n && (e.add(Ie), Ie.deps.push(e));
}
function qe(e, t, n, s, r, l) {
  const o = Kn.get(e);
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
        k(e) ? ps(n) && i.push(o.get("length")) : (i.push(o.get(ht)), Ct(e) && i.push(o.get(zn)));
        break;
      case "delete":
        k(e) || (i.push(o.get(ht)), Ct(e) && i.push(o.get(zn)));
        break;
      case "set":
        Ct(e) && i.push(o.get(ht));
        break;
    }
  if (i.length === 1)
    i[0] && Wn(i[0]);
  else {
    const c = [];
    for (const a of i)
      a && c.push(...a);
    Wn(hs(c));
  }
}
function Wn(e, t) {
  const n = k(e) ? e : [...e];
  for (const s of n)
    s.computed && Rs(s);
  for (const s of n)
    s.computed || Rs(s);
}
function Rs(e, t) {
  (e !== Ie || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Jl = /* @__PURE__ */ us("__proto__,__v_isRef,__isVue"), Fr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vt)
), Ql = /* @__PURE__ */ ms(), Yl = /* @__PURE__ */ ms(!1, !0), Xl = /* @__PURE__ */ ms(!0), Bs = /* @__PURE__ */ Zl();
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
      Pt();
      const s = q(this)[t].apply(this, n);
      return Lt(), s;
    };
  }), e;
}
function ms(e = !1, t = !1) {
  return function(s, r, l) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && l === (e ? t ? go : Lr : t ? Pr : kr).get(s))
      return s;
    const o = k(s);
    if (!e && o && V(Bs, r))
      return Reflect.get(Bs, r, l);
    const i = Reflect.get(s, r, l);
    return (Vt(r) ? Fr.has(r) : Jl(r)) || (e || Ce(s, "get", r), t) ? i : de(i) ? o && ps(r) ? i : i.value : se(i) ? e ? jr(i) : _s(i) : i;
  };
}
const Gl = /* @__PURE__ */ Mr(), eo = /* @__PURE__ */ Mr(!0);
function Mr(e = !1) {
  return function(n, s, r, l) {
    let o = n[s];
    if (At(o) && de(o) && !de(r))
      return !1;
    if (!e && (!_n(r) && !At(r) && (o = q(o), r = q(r)), !k(n) && de(o) && !de(r)))
      return o.value = r, !0;
    const i = k(n) && ps(s) ? Number(s) < n.length : V(n, s), c = Reflect.set(n, s, r, l);
    return n === q(l) && (i ? zt(r, o) && qe(n, "set", s, r) : qe(n, "add", s, r)), c;
  };
}
function to(e, t) {
  const n = V(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && qe(e, "delete", t, void 0), s;
}
function no(e, t) {
  const n = Reflect.has(e, t);
  return (!Vt(t) || !Fr.has(t)) && Ce(e, "has", t), n;
}
function so(e) {
  return Ce(e, "iterate", k(e) ? "length" : ht), Reflect.ownKeys(e);
}
const Nr = {
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
}, lo = /* @__PURE__ */ ye({}, Nr, {
  get: Yl,
  set: eo
}), vs = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function rn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = q(e), l = q(t);
  n || (t !== l && Ce(r, "get", t), Ce(r, "get", l));
  const { has: o } = An(r), i = s ? vs : n ? ws : Wt;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function ln(e, t = !1) {
  const n = this.__v_raw, s = q(n), r = q(e);
  return t || (e !== r && Ce(s, "has", e), Ce(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function on(e, t = !1) {
  return e = e.__v_raw, !t && Ce(q(e), "iterate", ht), Reflect.get(e, "size", e);
}
function Hs(e) {
  e = q(e);
  const t = q(this);
  return An(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function $s(e, t) {
  t = q(t);
  const n = q(this), { has: s, get: r } = An(n);
  let l = s.call(n, e);
  l || (e = q(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? zt(t, o) && qe(n, "set", e, t) : qe(n, "add", e, t), this;
}
function Us(e) {
  const t = q(this), { has: n, get: s } = An(t);
  let r = n.call(t, e);
  r || (e = q(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && qe(t, "delete", e, void 0), l;
}
function Ds() {
  const e = q(this), t = e.size !== 0, n = e.clear();
  return t && qe(e, "clear", void 0, void 0), n;
}
function cn(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = q(o), c = t ? vs : e ? ws : Wt;
    return !e && Ce(i, "iterate", ht), o.forEach((a, d) => s.call(r, c(a), c(d), l));
  };
}
function un(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = q(r), o = Ct(l), i = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), d = n ? vs : t ? ws : Wt;
    return !t && Ce(l, "iterate", c ? zn : ht), {
      next() {
        const { value: p, done: h } = a.next();
        return h ? { value: p, done: h } : {
          value: i ? [d(p[0]), d(p[1])] : d(p),
          done: h
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
      return rn(this, l);
    },
    get size() {
      return on(this);
    },
    has: ln,
    add: Hs,
    set: $s,
    delete: Us,
    clear: Ds,
    forEach: cn(!1, !1)
  }, t = {
    get(l) {
      return rn(this, l, !1, !0);
    },
    get size() {
      return on(this);
    },
    has: ln,
    add: Hs,
    set: $s,
    delete: Us,
    clear: Ds,
    forEach: cn(!1, !0)
  }, n = {
    get(l) {
      return rn(this, l, !0);
    },
    get size() {
      return on(this, !0);
    },
    has(l) {
      return ln.call(this, l, !0);
    },
    add: Ye("add"),
    set: Ye("set"),
    delete: Ye("delete"),
    clear: Ye("clear"),
    forEach: cn(!0, !1)
  }, s = {
    get(l) {
      return rn(this, l, !0, !0);
    },
    get size() {
      return on(this, !0);
    },
    has(l) {
      return ln.call(this, l, !0);
    },
    add: Ye("add"),
    set: Ye("set"),
    delete: Ye("delete"),
    clear: Ye("clear"),
    forEach: cn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = un(l, !1, !1), n[l] = un(l, !0, !1), t[l] = un(l, !1, !0), s[l] = un(l, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [io, co, uo, ao] = /* @__PURE__ */ oo();
function ys(e, t) {
  const n = t ? e ? ao : uo : e ? co : io;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(V(n, r) && r in s ? n : s, r, l);
}
const fo = {
  get: /* @__PURE__ */ ys(!1, !1)
}, po = {
  get: /* @__PURE__ */ ys(!1, !0)
}, ho = {
  get: /* @__PURE__ */ ys(!0, !1)
}, kr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
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
function _s(e) {
  return At(e) ? e : bs(e, !1, Nr, fo, kr);
}
function yo(e) {
  return bs(e, !1, lo, po, Pr);
}
function jr(e) {
  return bs(e, !0, ro, ho, Lr);
}
function bs(e, t, n, s, r) {
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
function Et(e) {
  return At(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function At(e) {
  return !!(e && e.__v_isReadonly);
}
function _n(e) {
  return !!(e && e.__v_isShallow);
}
function Rr(e) {
  return Et(e) || At(e);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function Br(e) {
  return vn(e, "__v_skip", !0), e;
}
const Wt = (e) => se(e) ? _s(e) : e, ws = (e) => se(e) ? jr(e) : e;
function Hr(e) {
  Ge && Ie && (e = q(e), Ir(e.dep || (e.dep = hs())));
}
function $r(e, t) {
  e = q(e), e.dep && Wn(e.dep);
}
function de(e) {
  return !!(e && e.__v_isRef === !0);
}
function te(e) {
  return Ur(e, !1);
}
function _o(e) {
  return Ur(e, !0);
}
function Ur(e, t) {
  return de(e) ? e : new bo(e, t);
}
class bo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : q(t), this._value = n ? t : Wt(t);
  }
  get value() {
    return Hr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || _n(t) || At(t);
    t = n ? t : q(t), zt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Wt(t), $r(this));
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
function Dr(e) {
  return Et(e) ? e : new Proxy(e, wo);
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
function Ut(e, t, n) {
  const s = e[t];
  return de(s) ? s : new xo(e, t, n);
}
var Kr;
class Co {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Kr] = !1, this._dirty = !0, this.effect = new gs(t, () => {
      this._dirty || (this._dirty = !0, $r(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = q(this);
    return Hr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Kr = "__v_isReadonly";
function Eo(e, t, n = !1) {
  let s, r;
  const l = U(e);
  return l ? (s = e, r = ke) : (s = e.get, r = e.set), new Co(s, r, l || !r, n);
}
function et(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (l) {
    Sn(l, t, n);
  }
  return r;
}
function Ae(e, t, n, s) {
  if (U(e)) {
    const l = et(e, t, n, s);
    return l && xr(l) && l.catch((o) => {
      Sn(o, t, n);
    }), l;
  }
  const r = [];
  for (let l = 0; l < e.length; l++)
    r.push(Ae(e[l], t, n, s));
  return r;
}
function Sn(e, t, n, s = !0) {
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
      et(c, null, 10, [e, o, i]);
      return;
    }
  }
  Oo(e, n, r, s);
}
function Oo(e, t, n, s = !0) {
  console.error(e);
}
let qt = !1, qn = !1;
const ve = [];
let $e = 0;
const Ot = [];
let Ve = null, at = 0;
const Vr = /* @__PURE__ */ Promise.resolve();
let xs = null;
function Jt(e) {
  const t = xs || Vr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function To(e) {
  let t = $e + 1, n = ve.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Qt(ve[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Cs(e) {
  (!ve.length || !ve.includes(e, qt && e.allowRecurse ? $e + 1 : $e)) && (e.id == null ? ve.push(e) : ve.splice(To(e.id), 0, e), zr());
}
function zr() {
  !qt && !qn && (qn = !0, xs = Vr.then(qr));
}
function Ao(e) {
  const t = ve.indexOf(e);
  t > $e && ve.splice(t, 1);
}
function So(e) {
  k(e) ? Ot.push(...e) : (!Ve || !Ve.includes(e, e.allowRecurse ? at + 1 : at)) && Ot.push(e), zr();
}
function Ks(e, t = qt ? $e + 1 : 0) {
  for (; t < ve.length; t++) {
    const n = ve[t];
    n && n.pre && (ve.splice(t, 1), t--, n());
  }
}
function Wr(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)];
    if (Ot.length = 0, Ve) {
      Ve.push(...t);
      return;
    }
    for (Ve = t, Ve.sort((n, s) => Qt(n) - Qt(s)), at = 0; at < Ve.length; at++)
      Ve[at]();
    Ve = null, at = 0;
  }
}
const Qt = (e) => e.id == null ? 1 / 0 : e.id, Io = (e, t) => {
  const n = Qt(e) - Qt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function qr(e) {
  qn = !1, qt = !0, ve.sort(Io);
  const t = ke;
  try {
    for ($e = 0; $e < ve.length; $e++) {
      const n = ve[$e];
      n && n.active !== !1 && et(n, null, 14);
    }
  } finally {
    $e = 0, ve.length = 0, Wr(), qt = !1, xs = null, (ve.length || Ot.length) && qr();
  }
}
function Fo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || ee;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: p, trim: h } = s[d] || ee;
    h && (r = n.map((b) => b.trim())), p && (r = n.map(yn));
  }
  let i, c = s[i = Rn(t)] || s[i = Rn(Tt(t))];
  !c && l && (c = s[i = Rn(kt(t))]), c && Ae(c, e, 6, r);
  const a = s[i + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Ae(a, e, 6, r);
  }
}
function Jr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let o = {}, i = !1;
  if (!U(e)) {
    const c = (a) => {
      const d = Jr(a, t, !0);
      d && (i = !0, ye(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !i ? (se(e) && s.set(e, null), null) : (k(l) ? l.forEach((c) => o[c] = null) : ye(o, l), se(e) && s.set(e, o), o);
}
function In(e, t) {
  return !e || !On(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), V(e, t[0].toLowerCase() + t.slice(1)) || V(e, kt(t)) || V(e, t));
}
let Me = null, Qr = null;
function bn(e) {
  const t = Me;
  return Me = e, Qr = e && e.type.__scopeId || null, t;
}
function Mo(e, t = Me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && er(-1);
    const l = bn(t), o = e(...r);
    return bn(l), s._d && er(1), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Bn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: l, propsOptions: [o], slots: i, attrs: c, emit: a, render: d, renderCache: p, data: h, setupState: b, ctx: O, inheritAttrs: E } = e;
  let A, P;
  const B = bn(e);
  try {
    if (n.shapeFlag & 4) {
      const L = r || s;
      A = He(d.call(L, L, p, l, b, h, O)), P = c;
    } else {
      const L = t;
      A = He(L.length > 1 ? L(l, { attrs: c, slots: i, emit: a }) : L(l, null)), P = t.props ? c : No(c);
    }
  } catch (L) {
    Kt.length = 0, Sn(L, e, 1), A = We(Pe);
  }
  let D = A;
  if (P && E !== !1) {
    const L = Object.keys(P), { shapeFlag: K } = D;
    L.length && K & 7 && (o && L.some(fs) && (P = ko(P, o)), D = nt(D, P));
  }
  return n.dirs && (D = nt(D), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (D.transition = n.transition), A = D, bn(B), A;
}
const No = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || On(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ko = (e, t) => {
  const n = {};
  for (const s in e)
    (!fs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
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
      return s ? Vs(s, o, a) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const h = d[p];
        if (o[h] !== s[h] && !In(a, h))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? Vs(s, o, a) : !0 : !!o;
  return !1;
}
function Vs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    if (t[l] !== e[l] && !In(n, l))
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
function Hn(e, t, n = !1) {
  const s = ge || Me;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(s.proxy) : t;
  }
}
function Yt(e, t) {
  return Fn(e, null, t);
}
function Ho(e, t) {
  return Fn(e, null, { flush: "post" });
}
const zs = {};
function Ue(e, t, n) {
  return Fn(e, t, n);
}
function Fn(e, t, { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = ee) {
  const i = ge;
  let c, a = !1, d = !1;
  if (de(e) ? (c = () => e.value, a = _n(e)) : Et(e) ? (c = () => e, s = !0) : k(e) ? (d = !0, a = e.some((P) => Et(P) || _n(P)), c = () => e.map((P) => {
    if (de(P))
      return P.value;
    if (Et(P))
      return pt(P);
    if (U(P))
      return et(P, i, 2);
  })) : U(e) ? t ? c = () => et(e, i, 2) : c = () => {
    if (!(i && i.isUnmounted))
      return p && p(), Ae(e, i, 3, [h]);
  } : c = ke, t && s) {
    const P = c;
    c = () => pt(P());
  }
  let p, h = (P) => {
    p = A.onStop = () => {
      et(P, i, 4);
    };
  };
  if (Gt)
    return h = ke, t ? n && Ae(t, i, 3, [
      c(),
      d ? [] : void 0,
      h
    ]) : c(), ke;
  let b = d ? [] : zs;
  const O = () => {
    if (!!A.active)
      if (t) {
        const P = A.run();
        (s || a || (d ? P.some((B, D) => zt(B, b[D])) : zt(P, b))) && (p && p(), Ae(t, i, 3, [
          P,
          b === zs ? void 0 : b,
          h
        ]), b = P);
      } else
        A.run();
  };
  O.allowRecurse = !!t;
  let E;
  r === "sync" ? E = O : r === "post" ? E = () => be(O, i && i.suspense) : (O.pre = !0, i && (O.id = i.uid), E = () => Cs(O));
  const A = new gs(c, E);
  return t ? n ? O() : b = A.run() : r === "post" ? be(A.run.bind(A), i && i.suspense) : A.run(), () => {
    A.stop(), i && i.scope && ds(i.scope.effects, A);
  };
}
function $o(e, t, n) {
  const s = this.proxy, r = fe(e) ? e.includes(".") ? Yr(s, e) : () => s[e] : e.bind(s, s);
  let l;
  U(t) ? l = t : (l = t.handler, n = t);
  const o = ge;
  St(this);
  const i = Fn(r, l.bind(s), n);
  return o ? St(o) : gt(), i;
}
function Yr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function pt(e, t) {
  if (!se(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), de(e))
    pt(e.value, t);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t);
  else if (Nt(e) || Ct(e))
    e.forEach((n) => {
      pt(n, t);
    });
  else if (Er(e))
    for (const n in e)
      pt(e[n], t);
  return e;
}
function Uo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return tn(() => {
    e.isMounted = !0;
  }), el(() => {
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
    const n = al(), s = Uo();
    let r;
    return () => {
      const l = t.default && Zr(t.default(), !0);
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
        return $n(o);
      const a = Ws(o);
      if (!a)
        return $n(o);
      const d = Jn(a, i, s, n);
      Qn(a, d);
      const p = n.subTree, h = p && Ws(p);
      let b = !1;
      const { getTransitionKey: O } = a.type;
      if (O) {
        const E = O();
        r === void 0 ? r = E : E !== r && (r = E, b = !0);
      }
      if (h && h.type !== Pe && (!ft(a, h) || b)) {
        const E = Jn(h, i, s, n);
        if (Qn(h, E), c === "out-in")
          return s.isLeaving = !0, E.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, $n(o);
        c === "in-out" && a.type !== Pe && (E.delayLeave = (A, P, B) => {
          const D = Xr(s, h);
          D[String(h.key)] = h, A._leaveCb = () => {
            P(), A._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = B;
        });
      }
      return o;
    };
  }
}, Ko = Do;
function Xr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Jn(e, t, n, s) {
  const { appear: r, mode: l, persisted: o = !1, onBeforeEnter: i, onEnter: c, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: p, onLeave: h, onAfterLeave: b, onLeaveCancelled: O, onBeforeAppear: E, onAppear: A, onAfterAppear: P, onAppearCancelled: B } = t, D = String(e.key), L = Xr(n, e), K = (N, z) => {
    N && Ae(N, s, 9, z);
  }, Q = (N, z) => {
    const j = z[1];
    K(N, z), k(N) ? N.every(($) => $.length <= 1) && j() : N.length <= 1 && j();
  }, re = {
    mode: l,
    persisted: o,
    beforeEnter(N) {
      let z = i;
      if (!n.isMounted)
        if (r)
          z = E || i;
        else
          return;
      N._leaveCb && N._leaveCb(!0);
      const j = L[D];
      j && ft(e, j) && j.el._leaveCb && j.el._leaveCb(), K(z, [N]);
    },
    enter(N) {
      let z = c, j = a, $ = d;
      if (!n.isMounted)
        if (r)
          z = A || c, j = P || a, $ = B || d;
        else
          return;
      let J = !1;
      const oe = N._enterCb = (yt) => {
        J || (J = !0, yt ? K($, [N]) : K(j, [N]), re.delayedLeave && re.delayedLeave(), N._enterCb = void 0);
      };
      z ? Q(z, [N, oe]) : oe();
    },
    leave(N, z) {
      const j = String(e.key);
      if (N._enterCb && N._enterCb(!0), n.isUnmounting)
        return z();
      K(p, [N]);
      let $ = !1;
      const J = N._leaveCb = (oe) => {
        $ || ($ = !0, z(), oe ? K(O, [N]) : K(b, [N]), N._leaveCb = void 0, L[j] === e && delete L[j]);
      };
      L[j] = e, h ? Q(h, [N, J]) : J();
    },
    clone(N) {
      return Jn(N, t, n, s);
    }
  };
  return re;
}
function $n(e) {
  if (Mn(e))
    return e = nt(e), e.children = null, e;
}
function Ws(e) {
  return Mn(e) ? e.children ? e.children[0] : void 0 : e;
}
function Qn(e, t) {
  e.shapeFlag & 6 && e.component ? Qn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Zr(e, t = !1, n) {
  let s = [], r = 0;
  for (let l = 0; l < e.length; l++) {
    let o = e[l];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
    o.type === pe ? (o.patchFlag & 128 && r++, s = s.concat(Zr(o.children, t, i))) : (t || o.type !== Pe) && s.push(i != null ? nt(o, { key: i }) : o);
  }
  if (r > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
const hn = (e) => !!e.type.__asyncLoader, Mn = (e) => e.type.__isKeepAlive;
function Vo(e, t) {
  Gr(e, "a", t);
}
function zo(e, t) {
  Gr(e, "da", t);
}
function Gr(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Nn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Mn(r.parent.vnode) && Wo(s, t, n, r), r = r.parent;
  }
}
function Wo(e, t, n, s) {
  const r = Nn(t, e, s, !0);
  kn(() => {
    ds(s[t], r);
  }, n);
}
function Nn(e, t, n = ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Pt(), St(n);
      const i = Ae(t, n, e, o);
      return gt(), Lt(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const Je = (e) => (t, n = ge) => (!Gt || e === "sp") && Nn(e, t, n), qo = Je("bm"), tn = Je("m"), Jo = Je("bu"), Qo = Je("u"), el = Je("bum"), kn = Je("um"), Yo = Je("sp"), Xo = Je("rtg"), Zo = Je("rtc");
function Go(e, t = ge) {
  Nn("ec", e, t);
}
function wn(e, t) {
  const n = Me;
  if (n === null)
    return e;
  const s = Ln(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, c, a = ee] = t[l];
    U(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && pt(i), r.push({
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
function ot(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    l && (i.oldValue = l[o].value);
    let c = i.dir[s];
    c && (Pt(), Ae(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Lt());
  }
}
const ei = Symbol();
function gn(e, t, n, s) {
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
const Yn = (e) => e ? fl(e) ? Ln(e) || e.proxy : Yn(e.parent) : null, xn = /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Yn(e.parent),
  $root: (e) => Yn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Es(e),
  $forceUpdate: (e) => e.f || (e.f = () => Cs(e.update)),
  $nextTick: (e) => e.n || (e.n = Jt.bind(e.proxy)),
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
        Xn && (o[t] = 0);
      }
    }
    const d = xn[t];
    let p, h;
    if (d)
      return t === "$attrs" && Ce(e, "get", t), d(e);
    if ((p = i.__cssModules) && (p = p[t]))
      return p;
    if (n !== ee && V(n, t))
      return o[t] = 4, n[t];
    if (h = c.config.globalProperties, V(h, t))
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return r !== ee && V(r, t) ? (r[t] = n, !0) : s !== ee && V(s, t) ? (s[t] = n, !0) : V(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l } }, o) {
    let i;
    return !!n[o] || e !== ee && V(e, o) || t !== ee && V(t, o) || (i = l[0]) && V(i, o) || V(s, o) || V(xn, o) || V(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Xn = !0;
function ni(e) {
  const t = Es(e), n = e.proxy, s = e.ctx;
  Xn = !1, t.beforeCreate && qs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: l,
    methods: o,
    watch: i,
    provide: c,
    inject: a,
    created: d,
    beforeMount: p,
    mounted: h,
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
    errorCaptured: N,
    serverPrefetch: z,
    expose: j,
    inheritAttrs: $,
    components: J,
    directives: oe,
    filters: yt
  } = t;
  if (a && si(a, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const le in o) {
      const Y = o[le];
      U(Y) && (s[le] = Y.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    se(le) && (e.data = _s(le));
  }
  if (Xn = !0, l)
    for (const le in l) {
      const Y = l[le], Ee = U(Y) ? Y.bind(n, n) : U(Y.get) ? Y.get.bind(n, n) : ke, _t = !U(Y) && U(Y.set) ? Y.set.bind(n) : ke, Qe = Fe({
        get: Ee,
        set: _t
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (F) => Qe.value = F
      });
    }
  if (i)
    for (const le in i)
      tl(i[le], s, n, le);
  if (c) {
    const le = U(c) ? c.call(n) : c;
    Reflect.ownKeys(le).forEach((Y) => {
      Bo(Y, le[Y]);
    });
  }
  d && qs(d, e, "c");
  function me(le, Y) {
    k(Y) ? Y.forEach((Ee) => le(Ee.bind(n))) : Y && le(Y.bind(n));
  }
  if (me(qo, p), me(tn, h), me(Jo, b), me(Qo, O), me(Vo, E), me(zo, A), me(Go, N), me(Zo, Q), me(Xo, re), me(el, B), me(kn, L), me(Yo, z), k(j))
    if (j.length) {
      const le = e.exposed || (e.exposed = {});
      j.forEach((Y) => {
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
  k(e) && (e = Zn(e));
  for (const r in e) {
    const l = e[r];
    let o;
    se(l) ? "default" in l ? o = Hn(l.from || r, l.default, !0) : o = Hn(l.from || r) : o = Hn(l), de(o) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function qs(e, t, n) {
  Ae(k(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function tl(e, t, n, s) {
  const r = s.includes(".") ? Yr(n, s) : () => n[s];
  if (fe(e)) {
    const l = t[e];
    U(l) && Ue(r, l);
  } else if (U(e))
    Ue(r, e.bind(n));
  else if (se(e))
    if (k(e))
      e.forEach((l) => tl(l, t, n, s));
    else {
      const l = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(l) && Ue(r, l, e);
    }
}
function Es(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: l, config: { optionMergeStrategies: o } } = e.appContext, i = l.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach((a) => Cn(c, a, o, !0)), Cn(c, t, o)), se(t) && l.set(t, c), c;
}
function Cn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && Cn(e, l, n, !0), r && r.forEach((o) => Cn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = ri[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const ri = {
  data: Js,
  props: ut,
  emits: ut,
  methods: ut,
  computed: ut,
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
  components: ut,
  directives: ut,
  watch: oi,
  provide: Js,
  inject: li
};
function Js(e, t) {
  return t ? e ? function() {
    return ye(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t);
  } : t : e;
}
function li(e, t) {
  return ut(Zn(e), Zn(t));
}
function Zn(e) {
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
function ut(e, t) {
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
  vn(l, Pn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, r, l);
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
      for (let p = 0; p < d.length; p++) {
        let h = d[p];
        if (In(e.emitsOptions, h))
          continue;
        const b = t[h];
        if (c)
          if (V(l, h))
            b !== l[h] && (l[h] = b, a = !0);
          else {
            const O = Tt(h);
            r[O] = Gn(c, i, O, b, e, !1);
          }
        else
          b !== l[h] && (l[h] = b, a = !0);
      }
    }
  } else {
    nl(e, t, r, l) && (a = !0);
    let d;
    for (const p in i)
      (!t || !V(t, p) && ((d = kt(p)) === p || !V(t, d))) && (c ? n && (n[p] !== void 0 || n[d] !== void 0) && (r[p] = Gn(c, i, p, void 0, e, !0)) : delete r[p]);
    if (l !== i)
      for (const p in l)
        (!t || !V(t, p) && !0) && (delete l[p], a = !0);
  }
  a && qe(e, "set", "$attrs");
}
function nl(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let c in t) {
      if (dn(c))
        continue;
      const a = t[c];
      let d;
      r && V(r, d = Tt(c)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : In(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (l) {
    const c = q(n), a = i || ee;
    for (let d = 0; d < l.length; d++) {
      const p = l[d];
      n[p] = Gn(r, c, p, a[p], e, !V(a, p));
    }
  }
  return o;
}
function Gn(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = V(o, "default");
    if (i && s === void 0) {
      const c = o.default;
      if (o.type !== Function && U(c)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (St(r), s = a[n] = c.call(null, t), gt());
      } else
        s = c;
    }
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === kt(n)) && (s = !0));
  }
  return s;
}
function sl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let c = !1;
  if (!U(e)) {
    const d = (p) => {
      c = !0;
      const [h, b] = sl(p, t, !0);
      ye(o, h), b && i.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !c)
    return se(e) && s.set(e, xt), xt;
  if (k(l))
    for (let d = 0; d < l.length; d++) {
      const p = Tt(l[d]);
      Qs(p) && (o[p] = ee);
    }
  else if (l)
    for (const d in l) {
      const p = Tt(d);
      if (Qs(p)) {
        const h = l[d], b = o[p] = k(h) || U(h) ? { type: h } : h;
        if (b) {
          const O = Zs(Boolean, b.type), E = Zs(String, b.type);
          b[0] = O > -1, b[1] = E < 0 || O < E, (O > -1 || V(b, "default")) && i.push(p);
        }
      }
    }
  const a = [o, i];
  return se(e) && s.set(e, a), a;
}
function Qs(e) {
  return e[0] !== "$";
}
function Ys(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Xs(e, t) {
  return Ys(e) === Ys(t);
}
function Zs(e, t) {
  return k(t) ? t.findIndex((n) => Xs(n, e)) : U(t) && Xs(t, e) ? 0 : -1;
}
const rl = (e) => e[0] === "_" || e === "$stable", Os = (e) => k(e) ? e.map(He) : [He(e)], ui = (e, t, n) => {
  if (t._n)
    return t;
  const s = Mo((...r) => Os(t(...r)), n);
  return s._c = !1, s;
}, ll = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (rl(r))
      continue;
    const l = e[r];
    if (U(l))
      t[r] = ui(r, l, s);
    else if (l != null) {
      const o = Os(l);
      t[r] = () => o;
    }
  }
}, ol = (e, t) => {
  const n = Os(t);
  e.slots.default = () => n;
}, ai = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = q(t), vn(t, "_", n)) : ll(t, e.slots = {});
  } else
    e.slots = {}, t && ol(e, t);
  vn(e.slots, Pn, 1);
}, fi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = ee;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (ye(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, ll(t, r)), o = t;
  } else
    t && (ol(e, t), o = { default: 1 });
  if (l)
    for (const i in r)
      !rl(i) && !(i in o) && delete r[i];
};
function il() {
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
function pi(e, t) {
  return function(s, r = null) {
    U(s) || (s = Object.assign({}, s)), r != null && !se(r) && (r = null);
    const l = il(), o = /* @__PURE__ */ new Set();
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
      mount(a, d, p) {
        if (!i) {
          const h = We(s, r);
          return h.appContext = l, d && t ? t(h, a) : e(h, a, p), i = !0, c._container = a, a.__vue_app__ = c, Ln(h.component) || h.component.proxy;
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
function es(e, t, n, s, r = !1) {
  if (k(e)) {
    e.forEach((h, b) => es(h, t && (k(t) ? t[b] : t), n, s, r));
    return;
  }
  if (hn(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Ln(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: c } = e, a = t && t.r, d = i.refs === ee ? i.refs = {} : i.refs, p = i.setupState;
  if (a != null && a !== c && (fe(a) ? (d[a] = null, V(p, a) && (p[a] = null)) : de(a) && (a.value = null)), U(c))
    et(c, i, 12, [o, d]);
  else {
    const h = fe(c), b = de(c);
    if (h || b) {
      const O = () => {
        if (e.f) {
          const E = h ? d[c] : c.value;
          r ? k(E) && ds(E, l) : k(E) ? E.includes(l) || E.push(l) : h ? (d[c] = [l], V(p, c) && (p[c] = d[c])) : (c.value = [l], e.k && (d[e.k] = c.value));
        } else
          h ? (d[c] = o, V(p, c) && (p[c] = o)) : b && (c.value = o, e.k && (d[e.k] = o));
      };
      o ? (O.id = -1, be(O, n)) : O();
    }
  }
}
const be = Ro;
function hi(e) {
  return gi(e);
}
function gi(e, t) {
  const n = Ul();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: l, createElement: o, createText: i, createComment: c, setText: a, setElementText: d, parentNode: p, nextSibling: h, setScopeId: b = ke, cloneNode: O, insertStaticContent: E } = e, A = (u, f, g, v = null, m = null, w = null, C = !1, _ = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !ft(u, f) && (v = De(u), M(u, m, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: S, shapeFlag: T } = f;
    switch (y) {
      case As:
        P(u, f, g, v);
        break;
      case Pe:
        B(u, f, g, v);
        break;
      case Un:
        u == null && D(f, g, v, C);
        break;
      case pe:
        oe(u, f, g, v, m, w, C, _, x);
        break;
      default:
        T & 1 ? Q(u, f, g, v, m, w, C, _, x) : T & 6 ? yt(u, f, g, v, m, w, C, _, x) : (T & 64 || T & 128) && y.process(u, f, g, v, m, w, C, _, x, Ke);
    }
    S != null && m && es(S, u && u.ref, w, f || u, !f);
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
      m = h(u), s(u, g, v), u = m;
    s(f, g, v);
  }, K = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = h(u), r(u), u = g;
    r(f);
  }, Q = (u, f, g, v, m, w, C, _, x) => {
    C = C || f.type === "svg", u == null ? re(f, g, v, m, w, C, _, x) : j(u, f, m, w, C, _, x);
  }, re = (u, f, g, v, m, w, C, _) => {
    let x, y;
    const { type: S, props: T, shapeFlag: I, transition: R, patchFlag: W, dirs: X } = u;
    if (u.el && O !== void 0 && W === -1)
      x = u.el = O(u.el);
    else {
      if (x = u.el = o(u.type, w, T && T.is, T), I & 8 ? d(x, u.children) : I & 16 && z(u.children, x, null, v, m, w && S !== "foreignObject", C, _), X && ot(u, null, v, "created"), T) {
        for (const ne in T)
          ne !== "value" && !dn(ne) && l(x, ne, null, T[ne], w, u.children, v, m, ce);
        "value" in T && l(x, "value", null, T.value), (y = T.onVnodeBeforeMount) && je(y, v, u);
      }
      N(x, u, u.scopeId, C, v);
    }
    X && ot(u, null, v, "beforeMount");
    const Z = (!m || m && !m.pendingBranch) && R && !R.persisted;
    Z && R.beforeEnter(x), s(x, f, g), ((y = T && T.onVnodeMounted) || Z || X) && be(() => {
      y && je(y, v, u), Z && R.enter(x), X && ot(u, null, v, "mounted");
    }, m);
  }, N = (u, f, g, v, m) => {
    if (g && b(u, g), v)
      for (let w = 0; w < v.length; w++)
        b(u, v[w]);
    if (m) {
      let w = m.subTree;
      if (f === w) {
        const C = m.vnode;
        N(u, C, C.scopeId, C.slotScopeIds, m.parent);
      }
    }
  }, z = (u, f, g, v, m, w, C, _, x = 0) => {
    for (let y = x; y < u.length; y++) {
      const S = u[y] = _ ? Xe(u[y]) : He(u[y]);
      A(null, S, f, g, v, m, w, C, _);
    }
  }, j = (u, f, g, v, m, w, C) => {
    const _ = f.el = u.el;
    let { patchFlag: x, dynamicChildren: y, dirs: S } = f;
    x |= u.patchFlag & 16;
    const T = u.props || ee, I = f.props || ee;
    let R;
    g && it(g, !1), (R = I.onVnodeBeforeUpdate) && je(R, g, f, u), S && ot(f, u, g, "beforeUpdate"), g && it(g, !0);
    const W = m && f.type !== "foreignObject";
    if (y ? $(u.dynamicChildren, y, _, g, v, W, w) : C || Ee(u, f, _, null, g, v, W, w, !1), x > 0) {
      if (x & 16)
        J(_, f, T, I, g, v, m);
      else if (x & 2 && T.class !== I.class && l(_, "class", null, I.class, m), x & 4 && l(_, "style", T.style, I.style, m), x & 8) {
        const X = f.dynamicProps;
        for (let Z = 0; Z < X.length; Z++) {
          const ne = X[Z], Se = T[ne], bt = I[ne];
          (bt !== Se || ne === "value") && l(_, ne, Se, bt, m, u.children, g, v, ce);
        }
      }
      x & 1 && u.children !== f.children && d(_, f.children);
    } else
      !C && y == null && J(_, f, T, I, g, v, m);
    ((R = I.onVnodeUpdated) || S) && be(() => {
      R && je(R, g, f, u), S && ot(f, u, g, "updated");
    }, v);
  }, $ = (u, f, g, v, m, w, C) => {
    for (let _ = 0; _ < f.length; _++) {
      const x = u[_], y = f[_], S = x.el && (x.type === pe || !ft(x, y) || x.shapeFlag & 70) ? p(x.el) : g;
      A(x, y, S, null, v, m, w, C, !0);
    }
  }, J = (u, f, g, v, m, w, C) => {
    if (g !== v) {
      for (const _ in v) {
        if (dn(_))
          continue;
        const x = v[_], y = g[_];
        x !== y && _ !== "value" && l(u, _, y, x, C, f.children, m, w, ce);
      }
      if (g !== ee)
        for (const _ in g)
          !dn(_) && !(_ in v) && l(u, _, g[_], null, C, f.children, m, w, ce);
      "value" in v && l(u, "value", g.value, v.value);
    }
  }, oe = (u, f, g, v, m, w, C, _, x) => {
    const y = f.el = u ? u.el : i(""), S = f.anchor = u ? u.anchor : i("");
    let { patchFlag: T, dynamicChildren: I, slotScopeIds: R } = f;
    R && (_ = _ ? _.concat(R) : R), u == null ? (s(y, g, v), s(S, g, v), z(f.children, g, S, m, w, C, _, x)) : T > 0 && T & 64 && I && u.dynamicChildren ? ($(u.dynamicChildren, I, g, m, w, C, _), (f.key != null || m && f === m.subTree) && Ts(u, f, !0)) : Ee(u, f, g, S, m, w, C, _, x);
  }, yt = (u, f, g, v, m, w, C, _, x) => {
    f.slotScopeIds = _, u == null ? f.shapeFlag & 512 ? m.ctx.activate(f, g, v, C, x) : jt(f, g, v, m, w, C, x) : me(u, f, x);
  }, jt = (u, f, g, v, m, w, C) => {
    const _ = u.component = Oi(u, v, m);
    if (Mn(u) && (_.ctx.renderer = Ke), Ti(_), _.asyncDep) {
      if (m && m.registerDep(_, le), !u.el) {
        const x = _.subTree = We(Pe);
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
        let { next: S, bu: T, u: I, parent: R, vnode: W } = u, X = S, Z;
        it(u, !1), S ? (S.el = W.el, Y(u, S, C)) : S = W, T && pn(T), (Z = S.props && S.props.onVnodeBeforeUpdate) && je(Z, R, S, W), it(u, !0);
        const ne = Bn(u), Se = u.subTree;
        u.subTree = ne, A(
          Se,
          ne,
          p(Se.el),
          De(Se),
          u,
          m,
          w
        ), S.el = ne.el, X === null && Lo(u, ne.el), I && be(I, m), (Z = S.props && S.props.onVnodeUpdated) && be(() => je(Z, R, S, W), m);
      } else {
        let S;
        const { el: T, props: I } = f, { bm: R, m: W, parent: X } = u, Z = hn(f);
        if (it(u, !1), R && pn(R), !Z && (S = I && I.onVnodeBeforeMount) && je(S, X, f), it(u, !0), T && jn) {
          const ne = () => {
            u.subTree = Bn(u), jn(T, u.subTree, u, m, null);
          };
          Z ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && ne()
          ) : ne();
        } else {
          const ne = u.subTree = Bn(u);
          A(null, ne, g, v, u, m, w), f.el = ne.el;
        }
        if (W && be(W, m), !Z && (S = I && I.onVnodeMounted)) {
          const ne = f;
          be(() => je(S, X, ne), m);
        }
        (f.shapeFlag & 256 || X && hn(X.vnode) && X.vnode.shapeFlag & 256) && u.a && be(u.a, m), u.isMounted = !0, f = g = v = null;
      }
    }, x = u.effect = new gs(
      _,
      () => Cs(y),
      u.scope
    ), y = u.update = () => x.run();
    y.id = u.uid, it(u, !0), y();
  }, Y = (u, f, g) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, ci(u, f.props, v, g), fi(u, f.children, g), Pt(), Ks(), Lt();
  }, Ee = (u, f, g, v, m, w, C, _, x = !1) => {
    const y = u && u.children, S = u ? u.shapeFlag : 0, T = f.children, { patchFlag: I, shapeFlag: R } = f;
    if (I > 0) {
      if (I & 128) {
        Qe(y, T, g, v, m, w, C, _, x);
        return;
      } else if (I & 256) {
        _t(y, T, g, v, m, w, C, _, x);
        return;
      }
    }
    R & 8 ? (S & 16 && ce(y, m, w), T !== y && d(g, T)) : S & 16 ? R & 16 ? Qe(y, T, g, v, m, w, C, _, x) : ce(y, m, w, !0) : (S & 8 && d(g, ""), R & 16 && z(T, g, v, m, w, C, _, x));
  }, _t = (u, f, g, v, m, w, C, _, x) => {
    u = u || xt, f = f || xt;
    const y = u.length, S = f.length, T = Math.min(y, S);
    let I;
    for (I = 0; I < T; I++) {
      const R = f[I] = x ? Xe(f[I]) : He(f[I]);
      A(u[I], R, g, null, m, w, C, _, x);
    }
    y > S ? ce(u, m, w, !0, !1, T) : z(f, g, v, m, w, C, _, x, T);
  }, Qe = (u, f, g, v, m, w, C, _, x) => {
    let y = 0;
    const S = f.length;
    let T = u.length - 1, I = S - 1;
    for (; y <= T && y <= I; ) {
      const R = u[y], W = f[y] = x ? Xe(f[y]) : He(f[y]);
      if (ft(R, W))
        A(R, W, g, null, m, w, C, _, x);
      else
        break;
      y++;
    }
    for (; y <= T && y <= I; ) {
      const R = u[T], W = f[I] = x ? Xe(f[I]) : He(f[I]);
      if (ft(R, W))
        A(R, W, g, null, m, w, C, _, x);
      else
        break;
      T--, I--;
    }
    if (y > T) {
      if (y <= I) {
        const R = I + 1, W = R < S ? f[R].el : v;
        for (; y <= I; )
          A(null, f[y] = x ? Xe(f[y]) : He(f[y]), g, W, m, w, C, _, x), y++;
      }
    } else if (y > I)
      for (; y <= T; )
        M(u[y], m, w, !0), y++;
    else {
      const R = y, W = y, X = /* @__PURE__ */ new Map();
      for (y = W; y <= I; y++) {
        const we = f[y] = x ? Xe(f[y]) : He(f[y]);
        we.key != null && X.set(we.key, y);
      }
      let Z, ne = 0;
      const Se = I - W + 1;
      let bt = !1, Ms = 0;
      const Bt = new Array(Se);
      for (y = 0; y < Se; y++)
        Bt[y] = 0;
      for (y = R; y <= T; y++) {
        const we = u[y];
        if (ne >= Se) {
          M(we, m, w, !0);
          continue;
        }
        let Le;
        if (we.key != null)
          Le = X.get(we.key);
        else
          for (Z = W; Z <= I; Z++)
            if (Bt[Z - W] === 0 && ft(we, f[Z])) {
              Le = Z;
              break;
            }
        Le === void 0 ? M(we, m, w, !0) : (Bt[Le - W] = y + 1, Le >= Ms ? Ms = Le : bt = !0, A(we, f[Le], g, null, m, w, C, _, x), ne++);
      }
      const Ns = bt ? mi(Bt) : xt;
      for (Z = Ns.length - 1, y = Se - 1; y >= 0; y--) {
        const we = W + y, Le = f[we], ks = we + 1 < S ? f[we + 1].el : v;
        Bt[y] === 0 ? A(null, Le, g, ks, m, w, C, _, x) : bt && (Z < 0 || y !== Ns[Z] ? F(Le, g, ks, 2) : Z--);
      }
    }
  }, F = (u, f, g, v, m = null) => {
    const { el: w, type: C, transition: _, children: x, shapeFlag: y } = u;
    if (y & 6) {
      F(u.component.subTree, f, g, v);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, g, v);
      return;
    }
    if (y & 64) {
      C.move(u, f, g, Ke);
      return;
    }
    if (C === pe) {
      s(w, f, g);
      for (let T = 0; T < x.length; T++)
        F(x[T], f, g, v);
      s(u.anchor, f, g);
      return;
    }
    if (C === Un) {
      L(u, f, g);
      return;
    }
    if (v !== 2 && y & 1 && _)
      if (v === 0)
        _.beforeEnter(w), s(w, f, g), be(() => _.enter(w), m);
      else {
        const { leave: T, delayLeave: I, afterLeave: R } = _, W = () => s(w, f, g), X = () => {
          T(w, () => {
            W(), R && R();
          });
        };
        I ? I(w, W, X) : X();
      }
    else
      s(w, f, g);
  }, M = (u, f, g, v = !1, m = !1) => {
    const { type: w, props: C, ref: _, children: x, dynamicChildren: y, shapeFlag: S, patchFlag: T, dirs: I } = u;
    if (_ != null && es(_, null, g, u, !0), S & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const R = S & 1 && I, W = !hn(u);
    let X;
    if (W && (X = C && C.onVnodeBeforeUnmount) && je(X, f, u), S & 6)
      ae(u.component, g, v);
    else {
      if (S & 128) {
        u.suspense.unmount(g, v);
        return;
      }
      R && ot(u, null, f, "beforeUnmount"), S & 64 ? u.type.remove(u, f, g, m, Ke, v) : y && (w !== pe || T > 0 && T & 64) ? ce(y, f, g, !1, !0) : (w === pe && T & 384 || !m && S & 16) && ce(x, f, g), v && he(u);
    }
    (W && (X = C && C.onVnodeUnmounted) || R) && be(() => {
      X && je(X, f, u), R && ot(u, null, f, "unmounted");
    }, g);
  }, he = (u) => {
    const { type: f, el: g, anchor: v, transition: m } = u;
    if (f === pe) {
      rt(g, v);
      return;
    }
    if (f === Un) {
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
  }, rt = (u, f) => {
    let g;
    for (; u !== f; )
      g = h(u), r(u), u = g;
    r(f);
  }, ae = (u, f, g) => {
    const { bum: v, scope: m, update: w, subTree: C, um: _ } = u;
    v && pn(v), m.stop(), w && (w.active = !1, M(C, u, f, g)), _ && be(_, f), be(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ce = (u, f, g, v = !1, m = !1, w = 0) => {
    for (let C = w; C < u.length; C++)
      M(u[C], f, g, v, m);
  }, De = (u) => u.shapeFlag & 6 ? De(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : h(u.anchor || u.el), lt = (u, f, g) => {
    u == null ? f._vnode && M(f._vnode, null, null, !0) : A(f._vnode || null, u, f, null, null, null, g), Ks(), Wr(), f._vnode = u;
  }, Ke = {
    p: A,
    um: M,
    m: F,
    r: he,
    mt: jt,
    mc: z,
    pc: Ee,
    pbc: $,
    n: De,
    o: e
  };
  let Rt, jn;
  return t && ([Rt, jn] = t(Ke)), {
    render: lt,
    hydrate: Rt,
    createApp: pi(lt, Rt)
  };
}
function it({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ts(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (k(s) && k(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = Xe(r[l]), i.el = o.el), n || Ts(o, i));
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
const vi = (e) => e.__isTeleport, Dt = (e) => e && (e.disabled || e.disabled === ""), Gs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ts = (e, t) => {
  const n = e && e.to;
  return fe(n) ? t ? t(n) : null : n;
}, yi = {
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, c, a) {
    const { mc: d, pc: p, pbc: h, o: { insert: b, querySelector: O, createText: E, createComment: A } } = a, P = Dt(t.props);
    let { shapeFlag: B, children: D, dynamicChildren: L } = t;
    if (e == null) {
      const K = t.el = E(""), Q = t.anchor = E("");
      b(K, n, s), b(Q, n, s);
      const re = t.target = ts(t.props, O), N = t.targetAnchor = E("");
      re && (b(N, re), o = o || Gs(re));
      const z = (j, $) => {
        B & 16 && d(D, j, $, r, l, o, i, c);
      };
      P ? z(n, Q) : re && z(re, N);
    } else {
      t.el = e.el;
      const K = t.anchor = e.anchor, Q = t.target = e.target, re = t.targetAnchor = e.targetAnchor, N = Dt(e.props), z = N ? n : Q, j = N ? K : re;
      if (o = o || Gs(Q), L ? (h(e.dynamicChildren, L, z, r, l, o, i), Ts(e, t, !0)) : c || p(e, t, z, j, r, l, o, i, !1), P)
        N || an(t, n, K, a, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = t.target = ts(t.props, O);
        $ && an(t, $, null, a, 0);
      } else
        N && an(t, Q, re, a, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: p, props: h } = e;
    if (p && l(d), (o || !Dt(h)) && (l(a), i & 16))
      for (let b = 0; b < c.length; b++) {
        const O = c[b];
        r(O, t, n, !0, !!O.dynamicChildren);
      }
  },
  move: an,
  hydrate: _i
};
function an(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: c, children: a, props: d } = e, p = l === 2;
  if (p && s(o, t, n), (!p || Dt(d)) && c & 16)
    for (let h = 0; h < a.length; h++)
      r(a[h], t, n, 2);
  p && s(i, t, n);
}
function _i(e, t, n, s, r, l, { o: { nextSibling: o, parentNode: i, querySelector: c } }, a) {
  const d = t.target = ts(t.props, c);
  if (d) {
    const p = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Dt(t.props))
        t.anchor = a(o(e), t, i(e), n, s, r, l), t.targetAnchor = p;
      else {
        t.anchor = o(e);
        let h = p;
        for (; h; )
          if (h = o(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
            t.targetAnchor = h, d._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        a(p, t, d, n, s, r, l);
      }
  }
  return t.anchor && o(t.anchor);
}
const ns = yi, pe = Symbol(void 0), As = Symbol(void 0), Pe = Symbol(void 0), Un = Symbol(void 0), Kt = [];
let Ne = null;
function G(e = !1) {
  Kt.push(Ne = e ? null : []);
}
function bi() {
  Kt.pop(), Ne = Kt[Kt.length - 1] || null;
}
let Xt = 1;
function er(e) {
  Xt += e;
}
function cl(e) {
  return e.dynamicChildren = Xt > 0 ? Ne || xt : null, bi(), Xt > 0 && Ne && Ne.push(e), e;
}
function ie(e, t, n, s, r, l) {
  return cl(ue(e, t, n, s, r, l, !0));
}
function En(e, t, n, s, r) {
  return cl(We(e, t, n, s, r, !0));
}
function wi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ft(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Pn = "__vInternal", ul = ({ key: e }) => e != null ? e : null, mn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? fe(e) || de(e) || U(e) ? { i: Me, r: e, k: t, f: !!n } : e : null;
function ue(e, t = null, n = null, s = 0, r = null, l = e === pe ? 0 : 1, o = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ul(t),
    ref: t && mn(t),
    scopeId: Qr,
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
  return i ? (Is(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= fe(n) ? 8 : 16), Xt > 0 && !o && Ne && (c.patchFlag > 0 || l & 6) && c.patchFlag !== 32 && Ne.push(c), c;
}
const We = xi;
function xi(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === ei) && (e = Pe), wi(e)) {
    const i = nt(e, t, !0);
    return n && Is(i, n), Xt > 0 && !l && Ne && (i.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = i : Ne.push(i)), i.patchFlag |= -2, i;
  }
  if (Fi(e) && (e = e.__vccOpts), t) {
    t = Ss(t);
    let { class: i, style: c } = t;
    i && !fe(i) && (t.class = Mt(i)), se(c) && (Rr(c) && !k(c) && (c = ye({}, c)), t.style = Ft(c));
  }
  const o = fe(e) ? 1 : jo(e) ? 128 : vi(e) ? 64 : se(e) ? 4 : U(e) ? 2 : 0;
  return ue(e, t, n, s, r, o, l, !0);
}
function Ss(e) {
  return e ? Rr(e) || Pn in e ? ye({}, e) : e : null;
}
function nt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: l, children: o } = e, i = t ? Zt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && ul(i),
    ref: t && t.ref ? n && r ? k(r) ? r.concat(mn(t)) : [r, mn(t)] : mn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== pe ? l === -1 ? 16 : l | 16 : l,
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
function ss(e = " ", t = 0) {
  return We(As, null, e, t);
}
function Te(e = "", t = !1) {
  return t ? (G(), En(Pe, null, e)) : We(Pe, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? We(Pe) : k(e) ? We(
    pe,
    null,
    e.slice()
  ) : typeof e == "object" ? Xe(e) : We(As, null, String(e));
}
function Xe(e) {
  return e.el === null || e.memo ? e : nt(e);
}
function Is(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Is(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Pn in t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    U(t) ? (t = { default: t, _ctx: Me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ss(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Zt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Mt([t.class, s.class]));
      else if (r === "style")
        t.style = Ft([t.style, s.style]);
      else if (On(r)) {
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
const Ci = il();
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
    propsOptions: sl(s, r),
    emitsOptions: Jr(s, r),
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
const al = () => ge || Me, St = (e) => {
  ge = e, e.scope.on();
}, gt = () => {
  ge && ge.scope.off(), ge = null;
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Gt = !1;
function Ti(e, t = !1) {
  Gt = t;
  const { props: n, children: s } = e.vnode, r = fl(e);
  ii(e, n, r, t), ai(e, s);
  const l = r ? Ai(e, t) : void 0;
  return Gt = !1, l;
}
function Ai(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Br(new Proxy(e.ctx, ti));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ii(e) : null;
    St(e), Pt();
    const l = et(s, e, 0, [e.props, r]);
    if (Lt(), gt(), xr(l)) {
      if (l.then(gt, gt), t)
        return l.then((o) => {
          tr(e, o, t);
        }).catch((o) => {
          Sn(o, e, 0);
        });
      e.asyncDep = l;
    } else
      tr(e, l, t);
  } else
    dl(e, t);
}
function tr(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Dr(t)), dl(e, n);
}
let nr;
function dl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && nr && !s.render) {
      const r = s.template || Es(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = ye(ye({
          isCustomElement: l,
          delimiters: i
        }, o), c);
        s.render = nr(r, a);
      }
    }
    e.render = s.render || ke;
  }
  St(e), Pt(), ni(e), Lt(), gt();
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
function Ln(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Dr(Br(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in xn)
          return xn[n](e);
      }
    }));
}
function Fi(e) {
  return U(e) && "__vccOpts" in e;
}
const Fe = (e, t) => Eo(e, t, Gt), Mi = "3.2.39", Ni = "http://www.w3.org/2000/svg", dt = typeof document < "u" ? document : null, sr = dt && /* @__PURE__ */ dt.createElement("template"), ki = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? dt.createElementNS(Ni, e) : dt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => dt.createTextNode(e),
  createComment: (e) => dt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dt.querySelector(e),
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
      sr.innerHTML = s ? `<svg>${e}</svg>` : e;
      const i = sr.content;
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
      rs(s, l, n[l]);
    if (t && !fe(t))
      for (const l in t)
        n[l] == null && rs(s, l, "");
  } else {
    const l = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = l);
  }
}
const rr = /\s*!important$/;
function rs(e, t, n) {
  if (k(n))
    n.forEach((s) => rs(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ji(e, t);
    rr.test(n) ? e.setProperty(kt(s), n.replace(rr, ""), "important") : e[s] = n;
  }
}
const lr = ["Webkit", "Moz", "ms"], Dn = {};
function ji(e, t) {
  const n = Dn[t];
  if (n)
    return n;
  let s = Tt(t);
  if (s !== "filter" && s in e)
    return Dn[t] = s;
  s = Or(s);
  for (let r = 0; r < lr.length; r++) {
    const l = lr[r] + s;
    if (l in e)
      return Dn[t] = l;
  }
  return t;
}
const or = "http://www.w3.org/1999/xlink";
function Ri(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(or, t.slice(6, t.length)) : e.setAttributeNS(or, t, n);
  else {
    const l = Fl(t);
    n == null || l && !_r(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : n);
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
    c === "boolean" ? n = _r(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(t);
}
const [pl, Hi] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let ls = 0;
const $i = /* @__PURE__ */ Promise.resolve(), Ui = () => {
  ls = 0;
}, Di = () => ls || ($i.then(Ui), ls = pl());
function ze(e, t, n, s) {
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
      ze(e, i, a, c);
    } else
      o && (Ki(e, i, o, c), l[t] = void 0);
  }
}
const ir = /(?:Once|Passive|Capture)$/;
function zi(e) {
  let t;
  if (ir.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ir); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : kt(e.slice(2)), t];
}
function Wi(e, t) {
  const n = (s) => {
    const r = s.timeStamp || pl();
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
const cr = /^on[a-z]/, Ji = (e, t, n, s, r = !1, l, o, i, c) => {
  t === "class" ? Pi(e, s, r) : t === "style" ? Li(e, n, s) : On(t) ? fs(t) || Vi(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qi(e, t, s, r)) ? Bi(e, t, s, l, o, i, c) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ri(e, t, s, r));
};
function Qi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && cr.test(t) && U(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || cr.test(t) && fe(n) ? !1 : t in e;
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
  return k(t) ? (n) => pn(t, n) : t;
};
function Xi(e) {
  e.target.composing = !0;
}
function ur(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const os = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = st(r);
    const l = s || r.props && r.props.type === "number";
    ze(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = yn(i)), e._assign(i);
    }), n && ze(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ze(e, "compositionstart", Xi), ze(e, "compositionend", ur), ze(e, "change", ur));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e._assign = st(l), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && yn(e.value) === t))
      return;
    const o = t == null ? "" : t;
    e.value !== o && (e.value = o);
  }
}, Zi = {
  deep: !0,
  created(e, t, n) {
    e._assign = st(n), ze(e, "change", () => {
      const s = e._modelValue, r = It(e), l = e.checked, o = e._assign;
      if (k(s)) {
        const i = as(s, r), c = i !== -1;
        if (l && !c)
          o(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (Nt(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(hl(e, l));
    });
  },
  mounted: ar,
  beforeUpdate(e, t, n) {
    e._assign = st(n), ar(e, t, n);
  }
};
function ar(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, k(t) ? e.checked = as(t, s.props.value) > -1 : Nt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = vt(t, hl(e, !0)));
}
const Gi = {
  created(e, { value: t }, n) {
    e.checked = vt(t, n.props.value), e._assign = st(n), ze(e, "change", () => {
      e._assign(It(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = st(s), t !== n && (e.checked = vt(t, s.props.value));
  }
}, ec = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Nt(t);
    ze(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? yn(It(o)) : It(o));
      e._assign(e.multiple ? r ? new Set(l) : l : l[0]);
    }), e._assign = st(s);
  },
  mounted(e, { value: t }) {
    fr(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = st(n);
  },
  updated(e, { value: t }) {
    fr(e, t);
  }
};
function fr(e, t) {
  const n = e.multiple;
  if (!(n && !k(t) && !Nt(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const l = e.options[s], o = It(l);
      if (n)
        k(t) ? l.selected = as(t, o) > -1 : l.selected = t.has(o);
      else if (vt(It(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function It(e) {
  return "_value" in e ? e._value : e.value;
}
function hl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const tc = {
  created(e, t, n) {
    fn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    fn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    fn(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    fn(e, t, n, s, "updated");
  }
};
function nc(e, t) {
  switch (e) {
    case "SELECT":
      return ec;
    case "TEXTAREA":
      return os;
    default:
      switch (t) {
        case "checkbox":
          return Zi;
        case "radio":
          return Gi;
        default:
          return os;
      }
  }
}
function fn(e, t, n, s, r) {
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
}, Ze = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const l = rc[t[r]];
    if (l && l(n, t))
      return;
  }
  return e(n, ...s);
}, gl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ht(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ht(e, !0), s.enter(e)) : s.leave(e, () => {
      Ht(e, !1);
    }) : Ht(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ht(e, t);
  }
};
function Ht(e, t) {
  e.style.display = t ? e._vod : "none";
}
const lc = /* @__PURE__ */ ye({ patchProp: Ji }, ki);
let dr;
function oc() {
  return dr || (dr = hi(lc));
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
var pr;
const nn = typeof window < "u";
nn && ((pr = window == null ? void 0 : window.navigator) == null ? void 0 : pr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
  al() ? tn(e) : t ? e() : Jt(e);
}
function vl(e) {
  var t;
  const n = cc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dc = nn ? window : void 0;
nn && window.document;
nn && window.navigator;
nn && window.location;
function pc(e, t = !1) {
  const n = te(), s = () => n.value = Boolean(e());
  return s(), fc(s, t), n;
}
const is = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cs = "__vueuse_ssr_handlers__";
is[cs] = is[cs] || {};
is[cs];
var hr = Object.getOwnPropertySymbols, hc = Object.prototype.hasOwnProperty, gc = Object.prototype.propertyIsEnumerable, mc = (e, t) => {
  var n = {};
  for (var s in e)
    hc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && hr)
    for (var s of hr(e))
      t.indexOf(s) < 0 && gc.call(e, s) && (n[s] = e[s]);
  return n;
};
function vc(e, t, n = {}) {
  const s = n, { window: r = dc } = s, l = mc(s, ["window"]);
  let o;
  const i = pc(() => r && "ResizeObserver" in r), c = () => {
    o && (o.disconnect(), o = void 0);
  }, a = Ue(() => vl(e), (p) => {
    c(), i.value && r && p && (o = new ResizeObserver(t), o.observe(p, l));
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
  }, n), Ue(() => vl(e), (o) => {
    r.value = o ? t.width : 0, l.value = o ? t.height : 0;
  }), {
    width: r,
    height: l
  };
}
var gr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(gr || (gr = {}));
var _c = Object.defineProperty, mr = Object.getOwnPropertySymbols, bc = Object.prototype.hasOwnProperty, wc = Object.prototype.propertyIsEnumerable, vr = (e, t, n) => t in e ? _c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xc = (e, t) => {
  for (var n in t || (t = {}))
    bc.call(t, n) && vr(e, n, t[n]);
  if (mr)
    for (var n of mr(t))
      wc.call(t, n) && vr(e, n, t[n]);
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
  }, p = () => {
    const B = n.value;
    if (B) {
      const D = d(B.scrollTop), L = a(B.clientHeight), K = D - c, Q = D + L + c;
      o.value = {
        start: K < 0 ? 0 : K,
        end: Q > l.value.length ? l.value.length : Q
      }, r.value = l.value.slice(o.value.start, o.value.end).map((re, N) => ({
        data: re,
        index: N + o.value.start
      }));
    }
  };
  Ue([s.width, s.height, e], () => {
    p();
  });
  const h = Fe(() => typeof i == "number" ? l.value.length * i : l.value.reduce((B, D, L) => B + i(L), 0)), b = (B) => typeof i == "number" ? B * i : l.value.slice(0, B).reduce((L, K, Q) => L + i(Q), 0), O = (B) => {
    n.value && (n.value.scrollTop = b(B), p());
  }, E = Fe(() => b(o.value.start)), A = Fe(() => ({
    style: {
      width: "100%",
      height: `${h.value - E.value}px`,
      marginTop: `${E.value}px`
    }
  }));
  return {
    list: r,
    scrollTo: O,
    containerProps: {
      ref: n,
      onScroll: () => {
        p();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: A
  };
}
const ct = (e) => {
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
  Yt(() => {
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
  }, Yt(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: ct(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => ct(d.value)).filter((d) => d != null))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: ct(d.value), data: Object.assign({}, d.dataset) }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (l.value = [{ value: a, key: a }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(ct(a), ct(a));
  else
    s != null && r.value.set(ct(s), ct(s));
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
const Fs = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), wl(te(n), "defaults");
}, wl = (e, t) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Fs());
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
}, yr = async function(e, t = null, n = {}) {
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
      const p = [];
      Yt((h) => {
        if (s.value.length >= r) {
          let b = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              b = !p.includes(s.value);
              break;
            case "complete":
              b = p.reduce((O, E) => O && !s.value.startsWith(E), !0);
              break;
          }
          if (b) {
            a.value = !0;
            const O = setTimeout(() => {
              p.push(s.value), c.value += 1, i.body = { ...i.body, ...l.value }, yr(t, s.value, i).then((E) => {
                e.actions.addRange(E), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            h(() => {
              clearTimeout(O);
            });
          }
        }
      });
    } else
      yr(t, null, i).then((p) => {
        e.actions.addRange(p), e.actions.sort();
      });
  return { searchingFlag: d };
}, El = (e, t, n, s = [], r = []) => {
  const l = te(""), o = te([]), i = te({}), c = { ...s.reduce((d, p) => (d[p] = !1, d), {}), ...r.reduce((d, p) => (d[p] = !0, d), {}) };
  for (let d in c) {
    let p = c[d], h = document.getElementById(d);
    i.value[d] = h == null ? void 0 : h.value, h && h.addEventListener("change", (b) => {
      i.value[d] = b.target.value, p && Jt(() => {
        if (t != null)
          for (let O of Array.from(t.value.keys()))
            o.value.find((E) => E.key == O) || n(O, !1);
        else
          o.value.find((O) => O.key == l.value) || n(l.value, !1);
      });
    });
  }
  const a = function(d, p) {
    let h = d.value;
    return Object.keys(i.value).length > 0 && (h = h.filter((b) => {
      var O, E;
      for (let A in i.value)
        if ((c[A] ? !0 : ((O = i.value[A]) != null ? O : "").length > 0) && ((E = b.data) == null ? void 0 : E.hasOwnProperty(A)) && b.data[A] != i.value[A])
          return !1;
      return !0;
    })), p.length > 0 && (h = h.filter((b) => b.value.toLowerCase().includes(p.toLowerCase()))), h;
  };
  return Yt(() => {
    o.value = a(e, l.value);
  }), { filterText: l, filteredOptions: o, filterValues: i };
}, Ol = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(p) {
    const b = document.createElement("canvas").getContext("2d");
    return b.font = i, b.measureText(p).width;
  }, a = Fe(() => {
    var h, b;
    const p = (h = sn(s.value).width) != null ? h : 100;
    if (o === "inherit")
      return p;
    if (o == null || o === "dynamic") {
      const O = (b = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? b : 16;
      return Math.max(p, Math.max(...e.value.map((E) => c(E.value))) + 20 + O * 3);
    }
    return o;
  }), d = te({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ho(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var p = sn(s.value), h = sn(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var h = sn(l.value);
    let b = -h.left + p.left;
    const O = window.document.documentElement.clientWidth;
    b + a.value > O && (b = O - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-h.top + p.top + p.height).toString() + "px",
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
}, jc = ["onClick"], Rc = { class: "row-input" }, Bc = ["checked"], Hc = ["onClick"], $c = { class: "row-input" }, Uc = ["checked"], Dc = ["onClick"], Kc = {
  key: 1,
  class: "no-matches"
}, Vc = { key: 2 }, zc = ["onClick"], Wc = { class: "row-input" }, qc = ["checked"], Jc = ["value"], Qc = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Yc = /* @__PURE__ */ Object.assign(Qc, {
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
    var Ee, _t, Qe;
    const n = e, s = Fe(() => {
      var F, M;
      return (M = (F = n.originalNode) == null ? void 0 : F.multiple) != null ? M : n.multiple;
    }), { options: r, selectedOptions: l, onReset: o } = bl(n.originalNode, Ut(n, "options"), Ut(n, "modelValue"), n.initialValue), { t: i } = xl(n.originalNode, Ut(n, "localization")), c = (Ee = n.originalNode) == null ? void 0 : Ee.classList, a = Object.values((Qe = (_t = n.originalNode) == null ? void 0 : _t.style) != null ? Qe : {});
    _l(n.originalNode);
    const d = (F, M = null) => {
      if (s.value) {
        let he = M;
        switch (he == null && (he = !l.value.has(F)), he) {
          case !0:
            l.value.set(F, F);
            break;
          case !1:
            l.value.delete(F);
            break;
        }
      } else
        l.value.clear(), M !== !1 && l.value.set(F, F), B.value = !1;
      N(Array.from(l.value.keys()));
    }, { filterText: p, filteredOptions: h, filterValues: b } = El(r, l, d, n.filterFields, n.hardFilterFields), { searchingFlag: O } = Cl(
      r,
      n.url,
      n.searchableUrl,
      p,
      n.minChars,
      b,
      n.fetchMode,
      n.fetchOptions
    ), E = te(null), A = te(null), P = te(null), B = te(!1);
    function D(F) {
      n.disabled || (B.value = F);
    }
    Ue(p, () => {
      A.value.querySelector(".scroller").scrollTop = 0;
    });
    const L = te(null), K = function(F) {
      const M = wt(F.target);
      M.push(F.target), !M.includes(E.value) && !M.includes(A.value) ? B.value = !1 : (F.stopImmediatePropagation(), F.preventDefault());
    };
    tn(() => {
      if (n.dropdownContainer) {
        let F = !1;
        L.value = wt(E.value).find((M) => !!(M instanceof Element && (M.matches(n.dropdownContainer) && (F = !0), F && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(M).position))));
      }
      if (L.value == null && (L.value = document.querySelector("body")), n.originalNode) {
        for (let M of c)
          M != "extraselect" && E.value.classList.add(M);
        for (let M of a)
          E.value.style[M] = n.originalNode.style[M];
        let F = wt(E.value, "form").pop();
        F instanceof HTMLElement && F.matches("form") && F.addEventListener("reset", () => setTimeout(o)), n.originalNode.toggleValue = d, n.originalNode.setValues = (M) => {
          l.value.clear();
          for (let he of M)
            d(he);
        };
      }
      window.document.addEventListener("mousedown", K), window.document.addEventListener("focusin", K);
    }), kn(() => {
      window.document.removeEventListener("mousedown", K), window.document.removeEventListener("focusin", K);
    });
    const { dropdownStyle: Q, getTextWidth: re } = Ol(r, l, B, E, A, L, n.maxWidth), N = (F) => {
      Jt(
        () => {
          var M;
          return (M = n.originalNode) == null ? void 0 : M.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", F);
    }, z = (F) => {
      j(F, !1), p.value = "";
    }, j = (F, M = null) => {
      M == null && (M = !J.value), M ? (l.value.clear(), r.value.forEach((he) => l.value.set(he.key, he.key))) : l.value.clear(), N(Array.from(l.value.keys()));
    }, $ = () => {
      oe.value ? h.value.forEach((F) => {
        l.value.has(F.key) && l.value.delete(F.key);
      }) : h.value.forEach((F) => {
        l.value.has(F.key) || l.value.set(F.key, F.key);
      }), N(Array.from(l.value.keys()));
    };
    Ue(B, (F, M) => {
      F != M && (F ? n.search && Jt(() => {
        P.value.focus({ focusVisible: !0 });
      }) : p.value = "");
    });
    const J = Fe(() => l.value.size == r.value.length), oe = Fe(() => h.value.reduce((F, M) => F && l.value.has(M.key), !0)), yt = Fe(() => l.value.size == 0), jt = Fe(() => {
      var F, M, he, rt, ae;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (yt.value)
          return i("No selection");
        if (!n.searchableUrl && J.value)
          return i("All selected");
        const ce = E.value ? getComputedStyle(E.value) : null, De = ((F = E.value) == null ? void 0 : F.clientWidth) - parseInt(ce == null ? void 0 : ce.paddingLeft) - parseInt(ce == null ? void 0 : ce.paddingRight);
        let lt = i(":n selected - ", { n: l.value.size }), Ke = !0;
        for (let Rt of l.value)
          if (Ke ? Ke = !1 : lt += ", ", lt += (he = (M = r.map.get(Rt[0])) == null ? void 0 : M.value) != null ? he : O.value ? i("Loading...") : i("Value not found"), De < re(lt))
            return l.value.size + i(" selected");
        return lt;
      } else
        for (let ce of l.value)
          return (ae = (rt = r.map.get(ce[0])) == null ? void 0 : rt.value) != null ? ae : O.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: me, containerProps: le, wrapperProps: Y } = yl(
      h,
      {
        itemHeight: 32
      }
    );
    return (F, M) => {
      var he, rt;
      return G(), ie(pe, null, [
        H(s) && H(l).size == 0 ? (G(), ie("input", {
          key: 0,
          type: "hidden",
          name: (rt = (he = n.originalNode) == null ? void 0 : he.name) == null ? void 0 : rt.replace("[]", ""),
          value: ""
        }, null, 8, Sc)) : Te("", !0),
        n.showSelected ? (G(), ie("div", Ic, [
          (G(!0), ie(pe, null, gn(H(l), (ae) => {
            var ce;
            return G(), ie("div", {
              key: ae,
              onClick: Ze((De) => d(ae[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ss(Be((ce = H(r).find((De) => De.key == ae[0])) == null ? void 0 : ce.value) + " ", 1),
              ue("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Mc)
            ], 8, Fc);
          }), 128))
        ])) : Te("", !0),
        ue("input", Zt({
          onFocus: M[0] || (M[0] = (ae) => D(!0)),
          onClick: M[1] || (M[1] = Ze((ae) => D(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: E,
          value: H(jt),
          class: "extra-select extra-select-input",
          readonly: ""
        }, F.$attrs, { disabled: e.disabled }), null, 16, Nc),
        L.value ? (G(), En(ns, {
          key: 2,
          to: L.value
        }, [
          wn(ue("div", {
            class: Mt(["extra-select dropdown", { searching: H(O) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: Ft(H(Q))
          }, [
            n.search ? (G(), ie("div", kc, [
              wn(ue("input", {
                ref_key: "searchNode",
                ref: P,
                class: "extra-select-search",
                "onUpdate:modelValue": M[2] || (M[2] = (ae) => de(p) ? p.value = ae : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: H(i)("Search...")
              }, null, 8, Pc), [
                [os, H(p)]
              ])
            ])) : Te("", !0),
            H(p).length >= n.minChars ? (G(), ie(pe, { key: 1 }, [
              H(s) ? (G(), ie("div", Lc, [
                H(p).length == 0 ? (G(), ie("div", {
                  key: 0,
                  onClick: Ze(j, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  ue("div", Rc, [
                    ue("input", {
                      checked: H(J),
                      type: "checkbox"
                    }, null, 8, Bc),
                    ue("b", null, Be(H(i)("Select all")), 1)
                  ])
                ], 8, jc)) : Te("", !0),
                H(h).length > 0 && H(p).length > 0 ? (G(), ie("div", {
                  key: 1,
                  onClick: Ze($, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  ue("div", $c, [
                    ue("input", {
                      checked: H(oe),
                      type: "checkbox"
                    }, null, 8, Uc),
                    ue("b", null, Be(H(i)("Select Filtered")), 1)
                  ])
                ], 8, Hc)) : Te("", !0),
                ue("div", {
                  class: "clear",
                  onClick: Ze(z, ["stop", "prevent"])
                }, Be(H(i)("Clear")), 9, Dc)
              ])) : Te("", !0),
              H(h).length == 0 ? (G(), ie("div", Kc, Be(H(i)("No matches found")), 1)) : Te("", !0)
            ], 64)) : (G(), ie("div", Vc, Be(H(i)("Insert at least :n characters", { n: n.minChars })), 1)),
            ue("div", Zt(H(le), { class: "scroller" }), [
              ue("div", br(Ss(H(Y))), [
                (G(!0), ie(pe, null, gn(H(me), (ae) => (G(), ie("button", {
                  key: ae.index,
                  class: "dropdown-row",
                  onClick: Ze((ce) => d(ae.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  ue("div", Wc, [
                    H(s) ? (G(), ie("input", {
                      key: 0,
                      checked: H(l).has(ae.data.key),
                      type: "checkbox"
                    }, null, 8, qc)) : Te("", !0),
                    ss(" " + Be(ae.data.value), 1)
                  ])
                ], 8, zc))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [gl, B.value]
          ])
        ], 8, ["to"])) : Te("", !0),
        n.originalNode ? (G(), En(ns, {
          key: 3,
          to: n.originalNode
        }, [
          (G(!0), ie(pe, null, gn(H(l), (ae) => (G(), ie("option", {
            key: ae[0],
            selected: "selected",
            value: ae[0]
          }, null, 8, Jc))), 128))
        ], 8, ["to"])) : Te("", !0)
      ], 64);
    };
  }
}), Xc = ["disabled"], Zc = {
  key: 0,
  class: "no-matches"
}, Gc = { key: 1 }, eu = ["onClick"], tu = { class: "row-input" }, nu = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, su = /* @__PURE__ */ Object.assign(nu, {
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
    var re, N, z;
    const n = e, { options: s } = bl(n.originalNode, Ut(n, "options"), te([])), { t: r } = xl(n.originalNode, Ut(n, "localization")), l = (re = n.originalNode) == null ? void 0 : re.classList, o = Object.values((z = (N = n.originalNode) == null ? void 0 : N.style) != null ? z : {});
    _l(n.originalNode);
    const i = (j, $ = null) => {
      $ === !1 ? c.value = "" : c.value = s.map.get(j).value, O.value = !1;
    }, { filterText: c, filteredOptions: a, filterValues: d } = El(s, null, i, n.filterFields, n.hardFilterFields), { searchingFlag: p } = Cl(
      s,
      n.url,
      n.searchableUrl,
      c,
      n.minChars,
      d,
      n.fetchMode,
      n.fetchOptions
    ), h = te(null), b = te(null), O = te(!1), E = te(null);
    function A(j) {
      n.disabled || (O.value = j);
    }
    Ue(c, () => {
      b.value.querySelector(".scroller").scrollTop = 0;
    });
    const P = function(j) {
      const $ = wt(j.target);
      $.push(j.target), !$.includes(h.value) && !$.includes(b.value) ? O.value = !1 : (j.stopImmediatePropagation(), j.preventDefault());
    };
    tn(() => {
      if (n.dropdownContainer) {
        let J = !1;
        E.value = wt(h.value).find((oe) => !!(oe instanceof Element && (oe.matches(n.dropdownContainer) && (J = !0), J && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(oe).position))));
      }
      if (E.value == null && (E.value = document.querySelector("body")), n.originalNode) {
        for (let oe of l)
          oe != "extrasuggest" && h.value.classList.add(oe);
        for (let oe of o)
          h.value.style[oe] = n.originalNode.style[oe];
        c.value = n.originalNode.value;
        let J = wt(h.value, "form").pop();
        J instanceof HTMLElement && J.matches("form") && J.addEventListener("reset", () => setTimeout($)), n.originalNode.addEventListener("change", () => {
          D(!0);
        });
      }
      Yt(() => {
        n.modelValue != null && (c.value = n.modelValue);
      });
      const j = c.value, $ = () => {
        c.value = j;
      };
      window.document.addEventListener("mousedown", P), window.document.addEventListener("focusin", P);
    }), kn(() => {
      window.document.removeEventListener("mousedown", P), window.document.removeEventListener("focusin", P);
    });
    const { dropdownStyle: B } = Ol(s, te([]), O, h, b, E, n.maxWidth), D = (j = !1) => {
      var $;
      n.originalNode && (j ? c.value = n.originalNode.value : (n.originalNode.value = c.value, ($ = n.originalNode) == null || $.dispatchEvent(new Event("change", { bubbles: !0 })))), t("update:modelValue", c.value);
    };
    Ue(() => O.value, (j) => {
      j === !1 && D();
    });
    const { list: L, containerProps: K, wrapperProps: Q } = yl(
      a,
      {
        itemHeight: 32
      }
    );
    return (j, $) => (G(), ie(pe, null, [
      wn(ue("input", Zt({
        onFocus: $[0] || ($[0] = (J) => A(!0)),
        onClick: $[1] || ($[1] = Ze((J) => A(!0), ["stop", "prevent"])),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": $[2] || ($[2] = (J) => de(c) ? c.value = J : null),
        class: "extra-select extra-select-input"
      }, j.$attrs, { disabled: e.disabled }), null, 16, Xc), [
        [tc, H(c)]
      ]),
      E.value ? (G(), En(ns, {
        key: 0,
        to: E.value
      }, [
        wn(ue("div", {
          class: Mt(["extra-select dropdown", { searching: H(p) > 0 }]),
          ref_key: "dropdownNode",
          ref: b,
          style: Ft(H(B))
        }, [
          H(c).length >= n.minChars ? (G(), ie(pe, { key: 0 }, [
            H(a).length == 0 ? (G(), ie("div", Zc, Be(H(r)("No matches found")), 1)) : Te("", !0)
          ], 64)) : (G(), ie("div", Gc, Be(H(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          ue("div", Zt(H(K), { class: "scroller" }), [
            ue("div", br(Ss(H(Q))), [
              (G(!0), ie(pe, null, gn(H(L), (J) => (G(), ie("button", {
                key: J.index,
                class: "dropdown-row",
                onClick: Ze((oe) => i(J.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ue("div", tu, Be(J.data.value), 1)
              ], 8, eu))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [gl, O.value]
        ])
      ], 8, ["to"])) : Te("", !0)
    ], 64));
  }
}), ru = Fs, Tl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Tl.bindNew(e);
    });
  },
  bindNew(e) {
    mt.lock(e, "extra-select", () => {
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
      const s = ml(Yc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), mt.remove(e, "extra-select");
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
    mt.lock(e, "extra-suggest", () => {
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
      const s = ml(su, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), mt.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Tl.init(), Al.init(), Fs();
});
export {
  Tl as ExtraSelect,
  Al as ExtraSuggest,
  ru as loadExtraSelectDefaultLocalization
};
