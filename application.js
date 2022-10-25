!function(t, e) {
    function n(t) {
        var e = t.length, n = le.type(t);
        return le.isWindow(t)?!1 : 1 === t.nodeType && e?!0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e-1 in t)
    }
    function i(t) {
        var e = we[t] = {};
        return le.each(t.match(ue) || [], function(t, n) {
            e[n]=!0
        }), e
    }
    function o(t, n, i, o) {
        if (le.acceptData(t)) {
            var s, r, a = le.expando, l = "string" == typeof n, h = t.nodeType, u = h ? le.cache: t, c = h ? t[a]: t[a] && a;
            if (c && u[c] && (o || u[c].data) ||!l || i !== e)
                return c || (h ? t[a] = c = Q.pop() || le.guid++ : c = a), u[c] || (u[c] = {}, h || (u[c].toJSON = le.noop)), ("object" == typeof n || "function" == typeof n) && (o ? u[c] = le.extend(u[c], n) : u[c].data = le.extend(u[c].data, n)), s = u[c], o || (s.data || (s.data = {}), s = s.data), i !== e && (s[le.camelCase(n)] = i), l ? (r = s[n], null == r && (r = s[le.camelCase(n)])) : r = s, r
        }
    }
    function s(t, e, n) {
        if (le.acceptData(t)) {
            var i, o, s, r = t.nodeType, l = r ? le.cache: t, h = r ? t[le.expando]: le.expando;
            if (l[h]) {
                if (e && (s = n ? l[h] : l[h].data)) {
                    le.isArray(e) ? e = e.concat(le.map(e, le.camelCase)) : e in s ? e = [e] : (e = le.camelCase(e), e = e in s ? [e] : e.split(" "));
                    for (i = 0, o = e.length; o > i; i++)
                        delete s[e[i]];
                    if (!(n ? a : le.isEmptyObject)(s))
                        return 
                }(n || (delete l[h].data, a(l[h]))) && (r ? le.cleanData([t], !0) : le.support.deleteExpando || l != l.window ? delete l[h] : l[h] = null)
            }
        }
    }
    function r(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var o = "data-" + n.replace(Pe, "-$1").toLowerCase();
            if (i = t.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i?!0 : "false" === i?!1 : "null" === i ? null : + i + "" === i?+i : ke.test(i) ? le.parseJSON(i) : i
                } catch (s) {}
                le.data(t, n, i)
            } else 
                i = e
        }
        return i
    }
    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e ||!le.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function l() {
        return !0
    }
    function h() {
        return !1
    }
    function u(t, e) {
        do 
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function c(t, e, n) {
        if (e = e || 0, le.isFunction(e)
            )return le.grep(t, function(t, i) {
            var o=!!e.call(t, i, t);
            return o === n
        });
        if (e.nodeType)
            return le.grep(t, function(t) {
                return t === e === n
            });
        if ("string" == typeof e) {
            var i = le.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (Ge.test(e))
                return le.filter(e, i, !n);
            e = le.filter(e, i)
        }
        return le.grep(t, function(t) {
            return le.inArray(t, e) >= 0 === n
        })
    }
    function p(t) {
        var e = qe.split("|"), n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;)
                n.createElement(e.pop());
        return n
    }
    function d(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }
    function f(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type, t
    }
    function m(t) {
        var e = sn.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function g(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            le._data(n, "globalEval", !e || le._data(e[i], "globalEval"))
    }
    function _(t, e) {
        if (1 === e.nodeType && le.hasData(t)) {
            var n, i, o, s = le._data(t), r = le._data(e, s), a = s.events;
            if (a) {
                delete r.handle, r.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++)
                        le.event.add(e, n, a[n][i])
                    }
            r.data && (r.data = le.extend({}, r.data))
        }
    }
    function y(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !le.support.noCloneEvent && e[le.expando]) {
                o = le._data(e);
                for (i in o.events)
                    le.removeEvent(e, i, o.handle);
                e.removeAttribute(le.expando)
            }
            "script" === n && e.text !== t.text ? (f(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), le.support.html5Clone && t.innerHTML&&!le.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function v(t, n) {
        var i, o, s = 0, r = typeof t.getElementsByTagName !== $ ? t.getElementsByTagName(n || "*"): typeof t.querySelectorAll !== $ ? t.querySelectorAll(n || "*"): e;
        if (!r)
            for (r = [], i = t.childNodes || t;
            null != (o = i[s]); s++)
                !n || le.nodeName(o, n) ? r.push(o) : le.merge(r, v(o, n));
        return n === e || n && le.nodeName(t, n) ? le.merge([t], r) : r
    }
    function L(t) {
        en.test(t.type) && (t.defaultChecked = t.checked)
    }
    function b(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = Pn.length; o--;)
            if (e = Pn[o] + n, e in t)
                return e;
        return i
    }
    function x(t, e) {
        return t = e || t, "none" === le.css(t, "display") ||!le.contains(t.ownerDocument, t)
    }
    function w(t, e) {
        for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++)
            i = t[r], i.style && (s[r] = le._data(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && x(i) && (s[r] = le._data(i, "olddisplay", T(i.nodeName)))) : s[r] || (o = x(i), (n && "none" !== n ||!o) && le._data(i, "olddisplay", o ? n : le.css(i, "display"))));
        for (r = 0; a > r; r++)
            i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
        return t
    }
    function k(t, e, n) {
        var i = yn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function P(t, e, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2)
            "margin" === n && (r += le.css(t, n + kn[s], !0, o)), i ? ("content" === n && (r -= le.css(t, "padding" + kn[s], !0, o)), "margin" !== n && (r -= le.css(t, "border" + kn[s] + "Width", !0, o))) : (r += le.css(t, "padding" + kn[s], !0, o), "padding" !== n && (r += le.css(t, "border" + kn[s] + "Width", !0, o)));
        return r
    }
    function E(t, e, n) {
        var i=!0, o = "width" === e ? t.offsetWidth : t.offsetHeight, s = cn(t), r = le.support.boxSizing && "border-box" === le.css(t, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = pn(t, e, s), (0 > o || null == o) && (o = t.style[e])
                , vn.test(o))return o;
            i = r && (le.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + P(t, e, n || (r ? "border" : "content"), i, s) + "px"
    }
    function T(t) {
        var e = V, n = bn[t];
        return n || (n = M(t, e), "none" !== n && n || (un = (un || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (un[0].contentWindow || un[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = M(t, e), un.detach()), bn[t] = n), n
    }
    function M(t, e) {
        var n = le(e.createElement(t)).appendTo(e.body), i = le.css(n[0], "display");
        return n.remove(), i
    }
    function C(t, e, n, i) {
        var o;
        if (le.isArray(e))
            le.each(e, function(e, o) {
                n || Tn.test(t) ? i(t, o) : C(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== le.type(e))
            i(t, e);
        else 
            for (o in e)
                C(t + "[" + o + "]", e[o], n, i)
    }
    function S(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0, s = e.toLowerCase().match(ue) || [];
            if (le.isFunction(n))
                for (; i = s[o++];)
                    "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function D(t, e, n, i) {
        function o(a) {
            var l;
            return s[a]=!0, le.each(t[a] || [], function(t, a) {
                var h = a(e, n, i);
                return "string" != typeof h || r || s[h] ? r?!(l = h) : void 0 : (e.dataTypes.unshift(h), o(h), !1)
            }), l
        }
        var s = {}, r = t === Wn;
        return o(e.dataTypes[0]) ||!s["*"] && o("*")
    }
    function N(t, n) {
        var i, o, s = le.ajaxSettings.flatOptions || {};
        for (o in n)
            n[o] !== e && ((s[o] ? t : i || (i = {}))[o] = n[o]);
        return i && le.extend(!0, t, i), t
    }
    function A(t, n, i) {
        var o, s, r, a, l = t.contents, h = t.dataTypes, u = t.responseFields;
        for (a in u)
            a in i && (n[u[a]] = i[a]);
        for (; "*" === h[0];)
            h.shift(), s === e && (s = t.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (a in l)
                if (l[a] && l[a].test(s)) {
                    h.unshift(a);
                    break
                }
        if (h[0]in i)
            r = h[0];
        else {
            for (a in i) {
                if (!h[0] || t.converters[a + " " + h[0]]) {
                    r = a;
                    break
                }
                o || (o = a)
            }
            r = r || o
        }
        return r ? (r !== h[0] && h.unshift(r), i[r]) : void 0
    }
    function I(t, e) {
        var n, i, o, s, r = {}, a = 0, l = t.dataTypes.slice(), h = l[0];
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
            for (o in t.converters)
                r[o.toLowerCase()] = t.converters[o];
        for (; i = l[++a];)
            if ("*" !== i) {
                if ("*" !== h && h !== i) {
                    if (o = r[h + " " + i] || r["* " + i], !o)
                        for (n in r)
                            if (s = n.split(" "), s[1] === i && (o = r[h + " " + s[0]] || r["* " + s[0]])
                                ) {
                                    o===!0 ? o = r[n] : r[n]!==!0 && (i = s[0], l.splice(a--, 0, i));
                                    break
                                }
                                if (o!==!0)
                                    if (o && t["throws"])
                                        e = o(e);
                                    else 
                                        try {
                                            e = o(e)
                                        } catch (u) {
                                            return {
                                                state: "parsererror",
                                                error: o ? u: "No conversion from " + h + " to " + i
                                            }
                                        }
                                    }
                                    h = i
            }
        return {
            state: "success",
            data: e
        }
    }
    function O() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function B() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function z() {
        return setTimeout(function() {
            Qn = e
        }), Qn = le.now()
    }
    function H(t, e) {
        le.each(e, function(e, n) {
            for (var i = (si[e] || []).concat(si["*"]), o = 0, s = i.length; s > o; o++)
                if (i[o].call(t, e, n))
                    return 
        })
    }
    function R(t, e, n) {
        var i, o, s = 0, r = oi.length, a = le.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = Qn || z(), n = Math.max(0, h.startTime + h.duration - e), i = n / h.duration || 0, s = 1 - i, r = 0, l = h.tweens.length; l > r; r++)
                h.tweens[r].run(s);
            return a.notifyWith(t, [h, s, n]), 1 > s && l ? n : (a.resolveWith(t, [h]), !1)
        }, h = a.promise({
            elem: t,
            props: le.extend({}, e),
            opts: le.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Qn || z(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = le.Tween(t, h.opts, e, n, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(i), i
            },
            stop: function(e) {
                var n = 0, i = e ? h.tweens.length: 0;
                if (o)
                    return this;
                for (o=!0; i > n; n++)
                    h.tweens[n].run(1);
                return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
            }
        }), u = h.props;
        for (U(u, h.opts.specialEasing);
        r > s;
        s++)if (i = oi[s].call(h, t, u, h.opts))
            return i;
        return H(h, u), le.isFunction(h.opts.start) && h.opts.start.call(t, h), le.fx.timer(le.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function U(t, e) {
        var n, i, o, s, r;
        for (o in t)
            if (i = le.camelCase(o), s = e[i], n = t[o], le.isArray(n) && (s = n[1], n = t[o] = n[0])
                , o !== i && (t[i] = n, delete t[o]), r = le.cssHooks[i], r && "expand"in r) {
            n = r.expand(n), delete t[i];
            for (o in n)
                o in t || (t[o] = n[o], e[o] = s)
        } else 
            e[i] = s
        }
    function j(t, e, n) {
        var i, o, s, r, a, l, h, u, c, p = this, d = t.style, f = {}, m = [], g = t.nodeType && x(t);
        n.queue || (u = le._queueHooks(t, "fx"), null == u.unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
            u.unqueued || c()
        }), u.unqueued++, p.always(function() {
            p.always(function() {
                u.unqueued--, le.queue(t, "fx").length || u.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === le.css(t, "display") && "none" === le.css(t, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", le.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (o in e)
            if (r = e[o], ei.exec(r)
                ) {
            if (delete e[o], l = l || "toggle" === r, r === (g ? "hide" : "show")
                )continue;
            m.push(o)
        }
        if (s = m.length) {
            a = le._data(t, "fxshow") || le._data(t, "fxshow", {}), "hidden"in a && (g = a.hidden), l && (a.hidden=!g), g ? le(t).show() : p.done(function() {
                le(t).hide()
            }), p.done(function() {
                var e;
                le._removeData(t, "fxshow");
                for (e in f)
                    le.style(t, e, f[e])
            });
            for (o = 0; s > o; o++)
                i = m[o], h = p.createTween(i, g ? a[i] : 0), f[i] = a[i] || le.style(t, i), i in a || (a[i] = h.start, g && (h.end = h.start, h.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function F(t, e, n, i, o) {
        return new F.prototype.init(t, e, n, i, o)
    }
    function G(t, e) {
        var n, i = {
            height: t
        }, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e)
            n = kn[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function W(t) {
        return le.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Z, q, $ = typeof e, V = t.document, X = t.location, J = t.jQuery, Y = t.$, K = {}, Q = [], te = "1.9.1", ee = Q.concat, ne = Q.push, ie = Q.slice, oe = Q.indexOf, se = K.toString, re = K.hasOwnProperty, ae = te.trim, le = function(t, e) {
        return new le.fn.init(t, e, q)
    }, he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ue = /\S+/g, ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^[\],:{}\s]*$/, me = /(?:^|:|,)(?:\s*\[)+/g, ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, _e = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ye = /^-ms-/, ve = /-([\da-z])/gi, Le = function(t, e) {
        return e.toUpperCase()
    }, be = function(t) {
        (V.addEventListener || "load" === t.type || "complete" === V.readyState) && (xe(), le.ready())
    }, xe = function() {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", be, !1), t.removeEventListener("load", be, !1)) : (V.detachEvent("onreadystatechange", be), t.detachEvent("onload", be))
    };
    le.fn = le.prototype = {
        jquery: te,
        constructor: le,
        init: function(t, n, i) {
            var o, s;
            if (!t)
                return this;
            if ("string" == typeof t) {
                if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length-1) && t.length >= 3 ? [null, t, null] : pe.exec(t), !o ||!o[1] && n)
                    return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                if (o[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : V, !0)
                        ), de.test(o[1]) && le.isPlainObject(n))for (o in n)
                        le.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if (s = V.getElementById(o[2]), s && s.parentNode) {
                    if (s.id !== o[2])
                        return i.find(t);
                    this.length = 1, this[0] = s
                }
                return this.context = V, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : le.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), le.makeArray(t, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return ie.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function(t) {
            var e = le.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return le.each(this, t, e)
        },
        ready: function(t) {
            return le.ready.promise().done(t), this
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length, n =+ t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        map: function(t) {
            return this.pushStack(le.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ne,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
        var t, n, i, o, s, r, a = arguments[0] || {}, l = 1, h = arguments.length, u=!1;
        for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || le.isFunction(a) || (a = {}), h === l && (a = this, --l);
        h > l;
        l++)if (null != (s = arguments[l]))
            for (o in s)
                t = a[o], i = s[o], a !== i && (u && i && (le.isPlainObject(i) || (n = le.isArray(i))) ? (n ? (n=!1, r = t && le.isArray(t) ? t : []) : r = t && le.isPlainObject(t) ? t : {}, a[o] = le.extend(u, r, i)) : i !== e && (a[o] = i));
        return a
    }, le.extend({
        noConflict: function(e) {
            return t.$ === le && (t.$ = Y), e && t.jQuery === le && (t.jQuery = J), le
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? le.readyWait++ : le.ready(!0)
        },
        ready: function(t) {
            if (t===!0?!--le.readyWait : !le.isReady) {
                if (!V.body)
                    return setTimeout(le.ready);
                le.isReady=!0, t!==!0&&--le.readyWait > 0 || (Z.resolveWith(V, [le]), le.fn.trigger && le(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === le.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === le.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? K[se.call(t)] || "object" : typeof t
        },
        isPlainObject: function(t) {
            if (!t || "object" !== le.type(t) || t.nodeType || le.isWindow(t))
                return !1;
            try {
                if (t.constructor&&!re.call(t, "constructor")&&!re.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in t);
            return i === e || re.call(t, i)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        error: function(t) {
            throw new Error(t)
        },
        parseHTML: function(t, e, n) {
            if (!t || "string" != typeof t)
                return null;
            "boolean" == typeof e && (n = e, e=!1), e = e || V;
            var i = de.exec(t), o=!n && [];
            return i ? [e.createElement(i[1])] : (i = le.buildFragment([t], e, o), o && le(o).remove(), le.merge([], i.childNodes))
        },
        parseJSON: function(e) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = le.trim(e), e && fe.test(e.replace(ge, "@").replace(_e, "]").replace(me, ""))) ? new Function("return " + e)() : (le.error("Invalid JSON: " + e), void 0)
        },
        parseXML: function(n) {
            var i, o;
            if (!n || "string" != typeof n)
                return null;
            try {
                t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (s) {
                i = e
            }
            return i && i.documentElement&&!i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), i
        },
        noop: function() {},
        globalEval: function(e) {
            e && le.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(ye, "ms-").replace(ve, Le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o, s = 0, r = t.length, a = n(t);
            if (i) {
                if (a)
                    for (; r > s && (o = e.apply(t[s], i), o!==!1); s++);
                else 
                    for (s in t)
                        if (o = e.apply(t[s], i), o===!1)
                            break
            } else if (a)
                for (; r > s && (o = e.call(t[s], s, t[s]), o!==!1); s++);
            else 
                for (s in t)
                    if (o = e.call(t[s], s, t[s]), o===!1)
                        break;
            return t
        },
        trim: ae&&!ae.call("﻿ ") ? function(t) {
            return null == t ? "" : ae.call(t)
        }
        : function(t) {
            return null == t ? "" : (t + "").replace(ce, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? le.merge(i, "string" == typeof t ? [t] : t) : ne.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (oe)
                    return oe.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) 
                    : n:
                0;
                i > n;
                n++)if (n in e && e[n] === t)
                    return n
            }
            return -1
        },
        merge: function(t, n) {
            var i = n.length, o = t.length, s = 0;
            if ("number" == typeof i)
                for (; i > s; s++)
                    t[o++] = n[s];
            else 
                for (; n[s] !== e;)
                    t[o++] = n[s++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            var i, o = [], s = 0, r = t.length;
            for (n=!!n; r > s; s++)
                i=!!e(t[s], s), n !== i && o.push(t[s]);
            return o
        },
        map: function(t, e, i) {
            var o, s = 0, r = t.length, a = n(t), l = [];
            if (a)
                for (; r > s; s++)
                    o = e(t[s], s, i), null != o && (l[l.length] = o);
            else 
                for (s in t)
                    o = e(t[s], s, i), null != o && (l[l.length] = o);
            return ee.apply([], l)
        },
        guid: 1,
        proxy: function(t, n) {
            var i, o, s;
            return "string" == typeof n && (s = t[n], n = t, t = s), le.isFunction(t) ? (i = ie.call(arguments, 2), o = function() {
                return t.apply(n || this, i.concat(ie.call(arguments)))
            }, o.guid = t.guid = t.guid || le.guid++, o) : e
        },
        access: function(t, n, i, o, s, r, a) {
            var l = 0, h = t.length, u = null == i;
            if ("object" === le.type(i)) {
                s=!0;
                for (l in i)
                    le.access(t, n, l, i[l], !0, r, a)
            } else if (o !== e && (s=!0, le.isFunction(o) || (a=!0), u && (a ? (n.call(t, o)
                , n = null) : (u = n, n = function(t, e, n) {
                return u.call(le(t), n)
            })), n))for (; h > l; l++)
                n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
            return s ? t : u ? n.call(t) : h ? n(t[0], i) : r
        },
        now: function() {
            return (new Date).getTime()
        }
    }), le.ready.promise = function(e) {
        if (!Z)
            if (Z = le.Deferred(), "complete" === V.readyState)
                setTimeout(le.ready);
            else if (V.addEventListener)
                V.addEventListener("DOMContentLoaded", be, !1), t.addEventListener("load", be, !1);
        else {
            V.attachEvent("onreadystatechange", be), t.attachEvent("onload", be);
            var n=!1;
            try {
                n = null == t.frameElement && V.documentElement
            } catch (i) {}
            n && n.doScroll && function o() {
                if (!le.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    xe(), le.ready()
                }
            }()
        }
        return Z.promise(e)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        K["[object " + e + "]"] = e.toLowerCase()
    }), q = le(V);
    var we = {};
    le.Callbacks = function(t) {
        t = "string" == typeof t ? we[t] || i(t) : le.extend({}, t);
        var n, o, s, r, a, l, h = [], u=!t.once && [], c = function(e) {
            for (o = t.memory && e, s=!0, a = l || 0, l = 0, r = h.length, n=!0; h && r > a; a++)
                if (h[a].apply(e[0], e[1])===!1 && t.stopOnFalse) {
                    o=!1;
                    break
                }
            n=!1, h && (u ? u.length && c(u.shift()) : o ? h = [] : p.disable())
        }, p = {
            add: function() {
                if (h) {
                    var e = h.length;
                    !function i(e) {
                        le.each(e, function(e, n) {
                            var o = le.type(n);
                            "function" === o ? t.unique && p.has(n) || h.push(n) : n && n.length && "string" !== o && i(n)
                        })
                    }(arguments), n ? r = h.length : o && (l = e, c(o))
                }
                return this
            },
            remove: function() {
                return h && le.each(arguments, function(t, e) {
                    for (var i; (i = le.inArray(e, h, i))>-1;)
                        h.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                }), this
            },
            has: function(t) {
                return t ? le.inArray(t, h)>-1 : !(!h ||!h.length)
            },
            empty: function() {
                return h = [], this
            },
            disable: function() {
                return h = u = o = e, this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return u = e, o || p.disable(), this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, e) {
                return e = e || [], e = [t, e.slice ? e.slice(): e], !h || s&&!u || (n ? u.push(e) : c(e)), this
            },
            fire: function() {
                return p.fireWith(this, arguments), this
            },
            fired: function() {
                return !!s
            }
        };
        return p
    }, le.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]], n = "pending", i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this
                },
                then: function() {
                    var t = arguments;
                    return le.Deferred(function(n) {
                        le.each(e, function(e, s) {
                            var r = s[0], a = le.isFunction(t[e]) && t[e];
                            o[s[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && le.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? le.extend(t, i) : i
                }
            }, o = {};
            return i.pipe = i.then, le.each(e, function(t, s) {
                var r = s[2], a = s[3];
                i[s[1]] = r.add, a && r.add(function() {
                    n = a
                }, e[1^t][2].disable, e[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0, s = ie.call(arguments), r = s.length, a = 1 !== r || t && le.isFunction(t.promise) ? r: 0, l = 1 === a ? t: le.Deferred(), h = function(t, n, i) {
                return function(o) {
                    n[t] = this, i[t] = arguments.length > 1 ? ie.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (r > 1)
                for (e = new Array(r), n = new Array(r)
                    , i = new Array(r);
            r > o;
            o++)s[o] && le.isFunction(s[o].promise) ? s[o].promise().done(h(o, i, s)).fail(l.reject).progress(h(o, n, e)) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    }), le.support = function() {
        var e, n, i, o, s, r, a, l, h, u, c = V.createElement("div");
        if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = c.getElementsByTagName("*")
            , i = c.getElementsByTagName("a")[0], !n ||!i ||!n.length)return {};
        s = V.createElement("select"), a = s.appendChild(V.createElement("option")), o = c.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e = {
            getSetAttribute: "t" !== c.className,
            leadingWhitespace: 3 === c.firstChild.nodeType,
            tbody: !c.getElementsByTagName("tbody").length,
            htmlSerialize: !!c.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!o.value,
            optSelected: a.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked=!0, e.noCloneChecked = o.cloneNode(!0).checked, s.disabled=!0, e.optDisabled=!a.disabled;
        try {
            delete c.test
        } catch (p) {
            e.deleteExpando=!1
        }
        o = V.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), r = V.createDocumentFragment(), r.appendChild(o), e.appendChecked = o.checked, e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function() {
            e.noCloneEvent=!1
        }), c.cloneNode(!0).click());
        for (u in{
            submit: !0,
            change: !0,
            focusin: !0
        })
            c.setAttribute(l = "on" + u, "t"), e[u + "Bubbles"] = l in t || c.attributes[l].expando===!1;
        return c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === c.style.backgroundClip, le(function() {
            var n, i, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", r = V.getElementsByTagName("body")[0];
            r && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = c.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = h && 0 === o[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === c.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(c, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(c, null) || {
                width: "4px"
            }).width, i = c.appendChild(V.createElement("div")), i.style.cssText = c.style.cssText = s, i.style.marginRight = i.style.width = "0", c.style.width = "1px", e.reliableMarginRight=!parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof c.style.zoom !== $ && (c.innerHTML = "", c.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== c.offsetWidth, e.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = c = o = i = null)
        }), n = s = r = a = i = o = null, e
    }();
    var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Pe = /([A-Z])/g;
    le.extend({
        cache: {},
        expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return t = t.nodeType ? le.cache[t[le.expando]] : t[le.expando], !!t&&!a(t)
        },
        data: function(t, e, n) {
            return o(t, e, n)
        },
        removeData: function(t, e) {
            return s(t, e)
        },
        _data: function(t, e, n) {
            return o(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return s(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)
                return !1;
            var e = t.nodeName && le.noData[t.nodeName.toLowerCase()];
            return !e || e!==!0 && t.getAttribute("classid") === e
        }
    }), le.fn.extend({
        data: function(t, n) {
            var i, o, s = this[0], a = 0, l = null;
            if (t === e) {
                if (this.length && (l = le.data(s), 1 === s.nodeType&&!le._data(s, "parsedAttrs"))
                    ) {
                    for (i = s.attributes; a < i.length; a++)
                        o = i[a].name, o.indexOf("data-") || (o = le.camelCase(o.slice(5)), r(s, o, l[o]));
                    le._data(s, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function() {
                le.data(this, t)
            }) : le.access(this, function(n) {
                return n === e ? s ? r(s, t, le.data(s, t)) : null : (this.each(function() {
                    le.data(this, t, n)
                }), void 0)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                le.removeData(this, t)
            })
        }
    }), le.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = le._data(t, e), n && (!i || le.isArray(n) ? i = le._data(t, e, le.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = le.queue(t, e), i = n.length, o = n.shift(), s = le._queueHooks(t, e), r = function() {
                le.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(), i--), s.cur = o, o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return le._data(t, n) || le._data(t, n, {
                empty: le.Callbacks("once memory").add(function() {
                    le._removeData(t, e + "queue"), le._removeData(t, n)
                })
            })
        }
    }), le.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? le.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = le.queue(this, t, n);
                le._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && le.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                le.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = le.fx ? le.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var i, o = 1, s = le.Deferred(), r = this, a = this.length, l = function() {
                --o || s.resolveWith(r, [r])
            };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;)
                i = le._data(r[a], t + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
            return l(), s.promise(n)
        }
    });
    var Ee, Te, Me = /[\t\r\n]/g, Ce = /\r/g, Se = /^(?:input|select|textarea|button|object)$/i, De = /^(?:a|area)$/i, Ne = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Ae = /^(?:checked|selected)$/i, Ie = le.support.getSetAttribute, Oe = le.support.input;
    le.fn.extend({
        attr: function(t, e) {
            return le.access(this, le.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                le.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return le.access(this, le.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = le.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (n) {}
            })
        },
        addClass: function(t) {
            var e, n, i, o, s, r = 0, a = this.length, l = "string" == typeof t && t;
            if (le.isFunction(t))
                return this.each(function(e) {
                    le(this).addClass(t.call(this, e, this.className))
                });
            if (l)
                for (e = (t || "").match(ue) || []; a > r; r++)
                    if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Me, " ") 
                        : " ")) {
                for (s = 0; o = e[s++];)
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                n.className = le.trim(i)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, s, r = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
            if (le.isFunction(t))
                return this.each(function(e) {
                    le(this).removeClass(t.call(this, e, this.className))
                });
            if (l)
                for (e = (t || "").match(ue) || []; a > r; r++)
                    if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Me, " ") 
                        : "")) {
                for (s = 0; o = e[s++];)
                    for (; i.indexOf(" " + o + " ") >= 0;)
                        i = i.replace(" " + o + " ", " ");
                n.className = t ? le.trim(i) : ""
            }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t, i = "boolean" == typeof e;
            return le.isFunction(t) ? this.each(function(n) {
                le(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var o, s = 0, r = le(this), a = e, l = t.match(ue) || []; o = l[s++];)
                        a = i ? a : !r.hasClass(o), r[a ? "addClass": "removeClass"](o);
                else (n === $ || "boolean" === n) 
                    && (this.className && le._data(this, "__className__", this.className), this.className = this.className || t===!1 ? "" : le._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Me, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        },
        val: function(t) {
            var n, i, o, s = this[0];
            {
                if (arguments.length)
                    return o = le.isFunction(t), this.each(function(n) {
                    var s, r = le(this);
                    1 === this.nodeType && (s = o ? t.call(this, n, r.val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : le.isArray(s) && (s = le.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), i = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, s, "value") !== e || (this.value = s))
                });
                if (s)
                    return i = le.valHooks[s.type] || le.valHooks[s.nodeName.toLowerCase()], i && "get"in i && (n = i.get(s, "value")) !== e ? n : (n = s.value, "string" == typeof n ? n.replace(Ce, "") : null == n ? "" : n)
            }
        }
    }), le.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (le.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")
                            ) || n.parentNode.disabled && le.nodeName(n.parentNode, "optgroup"))) {
                        if (e = le(n).val(), s)
                            return e;
                        r.push(e)
                    }
                    return r
                },
                set: function(t, e) {
                    var n = le.makeArray(e);
                    return le(t).find("option").each(function() {
                        this.selected = le.inArray(le(this).val(), n) >= 0
                    }), n.length || (t.selectedIndex =- 1), n
                }
            }
        },
        attr: function(t, n, i) {
            var o, s, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)
                return typeof t.getAttribute === $ ? le.prop(t, n, i) : (s = 1 !== a ||!le.isXMLDoc(t), s && (n = n.toLowerCase(), o = le.attrHooks[n] || (Ne.test(n) ? Te : Ee)), i === e ? o && s && "get"in o && null !== (r = o.get(t, n)) ? r : (typeof t.getAttribute !== $ && (r = t.getAttribute(n)), null == r ? e : r) : null !== i ? o && s && "set"in o && (r = o.set(t, i, n)) !== e ? r : (t.setAttribute(n, i + ""), i) : (le.removeAttr(t, n), void 0))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0, s = e && e.match(ue);
            if (s && 1 === t.nodeType)
                for (; n = s[o++];)
                    i = le.propFix[n] || n, Ne.test(n)?!Ie && Ae.test(n) ? t[le.camelCase("default-" + n)] = t[i]=!1 : t[i]=!1 : le.attr(t, n, ""), t.removeAttribute(Ie ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!le.support.radioValue && "radio" === e && le.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, n, i) {
            var o, s, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)
                return r = 1 !== a ||!le.isXMLDoc(t), r && (n = le.propFix[n] || n, s = le.propHooks[n]), i !== e ? s && "set"in s && (o = s.set(t, i, n)) !== e ? o : t[n] = i : s && "get"in s && null !== (o = s.get(t, n)) ? o : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = t.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Se.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }), Te = {
        get: function(t, n) {
            var i = le.prop(t, n), o = "boolean" == typeof i && t.getAttribute(n), s = "boolean" == typeof i ? Oe && Ie ? null != o: Ae.test(n) ? t[le.camelCase("default-" + n)]: !!o: t.getAttributeNode(n);
            return s && s.value!==!1 ? n.toLowerCase() : e
        },
        set: function(t, e, n) {
            return e===!1 ? le.removeAttr(t, n) : Oe && Ie ||!Ae.test(n) ? t.setAttribute(!Ie && le.propFix[n] || n, n) : t[le.camelCase("default-" + n)] = t[n]=!0, n
        }
    }, Oe && Ie || (le.attrHooks.value = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return le.nodeName(t, "input") ? t.defaultValue : i && i.specified ? i.value : e
        },
        set: function(t, e, n) {
            return le.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Ee && Ee.set(t, e, n)
        }
    }), Ie || (Ee = le.valHooks.button = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : e
        },
        set: function(t, n, i) {
            var o = t.getAttributeNode(i);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
        }
    }, le.attrHooks.contenteditable = {
        get : Ee.get, set : function(t, e, n) {
            Ee.set(t, "" === e?!1 : e, n)
        }
    }, le.each(["width", "height"], function(t, e) {
        le.attrHooks[e] = le.extend(le.attrHooks[e], {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        })
    })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(t, n) {
        le.attrHooks[n] = le.extend(le.attrHooks[n], {
            get: function(t) {
                var i = t.getAttribute(n, 2);
                return null == i ? e : i
            }
        })
    }), le.each(["href", "src"], function(t, e) {
        le.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    })), le.support.style || (le.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() {
        le.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), le.each(["radio", "checkbox"], function() {
        le.valHooks[this] = le.extend(le.valHooks[this], {
            set: function(t, e) {
                return le.isArray(e) ? t.checked = le.inArray(le(t).val(), e) >= 0 : void 0
            }
        })
    });
    var Be = /^(?:input|select|textarea)$/i, ze = /^key/, He = /^(?:mouse|contextmenu)|click/, Re = /^(?:focusinfocus|focusoutblur)$/, Ue = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
        global: {},
        add: function(t, n, i, o, s) {
            var r, a, l, h, u, c, p, d, f, m, g, _ = le._data(t);
            if (_) {
                for (i.handler && (h = i, i = h.handler, s = h.selector), i.guid || (i.guid = le.guid++)
                    , (a = _.events) || (a = _.events = {}), (c = _.handle) || (c = _.handle = function(t) {
                    return typeof le === $ || t && le.event.triggered === t.type ? e : le.event.dispatch.apply(c.elem, arguments)
                }, c.elem = t), n = (n || "").match(ue) || [""], l = n.length;
                l--;
                )r = Ue.exec(n[l]) || [], f = g = r[1], m = (r[2] || "").split(".").sort(), u = le.event.special[f] || {}, f = (s ? u.delegateType : u.bindType) || f, u = le.event.special[f] || {}, p = le.extend({
                    type: f,
                    origType: g,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && le.expr.match.needsContext.test(s),
                    namespace: m.join(".")
                }, h), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, o, m, c)!==!1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, p) : d.push(p), le.event.global[f]=!0;
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var s, r, a, l, h, u, c, p, d, f, m, g = le.hasData(t) && le._data(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(ue) || [""], h = e.length; h--;)
                    if (a = Ue.exec(e[h]) || [], d = m = a[1], f = (a[2] || "").split(".").sort()
                        , d) {
                    for (c = le.event.special[d] || {}, d = (i ? c.delegateType : c.bindType) 
                        || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length;
                    s--;
                    )r = p[s], !o && m !== r.origType || n && n.guid !== r.guid || a&&!a.test(r.namespace) || i && i !== r.selector && ("**" !== i ||!r.selector) || (p.splice(s, 1), r.selector && p.delegateCount--, c.remove && c.remove.call(t, r));
                    l&&!p.length && (c.teardown && c.teardown.call(t, f, g.handle)!==!1 || le.removeEvent(t, d, g.handle), delete u[d])
                } else 
                    for (d in u)
                        le.event.remove(t, d + e[h], n, i, !0);
                le.isEmptyObject(u) && (delete g.handle, le._removeData(t, "events"))
            }
        },
        trigger: function(n, i, o, s) {
            var r, a, l, h, u, c, p, d = [o || V], f = re.call(n, "type") ? n.type: n, m = re.call(n, "namespace") ? n.namespace.split("."): [];
            if (l = c = o = o || V, 3 !== o.nodeType && 8 !== o.nodeType&&!Re.test(f + le.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()
                ), a = f.indexOf(":") < 0 && "on" + f, n = n[le.expando] ? n : new le.Event(f, "object" == typeof n && n), n.isTrigger=!0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : le.makeArray(i, [n]), u = le.event.special[f] || {}, s ||!u.trigger || u.trigger.apply(o, i)!==!1)) {
                if (!s&&!u.noBubble&&!le.isWindow(o)) {
                    for (h = u.delegateType || f, Re.test(h + f) 
                        || (l = l.parentNode);
                    l;
                    l = l.parentNode)d.push(l), c = l;
                    c === (o.ownerDocument || V) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (p = 0; (l = d[p++])&&!n.isPropagationStopped();)
                    n.type = p > 1 ? h : u.bindType || f, r = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"), r && r.apply(l, i), r = a && l[a], r && le.acceptData(l) && r.apply && r.apply(l, i)===!1 && n.preventDefault();
                if (n.type = f, !(s || n.isDefaultPrevented() || u._default && u._default.apply(o.ownerDocument, i)!==!1 || "click" === f && le.nodeName(o, "a") ||!le.acceptData(o) ||!a ||!o[f] || le.isWindow(o)
                    )) {
                    c = o[a], c && (o[a] = null), le.event.triggered = f;
                    try {
                        o[f]()
                    } catch (g) {}
                    le.event.triggered = e, c && (o[a] = c)
                }
                return n.result
            }
        },
        dispatch: function(t) {
            t = le.event.fix(t);
            var n, i, o, s, r, a = [], l = ie.call(arguments), h = (le._data(this, "events") || {})[t.type] || [], u = le.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t)!==!1) {
                for (a = le.event.handlers.call(this, t, h), n = 0; (s = a[n++])
                    &&!t.isPropagationStopped();
                )for (t.currentTarget = s.elem, r = 0; (o = s.handlers[r++])
                    &&!t.isImmediatePropagationStopped();
                )(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((le.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l), i !== e && (t.result = i)===!1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, n) {
            var i, o, s, r, a = [], l = n.delegateCount, h = t.target;
            if (l && h.nodeType && (!t.button || "click" !== t.type))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (h.disabled!==!0 || "click" !== t.type)) {
                        for (s = [], r = 0;
                        l > r;
                        r++)o = n[r], i = o.selector + " ", s[i] === e && (s[i] = o.needsContext ? le(i, this)
                            .index(h) >= 0 : le.find(i, this, null, [h]).length), s[i] && s.push(o);
                            s.length && a.push({
                                elem: h,
                                handlers: s
                            })
                    }
            return l < n.length && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function(t) {
            if (t[le.expando])
                return t;
            var e, n, i, o = t.type, s = t, r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = He.test(o) ? this.mouseHooks : ze.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new le.Event(s)
                , e = i.length;
            e--;
            )n = i[e], t[n] = s[n];
            return t.target || (t.target = s.srcElement || V), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey=!!t.metaKey, r.filter ? r.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var i, o, s, r = n.button, a = n.fromElement;
                return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || V, s = o.documentElement, i = o.body, t.pageX = n.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || r === e || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function() {
                    if (this !== V.activeElement && this.focus)
                        try {
                            return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = le.extend(new le.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? le.event.trigger(o, null, e) : le.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, le.removeEvent = V.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === $ && (t[i] = null), t.detachEvent(i, n))
    }, le.Event = function(t, e) {
        return this instanceof le.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue===!1 || t.getPreventDefault && t.getPreventDefault() ? l : h) : this.type = t, e && le.extend(this, e), this.timeStamp = t && t.timeStamp || le.now(), this[le.expando]=!0, void 0) : new le.Event(t, e)
    }, le.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue=!1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble=!0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, le.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        le.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, o = t.relatedTarget, s = t.handleObj;
                return (!o || o !== i&&!le.contains(i, o)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), le.support.submitBubbles || (le.event.special.submit = {
        setup: function() {
            return le.nodeName(this, "form")?!1 : (le.event.add(this, "click._submit keypress._submit", function(t) {
                var n = t.target, i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form: e;
                i&&!le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble=!0
                }), le._data(i, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode&&!t.isTrigger && le.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return le.nodeName(this, "form")?!1 : (le.event.remove(this, "._submit"), void 0)
        }
    }), le.support.changeBubbles || (le.event.special.change = {
        setup: function() {
            return Be.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed=!0)
            }), le.event.add(this, "click._change", function(t) {
                this._just_changed&&!t.isTrigger && (this._just_changed=!1), le.event.simulate("change", this, t, !0)
            })), !1) : (le.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Be.test(e.nodeName)&&!le._data(e, "changeBubbles") && (le.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || le.event.simulate("change", this.parentNode, t, !0)
                }), le._data(e, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return le.event.remove(this, "._change"), !Be.test(this.nodeName)
        }
    }), le.support.focusinBubbles || le.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = 0, i = function(t) {
            le.event.simulate(e, t.target, le.event.fix(t), !0)
        };
        le.event.special[e] = {
            setup: function() {
                0 === n++&&V.addEventListener(t, i, !0)
            },
            teardown: function() {
                0===--n && V.removeEventListener(t, i, !0)
            }
        }
    }), le.fn.extend({
        on: function(t, n, i, o, s) {
            var r, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (r in t)
                    this.on(r, n, i, t[r], s);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o===!1)
                o = h;
            else if (!o)
                return this;
            return 1 === s && (a = o, o = function(t) {
                return le().off(t), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = le.guid++)), this.each(function() {
                le.event.add(this, t, o, i, n)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, n, i) {
            var o, s;
            if (t && t.preventDefault && t.handleObj)
                return o = t.handleObj, le(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (s in t)
                    this.off(s, n, t[s]);
                return this
            }
            return (n===!1 || "function" == typeof n) && (i = n, n = e), i===!1 && (i = h), this.each(function() {
                le.event.remove(this, t, i, n)
            })
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        trigger: function(t, e) {
            return this.each(function() {
                le.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? le.event.trigger(t, e, n, !0) : void 0
        }
    }), function(t, e) {
        function n(t) {
            return fe.test(t + "")
        }
        function i() {
            var t, e = [];
            return t = function(n, i) {
                return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i
            }
        }
        function o(t) {
            return t[R]=!0, t
        }
        function s(t) {
            var e = D.createElement("div");
            try {
                return t(e)
            } catch (n) {
                return !1
            } finally {
                e = null
            }
        }
        function r(t, e, n, i) {
            var o, s, r, a, l, h, u, d, f, m;
            if ((e ? e.ownerDocument || e : U) !== D && S(e), e = e || D, n = n || [], !t || "string" != typeof t)
                return n;
            if (1 !== (a = e.nodeType) && 9 !== a)
                return [];
            if (!A&&!i) {
                if (o = me.exec(t))
                    if (r = o[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(r), !s ||!s.parentNode)
                                return n;
                                if (s.id === r)
                                    return n.push(s), n
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && z(e, s) && s.id === r)
                            return n.push(s), n
                    } else {
                        if (o[2])
                            return Y.apply(n, K.call(e.getElementsByTagName(t), 0)), n;
                            if ((r = o[3]) && j.getByClassName && e.getElementsByClassName)
                                return Y.apply(n, K.call(e.getElementsByClassName(r), 0)), n
                    }
                if (j.qsa&&!I.test(t)) {
                    if (u=!0, d = R, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()
                        ) {
                        for (h = c(t), (u = e.getAttribute("id")
                            ) ? d = u.replace(ye, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = h.length;
                        l--;
                        )h[l] = d + p(h[l]);
                        f = de.test(t) && e.parentNode || e, m = h.join(",")
                    }
                    if (m)
                        try {
                            return Y.apply(n, K.call(f.querySelectorAll(m), 0)), n
                    } catch (g) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return L(t.replace(re, "$1"), e, n, i)
        }
        function a(t, e) {
            var n = e && t, i = n && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function h(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return o(function(e) {
                return e =+ e, o(function(n, i) {
                    for (var o, s = t([], n.length, e), r = s.length; r--;)
                        n[o = s[r]] && (n[o]=!(i[o] = n[o]))
                })
            })
        }
        function c(t, e) {
            var n, i, o, s, a, l, h, u = Z[t + " "];
            if (u)
                return e ? 0 : u.slice(0);
            for (a = t, l = [], h = k.preFilter; a;) {
                (!n || (i = ae.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n=!1, (i = he.exec(a)) && (n = i.shift(), o.push({
                    value : n, type : i[0].replace(re, " ")
                }), a = a.slice(n.length));
                for (s in k.filter)
                    !(i = pe[s].exec(a)) || h[s]&&!(i = h[s](i)) || (n = i.shift(), o.push({
                        value : n, type : s, matches : i
                    }), a = a.slice(n.length));
                if (!n)
                    break
            }
            return e ? a.length : a ? r.error(t) : Z(t, l).slice(0)
        }
        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function d(t, e, n) {
            var i = e.dir, o = n && "parentNode" === i, s = G++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o)
                        return t(e, n, s)
            } : function(e, n, r) {
                var a, l, h, u = F + " " + s;
                if (r) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, r))
                            return !0
                } else 
                    for (; e = e[i];)
                        if (1 === e.nodeType || o)
                            if (h = e[R] || (e[R] = {}), (l = h[i]) && l[0] === u) {
                    if ((a = l[1])===!0 || a === w)
                        return a===!0
                } else if (l = h[i] = [u], l[1] = t(e, n, r) || w, l[1]===!0)return !0
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }
        function m(t, e, n, i, o) {
            for (var s, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(s = t[a]) 
                && (!n || n(s, i, o)) && (r.push(s), h && e.push(a));
            return r
        }
        function g(t, e, n, i, s, r) {
            return i&&!i[R] && (i = g(i)), s&&!s[R] && (s = g(s, r)), o(function(o, r, a, l) {
                var h, u, c, p = [], d = [], f = r.length, g = o || v(e || "*", a.nodeType ? [a] : a, []), _=!t ||!o && e ? g : m(g, p, t, a, l), y = n ? s || (o ? t : f || i) ? [] : r : _;
                if (n && n(_, y, a, l), i)
                    for (h = m(y, d), i(h, [], a, l)
                        , u = h.length;
                u--;
                )(c = h[u]) && (y[d[u]]=!(_[d[u]] = c));
                if (o) {
                    if (s || t) {
                        if (s) {
                            for (h = [], u = y.length;
                            u--;
                            )(c = y[u]) && h.push(_[u] = c); s(null, y = [], h, l)
                            }
                        for (u = y.length; u--;)(c = y[u]) 
                            && (h = s ? Q.call(o, c) : p[u])>-1 && (o[h]=!(r[h] = c))
                        }
                } else 
                    y = m(y === r ? y.splice(f, y.length) : y), s ? s(null, r, y, l) : Y.apply(r, y)
            })
        }
        function _(t) {
            for (var e, n, i, o = t.length, s = k.relative[t[0].type], r = s || k.relative[" "], a = s ? 1 : 0, l = d(function(t) {
                return t === e
            }, r, !0), h = d(function(t) {
                return Q.call(e, t)>-1
            }, r, !0), u = [function(t, n, i) {
                return !s && (i || n !== C) || ((e = n).nodeType ? l(t, n, i) : h(t, n, i))
            }
            ]; o > a; a++)
                if (n = k.relative[t[a].type])
                    u = [d(f(u), n)];
                else {
                    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i=++a; o > i&&!k.relative[t[i].type]; i++);
                        return g(a > 1 && f(u), a > 1 && p(t.slice(0, a-1)).replace(re, "$1"), n, i > a && _(t.slice(a, i)), o > i && _(t = t.slice(i)), o > i && p(t))
                    }
                    u.push(n)
                }
            return f(u)
        }
        function y(t, e) {
            var n = 0, i = e.length > 0, s = t.length > 0, a = function(o, a, l, h, u) {
                var c, p, d, f = [], g = 0, _ = "0", y = o && [], v = null != u, L = C, b = o || s && k.find.TAG("*", u && a.parentNode || a), x = F += null == L ? 1: Math.random() || .1;
                for (v && (C = a !== D && a, w = n); null != (c = b[_]); _++) {
                    if (s && c) {
                        for (p = 0; d = t[p++];)
                            if (d(c, a, l)) {
                                h.push(c);
                                break
                            }
                        v && (F = x, w=++n)
                    }
                    i && ((c=!d && c) && g--, o && y.push(c))
                }
                if (g += _, i && _ !== g) {
                    for (p = 0; d = e[p++];)
                        d(y, f, a, l);
                    if (o) {
                        if (g > 0)
                            for (; _--;)
                                y[_] || f[_] || (f[_] = J.call(h));
                        f = m(f)
                    }
                    Y.apply(h, f), v&&!o && f.length > 0 && g + e.length > 1 && r.uniqueSort(h)
                }
                return v && (F = x, C = L), y
            };
            return i ? o(a) : a
        }
        function v(t, e, n) {
            for (var i = 0, o = e.length; o > i; i++)
                r(t, e[i], n);
            return n
        }
        function L(t, e, n, i) {
            var o, s, r, a, l, h = c(t);
            if (!i && 1 === h.length) {
                if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && 9 === e.nodeType&&!A && k.relative[s[1].type]) {
                    if (e = k.find.ID(r.matches[0].replace(Le, be), e)[0], !e)
                        return n;
                    t = t.slice(s.shift().value.length)
                }
                for (o = pe.needsContext.test(t) ? 0 : s.length; o--&&(r = s[o], !k.relative[a = r.type]);)
                    if ((l = k.find[a]) && (i = l(r.matches[0].replace(Le, be), de.test(s[0].type) && e.parentNode || e))) {
                        if (s.splice(o, 1), t = i.length && p(s)
                            , !t)return Y.apply(n, K.call(i, 0)), n;
                            break
                    }
            }
            return T(t, h)(i, e, A, n, de.test(t)), n
        }
        function b() {}
        var x, w, k, P, E, T, M, C, S, D, N, A, I, O, B, z, H, R = "sizzle" +- new Date, U = t.document, j = {}, F = 0, G = 0, W = i(), Z = i(), q = i(), $ = typeof e, V = 1<<31, X = [], J = X.pop, Y = X.push, K = X.slice, Q = X.indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] === t)
                    return e;
            return -1
        }, te = "[\\x20\\t\\r\\n\\f]", ee = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = ee.replace("w", "w#"), ie = "([*^$|!~]?=)", oe = "\\[" + te + "*(" + ee + ")" + te + "*(?:" + ie + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + te + "*\\]", se = ":(" + ee + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)", re = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"), ae = new RegExp("^" + te + "*," + te + "*"), he = new RegExp("^" + te + "*([\\x20\\t\\r\\n\\f>+~])" + te + "*"), ue = new RegExp(se), ce = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + ee + ")"),
            CLASS: new RegExp("^\\.(" + ee + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + ee + ")['\"]?\\]"),
            TAG: new RegExp("^(" + ee.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
            needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
        }, de = /[\x20\t\r\n\f]*[+~]/, fe = /^[^{]+\{\s*\[native code/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /^(?:input|select|textarea|button)$/i, _e = /^h\d$/i, ye = /'|\\/g, ve = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Le = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, be = function(t, e) {
            var n = "0x" + e-65536;
            return n !== n ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n>>10, 56320 | 1023 & n)
        };
        try {
            K.call(U.documentElement.childNodes, 0)[0].nodeType
        } catch (xe) {
            K = function(t) {
                for (var e, n = []; e = this[t++];)
                    n.push(e);
                return n
            }
        }
        E = r.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, S = r.setDocument = function(t) {
            var i = t ? t.ownerDocument || t: U;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, N = i.documentElement, A = E(i), j.tagNameNoComments = s(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), j.attributes = s(function(t) {
                t.innerHTML = "<select></select>";
                var e = typeof t.lastChild.getAttribute("multiple");
                return "boolean" !== e && "string" !== e
            }), j.getByClassName = s(function(t) {
                return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
            }), j.getByName = s(function(t) {
                t.id = R + 0, t.innerHTML = "<a name='" + R + "'></a><div name='" + R + "'></div>", N.insertBefore(t, N.firstChild);
                var e = i.getElementsByName && i.getElementsByName(R).length === 2 + i.getElementsByName(R + 0).length;
                return j.getIdNotName=!i.getElementById(R), N.removeChild(t), e
            }), k.attrHandle = s(function(t) {
                return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== $ && "#" === t.firstChild.getAttribute("href")
            }) ? {} : {
                href: function(t) {
                    return t.getAttribute("href", 2)
                },
                type: function(t) {
                    return t.getAttribute("type")
                }
            }, j.getIdNotName ? (k.find.ID = function(t, e) {
                if (typeof e.getElementById !== $&&!A) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(t) {
                var e = t.replace(Le, be);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (k.find.ID = function(t, n) {
                if (typeof n.getElementById !== $&&!A) {
                    var i = n.getElementById(t);
                    return i ? i.id === t || typeof i.getAttributeNode !== $ && i.getAttributeNode("id").value === t ? [i] : e : []
                }
            }, k.filter.ID = function(t) {
                var e = t.replace(Le, be);
                return function(t) {
                    var n = typeof t.getAttributeNode !== $ && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), k.find.TAG = j.tagNameNoComments ? function(t, e) {
                return typeof e.getElementsByTagName !== $ ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [], o = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[o++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, k.find.NAME = j.getByName && function(t, e) {
                return typeof e.getElementsByName !== $ ? e.getElementsByName(name) : void 0
            }, k.find.CLASS = j.getByClassName && function(t, e) {
                return typeof e.getElementsByClassName === $ || A ? void 0 : e.getElementsByClassName(t)
            }, O = [], I = [":focus"], (j.qsa = n(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || I.push("\\[" + te + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || I.push(":checked")
            }), s(function(t) {
                t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && I.push("[*^$]=" + te + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (j.matchesSelector = n(B = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) {
                j.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), O.push("!=", se)
            }), I = new RegExp(I.join("|")), O = new RegExp(O.join("|")), z = n(N.contains) || N.compareDocumentPosition ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t, i = e && e.parentNode;
                return t === i ||!(!i || 1 !== i.nodeType ||!(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, H = N.compareDocumentPosition ? function(t, e) {
                var n;
                return t === e ? (M=!0, 0) : (n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & n || t.parentNode && 11 === t.parentNode.nodeType ? t === i || z(U, t)?-1 : e === i || z(U, e) ? 1 : 0 : 4 & n?-1 : 1 : t.compareDocumentPosition?-1 : 1
            } : function(t, e) {
                var n, o = 0, s = t.parentNode, r = e.parentNode, l = [t], h = [e];
                if (t === e)
                    return M=!0, 0;
                if (!s ||!r)
                    return t === i?-1 : e === i ? 1 : s?-1 : r ? 1 : 0;
                if (s === r)
                    return a(t, e);
                for (n = t; n = n.parentNode;)
                    l.unshift(n);
                for (n = e; n = n.parentNode;)
                    h.unshift(n);
                for (; l[o] === h[o];)
                    o++;
                return o ? a(l[o], h[o]) : l[o] === U?-1 : h[o] === U ? 1 : 0
            }, M=!1, [0, 0].sort(H), j.detectDuplicates = M, D) : D
        }, r.matches = function(t, e) {
            return r(t, null, null, e)
        }, r.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== D && S(t), e = e.replace(ve, "='$1']")
                , !(!j.matchesSelector || A || O && O.test(e) || I.test(e)))try {
                var n = B.call(t, e);
                if (n || j.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                    return n
            } catch (i) {}
            return r(e, D, null, [t]).length > 0
        }, r.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && S(t), z(t, e)
        }, r.attr = function(t, e) {
            var n;
            return (t.ownerDocument || t) !== D && S(t), A || (e = e.toLowerCase()), (n = k.attrHandle[e]) ? n(t) : A || j.attributes ? t.getAttribute(e) : ((n = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e]===!0 ? e : n && n.specified ? n.value : null
        }, r.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, r.uniqueSort = function(t) {
            var e, n = [], i = 1, o = 0;
            if (M=!j.detectDuplicates, t.sort(H)
                , M) {
                for (; e = t[i]; i++)
                    e === t[i-1] && (o = n.push(i));
                for (; o--;)
                    t.splice(n[o], 1)
            }
            return t
        }, P = r.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += P(t)
                    } else if (3 === o || 4 === o)
                        return t.nodeValue
            } else 
                for (; e = t[i]; i++)
                    n += P(e);
            return n
        }, k = r.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: pe,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(Le, be), t[3] = (t[4] || t[5] || "").replace(Le, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || r.error(t[0]), t[4] =+ (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =+ (t[7] + t[8] || "odd" === t[3])) : t[3] && r.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n=!t[5] && t[2];
                    return pe.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : n && ue.test(n) && (e = c(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    return "*" === t ? function() {
                        return !0
                    } : (t = t.replace(Le, be).toLowerCase(), function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    })
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + te + ")" + t + "(" + te + "|$)")) && W(t, function(t) {
                        return e.test(t.className || typeof t.getAttribute !== $ && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, n) {
                    return function(i) {
                        var o = r.attr(i, t);
                        return null == o ? "!=" === e : e ? (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n)>-1 : "$=" === e ? n && o.slice( - n.length) === n : "~=" === e ? (" " + o + " ").indexOf(n)>-1 : "|=" === e ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var s = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var h, u, c, p, d, f, m = s !== r ? "nextSibling": "previousSibling", g = e.parentNode, _ = a && e.nodeName.toLowerCase(), y=!l&&!a;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (c = e; c = c[m];)
                                        if (a ? c.nodeName.toLowerCase() === _ : 1 === c.nodeType)
                                            return !1;
                                    f = m = "only" === t&&!f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild: g.lastChild], r && y) {
                                for (u = g[R] || (g[R] = {}), h = u[t] || [], d = h[0] === F && h[1], p = h[0] === F && h[2], c = d && g.childNodes[d]; c=++d && c && c[m] || (p = d = 0) 
                                    || f.pop();
                                )if (1 === c.nodeType&&++p && c === e) {
                                    u[t] = [F, d, p];
                                    break
                                }
                            } else if (y && (h = (e[R] || (e[R] = {}))[t]) && h[0] === F)
                                p = h[1];
                            else 
                                for (; (c=++d && c && c[m] || (p = d = 0) || f.pop()) 
                                    && ((a ? c.nodeName.toLowerCase() !== _ : 1 !== c.nodeType)||!++p || (y && ((c[R] || (c[R] = {}))[t] = [F, p]), c !== e));
                            );
                            return p -= o, p === i || 0 === p%i && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var n, i = k.pseudos[t] || k.setFilters[t.toLowerCase()] || r.error("unsupported pseudo: " + t);
                    return i[R] ? i(e) : i.length > 1 ? (n = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                        for (var o, s = i(t, e), r = s.length;
                        r--;
                        )o = Q.call(t, s[r]), t[o]=!(n[o] = s[r])
                    }) : function(t) {
                        return i(t, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: o(function(t) {
                    var e = [], n = [], i = T(t.replace(re, "$1"));
                    return i[R] ? o(function(t, e, n, o) {
                        for (var s, r = i(t, null, o, []), a = t.length; a--;)(s = r[a]) 
                            && (t[a]=!(e[a] = s))
                    }) : function(t, o, s) {
                        return e[0] = t, i(e, null, s, n), !n.pop()
                    }
                }),
                has: o(function(t) {
                    return function(e) {
                        return r(t, e).length > 0
                    }
                }),
                contains: o(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || P(e)).indexOf(t)>-1
                    }
                }),
                lang: o(function(t) {
                    return ce.test(t || "") || r.error("unsupported lang: " + t), t = t.replace(Le, be).toLowerCase(), function(e) {
                        var n;
                        do 
                            if (n = A ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang)
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === N
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus())&&!!(t.type || t.href||~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled===!1
                },
                disabled: function(t) {
                    return t.disabled===!0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e&&!!t.checked || "option" === e&&!!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected===!0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !k.pseudos.empty(t)
                },
                header: function(t) {
                    return _e.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e-1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        };
        for (x in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            k.pseudos[x] = l(x);
        for (x in{
            submit: !0,
            reset: !0
        })
            k.pseudos[x] = h(x);
        T = r.compile = function(t, e) {
            var n, i = [], o = [], s = q[t + " "];
            if (!s) {
                for (e || (e = c(t)), n = e.length; n--;)
                    s = _(e[n]), s[R] ? i.push(s) : o.push(s);
                s = q(t, y(o, i))
            }
            return s
        }, k.pseudos.nth = k.pseudos.eq, k.filters = b.prototype = k.pseudos, k.setFilters = new b, S(), r.attr = le.attr, le.find = r, le.expr = r.selectors, le.expr[":"] = le.expr.pseudos, le.unique = r.uniqueSort, le.text = r.getText, le.isXMLDoc = r.isXML, le.contains = r.contains
    }(t);
    var je = /Until$/, Fe = /^(?:parents|prev(?:Until|All))/, Ge = /^.[^:#\[\.,]*$/, We = le.expr.match.needsContext, Ze = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    le.fn.extend({
        find: function(t) {
            var e, n, i, o = this.length;
            if ("string" != typeof t)
                return i = this, this.pushStack(le(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (le.contains(i[e], this))
                        return !0
            }));
            for (n = [], e = 0;
            o > e;
            e++)le.find(t, this[e], n);
            return n = this.pushStack(o > 1 ? le.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + t, n
        },
        has: function(t) {
            var e, n = le(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (le.contains(this, n[e]))
                        return !0
            })
        },
        not: function(t) {
            return this.pushStack(c(this, t, !1))
        },
        filter: function(t) {
            return this.pushStack(c(this, t, !0))
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? We.test(t) ? le(t, this.context).index(this[0]) >= 0 : le.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, s = [], r = We.test(t) || "string" != typeof t ? le(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType;) {
                    if (r ? r.index(n)>-1 : le.find.matchesSelector(n, t)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(s.length > 1 ? le.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? le.inArray(this[0], le(t)) : le.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var n = "string" == typeof t ? le(t, e): le.makeArray(t && t.nodeType ? [t] : t), i = le.merge(this.get(), n);
            return this.pushStack(le.unique(i))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), le.fn.andSelf = le.fn.addBack, le.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return le.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return le.dir(t, "parentNode", n)
        },
        next: function(t) {
            return u(t, "nextSibling")
        },
        prev: function(t) {
            return u(t, "previousSibling")
        },
        nextAll: function(t) {
            return le.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return le.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return le.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return le.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return le.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return le.sibling(t.firstChild)
        },
        contents: function(t) {
            return le.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : le.merge([], t.childNodes)
        }
    }, function(t, e) {
        le.fn[t] = function(n, i) {
            var o = le.map(this, e, n);
            return je.test(t) || (i = n), i && "string" == typeof i && (o = le.filter(i, o)), o = this.length > 1&&!Ze[t] ? le.unique(o) : o, this.length > 1 && Fe.test(t) && (o = o.reverse()), this.pushStack(o)
        }
    }), le.extend({
        filter: function(t, e, n) {
            return n && (t = ":not(" + t + ")"), 1 === e.length ? le.find.matchesSelector(e[0], t) ? [e[0]] : [] : le.find.matches(t, e)
        },
        dir: function(t, n, i) {
            for (var o = [], s = t[n]; s && 9 !== s.nodeType && (i === e || 1 !== s.nodeType ||!le(s).is(i));)
                1 === s.nodeType && o.push(s), s = s[n];
            return o
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", $e = / jQuery\d+="(?:null|\d+)"/g, Ve = new RegExp("<(?:" + qe + ")[\\s/>]", "i"), Xe = /^\s+/, Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ye = /<([\w:]+)/, Ke = /<tbody/i, Qe = /<|&#?\w+;/, tn = /<(?:script|style|link)/i, en = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, on = /^$|\/(?:java|ecma)script/i, sn = /^true\/(.*)/, rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, an = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: le.support.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    }, ln = p(V), hn = ln.appendChild(V.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, le.fn.extend({
        text: function(t) {
            return le.access(this, function(t) {
                return t === e ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function(t) {
            if (le.isFunction(t))
                return this.each(function(e) {
                    le(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = le(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return le.isFunction(t) ? this.each(function(e) {
                le(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = le(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = le.isFunction(t);
            return this.each(function(n) {
                le(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = 0; null != (n = this[i]); i++)(!t || le.filter(t, [n]).length > 0) 
                && (e || 1 !== n.nodeType || le.cleanData(v(n)), n.parentNode && (e && le.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && le.cleanData(v(t, !1)); t.firstChild;)
                    t.removeChild(t.firstChild);
                t.options && le.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t?!1 : t, e = null == e ? t : e, this.map(function() {
                return le.clone(this, t, e)
            })
        },
        html: function(t) {
            return le.access(this, function(t) {
                var n = this[0] || {}, i = 0, o = this.length;
                if (t === e)
                    return 1 === n.nodeType ? n.innerHTML.replace($e, "") : e;
                if (!("string" != typeof t || tn.test(t) ||!le.support.htmlSerialize && Ve.test(t) ||!le.support.leadingWhitespace && Xe.test(t) || an[(Ye.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Je, "<$1></$2>");
                    try {
                        for (; o > i; i++)
                            n = this[i] || {}, 1 === n.nodeType && (le.cleanData(v(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(t) {
            var e = le.isFunction(t);
            return e || "string" == typeof t || (t = le(t).not(this).detach()), this.domManip([t], !0, function(t) {
                var e = this.nextSibling, n = this.parentNode;
                n && (le(this).remove(), n.insertBefore(t, e))
            })
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, n, i) {
            t = ee.apply([], t);
            var o, s, r, a, l, h, u = 0, c = this.length, p = this, g = c-1, _ = t[0], y = le.isFunction(_);
            if (y ||!(1 >= c || "string" != typeof _ || le.support.checkClone) && nn.test(_))
                return this.each(function(o) {
                    var s = p.eq(o);
                    y && (t[0] = _.call(this, o, n ? s.html() : e)), s.domManip(t, n, i)
                });
            if (c && (h = le.buildFragment(t, this[0].ownerDocument, !1, this), o = h.firstChild, 1 === h.childNodes.length && (h = o), o)
                ) {
                for (n = n && le.nodeName(o, "tr"), a = le.map(v(h, "script")
                    , f), r = a.length;
                c > u;
                u++)s = h, u !== g && (s = le.clone(s, !0, !0), r && le.merge(a, v(s, "script"))), i.call(n && le.nodeName(this[u], "table") ? d(this[u], "tbody") : this[u], s, u);
                if (r)
                    for (l = a[a.length-1].ownerDocument, le.map(a, m)
                        , u = 0;
                r > u;
                u++)s = a[u], on.test(s.type || "")&&!le._data(s, "globalEval") && le.contains(l, s) && (s.src ? le.ajax({
                    url: s.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : le.globalEval((s.text || s.textContent || s.innerHTML || "").replace(rn, "")));
                h = o = null
            }
            return this
        }
    }), le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        le.fn[t] = function(t) {
            for (var n, i = 0, o = [], s = le(t), r = s.length-1; r >= i; i++)
                n = i === r ? this : this.clone(!0), le(s[i])[e](n), ne.apply(o, n.get());
            return this.pushStack(o)
        }
    }), le.extend({
        clone: function(t, e, n) {
            var i, o, s, r, a, l = le.contains(t.ownerDocument, t);
            if (le.support.html5Clone || le.isXMLDoc(t) ||!Ve.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (hn.innerHTML = t.outerHTML, hn.removeChild(s = hn.firstChild))
                , !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || le.isXMLDoc(t)))for (i = v(s), a = v(t)
                , r = 0;
            null != (o = a[r]);
            ++r)i[r] && y(o, i[r]);
            if (e)
                if (n)
                    for (a = a || v(t), i = i || v(s)
                        , r = 0;
            null != (o = a[r]);
            r++)_(o, i[r]);
            else 
                _(t, s);
            return i = v(s, "script"), i.length > 0 && g(i, !l && v(t, "script")), i = a = o = null, s
        },
        buildFragment: function(t, e, n, i) {
            for (var o, s, r, a, l, h, u, c = t.length, d = p(e), f = [], m = 0; c > m; m++)
                if (s = t[m], s || 0 === s)
                    if ("object" === le.type(s))
                        le.merge(f, s.nodeType ? [s] : s);
                    else if (Qe.test(s)) {
                        for (a = a || d.appendChild(e.createElement("div")), l = (Ye.exec(s) 
                            || ["", ""])[1].toLowerCase(), u = an[l] || an._default, a.innerHTML = u[1] + s.replace(Je, "<$1></$2>") + u[2], o = u[0];
                            o--;
                            )a = a.lastChild;
                            if (!le.support.leadingWhitespace && Xe.test(s) && f.push(e.createTextNode(Xe.exec(s)[0])), !le.support.tbody)
                                for (s = "table" !== l || Ke.test(s) ? "<table>" !== u[1] || Ke.test(s) ? 0 : a : a.firstChild, o = s && s.childNodes.length; o--;)
                                    le.nodeName(h = s.childNodes[o], "tbody")&&!h.childNodes.length && s.removeChild(h);
                                    for (le.merge(f, a.childNodes), a.textContent = ""; a.firstChild;)
                                        a.removeChild(a.firstChild);
                                        a = d.lastChild
                    } else 
                        f.push(e.createTextNode(s));
            for (a && d.removeChild(a), le.support.appendChecked || le.grep(v(f, "input")
                , L), m = 0;
            s = f[m++];
            )if ((!i||-1 === le.inArray(s, i)) && (r = le.contains(s.ownerDocument, s), a = v(d.appendChild(s), "script")
                , r && g(a), n))for (o = 0; s = a[o++];)
                on.test(s.type || "") && n.push(s);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var n, i, o, s, r = 0, a = le.expando, l = le.cache, h = le.support.deleteExpando, u = le.event.special; null != (n = t[r]); r++)
                if ((e || le.acceptData(n)) && (o = n[a], s = o && l[o])) {
                    if (s.events)
                        for (i in s.events)
                            u[i] ? le.event.remove(n, i) : le.removeEvent(n, i, s.handle);
                            l[o] && (delete l[o], h ? delete n[a] : typeof n.removeAttribute !== $ ? n.removeAttribute(a) : n[a] = null, Q.push(o))
                }
        }
    });
    var un, cn, pn, dn = /alpha\([^)]*\)/i, fn = /opacity\s*=\s*([^)]*)/, mn = /^(top|right|bottom|left)$/, gn = /^(none|table(?!-c[ea]).+)/, _n = /^margin/, yn = new RegExp("^(" + he + ")(.*)$", "i"), vn = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"), Ln = new RegExp("^([+-])=(" + he + ")", "i"), bn = {
        BODY: "block"
    }, xn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, wn = {
        letterSpacing: 0,
        fontWeight: 400
    }, kn = ["Top", "Right", "Bottom", "Left"], Pn = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function(t, n) {
            return le.access(this, function(t, n, i) {
                var o, s, r = {}, a = 0;
                if (le.isArray(n)) {
                    for (s = cn(t), o = n.length; o > a; a++)
                        r[n[a]] = le.css(t, n[a], !1, s);
                    return r
                }
                return i !== e ? le.style(t, n, i) : le.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return w(this, !0)
        },
        hide: function() {
            return w(this)
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : x(this)) ? le(this).show() : le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = pn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": le.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, r, a, l = le.camelCase(n), h = t.style;
                if (n = le.cssProps[l] || (le.cssProps[l] = b(h, l)), a = le.cssHooks[n] || le.cssHooks[l], i === e)
                    return a && "get"in a && (s = a.get(t, !1, o)) !== e ? s : h[n];
                if (r = typeof i, "string" === r && (s = Ln.exec(i)
                    ) && (i = (s[1] + 1) * s[2] + parseFloat(le.css(t, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (h[n] = "inherit"), a && "set"in a && (i = a.set(t, i, o)) === e)))try {
                    h[n] = i
                } catch (u) {}
            }
        },
        css: function(t, n, i, o) {
            var s, r, a, l = le.camelCase(n);
            return n = le.cssProps[l] || (le.cssProps[l] = b(t.style, l)), a = le.cssHooks[n] || le.cssHooks[l], a && "get"in a && (r = a.get(t, !0, i)), r === e && (r = pn(t, n, o)), "normal" === r && n in wn && (r = wn[n]), "" === i || i ? (s = parseFloat(r), i===!0 || le.isNumeric(s) ? s || 0 : r) : r
        },
        swap: function(t, e, n, i) {
            var o, s, r = {};
            for (s in e)
                r[s] = t.style[s], t.style[s] = e[s];
            o = n.apply(t, i || []);
            for (s in e)
                t.style[s] = r[s];
            return o
        }
    }), t.getComputedStyle ? (cn = function(e) {
        return t.getComputedStyle(e, null)
    }, pn = function(t, n, i) {
        var o, s, r, a = i || cn(t), l = a ? a.getPropertyValue(n) || a[n] : e, h = t.style;
        return a && ("" !== l || le.contains(t.ownerDocument, t) || (l = le.style(t, n)), vn.test(l) && _n.test(n) && (o = h.width, s = h.minWidth, r = h.maxWidth, h.minWidth = h.maxWidth = h.width = l, l = a.width, h.width = o, h.minWidth = s, h.maxWidth = r)), l
    }) : V.documentElement.currentStyle && (cn = function(t) {
        return t.currentStyle
    }, pn = function(t, n, i) {
        var o, s, r, a = i || cn(t), l = a ? a[n]: e, h = t.style;
        return null == l && h && h[n] && (l = h[n]), vn.test(l)&&!mn.test(n) && (o = h.left, s = t.runtimeStyle, r = s && s.left, r && (s.left = t.currentStyle.left), h.left = "fontSize" === n ? "1em" : l, l = h.pixelLeft + "px", h.left = o, r && (s.left = r)), "" === l ? "auto" : l
    }), le.each(["height", "width"], function(t, e) {
        le.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? 0 === t.offsetWidth && gn.test(le.css(t, "display")) ? le.swap(t, xn, function() {
                    return E(t, e, i)
                }) : E(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && cn(t);
                return k(t, n, i ? P(t, e, i, le.support.boxSizing && "border-box" === le.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), le.support.opacity || (le.cssHooks.opacity = {
        get: function(t, e) {
            return fn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style, i = t.currentStyle, o = le.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "", s = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === le.trim(s.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i&&!i.filter) || (n.filter = dn.test(s) ? s.replace(dn, o) : s + " " + o)
        }
    }), le(function() {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function(t, e) {
                return e ? le.swap(t, {
                    display: "inline-block"
                }, pn, [t, "marginRight"]) : void 0
            }
        }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(t, e) {
            le.cssHooks[e] = {
                get: function(t, n) {
                    return n ? (n = pn(t, e), vn.test(n) ? le(t).position()[e] + "px" : n) : void 0
                }
            }
        })
    }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 ||!le.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || le.css(t, "display"))
    }, le.expr.filters.visible = function(t) {
        return !le.expr.filters.hidden(t)
    }), le.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        le.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[t + kn[i] + e] = s[i] || s[i-2] || s[0];
                return o
            }
        }, _n.test(t) || (le.cssHooks[t + e].set = k)
    });
    var En = /%20/g, Tn = /\[\]$/, Mn = /\r?\n/g, Cn = /^(?:submit|button|image|reset|file)$/i, Sn = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function() {
            return le.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = le.prop(this, "elements");
                return t ? le.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name&&!le(this).is(":disabled") && Sn.test(this.nodeName)&&!Cn.test(t) && (this.checked ||!en.test(t))
            }).map(function(t, e) {
                var n = le(this).val();
                return null == n ? null : le.isArray(n) ? le.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Mn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Mn, "\r\n")
                }
            }).get()
        }
    }), le.param = function(t, n) {
        var i, o = [], s = function(t, e) {
            e = le.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (n === e && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(t) || t.jquery&&!le.isPlainObject(t)
            )le.each(t, function() {
            s(this.name, this.value)
        });
        else 
            for (i in t)
                C(i, t[i], n, s);
        return o.join("&").replace(En, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        le.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), le.fn.hover = function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    };
    var Dn, Nn, An = le.now(), In = /\?/, On = /#.*$/, Bn = /([?&])_=[^&]*/, zn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rn = /^(?:GET|HEAD)$/, Un = /^\/\//, jn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Fn = le.fn.load, Gn = {}, Wn = {}, Zn = "*/".concat("*");
    try {
        Nn = X.href
    } catch (qn) {
        Nn = V.createElement("a"), Nn.href = "", Nn = Nn.href
    }
    Dn = jn.exec(Nn.toLowerCase()) || [], le.fn.load = function(t, n, i) {
        if ("string" != typeof t && Fn)
            return Fn.apply(this, arguments);
        var o, s, r, a = this, l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), le.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (r = "POST"), a.length > 0 && le.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: n
        }).done(function(t) {
            s = arguments, a.html(o ? le("<div>").append(le.parseHTML(t)).find(o) : t)
        }).complete(i && function(t, e) {
            a.each(i, s || [t.responseText, e, t])
        }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        le.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), le.each(["get", "post"], function(t, n) {
        le[n] = function(t, i, o, s) {
            return le.isFunction(i) && (s = s || o, o = i, i = e), le.ajax({
                url: t,
                type: n,
                dataType: s,
                data: i,
                success: o
            })
        }
    }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Nn,
            type: "GET",
            isLocal: Hn.test(Dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? N(N(t, le.ajaxSettings), e) : N(le.ajaxSettings, t)
        },
        ajaxPrefilter: S(Gn),
        ajaxTransport: S(Wn),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var s, c, y, v, b, w = n;
                2 !== L && (L = 2, l && clearTimeout(l), u = e, a = o || "", x.readyState = t > 0 ? 4 : 0, i && (v = A(p, x, i)), t >= 200 && 300 > t || 304 === t ? (p.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (le.lastModified[r] = b), b = x.getResponseHeader("etag"), b && (le.etag[r] = b)), 204 === t ? (s=!0, w = "nocontent") : 304 === t ? (s=!0, w = "notmodified") : (s = I(p, v), w = s.state, c = s.data, y = s.error, s=!y)) : (y = w, (t ||!w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || w) + "", s ? m.resolveWith(d, [c, w, x]) : m.rejectWith(d, [x, w, y]), x.statusCode(_), _ = e, h && f.trigger(s ? "ajaxSuccess" : "ajaxError", [x, p, s ? c: y]), g.fireWith(d, [x, w]), h && (f.trigger("ajaxComplete", [x, p]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var o, s, r, a, l, h, u, c, p = le.ajaxSetup({}, n), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? le(d): le.event, m = le.Deferred(), g = le.Callbacks("once memory"), _ = p.statusCode || {}, y = {}, v = {}, L = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === L) {
                        if (!c)
                            for (c = {}; e = zn.exec(a);)
                                c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === L ? a : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return L || (t = v[n] = v[n] || t, y[t] = e), this
                },
                overrideMimeType: function(t) {
                    return L || (p.mimeType = t), this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > L)
                            for (e in t)
                                _[e] = [_[e], t[e]];
                        else 
                            x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || b;
                    return u && u.abort(e), i(0, e), this
                }
            };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || Nn) + "").replace(On, "").replace(Un, Dn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(ue) || [""], null == p.crossDomain && (o = jn.exec(p.url.toLowerCase()), p.crossDomain=!(!o || o[1] === Dn[1] && o[2] === Dn[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == (Dn[3] || ("http:" === Dn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)), D(Gn, p, n, x), 2 === L)return x;
            h = p.global, h && 0 === le.active++&&le.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent=!Rn.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (In.test(r) ? "&" : "?") + p.data, delete p.data), p.cache===!1 && (p.url = Bn.test(r) ? r.replace(Bn, "$1_=" + An++) : r + (In.test(r) ? "&" : "?") + "_=" + An++)), p.ifModified && (le.lastModified[r] && x.setRequestHeader("If-Modified-Since", le.lastModified[r]), le.etag[r] && x.setRequestHeader("If-None-Match", le.etag[r])), (p.data && p.hasContent && p.contentType!==!1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Zn + "; q=0.01" : "") : p.accepts["*"]);
            for (s in p.headers)
                x.setRequestHeader(s, p.headers[s]);
            if (p.beforeSend && (p.beforeSend.call(d, x, p)===!1 || 2 === L))
                return x.abort();
            b = "abort";
            for (s in{
                success: 1,
                error: 1,
                complete: 1
            })
                x[s](p[s]);
            if (u = D(Wn, p, n, x)) {
                x.readyState = 1, h && f.trigger("ajaxSend", [x, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    L = 1, u.send(y, i)
                } catch (w) {
                    if (!(2 > L))
                        throw w;
                    i(-1, w)
                }
            } else 
                i(-1, "No Transport");
            return x
        },
        getScript: function(t, n) {
            return le.get(t, e, n, "script")
        },
        getJSON: function(t, e, n) {
            return le.get(t, e, n, "json")
        }
    }), le.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return le.globalEval(t), t
            }
        }
    }), le.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache=!1), t.crossDomain && (t.type = "GET", t.global=!1)
    }), le.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = V.head || le("head")[0] || V.documentElement;
            return {
                send: function(e, o) {
                    n = V.createElement("script"), n.async=!0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                        (e ||!n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var $n = [], Vn = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = $n.pop() || le.expando + "_" + An++;
            return this[t]=!0, t
        }
    }), le.ajaxPrefilter("json jsonp", function(n, i, o) {
        var s, r, a, l = n.jsonp!==!1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data&&!(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vn, "$1" + s) : n.jsonp!==!1 && (n.url += (In.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return a || le.error(s + " was not called"), a[0]
        }, n.dataTypes[0] = "json", r = t[s], t[s] = function() {
            a = arguments
        }, o.always(function() {
            t[s] = r, n[s] && (n.jsonpCallback = i.jsonpCallback, $n.push(s)), a && le.isFunction(r) && r(a[0]), a = r = e
        }), "script") : void 0
    });
    var Xn, Jn, Yn = 0, Kn = t.ActiveXObject && function() {
        var t;
        for (t in Xn)
            Xn[t](e, !0)
    };
    le.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && O() || B()
    } : O, Jn = le.ajaxSettings.xhr(), le.support.cors=!!Jn && "withCredentials"in Jn, Jn = le.support.ajax=!!Jn, Jn && le.ajaxTransport(function(n) {
        if (!n.crossDomain || le.support.cors) {
            var i;
            return {
                send: function(o, s) {
                    var r, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields)
                            l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in o)
                            l.setRequestHeader(a, o[a])
                    } catch (h) {}
                    l.send(n.hasContent && n.data || null), i = function(t, o) {
                        var a, h, u, c;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = e, r && (l.onreadystatechange = le.noop, Kn && delete Xn[r])
                                    , o)4 !== l.readyState && l.abort();
                            else {
                                c = {}, a = l.status, h = l.getAllResponseHeaders(), "string" == typeof l.responseText && (c.text = l.responseText);
                                try {
                                    u = l.statusText
                                } catch (p) {
                                    u = ""
                                }
                                a ||!n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        } catch (d) {
                            o || s(-1, d)
                        }
                        c && s(a, u, c, h)
                    }, n.async ? 4 === l.readyState ? setTimeout(i) : (r=++Yn, Kn && (Xn || (Xn = {}, le(t).unload(Kn)), Xn[r] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(e, !0)
                }
            }
        }
    });
    var Qn, ti, ei = /^(?:toggle|show|hide)$/, ni = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"), ii = /queueHooks$/, oi = [j], si = {
        "*": [function(t, e) {
            var n, i, o = this.createTween(t, e), s = ni.exec(e), r = o.cur(), a =+ r || 0, l = 1, h = 20;
            if (s) {
                if (n =+ s[2], i = s[3] || (le.cssNumber[t] ? "" : "px")
                    , "px" !== i && a) {
                    a = le.css(o.elem, t, !0) || n || 1;
                    do 
                        l = l || ".5", a/=l, le.style(o.elem, t, a + i);
                    while (l !== (l = o.cur() / r) && 1 !== l&&--h)
                    }
                o.unit = i, o.start = a, o.end = s[1] ? a + (s[1] + 1) * n : n
            }
            return o
        }
        ]
    };
    le.Animation = le.extend(R, {
        tweener: function(t, e) {
            le.isFunction(t) ? (e = t, t = ["*"]): t = t.split(" ");
            for (var n,
            i = 0,
            o = t.length;
            o > i;
            i++)n = t[i],
            si[n] = si[n] || [],
            si[n].unshift(e)
        }, prefilter : function(t, e) {
            e ? oi.unshift(t) : oi.push(t)
        }
    }), le.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, n, i, o, s) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (le.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.pos = e = this.options.duration ? le.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = le.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                le.fx.step[t.prop] ? le.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[le.cssProps[t.prop]] || le.cssHooks[t.prop]) ? le.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, le.each(["toggle", "show", "hide"], function(t, e) {
        var n = le.fn[e];
        le.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(G(e, !0), t, i, o)
        }
    }), le.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = le.isEmptyObject(t), s = le.speed(e, n, i), r = function() {
                var e = R(this, le.extend({}, t), s);
                r.finish = function() {
                    e.stop(!0)
                }, (o || le._data(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, o || s.queue===!1 ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(t, n, i) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t!==!1 && this.queue(t || "fx", []), this.each(function() {
                var e=!0, n = null != t && t + "queueHooks", s = le.timers, r = le._data(this);
                if (n)
                    r[n] && r[n].stop && o(r[n]);
                else 
                    for (n in r)
                        r[n] && r[n].stop && ii.test(n) && o(r[n]);
                for (n = s.length; n--;)
                    s[n].elem !== this || null != t && s[n].queue !== t || (s[n].anim.stop(i), e=!1, s.splice(n, 1));
                (e ||!i) && le.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t!==!1 && (t = t || "fx"), this.each(function() {
                var e, n = le._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], s = le.timers, r = i ? i.length: 0;
                for (n.finish=!0, le.queue(this, t, [])
                    , o && o.cur && o.cur.finish && o.cur.finish.call(this), e = s.length;
                e--;
                )s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; r > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), le.each({
        slideDown: G("show"),
        slideUp: G("hide"),
        slideToggle: G("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        le.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), le.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? le.extend({}, t): {
            complete: n ||!n && e || le.isFunction(t) && t,
            duration: t,
            easing: n && e || e&&!le.isFunction(e) && e
        };
        return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, (null == i.queue || i.queue===!0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
        }, i
    }, le.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, le.timers = [], le.fx = F.prototype.init, le.fx.tick = function() {
        var t, n = le.timers, i = 0;
        for (Qn = le.now(); i < n.length; i++)
            t = n[i], t() || n[i] !== t || n.splice(i--, 1);
        n.length || le.fx.stop(), Qn = e
    }, le.fx.timer = function(t) {
        t() && le.timers.push(t) && le.fx.start()
    }, le.fx.interval = 13, le.fx.start = function() {
        ti || (ti = setInterval(le.fx.tick, le.fx.interval))
    }, le.fx.stop = function() {
        clearInterval(ti), ti = null
    }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(t) {
        return le.grep(le.timers, function(e) {
            return t === e.elem
        }).length
    }), le.fn.offset = function(t) {
        if (arguments.length)
            return t === e ? this : this.each(function(e) {
                le.offset.setOffset(this, t, e)
            });
        var n, i, o = {
            top: 0,
            left: 0
        }, s = this[0], r = s && s.ownerDocument;
        if (r)
            return n = r.documentElement, le.contains(n, s) ? (typeof s.getBoundingClientRect !== $ && (o = s.getBoundingClientRect()), i = W(r), {
            top : o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, le.offset = {
        setOffset: function(t, e, n) {
            var i = le.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var o, s, r = le(t), a = r.offset(), l = le.css(t, "top"), h = le.css(t, "left"), u = ("absolute" === i || "fixed" === i) && le.inArray("auto", [l, h])>-1, c = {}, p = {};
            u ? (p = r.position(), o = p.top, s = p.left) : (o = parseFloat(l) || 0, s = parseFloat(h) || 0), le.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (c.top = e.top - a.top + o), null != e.left && (c.left = e.left - a.left + s), "using"in e ? e.using.call(t, c) : r.css(c)
        }
    }, le.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === le.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), le.nodeName(t[0], "html") || (n = t.offset()), n.top += le.css(t[0], "borderTopWidth", !0), n.left += le.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - le.css(i, "marginTop", !0), left: e.left - n.left - le.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || V.documentElement; t&&!le.nodeName(t, "html") && "static" === le.css(t, "position");)
                    t = t.offsetParent;
                return t || V.documentElement
            })
        }
    }), le.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        le.fn[t] = function(o) {
            return le.access(this, function(t, o, s) {
                var r = W(t);
                return s === e ? r ? n in r ? r[n] : r.document.documentElement[o] : t[o] : (r ? r.scrollTo(i ? le(r).scrollLeft() : s, i ? s : le(r).scrollTop()) : t[o] = s, void 0)
            }, t, o, arguments.length, null)
        }
    }), le.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        le.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, o) {
            le.fn[o] = function(o, s) {
                var r = arguments.length && (i || "boolean" != typeof o), a = i || (o===!0 || s===!0 ? "margin" : "border");
                return le.access(this, function(n, i, o) {
                    var s;
                    return le.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + t], s["scroll" + t], n.body["offset" + t], s["offset" + t], s["client" + t])) : o === e ? le.css(n, i, a) : le.style(n, i, o, a)
                }, n, r ? o : e, r, null)
            }
        })
    }), t.jQuery = t.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return le
    })
}(window), function(t, e) {
    var n = function() {
        var e = t._data(document, "events");
        return e && e.click && t.grep(e.click, function(t) {
            return "rails" === t.namespace
        }).length
    };
    n() && t.error("jquery-ujs has already been loaded!");
    var i;
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(e, n, i) {
            var o = t.Event(n);
            return e.trigger(o, i), o.result!==!1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(n) {
            var o, s, r, a, l, h, u, c;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null : a, h = n.data("with-credentials") || null, u = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    o = n.attr("method"), s = n.attr("action"), r = n.serializeArray();
                    var p = n.data("ujs:submit-button");
                    p && (r.push(p), n.data("ujs:submit-button", null))
                } else 
                    n.is(i.inputChangeSelector) ? (o = n.data("method"), s = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (o = n.data("method"), s = i.href(n), r = n.data("params") || null);
                c = {
                    type: o || "GET",
                    data: r,
                    dataType: u,
                    beforeSend: function(t, o) {
                        return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), i.fire(n, "ajax:beforeSend", [t, o])
                    },
                    success: function(t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function(t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                }, h && (c.xhrFields = {
                    withCredentials: h
                }), s && (c.url = s);
                var d = i.ajax(c);
                return n.trigger("ajax:send", d), d
            }
            return !1
        },
        handleMethod: function(n) {
            var o = i.href(n), s = n.data("method"), r = n.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), h = t('<form method="post" action="' + o + '"></form>'), u = '<input name="_method" value="' + s + '" type="hidden" />';
            l !== e && a !== e && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && h.attr("target", r), h.hide().append(u).appendTo("body"), h.submit()
        },
        disableFormElements: function(e) {
            e.find(i.disableSelector).each(function() {
                var e = t(this), n = e.is("button") ? "html": "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(i.enableSelector).each(function() {
                var e = t(this), n = e.is("button") ? "html": "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"), o=!1;
            return n ? (i.fire(t, "confirm") && (o = i.confirm(n), e = i.fire(t, "confirm:complete", [o])), o && e) : !0
        },
        blankInputs: function(e, n, i) {
            var o, s, r = t(), a = n || "input,textarea", l = e.find(a);
            return l.each(function() {
                if (o = t(this), s = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked"): o.val()
                    , !s==!i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length)
                        return !0;
                    r = r.add(o)
                }
            }), r.length ? r : !1
        },
        nonBlankInputs: function(t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, i) {
            var o = n.data("events"), s=!0;
            return o !== e && o.submit !== e && t.each(o.submit, function(t, e) {
                return "function" == typeof e.handler ? s = e.handler(i) : void 0
            }), s
        },
        disableElement: function(t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.data("ujs:enable-with", !1)), t.unbind("click.railsDisable")
        }
    }, i.fire(t(document), "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), t(document).delegate(i.linkDisableSelector, "ajax:complete", function() {
        i.enableElement(t(this))
    }), t(document).delegate(i.linkClickSelector, "click.rails", function(n) {
        var o = t(this), s = o.data("method"), r = o.data("params");
        if (!i.allowAction(o))
            return i.stopEverything(n);
        if (o.is(i.linkDisableSelector) && i.disableElement(o), o.data("remote") !== e) {
            if (!(!n.metaKey&&!n.ctrlKey || s && "GET" !== s || r))
                return !0;
            var a = i.handleRemote(o);
            return a===!1 ? i.enableElement(o) : a.error(function() {
                i.enableElement(o)
            }), !1
        }
        return o.data("method") ? (i.handleMethod(o), !1) : void 0
    }), t(document).delegate(i.inputChangeSelector, "change.rails", function(e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), t(document).delegate(i.formSubmitSelector, "submit.rails", function(n) {
        var o = t(this), s = o.data("remote") !== e, r = i.blankInputs(o, i.requiredInputSelector), a = i.nonBlankInputs(o, i.fileInputSelector);
        if (!i.allowAction(o))
            return i.stopEverything(n);
        if (r && o.attr("novalidate") == e && i.fire(o, "ajax:aborted:required", [r]))
            return i.stopEverything(n);
        if (s) {
            if (a) {
                setTimeout(function() {
                    i.disableFormElements(o)
                }, 13);
                var l = i.fire(o, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    i.enableFormElements(o)
                }, 13), l
            }
            return !t.support.submitBubbles && t().jquery < "1.7" && i.callFormSubmitBindings(o, n)===!1 ? i.stopEverything(n) : (i.handleRemote(o), !1)
        }
        setTimeout(function() {
            i.disableFormElements(o)
        }, 13)
    }), t(document).delegate(i.formInputClickSelector, "click.rails", function(e) {
        var n = t(this);
        if (!i.allowAction(n))
            return i.stopEverything(e);
        var o = n.attr("name"), s = o ? {
            name: o,
            value: n.val()
        }
        : null;
        n.closest("form").data("ujs:submit-button", s)
    }), t(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && i.disableFormElements(t(this))
    }), t(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function() {
        var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + n + '"]').val(e)
    }))
}(jQuery), function() {
    var t, e, n, i, o, s, r, a, l, h, u, c, p, d, f, m, g, _, y, v, L, b, x, w, k, P, E, T, M, C, S, D, N, A, I, O, B, z, H, R, U, j, F, G, W, Z, q, $ = {}.hasOwnProperty, V = [].indexOf || function(t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (e in this && this[e] === t)
                return e;
        return -1
    };
    b=!1, c = null, D = document.location.href, P = null, C = {}, h = null, R = (null != (q = document.cookie.match(/request_method=(\w+)/)) ? q[1].toUpperCase() : void 0) || "", Z = null, W = function(t) {
        return s && o ? (r(), N(t), _(t)) : document.location.href = t
    }, _ = function(t) {
        var e;
        return G("page:fetch"), e = z(t), null != Z && Z.abort(), Z = new XMLHttpRequest, Z.open("GET", e, !0), Z.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), Z.setRequestHeader("X-XHR-Referer", D), Z.onload = function() {
            var t;
            return G("page:receive"), k(Z) || n(t = h(Z.responseText)) ? document.location.reload() : (a.apply(null, f(t)), A(Z), document.location.hash ? document.location.href = document.location.href : j(), G("page:load"))
        }, Z.onloadend = function() {
            return Z = null
        }, Z.onabort = function() {
            return O()
        }, Z.onerror = function() {
            return document.location.href = t
        }, Z.send()
    }, g = function(t) {
        var e;
        return r(), (e = C[t.position]) ? (null != Z && Z.abort(), a(e.title, e.body), S(e), G("page:restore")) : _(document.location.href)
    }, r = function() {
        return B(), C[c.position] = {
            url: document.location.href,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset
        }, l(10)
    }, l = function(t) {
        var e, n;
        for (e in C)
            $.call(C, e) && (n = C[e], e <= c.position - t && (C[e] = null))
    }, a = function(e, n, i, o) {
        return document.title = e, document.documentElement.replaceChild(n, document.body), null != i && t.update(i), H(), o && p(), c = window.history.state, G("page:change")
    }, p = function() {
        var t, e, n, i, o, s, r, a, l, h, u, c;
        for (s = Array.prototype.slice.call(document.body.getElementsByTagName("script")), r = 0, l = s.length; l > r; r++)
            if (o = s[r], "" === (u = o.type) || "text/javascript" === u) {
            for (e = document.createElement("script"), c = o.attributes, a = 0, h = c.length; h > a; a++)
                t = c[a], e.setAttribute(t.name, t.value);
            e.appendChild(document.createTextNode(o.innerHTML)), i = o.parentNode, n = o.nextSibling, i.removeChild(o), i.insertBefore(e, n)
        }
    }, H = function() {
        var t, e, n, i;
        for (e = Array.prototype.slice.call(document.body.getElementsByTagName("noscript")), n = 0, i = e.length; i > n; n++)
            t = e[n], t.parentNode.removeChild(t)
    }, N = function(t) {
        return t !== document.location.href ? (D = document.location.href, window.history.pushState({
            turbolinks : !0, position : c.position + 1
        }, "", t)) : void 0
    }, A = function(t) {
        var e;
        return (e = t.getResponseHeader("X-XHR-Current-Location")) && e !== document.location.pathname + document.location.search ? window.history.replaceState(c, "", e + document.location.hash) : void 0
    }, O = function() {
        return window.history.replaceState({
            turbolinks: !0,
            position: Date.now()
        }, "", document.location.href)
    }, I = function() {
        return c = window.history.state
    }, B = function() {
        return b ? void 0 : (O(), I(), h = i(), b=!0)
    }, S = function(t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, j = function() {
        return window.scrollTo(0, 0)
    }, z = function(t) {
        var e;
        return e = t, null == t.href && (e = document.createElement("A"), e.href = t), e.href.replace(e.hash, "")
    }, G = function(t) {
        var e;
        return e = document.createEvent("Events"), e.initEvent(t, !0, !0), document.dispatchEvent(e)
    }, k = function(t) {
        return !t.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
    }, m = function(t) {
        var e, n, i, o, s;
        for (o = t.head.childNodes, s = [], n = 0, i = o.length; i > n; n++)
            e = o[n], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && s.push(e.src || e.href);
        return s
    }, n = function(t) {
        var e;
        return P || (P = m(document)), e = m(t), e.length !== P.length || w(e, P).length !== P.length
    }, w = function(t, e) {
        var n, i, o, s, r;
        for (t.length > e.length && (s = [e, t], t = s[0], e = s[1]), r = [], i = 0, o = t.length; o > i; i++)
            n = t[i], V.call(e, n) >= 0 && r.push(n);
        return r
    }, f = function(e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent: void 0, e.body, t.get(e).token, "runScripts"]
    }, t = {
        get: function(t) {
            var e;
            return null == t && (t = document), {
                node: e = t.querySelector('meta[name="csrf-token"]'), token: null != e ? "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0 : void 0
            }
        },
        update: function(t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, i = function() {
        var t, e, n, i, o, s;
        e = function(t) {
            return (new DOMParser).parseFromString(t, "text/html")
        }, t = function(t) {
            var e;
            return e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, e
        }, n = function(t) {
            var e;
            return e = document.implementation.createHTMLDocument(""), e.open("replace"), e.write(t), e.close(), e
        };
        try {
            if (window.DOMParser)
                return o = e("<html><body><p>test"), e
        } catch (r) {
            return i = r, o = t("<html><body><p>test"), t
        } finally {
            if (1 !== (null != o ? null != (s = o.body) ? s.childNodes.length : void 0 : void 0))
                return n
        }
    }, x = function(t) {
        return t.defaultPrevented ? void 0 : (document.removeEventListener("click", y, !1), document.addEventListener("click", y, !1))
    }, y = function(t) {
        var e;
        return t.defaultPrevented || (e = d(t), "A" !== e.nodeName || v(t, e)) ? void 0 : (W(e.href), t.preventDefault())
    }, d = function(t) {
        var e;
        for (e = t.target; e.parentNode && "A" !== e.nodeName;)
            e = e.parentNode;
        return e
    }, u = function(t) {
        return location.protocol !== t.protocol || location.host !== t.host
    }, e = function(t) {
        return (t.hash && z(t)) === z(location) || t.href === location.href + "#"
    }, T = function(t) {
        var e;
        return e = z(t), e.match(/\.[a-z]+(\?.*)?$/g)&&!e.match(/\.html?(\?.*)?$/g)
    }, E = function(t) {
        for (var e; !e && t !== document;)
            e = null != t.getAttribute("data-no-turbolink"), t = t.parentNode;
        return e
    }, F = function(t) {
        return 0 !== t.target.length
    }, M = function(t) {
        return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
    }, v = function(t, n) {
        return u(n) || e(n) || T(n) || E(n) || F(n) || M(t)
    }, L = function() {
        return document.addEventListener("click", x, !0), window.addEventListener("popstate", function(t) {
            var e;
            return (null != (e = t.state) ? e.turbolinks : void 0) ? g(t.state) : void 0
        }, !1)
    }, s = window.history && window.history.pushState && window.history.replaceState && void 0 !== window.history.state, o=!navigator.userAgent.match(/CriOS\//), U = "GET" === R || "" === R, s && o && U && L(), this.Turbolinks = {
        visit: W
    }
}.call(this);
var Handlebars = {};
!function(t, e) {
    t.VERSION = "1.0.0-rc.4", t.COMPILER_REVISION = 3, t.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: ">= 1.0.0-rc.4"
    }, t.helpers = {}, t.partials = {};
    var n = Object.prototype.toString, i = "[object Function]", o = "[object Object]";
    t.registerHelper = function(e, i, s) {
        if (n.call(e) === o) {
            if (s || i)
                throw new t.Exception("Arg not supported with multiple helpers");
            t.Utils.extend(this.helpers, e)
        } else 
            s && (i.not = s), this.helpers[e] = i
    }, t.registerPartial = function(e, i) {
        n.call(e) === o ? t.Utils.extend(this.partials, e) : this.partials[e] = i
    }, t.registerHelper("helperMissing", function(t) {
        if (2 === arguments.length)
            return e;
        throw new Error("Could not find property '" + t + "'")
    }), t.registerHelper("blockHelperMissing", function(e, o) {
        var s = o.inverse || function() {}, r = o.fn, a = n.call(e);
        return a === i && (e = e.call(this)), e===!0 ? r(this) : e===!1 || null == e ? s(this) : "[object Array]" === a ? e.length > 0 ? t.helpers.each(e, o) : s(this) : r(e)
    }), t.K = function() {}, t.createFrame = Object.create || function(e) {
        t.K.prototype = e;
        var n = new t.K;
        return t.K.prototype = null, n
    }, t.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function(e, n) {
            if (t.logger.level <= e) {
                var i = t.logger.methodMap[e];
                "undefined" != typeof console && console[i] && console[i].call(console, n)
            }
        }
    }, t.log = function(e, n) {
        t.logger.log(e, n)
    }, t.registerHelper("each", function(e, n) {
        var i, o = n.fn, s = n.inverse, r = 0, a = "";
        if (n.data && (i = t.createFrame(n.data)), e && "object" == typeof e)
            if (e instanceof Array)
                for (var l = e.length; l > r; r++)
                    i && (i.index = r), a += o(e[r], {
            data: i
        });
        else 
            for (var h in e)
                e.hasOwnProperty(h) && (i && (i.key = h), a += o(e[h], {
                    data : i
                }), r++);
        return 0 === r && (a = s(this)), a
    }), t.registerHelper("if", function(e, o) {
        var s = n.call(e);
        return s === i && (e = e.call(this)), !e || t.Utils.isEmpty(e) ? o.inverse(this) : o.fn(this)
    }), t.registerHelper("unless", function(e, n) {
        return t.helpers["if"].call(this, e, {
            fn: n.inverse,
            inverse: n.fn
        })
    }), t.registerHelper("with", function(e, n) {
        return t.Utils.isEmpty(e) ? void 0 : n.fn(e)
    }), t.registerHelper("log", function(e, n) {
        var i = n.data && null != n.data.level ? parseInt(n.data.level, 10): 1;
        t.log(i, e)
    });
    var s = function() {
        function t() {
            this.yy = {}
        }
        var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                simpleInverse: 6,
                statements: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                OPEN_PARTIAL: 24,
                partialName: 25,
                params: 26,
                hash: 27,
                DATA: 28,
                param: 29,
                STRING: 30,
                INTEGER: 31,
                BOOLEAN: 32,
                hashSegments: 33,
                hashSegment: 34,
                ID: 35,
                EQUALS: 36,
                PARTIAL_NAME: 37,
                pathSegments: 38,
                SEP: 39,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "OPEN_PARTIAL",
                28: "DATA",
                30: "STRING",
                31: "INTEGER",
                32: "BOOLEAN",
                35: "ID",
                36: "EQUALS",
                37: "PARTIAL_NAME",
                39: "SEP"
            },
            productions_: [0, [3, 2], [4, 2], [4, 3], [4, 2], [4, 1], [4, 1], [4, 0], [7, 1], [7, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [6, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [26, 2], [26, 1], [29, 1], [29, 1], [29, 1], [29, 1], [29, 1], [27, 1], [33, 2], [33, 1], [34, 3], [34, 3], [34, 3], [34, 3], [34, 3], [25, 1], [21, 1], [38, 3], [38, 1]],
            performAction: function(t, e, n, i, o, s) {
                var r = s.length-1;
                switch (o) {
                case 1:
                    return s[r-1];
                case 2:
                    this.$ = new i.ProgramNode([], s[r]);
                    break;
                case 3:
                    this.$ = new i.ProgramNode(s[r-2], s[r]);
                    break;
                case 4:
                    this.$ = new i.ProgramNode(s[r-1], []);
                    break;
                case 5:
                    this.$ = new i.ProgramNode(s[r]);
                    break;
                case 6:
                    this.$ = new i.ProgramNode([], []);
                    break;
                case 7:
                    this.$ = new i.ProgramNode([]);
                    break;
                case 8:
                    this.$ = [s[r]];
                    break;
                case 9:
                    s[r-1].push(s[r]), this.$ = s[r-1];
                    break;
                case 10:
                    this.$ = new i.BlockNode(s[r-2], s[r-1].inverse, s[r-1], s[r]);
                    break;
                case 11:
                    this.$ = new i.BlockNode(s[r-2], s[r-1], s[r-1].inverse, s[r]);
                    break;
                case 12:
                    this.$ = s[r];
                    break;
                case 13:
                    this.$ = s[r];
                    break;
                case 14:
                    this.$ = new i.ContentNode(s[r]);
                    break;
                case 15:
                    this.$ = new i.CommentNode(s[r]);
                    break;
                case 16:
                    this.$ = new i.MustacheNode(s[r-1][0], s[r-1][1]);
                    break;
                case 17:
                    this.$ = new i.MustacheNode(s[r-1][0], s[r-1][1]);
                    break;
                case 18:
                    this.$ = s[r-1];
                    break;
                case 19:
                    this.$ = new i.MustacheNode(s[r-1][0], s[r-1][1]);
                    break;
                case 20:
                    this.$ = new i.MustacheNode(s[r-1][0], s[r-1][1], !0);
                    break;
                case 21:
                    this.$ = new i.PartialNode(s[r-1]);
                    break;
                case 22:
                    this.$ = new i.PartialNode(s[r-2], s[r-1]);
                    break;
                case 23:
                    break;
                case 24:
                    this.$ = [[s[r-2]].concat(s[r-1]), s[r]];
                    break;
                case 25:
                    this.$ = [[s[r-1]].concat(s[r]), null];
                    break;
                case 26:
                    this.$ = [[s[r-1]], s[r]];
                    break;
                case 27:
                    this.$ = [[s[r]], null];
                    break;
                case 28:
                    this.$ = [[new i.DataNode(s[r])], null];
                    break;
                case 29:
                    s[r-1].push(s[r]), this.$ = s[r-1];
                    break;
                case 30:
                    this.$ = [s[r]];
                    break;
                case 31:
                    this.$ = s[r];
                    break;
                case 32:
                    this.$ = new i.StringNode(s[r]);
                    break;
                case 33:
                    this.$ = new i.IntegerNode(s[r]);
                    break;
                case 34:
                    this.$ = new i.BooleanNode(s[r]);
                    break;
                case 35:
                    this.$ = new i.DataNode(s[r]);
                    break;
                case 36:
                    this.$ = new i.HashNode(s[r]);
                    break;
                case 37:
                    s[r-1].push(s[r]), this.$ = s[r-1];
                    break;
                case 38:
                    this.$ = [s[r]];
                    break;
                case 39:
                    this.$ = [s[r-2], s[r]];
                    break;
                case 40:
                    this.$ = [s[r-2], new i.StringNode(s[r])];
                    break;
                case 41:
                    this.$ = [s[r-2], new i.IntegerNode(s[r])];
                    break;
                case 42:
                    this.$ = [s[r-2], new i.BooleanNode(s[r])];
                    break;
                case 43:
                    this.$ = [s[r-2], new i.DataNode(s[r])];
                    break;
                case 44:
                    this.$ = new i.PartialNameNode(s[r]);
                    break;
                case 45:
                    this.$ = new i.IdNode(s[r]);
                    break;
                case 46:
                    s[r-2].push(s[r]), this.$ = s[r-2];
                    break;
                case 47:
                    this.$ = [s[r]]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 7],
                6: 3,
                7: 4,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                1: [3]
            }, {
                5: [1, 17]
            }, {
                5: [2, 6],
                7: 18,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 6],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                5: [2, 5],
                6: 20,
                8: 21,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                20: [2, 5],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                17: 23,
                18: [1, 22],
                21: 24,
                28: [1, 25],
                35: [1, 27],
                38: 26
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                24: [2, 8]
            }, {
                4: 28,
                6: 3,
                7: 4,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                20: [2, 7],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                4: 29,
                6: 3,
                7: 4,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                20: [2, 7],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                24: [2, 12]
            }, {
                5: [2, 13],
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                24: [2, 13]
            }, {
                5: [2, 14],
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                24: [2, 14]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                24: [2, 15]
            }, {
                17: 30,
                21: 24,
                28: [1, 25],
                35: [1, 27],
                38: 26
            }, {
                17: 31,
                21: 24,
                28: [1, 25],
                35: [1, 27],
                38: 26
            }, {
                17: 32,
                21: 24,
                28: [1, 25],
                35: [1, 27],
                38: 26
            }, {
                25: 33,
                37: [1, 34]
            }, {
                1: [2, 1]
            }, {
                5: [2, 2],
                8: 21,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 2],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                17: 23,
                21: 24,
                28: [1, 25],
                35: [1, 27],
                38: 26
            }, {
                5: [2, 4],
                7: 35,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 4],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                24: [2, 9]
            }, {
                5: [2, 23],
                14: [2, 23],
                15: [2, 23],
                16: [2, 23],
                19: [2, 23],
                20: [2, 23],
                22: [2, 23],
                23: [2, 23],
                24: [2, 23]
            }, {
                18: [1, 36]
            }, {
                18: [2, 27],
                21: 41,
                26: 37,
                27: 38,
                28: [1, 45],
                29: 39,
                30: [1, 42],
                31: [1, 43],
                32: [1, 44],
                33: 40,
                34: 46,
                35: [1, 47],
                38: 26
            }, {
                18: [2, 28]
            }, {
                18: [2, 45],
                28: [2, 45],
                30: [2, 45],
                31: [2, 45],
                32: [2, 45],
                35: [2, 45],
                39: [1, 48]
            }, {
                18: [2, 47],
                28: [2, 47],
                30: [2, 47],
                31: [2, 47],
                32: [2, 47],
                35: [2, 47],
                39: [2, 47]
            }, {
                10: 49,
                20: [1, 50]
            }, {
                10: 51,
                20: [1, 50]
            }, {
                18: [1, 52]
            }, {
                18: [1, 53]
            }, {
                18: [1, 54]
            }, {
                18: [1, 55],
                21: 56,
                35: [1, 27],
                38: 26
            }, {
                18: [2, 44],
                35: [2, 44]
            }, {
                5: [2, 3],
                8: 21,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 3],
                22: [1, 14],
                23: [1, 15],
                24: [1, 16]
            }, {
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                24: [2, 17]
            }, {
                18: [2, 25],
                21: 41,
                27: 57,
                28: [1, 45],
                29: 58,
                30: [1, 42],
                31: [1, 43],
                32: [1, 44],
                33: 40,
                34: 46,
                35: [1, 47],
                38: 26
            }, {
                18: [2, 26]
            }, {
                18: [2, 30],
                28: [2, 30],
                30: [2, 30],
                31: [2, 30],
                32: [2, 30],
                35: [2, 30]
            }, {
                18: [2, 36],
                34: 59,
                35: [1, 60]
            }, {
                18: [2, 31],
                28: [2, 31],
                30: [2, 31],
                31: [2, 31],
                32: [2, 31],
                35: [2, 31]
            }, {
                18: [2, 32],
                28: [2, 32],
                30: [2, 32],
                31: [2, 32],
                32: [2, 32],
                35: [2, 32]
            }, {
                18: [2, 33],
                28: [2, 33],
                30: [2, 33],
                31: [2, 33],
                32: [2, 33],
                35: [2, 33]
            }, {
                18: [2, 34],
                28: [2, 34],
                30: [2, 34],
                31: [2, 34],
                32: [2, 34],
                35: [2, 34]
            }, {
                18: [2, 35],
                28: [2, 35],
                30: [2, 35],
                31: [2, 35],
                32: [2, 35],
                35: [2, 35]
            }, {
                18: [2, 38],
                35: [2, 38]
            }, {
                18: [2, 47],
                28: [2, 47],
                30: [2, 47],
                31: [2, 47],
                32: [2, 47],
                35: [2, 47],
                36: [1, 61],
                39: [2, 47]
            }, {
                35: [1, 62]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                24: [2, 10]
            }, {
                21: 63,
                35: [1, 27],
                38: 26
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                24: [2, 11]
            }, {
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                24: [2, 16]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                24: [2, 19]
            }, {
                5: [2, 20],
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                20: [2, 20],
                22: [2, 20],
                23: [2, 20],
                24: [2, 20]
            }, {
                5: [2, 21],
                14: [2, 21],
                15: [2, 21],
                16: [2, 21],
                19: [2, 21],
                20: [2, 21],
                22: [2, 21],
                23: [2, 21],
                24: [2, 21]
            }, {
                18: [1, 64]
            }, {
                18: [2, 24]
            }, {
                18: [2, 29],
                28: [2, 29],
                30: [2, 29],
                31: [2, 29],
                32: [2, 29],
                35: [2, 29]
            }, {
                18: [2, 37],
                35: [2, 37]
            }, {
                36: [1, 61]
            }, {
                21: 65,
                28: [1, 69],
                30: [1, 66],
                31: [1, 67],
                32: [1, 68],
                35: [1, 27],
                38: 26
            }, {
                18: [2, 46],
                28: [2, 46],
                30: [2, 46],
                31: [2, 46],
                32: [2, 46],
                35: [2, 46],
                39: [2, 46]
            }, {
                18: [1, 70]
            }, {
                5: [2, 22],
                14: [2, 22],
                15: [2, 22],
                16: [2, 22],
                19: [2, 22],
                20: [2, 22],
                22: [2, 22],
                23: [2, 22],
                24: [2, 22]
            }, {
                18: [2, 39],
                35: [2, 39]
            }, {
                18: [2, 40],
                35: [2, 40]
            }, {
                18: [2, 41],
                35: [2, 41]
            }, {
                18: [2, 42],
                35: [2, 42]
            }, {
                18: [2, 43],
                35: [2, 43]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                24: [2, 18]
            }
            ],
            defaultActions: {
                17: [2, 1],
                25: [2, 28],
                38: [2, 26],
                57: [2, 24]
            },
            parseError: function(t) {
                throw new Error(t)
            },
            parse: function(t) {
                function e() {
                    var t;
                    return t = n.lexer.lex() || 1, "number" != typeof t && (t = n.symbols_[t] || t), t
                }
                var n = this, i = [0], o = [null], s = [], r = this.table, a = "", l = 0, h = 0, u = 0;
                this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var c = this.lexer.yylloc;
                s.push(c);
                var p = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var d, f, m, g, _, y, v, L, b, x = {}; ;) {
                    if (m = i[i.length-1], this.defaultActions[m] ? g = this.defaultActions[m] : ((null === d || "undefined" == typeof d) && (d = e())
                        , g = r[m] && r[m][d]), "undefined" == typeof g ||!g.length ||!g[0]) {
                        var w = "";
                        if (!u) {
                            b = [];
                            for (y in r[m])
                                this.terminals_[y] && y > 2 && b.push("'" + this.terminals_[y] + "'");
                            w = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + b.join(", ") + ", got '" + (this.terminals_[d] || d) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(w, {
                                text: this.lexer.match,
                                token: this.terminals_[d] || d,
                                line: this.lexer.yylineno,
                                loc: c,
                                expected: b
                            })
                        }
                    }
                    if (g[0]instanceof Array && g.length > 1)
                        throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + d);
                    switch (g[0]) {
                    case 1:
                        i.push(d), o.push(this.lexer.yytext), s.push(this.lexer.yylloc), i.push(g[1]), d = null, f ? (d = f, f = null) : (h = this.lexer.yyleng, a = this.lexer.yytext, l = this.lexer.yylineno, c = this.lexer.yylloc, u > 0 && u--);
                        break;
                    case 2:
                        if (v = this.productions_[g[1]][1], x.$ = o[o.length - v], x._$ = {
                            first_line : s[s.length - (v || 1)
                                ].first_line, last_line:
                            s[s.length-1].last_line, first_column:
                            s[s.length - (v || 1)].first_column, last_column:
                            s[s.length-1].last_column
                        }, p && (x._$.range = [s[s.length - (v || 1)].range[0], s[s.length-1].range[1]]), _ = this.performAction.call(x, a, h, l, this.yy, g[1], o, s), "undefined" != typeof _)return _;
                        v && (i = i.slice(0, 2*-1 * v), o = o.slice(0, -1 * v), s = s.slice(0, -1 * v)), i.push(this.productions_[g[1]][0]), o.push(x.$), s.push(x._$), L = r[i[i.length-2]][i[i.length-1]], i.push(L);
                        break;
                    case 3:
                        return !0
                    }
                }
                return !0
            }
        }, n = function() {
            var t = {
                EOF: 1,
                parseError: function(t, e) {
                    if (!this.yy.parser)
                        throw new Error(t);
                    this.yy.parser.parseError(t, e)
                },
                setInput: function(t) {
                    return this._input = t, this._more = this._less = this.done=!1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                },
                input: function() {
                    var t = this._input[0];
                    this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
                    var e = t.match(/(?:\r\n?|\n).*/g);
                    return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
                },
                unput: function(t) {
                    var e = t.length, n = t.split(/(?:\r\n?|\n)/g);
                    this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e-1), this.offset -= e;
                    var i = this.match.split(/(?:\r\n?|\n)/g);
                    this.match = this.match.substr(0, this.match.length-1), this.matched = this.matched.substr(0, this.matched.length-1), n.length-1 && (this.yylineno -= n.length-1);
                    var o = this.yylloc.range;
                    return this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length: this.yylloc.first_column - e
                    }, this.options.ranges && (this.yylloc.range = [o[0], o[0] + this.yyleng - e]), this
                },
                more: function() {
                    return this._more=!0, this
                },
                less: function(t) {
                    this.unput(this.match.slice(t))
                },
                pastInput: function() {
                    var t = this.matched.substr(0, this.matched.length - this.match.length);
                    return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var t = this.match;
                    return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var t = this.pastInput(), e = new Array(t.length + 1).join("-");
                    return t + this.upcomingInput() + "\n" + e + "^"
                },
                next: function() {
                    if (this.done)
                        return this.EOF;
                    this._input || (this.done=!0);
                    var t, e, n, i, o;
                    this._more || (this.yytext = "", this.match = "");
                    for (var s = this._currentRules(), r = 0; r < s.length && (n = this._input.match(this.rules[s[r]]), !n || e&&!(n[0].length > e[0].length) || (e = n, i = r, this.options.flex));
                    r++);
                    return e ? (o = e[0].match(/(?:\r\n?|\n).*/g), o && (this.yylineno += o.length), this.yylloc = {
                        first_line : this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: o ? o[o.length-1].length - o[o.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                    },
                    this.yytext += e[0],
                    this.match += e[0],
                    this.matches = e,
                    this.yyleng = this.yytext.length,
                    this.options.ranges && (this.yylloc.range = [this.offset,
                    this.offset += this.yyleng]),
                    this._more=!1,
                    this._input = this._input.slice(e[0].length),
                    this.matched += e[0],
                    t = this.performAction.call(this,
                    this.yy,
                    this,
                    s[i],
                    this.conditionStack[this.conditionStack.length-1]),
                    this.done && this._input && (this.done=!1),
                    t ? t: void 0): "" === this._input ? this.EOF: this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(),
                    {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                }, lex : function() {
                    var t = this.next();
                    return "undefined" != typeof t ? t : this.lex()
                }, begin: function(t) {
                    this.conditionStack.push(t)
                }, popState: function() {
                    return this.conditionStack.pop()
                }, _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
                }, topState: function() {
                    return this.conditionStack[this.conditionStack.length-2]
                }, pushState: function(t) {
                    this.begin(t)
                }
            };
            return t.options = {}, t.performAction = function(t, e, n, i) {
                switch (n) {
                case 0:
                    return e.yytext = "\\", 14;
                case 1:
                    if ("\\" !== e.yytext.slice(-1) && this.begin("mu"), "\\" === e.yytext.slice(-1) && (e.yytext = e.yytext.substr(0, e.yyleng-1), this.begin("emu")
                        ), e.yytext)return 14;
                    break;
                case 2:
                    return 14;
                case 3:
                    return "\\" !== e.yytext.slice(-1) && this.popState(), "\\" === e.yytext.slice(-1) && (e.yytext = e.yytext.substr(0, e.yyleng-1)), 14;
                case 4:
                    return e.yytext = e.yytext.substr(0, e.yyleng-4), this.popState(), 15;
                case 5:
                    return this.begin("par"), 24;
                case 6:
                    return 16;
                case 7:
                    return 20;
                case 8:
                    return 19;
                case 9:
                    return 19;
                case 10:
                    return 23;
                case 11:
                    return 23;
                case 12:
                    this.popState(), this.begin("com");
                    break;
                case 13:
                    return e.yytext = e.yytext.substr(3, e.yyleng-5), this.popState(), 15;
                case 14:
                    return 22;
                case 15:
                    return 36;
                case 16:
                    return 35;
                case 17:
                    return 35;
                case 18:
                    return 39;
                case 19:
                    break;
                case 20:
                    return this.popState(), 18;
                case 21:
                    return this.popState(), 18;
                case 22:
                    return e.yytext = e.yytext.substr(1, e.yyleng-2).replace(/\\"/g, '"'), 30;
                case 23:
                    return e.yytext = e.yytext.substr(1, e.yyleng-2).replace(/\\'/g, "'"), 30;
                case 24:
                    return e.yytext = e.yytext.substr(1), 28;
                case 25:
                    return 32;
                case 26:
                    return 32;
                case 27:
                    return 31;
                case 28:
                    return 35;
                case 29:
                    return e.yytext = e.yytext.substr(1, e.yyleng-2), 35;
                case 30:
                    return "INVALID";
                case 31:
                    break;
                case 32:
                    return this.popState(), 37;
                case 33:
                    return 5
                }
            }, t.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}/ ])) / , /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$:\-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:\s+)/, /^(?:[a-zA-Z0-9_$\-\/]+)/, /^(?:$)/], t.conditions = {
                mu: {
                    rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33],
                    inclusive: !1
                },
                emu: {
                    rules: [3],
                    inclusive: !1
                },
                com: {
                    rules: [4],
                    inclusive: !1
                },
                par: {
                    rules: [31, 32],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 2, 33],
                    inclusive: !0
                }
            }, t
        }();
        return e.lexer = n, t.prototype = e, e.Parser = t, new t
    }();
    t.Parser = s, t.parse = function(e) {
        return e.constructor === t.AST.ProgramNode ? e : (t.Parser.yy = t.AST, t.Parser.parse(e))
    }, t.AST = {}, t.AST.ProgramNode = function(e, n) {
        this.type = "program", this.statements = e, n && (this.inverse = new t.AST.ProgramNode(n))
    }, t.AST.MustacheNode = function(t, e, n) {
        this.type = "mustache", this.escaped=!n, this.hash = e;
        var i = this.id = t[0], o = this.params = t.slice(1), s = this.eligibleHelper = i.isSimple;
        this.isHelper = s && (o.length || e)
    }, t.AST.PartialNode = function(t, e) {
        this.type = "partial", this.partialName = t, this.context = e
    }, t.AST.BlockNode = function(e, n, i, o) {
        var s = function(e, n) {
            if (e.original !== n.original)
                throw new t.Exception(e.original + " doesn't match " + n.original)
        };
        s(e.id, o), this.type = "block", this.mustache = e, this.program = n, this.inverse = i, this.inverse&&!this.program && (this.isInverse=!0)
    }, t.AST.ContentNode = function(t) {
        this.type = "content", this.string = t
    }, t.AST.HashNode = function(t) {
        this.type = "hash", this.pairs = t
    }, t.AST.IdNode = function(e) {
        this.type = "ID", this.original = e.join(".");
        for (var n = [], i = 0, o = 0, s = e.length; s > o; o++) {
            var r = e[o];
            if (".." === r || "." === r || "this" === r) {
                if (n.length > 0)
                    throw new t.Exception("Invalid path: " + this.original);
                ".." === r ? i++ : this.isScoped=!0
            } else 
                n.push(r)
        }
        this.parts = n, this.string = n.join("."), this.depth = i, this.isSimple = 1 === e.length&&!this.isScoped && 0 === i, this.stringModeValue = this.string
    }, t.AST.PartialNameNode = function(t) {
        this.type = "PARTIAL_NAME", this.name = t
    }, t.AST.DataNode = function(t) {
        this.type = "DATA", this.id = t
    }, t.AST.StringNode = function(t) {
        this.type = "STRING", this.string = t, this.stringModeValue = t
    }, t.AST.IntegerNode = function(t) {
        this.type = "INTEGER", this.integer = t, this.stringModeValue = Number(t)
    }, t.AST.BooleanNode = function(t) {
        this.type = "BOOLEAN", this.bool = t, this.stringModeValue = "true" === t
    }, t.AST.CommentNode = function(t) {
        this.type = "comment", this.comment = t
    };
    var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    t.Exception = function() {
        for (var t = Error.prototype.constructor.apply(this, arguments), e = 0; e < r.length; e++)
            this[r[e]] = t[r[e]]
    }, t.Exception.prototype = new Error, t.SafeString = function(t) {
        this.string = t
    }, t.SafeString.prototype.toString = function() {
        return this.string.toString()
    };
    var a = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, l = /[&<>"'`]/g, h = /[&<>"'`]/, u = function(t) {
        return a[t] || "&amp;"
    };
    t.Utils = {
        extend: function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        },
        escapeExpression: function(e) {
            return e instanceof t.SafeString ? e.toString() : null == e || e===!1 ? "" : (e = e.toString(), h.test(e) ? e.replace(l, u) : e)
        },
        isEmpty: function(t) {
            return t || 0 === t ? "[object Array]" === n.call(t) && 0 === t.length?!0 : !1 : !0
        }
    };
    var c = t.Compiler = function() {}, p = t.JavaScriptCompiler = function() {};
    c.prototype = {
        compiler: c,
        disassemble: function() {
            for (var t, e, n, i = this.opcodes, o = [], s = 0, r = i.length; r > s; s++)
                if (t = i[s], "DECLARE" === t.opcode)
                    o.push("DECLARE " + t.name + "=" + t.value);
                else {
                    e = [];
                    for (var a = 0; a < t.args.length; a++)
                        n = t.args[a], "string" == typeof n && (n = '"' + n.replace("\n", "\\n") + '"'), e.push(n);
                        o.push(t.opcode + " " + e.join(" "))
                }
            return o.join("\n")
        },
        equals: function(t) {
            var e = this.opcodes.length;
            if (t.opcodes.length !== e)
                return !1;
            for (var n = 0; e > n; n++) {
                var i = this.opcodes[n], o = t.opcodes[n];
                if (i.opcode !== o.opcode || i.args.length !== o.args.length)
                    return !1;
                for (var s = 0; s < i.args.length; s++)
                    if (i.args[s] !== o.args[s])
                        return !1
            }
            if (e = this.children.length, t.children.length !== e)
                return !1;
            for (n = 0; e > n; n++)
                if (!this.children[n].equals(t.children[n]))
                    return !1;
            return !0
        },
        guid: 0,
        compile: function(t, e) {
            this.children = [], this.depths = {
                list: []
            }, this.options = e;
            var n = this.options.knownHelpers;
            if (this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            }, n)
                for (var i in n)
                    this.options.knownHelpers[i] = n[i];
            return this.program(t)
        },
        accept: function(t) {
            return this[t.type](t)
        },
        program: function(t) {
            var e, n = t.statements;
            this.opcodes = [];
            for (var i = 0, o = n.length; o > i; i++)
                e = n[i], this[e.type](e);
            return this.isSimple = 1 === o, this.depths.list = this.depths.list.sort(function(t, e) {
                return t - e
            }), this
        },
        compileProgram: function(t) {
            var e, n = (new this.compiler).compile(t, this.options), i = this.guid++;
            this.usePartial = this.usePartial || n.usePartial, this.children[i] = n;
            for (var o = 0, s = n.depths.list.length; s > o; o++)
                e = n.depths.list[o], 2 > e || this.addDepth(e-1);
            return i
        },
        block: function(t) {
            var e = t.mustache, n = t.program, i = t.inverse;
            n && (n = this.compileProgram(n)), i && (i = this.compileProgram(i));
            var o = this.classifyMustache(e);
            "helper" === o ? this.helperMustache(e, n, i) : "simple" === o ? (this.simpleMustache(e), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(e, n, i), this.opcode("pushProgram", n), this.opcode("pushProgram", i), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
        },
        hash: function(t) {
            var e, n, i = t.pairs;
            this.opcode("pushHash");
            for (var o = 0, s = i.length; s > o; o++)
                e = i[o], n = e[1], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.stringModeValue, n.type)) : this.accept(n), this.opcode("assignToHash", e[0]);
            this.opcode("popHash")
        },
        partial: function(t) {
            var e = t.partialName;
            this.usePartial=!0, t.context ? this.ID(t.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", e.name), this.opcode("append")
        },
        content: function(t) {
            this.opcode("appendContent", t.string)
        },
        mustache: function(t) {
            var e = this.options, n = this.classifyMustache(t);
            "simple" === n ? this.simpleMustache(t) : "helper" === n ? this.helperMustache(t) : this.ambiguousMustache(t), t.escaped&&!e.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ambiguousMustache: function(t, e, n) {
            var i = t.id, o = i.parts[0], s = null != e || null != n;
            this.opcode("getContext", i.depth), this.opcode("pushProgram", e), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", o, s)
        },
        simpleMustache: function(t) {
            var e = t.id;
            "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
        },
        helperMustache: function(t, e, n) {
            var i = this.setupFullMustacheParams(t, e, n), o = t.id.parts[0];
            if (this.options.knownHelpers[o])
                this.opcode("invokeKnownHelper", i.length, o);
            else {
                if (this.options.knownHelpersOnly)
                    throw new Error("You specified knownHelpersOnly, but used the unknown helper " + o);
                this.opcode("invokeHelper", i.length, o)
            }
        },
        ID: function(t) {
            this.addDepth(t.depth), this.opcode("getContext", t.depth);
            var e = t.parts[0];
            e ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
            for (var n = 1, i = t.parts.length; i > n; n++)
                this.opcode("lookup", t.parts[n])
        },
        DATA: function(t) {
            this.options.data=!0, this.opcode("lookupData", t.id)
        },
        STRING: function(t) {
            this.opcode("pushString", t.string)
        },
        INTEGER: function(t) {
            this.opcode("pushLiteral", t.integer)
        },
        BOOLEAN: function(t) {
            this.opcode("pushLiteral", t.bool)
        },
        comment: function() {},
        opcode: function(t) {
            this.opcodes.push({
                opcode: t,
                args: [].slice.call(arguments, 1)
            })
        },
        declare: function(t, e) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: t,
                value: e
            })
        },
        addDepth: function(t) {
            if (isNaN(t))
                throw new Error("EWOT");
            0 !== t && (this.depths[t] || (this.depths[t]=!0, this.depths.list.push(t)))
        },
        classifyMustache: function(t) {
            var e = t.isHelper, n = t.eligibleHelper, i = this.options;
            if (n&&!e) {
                var o = t.id.parts[0];
                i.knownHelpers[o] ? e=!0 : i.knownHelpersOnly && (n=!1)
            }
            return e ? "helper" : n ? "ambiguous" : "simple"
        },
        pushParams: function(t) {
            for (var e, n = t.length; n--;)
                e = t[n], this.options.stringParams ? (e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", e.stringModeValue, e.type)) : this[e.type](e)
        },
        setupMustacheParams: function(t) {
            var e = t.params;
            return this.pushParams(e), t.hash ? this.hash(t.hash) : this.opcode("emptyHash"), e
        },
        setupFullMustacheParams: function(t, e, n) {
            var i = t.params;
            return this.pushParams(i), this.opcode("pushProgram", e), this.opcode("pushProgram", n), t.hash ? this.hash(t.hash) : this.opcode("emptyHash"), i
        }
    };
    var d = function(t) {
        this.value = t
    };
    p.prototype = {
        nameLookup: function(t, e) {
            return /^[0-9]+$/.test(e) ? t + "[" + e + "]" : p.isValidJavaScriptVariableName(e) ? t + "." + e : t + "['" + e + "']"
        },
        appendToBuffer: function(t) {
            return this.environment.isSimple ? "return " + t + ";" : {
                appendToBuffer: !0,
                content: t,
                toString: function() {
                    return "buffer += " + t + ";"
                }
            }
        },
        initializeBuffer: function() {
            return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function(e, n, i, o) {
            this.environment = e, this.options = n || {}, t.log(t.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild=!!i, this.context = i || {
                programs: [],
                environments: [],
                aliases: {}
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                list: []
            }, this.compileStack = [], this.inlineStack = [], this.compileChildren(e, n);
            var s, r = e.opcodes;
            for (this.i = 0, _ = r.length; this.i < _; this.i++)
                s = r[this.i], "DECLARE" === s.opcode ? this[s.name] = s.value : this[s.opcode].apply(this, s.args);
            return this.createFunctionContext(o)
        },
        nextOpcode: function() {
            var t = this.environment.opcodes;
            return t[this.i + 1]
        },
        eat: function() {
            this.i = this.i + 1
        },
        preamble: function() {
            var t = [];
            if (this.isChild)
                t.push("");
            else {
                var e = this.namespace, n = "helpers = helpers || " + e + ".helpers;";
                this.environment.usePartial && (n = n + " partials = partials || " + e + ".partials;"), this.options.data && (n += " data = data || {};"), t.push(n)
            }
            this.environment.isSimple ? t.push("") : t.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = t
        },
        createFunctionContext: function(e) {
            var n = this.stackVars.concat(this.registers.list);
            if (n.length > 0 && (this.source[1] = this.source[1] + ", " + n.join(", ")), !this.isChild)
                for (var i in this.context.aliases)
                    this.source[1] = this.source[1] + ", " + i + "=" + this.context.aliases[i];
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
            for (var o = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], s = 0, r = this.environment.depths.list.length; r > s; s++)
                o.push("depth" + this.environment.depths.list[s]);
            var a = this.mergeSource();
            if (!this.isChild) {
                var l = t.COMPILER_REVISION, h = t.REVISION_CHANGES[l];
                a = "this.compilerInfo = [" + l + ",'" + h + "'];\n" + a
            }
            if (e)
                return o.push(a), Function.apply(this, o);
            var u = "function " + (this.name || "") + "(" + o.join(",") + ") {\n  " + a + "}";
            return t.log(t.logger.DEBUG, u + "\n\n"), u
        },
        mergeSource: function() {
            for (var t, n = "", i = 0, o = this.source.length; o > i; i++) {
                var s = this.source[i];
                s.appendToBuffer ? t = t ? t + "\n    + " + s.content : s.content : (t && (n += "buffer += " + t + ";\n  ", t = e), n += s + "\n  ")
            }
            return n
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var t = ["depth0"];
            this.setupParams(0, t), this.replaceStack(function(e) {
                return t.splice(1, 0, e), "blockHelperMissing.call(" + t.join(", ") + ")"
            })
        },
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var t = ["depth0"];
            this.setupParams(0, t);
            var e = this.topStack();
            t.splice(1, 0, e), t[t.length-1] = "options", this.source.push("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
        },
        appendContent: function(t) {
            this.source.push(this.appendToBuffer(this.quotedString(t)))
        },
        append: function() {
            this.flushInline();
            var t = this.popStack();
            this.source.push("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function() {
            this.context.aliases.escapeExpression = "this.escapeExpression", this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
        },
        getContext: function(t) {
            this.lastContext !== t && (this.lastContext = t)
        },
        lookupOnContext: function(t) {
            this.push(this.nameLookup("depth" + this.lastContext, t, "context"))
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext)
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"', this.replaceStack(function(t) {
                return "typeof " + t + " === functionType ? " + t + ".apply(depth0) : " + t
            })
        },
        lookup: function(t) {
            this.replaceStack(function(e) {
                return e + " == null || " + e + " === false ? " + e + " : " + this.nameLookup(e, t, "context")
            })
        },
        lookupData: function(t) {
            this.push(this.nameLookup("data", t, "data"))
        },
        pushStringParam: function(t, e) {
            this.pushStackLiteral("depth" + this.lastContext), this.pushString(e), "string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t)
        },
        emptyHash: function() {
            this.pushStackLiteral("{}"), this.options.stringParams && (this.register("hashTypes", "{}"), this.register("hashContexts", "{}"))
        },
        pushHash: function() {
            this.hash = {
                values: [],
                types: [],
                contexts: []
            }
        },
        popHash: function() {
            var t = this.hash;
            this.hash = e, this.options.stringParams && (this.register("hashContexts", "{" + t.contexts.join(",") + "}"), this.register("hashTypes", "{" + t.types.join(",") + "}")), this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
        },
        pushString: function(t) {
            this.pushStackLiteral(this.quotedString(t))
        },
        push: function(t) {
            return this.inlineStack.push(t), t
        },
        pushLiteral: function(t) {
            this.pushStackLiteral(t)
        },
        pushProgram: function(t) {
            null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
        },
        invokeHelper: function(t, e) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var n = this.lastHelper = this.setupHelper(t, e, !0);
            this.push(n.name), this.replaceStack(function(t) {
                return t + " ? " + t + ".call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")"
            })
        },
        invokeKnownHelper: function(t, e) {
            var n = this.setupHelper(t, e);
            this.push(n.name + ".call(" + n.callParams + ")")
        },
        invokeAmbiguous: function(t, e) {
            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
            var n = this.setupHelper(0, t, e), i = this.lastHelper = this.nameLookup("helpers", t, "helper"), o = this.nameLookup("depth" + this.lastContext, t, "context"), s = this.nextStack();
            this.source.push("if (" + s + " = " + i + ") { " + s + " = " + s + ".call(" + n.callParams + "); }"), this.source.push("else { " + s + " = " + o + "; " + s + " = typeof " + s + " === functionType ? " + s + ".apply(depth0) : " + s + "; }")
        },
        invokePartial: function(t) {
            var e = [this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), "helpers", "partials"];
            this.options.data && e.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + e.join(", ") + ")")
        },
        assignToHash: function(t) {
            var e, n, i = this.popStack();
            this.options.stringParams && (n = this.popStack(), e = this.popStack());
            var o = this.hash;
            e && o.contexts.push("'" + t + "': " + e), n && o.types.push("'" + t + "': " + n), o.values.push("'" + t + "': (" + i + ")")
        },
        compiler: p,
        compileChildren: function(t, e) {
            for (var n, i, o = t.children, s = 0, r = o.length; r > s; s++) {
                n = o[s], i = new this.compiler;
                var a = this.matchExistingProgram(n);
                null == a ? (this.context.programs.push(""), a = this.context.programs.length, n.index = a, n.name = "program" + a, this.context.programs[a] = i.compile(n, e, this.context), this.context.environments[a] = n) : (n.index = a, n.name = "program" + a)
            }
        },
        matchExistingProgram: function(t) {
            for (var e = 0, n = this.context.environments.length; n > e; e++) {
                var i = this.context.environments[e];
                if (i && i.equals(t))
                    return e
            }
        },
        programExpression: function(t) {
            if (this.context.aliases.self = "this", null == t)
                return "self.noop";
            for (var e, n = this.environment.children[t], i = n.depths.list, o = [n.index, n.name, "data"], s = 0, r = i.length; r > s; s++)
                e = i[s], 1 === e ? o.push("depth0") : o.push("depth" + (e-1));
            return (0 === i.length ? "self.program(" : "self.programWithDepth(") + o.join(", ") + ")"
        },
        register: function(t, e) {
            this.useRegister(t), this.source.push(t + " = " + e + ";")
        },
        useRegister: function(t) {
            this.registers[t] || (this.registers[t]=!0, this.registers.list.push(t))
        },
        pushStackLiteral: function(t) {
            return this.push(new d(t))
        },
        pushStack: function(t) {
            this.flushInline();
            var e = this.incrStack();
            return t && this.source.push(e + " = " + t + ";"), this.compileStack.push(e), e
        },
        replaceStack: function(t) {
            var e, n = "", i = this.isInline();
            if (i) {
                var o = this.popStack(!0);
                if (o instanceof d)
                    e = o.value;
                else {
                    var s = this.stackSlot ? this.topStackName(): this.incrStack();
                    n = "(" + this.push(s) + " = " + o + "),", e = this.topStack()
                }
            } else 
                e = this.topStack();
            var r = t.call(this, e);
            return i ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + n + r + ")")) : (/^stack/.test(e) || (e = this.nextStack()), this.source.push(e + " = (" + n + r + ");")), e
        },
        nextStack: function() {
            return this.pushStack()
        },
        incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
        },
        topStackName: function() {
            return "stack" + this.stackSlot
        },
        flushInline: function() {
            var t = this.inlineStack;
            if (t.length) {
                this.inlineStack = [];
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    i instanceof d ? this.compileStack.push(i) : this.pushStack(i)
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length
        },
        popStack: function(t) {
            var e = this.isInline(), n = (e ? this.inlineStack : this.compileStack).pop();
            return !t && n instanceof d ? n.value : (e || this.stackSlot--, n)
        },
        topStack: function(t) {
            var e = this.isInline() ? this.inlineStack: this.compileStack, n = e[e.length-1];
            return !t && n instanceof d ? n.value : n
        },
        quotedString: function(t) {
            return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
        },
        setupHelper: function(t, e, n) {
            var i = [];
            this.setupParams(t, i, n);
            var o = this.nameLookup("helpers", e, "helper");
            return {
                params: i,
                name: o,
                callParams: ["depth0"].concat(i).join(", "),
                helperMissingParams: n && ["depth0", this.quotedString(e)].concat(i).join(", ")
            }
        },
        setupParams: function(t, e, n) {
            var i, o, s, r = [], a = [], l = [];
            r.push("hash:" + this.popStack()), o = this.popStack(), s = this.popStack(), (s || o) && (s || (this.context.aliases.self = "this", s = "self.noop"), o || (this.context.aliases.self = "this", o = "self.noop"), r.push("inverse:" + o), r.push("fn:" + s));
            for (var h = 0; t > h; h++)
                i = this.popStack(), e.push(i), this.options.stringParams && (l.push(this.popStack()), a.push(this.popStack()));
            return this.options.stringParams && (r.push("contexts:[" + a.join(",") + "]"), r.push("types:[" + l.join(",") + "]"), r.push("hashContexts:hashContexts"), r.push("hashTypes:hashTypes")), this.options.data && r.push("data:data"), r = "{" + r.join(",") + "}", n ? (this.register("options", r), e.push("options")) : e.push(r), e.join(", ")
        }
    };
    for (var f = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), m = p.RESERVED_WORDS = {}, g = 0, _ = f.length; _ > g; g++)
        m[f[g]]=!0;
    p.isValidJavaScriptVariableName = function(t) {
        return !p.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(t)?!0 : !1
    }, t.precompile = function(e, n) {
        if (null == e || "string" != typeof e && e.constructor !== t.AST.ProgramNode)
            throw new t.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
        n = n || {}, "data"in n || (n.data=!0);
        var i = t.parse(e), o = (new c).compile(i, n);
        return (new p).compile(o, n)
    }, t.compile = function(n, i) {
        function o() {
            var o = t.parse(n), s = (new c).compile(o, i), r = (new p).compile(s, i, e, !0);
            return t.template(r)
        }
        if (null == n || "string" != typeof n && n.constructor !== t.AST.ProgramNode)
            throw new t.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + n);
        i = i || {}, "data"in i || (i.data=!0);
        var s;
        return function(t, e) {
            return s || (s = o()), s.call(this, t, e)
        }
    }, t.VM = {
        template: function(e) {
            var n = {
                escapeExpression: t.Utils.escapeExpression,
                invokePartial: t.VM.invokePartial,
                programs: [],
                program: function(e, n, i) {
                    var o = this.programs[e];
                    return i ? o = t.VM.program(e, n, i) : o || (o = this.programs[e] = t.VM.program(e, n)), o
                },
                programWithDepth: t.VM.programWithDepth,
                noop: t.VM.noop,
                compilerInfo: null
            };
            return function(i, o) {
                o = o || {};
                var s = e.call(n, t, i, o.helpers, o.partials, o.data), r = n.compilerInfo || [], a = r[0] || 1, l = t.COMPILER_REVISION;
                if (a !== l) {
                    if (l > a) {
                        var h = t.REVISION_CHANGES[l], u = t.REVISION_CHANGES[a];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + h + ") or downgrade your runtime to an older version (" + u + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + r[1] + ")."
                }
                return s
            }
        },
        programWithDepth: function(t, e, n) {
            var i = Array.prototype.slice.call(arguments, 3), o = function(t, o) {
                return o = o || {}, e.apply(this, [t, o.data || n].concat(i))
            };
            return o.program = t, o.depth = i.length, o
        },
        program: function(t, e, n) {
            var i = function(t, i) {
                return i = i || {}, e(t, i.data || n)
            };
            return i.program = t, i.depth = 0, i
        },
        noop: function() {
            return ""
        },
        invokePartial: function(n, i, o, s, r, a) {
            var l = {
                helpers: s,
                partials: r,
                data: a
            };
            if (n === e)
                throw new t.Exception("The partial " + i + " could not be found");
            if (n instanceof Function)
                return n(o, l);
            if (t.compile)
                return r[i] = t.compile(n, {
                    data: a !== e
                }), r[i](o, l);
            throw new t.Exception("The partial " + i + " could not be compiled when running in runtime-only mode")
        }
    }, t.template = t.VM.template
}(Handlebars), function(t, e, n) {
    var i = t.L, o = {};
    o.version = "0.6-dev", "object" == typeof module && "object" == typeof module.exports ? module.exports = o : "function" == typeof define && define.amd && define("leaflet", [], function() {
        return o
    }), o.noConflict = function() {
        return t.L = i, this
    }, t.L = o, o.Util = {
        extend: function(t) {
            var e, n, i, o, s = Array.prototype.slice.call(arguments, 1);
            for (n = 0, i = s.length; i > n; n++) {
                o = s[n] || {};
                for (e in o)
                    o.hasOwnProperty(e) && (t[e] = o[e])
            }
            return t
        },
        bind: function(t, e) {
            var n = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2): null;
            return function() {
                return t.apply(e, n || arguments)
            }
        },
        stamp: function() {
            var t = 0, e = "_leaflet_id";
            return function(n) {
                return n[e] = n[e]||++t, n[e]
            }
        }(),
        invokeEach: function(t,
        e,
        n) {
            var i,
            o;
            if ("object" == typeof t) {
                o = Array.prototype.slice.call(arguments,
                3);
                for (i in t)e.apply(n,
                [i,
                t[i]].concat(o));
                return !0
            }
            return !1
        }, limitExecByInterval: function(t, e, i) {
            var o, s;
            return function r() {
                var a = arguments;
                return o ? (s=!0, n) : (o=!0, setTimeout(function() {
                    o=!1, s && (r.apply(i, a), s=!1)
                }, e), t.apply(i, a), n)
            }
        }, falseFn: function() {
            return !1
        }, formatNum: function(t, e) {
            var n = Math.pow(10, e || 5);
            return Math.round(t * n) / n
        }, trim: function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }, splitWords: function(t) {
            return o.Util.trim(t).split(/\s+/)
        }, setOptions: function(t, e) {
            return t.options = o.extend({}, t.options, e), t.options
        }, getParamString: function(t, e) {
            var n = [];
            for (var i in t)
                n.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return (e&&-1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
        }, template: function(t, e) {
            return t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
                var o = e[i];
                if (o === n)
                    throw Error("No value provided for variable " + t);
                return "function" == typeof o && (o = o(e)), o
            })
        }, isArray: function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    }, function() {
        function e(e) {
            var n, i, o = ["webkit", "moz", "o", "ms"];
            for (n = 0; o.length > n&&!i; n++)
                i = t[o[n] + e];
            return i
        }
        function i(e) {
            var n =+ new Date, i = Math.max(0, 16 - (n - s));
            return s = n + i, t.setTimeout(e, i)
        }
        var s = 0, r = t.requestAnimationFrame || e("RequestAnimationFrame") || i, a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
            t.clearTimeout(e)
        };
        o.Util.requestAnimFrame = function(e, s, a, l) {
            return e = o.bind(e, s), a && r === i ? (e(), n) : r.call(t, e, l)
        }, o.Util.cancelAnimFrame = function(e) {
            e && a.call(t, e)
        }
    }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function() {}, o.Class.extend = function(t) {
        var e = function() {
            this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
        }, n = function() {};
        n.prototype = this.prototype;
        var i = new n;
        i.constructor = e, e.prototype = i;
        for (var s in this)
            this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
        t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [i].concat(t.includes)), delete t.includes), t.options && i.options && (t.options = o.extend({}, i.options, t.options)), o.extend(i, t), i._initHooks = [];
        var r = this;
        return e.__super__ = r.prototype, i.callInitHooks = function() {
            if (!this._initHooksCalled) {
                r.prototype.callInitHooks && r.prototype.callInitHooks.call(this), this._initHooksCalled=!0;
                for (var t = 0, e = i._initHooks.length; e > t; t++)
                    i._initHooks[t].call(this)
            }
        }, e
    }, o.Class.include = function(t) {
        o.extend(this.prototype, t)
    }, o.Class.mergeOptions = function(t) {
        o.extend(this.prototype.options, t)
    }, o.Class.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), n = "function" == typeof t ? t: function() {
            this[t].apply(this, e)
        };
        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n)
    };
    var s = "_leaflet_events";
    o.Mixin = {}, o.Mixin.Events = {
        addEventListener: function(t, e, n) {
            if (o.Util.invokeEach(t, this.addEventListener, this, e, n))
                return this;
            var i, r, a, l, h, u, c, p = this[s] = this[s] || {}, d = n && o.stamp(n);
            for (t = o.Util.splitWords(t), i = 0, r = t.length; r > i; i++)
                a = {
                    action: e,
                    context: n || this
                }, l = t[i], n ? (h = l + "_idx", u = h + "_len", c = p[h] = p[h] || {}, c[d] || (c[d] = [], p[u] = (p[u] || 0) + 1), c[d].push(a)) : (p[l] = p[l] || [], p[l].push(a));
            return this
        },
        hasEventListeners: function(t) {
            var e = this[s];
            return !!e && (t in e && e[t].length > 0 || t + "_idx"in e && e[t + "_idx_len"] > 0)
        },
        removeEventListener: function(t, e, n) {
            if (!this[s])
                return this;
            if (!t)
                return this.clearAllEventListeners();
            if (o.Util.invokeEach(t, this.removeEventListener, this, e, n))
                return this;
            var i, r, a, l, h, u, c, p, d, f = this[s], m = n && o.stamp(n);
            for (t = o.Util.splitWords(t), i = 0, r = t.length; r > i; i++)
                if (a = t[i], u = a + "_idx", c = u + "_len", p = f[u], e) {
                    if (l = n && p ? p[m] : f[a]) {
                        for (h = l.length-1; h >= 0; h--)
                            l[h].action !== e || n && l[h].context !== n || (d = l.splice(h, 1), d[0].action = o.Util.falseFn);
                            n && p && 0 === l.length && (delete p[m], f[c]--)
                        }
                } else 
                    delete f[a], delete f[u];
            return this
        },
        clearAllEventListeners: function() {
            return delete this[s], this
        },
        fireEvent: function(t, e) {
            if (!this.hasEventListeners(t))
                return this;
            var n, i, r, a, l, h = o.Util.extend({}, e, {
                type: t,
                target: this
            }), u = this[s];
            if (u[t])
                for (n = u[t].slice(), i = 0, r = n.length; r > i; i++)
                    n[i].action.call(n[i].context || this, h);
            a = u[t + "_idx"];
            for (l in a)
                if (n = a[l])
                    for (i = 0, r = n.length; r > i; i++)
                        n[i].action.call(n[i].context || this, h);
            return this
        },
        addOneTimeEventListener: function(t, e, n) {
            if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, n))
                return this;
            var i = o.bind(function() {
                this.removeEventListener(t, e, n).removeEventListener(t, i, n)
            }, this);
            return this.addEventListener(t, e, n).addEventListener(t, i, n)
        }
    }, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent, function() {
        var i=!!t.ActiveXObject, s = i&&!t.XMLHttpRequest, r = i&&!e.querySelector, a = i&&!e.addEventListener, l = navigator.userAgent.toLowerCase(), h =- 1 !== l.indexOf("webkit"), u =- 1 !== l.indexOf("chrome"), c =- 1 !== l.indexOf("phantom"), p =- 1 !== l.indexOf("android"), d =- 1 !== l.search("android [23]"), f = typeof orientation != n + "", m = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints, g = "devicePixelRatio"in t && t.devicePixelRatio > 1 || "matchMedia"in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches, _ = e.documentElement, y = i && "transition"in _.style, v = "WebKitCSSMatrix"in t && "m11"in new t.WebKitCSSMatrix, L = "MozPerspective"in _.style, b = "OTransition"in _.style, x=!t.L_DISABLE_3D && (y || v || L || b)&&!c, w=!t.L_NO_TOUCH&&!c && function() {
            var t = "ontouchstart";
            if (m || t in _)
                return !0;
            var n = e.createElement("div"), i=!1;
            return n.setAttribute ? (n.setAttribute(t, "return;"), "function" == typeof n[t] && (i=!0), n.removeAttribute(t), n = null, i) : !1
        }();
        o.Browser = {
            ie: i,
            ie6: s,
            ie7: r,
            ielt9: a,
            webkit: h,
            android: p,
            android23: d,
            chrome: u,
            ie3d: y,
            webkit3d: v,
            gecko3d: L,
            opera3d: b,
            any3d: x,
            mobile: f,
            mobileWebkit: f && h,
            mobileWebkit3d: f && v,
            mobileOpera: f && t.opera,
            touch: w,
            msTouch: m,
            retina: g
        }
    }(), o.Point = function(t, e, n) {
        this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
    }, o.Point.prototype = {
        clone: function() {
            return new o.Point(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(o.point(t))
        },
        _add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.clone()._subtract(o.point(t))
        },
        _subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x/=t, this.y/=t, this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x*=t, this.y*=t, this
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        distanceTo: function(t) {
            t = o.point(t);
            var e = t.x - this.x, n = t.y - this.y;
            return Math.sqrt(e * e + n * n)
        },
        equals: function(t) {
            return t = o.point(t), t.x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
        }
    }, o.point = function(t, e, i) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === n || null === t ? t : new o.Point(t, e, i)
    }, o.Bounds = function(t, e) {
        if (t)
            for (var n = e ? [t, e] : t, i = 0, o = n.length; o > i; i++)
                this.extend(n[i])
        }, o.Bounds.prototype = {
        extend: function(t) {
            return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function(t) {
            return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new o.Point(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new o.Point(this.max.x, this.min.y)
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, n;
            return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
        },
        intersects: function(t) {
            t = o.bounds(t);
            var e = this.min, n = this.max, i = t.min, s = t.max, r = s.x >= e.x && i.x <= n.x, a = s.y >= e.y && i.y <= n.y;
            return r && a
        },
        isValid: function() {
            return !(!this.min ||!this.max)
        }
    }, o.bounds = function(t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
    }, o.Transformation = function(t, e, n, i) {
        this._a = t, this._b = e, this._c = n, this._d = i
    }, o.Transformation.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        },
        untransform: function(t, e) {
            return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    }, o.DomUtil = {
        get: function(t) {
            return "string" == typeof t ? e.getElementById(t) : t
        },
        getStyle: function(t, n) {
            var i = t.style[n];
            if (!i && t.currentStyle && (i = t.currentStyle[n]), (!i || "auto" === i) && e.defaultView) {
                var o = e.defaultView.getComputedStyle(t, null);
                i = o ? o[n] : null
            }
            return "auto" === i ? null : i
        },
        getViewportOffset: function(t) {
            var n, i = 0, s = 0, r = t, a = e.body, l = e.documentElement, h = o.Browser.ie7;
            do {
                if (i += r.offsetTop || 0, s += r.offsetLeft || 0, i += parseInt(o.DomUtil.getStyle(r, "borderTopWidth")
                    , 10) || 0, s += parseInt(o.DomUtil.getStyle(r, "borderLeftWidth"), 10) || 0, n = o.DomUtil.getStyle(r, "position"), r.offsetParent === a && "absolute" === n)break;
                if ("fixed" === n) {
                    i += a.scrollTop || l.scrollTop || 0, s += a.scrollLeft || l.scrollLeft || 0;
                    break
                }
                r = r.offsetParent
            }
            while (r);
            r = t;
            do {
                if (r === a)
                    break;
                i -= r.scrollTop || 0, s -= r.scrollLeft || 0, o.DomUtil.documentIsLtr() ||!o.Browser.webkit&&!h || (s += r.scrollWidth - r.clientWidth, h && "hidden" !== o.DomUtil.getStyle(r, "overflow-y") && "hidden" !== o.DomUtil.getStyle(r, "overflow") && (s += 17)), r = r.parentNode
            }
            while (r);
            return new o.Point(s, i)
        },
        documentIsLtr: function() {
            return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached=!0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(e.body, "direction")), o.DomUtil._docIsLtr
        },
        create: function(t, n, i) {
            var o = e.createElement(t);
            return o.className = n, i && i.appendChild(o), o
        },
        disableTextSelection: function() {
            e.selection && e.selection.empty && e.selection.empty(), this._onselectstart || (this._onselectstart = e.onselectstart || null, e.onselectstart = o.Util.falseFn)
        },
        enableTextSelection: function() {
            e.onselectstart === o.Util.falseFn && (e.onselectstart = this._onselectstart, this._onselectstart = null)
        },
        hasClass: function(t, e) {
            return t.className.length > 0 && RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        },
        addClass: function(t, e) {
            o.DomUtil.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
        },
        removeClass: function(t, e) {
            t.className = o.Util.trim((" " + t.className + " ").replace(" " + e + " ", " "))
        },
        setOpacity: function(t, e) {
            if ("opacity"in t.style)
                t.style.opacity = e;
            else if ("filter"in t.style) {
                var n=!1, i = "DXImageTransform.Microsoft.Alpha";
                try {
                    n = t.filters.item(i)
                } catch (o) {
                    if (1 === e)
                        return 
                }
                e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
            }
        },
        testProp: function(t) {
            for (var n = e.documentElement.style, i = 0; t.length > i; i++)
                if (t[i]in n)
                    return t[i];
            return !1
        },
        getTranslateString: function(t) {
            var e = o.Browser.webkit3d, n = "translate" + (e ? "3d" : "") + "(", i = (e ? ",0" : "") + ")";
            return n + t.x + "px," + t.y + "px" + i
        },
        getScaleString: function(t, e) {
            var n = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))), i = " scale(" + t + ") ";
            return n + i
        },
        setPosition: function(t, e, n) {
            t._leaflet_pos = e, !n && o.Browser.any3d ? (t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e), o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden")) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
        },
        getPosition: function(t) {
            return t._leaflet_pos
        }
    }, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + "End" : "transitionend", o.LatLng = function(t, e) {
        var n = parseFloat(t), i = parseFloat(e);
        if (isNaN(n) || isNaN(i))
            throw Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = n, this.lng = i
    }, o.extend(o.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1e-9
    }), o.LatLng.prototype = {
        equals: function(t) {
            if (!t)
                return !1;
            t = o.latLng(t);
            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return o.LatLng.MAX_MARGIN >= e
        },
        toString: function(t) {
            return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
        },
        distanceTo: function(t) {
            t = o.latLng(t);
            var e = 6378137, n = o.LatLng.DEG_TO_RAD, i = (t.lat - this.lat) * n, s = (t.lng - this.lng) * n, r = this.lat * n, a = t.lat * n, l = Math.sin(i / 2), h = Math.sin(s / 2), u = l * l + h * h * Math.cos(r) * Math.cos(a);
            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
        },
        wrap: function(t, e) {
            var n = this.lng;
            return t = t||-180, e = e || 180, n = (n + e)%(e - t) + (t > n || n === e ? e : t), new o.LatLng(this.lat, n)
        }
    }, o.latLng = function(t, e) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) ? new o.LatLng(t[0], t[1]) : t === n || null === t ? t : "object" == typeof t && "lat"in t ? new o.LatLng(t.lat, "lng"in t ? t.lng : t.lon) : new o.LatLng(t, e)
    }, o.LatLngBounds = function(t, e) {
        if (t)
            for (var n = e ? [t, e] : t, i = 0, o = n.length; o > i; i++)
                this.extend(n[i])
    }, o.LatLngBounds.prototype = {
        extend: function(t) {
            return t = "number" == typeof t[0] || "string" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
        },
        pad: function(t) {
            var e = this._southWest, n = this._northEast, i = Math.abs(e.lat - n.lat) * t, s = Math.abs(e.lng - n.lng) * t;
            return new o.LatLngBounds(new o.LatLng(e.lat - i, e.lng - s), new o.LatLng(n.lat + i, n.lng + s))
        },
        getCenter: function() {
            return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new o.LatLng(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new o.LatLng(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
            var e, n, i = this._southWest, s = this._northEast;
            return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= s.lat && e.lng >= i.lng && n.lng <= s.lng
        },
        intersects: function(t) {
            t = o.latLngBounds(t);
            var e = this._southWest, n = this._northEast, i = t.getSouthWest(), s = t.getNorthEast(), r = s.lat >= e.lat && i.lat <= n.lat, a = s.lng >= e.lng && i.lng <= n.lng;
            return r && a
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t) {
            return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
        },
        isValid: function() {
            return !(!this._southWest ||!this._northEast)
        }
    }, o.latLngBounds = function(t, e) {
        return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
    }, o.Projection = {}, o.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
            var e = o.LatLng.DEG_TO_RAD, n = this.MAX_LATITUDE, i = Math.max(Math.min(n, t.lat), - n), s = t.lng * e, r = i * e;
            return r = Math.log(Math.tan(Math.PI / 4 + r / 2)), new o.Point(s, r)
        },
        unproject: function(t) {
            var e = o.LatLng.RAD_TO_DEG, n = t.x * e, i = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
            return new o.LatLng(i, n)
        }
    }, o.Projection.LonLat = {
        project: function(t) {
            return new o.Point(t.lng, t.lat)
        },
        unproject: function(t) {
            return new o.LatLng(t.y, t.x)
        }
    }, o.CRS = {
        latLngToPoint: function(t, e) {
            var n = this.projection.project(t), i = this.scale(e);
            return this.transformation._transform(n, i)
        },
        pointToLatLng: function(t, e) {
            var n = this.scale(e), i = this.transformation.untransform(t, n);
            return this.projection.unproject(i)
        },
        project: function(t) {
            return this.projection.project(t)
        },
        scale: function(t) {
            return 256 * Math.pow(2, t)
        }
    }, o.CRS.Simple = o.extend({}, o.CRS, {
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1, 0, -1, 0),
        scale: function(t) {
            return Math.pow(2, t)
        }
    }), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
        code: "EPSG:3857",
        projection: o.Projection.SphericalMercator,
        transformation: new o.Transformation(.5 / Math.PI, .5, - .5 / Math.PI, .5),
        project: function(t) {
            var e = this.projection.project(t), n = 6378137;
            return e.multiplyBy(n)
        }
    }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
        code: "EPSG:900913"
    }), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
        code: "EPSG:4326",
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
    }), o.Map = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            crs: o.CRS.EPSG3857,
            fadeAnimation: o.DomUtil.TRANSITION&&!o.Browser.android23,
            trackResize: !0,
            markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
        },
        initialize: function(t, e) {
            e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== n && this.setView(o.latLng(e.center), e.zoom, {
                reset: !0
            }), this._initLayers(e.layers), this._handlers = [], this.callInitHooks()
        },
        setView: function(t, e) {
            return this._resetView(o.latLng(t), this._limitZoom(e)), this
        },
        setZoom: function(t, e) {
            return this.setView(this.getCenter(), t, {
                zoom: e
            })
        },
        zoomIn: function(t, e) {
            return this.setZoom(this._zoom + (t || 1), e)
        },
        zoomOut: function(t, e) {
            return this.setZoom(this._zoom - (t || 1), e)
        },
        setZoomAround: function(t, e, n) {
            var i = this.getZoomScale(e), s = this.getSize().divideBy(2), r = t instanceof o.Point ? t: this.latLngToContainerPoint(t), a = r.subtract(s).multiplyBy(1-1 / i), l = this.containerPointToLatLng(s.add(a));
            return this.setView(l, e, {
                zoom: n
            })
        },
        fitBounds: function(t, e) {
            e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
            var n = o.point(e.paddingTopLeft || e.padding || [0, 0]), i = o.point(e.paddingBottomRight || e.padding || [0, 0]), s = this.getBoundsZoom(t, !1, n.add(i)), r = i.subtract(n).divideBy(2), a = this.project(t.getSouthWest(), s), l = this.project(t.getNorthEast(), s), h = this.unproject(a.add(l).divideBy(2).add(r), s);
            return this.setView(h, s, e)
        },
        fitWorld: function(t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function(t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function(t) {
            return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
        },
        setMaxBounds: function(t) {
            if (t = o.latLngBounds(t), this.options.maxBounds = t, !t)
                return this._boundsMinZoom = null, this;
            var e = this.getBoundsZoom(t, !0);
            return this._boundsMinZoom = e, this._loaded && (e > this._zoom ? this.setView(t.getCenter(), e) : this.panInsideBounds(t)), this.on("moveend", this._panInsideMaxBounds, this), this
        },
        panInsideBounds: function(t) {
            t = o.latLngBounds(t);
            var e = this.getPixelBounds(), n = e.getBottomLeft(), i = e.getTopRight(), s = this.project(t.getSouthWest()), r = this.project(t.getNorthEast()), a = 0, l = 0;
            return i.y < r.y && (l = Math.ceil(r.y - i.y)), i.x > r.x && (a = Math.floor(r.x - i.x)), n.y > s.y && (l = Math.floor(s.y - n.y)), n.x < s.x && (a = Math.ceil(s.x - n.x)), a || l ? this.panBy([a, l]) : this
        },
        addLayer: function(t) {
            var e = o.stamp(t);
            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this.whenReady(function() {
                t.onAdd(this), this.fire("layeradd", {
                    layer: t
                })
            }, this), this)
        },
        removeLayer: function(t) {
            var e = o.stamp(t);
            return this._layers[e] ? (t.onRemove(this), delete this._layers[e], this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this.fire("layerremove", {
                layer : t
            })): void 0
        }, hasLayer : function(t) {
            return t ? o.stamp(t)in this._layers : !1
        }, eachLayer: function(t, e) {
            for (var n in this._layers)
                t.call(e, this._layers[n]);
            return this
        }, invalidateSize: function(t) {
            var e = this.getSize();
            if (this._sizeChanged=!0, this.options.maxBounds && this.setMaxBounds(this.options.maxBounds)
                , !this._loaded)return this;
            var n = this.getSize(), i = e.subtract(n).divideBy(2).round();
            return (0 !== i.x || 0 !== i.y) && (t===!0 ? this.panBy(i) : (this._rawPanBy(i), this.fire("move"), clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)), this.fire("resize", {
                oldSize: e,
                newSize: n
            })), this
        }, addHandler: function(t, e) {
            if (e) {
                var n = this[t] = new e(this);
                return this._handlers.push(n), this.options[t] && n.enable(), this
            }
        }, remove: function() {
            return this._loaded && this.fire("unload"), this._initEvents("off"), delete this._container._leaflet, this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
        }, getCenter: function() {
            return this._checkIfLoaded(), this._moved() ? this.layerPointToLatLng(this._getCenterLayerPoint()) : this._initialCenter
        }, getZoom: function() {
            return this._zoom
        }, getBounds: function() {
            var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), n = this.unproject(t.getTopRight());
            return new o.LatLngBounds(e, n)
        }, getMinZoom: function() {
            var t = this.options.minZoom || 0, e = this._layersMinZoom || 0, n = this._boundsMinZoom || 0;
            return Math.max(t, e, n)
        }, getMaxZoom: function() {
            var t = this.options.maxZoom === n ? 1 / 0: this.options.maxZoom, e = this._layersMaxZoom === n ? 1 / 0: this._layersMaxZoom;
            return Math.min(t, e)
        }, getBoundsZoom: function(t, e, n) {
            t = o.latLngBounds(t);
            var i, s = this.getMinZoom() - (e ? 1 : 0), r = this.getMaxZoom(), a = this.getSize(), l = t.getNorthWest(), h = t.getSouthEast(), u=!0;
            n = o.point(n || [0, 0]);
            do 
                s++, i = this.project(h, s).subtract(this.project(l, s)).add(n), u = e ? i.x < a.x || i.y < a.y : a.contains(i);
            while (u && r >= s);
            return u && e ? null : e ? s : s-1
        }, getSize: function() {
            return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged=!1), this._size.clone()
        }, getPixelBounds: function() {
            var t = this._getTopLeftPoint();
            return new o.Bounds(t, t.add(this.getSize()))
        }, getPixelOrigin: function() {
            return this._checkIfLoaded(), this._initialTopLeftPoint
        }, getPanes: function() {
            return this._panes
        }, getContainer: function() {
            return this._container
        }, getZoomScale: function(t) {
            var e = this.options.crs;
            return e.scale(t) / e.scale(this._zoom)
        }, getScaleZoom: function(t) {
            return this._zoom + Math.log(t) / Math.LN2
        }, project: function(t, e) {
            return e = e === n ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
        }, unproject: function(t, e) {
            return e = e === n ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
        }, layerPointToLatLng: function(t) {
            var e = o.point(t).add(this.getPixelOrigin());
            return this.unproject(e)
        }, latLngToLayerPoint: function(t) {
            var e = this.project(o.latLng(t))._round();
            return e._subtract(this.getPixelOrigin())
        }, containerPointToLayerPoint: function(t) {
            return o.point(t).subtract(this._getMapPanePos())
        }, layerPointToContainerPoint: function(t) {
            return o.point(t).add(this._getMapPanePos())
        }, containerPointToLatLng: function(t) {
            var e = this.containerPointToLayerPoint(o.point(t));
            return this.layerPointToLatLng(e)
        }, latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
        }, mouseEventToContainerPoint: function(t) {
            return o.DomEvent.getMousePosition(t, this._container)
        }, mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        }, mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        }, _initContainer: function(t) {
            var e = this._container = o.DomUtil.get(t);
            if (!e)
                throw Error("Map container not found.");
            if (e._leaflet)
                throw Error("Map container is already initialized.");
            e._leaflet=!0
        }, _initLayout: function() {
            var t = this._container;
            o.DomUtil.addClass(t, "leaflet-container"), o.Browser.touch && o.DomUtil.addClass(t, "leaflet-touch"), this.options.fadeAnimation && o.DomUtil.addClass(t, "leaflet-fade-anim");
            var e = o.DomUtil.getStyle(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
        }, _initPanes: function() {
            var t = this._panes = {};
            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
            var e = " leaflet-zoom-hide";
            this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
        }, _createPane: function(t, e) {
            return o.DomUtil.create("div", t, e || this._panes.objectsPane)
        }, _clearPanes: function() {
            this._container.removeChild(this._mapPane)
        }, _initLayers: function(t) {
            t = t ? o.Util.isArray(t) ? t : [t] : [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0;
            var e, n;
            for (e = 0, n = t.length; n > e; e++)
                this.addLayer(t[e])
        }, _resetView: function(t, e, n, i) {
            var s = this._zoom !== e;
            i || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), n ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
            var r=!this._loaded;
            this._loaded=!0, r && this.fire("load"), this.fire("viewreset", {
                hard: !n
            }), this.fire("move"), (s || i) && this.fire("zoomend"), this.fire("moveend", {
                hard: !n
            })
        }, _rawPanBy: function(t) {
            o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
        }, _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom()
        }, _updateZoomLevels: function() {
            var t, e = 1 / 0, i =- 1 / 0, o = this._getZoomSpan();
            for (t in this._zoomBoundLayers) {
                var s = this._zoomBoundLayers[t];
                isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (i = Math.max(i, s.options.maxZoom))
            }
            t === n ? this._layersMaxZoom = this._layersMinZoom = n : (this._layersMaxZoom = i, this._layersMinZoom = e), o !== this._getZoomSpan() && this.fire("zoomlevelschange")
        }, _panInsideMaxBounds: function() {
            this.panInsideBounds(this.options.maxBounds)
        }, _checkIfLoaded: function() {
            if (!this._loaded)
                throw Error("Set map center and zoom first.")
        }, _initEvents: function(e) {
            if (o.DomEvent) {
                e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
                var n, i, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                for (n = 0, i = s.length; i > n; n++)
                    o.DomEvent[e](this._container, s[n], this._fireMouseEvent, this);
                this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
            }
        }, _onResize: function() {
            o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(this.invalidateSize, this, !1, this._container)
        }, _onMouseClick: function(t) {
            !this._loaded || this.dragging && this.dragging.moved() || (this.fire("preclick"), this._fireMouseEvent(t))
        }, _fireMouseEvent: function(t) {
            if (this._loaded) {
                var e = t.type;
                if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)
                    ) {
                    "contextmenu" === e && o.DomEvent.preventDefault(t);
                    var n = this.mouseEventToContainerPoint(t), i = this.containerPointToLayerPoint(n), s = this.layerPointToLatLng(i);
                    this.fire(e, {
                        latlng: s,
                        layerPoint: i,
                        containerPoint: n,
                        originalEvent: t
                    })
                }
            }
        }, _onTileLayerLoad: function() {
            this._tileLayersToLoad--, this._tileLayersNum&&!this._tileLayersToLoad && this.fire("tilelayersload")
        }, _clearHandlers: function() {
            for (var t = 0, e = this._handlers.length; e > t; t++)
                this._handlers[t].disable()
        }, whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
        }, _getMapPanePos: function() {
            return o.DomUtil.getPosition(this._mapPane)
        }, _moved: function() {
            var t = this._getMapPanePos();
            return t&&!t.equals([0, 0])
        }, _getTopLeftPoint: function() {
            return this.getPixelOrigin().subtract(this._getMapPanePos())
        }, _getNewTopLeftPoint: function(t, e) {
            var n = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(n)._round()
        }, _latLngToNewLayerPoint: function(t, e, n) {
            var i = this._getNewTopLeftPoint(n, e).add(this._getMapPanePos());
            return this.project(t, e)._subtract(i)
        }, _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        }, _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        }, _limitZoom: function(t) {
            var e = this.getMinZoom(), n = this.getMaxZoom();
            return Math.max(e, Math.min(n, t))
        }
    }), o.map = function(t, e) {
        return new o.Map(t, e)
    }, o.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556,
        R_MINOR: 6356752.3142,
        R_MAJOR: 6378137,
        project: function(t) {
            var e = o.LatLng.DEG_TO_RAD, n = this.MAX_LATITUDE, i = Math.max(Math.min(n, t.lat), - n), s = this.R_MAJOR, r = this.R_MINOR, a = t.lng * e * s, l = i * e, h = r / s, u = Math.sqrt(1 - h * h), c = u * Math.sin(l);
            c = Math.pow((1 - c) / (1 + c), .5 * u);
            var p = Math.tan(.5 * (.5 * Math.PI - l)) / c;
            return l =- r * Math.log(p), new o.Point(a, l)
        },
        unproject: function(t) {
            for (var e, n = o.LatLng.RAD_TO_DEG, i = this.R_MAJOR, s = this.R_MINOR, r = t.x * n / i, a = s / i, l = Math.sqrt(1 - a * a), h = Math.exp( - t.y / s), u = Math.PI / 2-2 * Math.atan(h), c = 15, p = 1e-7, d = c, f = .1; Math.abs(f) 
                > p&&--d > 0;
            )e = l * Math.sin(u), f = Math.PI / 2-2 * Math.atan(h * Math.pow((1 - e) / (1 + e), .5 * l)) - u, u += f;
            return new o.LatLng(u * n, r)
        }
    }, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
        code: "EPSG:3395",
        projection: o.Projection.Mercator,
        transformation: function() {
            var t = o.Projection.Mercator, e = t.R_MAJOR, n = t.R_MINOR;
            return new o.Transformation(.5 / (Math.PI * e), .5, - .5 / (Math.PI * n), .5)
        }()
    }), o.TileLayer = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: "abc",
            errorTileUrl: "",
            attribution: "",
            zoomOffset: 0,
            opacity: 1,
            unloadInvisibleTiles: o.Browser.mobile,
            updateWhenIdle: o.Browser.mobile
        },
        initialize: function(t, e) {
            e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(e.bounds)), this._url = t;
            var n = this.options.subdomains;
            "string" == typeof n && (this.options.subdomains = n.split(""))
        },
        onAdd: function(t) {
            this._map = t, this._animated = t.options.zoomAnimation && o.Browser.any3d, this._initContainer(), this._createTileProto(), t.on({
                viewreset: this._reset,
                moveend: this._update
            }, this), this._animated && t.on({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        onRemove: function(t) {
            this._container.parentNode.removeChild(this._container), t.off({
                viewreset: this._reset,
                moveend: this._update
            }, this), this._animated && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
        },
        bringToFront: function() {
            var t = this._map._panes.tilePane;
            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
        },
        bringToBack: function() {
            var t = this._map._panes.tilePane;
            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        getContainer: function() {
            return this._container
        },
        setOpacity: function(t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        },
        setZIndex: function(t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        setUrl: function(t, e) {
            return this._url = t, e || this.redraw(), this
        },
        redraw: function() {
            return this._map && (this._reset({
                hard: !0
            }), this._update()), this
        },
        _updateZIndex: function() {
            this._container && this.options.zIndex !== n && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function(t, e) {
            var n, i, o, s = t.children, r =- e(1 / 0, -1 / 0);
            for (i = 0, o = s.length; o > i; i++)
                s[i] !== this._container && (n = parseInt(s[i].style.zIndex, 10), isNaN(n) || (r = e(r, n)));
            this.options.zIndex = this._container.style.zIndex = (isFinite(r) ? r : 0) + e(1, -1)
        },
        _updateOpacity: function() {
            var t, e = this._tiles;
            if (o.Browser.ielt9)
                for (t in e)
                    o.DomUtil.setOpacity(e[t], this.options.opacity);
            else 
                o.DomUtil.setOpacity(this._container, this.options.opacity);
            if (o.Browser.webkit)
                for (t in e)
                    e[t].style.webkitTransform += " translate(0,0)"
        },
        _initContainer: function() {
            var t = this._map._panes.tilePane;
            if (!this._container) {
                if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex()
                    , this._animated) {
                    var e = "leaflet-tile-container leaflet-zoom-animated";
                    this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e, this._container)
                } else 
                    this._tileContainer = this._container;
                t.appendChild(this._container), 1 > this.options.opacity && this._updateOpacity()
            }
        },
        _reset: function(t) {
            for (var e in this._tiles)
                this.fire("tileunload", {
                    tile: this._tiles[e]
                });
            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
        },
        _update: function() {
            if (this._map) {
                var t = this._map.getPixelBounds(), e = this._map.getZoom(), n = this.options.tileSize;
                if (!(e > this.options.maxZoom || this.options.minZoom > e)) {
                    var i = o.bounds(t.min.divideBy(n)._floor(), t.max.divideBy(n)._floor());
                    this._addTilesFromCenterOut(i), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(i)
                }
            }
        },
        _addTilesFromCenterOut: function(t) {
            var n, i, s, r = [], a = t.getCenter();
            for (n = t.min.y; t.max.y >= n; n++)
                for (i = t.min.x; t.max.x >= i; i++)
                    s = new o.Point(i, n), this._tileShouldBeLoaded(s) && r.push(s);
            var l = r.length;
            if (0 !== l) {
                r.sort(function(t, e) {
                    return t.distanceTo(a) - e.distanceTo(a)
                });
                var h = e.createDocumentFragment();
                for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, i = 0; l > i; i++)
                    this._addTile(r[i], h);
                this._tileContainer.appendChild(h)
            }
        },
        _tileShouldBeLoaded: function(t) {
            if (t.x + ":" + t.y in this._tiles)
                return !1;
            var e = this.options;
            if (!e.continuousWorld && e.noWrap) {
                var n = this._getWrapTileNum();
                if (0 > t.x || t.x >= n || 0 > t.y || t.y >= n)
                    return !1
            }
            if (e.bounds) {
                var i = e.tileSize, o = t.multiplyBy(i), s = o.add([i, i]), r = this._map.unproject(o), a = this._map.unproject(s);
                if (e.continuousWorld || e.noWrap || (r = r.wrap(), a = a.wrap())
                    , !e.bounds.intersects([r, a]))return !1
            }
            return !0
        },
        _removeOtherTiles: function(t) {
            var e, n, i, o;
            for (o in this._tiles)
                e = o.split(":"), n = parseInt(e[0], 10), i = parseInt(e[1], 10), (t.min.x > n || n > t.max.x || t.min.y > i || i > t.max.y) && this._removeTile(o)
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            this.fire("tileunload", {
                tile: e,
                url: e.src
            }), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
        },
        _addTile: function(t, e) {
            var n = this._getTilePos(t), i = this._getTile();
            o.DomUtil.setPosition(i, n, o.Browser.chrome || o.Browser.android23), this._tiles[t.x + ":" + t.y] = i, this._loadTile(i, t), i.parentNode !== this._tileContainer && e.appendChild(i)
        },
        _getZoomForUrl: function() {
            var t = this.options, e = this._map.getZoom();
            return t.zoomReverse && (e = t.maxZoom - e), e + t.zoomOffset
        },
        _getTilePos: function(t) {
            var e = this._map.getPixelOrigin(), n = this.options.tileSize;
            return t.multiplyBy(n).subtract(e)
        },
        getTileUrl: function(t) {
            return o.Util.template(this._url, o.extend({
                s: this._getSubdomain(t),
                z: t.z,
                x: t.x,
                y: t.y
            }, this.options))
        },
        _getWrapTileNum: function() {
            return Math.pow(2, this._getZoomForUrl())
        },
        _adjustTilePoint: function(t) {
            var e = this._getWrapTileNum();
            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x%e + e)%e), this.options.tms && (t.y = e - t.y-1), t.z = this._getZoomForUrl()
        },
        _getSubdomain: function(t) {
            var e = Math.abs(t.x + t.y)%this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _createTileProto: function() {
            var t = this._tileImg = o.DomUtil.create("img", "leaflet-tile");
            t.style.width = t.style.height = this.options.tileSize + "px", t.galleryimg = "no"
        },
        _getTile: function() {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var t = this._unusedTiles.pop();
                return this._resetTile(t), t
            }
            return this._createTile()
        },
        _resetTile: function() {},
        _createTile: function() {
            var t = this._tileImg.cloneNode(!1);
            return t.onselectstart = t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== n && o.DomUtil.setOpacity(t, this.options.opacity), t
        },
        _loadTile: function(t, e) {
            t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e)
        },
        _tileLoaded: function() {
            this._tilesToLoad--, this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
        },
        _tileOnLoad: function() {
            var t = this._layer;
            this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                tile : this, url : this.src
            })), t._tileLoaded()
        },
        _tileOnError: function() {
            var t = this._layer;
            t.fire("tileerror", {
                tile: this,
                url: this.src
            });
            var e = t.options.errorTileUrl;
            e && (this.src = e), t._tileLoaded()
        }
    }), o.tileLayer = function(t, e) {
        return new o.TileLayer(t, e)
    }, o.TileLayer.WMS = o.TileLayer.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            version: "1.1.1",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1
        },
        initialize: function(t, e) {
            this._url = t;
            var n = o.extend({}, this.defaultWmsParams), i = e.tileSize || this.options.tileSize;
            n.width = n.height = e.detectRetina && o.Browser.retina ? 2 * i : i;
            for (var s in e)
                this.options.hasOwnProperty(s) || (n[s] = e[s]);
            this.wmsParams = n, o.setOptions(this, e)
        },
        onAdd: function(t) {
            var e = parseFloat(this.wmsParams.version) >= 1.3 ? "crs": "srs";
            this.wmsParams[e] = t.options.crs.code, o.TileLayer.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t, e) {
            var n = this._map, i = n.options.crs, s = this.options.tileSize, r = t.multiplyBy(s), a = r.add([s, s]), l = i.project(n.unproject(r, e)), h = i.project(n.unproject(a, e)), u = [l.x, h.y, h.x, l.y].join(","), c = o.Util.template(this._url, {
                s: this._getSubdomain(t)
            });
            return c + o.Util.getParamString(this.wmsParams, c) + "&bbox=" + u
        },
        setParams: function(t, e) {
            return o.extend(this.wmsParams, t), e || this.redraw(), this
        }
    }), o.tileLayer.wms = function(t, e) {
        return new o.TileLayer.WMS(t, e)
    }, o.TileLayer.Canvas = o.TileLayer.extend({
        options: {
            async: !1
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        redraw: function() {
            for (var t in this._tiles)
                this._redrawTile(this._tiles[t]);
            return this
        },
        _redrawTile: function(t) {
            this.drawTile(t, t._tilePoint, this._map._zoom)
        },
        _createTileProto: function() {
            var t = this._canvasProto = o.DomUtil.create("canvas", "leaflet-tile");
            t.width = t.height = this.options.tileSize
        },
        _createTile: function() {
            var t = this._canvasProto.cloneNode(!1);
            return t.onselectstart = t.onmousemove = o.Util.falseFn, t
        },
        _loadTile: function(t, e) {
            t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
        },
        drawTile: function() {},
        tileDrawn: function(t) {
            this._tileOnLoad.call(t)
        }
    }), o.tileLayer.canvas = function(t) {
        return new o.TileLayer.Canvas(t)
    }, o.ImageOverlay = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            opacity: 1
        },
        initialize: function(t, e, n) {
            this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, n)
        },
        onAdd: function(t) {
            this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
        },
        onRemove: function(t) {
            t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        setOpacity: function(t) {
            return this.options.opacity = t, this._updateOpacity(), this
        },
        bringToFront: function() {
            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
        },
        bringToBack: function() {
            var t = this._map._panes.overlayPane;
            return this._image && t.insertBefore(this._image, t.firstChild), this
        },
        _initImage: function() {
            this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), o.extend(this._image, {
                galleryimg: "no",
                onselectstart: o.Util.falseFn,
                onmousemove: o.Util.falseFn,
                onload: o.bind(this._onImageLoad, this),
                src: this._url
            })
        },
        _animateZoom: function(t) {
            var e = this._map, n = this._image, i = e.getZoomScale(t.zoom), s = this._bounds.getNorthWest(), r = this._bounds.getSouthEast(), a = e._latLngToNewLayerPoint(s, t.zoom, t.center), l = e._latLngToNewLayerPoint(r, t.zoom, t.center)._subtract(a), h = a._add(l._multiplyBy(.5 * (1-1 / i)));
            n.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(h) + " scale(" + i + ") "
        },
        _reset: function() {
            var t = this._image, e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()), n = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
            o.DomUtil.setPosition(t, e), t.style.width = n.x + "px", t.style.height = n.y + "px"
        },
        _onImageLoad: function() {
            this.fire("load")
        },
        _updateOpacity: function() {
            o.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }), o.imageOverlay = function(t, e, n) {
        return new o.ImageOverlay(t, e, n)
    }, o.Icon = o.Class.extend({
        options: {
            className: ""
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        createIcon: function() {
            return this._createIcon("icon")
        },
        createShadow: function() {
            return this._createIcon("shadow")
        },
        _createIcon: function(t) {
            var e = this._getIconUrl(t);
            if (!e) {
                if ("icon" === t)
                    throw Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(e);
            return this._setIconStyles(n, t), n
        },
        _setIconStyles: function(t, e) {
            var n, i = this.options, s = o.point(i[e + "Size"]);
            n = "shadow" === e ? o.point(i.shadowAnchor || i.iconAnchor) : o.point(i.iconAnchor), !n && s && (n = s.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + i.className, n && (t.style.marginLeft =- n.x + "px", t.style.marginTop =- n.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
        },
        _createImg: function(t) {
            var n;
            return o.Browser.ie6 ? (n = e.createElement("div"), n.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + t + '")') : (n = e.createElement("img"), n.src = t), n
        },
        _getIconUrl: function(t) {
            return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
        }
    }), o.icon = function(t) {
        return new o.Icon(t)
    }, o.Icon.Default = o.Icon.extend({
        options: {
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
            var e = t + "Url";
            if (this.options[e])
                return this.options[e];
            o.Browser.retina && "icon" === t && (t += "-2x");
            var n = o.Icon.Default.imagePath;
            if (!n)
                throw Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
            return n + "/marker-" + t + ".png"
        }
    }), o.Icon.Default.imagePath = function() {
        var t, n, i, o, s, r = e.getElementsByTagName("script"), a = /\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/;
        for (t = 0, n = r.length; n > t; t++)
            if (i = r[t].src, o = i.match(a)
                )return s = i.split(a)[0], (s ? s + "/" : "") + "images"
    }(), o.Marker = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            icon: new o.Icon.Default,
            title: "",
            clickable: !0,
            draggable: !1,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250
        },
        initialize: function(t, e) {
            o.setOptions(this, e), this._latlng = o.latLng(t)
        },
        onAdd: function(t) {
            this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        onRemove: function(t) {
            this.dragging && this.dragging.disable(), this._removeIcon(), this.fire("remove"), t.off({
                viewreset: this.update,
                zoomanim: this._animateZoom
            }, this), this._map = null
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = o.latLng(t), this.update(), this.fire("move", {
                latlng: this._latlng
            })
        },
        setZIndexOffset: function(t) {
            return this.options.zIndexOffset = t, this.update(), this
        },
        setIcon: function(t) {
            return this._map && this._removeIcon(), this.options.icon = t, this._map && (this._initIcon(), this.update()), this
        },
        update: function() {
            if (this._icon) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        },
        _initIcon: function() {
            var t = this.options, e = this._map, n = e.options.zoomAnimation && e.options.markerZoomAnimation, i = n ? "leaflet-zoom-animated": "leaflet-zoom-hide", s=!1;
            this._icon || (this._icon = t.icon.createIcon(), t.title && (this._icon.title = t.title), this._initInteraction(), s = 1 > this.options.opacity, o.DomUtil.addClass(this._icon, i), t.riseOnHover && o.DomEvent.on(this._icon, "mouseover", this._bringToFront, this).on(this._icon, "mouseout", this._resetZIndex, this)), this._shadow || (this._shadow = t.icon.createShadow(), this._shadow && (o.DomUtil.addClass(this._shadow, i), s = 1 > this.options.opacity)), s && this._updateOpacity();
            var r = this._map._panes;
            r.markerPane.appendChild(this._icon), this._shadow && r.shadowPane.appendChild(this._shadow)
        },
        _removeIcon: function() {
            var t = this._map._panes;
            this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), t.markerPane.removeChild(this._icon), this._shadow && t.shadowPane.removeChild(this._shadow), this._icon = this._shadow = null
        },
        _setPos: function(t) {
            o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
        },
        _updateZIndex: function(t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPos(e)
        },
        _initInteraction: function() {
            if (this.options.clickable) {
                var t = this._icon, e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this);
                for (var n = 0; e.length > n; n++)
                    o.DomEvent.on(t, e[n], this._fireMouseEvent, this);
                o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
            }
        },
        _onMouseClick: function(t) {
            var e = this.dragging && this.dragging.moved();
            (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled ||!this._map.dragging ||!this._map.dragging.moved()) && this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _fireMouseEvent: function(t) {
            this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !== t.type && o.DomEvent.stopPropagation(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t, this._map && this._updateOpacity()
        },
        _updateOpacity: function() {
            o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function() {
            this._updateZIndex(0)
        }
    }), o.marker = function(t, e) {
        return new o.Marker(t, e)
    }, o.DivIcon = o.Icon.extend({
        options: {
            iconSize: [12, 12],
            className: "leaflet-div-icon",
            html: !1
        },
        createIcon: function() {
            var t = e.createElement("div"), n = this.options;
            return n.html!==!1 && (t.innerHTML = n.html), n.bgPos && (t.style.backgroundPosition =- n.bgPos.x + "px " +- n.bgPos.y + "px"), this._setIconStyles(t, "icon"), t
        },
        createShadow: function() {
            return null
        }
    }), o.divIcon = function(t) {
        return new o.DivIcon(t)
    }, o.Map.mergeOptions({
        closePopupOnClick: !0
    }), o.Popup = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minWidth: 50,
            maxWidth: 300,
            maxHeight: null,
            autoPan: !0,
            closeButton: !0,
            offset: [0, 6],
            autoPanPadding: [5, 5],
            keepInView: !1,
            className: "",
            zoomAnimation: !0
        },
        initialize: function(t, e) {
            o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation
        },
        onAdd: function(t) {
            this._map = t, this._container || this._initLayout(), this._updateContent();
            var e = t.options.fadeAnimation;
            e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this._update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                popup: this
            }), this._source && this._source.fire("popupopen", {
                popup: this
            })
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        openOn: function(t) {
            return t.openPopup(this), this
        },
        onRemove: function(t) {
            t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                popup: this
            }), this._source && this._source.fire("popupclose", {
                popup: this
            })
        },
        setLatLng: function(t) {
            return this._latlng = o.latLng(t), this._update(), this
        },
        setContent: function(t) {
            return this._content = t, this._update(), this
        },
        _getEvents: function() {
            var t = {
                viewreset: this._updatePosition
            };
            return this._animated && (t.zoomanim = this._zoomAnimation), this._map.options.closePopupOnClick && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
        },
        _close: function() {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function() {
            var t, e = "leaflet-popup", n = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"), i = this._container = o.DomUtil.create("div", n);
            this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", i), t.href = "#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick, this));
            var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", i);
            o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent.on(this._contentNode, "mousewheel", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", e + "-tip-container", i), this._tip = o.DomUtil.create("div", e + "-tip", this._tipContainer)
        },
        _update: function() {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        },
        _updateContent: function() {
            if (this._content) {
                if ("string" == typeof this._content)
                    this._contentNode.innerHTML = this._content;
                else {
                    for (; this._contentNode.hasChildNodes();)
                        this._contentNode.removeChild(this._contentNode.firstChild);
                    this._contentNode.appendChild(this._content)
                }
                this.fire("contentupdate")
            }
        },
        _updateLayout: function() {
            var t = this._contentNode, e = t.style;
            e.width = "", e.whiteSpace = "nowrap";
            var n = t.offsetWidth;
            n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
            var i = t.offsetHeight, s = this.options.maxHeight, r = "leaflet-popup-scrolled";
            s && i > s ? (e.height = s + "px", o.DomUtil.addClass(t, r)) : o.DomUtil.removeClass(t, r), this._containerWidth = this._container.offsetWidth
        },
        _updatePosition: function() {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng), e = this._animated, n = o.point(this.options.offset);
                e && o.DomUtil.setPosition(this._container, t), this._containerBottom =- n.y - (e ? 0 : t.y), this._containerLeft =- Math.round(this._containerWidth / 2) + n.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
            }
        },
        _zoomAnimation: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            o.DomUtil.setPosition(this._container, e)
        },
        _adjustPan: function() {
            if (this.options.autoPan) {
                var t = this._map, e = this._container.offsetHeight, n = this._containerWidth, i = new o.Point(this._containerLeft, - e - this._containerBottom);
                this._animated && i._add(o.DomUtil.getPosition(this._container));
                var s = t.layerPointToContainerPoint(i), r = o.point(this.options.autoPanPadding), a = t.getSize(), l = 0, h = 0;
                s.x + n > a.x && (l = s.x + n - a.x + r.x), 0 > s.x - l && (l = s.x - r.x), s.y + e > a.y && (h = s.y + e - a.y + r.y), 0 > s.y - h && (h = s.y - r.y), (l || h) && t.fire("autopanstart").panBy([l, h])
            }
        },
        _onCloseButtonClick: function(t) {
            this._close(), o.DomEvent.stop(t)
        }
    }), o.popup = function(t, e) {
        return new o.Popup(t, e)
    }, o.Map.include({
        openPopup: function(t, e, n) {
            if (this.closePopup(), !(t instanceof o.Popup)
                ) {
                var i = t;
                t = new o.Popup(n).setLatLng(e).setContent(i)
            }
            return this._popup = t, this.addLayer(t)
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), o.Marker.include({
        openPopup: function() {
            return this._popup && this._map&&!this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        bindPopup: function(t, e) {
            var n = o.point(this.options.icon.options.popupAnchor || [0, 0]);
            return n = n.add(o.Popup.prototype.options.offset), e && e.offset && (n = n.add(e.offset)), e = o.extend({
                offset: n
            }, e), this._popup || this.on("click", this.openPopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t) : this._popup = new o.Popup(e, this).setContent(t), this
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this
        },
        unbindPopup: function() {
            return this._popup && (this._popup = null, this.off("click", this.openPopup).off("remove", this.closePopup).off("move", this._movePopup)), this
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        }
    }), o.LayerGroup = o.Class.extend({
        initialize: function(t) {
            this._layers = {};
            var e, n;
            if (t)
                for (e = 0, n = t.length; n > e; e++)
                    this.addLayer(t[e])
        },
        addLayer: function(t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t, this._map && this._map.addLayer(t), this
        },
        removeLayer: function(t) {
            var e = t in this._layers ? t: this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
        },
        hasLayer: function(t) {
            return t ? t in this._layers || this.getLayerId(t)in this._layers : !1
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this), this
        },
        invoke: function(t) {
            var e, n, i = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)
                n = this._layers[e], n[t] && n[t].apply(n, i);
            return this
        },
        onAdd: function(t) {
            this._map = t, this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this.eachLayer(t.removeLayer, t), this._map = null
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        eachLayer: function(t, e) {
            for (var n in this._layers)
                t.call(e, this._layers[n]);
            return this
        },
        getLayer: function(t) {
            return this._layers[t]
        },
        getLayers: function() {
            var t = [];
            for (var e in this._layers)
                t.push(this._layers[e]);
            return t
        },
        setZIndex: function(t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: function(t) {
            return o.stamp(t)
        }
    }), o.layerGroup = function(t) {
        return new o.LayerGroup(t)
    }, o.FeatureGroup = o.LayerGroup.extend({
        includes: o.Mixin.Events,
        statics: {
            EVENTS: "click dblclick mouseover mouseout mousemove contextmenu"
        },
        addLayer: function(t) {
            return this.hasLayer(t) ? this : (t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function(t) {
            return t in this._layers && (t = this._layers[t]), t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                layer: t
            })
        },
        bindPopup: function(t, e) {
            return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
        },
        setStyle: function(t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function() {
            return this.invoke("bringToFront")
        },
        bringToBack: function() {
            return this.invoke("bringToBack")
        },
        getBounds: function() {
            var t = new o.LatLngBounds;
            return this.eachLayer(function(e) {
                t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
            }), t
        },
        _propagateEvent: function(t) {
            t.layer || (t.layer = t.target), t.target = this, this.fire(t.type, t)
        }
    }), o.featureGroup = function(t) {
        return new o.FeatureGroup(t)
    }, o.Path = o.Class.extend({
        includes: [o.Mixin.Events],
        statics: {
            CLIP_PADDING: o.Browser.mobile ? Math.max(0, Math.min(.5, (1280 / Math.max(t.innerWidth, t.innerHeight)-1) / 2)): .5
        },
        options: {
            stroke: !0,
            color: "#0033ff",
            dashArray: null,
            weight: 5,
            opacity: .5,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        onAdd: function(t) {
            this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        onRemove: function(t) {
            t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        projectLatlngs: function() {},
        setStyle: function(t) {
            return o.setOptions(this, t), this._container && this._updateStyle(), this
        },
        redraw: function() {
            return this._map && (this.projectLatlngs(), this._updatePath()), this
        }
    }), o.Map.include({
        _updatePathViewport: function() {
            var t = o.Path.CLIP_PADDING, e = this.getSize(), n = o.DomUtil.getPosition(this._mapPane), i = n.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()), s = i.add(e.multiplyBy(1 + 2 * t)._round());
            this._pathViewport = new o.Bounds(i, s)
        }
    }), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg=!(!e.createElementNS ||!e.createElementNS(o.Path.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
        statics: {
            SVG: o.Browser.svg
        },
        bringToFront: function() {
            var t = this._map._pathRoot, e = this._container;
            return e && t.lastChild !== e && t.appendChild(e), this
        },
        bringToBack: function() {
            var t = this._map._pathRoot, e = this._container, n = t.firstChild;
            return e && n !== e && t.insertBefore(e, n), this
        },
        getPathString: function() {},
        _createElement: function(t) {
            return e.createElementNS(o.Path.SVG_NS, t)
        },
        _initElements: function() {
            this._map._initPathRoot(), this._initPath(), this._initStyle()
        },
        _initPath: function() {
            this._container = this._createElement("g"), this._path = this._createElement("path"), this._container.appendChild(this._path)
        },
        _initStyle: function() {
            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
        },
        _updateStyle: function() {
            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray")) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
        },
        _updatePath: function() {
            var t = this.getPathString();
            t || (t = "M0 0"), this._path.setAttribute("d", t)
        },
        _initEvents: function() {
            if (this.options.clickable) {
                (o.Browser.svg ||!o.Browser.vml) && this._path.setAttribute("class", "leaflet-clickable"), o.DomEvent.on(this._container, "click", this._onMouseClick, this);
                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; t.length > e; e++)
                    o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
            }
        },
        _onMouseClick: function(t) {
            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
        },
        _fireMouseEvent: function(t) {
            if (this.hasEventListeners(t.type)) {
                var e = this._map, n = e.mouseEventToContainerPoint(t), i = e.containerPointToLayerPoint(n), s = e.layerPointToLatLng(i);
                this.fire(t.type, {
                    latlng: s,
                    layerPoint: i,
                    containerPoint: n,
                    originalEvent: t
                }), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(t)
            }
        }
    }), o.Map.include({
        _initPathRoot: function() {
            this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (this._pathRoot.setAttribute("class", " leaflet-zoom-animated"), this.on({
                zoomanim : this._animatePathZoom, zoomend : this._endPathZoom
            })) : this._pathRoot.setAttribute("class", " leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
        },
        _animatePathZoom: function(t) {
            var e = this.getZoomScale(t.zoom), n = this._getCenterOffset(t.center)._multiplyBy( - e)._add(this._pathViewport.min);
            this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(n) + " scale(" + e + ") ", this._pathZooming=!0
        },
        _endPathZoom: function() {
            this._pathZooming=!1
        },
        _updateSvgViewport: function() {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport, e = t.min, n = t.max, i = n.x - e.x, s = n.y - e.y, r = this._pathRoot, a = this._panes.overlayPane;
                o.Browser.mobileWebkit && a.removeChild(r), o.DomUtil.setPosition(r, e), r.setAttribute("width", i), r.setAttribute("height", s), r.setAttribute("viewBox", [e.x, e.y, i, s].join(" ")), o.Browser.mobileWebkit && a.appendChild(r)
            }
        }
    }), o.Path.include({
        bindPopup: function(t, e) {
            return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded=!0), this
        },
        unbindPopup: function() {
            return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded=!1), this
        },
        openPopup: function(t) {
            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                latlng : t
            })), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        _openPopup: function(t) {
            this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
        }
    }), o.Browser.vml=!o.Browser.svg && function() {
        try {
            var t = e.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var n = t.firstChild;
            return n.style.behavior = "url(#default#VML)", n && "object" == typeof n.adj
        } catch (i) {
            return !1
        }
    }(), o.Path = o.Browser.svg ||!o.Browser.vml ? o.Path : o.Path.extend({
        statics: {
            VML: !0,
            CLIP_PADDING: .02
        },
        _createElement: function() {
            try {
                return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
                    return e.createElement("<lvml:" + t + ' class="lvml">')
                }
            } catch (t) {
                return function(t) {
                    return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        _initPath: function() {
            var t = this._container = this._createElement("shape");
            o.DomUtil.addClass(t,
            "leaflet-vml-shape"),
            this.options.clickable && o.DomUtil.addClass(t,
            "leaflet-clickable"),
            t.coordsize = "1 1",
            this._path = this._createElement("path"),
            t.appendChild(this._path),
            this._map._pathRoot.appendChild(t)
        }, _initStyle : function() {
            this._updateStyle()
        }, _updateStyle: function() {
            var t = this._stroke, e = this._fill, n = this.options, i = this._container;
            i.stroked = n.stroke, i.filled = n.fill, n.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", i.appendChild(t)), t.weight = n.weight + "px", t.color = n.color, t.opacity = n.opacity, t.dashStyle = n.dashArray ? n.dashArray instanceof Array ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : "") : t && (i.removeChild(t), this._stroke = null), n.fill ? (e || (e = this._fill = this._createElement("fill"), i.appendChild(e)), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (i.removeChild(e), this._fill = null)
        }, _updatePath: function() {
            var t = this._container.style;
            t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
        }
    }), o.Map.include(o.Browser.svg ||!o.Browser.vml ? {} : {
        _initPathRoot: function() {
            if (!this._pathRoot) {
                var t = this._pathRoot = e.createElement("div");
                t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
            }
        }
    }), o.Browser.canvas = function() {
        return !!e.createElement("canvas").getContext
    }(), o.Path = o.Path.SVG&&!t.L_PREFER_CANVAS ||!o.Browser.canvas ? o.Path : o.Path.extend({
        statics: {
            CANVAS: !0,
            SVG: !1
        },
        redraw: function() {
            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
        },
        setStyle: function(t) {
            return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
        },
        onRemove: function(t) {
            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && this._map.off("click", this._onClick, this), this._requestUpdate(), this._map = null
        },
        _requestUpdate: function() {
            this._map&&!o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
        },
        _fireMapMoveEnd: function() {
            o.Path._updateRequest = null, this.fire("moveend")
        },
        _initElements: function() {
            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
        },
        _updateStyle: function() {
            var t = this.options;
            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color)
        },
        _drawPath: function() {
            var t, e, n, i, s, r;
            for (this._ctx.beginPath(), t = 0, n = this._parts.length; n > t; t++) {
                for (e = 0, i = this._parts[t].length; i > e; e++)
                    s = this._parts[t][e], r = (0 === e ? "move" : "line") + "To", this._ctx[r](s.x, s.y);
                this instanceof o.Polygon && this._ctx.closePath()
            }
        },
        _checkIfEmpty: function() {
            return !this._parts.length
        },
        _updatePath: function() {
            if (!this._checkIfEmpty()) {
                var t = this._ctx, e = this.options;
                this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill()), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
            }
        },
        _initEvents: function() {
            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this))
        },
        _onClick: function(t) {
            this._containsPoint(t.layerPoint) && this.fire("click", t)
        },
        _onMouseMove: function(t) {
            this._map&&!this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside=!0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside=!1, this.fire("mouseout", t)))
        }
    }), o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS ||!o.Browser.canvas ? {} : {
        _initPathRoot: function() {
            var t, n = this._pathRoot;
            n || (n = this._pathRoot = e.createElement("canvas"), n.style.position = "absolute", t = this._canvasCtx = n.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(n), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
        },
        _updateCanvasViewport: function() {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport, e = t.min, n = t.max.subtract(e), i = this._pathRoot;
                o.DomUtil.setPosition(i, e), i.width = n.x, i.height = n.y, i.getContext("2d").translate( - e.x, - e.y)
            }
        }
    }), o.LineUtil = {
        simplify: function(t, e) {
            if (!e ||!t.length)
                return t.slice();
            var n = e * e;
            return t = this._reducePoints(t, n), t = this._simplifyDP(t, n)
        },
        pointToSegmentDistance: function(t, e, n) {
            return Math.sqrt(this._sqClosestPointOnSegment(t, e, n, !0))
        },
        closestPointOnSegment: function(t, e, n) {
            return this._sqClosestPointOnSegment(t, e, n)
        },
        _simplifyDP: function(t, e) {
            var i = t.length, o = typeof Uint8Array != n + "" ? Uint8Array: Array, s = new o(i);
            s[0] = s[i-1] = 1, this._simplifyDPStep(t, s, e, 0, i-1);
            var r, a = [];
            for (r = 0; i > r; r++)
                s[r] && a.push(t[r]);
            return a
        },
        _simplifyDPStep: function(t, e, n, i, o) {
            var s, r, a, l = 0;
            for (r = i + 1; o-1 >= r; r++)
                a = this._sqClosestPointOnSegment(t[r], t[i], t[o], !0), a > l && (s = r, l = a);
            l > n && (e[s] = 1, this._simplifyDPStep(t, e, n, i, s), this._simplifyDPStep(t, e, n, s, o))
        },
        _reducePoints: function(t, e) {
            for (var n = [t[0]], i = 1, o = 0, s = t.length; s > i; i++)
                this._sqDist(t[i], t[o]) > e && (n.push(t[i]), o = i);
            return s-1 > o && n.push(t[s-1]), n
        },
        clipSegment: function(t, e, n, i) {
            var o, s, r, a = i ? this._lastCode: this._getBitCode(t, n), l = this._getBitCode(e, n);
            for (this._lastCode = l; ;) {
                if (!(a | l))
                    return [t, e];
                if (a & l)
                    return !1;
                o = a || l, s = this._getEdgeIntersection(t, e, o, n), r = this._getBitCode(s, n), o === a ? (t = s, a = r) : (e = s, l = r)
            }
        },
        _getEdgeIntersection: function(t, e, i, s) {
            var r = e.x - t.x, a = e.y - t.y, l = s.min, h = s.max;
            return 8 & i ? new o.Point(t.x + r * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + r * (l.y - t.y) / a, l.y) : 2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / r) : 1 & i ? new o.Point(l.x, t.y + a * (l.x - t.x) / r) : n
        },
        _getBitCode: function(t, e) {
            var n = 0;
            return t.x < e.min.x ? n|=1 : t.x > e.max.x && (n|=2), t.y < e.min.y ? n|=4 : t.y > e.max.y && (n|=8), n
        },
        _sqDist: function(t, e) {
            var n = e.x - t.x, i = e.y - t.y;
            return n * n + i * i
        },
        _sqClosestPointOnSegment: function(t, e, n, i) {
            var s, r = e.x, a = e.y, l = n.x - r, h = n.y - a, u = l * l + h * h;
            return u > 0 && (s = ((t.x - r) * l + (t.y - a) * h) / u, s > 1 ? (r = n.x, a = n.y) : s > 0 && (r += l * s, a += h * s)), l = t.x - r, h = t.y - a, i ? l * l + h * h : new o.Point(r, a)
        }
    }, o.Polyline = o.Path.extend({
        initialize: function(t, e) {
            o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
        },
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        projectLatlngs: function() {
            this._originalPoints = [];
            for (var t = 0, e = this._latlngs.length; e > t; t++)
                this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
        },
        getPathString: function() {
            for (var t = 0, e = this._parts.length, n = ""; e > t; t++)
                n += this._getPathPartStr(this._parts[t]);
            return n
        },
        getLatLngs: function() {
            return this._latlngs
        },
        setLatLngs: function(t) {
            return this._latlngs = this._convertLatLngs(t), this.redraw()
        },
        addLatLng: function(t) {
            return this._latlngs.push(o.latLng(t)), this.redraw()
        },
        spliceLatLngs: function() {
            var t = [].splice.apply(this._latlngs, arguments);
            return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
        },
        closestLayerPoint: function(t) {
            for (var e, n, i = 1 / 0, s = this._parts, r = null, a = 0, l = s.length; l > a; a++)
                for (var h = s[a], u = 1, c = h.length; c > u; u++) {
                    e = h[u-1], n = h[u];
                    var p = o.LineUtil._sqClosestPointOnSegment(t, e, n, !0);
                    i > p && (i = p, r = o.LineUtil._sqClosestPointOnSegment(t, e, n))
                }
            return r && (r.distance = Math.sqrt(i)), r
        },
        getBounds: function() {
            return new o.LatLngBounds(this.getLatLngs())
        },
        _convertLatLngs: function(t, e) {
            var n, i, s = e ? t: [];
            for (n = 0, i = t.length; i > n; n++) {
                if (o.Util.isArray(t[n]) && "number" != typeof t[n][0])
                    return;
                s[n] = o.latLng(t[n])
            }
            return s
        },
        _initEvents: function() {
            o.Path.prototype._initEvents.call(this)
        },
        _getPathPartStr: function(t) {
            for (var e, n = o.Path.VML, i = 0, s = t.length, r = ""; s > i; i++)
                e = t[i], n && e._round(), r += (i ? "L" : "M") + e.x + " " + e.y;
            return r
        },
        _clipPoints: function() {
            var t, e, i, s = this._originalPoints, r = s.length;
            if (this.options.noClip)
                return this._parts = [s], n;
            this._parts = [];
            var a = this._parts, l = this._map._pathViewport, h = o.LineUtil;
            for (t = 0, e = 0; r-1 > t; t++)
                i = h.clipSegment(s[t], s[t + 1], l, t), i && (a[e] = a[e] || [], a[e].push(i[0]), (i[1] !== s[t + 1] || t === r-2) && (a[e].push(i[1]), e++))
        },
        _simplifyPoints: function() {
            for (var t = this._parts, e = o.LineUtil, n = 0, i = t.length; i > n; n++)
                t[n] = e.simplify(t[n], this.options.smoothFactor)
        },
        _updatePath: function() {
            this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
        }
    }), o.polyline = function(t, e) {
        return new o.Polyline(t, e)
    }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function(t, e) {
        var n, i, s, r, a, l, h, u, c, p = [1, 4, 2, 8], d = o.LineUtil;
        for (i = 0, h = t.length; h > i; i++)
            t[i]._code = d._getBitCode(t[i], e);
        for (r = 0; 4 > r; r++) {
            for (u = p[r], n = [], i = 0, h = t.length, s = h-1; h > i; s = i++)
                a = t[i], l = t[s], a._code & u ? l._code & u || (c = d._getEdgeIntersection(l, a, u, e), c._code = d._getBitCode(c, e), n.push(c)) : (l._code & u && (c = d._getEdgeIntersection(l, a, u, e), c._code = d._getBitCode(c, e), n.push(c)), n.push(a));
            t = n
        }
        return t
    }, o.Polygon = o.Polyline.extend({
        options: {
            fill: !0
        },
        initialize: function(t, e) {
            var n, i, s;
            if (o.Polyline.prototype.initialize.call(this, t, e), t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), n = 0, i = this._holes.length; i > n; n++)
                s = this._holes[n] = this._convertLatLngs(this._holes[n]), s[0].equals(s[s.length-1]) && s.pop();
            t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length-1]) && t.pop()
        },
        projectLatlngs: function() {
            if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                var t, e, n, i;
                for (t = 0, n = this._holes.length; n > t; t++)
                    for (this._holePoints[t] = [], e = 0, i = this._holes[t].length; i > e; e++)
                        this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
            }
        },
        _clipPoints: function() {
            var t = this._originalPoints, e = [];
            if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
                for (var n = 0, i = this._parts.length; i > n; n++) {
                    var s = o.PolyUtil.clipPolygon(this._parts[n], this._map._pathViewport);
                    s.length && e.push(s)
                }
                this._parts = e
            }
        },
        _getPathPartStr: function(t) {
            var e = o.Polyline.prototype._getPathPartStr.call(this, t);
            return e + (o.Browser.svg ? "z" : "x")
        }
    }), o.polygon = function(t, e) {
        return new o.Polygon(t, e)
    }, function() {
        function t(t) {
            return o.FeatureGroup.extend({
                initialize: function(t, e) {
                    this._layers = {}, this._options = e, this.setLatLngs(t)
                },
                setLatLngs: function(e) {
                    var n = 0, i = e.length;
                    for (this.eachLayer(function(t) {
                        i > n ? t.setLatLngs(e[n++]) : this.removeLayer(t)
                    }, this); i > n;)
                        this.addLayer(new t(e[n++], this._options));
                    return this
                }
            })
        }
        o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function(t, e) {
            return new o.MultiPolyline(t, e)
        }, o.multiPolygon = function(t, e) {
            return new o.MultiPolygon(t, e)
        }
    }(), o.Rectangle = o.Polygon.extend({
        initialize: function(t, e) {
            o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    }), o.rectangle = function(t, e) {
        return new o.Rectangle(t, e)
    }, o.Circle = o.Path.extend({
        initialize: function(t, e, n) {
            o.Path.prototype.initialize.call(this, n), this._latlng = o.latLng(t), this._mRadius = e
        },
        options: {
            fill: !0
        },
        setLatLng: function(t) {
            return this._latlng = o.latLng(t), this.redraw()
        },
        setRadius: function(t) {
            return this._mRadius = t, this.redraw()
        },
        projectLatlngs: function() {
            var t = this._getLngRadius(), e = this._latlng, n = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
            this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - n.x, 1)
        },
        getBounds: function() {
            var t = this._getLngRadius(), e = 360 * (this._mRadius / 40075017), n = this._latlng;
            return new o.LatLngBounds([n.lat - e, n.lng - t], [n.lat + e, n.lng + t])
        },
        getLatLng: function() {
            return this._latlng
        },
        getPathString: function() {
            var t = this._point, e = this._radius;
            return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0," + 23592600)
        },
        getRadius: function() {
            return this._mRadius
        },
        _getLatRadius: function() {
            return 360 * (this._mRadius / 40075017)
        },
        _getLngRadius: function() {
            return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
        },
        _checkIfEmpty: function() {
            if (!this._map)
                return !1;
            var t = this._map._pathViewport, e = this._radius, n = this._point;
            return n.x - e > t.max.x || n.y - e > t.max.y || n.x + e < t.min.x || n.y + e < t.min.y
        }
    }), o.circle = function(t, e, n) {
        return new o.Circle(t, e, n)
    }, o.CircleMarker = o.Circle.extend({
        options: {
            radius: 10,
            weight: 2
        },
        initialize: function(t, e) {
            o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
        },
        projectLatlngs: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng)
        },
        _updateStyle: function() {
            o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
        },
        setRadius: function(t) {
            return this.options.radius = this._radius = t, this.redraw()
        }
    }), o.circleMarker = function(t, e) {
        return new o.CircleMarker(t, e)
    }, o.Polyline.include(o.Path.CANVAS ? {
        _containsPoint: function(t, e) {
            var n, i, s, r, a, l, h, u = this.options.weight / 2;
            for (o.Browser.touch && (u += 10), n = 0, r = this._parts.length; r > n; n++)
                for (h = this._parts[n], i = 0, a = h.length, s = a-1; a > i; s = i++)
                    if ((e || 0 !== i) && (l = o.LineUtil.pointToSegmentDistance(t, h[s], h[i]), u >= l))
                        return !0;
            return !1
        }
    } : {}), o.Polygon.include(o.Path.CANVAS ? {
        _containsPoint: function(t) {
            var e, n, i, s, r, a, l, h, u=!1;
            if (o.Polyline.prototype._containsPoint.call(this, t, !0))
                return !0;
            for (s = 0, l = this._parts.length; l > s; s++)
                for (e = this._parts[s], r = 0, h = e.length, a = h-1; h > r; a = r++)
                    n = e[r], i = e[a], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (u=!u);
            return u
        }
    } : {}), o.Circle.include(o.Path.CANVAS ? {
        _drawPath: function() {
            var t = this._point;
            this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
        },
        _containsPoint: function(t) {
            var e = this._point, n = this.options.stroke ? this.options.weight / 2: 0;
            return t.distanceTo(e) <= this._radius + n
        }
    } : {}), o.GeoJSON = o.FeatureGroup.extend({
        initialize: function(t, e) {
            o.setOptions(this, e), this._layers = {}, t && this.addData(t)
        },
        addData: function(t) {
            var e, n, i = o.Util.isArray(t) ? t: t.features;
            if (i) {
                for (e = 0, n = i.length; n > e; e++)(i[e].geometries || i[e].geometry || i[e].features) 
                    && this.addData(i[e]);
                return this
            }
            var s = this.options;
            if (!s.filter || s.filter(t)) {
                var r = o.GeoJSON.geometryToLayer(t, s.pointToLayer, s.coordsToLatLng);
                return r.feature = t, r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)
            }
        },
        resetStyle: function(t) {
            var e = this.options.style;
            e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
        },
        setStyle: function(t) {
            this.eachLayer(function(e) {
                this._setLayerStyle(e, t)
            }, this)
        },
        _setLayerStyle: function(t, e) {
            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
        }
    }), o.extend(o.GeoJSON, {
        geometryToLayer: function(t, e, n) {
            var i, s, r, a, l, h = "Feature" === t.type ? t.geometry: t, u = h.coordinates, c = [];
            switch (n = n || this.coordsToLatLng, h.type) {
            case"Point":
                return i = n(u), e ? e(t, i) : new o.Marker(i);
            case"MultiPoint":
                for (r = 0, a = u.length; a > r; r++)
                    i = n(u[r]), l = e ? e(t, i) : new o.Marker(i), c.push(l);
                return new o.FeatureGroup(c);
            case"LineString":
                return s = this.coordsToLatLngs(u, 0, n), new o.Polyline(s);
            case"Polygon":
                return s = this.coordsToLatLngs(u, 1, n), new o.Polygon(s);
            case"MultiLineString":
                return s = this.coordsToLatLngs(u, 1, n), new o.MultiPolyline(s);
            case"MultiPolygon":
                return s = this.coordsToLatLngs(u, 2, n), new o.MultiPolygon(s);
            case"GeometryCollection":
                for (r = 0, a = h.geometries.length; a > r; r++)
                    l = this.geometryToLayer({
                        geometry: h.geometries[r],
                        type: "Feature",
                        properties: t.properties
                    }, e), c.push(l);
                return new o.FeatureGroup(c);
            default:
                throw Error("Invalid GeoJSON object.")
            }
        },
        coordsToLatLng: function(t) {
            return new o.LatLng(t[1], t[0])
        },
        coordsToLatLngs: function(t, e, n) {
            var i, o, s, r = [];
            for (o = 0, s = t.length; s > o; o++)
                i = e ? this.coordsToLatLngs(t[o], e-1, n) : (n || this.coordsToLatLng)(t[o]), r.push(i);
            return r
        },
        latLngToCoords: function(t) {
            return [t.lng, t.lat]
        },
        latLngsToCoords: function(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++)
                e.push(o.GeoJSON.latLngToCoords(t[n]));
            return e
        }
    }), o.Marker.include({
        toGeoJSON: function() {
            return {
                type: "Point",
                coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
            }
        }
    }), o.Polyline.include({
        toGeoJSON: function() {
            return {
                type: "LineString",
                coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
            }
        }
    }), o.Polygon.include({
        toGeoJSON: function() {
            var t, e, n, i = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
            if (i[0].push(i[0][0]), this._holes)
                for (t = 0, e = this._holes.length; e > t; t++)
                    n = o.GeoJSON.latLngsToCoords(this._holes[t]), n.push(n[0]), i.push(n);
            return {
                type: "Polygon",
                coordinates: i
            }
        }
    }), function() {
        function t(t, e) {
            t.include({
                toGeoJSON: function() {
                    var t = [];
                    return this.eachLayer(function(e) {
                        t.push(e.toGeoJSON().coordinates)
                    }), {
                        type: e, coordinates: t
                    }
                }
            })
        }
        t(o.MultiPolyline, "MultiLineString"), t(o.MultiPolygon, "MultiPolygon")
    }(), o.LayerGroup.include({
        toGeoJSON: function() {
            var t = [];
            return this.eachLayer(function(e) {
                e.toGeoJSON && t.push(e.toGeoJSON())
            }), {
                type: "GeometryCollection", geometries: t
            }
        }
    }), o.geoJson = function(t, e) {
        return new o.GeoJSON(t, e)
    }, o.DomEvent = {
        addListener: function(t, e, i, s) {
            var r, a, l, h = o.stamp(i), u = "_leaflet_" + e + h;
            return t[u] ? this : (r = function(e) {
                return i.call(s || t, e || o.DomEvent._getEvent())
            }, o.Browser.msTouch && 0 === e.indexOf("touch") ? this.addMsTouchListener(t, e, r, h) : (o.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, r, h), "addEventListener"in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", r, !1), t.addEventListener(e, r, !1)) : "mouseenter" === e || "mouseleave" === e ? (a = r, l = "mouseenter" === e ? "mouseover" : "mouseout", r = function(e) {
                return o.DomEvent._checkMouse(t, e) ? a(e) : n
            },
            t.addEventListener(l,
            r,
            !1)): "click" === e && o.Browser.android ? (a = r, r = function(t) {
                return o.DomEvent._filterClick(t,
                a)
            },
            t.addEventListener(e,
            r,
            !1)): t.addEventListener(e, r, !1): "attachEvent"in t && t.attachEvent("on" + e,
            r),
            t[u] = r,
            this))
        }, removeListener: function(t, e, n) {
            var i = o.stamp(n), s = "_leaflet_" + e + i, r = t[s];
            return r ? (o.Browser.msTouch && 0 === e.indexOf("touch") ? this.removeMsTouchListener(t, e, i) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, i) : "removeEventListener"in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", r, !1), t.removeEventListener(e, r, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", r, !1) : t.removeEventListener(e, r, !1) : "detachEvent"in t && t.detachEvent("on" + e, r), t[s] = null, this) : this
        }, stopPropagation: function(t) {
            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble=!0, this
        }, disableClickPropagation: function(t) {
            for (var e = o.DomEvent.stopPropagation, n = o.Draggable.START.length-1; n >= 0; n--)
                o.DomEvent.addListener(t, o.Draggable.START[n], e);
            return o.DomEvent.addListener(t, "click", e).addListener(t, "dblclick", e)
        }, preventDefault: function(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue=!1, this
        }, stop: function(t) {
            return o.DomEvent.preventDefault(t).stopPropagation(t)
        }, getMousePosition: function(t, n) {
            var i = e.body, s = e.documentElement, r = t.pageX ? t.pageX: t.clientX + i.scrollLeft + s.scrollLeft, a = t.pageY ? t.pageY: t.clientY + i.scrollTop + s.scrollTop, l = new o.Point(r, a);
            return n ? l._subtract(o.DomUtil.getViewportOffset(n)) : l
        }, getWheelDelta: function(t) {
            var e = 0;
            return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e =- t.detail / 3), e
        }, _checkMouse: function(t, e) {
            var n = e.relatedTarget;
            if (!n)
                return !0;
            try {
                for (; n && n !== t;)
                    n = n.parentNode
            } catch (i) {
                return !1
            }
            return n !== t
        }, _getEvent: function() {
            var e = t.event;
            if (!e)
                for (var n = arguments.callee.caller; n && (e = n.arguments[0], !e || t.Event !== e.constructor);)
                    n = n.caller;
            return e
        }, _filterClick: function(t, e) {
            var i = t.timeStamp || t.originalEvent.timeStamp, s = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
            return s && s > 100 && 400 > s ? (o.DomEvent.stop(t), n) : (o.DomEvent._lastClick = i, e(t))
        }
    }, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
        includes: o.Mixin.Events,
        statics: {
            START: o.Browser.touch ? ["touchstart", "mousedown"]: ["mousedown"],
            END: {
                mousedown: "mouseup",
                touchstart: "touchend",
                MSPointerDown: "touchend"
            },
            MOVE: {
                mousedown: "mousemove",
                touchstart: "touchmove",
                MSPointerDown: "touchmove"
            },
            TAP_TOLERANCE: 15
        },
        initialize: function(t, e, n) {
            this._element = t, this._dragStartTarget = e || t, this._longPress = n&&!o.Browser.msTouch
        },
        enable: function() {
            if (!this._enabled) {
                for (var t = o.Draggable.START.length-1; t >= 0; t--)
                    o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled=!0
            }
        },
        disable: function() {
            if (this._enabled) {
                for (var t = o.Draggable.START.length-1; t >= 0; t--)
                    o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled=!1, this._moved=!1
            }
        },
        _onDown: function(t) {
            if (!t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (o.DomEvent.preventDefault(t).stopPropagation(t), !o.Draggable._disabled)) {
                this._simulateClick=!0;
                var i = t.touches && t.touches.length || 0;
                if (i > 1)
                    return this._simulateClick=!1, clearTimeout(this._longPressTimeout), n;
                var s = 1 === i ? t.touches[0]: t, r = s.target;
                o.Browser.touch && "a" === r.tagName.toLowerCase() && o.DomUtil.addClass(r, "leaflet-active"), this._moved=!1, this._moving || (this._startPoint = new o.Point(s.clientX, s.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(this._element), 1 === i && o.Browser.touch && this._longPress && (this._longPressTimeout = setTimeout(o.bind(function() {
                    var t = this._newPos && this._newPos.distanceTo(this._startPos) || 0;
                    o.Draggable.TAP_TOLERANCE > t && (this._simulateClick=!1, this._onUp(), this._simulateEvent("contextmenu", s))
                }, this), 1e3)), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this))
            }
        },
        _onMove: function(t) {
            if (!(t.touches && t.touches.length > 1)) {
                var n = t.touches && 1 === t.touches.length ? t.touches[0]: t, i = new o.Point(n.clientX, n.clientY), s = i.subtract(this._startPoint);
                (s.x || s.y) && (o.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved=!0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s), o.Browser.touch || (o.DomUtil.disableTextSelection(), o.DomUtil.addClass(e.body, "leaflet-dragging"))), this._newPos = this._startPos.add(s), this._moving=!0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))
            }
        },
        _updatePosition: function() {
            this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
        },
        _onUp: function(t) {
            var n, i, s, r, a;
            clearTimeout(this._longPressTimeout), this._simulateClick && t.changedTouches && (s = this._newPos && this._newPos.distanceTo(this._startPos) || 0, n = t.changedTouches[0], i = n.target, "a" === i.tagName.toLowerCase() && o.DomUtil.removeClass(i, "leaflet-active"), o.Draggable.TAP_TOLERANCE > s && (r=!0)), o.Browser.touch || (o.DomUtil.enableTextSelection(), o.DomUtil.removeClass(e.body, "leaflet-dragging"));
            for (a in o.Draggable.MOVE)
                o.DomEvent.off(e, o.Draggable.MOVE[a], this._onMove).off(e, o.Draggable.END[a], this._onUp);
            this._moved && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend")), this._moving=!1, r && (this._moved=!1, this._simulateEvent("click", n))
        },
        _simulateEvent: function(n, i) {
            var o = e.createEvent("MouseEvents");
            o.initMouseEvent(n, !0, !0, t, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(o)
        }
    }), o.Handler = o.Class.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            this._enabled || (this._enabled=!0, this.addHooks())
        },
        disable: function() {
            this._enabled && (this._enabled=!1, this.removeHooks())
        },
        enabled: function() {
            return !!this._enabled
        }
    }), o.Map.mergeOptions({
        dragging: !0,
        inertia: !o.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        inertiaThreshold: o.Browser.touch ? 32: 18,
        easeLinearity: .25,
        longPress: !0,
        worldCopyJump: !1
    }), o.Map.Drag = o.Handler.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new o.Draggable(t._mapPane, t._container, t.options.longPress), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this))
            }
            this._draggable.enable()
        },
        removeHooks: function() {
            this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function() {
            var t = this._map;
            t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function() {
            if (this._map.options.inertia) {
                var t = this._lastTime =+ new Date, e = this._lastPos = this._draggable._newPos;
                this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move").fire("drag")
        },
        _onViewReset: function() {
            var t = this._map.getSize()._divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
        },
        _onPreDrag: function() {
            var t = this._worldWidth, e = Math.round(t / 2), n = this._initialWorldOffset, i = this._draggable._newPos.x, o = (i - e + n)%t + e - n, s = (i + e + n)%t - e - n, r = Math.abs(o + n) < Math.abs(s + n) ? o: s;
            this._draggable._newPos.x = r
        },
        _onDragEnd: function() {
            var t = this._map, e = t.options, n =+ new Date - this._lastTime, i=!e.inertia || n > e.inertiaThreshold ||!this._positions[0];
            if (t.fire("dragend"), i)
                t.fire("moveend");
            else {
                var s = this._lastPos.subtract(this._positions[0]), r = (this._lastTime + n - this._times[0]) / 1e3, a = e.easeLinearity, l = s.multiplyBy(a / r), h = l.distanceTo([0, 0]), u = Math.min(e.inertiaMaxSpeed, h), c = l.multiplyBy(u / h), p = u / (e.inertiaDeceleration * a), d = c.multiplyBy( - p / 2).round();
                d.x && d.y ? o.Util.requestAnimFrame(function() {
                    t.panBy(d, {
                        duration: p,
                        easeLinearity: a,
                        noMoveStart: !0
                    })
                }) : t.fire("moveend")
            }
        }
    }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
        doubleClickZoom: !0
    }), o.Map.DoubleClickZoom = o.Handler.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick)
        },
        _onDoubleClick: function(t) {
            this.setZoomAround(t.containerPoint, this._zoom + 1)
        }
    }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
        scrollWheelZoom: !0
    }), o.Map.ScrollWheelZoom = o.Handler.extend({
        addHooks: function() {
            o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function() {
            o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll)
        },
        _onWheelScroll: function(t) {
            var e = o.DomEvent.getWheelDelta(t);
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime =+ new Date);
            var n = Math.max(40 - ( + new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), n), o.DomEvent.preventDefault(t), o.DomEvent.stopPropagation(t)
        },
        _performZoom: function() {
            var t = this._map, e = this._delta, n = t.getZoom();
            e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(n + e) - n, this._delta = 0, this._startTime = null, e && t.setZoomAround(this._lastMousePos, n + e)
        }
    }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
        _touchstart: o.Browser.msTouch ? "MSPointerDown": "touchstart",
        _touchend: o.Browser.msTouch ? "MSPointerUp": "touchend",
        addDoubleTapListener: function(t, n, i) {
            function s(t) {
                var e;
                if (o.Browser.msTouch ? (f.push(t.pointerId), e = f.length) : e = t.touches.length, !(e > 1)
                    ) {
                    var n = Date.now(), i = n - (a || n);
                    l = t.touches ? t.touches[0] : t, h = i > 0 && u >= i, a = n
                }
            }
            function r(t) {
                if (o.Browser.msTouch) {
                    var e = f.indexOf(t.pointerId);
                    if (-1 === e)
                        return;
                    f.splice(e, 1)
                }
                if (h) {
                    if (o.Browser.msTouch) {
                        var i, s = {};
                        for (var r in l)
                            i = l[r], s[r] = "function" == typeof i ? i.bind(l) : i;
                        l = s
                    }
                    l.type = "dblclick", n(l), a = null
                }
            }
            var a, l, h=!1, u = 250, c = "_leaflet_", p = this._touchstart, d = this._touchend, f = [];
            t[c + p + i] = s, t[c + d + i] = r;
            var m = o.Browser.msTouch ? e.documentElement: t;
            return t.addEventListener(p, s, !1), m.addEventListener(d, r, !1), o.Browser.msTouch && m.addEventListener("MSPointerCancel", r, !1), this
        },
        removeDoubleTapListener: function(t, n) {
            var i = "_leaflet_";
            return t.removeEventListener(this._touchstart, t[i + this._touchstart + n], !1), (o.Browser.msTouch ? e.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + n], !1), o.Browser.msTouch && e.documentElement.removeEventListener("MSPointerCancel", t[i + this._touchend + n], !1), this
        }
    }), o.extend(o.DomEvent, {
        _msTouches: [],
        _msDocumentListener: !1,
        addMsTouchListener: function(t, e, n, i) {
            switch (e) {
            case"touchstart":
                return this.addMsTouchListenerStart(t, e, n, i);
            case"touchend":
                return this.addMsTouchListenerEnd(t, e, n, i);
            case"touchmove":
                return this.addMsTouchListenerMove(t, e, n, i);
            default:
                throw "Unknown touch event type"
            }
        },
        addMsTouchListenerStart: function(t, n, i, o) {
            var s = "_leaflet_", r = this._msTouches, a = function(t) {
                for (var e=!1, n = 0; r.length > n; n++)
                    if (r[n].pointerId === t.pointerId) {
                        e=!0;
                        break
                    }
                e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], i(t)
            };
            if (t[s + "touchstart" + o] = a, t.addEventListener("MSPointerDown", a, !1)
                , !this._msDocumentListener) {
                var l = function(t) {
                    for (var e = 0; r.length > e; e++)
                        if (r[e].pointerId === t.pointerId) {
                            r.splice(e, 1);
                            break
                        }
                };
                e.documentElement.addEventListener("MSPointerUp", l, !1), e.documentElement.addEventListener("MSPointerCancel", l, !1), this._msDocumentListener=!0
            }
            return this
        },
        addMsTouchListenerMove: function(t, e, n, i) {
            function o(t) {
                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE || 0 !== t.buttons) {
                    for (var e = 0; r.length > e; e++)
                        if (r[e].pointerId === t.pointerId) {
                            r[e] = t;
                            break
                        }
                    t.touches = r.slice(), t.changedTouches = [t], n(t)
                }
            }
            var s = "_leaflet_", r = this._msTouches;
            return t[s + "touchmove" + i] = o, t.addEventListener("MSPointerMove", o, !1), this
        },
        addMsTouchListenerEnd: function(t, e, n, i) {
            var o = "_leaflet_", s = this._msTouches, r = function(t) {
                for (var e = 0; s.length > e; e++)
                    if (s[e].pointerId === t.pointerId) {
                        s.splice(e, 1);
                        break
                    }
                t.touches = s.slice(), t.changedTouches = [t], n(t)
            };
            return t[o + "touchend" + i] = r, t.addEventListener("MSPointerUp", r, !1), t.addEventListener("MSPointerCancel", r, !1), this
        },
        removeMsTouchListener: function(t, e, n) {
            var i = "_leaflet_", o = t[i + e + n];
            switch (e) {
            case"touchstart":
                t.removeEventListener("MSPointerDown", o, !1);
                break;
            case"touchmove":
                t.removeEventListener("MSPointerMove", o, !1);
                break;
            case"touchend":
                t.removeEventListener("MSPointerUp", o, !1), t.removeEventListener("MSPointerCancel", o, !1)
            }
            return this
        }
    }), o.Map.mergeOptions({
        touchZoom: o.Browser.touch&&!o.Browser.android23
    }), o.Map.TouchZoom = o.Handler.extend({
        addHooks: function() {
            o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var n = this._map;
            if (t.touches && 2 === t.touches.length&&!n._animatingZoom&&!this._zooming) {
                var i = n.mouseEventToLayerPoint(t.touches[0]), s = n.mouseEventToLayerPoint(t.touches[1]), r = n._getCenterLayerPoint();
                this._startCenter = i.add(s)._divideBy(2), this._startDist = i.distanceTo(s), this._moved=!1, this._zooming=!0, this._centerOffset = r.subtract(this._startCenter), n._panAnim && n._panAnim.stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
            }
        },
        _onTouchMove: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var n = e.mouseEventToLayerPoint(t.touches[0]), i = e.mouseEventToLayerPoint(t.touches[1]);
                this._scale = n.distanceTo(i) / this._startDist, this._delta = n._add(i)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (this._moved || (o.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved=!0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
            }
        },
        _updateOnMove: function() {
            var t = this._map, e = this._getScaleOrigin(), n = t.layerPointToLatLng(e), i = t.getScaleZoom(this._scale);
            t._animateZoom(n, i, this._startCenter, this._scale, this._delta, !0)
        },
        _onTouchEnd: function() {
            if (!this._moved ||!this._zooming)
                return this._zooming=!1, n;
            var t = this._map;
            this._zooming=!1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
            var i = this._getScaleOrigin(), s = t.layerPointToLatLng(i), r = t.getZoom(), a = t.getScaleZoom(this._scale) - r, l = a > 0 ? Math.ceil(a): Math.floor(a), h = t._limitZoom(r + l), u = t.getZoomScale(h) / this._scale;
            t._animateZoom(s, h, i, u, null, !0)
        },
        _getScaleOrigin: function() {
            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
            return this._startCenter.add(t)
        }
    }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
        boxZoom: !0
    }), o.Map.BoxZoom = o.Handler.extend({
        initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
        },
        addHooks: function() {
            o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            o.DomEvent.off(this._container, "mousedown", this._onMouseDown)
        },
        _onMouseDown: function(t) {
            return !t.shiftKey || 1 !== t.which && 1 !== t.button?!1 : (o.DomUtil.disableTextSelection(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", o.DomEvent.on(e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown, this).preventDefault(t), this._map.fire("boxzoomstart"), n)
        },
        _onMouseMove: function(t) {
            var e = this._startLayerPoint, n = this._box, i = this._map.mouseEventToLayerPoint(t), s = i.subtract(e), r = new o.Point(Math.min(i.x, e.x), Math.min(i.y, e.y));
            o.DomUtil.setPosition(n, r), n.style.width = Math.max(0, Math.abs(s.x)-4) + "px", n.style.height = Math.max(0, Math.abs(s.y)-4) + "px"
        },
        _finish: function() {
            this._pane.removeChild(this._box), this._container.style.cursor = "", o.DomUtil.enableTextSelection(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp).off(e, "keydown", this._onKeyDown)
        },
        _onMouseUp: function(t) {
            this._finish();
            var e = this._map, n = e.mouseEventToLayerPoint(t);
            if (!this._startLayerPoint.equals(n)) {
                var i = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(n));
                e.fitBounds(i), e.fire("boxzoomend", {
                    boxZoomBounds: i
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
        keyboard: !0,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    }), o.Map.Keyboard = o.Handler.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61],
            zoomOut: [189, 109, 173]
        },
        initialize: function(t) {
            this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
        },
        addHooks: function() {
            var t = this._map._container;
            -1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
        },
        removeHooks: function() {
            this._removeHooks();
            var t = this._map._container;
            o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var n = e.body, i = e.documentElement, o = n.scrollTop || i.scrollTop, s = n.scrollTop || i.scrollLeft;
                this._map._container.focus(), t.scrollTo(s, o)
            }
        },
        _onFocus: function() {
            this._focused=!0, this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused=!1, this._map.fire("blur")
        },
        _setPanOffset: function(t) {
            var e, n, i = this._panKeys = {}, o = this.keyCodes;
            for (e = 0, n = o.left.length; n > e; e++)
                i[o.left[e]] = [-1 * t, 0];
            for (e = 0, n = o.right.length; n > e; e++)
                i[o.right[e]] = [t, 0];
            for (e = 0, n = o.down.length; n > e; e++)
                i[o.down[e]] = [0, t];
            for (e = 0, n = o.up.length; n > e; e++)
                i[o.up[e]] = [0, -1 * t]
        },
        _setZoomOffset: function(t) {
            var e, n, i = this._zoomKeys = {}, o = this.keyCodes;
            for (e = 0, n = o.zoomIn.length; n > e; e++)
                i[o.zoomIn[e]] = t;
            for (e = 0, n = o.zoomOut.length; n > e; e++)
                i[o.zoomOut[e]] =- t
        },
        _addHooks: function() {
            o.DomEvent.on(e, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            o.DomEvent.off(e, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            var e = t.keyCode, n = this._map;
            if (e in this._panKeys)
                n.panBy(this._panKeys[e]), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
            else {
                if (!(e in this._zoomKeys))
                    return;
                n.setZoom(n.getZoom() + this._zoomKeys[e])
            }
            o.DomEvent.stop(t)
        }
    }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
        initialize: function(t) {
            this._marker = t
        },
        addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable()
        },
        removeHooks: function() {
            this._draggable.off("dragstart", this._onDragStart).off("drag", this._onDrag).off("dragend", this._onDragEnd), this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function() {
            this._marker.closePopup().fire("movestart").fire("dragstart")
        },
        _onDrag: function() {
            var t = this._marker, e = t._shadow, n = o.DomUtil.getPosition(t._icon), i = t._map.layerPointToLatLng(n);
            e && o.DomUtil.setPosition(e, n), t._latlng = i, t.fire("move", {
                latlng: i
            }).fire("drag")
        },
        _onDragEnd: function() {
            this._marker.fire("moveend").fire("dragend")
        }
    }), o.Control = o.Class.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            o.setOptions(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this._map = t;
            var e = this._container = this.onAdd(t), n = this.getPosition(), i = t._controlCorners[n];
            return o.DomUtil.addClass(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this
        },
        removeFrom: function(t) {
            var e = this.getPosition(), n = t._controlCorners[e];
            return n.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
        }
    }), o.control = function(t) {
        return new o.Control(t)
    }, o.Map.include({
        addControl: function(t) {
            return t.addTo(this), this
        },
        removeControl: function(t) {
            return t.removeFrom(this), this
        },
        _initControlPos: function() {
            function t(t, s) {
                var r = n + t + " " + n + s;
                e[t + s] = o.DomUtil.create("div", r, i)
            }
            var e = this._controlCorners = {}, n = "leaflet-", i = this._controlContainer = o.DomUtil.create("div", n + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function() {
            this._container.removeChild(this._controlContainer)
        }
    }), o.Control.Zoom = o.Control.extend({
        options: {
            position: "topleft"
        },
        onAdd: function(t) {
            var e = "leaflet-control-zoom", n = o.DomUtil.create("div", e + " leaflet-bar");
            return this._map = t, this._zoomInButton = this._createButton("+", "Zoom in", e + "-in", n, this._zoomIn, this), this._zoomOutButton = this._createButton("-", "Zoom out", e + "-out", n, this._zoomOut, this), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
        },
        onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        _zoomIn: function(t) {
            this._map.zoomIn(t.shiftKey ? 3 : 1)
        },
        _zoomOut: function(t) {
            this._map.zoomOut(t.shiftKey ? 3 : 1)
        },
        _createButton: function(t, e, n, i, s, r) {
            var a = o.DomUtil.create("a", n, i);
            a.innerHTML = t, a.href = "#", a.title = e;
            var l = o.DomEvent.stopPropagation;
            return o.DomEvent.on(a, "click", l).on(a, "mousedown", l).on(a, "dblclick", l).on(a, "click", o.DomEvent.preventDefault).on(a, "click", s, r), a
        },
        _updateDisabled: function() {
            var t = this._map, e = "leaflet-disabled";
            o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
        }
    }), o.Map.mergeOptions({
        zoomControl: !0
    }), o.Map.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
    }), o.control.zoom = function(t) {
        return new o.Control.Zoom(t)
    }, o.Control.Attribution = o.Control.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function(t) {
            o.setOptions(this, t), this._attributions = {}
        },
        onAdd: function(t) {
            return this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(this._container), t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
        },
        onRemove: function(t) {
            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
        },
        setPrefix: function(t) {
            return this.options.prefix = t, this._update(), this
        },
        addAttribution: function(t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : n
        },
        removeAttribution: function(t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : n
        },
        _update: function() {
            if (this._map) {
                var t = [];
                for (var e in this._attributions)
                    this._attributions[e] && t.push(e);
                var n = [];
                this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
            }
        },
        _onLayerAdd: function(t) {
            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
        },
        _onLayerRemove: function(t) {
            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
        }
    }), o.Map.mergeOptions({
        attributionControl: !0
    }), o.Map.addInitHook(function() {
        this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
    }), o.control.attribution = function(t) {
        return new o.Control.Attribution(t)
    }, o.Control.Scale = o.Control.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0,
            updateWhenIdle: !1
        },
        onAdd: function(t) {
            this._map = t;
            var e = "leaflet-control-scale", n = o.DomUtil.create("div", e), i = this.options;
            return this._addScales(i, e, n), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), n
        },
        onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function(t, e, n) {
            t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", n)), t.imperial && (this._iScale = o.DomUtil.create("div", e + "-line", n))
        },
        _update: function() {
            var t = this._map.getBounds(), e = t.getCenter().lat, n = 6378137 * Math.PI * Math.cos(e * Math.PI / 180), i = n * (t.getNorthEast().lng - t.getSouthWest().lng) / 180, o = this._map.getSize(), s = this.options, r = 0;
            o.x > 0 && (r = i * (s.maxWidth / o.x)), this._updateScales(s, r)
        },
        _updateScales: function(t, e) {
            t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
        },
        _updateMetric: function(t) {
            var e = this._getRoundNum(t);
            this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e / 1e3 + " km"
        },
        _updateImperial: function(t) {
            var e, n, i, o = 3.2808399 * t, s = this._iScale;
            o > 5280 ? (e = o / 5280, n = this._getRoundNum(e), s.style.width = this._getScaleWidth(n / e) + "px", s.innerHTML = n + " mi") : (i = this._getRoundNum(o), s.style.width = this._getScaleWidth(i / o) + "px", s.innerHTML = i + " ft")
        },
        _getScaleWidth: function(t) {
            return Math.round(this.options.maxWidth * t)-10
        },
        _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length-1), n = t / e;
            return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1, e * n
        }
    }), o.control.scale = function(t) {
        return new o.Control.Scale(t)
    }, o.Control.Layers = o.Control.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0
        },
        initialize: function(t, e, n) {
            o.setOptions(this, n), this._layers = {}, this._lastZIndex = 0, this._handlingClick=!1;
            for (var i in t)
                this._addLayer(t[i], i);
            for (i in e)
                this._addLayer(e[i], i, !0)
        },
        onAdd: function(t) {
            return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
        },
        onRemove: function(t) {
            t.off("layeradd", this._onLayerChange).off("layerremove", this._onLayerChange)
        },
        addBaseLayer: function(t, e) {
            return this._addLayer(t, e), this._update(), this
        },
        addOverlay: function(t, e) {
            return this._addLayer(t, e, !0), this._update(), this
        },
        removeLayer: function(t) {
            var e = o.stamp(t);
            return delete this._layers[e], this._update(), this
        },
        _initLayout: function() {
            var t = "leaflet-control-layers", e = this._container = o.DomUtil.create("div", t);
            e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) : (o.DomEvent.disableClickPropagation(e), o.DomEvent.on(e, "mousewheel", o.DomEvent.stopPropagation));
            var n = this._form = o.DomUtil.create("form", t + "-list");
            if (this.options.collapsed) {
                o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                var i = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
                i.href = "#", i.title = "Layers", o.Browser.touch ? o.DomEvent.on(i, "click", o.DomEvent.stopPropagation).on(i, "click", o.DomEvent.preventDefault).on(i, "click", this._expand, this) : o.DomEvent.on(i, "focus", this._expand, this), this._map.on("movestart", this._collapse, this)
            } else 
                this._expand();
            this._baseLayersList = o.DomUtil.create("div", t + "-base", n), this._separator = o.DomUtil.create("div", t + "-separator", n), this._overlaysList = o.DomUtil.create("div", t + "-overlays", n), e.appendChild(n)
        },
        _addLayer: function(t, e, n) {
            var i = o.stamp(t);
            this._layers[i] = {
                layer: t,
                name: e,
                overlay: n
            }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
        },
        _update: function() {
            if (this._container) {
                this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                var t, e, n=!1, i=!1;
                for (t in this._layers)
                    e = this._layers[t], this._addItem(e), i = i || e.overlay, n = n ||!e.overlay;
                this._separator.style.display = i && n ? "" : "none"
            }
        },
        _onLayerChange: function(t) {
            var e = o.stamp(t.layer);
            this._layers[e]&&!this._handlingClick && this._update()
        },
        _createRadioElement: function(t, n) {
            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
            n && (i += ' checked="checked"'), i += "/>";
            var o = e.createElement("div");
            return o.innerHTML = i, o.firstChild
        },
        _addItem: function(t) {
            var n, i = e.createElement("label"), s = this._map.hasLayer(t.layer);
            t.overlay ? (n = e.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = s) : n = this._createRadioElement("leaflet-base-layers", s), n.layerId = o.stamp(t.layer), o.DomEvent.on(n, "click", this._onInputClick, this);
            var r = e.createElement("span");
            r.innerHTML = " " + t.name, i.appendChild(n), i.appendChild(r);
            var a = t.overlay ? this._overlaysList: this._baseLayersList;
            return a.appendChild(i), i
        },
        _onInputClick: function() {
            var t, e, n, i, o = this._form.getElementsByTagName("input"), s = o.length;
            for (this._handlingClick=!0, t = 0; s > t; t++)
                e = o[t], n = this._layers[e.layerId], e.checked&&!this._map.hasLayer(n.layer) ? (this._map.addLayer(n.layer), n.overlay ? this._map.fire("overlayadd", {
                layer : n
            }) : i = n.layer) : !e.checked && this._map.hasLayer(n.layer) && (this._map.removeLayer(n.layer), this._map.fire("overlayremove", {
                layer : n
            }));
            i && (this._map.setZoom(this._map.getZoom()), this._map.fire("baselayerchange", {
                layer : i
            })), this._handlingClick=!1
        },
        _expand: function() {
            o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
        },
        _collapse: function() {
            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
        }
    }), o.control.layers = function(t, e, n) {
        return new o.Control.Layers(t, e, n)
    }, o.PosAnimation = o.Class.extend({
        includes: o.Mixin.Events,
        run: function(t, e, n, i) {
            this.stop(), this._el = t, this._inProgress=!0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] = "all " + (n || .25) + "s cubic-bezier(0,0," + (i || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
        },
        stop: function() {
            this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
        },
        _onStep: function() {
            this._el._leaflet_pos = this._getPos(), this.fire("step")
        },
        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
        _getPos: function() {
            var e, n, i, s = this._el, r = t.getComputedStyle(s);
            return o.Browser.any3d ? (i = r[o.DomUtil.TRANSFORM].match(this._transformRe), e = parseFloat(i[1]), n = parseFloat(i[2])) : (e = parseFloat(r.left), n = parseFloat(r.top)), new o.Point(e, n, !0)
        },
        _onTransitionEnd: function() {
            o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress=!1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
        }
    }), o.Map.include({
        setView: function(t, e, i) {
            if (e = this._limitZoom(e), t = o.latLng(t)
                , i = i || {}, this._panAnim && this._panAnim.stop(), this._loaded&&!i.reset && i!==!0) {
                i.animate !== n && (i.zoom = o.extend({
                    animate: i.animate
                }, i.zoom), i.pan = o.extend({
                    animate : i.animate
                }, i.pan));
                var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom): this._tryAnimatedPan(t, i.pan);
                if (s)
                    return clearTimeout(this._sizeTimer), this
            }
            return this._resetView(t, e), this
        },
        panBy: function(t, e) {
            if (t = o.point(t).round(), e = e || {}, !t.x&&!t.y)
                return this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                step : this._onPanTransitionStep, end : this._onPanTransitionEnd
            }, this))
                , e.noMoveStart || this.fire("movestart"), e.animate!==!1) {
                o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                var n = this._getMapPanePos().subtract(t);
                this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
            } else 
                this._rawPanBy(t), this.fire("move").fire("moveend");
            return this
        },
        _onPanTransitionStep: function() {
            this.fire("move")
        },
        _onPanTransitionEnd: function() {
            o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
        },
        _tryAnimatedPan: function(t, e) {
            var n = this._getCenterOffset(t)._floor();
            return (e && e.animate)===!0 || this.getSize().contains(n) ? (this.panBy(n, e), !0) : !1
        }
    }), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
        run: function(t, e, n, i) {
            this.stop(), this._el = t, this._inProgress=!0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime =+ new Date, this.fire("start"), this._animate()
        },
        stop: function() {
            this._inProgress && (this._step(), this._complete())
        },
        _animate: function() {
            this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
        },
        _step: function() {
            var t =+ new Date - this._startTime, e = 1e3 * this._duration;
            e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
        },
        _runFrame: function(t) {
            var e = this._startPos.add(this._offset.multiplyBy(t));
            o.DomUtil.setPosition(this._el, e), this.fire("step")
        },
        _complete: function() {
            o.Util.cancelAnimFrame(this._animId), this._inProgress=!1, this.fire("end")
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }), o.Map.mergeOptions({
        zoomAnimation: !0,
        zoomAnimationThreshold: 4
    }), o.DomUtil.TRANSITION && o.Map.addInitHook(function() {
        o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
    }), o.Map.include(o.DomUtil.TRANSITION ? {
        _catchTransitionEnd: function() {
            this._animatingZoom && this._onZoomTransitionEnd()
        },
        _tryAnimatedZoom: function(t, e, n) {
            if (this._animatingZoom)
                return !0;
            if (n = n || {}, !this.options.zoomAnimation || n.animate===!1 ||!o.DomUtil.TRANSITION || o.Browser.android23 || o.Browser.mobileOpera || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)return !1;
            var i = this.getZoomScale(e), s = this._getCenterOffset(t)._divideBy(1-1 / i), r = this._getCenterLayerPoint()._add(s);
            return n.animate===!0 || this.getSize().contains(s) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, r, i), !0) : !1
        },
        _animateZoom: function(t, e, n, i, s, r) {
            this._animatingZoom=!0, o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled=!0), this.fire("zoomanim", {
                center: t,
                zoom: e,
                origin: n,
                scale: i,
                delta: s,
                backwards: r
            })
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom=!1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled=!1)
        }
    } : {}), o.TileLayer.include({
        _animateZoom: function(t) {
            var e=!1;
            this._animating || (this._animating=!0, e=!0), e && this._prepareBgBuffer();
            var n = o.DomUtil.TRANSFORM, i = this._bgBuffer;
            e && (clearTimeout(this._clearBgBufferTimer), o.Util.falseFn(i.offsetWidth));
            var s = o.DomUtil.getScaleString(t.scale, t.origin), r = i.style[n];
            i.style[n] = t.backwards ? (t.delta ? o.DomUtil.getTranslateString(t.delta) : r) + " " + s : s + " " + r
        },
        _endZoomAnim: function() {
            var t = this._tileContainer, e = this._bgBuffer;
            t.style.visibility = "", t.style.zIndex = 2, e.style.zIndex = 1, o.Util.falseFn(e.offsetWidth), this._animating=!1
        },
        _clearBgBuffer: function() {
            var t = this._map;
            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil.TRANSFORM] = "")
        },
        _prepareBgBuffer: function() {
            var t = this._tileContainer, e = this._bgBuffer;
            return e && this._getLoadedTilesPercentage(e) > .5 && .5 > this._getLoadedTilesPercentage(t) ? (t.style.visibility = "hidden", this._stopLoadingImages(t), n) : (e.style.visibility = "hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), n)
        },
        _getLoadedTilesPercentage: function(t) {
            var e, n, i = t.getElementsByTagName("img"), o = 0;
            for (e = 0, n = i.length; n > e; e++)
                i[e].complete && o++;
            return o / n
        },
        _stopLoadingImages: function(t) {
            var e, n, i, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
            for (e = 0, n = s.length; n > e; e++)
                i = s[e], i.complete || (i.onload = o.Util.falseFn, i.onerror = o.Util.falseFn, i.src = o.Util.emptyImageUrl, i.parentNode.removeChild(i))
        }
    }), o.Map.include({
        _defaultLocateOptions: {
            watch: !1,
            setView: !1,
            maxZoom: 1 / 0,
            timeout: 1e4,
            maximumAge: 0,
            enableHighAccuracy: !1
        },
        locate: function(t) {
            if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation)
                return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
            var e = o.bind(this._handleGeolocationResponse, this), n = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t), this
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView=!1), this
        },
        _handleGeolocationError: function(t) {
            var e = t.code, n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView&&!this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + n + "."
            })
        },
        _handleGeolocationResponse: function(t) {
            var e = t.coords.latitude, n = t.coords.longitude, i = new o.LatLng(e, n), s = 180 * t.coords.accuracy / 40075017, r = s / Math.cos(o.LatLng.DEG_TO_RAD * e), a = o.latLngBounds([e - s, n - r], [e + s, n + r]), l = this._locateOptions;
            if (l.setView) {
                var h = Math.min(this.getBoundsZoom(a), l.maxZoom);
                this.setView(i, h)
            }
            var u = o.extend({
                latlng: i,
                bounds: a
            }, t.coords);
            this.fire("locationfound", u)
        }
    })
}(window, document), function(t, e) {
    L.drawVersion = "0.2.0-dev", L.Draw = {}, L.Draw.Feature = L.Handler.extend({
        includes: L.Mixin.Events,
        initialize: function(t, e) {
            this._map = t, this._container = t._container, this._overlayPane = t._panes.overlayPane, this._popupPane = t._panes.popupPane, e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)), L.Util.extend(this.options, e)
        },
        enable: function() {
            this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", {
                handler : this.type
            }), this._map.fire("draw:drawstart", {
                layerType: this.type
            }))
        },
        disable: function() {
            this._enabled && (L.Handler.prototype.disable.call(this), this.fire("disabled", {
                handler : this.type
            }), this._map.fire("draw:drawstop", {
                layerType: this.type
            }))
        },
        addHooks: function() {
            this._map && (L.DomUtil.disableTextSelection(), this._tooltip = new L.Tooltip(this._map), L.DomEvent.addListener(this._container, "keyup", this._cancelDrawing, this))
        },
        removeHooks: function() {
            this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.removeListener(this._container, "keyup", this._cancelDrawing))
        },
        setOptions: function(t) {
            L.setOptions(this, t)
        },
        _fireCreatedEvent: function(t) {
            this._map.fire("draw:created", {
                layer: t,
                layerType: this.type
            })
        },
        _cancelDrawing: function(t) {
            27 === t.keyCode && this.disable()
        }
    }), L.Draw.Polyline = L.Draw.Feature.extend({
        statics: {
            TYPE: "polyline"
        },
        Poly: L.Polyline,
        options: {
            allowIntersection: !0,
            drawError: {
                color: "#b00b00",
                message: "<strong>Error:</strong> shape edges cannot cross!",
                timeout: 2500
            },
            icon: new L.DivIcon({
                iconSize: new L.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon"
            }),
            guidelineDistance: 20,
            shapeOptions: {
                stroke: !0,
                color: "#f06eaa",
                weight: 4,
                opacity: .5,
                fill: !1,
                clickable: !0
            },
            zIndexOffset: 2e3
        },
        initialize: function(t, e) {
            e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function() {
            L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup, this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                icon: L.divIcon({
                    className: "leaflet-mouse-marker",
                    iconAnchor: [20, 20],
                    iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
            })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this).on("zoomend", this._onZoomEnd, this))
        },
        removeHooks: function() {
            L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mousemove", this._onMouseMove, this).off("zoomend", this._onZoomEnd, this)
        },
        _finishShape: function() {
            var t = this._poly.newLatLngIntersects(this._poly.getLatLngs()[0], !0);
            return !this.options.allowIntersection && t ||!this._shapeIsValid() ? (this._showErrorTooltip(), void 0) : (this._fireCreatedEvent(), this.disable(), void 0)
        },
        _shapeIsValid: function() {
            return !0
        },
        _onZoomEnd: function() {
            this._updateGuide()
        },
        _onMouseMove: function(t) {
            var e = t.layerPoint, n = t.latlng;
            this._currentLatLng = n, this._tooltip.updatePosition(n), this._updateGuide(e), this._mouseMarker.setLatLng(n), L.DomEvent.preventDefault(t.originalEvent)
        },
        _onClick: function(t) {
            var e = t.target.getLatLng(), n = this._markers.length;
            return n > 0&&!this.options.allowIntersection && this._poly.newLatLngIntersects(e) ? (this._showErrorTooltip(), void 0) : (this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(e)), this._poly.addLatLng(e), 2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly), this._updateFinishHandler(), this._vertexAdded(e), this._clearGuides(), void 0)
        },
        _updateFinishHandler: function() {
            var t = this._markers.length;
            t > 1 && this._markers[t-1].on("click", this._finishShape, this), t > 2 && this._markers[t-2].off("click", this._finishShape, this)
        },
        _createMarker: function(t) {
            var e = new L.Marker(t, {
                icon: this.options.icon,
                zIndexOffset: 2 * this.options.zIndexOffset
            });
            return this._markerGroup.addLayer(e), e
        },
        _updateGuide: function(t) {
            t = t || this._map.latLngToLayerPoint(this._currentLatLng);
            var e = this._markers.length;
            e > 0 && (this._errorShown || this._tooltip.updateContent(this._getTooltipText()), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[e-1].getLatLng()), t))
        },
        _drawGuide: function(t, e) {
            var n, i, o, s, r = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)));
            for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)), n = this.options.guidelineDistance; r > n; n += this.options.guidelineDistance)
                i = n / r, o = {
                x: Math.floor(t.x * (1 - i) + i * e.x),
                y: Math.floor(t.y * (1 - i) + i * e.y)
            }, s = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), s.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(s, o)
        },
        _updateGuideColor: function(t) {
            if (this._guidesContainer)
                for (var e = 0, n = this._guidesContainer.childNodes.length; n > e; e++)
                    this._guidesContainer.childNodes[e].style.backgroundColor = t
        },
        _clearGuides: function() {
            if (this._guidesContainer)
                for (; this._guidesContainer.firstChild;)
                    this._guidesContainer.removeChild(this._guidesContainer.firstChild)
        },
        _getTooltipText: function() {
            var t, e, n;
            return 0 === this._markers.length ? t = {
                text: "Click to start drawing line."
            } : (e = this._measurementRunningTotal + this._currentLatLng.distanceTo(this._markers[this._markers.length-1].getLatLng()), n = e > 1e3 ? (e / 1e3).toFixed(2) + " km" : Math.ceil(e) + " m", t = 1 === this._markers.length ? {
                text: "Click to continue drawing line.",
                subtext: n
            } : {
                text: "Click last point to finish line.",
                subtext: n
            }), t
        },
        _showErrorTooltip: function() {
            this._errorShown=!0, this._tooltip.showAsError().updateContent({
                text: this.options.drawError.message
            }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({
                color: this.options.drawError.color
            }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
        },
        _hideErrorTooltip: function() {
            this._errorShown=!1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({
                color: this.options.shapeOptions.color
            })
        },
        _clearHideErrorTimeout: function() {
            this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null)
        },
        _vertexAdded: function(t) {
            1 === this._markers.length ? this._measurementRunningTotal = 0 : this._measurementRunningTotal += t.distanceTo(this._markers[this._markers.length-2].getLatLng())
        },
        _cleanUpShape: function() {
            this._markers.length > 0 && this._markers[this._markers.length-1].off("click", this._finishShape, this)
        },
        _fireCreatedEvent: function() {
            var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
    }), L.Draw.Polygon = L.Draw.Polyline.extend({
        statics: {
            TYPE: "polygon"
        },
        Poly: L.Polygon,
        options: {
            shapeOptions: {
                stroke: !0,
                color: "#f06eaa",
                weight: 4,
                opacity: .5,
                fill: !0,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0
            }
        },
        initialize: function(t, e) {
            L.Draw.Polyline.prototype.initialize.call(this, t, e), this.type = L.Draw.Polygon.TYPE
        },
        _updateFinishHandler: function() {
            var t = this._markers.length;
            1 === t && this._markers[0].on("click", this._finishShape, this), t > 2 && (this._markers[t-1].on("dblclick", this._finishShape, this), t > 3 && this._markers[t-2].off("dblclick", this._finishShape, this))
        },
        _getTooltipText: function() {
            var t;
            return t = 0 === this._markers.length ? "Click to start drawing shape." : 3 > this._markers.length ? "Click to continue drawing shape." : "Double click to close this shape.", {
                text: t
            }
        },
        _shapeIsValid: function() {
            return this._markers.length >= 3
        },
        _vertexAdded: function() {},
        _cleanUpShape: function() {
            var t = this._markers.length;
            t > 0 && (this._markers[0].off("click", this._finishShape, this), t > 2 && this._markers[t-1].off("dblclick", this._finishShape, this))
        }
    }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({
        addHooks: function() {
            L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({
                text : this._initialLabelText
            }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function() {
            L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this), L.DomEvent.off(e, "mouseup", this._onMouseUp), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing=!1
        },
        _onMouseDown: function(t) {
            this._isDrawing=!0, this._startLatLng = t.latlng, L.DomEvent.on(e, "mouseup", this._onMouseUp, this).preventDefault(t.originalEvent)
        },
        _onMouseMove: function(t) {
            var e = t.latlng;
            this._tooltip.updatePosition(e), this._isDrawing && (this._tooltip.updateContent({
                text: "Release mouse to finish drawing."
            }), this._drawShape(e))
        },
        _onMouseUp: function() {
            this._shape && this._fireCreatedEvent(), this.disable()
        }
    }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({
        statics: {
            TYPE: "rectangle"
        },
        options: {
            shapeOptions: {
                stroke: !0,
                color: "#f06eaa",
                weight: 4,
                opacity: .5,
                fill: !0,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0
            }
        },
        initialize: function(t, e) {
            this.type = L.Draw.Rectangle.TYPE, L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _initialLabelText: "Click and drag to draw rectangle.",
        _drawShape: function(t) {
            this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, t), this.options.shapeOptions), this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function() {
            var t = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
            L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        }
    }), L.Draw.Circle = L.Draw.SimpleShape.extend({
        statics: {
            TYPE: "circle"
        },
        options: {
            shapeOptions: {
                stroke: !0,
                color: "#f06eaa",
                weight: 4,
                opacity: .5,
                fill: !0,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0
            }
        },
        initialize: function(t, e) {
            this.type = L.Draw.Circle.TYPE, L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _initialLabelText: "Click and drag to draw circle.",
        _drawShape: function(t) {
            this._shape ? this._shape.setRadius(this._startLatLng.distanceTo(t)) : (this._shape = new L.Circle(this._startLatLng, this._startLatLng.distanceTo(t), this.options.shapeOptions), this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function() {
            var t = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
            L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _onMouseMove: function(t) {
            var e, n = t.latlng;
            this._tooltip.updatePosition(n), this._isDrawing && (this._drawShape(n), e = this._shape.getRadius().toFixed(1), this._tooltip.updateContent({
                text: "Release mouse to finish drawing.",
                subtext: "Radius: " + e + " m"
            }))
        }
    }), L.Draw.Marker = L.Draw.Feature.extend({
        statics: {
            TYPE: "marker"
        },
        options: {
            icon: new L.Icon.Default,
            zIndexOffset: 2e3
        },
        initialize: function(t, e) {
            this.type = L.Draw.Marker.TYPE, L.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function() {
            L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({
                text: "Click map to place marker."
            }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                icon: L.divIcon({
                    className: "leaflet-mouse-marker",
                    iconAnchor: [20, 20],
                    iconSize: [40, 40]
                }), opacity: 0, zIndexOffset: this.options.zIndexOffset
            })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function() {
            L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._marker && (this._marker.off("click", this._onClick, this), this._map.off("click", this._onClick, this).removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this))
        },
        _onMouseMove: function(t) {
            var e = t.latlng;
            this._tooltip.updatePosition(e), this._mouseMarker.setLatLng(e), this._marker ? this._marker.setLatLng(e) : (this._marker = new L.Marker(e, {
                icon: this.options.icon,
                zIndexOffset: this.options.zIndexOffset
            }), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker))
        },
        _onClick: function() {
            this._fireCreatedEvent(), this.disable()
        },
        _fireCreatedEvent: function() {
            var t = new L.Marker(this._marker.getLatLng(), {
                icon: this.options.icon
            });
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
    }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
        options: {
            icon: new L.DivIcon({
                iconSize: new L.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon"
            })
        },
        initialize: function(t, e) {
            this._poly = t, L.setOptions(this, e)
        },
        addHooks: function() {
            this._poly._map && (this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
        },
        removeHooks: function() {
            this._poly._map && (this._poly._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
        },
        updateMarkers: function() {
            this._markerGroup.clearLayers(), this._initMarkers()
        },
        _initMarkers: function() {
            this._markerGroup || (this._markerGroup = new L.LayerGroup), this._markers = [];
            var t, e, n, i, o = this._poly._latlngs;
            for (t = 0, n = o.length; n > t; t++)
                i = this._createMarker(o[t], t), i.on("click", this._onMarkerClick, this), this._markers.push(i);
            var s, r;
            for (t = 0, e = n-1; n > t; e = t++)(0 !== t || L.Polygon && this._poly instanceof L.Polygon) 
                && (s = this._markers[e], r = this._markers[t], this._createMiddleMarker(s, r), this._updatePrevNext(s, r))
        },
        _createMarker: function(t, e) {
            var n = new L.Marker(t, {
                draggable: !0,
                icon: this.options.icon
            });
            return n._origLatLng = t, n._index = e, n.on("drag", this._onMarkerDrag, this), n.on("dragend", this._fireEdit, this), this._markerGroup.addLayer(n), n
        },
        _removeMarker: function(t) {
            var e = t._index;
            this._markerGroup.removeLayer(t), this._markers.splice(e, 1), this._poly.spliceLatLngs(e, 1), this._updateIndexes(e, -1), t.off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("click", this._onMarkerClick, this)
        },
        _fireEdit: function() {
            this._poly.edited=!0, this._poly.fire("edit")
        },
        _onMarkerDrag: function(t) {
            var e = t.target;
            L.extend(e._origLatLng, e._latlng), e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)), e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)), this._poly.redraw()
        },
        _onMarkerClick: function(t) {
            if (!(3 > this._poly._latlngs.length)) {
                var e = t.target;
                this._removeMarker(e), this._updatePrevNext(e._prev, e._next), e._middleLeft && this._markerGroup.removeLayer(e._middleLeft), e._middleRight && this._markerGroup.removeLayer(e._middleRight), e._prev && e._next ? this._createMiddleMarker(e._prev, e._next) : e._prev ? e._next || (e._prev._middleRight = null) : e._next._middleLeft = null, this._fireEdit()
            }
        },
        _updateIndexes: function(t, e) {
            this._markerGroup.eachLayer(function(n) {
                n._index > t && (n._index += e)
            })
        },
        _createMiddleMarker: function(t, e) {
            var n, i, o, s = this._getMiddleLatLng(t, e), r = this._createMarker(s);
            r.setOpacity(.6), t._middleRight = e._middleLeft = r, i = function() {
                var i = e._index;
                r._index = i, r.off("click", n, this).on("click", this._onMarkerClick, this), s.lat = r.getLatLng().lat, s.lng = r.getLatLng().lng, this._poly.spliceLatLngs(i, 0, s), this._markers.splice(i, 0, r), r.setOpacity(1), this._updateIndexes(i, 1), e._index++, this._updatePrevNext(t, r), this._updatePrevNext(r, e)
            }, o = function() {
                r.off("dragstart", i, this), r.off("dragend", o, this), this._createMiddleMarker(t, r), this._createMiddleMarker(r, e)
            }, n = function() {
                i.call(this), o.call(this), this._fireEdit()
            }, r.on("click", n, this).on("dragstart", i, this).on("dragend", o, this), this._markerGroup.addLayer(r)
        },
        _updatePrevNext: function(t, e) {
            t && (t._next = e), e && (e._prev = t)
        },
        _getMiddleLatLng: function(t, e) {
            var n = this._poly._map, i = n.latLngToLayerPoint(t.getLatLng()), o = n.latLngToLayerPoint(e.getLatLng());
            return n.layerPointToLatLng(i._add(o)._divideBy(2))
        }
    }), L.Polyline.addInitHook(function() {
        this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function() {
            this.editing && this.editing.enabled() && this.editing.addHooks()
        }), this.on("remove", function() {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
        }))
    }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
        options: {
            moveIcon: new L.DivIcon({
                iconSize: new L.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
            }),
            resizeIcon: new L.DivIcon({
                iconSize: new L.Point(8, 8),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
            })
        },
        initialize: function(t, e) {
            this._shape = t, L.Util.setOptions(this, e)
        },
        addHooks: function() {
            this._shape._map && (this._map = this._shape._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup))
        },
        removeHooks: function() {
            if (this._shape._map) {
                this._unbindMarker(this._moveMarker);
                for (var t = 0, e = this._resizeMarkers.length; e > t; t++)
                    this._unbindMarker(this._resizeMarkers[t]);
                this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup
            }
            this._map = null
        },
        updateMarkers: function() {
            this._markerGroup.clearLayers(), this._initMarkers()
        },
        _initMarkers: function() {
            this._markerGroup || (this._markerGroup = new L.LayerGroup), this._createMoveMarker(), this._createResizeMarker()
        },
        _createMoveMarker: function() {},
        _createResizeMarker: function() {},
        _createMarker: function(t, e) {
            var n = new L.Marker(t, {
                draggable: !0,
                icon: e,
                zIndexOffset: 10
            });
            return this._bindMarker(n), this._markerGroup.addLayer(n), n
        },
        _bindMarker: function(t) {
            t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this)
        },
        _unbindMarker: function(t) {
            t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this)
        },
        _onMarkerDragStart: function(t) {
            var e = t.target;
            e.setOpacity(0)
        },
        _fireEdit: function() {
            this._shape.edited=!0, this._shape.fire("edit")
        },
        _onMarkerDrag: function(t) {
            var e = t.target, n = e.getLatLng();
            e === this._moveMarker ? this._move(n) : this._resize(n), this._shape.redraw()
        },
        _onMarkerDragEnd: function(t) {
            var e = t.target;
            e.setOpacity(1), this._shape.fire("edit"), this._fireEdit()
        },
        _move: function() {},
        _resize: function() {}
    }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
        _createMoveMarker: function() {
            var t = this._shape.getBounds(), e = t.getCenter();
            this._moveMarker = this._createMarker(e, this.options.moveIcon)
        },
        _createResizeMarker: function() {
            var t = this._getCorners();
            this._resizeMarkers = [];
            for (var e = 0, n = t.length; n > e; e++)
                this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)), this._resizeMarkers[e]._cornerIndex = e
        },
        _onMarkerDragStart: function(t) {
            L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
            var e = this._getCorners(), n = t.target, i = n._cornerIndex;
            this._oppositeCorner = e[(i + 2)%4], this._toggleCornerMarkers(0, i)
        },
        _onMarkerDragEnd: function(t) {
            var e, n, i = t.target;
            i === this._moveMarker && (e = this._shape.getBounds(), n = e.getCenter(), i.setLatLng(n)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
        },
        _move: function(t) {
            for (var e, n = this._shape.getLatLngs(), i = this._shape.getBounds(), o = i.getCenter(), s = [], r = 0, a = n.length; a > r; r++)
                e = [n[r].lat - o.lat, n[r].lng - o.lng], s.push([t.lat + e[0], t.lng + e[1]]);
            this._shape.setLatLngs(s), this._repositionCornerMarkers()
        },
        _resize: function(t) {
            var e;
            this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)), e = this._shape.getBounds(), this._moveMarker.setLatLng(e.getCenter())
        },
        _getCorners: function() {
            var t = this._shape.getBounds(), e = t.getNorthWest(), n = t.getNorthEast(), i = t.getSouthEast(), o = t.getSouthWest();
            return [e, n, i, o]
        },
        _toggleCornerMarkers: function(t) {
            for (var e = 0, n = this._resizeMarkers.length; n > e; e++)
                this._resizeMarkers[e].setOpacity(t)
        },
        _repositionCornerMarkers: function() {
            for (var t = this._getCorners(), e = 0, n = this._resizeMarkers.length; n > e; e++)
                this._resizeMarkers[e].setLatLng(t[e])
        }
    }), L.Rectangle.addInitHook(function() {
        L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable())
    }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.SimpleShape.extend({
        _createMoveMarker: function() {
            var t = this._shape.getLatLng();
            this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function() {
            var t = this._shape.getLatLng(), e = this._getResizeMarkerPoint(t);
            this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
        },
        _getResizeMarkerPoint: function(t) {
            var e = this._shape._radius * Math.cos(Math.PI / 4), n = this._map.project(t);
            return this._map.unproject([n.x + e, n.y - e])
        },
        _move: function(t) {
            var e = this._getResizeMarkerPoint(t);
            this._resizeMarkers[0].setLatLng(e), this._shape.setLatLng(t)
        },
        _resize: function(t) {
            var e = this._moveMarker.getLatLng(), n = e.distanceTo(t);
            this._shape.setRadius(n)
        }
    }), L.Circle.addInitHook(function() {
        L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable()), this.on("add", function() {
            this.editing && this.editing.enabled() && this.editing.addHooks()
        }), this.on("remove", function() {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
        })
    }), L.LatLngUtil = {
        cloneLatLngs: function(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++)
                e.push(this.cloneLatLng(t[n]));
            return e
        },
        cloneLatLng: function(t) {
            return L.latLng(t.lat, t.lng)
        }
    }, L.Util.extend(L.LineUtil, {
        segmentsIntersect: function(t, e, n, i) {
            return this._checkCounterclockwise(t, n, i) !== this._checkCounterclockwise(e, n, i) && this._checkCounterclockwise(t, e, n) !== this._checkCounterclockwise(t, e, i)
        },
        _checkCounterclockwise: function(t, e, n) {
            return (n.y - t.y) * (e.x - t.x) > (e.y - t.y) * (n.x - t.x)
        }
    }), L.Polyline.include({
        intersects: function() {
            var t, e, n, i = this._originalPoints, o = i ? i.length: 0;
            if (this._tooFewPointsForIntersection())
                return !1;
            for (t = o-1; t >= 3; t--)
                if (e = i[t-1], n = i[t], this._lineSegmentsIntersectsRange(e, n, t-2)
                    )return !0;
            return !1
        },
        newLatLngIntersects: function(t, e) {
            return this._map ? this.newPointIntersects(this._map.latLngToLayerPoint(t), e) : !1
        },
        newPointIntersects: function(t, e) {
            var n = this._originalPoints, i = n ? n.length: 0, o = n ? n[i-1]: null, s = i-2;
            return this._tooFewPointsForIntersection(1)?!1 : this._lineSegmentsIntersectsRange(o, t, s, e ? 1 : 0)
        },
        _tooFewPointsForIntersection: function(t) {
            var e = this._originalPoints, n = e ? e.length: 0;
            return n += t || 0, !this._originalPoints || 3 >= n
        },
        _lineSegmentsIntersectsRange: function(t, e, n, i) {
            var o, s, r = this._originalPoints;
            i = i || 0;
            for (var a = n; a > i; a--)
                if (o = r[a-1], s = r[a], L.LineUtil.segmentsIntersect(t, e, o, s)
                    )return !0;
            return !1
        }
    }), L.Polygon.include({
        intersects: function() {
            var t, e, n, i, o, s = this._originalPoints;
            return this._tooFewPointsForIntersection()?!1 : (t = L.Polyline.prototype.intersects.call(this))?!0 : (e = s.length, n = s[0], i = s[e-1], o = e-2, this._lineSegmentsIntersectsRange(i, n, o, 1))
        }
    }), L.Control.Draw = L.Control.extend({
        options: {
            position: "topleft",
            draw: {},
            edit: !1
        },
        initialize: function(t) {
            if ("0.5.1" >= L.version)
                throw Error("Leaflet.draw 0.2.0+ requires Leaflet 0.6.0+. Download latest from https://github.com/Leaflet/Leaflet/");
            L.Control.prototype.initialize.call(this, t);
            var e, n;
            this._toolbars = {}, L.DrawToolbar && this.options.draw && (n = new L.DrawToolbar(this.options.draw), e = L.stamp(n), this._toolbars[e] = n, this._toolbars[e].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (n = new L.EditToolbar(this.options.edit), e = L.stamp(n), this._toolbars[e] = n, this._toolbars[e].on("enable", this._toolbarEnabled, this))
        },
        onAdd: function(t) {
            var e, n = L.DomUtil.create("div", "leaflet-draw"), i=!1, o = "leaflet-draw-toolbar-top";
            for (var s in this._toolbars)
                this._toolbars.hasOwnProperty(s) && (e = this._toolbars[s].addToolbar(t), i || (L.DomUtil.hasClass(e, o) || L.DomUtil.addClass(e.childNodes[0], o), i=!0), n.appendChild(e));
            return n
        },
        onRemove: function() {
            for (var t in this._toolbars)
                this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
        },
        setDrawingOptions: function(t) {
            for (var e in this._toolbars)
                this._toolbars[e]instanceof L.DrawToolbar && this._toolbars[e].setOptions(t)
        },
        _toolbarEnabled: function(t) {
            var e = "" + L.stamp(t.target);
            for (var n in this._toolbars)
                this._toolbars.hasOwnProperty(n) && n !== e && this._toolbars[n].disable()
        }
    }), L.Map.mergeOptions({
        drawControl: !1
    }), L.Map.addInitHook(function() {
        this.options.drawControl && (this.drawControl = new L.Control.Draw, this.addControl(this.drawControl))
    }), L.Toolbar = L.Class.extend({
        includes: [L.Mixin.Events],
        initialize: function(t) {
            L.setOptions(this, t), this._modes = {}, this._actionButtons = [], this._activeMode = null
        },
        enabled: function() {
            return null !== this._activeMode
        },
        disable: function() {
            this.enabled() && this._activeMode.handler.disable()
        },
        removeToolbar: function() {
            for (var t in this._modes)
                this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable), this._modes[t].handler.disable(), this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
            this._modes = {};
            for (var e = 0, n = this._actionButtons.length; n > e; e++)
                this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback);
            this._actionButtons = [], this._actionsContainer = null
        },
        _initModeHandler: function(t, e, n, i) {
            var o = t.type;
            this._modes[o] = {}, this._modes[o].handler = t, this._modes[o].button = this._createButton({
                title: this.options[o].title,
                className: i + "-" + o,
                container: e,
                callback: this._modes[o].handler.enable,
                context: this._modes[o].handler
            }), this._modes[o].buttonIndex = n, this._modes[o].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
        },
        _createButton: function(t) {
            var e = L.DomUtil.create("a", t.className || "", t.container);
            return e.href = "#", t.text && (e.innerHTML = t.text), t.title && (e.title = t.title), L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, "click", t.callback, t.context), e
        },
        _disposeButton: function(t, e) {
            L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, "click", e)
        },
        _handlerActivated: function(t) {
            this._activeMode && this._activeMode.handler.enabled() && this._activeMode.handler.disable(), this._activeMode = this._modes[t.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable")
        },
        _handlerDeactivated: function() {
            this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable")
        },
        _createActions: function(t) {
            for (var e, n, i = L.DomUtil.create("ul", "leaflet-draw-actions"), o = 50, s = t.length, r = s * o + (s-1), a = 0; s > a; a++)
                e = L.DomUtil.create("li", "", i), n = this._createButton({
                title: t[a].title,
                text: t[a].text,
                container: e,
                callback: t[a].callback,
                context: t[a].context
            }), this._actionButtons.push({
                button: n,
                callback: t[a].callback
            });
            return i.style.width = r + "px", i
        },
        _showActionsToolbar: function() {
            var t = this._activeMode.buttonIndex, e = this._lastButtonIndex, n = 26, i = 1, o = t * n + t * i-1;
            this._actionsContainer.style.top = o + "px", 0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block"
        },
        _hideActionsToolbar: function() {
            this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom")
        }
    }), L.Tooltip = L.Class.extend({
        initialize: function(t) {
            this._map = t, this._popupPane = t._panes.popupPane, this._container = L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane), this._singleLineLabel=!1
        },
        dispose: function() {
            this._popupPane.removeChild(this._container), this._container = null
        },
        updateContent: function(t) {
            return t.subtext = t.subtext || "", 0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel=!1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel=!0), this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span>" + "<br />" : "") + "<span>" + t.text + "</span>", this
        },
        updatePosition: function(t) {
            var e = this._map.latLngToLayerPoint(t);
            return L.DomUtil.setPosition(this._container, e), this
        },
        showAsError: function() {
            return L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this
        },
        removeError: function() {
            return L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this
        }
    }), L.DrawToolbar = L.Toolbar.extend({
        options: {
            polyline: {
                title: "Draw a polyline"
            },
            polygon: {
                title: "Draw a polygon"
            },
            rectangle: {
                title: "Draw a rectangle"
            },
            circle: {
                title: "Draw a circle"
            },
            marker: {
                title: "Add a marker"
            }
        },
        initialize: function(t) {
            L.Toolbar.prototype.initialize.call(this, t)
        },
        addToolbar: function(t) {
            var e = L.DomUtil.create("div", "leaflet-draw-section"), n = 0, i = "leaflet-draw-draw";
            return this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this.options.polyline && this._initModeHandler(new L.Draw.Polyline(t, this.options.polyline), this._toolbarContainer, n++, i), this.options.polygon && this._initModeHandler(new L.Draw.Polygon(t, this.options.polygon), this._toolbarContainer, n++, i), this.options.rectangle && this._initModeHandler(new L.Draw.Rectangle(t, this.options.rectangle), this._toolbarContainer, n++, i), this.options.circle && this._initModeHandler(new L.Draw.Circle(t, this.options.circle), this._toolbarContainer, n++, i), this.options.marker && this._initModeHandler(new L.Draw.Marker(t, this.options.marker), this._toolbarContainer, n++, i), this._lastButtonIndex=--n, this._actionsContainer = this._createActions([{
                title: "Cancel drawing",
                text: "Cancel",
                callback: this.disable,
                context: this
            }
            ]), e.appendChild(this._toolbarContainer), e.appendChild(this._actionsContainer), e
        },
        setOptions: function(t) {
            L.setOptions(this, t);
            for (var e in this._modes)
                this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
        }
    }), L.EditToolbar = L.Toolbar.extend({
        options: {
            edit: {
                title: "Edit layers",
                selectedPathOptions: null
            },
            remove: {
                title: "Delete layers"
            },
            featureGroup: null
        },
        initialize: function(t) {
            L.Toolbar.prototype.initialize.call(this, t), this._selectedFeatureCount = 0
        },
        addToolbar: function(t) {
            var e = L.DomUtil.create("div", "leaflet-draw-section"), n = 0, i = "leaflet-draw-edit";
            return this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = t, this.options.edit && this._initModeHandler(new L.EditToolbar.Edit(t, {
                featureGroup: this.options.featureGroup,
                selectedPathOptions: this.options.edit.selectedPathOptions
            }), this._toolbarContainer, n++, i), this.options.remove && this._initModeHandler(new L.EditToolbar.Delete(t, {
                featureGroup: this.options.featureGroup
            }), this._toolbarContainer, n++, i), this._lastButtonIndex=--n, this._actionsContainer = this._createActions([{
                title: "Save changes.",
                text: "Save",
                callback: this._save,
                context: this
            }, {
                title: "Cancel editing, discards all changes.",
                text: "Cancel",
                callback: this.disable,
                context: this
            }
            ]), e.appendChild(this._toolbarContainer), e.appendChild(this._actionsContainer), e
        },
        disable: function() {
            this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this))
        },
        _save: function() {
            this._activeMode.handler.save(), this._activeMode.handler.disable()
        }
    }), L.EditToolbar.Edit = L.Handler.extend({
        statics: {
            TYPE: "edit"
        },
        includes: L.Mixin.Events,
        options: {
            selectedPathOptions: {
                color: "#fe57a1",
                opacity: .6,
                dashArray: "10, 10",
                fill: !0,
                fillColor: "#fe57a1",
                fillOpacity: .1
            }
        },
        initialize: function(t, e) {
            if (L.Handler.prototype.initialize.call(this, t), e.selectedPathOptions = e.selectedPathOptions || this.options.selectedPathOptions, L.Util.setOptions(this, e)
                , this._featureGroup = this.options.featureGroup, !(this._featureGroup instanceof L.FeatureGroup))throw Error("options.featureGroup must be a L.FeatureGroup");
            this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE
        },
        enable: function() {
            this._enabled || (L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this), this.fire("enabled", {
                handler: this.type
            }))
        },
        disable: function() {
            this._enabled && (this.fire("disabled", {
                handler: this.type
            }), this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this))
        },
        addHooks: function() {
            this._map && (this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Tooltip(this._map), this._tooltip.updateContent({
                text: "Drag handles, or marker to edit feature.",
                subtext: "Click cancel to undo changes."
            }), this._map.on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function() {
            this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this))
        },
        revertLayers: function() {
            this._featureGroup.eachLayer(function(t) {
                this._revertLayer(t)
            }, this)
        },
        save: function() {
            var t = new L.LayerGroup;
            this._featureGroup.eachLayer(function(e) {
                e.edited && (t.addLayer(e), e.edited=!1)
            }), this._map.fire("draw:edited", {
                layers: t
            })
        },
        _backupLayer: function(t) {
            var e = L.Util.stamp(t);
            this._uneditedLayerProps[e] || (this._uneditedLayerProps[e] = t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? {
                latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())
            } : t instanceof L.Circle ? {
                latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
                radius: t.getRadius()
            } : {
                latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())
            })
        },
        _revertLayer: function(t) {
            var e = L.Util.stamp(t);
            t.edited=!1, this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng), t.setRadius(this._uneditedLayerProps[e].radius)) : t.setLatLng(this._uneditedLayerProps[e].latlng))
        },
        _toggleMarkerHighlight: function(t) {
            var e = t._icon;
            e.style.display = "none", L.DomUtil.hasClass(e, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(e, "leaflet-edit-marker-selected"), this._offsetMarker(e, -4)) : (L.DomUtil.addClass(e, "leaflet-edit-marker-selected"), this._offsetMarker(e, 4)), e.style.display = ""
        },
        _offsetMarker: function(t, e) {
            var n = parseInt(t.style.marginTop, 10) - e, i = parseInt(t.style.marginLeft, 10) - e;
            t.style.marginTop = n + "px", t.style.marginLeft = i + "px"
        },
        _enableLayerEdit: function(t) {
            var e = t.layer || t.target || t, n = L.Util.extend({}, this.options.selectedPathOptions);
            this._backupLayer(e), e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.options.previousOptions = e.options, e instanceof L.Circle || e instanceof L.Polygon || e instanceof L.Rectangle || (n.fill=!1), e.setStyle(n)), e instanceof L.Marker ? (e.dragging.enable(), e.on("dragend", this._onMarkerDragEnd)) : e.editing.enable()
        },
        _disableLayerEdit: function(t) {
            var e = t.layer || t.target || t;
            e.edited=!1, e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions), delete e.options.previousOptions), e instanceof L.Marker ? (e.dragging.disable(), e.off("dragend", this._onMarkerDragEnd, this)) : e.editing.disable()
        },
        _onMarkerDragEnd: function(t) {
            var e = t.target;
            e.edited=!0
        },
        _onMouseMove: function(t) {
            this._tooltip.updatePosition(t.latlng)
        }
    }), L.EditToolbar.Delete = L.Handler.extend({
        statics: {
            TYPE: "remove"
        },
        includes: L.Mixin.Events,
        initialize: function(t, e) {
            if (L.Handler.prototype.initialize.call(this, t), L.Util.setOptions(this, e)
                , this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup))throw Error("options.featureGroup must be a L.FeatureGroup");
            this.type = L.EditToolbar.Delete.TYPE
        },
        enable: function() {
            this._enabled || (L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this), this.fire("enabled", {
                handler: this.type
            }))
        },
        disable: function() {
            this._enabled && (L.Handler.prototype.disable.call(this), this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), this.fire("disabled", {
                handler: this.type
            }))
        },
        addHooks: function() {
            this._map && (this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.layerGroup, this._tooltip = new L.Tooltip(this._map), this._tooltip.updateContent({
                text: "Click on a feature to remove."
            }), this._map.on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function() {
            this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this))
        },
        revertLayers: function() {
            this._deletedLayers.eachLayer(function(t) {
                this._deletableLayers.addLayer(t)
            }, this)
        },
        save: function() {
            this._map.fire("draw:deleted", {
                layers: this._deletedLayers
            })
        },
        _enableLayerDelete: function(t) {
            var e = t.layer || t.target || t;
            e.on("click", this._removeLayer, this)
        },
        _disableLayerDelete: function(t) {
            var e = t.layer || t.target || t;
            e.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(e)
        },
        _removeLayer: function(t) {
            var e = t.layer || t.target || t;
            this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e)
        },
        _onMouseMove: function(t) {
            this._tooltip.updatePosition(t.latlng)
        }
    })
}(this, document), topojson = function() {
    function t(t, e) {
        function n(e) {
            var n = t.arcs[e], i = n[0], o = [0, 0];
            return n.forEach(function(t) {
                o[0] += t[0], o[1] += t[1]
            }), [i, o]
        }
        var i = {}, o = {}, s = {};
        e.forEach(function(t) {
            var e = n(t);
            (i[e[0]] || (i[e[0]] = [])).push(t), (i[e[1]] || (i[e[1]] = [])).push(~t)
        }), e.forEach(function(t) {
            var e, i, r = n(t), a = r[0], l = r[1];
            if (e = s[a])
                if (delete s[e.end], e.push(t)
                    , e.end = l, i = o[l]) {
                delete o[i.start];
                var h = i === e ? e: e.concat(i);
                o[h.start = e.start] = s[h.end = i.end] = h
            } else if (i = s[l]) {
                delete o[i.start], delete s[i.end];
                var h = e.concat(i.map(function(t) {
                    return ~t
                }).reverse());
                o[h.start = e.start] = s[h.end = i.start] = h
            } else 
                o[e.start] = s[e.end] = e;
                else if (e = o[l])
                    if (delete o[e.start], e.unshift(t)
                        , e.start = a, i = s[a]) {
                delete s[i.end];
                var u = i === e ? e: i.concat(e);
                o[u.start = i.start] = s[u.end = e.end] = u
            } else if (i = o[a]) {
                delete o[i.start], delete s[i.end];
                var u = i.map(function(t) {
                    return ~t
                }).reverse().concat(e);
                o[u.start = i.end] = s[u.end = e.end] = u
            } else 
                o[e.start] = s[e.end] = e;
                else if (e = o[a])
                    if (delete o[e.start], e.unshift(~t)
                        , e.start = l, i = s[l]) {
            delete s[i.end];
            var u = i === e ? e: i.concat(e);
            o[u.start = i.start] = s[u.end = e.end] = u
        } else if (i = o[l]) {
            delete o[i.start], delete s[i.end];
            var u = i.map(function(t) {
                return ~t
            }).reverse().concat(e);
            o[u.start = i.end] = s[u.end = e.end] = u
        } else 
            o[e.start] = s[e.end] = e;
            else if (e = s[l])
                if (delete s[e.end], e.push(~t)
                    , e.end = a, i = s[a]) {
    delete o[i.start];
    var h = i === e ? e: e.concat(i);
    o[h.start = e.start] = s[h.end = i.end] = h
} else if (i = o[a]) {
    delete o[i.start], delete s[i.end];
    var h = e.concat(i.map(function(t) {
        return ~t
    }).reverse());
    o[h.start = e.start] = s[h.end = i.start] = h
} else 
    o[e.start] = s[e.end] = e;
    else 
        e = [t], o[e.start = a] = s[e.end = l] = e
});
var r = [];
for (var a in s)
    r.push(s[a]);
return r
}
function e(e, n, i) {
    function s(t) {
        0 > t && (t=~t), (c[t] || (c[t] = [])).push(u)
    }
    function r(t) {
        t.forEach(s)
    }
    function a(t) {
        t.forEach(r)
    }
    function l(t) {
        "GeometryCollection" === t.type ? t.geometries.forEach(l) : t.type in p && (u = t, p[t.type](t.arcs))
    }
    var h = [];
    if (arguments.length > 1) {
        var u, c = [], p = {
            LineString: r,
            MultiLineString: a,
            Polygon: a,
            MultiPolygon: function(t) {
                t.forEach(a)
            }
        };
        l(n), c.forEach(arguments.length < 3 ? function(t, e) {
            h.push([e])
        } : function(t, e) {
            i(t[0], t[t.length-1]) && h.push([e])
        })
    } else 
        for (var d = 0, f = e.arcs.length; f > d; ++d)
            h.push([d]);
    return o(e, {
        type: "MultiLineString",
        arcs: t(e, h)
    })
}
function n(t, e) {
    return "GeometryCollection" === e.type ? {
        type: "FeatureCollection",
        features: e.geometries.map(function(e) {
            return i(t, e)
        })
    } : i(t, e)
}
function i(t, e) {
    var n = {
        type: "Feature",
        id: e.id,
        properties: e.properties || {},
        geometry: o(t, e)
    };
    return null == e.id && delete n.id, n
}
function o(t, e) {
    function n(t, e) {
        e.length && e.pop();
        for (var n, i = f[0 > t?~t: t], o = 0, r = i.length, a = 0, l = 0; r > o; ++o)
            e.push([(a += (n = i[o])[0]) * u + p, (l += n[1]) * c + d]);
        0 > t && s(e, r)
    }
    function i(t) {
        return [t[0] * u + p, t[1] * c + d]
    }
    function o(t) {
        for (var e = [], i = 0, o = t.length; o > i; ++i)
            n(t[i], e);
        return e.length < 2 && e.push(e[0]), e
    }
    function r(t) {
        for (var e = o(t); e.length < 4;)
            e.push(e[0]);
        return e
    }
    function a(t) {
        return t.map(r)
    }
    function l(t) {
        var e = t.type;
        return "GeometryCollection" === e ? {
            type: e,
            geometries: t.geometries.map(l)
        } : e in m ? {
            type: e,
            coordinates: m[e](t)
        } : null
    }
    var h = t.transform, u = h.scale[0], c = h.scale[1], p = h.translate[0], d = h.translate[1], f = t.arcs, m = {
        Point: function(t) {
            return i(t.coordinates)
        },
        MultiPoint: function(t) {
            return t.coordinates.map(i)
        },
        LineString: function(t) {
            return o(t.arcs)
        },
        MultiLineString: function(t) {
            return t.arcs.map(o)
        },
        Polygon: function(t) {
            return a(t.arcs)
        },
        MultiPolygon: function(t) {
            return t.arcs.map(a)
        }
    };
    return l(e)
}
function s(t, e) {
    for (var n, i = t.length, o = i - e; o<--i;)
        n = t[o], t[o++] = t[i], t[i] = n
}
function r(t, e) {
    for (var n = 0, i = t.length; i > n;) {
        var o = n + i>>>1;
        t[o] < e ? n = o + 1 : i = o
    }
    return n
}
function a(t) {
    function e(t, e) {
        t.forEach(function(t) {
            0 > t && (t=~t);
            var n = o[t] || (o[t] = []);
            n[e] || (n.forEach(function(t) {
                var n, i;
                i = r(n = s[e], t), n[i] !== t && n.splice(i, 0, t), i = r(n = s[t], e), n[i] !== e && n.splice(i, 0, e)
            }), n[e] = e)
        })
    }
    function n(t, n) {
        t.forEach(function(t) {
            e(t, n)
        })
    }
    function i(t, e) {
        "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
            i(t, e)
        }) : t.type in a && a[t.type](t.arcs, e)
    }
    var o = [], s = t.map(function() {
        return []
    }), a = {
        LineString: e,
        MultiLineString: n,
        Polygon: n,
        MultiPolygon: function(t, e) {
            t.forEach(function(t) {
                n(t, e)
            })
        }
    };
    return t.forEach(i), s
}
return {
    version: "1.1.1",
    mesh: e,
    feature: n,
    neighbors: a
}
}(), jQuery.fn.fastLiveFilter = function(t, e) {
    e = e || {}, t = jQuery(t);
    var n, i = this, o = e.timeout || 0, s = e.callback || function() {}, r = t.children(), a = r.length, l = a > 0 ? r[0].style.display: "block";
    return s(a), i.change(function() {
        for (var t, e = i.val().toLowerCase(), n = 0, o = 0; a > o; o++)
            t = r[o], (t.textContent || t.innerText || "").toLowerCase().indexOf(e) >= 0 ? ("none" == t.style.display && (t.style.display = l), n++) : "none" != t.style.display && (t.style.display = "none");
        return s(n), !1
    }).keydown(function() {
        clearTimeout(n), n = setTimeout(function() {
            i.change()
        }, o)
    }), this
}, L.Control.AutoEdit = L.Control.Draw.extend({
    initialize: function(t) {
        this.autoEditOptions = t.edit, t.edit.edit=!1, L.Control.Draw.prototype.initialize.call(this, t)
    },
    onAdd: function(t) {
        var e = L.Control.Draw.prototype.onAdd.call(this, t);
        return this.editToolbar = new L.EditToolbar.Edit(t, this.autoEditOptions), this.editToolbar.enable(), e
    },
    onRemove: function() {
        L.Control.Draw.prototype.onRemove.call(this), this.editToolbar.disable()
    }
}), L.Edit.Poly.include({
    _fireEdit: function() {
        this._poly.dirty=!0, this._poly.edited=!0, this._poly.fire("edit")
    }
}), L.Draw.Polyline.include({
    _fireCreatedEvent: function() {
        var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
        L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
    }
}), L.Draw.Feature.include({
    _fireCreatedEvent: function(t) {
        this._map.fire("draw:created", {
            layer: t,
            layerType: this.type,
            polygon: this
        })
    },
    addHooks: function() {
        this._map && (L.DomUtil.disableTextSelection(), this._tooltip = new L.Tooltip(this._map))
    }
}), L.Draw.Polygon.include({}), L.EditToolbar.Edit.include({
    addHooks: function() {
        this._map && (this._featureGroup.eachLayer(this._enableLayerEdit, this), this._map.on("mousemove", this._onMouseMove, this))
    },
    _onMouseMove: function() {},
    removeHooks: function() {
        this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._map.off("mousemove", this._onMouseMove, this))
    }
}), L.EditToolbar.Delete.include({
    _removeLayer: function(t) {
        var e = t.layer || t.target || t;
        console.log("actually removing"), this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e), this.save(), this.disable()
    }
}), L.Polygon.include({
    getCenter: function() {
        for (var t, e, n, i = this._latlngs, o = i[0], s = 0, r = 0, a = 0, l = i.length, h = 0, u = l-1; l > h; u = h++)
            t = i[h], e = i[u], n = (t.lat - o.lat) * (e.lng - o.lng) - (e.lat - o.lat) * (t.lng - o.lng), s += n, r += (t.lat + e.lat-2 * o.lat) * n, a += (t.lng + e.lng-2 * o.lng) * n;
        return n = 3 * s, new L.LatLng(r / n + o.lat, a / n + o.lng)
    }
});
var LanguageMapper = {};
LanguageMapper.Utils = {}, LanguageMapper.Utils.colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"], Handlebars.registerHelper("possible", function(t) {
    return "undefined" == typeof t || null == t || "" == t ? "??" : new Handlebars.SafeString(t)
}), LanguageMapper.Change = function(t) {
    this.object = t
}, LanguageMapper.Change.prototype.changeType = function() {
    return this.object.deleted ? "deletion" : "undefined" == typeof this.objectId() ? "addition" : "edit"
}, LanguageMapper.Change.prototype.objectType = function() {
    return this.object instanceof LanguageMapper.Language ? "Language" : "Polygon"
}, LanguageMapper.Change.prototype.objectId = function() {
    return "Language" === this.objectType() ? this.object.id : this.object.feature ? this.object.feature.id : void 0
}, LanguageMapper.Change.prototype.languageId = function() {
    return "Language" === this.objectType() ? this.objectId() : this.object.properties ? this.object.properties.language_id : void 0
}, LanguageMapper.Change.prototype.data = function() {
    return {
        action: this.changeType(),
        target_type: this.objectType(),
        target_id: this.objectId(),
        language_id: this.languageId(),
        json_data: JSON.stringify(this.objectData())
    }
}, LanguageMapper.Change.prototype.objectData = function() {
    if ("Language" === this.objectType())
        return "addition" === this.changeType() ? {
            properties: this.object.properties(),
            polygons: this.object.polygonData()
        } : {
            properties: this.object.properties()
        };
    if (!this.object.deleted)
        return {
            geometry: this.object.toGeoJSON()
        }
}, LanguageMapper.Map = function(t, e) {
    if (this.initMap(t), this.attachEvents()
        , this.deletedLayers = new L.FeatureGroup, "undefined" != typeof e.changesets && (this.changesets = e.changesets.map(function(t) {
        return new LanguageMapper.ChangeSet(t)
    })), this.languages = [], "undefined" != typeof e.languages) {
        var n = this;
        e.languages.sort(function(t, e) {
            return e.properties.name == t.properties.name ? 0 : e.properties.name > t.properties.name?-1 : 1
        }), e.languages.forEach(function(t) {
            var e = new LanguageMapper.Language(n, t);
            n.addLanguage(e)
        })
    }
    this.initFilter(), this.orderLayers()
}, LanguageMapper.Map.prototype.orderLayers = function() {
    this.languages.forEach(function(t) {
        t.setPerimeter()
    }), this.languages.sort(function(t, e) {
        return e.perimeter - t.perimeter
    }), this.languages.forEach(function(t) {
        t.getFeatureGroup().bringToFront()
    })
}, LanguageMapper.Map.prototype.initFilter = function() {
    $("#language-search").fastLiveFilter("#language-list")
}, LanguageMapper.Map.prototype.initMap = function(t) {
    this.map = L.map(t, {
        center: [0, 0],
        zoom: 2,
        maxBounds: [new L.LatLng(-90, -180), new L.LatLng(90, 180)]
    }).addLayer(L.tileLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg", {
        noWrap: !0,
        subdomains: "1234",
        type: "osm"
    })), this.map.attributionControl.setPrefix("").addAttribution('Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" style="vertical-align: middle; "/>')
}, LanguageMapper.Map.prototype.stopEditing = function() {
    "undefined" != typeof this.drawControl && null !== this.drawControl && (this.map.removeControl(this.drawControl), "undefined" != typeof this.currentLanguage && null !== this.currentLanguage && this.currentLanguage.reStyle(), this.currentLanguage = null, this.drawControl = null)
}, LanguageMapper.Map.prototype.makeEditableLayer = function() {
    this.stopEditing(), this.drawControl = new L.Control.AutoEdit({
        edit: {
            featureGroup: this.editableItems
        },
        draw: {
            polygon: {
                title: "Draw a new area",
                shapeOptions: {
                    color: "#f357a1",
                    weight: 2
                }
            },
            polyline: !1,
            circle: !1,
            rectangle: !1,
            marker: !1
        }
    }), this.editableItems.bringToFront(), this.map.addControl(this.drawControl)
}, LanguageMapper.Map.prototype.polygonEdited = function(t) {
    var e = this;
    "undefined" != typeof t.layers ? t.layers.getLayers().forEach(function(t) {
        e.deletedLayers.addLayer(t), t.dirty=!0, t.deleted=!0
    }) : (t.layer.dirty=!0, t.layer.added=!0)
}, LanguageMapper.Map.prototype.attachEvents = function() {
    this.map.on("draw:created", this.addElement, this), this.map.on("draw:created", this.polygonEdited, this), this.map.on("draw:deleted", this.polygonEdited, this), this.map.on("edit", this.somethingEdited, this);
    var t = this;
    $("#stay-connected .btn").click(function() {
        return "" != $("#email").val() ? (t.mailingList(), $("#stay-connected").html("<p><strong>Great!</strong> We'll keep you in the loop about what goes on.</p>"), !1) : void 0
    }), $("#send-changes .button .btn").click(function() {
        t.sendAsk()
    }), $("#send-changes .ask .btn").click(function() {
        t.sendChanges()
    })
}, LanguageMapper.Map.prototype.addElement = function(t) {
    this.editableItems.addLayer(t.layer)
}, LanguageMapper.Map.prototype.languageInputValues = function() {
    var t = {};
    return $("#current-info input").each(function(e, n) {
        var i = $(n);
        t[i.attr("name")] = i.val()
    }), t
}, LanguageMapper.Map.prototype.saveCurrent = function() {
  alert("This page is now archived! No more updating, sorry.");
  return false;
    "undefined" != typeof this.currentLanguage && null !== this.currentLanguage && (this.currentLanguage.updateAttributes(this.languageInputValues()), this.currentLanguage.save()), this.cancelCurrent()
}, LanguageMapper.Map.prototype.doChangePost = function() {
  alert("This page is now archived! No more updating, sorry.");
  return false;
    var t = {
        changes_attributes: this.changeData(),
        email: $("#email").val(),
        comments: $("#comments").val()
    };
    $.post("/open-source-language-map/submit", {
        change_set: t
    })
}, LanguageMapper.Map.prototype.sendChanges = function() {
  alert("This page is now archived! No more updating, sorry.");
  return false;
    this.doChangePost(), this.refreshEditedLanguages()
}, LanguageMapper.Map.prototype.refreshEditedLanguages = function() {
    this.languages.forEach(function(t) {
        t.dirty=!1, t.cleanPolygons()
    }), this.deletedLayers = new L.FeatureGroup
}, LanguageMapper.Map.prototype.cancelCurrent = function() {
    this.stopEditing(), this.stopEditingInputs()
}, LanguageMapper.Map.prototype.makeEditableInputs = function() {
    var t = Handlebars.compile($("#language-edit-template").html());
    $("#current-info").html(t(this.currentLanguage.properties())), $("#current-language").show()
}, LanguageMapper.Map.prototype.stopEditingInputs = function() {
    $("#current-info").html(""), $("#current-language").hide()
}, LanguageMapper.Map.prototype.switchLanguage = function(t) {
    this.saveCurrent(), this.currentLanguage = t, this.editableItems = t.getFeatureGroup(), this.makeEditableLayer(), this.makeEditableInputs()
}, LanguageMapper.Map.prototype.replaceLanguages = function(t) {
    this.cancelCurrent(), this.languages.forEach(function(t) {
        t.remove()
    }), this.languages = [];
    var e = this;
    t.forEach(function(t) {
        e.addLanguage(t)
    })
}, LanguageMapper.Map.prototype.removeCompare = function() {
    "undefined" != typeof this.comparedLanguage && null !== this.comparedLanguage && this.map.removeLayer(this.comparedLanguage.getFeatureGroup()), this.comparedLanguage = null
}, LanguageMapper.Map.prototype.compare = function(t, e) {
    return t instanceof LanguageMapper.Language || (t = new LanguageMapper.Language(this, t)), e && "undefined" != typeof this.comparedLanguage && null !== this.comparedLanguage ? (this.removeCompare(), void 0) : (this.removeCompare(), this.comparedLanguage = t, this.map.addLayer(this.comparedLanguage.getFeatureGroup()), t.setColor("#FFFFFF"), e || t.goTo(), void 0)
}, LanguageMapper.Map.prototype.addLanguage = function(t) {
    t instanceof LanguageMapper.Language || (t = new LanguageMapper.Language(this, t)), this.languages.push(t);
    var e = LanguageMapper.Utils.colors[this.languages.length%LanguageMapper.Utils.colors.length];
    t.setColor(e), $("#language-list").append(t.$el)
}, LanguageMapper.Map.prototype.newLanguage = function() {
    var t = new LanguageMapper.Language(this, {});
    this.addLanguage(t), this.switchLanguage(t)
}, LanguageMapper.Map.prototype.addLayer = function(t) {
    this.map.addLayer(t)
}, LanguageMapper.Map.prototype.removeLayer = function(t) {
    this.map.removeLayer(t)
}, LanguageMapper.Map.prototype.changeData = function() {
    return this.changes().map(function(t) {
        return t.data()
    })
}, LanguageMapper.Map.prototype.changes = function() {
    var t = [], e = this.dirtyLanguages();
    return e.forEach(function(e) {
        t.push(new LanguageMapper.Change(e))
    }), this.deletedLayers.eachLayer(function(e) {
        t.push(new LanguageMapper.Change(e))
    }), e.forEach(function(e) {
        e.dirtyPolygons().forEach(function(e) {
            t.push(new LanguageMapper.Change(e))
        })
    }), t
}, LanguageMapper.Map.prototype.dirtyLanguages = function() {
    return this.languages.filter(function(t) {
        return t.dirty
    })
}, LanguageMapper.Map.prototype.editsJSON = function() {
    return JSON.stringify(this.edits(), null)
}, LanguageMapper.Map.prototype.showInfo = function(t) {
    this.closeInfo(), this.tooltip = new L.Tooltip(this.map);
    var e = "undefined" == typeof t.name ? "?????": t.name, n = [];
    ["iso1", "iso2b", "iso2t", "iso3"].forEach(function(e) {
        var i = t.properties()[e];
        n.push("undefined" == typeof i || "" == i ? "??" : i)
    }), this.tooltip.updateContent({
        text: e,
        subtext: n.join(" / ")
    }), this.map.on("mousemove", this._onMouseMove, this)
}, LanguageMapper.Map.prototype.closeInfo = function() {
    "undefined" != typeof this.tooltip && null !== this.tooltip && (this.tooltip.dispose(), this.tooltip = null)
}, LanguageMapper.Map.prototype._onMouseMove = function(t) {
    "undefined" != typeof this.tooltip && null !== this.tooltip && this.tooltip.updatePosition(t.latlng)
}, LanguageMapper.Language = function(t, e) {
    this.template = Handlebars.compile($("#language-blurb-template").html()), this.dirty=!1, this.mapper = t, this.id = e.id, this.$el = $("<div class='entry'></div>"), this.geo = (e || {}).geo, this.attachEvents(), this.updateAttributes(e.properties), "undefined" != typeof e.properties && this.refreshListing()
}, LanguageMapper.Language.prototype.attachEvents = function() {
    var t = this;
    this.$el.on("click", ".btn-edit", function() {
        return t.edit(), !1
    }).on("click", ".name", function() {
        return t.goTo(), !1
    })
}, LanguageMapper.Language.prototype.setPerimeter = function() {
    this.perimeter = this.computedPerimeter()
}, LanguageMapper.Language.prototype.polygonData = function() {
    return this.getFeatureGroup().getLayers().map(function(t) {
        return {
            geometry: t.toGeoJSON()
        }
    })
}, LanguageMapper.Language.prototype.refreshListing = function() {
    this.$el.html(this.template(this.properties()))
}, LanguageMapper.Language.prototype.updateAttributes = function(t) {
    "undefined" != typeof t && (this.name = t.name, this.speakers = t.speakers, this.nativeName = t.nativeName, this.alternateNames = t.alternateNames, this.iso1 = t.iso1, this.iso2t = t.iso2t, this.iso2b = t.iso2b, this.iso3 = t.iso3)
}, LanguageMapper.Language.prototype.edit = function() {
    this.mapper.switchLanguage(this)
}, LanguageMapper.Language.prototype.toGeoJSON = function() {
    var t = [], e = this;
    this.getFeatureGroup().eachLayer(function(n) {
        "toGeoJSON"in n && t.push({
            type: "Feature",
            geometry: n.toGeoJSON(),
            properties: e.properties()
        })
    });
    var n = {
        type: "FeatureCollection",
        features: t
    };
    return n
}, LanguageMapper.Language.prototype.properties = function() {
    return {
        name: this.name,
        nativeName: this.nativeName,
        speakers: this.speakers,
        alternateNames: this.alternateNames,
        iso1: this.iso1,
        iso2t: this.iso2t,
        iso2b: this.iso2b,
        iso3: this.iso3
    }
}, LanguageMapper.Language.prototype.dirtyPolygons = function() {
    var t = [];
    return this.getFeatureGroup().eachLayer(function(e) {
        e.dirty && t.push(e)
    }), t
}, LanguageMapper.Language.prototype.isNew = function() {
    return "undefined" == typeof this.id
}, LanguageMapper.Language.prototype.save = function() {
    this.dirty=!0, this.refreshListing();
    var t = this;
    this.getFeatureGroup().eachLayer(function(e) {
        e.properties || (e.properties = {}), e.properties.language_id = t.id
    }), this.mapper.sendChanges()
}, LanguageMapper.Language.prototype.cleanPolygons = function() {
    this.getFeatureGroup().eachLayer(function(t) {
        t.edited=!1
    })
}, LanguageMapper.Language.prototype.addToMap = function() {
    this.mapper.addLayer(this.getFeatureGroup())
}, LanguageMapper.Language.prototype.remove = function() {
    this.$el.remove(), this.mapper.removeLayer(this.getFeatureGroup())
}, LanguageMapper.Language.prototype.computedPerimeter = function() {
    var t = 0;
    return this.getFeatureGroup().eachLayer(function(e) {
        for (var n = e._originalPoints.length-1, i = 0; i < e._originalPoints.length; i++)
            t += e._originalPoints[i].distanceTo(e._originalPoints[n])
    }), t
}, LanguageMapper.Language.prototype.showInfo = function() {
    this.mapper.showInfo(this)
}, LanguageMapper.Language.prototype.closeInfo = function() {
    this.mapper.closeInfo()
}, LanguageMapper.Language.prototype.initializeFeatureGroup = function() {
    this._featureGroup = "undefined" != typeof this.geo ? new L.geoJson(this.geo) : new L.FeatureGroup, this.attachFeatureActions(), this.addToMap()
}, LanguageMapper.Language.prototype.attachFeatureActions = function() {
    var t = this;
    this._featureGroup.on("click", function() {
        t.clickCallback && clearTimeout(t.clickCallback), t.clickCallback = setTimeout(function() {
            t.goTo()
        }, 325)
    }, this).on("mouseover", function() {
        t.showInfo()
    }).on("mouseout", function() {
        t.closeInfo()
    }).on("dblclick", function() {
        t.clickCallback && clearTimeout(t.clickCallback), t.mapper.switchLanguage(t)
    })
}, LanguageMapper.Language.prototype.getFeatureGroup = function() {
    return "undefined" == typeof this._featureGroup && this.initializeFeatureGroup(), this._featureGroup
}, LanguageMapper.Language.prototype.goTo = function() {
    "undefined" != typeof this.getFeatureGroup().getBounds().getNorthEast() && this.mapper.map.fitBounds(this.getFeatureGroup().getBounds().pad(.5))
}, LanguageMapper.Language.prototype.reStyle = function() {
    this.getFeatureGroup().setStyle({
        color: this.hexColor,
        fillColor: this.hexColor
    }), this.$el.css({
        borderLeftColor: this.hexColor,
        borderLeftWidth: "10px",
        borderLeftStyle: "solid",
        paddingLeft: "5px"
    })
}, LanguageMapper.Language.prototype.setColor = function(t) {
    this.hexColor = t, this.reStyle()
};
