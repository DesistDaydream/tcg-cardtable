(function() {
    var h = {},
        mt = {},
        c = {
            id: "c701891f7a553c5ad036bd2b75b884bd",
            dm: ["digimon.card.moe"],
            js: "tongji.baidu.com/hm-web/js/",
            etrk: [],
            cetrk: [],
            cptrk: [],
            icon: '',
            ctrk: [],
            vdur: 1800000,
            age: 31536000000,
            qiao: 0,
            pt: 0,
            spa: 0,
            aet: '',
            hca: '97C7B5343FCEEE2A',
            ab: '0',
            v: 1
        };
    var u = void 0,
        v = !0,
        x = null,
        y = !1;
    mt.cookie = {};
    mt.cookie.set = function(f, b, a) {
        var e;
        a.I && (e = new Date, e.setTime(e.getTime() + a.I));
        document.cookie = f + "=" + b + (a.domain ? "; domain=" + a.domain : "") + (a.path ? "; path=" + a.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (a.sc ? "; secure" : "")
    };
    mt.cookie.get = function(f) {
        return (f = RegExp("(^| )" + f + "=([^;]*)(;|$)").exec(document.cookie)) ? f[2] : x
    };
    mt.cookie.Db = function(f, b) {
        try {
            var a = "Hm_ck_" + +new Date;
            mt.cookie.set(a, "42", {
                domain: f,
                path: b,
                I: u
            });
            var e = "42" === mt.cookie.get(a) ? "1" : "0";
            mt.cookie.set(a, "", {
                domain: f,
                path: b,
                I: -1
            });
            return e
        } catch (d) {
            return "0"
        }
    };
    mt.event = {};
    mt.event.d = function(f, b, a) {
        f.attachEvent ? f.attachEvent("on" + b, function(e) {
            a.call(f, e)
        }) : f.addEventListener && f.addEventListener(b, a, y)
    };
    (function() {
        var f = mt.event;
        mt.lang = {};
        mt.lang.h = function(b, a) {
            return "[object " + a + "]" === {}.toString.call(b)
        };
        mt.lang.k = function(b) {
            return mt.lang.h(b, "Function")
        };
        mt.lang.J = function(b) {
            return mt.lang.h(b, "Object")
        };
        mt.lang.mc = function(b) {
            return mt.lang.h(b, "Number") && isFinite(b)
        };
        mt.lang.fa = function(b) {
            return mt.lang.h(b, "String")
        };
        mt.lang.isArray = function(b) {
            return mt.lang.h(b, "Array")
        };
        mt.lang.w = function(b) {
            return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
        };
        mt.lang.trim =
            function(b) {
                return b.replace(/^\s+|\s+$/g, "")
            };
        mt.lang.find = function(b, a, e) {
            if (mt.lang.isArray(b) && mt.lang.k(a))
                for (var d = b.length, g = 0; g < d; g++)
                    if (g in b && a.call(e || b, b[g], g)) return b[g];
            return x
        };
        mt.lang.da = function(b, a) {
            return mt.lang.find(b, function(e) {
                return e === a
            }) != x
        };
        mt.lang.filter = function(b, a) {
            var e = -1,
                d = 0,
                g = b == x ? 0 : b.length,
                l = [];
            if (mt.lang.k(a))
                for (; ++e < g;) {
                    var k = b[e];
                    a(k, e, b) && (l[d++] = k)
                }
            return l
        };
        mt.lang.unique = function(b, a) {
            var e = b.length,
                d = b.slice(0),
                g, l;
            for (mt.lang.k(a) || (a = function(a,
                    e) {
                    return a === e
                }); 0 < --e;) {
                l = d[e];
                for (g = e; g--;)
                    if (a(l, d[g])) {
                        d.splice(e, 1);
                        break
                    }
            }
            return d
        };
        mt.lang.oc = function(b, a) {
            function e(a) {
                a = (d + d + Number(a).toString(2)).slice(-64);
                return [parseInt(a.slice(0, 32), 2), parseInt(a.slice(-32), 2)]
            }
            var d = "00000000000000000000000000000000",
                g = e(b),
                l = e(a);
            return parseInt((d + ((g[0] | l[0]) >>> 0).toString(2)).slice(-32) + (d + ((g[1] | l[1]) >>> 0).toString(2)).slice(-32), 2)
        };
        mt.lang.extend = function(b) {
            for (var a = Array.prototype.slice.call(arguments, 1), e = 0; e < a.length; e++) {
                var d = a[e],
                    g;
                for (g in d) Object.prototype.hasOwnProperty.call(d, g) && d[g] && (b[g] = d[g])
            }
            return b
        };
        mt.lang.Kb = function() {
            var b = location,
                a = "protocol hostname port pathname search hash".split(" ");
            if ("object" !== typeof b || b === x) return {};
            var e = {},
                a = a || [],
                d;
            for (d in b) b.hasOwnProperty(d) && -1 !== a.indexOf(d) && (e[d] = b[d]);
            return e
        };
        mt.lang.dc = function(b) {
            function a(a, d) {
                var b = window.history,
                    l = b[a];
                b[a] = function() {
                    l.apply(b, arguments);
                    mt.lang.k(d) && d()
                }
            }
            a("pushState", function() {
                b()
            });
            a("replaceState", function() {
                b()
            });
            f.d(window,
                window.history.pushState ? "popstate" : "hashchange",
                function() {
                    b()
                })
        };
        mt.lang.Da = function() {
            var b = Date.now();
            window.performance && "function" === typeof window.performance.now && (b += performance.now());
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var e = (b + 16 * Math.random()) % 16 | 0;
                b = Math.floor(b / 16);
                return ("x" === a ? e : e & 3 | 8).toString(16)
            })
        };
        return mt.lang
    })();
    mt.url = {};
    mt.url.g = function(f, b) {
        var a = f.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return a ? a[3] : x
    };
    mt.url.eb = function(f) {
        return (f = f.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? f[2].replace(/.*@/, "") : x
    };
    mt.url.ba = function(f) {
        return (f = mt.url.eb(f)) ? f.replace(/:\d+$/, "") : f
    };
    mt.url.Bb = function(f) {
        var b = document.location.href,
            b = b.replace(/^https?:\/\//, "");
        return 0 === b.indexOf(f)
    };
    mt.url.Cb = function(f, b) {
        f = "." + f.replace(/:\d+/, "");
        b = "." + b.replace(/:\d+/, "");
        var a = f.indexOf(b);
        return -1 < a && a + b.length === f.length
    };
    mt.M = {};
    mt.M.Fa = function(f, b) {
        if (f === x) return "";
        var a, e, d = {},
            g = {},
            l = "",
            k = "",
            t = "",
            p = 2,
            n = 3,
            r = 2,
            m = [],
            q = 0,
            s = 0,
            w;
        for (w = 0; w < f.length; w += 1)
            if (l = f.charAt(w), Object.prototype.hasOwnProperty.call(d, l) || (d[l] = n++, g[l] = v), k = t + l, Object.prototype.hasOwnProperty.call(d, k)) t = k;
            else {
                if (Object.prototype.hasOwnProperty.call(g, t)) {
                    if (256 > t.charCodeAt(0)) {
                        for (a = 0; a < r; a++) q <<= 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++;
                        e = t.charCodeAt(0);
                        for (a = 0; 8 > a; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e >>= 1
                    } else {
                        e = 1;
                        for (a = 0; a < r; a++) q = q << 1 | e,
                            5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e = 0;
                        e = t.charCodeAt(0);
                        for (a = 0; 16 > a; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e >>= 1
                    }
                    p--;
                    0 === p && (p = Math.pow(2, r), r++);
                    delete g[t]
                } else {
                    e = d[t];
                    for (a = 0; a < r; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e >>= 1
                }
                p--;
                0 === p && (p = Math.pow(2, r), r++);
                d[k] = n++;
                t = String(l)
            }
        if ("" !== t) {
            if (Object.prototype.hasOwnProperty.call(g, t)) {
                if (256 > t.charCodeAt(0)) {
                    for (a = 0; a < r; a++) q <<= 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++;
                    e = t.charCodeAt(0);
                    for (a = 0; 8 > a; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)),
                        q = 0) : s++, e >>= 1
                } else {
                    e = 1;
                    for (a = 0; a < r; a++) q = q << 1 | e, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e = 0;
                    e = t.charCodeAt(0);
                    for (a = 0; 16 > a; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e >>= 1
                }
                p--;
                0 === p && (p = Math.pow(2, r), r++);
                delete g[t]
            } else {
                e = d[t];
                for (a = 0; a < r; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e >>= 1
            }
            p--;
            0 === p && r++
        }
        e = 2;
        for (a = 0; a < r; a++) q = q << 1 | e & 1, 5 === s ? (s = 0, m.push(b(q)), q = 0) : s++, e >>= 1;
        for (;;)
            if (q <<= 1, 5 === s) {
                m.push(b(q));
                break
            } else s++;
        return m.join("")
    };
    mt.M.Sa = function(f) {
        return f === x ? "" : mt.M.Fa(f, function(b) {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(b)
        })
    };
    (function() {
        var f = mt.lang,
            b = mt.url;
        mt.e = {};
        mt.e.Wa = function(a) {
            return document.getElementById(a)
        };
        mt.e.lc = function(a) {
            if (!a) return x;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCQ!")) return a;
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var e = a.split(">"), d = document.body, b = e.length - 1; 0 <= b; b--)
                    if (-1 < e[b].indexOf("#")) {
                        var l = e[b].split("#")[1];
                        (d = document.getElementById(l)) || (d = document.getElementById(decodeURIComponent(l)));
                        e = e.splice(b + 1, e.length - (b + 1));
                        break
                    }
                for (a =
                    0; d && a < e.length;) {
                    var k = String(e[a]).toLowerCase();
                    if (!("html" === k || "body" === k)) {
                        var b = 0,
                            f = e[a].match(/\[(\d+)\]/i),
                            l = [];
                        if (f) b = f[1] - 1, k = k.split("[")[0];
                        else if (1 !== d.childNodes.length) {
                            for (var p = 0, n = 0, r = d.childNodes.length; n < r; n++) {
                                var m = d.childNodes[n];
                                1 === m.nodeType && m.nodeName.toLowerCase() === k && p++;
                                if (1 < p) return x
                            }
                            if (1 !== p) return x
                        }
                        for (p = 0; p < d.childNodes.length; p++) 1 === d.childNodes[p].nodeType && d.childNodes[p].nodeName.toLowerCase() === k && l.push(d.childNodes[p]);
                        if (!l[b]) return x;
                        d = l[b]
                    }
                    a++
                }
                return d
            } catch (q) {
                return x
            }
        };
        mt.e.oa = function(a, e) {
            var d = [],
                b = [];
            if (!a) return b;
            for (; a.parentNode != x;) {
                for (var l = 0, k = 0, f = a.parentNode.childNodes.length, p = 0; p < f; p++) {
                    var n = a.parentNode.childNodes[p];
                    if (n.nodeName === a.nodeName && (l++, n === a && (k = l), 0 < k && 1 < l)) break
                }
                if ((f = "" !== a.id) && e) {
                    d.unshift("#" + encodeURIComponent(a.id));
                    break
                } else f && (f = "#" + encodeURIComponent(a.id), f = 0 < d.length ? f + ">" + d.join(">") : f, b.push(f)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < l ? "[" + k + "]" : ""));
                a = a.parentNode
            }
            b.push(d.join(">"));
            return b
        };
        mt.e.kb = function(a) {
            return (a = mt.e.oa(a, v)) && a.length ? String(a[0]) : ""
        };
        mt.e.jb = function(a) {
            return mt.e.oa(a, y)
        };
        mt.e.Xa = function(a) {
            var e;
            for (e = "A";
                (a = a.parentNode) && 1 == a.nodeType;)
                if (a.tagName == e) return a;
            return x
        };
        mt.e.$a = function(a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.e.hb = function(a) {
            var e = {
                top: 0,
                left: 0
            };
            if (!a) return e;
            var b = mt.e.$a(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (e = a.getBoundingClientRect());
            return {
                top: e.top + (window.pageYOffset || b.scrollTop) -
                    (b.clientTop || 0),
                left: e.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }
        };
        mt.e.uc = function(a, e) {
            if (a)
                for (var b = a.childNodes, g = 0, l = b.length; g < l; g++) {
                    var f = b[g];
                    if (f && 3 === f.nodeType) return b = f.textContent || f.innerText || f.nodeValue || "", f.textContent ? f.textContent = e : f.innerText ? f.innerText = e : f.nodeValue = e, b
                }
        };
        mt.e.tc = function(a, e) {
            if (!a) return {};
            var b = {};
            e = e || {};
            for (var g in e) e.hasOwnProperty(g) && e[g] !== u && (b[g] = a.getAttribute(g) || "", a.setAttribute(g, e[g]));
            return b
        };
        mt.e.getAttribute = function(a,
            b) {
            var d = a.getAttribute && a.getAttribute(b) || x;
            if (!d && a.attributes && a.attributes.length)
                for (var g = a.attributes, f = g.length, k = 0; k < f; k++) g[k].nodeName === b && (d = g[k].nodeValue);
            return d
        };
        mt.e.bb = function(a) {
            var b = "document";
            a.tagName !== u && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.e.mb = function(a) {
            var b = "";
            a.textContent ? b = f.trim(a.textContent) : a.innerText && (b = f.trim(a.innerText));
            b && (b = b.replace(/\s+/g, " ").substring(0, 255));
            return b
        };
        mt.e.kc = function(a, e) {
            var d;
            f.fa(a) && 0 === String(a).indexOf("!HMCQ!") ? (d =
                String(a), d = b.g(document.location.href, d.substring(6, d.length))) : f.fa(a) || (d = mt.e.bb(a), "input" === d && e && ("button" === a.type || "submit" === a.type) ? d = f.trim(a.value) || "" : "input" === d && !e && "password" !== a.type ? d = f.trim(a.value) || "" : "img" === d ? (d = mt.e.getAttribute, d = d(a, "alt") || d(a, "title") || d(a, "src")) : d = "body" === d || "html" === d ? ["(hm-default-content-for-", d, ")"].join("") : mt.e.mb(a));
            return String(d || "").substring(0, 255)
        };
        (function() {
            (mt.e.qc = function() {
                function a() {
                    if (!a.Q) {
                        a.Q = v;
                        for (var b = 0, e = g.length; b < e; b++) g[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(b, 1);
                        return
                    }
                    a()
                }
                var d = y,
                    g = [],
                    f;
                document.addEventListener ? f = function() {
                    document.removeEventListener("DOMContentLoaded", f, y);
                    a()
                } : document.attachEvent && (f = function() {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
                });
                (function() {
                    if (!d)
                        if (d = v, "complete" === document.readyState) a.Q = v;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, y), window.addEventListener("load",
                        a, y);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", f);
                        window.attachEvent("onload", a);
                        var g = y;
                        try {
                            g = window.frameElement == x
                        } catch (t) {}
                        document.documentElement.doScroll && g && b()
                    }
                })();
                return function(b) {
                    a.Q ? b() : g.push(b)
                }
            }()).Q = y
        })();
        return mt.e
    })();
    (function() {
        var f = mt.event;
        mt.f = {};
        mt.f.yb = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.f.cookieEnabled = navigator.cookieEnabled;
        mt.f.javaEnabled = navigator.javaEnabled();
        mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.f.Ob = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.f.colorDepth = window.screen.colorDepth || 0;
        mt.f.lb = function() {
            var b;
            b = b || document;
            return parseInt(window.pageYOffset || b.documentElement.scrollTop || b.body &&
                b.body.scrollTop || 0, 10)
        };
        mt.f.nb = function() {
            var b = document;
            return parseInt(window.innerHeight || b.documentElement.clientHeight || b.body && b.body.clientHeight || 0, 10)
        };
        mt.f.ca = function() {
            return mt.f.lb() + mt.f.nb()
        };
        mt.f.Ea = 0;
        mt.f.ob = function() {
            var b = document;
            return parseInt(window.innerWidth || b.documentElement.clientWidth || b.body.offsetWidth || 0, 10)
        };
        mt.f.orientation = 0;
        (function() {
            function b() {
                var a = 0;
                window.orientation !== u && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !==
                    u) && (a = screen.orientation.angle);
                mt.f.orientation = a;
                mt.f.Ea = mt.f.ob()
            }
            b();
            f.d(window, "orientationchange", b)
        })();
        return mt.f
    })();
    mt.C = {};
    mt.C.parse = function(f) {
        return (new Function("return (" + f + ")"))()
    };
    mt.C.stringify = function() {
        function f(b) {
            /["\\\x00-\x1f]/.test(b) && (b = b.replace(/["\\\x00-\x1f]/g, function(b) {
                var e = a[b];
                if (e) return e;
                e = b.charCodeAt();
                return "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16)
            }));
            return '"' + b + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }
        var a = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(a) {
            switch (typeof a) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "string":
                    return f(a);
                case "boolean":
                    return String(a);
                default:
                    if (a === x) return "null";
                    if (a instanceof Array) {
                        var d = ["["],
                            g = a.length,
                            l, k, t;
                        for (k = 0; k < g; k++) switch (t = a[k], typeof t) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                l && d.push(","), d.push(mt.C.stringify(t)), l = 1
                        }
                        d.push("]");
                        return d.join("")
                    }
                    if (a instanceof Date) return '"' + a.getFullYear() + "-" + b(a.getMonth() + 1) + "-" + b(a.getDate()) + "T" + b(a.getHours()) + ":" + b(a.getMinutes()) + ":" + b(a.getSeconds()) + '"';
                    l = ["{"];
                    k = mt.C.stringify;
                    for (g in a)
                        if (Object.prototype.hasOwnProperty.call(a, g)) switch (t =
                            a[g], typeof t) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                d && l.push(","), d = 1, l.push(k(g) + ":" + k(t))
                        }
                    l.push("}");
                    return l.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.V = function() {
        if (!mt.localStorage.i) try {
            mt.localStorage.i = document.createElement("input"), mt.localStorage.i.type = "hidden", mt.localStorage.i.style.display = "none", mt.localStorage.i.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.i)
        } catch (f) {
            return y
        }
        return v
    };
    mt.localStorage.set = function(f, b, a) {
        var e = new Date;
        e.setTime(e.getTime() + (a || 31536E6));
        try {
            window.localStorage ? (b = e.getTime() + "|" + b, window.localStorage.setItem(f, b)) : mt.localStorage.V() && (mt.localStorage.i.expires = e.toUTCString(), mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.setAttribute(f, b), mt.localStorage.i.save(document.location.hostname))
        } catch (d) {}
    };
    mt.localStorage.get = function(f) {
        if (window.localStorage) {
            if (f = window.localStorage.getItem(f)) {
                var b = f.indexOf("|"),
                    a = f.substring(0, b) - 0;
                if (a && a > (new Date).getTime()) return f.substring(b + 1)
            }
        } else if (mt.localStorage.V()) try {
            return mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.getAttribute(f)
        } catch (e) {}
        return x
    };
    mt.localStorage.remove = function(f) {
        if (window.localStorage) window.localStorage.removeItem(f);
        else if (mt.localStorage.V()) try {
            mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.removeAttribute(f), mt.localStorage.i.save(document.location.hostname)
        } catch (b) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function(f, b) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(f, b)
        } catch (a) {}
    };
    mt.sessionStorage.get = function(f) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(f) : x
        } catch (b) {
            return x
        }
    };
    mt.sessionStorage.remove = function(f) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(f)
        } catch (b) {}
    };
    (function() {
        var f = mt.C;
        mt.m = {};
        mt.m.log = function(b, a) {
            var e = new Image,
                d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
            window[d] = e;
            e.onload = function() {
                e.onload = x;
                e = window[d] = x;
                a && a(b)
            };
            e.src = b
        };
        mt.m.ha = function(b, a, e) {
            e = e || 0;
            mt.m.ia({
                url: b,
                method: "POST",
                headers: {
                    "Content-Type": "text/plain; charset=utf-8"
                },
                withCredentials: v,
                data: a.data,
                success: a.success,
                fail: function() {
                    2 >= e && mt.m.ha(b, a, ++e)
                }
            })
        };
        mt.m.get = function(b, a) {
            return mt.m.ia({
                url: b,
                method: "GET",
                data: a.data,
                timeout: a.timeout,
                noCache: v,
                success: a.success,
                fail: a.fail
            })
        };
        mt.m.ia = function(b) {
            function a(a) {
                var b = [],
                    d;
                for (d in a) a.hasOwnProperty(d) && b.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
                return b.join("&")
            }

            function e(a) {
                var d = b[a];
                if (d)
                    if (m && clearTimeout(m), "success" !== a) d && d(r);
                    else {
                        var e;
                        try {
                            e = f.parse(r.responseText)
                        } catch (g) {
                            d && d(r);
                            return
                        }
                        d && d(r, e)
                    }
            }
            b = b || {};
            var d = b.data;
            "object" === typeof d && (d = a(b.data || {}));
            var g = b.url,
                l = (b.method || "GET").toUpperCase(),
                k = b.headers || {},
                t = b.timeout || 0,
                p = b.noCache || y,
                n =
                b.withCredentials || y,
                r, m;
            try {
                a: if (window.XMLHttpRequest) r = new XMLHttpRequest;
                    else {
                        try {
                            r = new ActiveXObject("Microsoft.XMLHTTP");
                            break a
                        } catch (q) {}
                        r = u
                    }
                "GET" === l && (d && (g += (0 <= g.indexOf("?") ? "&" : "?") + d, d = x), p && (g += (0 <= g.indexOf("?") ? "&" : "?") + "b" + +new Date + "=1"));r.open(l, g, v);r.onreadystatechange = function() {
                    if (4 === r.readyState) {
                        var a = 0;
                        try {
                            a = r.status
                        } catch (b) {
                            e("fail");
                            return
                        }
                        200 <= a && 300 > a || 304 === a || 1223 === a ? e("success") : e("fail")
                    }
                };
                for (var s in k) k.hasOwnProperty(s) && r.setRequestHeader(s, k[s]);n && (r.withCredentials =
                    v);t && (m = setTimeout(function() {
                    r.onreadystatechange = function() {};
                    r.abort();
                    e("fail")
                }, t));r.send(d)
            }
            catch (w) {
                e("fail")
            }
            return r
        };
        return mt.m
    })();
    h.z = {
        wb: "http://tongji.baidu.com/hm-web/welcome/ico",
        ga: "hm.baidu.com/hm.gif",
        Ka: /^(tongji|hmcdn).baidu.com$/,
        Vb: "tongji.baidu.com",
        tb: "hmmd",
        ub: "hmpl",
        Yb: "utm_medium",
        sb: "hmkw",
        $b: "utm_term",
        qb: "hmci",
        Xb: "utm_content",
        vb: "hmsr",
        Zb: "utm_source",
        rb: "hmcu",
        Wb: "utm_campaign",
        sa: 0,
        H: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        R: "https:",
        Qa: 6E5,
        rc: 5E3,
        Ra: 5,
        la: 1024,
        L: 2147483647,
        Ca: "hca cc cf ci ck cl cm cp cu cw ds vl ep et ja ln lo lt rnd si su v cv lv api sn r ww p u tt".split(" "),
        pa: v,
        ec: {
            id: "data-hm-id",
            jc: "data-hm-class",
            xc: "data-hm-xpath",
            content: "data-hm-content",
            vc: "data-hm-tag",
            link: "data-hm-link"
        },
        hc: "data-hm-enabled",
        gc: "data-hm-disabled",
        Lb: "https://hmcdn.baidu.com/static/tongji/plugins/",
        wa: ["UrlChangeTracker"],
        bc: {
            pc: 0,
            wc: 1,
            nc: 2
        },
        va: "https://fclog.baidu.com/log/ocpcagl?type=behavior&emd=euc"
    };
    (function() {
        var f = {
            A: {},
            d: function(b, a) {
                this.A[b] = this.A[b] || [];
                this.A[b].push(a)
            },
            n: function(b, a) {
                this.A[b] = this.A[b] || [];
                for (var e = this.A[b].length, d = 0; d < e; d++) this.A[b][d](a)
            }
        };
        return h.l = f
    })();
    (function() {
        var f = mt.lang,
            b = /^https?:\/\//,
            a = {
                Za: function(a) {
                    var b;
                    try {
                        b = JSON.parse(decodeURIComponent(a[0]))
                    } catch (g) {}
                    return b
                },
                ta: function(b, d) {
                    return a.ua(h.c && h.c.b && h.c.b.u, b, d) || a.ua(document.location.href, b, d)
                },
                ua: function(a, d, g) {
                    if (a === u) return y;
                    b.test(d) || (a = a.replace(b, ""));
                    d = d.replace(/\/$/, "");
                    a = a.replace(/\/$/, "");
                    g && (a = a.replace(/^(https?:\/\/)?www\./, "$1"));
                    return RegExp("^" + d.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(a)
                },
                O: function(b, d) {
                    var g = a.Za(b);
                    if (!f.h(g,
                            "Undefined")) {
                        if (f.isArray(g)) {
                            for (var l = 0; l < g.length; l++)
                                if (a.ta(g[l], d)) return v;
                            return y
                        }
                        if (f.J(g)) {
                            var l = [],
                                k;
                            for (k in g) g.hasOwnProperty(k) && a.ta(k, d) && (l = l.concat(g[k]));
                            return l
                        }
                    }
                }
            };
        return h.X = a
    })();
    (function() {
        function f(a, e) {
            var d = document.createElement("script");
            d.charset = "utf-8";
            b.k(e) && (d.readyState ? d.onreadystatechange = function() {
                if ("loaded" === d.readyState || "complete" === d.readyState) d.onreadystatechange = x, e()
            } : d.onload = function() {
                e()
            });
            d.src = a;
            var g = document.getElementsByTagName("script")[0];
            g.parentNode.insertBefore(d, g)
        }
        var b = mt.lang;
        return h.load = f
    })();
    (function() {
        var f = h.z,
            b = {
                B: function() {
                    if ("" !== c.icon) {
                        var a = c.icon.split("|"),
                            b = f.wb + "?s=" + c.id,
                            d = "https://hmcdn.baidu.com/static" + a[0] + ".gif";
                        document.write("swf" === a[1] || "gif" === a[1] ? '<a href="' + b + '" target="_blank"><img border="0" src="' + d + '" width="' + a[2] + '" height="' + a[3] + '"></a>' : '<a href="' + b + '" target="_blank">' + a[0] + "</a>")
                    }
                }
            };
        h.l.d("pv-b", b.B);
        return b
    })();
    (function() {
        var f = mt.url,
            b = mt.cookie,
            a = mt.localStorage,
            e = mt.sessionStorage,
            d = {
                getData: function(d) {
                    try {
                        return b.get(d) || e.get(d) || a.get(d)
                    } catch (f) {}
                },
                setData: function(g, f, k) {
                    try {
                        b.set(g, f, {
                            domain: d.P(),
                            path: d.aa(),
                            I: k
                        }), k ? a.set(g, f, k) : e.set(g, f)
                    } catch (t) {}
                },
                removeData: function(g) {
                    try {
                        b.set(g, "", {
                            domain: d.P(),
                            path: d.aa(),
                            I: -1
                        }), e.remove(g), a.remove(g)
                    } catch (f) {}
                },
                P: function() {
                    for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
                        if (f.Cb(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                    return a
                },
                aa: function() {
                    for (var a = 0, b = c.dm.length; a < b; a++) {
                        var d = c.dm[a];
                        if (-1 < d.indexOf("/") && f.Bb(d)) return d.replace(/^[^/]+(\/.*)/, "$1") + "/"
                    }
                    return "/"
                }
            };
        return h.W = d
    })();
    (function() {
        var f = mt.lang,
            b = mt.e,
            a = h.X,
            e = {
                N: function(d, g) {
                    return function(f) {
                        var k = f.target || f.srcElement;
                        if (k) {
                            var t = a.O(g) || [],
                                p = k.getAttribute(d.U);
                            f = f.clientX + ":" + f.clientY;
                            if (p && p === f) k.removeAttribute(d.U);
                            else if (0 < t.length && (k = b.jb(k)) && k.length)
                                if (t = k.length, p = k[k.length - 1], 1E4 > t * p.split(">").length)
                                    for (p = 0; p < t; p++) e.Ba(d, k[p]);
                                else e.Ba(d, p)
                        }
                    }
                },
                Ba: function(a, b) {
                    for (var e = {}, k = String(b).split(">").length, t = 0; t < k; t++) e[b] = "", /\[1\]$/.test(b) && (e[b.substring(0, b.lastIndexOf("["))] = ""), /\]$/.test(b) ||
                        (e[b + "[1]"] = ""), b = b.substring(0, b.lastIndexOf(">"));
                    a && (f.J(a) && a.ka) && a.ka(e)
                },
                Nb: function(a, b) {
                    return function(e) {
                        (e.target || e.srcElement).setAttribute(a.U, e.clientX + ":" + e.clientY);
                        a && a.F && (b ? a.F(b) : a.F("#" + encodeURIComponent(this.id), e.type))
                    }
                }
            };
        return h.Ua = e
    })();
    (function() {
        var f = mt.e,
            b = mt.event,
            a = h.X,
            e = h.Ua,
            d = {
                U: "HM_fix",
                Ha: function() {
                    b.d(document, "click", e.N(d, c.etrk));
                    for (var g = a.O(c.etrk) || [], l = 0; l < g.length; l++) {
                        var k = g[l]; - 1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = f.Wa(k)) && b.d(k, "click", e.Nb(d)))
                    }
                },
                ka: function(b) {
                    for (var e = a.O(c.etrk) || [], f = 0; f < e.length; f++) {
                        var t = e[f];
                        b.hasOwnProperty(t) && d.F(t)
                    }
                },
                F: function(a, b) {
                    h.c.b.et = 1;
                    h.c.b.ep = "{id:" + a + ",eventType:" + (b || "click") + "}";
                    h.c.s()
                }
            };
        h.l.d("pv-b", d.Ha);
        return d
    })();
    (function() {
        var f = mt.e,
            b = mt.lang,
            a = mt.event,
            e = mt.f,
            d = h.z,
            g = h.X,
            l = [],
            k = {
                Ga: function() {
                    c.ctrk && 0 < c.ctrk.length && (a.d(document, "mouseup", k.Pa()), a.d(window, "unload", function() {
                        k.S()
                    }), setInterval(function() {
                        k.S()
                    }, d.Qa))
                },
                Pa: function() {
                    return function(a) {
                        if (g.O(c.ctrk, v) && (a = k.Ya(a), "" !== a)) {
                            var b = (d.R + "//" + d.ga + "?" + h.c.Aa().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                            b + (d.L + "").length > d.la || (b + encodeURIComponent(l.join("!") + (l.length ? "!" : "")).length + (d.L + "").length > d.la && k.S(), l.push(a),
                                (l.length >= d.Ra || /\*a\*/.test(a)) && k.S())
                        }
                    }
                },
                Ya: function(a) {
                    var d = a.target || a.srcElement,
                        g, r;
                    e.yb ? (r = Math.max(document.documentElement.scrollTop, document.body.scrollTop), g = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), g = a.clientX + g, r = a.clientY + r) : (g = a.pageX, r = a.pageY);
                    a = k.fb(a, d, g, r);
                    var m = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                    switch (c.align) {
                        case 1:
                            g -= m / 2;
                            break;
                        case 2:
                            g -= m
                    }
                    m = [];
                    m.push(g);
                    m.push(r);
                    m.push(a.Gb);
                    m.push(a.Hb);
                    m.push(a.Mb);
                    m.push(b.w(a.Jb));
                    m.push(a.ac);
                    m.push(a.pb);
                    (d = "a" === (d.tagName || "").toLowerCase() ? d : f.Xa(d)) ? (m.push("a"), m.push(b.w(encodeURIComponent(d.href)))) : m.push("b");
                    return m.join("*")
                },
                fb: function(a, d, g, r) {
                    a = f.kb(d);
                    var m = 0,
                        k = 0,
                        l = 0,
                        w = 0;
                    if (d && (m = d.offsetWidth || d.clientWidth, k = d.offsetHeight || d.clientHeight, w = f.hb(d), l = w.left, w = w.top, b.k(d.getBBox) && (k = d.getBBox(), m = k.width, k = k.height), "html" === (d.tagName || "").toLowerCase())) m = Math.max(m, d.clientWidth), k = Math.max(k, d.clientHeight);
                    return {
                        Gb: Math.round(100 *
                            ((g - l) / m)),
                        Hb: Math.round(100 * ((r - w) / k)),
                        Mb: e.orientation,
                        Jb: a,
                        ac: m,
                        pb: k
                    }
                },
                S: function() {
                    0 !== l.length && (h.c.b.et = 2, h.c.b.ep = l.join("!"), h.c.s(), l = [])
                }
            };
        h.l.d("pv-b", k.Ga);
        return k
    })();
    (function() {
        var f = mt.e,
            b = mt.event,
            a = h.l,
            e = {
                N: function() {
                    return function(a) {
                        var b = a.target || a.srcElement;
                        if (b)
                            if (a = f.getAttribute(b, "data-agl-cvt"), a !== x) e.F(a);
                            else
                                for (; b.parentNode != x;)
                                    if (b = b.parentNode, f.getAttribute(b, "data-agl-cvt") != x) {
                                        e.F(a);
                                        break
                                    }
                    }
                },
                F: function(a) {
                    h.c.xa({
                        a: [{
                            _tag: "window",
                            "data-agl-cvt": a
                        }],
                        type: "click"
                    })
                }
            },
            d = window._agl;
        (!d || !d.isAngelia) && a.d("pv-b", function() {
            b.d(document, "click", e.N());
            "ontouchend" in document && b.d(window, "touchend", e.N())
        });
        return e
    })();
    (function() {
        function f() {
            return function() {
                h.c.b.et = 3;
                h.c.b.ep = h.Z.ib() + "," + h.Z.cb();
                h.c.b.hca = c.hca;
                h.c.s()
            }
        }

        function b() {
            clearTimeout(C);
            var a;
            s && (a = "visible" == document[s]);
            w && (a = !document[w]);
            k = "undefined" == typeof a ? v : a;
            if ((!l || !t) && k && p) q = v, r = +new Date;
            else if (l && t && (!k || !p)) q = y, m += +new Date - r;
            l = k;
            t = p;
            C = setTimeout(b, 100)
        }

        function a(a) {
            var b = document,
                d = "";
            if (a in b) d = a;
            else
                for (var e = ["webkit", "ms", "moz", "o"], f = 0; f < e.length; f++) {
                    var r = e[f] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (r in b) {
                        d = r;
                        break
                    }
                }
            return d
        }

        function e(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) p = "focus" == a.type || "focusin" == a.type ? v : y, b()
        }
        var d = mt.event,
            g = h.l,
            l = v,
            k = v,
            t = v,
            p = v,
            n = +new Date,
            r = n,
            m = 0,
            q = v,
            s = a("visibilityState"),
            w = a("hidden"),
            C;
        b();
        (function() {
            var a = s.replace(/[vV]isibilityState/, "visibilitychange");
            d.d(document, a, b);
            d.d(window, "pageshow", b);
            d.d(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (d.d(document, "focusin", e), d.d(document, "focusout", e)) : (d.d(window, "focus", e), d.d(window, "blur",
                e))
        })();
        h.Z = {
            ib: function() {
                return +new Date - n
            },
            cb: function() {
                return q ? +new Date - r + m : m
            }
        };
        g.d("pv-b", function() {
            d.d(window, "unload", f())
        });
        g.d("duration-send", f());
        g.d("duration-done", function() {
            r = n = +new Date;
            m = 0
        });
        return h.Z
    })();
    (function() {
        var f = mt.lang,
            b = h.z,
            a = h.load,
            e = h.W,
            d = {
                xb: function(d) {
                    if ((window._dxt === u || f.h(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                        var l = e.P();
                        a([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), d)
                    }
                },
                Ub: function(a) {
                    if (f.h(a, "String") || f.h(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
                }
            };
        return h.Ta = d
    })();
    (function() {
        function f(b) {
            for (var d in b)
                if ({}.hasOwnProperty.call(b, d)) {
                    var e = b[d];
                    a.J(e) || a.isArray(e) ? f(e) : b[d] = String(e)
                }
        }
        var b = mt.url,
            a = mt.lang,
            e = mt.C,
            d = mt.f,
            g = h.z,
            l = h.l,
            k = h.Ta,
            t = h.load,
            p = h.W,
            n = {
                K: [],
                T: 0,
                ea: y,
                B: function() {
                    n.j = 0;
                    l.d("pv-b", function() {
                        n.Y();
                        n.$()
                    });
                    l.d("pv-d", function() {
                        n.Va()
                    });
                    l.d("stag-b", function() {
                        h.c.b.api = n.j || n.T ? n.j + "_" + n.T : ""
                    });
                    l.d("stag-d", function() {
                        h.c.b.api = 0;
                        n.j = 0;
                        n.T = 0
                    })
                },
                Y: function() {
                    var b = window._hmt || [];
                    if (!b || a.h(b, "Array")) window._hmt = {
                        id: c.id,
                        cmd: {},
                        push: function() {
                            for (var b =
                                    window._hmt, d = 0; d < arguments.length; d++) {
                                var e = arguments[d];
                                a.h(e, "Array") && (b.cmd[b.id].push(e), "_setAccount" === e[0] && (1 < e.length && /^[0-9a-f]{31,32}$/.test(e[1])) && (e = e[1], b.id = e, b.cmd[e] = b.cmd[e] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, b)
                },
                $: function() {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id])
                        for (var b = a.cmd[c.id], d = /^_track(Event|Order)$/, e = 0, f = b.length; e < f; e++) {
                            var g = b[e];
                            d.test(g[0]) ? n.K.push(g) : n.G(g)
                        }
                    a.cmd[c.id] = {
                        push: n.G
                    }
                },
                Va: function() {
                    if (0 < n.K.length)
                        for (var a =
                                0, b = n.K.length; a < b; a++) n.G(n.K[a]);
                    n.K = x
                },
                G: function(b) {
                    var d = b[0];
                    if (n.hasOwnProperty(d) && a.k(n[d])) n[d](b)
                },
                _setAccount: function(a) {
                    1 < a.length && /^[0-9a-f]{31,32}$/.test(a[1]) && (n.j |= 1)
                },
                _setAutoPageview: function(a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) n.j |= 2, h.c.qa = a
                },
                _trackPageview: function(a) {
                    1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (n.j |= 4, h.c.b.sn = h.c.na(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = d.ca(), n.ea || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = g.protocol + "//" + document.location.host +
                        a[1], h.c.s(), h.c.Eb = +new Date)
                },
                _trackEvent: function(b) {
                    2 < b.length && (n.j |= 8, h.c.b.et = 4, h.c.b.ep = a.w(b[1]) + "*" + a.w(b[2]) + (b[3] ? "*" + a.w(b[3]) : "") + (b[4] ? "*" + a.w(b[4]) : ""), h.c.s())
                },
                _setCustomVar: function(b) {
                    if (!(4 > b.length)) {
                        var d = b[1],
                            e = b[4] || 3;
                        if (0 < d && 6 > d && 0 < e && 4 > e) {
                            n.T++;
                            for (var f = (h.c.b.cv || "*").split("!"), g = f.length; g < d - 1; g++) f.push("*");
                            f[d - 1] = e + "*" + a.w(b[2]) + "*" + a.w(b[3]);
                            h.c.b.cv = f.join("!");
                            b = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== b ? p.setData("Hm_cv_" + c.id,
                                encodeURIComponent(b), c.age) : p.removeData("Hm_cv_" + c.id)
                        }
                    }
                },
                _setReferrerOverride: function(b) {
                    1 < b.length && (b = b[1], a.h(b, "String") ? (h.c.b.su = "/" === b.charAt(0) ? g.protocol + "//" + window.location.host + b : b, n.ea = v) : n.ea = y)
                },
                _trackOrder: function(b) {
                    b = b[1];
                    a.J(b) && (f(b), n.j |= 16, h.c.b.et = 94, h.c.b.ep = e.stringify(b), h.c.s())
                },
                _setDataxId: function(a) {
                    a = a[1];
                    k.xb();
                    k.Ub(a)
                },
                _setAutoTracking: function(a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) h.c.ra = a
                },
                _trackPageDuration: function(a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length &&
                        (h.c.b.et = 3, h.c.b.ep = a, h.c.s())) : l.n("duration-send");
                    l.n("duration-done")
                },
                _require: function(a) {
                    1 < a.length && (a = a[1], g.Ka.test(b.ba(a)) && t(a))
                },
                _providePlugin: function(b) {
                    if (1 < b.length) {
                        var d = window._hmt,
                            e = b[1];
                        b = b[2];
                        if (a.da(g.wa, e) && a.k(b) && (d.plugins = d.plugins || {}, d.D = d.D || {}, d.plugins[e] = b, d.o = d.o || [], b = d.o.slice(), e && b.length && b[0][1] === e))
                            for (var f = 0, k = b.length; f < k; f++) {
                                var l = b[f][2] || {};
                                if (d.plugins[e] && !d.D[e]) d.D[e] = new d.plugins[e](l), d.o.shift();
                                else break
                            }
                    }
                },
                _requirePlugin: function(b) {
                    if (1 <
                        b.length) {
                        var d = window._hmt,
                            e = b[1],
                            f = b[2] || {};
                        if (a.da(g.wa, e))
                            if (d.plugins = d.plugins || {}, d.D = d.D || {}, d.plugins[e] && !d.D[e]) d.D[e] = new d.plugins[e](f);
                            else {
                                d.o = d.o || [];
                                for (var f = 0, k = d.o.length; f < k; f++)
                                    if (d.o[f][1] === e) return;
                                d.o.push(b);
                                n._require([x, g.Lb + e + ".js"])
                            }
                    }
                }
            };
        n.B();
        h.La = n;
        return h.La
    })();
    (function() {
        var f = mt.lang,
            b = h.l,
            a = {
                B: function() {
                    b.d("pv-b", function() {
                        a.Y();
                        a.$()
                    })
                },
                Y: function() {
                    var a = window._agl || [];
                    if (!a || f.h(a, "Array")) window._agl = {
                        id: c.id,
                        cmd: {},
                        isAngelia: v,
                        push: function() {
                            for (var a = window._agl, b = 0; b < arguments.length; b++) {
                                var d = arguments[b];
                                f.h(d, "Array") && a.cmd[a.id].push(d)
                            }
                        }
                    }, window._agl.cmd[c.id] = [], window._agl.push.apply(window._agl, a)
                },
                $: function() {
                    var b = window._agl;
                    if (b && b.cmd && b.cmd[c.id])
                        for (var e = b.cmd[c.id], f = 0, k = e.length; f < k; f++) a.G(e[f]);
                    b.cmd[c.id] = {
                        push: a.G
                    }
                },
                G: function(b) {
                    var e = b[0];
                    if (a.hasOwnProperty(e) && f.k(a[e])) a[e](b)
                },
                track: function(a) {
                    if (1 < a.length && f.isArray(a[1]) && 1 < a[1].length) {
                        var b = a[1][0];
                        a = a[1][1];
                        f.J(a) || (a = {
                            t: a
                        });
                        a._tag = "window";
                        h.c.xa({
                            a: [a],
                            type: b
                        })
                    }
                }
            },
            e = window._agl;
        (!e || !e.isAngelia) && a.B();
        h.Ib = a;
        return h.Ib
    })();
    (function() {
        var f = h.l;
        c.spa !== u && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), f.d("pv-b", function() {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function() {
        function f() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = v, this.b = {}, this.Ab = this.ra = this.qa = v, this.pa = m.pa, this.ic = e.fa(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.B())
        }
        var b = mt.url,
            a = mt.m,
            e = mt.lang,
            d = mt.cookie,
            g = mt.f,
            l = mt.sessionStorage,
            k = mt.C,
            t = mt.event,
            p = h.W,
            n = mt.localStorage,
            r = mt.M,
            m = h.z,
            q = h.load,
            s = h.l,
            w = "Hm_ocpc_" + c.id;
        f.prototype = {
            Sb: function() {
                var a, b, e, f;
                m.sa = p.getData("Hm_lpvt_" + c.id) || 0;
                if (f = p.getData("Hm_lvt_" + c.id)) {
                    for (b = f.split(","); 2592E3 <
                        m.H - b[0];) b.shift();
                    e = 4 > b.length ? 2 : 3;
                    for (m.H - m.sa > c.vdur && b.push(m.H); 4 < b.length;) b.shift();
                    f = b.join(",");
                    b = b[b.length - 1]
                } else f = m.H, b = "", e = 1;
                this.zb() ? (p.setData("Hm_lvt_" + c.id, f, c.age), p.setData("Hm_lpvt_" + c.id, m.H), a = d.Db(p.P(), p.aa())) : this.ma();
                this.b.cc = a;
                this.b.lt = b;
                this.b.lv = e
            },
            zb: function() {
                var a = b.ba(document.location.href);
                return !e.da("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "), a)
            },
            Na: function() {
                var a =
                    "Hm_clear_cookie_" + c.id,
                    b = n.get(a) || 0;
                c.fc && Number(c.fc) > Number(b) && (this.ma(), n.set(a, c.fc))
            },
            ma: function() {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && p.removeData(e.trim(d[0]));
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && p.removeData(e.trim(d[0]))
                }
            },
            Aa: function() {
                for (var a = [], b = this.b.et, d = 0, e = m.Ca.length; d < e; d++) {
                    var f = m.Ca[d],
                        g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 ===
                        b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            },
            Tb: function() {
                this.Sb();
                this.b.si = c.id;
                this.b.sn = this.na();
                this.b.su = document.referrer;
                this.b.ds = g.Ob;
                this.b.cl = g.colorDepth + "-bit";
                this.b.ln = String(g.language).toLowerCase();
                this.b.ja = g.javaEnabled ? 1 : 0;
                this.b.ck = g.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.v = "1.2.99";
                this.b.cv = decodeURIComponent(p.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = g.ca();
                var a = document.location.href;
                this.b.cm = b.g(a,
                    m.tb) || "";
                this.b.cp = b.g(a, m.ub) || b.g(a, m.Yb) || "";
                this.b.cw = b.g(a, m.sb) || b.g(a, m.$b) || "";
                this.b.ci = b.g(a, m.qb) || b.g(a, m.Xb) || "";
                this.b.cf = b.g(a, m.vb) || b.g(a, m.Zb) || "";
                this.b.cu = b.g(a, m.rb) || b.g(a, m.Wb) || "";
                /https?:/.test(document.location.protocol) && (this.b.u = a)
            },
            B: function() {
                try {
                    this.Na(), this.Tb(), this.Rb(), this.Qb(), h.c = this, this.Ma(), this.Fb(), s.n("pv-b"), this.Ab && this.Pb()
                } catch (b) {
                    var d = [];
                    d.push("si=" + c.id);
                    d.push("n=" + encodeURIComponent(b.name));
                    d.push("m=" + encodeURIComponent(b.message));
                    d.push("r=" +
                        encodeURIComponent(document.referrer));
                    a.log(m.R + "//" + m.ga + "?" + d.join("&"))
                }
            },
            Pb: function() {
                function a() {
                    s.n("pv-d")
                }
                this.qa ? (this.b.et = 0, this.b.ep = "", s.n("setPageviewProp"), this.b.vl = g.ca(), this.s(a), this.b.p = "") : a();
                this.Eb = +new Date;
                s.n("clearPageviewProp")
            },
            s: function(b) {
                if (this.ra) {
                    var d = this;
                    d.b.rnd = Math.round(Math.random() * m.L);
                    d.b.r = g.orientation;
                    d.b.ww = g.Ea;
                    s.n("stag-b");
                    var f = m.R + "//" + m.ga + "?" + d.Aa();
                    s.n("stag-d");
                    d.Ja(f);
                    a.log(f, function(a) {
                        d.za(a);
                        e.k(b) && b.call(d)
                    })
                }
            },
            gb: function() {
                if (this.uid =
                    p.getData("AGL_USER_ID")) return this.uid;
                this.uid = e.Da();
                p.setData("AGL_USER_ID", this.uid, c.age);
                return this.uid
            },
            xa: function(b) {
                var d = new Date;
                b = e.extend({
                    production: "_f7L2XwGXjyszb4d1e2oxPybgD",
                    logid: e.Da(),
                    ts: d.getTime(),
                    tz: -Math.round(d.getTimezoneOffset() / 60),
                    uid: this.gb(),
                    referrer: document.referrer,
                    location: e.Kb(),
                    ext: {
                        bclid: c.bcd || "",
                        bdsfrcvid: c.brd || ""
                    },
                    sessionid: "",
                    cert: "",
                    optid: ""
                }, b);
                var f = r.Sa(k.stringify(b));
                this.Ia(f);
                var g = this;
                a.ha(m.va, {
                    data: f,
                    success: function() {
                        g.ya(f)
                    }
                })
            },
            Ia: function(a) {
                var b;
                try {
                    b = k.parse(n.get(w) || "[]")
                } catch (d) {
                    b = []
                }
                b.push(a);
                n.set(w, k.stringify(b))
            },
            ya: function(a) {
                var b;
                try {
                    b = k.parse(n.get(w) || "[]")
                } catch (d) {
                    b = []
                }
                b.length && ((b = e.filter(b, function(b) {
                    return b !== a
                })) && b.length ? n.set(w, k.stringify(b)) : n.remove(w))
            },
            Qb: function() {
                var b = this,
                    d;
                try {
                    d = k.parse(n.get(w) || "[]")
                } catch (e) {
                    d = []
                }
                if (d.length)
                    for (var f = function(d) {
                            a.ha(m.va, {
                                data: d,
                                success: function() {
                                    b.ya(d)
                                }
                            })
                        }, g = 0, l = d.length; g < l; g++) f(d[g])
            },
            Ma: function() {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a =
                            this;
                        t.d(window, "message", function(d) {
                            if (b.ba(d.origin) === m.Vb) {
                                d = d.data || {};
                                var e = d.jn || "",
                                    f = /^customevent$|^heatmap$|^pageclick$|^select$/.test(e);
                                if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * m.L), q(m.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                            }
                        });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (d) {}
            },
            Fb: function() {
                try {
                    if (window.self === window.parent) {
                        var a = document.location.href,
                            d = b.g(a, "baidu-analytics-token"),
                            e = b.g(a, "baidu-analytics-jn");
                        /^[a-f0-9]{32}\/?$/.test(d) && /^(overlay|vabtest)\/?$/.test(e) && q(m.protocol + "//" + c.js + e + ".js?" + Math.round(Math.random() * m.L))
                    }
                } catch (f) {}
            },
            Ja: function(a) {
                var b;
                try {
                    b = k.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                l.set("Hm_unsent_" + c.id, k.stringify(b))
            },
            za: function(a) {
                var b;
                try {
                    b = k.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e =
                            0; e < b.length; e++)
                        if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                            b.splice(e, 1);
                            break
                        }
                    b.length ? l.set("Hm_unsent_" + c.id, k.stringify(b)) : this.Oa()
                }
            },
            Oa: function() {
                l.remove("Hm_unsent_" + c.id)
            },
            Rb: function() {
                var b = this,
                    d;
                try {
                    d = k.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    d = []
                }
                if (d.length)
                    for (var f = function(d) {
                            a.log(m.R + "//" + d, function(a) {
                                b.za(a)
                            })
                        }, g = 0; g < d.length; g++) f(d[g])
            },
            na: function() {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new f
    })();
    var z = h.z,
        A = h.load;
    if (c.apps) {
        var B = [z.protocol, "//ers.baidu.com/app/s.js?"];
        B.push(c.apps);
        A(B.join(""))
    }
    var D = h.z,
        E = h.load;
    c.pt && E([D.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    var F = h.load;
    if (c.qiao) {
        for (var G = ["https://goutong.baidu.com/site/"], H = c.id, I = 5381, J = H.length, K = 0; K < J; K++) I = (33 * I + Number(H.charCodeAt(K))) % 4294967296;
        2147483648 < I && (I -= 2147483648);
        G.push(I % 1E3 + "/");
        G.push(c.id + "/b.js");
        G.push("?siteId=" + c.qiao);
        F(G.join(""))
    };
})();