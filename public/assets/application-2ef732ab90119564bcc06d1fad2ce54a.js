//! moment.js
//! version : 2.7.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) { function b(a, b, c) { switch (arguments.length) { case 2: return null != a ? a : b; case 3: return null != a ? a : null != b ? b : c; default: throw new Error("Implement me") } } function c() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 } } function d(a, b) { function c() { mb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a) } var d = !0; return j(function () { return d && (c(), d = !1), b.apply(this, arguments) }, b) } function e(a, b) { return function (c) { return m(a.call(this, c), b) } } function f(a, b) { return function (c) { return this.lang().ordinal(a.call(this, c), b) } } function g() { } function h(a) { z(a), j(this, a) } function i(a) { var b = s(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0; this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble() } function j(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]); return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a } function k(a) { var b, c = {}; for (b in a) a.hasOwnProperty(b) && Ab.hasOwnProperty(b) && (c[b] = a[b]); return c } function l(a) { return 0 > a ? Math.ceil(a) : Math.floor(a) } function m(a, b, c) { for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d; return (e ? c ? "+" : "" : "-") + d } function n(a, b, c, d) { var e = b._milliseconds, f = b._days, g = b._months; d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && hb(a, "Date", gb(a, "Date") + f * c), g && fb(a, gb(a, "Month") + g * c), d && mb.updateOffset(a, f || g) } function o(a) { return "[object Array]" === Object.prototype.toString.call(a) } function p(a) { return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date } function q(a, b, c) { var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0; for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++; return g + f } function r(a) { if (a) { var b = a.toLowerCase().replace(/(.)s$/, "$1"); a = bc[a] || cc[b] || b } return a } function s(a) { var b, c, d = {}; for (c in a) a.hasOwnProperty(c) && (b = r(c), b && (d[b] = a[c])); return d } function t(b) { var c, d; if (0 === b.indexOf("week")) c = 7, d = "day"; else { if (0 !== b.indexOf("month")) return; c = 12, d = "month" } mb[b] = function (e, f) { var g, h, i = mb.fn._lang[b], j = []; if ("number" == typeof e && (f = e, e = a), h = function (a) { var b = mb().utc().set(d, a); return i.call(mb.fn._lang, b, e || "") }, null != f) return h(f); for (g = 0; c > g; g++) j.push(h(g)); return j } } function u(a) { var b = +a, c = 0; return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c } function v(a, b) { return new Date(Date.UTC(a, b + 1, 0)).getUTCDate() } function w(a, b, c) { return bb(mb([a, 11, 31 + b - c]), b, c).week } function x(a) { return y(a) ? 366 : 365 } function y(a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 } function z(a) { var b; a._a && -2 === a._pf.overflow && (b = a._a[tb] < 0 || a._a[tb] > 11 ? tb : a._a[ub] < 1 || a._a[ub] > v(a._a[sb], a._a[tb]) ? ub : a._a[vb] < 0 || a._a[vb] > 23 ? vb : a._a[wb] < 0 || a._a[wb] > 59 ? wb : a._a[xb] < 0 || a._a[xb] > 59 ? xb : a._a[yb] < 0 || a._a[yb] > 999 ? yb : -1, a._pf._overflowDayOfYear && (sb > b || b > ub) && (b = ub), a._pf.overflow = b) } function A(a) { return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid } function B(a) { return a ? a.toLowerCase().replace("_", "-") : a } function C(a, b) { return b._isUTC ? mb(a).zone(b._offset || 0) : mb(a).local() } function D(a, b) { return b.abbr = a, zb[a] || (zb[a] = new g), zb[a].set(b), zb[a] } function E(a) { delete zb[a] } function F(a) { var b, c, d, e, f = 0, g = function (a) { if (!zb[a] && Bb) try { require("./lang/" + a) } catch (b) { } return zb[a] }; if (!a) return mb.fn._lang; if (!o(a)) { if (c = g(a)) return c; a = [a] } for (; f < a.length;) { for (e = B(a[f]).split("-"), b = e.length, d = B(a[f + 1]), d = d ? d.split("-") : null; b > 0;) { if (c = g(e.slice(0, b).join("-"))) return c; if (d && d.length >= b && q(e, d, !0) >= b - 1) break; b-- } f++ } return mb.fn._lang } function G(a) { return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "") } function H(a) { var b, c, d = a.match(Fb); for (b = 0, c = d.length; c > b; b++) d[b] = hc[d[b]] ? hc[d[b]] : G(d[b]); return function (e) { var f = ""; for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b]; return f } } function I(a, b) { return a.isValid() ? (b = J(b, a.lang()), dc[b] || (dc[b] = H(b)), dc[b](a)) : a.lang().invalidDate() } function J(a, b) { function c(a) { return b.longDateFormat(a) || a } var d = 5; for (Gb.lastIndex = 0; d >= 0 && Gb.test(a) ;) a = a.replace(Gb, c), Gb.lastIndex = 0, d -= 1; return a } function K(a, b) { var c, d = b._strict; switch (a) { case "Q": return Rb; case "DDDD": return Tb; case "YYYY": case "GGGG": case "gggg": return d ? Ub : Jb; case "Y": case "G": case "g": return Wb; case "YYYYYY": case "YYYYY": case "GGGGG": case "ggggg": return d ? Vb : Kb; case "S": if (d) return Rb; case "SS": if (d) return Sb; case "SSS": if (d) return Tb; case "DDD": return Ib; case "MMM": case "MMMM": case "dd": case "ddd": case "dddd": return Mb; case "a": case "A": return F(b._l)._meridiemParse; case "X": return Pb; case "Z": case "ZZ": return Nb; case "T": return Ob; case "SSSS": return Lb; case "MM": case "DD": case "YY": case "GG": case "gg": case "HH": case "hh": case "mm": case "ss": case "ww": case "WW": return d ? Sb : Hb; case "M": case "D": case "d": case "H": case "h": case "m": case "s": case "w": case "W": case "e": case "E": return Hb; case "Do": return Qb; default: return c = new RegExp(T(S(a.replace("\\", "")), "i")) } } function L(a) { a = a || ""; var b = a.match(Nb) || [], c = b[b.length - 1] || [], d = (c + "").match(_b) || ["-", 0, 0], e = +(60 * d[1]) + u(d[2]); return "+" === d[0] ? -e : e } function M(a, b, c) { var d, e = c._a; switch (a) { case "Q": null != b && (e[tb] = 3 * (u(b) - 1)); break; case "M": case "MM": null != b && (e[tb] = u(b) - 1); break; case "MMM": case "MMMM": d = F(c._l).monthsParse(b), null != d ? e[tb] = d : c._pf.invalidMonth = b; break; case "D": case "DD": null != b && (e[ub] = u(b)); break; case "Do": null != b && (e[ub] = u(parseInt(b, 10))); break; case "DDD": case "DDDD": null != b && (c._dayOfYear = u(b)); break; case "YY": e[sb] = mb.parseTwoDigitYear(b); break; case "YYYY": case "YYYYY": case "YYYYYY": e[sb] = u(b); break; case "a": case "A": c._isPm = F(c._l).isPM(b); break; case "H": case "HH": case "h": case "hh": e[vb] = u(b); break; case "m": case "mm": e[wb] = u(b); break; case "s": case "ss": e[xb] = u(b); break; case "S": case "SS": case "SSS": case "SSSS": e[yb] = u(1e3 * ("0." + b)); break; case "X": c._d = new Date(1e3 * parseFloat(b)); break; case "Z": case "ZZ": c._useUTC = !0, c._tzm = L(b); break; case "dd": case "ddd": case "dddd": d = F(c._l).weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b; break; case "w": case "ww": case "W": case "WW": case "d": case "e": case "E": a = a.substr(0, 1); case "gggg": case "GGGG": case "GGGGG": a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = u(b)); break; case "gg": case "GG": c._w = c._w || {}, c._w[a] = mb.parseTwoDigitYear(b) } } function N(a) { var c, d, e, f, g, h, i, j; c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[sb], bb(mb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (j = F(a._l), g = j._week.dow, h = j._week.doy, d = b(c.gg, a._a[sb], bb(mb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = cb(d, e, f, h, g), a._a[sb] = i.year, a._dayOfYear = i.dayOfYear } function O(a) { var c, d, e, f, g = []; if (!a._d) { for (e = Q(a), a._w && null == a._a[ub] && null == a._a[tb] && N(a), a._dayOfYear && (f = b(a._a[sb], e[sb]), a._dayOfYear > x(f) && (a._pf._overflowDayOfYear = !0), d = Z(f, 0, a._dayOfYear), a._a[tb] = d.getUTCMonth(), a._a[ub] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c]; for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c]; a._d = (a._useUTC ? Z : Y).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm) } } function P(a) { var b; a._d || (b = s(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], O(a)) } function Q(a) { var b = new Date; return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()] } function R(a) { if (a._f === mb.ISO_8601) return void V(a); a._a = [], a._pf.empty = !0; var b, c, d, e, f, g = F(a._l), h = "" + a._i, i = h.length, j = 0; for (d = J(a._f, g).match(Fb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(K(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), hc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), M(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e); a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[vb] < 12 && (a._a[vb] += 12), a._isPm === !1 && 12 === a._a[vb] && (a._a[vb] = 0), O(a), z(a) } function S(a) { return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) { return b || c || d || e }) } function T(a) { return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } function U(a) { var b, d, e, f, g; if (0 === a._f.length) return a._pf.invalidFormat = !0, void (a._d = new Date(0 / 0)); for (f = 0; f < a._f.length; f++) g = 0, b = j({}, a), b._pf = c(), b._f = a._f[f], R(b), A(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, d = b)); j(a, d || b) } function V(a) { var b, c, d = a._i, e = Xb.exec(d); if (e) { for (a._pf.iso = !0, b = 0, c = Zb.length; c > b; b++) if (Zb[b][1].exec(d)) { a._f = Zb[b][0] + (e[6] || " "); break } for (b = 0, c = $b.length; c > b; b++) if ($b[b][1].exec(d)) { a._f += $b[b][0]; break } d.match(Nb) && (a._f += "Z"), R(a) } else a._isValid = !1 } function W(a) { V(a), a._isValid === !1 && (delete a._isValid, mb.createFromInputFallback(a)) } function X(b) { var c = b._i, d = Cb.exec(c); c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? W(b) : o(c) ? (b._a = c.slice(0), O(b)) : p(c) ? b._d = new Date(+c) : "object" == typeof c ? P(b) : "number" == typeof c ? b._d = new Date(c) : mb.createFromInputFallback(b) } function Y(a, b, c, d, e, f, g) { var h = new Date(a, b, c, d, e, f, g); return 1970 > a && h.setFullYear(a), h } function Z(a) { var b = new Date(Date.UTC.apply(null, arguments)); return 1970 > a && b.setUTCFullYear(a), b } function $(a, b) { if ("string" == typeof a) if (isNaN(a)) { if (a = b.weekdaysParse(a), "number" != typeof a) return null } else a = parseInt(a, 10); return a } function _(a, b, c, d, e) { return e.relativeTime(b || 1, !!c, a, d) } function ab(a, b, c) { var d = rb(Math.abs(a) / 1e3), e = rb(d / 60), f = rb(e / 60), g = rb(f / 24), h = rb(g / 365), i = d < ec.s && ["s", d] || 1 === e && ["m"] || e < ec.m && ["mm", e] || 1 === f && ["h"] || f < ec.h && ["hh", f] || 1 === g && ["d"] || g <= ec.dd && ["dd", g] || g <= ec.dm && ["M"] || g < ec.dy && ["MM", rb(g / 30)] || 1 === h && ["y"] || ["yy", h]; return i[2] = b, i[3] = a > 0, i[4] = c, _.apply({}, i) } function bb(a, b, c) { var d, e = c - b, f = c - a.day(); return f > e && (f -= 7), e - 7 > f && (f += 7), d = mb(a).add("d", f), { week: Math.ceil(d.dayOfYear() / 7), year: d.year() } } function cb(a, b, c, d, e) { var f, g, h = Z(a, 0, 1).getUTCDay(); return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, { year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : x(a - 1) + g } } function db(b) { var c = b._i, d = b._f; return null === c || d === a && "" === c ? mb.invalid({ nullInput: !0 }) : ("string" == typeof c && (b._i = c = F().preparse(c)), mb.isMoment(c) ? (b = k(c), b._d = new Date(+c._d)) : d ? o(d) ? U(b) : R(b) : X(b), new h(b)) } function eb(a, b) { var c, d; if (1 === b.length && o(b[0]) && (b = b[0]), !b.length) return mb(); for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]); return c } function fb(a, b) { var c; return "string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), v(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) } function gb(a, b) { return a._d["get" + (a._isUTC ? "UTC" : "") + b]() } function hb(a, b, c) { return "Month" === b ? fb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c) } function ib(a, b) { return function (c) { return null != c ? (hb(this, a, c), mb.updateOffset(this, b), this) : gb(this, a) } } function jb(a) { mb.duration.fn[a] = function () { return this._data[a] } } function kb(a, b) { mb.duration.fn["as" + a] = function () { return +this / b } } function lb(a) { "undefined" == typeof ender && (nb = qb.moment, qb.moment = a ? d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", mb) : mb) } for (var mb, nb, ob, pb = "2.7.0", qb = "undefined" != typeof global ? global : this, rb = Math.round, sb = 0, tb = 1, ub = 2, vb = 3, wb = 4, xb = 5, yb = 6, zb = {}, Ab = { _isAMomentObject: null, _i: null, _f: null, _l: null, _strict: null, _tzm: null, _isUTC: null, _offset: null, _pf: null, _lang: null }, Bb = "undefined" != typeof module && module.exports, Cb = /^\/?Date\((\-?\d+)/i, Db = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Eb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Fb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Gb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Hb = /\d\d?/, Ib = /\d{1,3}/, Jb = /\d{1,4}/, Kb = /[+\-]?\d{1,6}/, Lb = /\d+/, Mb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Nb = /Z|[\+\-]\d\d:?\d\d/gi, Ob = /T/i, Pb = /[\+\-]?\d+(\.\d{1,3})?/, Qb = /\d{1,2}/, Rb = /\d/, Sb = /\d\d/, Tb = /\d{3}/, Ub = /\d{4}/, Vb = /[+-]?\d{6}/, Wb = /[+-]?\d+/, Xb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yb = "YYYY-MM-DDTHH:mm:ssZ", Zb = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], $b = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], _b = /([\+\-]|\d\d)/gi, ac = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }), bc = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" }, cc = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" }, dc = {}, ec = { s: 45, m: 45, h: 22, dd: 25, dm: 45, dy: 345 }, fc = "DDD w W M D d".split(" "), gc = "M D H h m s w W".split(" "), hc = { M: function () { return this.month() + 1 }, MMM: function (a) { return this.lang().monthsShort(this, a) }, MMMM: function (a) { return this.lang().months(this, a) }, D: function () { return this.date() }, DDD: function () { return this.dayOfYear() }, d: function () { return this.day() }, dd: function (a) { return this.lang().weekdaysMin(this, a) }, ddd: function (a) { return this.lang().weekdaysShort(this, a) }, dddd: function (a) { return this.lang().weekdays(this, a) }, w: function () { return this.week() }, W: function () { return this.isoWeek() }, YY: function () { return m(this.year() % 100, 2) }, YYYY: function () { return m(this.year(), 4) }, YYYYY: function () { return m(this.year(), 5) }, YYYYYY: function () { var a = this.year(), b = a >= 0 ? "+" : "-"; return b + m(Math.abs(a), 6) }, gg: function () { return m(this.weekYear() % 100, 2) }, gggg: function () { return m(this.weekYear(), 4) }, ggggg: function () { return m(this.weekYear(), 5) }, GG: function () { return m(this.isoWeekYear() % 100, 2) }, GGGG: function () { return m(this.isoWeekYear(), 4) }, GGGGG: function () { return m(this.isoWeekYear(), 5) }, e: function () { return this.weekday() }, E: function () { return this.isoWeekday() }, a: function () { return this.lang().meridiem(this.hours(), this.minutes(), !0) }, A: function () { return this.lang().meridiem(this.hours(), this.minutes(), !1) }, H: function () { return this.hours() }, h: function () { return this.hours() % 12 || 12 }, m: function () { return this.minutes() }, s: function () { return this.seconds() }, S: function () { return u(this.milliseconds() / 100) }, SS: function () { return m(u(this.milliseconds() / 10), 2) }, SSS: function () { return m(this.milliseconds(), 3) }, SSSS: function () { return m(this.milliseconds(), 3) }, Z: function () { var a = -this.zone(), b = "+"; return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + ":" + m(u(a) % 60, 2) }, ZZ: function () { var a = -this.zone(), b = "+"; return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + m(u(a) % 60, 2) }, z: function () { return this.zoneAbbr() }, zz: function () { return this.zoneName() }, X: function () { return this.unix() }, Q: function () { return this.quarter() } }, ic = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; fc.length;) ob = fc.pop(), hc[ob + "o"] = f(hc[ob], ob); for (; gc.length;) ob = gc.pop(), hc[ob + ob] = e(hc[ob], 2); for (hc.DDDD = e(hc.DDD, 3), j(g.prototype, { set: function (a) { var b, c; for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (a) { return this._months[a.month()] }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (a) { return this._monthsShort[a.month()] }, monthsParse: function (a) { var b, c, d; for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++) if (this._monthsParse[b] || (c = mb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (a) { return this._weekdays[a.day()] }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (a) { return this._weekdaysShort[a.day()] }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (a) { return this._weekdaysMin[a.day()] }, weekdaysParse: function (a) { var b, c, d; for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = mb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b }, _longDateFormat: { LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT" }, longDateFormat: function (a) { var b = this._longDateFormat[a]; return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) { return a.slice(1) }), this._longDateFormat[a] = b), b }, isPM: function (a) { return "p" === (a + "").toLowerCase().charAt(0) }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function (a, b, c) { return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM" }, _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, calendar: function (a, b) { var c = this._calendar[a]; return "function" == typeof c ? c.apply(b) : c }, _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, relativeTime: function (a, b, c, d) { var e = this._relativeTime[c]; return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a) }, pastFuture: function (a, b) { var c = this._relativeTime[a > 0 ? "future" : "past"]; return "function" == typeof c ? c(b) : c.replace(/%s/i, b) }, ordinal: function (a) { return this._ordinal.replace("%d", a) }, _ordinal: "%d", preparse: function (a) { return a }, postformat: function (a) { return a }, week: function (a) { return bb(a, this._week.dow, this._week.doy).week }, _week: { dow: 0, doy: 6 }, _invalidDate: "Invalid date", invalidDate: function () { return this._invalidDate } }), mb = function (b, d, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = c(), db(g) }, mb.suppressDeprecationWarnings = !1, mb.createFromInputFallback = d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) { a._d = new Date(a._i) }), mb.min = function () { var a = [].slice.call(arguments, 0); return eb("isBefore", a) }, mb.max = function () { var a = [].slice.call(arguments, 0); return eb("isAfter", a) }, mb.utc = function (b, d, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = d, g._strict = f, g._pf = c(), db(g).utc() }, mb.unix = function (a) { return mb(1e3 * a) }, mb.duration = function (a, b) { var c, d, e, f = a, g = null; return mb.isDuration(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Db.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = { y: 0, d: u(g[ub]) * c, h: u(g[vb]) * c, m: u(g[wb]) * c, s: u(g[xb]) * c, ms: u(g[yb]) * c }) : (g = Eb.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function (a) { var b = a && parseFloat(a.replace(",", ".")); return (isNaN(b) ? 0 : b) * c }, f = { y: e(g[2]), M: e(g[3]), d: e(g[4]), h: e(g[5]), m: e(g[6]), s: e(g[7]), w: e(g[8]) }), d = new i(f), mb.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d }, mb.version = pb, mb.defaultFormat = Yb, mb.ISO_8601 = function () { }, mb.momentProperties = Ab, mb.updateOffset = function () { }, mb.relativeTimeThreshold = function (b, c) { return ec[b] === a ? !1 : (ec[b] = c, !0) }, mb.lang = function (a, b) { var c; return a ? (b ? D(B(a), b) : null === b ? (E(a), a = "en") : zb[a] || F(a), c = mb.duration.fn._lang = mb.fn._lang = F(a), c._abbr) : mb.fn._lang._abbr }, mb.langData = function (a) { return a && a._lang && a._lang._abbr && (a = a._lang._abbr), F(a) }, mb.isMoment = function (a) { return a instanceof h || null != a && a.hasOwnProperty("_isAMomentObject") }, mb.isDuration = function (a) { return a instanceof i }, ob = ic.length - 1; ob >= 0; --ob) t(ic[ob]); mb.normalizeUnits = function (a) { return r(a) }, mb.invalid = function (a) { var b = mb.utc(0 / 0); return null != a ? j(b._pf, a) : b._pf.userInvalidated = !0, b }, mb.parseZone = function () { return mb.apply(null, arguments).parseZone() }, mb.parseTwoDigitYear = function (a) { return u(a) + (u(a) > 68 ? 1900 : 2e3) }, j(mb.fn = h.prototype, { clone: function () { return mb(this) }, valueOf: function () { return +this._d + 6e4 * (this._offset || 0) }, unix: function () { return Math.floor(+this / 1e3) }, toString: function () { return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, toDate: function () { return this._offset ? new Date(+this) : this._d }, toISOString: function () { var a = mb(this).utc(); return 0 < a.year() && a.year() <= 9999 ? I(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }, toArray: function () { var a = this; return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()] }, isValid: function () { return A(this) }, isDSTShifted: function () { return this._a ? this.isValid() && q(this._a, (this._isUTC ? mb.utc(this._a) : mb(this._a)).toArray()) > 0 : !1 }, parsingFlags: function () { return j({}, this._pf) }, invalidAt: function () { return this._pf.overflow }, utc: function () { return this.zone(0) }, local: function () { return this.zone(0), this._isUTC = !1, this }, format: function (a) { var b = I(this, a || mb.defaultFormat); return this.lang().postformat(b) }, add: function (a, b) { var c; return c = "string" == typeof a && "string" == typeof b ? mb.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? mb.duration(+b, a) : mb.duration(a, b), n(this, c, 1), this }, subtract: function (a, b) { var c; return c = "string" == typeof a && "string" == typeof b ? mb.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? mb.duration(+b, a) : mb.duration(a, b), n(this, c, -1), this }, diff: function (a, b, c) { var d, e, f = C(a, this), g = 6e4 * (this.zone() - f.zone()); return b = r(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - mb(this).startOf("month") - (f - mb(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - mb(this).startOf("month").zone() - (f.zone() - mb(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : l(e) }, from: function (a, b) { return mb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b) }, fromNow: function (a) { return this.from(mb(), a) }, calendar: function (a) { var b = a || mb(), c = C(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse"; return this.format(this.lang().calendar(e, this)) }, isLeapYear: function () { return y(this.year()) }, isDST: function () { return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone() }, day: function (a) { var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != a ? (a = $(a, this.lang()), this.add({ d: a - b })) : b }, month: ib("Month", !0), startOf: function (a) { switch (a = r(a)) { case "year": this.month(0); case "quarter": case "month": this.date(1); case "week": case "isoWeek": case "day": this.hours(0); case "hour": this.minutes(0); case "minute": this.seconds(0); case "second": this.milliseconds(0) } return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this }, endOf: function (a) { return a = r(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1) }, isAfter: function (a, b) { return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +mb(a).startOf(b) }, isBefore: function (a, b) { return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +mb(a).startOf(b) }, isSame: function (a, b) { return b = b || "ms", +this.clone().startOf(b) === +C(a, this).startOf(b) }, min: d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) { return a = mb.apply(null, arguments), this > a ? this : a }), max: d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) { return a = mb.apply(null, arguments), a > this ? this : a }), zone: function (a, b) { var c = this._offset || 0; return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = L(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? n(this, mb.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, mb.updateOffset(this, !0), this._changeInProgress = null)), this) }, zoneAbbr: function () { return this._isUTC ? "UTC" : "" }, zoneName: function () { return this._isUTC ? "Coordinated Universal Time" : "" }, parseZone: function () { return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this }, hasAlignedHourOffset: function (a) { return a = a ? mb(a).zone() : 0, (this.zone() - a) % 60 === 0 }, daysInMonth: function () { return v(this.year(), this.month()) }, dayOfYear: function (a) { var b = rb((mb(this).startOf("day") - mb(this).startOf("year")) / 864e5) + 1; return null == a ? b : this.add("d", a - b) }, quarter: function (a) { return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3) }, weekYear: function (a) { var b = bb(this, this.lang()._week.dow, this.lang()._week.doy).year; return null == a ? b : this.add("y", a - b) }, isoWeekYear: function (a) { var b = bb(this, 1, 4).year; return null == a ? b : this.add("y", a - b) }, week: function (a) { var b = this.lang().week(this); return null == a ? b : this.add("d", 7 * (a - b)) }, isoWeek: function (a) { var b = bb(this, 1, 4).week; return null == a ? b : this.add("d", 7 * (a - b)) }, weekday: function (a) { var b = (this.day() + 7 - this.lang()._week.dow) % 7; return null == a ? b : this.add("d", a - b) }, isoWeekday: function (a) { return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) }, isoWeeksInYear: function () { return w(this.year(), 1, 4) }, weeksInYear: function () { var a = this._lang._week; return w(this.year(), a.dow, a.doy) }, get: function (a) { return a = r(a), this[a]() }, set: function (a, b) { return a = r(a), "function" == typeof this[a] && this[a](b), this }, lang: function (b) { return b === a ? this._lang : (this._lang = F(b), this) } }), mb.fn.millisecond = mb.fn.milliseconds = ib("Milliseconds", !1), mb.fn.second = mb.fn.seconds = ib("Seconds", !1), mb.fn.minute = mb.fn.minutes = ib("Minutes", !1), mb.fn.hour = mb.fn.hours = ib("Hours", !0), mb.fn.date = ib("Date", !0), mb.fn.dates = d("dates accessor is deprecated. Use date instead.", ib("Date", !0)), mb.fn.year = ib("FullYear", !0), mb.fn.years = d("years accessor is deprecated. Use year instead.", ib("FullYear", !0)), mb.fn.days = mb.fn.day, mb.fn.months = mb.fn.month, mb.fn.weeks = mb.fn.week, mb.fn.isoWeeks = mb.fn.isoWeek, mb.fn.quarters = mb.fn.quarter, mb.fn.toJSON = mb.fn.toISOString, j(mb.duration.fn = i.prototype, { _bubble: function () { var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data; h.milliseconds = e % 1e3, a = l(e / 1e3), h.seconds = a % 60, b = l(a / 60), h.minutes = b % 60, c = l(b / 60), h.hours = c % 24, f += l(c / 24), h.days = f % 30, g += l(f / 30), h.months = g % 12, d = l(g / 12), h.years = d }, weeks: function () { return l(this.days() / 7) }, valueOf: function () { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) }, humanize: function (a) { var b = +this, c = ab(b, !a, this.lang()); return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c) }, add: function (a, b) { var c = mb.duration(a, b); return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this }, subtract: function (a, b) { var c = mb.duration(a, b); return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this }, get: function (a) { return a = r(a), this[a.toLowerCase() + "s"]() }, as: function (a) { return a = r(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]() }, lang: mb.fn.lang, toIsoString: function () { var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3); return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D" } }); for (ob in ac) ac.hasOwnProperty(ob) && (kb(ob, ac[ob]), jb(ob.toLowerCase())); kb("Weeks", 6048e5), mb.duration.fn.asMonths = function () { return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years() }, mb.lang("en", { ordinal: function (a) { var b = a % 10, c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c } }), Bb ? module.exports = mb : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) { return c.config && c.config() && c.config().noGlobal === !0 && (qb.moment = nb), mb }), lb(!0)) : lb() }).call(this);

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () { function e() { } function t(e, t) { for (var n = e.length; n--;) if (e[n].listener === t) return n; return -1 } function n(e) { return function () { return this[e].apply(this, arguments) } } var i = e.prototype, r = this, o = r.EventEmitter; i.getListeners = function (e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function (e) { var t, n = []; for (t = 0; e.length > t; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function (e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function (e, n) { var i, r = this.getListenersAsObject(e), o = "object" == typeof n; for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 }); return this }, i.on = n("addListener"), i.addOnceListener = function (e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function (e) { return this.getListeners(e), this }, i.defineEvents = function (e) { for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function (e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function (e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function (e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function (e, t, n) { var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners; if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r)); return this }, i.removeEvent = function (e) { var t, n = typeof e, i = this._getEvents(); if ("string" === n) delete i[e]; else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events; return this }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) { var n, i, r, o, s = this.getListenersAsObject(e); for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener); return this }, i.trigger = n("emitEvent"), i.emit = function (e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function (e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function () { return this._events || (this._events = {}) }, e.noConflict = function () { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e }).call(this), function (e) { function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n } var n = document.documentElement, i = function () { }; n.addEventListener ? i = function (e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function (e, n, i) { e[n + i] = i.handleEvent ? function () { var n = t(e); i.handleEvent.call(i, n) } : function () { var n = t(e); i.call(e, n) }, e.attachEvent("on" + n, e[n + i]) }); var r = function () { }; n.removeEventListener ? r = function (e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function (e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } }); var o = { bind: i, unbind: r }; "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o }(this), function (e, t) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function (e, t, n) { function i(e, t) { for (var n in t) e[n] = t[n]; return e } function r(e) { return "[object Array]" === d.call(e) } function o(e) { var t = []; if (r(e)) t = e; else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]); else t.push(e); return t } function s(e, t, n) { if (!(this instanceof s)) return new s(e, t); "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred); var r = this; setTimeout(function () { r.check() }) } function f(e) { this.img = e } function c(e) { this.src = e, v[e] = this } var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString; s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () { this.images = []; for (var e = 0, t = this.elements.length; t > e; e++) { var n = this.elements[e]; "IMG" === n.nodeName && this.addImage(n); var i = n.nodeType; if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) { var f = r[o]; this.addImage(f) } } }, s.prototype.addImage = function (e) { var t = new f(e); this.images.push(t) }, s.prototype.check = function () { function e(e, r) { return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 } var t = this, n = 0, i = this.images.length; if (this.hasAnyBroken = !1, !i) return this.complete(), void 0; for (var r = 0; i > r; r++) { var o = this.images[r]; o.on("confirm", e), o.check() } }, s.prototype.progress = function (e) { this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded; var t = this; setTimeout(function () { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) }) }, s.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; this.isComplete = !0; var t = this; setTimeout(function () { if (t.emit(e, t), t.emit("always", t), t.jqDeferred) { var n = t.hasAnyBroken ? "reject" : "resolve"; t.jqDeferred[n](t) } }) }, a && (a.fn.imagesLoaded = function (e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(a(this)) }), f.prototype = new t, f.prototype.check = function () { var e = v[this.img.src] || new c(this.img.src); if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0; if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0; var t = this; e.on("confirm", function (e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check() }, f.prototype.confirm = function (e, t) { this.isLoaded = e, this.emit("confirm", this, t) }; var v = {}; return c.prototype = new t, c.prototype.check = function () { if (!this.isChecked) { var e = new Image; n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0 } }, c.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, c.prototype.onload = function (e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, c.prototype.onerror = function (e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, c.prototype.confirm = function (e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, c.prototype.unbindProxyEvents = function (e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s });

//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () { var n = this, t = n._, r = Array.prototype, e = Object.prototype, u = Function.prototype, i = r.push, a = r.slice, o = r.concat, l = e.toString, c = e.hasOwnProperty, f = Array.isArray, s = Object.keys, p = u.bind, h = function (n) { return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : n._ = h, h.VERSION = "1.7.0"; var g = function (n, t, r) { if (t === void 0) return n; switch (null == r ? 3 : r) { case 1: return function (r) { return n.call(t, r) }; case 2: return function (r, e) { return n.call(t, r, e) }; case 3: return function (r, e, u) { return n.call(t, r, e, u) }; case 4: return function (r, e, u, i) { return n.call(t, r, e, u, i) } } return function () { return n.apply(t, arguments) } }; h.iteratee = function (n, t, r) { return null == n ? h.identity : h.isFunction(n) ? g(n, t, r) : h.isObject(n) ? h.matches(n) : h.property(n) }, h.each = h.forEach = function (n, t, r) { if (null == n) return n; t = g(t, r); var e, u = n.length; if (u === +u) for (e = 0; u > e; e++) t(n[e], e, n); else { var i = h.keys(n); for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n) } return n }, h.map = h.collect = function (n, t, r) { if (null == n) return []; t = h.iteratee(t, r); for (var e, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++) e = u ? u[o] : o, a[o] = t(n[e], e, n); return a }; var v = "Reduce of empty array with no initial value"; h.reduce = h.foldl = h.inject = function (n, t, r, e) { null == n && (n = []), t = g(t, e, 4); var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length, o = 0; if (arguments.length < 3) { if (!a) throw new TypeError(v); r = n[i ? i[o++] : o++] } for (; a > o; o++) u = i ? i[o] : o, r = t(r, n[u], u, n); return r }, h.reduceRight = h.foldr = function (n, t, r, e) { null == n && (n = []), t = g(t, e, 4); var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length; if (arguments.length < 3) { if (!a) throw new TypeError(v); r = n[i ? i[--a] : --a] } for (; a--;) u = i ? i[a] : a, r = t(r, n[u], u, n); return r }, h.find = h.detect = function (n, t, r) { var e; return t = h.iteratee(t, r), h.some(n, function (n, r, u) { return t(n, r, u) ? (e = n, !0) : void 0 }), e }, h.filter = h.select = function (n, t, r) { var e = []; return null == n ? e : (t = h.iteratee(t, r), h.each(n, function (n, r, u) { t(n, r, u) && e.push(n) }), e) }, h.reject = function (n, t, r) { return h.filter(n, h.negate(h.iteratee(t)), r) }, h.every = h.all = function (n, t, r) { if (null == n) return !0; t = h.iteratee(t, r); var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length; for (e = 0; a > e; e++) if (u = i ? i[e] : e, !t(n[u], u, n)) return !1; return !0 }, h.some = h.any = function (n, t, r) { if (null == n) return !1; t = h.iteratee(t, r); var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length; for (e = 0; a > e; e++) if (u = i ? i[e] : e, t(n[u], u, n)) return !0; return !1 }, h.contains = h.include = function (n, t) { return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)), h.indexOf(n, t) >= 0) }, h.invoke = function (n, t) { var r = a.call(arguments, 2), e = h.isFunction(t); return h.map(n, function (n) { return (e ? t : n[t]).apply(n, r) }) }, h.pluck = function (n, t) { return h.map(n, h.property(t)) }, h.where = function (n, t) { return h.filter(n, h.matches(t)) }, h.findWhere = function (n, t) { return h.find(n, h.matches(t)) }, h.max = function (n, t, r) { var e, u, i = -1 / 0, a = -1 / 0; if (null == t && null != n) { n = n.length === +n.length ? n : h.values(n); for (var o = 0, l = n.length; l > o; o++) e = n[o], e > i && (i = e) } else t = h.iteratee(t, r), h.each(n, function (n, r, e) { u = t(n, r, e), (u > a || u === -1 / 0 && i === -1 / 0) && (i = n, a = u) }); return i }, h.min = function (n, t, r) { var e, u, i = 1 / 0, a = 1 / 0; if (null == t && null != n) { n = n.length === +n.length ? n : h.values(n); for (var o = 0, l = n.length; l > o; o++) e = n[o], i > e && (i = e) } else t = h.iteratee(t, r), h.each(n, function (n, r, e) { u = t(n, r, e), (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n, a = u) }); return i }, h.shuffle = function (n) { for (var t, r = n && n.length === +n.length ? n : h.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = h.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i]; return u }, h.sample = function (n, t, r) { return null == t || r ? (n.length !== +n.length && (n = h.values(n)), n[h.random(n.length - 1)]) : h.shuffle(n).slice(0, Math.max(0, t)) }, h.sortBy = function (n, t, r) { return t = h.iteratee(t, r), h.pluck(h.map(n, function (n, r, e) { return { value: n, index: r, criteria: t(n, r, e) } }).sort(function (n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index - t.index }), "value") }; var m = function (n) { return function (t, r, e) { var u = {}; return r = h.iteratee(r, e), h.each(t, function (e, i) { var a = r(e, i, t); n(u, e, a) }), u } }; h.groupBy = m(function (n, t, r) { h.has(n, r) ? n[r].push(t) : n[r] = [t] }), h.indexBy = m(function (n, t, r) { n[r] = t }), h.countBy = m(function (n, t, r) { h.has(n, r) ? n[r]++ : n[r] = 1 }), h.sortedIndex = function (n, t, r, e) { r = h.iteratee(r, e, 1); for (var u = r(t), i = 0, a = n.length; a > i;) { var o = i + a >>> 1; r(n[o]) < u ? i = o + 1 : a = o } return i }, h.toArray = function (n) { return n ? h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n) : [] }, h.size = function (n) { return null == n ? 0 : n.length === +n.length ? n.length : h.keys(n).length }, h.partition = function (n, t, r) { t = h.iteratee(t, r); var e = [], u = []; return h.each(n, function (n, r, i) { (t(n, r, i) ? e : u).push(n) }), [e, u] }, h.first = h.head = h.take = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : a.call(n, 0, t) }, h.initial = function (n, t, r) { return a.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t))) }, h.last = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0)) }, h.rest = h.tail = h.drop = function (n, t, r) { return a.call(n, null == t || r ? 1 : t) }, h.compact = function (n) { return h.filter(n, h.identity) }; var y = function (n, t, r, e) { if (t && h.every(n, h.isArray)) return o.apply(e, n); for (var u = 0, a = n.length; a > u; u++) { var l = n[u]; h.isArray(l) || h.isArguments(l) ? t ? i.apply(e, l) : y(l, t, r, e) : r || e.push(l) } return e }; h.flatten = function (n, t) { return y(n, t, !1, []) }, h.without = function (n) { return h.difference(n, a.call(arguments, 1)) }, h.uniq = h.unique = function (n, t, r, e) { if (null == n) return []; h.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = h.iteratee(r, e)); for (var u = [], i = [], a = 0, o = n.length; o > a; a++) { var l = n[a]; if (t) a && i === l || u.push(l), i = l; else if (r) { var c = r(l, a, n); h.indexOf(i, c) < 0 && (i.push(c), u.push(l)) } else h.indexOf(u, l) < 0 && u.push(l) } return u }, h.union = function () { return h.uniq(y(arguments, !0, !0, [])) }, h.intersection = function (n) { if (null == n) return []; for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) { var i = n[e]; if (!h.contains(t, i)) { for (var a = 1; r > a && h.contains(arguments[a], i) ; a++); a === r && t.push(i) } } return t }, h.difference = function (n) { var t = y(a.call(arguments, 1), !0, !0, []); return h.filter(n, function (n) { return !h.contains(t, n) }) }, h.zip = function (n) { if (null == n) return []; for (var t = h.max(arguments, "length").length, r = Array(t), e = 0; t > e; e++) r[e] = h.pluck(arguments, e); return r }, h.object = function (n, t) { if (null == n) return {}; for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, h.indexOf = function (n, t, r) { if (null == n) return -1; var e = 0, u = n.length; if (r) { if ("number" != typeof r) return e = h.sortedIndex(n, t), n[e] === t ? e : -1; e = 0 > r ? Math.max(0, u + r) : r } for (; u > e; e++) if (n[e] === t) return e; return -1 }, h.lastIndexOf = function (n, t, r) { if (null == n) return -1; var e = n.length; for ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)) ; --e >= 0;) if (n[e] === t) return e; return -1 }, h.range = function (n, t, r) { arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n; return u }; var d = function () { }; h.bind = function (n, t) { var r, e; if (p && n.bind === p) return p.apply(n, a.call(arguments, 1)); if (!h.isFunction(n)) throw new TypeError("Bind must be called on a function"); return r = a.call(arguments, 2), e = function () { if (!(this instanceof e)) return n.apply(t, r.concat(a.call(arguments))); d.prototype = n.prototype; var u = new d; d.prototype = null; var i = n.apply(u, r.concat(a.call(arguments))); return h.isObject(i) ? i : u } }, h.partial = function (n) { var t = a.call(arguments, 1); return function () { for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === h && (e[u] = arguments[r++]); for (; r < arguments.length;) e.push(arguments[r++]); return n.apply(this, e) } }, h.bindAll = function (n) { var t, r, e = arguments.length; if (1 >= e) throw new Error("bindAll must be passed function names"); for (t = 1; e > t; t++) r = arguments[t], n[r] = h.bind(n[r], n); return n }, h.memoize = function (n, t) { var r = function (e) { var u = r.cache, i = t ? t.apply(this, arguments) : e; return h.has(u, i) || (u[i] = n.apply(this, arguments)), u[i] }; return r.cache = {}, r }, h.delay = function (n, t) { var r = a.call(arguments, 2); return setTimeout(function () { return n.apply(null, r) }, t) }, h.defer = function (n) { return h.delay.apply(h, [n, 1].concat(a.call(arguments, 1))) }, h.throttle = function (n, t, r) { var e, u, i, a = null, o = 0; r || (r = {}); var l = function () { o = r.leading === !1 ? 0 : h.now(), a = null, i = n.apply(e, u), a || (e = u = null) }; return function () { var c = h.now(); o || r.leading !== !1 || (o = c); var f = t - (c - o); return e = this, u = arguments, 0 >= f || f > t ? (clearTimeout(a), a = null, o = c, i = n.apply(e, u), a || (e = u = null)) : a || r.trailing === !1 || (a = setTimeout(l, f)), i } }, h.debounce = function (n, t, r) { var e, u, i, a, o, l = function () { var c = h.now() - a; t > c && c > 0 ? e = setTimeout(l, t - c) : (e = null, r || (o = n.apply(i, u), e || (i = u = null))) }; return function () { i = this, u = arguments, a = h.now(); var c = r && !e; return e || (e = setTimeout(l, t)), c && (o = n.apply(i, u), i = u = null), o } }, h.wrap = function (n, t) { return h.partial(t, n) }, h.negate = function (n) { return function () { return !n.apply(this, arguments) } }, h.compose = function () { var n = arguments, t = n.length - 1; return function () { for (var r = t, e = n[t].apply(this, arguments) ; r--;) e = n[r].call(this, e); return e } }, h.after = function (n, t) { return function () { return --n < 1 ? t.apply(this, arguments) : void 0 } }, h.before = function (n, t) { var r; return function () { return --n > 0 ? r = t.apply(this, arguments) : t = null, r } }, h.once = h.partial(h.before, 2), h.keys = function (n) { if (!h.isObject(n)) return []; if (s) return s(n); var t = []; for (var r in n) h.has(n, r) && t.push(r); return t }, h.values = function (n) { for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]]; return e }, h.pairs = function (n) { for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]]; return e }, h.invert = function (n) { for (var t = {}, r = h.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e]; return t }, h.functions = h.methods = function (n) { var t = []; for (var r in n) h.isFunction(n[r]) && t.push(r); return t.sort() }, h.extend = function (n) { if (!h.isObject(n)) return n; for (var t, r, e = 1, u = arguments.length; u > e; e++) { t = arguments[e]; for (r in t) c.call(t, r) && (n[r] = t[r]) } return n }, h.pick = function (n, t, r) { var e, u = {}; if (null == n) return u; if (h.isFunction(t)) { t = g(t, r); for (e in n) { var i = n[e]; t(i, e, n) && (u[e] = i) } } else { var l = o.apply([], a.call(arguments, 1)); n = new Object(n); for (var c = 0, f = l.length; f > c; c++) e = l[c], e in n && (u[e] = n[e]) } return u }, h.omit = function (n, t, r) { if (h.isFunction(t)) t = h.negate(t); else { var e = h.map(o.apply([], a.call(arguments, 1)), String); t = function (n, t) { return !h.contains(e, t) } } return h.pick(n, t, r) }, h.defaults = function (n) { if (!h.isObject(n)) return n; for (var t = 1, r = arguments.length; r > t; t++) { var e = arguments[t]; for (var u in e) n[u] === void 0 && (n[u] = e[u]) } return n }, h.clone = function (n) { return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n }, h.tap = function (n, t) { return t(n), n }; var b = function (n, t, r, e) { if (n === t) return 0 !== n || 1 / n === 1 / t; if (null == n || null == t) return n === t; n instanceof h && (n = n._wrapped), t instanceof h && (t = t._wrapped); var u = l.call(n); if (u !== l.call(t)) return !1; switch (u) { case "[object RegExp]": case "[object String]": return "" + n == "" + t; case "[object Number]": return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t; case "[object Date]": case "[object Boolean]": return +n === +t } if ("object" != typeof n || "object" != typeof t) return !1; for (var i = r.length; i--;) if (r[i] === n) return e[i] === t; var a = n.constructor, o = t.constructor; if (a !== o && "constructor" in n && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o)) return !1; r.push(n), e.push(t); var c, f; if ("[object Array]" === u) { if (c = n.length, f = c === t.length) for (; c-- && (f = b(n[c], t[c], r, e)) ;); } else { var s, p = h.keys(n); if (c = p.length, f = h.keys(t).length === c) for (; c-- && (s = p[c], f = h.has(t, s) && b(n[s], t[s], r, e)) ;); } return r.pop(), e.pop(), f }; h.isEqual = function (n, t) { return b(n, t, [], []) }, h.isEmpty = function (n) { if (null == n) return !0; if (h.isArray(n) || h.isString(n) || h.isArguments(n)) return 0 === n.length; for (var t in n) if (h.has(n, t)) return !1; return !0 }, h.isElement = function (n) { return !(!n || 1 !== n.nodeType) }, h.isArray = f || function (n) { return "[object Array]" === l.call(n) }, h.isObject = function (n) { var t = typeof n; return "function" === t || "object" === t && !!n }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) { h["is" + n] = function (t) { return l.call(t) === "[object " + n + "]" } }), h.isArguments(arguments) || (h.isArguments = function (n) { return h.has(n, "callee") }), "function" != typeof /./ && (h.isFunction = function (n) { return "function" == typeof n || !1 }), h.isFinite = function (n) { return isFinite(n) && !isNaN(parseFloat(n)) }, h.isNaN = function (n) { return h.isNumber(n) && n !== +n }, h.isBoolean = function (n) { return n === !0 || n === !1 || "[object Boolean]" === l.call(n) }, h.isNull = function (n) { return null === n }, h.isUndefined = function (n) { return n === void 0 }, h.has = function (n, t) { return null != n && c.call(n, t) }, h.noConflict = function () { return n._ = t, this }, h.identity = function (n) { return n }, h.constant = function (n) { return function () { return n } }, h.noop = function () { }, h.property = function (n) { return function (t) { return t[n] } }, h.matches = function (n) { var t = h.pairs(n), r = t.length; return function (n) { if (null == n) return !r; n = new Object(n); for (var e = 0; r > e; e++) { var u = t[e], i = u[0]; if (u[1] !== n[i] || !(i in n)) return !1 } return !0 } }, h.times = function (n, t, r) { var e = Array(Math.max(0, n)); t = g(t, r, 1); for (var u = 0; n > u; u++) e[u] = t(u); return e }, h.random = function (n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, h.now = Date.now || function () { return (new Date).getTime() }; var _ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, w = h.invert(_), j = function (n) { var t = function (t) { return n[t] }, r = "(?:" + h.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n } }; h.escape = j(_), h.unescape = j(w), h.result = function (n, t) { if (null == n) return void 0; var r = n[t]; return h.isFunction(r) ? n[t]() : r }; var x = 0; h.uniqueId = function (n) { var t = ++x + ""; return n ? n + t : t }, h.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var A = /(.)^/, k = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, O = /\\|'|\r|\n|\u2028|\u2029/g, F = function (n) { return "\\" + k[n] }; h.template = function (n, t, r) { !t && r && (t = r), t = h.defaults({}, t, h.templateSettings); var e = RegExp([(t.escape || A).source, (t.interpolate || A).source, (t.evaluate || A).source].join("|") + "|$", "g"), u = 0, i = "__p+='"; n.replace(e, function (t, r, e, a, o) { return i += n.slice(u, o).replace(O, F), u = o + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"), t }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n"; try { var a = new Function(t.variable || "obj", "_", i) } catch (o) { throw o.source = i, o } var l = function (n) { return a.call(this, n, h) }, c = t.variable || "obj"; return l.source = "function(" + c + "){\n" + i + "}", l }, h.chain = function (n) { var t = h(n); return t._chain = !0, t }; var E = function (n) { return this._chain ? h(n).chain() : n }; h.mixin = function (n) { h.each(h.functions(n), function (t) { var r = h[t] = n[t]; h.prototype[t] = function () { var n = [this._wrapped]; return i.apply(n, arguments), E.call(this, r.apply(h, n)) } }) }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) { var t = r[n]; h.prototype[n] = function () { var r = this._wrapped; return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], E.call(this, r) } }), h.each(["concat", "join", "slice"], function (n) { var t = r[n]; h.prototype[n] = function () { return E.call(this, t.apply(this._wrapped, arguments)) } }), h.prototype.value = function () { return this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function () { return h }) }).call(this);
//# sourceMappingURL=underscore-min.map

/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars = function () {
    var a = function () { "use strict"; function a(a) { this.string = a } var b; return a.prototype.toString = function () { return "" + this.string }, b = a }(), b = function (a) { "use strict"; function b(a) { return h[a] || "&amp;" } function c(a, b) { for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]) } function d(a) { return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a, j.test(a) ? a.replace(i, b) : a) : "" } function e(a) { return a || 0 === a ? m(a) && 0 === a.length ? !0 : !1 : !0 } var f = {}, g = a, h = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, i = /[&<>"'`]/g, j = /[&<>"'`]/; f.extend = c; var k = Object.prototype.toString; f.toString = k; var l = function (a) { return "function" == typeof a }; l(/x/) && (l = function (a) { return "function" == typeof a && "[object Function]" === k.call(a) }); var l; f.isFunction = l; var m = Array.isArray || function (a) { return a && "object" == typeof a ? "[object Array]" === k.call(a) : !1 }; return f.isArray = m, f.escapeExpression = d, f.isEmpty = e, f }(a), c = function () { "use strict"; function a(a, b) { var d; b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn); for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++) this[c[f]] = e[c[f]]; d && (this.lineNumber = d, this.column = b.firstColumn) } var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"]; return a.prototype = new Error, b = a }(), d = function (a, b) { "use strict"; function c(a, b) { this.helpers = a || {}, this.partials = b || {}, d(this) } function d(a) { a.registerHelper("helperMissing", function (a) { if (2 === arguments.length) return void 0; throw new h("Missing helper: '" + a + "'") }), a.registerHelper("blockHelperMissing", function (b, c) { var d = c.inverse || function () { }, e = c.fn; return m(b) && (b = b.call(this)), b === !0 ? e(this) : b === !1 || null == b ? d(this) : l(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b) }), a.registerHelper("each", function (a, b) { var c, d = b.fn, e = b.inverse, f = 0, g = ""; if (m(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a) if (l(a)) for (var h = a.length; h > f; f++) c && (c.index = f, c.first = 0 === f, c.last = f === a.length - 1), g += d(a[f], { data: c }); else for (var i in a) a.hasOwnProperty(i) && (c && (c.key = i, c.index = f, c.first = 0 === f), g += d(a[i], { data: c }), f++); return 0 === f && (g = e(this)), g }), a.registerHelper("if", function (a, b) { return m(a) && (a = a.call(this)), !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this) }), a.registerHelper("unless", function (b, c) { return a.helpers["if"].call(this, b, { fn: c.inverse, inverse: c.fn, hash: c.hash }) }), a.registerHelper("with", function (a, b) { return m(a) && (a = a.call(this)), g.isEmpty(a) ? void 0 : b.fn(a) }), a.registerHelper("log", function (b, c) { var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1; a.log(d, b) }) } function e(a, b) { p.log(a, b) } var f = {}, g = a, h = b, i = "1.3.0"; f.VERSION = i; var j = 4; f.COMPILER_REVISION = j; var k = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: ">= 1.0.0" }; f.REVISION_CHANGES = k; var l = g.isArray, m = g.isFunction, n = g.toString, o = "[object Object]"; f.HandlebarsEnvironment = c, c.prototype = { constructor: c, logger: p, log: e, registerHelper: function (a, b, c) { if (n.call(a) === o) { if (c || b) throw new h("Arg not supported with multiple helpers"); g.extend(this.helpers, a) } else c && (b.not = c), this.helpers[a] = b }, registerPartial: function (a, b) { n.call(a) === o ? g.extend(this.partials, a) : this.partials[a] = b } }; var p = { methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" }, DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3, log: function (a, b) { if (p.level <= a) { var c = p.methodMap[a]; "undefined" != typeof console && console[c] && console[c].call(console, b) } } }; f.logger = p, f.log = e; var q = function (a) { var b = {}; return g.extend(b, a), b }; return f.createFrame = q, f }(b, c), e = function (a, b, c) { "use strict"; function d(a) { var b = a && a[0] || 1, c = m; if (b !== c) { if (c > b) { var d = n[c], e = n[b]; throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").") } throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").") } } function e(a, b) { if (!b) throw new l("No environment passed to template"); var c = function (a, c, d, e, f, g) { var h = b.VM.invokePartial.apply(this, arguments); if (null != h) return h; if (b.compile) { var i = { helpers: e, partials: f, data: g }; return f[c] = b.compile(a, { data: void 0 !== g }, b), f[c](d, i) } throw new l("The partial " + c + " could not be compiled when running in runtime-only mode") }, d = { escapeExpression: k.escapeExpression, invokePartial: c, programs: [], program: function (a, b, c) { var d = this.programs[a]; return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)), d }, merge: function (a, b) { var c = a || b; return a && b && a !== b && (c = {}, k.extend(c, b), k.extend(c, a)), c }, programWithDepth: b.VM.programWithDepth, noop: b.VM.noop, compilerInfo: null }; return function (c, e) { e = e || {}; var f, g, h = e.partial ? e : b; e.partial || (f = e.helpers, g = e.partials); var i = a.call(d, h, c, f, g, e.data); return e.partial || b.VM.checkRevision(d.compilerInfo), i } } function f(a, b, c) { var d = Array.prototype.slice.call(arguments, 3), e = function (a, e) { return e = e || {}, b.apply(this, [a, e.data || c].concat(d)) }; return e.program = a, e.depth = d.length, e } function g(a, b, c) { var d = function (a, d) { return d = d || {}, b(a, d.data || c) }; return d.program = a, d.depth = 0, d } function h(a, b, c, d, e, f) { var g = { partial: !0, helpers: d, partials: e, data: f }; if (void 0 === a) throw new l("The partial " + b + " could not be found"); return a instanceof Function ? a(c, g) : void 0 } function i() { return "" } var j = {}, k = a, l = b, m = c.COMPILER_REVISION, n = c.REVISION_CHANGES; return j.checkRevision = d, j.template = e, j.programWithDepth = f, j.program = g, j.invokePartial = h, j.noop = i, j }(b, c, d), f = function (a, b, c, d, e) { "use strict"; var f, g = a, h = b, i = c, j = d, k = e, l = function () { var a = new g.HandlebarsEnvironment; return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.VM = k, a.template = function (b) { return k.template(b, a) }, a }, m = l(); return m.create = l, f = m }(d, a, c, b, e), g = function (a) { "use strict"; function b(a) { a = a || {}, this.firstLine = a.first_line, this.firstColumn = a.first_column, this.lastColumn = a.last_column, this.lastLine = a.last_line } var c, d = a, e = { ProgramNode: function (a, c, d, f) { var g, h; 3 === arguments.length ? (f = d, d = null) : 2 === arguments.length && (f = c, c = null), b.call(this, f), this.type = "program", this.statements = a, this.strip = {}, d ? (h = d[0], h ? (g = { first_line: h.firstLine, last_line: h.lastLine, last_column: h.lastColumn, first_column: h.firstColumn }, this.inverse = new e.ProgramNode(d, c, g)) : this.inverse = new e.ProgramNode(d, c), this.strip.right = c.left) : c && (this.strip.left = c.right) }, MustacheNode: function (a, c, d, f, g) { if (b.call(this, g), this.type = "mustache", this.strip = f, null != d && d.charAt) { var h = d.charAt(3) || d.charAt(2); this.escaped = "{" !== h && "&" !== h } else this.escaped = !!d; this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a, c), this.sexpr.isRoot = !0, this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper }, SexprNode: function (a, c, d) { b.call(this, d), this.type = "sexpr", this.hash = c; var e = this.id = a[0], f = this.params = a.slice(1), g = this.eligibleHelper = e.isSimple; this.isHelper = g && (f.length || c) }, PartialNode: function (a, c, d, e) { b.call(this, e), this.type = "partial", this.partialName = a, this.context = c, this.strip = d }, BlockNode: function (a, c, e, f, g) { if (b.call(this, g), a.sexpr.id.original !== f.path.original) throw new d(a.sexpr.id.original + " doesn't match " + f.path.original, this); this.type = "block", this.mustache = a, this.program = c, this.inverse = e, this.strip = { left: a.strip.left, right: f.strip.right }, (c || e).strip.left = a.strip.right, (e || c).strip.right = f.strip.left, e && !c && (this.isInverse = !0) }, ContentNode: function (a, c) { b.call(this, c), this.type = "content", this.string = a }, HashNode: function (a, c) { b.call(this, c), this.type = "hash", this.pairs = a }, IdNode: function (a, c) { b.call(this, c), this.type = "ID"; for (var e = "", f = [], g = 0, h = 0, i = a.length; i > h; h++) { var j = a[h].part; if (e += (a[h].separator || "") + j, ".." === j || "." === j || "this" === j) { if (f.length > 0) throw new d("Invalid path: " + e, this); ".." === j ? g++ : this.isScoped = !0 } else f.push(j) } this.original = e, this.parts = f, this.string = f.join("."), this.depth = g, this.isSimple = 1 === a.length && !this.isScoped && 0 === g, this.stringModeValue = this.string }, PartialNameNode: function (a, c) { b.call(this, c), this.type = "PARTIAL_NAME", this.name = a.original }, DataNode: function (a, c) { b.call(this, c), this.type = "DATA", this.id = a }, StringNode: function (a, c) { b.call(this, c), this.type = "STRING", this.original = this.string = this.stringModeValue = a }, IntegerNode: function (a, c) { b.call(this, c), this.type = "INTEGER", this.original = this.integer = a, this.stringModeValue = Number(a) }, BooleanNode: function (a, c) { b.call(this, c), this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a }, CommentNode: function (a, c) { b.call(this, c), this.type = "comment", this.comment = a } }; return c = e }(c), h = function () { "use strict"; var a, b = function () { function a(a, b) { return { left: "~" === a.charAt(2), right: "~" === b.charAt(0) || "~" === b.charAt(1) } } function b() { this.yy = {} } var c = { trace: function () { }, yy: {}, symbols_: { error: 2, root: 3, statements: 4, EOF: 5, program: 6, simpleInverse: 7, statement: 8, openInverse: 9, closeBlock: 10, openBlock: 11, mustache: 12, partial: 13, CONTENT: 14, COMMENT: 15, OPEN_BLOCK: 16, sexpr: 17, CLOSE: 18, OPEN_INVERSE: 19, OPEN_ENDBLOCK: 20, path: 21, OPEN: 22, OPEN_UNESCAPED: 23, CLOSE_UNESCAPED: 24, OPEN_PARTIAL: 25, partialName: 26, partial_option0: 27, sexpr_repetition0: 28, sexpr_option0: 29, dataName: 30, param: 31, STRING: 32, INTEGER: 33, BOOLEAN: 34, OPEN_SEXPR: 35, CLOSE_SEXPR: 36, hash: 37, hash_repetition_plus0: 38, hashSegment: 39, ID: 40, EQUALS: 41, DATA: 42, pathSegments: 43, SEP: 44, $accept: 0, $end: 1 }, terminals_: { 2: "error", 5: "EOF", 14: "CONTENT", 15: "COMMENT", 16: "OPEN_BLOCK", 18: "CLOSE", 19: "OPEN_INVERSE", 20: "OPEN_ENDBLOCK", 22: "OPEN", 23: "OPEN_UNESCAPED", 24: "CLOSE_UNESCAPED", 25: "OPEN_PARTIAL", 32: "STRING", 33: "INTEGER", 34: "BOOLEAN", 35: "OPEN_SEXPR", 36: "CLOSE_SEXPR", 40: "ID", 41: "EQUALS", 42: "DATA", 44: "SEP" }, productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]], performAction: function (b, c, d, e, f, g) { var h = g.length - 1; switch (f) { case 1: return new e.ProgramNode(g[h - 1], this._$); case 2: return new e.ProgramNode([], this._$); case 3: this.$ = new e.ProgramNode([], g[h - 1], g[h], this._$); break; case 4: this.$ = new e.ProgramNode(g[h - 2], g[h - 1], g[h], this._$); break; case 5: this.$ = new e.ProgramNode(g[h - 1], g[h], [], this._$); break; case 6: this.$ = new e.ProgramNode(g[h], this._$); break; case 7: this.$ = new e.ProgramNode([], this._$); break; case 8: this.$ = new e.ProgramNode([], this._$); break; case 9: this.$ = [g[h]]; break; case 10: g[h - 1].push(g[h]), this.$ = g[h - 1]; break; case 11: this.$ = new e.BlockNode(g[h - 2], g[h - 1].inverse, g[h - 1], g[h], this._$); break; case 12: this.$ = new e.BlockNode(g[h - 2], g[h - 1], g[h - 1].inverse, g[h], this._$); break; case 13: this.$ = g[h]; break; case 14: this.$ = g[h]; break; case 15: this.$ = new e.ContentNode(g[h], this._$); break; case 16: this.$ = new e.CommentNode(g[h], this._$); break; case 17: this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$); break; case 18: this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$); break; case 19: this.$ = { path: g[h - 1], strip: a(g[h - 2], g[h]) }; break; case 20: this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$); break; case 21: this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$); break; case 22: this.$ = new e.PartialNode(g[h - 2], g[h - 1], a(g[h - 3], g[h]), this._$); break; case 23: this.$ = a(g[h - 1], g[h]); break; case 24: this.$ = new e.SexprNode([g[h - 2]].concat(g[h - 1]), g[h], this._$); break; case 25: this.$ = new e.SexprNode([g[h]], null, this._$); break; case 26: this.$ = g[h]; break; case 27: this.$ = new e.StringNode(g[h], this._$); break; case 28: this.$ = new e.IntegerNode(g[h], this._$); break; case 29: this.$ = new e.BooleanNode(g[h], this._$); break; case 30: this.$ = g[h]; break; case 31: g[h - 1].isHelper = !0, this.$ = g[h - 1]; break; case 32: this.$ = new e.HashNode(g[h], this._$); break; case 33: this.$ = [g[h - 2], g[h]]; break; case 34: this.$ = new e.PartialNameNode(g[h], this._$); break; case 35: this.$ = new e.PartialNameNode(new e.StringNode(g[h], this._$), this._$); break; case 36: this.$ = new e.PartialNameNode(new e.IntegerNode(g[h], this._$)); break; case 37: this.$ = new e.DataNode(g[h], this._$); break; case 38: this.$ = new e.IdNode(g[h], this._$); break; case 39: g[h - 2].push({ part: g[h], separator: g[h - 1] }), this.$ = g[h - 2]; break; case 40: this.$ = [{ part: g[h] }]; break; case 43: this.$ = []; break; case 44: g[h - 1].push(g[h]); break; case 47: this.$ = [g[h]]; break; case 48: g[h - 1].push(g[h]) } }, table: [{ 3: 1, 4: 2, 5: [1, 3], 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 1: [3] }, { 5: [1, 16], 8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 1: [2, 2] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 16: [2, 9], 19: [2, 9], 20: [2, 9], 22: [2, 9], 23: [2, 9], 25: [2, 9] }, { 4: 20, 6: 18, 7: 19, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 21], 20: [2, 8], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 4: 20, 6: 22, 7: 19, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 21], 20: [2, 8], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 16: [2, 13], 19: [2, 13], 20: [2, 13], 22: [2, 13], 23: [2, 13], 25: [2, 13] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 16: [2, 14], 19: [2, 14], 20: [2, 14], 22: [2, 14], 23: [2, 14], 25: [2, 14] }, { 5: [2, 15], 14: [2, 15], 15: [2, 15], 16: [2, 15], 19: [2, 15], 20: [2, 15], 22: [2, 15], 23: [2, 15], 25: [2, 15] }, { 5: [2, 16], 14: [2, 16], 15: [2, 16], 16: [2, 16], 19: [2, 16], 20: [2, 16], 22: [2, 16], 23: [2, 16], 25: [2, 16] }, { 17: 23, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26 }, { 17: 29, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26 }, { 17: 30, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26 }, { 17: 31, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26 }, { 21: 33, 26: 32, 32: [1, 34], 33: [1, 35], 40: [1, 28], 43: 26 }, { 1: [2, 1] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 16: [2, 10], 19: [2, 10], 20: [2, 10], 22: [2, 10], 23: [2, 10], 25: [2, 10] }, { 10: 36, 20: [1, 37] }, { 4: 38, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 7], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 7: 39, 8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 21], 20: [2, 6], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 17: 23, 18: [1, 40], 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26 }, { 10: 41, 20: [1, 37] }, { 18: [1, 42] }, { 18: [2, 43], 24: [2, 43], 28: 43, 32: [2, 43], 33: [2, 43], 34: [2, 43], 35: [2, 43], 36: [2, 43], 40: [2, 43], 42: [2, 43] }, { 18: [2, 25], 24: [2, 25], 36: [2, 25] }, { 18: [2, 38], 24: [2, 38], 32: [2, 38], 33: [2, 38], 34: [2, 38], 35: [2, 38], 36: [2, 38], 40: [2, 38], 42: [2, 38], 44: [1, 44] }, { 21: 45, 40: [1, 28], 43: 26 }, { 18: [2, 40], 24: [2, 40], 32: [2, 40], 33: [2, 40], 34: [2, 40], 35: [2, 40], 36: [2, 40], 40: [2, 40], 42: [2, 40], 44: [2, 40] }, { 18: [1, 46] }, { 18: [1, 47] }, { 24: [1, 48] }, { 18: [2, 41], 21: 50, 27: 49, 40: [1, 28], 43: 26 }, { 18: [2, 34], 40: [2, 34] }, { 18: [2, 35], 40: [2, 35] }, { 18: [2, 36], 40: [2, 36] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 19: [2, 11], 20: [2, 11], 22: [2, 11], 23: [2, 11], 25: [2, 11] }, { 21: 51, 40: [1, 28], 43: 26 }, { 8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 3], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 4: 52, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 5], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 14: [2, 23], 15: [2, 23], 16: [2, 23], 19: [2, 23], 20: [2, 23], 22: [2, 23], 23: [2, 23], 25: [2, 23] }, { 5: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 19: [2, 12], 20: [2, 12], 22: [2, 12], 23: [2, 12], 25: [2, 12] }, { 14: [2, 18], 15: [2, 18], 16: [2, 18], 19: [2, 18], 20: [2, 18], 22: [2, 18], 23: [2, 18], 25: [2, 18] }, { 18: [2, 45], 21: 56, 24: [2, 45], 29: 53, 30: 60, 31: 54, 32: [1, 57], 33: [1, 58], 34: [1, 59], 35: [1, 61], 36: [2, 45], 37: 55, 38: 62, 39: 63, 40: [1, 64], 42: [1, 27], 43: 26 }, { 40: [1, 65] }, { 18: [2, 37], 24: [2, 37], 32: [2, 37], 33: [2, 37], 34: [2, 37], 35: [2, 37], 36: [2, 37], 40: [2, 37], 42: [2, 37] }, { 14: [2, 17], 15: [2, 17], 16: [2, 17], 19: [2, 17], 20: [2, 17], 22: [2, 17], 23: [2, 17], 25: [2, 17] }, { 5: [2, 20], 14: [2, 20], 15: [2, 20], 16: [2, 20], 19: [2, 20], 20: [2, 20], 22: [2, 20], 23: [2, 20], 25: [2, 20] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 16: [2, 21], 19: [2, 21], 20: [2, 21], 22: [2, 21], 23: [2, 21], 25: [2, 21] }, { 18: [1, 66] }, { 18: [2, 42] }, { 18: [1, 67] }, { 8: 17, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 25: [1, 15] }, { 18: [2, 24], 24: [2, 24], 36: [2, 24] }, { 18: [2, 44], 24: [2, 44], 32: [2, 44], 33: [2, 44], 34: [2, 44], 35: [2, 44], 36: [2, 44], 40: [2, 44], 42: [2, 44] }, { 18: [2, 46], 24: [2, 46], 36: [2, 46] }, { 18: [2, 26], 24: [2, 26], 32: [2, 26], 33: [2, 26], 34: [2, 26], 35: [2, 26], 36: [2, 26], 40: [2, 26], 42: [2, 26] }, { 18: [2, 27], 24: [2, 27], 32: [2, 27], 33: [2, 27], 34: [2, 27], 35: [2, 27], 36: [2, 27], 40: [2, 27], 42: [2, 27] }, { 18: [2, 28], 24: [2, 28], 32: [2, 28], 33: [2, 28], 34: [2, 28], 35: [2, 28], 36: [2, 28], 40: [2, 28], 42: [2, 28] }, { 18: [2, 29], 24: [2, 29], 32: [2, 29], 33: [2, 29], 34: [2, 29], 35: [2, 29], 36: [2, 29], 40: [2, 29], 42: [2, 29] }, { 18: [2, 30], 24: [2, 30], 32: [2, 30], 33: [2, 30], 34: [2, 30], 35: [2, 30], 36: [2, 30], 40: [2, 30], 42: [2, 30] }, { 17: 68, 21: 24, 30: 25, 40: [1, 28], 42: [1, 27], 43: 26 }, { 18: [2, 32], 24: [2, 32], 36: [2, 32], 39: 69, 40: [1, 70] }, { 18: [2, 47], 24: [2, 47], 36: [2, 47], 40: [2, 47] }, { 18: [2, 40], 24: [2, 40], 32: [2, 40], 33: [2, 40], 34: [2, 40], 35: [2, 40], 36: [2, 40], 40: [2, 40], 41: [1, 71], 42: [2, 40], 44: [2, 40] }, { 18: [2, 39], 24: [2, 39], 32: [2, 39], 33: [2, 39], 34: [2, 39], 35: [2, 39], 36: [2, 39], 40: [2, 39], 42: [2, 39], 44: [2, 39] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 16: [2, 22], 19: [2, 22], 20: [2, 22], 22: [2, 22], 23: [2, 22], 25: [2, 22] }, { 5: [2, 19], 14: [2, 19], 15: [2, 19], 16: [2, 19], 19: [2, 19], 20: [2, 19], 22: [2, 19], 23: [2, 19], 25: [2, 19] }, { 36: [1, 72] }, { 18: [2, 48], 24: [2, 48], 36: [2, 48], 40: [2, 48] }, { 41: [1, 71] }, { 21: 56, 30: 60, 31: 73, 32: [1, 57], 33: [1, 58], 34: [1, 59], 35: [1, 61], 40: [1, 28], 42: [1, 27], 43: 26 }, { 18: [2, 31], 24: [2, 31], 32: [2, 31], 33: [2, 31], 34: [2, 31], 35: [2, 31], 36: [2, 31], 40: [2, 31], 42: [2, 31] }, { 18: [2, 33], 24: [2, 33], 36: [2, 33], 40: [2, 33] }], defaultActions: { 3: [2, 2], 16: [2, 1], 50: [2, 42] }, parseError: function (a) { throw new Error(a) }, parse: function (a) { function b() { var a; return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a } var c = this, d = [0], e = [null], f = [], g = this.table, h = "", i = 0, j = 0, k = 0; this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {}); var l = this.lexer.yylloc; f.push(l); var m = this.lexer.options && this.lexer.options.ranges; "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError); for (var n, o, p, q, r, s, t, u, v, w = {}; ;) { if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) { var x = ""; if (!k) { v = []; for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'"); x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, { text: this.lexer.match, token: this.terminals_[n] || n, line: this.lexer.yylineno, loc: l, expected: v }) } } if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n); switch (q[0]) { case 1: d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--); break; case 2: if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = { first_line: f[f.length - (t || 1)].first_line, last_line: f[f.length - 1].last_line, first_column: f[f.length - (t || 1)].first_column, last_column: f[f.length - 1].last_column }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r; t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u); break; case 3: return !0 } } return !0 } }, d = function () { var a = { EOF: 1, parseError: function (a, b) { if (!this.yy.parser) throw new Error(a); this.yy.parser.parseError(a, b) }, setInput: function (a) { return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this }, input: function () { var a = this._input[0]; this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a; var b = a.match(/(?:\r\n?|\n).*/g); return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a }, unput: function (a) { var b = a.length, c = a.split(/(?:\r\n?|\n)/g); this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b; var d = this.match.split(/(?:\r\n?|\n)/g); this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1); var e = this.yylloc.range; return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this }, more: function () { return this._more = !0, this }, less: function (a) { this.unput(this.match.slice(a)) }, pastInput: function () { var a = this.matched.substr(0, this.matched.length - this.match.length); return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "") }, upcomingInput: function () { var a = this.match; return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "") }, showPosition: function () { var a = this.pastInput(), b = new Array(a.length + 1).join("-"); return a + this.upcomingInput() + "\n" + b + "^" }, next: function () { if (this.done) return this.EOF; this._input || (this.done = !0); var a, b, c, d, e; this._more || (this.yytext = "", this.match = ""); for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)) ; g++); return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno }) }, lex: function () { var a = this.next(); return "undefined" != typeof a ? a : this.lex() }, begin: function (a) { this.conditionStack.push(a) }, popState: function () { return this.conditionStack.pop() }, _currentRules: function () { return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules }, topState: function () { return this.conditionStack[this.conditionStack.length - 2] }, pushState: function (a) { this.begin(a) } }; return a.options = {}, a.performAction = function (a, b, c, d) { function e(a, c) { return b.yytext = b.yytext.substr(a, b.yyleng - c) } switch (c) { case 0: if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 14; break; case 1: return 14; case 2: return this.popState(), 14; case 3: return e(0, 4), this.popState(), 15; case 4: return 35; case 5: return 36; case 6: return 25; case 7: return 16; case 8: return 20; case 9: return 19; case 10: return 19; case 11: return 23; case 12: return 22; case 13: this.popState(), this.begin("com"); break; case 14: return e(3, 5), this.popState(), 15; case 15: return 22; case 16: return 41; case 17: return 40; case 18: return 40; case 19: return 44; case 20: break; case 21: return this.popState(), 24; case 22: return this.popState(), 18; case 23: return b.yytext = e(1, 2).replace(/\\"/g, '"'), 32; case 24: return b.yytext = e(1, 2).replace(/\\'/g, "'"), 32; case 25: return 42; case 26: return 34; case 27: return 34; case 28: return 33; case 29: return 40; case 30: return b.yytext = e(1, 2), 40; case 31: return "INVALID"; case 32: return 5 } }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = { mu: { rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [3], inclusive: !1 }, INITIAL: { rules: [0, 1, 32], inclusive: !0 } }, a }(); return c.lexer = d, b.prototype = c, c.Parser = b, new b }(); return a = b }(), i = function (a, b) { "use strict"; function c(a) { return a.constructor === f.ProgramNode ? a : (e.yy = f, e.parse(a)) } var d = {}, e = a, f = b; return d.parser = e, d.parse = c, d }(h, g), j = function (a) { "use strict"; function b() { } function c(a, b, c) { if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a); b = b || {}, "data" in b || (b.data = !0); var d = c.parse(a), e = (new c.Compiler).compile(d, b); return (new c.JavaScriptCompiler).compile(e, b) } function d(a, b, c) { function d() { var d = c.parse(a), e = (new c.Compiler).compile(d, b), f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0); return c.template(f) } if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a); b = b || {}, "data" in b || (b.data = !0); var e; return function (a, b) { return e || (e = d()), e.call(this, a, b) } } var e = {}, f = a; return e.Compiler = b, b.prototype = { compiler: b, disassemble: function () { for (var a, b, c, d = this.opcodes, e = [], f = 0, g = d.length; g > f; f++) if (a = d[f], "DECLARE" === a.opcode) e.push("DECLARE " + a.name + "=" + a.value); else { b = []; for (var h = 0; h < a.args.length; h++) c = a.args[h], "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"'), b.push(c); e.push(a.opcode + " " + b.join(" ")) } return e.join("\n") }, equals: function (a) { var b = this.opcodes.length; if (a.opcodes.length !== b) return !1; for (var c = 0; b > c; c++) { var d = this.opcodes[c], e = a.opcodes[c]; if (d.opcode !== e.opcode || d.args.length !== e.args.length) return !1; for (var f = 0; f < d.args.length; f++) if (d.args[f] !== e.args[f]) return !1 } if (b = this.children.length, a.children.length !== b) return !1; for (c = 0; b > c; c++) if (!this.children[c].equals(a.children[c])) return !1; return !0 }, guid: 0, compile: function (a, b) { this.opcodes = [], this.children = [], this.depths = { list: [] }, this.options = b; var c = this.options.knownHelpers; if (this.options.knownHelpers = { helperMissing: !0, blockHelperMissing: !0, each: !0, "if": !0, unless: !0, "with": !0, log: !0 }, c) for (var d in c) this.options.knownHelpers[d] = c[d]; return this.accept(a) }, accept: function (a) { var b, c = a.strip || {}; return c.left && this.opcode("strip"), b = this[a.type](a), c.right && this.opcode("strip"), b }, program: function (a) { for (var b = a.statements, c = 0, d = b.length; d > c; c++) this.accept(b[c]); return this.isSimple = 1 === d, this.depths.list = this.depths.list.sort(function (a, b) { return a - b }), this }, compileProgram: function (a) { var b, c = (new this.compiler).compile(a, this.options), d = this.guid++; this.usePartial = this.usePartial || c.usePartial, this.children[d] = c; for (var e = 0, f = c.depths.list.length; f > e; e++) b = c.depths.list[e], 2 > b || this.addDepth(b - 1); return d }, block: function (a) { var b = a.mustache, c = a.program, d = a.inverse; c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d)); var e = b.sexpr, f = this.classifySexpr(e); "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousSexpr(e, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append") }, hash: function (a) { var b, c, d = a.pairs; this.opcode("pushHash"); for (var e = 0, f = d.length; f > e; e++) b = d[e], c = b[1], this.options.stringParams ? (c.depth && this.addDepth(c.depth), this.opcode("getContext", c.depth || 0), this.opcode("pushStringParam", c.stringModeValue, c.type), "sexpr" === c.type && this.sexpr(c)) : this.accept(c), this.opcode("assignToHash", b[0]); this.opcode("popHash") }, partial: function (a) { var b = a.partialName; this.usePartial = !0, a.context ? this.ID(a.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", b.name), this.opcode("append") }, content: function (a) { this.opcode("appendContent", a.string) }, mustache: function (a) { this.sexpr(a.sexpr), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append") }, ambiguousSexpr: function (a, b, c) { var d = a.id, e = d.parts[0], f = null != b || null != c; this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("invokeAmbiguous", e, f) }, simpleSexpr: function (a) { var b = a.id; "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda") }, helperSexpr: function (a, b, c) { var d = this.setupFullMustacheParams(a, b, c), e = a.id.parts[0]; if (this.options.knownHelpers[e]) this.opcode("invokeKnownHelper", d.length, e); else { if (this.options.knownHelpersOnly) throw new f("You specified knownHelpersOnly, but used the unknown helper " + e, a); this.opcode("invokeHelper", d.length, e, a.isRoot) } }, sexpr: function (a) { var b = this.classifySexpr(a); "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a) }, ID: function (a) { this.addDepth(a.depth), this.opcode("getContext", a.depth); var b = a.parts[0]; b ? this.opcode("lookupOnContext", a.parts[0]) : this.opcode("pushContext"); for (var c = 1, d = a.parts.length; d > c; c++) this.opcode("lookup", a.parts[c]) }, DATA: function (a) { if (this.options.data = !0, a.id.isScoped || a.id.depth) throw new f("Scoped data references are not supported: " + a.original, a); this.opcode("lookupData"); for (var b = a.id.parts, c = 0, d = b.length; d > c; c++) this.opcode("lookup", b[c]) }, STRING: function (a) { this.opcode("pushString", a.string) }, INTEGER: function (a) { this.opcode("pushLiteral", a.integer) }, BOOLEAN: function (a) { this.opcode("pushLiteral", a.bool) }, comment: function () { }, opcode: function (a) { this.opcodes.push({ opcode: a, args: [].slice.call(arguments, 1) }) }, declare: function (a, b) { this.opcodes.push({ opcode: "DECLARE", name: a, value: b }) }, addDepth: function (a) { 0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a))) }, classifySexpr: function (a) { var b = a.isHelper, c = a.eligibleHelper, d = this.options; if (c && !b) { var e = a.id.parts[0]; d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1) } return b ? "helper" : c ? "ambiguous" : "simple" }, pushParams: function (a) { for (var b, c = a.length; c--;) b = a[c], this.options.stringParams ? (b.depth && this.addDepth(b.depth), this.opcode("getContext", b.depth || 0), this.opcode("pushStringParam", b.stringModeValue, b.type), "sexpr" === b.type && this.sexpr(b)) : this[b.type](b) }, setupFullMustacheParams: function (a, b, c) { var d = a.params; return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d } }, e.precompile = c, e.compile = d, e }(c), k = function (a, b) {
        "use strict"; function c(a) { this.value = a } function d() { } var e, f = a.COMPILER_REVISION, g = a.REVISION_CHANGES, h = a.log, i = b; d.prototype = {
            nameLookup: function (a, b) { var c, e; return 0 === a.indexOf("depth") && (c = !0), e = /^[0-9]+$/.test(b) ? a + "[" + b + "]" : d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']", c ? "(" + a + " && " + e + ")" : e }, compilerInfo: function () { var a = f, b = g[a]; return "this.compilerInfo = [" + a + ",'" + b + "'];\n" }, appendToBuffer: function (a) { return this.environment.isSimple ? "return " + a + ";" : { appendToBuffer: !0, content: a, toString: function () { return "buffer += " + a + ";" } } }, initializeBuffer: function () { return this.quotedString("") }, namespace: "Handlebars", compile: function (a, b, c, d) {
                this.environment = a, this.options = b || {}, h("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!c, this.context = c || { programs: [], environments: [], aliases: {} }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(a, b);
                var e, f = a.opcodes; this.i = 0; for (var g = f.length; this.i < g; this.i++) e = f[this.i], "DECLARE" === e.opcode ? this[e.name] = e.value : this[e.opcode].apply(this, e.args), e.opcode !== this.stripNext && (this.stripNext = !1); if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new i("Compile completed with content left on stack"); return this.createFunctionContext(d)
            }, preamble: function () { var a = []; if (this.isChild) a.push(""); else { var b = this.namespace, c = "helpers = this.merge(helpers, " + b + ".helpers);"; this.environment.usePartial && (c = c + " partials = this.merge(partials, " + b + ".partials);"), this.options.data && (c += " data = data || {};"), a.push(c) } this.environment.isSimple ? a.push("") : a.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = a }, createFunctionContext: function (a) { var b = this.stackVars.concat(this.registers.list); if (b.length > 0 && (this.source[1] = this.source[1] + ", " + b.join(", ")), !this.isChild) for (var c in this.context.aliases) this.context.aliases.hasOwnProperty(c) && (this.source[1] = this.source[1] + ", " + c + "=" + this.context.aliases[c]); this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;"); for (var d = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], e = 0, f = this.environment.depths.list.length; f > e; e++) d.push("depth" + this.environment.depths.list[e]); var g = this.mergeSource(); if (this.isChild || (g = this.compilerInfo() + g), a) return d.push(g), Function.apply(this, d); var i = "function " + (this.name || "") + "(" + d.join(",") + ") {\n  " + g + "}"; return h("debug", i + "\n\n"), i }, mergeSource: function () { for (var a, b = "", c = 0, d = this.source.length; d > c; c++) { var e = this.source[c]; e.appendToBuffer ? a = a ? a + "\n    + " + e.content : e.content : (a && (b += "buffer += " + a + ";\n  ", a = void 0), b += e + "\n  ") } return b }, blockValue: function () { this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing"; var a = ["depth0"]; this.setupParams(0, a), this.replaceStack(function (b) { return a.splice(1, 0, b), "blockHelperMissing.call(" + a.join(", ") + ")" }) }, ambiguousBlockValue: function () { this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing"; var a = ["depth0"]; this.setupParams(0, a); var b = this.topStack(); a.splice(1, 0, b), this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }") }, appendContent: function (a) { this.pendingContent && (a = this.pendingContent + a), this.stripNext && (a = a.replace(/^\s+/, "")), this.pendingContent = a }, strip: function () { this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip" }, append: function () { this.flushInline(); var a = this.popStack(); this.pushSource("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }") }, appendEscaped: function () { this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")")) }, getContext: function (a) { this.lastContext !== a && (this.lastContext = a) }, lookupOnContext: function (a) { this.push(this.nameLookup("depth" + this.lastContext, a, "context")) }, pushContext: function () { this.pushStackLiteral("depth" + this.lastContext) }, resolvePossibleLambda: function () { this.context.aliases.functionType = '"function"', this.replaceStack(function (a) { return "typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a }) }, lookup: function (a) { this.replaceStack(function (b) { return b + " == null || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context") }) }, lookupData: function () { this.pushStackLiteral("data") }, pushStringParam: function (a, b) { this.pushStackLiteral("depth" + this.lastContext), this.pushString(b), "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a)) }, emptyHash: function () { this.pushStackLiteral("{}"), this.options.stringParams && (this.push("{}"), this.push("{}")) }, pushHash: function () { this.hash && this.hashes.push(this.hash), this.hash = { values: [], types: [], contexts: [] } }, popHash: function () { var a = this.hash; this.hash = this.hashes.pop(), this.options.stringParams && (this.push("{" + a.contexts.join(",") + "}"), this.push("{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }") }, pushString: function (a) { this.pushStackLiteral(this.quotedString(a)) }, push: function (a) { return this.inlineStack.push(a), a }, pushLiteral: function (a) { this.pushStackLiteral(a) }, pushProgram: function (a) { null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null) }, invokeHelper: function (a, b, c) { this.context.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper"); var d = this.lastHelper = this.setupHelper(a, b, !0), e = this.nameLookup("depth" + this.lastContext, b, "context"), f = "helper = " + d.name + " || " + e; d.paramsInit && (f += "," + d.paramsInit), this.push("(" + f + ",helper ? helper.call(" + d.callParams + ") : helperMissing.call(" + d.helperMissingParams + "))"), c || this.flushInline() }, invokeKnownHelper: function (a, b) { var c = this.setupHelper(a, b); this.push(c.name + ".call(" + c.callParams + ")") }, invokeAmbiguous: function (a, b) { this.context.aliases.functionType = '"function"', this.useRegister("helper"), this.emptyHash(); var c = this.setupHelper(0, a, b), d = this.lastHelper = this.nameLookup("helpers", a, "helper"), e = this.nameLookup("depth" + this.lastContext, a, "context"), f = this.nextStack(); c.paramsInit && this.pushSource(c.paramsInit), this.pushSource("if (helper = " + d + ") { " + f + " = helper.call(" + c.callParams + "); }"), this.pushSource("else { helper = " + e + "; " + f + " = typeof helper === functionType ? helper.call(" + c.callParams + ") : helper; }") }, invokePartial: function (a) { var b = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"]; this.options.data && b.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + b.join(", ") + ")") }, assignToHash: function (a) { var b, c, d = this.popStack(); this.options.stringParams && (c = this.popStack(), b = this.popStack()); var e = this.hash; b && e.contexts.push("'" + a + "': " + b), c && e.types.push("'" + a + "': " + c), e.values.push("'" + a + "': (" + d + ")") }, compiler: d, compileChildren: function (a, b) { for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) { c = e[f], d = new this.compiler; var h = this.matchExistingProgram(c); null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context), this.context.environments[h] = c) : (c.index = h, c.name = "program" + h) } }, matchExistingProgram: function (a) { for (var b = 0, c = this.context.environments.length; c > b; b++) { var d = this.context.environments[b]; if (d && d.equals(a)) return b } }, programExpression: function (a) { if (this.context.aliases.self = "this", null == a) return "self.noop"; for (var b, c = this.environment.children[a], d = c.depths.list, e = [c.index, c.name, "data"], f = 0, g = d.length; g > f; f++) b = d[f], 1 === b ? e.push("depth0") : e.push("depth" + (b - 1)); return (0 === d.length ? "self.program(" : "self.programWithDepth(") + e.join(", ") + ")" }, register: function (a, b) { this.useRegister(a), this.pushSource(a + " = " + b + ";") }, useRegister: function (a) { this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a)) }, pushStackLiteral: function (a) { return this.push(new c(a)) }, pushSource: function (a) { this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), a && this.source.push(a) }, pushStack: function (a) { this.flushInline(); var b = this.incrStack(); return a && this.pushSource(b + " = " + a + ";"), this.compileStack.push(b), b }, replaceStack: function (a) { var b, d, e, f = "", g = this.isInline(); if (g) { var h = this.popStack(!0); if (h instanceof c) b = h.value, e = !0; else { d = !this.stackSlot; var i = d ? this.incrStack() : this.topStackName(); f = "(" + this.push(i) + " = " + h + "),", b = this.topStack() } } else b = this.topStack(); var j = a.call(this, b); return g ? (e || this.popStack(), d && this.stackSlot--, this.push("(" + f + j + ")")) : (/^stack/.test(b) || (b = this.nextStack()), this.pushSource(b + " = (" + f + j + ");")), b }, nextStack: function () { return this.pushStack() }, incrStack: function () { return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName() }, topStackName: function () { return "stack" + this.stackSlot }, flushInline: function () { var a = this.inlineStack; if (a.length) { this.inlineStack = []; for (var b = 0, d = a.length; d > b; b++) { var e = a[b]; e instanceof c ? this.compileStack.push(e) : this.pushStack(e) } } }, isInline: function () { return this.inlineStack.length }, popStack: function (a) { var b = this.isInline(), d = (b ? this.inlineStack : this.compileStack).pop(); if (!a && d instanceof c) return d.value; if (!b) { if (!this.stackSlot) throw new i("Invalid stack pop"); this.stackSlot-- } return d }, topStack: function (a) { var b = this.isInline() ? this.inlineStack : this.compileStack, d = b[b.length - 1]; return !a && d instanceof c ? d.value : d }, quotedString: function (a) { return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"' }, setupHelper: function (a, b, c) { var d = [], e = this.setupParams(a, d, c), f = this.nameLookup("helpers", b, "helper"); return { params: d, paramsInit: e, name: f, callParams: ["depth0"].concat(d).join(", "), helperMissingParams: c && ["depth0", this.quotedString(b)].concat(d).join(", ") } }, setupOptions: function (a, b) { var c, d, e, f = [], g = [], h = []; f.push("hash:" + this.popStack()), this.options.stringParams && (f.push("hashTypes:" + this.popStack()), f.push("hashContexts:" + this.popStack())), d = this.popStack(), e = this.popStack(), (e || d) && (e || (this.context.aliases.self = "this", e = "self.noop"), d || (this.context.aliases.self = "this", d = "self.noop"), f.push("inverse:" + d), f.push("fn:" + e)); for (var i = 0; a > i; i++) c = this.popStack(), b.push(c), this.options.stringParams && (h.push(this.popStack()), g.push(this.popStack())); return this.options.stringParams && (f.push("contexts:[" + g.join(",") + "]"), f.push("types:[" + h.join(",") + "]")), this.options.data && f.push("data:data"), f }, setupParams: function (a, b, c) { var d = "{" + this.setupOptions(a, b).join(",") + "}"; return c ? (this.useRegister("options"), b.push("options"), "options=" + d) : (b.push(d), "") }
        }; for (var j = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), k = d.RESERVED_WORDS = {}, l = 0, m = j.length; m > l; l++) k[j[l]] = !0; return d.isValidJavaScriptVariableName = function (a) { return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a) ? !0 : !1 }, e = d
    }(d, c), l = function (a, b, c, d, e) { "use strict"; var f, g = a, h = b, i = c.parser, j = c.parse, k = d.Compiler, l = d.compile, m = d.precompile, n = e, o = g.create, p = function () { var a = o(); return a.compile = function (b, c) { return l(b, c, a) }, a.precompile = function (b, c) { return m(b, c, a) }, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, a }; return g = p(), g.create = p, f = g }(f, g, i, j, k); return l
}();

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
/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */


!function (a, b) { "use strict"; function c(a) { this.callback = a, this.ticking = !1 } function d(b) { return b && "undefined" != typeof a && (b === a || b.nodeType) } function e(a) { if (arguments.length <= 0) throw new Error("Missing arguments in extend function"); var b, c, f = a || {}; for (c = 1; c < arguments.length; c++) { var g = arguments[c] || {}; for (b in g) f[b] = "object" != typeof f[b] || d(f[b]) ? f[b] || g[b] : e(f[b], g[b]) } return f } function f(a) { return a === Object(a) ? a : { down: a, up: a } } function g(a, b) { b = e(b, g.options), this.lastKnownScrollY = 0, this.elem = a, this.debouncer = new c(this.update.bind(this)), this.tolerance = f(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop } var h = { bind: !!function () { }.bind, classList: "classList" in b.documentElement, rAF: !!(a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame) }; a.requestAnimationFrame = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, c.prototype = { constructor: c, update: function () { this.callback && this.callback(), this.ticking = !1 }, requestTick: function () { this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0) }, handleEvent: function () { this.requestTick() } }, g.prototype = { constructor: g, init: function () { return g.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0 }, destroy: function () { var a = this.classes; this.initialised = !1, this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1) }, attachEvent: function () { this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent()) }, unpin: function () { var a = this.elem.classList, b = this.classes; (a.contains(b.pinned) || !a.contains(b.unpinned)) && (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this)) }, pin: function () { var a = this.elem.classList, b = this.classes; a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this)) }, top: function () { var a = this.elem.classList, b = this.classes; a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this)) }, notTop: function () { var a = this.elem.classList, b = this.classes; a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this)) }, getScrollY: function () { return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (b.documentElement || b.body.parentNode || b.body).scrollTop }, getViewportHeight: function () { return a.innerHeight || b.documentElement.clientHeight || b.body.clientHeight }, getDocumentHeight: function () { var a = b.body, c = b.documentElement; return Math.max(a.scrollHeight, c.scrollHeight, a.offsetHeight, c.offsetHeight, a.clientHeight, c.clientHeight) }, getElementHeight: function (a) { return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight) }, getScrollerHeight: function () { return this.scroller === a || this.scroller === b.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller) }, isOutOfBounds: function (a) { var b = 0 > a, c = a + this.getViewportHeight() > this.getScrollerHeight(); return b || c }, toleranceExceeded: function (a, b) { return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b] }, shouldUnpin: function (a, b) { var c = a > this.lastKnownScrollY, d = a >= this.offset; return c && d && b }, shouldPin: function (a, b) { var c = a < this.lastKnownScrollY, d = a <= this.offset; return c && b || d }, update: function () { var a = this.getScrollY(), b = a > this.lastKnownScrollY ? "down" : "up", c = this.toleranceExceeded(a, b); this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a) } }, g.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: a, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, g.cutsTheMustard = "undefined" != typeof h && h.rAF && h.bind && h.classList, a.Headroom = g }(window, document);

(function (Main, $, undefined) {

    imagesLoaded($('body'), function() {
        $('.loading-overlay').addClass('loaded');
    });

}(window.Main = window.Main || {}, jQuery))
;
//! moment.js
//! version : 2.7.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(a,b){function c(){mb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return j(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function e(a,b){return function(c){return m(a.call(this,c),b)}}function f(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function g(){}function h(a){z(a),j(this,a)}function i(a){var b=s(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function j(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function k(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&Ab.hasOwnProperty(b)&&(c[b]=a[b]);return c}function l(a){return 0>a?Math.ceil(a):Math.floor(a)}function m(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function n(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&hb(a,"Date",gb(a,"Date")+f*c),g&&fb(a,gb(a,"Month")+g*c),d&&mb.updateOffset(a,f||g)}function o(a){return"[object Array]"===Object.prototype.toString.call(a)}function p(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function q(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function r(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=bc[a]||cc[b]||b}return a}function s(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=r(c),b&&(d[b]=a[c]));return d}function t(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}mb[b]=function(e,f){var g,h,i=mb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=mb().utc().set(d,a);return i.call(mb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function v(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function w(a,b,c){return bb(mb([a,11,31+b-c]),b,c).week}function x(a){return y(a)?366:365}function y(a){return a%4===0&&a%100!==0||a%400===0}function z(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[tb]<0||a._a[tb]>11?tb:a._a[ub]<1||a._a[ub]>v(a._a[sb],a._a[tb])?ub:a._a[vb]<0||a._a[vb]>23?vb:a._a[wb]<0||a._a[wb]>59?wb:a._a[xb]<0||a._a[xb]>59?xb:a._a[yb]<0||a._a[yb]>999?yb:-1,a._pf._overflowDayOfYear&&(sb>b||b>ub)&&(b=ub),a._pf.overflow=b)}function A(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a,b){return b._isUTC?mb(a).zone(b._offset||0):mb(a).local()}function D(a,b){return b.abbr=a,zb[a]||(zb[a]=new g),zb[a].set(b),zb[a]}function E(a){delete zb[a]}function F(a){var b,c,d,e,f=0,g=function(a){if(!zb[a]&&Bb)try{require("./lang/"+a)}catch(b){}return zb[a]};if(!a)return mb.fn._lang;if(!o(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,d=B(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&q(e,d,!0)>=b-1)break;b--}f++}return mb.fn._lang}function G(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function H(a){var b,c,d=a.match(Fb);for(b=0,c=d.length;c>b;b++)d[b]=hc[d[b]]?hc[d[b]]:G(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function I(a,b){return a.isValid()?(b=J(b,a.lang()),dc[b]||(dc[b]=H(b)),dc[b](a)):a.lang().invalidDate()}function J(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gb.lastIndex=0;d>=0&&Gb.test(a);)a=a.replace(Gb,c),Gb.lastIndex=0,d-=1;return a}function K(a,b){var c,d=b._strict;switch(a){case"Q":return Rb;case"DDDD":return Tb;case"YYYY":case"GGGG":case"gggg":return d?Ub:Jb;case"Y":case"G":case"g":return Wb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Vb:Kb;case"S":if(d)return Rb;case"SS":if(d)return Sb;case"SSS":if(d)return Tb;case"DDD":return Ib;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Mb;case"a":case"A":return F(b._l)._meridiemParse;case"X":return Pb;case"Z":case"ZZ":return Nb;case"T":return Ob;case"SSSS":return Lb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Sb:Hb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Hb;case"Do":return Qb;default:return c=new RegExp(T(S(a.replace("\\","")),"i"))}}function L(a){a=a||"";var b=a.match(Nb)||[],c=b[b.length-1]||[],d=(c+"").match(_b)||["-",0,0],e=+(60*d[1])+u(d[2]);return"+"===d[0]?-e:e}function M(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[tb]=3*(u(b)-1));break;case"M":case"MM":null!=b&&(e[tb]=u(b)-1);break;case"MMM":case"MMMM":d=F(c._l).monthsParse(b),null!=d?e[tb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[ub]=u(b));break;case"Do":null!=b&&(e[ub]=u(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=u(b));break;case"YY":e[sb]=mb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[sb]=u(b);break;case"a":case"A":c._isPm=F(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[vb]=u(b);break;case"m":case"mm":e[wb]=u(b);break;case"s":case"ss":e[xb]=u(b);break;case"S":case"SS":case"SSS":case"SSSS":e[yb]=u(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=L(b);break;case"dd":case"ddd":case"dddd":d=F(c._l).weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=u(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=mb.parseTwoDigitYear(b)}}function N(a){var c,d,e,f,g,h,i,j;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[sb],bb(mb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(j=F(a._l),g=j._week.dow,h=j._week.doy,d=b(c.gg,a._a[sb],bb(mb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=cb(d,e,f,h,g),a._a[sb]=i.year,a._dayOfYear=i.dayOfYear}function O(a){var c,d,e,f,g=[];if(!a._d){for(e=Q(a),a._w&&null==a._a[ub]&&null==a._a[tb]&&N(a),a._dayOfYear&&(f=b(a._a[sb],e[sb]),a._dayOfYear>x(f)&&(a._pf._overflowDayOfYear=!0),d=Z(f,0,a._dayOfYear),a._a[tb]=d.getUTCMonth(),a._a[ub]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?Z:Y).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function P(a){var b;a._d||(b=s(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],O(a))}function Q(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function R(a){if(a._f===mb.ISO_8601)return void V(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=F(a._l),h=""+a._i,i=h.length,j=0;for(d=J(a._f,g).match(Fb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(K(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),hc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),M(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[vb]<12&&(a._a[vb]+=12),a._isPm===!1&&12===a._a[vb]&&(a._a[vb]=0),O(a),z(a)}function S(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function T(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function U(a){var b,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=j({},a),b._pf=c(),b._f=a._f[f],R(b),A(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,d=b));j(a,d||b)}function V(a){var b,c,d=a._i,e=Xb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Zb.length;c>b;b++)if(Zb[b][1].exec(d)){a._f=Zb[b][0]+(e[6]||" ");break}for(b=0,c=$b.length;c>b;b++)if($b[b][1].exec(d)){a._f+=$b[b][0];break}d.match(Nb)&&(a._f+="Z"),R(a)}else a._isValid=!1}function W(a){V(a),a._isValid===!1&&(delete a._isValid,mb.createFromInputFallback(a))}function X(b){var c=b._i,d=Cb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?W(b):o(c)?(b._a=c.slice(0),O(b)):p(c)?b._d=new Date(+c):"object"==typeof c?P(b):"number"==typeof c?b._d=new Date(c):mb.createFromInputFallback(b)}function Y(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function Z(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function $(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function _(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ab(a,b,c){var d=rb(Math.abs(a)/1e3),e=rb(d/60),f=rb(e/60),g=rb(f/24),h=rb(g/365),i=d<ec.s&&["s",d]||1===e&&["m"]||e<ec.m&&["mm",e]||1===f&&["h"]||f<ec.h&&["hh",f]||1===g&&["d"]||g<=ec.dd&&["dd",g]||g<=ec.dm&&["M"]||g<ec.dy&&["MM",rb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,_.apply({},i)}function bb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=mb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function cb(a,b,c,d,e){var f,g,h=Z(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:x(a-1)+g}}function db(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?mb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=F().preparse(c)),mb.isMoment(c)?(b=k(c),b._d=new Date(+c._d)):d?o(d)?U(b):R(b):X(b),new h(b))}function eb(a,b){var c,d;if(1===b.length&&o(b[0])&&(b=b[0]),!b.length)return mb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function fb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),v(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function gb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function hb(a,b,c){return"Month"===b?fb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ib(a,b){return function(c){return null!=c?(hb(this,a,c),mb.updateOffset(this,b),this):gb(this,a)}}function jb(a){mb.duration.fn[a]=function(){return this._data[a]}}function kb(a,b){mb.duration.fn["as"+a]=function(){return+this/b}}function lb(a){"undefined"==typeof ender&&(nb=qb.moment,qb.moment=a?d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",mb):mb)}for(var mb,nb,ob,pb="2.7.0",qb="undefined"!=typeof global?global:this,rb=Math.round,sb=0,tb=1,ub=2,vb=3,wb=4,xb=5,yb=6,zb={},Ab={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_tzm:null,_isUTC:null,_offset:null,_pf:null,_lang:null},Bb="undefined"!=typeof module&&module.exports,Cb=/^\/?Date\((\-?\d+)/i,Db=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Eb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Fb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Gb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Hb=/\d\d?/,Ib=/\d{1,3}/,Jb=/\d{1,4}/,Kb=/[+\-]?\d{1,6}/,Lb=/\d+/,Mb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Nb=/Z|[\+\-]\d\d:?\d\d/gi,Ob=/T/i,Pb=/[\+\-]?\d+(\.\d{1,3})?/,Qb=/\d{1,2}/,Rb=/\d/,Sb=/\d\d/,Tb=/\d{3}/,Ub=/\d{4}/,Vb=/[+-]?\d{6}/,Wb=/[+-]?\d+/,Xb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yb="YYYY-MM-DDTHH:mm:ssZ",Zb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],$b=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],_b=/([\+\-]|\d\d)/gi,ac=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),bc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},cc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},dc={},ec={s:45,m:45,h:22,dd:25,dm:45,dy:345},fc="DDD w W M D d".split(" "),gc="M D H h m s w W".split(" "),hc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return m(this.year()%100,2)},YYYY:function(){return m(this.year(),4)},YYYYY:function(){return m(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+m(Math.abs(a),6)},gg:function(){return m(this.weekYear()%100,2)},gggg:function(){return m(this.weekYear(),4)},ggggg:function(){return m(this.weekYear(),5)},GG:function(){return m(this.isoWeekYear()%100,2)},GGGG:function(){return m(this.isoWeekYear(),4)},GGGGG:function(){return m(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return u(this.milliseconds()/100)},SS:function(){return m(u(this.milliseconds()/10),2)},SSS:function(){return m(this.milliseconds(),3)},SSSS:function(){return m(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+m(u(a/60),2)+":"+m(u(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+m(u(a/60),2)+m(u(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},ic=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];fc.length;)ob=fc.pop(),hc[ob+"o"]=f(hc[ob],ob);for(;gc.length;)ob=gc.pop(),hc[ob+ob]=e(hc[ob],2);for(hc.DDDD=e(hc.DDD,3),j(g.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=mb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=mb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return bb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),mb=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=c(),db(g)},mb.suppressDeprecationWarnings=!1,mb.createFromInputFallback=d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),mb.min=function(){var a=[].slice.call(arguments,0);return eb("isBefore",a)},mb.max=function(){var a=[].slice.call(arguments,0);return eb("isAfter",a)},mb.utc=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=d,g._strict=f,g._pf=c(),db(g).utc()},mb.unix=function(a){return mb(1e3*a)},mb.duration=function(a,b){var c,d,e,f=a,g=null;return mb.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=Db.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:u(g[ub])*c,h:u(g[vb])*c,m:u(g[wb])*c,s:u(g[xb])*c,ms:u(g[yb])*c}):(g=Eb.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new i(f),mb.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},mb.version=pb,mb.defaultFormat=Yb,mb.ISO_8601=function(){},mb.momentProperties=Ab,mb.updateOffset=function(){},mb.relativeTimeThreshold=function(b,c){return ec[b]===a?!1:(ec[b]=c,!0)},mb.lang=function(a,b){var c;return a?(b?D(B(a),b):null===b?(E(a),a="en"):zb[a]||F(a),c=mb.duration.fn._lang=mb.fn._lang=F(a),c._abbr):mb.fn._lang._abbr},mb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),F(a)},mb.isMoment=function(a){return a instanceof h||null!=a&&a.hasOwnProperty("_isAMomentObject")},mb.isDuration=function(a){return a instanceof i},ob=ic.length-1;ob>=0;--ob)t(ic[ob]);mb.normalizeUnits=function(a){return r(a)},mb.invalid=function(a){var b=mb.utc(0/0);return null!=a?j(b._pf,a):b._pf.userInvalidated=!0,b},mb.parseZone=function(){return mb.apply(null,arguments).parseZone()},mb.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)},j(mb.fn=h.prototype,{clone:function(){return mb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=mb(this).utc();return 0<a.year()&&a.year()<=9999?I(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):I(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return A(this)},isDSTShifted:function(){return this._a?this.isValid()&&q(this._a,(this._isUTC?mb.utc(this._a):mb(this._a)).toArray())>0:!1},parsingFlags:function(){return j({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=I(this,a||mb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a&&"string"==typeof b?mb.duration(isNaN(+b)?+a:+b,isNaN(+b)?b:a):"string"==typeof a?mb.duration(+b,a):mb.duration(a,b),n(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a&&"string"==typeof b?mb.duration(isNaN(+b)?+a:+b,isNaN(+b)?b:a):"string"==typeof a?mb.duration(+b,a):mb.duration(a,b),n(this,c,-1),this},diff:function(a,b,c){var d,e,f=C(a,this),g=6e4*(this.zone()-f.zone());return b=r(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-mb(this).startOf("month")-(f-mb(f).startOf("month")))/d,e-=6e4*(this.zone()-mb(this).startOf("month").zone()-(f.zone()-mb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:l(e)},from:function(a,b){return mb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(mb(),a)},calendar:function(a){var b=a||mb(),c=C(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){return y(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=$(a,this.lang()),this.add({d:a-b})):b},month:ib("Month",!0),startOf:function(a){switch(a=r(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=r(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+mb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+mb(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+C(a,this).startOf(b)},min:d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=mb.apply(null,arguments),this>a?this:a}),max:d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=mb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=L(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?n(this,mb.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,mb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?mb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return v(this.year(),this.month())},dayOfYear:function(a){var b=rb((mb(this).startOf("day")-mb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=bb(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=bb(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=bb(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return w(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return w(this.year(),a.dow,a.doy)},get:function(a){return a=r(a),this[a]()},set:function(a,b){return a=r(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=F(b),this)}}),mb.fn.millisecond=mb.fn.milliseconds=ib("Milliseconds",!1),mb.fn.second=mb.fn.seconds=ib("Seconds",!1),mb.fn.minute=mb.fn.minutes=ib("Minutes",!1),mb.fn.hour=mb.fn.hours=ib("Hours",!0),mb.fn.date=ib("Date",!0),mb.fn.dates=d("dates accessor is deprecated. Use date instead.",ib("Date",!0)),mb.fn.year=ib("FullYear",!0),mb.fn.years=d("years accessor is deprecated. Use year instead.",ib("FullYear",!0)),mb.fn.days=mb.fn.day,mb.fn.months=mb.fn.month,mb.fn.weeks=mb.fn.week,mb.fn.isoWeeks=mb.fn.isoWeek,mb.fn.quarters=mb.fn.quarter,mb.fn.toJSON=mb.fn.toISOString,j(mb.duration.fn=i.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=l(e/1e3),h.seconds=a%60,b=l(a/60),h.minutes=b%60,c=l(b/60),h.hours=c%24,f+=l(c/24),h.days=f%30,g+=l(f/30),h.months=g%12,d=l(g/12),h.years=d},weeks:function(){return l(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)},humanize:function(a){var b=+this,c=ab(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=mb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=mb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=r(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=r(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:mb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(ob in ac)ac.hasOwnProperty(ob)&&(kb(ob,ac[ob]),jb(ob.toLowerCase()));kb("Weeks",6048e5),mb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},mb.lang("en",{ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Bb?module.exports=mb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(qb.moment=nb),mb}),lb(!0)):lb()}).call(this);
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


(function () { function e() { } function t(e, t) { for (var n = e.length; n--;) if (e[n].listener === t) return n; return -1 } function n(e) { return function () { return this[e].apply(this, arguments) } } var i = e.prototype, r = this, o = r.EventEmitter; i.getListeners = function (e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function (e) { var t, n = []; for (t = 0; e.length > t; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function (e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function (e, n) { var i, r = this.getListenersAsObject(e), o = "object" == typeof n; for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 }); return this }, i.on = n("addListener"), i.addOnceListener = function (e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function (e) { return this.getListeners(e), this }, i.defineEvents = function (e) { for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function (e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function (e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function (e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function (e, t, n) { var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners; if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r)); return this }, i.removeEvent = function (e) { var t, n = typeof e, i = this._getEvents(); if ("string" === n) delete i[e]; else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events; return this }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) { var n, i, r, o, s = this.getListenersAsObject(e); for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener); return this }, i.trigger = n("emitEvent"), i.emit = function (e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function (e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function () { return this._events || (this._events = {}) }, e.noConflict = function () { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e }).call(this), function (e) { function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n } var n = document.documentElement, i = function () { }; n.addEventListener ? i = function (e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function (e, n, i) { e[n + i] = i.handleEvent ? function () { var n = t(e); i.handleEvent.call(i, n) } : function () { var n = t(e); i.call(e, n) }, e.attachEvent("on" + n, e[n + i]) }); var r = function () { }; n.removeEventListener ? r = function (e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function (e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } }); var o = { bind: i, unbind: r }; "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o }(this), function (e, t) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function (e, t, n) { function i(e, t) { for (var n in t) e[n] = t[n]; return e } function r(e) { return "[object Array]" === d.call(e) } function o(e) { var t = []; if (r(e)) t = e; else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]); else t.push(e); return t } function s(e, t, n) { if (!(this instanceof s)) return new s(e, t); "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred); var r = this; setTimeout(function () { r.check() }) } function f(e) { this.img = e } function c(e) { this.src = e, v[e] = this } var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString; s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () { this.images = []; for (var e = 0, t = this.elements.length; t > e; e++) { var n = this.elements[e]; "IMG" === n.nodeName && this.addImage(n); var i = n.nodeType; if (i && (1 === i || 9 === i || 11 === i)) for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) { var f = r[o]; this.addImage(f) } } }, s.prototype.addImage = function (e) { var t = new f(e); this.images.push(t) }, s.prototype.check = function () { function e(e, r) { return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 } var t = this, n = 0, i = this.images.length; if (this.hasAnyBroken = !1, !i) return this.complete(), void 0; for (var r = 0; i > r; r++) { var o = this.images[r]; o.on("confirm", e), o.check() } }, s.prototype.progress = function (e) { this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded; var t = this; setTimeout(function () { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) }) }, s.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; this.isComplete = !0; var t = this; setTimeout(function () { if (t.emit(e, t), t.emit("always", t), t.jqDeferred) { var n = t.hasAnyBroken ? "reject" : "resolve"; t.jqDeferred[n](t) } }) }, a && (a.fn.imagesLoaded = function (e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(a(this)) }), f.prototype = new t, f.prototype.check = function () { var e = v[this.img.src] || new c(this.img.src); if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0; if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0; var t = this; e.on("confirm", function (e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check() }, f.prototype.confirm = function (e, t) { this.isLoaded = e, this.emit("confirm", this, t) }; var v = {}; return c.prototype = new t, c.prototype.check = function () { if (!this.isChecked) { var e = new Image; n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0 } }, c.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, c.prototype.onload = function (e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, c.prototype.onerror = function (e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, c.prototype.confirm = function (e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, c.prototype.unbindProxyEvents = function (e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s });
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () { var n = this, t = n._, r = Array.prototype, e = Object.prototype, u = Function.prototype, i = r.push, a = r.slice, o = r.concat, l = e.toString, c = e.hasOwnProperty, f = Array.isArray, s = Object.keys, p = u.bind, h = function (n) { return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : n._ = h, h.VERSION = "1.7.0"; var g = function (n, t, r) { if (t === void 0) return n; switch (null == r ? 3 : r) { case 1: return function (r) { return n.call(t, r) }; case 2: return function (r, e) { return n.call(t, r, e) }; case 3: return function (r, e, u) { return n.call(t, r, e, u) }; case 4: return function (r, e, u, i) { return n.call(t, r, e, u, i) } } return function () { return n.apply(t, arguments) } }; h.iteratee = function (n, t, r) { return null == n ? h.identity : h.isFunction(n) ? g(n, t, r) : h.isObject(n) ? h.matches(n) : h.property(n) }, h.each = h.forEach = function (n, t, r) { if (null == n) return n; t = g(t, r); var e, u = n.length; if (u === +u) for (e = 0; u > e; e++) t(n[e], e, n); else { var i = h.keys(n); for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n) } return n }, h.map = h.collect = function (n, t, r) { if (null == n) return []; t = h.iteratee(t, r); for (var e, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++) e = u ? u[o] : o, a[o] = t(n[e], e, n); return a }; var v = "Reduce of empty array with no initial value"; h.reduce = h.foldl = h.inject = function (n, t, r, e) { null == n && (n = []), t = g(t, e, 4); var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length, o = 0; if (arguments.length < 3) { if (!a) throw new TypeError(v); r = n[i ? i[o++] : o++] } for (; a > o; o++) u = i ? i[o] : o, r = t(r, n[u], u, n); return r }, h.reduceRight = h.foldr = function (n, t, r, e) { null == n && (n = []), t = g(t, e, 4); var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length; if (arguments.length < 3) { if (!a) throw new TypeError(v); r = n[i ? i[--a] : --a] } for (; a--;) u = i ? i[a] : a, r = t(r, n[u], u, n); return r }, h.find = h.detect = function (n, t, r) { var e; return t = h.iteratee(t, r), h.some(n, function (n, r, u) { return t(n, r, u) ? (e = n, !0) : void 0 }), e }, h.filter = h.select = function (n, t, r) { var e = []; return null == n ? e : (t = h.iteratee(t, r), h.each(n, function (n, r, u) { t(n, r, u) && e.push(n) }), e) }, h.reject = function (n, t, r) { return h.filter(n, h.negate(h.iteratee(t)), r) }, h.every = h.all = function (n, t, r) { if (null == n) return !0; t = h.iteratee(t, r); var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length; for (e = 0; a > e; e++) if (u = i ? i[e] : e, !t(n[u], u, n)) return !1; return !0 }, h.some = h.any = function (n, t, r) { if (null == n) return !1; t = h.iteratee(t, r); var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length; for (e = 0; a > e; e++) if (u = i ? i[e] : e, t(n[u], u, n)) return !0; return !1 }, h.contains = h.include = function (n, t) { return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)), h.indexOf(n, t) >= 0) }, h.invoke = function (n, t) { var r = a.call(arguments, 2), e = h.isFunction(t); return h.map(n, function (n) { return (e ? t : n[t]).apply(n, r) }) }, h.pluck = function (n, t) { return h.map(n, h.property(t)) }, h.where = function (n, t) { return h.filter(n, h.matches(t)) }, h.findWhere = function (n, t) { return h.find(n, h.matches(t)) }, h.max = function (n, t, r) { var e, u, i = -1 / 0, a = -1 / 0; if (null == t && null != n) { n = n.length === +n.length ? n : h.values(n); for (var o = 0, l = n.length; l > o; o++) e = n[o], e > i && (i = e) } else t = h.iteratee(t, r), h.each(n, function (n, r, e) { u = t(n, r, e), (u > a || u === -1 / 0 && i === -1 / 0) && (i = n, a = u) }); return i }, h.min = function (n, t, r) { var e, u, i = 1 / 0, a = 1 / 0; if (null == t && null != n) { n = n.length === +n.length ? n : h.values(n); for (var o = 0, l = n.length; l > o; o++) e = n[o], i > e && (i = e) } else t = h.iteratee(t, r), h.each(n, function (n, r, e) { u = t(n, r, e), (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n, a = u) }); return i }, h.shuffle = function (n) { for (var t, r = n && n.length === +n.length ? n : h.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = h.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i]; return u }, h.sample = function (n, t, r) { return null == t || r ? (n.length !== +n.length && (n = h.values(n)), n[h.random(n.length - 1)]) : h.shuffle(n).slice(0, Math.max(0, t)) }, h.sortBy = function (n, t, r) { return t = h.iteratee(t, r), h.pluck(h.map(n, function (n, r, e) { return { value: n, index: r, criteria: t(n, r, e) } }).sort(function (n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index - t.index }), "value") }; var m = function (n) { return function (t, r, e) { var u = {}; return r = h.iteratee(r, e), h.each(t, function (e, i) { var a = r(e, i, t); n(u, e, a) }), u } }; h.groupBy = m(function (n, t, r) { h.has(n, r) ? n[r].push(t) : n[r] = [t] }), h.indexBy = m(function (n, t, r) { n[r] = t }), h.countBy = m(function (n, t, r) { h.has(n, r) ? n[r]++ : n[r] = 1 }), h.sortedIndex = function (n, t, r, e) { r = h.iteratee(r, e, 1); for (var u = r(t), i = 0, a = n.length; a > i;) { var o = i + a >>> 1; r(n[o]) < u ? i = o + 1 : a = o } return i }, h.toArray = function (n) { return n ? h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n) : [] }, h.size = function (n) { return null == n ? 0 : n.length === +n.length ? n.length : h.keys(n).length }, h.partition = function (n, t, r) { t = h.iteratee(t, r); var e = [], u = []; return h.each(n, function (n, r, i) { (t(n, r, i) ? e : u).push(n) }), [e, u] }, h.first = h.head = h.take = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : a.call(n, 0, t) }, h.initial = function (n, t, r) { return a.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t))) }, h.last = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0)) }, h.rest = h.tail = h.drop = function (n, t, r) { return a.call(n, null == t || r ? 1 : t) }, h.compact = function (n) { return h.filter(n, h.identity) }; var y = function (n, t, r, e) { if (t && h.every(n, h.isArray)) return o.apply(e, n); for (var u = 0, a = n.length; a > u; u++) { var l = n[u]; h.isArray(l) || h.isArguments(l) ? t ? i.apply(e, l) : y(l, t, r, e) : r || e.push(l) } return e }; h.flatten = function (n, t) { return y(n, t, !1, []) }, h.without = function (n) { return h.difference(n, a.call(arguments, 1)) }, h.uniq = h.unique = function (n, t, r, e) { if (null == n) return []; h.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = h.iteratee(r, e)); for (var u = [], i = [], a = 0, o = n.length; o > a; a++) { var l = n[a]; if (t) a && i === l || u.push(l), i = l; else if (r) { var c = r(l, a, n); h.indexOf(i, c) < 0 && (i.push(c), u.push(l)) } else h.indexOf(u, l) < 0 && u.push(l) } return u }, h.union = function () { return h.uniq(y(arguments, !0, !0, [])) }, h.intersection = function (n) { if (null == n) return []; for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) { var i = n[e]; if (!h.contains(t, i)) { for (var a = 1; r > a && h.contains(arguments[a], i) ; a++); a === r && t.push(i) } } return t }, h.difference = function (n) { var t = y(a.call(arguments, 1), !0, !0, []); return h.filter(n, function (n) { return !h.contains(t, n) }) }, h.zip = function (n) { if (null == n) return []; for (var t = h.max(arguments, "length").length, r = Array(t), e = 0; t > e; e++) r[e] = h.pluck(arguments, e); return r }, h.object = function (n, t) { if (null == n) return {}; for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, h.indexOf = function (n, t, r) { if (null == n) return -1; var e = 0, u = n.length; if (r) { if ("number" != typeof r) return e = h.sortedIndex(n, t), n[e] === t ? e : -1; e = 0 > r ? Math.max(0, u + r) : r } for (; u > e; e++) if (n[e] === t) return e; return -1 }, h.lastIndexOf = function (n, t, r) { if (null == n) return -1; var e = n.length; for ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)) ; --e >= 0;) if (n[e] === t) return e; return -1 }, h.range = function (n, t, r) { arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n; return u }; var d = function () { }; h.bind = function (n, t) { var r, e; if (p && n.bind === p) return p.apply(n, a.call(arguments, 1)); if (!h.isFunction(n)) throw new TypeError("Bind must be called on a function"); return r = a.call(arguments, 2), e = function () { if (!(this instanceof e)) return n.apply(t, r.concat(a.call(arguments))); d.prototype = n.prototype; var u = new d; d.prototype = null; var i = n.apply(u, r.concat(a.call(arguments))); return h.isObject(i) ? i : u } }, h.partial = function (n) { var t = a.call(arguments, 1); return function () { for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === h && (e[u] = arguments[r++]); for (; r < arguments.length;) e.push(arguments[r++]); return n.apply(this, e) } }, h.bindAll = function (n) { var t, r, e = arguments.length; if (1 >= e) throw new Error("bindAll must be passed function names"); for (t = 1; e > t; t++) r = arguments[t], n[r] = h.bind(n[r], n); return n }, h.memoize = function (n, t) { var r = function (e) { var u = r.cache, i = t ? t.apply(this, arguments) : e; return h.has(u, i) || (u[i] = n.apply(this, arguments)), u[i] }; return r.cache = {}, r }, h.delay = function (n, t) { var r = a.call(arguments, 2); return setTimeout(function () { return n.apply(null, r) }, t) }, h.defer = function (n) { return h.delay.apply(h, [n, 1].concat(a.call(arguments, 1))) }, h.throttle = function (n, t, r) { var e, u, i, a = null, o = 0; r || (r = {}); var l = function () { o = r.leading === !1 ? 0 : h.now(), a = null, i = n.apply(e, u), a || (e = u = null) }; return function () { var c = h.now(); o || r.leading !== !1 || (o = c); var f = t - (c - o); return e = this, u = arguments, 0 >= f || f > t ? (clearTimeout(a), a = null, o = c, i = n.apply(e, u), a || (e = u = null)) : a || r.trailing === !1 || (a = setTimeout(l, f)), i } }, h.debounce = function (n, t, r) { var e, u, i, a, o, l = function () { var c = h.now() - a; t > c && c > 0 ? e = setTimeout(l, t - c) : (e = null, r || (o = n.apply(i, u), e || (i = u = null))) }; return function () { i = this, u = arguments, a = h.now(); var c = r && !e; return e || (e = setTimeout(l, t)), c && (o = n.apply(i, u), i = u = null), o } }, h.wrap = function (n, t) { return h.partial(t, n) }, h.negate = function (n) { return function () { return !n.apply(this, arguments) } }, h.compose = function () { var n = arguments, t = n.length - 1; return function () { for (var r = t, e = n[t].apply(this, arguments) ; r--;) e = n[r].call(this, e); return e } }, h.after = function (n, t) { return function () { return --n < 1 ? t.apply(this, arguments) : void 0 } }, h.before = function (n, t) { var r; return function () { return --n > 0 ? r = t.apply(this, arguments) : t = null, r } }, h.once = h.partial(h.before, 2), h.keys = function (n) { if (!h.isObject(n)) return []; if (s) return s(n); var t = []; for (var r in n) h.has(n, r) && t.push(r); return t }, h.values = function (n) { for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]]; return e }, h.pairs = function (n) { for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]]; return e }, h.invert = function (n) { for (var t = {}, r = h.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e]; return t }, h.functions = h.methods = function (n) { var t = []; for (var r in n) h.isFunction(n[r]) && t.push(r); return t.sort() }, h.extend = function (n) { if (!h.isObject(n)) return n; for (var t, r, e = 1, u = arguments.length; u > e; e++) { t = arguments[e]; for (r in t) c.call(t, r) && (n[r] = t[r]) } return n }, h.pick = function (n, t, r) { var e, u = {}; if (null == n) return u; if (h.isFunction(t)) { t = g(t, r); for (e in n) { var i = n[e]; t(i, e, n) && (u[e] = i) } } else { var l = o.apply([], a.call(arguments, 1)); n = new Object(n); for (var c = 0, f = l.length; f > c; c++) e = l[c], e in n && (u[e] = n[e]) } return u }, h.omit = function (n, t, r) { if (h.isFunction(t)) t = h.negate(t); else { var e = h.map(o.apply([], a.call(arguments, 1)), String); t = function (n, t) { return !h.contains(e, t) } } return h.pick(n, t, r) }, h.defaults = function (n) { if (!h.isObject(n)) return n; for (var t = 1, r = arguments.length; r > t; t++) { var e = arguments[t]; for (var u in e) n[u] === void 0 && (n[u] = e[u]) } return n }, h.clone = function (n) { return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n }, h.tap = function (n, t) { return t(n), n }; var b = function (n, t, r, e) { if (n === t) return 0 !== n || 1 / n === 1 / t; if (null == n || null == t) return n === t; n instanceof h && (n = n._wrapped), t instanceof h && (t = t._wrapped); var u = l.call(n); if (u !== l.call(t)) return !1; switch (u) { case "[object RegExp]": case "[object String]": return "" + n == "" + t; case "[object Number]": return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t; case "[object Date]": case "[object Boolean]": return +n === +t } if ("object" != typeof n || "object" != typeof t) return !1; for (var i = r.length; i--;) if (r[i] === n) return e[i] === t; var a = n.constructor, o = t.constructor; if (a !== o && "constructor" in n && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o)) return !1; r.push(n), e.push(t); var c, f; if ("[object Array]" === u) { if (c = n.length, f = c === t.length) for (; c-- && (f = b(n[c], t[c], r, e)) ;); } else { var s, p = h.keys(n); if (c = p.length, f = h.keys(t).length === c) for (; c-- && (s = p[c], f = h.has(t, s) && b(n[s], t[s], r, e)) ;); } return r.pop(), e.pop(), f }; h.isEqual = function (n, t) { return b(n, t, [], []) }, h.isEmpty = function (n) { if (null == n) return !0; if (h.isArray(n) || h.isString(n) || h.isArguments(n)) return 0 === n.length; for (var t in n) if (h.has(n, t)) return !1; return !0 }, h.isElement = function (n) { return !(!n || 1 !== n.nodeType) }, h.isArray = f || function (n) { return "[object Array]" === l.call(n) }, h.isObject = function (n) { var t = typeof n; return "function" === t || "object" === t && !!n }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) { h["is" + n] = function (t) { return l.call(t) === "[object " + n + "]" } }), h.isArguments(arguments) || (h.isArguments = function (n) { return h.has(n, "callee") }), "function" != typeof /./ && (h.isFunction = function (n) { return "function" == typeof n || !1 }), h.isFinite = function (n) { return isFinite(n) && !isNaN(parseFloat(n)) }, h.isNaN = function (n) { return h.isNumber(n) && n !== +n }, h.isBoolean = function (n) { return n === !0 || n === !1 || "[object Boolean]" === l.call(n) }, h.isNull = function (n) { return null === n }, h.isUndefined = function (n) { return n === void 0 }, h.has = function (n, t) { return null != n && c.call(n, t) }, h.noConflict = function () { return n._ = t, this }, h.identity = function (n) { return n }, h.constant = function (n) { return function () { return n } }, h.noop = function () { }, h.property = function (n) { return function (t) { return t[n] } }, h.matches = function (n) { var t = h.pairs(n), r = t.length; return function (n) { if (null == n) return !r; n = new Object(n); for (var e = 0; r > e; e++) { var u = t[e], i = u[0]; if (u[1] !== n[i] || !(i in n)) return !1 } return !0 } }, h.times = function (n, t, r) { var e = Array(Math.max(0, n)); t = g(t, r, 1); for (var u = 0; n > u; u++) e[u] = t(u); return e }, h.random = function (n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, h.now = Date.now || function () { return (new Date).getTime() }; var _ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, w = h.invert(_), j = function (n) { var t = function (t) { return n[t] }, r = "(?:" + h.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n } }; h.escape = j(_), h.unescape = j(w), h.result = function (n, t) { if (null == n) return void 0; var r = n[t]; return h.isFunction(r) ? n[t]() : r }; var x = 0; h.uniqueId = function (n) { var t = ++x + ""; return n ? n + t : t }, h.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var A = /(.)^/, k = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, O = /\\|'|\r|\n|\u2028|\u2029/g, F = function (n) { return "\\" + k[n] }; h.template = function (n, t, r) { !t && r && (t = r), t = h.defaults({}, t, h.templateSettings); var e = RegExp([(t.escape || A).source, (t.interpolate || A).source, (t.evaluate || A).source].join("|") + "|$", "g"), u = 0, i = "__p+='"; n.replace(e, function (t, r, e, a, o) { return i += n.slice(u, o).replace(O, F), u = o + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : a && (i += "';\n" + a + "\n__p+='"), t }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n"; try { var a = new Function(t.variable || "obj", "_", i) } catch (o) { throw o.source = i, o } var l = function (n) { return a.call(this, n, h) }, c = t.variable || "obj"; return l.source = "function(" + c + "){\n" + i + "}", l }, h.chain = function (n) { var t = h(n); return t._chain = !0, t }; var E = function (n) { return this._chain ? h(n).chain() : n }; h.mixin = function (n) { h.each(h.functions(n), function (t) { var r = h[t] = n[t]; h.prototype[t] = function () { var n = [this._wrapped]; return i.apply(n, arguments), E.call(this, r.apply(h, n)) } }) }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) { var t = r[n]; h.prototype[n] = function () { var r = this._wrapped; return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], E.call(this, r) } }), h.each(["concat", "join", "slice"], function (n) { var t = r[n]; h.prototype[n] = function () { return E.call(this, t.apply(this._wrapped, arguments)) } }), h.prototype.value = function () { return this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function () { return h }) }).call(this);
//# sourceMappingURL=underscore-min.map

;
(function (Blogger, $, undefined) {

    Blogger.GetPosts = function () {
        $.ajax({
            type: "GET",
            url: 'https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/posts?maxResults=9&key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk',
            dataType: "json",
            async: false,
            processData: "false",
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error on GetPosts: " + url);
            },
            success: function (data) {
                Blogger.posts = data.items;
                Blogger.posts.forEach(function (post) {
                    convertLinkyToolsFromScript(post);
                    setThumbnail(post);
                });
            }
        });
    };

    Blogger.GetPostById = function (postId) {
        $.ajax({
            type: "GET",
            url: 'https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/posts/' + postId + '?key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk',
            dataType: "json",
            async: false,
            processData: "false",
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error on GetPostById: " + url);
            },
            success: function (data) {
                Blogger.posts = data;
                convertLinkyToolsFromScript(Blogger.posts);
                setThumbnail(Blogger.posts);
            }
        });
    };

    Blogger.GetArchivePosts = function () {
        $.ajax({
            type: "GET",
            url: 'https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/posts?maxResults=500&fetchImages=false&key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk',
            dataType: "json",
            async: false,
            processData: "false",
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Error in GetArchivePosts: " + url);
            },
            success: function (data) {
                Blogger.posts = _.chain(data.items)
                    //add published on date of MMMM YYYY
                    .map(function(post, key) {
                        post.publishedOn = moment(post.published).format('MMMM YYYY');
                        return post;
                    })
                    //group by published on
                    .groupBy('publishedOn')
                    //map the grouped object back to an array with grouped posts and publishedOn properties
                    .map(function(posts, key) {
                        return {
                            group: key,
                            posts: posts
                        }
                    })
                    .value();
            }
        });
    };

    Blogger.GetSearchedPosts = function (searchKey) {
        $.ajax({
            type: "GET",
            url: 'https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/posts/search?q=' + searchKey + '&key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk',
            dataType: "json",
            async: false,
            processData: "false",
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error on GetSearchedPosts: " + url);
            },
            success: function (data) {
                if (data.items != undefined) {
                    Blogger.posts = data.items;
                    Blogger.posts.forEach(function (post) {
                        setThumbnail(post);
                    });

                    $('.search-description').prepend('<h4>Top search results for: ' + window.location.href.match('searchKey=(.*)')[1] + '</h4> (' + Blogger.posts.length + ' results)');
                } else {
                    $('.search-description').prepend('<h4>No results found for: ' + window.location.href.match('searchKey=(.*)')[1] + '</h4>');
                }
            }
        });
    };

    //Requires that Blogger.posts is an obj, not an array
    Blogger.GetRelatedPosts = function () {
        Blogger.posts.labels.forEach(function (label) {
            $.ajax({
                type: "GET",
                url: 'https://www.googleapis.com/blogger/v3/blogs/5073145937869562696/posts/search?q=' + label + '&fields=items(id%2Cpublished%2Ctitle%2Ccontent)&key=AIzaSyBxl86QJ7gRccq_egFmP3J6Zhy3cQLluIk',
                dataType: "json",
                async: false,
                processData: "false",
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("Error on GetRelatedPosts: " + url);
                },
                success: function (data) {
                    Blogger.relatedPosts = _.filter(data.items.splice(0,6), function (post) {
                        setThumbnail(post);
                        return post.id != Blogger.posts.id && !_.contains(Blogger.relatedPosts, post);
                    });
                }
            });
        });
    };

    function setThumbnail(post) {
        var thumbnail = post.content.match('<img class="post-thumbnail".*/>');

        if (thumbnail != null)
            post.thumbnailUrl = thumbnail[0].match('http.*jpg|http.*png|http.*jpeg');
        else
            post.thumbnailUrl = '/assets/logo250x250.png';
    };

    function convertLinkyToolsFromScript(post) {
        var linkyScript = post.content.match(/\<script src="http:\/\/www.linkytools.com.*<\/script>/);

        if (linkyScript == null)
            return;

        var linkyId = linkyScript[0].match(/id=(.*)\"/)[1];
        var newLinkyLink = '<p style="text-align:center"><a href="http://www.linkytools.com/wordpress_list.aspx?id=' + linkyId + '&type=thumbnail" target="_blank" rel="nofollow">Click here</a> to join the Weekly Favorites link up!</p>';

        post.content = post.content.replace(linkyScript, newLinkyLink);
    };

}(window.Blogger = window.Blogger || {}, jQuery))

// Keep for reference in case the need for popular posts returns.
//Blogger.GetPopularThreads = function () {
//    $.ajax({
//        type: "GET",
//        url: 'https://disqus.com/api/3.0/threads/listPopular.json?forum=fancythingsblog&interval=90d&limit=9&api_key=hfBewKMoMzDCj1FeyswsLVmBC5Gi0FvDI3ED6Or1iZueKDKubbvPnh6NolyhGdaX',
//        dataType: "json",
//        async: false,
//        processData: "false",
//        beforeSend: function (jqXHR, settings) {
//            //start timer gif
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            alert("error: " + url);
//        },
//        success: function (data) {
//            popularThreads = data.response;
//            popularThreads.forEach(function (post) {
//                setThumbnail(post);
//            });
//        }
//    });
//};
(function (BlogPost, $, undefined) {

    $('img[src*=blogspot]').addClass('img-responsive');

    //add pinterest button to images
    $('.post-content img:not([src*=images\\.rewardstyle],.post-thumbnail,[src*=photobucket],[src*=googleusercontent])').each(function (index) {
        var image = $(this);
        var imageSource = image.attr('src');

        var pinitLink = 'http://pinterest.com/pin/create/button/?url=' + window.location.href + '&media=' + imageSource + '&description=' + $('.post-header h3').text();
        var pinitButton = '<a href="' + pinitLink + '"><i class="fa fa-pinterest"></i></a>';

        image.wrap('<div style="position:relative"></div>');
        image.after('<span class="share-icons">' + pinitButton + '</span>');
    });

}(window.BlogPost = window.BlogPost || {}, jQuery))
;
/* ========================================================================
 * Bootstrap: affix.js v3.3.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.1'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && colliderTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $('body').height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.3.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.1'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.3.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.1'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.3.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.1'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var delta = direction == 'prev' ? -1 : 1
    var activeIndex = this.getItemIndex(active)
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.3.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="collapse"]'
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

    Plugin.call($target, option)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.1'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.3.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.1'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.3.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.1'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.3.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.1'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (that.options.backdrop) that.adjustBackdrop()
      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .prependTo(this.$element)
        .on('click.dismiss.bs.modal', $.proxy(function (e) {
          if (e.target !== e.currentTarget) return
          this.options.backdrop == 'static'
            ? this.$element[0].focus.call(this.$element[0])
            : this.hide.call(this)
        }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    if (this.options.backdrop) this.adjustBackdrop()
    this.adjustDialog()
  }

  Modal.prototype.adjustBackdrop = function () {
    this.$backdrop
      .css('height', 0)
      .css('height', this.$element[0].scrollHeight)
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
    this.arrow()
      .css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isHorizontal ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.tooltip')
      var options  = typeof option == 'object' && option
      var selector = options && options.selector

      if (!data && option == 'destroy') return
      if (selector) {
        if (!data) $this.data('bs.tooltip', (data = {}))
        if (!data[selector]) data[selector] = new Tooltip(this, options)
      } else {
        if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      }
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.3.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.1'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.popover')
      var options  = typeof option == 'object' && option
      var selector = options && options.selector

      if (!data && option == 'destroy') return
      if (selector) {
        if (!data) $this.data('bs.popover', (data = {}))
        if (!data[selector]) data[selector] = new Popover(this, options)
      } else {
        if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      }
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);












/* ========================================================================
 * Bootstrap: affix.js v3.3.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.1'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && colliderTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $('body').height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.1'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.1'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.1'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var delta = direction == 'prev' ? -1 : 1
    var activeIndex = this.getItemIndex(active)
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="collapse"]'
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $.extend({}, $this.data(), { trigger: this })

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.1'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.1'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.1'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.1'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (that.options.backdrop) that.adjustBackdrop()
      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .prependTo(this.$element)
        .on('click.dismiss.bs.modal', $.proxy(function (e) {
          if (e.target !== e.currentTarget) return
          this.options.backdrop == 'static'
            ? this.$element[0].focus.call(this.$element[0])
            : this.hide.call(this)
        }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    if (this.options.backdrop) this.adjustBackdrop()
    this.adjustDialog()
  }

  Modal.prototype.adjustBackdrop = function () {
    this.$backdrop
      .css('height', 0)
      .css('height', this.$element[0].scrollHeight)
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
    this.arrow()
      .css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isHorizontal ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.tooltip')
      var options  = typeof option == 'object' && option
      var selector = options && options.selector

      if (!data && option == 'destroy') return
      if (selector) {
        if (!data) $this.data('bs.tooltip', (data = {}))
        if (!data[selector]) data[selector] = new Tooltip(this, options)
      } else {
        if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      }
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.1'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.popover')
      var options  = typeof option == 'object' && option
      var selector = options && options.selector

      if (!data && option == 'destroy') return
      if (selector) {
        if (!data) $this.data('bs.popover', (data = {}))
        if (!data[selector]) data[selector] = new Popover(this, options)
      } else {
        if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      }
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-42762536-1', 'thefancythings.com');
ga('send', 'pageview');
(function (Home, $, undefined) {

    $(".rslides").responsiveSlides({
        nav: true
    });

    $('.search input').focus(function () {
        $('.search').addClass('focused');
    });
    $('.search input').blur(function () {
        $('.search').removeClass('focused');
    });

    //set more post tiles to same height
    imagesLoaded($('.more-posts'), function () {
        resizeMorePosts();
    });

    $(window).resize(function () {
        resizeMorePosts();
    });

    function resizeMorePosts() {
        var posts = $('.more-posts .post');
        var desiredHeight = 0;

        //clear the min-height if we're in a single column view
        if (window.innerWidth < 768 && posts.css('min-height') != '0px') {
            posts.css('min-height', '');
            return;
        } 

        //else set the min-height so that all rows are equal heights
        if (window.innerWidth >= 768) {
            posts.each(function(i) {
                var innerPostHeight = $(this).find('.post-inner').outerHeight();
                desiredHeight = (innerPostHeight > desiredHeight) ? innerPostHeight : desiredHeight;
            });

            posts.css('min-height', desiredHeight + 5);
        }
    };

    $('img[src*=blogspot]').addClass('img-responsive');

    //add pinterest button to images
    $('.posts .post-inner img:not([src*=images\\.rewardstyle],.post-thumbnail,[src*=photobucket],[src*=googleusercontent])').each(function (index) {
        var image = $(this);
        var imageSource = image.attr('src');

        var pinitLink = 'http://pinterest.com/pin/create/button/?url=' + window.location.href + '&media=' + imageSource + '&description=' + $('.post-header h3').text();
        var pinitButton = '<a href="' + pinitLink + '"><i class="fa fa-pinterest"></i></a>';

        image.wrap('<div style="position:relative"></div>');
        image.after('<span class="share-icons">' + pinitButton + '</span>');
    });

}(window.Home = window.Home || {}, jQuery))
;
(function (Navbar, $, undefined) {

    new Headroom(document.querySelector('.navbar'),
        {
            tolerance: 5,
            offset: 5
        }).init();

}(window.Navbar = window.Navbar || {}, jQuery))
;
(function (Services, $, undefined) {

    $(window).resize(function () {
        resizeServices();
    });

    function resizeServices() {
        var services = $('.service');
        var desiredHeight = 0;

        //clear the min-height if we're in a single column view
        if (window.innerWidth < 768 && services.css('min-height') != '0px') {
            services.css('min-height', '');
            return;
        }

        //else set the min-height so that all rows are equal heights
        if (window.innerWidth >= 768) {
            services.each(function (i) {
                var serviceHeight = $(this).outerHeight();
                desiredHeight = (serviceHeight > desiredHeight) ? serviceHeight : desiredHeight;
            });

            services.css('min-height', desiredHeight + 5);
        }
    };

    $(document).ready(function() {
        resizeServices();
    });

}(window.Services = window.Services || {}, jQuery))
;
var source1 = $("#archive-posts-template").html();

var template1 = Handlebars.compile(source1);

var data = { archivePosts: Blogger.posts };

Handlebars.registerHelper('summary', function (postContent, length) {
    var postSummary = postContent.match('<div class="post-summary">(.*)</div>');
    if (postSummary != null) {
        return postSummary[1];
    } else { //remove once all summaries are in place
        var centerTextToRemove = postContent.match('<center>.*</center>');
        var smallTextToRemove = postContent.match('<span.*</span>');
        var content = postContent.split(centerTextToRemove).join(' ').split(smallTextToRemove).join(' ');

        return content.length > length ?
            $('<div>' + content + '</div>').text().substring(0, length) + '...' :
            $('<div>' + content + '</div>').text() + '...';
    }
});

Handlebars.registerHelper('postLink', function (postId) {
    var url = window.location.origin;
    return url + '/blogpost.html?post=' + postId;
});
var postLink = function (post) {
    var url = window.location.origin;
    return url + '/blogpost.html?post=' + post.id;
};

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

Handlebars.registerHelper('formattedDate', function (publishedDate) {
    return moment(publishedDate).format('MMMM Do YYYY');
});

Handlebars.registerHelper('twitterShareLink', function (post) {
    return 'https://twitter.com/intent/tweet?text=' + post.title + '&via=fancythingsblog&url=' + postLink(post);
});

Handlebars.registerHelper('pinterestShareLink', function (post) {
    return 'http://pinterest.com/pin/create/button/?url=' + postLink(post) + '&media=' + post.thumbnailUrl + '&description=' + post.title;
});

Handlebars.registerHelper('googleShareLink', function (post) {
    return 'https://plus.google.com/share?url=' + postLink(post);
});

Handlebars.registerHelper('emailShareLink', function (post) {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + post.title + ' on fancy things! ' + postLink(post);
});

$('#archive-posts-template').parent().append(template1(data));
var source1 = $("#blog-post-template").html();
var template1 = Handlebars.compile(source1);

var data = { blogPosts: Blogger.posts };

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

Handlebars.registerHelper('formattedDate', function (publishedDate) {
    return moment(publishedDate).format('MMMM Do YYYY');
});

Handlebars.registerHelper('postLink', function () {
    return window.location.href;
});

Handlebars.registerHelper('twitterShareLink', function () {
    return 'https://twitter.com/intent/tweet?text=' + data.blogPosts.title + '&via=fancythingsblog&url=' + window.location.href;
});

Handlebars.registerHelper('pinterestShareLink', function () {
    return 'http://pinterest.com/pin/create/button/?url=' + window.location.href + '&media=' + data.blogPosts.thumbnailUrl + '&description=' + data.blogPosts.title;
});

Handlebars.registerHelper('googleShareLink', function () {
    return 'https://plus.google.com/share?url=' + window.location.href;
});

Handlebars.registerHelper('emailShareLink', function () {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + data.blogPosts.title + ' on fancy things! ' + window.location.href;
});

$('#blog-post-template').parent().append(template1(data));
var source1 = $("#featured-post-template").html();
var template1 = Handlebars.compile(source1);

var data = { featuredPost: Blogger.posts.slice(0, 1) };

Handlebars.registerHelper('firstImage', function (postContent) {
    return postContent.match('<img.* src=".*"')[0];
});

Handlebars.registerHelper('thumbnail', function (postContent) {
    var thumbnail = postContent.match('<img class="post-thumbnail".*/>');
    var thumbnailUrl;

    if (thumbnail == null)
        thumbnailUrl = 'http://placehold.it/300x300';
    else
        thumbnailUrl = thumbnail[0].match('http.*jpg|http.*png');

    return thumbnailUrl;
});

Handlebars.registerHelper('summary', function (postContent, length) {
    var postSummary = postContent.match('<div class="post-summary">(.*)</div>');
    if (postSummary != null) {
        return postSummary[1];
    } else { //remove once all summaries are in place
        var centerTextToRemove = postContent.match('<center>.*</center>');
        var smallTextToRemove = postContent.match('<span.*</span>');
        var content = postContent.split(centerTextToRemove).join(' ').split(smallTextToRemove).join(' ');

        return content.length > length ?
            $(content).text().substring(0, length) :
            $(content).text();
    }
});

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

Handlebars.registerHelper('formattedDate', function (publishedDate) {
    return moment(publishedDate).format('MMMM Do YYYY');
});

Handlebars.registerHelper('postLink', function () {
    return postLink();
});
var postLink = function() {
    var url = window.location.href;
    return url + 'blogpost.html?post=' + data.featuredPost[0].id;
};

Handlebars.registerHelper('twitterShareLink', function () {
    return 'https://twitter.com/intent/tweet?text=' + data.featuredPost[0].title + '&via=fancythingsblog&url=' + postLink();
});

Handlebars.registerHelper('pinterestShareLink', function () {
    return 'http://pinterest.com/pin/create/button/?url=' + postLink() + '&media=' + data.featuredPost[0].thumbnailUrl + '&description=' + data.featuredPost[0].title;
});

Handlebars.registerHelper('emailShareLink', function () {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + data.featuredPost[0].title + ' on fancy things! ' + postLink();
});

$('#featured-post-template').parent().append(template1(data));
var source1 = $("#home-posts-template").html();

var template1 = Handlebars.compile(source1);

var data = { homePosts: Blogger.posts.slice(0, 3) };

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

Handlebars.registerHelper('formattedDate', function (publishedDate) {
    return moment(publishedDate).format('MMMM Do YYYY');
});

Handlebars.registerHelper('twitterShareLink', function (post) {
    return 'https://twitter.com/intent/tweet?text=' + post.title + '&via=fancythingsblog&url=' + postLink(post);
});

Handlebars.registerHelper('pinterestShareLink', function (post) {
    return 'http://pinterest.com/pin/create/button/?url=' + postLink(post) + '&media=' + post.thumbnailUrl + '&description=' + post.title;
});

Handlebars.registerHelper('googleShareLink', function (post) {
    return 'https://plus.google.com/share?url=' + postLink(post);
});

Handlebars.registerHelper('emailShareLink', function (post) {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + post.title + ' on fancy things! ' + postLink(post);
});

$('#home-posts-template').parent().append(template1(data));
var source1 = $("#more-posts-template").html();

var template1 = Handlebars.compile(source1);

var data = { morePosts: Blogger.posts.slice(3, 9) };

Handlebars.registerHelper('summary', function (postContent, length) {
    var postSummary = postContent.match('<div class="post-summary">(.*)</div>');
    if (postSummary != null) {
        return postSummary[1];
    } else { //remove once all summaries are in place
        var centerTextToRemove = postContent.match('<center>.*</center>');
        var smallTextToRemove = postContent.match('<span.*</span>');
        var content = postContent.split(centerTextToRemove).join(' ').split(smallTextToRemove).join(' ');

        return content.length > length ?
            $(content).text().substring(0, length) :
            $(content).text();
    }
});

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

Handlebars.registerHelper('twitterShareLink', function (post) {
    return 'https://twitter.com/intent/tweet?text=' + post.title + '&via=fancythingsblog&url=' + postLink(post);
});

Handlebars.registerHelper('pinterestShareLink', function (post) {
    return 'http://pinterest.com/pin/create/button/?url=' + postLink(post) + '&media=' + post.thumbnailUrl + '&description=' + post.title;
});

Handlebars.registerHelper('googleShareLink', function (post) {
    return 'https://plus.google.com/share?url=' + postLink(post);
});

Handlebars.registerHelper('emailShareLink', function (post) {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + post.title + ' on fancy things! ' + postLink(post);
});

$('#more-posts-template').parent().append(template1(data));
var source1 = $("#related-posts-template").html();

var template1 = Handlebars.compile(source1);

var data = { relatedPosts: Blogger.relatedPosts };

Handlebars.registerHelper('thumbnail', function (postContent) {
    var thumbnail = postContent.match('<img class="post-thumbnail".*/>');
    var thumbnailUrl;

    if (thumbnail == null)
        thumbnailUrl = 'http://placehold.it/250x250';
    else
        thumbnailUrl = thumbnail[0].match('http.*jpg|http.*png');

    return thumbnailUrl;
});

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

var postLink = function (post) {
    var url = window.location.href;
    return url + 'blogpost.html?post=' + post.id;
};

Handlebars.registerHelper('twitterShareLink', function (post) {
    return 'https://twitter.com/intent/tweet?text=' + post.title + '&via=fancythingsblog&url=' + postLink(post);
});

Handlebars.registerHelper('pinterestShareLink', function (post) {
    return 'http://pinterest.com/pin/create/button/?url=' + postLink(post) + '&media=' + post.thumbnailUrl + '&description=' + post.title;
});

Handlebars.registerHelper('googleShareLink', function (post) {
    return 'https://plus.google.com/share?url=' + postLink(post);
});

Handlebars.registerHelper('emailShareLink', function (post) {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + post.title + ' on fancy things! ' + postLink(post);
});

$('#related-posts-template').parent().append(template1(data));
var source1 = $("#search-posts-template").html();

var template1 = Handlebars.compile(source1);

var data = { searchPosts: Blogger.posts };

Handlebars.registerHelper('summary', function (postContent, length) {
    var postSummary = postContent.match('<div class="post-summary">(.*)</div>');
    if (postSummary != null) {
        return postSummary[1];
    } else { //remove once all summaries are in place
        var centerTextToRemove = postContent.match('<center>.*</center>');
        var smallTextToRemove = postContent.match('<span.*</span>');
        var content = postContent.split(centerTextToRemove).join(' ').split(smallTextToRemove).join(' ');

        return content.length > length ?
            $('<div>' + content + '</div>').text().substring(0, length) + '...' :
            $('<div>' + content + '</div>').text() + '...';
    }
});

Handlebars.registerHelper('postLink', function (postId) {
    var url = window.location.origin;
    return url + '/blogpost.html?post=' + postId;
});
var postLink = function (post) {
    var url = window.location.origin;
    return url + '/blogpost.html?post=' + post.id;
};

Handlebars.registerHelper('relativeDate', function (publishedDate) {
    return moment(publishedDate).startOf('day').fromNow();
});

Handlebars.registerHelper('formattedDate', function (publishedDate) {
    return moment(publishedDate).format('MMMM Do YYYY');
});

Handlebars.registerHelper('twitterShareLink', function (post) {
    return 'https://twitter.com/intent/tweet?text=' + post.title + '&via=fancythingsblog&url=' + postLink(post);
});

Handlebars.registerHelper('pinterestShareLink', function (post) {
    return 'http://pinterest.com/pin/create/button/?url=' + postLink(post) + '&media=' + post.thumbnailUrl + '&description=' + post.title;
});

Handlebars.registerHelper('googleShareLink', function (post) {
    return 'https://plus.google.com/share?url=' + postLink(post);
});

Handlebars.registerHelper('emailShareLink', function (post) {
    return 'mailto:?body=I thought you might enjoy reading this post called ' + post.title + ' on fancy things! ' + postLink(post);
});

$('#search-posts-template').parent().append(template1(data));
var source1 = $("#slideshow-template").html();
var template1 = Handlebars.compile(source1);

var data = { slideshowPosts: Blogger.posts.slice(0, 5) };

Handlebars.registerHelper('slideshowImage', function (postContent) {
    var image = postContent.match('<img .* class="post-image" />');
    var imageUrl;

    if (image == null)
        imageUrl = 'http://placehold.it/848x477';
    else
        imageUrl = image[0].match('http.*jpg|http.*png');

    return imageUrl;
});
var postLink = function (post) {
    var url = window.location.href;
    return url + 'blogpost.html?post=' + post.id;
};

$('#slideshow-template').parent().append(template1(data));
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//









;
