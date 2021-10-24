!function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {i: o, l: !1, exports: {}};
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: o})
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 10)
}([function (t, e, n) {
    var o;
    !function (e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (r, i) {
        "use strict";
        var a = [], s = Object.getPrototypeOf, c = a.slice, l = a.flat ? function (t) {
                return a.flat.call(t)
            } : function (t) {
                return a.concat.apply([], t)
            }, u = a.push, d = a.indexOf, p = {}, f = p.toString, h = p.hasOwnProperty, m = h.toString, g = m.call(Object),
            v = {}, y = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            }, b = function (t) {
                return null != t && t === t.window
            }, _ = r.document, C = {type: !0, src: !0, nonce: !0, noModule: !0};

        function w(t, e, n) {
            var o, r, i = (n = n || _).createElement("script");
            if (i.text = t, e) for (o in C) (r = e[o] || e.getAttribute && e.getAttribute(o)) && i.setAttribute(o, r);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function x(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? p[f.call(t)] || "object" : typeof t
        }

        var k = "3.5.1", T = function (t, e) {
            return new T.fn.init(t, e)
        };

        function E(t) {
            var e = !!t && "length" in t && t.length, n = x(t);
            return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }

        T.fn = T.prototype = {
            jquery: k, constructor: T, length: 0, toArray: function () {
                return c.call(this)
            }, get: function (t) {
                return null == t ? c.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = T.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return T.each(this, t)
            }, map: function (t) {
                return this.pushStack(T.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(c.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(T.grep(this, function (t, e) {
                    return (e + 1) % 2
                }))
            }, odd: function () {
                return this.pushStack(T.grep(this, function (t, e) {
                    return e % 2
                }))
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= n && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: u, sort: a.sort, splice: a.splice
        }, T.extend = T.fn.extend = function () {
            var t, e, n, o, r, i, a = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === c && (a = this, s--); s < c; s++) if (null != (t = arguments[s])) for (e in t) o = t[e], "__proto__" !== e && a !== o && (l && o && (T.isPlainObject(o) || (r = Array.isArray(o))) ? (n = a[e], i = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, a[e] = T.extend(l, i, o)) : void 0 !== o && (a[e] = o));
            return a
        }, T.extend({
            expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== f.call(t) || (e = s(t)) && ("function" != typeof (n = h.call(e, "constructor") && e.constructor) || m.call(n) !== g))
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, globalEval: function (t, e, n) {
                w(t, {nonce: e && e.nonce}, n)
            }, each: function (t, e) {
                var n, o = 0;
                if (E(t)) for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++) ; else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
                return t
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (E(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n
            }, inArray: function (t, e, n) {
                return null == e ? -1 : d.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, o = 0, r = t.length; o < n; o++) t[r++] = e[o];
                return t.length = r, t
            }, grep: function (t, e, n) {
                for (var o = [], r = 0, i = t.length, a = !n; r < i; r++) !e(t[r], r) !== a && o.push(t[r]);
                return o
            }, map: function (t, e, n) {
                var o, r, i = 0, a = [];
                if (E(t)) for (o = t.length; i < o; i++) null != (r = e(t[i], i, n)) && a.push(r); else for (i in t) null != (r = e(t[i], i, n)) && a.push(r);
                return l(a)
            }, guid: 1, support: v
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = a[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            p["[object " + e + "]"] = e.toLowerCase()
        });
        var S = function (t) {
            var e, n, o, r, i, a, s, c, l, u, d, p, f, h, m, g, v, y, b, _ = "sizzle" + 1 * new Date, C = t.document,
                w = 0, x = 0, k = ct(), T = ct(), E = ct(), S = ct(), O = function (t, e) {
                    return t === e && (d = !0), 0
                }, D = {}.hasOwnProperty, P = [], I = P.pop, L = P.push, A = P.push, j = P.slice, N = function (t, e) {
                    for (var n = 0, o = t.length; n < o; n++) if (t[n] === e) return n;
                    return -1
                },
                M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                q = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                $ = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]",
                H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                B = new RegExp(q + "+", "g"), F = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                W = new RegExp("^" + q + "*," + q + "*"), U = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                G = new RegExp(q + "|>"), z = new RegExp(H), V = new RegExp("^" + R + "$"), K = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R + "|[*])"),
                    ATTR: new RegExp("^" + $),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + M + ")$", "i"),
                    needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
                }, X = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/,
                et = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"), nt = function (t, e) {
                    var n = "0x" + t.slice(1) - 65536;
                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, rt = function (t, e) {
                    return e ? "\0" === t ? "пїЅ" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                }, it = function () {
                    p()
                }, at = _t(function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }, {dir: "parentNode", next: "legend"});
            try {
                A.apply(P = j.call(C.childNodes), C.childNodes), P[C.childNodes.length].nodeType
            } catch (e) {
                A = {
                    apply: P.length ? function (t, e) {
                        L.apply(t, j.call(e))
                    } : function (t, e) {
                        for (var n = t.length, o = 0; t[n++] = e[o++];) ;
                        t.length = n - 1
                    }
                }
            }

            function st(t, e, o, r) {
                var i, s, l, u, d, h, v, y = e && e.ownerDocument, C = e ? e.nodeType : 9;
                if (o = o || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return o;
                if (!r && (p(e), e = e || f, m)) {
                    if (11 !== C && (d = Z.exec(t))) if (i = d[1]) {
                        if (9 === C) {
                            if (!(l = e.getElementById(i))) return o;
                            if (l.id === i) return o.push(l), o
                        } else if (y && (l = y.getElementById(i)) && b(e, l) && l.id === i) return o.push(l), o
                    } else {
                        if (d[2]) return A.apply(o, e.getElementsByTagName(t)), o;
                        if ((i = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return A.apply(o, e.getElementsByClassName(i)), o
                    }
                    if (n.qsa && !S[t + " "] && (!g || !g.test(t)) && (1 !== C || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, y = e, 1 === C && (G.test(t) || U.test(t))) {
                            for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(ot, rt) : e.setAttribute("id", u = _)), s = (h = a(t)).length; s--;) h[s] = (u ? "#" + u : ":scope") + " " + bt(h[s]);
                            v = h.join(",")
                        }
                        try {
                            return A.apply(o, y.querySelectorAll(v)), o
                        } catch (e) {
                            S(t, !0)
                        } finally {
                            u === _ && e.removeAttribute("id")
                        }
                    }
                }
                return c(t.replace(F, "$1"), e, o, r)
            }

            function ct() {
                var t = [];
                return function e(n, r) {
                    return t.push(n + " ") > o.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
            }

            function lt(t) {
                return t[_] = !0, t
            }

            function ut(t) {
                var e = f.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function dt(t, e) {
                for (var n = t.split("|"), r = n.length; r--;) o.attrHandle[n[r]] = e
            }

            function pt(t, e) {
                var n = e && t, o = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (o) return o;
                if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                return t ? 1 : -1
            }

            function ft(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ht(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function mt(t) {
                return function (e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function gt(t) {
                return lt(function (e) {
                    return e = +e, lt(function (n, o) {
                        for (var r, i = t([], n.length, e), a = i.length; a--;) n[r = i[a]] && (n[r] = !(o[r] = n[r]))
                    })
                })
            }

            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            for (e in n = st.support = {}, i = st.isXML = function (t) {
                var e = t.namespaceURI, n = (t.ownerDocument || t).documentElement;
                return !X.test(e || n && n.nodeName || "HTML")
            }, p = st.setDocument = function (t) {
                var e, r, a = t ? t.ownerDocument || t : C;
                return a != f && 9 === a.nodeType && a.documentElement && (h = (f = a).documentElement, m = !i(f), C != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)), n.scope = ut(function (t) {
                    return h.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ut(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = ut(function (t) {
                    return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ut(function (t) {
                    return h.appendChild(t).id = _, !f.getElementsByName || !f.getElementsByName(_).length
                }), n.getById ? (o.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, o.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (o.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, o.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n, o, r, i = e.getElementById(t);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === t) return [i];
                            for (r = e.getElementsByName(t), o = 0; i = r[o++];) if ((n = i.getAttributeNode("id")) && n.value === t) return [i]
                        }
                        return []
                    }
                }), o.find.TAG = n.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, o = [], r = 0, i = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = i[r++];) 1 === n.nodeType && o.push(n);
                        return o
                    }
                    return i
                }, o.find.CLASS = n.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (ut(function (t) {
                    var e;
                    h.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + M + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || g.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), t.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                }), ut(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = f.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ut(function (t) {
                    n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(h.compareDocumentPosition), b = e || J.test(h.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, o = e && e.parentNode;
                    return t === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)))
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, O = e ? function (t, e) {
                    if (t === e) return d = !0, 0;
                    var o = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return o || (1 & (o = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === o ? t == f || t.ownerDocument == C && b(C, t) ? -1 : e == f || e.ownerDocument == C && b(C, e) ? 1 : u ? N(u, t) - N(u, e) : 0 : 4 & o ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return d = !0, 0;
                    var n, o = 0, r = t.parentNode, i = e.parentNode, a = [t], s = [e];
                    if (!r || !i) return t == f ? -1 : e == f ? 1 : r ? -1 : i ? 1 : u ? N(u, t) - N(u, e) : 0;
                    if (r === i) return pt(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (; a[o] === s[o];) o++;
                    return o ? pt(a[o], s[o]) : a[o] == C ? -1 : s[o] == C ? 1 : 0
                }), f
            }, st.matches = function (t, e) {
                return st(t, null, null, e)
            }, st.matchesSelector = function (t, e) {
                if (p(t), n.matchesSelector && m && !S[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                    var o = y.call(t, e);
                    if (o || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o
                } catch (t) {
                    S(e, !0)
                }
                return 0 < st(e, f, null, [t]).length
            }, st.contains = function (t, e) {
                return (t.ownerDocument || t) != f && p(t), b(t, e)
            }, st.attr = function (t, e) {
                (t.ownerDocument || t) != f && p(t);
                var r = o.attrHandle[e.toLowerCase()],
                    i = r && D.call(o.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                return void 0 !== i ? i : n.attributes || !m ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, st.escape = function (t) {
                return (t + "").replace(ot, rt)
            }, st.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, st.uniqueSort = function (t) {
                var e, o = [], r = 0, i = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(O), d) {
                    for (; e = t[i++];) e === t[i] && (r = o.push(i));
                    for (; r--;) t.splice(o[r], 1)
                }
                return u = null, t
            }, r = st.getText = function (t) {
                var e, n = "", o = 0, i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                    } else if (3 === i || 4 === i) return t.nodeValue
                } else for (; e = t[o++];) n += r(e);
                return n
            }, (o = st.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && z.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) && k(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, e, n) {
                        return function (o) {
                            var r = st.attr(o, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && -1 < r.indexOf(n) : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n) : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (t, e, n, o, r) {
                        var i = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === o && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, c) {
                            var l, u, d, p, f, h, m = i !== a ? "nextSibling" : "previousSibling", g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(), y = !c && !s, b = !1;
                            if (g) {
                                if (i) {
                                    for (; m;) {
                                        for (p = e; p = p[m];) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (b = (f = (l = (u = (d = (p = g)[_] || (p[_] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === w && l[1]) && l[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === e) {
                                        u[t] = [w, f, b];
                                        break
                                    }
                                } else if (y && (b = f = (l = (u = (d = (p = e)[_] || (p[_] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === w && l[1]), !1 === b) for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[_] || (p[_] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [w, b]), p !== e));) ;
                                return (b -= r) === o || b % o == 0 && 0 <= b / o
                            }
                        }
                    }, PSEUDO: function (t, e) {
                        var n,
                            r = o.pseudos[t] || o.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                        return r[_] ? r(e) : 1 < r.length ? (n = [t, t, "", e], o.setFilters.hasOwnProperty(t.toLowerCase()) ? lt(function (t, n) {
                            for (var o, i = r(t, e), a = i.length; a--;) t[o = N(t, i[a])] = !(n[o] = i[a])
                        }) : function (t) {
                            return r(t, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: lt(function (t) {
                        var e = [], n = [], o = s(t.replace(F, "$1"));
                        return o[_] ? lt(function (t, e, n, r) {
                            for (var i, a = o(t, null, r, []), s = t.length; s--;) (i = a[s]) && (t[s] = !(e[s] = i))
                        }) : function (t, r, i) {
                            return e[0] = t, o(e, null, i, n), e[0] = null, !n.pop()
                        }
                    }), has: lt(function (t) {
                        return function (e) {
                            return 0 < st(t, e).length
                        }
                    }), contains: lt(function (t) {
                        return t = t.replace(et, nt), function (e) {
                            return -1 < (e.textContent || r(e)).indexOf(t)
                        }
                    }), lang: lt(function (t) {
                        return V.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(), function (e) {
                            var n;
                            do {
                                if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === h
                    }, focus: function (t) {
                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: mt(!1), disabled: mt(!0), checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    }, parent: function (t) {
                        return !o.pseudos.empty(t)
                    }, header: function (t) {
                        return Q.test(t.nodeName)
                    }, input: function (t) {
                        return Y.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: gt(function () {
                        return [0]
                    }), last: gt(function (t, e) {
                        return [e - 1]
                    }), eq: gt(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }), even: gt(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }), odd: gt(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }), lt: gt(function (t, e, n) {
                        for (var o = n < 0 ? n + e : e < n ? e : n; 0 <= --o;) t.push(o);
                        return t
                    }), gt: gt(function (t, e, n) {
                        for (var o = n < 0 ? n + e : n; ++o < e;) t.push(o);
                        return t
                    })
                }
            }).pseudos.nth = o.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) o.pseudos[e] = ft(e);
            for (e in {submit: !0, reset: !0}) o.pseudos[e] = ht(e);

            function yt() {
            }

            function bt(t) {
                for (var e = 0, n = t.length, o = ""; e < n; e++) o += t[e].value;
                return o
            }

            function _t(t, e, n) {
                var o = e.dir, r = e.next, i = r || o, a = n && "parentNode" === i, s = x++;
                return e.first ? function (e, n, r) {
                    for (; e = e[o];) if (1 === e.nodeType || a) return t(e, n, r);
                    return !1
                } : function (e, n, c) {
                    var l, u, d, p = [w, s];
                    if (c) {
                        for (; e = e[o];) if ((1 === e.nodeType || a) && t(e, n, c)) return !0
                    } else for (; e = e[o];) if (1 === e.nodeType || a) if (u = (d = e[_] || (e[_] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[o] || e; else {
                        if ((l = u[i]) && l[0] === w && l[1] === s) return p[2] = l[2];
                        if ((u[i] = p)[2] = t(e, n, c)) return !0
                    }
                    return !1
                }
            }

            function Ct(t) {
                return 1 < t.length ? function (e, n, o) {
                    for (var r = t.length; r--;) if (!t[r](e, n, o)) return !1;
                    return !0
                } : t[0]
            }

            function wt(t, e, n, o, r) {
                for (var i, a = [], s = 0, c = t.length, l = null != e; s < c; s++) (i = t[s]) && (n && !n(i, o, r) || (a.push(i), l && e.push(s)));
                return a
            }

            function xt(t, e, n, o, r, i) {
                return o && !o[_] && (o = xt(o)), r && !r[_] && (r = xt(r, i)), lt(function (i, a, s, c) {
                    var l, u, d, p = [], f = [], h = a.length, m = i || function (t, e, n) {
                            for (var o = 0, r = e.length; o < r; o++) st(t, e[o], n);
                            return n
                        }(e || "*", s.nodeType ? [s] : s, []), g = !t || !i && e ? m : wt(m, p, t, s, c),
                        v = n ? r || (i ? t : h || o) ? [] : a : g;
                    if (n && n(g, v, s, c), o) for (l = wt(v, f), o(l, [], s, c), u = l.length; u--;) (d = l[u]) && (v[f[u]] = !(g[f[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (l = [], u = v.length; u--;) (d = v[u]) && l.push(g[u] = d);
                                r(null, v = [], l, c)
                            }
                            for (u = v.length; u--;) (d = v[u]) && -1 < (l = r ? N(i, d) : p[u]) && (i[l] = !(a[l] = d))
                        }
                    } else v = wt(v === a ? v.splice(h, v.length) : v), r ? r(null, a, v, c) : A.apply(a, v)
                })
            }

            function kt(t) {
                for (var e, n, r, i = t.length, a = o.relative[t[0].type], s = a || o.relative[" "], c = a ? 1 : 0, u = _t(function (t) {
                    return t === e
                }, s, !0), d = _t(function (t) {
                    return -1 < N(e, t)
                }, s, !0), p = [function (t, n, o) {
                    var r = !a && (o || n !== l) || ((e = n).nodeType ? u(t, n, o) : d(t, n, o));
                    return e = null, r
                }]; c < i; c++) if (n = o.relative[t[c].type]) p = [_t(Ct(p), n)]; else {
                    if ((n = o.filter[t[c].type].apply(null, t[c].matches))[_]) {
                        for (r = ++c; r < i && !o.relative[t[r].type]; r++) ;
                        return xt(1 < c && Ct(p), 1 < c && bt(t.slice(0, c - 1).concat({value: " " === t[c - 2].type ? "*" : ""})).replace(F, "$1"), n, c < r && kt(t.slice(c, r)), r < i && kt(t = t.slice(r)), r < i && bt(t))
                    }
                    p.push(n)
                }
                return Ct(p)
            }

            return yt.prototype = o.filters = o.pseudos, o.setFilters = new yt, a = st.tokenize = function (t, e) {
                var n, r, i, a, s, c, l, u = T[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (s = t, c = [], l = o.preFilter; s;) {
                    for (a in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), c.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(F, " ")
                    }), s = s.slice(n.length)), o.filter) !(r = K[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length : s ? st.error(t) : T(t, c).slice(0)
            }, s = st.compile = function (t, e) {
                var n, r, i, s, c, u, d = [], h = [], g = E[t + " "];
                if (!g) {
                    for (e || (e = a(t)), n = e.length; n--;) (g = kt(e[n]))[_] ? d.push(g) : h.push(g);
                    (g = E(t, (r = h, s = 0 < (i = d).length, c = 0 < r.length, u = function (t, e, n, a, u) {
                        var d, h, g, v = 0, y = "0", b = t && [], _ = [], C = l, x = t || c && o.find.TAG("*", u),
                            k = w += null == C ? 1 : Math.random() || .1, T = x.length;
                        for (u && (l = e == f || e || u); y !== T && null != (d = x[y]); y++) {
                            if (c && d) {
                                for (h = 0, e || d.ownerDocument == f || (p(d), n = !m); g = r[h++];) if (g(d, e || f, n)) {
                                    a.push(d);
                                    break
                                }
                                u && (w = k)
                            }
                            s && ((d = !g && d) && v--, t && b.push(d))
                        }
                        if (v += y, s && y !== v) {
                            for (h = 0; g = i[h++];) g(b, _, e, n);
                            if (t) {
                                if (0 < v) for (; y--;) b[y] || _[y] || (_[y] = I.call(a));
                                _ = wt(_)
                            }
                            A.apply(a, _), u && !t && 0 < _.length && 1 < v + i.length && st.uniqueSort(a)
                        }
                        return u && (w = k, l = C), b
                    }, s ? lt(u) : u))).selector = t
                }
                return g
            }, c = st.select = function (t, e, n, r) {
                var i, c, l, u, d, p = "function" == typeof t && t, f = !r && a(t = p.selector || t);
                if (n = n || [], 1 === f.length) {
                    if (2 < (c = f[0] = f[0].slice(0)).length && "ID" === (l = c[0]).type && 9 === e.nodeType && m && o.relative[c[1].type]) {
                        if (!(e = (o.find.ID(l.matches[0].replace(et, nt), e) || [])[0])) return n;
                        p && (e = e.parentNode), t = t.slice(c.shift().value.length)
                    }
                    for (i = K.needsContext.test(t) ? 0 : c.length; i-- && (l = c[i], !o.relative[u = l.type]);) if ((d = o.find[u]) && (r = d(l.matches[0].replace(et, nt), tt.test(c[0].type) && vt(e.parentNode) || e))) {
                        if (c.splice(i, 1), !(t = r.length && bt(c))) return A.apply(n, r), n;
                        break
                    }
                }
                return (p || s(t, f))(r, e, !m, n, !e || tt.test(t) && vt(e.parentNode) || e), n
            }, n.sortStable = _.split("").sort(O).join("") === _, n.detectDuplicates = !!d, p(), n.sortDetached = ut(function (t) {
                return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
            }), ut(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || dt("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), n.attributes && ut(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || dt("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), ut(function (t) {
                return null == t.getAttribute("disabled")
            }) || dt(M, function (t, e, n) {
                var o;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }), st
        }(r);
        T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
        var O = function (t, e, n) {
            for (var o = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (r && T(t).is(n)) break;
                o.push(t)
            }
            return o
        }, D = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }, P = T.expr.match.needsContext;

        function I(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(t, e, n) {
            return y(e) ? T.grep(t, function (t, o) {
                return !!e.call(t, o, t) !== n
            }) : e.nodeType ? T.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? T.grep(t, function (t) {
                return -1 < d.call(e, t) !== n
            }) : T.filter(e, t, n)
        }

        T.filter = function (t, e, n) {
            var o = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === o.nodeType ? T.find.matchesSelector(o, t) ? [o] : [] : T.find.matches(t, T.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, T.fn.extend({
            find: function (t) {
                var e, n, o = this.length, r = this;
                if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
                    for (e = 0; e < o; e++) if (T.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < o; e++) T.find(t, r[e], n);
                return 1 < o ? T.uniqueSort(n) : n
            }, filter: function (t) {
                return this.pushStack(A(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(A(this, t || [], !0))
            }, is: function (t) {
                return !!A(this, "string" == typeof t && P.test(t) ? T(t) : t || [], !1).length
            }
        });
        var j, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function (t, e, n) {
            var o, r;
            if (!t) return this;
            if (n = n || j, "string" == typeof t) {
                if (!(o = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : N.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (o[1]) {
                    if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : _, !0)), L.test(o[1]) && T.isPlainObject(e)) for (o in e) y(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                    return this
                }
                return (r = _.getElementById(o[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this)
        }).prototype = T.fn, j = T(_);
        var M = /^(?:parents|prev(?:Until|All))/, q = {children: !0, contents: !0, next: !0, prev: !0};

        function R(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;) ;
            return t
        }

        T.fn.extend({
            has: function (t) {
                var e = T(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++) if (T.contains(this, e[t])) return !0
                })
            }, closest: function (t, e) {
                var n, o = 0, r = this.length, i = [], a = "string" != typeof t && T(t);
                if (!P.test(t)) for (; o < r; o++) for (n = this[o]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                    i.push(n);
                    break
                }
                return this.pushStack(1 < i.length ? T.uniqueSort(i) : i)
            }, index: function (t) {
                return t ? "string" == typeof t ? d.call(T(t), this[0]) : d.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), T.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return O(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return O(t, "parentNode", n)
            }, next: function (t) {
                return R(t, "nextSibling")
            }, prev: function (t) {
                return R(t, "previousSibling")
            }, nextAll: function (t) {
                return O(t, "nextSibling")
            }, prevAll: function (t) {
                return O(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return O(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return O(t, "previousSibling", n)
            }, siblings: function (t) {
                return D((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return D(t.firstChild)
            }, contents: function (t) {
                return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (I(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
            }
        }, function (t, e) {
            T.fn[t] = function (n, o) {
                var r = T.map(this, e, n);
                return "Until" !== t.slice(-5) && (o = n), o && "string" == typeof o && (r = T.filter(o, r)), 1 < this.length && (q[t] || T.uniqueSort(r), M.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var $ = /[^\x20\t\r\n\f]+/g;

        function H(t) {
            return t
        }

        function B(t) {
            throw t
        }

        function F(t, e, n, o) {
            var r;
            try {
                t && y(r = t.promise) ? r.call(t).done(e).fail(n) : t && y(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(o))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        T.Callbacks = function (t) {
            var e, n;
            t = "string" == typeof t ? (e = t, n = {}, T.each(e.match($) || [], function (t, e) {
                n[e] = !0
            }), n) : T.extend({}, t);
            var o, r, i, a, s = [], c = [], l = -1, u = function () {
                for (a = a || t.once, i = o = !0; c.length; l = -1) for (r = c.shift(); ++l < s.length;) !1 === s[l].apply(r[0], r[1]) && t.stopOnFalse && (l = s.length, r = !1);
                t.memory || (r = !1), o = !1, a && (s = r ? [] : "")
            }, d = {
                add: function () {
                    return s && (r && !o && (l = s.length - 1, c.push(r)), function e(n) {
                        T.each(n, function (n, o) {
                            y(o) ? t.unique && d.has(o) || s.push(o) : o && o.length && "string" !== x(o) && e(o)
                        })
                    }(arguments), r && !o && u()), this
                }, remove: function () {
                    return T.each(arguments, function (t, e) {
                        for (var n; -1 < (n = T.inArray(e, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                }, has: function (t) {
                    return t ? -1 < T.inArray(t, s) : 0 < s.length
                }, empty: function () {
                    return s && (s = []), this
                }, disable: function () {
                    return a = c = [], s = r = "", this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return a = c = [], r || o || (s = r = ""), this
                }, locked: function () {
                    return !!a
                }, fireWith: function (t, e) {
                    return a || (e = [t, (e = e || []).slice ? e.slice() : e], c.push(e), o || u()), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return d
        }, T.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                    n = "pending", o = {
                        state: function () {
                            return n
                        }, always: function () {
                            return i.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return o.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return T.Deferred(function (n) {
                                T.each(e, function (e, o) {
                                    var r = y(t[o[4]]) && t[o[4]];
                                    i[o[1]](function () {
                                        var t = r && r.apply(this, arguments);
                                        t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, then: function (t, n, o) {
                            var i = 0;

                            function a(t, e, n, o) {
                                return function () {
                                    var s = this, c = arguments, l = function () {
                                        var r, l;
                                        if (!(t < i)) {
                                            if ((r = n.apply(s, c)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                            l = r && ("object" == typeof r || "function" == typeof r) && r.then, y(l) ? o ? l.call(r, a(i, e, H, o), a(i, e, B, o)) : (i++, l.call(r, a(i, e, H, o), a(i, e, B, o), a(i, e, H, e.notifyWith))) : (n !== H && (s = void 0, c = [r]), (o || e.resolveWith)(s, c))
                                        }
                                    }, u = o ? l : function () {
                                        try {
                                            l()
                                        } catch (o) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(o, u.stackTrace), i <= t + 1 && (n !== B && (s = void 0, c = [o]), e.rejectWith(s, c))
                                        }
                                    };
                                    t ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), r.setTimeout(u))
                                }
                            }

                            return T.Deferred(function (r) {
                                e[0][3].add(a(0, r, y(o) ? o : H, r.notifyWith)), e[1][3].add(a(0, r, y(t) ? t : H)), e[2][3].add(a(0, r, y(n) ? n : B))
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? T.extend(t, o) : o
                        }
                    }, i = {};
                return T.each(e, function (t, r) {
                    var a = r[2], s = r[5];
                    o[r[1]] = a.add, s && a.add(function () {
                        n = s
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(r[3].fire), i[r[0]] = function () {
                        return i[r[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[r[0] + "With"] = a.fireWith
                }), o.promise(i), t && t.call(i, i), i
            }, when: function (t) {
                var e = arguments.length, n = e, o = Array(n), r = c.call(arguments), i = T.Deferred(),
                    a = function (t) {
                        return function (n) {
                            o[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : n, --e || i.resolveWith(o, r)
                        }
                    };
                if (e <= 1 && (F(t, i.done(a(n)).resolve, i.reject, !e), "pending" === i.state() || y(r[n] && r[n].then))) return i.then();
                for (; n--;) F(r[n], a(n), i.reject);
                return i.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function (t, e) {
            r.console && r.console.warn && t && W.test(t.name) && r.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, T.readyException = function (t) {
            r.setTimeout(function () {
                throw t
            })
        };
        var U = T.Deferred();

        function G() {
            _.removeEventListener("DOMContentLoaded", G), r.removeEventListener("load", G), T.ready()
        }

        T.fn.ready = function (t) {
            return U.then(t).catch(function (t) {
                T.readyException(t)
            }), this
        }, T.extend({
            isReady: !1, readyWait: 1, ready: function (t) {
                (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || U.resolveWith(_, [T])
            }
        }), T.ready.then = U.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? r.setTimeout(T.ready) : (_.addEventListener("DOMContentLoaded", G), r.addEventListener("load", G));
        var z = function (t, e, n, o, r, i, a) {
            var s = 0, c = t.length, l = null == n;
            if ("object" === x(n)) for (s in r = !0, n) z(t, e, s, n[s], !0, i, a); else if (void 0 !== o && (r = !0, y(o) || (a = !0), l && (a ? (e.call(t, o), e = null) : (l = e, e = function (t, e, n) {
                return l.call(T(t), n)
            })), e)) for (; s < c; s++) e(t[s], n, a ? o : o.call(t[s], s, e(t[s], n)));
            return r ? t : l ? e.call(t) : c ? e(t[0], n) : i
        }, V = /^-ms-/, K = /-([a-z])/g;

        function X(t, e) {
            return e.toUpperCase()
        }

        function Y(t) {
            return t.replace(V, "ms-").replace(K, X)
        }

        var Q = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function J() {
            this.expando = T.expando + J.uid++
        }

        J.uid = 1, J.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var o, r = this.cache(t);
                if ("string" == typeof e) r[Y(e)] = n; else for (o in e) r[Y(o)] = e[o];
                return r
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            }, access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in o ? [e] : e.match($) || []).length;
                        for (; n--;) delete o[e[n]]
                    }
                    (void 0 === e || T.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e)
            }
        };
        var Z = new J, tt = new J, et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, nt = /[A-Z]/g;

        function ot(t, e, n) {
            var o, r;
            if (void 0 === n && 1 === t.nodeType) if (o = "data-" + e.replace(nt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(o))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : et.test(r) ? JSON.parse(r) : r)
                } catch (t) {
                }
                tt.set(t, e, n)
            } else n = void 0;
            return n
        }

        T.extend({
            hasData: function (t) {
                return tt.hasData(t) || Z.hasData(t)
            }, data: function (t, e, n) {
                return tt.access(t, e, n)
            }, removeData: function (t, e) {
                tt.remove(t, e)
            }, _data: function (t, e, n) {
                return Z.access(t, e, n)
            }, _removeData: function (t, e) {
                Z.remove(t, e)
            }
        }), T.fn.extend({
            data: function (t, e) {
                var n, o, r, i = this[0], a = i && i.attributes;
                if (void 0 === t) {
                    if (this.length && (r = tt.get(i), 1 === i.nodeType && !Z.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (o = a[n].name).indexOf("data-") && (o = Y(o.slice(5)), ot(i, o, r[o]));
                        Z.set(i, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    tt.set(this, t)
                }) : z(this, function (e) {
                    var n;
                    if (i && void 0 === e) return void 0 !== (n = tt.get(i, t)) ? n : void 0 !== (n = ot(i, t)) ? n : void 0;
                    this.each(function () {
                        tt.set(this, t, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    tt.remove(this, t)
                })
            }
        }), T.extend({
            queue: function (t, e, n) {
                var o;
                if (t) return e = (e || "fx") + "queue", o = Z.get(t, e), n && (!o || Array.isArray(n) ? o = Z.access(t, e, T.makeArray(n)) : o.push(n)), o || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = T.queue(t, e), o = n.length, r = n.shift(), i = T._queueHooks(t, e);
                "inprogress" === r && (r = n.shift(), o--), r && ("fx" === e && n.unshift("inprogress"), delete i.stop, r.call(t, function () {
                    T.dequeue(t, e)
                }, i)), !o && i && i.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Z.get(t, n) || Z.access(t, n, {
                    empty: T.Callbacks("once memory").add(function () {
                        Z.remove(t, [e + "queue", n])
                    })
                })
            }
        }), T.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = T.queue(this, t, e);
                    T._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    T.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, o = 1, r = T.Deferred(), i = this, a = this.length, s = function () {
                    --o || r.resolveWith(i, [i])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) (n = Z.get(i[a], t + "queueHooks")) && n.empty && (o++, n.empty.add(s));
                return s(), r.promise(e)
            }
        });
        var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            it = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"), at = ["Top", "Right", "Bottom", "Left"],
            st = _.documentElement, ct = function (t) {
                return T.contains(t.ownerDocument, t)
            }, lt = {composed: !0};
        st.getRootNode && (ct = function (t) {
            return T.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
        });
        var ut = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && ct(t) && "none" === T.css(t, "display")
        };

        function dt(t, e, n, o) {
            var r, i, a = 20, s = o ? function () {
                    return o.cur()
                } : function () {
                    return T.css(t, e, "")
                }, c = s(), l = n && n[3] || (T.cssNumber[e] ? "" : "px"),
                u = t.nodeType && (T.cssNumber[e] || "px" !== l && +c) && it.exec(T.css(t, e));
            if (u && u[3] !== l) {
                for (c /= 2, l = l || u[3], u = +c || 1; a--;) T.style(t, e, u + l), (1 - i) * (1 - (i = s() / c || .5)) <= 0 && (a = 0), u /= i;
                u *= 2, T.style(t, e, u + l), n = n || []
            }
            return n && (u = +u || +c || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = l, o.start = u, o.end = r)), r
        }

        var pt = {};

        function ft(t, e) {
            for (var n, o, r, i, a, s, c, l = [], u = 0, d = t.length; u < d; u++) (o = t[u]).style && (n = o.style.display, e ? ("none" === n && (l[u] = Z.get(o, "display") || null, l[u] || (o.style.display = "")), "" === o.style.display && ut(o) && (l[u] = (c = a = i = void 0, a = (r = o).ownerDocument, s = r.nodeName, (c = pt[s]) || (i = a.body.appendChild(a.createElement(s)), c = T.css(i, "display"), i.parentNode.removeChild(i), "none" === c && (c = "block"), pt[s] = c)))) : "none" !== n && (l[u] = "none", Z.set(o, "display", n)));
            for (u = 0; u < d; u++) null != l[u] && (t[u].style.display = l[u]);
            return t
        }

        T.fn.extend({
            show: function () {
                return ft(this, !0)
            }, hide: function () {
                return ft(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    ut(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var ht, mt, gt = /^(?:checkbox|radio)$/i, vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            yt = /^$|^module$|\/(?:java|ecma)script/i;
        ht = _.createDocumentFragment().appendChild(_.createElement("div")), (mt = _.createElement("input")).setAttribute("type", "radio"), mt.setAttribute("checked", "checked"), mt.setAttribute("name", "t"), ht.appendChild(mt), v.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue, ht.innerHTML = "<option></option>", v.option = !!ht.lastChild;
        var bt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function _t(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && I(t, e) ? T.merge([t], n) : n
        }

        function Ct(t, e) {
            for (var n = 0, o = t.length; n < o; n++) Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"))
        }

        bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead, bt.th = bt.td, v.option || (bt.optgroup = bt.option = [1, "<select multiple='multiple'>", "</select>"]);
        var wt = /<|&#?\w+;/;

        function xt(t, e, n, o, r) {
            for (var i, a, s, c, l, u, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++) if ((i = t[f]) || 0 === i) if ("object" === x(i)) T.merge(p, i.nodeType ? [i] : i); else if (wt.test(i)) {
                for (a = a || d.appendChild(e.createElement("div")), s = (vt.exec(i) || ["", ""])[1].toLowerCase(), c = bt[s] || bt._default, a.innerHTML = c[1] + T.htmlPrefilter(i) + c[2], u = c[0]; u--;) a = a.lastChild;
                T.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
            } else p.push(e.createTextNode(i));
            for (d.textContent = "", f = 0; i = p[f++];) if (o && -1 < T.inArray(i, o)) r && r.push(i); else if (l = ct(i), a = _t(d.appendChild(i), "script"), l && Ct(a), n) for (u = 0; i = a[u++];) yt.test(i.type || "") && n.push(i);
            return d
        }

        var kt = /^key/, Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Et = /^([^.]*)(?:\.(.+)|)/;

        function St() {
            return !0
        }

        function Ot() {
            return !1
        }

        function Dt(t, e) {
            return t === function () {
                try {
                    return _.activeElement
                } catch (t) {
                }
            }() == ("focus" === e)
        }

        function Pt(t, e, n, o, r, i) {
            var a, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof n && (o = o || n, n = void 0), e) Pt(t, s, n, o, e[s], i);
                return t
            }
            if (null == o && null == r ? (r = n, o = n = void 0) : null == r && ("string" == typeof n ? (r = o, o = void 0) : (r = o, o = n, n = void 0)), !1 === r) r = Ot; else if (!r) return t;
            return 1 === i && (a = r, (r = function (t) {
                return T().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = T.guid++)), t.each(function () {
                T.event.add(this, e, r, o, n)
            })
        }

        function It(t, e, n) {
            n ? (Z.set(t, e, !1), T.event.add(t, e, {
                namespace: !1, handler: function (t) {
                    var o, r, i = Z.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (i.length) (T.event.special[e] || {}).delegateType && t.stopPropagation(); else if (i = c.call(arguments), Z.set(this, e, i), o = n(this, e), this[e](), i !== (r = Z.get(this, e)) || o ? Z.set(this, e, !1) : r = {}, i !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                    } else i.length && (Z.set(this, e, {value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)}), t.stopImmediatePropagation())
                }
            })) : void 0 === Z.get(t, e) && T.event.add(t, e, St)
        }

        T.event = {
            global: {}, add: function (t, e, n, o, r) {
                var i, a, s, c, l, u, d, p, f, h, m, g = Z.get(t);
                if (Q(t)) for (n.handler && (n = (i = n).handler, r = i.selector), r && T.find.matchesSelector(st, r), n.guid || (n.guid = T.guid++), (c = g.events) || (c = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (e) {
                    return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match($) || [""]).length; l--;) f = m = (s = Et.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = T.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = T.event.special[f] || {}, u = T.extend({
                    type: f,
                    origType: m,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, i), (p = c[f]) || ((p = c[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, o, h, a) || t.addEventListener && t.addEventListener(f, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), T.event.global[f] = !0)
            }, remove: function (t, e, n, o, r) {
                var i, a, s, c, l, u, d, p, f, h, m, g = Z.hasData(t) && Z.get(t);
                if (g && (c = g.events)) {
                    for (l = (e = (e || "").match($) || [""]).length; l--;) if (f = m = (s = Et.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = T.event.special[f] || {}, p = c[f = (o ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) u = p[i], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (p.splice(i, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
                        a && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || T.removeEvent(t, f, g.handle), delete c[f])
                    } else for (f in c) T.event.remove(t, f + e[l], n, o, !0);
                    T.isEmptyObject(c) && Z.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, n, o, r, i, a, s = new Array(arguments.length), c = T.event.fix(t),
                    l = (Z.get(this, "events") || Object.create(null))[c.type] || [], u = T.event.special[c.type] || {};
                for (s[0] = c, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                if (c.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, c)) {
                    for (a = T.event.handlers.call(this, c, l), e = 0; (r = a[e++]) && !c.isPropagationStopped();) for (c.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== i.namespace && !c.rnamespace.test(i.namespace) || (c.handleObj = i, c.data = i.data, void 0 !== (o = ((T.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (c.result = o) && (c.preventDefault(), c.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, c), c.result
                }
            }, handlers: function (t, e) {
                var n, o, r, i, a, s = [], c = e.delegateCount, l = t.target;
                if (c && l.nodeType && !("click" === t.type && 1 <= t.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                    for (i = [], a = {}, n = 0; n < c; n++) void 0 === a[r = (o = e[n]).selector + " "] && (a[r] = o.needsContext ? -1 < T(r, this).index(l) : T.find(r, this, null, [l]).length), a[r] && i.push(o);
                    i.length && s.push({elem: l, handlers: i})
                }
                return l = this, c < e.length && s.push({elem: l, handlers: e.slice(c)}), s
            }, addProp: function (t, e) {
                Object.defineProperty(T.Event.prototype, t, {
                    enumerable: !0, configurable: !0, get: y(e) ? function () {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[t]
                    }, set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[T.expando] ? t : new T.Event(t)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && I(e, "input") && It(e, "click", St), !1
                    }, trigger: function (t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && I(e, "input") && It(e, "click"), !0
                    }, _default: function (t) {
                        var e = t.target;
                        return gt.test(e.type) && e.click && I(e, "input") && Z.get(e, "click") || I(e, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, T.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, T.Event = function (t, e) {
            if (!(this instanceof T.Event)) return new T.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : Ot, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Ot,
            isPropagationStopped: Ot,
            isImmediatePropagationStopped: Ot,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
                var e = t.button;
                return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, T.event.addProp), T.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            T.event.special[t] = {
                setup: function () {
                    return It(this, t, Dt), !1
                }, trigger: function () {
                    return It(this, t), !0
                }, delegateType: e
            }
        }), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            T.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === this || T.contains(this, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), T.fn.extend({
            on: function (t, e, n, o) {
                return Pt(this, t, e, n, o)
            }, one: function (t, e, n, o) {
                return Pt(this, t, e, n, o, 1)
            }, off: function (t, e, n) {
                var o, r;
                if (t && t.preventDefault && t.handleObj) return o = t.handleObj, T(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Ot), this.each(function () {
                    T.event.remove(this, t, n, e)
                })
            }
        });
        var Lt = /<script|<style|<link/i, At = /checked\s*(?:[^=]|=\s*.checked.)/i,
            jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Nt(t, e) {
            return I(t, "table") && I(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
        }

        function Mt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function qt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Rt(t, e) {
            var n, o, r, i, a, s;
            if (1 === e.nodeType) {
                if (Z.hasData(t) && (s = Z.get(t).events)) for (r in Z.remove(e, "handle events"), s) for (n = 0, o = s[r].length; n < o; n++) T.event.add(e, r, s[r][n]);
                tt.hasData(t) && (i = tt.access(t), a = T.extend({}, i), tt.set(e, a))
            }
        }

        function $t(t, e, n, o) {
            e = l(e);
            var r, i, a, s, c, u, d = 0, p = t.length, f = p - 1, h = e[0], m = y(h);
            if (m || 1 < p && "string" == typeof h && !v.checkClone && At.test(h)) return t.each(function (r) {
                var i = t.eq(r);
                m && (e[0] = h.call(this, r, i.html())), $t(i, e, n, o)
            });
            if (p && (i = (r = xt(e, t[0].ownerDocument, !1, t, o)).firstChild, 1 === r.childNodes.length && (r = i), i || o)) {
                for (s = (a = T.map(_t(r, "script"), Mt)).length; d < p; d++) c = r, d !== f && (c = T.clone(c, !0, !0), s && T.merge(a, _t(c, "script"))), n.call(t[d], c, d);
                if (s) for (u = a[a.length - 1].ownerDocument, T.map(a, qt), d = 0; d < s; d++) c = a[d], yt.test(c.type || "") && !Z.access(c, "globalEval") && T.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, u) : w(c.textContent.replace(jt, ""), c, u))
            }
            return t
        }

        function Ht(t, e, n) {
            for (var o, r = e ? T.filter(e, t) : t, i = 0; null != (o = r[i]); i++) n || 1 !== o.nodeType || T.cleanData(_t(o)), o.parentNode && (n && ct(o) && Ct(_t(o, "script")), o.parentNode.removeChild(o));
            return t
        }

        T.extend({
            htmlPrefilter: function (t) {
                return t
            }, clone: function (t, e, n) {
                var o, r, i, a, s, c, l, u = t.cloneNode(!0), d = ct(t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (a = _t(u), o = 0, r = (i = _t(t)).length; o < r; o++) s = i[o], "input" === (l = (c = a[o]).nodeName.toLowerCase()) && gt.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
                if (e) if (n) for (i = i || _t(t), a = a || _t(u), o = 0, r = i.length; o < r; o++) Rt(i[o], a[o]); else Rt(t, u);
                return 0 < (a = _t(u, "script")).length && Ct(a, !d && _t(t, "script")), u
            }, cleanData: function (t) {
                for (var e, n, o, r = T.event.special, i = 0; void 0 !== (n = t[i]); i++) if (Q(n)) {
                    if (e = n[Z.expando]) {
                        if (e.events) for (o in e.events) r[o] ? T.event.remove(n, o) : T.removeEvent(n, o, e.handle);
                        n[Z.expando] = void 0
                    }
                    n[tt.expando] && (n[tt.expando] = void 0)
                }
            }
        }), T.fn.extend({
            detach: function (t) {
                return Ht(this, t, !0)
            }, remove: function (t) {
                return Ht(this, t)
            }, text: function (t) {
                return z(this, function (t) {
                    return void 0 === t ? T.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return $t(this, arguments, function (t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, t).appendChild(t)
                })
            }, prepend: function () {
                return $t(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Nt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return $t(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return $t(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(_t(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return T.clone(this, t, e)
                })
            }, html: function (t) {
                return z(this, function (t) {
                    var e = this[0] || {}, n = 0, o = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Lt.test(t) && !bt[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = T.htmlPrefilter(t);
                        try {
                            for (; n < o; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(_t(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return $t(this, arguments, function (e) {
                    var n = this.parentNode;
                    T.inArray(this, t) < 0 && (T.cleanData(_t(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            T.fn[t] = function (t) {
                for (var n, o = [], r = T(t), i = r.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), T(r[a])[e](n), u.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Bt = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"), Ft = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = r), e.getComputedStyle(t)
        }, Wt = function (t, e, n) {
            var o, r, i = {};
            for (r in e) i[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.call(t), e) t.style[r] = i[r];
            return o
        }, Ut = new RegExp(at.join("|"), "i");

        function Gt(t, e, n) {
            var o, r, i, a, s = t.style;
            return (n = n || Ft(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || ct(t) || (a = T.style(t, e)), !v.pixelBoxStyles() && Bt.test(a) && Ut.test(e) && (o = s.width, r = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = r, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function zt(t, e) {
            return {
                get: function () {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function t() {
                if (u) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", st.appendChild(l).appendChild(u);
                    var t = r.getComputedStyle(u);
                    n = "1%" !== t.top, c = 12 === e(t.marginLeft), u.style.right = "60%", a = 36 === e(t.right), o = 36 === e(t.width), u.style.position = "absolute", i = 12 === e(u.offsetWidth / 3), st.removeChild(l), u = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }

            var n, o, i, a, s, c, l = _.createElement("div"), u = _.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(v, {
                boxSizingReliable: function () {
                    return t(), o
                }, pixelBoxStyles: function () {
                    return t(), a
                }, pixelPosition: function () {
                    return t(), n
                }, reliableMarginLeft: function () {
                    return t(), c
                }, scrollboxSize: function () {
                    return t(), i
                }, reliableTrDimensions: function () {
                    var t, e, n, o;
                    return null == s && (t = _.createElement("table"), e = _.createElement("tr"), n = _.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", n.style.height = "9px", st.appendChild(t).appendChild(e).appendChild(n), o = r.getComputedStyle(e), s = 3 < parseInt(o.height), st.removeChild(t)), s
                }
            }))
        }();
        var Vt = ["Webkit", "Moz", "ms"], Kt = _.createElement("div").style, Xt = {};

        function Yt(t) {
            return T.cssProps[t] || Xt[t] || (t in Kt ? t : Xt[t] = function (t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;) if ((t = Vt[n] + e) in Kt) return t
            }(t) || t)
        }

        var Qt = /^(none|table(?!-c[ea]).+)/, Jt = /^--/,
            Zt = {position: "absolute", visibility: "hidden", display: "block"},
            te = {letterSpacing: "0", fontWeight: "400"};

        function ee(t, e, n) {
            var o = it.exec(e);
            return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : e
        }

        function ne(t, e, n, o, r, i) {
            var a = "width" === e ? 1 : 0, s = 0, c = 0;
            if (n === (o ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (c += T.css(t, n + at[a], !0, r)), o ? ("content" === n && (c -= T.css(t, "padding" + at[a], !0, r)), "margin" !== n && (c -= T.css(t, "border" + at[a] + "Width", !0, r))) : (c += T.css(t, "padding" + at[a], !0, r), "padding" !== n ? c += T.css(t, "border" + at[a] + "Width", !0, r) : s += T.css(t, "border" + at[a] + "Width", !0, r));
            return !o && 0 <= i && (c += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - c - s - .5)) || 0), c
        }

        function oe(t, e, n) {
            var o = Ft(t), r = (!v.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, o), i = r,
                a = Gt(t, e, o), s = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Bt.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && r || !v.reliableTrDimensions() && I(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(t, "display", !1, o)) && t.getClientRects().length && (r = "border-box" === T.css(t, "boxSizing", !1, o), (i = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + ne(t, e, n || (r ? "border" : "content"), i, o, a) + "px"
        }

        function re(t, e, n, o, r) {
            return new re.prototype.init(t, e, n, o, r)
        }

        T.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = Gt(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (t, e, n, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, i, a, s = Y(e), c = Jt.test(e), l = t.style;
                    if (c || (e = Yt(s)), a = T.cssHooks[e] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, o)) ? r : l[e];
                    "string" == (i = typeof n) && (r = it.exec(n)) && r[1] && (n = dt(t, e, r), i = "number"), null != n && n == n && ("number" !== i || c || (n += r && r[3] || (T.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, o)) || (c ? l.setProperty(e, n) : l[e] = n))
                }
            },
            css: function (t, e, n, o) {
                var r, i, a, s = Y(e);
                return Jt.test(e) || (e = Yt(s)), (a = T.cssHooks[e] || T.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = Gt(t, e, o)), "normal" === r && e in te && (r = te[e]), "" === n || n ? (i = parseFloat(r), !0 === n || isFinite(i) ? i || 0 : r) : r
            }
        }), T.each(["height", "width"], function (t, e) {
            T.cssHooks[e] = {
                get: function (t, n, o) {
                    if (n) return !Qt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? oe(t, e, o) : Wt(t, Zt, function () {
                        return oe(t, e, o)
                    })
                }, set: function (t, n, o) {
                    var r, i = Ft(t), a = !v.scrollboxSize() && "absolute" === i.position,
                        s = (a || o) && "border-box" === T.css(t, "boxSizing", !1, i), c = o ? ne(t, e, o, s, i) : 0;
                    return s && a && (c -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(i[e]) - ne(t, e, "border", !1, i) - .5)), c && (r = it.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = T.css(t, e)), ee(0, n, c)
                }
            }
        }), T.cssHooks.marginLeft = zt(v.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(Gt(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {marginLeft: 0}, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), T.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            T.cssHooks[t + e] = {
                expand: function (n) {
                    for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) r[t + at[o] + e] = i[o] || i[o - 2] || i[0];
                    return r
                }
            }, "margin" !== t && (T.cssHooks[t + e].set = ee)
        }), T.fn.extend({
            css: function (t, e) {
                return z(this, function (t, e, n) {
                    var o, r, i = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (o = Ft(t), r = e.length; a < r; a++) i[e[a]] = T.css(t, e[a], !1, o);
                        return i
                    }
                    return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
                }, t, e, 1 < arguments.length)
            }
        }), ((T.Tween = re).prototype = {
            constructor: re, init: function (t, e, n, o, r, i) {
                this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = o, this.unit = i || (T.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = re.propHooks[this.prop];
                return t && t.get ? t.get(this) : re.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = re.propHooks[this.prop];
                return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : re.propHooks._default.set(this), this
            }
        }).init.prototype = re.prototype, (re.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                }, set: function (t) {
                    T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = re.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, T.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, T.fx = re.prototype.init, T.fx.step = {};
        var ie, ae, se, ce, le = /^(?:toggle|show|hide)$/, ue = /queueHooks$/;

        function de() {
            ae && (!1 === _.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(de) : r.setTimeout(de, T.fx.interval), T.fx.tick())
        }

        function pe() {
            return r.setTimeout(function () {
                ie = void 0
            }), ie = Date.now()
        }

        function fe(t, e) {
            var n, o = 0, r = {height: t};
            for (e = e ? 1 : 0; o < 4; o += 2 - e) r["margin" + (n = at[o])] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function he(t, e, n) {
            for (var o, r = (me.tweeners[e] || []).concat(me.tweeners["*"]), i = 0, a = r.length; i < a; i++) if (o = r[i].call(n, e, t)) return o
        }

        function me(t, e, n) {
            var o, r, i = 0, a = me.prefilters.length, s = T.Deferred().always(function () {
                delete c.elem
            }), c = function () {
                if (r) return !1;
                for (var e = ie || pe(), n = Math.max(0, l.startTime + l.duration - e), o = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(o);
                return s.notifyWith(t, [l, o, n]), o < 1 && a ? n : (a || s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l]), !1)
            }, l = s.promise({
                elem: t,
                props: T.extend({}, e),
                opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ie || pe(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var o = T.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(o), o
                },
                stop: function (e) {
                    var n = 0, o = e ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < o; n++) l.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]), this
                }
            }), u = l.props;
            for (function (t, e) {
                var n, o, r, i, a;
                for (n in t) if (r = e[o = Y(n)], i = t[n], Array.isArray(i) && (r = i[1], i = t[n] = i[0]), n !== o && (t[o] = i, delete t[n]), (a = T.cssHooks[o]) && "expand" in a) for (n in i = a.expand(i), delete t[o], i) n in t || (t[n] = i[n], e[n] = r); else e[o] = r
            }(u, l.opts.specialEasing); i < a; i++) if (o = me.prefilters[i].call(l, t, u, l.opts)) return y(o.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = o.stop.bind(o)), o;
            return T.map(u, he, l), y(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(c, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })), l
        }

        T.Animation = T.extend(me, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return dt(n.elem, t, it.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                y(t) ? (e = t, t = ["*"]) : t = t.match($);
                for (var n, o = 0, r = t.length; o < r; o++) n = t[o], me.tweeners[n] = me.tweeners[n] || [], me.tweeners[n].unshift(e)
            }, prefilters: [function (t, e, n) {
                var o, r, i, a, s, c, l, u, d = "width" in e || "height" in e, p = this, f = {}, h = t.style,
                    m = t.nodeType && ut(t), g = Z.get(t, "fxshow");
                for (o in n.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, T.queue(t, "fx").length || a.empty.fire()
                    })
                })), e) if (r = e[o], le.test(r)) {
                    if (delete e[o], i = i || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[o]) continue;
                        m = !0
                    }
                    f[o] = g && g[o] || T.style(t, o)
                }
                if ((c = !T.isEmptyObject(e)) || !T.isEmptyObject(f)) for (o in d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = Z.get(t, "display")), "none" === (u = T.css(t, "display")) && (l ? u = l : (ft([t], !0), l = t.style.display || l, u = T.css(t, "display"), ft([t]))), ("inline" === u || "inline-block" === u && null != l) && "none" === T.css(t, "float") && (c || (p.done(function () {
                    h.display = l
                }), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), c = !1, f) c || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(t, "fxshow", {display: l}), i && (g.hidden = !m), m && ft([t], !0), p.done(function () {
                    for (o in m || ft([t]), Z.remove(t, "fxshow"), f) T.style(t, o, f[o])
                })), c = he(m ? g[o] : 0, o, p), o in g || (g[o] = c.start, m && (c.end = c.start, c.start = 0))
            }], prefilter: function (t, e) {
                e ? me.prefilters.unshift(t) : me.prefilters.push(t)
            }
        }), T.speed = function (t, e, n) {
            var o = t && "object" == typeof t ? T.extend({}, t) : {
                complete: n || !n && e || y(t) && t,
                duration: t,
                easing: n && e || e && !y(e) && e
            };
            return T.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in T.fx.speeds ? o.duration = T.fx.speeds[o.duration] : o.duration = T.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function () {
                y(o.old) && o.old.call(this), o.queue && T.dequeue(this, o.queue)
            }, o
        }, T.fn.extend({
            fadeTo: function (t, e, n, o) {
                return this.filter(ut).css("opacity", 0).show().end().animate({opacity: e}, t, n, o)
            }, animate: function (t, e, n, o) {
                var r = T.isEmptyObject(t), i = T.speed(e, n, o), a = function () {
                    var e = me(this, T.extend({}, t), i);
                    (r || Z.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, r || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            }, stop: function (t, e, n) {
                var o = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, r = null != t && t + "queueHooks", i = T.timers, a = Z.get(this);
                    if (r) a[r] && a[r].stop && o(a[r]); else for (r in a) a[r] && a[r].stop && ue.test(r) && o(a[r]);
                    for (r = i.length; r--;) i[r].elem !== this || null != t && i[r].queue !== t || (i[r].anim.stop(n), e = !1, i.splice(r, 1));
                    !e && n || T.dequeue(this, t)
                })
            }, finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var e, n = Z.get(this), o = n[t + "queue"], r = n[t + "queueHooks"], i = T.timers,
                        a = o ? o.length : 0;
                    for (n.finish = !0, T.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; e < a; e++) o[e] && o[e].finish && o[e].finish.call(this);
                    delete n.finish
                })
            }
        }), T.each(["toggle", "show", "hide"], function (t, e) {
            var n = T.fn[e];
            T.fn[e] = function (t, o, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(fe(e, !0), t, o, r)
            }
        }), T.each({
            slideDown: fe("show"),
            slideUp: fe("hide"),
            slideToggle: fe("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            T.fn[t] = function (t, n, o) {
                return this.animate(e, t, n, o)
            }
        }), T.timers = [], T.fx.tick = function () {
            var t, e = 0, n = T.timers;
            for (ie = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || T.fx.stop(), ie = void 0
        }, T.fx.timer = function (t) {
            T.timers.push(t), T.fx.start()
        }, T.fx.interval = 13, T.fx.start = function () {
            ae || (ae = !0, de())
        }, T.fx.stop = function () {
            ae = null
        }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (t, e) {
            return t = T.fx && T.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, n) {
                var o = r.setTimeout(e, t);
                n.stop = function () {
                    r.clearTimeout(o)
                }
            })
        }, se = _.createElement("input"), ce = _.createElement("select").appendChild(_.createElement("option")), se.type = "checkbox", v.checkOn = "" !== se.value, v.optSelected = ce.selected, (se = _.createElement("input")).value = "t", se.type = "radio", v.radioValue = "t" === se.value;
        var ge, ve = T.expr.attrHandle;
        T.fn.extend({
            attr: function (t, e) {
                return z(this, T.attr, t, e, 1 < arguments.length)
            }, removeAttr: function (t) {
                return this.each(function () {
                    T.removeAttr(this, t)
                })
            }
        }), T.extend({
            attr: function (t, e, n) {
                var o, r, i = t.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === i && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ge : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (o = r.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (o = r.get(t, e)) ? o : null == (o = T.find.attr(t, e)) ? void 0 : o)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!v.radioValue && "radio" === e && I(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, o = 0, r = e && e.match($);
                if (r && 1 === t.nodeType) for (; n = r[o++];) t.removeAttribute(n)
            }
        }), ge = {
            set: function (t, e, n) {
                return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = ve[e] || T.find.attr;
            ve[e] = function (t, e, o) {
                var r, i, a = e.toLowerCase();
                return o || (i = ve[a], ve[a] = r, r = null != n(t, e, o) ? a : null, ve[a] = i), r
            }
        });
        var ye = /^(?:input|select|textarea|button)$/i, be = /^(?:a|area)$/i;

        function _e(t) {
            return (t.match($) || []).join(" ")
        }

        function Ce(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function we(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match($) || []
        }

        T.fn.extend({
            prop: function (t, e) {
                return z(this, T.prop, t, e, 1 < arguments.length)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[T.propFix[t] || t]
                })
            }
        }), T.extend({
            prop: function (t, e, n) {
                var o, r, i = t.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (o = r.set(t, n, e)) ? o : t[e] = n : r && "get" in r && null !== (o = r.get(t, e)) ? o : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = T.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ye.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), v.optSelected || (T.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this
        }), T.fn.extend({
            addClass: function (t) {
                var e, n, o, r, i, a, s, c = 0;
                if (y(t)) return this.each(function (e) {
                    T(this).addClass(t.call(this, e, Ce(this)))
                });
                if ((e = we(t)).length) for (; n = this[c++];) if (r = Ce(n), o = 1 === n.nodeType && " " + _e(r) + " ") {
                    for (a = 0; i = e[a++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                    r !== (s = _e(o)) && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, o, r, i, a, s, c = 0;
                if (y(t)) return this.each(function (e) {
                    T(this).removeClass(t.call(this, e, Ce(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = we(t)).length) for (; n = this[c++];) if (r = Ce(n), o = 1 === n.nodeType && " " + _e(r) + " ") {
                    for (a = 0; i = e[a++];) for (; -1 < o.indexOf(" " + i + " ");) o = o.replace(" " + i + " ", " ");
                    r !== (s = _e(o)) && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t, o = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && o ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function (n) {
                    T(this).toggleClass(t.call(this, n, Ce(this), e), e)
                }) : this.each(function () {
                    var e, r, i, a;
                    if (o) for (r = 0, i = T(this), a = we(t); e = a[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== t && "boolean" !== n || ((e = Ce(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, o = 0;
                for (e = " " + t + " "; n = this[o++];) if (1 === n.nodeType && -1 < (" " + _e(Ce(n)) + " ").indexOf(e)) return !0;
                return !1
            }
        });
        var xe = /\r/g;
        T.fn.extend({
            val: function (t) {
                var e, n, o, r = this[0];
                return arguments.length ? (o = y(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (null == (r = o ? t.call(this, n, T(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(xe, "") : null == n ? "" : n : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : _e(T.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, n, o, r = t.options, i = t.selectedIndex, a = "select-one" === t.type, s = a ? null : [],
                            c = a ? i + 1 : r.length;
                        for (o = i < 0 ? c : a ? i : 0; o < c; o++) if (((n = r[o]).selected || o === i) && !n.disabled && (!n.parentNode.disabled || !I(n.parentNode, "optgroup"))) {
                            if (e = T(n).val(), a) return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, o, r = t.options, i = T.makeArray(e), a = r.length; a--;) ((o = r[a]).selected = -1 < T.inArray(T.valHooks.option.get(o), i)) && (n = !0);
                        return n || (t.selectedIndex = -1), i
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e)
                }
            }, v.checkOn || (T.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), v.focusin = "onfocusin" in r;
        var ke = /^(?:focusinfocus|focusoutblur)$/, Te = function (t) {
            t.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function (t, e, n, o) {
                var i, a, s, c, l, u, d, p, f = [n || _], m = h.call(t, "type") ? t.type : t,
                    g = h.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = p = s = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !ke.test(m + T.event.triggered) && (-1 < m.indexOf(".") && (m = (g = m.split(".")).shift(), g.sort()), l = m.indexOf(":") < 0 && "on" + m, (t = t[T.expando] ? t : new T.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), d = T.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, e))) {
                    if (!o && !d.noBubble && !b(n)) {
                        for (c = d.delegateType || m, ke.test(c + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (n.ownerDocument || _) && f.push(s.defaultView || s.parentWindow || r)
                    }
                    for (i = 0; (a = f[i++]) && !t.isPropagationStopped();) p = a, t.type = 1 < i ? c : d.bindType || m, (u = (Z.get(a, "events") || Object.create(null))[t.type] && Z.get(a, "handle")) && u.apply(a, e), (u = l && a[l]) && u.apply && Q(a) && (t.result = u.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), e) || !Q(n) || l && y(n[m]) && !b(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = m, t.isPropagationStopped() && p.addEventListener(m, Te), n[m](), t.isPropagationStopped() && p.removeEventListener(m, Te), T.event.triggered = void 0, s && (n[l] = s)), t.result
                }
            }, simulate: function (t, e, n) {
                var o = T.extend(new T.Event, n, {type: t, isSimulated: !0});
                T.event.trigger(o, null, e)
            }
        }), T.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    T.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return T.event.trigger(t, e, n, !0)
            }
        }), v.focusin || T.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                T.event.simulate(e, t.target, T.event.fix(t))
            };
            T.event.special[e] = {
                setup: function () {
                    var o = this.ownerDocument || this.document || this, r = Z.access(o, e);
                    r || o.addEventListener(t, n, !0), Z.access(o, e, (r || 0) + 1)
                }, teardown: function () {
                    var o = this.ownerDocument || this.document || this, r = Z.access(o, e) - 1;
                    r ? Z.access(o, e, r) : (o.removeEventListener(t, n, !0), Z.remove(o, e))
                }
            }
        });
        var Ee = r.location, Se = {guid: Date.now()}, Oe = /\?/;
        T.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new r.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
        };
        var De = /\[\]$/, Pe = /\r?\n/g, Ie = /^(?:submit|button|image|reset|file)$/i,
            Le = /^(?:input|select|textarea|keygen)/i;

        function Ae(t, e, n, o) {
            var r;
            if (Array.isArray(e)) T.each(e, function (e, r) {
                n || De.test(t) ? o(t, r) : Ae(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, o)
            }); else if (n || "object" !== x(e)) o(t, e); else for (r in e) Ae(t + "[" + r + "]", e[r], n, o)
        }

        T.param = function (t, e) {
            var n, o = [], r = function (t, e) {
                var n = y(e) ? e() : e;
                o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
                r(this.name, this.value)
            }); else for (n in t) Ae(n, t[n], e, r);
            return o.join("&")
        }, T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = T.prop(this, "elements");
                    return t ? T.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !T(this).is(":disabled") && Le.test(this.nodeName) && !Ie.test(t) && (this.checked || !gt.test(t))
                }).map(function (t, e) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
                        return {name: e.name, value: t.replace(Pe, "\r\n")}
                    }) : {name: e.name, value: n.replace(Pe, "\r\n")}
                }).get()
            }
        });
        var je = /%20/g, Ne = /#.*$/, Me = /([?&])_=[^&]*/, qe = /^(.*?):[ \t]*([^\r\n]*)$/gm, Re = /^(?:GET|HEAD)$/,
            $e = /^\/\//, He = {}, Be = {}, Fe = "*/".concat("*"), We = _.createElement("a");

        function Ue(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var o, r = 0, i = e.toLowerCase().match($) || [];
                if (y(n)) for (; o = i[r++];) "+" === o[0] ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(n)) : (t[o] = t[o] || []).push(n)
            }
        }

        function Ge(t, e, n, o) {
            var r = {}, i = t === Be;

            function a(s) {
                var c;
                return r[s] = !0, T.each(t[s] || [], function (t, s) {
                    var l = s(e, n, o);
                    return "string" != typeof l || i || r[l] ? i ? !(c = l) : void 0 : (e.dataTypes.unshift(l), a(l), !1)
                }), c
            }

            return a(e.dataTypes[0]) || !r["*"] && a("*")
        }

        function ze(t, e) {
            var n, o, r = T.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : o || (o = {}))[n] = e[n]);
            return o && T.extend(!0, t, o), t
        }

        We.href = Ee.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ee.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Fe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? ze(ze(t, T.ajaxSettings), e) : ze(T.ajaxSettings, t)
            },
            ajaxPrefilter: Ue(He),
            ajaxTransport: Ue(Be),
            ajax: function (t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, o, i, a, s, c, l, u, d, p, f = T.ajaxSetup({}, e), h = f.context || f,
                    m = f.context && (h.nodeType || h.jquery) ? T(h) : T.event, g = T.Deferred(),
                    v = T.Callbacks("once memory"), y = f.statusCode || {}, b = {}, C = {}, w = "canceled", x = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (l) {
                                if (!a) for (a = {}; e = qe.exec(i);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        }, getAllResponseHeaders: function () {
                            return l ? i : null
                        }, setRequestHeader: function (t, e) {
                            return null == l && (t = C[t.toLowerCase()] = C[t.toLowerCase()] || t, b[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == l && (f.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (l) x.always(t[x.status]); else for (e in t) y[e] = [y[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || w;
                            return n && n.abort(e), k(0, e), this
                        }
                    };
                if (g.promise(x), f.url = ((t || f.url || Ee.href) + "").replace($e, Ee.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match($) || [""], null == f.crossDomain) {
                    c = _.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = T.param(f.data, f.traditional)), Ge(He, f, e, x), l) return x;
                for (d in (u = T.event && f.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Re.test(f.type), o = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(je, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Oe.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Me, "$1"), p = (Oe.test(o) ? "&" : "?") + "_=" + Se.guid++ + p), f.url = o + p), f.ifModified && (T.lastModified[o] && x.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && x.setRequestHeader("If-None-Match", T.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : f.accepts["*"]), f.headers) x.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || l)) return x.abort();
                if (w = "abort", v.add(f.complete), x.done(f.success), x.fail(f.error), n = Ge(Be, f, e, x)) {
                    if (x.readyState = 1, u && m.trigger("ajaxSend", [x, f]), l) return x;
                    f.async && 0 < f.timeout && (s = r.setTimeout(function () {
                        x.abort("timeout")
                    }, f.timeout));
                    try {
                        l = !1, n.send(b, k)
                    } catch (t) {
                        if (l) throw t;
                        k(-1, t)
                    }
                } else k(-1, "No Transport");

                function k(t, e, a, c) {
                    var d, p, b, _, C, w = e;
                    l || (l = !0, s && r.clearTimeout(s), n = void 0, i = c || "", x.readyState = 0 < t ? 4 : 0, d = 200 <= t && t < 300 || 304 === t, a && (_ = function (t, e, n) {
                        for (var o, r, i, a, s = t.contents, c = t.dataTypes; "*" === c[0];) c.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (o) for (r in s) if (s[r] && s[r].test(o)) {
                            c.unshift(r);
                            break
                        }
                        if (c[0] in n) i = c[0]; else {
                            for (r in n) {
                                if (!c[0] || t.converters[r + " " + c[0]]) {
                                    i = r;
                                    break
                                }
                                a || (a = r)
                            }
                            i = i || a
                        }
                        if (i) return i !== c[0] && c.unshift(i), n[i]
                    }(f, x, a)), !d && -1 < T.inArray("script", f.dataTypes) && (f.converters["text script"] = function () {
                    }), _ = function (t, e, n, o) {
                        var r, i, a, s, c, l = {}, u = t.dataTypes.slice();
                        if (u[1]) for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
                        for (i = u.shift(); i;) if (t.responseFields[i] && (n[t.responseFields[i]] = e), !c && o && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = i, i = u.shift()) if ("*" === i) i = c; else if ("*" !== c && c !== i) {
                            if (!(a = l[c + " " + i] || l["* " + i])) for (r in l) if ((s = r.split(" "))[1] === i && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[r] : !0 !== l[r] && (i = s[0], u.unshift(s[1]));
                                break
                            }
                            if (!0 !== a) if (a && t.throws) e = a(e); else try {
                                e = a(e)
                            } catch (t) {
                                return {state: "parsererror", error: a ? t : "No conversion from " + c + " to " + i}
                            }
                        }
                        return {state: "success", data: e}
                    }(f, _, x, d), d ? (f.ifModified && ((C = x.getResponseHeader("Last-Modified")) && (T.lastModified[o] = C), (C = x.getResponseHeader("etag")) && (T.etag[o] = C)), 204 === t || "HEAD" === f.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, p = _.data, d = !(b = _.error))) : (b = w, !t && w || (w = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || w) + "", d ? g.resolveWith(h, [p, w, x]) : g.rejectWith(h, [x, w, b]), x.statusCode(y), y = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [x, f, d ? p : b]), v.fireWith(h, [x, w]), u && (m.trigger("ajaxComplete", [x, f]), --T.active || T.event.trigger("ajaxStop")))
                }

                return x
            },
            getJSON: function (t, e, n) {
                return T.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return T.get(t, void 0, e, "script")
            }
        }), T.each(["get", "post"], function (t, e) {
            T[e] = function (t, n, o, r) {
                return y(n) && (r = r || o, o = n, n = void 0), T.ajax(T.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: o
                }, T.isPlainObject(t) && t))
            }
        }), T.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        }), T._evalUrl = function (t, e, n) {
            return T.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (t) {
                    T.globalEval(t, e, n)
                }
            })
        }, T.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            }, wrapInner: function (t) {
                return y(t) ? this.each(function (e) {
                    T(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = T(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = y(t);
                return this.each(function (n) {
                    T(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    T(this).replaceWith(this.childNodes)
                }), this
            }
        }), T.expr.pseudos.hidden = function (t) {
            return !T.expr.pseudos.visible(t)
        }, T.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, T.ajaxSettings.xhr = function () {
            try {
                return new r.XMLHttpRequest
            } catch (t) {
            }
        };
        var Ve = {0: 200, 1223: 204}, Ke = T.ajaxSettings.xhr();
        v.cors = !!Ke && "withCredentials" in Ke, v.ajax = Ke = !!Ke, T.ajaxTransport(function (t) {
            var e, n;
            if (v.cors || Ke && !t.crossDomain) return {
                send: function (o, i) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                    e = function (t) {
                        return function () {
                            e && (e = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ve[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), n = s.onerror = s.ontimeout = e("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function () {
                        4 === s.readyState && r.setTimeout(function () {
                            e && n()
                        })
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (o) {
                        if (e) throw o
                    }
                }, abort: function () {
                    e && e()
                }
            }
        }), T.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return T.globalEval(t), t
                }
            }
        }), T.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), T.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function (o, r) {
                    e = T("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), _.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        });
        var Xe, Ye = [], Qe = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Ye.pop() || T.expando + "_" + Se.guid++;
                return this[t] = !0, t
            }
        }), T.ajaxPrefilter("json jsonp", function (t, e, n) {
            var o, i, a,
                s = !1 !== t.jsonp && (Qe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qe, "$1" + o) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
                return a || T.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", i = r[o], r[o] = function () {
                a = arguments
            }, n.always(function () {
                void 0 === i ? T(r).removeProp(o) : r[o] = i, t[o] && (t.jsonpCallback = e.jsonpCallback, Ye.push(o)), a && y(i) && i(a[0]), a = i = void 0
            }), "script"
        }), v.createHTMLDocument = ((Xe = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), T.parseHTML = function (t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((o = (e = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, e.head.appendChild(o)) : e = _), i = !n && [], (r = L.exec(t)) ? [e.createElement(r[1])] : (r = xt([t], e, i), i && i.length && T(i).remove(), T.merge([], r.childNodes)));
            var o, r, i
        }, T.fn.load = function (t, e, n) {
            var o, r, i, a = this, s = t.indexOf(" ");
            return -1 < s && (o = _e(t.slice(s)), t = t.slice(0, s)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < a.length && T.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                i = arguments, a.html(o ? T("<div>").append(T.parseHTML(t)).find(o) : t)
            }).always(n && function (t, e) {
                a.each(function () {
                    n.apply(this, i || [t.responseText, e, t])
                })
            }), this
        }, T.expr.pseudos.animated = function (t) {
            return T.grep(T.timers, function (e) {
                return t === e.elem
            }).length
        }, T.offset = {
            setOffset: function (t, e, n) {
                var o, r, i, a, s, c, l = T.css(t, "position"), u = T(t), d = {};
                "static" === l && (t.style.position = "relative"), s = u.offset(), i = T.css(t, "top"), c = T.css(t, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + c).indexOf("auto") ? (a = (o = u.position()).top, r = o.left) : (a = parseFloat(i) || 0, r = parseFloat(c) || 0), y(e) && (e = e.call(t, n, T.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
            }
        }, T.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    T.offset.setOffset(this, t, e)
                });
                var e, n, o = this[0];
                return o ? o.getClientRects().length ? (e = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var t, e, n, o = this[0], r = {top: 0, left: 0};
                    if ("fixed" === T.css(o, "position")) e = o.getBoundingClientRect(); else {
                        for (e = this.offset(), n = o.ownerDocument, t = o.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                        t && t !== o && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - r.top - T.css(o, "marginTop", !0),
                        left: e.left - r.left - T.css(o, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                    return t || st
                })
            }
        }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = "pageYOffset" === e;
            T.fn[t] = function (o) {
                return z(this, function (t, o, r) {
                    var i;
                    if (b(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === r) return i ? i[e] : t[o];
                    i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : t[o] = r
                }, t, o, arguments.length)
            }
        }), T.each(["top", "left"], function (t, e) {
            T.cssHooks[e] = zt(v.pixelPosition, function (t, n) {
                if (n) return n = Gt(t, e), Bt.test(n) ? T(t).position()[e] + "px" : n
            })
        }), T.each({Height: "height", Width: "width"}, function (t, e) {
            T.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, o) {
                T.fn[o] = function (r, i) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === i ? "margin" : "border");
                    return z(this, function (e, n, r) {
                        var i;
                        return b(e) ? 0 === o.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? T.css(e, n, s) : T.style(e, n, r, s)
                    }, e, a ? r : void 0, a)
                }
            })
        }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            T.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), T.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, o) {
                return this.on(e, t, n, o)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }, hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            T.fn[e] = function (t, n) {
                return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
            }
        });
        var Je = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        T.proxy = function (t, e) {
            var n, o, r;
            if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return o = c.call(arguments, 2), (r = function () {
                return t.apply(e || this, o.concat(c.call(arguments)))
            }).guid = t.guid = t.guid || T.guid++, r
        }, T.holdReady = function (t) {
            t ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = I, T.isFunction = y, T.isWindow = b, T.camelCase = Y, T.type = x, T.now = Date.now, T.isNumeric = function (t) {
            var e = T.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, T.trim = function (t) {
            return null == t ? "" : (t + "").replace(Je, "")
        }, n(11) && (void 0 === (o = function () {
            return T
        }.apply(e, [])) || (t.exports = o));
        var Ze = r.jQuery, tn = r.$;
        return T.noConflict = function (t) {
            return r.$ === T && (r.$ = tn), t && r.jQuery === T && (r.jQuery = Ze), T
        }, void 0 === i && (r.jQuery = r.$ = T), T
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    e.MEDIA_FOR_PHONE_SM = 360, e.MEDIA_FOR_PHONE_ONLY = 600, e.MEDIA_FOR_TABLET_MIDDLE = 768;
    const o = e.MEDIA_FOR_DESKTOP_UP = 991, r = (e.MEDIA_FOR_BIG_DESKTOP = 1180, e.MAIN_WRAPPER_WIDTH = 1440),
        i = (e.MEDIA_FOR_HEIGHT_MOB_SMALL = 700, e.getWindowWidth = (() => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)),
        a = e.getWindowHeight = (() => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    e.WINDOW_H = a(), e.WINDOW_W = i(), e.GOOGLE_MAPS_KEY = "AIzaSyAP8bQ9UIl9rdC57tPszwWyUVDKGPf1LIg", e.captchaCode = "6LfDTtoUAAAAAIpZZhkEWMd27KTc17hqweDX1BEm", e.defaultCityId = 38044, e.iconBase = "/dist/images/marker.svg", e.iconHover = "/dist/images/marker-violet.svg", e.notFound = -1, e.stringEmpty = "", e.stringTrue = "true", e.locale = "ru-RU", e.loaderHtml = '<div id="loader" style="width: 100%; text-align: center;"><img style="width: 10%; max-width: 10%;" src="/dist/images/loader.svg" alt="loader"></div>', e.absoluteloader = '<div class="loader" style="position: absolute;filter: brightness(0.5);"><img src="/dist/images/loader.svg" alt="loader" /></div>', e.loader = '<div class="loader"><img src="/dist/images/loader.svg" alt="loader" /></div>', e.defaultProductImage = "/dist/images/zaglushka-listing.jpg", e.queryTypes = {
        POST: "POST",
        GET: "GET",
        DELETE: "DELETE",
        PUT: "PUT",
        PATCH: "PATCH"
    }, e.variableTypes = {
        string: "string",
        object: "object",
        function: "function",
        number: "number",
        boolean: "boolean",
        undefined: "undefined",
        symbol: "symbol"
    }, e.carouselOptions = {
        items: 3,
        margin: 1,
        autoHeight: !0,
        dots: !1,
        nav: !1,
        mouseDrag: !1,
        responsive: {[o]: {items: 4}, [r]: {items: 5}}
    }, e.productIdsSeparator = ",", e.filterSeparator = "-", e.propertySeparator = ";", e.tokenSeparator = "_", e.defaultZoomSize = 15, e.defaultShopZoomSize = 11, e.defaultShopDefaultCityZoomSize = 10, e.defaultPostDeptZoomSize = 11, e.updateFavoriteEvent = "FAVORITE_UPDATE", e.storageCityKey = "city_id"
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.cookieParts = e.cookieObjectSpliter = e.cookieClassSpliter = void 0, e.setTextOnBuyButtonForGiftsToCart = _, e.openGiftProductsPopUp = function (e) {
            if (!e) return;
            const n = t("#gift-products-popup-js");
            if (0 === n.length) return;
            (0, g.showPopup)(n), n.html(o.loader), t.ajax({
                type: "GET", url: e, success: function (t) {
                    t && t.length > 0 && n.html(t)
                }
            })
        }, e.setCounter = function (e = null, n = null) {
            const r = t(".header-favorite__count");
            if (0 === r.length) return 0;
            null === e && (e = parseInt(r.text()));
            e || (e = 0);
            null != n && typeof n === o.variableTypes.number && (e += n);
            e < 0 && (e = 0);
            0 !== e || r.hasClass("hidden") ? e > 0 && r.hasClass("hidden") && r.removeClass("hidden") : r.addClass("hidden");
            r.text(e.toString()), 0 == e ? t(".mobile-header-favorite__count").text("") : t(".mobile-header-favorite__count").text(`, ${e}`);
            return t(document).trigger(o.updateFavoriteEvent, [e]), e
        }, e.setButton = function (e, n = null) {
            let o = t(e);
            const r = o.find("input");
            null === n ? n = r.prop("checked") : r.prop("checked", n);
            const i = n ? o.attr("data-in-favorite-list") : o.attr("data-add-to-favorite-list");
            if (o.find("label > span").text(i), t("#shopcart").length > 0 && r.hasClass("cart-fav")) {
                const t = r.closest(".shop-cart__item-nav__link").find("i.icon");
                n ? (t.removeClass("icon-heart"), t.addClass("icon-heart-filled")) : (t.removeClass("icon-heart-filled"), t.addClass("icon-heart"))
            }
            return n
        }, e.scrollTo = function (e, n = 1, o = 0) {
            e = t(e), t([document.documentElement, document.body]).animate({scrollTop: e.offset().top - o}, n)
        }, e.getProductsTitle = function (t, e) {
            const n = t.attr("data-lang");
            if (void 0 === n) return "";
            {
                const t = n.split(";"), o = [2, 0, 1, 1, 1, 2];
                return t[e % 100 > 4 && e % 100 < 20 ? 2 : o[e % 10 < 5 ? e % 10 : 5]]
            }
        }, e.setCashBackTitle = function () {
            if (t("#cashbackTitle").length) {
                const e = t("#cashbackTitle").text();
                t(".cashback-text:empty").text(e)
            }
        }, e.closeMobilePopup = function (e) {
            let n = t(".popup__wrap");
            if (C(e.target)) return n.closest(".popup").removeClass("popup_active popup_active-seo"), (0, r.clearAllBodyScrollLocks)(), !1
        }, e.isCorrectClosePopupTarget = C, e.deleteCookie = w, e.getCookie = x, e.setCookie = k, e.setTextOnBuyButtonForReloadPage = T, e.setTextOnBuyButtonForAddProductToBasket = E, e.updateCartItems = S, e.getProductIds = O, e.getProductIdsWithSeparator = function (e, n = null) {
            const o = null === n ? t(e).find(".header-tooltip__cards-item__close.icon-close-light") : t(e).find(n),
                r = new Array;
            for (let e = 0; e < o.length; e++) {
                let n = t(o[e]).attr("data-id"), i = t(o[e]).attr("data-classid");
                r.push(`${n}-${i}`)
            }
            return r
        }, e.initBestCardCarousel = function () {
            (0, i.initCarousel)({
                items: 4,
                margin: 30,
                dots: !1,
                nav: !1
            }, t(".best-card .owl-carousel"), t(".js-best-card-nav-next"), t(".js-best-card-nav-prev"))
        }, e.initRecentlyCarousel = D, e.phoneOnFocus = P, e.phoneOnBlur = I, e.phoneOnKeypress = L, e.getDividedNumbers = function (t) {
            return t.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
        }, e.addToCart = function (e, n, r, i = !1) {
            let a = t("html").attr("data-selectedcityid");
            return t.ajax({
                type: o.queryTypes.PUT,
                url: r,
                data: {objectId: e, classId: n, store: {cityId: a}},
                success: function () {
                    w("payinfo"), S(i, !1, !0), t("#shopcart").length > 0 && (0, c.reloadCartItems)()
                }
            })
        }, e.setTextOnBuyButtonOnKitForUploadBasket = function () {
            const e = t(".kit-inner-carousel");
            for (let t = 0; t < e.length; t++) N((0, l.getActiveKititem)(e[t]))
        }, e.setTextOnBuyButtonOnGiftForUploadBasket = function () {
            const e = t(".gift-inner-carousel");
            for (let t = 0; t < e.length; t++) A((0, l.getActiveGiftItem)(e[t]))
        }, e.setTextOnBuyButtonForGiftToCart = A, e.setTextOnBuyButtonForDeleteProductFromBasket = function (e, n) {
            const o = t(`.buy-button[data-code=${e}]`);
            for (let e = 0; e < o.length; e++) {
                const n = t(o[e]);
                n.hasClass("outlet") || (n.removeClass("is-in-cart"), n.find("p").text(n.data("title")))
            }
            if (n) {
                const o = t(`[data-mainproductcode=${e}]`);
                o.length > 0 && o.each(function (e, o) {
                    let r = t(o);
                    r.hasClass(`get-${n}`) && (r.removeClass("is-kit-in-cart"), r.find("p").text(r.attr("data-title")))
                })
            }
        }, e.getProductsForHeaderFavoritePopUp = function (e, n = !0) {
            let r = t(e);
            const i = r.attr("data-url"), a = t("#favorite-header-popup");
            if (!i || 0 === a.length || n && r.hasClass("show")) return;
            r.addClass("show"), a.html(o.loader), t.ajax({
                type: o.queryTypes.POST, url: i, success: function (t) {
                    a.html(t)
                }
            })
        }, e.toggleCollapseGroup = function (e, n = !1) {
            let o = t(e), r = o.parent().find(".listing__sidebar-body"), i = o.parent().find(".more-item");
            const a = n ? 0 : 200;
            o.hasClass("active") ? (o.removeClass("active"), r.slideDown(a, () => r.removeClass("inactive")), i.slideDown(a)) : (o.addClass("active"), r.slideUp(a, () => r.addClass("inactive")), i.slideUp(a));
            return !1
        }, e.openUserMenu = function () {
            let e = t(".user-menu");
            if (0 === e.length) return Promise.resolve(!1);
            const n = e.attr("data-url");
            return t.ajax({
                url: n, type: o.queryTypes.GET, cache: !1, success: function (n) {
                    e.html(n);
                    const o = t("#userInfo"), r = o.attr("data-phone");
                    t(".callback-phone").val(r).trigger("input").trigger("keyup"), t(".user-menu .js-toggle-tooltip").on("click", function () {
                        const e = t(this).parent().find(".tooltip");
                        t(this).toggleClass("tooltip-link_open"), t(".tooltip").removeClass("tooltip_active"), "hidden" == e.css("visibility") && e.addClass("tooltip_active")
                    });
                    const i = t(".header-favorite__count");
                    if (i.length > 0 && "0" !== i.text() && ", 0" !== i.text()) {
                        const e = t(".header-favorite_count");
                        e.find("span").text(`, ${i.text()}`), e.addClass("active")
                    }
                }
            })
        }, e.executeOnDesktopOnly = function (t) {
            o.WINDOW_W >= o.MEDIA_FOR_DESKTOP_UP && t && "function" == typeof t && t()
        }, e.isSetInCart = j, e.setTextOnBuyButtonForKitToCart = N, e.getRecentlyItems = function () {
            return new Promise((e, n) => {
                const r = t("#recently-items");
                if (r.length > 0) {
                    const i = r.attr("data-url");
                    t.ajax({
                        type: o.queryTypes.GET, url: i, success: function (t) {
                            if (!t) return r.remove(), n();
                            r.html(t).promise().done(function () {
                                return D(), r.removeClass("carousel-container-reserved"), e()
                            })
                        }
                    })
                }
                return e()
            })
        }, e.getBestOffersItems = function () {
            const e = t("#best-offers");
            if (0 === e.length) return;
            const n = e.attr("data-url");
            t.ajax({
                type: o.queryTypes.GET, url: n, success: function (t) {
                    e.html(t).promise().done(function () {
                        (0, u.default)()
                    })
                }
            })
        }, e.initProductWithCommentCarousel = function (e) {
            e && t(".card-comment.mobile-comment").length > 2 && (0, i.initCarousel)({
                items: 2,
                margin: 1,
                autoHeight: !0,
                dots: !1,
                nav: !1
            }, t(e).find(".js-review-carousel"), t(e).find(".js-review-carousel-nav-next"), t(e).find(".js-review-carousel-nav-prev"))
        }, e.initCardsSimpleCarousel = function () {
            const e = t(".js-cards-simple-carousel").attr("data-count");
            let n, r = t(".products-best-right"), a = t(".products-best-left");
            n = o.WINDOW_W >= o.MEDIA_FOR_BIG_DESKTOP ? 4 : o.WINDOW_W <= o.MEDIA_FOR_TABLET_MIDDLE ? 2 : 3;
            e <= n && (r.hide(), a.hide(), r = null, a = null);
            (0, i.initCarousel)({
                items: 2,
                margin: 1,
                autoHeight: !0,
                dots: !1,
                nav: !1,
                mouseDrag: !1,
                responsive: {[o.MEDIA_FOR_TABLET_MIDDLE]: {items: 3}, [o.MEDIA_FOR_BIG_DESKTOP]: {items: 4}}
            }, t(".js-cards-simple-carousel"), r, a, !1, !0, m.onScrollMobileCarouselItems, m.onCarouselItemsChanged)
        }, e.loadMobileMenu = function () {
            return new Promise((e, n) => ((0, d.default)() || (0, p.default)(), t("#mobile-menu-phone, .callback-input-block").focus(function () {
                P(t(this))
            }), t("#mobile-menu-phone, .callback-input-block").on("input", function () {
                I(t(this))
            }), t("#mobile-menu-phone, .callback-input-block").keypress(function (e) {
                let n = t(this), o = n.val();
                L(n, e);
                let r = n.parents(".tooltip__col").find("button");
                18 === o.length ? r.removeClass("callback-submit") : r.addClass("callback-submit")
            }), t(".callback-submit").on("click", function (e) {
                let n = t(this), r = n.parents(".tooltip__contacts").find(".callback-phone").val(),
                    i = n.parents(".tooltip__col").find("[type=radio]:checked").attr("data-type"),
                    a = n.parents(".tooltip__col").attr("data-url"), s = t("[name=__RequestVerificationToken]").val();
                t.ajax({
                    type: o.queryTypes.POST,
                    url: a,
                    data: {phone: r, type: i, __RequestVerificationToken: s},
                    success: function (e) {
                        1 == e.success && ((0, g.showPopup)(t("#callback-thnks-popup")), t("[name=callBackPhone]").val(o.stringEmpty), t(".tooltip").removeClass("tooltip_active"), n.parents(".header__sub-contacts").find(".js-toggle-tooltip").removeClass("tooltip-link_open"))
                    }
                })
            }), e()))
        }, e.initPromoCardTimers = function () {
            const e = t(".js-promo-card-timer");
            e.length > 0 && e.each(function () {
                const e = t(this);
                if (!e.hasClass("is-inited-timer")) {
                    let t = e.hasClass("timer-with-days");
                    (0, f.default)(e.attr("id"), !1, t), e.addClass("is-inited-timer")
                }
            })
        }, e.initStreetSelect2 = function (e) {
            t(".street-selector").each(function () {
                let n = t(this), o = n.parents(".dropdown-grid");
                const r = n.attr("data-noresult");
                n.select2({
                    tags: !0, createTag: function (t) {
                        return {id: t.term, text: t.term}
                    }, insertTag: function (t, e) {
                        0 === t.length && (e.text = r, t.push(e))
                    }, ajax: {
                        url: n.attr("data-url"), delay: 500, dataType: "json", data: function (t) {
                            let n = {cityId: e, keyword: t.term};
                            return n
                        }, processResults: function (e, n) {
                            return {
                                results: e.map(function (o) {
                                    return {
                                        text: function (e, n, o) {
                                            if (1 === e.length) return `<b>${M(n.type, n.name, n.district)}</b>`;
                                            if ("" === t.trim(o.term)) return M(n.type, n.name, n.district);
                                            if (void 0 === n.name) return null;
                                            if (n.name.toLowerCase().indexOf(o.term.toLowerCase()) > -1) return M(n.type, n.name.replace(new RegExp(`(${o.term})`, "gi"), "<b>$1</b>"), n.district);
                                            return M(n.type, n.name, n.district)
                                        }(e, o, n), id: o.id, name: o.name, type: o.type
                                    }
                                })
                            }
                        }
                    }, escapeMarkup: function (t) {
                        return t
                    }, templateResult: function (t) {
                        return t.htmlmatch ? t.htmlmatch : t.text
                    }, dropdownParent: o, placeholder: function () {
                        t(this).attr("data-placeholder")
                    }, language: {
                        noResults: function () {
                            return r
                        }
                    }, width: "100%"
                }), n.on("select2:close", function (e) {
                    let n = t(this), o = n.val(), r = n.select2("data");
                    if (r.length > 0) {
                        let t = r[0];
                        n.parent().removeClass("invalid");
                        let e = n.prev(".street-id-container");
                        if (isNaN(o)) e.attr("data-street-id", ""), e.attr("data-street-selected", o); else {
                            let n = t.text.replace(/<\/?[^>]+(>|$)/g, "");
                            e.attr("data-street-id", o), e.attr("data-street-selected", n)
                        }
                    }
                }), n.on("select2:open", function (t) {
                    t.target.nextElementSibling.nextElementSibling.querySelector("input").setAttribute("placeholder", "")
                })
            })
        }, e.debounce = function (t, e) {
            return function (n) {
                const o = this.lastCall;
                this.lastCall = Date.now(), o && this.lastCall - o <= e && clearTimeout(this.lastCallTimer), this.lastCallTimer = setTimeout(() => t(n), e)
            }
        }, e.changeProductsDataQuantity = function (e, n) {
            let o = t(e);
            o.attr("data-quantity", n);
            let r = o.find(".checkout-tovar-body");
            if (r && r.length > 0) for (let e = 0; e < r.length; e++) t(r[e]).attr("data-quantity", n)
        }, e.addMailToOnEmailLink = function (e, n) {
            if (e && n) {
                let o = "mailto:" + n;
                t(e).attr("href", o)
            }
        }, e.addContextMenuOnPhoneNumber = function (e, n) {
            if (t(e).is("a") && n) {
                let o = q(n);
                o && t(e).on("click", function () {
                    let t = "tel:" + o;
                    window.open(t, "_self")
                })
            }
        }, e.leaveDigitsOnlyInText = q, e.initInputFocusAndBlur = function () {
            t("input").on("focus", function () {
                const e = t(this).attr("data-focus-placeholder");
                e && t(this).attr("placeholder", e)
            }), t("input").on("blur", function () {
                const e = t(this).attr("data-focus-placeholder");
                if (e) {
                    const e = t(this).attr("data-placeholder");
                    t(this).attr("placeholder", e)
                }
            })
        };
        var o = n(1), r = n(5), i = n(4), a = y(n(3)), s = n(6), c = n(7), l = n(18), u = y(n(19)), d = y(n(20)),
            p = y(n(21)), f = y(n(22)), h = n(8), m = n(9), g = n(23), v = n(24);

        function y(t) {
            return t && t.__esModule ? t : {default: t}
        }

        const b = e.cookieClassSpliter = "_";
        e.cookieObjectSpliter = ":", e.cookieParts = {ProductId: 1, CategoryId: 0};

        function _(e) {
            const n = parseInt(e.attr("data-id")), o = t(`#gifts-to-card-${n}`);
            j(e.attr("data-setid")) ? (o.text(e.attr("data-title-in-the-card")), o.closest(".button").addClass("is-gift-in-cart"), o.attr("data-button-disable-for-gifts-block", 1)) : (o.text(e.attr("data-title")), o.closest(".button").removeClass("is-gift-in-cart"), o.attr("data-button-disable-for-gifts-block", 0))
        }

        function C(e) {
            let n = t(".popup__wrap");
            return !n.is(e) && !t(e).closest(".notification").length && !t(e).closest(".select2-container").length && (n.closest(".popup").hasClass("popup_active") || n.closest(".popup").hasClass("popup_active-seo")) && 0 === n.has(e).length
        }

        function w(t) {
            k(t, o.stringEmpty, {expires: o.notFound})
        }

        function x(t, e) {
            if (t = t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), e && !0 === e.onlyValue) {
                var n = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
                return n ? decodeURIComponent(n[1]) : void 0
            }
            {
                let n = document.cookie.match(new RegExp(`(?:^|; )${t}([0-9]{0,})=([^;]*)`, "g")), r = [];
                return Array.isArray(n) && n.forEach(t => {
                    (t = t.split(b).slice(b)).splice(0, 1), r.push(t.join(b))
                }), n = r, e ? typeof e.needDecode !== o.variableTypes.boolean && (e.needDecode = !0) : e = {needDecode: !0}, !0 === e.needDecode ? n ? decodeURIComponent(n.join(b)) : void 0 : n ? n.join(b) : void 0
            }
        }

        function k(t, e, n) {
            let r = (n = n || {needEncode: !0}).expires;
            if (typeof r === o.variableTypes.number && r > 0) {
                const t = new Date;
                t.setTime(t.getTime() + 864e5 * r), r = n.expires = t
            }
            r && r.toUTCString && (n.expires = r.toUTCString()), typeof n.needEncode !== o.variableTypes.boolean && (n.needEncode = !0), !0 === n.needEncode && (e = encodeURIComponent(e));
            let i = `${t}=${e}`;
            for (let t in n) {
                i = `${i}; ${t}`;
                const e = n[t];
                !0 !== e && (i = `${i}=${e}`)
            }
            document.cookie = `${i}; path=/`
        }

        function T(t = null) {
            const e = O("#cartTooltip", ".js-delete-product-from-basket-list");
            for (let n = 0; n < e.length; n++) E(e[n], t)
        }

        function E(e, n = null) {
            let r;
            r = n && n !== o.stringEmpty ? `${n} .buy-button[data-code=${e.code}]` : `.buy-button[data-code=${e.code}]`;
            const i = t(r);
            for (let e = 0; e < i.length; e++) {
                const n = t(i[e]);
                n.hasClass("outlet") || (n.addClass("is-in-cart"), n.find("p").text(n.attr("data-title-in-the-card")))
            }
        }

        function S(e, n, r = !1, i = null, c = null, l = !1) {
            const u = t(".header-basket");
            if (0 === u.length) return;
            const d = t("#basket-list-container"), p = u.attr("data-url");
            return (0, a.default)() && t("#prebasketContainer").hide(), t.ajax({
                type: o.queryTypes.GET,
                data: {sendBasketStatus: r},
                url: 0 === d.length ? p : `${p}?needRenderBasket=true`,
                cache: !1,
                success: function (o) {
                    const r = t("#cartsContainer");
                    0 === d.length ? (0 === r.length ? t("#prebasketContainer").html(o) : r.replaceWith(o), l || (0, s.statusCart)()) : (0 === r.length ? t("#prebasketContainer").html(o.cartItems) : r.replaceWith(o.cartItems), o.isEmptyBasket ? d.closest(".container").hide() : (d.closest(".container").show(), d.html(o.basketList), d.find(".basket-list__cards").html(o.basketListItems)), l || (0, s.statusCart)(o.cartProducts)), t("#prebasketContainer").show(), n && T();
                    const a = t(".more-gifts-item");
                    for (let e = 0; e < a.length; e++) _(t(a[e]));
                    if ("function" == typeof i && (null === c ? i() : i(c)), t(".header-basket__count").length > 0) {
                        const n = parseInt(t("#cartItemsCount").attr("data-count"));
                        (Number.isNaN(n) || n <= 0 || e) && (localStorage.removeItem("_deliveryTypeId"), localStorage.removeItem("_deliveryShipId"), localStorage.removeItem("_paymentTypeId"), localStorage.removeItem("_firstCityId"), localStorage.removeItem("_orderId"), localStorage.removeItem("_deliveryDetails")), n > 0 ? t(".header-basket__count").attr("data-count", n).text(t("#cartItemsCount").text()).removeClass("hidden") : t(".header-basket__count").addClass("hidden")
                    }
                    if (e && (t(".header-basket").data("dont-reload", 1), setTimeout(function () {
                        t("#basket-icon").click()
                    }, 200)), t(".shop-cart").length > 0) {
                        let e = x("favorite_product_id", {onlyValue: !0});
                        if (e) {
                            w("favorite_product_id");
                            let n = t(`.shop-cart .set-favorite[data-code=${e}]`);
                            n.length > 0 && (n.find("input").prop("checked", !0), (0, v.setFavoriteList)(n, v.updateFavorite, n))
                        }
                    }
                }
            })
        }

        function O(e, n = null) {
            const o = null === n ? t(e).find(".header-tooltip__cards-item__close.icon-close-light") : t(e).find(n),
                r = new Array;
            for (let e = 0; e < o.length; e++) {
                let n = t(o[e]), i = n.attr("data-id"), a = n.attr("data-classid"), s = n.attr("data-code");
                r.push({id: i, classId: a, code: s})
            }
            return r
        }

        function D() {
            const e = t(".js-recently-carousel"), n = e.attr("data-max-size");
            (0, i.initCarousel)({
                items: 3,
                margin: 1,
                autoHeight: !0,
                dots: !1,
                nav: !1,
                mouseDrag: !1,
                responsive: {[o.MEDIA_FOR_DESKTOP_UP]: {items: 4}, [o.MEDIA_FOR_BIG_DESKTOP]: {items: n}}
            }, e, t(".js-recently-carousel-nav-next"), t(".js-recently-carousel-nav-prev"), !1, !0, h.onScrollMobileSoftCube, h.onSoftCubeChanged)
        }

        function P(t) {
            0 === t.val().length && t.val("+380")
        }

        function I(t) {
            let e;
            if (void 0 === t.val() || 0 === t.val().length) return;
            let n = t.val().replace(new RegExp(/\D/gi), o.stringEmpty);
            n && n.length < 5 && n.length >= 4 ? e = n.replace(/(\d{2})(\d+)/g, "+$1($2") : n && n.length > 5 && n.length <= 8 ? e = n.replace(/(\d{2})(\d{3})(\d+)/g, "+$1($2) $3") : n && n.length >= 8 && n.length <= 10 ? e = n.replace(/(\d{2})(\d{3})(\d{3})(\d+)/g, "+$1($2) $3 $4") : n && n.length >= 10 && n.length <= 12 && (e = n.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d+)/g, "+$1($2) $3 $4 $5")), e && t.val(e), t.trigger("change")
        }

        function L(t, e) {
            let n = t.val().replace(new RegExp(/\D/gi), o.stringEmpty), r = t.val();
            if ("+380" === r && new RegExp("[038]").test(e.key) || r.length > 0 && !new RegExp("[0-9]").test(e.key)) e.preventDefault(); else {
                if (n.length >= 0 && n.length < 3) switch (e.key) {
                    case"+":
                        t.val("+380");
                        break;
                    case"3":
                        t.val("+3");
                        break;
                    case"8":
                        t.val("+38");
                        break;
                    case"0":
                        t.val("+380");
                        break;
                    default:
                        t.val(`+380${e.key}`)
                }
                12 !== n.length || t.prop("selectionEnd") !== t.prop("selectionStart") || e.preventDefault()
            }
        }

        function A(e) {
            const n = parseInt(e.attr("data-id")), o = t(`#gift-to-card-${n}`);
            j(e.attr("data-setid")) ? (o.text(e.attr("data-title-in-the-card")), o.closest(".button").addClass("is-gift-in-cart")) : (o.text(e.attr("data-title")), o.closest(".button").removeClass("is-gift-in-cart"))
        }

        function j(e) {
            const n = function () {
                const e = t(".header-tooltip__cards-item"), n = new Array;
                return e.each(function () {
                    n.push(t(this).attr("data-setid"))
                }), n
            }();
            for (let t = 0; t < n.length; t++) {
                if (n[t] === e) return !0
            }
            return !1
        }

        function N(e) {
            let n = t(e);
            const o = parseInt(n.attr("data-id")), r = t(`#kit-to-card-${o}`);
            j(n.attr("data-setid")) ? (r.text(n.attr("data-title-in-the-card")), r.closest(".button").addClass("is-kit-in-cart")) : (r.text(n.attr("data-title")), r.closest(".button").removeClass("is-kit-in-cart"))
        }

        function M(t, e, n) {
            const o = n ? `(${n} СЂРЅ.)` : "";
            return `${t.nameShort} ${e} ${o}`
        }

        function q(t) {
            let e = "";
            return t && (e = t.replace(/\D+/g, "")), e
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    const o = e.isMobile = (() => {
        let t = !1;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (t = !0), t
    });
    e.isAndroid = (() => {
        let t = !1;
        return navigator.userAgent.toLowerCase().indexOf("android") > -1 && (t = !0), t
    });
    e.default = o
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.initCarousel = function (e, n, r, i, a = !1, s = !0, c, l, u = !1) {
            let d;
            const p = t => {
                t <= o.MEDIA_FOR_DESKTOP_UP && s ? (d = n.owlCarousel("destroy"), c && "function" == typeof c && (n.hasClass("scroll-slider") ? n.on("scroll", c) : n.parents(".scroll-slider").on("scroll", c))) : (d = n.owlCarousel(e), function (t) {
                    let e = t.parents(".wrapper").find(".page-main__nav");
                    if (window.innerWidth > 1440 && t.length > 0) {
                        const n = 5, o = t.find(".owl-item.active").length, r = t.parents(".container");
                        r.length > 0 && parseInt(r.attr("data-count")) <= n || 0 === r.length && o === n ? e.hide() : e.show()
                    } else e.show()
                }(n), l && "function" == typeof l && d.on("changed.owl.carousel", l))
            };
            p(o.WINDOW_W), i && i.addClass("disabled");
            let f = t(window).width();
            t(window).resize(function () {
                const e = t(window).width();
                e !== f && (p(window.innerWidth), f = e)
            }), d.on("initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel", function (e) {
                if (!e.namespace) return;
                let n = e.relatedTarget, s = n.current();
                if (!i || !r) return;
                const c = a && t(e.target).attr("id").indexOf("inner") === o.notFound;
                s !== n.minimum() || u ? c ? i.removeClass("main_disabled") : i.removeClass("disabled") : c ? i.addClass("main_disabled") : i.addClass("disabled"), s !== n.maximum() || u ? c ? r.removeClass("main_disabled") : r.removeClass("disabled") : c ? r.addClass("main_disabled") : r.addClass("disabled")
            }), i && i.click(() => {
                d.trigger("prev.owl.carousel")
            });
            r && r.click(() => {
                d.trigger("next.owl.carousel")
            });
            return Promise.resolve()
        };
        var o = n(1)
    }).call(e, n(0))
}, function (t, e, n) {
    var o, r, i, a;
    a = function (t) {
        "use strict";

        function e(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = !1;
        if ("undefined" != typeof window) {
            var o = {
                get passive() {
                    n = !0
                }
            };
            window.addEventListener("testPassive", null, o), window.removeEventListener("testPassive", null, o)
        }
        var r = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
            i = [], a = !1, s = -1, c = void 0, l = void 0, u = function (t) {
                return i.some(function (e) {
                    return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
                })
            }, d = function (t) {
                var e = t || window.event;
                return !!u(e.target) || 1 < e.touches.length || (e.preventDefault && e.preventDefault(), !1)
            }, p = function () {
                setTimeout(function () {
                    void 0 !== l && (document.body.style.paddingRight = l, l = void 0), void 0 !== c && (document.body.style.overflow = c, c = void 0)
                })
            };
        t.disableBodyScroll = function (t, o) {
            if (r) {
                if (!t) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                if (t && !i.some(function (e) {
                    return e.targetElement === t
                })) {
                    var p = {targetElement: t, options: o || {}};
                    i = [].concat(e(i), [p]), t.ontouchstart = function (t) {
                        1 === t.targetTouches.length && (s = t.targetTouches[0].clientY)
                    }, t.ontouchmove = function (e) {
                        var n, o, r, i;
                        1 === e.targetTouches.length && (o = t, i = (n = e).targetTouches[0].clientY - s, !u(n.target) && (o && 0 === o.scrollTop && 0 < i ? d(n) : (r = o) && r.scrollHeight - r.scrollTop <= r.clientHeight && i < 0 ? d(n) : n.stopPropagation()))
                    }, a || (document.addEventListener("touchmove", d, n ? {passive: !1} : void 0), a = !0)
                }
            } else {
                h = o, setTimeout(function () {
                    if (void 0 === l) {
                        var t = !!h && !0 === h.reserveScrollBarGap,
                            e = window.innerWidth - document.documentElement.clientWidth;
                        t && 0 < e && (l = document.body.style.paddingRight, document.body.style.paddingRight = e + "px")
                    }
                    void 0 === c && (c = document.body.style.overflow, document.body.style.overflow = "hidden")
                });
                var f = {targetElement: t, options: o || {}};
                i = [].concat(e(i), [f])
            }
            var h
        }, t.clearAllBodyScrollLocks = function () {
            r ? (i.forEach(function (t) {
                t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null
            }), a && (document.removeEventListener("touchmove", d, n ? {passive: !1} : void 0), a = !1), i = [], s = -1) : (p(), i = [])
        }, t.enableBodyScroll = function (t) {
            if (r) {
                if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                t.ontouchstart = null, t.ontouchmove = null, i = i.filter(function (e) {
                    return e.targetElement !== t
                }), a && 0 === i.length && (document.removeEventListener("touchmove", d, n ? {passive: !1} : void 0), a = !1)
            } else (i = i.filter(function (e) {
                return e.targetElement !== t
            })).length || p()
        }
    }, r = [e], void 0 === (i = "function" == typeof (o = a) ? o.apply(e, r) : o) || (t.exports = i)
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.sendImpressions = function (e) {
            if (!e.find(".soft-cube-block").length) return !1;
            const n = `${e.find(".soft-cube-block:first").attr("data-block")}`,
                i = t.map(e.find(".sc-product"), function (e) {
                    const o = {product_id: `${t(e).attr("data-code")}`, container_type: n};
                    return o
                });
            i.length > 0 && p().then(function (t) {
                const e = {
                    GeneralInfo: {
                        user_cart_id: t,
                        eventName: "ProductImpressions",
                        siteId: "8D3869C",
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})},
                        s_location: document.URL,
                        referrer: document.referrer
                    }, ProductImpression: i
                };
                l(r, e)
            })
        }, e.statusCart = function (e) {
            p().then(function (n) {
                const r = function (e) {
                    return e ? t.map(e, function (e) {
                        let n;
                        return n = e.set ? t.map(e.set.alternatives, function (t) {
                            return {productKey: t.code, price: t.price, quantity: d(e.quantity)}
                        }) : {productKey: `${e.product.code}`, price: `${e.product.price}`, quantity: d(e.quantity)}
                    }) : function () {
                        let e = [];
                        return t("#cartTooltip .header-tooltip__cards-item.analytics-data").each(function (n, o) {
                            let r = t(o);
                            e.push({
                                productKey: `${r.attr("data-code")}`,
                                price: `${r.attr("data-price")}`,
                                quantity: d(r.attr("data-quantity"))
                            });
                            const i = r.find(".header-tooltip__cards-kit-item");
                            i.length && e.push({
                                productKey: i.attr("data-code"),
                                price: i.attr("data-price"),
                                quantity: d(i.attr("data-quantity"))
                            })
                        }), e
                    }()
                }(e), a = {
                    GeneralInfo: {
                        user_cart_id: n,
                        eventName: "StatusCart",
                        siteId: "8D3869C",
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})},
                        s_location: document.URL,
                        referrer: document.referrer
                    }, StatusCart: {GUID: f(r), Products: r, Tags: {cart_id: [n]}}
                };
                l(i, a)
            })
        }, e.categoryPage = function (t) {
            p().then(function (e) {
                const n = {
                    GeneralInfo: {
                        user_cart_id: e,
                        eventName: "CategoryPage",
                        siteId: "8D3869C",
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})}
                    }, CategoryPage: {categoryKey: t}
                };
                l(r, n)
            })
        }, e.productPage = function () {
            p().then(function (e) {
                const n = t(".product-box__right .product-box__content"), i = h(n.attr("data-availability")), a = {
                    GeneralInfo: {
                        user_cart_id: e,
                        eventName: "ProductPage",
                        siteId: "8D3869C",
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})},
                        s_location: document.URL,
                        referrer: document.referrer
                    }, ProductPage: {productKey: n.attr("data-code"), price: n.attr("data-price"), isInStock: i}
                };
                l(r, a)
            })
        }, e.purchasedItems = function () {
            p().then(function (e) {
                const n = t(".page-thank-you__content"), i = {
                    GeneralInfo: {
                        user_cart_id: e,
                        eventName: "PurchasedItems",
                        siteId: "8D3869C",
                        user_phone: n.attr("data-phone"),
                        user_email: n.attr("data-email"),
                        user_name: n.attr("data-name"),
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})},
                        s_location: document.URL,
                        referrer: document.referrer
                    }, GUID: f(), OrderNumber: n.attr("data-orders")
                };
                l(r, i)
            })
        }, e.buyOnClick = function (t) {
            p().then(function (e) {
                const n = {
                    GeneralInfo: {
                        user_cart_id: e,
                        eventName: "PurchasedItems",
                        siteId: "8D3869C",
                        user_phone: t.phone,
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})},
                        s_location: document.URL,
                        referrer: document.referrer
                    },
                    OrderNumber: t.orderId.toString(),
                    PurchasedItems: [{product_id: t.code.toString(), unit_price: t.price.toString(), quantity: 1}]
                };
                l(r, n)
            })
        }, e.searchRequest = m, e.buyProductPage = function (e) {
            let n;
            n = e.hasClass("shop-cart__carousel-item__button") ? e.parents(".shop-cart__carousel-item").find(".sc-product") : e.closest(".sc-product").find(".card__head");
            const r = t("#userInfo"), a = h(n.attr("data-availability")), s = {
                GeneralInfo: {
                    eventName: "ProductPage",
                    siteId: "8D3869C",
                    user_phone: "",
                    user_email: r.attr("data-email") || "",
                    user_name: r.attr("data-name") || "",
                    cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})}
                },
                ProductPage: {
                    Product: {productKey: n.attr("data-code"), price: n.attr("data-price"), isInStock: a},
                    Tags: {block_id: [`${n.closest(".soft-cube-block").attr("data-block")}`]}
                }
            };
            l(i, s)
        }, e.customerData = function () {
            const e = t(".page-thank-you__content"), n = t(".profile__info-wrap");
            let r, a, s, c;
            e.length > 0 ? (r = e.attr("data-phone"), a = e.attr("data-email"), s = e.attr("data-name"), c = e.attr("data-card")) : n.length > 0 && (r = n.find(".profile__info-data p:eq(0)").text(), a = n.find(".profile__info-data p:eq(1)").text(), s = n.find(".profile__info-name p").text(), c = t(".profile__loyalty").attr("data-card"));
            p().then(function (t) {
                const e = {
                    GeneralInfo: {
                        email: a,
                        firstName: s,
                        client_id: t,
                        card_id: c,
                        phone: r,
                        eventName: "CustomerData",
                        siteId: "8D3869C",
                        cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})}
                    }
                };
                l(i, e)
            })
        }, e.compareEvent = function (e, n, o, r) {
            let a = u(), s = o;
            p().then(function (c) {
                if (t.map(t("#compareBlock .groups-to-compare"), function (u) {
                    let d = {
                        GeneralInfo: {eventName: "CustomEvent", siteId: "8D3869C"},
                        CustomEvent: {
                            EventName: "compare",
                            Tags: {user_cart_id: [c], compare_list: [a], compare_id: [], product_keys: []}
                        }
                    };
                    t(u).find(".header-tooltip__cards-item").length ? (t.map(t(u).find(".header-tooltip__cards-item"), function (i) {
                        let a = t(i);
                        0 == d.CustomEvent.Tags.compare_id.length && (d.CustomEvent.Tags.compare_id.push(a.attr("data-classid")), a.attr("data-classid") != n || s || 1 == r || (d.CustomEvent.Tags.product_keys.push(e), s = !0)), o && a.attr("data-code") == e || 1 == r || d.CustomEvent.Tags.product_keys.push(a.attr("data-code"))
                    }), l(i, d)) : (s || (d.CustomEvent.Tags.compare_id.push(n), 1 != o && d.CustomEvent.Tags.product_keys.push(e)), l(i, d))
                }), !s) {
                    let t = {
                        GeneralInfo: {eventName: "CustomEvent", siteId: "8D3869C"},
                        CustomEvent: {
                            EventName: "compare",
                            Tags: {user_cart_id: [c], compare_list: [a], compare_id: [], product_keys: []}
                        }
                    };
                    t.CustomEvent.Tags.compare_id.push(n), 1 != o && t.CustomEvent.Tags.product_keys.push(e), l(i, t)
                }
            })
        }, e.initSearchRequestEvents = function () {
            let e = t(".evinent-search-suggestion"), n = t(".evinent-search-categories"),
                o = t(".evinent-search-product");
            [e, n, o].forEach(e => {
                e.on("click", function (e) {
                    !function (t, e) {
                        t.preventDefault(), m(e.attr("data-title")).then(function () {
                            let t = e.attr("href");
                            window.location = t
                        })
                    }(e, t(this))
                }), e.on("auxclick", function () {
                    m(t(this).attr("data-title"))
                })
            })
        };
        var o = n(2);
        const r = "https://tracker.softcube.com/api/v1", i = "https://tracker.softcube.com/api/v2", a = "InStock",
            s = "OutOfStock";
        let c;

        function l(e, n) {
            return t.ajax({
                url: e,
                type: "post",
                dataType: "application/json",
                contentType: "application/json",
                data: JSON.stringify(n),
                xhrFields: {withCredentials: !0}
            })
        }

        function u() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }

        function d(t) {
            if ("string" == typeof t) {
                let e = parseInt(t);
                return isNaN(e) ? 0 : e
            }
            return t
        }

        function p() {
            return new Promise((e, n) => {
                if (c) return e(c);
                const o = t("html").attr("data-user");
                t.ajax({
                    type: "GET", url: o, async: !1, success: function (t) {
                        return e(c = t)
                    }
                })
            })
        }

        function f(t) {
            let e = 0, n = (0, o.getCookie)("sc_guid", {onlyValue: !0}), r = u();
            return void 0 == t ? void 0 != n ? n.split("_")[0] : ((0, o.setCookie)("sc_guid", `${r}_${e}`, {expires: 30}), r) : (t.map(function (t) {
                e += Number(t.price) * Number(t.quantity)
            }), void 0 == n || e != Number(n.split("_")[1]) ? (0, o.setCookie)("sc_guid", `${r}_${e}`, {expires: 30}) : r = n.split("_")[0], r)
        }

        function h(t) {
            switch (t) {
                case a:
                    return 1;
                case s:
                    return 0;
                default:
                    return t
            }
        }

        function m(e) {
            let n = function () {
                let e = t("#userInfo"), n = "", o = "", r = "";
                e && (n = e.attr("data-phone"), o = e.attr("data-email"), r = e.attr("data-name"));
                return {userPhone: n, userEmail: o, userName: r}
            }();
            const i = {
                GeneralInfo: {
                    eventName: "SearchRequest",
                    siteId: "8D3869C",
                    cookies: {sc: (0, o.getCookie)("sc", {onlyValue: !0})},
                    datetime: Date.now(),
                    user_phone: n.userPhone,
                    user_email: n.userEmail,
                    user_name: n.userName
                }, SearchRequest: {search: e}
            };
            return l(r, i)
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.reloadCartItems = function (e, n = !1, o) {
            let i = t(".shop-cart");
            const s = i.attr("data-url");
            return t.ajax({
                url: s, type: a.queryTypes.GET, success: function (a) {
                    i.html(a), d(), p(), (0, r.updateCartItems)(n, !1, !1, null, null, !0).then(function () {
                        o && "function" == typeof o && o()
                    }), (0, c.loadCartScBlock)();
                    let s = t("#desktop-promocode-container").attr("data-count");
                    t(".cart-result-mobile__body .sidebar-prod-count").text(s), _();
                    let l = parseInt(t(".shop-cart__sidebar").attr("data-total"));
                    t(".cart-result-mobile__body .shop-cart-res__price, .cart-result-mobile__price").text(`${l.toLocaleString("ru-RU")} в‚ґ`);
                    let u = t(".shop-cart-res__cachback").attr("data-cashback");
                    t(".cart-result-mobile__body .shop-cart-res__cachback p").text(u), null != e && e.data("promocode") && (t(".shop-cart-res__msg__price-down").css("display", "none"), t(".shop-cart-res__msg__price-up.delete").css("display", "flex")), 0 === t(".shop-cart__item").length && h(null);
                    const m = t("#shopcart .shop-cart-res__head");
                    t("#mobile-promocode-container .shop-cart-res__head").replaceWith(m);
                    const g = t("#shopcart .shop-cart-res__footer");
                    t("#mobile-promocode-container .shop-cart-res__footer").replaceWith(g), f()
                }
            })
        }, e.loadItemAccessories = d, e.changeQuantityEventsNew = p, e.loadServies = f, e.initItemCarousel = v, e.createProductDataContainer = y;
        var o, r = n(2), i = n(6), a = n(1), s = n(4), c = n(8), l = n(13), u = n(3);
        (o = u) && o.__esModule;

        function d() {
            t(".shop-cart__item .cart-item-accessories").each(function () {
                let e = t(this), n = e.attr("data-url");
                t.ajax({
                    url: n, type: a.queryTypes.GET, success: function (t) {
                        e.html(t), e.find(".shop-cart__carousel-item").length && (e.find(".shop-cart__item-info__body").hide(), e.show()), v(e.find(".js-shop-cart-carousel")).then(() => {
                            e.find(".js-shop-cart-accordion").click()
                        }), (0, i.sendImpressions)(e)
                    }
                })
            })
        }

        function p() {
            let e = t(".shop-cart__item-product"), n = t(".shop-cart__body.src-url").attr("data-update-url");
            e.each(function (e, o) {
                let i = t(o), s = t(".promo-code").val();
                i.find(".js-number-counter-button").click(function (e) {
                    let o = t(this), i = o.parents(".shop-cart__item-product").attr("data-order-item"),
                        c = o.siblings(".item-number"), l = parseInt(c.attr("data-count"));
                    const u = function () {
                        const t = parseInt(c.attr("max")), e = parseInt(c.attr("data-count"));
                        !isNaN(e) && e > 1 && o.parents(".shop-cart__item-count").find(".js-number-counter-button.minus").removeClass("disabled"), !isNaN(e) && !isNaN(t) && e < t && o.parents(".shop-cart__item-count").find(".js-number-counter-button.plus").removeClass("disabled")
                    };
                    !function (e) {
                        let n = t(e).parent().find("input"), o = parseInt(n.attr("data-count") || 0),
                            i = t(e).attr("data-type"), a = y(e);
                        if ("minus" == i) {
                            if (o <= 1) o = 1; else {
                                o -= 1;
                                let t = new CustomEvent("onRemoveProductFromCartEvent", {
                                    detail: {
                                        htmlElement: a,
                                        buttonType: "minus_in_cart",
                                        buttonBelongsToPDP: null,
                                        quantity: 1
                                    }
                                });
                                document.dispatchEvent(t), (0, r.changeProductsDataQuantity)(a, o)
                            }
                            n.val(o), t(e).closest(".shop-cart__item-product").attr("data-quantity", o), b(e, o)
                        } else if ("plus" == i) {
                            o = ++o, n.val(o), t(e).closest(".shop-cart__item-product").attr("data-quantity", o), b(e, o);
                            let i = new CustomEvent("onAddToCartEvent", {
                                detail: {
                                    productDataContainer: a,
                                    needQuantity: !0,
                                    buttonType: "plus_in_cart",
                                    quantity: 1
                                }
                            });
                            document.dispatchEvent(i), (0, r.changeProductsDataQuantity)(a, o)
                        }
                        n.change()
                    }(o);
                    const d = parseInt(o.attr("data-is-basket"));
                    if (e.target.classList.contains("minus") && l > 1) {
                        l > 1 && c.attr("data-count", l - 1);
                        const p = parseInt(c.val());
                        1 === p ? o.parents(".shop-cart__item-count").find(".js-number-counter-button.minus").addClass("disabled") : e.target.classList.add("disabled"), t(e.target).data("minus-count", p), t.ajax({
                            url: `${n}?orderItemId=${i}&quantity=${p}&promocode=${s}${1 === d ? "&isBasket=1" : ""}`,
                            type: a.queryTypes.GET,
                            cache: !1,
                            success: function (t) {
                                m(t), g(t), _(), (0, r.updateCartItems)(), h(t), u()
                            },
                            error: function () {
                                u()
                            }
                        })
                    } else if (e.target.classList.contains("plus")) {
                        const p = l + 1;
                        c.attr("data-count", p), o.parents(".shop-cart__item-count").find(".js-number-counter-button.minus").removeClass("disabled"), e.target.classList.add("disabled"), t.ajax({
                            url: `${n}?orderItemId=${i}&quantity=${p}&promocode=${s}${1 === d ? "&isBasket=1" : ""}`,
                            type: a.queryTypes.GET,
                            cache: !1,
                            success: function (t) {
                                m(t), g(t), _(), (0, r.updateCartItems)(), h(t), u()
                            },
                            error: function () {
                                u()
                            }
                        })
                    }
                })
            })
        }

        function f() {
            t.map(t(".services"), function (e) {
                (0, l.getProductServices)(t(e))
            })
        }

        function h(e) {
            e ? t(".cart-result-mobile__price").text(`${e.finalPrice.toLocaleString("ru-RU")} в‚ґ`) : t(".cart-result-mobile__price").text("")
        }

        function m(e) {
            e.products && e.products.forEach(function (n, o) {
                if (n.set) {
                    const e = t(`.shop-cart__item-product[data-setid=${n.set.packageId}]`);
                    let o, r, i;
                    if (1 === parseInt(e.attr("data-is-gifts"))) {
                        o = n.set.innerPackagePrice, i = 0;
                        for (let t = 0; t < n.set.alternatives.length; t++) i += n.set.alternatives[t].price;
                        r = i + o, i *= n.quantity
                    } else o = n.set.packagePrice, i = ((r = n.set.packageOldPrice) - o) * n.quantity;
                    e.attr("data-price", o), e.attr("data-oldprice", r), e.find(".shop-cart__item-price").text(`${(o * n.quantity).toLocaleString("ru-RU")} в‚ґ`);
                    const a = e.find(".shop-cart__item-discount");
                    a.find("p").text((r * n.quantity).toLocaleString("ru-RU")), a.find("label").attr("data-diff", i).text(`-${i.toLocaleString("ru-RU")}`)
                } else if (n.product) {
                    const o = t(`[data-code=${n.product.code}]`);
                    o.attr("data-price", n.product.price).attr("data-oldprice", n.product.priceOld).attr("data-cashback", n.product.bonus).attr("data-pricepromo", n.product.pricePromo);
                    const r = o.find(".shop-cart__item-discount");
                    let i;
                    e.promoCodeApplied && n.product.promocode && n.product.promocode !== a.stringEmpty ? (r.find("p").text((n.product.price * n.quantity).toLocaleString("ru-RU")), i = (n.product.price - n.product.promocode.price) * n.quantity, r.find("label").attr("data-diff", i).text(`-${i.toLocaleString("ru-RU")}`), o.find(".shop-cart__item-price").text(`${(n.product.promocode.price * n.quantity).toLocaleString("ru-RU")} в‚ґ`)) : n.actionId && n.actionId > 0 && null === n.product.priceOld && n.product.price < n.product.realPrice ? (r.find("p").text((n.product.realPrice * n.quantity).toLocaleString("ru-RU")), i = (n.product.realPrice - n.product.price) * n.quantity, r.find("label").text(`-${i.toLocaleString("ru-RU")}`), o.find(".shop-cart__item-price").text(`${(n.product.price * n.quantity).toLocaleString("ru-RU")} в‚ґ`)) : (r.find("p").text((n.product.priceOld * n.quantity).toLocaleString("ru-RU")), i = (n.product.priceOld - n.product.price) * n.quantity, r.find("label").attr("data-diff", i).text(`-${i.toLocaleString("ru-RU")}`), o.find(".shop-cart__item-price").text(`${(n.product.price * n.quantity).toLocaleString("ru-RU")} в‚ґ`))
                }
            })
        }

        function g(e) {
            t("#desktop-promocode-container").attr("data-count", e.totalCount), t(".sidebar-prod-count").text(e.totalCount);
            const n = t(".shop-cart-res__discount"), o = t(".shop-cart-res__cachback");
            if (e.promoCodeApplied && e.totalPriceWithPromoPrice) n.find("label").text(`-${(e.totalPrice - e.totalPriceWithPromoPrice).toLocaleString("ru-RU")}`), n.find("p").attr("data-nodiscount", e.totalPriceWithPromoPrice).text(e.totalPrice.toLocaleString("ru-RU")), t(".card-price.shop-cart-res__price").text(`${e.totalPriceWithPromoPrice.toLocaleString("ru-RU")} в‚ґ`); else if (n.find("label").text(`-${(e.realPrice - e.productsPrice).toLocaleString("ru-RU")}`), n.find("p").attr("data-nodiscount", e.realPriceWithServices).text(e.realPriceWithServices.toLocaleString("ru-RU")), e.servicesPrice) {
                let n = parseInt(e.productsPrice) + parseInt(e.servicesPrice);
                t(".card-price.shop-cart-res__price").text(`${n.toLocaleString("ru-RU")} в‚ґ`)
            } else t(".card-price.shop-cart-res__price").text(`${e.productsPrice.toLocaleString("ru-RU")} в‚ґ`);
            e.cashback && (o.find("p").text(e.cashback.toLocaleString("ru-RU")), o.attr("data-cashback", e.cashback))
        }

        function v(t) {
            return (0, s.initCarousel)({
                margin: 15,
                items: 2,
                autoHeight: !0,
                autoWidth: !1,
                dots: !1,
                nav: !0,
                navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],
                mouseDrag: !0,
                responsive: {[a.MEDIA_FOR_PHONE_ONLY]: {autoWidth: !0}}
            }, t)
        }

        function y(e) {
            let n = [], o = t(e).closest(".shop-cart__item-product"), r = o.find(".shop-cart__kit-item-product");
            return n.push(o), r.length > 0 && n.push(r), n
        }

        function b(e, n) {
            let o = t(e).closest(".shop-cart__item-product").find(".shop-cart__kit-item-product");
            o.length > 0 && o.attr("data-quantity", n)
        }

        function _() {
            let e, n = t(".sidebar-prod-count:first").text(), o = n[n.length - 1], r = n > 10 && n < 20;
            e = 1 != o || r ? o >= 2 && o <= 4 && !r ? t(".shop-cart-res__title").attr("data-ctitle2") : t(".shop-cart-res__title").attr("data-ctitle3") : t(".shop-cart-res__title").attr("data-ctitle1"), t(".count-declantion").text(e)
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadSoftCubeBlock = f, e.loadMainScBlock = function (t, e) {
            e.html(t).promise().done(function () {
                p(e, u), (0, a.sendImpressions)(e)
            })
        }, e.loadCartScBlock = function () {
            const e = t(".shop-cart__item-product"), n = t("#shopcart");
            if (e.length > 0) {
                let n = e.map(function () {
                    return t(this).attr("data-code")
                }).get().join(",");
                const o = t(".src-url").attr("data-url"), r = `${o}&layoutOrder=4&id=${n}`;
                f(r, t(".recomm-block"), u)
            } else n.length > 0 && t.ajax({
                url: n.attr("data-recently-url"),
                type: r.queryTypes.GET,
                success: function (e) {
                    t(".recomm-block").replaceWith(e), (0, s.initRecentlyCarousel)(), (0, s.setCashBackTitle)()
                }
            })
        }, e.onScrollMobileSoftCube = h, e.onSoftCubeChanged = m, e.loadSpecialOffer = function () {
            const e = t("#specialOffers");
            if (e.length > 0) {
                const t = e.attr("data-url");
                f(t, e)
            }
        }, e.addProductsToCarousel = g, e.initSoftCubeCategorySelection = function () {
            t(document).on("click", ".soft-cube-category-menu-item", function () {
                !function (e) {
                    let n = t(e);
                    if (n.hasClass("active")) return;
                    const o = n.parent(), a = o.attr("data-prev-button"), s = o.attr("data-next-button");
                    t(`#${a}`).unbind("click"), t(`#${s}`).unbind("click");
                    const c = o.attr("data-carousel-id"), l = t(`#${c}`);
                    (function (t) {
                        const e = t.attr("data-url"), n = t.attr("data-code"), o = parseInt(t.attr("data-total")),
                            i = t.find("div.card").length;
                        if (0 !== i && d.length < o && i < o && !t.hasClass("is-loading")) {
                            const o = `${e}&skip=${i}&id=${n}&all=true`;
                            g(o, t, (0, r.getWindowWidth)() <= r.MEDIA_FOR_DESKTOP_UP, !1), t.addClass("is-loading")
                        }
                    })(l), 0 === d.length && (d = l.find("div.card.js-card"));
                    o.find(".soft-cube-category-menu-item.active").removeClass("active"), n.addClass("active"), l.owlCarousel("destroy"), l.html(r.stringEmpty);
                    const p = n.attr("data-id");
                    if (0 === p || "0" === p) for (let e = 0; e < d.length; e++) l.append(t(d[e])); else for (let e = 0; e < d.length; e++) {
                        const n = t(d[e]);
                        n.attr("data-classid") === p && l.append(n)
                    }
                    (0, i.initCarousel)(u, t(`#${c}`), t(`#${s}`), t(`#${a}`))
                }(this)
            })
        };
        var o, r = n(1), i = n(4), a = n(6), s = n(2), c = n(3), l = (o = c) && o.__esModule ? o : {default: o};
        const u = {
            items: 3,
            margin: 1,
            autoHeight: !0,
            dots: !1,
            nav: !1,
            mouseDrag: !1,
            lazyLoad: !0,
            responsive: {[r.MEDIA_FOR_DESKTOP_UP]: {items: 4}, [r.MAIN_WRAPPER_WIDTH]: {items: 5}}
        };
        let d = new Array;

        function p(e, n) {
            (0, i.initCarousel)(n || u, t(e).find(".owl-carousel"), t(e).find(".soft-cube-block-next"), t(e).find(".soft-cube-block-prev"), !1, !0, h, m)
        }

        function f(e, n, o, i) {
            t.ajax({
                type: r.queryTypes.GET, url: e, success: function (e) {
                    n.html(e).promise().done(function () {
                        n.removeClass("carousel-container-reserved")
                    }), p(n, o), i && "function" == typeof i && i(), function (e) {
                        let n = t(e);
                        t(window).scroll(function () {
                            var o;
                            !n.hasClass("isTrackedBySc") && (o = n, t(window).scrollTop() + t(window).height() > t(o).offset().top + t(o).height()) && (e.addClass("isTrackedBySc"), (0, a.sendImpressions)(n))
                        })
                    }(n)
                }
            })
        }

        function h(e) {
            if (Math.round(e.currentTarget.scrollLeft / e.currentTarget.scrollWidth * 100) >= 50) {
                const n = t(e.currentTarget);
                let o = n.find("div.card").length;
                if (0 === o) return;
                const r = n.attr("data-url"), i = n.attr("data-code");
                if (o < parseInt(n.attr("data-total")) && !n.hasClass("is-loading")) {
                    g(`${r}&skip=${o}&take=1&gid=${i}`, n, !0)
                }
                l.default || n.attr("data-index", e.item.index)
            }
        }

        function m(e) {
            const n = t(e.currentTarget), o = n.attr("data-index");
            if (o) {
                if (parseInt(o) > e.item.index) return void n.attr("data-index", e.item.index)
            }
            const r = n.attr("data-url"), i = parseInt(n.attr("data-total")), a = [];
            if (n.find(".owl-item > div").each(function (e, n) {
                a.push(t(n).attr("data-code"))
            }), 0 !== a) {
                if (a.length < i && !n.hasClass("is-loading")) {
                    g(r.indexOf("?") > -1 ? `${r}&visibleProducts=${a.join(";")}` : `${r}?visibleProducts=${a.join(";")}`, n, !1)
                }
                n.attr("data-index", e.item.index)
            }
        }

        function g(e, n, o, i = !0) {
            n.addClass("is-loading");
            const a = n.find(".js-card").map(function (e, n) {
                return t(n).attr("data-code")
            }).get().join(";");
            return t.ajax({
                type: r.queryTypes.GET, url: `${e}&visibleProducts=${a}`, async: i, success: function (t) {
                    o ? n.append(t) : n.trigger("add.owl.carousel", [t]).trigger("refresh.owl.carousel"), n.removeClass("is-loading")
                }
            })
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.onProductOfTheWeekChanged = function (e) {
            const n = t(e.currentTarget), o = n.attr("data-index");
            if (o) {
                const t = parseInt(o);
                if (t > e.item.index) return void n.attr("data-index", e.item.index)
            }
            const i = n.attr("data-url"), a = n.attr("data-id"), s = parseInt(n.attr("data-total")),
                c = n.find(".owl-item").length;
            if (0 === c) return;
            if (c < s && !n.hasClass("is-loading")) {
                const t = `${i}?categoryId=${a}&skip=${c}&take=1`;
                r(t, n, !1)
            }
            n.attr("data-index", e.item.index)
        }, e.onCarouselItemsChanged = function (e) {
            const n = t(e.currentTarget), o = n.attr("data-index");
            if (o) {
                const t = parseInt(o);
                if (t > e.item.index) return void n.attr("data-index", e.item.index)
            }
            const i = n.attr("data-url"), a = parseInt(n.attr("data-total")), s = n.find(".owl-item").length;
            if (0 === s) return;
            if (s < a && !n.hasClass("is-loading")) {
                const t = `${i}?skip=${s}`;
                r(t, n, !1)
            }
            n.attr("data-index", e.item.index)
        }, e.addProductsToCarousel = r, e.onScrollMobileCarouselItems = function (e) {
            if (Math.round(e.currentTarget.scrollLeft / e.currentTarget.scrollWidth * 100) >= 50) {
                const n = t(t(e.currentTarget).find(".owl-carousel")[0]), o = n.find(".js-card"), i = o.length;
                if (0 === i) return;
                const a = [];
                o.each(function (e, n) {
                    a.push(t(n).attr("data-code"))
                });
                const s = n.attr("data-url"), c = parseInt(n.attr("data-total")),
                    l = `${s}${s.indexOf("?") > -1 ? "&" : "?"}skip=${a.length}`, u = n.hasClass("is-loading");
                i < c && !u && r(l, n, !0)
            }
        };
        var o = n(1);

        function r(e, n, r) {
            return n.addClass("is-loading"), t.ajax({
                type: o.queryTypes.GET, url: e, success: function (t) {
                    r ? n.append(t) : n.trigger("add.owl.carousel", [t]).trigger("refresh.owl.carousel"), n.removeClass("is-loading")
                }
            })
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var e = n(12), o = n(2);
        const r = !0, i = "-1";
        let a, s, c, l, u, d, p, f = [], h = !0, m = !1, g = "||";

        function v() {
            window.dataLayer = window.dataLayer || []
        }

        let y = function () {
            a = t.extend(!0, {}, _)
        }, b = function () {
            c = t.extend(!0, {}, C)
        }, _ = {
            name: "tempImpressionDataLayer",
            dataTaget: "data.ecommerce.items",
            data: {event: "view_item_list", ecommerce: {items: []}}
        }, C = {
            name: "tempImpressionDataLayerUA",
            dataTaget: "data.ecommerce.impressions",
            data: {ecommerce: {impressions: []}, event: "Product View", "gtm-ee-event-category": "Enhanced Ecommerce"}
        }, w = function () {
            s = t.extend(!0, {}, k)
        }, x = function () {
            l = t.extend(!0, {}, T)
        }, k = {
            name: "tempPromotionDataLayer",
            dataTaget: "data.ecommerce.items",
            data: {event: "view_promotion", ecommerce: {items: []}}
        }, T = {
            name: "tempPromotionDataLayerUA",
            dataTaget: "data.ecommerce.promoView.promotions",
            data: {ecommerce: {promoView: {promotions: []}}, event: "Promo View"}
        };

        function E(e, n, o, i, a, s) {
            let c = t(e).length > 0 && "product-box__content" === t(e)[0].className || t(e).closest(".buy-one-click__popup").length > 0,
                l = O(e, "Add to Cart", n, o, c, i);
            if (v(), dataLayer.push(l), r) {
                let t = S(e, "add", "Add to Cart", n, o, c, i);
                v(), dataLayer.push(t)
            }
            s || t(a).addClass("isTracked")
        }

        function S(e, n, o, r, i, a, s) {
            let c = D(e, o, a), l = {ecommerce: {[n]: {actionField: {list: c}, products: []}}, event: o}, u = i, d = [];
            for (let t = 0; t < e.length; t++) {
                let n = P(e[t], r, s);
                d.push(n)
            }
            return u && (l.buttonType = u), t(d).map((t, e) => {
                l.ecommerce[n].products.push(e)
            }), l
        }

        function O(n, o, r, i, a, s) {
            let c = function (t) {
                let e;
                "Product Details" === t ? e = "view_item" : "Add to Cart" === t ? e = "add_to_cart" : "Add to Wishlist" === t ? e = "add_to_wishlist" : "Remove from Cart" === t && (e = "remove_from_cart");
                return e || t
            }(o), l = {event: c, ecommerce: {items: []}}, d = [], p = i;
            for (let i = 0; i < n.length; i++) {
                let c, l = D(n[i], o, a), p = I(n[i], r, s, l);
                u === e.ecommerceConstants.pgType.PRODUCT && "Remove from Cart" != o && (c = L(p.item_id)) || (c = Q(n[i])), t(n[i]).hasClass("additional-services") || (p.index = c && c > 0 ? c : 1), d.push(p)
            }
            return p && (l.button_type = p), "add_to_cart" === c && (l.funnel_type = "main"), "buy_1click" !== i && "plus_buy_1click" !== i && "minus_buy_1click" !== i || (l.funnel_type = "buy_1click"), t(d).map((t, e) => {
                l.ecommerce.items.push(e)
            }), l
        }

        function D(e, n, r) {
            let i, a, s = t(e);
            if (s.length > 1 && (a = t(s[0])), r || "Product Details" === n) if (document.referrer) if (window.location.hostname !== new URL(document.referrer).hostname) i = "external_referal"; else {
                (i = function (t) {
                    d || (d = (0, o.getCookie)("slotToPDP_" + t, {onlyValue: !0}), (0, o.deleteCookie)("slotToPDP_" + t));
                    return d
                }(s.attr("data-code"))) || (i = "page_reload")
            } else i = "direct"; else {
                i = A(a || t(s[0]))
            }
            return i
        }

        function P(e, n, o) {
            let r;
            return t(e).map((e, i) => {
                let a = t(i).hasClass("additional-services"), s = t(i).hasClass("gifts-item"),
                    c = t(i).attr("data-title"), l = t(i).attr("data-code"), u = t(i).attr("data-price"),
                    d = t(i).attr("data-brand"), p = t(i).attr("data-availability"), f = t(i).attr("data-classid");
                if (r = a ? {name: c, id: l, price: u, category: f} : {
                    name: c,
                    id: l,
                    price: u,
                    brand: d,
                    category: f,
                    variant: p
                }, s && (r.variant = "Gift"), n) {
                    let e;
                    e = o || t(i).attr("data-quantity"), r.quantity = e || 1
                }
            }), r
        }

        function I(e, n, o, r) {
            let i;
            return t(e).map((e, a) => {
                let s = t(a).hasClass("additional-services"), c = t(a).hasClass("gifts-item"),
                    l = t(a).attr("data-title"), u = t(a).attr("data-code"), d = t(a).attr("data-price"),
                    p = t(a).attr("data-brand"), f = t(a).attr("data-availability"), h = t(a).attr("data-classid");
                if (i = s ? {item_name: l, item_id: u, price: d, item_category: h} : {
                    item_name: l,
                    item_id: u,
                    price: d,
                    item_brand: p,
                    item_category: h,
                    item_variant: f,
                    item_list_name: r
                }, c && (i.item_variant = "Gift"), n) {
                    let e;
                    e = o || t(a).attr("data-quantity"), i.quantity = e || 1
                }
            }), i
        }

        function L(t) {
            return p || (p = (0, o.getCookie)("positionToPDP_" + t, {onlyValue: !0}), (0, o.deleteCookie)("positionToPDP_" + t)), p
        }

        function A(e) {
            let n = u, o = t(e).closest(".slot");
            if (o) {
                n += g + o.attr("data-slot-name");
                let e = function (e, n) {
                    let o;
                    if (t(`.slot[data-slot-name="${n}"]`).length > 1) {
                        let r = Array.from(t(`.slot[data-slot-name="${n}"]`));
                        o = +r.indexOf(t(e)[0])
                    } else o = 0;
                    return o
                }(o, o.attr("data-slot-name"));
                e > 0 && (n += g + e)
            }
            let r = function (e) {
                let n = "", o = t(e),
                    r = t(e).parents(".listing__body-wrap").length > 1 ? o.parents(".listing__body-wrap[id*=action-category-container]") : o.closest(".listing__body-wrap"),
                    i = t(r).siblings(".listing__body-head").find(".listing__body-sort");
                (n = i.find(".sort-item.active").length > 0 ? i.find(".sort-item.active").attr("data-sort-order") : i.find(".action-sort-filter.active a").attr("data-sort")) || (n = o.parent(".listing__body-wrap").siblings(".listing__body-head").find(".listing__body-sort .sort-item.active a").attr("data-sort"));
                return n
            }(e);
            return r && (n += g + r), m && (n = n + g + "Search-modal"), n || "untitled"
        }

        function j(n, o) {
            return new Promise((i, u) => {
                let d = t(n);
                if (d.hasClass(e.ecommerceConstants.trackImprSel.products.PRODUCT_CARD) && 1 === d.closest(".page-listing").length) {
                    let t = X(n, e.ecommerceConstants.trackImprSel.products.PRODUCT_CARD);
                    if (o ? M(t, a) : R(t), r) {
                        let t = Y(n, e.ecommerceConstants.trackImprSel.products.PRODUCT_CARD);
                        o ? M(t, c) : $(t)
                    }
                } else if (d.hasClass(e.ecommerceConstants.trackImprSel.promotions.PROMO) || d.hasClass("slider-item_an")) {
                    let t = W(n, e.ecommerceConstants.trackImprSel.promotions.PROMO);
                    if (o ? M(t, s) : H(t), r) {
                        let t = U(n, e.ecommerceConstants.trackImprSel.promotions.PROMO);
                        o ? M(t, l) : B(t)
                    }
                } else if (d.hasClass(e.ecommerceConstants.trackHiddenImprSel.promotions.PROMO_HIDDEN)) {
                    let t = W(n, e.ecommerceConstants.trackHiddenImprSel.promotions.PROMO_HIDDEN);
                    if (o ? M(t, s) : H(t), r) {
                        let t = U(n, e.ecommerceConstants.trackHiddenImprSel.promotions.PROMO_HIDDEN);
                        o ? M(t, l) : B(t)
                    }
                } else if (d.hasClass(e.ecommerceConstants.trackHiddenImprSel.promotions.PROMO_HIDDEN_ACTION)) {
                    let t = W(n, e.ecommerceConstants.trackHiddenImprSel.promotions.PROMO_HIDDEN_ACTION);
                    if (o ? M(t, s) : H(t), r) {
                        let t = U(n, e.ecommerceConstants.trackHiddenImprSel.promotions.PROMO_HIDDEN_ACTION);
                        o ? M(t, l) : B(t)
                    }
                } else if (null !== d.attr("class").match(`${N(e.ecommerceConstants.trackImprSel.products)}|card_compare|analytics-data`)) {
                    let t,
                        i = d.attr("class").match(`${N(e.ecommerceConstants.trackImprSel.products)}|card_compare|analytics-data`);
                    if (i && i.length > 0) {
                        t = i[0];
                        let e = X(n, t);
                        if (o ? M(e, a) : R(e), r) {
                            let e = Y(n, t);
                            o ? M(e, c) : $(e)
                        }
                    }
                }
                i(!0)
            })
        }

        function N(e) {
            return t.map(e, function (t) {
                return [t]
            }).join("|")
        }

        function M(t, n) {
            let o = q(n);
            if (o.push(t), function (t) {
                return !(t.length < e.ecommerceConstants.tmpDataLayerLimit)
            }(o)) switch (v(), dataLayer.push(n.data), n.name) {
                case"tempImpressionDataLayer":
                    y();
                    break;
                case"tempPromotionDataLayer":
                    w();
                    break;
                case"tempImpressionDataLayerUA":
                    b();
                    break;
                case"tempPromotionDataLayerUA":
                    x()
            }
        }

        function q(t) {
            let e = t.dataTaget, n = e.split(".");
            let o = t;
            for (let t in n) o = o[n[t]];
            return o
        }

        function R(t) {
            v();
            let e = function (t) {
                return {
                    event: "select_item",
                    ecommerce: {
                        items: [{
                            item_name: t.item_name,
                            item_id: t.item_id,
                            price: t.price,
                            item_brand: t.item_brand,
                            item_category: t.item_category,
                            item_list_name: t.item_list_name,
                            index: t.index,
                            item_variant: t.item_variant
                        }]
                    }
                }
            }(t);
            dataLayer.push(e)
        }

        function $(t) {
            v();
            let e = function (t) {
                return {
                    ecommerce: {
                        click: {
                            actionField: {list: t.list},
                            products: [{
                                name: t.name,
                                id: t.id,
                                price: t.price,
                                brand: t.brand,
                                category: t.category,
                                list: t.list,
                                position: t.position,
                                variant: t.variant
                            }]
                        }
                    }, event: "Product Click"
                }
            }(t);
            dataLayer.push(e)
        }

        function H(t) {
            v();
            let e = function (t) {
                return {
                    event: "select_promotion",
                    ecommerce: {
                        items: [{
                            promotion_id: t.promotion_id,
                            promotion_name: t.promotion_name,
                            location_id: t.location_id,
                            creative_slot: t.creative_slot
                        }]
                    }
                }
            }(t);
            dataLayer.push(e)
        }

        function B(t) {
            v();
            let e = function (t) {
                return {
                    ecommerce: {promoClick: {promotions: [{id: t.id, name: t.name, position: t.position}]}},
                    event: "Promo Click"
                }
            }(t);
            dataLayer.push(e)
        }

        function F(e) {
            let n = t(e), o = n.closest(".slot").attr("data-slot-container-class"), r = n.closest(`.${o}`);
            return 0 == r.length && (r = n.find(`.${o}`)), r
        }

        function W(t, e) {
            return {promotion_id: G(t), promotion_name: z(t), location_id: V(t, e), creative_slot: K(t, e)}
        }

        function U(t, e) {
            return {id: G(t), name: z(t), position: V(t, e)}
        }

        function G(e) {
            return t(e).attr("data-id")
        }

        function z(e) {
            return t(e).attr("data-title")
        }

        function V(e, n) {
            let o = "", r = function (e) {
                return t(e).attr("data-slot-name")
            }(e), i = K(e, n);
            if (o += u + g + r + g + i, t(".page-promo").length > 0) {
                let e = function () {
                    let e = "", n = t(".promo__filter .is-active li a.active").attr("data-active"),
                        o = t(".promo__filter .filters li a.active").attr("data-url");
                    n && (e += g + n);
                    o && (e += g + o);
                    return e || null
                }();
                e && (o += e)
            }
            return o || ""
        }

        function K(e, n) {
            let o, r = t(e);
            return o = r.attr("data-web-nav-position") && r.closest("#js-catalog").hasClass("catalog_simple") ? r.attr("data-web-nav-position") : r.attr("data-position") ? r.attr("data-position") : Q(e, n)
        }

        function X(e, n) {
            let o = t(F(e)), r = A(e), i = o.attr("data-title"), a = o.attr("data-code"), s = o.attr("data-price"),
                c = o.attr("data-brand"), l = Q(e, n), u = o.attr("data-availability"), d = o.attr("data-classid"),
                p = o.attr("data-quantity"), f = {
                    item_name: i,
                    item_id: a,
                    price: s,
                    item_brand: c,
                    item_category: d,
                    item_list_name: r,
                    index: l,
                    item_variant: u
                };
            return p && (f.quantity = p), f
        }

        function Y(e, n) {
            let o = t(F(e)), r = A(e), i = o.attr("data-title"), a = o.attr("data-code"), s = o.attr("data-price"),
                c = o.attr("data-brand"), l = Q(e, n), u = o.attr("data-availability"), d = o.attr("data-classid"),
                p = o.attr("data-quantity"),
                f = {name: i, id: a, price: s, brand: c, category: d, list: r, position: l, variant: u};
            return p && (f.quantity = p), f
        }

        function Q(n, o) {
            let r = t(n).closest(".slot");
            if (!o) {
                let r = t(n).attr("class"),
                    i = r ? r.match(`${N(e.ecommerceConstants.trackImprSel.products)}|card_compare|analytics-data|card__head|checkout-tovar-body`) : null;
                i && i.length > 0 && (o = i[0])
            }
            let i = +Array.from(t(r).find(`.${o}`)).indexOf(t(n)[0]);
            return i >= 0 && i++, i
        }

        function J() {
            if (u === e.ecommerceConstants.pgType.CART) {
                let e = function () {
                    let e = t(".shop-cart__item-product, .shop-cart__kit-item-product"), n = [];
                    for (let t = 0; t < e.length; t++) {
                        let o = Z(e[t]);
                        o && n.push(o)
                    }
                    return n
                }();
                if (e) {
                    let t = lt(null, e);
                    t.event = "view_cart", dataLayer.push(t)
                }
            }
        }

        function Z(e) {
            let n = t(e).attr("data-title"), o = t(e).attr("data-code"), r = t(e).attr("data-price"),
                i = t(e).attr("data-brand"), a = t(e).attr("data-availability");
            return {
                item_name: n,
                item_id: o,
                price: r,
                item_brand: i,
                item_category: t(e).attr("data-classid"),
                item_variant: a,
                quantity: t(e).attr("data-quantity")
            }
        }

        function tt() {
            if (-1 === f.indexOf(e.ecommerceConstants.checkoutSteps.deliveryMethod)) {
                let n = t(".checkout-payment__wrap .delivery-input:checked"), o = ot(),
                    i = lt(e.ecommerceConstants.checkoutSteps.deliveryMethod, o, n);
                if (f.push(e.ecommerceConstants.checkoutSteps.deliveryMethod), dataLayer.push(i), r) {
                    let t = rt(), o = ut(e.ecommerceConstants.checkoutSteps.deliveryMethod, t, n);
                    dataLayer.push(o)
                }
            }
        }

        function et() {
            if (-1 === f.indexOf(e.ecommerceConstants.checkoutSteps.personalData) && ("True" === t("html").attr("data-isauthenticated") || function () {
                let e = 0, n = t(".checkout-contact__form .checkout-contact__form-col input[data-val-required]"),
                    o = t(n).length;
                return t(n).map(function (n, o) {
                    t(o).val().length > 0 && e++
                }), e === o
            }())) {
                let t = ot(), n = lt(e.ecommerceConstants.checkoutSteps.personalData, t);
                if (f.push(e.ecommerceConstants.checkoutSteps.personalData), dataLayer.push(n), r) {
                    let t = rt(), n = ut(e.ecommerceConstants.checkoutSteps.personalData, t);
                    dataLayer.push(n)
                }
            }
        }

        function nt() {
            if (-1 === f.indexOf(e.ecommerceConstants.checkoutSteps.paymentMethod)) {
                let n = t(".checkout-payment__wrap .payment-table .checkout-pay-input:checked"), o = ot(),
                    i = lt(e.ecommerceConstants.checkoutSteps.paymentMethod, o, n);
                if (f.push(e.ecommerceConstants.checkoutSteps.paymentMethod), dataLayer.push(i), r) {
                    let t = rt(), o = ut(e.ecommerceConstants.checkoutSteps.paymentMethod, t, n);
                    dataLayer.push(o)
                }
            }
        }

        function ot() {
            let e = it(), n = [];
            for (let o = 0; o < e.length; o++) {
                let r = st(e[o]);
                r && t.each(r, function () {
                    n.push(this)
                })
            }
            return n
        }

        function rt() {
            let e = it(), n = [];
            for (let o = 0; o < e.length; o++) {
                let r = at(e[o]);
                r && t.each(r, function () {
                    n.push(this)
                })
            }
            return n
        }

        function it() {
            return t(".checkout-tovar .checkout-tovar-wrap")
        }

        function at(e) {
            let n = ct(e), o = [];
            if (n.length > 0) for (let e = 0; e < n.length; e++) {
                let r, i = t(n[e]).hasClass("additional-services"), a = t(n[e]).hasClass("gifts-item"),
                    s = t(n[e]).attr("data-title"), c = t(n[e]).attr("data-code"), l = t(n[e]).attr("data-price"),
                    u = t(n[e]).attr("data-brand"), d = t(n[e]).attr("data-availability"),
                    p = t(n[e]).attr("data-classid"), f = t(n[e]).attr("data-quantity");
                r = i ? {name: s, id: c, price: l, category: p} : {
                    name: s,
                    id: c,
                    price: l,
                    brand: u,
                    category: p,
                    variant: d,
                    quantity: f
                }, a && (r.variant = "Gift"), o.push(r)
            }
            return o
        }

        function st(e) {
            let n = ct(e), o = [];
            if (n.length > 0) {
                for (let e = 0; e < n.length; e++) {
                    let r, i = t(n[e]).hasClass("additional-services"), a = t(n[e]).hasClass("gifts-item"),
                        s = t(n[e]).attr("data-title"), c = t(n[e]).attr("data-code"), l = t(n[e]).attr("data-price"),
                        u = t(n[e]).attr("data-brand"), d = t(n[e]).attr("data-availability"),
                        p = t(n[e]).attr("data-classid"), f = t(n[e]).attr("data-quantity");
                    r = i ? {item_name: s, item_id: c, price: l, item_category: p} : {
                        item_name: s,
                        item_id: c,
                        price: l,
                        item_brand: u,
                        item_category: p,
                        item_variant: d,
                        quantity: f
                    }, a && (r.item_variant = "Gift"), o.push(r)
                }
                return o
            }
        }

        function ct(e) {
            return t(e).find(".checkout-tovar-body")
        }

        function lt(n, o, r) {
            let i = {event: "", ecommerce: {items: []}};
            return o && (i.ecommerce.items = o), n === e.ecommerceConstants.checkoutSteps.products ? (i.event = "begin_checkout", i.funnel_type = "main") : n === e.ecommerceConstants.checkoutSteps.personalData ? (i.event = "add_contact_data", "True" === t("html").attr("data-isauthenticated") ? i.option = "registered user" : i.option = "unregistered user") : n === e.ecommerceConstants.checkoutSteps.deliveryMethod ? (i.event = "add_shipping_info", function (e, n) {
                let o = dt(t(n).attr("value"));
                o && (e.ecommerce.shipping_tier = o)
            }(i, r)) : n === e.ecommerceConstants.checkoutSteps.paymentMethod && (i.event = "add_payment_info", function (e, n) {
                let o = pt(t(n).attr("value"));
                o && (e.ecommerce.payment_type = o)
            }(i, r)), i
        }

        function ut(n, o, r) {
            let i = {ecommerce: {checkout: {actionField: {step: n}, products: []}}, event: "Checkout " + n};
            return Object.values(e.ecommerceConstants.checkoutSteps).indexOf(n) > -1 && o && (i.ecommerce.checkout.products = o), n === e.ecommerceConstants.checkoutSteps.personalData ? "True" === t("html").attr("data-isauthenticated") ? i.ecommerce.checkout.actionField.option = "registered user" : i.ecommerce.checkout.actionField.option = "unregistered user" : n === e.ecommerceConstants.checkoutSteps.deliveryMethod ? function (e, n) {
                let o = dt(t(n).attr("value"));
                o && (e.ecommerce.checkout.actionField.option = o)
            }(i, r) : n === e.ecommerceConstants.checkoutSteps.paymentMethod && function (e, n) {
                let o = pt(t(n).attr("value"));
                o && (e.ecommerce.checkout.actionField.option = o)
            }(i, r), i
        }

        function dt(t) {
            let n = e.ecommerceConstants.deliveryMethods;
            for (let e in n) if (+t === n[e].value) return n[e].title;
            return null
        }

        function pt(t) {
            let n = e.ecommerceConstants.paymentMethods;
            for (let e in n) if (+t === n[e].value) return n[e].title;
            return null
        }

        function ft() {
            let n = document.querySelectorAll(function (t) {
                let e = "", n = l(), o = t ? "." : "";
                for (let t = 0; t < n.length; t++) {
                    let r = !(t < n.length - 1);
                    e += o + n[t], r || (e += ", ")
                }
                return e
            }(!0)), o = {root: null, rootMargin: "0px", threshold: .8};
            t(document).ready(function () {
                a(o, n)
            });
            let r = document.getElementsByTagName("body")[0], i = l();

            function a(e, n) {
                n.forEach(function (n) {
                    if (t(n).length > 1) try {
                        for (let o = 0; o < t(n).length; o++) if (!t(n).eq(o).hasClass("isTracked")) {
                            new IntersectionObserver(s, e).observe(t(n)[o])
                        }
                    } catch (t) {
                        console.error(t)
                    } else try {
                        if (!t(n).hasClass("isTracked")) {
                            new IntersectionObserver(s, e).observe(t(n)[0])
                        }
                    } catch (t) {
                        console.error(t)
                    }
                })
            }

            function s(n, o) {
                if (0 !== n.length && !0 === n[0].isIntersecting) {
                    let r = t(n[0].target), i = Number(r.attr("last-view-time"));
                    i && Date.now() - i > 2 * e.ecommerceConstants.minimumObservationTimeSpanMs && r.attr("viewing-time", 0);
                    let a = Number(r.attr("viewing-time"));
                    a && a >= e.ecommerceConstants.minimumObservationTimeMs ? (r.addClass("isTracked"), j(n[0].target, !0), o.unobserve(n[0].target), o.disconnect()) : c(n[0].target, o, a), r.attr("last-view-time", Date.now())
                }
            }

            function c(n, o, r) {
                r = r ? r + e.ecommerceConstants.minimumObservationTimeSpanMs : e.ecommerceConstants.minimumObservationTimeSpanMs, t(n).attr("viewing-time", r), o.unobserve(n), setTimeout(() => {
                    o.observe(n)
                }, e.ecommerceConstants.minimumObservationTimeSpanMs)
            }

            function l() {
                return t.map(e.ecommerceConstants.trackImprSel, function (e) {
                    return t.map(e, function (t) {
                        return [t]
                    })
                })
            }

            new MutationObserver(e => {
                !function (e, n, o) {
                    for (let r of e) for (let e of r.addedNodes) {
                        if (!(e instanceof HTMLElement)) continue;
                        let r, i = [];
                        for (let n = 0; n < o.length; n++) t(e).hasClass(o[n]) && !t(e).hasClass("handledByTracker") ? ((r = t(e)).addClass("handledByTracker"), i.push(r)) : t(e).has("." + o[n] + ":not(.handledByTracker)").length > 0 && ((r = t(e).find("." + o[n] + ":not(.handledByTracker)")).each(function () {
                            t(this).addClass("handledByTracker")
                        }), i.push(r));
                        a(n, i)
                    }
                }(e, o, i)
            }).observe(r, {childList: !0, subtree: !0}), window.addEventListener("beforeunload", t => {
                h && kt()
            })
        }

        function ht() {
            (function (e, n) {
                let o = !1;
                return t.each(n, function (t, n) {
                    n.match(e) && (o = !0)
                }), o
            })("search=", window.location.hash.split("#")) && (m = !0)
        }

        function mt(e) {
            let n = t(e).find(".card__head, .analytics-data").attr("data-code");
            n || (n = t(e).attr("data-code"));
            let r = A(t(e)), i = new Date, a = new Date(i);
            a.setDate(i.getDate() + 1), (0, o.setCookie)("slotToPDP_" + n, r, {expires: a, path: "/"});
            let s = Q(e);
            s && (0, o.setCookie)("positionToPDP_" + n, s, {expires: a, path: "/"})
        }

        function gt(t) {
            h = !1, kt(), t && "function" == typeof t && t()
        }

        function vt(e, n, o, r) {
            if ("product" === n) {
                j(t(e.target).closest(o.clickTargetContainerSelector)[0])
            } else {
                j((i = "data-slot-name", void 0 !== (a = t(r).attr(i)) && !1 !== a ? t(r)[0] : t(r).closest("[data-slot-name]")[0]))
            }
            var i, a
        }

        function yt(t) {
            var e, n = 0;
            for (e = 0; e < t.length; e++) n = (n << 5) - n + t.charCodeAt(e), n |= 0;
            return n
        }

        function bt(t, e) {
            let n = function (t, e) {
                let n = Ct(t), o = {
                    event: "purchase",
                    funnel_type: "buy_1click",
                    ecommerce: {
                        purchase: {
                            transaction_id: e,
                            affiliation: "buy_1click",
                            value: n.quantity * n.price,
                            currency: "UAH",
                            items: []
                        }
                    }
                };
                return o.ecommerce.purchase.items.push(n), o
            }(t, e);
            if (v(), dataLayer.push(n), r) {
                let n = function (t, e) {
                    let n = function (t) {
                        let e = t.attr("data-title"), n = t.attr("data-code"), o = t.attr("data-price"),
                            r = t.attr("data-brand"), i = t.attr("data-availability"), a = t.attr("data-classid"),
                            s = t.attr("data-quantity"),
                            c = {name: e, id: n, price: o, brand: r, category: a, variant: i};
                        s && (c.quantity = s);
                        return c
                    }(t), o = {
                        ecommerce: {
                            purchase: {
                                actionField: {
                                    id: e,
                                    affiliation: "foxtrot.com.ua - buy1click",
                                    revenue: n.quantity * n.price
                                }, products: []
                            }
                        }, event: "transaction"
                    };
                    return o.ecommerce.purchase.products.push(n), o
                }(t, e);
                v(), dataLayer.push(n)
            }
        }

        function _t(t) {
            let e = function (t) {
                let e = Ct(t), n = {event: "begin_checkout", funnel_type: "buy_1click", ecommerce: {items: []}};
                return n.ecommerce.items.push(e), n
            }(t);
            v(), dataLayer.push(e)
        }

        function Ct(t) {
            let e = t.attr("data-title"), n = t.attr("data-code"), o = t.attr("data-price"), r = t.attr("data-brand"),
                i = t.attr("data-availability"), a = t.attr("data-classid"), s = t.attr("data-quantity"),
                c = {item_name: e, item_id: n, price: o, item_brand: r, item_category: a, item_variant: i};
            return s && (c.quantity = s), c
        }

        function wt(n, o) {
            if (et(), tt(), nt(), n) {
                n = `${n}${i}`;
                let a = function (e, n, o) {
                    let r = {
                            event: "purchase",
                            funnel_type: "main",
                            ecommerce: {purchase: {items: e, transaction_id: n, affiliation: "main", currency: "UAH"}}
                        },
                        i = t(".checkout-results .checkout-results__list-item p[data-price-without-delivery]").attr("data-price-without-delivery"),
                        a = t(".checkout-results .checkout-results__list-item p[data-price-discount]").attr("data-price-discount"),
                        s = t(".checkout-results .checkout-results__list-item p[data-price-cost-of-services]").attr("data-price-cost-of-services"),
                        c = t(".checkout-results .checkout-results__list-item p[data-delivery-total-cost-value]").attr("data-delivery-total-cost-value");
                    if (i) {
                        i = i.replace(/\s/g, "");
                        let t = parseInt(i, 10);
                        a && (a = a.replace(/\s/g, ""), t -= parseInt(a, 10)), s && (s = s.replace(/\s/g, ""), t -= parseInt(s, 10)), r.ecommerce.purchase.value = t
                    }
                    return c && (c = c.replace(/\s/g, ""), r.ecommerce.purchase.shipping = c), o && (r.ecommerce.purchase.coupon = o), r
                }(ot(), n, o);
                if (dataLayer.push(a), r) {
                    let t = function (t, n) {
                        let o = ut(e.ecommerceConstants.checkoutSteps.submit, t);
                        return o["gtm-ee-event-label"] = n, o
                    }(rt(), n);
                    dataLayer.push(t)
                }
            }
        }

        function xt() {
            et()
        }

        function kt() {
            q(a).length > 0 && (dataLayer.push(a.data), y(), r && (dataLayer.push(c.data), b())), q(s).length > 0 && (dataLayer.push(s.data), w(), r && (dataLayer.push(l.data), x()))
        }

        function Tt() {
            document.addEventListener("onUnloadCheckoutEvent", function () {
                xt()
            }), document.addEventListener("onSubmitCheckoutEvent", function (t) {
                let e = t.detail;
                wt(e.orderId, e.promoCode)
            }), document.addEventListener("onBuyInOneClickSubmitEvent", function (t) {
                let e = t.detail;
                bt(e.productDataContainer, e.orderId)
            }), document.addEventListener("onBuyInOneClickBeginEvent", function (t) {
                _t(t.detail.productDataContainer)
            }), document.addEventListener("addToFavoritesToDataLayerEvent", function (e) {
                !function (e) {
                    let n = t(e),
                        o = O(e, "Add to Wishlist", !1, null, n.length > 0 && "product-box__content" === n[0].className, 1);
                    v(), dataLayer.push(o)
                }(e.detail.productDataContainer)
            }), document.addEventListener("onRemoveProductFromCartEvent", function (t) {
                let e = t.detail;
                !function (t, e, n, o) {
                    let i = t, a = O(i, "Remove from Cart", !0, e, n, o);
                    if (v(), dataLayer.push(a), r) {
                        let t = S(i, "remove", "Remove from Cart", !0, e, n, o);
                        v(), dataLayer.push(t)
                    }
                }(e.htmlElement, e.buttonType, e.buttonBelongsToPDP, e.quantity)
            }), document.addEventListener("addToCompareToDataLayerEvent", function () {
                v(), dataLayer.push({event: "addToCompare"})
            }), document.addEventListener("checkoutAuthPopupEvent", function () {
                et(), tt(), nt(), v(), dataLayer.push({event: "view_checkout_auth_popup"})
            }), document.addEventListener("onAddToCartEvent", function (e) {
                let n = e.detail;
                var o, r, i, a, s, c;
                o = n.productDataContainer, r = n.needQuantity, i = n.buttonType, a = n.quantity, s = n.clickTarget, (c = n.canBeTrackedMultipleTimes) ? t(s).closest(".button").is(".is-gift-in-cart, .is-kit-in-cart, .is-in-cart") || E(o, r, i, a, s, c) : t(s).hasClass("isTracked") || E(o, r, i, a, s, c)
            }), document.addEventListener("onAddServiceEvent", function (e) {
                !function (e) {
                    let n, o, i = t(e).attr("data-target-product");
                    if (t("#cartsContainer").find(`[data-code="${i}"]`).length > 0) n = O(e, "Add to Cart", !0, "add_service", !1, 1), r && (o = S(e, "add", "Add to Cart", !0, "add_service", !1, 1)); else {
                        let a = t(".product-box").find(`[data-code="${i}"]`).first(), s = [];
                        s.push(a), s.push(e), n = O(s, "Add to Cart", !0, "add_service", !1, 1), r && (o = S(s, "add", "Add to Cart", !0, "add_service", !1, 1))
                    }
                    v(), dataLayer.push(n), r && (v(), dataLayer.push(o))
                }(e.detail.serviceDataContainer)
            }), document.addEventListener("subscriptionToDataLayerEvent", function () {
                v(), dataLayer.push({event: "Subscription"})
            }), document.addEventListener("signInToDataLayerEvent", function (t) {
                let e = t.detail;
                var n, o;
                n = e.card, o = e.verifyMethod, v(), dataLayer.push({event: "Sign In", method: o, UID: n})
            }), document.addEventListener("signUpToDataLayerEvent", function (t) {
                let e = t.detail;
                var n, o;
                n = e.uid, o = e.verifyMethod, v(), dataLayer.push({event: "Sign Up", method: o, UID: n})
            })
        }

        ft(), function () {
            let e = t(".analytPageType").attr("data-analyt-page-type");
            u = e || "unknownPageType"
        }(), ht(), window.dataLayer = window.dataLayer || [], y(), w(), r && (b(), x()), t("#js-catalog-list li div.catalog__category-item__wrap").mouseenter(function (e) {
            if ("mouseenter" === e.type) {
                let n = t(this);
                n[0].isTracked ? n.unbind(e) : n[0].mouseEnterTime = new Date
            }
        }), t("#js-catalog-list li div.catalog__category-item__wrap").mouseleave(function (n) {
            if ("mouseleave" === n.type) {
                let o = t(this), r = o[0].mouseEnterTime, i = new Date - r;
                (i /= 1e3) > .5 && (o.siblings().first().find(".promo-obj-hidden").map((n, o) => {
                    let r = t(o).attr("data-slot-name");
                    t(o).attr("data-slot-name", r.split("___")[0] + g + e.ecommerceConstants.promoType.MAIN_MENU), j(t(o), !0)
                }), o.siblings().first().find(".promo-obj-hidden-action").map((e, n) => {
                    j(t(n), !0)
                }), o[0].isTracked = !0, o.unbind(n))
            }
        }), t(".js-hover-catalog-category").mouseenter(function (e) {
            if ("mouseenter" === e.type) {
                let n = t(this);
                n[0].isTracked ? n.unbind(e) : n[0].mouseEnterTime = new Date
            }
        }), t(".js-hover-catalog-category").mouseleave(function (n) {
            if ("mouseleave" === n.type) {
                let o = t(this), r = o[0].mouseEnterTime, i = new Date - r;
                if ((i /= 1e3) > .5) {
                    let r = o.attr("data-category");
                    if (r) {
                        let i = t("#js-catalog-list .catalog__category-item[data-category=" + r + "]");
                        t(i).find(".promo-obj-hidden").map((n, o) => {
                            let r = t(o).attr("data-slot-name");
                            t(o).attr("data-slot-name", r.split("___")[0] + g + e.ecommerceConstants.promoType.WEB_NAVIGATION), j(t(o), !0)
                        }), o[0].isTracked = !0, o.unbind(n)
                    }
                }
            }
        }), t.map({
            product: {
                clickTargetSelector: ".js-card .card__image a, .js-card .card__title, .ad-product-day__title, .ad-product-day__photo, .top5-card .listing-top__item-img, .top5-card .listing-top__item-title a, .card-promo .card-promo__image a, .shop-cart__carousel-item__img a, .shop-cart__carousel-item a, .header-tooltip__cards-item__img, .header-tooltip__cards-item__title, .card-promo__footer a, .card-promo__image a, .card_compare img, .card_compare .card__title, .product-link_an",
                clickTargetContainerSelector: ".card, .ad-product-day, .top5-card, .card-promo, .shop-cart__carousel-item, .header-tooltip__cards-item, .card-promo .analytics-data"
            },
            promo: {clickTargetSelector: ".promo-obj, .promo-obj-hidden, .promo-obj-hidden-action img, .promo-obj-hidden-action p"}
        }, function (e, n) {
            t("body").on("click", e.clickTargetSelector, function (o) {
                gt(), vt(o, n, e, this), "product" === n && mt(t(this).closest(".card, .top5-card, .card-promo, .shop-cart__carousel-item, .analytics-data, .ad-product-day"))
            }), t("body").on("mousedown", e.clickTargetSelector, function (o) {
                2 === event.which && ("product" === n && mt(t(this).closest(".card, .top5-card, .card-promo, .shop-cart__carousel-item, .analytics-data, .ad-product-day")), gt(), vt(o, n, e, this))
            }), t("body").on("contextmenu", e.clickTargetSelector, function (r) {
                let i = new Date, a = new Date(i);
                a.setSeconds(i.getSeconds() + 10);
                let s = t(this), c = s.attr("href") ? s.attr("href") : s.closest("[href]").attr("href");
                if (c) {
                    let t = yt(c), i = this;
                    (0, o.setCookie)("right_click_cookie_" + t, c, {
                        expires: a,
                        path: "/"
                    }), "product" === n && mt(s.closest(".card, .top5-card, .card-promo, .shop-cart__carousel-item, .analytics-data, .ad-product-day")), setTimeout(function () {
                        let a = (0, o.getCookie)("right_click_cookie_response_" + t, {onlyValue: !0});
                        a && "true" === a && ((0, o.deleteCookie)("right_click_cookie_response_" + t), gt(), vt(r, n, e, i))
                    }, 1e4)
                }
            });
            let r = yt(window.location.pathname), i = (0, o.getCookie)("right_click_cookie_" + r, {onlyValue: !0});
            if (null !== i && (window.location.pathname === i || window.location.href === i)) {
                (0, o.deleteCookie)("right_click_cookie_" + r);
                let t = new Date, e = new Date(t);
                e.setSeconds(t.getSeconds() + 10), (0, o.setCookie)("right_click_cookie_response_" + r, "true", {
                    expires: e,
                    path: "/"
                })
            }
        }), u === e.ecommerceConstants.pgType.PRODUCT && setTimeout(function () {
            let e = t(".product-box__content"), n = O(e, "Product Details", !1, null, null, 1),
                o = L(n.ecommerce.items[0].item_id);
            if (o && (n.ecommerce.items[0].index = o), v(), dataLayer.push(n), r) {
                let t = S(e, "detail", "Product Details", !1, null, null, 1);
                v(), dataLayer.push(t)
            }
        }, 500), J(), function () {
            if (u === e.ecommerceConstants.pgType.CHECKOUT) {
                let n = ot(), o = r ? rt() : null;
                if (n) {
                    let i = lt(e.ecommerceConstants.checkoutSteps.products, n);
                    if (dataLayer.push(i), r) {
                        let t = ut(e.ecommerceConstants.checkoutSteps.products, o);
                        dataLayer.push(t)
                    }
                    et(), t(".checkout-payment__wrap").on("click", ".delivery-input", function (t) {
                        if (t.originalEvent) {
                            et(), n = ot();
                            let i = lt(e.ecommerceConstants.checkoutSteps.deliveryMethod, n, t.target);
                            if (f.push(e.ecommerceConstants.checkoutSteps.deliveryMethod), dataLayer.push(i), r) {
                                let n = ut(e.ecommerceConstants.checkoutSteps.deliveryMethod, o, t.target);
                                dataLayer.push(n)
                            }
                        }
                    }), t(".checkout-payment__wrap").on("click", ".payment-table .checkout-pay-input", function (t) {
                        if (t.originalEvent) {
                            et(), tt(), n = ot();
                            let i = lt(e.ecommerceConstants.checkoutSteps.paymentMethod, n, t.target);
                            if (f.push(e.ecommerceConstants.checkoutSteps.paymentMethod), dataLayer.push(i), r) {
                                let n = ut(e.ecommerceConstants.checkoutSteps.paymentMethod, o, t.target);
                                dataLayer.push(n)
                            }
                        }
                    }), t(document).bind("mouseleave.ecom", function (e) {
                        e.pageY - t(window).scrollTop() <= 1 && xt()
                    })
                }
            }
        }(), t(document).ready(function () {
            Tt()
        })
    }).call(e, n(0))
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(e, {})
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    e.ecommerceConstants = {
        deliveryMethods: {
            Courier: {
                value: 1,
                title: "РћСЃС‚Р°РІР°Р№С‚РµСЃСЊ РґРѕРјР°, РґРѕСЃС‚Р°РІРёС‚ Р¤РѕРєСЃС‚СЂРѕС‚"
            },
            Adresnaya_dostavka_novaya_pochta: {
                value: 2,
                title: "РђРґСЂРµСЃРЅР°СЏ РґРѕСЃС‚Р°РІРєР°, РќРѕРІР°СЏ РџРѕС‡С‚Р°"
            },
            Dostavka_v_otdelenie_novaya_pochta: {
                value: 3,
                title: "Р”РѕСЃС‚Р°РІРєР° РІ РѕС‚РґРµР»РµРЅРёРµ, РќРѕРІР°СЏ РџРѕС‡С‚Р°"
            },
            Dostavka_v_otdelenie_ukrpochta: {
                value: 4,
                title: "Р”РѕСЃС‚Р°РІРєР° РІ РѕС‚РґРµР»РµРЅРёРµ, РЈРєСЂРїРѕС‡С‚Р°"
            },
            Dostavka_v_otdelenie_justin: {value: 5, title: "Р”РѕСЃС‚Р°РІРєР° РІ РѕС‚РґРµР»РµРЅРёРµ, Justin"},
            Ekspress_dostavka_ipost_za_2_chasa: {
                value: 6,
                title: "Р­РєСЃРїСЂРµСЃСЃ РґРѕСЃС‚Р°РІРєР° iPOST Р·Р° 2 С‡Р°СЃР°"
            },
            Aviadostavka_dronex: {value: 7, title: "РђРІРёР°РґРѕСЃС‚Р°РІРєР° Dronex"},
            Unknown: {value: 8, title: "РќРµРёР·РІРµСЃС‚РЅРѕ"},
            Pickup: {value: 9, title: "РЎР°РјРѕРІС‹РІРѕР· РёР· РјР°РіР°Р·РёРЅР°"},
            From_office: {value: 10, title: "РЎР°РјРѕРІС‹РІРѕР· РёР· РѕС„РёСЃР° РРЅС‚РµСЂРЅРµС‚-РјР°РіР°Р·РёРЅР°"},
            Dhl: {value: 11, title: "Р”РѕСЃС‚Р°РІРєР° РєСѓСЂСЊРµСЂСЃРєРѕР№ СЃР»СѓР¶Р±РѕР№ DHL"}
        },
        paymentMethods: {
            Cash: {value: 1, title: "РћРїР»Р°С‚Р° РЅР°Р»РёС‡РЅС‹РјРё"},
            Bank: {value: 2, title: "Р‘Р°РЅРєРѕРІСЃРєРёР№ РїРµСЂРµРІРѕРґ"},
            Tranzzo: {value: 3, title: "РћРїР»Р°С‚Р° Р±Р°РЅРєРѕРІСЃРєРѕР№ РєР°СЂС‚РѕР№ Visa / MasterCard"},
            On_lajn_oplatiy_webmoney: {
                value: 4,
                title: "РћРїР»Р°С‚Р° Р±Р°РЅРєРѕРІСЃРєРѕР№ РєР°СЂС‚РѕР№ Visa / MasterCard"
            },
            MoneXy: {value: 5, title: "MoneXy"},
            V_terminalah_ukrainiy_pri_podderzhke_webmoney: {
                value: 6,
                title: "Р’ С‚РµСЂРјРёРЅР°Р»Р°С… РЈРєСЂР°РёРЅС‹ (РїСЂРё РїРѕРґРґРµСЂР¶РєРµ WebMoney)"
            },
            Bankovskoj_kartoj: {value: 7, title: "Р‘Р°РЅРєРѕРІСЃРєРѕР№ РєР°СЂС‚РѕР№"},
            Privatbank_parts_payment: {value: 8, title: "РџСЂРёРІР°С‚Р‘Р°РЅРє вЂ“ РѕРїР»Р°С‚Р° С‡Р°СЃС‚СЏРјРё"},
            Privatbank_instant_payment: {
                value: 9,
                title: "РџСЂРёРІР°С‚Р‘Р°РЅРє - РњРіРЅРѕРІРµРЅРЅР°СЏ СЂР°СЃСЃСЂРѕС‡РєР°"
            },
            Kredit: {value: 10, title: "РљСЂРµРґРёС‚"},
            Kredit_pos_na_kartu: {value: 11, title: "РєСЂРµРґРёС‚ POS РЅР° РєР°СЂС‚Сѓ"},
            Privatbank_instant_payment_action: {
                value: 12,
                title: "РџСЂРёРІР°С‚Р‘Р°РЅРє - РњРіРЅРѕРІРµРЅРЅР°СЏ СЂР°СЃСЃСЂРѕС‡РєР° Р°РєС†РёРѕРЅРЅР°СЏ"
            },
            Oplata_bankovskoj_kartoj_visa__mastercard: {
                value: 13,
                title: "РћРїР»Р°С‚Р° Р±Р°РЅРєРѕРІСЃРєРѕР№ РєР°СЂС‚РѕР№ Visa / MasterCard"
            },
            Nalichniyj_raschet: {value: 14, title: "РќР°Р»РёС‡РЅС‹Р№ СЂР°СЃС‡РµС‚"},
            Tranzzo_visa_checkout: {value: 15, title: "РћРїР»Р°С‚Р° Р±Р°РЅРєРѕРІСЃРєРѕР№ РєР°СЂС‚РѕР№ VISA Checkout"},
            MonoBank: {value: 16, title: "РњРѕРЅРѕР±Р°РЅРє - РїРѕРєСѓРїРєР° С‡Р°СЃС‚СЏРјРё"},
            Oplatit_kartoj_kureru: {value: 17, title: "РћРїР»Р°С‚РёС‚СЊ РєР°СЂС‚РѕР№ РєСѓСЂСЊРµСЂСѓ"},
            Oplata_kartoj_pri_poluchenii: {value: 19, title: "РћРїР»Р°С‚Р° РєР°СЂС‚РѕР№ РїСЂРё РїРѕР»СѓС‡РµРЅРёРё"},
            Unknown: {value: 20, title: "РќРµРёР·РІРµСЃС‚РЅРѕ"},
            Non_cash: {value: 21, title: "Р‘РµР·РЅР°Р»РёС‡РЅС‹Р№ СЂР°СЃС‡РµС‚"}
        },
        pgType: {
            HOME: "Home",
            CATEGORY: "Category",
            PRODUCT: "Product",
            SEARCH: "Search",
            CHECKOUT: "Checkout",
            CART: "Cart",
            THX_PAGE: "Thx page",
            PROFILE: "Profile",
            COMPARE: "Compare",
            OTHER: "Other"
        },
        promoType: {
            HEADER: "header",
            MAIN: "main",
            SUPERPRICE: "superprice",
            SQUARE: "square",
            ALLCATEGORIES: "all_categories",
            MAIN_MENU: "main_menu",
            MAIN_MENU_ACTION: "main_menu_action",
            WEB_NAVIGATION: "web_navigation",
            OHTER: "other",
            BEST_OF_THE_BEST: "best_of_the_best"
        },
        trackImprSel: {
            products: {
                PRODUCT_CARD: "js-card",
                GIFT: "giftProduct",
                SET: "setProduct",
                PROD_OF_DAY: "ad-product-day",
                COMPARE_CARD: "compare__card",
                TOP_5_PLP: "top5-card",
                PRODUCT_OF_WEEK: "card-promo",
                YOU_MAY_NEED_CARD: "shop-cart__carousel-item"
            }, promotions: {PROMO: "promo-obj"}
        },
        trackHiddenImprSel: {
            promotions: {
                PROMO_HIDDEN: "promo-obj-hidden",
                PROMO_HIDDEN_ACTION: "promo-obj-hidden-action"
            }
        },
        checkoutSteps: {products: 1, personalData: 2, deliveryMethod: 3, paymentMethod: 4, submit: 5},
        tmpDataLayerLimit: 30,
        minimumObservationTimeMs: 3e3,
        minimumObservationTimeSpanMs: 100
    }
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.getProductServices = function (e) {
            const n = t(e);
            if (0 === n.length) return;
            const i = n.attr("data-url"),
                a = t("#CitySelect").val() || t("html").attr("data-selectedcityid") || o.defaultCityId;
            t.ajax({
                method: o.queryTypes.GET, url: i, data: {cityId: a}, success: function (e) {
                    0 === e.length ? n.empty() : (n.html(e), function (e) {
                        t(document).on("mouseover", ".js-tooltip-service-group", function () {
                            const e = t(this), n = e.parents(".add-services"),
                                o = e.parents(".add-services__categories_item"),
                                i = `.${e.attr("data-type")} .service-tooltips`, a = n.find(i).html();
                            (0, r.initInfoTooltips)(o, a)
                        }), t(document).on("mouseover", ".js-tooltip-service-type", function () {
                            const e = t(this), n = n.attr("data-text");
                            e.attr("data-text").length && (0, r.initInfoTooltips)(e, n)
                        }), function (e) {
                            e.on("click", ".add-services__categories_item", function (n) {
                                const o = t(this), r = o.parents(".add-services");
                                if (o.hasClass("add-services__categories_item-active")) return;
                                e.find(".add-services__categories_item").removeClass("add-services__categories_item-active"), o.addClass("add-services__categories_item-active");
                                const i = o.attr("data-service-group"), a = `.add-services__wrapper.${i}`;
                                null != r && (r.find(".add-services__wrapper").addClass("hidden"), r.find(a).removeClass("hidden"))
                            })
                        }(e), function (e) {
                            e.on("change", ".add-services__item_select", function (e) {
                                const n = t(this), r = n.find("option:selected"), i = n.parents(".add-services__item"),
                                    a = i.find(".additional-service-data-container"), s = r.attr("data-net"),
                                    c = n.attr("data-delivery-network-id"), l = n.attr("data-pickup-network-id");
                                i.find(".add-services__item_price").text(r.attr("data-price") + " в‚ґ"), i.find(".add-services__item_btn b").attr("data-serviceid", n.val()), a.attr("data-title", r.attr("data-title")), a.attr("data-code", r.attr("data-code")), a.attr("data-price", r.attr("data-price")), a.attr("data-classid", r.attr("data-classid")), r.attr("data-is-on-cart").toLowerCase() !== o.stringTrue || i.hasClass("add-services__item-added") ? i.removeClass("add-services__item-added") : i.addClass("add-services__item-added"), i.find(".add-services__informer.add-services__informer-yellow p").addClass("hidden"), s === l ? i.find(".add-services__informer-yellow p.only_on_store").removeClass("hidden") : s === c && i.find(".add-services__informer-yellow p.only_on_delivery").removeClass("hidden")
                            })
                        }(e), e.off("click", ".add-services__wrapper a.button-link"), e.on("click", ".add-services__wrapper a.button-link", function () {
                            const e = t(this), n = e.parents(".add-services__wrapper");
                            e.find("label").toggleClass("button-link_hide-text"), e.find(".icon").toggleClass("icon-chevron-up"), e.find(".icon").toggleClass("icon-chevron-down"), n.find(".add-services__item:gt(1)").toggle("fast")
                        }), e.find(".add-services__wrapper a.button-link").click(), t(".add-services__item_select").each(function () {
                            const e = t(this), n = e.parent(".add-services__item_type");
                            e.select2({width: "100%", minimumResultsForSearch: -1, dropdownParent: n})
                        })
                    }(n))
                }
            })
        }, e.addService = function (e) {
            return new Promise((n, r) => {
                const s = e.attr("data-url");
                let c, l, u, d = null;
                if (e.hasClass("has-select")) {
                    let t = e.parents(".add-services__item ").find(".add-services__item_select"),
                        n = t.find("option:checked");
                    n.attr("data-is-on-cart", "True"), c = t.val(), l = n.attr("data-objectid"), u = n.attr("data-classId"), 1 == e.attr("data-software-service") && (d = {
                        softwareObjectId: c,
                        softwareClassId: n.attr("data-service-classid")
                    })
                } else c = e.attr("data-serviceid"), l = e.attr("data-objectid"), u = e.attr("data-classId");
                let p = {objectId: l, classId: u, serviceId: c, softwareService: d};
                t.ajax({
                    method: o.queryTypes.PUT, url: s, data: p, success: function (o) {
                        let r = e.closest(".add-services__item_btn").siblings(".additional-service-data-container").first(),
                            s = new CustomEvent("onAddServiceEvent", {detail: {serviceDataContainer: r}});
                        if (document.dispatchEvent(s), e.hasClass("has-select")) {
                            let t = e.parents(".add-services__item ").find(".add-services__item_select"),
                                n = t.find("option:checked");
                            n.attr("data-orderitemid", o)
                        } else {
                            const t = e.siblings(".remove-service");
                            t.attr("data-orderitemid", o)
                        }
                        (t("#pdp-services").length > 0 || t(".pdp-services").length > 0) && t(".shop-cart").length > 0 ? (0, i.reloadCartItems)(null, !0).done(function () {
                            return n()
                        }) : (0, a.updateCartItems)(!0).done(function () {
                            return n()
                        })
                    }
                })
            })
        }, e.removeService = function (e) {
            return new Promise((n, r) => {
                const s = e.attr("data-url");
                let c, l;
                if (e.hasClass("has-select")) {
                    let t = e.parents(".add-services__item ").find(".add-services__item_select"),
                        n = t.find("option:checked");
                    n.attr("data-is-on-cart", "False"), c = t.val(), l = n.attr("data-orderitemid")
                } else {
                    let n = t("select.add-services__item_select");
                    c = e.attr("data-serviceid"), l = e.attr("data-orderitemid");
                    let o = n.find(`option[data-orderitemid=${l}]`);
                    o.attr("data-is-on-cart", "False")
                }
                return t.ajax({
                    method: o.queryTypes.GET, url: `${s}?orderItemId=${l}`, success: function () {
                        if (e.closest("#cartTooltip").length > 0) {
                            let t = new CustomEvent("onRemoveProductFromCartEvent", {
                                detail: {
                                    htmlElement: e.closest(".additional-services"),
                                    buttonType: "Remove from Cart",
                                    buttonBelongsToPDP: null,
                                    quantity: null
                                }
                            });
                            document.dispatchEvent(t)
                        } else if (e.closest(".add-services__item_btn").length > 0) {
                            let t = e.closest(".add-services__item_btn").siblings(".additional-service-data-container").first(),
                                n = new CustomEvent("onRemoveProductFromCartEvent", {
                                    detail: {
                                        htmlElement: t,
                                        buttonType: "Remove from Cart",
                                        buttonBelongsToPDP: null,
                                        quantity: null
                                    }
                                });
                            document.dispatchEvent(n)
                        }
                        const o = t(`.buy-service[data-serviceid="${c}"`);
                        o.parents(".add-services__item").removeClass("add-services__item-added"), t(".shop-cart").length > 0 ? (0, i.reloadCartItems)(null, !0).done(function () {
                            return n()
                        }) : (0, a.updateCartItems)(!0).done(function () {
                            return n()
                        })
                    }
                })
            })
        };
        var o = n(1), r = n(14), i = n(7), a = n(2)
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.initTooltip = function (e) {
            let n = 0;
            t(document).on("click", ".js-toggle-tooltip", function (e) {
                n = 0;
                let o = t(this);
                o.hasClass("header-basket__icon") && o.hasClass("tooltip-link_open") ? c() : l(this, e)
            }), t(document).on("click", "#tooltip-maska", function () {
                c()
            }), t(document).on("click", "#cartTooltipClose", function () {
                c()
            }), t(document).on("scroll", function () {
                t(".container").hasClass("firstInBasket") ? t(".container.firstInBasket").removeClass("firstInBasket") : t(".tooltip-link_open") && n > 1 && (n = 0, c()), n++
            })
        }, e.toggleTooltip = l, e.initInfoTooltips = function (e, n) {
            let a = e.closest("[title]");
            e.attr("data-is-initialized") !== o.stringTrue && (e.on("mouseover", function (t) {
                a.attr("data-title-backup", a.attr("title")), a.attr("title", null)
            }), e.on("mouseleave", function (e) {
                a.attr("title", a.attr("data-title-backup")), t(".tooltip-info").remove()
            }), (0, i.default)() && t("body").on("touchstart", function () {
                t(".tooltip-info").remove()
            }));
            let s = new r.default(e, {
                container: document.body,
                html: !0,
                placement: "top",
                title: n,
                delay: {show: 2e3, hide: 100},
                trigger: (0, i.default)() ? "click focus" : "hover focus",
                closeOnClickOutside: !0,
                template: '<div class="tooltip-info" role="tooltip"><div class="tooltip-inner"></div></div>'
            });
            !s._isOpen && e.is(":hover") && s.show();
            e.attr("data-is-initialized", "true")
        };
        var o = n(1), r = a(n(15)), i = a(n(3));

        function a(t) {
            return t && t.__esModule ? t : {default: t}
        }

        const s = t("#tooltip-maska");

        function c(e) {
            const n = t(".js-toggle-tooltip");
            t(".tooltip.tooltip_active").each(function () {
                t(this).removeClass("tooltip_active")
            }), n.removeClass("tooltip-link_open"), n.hasClass("show") && n.removeClass("show"), s.hide()
        }

        function l(e, n) {
            let r = t(e);
            if (r.parents(".header-basket").length > 0) {
                if (0 === t(".header-basket").attr("data-dont-reload")) return void t(document).trigger("showCartPopup");
                t(".header-basket").attr("data-dont-reload", 0)
            }
            const i = r.attr("data-is-favorite") === o.stringTrue, a = !i,
                c = i ? r.find(".tooltip") : r.parent().find(".tooltip");
            c.hasClass("tooltip_active") && (function (e, n) {
                return !!n && !!((e = t(e)).is(t(".tooltip__region-head input")) || e.is(t(".tooltip__region-head i")) || e.hasClass("popover-selected-city") || e.hasClass("tooltip__region-list") || e.hasClass("tooltip__region-head") || e.hasClass("tooltip") || e.closest(".tooltip").lenght > 0)
            }(n.target, a) || function (e, n, o) {
                if (!n) return !1;
                const r = t(e.target);
                return !!(r.is(t(o)) || r.closest(o).length > 0) && (r.hasClass("header-tooltip__cards-item__close") || e.stopPropagation(), !0)
            }(n, i, "#favorite-header-popup")) || (t(".tooltip").removeClass("tooltip_active"), s.hide(), "hidden" === c.css("visibility") && (c.addClass("tooltip_active"), r.addClass("tooltip-link_open"), s.show()))
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(16);
    var r = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }, i = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e
        }
    }(), a = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, s = {
        container: !1,
        delay: 0,
        html: !1,
        placement: "top",
        title: "",
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        offset: 0,
        arrowSelector: ".tooltip-arrow, .tooltip__arrow",
        innerSelector: ".tooltip-inner, .tooltip__inner"
    }, c = function () {
        function t(e, n) {
            r(this, t), l.call(this), n = a({}, s, n), e.jquery && (e = e[0]), this.reference = e, this.options = n;
            var o = "string" == typeof n.trigger ? n.trigger.split(" ").filter(function (t) {
                return -1 !== ["click", "hover", "focus"].indexOf(t)
            }) : [];
            this._isOpen = !1, this._popperOptions = {}, this._setEventListeners(e, o, n)
        }

        return i(t, [{
            key: "_create", value: function (t, e, n, o) {
                var r = window.document.createElement("div");
                r.innerHTML = e.trim();
                var i = r.childNodes[0];
                i.id = "tooltip_" + Math.random().toString(36).substr(2, 10), i.setAttribute("aria-hidden", "false");
                var a = r.querySelector(this.options.innerSelector);
                return this._addTitleContent(t, n, o, a), i
            }
        }, {
            key: "_addTitleContent", value: function (t, e, n, o) {
                var r;
                1 === e.nodeType || 11 === e.nodeType ? n && o.appendChild(e) : (r = e) && "[object Function]" === {}.toString.call(r) ? this._addTitleContent(t, e.call(t), n, o) : n ? o.innerHTML = e : o.textContent = e
            }
        }, {
            key: "_show", value: function (t, e) {
                if (this._isOpen && !this._isOpening) return this;
                if (this._isOpen = !0, this._tooltipNode) return this._tooltipNode.style.visibility = "visible", this._tooltipNode.setAttribute("aria-hidden", "false"), this.popperInstance.update(), this;
                var n = t.getAttribute("title") || e.title;
                if (!n) return this;
                var r = this._create(t, e.template, n, e.html);
                t.setAttribute("aria-describedby", r.id);
                var i = this._findContainer(e.container, t);
                return this._append(r, i), this._popperOptions = a({}, e.popperOptions, {placement: e.placement}), this._popperOptions.modifiers = a({}, this._popperOptions.modifiers, {
                    arrow: a({}, this._popperOptions.modifiers && this._popperOptions.modifiers.arrow, {element: e.arrowSelector}),
                    offset: a({}, this._popperOptions.modifiers && this._popperOptions.modifiers.offset, {offset: e.offset || this._popperOptions.modifiers && this._popperOptions.modifiers.offset && this._popperOptions.modifiers.offset.offset || e.offset})
                }), e.boundariesElement && (this._popperOptions.modifiers.preventOverflow = {boundariesElement: e.boundariesElement}), this.popperInstance = new o.a(t, r, this._popperOptions), this._tooltipNode = r, this
            }
        }, {
            key: "_hide", value: function () {
                return this._isOpen ? (this._isOpen = !1, this._tooltipNode.style.visibility = "hidden", this._tooltipNode.setAttribute("aria-hidden", "true"), this) : this
            }
        }, {
            key: "_dispose", value: function () {
                var t = this;
                return this._events.forEach(function (e) {
                    var n = e.func, o = e.event;
                    t.reference.removeEventListener(o, n)
                }), this._events = [], this._tooltipNode && (this._hide(), this.popperInstance.destroy(), this.popperInstance.options.removeOnDestroy || (this._tooltipNode.parentNode.removeChild(this._tooltipNode), this._tooltipNode = null)), this
            }
        }, {
            key: "_findContainer", value: function (t, e) {
                return "string" == typeof t ? t = window.document.querySelector(t) : !1 === t && (t = e.parentNode), t
            }
        }, {
            key: "_append", value: function (t, e) {
                e.appendChild(t)
            }
        }, {
            key: "_setEventListeners", value: function (t, e, n) {
                var o = this, r = [], i = [];
                e.forEach(function (t) {
                    switch (t) {
                        case"hover":
                            r.push("mouseenter"), i.push("mouseleave");
                            break;
                        case"focus":
                            r.push("focus"), i.push("blur");
                            break;
                        case"click":
                            r.push("click"), i.push("click")
                    }
                }), r.forEach(function (e) {
                    var r = function (e) {
                        !0 !== o._isOpening && (e.usedByTooltip = !0, o._scheduleShow(t, n.delay, n, e))
                    };
                    o._events.push({event: e, func: r}), t.addEventListener(e, r)
                }), i.forEach(function (e) {
                    var r = function (e) {
                        !0 !== e.usedByTooltip && o._scheduleHide(t, n.delay, n, e)
                    };
                    o._events.push({
                        event: e,
                        func: r
                    }), t.addEventListener(e, r), "click" === e && n.closeOnClickOutside && document.addEventListener("mousedown", function (e) {
                        if (o._isOpening) {
                            var n = o.popperInstance.popper;
                            t.contains(e.target) || n.contains(e.target) || r(e)
                        }
                    }, !0)
                })
            }
        }, {
            key: "_scheduleShow", value: function (t, e, n) {
                var o = this;
                this._isOpening = !0;
                var r = e && e.show || e || 0;
                this._showTimeout = window.setTimeout(function () {
                    return o._show(t, n)
                }, r)
            }
        }, {
            key: "_scheduleHide", value: function (t, e, n, o) {
                var r = this;
                this._isOpening = !1;
                var i = e && e.hide || e || 0;
                window.clearTimeout(this._showTimeout), window.setTimeout(function () {
                    if (!1 !== r._isOpen && document.body.contains(r._tooltipNode)) {
                        if ("mouseleave" === o.type) if (r._setTooltipNodeEvent(o, t, e, n)) return;
                        r._hide(t, n)
                    }
                }, i)
            }
        }, {
            key: "_updateTitleContent", value: function (t) {
                if (void 0 !== this._tooltipNode) {
                    var e = this._tooltipNode.querySelector(this.options.innerSelector);
                    this._clearTitleContent(e, this.options.html, this.reference.getAttribute("title") || this.options.title), this._addTitleContent(this.reference, t, this.options.html, e), this.options.title = t, this.popperInstance.update()
                } else void 0 !== this.options.title && (this.options.title = t)
            }
        }, {
            key: "_clearTitleContent", value: function (t, e, n) {
                1 === n.nodeType || 11 === n.nodeType ? e && t.removeChild(n) : e ? t.innerHTML = "" : t.textContent = ""
            }
        }]), t
    }(), l = function () {
        var t = this;
        this.show = function () {
            return t._show(t.reference, t.options)
        }, this.hide = function () {
            return t._hide()
        }, this.dispose = function () {
            return t._dispose()
        }, this.toggle = function () {
            return t._isOpen ? t.hide() : t.show()
        }, this.updateTitleContent = function (e) {
            return t._updateTitleContent(e)
        }, this._events = [], this._setTooltipNodeEvent = function (e, n, o, r) {
            var i = e.relatedreference || e.toElement || e.relatedTarget;
            return !!t._tooltipNode.contains(i) && (t._tooltipNode.addEventListener(e.type, function o(i) {
                var a = i.relatedreference || i.toElement || i.relatedTarget;
                t._tooltipNode.removeEventListener(e.type, o), n.contains(a) || t._scheduleHide(n, r.delay, r, i)
            }), !0)
        }
    };
    e.default = c
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            o = function () {
                for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                return 0
            }();
        var r = n && window.Promise ? function (t) {
            var e = !1;
            return function () {
                e || (e = !0, window.Promise.resolve().then(function () {
                    e = !1, t()
                }))
            }
        } : function (t) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout(function () {
                    e = !1, t()
                }, o))
            }
        };

        function i(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }

        function a(t, e) {
            if (1 !== t.nodeType) return [];
            var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
            return e ? n[e] : n
        }

        function s(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }

        function c(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case"HTML":
                case"BODY":
                    return t.ownerDocument.body;
                case"#document":
                    return t.body
            }
            var e = a(t), n = e.overflow, o = e.overflowX, r = e.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + o) ? t : c(s(t))
        }

        function l(t) {
            return t && t.referenceNode ? t.referenceNode : t
        }

        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
            d = n && /MSIE 10/.test(navigator.userAgent);

        function p(t) {
            return 11 === t ? u : 10 === t ? d : u || d
        }

        function f(t) {
            if (!t) return document.documentElement;
            for (var e = p(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
            var o = n && n.nodeName;
            return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? f(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
        }

        function h(t) {
            return null !== t.parentNode ? h(t.parentNode) : t
        }

        function m(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, o = n ? t : e, r = n ? e : t,
                i = document.createRange();
            i.setStart(o, 0), i.setEnd(r, 0);
            var a, s, c = i.commonAncestorContainer;
            if (t !== c && e !== c || o.contains(r)) return "BODY" === (s = (a = c).nodeName) || "HTML" !== s && f(a.firstElementChild) !== a ? f(c) : c;
            var l = h(t);
            return l.host ? m(l.host, e) : m(t, h(e).host)
        }

        function g(t) {
            var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = t.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var o = t.ownerDocument.documentElement;
                return (t.ownerDocument.scrollingElement || o)[e]
            }
            return t[e]
        }

        function v(t, e) {
            var n = "x" === e ? "Left" : "Top", o = "Left" === n ? "Right" : "Bottom";
            return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + o + "Width"])
        }

        function y(t, e, n, o) {
            return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], p(10) ? parseInt(n["offset" + t]) + parseInt(o["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
        }

        function b(t) {
            var e = t.body, n = t.documentElement, o = p(10) && getComputedStyle(n);
            return {height: y("Height", e, n, o), width: y("Width", e, n, o)}
        }

        var _ = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, C = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            return function (e, n, o) {
                return n && t(e.prototype, n), o && t(e, o), e
            }
        }(), w = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }, x = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        };

        function k(t) {
            return x({}, t, {right: t.left + t.width, bottom: t.top + t.height})
        }

        function T(t) {
            var e = {};
            try {
                if (p(10)) {
                    e = t.getBoundingClientRect();
                    var n = g(t, "top"), o = g(t, "left");
                    e.top += n, e.left += o, e.bottom += n, e.right += o
                } else e = t.getBoundingClientRect()
            } catch (t) {
            }
            var r = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top},
                i = "HTML" === t.nodeName ? b(t.ownerDocument) : {}, s = i.width || t.clientWidth || r.width,
                c = i.height || t.clientHeight || r.height, l = t.offsetWidth - s, u = t.offsetHeight - c;
            if (l || u) {
                var d = a(t);
                l -= v(d, "x"), u -= v(d, "y"), r.width -= l, r.height -= u
            }
            return k(r)
        }

        function E(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = p(10),
                r = "HTML" === e.nodeName, i = T(t), s = T(e), l = c(t), u = a(e), d = parseFloat(u.borderTopWidth),
                f = parseFloat(u.borderLeftWidth);
            n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
            var h = k({top: i.top - s.top - d, left: i.left - s.left - f, width: i.width, height: i.height});
            if (h.marginTop = 0, h.marginLeft = 0, !o && r) {
                var m = parseFloat(u.marginTop), v = parseFloat(u.marginLeft);
                h.top -= d - m, h.bottom -= d - m, h.left -= f - v, h.right -= f - v, h.marginTop = m, h.marginLeft = v
            }
            return (o && !n ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (h = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = g(e, "top"),
                    r = g(e, "left"), i = n ? -1 : 1;
                return t.top += o * i, t.bottom += o * i, t.left += r * i, t.right += r * i, t
            }(h, e)), h
        }

        function S(t) {
            if (!t || !t.parentElement || p()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === a(e, "transform");) e = e.parentElement;
            return e || document.documentElement
        }

        function O(t, e, n, o) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], i = {top: 0, left: 0},
                u = r ? S(t) : m(t, l(e));
            if ("viewport" === o) i = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement, o = E(t, n),
                    r = Math.max(n.clientWidth, window.innerWidth || 0),
                    i = Math.max(n.clientHeight, window.innerHeight || 0), a = e ? 0 : g(n), s = e ? 0 : g(n, "left");
                return k({top: a - o.top + o.marginTop, left: s - o.left + o.marginLeft, width: r, height: i})
            }(u, r); else {
                var d = void 0;
                "scrollParent" === o ? "BODY" === (d = c(s(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === o ? t.ownerDocument.documentElement : o;
                var p = E(d, u, r);
                if ("HTML" !== d.nodeName || function t(e) {
                    var n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === a(e, "position")) return !0;
                    var o = s(e);
                    return !!o && t(o)
                }(u)) i = p; else {
                    var f = b(t.ownerDocument), h = f.height, v = f.width;
                    i.top += p.top - p.marginTop, i.bottom = h + p.top, i.left += p.left - p.marginLeft, i.right = v + p.left
                }
            }
            var y = "number" == typeof (n = n || 0);
            return i.left += y ? n : n.left || 0, i.top += y ? n : n.top || 0, i.right -= y ? n : n.right || 0, i.bottom -= y ? n : n.bottom || 0, i
        }

        function D(t, e, n, o, r) {
            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto")) return t;
            var a = O(n, o, i, r), s = {
                top: {width: a.width, height: e.top - a.top},
                right: {width: a.right - e.right, height: a.height},
                bottom: {width: a.width, height: a.bottom - e.bottom},
                left: {width: e.left - a.left, height: a.height}
            }, c = Object.keys(s).map(function (t) {
                return x({key: t}, s[t], {area: (e = s[t], e.width * e.height)});
                var e
            }).sort(function (t, e) {
                return e.area - t.area
            }), l = c.filter(function (t) {
                var e = t.width, o = t.height;
                return e >= n.clientWidth && o >= n.clientHeight
            }), u = l.length > 0 ? l[0].key : c[0].key, d = t.split("-")[1];
            return u + (d ? "-" + d : "")
        }

        function P(t, e, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return E(n, o ? S(e) : m(e, l(n)), o)
        }

        function I(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t),
                n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                o = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return {width: t.offsetWidth + o, height: t.offsetHeight + n}
        }

        function L(t) {
            var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return t.replace(/left|right|bottom|top/g, function (t) {
                return e[t]
            })
        }

        function A(t, e, n) {
            n = n.split("-")[0];
            var o = I(t), r = {width: o.width, height: o.height}, i = -1 !== ["right", "left"].indexOf(n),
                a = i ? "top" : "left", s = i ? "left" : "top", c = i ? "height" : "width", l = i ? "width" : "height";
            return r[a] = e[a] + e[c] / 2 - o[c] / 2, r[s] = n === s ? e[s] - o[l] : e[L(s)], r
        }

        function j(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }

        function N(t, e, n) {
            return (void 0 === n ? t : t.slice(0, function (t, e, n) {
                if (Array.prototype.findIndex) return t.findIndex(function (t) {
                    return t[e] === n
                });
                var o = j(t, function (t) {
                    return t[e] === n
                });
                return t.indexOf(o)
            }(t, "name", n))).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t.function || t.fn;
                t.enabled && i(n) && (e.offsets.popper = k(e.offsets.popper), e.offsets.reference = k(e.offsets.reference), e = n(e, t))
            }), e
        }

        function M(t, e) {
            return t.some(function (t) {
                var n = t.name;
                return t.enabled && n === e
            })
        }

        function q(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), o = 0; o < e.length; o++) {
                var r = e[o], i = r ? "" + r + n : t;
                if (void 0 !== document.body.style[i]) return i
            }
            return null
        }

        function R(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }

        function $(t, e, n, o) {
            n.updateBound = o, R(t).addEventListener("resize", n.updateBound, {passive: !0});
            var r = c(t);
            return function t(e, n, o, r) {
                var i = "BODY" === e.nodeName, a = i ? e.ownerDocument.defaultView : e;
                a.addEventListener(n, o, {passive: !0}), i || t(c(a.parentNode), n, o, r), r.push(a)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }

        function H() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, R(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
                t.removeEventListener("scroll", e.updateBound)
            }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function B(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }

        function F(t, e) {
            Object.keys(e).forEach(function (n) {
                var o = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && B(e[n]) && (o = "px"), t.style[n] = e[n] + o
            })
        }

        var W = n && /Firefox/i.test(navigator.userAgent);

        function U(t, e, n) {
            var o = j(t, function (t) {
                return t.name === e
            }), r = !!o && t.some(function (t) {
                return t.name === n && t.enabled && t.order < o.order
            });
            if (!r) {
                var i = "`" + e + "`", a = "`" + n + "`";
                console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
            }
            return r
        }

        var G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            z = G.slice(3);

        function V(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = z.indexOf(t),
                o = z.slice(n + 1).concat(z.slice(0, n));
            return e ? o.reverse() : o
        }

        var K = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

        function X(t, e, n, o) {
            var r = [0, 0], i = -1 !== ["right", "left"].indexOf(o), a = t.split(/(\+|\-)/).map(function (t) {
                return t.trim()
            }), s = a.indexOf(j(a, function (t) {
                return -1 !== t.search(/,|\s/)
            }));
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var c = /\s*,\s*|\s+/,
                l = -1 !== s ? [a.slice(0, s).concat([a[s].split(c)[0]]), [a[s].split(c)[1]].concat(a.slice(s + 1))] : [a];
            return (l = l.map(function (t, o) {
                var r = (1 === o ? !i : i) ? "height" : "width", a = !1;
                return t.reduce(function (t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
                }, []).map(function (t) {
                    return function (t, e, n, o) {
                        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), i = +r[1], a = r[2];
                        if (!i) return t;
                        if (0 === a.indexOf("%")) {
                            var s = void 0;
                            switch (a) {
                                case"%p":
                                    s = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    s = o
                            }
                            return k(s)[e] / 100 * i
                        }
                        if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
                        return i
                    }(t, r, e, n)
                })
            })).forEach(function (t, e) {
                t.forEach(function (n, o) {
                    B(n) && (r[e] += n * ("-" === t[o - 1] ? -1 : 1))
                })
            }), r
        }

        var Y = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (t) {
                        var e = t.placement, n = e.split("-")[0], o = e.split("-")[1];
                        if (o) {
                            var r = t.offsets, i = r.reference, a = r.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                                c = s ? "left" : "top", l = s ? "width" : "height",
                                u = {start: w({}, c, i[c]), end: w({}, c, i[c] + i[l] - a[l])};
                            t.offsets.popper = x({}, a, u[o])
                        }
                        return t
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (t, e) {
                        var n = e.offset, o = t.placement, r = t.offsets, i = r.popper, a = r.reference,
                            s = o.split("-")[0], c = void 0;
                        return c = B(+n) ? [+n, 0] : X(n, i, a, s), "left" === s ? (i.top += c[0], i.left -= c[1]) : "right" === s ? (i.top += c[0], i.left += c[1]) : "top" === s ? (i.left += c[0], i.top -= c[1]) : "bottom" === s && (i.left += c[0], i.top += c[1]), t.popper = i, t
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (t, e) {
                        var n = e.boundariesElement || f(t.instance.popper);
                        t.instance.reference === n && (n = f(n));
                        var o = q("transform"), r = t.instance.popper.style, i = r.top, a = r.left, s = r[o];
                        r.top = "", r.left = "", r[o] = "";
                        var c = O(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        r.top = i, r.left = a, r[o] = s, e.boundaries = c;
                        var l = e.priority, u = t.offsets.popper, d = {
                            primary: function (t) {
                                var n = u[t];
                                return u[t] < c[t] && !e.escapeWithReference && (n = Math.max(u[t], c[t])), w({}, t, n)
                            }, secondary: function (t) {
                                var n = "right" === t ? "left" : "top", o = u[n];
                                return u[t] > c[t] && !e.escapeWithReference && (o = Math.min(u[n], c[t] - ("right" === t ? u.width : u.height))), w({}, n, o)
                            }
                        };
                        return l.forEach(function (t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            u = x({}, u, d[e](t))
                        }), t.offsets.popper = u, t
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (t) {
                        var e = t.offsets, n = e.popper, o = e.reference, r = t.placement.split("-")[0], i = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r), s = a ? "right" : "bottom", c = a ? "left" : "top",
                            l = a ? "width" : "height";
                        return n[s] < i(o[c]) && (t.offsets.popper[c] = i(o[c]) - n[l]), n[c] > i(o[s]) && (t.offsets.popper[c] = i(o[s])), t
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (t, e) {
                        var n;
                        if (!U(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var o = e.element;
                        if ("string" == typeof o) {
                            if (!(o = t.instance.popper.querySelector(o))) return t
                        } else if (!t.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0], i = t.offsets, s = i.popper, c = i.reference,
                            l = -1 !== ["left", "right"].indexOf(r), u = l ? "height" : "width", d = l ? "Top" : "Left",
                            p = d.toLowerCase(), f = l ? "left" : "top", h = l ? "bottom" : "right", m = I(o)[u];
                        c[h] - m < s[p] && (t.offsets.popper[p] -= s[p] - (c[h] - m)), c[p] + m > s[h] && (t.offsets.popper[p] += c[p] + m - s[h]), t.offsets.popper = k(t.offsets.popper);
                        var g = c[p] + c[u] / 2 - m / 2, v = a(t.instance.popper), y = parseFloat(v["margin" + d]),
                            b = parseFloat(v["border" + d + "Width"]), _ = g - t.offsets.popper[p] - y - b;
                        return _ = Math.max(Math.min(s[u] - m, _), 0), t.arrowElement = o, t.offsets.arrow = (w(n = {}, p, Math.round(_)), w(n, f, ""), n), t
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (t, e) {
                        if (M(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = O(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            o = t.placement.split("-")[0], r = L(o), i = t.placement.split("-")[1] || "", a = [];
                        switch (e.behavior) {
                            case K.FLIP:
                                a = [o, r];
                                break;
                            case K.CLOCKWISE:
                                a = V(o);
                                break;
                            case K.COUNTERCLOCKWISE:
                                a = V(o, !0);
                                break;
                            default:
                                a = e.behavior
                        }
                        return a.forEach(function (s, c) {
                            if (o !== s || a.length === c + 1) return t;
                            o = t.placement.split("-")[0], r = L(o);
                            var l = t.offsets.popper, u = t.offsets.reference, d = Math.floor,
                                p = "left" === o && d(l.right) > d(u.left) || "right" === o && d(l.left) < d(u.right) || "top" === o && d(l.bottom) > d(u.top) || "bottom" === o && d(l.top) < d(u.bottom),
                                f = d(l.left) < d(n.left), h = d(l.right) > d(n.right), m = d(l.top) < d(n.top),
                                g = d(l.bottom) > d(n.bottom),
                                v = "left" === o && f || "right" === o && h || "top" === o && m || "bottom" === o && g,
                                y = -1 !== ["top", "bottom"].indexOf(o),
                                b = !!e.flipVariations && (y && "start" === i && f || y && "end" === i && h || !y && "start" === i && m || !y && "end" === i && g),
                                _ = !!e.flipVariationsByContent && (y && "start" === i && h || y && "end" === i && f || !y && "start" === i && g || !y && "end" === i && m),
                                C = b || _;
                            (p || v || C) && (t.flipped = !0, (p || v) && (o = a[c + 1]), C && (i = function (t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(i)), t.placement = o + (i ? "-" + i : ""), t.offsets.popper = x({}, t.offsets.popper, A(t.instance.popper, t.offsets.reference, t.placement)), t = N(t.instance.modifiers, t, "flip"))
                        }), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                }, inner: {
                    order: 700, enabled: !1, fn: function (t) {
                        var e = t.placement, n = e.split("-")[0], o = t.offsets, r = o.popper, i = o.reference,
                            a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = i[n] - (s ? r[a ? "width" : "height"] : 0), t.placement = L(e), t.offsets.popper = k(r), t
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (t) {
                        if (!U(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference, n = j(t.instance.modifiers, function (t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (t, e) {
                        var n = e.x, o = e.y, r = t.offsets.popper, i = j(t.instance.modifiers, function (t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                        void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== i ? i : e.gpuAcceleration, s = f(t.instance.popper), c = T(s),
                            l = {position: r.position}, u = function (t, e) {
                                var n = t.offsets, o = n.popper, r = n.reference, i = Math.round, a = Math.floor,
                                    s = function (t) {
                                        return t
                                    }, c = i(r.width), l = i(o.width), u = -1 !== ["left", "right"].indexOf(t.placement),
                                    d = -1 !== t.placement.indexOf("-"), p = e ? u || d || c % 2 == l % 2 ? i : a : s,
                                    f = e ? i : s;
                                return {
                                    left: p(c % 2 == 1 && l % 2 == 1 && !d && e ? o.left - 1 : o.left),
                                    top: f(o.top),
                                    bottom: f(o.bottom),
                                    right: p(o.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !W), d = "bottom" === n ? "top" : "bottom",
                            p = "right" === o ? "left" : "right", h = q("transform"), m = void 0, g = void 0;
                        if (g = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + u.bottom : -c.height + u.bottom : u.top, m = "right" === p ? "HTML" === s.nodeName ? -s.clientWidth + u.right : -c.width + u.right : u.left, a && h) l[h] = "translate3d(" + m + "px, " + g + "px, 0)", l[d] = 0, l[p] = 0, l.willChange = "transform"; else {
                            var v = "bottom" === d ? -1 : 1, y = "right" === p ? -1 : 1;
                            l[d] = g * v, l[p] = m * y, l.willChange = d + ", " + p
                        }
                        var b = {"x-placement": t.placement};
                        return t.attributes = x({}, b, t.attributes), t.styles = x({}, l, t.styles), t.arrowStyles = x({}, t.offsets.arrow, t.arrowStyles), t
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (t) {
                        var e, n;
                        return F(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), t
                    }, onLoad: function (t, e, n, o, r) {
                        var i = P(r, e, t, n.positionFixed),
                            a = D(n.placement, i, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", a), F(e, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, Q = function () {
            function t(e, n) {
                var o = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                _(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(o.update)
                }, this.update = r(this.update.bind(this)), this.options = x({}, t.Defaults, a), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(x({}, t.Defaults.modifiers, a.modifiers)).forEach(function (e) {
                    o.options.modifiers[e] = x({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                    return x({name: t}, o.options.modifiers[t])
                }).sort(function (t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && i(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }

            return C(t, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = P(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = D(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = A(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = N(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return H.call(this)
                }
            }]), t
        }();
        Q.Utils = ("undefined" != typeof window ? window : t).PopperUtils, Q.placements = G, Q.Defaults = Y, e.a = Q
    }).call(e, n(17))
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.defaultCountVisibleOptions = void 0, e.initAutoHideProperties = function (e = !1, n = !1, r = [], i = !1) {
            s();
            const a = r && Boolean(r.length), c = i && 0 == t(".listing-filter .form-checkbox input:checked").length;
            t(".listing__sidebar-col div.js-toggle-listing-filter-item").each(function (i) {
                if (c) (0, o.toggleCollapseGroup)(this); else {
                    if (a && r.indexOf(this.id) >= 0) return !0;
                    n ? (e || i > 7) && (0, o.toggleCollapseGroup)(this, !0) : 0 == t(this).parent().find(".form-checkbox input:checked").length && (0, o.toggleCollapseGroup)(this, !0)
                }
            })
        }, e.initHideOwerflow = s, e.initToggleCollapseGroups = function () {
            t(document).on("click", ".js-toggle-listing-filter-item", function () {
                (0, o.toggleCollapseGroup)(this)
            })
        }, e.initToggleShowCategoryItems = function () {
            t(".listing .listing__sidebar-col").on("click", ".more-item", function () {
                let e = t(this);
                const n = e.attr("data-count-visible-options") || a;
                if (e.hasClass("open")) {
                    const t = n - 1;
                    t >= 0 && (e.siblings(".listing__sidebar-body").find(`.listing__sidebar-field:not(.hidden):gt(${t})`).hide(), e.removeClass("open"))
                } else e.siblings(".listing__sidebar-body").find("a, .listing__sidebar-field").show(), e.addClass("open");
                e.children(".more__properties").toggle()
            })
        }, e.initMobileFilter = function () {
            t(document).on("click", ".js-toggle-filter", function () {
                const e = t(".js-listing-sidebar");
                e.is(":visible") ? (e.hide(), (0, r.clearAllBodyScrollLocks)()) : (e.show(), (0, r.disableBodyScroll)(e[0]), e.scrollTop(0))
            })
        }, e.closeMobileFilter = function () {
            let e = t(".js-listing-sidebar");
            e.is(":visible") && (e.hide(), (0, r.clearAllBodyScrollLocks)())
        }, e.showSidebarTagsBlock = function () {
            t(".listing__sidebar-col").has(".listing__sidebar-tags").show()
        }, e.hideSidebarTagsBlock = function () {
            t(".listing__sidebar-col").has(".listing__sidebar-tags").hide()
        }, e.initPreventDefaultAnchorLink = function () {
            t(".listing").on("click", ".listing__sidebar-body.property a", function (e) {
                "SPAN" !== e.target.nodeName && "A" !== e.target.nodeName || (t(this).find("input").attr("checked", !t(this).find("input").prop("checked")).trigger("change"), t(this).find(".brand, .amount").toggleClass("checked"))
            })
        }, e.executeOnMobileOnly = function (t) {
            i.WINDOW_W < i.MEDIA_FOR_DESKTOP_UP && t && "function" == typeof t && t()
        }, e.goTop = function (e) {
            let n = e || t(".listing");
            void 0 !== n && "" !== n && t("html, body").animate({scrollTop: t(n).offset().top - 70}, 500)
        }, e.validName = function (e, n, o = !1, r = !1) {
            let i = t(e), a = t(n);
            if (0 === i.length || 0 === a.length) return !1;
            const s = i.val().length >= 2;
            s ? (a.hide(), a.removeClass("active"), i.removeClass("active")) : o && (r || i.val().length > 0) && (a.show(), a.addClass("active"), i.addClass("active"));
            return s
        }, e.checkValidPhone = function (e, n, o = !1, r = !1) {
            let a = t(e), s = t(n);
            if (0 === a.length || 0 === s.length) return !1;
            if (12 === a.val().replace(/[^0-9]/g, i.stringEmpty).length) return a.removeClass("active"), s.removeClass("active"), s.hide(), !0;
            o && (r || a.val().length > 0) && (a.addClass("active"), s.addClass("active"), s.show());
            return !1
        }, e.getActiveKititem = c, e.getActiveGiftItem = l, e.kitInnerCarouselCallback = function (t) {
            const e = c(t.target);
            (0, o.setTextOnBuyButtonForKitToCart)(e), u(e)
        }, e.giftInnerCarouselCallback = function (t) {
            const e = l(t.target);
            (0, o.setTextOnBuyButtonForKitToCart)(e), u(e)
        }, e.updateBlockPrices = u;
        var o = n(2), r = n(5), i = n(1);
        const a = e.defaultCountVisibleOptions = 7;

        function s() {
            t.map(t(".listing__sidebar-body.property.overflow"), function (e) {
                const n = (t(e).siblings(".more-item").attr("data-count-visible-options") || a) - 1;
                n >= 0 && (t(e).find(`.listing__sidebar-field:not(.hidden):gt(${n})`).hide(), t(e).siblings(".more-item").children("a.opened").hide())
            })
        }

        function c(e) {
            return t(e).find(".owl-item.active > .together__item-carousel.kit-item")
        }

        function l(e) {
            return t(e || ".gift-inner-carousel").find(".owl-item.active > .together__item-carousel.gift-item")
        }

        function u(e) {
            let n = t(e);
            if (1 === parseInt(n.attr("data-is-gifts"))) return;
            const r = n.data("per-month"), a = parseInt(n.attr("data-packageprice")),
                s = parseInt(n.attr("data-oldpackageprice")), c = parseInt(n.attr("data-discount"));
            let l = n.closest(".js-toggle-body");
            l.find(".set-oldprice").text(`${s.toLocaleString(i.locale)}`), l.find(".set-price").text(`${a.toLocaleString(i.locale)} в‚ґ`), l.find(".set-discount").text(`-${c.toLocaleString(i.locale)}`);
            const u = n.attr("data-setid"), d = n.attr("data-objectid"), p = n.attr("data-objectclassid");
            l.find(".js-buy-in-credit-gifts").attr("data-set-id", u).attr("data-class-id", p).attr("data-object-id", d), r && r > 0 && l.find(".payment-months").text(`${Math.ceil(a / r).toLocaleString(i.locale)}`), (0, o.setTextOnBuyButtonForKitToCart)(n)
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function () {
            const e = t(".products-best");
            if (0 === e.length) return;
            (0, r.initCarousel)(a, t(e).find(".owl-carousel"), t(e).find(".products-best-right"), t(e).find(".products-best-left"), !1, !0, i.onScrollMobileCarouselItems, i.onCarouselItemsChanged)
        };
        var o = n(1), r = n(4), i = n(9);
        const a = {
            items: 3,
            margin: 1,
            autoHeight: !0,
            dots: !1,
            nav: !1,
            mouseDrag: !1,
            lazyLoad: !0,
            responsive: {[o.MEDIA_FOR_DESKTOP_UP]: {items: 3}, [o.MEDIA_FOR_BIG_DESKTOP]: {items: 4}}
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    e.default = (() => {
        let t = window.navigator.userAgent, e = t.indexOf("MSIE ");
        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
        if (t.indexOf("Trident/") > 0) {
            let e = t.indexOf("rv:");
            return parseInt(t.substring(e + 3, t.indexOf(".", e)), 10)
        }
        let n = t.indexOf("Edge/");
        return n > 0 && parseInt(t.substring(n + 5, t.indexOf(".", n)), 10)
    })
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var o, r = n(3), i = (o = r) && o.__esModule ? o : {default: o};

        function a() {
            t("body").addClass("mm-body--open"), t("#js-mobile-menu").addClass("active")
        }

        e.default = (() => {
            document.getElementById("js-mobile-menu") && ((0, i.default)() && t(".js-open-catalog-mb").on("click", function () {
                a(), setTimeout(function () {
                    t("[data-catalog-id=catalogMenu]").click()
                }, 100)
            }), t(".js-mmenu-open").on("click", function () {
                a()
            }), t(".js-mmenu-close, .mmenu-fader").on("click", function () {
                t("body").removeClass("mm-body--open"), t("#js-mobile-menu").removeClass("active")
            }), t(".mobile-menu span").on("click", function () {
                const e = t(this), n = e.attr("data-catalog-id"), o = t("#js-mobile-menu"), r = t(".category-title"),
                    i = e.text().trim(), a = e.parents("div").attr("id");
                o.find("div.mm--open").removeClass("mm--open"), o.removeClass("mm--main"), t(`#${n}`).addClass("mm--open"), r.attr("data-mm-title", i);
                let s = r.attr("data-back-id");
                s ? r.attr("data-back-id", [s, a].join(";")) : r.attr("data-back-id", a)
            }), t(".mobile-menu .category-title").on("click", function () {
                const e = t("#js-mobile-menu"), n = t(".js-main-mb"), o = t(".category-title"),
                    r = o.attr("data-back-id");
                if (e.find("ul.mm--open").removeClass("mm--open"), r) {
                    const e = r.split(";");
                    if (e.length > 0) {
                        const n = e[e.length - 1], r = t(`#${n}`), i = r.attr("data-title");
                        o.attr("data-mm-title", i), r.addClass("mm--open"), e.pop(), o.attr("data-back-id", e.join(";"))
                    }
                } else e.addClass("mm--main"), n.removeClass("mm--parent"), n.addClass("mm--open")
            }), t(".mobile-user-name").on("click", function () {
                const e = t(this), n = t("#js-mobile-menu"), o = t(".category-title"), r = t("#account-links");
                n.find("ul.mm--open").removeClass("mm--open"), n.removeClass("mm--main"), o.attr("data-mm-title", e.text()), r.addClass("mm--open")
            }))
        })
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0});
        e.default = ((e, n = !1, o = !1) => {
            const r = document.getElementById(e), i = t(`#${e}`), a = new Date(i.attr("data-end"));
            if (!r) return;
            let s = setInterval(function () {
                const t = (new Date).getTime(), e = a - t, l = Math.floor(e / 864e5), u = Math.floor(e % 864e5 / 36e5),
                    d = Math.floor(e % 36e5 / 6e4), p = Math.floor(e % 6e4 / 1e3);
                if (o) {
                    const t = `${c(l)}:${c(u)}:${c(d)}:${c(p)}`;
                    r.innerHTML = t
                } else {
                    const t = function (t, e) {
                        const n = t.attr("data-lang");
                        return void 0 === n ? "" : n.split(";")[e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]]
                    }(i, l), e = l > 0 ? `${l} <label> ${t}</label>` : "", o = `${n ? "" : c(u) + ":"}${c(d)}:${c(p)}`;
                    r.innerHTML = e + (0 === l ? o : "")
                }
                e >= 0 || (clearInterval(s), r.innerHTML = "EXPIRED")
            }, 1e3);

            function c(t) {
                return (t < 10 ? "0" : "") + t
            }
        })
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadOrShowPopup = e.hidePopup = e.showPopupSeo = e.showPopup = e.togglePopup = void 0, e.loadPopup = function (e, n, o) {
            return new Promise(a => {
                n && i(e), e.html(r.loader), e.attr("data-is-loaded", r.stringTrue), t.ajax({
                    type: r.queryTypes.GET,
                    url: o || e.attr("data-url"),
                    success: function (t) {
                        e.html(t).promise().done(() => {
                            a()
                        })
                    }
                })
            })
        };
        var o = n(5), r = n(1);
        e.togglePopup = (t => new Promise((e, n) => {
            if (t.hasClass("popup_active")) t.removeClass("popup_active popup_active-seo"), (0, o.clearAllBodyScrollLocks)(); else {
                a(), t.addClass("popup_active");
                const e = t.find(".smooth-scroll");
                (0, o.disableBodyScroll)(e.length ? e[0] : t[0])
            }
            return e()
        }));
        const i = e.showPopup = (t => {
            a(), t.addClass("popup_active");
            const e = t.find(".smooth-scroll");
            if ((0, o.disableBodyScroll)(e.length ? e[0] : t[0]), "auth-popup" == t.attr("id")) {
                const e = t.find("#auth-phone-input");
                e.length > 0 && setTimeout(function () {
                    e[0].focus()
                }, 200)
            }
        });
        e.showPopupSeo = (t => {
            a(), t.addClass("popup_active-seo");
            const e = t.find(".smooth-scroll");
            (0, o.disableBodyScroll)(e.length ? e[0] : t[0])
        }), e.hidePopup = (t => {
            t.removeClass("popup_active popup_active-seo"), (0, o.clearAllBodyScrollLocks)()
        }), e.loadOrShowPopup = ((t, e, n) => {
            0 !== t.length && (t.attr("data-is-loaded") !== r.stringTrue ? e && e(t, !0, n) : i(t))
        });

        function a() {
            t(".popup").removeClass("popup_active popup_active-seo")
        }
    }).call(e, n(0))
}, function (t, e, n) {
    "use strict";
    (function (t) {
        Object.defineProperty(e, "__esModule", {value: !0}), e.paginatorFirsPage = void 0, e.initFavoriteFeature = function () {
            let e = t(document);
            e.on("click", ".set-favorite.js-open-auth-popup", function (t) {
                t.preventDefault()
            }), e.on("change", ".set-favorite:not(.js-open-auth-popup)", function (t) {
                a(this, c, t.target)
            })
        }, e.setFavoriteList = a, e.favoriteSendQuery = s, e.updateFavorite = c, e.deleteAllCategories = l, e.deleteItemFromFavorite = u, e.deleteProductFromFavoritePopUp = function (e, n, a) {
            return new Promise((c, l) => {
                let p = t(e);
                const f = p.attr("data-id"), h = p.attr("data-classid"), m = p.attr("data-delete-from-favorite-url");
                s(m, f, h, r.queryTypes.DELETE, a).done(function () {
                    if (typeof favoriteUpdateCallback === r.variableTypes.function) {
                        const e = t("#header-favorite-popup").attr("data-is-authenticated");
                        e !== r.stringTrue && favoriteUpdateCallback()
                    }
                    const e = t(`.favorite-product[data-id=${f}]`).find(".delete-item");
                    0 === e.length ? function (e) {
                        let n = t(e);
                        const o = t(".profile__cards-menu");
                        if (0 === n.length || 0 === o.length) return;
                        let r = o.find("a.active");
                        const a = o.find("a").first(), s = n.attr("data-classid");
                        r.is(a) && (r = o.find(`a[data-classid=${s}]`));
                        const c = a.find("span"), l = parseInt(c.text()) - 1;
                        0 === l && d(i);
                        c.text(l.toString());
                        const u = r.find("span");
                        parseInt(u.text()) - 1 == 0 && r.parent().remove()
                    }(p) : u(e, !0);
                    const a = t(`.set-favorite[data-id=${f}][data-classid=${h}]`);
                    for (let t = 0; t < a.length; t++) (0, o.setButton)(a[t], !1);
                    const s = p.closest(".header-tooltip__cards-col");
                    s.find(".header-tooltip__cards-item").length > 1 ? p.parent().remove() : s.remove();
                    const l = t("#favorite-header-popup");
                    return 0 === l.find(".header-tooltip__cards-col").length && (0, o.getProductsForHeaderFavoritePopUp)("#header-favorite-popup", !1), (0, o.setCounter)(), n.stopPropagation(), c()
                })
            })
        }, e.paginationProductsForFavorite = d;
        var o = n(2), r = n(1);
        const i = e.paginatorFirsPage = 1;

        function a(e, n, i) {
            let a = t(e);
            const c = parseInt(a.attr("data-id")), l = parseInt(a.attr("data-classid")), d = (0, o.setButton)(a),
                p = a.hasClass("is-cart-item");
            if (d) {
                if (s(a.attr("data-add-to-favorite-url"), c, l, r.queryTypes.GET, p ? null : n), p) {
                    let e = a.parents(".shop-cart__item-product");
                    e.addClass("disabled-favorite");
                    const n = e.attr("data-order-item"), o = e.attr("data-remove-url");
                    t(document).trigger("addPostponeItemEvent", [n, o])
                }
                let e = t(i).closest(".slot").attr("data-slot-container-class"),
                    o = t(i).closest(".card, .product-box, .shop-cart__item-body").find(`.${e}`),
                    u = new CustomEvent("addToFavoritesToDataLayerEvent", {detail: {productDataContainer: o}});
                document.dispatchEvent(u)
            } else {
                let e = a.closest(".favorite-product").find(".delete-item");
                if (e.length > 0) u(e); else {
                    s(a.attr("data-delete-from-favorite-url"), c, l, r.queryTypes.DELETE, p ? null : n)
                }
                if (p) {
                    let e = a.parents(".shop-cart__item-product");
                    e.removeClass("disabled-favorite"), e.val(1), e.attr("data-count", 1);
                    let n = a.attr("data-tocardurl");
                    if (a.hasClass("gift")) {
                        let e = a.attr("data-packageid");
                        t(document).trigger("removePostponeGiftItemEvent", [c, l, e, n])
                    } else if (a.hasClass("set")) {
                        let e = a.attr("data-packageid"), o = a.attr("data-alt-id"), r = a.attr("data-alt-classid");
                        t(document).trigger("removePostponeSetItemEvent", [c, l, n, e, o, r])
                    } else t(document).trigger("removePostponeItemEvent", [c, l, n])
                }
            }
            typeof n === r.variableTypes.function && t("#header-favorite-popup").attr("data-is-authenticated") !== r.stringTrue && n();
            const f = t(`.set-favorite[data-id=${c}][data-classid=${l}]`);
            for (let t = 0; t < f.length; t++) a.is(f[t]) || (0, o.setButton)(f[t], d)
        }

        function s(e, n, i, a, s, c = 1) {
            return t.ajax({
                type: a, url: e, success: function (e) {
                    a === r.queryTypes.DELETE ? (0, o.setCounter)(null, -c) : (0, o.setCounter)(null, c), e.needReload && location.reload(), t(document).trigger("updateAddedToFavoriteProductsCountEvent", []), typeof s === r.variableTypes.function && s()
                }
            })
        }

        function c() {
            const e = t("#header-favorite-popup").attr("data-url"), n = t("#favorite-header-popup");
            0 !== n.length && e && t.ajax({
                type: r.queryTypes.GET, url: e, success: function (t) {
                    n.html(t)
                }
            })
        }

        function l() {
            s(t("#favorite-delete-all-categories").attr("data-delete-from-favorite-url"), 0, 0, r.queryTypes.DELETE), d(i, !1, null, null, i, ".profile__body")
        }

        function u(e, n) {
            let o = t(e);
            const a = o.closest(".favorite-product");
            if (0 === o.length || 0 === a.length) return;
            a.append(r.loader);
            const c = a.attr("data-classid");
            n || s(o.attr("data-delete-from-favorite-url"), 0, 0, r.queryTypes.DELETE);
            let u = t(".profile__cards-menu"), p = u.find("a.active");
            const f = u.find("a").first();
            p.is(f) && (p = u.find(`a[data-classid=${c}]`));
            const h = f.find("span"), m = parseInt(h.text()) - 1;
            if (0 === m ? (d(i), 0 === (u = u.find("a")).length && t(".profile__cards-filtered").remove(), h.parents(`[data-classid=${c}]`).remove(), 0 === t(".favorite-category-item").length && l()) : h.text(m.toString()), 1 === t(".profile__cards-body .favorite-product").length) return p.removeClass("active"), p.parent().remove(), f.addClass("active"), d(i, !1, null, null, i), void (0 === (u = u.find("a")).length && t(".profile__cards-filtered").remove());
            if (t("#favorite-catalog-menu li").length > 1) {
                const t = p.find("span"), e = parseInt(t.text()) - 1;
                t.text(e.toString()), 0 === e && (p.parent().remove(), 2 === (u = u.find("a")).length && (u.first().parent().remove(), u.last().addClass("active")))
            }
            a.remove()
        }

        function d(e, n = !1, a = null, s = null, c = null, l = null) {
            const u = t("#favorite-product-tiles-container");
            if (0 === u.length) return;
            const d = u.attr("data-url");
            if (!d) return;
            let p = parseInt(e);
            p > 0 || (p = i), u.html(r.loader);
            const f = t("#favorite-card-more");
            f.html(f.html() + r.loader), t.ajax({
                type: r.queryTypes.POST,
                url: d,
                data: {
                    callerIsPaginator: n,
                    currentPage: p,
                    categoryId: t(".favorite-category.active").attr("data-classid"),
                    numberPageAfterPaginations: c || t("#favorite-card-more").attr("data-number-page-after-pagination") || i
                },
                success: function (e) {
                    l ? t(l).html(e) : u.html(e), (0, o.setCashBackTitle)()
                }
            }), a && t([document.documentElement, document.body]).animate({scrollTop: t(`#${a}`).offset().top - 50}, 850)
        }
    }).call(e, n(0))
}]);