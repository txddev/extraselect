const He = /* @__PURE__ */ new WeakMap();
class dt {
  static put(t, n, s) {
    He.has(t) || He.set(t, /* @__PURE__ */ new Map()), He.get(t).set(n, s);
  }
  static get(t, n) {
    return He.get(t).get(n);
  }
  static has(t, n) {
    return He.has(t) && He.get(t).has(n);
  }
  static remove(t, n) {
    var s = He.get(t).delete(n);
    return He.get(t).size !== 0 && He.delete(t), s;
  }
  static lock(t, n, s) {
    return dt.has(t, n) ? !1 : (dt.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = He);
function en(e) {
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
function yt(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s instanceof HTMLElement && !(t instanceof HTMLElement && s === t) && !(typeof t == "string" && s.matches(t)); ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return s != null && n.push(s), n;
}
function Ol(e) {
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
const Tl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Al = /* @__PURE__ */ cs(Tl);
function vr(e) {
  return !!e || e === "";
}
function At(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ce(s) ? Fl(s) : At(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else {
    if (ce(e))
      return e;
    if (se(e))
      return e;
  }
}
const Il = /;(?![^(]*\))/g, kl = /:(.+)/;
function Fl(e) {
  const t = {};
  return e.split(Il).forEach((n) => {
    if (n) {
      const s = n.split(kl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function It(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = It(e[n]);
      s && (t += s + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function yr(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ce(t) && (e.class = It(t)), n && (e.style = At(n)), e;
}
function Ml(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ht(e[s], t[s]);
  return n;
}
function ht(e, t) {
  if (e === t)
    return !0;
  let n = Ns(e), s = Ns(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ut(e), s = Ut(t), n || s)
    return e === t;
  if (n = N(e), s = N(t), n || s)
    return n && s ? Ml(e, t) : !1;
  if (n = se(e), s = se(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const o in e) {
      const i = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (i && !u || !i && u || !ht(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function us(e, t) {
  return e.findIndex((n) => ht(n, t));
}
const jt = (e) => ce(e) ? e : e == null ? "" : N(e) || se(e) && (e.toString === wr || !$(e.toString)) ? JSON.stringify(e, _r, 2) : String(e), _r = (e, t) => t && t.__v_isRef ? _r(e, t.value) : bt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : kt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : se(t) && !N(t) && !xr(t) ? String(t) : t, G = {}, _t = [], Le = () => {
}, Nl = () => !1, Sl = /^on[^a-z]/, xn = (e) => Sl.test(e), as = (e) => e.startsWith("onUpdate:"), ge = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Pl = Object.prototype.hasOwnProperty, K = (e, t) => Pl.call(e, t), N = Array.isArray, bt = (e) => Yt(e) === "[object Map]", kt = (e) => Yt(e) === "[object Set]", Ns = (e) => Yt(e) === "[object Date]", $ = (e) => typeof e == "function", ce = (e) => typeof e == "string", Ut = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", br = (e) => se(e) && $(e.then) && $(e.catch), wr = Object.prototype.toString, Yt = (e) => wr.call(e), Ll = (e) => Yt(e).slice(8, -1), xr = (e) => Yt(e) === "[object Object]", ds = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = /* @__PURE__ */ cs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Rl = /-(\w)/g, Ct = Cn((e) => e.replace(Rl, (t, n) => n ? n.toUpperCase() : "")), jl = /\B([A-Z])/g, Ft = Cn((e) => e.replace(jl, "-$1").toLowerCase()), Cr = Cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ln = Cn((e) => e ? `on${Cr(e)}` : ""), $t = (e, t) => !Object.is(e, t), an = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, pn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, gn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ss;
const Bl = () => Ss || (Ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Ce;
class Hl {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && Ce && (this.parent = Ce, this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = n;
      }
    }
  }
  on() {
    Ce = this;
  }
  off() {
    Ce = this.parent;
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
function Ul(e, t = Ce) {
  t && t.active && t.effects.push(e);
}
function $l() {
  return Ce;
}
function Dl(e) {
  Ce && Ce.cleanups.push(e);
}
const hs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Er = (e) => (e.w & Ze) > 0, Or = (e) => (e.n & Ze) > 0, Kl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ze;
}, Vl = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Er(r) && !Or(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ze, r.n &= ~Ze;
    }
    t.length = n;
  }
}, $n = /* @__PURE__ */ new WeakMap();
let Rt = 0, Ze = 1;
const Dn = 30;
let Me;
const at = Symbol(""), Kn = Symbol("");
class ps {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ul(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Me, n = Qe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Me, Me = this, Qe = !0, Ze = 1 << ++Rt, Rt <= Dn ? Kl(this) : Ps(this), this.fn();
    } finally {
      Rt <= Dn && Vl(this), Ze = 1 << --Rt, Me = this.parent, Qe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Me === this ? this.deferStop = !0 : this.active && (Ps(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ps(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Qe = !0;
const Tr = [];
function Mt() {
  Tr.push(Qe), Qe = !1;
}
function Nt() {
  const e = Tr.pop();
  Qe = e === void 0 ? !0 : e;
}
function Ee(e, t, n) {
  if (Qe && Me) {
    let s = $n.get(e);
    s || $n.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = hs()), Ar(r);
  }
}
function Ar(e, t) {
  let n = !1;
  Rt <= Dn ? Or(e) || (e.n |= Ze, n = !Er(e)) : n = !e.has(Me), n && (e.add(Me), Me.deps.push(e));
}
function We(e, t, n, s, r, l) {
  const o = $n.get(e);
  if (!o)
    return;
  let i = [];
  if (t === "clear")
    i = [...o.values()];
  else if (n === "length" && N(e))
    o.forEach((u, a) => {
      (a === "length" || a >= s) && i.push(u);
    });
  else
    switch (n !== void 0 && i.push(o.get(n)), t) {
      case "add":
        N(e) ? ds(n) && i.push(o.get("length")) : (i.push(o.get(at)), bt(e) && i.push(o.get(Kn)));
        break;
      case "delete":
        N(e) || (i.push(o.get(at)), bt(e) && i.push(o.get(Kn)));
        break;
      case "set":
        bt(e) && i.push(o.get(at));
        break;
    }
  if (i.length === 1)
    i[0] && Vn(i[0]);
  else {
    const u = [];
    for (const a of i)
      a && u.push(...a);
    Vn(hs(u));
  }
}
function Vn(e, t) {
  const n = N(e) ? e : [...e];
  for (const s of n)
    s.computed && Ls(s);
  for (const s of n)
    s.computed || Ls(s);
}
function Ls(e, t) {
  (e !== Me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Wl = /* @__PURE__ */ cs("__proto__,__v_isRef,__isVue"), Ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ut)
), ql = /* @__PURE__ */ gs(), zl = /* @__PURE__ */ gs(!1, !0), Jl = /* @__PURE__ */ gs(!0), Rs = /* @__PURE__ */ Ql();
function Ql() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = z(this);
      for (let l = 0, o = this.length; l < o; l++)
        Ee(s, "get", l + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(z)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Mt();
      const s = z(this)[t].apply(this, n);
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
    if (r === "__v_raw" && l === (e ? t ? fo : Sr : t ? Nr : Mr).get(s))
      return s;
    const o = N(s);
    if (!e && o && K(Rs, r))
      return Reflect.get(Rs, r, l);
    const i = Reflect.get(s, r, l);
    return (Ut(r) ? Ir.has(r) : Wl(r)) || (e || Ee(s, "get", r), t) ? i : ae(i) ? o && ds(r) ? i : i.value : se(i) ? e ? Pr(i) : ys(i) : i;
  };
}
const Yl = /* @__PURE__ */ kr(), Xl = /* @__PURE__ */ kr(!0);
function kr(e = !1) {
  return function(n, s, r, l) {
    let o = n[s];
    if (Et(o) && ae(o) && !ae(r))
      return !1;
    if (!e && (!mn(r) && !Et(r) && (o = z(o), r = z(r)), !N(n) && ae(o) && !ae(r)))
      return o.value = r, !0;
    const i = N(n) && ds(s) ? Number(s) < n.length : K(n, s), u = Reflect.set(n, s, r, l);
    return n === z(l) && (i ? $t(r, o) && We(n, "set", s, r) : We(n, "add", s, r)), u;
  };
}
function Zl(e, t) {
  const n = K(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && We(e, "delete", t, void 0), s;
}
function Gl(e, t) {
  const n = Reflect.has(e, t);
  return (!Ut(t) || !Ir.has(t)) && Ee(e, "has", t), n;
}
function eo(e) {
  return Ee(e, "iterate", N(e) ? "length" : at), Reflect.ownKeys(e);
}
const Fr = {
  get: ql,
  set: Yl,
  deleteProperty: Zl,
  has: Gl,
  ownKeys: eo
}, to = {
  get: Jl,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, no = /* @__PURE__ */ ge({}, Fr, {
  get: zl,
  set: Xl
}), ms = (e) => e, En = (e) => Reflect.getPrototypeOf(e);
function tn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = z(e), l = z(t);
  n || (t !== l && Ee(r, "get", t), Ee(r, "get", l));
  const { has: o } = En(r), i = s ? ms : n ? bs : Dt;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function nn(e, t = !1) {
  const n = this.__v_raw, s = z(n), r = z(e);
  return t || (e !== r && Ee(s, "has", e), Ee(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function sn(e, t = !1) {
  return e = e.__v_raw, !t && Ee(z(e), "iterate", at), Reflect.get(e, "size", e);
}
function js(e) {
  e = z(e);
  const t = z(this);
  return En(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this;
}
function Bs(e, t) {
  t = z(t);
  const n = z(this), { has: s, get: r } = En(n);
  let l = s.call(n, e);
  l || (e = z(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? $t(t, o) && We(n, "set", e, t) : We(n, "add", e, t), this;
}
function Hs(e) {
  const t = z(this), { has: n, get: s } = En(t);
  let r = n.call(t, e);
  r || (e = z(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && We(t, "delete", e, void 0), l;
}
function Us() {
  const e = z(this), t = e.size !== 0, n = e.clear();
  return t && We(e, "clear", void 0, void 0), n;
}
function rn(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = z(o), u = t ? ms : e ? bs : Dt;
    return !e && Ee(i, "iterate", at), o.forEach((a, d) => s.call(r, u(a), u(d), l));
  };
}
function ln(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = z(r), o = bt(l), i = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, a = r[e](...s), d = n ? ms : t ? bs : Dt;
    return !t && Ee(l, "iterate", u ? Kn : at), {
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
function so() {
  const e = {
    get(l) {
      return tn(this, l);
    },
    get size() {
      return sn(this);
    },
    has: nn,
    add: js,
    set: Bs,
    delete: Hs,
    clear: Us,
    forEach: rn(!1, !1)
  }, t = {
    get(l) {
      return tn(this, l, !1, !0);
    },
    get size() {
      return sn(this);
    },
    has: nn,
    add: js,
    set: Bs,
    delete: Hs,
    clear: Us,
    forEach: rn(!1, !0)
  }, n = {
    get(l) {
      return tn(this, l, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(l) {
      return nn.call(this, l, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: rn(!0, !1)
  }, s = {
    get(l) {
      return tn(this, l, !0, !0);
    },
    get size() {
      return sn(this, !0);
    },
    has(l) {
      return nn.call(this, l, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: rn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = ln(l, !1, !1), n[l] = ln(l, !0, !1), t[l] = ln(l, !1, !0), s[l] = ln(l, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [ro, lo, oo, io] = /* @__PURE__ */ so();
function vs(e, t) {
  const n = t ? e ? io : oo : e ? lo : ro;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(K(n, r) && r in s ? n : s, r, l);
}
const co = {
  get: /* @__PURE__ */ vs(!1, !1)
}, uo = {
  get: /* @__PURE__ */ vs(!1, !0)
}, ao = {
  get: /* @__PURE__ */ vs(!0, !1)
}, Mr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap();
function ho(e) {
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
function po(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ho(Ll(e));
}
function ys(e) {
  return Et(e) ? e : _s(e, !1, Fr, co, Mr);
}
function go(e) {
  return _s(e, !1, no, uo, Nr);
}
function Pr(e) {
  return _s(e, !0, to, ao, Sr);
}
function _s(e, t, n, s, r) {
  if (!se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = po(e);
  if (o === 0)
    return e;
  const i = new Proxy(e, o === 2 ? s : n);
  return r.set(e, i), i;
}
function wt(e) {
  return Et(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Et(e) {
  return !!(e && e.__v_isReadonly);
}
function mn(e) {
  return !!(e && e.__v_isShallow);
}
function Lr(e) {
  return wt(e) || Et(e);
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Rr(e) {
  return pn(e, "__v_skip", !0), e;
}
const Dt = (e) => se(e) ? ys(e) : e, bs = (e) => se(e) ? Pr(e) : e;
function jr(e) {
  Qe && Me && (e = z(e), Ar(e.dep || (e.dep = hs())));
}
function Br(e, t) {
  e = z(e), e.dep && Vn(e.dep);
}
function ae(e) {
  return !!(e && e.__v_isRef === !0);
}
function ne(e) {
  return Hr(e, !1);
}
function mo(e) {
  return Hr(e, !0);
}
function Hr(e, t) {
  return ae(e) ? e : new vo(e, t);
}
class vo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : z(t), this._value = n ? t : Dt(t);
  }
  get value() {
    return jr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || mn(t) || Et(t);
    t = n ? t : z(t), $t(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Dt(t), Br(this));
  }
}
function W(e) {
  return ae(e) ? e.value : e;
}
const yo = {
  get: (e, t, n) => W(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ae(r) && !ae(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ur(e) {
  return wt(e) ? e : new Proxy(e, yo);
}
class _o {
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
function Wn(e, t, n) {
  const s = e[t];
  return ae(s) ? s : new _o(e, t, n);
}
var $r;
class bo {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[$r] = !1, this._dirty = !0, this.effect = new ps(t, () => {
      this._dirty || (this._dirty = !0, Br(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = z(this);
    return jr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
$r = "__v_isReadonly";
function wo(e, t, n = !1) {
  let s, r;
  const l = $(e);
  return l ? (s = e, r = Le) : (s = e.get, r = e.set), new bo(s, r, l || !r, n);
}
function Ye(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (l) {
    On(l, t, n);
  }
  return r;
}
function Ie(e, t, n, s) {
  if ($(e)) {
    const l = Ye(e, t, n, s);
    return l && br(l) && l.catch((o) => {
      On(o, t, n);
    }), l;
  }
  const r = [];
  for (let l = 0; l < e.length; l++)
    r.push(Ie(e[l], t, n, s));
  return r;
}
function On(e, t, n, s = !0) {
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
  xo(e, n, r, s);
}
function xo(e, t, n, s = !0) {
  console.error(e);
}
let Kt = !1, qn = !1;
const pe = [];
let $e = 0;
const xt = [];
let De = null, ot = 0;
const Dr = /* @__PURE__ */ Promise.resolve();
let ws = null;
function Vt(e) {
  const t = ws || Dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Co(e) {
  let t = $e + 1, n = pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Wt(pe[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function xs(e) {
  (!pe.length || !pe.includes(e, Kt && e.allowRecurse ? $e + 1 : $e)) && (e.id == null ? pe.push(e) : pe.splice(Co(e.id), 0, e), Kr());
}
function Kr() {
  !Kt && !qn && (qn = !0, ws = Dr.then(Wr));
}
function Eo(e) {
  const t = pe.indexOf(e);
  t > $e && pe.splice(t, 1);
}
function Oo(e) {
  N(e) ? xt.push(...e) : (!De || !De.includes(e, e.allowRecurse ? ot + 1 : ot)) && xt.push(e), Kr();
}
function $s(e, t = Kt ? $e + 1 : 0) {
  for (; t < pe.length; t++) {
    const n = pe[t];
    n && n.pre && (pe.splice(t, 1), t--, n());
  }
}
function Vr(e) {
  if (xt.length) {
    const t = [...new Set(xt)];
    if (xt.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, De.sort((n, s) => Wt(n) - Wt(s)), ot = 0; ot < De.length; ot++)
      De[ot]();
    De = null, ot = 0;
  }
}
const Wt = (e) => e.id == null ? 1 / 0 : e.id, To = (e, t) => {
  const n = Wt(e) - Wt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  qn = !1, Kt = !0, pe.sort(To);
  const t = Le;
  try {
    for ($e = 0; $e < pe.length; $e++) {
      const n = pe[$e];
      n && n.active !== !1 && Ye(n, null, 14);
    }
  } finally {
    $e = 0, pe.length = 0, Vr(), Kt = !1, ws = null, (pe.length || xt.length) && Wr();
  }
}
function Ao(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || G;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: h, trim: g } = s[d] || G;
    g && (r = n.map((_) => _.trim())), h && (r = n.map(gn));
  }
  let i, u = s[i = Ln(t)] || s[i = Ln(Ct(t))];
  !u && l && (u = s[i = Ln(Ft(t))]), u && Ie(u, e, 6, r);
  const a = s[i + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Ie(a, e, 6, r);
  }
}
function qr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let o = {}, i = !1;
  if (!$(e)) {
    const u = (a) => {
      const d = qr(a, t, !0);
      d && (i = !0, ge(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !l && !i ? (se(e) && s.set(e, null), null) : (N(l) ? l.forEach((u) => o[u] = null) : ge(o, l), se(e) && s.set(e, o), o);
}
function Tn(e, t) {
  return !e || !xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, Ft(t)) || K(e, t));
}
let Se = null, zr = null;
function vn(e) {
  const t = Se;
  return Se = e, zr = e && e.type.__scopeId || null, t;
}
function Io(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Zs(-1);
    const l = vn(t), o = e(...r);
    return vn(l), s._d && Zs(1), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Rn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: l, propsOptions: [o], slots: i, attrs: u, emit: a, render: d, renderCache: h, data: g, setupState: _, ctx: C, inheritAttrs: A } = e;
  let F, S;
  const j = vn(e);
  try {
    if (n.shapeFlag & 4) {
      const B = r || s;
      F = Ue(d.call(B, B, h, l, _, g, C)), S = u;
    } else {
      const B = t;
      F = Ue(B.length > 1 ? B(l, { attrs: u, slots: i, emit: a }) : B(l, null)), S = t.props ? u : ko(u);
    }
  } catch (B) {
    Ht.length = 0, On(B, e, 1), F = Ve(Re);
  }
  let U = F;
  if (S && A !== !1) {
    const B = Object.keys(S), { shapeFlag: D } = U;
    B.length && D & 7 && (o && B.some(as) && (S = Fo(S, o)), U = Ge(U, S));
  }
  return n.dirs && (U = Ge(U), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (U.transition = n.transition), F = U, vn(j), F;
}
const ko = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || xn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fo = (e, t) => {
  const n = {};
  for (const s in e)
    (!as(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Mo(e, t, n) {
  const { props: s, children: r, component: l } = e, { props: o, children: i, patchFlag: u } = t, a = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Ds(s, o, a) : !!o;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const g = d[h];
        if (o[g] !== s[g] && !Tn(a, g))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? Ds(s, o, a) : !0 : !!o;
  return !1;
}
function Ds(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    if (t[l] !== e[l] && !Tn(n, l))
      return !0;
  }
  return !1;
}
function No({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const So = (e) => e.__isSuspense;
function Po(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
function Lo(e, t) {
  if (de) {
    let n = de.provides;
    const s = de.parent && de.parent.provides;
    s === n && (n = de.provides = Object.create(s)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const s = de || Se;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(s.proxy) : t;
  }
}
function qt(e, t) {
  return An(e, null, t);
}
function Ro(e, t) {
  return An(e, null, { flush: "post" });
}
const Ks = {};
function Xe(e, t, n) {
  return An(e, t, n);
}
function An(e, t, { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = G) {
  const i = de;
  let u, a = !1, d = !1;
  if (ae(e) ? (u = () => e.value, a = mn(e)) : wt(e) ? (u = () => e, s = !0) : N(e) ? (d = !0, a = e.some((S) => wt(S) || mn(S)), u = () => e.map((S) => {
    if (ae(S))
      return S.value;
    if (wt(S))
      return ut(S);
    if ($(S))
      return Ye(S, i, 2);
  })) : $(e) ? t ? u = () => Ye(e, i, 2) : u = () => {
    if (!(i && i.isUnmounted))
      return h && h(), Ie(e, i, 3, [g]);
  } : u = Le, t && s) {
    const S = u;
    u = () => ut(S());
  }
  let h, g = (S) => {
    h = F.onStop = () => {
      Ye(S, i, 4);
    };
  };
  if (Qt)
    return g = Le, t ? n && Ie(t, i, 3, [
      u(),
      d ? [] : void 0,
      g
    ]) : u(), Le;
  let _ = d ? [] : Ks;
  const C = () => {
    if (!!F.active)
      if (t) {
        const S = F.run();
        (s || a || (d ? S.some((j, U) => $t(j, _[U])) : $t(S, _))) && (h && h(), Ie(t, i, 3, [
          S,
          _ === Ks ? void 0 : _,
          g
        ]), _ = S);
      } else
        F.run();
  };
  C.allowRecurse = !!t;
  let A;
  r === "sync" ? A = C : r === "post" ? A = () => be(C, i && i.suspense) : (C.pre = !0, i && (C.id = i.uid), A = () => xs(C));
  const F = new ps(u, A);
  return t ? n ? C() : _ = F.run() : r === "post" ? be(F.run.bind(F), i && i.suspense) : F.run(), () => {
    F.stop(), i && i.scope && fs(i.scope.effects, F);
  };
}
function jo(e, t, n) {
  const s = this.proxy, r = ce(e) ? e.includes(".") ? Jr(s, e) : () => s[e] : e.bind(s, s);
  let l;
  $(t) ? l = t : (l = t.handler, n = t);
  const o = de;
  Ot(this);
  const i = An(r, l.bind(s), n);
  return o ? Ot(o) : ft(), i;
}
function Jr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ut(e, t) {
  if (!se(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ae(e))
    ut(e.value, t);
  else if (N(e))
    for (let n = 0; n < e.length; n++)
      ut(e[n], t);
  else if (kt(e) || bt(e))
    e.forEach((n) => {
      ut(n, t);
    });
  else if (xr(e))
    for (const n in e)
      ut(e[n], t);
  return e;
}
function Bo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xt(() => {
    e.isMounted = !0;
  }), Zr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Te = [Function, Array], Ho = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Te,
    onEnter: Te,
    onAfterEnter: Te,
    onEnterCancelled: Te,
    onBeforeLeave: Te,
    onLeave: Te,
    onAfterLeave: Te,
    onLeaveCancelled: Te,
    onBeforeAppear: Te,
    onAppear: Te,
    onAfterAppear: Te,
    onAppearCancelled: Te
  },
  setup(e, { slots: t }) {
    const n = cl(), s = Bo();
    let r;
    return () => {
      const l = t.default && Yr(t.default(), !0);
      if (!l || !l.length)
        return;
      let o = l[0];
      if (l.length > 1) {
        for (const A of l)
          if (A.type !== Re) {
            o = A;
            break;
          }
      }
      const i = z(e), { mode: u } = i;
      if (s.isLeaving)
        return Bn(o);
      const a = Vs(o);
      if (!a)
        return Bn(o);
      const d = zn(a, i, s, n);
      Jn(a, d);
      const h = n.subTree, g = h && Vs(h);
      let _ = !1;
      const { getTransitionKey: C } = a.type;
      if (C) {
        const A = C();
        r === void 0 ? r = A : A !== r && (r = A, _ = !0);
      }
      if (g && g.type !== Re && (!it(a, g) || _)) {
        const A = zn(g, i, s, n);
        if (Jn(g, A), u === "out-in")
          return s.isLeaving = !0, A.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, Bn(o);
        u === "in-out" && a.type !== Re && (A.delayLeave = (F, S, j) => {
          const U = Qr(s, g);
          U[String(g.key)] = g, F._leaveCb = () => {
            S(), F._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = j;
        });
      }
      return o;
    };
  }
}, Uo = Ho;
function Qr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function zn(e, t, n, s) {
  const { appear: r, mode: l, persisted: o = !1, onBeforeEnter: i, onEnter: u, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: h, onLeave: g, onAfterLeave: _, onLeaveCancelled: C, onBeforeAppear: A, onAppear: F, onAfterAppear: S, onAppearCancelled: j } = t, U = String(e.key), B = Qr(n, e), D = (O, M) => {
    O && Ie(O, s, 9, M);
  }, q = (O, M) => {
    const H = M[1];
    D(O, M), N(O) ? O.every((J) => J.length <= 1) && H() : O.length <= 1 && H();
  }, re = {
    mode: l,
    persisted: o,
    beforeEnter(O) {
      let M = i;
      if (!n.isMounted)
        if (r)
          M = A || i;
        else
          return;
      O._leaveCb && O._leaveCb(!0);
      const H = B[U];
      H && it(e, H) && H.el._leaveCb && H.el._leaveCb(), D(M, [O]);
    },
    enter(O) {
      let M = u, H = a, J = d;
      if (!n.isMounted)
        if (r)
          M = F || u, H = S || a, J = j || d;
        else
          return;
      let we = !1;
      const ke = O._enterCb = (pt) => {
        we || (we = !0, pt ? D(J, [O]) : D(H, [O]), re.delayedLeave && re.delayedLeave(), O._enterCb = void 0);
      };
      M ? q(M, [O, ke]) : ke();
    },
    leave(O, M) {
      const H = String(e.key);
      if (O._enterCb && O._enterCb(!0), n.isUnmounting)
        return M();
      D(h, [O]);
      let J = !1;
      const we = O._leaveCb = (ke) => {
        J || (J = !0, M(), ke ? D(C, [O]) : D(_, [O]), O._leaveCb = void 0, B[H] === e && delete B[H]);
      };
      B[H] = e, g ? q(g, [O, we]) : we();
    },
    clone(O) {
      return zn(O, t, n, s);
    }
  };
  return re;
}
function Bn(e) {
  if (In(e))
    return e = Ge(e), e.children = null, e;
}
function Vs(e) {
  return In(e) ? e.children ? e.children[0] : void 0 : e;
}
function Jn(e, t) {
  e.shapeFlag & 6 && e.component ? Jn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Yr(e, t = !1, n) {
  let s = [], r = 0;
  for (let l = 0; l < e.length; l++) {
    let o = e[l];
    const i = n == null ? o.key : String(n) + String(o.key != null ? o.key : l);
    o.type === fe ? (o.patchFlag & 128 && r++, s = s.concat(Yr(o.children, t, i))) : (t || o.type !== Re) && s.push(i != null ? Ge(o, { key: i }) : o);
  }
  if (r > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
const fn = (e) => !!e.type.__asyncLoader, In = (e) => e.type.__isKeepAlive;
function $o(e, t) {
  Xr(e, "a", t);
}
function Do(e, t) {
  Xr(e, "da", t);
}
function Xr(e, t, n = de) {
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
      In(r.parent.vnode) && Ko(s, t, n, r), r = r.parent;
  }
}
function Ko(e, t, n, s) {
  const r = kn(t, e, s, !0);
  Fn(() => {
    fs(s[t], r);
  }, n);
}
function kn(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Mt(), Ot(n);
      const i = Ie(t, n, e, o);
      return ft(), Nt(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const qe = (e) => (t, n = de) => (!Qt || e === "sp") && kn(e, t, n), Vo = qe("bm"), Xt = qe("m"), Wo = qe("bu"), qo = qe("u"), Zr = qe("bum"), Fn = qe("um"), zo = qe("sp"), Jo = qe("rtg"), Qo = qe("rtc");
function Yo(e, t = de) {
  kn("ec", e, t);
}
function yn(e, t) {
  const n = Se;
  if (n === null)
    return e;
  const s = Nn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, u, a = G] = t[l];
    $(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ut(i), r.push({
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
    u && (Mt(), Ie(u, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Nt());
  }
}
const Xo = Symbol();
function dn(e, t, n, s) {
  let r;
  const l = n && n[s];
  if (N(e) || ce(e)) {
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
      for (let i = 0, u = o.length; i < u; i++) {
        const a = o[i];
        r[i] = t(e[a], a, i, l && l[i]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
const Qn = (e) => e ? ul(e) ? Nn(e) || e.proxy : Qn(e.parent) : null, _n = /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
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
  $nextTick: (e) => e.n || (e.n = Vt.bind(e.proxy)),
  $watch: (e) => jo.bind(e)
}), Zo = {
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
        Yn && (o[t] = 0);
      }
    }
    const d = _n[t];
    let h, g;
    if (d)
      return t === "$attrs" && Ee(e, "get", t), d(e);
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
    return !!n[o] || e !== G && K(e, o) || t !== G && K(t, o) || (i = l[0]) && K(i, o) || K(s, o) || K(_n, o) || K(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Yn = !0;
function Go(e) {
  const t = Cs(e), n = e.proxy, s = e.ctx;
  Yn = !1, t.beforeCreate && Ws(t.beforeCreate, e, "bc");
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
    deactivated: F,
    beforeDestroy: S,
    beforeUnmount: j,
    destroyed: U,
    unmounted: B,
    render: D,
    renderTracked: q,
    renderTriggered: re,
    errorCaptured: O,
    serverPrefetch: M,
    expose: H,
    inheritAttrs: J,
    components: we,
    directives: ke,
    filters: pt
  } = t;
  if (a && ei(a, s, null, e.appContext.config.unwrapInjectedRef), o)
    for (const ee in o) {
      const Q = o[ee];
      $(Q) && (s[ee] = Q.bind(n));
    }
  if (r) {
    const ee = r.call(n, n);
    se(ee) && (e.data = ys(ee));
  }
  if (Yn = !0, l)
    for (const ee in l) {
      const Q = l[ee], Oe = $(Q) ? Q.bind(n, n) : $(Q.get) ? Q.get.bind(n, n) : Le, L = !$(Q) && $(Q.set) ? Q.set.bind(n) : Le, P = Ne({
        get: Oe,
        set: L
      });
      Object.defineProperty(s, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => P.value,
        set: (ue) => P.value = ue
      });
    }
  if (i)
    for (const ee in i)
      Gr(i[ee], s, n, ee);
  if (u) {
    const ee = $(u) ? u.call(n) : u;
    Reflect.ownKeys(ee).forEach((Q) => {
      Lo(Q, ee[Q]);
    });
  }
  d && Ws(d, e, "c");
  function he(ee, Q) {
    N(Q) ? Q.forEach((Oe) => ee(Oe.bind(n))) : Q && ee(Q.bind(n));
  }
  if (he(Vo, h), he(Xt, g), he(Wo, _), he(qo, C), he($o, A), he(Do, F), he(Yo, O), he(Qo, q), he(Jo, re), he(Zr, j), he(Fn, B), he(zo, M), N(H))
    if (H.length) {
      const ee = e.exposed || (e.exposed = {});
      H.forEach((Q) => {
        Object.defineProperty(ee, Q, {
          get: () => n[Q],
          set: (Oe) => n[Q] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  D && e.render === Le && (e.render = D), J != null && (e.inheritAttrs = J), we && (e.components = we), ke && (e.directives = ke);
}
function ei(e, t, n = Le, s = !1) {
  N(e) && (e = Xn(e));
  for (const r in e) {
    const l = e[r];
    let o;
    se(l) ? "default" in l ? o = jn(l.from || r, l.default, !0) : o = jn(l.from || r) : o = jn(l), ae(o) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Ws(e, t, n) {
  Ie(N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gr(e, t, n, s) {
  const r = s.includes(".") ? Jr(n, s) : () => n[s];
  if (ce(e)) {
    const l = t[e];
    $(l) && Xe(r, l);
  } else if ($(e))
    Xe(r, e.bind(n));
  else if (se(e))
    if (N(e))
      e.forEach((l) => Gr(l, t, n, s));
    else {
      const l = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(l) && Xe(r, l, e);
    }
}
function Cs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: l, config: { optionMergeStrategies: o } } = e.appContext, i = l.get(t);
  let u;
  return i ? u = i : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((a) => bn(u, a, o, !0)), bn(u, t, o)), se(t) && l.set(t, u), u;
}
function bn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && bn(e, l, n, !0), r && r.forEach((o) => bn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = ti[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const ti = {
  data: qs,
  props: lt,
  emits: lt,
  methods: lt,
  computed: lt,
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
  components: lt,
  directives: lt,
  watch: si,
  provide: qs,
  inject: ni
};
function qs(e, t) {
  return t ? e ? function() {
    return ge($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function ni(e, t) {
  return lt(Xn(e), Xn(t));
}
function Xn(e) {
  if (N(e)) {
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
function lt(e, t) {
  return e ? ge(ge(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function si(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ge(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = me(e[s], t[s]);
  return n;
}
function ri(e, t, n, s = !1) {
  const r = {}, l = {};
  pn(l, Mn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), el(e, t, r, l);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : go(r) : e.type.props ? e.props = r : e.props = l, e.attrs = l;
}
function li(e, t, n, s) {
  const { props: r, attrs: l, vnode: { patchFlag: o } } = e, i = z(r), [u] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let g = d[h];
        if (Tn(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (u)
          if (K(l, g))
            _ !== l[g] && (l[g] = _, a = !0);
          else {
            const C = Ct(g);
            r[C] = Zn(u, i, C, _, e, !1);
          }
        else
          _ !== l[g] && (l[g] = _, a = !0);
      }
    }
  } else {
    el(e, t, r, l) && (a = !0);
    let d;
    for (const h in i)
      (!t || !K(t, h) && ((d = Ft(h)) === h || !K(t, d))) && (u ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = Zn(u, i, h, void 0, e, !0)) : delete r[h]);
    if (l !== i)
      for (const h in l)
        (!t || !K(t, h) && !0) && (delete l[h], a = !0);
  }
  a && We(e, "set", "$attrs");
}
function el(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let u in t) {
      if (un(u))
        continue;
      const a = t[u];
      let d;
      r && K(r, d = Ct(u)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Tn(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, o = !0);
    }
  if (l) {
    const u = z(n), a = i || G;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
      n[h] = Zn(r, u, h, a[h], e, !K(a, h));
    }
  }
  return o;
}
function Zn(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = K(o, "default");
    if (i && s === void 0) {
      const u = o.default;
      if (o.type !== Function && $(u)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (Ot(r), s = a[n] = u.call(null, t), ft());
      } else
        s = u;
    }
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === Ft(n)) && (s = !0));
  }
  return s;
}
function tl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let u = !1;
  if (!$(e)) {
    const d = (h) => {
      u = !0;
      const [g, _] = tl(h, t, !0);
      ge(o, g), _ && i.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !u)
    return se(e) && s.set(e, _t), _t;
  if (N(l))
    for (let d = 0; d < l.length; d++) {
      const h = Ct(l[d]);
      zs(h) && (o[h] = G);
    }
  else if (l)
    for (const d in l) {
      const h = Ct(d);
      if (zs(h)) {
        const g = l[d], _ = o[h] = N(g) || $(g) ? { type: g } : g;
        if (_) {
          const C = Ys(Boolean, _.type), A = Ys(String, _.type);
          _[0] = C > -1, _[1] = A < 0 || C < A, (C > -1 || K(_, "default")) && i.push(h);
        }
      }
    }
  const a = [o, i];
  return se(e) && s.set(e, a), a;
}
function zs(e) {
  return e[0] !== "$";
}
function Js(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Qs(e, t) {
  return Js(e) === Js(t);
}
function Ys(e, t) {
  return N(t) ? t.findIndex((n) => Qs(n, e)) : $(t) && Qs(t, e) ? 0 : -1;
}
const nl = (e) => e[0] === "_" || e === "$stable", Es = (e) => N(e) ? e.map(Ue) : [Ue(e)], oi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Io((...r) => Es(t(...r)), n);
  return s._c = !1, s;
}, sl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (nl(r))
      continue;
    const l = e[r];
    if ($(l))
      t[r] = oi(r, l, s);
    else if (l != null) {
      const o = Es(l);
      t[r] = () => o;
    }
  }
}, rl = (e, t) => {
  const n = Es(t);
  e.slots.default = () => n;
}, ii = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = z(t), pn(t, "_", n)) : sl(t, e.slots = {});
  } else
    e.slots = {}, t && rl(e, t);
  pn(e.slots, Mn, 1);
}, ci = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = G;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (ge(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, sl(t, r)), o = t;
  } else
    t && (rl(e, t), o = { default: 1 });
  if (l)
    for (const i in r)
      !nl(i) && !(i in o) && delete r[i];
};
function ll() {
  return {
    app: null,
    config: {
      isNativeTag: Nl,
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
let ui = 0;
function ai(e, t) {
  return function(s, r = null) {
    $(s) || (s = Object.assign({}, s)), r != null && !se(r) && (r = null);
    const l = ll(), o = /* @__PURE__ */ new Set();
    let i = !1;
    const u = l.app = {
      _uid: ui++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: Ii,
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
          const g = Ve(s, r);
          return g.appContext = l, d && t ? t(g, a) : e(g, a, h), i = !0, u._container = a, a.__vue_app__ = u, Nn(g.component) || g.component.proxy;
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
function Gn(e, t, n, s, r = !1) {
  if (N(e)) {
    e.forEach((g, _) => Gn(g, t && (N(t) ? t[_] : t), n, s, r));
    return;
  }
  if (fn(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Nn(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: u } = e, a = t && t.r, d = i.refs === G ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== u && (ce(a) ? (d[a] = null, K(h, a) && (h[a] = null)) : ae(a) && (a.value = null)), $(u))
    Ye(u, i, 12, [o, d]);
  else {
    const g = ce(u), _ = ae(u);
    if (g || _) {
      const C = () => {
        if (e.f) {
          const A = g ? d[u] : u.value;
          r ? N(A) && fs(A, l) : N(A) ? A.includes(l) || A.push(l) : g ? (d[u] = [l], K(h, u) && (h[u] = d[u])) : (u.value = [l], e.k && (d[e.k] = u.value));
        } else
          g ? (d[u] = o, K(h, u) && (h[u] = o)) : _ && (u.value = o, e.k && (d[e.k] = o));
      };
      o ? (C.id = -1, be(C, n)) : C();
    }
  }
}
const be = Po;
function fi(e) {
  return di(e);
}
function di(e, t) {
  const n = Bl();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: l, createElement: o, createText: i, createComment: u, setText: a, setElementText: d, parentNode: h, nextSibling: g, setScopeId: _ = Le, cloneNode: C, insertStaticContent: A } = e, F = (c, f, p, v = null, m = null, w = null, E = !1, b = null, x = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !it(c, f) && (v = tt(c), ve(c, m, w, !0), c = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: I, shapeFlag: T } = f;
    switch (y) {
      case Ts:
        S(c, f, p, v);
        break;
      case Re:
        j(c, f, p, v);
        break;
      case Hn:
        c == null && U(f, p, v, E);
        break;
      case fe:
        ke(c, f, p, v, m, w, E, b, x);
        break;
      default:
        T & 1 ? q(c, f, p, v, m, w, E, b, x) : T & 6 ? pt(c, f, p, v, m, w, E, b, x) : (T & 64 || T & 128) && y.process(c, f, p, v, m, w, E, b, x, mt);
    }
    I != null && m && Gn(I, c && c.ref, w, f || c, !f);
  }, S = (c, f, p, v) => {
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
    E = E || f.type === "svg", c == null ? re(f, p, v, m, w, E, b, x) : H(c, f, m, w, E, b, x);
  }, re = (c, f, p, v, m, w, E, b) => {
    let x, y;
    const { type: I, props: T, shapeFlag: k, transition: R, patchFlag: V, dirs: Y } = c;
    if (c.el && C !== void 0 && V === -1)
      x = c.el = C(c.el);
    else {
      if (x = c.el = o(c.type, w, T && T.is, T), k & 8 ? d(x, c.children) : k & 16 && M(c.children, x, null, v, m, w && I !== "foreignObject", E, b), Y && nt(c, null, v, "created"), T) {
        for (const te in T)
          te !== "value" && !un(te) && l(x, te, null, T[te], w, c.children, v, m, _e);
        "value" in T && l(x, "value", null, T.value), (y = T.onVnodeBeforeMount) && Be(y, v, c);
      }
      O(x, c, c.scopeId, E, v);
    }
    Y && nt(c, null, v, "beforeMount");
    const X = (!m || m && !m.pendingBranch) && R && !R.persisted;
    X && R.beforeEnter(x), s(x, f, p), ((y = T && T.onVnodeMounted) || X || Y) && be(() => {
      y && Be(y, v, c), X && R.enter(x), Y && nt(c, null, v, "mounted");
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
  }, M = (c, f, p, v, m, w, E, b, x = 0) => {
    for (let y = x; y < c.length; y++) {
      const I = c[y] = b ? Je(c[y]) : Ue(c[y]);
      F(null, I, f, p, v, m, w, E, b);
    }
  }, H = (c, f, p, v, m, w, E) => {
    const b = f.el = c.el;
    let { patchFlag: x, dynamicChildren: y, dirs: I } = f;
    x |= c.patchFlag & 16;
    const T = c.props || G, k = f.props || G;
    let R;
    p && st(p, !1), (R = k.onVnodeBeforeUpdate) && Be(R, p, f, c), I && nt(f, c, p, "beforeUpdate"), p && st(p, !0);
    const V = m && f.type !== "foreignObject";
    if (y ? J(c.dynamicChildren, y, b, p, v, V, w) : E || Oe(c, f, b, null, p, v, V, w, !1), x > 0) {
      if (x & 16)
        we(b, f, T, k, p, v, m);
      else if (x & 2 && T.class !== k.class && l(b, "class", null, k.class, m), x & 4 && l(b, "style", T.style, k.style, m), x & 8) {
        const Y = f.dynamicProps;
        for (let X = 0; X < Y.length; X++) {
          const te = Y[X], Fe = T[te], vt = k[te];
          (vt !== Fe || te === "value") && l(b, te, Fe, vt, m, c.children, p, v, _e);
        }
      }
      x & 1 && c.children !== f.children && d(b, f.children);
    } else
      !E && y == null && we(b, f, T, k, p, v, m);
    ((R = k.onVnodeUpdated) || I) && be(() => {
      R && Be(R, p, f, c), I && nt(f, c, p, "updated");
    }, v);
  }, J = (c, f, p, v, m, w, E) => {
    for (let b = 0; b < f.length; b++) {
      const x = c[b], y = f[b], I = x.el && (x.type === fe || !it(x, y) || x.shapeFlag & 70) ? h(x.el) : p;
      F(x, y, I, null, v, m, w, E, !0);
    }
  }, we = (c, f, p, v, m, w, E) => {
    if (p !== v) {
      for (const b in v) {
        if (un(b))
          continue;
        const x = v[b], y = p[b];
        x !== y && b !== "value" && l(c, b, y, x, E, f.children, m, w, _e);
      }
      if (p !== G)
        for (const b in p)
          !un(b) && !(b in v) && l(c, b, p[b], null, E, f.children, m, w, _e);
      "value" in v && l(c, "value", p.value, v.value);
    }
  }, ke = (c, f, p, v, m, w, E, b, x) => {
    const y = f.el = c ? c.el : i(""), I = f.anchor = c ? c.anchor : i("");
    let { patchFlag: T, dynamicChildren: k, slotScopeIds: R } = f;
    R && (b = b ? b.concat(R) : R), c == null ? (s(y, p, v), s(I, p, v), M(f.children, p, I, m, w, E, b, x)) : T > 0 && T & 64 && k && c.dynamicChildren ? (J(c.dynamicChildren, k, p, m, w, E, b), (f.key != null || m && f === m.subTree) && Os(c, f, !0)) : Oe(c, f, p, I, m, w, E, b, x);
  }, pt = (c, f, p, v, m, w, E, b, x) => {
    f.slotScopeIds = b, c == null ? f.shapeFlag & 512 ? m.ctx.activate(f, p, v, E, x) : St(f, p, v, m, w, E, x) : he(c, f, x);
  }, St = (c, f, p, v, m, w, E) => {
    const b = c.component = xi(c, v, m);
    if (In(c) && (b.ctx.renderer = mt), Ci(b), b.asyncDep) {
      if (m && m.registerDep(b, ee), !c.el) {
        const x = b.subTree = Ve(Re);
        j(null, x, f, p);
      }
      return;
    }
    ee(b, c, f, p, m, w, E);
  }, he = (c, f, p) => {
    const v = f.component = c.component;
    if (Mo(c, f, p))
      if (v.asyncDep && !v.asyncResolved) {
        Q(v, f, p);
        return;
      } else
        v.next = f, Eo(v.update), v.update();
    else
      f.el = c.el, v.vnode = f;
  }, ee = (c, f, p, v, m, w, E) => {
    const b = () => {
      if (c.isMounted) {
        let { next: I, bu: T, u: k, parent: R, vnode: V } = c, Y = I, X;
        st(c, !1), I ? (I.el = V.el, Q(c, I, E)) : I = V, T && an(T), (X = I.props && I.props.onVnodeBeforeUpdate) && Be(X, R, I, V), st(c, !0);
        const te = Rn(c), Fe = c.subTree;
        c.subTree = te, F(
          Fe,
          te,
          h(Fe.el),
          tt(Fe),
          c,
          m,
          w
        ), I.el = te.el, Y === null && No(c, te.el), k && be(k, m), (X = I.props && I.props.onVnodeUpdated) && be(() => Be(X, R, I, V), m);
      } else {
        let I;
        const { el: T, props: k } = f, { bm: R, m: V, parent: Y } = c, X = fn(f);
        if (st(c, !1), R && an(R), !X && (I = k && k.onVnodeBeforeMount) && Be(I, Y, f), st(c, !0), T && Pn) {
          const te = () => {
            c.subTree = Rn(c), Pn(T, c.subTree, c, m, null);
          };
          X ? f.type.__asyncLoader().then(
            () => !c.isUnmounted && te()
          ) : te();
        } else {
          const te = c.subTree = Rn(c);
          F(null, te, p, v, c, m, w), f.el = te.el;
        }
        if (V && be(V, m), !X && (I = k && k.onVnodeMounted)) {
          const te = f;
          be(() => Be(I, Y, te), m);
        }
        (f.shapeFlag & 256 || Y && fn(Y.vnode) && Y.vnode.shapeFlag & 256) && c.a && be(c.a, m), c.isMounted = !0, f = p = v = null;
      }
    }, x = c.effect = new ps(
      b,
      () => xs(y),
      c.scope
    ), y = c.update = () => x.run();
    y.id = c.uid, st(c, !0), y();
  }, Q = (c, f, p) => {
    f.component = c;
    const v = c.vnode.props;
    c.vnode = f, c.next = null, li(c, f.props, v, p), ci(c, f.children, p), Mt(), $s(), Nt();
  }, Oe = (c, f, p, v, m, w, E, b, x = !1) => {
    const y = c && c.children, I = c ? c.shapeFlag : 0, T = f.children, { patchFlag: k, shapeFlag: R } = f;
    if (k > 0) {
      if (k & 128) {
        P(y, T, p, v, m, w, E, b, x);
        return;
      } else if (k & 256) {
        L(y, T, p, v, m, w, E, b, x);
        return;
      }
    }
    R & 8 ? (I & 16 && _e(y, m, w), T !== y && d(p, T)) : I & 16 ? R & 16 ? P(y, T, p, v, m, w, E, b, x) : _e(y, m, w, !0) : (I & 8 && d(p, ""), R & 16 && M(T, p, v, m, w, E, b, x));
  }, L = (c, f, p, v, m, w, E, b, x) => {
    c = c || _t, f = f || _t;
    const y = c.length, I = f.length, T = Math.min(y, I);
    let k;
    for (k = 0; k < T; k++) {
      const R = f[k] = x ? Je(f[k]) : Ue(f[k]);
      F(c[k], R, p, null, m, w, E, b, x);
    }
    y > I ? _e(c, m, w, !0, !1, T) : M(f, p, v, m, w, E, b, x, T);
  }, P = (c, f, p, v, m, w, E, b, x) => {
    let y = 0;
    const I = f.length;
    let T = c.length - 1, k = I - 1;
    for (; y <= T && y <= k; ) {
      const R = c[y], V = f[y] = x ? Je(f[y]) : Ue(f[y]);
      if (it(R, V))
        F(R, V, p, null, m, w, E, b, x);
      else
        break;
      y++;
    }
    for (; y <= T && y <= k; ) {
      const R = c[T], V = f[k] = x ? Je(f[k]) : Ue(f[k]);
      if (it(R, V))
        F(R, V, p, null, m, w, E, b, x);
      else
        break;
      T--, k--;
    }
    if (y > T) {
      if (y <= k) {
        const R = k + 1, V = R < I ? f[R].el : v;
        for (; y <= k; )
          F(null, f[y] = x ? Je(f[y]) : Ue(f[y]), p, V, m, w, E, b, x), y++;
      }
    } else if (y > k)
      for (; y <= T; )
        ve(c[y], m, w, !0), y++;
    else {
      const R = y, V = y, Y = /* @__PURE__ */ new Map();
      for (y = V; y <= k; y++) {
        const xe = f[y] = x ? Je(f[y]) : Ue(f[y]);
        xe.key != null && Y.set(xe.key, y);
      }
      let X, te = 0;
      const Fe = k - V + 1;
      let vt = !1, ks = 0;
      const Pt = new Array(Fe);
      for (y = 0; y < Fe; y++)
        Pt[y] = 0;
      for (y = R; y <= T; y++) {
        const xe = c[y];
        if (te >= Fe) {
          ve(xe, m, w, !0);
          continue;
        }
        let je;
        if (xe.key != null)
          je = Y.get(xe.key);
        else
          for (X = V; X <= k; X++)
            if (Pt[X - V] === 0 && it(xe, f[X])) {
              je = X;
              break;
            }
        je === void 0 ? ve(xe, m, w, !0) : (Pt[je - V] = y + 1, je >= ks ? ks = je : vt = !0, F(xe, f[je], p, null, m, w, E, b, x), te++);
      }
      const Fs = vt ? hi(Pt) : _t;
      for (X = Fs.length - 1, y = Fe - 1; y >= 0; y--) {
        const xe = V + y, je = f[xe], Ms = xe + 1 < I ? f[xe + 1].el : v;
        Pt[y] === 0 ? F(null, je, p, Ms, m, w, E, b, x) : vt && (X < 0 || y !== Fs[X] ? ue(je, p, Ms, 2) : X--);
      }
    }
  }, ue = (c, f, p, v, m = null) => {
    const { el: w, type: E, transition: b, children: x, shapeFlag: y } = c;
    if (y & 6) {
      ue(c.component.subTree, f, p, v);
      return;
    }
    if (y & 128) {
      c.suspense.move(f, p, v);
      return;
    }
    if (y & 64) {
      E.move(c, f, p, mt);
      return;
    }
    if (E === fe) {
      s(w, f, p);
      for (let T = 0; T < x.length; T++)
        ue(x[T], f, p, v);
      s(c.anchor, f, p);
      return;
    }
    if (E === Hn) {
      B(c, f, p);
      return;
    }
    if (v !== 2 && y & 1 && b)
      if (v === 0)
        b.beforeEnter(w), s(w, f, p), be(() => b.enter(w), m);
      else {
        const { leave: T, delayLeave: k, afterLeave: R } = b, V = () => s(w, f, p), Y = () => {
          T(w, () => {
            V(), R && R();
          });
        };
        k ? k(w, V, Y) : Y();
      }
    else
      s(w, f, p);
  }, ve = (c, f, p, v = !1, m = !1) => {
    const { type: w, props: E, ref: b, children: x, dynamicChildren: y, shapeFlag: I, patchFlag: T, dirs: k } = c;
    if (b != null && Gn(b, null, p, c, !0), I & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const R = I & 1 && k, V = !fn(c);
    let Y;
    if (V && (Y = E && E.onVnodeBeforeUnmount) && Be(Y, f, c), I & 6)
      gt(c.component, p, v);
    else {
      if (I & 128) {
        c.suspense.unmount(p, v);
        return;
      }
      R && nt(c, null, f, "beforeUnmount"), I & 64 ? c.type.remove(c, f, p, m, mt, v) : y && (w !== fe || T > 0 && T & 64) ? _e(y, f, p, !1, !0) : (w === fe && T & 384 || !m && I & 16) && _e(x, f, p), v && oe(c);
    }
    (V && (Y = E && E.onVnodeUnmounted) || R) && be(() => {
      Y && Be(Y, f, c), R && nt(c, null, f, "unmounted");
    }, p);
  }, oe = (c) => {
    const { type: f, el: p, anchor: v, transition: m } = c;
    if (f === fe) {
      ye(p, v);
      return;
    }
    if (f === Hn) {
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
  }, ye = (c, f) => {
    let p;
    for (; c !== f; )
      p = g(c), r(c), c = p;
    r(f);
  }, gt = (c, f, p) => {
    const { bum: v, scope: m, update: w, subTree: E, um: b } = c;
    v && an(v), m.stop(), w && (w.active = !1, ve(E, c, f, p)), b && be(b, f), be(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, _e = (c, f, p, v = !1, m = !1, w = 0) => {
    for (let E = w; E < c.length; E++)
      ve(c[E], f, p, v, m);
  }, tt = (c) => c.shapeFlag & 6 ? tt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : g(c.anchor || c.el), Gt = (c, f, p) => {
    c == null ? f._vnode && ve(f._vnode, null, null, !0) : F(f._vnode || null, c, f, null, null, null, p), $s(), Vr(), f._vnode = c;
  }, mt = {
    p: F,
    um: ve,
    m: ue,
    r: oe,
    mt: St,
    mc: M,
    pc: Oe,
    pbc: J,
    n: tt,
    o: e
  };
  let Sn, Pn;
  return t && ([Sn, Pn] = t(mt)), {
    render: Gt,
    hydrate: Sn,
    createApp: ai(Gt, Sn)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Os(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (N(s) && N(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = Je(r[l]), i.el = o.el), n || Os(o, i));
    }
}
function hi(e) {
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
const pi = (e) => e.__isTeleport, Bt = (e) => e && (e.disabled || e.disabled === ""), Xs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, es = (e, t) => {
  const n = e && e.to;
  return ce(n) ? t ? t(n) : null : n;
}, gi = {
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, u, a) {
    const { mc: d, pc: h, pbc: g, o: { insert: _, querySelector: C, createText: A, createComment: F } } = a, S = Bt(t.props);
    let { shapeFlag: j, children: U, dynamicChildren: B } = t;
    if (e == null) {
      const D = t.el = A(""), q = t.anchor = A("");
      _(D, n, s), _(q, n, s);
      const re = t.target = es(t.props, C), O = t.targetAnchor = A("");
      re && (_(O, re), o = o || Xs(re));
      const M = (H, J) => {
        j & 16 && d(U, H, J, r, l, o, i, u);
      };
      S ? M(n, q) : re && M(re, O);
    } else {
      t.el = e.el;
      const D = t.anchor = e.anchor, q = t.target = e.target, re = t.targetAnchor = e.targetAnchor, O = Bt(e.props), M = O ? n : q, H = O ? D : re;
      if (o = o || Xs(q), B ? (g(e.dynamicChildren, B, M, r, l, o, i), Os(e, t, !0)) : u || h(e, t, M, H, r, l, o, i, !1), S)
        O || on(t, n, D, a, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const J = t.target = es(t.props, C);
        J && on(t, J, null, a, 0);
      } else
        O && on(t, q, re, a, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: u, anchor: a, targetAnchor: d, target: h, props: g } = e;
    if (h && l(d), (o || !Bt(g)) && (l(a), i & 16))
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        r(C, t, n, !0, !!C.dynamicChildren);
      }
  },
  move: on,
  hydrate: mi
};
function on(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: u, children: a, props: d } = e, h = l === 2;
  if (h && s(o, t, n), (!h || Bt(d)) && u & 16)
    for (let g = 0; g < a.length; g++)
      r(a[g], t, n, 2);
  h && s(i, t, n);
}
function mi(e, t, n, s, r, l, { o: { nextSibling: o, parentNode: i, querySelector: u } }, a) {
  const d = t.target = es(t.props, u);
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Bt(t.props))
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
const ts = gi, fe = Symbol(void 0), Ts = Symbol(void 0), Re = Symbol(void 0), Hn = Symbol(void 0), Ht = [];
let Pe = null;
function Z(e = !1) {
  Ht.push(Pe = e ? null : []);
}
function vi() {
  Ht.pop(), Pe = Ht[Ht.length - 1] || null;
}
let zt = 1;
function Zs(e) {
  zt += e;
}
function ol(e) {
  return e.dynamicChildren = zt > 0 ? Pe || _t : null, vi(), zt > 0 && Pe && Pe.push(e), e;
}
function le(e, t, n, s, r, l) {
  return ol(ie(e, t, n, s, r, l, !0));
}
function wn(e, t, n, s, r) {
  return ol(Ve(e, t, n, s, r, !0));
}
function yi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mn = "__vInternal", il = ({ key: e }) => e != null ? e : null, hn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ce(e) || ae(e) || $(e) ? { i: Se, r: e, k: t, f: !!n } : e : null;
function ie(e, t = null, n = null, s = 0, r = null, l = e === fe ? 0 : 1, o = !1, i = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && il(t),
    ref: t && hn(t),
    scopeId: zr,
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
  return i ? (Is(u, n), l & 128 && e.normalize(u)) : n && (u.shapeFlag |= ce(n) ? 8 : 16), zt > 0 && !o && Pe && (u.patchFlag > 0 || l & 6) && u.patchFlag !== 32 && Pe.push(u), u;
}
const Ve = _i;
function _i(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === Xo) && (e = Re), yi(e)) {
    const i = Ge(e, t, !0);
    return n && Is(i, n), zt > 0 && !l && Pe && (i.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = i : Pe.push(i)), i.patchFlag |= -2, i;
  }
  if (Ai(e) && (e = e.__vccOpts), t) {
    t = As(t);
    let { class: i, style: u } = t;
    i && !ce(i) && (t.class = It(i)), se(u) && (Lr(u) && !N(u) && (u = ge({}, u)), t.style = At(u));
  }
  const o = ce(e) ? 1 : So(e) ? 128 : pi(e) ? 64 : se(e) ? 4 : $(e) ? 2 : 0;
  return ie(e, t, n, s, r, o, l, !0);
}
function As(e) {
  return e ? Lr(e) || Mn in e ? ge({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: l, children: o } = e, i = t ? Jt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && il(i),
    ref: t && t.ref ? n && r ? N(r) ? r.concat(hn(t)) : [r, hn(t)] : hn(t) : r,
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
function ns(e = " ", t = 0) {
  return Ve(Ts, null, e, t);
}
function Ae(e = "", t = !1) {
  return t ? (Z(), wn(Re, null, e)) : Ve(Re, null, e);
}
function Ue(e) {
  return e == null || typeof e == "boolean" ? Ve(Re) : N(e) ? Ve(
    fe,
    null,
    e.slice()
  ) : typeof e == "object" ? Je(e) : Ve(Ts, null, String(e));
}
function Je(e) {
  return e.el === null || e.memo ? e : Ge(e);
}
function Is(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (N(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Is(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Mn in t) ? t._ctx = Se : r === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Jt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = It([t.class, s.class]));
      else if (r === "style")
        t.style = At([t.style, s.style]);
      else if (xn(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(N(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Be(e, t, n, s = null) {
  Ie(e, t, 7, [
    n,
    s
  ]);
}
const bi = ll();
let wi = 0;
function xi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || bi, l = {
    uid: wi++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Hl(!0),
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
    propsOptions: tl(s, r),
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Ao.bind(null, l), e.ce && e.ce(l), l;
}
let de = null;
const cl = () => de || Se, Ot = (e) => {
  de = e, e.scope.on();
}, ft = () => {
  de && de.scope.off(), de = null;
};
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function Ci(e, t = !1) {
  Qt = t;
  const { props: n, children: s } = e.vnode, r = ul(e);
  ri(e, n, r, t), ii(e, s);
  const l = r ? Ei(e, t) : void 0;
  return Qt = !1, l;
}
function Ei(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Rr(new Proxy(e.ctx, Zo));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ti(e) : null;
    Ot(e), Mt();
    const l = Ye(s, e, 0, [e.props, r]);
    if (Nt(), ft(), br(l)) {
      if (l.then(ft, ft), t)
        return l.then((o) => {
          Gs(e, o, t);
        }).catch((o) => {
          On(o, e, 0);
        });
      e.asyncDep = l;
    } else
      Gs(e, l, t);
  } else
    al(e, t);
}
function Gs(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Ur(t)), al(e, n);
}
let er;
function al(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && er && !s.render) {
      const r = s.template || Cs(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: u } = s, a = ge(ge({
          isCustomElement: l,
          delimiters: i
        }, o), u);
        s.render = er(r, a);
      }
    }
    e.render = s.render || Le;
  }
  Ot(e), Mt(), Go(e), Nt(), ft();
}
function Oi(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Ee(e, "get", "$attrs"), t[n];
    }
  });
}
function Ti(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Oi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Nn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ur(Rr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in _n)
          return _n[n](e);
      }
    }));
}
function Ai(e) {
  return $(e) && "__vccOpts" in e;
}
const Ne = (e, t) => wo(e, t, Qt), Ii = "3.2.39", ki = "http://www.w3.org/2000/svg", ct = typeof document < "u" ? document : null, tr = ct && /* @__PURE__ */ ct.createElement("template"), Fi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ct.createElementNS(ki, e) : ct.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
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
      tr.innerHTML = s ? `<svg>${e}</svg>` : e;
      const i = tr.content;
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
function Mi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Ni(e, t, n) {
  const s = e.style, r = ce(n);
  if (n && !r) {
    for (const l in n)
      ss(s, l, n[l]);
    if (t && !ce(t))
      for (const l in t)
        n[l] == null && ss(s, l, "");
  } else {
    const l = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = l);
  }
}
const nr = /\s*!important$/;
function ss(e, t, n) {
  if (N(n))
    n.forEach((s) => ss(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Si(e, t);
    nr.test(n) ? e.setProperty(Ft(s), n.replace(nr, ""), "important") : e[s] = n;
  }
}
const sr = ["Webkit", "Moz", "ms"], Un = {};
function Si(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let s = Ct(t);
  if (s !== "filter" && s in e)
    return Un[t] = s;
  s = Cr(s);
  for (let r = 0; r < sr.length; r++) {
    const l = sr[r] + s;
    if (l in e)
      return Un[t] = l;
  }
  return t;
}
const rr = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(rr, t.slice(6, t.length)) : e.setAttributeNS(rr, t, n);
  else {
    const l = Al(t);
    n == null || l && !vr(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : n);
  }
}
function Li(e, t, n, s, r, l, o) {
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
    u === "boolean" ? n = vr(n) : n == null && u === "string" ? (n = "", i = !0) : u === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(t);
}
const [fl, Ri] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let rs = 0;
const ji = /* @__PURE__ */ Promise.resolve(), Bi = () => {
  rs = 0;
}, Hi = () => rs || (ji.then(Bi), rs = fl());
function Ke(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ui(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function $i(e, t, n, s, r = null) {
  const l = e._vei || (e._vei = {}), o = l[t];
  if (s && o)
    o.value = s;
  else {
    const [i, u] = Di(t);
    if (s) {
      const a = l[t] = Ki(s, r);
      Ke(e, i, a, u);
    } else
      o && (Ui(e, i, o, u), l[t] = void 0);
  }
}
const lr = /(?:Once|Passive|Capture)$/;
function Di(e) {
  let t;
  if (lr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(lr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
}
function Ki(e, t) {
  const n = (s) => {
    const r = s.timeStamp || fl();
    (Ri || r >= n.attached - 1) && Ie(Vi(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Hi(), n;
}
function Vi(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const or = /^on[a-z]/, Wi = (e, t, n, s, r = !1, l, o, i, u) => {
  t === "class" ? Mi(e, s, r) : t === "style" ? Ni(e, n, s) : xn(t) ? as(t) || $i(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qi(e, t, s, r)) ? Li(e, t, s, l, o, i, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Pi(e, t, s, r));
};
function qi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && or.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || or.test(t) && ce(n) ? !1 : t in e;
}
const zi = {
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
Uo.props;
const et = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return N(t) ? (n) => an(t, n) : t;
};
function Ji(e) {
  e.target.composing = !0;
}
function ir(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ls = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = et(r);
    const l = s || r.props && r.props.type === "number";
    Ke(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = gn(i)), e._assign(i);
    }), n && Ke(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ke(e, "compositionstart", Ji), Ke(e, "compositionend", ir), Ke(e, "change", ir));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e._assign = et(l), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && gn(e.value) === t))
      return;
    const o = t == null ? "" : t;
    e.value !== o && (e.value = o);
  }
}, Qi = {
  deep: !0,
  created(e, t, n) {
    e._assign = et(n), Ke(e, "change", () => {
      const s = e._modelValue, r = Tt(e), l = e.checked, o = e._assign;
      if (N(s)) {
        const i = us(s, r), u = i !== -1;
        if (l && !u)
          o(s.concat(r));
        else if (!l && u) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (kt(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(dl(e, l));
    });
  },
  mounted: cr,
  beforeUpdate(e, t, n) {
    e._assign = et(n), cr(e, t, n);
  }
};
function cr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, N(t) ? e.checked = us(t, s.props.value) > -1 : kt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = ht(t, dl(e, !0)));
}
const Yi = {
  created(e, { value: t }, n) {
    e.checked = ht(t, n.props.value), e._assign = et(n), Ke(e, "change", () => {
      e._assign(Tt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = et(s), t !== n && (e.checked = ht(t, s.props.value));
  }
}, Xi = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = kt(t);
    Ke(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? gn(Tt(o)) : Tt(o));
      e._assign(e.multiple ? r ? new Set(l) : l : l[0]);
    }), e._assign = et(s);
  },
  mounted(e, { value: t }) {
    ur(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = et(n);
  },
  updated(e, { value: t }) {
    ur(e, t);
  }
};
function ur(e, t) {
  const n = e.multiple;
  if (!(n && !N(t) && !kt(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const l = e.options[s], o = Tt(l);
      if (n)
        N(t) ? l.selected = us(t, o) > -1 : l.selected = t.has(o);
      else if (ht(Tt(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Tt(e) {
  return "_value" in e ? e._value : e.value;
}
function dl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Zi = {
  created(e, t, n) {
    cn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    cn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    cn(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    cn(e, t, n, s, "updated");
  }
};
function Gi(e, t) {
  switch (e) {
    case "SELECT":
      return Xi;
    case "TEXTAREA":
      return ls;
    default:
      switch (t) {
        case "checkbox":
          return Qi;
        case "radio":
          return Yi;
        default:
          return ls;
      }
  }
}
function cn(e, t, n, s, r) {
  const o = Gi(e.tagName, n.props && n.props.type)[r];
  o && o(e, t, n, s);
}
const ec = ["ctrl", "shift", "alt", "meta"], tc = {
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
  exact: (e, t) => ec.some((n) => e[`${n}Key`] && !t.includes(n))
}, hl = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const l = tc[t[r]];
    if (l && l(n, t))
      return;
  }
  return e(n, ...s);
}, pl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Lt(e, !0), s.enter(e)) : s.leave(e, () => {
      Lt(e, !1);
    }) : Lt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lt(e, t);
  }
};
function Lt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const nc = /* @__PURE__ */ ge({ patchProp: Wi }, Fi);
let ar;
function sc() {
  return ar || (ar = fi(nc));
}
const gl = (...e) => {
  const t = sc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = rc(s);
    if (!r)
      return;
    const l = t._component;
    !$(l) && !l.render && !l.template && (l.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function rc(e) {
  return ce(e) ? document.querySelector(e) : e;
}
var fr;
const Zt = typeof window < "u";
Zt && ((fr = window == null ? void 0 : window.navigator) == null ? void 0 : fr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function lc(e) {
  return typeof e == "function" ? e() : W(e);
}
function oc(e) {
  return e;
}
function ic(e) {
  return $l() ? (Dl(e), !0) : !1;
}
function cc(e, t = !0) {
  cl() ? Xt(e) : t ? e() : Vt(e);
}
function ml(e) {
  var t;
  const n = lc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const uc = Zt ? window : void 0;
Zt && window.document;
Zt && window.navigator;
Zt && window.location;
function ac(e, t = !1) {
  const n = ne(), s = () => n.value = Boolean(e());
  return s(), cc(s, t), n;
}
const os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, is = "__vueuse_ssr_handlers__";
os[is] = os[is] || {};
os[is];
var dr = Object.getOwnPropertySymbols, fc = Object.prototype.hasOwnProperty, dc = Object.prototype.propertyIsEnumerable, hc = (e, t) => {
  var n = {};
  for (var s in e)
    fc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && dr)
    for (var s of dr(e))
      t.indexOf(s) < 0 && dc.call(e, s) && (n[s] = e[s]);
  return n;
};
function pc(e, t, n = {}) {
  const s = n, { window: r = uc } = s, l = hc(s, ["window"]);
  let o;
  const i = ac(() => r && "ResizeObserver" in r), u = () => {
    o && (o.disconnect(), o = void 0);
  }, a = Xe(() => ml(e), (h) => {
    u(), i.value && r && h && (o = new ResizeObserver(t), o.observe(h, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), a();
  };
  return ic(d), {
    isSupported: i,
    stop: d
  };
}
function gc(e, t = { width: 0, height: 0 }, n = {}) {
  const { box: s = "content-box" } = n, r = ne(t.width), l = ne(t.height);
  return pc(e, ([o]) => {
    const i = s === "border-box" ? o.borderBoxSize : s === "content-box" ? o.contentBoxSize : o.devicePixelContentBoxSize;
    i ? (r.value = i.reduce((u, { inlineSize: a }) => u + a, 0), l.value = i.reduce((u, { blockSize: a }) => u + a, 0)) : (r.value = o.contentRect.width, l.value = o.contentRect.height);
  }, n), Xe(() => ml(e), (o) => {
    r.value = o ? t.width : 0, l.value = o ? t.height : 0;
  }), {
    width: r,
    height: l
  };
}
var hr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(hr || (hr = {}));
var mc = Object.defineProperty, pr = Object.getOwnPropertySymbols, vc = Object.prototype.hasOwnProperty, yc = Object.prototype.propertyIsEnumerable, gr = (e, t, n) => t in e ? mc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _c = (e, t) => {
  for (var n in t || (t = {}))
    vc.call(t, n) && gr(e, n, t[n]);
  if (pr)
    for (var n of pr(t))
      yc.call(t, n) && gr(e, n, t[n]);
  return e;
};
const bc = {
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
_c({
  linear: oc
}, bc);
function vl(e, t) {
  const n = ne(), s = gc(n), r = ne([]), l = mo(e), o = ne({ start: 0, end: 10 }), { itemHeight: i, overscan: u = 5 } = t, a = (j) => {
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
      }, r.value = l.value.slice(o.value.start, o.value.end).map((re, O) => ({
        data: re,
        index: O + o.value.start
      }));
    }
  };
  Xe([s.width, s.height, e], () => {
    h();
  });
  const g = Ne(() => typeof i == "number" ? l.value.length * i : l.value.reduce((j, U, B) => j + i(B), 0)), _ = (j) => typeof i == "number" ? j * i : l.value.slice(0, j).reduce((B, D, q) => B + i(q), 0), C = (j) => {
    n.value && (n.value.scrollTop = _(j), h());
  }, A = Ne(() => _(o.value.start)), F = Ne(() => ({
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
    wrapperProps: F
  };
}
const rt = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, wc = (e, t) => {
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
let xc = 1;
const yl = (e) => {
  e && (e.style.display = "none", Ol(e));
}, _l = (e, t, n, s) => {
  var u;
  const r = ne(/* @__PURE__ */ new Map());
  qt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = ne([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, qt(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: rt(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => rt(d.value)).filter((d) => d))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: rt(d.value), data: Object.assign({}, d.dataset) }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (l.value = [{ value: a, key: a }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(rt(a), rt(a));
  else
    s != null && r.value.set(rt(s), rt(s));
  wc(l, (u = e == null ? void 0 : e.id) != null ? u : "extraselect_" + (++xc).toString());
  const o = [];
  return r.value.forEach((a, d) => {
    o.push([d, a]);
  }), { options: l, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, d] of o)
      r.value.set(a, d);
  } };
}, mr = async function(e, t = null, n = {}) {
  var l;
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...(l = n.headers) != null ? l : {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, bl = (e, t, n, s, r, l, o = "limited", i = {}) => {
  const u = ne(0), a = ne(!1), d = Ne(() => a.value || u.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      qt((g) => {
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
              h.push(s.value), u.value += 1, i.body = { ...i.body, ...l.value }, mr(t, s.value, i).then((A) => {
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
      mr(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, wl = (e, t, n, s = [], r = []) => {
  const l = ne(""), o = ne([]), i = ne({}), u = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in u) {
    let h = u[d], g = document.getElementById(d);
    i.value[d] = g == null ? void 0 : g.value, g && g.addEventListener("change", (_) => {
      i.value[d] = _.target.value, h && Vt(() => {
        if (t != null)
          for (let C of Array.from(t.value.keys()))
            o.value.find((A) => A.key == C) || n(C, !1);
        else
          o.value.find((C) => C.key == l.value) || n(l.value, !1);
      });
    });
  }
  const a = function(d, h) {
    let g = d.value;
    return Object.keys(i.value).length > 0 && (g = g.filter((_) => {
      var C, A;
      for (let F in i.value)
        if ((u[F] ? !0 : ((C = i.value[F]) != null ? C : "").length > 0) && ((A = _.data) == null ? void 0 : A.hasOwnProperty(F)) && _.data[F] != i.value[F])
          return !1;
      return !0;
    })), h.length > 0 && (g = g.filter((_) => _.value.toLowerCase().includes(h.toLowerCase()))), g;
  };
  return qt(() => {
    o.value = a(e, l.value);
  }), { filterText: l, filteredOptions: o, filterValues: i };
}, xl = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, u = function(h) {
    const _ = document.createElement("canvas").getContext("2d");
    return _.font = i, _.measureText(h).width;
  }, a = Ne(() => {
    var g, _;
    const h = (g = en(s.value).width) != null ? g : 100;
    if (o === "inherit")
      return h;
    if (o == null || o === "dynamic") {
      const C = (_ = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? _ : 16;
      return Math.max(h, Math.max(...e.value.map((A) => u(A.value))) + 20 + C * 3);
    }
    return o;
  }), d = ne({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ro(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = en(s.value), g = en(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var g = en(l.value);
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
}, Cc = ["name"], Ec = {
  key: 1,
  class: "extra-select selection"
}, Oc = ["onClick"], Tc = ["innerHTML"], Ac = ["value"], Ic = {
  key: 0,
  class: "input-searching"
}, kc = {
  key: 0,
  class: "allselect-clear"
}, Fc = { class: "row-input" }, Mc = ["checked"], Nc = /* @__PURE__ */ ie("b", null, "Select all", -1), Sc = { class: "row-input" }, Pc = ["checked"], Lc = /* @__PURE__ */ ie("b", null, "Select Filtered", -1), Rc = {
  key: 1,
  class: "no-matches"
}, jc = { key: 2 }, Bc = ["onClick"], Hc = { class: "row-input" }, Uc = ["checked"], $c = ["value"], Dc = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, Kc = /* @__PURE__ */ Object.assign(Dc, {
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
    var ee, Q, Oe;
    const n = e, s = Ne(() => {
      var L, P;
      return (P = (L = n.originalNode) == null ? void 0 : L.multiple) != null ? P : n.multiple;
    }), { options: r, selectedOptions: l, onReset: o } = _l(n.originalNode, Wn(n, "options"), Wn(n, "modelValue"), n.initialValue), i = (ee = n.originalNode) == null ? void 0 : ee.classList, u = Object.values((Oe = (Q = n.originalNode) == null ? void 0 : Q.style) != null ? Oe : {});
    yl(n.originalNode);
    const a = (L, P = null) => {
      if (s.value) {
        let ue = P;
        switch (ue == null && (ue = !l.value.has(L)), ue) {
          case !0:
            l.value.set(L, L);
            break;
          case !1:
            l.value.delete(L);
            break;
        }
      } else
        l.value.clear(), P !== !1 && l.value.set(L, L), S.value = !1;
      q(Array.from(l.value.keys()));
    }, { filterText: d, filteredOptions: h, filterValues: g } = wl(r, l, a, n.filterFields, n.hardFilterFields), { searchingFlag: _ } = bl(
      r,
      n.url,
      n.searchableUrl,
      d,
      n.minChars,
      g,
      n.fetchMode,
      n.fetchOptions
    ), C = ne(null), A = ne(null), F = ne(null), S = ne(!1), j = ne(null), U = function(L) {
      const P = yt(L.target);
      P.push(L.target), !P.includes(C.value) && !P.includes(A.value) && (S.value = !1);
    };
    Xt(() => {
      if (n.dropdownContainer) {
        let L = !1;
        j.value = yt(C.value).find((P) => !!(P instanceof Element && (P.matches(n.dropdownContainer) && (L = !0), L && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(P).position))));
      }
      if (j.value == null && (j.value = document.querySelector("body")), n.originalNode) {
        for (let P of i)
          P != "extraselect" && C.value.classList.add(P);
        for (let P of u)
          C.value.style[P] = n.originalNode.style[P];
        u.includes("background-color") || (C.value.style.backgroundColor = "white");
        let L = yt(C.value, "form").pop();
        L instanceof HTMLElement && L.matches("form") && L.addEventListener("reset", () => setTimeout(o));
      }
      window.document.addEventListener("mousedown", U), window.document.addEventListener("focusin", U);
    }), Fn(() => {
      window.document.removeEventListener("mousedown", U), window.document.removeEventListener("focusin", U);
    });
    const { dropdownStyle: B, getTextWidth: D } = xl(r, l, S, C, A, j, n.maxWidth), q = (L) => {
      Vt(
        () => {
          var P;
          return (P = n.originalNode) == null ? void 0 : P.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", L);
    }, re = (L) => {
      O(L, !1), d.value = "";
    }, O = (L, P = null) => {
      P == null && (P = !H.value), P ? (l.value.clear(), r.value.forEach((ue) => l.value.set(ue.key, ue.key))) : l.value.clear(), q(Array.from(l.value.keys()));
    }, M = () => {
      J.value ? h.value.forEach((L) => {
        l.value.has(L.key) && l.value.delete(L.key);
      }) : h.value.forEach((L) => {
        l.value.has(L.key) || l.value.set(L.key, L.key);
      }), q(Array.from(l.value.keys()));
    };
    Xe(S, (L, P) => {
      L != P && (L ? n.search && Vt(() => {
        F.value.focus({ focusVisible: !0 });
      }) : d.value = "");
    });
    const H = Ne(() => l.value.size == r.value.length), J = Ne(() => h.value.reduce((L, P) => L && l.value.has(P.key), !0)), we = Ne(() => l.value.size == 0), ke = Ne(() => {
      var L, P, ue, ve, oe;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (we.value)
          return "No selection";
        if (!n.searchableUrl && H.value)
          return "All selected";
        const ye = C.value ? getComputedStyle(C.value) : null, gt = ((L = C.value) == null ? void 0 : L.clientWidth) - parseInt(ye == null ? void 0 : ye.paddingLeft) - parseInt(ye == null ? void 0 : ye.paddingRight);
        let _e = l.value.size + " selected - ", tt = !0;
        for (let Gt of l.value)
          if (tt ? tt = !1 : _e += ", ", _e += (ue = (P = r.map.get(Gt[0])) == null ? void 0 : P.value) != null ? ue : _.value ? "Loading..." : "Value not found", gt < D(_e))
            return l.value.size + " selected";
        return _e;
      } else
        for (let ye of l.value)
          return (oe = (ve = r.map.get(ye[0])) == null ? void 0 : ve.value) != null ? oe : _.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: pt, containerProps: St, wrapperProps: he } = vl(
      h,
      {
        itemHeight: 32
      }
    );
    return (L, P) => {
      var ue, ve;
      return Z(), le(fe, null, [
        W(s) && W(l).size == 0 ? (Z(), le("input", {
          key: 0,
          type: "hidden",
          name: (ve = (ue = n.originalNode) == null ? void 0 : ue.name) == null ? void 0 : ve.replace("[]", ""),
          value: ""
        }, null, 8, Cc)) : Ae("", !0),
        n.showSelected ? (Z(), le("div", Ec, [
          (Z(!0), le(fe, null, dn(W(l), (oe) => {
            var ye;
            return Z(), le("div", {
              key: oe,
              onClick: (gt) => a(oe[0]),
              class: "selection-badge"
            }, [
              ns(jt((ye = W(r).find((gt) => gt.key == oe[0])) == null ? void 0 : ye.value) + " ", 1),
              ie("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Tc)
            ], 8, Oc);
          }), 128))
        ])) : Ae("", !0),
        ie("input", Jt({
          onFocus: P[0] || (P[0] = (oe) => S.value = !0),
          onClick: P[1] || (P[1] = (oe) => S.value = !0),
          ref_key: "inputNode",
          ref: C,
          value: W(ke),
          class: "extra-select extra-select-input",
          readonly: ""
        }, L.$attrs), null, 16, Ac),
        j.value ? (Z(), wn(ts, {
          key: 2,
          to: j.value
        }, [
          yn(ie("div", {
            class: It(["extra-select dropdown", { searching: W(_) > 0 }]),
            ref_key: "dropdownNode",
            ref: A,
            style: At(W(B))
          }, [
            n.search ? (Z(), le("div", Ic, [
              yn(ie("input", {
                ref_key: "searchNode",
                ref: F,
                class: "extra-select-search",
                "onUpdate:modelValue": P[2] || (P[2] = (oe) => ae(d) ? d.value = oe : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: "Cerca..."
              }, null, 512), [
                [ls, W(d)]
              ])
            ])) : Ae("", !0),
            W(d).length >= n.minChars ? (Z(), le(fe, { key: 1 }, [
              W(s) ? (Z(), le("div", kc, [
                W(d).length == 0 ? (Z(), le("div", {
                  key: 0,
                  onClick: O,
                  class: "all-select"
                }, [
                  ie("div", Fc, [
                    ie("input", {
                      checked: W(H),
                      type: "checkbox"
                    }, null, 8, Mc),
                    Nc
                  ])
                ])) : Ae("", !0),
                W(h).length > 0 && W(d).length > 0 ? (Z(), le("div", {
                  key: 1,
                  onClick: M,
                  class: "all-select"
                }, [
                  ie("div", Sc, [
                    ie("input", {
                      checked: W(J),
                      type: "checkbox"
                    }, null, 8, Pc),
                    Lc
                  ])
                ])) : Ae("", !0),
                ie("div", {
                  class: "clear",
                  onClick: re
                }, "Clear")
              ])) : Ae("", !0),
              W(h).length == 0 ? (Z(), le("div", Rc, "No matches found")) : Ae("", !0)
            ], 64)) : (Z(), le("div", jc, "Insert at least " + jt(n.minChars) + " characters", 1)),
            ie("div", Jt(W(St), { class: "scroller" }), [
              ie("div", yr(As(W(he))), [
                (Z(!0), le(fe, null, dn(W(pt), (oe) => (Z(), le("button", {
                  key: oe.index,
                  class: "dropdown-row",
                  onClick: hl((ye) => a(oe.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  ie("div", Hc, [
                    W(s) ? (Z(), le("input", {
                      key: 0,
                      checked: W(l).has(oe.data.key),
                      type: "checkbox"
                    }, null, 8, Uc)) : Ae("", !0),
                    ns(" " + jt(oe.data.value), 1)
                  ])
                ], 8, Bc))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [pl, S.value]
          ])
        ], 8, ["to"])) : Ae("", !0),
        n.originalNode ? (Z(), wn(ts, {
          key: 3,
          to: n.originalNode
        }, [
          (Z(!0), le(fe, null, dn(W(l), (oe) => (Z(), le("option", {
            key: oe[0],
            selected: "selected",
            value: oe[0]
          }, null, 8, $c))), 128))
        ], 8, ["to"])) : Ae("", !0)
      ], 64);
    };
  }
}), Vc = {
  key: 0,
  class: "no-matches"
}, Wc = { key: 1 }, qc = ["onClick"], zc = { class: "row-input" }, Jc = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, Qc = /* @__PURE__ */ Object.assign(Jc, {
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
    var D, q, re;
    const n = e, { options: s } = _l(n.originalNode, Wn(n, "options"), ne([])), r = (D = n.originalNode) == null ? void 0 : D.classList, l = Object.values((re = (q = n.originalNode) == null ? void 0 : q.style) != null ? re : {});
    yl(n.originalNode);
    const o = (O, M = null) => {
      M === !1 ? i.value = "" : i.value = s.map.get(O).value, _.value = !1;
    }, { filterText: i, filteredOptions: u, filterValues: a } = wl(s, null, o, n.filterFields, n.hardFilterFields), { searchingFlag: d } = bl(
      s,
      n.url,
      n.searchableUrl,
      i,
      n.minChars,
      a,
      n.fetchMode,
      n.fetchOptions
    ), h = ne(null), g = ne(null), _ = ne(!1), C = ne(null), A = function(O) {
      const M = yt(O.target);
      M.push(O.target), !M.includes(h.value) && !M.includes(g.value) && (_.value = !1);
    };
    Xt(() => {
      if (n.dropdownContainer) {
        let O = !1;
        C.value = yt(h.value).find((M) => !!(M instanceof Element && (M.matches(n.dropdownContainer) && (O = !0), O && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(M).position))));
      }
      if (C.value == null && (C.value = document.querySelector("body")), n.originalNode) {
        for (let J of r)
          J != "extrasuggest" && h.value.classList.add(J);
        for (let J of l)
          h.value.style[J] = n.originalNode.style[J];
        l.includes("background-color") || (h.value.style.backgroundColor = "white"), i.value = n.originalNode.value, qt(() => {
          n.modelValue != null && (i.value = n.modelValue);
        });
        const O = i.value, M = () => {
          i.value = O;
        };
        let H = yt(h.value, "form").pop();
        H instanceof HTMLElement && H.matches("form") && H.addEventListener("reset", () => setTimeout(M));
      }
      window.document.addEventListener("mousedown", A), window.document.addEventListener("focusin", A);
    }), Fn(() => {
      window.document.removeEventListener("mousedown", A), window.document.removeEventListener("focusin", A);
    });
    const { dropdownStyle: F } = xl(s, ne([]), _, h, g, C, n.maxWidth), S = () => {
      var O;
      n.originalNode && (n.originalNode.value = i.value, (O = n.originalNode) == null || O.dispatchEvent(new Event("change", { bubbles: !0 }))), t("update:modelValue", i.value);
    };
    Xe(() => _.value, (O) => {
      O === !1 && S();
    });
    const { list: j, containerProps: U, wrapperProps: B } = vl(
      u,
      {
        itemHeight: 32
      }
    );
    return (O, M) => (Z(), le(fe, null, [
      yn(ie("input", Jt({
        onFocus: M[0] || (M[0] = (H) => _.value = !0),
        onClick: M[1] || (M[1] = (H) => _.value = !0),
        ref_key: "inputNode",
        ref: h,
        "onUpdate:modelValue": M[2] || (M[2] = (H) => ae(i) ? i.value = H : null),
        class: "extra-select extra-select-input"
      }, O.$attrs), null, 16), [
        [Zi, W(i)]
      ]),
      C.value ? (Z(), wn(ts, {
        key: 0,
        to: C.value
      }, [
        yn(ie("div", {
          class: It(["extra-select dropdown", { searching: W(d) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: At(W(F))
        }, [
          W(i).length >= n.minChars ? (Z(), le(fe, { key: 0 }, [
            W(u).length == 0 ? (Z(), le("div", Vc, "No matches found")) : Ae("", !0)
          ], 64)) : (Z(), le("div", Wc, "Insert at least " + jt(n.minChars) + " characters", 1)),
          ie("div", Jt(W(U), { class: "scroller" }), [
            ie("div", yr(As(W(B))), [
              (Z(!0), le(fe, null, dn(W(j), (H) => (Z(), le("button", {
                key: H.index,
                class: "dropdown-row",
                onClick: hl((J) => o(H.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", zc, jt(H.data.value), 1)
              ], 8, qc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [pl, _.value]
        ])
      ], 8, ["to"])) : Ae("", !0)
    ], 64));
  }
}), Cl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Cl.bindNew(e);
    });
  },
  bindNew(e) {
    dt.lock(e, "extra-select", () => {
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
      const s = gl(Kc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), dt.remove(e, "extra-select");
      });
    });
  }
}, El = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      El.bindNew(e);
    });
  },
  bindNew(e) {
    dt.lock(e, "extra-suggest", () => {
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
      const s = gl(Qc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), dt.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Cl.init(), El.init();
});
export {
  Cl as ExtraSelect,
  El as ExtraSuggest
};
