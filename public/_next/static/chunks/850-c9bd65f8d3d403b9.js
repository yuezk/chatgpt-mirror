"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[850], {
  68619: function (e, t, n) {
    var r, o, a, s, i, u, l, c, d, f;
    n.d(t, {
      Jq: function () {
        return i
      }, Os: function () {
        return a
      }, uU: function () {
        return s
      }
    }), (u = r || (r = {})).Default = "default", u.Dark = "dark", (l = o || (o = {})).Retrieval = "retrieval", (c = a || (a = {})).Next = "next", c.Variant = "variant", c.Continue = "continue", (d = s || (s = {})).Unknown = "unknown", d.User = "user", d.Assistant = "assistant", d.System = "system", d.Critic = "critic", d.Tool = "tool", (f = i || (i = {})).Root = "root", f.System = "system", f.Prompt = "prompt", f.Completion = "completion"
  }, 86885: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return h
      }
    });
    var r = n(61706), o = n(45813), a = n(35250), s = n(61432), i = n(70079), u = n(48240), l = n(12762), c = n(98943),
      d = n(60814), f = n(66285), p = n(74516), m = n(35e3), g = n(69858), v = n(77507);

    function h(e) {
      var t = e.isOpen, n = e.onClose, h = (0, i.useRef)(null), y = (0, l.WS)(), x = (0, i.useState)(!1), Z = x[0],
        b = x[1], w = (0, s.useRouter)(), C = (0, i.useCallback)(function () {
          y(c.s6.closeAccountPaymentModal), n()
        }, [n, y]), j = (0, i.useCallback)((0, r.Z)(function () {
          var e;
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                b(!0), y(c.s6.clickAccountPaymentCheckout), t.label = 1;
              case 1:
                return t.trys.push([1, 3, 4, 5]), [4, d.ZP.submitCheckoutForm()];
              case 2:
                return e = t.sent(), w.push(e.url), [3, 5];
              case 3:
                return t.sent(), p.m.warning("The payments page encountered an error. Please try again. If the problem continues, please email support@openai.com.", {hasCloseButton: !0}), [3, 5];
              case 4:
                return b(!1), [7];
              case 5:
                return [2]
            }
          })
        }), [w, y, b]), k = (0, i.useCallback)((0, r.Z)(function () {
          var e;
          return (0, o.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                b(!0), y(c.s6.clickAccountCustomerPortal), t.label = 1;
              case 1:
                return t.trys.push([1, 3, 4, 5]), [4, d.ZP.fetchCustomerPortalUrl()];
              case 2:
                return e = t.sent(), w.push(e.url), [3, 5];
              case 3:
                return t.sent(), p.m.warning("The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.", {hasCloseButton: !0}), [3, 5];
              case 4:
                return b(!1), [7];
              case 5:
                return [2]
            }
          })
        }), [w, y, b]), N = (0, f.mA)(function (e) {
          var t;
          return null === (t = e.accountPlan) || void 0 === t ? void 0 : t.hasCustomerObject
        });
      return (0, a.jsxs)(m.x, {
        isOpen: t,
        onClose: n,
        focusRef: h,
        children: [(0, a.jsxs)("div", {
          className: "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
          children: [(0, a.jsx)("span", {
            className: "text-base font-semibold sm:text-base",
            children: "Your Account"
          }), (0, a.jsx)("button", {
            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
            onClick: C,
            children: (0, a.jsx)(u.q5L, {className: "h-6 w-6"})
          })]
        }), (0, a.jsxs)("div", {
          className: "grid sm:grid-cols-2",
          children: [(0, a.jsx)("div", {
            className: "relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",
            children: (0, a.jsx)(g.Oi, {
              rowElements: [(0, a.jsx)(g.Cu, {text: "Free Plan"}, "row-free-plan-name"), (0, a.jsx)(g.hi, {
                variant: "disabled",
                disabled: !0,
                text: v.S.free.callToAction.active
              }, "row-free-plan-button"), (0, a.jsx)(g.G, {
                variant: "secondary",
                text: v.S.free.demandAccess
              }, "row-free-plan-demand"), (0, a.jsx)(g.G, {
                variant: "secondary",
                text: v.S.free.responseSpeed
              }, "row-free-plan-speed"), (0, a.jsx)(g.G, {
                className: "sm:pb-2",
                variant: "secondary",
                text: v.S.free.modelFeatures
              }, "row-free-plan-updates"),]
            })
          }), (0, a.jsx)("div", {
            className: "relative order-1 col-span-1 sm:order-2",
            children: (0, a.jsx)(g.Oi, {
              rowElements: [(0, a.jsx)(g.Cu, {
                text: v.S.plus.name,
                children: (0, a.jsx)("span", {
                  className: "font-semibold text-gray-500",
                  children: v.S.plus.costInDollars
                })
              }, "row-plus-plan-title"), (0, a.jsx)(g.hi, {
                variant: "primary",
                disabled: Z,
                isLoading: Z,
                ref: h,
                onClick: j,
                text: v.S.plus.callToAction.inactivePayment
              }, "row-plus-plan-button"), (0, a.jsx)(g.G, {
                variant: "primary",
                text: v.S.plus.demandAccess
              }, "row-plus-plan-demand"), (0, a.jsx)(g.G, {
                variant: "primary",
                text: v.S.plus.responseSpeed
              }, "row-plus-plan-speed"), (0, a.jsx)(g.G, {
                className: "sm:pb-2",
                variant: "primary",
                text: v.S.plus.modelFeatures
              }, "row-plus-plan-updates"), N && (0, a.jsx)(g.nR, {
                className: "sm:pb-1",
                isLoading: Z,
                text: v.S.manageSubscription.callToAction,
                onClick: k
              }, "row-plus-plan-manage"),]
            })
          })]
        })]
      })
    }
  }, 35e3: function (e, t, n) {
    n.d(t, {
      x: function () {
        return u
      }
    });
    var r = n(14806), o = n(35250), a = n(34303), s = n(73925);

    function i() {
      var e = (0, r.Z)(["flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
      return i = function () {
        return e
      }, e
    }

    var u = function (e) {
      var t = e.children, n = e.isOpen, r = e.onClose, a = e.focusRef;
      return (0, o.jsx)(s.Z, {
        size: "fullscreen",
        isOpen: n,
        onModalClose: r,
        type: "success",
        title: "",
        className: "bg-transparent dark:bg-transparent",
        initialFocusRef: a,
        children: (0, o.jsx)("div", {
          className: "flex h-full flex-col items-center justify-start",
          children: (0, o.jsx)("div", {className: "relative", children: (0, o.jsx)(l, {children: t})})
        })
      })
    }, l = a.Z.div(i())
  }, 69858: function (e, t, n) {
    n.d(t, {
      Cu: function () {
        return m
      }, G: function () {
        return h
      }, Oi: function () {
        return p
      }, hi: function () {
        return v
      }, nR: function () {
        return y
      }
    });
    var r = n(14806), o = n(35250), a = n(19841), s = n(48240), i = n(34303), u = n(39690), l = n(79876);

    function c() {
      var e = (0, r.Z)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
      return c = function () {
        return e
      }, e
    }

    function d() {
      var e = (0, r.Z)(["gap-2 flex flex-row justify-start items-center text-sm"]);
      return d = function () {
        return e
      }, e
    }

    function f() {
      var e = (0, r.Z)(["text-xl font-semibold justify-between items-center flex"]);
      return f = function () {
        return e
      }, e
    }

    var p = function (e) {
      var t = e.rowElements;
      return (0, o.jsx)(x, {
        children: t.map(function (e) {
          return e
        })
      })
    }, m = function (e) {
      var t = e.className, n = e.text, r = e.children;
      return (0, o.jsxs)(b, {className: t, children: [(0, o.jsx)("span", {children: n}), r]})
    }, g = {
      "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
      primary: "border-none py-3 font-semibold",
      disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
    }, v = function (e) {
      var t = e.isLoading, n = e.disabled, r = e.onClick, i = (e.className, e.variant),
        c = void 0 === i ? "primary" : i, d = e.text, f = e.ref;
      return (0, o.jsxs)(u.z, {
        disabled: void 0 !== n && n,
        onClick: r,
        openNewTab: !0,
        ref: f,
        as: "button",
        className: (0, a.Z)(g[c]),
        children: [(0, o.jsx)("span", {
          className: (0, a.Z)({
            "text-gray-700": "primary-disabled" === c,
            "text-white": "primary" === c
          }), children: d
        }), void 0 !== t && t && (0, o.jsx)(l.ZP, {className: "animate-spin", icon: s.dAq})]
      })
    }, h = function (e) {
      var t = e.variant, n = void 0 === t ? "primary" : t, r = e.className, i = e.text;
      return (0, o.jsxs)(Z, {
        className: r,
        children: [(0, o.jsx)(l.ZP, {
          icon: s._rq,
          className: (0, a.Z)("h-5 w-5", {"text-green-700": "primary" == n, "text-gray-400": "secondary" == n})
        }), (0, o.jsx)("span", {children: i})]
      })
    }, y = function (e) {
      var t = e.className, n = e.text, r = e.isLoading, a = e.onClick;
      return (0, o.jsx)(Z, {
        className: t,
        children: (0, o.jsxs)("button", {
          onClick: a,
          className: "flex flex-row items-center space-x-1 underline",
          children: [(0, o.jsx)("span", {children: n}), r && (0, o.jsx)(l.ZP, {className: "animate-spin", icon: s.dAq})]
        })
      })
    }, x = i.Z.div(c()), Z = i.Z.div(d()), b = i.Z.div(f())
  }, 77507: function (e, t, n) {
    n.d(t, {
      S: function () {
        return r
      }
    });
    var r = {
      free: {
        name: "Free Plan",
        callToAction: {active: "Your Current Plan", inactive: "Your Current Plan"},
        costInDollars: "",
        demandAccess: "Available when demand is low",
        responseSpeed: "Standard response speed",
        modelFeatures: "Regular model updates"
      },
      plus: {
        name: "ChatGPT Plus",
        callToAction: {active: "Your current plan", inactive: "I'm Interested", inactivePayment: "Upgrade plan"},
        costInDollars: "USD $20/mo",
        demandAccess: "Available even when demand is high",
        responseSpeed: "Faster response speed",
        modelFeatures: "Priority access to new features"
      },
      manageSubscription: {callToAction: "Manage my subscription"}
    }
  }, 32329: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return m
      }, n: function () {
        return g
      }
    });
    var r = n(87762), o = n(62906), a = n(61432), s = n(70079), i = n(31501), u = n(61079), l = n(89874), c = n(60814),
      d = n(80836), f = n(36613), p = n(74516);

    function m(e) {
      var t = e.threadId, n = e.accessToken, o = (0, a.useRouter)(), m = (0, r.a)(["conversation", t], function () {
        return c.ZP.getConversation(t, n, !1)
      }, {
        enabled: Boolean(t), onError: function () {
          o.replace("/chat"), p.m.danger("Unable to load conversation ".concat(t))
        }
      }), g = m.data, v = m.isLoading, h = (0, s.useMemo)(function () {
        if (!g) return {
          thread: d.Cv.createTree(),
          currentLeafId: "root",
          threadId: null,
          title: "New chat",
          lastModelUsed: null
        };
        var e, t, n, r, a, s, c = (n = null === (t = Object.values(g.mapping).find(function (e) {
          return null === e.parent
        })) || void 0 === t ? void 0 : t.id, r = new Set, a = new Set, (g.moderation_results || []).forEach(function (e) {
          e.blocked ? a.add(e.message_id) : e.flagged && r.add(e.message_id)
        }), {
          rootId: n, mapping: Object.keys(g.mapping).reduce(function (e, t) {
            var n, o = g.mapping[t], s = o.parent, c = o.children, p = (0, l.Z)(o, ["parent", "children"]),
              m = g.mapping[t].message || d.Cv.createRootMessage();
            return a.has(m.id) ? n = f.sK : r.has(m.id) && (n = f.Mf), e[t] = (0, i.Z)((0, u.Z)((0, i.Z)({}, p), {
              message: m,
              children: c || [],
              parentId: s || "",
              type: d.uV[d.Cv.getRoleFromMessage(m)]
            }), n && {metadata: n}), e
          }, {}), currentLeafId: g.current_node
        });
        return {
          thread: c.mapping || d.Cv.createTree(),
          currentLeafId: c.currentLeafId || c.rootId || "root",
          threadId: null === (s = o.query.chatId) || void 0 === s ? void 0 : s[0],
          title: g.title || null,
          lastModelUsed: function e(t, n) {
            var r, o, a = t[n];
            return (null == a ? void 0 : null === (r = a.message) || void 0 === r ? void 0 : null === (o = r.metadata) || void 0 === o ? void 0 : o.model_slug) ? a.message.metadata.model_slug : (null == a ? void 0 : a.parentId) ? e(t, a.parentId) : (console.log("No model found in conversation tree"), null)
          }(c.mapping, c.currentLeafId)
        }
      }, [g, o.query.chatId]);
      return (0, s.useMemo)(function () {
        return {threadData: h, isLoading: Boolean(t && v)}
      }, [v, h, t])
    }

    function g() {
      var e = (0, o.NL)();
      return (0, s.useCallback)(function (t) {
        e.removeQueries(["conversation", t])
      }, [e])
    }
  }, 49690: function (e, t, n) {
    n.d(t, {
      Z: function () {
        return u
      }
    });
    var r = n(70079), o = n(12762), a = n(98943), s = n(82018), i = n(60814);

    function u(e, t, n, u, l, c, d) {
      var f = (0, s.kP)().session, p = (0, o.WS)(u);
      (0, r.useEffect)(function () {
        i.ZP.setAccessToken(n), o.ZP.setUser(t, l, c, d), p(a.s6.pageLoad)
      }, []), (0, r.useEffect)(function () {
        (null == f ? void 0 : f.accessToken) && i.ZP.setAccessToken(f.accessToken), (null == f ? void 0 : f.error) === "RefreshAccessTokenError" && (console.error(f.error), window._oaiHandleSessionExpired("page load", f.error))
      }, [f]), (0, r.useEffect)(function () {
        document.title = e
      }, [e])
    }
  }, 66285: function (e, t, n) {
    n.d(t, {
      hz: function () {
        return c
      }, mA: function () {
        return u
      }, nR: function () {
        return l
      }
    });
    var r = n(31501), o = n(61079), a = n(70079), s = n(59268), i = {lastUpdated: Date.now()},
      u = (0, s.ZP)()(function (e) {
        return (0, o.Z)((0, r.Z)({}, i), {
          resetAccount: function () {
            e(i)
          }, updateAccountPlanWithResponse: function (t) {
            var n, r, o, a, s;
            e({
              accountPlan: {
                hasPaidSubscription: (null == t ? void 0 : null === (n = t.account_plan) || void 0 === n ? void 0 : n.is_paid_subscription_active) || !1,
                subscriptionPlan: (null == t ? void 0 : null === (r = t.account_plan) || void 0 === r ? void 0 : r.subscription_plan) || "chatgptplusfreeplan",
                accountUserRole: (null == t ? void 0 : null === (o = t.account_plan) || void 0 === o ? void 0 : o.account_user_role) || "account-owner",
                wasPaidCustomer: (null == t ? void 0 : null === (a = t.account_plan) || void 0 === a ? void 0 : a.was_paid_customer) || !1,
                hasCustomerObject: (null == t ? void 0 : null === (s = t.account_plan) || void 0 === s ? void 0 : s.has_customer_object) || !1
              }, features: (null == t ? void 0 : t.features) || []
            })
          }
        })
      }), l = function () {
        return u(function (e) {
          var t;
          return null === (t = e.accountPlan) || void 0 === t ? void 0 : t.hasPaidSubscription
        })
      }, c = function () {
        var e = u(function (e) {
          return e.features
        });
        return (0, a.useMemo)(function () {
          return new Set(e)
        }, [e])
      }
  }, 27252: function (e, t, n) {
    n.d(t, {
      g: function () {
        return u
      }
    });
    var r = n(33861), o = n(31501), a = n(61079), s = n(59268),
      i = {flags: {isUserInCanPayGroup: !1, projectWish: !1, highlightPlusUpgrade: !1, failwhaleBypassEnabled: !1}},
      u = (0, s.ZP)()(function (e, t) {
        return (0, a.Z)((0, o.Z)({}, i), {
          updateFlagValue: function (n, s) {
            var i = t().flags;
            e({flags: (0, a.Z)((0, o.Z)({}, i), (0, r.Z)({}, n, s))})
          }
        })
      })
  }, 80836: function (e, t, n) {
    n.d(t, {
      Cv: function () {
        return j
      }, uV: function () {
        return b
      }
    });
    var r, o, a = n(35025), s = n(33468), i = n(37495), u = n(75106), l = n(43905), c = n(33861), d = n(31501),
      f = n(89874), p = n(64705), m = n(25769), g = n(84251), v = n.n(g), h = n(8844), y = n(36613), x = n(68619),
      Z = (r = {}, (0, c.Z)(r, x.Jq.Root, x.uU.Unknown), (0, c.Z)(r, x.Jq.Prompt, x.uU.User), (0, c.Z)(r, x.Jq.Completion, x.uU.Assistant), (0, c.Z)(r, x.Jq.System, x.uU.System), r),
      b = (o = {}, (0, c.Z)(o, x.uU.Unknown, x.Jq.Root), (0, c.Z)(o, x.uU.System, x.Jq.System), (0, c.Z)(o, x.uU.User, x.Jq.Prompt), (0, c.Z)(o, x.uU.Assistant, x.Jq.Completion), (0, c.Z)(o, x.uU.Critic, x.Jq.Completion), (0, c.Z)(o, x.uU.Tool, x.Jq.Completion), o),
      w = new WeakMap, C = new WeakMap, j = function () {
        function e(t) {
          (0, a.Z)(this, e), (0, i.Z)(this, w, {writable: !0, value: void 0}), (0, i.Z)(this, C, {
            writable: !0,
            value: void 0
          }), (0, u.Z)(this, w, t || e.createTree());
          var n = Object.values((0, s.Z)(this, w)).find(function (e) {
            return e.type === x.Jq.Root
          });
          (0, u.Z)(this, C, (null == n ? void 0 : n.id) || "root")
        }

        var t = e.prototype;
        return t.getNode = function (e) {
          return (0, s.Z)(this, w)[e]
        }, t.getMessage = function (e) {
          return (0, s.Z)(this, w)[e].message
        }, t.getMessageId = function (e) {
          return (0, s.Z)(this, w)[e].message.id
        }, t.getMetadata = function (e) {
          return (0, s.Z)(this, w)[e].metadata
        }, t.getLeafFromNode = function (e) {
          for (var t = (0, s.Z)(this, w)[e]; ;) {
            if (0 === t.children.length) return t;
            t = (0, s.Z)(this, w)[t.children.values().next().value]
          }
        }, t.getParent = function (e) {
          var t = (0, s.Z)(this, w)[e].parentId;
          return (0, s.Z)(this, w)[t]
        }, t.getParentId = function (e) {
          var t;
          return (null === (t = this.getParent(e)) || void 0 === t ? void 0 : t.id) || "root"
        }, t.getBranchFromLeaf = function (e) {
          for (var t = [], n = (0, s.Z)(this, w)[e]; t.push(n), "root" !== n.type;) n = (0, s.Z)(this, w)[n.parentId];
          return t.reverse()
        }, t.getChildrenFromNode = function (e) {
          var t = this, n = (0, s.Z)(this, w)[e];
          return n ? Array.from(n.children).map(function (e) {
            return (0, s.Z)(t, w)[e]
          }) : []
        }, t.getFirstPrompt = function () {
          for (var e, t = this.getNode((0, s.Z)(this, C)); ;) {
            if (!t) return;
            if (t.type === x.Jq.Prompt) return t;
            t = (0, s.Z)(this, w)[null === (e = t.children) || void 0 === e ? void 0 : e[0]]
          }
        }, t.isMessageIncomplete = function (t) {
          var n = this.getMessage(t);
          return e.getIsIncompleteFromMessage(n)
        }, t.addNodeToEnd = function (e, t) {
          if (!(0, s.Z)(this, w)[e]) return (0, c.Z)({}, t.id, t);
          (0, u.Z)(this, w, v()((0, s.Z)(this, w), (0, c.Z)({$merge: (0, c.Z)({}, t.id, t)}, e, {
            children: {
              $apply: function (e) {
                return Array.from(new Set((0, p.Z)(e).concat([t.id])))
              }
            }
          })))
        }, t.appendSystemMessageToRoot = function (e) {
          var t, n, r = null === (t = this.getFirstPrompt()) || void 0 === t ? void 0 : t.parentId;
          if (r) {
            var o = this.getNode(r), a = this.getNode(o.children[0]),
              i = {id: e.id, children: o.children, parentId: o.id, message: e};
            (0, u.Z)(this, w, v()((0, s.Z)(this, w), (n = {$merge: (0, c.Z)({}, i.id, i)}, (0, c.Z)(n, o.id, {children: {$set: [i.id]}}), (0, c.Z)(n, a.id, {parentId: {$set: i.id}}), n)))
          }
        }, t.addNode = function (e, t, n, r, o) {
          var a = "string" == typeof t ? {
            id: (0, h.Z)(),
            author: {role: Z[r]},
            role: Z[r],
            content: {content_type: "text", parts: [t]}
          } : t, s = (0, d.Z)({id: e, children: [], parentId: n, type: r, message: a}, o ? {metadata: o} : {});
          this.addNodeToEnd(n, s)
        }, t.updateNode = function (e, t) {
          (0, u.Z)(this, w, v()((0, s.Z)(this, w), (0, c.Z)({}, e, t)))
        }, t.updateNodeMessage = function (e, t) {
          (0, u.Z)(this, w, v()((0, s.Z)(this, w), (0, c.Z)({}, e, {message: {$set: t}})))
        }, t.updateNodeText = function (e, t) {
          (0, u.Z)(this, w, v()((0, s.Z)(this, w), (0, c.Z)({}, e, {message: {content: {parts: {$set: [t]}}}})))
        }, t.deleteNode = function (e) {
          var t = (0, s.Z)(this, w), n = t[e], r = (0, f.Z)(t, [e].map(m.Z)), o = n.parentId;
          (0, u.Z)(this, w, v()(r, (0, c.Z)({}, o, {
            children: {
              $apply: function (t) {
                return t.filter(function (t) {
                  return t !== e
                })
              }
            }
          })))
        }, t.getTextFromNode = function (t) {
          return e.getTextFromMessage(this.getMessage(t))
        }, t.getIsBlockedFromNode = function (e) {
          var t, n, r = this.getNode(e);
          return r && (null === (t = r.metadata) || void 0 === t ? void 0 : t.errCode) === y.Dd && (null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "danger"
        }, t.getTextFromThread = function (t) {
          return this.getBranchFromLeaf(t).filter(function (e) {
            return e.type !== x.Jq.Root && e.type !== x.Jq.System
          }).map(function (t) {
            return e.getTextFromMessage(t.message)
          }).join("\n\n")
        }, t.getTextFromLastNTurns = function (t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = function (t) {
            // fix the bug by Yvling
            var n = t.message, r = e.getMessageType(n), o = "assistant" === x.uU.System;
            return o || a && !("code" === r || "execution_output" === r || "system_error" === r)
          };
          return this.getConversationTurns(t, o).slice(-n).map(function (t) {
            var n = t.messages.map(function (t) {
              return e.getTextFromMessage(t.message)
            }).filter(function (e) {
              return "" !== e
            }).join("\n");
            return r ? "[".concat(t.role, "]\n").concat(n) : n
          }).join("\n")
        }, t.getConversationTurns = function (t, n) {
          var r = this, o = [];
          return this.getBranchFromLeaf(t).forEach(function (t) {
            var a = t.id, i = t.parentId, u = t.message, l = t.metadata;
            if (null == n || !n(t)) {
              var c = o[o.length - 1];
              (null == c ? void 0 : c.role) === e.getRoleFromMessage(u) || e.getRoleFromMessage(u) === x.uU.Tool ? o[o.length - 1].messages.push((0, d.Z)({
                nodeId: a,
                parentId: i,
                message: u
              }, l)) : o.push({
                role: e.getRoleFromMessage(u),
                messages: [(0, d.Z)({nodeId: a, parentId: i, message: u}, l),],
                variantIds: i ? Array.from((0, s.Z)(r, w)[i].children) : [a]
              })
            }
          }), o
        }, t.getParentPromptNode = function (e) {
          for (var t, n, r = this.getNode(e); r && r && (null === (t = r.message) || void 0 === t ? void 0 : null === (n = t.author) || void 0 === n ? void 0 : n.role) !== x.uU.User;) r = this.getNode(r.parentId);
          return r
        }, e.createTree = function () {
          return {root: {id: "root", children: [], parentId: "", type: x.Jq.Root, message: e.createRootMessage()}}
        }, e.createRootMessage = function () {
          return {
            id: (0, h.Z)(),
            author: {role: Z[x.Jq.Root]},
            role: Z[x.Jq.Root],
            content: {content_type: "text", parts: []}
          }
        }, e.getIsIncompleteFromMessage = function (e) {
          var t, n;
          return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "max_tokens"
        }, e.getWasInterruptedFromMessage = function (e) {
          var t, n;
          return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "interrupted"
        }, e.getIsContinuedFromMessage = function (e) {
          var t;
          return (null === (t = e.metadata) || void 0 === t ? void 0 : t.message_type) === "continue"
        }, e.getModelFromMessage = function (e) {
          var t;
          return null === (t = e.metadata) || void 0 === t ? void 0 : t.model_slug
        }, e.getTextFromMessage = function (e) {
          if (e.content.content_type.startsWith("tether_b")) return e.content.text;
          switch (e.content.content_type) {
            case"text":
              return e.content.parts.join("");
            case"code":
            case"execution_output":
            case"system_error":
              return e.content.text;
            case"system_message":
              var t = e.content.text, n = !0, r = !1, o = void 0;
              try {
                for (var a, s = Object.values(e.content.tools_section)[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                  var i = a.value;
                  t += "\n\n".concat(i)
                }
              } catch (u) {
                r = !0, o = u
              } finally {
                try {
                  n || null == s.return || s.return()
                } finally {
                  if (r) throw o
                }
              }
              return t;
            default:
              return ""
          }
        }, e.getMessageType = function (e) {
          return e.content.content_type
        }, e.getIsTextTypeFromMessage = function (t) {
          return "text" === e.getMessageType(t)
        }, e.getRequestIdFromConversationTurn = function (e) {
          var t = e.messages[e.messages.length - 1];
          return this.getIsContinuedFromMessage(t.message) ? t.nodeId : e.messages[0].nodeId
        }, e.getRoleFromMessage = function (e) {
          var t;
          return (null === (t = e.author) || void 0 === t ? void 0 : t.role) || e.role
        }, e.getNameFromMessage = function (e) {
          var t, n;
          return (null === (t = e.author) || void 0 === t ? void 0 : t.name) || (null === (n = e.author) || void 0 === n ? void 0 : n.role) || e.role
        }, e.getRecipientFromMessage = function (e) {
          return e.recipient || ""
        }, (0, l.Z)(e, [{
          key: "isFirstCompletion", get: function () {
            var e = this.getFirstPrompt();
            if (e) {
              var t = (0, s.Z)(this, w)[e.children[0]];
              if (t && 0 === t.children.length) return !0
            }
            return !1
          }
        }]), e
      }()
  }, 82018: function (e, t, n) {
    n.d(t, {
      kP: function () {
        return f
      }, w7: function () {
        return l
      }
    });
    var r = n(61706), o = n(31501), a = n(45813), s = n(87762), i = n(44928), u = n(61432);

    function l(e) {
      (0, i.signOut)((0, o.Z)({callbackUrl: window.location.origin + "/api/auth/logout"}, e))
    }

    function c() {
      return d.apply(this, arguments)
    }

    function d() {
      return (d = (0, r.Z)(function () {
        var e, t;
        return (0, a.__generator)(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, Promise.resolve()];
            case 1:
              return [4, e.sent().json()];
            case 2:
              if (Object.keys(t = e.sent()).length) return [2, t];
              return [2, null]
          }
        })
      })).apply(this, arguments)
    }

    function f(e) {
      var t = e || {}, n = t.required, r = t.redirectTo, o = t.queryConfig, a = (0, u.useRouter)(),
        i = (0, s.a)(["session"], c, {
          onSettled: function (e, t) {
            (null == o ? void 0 : o.onSettled) && (null == o || o.onSettled(e, t)), !e && n && a.push(r)
          }
        });
      return {session: (null == i ? void 0 : i.data) || null, loading: (null == i ? void 0 : i.status) === "loading"}
    }
  }, 36613: function (e, t, n) {
    n.d(t, {
      Dd: function () {
        return s
      }, Mf: function () {
        return i
      }, _I: function () {
        return l
      }, sK: function () {
        return u
      }
    });
    var r = n(95182), o = n.n(r), a = n(60814), s = "content_policy", i = {errType: "warning", errCode: s},
      u = {err: "Contents may violate our content policy", errType: "danger", errCode: s};

    function l(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0,
        s = o()(e.length, 0, 4e3), i = o()(e.length - s, 0, e.length - 1), u = t ? e.substring(i, e.length) : e;
      return u ? a.ZP.runModerationApi(u, n, r).then(function (e) {
        var t, n;
        return {isBlocked: Boolean(e.blocked), isFlagged: Boolean(e.flagged)}
      }).catch(function (e) {
        return console.error(e), {isBlocked: !1, isFlagged: !1, error: e}
      }) : Promise.resolve({isBlocked: !1, isFlagged: !1})
    }
  }
}]);
