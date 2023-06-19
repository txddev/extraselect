const ke = /* @__PURE__ */ new WeakMap();
class ut {
  static put(t, n, s) {
    ke.has(t) || ke.set(t, /* @__PURE__ */ new Map()), ke.get(t).set(n, s);
  }
  static get(t, n) {
    return ke.get(t).get(n);
  }
  static has(t, n) {
    return ke.has(t) && ke.get(t).has(n);
  }
  static remove(t, n) {
    var s = ke.get(t).delete(n);
    return ke.get(t).size !== 0 && ke.delete(t), s;
  }
  static lock(t, n, s) {
    return ut.has(t, n) ? !1 : (ut.put(t, n, !0), s());
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = ke);
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
function gt(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s instanceof HTMLElement && !(t instanceof HTMLElement && s === t) && !(typeof t == "string" && s.matches(t)); ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return s != null && n.push(s), n;
}
function Ll(e) {
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
const Z = {}, mt = [], Se = () => {
}, Rl = () => !1, jl = /^on[^a-z]/, An = (e) => jl.test(e), as = (e) => e.startsWith("onUpdate:"), ge = Object.assign, fs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $l = Object.prototype.hasOwnProperty, $ = (e, t) => $l.call(e, t), P = Array.isArray, vt = (e) => Zt(e) === "[object Map]", Ct = (e) => Zt(e) === "[object Set]", ks = (e) => Zt(e) === "[object Date]", k = (e) => typeof e == "function", se = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", br = (e) => X(e) && k(e.then) && k(e.catch), wr = Object.prototype.toString, Zt = (e) => wr.call(e), Hl = (e) => Zt(e).slice(8, -1), xr = (e) => Zt(e) === "[object Object]", ds = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ us(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ul = /-(\w)/g, bt = In((e) => e.replace(Ul, (t, n) => n ? n.toUpperCase() : "")), Dl = /\B([A-Z])/g, Tt = In(
  (e) => e.replace(Dl, "-$1").toLowerCase()
), Er = In(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), Un = In(
  (e) => e ? `on${Er(e)}` : ""
), Kt = (e, t) => !Object.is(e, t), dn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, _n = (e, t, n) => {
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
const Wn = () => Ls || (Ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = se(s) ? zl(s) : At(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else {
    if (se(e))
      return e;
    if (X(e))
      return e;
  }
}
const Bl = /;(?![^(]*\))/g, Kl = /:([^]+)/, Vl = /\/\*[^]*?\*\//g;
function zl(e) {
  const t = {};
  return e.replace(Vl, "").split(Bl).forEach((n) => {
    if (n) {
      const s = n.split(Kl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function It(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = It(e[n]);
      s && (t += s + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Or(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !se(t) && (e.class = It(t)), n && (e.style = At(n)), e;
}
const Wl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ql = /* @__PURE__ */ us(Wl);
function Cr(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = at(e[s], t[s]);
  return n;
}
function at(e, t) {
  if (e === t)
    return !0;
  let n = ks(e), s = ks(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Bt(e), s = Bt(t), n || s)
    return e === t;
  if (n = P(e), s = P(t), n || s)
    return n && s ? Jl(e, t) : !1;
  if (n = X(e), s = X(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, l = Object.keys(t).length;
    if (r !== l)
      return !1;
    for (const o in e) {
      const i = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (i && !c || !i && c || !at(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function hs(e, t) {
  return e.findIndex((n) => at(n, t));
}
const Le = (e) => se(e) ? e : e == null ? "" : P(e) || X(e) && (e.toString === wr || !k(e.toString)) ? JSON.stringify(e, Tr, 2) : String(e), Tr = (e, t) => t && t.__v_isRef ? Tr(e, t.value) : vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Ct(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : X(t) && !P(t) && !xr(t) ? String(t) : t;
let Ee;
class Ql {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    }
  }
  on() {
    Ee = this;
  }
  off() {
    Ee = this.parent;
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
function Yl(e, t = Ee) {
  t && t.active && t.effects.push(e);
}
function Ar() {
  return Ee;
}
function Xl(e) {
  Ee && Ee.cleanups.push(e);
}
const ps = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ir = (e) => (e.w & Ye) > 0, Sr = (e) => (e.n & Ye) > 0, Zl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ye;
}, Gl = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Ir(r) && !Sr(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ye, r.n &= ~Ye;
    }
    t.length = n;
  }
}, bn = /* @__PURE__ */ new WeakMap();
let Rt = 0, Ye = 1;
const qn = 30;
let Ae;
const it = Symbol(""), Jn = Symbol("");
class gs {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Yl(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ae, n = qe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ae, Ae = this, qe = !0, Ye = 1 << ++Rt, Rt <= qn ? Zl(this) : Rs(this), this.fn();
    } finally {
      Rt <= qn && Gl(this), Ye = 1 << --Rt, Ae = this.parent, qe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ae === this ? this.deferStop = !0 : this.active && (Rs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Rs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let qe = !0;
const Pr = [];
function St() {
  Pr.push(qe), qe = !1;
}
function Pt() {
  const e = Pr.pop();
  qe = e === void 0 ? !0 : e;
}
function we(e, t, n) {
  if (qe && Ae) {
    let s = bn.get(e);
    s || bn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = ps()), Fr(r);
  }
}
function Fr(e, t) {
  let n = !1;
  Rt <= qn ? Sr(e) || (e.n |= Ye, n = !Ir(e)) : n = !e.has(Ae), n && (e.add(Ae), Ae.deps.push(e));
}
function Ke(e, t, n, s, r, l) {
  const o = bn.get(e);
  if (!o)
    return;
  let i = [];
  if (t === "clear")
    i = [...o.values()];
  else if (n === "length" && P(e)) {
    const c = Number(s);
    o.forEach((a, d) => {
      (d === "length" || d >= c) && i.push(a);
    });
  } else
    switch (n !== void 0 && i.push(o.get(n)), t) {
      case "add":
        P(e) ? ds(n) && i.push(o.get("length")) : (i.push(o.get(it)), vt(e) && i.push(o.get(Jn)));
        break;
      case "delete":
        P(e) || (i.push(o.get(it)), vt(e) && i.push(o.get(Jn)));
        break;
      case "set":
        vt(e) && i.push(o.get(it));
        break;
    }
  if (i.length === 1)
    i[0] && Qn(i[0]);
  else {
    const c = [];
    for (const a of i)
      a && c.push(...a);
    Qn(ps(c));
  }
}
function Qn(e, t) {
  const n = P(e) ? e : [...e];
  for (const s of n)
    s.computed && js(s);
  for (const s of n)
    s.computed || js(s);
}
function js(e, t) {
  (e !== Ae || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function eo(e, t) {
  var n;
  return (n = bn.get(e)) == null ? void 0 : n.get(t);
}
const to = /* @__PURE__ */ us("__proto__,__v_isRef,__isVue"), Mr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
), no = /* @__PURE__ */ ms(), so = /* @__PURE__ */ ms(!1, !0), ro = /* @__PURE__ */ ms(!0), $s = /* @__PURE__ */ lo();
function lo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = U(this);
      for (let l = 0, o = this.length; l < o; l++)
        we(s, "get", l + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(U)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      St();
      const s = U(this)[t].apply(this, n);
      return Pt(), s;
    };
  }), e;
}
function oo(e) {
  const t = U(this);
  return we(t, "has", e), t.hasOwnProperty(e);
}
function ms(e = !1, t = !1) {
  return function(s, r, l) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && l === (e ? t ? Eo : jr : t ? Rr : Lr).get(s))
      return s;
    const o = P(s);
    if (!e) {
      if (o && $($s, r))
        return Reflect.get($s, r, l);
      if (r === "hasOwnProperty")
        return oo;
    }
    const i = Reflect.get(s, r, l);
    return (Bt(r) ? Mr.has(r) : to(r)) || (e || we(s, "get", r), t) ? i : ce(i) ? o && ds(r) ? i : i.value : X(i) ? e ? $r(i) : ys(i) : i;
  };
}
const io = /* @__PURE__ */ Nr(), co = /* @__PURE__ */ Nr(!0);
function Nr(e = !1) {
  return function(n, s, r, l) {
    let o = n[s];
    if (wt(o) && ce(o) && !ce(r))
      return !1;
    if (!e && (!wn(r) && !wt(r) && (o = U(o), r = U(r)), !P(n) && ce(o) && !ce(r)))
      return o.value = r, !0;
    const i = P(n) && ds(s) ? Number(s) < n.length : $(n, s), c = Reflect.set(n, s, r, l);
    return n === U(l) && (i ? Kt(r, o) && Ke(n, "set", s, r) : Ke(n, "add", s, r)), c;
  };
}
function uo(e, t) {
  const n = $(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ke(e, "delete", t, void 0), s;
}
function ao(e, t) {
  const n = Reflect.has(e, t);
  return (!Bt(t) || !Mr.has(t)) && we(e, "has", t), n;
}
function fo(e) {
  return we(e, "iterate", P(e) ? "length" : it), Reflect.ownKeys(e);
}
const kr = {
  get: no,
  set: io,
  deleteProperty: uo,
  has: ao,
  ownKeys: fo
}, ho = {
  get: ro,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, po = /* @__PURE__ */ ge(
  {},
  kr,
  {
    get: so,
    set: co
  }
), vs = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function nn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = U(e), l = U(t);
  n || (t !== l && we(r, "get", t), we(r, "get", l));
  const { has: o } = Sn(r), i = s ? vs : n ? ws : Vt;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function sn(e, t = !1) {
  const n = this.__v_raw, s = U(n), r = U(e);
  return t || (e !== r && we(s, "has", e), we(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function rn(e, t = !1) {
  return e = e.__v_raw, !t && we(U(e), "iterate", it), Reflect.get(e, "size", e);
}
function Hs(e) {
  e = U(e);
  const t = U(this);
  return Sn(t).has.call(t, e) || (t.add(e), Ke(t, "add", e, e)), this;
}
function Us(e, t) {
  t = U(t);
  const n = U(this), { has: s, get: r } = Sn(n);
  let l = s.call(n, e);
  l || (e = U(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? Kt(t, o) && Ke(n, "set", e, t) : Ke(n, "add", e, t), this;
}
function Ds(e) {
  const t = U(this), { has: n, get: s } = Sn(t);
  let r = n.call(t, e);
  r || (e = U(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && Ke(t, "delete", e, void 0), l;
}
function Bs() {
  const e = U(this), t = e.size !== 0, n = e.clear();
  return t && Ke(e, "clear", void 0, void 0), n;
}
function ln(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = U(o), c = t ? vs : e ? ws : Vt;
    return !e && we(i, "iterate", it), o.forEach((a, d) => s.call(r, c(a), c(d), l));
  };
}
function on(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = U(r), o = vt(l), i = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), d = n ? vs : t ? ws : Vt;
    return !t && we(
      l,
      "iterate",
      c ? Jn : it
    ), {
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
function ze(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function go() {
  const e = {
    get(l) {
      return nn(this, l);
    },
    get size() {
      return rn(this);
    },
    has: sn,
    add: Hs,
    set: Us,
    delete: Ds,
    clear: Bs,
    forEach: ln(!1, !1)
  }, t = {
    get(l) {
      return nn(this, l, !1, !0);
    },
    get size() {
      return rn(this);
    },
    has: sn,
    add: Hs,
    set: Us,
    delete: Ds,
    clear: Bs,
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
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
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
    add: ze("add"),
    set: ze("set"),
    delete: ze("delete"),
    clear: ze("clear"),
    forEach: ln(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = on(
      l,
      !1,
      !1
    ), n[l] = on(
      l,
      !0,
      !1
    ), t[l] = on(
      l,
      !1,
      !0
    ), s[l] = on(
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
  mo,
  vo,
  _o,
  yo
] = /* @__PURE__ */ go();
function _s(e, t) {
  const n = t ? e ? yo : _o : e ? vo : mo;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    $(n, r) && r in s ? n : s,
    r,
    l
  );
}
const bo = {
  get: /* @__PURE__ */ _s(!1, !1)
}, wo = {
  get: /* @__PURE__ */ _s(!1, !0)
}, xo = {
  get: /* @__PURE__ */ _s(!0, !1)
}, Lr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap();
function Oo(e) {
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
function Co(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oo(Hl(e));
}
function ys(e) {
  return wt(e) ? e : bs(
    e,
    !1,
    kr,
    bo,
    Lr
  );
}
function To(e) {
  return bs(
    e,
    !1,
    po,
    wo,
    Rr
  );
}
function $r(e) {
  return bs(
    e,
    !0,
    ho,
    xo,
    jr
  );
}
function bs(e, t, n, s, r) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = Co(e);
  if (o === 0)
    return e;
  const i = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, i), i;
}
function _t(e) {
  return wt(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function wn(e) {
  return !!(e && e.__v_isShallow);
}
function Hr(e) {
  return _t(e) || wt(e);
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Ur(e) {
  return _n(e, "__v_skip", !0), e;
}
const Vt = (e) => X(e) ? ys(e) : e, ws = (e) => X(e) ? $r(e) : e;
function Dr(e) {
  qe && Ae && (e = U(e), Fr(e.dep || (e.dep = ps())));
}
function Br(e, t) {
  e = U(e);
  const n = e.dep;
  n && Qn(n);
}
function ce(e) {
  return !!(e && e.__v_isRef === !0);
}
function W(e) {
  return Kr(e, !1);
}
function Ao(e) {
  return Kr(e, !0);
}
function Kr(e, t) {
  return ce(e) ? e : new Io(e, t);
}
class Io {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : U(t), this._value = n ? t : Vt(t);
  }
  get value() {
    return Dr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || wn(t) || wt(t);
    t = n ? t : U(t), Kt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Vt(t), Br(this));
  }
}
function j(e) {
  return ce(e) ? e.value : e;
}
const So = {
  get: (e, t, n) => j(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ce(r) && !ce(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Vr(e) {
  return _t(e) ? e : new Proxy(e, So);
}
class Po {
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
  get dep() {
    return eo(U(this._object), this._key);
  }
}
class Fo {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function $t(e, t, n) {
  return ce(e) ? e : k(e) ? new Fo(e) : X(e) && arguments.length > 1 ? Mo(e, t, n) : W(e);
}
function Mo(e, t, n) {
  const s = e[t];
  return ce(s) ? s : new Po(
    e,
    t,
    n
  );
}
class No {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new gs(t, () => {
      this._dirty || (this._dirty = !0, Br(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = U(this);
    return Dr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function ko(e, t, n = !1) {
  let s, r;
  const l = k(e);
  return l ? (s = e, r = Se) : (s = e.get, r = e.set), new No(s, r, l || !r, n);
}
function Je(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (l) {
    Pn(l, t, n);
  }
  return r;
}
function Pe(e, t, n, s) {
  if (k(e)) {
    const l = Je(e, t, n, s);
    return l && br(l) && l.catch((o) => {
      Pn(o, t, n);
    }), l;
  }
  const r = [];
  for (let l = 0; l < e.length; l++)
    r.push(Pe(e[l], t, n, s));
  return r;
}
function Pn(e, t, n, s = !0) {
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
      Je(
        c,
        null,
        10,
        [e, o, i]
      );
      return;
    }
  }
  Lo(e, n, r, s);
}
function Lo(e, t, n, s = !0) {
  console.error(e);
}
let zt = !1, Yn = !1;
const me = [];
let je = 0;
const yt = [];
let Ue = null, rt = 0;
const zr = /* @__PURE__ */ Promise.resolve();
let xs = null;
function Wt(e) {
  const t = xs || zr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = je + 1, n = me.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    qt(me[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Es(e) {
  (!me.length || !me.includes(
    e,
    zt && e.allowRecurse ? je + 1 : je
  )) && (e.id == null ? me.push(e) : me.splice(Ro(e.id), 0, e), Wr());
}
function Wr() {
  !zt && !Yn && (Yn = !0, xs = zr.then(Jr));
}
function jo(e) {
  const t = me.indexOf(e);
  t > je && me.splice(t, 1);
}
function $o(e) {
  P(e) ? yt.push(...e) : (!Ue || !Ue.includes(
    e,
    e.allowRecurse ? rt + 1 : rt
  )) && yt.push(e), Wr();
}
function Ks(e, t = zt ? je + 1 : 0) {
  for (; t < me.length; t++) {
    const n = me[t];
    n && n.pre && (me.splice(t, 1), t--, n());
  }
}
function qr(e) {
  if (yt.length) {
    const t = [...new Set(yt)];
    if (yt.length = 0, Ue) {
      Ue.push(...t);
      return;
    }
    for (Ue = t, Ue.sort((n, s) => qt(n) - qt(s)), rt = 0; rt < Ue.length; rt++)
      Ue[rt]();
    Ue = null, rt = 0;
  }
}
const qt = (e) => e.id == null ? 1 / 0 : e.id, Ho = (e, t) => {
  const n = qt(e) - qt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Jr(e) {
  Yn = !1, zt = !0, me.sort(Ho);
  const t = Se;
  try {
    for (je = 0; je < me.length; je++) {
      const n = me[je];
      n && n.active !== !1 && Je(n, null, 14);
    }
  } finally {
    je = 0, me.length = 0, qr(), zt = !1, xs = null, (me.length || yt.length) && Jr();
  }
}
function Uo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || Z;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: h, trim: p } = s[d] || Z;
    p && (r = n.map((y) => se(y) ? y.trim() : y)), h && (r = n.map(yn));
  }
  let i, c = s[i = Un(t)] || s[i = Un(bt(t))];
  !c && l && (c = s[i = Un(Tt(t))]), c && Pe(
    c,
    e,
    6,
    r
  );
  const a = s[i + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Pe(
      a,
      e,
      6,
      r
    );
  }
}
function Qr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let o = {}, i = !1;
  if (!k(e)) {
    const c = (a) => {
      const d = Qr(a, t, !0);
      d && (i = !0, ge(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !i ? (X(e) && s.set(e, null), null) : (P(l) ? l.forEach((c) => o[c] = null) : ge(o, l), X(e) && s.set(e, o), o);
}
function Fn(e, t) {
  return !e || !An(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), $(e, t[0].toLowerCase() + t.slice(1)) || $(e, Tt(t)) || $(e, t));
}
let Ce = null, Yr = null;
function xn(e) {
  const t = Ce;
  return Ce = e, Yr = e && e.type.__scopeId || null, t;
}
function Do(e, t = Ce, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && er(-1);
    const l = xn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      xn(l), s._d && er(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Dn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: l,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: a,
    render: d,
    renderCache: h,
    data: p,
    setupState: y,
    ctx: C,
    inheritAttrs: E
  } = e;
  let L, D;
  const H = xn(e);
  try {
    if (n.shapeFlag & 4) {
      const M = r || s;
      L = Re(
        d.call(
          M,
          M,
          h,
          l,
          y,
          p,
          C
        )
      ), D = c;
    } else {
      const M = t;
      L = Re(
        M.length > 1 ? M(
          l,
          { attrs: c, slots: i, emit: a }
        ) : M(
          l,
          null
        )
      ), D = t.props ? c : Bo(c);
    }
  } catch (M) {
    Dt.length = 0, Pn(M, e, 1), L = Be(ft);
  }
  let q = L;
  if (D && E !== !1) {
    const M = Object.keys(D), { shapeFlag: ae } = q;
    M.length && ae & 7 && (o && M.some(as) && (D = Ko(
      D,
      o
    )), q = xt(q, D));
  }
  return n.dirs && (q = xt(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (q.transition = n.transition), L = q, xn(H), L;
}
const Bo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || An(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ko = (e, t) => {
  const n = {};
  for (const s in e)
    (!as(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vo(e, t, n) {
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
      for (let h = 0; h < d.length; h++) {
        const p = d[h];
        if (o[p] !== s[p] && !Fn(a, p))
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
    if (t[l] !== e[l] && !Fn(n, l))
      return !0;
  }
  return !1;
}
function zo({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Wo = (e) => e.__isSuspense;
function qo(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : $o(e);
}
function Jt(e, t) {
  return Mn(e, null, t);
}
function Jo(e, t) {
  return Mn(
    e,
    null,
    { flush: "post" }
  );
}
const cn = {};
function Qe(e, t, n) {
  return Mn(e, t, n);
}
function Mn(e, t, { immediate: n, deep: s, flush: r, onTrack: l, onTrigger: o } = Z) {
  var i;
  const c = Ar() === ((i = pe) == null ? void 0 : i.scope) ? pe : null;
  let a, d = !1, h = !1;
  if (ce(e) ? (a = () => e.value, d = wn(e)) : _t(e) ? (a = () => e, s = !0) : P(e) ? (h = !0, d = e.some((M) => _t(M) || wn(M)), a = () => e.map((M) => {
    if (ce(M))
      return M.value;
    if (_t(M))
      return ot(M);
    if (k(M))
      return Je(M, c, 2);
  })) : k(e) ? t ? a = () => Je(e, c, 2) : a = () => {
    if (!(c && c.isUnmounted))
      return p && p(), Pe(
        e,
        c,
        3,
        [y]
      );
  } : a = Se, t && s) {
    const M = a;
    a = () => ot(M());
  }
  let p, y = (M) => {
    p = H.onStop = () => {
      Je(M, c, 4);
    };
  }, C;
  if (Xt)
    if (y = Se, t ? n && Pe(t, c, 3, [
      a(),
      h ? [] : void 0,
      y
    ]) : a(), r === "sync") {
      const M = Di();
      C = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return Se;
  let E = h ? new Array(e.length).fill(cn) : cn;
  const L = () => {
    if (!!H.active)
      if (t) {
        const M = H.run();
        (s || d || (h ? M.some(
          (ae, fe) => Kt(ae, E[fe])
        ) : Kt(M, E))) && (p && p(), Pe(t, c, 3, [
          M,
          E === cn ? void 0 : h && E[0] === cn ? [] : E,
          y
        ]), E = M);
      } else
        H.run();
  };
  L.allowRecurse = !!t;
  let D;
  r === "sync" ? D = L : r === "post" ? D = () => ye(L, c && c.suspense) : (L.pre = !0, c && (L.id = c.uid), D = () => Es(L));
  const H = new gs(a, D);
  t ? n ? L() : E = H.run() : r === "post" ? ye(
    H.run.bind(H),
    c && c.suspense
  ) : H.run();
  const q = () => {
    H.stop(), c && c.scope && fs(c.scope.effects, H);
  };
  return C && C.push(q), q;
}
function Qo(e, t, n) {
  const s = this.proxy, r = se(e) ? e.includes(".") ? Xr(s, e) : () => s[e] : e.bind(s, s);
  let l;
  k(t) ? l = t : (l = t.handler, n = t);
  const o = pe;
  Et(this);
  const i = Mn(r, l.bind(s), n);
  return o ? Et(o) : ct(), i;
}
function Xr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ot(e, t) {
  if (!X(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ce(e))
    ot(e.value, t);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      ot(e[n], t);
  else if (Ct(e) || vt(e))
    e.forEach((n) => {
      ot(n, t);
    });
  else if (xr(e))
    for (const n in e)
      ot(e[n], t);
  return e;
}
function En(e, t) {
  const n = Ce;
  if (n === null)
    return e;
  const s = $n(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [o, i, c, a = Z] = t[l];
    o && (k(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ot(i), r.push({
      dir: o,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: a
    }));
  }
  return e;
}
function tt(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    l && (i.oldValue = l[o].value);
    let c = i.dir[s];
    c && (St(), Pe(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Pt());
  }
}
const hn = (e) => !!e.type.__asyncLoader, Zr = (e) => e.type.__isKeepAlive;
function Yo(e, t) {
  Gr(e, "a", t);
}
function Xo(e, t) {
  Gr(e, "da", t);
}
function Gr(e, t, n = pe) {
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
      Zr(r.parent.vnode) && Zo(s, t, n, r), r = r.parent;
  }
}
function Zo(e, t, n, s) {
  const r = Nn(
    t,
    e,
    s,
    !0
  );
  Ln(() => {
    fs(s[t], r);
  }, n);
}
function Nn(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      St(), Et(n);
      const i = Pe(t, n, e, o);
      return ct(), Pt(), i;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const Ve = (e) => (t, n = pe) => (!Xt || e === "sp") && Nn(e, (...s) => t(...s), n), Go = Ve("bm"), kn = Ve("m"), ei = Ve("bu"), ti = Ve("u"), ni = Ve("bum"), Ln = Ve("um"), si = Ve("sp"), ri = Ve(
  "rtg"
), li = Ve(
  "rtc"
);
function oi(e, t = pe) {
  Nn("ec", e, t);
}
const ii = Symbol.for("v-ndc");
function pn(e, t, n, s) {
  let r;
  const l = n && n[s];
  if (P(e) || se(e)) {
    r = new Array(e.length);
    for (let o = 0, i = e.length; o < i; o++)
      r[o] = t(e[o], o, void 0, l && l[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, l && l[o]);
  } else if (X(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (o, i) => t(o, i, void 0, l && l[i])
      );
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
const Xn = (e) => e ? al(e) ? $n(e) || e.proxy : Xn(e.parent) : null, Ht = /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Xn(e.parent),
  $root: (e) => Xn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Os(e),
  $forceUpdate: (e) => e.f || (e.f = () => Es(e.update)),
  $nextTick: (e) => e.n || (e.n = Wt.bind(e.proxy)),
  $watch: (e) => Qo.bind(e)
}), Bn = (e, t) => e !== Z && !e.__isScriptSetup && $(e, t), ci = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: l, accessCache: o, type: i, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const y = o[t];
      if (y !== void 0)
        switch (y) {
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
        if (Bn(s, t))
          return o[t] = 1, s[t];
        if (r !== Z && $(r, t))
          return o[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && $(a, t))
          return o[t] = 3, l[t];
        if (n !== Z && $(n, t))
          return o[t] = 4, n[t];
        Zn && (o[t] = 0);
      }
    }
    const d = Ht[t];
    let h, p;
    if (d)
      return t === "$attrs" && we(e, "get", t), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== Z && $(n, t))
      return o[t] = 4, n[t];
    if (p = c.config.globalProperties, $(p, t))
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return Bn(r, t) ? (r[t] = n, !0) : s !== Z && $(s, t) ? (s[t] = n, !0) : $(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l }
  }, o) {
    let i;
    return !!n[o] || e !== Z && $(e, o) || Bn(t, o) || (i = l[0]) && $(i, o) || $(s, o) || $(Ht, o) || $(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : $(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zs(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Zn = !0;
function ui(e) {
  const t = Os(e), n = e.proxy, s = e.ctx;
  Zn = !1, t.beforeCreate && Ws(t.beforeCreate, e, "bc");
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
    beforeUpdate: y,
    updated: C,
    activated: E,
    deactivated: L,
    beforeDestroy: D,
    beforeUnmount: H,
    destroyed: q,
    unmounted: M,
    render: ae,
    renderTracked: fe,
    renderTriggered: re,
    errorCaptured: le,
    serverPrefetch: Q,
    expose: V,
    inheritAttrs: B,
    components: ue,
    directives: dt,
    filters: Ft
  } = t;
  if (a && ai(a, s, null), o)
    for (const G in o) {
      const K = o[G];
      k(K) && (s[G] = K.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    X(G) && (e.data = ys(G));
  }
  if (Zn = !0, l)
    for (const G in l) {
      const K = l[G], Fe = k(K) ? K.bind(n, n) : k(K.get) ? K.get.bind(n, n) : Se, Ze = !k(K) && k(K.set) ? K.set.bind(n) : Se, F = be({
        get: Fe,
        set: Ze
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => F.value,
        set: (S) => F.value = S
      });
    }
  if (i)
    for (const G in i)
      el(i[G], s, n, G);
  if (c) {
    const G = k(c) ? c.call(n) : c;
    Reflect.ownKeys(G).forEach((K) => {
      mi(K, G[K]);
    });
  }
  d && Ws(d, e, "c");
  function de(G, K) {
    P(K) ? K.forEach((Fe) => G(Fe.bind(n))) : K && G(K.bind(n));
  }
  if (de(Go, h), de(kn, p), de(ei, y), de(ti, C), de(Yo, E), de(Xo, L), de(oi, le), de(li, fe), de(ri, re), de(ni, H), de(Ln, M), de(si, Q), P(V))
    if (V.length) {
      const G = e.exposed || (e.exposed = {});
      V.forEach((K) => {
        Object.defineProperty(G, K, {
          get: () => n[K],
          set: (Fe) => n[K] = Fe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ae && e.render === Se && (e.render = ae), B != null && (e.inheritAttrs = B), ue && (e.components = ue), dt && (e.directives = dt);
}
function ai(e, t, n = Se) {
  P(e) && (e = Gn(e));
  for (const s in e) {
    const r = e[s];
    let l;
    X(r) ? "default" in r ? l = gn(
      r.from || s,
      r.default,
      !0
    ) : l = gn(r.from || s) : l = gn(r), ce(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (o) => l.value = o
    }) : t[s] = l;
  }
}
function Ws(e, t, n) {
  Pe(
    P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function el(e, t, n, s) {
  const r = s.includes(".") ? Xr(n, s) : () => n[s];
  if (se(e)) {
    const l = t[e];
    k(l) && Qe(r, l);
  } else if (k(e))
    Qe(r, e.bind(n));
  else if (X(e))
    if (P(e))
      e.forEach((l) => el(l, t, n, s));
    else {
      const l = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(l) && Qe(r, l, e);
    }
}
function Os(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: l,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = l.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => On(c, a, o, !0)
  ), On(c, t, o)), X(t) && l.set(t, c), c;
}
function On(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && On(e, l, n, !0), r && r.forEach(
    (o) => On(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = fi[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const fi = {
  data: qs,
  props: Js,
  emits: Js,
  methods: jt,
  computed: jt,
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
  components: jt,
  directives: jt,
  watch: hi,
  provide: qs,
  inject: di
};
function qs(e, t) {
  return t ? e ? function() {
    return ge(
      k(e) ? e.call(this, this) : e,
      k(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function di(e, t) {
  return jt(Gn(e), Gn(t));
}
function Gn(e) {
  if (P(e)) {
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
function jt(e, t) {
  return e ? ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Js(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ge(
    /* @__PURE__ */ Object.create(null),
    zs(e),
    zs(t != null ? t : {})
  ) : t;
}
function hi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ge(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = _e(e[s], t[s]);
  return n;
}
function tl() {
  return {
    app: null,
    config: {
      isNativeTag: Rl,
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
let pi = 0;
function gi(e, t) {
  return function(s, r = null) {
    k(s) || (s = ge({}, s)), r != null && !X(r) && (r = null);
    const l = tl(), o = /* @__PURE__ */ new Set();
    let i = !1;
    const c = l.app = {
      _uid: pi++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: Bi,
      get config() {
        return l.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && k(a.install) ? (o.add(a), a.install(c, ...d)) : k(a) && (o.add(a), a(c, ...d))), c;
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
          const p = Be(
            s,
            r
          );
          return p.appContext = l, d && t ? t(p, a) : e(p, a, h), i = !0, c._container = a, a.__vue_app__ = c, $n(p.component) || p.component.proxy;
        }
      },
      unmount() {
        i && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return l.provides[a] = d, c;
      },
      runWithContext(a) {
        Cn = c;
        try {
          return a();
        } finally {
          Cn = null;
        }
      }
    };
    return c;
  };
}
let Cn = null;
function mi(e, t) {
  if (pe) {
    let n = pe.provides;
    const s = pe.parent && pe.parent.provides;
    s === n && (n = pe.provides = Object.create(s)), n[e] = t;
  }
}
function gn(e, t, n = !1) {
  const s = pe || Ce;
  if (s || Cn) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Cn._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && k(t) ? t.call(s && s.proxy) : t;
  }
}
function vi(e, t, n, s = !1) {
  const r = {}, l = {};
  _n(l, jn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, r, l);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : To(r) : e.type.props ? e.props = r : e.props = l, e.attrs = l;
}
function _i(e, t, n, s) {
  const {
    props: r,
    attrs: l,
    vnode: { patchFlag: o }
  } = e, i = U(r), [c] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let p = d[h];
        if (Fn(e.emitsOptions, p))
          continue;
        const y = t[p];
        if (c)
          if ($(l, p))
            y !== l[p] && (l[p] = y, a = !0);
          else {
            const C = bt(p);
            r[C] = es(
              c,
              i,
              C,
              y,
              e,
              !1
            );
          }
        else
          y !== l[p] && (l[p] = y, a = !0);
      }
    }
  } else {
    nl(e, t, r, l) && (a = !0);
    let d;
    for (const h in i)
      (!t || !$(t, h) && ((d = Tt(h)) === h || !$(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = es(
        c,
        i,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (l !== i)
      for (const h in l)
        (!t || !$(t, h) && !0) && (delete l[h], a = !0);
  }
  a && Ke(e, "set", "$attrs");
}
function nl(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let c in t) {
      if (fn(c))
        continue;
      const a = t[c];
      let d;
      r && $(r, d = bt(c)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Fn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (l) {
    const c = U(n), a = i || Z;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
      n[h] = es(
        r,
        c,
        h,
        a[h],
        e,
        !$(a, h)
      );
    }
  }
  return o;
}
function es(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = $(o, "default");
    if (i && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: a } = r;
        n in a ? s = a[n] : (Et(r), s = a[n] = c.call(
          null,
          t
        ), ct());
      } else
        s = c;
    }
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === Tt(n)) && (s = !0));
  }
  return s;
}
function sl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let c = !1;
  if (!k(e)) {
    const d = (h) => {
      c = !0;
      const [p, y] = sl(h, t, !0);
      ge(o, p), y && i.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !c)
    return X(e) && s.set(e, mt), mt;
  if (P(l))
    for (let d = 0; d < l.length; d++) {
      const h = bt(l[d]);
      Qs(h) && (o[h] = Z);
    }
  else if (l)
    for (const d in l) {
      const h = bt(d);
      if (Qs(h)) {
        const p = l[d], y = o[h] = P(p) || k(p) ? { type: p } : ge({}, p);
        if (y) {
          const C = Zs(Boolean, y.type), E = Zs(String, y.type);
          y[0] = C > -1, y[1] = E < 0 || C < E, (C > -1 || $(y, "default")) && i.push(h);
        }
      }
    }
  const a = [o, i];
  return X(e) && s.set(e, a), a;
}
function Qs(e) {
  return e[0] !== "$";
}
function Ys(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Xs(e, t) {
  return Ys(e) === Ys(t);
}
function Zs(e, t) {
  return P(t) ? t.findIndex((n) => Xs(n, e)) : k(t) && Xs(t, e) ? 0 : -1;
}
const rl = (e) => e[0] === "_" || e === "$stable", Cs = (e) => P(e) ? e.map(Re) : [Re(e)], yi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Do((...r) => Cs(t(...r)), n);
  return s._c = !1, s;
}, ll = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (rl(r))
      continue;
    const l = e[r];
    if (k(l))
      t[r] = yi(r, l, s);
    else if (l != null) {
      const o = Cs(l);
      t[r] = () => o;
    }
  }
}, ol = (e, t) => {
  const n = Cs(t);
  e.slots.default = () => n;
}, bi = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = U(t), _n(t, "_", n)) : ll(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && ol(e, t);
  _n(e.slots, jn, 1);
}, wi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = Z;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (ge(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, ll(t, r)), o = t;
  } else
    t && (ol(e, t), o = { default: 1 });
  if (l)
    for (const i in r)
      !rl(i) && !(i in o) && delete r[i];
};
function ts(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach(
      (p, y) => ts(
        p,
        t && (P(t) ? t[y] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (hn(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? $n(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: c } = e, a = t && t.r, d = i.refs === Z ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== c && (se(a) ? (d[a] = null, $(h, a) && (h[a] = null)) : ce(a) && (a.value = null)), k(c))
    Je(c, i, 12, [o, d]);
  else {
    const p = se(c), y = ce(c);
    if (p || y) {
      const C = () => {
        if (e.f) {
          const E = p ? $(h, c) ? h[c] : d[c] : c.value;
          r ? P(E) && fs(E, l) : P(E) ? E.includes(l) || E.push(l) : p ? (d[c] = [l], $(h, c) && (h[c] = d[c])) : (c.value = [l], e.k && (d[e.k] = c.value));
        } else
          p ? (d[c] = o, $(h, c) && (h[c] = o)) : y && (c.value = o, e.k && (d[e.k] = o));
      };
      o ? (C.id = -1, ye(C, n)) : C();
    }
  }
}
const ye = qo;
function xi(e) {
  return Ei(e);
}
function Ei(e, t) {
  const n = Wn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: l,
    createElement: o,
    createText: i,
    createComment: c,
    setText: a,
    setElementText: d,
    parentNode: h,
    nextSibling: p,
    setScopeId: y = Se,
    insertStaticContent: C
  } = e, E = (u, f, g, v = null, m = null, w = null, O = !1, b = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !kt(u, f) && (v = $e(u), S(u, m, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: _, ref: A, shapeFlag: T } = f;
    switch (_) {
      case Rn:
        L(u, f, g, v);
        break;
      case ft:
        D(u, f, g, v);
        break;
      case Kn:
        u == null && H(f, g, v, O);
        break;
      case he:
        ue(
          u,
          f,
          g,
          v,
          m,
          w,
          O,
          b,
          x
        );
        break;
      default:
        T & 1 ? ae(
          u,
          f,
          g,
          v,
          m,
          w,
          O,
          b,
          x
        ) : T & 6 ? dt(
          u,
          f,
          g,
          v,
          m,
          w,
          O,
          b,
          x
        ) : (T & 64 || T & 128) && _.process(
          u,
          f,
          g,
          v,
          m,
          w,
          O,
          b,
          x,
          He
        );
    }
    A != null && m && ts(A, u && u.ref, w, f || u, !f);
  }, L = (u, f, g, v) => {
    if (u == null)
      s(
        f.el = i(f.children),
        g,
        v
      );
    else {
      const m = f.el = u.el;
      f.children !== u.children && a(m, f.children);
    }
  }, D = (u, f, g, v) => {
    u == null ? s(
      f.el = c(f.children || ""),
      g,
      v
    ) : f.el = u.el;
  }, H = (u, f, g, v) => {
    [u.el, u.anchor] = C(
      u.children,
      f,
      g,
      v,
      u.el,
      u.anchor
    );
  }, q = ({ el: u, anchor: f }, g, v) => {
    let m;
    for (; u && u !== f; )
      m = p(u), s(u, g, v), u = m;
    s(f, g, v);
  }, M = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = p(u), r(u), u = g;
    r(f);
  }, ae = (u, f, g, v, m, w, O, b, x) => {
    O = O || f.type === "svg", u == null ? fe(
      f,
      g,
      v,
      m,
      w,
      O,
      b,
      x
    ) : Q(
      u,
      f,
      m,
      w,
      O,
      b,
      x
    );
  }, fe = (u, f, g, v, m, w, O, b) => {
    let x, _;
    const { type: A, props: T, shapeFlag: I, transition: N, dirs: R } = u;
    if (x = u.el = o(
      u.type,
      w,
      T && T.is,
      T
    ), I & 8 ? d(x, u.children) : I & 16 && le(
      u.children,
      x,
      null,
      v,
      m,
      w && A !== "foreignObject",
      O,
      b
    ), R && tt(u, null, v, "created"), re(x, u, u.scopeId, O, v), T) {
      for (const z in T)
        z !== "value" && !fn(z) && l(
          x,
          z,
          null,
          T[z],
          w,
          u.children,
          v,
          m,
          te
        );
      "value" in T && l(x, "value", null, T.value), (_ = T.onVnodeBeforeMount) && Ne(_, v, u);
    }
    R && tt(u, null, v, "beforeMount");
    const Y = (!m || m && !m.pendingBranch) && N && !N.persisted;
    Y && N.beforeEnter(x), s(x, f, g), ((_ = T && T.onVnodeMounted) || Y || R) && ye(() => {
      _ && Ne(_, v, u), Y && N.enter(x), R && tt(u, null, v, "mounted");
    }, m);
  }, re = (u, f, g, v, m) => {
    if (g && y(u, g), v)
      for (let w = 0; w < v.length; w++)
        y(u, v[w]);
    if (m) {
      let w = m.subTree;
      if (f === w) {
        const O = m.vnode;
        re(
          u,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, le = (u, f, g, v, m, w, O, b, x = 0) => {
    for (let _ = x; _ < u.length; _++) {
      const A = u[_] = b ? We(u[_]) : Re(u[_]);
      E(
        null,
        A,
        f,
        g,
        v,
        m,
        w,
        O,
        b
      );
    }
  }, Q = (u, f, g, v, m, w, O) => {
    const b = f.el = u.el;
    let { patchFlag: x, dynamicChildren: _, dirs: A } = f;
    x |= u.patchFlag & 16;
    const T = u.props || Z, I = f.props || Z;
    let N;
    g && nt(g, !1), (N = I.onVnodeBeforeUpdate) && Ne(N, g, f, u), A && tt(f, u, g, "beforeUpdate"), g && nt(g, !0);
    const R = m && f.type !== "foreignObject";
    if (_ ? V(
      u.dynamicChildren,
      _,
      b,
      g,
      v,
      R,
      w
    ) : O || K(
      u,
      f,
      b,
      null,
      g,
      v,
      R,
      w,
      !1
    ), x > 0) {
      if (x & 16)
        B(
          b,
          f,
          T,
          I,
          g,
          v,
          m
        );
      else if (x & 2 && T.class !== I.class && l(b, "class", null, I.class, m), x & 4 && l(b, "style", T.style, I.style, m), x & 8) {
        const Y = f.dynamicProps;
        for (let z = 0; z < Y.length; z++) {
          const ie = Y[z], Te = T[ie], ht = I[ie];
          (ht !== Te || ie === "value") && l(
            b,
            ie,
            Te,
            ht,
            m,
            u.children,
            g,
            v,
            te
          );
        }
      }
      x & 1 && u.children !== f.children && d(b, f.children);
    } else
      !O && _ == null && B(
        b,
        f,
        T,
        I,
        g,
        v,
        m
      );
    ((N = I.onVnodeUpdated) || A) && ye(() => {
      N && Ne(N, g, f, u), A && tt(f, u, g, "updated");
    }, v);
  }, V = (u, f, g, v, m, w, O) => {
    for (let b = 0; b < f.length; b++) {
      const x = u[b], _ = f[b], A = x.el && (x.type === he || !kt(x, _) || x.shapeFlag & 70) ? h(x.el) : g;
      E(
        x,
        _,
        A,
        null,
        v,
        m,
        w,
        O,
        !0
      );
    }
  }, B = (u, f, g, v, m, w, O) => {
    if (g !== v) {
      if (g !== Z)
        for (const b in g)
          !fn(b) && !(b in v) && l(
            u,
            b,
            g[b],
            null,
            O,
            f.children,
            m,
            w,
            te
          );
      for (const b in v) {
        if (fn(b))
          continue;
        const x = v[b], _ = g[b];
        x !== _ && b !== "value" && l(
          u,
          b,
          _,
          x,
          O,
          f.children,
          m,
          w,
          te
        );
      }
      "value" in v && l(u, "value", g.value, v.value);
    }
  }, ue = (u, f, g, v, m, w, O, b, x) => {
    const _ = f.el = u ? u.el : i(""), A = f.anchor = u ? u.anchor : i("");
    let { patchFlag: T, dynamicChildren: I, slotScopeIds: N } = f;
    N && (b = b ? b.concat(N) : N), u == null ? (s(_, g, v), s(A, g, v), le(
      f.children,
      g,
      A,
      m,
      w,
      O,
      b,
      x
    )) : T > 0 && T & 64 && I && u.dynamicChildren ? (V(
      u.dynamicChildren,
      I,
      g,
      m,
      w,
      O,
      b
    ), (f.key != null || m && f === m.subTree) && Ts(
      u,
      f,
      !0
    )) : K(
      u,
      f,
      g,
      A,
      m,
      w,
      O,
      b,
      x
    );
  }, dt = (u, f, g, v, m, w, O, b, x) => {
    f.slotScopeIds = b, u == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      g,
      v,
      O,
      x
    ) : Ft(
      f,
      g,
      v,
      m,
      w,
      O,
      x
    ) : en(u, f, x);
  }, Ft = (u, f, g, v, m, w, O) => {
    const b = u.component = Ni(
      u,
      v,
      m
    );
    if (Zr(u) && (b.ctx.renderer = He), Li(b), b.asyncDep) {
      if (m && m.registerDep(b, de), !u.el) {
        const x = b.subTree = Be(ft);
        D(null, x, f, g);
      }
      return;
    }
    de(
      b,
      u,
      f,
      g,
      m,
      w,
      O
    );
  }, en = (u, f, g) => {
    const v = f.component = u.component;
    if (Vo(u, f, g))
      if (v.asyncDep && !v.asyncResolved) {
        G(v, f, g);
        return;
      } else
        v.next = f, jo(v.update), v.update();
    else
      f.el = u.el, v.vnode = f;
  }, de = (u, f, g, v, m, w, O) => {
    const b = () => {
      if (u.isMounted) {
        let { next: A, bu: T, u: I, parent: N, vnode: R } = u, Y = A, z;
        nt(u, !1), A ? (A.el = R.el, G(u, A, O)) : A = R, T && dn(T), (z = A.props && A.props.onVnodeBeforeUpdate) && Ne(z, N, A, R), nt(u, !0);
        const ie = Dn(u), Te = u.subTree;
        u.subTree = ie, E(
          Te,
          ie,
          h(Te.el),
          $e(Te),
          u,
          m,
          w
        ), A.el = ie.el, Y === null && zo(u, ie.el), I && ye(I, m), (z = A.props && A.props.onVnodeUpdated) && ye(
          () => Ne(z, N, A, R),
          m
        );
      } else {
        let A;
        const { el: T, props: I } = f, { bm: N, m: R, parent: Y } = u, z = hn(f);
        if (nt(u, !1), N && dn(N), !z && (A = I && I.onVnodeBeforeMount) && Ne(A, Y, f), nt(u, !0), T && Hn) {
          const ie = () => {
            u.subTree = Dn(u), Hn(
              T,
              u.subTree,
              u,
              m,
              null
            );
          };
          z ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && ie()
          ) : ie();
        } else {
          const ie = u.subTree = Dn(u);
          E(
            null,
            ie,
            g,
            v,
            u,
            m,
            w
          ), f.el = ie.el;
        }
        if (R && ye(R, m), !z && (A = I && I.onVnodeMounted)) {
          const ie = f;
          ye(
            () => Ne(A, Y, ie),
            m
          );
        }
        (f.shapeFlag & 256 || Y && hn(Y.vnode) && Y.vnode.shapeFlag & 256) && u.a && ye(u.a, m), u.isMounted = !0, f = g = v = null;
      }
    }, x = u.effect = new gs(
      b,
      () => Es(_),
      u.scope
    ), _ = u.update = () => x.run();
    _.id = u.uid, nt(u, !0), _();
  }, G = (u, f, g) => {
    f.component = u;
    const v = u.vnode.props;
    u.vnode = f, u.next = null, _i(u, f.props, v, g), wi(u, f.children, g), St(), Ks(), Pt();
  }, K = (u, f, g, v, m, w, O, b, x = !1) => {
    const _ = u && u.children, A = u ? u.shapeFlag : 0, T = f.children, { patchFlag: I, shapeFlag: N } = f;
    if (I > 0) {
      if (I & 128) {
        Ze(
          _,
          T,
          g,
          v,
          m,
          w,
          O,
          b,
          x
        );
        return;
      } else if (I & 256) {
        Fe(
          _,
          T,
          g,
          v,
          m,
          w,
          O,
          b,
          x
        );
        return;
      }
    }
    N & 8 ? (A & 16 && te(_, m, w), T !== _ && d(g, T)) : A & 16 ? N & 16 ? Ze(
      _,
      T,
      g,
      v,
      m,
      w,
      O,
      b,
      x
    ) : te(_, m, w, !0) : (A & 8 && d(g, ""), N & 16 && le(
      T,
      g,
      v,
      m,
      w,
      O,
      b,
      x
    ));
  }, Fe = (u, f, g, v, m, w, O, b, x) => {
    u = u || mt, f = f || mt;
    const _ = u.length, A = f.length, T = Math.min(_, A);
    let I;
    for (I = 0; I < T; I++) {
      const N = f[I] = x ? We(f[I]) : Re(f[I]);
      E(
        u[I],
        N,
        g,
        null,
        m,
        w,
        O,
        b,
        x
      );
    }
    _ > A ? te(
      u,
      m,
      w,
      !0,
      !1,
      T
    ) : le(
      f,
      g,
      v,
      m,
      w,
      O,
      b,
      x,
      T
    );
  }, Ze = (u, f, g, v, m, w, O, b, x) => {
    let _ = 0;
    const A = f.length;
    let T = u.length - 1, I = A - 1;
    for (; _ <= T && _ <= I; ) {
      const N = u[_], R = f[_] = x ? We(f[_]) : Re(f[_]);
      if (kt(N, R))
        E(
          N,
          R,
          g,
          null,
          m,
          w,
          O,
          b,
          x
        );
      else
        break;
      _++;
    }
    for (; _ <= T && _ <= I; ) {
      const N = u[T], R = f[I] = x ? We(f[I]) : Re(f[I]);
      if (kt(N, R))
        E(
          N,
          R,
          g,
          null,
          m,
          w,
          O,
          b,
          x
        );
      else
        break;
      T--, I--;
    }
    if (_ > T) {
      if (_ <= I) {
        const N = I + 1, R = N < A ? f[N].el : v;
        for (; _ <= I; )
          E(
            null,
            f[_] = x ? We(f[_]) : Re(f[_]),
            g,
            R,
            m,
            w,
            O,
            b,
            x
          ), _++;
      }
    } else if (_ > I)
      for (; _ <= T; )
        S(u[_], m, w, !0), _++;
    else {
      const N = _, R = _, Y = /* @__PURE__ */ new Map();
      for (_ = R; _ <= I; _++) {
        const xe = f[_] = x ? We(f[_]) : Re(f[_]);
        xe.key != null && Y.set(xe.key, _);
      }
      let z, ie = 0;
      const Te = I - R + 1;
      let ht = !1, Fs = 0;
      const Nt = new Array(Te);
      for (_ = 0; _ < Te; _++)
        Nt[_] = 0;
      for (_ = N; _ <= T; _++) {
        const xe = u[_];
        if (ie >= Te) {
          S(xe, m, w, !0);
          continue;
        }
        let Me;
        if (xe.key != null)
          Me = Y.get(xe.key);
        else
          for (z = R; z <= I; z++)
            if (Nt[z - R] === 0 && kt(xe, f[z])) {
              Me = z;
              break;
            }
        Me === void 0 ? S(xe, m, w, !0) : (Nt[Me - R] = _ + 1, Me >= Fs ? Fs = Me : ht = !0, E(
          xe,
          f[Me],
          g,
          null,
          m,
          w,
          O,
          b,
          x
        ), ie++);
      }
      const Ms = ht ? Oi(Nt) : mt;
      for (z = Ms.length - 1, _ = Te - 1; _ >= 0; _--) {
        const xe = R + _, Me = f[xe], Ns = xe + 1 < A ? f[xe + 1].el : v;
        Nt[_] === 0 ? E(
          null,
          Me,
          g,
          Ns,
          m,
          w,
          O,
          b,
          x
        ) : ht && (z < 0 || _ !== Ms[z] ? F(Me, g, Ns, 2) : z--);
      }
    }
  }, F = (u, f, g, v, m = null) => {
    const { el: w, type: O, transition: b, children: x, shapeFlag: _ } = u;
    if (_ & 6) {
      F(u.component.subTree, f, g, v);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, g, v);
      return;
    }
    if (_ & 64) {
      O.move(u, f, g, He);
      return;
    }
    if (O === he) {
      s(w, f, g);
      for (let T = 0; T < x.length; T++)
        F(x[T], f, g, v);
      s(u.anchor, f, g);
      return;
    }
    if (O === Kn) {
      q(u, f, g);
      return;
    }
    if (v !== 2 && _ & 1 && b)
      if (v === 0)
        b.beforeEnter(w), s(w, f, g), ye(() => b.enter(w), m);
      else {
        const { leave: T, delayLeave: I, afterLeave: N } = b, R = () => s(w, f, g), Y = () => {
          T(w, () => {
            R(), N && N();
          });
        };
        I ? I(w, R, Y) : Y();
      }
    else
      s(w, f, g);
  }, S = (u, f, g, v = !1, m = !1) => {
    const {
      type: w,
      props: O,
      ref: b,
      children: x,
      dynamicChildren: _,
      shapeFlag: A,
      patchFlag: T,
      dirs: I
    } = u;
    if (b != null && ts(b, null, g, u, !0), A & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const N = A & 1 && I, R = !hn(u);
    let Y;
    if (R && (Y = O && O.onVnodeBeforeUnmount) && Ne(Y, f, u), A & 6)
      oe(u.component, g, v);
    else {
      if (A & 128) {
        u.suspense.unmount(g, v);
        return;
      }
      N && tt(u, null, f, "beforeUnmount"), A & 64 ? u.type.remove(
        u,
        f,
        g,
        m,
        He,
        v
      ) : _ && (w !== he || T > 0 && T & 64) ? te(
        _,
        f,
        g,
        !1,
        !0
      ) : (w === he && T & 384 || !m && A & 16) && te(x, f, g), v && ve(u);
    }
    (R && (Y = O && O.onVnodeUnmounted) || N) && ye(() => {
      Y && Ne(Y, f, u), N && tt(u, null, f, "unmounted");
    }, g);
  }, ve = (u) => {
    const { type: f, el: g, anchor: v, transition: m } = u;
    if (f === he) {
      Ge(g, v);
      return;
    }
    if (f === Kn) {
      M(u);
      return;
    }
    const w = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, x = () => O(g, w);
      b ? b(u.el, w, x) : x();
    } else
      w();
  }, Ge = (u, f) => {
    let g;
    for (; u !== f; )
      g = p(u), r(u), u = g;
    r(f);
  }, oe = (u, f, g) => {
    const { bum: v, scope: m, update: w, subTree: O, um: b } = u;
    v && dn(v), m.stop(), w && (w.active = !1, S(O, u, f, g)), b && ye(b, f), ye(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, te = (u, f, g, v = !1, m = !1, w = 0) => {
    for (let O = w; O < u.length; O++)
      S(u[O], f, g, v, m);
  }, $e = (u) => u.shapeFlag & 6 ? $e(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el), et = (u, f, g) => {
    u == null ? f._vnode && S(f._vnode, null, null, !0) : E(f._vnode || null, u, f, null, null, null, g), Ks(), qr(), f._vnode = u;
  }, He = {
    p: E,
    um: S,
    m: F,
    r: ve,
    mt: Ft,
    mc: le,
    pc: K,
    pbc: V,
    n: $e,
    o: e
  };
  let Mt, Hn;
  return t && ([Mt, Hn] = t(
    He
  )), {
    render: et,
    hydrate: Mt,
    createApp: gi(et, Mt)
  };
}
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ts(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (P(s) && P(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = We(r[l]), i.el = o.el), n || Ts(o, i)), i.type === Rn && (i.el = o.el);
    }
}
function Oi(e) {
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
const Ci = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), Gs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ns = (e, t) => {
  const n = e && e.to;
  return se(n) ? t ? t(n) : null : n;
}, Ti = {
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, c, a) {
    const {
      mc: d,
      pc: h,
      pbc: p,
      o: { insert: y, querySelector: C, createText: E, createComment: L }
    } = a, D = Ut(t.props);
    let { shapeFlag: H, children: q, dynamicChildren: M } = t;
    if (e == null) {
      const ae = t.el = E(""), fe = t.anchor = E("");
      y(ae, n, s), y(fe, n, s);
      const re = t.target = ns(t.props, C), le = t.targetAnchor = E("");
      re && (y(le, re), o = o || Gs(re));
      const Q = (V, B) => {
        H & 16 && d(
          q,
          V,
          B,
          r,
          l,
          o,
          i,
          c
        );
      };
      D ? Q(n, fe) : re && Q(re, le);
    } else {
      t.el = e.el;
      const ae = t.anchor = e.anchor, fe = t.target = e.target, re = t.targetAnchor = e.targetAnchor, le = Ut(e.props), Q = le ? n : fe, V = le ? ae : re;
      if (o = o || Gs(fe), M ? (p(
        e.dynamicChildren,
        M,
        Q,
        r,
        l,
        o,
        i
      ), Ts(e, t, !0)) : c || h(
        e,
        t,
        Q,
        V,
        r,
        l,
        o,
        i,
        !1
      ), D)
        le || un(
          t,
          n,
          ae,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = ns(
          t.props,
          C
        );
        B && un(
          t,
          B,
          null,
          a,
          0
        );
      } else
        le && un(
          t,
          fe,
          re,
          a,
          1
        );
    }
    il(t);
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: h, props: p } = e;
    if (h && l(d), (o || !Ut(p)) && (l(a), i & 16))
      for (let y = 0; y < c.length; y++) {
        const C = c[y];
        r(
          C,
          t,
          n,
          !0,
          !!C.dynamicChildren
        );
      }
  },
  move: un,
  hydrate: Ai
};
function un(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: c, children: a, props: d } = e, h = l === 2;
  if (h && s(o, t, n), (!h || Ut(d)) && c & 16)
    for (let p = 0; p < a.length; p++)
      r(
        a[p],
        t,
        n,
        2
      );
  h && s(i, t, n);
}
function Ai(e, t, n, s, r, l, {
  o: { nextSibling: o, parentNode: i, querySelector: c }
}, a) {
  const d = t.target = ns(
    t.props,
    c
  );
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Ut(t.props))
        t.anchor = a(
          o(e),
          t,
          i(e),
          n,
          s,
          r,
          l
        ), t.targetAnchor = h;
      else {
        t.anchor = o(e);
        let p = h;
        for (; p; )
          if (p = o(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, d._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        a(
          h,
          t,
          d,
          n,
          s,
          r,
          l
        );
      }
    il(t);
  }
  return t.anchor && o(t.anchor);
}
const ss = Ti;
function il(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const he = Symbol.for("v-fgt"), Rn = Symbol.for("v-txt"), ft = Symbol.for("v-cmt"), Kn = Symbol.for("v-stc"), Dt = [];
let Ie = null;
function J(e = !1) {
  Dt.push(Ie = e ? null : []);
}
function Ii() {
  Dt.pop(), Ie = Dt[Dt.length - 1] || null;
}
let Qt = 1;
function er(e) {
  Qt += e;
}
function cl(e) {
  return e.dynamicChildren = Qt > 0 ? Ie || mt : null, Ii(), Qt > 0 && Ie && Ie.push(e), e;
}
function ee(e, t, n, s, r, l) {
  return cl(
    ne(
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
function Tn(e, t, n, s, r) {
  return cl(
    Be(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Si(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const jn = "__vInternal", ul = ({ key: e }) => e != null ? e : null, mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ce(e) || k(e) ? { i: Ce, r: e, k: t, f: !!n } : e : null);
function ne(e, t = null, n = null, s = 0, r = null, l = e === he ? 0 : 1, o = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ul(t),
    ref: t && mn(t),
    scopeId: Yr,
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
    appContext: null,
    ctx: Ce
  };
  return i ? (Is(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), Qt > 0 && !o && Ie && (c.patchFlag > 0 || l & 6) && c.patchFlag !== 32 && Ie.push(c), c;
}
const Be = Pi;
function Pi(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === ii) && (e = ft), Si(e)) {
    const i = xt(
      e,
      t,
      !0
    );
    return n && Is(i, n), Qt > 0 && !l && Ie && (i.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = i : Ie.push(i)), i.patchFlag |= -2, i;
  }
  if (Hi(e) && (e = e.__vccOpts), t) {
    t = As(t);
    let { class: i, style: c } = t;
    i && !se(i) && (t.class = It(i)), X(c) && (Hr(c) && !P(c) && (c = ge({}, c)), t.style = At(c));
  }
  const o = se(e) ? 1 : Wo(e) ? 128 : Ci(e) ? 64 : X(e) ? 4 : k(e) ? 2 : 0;
  return ne(
    e,
    t,
    n,
    s,
    r,
    o,
    l,
    !0
  );
}
function As(e) {
  return e ? Hr(e) || jn in e ? ge({}, e) : e : null;
}
function xt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: l, children: o } = e, i = t ? Yt(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && ul(i),
    ref: t && t.ref ? n && r ? P(r) ? r.concat(mn(t)) : [r, mn(t)] : mn(t) : r,
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
    ssContent: e.ssContent && xt(e.ssContent),
    ssFallback: e.ssFallback && xt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function rs(e = " ", t = 0) {
  return Be(Rn, null, e, t);
}
function Oe(e = "", t = !1) {
  return t ? (J(), Tn(ft, null, e)) : Be(ft, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? Be(ft) : P(e) ? Be(
    he,
    null,
    e.slice()
  ) : typeof e == "object" ? We(e) : Be(Rn, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function Is(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Is(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(jn in t) ? t._ctx = Ce : r === 3 && Ce && (Ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    k(t) ? (t = { default: t, _ctx: Ce }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [rs(t)]) : n = 8);
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
        t.style = At([t.style, s.style]);
      else if (An(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(P(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ne(e, t, n, s = null) {
  Pe(e, t, 7, [
    n,
    s
  ]);
}
const Fi = tl();
let Mi = 0;
function Ni(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Fi, l = {
    uid: Mi++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ql(
      !0
    ),
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
    emitsOptions: Qr(s, r),
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
    attrsProxy: null,
    slotsProxy: null,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Uo.bind(null, l), e.ce && e.ce(l), l;
}
let pe = null;
const ki = () => pe || Ce;
let Ss, pt, tr = "__VUE_INSTANCE_SETTERS__";
(pt = Wn()[tr]) || (pt = Wn()[tr] = []), pt.push((e) => pe = e), Ss = (e) => {
  pt.length > 1 ? pt.forEach((t) => t(e)) : pt[0](e);
};
const Et = (e) => {
  Ss(e), e.scope.on();
}, ct = () => {
  pe && pe.scope.off(), Ss(null);
};
function al(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Li(e, t = !1) {
  Xt = t;
  const { props: n, children: s } = e.vnode, r = al(e);
  vi(e, n, r, t), bi(e, s);
  const l = r ? Ri(e, t) : void 0;
  return Xt = !1, l;
}
function Ri(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ur(new Proxy(e.ctx, ci));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? $i(e) : null;
    Et(e), St();
    const l = Je(
      s,
      e,
      0,
      [e.props, r]
    );
    if (Pt(), ct(), br(l)) {
      if (l.then(ct, ct), t)
        return l.then((o) => {
          nr(e, o, t);
        }).catch((o) => {
          Pn(o, e, 0);
        });
      e.asyncDep = l;
    } else
      nr(e, l, t);
  } else
    fl(e, t);
}
function nr(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = Vr(t)), fl(e, n);
}
let sr;
function fl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && sr && !s.render) {
      const r = s.template || Os(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = ge(
          ge(
            {
              isCustomElement: l,
              delimiters: i
            },
            o
          ),
          c
        );
        s.render = sr(r, a);
      }
    }
    e.render = s.render || Se;
  }
  Et(e), St(), ui(e), Pt(), ct();
}
function ji(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return we(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function $i(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return ji(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $n(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Vr(Ur(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ht)
          return Ht[n](e);
      },
      has(t, n) {
        return n in t || n in Ht;
      }
    }));
}
function Hi(e) {
  return k(e) && "__vccOpts" in e;
}
const be = (e, t) => ko(e, t, Xt), Ui = Symbol.for("v-scx"), Di = () => gn(Ui), Bi = "3.3.4", Ki = "http://www.w3.org/2000/svg", lt = typeof document < "u" ? document : null, rr = lt && /* @__PURE__ */ lt.createElement("template"), Vi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? lt.createElementNS(Ki, e) : lt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, l) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === l || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === l || !(r = r.nextSibling)); )
        ;
    else {
      rr.innerHTML = s ? `<svg>${e}</svg>` : e;
      const i = rr.content;
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
function zi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Wi(e, t, n) {
  const s = e.style, r = se(n);
  if (n && !r) {
    if (t && !se(t))
      for (const l in t)
        n[l] == null && ls(s, l, "");
    for (const l in n)
      ls(s, l, n[l]);
  } else {
    const l = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = l);
  }
}
const lr = /\s*!important$/;
function ls(e, t, n) {
  if (P(n))
    n.forEach((s) => ls(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = qi(e, t);
    lr.test(n) ? e.setProperty(
      Tt(s),
      n.replace(lr, ""),
      "important"
    ) : e[s] = n;
  }
}
const or = ["Webkit", "Moz", "ms"], Vn = {};
function qi(e, t) {
  const n = Vn[t];
  if (n)
    return n;
  let s = bt(t);
  if (s !== "filter" && s in e)
    return Vn[t] = s;
  s = Er(s);
  for (let r = 0; r < or.length; r++) {
    const l = or[r] + s;
    if (l in e)
      return Vn[t] = l;
  }
  return t;
}
const ir = "http://www.w3.org/1999/xlink";
function Ji(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ir, t.slice(6, t.length)) : e.setAttributeNS(ir, t, n);
  else {
    const l = ql(t);
    n == null || l && !Cr(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : n);
  }
}
function Qi(e, t, n, s, r, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, l), e[t] = n == null ? "" : n;
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    e._value = n;
    const a = i === "OPTION" ? e.getAttribute("value") : e.value, d = n == null ? "" : n;
    a !== d && (e.value = d), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Cr(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function De(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Yi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Xi(e, t, n, s, r = null) {
  const l = e._vei || (e._vei = {}), o = l[t];
  if (s && o)
    o.value = s;
  else {
    const [i, c] = Zi(t);
    if (s) {
      const a = l[t] = tc(s, r);
      De(e, i, a, c);
    } else
      o && (Yi(e, i, o, c), l[t] = void 0);
  }
}
const cr = /(?:Once|Passive|Capture)$/;
function Zi(e) {
  let t;
  if (cr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(cr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t];
}
let zn = 0;
const Gi = /* @__PURE__ */ Promise.resolve(), ec = () => zn || (Gi.then(() => zn = 0), zn = Date.now());
function tc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Pe(
      nc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ec(), n;
}
function nc(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const ur = /^on[a-z]/, sc = (e, t, n, s, r = !1, l, o, i, c) => {
  t === "class" ? zi(e, s, r) : t === "style" ? Wi(e, n, s) : An(t) ? as(t) || Xi(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rc(e, t, s, r)) ? Qi(
    e,
    t,
    s,
    l,
    o,
    i,
    c
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ji(e, t, s, r));
};
function rc(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && ur.test(t) && k(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ur.test(t) && se(n) ? !1 : t in e;
}
const Xe = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (n) => dn(t, n) : t;
};
function lc(e) {
  e.target.composing = !0;
}
function ar(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const os = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e._assign = Xe(r);
    const l = s || r.props && r.props.type === "number";
    De(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = yn(i)), e._assign(i);
    }), n && De(e, "change", () => {
      e.value = e.value.trim();
    }), t || (De(e, "compositionstart", lc), De(e, "compositionend", ar), De(e, "change", ar));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e._assign = Xe(l), e.composing || document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === t || (r || e.type === "number") && yn(e.value) === t))
      return;
    const o = t == null ? "" : t;
    e.value !== o && (e.value = o);
  }
}, oc = {
  deep: !0,
  created(e, t, n) {
    e._assign = Xe(n), De(e, "change", () => {
      const s = e._modelValue, r = Ot(e), l = e.checked, o = e._assign;
      if (P(s)) {
        const i = hs(s, r), c = i !== -1;
        if (l && !c)
          o(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (Ct(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(dl(e, l));
    });
  },
  mounted: fr,
  beforeUpdate(e, t, n) {
    e._assign = Xe(n), fr(e, t, n);
  }
};
function fr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, P(t) ? e.checked = hs(t, s.props.value) > -1 : Ct(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = at(t, dl(e, !0)));
}
const ic = {
  created(e, { value: t }, n) {
    e.checked = at(t, n.props.value), e._assign = Xe(n), De(e, "change", () => {
      e._assign(Ot(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e._assign = Xe(s), t !== n && (e.checked = at(t, s.props.value));
  }
}, cc = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = Ct(t);
    De(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? yn(Ot(o)) : Ot(o)
      );
      e._assign(
        e.multiple ? r ? new Set(l) : l : l[0]
      );
    }), e._assign = Xe(s);
  },
  mounted(e, { value: t }) {
    dr(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = Xe(n);
  },
  updated(e, { value: t }) {
    dr(e, t);
  }
};
function dr(e, t) {
  const n = e.multiple;
  if (!(n && !P(t) && !Ct(t))) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const l = e.options[s], o = Ot(l);
      if (n)
        P(t) ? l.selected = hs(t, o) > -1 : l.selected = t.has(o);
      else if (at(Ot(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ot(e) {
  return "_value" in e ? e._value : e.value;
}
function dl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const uc = {
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
function ac(e, t) {
  switch (e) {
    case "SELECT":
      return cc;
    case "TEXTAREA":
      return os;
    default:
      switch (t) {
        case "checkbox":
          return oc;
        case "radio":
          return ic;
        default:
          return os;
      }
  }
}
function an(e, t, n, s, r) {
  const o = ac(
    e.tagName,
    n.props && n.props.type
  )[r];
  o && o(e, t, n, s);
}
const fc = ["ctrl", "shift", "alt", "meta"], dc = {
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
  exact: (e, t) => fc.some((n) => e[`${n}Key`] && !t.includes(n))
}, hl = (e, t) => (n, ...s) => {
  for (let r = 0; r < t.length; r++) {
    const l = dc[t[r]];
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
const hc = /* @__PURE__ */ ge({ patchProp: sc }, Vi);
let hr;
function pc() {
  return hr || (hr = xi(hc));
}
const gl = (...e) => {
  const t = pc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = gc(s);
    if (!r)
      return;
    const l = t._component;
    !k(l) && !l.render && !l.template && (l.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function gc(e) {
  return se(e) ? document.querySelector(e) : e;
}
var pr;
const Gt = typeof window < "u";
Gt && ((pr = window == null ? void 0 : window.navigator) == null ? void 0 : pr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function mc(e) {
  return typeof e == "function" ? e() : j(e);
}
function vc(e) {
  return e;
}
function _c(e) {
  return Ar() ? (Xl(e), !0) : !1;
}
function yc(e, t = !0) {
  ki() ? kn(e) : t ? e() : Wt(e);
}
function vn(e) {
  var t;
  const n = mc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ml = Gt ? window : void 0;
Gt && window.document;
Gt && window.navigator;
Gt && window.location;
function bc(e, t = !1) {
  const n = W(), s = () => n.value = Boolean(e());
  return s(), yc(s, t), n;
}
const is = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cs = "__vueuse_ssr_handlers__";
is[cs] = is[cs] || {};
is[cs];
var gr = Object.getOwnPropertySymbols, wc = Object.prototype.hasOwnProperty, xc = Object.prototype.propertyIsEnumerable, Ec = (e, t) => {
  var n = {};
  for (var s in e)
    wc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && gr)
    for (var s of gr(e))
      t.indexOf(s) < 0 && xc.call(e, s) && (n[s] = e[s]);
  return n;
};
function Oc(e, t, n = {}) {
  const s = n, { window: r = ml } = s, l = Ec(s, ["window"]);
  let o;
  const i = bc(() => r && "ResizeObserver" in r), c = () => {
    o && (o.disconnect(), o = void 0);
  }, a = Qe(() => vn(e), (h) => {
    c(), i.value && r && h && (o = new ResizeObserver(t), o.observe(h, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), a();
  };
  return _c(d), {
    isSupported: i,
    stop: d
  };
}
function Cc(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = ml, box: r = "content-box" } = n, l = be(() => {
    var c, a;
    return (a = (c = vn(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : a.includes("svg");
  }), o = W(t.width), i = W(t.height);
  return Oc(e, ([c]) => {
    const a = r === "border-box" ? c.borderBoxSize : r === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
    if (s && l.value) {
      const d = vn(e);
      if (d) {
        const h = s.getComputedStyle(d);
        o.value = parseFloat(h.width), i.value = parseFloat(h.height);
      }
    } else if (a) {
      const d = Array.isArray(a) ? a : [a];
      o.value = d.reduce((h, { inlineSize: p }) => h + p, 0), i.value = d.reduce((h, { blockSize: p }) => h + p, 0);
    } else
      o.value = c.contentRect.width, i.value = c.contentRect.height;
  }, n), Qe(() => vn(e), (c) => {
    o.value = c ? t.width : 0, i.value = c ? t.height : 0;
  }), {
    width: o,
    height: i
  };
}
var mr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(mr || (mr = {}));
var Tc = Object.defineProperty, vr = Object.getOwnPropertySymbols, Ac = Object.prototype.hasOwnProperty, Ic = Object.prototype.propertyIsEnumerable, _r = (e, t, n) => t in e ? Tc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sc = (e, t) => {
  for (var n in t || (t = {}))
    Ac.call(t, n) && _r(e, n, t[n]);
  if (vr)
    for (var n of vr(t))
      Ic.call(t, n) && _r(e, n, t[n]);
  return e;
};
const Pc = {
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
Sc({
  linear: vc
}, Pc);
function vl(e, t) {
  const { containerStyle: n, wrapperProps: s, scrollTo: r, calculateRange: l, currentList: o, containerRef: i } = "itemHeight" in t ? Nc(t, e) : Mc(t, e);
  return {
    list: o,
    scrollTo: r,
    containerProps: {
      ref: i,
      onScroll: () => {
        l();
      },
      style: n
    },
    wrapperProps: s
  };
}
function _l(e) {
  const t = W(null), n = Cc(t), s = W([]), r = Ao(e);
  return { state: W({ start: 0, end: 10 }), source: r, currentList: s, size: n, containerRef: t };
}
function yl(e, t, n) {
  return (s) => {
    if (typeof n == "number")
      return Math.ceil(s / n);
    const { start: r = 0 } = e.value;
    let l = 0, o = 0;
    for (let i = r; i < t.value.length; i++) {
      const c = n(i);
      if (l += c, o = i, l > s)
        break;
    }
    return o - r;
  };
}
function bl(e, t) {
  return (n) => {
    if (typeof t == "number")
      return Math.floor(n / t) + 1;
    let s = 0, r = 0;
    for (let l = 0; l < e.value.length; l++) {
      const o = t(l);
      if (s += o, s >= n) {
        r = l;
        break;
      }
    }
    return r + 1;
  };
}
function wl(e, t, n, s, { containerRef: r, state: l, currentList: o, source: i }) {
  return () => {
    const c = r.value;
    if (c) {
      const a = n(e === "vertical" ? c.scrollTop : c.scrollLeft), d = s(e === "vertical" ? c.clientHeight : c.clientWidth), h = a - t, p = a + d + t;
      l.value = {
        start: h < 0 ? 0 : h,
        end: p > i.value.length ? i.value.length : p
      }, o.value = i.value.slice(l.value.start, l.value.end).map((y, C) => ({
        data: y,
        index: C + l.value.start
      }));
    }
  };
}
function xl(e, t) {
  return (n) => typeof e == "number" ? n * e : t.value.slice(0, n).reduce((r, l, o) => r + e(o), 0);
}
function El(e, t, n) {
  Qe([e.width, e.height, t], () => {
    n();
  });
}
function Ol(e, t) {
  return be(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, s, r) => n + e(r), 0));
}
const Fc = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Cl(e, t, n, s) {
  return (r) => {
    s.value && (s.value[Fc[e]] = n(r), t());
  };
}
function Mc(e, t) {
  const n = _l(t), { state: s, source: r, currentList: l, size: o, containerRef: i } = n, c = { overflowX: "auto" }, { itemWidth: a, overscan: d = 5 } = e, h = yl(s, r, a), p = bl(r, a), y = wl("horizontal", d, p, h, n), C = xl(a, r), E = be(() => C(s.value.start)), L = Ol(a, r);
  El(o, t, y);
  const D = Cl("horizontal", y, C, i), H = be(() => ({
    style: {
      height: "100%",
      width: `${L.value - E.value}px`,
      marginLeft: `${E.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: D,
    calculateRange: y,
    wrapperProps: H,
    containerStyle: c,
    currentList: l,
    containerRef: i
  };
}
function Nc(e, t) {
  const n = _l(t), { state: s, source: r, currentList: l, size: o, containerRef: i } = n, c = { overflowY: "auto" }, { itemHeight: a, overscan: d = 5 } = e, h = yl(s, r, a), p = bl(r, a), y = wl("vertical", d, p, h, n), C = xl(a, r), E = be(() => C(s.value.start)), L = Ol(a, r);
  El(o, t, y);
  const D = Cl("vertical", y, C, i), H = be(() => ({
    style: {
      width: "100%",
      height: `${L.value - E.value}px`,
      marginTop: `${E.value}px`
    }
  }));
  return {
    calculateRange: y,
    scrollTo: D,
    containerStyle: c,
    wrapperProps: H,
    currentList: l,
    containerRef: i
  };
}
const st = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, kc = (e, t) => {
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
let Lc = 1;
const Tl = (e) => {
  e && (e.style.display = "none", Ll(e));
}, Al = (e, t, n, s) => {
  var c;
  const r = W(/* @__PURE__ */ new Map());
  Jt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const l = W([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, Jt(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: st(a.key) })), l.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => st(d.value)).filter((d) => d))
        r.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: st(d.value), data: Object.assign({}, d.dataset) }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (l.value = [{ value: a, key: a }]);
    }
    l.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(st(a), st(a));
  else
    s != null && r.value.set(st(s), st(s));
  kc(l, (c = e == null ? void 0 : e.id) != null ? c : "extraselect_" + (++Lc).toString());
  const o = [];
  return r.value.forEach((a, d) => {
    o.push([d, a]);
  }), { options: l, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, d] of o)
      r.value.set(a, d);
  } };
};
W({});
function Rc(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Ps = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), Il(W(n), "defaults");
}, Il = (e, t) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Ps());
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
let jc = 0;
const Sl = (e, t) => {
  var s;
  return Il(t, (s = e == null ? void 0 : e.id) != null ? s : "extraselect_" + (++jc).toString()), { propLocalization: t, t: (r, l = {}) => {
    var i;
    let o = (i = t.value[r]) != null ? i : window.ExtraSelectLocalization.defaults.get(r);
    return o == null && (window.ExtraSelectLocalization.defaults.push(r, r), o = r), Rc(o, l);
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
}, Pl = (e, t, n, s, r, l, o = "limited", i = {}) => {
  const c = W(0), a = W(!1), d = be(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      Jt((p) => {
        if (s.value.length >= r) {
          let y = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              y = !h.includes(s.value);
              break;
            case "complete":
              y = h.reduce((C, E) => C && !s.value.startsWith(E), !0);
              break;
          }
          if (y) {
            a.value = !0;
            const C = setTimeout(() => {
              h.push(s.value), c.value += 1, i.body = { ...i.body, ...l.value }, yr(t, s.value, i).then((E) => {
                e.actions.addRange(E), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            p(() => {
              clearTimeout(C);
            });
          }
        }
      });
    } else
      yr(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, Fl = (e, t, n, s = [], r = []) => {
  const l = W(""), o = W([]), i = W({}), c = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in c) {
    let h = c[d], p = document.getElementById(d);
    i.value[d] = p == null ? void 0 : p.value, p && p.addEventListener("change", (y) => {
      i.value[d] = y.target.value, h && Wt(() => {
        if (t != null)
          for (let C of Array.from(t.value.keys()))
            o.value.find((E) => E.key == C) || n(C, !1);
        else
          o.value.find((C) => C.key == l.value) || n(l.value, !1);
      });
    });
  }
  const a = function(d, h) {
    let p = d.value;
    return Object.keys(i.value).length > 0 && (p = p.filter((y) => {
      var C, E;
      for (let L in i.value)
        if ((c[L] ? !0 : ((C = i.value[L]) != null ? C : "").length > 0) && ((E = y.data) == null ? void 0 : E.hasOwnProperty(L)) && y.data[L] != i.value[L])
          return !1;
      return !0;
    })), h.length > 0 && (p = p.filter((y) => y.value.toLowerCase().includes(h.toLowerCase()))), p;
  };
  return Jt(() => {
    o.value = a(e, l.value);
  }), { filterText: l, filteredOptions: o, filterValues: i };
}, Ml = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(h) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = i, y.measureText(h).width;
  }, a = be(() => {
    var p, y;
    const h = (p = tn(s.value).width) != null ? p : 100;
    if (o === "inherit")
      return h;
    if (o == null || o === "dynamic") {
      const C = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(h, Math.max(...e.value.map((E) => c(E.value))) + 20 + C * 3);
    }
    return o;
  }), d = W({
    position: "absolute",
    "min-width": "max-content"
  });
  return Jo(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = tn(s.value), p = tn(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var p = tn(l.value);
    let y = -p.left + h.left;
    const C = window.document.documentElement.clientWidth;
    y + a.value > C && (y = C - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-p.top + h.top + h.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: c };
}, $c = ["name"], Hc = {
  key: 1,
  class: "extra-select selection"
}, Uc = ["onClick"], Dc = ["innerHTML"], Bc = ["value"], Kc = {
  key: 0,
  class: "input-searching"
}, Vc = ["placeholder"], zc = {
  key: 0,
  class: "allselect-clear"
}, Wc = { class: "row-input" }, qc = ["checked"], Jc = { class: "row-input" }, Qc = ["checked"], Yc = {
  key: 1,
  class: "no-matches"
}, Xc = { key: 2 }, Zc = ["onClick"], Gc = { class: "row-input" }, eu = ["checked"], tu = ["value"], nu = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, su = Object.assign(nu, {
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
    var K, Fe, Ze;
    const n = e, s = be(() => {
      var F, S;
      return (S = (F = n.originalNode) == null ? void 0 : F.multiple) != null ? S : n.multiple;
    }), { options: r, selectedOptions: l, onReset: o } = Al(n.originalNode, $t(n, "options"), $t(n, "modelValue"), n.initialValue), { t: i } = Sl(n.originalNode, $t(n, "localization")), c = (K = n.originalNode) == null ? void 0 : K.classList, a = Object.values((Ze = (Fe = n.originalNode) == null ? void 0 : Fe.style) != null ? Ze : {});
    Tl(n.originalNode);
    const d = (F, S = null) => {
      if (s.value) {
        let ve = S;
        switch (ve == null && (ve = !l.value.has(F)), ve) {
          case !0:
            l.value.set(F, F);
            break;
          case !1:
            l.value.delete(F);
            break;
        }
      } else
        l.value.clear(), S !== !1 && l.value.set(F, F), H.value = !1;
      re(Array.from(l.value.keys()));
    }, { filterText: h, filteredOptions: p, filterValues: y } = Fl(r, l, d, n.filterFields, n.hardFilterFields), { searchingFlag: C } = Pl(
      r,
      n.url,
      n.searchableUrl,
      h,
      n.minChars,
      y,
      n.fetchMode,
      n.fetchOptions
    ), E = W(null), L = W(null), D = W(null), H = W(!1), q = W(null), M = function(F) {
      const S = gt(F.target);
      S.push(F.target), !S.includes(E.value) && !S.includes(L.value) && (H.value = !1);
    };
    kn(() => {
      if (n.dropdownContainer) {
        let F = !1;
        q.value = gt(E.value).find((S) => !!(S instanceof Element && (S.matches(n.dropdownContainer) && (F = !0), F && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(S).position))));
      }
      if (q.value == null && (q.value = document.querySelector("body")), n.originalNode) {
        for (let S of c)
          S != "extraselect" && E.value.classList.add(S);
        for (let S of a)
          E.value.style[S] = n.originalNode.style[S];
        a.includes("background-color") || (E.value.style.backgroundColor = "white");
        let F = gt(E.value, "form").pop();
        F instanceof HTMLElement && F.matches("form") && F.addEventListener("reset", () => setTimeout(o));
      }
      window.document.addEventListener("mousedown", M), window.document.addEventListener("focusin", M);
    }), Ln(() => {
      window.document.removeEventListener("mousedown", M), window.document.removeEventListener("focusin", M);
    });
    const { dropdownStyle: ae, getTextWidth: fe } = Ml(r, l, H, E, L, q, n.maxWidth), re = (F) => {
      Wt(
        () => {
          var S;
          return (S = n.originalNode) == null ? void 0 : S.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), t("update:modelValue", F);
    }, le = (F) => {
      Q(F, !1), h.value = "";
    }, Q = (F, S = null) => {
      S == null && (S = !B.value), S ? (l.value.clear(), r.value.forEach((ve) => l.value.set(ve.key, ve.key))) : l.value.clear(), re(Array.from(l.value.keys()));
    }, V = () => {
      ue.value ? p.value.forEach((F) => {
        l.value.has(F.key) && l.value.delete(F.key);
      }) : p.value.forEach((F) => {
        l.value.has(F.key) || l.value.set(F.key, F.key);
      }), re(Array.from(l.value.keys()));
    };
    Qe(H, (F, S) => {
      F != S && (F ? n.search && Wt(() => {
        D.value.focus({ focusVisible: !0 });
      }) : h.value = "");
    });
    const B = be(() => l.value.size == r.value.length), ue = be(() => p.value.reduce((F, S) => F && l.value.has(S.key), !0)), dt = be(() => l.value.size == 0), Ft = be(() => {
      var F, S, ve, Ge, oe;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (dt.value)
          return i("No selection");
        if (!n.searchableUrl && B.value)
          return $$t("All selected");
        const te = E.value ? getComputedStyle(E.value) : null, $e = ((F = E.value) == null ? void 0 : F.clientWidth) - parseInt(te == null ? void 0 : te.paddingLeft) - parseInt(te == null ? void 0 : te.paddingRight);
        let et = i(":n selected - ", { n: l.value.size }), He = !0;
        for (let Mt of l.value)
          if (He ? He = !1 : et += ", ", et += (ve = (S = r.map.get(Mt[0])) == null ? void 0 : S.value) != null ? ve : C.value ? i("Loading...") : i("Value not found"), $e < fe(et))
            return l.value.size + i(" selected");
        return et;
      } else
        for (let te of l.value)
          return (oe = (Ge = r.map.get(te[0])) == null ? void 0 : Ge.value) != null ? oe : C.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: en, containerProps: de, wrapperProps: G } = vl(
      p,
      {
        itemHeight: 32
      }
    );
    return (F, S) => {
      var ve, Ge;
      return J(), ee(he, null, [
        s.value && j(l).size == 0 ? (J(), ee("input", {
          key: 0,
          type: "hidden",
          name: (Ge = (ve = n.originalNode) == null ? void 0 : ve.name) == null ? void 0 : Ge.replace("[]", ""),
          value: ""
        }, null, 8, $c)) : Oe("", !0),
        n.showSelected ? (J(), ee("div", Hc, [
          (J(!0), ee(he, null, pn(j(l), (oe) => {
            var te;
            return J(), ee("div", {
              key: oe,
              onClick: ($e) => d(oe[0]),
              class: "selection-badge"
            }, [
              rs(Le((te = j(r).find(($e) => $e.key == oe[0])) == null ? void 0 : te.value) + " ", 1),
              ne("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Dc)
            ], 8, Uc);
          }), 128))
        ])) : Oe("", !0),
        ne("input", Yt({
          onFocus: S[0] || (S[0] = (oe) => H.value = !0),
          onClick: S[1] || (S[1] = (oe) => H.value = !0),
          ref_key: "inputNode",
          ref: E,
          value: Ft.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, F.$attrs), null, 16, Bc),
        q.value ? (J(), Tn(ss, {
          key: 2,
          to: q.value
        }, [
          En(ne("div", {
            class: It(["extra-select dropdown", { searching: j(C) > 0 }]),
            ref_key: "dropdownNode",
            ref: L,
            style: At(j(ae))
          }, [
            n.search ? (J(), ee("div", Kc, [
              En(ne("input", {
                ref_key: "searchNode",
                ref: D,
                class: "extra-select-search",
                "onUpdate:modelValue": S[2] || (S[2] = (oe) => ce(h) ? h.value = oe : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: j(i)("Search...")
              }, null, 8, Vc), [
                [os, j(h)]
              ])
            ])) : Oe("", !0),
            j(h).length >= n.minChars ? (J(), ee(he, { key: 1 }, [
              s.value ? (J(), ee("div", zc, [
                j(h).length == 0 ? (J(), ee("div", {
                  key: 0,
                  onClick: Q,
                  class: "all-select"
                }, [
                  ne("div", Wc, [
                    ne("input", {
                      checked: B.value,
                      type: "checkbox"
                    }, null, 8, qc),
                    ne("b", null, Le(j(i)("Select all")), 1)
                  ])
                ])) : Oe("", !0),
                j(p).length > 0 && j(h).length > 0 ? (J(), ee("div", {
                  key: 1,
                  onClick: V,
                  class: "all-select"
                }, [
                  ne("div", Jc, [
                    ne("input", {
                      checked: ue.value,
                      type: "checkbox"
                    }, null, 8, Qc),
                    ne("b", null, Le(j(i)("Select Filtered")), 1)
                  ])
                ])) : Oe("", !0),
                ne("div", {
                  class: "clear",
                  onClick: le
                }, Le(j(i)("Clear")), 1)
              ])) : Oe("", !0),
              j(p).length == 0 ? (J(), ee("div", Yc, Le(j(i)("No matches found")), 1)) : Oe("", !0)
            ], 64)) : (J(), ee("div", Xc, Le(j(i)("Insert at least :n characters", { n: n.minChars })), 1)),
            ne("div", Yt(j(de), { class: "scroller" }), [
              ne("div", Or(As(j(G))), [
                (J(!0), ee(he, null, pn(j(en), (oe) => (J(), ee("button", {
                  key: oe.index,
                  class: "dropdown-row",
                  onClick: hl((te) => d(oe.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  ne("div", Gc, [
                    s.value ? (J(), ee("input", {
                      key: 0,
                      checked: j(l).has(oe.data.key),
                      type: "checkbox"
                    }, null, 8, eu)) : Oe("", !0),
                    rs(" " + Le(oe.data.value), 1)
                  ])
                ], 8, Zc))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [pl, H.value]
          ])
        ], 8, ["to"])) : Oe("", !0),
        n.originalNode ? (J(), Tn(ss, {
          key: 3,
          to: n.originalNode
        }, [
          (J(!0), ee(he, null, pn(j(l), (oe) => (J(), ee("option", {
            key: oe[0],
            selected: "selected",
            value: oe[0]
          }, null, 8, tu))), 128))
        ], 8, ["to"])) : Oe("", !0)
      ], 64);
    };
  }
}), ru = {
  key: 0,
  class: "no-matches"
}, lu = { key: 1 }, ou = ["onClick"], iu = { class: "row-input" }, cu = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, uu = Object.assign(cu, {
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
    var fe, re, le;
    const n = e, { options: s } = Al(n.originalNode, $t(n, "options"), W([])), { t: r } = Sl(n.originalNode, $t(n, "localization")), l = (fe = n.originalNode) == null ? void 0 : fe.classList, o = Object.values((le = (re = n.originalNode) == null ? void 0 : re.style) != null ? le : {});
    Tl(n.originalNode);
    const i = (Q, V = null) => {
      V === !1 ? c.value = "" : c.value = s.map.get(Q).value, C.value = !1;
    }, { filterText: c, filteredOptions: a, filterValues: d } = Fl(s, null, i, n.filterFields, n.hardFilterFields), { searchingFlag: h } = Pl(
      s,
      n.url,
      n.searchableUrl,
      c,
      n.minChars,
      d,
      n.fetchMode,
      n.fetchOptions
    ), p = W(null), y = W(null), C = W(!1), E = W(null), L = function(Q) {
      const V = gt(Q.target);
      V.push(Q.target), !V.includes(p.value) && !V.includes(y.value) && (C.value = !1);
    };
    kn(() => {
      if (n.dropdownContainer) {
        let B = !1;
        E.value = gt(p.value).find((ue) => !!(ue instanceof Element && (ue.matches(n.dropdownContainer) && (B = !0), B && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(ue).position))));
      }
      if (E.value == null && (E.value = document.querySelector("body")), n.originalNode) {
        for (let ue of l)
          ue != "extrasuggest" && p.value.classList.add(ue);
        for (let ue of o)
          p.value.style[ue] = n.originalNode.style[ue];
        o.includes("background-color") || (p.value.style.backgroundColor = "white"), c.value = n.originalNode.value;
        let B = gt(p.value, "form").pop();
        B instanceof HTMLElement && B.matches("form") && B.addEventListener("reset", () => setTimeout(V));
      }
      Jt(() => {
        n.modelValue != null && (c.value = n.modelValue);
      });
      const Q = c.value, V = () => {
        c.value = Q;
      };
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), Ln(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: D } = Ml(s, W([]), C, p, y, E, n.maxWidth), H = () => {
      var Q;
      n.originalNode && (n.originalNode.value = c.value, (Q = n.originalNode) == null || Q.dispatchEvent(new Event("change", { bubbles: !0 }))), t("update:modelValue", c.value);
    };
    Qe(() => C.value, (Q) => {
      Q === !1 && H();
    });
    const { list: q, containerProps: M, wrapperProps: ae } = vl(
      a,
      {
        itemHeight: 32
      }
    );
    return (Q, V) => (J(), ee(he, null, [
      En(ne("input", Yt({
        onFocus: V[0] || (V[0] = (B) => C.value = !0),
        onClick: V[1] || (V[1] = (B) => C.value = !0),
        ref_key: "inputNode",
        ref: p,
        "onUpdate:modelValue": V[2] || (V[2] = (B) => ce(c) ? c.value = B : null),
        class: "extra-select extra-select-input"
      }, Q.$attrs), null, 16), [
        [uc, j(c)]
      ]),
      E.value ? (J(), Tn(ss, {
        key: 0,
        to: E.value
      }, [
        En(ne("div", {
          class: It(["extra-select dropdown", { searching: j(h) > 0 }]),
          ref_key: "dropdownNode",
          ref: y,
          style: At(j(D))
        }, [
          j(c).length >= n.minChars ? (J(), ee(he, { key: 0 }, [
            j(a).length == 0 ? (J(), ee("div", ru, Le(j(r)("No matches found")), 1)) : Oe("", !0)
          ], 64)) : (J(), ee("div", lu, Le(j(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          ne("div", Yt(j(M), { class: "scroller" }), [
            ne("div", Or(As(j(ae))), [
              (J(!0), ee(he, null, pn(j(q), (B) => (J(), ee("button", {
                key: B.index,
                class: "dropdown-row",
                onClick: hl((ue) => i(B.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                ne("div", iu, Le(B.data.value), 1)
              ], 8, ou))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [pl, C.value]
        ])
      ], 8, ["to"])) : Oe("", !0)
    ], 64));
  }
}), au = Ps, Nl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Nl.bindNew(e);
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
      const s = gl(su, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), ut.remove(e, "extra-select");
      });
    });
  }
}, kl = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      kl.bindNew(e);
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
      const s = gl(uu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), ut.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Nl.init(), kl.init(), Ps();
});
export {
  Nl as ExtraSelect,
  kl as ExtraSuggest,
  au as loadExtraSelectDefaultLocalization
};
