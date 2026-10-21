const ke = /* @__PURE__ */ new WeakMap();
class Me {
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
    if (!Me.has(t, n)) {
      Me.put(t, n, !0);
      const r = s();
      return r !== void 0 && Me.put(t, n, r), r;
    }
    return !1;
  }
  static async lockAsync(t, n, s) {
    if (!Me.has(t, n)) {
      Me.put(t, n, !0);
      const r = await s();
      return r !== void 0 && Me.put(t, n, r), r;
    }
    return !1;
  }
}
({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 }).DATASTORE_DEBUG && (window.__Store = ke);
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
function ql(e) {
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
const Z = {}, xt = [], Se = () => {
}, Gl = () => !1, In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ds = (e) => e.startsWith("onUpdate:"), de = Object.assign, hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jl = Object.prototype.hasOwnProperty, B = (e, t) => Jl.call(e, t), L = Array.isArray, Et = (e) => Qt(e) === "[object Map]", It = (e) => Qt(e) === "[object Set]", Vs = (e) => Qt(e) === "[object Date]", V = (e) => typeof e == "function", oe = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Or = (e) => (Q(e) || V(e)) && V(e.then) && V(e.catch), Sr = Object.prototype.toString, Qt = (e) => Sr.call(e), Yl = (e) => Qt(e).slice(8, -1), Cr = (e) => Qt(e) === "[object Object]", ps = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ fs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ql = /-(\w)/g, St = Mn((e) => e.replace(Ql, (t, n) => n ? n.toUpperCase() : "")), Xl = /\B([A-Z])/g, Mt = Mn(
  (e) => e.replace(Xl, "-$1").toLowerCase()
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
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = oe(s) ? no(s) : Lt(s);
      if (r)
        for (const l in r)
          t[l] = r[l];
    }
    return t;
  } else if (oe(e) || Q(e))
    return e;
}
const Zl = /;(?![^(]*\))/g, eo = /:([^]+)/, to = /\/\*[^]*?\*\//g;
function no(e) {
  const t = {};
  return e.replace(to, "").split(Zl).forEach((n) => {
    if (n) {
      const s = n.split(eo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = mt(e[n]);
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
  return t && !oe(t) && (e.class = mt(t)), n && (e.style = Lt(n)), e;
}
const so = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ro = /* @__PURE__ */ fs(so);
function Mr(e) {
  return !!e || e === "";
}
function lo(e, t) {
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
  if (n = L(e), s = L(t), n || s)
    return n && s ? lo(e, t) : !1;
  if (n = Q(e), s = Q(t), n || s) {
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
function ms(e, t) {
  return e.findIndex((n) => vt(n, t));
}
const je = (e) => oe(e) ? e : e == null ? "" : L(e) || Q(e) && (e.toString === Sr || !V(e.toString)) ? JSON.stringify(e, Lr, 2) : String(e), Lr = (e, t) => t && t.__v_isRef ? Lr(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], l) => (n[Un(s, l) + " =>"] = r, n),
    {}
  )
} : It(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Un(n))
} : Je(t) ? Un(t) : Q(t) && !L(t) && !Cr(t) ? String(t) : t, Un = (e, t = "") => {
  var n;
  return Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Oe;
class oo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    }
  }
  on() {
    Oe = this;
  }
  off() {
    Oe = this.parent;
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
function io(e, t = Oe) {
  t && t.active && t.effects.push(e);
}
function Nr() {
  return Oe;
}
function co(e) {
  Oe && Oe.cleanups.push(e);
}
let pt;
class vs {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, io(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, lt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (uo(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ot();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = tt, n = pt;
    try {
      return tt = !0, pt = this, this._runnings++, js(this), this.fn();
    } finally {
      $s(this), this._runnings--, pt = n, tt = t;
    }
  }
  stop() {
    this.active && (js(this), $s(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function uo(e) {
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
let tt = !0, Jn = 0;
const Rr = [];
function lt() {
  Rr.push(tt), tt = !1;
}
function ot() {
  const e = Rr.pop();
  tt = e === void 0 ? !0 : e;
}
function ys() {
  Jn++;
}
function _s() {
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
  ys();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r != null ? r : r = e.get(s) === s._trackId) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r != null ? r : r = e.get(s) === s._trackId) && (s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Yn.push(s.scheduler)));
  }
  _s();
}
const kr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, wn = /* @__PURE__ */ new WeakMap(), gt = Symbol(""), Qn = Symbol("");
function we(e, t, n) {
  if (tt && pt) {
    let s = wn.get(e);
    s || wn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = kr(() => s.delete(n))), Fr(
      pt,
      r
    );
  }
}
function qe(e, t, n, s, r, l) {
  const o = wn.get(e);
  if (!o)
    return;
  let i = [];
  if (t === "clear")
    i = [...o.values()];
  else if (n === "length" && L(e)) {
    const c = Number(s);
    o.forEach((a, d) => {
      (d === "length" || !Je(d) && d >= c) && i.push(a);
    });
  } else
    switch (n !== void 0 && i.push(o.get(n)), t) {
      case "add":
        L(e) ? ps(n) && i.push(o.get("length")) : (i.push(o.get(gt)), Et(e) && i.push(o.get(Qn)));
        break;
      case "delete":
        L(e) || (i.push(o.get(gt)), Et(e) && i.push(o.get(Qn)));
        break;
      case "set":
        Et(e) && i.push(o.get(gt));
        break;
    }
  ys();
  for (const c of i)
    c && Vr(
      c,
      4
    );
  _s();
}
function ao(e, t) {
  const n = wn.get(e);
  return n && n.get(t);
}
const fo = /* @__PURE__ */ fs("__proto__,__v_isRef,__isVue"), jr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
), Hs = /* @__PURE__ */ ho();
function ho() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = W(this);
      for (let l = 0, o = this.length; l < o; l++)
        we(s, "get", l + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(W)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      lt(), ys();
      const s = W(this)[t].apply(this, n);
      return _s(), ot(), s;
    };
  }), e;
}
function po(e) {
  Je(e) || (e = String(e));
  const t = W(this);
  return we(t, "has", e), t.hasOwnProperty(e);
}
class $r {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return s === (r ? l ? To : Br : l ? Ur : Dr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = L(t);
    if (!r) {
      if (o && B(Hs, n))
        return Reflect.get(Hs, n, s);
      if (n === "hasOwnProperty")
        return po;
    }
    const i = Reflect.get(t, n, s);
    return (Je(n) ? jr.has(n) : fo(n)) || (r || we(t, "get", n), l) ? i : fe(i) ? o && ps(n) ? i : i.value : Q(i) ? r ? Kr(i) : xs(i) : i;
  }
}
class Hr extends $r {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let l = t[n];
    if (!this._isShallow) {
      const c = Kt(l);
      if (!xn(s) && !Kt(s) && (l = W(l), s = W(s)), !L(t) && fe(l) && !fe(s))
        return c ? !1 : (l.value = s, !0);
    }
    const o = L(t) && ps(n) ? Number(n) < t.length : B(t, n), i = Reflect.set(t, n, s, r);
    return t === W(r) && (o ? st(s, l) && qe(t, "set", n, s) : qe(t, "add", n, s)), i;
  }
  deleteProperty(t, n) {
    const s = B(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && qe(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Je(n) || !jr.has(n)) && we(t, "has", n), s;
  }
  ownKeys(t) {
    return we(
      t,
      "iterate",
      L(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class go extends $r {
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
const mo = /* @__PURE__ */ new Hr(), vo = /* @__PURE__ */ new go(), yo = /* @__PURE__ */ new Hr(
  !0
);
const bs = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function sn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = W(e), l = W(t);
  n || (st(t, l) && we(r, "get", t), we(r, "get", l));
  const { has: o } = Ln(r), i = s ? bs : n ? Os : Wt;
  if (o.call(r, t))
    return i(e.get(t));
  if (o.call(r, l))
    return i(e.get(l));
  e !== r && e.get(t);
}
function rn(e, t = !1) {
  const n = this.__v_raw, s = W(n), r = W(e);
  return t || (st(e, r) && we(s, "has", e), we(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ln(e, t = !1) {
  return e = e.__v_raw, !t && we(W(e), "iterate", gt), Reflect.get(e, "size", e);
}
function Ds(e) {
  e = W(e);
  const t = W(this);
  return Ln(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function Us(e, t) {
  t = W(t);
  const n = W(this), { has: s, get: r } = Ln(n);
  let l = s.call(n, e);
  l || (e = W(e), l = s.call(n, e));
  const o = r.call(n, e);
  return n.set(e, t), l ? st(t, o) && qe(n, "set", e, t) : qe(n, "add", e, t), this;
}
function Bs(e) {
  const t = W(this), { has: n, get: s } = Ln(t);
  let r = n.call(t, e);
  r || (e = W(e), r = n.call(t, e)), s && s.call(t, e);
  const l = t.delete(e);
  return r && qe(t, "delete", e, void 0), l;
}
function Ks() {
  const e = W(this), t = e.size !== 0, n = e.clear();
  return t && qe(e, "clear", void 0, void 0), n;
}
function on(e, t) {
  return function(s, r) {
    const l = this, o = l.__v_raw, i = W(o), c = t ? bs : e ? Os : Wt;
    return !e && we(i, "iterate", gt), o.forEach((a, d) => s.call(r, c(a), c(d), l));
  };
}
function cn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, l = W(r), o = Et(l), i = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = r[e](...s), d = n ? bs : t ? Os : Wt;
    return !t && we(
      l,
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
function Qe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _o() {
  const e = {
    get(l) {
      return sn(this, l);
    },
    get size() {
      return ln(this);
    },
    has: rn,
    add: Ds,
    set: Us,
    delete: Bs,
    clear: Ks,
    forEach: on(!1, !1)
  }, t = {
    get(l) {
      return sn(this, l, !1, !0);
    },
    get size() {
      return ln(this);
    },
    has: rn,
    add: Ds,
    set: Us,
    delete: Bs,
    clear: Ks,
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
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    e[l] = cn(l, !1, !1), n[l] = cn(l, !0, !1), t[l] = cn(l, !1, !0), s[l] = cn(
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
  bo,
  wo,
  xo,
  Eo
] = /* @__PURE__ */ _o();
function ws(e, t) {
  const n = t ? e ? Eo : xo : e ? wo : bo;
  return (s, r, l) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    B(n, r) && r in s ? n : s,
    r,
    l
  );
}
const Oo = {
  get: /* @__PURE__ */ ws(!1, !1)
}, So = {
  get: /* @__PURE__ */ ws(!1, !0)
}, Co = {
  get: /* @__PURE__ */ ws(!0, !1)
};
const Dr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap();
function Ao(e) {
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
function Io(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ao(Yl(e));
}
function xs(e) {
  return Kt(e) ? e : Es(
    e,
    !1,
    mo,
    Oo,
    Dr
  );
}
function Mo(e) {
  return Es(
    e,
    !1,
    yo,
    So,
    Ur
  );
}
function Kr(e) {
  return Es(
    e,
    !0,
    vo,
    Co,
    Br
  );
}
function Es(e, t, n, s, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = r.get(e);
  if (l)
    return l;
  const o = Io(e);
  if (o === 0)
    return e;
  const i = new Proxy(
    e,
    o === 2 ? s : n
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
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Lo(e) {
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
    const t = W(this);
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
function No(e, t, n = !1) {
  let s, r;
  const l = V(e);
  return l ? (s = e, r = Se) : (s = e.get, r = e.set), new zr(s, r, l || !r, n);
}
function qr(e) {
  var t;
  tt && pt && (e = W(e), Fr(
    pt,
    (t = e.dep) != null ? t : e.dep = kr(
      () => e.dep = void 0,
      e instanceof zr ? e : void 0
    )
  ));
}
function hn(e, t = 4, n) {
  e = W(e);
  const s = e.dep;
  s && Vr(
    s,
    t
  );
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return Gr(e, !1);
}
function Po(e) {
  return Gr(e, !0);
}
function Gr(e, t) {
  return fe(e) ? e : new Ro(e, t);
}
class Ro {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : W(t), this._value = n ? t : Wt(t);
  }
  get value() {
    return qr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || xn(t) || Kt(t);
    t = n ? t : W(t), st(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Wt(t), hn(this, 4));
  }
}
function U(e) {
  return fe(e) ? e.value : e;
}
const Fo = {
  get: (e, t, n) => U(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return fe(r) && !fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Jr(e) {
  return jt(e) ? e : new Proxy(e, Fo);
}
class Vo {
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
    return ao(W(this._object), this._key);
  }
}
class ko {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function $t(e, t, n) {
  return fe(e) ? e : V(e) ? new ko(e) : Q(e) && arguments.length > 1 ? jo(e, t, n) : J(e);
}
function jo(e, t, n) {
  const s = e[t];
  return fe(s) ? s : new Vo(e, t, n);
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
    Nn(r, t, n);
  }
}
function Ne(e, t, n, s) {
  if (V(e)) {
    const r = nt(e, t, n, s);
    return r && Or(r) && r.catch((l) => {
      Nn(l, t, n);
    }), r;
  }
  if (L(e)) {
    const r = [];
    for (let l = 0; l < e.length; l++)
      r.push(Ne(e[l], t, n, s));
    return r;
  }
}
function Nn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const o = t.proxy, i = `https://vuejs.org/error-reference/#runtime-${n}`;
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
      lt(), nt(
        c,
        null,
        10,
        [e, o, i]
      ), ot();
      return;
    }
  }
  $o(e, n, r, s);
}
function $o(e, t, n, s = !0) {
  console.error(e);
}
let zt = !1, Xn = !1;
const he = [];
let He = 0;
const Ot = [];
let Xe = null, dt = 0;
const Yr = /* @__PURE__ */ Promise.resolve();
let Ss = null;
function Ct(e) {
  const t = Ss || Yr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ho(e) {
  let t = He + 1, n = he.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = he[s], l = qt(r);
    l < e || l === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function Cs(e) {
  (!he.length || !he.includes(
    e,
    zt && e.allowRecurse ? He + 1 : He
  )) && (e.id == null ? he.push(e) : he.splice(Ho(e.id), 0, e), Qr());
}
function Qr() {
  !zt && !Xn && (Xn = !0, Ss = Yr.then(Zr));
}
function Do(e) {
  const t = he.indexOf(e);
  t > He && he.splice(t, 1);
}
function Uo(e) {
  L(e) ? Ot.push(...e) : (!Xe || !Xe.includes(
    e,
    e.allowRecurse ? dt + 1 : dt
  )) && Ot.push(e), Qr();
}
function Ws(e, t, n = zt ? He + 1 : 0) {
  for (; n < he.length; n++) {
    const s = he[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      he.splice(n, 1), n--, s();
    }
  }
}
function Xr(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)].sort(
      (n, s) => qt(n) - qt(s)
    );
    if (Ot.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, dt = 0; dt < Xe.length; dt++)
      Xe[dt]();
    Xe = null, dt = 0;
  }
}
const qt = (e) => e.id == null ? 1 / 0 : e.id, Bo = (e, t) => {
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
  Xn = !1, zt = !0, he.sort(Bo);
  const t = Se;
  try {
    for (He = 0; He < he.length; He++) {
      const n = he[He];
      n && n.active !== !1 && nt(n, null, 14);
    }
  } finally {
    He = 0, he.length = 0, Xr(), zt = !1, Ss = null, (he.length || Ot.length) && Zr();
  }
}
function Ko(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || Z;
  let r = n;
  const l = t.startsWith("update:"), o = l && t.slice(7);
  if (o && o in s) {
    const d = `${o === "modelValue" ? "model" : o}Modifiers`, { number: h, trim: g } = s[d] || Z;
    g && (r = n.map((y) => oe(y) ? y.trim() : y)), h && (r = n.map(bn));
  }
  let i, c = s[i = Dn(t)] || s[i = Dn(St(t))];
  !c && l && (c = s[i = Dn(Mt(t))]), c && Ne(
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
    e.emitted[i] = !0, Ne(
      a,
      e,
      6,
      r
    );
  }
}
function el(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const l = e.emits;
  let o = {}, i = !1;
  if (!V(e)) {
    const c = (a) => {
      const d = el(a, t, !0);
      d && (i = !0, de(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !l && !i ? (Q(e) && s.set(e, null), null) : (L(l) ? l.forEach((c) => o[c] = null) : de(o, l), Q(e) && s.set(e, o), o);
}
function Pn(e, t) {
  return !e || !In(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, Mt(t)) || B(e, t));
}
let be = null, tl = null;
function En(e) {
  const t = be;
  return be = e, tl = e && e.type.__scopeId || null, t;
}
function Wo(e, t = be, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && sr(-1);
    const l = En(t);
    let o;
    try {
      o = e(...r);
    } finally {
      En(l), s._d && sr(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Bn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [l],
    slots: o,
    attrs: i,
    emit: c,
    render: a,
    renderCache: d,
    props: h,
    data: g,
    setupState: y,
    ctx: O,
    inheritAttrs: E
  } = e, R = En(e);
  let T, K;
  try {
    if (n.shapeFlag & 4) {
      const z = r || s, ne = z;
      T = $e(
        a.call(
          ne,
          z,
          d,
          h,
          y,
          g,
          O
        )
      ), K = i;
    } else {
      const z = t;
      T = $e(
        z.length > 1 ? z(
          h,
          { attrs: i, slots: o, emit: c }
        ) : z(
          h,
          null
        )
      ), K = t.props ? i : zo(i);
    }
  } catch (z) {
    Bt.length = 0, Nn(z, e, 1), T = Ge(yt);
  }
  let $ = T;
  if (K && E !== !1) {
    const z = Object.keys(K), { shapeFlag: ne } = $;
    z.length && ne & 7 && (l && z.some(ds) && (K = qo(
      K,
      l
    )), $ = Tt($, K, !1, !0));
  }
  return n.dirs && ($ = Tt($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && ($.transition = n.transition), T = $, En(R), T;
}
const zo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || In(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qo = (e, t) => {
  const n = {};
  for (const s in e)
    (!ds(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Go(e, t, n) {
  const { props: s, children: r, component: l } = e, { props: o, children: i, patchFlag: c } = t, a = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? zs(s, o, a) : !!o;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const g = d[h];
        if (o[g] !== s[g] && !Pn(a, g))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? zs(s, o, a) : !0 : !!o;
  return !1;
}
function zs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    if (t[l] !== e[l] && !Pn(n, l))
      return !0;
  }
  return !1;
}
function Jo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Yo = Symbol.for("v-ndc"), Qo = (e) => e.__isSuspense;
function Xo(e, t) {
  t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : Uo(e);
}
const Zo = Symbol.for("v-scx"), ei = () => mn(Zo);
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
function De(e, t, n) {
  return Rn(e, t, n);
}
function Rn(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: l,
  onTrack: o,
  onTrigger: i
} = Z) {
  if (t && l) {
    const N = t;
    t = (...Y) => {
      N(...Y), ne();
    };
  }
  const c = pe, a = (N) => s === !0 ? N : ht(N, s === !1 ? 1 : void 0);
  let d, h = !1, g = !1;
  if (fe(e) ? (d = () => e.value, h = xn(e)) : jt(e) ? (d = () => a(e), h = !0) : L(e) ? (g = !0, h = e.some((N) => jt(N) || xn(N)), d = () => e.map((N) => {
    if (fe(N))
      return N.value;
    if (jt(N))
      return a(N);
    if (V(N))
      return nt(N, c, 2);
  })) : V(e) ? t ? d = () => nt(e, c, 2) : d = () => (y && y(), Ne(
    e,
    c,
    3,
    [O]
  )) : d = Se, t && s) {
    const N = d;
    d = () => ht(N());
  }
  let y, O = (N) => {
    y = $.onStop = () => {
      nt(N, c, 4), y = $.onStop = void 0;
    };
  }, E;
  if ($n)
    if (O = Se, t ? n && Ne(t, c, 3, [
      d(),
      g ? [] : void 0,
      O
    ]) : d(), r === "sync") {
      const N = ei();
      E = N.__watcherHandles || (N.__watcherHandles = []);
    } else
      return Se;
  let R = g ? new Array(e.length).fill(un) : un;
  const T = () => {
    if (!(!$.active || !$.dirty))
      if (t) {
        const N = $.run();
        (s || h || (g ? N.some((Y, re) => st(Y, R[re])) : st(N, R))) && (y && y(), Ne(t, c, 3, [
          N,
          R === un ? void 0 : g && R[0] === un ? [] : R,
          O
        ]), R = N);
      } else
        $.run();
  };
  T.allowRecurse = !!t;
  let K;
  r === "sync" ? K = T : r === "post" ? K = () => _e(T, c && c.suspense) : (T.pre = !0, c && (T.id = c.uid), K = () => Cs(T));
  const $ = new vs(d, Se, K), z = Nr(), ne = () => {
    $.stop(), z && hs(z.effects, $);
  };
  return t ? n ? T() : R = $.run() : r === "post" ? _e(
    $.run.bind($),
    c && c.suspense
  ) : $.run(), E && E.push(ne), ne;
}
function ni(e, t, n) {
  const s = this.proxy, r = oe(e) ? e.includes(".") ? nl(s, e) : () => s[e] : e.bind(s, s);
  let l;
  V(t) ? l = t : (l = t.handler, n = t);
  const o = Xt(this), i = Rn(r, l.bind(s), n);
  return o(), i;
}
function nl(e, t) {
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
  if (n.add(e), t--, fe(e))
    ht(e.value, t, n);
  else if (L(e))
    for (let s = 0; s < e.length; s++)
      ht(e[s], t, n);
  else if (It(e) || Et(e))
    e.forEach((s) => {
      ht(s, t, n);
    });
  else if (Cr(e))
    for (const s in e)
      ht(e[s], t, n);
  return e;
}
function On(e, t) {
  if (be === null)
    return e;
  const n = Hn(be) || be.proxy, s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [l, o, i, c = Z] = t[r];
    l && (V(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && ht(o), s.push({
      dir: l,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: i,
      modifiers: c
    }));
  }
  return e;
}
function ct(e, t, n, s) {
  const r = e.dirs, l = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    l && (i.oldValue = l[o].value);
    let c = i.dir[s];
    c && (lt(), Ne(c, n, 8, [
      e.el,
      i,
      e,
      t
    ]), ot());
  }
}
const pn = (e) => !!e.type.__asyncLoader, sl = (e) => e.type.__isKeepAlive;
function si(e, t) {
  rl(e, "a", t);
}
function ri(e, t) {
  rl(e, "da", t);
}
function rl(e, t, n = pe) {
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
      sl(r.parent.vnode) && li(s, t, n, r), r = r.parent;
  }
}
function li(e, t, n, s) {
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
function Fn(e, t, n = pe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      lt();
      const i = Xt(n), c = Ne(t, n, e, o);
      return i(), ot(), c;
    });
    return s ? r.unshift(l) : r.push(l), l;
  }
}
const Ye = (e) => (t, n = pe) => (!$n || e === "sp") && Fn(e, (...s) => t(...s), n), oi = Ye("bm"), Vn = Ye("m"), ii = Ye("bu"), ci = Ye("u"), ui = Ye("bum"), kn = Ye("um"), ai = Ye("sp"), fi = Ye(
  "rtg"
), di = Ye(
  "rtc"
);
function hi(e, t = pe) {
  Fn("ec", e, t);
}
function gn(e, t, n, s) {
  let r;
  const l = n && n[s];
  if (L(e) || oe(e)) {
    r = new Array(e.length);
    for (let o = 0, i = e.length; o < i; o++)
      r[o] = t(e[o], o, void 0, l && l[o]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let o = 0; o < e; o++)
      r[o] = t(o + 1, o, void 0, l && l[o]);
  } else if (Q(e))
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
const Zn = (e) => e ? wl(e) ? Hn(e) || e.proxy : Zn(e.parent) : null, Ht = /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
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
  $watch: (e) => ni.bind(e)
}), Kn = (e, t) => e !== Z && !e.__isScriptSetup && B(e, t), pi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
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
        if (Kn(s, t))
          return o[t] = 1, s[t];
        if (r !== Z && B(r, t))
          return o[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && B(a, t))
          return o[t] = 3, l[t];
        if (n !== Z && B(n, t))
          return o[t] = 4, n[t];
        es && (o[t] = 0);
      }
    }
    const d = Ht[t];
    let h, g;
    if (d)
      return t === "$attrs" && we(e.attrs, "get", ""), d(e);
    if ((h = i.__cssModules) && (h = h[t]))
      return h;
    if (n !== Z && B(n, t))
      return o[t] = 4, n[t];
    if (g = c.config.globalProperties, B(g, t))
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: l } = e;
    return Kn(r, t) ? (r[t] = n, !0) : s !== Z && B(s, t) ? (s[t] = n, !0) : B(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: l }
  }, o) {
    let i;
    return !!n[o] || e !== Z && B(e, o) || Kn(t, o) || (i = l[0]) && B(i, o) || B(s, o) || B(Ht, o) || B(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : B(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ll() {
  return gi().attrs;
}
function gi() {
  const e = bl();
  return e.setupContext || (e.setupContext = El(e));
}
function qs(e) {
  return L(e) ? e.reduce(
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
    computed: l,
    methods: o,
    watch: i,
    provide: c,
    inject: a,
    created: d,
    beforeMount: h,
    mounted: g,
    beforeUpdate: y,
    updated: O,
    activated: E,
    deactivated: R,
    beforeDestroy: T,
    beforeUnmount: K,
    destroyed: $,
    unmounted: z,
    render: ne,
    renderTracked: N,
    renderTriggered: Y,
    errorCaptured: re,
    serverPrefetch: ye,
    expose: ce,
    inheritAttrs: ge,
    components: Pe,
    directives: Ue,
    filters: Re
  } = t;
  if (a && vi(a, s, null), o)
    for (const k in o) {
      const j = o[k];
      V(j) && (s[k] = j.bind(n));
    }
  if (r) {
    const k = r.call(n, n);
    Q(k) && (e.data = xs(k));
  }
  if (es = !0, l)
    for (const k in l) {
      const j = l[k], Be = V(j) ? j.bind(n, n) : V(j.get) ? j.get.bind(n, n) : Se, _t = !V(j) && V(j.set) ? j.set.bind(n) : Se, Ke = ve({
        get: Be,
        set: _t
      });
      Object.defineProperty(s, k, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (xe) => Ke.value = xe
      });
    }
  if (i)
    for (const k in i)
      ol(i[k], s, n, k);
  if (c) {
    const k = V(c) ? c.call(n) : c;
    Reflect.ownKeys(k).forEach((j) => {
      Ei(j, k[j]);
    });
  }
  d && Gs(d, e, "c");
  function D(k, j) {
    L(j) ? j.forEach((Be) => k(Be.bind(n))) : j && k(j.bind(n));
  }
  if (D(oi, h), D(Vn, g), D(ii, y), D(ci, O), D(si, E), D(ri, R), D(hi, re), D(di, N), D(fi, Y), D(ui, K), D(kn, z), D(ai, ye), L(ce))
    if (ce.length) {
      const k = e.exposed || (e.exposed = {});
      ce.forEach((j) => {
        Object.defineProperty(k, j, {
          get: () => n[j],
          set: (Be) => n[j] = Be
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ne && e.render === Se && (e.render = ne), ge != null && (e.inheritAttrs = ge), Pe && (e.components = Pe), Ue && (e.directives = Ue);
}
function vi(e, t, n = Se) {
  L(e) && (e = ts(e));
  for (const s in e) {
    const r = e[s];
    let l;
    Q(r) ? "default" in r ? l = mn(
      r.from || s,
      r.default,
      !0
    ) : l = mn(r.from || s) : l = mn(r), fe(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (o) => l.value = o
    }) : t[s] = l;
  }
}
function Gs(e, t, n) {
  Ne(
    L(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ol(e, t, n, s) {
  const r = s.includes(".") ? nl(n, s) : () => n[s];
  if (oe(e)) {
    const l = t[e];
    V(l) && De(r, l);
  } else if (V(e))
    De(r, e.bind(n));
  else if (Q(e))
    if (L(e))
      e.forEach((l) => ol(l, t, n, s));
    else {
      const l = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(l) && De(r, l, e);
    }
}
function Ts(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: l,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = l.get(t);
  let c;
  return i ? c = i : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (a) => Sn(c, a, o, !0)
  ), Sn(c, t, o)), Q(t) && l.set(t, c), c;
}
function Sn(e, t, n, s = !1) {
  const { mixins: r, extends: l } = t;
  l && Sn(e, l, n, !0), r && r.forEach(
    (o) => Sn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const i = yi[o] || n && n[o];
      e[o] = i ? i(e[o], t[o]) : t[o];
    }
  return e;
}
const yi = {
  data: Js,
  props: Ys,
  emits: Ys,
  methods: Vt,
  computed: Vt,
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
  components: Vt,
  directives: Vt,
  watch: bi,
  provide: Js,
  inject: _i
};
function Js(e, t) {
  return t ? e ? function() {
    return de(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _i(e, t) {
  return Vt(ts(e), ts(t));
}
function ts(e) {
  if (L(e)) {
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
function Vt(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ys(e, t) {
  return e ? L(e) && L(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
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
    n[s] = me(e[s], t[s]);
  return n;
}
function il() {
  return {
    app: null,
    config: {
      isNativeTag: Gl,
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
    V(s) || (s = de({}, s)), r != null && !Q(r) && (r = null);
    const l = il(), o = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const c = l.app = {
      _uid: wi++,
      _component: s,
      _props: r,
      _container: null,
      _context: l,
      _instance: null,
      version: qi,
      get config() {
        return l.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && V(a.install) ? (o.add(a), a.install(c, ...d)) : V(a) && (o.add(a), a(c, ...d))), c;
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
          const g = Ge(s, r);
          return g.appContext = l, h === !0 ? h = "svg" : h === !1 && (h = void 0), d && t ? t(g, a) : e(g, a, h), i = !0, c._container = a, a.__vue_app__ = c, Hn(g.component) || g.component.proxy;
        }
      },
      unmount() {
        i && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return l.provides[a] = d, c;
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
  if (pe) {
    let n = pe.provides;
    const s = pe.parent && pe.parent.provides;
    s === n && (n = pe.provides = Object.create(s)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const s = pe || be;
  if (s || Dt) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Dt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(s && s.proxy) : t;
  }
}
const cl = {}, ul = () => Object.create(cl), al = (e) => Object.getPrototypeOf(e) === cl;
function Oi(e, t, n, s = !1) {
  const r = {}, l = ul();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fl(e, t, r, l);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : Mo(r) : e.type.props ? e.props = r : e.props = l, e.attrs = l;
}
function Si(e, t, n, s) {
  const {
    props: r,
    attrs: l,
    vnode: { patchFlag: o }
  } = e, i = W(r), [c] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let g = d[h];
        if (Pn(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (c)
          if (B(l, g))
            y !== l[g] && (l[g] = y, a = !0);
          else {
            const O = St(g);
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
          y !== l[g] && (l[g] = y, a = !0);
      }
    }
  } else {
    fl(e, t, r, l) && (a = !0);
    let d;
    for (const h in i)
      (!t || !B(t, h) && ((d = Mt(h)) === h || !B(t, d))) && (c ? n && (n[h] !== void 0 || n[d] !== void 0) && (r[h] = ns(
        c,
        i,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (l !== i)
      for (const h in l)
        (!t || !B(t, h) && !0) && (delete l[h], a = !0);
  }
  a && qe(e.attrs, "set", "");
}
function fl(e, t, n, s) {
  const [r, l] = e.propsOptions;
  let o = !1, i;
  if (t)
    for (let c in t) {
      if (kt(c))
        continue;
      const a = t[c];
      let d;
      r && B(r, d = St(c)) ? !l || !l.includes(d) ? n[d] = a : (i || (i = {}))[d] = a : Pn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (l) {
    const c = W(n), a = i || Z;
    for (let d = 0; d < l.length; d++) {
      const h = l[d];
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
  return o;
}
function ns(e, t, n, s, r, l) {
  const o = e[n];
  if (o != null) {
    const i = B(o, "default");
    if (i && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && V(c)) {
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
    o[0] && (l && !i ? s = !1 : o[1] && (s === "" || s === Mt(n)) && (s = !0));
  }
  return s;
}
function dl(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const l = e.props, o = {}, i = [];
  let c = !1;
  if (!V(e)) {
    const d = (h) => {
      c = !0;
      const [g, y] = dl(h, t, !0);
      de(o, g), y && i.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!l && !c)
    return Q(e) && s.set(e, xt), xt;
  if (L(l))
    for (let d = 0; d < l.length; d++) {
      const h = St(l[d]);
      Qs(h) && (o[h] = Z);
    }
  else if (l)
    for (const d in l) {
      const h = St(d);
      if (Qs(h)) {
        const g = l[d], y = o[h] = L(g) || V(g) ? { type: g } : de({}, g);
        if (y) {
          const O = er(Boolean, y.type), E = er(String, y.type);
          y[0] = O > -1, y[1] = E < 0 || O < E, (O > -1 || B(y, "default")) && i.push(h);
        }
      }
    }
  const a = [o, i];
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
  return L(t) ? t.findIndex((n) => Zs(n, e)) : V(t) && Zs(t, e) ? 0 : -1;
}
const hl = (e) => e[0] === "_" || e === "$stable", As = (e) => L(e) ? e.map($e) : [$e(e)], Ci = (e, t, n) => {
  if (t._n)
    return t;
  const s = Wo((...r) => As(t(...r)), n);
  return s._c = !1, s;
}, pl = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (hl(r))
      continue;
    const l = e[r];
    if (V(l))
      t[r] = Ci(r, l, s);
    else if (l != null) {
      const o = As(l);
      t[r] = () => o;
    }
  }
}, gl = (e, t) => {
  const n = As(t);
  e.slots.default = () => n;
}, Ti = (e, t) => {
  const n = e.slots = ul();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (de(n, t), Ar(n, "_", s, !0)) : pl(t, n);
  } else
    t && gl(e, t);
}, Ai = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let l = !0, o = Z;
  if (s.shapeFlag & 32) {
    const i = t._;
    i ? n && i === 1 ? l = !1 : (de(r, t), !n && i === 1 && delete r._) : (l = !t.$stable, pl(t, r)), o = t;
  } else
    t && (gl(e, t), o = { default: 1 });
  if (l)
    for (const i in r)
      !hl(i) && o[i] == null && delete r[i];
};
function ss(e, t, n, s, r = !1) {
  if (L(e)) {
    e.forEach(
      (g, y) => ss(
        g,
        t && (L(t) ? t[y] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (pn(s) && !r)
    return;
  const l = s.shapeFlag & 4 ? Hn(s.component) || s.component.proxy : s.el, o = r ? null : l, { i, r: c } = e, a = t && t.r, d = i.refs === Z ? i.refs = {} : i.refs, h = i.setupState;
  if (a != null && a !== c && (oe(a) ? (d[a] = null, B(h, a) && (h[a] = null)) : fe(a) && (a.value = null)), V(c))
    nt(c, i, 12, [o, d]);
  else {
    const g = oe(c), y = fe(c);
    if (g || y) {
      const O = () => {
        if (e.f) {
          const E = g ? B(h, c) ? h[c] : d[c] : c.value;
          r ? L(E) && hs(E, l) : L(E) ? E.includes(l) || E.push(l) : g ? (d[c] = [l], B(h, c) && (h[c] = d[c])) : (c.value = [l], e.k && (d[e.k] = c.value));
        } else
          g ? (d[c] = o, B(h, c) && (h[c] = o)) : y && (c.value = o, e.k && (d[e.k] = o));
      };
      o ? (O.id = -1, _e(O, n)) : O();
    }
  }
}
function Ii() {
  typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (gs().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1);
}
const _e = Xo;
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
    patchProp: l,
    createElement: o,
    createText: i,
    createComment: c,
    setText: a,
    setElementText: d,
    parentNode: h,
    nextSibling: g,
    setScopeId: y = Se,
    insertStaticContent: O
  } = e, E = (u, f, p, m = null, v = null, w = null, S = void 0, b = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Rt(u, f) && (m = it(u), xe(u, v, w, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: _, ref: C, shapeFlag: M } = f;
    switch (_) {
      case jn:
        R(u, f, p, m);
        break;
      case yt:
        T(u, f, p, m);
        break;
      case zn:
        u == null && K(f, p, m, S);
        break;
      case ae:
        Pe(
          u,
          f,
          p,
          m,
          v,
          w,
          S,
          b,
          x
        );
        break;
      default:
        M & 1 ? ne(
          u,
          f,
          p,
          m,
          v,
          w,
          S,
          b,
          x
        ) : M & 6 ? Ue(
          u,
          f,
          p,
          m,
          v,
          w,
          S,
          b,
          x
        ) : (M & 64 || M & 128) && _.process(
          u,
          f,
          p,
          m,
          v,
          w,
          S,
          b,
          x,
          se
        );
    }
    C != null && v && ss(C, u && u.ref, w, f || u, !f);
  }, R = (u, f, p, m) => {
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
  }, T = (u, f, p, m) => {
    u == null ? s(
      f.el = c(f.children || ""),
      p,
      m
    ) : f.el = u.el;
  }, K = (u, f, p, m) => {
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
  }, ne = (u, f, p, m, v, w, S, b, x) => {
    f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), u == null ? N(
      f,
      p,
      m,
      v,
      w,
      S,
      b,
      x
    ) : ye(
      u,
      f,
      v,
      w,
      S,
      b,
      x
    );
  }, N = (u, f, p, m, v, w, S, b) => {
    let x, _;
    const { props: C, shapeFlag: M, transition: A, dirs: F } = u;
    if (x = u.el = o(
      u.type,
      w,
      C && C.is,
      C
    ), M & 8 ? d(x, u.children) : M & 16 && re(
      u.children,
      x,
      null,
      m,
      v,
      Wn(u, w),
      S,
      b
    ), F && ct(u, null, m, "created"), Y(x, u, u.scopeId, S, m), C) {
      for (const G in C)
        G !== "value" && !kt(G) && l(
          x,
          G,
          null,
          C[G],
          w,
          u.children,
          m,
          v,
          Ce
        );
      "value" in C && l(x, "value", null, C.value, w), (_ = C.onVnodeBeforeMount) && Ve(_, m, u);
    }
    F && ct(u, null, m, "beforeMount");
    const H = Ni(v, A);
    H && A.beforeEnter(x), s(x, f, p), ((_ = C && C.onVnodeMounted) || H || F) && _e(() => {
      _ && Ve(_, m, u), H && A.enter(x), F && ct(u, null, m, "mounted");
    }, v);
  }, Y = (u, f, p, m, v) => {
    if (p && y(u, p), m)
      for (let w = 0; w < m.length; w++)
        y(u, m[w]);
    if (v) {
      let w = v.subTree;
      if (f === w) {
        const S = v.vnode;
        Y(
          u,
          S,
          S.scopeId,
          S.slotScopeIds,
          v.parent
        );
      }
    }
  }, re = (u, f, p, m, v, w, S, b, x = 0) => {
    for (let _ = x; _ < u.length; _++) {
      const C = u[_] = b ? Ze(u[_]) : $e(u[_]);
      E(
        null,
        C,
        f,
        p,
        m,
        v,
        w,
        S,
        b
      );
    }
  }, ye = (u, f, p, m, v, w, S) => {
    const b = f.el = u.el;
    let { patchFlag: x, dynamicChildren: _, dirs: C } = f;
    x |= u.patchFlag & 16;
    const M = u.props || Z, A = f.props || Z;
    let F;
    if (p && ut(p, !1), (F = A.onVnodeBeforeUpdate) && Ve(F, p, f, u), C && ct(f, u, p, "beforeUpdate"), p && ut(p, !0), _ ? ce(
      u.dynamicChildren,
      _,
      b,
      p,
      m,
      Wn(f, v),
      w
    ) : S || j(
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
        ge(
          b,
          f,
          M,
          A,
          p,
          m,
          v
        );
      else if (x & 2 && M.class !== A.class && l(b, "class", null, A.class, v), x & 4 && l(b, "style", M.style, A.style, v), x & 8) {
        const H = f.dynamicProps;
        for (let G = 0; G < H.length; G++) {
          const te = H[G], ue = M[te], Ie = A[te];
          (Ie !== ue || te === "value") && l(
            b,
            te,
            ue,
            Ie,
            v,
            u.children,
            p,
            m,
            Ce
          );
        }
      }
      x & 1 && u.children !== f.children && d(b, f.children);
    } else
      !S && _ == null && ge(
        b,
        f,
        M,
        A,
        p,
        m,
        v
      );
    ((F = A.onVnodeUpdated) || C) && _e(() => {
      F && Ve(F, p, f, u), C && ct(f, u, p, "updated");
    }, m);
  }, ce = (u, f, p, m, v, w, S) => {
    for (let b = 0; b < f.length; b++) {
      const x = u[b], _ = f[b], C = x.el && (x.type === ae || !Rt(x, _) || x.shapeFlag & 70) ? h(x.el) : p;
      E(
        x,
        _,
        C,
        null,
        m,
        v,
        w,
        S,
        !0
      );
    }
  }, ge = (u, f, p, m, v, w, S) => {
    if (p !== m) {
      if (p !== Z)
        for (const b in p)
          !kt(b) && !(b in m) && l(
            u,
            b,
            p[b],
            null,
            S,
            f.children,
            v,
            w,
            Ce
          );
      for (const b in m) {
        if (kt(b))
          continue;
        const x = m[b], _ = p[b];
        x !== _ && b !== "value" && l(
          u,
          b,
          _,
          x,
          S,
          f.children,
          v,
          w,
          Ce
        );
      }
      "value" in m && l(u, "value", p.value, m.value, S);
    }
  }, Pe = (u, f, p, m, v, w, S, b, x) => {
    const _ = f.el = u ? u.el : i(""), C = f.anchor = u ? u.anchor : i("");
    let { patchFlag: M, dynamicChildren: A, slotScopeIds: F } = f;
    F && (b = b ? b.concat(F) : F), u == null ? (s(_, p, m), s(C, p, m), re(
      f.children || [],
      p,
      C,
      v,
      w,
      S,
      b,
      x
    )) : M > 0 && M & 64 && A && u.dynamicChildren ? (ce(
      u.dynamicChildren,
      A,
      p,
      v,
      w,
      S,
      b
    ), (f.key != null || v && f === v.subTree) && Is(
      u,
      f,
      !0
    )) : j(
      u,
      f,
      p,
      C,
      v,
      w,
      S,
      b,
      x
    );
  }, Ue = (u, f, p, m, v, w, S, b, x) => {
    f.slotScopeIds = b, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      p,
      m,
      S,
      x
    ) : Re(
      f,
      p,
      m,
      v,
      w,
      S,
      x
    ) : ie(u, f, x);
  }, Re = (u, f, p, m, v, w, S) => {
    const b = u.component = Ui(
      u,
      m,
      v
    );
    if (sl(u) && (b.ctx.renderer = se), Bi(b), b.asyncDep) {
      if (v && v.registerDep(b, D), !u.el) {
        const x = b.subTree = Ge(yt);
        T(null, x, f, p);
      }
    } else
      D(
        b,
        u,
        f,
        p,
        v,
        w,
        S
      );
  }, ie = (u, f, p) => {
    const m = f.component = u.component;
    if (Go(u, f, p))
      if (m.asyncDep && !m.asyncResolved) {
        k(m, f, p);
        return;
      } else
        m.next = f, Do(m.update), m.effect.dirty = !0, m.update();
    else
      f.el = u.el, m.vnode = f;
  }, D = (u, f, p, m, v, w, S) => {
    const b = () => {
      if (u.isMounted) {
        let { next: C, bu: M, u: A, parent: F, vnode: H } = u;
        {
          const bt = ml(u);
          if (bt) {
            C && (C.el = H.el, k(u, C, S)), bt.asyncDep.then(() => {
              u.isUnmounted || b();
            });
            return;
          }
        }
        let G = C, te;
        ut(u, !1), C ? (C.el = H.el, k(u, C, S)) : C = H, M && dn(M), (te = C.props && C.props.onVnodeBeforeUpdate) && Ve(te, F, C, H), ut(u, !0);
        const ue = Bn(u), Ie = u.subTree;
        u.subTree = ue, E(
          Ie,
          ue,
          h(Ie.el),
          it(Ie),
          u,
          v,
          w
        ), C.el = ue.el, G === null && Jo(u, ue.el), A && _e(A, v), (te = C.props && C.props.onVnodeUpdated) && _e(
          () => Ve(te, F, C, H),
          v
        );
      } else {
        let C;
        const { el: M, props: A } = f, { bm: F, m: H, parent: G } = u, te = pn(f);
        if (ut(u, !1), F && dn(F), !te && (C = A && A.onVnodeBeforeMount) && Ve(C, G, f), ut(u, !0), M && ee) {
          const ue = () => {
            u.subTree = Bn(u), ee(
              M,
              u.subTree,
              u,
              v,
              null
            );
          };
          te ? f.type.__asyncLoader().then(
            () => !u.isUnmounted && ue()
          ) : ue();
        } else {
          const ue = u.subTree = Bn(u);
          E(
            null,
            ue,
            p,
            m,
            u,
            v,
            w
          ), f.el = ue.el;
        }
        if (H && _e(H, v), !te && (C = A && A.onVnodeMounted)) {
          const ue = f;
          _e(
            () => Ve(C, G, ue),
            v
          );
        }
        (f.shapeFlag & 256 || G && pn(G.vnode) && G.vnode.shapeFlag & 256) && u.a && _e(u.a, v), u.isMounted = !0, f = p = m = null;
      }
    }, x = u.effect = new vs(
      b,
      Se,
      () => Cs(_),
      u.scope
    ), _ = u.update = () => {
      x.dirty && x.run();
    };
    _.id = u.uid, ut(u, !0), _();
  }, k = (u, f, p) => {
    f.component = u;
    const m = u.vnode.props;
    u.vnode = f, u.next = null, Si(u, f.props, m, p), Ai(u, f.children, p), lt(), Ws(u), ot();
  }, j = (u, f, p, m, v, w, S, b, x = !1) => {
    const _ = u && u.children, C = u ? u.shapeFlag : 0, M = f.children, { patchFlag: A, shapeFlag: F } = f;
    if (A > 0) {
      if (A & 128) {
        _t(
          _,
          M,
          p,
          m,
          v,
          w,
          S,
          b,
          x
        );
        return;
      } else if (A & 256) {
        Be(
          _,
          M,
          p,
          m,
          v,
          w,
          S,
          b,
          x
        );
        return;
      }
    }
    F & 8 ? (C & 16 && Ce(_, v, w), M !== _ && d(p, M)) : C & 16 ? F & 16 ? _t(
      _,
      M,
      p,
      m,
      v,
      w,
      S,
      b,
      x
    ) : Ce(_, v, w, !0) : (C & 8 && d(p, ""), F & 16 && re(
      M,
      p,
      m,
      v,
      w,
      S,
      b,
      x
    ));
  }, Be = (u, f, p, m, v, w, S, b, x) => {
    u = u || xt, f = f || xt;
    const _ = u.length, C = f.length, M = Math.min(_, C);
    let A;
    for (A = 0; A < M; A++) {
      const F = f[A] = x ? Ze(f[A]) : $e(f[A]);
      E(
        u[A],
        F,
        p,
        null,
        v,
        w,
        S,
        b,
        x
      );
    }
    _ > C ? Ce(
      u,
      v,
      w,
      !0,
      !1,
      M
    ) : re(
      f,
      p,
      m,
      v,
      w,
      S,
      b,
      x,
      M
    );
  }, _t = (u, f, p, m, v, w, S, b, x) => {
    let _ = 0;
    const C = f.length;
    let M = u.length - 1, A = C - 1;
    for (; _ <= M && _ <= A; ) {
      const F = u[_], H = f[_] = x ? Ze(f[_]) : $e(f[_]);
      if (Rt(F, H))
        E(
          F,
          H,
          p,
          null,
          v,
          w,
          S,
          b,
          x
        );
      else
        break;
      _++;
    }
    for (; _ <= M && _ <= A; ) {
      const F = u[M], H = f[A] = x ? Ze(f[A]) : $e(f[A]);
      if (Rt(F, H))
        E(
          F,
          H,
          p,
          null,
          v,
          w,
          S,
          b,
          x
        );
      else
        break;
      M--, A--;
    }
    if (_ > M) {
      if (_ <= A) {
        const F = A + 1, H = F < C ? f[F].el : m;
        for (; _ <= A; )
          E(
            null,
            f[_] = x ? Ze(f[_]) : $e(f[_]),
            p,
            H,
            v,
            w,
            S,
            b,
            x
          ), _++;
      }
    } else if (_ > A)
      for (; _ <= M; )
        xe(u[_], v, w, !0), _++;
    else {
      const F = _, H = _, G = /* @__PURE__ */ new Map();
      for (_ = H; _ <= A; _++) {
        const Ee = f[_] = x ? Ze(f[_]) : $e(f[_]);
        Ee.key != null && G.set(Ee.key, _);
      }
      let te, ue = 0;
      const Ie = A - H + 1;
      let bt = !1, Ps = 0;
      const Pt = new Array(Ie);
      for (_ = 0; _ < Ie; _++)
        Pt[_] = 0;
      for (_ = F; _ <= M; _++) {
        const Ee = u[_];
        if (ue >= Ie) {
          xe(Ee, v, w, !0);
          continue;
        }
        let Fe;
        if (Ee.key != null)
          Fe = G.get(Ee.key);
        else
          for (te = H; te <= A; te++)
            if (Pt[te - H] === 0 && Rt(Ee, f[te])) {
              Fe = te;
              break;
            }
        Fe === void 0 ? xe(Ee, v, w, !0) : (Pt[Fe - H] = _ + 1, Fe >= Ps ? Ps = Fe : bt = !0, E(
          Ee,
          f[Fe],
          p,
          null,
          v,
          w,
          S,
          b,
          x
        ), ue++);
      }
      const Rs = bt ? Pi(Pt) : xt;
      for (te = Rs.length - 1, _ = Ie - 1; _ >= 0; _--) {
        const Ee = H + _, Fe = f[Ee], Fs = Ee + 1 < C ? f[Ee + 1].el : m;
        Pt[_] === 0 ? E(
          null,
          Fe,
          p,
          Fs,
          v,
          w,
          S,
          b,
          x
        ) : bt && (te < 0 || _ !== Rs[te] ? Ke(Fe, p, Fs, 2) : te--);
      }
    }
  }, Ke = (u, f, p, m, v = null) => {
    const { el: w, type: S, transition: b, children: x, shapeFlag: _ } = u;
    if (_ & 6) {
      Ke(u.component.subTree, f, p, m);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, p, m);
      return;
    }
    if (_ & 64) {
      S.move(u, f, p, se);
      return;
    }
    if (S === ae) {
      s(w, f, p);
      for (let M = 0; M < x.length; M++)
        Ke(x[M], f, p, m);
      s(u.anchor, f, p);
      return;
    }
    if (S === zn) {
      $(u, f, p);
      return;
    }
    if (m !== 2 && _ & 1 && b)
      if (m === 0)
        b.beforeEnter(w), s(w, f, p), _e(() => b.enter(w), v);
      else {
        const { leave: M, delayLeave: A, afterLeave: F } = b, H = () => s(w, f, p), G = () => {
          M(w, () => {
            H(), F && F();
          });
        };
        A ? A(w, H, G) : G();
      }
    else
      s(w, f, p);
  }, xe = (u, f, p, m = !1, v = !1) => {
    const {
      type: w,
      props: S,
      ref: b,
      children: x,
      dynamicChildren: _,
      shapeFlag: C,
      patchFlag: M,
      dirs: A
    } = u;
    if (b != null && ss(b, null, p, u, !0), C & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const F = C & 1 && A, H = !pn(u);
    let G;
    if (H && (G = S && S.onVnodeBeforeUnmount) && Ve(G, f, u), C & 6)
      tn(u.component, p, m);
    else {
      if (C & 128) {
        u.suspense.unmount(p, m);
        return;
      }
      F && ct(u, null, f, "beforeUnmount"), C & 64 ? u.type.remove(
        u,
        f,
        p,
        v,
        se,
        m
      ) : _ && (w !== ae || M > 0 && M & 64) ? Ce(
        _,
        f,
        p,
        !1,
        !0
      ) : (w === ae && M & 384 || !v && C & 16) && Ce(x, f, p), m && Nt(u);
    }
    (H && (G = S && S.onVnodeUnmounted) || F) && _e(() => {
      G && Ve(G, f, u), F && ct(u, null, f, "unmounted");
    }, p);
  }, Nt = (u) => {
    const { type: f, el: p, anchor: m, transition: v } = u;
    if (f === ae) {
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
      const { leave: S, delayLeave: b } = v, x = () => S(p, w);
      b ? b(u.el, w, x) : x();
    } else
      w();
  }, en = (u, f) => {
    let p;
    for (; u !== f; )
      p = g(u), r(u), u = p;
    r(f);
  }, tn = (u, f, p) => {
    const { bum: m, scope: v, update: w, subTree: S, um: b } = u;
    m && dn(m), v.stop(), w && (w.active = !1, xe(S, u, f, p)), b && _e(b, f), _e(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ce = (u, f, p, m = !1, v = !1, w = 0) => {
    for (let S = w; S < u.length; S++)
      xe(u[S], f, p, m, v);
  }, it = (u) => u.shapeFlag & 6 ? it(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : g(u.anchor || u.el);
  let I = !1;
  const P = (u, f, p) => {
    u == null ? f._vnode && xe(f._vnode, null, null, !0) : E(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      p
    ), I || (I = !0, Ws(), Xr(), I = !1), f._vnode = u;
  }, se = {
    p: E,
    um: xe,
    m: Ke,
    r: Nt,
    mt: Re,
    mc: re,
    pc: j,
    pbc: ce,
    n: it,
    o: e
  };
  let We, ee;
  return t && ([We, ee] = t(
    se
  )), {
    render: P,
    hydrate: We,
    createApp: xi(P, We)
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
  if (L(s) && L(r))
    for (let l = 0; l < s.length; l++) {
      const o = s[l];
      let i = r[l];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[l] = Ze(r[l]), i.el = o.el), n || Is(o, i)), i.type === jn && (i.el = o.el);
    }
}
function Pi(e) {
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
function ml(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ml(t);
}
const Ri = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), tr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, nr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, rs = (e, t) => {
  const n = e && e.to;
  return oe(n) ? t ? t(n) : null : n;
}, Fi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, l, o, i, c, a) {
    const {
      mc: d,
      pc: h,
      pbc: g,
      o: { insert: y, querySelector: O, createText: E, createComment: R }
    } = a, T = Ut(t.props);
    let { shapeFlag: K, children: $, dynamicChildren: z } = t;
    if (e == null) {
      const ne = t.el = E(""), N = t.anchor = E("");
      y(ne, n, s), y(N, n, s);
      const Y = t.target = rs(t.props, O), re = t.targetAnchor = E("");
      Y && (y(re, Y), o === "svg" || tr(Y) ? o = "svg" : (o === "mathml" || nr(Y)) && (o = "mathml"));
      const ye = (ce, ge) => {
        K & 16 && d(
          $,
          ce,
          ge,
          r,
          l,
          o,
          i,
          c
        );
      };
      T ? ye(n, N) : Y && ye(Y, re);
    } else {
      t.el = e.el;
      const ne = t.anchor = e.anchor, N = t.target = e.target, Y = t.targetAnchor = e.targetAnchor, re = Ut(e.props), ye = re ? n : N, ce = re ? ne : Y;
      if (o === "svg" || tr(N) ? o = "svg" : (o === "mathml" || nr(N)) && (o = "mathml"), z ? (g(
        e.dynamicChildren,
        z,
        ye,
        r,
        l,
        o,
        i
      ), Is(e, t, !0)) : c || h(
        e,
        t,
        ye,
        ce,
        r,
        l,
        o,
        i,
        !1
      ), T)
        re ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : an(
          t,
          n,
          ne,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ge = t.target = rs(
          t.props,
          O
        );
        ge && an(
          t,
          ge,
          null,
          a,
          0
        );
      } else
        re && an(
          t,
          N,
          Y,
          a,
          1
        );
    }
    vl(t);
  },
  remove(e, t, n, s, { um: r, o: { remove: l } }, o) {
    const { shapeFlag: i, children: c, anchor: a, targetAnchor: d, target: h, props: g } = e;
    if (h && l(d), o && l(a), i & 16) {
      const y = o || !Ut(g);
      for (let O = 0; O < c.length; O++) {
        const E = c[O];
        r(
          E,
          t,
          n,
          y,
          !!E.dynamicChildren
        );
      }
    }
  },
  move: an,
  hydrate: Vi
};
function an(e, t, n, { o: { insert: s }, m: r }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: i, shapeFlag: c, children: a, props: d } = e, h = l === 2;
  if (h && s(o, t, n), (!h || Ut(d)) && c & 16)
    for (let g = 0; g < a.length; g++)
      r(
        a[g],
        t,
        n,
        2
      );
  h && s(i, t, n);
}
function Vi(e, t, n, s, r, l, {
  o: { nextSibling: o, parentNode: i, querySelector: c }
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
        let g = h;
        for (; g; )
          if (g = o(g), g && g.nodeType === 8 && g.data === "teleport anchor") {
            t.targetAnchor = g, d._lpa = t.targetAnchor && o(t.targetAnchor);
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
    vl(t);
  }
  return t.anchor && o(t.anchor);
}
const ls = Fi;
function vl(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const ae = Symbol.for("v-fgt"), jn = Symbol.for("v-txt"), yt = Symbol.for("v-cmt"), zn = Symbol.for("v-stc"), Bt = [];
let Le = null;
function q(e = !1) {
  Bt.push(Le = e ? null : []);
}
function ki() {
  Bt.pop(), Le = Bt[Bt.length - 1] || null;
}
let Jt = 1;
function sr(e) {
  Jt += e;
}
function yl(e) {
  return e.dynamicChildren = Jt > 0 ? Le || xt : null, ki(), Jt > 0 && Le && Le.push(e), e;
}
function X(e, t, n, s, r, l) {
  return yl(
    le(
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
function Cn(e, t, n, s, r) {
  return yl(
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
function ji(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _l = ({ key: e }) => e != null ? e : null, vn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || fe(e) || V(e) ? { i: be, r: e, k: t, f: !!n } : e : null);
function le(e, t = null, n = null, s = 0, r = null, l = e === ae ? 0 : 1, o = !1, i = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _l(t),
    ref: t && vn(t),
    scopeId: tl,
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
    ctx: be
  };
  return i ? (Ls(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= oe(n) ? 8 : 16), Jt > 0 && !o && Le && (c.patchFlag > 0 || l & 6) && c.patchFlag !== 32 && Le.push(c), c;
}
const Ge = $i;
function $i(e, t = null, n = null, s = 0, r = null, l = !1) {
  if ((!e || e === Yo) && (e = yt), ji(e)) {
    const i = Tt(
      e,
      t,
      !0
    );
    return n && Ls(i, n), Jt > 0 && !l && Le && (i.shapeFlag & 6 ? Le[Le.indexOf(e)] = i : Le.push(i)), i.patchFlag |= -2, i;
  }
  if (zi(e) && (e = e.__vccOpts), t) {
    t = Ms(t);
    let { class: i, style: c } = t;
    i && !oe(i) && (t.class = mt(i)), Q(c) && (Wr(c) && !L(c) && (c = de({}, c)), t.style = Lt(c));
  }
  const o = oe(e) ? 1 : Qo(e) ? 128 : Ri(e) ? 64 : Q(e) ? 4 : V(e) ? 2 : 0;
  return le(
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
function Ms(e) {
  return e ? Wr(e) || al(e) ? de({}, e) : e : null;
}
function Tt(e, t, n = !1, s = !1) {
  const { props: r, ref: l, patchFlag: o, children: i, transition: c } = e, a = t ? Yt(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && _l(a),
    ref: t && t.ref ? n && l ? L(l) ? l.concat(vn(t)) : [l, vn(t)] : vn(t) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ae ? o === -1 ? 16 : o | 16 : o,
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
function os(e = " ", t = 0) {
  return Ge(jn, null, e, t);
}
function Te(e = "", t = !1) {
  return t ? (q(), Cn(yt, null, e)) : Ge(yt, null, e);
}
function $e(e) {
  return e == null || typeof e == "boolean" ? Ge(yt) : L(e) ? Ge(
    ae,
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
  else if (L(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ls(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !al(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    V(t) ? (t = { default: t, _ctx: be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [os(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = mt([t.class, s.class]));
      else if (r === "style")
        t.style = Lt([t.style, s.style]);
      else if (In(r)) {
        const l = t[r], o = s[r];
        o && l !== o && !(L(l) && l.includes(o)) && (t[r] = l ? [].concat(l, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ve(e, t, n, s = null) {
  Ne(e, t, 7, [
    n,
    s
  ]);
}
const Hi = il();
let Di = 0;
function Ui(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Hi, l = {
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
    scope: new oo(
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
    propsOptions: dl(s, r),
    emitsOptions: el(s, r),
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Ko.bind(null, l), e.ce && e.ce(l), l;
}
let pe = null;
const bl = () => pe || be;
let Tn, is;
{
  const e = gs(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (l) => {
      r.length > 1 ? r.forEach((o) => o(l)) : r[0](l);
    };
  };
  Tn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), is = t(
    "__VUE_SSR_SETTERS__",
    (n) => $n = n
  );
}
const Xt = (e) => {
  const t = pe;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(t);
  };
}, rr = () => {
  pe && pe.scope.off(), Tn(null);
};
function wl(e) {
  return e.vnode.shapeFlag & 4;
}
let $n = !1;
function Bi(e, t = !1) {
  t && is(t);
  const { props: n, children: s } = e.vnode, r = wl(e);
  Oi(e, n, r, t), Ti(e, s);
  const l = r ? Ki(e, t) : void 0;
  return t && is(!1), l;
}
function Ki(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pi);
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? El(e) : null, l = Xt(e);
    lt();
    const o = nt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (ot(), l(), Or(o)) {
      if (o.then(rr, rr), t)
        return o.then((i) => {
          lr(e, i, t);
        }).catch((i) => {
          Nn(i, e, 0);
        });
      e.asyncDep = o;
    } else
      lr(e, o, t);
  } else
    xl(e, t);
}
function lr(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = Jr(t)), xl(e, n);
}
let or;
function xl(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && or && !s.render) {
      const r = s.template || Ts(e).template;
      if (r) {
        const { isCustomElement: l, compilerOptions: o } = e.appContext.config, { delimiters: i, compilerOptions: c } = s, a = de(
          de(
            {
              isCustomElement: l,
              delimiters: i
            },
            o
          ),
          c
        );
        s.render = or(r, a);
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
      ot(), r();
    }
  }
}
const Wi = {
  get(e, t) {
    return we(e, "get", ""), e[t];
  }
};
function El(e) {
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
    return e.exposeProxy || (e.exposeProxy = new Proxy(Jr(Lo(e.exposed)), {
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
  return V(e) && "__vccOpts" in e;
}
const ve = (e, t) => No(e, t, $n), qi = "3.4.27";
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Gi = "http://www.w3.org/2000/svg", Ji = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null, ir = et && /* @__PURE__ */ et.createElement("template"), Yi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? et.createElementNS(Gi, e) : t === "mathml" ? et.createElementNS(Ji, e) : et.createElement(e, n ? { is: n } : void 0);
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
  insertStaticContent(e, t, n, s, r, l) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === l || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === l || !(r = r.nextSibling)); )
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
      o ? o.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Qi = Symbol("_vtc");
function Xi(e, t, n) {
  const s = e[Qi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const An = Symbol("_vod"), Ol = Symbol("_vsh"), Sl = {
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
  e.style.display = t ? e[An] : "none", e[Ol] = !t;
}
const Zi = Symbol(""), ec = /(^|;)\s*display\s*:/;
function tc(e, t, n) {
  const s = e.style, r = oe(n);
  let l = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const o of t.split(";")) {
          const i = o.slice(0, o.indexOf(":")).trim();
          n[i] == null && yn(s, i, "");
        }
      else
        for (const o in t)
          n[o] == null && yn(s, o, "");
    for (const o in n)
      o === "display" && (l = !0), yn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Zi];
      o && (n += ";" + o), s.cssText = n, l = ec.test(n);
    }
  } else
    t && e.removeAttribute("style");
  An in e && (e[An] = l ? s.display : "", e[Ol] && (s.display = "none"));
}
const cr = /\s*!important$/;
function yn(e, t, n) {
  if (L(n))
    n.forEach((s) => yn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = nc(e, t);
    cr.test(n) ? e.setProperty(
      Mt(s),
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
  let s = St(t);
  if (s !== "filter" && s in e)
    return qn[t] = s;
  s = Tr(s);
  for (let r = 0; r < ur.length; r++) {
    const l = ur[r] + s;
    if (l in e)
      return qn[t] = l;
  }
  return t;
}
const ar = "http://www.w3.org/1999/xlink";
function sc(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ar, t.slice(6, t.length)) : e.setAttributeNS(ar, t, n);
  else {
    const l = ro(t);
    n == null || l && !Mr(n) ? e.removeAttribute(t) : e.setAttribute(t, l ? "" : n);
  }
}
function rc(e, t, n, s, r, l, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, r, l), e[t] = n == null ? "" : n;
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
function lc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const fr = Symbol("_vei");
function oc(e, t, n, s, r = null) {
  const l = e[fr] || (e[fr] = {}), o = l[t];
  if (s && o)
    o.value = s;
  else {
    const [i, c] = ic(t);
    if (s) {
      const a = l[t] = ac(
        s,
        r
      );
      ze(e, i, a, c);
    } else
      o && (lc(e, i, o, c), l[t] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
let Gn = 0;
const cc = /* @__PURE__ */ Promise.resolve(), uc = () => Gn || (cc.then(() => Gn = 0), Gn = Date.now());
function ac(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ne(
      fc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = uc(), n;
}
function fc(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dc = (e, t, n, s, r, l, o, i, c) => {
  const a = r === "svg";
  t === "class" ? Xi(e, s, a) : t === "style" ? tc(e, n, s) : In(t) ? ds(t) || oc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hc(e, t, s, a)) ? rc(
    e,
    t,
    s,
    l,
    o,
    i,
    c
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), sc(e, t, s, a));
};
function hc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hr(t) && V(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return hr(t) && oe(n) ? !1 : t in e;
}
const rt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return L(t) ? (n) => dn(t, n) : t;
};
function pc(e) {
  e.target.composing = !0;
}
function pr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ae = Symbol("_assign"), cs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Ae] = rt(r);
    const l = s || r.props && r.props.type === "number";
    ze(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), l && (i = bn(i)), e[Ae](i);
    }), n && ze(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ze(e, "compositionstart", pc), ze(e, "compositionend", pr), ze(e, "change", pr));
  },
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: s, number: r } }, l) {
    if (e[Ae] = rt(l), e.composing)
      return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? bn(e.value) : e.value, i = t == null ? "" : t;
    o !== i && (document.activeElement === e && e.type !== "range" && (n || s && e.value.trim() === i) || (e.value = i));
  }
}, gc = {
  deep: !0,
  created(e, t, n) {
    e[Ae] = rt(n), ze(e, "change", () => {
      const s = e._modelValue, r = At(e), l = e.checked, o = e[Ae];
      if (L(s)) {
        const i = ms(s, r), c = i !== -1;
        if (l && !c)
          o(s.concat(r));
        else if (!l && c) {
          const a = [...s];
          a.splice(i, 1), o(a);
        }
      } else if (It(s)) {
        const i = new Set(s);
        l ? i.add(r) : i.delete(r), o(i);
      } else
        o(Cl(e, l));
    });
  },
  mounted: gr,
  beforeUpdate(e, t, n) {
    e[Ae] = rt(n), gr(e, t, n);
  }
};
function gr(e, { value: t, oldValue: n }, s) {
  e._modelValue = t, L(t) ? e.checked = ms(t, s.props.value) > -1 : It(t) ? e.checked = t.has(s.props.value) : t !== n && (e.checked = vt(t, Cl(e, !0)));
}
const mc = {
  created(e, { value: t }, n) {
    e.checked = vt(t, n.props.value), e[Ae] = rt(n), ze(e, "change", () => {
      e[Ae](At(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Ae] = rt(s), t !== n && (e.checked = vt(t, s.props.value));
  }
}, vc = {
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = It(t);
    ze(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? bn(At(o)) : At(o)
      );
      e[Ae](
        e.multiple ? r ? new Set(l) : l : l[0]
      ), e._assigning = !0, Ct(() => {
        e._assigning = !1;
      });
    }), e[Ae] = rt(s);
  },
  mounted(e, { value: t, modifiers: { number: n } }) {
    mr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Ae] = rt(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || mr(e, t);
  }
};
function mr(e, t, n) {
  const s = e.multiple, r = L(t);
  if (!(s && !r && !It(t))) {
    for (let l = 0, o = e.options.length; l < o; l++) {
      const i = e.options[l], c = At(i);
      if (s)
        if (r) {
          const a = typeof c;
          a === "string" || a === "number" ? i.selected = t.some((d) => String(d) === String(c)) : i.selected = ms(t, c) > -1;
        } else
          i.selected = t.has(c);
      else if (vt(At(i), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function At(e) {
  return "_value" in e ? e._value : e.value;
}
function Cl(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const yc = {
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
function _c(e, t) {
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
  const o = _c(
    e.tagName,
    n.props && n.props.type
  )[r];
  o && o(e, t, n, s);
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
  return n[s] || (n[s] = (r, ...l) => {
    for (let o = 0; o < t.length; o++) {
      const i = wc[t[o]];
      if (i && i(r, t))
        return;
    }
    return e(r, ...l);
  });
}, xc = /* @__PURE__ */ de({ patchProp: dc }, Yi);
let vr;
function Ec() {
  return vr || (vr = Mi(xc));
}
const Tl = (...e) => {
  const t = Ec().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Sc(s);
    if (!r)
      return;
    const l = t._component;
    !V(l) && !l.render && !l.template && (l.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, Oc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function Oc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sc(e) {
  return oe(e) ? document.querySelector(e) : e;
}
var yr;
const Zt = typeof window < "u";
Zt && ((yr = window == null ? void 0 : window.navigator) == null ? void 0 : yr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Cc(e) {
  return typeof e == "function" ? e() : U(e);
}
function Tc(e) {
  return e;
}
function Ac(e) {
  return Nr() ? (co(e), !0) : !1;
}
function Ic(e, t = !0) {
  bl() ? Vn(e) : t ? e() : Ct(e);
}
function _n(e) {
  var t;
  const n = Cc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Al = Zt ? window : void 0;
Zt && window.document;
Zt && window.navigator;
Zt && window.location;
function Mc(e, t = !1) {
  const n = J(), s = () => n.value = Boolean(e());
  return s(), Ic(s, t), n;
}
const us = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, as = "__vueuse_ssr_handlers__";
us[as] = us[as] || {};
us[as];
var _r = Object.getOwnPropertySymbols, Lc = Object.prototype.hasOwnProperty, Nc = Object.prototype.propertyIsEnumerable, Pc = (e, t) => {
  var n = {};
  for (var s in e)
    Lc.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && _r)
    for (var s of _r(e))
      t.indexOf(s) < 0 && Nc.call(e, s) && (n[s] = e[s]);
  return n;
};
function Rc(e, t, n = {}) {
  const s = n, { window: r = Al } = s, l = Pc(s, ["window"]);
  let o;
  const i = Mc(() => r && "ResizeObserver" in r), c = () => {
    o && (o.disconnect(), o = void 0);
  }, a = De(() => _n(e), (h) => {
    c(), i.value && r && h && (o = new ResizeObserver(t), o.observe(h, l));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), a();
  };
  return Ac(d), {
    isSupported: i,
    stop: d
  };
}
function Fc(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Al, box: r = "content-box" } = n, l = ve(() => {
    var c, a;
    return (a = (c = _n(e)) == null ? void 0 : c.namespaceURI) == null ? void 0 : a.includes("svg");
  }), o = J(t.width), i = J(t.height);
  return Rc(e, ([c]) => {
    const a = r === "border-box" ? c.borderBoxSize : r === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
    if (s && l.value) {
      const d = _n(e);
      if (d) {
        const h = s.getComputedStyle(d);
        o.value = parseFloat(h.width), i.value = parseFloat(h.height);
      }
    } else if (a) {
      const d = Array.isArray(a) ? a : [a];
      o.value = d.reduce((h, { inlineSize: g }) => h + g, 0), i.value = d.reduce((h, { blockSize: g }) => h + g, 0);
    } else
      o.value = c.contentRect.width, i.value = c.contentRect.height;
  }, n), De(() => _n(e), (c) => {
    o.value = c ? t.width : 0, i.value = c ? t.height : 0;
  }), {
    width: o,
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
function Il(e, t) {
  const { containerStyle: n, wrapperProps: s, scrollTo: r, calculateRange: l, currentList: o, containerRef: i } = "itemHeight" in t ? Bc(t, e) : Uc(t, e);
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
function Ml(e) {
  const t = J(null), n = Fc(t), s = J([]), r = Po(e);
  return { state: J({ start: 0, end: 10 }), source: r, currentList: s, size: n, containerRef: t };
}
function Ll(e, t, n) {
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
function Nl(e, t) {
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
function Pl(e, t, n, s, { containerRef: r, state: l, currentList: o, source: i }) {
  return () => {
    const c = r.value;
    if (c) {
      const a = n(e === "vertical" ? c.scrollTop : c.scrollLeft), d = s(e === "vertical" ? c.clientHeight : c.clientWidth), h = a - t, g = a + d + t;
      l.value = {
        start: h < 0 ? 0 : h,
        end: g > i.value.length ? i.value.length : g
      }, o.value = i.value.slice(l.value.start, l.value.end).map((y, O) => ({
        data: y,
        index: O + l.value.start
      }));
    }
  };
}
function Rl(e, t) {
  return (n) => typeof e == "number" ? n * e : t.value.slice(0, n).reduce((r, l, o) => r + e(o), 0);
}
function Fl(e, t, n) {
  De([e.width, e.height, t], () => {
    n();
  });
}
function Vl(e, t) {
  return ve(() => typeof e == "number" ? t.value.length * e : t.value.reduce((n, s, r) => n + e(r), 0));
}
const Dc = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function kl(e, t, n, s) {
  return (r) => {
    s.value && (s.value[Dc[e]] = n(r), t());
  };
}
function Uc(e, t) {
  const n = Ml(t), { state: s, source: r, currentList: l, size: o, containerRef: i } = n, c = { overflowX: "auto" }, { itemWidth: a, overscan: d = 5 } = e, h = Ll(s, r, a), g = Nl(r, a), y = Pl("horizontal", d, g, h, n), O = Rl(a, r), E = ve(() => O(s.value.start)), R = Vl(a, r);
  Fl(o, t, y);
  const T = kl("horizontal", y, O, i), K = ve(() => ({
    style: {
      height: "100%",
      width: `${R.value - E.value}px`,
      marginLeft: `${E.value}px`,
      display: "flex"
    }
  }));
  return {
    scrollTo: T,
    calculateRange: y,
    wrapperProps: K,
    containerStyle: c,
    currentList: l,
    containerRef: i
  };
}
function Bc(e, t) {
  const n = Ml(t), { state: s, source: r, currentList: l, size: o, containerRef: i } = n, c = { overflowY: "auto" }, { itemHeight: a, overscan: d = 5 } = e, h = Ll(s, r, a), g = Nl(r, a), y = Pl("vertical", d, g, h, n), O = Rl(a, r), E = ve(() => O(s.value.start)), R = Vl(a, r);
  Fl(o, t, y);
  const T = kl("vertical", y, O, i), K = ve(() => ({
    style: {
      width: "100%",
      height: `${R.value - E.value}px`,
      marginTop: `${E.value}px`
    }
  }));
  return {
    calculateRange: y,
    scrollTo: T,
    containerStyle: c,
    wrapperProps: K,
    currentList: l,
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
      e.value = [], e.rebuildMap();
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
let zc = 1;
const jl = (e) => {
  e && (e.style.display = "none", ql(e));
}, $l = (e, t, n, s, r = null) => {
  const l = J(/* @__PURE__ */ new Map());
  Gt(() => {
    if (Array.isArray(n.value)) {
      l.value.clear();
      for (let a of n.value)
        l.value.set(a, a);
    }
  });
  const o = J([]);
  if (o.map = /* @__PURE__ */ new Map(), o.rebuildMap = () => {
    if (o.map.clear(), o.value)
      for (let a of o.value)
        o.map.set(a.key, a);
  }, Gt(() => {
    t.value && (o.value = t.value.map((a) => ({ ...a, key: at(a.key) })), o.rebuildMap());
  }), e) {
    if (l.value.clear(), e.matches("select")) {
      for (let a of Array.apply(null, e.selectedOptions).map((d) => at(d.value)).filter((d) => d != null))
        l.value.set(a, a);
      o.value = Array.apply(null, e.options).reduce((a, d) => (a.push({
        value: d.text,
        key: at(d.value),
        data: Object.keys(d.dataset).reduce((h, g) => (h[g] = Kc(d.dataset[g]), h), {})
      }), a), []);
    }
    if (e.matches("input")) {
      let a = e.value;
      a != null && a.length > 0 && (o.value = [{ value: a, key: a }]);
    }
    o.rebuildMap();
  }
  if (Array.isArray(s))
    for (let a of s)
      l.value.set(at(a), at(a));
  else
    s != null && l.value.set(at(s), at(s));
  (r == null || r === "" || r == 0) && (r = "extraselect_" + (++zc).toString()), Wc(o, l, r);
  const i = [];
  return l.value.forEach((a, d) => {
    i.push([d, a]);
  }), { options: o, selectedOptions: l, onReset: () => {
    l.value.clear();
    for (let [a, d] of i)
      l.value.set(a, d);
  } };
};
J({});
function qc(e, t = {}) {
  for (let n in t)
    e = e.replace(`:${n}`, t[n]);
  return e;
}
const Ns = (e = null) => {
  var s, r;
  window.ExtraSelectLocalization == null && (window.ExtraSelectLocalization = {});
  let n = { ...(r = (s = window.ExtraSelectLocalization.defaults) == null ? void 0 : s.defaultArray) != null ? r : {} };
  Object.assign(n, e != null ? e : {}), Hl(J(n), "defaults");
}, Hl = (e, t) => {
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
const Dl = (e, t) => {
  var s;
  return Hl(t, (s = e == null ? void 0 : e.id) != null ? s : "extraselect_" + (++Gc).toString()), { propLocalization: t, t: (r, l = {}) => {
    var i;
    let o = (i = t.value[r]) != null ? i : window.ExtraSelectLocalization.defaults.get(r);
    return o == null && (window.ExtraSelectLocalization.defaults.push(r, r), o = r), qc(o, l);
  } };
}, Er = async function(e, t = null, n = {}) {
  var l;
  const s = {
    method: "POST",
    credentials: "include",
    ...n,
    headers: { "Content-Type": "application/json", ...(l = n.headers) != null ? l : {} },
    body: JSON.stringify({ search: t, ...n.body })
  };
  return await (await fetch(e, s)).json();
}, Ul = (e, t, n, s, r, l, o = "limited", i = {}) => {
  const c = J(0), a = J(!1), d = ve(() => a.value || c.value > 0);
  if (t != null && t.length > 0)
    if (n) {
      const h = {};
      Gt((g) => {
        var O;
        const y = (O = JSON.stringify(l.value)) != null ? O : "default";
        if (h[y] == null && (h[y] = []), s.value.length >= r) {
          let E = !0;
          switch (o) {
            case "always":
              break;
            default:
            case "limited":
              E = !h[y].includes(s.value);
              break;
            case "complete":
              E = h[y].reduce((R, T) => R && !s.value.startsWith(T), !0);
              break;
          }
          if (E) {
            a.value = !0;
            const R = setTimeout(() => {
              h[y].push(s.value), c.value += 1, i.body = { ...i.body, ...l.value }, Er(t, s.value, i).then((T) => {
                e.actions.addRange(T), e.actions.sort(), c.value -= 1, a.value = !1;
              });
            }, 500);
            g(() => {
              clearTimeout(R);
            });
          }
        }
      });
    } else
      Er(t, null, i).then((h) => {
        e.actions.addRange(h), e.actions.sort();
      });
  return { searchingFlag: d };
}, Bl = (e, t, n, s = [], r = [], l = "exact") => {
  const o = J(""), i = J([]), c = J({}), a = { ...s.reduce((h, g) => (h[g] = !1, h), {}), ...r.reduce((h, g) => (h[g] = !0, h), {}) };
  for (let h in a) {
    let g = a[h], y = document.getElementById(h);
    c.value[h] = y == null ? void 0 : y.value, y && y.addEventListener("change", (O) => {
      c.value[h] = O.target.value, g && Ct(() => {
        if (t != null)
          for (let E of Array.from(t.value.keys()))
            i.value.find((R) => R.key == E) || n(E, !1);
        else
          i.value.find((E) => E.key == o.value) || n(o.value, !1);
      });
    });
  }
  const d = function(h, g) {
    let y = h.value;
    if (Object.keys(c.value).length > 0 && (y = y.filter((O) => {
      var E, R;
      for (let T in c.value)
        if ((a[T] ? !0 : ((E = c.value[T]) != null ? E : "").length > 0) && ((R = O.data) == null ? void 0 : R.hasOwnProperty(T))) {
          if (Array.isArray(O.data[T])) {
            if (!O.data[T].includes(c.value[T]))
              return !1;
          } else if (O.data[T] != c.value[T])
            return !1;
        }
      return !0;
    })), g.length > 0)
      switch (l) {
        case "loose":
          const O = g.toLowerCase().split(" ").filter((E) => E.length > 0);
          y = y.filter((E) => {
            const R = E.value.toLowerCase();
            return O.every((T) => R.includes(T));
          });
          break;
        default:
          y = y.filter((E) => E.value.toLowerCase().includes(g.toLowerCase()));
          break;
      }
    return y;
  };
  return Gt(() => {
    i.value = d(e, o.value);
  }), { filterText: o, filteredOptions: i, filterValues: c };
}, Kl = (e, t, n, s, r, l, o) => {
  const i = getComputedStyle(document.querySelector("body")).font, a = document.createElement("canvas").getContext("2d");
  a.font = i;
  const d = function(y) {
    return a.measureText(y != null ? y : "").width;
  }, h = ve(() => {
    var O, E;
    const y = (O = nn(s.value).width) != null ? O : 100;
    if (o === "inherit")
      return y;
    if (o == null || o === "dynamic") {
      const R = (E = parseInt(getComputedStyle(document.querySelector("html"))["font-size"])) != null ? E : 16;
      return Math.max(y, Math.max(...e.value.map((T) => d(T.value))) + 20 + R * 3);
    }
    return o;
  }), g = J({
    position: "absolute",
    "min-width": "max-content"
  });
  return ti(() => {
    n.value < 0 && console.log("is open"), t.value.size < 0 && console.log("empty selection");
    var y = nn(s.value), O = nn(null);
    if (l.value && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(l.value).position))
      var O = nn(l.value);
    let E = -O.left + y.left;
    const R = window.document.documentElement.clientWidth;
    E + h.value > R && (E = R - h.value), g.value = {
      position: "absolute",
      "min-width": "max-content",
      width: h.value.toString() + "px",
      top: (-O.top + y.top + y.height).toString() + "px",
      left: E.toString() + "px"
    };
  }), { dropdownStyle: g, getTextWidth: d };
}, Jc = ["name"], Yc = {
  key: 1,
  class: "extra-select selection"
}, Qc = ["onClick"], Xc = ["innerHTML"], Zc = ["value", "disabled"], eu = {
  key: 0,
  class: "input-searching"
}, tu = ["placeholder"], nu = {
  key: 0,
  class: "allselect-clear"
}, su = { class: "row-input" }, ru = ["checked"], lu = { class: "row-input" }, ou = ["checked"], iu = {
  key: 1,
  class: "no-matches"
}, cu = { key: 2 }, uu = {
  key: 0,
  class: "border-bottom"
}, au = ["onClick"], fu = ["checked"], du = ["value"], hu = {
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
    matchType: { type: String, default: "exact" },
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
    disabled: { type: Boolean, default: !1 },
    selectedOnTop: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var xe, Nt, en, tn, Ce, it;
    const n = e, s = ve(() => {
      var I, P;
      return (P = (I = n.originalNode) == null ? void 0 : I.multiple) != null ? P : n.multiple;
    });
    let r = ll();
    const { options: l, selectedOptions: o, onReset: i } = $l(n.originalNode, $t(n, "options"), $t(n, "modelValue"), n.initialValue, (en = (Nt = (xe = n.originalNode) == null ? void 0 : xe.id) != null ? Nt : r.id) != null ? en : null), { t: c } = Dl(n.originalNode, $t(n, "localization")), a = (tn = n.originalNode) == null ? void 0 : tn.classList, d = Object.values((it = (Ce = n.originalNode) == null ? void 0 : Ce.style) != null ? it : {});
    jl(n.originalNode);
    const h = t, g = (I, P = null) => {
      if (s.value) {
        let se = P;
        switch (se == null && (se = !o.value.has(I)), se) {
          case !0:
            o.value.set(I, I);
            break;
          case !1:
            o.value.delete(I);
            break;
        }
      } else
        o.value.clear(), P !== !1 && o.value.set(I, I), z.value = !1;
      ce(Array.from(o.value.keys()));
    }, { filterText: y, filteredOptions: O, filterValues: E } = Bl(l, o, g, n.filterFields, n.hardFilterFields, n.matchType), { searchingFlag: R } = Ul(
      l,
      n.url,
      n.searchableUrl,
      y,
      n.minChars,
      E,
      n.fetchMode,
      n.fetchOptions
    ), T = J(null), K = J(null), $ = J(null), z = J(!1);
    function ne(I) {
      n.disabled || (z.value = I);
    }
    De(y, () => {
      K.value.querySelector(".scroller").scrollTop = 0;
    });
    const N = J(null), Y = function(I) {
      const P = wt(I.target);
      P.push(I.target), !P.includes(T.value) && !P.includes(K.value) ? z.value = !1 : (I.stopImmediatePropagation(), I.preventDefault());
    };
    Vn(() => {
      if (n.dropdownContainer) {
        let I = !1;
        N.value = wt(T.value).find((P) => !!(P instanceof Element && (P.matches(n.dropdownContainer) && (I = !0), I && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(P).position))));
      }
      if (N.value == null && (N.value = document.querySelector("body")), n.originalNode) {
        for (let P of a)
          P != "extraselect" && T.value.classList.add(P);
        for (let P of d)
          T.value.style[P] = n.originalNode.style[P];
        let I = wt(T.value, "form").pop();
        I instanceof HTMLElement && I.matches("form") && I.addEventListener("reset", () => setTimeout(i)), n.originalNode.toggleValue = g, n.originalNode.setValues = (P) => {
          o.value.clear();
          for (let se of P)
            g(se);
        };
      }
      window.document.addEventListener("mousedown", Y), window.document.addEventListener("focusin", Y);
    }), kn(() => {
      window.document.removeEventListener("mousedown", Y), window.document.removeEventListener("focusin", Y);
    });
    const { dropdownStyle: re, getTextWidth: ye } = Kl(l, o, z, T, K, N, n.maxWidth), ce = (I) => {
      Ct(
        () => {
          var P;
          return (P = n.originalNode) == null ? void 0 : P.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      ), h("update:modelValue", I);
    }, ge = (I) => {
      Pe(I, !1), y.value = "";
    }, Pe = (I, P = null) => {
      P == null && (P = !Re.value), P ? (o.value.clear(), l.value.forEach((se) => o.value.set(se.key, se.key))) : o.value.clear(), ce(Array.from(o.value.keys()));
    }, Ue = () => {
      ie.value ? O.value.forEach((I) => {
        o.value.has(I.key) && o.value.delete(I.key);
      }) : O.value.forEach((I) => {
        o.value.has(I.key) || o.value.set(I.key, I.key);
      }), ce(Array.from(o.value.keys()));
    };
    De(z, (I, P) => {
      I != P && (I ? n.search && Ct(() => {
        $.value.focus({ focusVisible: !0 });
      }) : y.value = "");
    });
    const Re = ve(() => o.value.size == l.value.length), ie = ve(() => O.value.reduce((I, P) => I && o.value.has(P.key), !0)), D = ve(() => o.value.size == 0), k = ve(() => {
      var I, P, se, We, ee;
      if (l.value.length < 0)
        return "";
      if (s.value) {
        if (D.value)
          return c("No selection");
        if (!n.searchableUrl && Re.value)
          return c("All selected");
        const u = T.value ? getComputedStyle(T.value) : null, f = ((I = T.value) == null ? void 0 : I.clientWidth) - parseInt(u == null ? void 0 : u.paddingLeft) - parseInt(u == null ? void 0 : u.paddingRight);
        let p = c(":n selected - ", { n: o.value.size }), m = !0;
        for (let v of o.value)
          if (m ? m = !1 : p += ", ", p += (se = (P = l.map.get(v[0])) == null ? void 0 : P.value) != null ? se : R.value ? c("Loading...") : c("Value not found"), f < ye(p))
            return o.value.size + c(" selected");
        return p;
      } else
        for (let u of o.value)
          return (ee = (We = l.map.get(u[0])) == null ? void 0 : We.value) != null ? ee : R.value ? c("Loading...") : c("Value not found");
      return c("No selection");
    }), j = ve(() => n.selectedOnTop && s.value ? [...[...o.value.keys()].map((I) => {
      let P = O.value.find((se) => se.key === I);
      return P != null ? { ...P, selected: !0 } : null;
    }).filter((I) => I != null), { key: "separator", value: "separator", separator: !0 }, ...O.value] : O.value), { list: Be, containerProps: _t, wrapperProps: Ke } = Il(
      j,
      {
        itemHeight: 32
      }
    );
    return (I, P) => {
      var se, We;
      return q(), X(ae, null, [
        s.value && U(o).size == 0 ? (q(), X("input", {
          key: 0,
          type: "hidden",
          name: (We = (se = n.originalNode) == null ? void 0 : se.name) == null ? void 0 : We.replace("[]", ""),
          value: ""
        }, null, 8, Jc)) : Te("", !0),
        n.showSelected ? (q(), X("div", Yc, [
          (q(!0), X(ae, null, gn(U(o), (ee) => {
            var u;
            return q(), X("div", {
              key: ee,
              onClick: ft((f) => g(ee[0]), ["stop", "prevent"]),
              class: "selection-badge"
            }, [
              os(je((u = U(l).find((f) => f.key == ee[0])) == null ? void 0 : u.value) + " ", 1),
              le("div", {
                class: "selection-remove",
                innerHTML: n.removeIcon
              }, null, 8, Xc)
            ], 8, Qc);
          }), 128))
        ])) : Te("", !0),
        le("input", Yt({
          onFocus: P[0] || (P[0] = (ee) => ne(!0)),
          onClick: P[1] || (P[1] = ft((ee) => ne(!0), ["stop", "prevent"])),
          ref_key: "inputNode",
          ref: T,
          value: k.value,
          class: "extra-select extra-select-input",
          readonly: ""
        }, I.$attrs, { disabled: e.disabled }), null, 16, Zc),
        N.value ? (q(), Cn(ls, {
          key: 2,
          to: N.value
        }, [
          On(le("div", {
            class: mt(["extra-select dropdown", { searching: U(R) > 0 }]),
            ref_key: "dropdownNode",
            ref: K,
            style: Lt(U(re))
          }, [
            n.search ? (q(), X("div", eu, [
              On(le("input", {
                ref_key: "searchNode",
                ref: $,
                class: "extra-select-search",
                "onUpdate:modelValue": P[2] || (P[2] = (ee) => fe(y) ? y.value = ee : null),
                type: "text",
                autocomplete: "off",
                autocorrect: "off",
                autocapitilize: "off",
                spellcheck: "false",
                placeholder: U(c)("Search...")
              }, null, 8, tu), [
                [cs, U(y)]
              ])
            ])) : Te("", !0),
            U(y).length >= n.minChars ? (q(), X(ae, { key: 1 }, [
              s.value ? (q(), X("div", nu, [
                U(y).length == 0 ? (q(), X("div", {
                  key: 0,
                  onClick: ft(Pe, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  le("div", su, [
                    le("input", {
                      checked: Re.value,
                      type: "checkbox"
                    }, null, 8, ru),
                    le("b", null, je(U(c)("Select all")), 1)
                  ])
                ])) : Te("", !0),
                U(O).length > 0 && U(y).length > 0 ? (q(), X("div", {
                  key: 1,
                  onClick: ft(Ue, ["stop", "prevent"]),
                  class: "all-select"
                }, [
                  le("div", lu, [
                    le("input", {
                      checked: ie.value,
                      type: "checkbox"
                    }, null, 8, ou),
                    le("b", null, je(U(c)("Select Filtered")), 1)
                  ])
                ])) : Te("", !0),
                le("div", {
                  class: "clear",
                  onClick: ft(ge, ["stop", "prevent"])
                }, je(U(c)("Clear")), 1)
              ])) : Te("", !0),
              U(O).length == 0 ? (q(), X("div", iu, je(U(c)("No matches found")), 1)) : Te("", !0)
            ], 64)) : (q(), X("div", cu, je(U(c)("Insert at least :n characters", { n: n.minChars })), 1)),
            le("div", Yt(U(_t), { class: "scroller" }), [
              le("div", Ir(Ms(U(Ke))), [
                (q(!0), X(ae, null, gn(U(Be), (ee) => (q(), X(ae, {
                  key: ee.index
                }, [
                  ee.data.separator ? (q(), X("div", uu)) : (q(), X("button", {
                    key: 1,
                    class: "dropdown-row",
                    onClick: ft((u) => g(ee.data.key), ["stop", "prevent"]),
                    style: { height: "32px" }
                  }, [
                    le("div", {
                      class: mt(["row-input", { "fw-bold": ee.data.selected }])
                    }, [
                      s.value ? (q(), X("input", {
                        key: 0,
                        checked: U(o).has(ee.data.key),
                        type: "checkbox"
                      }, null, 8, fu)) : Te("", !0),
                      os(" " + je(ee.data.value), 1)
                    ], 2)
                  ], 8, au))
                ], 64))), 128))
              ], 16)
            ], 16)
          ], 6), [
            [Sl, z.value]
          ])
        ], 8, ["to"])) : Te("", !0),
        n.originalNode ? (q(), Cn(ls, {
          key: 3,
          to: n.originalNode
        }, [
          (q(!0), X(ae, null, gn(U(o), (ee) => (q(), X("option", {
            key: ee[0],
            selected: "selected",
            value: ee[0]
          }, null, 8, du))), 128))
        ], 8, ["to"])) : Te("", !0)
      ], 64);
    };
  }
}), gu = ["disabled"], mu = {
  key: 0,
  class: "no-matches"
}, vu = { key: 1 }, yu = ["onClick"], _u = { class: "row-input" }, bu = {
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
    matchType: { type: String, default: "exact" },
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
    var ye, ce, ge, Pe, Ue, Re;
    const n = e;
    let s = ll();
    const { options: r } = $l(n.originalNode, $t(n, "options"), J([]), null, (ge = (ce = (ye = n.originalNode) == null ? void 0 : ye.id) != null ? ce : s.id) != null ? ge : null), { t: l } = Dl(n.originalNode, $t(n, "localization")), o = (Pe = n.originalNode) == null ? void 0 : Pe.classList, i = Object.values((Re = (Ue = n.originalNode) == null ? void 0 : Ue.style) != null ? Re : {});
    jl(n.originalNode);
    const c = t, a = (ie, D = null) => {
      D === !1 ? d.value = "" : d.value = r.map.get(ie).value, R.value = !1;
    }, { filterText: d, filteredOptions: h, filterValues: g } = Bl(r, null, a, n.filterFields, n.hardFilterFields, n.matchType), { searchingFlag: y } = Ul(
      r,
      n.url,
      n.searchableUrl,
      d,
      n.minChars,
      g,
      n.fetchMode,
      n.fetchOptions
    ), O = J(null), E = J(null), R = J(!1), T = J(null);
    function K(ie) {
      n.disabled || (R.value = ie);
    }
    De(d, () => {
      E.value.querySelector(".scroller").scrollTop = 0;
    });
    const $ = function(ie) {
      const D = wt(ie.target);
      D.push(ie.target), !D.includes(O.value) && !D.includes(E.value) && (R.value = !1);
    };
    Vn(() => {
      if (n.dropdownContainer) {
        let k = !1;
        T.value = wt(O.value).find((j) => !!(j instanceof Element && (j.matches(n.dropdownContainer) && (k = !0), k && ["absolute", "relative", "fixed", "sticky"].includes(getComputedStyle(j).position))));
      }
      if (T.value == null && (T.value = document.querySelector("body")), n.originalNode) {
        for (let j of o)
          j != "extrasuggest" && O.value.classList.add(j);
        for (let j of i)
          O.value.style[j] = n.originalNode.style[j];
        d.value = n.originalNode.value;
        let k = wt(O.value, "form").pop();
        k instanceof HTMLElement && k.matches("form") && k.addEventListener("reset", () => setTimeout(D)), n.originalNode.addEventListener("change", () => {
          ne(!0);
        });
      }
      Gt(() => {
        n.modelValue != null && (d.value = n.modelValue);
      });
      const ie = d.value, D = () => {
        d.value = ie;
      };
      window.document.addEventListener("mousedown", $), window.document.addEventListener("focusin", $);
    }), kn(() => {
      window.document.removeEventListener("mousedown", $), window.document.removeEventListener("focusin", $);
    });
    const { dropdownStyle: z } = Kl(r, J([]), R, O, E, T, n.maxWidth), ne = (ie = !1) => {
      var D;
      n.originalNode && (ie ? d.value = n.originalNode.value : (n.originalNode.value = d.value, (D = n.originalNode) == null || D.dispatchEvent(new Event("change", { bubbles: !0 })))), c("update:modelValue", d.value);
    };
    De(() => R.value, (ie) => {
      ie === !1 && ne();
    });
    const { list: N, containerProps: Y, wrapperProps: re } = Il(
      h,
      {
        itemHeight: 32
      }
    );
    return (ie, D) => (q(), X(ae, null, [
      On(le("input", Yt({
        onFocus: D[0] || (D[0] = (k) => K(!0)),
        onClick: D[1] || (D[1] = (k) => K(!0)),
        ref_key: "inputNode",
        ref: O,
        "onUpdate:modelValue": D[2] || (D[2] = (k) => fe(d) ? d.value = k : null),
        class: "extra-select extra-select-input"
      }, ie.$attrs, { disabled: e.disabled }), null, 16, gu), [
        [yc, U(d)]
      ]),
      T.value ? (q(), Cn(ls, {
        key: 0,
        to: T.value
      }, [
        On(le("div", {
          class: mt(["extra-select dropdown", { searching: U(y) > 0 }]),
          ref_key: "dropdownNode",
          ref: E,
          style: Lt(U(z))
        }, [
          U(d).length >= n.minChars ? (q(), X(ae, { key: 0 }, [
            U(h).length == 0 ? (q(), X("div", mu, je(U(l)("No matches found")), 1)) : Te("", !0)
          ], 64)) : (q(), X("div", vu, je(U(l)("Insert at least :n characters", { n: n.minChars })), 1)),
          le("div", Yt(U(Y), { class: "scroller" }), [
            le("div", Ir(Ms(U(re))), [
              (q(!0), X(ae, null, gn(U(N), (k) => (q(), X("button", {
                key: k.index,
                class: "dropdown-row",
                onClick: ft((j) => a(k.data.key), ["stop", "prevent"]),
                style: { height: "32px" }
              }, [
                le("div", _u, je(k.data.value), 1)
              ], 8, yu))), 128))
            ], 16)
          ], 16)
        ], 6), [
          [Sl, R.value]
        ])
      ], 8, ["to"])) : Te("", !0)
    ], 64));
  }
}), xu = Ns, Wl = {
  init: function() {
    document.querySelectorAll(".extraselect").forEach(function(e) {
      Wl.bindNew(e);
    });
  },
  bindNew(e) {
    Me.lock(e, "extra-select", () => {
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
      const s = Tl(pu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), Me.remove(e, "extra-select");
      });
    });
  }
}, zl = {
  init: function() {
    document.querySelectorAll(".extrasuggest").forEach(function(e) {
      zl.bindNew(e);
    });
  },
  bindNew(e) {
    Me.lock(e, "extra-suggest", () => {
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
      const s = Tl(wu, t);
      s.mount(n), e.addEventListener("remove", function() {
        s.unmount(), n.remove(), e.remove(), Me.remove(e, "extra-suggest");
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", function() {
  Wl.init(), zl.init(), Ns();
});
export {
  Wl as ExtraSelect,
  zl as ExtraSuggest,
  xu as loadExtraSelectDefaultLocalization
};
