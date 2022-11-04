const Be = /* @__PURE__ */ new WeakMap();
class ut {
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
    return ut.has(t, n) ? !1 : (ut.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = Be);
function Qt(e) {
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
function un(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s !== t; ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return n.push(t), n;
}
function Oo(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(n) {
    e.removeChild(n);
  });
}
function ls(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const To = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ao = /* @__PURE__ */ ls(To);
function mr(e) {
  return !!e || e === "";
}
function Et(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ce(s) ? So(s) : Et(s);
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
const Io = /;(?![^(]*\))/g, No = /:(.+)/;
function So(e) {
  const t = {};
  return e.split(Io).forEach((n) => {
    if (n) {
      const s = n.split(No);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (ce(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ot(e[n]);
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
  return t && !ce(t) && (e.class = Ot(t)), n && (e.style = Et(n)), e;
}
function Mo(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ft(e[s], t[s]);
  return n;
}
function ft(e, t) {
  if (e === t)
    return !0;
  let n = Ms(e), s = Ms(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = jt(e), s = jt(t), n || s)
    return e === t;
  if (n = k(e), s = k(t), n || s)
    return n && s ? Mo(e, t) : !1;
  if (n = re(e), s = re(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const l in e) {
      const i = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (i && !c || !i && c || !ft(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function is(e, t) {
  return e.findIndex((n) => ft(n, t));
}
const Ft = (e) => ce(e) ? e : e == null ? "" : k(e) || re(e) && (e.toString === br || !j(e.toString)) ? JSON.stringify(e, _r, 2) : String(e), _r = (e, t) => t && t.__v_isRef ? _r(e, t.value) : vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Tt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : re(t) && !k(t) && !wr(t) ? String(t) : t, Z = {}, mt = [], Fe = () => {
}, ko = () => !1, Po = /^on[^a-z]/, yn = (e) => Po.test(e), cs = (e) => e.startsWith("onUpdate:"), pe = Object.assign, us = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fo = Object.prototype.hasOwnProperty, K = (e, t) => Fo.call(e, t), k = Array.isArray, vt = (e) => qt(e) === "[object Map]", Tt = (e) => qt(e) === "[object Set]", Ms = (e) => qt(e) === "[object Date]", j = (e) => typeof e == "function", ce = (e) => typeof e == "string", jt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", yr = (e) => re(e) && j(e.then) && j(e.catch), br = Object.prototype.toString, qt = (e) => br.call(e), Lo = (e) => qt(e).slice(8, -1), wr = (e) => qt(e) === "[object Object]", fs = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ ls(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ro = /-(\w)/g, bt = bn((e) => e.replace(Ro, (t, n) => n ? n.toUpperCase() : "")), jo = /\B([A-Z])/g, At = bn((e) => e.replace(jo, "-$1").toLowerCase()), xr = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pn = bn((e) => e ? `on${xr(e)}` : ""), Bt = (e, t) => !Object.is(e, t), rn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, fn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, an = (e) => {
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
const as = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Cr = (e) => (e.w & Xe) > 0, Er = (e) => (e.n & Xe) > 0, Ko = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Xe;
}, Vo = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Cr(r) && !Er(r) ? r.delete(e) : t[n++] = r, r.w &= ~Xe, r.n &= ~Xe;
    }
    t.length = n;
  }
}, Hn = /* @__PURE__ */ new WeakMap();
let Pt = 0, Xe = 1;
const Un = 30;
let Se;
const it = Symbol(""), $n = Symbol("");
class ds {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Uo(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Se, n = Je;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Se, Se = this, Je = !0, Xe = 1 << ++Pt, Pt <= Un ? Ko(this) : Ps(this), this.fn();
    } finally {
      Pt <= Un && Vo(this), Xe = 1 << --Pt, Se = this.parent, Je = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Se === this ? this.deferStop = !0 : this.active && (Ps(this), this.onStop && this.onStop(), this.active = !1);
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
let Je = !0;
const Or = [];
function It() {
  Or.push(Je), Je = !1;
}
function Nt() {
  const e = Or.pop();
  Je = e === void 0 ? !0 : e;
}
function xe(e, t, n) {
  if (Je && Se) {
    let s = Hn.get(e);
    s || Hn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = as()), Tr(r);
  }
}
function Tr(e, t) {
  let n = !1;
  Pt <= Un ? Er(e) || (e.n |= Xe, n = !Cr(e)) : n = !e.has(Se), n && (e.add(Se), Se.deps.push(e));
}
function Ve(e, t, n, s, r, o) {
  const l = Hn.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && k(e))
    l.forEach((c, a) => {
      (a === "length" || a >= s) && i.push(c);
    });
  else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        k(e) ? fs(n) && i.push(l.get("length")) : (i.push(l.get(it)), vt(e) && i.push(l.get($n)));
        break;
      case "delete":
        k(e) || (i.push(l.get(it)), vt(e) && i.push(l.get($n)));
        break;
      case "set":
        vt(e) && i.push(l.get(it));
        break;
    }
  if (i.length === 1)
    i[0] && Dn(i[0]);
  else {
    const c = [];
    for (const a of i)
      a && c.push(...a);
    Dn(as(c));
  }
}
function Dn(e, t) {
  const n = k(e) ? e : [...e];
  for (const s of n)
    s.computed && Fs(s);
  for (const s of n)
    s.computed || Fs(s);
}
function Fs(e, t) {
  (e !== Se || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Wo = /* @__PURE__ */ ls("__proto__,__v_isRef,__isVue"), Ar = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jt)
), qo = /* @__PURE__ */ hs(), zo = /* @__PURE__ */ hs(!1, !0), Jo = /* @__PURE__ */ hs(!0), Ls = /* @__PURE__ */ Qo();
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
      It();
      const s = W(this)[t].apply(this, n);
      return Nt(), s;
    };
  }), e;
}
function hs(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? al : kr : t ? Mr : Sr).get(s))
      return s;
    const l = k(s);
    if (!e && l && K(Ls, r))
      return Reflect.get(Ls, r, o);
    const i = Reflect.get(s, r, o);
    return (jt(r) ? Ar.has(r) : Wo(r)) || (e || xe(s, "get", r), t) ? i : ue(i) ? l && fs(r) ? i : i.value : re(i) ? e ? Pr(i) : ms(i) : i;
  };
}
const Yo = /* @__PURE__ */ Ir(), Xo = /* @__PURE__ */ Ir(!0);
function Ir(e = !1) {
  return function(n, s, r, o) {
    let l = n[s];
    if (wt(l) && ue(l) && !ue(r))
      return !1;
    if (!e && (!dn(r) && !wt(r) && (l = W(l), r = W(r)), !k(n) && ue(l) && !ue(r)))
      return l.value = r, !0;
    const i = k(n) && fs(s) ? Number(s) < n.length : K(n, s), c = Reflect.set(n, s, r, o);
    return n === W(o) && (i ? Bt(r, l) && Ve(n, "set", s, r) : Ve(n, "add", s, r)), c;
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
  return (!jt(t) || !Ar.has(t)) && xe(e, "has", t), n;
}
function el(e) {
  return xe(e, "iterate", k(e) ? "length" : it), Reflect.ownKeys(e);
}
const Nr = {
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
}, nl = /* @__PURE__ */ pe({}, Nr, {
  get: zo,
  set: Xo
}), ps = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Yt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = W(e), o = W(t);
  n || (t !== o && xe(r, "get", t), xe(r, "get", o));
  const { has: l } = wn(r), i = s ? ps : n ? _s : Ht;
  if (l.call(r, t))
    return i(e.get(t));
  if (l.call(r, o))
    return i(e.get(o));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, s = W(n), r = W(e);
  return t || (e !== r && xe(s, "has", e), xe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Zt(e, t = !1) {
  return e = e.__v_raw, !t && xe(W(e), "iterate", it), Reflect.get(e, "size", e);
}
function Rs(e) {
  e = W(e);
  const t = W(this);
  return wn(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this;
}
function js(e, t) {
  t = W(t);
  const n = W(this), { has: s, get: r } = wn(n);
  let o = s.call(n, e);
  o || (e = W(e), o = s.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), o ? Bt(t, l) && Ve(n, "set", e, t) : Ve(n, "add", e, t), this;
}
function Bs(e) {
  const t = W(this), { has: n, get: s } = wn(t);
  let r = n.call(t, e);
  r || (e = W(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ve(t, "delete", e, void 0), o;
}
function Hs() {
  const e = W(this), t = e.size !== 0, n = e.clear();
  return t && Ve(e, "clear", void 0, void 0), n;
}
function Gt(e, t) {
  return function(s, r) {
    const o = this, l = o.__v_raw, i = W(l), c = t ? ps : e ? _s : Ht;
    return !e && xe(i, "iterate", it), l.forEach((a, d) => s.call(r, c(a), c(d), o));
  };
}
function en(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = W(r), l = vt(o), i = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, a = r[e](...s), d = n ? ps : t ? _s : Ht;
    return !t && xe(o, "iterate", c ? $n : it), {
      next() {
        const { value: g, done: p } = a.next();
        return p ? { value: g, done: p } : {
          value: i ? [d(g[0]), d(g[1])] : d(g),
          done: p
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qe(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function sl() {
  const e = {
    get(o) {
      return Yt(this, o);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: Rs,
    set: js,
    delete: Bs,
    clear: Hs,
    forEach: Gt(!1, !1)
  }, t = {
    get(o) {
      return Yt(this, o, !1, !0);
    },
    get size() {
      return Zt(this);
    },
    has: Xt,
    add: Rs,
    set: js,
    delete: Bs,
    clear: Hs,
    forEach: Gt(!1, !0)
  }, n = {
    get(o) {
      return Yt(this, o, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(o) {
      return Xt.call(this, o, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: Gt(!0, !1)
  }, s = {
    get(o) {
      return Yt(this, o, !0, !0);
    },
    get size() {
      return Zt(this, !0);
    },
    has(o) {
      return Xt.call(this, o, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: Gt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = en(o, !1, !1), n[o] = en(o, !0, !1), t[o] = en(o, !1, !0), s[o] = en(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [rl, ol, ll, il] = /* @__PURE__ */ sl();
function gs(e, t) {
  const n = t ? e ? il : ll : e ? ol : rl;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(K(n, r) && r in s ? n : s, r, o);
}
const cl = {
  get: /* @__PURE__ */ gs(!1, !1)
}, ul = {
  get: /* @__PURE__ */ gs(!1, !0)
}, fl = {
  get: /* @__PURE__ */ gs(!0, !1)
}, Sr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap();
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
function ms(e) {
  return wt(e) ? e : vs(e, !1, Nr, cl, Sr);
}
function pl(e) {
  return vs(e, !1, nl, ul, Mr);
}
function Pr(e) {
  return vs(e, !0, tl, fl, kr);
}
function vs(e, t, n, s, r) {
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
  return wt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function dn(e) {
  return !!(e && e.__v_isShallow);
}
function Fr(e) {
  return _t(e) || wt(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Lr(e) {
  return fn(e, "__v_skip", !0), e;
}
const Ht = (e) => re(e) ? ms(e) : e, _s = (e) => re(e) ? Pr(e) : e;
function Rr(e) {
  Je && Se && (e = W(e), Tr(e.dep || (e.dep = as())));
}
function jr(e, t) {
  e = W(e), e.dep && Dn(e.dep);
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
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : W(t), this._value = n ? t : Ht(t);
  }
  get value() {
    return Rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || dn(t) || wt(t);
    t = n ? t : W(t), Bt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), jr(this));
  }
}
function q(e) {
  return ue(e) ? e.value : e;
}
const vl = {
  get: (e, t, n) => q(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Hr(e) {
  return _t(e) ? e : new Proxy(e, vl);
}
class _l {
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
function Kn(e, t, n) {
  const s = e[t];
  return ue(s) ? s : new _l(e, t, n);
}
var Ur;
class yl {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ur] = !1, this._dirty = !0, this.effect = new ds(t, () => {
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
  const o = j(e);
  return o ? (s = e, r = Fe) : (s = e.get, r = e.set), new yl(s, r, o || !r, n);
}
function Qe(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    xn(o, t, n);
  }
  return r;
}
function Oe(e, t, n, s) {
  if (j(e)) {
    const o = Qe(e, t, n, s);
    return o && yr(o) && o.catch((l) => {
      xn(l, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Oe(e[o], t, n, s));
  return r;
}
function xn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const l = t.proxy, i = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, l, i) === !1)
            return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Qe(c, null, 10, [e, l, i]);
      return;
    }
  }
  wl(e, n, r, s);
}
function wl(e, t, n, s = !0) {
  console.error(e);
}
let Ut = !1, Vn = !1;
const he = [];
let Ue = 0;
const yt = [];
let $e = null, st = 0;
const $r = /* @__PURE__ */ Promise.resolve();
let ys = null;
function hn(e) {
  const t = ys || $r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xl(e) {
  let t = Ue + 1, n = he.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    $t(he[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function bs(e) {
  (!he.length || !he.includes(e, Ut && e.allowRecurse ? Ue + 1 : Ue)) && (e.id == null ? he.push(e) : he.splice(xl(e.id), 0, e), Dr());
}
function Dr() {
  !Ut && !Vn && (Vn = !0, ys = $r.then(Vr));
}
function Cl(e) {
  const t = he.indexOf(e);
  t > Ue && he.splice(t, 1);
}
function El(e) {
  k(e) ? yt.push(...e) : (!$e || !$e.includes(e, e.allowRecurse ? st + 1 : st)) && yt.push(e), Dr();
}
function Us(e, t = Ut ? Ue + 1 : 0) {
  for (; t < he.length; t++) {
    const n = he[t];
    n && n.pre && (he.splice(t, 1), t--, n());
  }
}
function Kr(e) {
  if (yt.length) {
    const t = [...new Set(yt)];
    if (yt.length = 0, $e) {
      $e.push(...t);
      return;
    }
    for ($e = t, $e.sort((n, s) => $t(n) - $t(s)), st = 0; st < $e.length; st++)
      $e[st]();
    $e = null, st = 0;
  }
}
const $t = (e) => e.id == null ? 1 / 0 : e.id, Ol = (e, t) => {
  const n = $t(e) - $t(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Vr(e) {
  Vn = !1, Ut = !0, he.sort(Ol);
  const t = Fe;
  try {
    for (Ue = 0; Ue < he.length; Ue++) {
      const n = he[Ue];
      n && n.active !== !1 && Qe(n, null, 14);
    }
  } finally {
    Ue = 0, he.length = 0, Kr(), Ut = !1, ys = null, (he.length || yt.length) && Vr();
  }
}
function Tl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || Z;
  let r = n;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in s) {
    const d = `${l === "modelValue" ? "model" : l}Modifiers`, { number: g, trim: p } = s[d] || Z;
    p && (r = n.map((w) => w.trim())), g && (r = n.map(an));
  }
  let i, c = s[i = Pn(t)] || s[i = Pn(bt(t))];
  !c && o && (c = s[i = Pn(At(t))]), c && Oe(c, e, 6, r);
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
  const o = e.emits;
  let l = {}, i = !1;
  if (!j(e)) {
    const c = (a) => {
      const d = Wr(a, t, !0);
      d && (i = !0, pe(l, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !i ? (re(e) && s.set(e, null), null) : (k(o) ? o.forEach((c) => l[c] = null) : pe(l, o), re(e) && s.set(e, l), l);
}
function Cn(e, t) {
  return !e || !yn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, At(t)) || K(e, t));
}
let ke = null, qr = null;
function pn(e) {
  const t = ke;
  return ke = e, qr = e && e.type.__scopeId || null, t;
}
function Al(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Xs(-1);
    const o = pn(t), l = e(...r);
    return pn(o), s._d && Xs(1), l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Fn(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [l], slots: i, attrs: c, emit: a, render: d, renderCache: g, data: p, setupState: w, ctx: T, inheritAttrs: A } = e;
  let M, F;
  const U = pn(e);
  try {
    if (n.shapeFlag & 4) {
      const R = r || s;
      M = He(d.call(R, R, g, o, w, p, T)), F = c;
    } else {
      const R = t;
      M = He(R.length > 1 ? R(o, { attrs: c, slots: i, emit: a }) : R(o, null)), F = t.props ? c : Il(c);
    }
  } catch (R) {
    Rt.length = 0, xn(R, e, 1), M = Ke(Le);
  }
  let H = M;
  if (F && A !== !1) {
    const R = Object.keys(F), { shapeFlag: B } = H;
    R.length && B & 7 && (l && R.some(cs) && (F = Nl(F, l)), H = Ze(H, F));
  }
  return n.dirs && (H = Ze(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (H.transition = n.transition), M = H, pn(U), M;
}
const Il = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || yn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Nl = (e, t) => {
  const n = {};
  for (const s in e)
    (!cs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Sl(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: l, children: i, patchFlag: c } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? $s(s, l, a) : !!l;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        const p = d[g];
        if (l[p] !== s[p] && !Cn(a, p))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === l ? !1 : s ? l ? $s(s, l, a) : !0 : !!l;
  return !1;
}
function $s(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Cn(n, o))
      return !0;
  }
  return !1;
}
function Ml({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const kl = (e) => e.__isSuspense;
function Pl(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : El(e);
}
function Fl(e, t) {
  if (de) {
    let n = de.provides;
    const s = de.parent && de.parent.provides;
    s === n && (n = de.provides = Object.create(s)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const s = de || ke;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(s.proxy) : t;
  }
}
function Dt(e, t) {
  return En(e, null, t);
}
function Ll(e, t) {
  return En(e, null, { flush: "post" });
}
const Ds = {};
function Ye(e, t, n) {
  return En(e, t, n);
}
function En(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: l } = Z) {
  const i = de;
  let c, a = !1, d = !1;
  if (ue(e) ? (c = () => e.value, a = dn(e)) : _t(e) ? (c = () => e, s = !0) : k(e) ? (d = !0, a = e.some((F) => _t(F) || dn(F)), c = () => e.map((F) => {
    if (ue(F))
      return F.value;
    if (_t(F))
      return lt(F);
    if (j(F))
      return Qe(F, i, 2);
  })) : j(e) ? t ? c = () => Qe(e, i, 2) : c = () => {
    if (!(i && i.isUnmounted))
      return g && g(), Oe(e, i, 3, [p]);
  } : c = Fe, t && s) {
    const F = c;
    c = () => lt(F());
  }
  let g, p = (F) => {
    g = M.onStop = () => {
      Qe(F, i, 4);
    };
  };
  if (Wt)
    return p = Fe, t ? n && Oe(t, i, 3, [
      c(),
      d ? [] : void 0,
      p
    ]) : c(), Fe;
  let w = d ? [] : Ds;
  const T = () => {
    if (!!M.active)
      if (t) {
        const F = M.run();
        (s || a || (d ? F.some((U, H) => Bt(U, w[H])) : Bt(F, w))) && (g && g(), Oe(t, i, 3, [
          F,
          w === Ds ? void 0 : w,
          p
        ]), w = F);
      } else
        M.run();
  };
  T.allowRecurse = !!t;
  let A;
  r === "sync" ? A = T : r === "post" ? A = () => ve(T, i && i.suspense) : (T.pre = !0, i && (T.id = i.uid), A = () => bs(T));
  const M = new ds(c, A);
  return t ? n ? T() : w = M.run() : r === "post" ? ve(M.run.bind(M), i && i.suspense) : M.run(), () => {
    M.stop(), i && i.scope && us(i.scope.effects, M);
  };
}
function Rl(e, t, n) {
  const s = this.proxy, r = ce(e) ? e.includes(".") ? zr(s, e) : () => s[e] : e.bind(s, s);
  let o;
  j(t) ? o = t : (o = t.handler, n = t);
  const l = de;
  xt(this);
  const i = En(r, o.bind(s), n);
  return l ? xt(l) : ct(), i;
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
function lt(e, t) {
  if (!re(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ue(e))
    lt(e.value, t);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      lt(e[n], t);
  else if (Tt(e) || vt(e))
    e.forEach((n) => {
      lt(n, t);
    });
  else if (wr(e))
    for (const n in e)
      lt(e[n], t);
  return e;
}
function jl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return zt(() => {
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
        for (const A of o)
          if (A.type !== Le) {
            l = A;
            break;
          }
      }
      const i = W(e), { mode: c } = i;
      if (s.isLeaving)
        return Rn(l);
      const a = Ks(l);
      if (!a)
        return Rn(l);
      const d = Wn(a, i, s, n);
      qn(a, d);
      const g = n.subTree, p = g && Ks(g);
      let w = !1;
      const { getTransitionKey: T } = a.type;
      if (T) {
        const A = T();
        r === void 0 ? r = A : A !== r && (r = A, w = !0);
      }
      if (p && p.type !== Le && (!rt(a, p) || w)) {
        const A = Wn(p, i, s, n);
        if (qn(p, A), c === "out-in")
          return s.isLeaving = !0, A.afterLeave = () => {
            s.isLeaving = !1, n.update();
          }, Rn(l);
        c === "in-out" && a.type !== Le && (A.delayLeave = (M, F, U) => {
          const H = Jr(s, p);
          H[String(p.key)] = p, M._leaveCb = () => {
            F(), M._leaveCb = void 0, delete d.delayedLeave;
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
function Wn(e, t, n, s) {
  const { appear: r, mode: o, persisted: l = !1, onBeforeEnter: i, onEnter: c, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: g, onLeave: p, onAfterLeave: w, onLeaveCancelled: T, onBeforeAppear: A, onAppear: M, onAfterAppear: F, onAppearCancelled: U } = t, H = String(e.key), R = Jr(n, e), B = (E, P) => {
    E && Oe(E, s, 9, P);
  }, z = (E, P) => {
    const $ = P[1];
    B(E, P), k(E) ? E.every((oe) => oe.length <= 1) && $() : E.length <= 1 && $();
  }, ee = {
    mode: o,
    persisted: l,
    beforeEnter(E) {
      let P = i;
      if (!n.isMounted)
        if (r)
          P = A || i;
        else
          return;
      E._leaveCb && E._leaveCb(!0);
      const $ = R[H];
      $ && rt(e, $) && $.el._leaveCb && $.el._leaveCb(), B(P, [E]);
    },
    enter(E) {
      let P = c, $ = a, oe = d;
      if (!n.isMounted)
        if (r)
          P = M || c, $ = F || a, oe = U || d;
        else
          return;
      let _e = !1;
      const Te = E._enterCb = (at) => {
        _e || (_e = !0, at ? B(oe, [E]) : B($, [E]), ee.delayedLeave && ee.delayedLeave(), E._enterCb = void 0);
      };
      P ? z(P, [E, Te]) : Te();
    },
    leave(E, P) {
      const $ = String(e.key);
      if (E._enterCb && E._enterCb(!0), n.isUnmounting)
        return P();
      B(g, [E]);
      let oe = !1;
      const _e = E._leaveCb = (Te) => {
        oe || (oe = !0, P(), Te ? B(T, [E]) : B(w, [E]), E._leaveCb = void 0, R[$] === e && delete R[$]);
      };
      R[$] = e, p ? z(p, [E, _e]) : _e();
    },
    clone(E) {
      return Wn(E, t, n, s);
    }
  };
  return ee;
}
function Rn(e) {
  if (On(e))
    return e = Ze(e), e.children = null, e;
}
function Ks(e) {
  return On(e) ? e.children ? e.children[0] : void 0 : e;
}
function qn(e, t) {
  e.shapeFlag & 6 && e.component ? qn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qr(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    const i = n == null ? l.key : String(n) + String(l.key != null ? l.key : o);
    l.type === fe ? (l.patchFlag & 128 && r++, s = s.concat(Qr(l.children, t, i))) : (t || l.type !== Le) && s.push(i != null ? Ze(l, { key: i }) : l);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
const on = (e) => !!e.type.__asyncLoader, On = (e) => e.type.__isKeepAlive;
function Ul(e, t) {
  Yr(e, "a", t);
}
function $l(e, t) {
  Yr(e, "da", t);
}
function Yr(e, t, n = de) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Tn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      On(r.parent.vnode) && Dl(s, t, n, r), r = r.parent;
  }
}
function Dl(e, t, n, s) {
  const r = Tn(t, e, s, !0);
  An(() => {
    us(s[t], r);
  }, n);
}
function Tn(e, t, n = de, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      It(), xt(n);
      const i = Oe(t, n, e, l);
      return ct(), Nt(), i;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const We = (e) => (t, n = de) => (!Wt || e === "sp") && Tn(e, t, n), Kl = We("bm"), zt = We("m"), Vl = We("bu"), Wl = We("u"), Xr = We("bum"), An = We("um"), ql = We("sp"), zl = We("rtg"), Jl = We("rtc");
function Ql(e, t = de) {
  Tn("ec", e, t);
}
function gn(e, t) {
  const n = ke;
  if (n === null)
    return e;
  const s = Nn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, c, a = Z] = t[o];
    j(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && lt(i), r.push({
      dir: l,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: a
    });
  }
  return e;
}
function et(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const i = r[l];
    o && (i.oldValue = o[l].value);
    let c = i.dir[s];
    c && (It(), Oe(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Nt());
  }
}
const Yl = Symbol();
function ln(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (k(e) || ce(e)) {
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
      for (let i = 0, c = l.length; i < c; i++) {
        const a = l[i];
        r[i] = t(e[a], a, i, o && o[i]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
const zn = (e) => e ? co(e) ? Nn(e) || e.proxy : zn(e.parent) : null, mn = /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => zn(e.parent),
  $root: (e) => zn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => ws(e),
  $forceUpdate: (e) => e.f || (e.f = () => bs(e.update)),
  $nextTick: (e) => e.n || (e.n = hn.bind(e.proxy)),
  $watch: (e) => Rl.bind(e)
}), Xl = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: l, type: i, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const w = l[t];
      if (w !== void 0)
        switch (w) {
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
        if (s !== Z && K(s, t))
          return l[t] = 1, s[t];
        if (r !== Z && K(r, t))
          return l[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && K(a, t))
          return l[t] = 3, o[t];
        if (n !== Z && K(n, t))
          return l[t] = 4, n[t];
        Jn && (l[t] = 0);
      }
    }
    const d = mn[t];
    let g, p;
    if (d)
      return t === "$attrs" && xe(e, "get", t), d(e);
    if ((g = i.__cssModules) && (g = g[t]))
      return g;
    if (n !== Z && K(n, t))
      return l[t] = 4, n[t];
    if (p = c.config.globalProperties, K(p, t))
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return r !== Z && K(r, t) ? (r[t] = n, !0) : s !== Z && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, l) {
    let i;
    return !!n[l] || e !== Z && K(e, l) || t !== Z && K(t, l) || (i = o[0]) && K(i, l) || K(s, l) || K(mn, l) || K(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let Jn = !0;
function Zl(e) {
  const t = ws(e), n = e.proxy, s = e.ctx;
  Jn = !1, t.beforeCreate && Vs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: l,
    watch: i,
    provide: c,
    inject: a,
    created: d,
    beforeMount: g,
    mounted: p,
    beforeUpdate: w,
    updated: T,
    activated: A,
    deactivated: M,
    beforeDestroy: F,
    beforeUnmount: U,
    destroyed: H,
    unmounted: R,
    render: B,
    renderTracked: z,
    renderTriggered: ee,
    errorCaptured: E,
    serverPrefetch: P,
    expose: $,
    inheritAttrs: oe,
    components: _e,
    directives: Te,
    filters: at
  } = t;
  if (a && Gl(a, s, null, e.appContext.config.unwrapInjectedRef), l)
    for (const te in l) {
      const J = l[te];
      j(J) && (s[te] = J.bind(n));
    }
  if (r) {
    const te = r.call(n, n);
    re(te) && (e.data = ms(te));
  }
  if (Jn = !0, o)
    for (const te in o) {
      const J = o[te], I = j(J) ? J.bind(n, n) : j(J.get) ? J.get.bind(n, n) : Fe, D = !j(J) && j(J.set) ? J.set.bind(n) : Fe, Q = Me({
        get: I,
        set: D
      });
      Object.defineProperty(s, te, {
        enumerable: !0,
        configurable: !0,
        get: () => Q.value,
        set: (ye) => Q.value = ye
      });
    }
  if (i)
    for (const te in i)
      Zr(i[te], s, n, te);
  if (c) {
    const te = j(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach((J) => {
      Fl(J, te[J]);
    });
  }
  d && Vs(d, e, "c");
  function ae(te, J) {
    k(J) ? J.forEach((I) => te(I.bind(n))) : J && te(J.bind(n));
  }
  if (ae(Kl, g), ae(zt, p), ae(Vl, w), ae(Wl, T), ae(Ul, A), ae($l, M), ae(Ql, E), ae(Jl, z), ae(zl, ee), ae(Xr, U), ae(An, R), ae(ql, P), k($))
    if ($.length) {
      const te = e.exposed || (e.exposed = {});
      $.forEach((J) => {
        Object.defineProperty(te, J, {
          get: () => n[J],
          set: (I) => n[J] = I
        });
      });
    } else
      e.exposed || (e.exposed = {});
  B && e.render === Fe && (e.render = B), oe != null && (e.inheritAttrs = oe), _e && (e.components = _e), Te && (e.directives = Te);
}
function Gl(e, t, n = Fe, s = !1) {
  k(e) && (e = Qn(e));
  for (const r in e) {
    const o = e[r];
    let l;
    re(o) ? "default" in o ? l = Ln(o.from || r, o.default, !0) : l = Ln(o.from || r) : l = Ln(o), ue(l) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[r] = l;
  }
}
function Vs(e, t, n) {
  Oe(k(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Zr(e, t, n, s) {
  const r = s.includes(".") ? zr(n, s) : () => n[s];
  if (ce(e)) {
    const o = t[e];
    j(o) && Ye(r, o);
  } else if (j(e))
    Ye(r, e.bind(n));
  else if (re(e))
    if (k(e))
      e.forEach((o) => Zr(o, t, n, s));
    else {
      const o = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(o) && Ye(r, o, e);
    }
}
function ws(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: l } } = e.appContext, i = o.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach((a) => vn(c, a, l, !0)), vn(c, t, l)), re(t) && o.set(t, c), c;
}
function vn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && vn(e, o, n, !0), r && r.forEach((l) => vn(e, l, n, !0));
  for (const l in t)
    if (!(s && l === "expose")) {
      const i = ei[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const ei = {
  data: Ws,
  props: nt,
  emits: nt,
  methods: nt,
  computed: nt,
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  components: nt,
  directives: nt,
  watch: ni,
  provide: Ws,
  inject: ti
};
function Ws(e, t) {
  return t ? e ? function() {
    return pe(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t);
  } : t : e;
}
function ti(e, t) {
  return nt(Qn(e), Qn(t));
}
function Qn(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nt(e, t) {
  return e ? pe(pe(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function ni(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = pe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ge(e[s], t[s]);
  return n;
}
function si(e, t, n, s = !1) {
  const r = {}, o = {};
  fn(o, In, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Gr(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : pl(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ri(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: l } } = e, i = W(r), [c] = e.propsOptions;
  let a = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let g = 0; g < d.length; g++) {
        let p = d[g];
        if (Cn(e.emitsOptions, p))
          continue;
        const w = t[p];
        if (c)
          if (K(o, p))
            w !== o[p] && (o[p] = w, a = !0);
          else {
            const T = bt(p);
            r[T] = Yn(c, i, T, w, e, !1);
          }
        else
          w !== o[p] && (o[p] = w, a = !0);
      }
    }
  } else {
    Gr(e, t, r, o) && (a = !0);
    let d;
    for (const g in i)
      (!t || !K(t, g) && ((d = At(g)) === g || !K(t, d))) && (c ? n && (n[g] !== void 0 || n[d] !== void 0) && (r[g] = Yn(c, i, g, void 0, e, !0)) : delete r[g]);
    if (o !== i)
      for (const g in o)
        (!t || !K(t, g) && !0) && (delete o[g], a = !0);
  }
  a && Ve(e, "set", "$attrs");
}
function Gr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let l = !1, i;
  if (t)
    for (let c in t) {
      if (sn(c))
        continue;
      const a = t[c];
      let d;
      r && K(r, d = bt(c)) ? !o || !o.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Cn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, l = !0);
    }
  if (o) {
    const c = W(n), a = i || Z;
    for (let d = 0; d < o.length; d++) {
      const g = o[d];
      n[g] = Yn(r, c, g, a[g], e, !K(a, g));
    }
  }
  return l;
}
function Yn(e, t, n, s, r, o) {
  const l = e[n];
  if (l != null) {
    const i = K(l, "default");
    if (i && s === void 0) {
      const c = l.default;
      if (l.type !== Function && j(c)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (xt(r), s = a[n] = c.call(null, t), ct());
      } else
        s = c;
    }
    l[0] && (o && !i ? s = !1 : l[1] && (s === "" || s === At(n)) && (s = !0));
  }
  return s;
}
function eo(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, i = [];
  let c = !1;
  if (!j(e)) {
    const d = (g) => {
      c = !0;
      const [p, w] = eo(g, t, !0);
      pe(l, p), w && i.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c)
    return re(e) && s.set(e, mt), mt;
  if (k(o))
    for (let d = 0; d < o.length; d++) {
      const g = bt(o[d]);
      qs(g) && (l[g] = Z);
    }
  else if (o)
    for (const d in o) {
      const g = bt(d);
      if (qs(g)) {
        const p = o[d], w = l[g] = k(p) || j(p) ? { type: p } : p;
        if (w) {
          const T = Qs(Boolean, w.type), A = Qs(String, w.type);
          w[0] = T > -1, w[1] = A < 0 || T < A, (T > -1 || K(w, "default")) && i.push(g);
        }
      }
    }
  const a = [l, i];
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
  return k(t) ? t.findIndex((n) => Js(n, e)) : j(t) && Js(t, e) ? 0 : -1;
}
const to = (e) => e[0] === "_" || e === "$stable", xs = (e) => k(e) ? e.map(He) : [He(e)], oi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Al((...r) => xs(t(...r)), n);
  return s._c = !1, s;
}, no = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (to(r))
      continue;
    const o = e[r];
    if (j(o))
      t[r] = oi(r, o, s);
    else if (o != null) {
      const l = xs(o);
      t[r] = () => l;
    }
  }
}, so = (e, t) => {
  const n = xs(t);
  e.slots.default = () => n;
}, li = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = W(t), fn(t, "_", n)) : no(t, e.slots = {});
  } else
    e.slots = {}, t && so(e, t);
  fn(e.slots, In, 1);
}, ii = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, l = Z;
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
    j(s) || (s = Object.assign({}, s)), r != null && !re(r) && (r = null);
    const o = ro(), l = /* @__PURE__ */ new Set();
    let i = !1;
    const c = o.app = {
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
      set config(a) {
      },
      use(a, ...d) {
        return l.has(a) || (a && j(a.install) ? (l.add(a), a.install(c, ...d)) : j(a) && (l.add(a), a(c, ...d))), c;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c;
      },
      component(a, d) {
        return d ? (o.components[a] = d, c) : o.components[a];
      },
      directive(a, d) {
        return d ? (o.directives[a] = d, c) : o.directives[a];
      },
      mount(a, d, g) {
        if (!i) {
          const p = Ke(s, r);
          return p.appContext = o, d && t ? t(p, a) : e(p, a, g), i = !0, c._container = a, a.__vue_app__ = c, Nn(p.component) || p.component.proxy;
        }
      },
      unmount() {
        i && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return o.provides[a] = d, c;
      }
    };
    return c;
  };
}
function Xn(e, t, n, s, r = !1) {
  if (k(e)) {
    e.forEach((p, w) => Xn(p, t && (k(t) ? t[w] : t), n, s, r));
    return;
  }
  if (on(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Nn(s.component) || s.component.proxy : s.el, l = r ? null : o, { i, r: c } = e, a = t && t.r, d = i.refs === Z ? i.refs = {} : i.refs, g = i.setupState;
  if (a != null && a !== c && (ce(a) ? (d[a] = null, K(g, a) && (g[a] = null)) : ue(a) && (a.value = null)), j(c))
    Qe(c, i, 12, [l, d]);
  else {
    const p = ce(c), w = ue(c);
    if (p || w) {
      const T = () => {
        if (e.f) {
          const A = p ? d[c] : c.value;
          r ? k(A) && us(A, o) : k(A) ? A.includes(o) || A.push(o) : p ? (d[c] = [o], K(g, c) && (g[c] = d[c])) : (c.value = [o], e.k && (d[e.k] = c.value));
        } else
          p ? (d[c] = l, K(g, c) && (g[c] = l)) : w && (c.value = l, e.k && (d[e.k] = l));
      };
      l ? (T.id = -1, ve(T, n)) : T();
    }
  }
}
const ve = Pl;
function fi(e) {
  return ai(e);
}
function ai(e, t) {
  const n = Bo();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: l, createText: i, createComment: c, setText: a, setElementText: d, parentNode: g, nextSibling: p, setScopeId: w = Fe, cloneNode: T, insertStaticContent: A } = e, M = (u, f, h, v = null, m = null, b = null, C = !1, y = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !rt(u, f) && (v = ht(u), me(u, m, b, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: _, ref: N, shapeFlag: O } = f;
    switch (_) {
      case Es:
        F(u, f, h, v);
        break;
      case Le:
        U(u, f, h, v);
        break;
      case jn:
        u == null && H(f, h, v, C);
        break;
      case fe:
        Te(u, f, h, v, m, b, C, y, x);
        break;
      default:
        O & 1 ? z(u, f, h, v, m, b, C, y, x) : O & 6 ? at(u, f, h, v, m, b, C, y, x) : (O & 64 || O & 128) && _.process(u, f, h, v, m, b, C, y, x, pt);
    }
    N != null && m && Xn(N, u && u.ref, b, f || u, !f);
  }, F = (u, f, h, v) => {
    if (u == null)
      s(f.el = i(f.children), h, v);
    else {
      const m = f.el = u.el;
      f.children !== u.children && a(m, f.children);
    }
  }, U = (u, f, h, v) => {
    u == null ? s(f.el = c(f.children || ""), h, v) : f.el = u.el;
  }, H = (u, f, h, v) => {
    [u.el, u.anchor] = A(u.children, f, h, v, u.el, u.anchor);
  }, R = ({ el: u, anchor: f }, h, v) => {
    let m;
    for (; u && u !== f; )
      m = p(u), s(u, h, v), u = m;
    s(f, h, v);
  }, B = ({ el: u, anchor: f }) => {
    let h;
    for (; u && u !== f; )
      h = p(u), r(u), u = h;
    r(f);
  }, z = (u, f, h, v, m, b, C, y, x) => {
    C = C || f.type === "svg", u == null ? ee(f, h, v, m, b, C, y, x) : $(u, f, m, b, C, y, x);
  }, ee = (u, f, h, v, m, b, C, y) => {
    let x, _;
    const { type: N, props: O, shapeFlag: S, transition: L, patchFlag: V, dirs: Y } = u;
    if (u.el && T !== void 0 && V === -1)
      x = u.el = T(u.el);
    else {
      if (x = u.el = l(u.type, b, O && O.is, O), S & 8 ? d(x, u.children) : S & 16 && P(u.children, x, null, v, m, b && N !== "foreignObject", C, y), Y && et(u, null, v, "created"), O) {
        for (const ne in O)
          ne !== "value" && !sn(ne) && o(x, ne, null, O[ne], b, u.children, v, m, Ce);
        "value" in O && o(x, "value", null, O.value), (_ = O.onVnodeBeforeMount) && je(_, v, u);
      }
      E(x, u, u.scopeId, C, v);
    }
    Y && et(u, null, v, "beforeMount");
    const X = (!m || m && !m.pendingBranch) && L && !L.persisted;
    X && L.beforeEnter(x), s(x, f, h), ((_ = O && O.onVnodeMounted) || X || Y) && ve(() => {
      _ && je(_, v, u), X && L.enter(x), Y && et(u, null, v, "mounted");
    }, m);
  }, E = (u, f, h, v, m) => {
    if (h && w(u, h), v)
      for (let b = 0; b < v.length; b++)
        w(u, v[b]);
    if (m) {
      let b = m.subTree;
      if (f === b) {
        const C = m.vnode;
        E(u, C, C.scopeId, C.slotScopeIds, m.parent);
      }
    }
  }, P = (u, f, h, v, m, b, C, y, x = 0) => {
    for (let _ = x; _ < u.length; _++) {
      const N = u[_] = y ? ze(u[_]) : He(u[_]);
      M(null, N, f, h, v, m, b, C, y);
    }
  }, $ = (u, f, h, v, m, b, C) => {
    const y = f.el = u.el;
    let { patchFlag: x, dynamicChildren: _, dirs: N } = f;
    x |= u.patchFlag & 16;
    const O = u.props || Z, S = f.props || Z;
    let L;
    h && tt(h, !1), (L = S.onVnodeBeforeUpdate) && je(L, h, f, u), N && et(f, u, h, "beforeUpdate"), h && tt(h, !0);
    const V = m && f.type !== "foreignObject";
    if (_ ? oe(u.dynamicChildren, _, y, h, v, V, b) : C || I(u, f, y, null, h, v, V, b, !1), x > 0) {
      if (x & 16)
        _e(y, f, O, S, h, v, m);
      else if (x & 2 && O.class !== S.class && o(y, "class", null, S.class, m), x & 4 && o(y, "style", O.style, S.style, m), x & 8) {
        const Y = f.dynamicProps;
        for (let X = 0; X < Y.length; X++) {
          const ne = Y[X], Ie = O[ne], gt = S[ne];
          (gt !== Ie || ne === "value") && o(y, ne, Ie, gt, m, u.children, h, v, Ce);
        }
      }
      x & 1 && u.children !== f.children && d(y, f.children);
    } else
      !C && _ == null && _e(y, f, O, S, h, v, m);
    ((L = S.onVnodeUpdated) || N) && ve(() => {
      L && je(L, h, f, u), N && et(f, u, h, "updated");
    }, v);
  }, oe = (u, f, h, v, m, b, C) => {
    for (let y = 0; y < f.length; y++) {
      const x = u[y], _ = f[y], N = x.el && (x.type === fe || !rt(x, _) || x.shapeFlag & 70) ? g(x.el) : h;
      M(x, _, N, null, v, m, b, C, !0);
    }
  }, _e = (u, f, h, v, m, b, C) => {
    if (h !== v) {
      for (const y in v) {
        if (sn(y))
          continue;
        const x = v[y], _ = h[y];
        x !== _ && y !== "value" && o(u, y, _, x, C, f.children, m, b, Ce);
      }
      if (h !== Z)
        for (const y in h)
          !sn(y) && !(y in v) && o(u, y, h[y], null, C, f.children, m, b, Ce);
      "value" in v && o(u, "value", h.value, v.value);
    }
  }, Te = (u, f, h, v, m, b, C, y, x) => {
    const _ = f.el = u ? u.el : i(""), N = f.anchor = u ? u.anchor : i("");
    let { patchFlag: O, dynamicChildren: S, slotScopeIds: L } = f;
    L && (y = y ? y.concat(L) : L), u == null ? (s(_, h, v), s(N, h, v), P(f.children, h, N, m, b, C, y, x)) : O > 0 && O & 64 && S && u.dynamicChildren ? (oe(u.dynamicChildren, S, h, m, b, C, y), (f.key != null || m && f === m.subTree) && Cs(u, f, !0)) : I(u, f, h, N, m, b, C, y, x);
  }, at = (u, f, h, v, m, b, C, y, x) => {
    f.slotScopeIds = y, u == null ? f.shapeFlag & 512 ? m.ctx.activate(f, h, v, C, x) : St(f, h, v, m, b, C, x) : ae(u, f, x);
  }, St = (u, f, h, v, m, b, C) => {
    const y = u.component = wi(u, v, m);
    if (On(u) && (y.ctx.renderer = pt), xi(y), y.asyncDep) {
      if (m && m.registerDep(y, te), !u.el) {
        const x = y.subTree = Ke(Le);
        U(null, x, f, h);
      }
      return;
    }
    te(y, u, f, h, m, b, C);
  }, ae = (u, f, h) => {
    const v = f.component = u.component;
    if (Sl(u, f, h))
      if (v.asyncDep && !v.asyncResolved) {
        J(v, f, h);
        return;
      } else
        v.next = f, Cl(v.update), v.update();
    else
      f.el = u.el, v.vnode = f;
  }, te = (u, f, h, v, m, b, C) => {
    const y = () => {
      if (u.isMounted) {
        let { next: N, bu: O, u: S, parent: L, vnode: V } = u, Y = N, X;
        tt(u, !1), N ? (N.el = V.el, J(u, N, C)) : N = V, O && rn(O), (X = N.props && N.props.onVnodeBeforeUpdate) && je(X, L, N, V), tt(u, !0);
        const ne = Fn(u), Ie = u.subTree;
        u.subTree = ne, M(
          Ie,
          ne,
          g(Ie.el),
          ht(Ie),
          u,
          m,
          b
        ), N.el = ne.el, Y === null && Ml(u, ne.el), S && ve(S, m), (X = N.props && N.props.onVnodeUpdated) && ve(() => je(X, L, N, V), m);
      } else {
        let N;
        const { el: O, props: S } = f, { bm: L, m: V, parent: Y } = u, X = on(f);
        if (tt(u, !1), L && rn(L), !X && (N = S && S.onVnodeBeforeMount) && je(N, Y, f), tt(u, !0), O && kn) {
          const ne = () => {
            u.subTree = Fn(u), kn(O, u.subTree, u, m, null);
          };
          X ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && ne()
          ) : ne();
        } else {
          const ne = u.subTree = Fn(u);
          M(null, ne, h, v, u, m, b), f.el = ne.el;
        }
        if (V && ve(V, m), !X && (N = S && S.onVnodeMounted)) {
          const ne = f;
          ve(() => je(N, Y, ne), m);
        }
        (f.shapeFlag & 256 || Y && on(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && ve(u.a, m), u.isMounted = !0, f = h = v = null;
      }
    }, x = u.effect = new ds(
      y,
      () => bs(_),
      u.scope
    ), _ = u.update = () => x.run();
    _.id = u.uid, tt(u, !0), _();
  }, J = (u, f, h) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, ri(u, f.props, v, h), ii(u, f.children, h), It(), Us(), Nt();
  }, I = (u, f, h, v, m, b, C, y, x = !1) => {
    const _ = u && u.children, N = u ? u.shapeFlag : 0, O = f.children, { patchFlag: S, shapeFlag: L } = f;
    if (S > 0) {
      if (S & 128) {
        Q(_, O, h, v, m, b, C, y, x);
        return;
      } else if (S & 256) {
        D(_, O, h, v, m, b, C, y, x);
        return;
      }
    }
    L & 8 ? (N & 16 && Ce(_, m, b), O !== _ && d(h, O)) : N & 16 ? L & 16 ? Q(_, O, h, v, m, b, C, y, x) : Ce(_, m, b, !0) : (N & 8 && d(h, ""), L & 16 && P(O, h, v, m, b, C, y, x));
  }, D = (u, f, h, v, m, b, C, y, x) => {
    u = u || mt, f = f || mt;
    const _ = u.length, N = f.length, O = Math.min(_, N);
    let S;
    for (S = 0; S < O; S++) {
      const L = f[S] = x ? ze(f[S]) : He(f[S]);
      M(u[S], L, h, null, m, b, C, y, x);
    }
    _ > N ? Ce(u, m, b, !0, !1, O) : P(f, h, v, m, b, C, y, x, O);
  }, Q = (u, f, h, v, m, b, C, y, x) => {
    let _ = 0;
    const N = f.length;
    let O = u.length - 1, S = N - 1;
    for (; _ <= O && _ <= S; ) {
      const L = u[_], V = f[_] = x ? ze(f[_]) : He(f[_]);
      if (rt(L, V))
        M(L, V, h, null, m, b, C, y, x);
      else
        break;
      _++;
    }
    for (; _ <= O && _ <= S; ) {
      const L = u[O], V = f[S] = x ? ze(f[S]) : He(f[S]);
      if (rt(L, V))
        M(L, V, h, null, m, b, C, y, x);
      else
        break;
      O--, S--;
    }
    if (_ > O) {
      if (_ <= S) {
        const L = S + 1, V = L < N ? f[L].el : v;
        for (; _ <= S; )
          M(null, f[_] = x ? ze(f[_]) : He(f[_]), h, V, m, b, C, y, x), _++;
      }
    } else if (_ > S)
      for (; _ <= O; )
        me(u[_], m, b, !0), _++;
    else {
      const L = _, V = _, Y = /* @__PURE__ */ new Map();
      for (_ = V; _ <= S; _++) {
        const be = f[_] = x ? ze(f[_]) : He(f[_]);
        be.key != null && Y.set(be.key, _);
      }
      let X, ne = 0;
      const Ie = S - V + 1;
      let gt = !1, Is = 0;
      const Mt = new Array(Ie);
      for (_ = 0; _ < Ie; _++)
        Mt[_] = 0;
      for (_ = L; _ <= O; _++) {
        const be = u[_];
        if (ne >= Ie) {
          me(be, m, b, !0);
          continue;
        }
        let Re;
        if (be.key != null)
          Re = Y.get(be.key);
        else
          for (X = V; X <= S; X++)
            if (Mt[X - V] === 0 && rt(be, f[X])) {
              Re = X;
              break;
            }
        Re === void 0 ? me(be, m, b, !0) : (Mt[Re - V] = _ + 1, Re >= Is ? Is = Re : gt = !0, M(be, f[Re], h, null, m, b, C, y, x), ne++);
      }
      const Ns = gt ? di(Mt) : mt;
      for (X = Ns.length - 1, _ = Ie - 1; _ >= 0; _--) {
        const be = V + _, Re = f[be], Ss = be + 1 < N ? f[be + 1].el : v;
        Mt[_] === 0 ? M(null, Re, h, Ss, m, b, C, y, x) : gt && (X < 0 || _ !== Ns[X] ? ye(Re, h, Ss, 2) : X--);
      }
    }
  }, ye = (u, f, h, v, m = null) => {
    const { el: b, type: C, transition: y, children: x, shapeFlag: _ } = u;
    if (_ & 6) {
      ye(u.component.subTree, f, h, v);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, h, v);
      return;
    }
    if (_ & 64) {
      C.move(u, f, h, pt);
      return;
    }
    if (C === fe) {
      s(b, f, h);
      for (let O = 0; O < x.length; O++)
        ye(x[O], f, h, v);
      s(u.anchor, f, h);
      return;
    }
    if (C === jn) {
      R(u, f, h);
      return;
    }
    if (v !== 2 && _ & 1 && y)
      if (v === 0)
        y.beforeEnter(b), s(b, f, h), ve(() => y.enter(b), m);
      else {
        const { leave: O, delayLeave: S, afterLeave: L } = y, V = () => s(b, f, h), Y = () => {
          O(b, () => {
            V(), L && L();
          });
        };
        S ? S(b, V, Y) : Y();
      }
    else
      s(b, f, h);
  }, me = (u, f, h, v = !1, m = !1) => {
    const { type: b, props: C, ref: y, children: x, dynamicChildren: _, shapeFlag: N, patchFlag: O, dirs: S } = u;
    if (y != null && Xn(y, null, h, u, !0), N & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const L = N & 1 && S, V = !on(u);
    let Y;
    if (V && (Y = C && C.onVnodeBeforeUnmount) && je(Y, f, u), N & 6)
      dt(u.component, h, v);
    else {
      if (N & 128) {
        u.suspense.unmount(h, v);
        return;
      }
      L && et(u, null, f, "beforeUnmount"), N & 64 ? u.type.remove(u, f, h, m, pt, v) : _ && (b !== fe || O > 0 && O & 64) ? Ce(_, f, h, !1, !0) : (b === fe && O & 384 || !m && N & 16) && Ce(x, f, h), v && Ae(u);
    }
    (V && (Y = C && C.onVnodeUnmounted) || L) && ve(() => {
      Y && je(Y, f, u), L && et(u, null, f, "unmounted");
    }, h);
  }, Ae = (u) => {
    const { type: f, el: h, anchor: v, transition: m } = u;
    if (f === fe) {
      Sn(h, v);
      return;
    }
    if (f === jn) {
      B(u);
      return;
    }
    const b = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const { leave: C, delayLeave: y } = m, x = () => C(h, b);
      y ? y(u.el, b, x) : x();
    } else
      b();
  }, Sn = (u, f) => {
    let h;
    for (; u !== f; )
      h = p(u), r(u), u = h;
    r(f);
  }, dt = (u, f, h) => {
    const { bum: v, scope: m, update: b, subTree: C, um: y } = u;
    v && rn(v), m.stop(), b && (b.active = !1, me(C, u, f, h)), y && ve(y, f), ve(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ce = (u, f, h, v = !1, m = !1, b = 0) => {
    for (let C = b; C < u.length; C++)
      me(u[C], f, h, v, m);
  }, ht = (u) => u.shapeFlag & 6 ? ht(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el), As = (u, f, h) => {
    u == null ? f._vnode && me(f._vnode, null, null, !0) : M(f._vnode || null, u, f, null, null, null, h), Us(), Kr(), f._vnode = u;
  }, pt = {
    p: M,
    um: me,
    m: ye,
    r: Ae,
    mt: St,
    mc: P,
    pc: I,
    pbc: oe,
    n: ht,
    o: e
  };
  let Mn, kn;
  return t && ([Mn, kn] = t(pt)), {
    render: As,
    hydrate: Mn,
    createApp: ui(As, Mn)
  };
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Cs(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (k(s) && k(r))
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      let i = r[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[o] = ze(r[o]), i.el = l.el), n || Cs(l, i));
    }
}
function di(e) {
  const t = e.slice(), n = [0];
  let s, r, o, l, i;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, l = n.length - 1; o < l; )
        i = o + l >> 1, e[n[i]] < a ? o = i + 1 : l = i;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, l = n[o - 1]; o-- > 0; )
    n[o] = l, l = t[l];
  return n;
}
const hi = (e) => e.__isTeleport, Lt = (e) => e && (e.disabled || e.disabled === ""), Ys = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Zn = (e, t) => {
  const n = e && e.to;
  return ce(n) ? t ? t(n) : null : n;
}, pi = {
  __isTeleport: !0,
  process(e, t, n, s, r, o, l, i, c, a) {
    const { mc: d, pc: g, pbc: p, o: { insert: w, querySelector: T, createText: A, createComment: M } } = a, F = Lt(t.props);
    let { shapeFlag: U, children: H, dynamicChildren: R } = t;
    if (e == null) {
      const B = t.el = A(""), z = t.anchor = A("");
      w(B, n, s), w(z, n, s);
      const ee = t.target = Zn(t.props, T), E = t.targetAnchor = A("");
      ee && (w(E, ee), l = l || Ys(ee));
      const P = ($, oe) => {
        U & 16 && d(H, $, oe, r, o, l, i, c);
      };
      F ? P(n, z) : ee && P(ee, E);
    } else {
      t.el = e.el;
      const B = t.anchor = e.anchor, z = t.target = e.target, ee = t.targetAnchor = e.targetAnchor, E = Lt(e.props), P = E ? n : z, $ = E ? B : ee;
      if (l = l || Ys(z), R ? (p(e.dynamicChildren, R, P, r, o, l, i), Cs(e, t, !0)) : c || g(e, t, P, $, r, o, l, i, !1), F)
        E || tn(t, n, B, a, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const oe = t.target = Zn(t.props, T);
        oe && tn(t, oe, null, a, 0);
      } else
        E && tn(t, z, ee, a, 1);
    }
  },
  remove(e, t, n, s, { um: r, o: { remove: o } }, l) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: g, props: p } = e;
    if (g && o(d), (l || !Lt(p)) && (o(a), i & 16))
      for (let w = 0; w < c.length; w++) {
        const T = c[w];
        r(T, t, n, !0, !!T.dynamicChildren);
      }
  },
  move: tn,
  hydrate: gi
};
function tn(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: i, shapeFlag: c, children: a, props: d } = e, g = o === 2;
  if (g && s(l, t, n), (!g || Lt(d)) && c & 16)
    for (let p = 0; p < a.length; p++)
      r(a[p], t, n, 2);
  g && s(i, t, n);
}
function gi(e, t, n, s, r, o, { o: { nextSibling: l, parentNode: i, querySelector: c } }, a) {
  const d = t.target = Zn(t.props, c);
  if (d) {
    const g = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Lt(t.props))
        t.anchor = a(l(e), t, i(e), n, s, r, o), t.targetAnchor = g;
      else {
        t.anchor = l(e);
        let p = g;
        for (; p; )
          if (p = l(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, d._lpa = t.targetAnchor && l(t.targetAnchor);
            break;
          }
        a(g, t, d, n, s, r, o);
      }
  }
  return t.anchor && l(t.anchor);
}
const Gn = pi, fe = Symbol(void 0), Es = Symbol(void 0), Le = Symbol(void 0), jn = Symbol(void 0), Rt = [];
let Pe = null;
function G(e = !1) {
  Rt.push(Pe = e ? null : []);
}
function mi() {
  Rt.pop(), Pe = Rt[Rt.length - 1] || null;
}
let Kt = 1;
function Xs(e) {
  Kt += e;
}
function oo(e) {
  return e.dynamicChildren = Kt > 0 ? Pe || mt : null, mi(), Kt > 0 && Pe && Pe.push(e), e;
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
function rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const In = "__vInternal", lo = ({ key: e }) => e != null ? e : null, cn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ce(e) || ue(e) || j(e) ? { i: ke, r: e, k: t, f: !!n } : e : null;
function ie(e, t = null, n = null, s = 0, r = null, o = e === fe ? 0 : 1, l = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lo(t),
    ref: t && cn(t),
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
  return i ? (Ts(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ce(n) ? 8 : 16), Kt > 0 && !l && Pe && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Pe.push(c), c;
}
const Ke = _i;
function _i(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Yl) && (e = Le), vi(e)) {
    const i = Ze(e, t, !0);
    return n && Ts(i, n), Kt > 0 && !o && Pe && (i.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = i : Pe.push(i)), i.patchFlag |= -2, i;
  }
  if (Ti(e) && (e = e.__vccOpts), t) {
    t = Os(t);
    let { class: i, style: c } = t;
    i && !ce(i) && (t.class = Ot(i)), re(c) && (Fr(c) && !k(c) && (c = pe({}, c)), t.style = Et(c));
  }
  const l = ce(e) ? 1 : kl(e) ? 128 : hi(e) ? 64 : re(e) ? 4 : j(e) ? 2 : 0;
  return ie(e, t, n, s, r, l, o, !0);
}
function Os(e) {
  return e ? Fr(e) || In in e ? pe({}, e) : e : null;
}
function Ze(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: l } = e, i = t ? Vt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && lo(i),
    ref: t && t.ref ? n && r ? k(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t) : r,
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
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function es(e = " ", t = 0) {
  return Ke(Es, null, e, t);
}
function Ne(e = "", t = !1) {
  return t ? (G(), _n(Le, null, e)) : Ke(Le, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? Ke(Le) : k(e) ? Ke(
    fe,
    null,
    e.slice()
  ) : typeof e == "object" ? ze(e) : Ke(Es, null, String(e));
}
function ze(e) {
  return e.el === null || e.memo ? e : Ze(e);
}
function Ts(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ts(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(In in t) ? t._ctx = ke : r === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    j(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [es(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Vt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ot([t.class, s.class]));
      else if (r === "style")
        t.style = Et([t.style, s.style]);
      else if (yn(r)) {
        const o = t[r], l = s[r];
        l && o !== l && !(k(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
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
const yi = ro();
let bi = 0;
function wi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || yi, o = {
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
    propsDefaults: Z,
    inheritAttrs: s.inheritAttrs,
    ctx: Z,
    data: Z,
    props: Z,
    attrs: Z,
    slots: Z,
    refs: Z,
    setupState: Z,
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
let de = null;
const io = () => de || ke, xt = (e) => {
  de = e, e.scope.on();
}, ct = () => {
  de && de.scope.off(), de = null;
};
function co(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function xi(e, t = !1) {
  Wt = t;
  const { props: n, children: s } = e.vnode, r = co(e);
  si(e, n, r, t), li(e, s);
  const o = r ? Ci(e, t) : void 0;
  return Wt = !1, o;
}
function Ci(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Lr(new Proxy(e.ctx, Xl));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Oi(e) : null;
    xt(e), It();
    const o = Qe(s, e, 0, [e.props, r]);
    if (Nt(), ct(), yr(o)) {
      if (o.then(ct, ct), t)
        return o.then((l) => {
          Zs(e, l, t);
        }).catch((l) => {
          xn(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Zs(e, o, t);
  } else
    uo(e, t);
}
function Zs(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Hr(t)), uo(e, n);
}
let Gs;
function uo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Gs && !s.render) {
      const r = s.template || ws(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = pe(pe({
          isCustomElement: o,
          delimiters: i
        }, l), c);
        s.render = Gs(r, a);
      }
    }
    e.render = s.render || Fe;
  }
  xt(e), It(), Zl(e), Nt(), ct();
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
        if (n in mn)
          return mn[n](e);
      }
    }));
}
function Ti(e) {
  return j(e) && "__vccOpts" in e;
}
const Me = (e, t) => bl(e, t, Wt), Ai = "3.2.39", Ii = "http://www.w3.org/2000/svg", ot = typeof document < "u" ? document : null, er = ot && /* @__PURE__ */ ot.createElement("template"), Ni = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? ot.createElementNS(Ii, e) : ot.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
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
        const c = i.firstChild;
        for (; c.firstChild; )
          i.appendChild(c.firstChild);
        i.removeChild(c);
      }
      t.insertBefore(i, n);
    }
    return [
      l ? l.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Si(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Mi(e, t, n) {
  const s = e.style, r = ce(n);
  if (n && !r) {
    for (const o in n)
      ts(s, o, n[o]);
    if (t && !ce(t))
      for (const o in t)
        n[o] == null && ts(s, o, "");
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const tr = /\s*!important$/;
function ts(e, t, n) {
  if (k(n))
    n.forEach((s) => ts(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ki(e, t);
    tr.test(n) ? e.setProperty(At(s), n.replace(tr, ""), "important") : e[s] = n;
  }
}
const nr = ["Webkit", "Moz", "ms"], Bn = {};
function ki(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let s = bt(t);
  if (s !== "filter" && s in e)
    return Bn[t] = s;
  s = xr(s);
  for (let r = 0; r < nr.length; r++) {
    const o = nr[r] + s;
    if (o in e)
      return Bn[t] = o;
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
    const c = n == null ? "" : n;
    (e.value !== c || e.tagName === "OPTION") && (e.value = c), n == null && e.removeAttribute(t);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = mr(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
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
let ns = 0;
const Ri = /* @__PURE__ */ Promise.resolve(), ji = () => {
  ns = 0;
}, Bi = () => ns || (Ri.then(ji), ns = fo());
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
    const [i, c] = $i(t);
    if (s) {
      const a = o[t] = Di(s, r);
      De(e, i, a, c);
    } else
      l && (Hi(e, i, l, c), o[t] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : At(e.slice(2)), t];
}
function Di(e, t) {
  const n = (s) => {
    const r = s.timeStamp || fo();
    (Li || r >= n.attached - 1) && Oe(Ki(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Bi(), n;
}
function Ki(e, t) {
  if (k(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const or = /^on[a-z]/, Vi = (e, t, n, s, r = !1, o, l, i, c) => {
  t === "class" ? Si(e, s, r) : t === "style" ? Mi(e, n, s) : yn(t) ? cs(t) || Ui(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wi(e, t, s, r)) ? Fi(e, t, s, o, l, i, c) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Pi(e, t, s, r));
};
function Wi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && or.test(t) && j(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || or.test(t) && ce(n) ? !1 : t in e;
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
const Ge = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (n) => rn(t, n) : t;
};
function zi(e) {
  e.target.composing = !0;
}
function lr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ss = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = Ge(r);
    const o = s || r.props && r.props.type === "number";
    De(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), o && (i = an(i)), e._assign(i);
    }), n && De(e, "change", () => {
      e.value = e.value.trim();
    }), t || (De(e, "compositionstart", zi), De(e, "compositionend", lr), De(e, "change", lr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e._assign = Ge(o), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && an(e.value) === t))
      return;
    const l = t == null ? "" : t;
    e.value !== l && (e.value = l);
  }
}, Ji = {
  deep: !0,
  created(e, t, n) {
    e._assign = Ge(n), De(e, "change", () => {
      const s = e._modelValue, r = Ct(e), o = e.checked, l = e._assign;
      if (k(s)) {
        const i = is(s, r), c = i !== -1;
        if (o && !c)
          l(s.concat(r));
        else if (!o && c) {
          const a = [...s];
          a.splice(i, 1), l(a);
        }
      } else if (Tt(s)) {
        const i = new Set(s);
        o ? i.add(r) : i.delete(r), l(i);
      } else
        l(ao(e, o));
    });
  },
  mounted: ir,
  beforeUpdate(e, t, n) {
    e._assign = Ge(n), ir(e, t, n);
  }
};
function ir(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, k(t) ? e.checked = is(t, s.props.value) > -1 : Tt(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = ft(t, ao(e, !0)));
}
const Qi = {
  created(e, { value: t }, n) {
    e.checked = ft(t, n.props.value), e._assign = Ge(n), De(e, "change", () => {
      e._assign(Ct(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = Ge(s), t !== n && (e.checked = ft(t, s.props.value));
  }
}, Yi = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Tt(t);
    De(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (l) => l.selected).map((l) => n ? an(Ct(l)) : Ct(l));
      e._assign(e.multiple ? r ? new Set(o) : o : o[0]);
    }), e._assign = Ge(s);
  },
  mounted(e, { value: t }) {
    cr(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Ge(n);
  },
  updated(e, { value: t }) {
    cr(e, t);
  }
};
function cr(e, t) {
  const n = e.multiple;
  if (!(n && !k(t) && !Tt(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const o = e.options[s], l = Ct(o);
      if (n)
        k(t) ? o.selected = is(t, l) > -1 : o.selected = t.has(l);
      else if (ft(Ct(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ct(e) {
  return "_value" in e ? e._value : e.value;
}
function ao(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Xi = {
  created(e, t, n) {
    nn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    nn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    nn(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    nn(e, t, n, s, "updated");
  }
};
function Zi(e, t) {
  switch (e) {
    case "SELECT":
      return Yi;
    case "TEXTAREA":
      return ss;
    default:
      switch (t) {
        case "checkbox":
          return Ji;
        case "radio":
          return Qi;
        default:
          return ss;
      }
  }
}
function nn(e, t, n, s, r) {
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
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : kt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), kt(e, !0), s.enter(e)) : s.leave(e, () => {
      kt(e, !1);
    }) : kt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    kt(e, t);
  }
};
function kt(e, t) {
  e.style.display = t ? e._vod : "none";
}
const tc = /* @__PURE__ */ pe({ patchProp: Vi }, Ni);
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
    !j(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function sc(e) {
  return ce(e) ? document.querySelector(e) : e;
}
var fr;
const Jt = typeof window < "u";
Jt && ((fr = window == null ? void 0 : window.navigator) == null ? void 0 : fr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rc(e) {
  return typeof e == "function" ? e() : q(e);
}
function oc(e) {
  return e;
}
function lc(e) {
  return $o() ? (Do(e), !0) : !1;
}
function ic(e, t = !0) {
  io() ? zt(e) : t ? e() : hn(e);
}
function mo(e) {
  var t;
  const n = rc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const cc = Jt ? window : void 0;
Jt && window.document;
Jt && window.navigator;
Jt && window.location;
function uc(e, t = !1) {
  const n = se(), s = () => n.value = Boolean(e());
  return s(), ic(s, t), n;
}
const rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, os = "__vueuse_ssr_handlers__";
rs[os] = rs[os] || {};
rs[os];
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
  const i = uc(() => r && "ResizeObserver" in r), c = () => {
    l && (l.disconnect(), l = void 0);
  }, a = Ye(() => mo(e), (g) => {
    c(), i.value && r && g && (l = new ResizeObserver(t), l.observe(g, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), a();
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
    i ? (r.value = i.reduce((c, { inlineSize: a }) => c + a, 0), o.value = i.reduce((c, { blockSize: a }) => c + a, 0)) : (r.value = l.contentRect.width, o.value = l.contentRect.height);
  }, n), Ye(() => mo(e), (l) => {
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
var gc = Object.defineProperty, hr = Object.getOwnPropertySymbols, mc = Object.prototype.hasOwnProperty, vc = Object.prototype.propertyIsEnumerable, pr = (e, t, n) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _c = (e, t) => {
  for (var n in t || (t = {}))
    mc.call(t, n) && pr(e, n, t[n]);
  if (hr)
    for (var n of hr(t))
      vc.call(t, n) && pr(e, n, t[n]);
  return e;
};
const yc = {
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
}, yc);
function vo(e, t) {
  const n = se(), s = pc(n), r = se([]), o = gl(e), l = se({ start: 0, end: 10 }), { itemHeight: i, overscan: c = 5 } = t, a = (U) => {
    if (typeof i == "number")
      return Math.ceil(U / i);
    const { start: H = 0 } = l.value;
    let R = 0, B = 0;
    for (let z = H; z < o.value.length; z++)
      if (R += i(z), R >= U) {
        B = z;
        break;
      }
    return B - H;
  }, d = (U) => {
    if (typeof i == "number")
      return Math.floor(U / i) + 1;
    let H = 0, R = 0;
    for (let B = 0; B < o.value.length; B++)
      if (H += i(B), H >= U) {
        R = B;
        break;
      }
    return R + 1;
  }, g = () => {
    const U = n.value;
    if (U) {
      const H = d(U.scrollTop), R = a(U.clientHeight), B = H - c, z = H + R + c;
      l.value = {
        start: B < 0 ? 0 : B,
        end: z > o.value.length ? o.value.length : z
      }, r.value = o.value.slice(l.value.start, l.value.end).map((ee, E) => ({
        data: ee,
        index: E + l.value.start
      }));
    }
  };
  Ye([s.width, s.height, e], () => {
    g();
  });
  const p = Me(() => typeof i == "number" ? o.value.length * i : o.value.reduce((U, H, R) => U + i(R), 0)), w = (U) => typeof i == "number" ? U * i : o.value.slice(0, U).reduce((R, B, z) => R + i(z), 0), T = (U) => {
    n.value && (n.value.scrollTop = w(U), g());
  }, A = Me(() => w(l.value.start)), M = Me(() => ({
    style: {
      width: "100%",
      height: `${p.value - A.value}px`,
      marginTop: `${A.value}px`
    }
  }));
  return {
    list: r,
    scrollTo: T,
    containerProps: {
      ref: n,
      onScroll: () => {
        g();
      },
      style: { overflowY: "auto" }
    },
    wrapperProps: M
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
const _o = (e) => {
  e && (e.style.display = "none", Oo(e));
}, yo = (e, t, n, s) => {
  var l;
  const r = se(/* @__PURE__ */ new Map());
  Dt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let i of n.value)
        r.value.set(i, i);
    }
  });
  const o = se([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let i of o.value)
        o.map.set(i.key, i);
  }, Dt(() => {
    t.value && (o.value = t.value, o.rebuildMap());
  }), e) {
    r.value.clear();
    for (let i of Array.apply(null, e.selectedOptions).map((c) => c.value).filter((c) => c))
      r.value.set(i, i);
    o.value = Array.apply(null, e.options).reduce((i, c) => (i.push({ value: c.text, key: c.value, data: c.dataset }), i), []), o.rebuildMap();
  }
  if (Array.isArray(s))
    for (let i of s)
      r.value.set(i, i);
  else
    s != null && r.value.set(s, s);
  return bc(o, (l = e == null ? void 0 : e.id) != null ? l : "extraselect_" + (++wc).toString()), { options: o, selectedOptions: r };
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
  const c = se(0), a = se(!1), d = Me(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const g = [];
      Dt((p) => {
        if (s.value.length >= r) {
          let w = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              w = !g.includes(s.value);
              break;
            case "complete":
              w = g.reduce((T, A) => T && !s.value.startsWith(A), !0);
              break;
          }
          if (w) {
            a.value = !0;
            const T = setTimeout(() => {
              g.push(s.value), c.value += 1, i.body = { ...i.body, ...o.value }, gr(t, s.value, i).then((A) => {
                e.actions.addRange(A), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(T);
            });
          }
        }
      });
    } else
      gr(t, null, i).then((g) => {
        e.actions.addRange(g), e.actions.sort();
      });
  return { searchingFlag: d };
}, wo = (e, t) => {
  const n = se(""), s = se([]), r = se({});
  for (let l of t) {
    let i = document.getElementById(l);
    r.value[l] = i == null ? void 0 : i.value, i && i.addEventListener("change", (c) => {
      r.value[l] = c.target.value;
    });
  }
  const o = function(l, i) {
    let c = l.value;
    return Object.keys(r.value).length > 0 && (c = c.filter((a) => {
      var d, g;
      for (let p in r.value)
        if (((d = r.value[p]) != null ? d : "").length > 0 && (!((g = a.data) != null && g.hasOwnProperty(p)) || a.data[p] != r.value[p]))
          return !1;
      return !0;
    })), i.length > 0 && (c = c.filter((a) => a.value.toLowerCase().includes(i.toLowerCase()))), c;
  };
  return Dt(() => {
    s.value = o(e, n.value);
  }), { filterText: n, filteredOptions: s, filterValues: r };
}, xo = (e, t, n, s, r, o, l) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(g) {
    const w = document.createElement("canvas").getContext("2d");
    return w.font = i, w.measureText(g).width;
  }, a = Me(() => {
    var p, w;
    const g = (p = Qt(s.value).width) != null ? p : 100;
    if (l === "inherit")
      return g;
    if (l == null || l === "dynamic") {
      const T = (w = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? w : 16;
      return Math.max(g, Math.max(...e.value.map((A) => c(A.value))) + 20 + T * 3);
    }
    return l;
  }), d = se({
    position: "absolute",
    "min-width": "max-content"
  });
  return Ll(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var g = Qt(s.value), p = Qt(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var p = Qt(o.value);
    let w = -p.left + g.left;
    const T = window.document.documentElement.clientWidth;
    w + a.value > T && (w = T - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + g.top + g.height).toString() + "px",
      left: w.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: c };
}, xc = {
  key: 0,
  class: "extra-select selection"
}, Cc = ["onClick"], Ec = ["innerHTML"], Oc = ["value"], Tc = {
  key: 0,
  class: "input-searching"
}, Ac = {
  key: 0,
  class: "allselect-clear"
}, Ic = { class: "row-input" }, Nc = ["checked"], Sc = /* @__PURE__ */ ie("b", null, "Select all", -1), Mc = { class: "row-input" }, kc = ["checked"], Pc = /* @__PURE__ */ ie("b", null, "Select Filtered", -1), Fc = {
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
    var ae, te, J;
    const n = e, s = Me(() => {
      var I, D;
      return (D = (I = n.originalNode) == null ? void 0 : I.multiple) != null ? D : n.multiple;
    }), { options: r, selectedOptions: o } = yo(n.originalNode, Kn(n, "options"), Kn(n, "modelValue"), n.initialValue), l = (ae = n.originalNode) == null ? void 0 : ae.classList, i = Object.values((J = (te = n.originalNode) == null ? void 0 : te.style) != null ? J : {});
    _o(n.originalNode);
    const { filterText: c, filteredOptions: a, filterValues: d } = wo(r, n.filterFields), { searchingFlag: g } = bo(
      r,
      n.url,
      n.searchableUrl,
      c,
      n.minChars,
      d,
      n.fetchMode,
      n.fetchOptions
    ), p = se(null), w = se(null), T = se(null), A = se(!1), M = se(null), F = function(I) {
      const D = un(I.target);
      D.push(I.target), !D.includes(p.value) && !D.includes(w.value) && (A.value = !1);
    };
    zt(() => {
      if (n.dropdownContainer) {
        let I = !1;
        M.value = un(p.value).find((D) => !!(D instanceof Element && (D.matches(n.dropdownContainer) && (I = !0), I && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(D).position))));
      }
      if (M.value == null && (M.value = document.querySelector("body")), n.originalNode) {
        for (let I of l)
          I != "extraselect" && p.value.classList.add(I);
        for (let I of i)
          p.value.style[I] = n.originalNode.style[I];
        i.includes("background-color") || (p.value.style.backgroundColor = "white");
      }
      window.document.addEventListener("mousedown", F), window.document.addEventListener("focusin", F);
    }), An(() => {
      window.document.removeEventListener("mousedown", F), window.document.removeEventListener("focusin", F);
    });
    const { dropdownStyle: U, getTextWidth: H } = xo(r, o, A, p, w, M, n.maxWidth), R = (I) => {
      hn(
        () => {
          var D;
          return (D = n.originalNode) == null ? void 0 : D.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", I);
    }, B = (I) => {
      s.value ? o.value.has(I) ? o.value.delete(I) : o.value.set(I, I) : (o.value.clear(), o.value.set(I, I), A.value = !1), R(Array.from(o.value.keys()));
    }, z = (I) => {
      ee(I, !1), c.value = "";
    }, ee = (I, D = null) => {
      D == null && (D = !P.value), D ? (o.value.clear(), r.value.forEach((Q) => o.value.set(Q.key, Q.key))) : o.value.clear(), R(Array.from(o.value.keys()));
    }, E = () => {
      $.value ? a.value.forEach((I) => {
        o.value.has(I.key) && o.value.delete(I.key);
      }) : a.value.forEach((I) => {
        o.value.has(I.key) || o.value.set(I.key, I.key);
      }), R(Array.from(o.value.keys()));
    };
    Ye(A, (I, D) => {
      I != D && (I ? n.search && hn(() => {
        T.value.focus({ focusVisible: !0 });
      }) : c.value = "");
    });
    const P = Me(() => o.value.size == r.value.length), $ = Me(() => a.value.reduce((I, D) => I && o.value.has(D.key), !0)), oe = Me(() => o.value.size == 0), _e = Me(() => {
      var I, D, Q, ye, me;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (P.value)
          return "All selected";
        if (oe.value)
          return "No selection";
        const Ae = p.value ? getComputedStyle(p.value) : null, Sn = ((I = p.value) == null ? void 0 : I.clientWidth) - parseInt(Ae == null ? void 0 : Ae.paddingLeft) - parseInt(Ae == null ? void 0 : Ae.paddingRight);
        let dt = o.value.size + " selected - ", Ce = !0;
        for (let ht of o.value)
          if (Ce ? Ce = !1 : dt += ", ", dt += (Q = (D = r.map.get(ht[0])) == null ? void 0 : D.value) != null ? Q : g.value ? "Loading..." : "Value not found", Sn < H(dt))
            return o.value.size + " selected";
        return dt;
      } else
        for (let Ae of o.value)
          return (me = (ye = r.map.get(Ae[0])) == null ? void 0 : ye.value) != null ? me : g.value ? "Loading..." : "Value not found";
      return "No selection";
    }), { list: Te, containerProps: at, wrapperProps: St } = vo(
      a,
      {
        itemHeight: 32
      }
    );
    return (I, D) => (G(), le(fe, null, [
      n.showSelected ? (G(), le("div", xc, [
        (G(!0), le(fe, null, ln(q(o), (Q) => {
          var ye;
          return G(), le("div", {
            key: Q,
            onClick: (me) => B(Q[0]),
            class: "selection-badge"
          }, [
            es(Ft((ye = q(r).find((me) => me.key == Q[0])) == null ? void 0 : ye.value) + " ", 1),
            ie("div", {
              class: "selection-remove",
              innerHTML: n.removeIcon
            }, null, 8, Ec)
          ], 8, Cc);
        }), 128))
      ])) : Ne("", !0),
      ie("input", Vt({
        onFocus: D[0] || (D[0] = (Q) => A.value = !0),
        onClick: D[1] || (D[1] = (Q) => A.value = !0),
        ref_key: "inputNode",
        ref: p,
        value: q(_e),
        class: "extra-select extra-select-input",
        readonly: ""
      }, I.$attrs), null, 16, Oc),
      M.value ? (G(), _n(Gn, {
        key: 1,
        to: M.value
      }, [
        gn(ie("div", {
          class: Ot(["extra-select dropdown", { searching: q(g) > 0 }]),
          ref_key: "dropdownNode",
          ref: w,
          style: Et(q(U))
        }, [
          n.search ? (G(), le("div", Tc, [
            gn(ie("input", {
              ref_key: "searchNode",
              ref: T,
              class: "extra-select-search",
              "onUpdate:modelValue": D[2] || (D[2] = (Q) => ue(c) ? c.value = Q : null),
              type: "text",
              autocomplete: "off",
              autocorrect: "off",
              autocapitilize: "off",
              spellcheck: "false",
              placeholder: "Cerca..."
            }, null, 512), [
              [ss, q(c)]
            ])
          ])) : Ne("", !0),
          q(c).length >= n.minChars ? (G(), le(fe, { key: 1 }, [
            q(s) ? (G(), le("div", Ac, [
              q(c).length == 0 ? (G(), le("div", {
                key: 0,
                onClick: ee,
                class: "all-select"
              }, [
                ie("div", Ic, [
                  ie("input", {
                    checked: q(P),
                    type: "checkbox"
                  }, null, 8, Nc),
                  Sc
                ])
              ])) : Ne("", !0),
              q(a).length > 0 && q(c).length > 0 ? (G(), le("div", {
                key: 1,
                onClick: E,
                class: "all-select"
              }, [
                ie("div", Mc, [
                  ie("input", {
                    checked: q($),
                    type: "checkbox"
                  }, null, 8, kc),
                  Pc
                ])
              ])) : Ne("", !0),
              ie("div", {
                class: "clear",
                onClick: z
              }, "Clear")
            ])) : Ne("", !0),
            q(a).length == 0 ? (G(), le("div", Fc, "No matches found")) : Ne("", !0)
          ], 64)) : (G(), le("div", Lc, "Insert at least " + Ft(n.minChars) + " characters", 1)),
          ie("div", Vt(q(at), { class: "scroller" }), [
            ie("div", vr(Os(q(St))), [
              (G(!0), le(fe, null, ln(q(Te), (Q) => (G(), le("button", {
                key: Q.index,
                class: "dropdown-row",
                onClick: ho((ye) => B(Q.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", jc, [
                  q(s) ? (G(), le("input", {
                    key: 0,
                    checked: q(o).has(Q.data.key),
                    type: "checkbox"
                  }, null, 8, Bc)) : Ne("", !0),
                  es(" " + Ft(Q.data.value), 1)
                ])
              ], 8, Rc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [po, A.value]
        ])
      ], 8, ["to"])) : Ne("", !0),
      n.originalNode ? (G(), _n(Gn, {
        key: 2,
        to: n.originalNode
      }, [
        (G(!0), le(fe, null, ln(q(o), (Q) => (G(), le("option", {
          key: Q[0],
          selected: "selected",
          value: Q[0]
        }, null, 8, Hc))), 128))
      ], 8, ["to"])) : Ne("", !0)
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
    var B, z, ee;
    const n = e, { options: s } = yo(null, Kn(n, "options"), se([])), r = (B = n.originalNode) == null ? void 0 : B.classList, o = Object.values((ee = (z = n.originalNode) == null ? void 0 : z.style) != null ? ee : {});
    _o(n.originalNode);
    const { filterText: l, filteredOptions: i, filterValues: c } = wo(s, n.filterFields), { searchingFlag: a } = bo(
      s,
      n.url,
      n.searchableUrl,
      l,
      n.minChars,
      c,
      n.fetchMode,
      n.fetchOptions
    ), d = se(null), g = se(null), p = se(!1), w = se(null), T = function(E) {
      const P = un(E.target);
      P.push(E.target), !P.includes(d.value) && !P.includes(g.value) && (p.value = !1);
    };
    zt(() => {
      if (n.dropdownContainer) {
        let E = !1;
        w.value = un(d.value).find((P) => !!(P instanceof Element && (P.matches(n.dropdownContainer) && (E = !0), E && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(P).position))));
      }
      if (w.value == null && (w.value = document.querySelector("body")), n.originalNode) {
        for (let E of r)
          E != "extrasuggest" && d.value.classList.add(E);
        for (let E of o)
          d.value.style[E] = n.originalNode.style[E];
        o.includes("background-color") || (d.value.style.backgroundColor = "white"), l.value = n.originalNode.value, Dt(() => {
          n.modelValue != null && (l.value = n.modelValue);
        });
      }
      window.document.addEventListener("mousedown", T), window.document.addEventListener("focusin", T);
    }), An(() => {
      window.document.removeEventListener("mousedown", T), window.document.removeEventListener("focusin", T);
    });
    const { dropdownStyle: A } = xo(s, se([]), p, d, g, w, n.maxWidth), M = (E) => {
      l.value = s.map.get(E).value, p.value = !1;
    }, F = () => {
      var E;
      n.originalNode && (n.originalNode.value = l.value, (E = n.originalNode) == null || E.dispatchEvent(new Event("change", { bubbles: !0 }))), t("update:modelValue", l.value);
    };
    Ye(() => p.value, (E) => {
      E === !1 && F();
    });
    const { list: U, containerProps: H, wrapperProps: R } = vo(
      i,
      {
        itemHeight: 32
      }
    );
    return (E, P) => (G(), le(fe, null, [
      gn(ie("input", Vt({
        onFocus: P[0] || (P[0] = ($) => p.value = !0),
        onClick: P[1] || (P[1] = ($) => p.value = !0),
        ref_key: "inputNode",
        ref: d,
        "onUpdate:modelValue": P[2] || (P[2] = ($) => ue(l) ? l.value = $ : null),
        class: "extra-select extra-select-input"
      }, E.$attrs), null, 16), [
        [Xi, q(l)]
      ]),
      w.value ? (G(), _n(Gn, {
        key: 0,
        to: w.value
      }, [
        gn(ie("div", {
          class: Ot(["extra-select dropdown", { searching: q(a) > 0 }]),
          ref_key: "dropdownNode",
          ref: g,
          style: Et(q(A))
        }, [
          q(l).length >= n.minChars ? (G(), le(fe, { key: 0 }, [
            q(i).length == 0 ? (G(), le("div", Dc, "No matches found")) : Ne("", !0)
          ], 64)) : (G(), le("div", Kc, "Insert at least " + Ft(n.minChars) + " characters", 1)),
          ie("div", Vt(q(H), { class: "scroller" }), [
            ie("div", vr(Os(q(R))), [
              (G(!0), le(fe, null, ln(q(U), ($) => (G(), le("button", {
                key: $.index,
                class: "dropdown-row",
                onClick: ho((oe) => M($.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ie("div", Wc, Ft($.data.value), 1)
              ], 8, Vc))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [po, p.value]
        ])
      ], 8, ["to"])) : Ne("", !0)
    ], 64));
  }
}), Co = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Co.bindNew(e);
    });
  },
  bindNew(e) {
    ut.lock(e, "extra-select", () => {
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
        s.unmount(), n.remove(), e.remove(), ut.remove(e, "extra-select");
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
    ut.lock(e, "extra-suggest", () => {
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
        s.unmount(), n.remove(), e.remove(), ut.remove(e, "extra-suggest");
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
