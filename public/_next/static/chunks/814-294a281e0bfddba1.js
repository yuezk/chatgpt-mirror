"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[814], {
    60814: function(e, t, n) {
        n.d(t, {
            ZP: function() {
                return S
            }
        });
        var o = n(61706)
          , i = n(35025)
          , a = n(9135)
          , r = n(31501)
          , s = n(61079)
          , c = n(42928)
          , h = n(45813)
          , u = n(48879)
          , d = n(44928);
        n(138);
        var l = n(34388)
          , p = n(22832)
          , f = n(25829)
          , g = n(19818)
          , m = function(e) {
            (0,
            p.Z)(n, e);
            var t = (0,
            g.Z)(n);
            function n(e, o, a, r) {
                var s;
                return (0,
                i.Z)(this, n),
                (s = t.call(this, e)).name = "UserError",
                s.userMessage = e,
                s.status = o || 400,
                s.code = a || null,
                s.type = r || null,
                s
            }
            return n
        }((0,
        f.Z)(Error))
          , y = function(e) {
            (0,
            p.Z)(n, e);
            var t = (0,
            g.Z)(n);
            function n() {
                var e, o, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "An error occurred. If this issue persists please contact us through our help center at help.openai.com.", r = arguments.length > 1 ? arguments[1] : void 0;
                return (0,
                i.Z)(this, n),
                (e = t.call(this, (o = a,
                o && (o.startsWith("Rate limit reached for") || o.startsWith("End-user exceeded rate-limit")) ? "We're sorry, but we limit the number of requests one user can make in a certain timeframe. Please hang tight and try again in a little while." : o))).name = "FatalError",
                e.type = r || null,
                e.userMessage = e.message,
                e
            }
            return n
        }((0,
        f.Z)(Error))
          , v = n(24638)
          , T = "/backend-api"
          , A = ["cf-ipcountry"]
          , _ = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return e.setAccessToken = function(e) {
                this.accessToken = e
            }
            ,
            e.getAuthHeader = function(e) {
                return {
                    Authorization: "Bearer ".concat(e || this.accessToken)
                }
            }
            ,
            e.refreshApiKey = function() {
                var e = this;
                if (this.apiKeyRefreshing)
                    return this.apiKeyRefreshing;
                var t = this;
                return this.apiKeyRefreshing = (0,
                o.Z)((function() {
                    var e;
                    return (0,
                    h.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, (0,
                            d.getSession)()];
                        case 1:
                            return (e = n.sent()) && t.setAccessToken(e.accessToken),
                            [2];
                        case 2:
                            throw Error("Cannot refresh access token outside of browser");
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))(),
                setTimeout((function() {
                    e.apiKeyRefreshing = null
                }
                ), 6e4),
                this.apiKeyRefreshing
            }
            ,
            e.fetch = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , i = this;
                return (0,
                o.Z)((function() {
                    var o, a, c, u, d, l;
                    return (0,
                    h.__generator)(this, (function(h) {
                        switch (h.label) {
                        case 0:
                            return [4, fetch(e, o = (0,
                            r.Z)({
                                credentials: "include"
                            }, t))];
                        case 1:
                            if ((a = h.sent()).status >= 500)
                                throw new y;
                            if (!(a.status >= 400))
                                return [3, 12];
                            h.label = 2;
                        case 2:
                            return h.trys.push([2, 4, , 5]),
                            [4, a.json()];
                        case 3:
                            return c = (null == (u = h.sent()) ? void 0 : u.detail) || (null == u ? void 0 : u.error),
                            [3, 5];
                        case 4:
                            return d = h.sent(),
                            console.error("Failed to parse error response", d),
                            [3, 5];
                        case 5:
                            if (console.error("API error", e, c),
                            "expired_session_key" !== (null == c ? void 0 : c.code) && "token_expired" !== (null == c ? void 0 : c.code))
                                return [3, 11];
                            h.label = 6;
                        case 6:
                            return h.trys.push([6, 9, , 10]),
                            n.isRetry ? [3, 8] : [4, i.refreshApiKey()];
                        case 7:
                            return h.sent(),
                            [2, i.fetch(e, o, (0,
                            s.Z)((0,
                            r.Z)({}, n), {
                                isRetry: !0
                            }))];
                        case 8:
                            return [3, 10];
                        case 9:
                            return l = h.sent(),
                            console.error("Failed to refresh expired access token: ".concat(l)),
                            [3, 10];
                        case 10:
                            console.error("Refresh access token failed when retrieving", e, c),
                            window._oaiHandleSessionExpired("fetch", JSON.stringify(c)),
                            h.label = 11;
                        case 11:
                            if (null == c ? void 0 : c.type)
                                throw new m((null == c ? void 0 : c.message) || c,a.status,null == c ? void 0 : c.code,null == c ? void 0 : c.type);
                            throw new y;
                        case 12:
                            return 204 === a.status ? [2, {}] : [2, a.json()]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            e.getArtifacts = function() {
                return this.fetch("".concat(T, "/artifacts"), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.createArtifact = function(e) {
                return this.fetch("".concat(T, "/artifacts"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        url: e,
                        contents: "\n"
                    })
                })
            }
            ,
            e.upload = function(e, t) {
                var n = new FormData;
                return n.append("file", t),
                this.fetch("".concat(T, "/conversation/").concat(e, "/upload"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({}, this.getAuthHeader()),
                    body: n
                })
            }
            ,
            e.downloadUrl = function(e, t) {
                var n = new URLSearchParams({
                    path: t
                });
                return "".concat(T, "/conversation/").concat(e, "/download?").concat(n)
            }
            ,
            e.checkFile = function(e, t) {
                var n = new URLSearchParams({
                    path: t
                });
                return this.fetch("".concat(T, "/conversation/").concat(e, "/check_file?").concat(n), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.sendDocument = function() {
                return this.fetch("".concat(T, "/private"), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            }
            ,
            e.getRetrievalResults = function(e) {
                return this.fetch("".concat(T, "/retrieval/public_data"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        query: e
                    })
                })
            }
            ,
            e.getModels = function(e) {
                return this.fetch("".concat(T, "/models"), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(e))
                })
            }
            ,
            e.getConversations = function(e, t, n) {
                var o = new URLSearchParams({
                    offset: e.toString(),
                    limit: t.toString()
                });
                return this.fetch("".concat(T, "/conversations?").concat(o), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                })
            }
            ,
            e.getConversation = function(e, t, n) {
                var o = n ? "".concat(v.env.INTERNAL_API_URL, "/api") : T;
                return this.fetch("".concat(o, "/conversation/").concat(e), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(t))
                })
            }
            ,
            e.generateTitle = function(e, t, n) {
                return this.fetch("".concat(T, "/conversation/gen_title/").concat(e), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        message_id: t,
                        model: n
                    })
                })
            }
            ,
            e.patchConversation = function(e, t) {
                return this.fetch("".concat(T, "/conversation/").concat(e), {
                    method: "PATCH",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify(t)
                })
            }
            ,
            e.deleteConversations = function() {
                return this.fetch("".concat(T, "/conversations"), {
                    method: "PATCH",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        is_visible: !1
                    })
                })
            }
            ,
            e.getLoginLink = function(e) {
                return this.fetch("".concat(T, "/bypass/link"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: e
                    })
                })
            }
            ,
            e.publicApiCompletionStream = function(e, t, n) {
                var i = this;
                return (0,
                o.Z)((function() {
                    var s, c;
                    return (0,
                    h.__generator)(this, (function(d) {
                        return s = new AbortController,
                        c = {
                            action: t.completionType,
                            messages: t.messages.length > 0 ? t.messages : void 0,
                            conversation_id: t.threadId,
                            parent_message_id: t.parentMessageId,
                            model: e.model,
                            plugin_ids: t.threadId ? void 0 : t.enabledPluginIds
                        },
                        (0,
                        u.L)("".concat("/backend-api", "/conversation"), {
                            method: "POST",
                            credentials: "include",
                            headers: (0,
                            r.Z)({
                                "Content-Type": "application/json"
                            }, i.getAuthHeader()),
                            body: JSON.stringify(c),
                            signal: s.signal,
                            openWhenHidden: !0,
                            onopen: function(e) {
                                return (0,
                                o.Z)((function() {
                                    var t, n, o;
                                    return (0,
                                    h.__generator)(this, (function(i) {
                                        switch (i.label) {
                                        case 0:
                                            return t = e.headers.get("content-type") || "",
                                            e.ok && t.includes("text/event-stream") ? [2] : t.includes("application/json") ? [4, e.json()] : [3, 2];
                                        case 1:
                                            if (n = i.sent(),
                                            console.error(n),
                                            o = (null == n ? void 0 : n.error) || (null == n ? void 0 : n.detail)) {
                                                if (e.status >= 500)
                                                    throw new y((null == o ? void 0 : o.message) || o);
                                                throw ("expired_session_key" === (null == o ? void 0 : o.code) || "invalid_api_key" === (null == o ? void 0 : o.code) || "token_expired" === (null == o ? void 0 : o.code)) && window._oaiHandleSessionExpired("stream", JSON.stringify(o)),
                                                new m((null == o ? void 0 : o.message) || o,e.status,null == o ? void 0 : o.code,null == o ? void 0 : o.type)
                                            }
                                            i.label = 2;
                                        case 2:
                                            throw new y
                                        }
                                    }
                                    ))
                                }
                                ))()
                            },
                            onmessage: function(e) {
                                if ("[DONE]" === e.data)
                                    s.abort(),
                                    n({
                                        finish_reason: "stop"
                                    });
                                else if ("ping" === e.event)
                                    ;
                                else
                                    try {
                                        var t = JSON.parse(e.data);
                                        if (t.error)
                                            throw new y(t.error.message);
                                        n({
                                            message: t.message,
                                            threadId: t.conversation_id
                                        })
                                    } catch (e) {
                                        if ((0,
                                        l.TV)(e))
                                            throw new y(e.userMessage)
                                    }
                            },
                            onerror: function(e) {
                                throw "Failed to fetch" === e.message && (e = new y("An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.")),
                                n({
                                    err: e
                                }),
                                e
                            }
                        }).catch((function(e) {
                            (0,
                            a.Z)(e, m) || (0,
                            a.Z)(e, y) || console.error(e)
                        }
                        )),
                        [2, s]
                    }
                    ))
                }
                ))()
            }
            ,
            e.runModerationApi = function(e, t, n) {
                return this.fetch("".concat("/backend-api", "/moderations"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        input: e,
                        model: "text-moderation-playground",
                        conversation_id: t,
                        message_id: n
                    })
                })
            }
            ,
            e.submitMessageFeedback = function(e) {
                return this.fetch("".concat(T, "/conversation/message_feedback"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify(e)
                })
            }
            ,
            e.submitCheckoutForm = function() {
                return this.fetch("".concat(T, "/payments/checkout"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.fetchCustomerPortalUrl = function(e) {
                return this.fetch("".concat(T, "/payments/customer_portal"), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(e))
                })
            }
            ,
            e.primeCache = function(e, t) {
                var n = "".concat(v.env.INTERNAL_API_URL, "/api");
                return this.fetch("".concat(n, "/accounts/prime_cache"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(t)),
                    body: JSON.stringify({
                        user_id: e
                    })
                })
            }
            ,
            e.getAccountStatus = function(e, t, n) {
                var o = n ? "".concat(v.env.INTERNAL_API_URL, "/api") : T
                  , i = (0,
                r.Z)({
                    "Content-Type": "application/json"
                }, this.getAuthHeader(e));
                if (t) {
                    var a = {}
                      , s = !0
                      , h = !1
                      , u = void 0;
                    try {
                        for (var d, l = Object.entries(t)[Symbol.iterator](); !(s = (d = l.next()).done); s = !0) {
                            var p = (0,
                            c.Z)(d.value, 2)
                              , f = p[0]
                              , g = p[1];
                            A.includes(f.toLowerCase()) && (a[f] = g)
                        }
                    } catch (e) {
                        h = !0,
                        u = e
                    } finally {
                        try {
                            s || null == l.return || l.return()
                        } finally {
                            if (h)
                                throw u
                        }
                    }
                    i = (0,
                    r.Z)({}, a, i)
                }
                return this.fetch("".concat(o, "/accounts/check"), {
                    method: "GET",
                    headers: i
                })
            }
            ,
            e.postAccountStatusWithCustomerSessionId = function(e, t) {
                return this.fetch("".concat(v.env.INTERNAL_API_URL, "/api/payments/checkout_session"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(t)),
                    body: JSON.stringify({
                        stripe_checkout_session_id: e
                    })
                })
            }
            ,
            e.getPlugins = function(e) {
                var t = e.offset
                  , n = e.limit
                  , o = e.isInstalled
                  , i = e.accessToken
                  , a = {
                    offset: t.toString(),
                    limit: n.toString()
                };
                o && (a.is_installed = "true");
                var s = new URLSearchParams(a);
                return this.fetch("".concat(T, "/aip/p?").concat(s), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(i))
                })
            }
            ,
            e.getPluginByDomain = function(e) {
                var t = e.domain
                  , n = e.accessToken
                  , o = new URLSearchParams({
                    offset: "0",
                    limit: "1",
                    domains: t
                });
                return this.fetch("".concat(T, "/aip/p?").concat(o), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                }).then((function(e) {
                    return 0 === e.items.length ? null : e.items[0]
                }
                ))
            }
            ,
            e.setLocalhostPlugin = function(e) {
                var t = e.localhost
                  , n = e.manifest
                  , o = e.openapiSpec
                  , i = e.accessToken;
                return this.fetch("".concat(T, "/aip/lhp"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(i)),
                    body: JSON.stringify({
                        localhost: t,
                        manifest: n,
                        openapi_spec: o
                    })
                })
            }
            ,
            e.scrapePluginManifest = function(e) {
                var t = e.domain
                  , n = e.manifestAccessToken
                  , o = e.accessToken;
                return this.fetch("".concat(T, "/aip/p"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        domain: t,
                        manifest_access_token: n
                    })
                })
            }
            ,
            e.updatePluginUserSettings = function(e) {
                var t = e.pluginId
                  , n = e.isInstalled
                  , o = e.accessToken;
                return this.fetch("".concat(T, "/aip/p/").concat(t, "/user-settings"), {
                    method: "PATCH",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        is_installed: n
                    })
                })
            }
            ,
            e.deletePlugin = function(e) {
                var t = e.id
                  , n = e.accessToken;
                return this.fetch("".concat(T, "/aip/p/").concat(t), {
                    method: "DELETE",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                })
            }
            ,
            e.setPluginUserHttpToken = function(e) {
                var t = e.id
                  , n = e.userAccessToken
                  , o = e.accessToken;
                return this.fetch("".concat(T, "/aip/p/").concat(t, "/user-settings/http-auth"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        access_token: n
                    })
                })
            }
            ,
            e.setPluginServiceHttpToken = function(e) {
                var t = e.id
                  , n = e.serviceAccessToken
                  , o = e.accessToken;
                return this.fetch("".concat(T, "/aip/p/").concat(t, "/http-auth"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        access_token: n
                    })
                })
            }
            ,
            e.setPluginOAuthClientCredentials = function(e) {
                var t = e.id
                  , n = e.clientId
                  , o = e.clientSecret
                  , i = e.accessToken;
                return this.fetch("".concat(T, "/aip/p/").concat(t, "/oauth"), {
                    method: "POST",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(i)),
                    body: JSON.stringify({
                        client_id: n,
                        client_secret: o
                    })
                })
            }
            ,
            e.pluginOauthCallback = function(e, t, n, o) {
                var i = new URLSearchParams({
                    code: t,
                    redirect_uri: n
                });
                return this.fetch("".concat(T, "/aip/p/").concat(e, "/user-settings/oauth/callback?").concat(i), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o))
                })
            }
            ,
            e.getPageMetadata = function(e) {
                var t = e.url;
                return this.fetch("".concat(T, "/opengraph/tags?url=").concat(t), {
                    method: "GET",
                    headers: (0,
                    r.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e
        }();
        _.auth0Client = null;
        var S = _
    }
}]);
//# sourceMappingURL=814-294a281e0bfddba1.4e91da0d.js.map

