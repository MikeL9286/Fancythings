﻿/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () { function e() { } function t(e, t) { for (var n = e.length; n--;) if (e[n].listener === t) return n; return -1 } function n(e) { return function () { return this[e].apply(this, arguments) } } var i = e.prototype, r = this, o = r.EventEmitter; i.getListeners = function (e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function (e) { var t, n = []; for (t = 0; e.length > t; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function (e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function (e, n) { var i, r = this.getListenersAsObject(e), o = "object" == typeof n; for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 }); return this }, i.on = n("addListener"), i.addOnceListener = function (e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function (e) { return this.getListeners(e), this }, i.defineEvents = function (e) { for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function (e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function (e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function (e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function (e, t, n) { var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners; if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r)); return this }, i.removeEvent = function (e) { var t, n = typeof e, i = this._getEvents(); if ("string" === n) delete i[e]; else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events; return this }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) { var n, i, r, o, s = this.getListenersAsObject(e); for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener); return this }, i.trigger = n("emitEvent"), i.emit = function (e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function (e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function () { return this._events || (this._events = {}) }, e.noConflict = function () { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e }).call(this), function (e) { function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n } var n = document.documentElement, i = function () { }; n.addEventListener ? i = function (e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function (e, n, i) { e[n + i] = i.handleEvent ? function () { var n = t(e); i.handleEvent.call(i, n) } : function () { var n = t(e); i.call(e, n) }, e.attachEvent("on" + n, e[n + i]) }); var r = function () { }; n.removeEventListener ? r = function (e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function (e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } }); var o = { bind: i, unbind: r }; "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o }(this), function (e, t) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function (e, t, n) { function i(e, t) { for (var n in t) e[n] = t[n]; return e } function r(e) { return "[object Array]" === d.call(e) } function o(e) { var t = []; if (r(e)) t = e; else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]); else t.push(e); return t } function s(e, t, n) { if (!(this instanceof s)) return new s(e, t); "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred); var r = this; setTimeout(function () { r.check() }) } function f(e) { this.img = e } function c(e) { this.src = e, v[e] = this } var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString; s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () { this.images = []; for (var e = 0, t = this.elements.length; t > e; e++) { var n = this.elements[e]; "IMG" === n.nodeName && this.addImage(n); var i = n.nodeType; if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) { var f = r[o]; this.addImage(f) } } }, s.prototype.addImage = function (e) { var t = new f(e); this.images.push(t) }, s.prototype.check = function () { function e(e, r) { return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 } var t = this, n = 0, i = this.images.length; if (this.hasAnyBroken = !1, !i) return this.complete(), void 0; for (var r = 0; i > r; r++) { var o = this.images[r]; o.on("confirm", e), o.check() } }, s.prototype.progress = function (e) { this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded; var t = this; setTimeout(function () { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) }) }, s.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; this.isComplete = !0; var t = this; setTimeout(function () { if (t.emit(e, t), t.emit("always", t), t.jqDeferred) { var n = t.hasAnyBroken ? "reject" : "resolve"; t.jqDeferred[n](t) } }) }, a && (a.fn.imagesLoaded = function (e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(a(this)) }), f.prototype = new t, f.prototype.check = function () { var e = v[this.img.src] || new c(this.img.src); if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0; if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0; var t = this; e.on("confirm", function (e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check() }, f.prototype.confirm = function (e, t) { this.isLoaded = e, this.emit("confirm", this, t) }; var v = {}; return c.prototype = new t, c.prototype.check = function () { if (!this.isChecked) { var e = new Image; n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0 } }, c.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, c.prototype.onload = function (e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, c.prototype.onerror = function (e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, c.prototype.confirm = function (e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, c.prototype.unbindProxyEvents = function (e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s });

/*! http://responsiveslides.com v1.54 by @viljamis */
(function (c, I, B) {
    c.fn.responsiveSlides = function (l) {
        var a = c.extend({ auto: !0, speed: 500, timeout: 4E3, pager: !1, nav: !1, random: !1, pause: !1, pauseControls: !0, prevText: "Previous", nextText: "Next", maxwidth: "", navContainer: "", manualControls: "", namespace: "rslides", before: c.noop, after: c.noop }, l); return this.each(function () {
            B++; var f = c(this), s, r, t, m, p, q, n = 0, e = f.children(), C = e.size(), h = parseFloat(a.speed), D = parseFloat(a.timeout), u = parseFloat(a.maxwidth), g = a.namespace, d = g + B, E = g + "_nav " + d + "_nav", v = g + "_here", j = d + "_on",
            w = d + "_s", k = c("<ul class='" + g + "_tabs " + d + "_tabs' />"), x = { "float": "left", position: "relative", opacity: 1, zIndex: 2 }, y = { "float": "none", position: "absolute", opacity: 0, zIndex: 1 }, F = function () { var b = (document.body || document.documentElement).style, a = "transition"; if ("string" === typeof b[a]) return !0; s = ["Moz", "Webkit", "Khtml", "O", "ms"]; var a = a.charAt(0).toUpperCase() + a.substr(1), c; for (c = 0; c < s.length; c++) if ("string" === typeof b[s[c] + a]) return !0; return !1 }(), z = function (b) {
                a.before(b); F ? (e.removeClass(j).css(y).eq(b).addClass(j).css(x),
                n = b, setTimeout(function () { a.after(b) }, h)) : e.stop().fadeOut(h, function () { c(this).removeClass(j).css(y).css("opacity", 1) }).eq(b).fadeIn(h, function () { c(this).addClass(j).css(x); a.after(b); n = b })
            }; a.random && (e.sort(function () { return Math.round(Math.random()) - 0.5 }), f.empty().append(e)); e.each(function (a) { this.id = w + a }); f.addClass(g + " " + d); l && l.maxwidth && f.css("max-width", u); e.hide().css(y).eq(0).addClass(j).css(x).show(); F && e.show().css({
                "-webkit-transition": "opacity " + h + "ms ease-in-out", "-moz-transition": "opacity " +
                h + "ms ease-in-out", "-o-transition": "opacity " + h + "ms ease-in-out", transition: "opacity " + h + "ms ease-in-out"
            }); if (1 < e.size()) {
                if (D < h + 100) return; if (a.pager && !a.manualControls) { var A = []; e.each(function (a) { a += 1; A += "<li><a href='#' class='" + w + a + "'>" + a + "</a></li>" }); k.append(A); l.navContainer ? c(a.navContainer).append(k) : f.after(k) } a.manualControls && (k = c(a.manualControls), k.addClass(g + "_tabs " + d + "_tabs")); (a.pager || a.manualControls) && k.find("li").each(function (a) { c(this).addClass(w + (a + 1)) }); if (a.pager || a.manualControls) q =
                k.find("a"), r = function (a) { q.closest("li").removeClass(v).eq(a).addClass(v) }; a.auto && (t = function () { p = setInterval(function () { e.stop(!0, !0); var b = n + 1 < C ? n + 1 : 0; (a.pager || a.manualControls) && r(b); z(b) }, D) }, t()); m = function () { a.auto && (clearInterval(p), t()) }; a.pause && f.hover(function () { clearInterval(p) }, function () { m() }); if (a.pager || a.manualControls) q.bind("click", function (b) { b.preventDefault(); a.pauseControls || m(); b = q.index(this); n === b || c("." + j).queue("fx").length || (r(b), z(b)) }).eq(0).closest("li").addClass(v),
                a.pauseControls && q.hover(function () { clearInterval(p) }, function () { m() }); if (a.nav) {
                    g = "<a href='#' class='" + E + " prev'>" + a.prevText + "</a><a href='#' class='" + E + " next'>" + a.nextText + "</a>"; l.navContainer ? c(a.navContainer).append(g) : f.after(g); var d = c("." + d + "_nav"), G = d.filter(".prev"); d.bind("click", function (b) { b.preventDefault(); b = c("." + j); if (!b.queue("fx").length) { var d = e.index(b); b = d - 1; d = d + 1 < C ? n + 1 : 0; z(c(this)[0] === G[0] ? b : d); if (a.pager || a.manualControls) r(c(this)[0] === G[0] ? b : d); a.pauseControls || m() } });
                    a.pauseControls && d.hover(function () { clearInterval(p) }, function () { m() })
                }
            } if ("undefined" === typeof document.body.style.maxWidth && l.maxwidth) { var H = function () { f.css("width", "100%"); f.width() > u && f.css("width", u) }; H(); c(I).bind("resize", function () { H() }) }
        })
    }
})(jQuery, this, 0);

/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
!function (a, b) { "use strict"; function c(a) { this.callback = a, this.ticking = !1 } function d(b) { return b && "undefined" != typeof a && (b === a || b.nodeType) } function e(a) { if (arguments.length <= 0) throw new Error("Missing arguments in extend function"); var b, c, f = a || {}; for (c = 1; c < arguments.length; c++) { var g = arguments[c] || {}; for (b in g) f[b] = "object" != typeof f[b] || d(f[b]) ? f[b] || g[b] : e(f[b], g[b]) } return f } function f(a) { return a === Object(a) ? a : { down: a, up: a } } function g(a, b) { b = e(b, g.options), this.lastKnownScrollY = 0, this.elem = a, this.debouncer = new c(this.update.bind(this)), this.tolerance = f(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop } var h = { bind: !!function () { }.bind, classList: "classList" in b.documentElement, rAF: !!(a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame) }; a.requestAnimationFrame = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, c.prototype = { constructor: c, update: function () { this.callback && this.callback(), this.ticking = !1 }, requestTick: function () { this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0) }, handleEvent: function () { this.requestTick() } }, g.prototype = { constructor: g, init: function () { return g.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0 }, destroy: function () { var a = this.classes; this.initialised = !1, this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1) }, attachEvent: function () { this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent()) }, unpin: function () { var a = this.elem.classList, b = this.classes; (a.contains(b.pinned) || !a.contains(b.unpinned)) && (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this)) }, pin: function () { var a = this.elem.classList, b = this.classes; a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this)) }, top: function () { var a = this.elem.classList, b = this.classes; a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this)) }, notTop: function () { var a = this.elem.classList, b = this.classes; a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this)) }, getScrollY: function () { return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (b.documentElement || b.body.parentNode || b.body).scrollTop }, getViewportHeight: function () { return a.innerHeight || b.documentElement.clientHeight || b.body.clientHeight }, getDocumentHeight: function () { var a = b.body, c = b.documentElement; return Math.max(a.scrollHeight, c.scrollHeight, a.offsetHeight, c.offsetHeight, a.clientHeight, c.clientHeight) }, getElementHeight: function (a) { return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight) }, getScrollerHeight: function () { return this.scroller === a || this.scroller === b.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller) }, isOutOfBounds: function (a) { var b = 0 > a, c = a + this.getViewportHeight() > this.getScrollerHeight(); return b || c }, toleranceExceeded: function (a, b) { return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b] }, shouldUnpin: function (a, b) { var c = a > this.lastKnownScrollY, d = a >= this.offset; return c && d && b }, shouldPin: function (a, b) { var c = a < this.lastKnownScrollY, d = a <= this.offset; return c && b || d }, update: function () { var a = this.getScrollY(), b = a > this.lastKnownScrollY ? "down" : "up", c = this.toleranceExceeded(a, b); this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a) } }, g.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: a, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, g.cutsTheMustard = "undefined" != typeof h && h.rAF && h.bind && h.classList, a.Headroom = g }(window, document);