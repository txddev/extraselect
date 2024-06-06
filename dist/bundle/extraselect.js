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
function wt(e, t) {
  t === void 0 && (t = window.document);
  for (var n = [], s = e.parentNode; s != null && s instanceof HTMLElement && !(t instanceof HTMLElement && s === t) && !(typeof t == "string" && s.matches(t)); ) {
    var r = s;
    n.push(r), s = r.parentNode;
  }
  return s != null && n.push(s), n;
}
function Wo(e) {
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
const X = {}, xt = [], Ie = () => {
}, zo = () => !1, In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ds = (e) => e.startsWith("onUpdate:"), he = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qo = Object.prototype.hasOwnProperty, H = (e, t) => qo.call(e, t), I = Array.isArray, Et = (e) => Xt(e) === "[object Map]", It = (e) => Xt(e) === "[object Set]", Vs = (e) => Xt(e) === "[object Date]", F = (e) => typeof e == "function", ie = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Or = (e) => (Y(e) || F(e)) && F(e.then) && F(e.catch), Sr = Object.prototype.toString, Xt = (e) => Sr.call(e), Go = (e) => Xt(e).slice(8, -1), Cr = (e) => Xt(e) === "[object Object]", ps = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = /* @__PURE__ */ fs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Jo = /-(\w)/g, St = Mn((e) => e.replace(Jo, (t, n) => n ? n.toUpperCase() : "")), Yo = /\B([A-Z])/g, Mt = Mn(
  (e) => e.replace(Yo, "-$1").toLowerCase()
), Tr = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dn = Mn((e) => e ? `on${Tr(e)}` : ""), st = (e, t) => !Object.is(e, t), dn = (e, t) => {
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
function Lt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ie(s) ? el(s) : Lt(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (ie(e) || Y(e))
    return e;
}
const Qo = /;(?![^(]*\))/g, Xo = /:([^]+)/, Zo = /\/\*[^]*?\*\//g;
function el(e) {
  const t = {};
  return e.replace(Zo, "").split(Qo).forEach((n) => {
    if (n) {
      const s = n.split(Xo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Pt(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Pt(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ir(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ie(t) && (e.class = Pt(t)), n && (e.style = Lt(n)), e;
}
const tl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nl = /* @__PURE__ */ fs(tl);
function Mr(e) {
  return !!e || e === "";
}
function sl(e, t) {
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
  let n = Vs(e), s = Vs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Je(e), s = Je(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? sl(e, t) : !1;
  if (n = Y(e), s = Y(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const l in e) {
      const i = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
      if (i && !c || !i && c || !vt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ms(e, t) {
  return e.findIndex((n) => vt(n, t));
}
const De = (e) => ie(e) ? e : e == null ? "" : I(e) || Y(e) && (e.toString === Sr || !F(e.toString)) ? JSON.stringify(e, Lr, 2) : String(e), Lr = (e, t) => t && t.__v_isRef ? Lr(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Un(s, o) + " =>"] = r, n),
    {}
  )
} : It(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : Je(t) ? Un(t) : Y(t) && !I(t) && !Cr(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ae;
class rl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    }
  }
  on() {
    Ae = this;
  }
  off() {
    Ae = this.parent;
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
function ol(e, t = Ae) {
  t && t.active && t.effects.push(e);
}
function Pr() {
  return Ae;
}
function ll(e) {
  Ae && Ae.cleanups.push(e);
}
let gt;
class vs {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ol(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ot();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (il(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), lt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = tt, n = gt;
    try {
      return tt = !0, gt = this, this._runnings++, js(this), this.fn();
    } finally {
      $s(this), this._runnings--, gt = n, tt = t;
    }
  }
  stop() {
    this.active && (js(this), $s(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function il(e) {
  return e.value;
}
function js(e) {
  e._trackId++, e._depsLength = 0;
}
function $s(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Rr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Rr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let tt = !0, Jn = 0;
const Nr = [];
function ot() {
  Nr.push(tt), tt = !1;
}
function lt() {
  const e = Nr.pop();
  tt = e === void 0 ? !0 : e;
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
    s !== t ? (s && Rr(s, e), e.deps[e._depsLength++] = t) : e._depsLength++;
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
}, wn = /* @__PURE__ */ new WeakMap(), mt = Symbol(""), Qn = Symbol("");
function Se(e, t, n) {
  if (tt && gt) {
    let s = wn.get(e);
    s || wn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = kr(() => s.delete(n))), Fr(
      gt,
      r
    );
  }
}
function qe(e, t, n, s, r, o) {
  const l = wn.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && I(e)) {
    const c = Number(s);
    l.forEach((a, d) => {
      (d === "length" || !Je(d) && d >= c) && i.push(a);
    });
  } else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        I(e) ? ps(n) && i.push(l.get("length")) : (i.push(l.get(mt)), Et(e) && i.push(l.get(Qn)));
        break;
      case "delete":
        I(e) || (i.push(l.get(mt)), Et(e) && i.push(l.get(Qn)));
        break;
      case "set":
        Et(e) && i.push(l.get(mt));
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
function cl(e, t) {
  const n = wn.get(e);
  return n && n.get(t);
}
const ul = /* @__PURE__ */ fs("__proto__,__v_isRef,__isVue"), jr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
), Hs = /* @__PURE__ */ al();
function al() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = D(this);
      for (let o = 0, l = this.length; o < l; o++)
        Se(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(D)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ot(), _s();
      const s = D(this)[t].apply(this, n);
      return ys(), lt(), s;
    };
  }), e;
}
function fl(e) {
  Je(e) || (e = String(e));
  const t = D(this);
  return Se(t, "has", e), t.hasOwnProperty(e);
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
      return s === (r ? o ? Ol : Br : o ? Ur : Dr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = I(t);
    if (!r) {
      if (l && H(Hs, n))
        return Reflect.get(Hs, n, s);
      if (n === "hasOwnProperty")
        return fl;
    }
    const i = Reflect.get(t, n, s);
    return (Je(n) ? jr.has(n) : ul(n)) || (r || Se(t, "get", n), o) ? i : ue(i) ? l && ps(n) ? i : i.value : Y(i) ? r ? Kr(i) : xs(i) : i;
  }
}
class Hr extends $r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const c = Wt(o);
      if (!xn(s) && !Wt(s) && (o = D(o), s = D(s)), !I(t) && ue(o) && !ue(s))
        return c ? !1 : (o.value = s, !0);
    }
    const l = I(t) && ps(n) ? Number(n) < t.length : H(t, n), i = Reflect.set(t, n, s, r);
    return t === D(r) && (l ? st(s, o) && qe(t, "set", n, s) : qe(t, "add", n, s)), i;
  }
  deleteProperty(t, n) {
    const s = H(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && qe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Je(n) || !jr.has(n)) && Se(t, "has", n), s;
  }
  ownKeys(t) {
    return Se(
      t,
      "iterate",
      I(t) ? "length" : mt
    ), Reflect.ownKeys(t);
  }
}
class dl extends $r {
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
const hl = /* @__PURE__ */ new Hr(), pl = /* @__PURE__ */ new dl(), gl = /* @__PURE__ */ new Hr(
  !0
);
const bs = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function sn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = D(e), o = D(t);
  n || (st(t, o) && Se(r, "get", t), Se(r, "get", o));
  const { has: l } = Ln(r), i = s ? bs : n ? Os : zt;
  if (l.call(r, t))
    return i(e.get(t));
  if (l.call(r, o))
    return i(e.get(o));
  e !== r && e.get(t);
}
function rn(e, t = !1) {
  const n = this.__v_raw, s = D(n), r = D(e);
  return t || (st(e, r) && Se(s, "has", e), Se(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function on(e, t = !1) {
  return e = e.__v_raw, !t && Se(D(e), "iterate", mt), Reflect.get(e, "size", e);
}
function Ds(e) {
  e = D(e);
  const t = D(this);
  return Ln(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function Us(e, t) {
  t = D(t);
  const n = D(this), { has: s, get: r } = Ln(n);
  let o = s.call(n, e);
  o || (e = D(e), o = s.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), o ? st(t, l) && qe(n, "set", e, t) : qe(n, "add", e, t), this;
}
function Bs(e) {
  const t = D(this), { has: n, get: s } = Ln(t);
  let r = n.call(t, e);
  r || (e = D(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && qe(t, "delete", e, void 0), o;
}
function Ks() {
  const e = D(this), t = e.size !== 0, n = e.clear();
  return t && qe(e, "clear", void 0, void 0), n;
}
function ln(e, t) {
  return function(s, r) {
    const o = this, l = o.__v_raw, i = D(l), c = t ? bs : e ? Os : zt;
    return !e && Se(i, "iterate", mt), l.forEach((a, d) => s.call(r, c(a), c(d), o));
  };
}
function cn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = D(r), l = Et(o), i = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, a = r[e](...s), d = n ? bs : t ? Os : zt;
    return !t && Se(
      o,
      "iterate",
      c ? Qn : mt
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
function Qe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ml() {
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
    add: Qe("add"),
    set: Qe("set"),
    delete: Qe("delete"),
    clear: Qe("clear"),
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
    add: Qe("add"),
    set: Qe("set"),
    delete: Qe("delete"),
    clear: Qe("clear"),
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
  vl,
  _l,
  yl,
  bl
] = /* @__PURE__ */ ml();
function ws(e, t) {
  const n = t ? e ? bl : yl : e ? _l : vl;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    H(n, r) && r in s ? n : s,
    r,
    o
  );
}
const wl = {
  get: /* @__PURE__ */ ws(!1, !1)
}, xl = {
  get: /* @__PURE__ */ ws(!1, !0)
}, El = {
  get: /* @__PURE__ */ ws(!0, !1)
};
const Dr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap();
function Sl(e) {
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
function Cl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sl(Go(e));
}
function xs(e) {
  return Wt(e) ? e : Es(
    e,
    !1,
    hl,
    wl,
    Dr
  );
}
function Tl(e) {
  return Es(
    e,
    !1,
    gl,
    xl,
    Ur
  );
}
function Kr(e) {
  return Es(
    e,
    !0,
    pl,
    El,
    Br
  );
}
function Es(e, t, n, s, r) {
  if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = Cl(e);
  if (l === 0)
    return e;
  const i = new Proxy(
    e,
    l === 2 ? s : n
  );
  return r.set(e, i), i;
}
function $t(e) {
  return Wt(e) ? $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
function xn(e) {
  return !!(e && e.__v_isShallow);
}
function Wr(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function Al(e) {
  return Object.isExtensible(e) && Ar(e, "__v_skip", !0), e;
}
const zt = (e) => Y(e) ? xs(e) : e, Os = (e) => Y(e) ? Kr(e) : e;
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
    const t = D(this);
    return (!t._cacheable || t.effect.dirty) && st(t._value, t._value = t.effect.run()) && hn(t, 4), qr(t), t.effect._dirtyLevel >= 2 && hn(t, 2), t._value;
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
function Il(e, t, n = !1) {
  let s, r;
  const o = F(e);
  return o ? (s = e, r = Ie) : (s = e.get, r = e.set), new zr(s, r, o || !r, n);
}
function qr(e) {
  var t;
  tt && gt && (e = D(e), Fr(
    gt,
    (t = e.dep) != null ? t : e.dep = kr(
      () => e.dep = void 0,
      e instanceof zr ? e : void 0
    )
  ));
}
function hn(e, t = 4, n) {
  e = D(e);
  const s = e.dep;
  s && Vr(
    s,
    t
  );
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function z(e) {
  return Gr(e, !1);
}
function Ml(e) {
  return Gr(e, !0);
}
function Gr(e, t) {
  return ue(e) ? e : new Ll(e, t);
}
class Ll {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : D(t), this._value = n ? t : zt(t);
  }
  get value() {
    return qr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || xn(t) || Wt(t);
    t = n ? t : D(t), st(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : zt(t), hn(this, 4));
  }
}
function $(e) {
  return ue(e) ? e.value : e;
}
const Pl = {
  get: (e, t, n) => $(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Jr(e) {
  return $t(e) ? e : new Proxy(e, Pl);
}
class Rl {
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
    return cl(D(this._object), this._key);
  }
}
class Nl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ht(e, t, n) {
  return ue(e) ? e : F(e) ? new Nl(e) : Y(e) && arguments.length > 1 ? Fl(e, t, n) : z(e);
}
function Fl(e, t, n) {
  const s = e[t];
  return ue(s) ? s : new Rl(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function nt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Pn(r, t, n);
  }
}
function Ve(e, t, n, s) {
  if (F(e)) {
    const r = nt(e, t, n, s);
    return r && Or(r) && r.catch((o) => {
      Pn(o, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Ve(e[o], t, n, s));
    return r;
  }
}
function Pn(e, t, n, s = !0) {
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
      ot(), nt(
        c,
        null,
        10,
        [e, l, i]
      ), lt();
      return;
    }
  }
  Vl(e, n, r, s);
}
function Vl(e, t, n, s = !0) {
  console.error(e);
}
let qt = !1, Xn = !1;
const _e = [];
let Be = 0;
const Ot = [];
let Xe = null, ht = 0;
const Yr = /* @__PURE__ */ Promise.resolve();
let Ss = null;
function Ct(e) {
  const t = Ss || Yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kl(e) {
  let t = Be + 1, n = _e.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = _e[s], o = Gt(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function Cs(e) {
  (!_e.length || !_e.includes(
    e,
    qt && e.allowRecurse ? Be + 1 : Be
  )) && (e.id == null ? _e.push(e) : _e.splice(kl(e.id), 0, e), Qr());
}
function Qr() {
  !qt && !Xn && (Xn = !0, Ss = Yr.then(Zr));
}
function jl(e) {
  const t = _e.indexOf(e);
  t > Be && _e.splice(t, 1);
}
function $l(e) {
  I(e) ? Ot.push(...e) : (!Xe || !Xe.includes(
    e,
    e.allowRecurse ? ht + 1 : ht
  )) && Ot.push(e), Qr();
}
function Ws(e, t, n = qt ? Be + 1 : 0) {
  for (; n < _e.length; n++) {
    const s = _e[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      _e.splice(n, 1), n--, s();
    }
  }
}
function Xr(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)].sort(
      (n, s) => Gt(n) - Gt(s)
    );
    if (Ot.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, ht = 0; ht < Xe.length; ht++)
      Xe[ht]();
    Xe = null, ht = 0;
  }
}
const Gt = (e) => e.id == null ? 1 / 0 : e.id, Hl = (e, t) => {
  const n = Gt(e) - Gt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Zr(e) {
  Xn = !1, qt = !0, _e.sort(Hl);
  const t = Ie;
  try {
    for (Be = 0; Be < _e.length; Be++) {
      const n = _e[Be];
      n && n.active !== !1 && nt(n, null, 14);
    }
  } finally {
    Be = 0, _e.length = 0, Xr(), qt = !1, Ss = null, (_e.length || Ot.length) && Zr();
  }
}
function Dl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || X;
  let r = n;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in s) {
    const d = `${l === "modelValue" ? "model" : l}Modifiers`, { number: h, trim: g } = s[d] || X;
    g && (r = n.map((y) => ie(y) ? y.trim() : y)), h && (r = n.map(bn));
  }
  let i, c = s[i = Dn(t)] || s[i = Dn(St(t))];
  !c && o && (c = s[i = Dn(Mt(t))]), c && Ve(
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
    e.emitted[i] = !0, Ve(
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
      d && (i = !0, he(l, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !i ? (Y(e) && s.set(e, null), null) : (I(o) ? o.forEach((c) => l[c] = null) : he(l, o), Y(e) && s.set(e, l), l);
}
function Rn(e, t) {
  return !e || !In(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Mt(t)) || H(e, t));
}
let Oe = null, to = null;
function En(e) {
  const t = Oe;
  return Oe = e, to = e && e.type.__scopeId || null, t;
}
function Ul(e, t = Oe, n) {
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
    ctx: C,
    inheritAttrs: S
  } = e, N = En(e);
  let j, U;
  try {
    if (n.shapeFlag & 4) {
      const q = r || s, J = q;
      j = Ue(
        a.call(
          J,
          q,
          d,
          h,
          y,
          g,
          C
        )
      ), U = i;
    } else {
      const q = t;
      j = Ue(
        q.length > 1 ? q(
          h,
          { attrs: i, slots: l, emit: c }
        ) : q(
          h,
          null
        )
      ), U = t.props ? i : Bl(i);
    }
  } catch (q) {
    Kt.length = 0, Pn(q, e, 1), j = Ge(_t);
  }
  let V = j;
  if (U && S !== !1) {
    const q = Object.keys(U), { shapeFlag: J } = V;
    q.length && J & 7 && (o && q.some(ds) && (U = Kl(
      U,
      o
    )), V = Tt(V, U, !1, !0));
  }
  return n.dirs && (V = Tt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (V.transition = n.transition), j = V, En(N), j;
}
const Bl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || In(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kl = (e, t) => {
  const n = {};
  for (const s in e)
    (!ds(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Wl(e, t, n) {
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
        if (l[g] !== s[g] && !Rn(a, g))
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
    if (t[o] !== e[o] && !Rn(n, o))
      return !0;
  }
  return !1;
}
function zl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ql = Symbol.for("v-ndc"), Gl = (e) => e.__isSuspense;
function Jl(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : $l(e);
}
const Yl = Symbol.for("v-scx"), Ql = () => mn(Yl);
function Jt(e, t) {
  return Nn(e, null, t);
}
function Xl(e, t) {
  return Nn(
    e,
    null,
    { flush: "post" }
  );
}
const un = {};
function Ke(e, t, n) {
  return Nn(e, t, n);
}
function Nn(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: o,
  onTrack: l,
  onTrigger: i
} = X) {
  if (t && o) {
    const L = t;
    t = (...te) => {
      L(...te), J();
    };
  }
  const c = ye, a = (L) => s === !0 ? L : pt(L, s === !1 ? 1 : void 0);
  let d, h = !1, g = !1;
  if (ue(e) ? (d = () => e.value, h = xn(e)) : $t(e) ? (d = () => a(e), h = !0) : I(e) ? (g = !0, h = e.some((L) => $t(L) || xn(L)), d = () => e.map((L) => {
    if (ue(L))
      return L.value;
    if ($t(L))
      return a(L);
    if (F(L))
      return nt(L, c, 2);
  })) : F(e) ? t ? d = () => nt(e, c, 2) : d = () => (y && y(), Ve(
    e,
    c,
    3,
    [C]
  )) : d = Ie, t && s) {
    const L = d;
    d = () => pt(L());
  }
  let y, C = (L) => {
    y = V.onStop = () => {
      nt(L, c, 4), y = V.onStop = void 0;
    };
  }, S;
  if ($n)
    if (C = Ie, t ? n && Ve(t, c, 3, [
      d(),
      g ? [] : void 0,
      C
    ]) : d(), r === "sync") {
      const L = Ql();
      S = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return Ie;
  let N = g ? new Array(e.length).fill(un) : un;
  const j = () => {
    if (!(!V.active || !V.dirty))
      if (t) {
        const L = V.run();
        (s || h || (g ? L.some((te, ne) => st(te, N[ne])) : st(L, N))) && (y && y(), Ve(t, c, 3, [
          L,
          N === un ? void 0 : g && N[0] === un ? [] : N,
          C
        ]), N = L);
      } else
        V.run();
  };
  j.allowRecurse = !!t;
  let U;
  r === "sync" ? U = j : r === "post" ? U = () => xe(j, c && c.suspense) : (j.pre = !0, c && (j.id = c.uid), U = () => Cs(j));
  const V = new vs(d, Ie, U), q = Pr(), J = () => {
    V.stop(), q && hs(q.effects, V);
  };
  return t ? n ? j() : N = V.run() : r === "post" ? xe(
    V.run.bind(V),
    c && c.suspense
  ) : V.run(), S && S.push(J), J;
}
function Zl(e, t, n) {
  const s = this.proxy, r = ie(e) ? e.includes(".") ? no(s, e) : () => s[e] : e.bind(s, s);
  let o;
  F(t) ? o = t : (o = t.handler, n = t);
  const l = Zt(this), i = Nn(r, o.bind(s), n);
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
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    pt(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      pt(e[s], t, n);
  else if (It(e) || Et(e))
    e.forEach((s) => {
      pt(s, t, n);
    });
  else if (Cr(e))
    for (const s in e)
      pt(e[s], t, n);
  return e;
}
function On(e, t) {
  if (Oe === null)
    return e;
  const n = Hn(Oe) || Oe.proxy, s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, l, i, c = X] = t[r];
    o && (F(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && pt(l), s.push({
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
function ut(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const i = r[l];
    o && (i.oldValue = o[l].value);
    let c = i.dir[s];
    c && (ot(), Ve(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), lt());
  }
}
const pn = (e) => !!e.type.__asyncLoader, so = (e) => e.type.__isKeepAlive;
function ei(e, t) {
  ro(e, "a", t);
}
function ti(e, t) {
  ro(e, "da", t);
}
function ro(e, t, n = ye) {
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
      so(r.parent.vnode) && ni(s, t, n, r), r = r.parent;
  }
}
function ni(e, t, n, s) {
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
function Fn(e, t, n = ye, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      ot();
      const i = Zt(n), c = Ve(t, n, e, l);
      return i(), lt(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Ye = (e) => (t, n = ye) => (!$n || e === "sp") && Fn(e, (...s) => t(...s), n), si = Ye("bm"), Vn = Ye("m"), ri = Ye("bu"), oi = Ye("u"), li = Ye("bum"), kn = Ye("um"), ii = Ye("sp"), ci = Ye(
  "rtg"
), ui = Ye(
  "rtc"
);
function ai(e, t = ye) {
  Fn("ec", e, t);
}
function gn(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (I(e) || ie(e)) {
    r = new Array(e.length);
    for (let l = 0, i = e.length; l < i; l++)
      r[l] = t(e[l], l, void 0, o && o[l]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o && o[l]);
  } else if (Y(e))
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
const Zn = (e) => e ? bo(e) ? Hn(e) || e.proxy : Zn(e.parent) : null, Dt = /* @__PURE__ */ he(/* @__PURE__ */ Object.create(null), {
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
    e.effect.dirty = !0, Cs(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = Ct.bind(e.proxy)),
  $watch: (e) => Zl.bind(e)
}), Kn = (e, t) => e !== X && !e.__isScriptSetup && H(e, t), fi = {
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
        if (r !== X && H(r, t))
          return l[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && H(a, t))
          return l[t] = 3, o[t];
        if (n !== X && H(n, t))
          return l[t] = 4, n[t];
        es && (l[t] = 0);
      }
    }
    const d = Dt[t];
    let h, g;
    if (d)
      return t === "$attrs" && Se(e.attrs, "get", ""), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== X && H(n, t))
      return l[t] = 4, n[t];
    if (g = c.config.globalProperties, H(g, t))
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Kn(r, t) ? (r[t] = n, !0) : s !== X && H(s, t) ? (s[t] = n, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, l) {
    let i;
    return !!n[l] || e !== X && H(e, l) || Kn(t, l) || (i = o[0]) && H(i, l) || H(s, l) || H(Dt, l) || H(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qs(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let es = !0;
function di(e) {
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
    updated: C,
    activated: S,
    deactivated: N,
    beforeDestroy: j,
    beforeUnmount: U,
    destroyed: V,
    unmounted: q,
    render: J,
    renderTracked: L,
    renderTriggered: te,
    errorCaptured: ne,
    serverPrefetch: pe,
    expose: ge,
    inheritAttrs: B,
    components: Z,
    directives: se,
    filters: ae
  } = t;
  if (a && hi(a, s, null), l)
    for (const Q in l) {
      const K = l[Q];
      F(K) && (s[Q] = K.bind(n));
    }
  if (r) {
    const Q = r.call(n, n);
    Y(Q) && (e.data = xs(Q));
  }
  if (es = !0, o)
    for (const Q in o) {
      const K = o[Q], We = F(K) ? K.bind(n, n) : F(K.get) ? K.get.bind(n, n) : Ie, it = !F(K) && F(K.set) ? K.set.bind(n) : Ie, ke = Ee({
        get: We,
        set: it
      });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Ce) => ke.value = Ce
      });
    }
  if (i)
    for (const Q in i)
      oo(i[Q], s, n, Q);
  if (c) {
    const Q = F(c) ? c.call(n) : c;
    Reflect.ownKeys(Q).forEach((K) => {
      yi(K, Q[K]);
    });
  }
  d && Gs(d, e, "c");
  function fe(Q, K) {
    I(K) ? K.forEach((We) => Q(We.bind(n))) : K && Q(K.bind(n));
  }
  if (fe(si, h), fe(Vn, g), fe(ri, y), fe(oi, C), fe(ei, S), fe(ti, N), fe(ai, ne), fe(ui, L), fe(ci, te), fe(li, U), fe(kn, q), fe(ii, pe), I(ge))
    if (ge.length) {
      const Q = e.exposed || (e.exposed = {});
      ge.forEach((K) => {
        Object.defineProperty(Q, K, {
          get: () => n[K],
          set: (We) => n[K] = We
        });
      });
    } else
      e.exposed || (e.exposed = {});
  J && e.render === Ie && (e.render = J), B != null && (e.inheritAttrs = B), Z && (e.components = Z), se && (e.directives = se);
}
function hi(e, t, n = Ie) {
  I(e) && (e = ts(e));
  for (const s in e) {
    const r = e[s];
    let o;
    Y(r) ? "default" in r ? o = mn(
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
  Ve(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function oo(e, t, n, s) {
  const r = s.includes(".") ? no(n, s) : () => n[s];
  if (ie(e)) {
    const o = t[e];
    F(o) && Ke(r, o);
  } else if (F(e))
    Ke(r, e.bind(n));
  else if (Y(e))
    if (I(e))
      e.forEach((o) => oo(o, t, n, s));
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
    (a) => Sn(c, a, l, !0)
  ), Sn(c, t, l)), Y(t) && o.set(t, c), c;
}
function Sn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Sn(e, o, n, !0), r && r.forEach(
    (l) => Sn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const i = pi[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const pi = {
  data: Js,
  props: Ys,
  emits: Ys,
  methods: kt,
  computed: kt,
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
  components: kt,
  directives: kt,
  watch: mi,
  provide: Js,
  inject: gi
};
function Js(e, t) {
  return t ? e ? function() {
    return he(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gi(e, t) {
  return kt(ts(e), ts(t));
}
function ts(e) {
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
function kt(e, t) {
  return e ? he(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ys(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : he(
    /* @__PURE__ */ Object.create(null),
    qs(e),
    qs(t != null ? t : {})
  ) : t;
}
function mi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = he(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = we(e[s], t[s]);
  return n;
}
function lo() {
  return {
    app: null,
    config: {
      isNativeTag: zo,
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
let vi = 0;
function _i(e, t) {
  return function(s, r = null) {
    F(s) || (s = he({}, s)), r != null && !Y(r) && (r = null);
    const o = lo(), l = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const c = o.app = {
      _uid: vi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Wi,
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
          const g = Ge(s, r);
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
        const d = Ut;
        Ut = c;
        try {
          return a();
        } finally {
          Ut = d;
        }
      }
    };
    return c;
  };
}
let Ut = null;
function yi(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const s = ye || Oe;
  if (s || Ut) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Ut._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(s && s.proxy) : t;
  }
}
const io = {}, co = () => Object.create(io), uo = (e) => Object.getPrototypeOf(e) === io;
function bi(e, t, n, s = !1) {
  const r = {}, o = co();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ao(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  n ? e.props = s ? r : Tl(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function wi(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: l }
  } = e, i = D(r), [c] = e.propsOptions;
  let a = !1;
  if ((s || l > 0) && !(l & 16)) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let g = d[h];
        if (Rn(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (c)
          if (H(o, g))
            y !== o[g] && (o[g] = y, a = !0);
          else {
            const C = St(g);
            r[C] = ns(
              c,
              i,
              C,
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
    ao(e, t, r, o) && (a = !0);
    let d;
    for (const h in i)
      (!t || !H(t, h) && ((d = Mt(h)) === h || !H(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = ns(
        c,
        i,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (o !== i)
      for (const h in o)
        (!t || !H(t, h) && !0) && (delete o[h], a = !0);
  }
  a && qe(e.attrs, "set", "");
}
function ao(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let l = !1, i;
  if (t)
    for (let c in t) {
      if (jt(c))
        continue;
      const a = t[c];
      let d;
      r && H(r, d = St(c)) ? !o || !o.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Rn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, l = !0);
    }
  if (o) {
    const c = D(n), a = i || X;
    for (let d = 0; d < o.length; d++) {
      const h = o[d];
      n[h] = ns(
        r,
        c,
        h,
        a[h],
        e,
        !H(a, h)
      );
    }
  }
  return l;
}
function ns(e, t, n, s, r, o) {
  const l = e[n];
  if (l != null) {
    const i = H(l, "default");
    if (i && s === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && F(c)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const d = Zt(r);
          s = a[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        s = c;
    }
    l[0] && (o && !i ? s = !1 : l[1] && (s === "" || s === Mt(n)) && (s = !0));
  }
  return s;
}
function fo(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, i = [];
  let c = !1;
  if (!F(e)) {
    const d = (h) => {
      c = !0;
      const [g, y] = fo(h, t, !0);
      he(l, g), y && i.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c)
    return Y(e) && s.set(e, xt), xt;
  if (I(o))
    for (let d = 0; d < o.length; d++) {
      const h = St(o[d]);
      Qs(h) && (l[h] = X);
    }
  else if (o)
    for (const d in o) {
      const h = St(d);
      if (Qs(h)) {
        const g = o[d], y = l[h] = I(g) || F(g) ? { type: g } : he({}, g);
        if (y) {
          const C = er(Boolean, y.type), S = er(String, y.type);
          y[0] = C > -1, y[1] = S < 0 || C < S, (C > -1 || H(y, "default")) && i.push(h);
        }
      }
    }
  const a = [l, i];
  return Y(e) && s.set(e, a), a;
}
function Qs(e) {
  return e[0] !== "$" && !jt(e);
}
function Xs(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Zs(e, t) {
  return Xs(e) === Xs(t);
}
function er(e, t) {
  return I(t) ? t.findIndex((n) => Zs(n, e)) : F(t) && Zs(t, e) ? 0 : -1;
}
const ho = (e) => e[0] === "_" || e === "$stable", As = (e) => I(e) ? e.map(Ue) : [Ue(e)], xi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ul((...r) => As(t(...r)), n);
  return s._c = !1, s;
}, po = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (ho(r))
      continue;
    const o = e[r];
    if (F(o))
      t[r] = xi(r, o, s);
    else if (o != null) {
      const l = As(o);
      t[r] = () => l;
    }
  }
}, go = (e, t) => {
  const n = As(t);
  e.slots.default = () => n;
}, Ei = (e, t) => {
  const n = e.slots = co();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (he(n, t), Ar(n, "_", s, !0)) : po(t, n);
  } else
    t && go(e, t);
}, Oi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, l = X;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? o = !1 : (he(r, t), !n && i === 1 && delete r._) : (o = !t.$stable, po(t, r)), l = t;
  } else
    t && (go(e, t), l = { default: 1 });
  if (o)
    for (const i in r)
      !ho(i) && l[i] == null && delete r[i];
};
function ss(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (g, y) => ss(
        g,
        t && (I(t) ? t[y] : t),
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
  if (a != null && a !== c && (ie(a) ? (d[a] = null, H(h, a) && (h[a] = null)) : ue(a) && (a.value = null)), F(c))
    nt(c, i, 12, [l, d]);
  else {
    const g = ie(c), y = ue(c);
    if (g || y) {
      const C = () => {
        if (e.f) {
          const S = g ? H(h, c) ? h[c] : d[c] : c.value;
          r ? I(S) && hs(S, o) : I(S) ? S.includes(o) || S.push(o) : g ? (d[c] = [o], H(h, c) && (h[c] = d[c])) : (c.value = [o], e.k && (d[e.k] = c.value));
        } else
          g ? (d[c] = l, H(h, c) && (h[c] = l)) : y && (c.value = l, e.k && (d[e.k] = l));
      };
      l ? (C.id = -1, xe(C, n)) : C();
    }
  }
}
function Si() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (gs().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1);
}
const xe = Jl;
function Ci(e) {
  return Ti(e);
}
function Ti(e, t) {
  Si();
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
    setScopeId: y = Ie,
    insertStaticContent: C
  } = e, S = (u, f, p, m = null, v = null, w = null, E = void 0, b = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Ft(u, f) && (m = re(u), Ce(u, v, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: _, ref: O, shapeFlag: A } = f;
    switch (_) {
      case jn:
        N(u, f, p, m);
        break;
      case _t:
        j(u, f, p, m);
        break;
      case zn:
        u == null && U(f, p, m, E);
        break;
      case de:
        Z(
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
        A & 1 ? J(
          u,
          f,
          p,
          m,
          v,
          w,
          E,
          b,
          x
        ) : A & 6 ? se(
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
          Pe
        );
    }
    O != null && v && ss(O, u && u.ref, w, f || u, !f);
  }, N = (u, f, p, m) => {
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
  }, j = (u, f, p, m) => {
    u == null ? s(
      f.el = c(f.children || ""),
      p,
      m
    ) : f.el = u.el;
  }, U = (u, f, p, m) => {
    [u.el, u.anchor] = C(
      u.children,
      f,
      p,
      m,
      u.el,
      u.anchor
    );
  }, V = ({ el: u, anchor: f }, p, m) => {
    let v;
    for (; u && u !== f; )
      v = g(u), s(u, p, m), u = v;
    s(f, p, m);
  }, q = ({ el: u, anchor: f }) => {
    let p;
    for (; u && u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, J = (u, f, p, m, v, w, E, b, x) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), u == null ? L(
      f,
      p,
      m,
      v,
      w,
      E,
      b,
      x
    ) : pe(
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
    const { props: O, shapeFlag: A, transition: T, dirs: R } = u;
    if (x = u.el = l(
      u.type,
      w,
      O && O.is,
      O
    ), A & 8 ? d(x, u.children) : A & 16 && ne(
      u.children,
      x,
      null,
      m,
      v,
      Wn(u, w),
      E,
      b
    ), R && ut(u, null, m, "created"), te(x, u, u.scopeId, E, m), O) {
      for (const W in O)
        W !== "value" && !jt(W) && o(
          x,
          W,
          null,
          O[W],
          w,
          u.children,
          m,
          v,
          be
        );
      "value" in O && o(x, "value", null, O.value, w), (_ = O.onVnodeBeforeMount) && $e(_, m, u);
    }
    R && ut(u, null, m, "beforeMount");
    const k = Ai(v, T);
    k && T.beforeEnter(x), s(x, f, p), ((_ = O && O.onVnodeMounted) || k || R) && xe(() => {
      _ && $e(_, m, u), k && T.enter(x), R && ut(u, null, m, "mounted");
    }, v);
  }, te = (u, f, p, m, v) => {
    if (p && y(u, p), m)
      for (let w = 0; w < m.length; w++)
        y(u, m[w]);
    if (v) {
      let w = v.subTree;
      if (f === w) {
        const E = v.vnode;
        te(
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
      const O = u[_] = b ? Ze(u[_]) : Ue(u[_]);
      S(
        null,
        O,
        f,
        p,
        m,
        v,
        w,
        E,
        b
      );
    }
  }, pe = (u, f, p, m, v, w, E) => {
    const b = f.el = u.el;
    let { patchFlag: x, dynamicChildren: _, dirs: O } = f;
    x |= u.patchFlag & 16;
    const A = u.props || X, T = f.props || X;
    let R;
    if (p && at(p, !1), (R = T.onVnodeBeforeUpdate) && $e(R, p, f, u), O && ut(f, u, p, "beforeUpdate"), p && at(p, !0), _ ? ge(
      u.dynamicChildren,
      _,
      b,
      p,
      m,
      Wn(f, v),
      w
    ) : E || K(
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
        B(
          b,
          f,
          A,
          T,
          p,
          m,
          v
        );
      else if (x & 2 && A.class !== T.class && o(b, "class", null, T.class, v), x & 4 && o(b, "style", A.style, T.style, v), x & 8) {
        const k = f.dynamicProps;
        for (let W = 0; W < k.length; W++) {
          const ee = k[W], ce = A[ee], Re = T[ee];
          (Re !== ce || ee === "value") && o(
            b,
            ee,
            ce,
            Re,
            v,
            u.children,
            p,
            m,
            be
          );
        }
      }
      x & 1 && u.children !== f.children && d(b, f.children);
    } else
      !E && _ == null && B(
        b,
        f,
        A,
        T,
        p,
        m,
        v
      );
    ((R = T.onVnodeUpdated) || O) && xe(() => {
      R && $e(R, p, f, u), O && ut(f, u, p, "updated");
    }, m);
  }, ge = (u, f, p, m, v, w, E) => {
    for (let b = 0; b < f.length; b++) {
      const x = u[b], _ = f[b], O = x.el && (x.type === de || !Ft(x, _) || x.shapeFlag & 70) ? h(x.el) : p;
      S(
        x,
        _,
        O,
        null,
        m,
        v,
        w,
        E,
        !0
      );
    }
  }, B = (u, f, p, m, v, w, E) => {
    if (p !== m) {
      if (p !== X)
        for (const b in p)
          !jt(b) && !(b in m) && o(
            u,
            b,
            p[b],
            null,
            E,
            f.children,
            v,
            w,
            be
          );
      for (const b in m) {
        if (jt(b))
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
          be
        );
      }
      "value" in m && o(u, "value", p.value, m.value, E);
    }
  }, Z = (u, f, p, m, v, w, E, b, x) => {
    const _ = f.el = u ? u.el : i(""), O = f.anchor = u ? u.anchor : i("");
    let { patchFlag: A, dynamicChildren: T, slotScopeIds: R } = f;
    R && (b = b ? b.concat(R) : R), u == null ? (s(_, p, m), s(O, p, m), ne(
      f.children || [],
      p,
      O,
      v,
      w,
      E,
      b,
      x
    )) : A > 0 && A & 64 && T && u.dynamicChildren ? (ge(
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
    )) : K(
      u,
      f,
      p,
      O,
      v,
      w,
      E,
      b,
      x
    );
  }, se = (u, f, p, m, v, w, E, b, x) => {
    f.slotScopeIds = b, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      p,
      m,
      E,
      x
    ) : ae(
      f,
      p,
      m,
      v,
      w,
      E,
      x
    ) : tn(u, f, x);
  }, ae = (u, f, p, m, v, w, E) => {
    const b = u.component = ji(
      u,
      m,
      v
    );
    if (so(u) && (b.ctx.renderer = Pe), Hi(b), b.asyncDep) {
      if (v && v.registerDep(b, fe), !u.el) {
        const x = b.subTree = Ge(_t);
        j(null, x, f, p);
      }
    } else
      fe(
        b,
        u,
        f,
        p,
        v,
        w,
        E
      );
  }, tn = (u, f, p) => {
    const m = f.component = u.component;
    if (Wl(u, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        Q(m, f, p);
        return;
      } else
        m.next = f, jl(m.update), m.effect.dirty = !0, m.update();
    else
      f.el = u.el, m.vnode = f;
  }, fe = (u, f, p, m, v, w, E) => {
    const b = () => {
      if (u.isMounted) {
        let { next: O, bu: A, u: T, parent: R, vnode: k } = u;
        {
          const bt = mo(u);
          if (bt) {
            O && (O.el = k.el, Q(u, O, E)), bt.asyncDep.then(() => {
              u.isUnmounted || b();
            });
            return;
          }
        }
        let W = O, ee;
        at(u, !1), O ? (O.el = k.el, Q(u, O, E)) : O = k, A && dn(A), (ee = O.props && O.props.onVnodeBeforeUpdate) && $e(ee, R, O, k), at(u, !0);
        const ce = Bn(u), Re = u.subTree;
        u.subTree = ce, S(
          Re,
          ce,
          h(Re.el),
          re(Re),
          u,
          v,
          w
        ), O.el = ce.el, W === null && zl(u, ce.el), T && xe(T, v), (ee = O.props && O.props.onVnodeUpdated) && xe(
          () => $e(ee, R, O, k),
          v
        );
      } else {
        let O;
        const { el: A, props: T } = f, { bm: R, m: k, parent: W } = u, ee = pn(f);
        if (at(u, !1), R && dn(R), !ee && (O = T && T.onVnodeBeforeMount) && $e(O, W, f), at(u, !0), A && Rt) {
          const ce = () => {
            u.subTree = Bn(u), Rt(
              A,
              u.subTree,
              u,
              v,
              null
            );
          };
          ee ? f.type.__asyncLoader().then(
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
        if (k && xe(k, v), !ee && (O = T && T.onVnodeMounted)) {
          const ce = f;
          xe(
            () => $e(O, W, ce),
            v
          );
        }
        (f.shapeFlag & 256 || W && pn(W.vnode) && W.vnode.shapeFlag & 256) && u.a && xe(u.a, v), u.isMounted = !0, f = p = m = null;
      }
    }, x = u.effect = new vs(
      b,
      Ie,
      () => Cs(_),
      u.scope
    ), _ = u.update = () => {
      x.dirty && x.run();
    };
    _.id = u.uid, at(u, !0), _();
  }, Q = (u, f, p) => {
    f.component = u;
    const m = u.vnode.props;
    u.vnode = f, u.next = null, wi(u, f.props, m, p), Oi(u, f.children, p), ot(), Ws(u), lt();
  }, K = (u, f, p, m, v, w, E, b, x = !1) => {
    const _ = u && u.children, O = u ? u.shapeFlag : 0, A = f.children, { patchFlag: T, shapeFlag: R } = f;
    if (T > 0) {
      if (T & 128) {
        it(
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
        We(
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
    R & 8 ? (O & 16 && be(_, v, w), A !== _ && d(p, A)) : O & 16 ? R & 16 ? it(
      _,
      A,
      p,
      m,
      v,
      w,
      E,
      b,
      x
    ) : be(_, v, w, !0) : (O & 8 && d(p, ""), R & 16 && ne(
      A,
      p,
      m,
      v,
      w,
      E,
      b,
      x
    ));
  }, We = (u, f, p, m, v, w, E, b, x) => {
    u = u || xt, f = f || xt;
    const _ = u.length, O = f.length, A = Math.min(_, O);
    let T;
    for (T = 0; T < A; T++) {
      const R = f[T] = x ? Ze(f[T]) : Ue(f[T]);
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
    _ > O ? be(
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
  }, it = (u, f, p, m, v, w, E, b, x) => {
    let _ = 0;
    const O = f.length;
    let A = u.length - 1, T = O - 1;
    for (; _ <= A && _ <= T; ) {
      const R = u[_], k = f[_] = x ? Ze(f[_]) : Ue(f[_]);
      if (Ft(R, k))
        S(
          R,
          k,
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
      const R = u[A], k = f[T] = x ? Ze(f[T]) : Ue(f[T]);
      if (Ft(R, k))
        S(
          R,
          k,
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
        const R = T + 1, k = R < O ? f[R].el : m;
        for (; _ <= T; )
          S(
            null,
            f[_] = x ? Ze(f[_]) : Ue(f[_]),
            p,
            k,
            v,
            w,
            E,
            b,
            x
          ), _++;
      }
    } else if (_ > T)
      for (; _ <= A; )
        Ce(u[_], v, w, !0), _++;
    else {
      const R = _, k = _, W = /* @__PURE__ */ new Map();
      for (_ = k; _ <= T; _++) {
        const Te = f[_] = x ? Ze(f[_]) : Ue(f[_]);
        Te.key != null && W.set(Te.key, _);
      }
      let ee, ce = 0;
      const Re = T - k + 1;
      let bt = !1, Rs = 0;
      const Nt = new Array(Re);
      for (_ = 0; _ < Re; _++)
        Nt[_] = 0;
      for (_ = R; _ <= A; _++) {
        const Te = u[_];
        if (ce >= Re) {
          Ce(Te, v, w, !0);
          continue;
        }
        let je;
        if (Te.key != null)
          je = W.get(Te.key);
        else
          for (ee = k; ee <= T; ee++)
            if (Nt[ee - k] === 0 && Ft(Te, f[ee])) {
              je = ee;
              break;
            }
        je === void 0 ? Ce(Te, v, w, !0) : (Nt[je - k] = _ + 1, je >= Rs ? Rs = je : bt = !0, S(
          Te,
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
      const Ns = bt ? Ii(Nt) : xt;
      for (ee = Ns.length - 1, _ = Re - 1; _ >= 0; _--) {
        const Te = k + _, je = f[Te], Fs = Te + 1 < O ? f[Te + 1].el : m;
        Nt[_] === 0 ? S(
          null,
          je,
          p,
          Fs,
          v,
          w,
          E,
          b,
          x
        ) : bt && (ee < 0 || _ !== Ns[ee] ? ke(je, p, Fs, 2) : ee--);
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
      E.move(u, f, p, Pe);
      return;
    }
    if (E === de) {
      s(w, f, p);
      for (let A = 0; A < x.length; A++)
        ke(x[A], f, p, m);
      s(u.anchor, f, p);
      return;
    }
    if (E === zn) {
      V(u, f, p);
      return;
    }
    if (m !== 2 && _ & 1 && b)
      if (m === 0)
        b.beforeEnter(w), s(w, f, p), xe(() => b.enter(w), v);
      else {
        const { leave: A, delayLeave: T, afterLeave: R } = b, k = () => s(w, f, p), W = () => {
          A(w, () => {
            k(), R && R();
          });
        };
        T ? T(w, k, W) : W();
      }
    else
      s(w, f, p);
  }, Ce = (u, f, p, m = !1, v = !1) => {
    const {
      type: w,
      props: E,
      ref: b,
      children: x,
      dynamicChildren: _,
      shapeFlag: O,
      patchFlag: A,
      dirs: T
    } = u;
    if (b != null && ss(b, null, p, u, !0), O & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const R = O & 1 && T, k = !pn(u);
    let W;
    if (k && (W = E && E.onVnodeBeforeUnmount) && $e(W, f, u), O & 6)
      me(u.component, p, m);
    else {
      if (O & 128) {
        u.suspense.unmount(p, m);
        return;
      }
      R && ut(u, null, f, "beforeUnmount"), O & 64 ? u.type.remove(
        u,
        f,
        p,
        v,
        Pe,
        m
      ) : _ && (w !== de || A > 0 && A & 64) ? be(
        _,
        f,
        p,
        !1,
        !0
      ) : (w === de && A & 384 || !v && O & 16) && be(x, f, p), m && M(u);
    }
    (k && (W = E && E.onVnodeUnmounted) || R) && xe(() => {
      W && $e(W, f, u), R && ut(u, null, f, "unmounted");
    }, p);
  }, M = (u) => {
    const { type: f, el: p, anchor: m, transition: v } = u;
    if (f === de) {
      P(p, m);
      return;
    }
    if (f === zn) {
      q(u);
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
  }, P = (u, f) => {
    let p;
    for (; u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, me = (u, f, p) => {
    const { bum: m, scope: v, update: w, subTree: E, um: b } = u;
    m && dn(m), v.stop(), w && (w.active = !1, Ce(E, u, f, p)), b && xe(b, f), xe(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, be = (u, f, p, m = !1, v = !1, w = 0) => {
    for (let E = w; E < u.length; E++)
      Ce(u[E], f, p, m, v);
  }, re = (u) => u.shapeFlag & 6 ? re(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : g(u.anchor || u.el);
  let ve = !1;
  const ct = (u, f, p) => {
    u == null ? f._vnode && Ce(f._vnode, null, null, !0) : S(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      p
    ), ve || (ve = !0, Ws(), Xr(), ve = !1), f._vnode = u;
  }, Pe = {
    p: S,
    um: Ce,
    m: ke,
    r: M,
    mt: ae,
    mc: ne,
    pc: K,
    pbc: ge,
    n: re,
    o: e
  };
  let yt, Rt;
  return t && ([yt, Rt] = t(
    Pe
  )), {
    render: ct,
    hydrate: yt,
    createApp: _i(ct, yt)
  };
}
function Wn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function at({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ai(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Is(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      let i = r[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[o] = Ze(r[o]), i.el = l.el), n || Is(l, i)), i.type === jn && (i.el = l.el);
    }
}
function Ii(e) {
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
function mo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mo(t);
}
const Mi = (e) => e.__isTeleport, Bt = (e) => e && (e.disabled || e.disabled === ""), tr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, nr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, rs = (e, t) => {
  const n = e && e.to;
  return ie(n) ? t ? t(n) : null : n;
}, Li = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, o, l, i, c, a) {
    const {
      mc: d,
      pc: h,
      pbc: g,
      o: { insert: y, querySelector: C, createText: S, createComment: N }
    } = a, j = Bt(t.props);
    let { shapeFlag: U, children: V, dynamicChildren: q } = t;
    if (e == null) {
      const J = t.el = S(""), L = t.anchor = S("");
      y(J, n, s), y(L, n, s);
      const te = t.target = rs(t.props, C), ne = t.targetAnchor = S("");
      te && (y(ne, te), l === "svg" || tr(te) ? l = "svg" : (l === "mathml" || nr(te)) && (l = "mathml"));
      const pe = (ge, B) => {
        U & 16 && d(
          V,
          ge,
          B,
          r,
          o,
          l,
          i,
          c
        );
      };
      j ? pe(n, L) : te && pe(te, ne);
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, L = t.target = e.target, te = t.targetAnchor = e.targetAnchor, ne = Bt(e.props), pe = ne ? n : L, ge = ne ? J : te;
      if (l === "svg" || tr(L) ? l = "svg" : (l === "mathml" || nr(L)) && (l = "mathml"), q ? (g(
        e.dynamicChildren,
        q,
        pe,
        r,
        o,
        l,
        i
      ), Is(e, t, !0)) : c || h(
        e,
        t,
        pe,
        ge,
        r,
        o,
        l,
        i,
        !1
      ), j)
        ne ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : an(
          t,
          n,
          J,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = rs(
          t.props,
          C
        );
        B && an(
          t,
          B,
          null,
          a,
          0
        );
      } else
        ne && an(
          t,
          L,
          te,
          a,
          1
        );
    }
    vo(t);
  },
  remove(e, t, n, s, { um: r, o: { remove: o } }, l) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: h, props: g } = e;
    if (h && o(d), l && o(a), i & 16) {
      const y = l || !Bt(g);
      for (let C = 0; C < c.length; C++) {
        const S = c[C];
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
  hydrate: Pi
};
function an(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: i, shapeFlag: c, children: a, props: d } = e, h = o === 2;
  if (h && s(l, t, n), (!h || Bt(d)) && c & 16)
    for (let g = 0; g < a.length; g++)
      r(
        a[g],
        t,
        n,
        2
      );
  h && s(i, t, n);
}
function Pi(e, t, n, s, r, o, {
  o: { nextSibling: l, parentNode: i, querySelector: c }
}, a) {
  const d = t.target = rs(
    t.props,
    c
  );
  if (d) {
    const h = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (Bt(t.props))
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
    vo(t);
  }
  return t.anchor && l(t.anchor);
}
const os = Li;
function vo(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const de = Symbol.for("v-fgt"), jn = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), zn = Symbol.for("v-stc"), Kt = [];
let Fe = null;
function G(e = !1) {
  Kt.push(Fe = e ? null : []);
}
function Ri() {
  Kt.pop(), Fe = Kt[Kt.length - 1] || null;
}
let Yt = 1;
function sr(e) {
  Yt += e;
}
function _o(e) {
  return e.dynamicChildren = Yt > 0 ? Fe || xt : null, Ri(), Yt > 0 && Fe && Fe.push(e), e;
}
function oe(e, t, n, s, r, o) {
  return _o(
    le(
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
function Cn(e, t, n, s, r) {
  return _o(
    Ge(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ni(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yo = ({ key: e }) => e != null ? e : null, vn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ue(e) || F(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function le(e, t = null, n = null, s = 0, r = null, o = e === de ? 0 : 1, l = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yo(t),
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
    ctx: Oe
  };
  return i ? (Ls(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ie(n) ? 8 : 16), Yt > 0 && !l && Fe && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Fe.push(c), c;
}
const Ge = Fi;
function Fi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === ql) && (e = _t), Ni(e)) {
    const i = Tt(
      e,
      t,
      !0
    );
    return n && Ls(i, n), Yt > 0 && !o && Fe && (i.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = i : Fe.push(i)), i.patchFlag |= -2, i;
  }
  if (Ki(e) && (e = e.__vccOpts), t) {
    t = Ms(t);
    let { class: i, style: c } = t;
    i && !ie(i) && (t.class = Pt(i)), Y(c) && (Wr(c) && !I(c) && (c = he({}, c)), t.style = Lt(c));
  }
  const l = ie(e) ? 1 : Gl(e) ? 128 : Mi(e) ? 64 : Y(e) ? 4 : F(e) ? 2 : 0;
  return le(
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
  return e ? Wr(e) || uo(e) ? he({}, e) : e : null;
}
function Tt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: l, children: i, transition: c } = e, a = t ? Qt(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && yo(a),
    ref: t && t.ref ? n && o ? I(o) ? o.concat(vn(t)) : [o, vn(t)] : vn(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== de ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && (d.transition = c.clone(d)), d;
}
function ls(e = " ", t = 0) {
  return Ge(jn, null, e, t);
}
function Me(e = "", t = !1) {
  return t ? (G(), Cn(_t, null, e)) : Ge(_t, null, e);
}
function Ue(e) {
  return e == null || typeof e == "boolean" ? Ge(_t) : I(e) ? Ge(
    de,
    null,
    e.slice()
  ) : typeof e == "object" ? Ze(e) : Ge(jn, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e);
}
function Ls(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !uo(t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    F(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ls(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Pt([t.class, s.class]));
      else if (r === "style")
        t.style = Lt([t.style, s.style]);
      else if (In(r)) {
        const o = t[r], l = s[r];
        l && o !== l && !(I(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function $e(e, t, n, s = null) {
  Ve(e, t, 7, [
    n,
    s
  ]);
}
const Vi = lo();
let ki = 0;
function ji(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Vi, o = {
    uid: ki++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new rl(
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
    propsOptions: fo(s, r),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Dl.bind(null, o), e.ce && e.ce(o), o;
}
let ye = null;
const $i = () => ye || Oe;
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
    (n) => ye = n
  ), is = t(
    "__VUE_SSR_SETTERS__",
    (n) => $n = n
  );
}
const Zt = (e) => {
  const t = ye;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(t);
  };
}, rr = () => {
  ye && ye.scope.off(), Tn(null);
};
function bo(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
function Hi(e, t = !1) {
  t && is(t);
  const { props: n, children: s } = e.vnode, r = bo(e);
  bi(e, n, r, t), Ei(e, s);
  const o = r ? Di(e, t) : void 0;
  return t && is(!1), o;
}
function Di(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fi);
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Bi(e) : null, o = Zt(e);
    ot();
    const l = nt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (lt(), o(), Or(l)) {
      if (l.then(rr, rr), t)
        return l.then((i) => {
          or(e, i, t);
        }).catch((i) => {
          Pn(i, e, 0);
        });
      e.asyncDep = l;
    } else
      or(e, l, t);
  } else
    wo(e, t);
}
function or(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = Jr(t)), wo(e, n);
}
let lr;
function wo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && lr && !s.render) {
      const r = s.template || Ts(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = he(
          he(
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
    e.render = s.render || Ie;
  }
  {
    const r = Zt(e);
    ot();
    try {
      di(e);
    } finally {
      lt(), r();
    }
  }
}
const Ui = {
  get(e, t) {
    return Se(e, "get", ""), e[t];
  }
};
function Bi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ui),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Jr(Al(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Dt)
          return Dt[n](e);
      },
      has(t, n) {
        return n in t || n in Dt;
      }
    }));
}
function Ki(e) {
  return F(e) && "__vccOpts" in e;
}
const Ee = (e, t) => Il(e, t, $n), Wi = "3.4.27";
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const zi = "http://www.w3.org/2000/svg", qi = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null, ir = et && /* @__PURE__ */ et.createElement("template"), Gi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? et.createElementNS(zi, e) : t === "mathml" ? et.createElementNS(qi, e) : et.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
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
}, Ji = Symbol("_vtc");
function Yi(e, t, n) {
  const s = e[Ji];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const An = Symbol("_vod"), xo = Symbol("_vsh"), Eo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[An] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Vt(e, !0), s.enter(e)) : s.leave(e, () => {
      Vt(e, !1);
    }) : Vt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vt(e, t);
  }
};
function Vt(e, t) {
  e.style.display = t ? e[An] : "none", e[xo] = !t;
}
const Qi = Symbol(""), Xi = /(^|;)\s*display\s*:/;
function Zi(e, t, n) {
  const s = e.style, r = ie(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
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
      const l = s[Qi];
      l && (n += ";" + l), s.cssText = n, o = Xi.test(n);
    }
  } else
    t && e.removeAttribute("style");
  An in e && (e[An] = o ? s.display : "", e[xo] && (s.display = "none"));
}
const cr = /\s*!important$/;
function _n(e, t, n) {
  if (I(n))
    n.forEach((s) => _n(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ec(e, t);
    cr.test(n) ? e.setProperty(
      Mt(s),
      n.replace(cr, ""),
      "important"
    ) : e[s] = n;
  }
}
const ur = ["Webkit", "Moz", "ms"], qn = {};
function ec(e, t) {
  const n = qn[t];
  if (n)
    return n;
  let s = St(t);
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
function tc(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const o = nl(t);
    n == null || o && !Mr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function nc(e, t, n, s, r, o, l) {
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
function ze(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const fr = Symbol("_vei");
function rc(e, t, n, s, r = null) {
  const o = e[fr] || (e[fr] = {}), l = o[t];
  if (s && l)
    l.value = s;
  else {
    const [i, c] = oc(t);
    if (s) {
      const a = o[t] = cc(
        s,
        r
      );
      ze(e, i, a, c);
    } else
      l && (sc(e, i, l, c), o[t] = void 0);
  }
}
const dr = /(?:Once|Passive|Capture)$/;
function oc(e) {
  let t;
  if (dr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(dr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
let Gn = 0;
const lc = /* @__PURE__ */ Promise.resolve(), ic = () => Gn || (lc.then(() => Gn = 0), Gn = Date.now());
function cc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ve(
      uc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ic(), n;
}
function uc(e, t) {
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
const hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ac = (e, t, n, s, r, o, l, i, c) => {
  const a = r === "svg";
  t === "class" ? Yi(e, s, a) : t === "style" ? Zi(e, n, s) : In(t) ? ds(t) || rc(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fc(e, t, s, a)) ? nc(
    e,
    t,
    s,
    o,
    l,
    i,
    c
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), tc(e, t, s, a));
};
function fc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hr(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return hr(t) && ie(n) ? !1 : t in e;
}
const rt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => dn(t, n) : t;
};
function dc(e) {
  e.target.composing = !0;
}
function pr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Le = Symbol("_assign"), cs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Le] = rt(r);
    const o = s || r.props && r.props.type === "number";
    ze(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), o && (i = bn(i)), e[Le](i);
    }), n && ze(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ze(e, "compositionstart", dc), ze(e, "compositionend", pr), ze(e, "change", pr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, o) {
    if (e[Le] = rt(o), e.composing)
      return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? bn(e.value) : e.value, i = t == null ? "" : t;
    l !== i && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === i) || (e.value = i));
  }
}, hc = {
  deep: !0,
  created(e, t, n) {
    e[Le] = rt(n), ze(e, "change", () => {
      const s = e._modelValue, r = At(e), o = e.checked, l = e[Le];
      if (I(s)) {
        const i = ms(s, r), c = i !== -1;
        if (o && !c)
          l(s.concat(r));
        else if (!o && c) {
          const a = [...s];
          a.splice(i, 1), l(a);
        }
      } else if (It(s)) {
        const i = new Set(s);
        o ? i.add(r) : i.delete(r), l(i);
      } else
        l(Oo(e, o));
    });
  },
  mounted: gr,
  beforeUpdate(e, t, n) {
    e[Le] = rt(n), gr(e, t, n);
  }
};
function gr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, I(t) ? e.checked = ms(t, s.props.value) > -1 : It(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = vt(t, Oo(e, !0)));
}
const pc = {
  created(e, { value: t }, n) {
    e.checked = vt(t, n.props.value), e[Le] = rt(n), ze(e, "change", () => {
      e[Le](At(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Le] = rt(s), t !== n && (e.checked = vt(t, s.props.value));
  }
}, gc = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = It(t);
    ze(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? bn(At(l)) : At(l)
      );
      e[Le](
        e.multiple ? r ? new Set(o) : o : o[0]
      ), e._assigning = !0, Ct(() => {
        e._assigning = !1;
      });
    }), e[Le] = rt(s);
  },
  mounted(e, { value: t, modifiers: { number: n } }) {
    mr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Le] = rt(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || mr(e, t);
  }
};
function mr(e, t, n) {
  const s = e.multiple, r = I(t);
  if (!(s && !r && !It(t))) {
    for (let o = 0, l = e.options.length; o < l; o++) {
      const i = e.options[o], c = At(i);
      if (s)
        if (r) {
          const a = typeof c;
          a === "string" || a === "number" ? i.selected = t.some((d) => String(d) === String(c)) : i.selected = ms(t, c) > -1;
        } else
          i.selected = t.has(c);
      else if (vt(At(i), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function At(e) {
  return "_value" in e ? e._value : e.value;
}
function Oo(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const mc = {
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
function vc(e, t) {
  switch (e) {
    case "SELECT":
      return gc;
    case "TEXTAREA":
      return cs;
    default:
      switch (t) {
        case "checkbox":
          return hc;
        case "radio":
          return pc;
        default:
          return cs;
      }
  }
}
function fn(e, t, n, s, r) {
  const l = vc(
    e.tagName,
    n.props && n.props.type
  )[r];
  l && l(e, t, n, s);
}
const _c = ["ctrl", "shift", "alt", "meta"], yc = {
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
  exact: (e, t) => _c.some((n) => e[`${n}Key`] && !t.includes(n))
}, dt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let l = 0; l < t.length; l++) {
      const i = yc[t[l]];
      if (i && i(r, t))
        return;
    }
    return e(r, ...o);
  });
}, bc = /* @__PURE__ */ he({ patchProp: ac }, Gi);
let vr;
function wc() {
  return vr || (vr = Ci(bc));
}
const So = (...e) => {
  const t = wc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Ec(s);
    if (!r)
      return;
    const o = t._component;
    !F(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, xc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function xc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ec(e) {
  return ie(e) ? document.querySelector(e) : e;
}
var _r;
const en = typeof window < "u";
en && ((_r = window == null ? void 0 : window.navigator) == null ? void 0 : _r.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Oc(e) {
  return typeof e == "function" ? e() : $(e);
}
function Sc(e) {
  return e;
}
function Cc(e) {
  return Pr() ? (ll(e), !0) : !1;
}
function Tc(e, t = !0) {
  $i() ? Vn(e) : t ? e() : Ct(e);
}
function yn(e) {
  var t;
  const n = Oc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Co = en ? window : void 0;
en && window.document;
en && window.navigator;
en && window.location;
function Ac(e, t = !1) {
  const n = z(), s = () => n.value = Boolean(e());
  return s(), Tc(s, t), n;
}
const us = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, as = "__vueuse_ssr_handlers__";
us[as] = us[as] || {};
us[as];
var yr = Object.getOwnPropertySymbols, Ic = Object.prototype.hasOwnProperty, Mc = Object.prototype.propertyIsEnumerable, Lc = (e, t) => {
  var n = {};
  for (var s in e)
    Ic.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && yr)
    for (var s of yr(e))
      t.indexOf(s) < 0 && Mc.call(e, s) && (n[s] = e[s]);
  return n;
};
function Pc(e, t, n = {}) {
  const s = n, { window: r = Co } = s, o = Lc(s, ["window"]);
  let l;
  const i = Ac(() => r && "ResizeObserver" in r), c = () => {
    l && (l.disconnect(), l = void 0);
  }, a = Ke(() => yn(e), (h) => {
    c(), i.value && r && h && (l = new ResizeObserver(t), l.observe(h, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), a();
  };
  return Cc(d), {
    isSupported: i,
    stop: d
  };
}
function Rc(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Co, box: r = "content-box" } = n, o = Ee(() => {
    var c, a;
    return (a = (c = yn(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : a.includes("svg");
  }), l = z(t.width), i = z(t.height);
  return Pc(e, ([c]) => {
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
var Nc = Object.defineProperty, wr = Object.getOwnPropertySymbols, Fc = Object.prototype.hasOwnProperty, Vc = Object.prototype.propertyIsEnumerable, xr = (e, t, n) => t in e ? Nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kc = (e, t) => {
  for (var n in t || (t = {}))
    Fc.call(t, n) && xr(e, n, t[n]);
  if (wr)
    for (var n of wr(t))
      Vc.call(t, n) && xr(e, n, t[n]);
  return e;
};
const jc = {
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
kc({
  linear: Sc
}, jc);
function To(e, t) {
  const { containerStyle: n, wrapperProps: s, scrollTo: r, calculateRange: o, currentList: l, containerRef: i } = "itemHeight" in t ? Dc(t, e) : Hc(t, e);
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
function Ao(e) {
  const t = z(null), n = Rc(t), s = z([]), r = Ml(e);
  return { state: z({ start: 0, end: 10 }), source: r, currentList: s, size: n, containerRef: t };
}
function Io(e, t, n) {
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
function Mo(e, t) {
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
function Lo(e, t, n, s, { containerRef: r, state: o, currentList: l, source: i }) {
  return () => {
    const c = r.value;
    if (c) {
      const a = n(e === "vertical" ? c.scrollTop : c.scrollLeft), d = s(e === "vertical" ? c.clientHeight : c.clientWidth), h = a - t, g = a + d + t;
      o.value = {
        start: h < 0 ? 0 : h,
        end: g > i.value.length ? i.value.length : g
      }, l.value = i.value.slice(o.value.start, o.value.end).map((y, C) => ({
        data: y,
        index: C + o.value.start
      }));
    }
  };
}
function Po(e, t) {
  return (n) => typeof e == "number" ? n * e : t.value.slice(0, n).reduce((r, o, l) => r + e(l), 0);
}
function Ro(e, t, n) {
  Ke([e.width, e.height, t], () => {
    n();
  });
}
function No(e, t) {
  return Ee(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, s, r) => n + e(r), 0));
}
const $c = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function Fo(e, t, n, s) {
  return (r) => {
    s.value && (s.value[$c[e]] = n(r), t());
  };
}
function Hc(e, t) {
  const n = Ao(t), { state: s, source: r, currentList: o, size: l, containerRef: i } = n, c = { overflowX: "auto" }, { itemWidth: a, overscan: d = 5 } = e, h = Io(s, r, a), g = Mo(r, a), y = Lo("horizontal", d, g, h, n), C = Po(a, r), S = Ee(() => C(s.value.start)), N = No(a, r);
  Ro(l, t, y);
  const j = Fo("horizontal", y, C, i), U = Ee(() => ({
    style: {
      height: "100%",
      width: `${N.value - S.value}px`,
      marginLeft: `${S.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: j,
    calculateRange: y,
    wrapperProps: U,
    containerStyle: c,
    currentList: o,
    containerRef: i
  };
}
function Dc(e, t) {
  const n = Ao(t), { state: s, source: r, currentList: o, size: l, containerRef: i } = n, c = { overflowY: "auto" }, { itemHeight: a, overscan: d = 5 } = e, h = Io(s, r, a), g = Mo(r, a), y = Lo("vertical", d, g, h, n), C = Po(a, r), S = Ee(() => C(s.value.start)), N = No(a, r);
  Ro(l, t, y);
  const j = Fo("vertical", y, C, i), U = Ee(() => ({
    style: {
      width: "100%",
      height: `${N.value - S.value}px`,
      marginTop: `${S.value}px`
    }
  }));
  return {
    calculateRange: y,
    scrollTo: j,
    containerStyle: c,
    wrapperProps: U,
    currentList: o,
    containerRef: i
  };
}
const ft = (e) => {
  let t = parseInt(e);
  return t == e ? t : e;
}, Uc = (e, t, n) => {
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
      e.value = [];
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
let Bc = 1;
const Vo = (e) => {
  e && (e.style.display = "none", Wo(e));
}, ko = (e, t, n, s) => {
  const r = z(/* @__PURE__ */ new Map());
  Jt(() => {
    if (Array.isArray(n.value)) {
      r.value.clear();
      for (let a of n.value)
        r.value.set(a, a);
    }
  });
  const o = z([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let a of o.value)
        o.map.set(a.key, a);
  }, Jt(() => {
    t.value && (o.value = t.value.map((a) => ({ ...a, key: ft(a.key) })), o.rebuildMap());
  }), e) {
    if (r.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => ft(d.value)).filter((d) => d != null))
        r.value.set(a, a);
      o.value = Array.apply(null, e.options).reduce((a, d) => (a.push({ value: d.text, key: ft(d.value), data: Object.assign({}, d.dataset) }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (o.value = [{ value: a, key: a }]);
    }
    o.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      r.value.set(ft(a), ft(a));
  else
    s != null && r.value.set(ft(s), ft(s));
  let l = e == null ? void 0 : e.id;
  (l == null || l === "" || l == 0) && (l = "extraselect_" + (++Bc).toString()), Uc(o, r, l);
  const i = [];
  return r.value.forEach((a, d) => {
    i.push([d, a]);
  }), { options: o, selectedOptions: r, onReset: () => {
    r.value.clear();
    for (let [a, d] of i)
      r.value.set(a, d);
  } };
};
z({});
function Kc(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Ps = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), jo(z(n), "defaults");
}, jo = (e, t) => {
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
let Wc = 0;
const $o = (e, t) => {
  var s;
  return jo(t, (s = e == null ? void 0 : e.id) != null ? s : "extraselect_" + (++Wc).toString()), { propLocalization: t, t: (r, o = {}) => {
    var i;
    let l = (i = t.value[r]) != null ? i : window.ExtraSelectLocalization.defaults.get(r);
    return l == null && (window.ExtraSelectLocalization.defaults.push(r, r), l = r), Kc(l, o);
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
}, Ho = (e, t, n, s, r, o, l = "limited", i = {}) => {
  const c = z(0), a = z(!1), d = Ee(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = [];
      Jt((g) => {
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
              y = h.reduce((C, S) => C && !s.value.startsWith(S), !0);
              break;
          }
          if (y) {
            a.value = !0;
            const C = setTimeout(() => {
              h.push(s.value), c.value += 1, i.body = { ...i.body, ...o.value }, Er(t, s.value, i).then((S) => {
                e.actions.addRange(S), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(C);
            });
          }
        }
      });
    } else
      Er(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, Do = (e, t, n, s = [], r = []) => {
  const o = z(""), l = z([]), i = z({}), c = { ...s.reduce((d, h) => (d[h] = !1, d), {}), ...r.reduce((d, h) => (d[h] = !0, d), {}) };
  for (let d in c) {
    let h = c[d], g = document.getElementById(d);
    i.value[d] = g == null ? void 0 : g.value, g && g.addEventListener("change", (y) => {
      i.value[d] = y.target.value, h && Ct(() => {
        if (t != null)
          for (let C of Array.from(t.value.keys()))
            l.value.find((S) => S.key == C) || n(C, !1);
        else
          l.value.find((C) => C.key == o.value) || n(o.value, !1);
      });
    });
  }
  const a = function(d, h) {
    let g = d.value;
    return Object.keys(i.value).length > 0 && (g = g.filter((y) => {
      var C, S;
      for (let N in i.value)
        if ((c[N] ? !0 : ((C = i.value[N]) != null ? C : "").length > 0) && ((S = y.data) == null ? void 0 : S.hasOwnProperty(N)) && y.data[N] != i.value[N])
          return !1;
      return !0;
    })), h.length > 0 && (g = g.filter((y) => y.value.toLowerCase().includes(h.toLowerCase()))), g;
  };
  return Jt(() => {
    l.value = a(e, o.value);
  }), { filterText: o, filteredOptions: l, filterValues: i };
}, Uo = (e, t, n, s, r, o, l) => {
  const i = getComputedStyle(document.querySelector("body")).font, c = function(h) {
    const y = document.createElement("canvas").getContext("2d");
    return y.font = i, y.measureText(h).width;
  }, a = Ee(() => {
    var g, y;
    const h = (g = nn(s.value).width) != null ? g : 100;
    if (l === "inherit")
      return h;
    if (l == null || l === "dynamic") {
      const C = (y = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? y : 16;
      return Math.max(h, Math.max(...e.value.map((S) => c(S.value))) + 20 + C * 3);
    }
    return l;
  }), d = z({
    position: "absolute",
    "min-width": "max-content"
  });
  return Xl(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var h = nn(s.value), g = nn(null);
    if (o.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(o.value).position))
      var g = nn(o.value);
    let y = -g.left + h.left;
    const C = window.document.documentElement.clientWidth;
    y + a.value > C && (y = C - a.value), d.value = {
      position: "absolute",
      "min-width": "max-content",
      width: a.value.toString() + "px",
      top: (-g.top + h.top + h.height).toString() + "px",
      left: y.toString() + "px"
    };
  }), { dropdownStyle: d, getTextWidth: c };
}, zc = ["name"], qc = {
  key: 1,
  class: "extra-select selection"
}, Gc = ["onClick"], Jc = ["innerHTML"], Yc = ["value", "disabled"], Qc = {
  key: 0,
  class: "input-searching"
}, Xc = ["placeholder"], Zc = {
  key: 0,
  class: "allselect-clear"
}, eu = { class: "row-input" }, tu = ["checked"], nu = { class: "row-input" }, su = ["checked"], ru = {
  key: 1,
  class: "no-matches"
}, ou = { key: 2 }, lu = ["onClick"], iu = { class: "row-input" }, cu = ["checked"], uu = ["value"], au = {
  name: "ExtraSelect",
  inheritAttrs: !1
}, fu = Object.assign(au, {
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
    var it, ke, Ce;
    const n = e, s = Ee(() => {
      var M, P;
      return (P = (M = n.originalNode) == null ? void 0 : M.multiple) != null ? P : n.multiple;
    }), { options: r, selectedOptions: o, onReset: l } = ko(n.originalNode, Ht(n, "options"), Ht(n, "modelValue"), n.initialValue), { t: i } = $o(n.originalNode, Ht(n, "localization")), c = (it = n.originalNode) == null ? void 0 : it.classList, a = Object.values((Ce = (ke = n.originalNode) == null ? void 0 : ke.style) != null ? Ce : {});
    Vo(n.originalNode);
    const d = t, h = (M, P = null) => {
      if (s.value) {
        let me = P;
        switch (me == null && (me = !o.value.has(M)), me) {
          case !0:
            o.value.set(M, M);
            break;
          case !1:
            o.value.delete(M);
            break;
        }
      } else
        o.value.clear(), P !== !1 && o.value.set(M, M), V.value = !1;
      pe(Array.from(o.value.keys()));
    }, { filterText: g, filteredOptions: y, filterValues: C } = Do(r, o, h, n.filterFields, n.hardFilterFields), { searchingFlag: S } = Ho(
      r,
      n.url,
      n.searchableUrl,
      g,
      n.minChars,
      C,
      n.fetchMode,
      n.fetchOptions
    ), N = z(null), j = z(null), U = z(null), V = z(!1);
    function q(M) {
      n.disabled || (V.value = M);
    }
    Ke(g, () => {
      j.value.querySelector(".scroller").scrollTop = 0;
    });
    const J = z(null), L = function(M) {
      const P = wt(M.target);
      P.push(M.target), !P.includes(N.value) && !P.includes(j.value) ? V.value = !1 : (M.stopImmediatePropagation(), M.preventDefault());
    };
    Vn(() => {
      if (n.dropdownContainer) {
        let M = !1;
        J.value = wt(N.value).find((P) => !!(P instanceof Element && (P.matches(n.dropdownContainer) && (M = !0), M && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(P).position))));
      }
      if (J.value == null && (J.value = document.querySelector("body")), n.originalNode) {
        for (let P of c)
          P != "extraselect" && N.value.classList.add(P);
        for (let P of a)
          N.value.style[P] = n.originalNode.style[P];
        let M = wt(N.value, "form").pop();
        M instanceof HTMLElement && M.matches("form") && M.addEventListener("reset", () => setTimeout(l)), n.originalNode.toggleValue = h, n.originalNode.setValues = (P) => {
          o.value.clear();
          for (let me of P)
            h(me);
        };
      }
      window.document.addEventListener("mousedown", L), window.document.addEventListener("focusin", L);
    }), kn(() => {
      window.document.removeEventListener("mousedown", L), window.document.removeEventListener("focusin", L);
    });
    const { dropdownStyle: te, getTextWidth: ne } = Uo(r, o, V, N, j, J, n.maxWidth), pe = (M) => {
      Ct(
        () => {
          var P;
          return (P = n.originalNode) == null ? void 0 : P.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), d("update:modelValue", M);
    }, ge = (M) => {
      B(M, !1), g.value = "";
    }, B = (M, P = null) => {
      P == null && (P = !se.value), P ? (o.value.clear(), r.value.forEach((me) => o.value.set(me.key, me.key))) : o.value.clear(), pe(Array.from(o.value.keys()));
    }, Z = () => {
      ae.value ? y.value.forEach((M) => {
        o.value.has(M.key) && o.value.delete(M.key);
      }) : y.value.forEach((M) => {
        o.value.has(M.key) || o.value.set(M.key, M.key);
      }), pe(Array.from(o.value.keys()));
    };
    Ke(V, (M, P) => {
      M != P && (M ? n.search && Ct(() => {
        U.value.focus({ focusVisible: !0 });
      }) : g.value = "");
    });
    const se = Ee(() => o.value.size == r.value.length), ae = Ee(() => y.value.reduce((M, P) => M && o.value.has(P.key), !0)), tn = Ee(() => o.value.size == 0), fe = Ee(() => {
      var M, P, me, be, re;
      if (r.value.length < 0)
        return "";
      if (s.value) {
        if (tn.value)
          return i("No selection");
        if (!n.searchableUrl && se.value)
          return i("All selected");
        const ve = N.value ? getComputedStyle(N.value) : null, ct = ((M = N.value) == null ? void 0 : M.clientWidth) - parseInt(ve == null ? void 0 : ve.paddingLeft) - parseInt(ve == null ? void 0 : ve.paddingRight);
        let Pe = i(":n selected - ", { n: o.value.size }), yt = !0;
        for (let Rt of o.value)
          if (yt ? yt = !1 : Pe += ", ", Pe += (me = (P = r.map.get(Rt[0])) == null ? void 0 : P.value) != null ? me : S.value ? i("Loading...") : i("Value not found"), ct < ne(Pe))
            return o.value.size + i(" selected");
        return Pe;
      } else
        for (let ve of o.value)
          return (re = (be = r.map.get(ve[0])) == null ? void 0 : be.value) != null ? re : S.value ? i("Loading...") : i("Value not found");
      return i("No selection");
    }), { list: Q, containerProps: K, wrapperProps: We } = To(
      y,
      {
        itemHeight: 32
      }
    );
    return (M, P) => {
      var me, be;
      return G(), oe(de, null, [
        s.value && $(o).size == 0 ? (G(), oe("input", {
          key: 0,
          type: "hidden",
          name: (be = (me = n.originalNode) == null ? void 0 : me.name) == null ? void 0 : be.replace("[]", ""),
          value: ""
        }, null, 8, zc)) : Me("", !0),
        n.showSelected ? (G(), oe("div", qc, [
          (G(!0), oe(de, null, gn($(o), (re) => {
            var ve;
            return G(), oe("div", {
              key: re,
              onClick: dt((ct) => h(re[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              ls(De((ve = $(r).find((ct) => ct.key == re[0])) == null ? void 0 : ve.value) + " ", 1),
              le("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Jc)
            ], 8, Gc);
          }), 128))
        ])) : Me("", !0),
        le("input", Qt({
          onFocus: P[0] || (P[0] = (re) => q(!0)),
          onClick: P[1] || (P[1] = dt((re) => q(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: N,
          value: fe.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, M.$attrs, { disabled: e.disabled }), null, 16, Yc),
        J.value ? (G(), Cn(os, {
          key: 2,
          to: J.value
        }, [
          On(le("div", {
            class: Pt(["extra-select dropdown", { searching: $(S) > 0 }]),
            ref_key: "dropdownNode",
            ref: j,
            style: Lt($(te))
          }, [
            n.search ? (G(), oe("div", Qc, [
              On(le("input", {
                ref_key: "searchNode",
                ref: U,
                class: "extra-select-search",
                "onUpdate:modelValue": P[2] || (P[2] = (re) => ue(g) ? g.value = re : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: $(i)("Search...")
              }, null, 8, Xc), [
                [cs, $(g)]
              ])
            ])) : Me("", !0),
            $(g).length >= n.minChars ? (G(), oe(de, { key: 1 }, [
              s.value ? (G(), oe("div", Zc, [
                $(g).length == 0 ? (G(), oe("div", {
                  key: 0,
                  onClick: dt(B, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  le("div", eu, [
                    le("input", {
                      checked: se.value,
                      type: "checkbox"
                    }, null, 8, tu),
                    le("b", null, De($(i)("Select all")), 1)
                  ])
                ])) : Me("", !0),
                $(y).length > 0 && $(g).length > 0 ? (G(), oe("div", {
                  key: 1,
                  onClick: dt(Z, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  le("div", nu, [
                    le("input", {
                      checked: ae.value,
                      type: "checkbox"
                    }, null, 8, su),
                    le("b", null, De($(i)("Select Filtered")), 1)
                  ])
                ])) : Me("", !0),
                le("div", {
                  class: "clear",
                  onClick: dt(ge, ["stop", "prevent"])
                }, De($(i)("Clear")), 1)
              ])) : Me("", !0),
              $(y).length == 0 ? (G(), oe("div", ru, De($(i)("No matches found")), 1)) : Me("", !0)
            ], 64)) : (G(), oe("div", ou, De($(i)("Insert at least :n characters", { n: n.minChars })), 1)),
            le("div", Qt($(K), { class: "scroller" }), [
              le("div", Ir(Ms($(We))), [
                (G(!0), oe(de, null, gn($(Q), (re) => (G(), oe("button", {
                  key: re.index,
                  class: "dropdown-row",
                  onClick: dt((ve) => h(re.data.key), ["stop", "prevent"]),
                  style: { height: "32px" }
                }, [
                  le("div", iu, [
                    s.value ? (G(), oe("input", {
                      key: 0,
                      checked: $(o).has(re.data.key),
                      type: "checkbox"
                    }, null, 8, cu)) : Me("", !0),
                    ls(" " + De(re.data.value), 1)
                  ])
                ], 8, lu))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Eo, V.value]
          ])
        ], 8, ["to"])) : Me("", !0),
        n.originalNode ? (G(), Cn(os, {
          key: 3,
          to: n.originalNode
        }, [
          (G(!0), oe(de, null, gn($(o), (re) => (G(), oe("option", {
            key: re[0],
            selected: "selected",
            value: re[0]
          }, null, 8, uu))), 128))
        ], 8, ["to"])) : Me("", !0)
      ], 64);
    };
  }
}), du = ["disabled"], hu = {
  key: 0,
  class: "no-matches"
}, pu = { key: 1 }, gu = ["onClick"], mu = { class: "row-input" }, vu = {
  name: "ExtraSuggest",
  inheritAttrs: !1
}, _u = Object.assign(vu, {
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
    var ne, pe, ge;
    const n = e, { options: s } = ko(n.originalNode, Ht(n, "options"), z([])), { t: r } = $o(n.originalNode, Ht(n, "localization")), o = (ne = n.originalNode) == null ? void 0 : ne.classList, l = Object.values((ge = (pe = n.originalNode) == null ? void 0 : pe.style) != null ? ge : {});
    Vo(n.originalNode);
    const i = t, c = (B, Z = null) => {
      Z === !1 ? a.value = "" : a.value = s.map.get(B).value, S.value = !1;
    }, { filterText: a, filteredOptions: d, filterValues: h } = Do(s, null, c, n.filterFields, n.hardFilterFields), { searchingFlag: g } = Ho(
      s,
      n.url,
      n.searchableUrl,
      a,
      n.minChars,
      h,
      n.fetchMode,
      n.fetchOptions
    ), y = z(null), C = z(null), S = z(!1), N = z(null);
    function j(B) {
      n.disabled || (S.value = B);
    }
    Ke(a, () => {
      C.value.querySelector(".scroller").scrollTop = 0;
    });
    const U = function(B) {
      const Z = wt(B.target);
      Z.push(B.target), !Z.includes(y.value) && !Z.includes(C.value) && (S.value = !1);
    };
    Vn(() => {
      if (n.dropdownContainer) {
        let se = !1;
        N.value = wt(y.value).find((ae) => !!(ae instanceof Element && (ae.matches(n.dropdownContainer) && (se = !0), se && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(ae).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), n.originalNode) {
        for (let ae of o)
          ae != "extrasuggest" && y.value.classList.add(ae);
        for (let ae of l)
          y.value.style[ae] = n.originalNode.style[ae];
        a.value = n.originalNode.value;
        let se = wt(y.value, "form").pop();
        se instanceof HTMLElement && se.matches("form") && se.addEventListener("reset", () => setTimeout(Z)), n.originalNode.addEventListener("change", () => {
          q(!0);
        });
      }
      Jt(() => {
        n.modelValue != null && (a.value = n.modelValue);
      });
      const B = a.value, Z = () => {
        a.value = B;
      };
      window.document.addEventListener("mousedown", U), window.document.addEventListener("focusin", U);
    }), kn(() => {
      window.document.removeEventListener("mousedown", U), window.document.removeEventListener("focusin", U);
    });
    const { dropdownStyle: V } = Uo(s, z([]), S, y, C, N, n.maxWidth), q = (B = !1) => {
      var Z;
      n.originalNode && (B ? a.value = n.originalNode.value : (n.originalNode.value = a.value, (Z = n.originalNode) == null || Z.dispatchEvent(new Event("change", { bubbles: !0 })))), i("update:modelValue", a.value);
    };
    Ke(() => S.value, (B) => {
      B === !1 && q();
    });
    const { list: J, containerProps: L, wrapperProps: te } = To(
      d,
      {
        itemHeight: 32
      }
    );
    return (B, Z) => (G(), oe(de, null, [
      On(le("input", Qt({
        onFocus: Z[0] || (Z[0] = (se) => j(!0)),
        onClick: Z[1] || (Z[1] = (se) => j(!0)),
        ref_key: "inputNode",
        ref: y,
        "onUpdate:modelValue": Z[2] || (Z[2] = (se) => ue(a) ? a.value = se : null),
        class: "extra-select extra-select-input"
      }, B.$attrs, { disabled: e.disabled }), null, 16, du), [
        [mc, $(a)]
      ]),
      N.value ? (G(), Cn(os, {
        key: 0,
        to: N.value
      }, [
        On(le("div", {
          class: Pt(["extra-select dropdown", { searching: $(g) > 0 }]),
          ref_key: "dropdownNode",
          ref: C,
          style: Lt($(V))
        }, [
          $(a).length >= n.minChars ? (G(), oe(de, { key: 0 }, [
            $(d).length == 0 ? (G(), oe("div", hu, De($(r)("No matches found")), 1)) : Me("", !0)
          ], 64)) : (G(), oe("div", pu, De($(r)("Insert at least :n characters", { n: n.minChars })), 1)),
          le("div", Qt($(L), { class: "scroller" }), [
            le("div", Ir(Ms($(te))), [
              (G(!0), oe(de, null, gn($(J), (se) => (G(), oe("button", {
                key: se.index,
                class: "dropdown-row",
                onClick: dt((ae) => c(se.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                le("div", mu, De(se.data.value), 1)
              ], 8, gu))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Eo, S.value]
        ])
      ], 8, ["to"])) : Me("", !0)
    ], 64));
  }
}), yu = Ps, Bo = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Bo.bindNew(e);
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
      const s = So(fu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), Ne.remove(e, "extra-select");
      });
    });
  }
}, Ko = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      Ko.bindNew(e);
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
      const s = So(_u, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), Ne.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Bo.init(), Ko.init(), Ps();
});
export {
  Bo as ExtraSelect,
  Ko as ExtraSuggest,
  yu as loadExtraSelectDefaultLocalization
};
