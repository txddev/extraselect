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
function Xt(e) {
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
function Oo(e) {
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
const To = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ao = /* @__PURE__ */ is(To);
function mr(e) {
  return !!e || e === "";
}
function Ot(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ce(s) ? No(s) : Ot(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (ce(e))
      return e;
    if (re(e))
      return e;
  }
}
const Io = /;(?![^(]*\))/g, Mo = /:(.+)/;
function No(e) {
  const t = {};
  return e.split(Io).forEach((n) => {
    if (n) {
      const s = n.split(Mo);
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
function So(e, t) {
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
  let n = Ss(e), s = Ss(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Bt(e), s = Bt(t), n || s)
    return e === t;
  if (n = S(e), s = S(t), n || s)
    return n && s ? So(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const l in e) {
      const i = e.hasOwnProperty(l), u = t.hasOwnProperty(l);
      if (i && !u || !i && u || !dt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function cs(e, t) {
  return e.findIndex((n) => dt(n, t));
}
const Lt = (e) => ce(e) ? e : e == null ? "" : S(e) || re(e) && (e.toString === br || !H(e.toString)) ? JSON.stringify(e, yr, 2) : String(e), yr = (e, t) => t && t.__v_isRef ? yr(e, t.value) : yt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : At(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : re(t) && !S(t) && !wr(t) ? String(t) : t, G = {}, vt = [], Pe = () => {
}, ko = () => !1, Po = /^on[^a-z]/, bn = (e) => Po.test(e), us = (e) => e.startsWith("onUpdate:"), pe = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fo = Object.prototype.hasOwnProperty, K = (e, t) => Fo.call(e, t), S = Array.isArray, yt = (e) => zt(e) === "[object Map]", At = (e) => zt(e) === "[object Set]", Ss = (e) => zt(e) === "[object Date]", H = (e) => typeof e == "function", ce = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", _r = (e) => re(e) && H(e.then) && H(e.catch), br = Object.prototype.toString, zt = (e) => br.call(e), Lo = (e) => zt(e).slice(8, -1), wr = (e) => zt(e) === "[object Object]", as = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, on = /* @__PURE__ */ is(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ro = /-(\w)/g, wt = wn((e) => e.replace(Ro, (t, n) => n ? n.toUpperCase() : "")), jo = /\B([A-Z])/g, It = wn((e) => e.replace(jo, "-$1").toLowerCase()), xr = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fn = wn((e) => e ? `on${xr(e)}` : ""), Ht = (e, t) => !Object.is(e, t), ln = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, an = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, dn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ks;
const Bo = () => ks || (ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let we;
class Ho {
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
function Uo(e, t = we) {
  t && t.active && t.effects.push(e);
}
function $o() {
  return we;
}
function Do(e) {
  we && we.cleanups.push(e);
}
const ds = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Cr = (e) => (e.w & Ze) > 0, Er = (e) => (e.n & Ze) > 0, Ko = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ze;
}, Vo = (e) => {
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
let Ft = 0, Ze = 1;
const $n = 30;
let Me;
const ut = Symbol(""), Dn = Symbol("");
class hs {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Uo(this, s);
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
      return this.parent = Me, Me = this, Qe = !0, Ze = 1 << ++Ft, Ft <= $n ? Ko(this) : Ps(this), this.fn();
    } finally {
      Ft <= $n && Vo(this), Ze = 1 << --Ft, Me = this.parent, Qe = n, this.parent = void 0, this.deferStop && this.stop();
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
const Or = [];
function Mt() {
  Or.push(Qe), Qe = !1;
}
function Nt() {
  const e = Or.pop();
  Qe = e === void 0 ? !0 : e;
}
function xe(e, t, n) {
  if (Qe && Me) {
    let s = Un.get(e);
    s || Un.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = ds()), Tr(r);
  }
}
function Tr(e, t) {
  let n = !1;
  Ft <= $n ? Er(e) || (e.n |= Ze, n = !Cr(e)) : n = !e.has(Me), n && (e.add(Me), Me.deps.push(e));
}
function Ve(e, t, n, s, r, o) {
  const l = Un.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && S(e))
    l.forEach((u, f) => {
      (f === "length" || f >= s) && i.push(u);
    });
  else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        S(e) ? as(n) && i.push(l.get("length")) : (i.push(l.get(ut)), yt(e) && i.push(l.get(Dn)));
        break;
      case "delete":
        S(e) || (i.push(l.get(ut)), yt(e) && i.push(l.get(Dn)));
        break;
      case "set":
        yt(e) && i.push(l.get(ut));
        break;
    }
  if (i.length === 1)
    i[0] && Kn(i[0]);
  else {
    const u = [];
    for (const f of i)
      f && u.push(...f);
    Kn(ds(u));
  }
}
function Kn(e, t) {
  const n = S(e) ? e : [...e];
  for (const s of n)
    s.computed && Fs(s);
  for (const s of n)
    s.computed || Fs(s);
}
function Fs(e, t) {
  (e !== Me || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Wo = /* @__PURE__ */ is("__proto__,__v_isRef,__isVue"), Ar = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
), qo = /* @__PURE__ */ ps(), zo = /* @__PURE__ */ ps(!1, !0), Jo = /* @__PURE__ */ ps(!0), Ls = /* @__PURE__ */ Qo();
function Qo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = W(this);
      for (let o = 0, l = this.length; o < l; o++)
        xe(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(W)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Mt();
      const s = W(this)[t].apply(this, n);
      return Nt(), s;
    };
  }), e;
}
function ps(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? al : kr : t ? Sr : Nr).get(s))
      return s;
    const l = S(s);
    if (!e && l && K(Ls, r))
      return Reflect.get(Ls, r, o);
    const i = Reflect.get(s, r, o);
    return (Bt(r) ? Ar.has(r) : Wo(r)) || (e || xe(s, "get", r), t) ? i : ue(i) ? l && as(r) ? i : i.value : re(i) ? e ? Pr(i) : vs(i) : i;
  };
}
const Yo = /* @__PURE__ */ Ir(), Xo = /* @__PURE__ */ Ir(!0);
function Ir(e = !1) {
  return function(n, s, r, o) {
    let l = n[s];
    if (xt(l) && ue(l) && !ue(r))
      return !1;
    if (!e && (!hn(r) && !xt(r) && (l = W(l), r = W(r)), !S(n) && ue(l) && !ue(r)))
      return l.value = r, !0;
    const i = S(n) && as(s) ? Number(s) < n.length : K(n, s), u = Reflect.set(n, s, r, o);
    return n === W(o) && (i ? Ht(r, l) && Ve(n, "set", s, r) : Ve(n, "add", s, r)), u;
  };
}
function Zo(e, t) {
  const n = K(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ve(e, "delete", t, void 0), s;
}
function Go(e, t) {
  const n = Reflect.has(e, t);
  return (!Bt(t) || !Ar.has(t)) && xe(e, "has", t), n;
}
function el(e) {
  return xe(e, "iterate", S(e) ? "length" : ut), Reflect.ownKeys(e);
}
const Mr = {
  get: qo,
  set: Yo,
  deleteProperty: Zo,
  has: Go,
  ownKeys: el
}, tl = {
  get: Jo,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, nl = /* @__PURE__ */ pe({}, Mr, {
  get: zo,
  set: Xo
}), gs = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = W(e), o = W(t);
  n || (t !== o && xe(r, "get", t), xe(r, "get", o));
  const { has: l } = xn(r), i = s ? gs : n ? _s : Ut;
  if (l.call(r, t))
    return i(e.get(t));
  if (l.call(r, o))
    return i(e.get(o));
  e !== r && e.get(t);
}
function Gt(e, t = !1) {
  const n = this.__v_raw, s = W(n), r = W(e);
  return t || (e !== r && xe(s, "has", e), xe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function en(e, t = !1) {
  return e = e.__v_raw, !t && xe(W(e), "iterate", ut), Reflect.get(e, "size", e);
}
function Rs(e) {
  e = W(e);
  const t = W(this);
  return xn(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this;
}
function js(e, t) {
  t = W(t);
  const n = W(this), { has: s, get: r } = xn(n);
  let o = s.call(n, e);
  o || (e = W(e), o = s.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), o ? Ht(t, l) && Ve(n, "set", e, t) : Ve(n, "add", e, t), this;
}
function Bs(e) {
  const t = W(this), { has: n, get: s } = xn(t);
  let r = n.call(t, e);
  r || (e = W(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ve(t, "delete", e, void 0), o;
}
function Hs() {
  const e = W(this), t = e.size !== 0, n = e.clear();
  return t && Ve(e, "clear", void 0, void 0), n;
}
function tn(e, t) {
  return function(s, r) {
    const o = this, l = o.__v_raw, i = W(l), u = t ? gs : e ? _s : Ut;
    return !e && xe(i, "iterate", ut), l.forEach((f, d) => s.call(r, u(f), u(d), o));
  };
}
function nn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = W(r), l = yt(o), i = e === "entries" || e === Symbol.iterator && l, u = e === "keys" && l, f = r[e](...s), d = n ? gs : t ? _s : Ut;
    return !t && xe(o, "iterate", u ? Dn : ut), {
      next() {
        const { value: p, done: g } = f.next();
        return g ? { value: p, done: g } : {
          value: i ? [d(p[0]), d(p[1])] : d(p),
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
function sl() {
  const e = {
    get(o) {
      return Zt(this, o);
    },
    get size() {
      return en(this);
    },
    has: Gt,
    add: Rs,
    set: js,
    delete: Bs,
    clear: Hs,
    forEach: tn(!1, !1)
  }, t = {
    get(o) {
      return Zt(this, o, !1, !0);
    },
    get size() {
      return en(this);
    },
    has: Gt,
    add: Rs,
    set: js,
    delete: Bs,
    clear: Hs,
    forEach: tn(!1, !0)
  }, n = {
    get(o) {
      return Zt(this, o, !0);
    },
    get size() {
      return en(this, !0);
    },
    has(o) {
      return Gt.call(this, o, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: tn(!0, !1)
  }, s = {
    get(o) {
      return Zt(this, o, !0, !0);
    },
    get size() {
      return en(this, !0);
    },
    has(o) {
      return Gt.call(this, o, !0);
    },
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: tn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = nn(o, !1, !1), n[o] = nn(o, !0, !1), t[o] = nn(o, !1, !0), s[o] = nn(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [rl, ol, ll, il] = /* @__PURE__ */ sl();
function ms(e, t) {
  const n = t ? e ? il : ll : e ? ol : rl;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(K(n, r) && r in s ? n : s, r, o);
}
const cl = {
  get: /* @__PURE__ */ ms(!1, !1)
}, ul = {
  get: /* @__PURE__ */ ms(!1, !0)
}, fl = {
  get: /* @__PURE__ */ ms(!0, !1)
}, Nr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap();
function dl(e) {
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
function hl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : dl(Lo(e));
}
function vs(e) {
  return xt(e) ? e : ys(e, !1, Mr, cl, Nr);
}
function pl(e) {
  return ys(e, !1, nl, ul, Sr);
}
function Pr(e) {
  return ys(e, !0, tl, fl, kr);
}
function ys(e, t, n, s, r) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = hl(e);
  if (l === 0)
    return e;
  const i = new Proxy(e, l === 2 ? s : n);
  return r.set(e, i), i;
}
function _t(e) {
  return xt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
function hn(e) {
  return !!(e && e.__v_isShallow);
}
function Fr(e) {
  return _t(e) || xt(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Lr(e) {
  return an(e, "__v_skip", !0), e;
}
const Ut = (e) => re(e) ? vs(e) : e, _s = (e) => re(e) ? Pr(e) : e;
function Rr(e) {
  Qe && Me && (e = W(e), Tr(e.dep || (e.dep = ds())));
}
function jr(e, t) {
  e = W(e), e.dep && Kn(e.dep);
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function se(e) {
  return Br(e, !1);
}
function gl(e) {
  return Br(e, !0);
}
function Br(e, t) {
  return ue(e) ? e : new ml(e, t);
}
class ml {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : W(t), this._value = n ? t : Ut(t);
  }
  get value() {
    return Rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || hn(t) || xt(t);
    t = n ? t : W(t), Ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ut(t), jr(this));
  }
}
function z(e) {
  return ue(e) ? e.value : e;
}
const vl = {
  get: (e, t, n) => z(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Hr(e) {
  return _t(e) ? e : new Proxy(e, vl);
}
class yl {
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
  return ue(s) ? s : new yl(e, t, n);
}
var Ur;
class _l {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ur] = !1, this._dirty = !0, this.effect = new hs(t, () => {
      this._dirty || (this._dirty = !0, jr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = W(this);
    return Rr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ur = "__v_isReadonly";
function bl(e, t, n = !1) {
  let s, r;
  const o = H(e);
  return o ? (s = e, r = Pe) : (s = e.get, r = e.set), new _l(s, r, o || !r, n);
}
function Ye(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Cn(o, t, n);
  }
  return r;
}
function Oe(e, t, n, s) {
  if (H(e)) {
    const o = Ye(e, t, n, s);
    return o && _r(o) && o.catch((l) => {
      Cn(l, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Oe(e[o], t, n, s));
  return r;
}
function Cn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const l = t.proxy, i = n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let d = 0; d < f.length; d++)
          if (f[d](e, l, i) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ye(u, null, 10, [e, l, i]);
      return;
    }
  }
  wl(e, n, r, s);
}
function wl(e, t, n, s = !0) {
  console.error(e);
}
let $t = !1, Wn = !1;
const he = [];
let Ue = 0;
const bt = [];
let $e = null, ot = 0;
const $r = /* @__PURE__ */ Promise.resolve();
let bs = null;
function pn(e) {
  const t = bs || $r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xl(e) {
  let t = Ue + 1, n = he.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    Dt(he[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function ws(e) {
  (!he.length || !he.includes(e, $t && e.allowRecurse ? Ue + 1 : Ue)) && (e.id == null ? he.push(e) : he.splice(xl(e.id), 0, e), Dr());
}
function Dr() {
  !$t && !Wn && (Wn = !0, bs = $r.then(Vr));
}
function Cl(e) {
  const t = he.indexOf(e);
  t > Ue && he.splice(t, 1);
}
function El(e) {
  S(e) ? bt.push(...e) : (!$e || !$e.includes(e, e.allowRecurse ? ot + 1 : ot)) && bt.push(e), Dr();
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
    for ($e = t, $e.sort((n, s) => Dt(n) - Dt(s)), ot = 0; ot < $e.length; ot++)
      $e[ot]();
    $e = null, ot = 0;
  }
}
const Dt = (e) => e.id == null ? 1 / 0 : e.id, Ol = (e, t) => {
  const n = Dt(e) - Dt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Vr(e) {
  Wn = !1, $t = !0, he.sort(Ol);
  const t = Pe;
  try {
    for (Ue = 0; Ue < he.length; Ue++) {
      const n = he[Ue];
      n && n.active !== !1 && Ye(n, null, 14);
    }
  } finally {
    Ue = 0, he.length = 0, Kr(), $t = !1, bs = null, (he.length || bt.length) && Vr();
  }
}
function Tl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || G;
  let r = n;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in s) {
    const d = `${l === "modelValue" ? "model" : l}Modifiers`, { number: p, trim: g } = s[d] || G;
    g && (r = n.map((_) => _.trim())), p && (r = n.map(dn));
  }
  let i, u = s[i = Fn(t)] || s[i = Fn(wt(t))];
  !u && o && (u = s[i = Fn(It(t))]), u && Oe(u, e, 6, r);
  const f = s[i + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Oe(f, e, 6, r);
  }
}
function Wr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let l = {}, i = !1;
  if (!H(e)) {
    const u = (f) => {
      const d = Wr(f, t, !0);
      d && (i = !0, pe(l, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !i ? (re(e) && s.set(e, null), null) : (S(o) ? o.forEach((u) => l[u] = null) : pe(l, o), re(e) && s.set(e, l), l);
}
function En(e, t) {
  return !e || !bn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, It(t)) || K(e, t));
}
let Se = null, qr = null;
function gn(e) {
  const t = Se;
  return Se = e, qr = e && e.type.__scopeId || null, t;
}
function Al(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Xs(-1);
    const o = gn(t), l = e(...r);
    return gn(o), s._d && Xs(1), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ln(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [l], slots: i, attrs: u, emit: f, render: d, renderCache: p, data: g, setupState: _, ctx: T, inheritAttrs: M } = e;
  let N, P;
  const U = gn(e);
  try {
    if (n.shapeFlag & 4) {
      const j = r || s;
      N = He(d.call(j, j, p, o, _, g, T)), P = u;
    } else {
      const j = t;
      N = He(j.length > 1 ? j(o, { attrs: u, slots: i, emit: f }) : j(o, null)), P = t.props ? u : Il(u);
    }
  } catch (j) {
    jt.length = 0, Cn(j, e, 1), N = Ke(Fe);
  }
  let D = N;
  if (P && M !== !1) {
    const j = Object.keys(P), { shapeFlag: $ } = D;
    j.length && $ & 7 && (l && j.some(us) && (P = Ml(P, l)), D = Ge(D, P));
  }
  return n.dirs && (D = Ge(D), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (D.transition = n.transition), N = D, gn(U), N;
}
const Il = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || bn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ml = (e, t) => {
  const n = {};
  for (const s in e)
    (!us(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Nl(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: l, children: i, patchFlag: u } = t, f = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? $s(s, l, f) : !!l;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const g = d[p];
        if (l[g] !== s[g] && !En(f, g))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === l ? !1 : s ? l ? $s(s, l, f) : !0 : !!l;
  return !1;
}
function $s(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !En(n, o))
      return !0;
  }
  return !1;
}
function Sl({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const kl = (e) => e.__isSuspense;
function Pl(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : El(e);
}
function Fl(e, t) {
  if (ae) {
    let n = ae.provides;
    const s = ae.parent && ae.parent.provides;
    s === n && (n = ae.provides = Object.create(s)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const s = ae || Se;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(s.proxy) : t;
  }
}
function Kt(e, t) {
  return On(e, null, t);
}
function Ll(e, t) {
  return On(e, null, { flush: "post" });
}
const Ds = {};
function Xe(e, t, n) {
  return On(e, t, n);
}
function On(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: l } = G) {
  const i = ae;
  let u, f = !1, d = !1;
  if (ue(e) ? (u = () => e.value, f = hn(e)) : _t(e) ? (u = () => e, s = !0) : S(e) ? (d = !0, f = e.some((P) => _t(P) || hn(P)), u = () => e.map((P) => {
    if (ue(P))
      return P.value;
    if (_t(P))
      return ct(P);
    if (H(P))
      return Ye(P, i, 2);
  })) : H(e) ? t ? u = () => Ye(e, i, 2) : u = () => {
    if (!(i && i.isUnmounted))
      return p && p(), Oe(e, i, 3, [g]);
  } : u = Pe, t && s) {
    const P = u;
    u = () => ct(P());
  }
  let p, g = (P) => {
    p = N.onStop = () => {
      Ye(P, i, 4);
    };
  };
  if (qt)
    return g = Pe, t ? n && Oe(t, i, 3, [
      u(),
      d ? [] : void 0,
      g
    ]) : u(), Pe;
  let _ = d ? [] : Ds;
  const T = () => {
    if (!!N.active)
      if (t) {
        const P = N.run();
        (s || f || (d ? P.some((U, D) => Ht(U, _[D])) : Ht(P, _))) && (p && p(), Oe(t, i, 3, [
          P,
          _ === Ds ? void 0 : _,
          g
        ]), _ = P);
      } else
        N.run();
  };
  T.allowRecurse = !!t;
  let M;
  r === "sync" ? M = T : r === "post" ? M = () => ye(T, i && i.suspense) : (T.pre = !0, i && (T.id = i.uid), M = () => ws(T));
  const N = new hs(u, M);
  return t ? n ? T() : _ = N.run() : r === "post" ? ye(N.run.bind(N), i && i.suspense) : N.run(), () => {
    N.stop(), i && i.scope && fs(i.scope.effects, N);
  };
}
function Rl(e, t, n) {
  const s = this.proxy, r = ce(e) ? e.includes(".") ? zr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  H(t) ? o = t : (o = t.handler, n = t);
  const l = ae;
  Ct(this);
  const i = On(r, o.bind(s), n);
  return l ? Ct(l) : ft(), i;
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
function jl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Jt(() => {
    e.isMounted = !0;
  }), Xr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ee = [Function, Array], Bl = {
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
    const n = io(), s = jl();
    let r;
    return () => {
      const o = t.default && Qr(t.default(), !0);
      if (!o || !o.length)
        return;
      let l = o[0];
      if (o.length > 1) {
        for (const M of o)
          if (M.type !== Fe) {
            l = M;
            break;
          }
      }
      const i = W(e), { mode: u } = i;
      if (s.isLeaving)
        return jn(l);
      const f = Ks(l);
      if (!f)
        return jn(l);
      const d = qn(f, i, s, n);
      zn(f, d);
      const p = n.subTree, g = p && Ks(p);
      let _ = !1;
      const { getTransitionKey: T } = f.type;
      if (T) {
        const M = T();
        r === void 0 ? r = M : M !== r && (r = M, _ = !0);
      }
      if (g && g.type !== Fe && (!lt(f, g) || _)) {
        const M = qn(g, i, s, n);
        if (zn(g, M), u === "out-in")
          return s.isLeaving = !0, M.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, jn(l);
        u === "in-out" && f.type !== Fe && (M.delayLeave = (N, P, U) => {
          const D = Jr(s, g);
          D[String(g.key)] = g, N._leaveCb = () => {
            P(), N._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = U;
        });
      }
      return l;
    };
  }
}, Hl = Bl;
function Jr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function qn(e, t, n, s) {
  const { appear: r, mode: o, persisted: l = !1, onBeforeEnter: i, onEnter: u, onAfterEnter: f, onEnterCancelled: d, onBeforeLeave: p, onLeave: g, onAfterLeave: _, onLeaveCancelled: T, onBeforeAppear: M, onAppear: N, onAfterAppear: P, onAppearCancelled: U } = t, D = String(e.key), j = Jr(n, e), $ = (E, k) => {
    E && Oe(E, s, 9, k);
  }, q = (E, k) => {
    const B = k[1];
    $(E, k), S(E) ? E.every((J) => J.length <= 1) && B() : E.length <= 1 && B();
  }, oe = {
    mode: o,
    persisted: l,
    beforeEnter(E) {
      let k = i;
      if (!n.isMounted)
        if (r)
          k = M || i;
        else
          return;
      E._leaveCb && E._leaveCb(!0);
      const B = j[D];
      B && lt(e, B) && B.el._leaveCb && B.el._leaveCb(), $(k, [E]);
    },
    enter(E) {
      let k = u, B = f, J = d;
      if (!n.isMounted)
        if (r)
          k = N || u, B = P || f, J = U || d;
        else
          return;
      let _e = !1;
      const Te = E._enterCb = (ht) => {
        _e || (_e = !0, ht ? $(J, [E]) : $(B, [E]), oe.delayedLeave && oe.delayedLeave(), E._enterCb = void 0);
      };
      k ? q(k, [E, Te]) : Te();
    },
    leave(E, k) {
      const B = String(e.key);
      if (E._enterCb && E._enterCb(!0), n.isUnmounting)
        return k();
      $(p, [E]);
      let J = !1;
      const _e = E._leaveCb = (Te) => {
        J || (J = !0, k(), Te ? $(T, [E]) : $(_, [E]), E._leaveCb = void 0, j[B] === e && delete j[B]);
      };
      j[B] = e, g ? q(g, [E, _e]) : _e();
    },
    clone(E) {
      return qn(E, t, n, s);
    }
  };
  return oe;
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
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    const i = n == null ? l.key : String(n) + String(l.key != null ? l.key : o);
    l.type === fe ? (l.patchFlag & 128 && r++, s = s.concat(Qr(l.children, t, i))) : (t || l.type !== Fe) && s.push(i != null ? Ge(l, { key: i }) : l);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
const cn = (e) => !!e.type.__asyncLoader, Tn = (e) => e.type.__isKeepAlive;
function Ul(e, t) {
  Yr(e, "a", t);
}
function $l(e, t) {
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
      Tn(r.parent.vnode) && Dl(s, t, n, r), r = r.parent;
  }
}
function Dl(e, t, n, s) {
  const r = An(t, e, s, !0);
  In(() => {
    fs(s[t], r);
  }, n);
}
function An(e, t, n = ae, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Mt(), Ct(n);
      const i = Oe(t, n, e, l);
      return ft(), Nt(), i;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const We = (e) => (t, n = ae) => (!qt || e === "sp") && An(e, t, n), Kl = We("bm"), Jt = We("m"), Vl = We("bu"), Wl = We("u"), Xr = We("bum"), In = We("um"), ql = We("sp"), zl = We("rtg"), Jl = We("rtc");
function Ql(e, t = ae) {
  An("ec", e, t);
}
function mn(e, t) {
  const n = Se;
  if (n === null)
    return e;
  const s = Nn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, u, f = G] = t[o];
    H(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && ct(i), r.push({
      dir: l,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: u,
      modifiers: f
    });
  }
  return e;
}
function nt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const i = r[l];
    o && (i.oldValue = o[l].value);
    let u = i.dir[s];
    u && (Mt(), Oe(u, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Nt());
  }
}
const Yl = Symbol();
function un(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (S(e) || ce(e)) {
    r = new Array(e.length);
    for (let l = 0, i = e.length; l < i; l++)
      r[l] = t(e[l], l, void 0, o && o[l]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o && o[l]);
  } else if (re(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (l, i) => t(l, i, void 0, o && o[i]));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let i = 0, u = l.length; i < u; i++) {
        const f = l[i];
        r[i] = t(e[f], f, i, o && o[i]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
const Jn = (e) => e ? co(e) ? Nn(e) || e.proxy : Jn(e.parent) : null, vn = /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
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
  $nextTick: (e) => e.n || (e.n = pn.bind(e.proxy)),
  $watch: (e) => Rl.bind(e)
}), Xl = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: l, type: i, appContext: u } = e;
    let f;
    if (t[0] !== "$") {
      const _ = l[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (s !== G && K(s, t))
          return l[t] = 1, s[t];
        if (r !== G && K(r, t))
          return l[t] = 2, r[t];
        if ((f = e.propsOptions[0]) && K(f, t))
          return l[t] = 3, o[t];
        if (n !== G && K(n, t))
          return l[t] = 4, n[t];
        Qn && (l[t] = 0);
      }
    }
    const d = vn[t];
    let p, g;
    if (d)
      return t === "$attrs" && xe(e, "get", t), d(e);
    if ((p = i.__cssModules) && (p = p[t]))
      return p;
    if (n !== G && K(n, t))
      return l[t] = 4, n[t];
    if (g = u.config.globalProperties, K(g, t))
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return r !== G && K(r, t) ? (r[t] = n, !0) : s !== G && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, l) {
    let i;
    return !!n[l] || e !== G && K(e, l) || t !== G && K(t, l) || (i = o[0]) && K(i, l) || K(s, l) || K(vn, l) || K(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Qn = !0;
function Zl(e) {
  const t = xs(e), n = e.proxy, s = e.ctx;
  Qn = !1, t.beforeCreate && Vs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: l,
    watch: i,
    provide: u,
    inject: f,
    created: d,
    beforeMount: p,
    mounted: g,
    beforeUpdate: _,
    updated: T,
    activated: M,
    deactivated: N,
    beforeDestroy: P,
    beforeUnmount: U,
    destroyed: D,
    unmounted: j,
    render: $,
    renderTracked: q,
    renderTriggered: oe,
    errorCaptured: E,
    serverPrefetch: k,
    expose: B,
    inheritAttrs: J,
    components: _e,
    directives: Te,
    filters: ht
  } = t;
  if (f && Gl(f, s, null, e.appContext.config.unwrapInjectedRef), l)
    for (const te in l) {
      const Q = l[te];
      H(Q) && (s[te] = Q.bind(n));
    }
  if (r) {
    const te = r.call(n, n);
    re(te) && (e.data = vs(te));
  }
  if (Qn = !0, o)
    for (const te in o) {
      const Q = o[te], Ce = H(Q) ? Q.bind(n, n) : H(Q.get) ? Q.get.bind(n, n) : Pe, F = !H(Q) && H(Q.set) ? Q.set.bind(n) : Pe, R = Ne({
        get: Ce,
        set: F
      });
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => R.value,
        set: (Y) => R.value = Y
      });
    }
  if (i)
    for (const te in i)
      Zr(i[te], s, n, te);
  if (u) {
    const te = H(u) ? u.call(n) : u;
    Reflect.ownKeys(te).forEach((Q) => {
      Fl(Q, te[Q]);
    });
  }
  d && Vs(d, e, "c");
  function de(te, Q) {
    S(Q) ? Q.forEach((Ce) => te(Ce.bind(n))) : Q && te(Q.bind(n));
  }
  if (de(Kl, p), de(Jt, g), de(Vl, _), de(Wl, T), de(Ul, M), de($l, N), de(Ql, E), de(Jl, q), de(zl, oe), de(Xr, U), de(In, j), de(ql, k), S(B))
    if (B.length) {
      const te = e.exposed || (e.exposed = {});
      B.forEach((Q) => {
        Object.defineProperty(te, Q, {
          get: () => n[Q],
          set: (Ce) => n[Q] = Ce
        });
      });
    } else
      e.exposed || (e.exposed = {});
  $ && e.render === Pe && (e.render = $), J != null && (e.inheritAttrs = J), _e && (e.components = _e), Te && (e.directives = Te);
}
function Gl(e, t, n = Pe, s = !1) {
  S(e) && (e = Yn(e));
  for (const r in e) {
    const o = e[r];
    let l;
    re(o) ? "default" in o ? l = Rn(o.from || r, o.default, !0) : l = Rn(o.from || r) : l = Rn(o), ue(l) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[r] = l;
  }
}
function Vs(e, t, n) {
  Oe(S(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zr(e, t, n, s) {
  const r = s.includes(".") ? zr(n, s) : () => n[s];
  if (ce(e)) {
    const o = t[e];
    H(o) && Xe(r, o);
  } else if (H(e))
    Xe(r, e.bind(n));
  else if (re(e))
    if (S(e))
      e.forEach((o) => Zr(o, t, n, s));
    else {
      const o = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(o) && Xe(r, o, e);
    }
}
function xs(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: l } } = e.appContext, i = o.get(t);
  let u;
  return i ? u = i : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((f) => yn(u, f, l, !0)), yn(u, t, l)), re(t) && o.set(t, u), u;
}
function yn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && yn(e, o, n, !0), r && r.forEach((l) => yn(e, l, n, !0));
  for (const l in t)
    if (!(s && l === "expose")) {
      const i = ei[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
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
    return pe(H(e) ? e.call(this, this) : e, H(t) ? t.call(this, this) : t);
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
  const r = {}, o = {};
  an(o, Mn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Gr(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : pl(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ri(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: l } } = e, i = W(r), [u] = e.propsOptions;
  let f = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let g = d[p];
        if (En(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (u)
          if (K(o, g))
            _ !== o[g] && (o[g] = _, f = !0);
          else {
            const T = wt(g);
            r[T] = Xn(u, i, T, _, e, !1);
          }
        else
          _ !== o[g] && (o[g] = _, f = !0);
      }
    }
  } else {
    Gr(e, t, r, o) && (f = !0);
    let d;
    for (const p in i)
      (!t || !K(t, p) && ((d = It(p)) === p || !K(t, d))) && (u ? n && (n[p] !== void 0 || n[d] !== void 0) && (r[p] = Xn(u, i, p, void 0, e, !0)) : delete r[p]);
    if (o !== i)
      for (const p in o)
        (!t || !K(t, p) && !0) && (delete o[p], f = !0);
  }
  f && Ve(e, "set", "$attrs");
}
function Gr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let l = !1, i;
  if (t)
    for (let u in t) {
      if (on(u))
        continue;
      const f = t[u];
      let d;
      r && K(r, d = wt(u)) ? !o || !o.includes(d) ? n[d] = f : (i || (i = {}))[d] = f : En(e.emitsOptions, u) || (!(u in s) || f !== s[u]) && (s[u] = f, l = !0);
    }
  if (o) {
    const u = W(n), f = i || G;
    for (let d = 0; d < o.length; d++) {
      const p = o[d];
      n[p] = Xn(r, u, p, f[p], e, !K(f, p));
    }
  }
  return l;
}
function Xn(e, t, n, s, r, o) {
  const l = e[n];
  if (l != null) {
    const i = K(l, "default");
    if (i && s === void 0) {
      const u = l.default;
      if (l.type !== Function && H(u)) {
        const { propsDefaults: f } = r;
        n in f ? s = f[n] : (Ct(r), s = f[n] = u.call(null, t), ft());
      } else
        s = u;
    }
    l[0] && (o && !i ? s = !1 : l[1] && (s === "" || s === It(n)) && (s = !0));
  }
  return s;
}
function eo(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, i = [];
  let u = !1;
  if (!H(e)) {
    const d = (p) => {
      u = !0;
      const [g, _] = eo(p, t, !0);
      pe(l, g), _ && i.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !u)
    return re(e) && s.set(e, vt), vt;
  if (S(o))
    for (let d = 0; d < o.length; d++) {
      const p = wt(o[d]);
      qs(p) && (l[p] = G);
    }
  else if (o)
    for (const d in o) {
      const p = wt(d);
      if (qs(p)) {
        const g = o[d], _ = l[p] = S(g) || H(g) ? { type: g } : g;
        if (_) {
          const T = Qs(Boolean, _.type), M = Qs(String, _.type);
          _[0] = T > -1, _[1] = M < 0 || T < M, (T > -1 || K(_, "default")) && i.push(p);
        }
      }
    }
  const f = [l, i];
  return re(e) && s.set(e, f), f;
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
  return S(t) ? t.findIndex((n) => Js(n, e)) : H(t) && Js(t, e) ? 0 : -1;
}
const to = (e) => e[0] === "_" || e === "$stable", Cs = (e) => S(e) ? e.map(He) : [He(e)], oi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Al((...r) => Cs(t(...r)), n);
  return s._c = !1, s;
}, no = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (to(r))
      continue;
    const o = e[r];
    if (H(o))
      t[r] = oi(r, o, s);
    else if (o != null) {
      const l = Cs(o);
      t[r] = () => l;
    }
  }
}, so = (e, t) => {
  const n = Cs(t);
  e.slots.default = () => n;
}, li = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = W(t), an(t, "_", n)) : no(t, e.slots = {});
  } else
    e.slots = {}, t && so(e, t);
  an(e.slots, Mn, 1);
}, ii = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, l = G;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? o = !1 : (pe(r, t), !n && i === 1 && delete r._) : (o = !t.$stable, no(t, r)), l = t;
  } else
    t && (so(e, t), l = { default: 1 });
  if (o)
    for (const i in r)
      !to(i) && !(i in l) && delete r[i];
};
function ro() {
  return {
    app: null,
    config: {
      isNativeTag: ko,
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
    H(s) || (s = Object.assign({}, s)), r != null && !re(r) && (r = null);
    const o = ro(), l = /* @__PURE__ */ new Set();
    let i = !1;
    const u = o.app = {
      _uid: ci++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ai,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...d) {
        return l.has(f) || (f && H(f.install) ? (l.add(f), f.install(u, ...d)) : H(f) && (l.add(f), f(u, ...d))), u;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), u;
      },
      component(f, d) {
        return d ? (o.components[f] = d, u) : o.components[f];
      },
      directive(f, d) {
        return d ? (o.directives[f] = d, u) : o.directives[f];
      },
      mount(f, d, p) {
        if (!i) {
          const g = Ke(s, r);
          return g.appContext = o, d && t ? t(g, f) : e(g, f, p), i = !0, u._container = f, f.__vue_app__ = u, Nn(g.component) || g.component.proxy;
        }
      },
      unmount() {
        i && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, d) {
        return o.provides[f] = d, u;
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
  if (cn(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Nn(s.component) || s.component.proxy : s.el, l = r ? null : o, { i, r: u } = e, f = t && t.r, d = i.refs === G ? i.refs = {} : i.refs, p = i.setupState;
  if (f != null && f !== u && (ce(f) ? (d[f] = null, K(p, f) && (p[f] = null)) : ue(f) && (f.value = null)), H(u))
    Ye(u, i, 12, [l, d]);
  else {
    const g = ce(u), _ = ue(u);
    if (g || _) {
      const T = () => {
        if (e.f) {
          const M = g ? d[u] : u.value;
          r ? S(M) && fs(M, o) : S(M) ? M.includes(o) || M.push(o) : g ? (d[u] = [o], K(p, u) && (p[u] = d[u])) : (u.value = [o], e.k && (d[e.k] = u.value));
        } else
          g ? (d[u] = l, K(p, u) && (p[u] = l)) : _ && (u.value = l, e.k && (d[e.k] = l));
      };
      l ? (T.id = -1, ye(T, n)) : T();
    }
  }
}
const ye = Pl;
function fi(e) {
  return ai(e);
}
function ai(e, t) {
  const n = Bo();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: l, createText: i, createComment: u, setText: f, setElementText: d, parentNode: p, nextSibling: g, setScopeId: _ = Pe, cloneNode: T, insertStaticContent: M } = e, N = (c, a, h, v = null, m = null, w = null, C = !1, b = null, x = !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !lt(c, a) && (v = tt(c), ge(c, m, w, !0), c = null), a.patchFlag === -2 && (x = !1, a.dynamicChildren = null);
    const { type: y, ref: A, shapeFlag: O } = a;
    switch (y) {
      case Os:
        P(c, a, h, v);
        break;
      case Fe:
        U(c, a, h, v);
        break;
      case Bn:
        c == null && D(a, h, v, C);
        break;
      case fe:
        Te(c, a, h, v, m, w, C, b, x);
        break;
      default:
        O & 1 ? q(c, a, h, v, m, w, C, b, x) : O & 6 ? ht(c, a, h, v, m, w, C, b, x) : (O & 64 || O & 128) && y.process(c, a, h, v, m, w, C, b, x, pt);
    }
    A != null && m && Zn(A, c && c.ref, w, a || c, !a);
  }, P = (c, a, h, v) => {
    if (c == null)
      s(a.el = i(a.children), h, v);
    else {
      const m = a.el = c.el;
      a.children !== c.children && f(m, a.children);
    }
  }, U = (c, a, h, v) => {
    c == null ? s(a.el = u(a.children || ""), h, v) : a.el = c.el;
  }, D = (c, a, h, v) => {
    [c.el, c.anchor] = M(c.children, a, h, v, c.el, c.anchor);
  }, j = ({ el: c, anchor: a }, h, v) => {
    let m;
    for (; c && c !== a; )
      m = g(c), s(c, h, v), c = m;
    s(a, h, v);
  }, $ = ({ el: c, anchor: a }) => {
    let h;
    for (; c && c !== a; )
      h = g(c), r(c), c = h;
    r(a);
  }, q = (c, a, h, v, m, w, C, b, x) => {
    C = C || a.type === "svg", c == null ? oe(a, h, v, m, w, C, b, x) : B(c, a, m, w, C, b, x);
  }, oe = (c, a, h, v, m, w, C, b) => {
    let x, y;
    const { type: A, props: O, shapeFlag: I, transition: L, patchFlag: V, dirs: X } = c;
    if (c.el && T !== void 0 && V === -1)
      x = c.el = T(c.el);
    else {
      if (x = c.el = l(c.type, w, O && O.is, O), I & 8 ? d(x, c.children) : I & 16 && k(c.children, x, null, v, m, w && A !== "foreignObject", C, b), X && nt(c, null, v, "created"), O) {
        for (const ne in O)
          ne !== "value" && !on(ne) && o(x, ne, null, O[ne], w, c.children, v, m, ve);
        "value" in O && o(x, "value", null, O.value), (y = O.onVnodeBeforeMount) && je(y, v, c);
      }
      E(x, c, c.scopeId, C, v);
    }
    X && nt(c, null, v, "beforeMount");
    const Z = (!m || m && !m.pendingBranch) && L && !L.persisted;
    Z && L.beforeEnter(x), s(x, a, h), ((y = O && O.onVnodeMounted) || Z || X) && ye(() => {
      y && je(y, v, c), Z && L.enter(x), X && nt(c, null, v, "mounted");
    }, m);
  }, E = (c, a, h, v, m) => {
    if (h && _(c, h), v)
      for (let w = 0; w < v.length; w++)
        _(c, v[w]);
    if (m) {
      let w = m.subTree;
      if (a === w) {
        const C = m.vnode;
        E(c, C, C.scopeId, C.slotScopeIds, m.parent);
      }
    }
  }, k = (c, a, h, v, m, w, C, b, x = 0) => {
    for (let y = x; y < c.length; y++) {
      const A = c[y] = b ? Je(c[y]) : He(c[y]);
      N(null, A, a, h, v, m, w, C, b);
    }
  }, B = (c, a, h, v, m, w, C) => {
    const b = a.el = c.el;
    let { patchFlag: x, dynamicChildren: y, dirs: A } = a;
    x |= c.patchFlag & 16;
    const O = c.props || G, I = a.props || G;
    let L;
    h && st(h, !1), (L = I.onVnodeBeforeUpdate) && je(L, h, a, c), A && nt(a, c, h, "beforeUpdate"), h && st(h, !0);
    const V = m && a.type !== "foreignObject";
    if (y ? J(c.dynamicChildren, y, b, h, v, V, w) : C || Ce(c, a, b, null, h, v, V, w, !1), x > 0) {
      if (x & 16)
        _e(b, a, O, I, h, v, m);
      else if (x & 2 && O.class !== I.class && o(b, "class", null, I.class, m), x & 4 && o(b, "style", O.style, I.style, m), x & 8) {
        const X = a.dynamicProps;
        for (let Z = 0; Z < X.length; Z++) {
          const ne = X[Z], Ae = O[ne], gt = I[ne];
          (gt !== Ae || ne === "value") && o(b, ne, Ae, gt, m, c.children, h, v, ve);
        }
      }
      x & 1 && c.children !== a.children && d(b, a.children);
    } else
      !C && y == null && _e(b, a, O, I, h, v, m);
    ((L = I.onVnodeUpdated) || A) && ye(() => {
      L && je(L, h, a, c), A && nt(a, c, h, "updated");
    }, v);
  }, J = (c, a, h, v, m, w, C) => {
    for (let b = 0; b < a.length; b++) {
      const x = c[b], y = a[b], A = x.el && (x.type === fe || !lt(x, y) || x.shapeFlag & 70) ? p(x.el) : h;
      N(x, y, A, null, v, m, w, C, !0);
    }
  }, _e = (c, a, h, v, m, w, C) => {
    if (h !== v) {
      for (const b in v) {
        if (on(b))
          continue;
        const x = v[b], y = h[b];
        x !== y && b !== "value" && o(c, b, y, x, C, a.children, m, w, ve);
      }
      if (h !== G)
        for (const b in h)
          !on(b) && !(b in v) && o(c, b, h[b], null, C, a.children, m, w, ve);
      "value" in v && o(c, "value", h.value, v.value);
    }
  }, Te = (c, a, h, v, m, w, C, b, x) => {
    const y = a.el = c ? c.el : i(""), A = a.anchor = c ? c.anchor : i("");
    let { patchFlag: O, dynamicChildren: I, slotScopeIds: L } = a;
    L && (b = b ? b.concat(L) : L), c == null ? (s(y, h, v), s(A, h, v), k(a.children, h, A, m, w, C, b, x)) : O > 0 && O & 64 && I && c.dynamicChildren ? (J(c.dynamicChildren, I, h, m, w, C, b), (a.key != null || m && a === m.subTree) && Es(c, a, !0)) : Ce(c, a, h, A, m, w, C, b, x);
  }, ht = (c, a, h, v, m, w, C, b, x) => {
    a.slotScopeIds = b, c == null ? a.shapeFlag & 512 ? m.ctx.activate(a, h, v, C, x) : St(a, h, v, m, w, C, x) : de(c, a, x);
  }, St = (c, a, h, v, m, w, C) => {
    const b = c.component = wi(c, v, m);
    if (Tn(c) && (b.ctx.renderer = pt), xi(b), b.asyncDep) {
      if (m && m.registerDep(b, te), !c.el) {
        const x = b.subTree = Ke(Fe);
        U(null, x, a, h);
      }
      return;
    }
    te(b, c, a, h, m, w, C);
  }, de = (c, a, h) => {
    const v = a.component = c.component;
    if (Nl(c, a, h))
      if (v.asyncDep && !v.asyncResolved) {
        Q(v, a, h);
        return;
      } else
        v.next = a, Cl(v.update), v.update();
    else
      a.el = c.el, v.vnode = a;
  }, te = (c, a, h, v, m, w, C) => {
    const b = () => {
      if (c.isMounted) {
        let { next: A, bu: O, u: I, parent: L, vnode: V } = c, X = A, Z;
        st(c, !1), A ? (A.el = V.el, Q(c, A, C)) : A = V, O && ln(O), (Z = A.props && A.props.onVnodeBeforeUpdate) && je(Z, L, A, V), st(c, !0);
        const ne = Ln(c), Ae = c.subTree;
        c.subTree = ne, N(
          Ae,
          ne,
          p(Ae.el),
          tt(Ae),
          c,
          m,
          w
        ), A.el = ne.el, X === null && Sl(c, ne.el), I && ye(I, m), (Z = A.props && A.props.onVnodeUpdated) && ye(() => je(Z, L, A, V), m);
      } else {
        let A;
        const { el: O, props: I } = a, { bm: L, m: V, parent: X } = c, Z = cn(a);
        if (st(c, !1), L && ln(L), !Z && (A = I && I.onVnodeBeforeMount) && je(A, X, a), st(c, !0), O && Pn) {
          const ne = () => {
            c.subTree = Ln(c), Pn(O, c.subTree, c, m, null);
          };
          Z ? a.type.__asyncLoader().then(
            () => !c.isUnmounted && ne()
          ) : ne();
        } else {
          const ne = c.subTree = Ln(c);
          N(null, ne, h, v, c, m, w), a.el = ne.el;
        }
        if (V && ye(V, m), !Z && (A = I && I.onVnodeMounted)) {
          const ne = a;
          ye(() => je(A, X, ne), m);
        }
        (a.shapeFlag & 256 || X && cn(X.vnode) && X.vnode.shapeFlag & 256) && c.a && ye(c.a, m), c.isMounted = !0, a = h = v = null;
      }
    }, x = c.effect = new hs(
      b,
      () => ws(y),
      c.scope
    ), y = c.update = () => x.run();
    y.id = c.uid, st(c, !0), y();
  }, Q = (c, a, h) => {
    a.component = c;
    const v = c.vnode.props;
    c.vnode = a, c.next = null, ri(c, a.props, v, h), ii(c, a.children, h), Mt(), Us(), Nt();
  }, Ce = (c, a, h, v, m, w, C, b, x = !1) => {
    const y = c && c.children, A = c ? c.shapeFlag : 0, O = a.children, { patchFlag: I, shapeFlag: L } = a;
    if (I > 0) {
      if (I & 128) {
        R(y, O, h, v, m, w, C, b, x);
        return;
      } else if (I & 256) {
        F(y, O, h, v, m, w, C, b, x);
        return;
      }
    }
    L & 8 ? (A & 16 && ve(y, m, w), O !== y && d(h, O)) : A & 16 ? L & 16 ? R(y, O, h, v, m, w, C, b, x) : ve(y, m, w, !0) : (A & 8 && d(h, ""), L & 16 && k(O, h, v, m, w, C, b, x));
  }, F = (c, a, h, v, m, w, C, b, x) => {
    c = c || vt, a = a || vt;
    const y = c.length, A = a.length, O = Math.min(y, A);
    let I;
    for (I = 0; I < O; I++) {
      const L = a[I] = x ? Je(a[I]) : He(a[I]);
      N(c[I], L, h, null, m, w, C, b, x);
    }
    y > A ? ve(c, m, w, !0, !1, O) : k(a, h, v, m, w, C, b, x, O);
  }, R = (c, a, h, v, m, w, C, b, x) => {
    let y = 0;
    const A = a.length;
    let O = c.length - 1, I = A - 1;
    for (; y <= O && y <= I; ) {
      const L = c[y], V = a[y] = x ? Je(a[y]) : He(a[y]);
      if (lt(L, V))
        N(L, V, h, null, m, w, C, b, x);
      else
        break;
      y++;
    }
    for (; y <= O && y <= I; ) {
      const L = c[O], V = a[I] = x ? Je(a[I]) : He(a[I]);
      if (lt(L, V))
        N(L, V, h, null, m, w, C, b, x);
      else
        break;
      O--, I--;
    }
    if (y > O) {
      if (y <= I) {
        const L = I + 1, V = L < A ? a[L].el : v;
        for (; y <= I; )
          N(null, a[y] = x ? Je(a[y]) : He(a[y]), h, V, m, w, C, b, x), y++;
      }
    } else if (y > I)
      for (; y <= O; )
        ge(c[y], m, w, !0), y++;
    else {
      const L = y, V = y, X = /* @__PURE__ */ new Map();
      for (y = V; y <= I; y++) {
        const be = a[y] = x ? Je(a[y]) : He(a[y]);
        be.key != null && X.set(be.key, y);
      }
      let Z, ne = 0;
      const Ae = I - V + 1;
      let gt = !1, Is = 0;
      const kt = new Array(Ae);
      for (y = 0; y < Ae; y++)
        kt[y] = 0;
      for (y = L; y <= O; y++) {
        const be = c[y];
        if (ne >= Ae) {
          ge(be, m, w, !0);
          continue;
        }
        let Re;
        if (be.key != null)
          Re = X.get(be.key);
        else
          for (Z = V; Z <= I; Z++)
            if (kt[Z - V] === 0 && lt(be, a[Z])) {
              Re = Z;
              break;
            }
        Re === void 0 ? ge(be, m, w, !0) : (kt[Re - V] = y + 1, Re >= Is ? Is = Re : gt = !0, N(be, a[Re], h, null, m, w, C, b, x), ne++);
      }
      const Ms = gt ? di(kt) : vt;
      for (Z = Ms.length - 1, y = Ae - 1; y >= 0; y--) {
        const be = V + y, Re = a[be], Ns = be + 1 < A ? a[be + 1].el : v;
        kt[y] === 0 ? N(null, Re, h, Ns, m, w, C, b, x) : gt && (Z < 0 || y !== Ms[Z] ? Y(Re, h, Ns, 2) : Z--);
      }
    }
  }, Y = (c, a, h, v, m = null) => {
    const { el: w, type: C, transition: b, children: x, shapeFlag: y } = c;
    if (y & 6) {
      Y(c.component.subTree, a, h, v);
      return;
    }
    if (y & 128) {
      c.suspense.move(a, h, v);
      return;
    }
    if (y & 64) {
      C.move(c, a, h, pt);
      return;
    }
    if (C === fe) {
      s(w, a, h);
      for (let O = 0; O < x.length; O++)
        Y(x[O], a, h, v);
      s(c.anchor, a, h);
      return;
    }
    if (C === Bn) {
      j(c, a, h);
      return;
    }
    if (v !== 2 && y & 1 && b)
      if (v === 0)
        b.beforeEnter(w), s(w, a, h), ye(() => b.enter(w), m);
      else {
        const { leave: O, delayLeave: I, afterLeave: L } = b, V = () => s(w, a, h), X = () => {
          O(w, () => {
            V(), L && L();
          });
        };
        I ? I(w, V, X) : X();
      }
    else
      s(w, a, h);
  }, ge = (c, a, h, v = !1, m = !1) => {
    const { type: w, props: C, ref: b, children: x, dynamicChildren: y, shapeFlag: A, patchFlag: O, dirs: I } = c;
    if (b != null && Zn(b, null, h, c, !0), A & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const L = A & 1 && I, V = !cn(c);
    let X;
    if (V && (X = C && C.onVnodeBeforeUnmount) && je(X, a, c), A & 6)
      Sn(c.component, h, v);
    else {
      if (A & 128) {
        c.suspense.unmount(h, v);
        return;
      }
      L && nt(c, null, a, "beforeUnmount"), A & 64 ? c.type.remove(c, a, h, m, pt, v) : y && (w !== fe || O > 0 && O & 64) ? ve(y, a, h, !1, !0) : (w === fe && O & 384 || !m && A & 16) && ve(x, a, h), v && qe(c);
    }
    (V && (X = C && C.onVnodeUnmounted) || L) && ye(() => {
      X && je(X, a, c), L && nt(c, null, a, "unmounted");
    }, h);
  }, qe = (c) => {
    const { type: a, el: h, anchor: v, transition: m } = c;
    if (a === fe) {
      Le(h, v);
      return;
    }
    if (a === Bn) {
      $(c);
      return;
    }
    const w = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: C, delayLeave: b } = m, x = () => C(h, w);
      b ? b(c.el, w, x) : x();
    } else
      w();
  }, Le = (c, a) => {
    let h;
    for (; c !== a; )
      h = g(c), r(c), c = h;
    r(a);
  }, Sn = (c, a, h) => {
    const { bum: v, scope: m, update: w, subTree: C, um: b } = c;
    v && ln(v), m.stop(), w && (w.active = !1, ge(C, c, a, h)), b && ye(b, a), ye(() => {
      c.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
  }, ve = (c, a, h, v = !1, m = !1, w = 0) => {
    for (let C = w; C < c.length; C++)
      ge(c[C], a, h, v, m);
  }, tt = (c) => c.shapeFlag & 6 ? tt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : g(c.anchor || c.el), Yt = (c, a, h) => {
    c == null ? a._vnode && ge(a._vnode, null, null, !0) : N(a._vnode || null, c, a, null, null, null, h), Us(), Kr(), a._vnode = c;
  }, pt = {
    p: N,
    um: ge,
    m: Y,
    r: qe,
    mt: St,
    mc: k,
    pc: Ce,
    pbc: J,
    n: tt,
    o: e
  };
  let kn, Pn;
  return t && ([kn, Pn] = t(pt)), {
    render: Yt,
    hydrate: kn,
    createApp: ui(Yt, kn)
  };
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Es(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (S(s) && S(r))
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      let i = r[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[o] = Je(r[o]), i.el = l.el), n || Es(l, i));
    }
}
function di(e) {
  const t = e.slice(), n = [0];
  let s, r, o, l, i;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const f = e[s];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, l = n.length - 1; o < l; )
        i = o + l >> 1, e[n[i]] < f ? o = i + 1 : l = i;
      f < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, l = n[o - 1]; o-- > 0; )
    n[o] = l, l = t[l];
  return n;
}
const hi = (e) => e.__isTeleport, Rt = (e) => e && (e.disabled || e.disabled === ""), Ys = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gn = (e, t) => {
  const n = e && e.to;
  return ce(n) ? t ? t(n) : null : n;
}, pi = {
  __isTeleport: !0,
  process(e, t, n, s, r, o, l, i, u, f) {
    const { mc: d, pc: p, pbc: g, o: { insert: _, querySelector: T, createText: M, createComment: N } } = f, P = Rt(t.props);
    let { shapeFlag: U, children: D, dynamicChildren: j } = t;
    if (e == null) {
      const $ = t.el = M(""), q = t.anchor = M("");
      _($, n, s), _(q, n, s);
      const oe = t.target = Gn(t.props, T), E = t.targetAnchor = M("");
      oe && (_(E, oe), l = l || Ys(oe));
      const k = (B, J) => {
        U & 16 && d(D, B, J, r, o, l, i, u);
      };
      P ? k(n, q) : oe && k(oe, E);
    } else {
      t.el = e.el;
      const $ = t.anchor = e.anchor, q = t.target = e.target, oe = t.targetAnchor = e.targetAnchor, E = Rt(e.props), k = E ? n : q, B = E ? $ : oe;
      if (l = l || Ys(q), j ? (g(e.dynamicChildren, j, k, r, o, l, i), Es(e, t, !0)) : u || p(e, t, k, B, r, o, l, i, !1), P)
        E || sn(t, n, $, f, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const J = t.target = Gn(t.props, T);
        J && sn(t, J, null, f, 0);
      } else
        E && sn(t, q, oe, f, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: o } }, l) {
    const { shapeFlag: i, children: u, anchor: f, targetAnchor: d, target: p, props: g } = e;
    if (p && o(d), (l || !Rt(g)) && (o(f), i & 16))
      for (let _ = 0; _ < u.length; _++) {
        const T = u[_];
        r(T, t, n, !0, !!T.dynamicChildren);
      }
  },
  move: sn,
  hydrate: gi
};
function sn(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: i, shapeFlag: u, children: f, props: d } = e, p = o === 2;
  if (p && s(l, t, n), (!p || Rt(d)) && u & 16)
    for (let g = 0; g < f.length; g++)
      r(f[g], t, n, 2);
  p && s(i, t, n);
}
function gi(e, t, n, s, r, o, { o: { nextSibling: l, parentNode: i, querySelector: u } }, f) {
  const d = t.target = Gn(t.props, u);
  if (d) {
    const p = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Rt(t.props))
        t.anchor = f(l(e), t, i(e), n, s, r, o), t.targetAnchor = p;
      else {
        t.anchor = l(e);
        let g = p;
        for (; g; )
          if (g = l(g), g && g.nodeType === 8 && g.data === "teleport anchor") {
            t.targetAnchor = g, d._lpa = t.targetAnchor && l(t.targetAnchor);
            break;
          }
        f(p, t, d, n, s, r, o);
      }
  }
  return t.anchor && l(t.anchor);
}
const es = pi, fe = Symbol(void 0), Os = Symbol(void 0), Fe = Symbol(void 0), Bn = Symbol(void 0), jt = [];
let ke = null;
function ee(e = !1) {
  jt.push(ke = e ? null : []);
}
function mi() {
  jt.pop(), ke = jt[jt.length - 1] || null;
}
let Vt = 1;
function Xs(e) {
  Vt += e;
}
function oo(e) {
  return e.dynamicChildren = Vt > 0 ? ke || vt : null, mi(), Vt > 0 && ke && ke.push(e), e;
}
function le(e, t, n, s, r, o) {
  return oo(ie(e, t, n, s, r, o, !0));
}
function _n(e, t, n, s, r) {
  return oo(Ke(e, t, n, s, r, !0));
}
function vi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mn = "__vInternal", lo = ({ key: e }) => e != null ? e : null, fn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ce(e) || ue(e) || H(e) ? { i: Se, r: e, k: t, f: !!n } : e : null;
function ie(e, t = null, n = null, s = 0, r = null, o = e === fe ? 0 : 1, l = !1, i = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lo(t),
    ref: t && fn(t),
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return i ? (As(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= ce(n) ? 8 : 16), Vt > 0 && !l && ke && (u.patchFlag > 0 || o & 6) && u.patchFlag !== 32 && ke.push(u), u;
}
const Ke = yi;
function yi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Yl) && (e = Fe), vi(e)) {
    const i = Ge(e, t, !0);
    return n && As(i, n), Vt > 0 && !o && ke && (i.shapeFlag & 6 ? ke[ke.indexOf(e)] = i : ke.push(i)), i.patchFlag |= -2, i;
  }
  if (Ti(e) && (e = e.__vccOpts), t) {
    t = Ts(t);
    let { class: i, style: u } = t;
    i && !ce(i) && (t.class = Tt(i)), re(u) && (Fr(u) && !S(u) && (u = pe({}, u)), t.style = Ot(u));
  }
  const l = ce(e) ? 1 : kl(e) ? 128 : hi(e) ? 64 : re(e) ? 4 : H(e) ? 2 : 0;
  return ie(e, t, n, s, r, l, o, !0);
}
function Ts(e) {
  return e ? Fr(e) || Mn in e ? pe({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: l } = e, i = t ? Wt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && lo(i),
    ref: t && t.ref ? n && r ? S(r) ? r.concat(fn(t)) : [r, fn(t)] : fn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== fe ? o === -1 ? 16 : o | 16 : o,
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
function Ie(e = "", t = !1) {
  return t ? (ee(), _n(Fe, null, e)) : Ke(Fe, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? Ke(Fe) : S(e) ? Ke(
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
      !r && !(Mn in t) ? t._ctx = Se : r === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    H(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ts(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Wt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Tt([t.class, s.class]));
      else if (r === "style")
        t.style = Ot([t.style, s.style]);
      else if (bn(r)) {
        const o = t[r], l = s[r];
        l && o !== l && !(S(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
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
const _i = ro();
let bi = 0;
function wi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || _i, o = {
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
    scope: new Ho(!0),
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
    propsOptions: eo(s, r),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Tl.bind(null, o), e.ce && e.ce(o), o;
}
let ae = null;
const io = () => ae || Se, Ct = (e) => {
  ae = e, e.scope.on();
}, ft = () => {
  ae && ae.scope.off(), ae = null;
};
function co(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function xi(e, t = !1) {
  qt = t;
  const { props: n, children: s } = e.vnode, r = co(e);
  si(e, n, r, t), li(e, s);
  const o = r ? Ci(e, t) : void 0;
  return qt = !1, o;
}
function Ci(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Lr(new Proxy(e.ctx, Xl));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Oi(e) : null;
    Ct(e), Mt();
    const o = Ye(s, e, 0, [e.props, r]);
    if (Nt(), ft(), _r(o)) {
      if (o.then(ft, ft), t)
        return o.then((l) => {
          Zs(e, l, t);
        }).catch((l) => {
          Cn(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Zs(e, o, t);
  } else
    uo(e, t);
}
function Zs(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Hr(t)), uo(e, n);
}
let Gs;
function uo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Gs && !s.render) {
      const r = s.template || xs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: i, compilerOptions: u } = s, f = pe(pe({
          isCustomElement: o,
          delimiters: i
        }, l), u);
        s.render = Gs(r, f);
      }
    }
    e.render = s.render || Pe;
  }
  Ct(e), Mt(), Zl(e), Nt(), ft();
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
function Nn(e) {
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
  return H(e) && "__vccOpts" in e;
}
const Ne = (e, t) => bl(e, t, qt), Ai = "3.2.39", Ii = "http://www.w3.org/2000/svg", it = typeof document < "u" ? document : null, er = it && /* @__PURE__ */ it.createElement("template"), Mi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? it.createElementNS(Ii, e) : it.createElement(e, n ? { is: n } : void 0);
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
  insertStaticContent(e, t, n, s, r, o) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
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
      l ? l.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Ni(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Si(e, t, n) {
  const s = e.style, r = ce(n);
  if (n && !r) {
    for (const o in n)
      ns(s, o, n[o]);
    if (t && !ce(t))
      for (const o in t)
        n[o] == null && ns(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const tr = /\s*!important$/;
function ns(e, t, n) {
  if (S(n))
    n.forEach((s) => ns(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ki(e, t);
    tr.test(n) ? e.setProperty(It(s), n.replace(tr, ""), "important") : e[s] = n;
  }
}
const nr = ["Webkit", "Moz", "ms"], Hn = {};
function ki(e, t) {
  const n = Hn[t];
  if (n)
    return n;
  let s = wt(t);
  if (s !== "filter" && s in e)
    return Hn[t] = s;
  s = xr(s);
  for (let r = 0; r < nr.length; r++) {
    const o = nr[r] + s;
    if (o in e)
      return Hn[t] = o;
  }
  return t;
}
const sr = "http://www.w3.org/1999/xlink";
function Pi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(sr, t.slice(6, t.length)) : e.setAttributeNS(sr, t, n);
  else {
    const o = Ao(t);
    n == null || o && !mr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Fi(e, t, n, s, r, o, l) {
  if (t === "innerHTML" || t === "textContent") {
    s && l(s, r, o), e[t] = n == null ? "" : n;
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
const [fo, Li] = /* @__PURE__ */ (() => {
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
}, Bi = () => ss || (Ri.then(ji), ss = fo());
function De(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Hi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Ui(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}), l = o[t];
  if (s && l)
    l.value = s;
  else {
    const [i, u] = $i(t);
    if (s) {
      const f = o[t] = Di(s, r);
      De(e, i, f, u);
    } else
      l && (Hi(e, i, l, u), o[t] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t];
}
function Di(e, t) {
  const n = (s) => {
    const r = s.timeStamp || fo();
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
const or = /^on[a-z]/, Vi = (e, t, n, s, r = !1, o, l, i, u) => {
  t === "class" ? Ni(e, s, r) : t === "style" ? Si(e, n, s) : bn(t) ? us(t) || Ui(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wi(e, t, s, r)) ? Fi(e, t, s, o, l, i, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Pi(e, t, s, r));
};
function Wi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && or.test(t) && H(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || or.test(t) && ce(n) ? !1 : t in e;
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
Hl.props;
const et = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return S(t) ? (n) => ln(t, n) : t;
};
function zi(e) {
  e.target.composing = !0;
}
function lr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = et(r);
    const o = s || r.props && r.props.type === "number";
    De(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), o && (i = dn(i)), e._assign(i);
    }), n && De(e, "change", () => {
      e.value = e.value.trim();
    }), t || (De(e, "compositionstart", zi), De(e, "compositionend", lr), De(e, "change", lr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e._assign = et(o), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && dn(e.value) === t))
      return;
    const l = t == null ? "" : t;
    e.value !== l && (e.value = l);
  }
}, Ji = {
  deep: !0,
  created(e, t, n) {
    e._assign = et(n), De(e, "change", () => {
      const s = e._modelValue, r = Et(e), o = e.checked, l = e._assign;
      if (S(s)) {
        const i = cs(s, r), u = i !== -1;
        if (o && !u)
          l(s.concat(r));
        else if (!o && u) {
          const f = [...s];
          f.splice(i, 1), l(f);
        }
      } else if (At(s)) {
        const i = new Set(s);
        o ? i.add(r) : i.delete(r), l(i);
      } else
        l(ao(e, o));
    });
  },
  mounted: ir,
  beforeUpdate(e, t, n) {
    e._assign = et(n), ir(e, t, n);
  }
};
function ir(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, S(t) ? e.checked = cs(t, s.props.value) > -1 : At(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = dt(t, ao(e, !0)));
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
      const o = Array.prototype.filter.call(e.options, (l) => l.selected).map((l) => n ? dn(Et(l)) : Et(l));
      e._assign(e.multiple ? r ? new Set(o) : o : o[0]);
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
      const o = e.options[s], l = Et(o);
      if (n)
        S(t) ? o.selected = cs(t, l) > -1 : o.selected = t.has(l);
      else if (dt(Et(o), t)) {
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
function ao(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Xi = {
  created(e, t, n) {
    rn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    rn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    rn(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    rn(e, t, n, s, "updated");
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
function rn(e, t, n, s, r) {
  const l = Zi(e.tagName, n.props && n.props.type)[r];
  l && l(e, t, n, s);
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
}, ho = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const o = ec[t[r]];
    if (o && o(n, t))
      return;
  }
  return e(n, ...s);
}, po = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Pt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Pt(e, !0), s.enter(e)) : s.leave(e, () => {
      Pt(e, !1);
    }) : Pt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Pt(e, t);
  }
};
function Pt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const tc = /* @__PURE__ */ pe({ patchProp: Vi }, Mi);
let ur;
function nc() {
  return ur || (ur = fi(tc));
}
const go = (...e) => {
  const t = nc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = sc(s);
    if (!r)
      return;
    const o = t._component;
    !H(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function sc(e) {
  return ce(e) ? document.querySelector(e) : e;
}
var fr;
const Qt = typeof window < "u";
Qt && ((fr = window == null ? void 0 : window.navigator) == null ? void 0 : fr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rc(e) {
  return typeof e == "function" ? e() : z(e);
}
function oc(e) {
  return e;
}
function lc(e) {
  return $o() ? (Do(e), !0) : !1;
}
function ic(e, t = !0) {
  io() ? Jt(e) : t ? e() : pn(e);
}
function mo(e) {
  var t;
  const n = rc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const cc = Qt ? window : void 0;
Qt && window.document;
Qt && window.navigator;
Qt && window.location;
function uc(e, t = !1) {
  const n = se(), s = () => n.value = Boolean(e());
  return s(), ic(s, t), n;
}
const os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ls = "__vueuse_ssr_handlers__";
os[ls] = os[ls] || {};
os[ls];
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
  const s = n, { window: r = cc } = s, o = dc(s, ["window"]);
  let l;
  const i = uc(() => r && "ResizeObserver" in r), u = () => {
    l && (l.disconnect(), l = void 0);
  }, f = Xe(() => mo(e), (p) => {
    u(), i.value && r && p && (l = new ResizeObserver(t), l.observe(p, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), f();
  };
  return lc(d), {
    isSupported: i,
    stop: d
  };
}
function pc(e, t = { width: 0, height: 0 }, n = {}) {
  const { box: s = "content-box" } = n, r = se(t.width), o = se(t.height);
  return hc(e, ([l]) => {
    const i = s === "border-box" ? l.borderBoxSize : s === "content-box" ? l.contentBoxSize : l.devicePixelContentBoxSize;
    i ? (r.value = i.reduce((u, { inlineSize: f }) => u + f, 0), o.value = i.reduce((u, { blockSize: f }) => u + f, 0)) : (r.value = l.contentRect.width, o.value = l.contentRect.height);
  }, n), Xe(() => mo(e), (l) => {
    r.value = l ? t.width : 0, o.value = l ? t.height : 0;
  }), {
    width: r,
    height: o
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
  linear: oc
}, _c);
function vo(e, t) {
  const n = se(), s = pc(n), r = se([]), o = gl(e), l = se({ start: 0, end: 10 }), { itemHeight: i, overscan: u = 5 } = t, f = (U) => {
    if (typeof i == "number")
      return Math.ceil(U / i);
    const { start: D = 0 } = l.value;
    let j = 0, $ = 0;
    for (let q = D; q < o.value.length; q++)
      if (j += i(q), j >= U) {
        $ = q;
        break;
      }
    return $ - D;
  }, d = (U) => {
    if (typeof i == "number")
      return Math.floor(U / i) + 1;
    let D = 0, j = 0;
    for (let $ = 0; $ < o.value.length; $++)
      if (D += i($), D >= U) {
        j = $;
        break;
      }
    return j + 1;
  }, p = () => {
    const U = n.value;
    if (U) {
      const D = d(U.scrollTop), j = f(U.clientHeight), $ = D - u, q = D + j + u;
      l.value = {
        start: $ < 0 ? 0 : $,
        end: q > o.value.length ? o.value.length : q
      }, r.value = o.value.slice(l.value.start, l.value.end).map((oe, E) => ({
        data: oe,
        index: E + l.value.start
      }));
    }
  };
  Xe([s.width, s.height, e], () => {
    p();
  });
  const g = Ne(() => typeof i == "number" ? o.value.length * i : o.value.reduce((U, D, j) => U + i(j), 0)), _ = (U) => typeof i == "number" ? U * i : o.value.slice(0, U).reduce((j, $, q) => j + i(q), 0), T = (U) => {
    n.value && (n.value.scrollTop = _(U), p());
  }, M = Ne(() => _(l.value.start)), N = Ne(() => ({
    style: {
      width: "100%",
      height: `${g.value - M.value}px`,
      marginTop: `${M.value}px`
    }
  }));
  return {
    list: r,
    scrollTo: T,
    containerProps: {
      ref: n,
      onScroll: () => {
        p();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: N
  };
}
const bc = (e, t) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const n = {
    defaultArray: e.value,
    get: () => e.value,
    push: (s, r, o = null) => {
      const l = e.map.get(s);
      if (l)
        l.value = r, l.data = o;
      else {
        let i = { value: r, key: s, data: o };
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
      s == null && (s = (r, o) => r.value.localeCompare(o.value)), e.value = e.value.sort(s);
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
const yo = (e) => {
  e && (e.style.display = "none", Oo(e));
}, _o = (e, t, n, s) => {
  var u;
  const r = se(/* @__PURE__ */ new Map());
  Kt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let f of n.value)
        r.value.set(f, f);
    }
  });
  const o = se([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let f of o.value)
        o.map.set(f.key, f);
  }, Kt(() => {
    t.value && (o.value = t.value, o.rebuildMap());
  }), e) {
    r.value.clear();
    for (let f of Array.apply(null, e.selectedOptions).map((d) => d.value).filter((d) => d))
      r.value.set(f, f);
    o.value = Array.apply(null, e.options).reduce((f, d) => (f.push({ value: d.text, key: d.value, data: d.dataset }), f), []), o.rebuildMap();
  }
  if (Array.isArray(s))
    for (let f of s)
      r.value.set(f, f);
  else
    s != null && r.value.set(s, s);
  bc(o, (u = e == null ? void 0 : e.id) != null ? u : "extraselect_" + (++wc).toString());
  const l = [];
  return r.value.forEach((f, d) => {
    l.push([d, f]);
  }), { options: o, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [f, d] of l)
      r.value.set(f, d);
  } };
}, gr = async function(e, t = null, n = {}) {
  var o;
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...(o = n.headers) != null ? o : {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, bo = (e, t, n, s, r, o, l = "limited", i = {}) => {
  const u = se(0), f = se(!1), d = Ne(() => f.value || u.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const p = [];
      Kt((g) => {
        if (s.value.length >= r) {
          let _ = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              _ = !p.includes(s.value);
              break;
            case "complete":
              _ = p.reduce((T, M) => T && !s.value.startsWith(M), !0);
              break;
          }
          if (_) {
            f.value = !0;
            const T = setTimeout(() => {
              p.push(s.value), u.value += 1, i.body = { ...i.body, ...o.value }, gr(t, s.value, i).then((M) => {
                e.actions.addRange(M), e.actions.sort(), u.value -= 1, f.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(T);
            });
          }
        }
      });
    } else
      gr(t, null, i).then((p) => {
        e.actions.addRange(p), e.actions.sort();
      });
  return { searchingFlag: d };
}, wo = (e, t) => {
  const n = se(""), s = se([]), r = se({});
  for (let l of t) {
    let i = document.getElementById(l);
    r.value[l] = i == null ? void 0 : i.value, i && i.addEventListener("change", (u) => {
      r.value[l] = u.target.value;
    });
  }
  const o = function(l, i) {
    let u = l.value;
    return Object.keys(r.value).length > 0 && (u = u.filter((f) => {
      var d, p;
      for (let g in r.value)
        if (((d = r.value[g]) != null ? d : "").length > 0 && (!((p = f.data) != null && p.hasOwnProperty(g)) || f.data[g] != r.value[g]))
          return !1;
      return !0;
    })), i.length > 0 && (u = u.filter((f) => f.value.toLowerCase().includes(i.toLowerCase()))), u;
  };
  return Kt(() => {
    s.value = o(e, n.value);
  }), { filterText: n, filteredOptions: s, filterValues: r };
}, xo = (e, t, n, s, r, o, l) => {
  const i = getComputedStyle(document.querySelector("body")).font, u = function(p) {
    const _ = document.createElement("canvas").getContext("2d");
    return _.font = i, _.measureText(p).width;
  }, f = Ne(() => {
    var g, _;
    const p = (g = Xt(s.value).width) != null ? g : 100;
    if (l === "inherit")
      return p;
    if (l == null || l === "dynamic") {
      const T = (_ = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? _ : 16;
      return Math.max(p, Math.max(...e.value.map((M) => u(M.value))) + 20 + T * 3);
    }
    return l;
  }), d = se({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ll(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var p = Xt(s.value), g = Xt(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var g = Xt(o.value);
    let _ = -g.left + p.left;
    const T = window.document.documentElement.clientWidth;
    _ + f.value > T && (_ = T - f.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: f.value.toString() + "px",
      top: (-g.top + p.top + p.height).toString() + "px",
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
}, Ic = { class: "row-input" }, Mc = ["checked"], Nc = /* @__PURE__ */ ie("b", null, "Select all", -1), Sc = { class: "row-input" }, kc = ["checked"], Pc = /* @__PURE__ */ ie("b", null, "Select Filtered", -1), Fc = {
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
    removeIcon: { type: String, default: "X" },
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var te, Q, Ce;
    const n = e, s = Ne(() => {
      var F, R;
      return (R = (F = n.originalNode) == null ? void 0 : F.multiple) != null ? R : n.multiple;
    }), { options: r, selectedOptions: o, onReset: l } = _o(n.originalNode, Vn(n, "options"), Vn(n, "modelValue"), n.initialValue), i = (te = n.originalNode) == null ? void 0 : te.classList, u = Object.values((Ce = (Q = n.originalNode) == null ? void 0 : Q.style) != null ? Ce : {});
    yo(n.originalNode);
    const { filterText: f, filteredOptions: d, filterValues: p } = wo(r, n.filterFields), { searchingFlag: g } = bo(
      r,
      n.url,
      n.searchableUrl,
      f,
      n.minChars,
      p,
      n.fetchMode,
      n.fetchOptions
    ), _ = se(null), T = se(null), M = se(null), N = se(!1), P = se(null), U = function(F) {
      const R = mt(F.target);
      R.push(F.target), !R.includes(_.value) && !R.includes(T.value) && (N.value = !1);
    };
    Jt(() => {
      if (n.dropdownContainer) {
        let F = !1;
        P.value = mt(_.value).find((R) => !!(R instanceof Element && (R.matches(n.dropdownContainer) && (F = !0), F && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(R).position))));
      }
      if (P.value == null && (P.value = document.querySelector("body")), n.originalNode) {
        for (let R of i)
          R != "extraselect" && _.value.classList.add(R);
        for (let R of u)
          _.value.style[R] = n.originalNode.style[R];
        u.includes("background-color") || (_.value.style.backgroundColor = "white");
        let F = mt(_.value, "form").pop();
        F instanceof HTMLElement && F.matches("form") && F.addEventListener("reset", () => setTimeout(l));
      }
      window.document.addEventListener("mousedown", U), window.document.addEventListener("focusin", U);
    }), In(() => {
      window.document.removeEventListener("mousedown", U), window.document.removeEventListener("focusin", U);
    });
    const { dropdownStyle: D, getTextWidth: j } = xo(r, o, N, _, T, P, n.maxWidth), $ = (F) => {
      pn(
        () => {
          var R;
          return (R = n.originalNode) == null ? void 0 : R.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", F);
    }, q = (F) => {
      s.value ? o.value.has(F) ? o.value.delete(F) : o.value.set(F, F) : (o.value.clear(), o.value.set(F, F), N.value = !1), $(Array.from(o.value.keys()));
    }, oe = (F) => {
      E(F, !1), f.value = "";
    }, E = (F, R = null) => {
      R == null && (R = !B.value), R ? (o.value.clear(), r.value.forEach((Y) => o.value.set(Y.key, Y.key))) : o.value.clear(), $(Array.from(o.value.keys()));
    }, k = () => {
      J.value ? d.value.forEach((F) => {
        o.value.has(F.key) && o.value.delete(F.key);
      }) : d.value.forEach((F) => {
        o.value.has(F.key) || o.value.set(F.key, F.key);
      }), $(Array.from(o.value.keys()));
    };
    Xe(N, (F, R) => {
      F != R && (F ? n.search && pn(() => {
        M.value.focus({ focusVisible: !0 });
      }) : f.value = "");
    });
    const B = Ne(() => o.value.size == r.value.length), J = Ne(() => d.value.reduce((F, R) => F && o.value.has(R.key), !0)), _e = Ne(() => o.value.size == 0), Te = Ne(() => {
      var F, R, Y, ge, qe;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (_e.value)
          return "No selection";
        if (!n.searchableUrl && B.value)
          return "All selected";
        const Le = _.value ? getComputedStyle(_.value) : null, Sn = ((F = _.value) == null ? void 0 : F.clientWidth) - parseInt(Le == null ? void 0 : Le.paddingLeft) - parseInt(Le == null ? void 0 : Le.paddingRight);
        let ve = o.value.size + " selected - ", tt = !0;
        for (let Yt of o.value)
          if (tt ? tt = !1 : ve += ", ", ve += (Y = (R = r.map.get(Yt[0])) == null ? void 0 : R.value) != null ? Y : g.value ? "Loading..." : "Value not found", Sn < j(ve))
            return o.value.size + " selected";
        return ve;
      } else
        for (let Le of o.value)
          return (qe = (ge = r.map.get(Le[0])) == null ? void 0 : ge.value) != null ? qe : g.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: ht, containerProps: St, wrapperProps: de } = vo(
      d,
      {
        itemHeight: 32
      }
    );
    return (F, R) => (ee(), le(fe, null, [
      n.showSelected ? (ee(), le("div", xc, [
        (ee(!0), le(fe, null, un(z(o), (Y) => {
          var ge;
          return ee(), le("div", {
            key: Y,
            onClick: (qe) => q(Y[0]),
            class: "selection-badge"
          }, [
            ts(Lt((ge = z(r).find((qe) => qe.key == Y[0])) == null ? void 0 : ge.value) + " ", 1),
            ie("div", {
              class: "selection-remove",
              innerHTML: n.removeIcon
            }, null, 8, Ec)
          ], 8, Cc);
        }), 128))
      ])) : Ie("", !0),
      ie("input", Wt({
        onFocus: R[0] || (R[0] = (Y) => N.value = !0),
        onClick: R[1] || (R[1] = (Y) => N.value = !0),
        ref_key: "inputNode",
        ref: _,
        value: z(Te),
        class: "extra-select extra-select-input",
        readonly: ""
      }, F.$attrs), null, 16, Oc),
      P.value ? (ee(), _n(es, {
        key: 1,
        to: P.value
      }, [
        mn(ie("div", {
          class: Tt(["extra-select dropdown", { searching: z(g) > 0 }]),
          ref_key: "dropdownNode",
          ref: T,
          style: Ot(z(D))
        }, [
          n.search ? (ee(), le("div", Tc, [
            mn(ie("input", {
              ref_key: "searchNode",
              ref: M,
              class: "extra-select-search",
              "onUpdate:modelValue": R[2] || (R[2] = (Y) => ue(f) ? f.value = Y : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [rs, z(f)]
            ])
          ])) : Ie("", !0),
          z(f).length >= n.minChars ? (ee(), le(fe, { key: 1 }, [
            z(s) ? (ee(), le("div", Ac, [
              z(f).length == 0 ? (ee(), le("div", {
                key: 0,
                onClick: E,
                class: "all-select"
              }, [
                ie("div", Ic, [
                  ie("input", {
                    checked: z(B),
                    type: "checkbox"
                  }, null, 8, Mc),
                  Nc
                ])
              ])) : Ie("", !0),
              z(d).length > 0 && z(f).length > 0 ? (ee(), le("div", {
                key: 1,
                onClick: k,
                class: "all-select"
              }, [
                ie("div", Sc, [
                  ie("input", {
                    checked: z(J),
                    type: "checkbox"
                  }, null, 8, kc),
                  Pc
                ])
              ])) : Ie("", !0),
              ie("div", {
                class: "clear",
                onClick: oe
              }, "Clear")
            ])) : Ie("", !0),
            z(d).length == 0 ? (ee(), le("div", Fc, "No matches found")) : Ie("", !0)
          ], 64)) : (ee(), le("div", Lc, "Insert at least " + Lt(n.minChars) + " characters", 1)),
          ie("div", Wt(z(St), { class: "scroller" }), [
            ie("div", vr(Ts(z(de))), [
              (ee(!0), le(fe, null, un(z(ht), (Y) => (ee(), le("button", {
                key: Y.index,
                class: "dropdown-row",
                onClick: ho((ge) => q(Y.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", jc, [
                  z(s) ? (ee(), le("input", {
                    key: 0,
                    checked: z(o).has(Y.data.key),
                    type: "checkbox"
                  }, null, 8, Bc)) : Ie("", !0),
                  ts(" " + Lt(Y.data.value), 1)
                ])
              ], 8, Rc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [po, N.value]
        ])
      ], 8, ["to"])) : Ie("", !0),
      n.originalNode ? (ee(), _n(es, {
        key: 2,
        to: n.originalNode
      }, [
        (ee(!0), le(fe, null, un(z(o), (Y) => (ee(), le("option", {
          key: Y[0],
          selected: "selected",
          value: Y[0]
        }, null, 8, Hc))), 128))
      ], 8, ["to"])) : Ie("", !0)
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
    dropdownContainer: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var $, q, oe;
    const n = e, { options: s } = _o(null, Vn(n, "options"), se([])), r = ($ = n.originalNode) == null ? void 0 : $.classList, o = Object.values((oe = (q = n.originalNode) == null ? void 0 : q.style) != null ? oe : {});
    yo(n.originalNode);
    const { filterText: l, filteredOptions: i, filterValues: u } = wo(s, n.filterFields), { searchingFlag: f } = bo(
      s,
      n.url,
      n.searchableUrl,
      l,
      n.minChars,
      u,
      n.fetchMode,
      n.fetchOptions
    ), d = se(null), p = se(null), g = se(!1), _ = se(null), T = function(E) {
      const k = mt(E.target);
      k.push(E.target), !k.includes(d.value) && !k.includes(p.value) && (g.value = !1);
    };
    Jt(() => {
      if (n.dropdownContainer) {
        let E = !1;
        _.value = mt(d.value).find((k) => !!(k instanceof Element && (k.matches(n.dropdownContainer) && (E = !0), E && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(k).position))));
      }
      if (_.value == null && (_.value = document.querySelector("body")), n.originalNode) {
        for (let J of r)
          J != "extrasuggest" && d.value.classList.add(J);
        for (let J of o)
          d.value.style[J] = n.originalNode.style[J];
        o.includes("background-color") || (d.value.style.backgroundColor = "white"), l.value = n.originalNode.value, Kt(() => {
          n.modelValue != null && (l.value = n.modelValue);
        });
        const E = l.value, k = () => {
          l.value = E;
        };
        let B = mt(d.value, "form").pop();
        B instanceof HTMLElement && B.matches("form") && B.addEventListener("reset", () => setTimeout(k));
      }
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), In(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: M } = xo(s, se([]), g, d, p, _, n.maxWidth), N = (E) => {
      l.value = s.map.get(E).value, g.value = !1;
    }, P = () => {
      var E;
      n.originalNode && (n.originalNode.value = l.value, (E = n.originalNode) == null || E.dispatchEvent(new Event("change", { bubbles: !0 }))), t("update:modelValue", l.value);
    };
    Xe(() => g.value, (E) => {
      E === !1 && P();
    });
    const { list: U, containerProps: D, wrapperProps: j } = vo(
      i,
      {
        itemHeight: 32
      }
    );
    return (E, k) => (ee(), le(fe, null, [
      mn(ie("input", Wt({
        onFocus: k[0] || (k[0] = (B) => g.value = !0),
        onClick: k[1] || (k[1] = (B) => g.value = !0),
        ref_key: "inputNode",
        ref: d,
        "onUpdate:modelValue": k[2] || (k[2] = (B) => ue(l) ? l.value = B : null),
        class: "extra-select extra-select-input"
      }, E.$attrs), null, 16), [
        [Xi, z(l)]
      ]),
      _.value ? (ee(), _n(es, {
        key: 0,
        to: _.value
      }, [
        mn(ie("div", {
          class: Tt(["extra-select dropdown", { searching: z(f) > 0 }]),
          ref_key: "dropdownNode",
          ref: p,
          style: Ot(z(M))
        }, [
          z(l).length >= n.minChars ? (ee(), le(fe, { key: 0 }, [
            z(i).length == 0 ? (ee(), le("div", Dc, "No matches found")) : Ie("", !0)
          ], 64)) : (ee(), le("div", Kc, "Insert at least " + Lt(n.minChars) + " characters", 1)),
          ie("div", Wt(z(D), { class: "scroller" }), [
            ie("div", vr(Ts(z(j))), [
              (ee(!0), le(fe, null, un(z(U), (B) => (ee(), le("button", {
                key: B.index,
                class: "dropdown-row",
                onClick: ho((J) => N(B.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", Wc, Lt(B.data.value), 1)
              ], 8, Vc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [po, g.value]
        ])
      ], 8, ["to"])) : Ie("", !0)
    ], 64));
  }
}), Co = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Co.bindNew(e);
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
      const s = go($c, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), at.remove(e, "extra-select");
      });
    });
  }
}, Eo = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      Eo.bindNew(e);
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
      const s = go(zc, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), at.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Co.init(), Eo.init();
});
export {
  Co as ExtraSelect,
  Eo as ExtraSuggest
};
