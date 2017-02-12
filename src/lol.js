(window.JSON || (JSON = {})) && (!JSON.stringify || JSON.org || JSON.copyright) && (JSON.stringify = function (l, i) {
    var g, k, j, h = "";
    switch (typeof l) {
        case "object": if (l) {
            if ("______array" == l.______array) {
                for (k = 0; k < l.length; ++k) {
                g = this.stringify(l[k]), h && (h += ","), h += g
                } return "[" + h + "]"
            } if ("undefined" != typeof l.toString) {
                for (k in l) {
                g = l[k], "undefined" != typeof g && "function" != typeof g && (g = this.stringify(g), h && (h += ","), h += this.stringify(k, !0) + ":" + g)
                } return "{" + h + "}"
            }
        } return "null"; case "number": return isFinite(l) ? String(l) : "null"; case "string": j = l.length;
            h = '"'; for (k = 0; k < j; k += 1) {
                if (g = l.charAt(k), " " <= g) { if ("\\" == g || '"' == g) { h += "\\" } h += g } else {
                    switch (g) {
                        case "\b": h += "\\b";
                            break; case "\f": h += "\\f"; break; case "\n": h += "\\n"; break; case "\r": h += "\\r"; break; case "\t": h += "\\t"; break;
                        default: g = g.charCodeAt(), h += "\\u00" + Math.floor(g / 16).toString(16) + (g % 16).toString(16)
                    }
                }
            } return h + '"';
        case "boolean": return String(l); default: return "null"
    }
}); var truste = window.truste || {}; truste.util || (truste.util = {});
truste.util.getUniqueID = function () { return "truste_" + Math.random() }; truste.util.getScriptElement = function (d, e) {
    var b, g, c, f = (d && d.test) ? d : new RegExp(d);
    if (document.currentScript) { b = document.currentScript } else {
        b = document.scripts && document.scripts[document.scripts.length - 1]
    } if (b && b.src && (!d || ((e || !b.id) && f.test(b.src)))) { return b } c = (g = document.getElementsByTagName("script")).length;
    while (c-- > 0) { b = g[c]; if ((e || !b.id) && f.test(b.src)) { return b } } return null
}; truste.util.initParameterMap = function (d, e) {
    if (d == null) {
    e._query = e._url = ""
    } else {
        var b, a = e._url = d.src || e._url; a = (e._query = a.replace(/^[^;?#]*[;?#]/, "").replace(/&(amp|#38|#x00026);/ig, "&").replace(/&(equals|#61|#x0003d);/ig, "=").replace(/&(semi|#59|#x0003b);/ig, ";")).replace(/[#;?]|&(num|#35|#x00023|quest|#63|#x0003f);/ig, "&");
        if (a) {
            for (a = a.split("&"), b = a.length; b-- > 0;) {
                var c = a[b].split("="); e[c.shift()] = decodeURIComponent(c.length ? c.join("=") : "")
            }
        } d.id = e.sid = e.sid || truste.util.getUniqueID()
    } return e
}; truste.util.addScriptElement = function (f, g, c, b, a) {
    if (!f) {
        truste.util.trace("ERROR adding script element to page, src is null");
        return null
    } var e = null; if ("string" == typeof f) {
        e = (c ? c.ownerDocument : document).createElement("SCRIPT");
        e.src = f
    } else {
        if ((e.nodeName + "").toLowerCase() == "script") {
            e = f; if (!e.src) {
                truste.util.trace("ERROR Object passed into addSCriptElement does not have required 'src' attribute");
                return null
            }
        } else {
            truste.util.trace("ERROR Object passed into addSCriptElement is not a ScriptElement");
            return null
        }
    } if (a) { e.setAttribute("type", a) } if (b) { e.setAttribute("async", "async") } var d = function (i) {
        var h;
        if (i && i.type == "error") { truste.util.trace("ERROR Script was unable to load: " + f); h = 2 } else {
            if (i && i.type == "load" || e.readyState == "loaded") {
                h = 1
            }
        } if (h) { e.onload = e.onreadystatechange = e.onerror = null; e.parentNode.removeChild(e); g(e, h) }
    }; e.onload = e.onreadystatechange = e.onerror = d;
    (c || document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]).appendChild(e);
    return e
}; truste.util.msglog = function (a, b) {
truste.eu && truste.eu.msg && truste.eu.msg.log(a, truste.eu.bindMap, b)
}; (function cmBannerScript() {
cmBannerScript.cnt = cmBannerScript.cnt || 0; var x = window.jQuery_TRUSTe || window.jQuery, A = {}, p = "http" + (/s/.test(location.protocol) ? "s:" : ":");
    if (!x) {
        truste.util.addScriptElement(p + "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", cmBannerScript);
        return
    } A.domain = "leagueoflegends.com"; A.baseURL = "http://consent.truste.com/".replace(/^\w{3,5}:/, p); A.bannerMsgURL = A.baseURL + "bannermsg?";
    A.country = "de"; A.iconws = p + "//preferences.truste.com/webservices/js"; if (cmBannerScript.cnt < 1) {
    cmBannerScript.script = truste.util.getScriptElement(/\/\/[^\.]+\.(intranet\.)?truste(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#;]*(notice|banner)(\?|\.js)/, true)
    } truste.util.initParameterMap(cmBannerScript.script, A); var b = A.c || "teconsent"; var s = A.bb || "consent_blackbar";
    var i = A.fc ? isNaN(parseInt(A.fc)) ? A.fc : "footerCookie" : null; var o = (A.cdn == 2) ? A.baseURL : p + "//consent-st.truste.com/";
    var q = (A.cm || (A.cdn && o + "get?name=notice.js&") || (A.baseURL + "notice?")) + "domain=" + A.domain + "&country=" + A.country + "&" + A._query.replace(/\b(js|domain|country|name)=[^&#]*&?/g, ""), a = '<img id="ad-ch-icn" width="19px" height="15px" src="' + p + '//choices.truste.com/get?name=admarker-icon-tr.png" style="background:transparent !important;margin:0;padding:0;border:none;position:relative;right:0px;top:0;float:right;">', w = '<a id="truste-ad-choices" style="cursor:pointer;" target="_blank">' + a + "</a>", u = '<a id="truste-ad-choices-text" style="cursor:pointer;" target="_blank">AdChoices</a>';
    if (!i && A.js == "bb_v2") { i = "footerCookie" } var f = x("#" + s); var r = x("#" + i); var j = x("#" + b); if (cmBannerScript.cnt <= 10 && (!f.length || !j.length || (i && !r.length))) {
        setTimeout(cmBannerScript, 50);
        cmBannerScript.cnt++; return
    } var h = '<style>    @font-face{font-family:BeaufortLoL;src:url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.eot?#iefix) format("embedded-opentype"),url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.woff) format("woff"),url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.ttf) format("truetype"),url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Regular.svg#svgFontName) format("svg");font-style:normal}    @font-face{font-family:BeaufortLoL;src:url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Italic.eot?#iefix) format("embedded-opentype"),url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Italic.woff) format("woff"),url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Italic.ttf) format("truetype"),url(https://s.lolstatic.com/awesomefonts/1.0.0/Fonts/BeaufortforLOL-Italic.svg#svgFontName) format("svg");font-style:italic}    #truste-consent-track.riot-banner {    	font-family: "Gill Sans W04", GillSans, "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;    	font-size: 13px;        background-color: #141414;        background: rgba(0,0,0,.8);        border: 1px solid #766e4c;        border-width: 1px 0;      	color: #DECBA1;    	padding: 0;}  #truste-consent-content{ overflow: hidden; max-height: 49px; min-width: 300px; width: 100%; display: table; margin: 0 auto; }#truste-consent-text{ width: auto; display: table-cell; vertical-align: middle; padding-left: 10px; text-align: left;  }#truste-consent-buttons{ float: right; white-space: nowrap; margin: 12px 10px 15px 0px; }      .truste-text {      font-family: Arial,"Helvetica Neue", Helvetica,sans-serif;      font-size: 13px;      color: #DECBA1;    }    .truste-buttontext {    font-family: BeaufortLoL,"Times New Roman";    font-weight: 700;    font-size: 12px;    color: #dec58d;    background-color:#151515;    background: linear-gradient(to bottom, #313131 0, #000 100%);    border: 1px solid #766e4c;    border-radius: 4px;    text-decoration: none;    cursor: pointer;    text-transform: uppercase;    padding: 2px 6px 3px;     margin-right:10px;    }  .truste-buttontext:link {    color: #dec58d;    }    .truste-buttontext:hover {    color: #f7da9b;    }    .truste-buttontext:focus { outline: none; }    .truste-close {    font-family: BeaufortLoL,"Times New Roman";    font-weight: 700;    font-size: 12px;    color: #dec58d;    background-color:transparent;    background: none;    border: none;    border-radius: 4px;    text-decoration: none;    cursor: pointer;    text-transform: uppercase;    padding: 2px 6px 3px;   }      .truste-close:link {     color: #dec58d;      }      .truste-close:hover {    color: #f7da9b;    background: inherit;      }      .truste-close:focus { outline: none; }      /* MOBILE ONLY */      @media screen and (min-width: 1px) and (max-width: 480px) {       .truste-responsive .truste-close {	margin-right: 5px;    margin-bottom: -2px;    width: 40px;    height: 40px;    border-radius: 50%;    font-size: 20px;    line-height: 20px;    text-align: center;    font-family: BeaufortLoL,"Times New Roman";    color: #dec58d;    background-color: #151515;    background: linear-gradient(to bottom, #313131 0, #000 100%);    border: 1px solid #766e4c;    text-decoration: none;    cursor: pointer;    text-transform: uppercase;    padding: 2px 6px 3px;    position: absolute !important;    top: 12px !important;    right: 12px !important;    }                    .truste-responsive .truste-close:link {     color: #dec58d;      }          .truste-responsive .truste-close:hover {      color: #f7da9b;    background: inherit; }                  .truste-responsive .truste-close:focus { outline: none; }    .truste-responsive #truste-consent-text    { width: auto; display: block; max-width:80%; vertical-align: middle; padding-left: 5px;    padding-top: 5px;     text-align: left;}      .truste-responsive #truste-consent-buttons    {     float: none;    clear: both;    display: inline-block;    margin: 10px auto 5px auto; }	  .truste-responsive #truste-consent-content    {text-align:center;}      .truste-responsive .truste-buttontext   	{ margin-right:0px; }  }</style><div id="truste-consent-track" class="riot-banner truste-responsive" style="display:none;">    <div id="truste-consent-content">    <div id="truste-consent-text" class="truste-text">      Indem du diese Riot Games-Site nutzt, stimmst du der Nutzung von Cookies zu.    </div>    <div id="truste-consent-buttons">     <button id="truste-show-consent" class="truste-buttontext">Mehr Informationen</button>        <button id="truste-consent-button" class="truste-close" style="margin-right:5px; margin-bottom:-2px">X</button>      </div>    </div></div>';
    h = h.replace("&lt;i&gt;", "<i>").replace("&lt;/i&gt;", "</i>").replace("&lt;b&gt;", "<b>").replace("&lt;/b&gt;", "</b>");
    if (!h || h.length < 15) {
        h = '<div id="truste-consent-track" style="display:none; background-color:#000;">' + (i ? w : "") + '<div id="truste-consent-content" style="overflow: hidden; margin: 0 auto; max-width: 1000px"><div id="truste-consent-text" style="float:left; margin:15px 0 10px 10px; width:500px;"><h2 style="color: #fff; font-size: 16px; font-weight:bold; font-family:arial;">Some functionality on this site requires your consent for cookies to work properly.</h2></div><div id="truste-consent-buttons" style="float:right; margin:20px 10px 20px 0;"><button id="truste-consent-button" type=button style="padding:5px; margin-right:5px; font-size:12px;">I consent to cookies</button><button id="truste-show-consent" type=button style="padding:5px; margin-right:5px; font-size:12px;">I want more information</button>' + (i ? '<button id="truste-cookie-button" type=button style="padding:5px; margin-right:5px; font-size:12px;">Cookie Preferences</button>' : "") + "</div></div></div>"
    } if (A.responsive && A.responsive == "false") {
        h = h.replace(/(class=["'].*?)[\s]?truste-responsive(.*?["'])/g, "$1$2")
    } if (A.iframe == 1) {
        var k = document.createElement("iframe"); k.id = "truste-banner-iframe"; k.setAttribute("frameborder", "0");
        k.setAttribute("scrolling", "no"); k.style.cssText = "width: 100%;"; f.append(k); var m; setTimeout(function () {
            try {
                m = k.contentDocument || k.contentWindow.document
            } catch (e) {
                try {
                k.src = 'javascript:void((function(){document.open();document.domain="' + document.domain + '";document.close();})())';
                    m = k.contentDocument || k.contentWindow.document
                } catch (e) { }
            } if (m) {
                m.body.style.cssText = "margin: 0; padding: 0;";
                m.body.innerHTML = h; x("img", m).load(function () { x(window).trigger("resize") })
            } else { f.remove(k); k = null }
        }, 100)
    } else { f.append(h) } i && r.append(u); var t = function (e) {
        if (t[e]) { return } t[e] = 1; switch (e) {
            case "loaded": if (v()) {
                l(f[0]);
                d(f.children().not("style")); truste.util.msglog("views", A.bannerMsgURL)
            } else {
                i && z("#" + i); t("done"); truste.util.msglog("returns", A.bannerMsgURL)
            } break; case "ready": if (t.notice1) { t("loaded") } break; case "notice1": if (t.ready) { t("loaded") } break; case "done": j.show();
                f.children().not("style").fadeOut(); i && r.show(); break; case "open": x(window).trigger("resize")
        }
    }, c = function (E) {
        if (!isNaN(E = parseInt(E)) && truste.eu && truste.eu.actmessage) {
            var D = (truste.util && truste.util.getJSON) || (truste.cma && truste.cma.cheapJSON) || window.JSON.stringify, e = { source: "preference_manager", message: "submit_preferences", data: { value: E } };
            truste.eu.actmessage(e); if (window.PREF_MGR_API_DEBUG) {
                PREF_MGR_API_DEBUG.authorities.push(window.location.hostname)
            } window.postMessage && window.postMessage(D(e), "*"); t("selection")
        } else { t("done") }
    }, z = function C(D) {
        if (C.once) {
            return
        } var E, e = function () {
            if (truste.pm) { view(trusteId) } else {
                if (!C.didAddScript) {
                    truste.util.addScriptElement(A.iconws + "?domain=" + A.domain + "&js=responsive", function () {
                        view(trusteId)
                    }); C.didAddScript = true
                }
            }
        }; (E = i && x(document).find(D)) && E.click(e); (E = i && x(document).find(D + "-text")) && E.click(e);
        C.once = true
    }, d = function (F) {
        var D = { consentButton: "#truste-consent-button", footerCallback: "#truste-show-consent", cookieButton: "#truste-cookie-button", adChoice: "#truste-ad-choices", bannerHolder: "#truste-consent-track", closeBanner: "#truste-consent-close" };
        F.fadeIn(); var e = (A.iframe == 1) ? F.contents() : F; e.find(D.bannerHolder).fadeIn(); var E = e.find(D.consentButton);
        if (E) { E.click(function () { truste.util.msglog("accepts", A.bannerMsgURL); c(2) }) } (E = e.find(D.footerCallback)) && E.click(function () {
            truste.util.msglog("moreinfo", A.bannerMsgURL);
            if (truste.eu && truste.eu.clickListener) { truste.eu.clickListener(parseInt(A.pn) || 0) }
        }); (E = e.find(D.cookieButton)) && E.click(function () {
            truste.util.msglog("cookiepolicy", A.bannerMsgURL);
            if (A.cookieLink) { window.open(A.cookieLink) }
        }); (E = e.find(D.closeBanner)) && E.click(function () {
            t("done")
        }); z(D.adChoice); parseInt(A.fade) && setTimeout(function () { c(A.sl) }, parseInt(A.fade)); t("open")
    }, B = function () {
        if (truste.eu.bindMap) {
            var e = truste.eu.bindMap;
            return !e.prefCookie
        } else { return false }
    }, v = function () {
        return !!truste.eu && (A.ios != 1 || !n) && truste.eu.bindMap.behaviorManager == "eu" && truste.eu.bindMap.behavior != "expressed" && B()
    }, n = /ip(hone|od|ad)|iOS/i.test(navigator.userAgent || navigator.vendor || window.opera), g = function (e) {
        try {
            var D = e && e.data && x.parseJSON(e.data)
        } catch (E) { return null } if (D && D.source == "preference_manager" && D.message == "submit_preferences") {
            t("done")
        }
    }, y = function () {
        var e = [{ id: "truste-consent-button", desc: "consents to cookies" }, { id: "truste-show-consent", desc: "opens CM" }, { id: "truste-cookie-button", desc: "opens link passed via cookieLink" }, { id: "truste-ad-choices", desc: "opens PM (similar to: truste-ad-choices-text)" }, { id: "truste-ad-choices-text", desc: "opens PM (similar to: truste-ad-choices)" }, { id: "truste-consent-track", desc: "holds banner (this is the outermost div/element)" }, { id: "truste-consent-close", desc: "closes/fades out banner" }];
        x.each(e, function (E, D) {
            if (x("#" + D.id).length < 1) {
            window.console && console.log('[CM Banner] Missing "' + D.id + '": ' + D.desc)
            }
        })
    }, l = function (e) {
        if (truste.util.addListener) {
            if (A.oc) {
                truste.util.addListener(document, "click", function (D) {
                    var E = function () {
                        var F = self.document.getElementById(truste.eu.popdiv2);
                        return (F) ? false : true
                    }; if (e && x(e).is(":visible") && !e.contains(D.target) && E()) { c(2) }
                })
            } if (A.px) {
                truste.util.addListener(document, "scroll", function (D) {
                    if (document.body.scrollTop >= A.px) {
                        c(2)
                    }
                })
            }
        }
    }; if (window.addEventListener) { window.addEventListener("message", g, false) } else {
        if (window.attachEvent) {
            window.attachEvent("onmessage", g)
        }
    } x(document).ready(function () { t("ready") }); x.getScript(q, function (D, G, F) {
        t("notice0"); var E, e = function () {
            if (E && truste.eu && truste.eu.bindMap && truste.cma) {
                E = clearInterval(E);
                t("notice1")
            }
        }; E = setInterval(e, 7); e(); setTimeout(function () { clearInterval(E) }, 10000)
    }); if (A.iframe == 1) {
        x(window).resize(function () {
            if (k && m) {
                var e = m.getElementById("truste-consent-track");
                if (e) { k.height = e.offsetHeight }
            }
        })
    }
})();