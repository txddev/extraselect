const He = /* @__PURE__ */ new WeakMap();
class Ne {
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
    if (!Ne.has(t, n)) {
      Ne.put(t, n, !0);
      const r = s();
      return r !== void 0 && Ne.put(t, n, r), r;
    }
    return !1;
  }
  static async lockAsync(t, n, s) {
    if (!Ne.has(t, n)) {
      Ne.put(t, n, !0);
      const r = await s();
      return r !== void 0 && Ne.put(t, n, r), r;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = He);
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
function Go(e) {
  var t = Array.prototype.slice.call(e.childNodes);
  t.forEach(function(n) {
    e.removeChild(n);
  });
}
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function fs(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const X = {}, wt = [], Se = () => {
}, Jo = () => !1, In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ds = (e) => e.startsWith("onUpdate:"), de = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yo = Object.prototype.hasOwnProperty, B = (e, t) => Yo.call(e, t), M = Array.isArray, xt = (e) => Qt(e) === "[object Map]", At = (e) => Qt(e) === "[object Set]", Vs = (e) => Qt(e) === "[object Date]", F = (e) => typeof e == "function", oe = (e) => typeof e == "string", Ye = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Or = (e) => (Q(e) || F(e)) && F(e.then) && F(e.catch), Cr = Object.prototype.toString, Qt = (e) => Cr.call(e), Qo = (e) => Qt(e).slice(8, -1), Sr = (e) => Qt(e) === "[object Object]", ps = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ fs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Xo = /-(\w)/g, Ot = Mn((e) => e.replace(Xo, (t, n) => n ? n.toUpperCase() : "")), Zo = /\B([A-Z])/g, It = Mn(
  (e) => e.replace(Zo, "-$1").toLowerCase()
), Tr = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dn = Mn((e) => e ? `on${Tr(e)}` : ""), rt = (e, t) => !Object.is(e, t), dn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ar = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, bn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ks;
const gs = () => ks || (ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = oe(s) ? sl(s) : Mt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (oe(e) || Q(e))
    return e;
}
const el = /;(?![^(]*\))/g, tl = /:([^]+)/, nl = /\/\*[^]*?\*\//g;
function sl(e) {
  const t = {};
  return e.replace(nl, "").split(el).forEach((n) => {
    if (n) {
      const s = n.split(tl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Lt(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = Lt(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ir(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !oe(t) && (e.class = Lt(t)), n && (e.style = Mt(n)), e;
}
const rl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ol = /* @__PURE__ */ fs(rl);
function Mr(e) {
  return !!e || e === "";
}
function ll(e, t) {
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
  let n = Vs(e), s = Vs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ye(e), s = Ye(t), n || s)
    return e === t;
  if (n = M(e), s = M(t), n || s)
    return n && s ? ll(e, t) : !1;
  if (n = Q(e), s = Q(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const l in e) {
      const i = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (i && !c || !i && c || !mt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ms(e, t) {
  return e.findIndex((n) => mt(n, t));
}
const De = (e) => oe(e) ? e : e == null ? "" : M(e) || Q(e) && (e.toString === Cr || !F(e.toString)) ? JSON.stringify(e, Lr, 2) : String(e), Lr = (e, t) => t && t.__v_isRef ? Lr(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Un(s, o) + " =>"] = r, n),
    {}
  )
} : At(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : Ye(t) ? Un(t) : Q(t) && !M(t) && !Sr(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return Ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ce;
class il {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ce, !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
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
function cl(e, t = Ce) {
  t && t.active && t.effects.push(e);
}
function Nr() {
  return Ce;
}
function ul(e) {
  Ce && Ce.cleanups.push(e);
}
let pt;
class vs {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, cl(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, lt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (al(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), it();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = nt, n = pt;
    try {
      return nt = !0, pt = this, this._runnings++, js(this), this.fn();
    } finally {
      $s(this), this._runnings--, pt = n, nt = t;
    }
  }
  stop() {
    this.active && (js(this), $s(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function al(e) {
  return e.value;
}
function js(e) {
  e._trackId++, e._depsLength = 0;
}
function $s(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Pr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Pr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let nt = !0, Jn = 0;
const Rr = [];
function lt() {
  Rr.push(nt), nt = !1;
}
function it() {
  const e = Rr.pop();
  nt = e === void 0 ? !0 : e;
}
function _s() {
  Jn++;
}
function ys() {
  for (Jn--; !Jn && Yn.length; )
    Yn.shift()();
}
function Fr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Pr(s, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Yn = [];
function Vr(e, t, n) {
  _s();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r != null ? r : r = e.get(s) === s._trackId) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r != null ? r : r = e.get(s) === s._trackId) && (s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Yn.push(s.scheduler)));
  }
  ys();
}
const kr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, wn = /* @__PURE__ */ new WeakMap(), gt = Symbol(""), Qn = Symbol("");
function xe(e, t, n) {
  if (nt && pt) {
    let s = wn.get(e);
    s || wn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = kr(() => s.delete(n))), Fr(
      pt,
      r
    );
  }
}
function Ge(e, t, n, s, r, o) {
  const l = wn.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && M(e)) {
    const c = Number(s);
    l.forEach((a, d) => {
      (d === "length" || !Ye(d) && d >= c) && i.push(a);
    });
  } else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        M(e) ? ps(n) && i.push(l.get("length")) : (i.push(l.get(gt)), xt(e) && i.push(l.get(Qn)));
        break;
      case "delete":
        M(e) || (i.push(l.get(gt)), xt(e) && i.push(l.get(Qn)));
        break;
      case "set":
        xt(e) && i.push(l.get(gt));
        break;
    }
  _s();
  for (const c of i)
    c && Vr(
      c,
      4
    );
  ys();
}
function fl(e, t) {
  const n = wn.get(e);
  return n && n.get(t);
}
const dl = /* @__PURE__ */ fs("__proto__,__v_isRef,__isVue"), jr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ye)
), Hs = /* @__PURE__ */ hl();
function hl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = K(this);
      for (let o = 0, l = this.length; o < l; o++)
        xe(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(K)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt(), _s();
      const s = K(this)[t].apply(this, n);
      return ys(), it(), s;
    };
  }), e;
}
function pl(e) {
  Ye(e) || (e = String(e));
  const t = K(this);
  return xe(t, "has", e), t.hasOwnProperty(e);
}
class $r {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Tl : Br : o ? Ur : Dr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = M(t);
    if (!r) {
      if (l && B(Hs, n))
        return Reflect.get(Hs, n, s);
      if (n === "hasOwnProperty")
        return pl;
    }
    const i = Reflect.get(t, n, s);
    return (Ye(n) ? jr.has(n) : dl(n)) || (r || xe(t, "get", n), o) ? i : ue(i) ? l && ps(n) ? i : i.value : Q(i) ? r ? Kr(i) : xs(i) : i;
  }
}
class Hr extends $r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const c = Kt(o);
      if (!xn(s) && !Kt(s) && (o = K(o), s = K(s)), !M(t) && ue(o) && !ue(s))
        return c ? !1 : (o.value = s, !0);
    }
    const l = M(t) && ps(n) ? Number(n) < t.length : B(t, n), i = Reflect.set(t, n, s, r);
    return t === K(r) && (l ? rt(s, o) && Ge(t, "set", n, s) : Ge(t, "add", n, s)), i;
  }
  deleteProperty(t, n) {
    const s = B(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ge(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ye(n) || !jr.has(n)) && xe(t, "has", n), s;
  }
  ownKeys(t) {
    return xe(
      t,
      "iterate",
      M(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class gl extends $r {
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
const ml = /* @__PURE__ */ new Hr(), vl = /* @__PURE__ */ new gl(), _l = /* @__PURE__ */ new Hr(
  !0
);
const bs = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function sn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = K(e), o = K(t);
  n || (rt(t, o) && xe(r, "get", t), xe(r, "get", o));
  const { has: l } = Ln(r), i = s ? bs : n ? Os : Wt;
  if (l.call(r, t))
    return i(e.get(t));
  if (l.call(r, o))
    return i(e.get(o));
  e !== r && e.get(t);
}
function rn(e, t = !1) {
  const n = this.__v_raw, s = K(n), r = K(e);
  return t || (rt(e, r) && xe(s, "has", e), xe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function on(e, t = !1) {
  return e = e.__v_raw, !t && xe(K(e), "iterate", gt), Reflect.get(e, "size", e);
}
function Ds(e) {
  e = K(e);
  const t = K(this);
  return Ln(t).has.call(t, e) || (t.add(e), Ge(t, "add", e, e)), this;
}
function Us(e, t) {
  t = K(t);
  const n = K(this), { has: s, get: r } = Ln(n);
  let o = s.call(n, e);
  o || (e = K(e), o = s.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), o ? rt(t, l) && Ge(n, "set", e, t) : Ge(n, "add", e, t), this;
}
function Bs(e) {
  const t = K(this), { has: n, get: s } = Ln(t);
  let r = n.call(t, e);
  r || (e = K(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ge(t, "delete", e, void 0), o;
}
function Ks() {
  const e = K(this), t = e.size !== 0, n = e.clear();
  return t && Ge(e, "clear", void 0, void 0), n;
}
function ln(e, t) {
  return function(s, r) {
    const o = this, l = o.__v_raw, i = K(l), c = t ? bs : e ? Os : Wt;
    return !e && xe(i, "iterate", gt), l.forEach((a, d) => s.call(r, c(a), c(d), o));
  };
}
function cn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = K(r), l = xt(o), i = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, a = r[e](...s), d = n ? bs : t ? Os : Wt;
    return !t && xe(
      o,
      "iterate",
      c ? Qn : gt
    ), {
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
function Xe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yl() {
  const e = {
    get(o) {
      return sn(this, o);
    },
    get size() {
      return on(this);
    },
    has: rn,
    add: Ds,
    set: Us,
    delete: Bs,
    clear: Ks,
    forEach: ln(!1, !1)
  }, t = {
    get(o) {
      return sn(this, o, !1, !0);
    },
    get size() {
      return on(this);
    },
    has: rn,
    add: Ds,
    set: Us,
    delete: Bs,
    clear: Ks,
    forEach: ln(!1, !0)
  }, n = {
    get(o) {
      return sn(this, o, !0);
    },
    get size() {
      return on(this, !0);
    },
    has(o) {
      return rn.call(this, o, !0);
    },
    add: Xe("add"),
    set: Xe("set"),
    delete: Xe("delete"),
    clear: Xe("clear"),
    forEach: ln(!0, !1)
  }, s = {
    get(o) {
      return sn(this, o, !0, !0);
    },
    get size() {
      return on(this, !0);
    },
    has(o) {
      return rn.call(this, o, !0);
    },
    add: Xe("add"),
    set: Xe("set"),
    delete: Xe("delete"),
    clear: Xe("clear"),
    forEach: ln(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = cn(o, !1, !1), n[o] = cn(o, !0, !1), t[o] = cn(o, !1, !0), s[o] = cn(
      o,
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
  bl,
  wl,
  xl,
  El
] = /* @__PURE__ */ yl();
function ws(e, t) {
  const n = t ? e ? El : xl : e ? wl : bl;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    B(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Ol = {
  get: /* @__PURE__ */ ws(!1, !1)
}, Cl = {
  get: /* @__PURE__ */ ws(!1, !0)
}, Sl = {
  get: /* @__PURE__ */ ws(!0, !1)
};
const Dr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap();
function Al(e) {
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
function Il(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Al(Qo(e));
}
function xs(e) {
  return Kt(e) ? e : Es(
    e,
    !1,
    ml,
    Ol,
    Dr
  );
}
function Ml(e) {
  return Es(
    e,
    !1,
    _l,
    Cl,
    Ur
  );
}
function Kr(e) {
  return Es(
    e,
    !0,
    vl,
    Sl,
    Br
  );
}
function Es(e, t, n, s, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = Il(e);
  if (l === 0)
    return e;
  const i = new Proxy(
    e,
    l === 2 ? s : n
  );
  return r.set(e, i), i;
}
function jt(e) {
  return Kt(e) ? jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
  return !!(e && e.__v_isReadonly);
}
function xn(e) {
  return !!(e && e.__v_isShallow);
}
function Wr(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function Ll(e) {
  return Object.isExtensible(e) && Ar(e, "__v_skip", !0), e;
}
const Wt = (e) => Q(e) ? xs(e) : e, Os = (e) => Q(e) ? Kr(e) : e;
class zr {
  constructor(t, n, s, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new vs(
      () => t(this._value),
      () => hn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = K(this);
    return (!t._cacheable || t.effect.dirty) && rt(t._value, t._value = t.effect.run()) && hn(t, 4), qr(t), t.effect._dirtyLevel >= 2 && hn(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Nl(e, t, n = !1) {
  let s, r;
  const o = F(e);
  return o ? (s = e, r = Se) : (s = e.get, r = e.set), new zr(s, r, o || !r, n);
}
function qr(e) {
  var t;
  nt && pt && (e = K(e), Fr(
    pt,
    (t = e.dep) != null ? t : e.dep = kr(
      () => e.dep = void 0,
      e instanceof zr ? e : void 0
    )
  ));
}
function hn(e, t = 4, n) {
  e = K(e);
  const s = e.dep;
  s && Vr(
    s,
    t
  );
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function G(e) {
  return Gr(e, !1);
}
function Pl(e) {
  return Gr(e, !0);
}
function Gr(e, t) {
  return ue(e) ? e : new Rl(e, t);
}
class Rl {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : K(t), this._value = n ? t : Wt(t);
  }
  get value() {
    return qr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || xn(t) || Kt(t);
    t = n ? t : K(t), rt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Wt(t), hn(this, 4));
  }
}
function U(e) {
  return ue(e) ? e.value : e;
}
const Fl = {
  get: (e, t, n) => U(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Jr(e) {
  return jt(e) ? e : new Proxy(e, Fl);
}
class Vl {
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
    return fl(K(this._object), this._key);
  }
}
class kl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function $t(e, t, n) {
  return ue(e) ? e : F(e) ? new kl(e) : Q(e) && arguments.length > 1 ? jl(e, t, n) : G(e);
}
function jl(e, t, n) {
  const s = e[t];
  return ue(s) ? s : new Vl(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function st(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Nn(r, t, n);
  }
}
function Re(e, t, n, s) {
  if (F(e)) {
    const r = st(e, t, n, s);
    return r && Or(r) && r.catch((o) => {
      Nn(o, t, n);
    }), r;
  }
  if (M(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Re(e[o], t, n, s));
    return r;
  }
}
function Nn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const l = t.proxy, i = `https://vuejs.org/error-reference/#runtime-${n}`;
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
      lt(), st(
        c,
        null,
        10,
        [e, l, i]
      ), it();
      return;
    }
  }
  $l(e, n, r, s);
}
function $l(e, t, n, s = !0) {
  console.error(e);
}
let zt = !1, Xn = !1;
const pe = [];
let Be = 0;
const Et = [];
let Ze = null, dt = 0;
const Yr = /* @__PURE__ */ Promise.resolve();
let Cs = null;
function Ct(e) {
  const t = Cs || Yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hl(e) {
  let t = Be + 1, n = pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = pe[s], o = qt(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function Ss(e) {
  (!pe.length || !pe.includes(
    e,
    zt && e.allowRecurse ? Be + 1 : Be
  )) && (e.id == null ? pe.push(e) : pe.splice(Hl(e.id), 0, e), Qr());
}
function Qr() {
  !zt && !Xn && (Xn = !0, Cs = Yr.then(Zr));
}
function Dl(e) {
  const t = pe.indexOf(e);
  t > Be && pe.splice(t, 1);
}
function Ul(e) {
  M(e) ? Et.push(...e) : (!Ze || !Ze.includes(
    e,
    e.allowRecurse ? dt + 1 : dt
  )) && Et.push(e), Qr();
}
function Ws(e, t, n = zt ? Be + 1 : 0) {
  for (; n < pe.length; n++) {
    const s = pe[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      pe.splice(n, 1), n--, s();
    }
  }
}
function Xr(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (n, s) => qt(n) - qt(s)
    );
    if (Et.length = 0, Ze) {
      Ze.push(...t);
      return;
    }
    for (Ze = t, dt = 0; dt < Ze.length; dt++)
      Ze[dt]();
    Ze = null, dt = 0;
  }
}
const qt = (e) => e.id == null ? 1 / 0 : e.id, Bl = (e, t) => {
  const n = qt(e) - qt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Zr(e) {
  Xn = !1, zt = !0, pe.sort(Bl);
  const t = Se;
  try {
    for (Be = 0; Be < pe.length; Be++) {
      const n = pe[Be];
      n && n.active !== !1 && st(n, null, 14);
    }
  } finally {
    Be = 0, pe.length = 0, Xr(), zt = !1, Cs = null, (pe.length || Et.length) && Zr();
  }
}
function Kl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || X;
  let r = n;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in s) {
    const d = `${l === "modelValue" ? "model" : l}Modifiers`, { number: h, trim: g } = s[d] || X;
    g && (r = n.map((y) => oe(y) ? y.trim() : y)), h && (r = n.map(bn));
  }
  let i, c = s[i = Dn(t)] || s[i = Dn(Ot(t))];
  !c && o && (c = s[i = Dn(It(t))]), c && Re(
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
    e.emitted[i] = !0, Re(
      a,
      e,
      6,
      r
    );
  }
}
function eo(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let l = {}, i = !1;
  if (!F(e)) {
    const c = (a) => {
      const d = eo(a, t, !0);
      d && (i = !0, de(l, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !i ? (Q(e) && s.set(e, null), null) : (M(o) ? o.forEach((c) => l[c] = null) : de(l, o), Q(e) && s.set(e, l), l);
}
function Pn(e, t) {
  return !e || !In(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, It(t)) || B(e, t));
}
let we = null, to = null;
function En(e) {
  const t = we;
  return we = e, to = e && e.type.__scopeId || null, t;
}
function Wl(e, t = we, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && sr(-1);
    const o = En(t);
    let l;
    try {
      l = e(...r);
    } finally {
      En(o), s._d && sr(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Bn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: l,
    attrs: i,
    emit: c,
    render: a,
    renderCache: d,
    props: h,
    data: g,
    setupState: y,
    ctx: O,
    inheritAttrs: S
  } = e, j = En(e);
  let P, W;
  try {
    if (n.shapeFlag & 4) {
      const z = r || s, ee = z;
      P = Ue(
        a.call(
          ee,
          z,
          d,
          h,
          y,
          g,
          O
        )
      ), W = i;
    } else {
      const z = t;
      P = Ue(
        z.length > 1 ? z(
          h,
          { attrs: i, slots: l, emit: c }
        ) : z(
          h,
          null
        )
      ), W = t.props ? i : zl(i);
    }
  } catch (z) {
    Bt.length = 0, Nn(z, e, 1), P = Je(vt);
  }
  let $ = P;
  if (W && S !== !1) {
    const z = Object.keys(W), { shapeFlag: ee } = $;
    z.length && ee & 7 && (o && z.some(ds) && (W = ql(
      W,
      o
    )), $ = St($, W, !1, !0));
  }
  return n.dirs && ($ = St($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && ($.transition = n.transition), P = $, En(j), P;
}
const zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || In(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ql = (e, t) => {
  const n = {};
  for (const s in e)
    (!ds(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Gl(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: l, children: i, patchFlag: c } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? zs(s, l, a) : !!l;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const g = d[h];
        if (l[g] !== s[g] && !Pn(a, g))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === l ? !1 : s ? l ? zs(s, l, a) : !0 : !!l;
  return !1;
}
function zs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Pn(n, o))
      return !0;
  }
  return !1;
}
function Jl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Yl = Symbol.for("v-ndc"), Ql = (e) => e.__isSuspense;
function Xl(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Ul(e);
}
const Zl = Symbol.for("v-scx"), ei = () => mn(Zl);
function Gt(e, t) {
  return Rn(e, null, t);
}
function ti(e, t) {
  return Rn(
    e,
    null,
    { flush: "post" }
  );
}
const un = {};
function Ke(e, t, n) {
  return Rn(e, t, n);
}
function Rn(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: o,
  onTrack: l,
  onTrigger: i
} = X) {
  if (t && o) {
    const L = t;
    t = (...Y) => {
      L(...Y), ee();
    };
  }
  const c = ge, a = (L) => s === !0 ? L : ht(L, s === !1 ? 1 : void 0);
  let d, h = !1, g = !1;
  if (ue(e) ? (d = () => e.value, h = xn(e)) : jt(e) ? (d = () => a(e), h = !0) : M(e) ? (g = !0, h = e.some((L) => jt(L) || xn(L)), d = () => e.map((L) => {
    if (ue(L))
      return L.value;
    if (jt(L))
      return a(L);
    if (F(L))
      return st(L, c, 2);
  })) : F(e) ? t ? d = () => st(e, c, 2) : d = () => (y && y(), Re(
    e,
    c,
    3,
    [O]
  )) : d = Se, t && s) {
    const L = d;
    d = () => ht(L());
  }
  let y, O = (L) => {
    y = $.onStop = () => {
      st(L, c, 4), y = $.onStop = void 0;
    };
  }, S;
  if ($n)
    if (O = Se, t ? n && Re(t, c, 3, [
      d(),
      g ? [] : void 0,
      O
    ]) : d(), r === "sync") {
      const L = ei();
      S = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return Se;
  let j = g ? new Array(e.length).fill(un) : un;
  const P = () => {
    if (!(!$.active || !$.dirty))
      if (t) {
        const L = $.run();
        (s || h || (g ? L.some((Y, ne) => rt(Y, j[ne])) : rt(L, j))) && (y && y(), Re(t, c, 3, [
          L,
          j === un ? void 0 : g && j[0] === un ? [] : j,
          O
        ]), j = L);
      } else
        $.run();
  };
  P.allowRecurse = !!t;
  let W;
  r === "sync" ? W = P : r === "post" ? W = () => ye(P, c && c.suspense) : (P.pre = !0, c && (P.id = c.uid), W = () => Ss(P));
  const $ = new vs(d, Se, W), z = Nr(), ee = () => {
    $.stop(), z && hs(z.effects, $);
  };
  return t ? n ? P() : j = $.run() : r === "post" ? ye(
    $.run.bind($),
    c && c.suspense
  ) : $.run(), S && S.push(ee), ee;
}
function ni(e, t, n) {
  const s = this.proxy, r = oe(e) ? e.includes(".") ? no(s, e) : () => s[e] : e.bind(s, s);
  let o;
  F(t) ? o = t : (o = t.handler, n = t);
  const l = Xt(this), i = Rn(r, o.bind(s), n);
  return l(), i;
}
function no(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function ht(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    ht(e.value, t, n);
  else if (M(e))
    for (let s = 0; s < e.length; s++)
      ht(e[s], t, n);
  else if (At(e) || xt(e))
    e.forEach((s) => {
      ht(s, t, n);
    });
  else if (Sr(e))
    for (const s in e)
      ht(e[s], t, n);
  return e;
}
function On(e, t) {
  if (we === null)
    return e;
  const n = Hn(we) || we.proxy, s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, l, i, c = X] = t[r];
    o && (F(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ht(l), s.push({
      dir: o,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: i,
      modifiers: c
    }));
  }
  return e;
}
function ct(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const i = r[l];
    o && (i.oldValue = o[l].value);
    let c = i.dir[s];
    c && (lt(), Re(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), it());
  }
}
const pn = (e) => !!e.type.__asyncLoader, so = (e) => e.type.__isKeepAlive;
function si(e, t) {
  ro(e, "a", t);
}
function ri(e, t) {
  ro(e, "da", t);
}
function ro(e, t, n = ge) {
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
      so(r.parent.vnode) && oi(s, t, n, r), r = r.parent;
  }
}
function oi(e, t, n, s) {
  const r = Fn(
    t,
    e,
    s,
    !0
  );
  kn(() => {
    hs(s[t], r);
  }, n);
}
function Fn(e, t, n = ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      lt();
      const i = Xt(n), c = Re(t, n, e, l);
      return i(), it(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Qe = (e) => (t, n = ge) => (!$n || e === "sp") && Fn(e, (...s) => t(...s), n), li = Qe("bm"), Vn = Qe("m"), ii = Qe("bu"), ci = Qe("u"), ui = Qe("bum"), kn = Qe("um"), ai = Qe("sp"), fi = Qe(
  "rtg"
), di = Qe(
  "rtc"
);
function hi(e, t = ge) {
  Fn("ec", e, t);
}
function gn(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (M(e) || oe(e)) {
    r = new Array(e.length);
    for (let l = 0, i = e.length; l < i; l++)
      r[l] = t(e[l], l, void 0, o && o[l]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o && o[l]);
  } else if (Q(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, i) => t(l, i, void 0, o && o[i])
      );
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
const Zn = (e) => e ? xo(e) ? Hn(e) || e.proxy : Zn(e.parent) : null, Ht = /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => Zn(e.parent),
  $root: (e) => Zn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Ts(e),
  $forceUpdate: (e) => e.f || (e.f = () => {
    e.effect.dirty = !0, Ss(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = Ct.bind(e.proxy)),
  $watch: (e) => ni.bind(e)
}), Kn = (e, t) => e !== X && !e.__isScriptSetup && B(e, t), pi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: l, type: i, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const y = l[t];
      if (y !== void 0)
        switch (y) {
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
        if (Kn(s, t))
          return l[t] = 1, s[t];
        if (r !== X && B(r, t))
          return l[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && B(a, t))
          return l[t] = 3, o[t];
        if (n !== X && B(n, t))
          return l[t] = 4, n[t];
        es && (l[t] = 0);
      }
    }
    const d = Ht[t];
    let h, g;
    if (d)
      return t === "$attrs" && xe(e.attrs, "get", ""), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== X && B(n, t))
      return l[t] = 4, n[t];
    if (g = c.config.globalProperties, B(g, t))
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Kn(r, t) ? (r[t] = n, !0) : s !== X && B(s, t) ? (s[t] = n, !0) : B(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, l) {
    let i;
    return !!n[l] || e !== X && B(e, l) || Kn(t, l) || (i = o[0]) && B(i, l) || B(s, l) || B(Ht, l) || B(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : B(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function oo() {
  return gi().attrs;
}
function gi() {
  const e = wo();
  return e.setupContext || (e.setupContext = Oo(e));
}
function qs(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let es = !0;
function mi(e) {
  const t = Ts(e), n = e.proxy, s = e.ctx;
  es = !1, t.beforeCreate && Gs(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: l,
    watch: i,
    provide: c,
    inject: a,
    created: d,
    beforeMount: h,
    mounted: g,
    beforeUpdate: y,
    updated: O,
    activated: S,
    deactivated: j,
    beforeDestroy: P,
    beforeUnmount: W,
    destroyed: $,
    unmounted: z,
    render: ee,
    renderTracked: L,
    renderTriggered: Y,
    errorCaptured: ne,
    serverPrefetch: _e,
    expose: ie,
    inheritAttrs: me,
    components: Fe,
    directives: We,
    filters: Ve
  } = t;
  if (a && vi(a, s, null), l)
    for (const V in l) {
      const k = l[V];
      F(k) && (s[V] = k.bind(n));
    }
  if (r) {
    const V = r.call(n, n);
    Q(V) && (e.data = xs(V));
  }
  if (es = !0, o)
    for (const V in o) {
      const k = o[V], ze = F(k) ? k.bind(n, n) : F(k.get) ? k.get.bind(n, n) : Se, _t = !F(k) && F(k.set) ? k.set.bind(n) : Se, ke = be({
        get: ze,
        set: _t
      });
      Object.defineProperty(s, V, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Ee) => ke.value = Ee
      });
    }
  if (i)
    for (const V in i)
      lo(i[V], s, n, V);
  if (c) {
    const V = F(c) ? c.call(n) : c;
    Reflect.ownKeys(V).forEach((k) => {
      Ei(k, V[k]);
    });
  }
  d && Gs(d, e, "c");
  function D(V, k) {
    M(k) ? k.forEach((ze) => V(ze.bind(n))) : k && V(k.bind(n));
  }
  if (D(li, h), D(Vn, g), D(ii, y), D(ci, O), D(si, S), D(ri, j), D(hi, ne), D(di, L), D(fi, Y), D(ui, W), D(kn, z), D(ai, _e), M(ie))
    if (ie.length) {
      const V = e.exposed || (e.exposed = {});
      ie.forEach((k) => {
        Object.defineProperty(V, k, {
          get: () => n[k],
          set: (ze) => n[k] = ze
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ee && e.render === Se && (e.render = ee), me != null && (e.inheritAttrs = me), Fe && (e.components = Fe), We && (e.directives = We);
}
function vi(e, t, n = Se) {
  M(e) && (e = ts(e));
  for (const s in e) {
    const r = e[s];
    let o;
    Q(r) ? "default" in r ? o = mn(
      r.from || s,
      r.default,
      !0
    ) : o = mn(r.from || s) : o = mn(r), ue(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (l) => o.value = l
    }) : t[s] = o;
  }
}
function Gs(e, t, n) {
  Re(
    M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function lo(e, t, n, s) {
  const r = s.includes(".") ? no(n, s) : () => n[s];
  if (oe(e)) {
    const o = t[e];
    F(o) && Ke(r, o);
  } else if (F(e))
    Ke(r, e.bind(n));
  else if (Q(e))
    if (M(e))
      e.forEach((o) => lo(o, t, n, s));
    else {
      const o = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(o) && Ke(r, o, e);
    }
}
function Ts(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: l }
  } = e.appContext, i = o.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => Cn(c, a, l, !0)
  ), Cn(c, t, l)), Q(t) && o.set(t, c), c;
}
function Cn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Cn(e, o, n, !0), r && r.forEach(
    (l) => Cn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const i = _i[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const _i = {
  data: Js,
  props: Ys,
  emits: Ys,
  methods: Vt,
  computed: Vt,
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
  components: Vt,
  directives: Vt,
  watch: bi,
  provide: Js,
  inject: yi
};
function Js(e, t) {
  return t ? e ? function() {
    return de(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yi(e, t) {
  return Vt(ts(e), ts(t));
}
function ts(e) {
  if (M(e)) {
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
function Vt(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ys(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    qs(e),
    qs(t != null ? t : {})
  ) : t;
}
function bi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function io() {
  return {
    app: null,
    config: {
      isNativeTag: Jo,
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
let wi = 0;
function xi(e, t) {
  return function(s, r = null) {
    F(s) || (s = de({}, s)), r != null && !Q(r) && (r = null);
    const o = io(), l = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const c = o.app = {
      _uid: wi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: qi,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return l.has(a) || (a && F(a.install) ? (l.add(a), a.install(c, ...d)) : F(a) && (l.add(a), a(c, ...d))), c;
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
      mount(a, d, h) {
        if (!i) {
          const g = Je(s, r);
          return g.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), d && t ? t(g, a) : e(g, a, h), i = !0, c._container = a, a.__vue_app__ = c, Hn(g.component) || g.component.proxy;
        }
      },
      unmount() {
        i && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return o.provides[a] = d, c;
      },
      runWithContext(a) {
        const d = Dt;
        Dt = c;
        try {
          return a();
        } finally {
          Dt = d;
        }
      }
    };
    return c;
  };
}
let Dt = null;
function Ei(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const s = ge || we;
  if (s || Dt) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Dt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(s && s.proxy) : t;
  }
}
const co = {}, uo = () => Object.create(co), ao = (e) => Object.getPrototypeOf(e) === co;
function Oi(e, t, n, s = !1) {
  const r = {}, o = uo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fo(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : Ml(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function Ci(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: l }
  } = e, i = K(r), [c] = e.propsOptions;
  let a = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let g = d[h];
        if (Pn(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (c)
          if (B(o, g))
            y !== o[g] && (o[g] = y, a = !0);
          else {
            const O = Ot(g);
            r[O] = ns(
              c,
              i,
              O,
              y,
              e,
              !1
            );
          }
        else
          y !== o[g] && (o[g] = y, a = !0);
      }
    }
  } else {
    fo(e, t, r, o) && (a = !0);
    let d;
    for (const h in i)
      (!t || !B(t, h) && ((d = It(h)) === h || !B(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = ns(
        c,
        i,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (o !== i)
      for (const h in o)
        (!t || !B(t, h) && !0) && (delete o[h], a = !0);
  }
  a && Ge(e.attrs, "set", "");
}
function fo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let l = !1, i;
  if (t)
    for (let c in t) {
      if (kt(c))
        continue;
      const a = t[c];
      let d;
      r && B(r, d = Ot(c)) ? !o || !o.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Pn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, l = !0);
    }
  if (o) {
    const c = K(n), a = i || X;
    for (let d = 0; d < o.length; d++) {
      const h = o[d];
      n[h] = ns(
        r,
        c,
        h,
        a[h],
        e,
        !B(a, h)
      );
    }
  }
  return l;
}
function ns(e, t, n, s, r, o) {
  const l = e[n];
  if (l != null) {
    const i = B(l, "default");
    if (i && s === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && F(c)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const d = Xt(r);
          s = a[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        s = c;
    }
    l[0] && (o && !i ? s = !1 : l[1] && (s === "" || s === It(n)) && (s = !0));
  }
  return s;
}
function ho(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, i = [];
  let c = !1;
  if (!F(e)) {
    const d = (h) => {
      c = !0;
      const [g, y] = ho(h, t, !0);
      de(l, g), y && i.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c)
    return Q(e) && s.set(e, wt), wt;
  if (M(o))
    for (let d = 0; d < o.length; d++) {
      const h = Ot(o[d]);
      Qs(h) && (l[h] = X);
    }
  else if (o)
    for (const d in o) {
      const h = Ot(d);
      if (Qs(h)) {
        const g = o[d], y = l[h] = M(g) || F(g) ? { type: g } : de({}, g);
        if (y) {
          const O = er(Boolean, y.type), S = er(String, y.type);
          y[0] = O > -1, y[1] = S < 0 || O < S, (O > -1 || B(y, "default")) && i.push(h);
        }
      }
    }
  const a = [l, i];
  return Q(e) && s.set(e, a), a;
}
function Qs(e) {
  return e[0] !== "$" && !kt(e);
}
function Xs(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Zs(e, t) {
  return Xs(e) === Xs(t);
}
function er(e, t) {
  return M(t) ? t.findIndex((n) => Zs(n, e)) : F(t) && Zs(t, e) ? 0 : -1;
}
const po = (e) => e[0] === "_" || e === "$stable", As = (e) => M(e) ? e.map(Ue) : [Ue(e)], Si = (e, t, n) => {
  if (t._n)
    return t;
  const s = Wl((...r) => As(t(...r)), n);
  return s._c = !1, s;
}, go = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (po(r))
      continue;
    const o = e[r];
    if (F(o))
      t[r] = Si(r, o, s);
    else if (o != null) {
      const l = As(o);
      t[r] = () => l;
    }
  }
}, mo = (e, t) => {
  const n = As(t);
  e.slots.default = () => n;
}, Ti = (e, t) => {
  const n = e.slots = uo();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (de(n, t), Ar(n, "_", s, !0)) : go(t, n);
  } else
    t && mo(e, t);
}, Ai = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, l = X;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? o = !1 : (de(r, t), !n && i === 1 && delete r._) : (o = !t.$stable, go(t, r)), l = t;
  } else
    t && (mo(e, t), l = { default: 1 });
  if (o)
    for (const i in r)
      !po(i) && l[i] == null && delete r[i];
};
function ss(e, t, n, s, r = !1) {
  if (M(e)) {
    e.forEach(
      (g, y) => ss(
        g,
        t && (M(t) ? t[y] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (pn(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Hn(s.component) || s.component.proxy : s.el, l = r ? null : o, { i, r: c } = e, a = t && t.r, d = i.refs === X ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== c && (oe(a) ? (d[a] = null, B(h, a) && (h[a] = null)) : ue(a) && (a.value = null)), F(c))
    st(c, i, 12, [l, d]);
  else {
    const g = oe(c), y = ue(c);
    if (g || y) {
      const O = () => {
        if (e.f) {
          const S = g ? B(h, c) ? h[c] : d[c] : c.value;
          r ? M(S) && hs(S, o) : M(S) ? S.includes(o) || S.push(o) : g ? (d[c] = [o], B(h, c) && (h[c] = d[c])) : (c.value = [o], e.k && (d[e.k] = c.value));
        } else
          g ? (d[c] = l, B(h, c) && (h[c] = l)) : y && (c.value = l, e.k && (d[e.k] = l));
      };
      l ? (O.id = -1, ye(O, n)) : O();
    }
  }
}
function Ii() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (gs().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1);
}
const ye = Xl;
function Mi(e) {
  return Li(e);
}
function Li(e, t) {
  Ii();
  const n = gs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: l,
    createText: i,
    createComment: c,
    setText: a,
    setElementText: d,
    parentNode: h,
    nextSibling: g,
    setScopeId: y = Se,
    insertStaticContent: O
  } = e, S = (u, f, p, m = null, v = null, w = null, E = void 0, b = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Rt(u, f) && (m = I(u), Ee(u, v, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: _, ref: C, shapeFlag: A } = f;
    switch (_) {
      case jn:
        j(u, f, p, m);
        break;
      case vt:
        P(u, f, p, m);
        break;
      case zn:
        u == null && W(f, p, m, E);
        break;
      case fe:
        Fe(
          u,
          f,
          p,
          m,
          v,
          w,
          E,
          b,
          x
        );
        break;
      default:
        A & 1 ? ee(
          u,
          f,
          p,
          m,
          v,
          w,
          E,
          b,
          x
        ) : A & 6 ? We(
          u,
          f,
          p,
          m,
          v,
          w,
          E,
          b,
          x
        ) : (A & 64 || A & 128) && _.process(
          u,
          f,
          p,
          m,
          v,
          w,
          E,
          b,
          x,
          Ae
        );
    }
    C != null && v && ss(C, u && u.ref, w, f || u, !f);
  }, j = (u, f, p, m) => {
    if (u == null)
      s(
        f.el = i(f.children),
        p,
        m
      );
    else {
      const v = f.el = u.el;
      f.children !== u.children && a(v, f.children);
    }
  }, P = (u, f, p, m) => {
    u == null ? s(
      f.el = c(f.children || ""),
      p,
      m
    ) : f.el = u.el;
  }, W = (u, f, p, m) => {
    [u.el, u.anchor] = O(
      u.children,
      f,
      p,
      m,
      u.el,
      u.anchor
    );
  }, $ = ({ el: u, anchor: f }, p, m) => {
    let v;
    for (; u && u !== f; )
      v = g(u), s(u, p, m), u = v;
    s(f, p, m);
  }, z = ({ el: u, anchor: f }) => {
    let p;
    for (; u && u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, ee = (u, f, p, m, v, w, E, b, x) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), u == null ? L(
      f,
      p,
      m,
      v,
      w,
      E,
      b,
      x
    ) : _e(
      u,
      f,
      v,
      w,
      E,
      b,
      x
    );
  }, L = (u, f, p, m, v, w, E, b) => {
    let x, _;
    const { props: C, shapeFlag: A, transition: T, dirs: R } = u;
    if (x = u.el = l(
      u.type,
      w,
      C && C.is,
      C
    ), A & 8 ? d(x, u.children) : A & 16 && ne(
      u.children,
      x,
      null,
      m,
      v,
      Wn(u, w),
      E,
      b
    ), R && ct(u, null, m, "created"), Y(x, u, u.scopeId, E, m), C) {
      for (const q in C)
        q !== "value" && !kt(q) && o(
          x,
          q,
          null,
          C[q],
          w,
          u.children,
          m,
          v,
          Te
        );
      "value" in C && o(x, "value", null, C.value, w), (_ = C.onVnodeBeforeMount) && $e(_, m, u);
    }
    R && ct(u, null, m, "beforeMount");
    const H = Ni(v, T);
    H && T.beforeEnter(x), s(x, f, p), ((_ = C && C.onVnodeMounted) || H || R) && ye(() => {
      _ && $e(_, m, u), H && T.enter(x), R && ct(u, null, m, "mounted");
    }, v);
  }, Y = (u, f, p, m, v) => {
    if (p && y(u, p), m)
      for (let w = 0; w < m.length; w++)
        y(u, m[w]);
    if (v) {
      let w = v.subTree;
      if (f === w) {
        const E = v.vnode;
        Y(
          u,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, ne = (u, f, p, m, v, w, E, b, x = 0) => {
    for (let _ = x; _ < u.length; _++) {
      const C = u[_] = b ? et(u[_]) : Ue(u[_]);
      S(
        null,
        C,
        f,
        p,
        m,
        v,
        w,
        E,
        b
      );
    }
  }, _e = (u, f, p, m, v, w, E) => {
    const b = f.el = u.el;
    let { patchFlag: x, dynamicChildren: _, dirs: C } = f;
    x |= u.patchFlag & 16;
    const A = u.props || X, T = f.props || X;
    let R;
    if (p && ut(p, !1), (R = T.onVnodeBeforeUpdate) && $e(R, p, f, u), C && ct(f, u, p, "beforeUpdate"), p && ut(p, !0), _ ? ie(
      u.dynamicChildren,
      _,
      b,
      p,
      m,
      Wn(f, v),
      w
    ) : E || k(
      u,
      f,
      b,
      null,
      p,
      m,
      Wn(f, v),
      w,
      !1
    ), x > 0) {
      if (x & 16)
        me(
          b,
          f,
          A,
          T,
          p,
          m,
          v
        );
      else if (x & 2 && A.class !== T.class && o(b, "class", null, T.class, v), x & 4 && o(b, "style", A.style, T.style, v), x & 8) {
        const H = f.dynamicProps;
        for (let q = 0; q < H.length; q++) {
          const Z = H[q], ce = A[Z], Le = T[Z];
          (Le !== ce || Z === "value") && o(
            b,
            Z,
            ce,
            Le,
            v,
            u.children,
            p,
            m,
            Te
          );
        }
      }
      x & 1 && u.children !== f.children && d(b, f.children);
    } else
      !E && _ == null && me(
        b,
        f,
        A,
        T,
        p,
        m,
        v
      );
    ((R = T.onVnodeUpdated) || C) && ye(() => {
      R && $e(R, p, f, u), C && ct(f, u, p, "updated");
    }, m);
  }, ie = (u, f, p, m, v, w, E) => {
    for (let b = 0; b < f.length; b++) {
      const x = u[b], _ = f[b], C = x.el && (x.type === fe || !Rt(x, _) || x.shapeFlag & 70) ? h(x.el) : p;
      S(
        x,
        _,
        C,
        null,
        m,
        v,
        w,
        E,
        !0
      );
    }
  }, me = (u, f, p, m, v, w, E) => {
    if (p !== m) {
      if (p !== X)
        for (const b in p)
          !kt(b) && !(b in m) && o(
            u,
            b,
            p[b],
            null,
            E,
            f.children,
            v,
            w,
            Te
          );
      for (const b in m) {
        if (kt(b))
          continue;
        const x = m[b], _ = p[b];
        x !== _ && b !== "value" && o(
          u,
          b,
          _,
          x,
          E,
          f.children,
          v,
          w,
          Te
        );
      }
      "value" in m && o(u, "value", p.value, m.value, E);
    }
  }, Fe = (u, f, p, m, v, w, E, b, x) => {
    const _ = f.el = u ? u.el : i(""), C = f.anchor = u ? u.anchor : i("");
    let { patchFlag: A, dynamicChildren: T, slotScopeIds: R } = f;
    R && (b = b ? b.concat(R) : R), u == null ? (s(_, p, m), s(C, p, m), ne(
      f.children || [],
      p,
      C,
      v,
      w,
      E,
      b,
      x
    )) : A > 0 && A & 64 && T && u.dynamicChildren ? (ie(
      u.dynamicChildren,
      T,
      p,
      v,
      w,
      E,
      b
    ), (f.key != null || v && f === v.subTree) && Is(
      u,
      f,
      !0
    )) : k(
      u,
      f,
      p,
      C,
      v,
      w,
      E,
      b,
      x
    );
  }, We = (u, f, p, m, v, w, E, b, x) => {
    f.slotScopeIds = b, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      p,
      m,
      E,
      x
    ) : Ve(
      f,
      p,
      m,
      v,
      w,
      E,
      x
    ) : le(u, f, x);
  }, Ve = (u, f, p, m, v, w, E) => {
    const b = u.component = Ui(
      u,
      m,
      v
    );
    if (so(u) && (b.ctx.renderer = Ae), Bi(b), b.asyncDep) {
      if (v && v.registerDep(b, D), !u.el) {
        const x = b.subTree = Je(vt);
        P(null, x, f, p);
      }
    } else
      D(
        b,
        u,
        f,
        p,
        v,
        w,
        E
      );
  }, le = (u, f, p) => {
    const m = f.component = u.component;
    if (Gl(u, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        V(m, f, p);
        return;
      } else
        m.next = f, Dl(m.update), m.effect.dirty = !0, m.update();
    else
      f.el = u.el, m.vnode = f;
  }, D = (u, f, p, m, v, w, E) => {
    const b = () => {
      if (u.isMounted) {
        let { next: C, bu: A, u: T, parent: R, vnode: H } = u;
        {
          const yt = vo(u);
          if (yt) {
            C && (C.el = H.el, V(u, C, E)), yt.asyncDep.then(() => {
              u.isUnmounted || b();
            });
            return;
          }
        }
        let q = C, Z;
        ut(u, !1), C ? (C.el = H.el, V(u, C, E)) : C = H, A && dn(A), (Z = C.props && C.props.onVnodeBeforeUpdate) && $e(Z, R, C, H), ut(u, !0);
        const ce = Bn(u), Le = u.subTree;
        u.subTree = ce, S(
          Le,
          ce,
          h(Le.el),
          I(Le),
          u,
          v,
          w
        ), C.el = ce.el, q === null && Jl(u, ce.el), T && ye(T, v), (Z = C.props && C.props.onVnodeUpdated) && ye(
          () => $e(Z, R, C, H),
          v
        );
      } else {
        let C;
        const { el: A, props: T } = f, { bm: R, m: H, parent: q } = u, Z = pn(f);
        if (ut(u, !1), R && dn(R), !Z && (C = T && T.onVnodeBeforeMount) && $e(C, q, f), ut(u, !0), A && he) {
          const ce = () => {
            u.subTree = Bn(u), he(
              A,
              u.subTree,
              u,
              v,
              null
            );
          };
          Z ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && ce()
          ) : ce();
        } else {
          const ce = u.subTree = Bn(u);
          S(
            null,
            ce,
            p,
            m,
            u,
            v,
            w
          ), f.el = ce.el;
        }
        if (H && ye(H, v), !Z && (C = T && T.onVnodeMounted)) {
          const ce = f;
          ye(
            () => $e(C, q, ce),
            v
          );
        }
        (f.shapeFlag & 256 || q && pn(q.vnode) && q.vnode.shapeFlag & 256) && u.a && ye(u.a, v), u.isMounted = !0, f = p = m = null;
      }
    }, x = u.effect = new vs(
      b,
      Se,
      () => Ss(_),
      u.scope
    ), _ = u.update = () => {
      x.dirty && x.run();
    };
    _.id = u.uid, ut(u, !0), _();
  }, V = (u, f, p) => {
    f.component = u;
    const m = u.vnode.props;
    u.vnode = f, u.next = null, Ci(u, f.props, m, p), Ai(u, f.children, p), lt(), Ws(u), it();
  }, k = (u, f, p, m, v, w, E, b, x = !1) => {
    const _ = u && u.children, C = u ? u.shapeFlag : 0, A = f.children, { patchFlag: T, shapeFlag: R } = f;
    if (T > 0) {
      if (T & 128) {
        _t(
          _,
          A,
          p,
          m,
          v,
          w,
          E,
          b,
          x
        );
        return;
      } else if (T & 256) {
        ze(
          _,
          A,
          p,
          m,
          v,
          w,
          E,
          b,
          x
        );
        return;
      }
    }
    R & 8 ? (C & 16 && Te(_, v, w), A !== _ && d(p, A)) : C & 16 ? R & 16 ? _t(
      _,
      A,
      p,
      m,
      v,
      w,
      E,
      b,
      x
    ) : Te(_, v, w, !0) : (C & 8 && d(p, ""), R & 16 && ne(
      A,
      p,
      m,
      v,
      w,
      E,
      b,
      x
    ));
  }, ze = (u, f, p, m, v, w, E, b, x) => {
    u = u || wt, f = f || wt;
    const _ = u.length, C = f.length, A = Math.min(_, C);
    let T;
    for (T = 0; T < A; T++) {
      const R = f[T] = x ? et(f[T]) : Ue(f[T]);
      S(
        u[T],
        R,
        p,
        null,
        v,
        w,
        E,
        b,
        x
      );
    }
    _ > C ? Te(
      u,
      v,
      w,
      !0,
      !1,
      A
    ) : ne(
      f,
      p,
      m,
      v,
      w,
      E,
      b,
      x,
      A
    );
  }, _t = (u, f, p, m, v, w, E, b, x) => {
    let _ = 0;
    const C = f.length;
    let A = u.length - 1, T = C - 1;
    for (; _ <= A && _ <= T; ) {
      const R = u[_], H = f[_] = x ? et(f[_]) : Ue(f[_]);
      if (Rt(R, H))
        S(
          R,
          H,
          p,
          null,
          v,
          w,
          E,
          b,
          x
        );
      else
        break;
      _++;
    }
    for (; _ <= A && _ <= T; ) {
      const R = u[A], H = f[T] = x ? et(f[T]) : Ue(f[T]);
      if (Rt(R, H))
        S(
          R,
          H,
          p,
          null,
          v,
          w,
          E,
          b,
          x
        );
      else
        break;
      A--, T--;
    }
    if (_ > A) {
      if (_ <= T) {
        const R = T + 1, H = R < C ? f[R].el : m;
        for (; _ <= T; )
          S(
            null,
            f[_] = x ? et(f[_]) : Ue(f[_]),
            p,
            H,
            v,
            w,
            E,
            b,
            x
          ), _++;
      }
    } else if (_ > T)
      for (; _ <= A; )
        Ee(u[_], v, w, !0), _++;
    else {
      const R = _, H = _, q = /* @__PURE__ */ new Map();
      for (_ = H; _ <= T; _++) {
        const Oe = f[_] = x ? et(f[_]) : Ue(f[_]);
        Oe.key != null && q.set(Oe.key, _);
      }
      let Z, ce = 0;
      const Le = T - H + 1;
      let yt = !1, Ps = 0;
      const Pt = new Array(Le);
      for (_ = 0; _ < Le; _++)
        Pt[_] = 0;
      for (_ = R; _ <= A; _++) {
        const Oe = u[_];
        if (ce >= Le) {
          Ee(Oe, v, w, !0);
          continue;
        }
        let je;
        if (Oe.key != null)
          je = q.get(Oe.key);
        else
          for (Z = H; Z <= T; Z++)
            if (Pt[Z - H] === 0 && Rt(Oe, f[Z])) {
              je = Z;
              break;
            }
        je === void 0 ? Ee(Oe, v, w, !0) : (Pt[je - H] = _ + 1, je >= Ps ? Ps = je : yt = !0, S(
          Oe,
          f[je],
          p,
          null,
          v,
          w,
          E,
          b,
          x
        ), ce++);
      }
      const Rs = yt ? Pi(Pt) : wt;
      for (Z = Rs.length - 1, _ = Le - 1; _ >= 0; _--) {
        const Oe = H + _, je = f[Oe], Fs = Oe + 1 < C ? f[Oe + 1].el : m;
        Pt[_] === 0 ? S(
          null,
          je,
          p,
          Fs,
          v,
          w,
          E,
          b,
          x
        ) : yt && (Z < 0 || _ !== Rs[Z] ? ke(je, p, Fs, 2) : Z--);
      }
    }
  }, ke = (u, f, p, m, v = null) => {
    const { el: w, type: E, transition: b, children: x, shapeFlag: _ } = u;
    if (_ & 6) {
      ke(u.component.subTree, f, p, m);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, p, m);
      return;
    }
    if (_ & 64) {
      E.move(u, f, p, Ae);
      return;
    }
    if (E === fe) {
      s(w, f, p);
      for (let A = 0; A < x.length; A++)
        ke(x[A], f, p, m);
      s(u.anchor, f, p);
      return;
    }
    if (E === zn) {
      $(u, f, p);
      return;
    }
    if (m !== 2 && _ & 1 && b)
      if (m === 0)
        b.beforeEnter(w), s(w, f, p), ye(() => b.enter(w), v);
      else {
        const { leave: A, delayLeave: T, afterLeave: R } = b, H = () => s(w, f, p), q = () => {
          A(w, () => {
            H(), R && R();
          });
        };
        T ? T(w, H, q) : q();
      }
    else
      s(w, f, p);
  }, Ee = (u, f, p, m = !1, v = !1) => {
    const {
      type: w,
      props: E,
      ref: b,
      children: x,
      dynamicChildren: _,
      shapeFlag: C,
      patchFlag: A,
      dirs: T
    } = u;
    if (b != null && ss(b, null, p, u, !0), C & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const R = C & 1 && T, H = !pn(u);
    let q;
    if (H && (q = E && E.onVnodeBeforeUnmount) && $e(q, f, u), C & 6)
      tn(u.component, p, m);
    else {
      if (C & 128) {
        u.suspense.unmount(p, m);
        return;
      }
      R && ct(u, null, f, "beforeUnmount"), C & 64 ? u.type.remove(
        u,
        f,
        p,
        v,
        Ae,
        m
      ) : _ && (w !== fe || A > 0 && A & 64) ? Te(
        _,
        f,
        p,
        !1,
        !0
      ) : (w === fe && A & 384 || !v && C & 16) && Te(x, f, p), m && Nt(u);
    }
    (H && (q = E && E.onVnodeUnmounted) || R) && ye(() => {
      q && $e(q, f, u), R && ct(u, null, f, "unmounted");
    }, p);
  }, Nt = (u) => {
    const { type: f, el: p, anchor: m, transition: v } = u;
    if (f === fe) {
      en(p, m);
      return;
    }
    if (f === zn) {
      z(u);
      return;
    }
    const w = () => {
      r(p), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: b } = v, x = () => E(p, w);
      b ? b(u.el, w, x) : x();
    } else
      w();
  }, en = (u, f) => {
    let p;
    for (; u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, tn = (u, f, p) => {
    const { bum: m, scope: v, update: w, subTree: E, um: b } = u;
    m && dn(m), v.stop(), w && (w.active = !1, Ee(E, u, f, p)), b && ye(b, f), ye(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Te = (u, f, p, m = !1, v = !1, w = 0) => {
    for (let E = w; E < u.length; E++)
      Ee(u[E], f, p, m, v);
  }, I = (u) => u.shapeFlag & 6 ? I(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : g(u.anchor || u.el);
  let N = !1;
  const ae = (u, f, p) => {
    u == null ? f._vnode && Ee(f._vnode, null, null, !0) : S(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      p
    ), N || (N = !0, Ws(), Xr(), N = !1), f._vnode = u;
  }, Ae = {
    p: S,
    um: Ee,
    m: ke,
    r: Nt,
    mt: Ve,
    mc: ne,
    pc: k,
    pbc: ie,
    n: I,
    o: e
  };
  let se, he;
  return t && ([se, he] = t(
    Ae
  )), {
    render: ae,
    hydrate: se,
    createApp: xi(ae, se)
  };
}
function Wn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ni(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Is(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (M(s) && M(r))
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      let i = r[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[o] = et(r[o]), i.el = l.el), n || Is(l, i)), i.type === jn && (i.el = l.el);
    }
}
function Pi(e) {
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
function vo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vo(t);
}
const Ri = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), tr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, nr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, rs = (e, t) => {
  const n = e && e.to;
  return oe(n) ? t ? t(n) : null : n;
}, Fi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, o, l, i, c, a) {
    const {
      mc: d,
      pc: h,
      pbc: g,
      o: { insert: y, querySelector: O, createText: S, createComment: j }
    } = a, P = Ut(t.props);
    let { shapeFlag: W, children: $, dynamicChildren: z } = t;
    if (e == null) {
      const ee = t.el = S(""), L = t.anchor = S("");
      y(ee, n, s), y(L, n, s);
      const Y = t.target = rs(t.props, O), ne = t.targetAnchor = S("");
      Y && (y(ne, Y), l === "svg" || tr(Y) ? l = "svg" : (l === "mathml" || nr(Y)) && (l = "mathml"));
      const _e = (ie, me) => {
        W & 16 && d(
          $,
          ie,
          me,
          r,
          o,
          l,
          i,
          c
        );
      };
      P ? _e(n, L) : Y && _e(Y, ne);
    } else {
      t.el = e.el;
      const ee = t.anchor = e.anchor, L = t.target = e.target, Y = t.targetAnchor = e.targetAnchor, ne = Ut(e.props), _e = ne ? n : L, ie = ne ? ee : Y;
      if (l === "svg" || tr(L) ? l = "svg" : (l === "mathml" || nr(L)) && (l = "mathml"), z ? (g(
        e.dynamicChildren,
        z,
        _e,
        r,
        o,
        l,
        i
      ), Is(e, t, !0)) : c || h(
        e,
        t,
        _e,
        ie,
        r,
        o,
        l,
        i,
        !1
      ), P)
        ne ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : an(
          t,
          n,
          ee,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const me = t.target = rs(
          t.props,
          O
        );
        me && an(
          t,
          me,
          null,
          a,
          0
        );
      } else
        ne && an(
          t,
          L,
          Y,
          a,
          1
        );
    }
    _o(t);
  },
  remove(e, t, n, s, { um: r, o: { remove: o } }, l) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: h, props: g } = e;
    if (h && o(d), l && o(a), i & 16) {
      const y = l || !Ut(g);
      for (let O = 0; O < c.length; O++) {
        const S = c[O];
        r(
          S,
          t,
          n,
          y,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: an,
  hydrate: Vi
};
function an(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: i, shapeFlag: c, children: a, props: d } = e, h = o === 2;
  if (h && s(l, t, n), (!h || Ut(d)) && c & 16)
    for (let g = 0; g < a.length; g++)
      r(
        a[g],
        t,
        n,
        2
      );
  h && s(i, t, n);
}
function Vi(e, t, n, s, r, o, {
  o: { nextSibling: l, parentNode: i, querySelector: c }
}, a) {
  const d = t.target = rs(
    t.props,
    c
  );
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Ut(t.props))
        t.anchor = a(
          l(e),
          t,
          i(e),
          n,
          s,
          r,
          o
        ), t.targetAnchor = h;
      else {
        t.anchor = l(e);
        let g = h;
        for (; g; )
          if (g = l(g), g && g.nodeType === 8 && g.data === "teleport anchor") {
            t.targetAnchor = g, d._lpa = t.targetAnchor && l(t.targetAnchor);
            break;
          }
        a(
          h,
          t,
          d,
          n,
          s,
          r,
          o
        );
      }
    _o(t);
  }
  return t.anchor && l(t.anchor);
}
const os = Fi;
function _o(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const fe = Symbol.for("v-fgt"), jn = Symbol.for("v-txt"), vt = Symbol.for("v-cmt"), zn = Symbol.for("v-stc"), Bt = [];
let Pe = null;
function J(e = !1) {
  Bt.push(Pe = e ? null : []);
}
function ki() {
  Bt.pop(), Pe = Bt[Bt.length - 1] || null;
}
let Jt = 1;
function sr(e) {
  Jt += e;
}
function yo(e) {
  return e.dynamicChildren = Jt > 0 ? Pe || wt : null, ki(), Jt > 0 && Pe && Pe.push(e), e;
}
function te(e, t, n, s, r, o) {
  return yo(
    re(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function Sn(e, t, n, s, r) {
  return yo(
    Je(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function ji(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bo = ({ key: e }) => e != null ? e : null, vn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ue(e) || F(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function re(e, t = null, n = null, s = 0, r = null, o = e === fe ? 0 : 1, l = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bo(t),
    ref: t && vn(t),
    scopeId: to,
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
    appContext: null,
    ctx: we
  };
  return i ? (Ls(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= oe(n) ? 8 : 16), Jt > 0 && !l && Pe && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Pe.push(c), c;
}
const Je = $i;
function $i(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Yl) && (e = vt), ji(e)) {
    const i = St(
      e,
      t,
      !0
    );
    return n && Ls(i, n), Jt > 0 && !o && Pe && (i.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = i : Pe.push(i)), i.patchFlag |= -2, i;
  }
  if (zi(e) && (e = e.__vccOpts), t) {
    t = Ms(t);
    let { class: i, style: c } = t;
    i && !oe(i) && (t.class = Lt(i)), Q(c) && (Wr(c) && !M(c) && (c = de({}, c)), t.style = Mt(c));
  }
  const l = oe(e) ? 1 : Ql(e) ? 128 : Ri(e) ? 64 : Q(e) ? 4 : F(e) ? 2 : 0;
  return re(
    e,
    t,
    n,
    s,
    r,
    l,
    o,
    !0
  );
}
function Ms(e) {
  return e ? Wr(e) || ao(e) ? de({}, e) : e : null;
}
function St(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: l, children: i, transition: c } = e, a = t ? Yt(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && bo(a),
    ref: t && t.ref ? n && o ? M(o) ? o.concat(vn(t)) : [o, vn(t)] : vn(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== fe ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && St(e.ssContent),
    ssFallback: e.ssFallback && St(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && (d.transition = c.clone(d)), d;
}
function ls(e = " ", t = 0) {
  return Je(jn, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (J(), Sn(vt, null, e)) : Je(vt, null, e);
}
function Ue(e) {
  return e == null || typeof e == "boolean" ? Je(vt) : M(e) ? Je(
    fe,
    null,
    e.slice()
  ) : typeof e == "object" ? et(e) : Je(jn, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function Ls(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ao(t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    F(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ls(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Lt([t.class, s.class]));
      else if (r === "style")
        t.style = Mt([t.style, s.style]);
      else if (In(r)) {
        const o = t[r], l = s[r];
        l && o !== l && !(M(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function $e(e, t, n, s = null) {
  Re(e, t, 7, [
    n,
    s
  ]);
}
const Hi = io();
let Di = 0;
function Ui(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Hi, o = {
    uid: Di++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new il(
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
    propsOptions: ho(s, r),
    emitsOptions: eo(s, r),
    emit: null,
    emitted: null,
    propsDefaults: X,
    inheritAttrs: s.inheritAttrs,
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Kl.bind(null, o), e.ce && e.ce(o), o;
}
let ge = null;
const wo = () => ge || we;
let Tn, is;
{
  const e = gs(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((l) => l(o)) : r[0](o);
    };
  };
  Tn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), is = t(
    "__VUE_SSR_SETTERS__",
    (n) => $n = n
  );
}
const Xt = (e) => {
  const t = ge;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(t);
  };
}, rr = () => {
  ge && ge.scope.off(), Tn(null);
};
function xo(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
function Bi(e, t = !1) {
  t && is(t);
  const { props: n, children: s } = e.vnode, r = xo(e);
  Oi(e, n, r, t), Ti(e, s);
  const o = r ? Ki(e, t) : void 0;
  return t && is(!1), o;
}
function Ki(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pi);
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Oo(e) : null, o = Xt(e);
    lt();
    const l = st(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (it(), o(), Or(l)) {
      if (l.then(rr, rr), t)
        return l.then((i) => {
          or(e, i, t);
        }).catch((i) => {
          Nn(i, e, 0);
        });
      e.asyncDep = l;
    } else
      or(e, l, t);
  } else
    Eo(e, t);
}
function or(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = Jr(t)), Eo(e, n);
}
let lr;
function Eo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && lr && !s.render) {
      const r = s.template || Ts(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = de(
          de(
            {
              isCustomElement: o,
              delimiters: i
            },
            l
          ),
          c
        );
        s.render = lr(r, a);
      }
    }
    e.render = s.render || Se;
  }
  {
    const r = Xt(e);
    lt();
    try {
      mi(e);
    } finally {
      it(), r();
    }
  }
}
const Wi = {
  get(e, t) {
    return xe(e, "get", ""), e[t];
  }
};
function Oo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wi),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Jr(Ll(e.exposed)), {
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
function zi(e) {
  return F(e) && "__vccOpts" in e;
}
const be = (e, t) => Nl(e, t, $n), qi = "3.4.27";
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Gi = "http://www.w3.org/2000/svg", Ji = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, ir = tt && /* @__PURE__ */ tt.createElement("template"), Yi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? tt.createElementNS(Gi, e) : t === "mathml" ? tt.createElementNS(Ji, e) : tt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, s, r, o) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      ir.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
      const i = ir.content;
      if (s === "svg" || s === "mathml") {
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
}, Qi = Symbol("_vtc");
function Xi(e, t, n) {
  const s = e[Qi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const An = Symbol("_vod"), Co = Symbol("_vsh"), So = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[An] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ft(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ft(e, !0), s.enter(e)) : s.leave(e, () => {
      Ft(e, !1);
    }) : Ft(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ft(e, t);
  }
};
function Ft(e, t) {
  e.style.display = t ? e[An] : "none", e[Co] = !t;
}
const Zi = Symbol(""), ec = /(^|;)\s*display\s*:/;
function tc(e, t, n) {
  const s = e.style, r = oe(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const l of t.split(";")) {
          const i = l.slice(0, l.indexOf(":")).trim();
          n[i] == null && _n(s, i, "");
        }
      else
        for (const l in t)
          n[l] == null && _n(s, l, "");
    for (const l in n)
      l === "display" && (o = !0), _n(s, l, n[l]);
  } else if (r) {
    if (t !== n) {
      const l = s[Zi];
      l && (n += ";" + l), s.cssText = n, o = ec.test(n);
    }
  } else
    t && e.removeAttribute("style");
  An in e && (e[An] = o ? s.display : "", e[Co] && (s.display = "none"));
}
const cr = /\s*!important$/;
function _n(e, t, n) {
  if (M(n))
    n.forEach((s) => _n(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = nc(e, t);
    cr.test(n) ? e.setProperty(
      It(s),
      n.replace(cr, ""),
      "important"
    ) : e[s] = n;
  }
}
const ur = ["Webkit", "Moz", "ms"], qn = {};
function nc(e, t) {
  const n = qn[t];
  if (n)
    return n;
  let s = Ot(t);
  if (s !== "filter" && s in e)
    return qn[t] = s;
  s = Tr(s);
  for (let r = 0; r < ur.length; r++) {
    const o = ur[r] + s;
    if (o in e)
      return qn[t] = o;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function sc(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const o = ol(t);
    n == null || o && !Mr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function rc(e, t, n, s, r, o, l) {
  if (t === "innerHTML" || t === "textContent") {
    s && l(s, r, o), e[t] = n == null ? "" : n;
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? "" : n;
    (a !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Mr(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function qe(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function oc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const fr = Symbol("_vei");
function lc(e, t, n, s, r = null) {
  const o = e[fr] || (e[fr] = {}), l = o[t];
  if (s && l)
    l.value = s;
  else {
    const [i, c] = ic(t);
    if (s) {
      const a = o[t] = ac(
        s,
        r
      );
      qe(e, i, a, c);
    } else
      l && (oc(e, i, l, c), o[t] = void 0);
  }
}
const dr = /(?:Once|Passive|Capture)$/;
function ic(e) {
  let t;
  if (dr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(dr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t];
}
let Gn = 0;
const cc = /* @__PURE__ */ Promise.resolve(), uc = () => Gn || (cc.then(() => Gn = 0), Gn = Date.now());
function ac(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Re(
      fc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = uc(), n;
}
function fc(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dc = (e, t, n, s, r, o, l, i, c) => {
  const a = r === "svg";
  t === "class" ? Xi(e, s, a) : t === "style" ? tc(e, n, s) : In(t) ? ds(t) || lc(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hc(e, t, s, a)) ? rc(
    e,
    t,
    s,
    o,
    l,
    i,
    c
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), sc(e, t, s, a));
};
function hc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hr(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return hr(t) && oe(n) ? !1 : t in e;
}
const ot = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return M(t) ? (n) => dn(t, n) : t;
};
function pc(e) {
  e.target.composing = !0;
}
function pr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Me = Symbol("_assign"), cs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Me] = ot(r);
    const o = s || r.props && r.props.type === "number";
    qe(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), o && (i = bn(i)), e[Me](i);
    }), n && qe(e, "change", () => {
      e.value = e.value.trim();
    }), t || (qe(e, "compositionstart", pc), qe(e, "compositionend", pr), qe(e, "change", pr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e[Me] = ot(o), e.composing)
      return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? bn(e.value) : e.value, i = t == null ? "" : t;
    l !== i && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === i) || (e.value = i));
  }
}, gc = {
  deep: !0,
  created(e, t, n) {
    e[Me] = ot(n), qe(e, "change", () => {
      const s = e._modelValue, r = Tt(e), o = e.checked, l = e[Me];
      if (M(s)) {
        const i = ms(s, r), c = i !== -1;
        if (o && !c)
          l(s.concat(r));
        else if (!o && c) {
          const a = [...s];
          a.splice(i, 1), l(a);
        }
      } else if (At(s)) {
        const i = new Set(s);
        o ? i.add(r) : i.delete(r), l(i);
      } else
        l(To(e, o));
    });
  },
  mounted: gr,
  beforeUpdate(e, t, n) {
    e[Me] = ot(n), gr(e, t, n);
  }
};
function gr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, M(t) ? e.checked = ms(t, s.props.value) > -1 : At(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = mt(t, To(e, !0)));
}
const mc = {
  created(e, { value: t }, n) {
    e.checked = mt(t, n.props.value), e[Me] = ot(n), qe(e, "change", () => {
      e[Me](Tt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Me] = ot(s), t !== n && (e.checked = mt(t, s.props.value));
  }
}, vc = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = At(t);
    qe(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? bn(Tt(l)) : Tt(l)
      );
      e[Me](
        e.multiple ? r ? new Set(o) : o : o[0]
      ), e._assigning = !0, Ct(() => {
        e._assigning = !1;
      });
    }), e[Me] = ot(s);
  },
  mounted(e, { value: t, modifiers: { number: n } }) {
    mr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Me] = ot(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || mr(e, t);
  }
};
function mr(e, t, n) {
  const s = e.multiple, r = M(t);
  if (!(s && !r && !At(t))) {
    for (let o = 0, l = e.options.length; o < l; o++) {
      const i = e.options[o], c = Tt(i);
      if (s)
        if (r) {
          const a = typeof c;
          a === "string" || a === "number" ? i.selected = t.some((d) => String(d) === String(c)) : i.selected = ms(t, c) > -1;
        } else
          i.selected = t.has(c);
      else if (mt(Tt(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Tt(e) {
  return "_value" in e ? e._value : e.value;
}
function To(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const _c = {
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
function yc(e, t) {
  switch (e) {
    case "SELECT":
      return vc;
    case "TEXTAREA":
      return cs;
    default:
      switch (t) {
        case "checkbox":
          return gc;
        case "radio":
          return mc;
        default:
          return cs;
      }
  }
}
function fn(e, t, n, s, r) {
  const l = yc(
    e.tagName,
    n.props && n.props.type
  )[r];
  l && l(e, t, n, s);
}
const bc = ["ctrl", "shift", "alt", "meta"], wc = {
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
  exact: (e, t) => bc.some((n) => e[`${n}Key`] && !t.includes(n))
}, ft = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let l = 0; l < t.length; l++) {
      const i = wc[t[l]];
      if (i && i(r, t))
        return;
    }
    return e(r, ...o);
  });
}, xc = /* @__PURE__ */ de({ patchProp: dc }, Yi);
let vr;
function Ec() {
  return vr || (vr = Mi(xc));
}
const Ao = (...e) => {
  const t = Ec().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Cc(s);
    if (!r)
      return;
    const o = t._component;
    !F(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, Oc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Oc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Cc(e) {
  return oe(e) ? document.querySelector(e) : e;
}
var _r;
const Zt = typeof window < "u";
Zt && ((_r = window == null ? void 0 : window.navigator) == null ? void 0 : _r.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Sc(e) {
  return typeof e == "function" ? e() : U(e);
}
function Tc(e) {
  return e;
}
function Ac(e) {
  return Nr() ? (ul(e), !0) : !1;
}
function Ic(e, t = !0) {
  wo() ? Vn(e) : t ? e() : Ct(e);
}
function yn(e) {
  var t;
  const n = Sc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Io = Zt ? window : void 0;
Zt && window.document;
Zt && window.navigator;
Zt && window.location;
function Mc(e, t = !1) {
  const n = G(), s = () => n.value = Boolean(e());
  return s(), Ic(s, t), n;
}
const us = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, as = "__vueuse_ssr_handlers__";
us[as] = us[as] || {};
us[as];
var yr = Object.getOwnPropertySymbols, Lc = Object.prototype.hasOwnProperty, Nc = Object.prototype.propertyIsEnumerable, Pc = (e, t) => {
  var n = {};
  for (var s in e)
    Lc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && yr)
    for (var s of yr(e))
      t.indexOf(s) < 0 && Nc.call(e, s) && (n[s] = e[s]);
  return n;
};
function Rc(e, t, n = {}) {
  const s = n, { window: r = Io } = s, o = Pc(s, ["window"]);
  let l;
  const i = Mc(() => r && "ResizeObserver" in r), c = () => {
    l && (l.disconnect(), l = void 0);
  }, a = Ke(() => yn(e), (h) => {
    c(), i.value && r && h && (l = new ResizeObserver(t), l.observe(h, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), a();
  };
  return Ac(d), {
    isSupported: i,
    stop: d
  };
}
function Fc(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Io, box: r = "content-box" } = n, o = be(() => {
    var c, a;
    return (a = (c = yn(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : a.includes("svg");
  }), l = G(t.width), i = G(t.height);
  return Rc(e, ([c]) => {
    const a = r === "border-box" ? c.borderBoxSize : r === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
    if (s && o.value) {
      const d = yn(e);
      if (d) {
        const h = s.getComputedStyle(d);
        l.value = parseFloat(h.width), i.value = parseFloat(h.height);
      }
    } else if (a) {
      const d = Array.isArray(a) ? a : [a];
      l.value = d.reduce((h, { inlineSize: g }) => h + g, 0), i.value = d.reduce((h, { blockSize: g }) => h + g, 0);
    } else
      l.value = c.contentRect.width, i.value = c.contentRect.height;
  }, n), Ke(() => yn(e), (c) => {
    l.value = c ? t.width : 0, i.value = c ? t.height : 0;
  }), {
    width: l,
    height: i
  };
}
var br;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(br || (br = {}));
var Vc = Object.defineProperty, wr = Object.getOwnPropertySymbols, kc = Object.prototype.hasOwnProperty, jc = Object.prototype.propertyIsEnumerable, xr = (e, t, n) => t in e ? Vc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $c = (e, t) => {
  for (var n in t || (t = {}))
    kc.call(t, n) && xr(e, n, t[n]);
  if (wr)
    for (var n of wr(t))
      jc.call(t, n) && xr(e, n, t[n]);
  return e;
};
const Hc = {
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
$c({
  linear: Tc
}, Hc);
function Mo(e, t) {
  const { containerStyle: n, wrapperProps: s, scrollTo: r, calculateRange: o, currentList: l, containerRef: i } = "itemHeight" in t ? Bc(t, e) : Uc(t, e);
  return {
    list: l,
    scrollTo: r,
    containerProps: {
      ref: i,
      onScroll: () => {
        o();
      },
      style: n
    },
    wrapperProps: s
  };
}
function Lo(e) {
  const t = G(null), n = Fc(t), s = G([]), r = Pl(e);
  return { state: G({ start: 0, end: 10 }), source: r, currentList: s, size: n, containerRef: t };
}
function No(e, t, n) {
  return (s) => {
    if (typeof n == "number")
      return Math.ceil(s / n);
    const { start: r = 0 } = e.value;
    let o = 0, l = 0;
    for (let i = r; i < t.value.length; i++) {
      const c = n(i);
      if (o += c, l = i, o > s)
        break;
    }
    return l - r;
  };
}
function Po(e, t) {
  return (n) => {
    if (typeof t == "number")
      return Math.floor(n / t) + 1;
    let s = 0, r = 0;
    for (let o = 0; o < e.value.length; o++) {
      const l = t(o);
      if (s += l, s >= n) {
        r = o;
        break;
      }
    }
    return r + 1;
  };
}
function Ro(e, t, n, s, { containerRef: r, state: o, currentList: l, source: i }) {
  return () => {
    const c = r.value;
    if (c) {
      const a = n(e === "vertical" ? c.scrollTop : c.scrollLeft), d = s(e === "vertical" ? c.clientHeight : c.clientWidth), h = a - t, g = a + d + t;
      o.value = {
        start: h < 0 ? 0 : h,
        end: g > i.value.length ? i.value.length : g
      }, l.value = i.value.slice(o.value.start, o.value.end).map((y, O) => ({
        data: y,
        index: O + o.value.start
      }));
    }
  };
}
function Fo(e, t) {
  return (n) => typeof e == "number" ? n * e : t.value.slice(0, n).reduce((r, o, l) => r + e(l), 0);
}
function Vo(e, t, n) {
  Ke([e.width, e.height, t], () => {
    n();
  });
}
function ko(e, t) {
  return be(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, s, r) => n + e(r), 0));
}
const Dc = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function jo(e, t, n, s) {
  return (r) => {
    s.value && (s.value[Dc[e]] = n(r), t());
  };
}
function Uc(e, t) {
  const n = Lo(t), { state: s, source: r, currentList: o, size: l, containerRef: i } = n, c = { overflowX: "auto" }, { itemWidth: a, overscan: d = 5 } = e, h = No(s, r, a), g = Po(r, a), y = Ro("horizontal", d, g, h, n), O = Fo(a, r), S = be(() => O(s.value.start)), j = ko(a, r);
  Vo(l, t, y);
  const P = jo("horizontal", y, O, i), W = be(() => ({
    style: {
      height: "100%",
      width: `${j.value - S.value}px`,
      marginLeft: `${S.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: P,
    calculateRange: y,
    wrapperProps: W,
    containerStyle: c,
    currentList: o,
    containerRef: i
  };
}
function Bc(e, t) {
  const n = Lo(t), { state: s, source: r, currentList: o, size: l, containerRef: i } = n, c = { overflowY: "auto" }, { itemHeight: a, overscan: d = 5 } = e, h = No(s, r, a), g = Po(r, a), y = Ro("vertical", d, g, h, n), O = Fo(a, r), S = be(() => O(s.value.start)), j = ko(a, r);
  Vo(l, t, y);
  const P = jo("vertical", y, O, i), W = be(() => ({
    style: {
      width: "100%",
      height: `${j.value - S.value}px`,
      marginTop: `${S.value}px`
    }
  }));
  return {
    calculateRange: y,
    scrollTo: P,
    containerStyle: c,
    wrapperProps: W,
    currentList: o,
    containerRef: i
  };
}
const at = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, Kc = (e) => {
  try {
    var t = JSON.parse(e);
    if (t && typeof t == "object")
      return t;
  } catch {
  }
  return e;
}, Wc = (e, t, n) => {
  window.ExtraSelectOptions == null && (window.ExtraSelectOptions = {});
  const s = {
    defaultArray: e.value,
    get: () => e.value,
    push: (r, o, l = null) => {
      parseInt(r) == r && (r = parseInt(r));
      const i = e.map.get(r);
      if (i)
        i.value = o, i.data = l;
      else {
        let c = { value: o, key: r, data: l };
        e.value.push(c), e.map.set(c.key, c);
      }
    },
    addRange: (r) => {
      for (let o of r)
        e.actions.push(o.key, o.value, o.data);
    },
    remove: (r) => {
      e.value.splice(e.value.findIndex((o) => o.key == r), 1);
    },
    clear: () => {
      e.value = [], e.rebuildMap();
    },
    sort: (r = null) => {
      r == null && (r = (o, l) => o.value.localeCompare(l.value)), e.value = e.value.sort(r);
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
let zc = 1;
const $o = (e) => {
  e && (e.style.display = "none", Go(e));
}, Ho = (e, t, n, s, r = null) => {
  const o = G(/* @__PURE__ */ new Map());
  Gt(() => {
    if (Array.isArray(n.value)) {
      o.value.clear();
      for (let a of n.value)
        o.value.set(a, a);
    }
  });
  const l = G([]);
  if (l.map = /* @__PURE__ */ new Map(), l.rebuildMap = () => {
    if (l.map.clear(), l.value)
      for (let a of l.value)
        l.map.set(a.key, a);
  }, Gt(() => {
    t.value && (l.value = t.value.map((a) => ({ ...a, key: at(a.key) })), l.rebuildMap());
  }), e) {
    if (o.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => at(d.value)).filter((d) => d != null))
        o.value.set(a, a);
      l.value = Array.apply(null, e.options).reduce((a, d) => (a.push({
        value: d.text,
        key: at(d.value),
        data: Object.keys(d.dataset).reduce((h, g) => (h[g] = Kc(d.dataset[g]), h), {})
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
      o.value.set(at(a), at(a));
  else
    s != null && o.value.set(at(s), at(s));
  (r == null || r === "" || r == 0) && (r = "extraselect_" + (++zc).toString()), Wc(l, o, r);
  const i = [];
  return o.value.forEach((a, d) => {
    i.push([d, a]);
  }), { options: l, selectedOptions: o, onReset: () => {
    o.value.clear();
    for (let [a, d] of i)
      o.value.set(a, d);
  } };
};
G({});
function qc(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Ns = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), Do(G(n), "defaults");
}, Do = (e, t) => {
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {}, Ns());
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
let Gc = 0;
const Uo = (e, t) => {
  var s;
  return Do(t, (s = e == null ? void 0 : e.id) != null ? s : "extraselect_" + (++Gc).toString()), { propLocalization: t, t: (r, o = {}) => {
    var i;
    let l = (i = t.value[r]) != null ? i : window.ExtraSelectLocalization.defaults.get(r);
    return l == null && (window.ExtraSelectLocalization.defaults.push(r, r), l = r), qc(l, o);
  } };
}, Er = async function(e, t = null, n = {}) {
  var o;
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...(o = n.headers) != null ? o : {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, Bo = (e, t, n, s, r, o, l = "limited", i = {}) => {
  const c = G(0), a = G(!1), d = be(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      Gt((g) => {
        if (s.value.length >= r) {
          let y = !0;
          switch (l) {
            case "always":
              break;
            default:
            case "limited":
              y = !h.includes(s.value);
              break;
            case "complete":
              y = h.reduce((O, S) => O && !s.value.startsWith(S), !0);
              break;
          }
          if (y) {
            a.value = !0;
            const O = setTimeout(() => {
              h.push(s.value), c.value += 1, i.body = { ...i.body, ...o.value }, Er(t, s.value, i).then((S) => {
                e.actions.addRange(S), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(O);
            });
          }
        }
      });
    } else
      Er(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, Ko = (e, t, n, s = [], r = []) => {
  const o = G(""), l = G([]), i = G({}), c = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in c) {
    let h = c[d], g = document.getElementById(d);
    i.value[d] = g == null ? void 0 : g.value, g && g.addEventListener("change", (y) => {
      i.value[d] = y.target.value, h && Ct(() => {
        if (t != null)
          for (let O of Array.from(t.value.keys()))
            l.value.find((S) => S.key == O) || n(O, !1);
        else
          l.value.find((O) => O.key == o.value) || n(o.value, !1);
      });
    });
  }
  const a = function(d, h) {
    let g = d.value;
    return Object.keys(i.value).length > 0 && (g = g.filter((y) => {
      var O, S;
      for (let j in i.value)
        if ((c[j] ? !0 : ((O = i.value[j]) != null ? O : "").length > 0) && ((S = y.data) == null ? void 0 : S.hasOwnProperty(j))) {
          if (Array.isArray(y.data[j])) {
            if (!y.data[j].includes(i.value[j]))
              return !1;
          } else if (y.data[j] != i.value[j])
            return !1;
        }
      return !0;
    })), h.length > 0 && (g = g.filter((y) => y.value.toLowerCase().includes(h.toLowerCase()))), g;
  };
  return Gt(() => {
    l.value = a(e, o.value);
  }), { filterText: o, filteredOptions: l, filterValues: i };
}, Wo = (e, t, n, s, r, o, l) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(h) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = i, y.measureText(h).width;
  }, a = be(() => {
    var g, y;
    const h = (g = nn(s.value).width) != null ? g : 100;
    if (l === "inherit")
      return h;
    if (l == null || l === "dynamic") {
      const O = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(h, Math.max(...e.value.map((S) => c(S.value))) + 20 + O * 3);
    }
    return l;
  }), d = G({
    position: "absolute",
    "min-width": "max-content"
  });
  return ti(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = nn(s.value), g = nn(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var g = nn(o.value);
    let y = -g.left + h.left;
    const O = window.document.documentElement.clientWidth;
    y + a.value > O && (y = O - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-g.top + h.top + h.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: c };
}, Jc = ["name"], Yc = {
  key: 1,
  class: "extra-select selection"
}, Qc = ["onClick"], Xc = ["innerHTML"], Zc = ["value", "disabled"], eu = {
  key: 0,
  class: "input-searching"
}, tu = ["placeholder"], nu = {
  key: 0,
  class: "allselect-clear"
}, su = { class: "row-input" }, ru = ["checked"], ou = { class: "row-input" }, lu = ["checked"], iu = {
  key: 1,
  class: "no-matches"
}, cu = { key: 2 }, uu = ["onClick"], au = { class: "row-input" }, fu = ["checked"], du = ["value"], hu = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, pu = Object.assign(hu, {
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
    var ke, Ee, Nt, en, tn, Te;
    const n = e, s = be(() => {
      var I, N;
      return (N = (I = n.originalNode) == null ? void 0 : I.multiple) != null ? N : n.multiple;
    });
    let r = oo();
    const { options: o, selectedOptions: l, onReset: i } = Ho(n.originalNode, $t(n, "options"), $t(n, "modelValue"), n.initialValue, (Nt = (Ee = (ke = n.originalNode) == null ? void 0 : ke.id) != null ? Ee : r.id) != null ? Nt : null), { t: c } = Uo(n.originalNode, $t(n, "localization")), a = (en = n.originalNode) == null ? void 0 : en.classList, d = Object.values((Te = (tn = n.originalNode) == null ? void 0 : tn.style) != null ? Te : {});
    $o(n.originalNode);
    const h = t, g = (I, N = null) => {
      if (s.value) {
        let ae = N;
        switch (ae == null && (ae = !l.value.has(I)), ae) {
          case !0:
            l.value.set(I, I);
            break;
          case !1:
            l.value.delete(I);
            break;
        }
      } else
        l.value.clear(), N !== !1 && l.value.set(I, I), z.value = !1;
      ie(Array.from(l.value.keys()));
    }, { filterText: y, filteredOptions: O, filterValues: S } = Ko(o, l, g, n.filterFields, n.hardFilterFields), { searchingFlag: j } = Bo(
      o,
      n.url,
      n.searchableUrl,
      y,
      n.minChars,
      S,
      n.fetchMode,
      n.fetchOptions
    ), P = G(null), W = G(null), $ = G(null), z = G(!1);
    function ee(I) {
      n.disabled || (z.value = I);
    }
    Ke(y, () => {
      W.value.querySelector(".scroller").scrollTop = 0;
    });
    const L = G(null), Y = function(I) {
      const N = bt(I.target);
      N.push(I.target), !N.includes(P.value) && !N.includes(W.value) ? z.value = !1 : (I.stopImmediatePropagation(), I.preventDefault());
    };
    Vn(() => {
      if (n.dropdownContainer) {
        let I = !1;
        L.value = bt(P.value).find((N) => !!(N instanceof Element && (N.matches(n.dropdownContainer) && (I = !0), I && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(N).position))));
      }
      if (L.value == null && (L.value = document.querySelector("body")), n.originalNode) {
        for (let N of a)
          N != "extraselect" && P.value.classList.add(N);
        for (let N of d)
          P.value.style[N] = n.originalNode.style[N];
        let I = bt(P.value, "form").pop();
        I instanceof HTMLElement && I.matches("form") && I.addEventListener("reset", () => setTimeout(i)), n.originalNode.toggleValue = g, n.originalNode.setValues = (N) => {
          l.value.clear();
          for (let ae of N)
            g(ae);
        };
      }
      window.document.addEventListener("mousedown", Y), window.document.addEventListener("focusin", Y);
    }), kn(() => {
      window.document.removeEventListener("mousedown", Y), window.document.removeEventListener("focusin", Y);
    });
    const { dropdownStyle: ne, getTextWidth: _e } = Wo(o, l, z, P, W, L, n.maxWidth), ie = (I) => {
      Ct(
        () => {
          var N;
          return (N = n.originalNode) == null ? void 0 : N.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), h("update:modelValue", I);
    }, me = (I) => {
      Fe(I, !1), y.value = "";
    }, Fe = (I, N = null) => {
      N == null && (N = !Ve.value), N ? (l.value.clear(), o.value.forEach((ae) => l.value.set(ae.key, ae.key))) : l.value.clear(), ie(Array.from(l.value.keys()));
    }, We = () => {
      le.value ? O.value.forEach((I) => {
        l.value.has(I.key) && l.value.delete(I.key);
      }) : O.value.forEach((I) => {
        l.value.has(I.key) || l.value.set(I.key, I.key);
      }), ie(Array.from(l.value.keys()));
    };
    Ke(z, (I, N) => {
      I != N && (I ? n.search && Ct(() => {
        $.value.focus({ focusVisible: !0 });
      }) : y.value = "");
    });
    const Ve = be(() => l.value.size == o.value.length), le = be(() => O.value.reduce((I, N) => I && l.value.has(N.key), !0)), D = be(() => l.value.size == 0), V = be(() => {
      var I, N, ae, Ae, se;
      if (o.value.length < 0)
        return "";
      if (s.value) {
        if (D.value)
          return c("No selection");
        if (!n.searchableUrl && Ve.value)
          return c("All selected");
        const he = P.value ? getComputedStyle(P.value) : null, u = ((I = P.value) == null ? void 0 : I.clientWidth) - parseInt(he == null ? void 0 : he.paddingLeft) - parseInt(he == null ? void 0 : he.paddingRight);
        let f = c(":n selected - ", { n: l.value.size }), p = !0;
        for (let m of l.value)
          if (p ? p = !1 : f += ", ", f += (ae = (N = o.map.get(m[0])) == null ? void 0 : N.value) != null ? ae : j.value ? c("Loading...") : c("Value not found"), u < _e(f))
            return l.value.size + c(" selected");
        return f;
      } else
        for (let he of l.value)
          return (se = (Ae = o.map.get(he[0])) == null ? void 0 : Ae.value) != null ? se : j.value ? c("Loading...") : c("Value not found");
      return c("No selection");
    }), { list: k, containerProps: ze, wrapperProps: _t } = Mo(
      O,
      {
        itemHeight: 32
      }
    );
    return (I, N) => {
      var ae, Ae;
      return J(), te(fe, null, [
        s.value && U(l).size == 0 ? (J(), te("input", {
          key: 0,
          type: "hidden",
          name: (Ae = (ae = n.originalNode) == null ? void 0 : ae.name) == null ? void 0 : Ae.replace("[]", ""),
          value: ""
        }, null, 8, Jc)) : Ie("", !0),
        n.showSelected ? (J(), te("div", Yc, [
          (J(!0), te(fe, null, gn(U(l), (se) => {
            var he;
            return J(), te("div", {
              key: se,
              onClick: ft((u) => g(se[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ls(De((he = U(o).find((u) => u.key == se[0])) == null ? void 0 : he.value) + " ", 1),
              re("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Xc)
            ], 8, Qc);
          }), 128))
        ])) : Ie("", !0),
        re("input", Yt({
          onFocus: N[0] || (N[0] = (se) => ee(!0)),
          onClick: N[1] || (N[1] = ft((se) => ee(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: P,
          value: V.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, I.$attrs, { disabled: e.disabled }), null, 16, Zc),
        L.value ? (J(), Sn(os, {
          key: 2,
          to: L.value
        }, [
          On(re("div", {
            class: Lt(["extra-select dropdown", { searching: U(j) > 0 }]),
            ref_key: "dropdownNode",
            ref: W,
            style: Mt(U(ne))
          }, [
            n.search ? (J(), te("div", eu, [
              On(re("input", {
                ref_key: "searchNode",
                ref: $,
                class: "extra-select-search",
                "onUpdate:modelValue": N[2] || (N[2] = (se) => ue(y) ? y.value = se : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: U(c)("Search...")
              }, null, 8, tu), [
                [cs, U(y)]
              ])
            ])) : Ie("", !0),
            U(y).length >= n.minChars ? (J(), te(fe, { key: 1 }, [
              s.value ? (J(), te("div", nu, [
                U(y).length == 0 ? (J(), te("div", {
                  key: 0,
                  onClick: ft(Fe, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  re("div", su, [
                    re("input", {
                      checked: Ve.value,
                      type: "checkbox"
                    }, null, 8, ru),
                    re("b", null, De(U(c)("Select all")), 1)
                  ])
                ])) : Ie("", !0),
                U(O).length > 0 && U(y).length > 0 ? (J(), te("div", {
                  key: 1,
                  onClick: ft(We, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  re("div", ou, [
                    re("input", {
                      checked: le.value,
                      type: "checkbox"
                    }, null, 8, lu),
                    re("b", null, De(U(c)("Select Filtered")), 1)
                  ])
                ])) : Ie("", !0),
                re("div", {
                  class: "clear",
                  onClick: ft(me, ["stop", "prevent"])
                }, De(U(c)("Clear")), 1)
              ])) : Ie("", !0),
              U(O).length == 0 ? (J(), te("div", iu, De(U(c)("No matches found")), 1)) : Ie("", !0)
            ], 64)) : (J(), te("div", cu, De(U(c)("Insert at least :n characters", { n: n.minChars })), 1)),
            re("div", Yt(U(ze), { class: "scroller" }), [
              re("div", Ir(Ms(U(_t))), [
                (J(!0), te(fe, null, gn(U(k), (se) => (J(), te("button", {
                  key: se.index,
                  class: "dropdown-row",
                  onClick: ft((he) => g(se.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  re("div", au, [
                    s.value ? (J(), te("input", {
                      key: 0,
                      checked: U(l).has(se.data.key),
                      type: "checkbox"
                    }, null, 8, fu)) : Ie("", !0),
                    ls(" " + De(se.data.value), 1)
                  ])
                ], 8, uu))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [So, z.value]
          ])
        ], 8, ["to"])) : Ie("", !0),
        n.originalNode ? (J(), Sn(os, {
          key: 3,
          to: n.originalNode
        }, [
          (J(!0), te(fe, null, gn(U(l), (se) => (J(), te("option", {
            key: se[0],
            selected: "selected",
            value: se[0]
          }, null, 8, du))), 128))
        ], 8, ["to"])) : Ie("", !0)
      ], 64);
    };
  }
}), gu = ["disabled"], mu = {
  key: 0,
  class: "no-matches"
}, vu = { key: 1 }, _u = ["onClick"], yu = { class: "row-input" }, bu = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, wu = Object.assign(bu, {
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
    var _e, ie, me, Fe, We, Ve;
    const n = e;
    let s = oo();
    const { options: r } = Ho(n.originalNode, $t(n, "options"), G([]), null, (me = (ie = (_e = n.originalNode) == null ? void 0 : _e.id) != null ? ie : s.id) != null ? me : null), { t: o } = Uo(n.originalNode, $t(n, "localization")), l = (Fe = n.originalNode) == null ? void 0 : Fe.classList, i = Object.values((Ve = (We = n.originalNode) == null ? void 0 : We.style) != null ? Ve : {});
    $o(n.originalNode);
    const c = t, a = (le, D = null) => {
      D === !1 ? d.value = "" : d.value = r.map.get(le).value, j.value = !1;
    }, { filterText: d, filteredOptions: h, filterValues: g } = Ko(r, null, a, n.filterFields, n.hardFilterFields), { searchingFlag: y } = Bo(
      r,
      n.url,
      n.searchableUrl,
      d,
      n.minChars,
      g,
      n.fetchMode,
      n.fetchOptions
    ), O = G(null), S = G(null), j = G(!1), P = G(null);
    function W(le) {
      n.disabled || (j.value = le);
    }
    Ke(d, () => {
      S.value.querySelector(".scroller").scrollTop = 0;
    });
    const $ = function(le) {
      const D = bt(le.target);
      D.push(le.target), !D.includes(O.value) && !D.includes(S.value) && (j.value = !1);
    };
    Vn(() => {
      if (n.dropdownContainer) {
        let V = !1;
        P.value = bt(O.value).find((k) => !!(k instanceof Element && (k.matches(n.dropdownContainer) && (V = !0), V && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(k).position))));
      }
      if (P.value == null && (P.value = document.querySelector("body")), n.originalNode) {
        for (let k of l)
          k != "extrasuggest" && O.value.classList.add(k);
        for (let k of i)
          O.value.style[k] = n.originalNode.style[k];
        d.value = n.originalNode.value;
        let V = bt(O.value, "form").pop();
        V instanceof HTMLElement && V.matches("form") && V.addEventListener("reset", () => setTimeout(D)), n.originalNode.addEventListener("change", () => {
          ee(!0);
        });
      }
      Gt(() => {
        n.modelValue != null && (d.value = n.modelValue);
      });
      const le = d.value, D = () => {
        d.value = le;
      };
      window.document.addEventListener("mousedown", $), window.document.addEventListener("focusin", $);
    }), kn(() => {
      window.document.removeEventListener("mousedown", $), window.document.removeEventListener("focusin", $);
    });
    const { dropdownStyle: z } = Wo(r, G([]), j, O, S, P, n.maxWidth), ee = (le = !1) => {
      var D;
      n.originalNode && (le ? d.value = n.originalNode.value : (n.originalNode.value = d.value, (D = n.originalNode) == null || D.dispatchEvent(new Event("change", { bubbles: !0 })))), c("update:modelValue", d.value);
    };
    Ke(() => j.value, (le) => {
      le === !1 && ee();
    });
    const { list: L, containerProps: Y, wrapperProps: ne } = Mo(
      h,
      {
        itemHeight: 32
      }
    );
    return (le, D) => (J(), te(fe, null, [
      On(re("input", Yt({
        onFocus: D[0] || (D[0] = (V) => W(!0)),
        onClick: D[1] || (D[1] = (V) => W(!0)),
        ref_key: "inputNode",
        ref: O,
        "onUpdate:modelValue": D[2] || (D[2] = (V) => ue(d) ? d.value = V : null),
        class: "extra-select extra-select-input"
      }, le.$attrs, { disabled: e.disabled }), null, 16, gu), [
        [_c, U(d)]
      ]),
      P.value ? (J(), Sn(os, {
        key: 0,
        to: P.value
      }, [
        On(re("div", {
          class: Lt(["extra-select dropdown", { searching: U(y) > 0 }]),
          ref_key: "dropdownNode",
          ref: S,
          style: Mt(U(z))
        }, [
          U(d).length >= n.minChars ? (J(), te(fe, { key: 0 }, [
            U(h).length == 0 ? (J(), te("div", mu, De(U(o)("No matches found")), 1)) : Ie("", !0)
          ], 64)) : (J(), te("div", vu, De(U(o)("Insert at least :n characters", { n: n.minChars })), 1)),
          re("div", Yt(U(Y), { class: "scroller" }), [
            re("div", Ir(Ms(U(ne))), [
              (J(!0), te(fe, null, gn(U(L), (V) => (J(), te("button", {
                key: V.index,
                class: "dropdown-row",
                onClick: ft((k) => a(V.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                re("div", yu, De(V.data.value), 1)
              ], 8, _u))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [So, j.value]
        ])
      ], 8, ["to"])) : Ie("", !0)
    ], 64));
  }
}), xu = Ns, zo = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      zo.bindNew(e);
    });
  },
  bindNew(e) {
    Ne.lock(e, "extra-select", () => {
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
      const s = Ao(pu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), Ne.remove(e, "extra-select");
      });
    });
  }
}, qo = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      qo.bindNew(e);
    });
  },
  bindNew(e) {
    Ne.lock(e, "extra-suggest", () => {
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
      const s = Ao(wu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), Ne.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  zo.init(), qo.init(), Ns();
});
export {
  zo as ExtraSelect,
  qo as ExtraSuggest,
  xu as loadExtraSelectDefaultLocalization
};
